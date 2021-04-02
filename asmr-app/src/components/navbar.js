import logo from "../images/logo_white.png";
import { Link } from "react-router-dom";

import Login from "./Login";
import Logout from "./Logout";

function Navbar() {
  return (
    <div className="nav">
      <Link to="/">
        <div className="logo">
          <img src={logo} className="logo" />
        </div>
      </Link>
      <div className="settings">
        <Login />
        {/* <Logout /> */}
        {/* <Link to="/">login</Link> */}
        <Link to="/members-place">Members place</Link>
        <Link to="/">Talk to us</Link>
      </div>
    </div>
  );
}

export default Navbar;
