"use server";
import { PrismaClient } from "@prisma/client";
import { FilterProps } from "../types";
import { redirect } from "next/navigation";
import {
  formDataValueCheckForNum,
  formDataValueCheckForStr,
} from "../types/typecheck";

const prisma = new PrismaClient();

export async function login(prevState: any, formdata: FormData) {
  const rawFormData = {
    email: formdata.get("email")?.toString(),
    DL_No: formdata.get("dl_no")?.toString(),
  };
  try {
    const data = await prisma.user.findUnique({
      where: rawFormData,
    });

    if (data?.email) {
      console.log(data.email);
      // sessionStorage.setItem("user", data.email);
    } else {
      throw new Error("User not found!");
    }
  } catch (error) {
    console.log("Login error: ", error);
    return { message: "email and password do not match!" };
  }

  redirect("/");
}

export async function signup(
  prevState: any,
  formData: FormData
): Promise<object> {
  const rawFormData = {
    email: formData.get("email")?.toString(),
    DL_No: formData.get("dl_no")?.toString(),
    fname: formData.get("fname")?.toString(),
    lname: formData.get("lname")?.toString(),
    phone_number: formData.get("p_no")?.toString(),
    street: formData.get("street")?.toString(),
    city: formData.get("city")?.toString(),
    Zip_code: formData.get("zip_code")?.toString(),
  };
  console.log(rawFormData);

  try {
    const res = await prisma.user.create({
      data: rawFormData,
    });
    console.log(res);
  } catch (error) {
    return { message: "jllsls" };
  }
  redirect("/login");
}

export async function create_car(prevState: any, formData: FormData) {
  const rawFormData = {
    registration_number: formDataValueCheckForStr(formData.get("reg_no")),
    Model: formDataValueCheckForStr(formData.get("model_no")),
    Make: formDataValueCheckForStr(formData.get("make")),
    Model_year: formDataValueCheckForStr(formData.get("model_year")),
    Car_category_name: "none",
    Mileage: formDataValueCheckForNum(formData.get("mileage")),
    ImageUrl: formDataValueCheckForStr(formData.get("photo")),
    Availability_flag: true,
    Category_name: formDataValueCheckForStr(formData.get("category")),
    Location_name: formDataValueCheckForStr(formData.get("location")),
  };
  console.log(rawFormData);
  // return "";
  try {
    const data = await prisma.car.create({
      data: rawFormData,
    });
  } catch (error) {
    console.log(error);
    return { message: "Failed to add car!" };
  }
  return redirect("/cars");
}

export async function getCategories() {
  try {
    const categories = await prisma.car_category.findMany();
    return categories;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw new Error("Failed to fetch categories");
  }
}

export async function getLocations() {
  try {
    const locations = await prisma.location_details.findMany();
    return locations;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw new Error("Failed to fetch categories");
  }
}
