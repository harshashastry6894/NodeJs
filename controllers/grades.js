const Grade = require("../models/Grade");

const getGrades = async (req, res) => {
    try {
        const response = await Grade.find().select('-_id')
        res.json(response);
    } catch (e) {
        res.send(500).json({ message: e.message });
    }
}

const getGradeById = async (req, res) => {
    try {
        const response = await Grade.findById(req.params.id);
        res.json(response);
    } catch (e) {
        res.send(500).json({ message: e.message });
    }
}

const create = async (req, res) => {
    try {
        const grade = new Grade({ body: req.body.body, permalink: req.body.permalink, author: req.body.author, title: req.body.title });
        const response = await grade.save();
        res.json(response);
    } catch (e) {
        res.send(500).json({ message: e.message });
    }
};

module.exports = {
    getGrades,
    getGradeById,
    create
}