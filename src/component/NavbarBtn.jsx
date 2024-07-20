import React, { useRef } from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";




function NavbarBtn() {
  const menu = useRef()
  const navBtn = useRef()
  function navbarHidden() {
    menu.current.classList.toggle('hidden')
    navBtn.current.classList.toggle('hidden')
  }
  return (
    <div className="flex flex-col gap-3 md:gap-0 md:py-0 py-5 md:flex-row justify-between bg-white shadow md:h-20 items-center md:px-10">
      <div className="flex items-center gap-10">
        <Logo />
        <button className="md:hidden" onClick={navbarHidden}>
          <FaBars className="text-xl" />
        </button>
      </div>
      <div ref={menu}>
        <ul className=" flex gap-5 flex-col items-center md:flex-row font-bold text-[#373A42]">
          <li className="hover:text-[#3366ff]">
            <Link to={"/"} >Home</Link>
          </li>
          <li className="hover:text-[#3366ff]">
            <Link to={"/create-event"}>Create Event</Link>
          </li>
          <li className="hover:text-[#3366ff]">Location</li>
        </ul>
      </div>
      <div className="flex flex-col gap-3 md:flex-row md:gap-0" ref={navBtn}>
        <Link to={"/login"}>
          <button className="h-10 w-36 font-bold text-[#373A42] ">
            Log in
          </button>
        </Link>
        <Link to={"register"}>
          <button className="bg-[#3366FF] h-10  w-36 text-white rounded-xl font-bold">
            Sign up
          </button>
        </Link>
      </div>
    </div>
  );
}

export default NavbarBtn;
