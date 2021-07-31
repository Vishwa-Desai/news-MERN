import React from 'react'
import "./sign_up.css";
import Topbar from "../../components/topbar/Topbar";
export default function Signup() {
    return (
        <>
            <Topbar />
            <div className="main1">
                <div className="form-container registration-form">
                    <span className="text">Sign up to our platform</span> <br />
                    Register here by filling this.
                    <form className="form">
                        <input className="input1" type="text" placeholder="Profile Name" /> <br />
                        <input className="input1"type="email" placeholder="Email" /> <br />
                        <input className="input1" type="password" placeholder="Password" /> <br />
                        <input className="input1" type="password" placeholder="Confirm Password" /><br />
                        <input className="input1" type="text" placeholder="Location" /><br /><br />
                        <label className="text3">
                            <span className="text2"> Already a user? </span><br />
                            <span className="div-flip">Login here</span>
                        </label>
                        <input className="input1 sign" type="submit" value="Sign Up" />
                    </form>
                </div>
            </div>
        </>
    );
}