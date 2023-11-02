const dotenv = require("dotenv");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoutes = require("./modules/user/user.routes");
const DB_URL = require("./modules/config/db.config");
app.use(express.json());

app.get("/test", (request, response) => {
  response.send("App is  running");
});

app.get("/tasks", (req, res) => {
  const tasks = [
    { id: 1, title: "Task 1" },
    { id: 2, title: "Task 2" },
    { id: 3, title: "Task 3" },
    { id: 4, title: "Task 4" },
    { id: 5, title: "Task 5" },
    { id: 6, title: "Task 6" },
    { id: 7, title: "Task 7" },
    { id: 8, title: "Task 8" },
  ];

  res.send(tasks);
});

// app.post("/tasks", (req, res) => {
//   console.log(req.body);
//   res.send({ message: "Data is received", data: req.body });
// });

// app.put("/tasks/:title", (req, res) => {
//   console.log(req.body);
//   res.send({ message: "Data is received", data: req.body, params: req.params });
// });

app.use("/user", userRoutes);

app.listen(3000, async () => {
  console.log("App is running on port 3000");
  let conn;
  try {
    conn = await mongoose.connect(DB_URL);
    console.log("DB is now connected");
  } catch (e) {
    console.error(e);
  }
});
