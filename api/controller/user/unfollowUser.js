const User = require ('../../models/User');

exports.unfollowUser = async (req, res) => {
    if (req.user.id !== req.params.id) {
      try {
        const user = await User.findById(req.params.id);
        const currentUser = await User.findById(req.user.id);
        if (user.followers.includes(req.user.id)) {
          await user.updateOne({ $pull: { followers: req.user.id } });
          await currentUser.updateOne({ $pull: { followings: req.params.id } });
          res.status(200).json("user has been unfollowed");
        } else {
          res.status(403).json("you dont follow this user");
        }
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(403).json("you cant unfollow yourself");
    }
}