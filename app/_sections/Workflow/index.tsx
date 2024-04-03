import VerticalCards from "@/app/_components/Cards/VerticalCards";
import SearchBar from "@/app/_components/SearchBar";
import { verticalCards } from "@/app/_constants/constants";
import React from "react";

const Workflow = () => {
  return (
    <section className="bg-[#ffff] text-[#111010] md:h-[100vh]  flex justify-center items-center ">
      <div className="relative ">
        <SearchBar />
        <div className="flex flex-col justify-center items-center md:mx-32">
          <div className="flex flex-col justify-center items-center py-24">
            <p className="text-[1.2em] font-semibold">plan your trip now</p>
            <p className="text-[2rem] md:text-[3rem] font-bold">
              Quick & easy car rental
            </p>
          </div>
          <div className="grid md:grid-cols-3">
            {verticalCards.map((item) => (
              <VerticalCards
                key={item.heading}
                heading={item.heading}
                description={item.description}
                Icon={item.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
