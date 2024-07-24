import React from "react";
import Logo from "./Logo";
import jhon from "../assets/img/jhon.png";
import { Link } from "react-router-dom";

function NavbarUser() {
  return (
    <div className="flex justify-between bg-white shadow h-20 items-center px-10">
      <div>
        <Logo />
      </div>
      <div>
        <ul className="flex gap-5 font-bold text-[#373A42]">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/create-event"}>Create Event</Link>
          </li>

          <li>Location</li>
        </ul>
      </div>
      
    </div>
  );
}

export default NavbarUser;
