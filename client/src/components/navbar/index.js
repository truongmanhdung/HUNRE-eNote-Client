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
  AiFillPhone
} from 'react-icons/ai';
import { IoMdNotifications } from 'react-icons/io';
function Navbar(props) {
  const [isIcon, setisIcon] = useState(true);

  const ClickIconNavbar = () => {
      setisIcon(!isIcon);
  }

  return (
    <div className="navbar">
    {isIcon ? ( <div className="logo d-flex">
        <h1>D2T Team</h1>
        {isIcon ? <AiOutlineDoubleLeft onClick={ClickIconNavbar} /> : <AiOutlineDoubleRight onClick={ClickIconNavbar} />}
      </div>):  <div className="logo d-flex">
        {isIcon ? <AiOutlineDoubleLeft onClick={ClickIconNavbar} /> : <AiOutlineDoubleRight onClick={ClickIconNavbar} />}
      </div>}
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/sinhvien/thong-bao" className="align-items">
            <IoMdNotifications size={20} className="navbar-icon" />
            <span className="navbar-content">Thông báo và tin tức</span>
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/sinhvien/diem-danh" className="align-items">
            <AiOutlineCheck size={20} className="navbar-icon" />
            <span className="navbar-content">Điểm danh</span>
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/sinhvien/lich-hoc" className="align-items">
            <AiOutlinePicLeft size={20} className="navbar-icon" />
            <span className="navbar-content">Lịch học</span>
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/sinhvien/diem" className="align-items">
            <AiFillRead size={20} className="navbar-icon" />
            <span className="navbar-content">Điểm</span>
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/sinhvien/khen-thuong-va-ky-luat" className="align-items">
            <AiFillHeart size={20} className="navbar-icon" />
            <span className="navbar-content">Khen thưởng / Kỷ luật</span>
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/sinhvien/hoc-phi" className="align-items">
            <AiFillCreditCard size={20} className="navbar-icon" />
            <span className="navbar-content">Học phí</span>
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/sinhvien/dich-vu-truc-tuyen" className="align-items">
            <AiOutlineGlobal size={20} className="navbar-icon" />
            <span className="navbar-content">Dịch vụ trực tuyến</span>
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/sinhvien/sms" className="align-items">
            <AiFillPhone size={20} className="navbar-icon" />
            <span className="navbar-content">SMS</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

Navbar.propTypes = {};

export default Navbar;
