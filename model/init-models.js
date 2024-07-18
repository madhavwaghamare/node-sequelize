var DataTypes = require("sequelize").DataTypes;
const { studentMapping } = require("../mapping");
var _Student = require("../student");
var _StudentMarks = require("../studentMarks");
var _StudentAddress = require("../studentAddress");

function initModels(sequelize) {
  var Student = _Student(sequelize, DataTypes);
  var StudentMarks = _StudentMarks(sequelize, DataTypes);
  var StudentAddress = _StudentAddress(sequelize, DataTypes);

  const models = {
    Student,
    StudentMarks,
    StudentAddress,
  };

  studentMapping(models);

  return models;
}
module.exports = { initModels };
