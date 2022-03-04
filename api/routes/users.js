const router = require('express').Router();
const verify = require('../verifyToken');
const updateController = require('../controller/user/update');
const deleteController = require('../controller/user/delete');
const getAUserController = require('../controller/user/getAUser');

router.put("/:id",verify, updateController.update);

router.delete("/:id",verify, deleteController.delete);

router.get("/:id", getAUserController.getAUser);

module.exports = router;