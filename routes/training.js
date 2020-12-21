const express = require("express");
const router = express.Router();
const controller = require('../controllers/training');

router.get("/", controller.getTrainings);

module.exports = router;
