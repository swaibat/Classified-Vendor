import chai from 'chai';
import chaiHttp from 'chai-http';
import { describe, it } from 'mocha';
import app from '../index';
import product from './data/products.data';
import AuthHelper from '../api/utils/auth.utils';

chai.use(chaiHttp);
chai.should();

describe('create product', () => {
  it('Should create new product', (done) => {
    chai.request(app)
      .post('/api/v1/products')
      .set('Authorization', `Bearer ${AuthHelper.createToken('admin@vendly.com', 1)}`)
      .set('Content-Type', 'multipart/form-data')
      .field(product.data1)
      .attach('images', 'test/data/1.jpg')
      .end((err, res) => {
        res.should.have.status(201);
        res.body.status.should.eql(201);
        res.body.should.be.a('object');
        res.body.message.should.eql('product created successfully');
        res.body.data.name.should.eql('phone');
        done();
      });
  });
  it('Should create new product', (done) => {
    chai.request(app)
      .post('/api/v1/products')
      .set('Authorization', `Bearer ${AuthHelper.createToken('admin@vendly.com', 1)}`)
      .set('Content-Type', 'multipart/form-data')
      .field({ name: 'hello' })
      .attach('images', 'test/data/1.jpg')
      .end((err, res) => {
        res.should.have.status(400);
        res.body.status.should.eql(400);
        res.body.should.be.a('object');
        res.body.message.should.eql('CategoryId is required');
        done();
      });
  });

  it('Should create new product', (done) => {
    chai.request(app)
      .post('/api/v1/products')
      .set('Authorization', `Bearer ${AuthHelper.createToken('admin@vendly.com', 1)}`)
      .set('Content-Type', 'multipart/form-data')
      .field(product.data1)
      .end((err, res) => {
        res.should.have.status(400);
        res.body.status.should.eql(400);
        res.body.should.be.a('object');
        res.body.message.should.eql('upload atleast one Image');
        done();
      });
  });
  it('Should create new product', (done) => {
    chai.request(app)
      .post('/api/v1/products')
      .set('Authorization', `Bearer ${AuthHelper.createToken('admin@vendly.com', 1)}`)
      .set('Content-Type', 'multipart/form-data')
      .field(product.data1)
      .end((err, res) => {
        res.should.have.status(400);
        res.body.status.should.eql(400);
        res.body.should.be.a('object');
        res.body.message.should.eql('upload atleast one Image');
        done();
      });
  });
  it('Should create new product', (done) => {
    chai.request(app)
      .post('/api/v1/products')
      .set('Authorization', `Bearer ${AuthHelper.createToken('admin@vendly.com', 1)}`)
      .set('Content-Type', 'multipart/form-data')
      .field(product.data1)
      .attach('images', 'test/data/1.mp3')
      .end((err, res) => {
        res.should.have.status(400);
        res.body.status.should.eql(400);
        res.body.should.be.a('object');
        res.body.message.should.eql('1.mp3 image is invalid');
        done();
      });
  });
});
