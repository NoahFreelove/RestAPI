const express = require('express');
const Post = require('../models/Post')
const router = express.Router();

router.get('/',(req, res) => {
        res.send("Post Home Pages")
    });

router.post("/", (req, res) =>{
    const post = new Post({
        title: req.body.title,
        description: req.body.description,
        userId: req.body.userId
    });

    post.save().then(data=>{
        res.json(data + "saved")
    })
        .catch(err=>{
            res.json({message: err})
        });
});

module.exports = router;
