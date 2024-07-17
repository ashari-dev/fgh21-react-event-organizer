import React from "react";
import NavbarUser from "../component/NavbarUser";
import Footer from "../component/Footer";
import Sidebar from "../component/Sidebar";

function CreateEvent() {
  function modalCreate() {
    const modal = document.getElementById("modal");
    modal.classList.toggle("hidden");
  }
  function bagas(e){
    e.stopPropagation()
  }
  function modalCreate2() {
    modal.classList.toggle("hidden");
  }

  return (
    <div>
      <NavbarUser />
      <div className="flex flex-col gap-[100px]">
        <div className="p-12 flex gap-12">
          <Sidebar className="flex-1" />
          <div className="bg-white p-16 rounded-3xl flex-1 w-full flex flex-col gap-12 ">
            <div className="text-xl font-bold flex justify-between items-center">
              Create Event
              <button
                onClick={modalCreate}
                className="bg-[#EAF1FF] h-[50px] w-[125px] flex items-center justify-center text-sm gap-3 text-[#3366ff] rounded-xl"
              >
                Create
              </button>
            </div>
            <div className="border-b-2 pb-5">
              <div className="flex gap-8">
                <div className="flex flex-col h-[75px] w-[50px] justify-center shadow items-center rounded-2xl text-sm text-[#FF8900] font-semibold ">
                  15
                  <span className="text-xs text-[#C1C5D0] font-normal">
                    Wed
                  </span>
                </div>
                <div className="flex flex-col gap-3">
                  <h2 className="text-2xl font-semibold text-[#373A42]">
                    Sights & Sounds Exhibition
                  </h2>
                  <div className="flex flex-col gap-2">
                    <span className="text-xs text[#373A42BF]">
                      Jakarta, Indonesia
                    </span>
                    <span className="text-xs text[#373A42BF]">
                      Wed, 15 Nov, 4:00 PM
                    </span>
                    <div className="flex gap-3">
                      <a className="text-xs text-[#3366ff] mt-1">Detail</a>
                      <a className="text-xs text-[#3366ff] mt-1">Update</a>
                      <a className="text-xs text-[#3366ff] mt-1">Delete</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      <div
        onClick={modalCreate2}
        id="modal"
        className="h-full w-full bg-[#00000047] absolute top-0 hidden"
      >
        <div onClick={bagas} className="bg-white p-16 m-20 rounded-3xl flex flex-col gap-10">
          <h2 className="text-xl font-semibold">Create Event</h2>
          <form className="grid grid-cols-2 gap-x-14 gap-y-6">
            <div className="flex flex-col gap-2">
              <label className="text-[#373A42] text-sm" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Input Name Event"
                className="h-[55px] border pl-6 rounded-2xl"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[#373A42] text-sm" htmlFor="category">
                Category
              </label>
              <input
                type="text"
                name="category"
                id="category"
                placeholder="Select category "
                className="h-[55px] border pl-6 rounded-2xl"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[#373A42] text-sm" htmlFor="location">
                Location
              </label>
              <input
                type="text"
                name="location"
                id="location"
                placeholder="Select Location"
                className="h-[55px] border pl-6 rounded-2xl"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[#373A42] text-sm" htmlFor="date-time">
                Date Time Show
              </label>
              <input
                type="text"
                name="date-time"
                id="date-time"
                placeholder="01/01/2022"
                className="h-[55px] border pl-6 rounded-2xl"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[#373A42] text-sm" htmlFor="price">
                Price
              </label>
              <input
                type="text"
                name="price"
                id="price"
                placeholder="Input price"
                className="h-[55px] border pl-6 rounded-2xl"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[#373A42] text-sm" htmlFor="img">
                Image
              </label>
              <input
                type="text"
                name="img"
                id="img"
                placeholder="Chose File ..."
                className="h-[55px] border pl-6 rounded-2xl"
              />
            </div>
            <div className="flex flex-col gap-2 col-span-2">
              <label className="text-[#373A42] text-sm" htmlFor="detail">
                Detail
              </label>
              <textarea
                name="detail"
                id="detail"
                className="h-[100px] border px-6 py-3 rounded-2xl"
                placeholder="input detail"
              ></textarea>
            </div>
            <div className="col-span-2 flex justify-end">
              <button className="h-[61px] w-[315px] bg-[#3366ff] rounded-2xl text-white font-semibold shadow-xl">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default CreateEvent;
