import React, { useState } from "react";
import authenticateUser  from "../../service/AuthenticationService";
import  './loginForm.css';
import { FaUser, FaLock } from 'react-icons/fa';
import { AuthenticateResponse } from "../../models/common.models";
import { useNavigate } from "react-router-dom";
import logo from '../../../assets/logos/schoollogo.png';
//const logo = require('../../../assets/logos/schoollogo.png');






const LoginForm = () => {
    //const userLogin = [{ id: 1, name: "Keerthy", password: "keerthy", role: "Admin" },
  //  { id: 2, name: "Senthil", password: "Senthil_Admin", role: "Admin" },
    //{ id: 3, name: "User_2", password: "User_2", role: "Accountant" },
   // { id: 4, name: "User_3", password: "User_3", role: "Viewer" }
   // ];
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const navigate=useNavigate();

    const  validateUser = async () => {
        //get data on submit and validate the data from the array or db
      //  setUserName(userName);
       // setPassword(password);
      //  const existingUser = userLogin.find(user => user.name === userName && user.password === password)
        //if (existingUser) {
        //    alert("match found");
       // }
       // else {
       //     alert("No data found");
      //  }
      const response:AuthenticateResponse = await authenticateUser({userName,password});
      console.log(response);
        if(response?.isAuthenticUser){
         console.log(response.message);
    
   
    //navigate('/studentregistration');
    navigate('/headerTab');
}
else
{
alert(response.message); 
}
    };
    return (
        <div className="login-page">
        <header className="login-header-top">
                <h1>NEW LIFE MATRICULATION ACADEMY</h1>
         </header>
        <div className="login-container">
          
            <form>
                <div className="login-header">
                    <img className="login-header-img" src={logo}  alt="logo"></img> 
                 <h2 className="login-title">NLMA LOGIN PORTAL</h2>
                </div>
                <div className="input-group"> 
                    <FaUser className="login-icons"></FaUser>
                    <input className="login-input" type="text" placeholder="username"
                        value={userName} onChange={(e) => setUserName(e.target.value)} ></input>
                </div>
                <div className="input-group">
                    <FaLock className="login-icons"></FaLock>
                     <input className="login-input" type="password" placeholder="password"
                        value={password} onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                <button className="login-button" type="button" onClick={validateUser}>Login </button>
            </form>

        </div>
    </div>
    );

}
export default LoginForm
