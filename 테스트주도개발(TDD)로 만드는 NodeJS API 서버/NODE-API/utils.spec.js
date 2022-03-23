// assert 사용
// const assert = require('assert');
// const utils = require('./utils');
// describe('utils.js 모듈dml capitialize() 함수는', () => {
//     it('문자열의 첫번째 문자를 대문자로 변환한다', () => {
//         const result = utils.capitialize('hello');
//         assert.equal(result, 'Hello');
//     })
// });

// should 사용
const should = require('should');
const utils = require('./utils');
describe('utils.js 모듈dml capitialize() 함수는', () => {
    it('문자열의 첫번째 문자를 대문자로 변환한다', () => {
        const result = utils.capitialize('hello');
        result.should.be.equal('Hello');
    })
});