import chai from 'chai';
import chaiHttp from 'chai-http';
import { describe, it } from 'mocha';
import app from '../index';
import page from './data/page.data';
import AuthHelper from '../api/utils/auth.utils';

chai.use(chaiHttp);
chai.should();

describe('FAQ', () => {
  it('Should create new fAQ', (done) => {
    chai.request(app)
      .post('/faqs')
      .set('Authorization', `Bearer ${AuthHelper.createToken('admin@vendly.com', 1)}`)
      .send({ question: 'hello', answer: 'world' })
      .end((err, res) => {
        res.should.have.status(201);
        res.body.status.should.eql(201);
        res.body.should.be.a('object');
        res.body.message.should.eql('question created successfully');
        done();
      });
  });

  it('Should check if qestion already exists', (done) => {
    chai.request(app)
      .post('/faqs')
      .set('Authorization', `Bearer ${AuthHelper.createToken('admin@vendly.com', 1)}`)
      .send({ question: 'hello', answer: 'world' })
      .end((err, res) => {
        res.should.have.status(409);
        res.body.status.should.eql(409);
        res.body.should.be.a('object');
        res.body.message.should.eql('question already exists');
        done();
      });
  });
  it('Should update existing fAQ', (done) => {
    chai.request(app)
      .patch('/faqs/1')
      .set('Authorization', `Bearer ${AuthHelper.createToken('admin@vendly.com', 1)}`)
      .send({ question: 'hellos', answer: 'world' })
      .end((err, res) => {
        res.should.have.status(201);
        res.body.status.should.eql(201);
        res.body.should.be.a('object');
        res.body.message.should.eql('question updated successfully');
        done();
      });
  });
  it('get faq', (done) => {
    chai.request(app)
      .get('/faqs')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.status.should.eql(200);
        res.body.should.be.a('object');
        res.body.data[0].should.have.property('question');
        res.body.data[0].should.have.property('answer');
        done();
      });
  });
  it('delete one faq', (done) => {
    chai.request(app)
      .delete('/faqs/1')
      .set('Authorization', `Bearer ${AuthHelper.createToken('admin@vendly.com', 1)}`)
      .end((err, res) => {
        res.should.have.status(201);
        res.body.status.should.eql(201);
        res.body.should.be.a('object');
        res.body.message.should.eql('question deleted successfully');
        done();
      });
  });
  it('delete one faq not found', (done) => {
    chai.request(app)
      .delete('/faqs/55')
      .set('Authorization', `Bearer ${AuthHelper.createToken('admin@vendly.com', 1)}`)
      .end((err, res) => {
        res.should.have.status(404);
        res.body.status.should.eql(404);
        res.body.should.be.a('object');
        res.body.message.should.eql('question does not exists');
        done();
      });
  });
});
