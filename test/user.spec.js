import chai from 'chai';
import chaiHttp from 'chai-http';
import { describe, it } from 'mocha';
import app from '../index';
import Data from './data/users.data';
import AuthHelper from '../api/utils/auth.utils';

chai.use(chaiHttp);
chai.should();

describe('user registration', () => {
  it('verify email', done => {
    chai
      .request(app)
      .post('/users/verify')
      .send(Data.user1)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have
          .property('message')
          .eql('verification instructions sent to rswaib@gmail.com');
        done();
      });
  });
  it('invalid email field', done => {
    chai
      .request(app)
      .post('/users/verify')
      .send({ email: 'jello.com' })
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        res.body.should.have.property('message').eql('Invalid email address');
        done();
      });
  });
  it('create user account', done => {
    chai
      .request(app)
      .post(`/users/register/${AuthHelper.createToken('rswaib@gmail.com')}`)
      .send(Data.user1)
      .end((err, res) => {
        res.should.have.status(201);
        res.body.should.be.a('object');
        res.body.should.have
          .property('message')
          .eql('Account created successfully');
        done();
      });
  });
  it('input validation test', done => {
    chai
      .request(app)
      .post(`/users/register/${AuthHelper.createToken('rswaib@gmail.com')}`)
      .send(Data.wrongData1)
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        res.body.should.have
          .property('message')
          .eql('password provided do not match');
        done();
      });
  });
  it('check if user exists', done => {
    chai
      .request(app)
      .post(`/users/register/${AuthHelper.createToken('rswaib@gmail.com')}`)
      .send(Data.coInUse)
      .end((err, res) => {
        res.should.have.status(409);
        res.body.should.be.a('object');
        res.body.should.have
          .property('message')
          .eql('email address already in use');
        done();
      });
  });
  it('check if user exists', done => {
    chai
      .request(app)
      .post(`/users/register/${AuthHelper.createToken('rswaib@gmail.com')}`)
      .send(Data.user1)
      .end((err, res) => {
        res.should.have.status(409);
        res.body.should.be.a('object');
        res.body.should.have
          .property('message')
          .eql('Company name already registered');
        done();
      });
  });
  it('check if no token provided', done => {
    chai
      .request(app)
      .post("/users/register/''")
      .send(Data.user1)
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        res.body.should.have.property('message').eql('jwt malformed');
        done();
      });
  });
  it('Method not allowed', done => {
    chai
      .request(app)
      .get(`/users/register/${AuthHelper.createToken('rswaib@gmail.com')}`)
      .end((err, res) => {
        res.should.have.status(405);
        res.body.should.be.a('object');
        res.body.should.have.property('status').eql(405);
        res.body.should.have
          .property('error')
          .eql('Ooops this method is not allowed');
        done();
      });
  });
});
describe('user sinin', () => {
  it('login sucessful', done => {
    chai
      .request(app)
      .post('/users/login')
      .send(Data.user1)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('message').eql('login successful');
        done();
      });
  });

  it('login unsucessful', done => {
    chai
      .request(app)
      .post('/users/login')
      .send(Data.wrongData2)
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        res.body.should.have.property('message').eql('Invalid login details');
        done();
      });
  });

  it('login unsucessful', done => {
    chai
      .request(app)
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

describe('Users CRUD', () => {
  it('Should update user profile', done => {
    chai
      .request(app)
      .patch('/users/1/profile')
      .set(
        'Authorization',
        `Bearer ${AuthHelper.createToken('admin@vendly.com', 1)}`
      )
      .send({ address: 'Nakasongola' })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.status.should.eql(200);
        res.body.should.be.a('object');
        res.body.data.address.should.eql('Nakasongola');
        done();
      });
  });

  it('Should edit own profile except admin', done => {
    chai
      .request(app)
      .patch('/users/1/profile')
      .set(
        'Authorization',
        `Bearer ${AuthHelper.createToken('buyer@vendly.com', 1)}`
      )
      .end((err, res) => {
        res.should.have.status(401);
        res.body.status.should.eql(401);
        res.body.should.be.a('object');
        res.body.message.should.eql('Not allowed to perform this operation');
        done();
      });
  });
  it('Should get a single user profile', done => {
    chai
      .request(app)
      .get('/users/1/profile')
      .set(
        'Authorization',
        `Bearer ${AuthHelper.createToken('admin@vendly.com', 1)}`
      )
      .end((err, res) => {
        res.should.have.status(200);
        res.body.status.should.eql(200);
        res.body.should.be.a('object');
        res.body.data.email.should.eql('admin@vendly.com');
        done();
      });
  });

  it('only admin should get all users', done => {
    chai
      .request(app)
      .get('/users')
      .set(
        'Authorization',
        `Bearer ${AuthHelper.createToken('admin@vendly.com', 1)}`
      )
      .end((err, res) => {
        res.should.have.status(200);
        res.body.status.should.eql(200);
        res.body.should.be.a('object');
        done();
      });
  });
  it('shouldnt get all users if not admin', done => {
    chai
      .request(app)
      .get('/users')
      .set(
        'Authorization',
        `Bearer ${AuthHelper.createToken('seller@vendly.com', 1)}`
      )
      .end((err, res) => {
        res.should.have.status(401);
        res.body.status.should.eql(401);
        res.body.should.be.a('object');
        res.body.message.should.eql('Not allowed to perform this operation');
        done();
      });
  });
  it('check if user exists', done => {
    chai
      .request(app)
      .get('/users/55/profile')
      .set(
        'Authorization',
        `Bearer ${AuthHelper.createToken('admin@vendly.com', 1)}`
      )
      .end((err, res) => {
        res.should.have.status(404);
        res.body.status.should.eql(404);
        res.body.should.be.a('object');
        res.body.message.should.eql('user not found');
        done();
      });
  });
});
