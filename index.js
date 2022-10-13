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
    id = parseint(req.params.id)
    connection.query("SELECT * FROM menu WHERE id = (?)", [id], (err, rows) => {

        if (err) return res.status(406).json({ message: err})
        res.json(rows)
        })
    })

//Ejercicio 3

app.get('/principales', (req, res) =>{
    id = parseint(req.params.id)
    connection.query("SELECT * FROM menu WHERE tipo = principal", (err, rows) => {

        if (err) return res.status(406).json({ message: err})
        res.json(rows)
        })
    })

//Ejercicio 4

app.get('/postres', (req, res) =>{
    id = parseint(req.params.id)
    connection.query("SELECT * FROM menu WHERE tipo = postres", (err, rows) => {

        if (err) return res.status(406).json({ message: err})
        res.json(rows)
        })
    })

//Ejercicio 5

app.get('/bebidas', (req, res) =>{
    id = parseint(req.params.id)
    connection.query("SELECT * FROM menu WHERE tipo = bebida", (err, rows) => {

        if (err) return res.status(406).json({ message: err})
        res.json(rows)
        })
    })

//Ejercicio 6

app.post('/pedido', (req, res) =>{
    let total = 0
    const array = req.body.productos
    for(let i = 0; i < array.length; i++){
    connection.query("SELECT precio FROM menu WHERE id = ?", array[i].id)
    console.log('hola')
    //total += precioUnitario * array[i].cantidad

    }
})