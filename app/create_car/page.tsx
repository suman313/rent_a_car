"use client";
import React, { useEffect, useState } from "react";
import { create_car, getCategories, getLocations } from "../utils";
import { category, location } from "../types";
import { useFormState } from "react-dom";

const page = () => {
  const [categories, setCategories] = useState<category[]>([
    {
      id: "",
      Category_name: "",
      No_of_luggage: 0,
      No_of_person: 0,
      Cost_per_day: 0,
      Late_fee_per_hour: 0,
    },
  ]);
  const [locations, setLocations] = useState<location[] | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesData = await getCategories();
        setCategories(categoriesData);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    const fetchLocations = async () => {
      try {
        const locations = await getLocations();
        setLocations(locations);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
    fetchLocations();
  }, []);

  const [error, formAction] = useFormState(create_car, null);
  return (
    <section className="bg-[#ffff]">
      <div className="flex flex-col flex-wrap justify-center items-center py-12 md:py-12 md:h-[100vh] text-[#514c4c]">
        <form
          action={formAction}
          className="flex flex-col justify-center items-center gap-6"
        >
          <div className="w-full flex justify-center items-center md:justify-between flex-wrap gap-6">
            <div className="flex flex-col gap-4">
              <label htmlFor="reg_no">Registration number</label>
              <input type="text" name="reg_no" id="reg_no" />
            </div>
            <div className="flex flex-col gap-4">
              <label htmlFor="model">Model number</label>
              <input type="text" name="model_no" id="model" />
            </div>
          </div>
          <div className="w-full flex justify-center items-center md:justify-between flex-wrap gap-6">
            <div className="flex flex-col gap-4">
              <label htmlFor="make">Make</label>
              <input
                type="text"
                name="make"
                id="make"
                placeholder="e.g. Chevrolet"
              />
            </div>
            <div className="flex flex-col gap-4">
              <label htmlFor="model_year">Model Year</label>
              <input type="text" name="model_year" id="model_year" />
            </div>
          </div>
          <div className="w-full flex justify-center items-center md:justify-between flex-wrap gap-6">
            <div className="flex flex-col gap-4">
              <label htmlFor="car_category_name">Car category name</label>
              <input type="text" name="category_name" id="category_name" />
            </div>
            <div className="flex flex-col gap-4">
              <label htmlFor="mileage">Mileage in number</label>
              <input type="number" name="mileage" id="mileage" />
            </div>
          </div>
          <div>
            <div className="w-full flex flex-col  justify-center items-center md:justify-between gap-4">
              <label htmlFor="photo">Upload photo</label>
              <input type="file" accept=".jpg, .png" name="photo" id="photo" />
            </div>
          </div>
          <div className="w-full flex justify-center items-center md:justify-between flex-wrap gap-6">
            <div className="flex flex-col gap-4">
              <label htmlFor="category">Select Category</label>
              <select name="category" id="category">
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.Category_name}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-4">
              <label htmlFor="location">Select Location</label>
              <select name="location" id="location">
                {locations !== null &&
                  locations.map((location) => (
                    <option key={location.id} value={location.id}>
                      {location.Location_name}
                    </option>
                  ))}
              </select>
            </div>
          </div>
          <div className="w-full flex justify-center items-center bg-primary-100 hover:bg-primary-150 p-2 text-[#fff] font-medium text-lg">
            <button type="submit">Add Car</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default page;
