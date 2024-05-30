import React from "react";
import Header from "../../Components/Header/Header";
import Hero from "../../Components/Hero/Hero";
import Galary from "../../Components/Galary/Galary";
import Experience from "../../Components/Experience/Experience";
import Quickvideo from "../../Components/Quickvideo/Quickvideo";
import Products from "../../Components/Products/Products";
import Customers from "../../Components/Customers/Customers";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Galary />
      <Experience />
      <Quickvideo />
      <Products />
      <Customers />
      <Footer />
    </div>
  );
};

export default Home;
