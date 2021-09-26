import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style/index.css';
import {
  AiOutlineDoubleLeft,
  AiOutlineGlobal,
  AiOutlineDoubleRight,
  AiOutlineCheck,
  AiOutlinePicLeft,
  AiFillRead,
  AiFillHeart,
  AiFillCreditCard,
  AiFillPhone,
} from 'react-icons/ai';
import { IoMdNotifications } from 'react-icons/io';
function Navbar(props) {
  const [isIcon, setisIcon] = useState(true);

  const ClickIconNavbar = () => {
    setisIcon(!isIcon);
  };

  return (
    <div className={isIcon? "navbar " : "navbar navbar-active"}>
      {isIcon ? ( <div className="logo d-flex">
        <h1>D2T Team</h1>
        {isIcon ? <AiOutlineDoubleLeft onClick={ClickIconNavbar} /> : <AiOutlineDoubleRight onClick={ClickIconNavbar} />}
      </div>):  <div className="logo d-flex">
        {isIcon ? <AiOutlineDoubleLeft onClick={ClickIconNavbar} /> : <AiOutlineDoubleRight onClick={ClickIconNavbar} />}
      </div>}
      <ul className={isIcon ? 'navbar-list' : 'navbar-list list-active'}>
        <li className="navbar-item">
          <Link to="/sinh-vien/thong-bao" name="thông báo" className="align-items-navbar">
            <span className={isIcon ? "navbar-icon" : "navbar-icon navbar-icon-active"}>
              <IoMdNotifications size={20} className="navbar-icon-item" />
            </span>
            <span className={isIcon? 'navbar-content' : 'navbar-content active_navbar'}>Thông báo và tin tức</span>
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/sinh-vien/diem-danh" name="sinh viên" className="align-items-navbar">
            <span className={isIcon ? "navbar-icon" : "navbar-icon navbar-icon-active"}>
              <AiOutlineCheck size={20} className="navbar-icon-item" />
            </span>
            <span className={isIcon? 'navbar-content' : 'navbar-content active_navbar'}>Điểm danh</span>
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/sinh-vien/lich-hoc" className="align-items-navbar">
            <span className={isIcon ? "navbar-icon" : "navbar-icon navbar-icon-active"}>
              <AiOutlinePicLeft size={20} className="navbar-icon-item" />
            </span>
            <span className={isIcon? 'navbar-content' : 'navbar-content active_navbar'}>Lịch học</span>
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/sinh-vien/diem" className="align-items-navbar">
            <span className={isIcon ? "navbar-icon" : "navbar-icon navbar-icon-active"}>
              <AiFillRead size={20} className="navbar-icon-item" />
            </span>

            <span className={isIcon? 'navbar-content' : 'navbar-content active_navbar'}>Điểm</span>
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/sinh-vien/khen-thuong-va-ky-luat" className="align-items-navbar">
            <span className={isIcon ? "navbar-icon" : "navbar-icon navbar-icon-active"}>
              <AiFillHeart size={20} className="navbar-icon-item" />
            </span>

            <span className={isIcon? 'navbar-content' : 'navbar-content active_navbar'}>Khen thưởng / Kỷ luật</span>
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/sinh-vien/hoc-phi" className="align-items-navbar">
            <span className={isIcon ? "navbar-icon" : "navbar-icon navbar-icon-active"}>
              <AiFillCreditCard size={20} className="navbar-icon-item" />
            </span>
            <span className={isIcon? 'navbar-content' : 'navbar-content active_navbar'}>Học phí</span>
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/sinh-vien/dich-vu-truc-tuyen" className="align-items-navbar">
            <span className={isIcon ? "navbar-icon" : "navbar-icon navbar-icon-active"}>
              <AiOutlineGlobal size={20} className="navbar-icon-item" />
            </span>

            <span className={isIcon? 'navbar-content' : 'navbar-content active_navbar'}>Dịch vụ trực tuyến</span>
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/sinh-vien/sms" className="align-items-navbar">
            <span className={isIcon ? "navbar-icon" : "navbar-icon navbar-icon-active"}>
              <AiFillPhone size={20} className="navbar-icon-item" />
            </span>

            <span className={isIcon? 'navbar-content' : 'navbar-content active_navbar'}>SMS</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

Navbar.propTypes = {};

export default Navbar;
