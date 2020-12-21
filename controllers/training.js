const Post = require("../models/Post");

const getTrainings = async (req, res) => {
    try {
        const response = await Post.find()
        res.json(response);
    } catch (e) {
        res.json({ message: e });
    }
}
module.exports = {
    getTrainings
}