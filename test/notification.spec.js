// import chai from 'chai';
// import chaiHttp from 'chai-http';
// import { describe, it } from 'mocha';
// import app from '../index';
// import AuthHelper from '../api/utils/auth.utils';

// chai.use(chaiHttp);
// chai.should();

// describe('NOTIFICATIONS', () => {
//   it('Should send notification', done => {
//     chai
//       .request(app)
//       .post('/notifications')
//       .set('Authorization', `Bearer ${AuthHelper.createToken('admin@vendly.com', 1)}`)
//       .send({ subject: 'good be well', message: 'hello' })
//       .end((err, res) => {
//         res.should.have.status(201);
//         res.body.status.should.eql(201);
//         res.body.should.be.a('object');
//         res.body.message.should.eql('notification  sent successfully');
//         done();
//       });
//   });
//   it('Should create new chat', done => {
//     chai
//       .request(app)
//       .post('/notifications')
//       .set('Authorization', `Bearer ${AuthHelper.createToken('admin@vendly.com', 1)}`)
//       .send({ subject: 'good be well', message: 'hello', ReceiverId: 3 })
//       .end((err, res) => {
//         res.should.have.status(201);
//         res.body.status.should.eql(201);
//         res.body.should.be.a('object');
//         res.body.message.should.eql('notification  sent successfully');
//         done();
//       });
//   });
//   it('Should throw 400 error if no recever id', done => {
//     chai
//       .request(app)
//       .post('/notifications')
//       .set('Authorization', `Bearer ${AuthHelper.createToken('admin@vendly.com', 1)}`)
//       .send({ message: 'hello' })
//       .end((err, res) => {
//         res.should.have.status(400);
//         res.body.status.should.eql(400);
//         res.body.should.be.a('object');
//         res.body.message.should.eql('subject is required');
//         done();
//       });
//   });
//   it('Should throw 400 error if user not found', done => {
//     chai
//       .request(app)
//       .post('/notifications')
//       .set('Authorization', `Bearer ${AuthHelper.createToken('admin@vendly.com', 1)}`)
//       .send({ subject: 'good tests', message: 'hello', ReceiverId: 66 })
//       .end((err, res) => {
//         res.should.have.status(404);
//         res.body.status.should.eql(404);
//         res.body.should.be.a('object');
//         res.body.message.should.eql('receiver does not exist');
//         done();
//       });
//   });
//   it('get all notifications', done => {
//     chai
//       .request(app)
//       .get('/notifications')
//       .set('Authorization', `Bearer ${AuthHelper.createToken('admin@vendly.com', 1)}`)
//       .end((err, res) => {
//         res.should.have.status(200);
//         res.body.status.should.eql(200);
//         res.body.should.be.a('object');
//         done();
//       });
//   });
// });
