import React from "react";
import NavbarUser from "../component/NavbarUser";
import Footer from "../component/Footer";
import Sidebar from "../component/Sidebar";
import { FaCalendar } from "react-icons/fa6";

function MyBooking() {
  return (
    <div>
      <NavbarUser />
      <div className="flex flex-col gap-[100px]">
        <div className="p-12 flex gap-12">
          <Sidebar className="flex-1" />
          <div className="bg-white p-16 rounded-3xl flex-1 w-full flex flex-col gap-12 ">
            <div className="text-xl font-bold flex justify-between items-center">
              My Booking{" "}
              <button className="bg-[#EAF1FF] h-[50px] w-[125px] flex items-center justify-center text-sm gap-3 text-[#3366ff] rounded-xl">
                <FaCalendar />
                March
              </button>
            </div>
            <div className="border-b-2 pb-5">
              <div className="flex gap-8">
                <div className="flex flex-col h-[75px] w-[50px] justify-center shadow items-center rounded-2xl text-sm text-[#FF8900] font-semibold ">
                  15
                  <span className="text-xs text-[#C1C5D0] font-normal">
                    Wed
                  </span>
                </div>
                <div className="flex flex-col gap-3">
                  <h2 className="text-2xl font-semibold text-[#373A42]">
                    Sights & Sounds Exhibition
                  </h2>
                  <div className="flex flex-col gap-2">
                    <span className="text-xs text[#373A42BF]">
                      Jakarta, Indonesia
                    </span>
                    <span className="text-xs text[#373A42BF]">
                      Wed, 15 Nov, 4:00 PM
                    </span>
                    <a className="text-xs text-[#3366ff] mt-1">Detail</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-b-2 pb-5">
              <div className="flex gap-8">
                <div className="flex flex-col h-[75px] w-[50px] justify-center shadow items-center rounded-2xl text-sm text-[#FF8900] font-semibold ">
                  15
                  <span className="text-xs text-[#C1C5D0] font-normal">
                    Wed
                  </span>
                </div>
                <div className="flex flex-col gap-3">
                  <h2 className="text-2xl font-semibold text-[#373A42]">
                    Sights & Sounds Exhibition
                  </h2>
                  <div className="flex flex-col gap-2">
                    <span className="text-xs text[#373A42BF]">
                      Jakarta, Indonesia
                    </span>
                    <span className="text-xs text[#373A42BF]">
                      Wed, 15 Nov, 4:00 PM
                    </span>
                    <a className="text-xs text-[#3366ff] mt-1">Detail</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-b-2 pb-5">
              <div className="flex gap-8">
                <div className="flex flex-col h-[75px] w-[50px] justify-center shadow items-center rounded-2xl text-sm text-[#FF8900] font-semibold ">
                  15
                  <span className="text-xs text-[#C1C5D0] font-normal">
                    Wed
                  </span>
                </div>
                <div className="flex flex-col gap-3">
                  <h2 className="text-2xl font-semibold text-[#373A42]">
                    Sights & Sounds Exhibition
                  </h2>
                  <div className="flex flex-col gap-2">
                    <span className="text-xs text[#373A42BF]">
                      Jakarta, Indonesia
                    </span>
                    <span className="text-xs text[#373A42BF]">
                      Wed, 15 Nov, 4:00 PM
                    </span>
                    <a className="text-xs text-[#3366ff] mt-1">Detail</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
export default MyBooking;
