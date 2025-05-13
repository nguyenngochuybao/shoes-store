import { Link } from "react-router-dom";
import Navbar from "./navbar";

function Header ()
{
    return (
        <div className="header">
            <div className="container">
                <Navbar />   
            </div>
        </div>
    );
}

export default Header;