const express = require('express');
const path = require('path');
const {v4} = require('uuid');
const app = express();

let CONTACTS = [
    {id: v4(), name: 'Sudo Rootovitch', value: '+7 958-555-54-21', marked: false}
]

app.use(express.json())
// GET
app.get('/api/contacts', (req, res) => {
    res.status(200).json(CONTACTS)
    console.log(data)
})

//POST

app.post('/api/contacts', (req, res) => {
    let contact = {...req.body, id: v4(), marked: false}
    CONTACTS.push(contact)
    res.status(201).json(contact)
})

//DELETE

app.delete('/api/contacts/:id', (req, res) => {
    CONTACTS = CONTACTS.filter(c=> c.id !== req.params.id)
    res.status(200).json({message: 'Контакт был удален'})
})
// PUT
app.put('/api/contacts/:id', (req, res) => {
    let index = CONTACTS.findIndex(c=> c.id === req.params.id)
    CONTACTS[index] = req.body
    res.json(CONTACTS[index])
})



    app.use(express.static(path.resolve(__dirname, 'client')))
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'index.html'))
})

app.listen(3333, function () {
    console.log("Server has been started on port: 3333")
})

