require("dotenv").config({ path: "./.env" });
const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/error");

//Database connection
connectDB();

app.use(cors());

app.use(express.json());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/private", require("./routes/private"));
app.use("/api/products", require("./routes/product"));
app.use("/api/user", require("./routes/user"));
// app.use("/api/payment", require("./routes/payments"));

// ADDED SPECIFIC ADMIN ROUTES
app.use("/api/admin", require("./routes/admin"));


//Error Handler (should be last middleware)
app.use(errorHandler);

const PORT = process.env.PORT || 5001;

const server = app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);

process.on("unhandledRejection", (err, promise) => {
  console.log(`Logged Error: ${err}`);
  server.close(() => process.exit(1));
});
