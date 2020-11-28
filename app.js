// Npm packages
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv/config');

// Module imports
const log = require('./middlewares/log');
const postsRoute = require('./routes/posts');

const app = express();

// Middleware
app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(cors());
app.use(log)

// Routes
app.use('/posts', postsRoute);

// Connect to DB
mongoose.connect(
        process.env.DB_CONNECTION, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        },
    )
    .then(() => {
        console.log('Connected to database successfully!')
    })
    .catch((err) => {
        console.log('Error while connecting to database.');
        console.log('Error:', err);
    });

// Listen to server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started and listening on port ${port}`));