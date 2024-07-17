import React from "react";
import Logo from "./Logo";
import {
  FaSquareFacebook,
  FaSquareWhatsapp,
  FaSquareInstagram,
  FaTwitter,
} from "react-icons/fa6";

function Footer() {
  return (
    <div className="flex flex-col gap-10 mb-[100px] mx-[150px]">
      <div className="flex justify-between">
        <div className="flex flex-col gap-5">
          <Logo />
          <div className="font-semibold text-[#373A42]">
            Find events you love with our
          </div>
          <div className="flex gap-5 text-xl text-[#C1C5D0]">
            <FaSquareFacebook />
            <FaSquareWhatsapp />
            <FaSquareInstagram />
            <FaTwitter />
          </div>
        </div>
        <div>
          <ul className="flex flex-col gap-3 text-[#C1C5D0] text-sm font-semibold">
            <li className="text-[#373A42] font-bold text-base">Wetick</li>
            <li>About Us</li>
            <li>Feature</li>
            <li>Blog</li>
            <li>Payment</li>
            <li>Mobile APP</li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col gap-3 text-[#C1C5D0] text-sm font-semibold">
            <li className="text-[#373A42] font-bold text-base">Feature</li>
            <li>Booking</li>
            <li>Create Event</li>
            <li>Discover</li>
            <li>Register</li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col gap-3 text-sm text-[#C1C5D0] font-semibold">
            <li className="text-[#373A42] font-bold text-base">Company</li>
            <li>Partnership</li>
            <li>Help</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Sitemap</li>
          </ul>
        </div>
      </div>
      <div className="text-[#373A42] font-bold text-base">© 2020 Wetick All Rights Reserved</div>
    </div>
  );
}
export default Footer;
