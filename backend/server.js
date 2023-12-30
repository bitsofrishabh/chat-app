const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const userRoutes = require("./routes/userRoutes");
const connectDB = require("./config/db");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
dotenv.config();
connectDB();

const app = express();
app.use(express.json()); // to accept JSON DATA
app.use("/api/user", userRoutes);

app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/api/chats", (req, res) => {
  res.send(chats);
});

app.get("/api/chats/:id", (req, res) => {
  console.log(req);
});

app.use(notFound);
app.use(errorHandler);

app.listen(process.env.PORT, console.log("Server listening on port"));
