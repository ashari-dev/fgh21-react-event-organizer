import React from "react";
import imgEvent from "../assets/img/event1.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Attendees from "./Attendees";

function Category() {
  return (
    <section className="flex flex-col items-center gap-10 pt-20">
      <div className="bg-[#FF3D7140] rounded-full text-[#FF3D71] px-9 font-semibold">
        Location
      </div>
      <div className="text-4xl font-bold">Browse Events By Category</div>
      <ul className="flex justify-around w-full font-semibold text-[#C1C5D0]">
        <li>Music</li>
        <li>Arts</li>
        <li>Outdoor</li>
        <li>Workshop</li>
        <li>Sport</li>
        <li>Festival</li>
        <li>Fashion</li>
      </ul>
      <div className="flex items-center gap-10">
        <button className="h-11 w-11 rounded-xl text-[#C1C5D0] justify-center flex items-center shadow-md">
          <FaArrowLeft />
        </button>
        <div className="flex gap-5 max-w-[940px] overflow-x-scroll">
          <div className="h-[350px] flex-shrink-0 w-[300px] bg-[#3366FF] rounded-3xl overflow-hidden relative ">
            <img src={imgEvent} alt="Event" className="absolute bottom-40" />
            <div className="relative flex flex-col text-white p-5 justify-end h-full gap-5">
              <Attendees className="absolute" />
              <div className="text-sm font-semibold">Wed, 15 Nov, 4:00 PM</div>
              <div className="text-2xl font-bold">
                Sights & Sounds Exhibition
              </div>
            </div>
          </div>
          <div className="h-[350px] flex-shrink-0 w-[300px] bg-[#3366FF] rounded-3xl overflow-hidden relative">
            <img src={imgEvent} alt="Event" className="absolute bottom-40" />
            <div className="relative flex flex-col text-white p-5 justify-end h-full gap-5">
              <Attendees className="absolute" />
              <div className="text-sm font-semibold">Wed, 15 Nov, 4:00 PM</div>
              <div className="text-2xl font-bold">
                Sights & Sounds Exhibition
              </div>
            </div>
          </div>
          <div className="h-[350px] flex-shrink-0 w-[300px] bg-[#3366FF] rounded-3xl overflow-hidden relative">
            <img src={imgEvent} alt="Event" className="absolute bottom-40" />
            <div className="relative flex flex-col text-white p-5 justify-end h-full gap-5">
              <Attendees className="absolute" />
              <div className="text-sm font-semibold">Wed, 15 Nov, 4:00 PM</div>
              <div className="text-2xl font-bold">
                Sights & Sounds Exhibition
              </div>
            </div>
          </div>
          <div className="h-[350px] flex-shrink-0 w-[300px] bg-[#3366FF] rounded-3xl overflow-hidden relative">
            <img src={imgEvent} alt="Event" className="absolute bottom-40" />
            <div className="relative flex flex-col text-white p-5 justify-end h-full gap-5">
              <Attendees className="absolute" />
              <div className="text-sm font-semibold">Wed, 15 Nov, 4:00 PM</div>
              <div className="text-2xl font-bold">
                Sights & Sounds Exhibition
              </div>
            </div>
          </div>
        </div>
        <button className="h-11 w-11 rounded-xl bg-[#3366FF] text-white justify-center flex items-center shadow-md">
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
}

export default Category;
