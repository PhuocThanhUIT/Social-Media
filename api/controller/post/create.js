const Post = require('../../models/Post');

exports.create = async (req, res) => {
    req.body["userId"] = req.user.id;
    console.log(req.body);
    const newPost = new Post(req.body);
    try {
      const savedPost = await newPost.save();
      res.status(200).json(savedPost);
    } catch (err) {
      res.status(500).json(err);
    }
}