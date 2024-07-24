import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaFacebook, FaGoogle } from "react-icons/fa6";
import Logo from "../component/Logo";
import imgHeader from "../assets/img/hero.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/reducers/auth";

function Signin() {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  function processLogin(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // if (email === "admin@mail.com" && password === "1234") {
    //   navigation("/");
    // } else {
    //   alert("data anda salah");
    // }
    const dataForm = new URLSearchParams();
    dataForm.append("email", email);
    dataForm.append("password", password);

    fetch("https://api-dummy.fahrul.id/auth/login", {
      method: "POST",
      body: dataForm,
    }).then((response) => {
      response.json().then((data) => {
        if (data.success) {
          const token = data.results.token;
          dispatch(login(token));
          navigation("/");
        } else {
          alert(data.message);
        }
      });
    });
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
          <h2 className="text-2xl font-bold">Sign in</h2>
          <h4 className="text-xs">Hi, Welcome back to Urticket! </h4>
        </div>
        <div className="md:w-[350px]">
          <form onSubmit={processLogin} className="flex flex-col gap-3">
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
            <div className="text-[#3366FF] font-bold text-end">
              Forget Password ?
            </div>
            <button className="rounded-2xl h-12 w-full pl-5 bg-[#3366FF] text-white font-semibold shadow-md">
              Sign in
            </button>
            <div className="flex flex-col gap-3 items-center">
              <p className="text-[#373A42] text-sm">or sign in with</p>
              <div className="flex gap-5">
                <button className="flex items-center justify-center h-[52px] w-[95px] border border-[#3366FF] rounded-xl">
                  <FaFacebook className="text-xl" />
                </button>
                <button className="flex items-center justify-center h-[52px] w-[95px] border border-[#3366FF] rounded-xl">
                  <FaGoogle className="text-xl" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Signin;
