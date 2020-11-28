const Post = require("../models/Post");

const getById = async (req, res) => {
    try {
        const response = await Post.findById(req.params.id);
        res.json(response);
    } catch (e) {
        res.json({ message: e });
    }
}

const create = async (req, res) => {
    try {
        const post = new Post({ title: req.body.title, description: req.body.description });
        const response = await post.save();
        res.json(response);
    } catch (e) {
        res.sendStatus(500).json({
            message: e.message,
        });
    }
};

module.exports = {
    getById,
    create
}