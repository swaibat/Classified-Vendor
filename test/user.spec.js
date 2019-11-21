import chai from 'chai';
import chaiHttp from 'chai-http';
import { describe, it } from 'mocha';
import app from '../index';
import Data from './data/users.data';
import AuthHelper from '../api/utils/auth.utils';

chai.use(chaiHttp);
chai.should();

describe('user registration', () => {
  it('verify email', (done) => {
    chai.request(app)
      .post('/users/verify')
      .send(Data.user1)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('message').eql('verification instructions sent to rswaib@gmail.com');
        done();
      });
  });
  it('invalid email field', (done) => {
    chai.request(app)
      .post('/users/verify')
      .send({ email: 'jello.com' })
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        res.body.should.have.property('message').eql('Invalid email address');
        done();
      });
  });
  it('create user account', (done) => {
    chai.request(app)
      .post(`/users/register/${AuthHelper.createToken('rswaib@gmail.com')}`)
      .send(Data.user1)
      .end((err, res) => {
        res.should.have.status(201);
        res.body.should.be.a('object');
        res.body.should.have.property('message').eql('Account created successfully');
        done();
      });
  });
  it('input validation test', (done) => {
    chai.request(app)
      .post(`/users/register/${AuthHelper.createToken('rswaib@gmail.com')}`)
      .send(Data.wrongData1)
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        res.body.should.have.property('message').eql('password provided do not match');
        done();
      });
  });
  it('check if user exists', (done) => {
    chai.request(app)
      .post(`/users/register/${AuthHelper.createToken('rswaib@gmail.com')}`)
      .send(Data.coInUse)
      .end((err, res) => {
        res.should.have.status(409);
        res.body.should.be.a('object');
        res.body.should.have.property('message').eql('email address already in use');
        done();
      });
  });
  it('check if user exists', (done) => {
    chai.request(app)
      .post(`/users/register/${AuthHelper.createToken('rswaib@gmail.com')}`)
      .send(Data.user1)
      .end((err, res) => {
        res.should.have.status(409);
        res.body.should.be.a('object');
        res.body.should.have.property('message').eql('Company name already registered');
        done();
      });
  });
  it('check if no token provided', (done) => {
    chai.request(app)
      .post('/users/register/\'\'')
      .send(Data.user1)
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        res.body.should.have.property('message').eql('jwt malformed');
        done();
      });
  });
  it('Method not allowed', (done) => {
    chai.request(app)
      .get(`/users/register/${AuthHelper.createToken('rswaib@gmail.com')}`)
      .end((err, res) => {
        res.should.have.status(405);
        res.body.should.be.a('object');
        res.body.should.have.property('status').eql(405);
        res.body.should.have.property('error').eql('Ooops this method is not allowed');
        done();
      });
  });
});
describe('user sinin', () => {
  it('login sucessful', (done) => {
    chai.request(app)
      .post('/users/login')
      .send(Data.user1)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('message').eql('login successful');
        done();
      });
  });

  it('login unsucessful', (done) => {
    chai.request(app)
      .post('/users/login')
      .send(Data.wrongData2)
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        res.body.should.have.property('message').eql('Invalid login details');
        done();
      });
  });

  it('login unsucessful', (done) => {
    chai.request(app)
      .post('/users/login')
      .send({ email: 'hfhfh' })
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        res.body.should.have.property('message').eql('Invalid email address');
        done();
      });
  });
});
