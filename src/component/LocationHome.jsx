import React from "react";
import aceh from "../assets/img/aceh.png";
import bali from "../assets/img/bali.png";
import bandung from "../assets/img/bandung.png";
import jakarta from "../assets/img/jakarta.png";
import jogja from "../assets/img/jogja.png";
import semarang from "../assets/img/semarang.png";
import solo from "../assets/img/solo.png";

function Location() {
  return (
    <section className="bg-[#3366FF] bg-[url('../assets/img/bg2.png')] bg-no-repeat bg-cover m-12 px-16 py-20 flex flex-col gap-12 rounded-3xl text-white">
      <div className="text-xl font-semibold bg-[#FFFFFF40] w-32 flex justify-center rounded-full">Location</div>
      <div className="flex flex-wrap gap-20 ">
        <div className="w-[230px] text-4xl font-bold">Discover Events Near You</div>
        <div className="flex flex-col gap-5 items-center font-semibold">
          <img src={jakarta} alt="Jakarta" /> <span>Jakarta</span>
        </div>
        <div className="flex flex-col gap-5 items-center font-semibold">
          <img src={bandung} alt="Bandung" /> <span>Bandung</span>
        </div>
        <div className="flex flex-col gap-5 items-center font-semibold">
          <img src={bali} alt="Bali" /> <span>Bali</span>
        </div>
        <div className="flex flex-col gap-5 items-center font-semibold">
          <img src={aceh} alt="Aceh" /> <span>Aceh</span>
        </div>
        <div className="flex flex-col gap-5 items-center font-semibold">
          <img src={solo} alt="Solo" /> <span>Solo</span>
        </div>
        <div className="flex flex-col gap-5 items-center font-semibold">
          <img src={jogja} alt="Yogyakarta" /> <span>Yogyakarta</span>
        </div>
        <div className="flex flex-col gap-5 items-center font-semibold">
          <img src={semarang} alt="Semarang" /> <span>Semarang</span>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="h-12 w-64 bg-white text-[#3366FF] rounded-2xl font-semibold text-base">See All</button>
      </div>
    </section>
  );
}

export default Location;
