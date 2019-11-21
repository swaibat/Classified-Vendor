import chai from 'chai';
import chaiHttp from 'chai-http';
import { describe, it } from 'mocha';
import app from '../index';
import page from './data/page.data';
import AuthHelper from '../api/utils/auth.utils';

chai.use(chaiHttp);
chai.should();

describe('create Page', () => {
  it('Should create new page', (done) => {
    chai.request(app)
      .post('/pages')
      .set('Authorization', `Bearer ${AuthHelper.createToken('admin@vendly.com', 1)}`)
      .send(page.data1)
      .end((err, res) => {
        res.should.have.status(201);
        res.body.status.should.eql(201);
        res.body.should.be.a('object');
        res.body.message.should.eql('page created successfully');
        done();
      });
  });
  it('Should check invalid data', (done) => {
    chai.request(app)
      .post('/pages')
      .set('Authorization', `Bearer ${AuthHelper.createToken('admin@vendly.com', 1)}`)
      .send(page.data2)
      .end((err, res) => {
        res.should.have.status(400);
        res.body.status.should.eql(400);
        res.body.should.be.a('object');
        res.body.message.should.eql('CategoryId is required');
        done();
      });
  });

  it('get one page', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        res;
        done();
      });
  });
});
