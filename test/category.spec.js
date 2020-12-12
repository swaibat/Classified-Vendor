// import chai from 'chai';
// import chaiHttp from 'chai-http';
// import { describe, it } from 'mocha';
// import app from '../index';
// import AuthHelper from '../api/utils/auth.utils';

// chai.use(chaiHttp);
// chai.should();

// describe('GET categorys', () => {
//   it('Should get all categories', done => {
//     chai
//       .request(app)
//       .get('/categorys')
//       .end((err, res) => {
//         res.should.have.status(200);
//         res.body.status.should.eql(200);
//         res.body.should.be.a('object');
//         done();
//       });
//   });
// });

// describe('ADMIN create categorys', () => {
//   it('Should create category', done => {
//     chai
//       .request(app)
//       .post('/categorys')
//       .set('Authorization', `Bearer ${AuthHelper.createToken('admin@vendly.com', 1)}`)
//       .send({ name: 'Auto Spur' })
//       .end((err, res) => {
//         res.should.have.status(201);
//         res.body.status.should.eql(201);
//         res.body.should.be.a('object');
//         res.body.message.should.eql('Category created successfully');
//         done();
//       });
//   });
//   it('Should check if category exists', done => {
//     chai
//       .request(app)
//       .post('/categorys')
//       .set('Authorization', `Bearer ${AuthHelper.createToken('admin@vendly.com', 1)}`)
//       .send({ name: 'Auto Spur' })
//       .end((err, res) => {
//         res.should.have.status(409);
//         res.body.status.should.eql(409);
//         res.body.should.be.a('object');
//         res.body.message.should.eql('Category already exists');
//         done();
//       });
//   });
//   it('Should check for role', done => {
//     chai
//       .request(app)
//       .post('/categorys')
//       .set('Authorization', `Bearer ${AuthHelper.createToken('buyer@vendly.com', 3)}`)
//       .send({ name: 'Example 2' })
//       .end((err, res) => {
//         res.should.have.status(401);
//         res.body.status.should.eql(401);
//         res.body.should.be.a('object');
//         res.body.message.should.eql('Not allowed to perform this operation');
//         done();
//       });
//   });
//   it('Should validate', done => {
//     chai
//       .request(app)
//       .post('/categorys')
//       .set('Authorization', `Bearer ${AuthHelper.createToken('admin@vendly.com', 1)}`)
//       .send({})
//       .end((err, res) => {
//         res.should.have.status(400);
//         res.body.status.should.eql(400);
//         res.body.should.be.a('object');
//         res.body.message.should.eql('name is required');
//         done();
//       });
//   });
// });

// describe('SELLER create category', () => {
//   it('Should create category', done => {
//     chai
//       .request(app)
//       .post('/categorys')
//       .set('Authorization', `Bearer ${AuthHelper.createToken('seller@vendly.com', 2)}`)
//       .send({ name: 'Auto Spur' })
//       .end((err, res) => {
//         res.should.have.status(201);
//         res.body.status.should.eql(201);
//         res.body.should.be.a('object');
//         res.body.data.should.have.property('UserId');
//         done();
//       });
//   });
//   it('Should check if category exists', done => {
//     chai
//       .request(app)
//       .post('/categorys')
//       .set('Authorization', `Bearer ${AuthHelper.createToken('seller@vendly.com', 2)}`)
//       .send({ name: 'Auto Spur' })
//       .end((err, res) => {
//         res.should.have.status(409);
//         res.body.status.should.eql(409);
//         res.body.should.be.a('object');
//         res.body.message.should.eql('Category already exists');
//         done();
//       });
//   });
// });

// describe('GET product by category', () => {
//   it('Should Delete product', done => {
//     chai
//       .request(app)
//       .get('/categorys/99')
//       .end((err, res) => {
//         res.should.have.status(404);
//         res.body.status.should.eql(404);
//         res.body.should.be.a('object');
//         res.body.message.should.eql('Oops no results found');
//         done();
//       });
//   });
//   it('Should Delete product', done => {
//     chai
//       .request(app)
//       .get('/categorys/1')
//       .end((err, res) => {
//         res.should.have.status(200);
//         res.body.status.should.eql(200);
//         res.body.should.be.a('object');
//         done();
//       });
//   });
//   it('Should Delete product', done => {
//     chai
//       .request(app)
//       .get('/categorys/company/vendly')
//       .end((err, res) => {
//         res.should.have.status(200);
//         res.body.status.should.eql(200);
//         res.body.should.be.a('object');
//         done();
//       });
//   });
//   // it('Should not find category in a company', done => {
//   //   chai
//   //     .request(app)
//   //     .get('/categorys/company/vendly/1')
//   //     .end((err, res) => {
//   //       res.should.have.status(404);
//   //       res.body.status.should.eql(404);
//   //       res.body.should.be.a('object');
//   //       res.body.message.should.eql('Oops no results found');
//   //       done();
//   //     });
//   // });
//   it('Should find no category with Id', done => {
//     chai
//       .request(app)
//       .get('/categorys/1000')
//       .end((err, res) => {
//         res.should.have.status(404);
//         res.body.status.should.eql(404);
//         res.body.should.be.a('object');
//         res.body.message.should.eql('Oops no results found');
//         done();
//       });
//   });
// });
