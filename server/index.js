const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database')

const app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json())

app.get('/find', (req, res) => {
  db.find(req.query.roomName, (err, response) => {
    if(err) {
      console.log(err)
    }
    res.send(response)
  })
})

app.put('/newRoomie', (req, res) => {
  db.newRoomie(req.body)
})

app.put('/newChore', (req, res) => {
  db.addChore(req.body)
})

app.post('/addRoom', (req, res) => {
  db.newRoom(req.body.name)
})

app.delete('/delete', (req, res) => {
  db.removeRoomie(req.query)
})

app.delete('/deleteChore', (req, res) => {
  db.removeChore(req.query)
})

app.listen(3000, () => {
  console.log('Listening on port 3000');
})
