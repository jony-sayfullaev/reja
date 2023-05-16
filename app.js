const express = require("express");
const app = express();
const fs = require("fs");

// MongoDB connect
const db = require("./server").db();


let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
    if (err) {
        console.log("ERROR:", err);
    } else {
        user = JSON.parse(data);
    }
});

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("views", "views");
app.set("view engine", "ejs");
// Routers
// create-item
app.post("/create-item", (req, res) => {
    console.log(req.body);
    const new_reja = req.body.reja;
    db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
        console.log();
        res.json(data.ops[0]);
    })
});

app.get("/author", (req, res) => {
    res.render("author", { user: user });
});

// getting
app.get("/", function (req, res) {
    db.collection("plans").find().toArray((err, data) => {
        if (err) {
            console.log(err);
            res.end("Something went wrong")
        } else {
            console.log(data);
            res.render("reja", { items: data });
        }
    });
});

module.exports = app;


