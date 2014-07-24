/* jshint expr:true */
/* global describe, it */

'use strict';

var expect = require('chai').expect;
var Student = require('../../app/models/student.js');

describe('Student', function() {
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
 });


