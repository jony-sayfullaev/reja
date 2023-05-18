const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString =
  "mongodb+srv://jony:R95oCHWhzRu17P4y@cluster0.exmecb2.mongodb.net/Reja";
mongodb.connect(
  connectionString,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {
    if (err) console.log("ERROR: ", err);
    else {
      console.log("MongoDB: Connected");
      module.exports = client;
      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 3000;
      server.listen(PORT, function () {
        console.log(
          `The server is running successfully on port: ${PORT}, http://localhost:${PORT}`
        );
      });
    }
  }
);
