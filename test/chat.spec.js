import chai from 'chai';
import chaiHttp from 'chai-http';
import { describe, it } from 'mocha';
import app from '../index';
import AuthHelper from '../api/utils/auth.utils';

chai.use(chaiHttp);
chai.should();

describe('CHATS', () => {
  it('Should create new chat', done => {
    chai
      .request(app)
      .post('/chats')
      .set(
        'Authorization',
        `Bearer ${AuthHelper.createToken('admin@vendly.com', 1)}`
      )
      .send({ message: 'hello', ReceiverId: 2 })
      .end((err, res) => {
        res.should.have.status(201);
        res.body.status.should.eql(201);
        res.body.should.be.a('object');
        res.body.message.should.eql('chat posted successfully');
        done();
      });
  });
  it('Should create new chat', done => {
    chai
      .request(app)
      .post('/chats')
      .set(
        'Authorization',
        `Bearer ${AuthHelper.createToken('admin@vendly.com', 1)}`
      )
      .send({ message: 'hello', ReceiverId: 2 })
      .end((err, res) => {
        res.should.have.status(201);
        res.body.status.should.eql(201);
        res.body.should.be.a('object');
        res.body.message.should.eql('chat posted successfully');
        done();
      });
  });
  it('Should create new chat', done => {
    chai
      .request(app)
      .post('/chats')
      .set(
        'Authorization',
        `Bearer ${AuthHelper.createToken('admin@vendly.com', 1)}`
      )
      .send({ message: 'hello', ReceiverId: 1 })
      .end((err, res) => {
        res.should.have.status(400);
        res.body.status.should.eql(400);
        res.body.should.be.a('object');
        res.body.message.should.eql('message can not be sent');
        done();
      });
  });
  it('Should throw 400 error if no recever id', done => {
    chai
      .request(app)
      .post('/chats')
      .set(
        'Authorization',
        `Bearer ${AuthHelper.createToken('admin@vendly.com', 1)}`
      )
      .send({ message: 'hello' })
      .end((err, res) => {
        res.should.have.status(400);
        res.body.status.should.eql(400);
        res.body.should.be.a('object');
        res.body.message.should.eql('ReceiverId is required');
        done();
      });
  });
  it('Should throw 400 error if user not found', done => {
    chai
      .request(app)
      .post('/chats')
      .set(
        'Authorization',
        `Bearer ${AuthHelper.createToken('admin@vendly.com', 1)}`
      )
      .send({ message: 'hello', ReceiverId: 66 })
      .end((err, res) => {
        res.should.have.status(400);
        res.body.status.should.eql(400);
        res.body.should.be.a('object');
        res.body.message.should.eql('receiver does not exist');
        done();
      });
  });
  it('get all chats', done => {
    chai
      .request(app)
      .get('/chats')
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
});
