const db = require("../database/connection.js");

class TeachersController {
  constructor() {}

  get(req, res) {
    res.json({ msg: "Get teachers from class" });
  }

  getDetails(req, res) {
    const { id } = req.params;
    res.json({ msg: `Get details of the teacher from class with ID ${id}` });
  }

  insert(req, res) {
    res.json({ msg: "Insert a teacher from class" });
  }

  update(req, res) {
    res.json({ msg: "Update a teacher from class" });
  }

  delete(req, res) {
    res.json({ msg: "Delete a teacher from class" });
  }
}

module.exports = new TeachersController();
