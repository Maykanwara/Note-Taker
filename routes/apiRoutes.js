const router = require("express").Router();

const { readFromFile, readAndAppend }= require("../helpers/fsUtils")
const path = require("path");
const { parse } = require("path");

router.get("/api/notes", function (req, res) {
readFromFile("./db/db.json")
.then(function(data) {
    console.log(JSON.parse(data))
  res.json(JSON.parse(data))
})
});

router.post("/api/notes", function (req, res) {
  console.log(req.body)
  readAndAppend(req.body, "./db/db.json")
  res.json(req.body)
});

module.exports = router;
