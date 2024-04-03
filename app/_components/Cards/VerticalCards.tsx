import Image, { StaticImageData } from "next/image";
import React from "react";
interface cardProps {
  heading: string;
  description: string;
  Icon: StaticImageData;
}

const VerticalCards = ({ heading, description, Icon }: cardProps) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Image src={Icon} alt="" />
      <p className="text-[1.3rem] font-bold capitalize">{heading}</p>
      <p className="text-center text-[#817F91] px-16">{description}</p>
    </div>
  );
};

export default VerticalCards;
