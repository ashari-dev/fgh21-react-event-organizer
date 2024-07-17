import React from "react";
import NavbarBtn from "../component/NavbarBtn";
import imgHeader from "../assets/img/hero.png";
import Footer from "../component/Footer";
import EventHome from "../component/EventHome";
import Location from "../component/LocationHome";
import Category from "../component/CategoryHome";
import Partner from "../component/Partner";

function Home() {
  return (
    <div>
      <NavbarBtn />
      <div className="flex flex-col gap-[100px]">
        <section className="bg-[#3366FF] bg-[url('../assets/img/bg1.png')] bg-no-repeat bg-cover flex justify-end items-center h-[660px]">
          <img src={imgHeader} alt="img" className="h-[450px] w-auto" />
        </section>

        <EventHome />
        <Location />
        <Category />
        <Partner />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
