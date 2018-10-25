const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const memberSchema = new Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  dob: {type: Date, required: true},
  address: {
    street: {type: String, required: true},
    city: {type: String, required: true},
    state: {type: String, required: true},
    zip: {type: Number, required: true}
  },
  billingInfo: {
    nameOnCard: {type: String, required: true},
    cardType: {type: String, required: true},
    number: {type: Number, required: true},
    expiration: {
      month: {type: Number, required: true},
      year: {type: Number, required: true}
    },
    ccv: {type: Number, required: true}
  },
  joinDate: {type: Date, required: true},
  packsRcvd: {type: Number, required: true},
  packages: {
    tier: {type: Number, required: true},
    preference: {type: String, required: true}
  },
  email: {type: String, required: true},
  password: {type: String, required: true}
});

const Member = mongoose.model("Member", memberSchema);

module.export = Member;
