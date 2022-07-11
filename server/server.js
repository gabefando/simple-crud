const express = require('express');
const app =  express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    host: '127.0.0.1',
    password: 'mynewpassword',
    database: "clientSystem",
})

app.post('/create', (req, res) => {
    const name = req.body.name
    const phone = req.body.phone
    const address = req.body.address
    const type = req.body.type
    const price = req.body.price
    const desc = req.body.desc

    db.query(
        'INSERT INTO clients (name, phone, address, serviceType, price, serviceDesc) VALUES (?,?,?,?,?,?)',
        [name, phone, address, type, price, desc],
        (err, result) => {
             if (err) {
                console.log(err)
             } else {
                res.send("Values Inserted")
             }
        }
    );
})

app.listen(3001, () => {
    console.log("Server running on port 3001")
});