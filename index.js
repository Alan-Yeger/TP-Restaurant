import express from 'express';
import { connection } from './database.js';

const app = express();

app.use(express.json())

app.set ('port', 4000);

app.listen (app.get('port'));

console.log('Tamos corriendo en el puerto', app.get('port'));

/*app.get('/', (req, res) =>{
    res.send('API is running...')
})*/

//Ejercicio 1

app.get('/menu', (req, res) =>{
    connection.query("SELECT * FROM menu", (err, rows) => {

        if (err) return res.status(406).json({ message: err})
        res.json(rows)
        })
    })

//Ejercicio 2

app.get('/menu:id', (req, res) =>{
    id = parseint(req.body.params)
    connection.query("SELECT * FROM menu WHERE id = (?)", [id], (err, rows) => {

        if (err) return res.status(406).json({ message: err})
        res.json(rows)
        })
    })