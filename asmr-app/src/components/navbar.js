import logo from "../images/logo_white.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="nav">
      <Link to="/">
        <div className="logo">
          <img src={logo} className="logo" />
        </div>
      </Link>
      <div className="settings">
        <Link to="/members-place">icon</Link>
      </div>
    </div>
  );
}

export default Navbar;
