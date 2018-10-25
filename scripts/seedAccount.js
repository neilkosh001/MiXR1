const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost"
);

const memberSeed = [
  {
    firstName: "John",
    lastName: "Doe",
    dob: new Date(),
    address: [
      street: "123 Rodeo Dr",
      city: "Los Angeles",
      state: "CA",
      zip: "90210"
    ],
    email: "johndoe@gmail.com",
    billingInfo: [
      nameOnCard: "John Doe",
      cardType: "Visa",
      number: 4217852032834100
      expiration: [
        month: 03
        year: 19
      ],
      ccv: 221
    ],
    joinDate: new Date(Date.now()),
    packsRcvd: 0,
    packages: [
      tier: 3
      preferences: "whiskey"
    ]
  }
];

db.member
  .remove({})
  .then(() => db.Member.collection.insertMany(memberSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
