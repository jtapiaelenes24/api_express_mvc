const db = require("../database/connection.js");

class TeachersController {
  constructor() {}

  get(req, res) {
    try {
      db.query(`SELECT * FROM teachers`, (err, rows) => {
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
      db.query(`SELECT * FROM teachers WHERE id = ?`, [id], (err, rows) => {
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
      const { dni, name, lastname, email, profession, phone_number } = req.body;
      db.query(
        `INSERT INTO teachers
        (id, dni, name, lastname, email, profession, phone_number)
        VALUES(NULL, ?, ?, ?, ?, ?, ?);`,
        [dni, name, lastname, email, profession, phone_number],
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
      const { dni, name, lastname, email, profession, phone_number } = req.body;
      db.query(
        `UPDATE teachers 
        SET dni = ?, name = ?, lastname = ?, email = ?, profession = ?, phone_number = ?
        WHERE id = ?;`,
        [dni, name, lastname, email, profession, phone_number, id],
        (err, rows) => {
          if (err) {
            res.status(400).send(err);
          }
          if (rows.affectedRows == 1) {
            res.status(200).json({ answer: "Teacher succesfully updated." });
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
        `DELETE FROM teachers
        WHERE id = ?;`,
        [id],
        (err, rows) => {
          if (err) {
            res.status(400).send(err);
          }
          res.status(200).json({ answer: "Teacher succesfully deleted." });
        }
      );
    } catch (err) {
      res.status(500).send(err.message);
    }
  }
}

module.exports = new TeachersController();
