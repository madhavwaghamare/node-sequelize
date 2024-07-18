const express = require("express");
const {
  getStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudentById,
} = require("../controllers/studentInfo");
const { createMarks, bulkMarks } = require("../controllers/studentMarks");

//router objects
const router = express.Router();

//router
router.get("/getall", getStudents);

router.get("/get/:id", getStudentById);

router.post("/create", createStudent);

router.put("/update/:id", updateStudent);

router.delete("/delete/:id", deleteStudentById);

router.post("/create-marks", createMarks);

router.post("/create-bulk", bulkMarks);

//GET ALL STUDENT LIST
router.get("/list", (req, res) => {
  res.json({});
});

module.exports = router;
