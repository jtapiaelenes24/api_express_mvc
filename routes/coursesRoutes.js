const express = require("express");
const coursesController = require("../controllers/coursesController");
const router = express.Router();

router.get("/", coursesController.get);

router.post("/", coursesController.insert);
router.post("/registerStudent", coursesController.registerStudent);

router
  .route("/:id")
  .get(coursesController.getDetails)
  .put(coursesController.update)
  .delete(coursesController.delete);

module.exports = router;
