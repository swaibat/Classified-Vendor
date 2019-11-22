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
      .post('/products')
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
      .post('/products')
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
      .post('/products')
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
      .post('/products')
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
  it('Should throw invalid image error', (done) => {
    chai.request(app)
      .post('/products')
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

describe('Update product', () => {
  it('Should update product', (done) => {
    chai.request(app)
      .patch('/products/1')
      .set('Authorization', `Bearer ${AuthHelper.createToken('seller@vendly.com', 2)}`)
      .field(product.data1)
      .attach('images', 'test/data/1.jpg')
      .end((err, res) => {
        res.should.have.status(201);
        res.body.status.should.eql(201);
        res.body.should.be.a('object');
        res.body.message.should.eql('product updated successfully');
        res.body.data.name.should.eql('phone');
        done();
      });
  });
  it('Should create new product', (done) => {
    chai.request(app)
      .patch('/products/1')
      .set('Authorization', `Bearer ${AuthHelper.createToken('seller@vendly.com', 2)}`)
      .set('Content-Type', 'multipart/form-data')
      .field({ CategoryId: 'hello' })
      .end((err, res) => {
        res.should.have.status(400);
        res.body.status.should.eql(400);
        res.body.should.be.a('object');
        res.body.message.should.eql('CategoryId should be an integer');
        done();
      });
  });
  it('Should throw invalid image error', (done) => {
    chai.request(app)
      .patch('/products/1')
      .set('Authorization', `Bearer ${AuthHelper.createToken('seller@vendly.com', 2)}`)
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

describe('GET product', () => {
  it('Should get product', (done) => {
    chai.request(app)
      .get('/products/1')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.status.should.eql(200);
        res.body.should.be.a('object');
        res.body.data.name.should.eql('phone');
        done();
      });
  });
  it('Should validate invalid parameter', (done) => {
    chai.request(app)
      .get('/products/tt')
      .end((err, res) => {
        res.should.have.status(400);
        res.body.status.should.eql(400);
        res.body.should.be.a('object');
        res.body.message.should.eql('id should be an integer');
        done();
      });
  });
  it('Should check not found product', (done) => {
    chai.request(app)
      .get('/products/55')
      .end((err, res) => {
        res.should.have.status(404);
        res.body.status.should.eql(404);
        res.body.should.be.a('object');
        res.body.message.should.eql('product with id not found');
        done();
      });
  });
  it('Should getall product', (done) => {
    chai.request(app)
      .get('/products')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.status.should.eql(200);
        res.body.should.be.a('object');
        res.body.data.should.be.a('array');
        done();
      });
  });
});

describe('DELETE product', () => {
  it('Should Delete product', (done) => {
    chai.request(app)
      .delete('/products/2')
      .set('Authorization', `Bearer ${AuthHelper.createToken('seller@vendly.com', 2)}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.status.should.eql(200);
        res.body.should.be.a('object');
        res.body.message.should.eql('product deleted successfully');
        done();
      });
  });
});
