const mongoose = require("mongoose");
const schema = mongoose.Schema;

const portfolioSchema = new schema({
  title: { type: String, required: false },
  img: { type: String, required: false },
  description: { type: String, required: false },
});

module.exports = mongoose.model("project", portfolioSchema);
