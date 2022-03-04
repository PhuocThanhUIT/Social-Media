const User = require ('../../models/User');
const Post = require ('../../models/Post');

exports.getTimeline = async (req, res) => {
    try {
      const currentUser = await User.findById(req.user.id);
      const userPosts = await Post.find({ userId: currentUser._id });
      const friendPosts = await Promise.all(
        currentUser.followings.map((friendId) => {
          return Post.find({ userId: friendId });
        })
      );
      res.json(userPosts.concat(...friendPosts))
    } catch (err) {
      res.status(500).json(err);
    }
  }