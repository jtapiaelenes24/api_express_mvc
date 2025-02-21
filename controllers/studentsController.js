const db = require("../database/connection.js");
class StudentsController {
  constructor() {}

  get(req, res) {
    res.json({ msg: "Get students from class" });
  }

  getDetails(req, res) {
    const { id } = req.params;
    res.json({ msg: `Get details of the student from class with ID ${id}` });
  }

  insert(req, res) {
    res.json({ msg: "Insert a student from class" });
  }

  update(req, res) {
    res.json({ msg: "Update a student from class" });
  }

  delete(req, res) {
    res.json({ msg: "Delete a student from class" });
  }
}

module.exports = new StudentsController();
