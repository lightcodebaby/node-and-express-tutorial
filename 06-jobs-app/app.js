require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();

// error handler
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.use(express.json());

app.get('/', (req, res) => {
    res.send('jobs api');
});

// connect DB
const connectDB = require('./db/connect');

// routes
const authRouter = require('./routes/authRoutes');
const jobsRouter = require('./routes/jobsRoutes');

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/jobs', jobsRouter);

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