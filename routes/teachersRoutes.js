const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ msg: "REQUEST teachers" });
});

router.post("/", (req, res) => {
  res.json({ msg: "POST teachers" });
});

router
  .route("/:id")

  .get((req, res) => {
    res.json({ msg: "REQUEST one teacher" });
  })

  .put((req, res) => {
    res.json({ msg: "PUT one teacher" });
  })

  .delete((req, res) => {
    res.json({ msg: "DELETE one teacher" });
  });

module.exports = router;
