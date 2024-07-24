import React, { useEffect } from "react";
import NavbarBtn from "../component/NavbarBtn";
import imgHeader from "../assets/img/hero.png";
import Footer from "../component/Footer";
import EventHome from "../component/EventHome";
import Location from "../component/LocationHome";
import Category from "../component/CategoryHome";
import Partner from "../component/Partner";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addEvent } from "../redux/reducers/event";

function Home() {
  const endpoint = "https://api-dummy.fahrul.id/events";
  const event = useSelector((state) => state.event.dataEvent);
  const dispatch = useDispatch();
  const data = [
    {
      id: 1,
      title: "Festivals terbaru 2014",
      time: "Wed, 15 Nov, 4:00 PM",
      img: "https://i.pinimg.com/564x/b6/5b/66/b65b66e5707e73d032773d74c1d7479f.jpg",
    },
    {
      id: 2,
      title: "Jurassic Park",
      time: "Wed, 16 Nov, 3:00 PM",
      img: "https://i.pinimg.com/564x/7b/bc/e1/7bbce19e94374f86ea924476dae005f7.jpg",
    },
    {
      id: 3,
      title: "Eat The World",
      time: "Wed, 16 Nov, 4:00 PM",
      img: "https://i.pinimg.com/564x/0f/4e/56/0f4e563789c7e3a6395ae333f6d7df54.jpg",
    },
    {
      id: 4,
      title: "Festivals 2014",
      time: "Wed, 15 Nov, 4:00 PM",
      img: "https://i.pinimg.com/564x/b6/5b/66/b65b66e5707e73d032773d74c1d7479f.jpg",
    },
    {
      id: 5,
      title: "Jurassic Park",
      time: "Wed, 16 Nov, 3:00 PM",
      img: "https://i.pinimg.com/564x/7b/bc/e1/7bbce19e94374f86ea924476dae005f7.jpg",
    },
    {
      id: 6,
      title: "Eat The World",
      time: "Wed, 16 Nov, 4:00 PM",
      img: "https://i.pinimg.com/564x/0f/4e/56/0f4e563789c7e3a6395ae333f6d7df54.jpg",
    },
  ];

  useEffect(() => {
    (async () => {
      const data = await axios.get(endpoint);
      dispatch(addEvent(data.data.results))
    })();
  }, []);
  return (
    <div>
      <NavbarBtn />
      <div className="flex flex-col gap-[100px]">
        <section className="bg-[#3366FF] bg-[url('../assets/img/bg1.png')] bg-no-repeat bg-cover flex justify-end items-center md:h-[660px]">
          <img src={imgHeader} alt="img" className="w-auto" />
        </section>

        <EventHome data={event} />
        <Location />
        <Category data={event} />
        <Partner />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
