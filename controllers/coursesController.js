const db = require("../database/connection.js");

class CoursesController {
  constructor() {}

  get(req, res) {
    res.json({ msg: "Get courses from class" });
  }

  getDetails(req, res) {
    const { id } = req.params;
    res.json({ msg: `Get details of the course from class with ID ${id}` });
  }

  insert(req, res) {
    res.json({ msg: "Insert a course from class" });
  }

  update(req, res) {
    res.json({ msg: "Update a course from class" });
  }

  delete(req, res) {
    res.json({ msg: "Delete a course from class" });
  }
}

module.exports = new CoursesController();
