import React from "react";
import Logo from "./Logo";
import jhon from "../assets/img/jhon.png"

function NavbarUser() {
  return (
    <div className="flex justify-between bg-white shadow h-20 items-center px-10">
      <div>
      <Logo />
      </div>
      <div>
        <ul className="flex gap-5 font-bold text-[#373A42]">
          <li>Home</li>
          <li>Create Event</li>
          <li>Location</li>
        </ul>
      </div>
      <div className="flex items-center gap-2 ">
      <div className="h-12 rounded-full border-2 border-[#3366FF] overflow-hidden">
        <img src={jhon} alt="Profile" className="h-12 w-auto"/>
      </div>
      <div className="text-[#373A42] font-bold text-sm">Jhon Tomson</div>
      </div>
    </div>
  );
}

export default NavbarUser;
