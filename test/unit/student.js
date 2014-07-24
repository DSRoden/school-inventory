/* jshint expr:true */
/* global describe, it, before, beforeEach */

'use strict';

var expect = require('chai').expect;
var connect = require('../../app/lib/mongodb');
var Mongo = require('mongodb');
var Student;

describe('Student', function() {
  before(function(done){
    connect('school-inventory-test', function(){
      Student = require('../../app/models/student.js');
      done();
    });
  });

  beforeEach(function(done){
    global.mongodb.collection('students').remove(function(){
        done();
     });
   });

  describe('constructor', function() {
    it('Should create a new student', function(){
      var Harry = new Student('Harry', 'chemistry', '90', '95');
      expect(Harry).to.be.instanceof(Student);
      expect(Harry.name).to.equal('Harry');
      expect(Harry.subject).to.equal('chemistry');
      expect(Harry.test1).to.be.a('number');
      expect(Harry.test1).to.equal(90);
      expect(Harry.test2).to.be.a('number');
      expect(Harry.test2).to.equal(95);
    });
  });

  describe('#save', function(){
    it('should save a student to mongodb', function(done) {
      var Harry = new Student('Harry', 'chemistry', '90', '95');
      Harry.save(function(){
        expect(Harry._id).to.be.instanceof(Mongo.ObjectID);
        done();
       });
     });
   });

  describe('find', function(){
    it('should find objects according to a query', function(done){
      var Harry = new Student('Harry', 'chemistry', '90', '95');
      var Jane = new Student('Jane', 'chemistry', '90', '95');
      var Joe = new Student('Joe', 'biology', '85', '90');
      Joe.save(function(){
          Jane.save(function(){
              Harry.save(function(){
                Student.find({subject : 'chemistry'}, function(students){
                  expect(students).to.have.length(2);
                  expect(students[0].subject).to.equal('chemistry');
                  expect(students[1].subject).to.equal('chemistry');
                  done();
              });
           });
        }); 
      });
    });
  });

  describe('#average', function(){
    it('should find the average of a students test scores', function() {
      var Harry = new Student('Harry', 'chemistry', '90', '95');
      var average = Harry.average();
      expect(average).to.equal(92.5);
    });
  });
});

