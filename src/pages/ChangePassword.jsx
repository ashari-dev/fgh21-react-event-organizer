import React from "react";
import NavbarUser from "../component/NavbarUser";
import Footer from "../component/Footer";
import Sidebar from "../component/Sidebar";

function ChangePassword() {
  return (
    <div>
      <NavbarUser />
      <div className="flex flex-col gap-[100px]">
        <div className="p-12 flex gap-12">
          <Sidebar className="flex-1" />
          <div className="bg-white p-16 rounded-3xl flex-1 w-full flex flex-col gap-12">
            <div className="text-xl font-bold">Change Password</div>
            <div className="flex">
              <form className="flex-1 pr-10 flex flex-col gap-10">
                <table className="w-full">
                  <tr>
                    <td>
                      <label htmlFor="oldPassword" className="text-sm text-[#373A42]">
                        Old Password
                      </label>
                    </td>
                    <td>
                      <input
                        type="text"
                        id="oldPassword"
                        name="password"
                        className="h-[55px] pl-5 border rounded-xl w-full text-sm text-[#C1C5D0]"
                        placeholder="Input Old Password ..."
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label htmlFor="newPassword" className="text-sm text-[#373A42]">
                      New Password
                      </label>
                    </td>
                    <td className="pt-10">
                      <input
                        type="password"
                        id="newPassword"
                        name="password"
                        className="h-[55px] pl-5 border rounded-xl w-full text-sm text-[#C1C5D0]"
                        placeholder="Input New Password ..."
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label htmlFor="confirmPass" className="text-sm text-[#373A42]">
                      Confirm Password
                      </label>
                    </td>
                    <td className="pt-10">
                      <input
                        type="password"
                        id="confirmPass"
                        name="password"
                        className="h-[55px] pl-5 border rounded-xl w-full text-sm text-[#C1C5D0]"
                        placeholder="Input Confirm Password ..."
                      />
                    </td>
                  </tr>
                </table>
                
                  <button className="h-[60px] w-full font-semibold text-white bg-[#3366ff] rounded-2xl shadow-xl">
                    Update
                  </button>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
export default ChangePassword;
