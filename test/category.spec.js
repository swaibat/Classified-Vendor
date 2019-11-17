import chai from 'chai';
import chaiHttp from 'chai-http';
import { describe, it } from 'mocha';
import app from '../index';
import AuthHelper from '../api/utils/auth.utils';

chai.use(chaiHttp);
chai.should();

describe('get categorys', () => {
  it('Should get all categories', (done) => {
    chai.request(app)
      .get('/api/v1/categorys')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.status.should.eql(200);
        res.body.should.be.a('object');
        done();
      });
  });
  it('Should create category', (done) => {
    chai.request(app)
      .post('/api/v1/categorys')
      .set('Authorization', `Bearer ${AuthHelper.createToken('admin@vendly.com', 1)}`)
      .send({ name: 'Auto Spur' })
      .end((err, res) => {
        res.should.have.status(201);
        res.body.status.should.eql(201);
        res.body.should.be.a('object');
        done();
      });
  });
  it('Should check if category exists', (done) => {
    chai.request(app)
      .post('/api/v1/categorys')
      .set('Authorization', `Bearer ${AuthHelper.createToken('admin@vendly.com', 1)}`)
      .send({ name: 'Auto Spur' })
      .end((err, res) => {
        res.should.have.status(409);
        res.body.status.should.eql(409);
        res.body.should.be.a('object');
        done();
      });
  });

  it('Should check for role', (done) => {
    chai.request(app)
      .post('/api/v1/categorys')
      .set('Authorization', `Bearer ${AuthHelper.createToken('supplier@vendly.com', 2)}`)
      .send({ name: 'Example 2' })
      .end((err, res) => {
        res.should.have.status(401);
        res.body.status.should.eql(401);
        res.body.should.be.a('object');
        done();
      });
  });
});
