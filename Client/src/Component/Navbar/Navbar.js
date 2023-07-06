import React, { useState } from "react";
import Logo from "../../Contant/img/Logo_QuickInfo_vector.png";
import { NavLink } from "react-router-dom";
import "../../Component/Styles/Navbar.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faReorder } from '@fortawesome/free-solid-svg-icons' 


function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} />
        <div className="hiddenLinks">
          <NavLink to="/"> Trang chủ </NavLink>
          <NavLink to="/add-social-media"> Tạo Bio </NavLink>
          <NavLink to="/"> Thông tin </NavLink>
          <NavLink to="/login-quick"> Đăng xuất </NavLink>
        </div>
      </div>
      <div className="rightSide">
        <NavLink to="/"> Trang chủ </NavLink>
        <NavLink to="/add-social-media"> Tạo Bio </NavLink>
        <NavLink to="/"> Thông tin </NavLink>
        <NavLink to="/login-quick"> Đăng xuất </NavLink>
        <button onClick={toggleNavbar}>
          <FontAwesomeIcon className='Logos-Social-item' icon={faReorder} />
        </button>
        
      </div>
    </div>
  );
}

export default Navbar;
