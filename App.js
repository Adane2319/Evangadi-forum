require("dotenv").config();

const express = require("express");
const app = express();
const port = 5500;

// db connection
const dbConnection = require("./db/dbConfige");

// middleware files
const userRoutes = require("./Routes/UserRoute");
const questionsRoutes = require("./Routes/questionsRoute");
const authMiddleware = require("./middleware/authMiddleware");

// json middleware to extract json data
app.use(express.json());

// user routes middleware
app.use("/api/users", userRoutes);

// questions routes middleware
app.use("/api/questions", authMiddleware, questionsRoutes);

// answers routes middleware ??

async function start() {
  try {
    const result = await dbConnection.execute("select 'test' ");
    await app.listen(port);
    console.log(`listing on ${port}`);
  } catch (error) {
    console.log(error.message);
  }
}
start();

