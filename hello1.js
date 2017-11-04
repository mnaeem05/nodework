const express = require("express");
const app = express();

app.get("/", function (req,res) {
res.send(" Hello Express ")
})

app.get("/user", function (req,res) {
    res.send("<h2> H2 Hello Express </h2>")
    })

app.get("/user/:user_id", function (req,res) {
    res.send(`<h1 style="background: grey; color:#33FF68; font-family: verdana; font-size: 50px; position: absolute; top: 20px; left: 100px; cursor: pointer; border: 5px solid darkgoldenrod; border-radius: 5px";>${req.params.user_id}</h1>`)
    })

app.listen(1000, function(){
    console.log("server is running")
})