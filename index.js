const express = require('express');

const app = express();

app.use(express.json())

app.set ('port', 4000);

app.listen (app.get('port'));

app.get('/', (req, res) =>{
    res.send('API is running...')
})

const users = { 'yo': 1}

app.get('/users', (req, res) =>{
    res.status(200).json(users);
})

/*app.get('/users:id', (req, res) =>{
    res.status(200).json(users);
})*/

app.post('/users', (req, res) =>{
    
})

console.log('Tamos corriendo en el puerto', app.get('port'));