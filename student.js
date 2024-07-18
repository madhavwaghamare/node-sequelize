module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "Student",
    {
      studentId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "STUDENT_ID",
      },
      firstName: {
        type: DataTypes.STRING(45),
        allowNull: true,
        field: "FIRST_NAME",
      },
      lastName: {
        type: DataTypes.STRING(45),
        allowNull: true,
        field: "LAST_NAME",
      },
      city: {
        type: DataTypes.STRING(45),
        allowNull: true,
        field: "CITY",
      },
    },
    {
      tableName: "STUDENT_INFO",
      timestamps: false,
    }
  );
};
