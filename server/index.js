const express = require("express");
const app = express();
const cors = require("cors");
const { MONGOURI } = require("./config/keys");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

app.use(require("./api/auth"));
app.use(require("./api/product"));

app.listen(5000, () => {
  console.log("Server started on 5000");
});

mongoose.connect(MONGOURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("connected to mongo");
});

mongoose.connection.on("error", (err) => {
  console.log("error connecting");
});
