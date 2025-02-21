const express = require("express");
const studentsRoutes = require("./routes/studentsRoutes.js");
const teachersRoutes = require("./routes/teachersRoutes.js");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/students", studentsRoutes);
app.use("/teachers", teachersRoutes);

app.listen(6500, () => {
  console.log("Servidor activo");
});

// https://www.youtube.com/watch?v=yd_QpXWrbtQ&list=PL4ONm-ifcbQJHg52qGN9GbMAhqK-mC2-y&index=4
// 27:40
