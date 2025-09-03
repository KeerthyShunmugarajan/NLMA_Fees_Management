import React, { useState } from "react";
import authenticateUser from "../../service/AuthenticationService";
import './loginForm.css';
import { FaUser, FaLock } from 'react-icons/fa';
import { AuthenticateResponse } from "../../models/common.models";
import { useNavigate } from "react-router-dom";
import logo from '../../../assets/logos/schoollogo.png';

const LoginForm = () => {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const validateUser = async () => {
        try {
            const response: AuthenticateResponse = await authenticateUser({ userName, password });
            console.log(response);
            if (response?.isAuthenticUser) {
                console.log("Login successful:", response.message);
                navigate('/headerTab');// need to find a way to fit dynamic url
            }
            else {
                alert(response.message);
            }
        }
        catch (error) {
            console.error("Error during login:", error);
            alert("Something went wrong. Please try again later.");
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
                        <img className="login-header-img" src={logo} alt="logo"></img>
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
