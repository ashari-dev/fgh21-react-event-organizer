import React from "react";
import Footer from "../component/Footer";
import Sidebar from "../component/Sidebar";
import { FaCamera } from "react-icons/fa6";
import jhon from "../assets/img/jhon.png";
import NavbarBtn from "../component/NavbarBtn";


function EditProfile() {
  return (
    <div>
      <NavbarBtn />
      <div className="flex flex-col gap-[100px]">
        <div className="p-5 md:p-12 flex gap-12 md:flex-row flex-col">
          <Sidebar className='flex-1'/>
          <div className="bg-white p-16 rounded-3xl flex-1 w-full flex flex-col gap-12">
            <div className="text-xl font-bold">Profile</div>
            <div className="flex flex-col-reverse md:flex-row gap-10 md:gap-0">
              <form className="flex-1 pr-10 flex flex-col gap-10">
                <table className="w-full">
                  <tr>
                    <td>
                      <label htmlFor="name" className="text-sm text-[#373A42]">Name</label>
                    </td>
                    <td>
                      <input type="text" id="name" name="name" placeholder="Jhon Tomson" className="h-[55px] pl-5 border rounded-xl w-full text-sm text-[#C1C5D0]"/>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label className="text-sm text-[#373A42]">Username</label>
                    </td>
                    <td className="h-[55px] rounded-xl w-full text-sm text-[#C1C5D0] flex gap-3 items-center mt-3">
                      <span>@jhonTom</span> <a href="#" className="text-[#3366ff] underline">Edit</a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label className="text-sm text-[#373A42]">Email</label>
                    </td>
                    <td  className="h-[55px] rounded-xl w-full text-sm text-[#C1C5D0] flex gap-3 items-center mt-3">
                      <span>jhont0@mail.com</span> <a href="#" className="text-[#3366ff] underline">Edit</a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label className="text-sm text-[#373A42]">Phone Number</label>
                    </td>
                    <td  className="h-[55px] rounded-xl w-full text-sm text-[#C1C5D0] flex gap-3 items-center mt-3">
                      <span>081234567890</span> <a href="#" className="text-[#3366ff] underline">Edit</a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="text-sm text-[#373A42]">Gender</span>
                    </td>
                    <td  className="h-[55px] rounded-xl w-full text-sm text-[#C1C5D0] flex gap-3 items-center mt-3">
                      <input type="radio" name="gender" id="male" checked/> <label htmlFor="male">Male</label>
                      <input type="radio" name="gender" id="female" /> <label htmlFor="female">Female</label>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label htmlFor="profession" className="text-sm text-[#373A42]">Profession</label>
                    </td>
                    <td>
                      <select name="profession" id="profession" className="h-[55px] pl-5 border rounded-xl w-full text-sm text-[#C1C5D0] mt-3">
                        <option value="Entrepreneur">Entrepreneur</option>
                        <option value="Programmer">Programmer</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label htmlFor="nationality" className="text-sm text-[#373A42]">Nationality</label>
                    </td>
                    <td>
                      <select name="nationality" id="nationality" className="h-[55px] pl-5 border rounded-xl w-full text-sm text-[#C1C5D0] mt-3">
                        <option value="Indonesia">Indonesia</option>
                        <option value="Malaysia">Malaysia</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label className="text-sm text-[#373A42]">Birthday Date</label>
                    </td>
                    <td  className="h-[55px] rounded-xl w-full text-sm text-[#C1C5D0] flex gap-3 items-center mt-3">
                      <span className="underline">24</span> / <span className="underline">10</span> / <span className="underline">2000</span> <a href="#" className="text-[#3366ff] underline">Edit</a>
                    </td>
                  </tr>
                </table>
                <div>
                <button className="h-[60px] md:w-[315px] w-full font-semibold text-white bg-[#3366ff] rounded-2xl shadow-xl">Save</button>
                </div>
              </form>
              <div>
              <div className="md:border-l-2 px-20 flex items-center flex-col gap-6">
                <div className="overflow-hidden border-4 border-[#3366ff] h-[137px] w-[137px] rounded-full  flex justify-center items-center ">
                  <img src={jhon} alt="Profile" className="h-auto w-[115px] rounded-full brightness-50" />
                  <FaCamera className="text-2xl text-white absolute " />
                </div>
                <div className="hidden md:flex flex-col gap-5">
                  <button className="h-[40px] border-2 border-[#3366ff] rounded-xl w-full text-[#3366ff] text-sm font-semibold">
                    Choose Photo
                  </button>
                  <span className="text-xs">Image size: max, 2 MB</span>
                  <span className="text-xs">
                    Image formats: .JPG, .JPEG, .PNG
                  </span>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
export default EditProfile;
