const express = require('express');
const app = express();

const server = app.listen(3010, () => {
    console.log('start server : localhost:3010');
});

app.get('/', function(req, res) {
    res.send("<h1>Express server Start</h1>")
});

app.get('/api/send/:data', async (req, res) => {
    let data = req.params;
    console.log(data);
    res.send('ok');
});
