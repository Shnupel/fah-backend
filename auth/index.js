const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const SECRET_KEY = 'mysecretkey';
const person = { name: "pavel", role: "developer" };

router.post("/register", (req, res) => {
    const { email, password } = req.body;
    console.log(email, password)
    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
    }
    const token = jwt.sign(person, SECRET_KEY, { expiresIn: '1h' });
    res.cookie('token', token, { httpOnly: true, secure: true, maxAge: 3600000 });
    res.status(201).json({ message: "User created successfully" });
});

router.post("/login", (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
    }
    const token = jwt.sign(person, SECRET_KEY, { expiresIn: '1h' });
    res.cookie('token', token, { httpOnly: true, secure: true, maxAge: 3600000 });
    res.status(200).json({ message: "Login successful" });
});

router.post("/refresh", (req, res) => {
    const token = jwt.sign(person, SECRET_KEY, { expiresIn: '1h' });
    res.cookie('token', token, { httpOnly: true, secure: true, maxAge: 3600000 });
    res.status(200).json({ message: "Refresh successful" });
});

router.post("/logout", (req, res) => {
    res.cookie('token', '', { httpOnly: true, secure: true, expires: new Date(0) });
    res.status(200).json({ message: "Logout successful" });
});

router.get("/session", (req, res) => {
    console.log(req.cookies);
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        res.status(204).json({ message: "Protected route accessed", user: decoded });
    });
});

module.exports = router;