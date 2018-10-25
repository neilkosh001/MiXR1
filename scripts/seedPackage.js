const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost"
);

const packageSeed = [
  {
    month: "january",
    year: 2019,
    bottle: [
      manufacturer: "jack daniels",
      flavor: "honey",
      size: "750 mL",
      alcoholType: "whiskey"
    ],
    item1: [
      item: "rocks glass",
      itemType: "glass",
      quantity: 2,
      brand: null
    ],
    item2: [
      item: "cigars",
      itemType: "accessory",
      quantity: 2,
      brand: "Cohiba"
    ],
    specialEdition: false,
    tier: 3,
  }
];

db.package
  .remove({})
  .then(() => db.Package.collection.insertMany(packageSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
