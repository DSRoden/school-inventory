/* jshint expr:true */
/* global describe, it, before */

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
});


