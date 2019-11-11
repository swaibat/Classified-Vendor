import { describe, it } from 'mocha';
import chai from 'chai';
import chaiHttp from 'chai-http';
import validate from '../api/utils/validator.util';
import object from './data/validator.data';

chai.should();

chai.use(chaiHttp);


describe('Test validations', () => {
  it('should check required fields', () => {
    validate(object, { name: { req: true } },
      (error) => error.should.eql('name is required'));
  });
  it('should check boolean type', () => {
    validate(object, { admin: { bool: true } },
      (error) => error.should.eql('admin should be either true or false'));
  });
  it('should check for alpahabetic', () => {
    validate(object, { schools: { alpha: true } },
      (error) => error.should.eql('schools should be alphabetic'));
  });
});
