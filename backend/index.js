const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const router = require("./router");
const app = express();
dotenv.config();
app.use(bodyparser.json());
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.listen(process.env.PORT, () => {
  console.log("Server is Running on http://localhost:3000");
});
