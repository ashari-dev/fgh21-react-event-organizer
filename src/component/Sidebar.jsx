import React, { useRef } from "react";
import jhon from "../assets/img/jhon.png";

import {
  FaArrowUpFromBracket,
  FaBars,
  FaCirclePlus,
  FaCreditCard,
  FaGear,
  FaHeart,
  FaListUl,
  FaPen,
  FaUnlock,
  FaUser,
} from "react-icons/fa6";
``;
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux/reducers/auth";

function Sidebar() {
  const navigation = useNavigate();
  const menu = useRef();
  const dispatch = useDispatch();
  function sidebarHidden() {
    menu.current.classList.toggle("hidden");
  }

  function doLogout() {
    dispatch(logout());
    navigation("/login");
  }
  return (
    <div className="flex flex-col gap-10">
      <div className="flex justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center h-[55px] w-[55px]  rounded-full overflow-hidden border-[#3366ff] border-2">
            <img
              src={jhon}
              alt="Profile"
              className="h-auto w-[45px] rounded-full"
            />
          </div>
          <h3 className="flex flex-col text-sm font-bold gap-1">
            jhon Tomson
            <span className="text-xs font-normal">Entrepreneur, ID</span>
          </h3>
        </div>
        <button className="md:hidden" onClick={sidebarHidden}>
          <FaBars />
        </button>
      </div>
      <div ref={menu}>
        <ul className="flex flex-col gap-8">
          <li className="flex gap-6">
            <FaUser className="text-[#C1C5D0] " />
            <span className="text-[#373A42] font-semibold text-sm hover:text-[#3366ff]">
              Profile
            </span>
          </li>
          <li className="flex gap-6 pl-8">
            <FaCreditCard className="text-[#C1C5D0]" />
            <span className="text-[#373A42] font-semibold text-sm hover:text-[#3366ff]">
              Card
            </span>
          </li>
          <Link to={"/edit-profile"}>
            <li className="flex gap-6 pl-8 ">
              <FaPen className="text-[#C1C5D0]" />
              <span className="text-[#373A42] font-semibold text-sm hover:text-[#3366ff]">
                Edit Profile
              </span>
            </li>
          </Link>
          <Link to={"/change-password"}>
            <li className="flex gap-6 pl-8">
              <FaUnlock className="text-[#C1C5D0]" />
              <span className="text-[#373A42] font-semibold text-sm hover:text-[#3366ff]">
                Change Password
              </span>
            </li>
          </Link>
          <Link to={"/create-event"}>
            <li className="flex gap-6">
              <FaCirclePlus className="text-[#C1C5D0]" />
              <span className="text-[#373A42] font-semibold text-sm hover:text-[#3366ff]">
                Create Event
              </span>
            </li>
          </Link>
          <Link to={"/my-booking"}>
            <li className="flex gap-6">
              <FaListUl className="text-[#C1C5D0]" />
              <span className="text-[#373A42] font-semibold text-sm hover:text-[#3366ff]">
                My Booking
              </span>
            </li>
          </Link>
          <Link to={"/my-wishlist"}>
            <li className="flex gap-6">
              <FaHeart className="text-[#C1C5D0]" />
              <span className="text-[#373A42] font-semibold text-sm hover:text-[#3366ff]">
                My Wishlist
              </span>
            </li>
          </Link>
          <li className="flex gap-6">
            <FaGear className="text-[#C1C5D0]" />
            <span className="text-[#373A42] font-semibold text-sm hover:text-[#3366ff]">
              Settings
            </span>
          </li>
          <li className="flex gap-6 text-red-600">
            <button className="flex gap-6 w-full" onClick={doLogout}>
              <FaArrowUpFromBracket />
              <span className="font-semibold text-sm hover:text-[#3366ff]">
                Logout
              </span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
