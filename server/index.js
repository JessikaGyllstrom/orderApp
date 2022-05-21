const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

const db = mysql.createPool({
    host: "localhost", 
    user: "root", 
    password: "password", 
    database: "crudDB",
});

app.use(express.json());

app.get("/api", (req, res) => {
    const name = req.body.name;
    const age = req.body.age;
    const country = req.body.country;

   // const sqlInsert = "INSERT INTO box_db (name, email, contact) VALUES ('O101', 'OO', '00')";
   
    const sqlInsert = "INSERT INTO box_db (name, email, contact) VALUES ('666', 'OO', '00')";

    db.query(sqlInsert, (err, result) => {
            console.log(err);
            res.send("Values inserted");    
            console.log(age);  
    }) 
})

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});