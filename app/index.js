import data from "./data.js";
import { promises as fs } from "fs";

const highestMileageVehicle = data
  .map(({ vehicles }) => vehicles.sort((a, b) => b.mileage - a.mileage)[0])
  .sort((a, b) => b.mileage - a.mileage)[0];

fs.writeFile("highestMileageVehicle.Json", String(highestMileageVehicle));

const totalMileage = data.reduce((total, currentPerson) => {
  total += currentPerson.vehicles.reduce((personTotal, currentVehicle) => {
    personTotal += currentVehicle.mileage;
    return personTotal;
  }, 0);

  return total;
}, 0);

fs.writeFile("totalMileage.Json", String(totalMileage));

const yahooEmails = data
  .filter(({ email }) => email.endsWith("yahoo.com"))
  .map(({ email }) => email);

fs.writeFile("yahooEmails.Json", String(yahooEmails));

const hiMileageVehicles = data
  .map(({ vehicles }) => vehicles.filter(({ mileage }) => mileage >= 36000))
  .flat();

const totalMileage4IL = data
  .map(({ vehicles }) => vehicles.filter(({ st }) => st === "Illinois"))
  .flat()
  .reduce((total, currentVehicle) => {
    total += currentVehicle.mileage;
    return total;
  }, 0);
