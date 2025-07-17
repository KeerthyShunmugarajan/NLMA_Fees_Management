import React, { useState } from "react";



const LoginForm = () => {
    const userLogin = [{ id: 1, name: "Keerthy", password: "keerthy", role: "Admin" },
    { id: 2, name: "Senthil", password: "Senthil_Admin", role: "Admin" },
    { id: 3, name: "User_2", password: "User_2", role: "Accountant" },
    { id: 4, name: "User_3", password: "User_3", role: "Viewer" }
    ];
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const validateUser = () => {
        //get data on submit and validate the data from the array or db
        setUserName(userName);
        setPassword(password);
        const existingUser = userLogin.find(user => user.name === userName && user.password === password)
        if (existingUser) {
            alert("match found");
        }
        else {
            alert("No data found");
        }

    };
    return (
        <>
            <div>
                <h1>LOGIN FORM</h1>
            </div>
            <form>
                <div>
                    <label>User Name:</label> <input type="text" placeholder="username"
                        value={userName} onChange={(e) => setUserName(e.target.value)} ></input>
                </div>
                <div>
                    <label>Password:</label> <input type="text" placeholder="password"
                        value={password} onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                <button type="button" onClick={validateUser}>Submit </button>
            </form>

        </>);

}
export default LoginForm
