"use client";
import { navbarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logoIcon from "../../../media/logo_v4.png";
import Button from "../Button";

function Navbar() {
  return (
    <nav className="sticky z-[100] md:px-32 ">
      <div className="flex justify-between p-4 z-[100]">
        <div className="w-[100px] md:w-[8rem] h-auto">
          <Image src={logoIcon} alt="logo" />
        </div>
        <div className="hidden lg:flex justify-between gap-4">
          <ul className="flex justify-between gap-4 text-[#010103] text-[15px] font-medium">
            {navbarLinks.map((item) => (
              <li key={item.Label} className="p-3">
                <Link href={item.link}>{item.Label}</Link>
              </li>
            ))}
          </ul>
          <div className="flex gap-6">
            <button className="text-[#010103] text-[1.2rem] font-medium">
              Sign IN
            </button>
            <Button variant="btn-primary">Register</Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
