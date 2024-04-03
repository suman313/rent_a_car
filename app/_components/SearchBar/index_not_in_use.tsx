import React from "react";
import carIcon from "../../../media/icons/carCategory.svg";
import locationIcon from "../../../media/icons/loaction.svg";
import dateIcon from "../../../media/icons/date.svg";
import Image from "next/image";
import "./search.css";

const SearchBar = () => {
  return (
    <div className="bg-[indigo]">
      <p className="md:mx-32 text-[1.25rem] md:text-[2.5rem] font-bold p-6">
        Book a Ride
      </p>
      <div className="grid grid-cols-1 md:grid-rows-3  gap-4 md:mx-32 p-6">
        {/* first row starts */}
        <div className="grid md:grid-flow-col gap-4">
          {/* car category section starts */}
          <div className="flex flex-col justify-between gap-2 min-w-[200px]">
            <div className="flex justify-start items-start">
              <Image src={carIcon} alt="car category" width={45} height={45} />
              <label
                htmlFor="car-category"
                className="text-[#fff] font-bold text-[1rem]  self-end"
              >
                Seclect a car category
              </label>
            </div>
            <select className="car-category " id="car-category">
              <option value="car1">car1</option>
              <option value="car1">car1</option>
              <option value="car1">car1</option>
              <option value="car1">car1</option>
              <option value="car1">car1</option>
            </select>
          </div>
          {/* car category section ends */}

          {/* pickup loaction section starts */}
          <div className="flex flex-col justify-between gap-2 min-w-[200px]">
            <div className="flex justify-start items-start gap-2">
              <Image src={locationIcon} alt="location" width={35} height={35} />
              <label
                htmlFor="pickup-date"
                className="text-[#fff] font-bold text-[1rem]  self-end"
              >
                Pick UP Location
              </label>
            </div>
            <select className="car-category " id="car-category">
              <option value="car1">car1</option>
              <option value="car1">car1</option>
              <option value="car1">car1</option>
              <option value="car1">car1</option>
              <option value="car1">car1</option>
            </select>
          </div>
          {/* pickup location section ends */}
          {/* pickup date section starts */}
          <div className="flex flex-col justify-between gap-2 min-w-[200px]">
            <div className="flex justify-start items-start gap-2">
              <Image src={dateIcon} alt="location" width={35} height={35} />
              <label
                htmlFor="pickup-date"
                className="text-[#fff] font-bold text-[1rem]  self-end"
              >
                Pick Up date
              </label>
            </div>
            <input
              type="date"
              name="pickup-date"
              className="datepicker-input"
              id="pickup-date"
            />
          </div>
          {/* pickup date section ends */}
        </div>
        {/* first row ends */}
        {/* second row starts */}
        <div className="grid md:grid-flow-col gap-4">
          <div className="flex flex-col justify-between gap-2 min-w-[221px]">
            <div className="flex justify-start items-start gap-2">
              <Image src={locationIcon} alt="location" width={35} height={35} />
              <label
                htmlFor="pickup-date"
                className="text-[#fff] font-bold text-[1rem]  self-end"
              >
                Pick UP Location
              </label>
            </div>
            <select className="car-category " id="car-category">
              <option value="car1">car1</option>
              <option value="car1">car1</option>
              <option value="car1">car1</option>
              <option value="car1">car1</option>
              <option value="car1">car1</option>
            </select>
          </div>
          <div className="flex flex-col justify-between gap-2 min-w-[221px]">
            <div className="flex justify-start items-start gap-2">
              <Image src={dateIcon} alt="location" width={35} height={35} />
              <label
                htmlFor="pickup-date"
                className="text-[#fff] font-bold text-[1rem]  self-end"
              >
                Pick Up date
              </label>
            </div>{" "}
            <input
              type="date"
              name="pickup-date"
              className="datepicker-input"
              id="pickup-date"
            />
          </div>
          <div className="flex flex-col-reverse min-w-[221px]">
            <button className=" btn-primary btn-default">Submit</button>
          </div>
        </div>
        {/* second row ends */}
      </div>
    </div>
  );
};

export default SearchBar;
