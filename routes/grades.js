const express = require("express");
const controller = require('../controllers/grades');

const router = express.Router();

router.get("/", controller.getGrades);

router.get("/:id", controller.getGradeById);

router.post("/", controller.create);

router.delete("/:id", controller.removeGrade);

module.exports = router;
