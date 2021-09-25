import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './styles/index.css';
import axios from "axios";

function Login(props) {
    const email = React.createRef();
    const password = React.createRef();

    useEffect(() => {
        
    },[])

    const Login = () => {
        fetch("http://localhost:8866/api/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                "studentID": email.current.value,
                "password": password.current.value
              })
        }).then((response) => {
            console.log(response);
        }).catch((err) => {
            console.log(err);
        })
        debugger;
    }

    return <div className="login">
    <div className="row">
        <div className="col-6">
            <div className="form-login">
                <div style={{display: 'flex'}}>
                    <h1>Login</h1>
                </div>
                <div className="form">
                    <b>Account:</b>
                    <input type="text" placeholder="Username or your email" ref={email}/>
                    <b>Password:</b>
                    <input type="password" placeholder="your password" ref={password}/>
                    {/* <div><input type="checkbox"/> <p>Remember me</p></div> */}
                    <div>
                        <input className="inp-cbu" id="rememberAccount" type="checkbox" value="rememberAccount" name='levelai' />
                        <label className="cbu" for="rememberAccount"><span>
                            <svg width="12px" height="9px" viewbox="0 0 12 9">
                                <polyline points="1 5 4 8 11 1"></polyline>
                            </svg></span>
                        </label>
                        <span>Remember me</span>
                    </div>
                        <button className="button-login" onClick={Login}>Login</button>
                </div>
            </div>
        </div>
        <div className="col-6 login-img"></div>
    </div>
</div>
}

Login.propTypes = {

}

export default Login

