import React from "react";
import TestView from "../TestView";
import StudentRegistrationForm from "../StudentRegistrationForm";
import LoginForm from "../LoginForm";
import { Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  const message = "Hello Frontend_Child"
  return (

    <Routes>
      <Route path="/" element={<Navigate to='/login'></Navigate>} />
      <Route path="/testPage" element={<TestView message_Parent={message} />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/studentregistration" element={<StudentRegistrationForm />} />
    </Routes>

  )
};

export default App;

//TO DO
//Routing Changes
//Authentication changes