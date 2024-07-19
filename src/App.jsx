import React from "react";
import Signin from "./pages/Signin";
import Home from "./pages/Home";
import Event from "./pages/Event";
import Booking from "./pages/Booking";
import Payment from "./pages/Payment";
import EditProfile from "./pages/EditProfile";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ChangePassword from "./pages/ChangePassword";
import MyBooking from "./pages/MyBooking";
import MyWishlist from "./pages/MyWishlist";
import CreateEvent from "./pages/CreateEvent";
import Signup from "./pages/Signup";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Signin />,
  },
  {
    path: "/register",
    element: <Signup />,
  },
  {
    path: "/event",
    element: <Event />,
  },
  {
    path: "booking",
    element: <Booking />,
  },
  {
    path: "payment",
    element: <Payment />,
  },
  {
    path: "edit-profile",
    element: <EditProfile />,
  },
  {
    path: "change-password",
    element: <ChangePassword />,
  },
  {
    path: "my-booking",
    element: <MyBooking />,
  },
  {
    path: "my-wishlist",
    element: <MyWishlist />,
  },
  {
    path: "create-event",
    element: <CreateEvent />,
  },
]);

function App() {
  return (
    <section className="bg-[#F4F7FF]">
      <RouterProvider router={route} />
    </section>
  );
}

export default App;
