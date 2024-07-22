import React from "react";
import Footer from "../component/Footer";
import atmCatd from "../assets/img/atm-card.png";
import {
  FaBuildingColumns,
  FaChevronDown,
  FaChevronUp,
  FaCreditCard,
  FaDollarSign,
  FaShop,
} from "react-icons/fa6";
import NavbarBtn from "../component/NavbarBtn";
import { Link } from "react-router-dom";

function Payment() {
  return (
    <div>
      <NavbarBtn />
      <div className="flex flex-col gap-[100px]">
        <div className="flex flex-col gap-5 md:gap-0 md:flex-row md:mx-28 md:my-12 my-5 md:p-24 p-10 bg-white rounded-3xl">
          <div className="flex-1 flex flex-col gap-5 ">
            <div className="text-xl font-bold text-[#373A42]">
              Payment Method
            </div>
            <div className="flex flex-col gap-10">
              <div className="flex gap-5">
                <input type="radio" checked />
                <div className="h-11 w-11 bg-[#884DFF33] rounded-lg flex items-center justify-center">
                  <FaCreditCard className="text-[#884DFF]" />
                </div>
                <div className="flex items-center justify-between w-[60%] ">
                  <span className="font-semibold text-sm text-[#373A42]">
                    Card
                  </span>{" "}
                  <FaChevronUp className="text-[#979797]" />
                </div>
              </div>
              <div className="flex ml-[5%] items-center gap-8 mt-[-20px]">
                <img src={atmCatd} alt="atm" className="w-auto" />
                <button className="h-11 w-11 border-2 border-[#3366ff] border-dashed rounded-xl text-[#3366ff] text-3xl ">
                  +
                </button>
              </div>

              <div className="flex gap-5">
                <input type="radio" />
                <div className="h-11 w-11 bg-[#FC105533] rounded-lg flex items-center justify-center">
                  <FaBuildingColumns className="text-[#FC1055]" />
                </div>
                <div className="flex items-center justify-between w-[60%]">
                  <span className="font-semibold text-sm text-[#373A42]">
                    Bank Transfer
                  </span>{" "}
                  <FaChevronDown className="text-[#979797]" />
                </div>
              </div>
              <div className="flex gap-5">
                <input type="radio" />
                <div className="h-11 w-11 bg-[#FF890033] rounded-lg flex items-center justify-center">
                  <FaShop className="text-[#FF8900]" />
                </div>
                <div className="flex items-center justify-between w-[60%]">
                  <span className="font-semibold text-sm text-[#373A42]">
                    Retail
                  </span>{" "}
                  <FaChevronDown className="text-[#979797]" />
                </div>
              </div>
              <div className="flex gap-5">
                <input type="radio" />
                <div className="h-11 w-11 bg-[#3366FF33] rounded-lg flex items-center justify-center">
                  <FaDollarSign className="text-[#3366FF]" />
                </div>
                <div className="flex items-center justify-between w-[60%]">
                  <span className="font-semibold text-sm text-[#373A42]">
                    E-Money
                  </span>{" "}
                  <FaChevronDown className="text-[#979797]" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-8 md:pl-24 md:border-l border-t md:border-t-0 pt-10 md:pt-0">
            <div className="text-xl font-bold text-[#373A42]">
              Ticket Detail
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-[#373A42] text-sm font-bold flex justify-between">
                Event
                <span className="text-[#3366ff]">
                  Sights & Sounds Exhibition
                </span>
              </h3>
              <h3 className="text-[#373A42] text-sm font-bold flex justify-between">
                Ticket Section<span className="text-[#3366ff]">VIP</span>
              </h3>
              <h3 className="text-[#373A42] text-sm font-bold flex justify-between">
                Quantity<span className="text-[#3366ff]">2</span>
              </h3>
              <h3 className="text-[#373A42] text-sm font-bold flex justify-between">
                Total Payment<span className="text-[#3366ff]">$70</span>
              </h3>
            </div>
            <Link to={"/my-booking"} className="w-full">
              <button className="bg-[#3366ff] rounded-2xl h-14 w-full shadow-xl font-semibold text-white">
                Payment
              </button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Payment;
