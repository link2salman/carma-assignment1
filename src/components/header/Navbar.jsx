import React from "react";
import SearchMovie from "../search/SearchMovie";
import { Link, useLocation } from "react-router-dom";
import "./navBar.scss";

const Navbar = ({ setQueryString }) => {
  const location = useLocation();
  const isShow = location.pathname?.indexOf("detail") === -1;

  return (
    <div className="navbar">
      <div className="nav_main_links">
        <Link to="/" className="nav_home_link">
          Home
        </Link>
        {isShow && <SearchMovie setQueryString={setQueryString} />}
      </div>
    </div>
  );
};

export default Navbar;
