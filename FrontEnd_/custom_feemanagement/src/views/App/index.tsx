import React from "react";
import TestView from "../TestView";
import StudentRegistrationForm from "../StudentRegistrationForm";

const App = () => {
  const message="Hello Frontend_Child"
  return(
  <>
    <TestView message_P={message}/>

    <StudentRegistrationForm/>
  </>
  )
};

export default App;

//TO DO
//Routing Changes
//Authentication changes