const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/health', (req, res) => {
    res.json({ status: 'ok' });
});

app.get('/users', (req, res) => {
    res.json([{ id: 1, name: "Steve" }]);
});

app.post('/users', (req, res) => {
    res.json({ message: "User created" });
});

app.get('/version', (req, res) => {
    res.json({ version: "1.0.0" });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});