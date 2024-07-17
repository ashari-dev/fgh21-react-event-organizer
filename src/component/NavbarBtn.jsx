import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";

function NavbarBtn() {
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
      <div>
        <Link to={"/login"}>
          <button className="h-10 w-36 font-bold text-[#373A42] ">
            Log in
          </button>
        </Link>
        <button className="bg-[#3366FF] h-10 w-36 text-white rounded-xl font-bold">
          Sign up
        </button>
      </div>
    </div>
  );
}

export default NavbarBtn;
