const { sequelize } = require("../sequelize");
const { initModels } = require("../model/init-models");

const { StudentMarks } = initModels(sequelize);

const createMarks = async (req, res) => {
  try {
    console.log(req.body);
    const data = await StudentMarks.Create(req.body);
    res.status(200).json({
      sucess: true,
      message: "Record is inserted",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      sucess: false,
      message: "invid request",
    });
  }
};
const bulkMarks = async (req, res) => {
  try {
    console.log(req.body);
    const data = await StudentMarks.bulkCreate(req.body);
    res.status(200).json({
      sucess: true,
      message: "Record is inserted",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      sucess: false,
      message: "invid request",
    });
  }
};

module.exports = { createMarks, bulkMarks };
