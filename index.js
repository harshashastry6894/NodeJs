// import dependencies
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv/config');
const logger = require('./middlewares/log');
const gradesRoute = require('./routes/grades');

// set up dependencies
const app = express();
app.use(morgan('tiny'));
app.use(express.json()); // to enable body parser(parse body data in request)
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(logger);

// api routes
app.use('/grade', gradesRoute);

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to database successfully!')
    }).catch((err) => {
        console.log('Error while connecting to database.');
        console.log('Error:', err);
    });

// Listen to server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 3000;
app.listen(port, () => console.log(`Server started and listening on port ${port} `));