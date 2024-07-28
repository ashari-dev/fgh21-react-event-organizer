import React from "react";
import { FaXmarksLines } from "react-icons/fa6";

function Logo() {
  return (
    <div className="flex items-center gap-1 ">
      <FaXmarksLines className="text-4xl text-[#EB3678] rotate-90" />
      <div className="text-2xl font-bold text-[#EB3678]">Logo</div>
    </div>
  );
}
export default Logo;
