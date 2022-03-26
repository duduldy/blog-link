// 라우팅
const express = require('express');
const router = express.Router();
const ctrl = require('./user.ctrl.js');

// /index.js 에서 /users 경로를 지정하고 있기 때문에 생략
// app.get('/users') => router.get('/')
router.get('/', ctrl.index);

router.get('/:id', ctrl.show);

router.delete('/:id', ctrl.distroy);

router.post('/', ctrl.create);

router.put('/:id', ctrl.update);

module.exports = router;