const express = require('express');
const path = require('path');
const app = express();

const CONTACTS = [
    {id: 1, name: 'sudo', value: '+7 958-555-54-21', marked: false}
]

// GET
app.get('/api/contacts', (req, res) => {
    res.status(200).json(CONTACTS)
    console.log(data)
})







app.use(express.static(path.resolve(__dirname, 'client')))
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'index.html'))
})

app.listen(3333, function () {
    console.log("Server has been started on port: 3333")
})

