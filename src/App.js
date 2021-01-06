import React from "react";
import "./App.css";
import Homepage from "./pages/homepage/homepage.component";
import Shoppage from "./pages/shoppage/shoppage.component";
import SignInSignUpPage from "./pages/sign-in-sign-up/signInSignUp.component";
import Header from "./components/header/header.component";
//import logo from './logo192.png';
import { Route, Switch } from "react-router-dom";
import {
  auth,
  createUserProfileDocument,
} from "../src/firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }
  unMountUser = null;
  componentDidMount() {
    this.unMountUser = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
            console.log(snapShot.data())
          
          this.setState(
            {
              currentUser: {
                id: snapShot.id,
                ...snapShot.data()
              },
            },
            () => {
              console.log(this.state);
            }
          );
        });
        //this.setState({ currentUser: user });
        //console.log(user);
      }
      this.setState({ currentUser: userAuth });
    });
  }
  componentWillUnmount() {
    this.unMountUser();
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={Shoppage} />
          <Route exact path="/signin" component={SignInSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
