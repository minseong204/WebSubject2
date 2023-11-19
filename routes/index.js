const express = require('express');
const router = express.Router();
const path = require('path');

const infoRouter = require('./info');
const accountRouter = require('./account');

router.use('/info', infoRouter);
router.use('/account', accountRouter);

module.exports = router;