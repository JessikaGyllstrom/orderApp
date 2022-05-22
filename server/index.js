const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const db = mysql.createPool({
    host: "localhost", 
    user: "root",
    password: "password", 
    database: "crudSQL", 
})

app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(express.json());

app.post("/addbox", (req, res) => {
    const {receiverName} = req.body;
    const {weight} = req.body;
    const {boxcolor} = req.body;
    const {destinationCountry} = req.body;
    
    const sqlInsert = "INSERT INTO boxes (receiverName, weight, boxcolor, destinationCountry ) VALUES (?, ?, ?, ?)";

    db.query(sqlInsert, [receiverName, weight, boxcolor, destinationCountry], (err, result) => {
        console.log(result);
        if(err) {
            res.send(err);
        } else {
            res.send("Values inserted");    
        }
    }) 
})
app.get("/listboxes", (req, res) => {
    const sqlSelect = "SELECT * FROM boxes";
    db.query(sqlSelect, (err, result) => {
        console.log(result);
        res.send(result);
    })
})

app.listen(3001, () => {
    console.log("Server running on port 3001");
})