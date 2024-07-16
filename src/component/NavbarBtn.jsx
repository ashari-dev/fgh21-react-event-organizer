import React from "react";
import Logo from "./Logo";

function NavbarBtn() {
  return (
    <div className="flex justify-between shadow h-20 items-center px-10">
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
      <div>
        <button className="h-10 w-36 font-bold text-[#373A42] ">Log in</button>
        <button className="bg-[#3366FF] h-10 w-36 text-white rounded-xl font-bold">Sign up</button>
      </div>
    </div>
  );
}

export default NavbarBtn;
