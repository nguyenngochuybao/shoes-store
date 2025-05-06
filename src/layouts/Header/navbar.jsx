import { Link } from "react-router-dom";

function Navbar ()
{
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
                  <li><Link to="/account">Account</Link></li>
              </ul>
          </nav>
      </div>
  );
}

export default Navbar;