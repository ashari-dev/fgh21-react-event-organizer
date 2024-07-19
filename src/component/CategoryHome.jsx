import React from "react";
import imgEvent from "../assets/img/event1.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Attendees from "./Attendees";

function Category(props) {
  return (
    <section className="flex flex-col items-center gap-10 pt-20">
      <div className="bg-[#FF3D7140] rounded-full text-[#FF3D71] px-9 font-semibold">
        Category
      </div>
      <div className="text-4xl font-bold">Browse Events By Category</div>
      <ul className="md:flex justify-around md:w-full grid grid-cols-3 gap-3 font-semibold text-[#C1C5D0]">
        <li>Music</li>
        <li>Arts</li>
        <li>Outdoor</li>
        <li>Workshop</li>
        <li>Sport</li>
        <li>Festival</li>
        <li>Fashion</li>
      </ul>
      <div className="flex items-center gap-10">
        <button className="hidden h-11 w-11 rounded-xl text-[#C1C5D0] justify-center md:flex items-center shadow-md">
          <FaArrowLeft />
        </button>
        <div className="flex gap-5 max-w-[300px] md:max-w-[940px] overflow-x-scroll">
          {props.data.map((i) => {
            return (
              <div
                key={`event-${i.id}`}
                className="h-[350px] flex-shrink-0 w-[300px] bg-[#3366FF] rounded-3xl overflow-hidden relative "
              >
                <img src={i.img} alt="Event" className="absolute bottom-40" />
                <div className="relative flex flex-col text-white p-5 justify-end h-full gap-5">
                  <Attendees className="absolute" />
                  <div className="text-sm font-semibold">
                    {i.time}
                  </div>
                  <div className="text-2xl font-bold">
                    {i.title}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <button className="hidden h-11 w-11 rounded-xl bg-[#3366FF] text-white justify-center md:flex items-center shadow-md">
          <FaArrowRight />
        </button>
      </div>
      <div className="flex gap-10 md:hidden">
        <button className=" h-11 w-11 rounded-xl text-[#C1C5D0] justify-center flex items-center shadow-md">
          <FaArrowLeft />
        </button>
        <button className=" h-11 w-11 rounded-xl bg-[#3366FF] text-white justify-center flex items-center shadow-md">
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
}

export default Category;
