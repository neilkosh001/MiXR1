const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const packageSchema = new Schema({
  month: {type: String, required: true},
  year: {type: Number, required: true},
  bottle: {
    manufacturer: {type: String, required: true},
    flavor: {type: String, required: true},
    size: {type: String, required: true},
    alcoholType: {type: String, required: true}
  },
  item1: {
    item: {type: String, required: false},
    itemType: {type: String, required: false},
    quantity: {type: Number, required: false},
    brand: {type: String, required: false}
  },
  item2: {
    item: {type: String, required: false},
    itemType: {type: String, required: false},
    quantity: {type: Number, required: false},
    brand: {type: String, required: false}
  },
  specialEdition: {type: Boolean, required: true},
  tier: {type: Number, required: true}
});

const Package = mongoose.model("Package", packageSchema);

module.export = Package;
