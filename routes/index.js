var express = require('express');
var router = express.Router();

/* Angular JS Setup. */
router.get('/', function(req, res) {
    res.sendfile('./public/views/index.html'); // load our public/index.html file
});

router.get('/admin', function(req, res) {
    res.sendfile('./public/views/admin.html'); // load our public/index.html file
});

module.exports = router;
