import React from "react";
import SignInComponent from "../../components/sign-in/sign-in.component";
import SignUpComponent from "../../components/sign-up/sign-up.component";
import "./signInSignUp.styles.scss";
const SignInSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    <SignInComponent></SignInComponent>
    <SignUpComponent></SignUpComponent>
  </div>
);

export default SignInSignUpPage;
