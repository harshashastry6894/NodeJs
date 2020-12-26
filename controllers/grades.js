const Grade = require("../models/Grade");
const { BadRequest } = require("../utility/error");

const getGrades = async (req, res, next) => {
    try {
        const response = await Grade.find().select('-_id')
        res.json(response);
    } catch (e) {
        next(e);
    }
}

const getGradeById = async (req, res, next) => {
    try {
        if (req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
            const response = await Grade.findById(req.params.id);
            if (!response) {
                throw new BadRequest('grade not found');
            }
            res.json(response);
        } else {
            throw new BadRequest('grade not found');
        }
    } catch (e) {
        next(e);
    }
}

const create = async (req, res, next) => {
    try {
        const grade = new Grade({ ...req.body });
        const response = await grade.save();
        res.json(response);
    } catch (e) {
        next(e);
    }
};

const removeGrade = async (req, res, next) => {
    try {
        if (req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
            const response = await Grade.findByIdAndDelete(req.params.id);
            if (!response) {
                throw new BadRequest('grade not found');
            }
            res.json(response);
        } else {
            throw new BadRequest('grade not found');
        }
    } catch (e) {
        next(e);
    }
};

module.exports = {
    getGrades,
    getGradeById,
    removeGrade,
    create
}