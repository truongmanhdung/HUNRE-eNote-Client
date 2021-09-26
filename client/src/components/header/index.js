import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style/index.css';
import { FaAdjust } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
const Header = (props) => {
  const [isBox, setShowBox] = useState(false);
  const showbox = () => {
    setShowBox(!isBox);
  };
  const path = useLocation().pathname;
  const params = path.slice(11, path.length);
  const showContentRoute = () => {
    if (params === 'thong-bao') {return 'Thông báo';}
    else if (params === 'diem-danh') {return 'Điểm danh';}
    else if (params === 'lich-hoc') {return 'Lịch học';}
    else if (params === 'diem') {return 'Điểm';}
    else if (params === 'khen-thuong-va-ky-luat') {return 'Khen thưởng/Kỷ luật';}
    else if (params === 'hoc-phi') {return 'Học phí';}
    else if (params === 'dich-vu-truc-tuyen') {return 'Dịch vụ trực tuyến';}
    else if (params === 'sms') {return 'SMS';}
  };
  return (
    <div>
      <div className="header">
        <div className="text-end">
          <div className="header-login">
            <FaAdjust size={18} className="header-icon-item" />
            <p
              onClick={showbox}
              className={
                isBox ? 'header-user header-user-focus' : 'header-user'
              }
            >
              <span className="span-hello">Xin chào,</span>
              <span className="user-name">Dũng</span>
            </p>
          </div>
        </div>
        {isBox ? (
          <div className={isBox ? 'box-profile box-transform' : 'box-profile'}>
            <div className="box-user">
              <p>Trương Mạnh Dũng</p>
            </div>
            <div className="box-profile-content">
              <Link className="link-profile" to="/sinh-vien/ho-so-ca-nhan">
                <div className="d-flex">
                  <i
                    className="fas fa-address-card"
                    style={{ fontSize: 24 }}
                  ></i>
                  <div className="profile-content">
                    <p>Hồ sơ cá nhân</p>
                    <p>Thông tin cá nhân</p>
                  </div>
                </div>
                <i className="fas fa-angle-right"></i>
              </Link>
            </div>
            <div className="profile-logout">
              <p>Đăng xuất</p>
            </div>
          </div>
        ) : null}
      </div>
      <div className="header-bottom">
        <p>
          <span className="header-bottom-span">{showContentRoute()}</span>
          <i className="fas fa-box"></i>
        </p>
      </div>
    </div>
  );
};

Header.propTypes = {};

export default Header;
