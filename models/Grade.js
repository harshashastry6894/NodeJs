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
        type: { type: String, required: false },
        score: { type: Number, required: false },
    }]
}, { collection: 'grades' });

module.exports = mangoose.model('grades', GradeSchema);