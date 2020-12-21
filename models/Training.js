const mangoose = require('mongoose');

const CompanySchema = mangoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
});

module.exports = mangoose.model('Posts', CompanySchema);