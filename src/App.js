import React from "react";
import "./App.css";
import Homepage from "./pages/homepage/homepage.component";
import Shoppage from "./pages/shoppage/shoppage.component";
import SignInSignUpPage from "./pages/sign-in-sign-up/signInSignUp.component";
import Header from "./components/header/header.component";
//import logo from './logo192.png';
import { Route, Switch, Redirect } from "react-router-dom";
import {
  auth,
  createUserProfileDocument,
} from "../src/firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user-actions";
import { currentUserSelector } from "./redux/user/user-selectors";
import { createStructuredSelector } from "reselect";
import CheckoutPage from "./pages/checkout/checkout.component";

class App extends React.Component {
  unMountUser = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unMountUser = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          console.log(snapShot.data());

          setCurrentUser(
            {
              id: snapShot.id,
              ...snapShot.data(),
            },
            () => {
              console.log(this.state);
            }
          );
        });
        //this.setState({ currentUser: user });
        //console.log(user);
      }
      //this.setState({ currentUser: userAuth });
      setCurrentUser(userAuth);
    });
  }
  componentWillUnmount() {
    this.unMountUser();
  }
  render() {
    return (
      <div>
        {/* <Header currentUser={currentUser} /> */}
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={Shoppage} />
          <Route path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: currentUserSelector
});
//provide action creators to your component
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
