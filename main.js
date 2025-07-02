const express = require('express');
const authRoutes = require('./auth');
const profileRoutes = require('./profile');
const cookieParser = require('cookie-parser');
const cors = require("cors");

const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type, Authorization',
    preflightContinue: false,
    credentials: true,
    optionsSuccessStatus: 204,
}))

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.listen(4444, () => {
    console.log('Server is running on port 4444');
});

app.get("/", (req, res) => res.send("Hello world"));

app.use('/api/auth', authRoutes);

app.use('/api/profile', profileRoutes);