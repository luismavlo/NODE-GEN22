const StudentList = require('./student-list');

class Sockets {
  constructor(io) {
    this.io = io;
    this.studentList = new StudentList();

    this.socketEvents();
  }

  socketEvents() {
    //ESCUCHAR LOS CLIENTES QUE SE CONECTAN
    this.io.on('connection', (socket) => {
      // SE MUESTRA UN CONSOLE.LOG QUE DICE CLIENTE CONECTADO
      console.log('Cliente conectado');
      // EMITE POR EL CURRENT-STUDENTS LOS ESTUDIANTES DEL ARREGLO
      socket.emit('current-students', this.studentList.getStudents());
    });
  }
}

module.exports = Sockets;
