import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaFacebook, FaGoogle } from "react-icons/fa6";
import Logo from "../component/Logo";
import imgHeader from "../assets/img/hero.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/reducers/auth";
import { addData } from "../redux/reducers/profile";
import Loading from "../component/Loading";

function Signin() {
  const [warning, setWarning] = useState(0);
  const [loading, setLoading] = useState(0);
  const dispatch = useDispatch();
  const navigation = useNavigate();
  function processLogin(e) {
    e.preventDefault();
    setLoading(1);
    const email = e.target.email.value;
    const password = e.target.password.value;
    
    const dataForm = new URLSearchParams();
    dataForm.append("email", email);
    dataForm.append("password", password);
    fetch("https://wsw6zh-8888.csb.app/auth/login", {
      method: "POST",
      body: dataForm,
    }).then((response) => {
      response.json().then((data) => {
        if (data.success) {
          const token = data.results.token;
          dispatch(login(token));
          (async () => {
            const res = await fetch("https://wsw6zh-8888.csb.app/profile", {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
            const data = await res.json();
            dispatch(addData(data));
            setLoading(0);
            navigation("/");
          })();
        } else {
          setLoading(0);
          setWarning(1);
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
      {loading ? <Loading /> : ""}

      <div className=" flex-1 md:flex justify-center items-center bg-[#180161] ">
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
          {warning ? (
            <div className="bg-red-700 text-white py-2 px-3 rounded-md flex justify-between mb-3">
              Data yang anda masukkan salah{" "}
              <button
                onClick={() => {
                  setWarning(0);
                }}
              >
                x
              </button>
            </div>
          ) : (
            ""
          )}

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
            <div className="text-[#180161] font-bold text-end">
              Forget Password ?
            </div>
            <button className="rounded-2xl h-12 w-full pl-5 bg-[#180161] text-white font-semibold shadow-md">
              Sign in
            </button>
            <div className="flex flex-col gap-3 items-center">
              <p className="text-[#373A42] text-sm">or sign in with</p>
              <div className="flex gap-5">
                <button className="flex items-center justify-center h-[52px] w-[95px] border border-[#180161] rounded-xl">
                  <FaFacebook className="text-xl" />
                </button>
                <button className="flex items-center justify-center h-[52px] w-[95px] border border-[#180161] rounded-xl">
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
