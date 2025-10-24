import React from "react";
import TestView from "../TestView";
import StudentRegistrationForm from "../StudentRegistrationForm";
import LoginForm from "../LoginForm";
import { Routes, Route } from "react-router-dom";
import HeaderTab from "../HeaderTab";
import StudentDetailsForm from "../StudentDetailsForm";

const App = () => {
  console.log("NODE_ENV:", process.env.NODE_ENV);
  // console.log("BASE_URL:", process.env.BASE_URL);
  const message = "Hello Frontend_Child"
  return (

    <Routes>
      <Route path="/" element={<LoginForm />} />

      {/* <Route path="/" element={<Navigate to='/login'></Navigate>} /> */}
      <Route path="/login" element={<LoginForm />} />
      <Route path="/testPage" element={<TestView message_Parent={message} />} />
      <Route path="/headerTab" element={<HeaderTab />} />
      <Route path="/students/newStudentRegistration" element={<StudentRegistrationForm />} />
      <Route path="/students/:id/edit" element={<StudentRegistrationForm />} />

      <Route path="/studentDetails" element={<StudentDetailsForm />} />
    </Routes>

  )
};

export default App;

//TO DO
//Routing Changes
//Authentication changes