const express = require("express");
const router = express.Router();
const controller = require('../controllers/posts');

router.get("/:id", controller.getById);
router.post("/", controller.create);

module.exports = router;
