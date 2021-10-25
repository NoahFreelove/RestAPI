const express = require('express');

const router = express.Router();

router.route('/')
    .get((req, res) => {
        res.send("Post Home Page")
    });

router.route('/1234')
    .get((req, res) => {
        res.send("1234 Page")
    });

module.exports = router;
