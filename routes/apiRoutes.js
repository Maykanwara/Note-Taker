const router = require("express").Router();

const { readFromFile, readAndAppend }= require("../helpers/fsUtils")
const { v4: uuidv4 } = require('uuid');


router.get("/api/notes", function (req, res) {
readFromFile("./db/db.json")
.then(function(data) {
    console.log(JSON.parse(data))
  res.json(JSON.parse(data))
})
});

router.post("/api/notes", function (req, res) {
  console.log(req.body)
  let object = {
    id: uuidv4(), 
    ...req.body
  }
  readAndAppend(object, "./db/db.json")
  res.json(object)
});





module.exports = router;
