require("dotenv").config();

const express = require('express');
const app = express();
const port = process.env.PORT;
const db = require('./db');
const cors = require('cors');
const corsOptions = {
    origin: "http://127.0.0.1:5500",
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json())

app.get('/' , (req, res) => {
    res.json({"message":"It's working!"})
});

app.get('/all', async(req, res) => {
    const result = await db.getUsers();
    res.json(result);
});

app.post('/user', cors(corsOptions), async(req, res) => {
    await db.insertUser(req.body);
    res.sendStatus(200);
});

app.listen(port, () => {console.log('Server on!')});
