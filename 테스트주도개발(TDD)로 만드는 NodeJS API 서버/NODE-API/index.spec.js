const app = require('./index');
const request = require('supertest');

describe('GET /users는', () => {
    it('...supertest 작동 확인...', (done) => {
        request(app)
            .get('/users')
            .end((err, res) => {
                console.log(res.body);
                done(); // 콜백함수
            })
    })
})