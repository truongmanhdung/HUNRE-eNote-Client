import React from 'react'
import PropTypes from 'prop-types';
import './styles/index.css';
import {
    Link
} from "react-router-dom";

function Login(props) {
    return <div className="login">
    <div className="row">
        <div className="col-6">
            <div className="form-login">
                <div style={{display: 'flex'}}>
                    <h1>Login</h1>
                </div>
                <div className="form">
                    <p className="or-sign-in-email">---------- or sign in with email ----------</p>
                    <b>Account:</b>
                    <input type="text" placeholder="Username or your email" />
                    <b>Password:</b>
                    <input type="password" placeholder="your password"/>
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
                    <a href="/home">
                        <button className="button-login">Login</button>
                    </a>
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

