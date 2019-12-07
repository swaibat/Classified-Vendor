import chai from 'chai';
import chaiHttp from 'chai-http';
import { describe, it } from 'mocha';
import app from '../index';
import page from './data/page.data';
import AuthHelper from '../api/utils/auth.utils';

chai.use(chaiHttp);
chai.should();

describe('create Page', () => {
  it('Should create new page', done => {
    chai
      .request(app)
      .post('/pages')
      .set(
        'Authorization',
        `Bearer ${AuthHelper.createToken('seller@vendly.com', 1)}`
      )
      .send(page.data1)
      .end((err, res) => {
        res.should.have.status(201);
        res.body.status.should.eql(201);
        res.body.should.be.a('object');
        res.body.message.should.eql('page created successfully');
        done();
      });
  });
  it('buyer should not create a page', done => {
    chai
      .request(app)
      .post('/pages')
      .set(
        'Authorization',
        `Bearer ${AuthHelper.createToken('buyer@vendly.com', 1)}`
      )
      .send(page.data1)
      .end((err, res) => {
        res.should.have.status(401);
        res.body.status.should.eql(401);
        res.body.should.be.a('object');
        res.body.message.should.eql('Not allowed to perform this operation');
        done();
      });
  });
  it('Should decline creating a new website if it exists', done => {
    chai
      .request(app)
      .post('/pages')
      .set(
        'Authorization',
        `Bearer ${AuthHelper.createToken('admin@vendly.com', 1)}`
      )
      .send(page.data1)
      .end((err, res) => {
        res.should.have.status(401);
        res.body.status.should.eql(401);
        res.body.should.be.a('object');
        res.body.message.should.eql('We only accept one website per user');
        done();
      });
  });
  it('Should check invalid data', done => {
    chai
      .request(app)
      .post('/pages')
      .set(
        'Authorization',
        `Bearer ${AuthHelper.createToken('admin@vendly.com', 1)}`
      )
      .send(page.data2)
      .end((err, res) => {
        res.should.have.status(400);
        res.body.status.should.eql(400);
        res.body.should.be.a('object');
        res.body.message.should.eql('CategoryId is required');
        done();
      });
  });
  it('get page by company', done => {
    chai
      .request(app)
      .get('/pages/vendly')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.status.should.eql(200);
        res.body.should.be.a('object');
        done();
      });
  });
  it('get page by company', done => {
    chai
      .request(app)
      .get('/pages/vens')
      .end((err, res) => {
        res.should.have.status(404);
        res.body.status.should.eql(404);
        res.body.should.be.a('object');
        res.body.message.should.eql('web page not found');
        done();
      });
  });
  it('update a page', done => {
    chai
      .request(app)
      .patch('/pages')
      .set(
        'Authorization',
        `Bearer ${AuthHelper.createToken('admin@vendly.com', 3)}`
      )
      .send(page.data1)
      .end((err, res) => {
        res.should.have.status(201);
        res.body.status.should.eql(201);
        res.body.should.be.a('object');
        res.body.message.should.eql('page updated successfully');
        done();
      });
  });

  it('update a page', done => {
    chai
      .request(app)
      .patch('/pages')
      .set(
        'Authorization',
        `Bearer ${AuthHelper.createToken('buyer@vendly.com', 3)}`
      )
      .send(page.data1)
      .end((err, res) => {
        res.should.have.status(404);
        res.body.status.should.eql(404);
        res.body.should.be.a('object');
        res.body.message.should.eql('page not found');
        done();
      });
  });
  it('validate update a page', done => {
    chai
      .request(app)
      .patch('/pages')
      .set(
        'Authorization',
        `Bearer ${AuthHelper.createToken('admin@vendly.com', 3)}`
      )
      .send({ CategoryId: 'hdhdhd' })
      .end((err, res) => {
        res.should.have.status(400);
        res.body.status.should.eql(400);
        res.body.should.be.a('object');
        res.body.message.should.eql('CategoryId should be an integer');
        done();
      });
  });
  it('get all pages', done => {
    chai
      .request(app)
      .get('/pages')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.status.should.eql(200);
        res.body.should.be.a('object');
        done();
      });
  });
  it('home page', done => {
    chai
      .request(app)
      .get('/')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.status.should.eql(200);
        res.body.should.be.a('object');
        done();
      });
  });
});
