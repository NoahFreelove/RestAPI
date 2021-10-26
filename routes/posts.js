const express = require('express');
const Post = require('../models/Post')
const router = express.Router();

// get all posts
router.get('/', async(req, res) => {
        try {
            const posts = await Post.find();
            res.json(posts);
        }catch (e)
        {
            res.json({message: e});
        }
    });
// submit post
router.post("/", async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description,
        userName: req.body.userName
    });

    try {
        const savedPost = await post.save();
        res.json(savedPost);
    }catch (e)
    {
        res.json({message: e});
    }
});

// get specific post
router.get('/:postId', async (req,res)=>{
    try {
        const post = await Post.findById(req.params.postId)
        res.json(post)
    } catch (e)
    {
        res.json({message: "No such post"})
    }

})

// delete post
router.delete('/:postId', async (req,res)=>{
   try {
       const removedPost = await Post.remove({_id: req.params.postId})
       res.json({deleted: "yes"})
   } catch (e)
   {
       res.json({deleted: "no"})
   }
});
module.exports = router;
