// Npm packages
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
require('dotenv/config');

// Module imports
const log = require('./middlewares/log');
const postsRoute = require('./routes/posts');
const trainingRoute = require('./routes/training');

const app = express();

// Swagger configuration
const options = {
    swaggerDefinition: {
        info: {
            title: 'Node Express',
            description: 'Node Express',
            version: '1.0.0',
        },
        servers: ["http://localhost:3000"]
    },
    apis: ['./routes/*.js'],
};
const swaggerSpec = swaggerJSDoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec)); 

// Middleware
app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(cors());
app.use(log);

// Routes
app.use('/posts', postsRoute);
app.use('./training', trainingRoute);

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
app.listen(port, () => console.log(`Server started and listening on port ${ port } `));