const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/chores');

const db = mongoose.connection;

db.on('error', () => {
  console.log('mongoose connection error');
});

db.once('open', () => {
  console.log('mongoose connection established');
});

const choreScheme = mongoose.Schema({
  name: String,
  roommates: [
    {
      name: String,
      chores: [String],
    }
  ]
});

const Chore = mongoose.model('Chore', choreScheme);

const find = (room, callback) => {
  Chore.find({name: room})
  .then(doc => callback(null, doc))
}

const newRoom = (room) => {
  var obj = {
    name: room,
    roommates: [
      {
        name: 'Delete Me',
        chores: ['']
      }
    ]
  }
  var newChore = new Chore(obj)
  newChore.save()
}

const newRoomie = (doc) => {
  Chore.deleteOne({name: doc.name})
  .then(() => {
     var newChore =  new Chore(doc)
     newChore.save()
   })
}

const removeRoomie = (doc) => {
  for (var i = 0; i < doc.roommates.length; i++) {
    doc.roommates[i] = JSON.parse(doc.roommates[i])
  }
  Chore.deleteOne({name: doc.name})
  .then(() => {
     var newChore =  new Chore(doc)
     newChore.save()
   })
}

const addChore = (doc) => {
  Chore.deleteOne({name: doc.name})
  .then(() => {
     var newChore =  new Chore(doc)
     newChore.save()
   })
}

const removeChore = (doc) => {
  for (var i = 0; i < doc.roommates.length; i++) {
    doc.roommates[i] = JSON.parse(doc.roommates[i])
  }
  Chore.deleteOne({name: doc.name})
  .then(() => {
     var newChore =  new Chore(doc)
     newChore.save()
   })
}

module.exports.find = find
module.exports.newRoom = newRoom
module.exports.newRoomie = newRoomie
module.exports.removeRoomie = removeRoomie
module.exports.addChore = addChore
module.exports.removeChore = removeChore
