const express = require("express");
const mysql = require("mysql");

const cors = require("cors");

const app = express();
app.use(express.json());

app.use(cors());
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "bts",
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("MySql Connected...");
});

app.get("/songs", (req, res) => {
  const query = "SELECT id,name FROM songs";
  db.query(query, (err, result) => {
    if (err) {
      console.error("Error executing query: " + err.stack);
      res.status(500).send("Internal Server Error");
    } else {
      res.send({ songs: result });
    }
  });
});

app.get("/getSongById/:id", (req, res) => {
  const query = "SELECT id,name,Lyrics,musicUrl,pic FROM songs WHERE id = ?";
  db.query(query, [req.params.id], (err, result) => {
    if (err) {
      console.error("Error executing query: " + err.stack);
      res.status(500).send("Internal Server Error");
    } else {
      res.send(result);
    }
  });
});

app.get("/visitercount", (req, res) => {
  const updatequery = "UPDATE visitercount SET count = count + 1 WHERE id = 1";
  const query = "SELECT count FROM visitercount WHERE id = 1";
  db.query(updatequery, (err, result) => {
    if (err) {
      console.error("Error executing query: " + err.stack);
      res.status(500).send("Internal Server Error");
    } else {
      db.query(query, (err, result) => {
        if (err) {
          console.error("Error executing query: " + err.stack);
          res.status(500).send("Internal Server Error");
        } else {
          res.send(result);
        }
      });
    }
  });
});
app.post("/messagesadd", (req, res) => {
  const query =
    "INSERT INTO chats (username,chat,date) VALUES (?,?,DATE(NOW()))";
  db.query(query, [req.body.user, req.body.text], (err, result) => {
    if (err) {
      console.error("Error executing query: " + err.stack);
      res.status(500).send("Internal Server Error");
    } else {
      res.send(result);
    }
  });
});

app.get("/messages", (req, res) => {
  const query = "SELECT username,chat,date FROM chats";
  db.query(query, (err, result) => {
    if (err) {
      console.error("Error executing query: " + err.stack);
      res.status(500).send("Internal Server Error");
    } else {
      res.send({ messages: result });
    }
  });
});

app.get("/album/:id", (req, res) => {
  const query = "SELECT * FROM album WHERE id = ?";
  db.query(query, [req.params.id], (err, result) => {
    if (err) {
      console.error("Error executing query: " + err.stack);
      res.status(500).send("Internal Server Error");
    } else {
      res.send(result);
    }
  });
});
app.get("/memberinfo/:id", (req, res) => {
  const query = "SELECT * FROM members WHERE id = ?";
  db.query(query, [req.params.id], (err, result) => {
    if (err) {
      console.error("Error executing query: " + err.stack);
      res.status(500).send("Internal Server Error");
    } else {
      res.send(result);
    }
  });
});

app.get("/albumpic/:id", (req, res) => {
  const query = "SELECT cp_1,cp_2,cp_3,cp_4,cp_5,name,year FROM album WHERE id = ?";
  db.query(query, [req.params.id], (err, result) => {
    if (err) {
      console.error("Error executing query: " + err.stack);
      res.status(500).send("Internal Server Error");
    } else {
      res.send(result);
    }
  });
});


app.get("/runbts", (req, res) => {
  const query = "SELECT * FROM runbts";
  db.query(query, (err, result) => {
    if (err) {
      console.error("Error executing query: " + err.stack);
      res.status(500).send("Internal Server Error");
    } else {
      res.send({ runbts: result });
    }
  });
});
app.listen("5000", () => {
  console.log("Server started on port 5000");
});
