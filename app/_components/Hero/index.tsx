import React from "react";
import Navbar from "../Navbar";
import Image from "next/image";
import "./hero.css";
//images
import heroBackgroundBanner from "../../../media/hero-banner_image.png";
import bannerCar from "../../../media/banner_car.png";

import Button from "../Button";

function Hero() {
  return (
    <section className="relative bg-[#f8f8f8] hero-section">
      <Navbar />
      <div className="relative grid grid-cols-1 md:grid-cols-[_0.5fr,_1fr] z-[100] px-4 md:pl-32 md:pr-0 py-8 md:py-16">
        <div className="flex flex-col gap-2">
          <p className="text-[1.5rem] font-bold text-[#131212] pt-6">
            Plan your trip
          </p>
          <p className="text-[#131212] font-bold text-[3rem] leading-tight">
            Save <span className="text-[#FF4D30]">big</span> with our car rental
          </p>
          <p className="text-[0.8rem] font-bold text-[#696666]">
            To contribute to positive change and achieve our sustainibility
            goals with many extraodinary
          </p>
          <div className="flex gap-4 py-4">
            <Button variant="btn-secondary">Book Ride</Button>
            <Button variant="btn-dark">Learn More</Button>
          </div>
        </div>

        <Image src={bannerCar} alt="hero section car" />
      </div>
    </section>
  );
}

export default Hero;
