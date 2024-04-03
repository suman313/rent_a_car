import Image from "next/image";
import React from "react";
import aboutImage from "../../../media/about/about_image.jpg";
import playBtn from "../../../media/about/playBtn.svg";
import { numbercardsInfo } from "@/app/_constants/constants";
import NumberCards from "@/app/_components/Cards/NumberCards";
export const About = () => {
  return (
    <section className="bg-[#ffff] text-[#111010] md:h-[100vh]  flex justify-center items-center">
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 mx-8 md:mx-32 ">
        <div className="relative flex flex-col justify-center items-center">
          <div className="max-w-[400px]">
            <Image
              src={aboutImage}
              alt="about image"
              // width={400}
              // height={400}
            />
          </div>

          <div className="hidden md:block h-[10vh]"></div>
          <div className="hidden md:block absolute bottom-10 right-16 cursor-pointer">
            <Image src={playBtn} alt="youtube-play" width={100} height={100} />
          </div>
        </div>

        <div className="relative flex flex-col justify-center items-center md:justify-start md:items-start gap-6 md:mr-32">
          <div className="flex flex-col justify-between items-start">
            {" "}
            <p className="text-[1.2em] font-semibold capitalize">
              about company
            </p>
            <p className="text-[1.85rem] md:text-[2.75rem] font-[900] leading-tight">
              You start the engine and your adventure begins
            </p>
          </div>

          <p className=" text-[#817F91]">
            Certain but she but shyness why cottage. Guy the put instrument sir
            entreaties affronting. Pretended exquisite see cordially the you.
            Weeks quiet do vexed or whose. Motionless if no to affronting
            imprudence no precaution. My indulged as disposal strongly attended.
          </p>
          <div className="md:absolute grid grid-cols-2 md:grid-cols-3  gap-8 bottom-0">
            {numbercardsInfo.map((item) => (
              <NumberCards
                key={item.tagLine}
                icon={item.icon}
                value={item.value}
                tagLine={item.tagLine}
                alt={item.alt}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
