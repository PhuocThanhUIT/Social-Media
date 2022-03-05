const User = require('../../models/User');

exports.getAUser = async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      const { password, updatedAt, isAdmin, ...other } = user._doc;
      res.status(200).json(other);
    } catch (err) {
      res.status(500).json(err);
    }
}