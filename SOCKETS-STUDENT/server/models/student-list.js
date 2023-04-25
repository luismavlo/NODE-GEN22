const Student = require('./student');

class StudentList {
  constructor() {
    this.students = [
      new Student('Miller'),
      new Student('Derian'),
      new Student('Cristian'),
      new Student('Alex'),
    ];
  }

  addStudent(name) {
    const newStudent = new Student(name);
    this.students.push(newStudent);
    return this.students;
  }

  getStudents() {
    return this.students;
  }

  increaseVotes(id) {
    this.students = this.students.map((student) => {
      if (student.id === id) {
        student.votes += 1;
      }

      return student;
    });
  }

  removeStudent(id) {
    this.students = this.students.filter((student) => student.id !== id);
  }

  changeStudentName(id, name) {
    this.students = this.students.map((student) => {
      if (student.id === id) {
        student.name = name;
      }

      return student;
    });
  }
}

module.exports = StudentList;
