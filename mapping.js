module.exports = {
  studentMapping: function ({ Student, StudentMarks, StudentAddress }) {
    Student.hasMany(StudentMarks, {
      foreignKey: "studentId",
      sourceKey: "studentId",
      as: "marks",
    });
    Student.hasOne(StudentAddress, {
      foreignKey: "studentId",
      sourceKey: "studentId",
      as: "address",
    });
  },
};
