import Image, { StaticImageData } from "next/image";
import React from "react";

interface cardProps {
  feedback: string;
  profile: StaticImageData;
}

const TestimonialsCards = ({ feedback, profile }: cardProps) => {
  return (
    <div className="flex flex-col gap-4 px-4">
      <div className="">
        <p className="text-lg text-[#9a9696]">
          <span className="pr-2">
            {" "}
            <i
              className="fa-solid fa-quote-left fa-lg"
              style={{ color: "#ff531a" }}
            ></i>
          </span>
          {feedback}
          <span className="pl-2">
            {" "}
            <i
              className="fa-solid fa-quote-right fa-lg"
              style={{ color: "#ff531a" }}
            ></i>
          </span>
        </p>
      </div>
      <div className="flex justify-center items-center">
        <div className="relative w-16 h-16 rounded-[50%] overflow-hidden">
          <Image src={profile} alt="customer_photo" fill />
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCards;
