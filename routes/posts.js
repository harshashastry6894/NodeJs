import express from 'express';
import controller from '../controllers/posts';

const router = express.Router();

router.get("/", controller.getPosts);

router.post("/", controller.create);

export default router;
