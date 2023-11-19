const express = require('express');
const router = express.Router();
const path = require('path');

const users = {};

router.get('/', (_, res) => res.sendFile(path.join(__dirname, '..', 'public', 'info', 'index.html')));
router.get('/users', (_, res) => res.send(JSON.stringify(users)));
router.get('/create', (_, res) => res.sendFile(path.join(__dirname, '..', 'public', 'info', 'create.html')));
router.get('/read', (_, res) => res.sendFile(path.join(__dirname, '..', 'public', 'info', 'read.html')));
router.get('/update', (_, res) => res.sendFile(path.join(__dirname, '..', 'public', 'info', 'update.html')));
router.get('/delete', (_, res) => res.sendFile(path.join(__dirname, '..', 'public', 'info','delete.html')));

router.post('/cid', (req, res) => {
    const {id, name, grade, payment} = req.body;
    users[id] = {name, grade, payment};
    res.sendFile(path.join(__dirname, '..', 'public', 'info', 'index.html'));
});

router.get('/rid', (req, res) => {
    const {id} = req.query;
    if (users[id]) {
        res.send(JSON.stringify(users[id]));
    } else {
        res.send('해당 정보가 존재하지 않습니다.');
    }
});

router.post('/uid', (req, res) => {
    const {id, name, grade, payment} = req.body;
    if (users[id]) {
        users[id] = {name, grade, payment};
        res.sendFile(path.join(__dirname, '..', 'public', 'info', 'index.html'));
    } else {
        res.send('해당 정보가 존재하지 않습니다.');
    }
});

router.get('/did', (req, res) => {
    const {id} = req.query;
    if (users[id]) {
        delete users[id];
        res.send('해당 정보가 삭제되었습니다.');
    } else {
        res.send('해당 정보가 존재하지 않습니다.');
    }
});

module.exports = router;