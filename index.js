const express = require("express");
const cors = require("cors");
const studentsRoutes = require("./routes/studentsRoutes.js");
const teachersRoutes = require("./routes/teachersRoutes.js");
const coursesRoutes = require("./routes/coursesRoutes.js");
const app = express();

//  MIDDLEWARE
app.use(express.json());

app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/students", studentsRoutes);
app.use("/teachers", teachersRoutes);
app.use("/courses", coursesRoutes);

app.listen(6500, () => {
  console.log("Servidor activo");
});
