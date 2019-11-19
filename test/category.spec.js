import chai from 'chai';
import chaiHttp from 'chai-http';
import { describe, it } from 'mocha';
import app from '../index';
import AuthHelper from '../api/utils/auth.utils';

chai.use(chaiHttp);
chai.should();

describe('GET categorys', () => {
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

describe('ADMIN create categorys', () => {
  it('Should create category', (done) => {
    chai.request(app)
      .post('/api/v1/categorys')
      .set('Authorization', `Bearer ${AuthHelper.createToken('admin@vendly.com', 1)}`)
      .send({ name: 'Auto Spur' })
      .end((err, res) => {
        res.should.have.status(201);
        res.body.status.should.eql(201);
        res.body.should.be.a('object');
        res.body.message.should.eql('Category created successfully');
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
        res.body.message.should.eql('Category already exists');
        done();
      });
  });
  it('Should check for role', (done) => {
    chai.request(app)
      .post('/api/v1/categorys')
      .set('Authorization', `Bearer ${AuthHelper.createToken('buyer@vendly.com', 3)}`)
      .send({ name: 'Example 2' })
      .end((err, res) => {
        res.should.have.status(401);
        res.body.status.should.eql(401);
        res.body.should.be.a('object');
        res.body.message.should.eql('Not allowed to perform this operation');
        done();
      });
  });
});

describe('SELLER create category', () => {
  it('Should create category', (done) => {
    chai.request(app)
      .post('/api/v1/categorys')
      .set('Authorization', `Bearer ${AuthHelper.createToken('seller@vendly.com', 2)}`)
      .send({ name: 'Auto Spur' })
      .end((err, res) => {
        res.should.have.status(201);
        res.body.status.should.eql(201);
        res.body.should.be.a('object');
        res.body.data.should.have.property('UserId');
        done();
      });
  });
  it('Should check if category exists', (done) => {
    chai.request(app)
      .post('/api/v1/categorys')
      .set('Authorization', `Bearer ${AuthHelper.createToken('seller@vendly.com', 2)}`)
      .send({ name: 'Auto Spur' })
      .end((err, res) => {
        res.should.have.status(409);
        res.body.status.should.eql(409);
        res.body.should.be.a('object');
        res.body.message.should.eql('Category already exists');
        done();
      });
  });
});

describe('create sub category', () => {
  it('create admin sub category', (done) => {
    chai.request(app)
      .post('/api/v1/categorys/1/sub')
      .set('Authorization', `Bearer ${AuthHelper.createToken('admin@vendly.com', 1)}`)
      .send({ name: 'Auto Spur' })
      .end((err, res) => {
        res.should.have.status(201);
        res.body.status.should.eql(201);
        res.body.should.be.a('object');
        res.body.message.should.eql('sub-Category created successfully');
        res.body.data.should.have.property('CategoryId');
        done();
      });
  });
  it('Should create seller subcategory', (done) => {
    chai.request(app)
      .post('/api/v1/categorys/1/sub')
      .set('Authorization', `Bearer ${AuthHelper.createToken('seller@vendly.com', 1)}`)
      .send({ name: 'Auto Spur' })
      .end((err, res) => {
        res.should.have.status(201);
        res.body.status.should.eql(201);
        res.body.should.be.a('object');
        res.body.message.should.eql('sub-Category created successfully');
        res.body.data.should.have.property('SellerCategoryId');
        done();
      });
  });
  it('Should check if subcategory exists', (done) => {
    chai.request(app)
      .post('/api/v1/categorys/1/sub')
      .set('Authorization', `Bearer ${AuthHelper.createToken('admin@vendly.com', 1)}`)
      .send({ name: 'Auto Spur' })
      .end((err, res) => {
        res.should.have.status(409);
        res.body.status.should.eql(409);
        res.body.should.be.a('object');
        res.body.message.should.eql('Sub-category already exists');
        done();
      });
  });

  it('Should check seller sub category exists', (done) => {
    chai.request(app)
      .post('/api/v1/categorys/1/sub')
      .set('Authorization', `Bearer ${AuthHelper.createToken('seller@vendly.com', 1)}`)
      .send({ name: 'Auto Spur' })
      .end((err, res) => {
        res.should.have.status(409);
        res.body.status.should.eql(409);
        res.body.should.be.a('object');
        res.body.message.should.eql('Sub-category already exists');
        done();
      });
  });

  it('Should check if category exists', (done) => {
    chai.request(app)
      .post('/api/v1/categorys/88/sub')
      .set('Authorization', `Bearer ${AuthHelper.createToken('admin@vendly.com', 1)}`)
      .send({ name: 'Auto Spur' })
      .end((err, res) => {
        res.should.have.status(404);
        res.body.status.should.eql(404);
        res.body.should.be.a('object');
        res.body.message.should.eql('Category does not exists');
        done();
      });
  });

  it('Should check if seller category exists', (done) => {
    chai.request(app)
      .post('/api/v1/categorys/5/sub')
      .set('Authorization', `Bearer ${AuthHelper.createToken('seller@vendly.com', 1)}`)
      .send({ name: 'Auto Spurv' })
      .end((err, res) => {
        res.should.have.status(404);
        res.body.status.should.eql(404);
        res.body.should.be.a('object');
        res.body.message.should.eql('Category does not exists');
        done();
      });
  });

  it('Should check for valid params', (done) => {
    chai.request(app)
      .post('/api/v1/categorys/fhhf/sub')
      .set('Authorization', `Bearer ${AuthHelper.createToken('seller@vendly.com', 1)}`)
      .send({ name: 'Auto Spurv' })
      .end((err, res) => {
        res.should.have.status(400);
        res.body.status.should.eql(400);
        res.body.should.be.a('object');
        res.body.message.should.eql('id should be an integer');
        done();
      });
  });

  it('Should check for valid params', (done) => {
    chai.request(app)
      .post('/api/v1/categorys/2/sub')
      .set('Authorization', `Bearer ${AuthHelper.createToken('seller@vendly.com', 1)}`)
      .send({ name: 'me' })
      .end((err, res) => {
        res.should.have.status(400);
        res.body.status.should.eql(400);
        res.body.should.be.a('object');
        res.body.message.should.eql('name should be greater than 3');
        done();
      });
  });
});
