import React, { useEffect, useState } from "react";
import Footer from "../component/Footer";
import Sidebar from "../component/Sidebar";
import { FaCamera } from "react-icons/fa6";
import jhon from "../assets/img/jhon.png";
import NavbarBtn from "../component/NavbarBtn";
import { useSelector } from "react-redux";
import Loading from "../component/Loading";

function EditProfile() {
  const [loading, setLoading] = useState(0)
  const [profession, setProfession] = useState([]);
  const [nationalities, setNationalities] = useState([]);
  const dataProfile = useSelector((state) => state.profile.data.results);
  const token = useSelector((state) => state.auth.data.token);
  useEffect(()=>{
    (async function () {
      setLoading(1)
      const response = await fetch(
        "https://wsw6zh-8888.csb.app/profile/professions",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const resNat = await fetch(
        "https://wsw6zh-8888.csb.app/profile/nationalities",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      const dataNats = await resNat.json()
      const dataProfesi = data.results
      const dataNat = dataNats.results
      setProfession(dataProfesi)
      setNationalities(dataNat)
      setLoading(0)
    })();
  },[token])
  
  const dataDate = new Date(dataProfile.birthdayDate) 
  return (
    <div>
    {loading ? <Loading/> : ''}
      <NavbarBtn />
      <div className="flex flex-col gap-[100px]">
        <div className="p-5 md:p-12 flex gap-12 md:flex-row flex-col">
          <Sidebar className="flex-1" />
          <div className="bg-white p-16 rounded-3xl flex-1 w-full flex flex-col gap-12">
            <div className="text-xl font-bold">Profile</div>
            <div className="flex flex-col-reverse md:flex-row gap-10 md:gap-0">
              <form className="flex-1 pr-10 flex flex-col gap-10">
                <table className="w-full">
                  <tr>
                    <td>
                      <label htmlFor="name" className="text-sm text-[#373A42]">
                        Name
                      </label>
                    </td>
                    <td>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="name"
                        defaultValue={dataProfile.name ? dataProfile.name :''}
                        className="h-[55px] pl-5 border rounded-xl w-full text-sm text-[#C1C5D0]"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label htmlFor="username" className="text-sm text-[#373A42]">Username</label>
                    </td>
                    <td className="h-[55px] rounded-xl w-full text-sm text-[#C1C5D0] flex gap-3 items-center mt-3">
                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="username"
                        defaultValue={dataProfile.username ?dataProfile.username:''}
                        className="h-[55px] pl-5 border rounded-xl w-full text-sm text-[#C1C5D0]"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label htmlFor="email" className="text-sm text-[#373A42]">Email</label>
                    </td>
                    <td className="h-[55px] rounded-xl w-full text-sm text-[#C1C5D0] flex gap-3 items-center mt-3">
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="email"
                        defaultValue={dataProfile.email ? dataProfile.email:''}
                        className="h-[55px] pl-5 border rounded-xl w-full text-sm text-[#C1C5D0]"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label htmlFor="phoneNumber" className="text-sm text-[#373A42]">
                        Phone Number
                      </label>
                    </td>
                    <td className="h-[55px] rounded-xl w-full text-sm text-[#C1C5D0] flex gap-3 items-center mt-3">
                    <input
                        type="number"
                        id="phoneNumber"
                        name="phoneNumber"
                        placeholder="phoneNumber"
                        defaultValue={dataProfile.phoneNumber ? dataProfile.phoneNumber: ''}
                        className="h-[55px] pl-5 border rounded-xl w-full text-sm text-[#C1C5D0]"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="text-sm text-[#373A42]">Gender</span>
                    </td>
                    <td className="h-[55px] rounded-xl w-full text-sm text-[#C1C5D0] flex gap-3 items-center mt-3">
                      <input
                        type="radio"
                        name="gender"
                        id="male"
                        value="Male"
                        defaultChecked={
                          dataProfile.gender === "Male" ? true : false
                        }
                      />{" "}
                      <label htmlFor="male">Male</label>
                      <input
                        type="radio"
                        name="gender"
                        id="female"
                        value="Female"
                        defaultChecked={
                          dataProfile.gender === "Female" ? true : false
                        }
                      />{" "}
                      <label htmlFor="female">Female</label>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label
                        htmlFor="profession"
                        className="text-sm text-[#373A42]"
                      >
                        Profession
                      </label>
                    </td>
                    <td>
                      <select
                        name="profession"
                        id="profession"
                        className="h-[55px] pl-5 border rounded-xl w-full text-sm text-[#C1C5D0] my-3"
                      >
                      {profession.map((i)=>{
                        return(
                        <option key={i.id} selected={i.name === dataProfile.profession} value={i.name}>{i.name}</option>
                        )
                      })}
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label
                        htmlFor="nationality"
                        className="text-sm text-[#373A42]"
                      >
                        Nationality
                      </label>
                    </td>
                    <td>
                    {/* <input
                        type="text"
                        id="nationality"
                        name="nationality"
                        placeholder="nationality"
                        defaultValue={dataProfile.nationality}
                        className="h-[55px] pl-5 border rounded-xl w-full text-sm text-[#C1C5D0]"
                      /> */}
                      <select
                        name="nationality"
                        id="nationality"
                        className="h-[55px] pl-5 border rounded-xl w-full text-sm text-[#C1C5D0] mt-3"
                        
                      >
                      {nationalities.map((nationality)=>{
                        return(
                        <option key={nationality.id}  value={nationality.name} selected={nationality.name === dataProfile.nationality}>{nationality.name}</option>
                        )
                      })}
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label className="text-sm text-[#373A42]" htmlFor="birthday">
                        Birthday Date
                      </label>
                    </td>
                    <td className="h-[55px] rounded-xl w-full text-sm text-[#C1C5D0] flex gap-3 items-center mt-3">
                      <input className="h-[55px] pl-5 border rounded-xl w-full text-sm text-[#C1C5D0]" type="date" id="birthday" name='birthday' defaultValue={dataDate.toISOString().split('T')[0]}/>
                      {/* <span className="underline">24</span> /{" "}
                      <span className="underline">10</span> /{" "}
                      <span className="underline">2000</span>{" "}
                      <a href="#" className="text-[#3366ff] underline">
                        Edit
                      </a> */}
                    </td>
                  </tr>
                </table>
                <div>
                  <button className="h-[60px] md:w-[315px] w-full font-semibold text-white bg-[#180161] rounded-2xl shadow-xl">
                    Save
                  </button>
                </div>
              </form>
              <div>
                <div className="md:border-l-2 px-20 flex items-center flex-col gap-6">
                  <div className="overflow-hidden border-4 border-[#180161] h-[137px] w-[137px] rounded-full  flex justify-center items-center ">
                    <img
                      src={dataProfile.picture}
                      alt="Profile"
                      className="h-auto w-[115px] rounded-full brightness-50"
                    />
                    <FaCamera className="text-2xl text-white absolute " />
                  </div>
                  <div className="hidden md:flex flex-col gap-5">
                    <button className="h-[40px] border-2 border-[#180161] rounded-xl w-full text-[#180161] text-sm font-semibold">
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
