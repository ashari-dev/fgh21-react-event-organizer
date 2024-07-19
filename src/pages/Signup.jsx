import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import Logo from "../component/Logo";
import imgHeader from "../assets/img/hero.png";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const navigation = useNavigate();

  function register(e) {
    e.preventDefault();
    const fullname = e.target.fullname.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const cPassword = e.target.cPassword.value;

    if (fullname === "" || email === "" || password === "") {
      alert("data tidak boleh kosong!!!");
    } else {
      if (fullname.length < 4) {
        alert("Fullname tidak boleh kurang dari 8 karakter!!!");
      } else if (password.length < 8) {
        alert("Password harus lebih dari 8 karakter!!!");
      } else if (password !== cPassword) {
        alert("Confirm password tidak sama dengan password!!!");
      } else {
        navigation("/login");
      }
    }
  }

  const [pass, setPass] = useState("password");
  const [icon, setIcon] = useState(<FaEyeSlash />);
  function showPassword() {
    if (pass === "password") {
      setPass("text");
      setIcon(<FaEye />);
    }
  }
  function hiddenPassword() {
    if (pass === "text") {
      setPass("password");
      setIcon(<FaEyeSlash />);
    }
  }
  return (
    <div className="flex">
      <div className=" flex-1 md:flex justify-center items-center bg-[#3366FF] ">
        <img src={imgHeader} alt="img" className="h-auto w-auto" />
      </div>
      <div className="flex flex-col w-full md:w-[500px] gap-12 pt-52 pb-52 pl-20 pr-20">
        <div>
          <Logo />
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-bold">Sign up</h2>
          <h4 className="text-xs">
            Already have an account?{" "}
            <Link className="text-[#3366ff] font-semibold" to={"/login"}>
              Log In
            </Link>{" "}
          </h4>
        </div>
        <div className="md:w-[350px]">
          <form onSubmit={register} className="flex flex-col gap-3">
            <div>
              <input
                className="border outline-none rounded-2xl h-12 w-full pl-5 text-[#C1C5D0]"
                type="text"
                name="fullname"
                id="fullname"
                placeholder="Full name"
              />
            </div>
            <div>
              <input
                className="border outline-none rounded-2xl h-12 w-full pl-5 text-[#C1C5D0]"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
              />
            </div>
            <div className="flex border rounded-2xl overflow-hidden bg-white pr-3">
              <input
                className=" h-12 w-full pl-5 text-[#C1C5D0] outline-none"
                type={pass}
                name="password"
                id="password"
                placeholder="Password"
              />
              <button
                type="button"
                onMouseDown={showPassword}
                onMouseUp={hiddenPassword}
              >
                {icon}
              </button>
            </div>
            <div className="flex border rounded-2xl overflow-hidden bg-white pr-3">
              <input
                className=" h-12 w-full pl-5 text-[#C1C5D0] outline-none"
                type={pass}
                name="cPassword"
                id="cPassword"
                placeholder="Confirm Password"
              />
              <button
                type="button"
                onMouseDown={showPassword}
                onMouseUp={hiddenPassword}
              >
                {icon}
              </button>
            </div>
            <div className="text-[#3366FF]  text-sm">
              <input type="checkbox" /> Accept terms and condition
            </div>
            <button className="rounded-2xl h-12 w-full pl-5 bg-[#3366FF] text-white font-semibold shadow-md">
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Signup;
