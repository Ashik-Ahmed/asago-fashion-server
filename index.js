const express = require('express');
const app = express();
const port = 5001; // You can change this to any port you prefer

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
