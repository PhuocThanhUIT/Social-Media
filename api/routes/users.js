const router = require('express').Router();
const verify = require('../verifyToken');
const updateController = require('../controller/user/update');
const deleteController = require('../controller/user/delete');
const getAUserController = require('../controller/user/getAUser');
const followUserController = require('../controller/user/followUser');
const unfollowUserController = require('../controller/user/unfollowUser');

router.put("/:id",verify, updateController.update);

router.delete("/:id",verify, deleteController.delete);

router.get("/:id", getAUserController.getAUser);

router.put("/:id/follow",verify,followUserController.followUser );

router.put("/:id/unfollow",verify,unfollowUserController.unfollowUser );

module.exports = router;