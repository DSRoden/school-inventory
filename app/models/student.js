'use strict';

var cStudent = global.mongodb.collection('students');

function Student(name, subject, test1, test2) {
  this.name = name;
  this.subject = subject;
  this.test1 = parseInt(test1);
  this.test2 = parseInt(test2);
}

Student.prototype.save = function(cb){
  cStudent.save(this, function (err, obj){
    cb();
  });
};

module.exports = Student;
