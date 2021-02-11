const express = require("express");
const controller = require('../controllers/grades');

const router = express.Router();

router.route("/")
    .get(controller.getGrades)
    .post(controller.create);

router.route("/:id")
    .get(controller.getGradeById)
    .delete(controller.removeGrade);

module.exports = router;