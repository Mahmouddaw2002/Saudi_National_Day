import React from "react";
import Offers from "../components/Offers";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Offers />
      <ContactUs />
      <Footer />
    </>
  );
};

export default HomePage;
