const mongo = require("mongoose");

const apps = new mongo.Schema({
  img: String,
  name: String,
  url: String,
});

const Application = mongo.model("Apps", apps);
module.exports = Application;
  