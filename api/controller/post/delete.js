const Post = require ('../../models/Post');

exports.delete = async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      if (post.userId === req.user.id) {
        await post.deleteOne();
        res.status(200).json("the post has been deleted");
      } else {
        res.status(403).json("you can delete only your post");
      }
    } catch (err) {
      res.status(500).json(err);
    }
}