import { describe, it } from 'mocha';
import chai from 'chai';
import chaiHttp from 'chai-http';
import validate from '../api/utils/validator.util';
import object from './data/validator.data';

chai.should();

chai.use(chaiHttp);


describe('Negative Unit Test validations', () => {
  it('should check boolean type', () => {
    validate(object, { admin: { bool: true } },
      (error) => error.should.eql('admin should be either true or false'));
  });
  it('should check for alpahabetic', () => {
    validate(object, { schools: { alpha: true } },
      (error) => error.should.eql('schools should be alphabetic'));
  });
  it('should test confirm password', () => {
    validate(object, { password: { confirm: object.password2 } },
      (error) => error.should.eql('password provided do not match'));
  });
  it('should test for min characters', () => {
    validate(object, { doors: { min: 2 } },
      (error) => error.should.eql('doors should be greater than 1'));
  });
  it('should test for min characters', () => {
    validate(object, { password: { max: 2 } },
      (error) => error.should.eql('password should be less than 2'));
  });
  it('should test for email address', () => {
    validate(object, { password: { email: true } },
      (error) => error.should.eql('Invalid password address'));
  });
  it('should test for email address', () => {
    validate(object, { password: { email: true } },
      (error) => error.should.eql('Invalid password address'));
  });
  it('should test for an integer', () => {
    validate(object, { password: { num: true } },
      (error) => error.should.eql('password should be an integer'));
  });
  it('should test for alphanumeric', () => {
    validate(object, { password3: { alphaNum: true } },
      (error) => error.should.eql('password3 should be alphanumeric'));
  });
  it('should test for alphanumeric', () => {
    validate(object, { last: { req: true } },
      (error) => error.should.eql('last is required'));
  });
});
