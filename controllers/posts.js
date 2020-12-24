const Post = require("../models/Post");

const getPosts = async (req, res) => {
    try {
        const response = await Post.findOne()
        res.json(response);
    } catch (e) {
        res.json({ message: e });
    }
}

const create = async (req, res) => {
    try {
        const post = new Post({ body: req.body.body, permalink: req.body.permalink, author: req.body.author, title: req.body.title });
        const response = await post.save();
        res.json(response);
    } catch (e) {
        res.sendStatus(500).json({
            message: e.message,
        });
    }
};

module.exports = {
    getPosts,
    create
}