module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "StudentMarks",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: "SID",
      },
      studentId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "STUDENT_ID",
      },
      subject: {
        type: DataTypes.STRING(45),
        allowNull: true,
        field: "SUBJECT",
      },
      mark: {
        type: DataTypes.STRING(45),
        allowNull: true,
        field: "MARKS",
      },
      total: {
        type: DataTypes.STRING(45),
        allowNull: true,
        field: "TOTAL",
      },
    },
    {
      tableName: "STUDENT_MARKS",
      timestamps: false,
    }
  );
};
