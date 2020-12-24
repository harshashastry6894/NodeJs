const mangoose = require('mongoose');

const PostSchema = mangoose.Schema({
    student_id: {
        type: Number,
        required: true
    },
    class_id: {
        type: Number,
        required: true
    },
    scores: {
        type: [{ type: String, score: Number }],
        required: true
    },
    title: {
        type: String,
        required: true
    },
    tags: {
        type: [String],
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    },
}, { collection: 'grades' });

module.exports = mangoose.model('Posts', PostSchema);