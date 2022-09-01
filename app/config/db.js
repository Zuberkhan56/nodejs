const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    const connectdb = await mongoose.connect(process.env.DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connected");
  } catch (error) {
    console.log("error", error);
  }
};
module.exports = connectDB;
