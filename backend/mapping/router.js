const express = require('express');
const router = express.Router();

const {test} = require('../src/test');

const {act} = require('../src/act');
const {portfolio} = require('../src/portfolio');

router.get('/test', test);

router.get('/act', act);
router.get('/portfolio', portfolio)

module.exports = router;