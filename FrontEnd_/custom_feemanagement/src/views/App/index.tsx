import React from "react";
import TestView from "../TestView";
import StudentRegistrationForm from "../StudentRegistrationForm";
import LoginForm from "../LoginForm";

const App = () => {
  const message="Hello Frontend_Child"
  return(
  <>
    <TestView message_P={message}/>
    <LoginForm/>
    <StudentRegistrationForm/>
  </>
  )
};

export default App;

//TO DO
//Routing Changes
//Authentication changes