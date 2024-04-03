import { car_categoryData, carsData, locationData, usersData } from "../data";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function main() {
  await prisma.user.create({
    data: {
      email: "user1@gmail.com",
      DL_No: "452s2s5ssgh",
      fname: "Sam",
      lname: "Karan",
      phone_number: "6524123",
      street: "Mirja galif",
      city: "Amsterdam",
      Zip_code: "80001",
      role: "ADMIN",
    },
  });

  await prisma.car_category.createMany({
    data: car_categoryData,
  });

  await prisma.location_details.createMany({
    data: locationData,
  });

  await prisma.car.createMany({
    data: carsData,
  });
}

try {
  main();
} catch (error) {
  console.log(error);
  process.exit(1);
} finally {
  prisma.$disconnect();
}
