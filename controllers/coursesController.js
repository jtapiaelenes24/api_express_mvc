const db = require("../database/connection.js");

class CoursesController {
  constructor() {}

  get(req, res) {
    try {
      db.query(`SELECT * FROM courses`, (err, rows) => {
        if (err) {
          res.status(400).send(err);
        }
        res.status(200).json(rows);
      });
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  getDetails(req, res) {
    const { id } = req.params;
    try {
      db.query(`SELECT * FROM courses WHERE id = ?`, [id], (err, rows) => {
        if (err) {
          res.status(400).sned(err);
        }
        res.status(200).json(rows[0]);
      });
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  insert(req, res) {
    try {
      const { name, description, teacher_id } = req.body;
      db.query(
        `INSERT INTO courses
        (id, name, description, teacher_id)
        VALUES(NULL, ?, ?, ?);`,
        [name, description, teacher_id],
        (err, rows) => {
          if (err) {
            res.status(400).send(err);
          } else {
            res.status(201).json({ id: rows.insertId });
          }
        }
      );
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  update(req, res) {
    const { id } = req.params;
    try {
      const { name, description, teacher_id } = req.body;
      db.query(
        `UPDATE courses 
        SET name = ?, description = ?, teacher_id = ? 
        WHERE id = ?;`,
        [name, description, teacher_id],
        (err, rows) => {
          if (err) {
            res.status(400).send(err);
          }
          if (rows.affectedRows == 1) {
            res.status(200).json({ answer: "Course succesfully updated." });
          }
        }
      );
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  delete(req, res) {
    const { id } = req.params;
    try {
      db.query(
        `DELETE FROM courses
        WHERE id = ?;`,
        [id],
        (err, rows) => {
          if (err) {
            res.status(400).send(err);
          }
          res.status(200).json({ answer: "Course succesfully deleted." });
        }
      );
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  registerStudent(req, res) {
    try {
      const { course_id, student_id } = req.body;
      db.query(
        `INSERT INTO courses_students
        (course_id, student_id)
        VALUES(?, ?);`,
        [course_id, student_id],
        (err, rows) => {
          if (err) {
            res.status(400).send(err);
          } else {
            res
              .status(201)
              .json({ answer: "Student successfully registered in a course." });
          }
        }
      );
    } catch (err) {
      res.status(500).send(err.message);
    }
  }
}

module.exports = new CoursesController();
