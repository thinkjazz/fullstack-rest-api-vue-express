const express = require('express');
const path = require('path');
const app = express();












app.use(express.static(path.resolve(__dirname, 'client')))
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'index.html'))
})

app.listen(3333, function () {
    console.log("Server has been started on port: 3333")
})

