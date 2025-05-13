import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUserRequest } from "../../redux/Action/action";

function Navbar ()
{
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = () =>
    { 
        dispatch( logoutUserRequest(
            {}
        ) )
        navigate( '/account' );
    }

  return (
      <div className="navbar">
          <div className="logo">
              <a href="">
                  <img src="" width="60px" height="60px" />
              </a>
          </div>
          <nav>
              <ul id="MenuItems">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/products">Products</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                  <li className="nav-account">
                      <Link to="/userInfo" className="account-toggle">
                          Account <i className="fa-solid fa-angle-up"></i>
                      </Link>
                      <ul className="account-dropdown">
                          <li><Link to="/userInfo">Thông tin tài khoản</Link></li>
                          <li><button onClick={()=>handleLogout()}>Đăng xuất</button></li>
                      </ul>
                  </li>
              </ul> 
          </nav>
      </div>
  );
}

export default Navbar;