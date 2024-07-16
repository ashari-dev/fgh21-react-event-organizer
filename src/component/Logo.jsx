import React from "react";
import { FaTicket } from "react-icons/fa6";

function Logo(){
  return(
    <div className="flex items-center gap-1 ">
      <FaTicket className="text-5xl text-[#3366FF] rotate-[135deg]"/>
      <div className="text-2xl font-bold text-[#3366FF]">We<span className="text-[#FC1055]">tick</span></div>
    </div>
  )
}
export default Logo