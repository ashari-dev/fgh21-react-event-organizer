import React from "react";
import img1 from "../assets/img/pt1.png";
import img2 from "../assets/img/pt2.png";
import img3 from "../assets/img/pt3.png";
import img4 from "../assets/img/pt4.png";
import img5 from "../assets/img/pt5.png";
import img6 from "../assets/img/pt6.png";
function Partner() {
  return (
    <section className="bg-[#373A42] bg-[url('../assets/img/bg3.png')] bg-no-repeat bg-cover flex flex-col gap-10 items-center py-20">
      <div className="rounded-full bg-[#FFFFFF40] px-10 text-white font-semibold flex before:content-['\2014'] gap-1">Partner</div>
      <div className="text-4xl font-bold text-white">Our Trusted Partners</div>
      <div className="text-[#C1C5D0] text-xs">By companies like :</div>
      <div className="flex gap-10 flex-wrap items-center">
        <img src={img1} alt="Partner" />
        <img src={img2} alt="Partner" />
        <img src={img3} alt="Partner" />
        <img src={img4} alt="Partner" />
        <img src={img5} alt="Partner" />
        <img src={img6} alt="Partner" />
      </div>
    </section>
  );
}
export default Partner;
