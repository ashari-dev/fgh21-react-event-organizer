import { defaultSerializeQueryArgs } from "@reduxjs/toolkit/query";
import React from "react";

function Loading() {
  return (
    <div className="absolute bg-[#0000005e] h-screen w-full flex justify-center items-center">
      <div className="animate-ping text-white font-bold text-2xl">
        Loading ...
      </div>
    </div>
  );
}

export default Loading;
