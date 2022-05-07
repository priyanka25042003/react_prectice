import React, { useState } from 'react'
import { isTemplateExpression } from 'typescript';

function Login() {
    const [user, setUser] = useState("");
    const [password, setpassword] = useState("");
    const [userErr, setUserErr] = useState(false);
    const [passErr, setpassErr] = useState(false);

    function loginHandle(e: any) {
        if(user.length<3 || password.length<3)
        {
            alert("type correct values")
        }
        else{
            alert("all Good:")
        }
        e.preventDefault()
    }
    function userHandler(e: any) {
        let item = e.target.value;
        if (item.length < 3) {
            setUserErr(true)
        }
        else {
            setUserErr(false)
        }
       setUser(item)
    }
    function passwordHandler(e: any) {
        let item = e.target.value;
        if (item.length < 3) {
            setpassErr(true)
        }
        else {
            setpassErr(false)
        }
        setpassword(item)
    }
    return (
        <div >
            <h1>Login</h1>
            <form onSubmit={loginHandle}>
                <input type="text" placeholder="Enter User Id" onChange={userHandler} />{userErr ? <span>User not valid</span> : ""}
                <br /> <br />
                <input type="password" placeholder="Enter User Password"  onChange={passwordHandler} />{passErr?<span>passwoed not valid</span> : ""}
                <br /> <br />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}
export default Login;