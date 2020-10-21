const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});
module.exports = User = mongoose.model("users", ClientSchema);
