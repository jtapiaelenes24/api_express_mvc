const express = require("express");
const studentsController = require("../controllers/studentsController");
const router = express.Router();

router.get("/", studentsController.get);

router.post("/", studentsController.insert);

router
  .route("/:id")
  .get(studentsController.getDetails)
  .put(studentsController.update)
  .delete(studentsController.delete);

module.exports = router;
