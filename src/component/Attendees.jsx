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
      <img
        src={attend4}
        alt="attend"
        className="rounded-full h-7 w-7 border border-white brightness-75 mr-[-10px]"
      />
    </div>
  );
}
export default Attendees;
