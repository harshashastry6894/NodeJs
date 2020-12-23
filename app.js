/* eslint-disable no-undef */
// import dependencies
import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import cors from 'cors';
require('dotenv/config');

// Module imports
import logger from './middlewares/log';
import errorHandler from './middlewares/error-handler';
import postsRoute from './controllers/posts';
import trainingRoute from './controllers/training';

// set up dependencies
const app = express();
app.use(morgan('tiny'));
app.use(express.json()); // to enable body parser(parse body data in request)
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(logger);

// Routes
app.use('/posts', postsRoute);
app.use('/training', trainingRoute);

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to database successfully!')
    }).catch((err) => {
        console.log('Error while connecting to database.');
        console.log('Error:', err);
    });

// global error handler
app.use(errorHandler);

// Listen to server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 3000;
app.listen(port, () => console.log(`Server started and listening on port ${port} `));