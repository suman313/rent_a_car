"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";
import TestimonialsCards from "@/app/_components/Cards/TestimonialsCards";
import { testimonialInfo } from "@/app/_constants/constants";

const Testimonials = () => {
  return (
    <section className="bg-[#f8f8f8] py-4 md:py-16">
      <div className="md:mx-32">
        <div className="flex flex-col items-center gap-4 md:gap-8  md:mx-32">
          <div className="flex flex-col items-center justify-center gap-2 text-[#070707]">
            <p className="text-[1.5rem] font-bold">Trusted by People</p>
            <p className="text-[2rem] md:text-[3.2rem] font-extrabold">
              {" "}
              Cutomer's reviews
            </p>
            <p className="text-wrap">
              Customers love us! Trusted by many, our service ensures
              <br />
              satisfaction. See what others say in our glowing reviews
            </p>
          </div>

          <Swiper
            slidesPerView={2}
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {testimonialInfo.map((item) => (
              <SwiperSlide className="py-4">
                <TestimonialsCards
                  key={item.feedback}
                  feedback={item.feedback}
                  profile={item.customerImg}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
