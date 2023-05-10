const express = require('express')
const app = express();
const path = require('path');
const port = process.env.PORT || 3001;

app.get("/", (req, res) =>{
    res.sendFile(path.join(__dirname,"views/home.html"))
})
app.get("/login", (req, res) =>{
    res.sendFile(path.join(__dirname,"views/login.html"))
})
app.get("/register", (req, res) =>{
    res.sendFile(path.join(__dirname,"views/register.html"))
})


const publicpath = path.join( __dirname, "./public")
app.use(express.static(publicpath))

app.listen(port, () => console.log("arrancamos en el puerto "+port+ " pa"))
