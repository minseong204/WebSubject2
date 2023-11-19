const express = require('express');
const path = require('path');
const router = express.Router();
const accountData = {};

router.get('/', (_, res) => res.sendFile(path.join(__dirname, '..', 'public', 'account', 'index.html')));
router.get('/create', (_, res) => res.sendFile(path.join(__dirname, '..', 'public', 'account', 'create.html')));
router.get('/read', (_, res) => res.sendFile(path.join(__dirname, '..', 'public', 'account', 'read.html')));
router.get('/update', (_, res) => res.sendFile(path.join(__dirname, '..', 'public', 'account', 'update.html')));
router.get('/delete', (_, res) => res.sendFile(path.join(__dirname, '..', 'public', 'account', 'delete.html')));

router.post('/cid', (req, res) => {
    const {studentId, name, grade, paymentType, isPaid} = req.body;
    accountData[studentId] = {name, grade, paymentType, isPaid};
    res.sendFile(path.join(__dirname, '..', 'public', 'account', 'index.html'));
});

router.get('/rid', (req, res) => {
    const {studentId} = req.query;
    if (accountData[studentId]) {
        res.json(accountData[studentId]);
    } else {
        res.send('해당 학생 정보가 존재하지 않습니다.');
    }
});

router.post('/uid', (req, res) => {
    const {studentId, name, grade, paymentType, isPaid} = req.body;
    if (accountData[studentId]) {
        accountData[studentId] = {name, grade, paymentType, isPaid};
        res.sendFile(path.join(__dirname, '..', 'public', 'account', 'index.html'));
    } else {
        res.send('해당 학생 정보가 존재하지 않습니다.');
    }
});

router.get('/did', (req, res) => {
    const{studentId} = req.query;
    if(accountData[studentId]) {
        delete accountData[studentId];
        res.send('해당 학생 정보가 삭제되었습니다.');
    } else {
        res.send('해당 학생 정보가 존재하지 않습니다.');
    }
})
router.get('/accountData', (_, res) => {
    console.log('accountData', accountData);
    if (Object.keys(accountData).length === 0) {
        res.send('등록된 학생 정보가 없습니다.');
    } else {
        res.json(accountData);
    }
});

module.exports = router;

