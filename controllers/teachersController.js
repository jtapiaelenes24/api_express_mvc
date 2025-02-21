class TeachersController {
  constructor() {}

  get(req, res) {
    res.json({ msg: "Get teachers from class" });
  }

  getDetails(req, res) {
    res.json({ msg: "Get details of the teacher from class" });
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
