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
