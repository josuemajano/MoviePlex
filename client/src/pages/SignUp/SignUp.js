import React from 'react';
import './signup.css'

export default function SignUp() {

    return (
        <div className="wrapper">

            <div className="bg-login">
                <div className="body">
                    <h2 className="title">Sign Up</h2>
                        <div className="columns is-centered">
                            <div className="column">
                                <div className="notification">
                                    <div className="field">
                                        <label className="label">Email</label>
                                            <p className="control has-icons-left">
                                                <input className="input" type="email" placeholder="Email" />
                                            
                                            </p>
                                    </div>
                                    <div className="field">
                                        <label className="label has-text-left">First Name</label>
                                            <p className="control has-icons-left has-icons-right">
                                                <input className="input" type="text" placeholder="First name" />
                                              
                                            </p>
                                    </div>
                                    <div className="field">
                                        <label className="label has-text-left">Last Name</label>
                                            <p className="control">
                                                <input className="input" type="text" placeholder="Last name" />
                                               
                                            </p>
                                    </div>
                                     <a className="button" href="/">Sign Up</a>
                                    </div>
                                </div>
                             </div>
                         </div>
                </div>
        </div>
    )
}