const fs = require("fs");

const loadCars = () => {
  const file = fs.readFileSync("./data/cars.json", "utf-8");
  const cars = JSON.parse(file);
  return cars;
};

const filterCars = (typeDriver, tanggal, penumpang) => {
  const cars = loadCars();

  let tgl = new Date(tanggal);
  let year = tgl.getFullYear();

  const filter = cars
    .filter((car) => {
      if (typeDriver === "true") {
        return car.available === true;
      } else {
        return car.available === false;
      }
    })
    .filter((car) => {
      return car.year == year;
    })
    .filter((car) => {
      return car.capacity >= penumpang;
    });
  console.log(filter);
  return filter;
};

module.exports = {
  loadCars,
  filterCars,
};
