const mongoose = require('mongoose')

function patientUniqueId() {
  let id = Math.floor(1000 + Math.random() * 9000);
  return id;
}

const userSchema = mongoose.Schema({
  uniqueID: {
    type: Number,
    default: patientUniqueId,
  },
  patientFirstName: {
    type: String,
    required: true,
  },
  patientLastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  compliant: {
    type: String,
    required: true
  },
  isAdmin : {
    type: Boolean,
    default: false
  }
})

const User = mongoose.model("userSchema", userSchema);

module.exports = { User };