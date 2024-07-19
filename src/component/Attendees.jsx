import React from "react";
import attend1 from "../assets/img/group1.png";
import attend2 from "../assets/img/group2.png";
import attend3 from "../assets/img/group3.png";
import attend4 from "../assets/img/group4.png";

function Attendees() {
  return (
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

      <div className="relative rounded-full h-7 w-7 border overflow-hidden border-white brightness-75 mr-[-10px]">
        <img src={attend4} alt="attend" className="w-full"/>
        <div className="absolute bg-[#FF890099] top-0 h-full w-full text-xs flex items-center justify-center "><span className='text-white'>62+</span> </div>
      </div>
    </div>
  );
}
export default Attendees;
