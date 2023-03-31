const express = require("express");
const app = express();
const port = 8000;

app.set("view engine", "ejs");
app.use("/", express.static("public"));

const { loadCars, filterCars } = require("../public/scripts/app");

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/cari-mobil", (req, res) => {
  const filter = filterCars(
    req.query.typeDriver,
    req.query.tanggal,
    req.query.penumpang
  );
  res.render("cari-mobil", {
    filter,
  });
});

app.listen(port, (req, res) => {
  console.log(`App listening on port ${port}`);
});
