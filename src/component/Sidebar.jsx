import React from "react";
import jhon from "../assets/img/jhon.png";

import {
  FaArrowUpFromBracket,
  FaCirclePlus,
  FaCreditCard,
  FaGear,
  FaHeart,
  FaListUl,
  FaPen,
  FaUnlock,
  FaUser,
} from "react-icons/fa6";``
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex items-center gap-3">
        <div className="img h-[55px] w-[55px] bg-[#3366ff] rounded-full overflow-hidden border-[#3366ff] border-2">
          <img src={jhon} alt="Profile" className="" />
        </div>
        <h3 className="flex flex-col text-sm font-bold gap-1">
          jhon Tomson
          <span className="text-xs font-normal">Entrepreneur, ID</span>
        </h3>
      </div>
      <div>
        <ul className="flex flex-col gap-8">
          <li className="flex gap-6">
            <FaUser className="text-[#C1C5D0]" />
            <span className="text-[#373A42] font-semibold text-sm">
              Profile
            </span>
          </li>
          <li className="flex gap-6 pl-8">
            <FaCreditCard className="text-[#C1C5D0]" />
            <span className="text-[#373A42] font-semibold text-sm">Card</span>
          </li>
          <Link to={"/edit-profile"}>
            <li className="flex gap-6 pl-8">
              <FaPen className="text-[#C1C5D0]" />
              <span className="text-[#373A42] font-semibold text-sm">
                Edit Profile
              </span>
            </li>
          </Link>
          <Link to={"/change-password"}>
            <li className="flex gap-6 pl-8">
              <FaUnlock className="text-[#C1C5D0]" />
              <span className="text-[#373A42] font-semibold text-sm">
                Change Password
              </span>
            </li>
          </Link>
          <Link to={'/create-event'}>
          <li className="flex gap-6">
            <FaCirclePlus className="text-[#C1C5D0]" />
            <span className="text-[#373A42] font-semibold text-sm">
              Create Event
            </span>
          </li>
          </Link>
          <Link to={'/my-booking'}>
          <li className="flex gap-6">
            <FaListUl className="text-[#C1C5D0]" />
            <span className="text-[#373A42] font-semibold text-sm">
              My Booking
            </span>
          </li>
          </Link>
          <Link to={'/my-wishlist'}>
          <li className="flex gap-6">
            <FaHeart className="text-[#C1C5D0]" />
            <span className="text-[#373A42] font-semibold text-sm">
              My Wishlist
            </span>
          </li>
          </Link>
          <li className="flex gap-6">
            <FaGear className="text-[#C1C5D0]" />
            <span className="text-[#373A42] font-semibold text-sm">
              Settings
            </span>
          </li>
          <li className="flex gap-6 text-red-600">
            <FaArrowUpFromBracket />
            <span className="font-semibold text-sm">Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
