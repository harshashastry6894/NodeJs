const mangoose = require('mongoose');

const GradeSchema = mangoose.Schema({
    student_id: {
        type: Number,
        required: true
    },
    class_id: {
        type: Number,
        required: true
    },
    scores: [{
        type: { type: String, required: true },
        score: { type: Number, required: true },
    }],
    title: {
        type: String,
        required: true
    }
}, { collection: 'grades' });

module.exports = mangoose.model('grades', GradeSchema);