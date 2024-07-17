import React from "react";
import NavbarUser from "../component/NavbarUser";
import Footer from "../component/Footer";
import stage from "../assets/img/stage.png";
import { FaArrowRightArrowLeft, FaTicketSimple } from "react-icons/fa6";

function Booking() {
  return (
    <div>
      <NavbarUser />
      <div className="flex flex-col gap-[100px]">
        <div className="flex mx-28 my-12 p-24 bg-white rounded-3xl">
          <div className="flex-1 flex flex-col gap-5 items-center">
            <img src={stage} alt="Stage" className="h-auto w-full" />
          </div>
          <div className="flex-1 flex flex-col gap-8">
            <div className="text-xl text-[#373A42] font-bold flex items-center justify-between">
              <span>Sights & Sounds Exhibition</span>
              <div
                className="gap-3 text-xs text-[#FC1055] flex items-center
                "
              >
                BY PRICE{" "}
                <button className="shadow-lg h-11 w-11 rounded-xl text-[#3366ff] flex items-center justify-center text-xl ">
                  <FaArrowRightArrowLeft className="rotate-90" />
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex gap-3 ">
                <div className="h-11 w-11 bg-[#F1EAFF] rounded-xl flex items-center justify-center">
                  <FaTicketSimple className="text-[#884DFF] rotate-[135deg]" />
                </div>
                <div className="flex flex-col flex-1 text-[#373A42] font-bold text-sm">
                  Section reg, Row 1
                  <span className="text-[#BDC0C4] text-xs font-medium">
                    12 Seats available
                  </span>
                  <div className="mt-5">Quantity</div>
                </div>
                <div className="flex flex-col  items-center text-[#373A42] font-bold text-sm">
                  $15{" "}
                  <span className="text-[#BDC0C4] text-xs font-medium">
                    per person
                  </span>
                  <div className="text-xs flex items-center font-bold mt-5 gap-4">
                    <button className="h-8 w-8 rounded-md border-2 text-[#C1C5D0]">
                      -
                    </button>
                    0
                    <button className="h-8 w-8 rounded-md border-2 text-[#C1C5D0]">
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex gap-3 ">
                <div className="h-11 w-11 bg-[#FFEAEF] rounded-xl flex items-center justify-center">
                  <FaTicketSimple className="text-[#FF3D71] rotate-[135deg]" />
                </div>
                <div className="flex flex-col flex-1 text-[#373A42] font-bold text-sm">
                  Section vip, Row 2
                  <span className="text-[#BDC0C4] text-xs font-medium">
                    9 Seats available
                  </span>
                  <div className="mt-5">Quantity</div>
                </div>
                <div className="flex flex-col  items-center text-[#373A42] font-bold text-sm">
                  $35{" "}
                  <span className="text-[#BDC0C4] text-xs font-medium">
                    per person
                  </span>
                  <div className="text-xs flex items-center font-bold mt-5 gap-4">
                    <button className="h-8 w-8 rounded-md border-2 text-[#C1C5D0]">
                      -
                    </button>
                    2
                    <button className="h-8 w-8 rounded-md border-2 text-[#C1C5D0]">
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex gap-3 ">
                <div className="h-11 w-11 bg-[#FFF4E7] rounded-xl flex items-center justify-center">
                  <FaTicketSimple className="text-[#FF8900] rotate-[135deg]" />
                </div>
                <div className="flex flex-col flex-1 text-[#373A42] font-bold text-sm">
                  Section vvip, Row 3
                  <span className="text-[#BDC0C4] text-xs font-medium">
                    6 Seats available
                  </span>
                  <div className="mt-5">Quantity</div>
                </div>
                <div className="flex flex-col  items-center text-[#373A42] font-bold text-sm">
                  $50{" "}
                  <span className="text-[#BDC0C4] text-xs font-medium">
                    per person
                  </span>
                  <div className="text-xs flex items-center font-bold mt-5 gap-4">
                    <button className="h-8 w-8 rounded-md border-2 text-[#C1C5D0]">
                      -
                    </button>
                    0
                    <button className="h-8 w-8 rounded-md border-2 text-[#C1C5D0]">
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="flex flex-col gap-4">
              <div className="text-sm font-bold flex justify-between text-[#373A42]">
                Ticket Section<span className="text-[#3355ff]">VIP</span>
              </div>
              <div className="text-sm font-bold flex justify-between text-[#373A42]">
                Quantity<span className="text-[#3355ff]">2</span>
              </div>
              <div className="text-sm font-bold flex justify-between text-[#373A42]">
                Total Payment<span className="text-[#3355ff]">$70</span>
              </div>
            </div>
            <div>
              <button className="bg-[#3366ff] h-12 w-[315px] rounded-2xl text-white font-bold shadow-xl">
                Checkout
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
export default Booking;
