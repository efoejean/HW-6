import data from "./data.js";
import { promises as fs } from "fs";
import express from "express";

const highestMileageVehicle = data
  .map(({ vehicles }) => vehicles.sort((a, b) => b.mileage - a.mileage)[0])
  .sort((a, b) => b.mileage - a.mileage)[0];

fs.writeFile("highestMileageVehicle.Json", String(highestMileageVehicle));
fs.readFile("./highestMileageVehicle.Json", "utf8").then((contents) => {
  console.log(contents);
});

const totalMileage = data.reduce((total, currentPerson) => {
  total += currentPerson.vehicles.reduce((personTotal, currentVehicle) => {
    personTotal += currentVehicle.mileage;
    return personTotal;
  }, 0);

  return total;
}, 0);

fs.writeFile("totalMileage.Json", String(totalMileage));
fs.readFile("./totalMileage.Json", "utf8").then((contents) => {
  console.log(contents);
});
const yahooEmails = data
  .filter(({ email }) => email.endsWith("yahoo.com"))
  .map(({ email }) => email);

fs.writeFile("yahooEmails.Json", String(yahooEmails));

fs.readFile("./yahooEmails.Json", "utf8").then((contents) => {
  console.log(contents);
});
const hiMileageVehicles = data
  .map(({ vehicles }) => vehicles.filter(({ mileage }) => mileage >= 36000))
  .flat();

fs.writeFile("hiMileageVehicles.Json", String(hiMileageVehicles));
fs.readFile("./hiMileageVehicles.Json", "utf8").then((contents) => {
  console.log(contents);
});
const totalMileage4IL = data
  .map(({ vehicles }) => vehicles.filter(({ st }) => st === "Illinois"))
  .flat()
  .reduce((total, currentVehicle) => {
    total += currentVehicle.mileage;
    return total;
  }, 0);

fs.writeFile("totalMileage4IL.Json", String(totalMileage4IL));
fs.readFile("./totalMileage4IL.Json", "utf8").then((contents) => {
  console.log(contents);
});
