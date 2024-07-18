const { sequelize } = require("../sequelize");
var { initModels } = require("../model/init-models");
//Get all student list
var { Student, StudentMarks, StudentAddress } = initModels(sequelize);
const getStudents = async (req, res) => {
  try {
    const data = await Student.findAll();
    if (!data) {
      return res.status(404).send({
        success: false,
        message: "No data found",
      });
    }
    res.status(200).send({
      success: true,
      message: "All student records",
      totalStudent: data.length,
      data: data,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in get all student API",
      error,
    });
  }
};

//Get student by Id
const getStudentById = async (req, res) => {
  try {
    const stdId = req.params.id;
    if (!stdId) {
      return res.status(404).send({
        success: false,
        message: "Invalid id",
      });
    }
    const data = await Student.findOne(
      {
        include: [
          {
            model: StudentMarks,
            as: "marks",
          },
          {
            model: StudentAddress,
            as: "address",
          },
        ],
      },
      { where: { id: stdId } }
    );

    if (!data) {
      return res.status(404).send({
        success: false,
        message: "no data found",
      });
    }
    res.status(200).send({
      success: true,
      data: data,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      sucess: false,
      message: "Error in get student by Id API",
      error,
    });
  }
};

//Create student
const createStudent = async (req, res) => {
  try {
    const { firstName, lastName, city } = req.body;
    if (!firstName || !lastName || !city || !marks) {
      res.status(500).send({
        success: false,
        message: "Please provide the all the fields",
      });
    }
    const data = await Student.create({ firstName, lastName, city });
    if (!data) {
      res.status(404).send({
        success: false,
        message: "Please send the proper request",
      });
    }
    res.status(201).send({
      success: true,
      message: "Record inserted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      sucess: false,
      message: "Error in send the data",
      error,
    });
  }
};
//Update
const updateStudent = async (req, res) => {
  try {
    const stdId = req.params.id;
    const { firstName, lastName, city } = req.body;
    if (!stdId) {
      return res.status(404).send({
        success: false,
        message: "Invalid id",
      });
    }
    const data = await Student.update(
      { firstName, lastName, city },
      {
        where: {
          id: stdId,
        },
      }
    );
    if (!data) {
      res.status(404).send({
        success: false,
        message: "Please send the proper request",
      });
    }
    res.status(201).send({
      success: true,
      message: "Record modified successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      sucess: false,
      message: "Error in send the data",
      error,
    });
  }
};
//delete student by Id
const deleteStudentById = async (req, res) => {
  try {
    const stdId = req.params.id;
    if (!stdId) {
      return res.status(404).send({
        success: false,
        message: "Invalid id",
      });
    }
    const data = await Student.destroy({ where: { id: stdId } });
    if (!data) {
      return res.status(404).send({
        success: false,
        message: "no data found",
      });
    }
    res.status(200).send({
      success: true,
      message: "Record deleted",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      sucess: false,
      message: "Error in get student by Id API",
      error,
    });
  }
};
module.exports = {
  getStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudentById,
};
