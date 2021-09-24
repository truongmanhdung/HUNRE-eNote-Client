import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './styles/index.css';
import { Link } from 'react-router-dom';
import logo from './styles/images/logo.png';

function Login(props) {
  const [idStudent, setidStudent] = useState('');
  const [passWord, setpassWord] = useState('');
  useEffect(() => {
      
  }, [])
  const onChangeIdStudent = (e) => {
    setidStudent(e.target.value);
  };
  const onChangePassword = (e) => {
    setpassWord(e.target.value);
  };
  const onSaveForm = () => {
      const student = {
        studentID: idStudent,
        password: passWord
      }
    fetch("http://localhost:8866/api/login",
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(student),
    }).then((response) =>console.log(response.data)).catch((error) => console.log(error))
  }
  
  return (
    <div className="login">
      <div className="row">
        <div className="col-6">
          {/*<div className='social'>
                        <img src={logo} alt="" />   
                    </div>*/}
          <div className="form-login">
            <div style={{ display: 'flex' }}>
              <h1>Đăng Nhập</h1>
            </div>
            <div className="form">
              <b>Tài Khoản</b>
              <input
                type="text"
                placeholder="Nhập tài khoản"
                onChange={onChangeIdStudent}
              />
              <b>Mật Khẩu</b>
              <input
                type="password"
                onChange={onChangePassword}
                placeholder="Nhập mật khẩu"
              />
              {/* <div><input type="checkbox"/> <p>Remember me</p></div> */}
              <div style={{ marginBottom: 10 }}>
                <input
                  className="inp-cbu"
                  id="rememberAccount"
                  type="checkbox"
                  value="rememberAccount"
                  name="levelai"
                />
                <label className="cbu">
                  <span>
                    <svg width="12px" height="9px">
                      <polyline points="1 5 4 8 11 1"></polyline>
                    </svg>
                  </span>
                </label>
                <span>Ghi nhớ đăng nhập</span>
              </div>
              <button onClick={onSaveForm} className="button-login">
                Đăng Nhập
              </button>
            </div>
          </div>
        </div>
        <div className="col-6 login-img"></div>
      </div>
    </div>
  );
}

Login.propTypes = {};

export default Login;
