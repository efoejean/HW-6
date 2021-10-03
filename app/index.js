import data from "./data.js";

const highestMileageVehicle = data
  .map(({ vehicles }) => vehicles.sort((a, b) => b.mileage - a.mileage)[0])
  .sort((a, b) => b.mileage - a.mileage)[0];

const totalMileage = data.reduce((total, currentPerson) => {
  total += currentPerson.vehicles.reduce((personTotal, currentVehicle) => {
    personTotal += currentVehicle.mileage;
    return personTotal;
  }, 0);

  return total;
}, 0);

const yahooEmails = data
  .filter(({ email }) => email.endsWith("yahoo.com"))
  .map(({ email }) => email);

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

console.log(totalMileage4IL);
