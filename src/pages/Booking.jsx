import React, { useState } from "react";
import Footer from "../component/Footer";
import stage from "../assets/img/stage.png";
import { FaArrowRightArrowLeft, FaTicketSimple } from "react-icons/fa6";
import { Link } from "react-router-dom";
import NavbarBtn from "../component/NavbarBtn";

function Booking() {
  const [reg, setReg] = useState(0);
  const [vip, setVip] = useState(0);
  const [vvip, setVvip] = useState(0);

  if (reg < 0) {
    setReg(0);
  }
  if (reg > 10) {
    setReg(10);
  }
  function plusReg() {
    setReg((a) => a + 1);
  }
  function minReg() {
    setReg((a) => a - 1);
  }
  if (vip < 0) {
    setVip(0);
  }
  if (vip > 4) {
    setVip(4);
  }
  function plusvip() {
    setVip((a) => a + 1);
  }
  function minVip() {
    setVip((a) => a - 1);
  }
  if (vvip < 0) {
    setVvip(0);
  }
  if (vvip > 4) {
    setVvip(4);
  }
  function plusVvip() {
    setVvip((a) => a + 1);
  }
  function minVvip() {
    setVvip((a) => a - 1);
  }

  let section = [];
  if (reg > 0) {
    section.push(`REG : ${reg}`);
  }
  if (vip > 0) {
    section.push(`VIP : ${vip}`);
  }
  if (vvip > 0) {
    section.push(`VVIP : ${vvip}`);
  }

  let dataSection = "";
  section.length > 0
    ? (dataSection = section.join(" || "))
    : (dataSection = "-");
  return (
    <div>
      <NavbarBtn />
      <div className="flex flex-col gap-[100px]">
        <div className="flex flex-col gap-5 md:gap-0 md:flex-row md:mx-28 md:my-12 my-5 md:p-24 p-10 bg-white rounded-3xl">
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
                  $15
                  <span className="text-[#BDC0C4] text-xs font-medium">
                    per person
                  </span>
                  <div className="text-xs flex items-center font-bold mt-5 gap-4">
                    <button
                      onClick={minReg}
                      className="h-8 w-8 rounded-md border-2 text-[#C1C5D0]"
                    >
                      -
                    </button>
                    {reg}
                    <button
                      onClick={plusReg}
                      className="h-8 w-8 rounded-md border-2 text-[#C1C5D0]"
                    >
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
                  $35
                  <span className="text-[#BDC0C4] text-xs font-medium">
                    per person
                  </span>
                  <div className="text-xs flex items-center font-bold mt-5 gap-4">
                    <button
                      onClick={minVip}
                      className="h-8 w-8 rounded-md border-2 text-[#C1C5D0]"
                    >
                      -
                    </button>
                    {vip}
                    <button
                      onClick={plusvip}
                      className="h-8 w-8 rounded-md border-2 text-[#C1C5D0]"
                    >
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
                  $50
                  <span className="text-[#BDC0C4] text-xs font-medium">
                    per person
                  </span>
                  <div className="text-xs flex items-center font-bold mt-5 gap-4">
                    <button
                      onClick={minVvip}
                      className="h-8 w-8 rounded-md border-2 text-[#C1C5D0]"
                    >
                      -
                    </button>
                    {vvip}
                    <button
                      onClick={plusVvip}
                      className="h-8 w-8 rounded-md border-2 text-[#C1C5D0]"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="flex flex-col gap-4">
              <div className="text-sm font-bold flex justify-between text-[#373A42]">
                Ticket Section
                <span className="text-[#3355ff]">{dataSection}</span>
              </div>
              <div className="text-sm font-bold flex justify-between text-[#373A42]">
                Quantity
                <span className="text-[#3355ff]">
                  {reg === 0 && vip === 0 && vvip === 0
                    ? "-"
                    : `${reg + vip + vvip}`}
                </span>
              </div>
              <div className="text-sm font-bold flex justify-between text-[#373A42]">
                Total Payment
                <span className="text-[#3355ff]">
                  {reg === 0 && vip === 0 && vvip === 0
                    ? "-"
                    : `$${reg * 15 + vip * 35 + vvip * 50}`}
                </span>
              </div>
            </div>
            <Link to={"/payment"}>
              <button className="bg-[#3366ff] h-12 w-full md:w-[315px] rounded-2xl text-white font-bold shadow-xl">
                Checkout
              </button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
export default Booking;
