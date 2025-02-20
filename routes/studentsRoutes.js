const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ msg: "REQUEST students" });
});

router.post("/", (req, res) => {
  res.json({ msg: "POST students" });
});

router
  .route("/:id")

  .get((req, res) => {
    res.json({ msg: "REQUEST one student" });
  })

  .put((req, res) => {
    res.json({ msg: "PUT one student" });
  })

  .delete((req, res) => {
    res.json({ msg: "DELETE one student" });
  });

module.exports = router;
