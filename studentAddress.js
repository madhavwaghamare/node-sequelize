module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "StudentAddress",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: "ID",
      },
      studentId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "STUDENT_ID",
      },
      buidingName: {
        type: DataTypes.STRING(45),
        allowNull: true,
        field: "BUIDING_NAME",
      },
      post: {
        type: DataTypes.STRING(45),
        allowNull: true,
        field: "POST",
      },
      landmark: {
        type: DataTypes.STRING(45),
        allowNull: true,
        field: "LANDMARK",
      },
      addressLine1: {
        type: DataTypes.STRING(45),
        allowNull: true,
        field: "ADDRESS_LINE1",
      },
      addressLine2: {
        type: DataTypes.STRING(45),
        allowNull: true,
        field: "ADDRESS_LINE2",
      },
    },
    {
      tableName: "STUDENT_ADDRESS",
      timestamps: false,
    }
  );
};
