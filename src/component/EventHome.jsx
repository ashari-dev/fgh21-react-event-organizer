import React from "react";
import imgEvent from "../assets/img/event1.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Attendees from "./Attendees";
import { Link } from "react-router-dom";

function EventHome() {
  const data = [
    {
      id: 1,
      title: "Festivals 2014",
      time: "Wed, 15 Nov, 4:00 PM",
      img: "https://i.pinimg.com/564x/b6/5b/66/b65b66e5707e73d032773d74c1d7479f.jpg",
    },
    {
      id: 2,
      title: "Jurassic Park",
      time: "Wed, 16 Nov, 3:00 PM",
      img: "https://i.pinimg.com/564x/7b/bc/e1/7bbce19e94374f86ea924476dae005f7.jpg",
    },
    {
      id: 3,
      title: "Eat The World",
      time: "Wed, 16 Nov, 4:00 PM",
      img: "https://i.pinimg.com/564x/0f/4e/56/0f4e563789c7e3a6395ae333f6d7df54.jpg",
    },
    {
      id: 4,
      title: "Festivals 2014",
      time: "Wed, 15 Nov, 4:00 PM",
      img: "https://i.pinimg.com/564x/b6/5b/66/b65b66e5707e73d032773d74c1d7479f.jpg",
    },
    {
      id: 5,
      title: "Jurassic Park",
      time: "Wed, 16 Nov, 3:00 PM",
      img: "https://i.pinimg.com/564x/7b/bc/e1/7bbce19e94374f86ea924476dae005f7.jpg",
    },
    {
      id: 6,
      title: "Eat The World",
      time: "Wed, 16 Nov, 4:00 PM",
      img: "https://i.pinimg.com/564x/0f/4e/56/0f4e563789c7e3a6395ae333f6d7df54.jpg",
    },
  ];
  return (
    <section className="flex flex-col items-center gap-10">
      <div className="bg-[#FF3D7140] rounded-full text-[#FF3D71] px-9 font-semibold">
        Event
      </div>
      <div className="text-4xl font-bold">Events For You</div>
      <div className="flex gap-14 text-[#C1C5D0]">
        <div className="p-2 flex flex-col gap-1 items-center text-sm font-semibold">
          <h3>13</h3>
          <span>Mon</span>
        </div>
        <div className="p-2 flex flex-col gap-1 items-center text-sm font-semibold">
          <h3>14</h3>
          <span>Tue</span>
        </div>
        <div className="p-2 border border-[#FF8900] text-[#FF8900] rounded-xl flex flex-col gap-1 items-center text-sm font-semibold">
          <h3>15</h3>
          <span>Wes</span>
        </div>
        <div className="p-2 flex flex-col gap-1 items-center text-sm font-semibold">
          <h3>16</h3>
          <span>Thu</span>
        </div>
        <div className="p-2 flex flex-col gap-1 items-center text-sm font-semibold">
          <h3>17</h3>
          <span>Fri</span>
        </div>
      </div>
      <div className="flex w-full pl-24 gap-5 overflow-x-auto">
        {data.map((i) => {
          return (
            <Link to={"/event"} key={`event-${i.id}`}>
              <div className="flex flex-col flex-shrink-0 h-[376px] w-[260px] overflow-hidden bg-red-700 rounded-3xl relative">
                <img
                  src={i.img}
                  alt="Event"
                  className="w-auto h-[435px] absolute brightness-50"
                />
                <div className="relative p-7 text-white  flex flex-col gap-5 h-full justify-end">
                  <div className="text-sm font-semibold">{i.time}</div>
                  <div className="text-2xl font-bold">{i.title}</div>
                  <Attendees />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="flex gap-8">
        <button className="h-11 w-11 rounded-xl text-[#C1C5D0] justify-center flex items-center shadow-md">
          <FaArrowLeft />
        </button>
        <button className="h-11 w-11 rounded-xl bg-[#3366FF] text-white justify-center flex items-center shadow-md">
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
}

export default EventHome;
