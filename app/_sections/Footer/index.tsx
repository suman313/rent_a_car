import Button from "@/app/_components/Button";
import { footerLinks } from "@/constants";
import Link from "next/link";
import React from "react";
import styles from "./footer.module.css";
const Footer = () => {
  return (
    <section className="relative py-8 px-4 md:py-16 md:px-8 bg-[#fff] text-[#070707] border-t-[2px] border-t-[#ece2e2]">
      <div
        className={`${styles.container} flex flex-wrap justify-between gap-6 `}
      >
        <div className="flex flex-col gap-4">
          <h1>
            <span>Car</span>Rental
          </h1>
          <p className="text-[#8f8c8c] ">
            Use securing confined his shutters. Delightful as he it acceptance
            an solicitude discretion.
          </p>
          <p>
            <span>
              <i className="fa-solid fa-phone"></i>
            </span>{" "}
            (123) 498-4600
          </p>
          <p>
            <span className="bg-[#fff]">
              <i className="fa-solid fa-envelope"></i>
            </span>{" "}
            sumanmodak@gmail.com
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h1>Company</h1>
          <ul className="flex flex-col justify-between h-full">
            {footerLinks.company.map((item) => (
              <li key={item.label}>
                <Link href={item.link}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h1>Services</h1>
          <ul className="flex flex-col justify-between h-full">
            {footerLinks.services.map((item) => (
              <li key={item.label}>
                <Link href={item.link}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col">
          <h1>Working hours</h1>
          <p>
            <span>Mon - Fri: </span>09:00AM - 09:00PM
          </p>
          <p>
            <span>Sat: </span>09:00AM - 07:00PM
          </p>
          <p>
            <span>Sunday: </span>Closed
          </p>
        </div>
        <div className="flex flex-col">
          <h1>Subscription</h1>
          <p>Subscribe your email address for latest news & updates</p>
          <Button variant="btn-primary">Subscribe</Button>
        </div>
      </div>
      <div className="flex flex-wrap justify-between bottom-4 pt-4 md:pt-8 w-[96%]">
        <p>
          <span>
            <i className="fa-regular fa-copyright"></i>
          </span>
          2024 <span className="font-bold">Car Rental.</span>All Rights
          Reserved.
        </p>
        <div className="flex justify-between gap-6">
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-youtube"></i>
        </div>
      </div>
    </section>
  );
};

export default Footer;
