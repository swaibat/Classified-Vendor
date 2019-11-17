import chai from 'chai';
import chaiHttp from 'chai-http';
import { describe, it } from 'mocha';
import app from '../index';

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
});
