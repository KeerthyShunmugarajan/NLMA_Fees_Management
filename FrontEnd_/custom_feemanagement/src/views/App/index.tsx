import React from "react";
import TestView from "../TestView";
import StudentRegistrationForm from "../StudentRegistrationForm";
import LoginForm from "../LoginForm";
import { Routes, Route, Navigate } from "react-router-dom";
import HeaderTab from "../HeaderTab";
import StudentDetailsForm from "../StudentDetailsForm";

const App = () => {
  const message = "Hello Frontend_Child"
  return (

    <Routes>
      <Route path="/" element={<Navigate to='/login'></Navigate>} />
       <Route path="/login" element={<LoginForm />} />
      <Route path="/testPage" element={<TestView message_Parent={message} />} />
      <Route path="/headerTab" element={<HeaderTab/>}/>
      <Route path="/students/newStudentRegistration" element={<StudentRegistrationForm />}  />
      <Route path="/students/:id/edit" element={<StudentRegistrationForm />} />
     
      <Route path="/studentDetails" element={<StudentDetailsForm/>}/>
    </Routes>

  )
};

export default App;

//TO DO
//Routing Changes
//Authentication changes