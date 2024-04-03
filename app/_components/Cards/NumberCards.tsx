import Image, { StaticImageData } from "next/image";
import React from "react";
interface cardProps {
  icon: StaticImageData;
  value: number;
  tagLine: string;
  alt: string;
}

const NumberCards = ({ icon, value, tagLine, alt }: cardProps) => {
  return (
    <div className="flex flex-col items-start">
      <div>
        <Image src={icon} alt={alt} />
      </div>
      <div className="flex gap-6">
        <p className="text-[2.5rem] font-extrabold">{value}</p>
        <p className="text-[#a09d9d] font-bold flex justify-center items-center">
          {tagLine}
        </p>
      </div>
    </div>
  );
};

export default NumberCards;
