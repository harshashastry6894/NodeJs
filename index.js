// import dependencies
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv/config');
const logger = require("./utility/logger");
const gradesRoute = require('./routes/grades');
const errorHandler = require('./middlewares/error-handler');
const swaggerUi = require('swagger-ui-express');
swaggerDocument = require('./swagger.json');

// set up dependencies
const app = express();
app.use(express.json()); // to enable body parser(parse body data in request)
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// logging
app.use(morgan("combined", { stream: logger.stream }));

// api routes
app.use('/api/v1/grade', gradesRoute)

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        logger.info('Connected to database successfully!')
    }).catch((err) => {
        logger.error('Error while connecting to database.');
        logger.error('Error:', err);
    });

// global error handling
app.use(errorHandler);

// swagger configuration
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.all('*', (req, res, next) => {
    res.status(404).json({ message: `Can't find ${req.originalUrl} on this server!` });
});

// Listen to server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 3000;
app.listen(port, () => logger.info(`Server started and listening on port ${port}`));