import React from 'react'
import "./login.css";
import Topbar from "../../components/topbar/Topbar";
function Login() {
    return (
        <>
             <Topbar />
            <div className="main1">
                <div className="card">
                    <div className="form-container login-form">
                        <span class="text">Sign in to our platform</span> <br />
                        Login here using your Email and Password
                        <form>
                            <input className="input2" type="email" placeholder="Email"/><br />
                            <input className="input2" type="password" placeholder="Password" /><br /><br />
                                <label className="text3">
                                    <span className="text2"> Forgot Password? </span><br />
                                    <span className="div-flip">New user? Register here</span>
                                </label>
                            <input className="input2 sign" type="submit" value="Sign In" />
                    </form>
                </div>
             </div>
        </div>
        </>
);
}
                export default Login;