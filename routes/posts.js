const express = require('express');
const Post = require('../models/Post')
const router = express.Router();

router.get('/', async(req, res) => {
        try {
            const posts = await Post.find();
            res.json(posts);
        }catch (e)
        {
            res.json({message: e});
        }
    });

router.post("/", async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description,
        userId: req.body.userId
    });

    try {
        const savedPost = await post.save();
        res.json(savedPost);
    }catch (e)
    {
        res.json({message: e});
    }



});

module.exports = router;
