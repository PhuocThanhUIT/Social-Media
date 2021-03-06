const Post = require ('../../models/Post');

exports.update = async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      if (post.userId === req.user.id) {
        await post.updateOne({ $set: req.body });
        res.status(200).json("the post has been updated");
      } else {
        res.status(403).json("you can update only your post");
      }
    } catch (err) {
      res.status(500).json(err);
    }
}