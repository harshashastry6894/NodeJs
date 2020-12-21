const express = require("express");
const router = express.Router();
const controller = require('../controllers/posts');

/**
 * @swagger
 * /posts/:
 *   get:
 *     description: Returns the post
 *     responses:
 *       200:
 *         description: success
 */
router.get("/", controller.getPosts);

router.post("/", controller.create);

module.exports = router;
