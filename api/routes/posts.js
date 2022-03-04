const router = require('express').Router();
const verify = require('../verifyToken');
const createController = require('../controller/post/create');
const updateController = require('../controller/post/update');

router.post("/",verify, createController.create);

router.put("/:id",verify, updateController.update);

module.exports = router;