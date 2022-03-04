const router = require('express').Router();
const verify = require('../verifyToken');
const createController = require('../controller/post/create');
const updateController = require('../controller/post/update');
const deleteController = require('../controller/post/delete');
const likeController = require('../controller/post/like');
const getAPostController = require('../controller/post/getAPost');
const getTimelineController = require('../controller/post/getTimeline');


router.post("/",verify, createController.create);

router.put("/:id",verify, updateController.update);

router.delete("/:id",verify, deleteController.delete);

router.put("/:id/like",verify,likeController.like );

router.get("/:id", getAPostController.getAPost);

router.get("/timeline/all",verify,getTimelineController.getTimeline );

module.exports = router;