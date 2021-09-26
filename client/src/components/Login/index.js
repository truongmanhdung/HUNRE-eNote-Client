import React, {useState} from 'react'
import './styles/index.css';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {loginSuccess} from "../../redux/login/loginSlice";
import {postLogin} from "../../apis/authApi";

function Login(props) {
    const [username, setUserName] = useState('');
    const [password, setPassWord] = useState('');
    const onLogin = (e) => {
        e.preventDefault();
        const user = {studentId: username, password: password}
        console.log(user)
    }
    return <div className="login">
        <div className="row">
            <div className="col-6">
                {/*<div className='social'>
                        <img src={logo} alt="" />
                    </div>*/}
                <div className="form-login">
                    <div style={{display: 'flex'}}>
                        <h1>Đăng Nhập</h1>
                    </div>
                    <form className="form" onSubmit={onLogin}>
                        <b>Tài Khoản</b>
                        <input type="text" placeholder="Nhập tài khoản" onChange={e => setUserName(e.target.value)}
                               name="username"/>
                        <b>Mật Khẩu</b>
                        <input type="password" name="password" onChange={e => setPassWord(e.target.value)}
                               placeholder="Nhập mật khẩu"/>
                        {/* <div><input type="checkbox"/> <p>Remember me</p></div> */}
                        <div style={{marginBottom: 10}}>
                            <input className="inp-cbu" id="rememberAccount" type="checkbox" value="rememberAccount"
                                   name='levelai'/>
                            <label className="cbu"><span>
                                    <svg width="12px" height="9px">
                                        <polyline points="1 5 4 8 11 1"></polyline>
                                    </svg></span>
                            </label>
                            <span>Ghi nhớ đăng nhập</span>
                        </div>
                        <button type="submit" className="button-login">Đăng Nhập</button>
                    </form>
                </div>
            </div>
            <div className="col-6 login-img"></div>
        </div>
    </div>
}

Login.propTypes = {}

export default Login