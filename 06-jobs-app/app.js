require('dotenv').config();
require('express-async-errors');

// extra security packages
const helmet = require('helmet');
const cors = require('cors');
const xss = require('xss-clean');
const rateLimiter = require('express-rate-limit');

// swagger

const swaggerUI = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml')

const express = require('express');
const app = express();

// error handler
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

// routes
const authRouter = require('./routes/authRoutes');
const jobsRouter = require('./routes/jobsRoutes');


app.set('trust proxy', 1);
app.use(rateLimiter({
    windowMs: 15 * 60 * 1000,
    max: 100
}));
app.use(express.json());
app.use(helmet());
app.unsubscribe(cors());
app.use(xss());


app.get('/', (req, res) => {
    res.send('<h1>jobs API</h1><a href="/api-docs">Documentation</a>');
});

app.use('/api-docs/', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

// connect DB
const connectDB = require('./db/connect');

const authMiddleWare = require('./middleware/auth');

// routes
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/jobs', authMiddleWare, jobsRouter);

// error handler
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log(`Server is listening on port ${port}`));
    } catch (error) {
        console.log(error);
    }
};

start();
