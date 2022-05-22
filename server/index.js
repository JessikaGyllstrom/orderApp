const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

const db = mysql.createPool({
    host: "localhost", 
    user: "root",
    password: "password", 
    database: "crudSQL", 
})

app.use(cors());
app.use(express.json());


app.post("/register", (req, res) => {
    const {receiverName} = req.body;
    const {weight} = req.body;
    const {boxcolor} = req.body;
    const {destinationCountry} = req.body;
    
    const sqlInsert = "INSERT INTO boxes (receiverName, weight, boxcolor, destinationCountry ) VALUES (?, ?, ?, ?)";

    db.query(sqlInsert, [receiverName, weight, boxcolor, destinationCountry], (err, result) => {
            console.log(err);
            res.send("Values inserted ");    
    }) 
})
app.get("/listboxes", (req, res)  => {
    let SQL = "SELECT * from boxes";
    db.query(SQL, (error, res) => {
        if(error) {
            console.log(err);
        } else {
            console.log(res);
            res.send(res);
        }
    })
})
app.listen(3001, () => {
    console.log("Server running on port 3001");
})