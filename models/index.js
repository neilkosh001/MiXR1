const router = require("express").Router();
const memberRoutes = require("./member");
const packageRoutes = require("./package");

// // package routes
// router.use("/package", packageRoutes);

module.exports = router;

module.exports = {
  Member: require("./member"),
  Package: require("./package")
};
