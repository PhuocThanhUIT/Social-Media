const router = require('express').Router();
const verify = require('../verifyToken');
const createController = require('../controller/post/create');
const updateController = require('../controller/post/update');
const deleteController = require('../controller/post/delete');
const likeController = require('../controller/post/like');


router.post("/",verify, createController.create);

router.put("/:id",verify, updateController.update);

router.delete("/:id",verify, deleteController.delete);

router.put("/:id/like",verify,likeController.like );

module.exports = router;