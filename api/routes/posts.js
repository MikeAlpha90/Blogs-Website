const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");

//Create Post

router.post("/", async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    req.status(500).json(err);
  }
});

//Update Post

router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (req.body.username === post.username) {
      try {
        const updatedPost = await Post.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedPost);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can update your post only");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//Delete a post

router.delete("/:id", async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
  
      if (!post) {
        return res.status(404).json("Post not found");
      }
  
      if (req.body.username === post.username) {
        try {
          await post.deleteOne();
          res.status(200).json("Post has been deleted...");
        } catch (err) {
          res.status(500).json("Failed to delete the post");
        }
      } else {
        res.status(401).json("You can only delete your own post");
      }
    } catch (err) {
      res.status(500).json("An error occurred");
    }
  });

//GET Post
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(404).json("An error occurred while fetching the post");
  }
});

//GET all Posts
router.get("/", async(req,res)=>{
    const userName = req.query.user;
    const catName = req.query.cat
    try{
        let posts;
        if(userName){
            posts = await Post.find({username:userName})
        }else if(catName){
            posts = await Post.find({categories:{
                $in:[catName]
            }})
        }else{
            posts = await Post.find();
        }
        res.status(200).json(posts)
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router;
