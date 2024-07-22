import React from "react";
import Footer from "../component/Footer";
import Sidebar from "../component/Sidebar";
import { FaRegHeart } from "react-icons/fa6";
import NavbarBtn from "../component/NavbarBtn";

function MyWishlist() {
  const data = [
    {
      id: 1,
      title: "Festivals terbaru 2014",
      time: "Wed, 15 Nov, 4:00 PM",
      location: "Jakarta, indonesia",
    },
    {
      id: 2,
      title: "Jurassic Park",
      time: "Wed, 16 Nov, 3:00 PM",
      location: "Bandung, Indonesia",
    },
    {
      id: 3,
      title: "Eat The World",
      time: "Wed, 17 Nov, 4:00 PM",
      location: "Semarang, Indonesia",
    },
    {
      id: 4,
      title: "Festivals 2014",
      time: "Wed, 15 Nov, 4:00 PM",
      location: "Bali, Indonesia",
    },
  ];
  return (
    <div>
      <NavbarBtn />
      <div className="flex flex-col gap-[100px]">
        <div className="p-5 md:p-12 flex gap-12 md:flex-row flex-col">
          <Sidebar className="flex-1" />
          <div className="bg-white p-16 rounded-3xl flex-1 w-full flex flex-col gap-12 ">
            <div className="text-xl font-bold flex justify-between items-center">
              My Wishlist
            </div>
            {data.length > 0 ? (
              data.map((i) => {
                return (
                  <div className="pb-5">
                    <div className="flex gap-8">
                      <div className="flex flex-col h-[75px] w-[50px] justify-center shadow items-center rounded-2xl text-sm text-[#FF8900] font-semibold ">
                        15
                        <span className="text-xs text-[#C1C5D0] font-normal">
                          Wed
                        </span>
                      </div>
                      <div className="flex flex-col gap-3 w-full">
                        <h2 className="flex justify-between border-b-2 w-full text-2xl font-semibold text-[#373A42]">
                          {i.title}
                          <FaRegHeart className="text-[#3366ff]" />
                        </h2>
                        <div className="flex flex-col gap-2">
                          <span className="text-xs text[#373A42BF]">
                            {i.location}
                          </span>
                          <span className="text-xs text[#373A42BF]">
                            {i.time}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="h-full w-full flex flex-col gap-5 items-center justify-center">
                <div className="text-2xl font-semibold">No tickets bought</div>
                <div className="w-[50%] flex text-[#B3B8B8] text-md text-center">
                  It appears you haven’t bought any tickets yet. Maybe try
                  searching these?
                </div>
              </div>
            )}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
export default MyWishlist;
