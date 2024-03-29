import React from "react";
import { Link } from "react-router-dom";
import "../../App/App.css";
import logo from "../../assets/logo.png";

function NavBar() {
  return (
    <nav>
      <div className="navbar">
        <div className="flex-1">
          <a className="px-5 py-1">
            <img className="w-12" src={logo} alt="Logo monoma" />
          </a>
        </div>
        <div className="flex-none pr-5 gap-2">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">Profile</a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <Link replace to={"/login"}>
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
