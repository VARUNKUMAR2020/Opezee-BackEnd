require("dotenv").config();
const mongo = require("mongoose");

exports.Database = () => {
  mongo
    .connect(process.env.MONGO_URL)
    .then(() => console.log("Database Connected"))
    .catch((err) => console.log(`Error is Database connectivity : ${err}`));
};
 