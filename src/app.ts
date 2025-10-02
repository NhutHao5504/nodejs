const express = require("express");
require("dotenv").config();

const app = express()
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
    res.send("Hello world nodemon");
})

app.listen(8080, () => {
    console.log(`My app is running on port: ${PORT}`);
    console.log("env port: ", process.env.PORT);
    
})