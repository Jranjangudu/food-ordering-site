import React from 'react'
import {Link} from "react-router-dom"
import "./login.css"

const Login = () => {
    return (
        <div className="login-parent container">
            <div className="login-div">
            <div className="logo-area">
            
                </div> 
            <div className="title">Login your Accound</div>

            <div className="fields">
                <div className="username">
                    <input type="username" className="user-input" placeholder="username" />
                </div>
                <div className="password">
                    
                    <input type="password" className="pass-input" placeholder="**********"/>
                </div>
            </div>
            <button className="signin-button">Login</button>
           <div className="link">
               Don't have an account ?<Link to="/register">Sign up</Link>
           </div>
        </div>
        </div>
    )
}

export default Login
