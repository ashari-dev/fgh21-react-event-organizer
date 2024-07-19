import React from "react";
import Footer from "../component/Footer";
import imgEvent from "../assets/img/event1.png";
import maps from "../assets/img/maps.png";
import { FaClock, FaLocationDot, FaRegHeart } from "react-icons/fa6";
import Attendees from "../component/Attendees";
import { Link } from "react-router-dom";
import NavbarBtn from "../component/NavbarBtn";

function Event() {
  return (
    <div>
      <NavbarBtn />
      <div className="flex flex-col gap-[100px]">
        <div className="flex flex-col gap-5 md:gap-0 md:flex-row md:mx-28 md:my-12 my-5 md:p-24 p-10 bg-white rounded-3xl">
          <div className="md:flex-1 flex flex-col gap-5 items-center relative">
            <img
              src={imgEvent}
              alt="Event"
              className="rounded-3xl brightness-50 shadow-2xl"
            />
            <div className="flex absolute md:relative top-10 right-8 items-center gap-3">
              <FaRegHeart className=" text-white md:text-[#C1C5D0] text-3xl" />
              <span className="text-xl font-bold hidden md:block md:text-[#373A42]">
                Add to Wishlist
              </span>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-8">
            <div className="text-2xl text-[#373A42] font-bold">
              Sights & Sounds Exhibition
            </div>
            <div className="flex flex-col gap-5 md:flex-row md:gap-0 justify-between">
              <div className="flex items-center gap-3">
                <FaLocationDot className="text-[#FC1055]" />
                <span className="font-semibold text-[#373A42]">
                  Jakarta, Indonesia
                </span>
              </div>
              <div className="flex items-center gap-3">
                <FaClock className="text-[#FC1055]" />
                <span className="font-semibold text-[#373A42]">
                  Wed, 15 Nov, 4:00 PM
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-sm text-[#373A42] font-semibold">
                Attendees
              </span>
              <Attendees />
            </div>
            <hr />
            <div className="flex flex-col gap-3">
              <h3 className="text-xl text-[#373A42] font-bold">Event Detail</h3>
              <div>
              <p className="text-xs text-[#373A42BF]">
                After his controversial art exhibition "Tear and Consume" back
                in November 2018, in which guests were invited to tear up…
              </p>
              <a className="text-xs font-semibold text-[#3366FF]">Read More</a>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-xl text-[#373A42] font-bold">Location</h3>
              <div className="h-36 md:w-[350px] max-w-[350px] overflow-hidden rounded-3xl">
              <img src={maps} alt="MAPS"  className="w-full"/>
              </div>
            </div>
            <Link to={'/booking'}>
            <button className="bg-[#3366FF] h-14 md:w-[315px] w-full rounded-2xl text-white font-bold shadow-xl">Payment</button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Event;
