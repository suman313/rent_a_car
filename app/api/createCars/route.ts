import {
  formDataValueCheckForNum,
  formDataValueCheckForStr,
} from "@/app/types/typecheck";
import { prisma } from "@/prisma/prismaClient";

export async function POST(request: Request) {
  const formData = await request.json();
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

  try {
    const data = await prisma.car.create({
      data: rawFormData,
    });
    return Response.json({ data });
  } catch (error) {
    console.log(error);
    // return { message: "Failed to add car!" };
    throw error;
  }
}
