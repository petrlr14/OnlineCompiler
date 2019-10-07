const express = require("express");
const router = express.Router();
const controller = require('./../controllers/exec');

router.post("/", controller.exe);

module.exports = router;