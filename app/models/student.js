'use strict';

function Student(name, subject, test1, test2) {
  this.name = name;
  this.subject = subject;
  this.test1 = parseInt(test1);
  this.test2 = parseInt(test2);
}

module.exports = Student;
