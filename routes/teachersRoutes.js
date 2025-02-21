const express = require("express");
const teachersController = require("../controllers/teachersController");
const router = express.Router();

router.get("/", teachersController.get);

router.post("/", teachersController.insert);

router
  .route("/:id")
  .get(teachersController.getDetails)
  .put(teachersController.update)
  .delete(teachersController.delete);

module.exports = router;
