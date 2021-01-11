const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "123",
  database: "test",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  const sqlInsert =
    "Insert into movie_reviews(movieName, movieReview) values ('inception', 'good movie')";
  db.query(sqlInsert, (err, ret) => {
    res.send("hello pedro");
  });
  //   res.send("hell o w orld");
});

app.get("/api/get", (req, res) => {
  const sqlSelect = "select * from movie_reviews";
  db.query(sqlSelect, (err, ret) => {
    res.send(ret);
  });
});

app.post("/api/insert", (req, res) => {
  const movieName = req.body.movieName;
  const movieReview = req.body.movieReview;
  const sqlInsert =
    "insert into movie_reviews(movieName, movieReview) values (?, ?)";
  db.query(sqlInsert, [movieName, movieReview], (err, ret) => {
    console.log(ret);
  });
});

app.listen(3001, () => {
  console.log("running on port 3001");
});
