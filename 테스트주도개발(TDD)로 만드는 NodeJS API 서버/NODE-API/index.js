// 기본 모듈
// const http = require('http');
// http.createServer();

// 사용자 정의 모듈
// const math = require('./math.js');
// const result = math.sum(1, 2);
// console.log(result) // 3

// 동기 readFileSync
// const fs = require('fs');
// const data = fs.readFileSync('./data.txt', 'utf8');
// console.log(data);

// 비동기 readFile
// const fs = require('fs');
// console.log('비동기 테스트 1');
// const data = fs.readFile('./data.txt', 'utf8', function(err, data){
//     console.log(data);
// });
// console.log('비동기 테스트 2');

// Hello World
// const http = require('http'); // 기본모듈 http 호출
// const hostname = '127.0.0.1'; // 호스트 지정
// const port = 3000;            // 포트 지정
// const server = http.createServer((req, res) => { // createServer 실행
//     res.statusCode = 200;                          // 상태 코드
//     res.setHeader('Content-Type', 'text/plain');   // 헤더 설정
//     res.end('Hello World!\n');                     // 종료하며 문자열 출력
// });
// server.listen(port, hostname, () => {            // listen : 서버를 요청대기 상태로 만든다. (port, hostname, callback)
//     console.log(`Server running at http://${hostname}:${port}/`);
// });

// Hello World 라우팅 추가
// const http = require('http'); // 기본모듈 http 호출
// const hostname = '127.0.0.1'; // 호스트 지정
// const port = 3000;            // 포트 지정
// const server = http.createServer((req, res) => { // createServer 실행
//     if (req.url === '/') {
//         res.statusCode = 200;                          // 상태 코드
//         res.setHeader('Content-Type', 'text/plain');   // 헤더 설정
//         res.end('Hello World!\n');                     // 종료하며 문자열 출력
//     } else if(req.url === '/users') {
//         res.statusCode = 200;
//         res.setHeader('Content-Type', 'text/plain');
//         res.end('User List\n');
//     } else {
//         res.statusCode = 404;
//         res.setHeader('Content-Type', 'text/plain');
//         res.end('Not Found\n');
//     }
// });
// server.listen(port, hostname, () => {            // listen : 서버를 요청대기 상태로 만든다. (port, hostname, callback)
//     console.log(`Server running at http://${hostname}:${port}/`);
// });

// 어플리케이션
// const express = require('express');
// const app = express();
// app.listen(3000, function(){ // 3000: port
//     console.log('Server is running');
// })

// 미들웨어
// const express = require('express');
// const app = express();
// function logger(req, res, next){
//     console.log('I am logger');
//     next(); // 미들웨어는 일을 마친 후 next()를 호출해줘야 다음 로직 수행 가능
// }
// app.use(logger);
// app.listen(3000, function(){ // 3000: port
//     console.log('Server is running');
// })

// 미들웨어 실행 순서
// const express = require('express');
// const app = express();
// function logger(req, res, next){
//     console.log('I am logger');
//     next(); // 미들웨어는 일을 마친 후 next()를 호출해줘야 다음 로직 수행 가능
// }
// function logger2(req, res, next){
//     console.log('I am logger2');
//     next();
// }
// app.use(logger);
// app.use(logger2);
// app.listen(3000, function(){ // 3000: port
//     console.log('Server is running');
// })

// 다른 개발자가 만든 미들웨어 사용하기
// const express = require('express');
// const morgan = require('morgan');
// const app = express();
// function logger(req, res, next){
//     console.log('I am logger');
//     next(); // 미들웨어는 일을 마친 후 next()를 호출해줘야 다음 로직 수행 가능
// }
// function logger2(req, res, next){
//     console.log('I am logger2');
//     next();
// }
// app.use(logger);
// app.use(logger2);
// app.use(morgan('dev'));
// app.listen(3000, function(){ // 3000: port
//     console.log('Server is running');
// })

// 에러 미들웨어
// const express = require('express');
// const app = express();
// function commonmw(req, res, next){
//     console.log('commonmw');
//     next(new Error('error ouccered'));
// }
// function errormw(err, req, res, next){
//     console.log(err.message);
//     // 에러를 처리하는 로직
//     next();
// }
// app.use(commonmw);
// app.use(errormw);
// app.listen(3000, function(){ // 3000: port
//     console.log('Server is running');
// })

// Hello world 익스프레스버전
// const express = require('express')
// const app = express()
// const port = 3000
// // app.get('/', function (req, res) {
// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })
// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// })

// 첫 API 만들기
const express = require('express');
const app = express();
const morgan = require('morgan');
let users = [
    {id: 1, name: 'alice'},
    {id: 2, name: 'bek'},
    {id: 3, name: 'chris'},
];
const port = 3000;
app.use(morgan('dev'));
app.get('/users', (req, res) => {
    res.json(users)
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

module.exports = app;