var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/savior-tech-frontend/index.html'));
});

module.exports = router;