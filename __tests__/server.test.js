const app = require('../server');
const request = require('supertest');

const agent = request(app);
const authenticatedUser = request.agent(app);

const sqlite3 = require('sqlite3').verbose();

describe('Advanced Web Hiring Assessments - Server', () => {
  let db;

  describe('POST /signin', () => {
    beforeEach(done => {
      db = new sqlite3.Database(
        './database/.test.sqlite',
        sqlite3.OPEN_READWRITE
      );

      db.each('DELETE FROM users;');
      db.each('UPDATE sqlite_sequence SET seq = 0 WHERE name = "users";');
      db.each(
        `INSERT INTO users (email,password,username,mobile,createdAt,updatedAt) VALUES (?,?,?,?,date('now'),date('now'))`,
        [
          'coding.kim@codestates.com',
          'switzerland',
          'coding kim',
          '010-1234-5678'
        ]
      );
      done();
    });

    afterEach(done => {
      db.close();
      done();
    });

    test('it should respond 200 status code with user id to signin data', async () => {
      const response = await agent.post('/signin').send({
        email: 'coding.kim@codestates.com',
        password: 'switzerland'
      });

      expect(response.status).toBe(200);
      expect(response.body.id).not.toBe(undefined);
    });

    test('it should respond 404 status code with unvalid user text', async () => {
      const response = await agent.post('/signin').send({
        email: 'coding.kim@javascript.com',
        password: 'helloWorld'
      });

      expect(response.status).toBe(404);
      expect(response.text).toBe('unvalid user');
    });
  });

  describe('POST /signup', () => {
    test('it should response 201 status code with user info to signup data', async () => {
      const response = await agent.post('/signup').send({
        email: 'testuser@gmail.com',
        password: 'test',
        username: 'testuser',
        mobile: '010-0987-6543'
      });

      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty('id', 'username', 'email');
    });

    test('it should 409(conflict) status code with existing user email', async () => {
      const response = await agent.post('/signup').send({
        email: 'coding.kim@codestates.com',
        password: 'foo'
      });

      expect(response.status).toBe(409);
      expect(response.text).toBe('email exists');
    });
  });

  describe.skip('GET /user', () => {
    beforeEach(done => {
      authenticatedUser
        .post('/signin')
        .send({
          email: 'coding.kim@codestates.com',
          password: 'switzerland'
        })
        .end((err, res) => {
          expect(res.status).toBe(200);
          done();
        });

      done();
    });
    test('it should return user data with request of session.userid', done => {
      authenticatedUser.get('/user').end(function(err, res2) {
        expect(res2.status).toBe(200);
        expect(res2.body).toHaveProperty('id', 'email', 'username');
        done();
      });
    });

    xtest('it should return Unauthorized if request without session.userid', done => {
      /*  agent
        .post('/signin')
        .send({
          email: 'coding.kim@codestates.com',
          password: 'korea'
        })
        .then(function(res) {
          agent
            .get('/user')
            .then(function(res2) {
              expect(res2.status).toBe(401);
              done();
            })
            .catch(err => {
              done(err);
            });
        }); */
    });
  });
});
