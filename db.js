const mongoose = require("mongoose");

const dbURL = process.env.DATABASE_URL;
const dbUsername = process.env.DATABASE_USERNAME;
const dbPassword = process.env.DATABASE_PASSWORD;

const dbFullURL = `mongodb+srv://${dbUsername}:${dbPassword}@${dbURL}?retryWrites=true&w=majority`;
const dbConnection = async () => {
  try {
    await mongoose.connect(dbFullURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB Connected Successfully");
  } catch (err) {
    console.log(err);
    console.log("DB Connection Error");
  }
};

module.exports = dbConnection;