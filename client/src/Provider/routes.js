import React from "react";
import Home from "../views/Home";
import Appointment from "../views/Appointments";
import About from "../views/About";
import ContactUs from "../views/Contact";

const routes = ({ match: { path }, user }) => {
  switch (path) {
    case "/":
      return <Home user={user} />;
    case "/appointment":
      return <Appointment user={user} />;
    case "/about":
      return <About user={user} />;
    case "/contact":
      return <ContactUs user={user} />;

    default:
      return <div>not found</div>;
  }
};
export default routes;
