import chai from 'chai';
import chaiHttp from 'chai-http';
import { describe, it } from 'mocha';
import app from '../index';
import page from './data/page.data';
import AuthHelper from '../api/utils/auth.utils';

chai.use(chaiHttp);
chai.should();

describe('FAVOIRITE', () => {
  it('Should add to favourite', done => {
    chai
      .request(app)
      .post('/favourite/1')
      .set(
        'Authorization',
        `Bearer ${AuthHelper.createToken('admin@vendly.com', 1)}`
      )
      .end((err, res) => {
        res.should.have.status(201);
        res.body.status.should.eql(201);
        res.body.should.be.a('object');
        res.body.message.should.eql('item added to favourite');
        done();
      });
  });

  it('Should check if items already in favourite', done => {
    chai
      .request(app)
      .post('/favourite/1')
      .set(
        'Authorization',
        `Bearer ${AuthHelper.createToken('admin@vendly.com', 1)}`
      )
      .end((err, res) => {
        res.should.have.status(409);
        res.body.status.should.eql(409);
        res.body.should.be.a('object');
        res.body.message.should.eql('item already added to favourite');
        done();
      });
  });
  it('get all favourite', done => {
    chai
      .request(app)
      .get('/favourite')
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
  it('remove item from favourite', done => {
    chai
      .request(app)
      .delete('/favourite/1')
      .set(
        'Authorization',
        `Bearer ${AuthHelper.createToken('admin@vendly.com', 1)}`
      )
      .end((err, res) => {
        res.should.have.status(201);
        res.body.status.should.eql(201);
        res.body.should.be.a('object');
        res.body.message.should.eql('item removed successfully');
        done();
      });
  });
  it('check if item exist in favourite', done => {
    chai
      .request(app)
      .delete('/favourite/55')
      .set(
        'Authorization',
        `Bearer ${AuthHelper.createToken('admin@vendly.com', 1)}`
      )
      .end((err, res) => {
        res.should.have.status(404);
        res.body.status.should.eql(404);
        res.body.should.be.a('object');
        res.body.message.should.eql('item not found');
        done();
      });
  });
});
