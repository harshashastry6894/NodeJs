const express = require("express");
const controller = require('../controllers/grades');

const router = express.Router();

router.get("/", controller.getGrades);

router.get("/:id", controller.getGradeById);

router.post("/", controller.create);

module.exports = router;
