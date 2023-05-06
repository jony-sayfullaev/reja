const express = require("express");
const app = express();
const http = require('http');


app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.set("views", "views");
app.set("view engine", "ejs");

// 4 Router
app.get("/", function (req, res) {
    res.end(`<h1 style="background: red">Hello World by Jony</h1>`);
})
app.get("/gift", (req, res) => {
    res.end(`<h1>Siz Sovgalar bolimidasiz</h1>`);
})

const server = http.createServer(app);
let PORT = 3000
server.listen(PORT, () => {
    console.log(`Server is running successfully in ${PORT}`);
})



