import React from "react";
import NavbarBtn from "../component/NavbarBtn";
import imgHeader from "../assets/img/hero.png";
import Footer from "../component/Footer";
import imgEvent from "../assets/img/event1.png";
import attend1 from "../assets/img/group1.png";
import attend2 from "../assets/img/group2.png";
import attend3 from "../assets/img/group3.png";
import attend4 from "../assets/img/group4.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

function Home() {
  return (
    <>
      <NavbarBtn />
      <section className="bg-[#3366FF] bg-[url(bg1)] flex justify-end items-center h-[660px]">
        <img src={imgHeader} alt="img" className="h-[450px] w-auto" />
      </section>
      <section className="flex flex-col items-center gap-10 pt-20">
        <div className="bg-[#FF3D7140] rounded-full text-[#FF3D71] px-9 font-semibold">
          Event
        </div>
        <div>Events For You</div>
        <div className="flex gap-5">
          <div className="p-2 flex flex-col gap-1 items-center text-sm font-semibold">
            <h3>13</h3>
            <span>Mon</span>
          </div>
          <div className="p-2 flex flex-col gap-1 items-center text-sm font-semibold">
            <h3>13</h3>
            <span>Mon</span>
          </div>
          <div className="p-2 border border-[#FF8900] text-[#FF8900] rounded-xl flex flex-col gap-1 items-center text-sm font-semibold">
            <h3>13</h3>
            <span>Mon</span>
          </div>
          <div className="p-2 flex flex-col gap-1 items-center text-sm font-semibold">
            <h3>13</h3>
            <span>Mon</span>
          </div>
          <div className="p-2 flex flex-col gap-1 items-center text-sm font-semibold">
            <h3>13</h3>
            <span>Mon</span>
          </div>
        </div>
        <div className="flex w-full pl-24 gap-5 overflow-x-auto"> {/*wrapper*/}
          <div className="flex flex-col flex-shrink-0 h-[376px] w-[260px] overflow-hidden bg-red-700 rounded-3xl relative">
            <img
              src={imgEvent}
              alt="Event"
              className="w-auto h-[435px] absolute brightness-50"
            />
            <div className="relative p-7 text-white  flex flex-col gap-5 h-full justify-end">
              <div className="text-sm font-semibold">Wed, 15 Nov, 4:00 PM</div>
              <div className="text-xl font-bold">
                Sights & Sounds Exhibition
              </div>
              <div className="flex ">
                <img
                  src={attend1}
                  alt="attend"
                  className="rounded-full h-7 w-7 border border-white brightness-75 mr-[-10px]"
                />
                <img
                  src={attend2}
                  alt="attend"
                  className="rounded-full h-7 w-7 border border-white brightness-75 mr-[-10px]"
                />
                <img
                  src={attend3}
                  alt="attend"
                  className="rounded-full h-7 w-7 border border-white brightness-75 mr-[-10px]"
                />
                <img
                  src={attend4}
                  alt="attend"
                  className="rounded-full h-7 w-7 border border-white brightness-75 mr-[-10px]"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-shrink-0 h-[376px] w-[260px] overflow-hidden bg-red-700 rounded-3xl relative">
            <img
              src={imgEvent}
              alt="Event"
              className="w-auto h-[435px] absolute brightness-50"
            />
            <div className="relative p-7 text-white  flex flex-col gap-5 h-full justify-end">
              <div className="text-sm font-semibold">Wed, 15 Nov, 4:00 PM</div>
              <div className="text-xl font-bold">
                Sights & Sounds Exhibition
              </div>
              <div className="flex ">
                <img
                  src={attend1}
                  alt="attend"
                  className="rounded-full h-7 w-7 border border-white brightness-75 mr-[-10px]"
                />
                <img
                  src={attend2}
                  alt="attend"
                  className="rounded-full h-7 w-7 border border-white brightness-75 mr-[-10px]"
                />
                <img
                  src={attend3}
                  alt="attend"
                  className="rounded-full h-7 w-7 border border-white brightness-75 mr-[-10px]"
                />
                <img
                  src={attend4}
                  alt="attend"
                  className="rounded-full h-7 w-7 border border-white brightness-75 mr-[-10px]"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-shrink-0 h-[376px] w-[260px] overflow-hidden bg-red-700 rounded-3xl relative">
            <img
              src={imgEvent}
              alt="Event"
              className="w-auto h-[435px] absolute brightness-50"
            />
            <div className="relative p-7 text-white  flex flex-col gap-5 h-full justify-end">
              <div className="text-sm font-semibold">Wed, 15 Nov, 4:00 PM</div>
              <div className="text-xl font-bold">
                Sights & Sounds Exhibition
              </div>
              <div className="flex ">
                <img
                  src={attend1}
                  alt="attend"
                  className="rounded-full h-7 w-7 border border-white brightness-75 mr-[-10px]"
                />
                <img
                  src={attend2}
                  alt="attend"
                  className="rounded-full h-7 w-7 border border-white brightness-75 mr-[-10px]"
                />
                <img
                  src={attend3}
                  alt="attend"
                  className="rounded-full h-7 w-7 border border-white brightness-75 mr-[-10px]"
                />
                <img
                  src={attend4}
                  alt="attend"
                  className="rounded-full h-7 w-7 border border-white brightness-75 mr-[-10px]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-8">
          <button className="h-11 w-11 rounded-xl justify-center flex items-center shadow-md">
            <FaArrowLeft />
          </button>
          <button className="h-11 w-11 rounded-xl bg-[#3366FF] justify-center flex items-center shadow-md">
            <FaArrowRight />
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
