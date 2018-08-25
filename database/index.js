const mongoose = require('mongoose');

mongoose.connect('mongod://localhost/chores');

const db = mongoose.connection();

db.on('error', () => {
  console.log('mongoose connection error');
});

db.once('open', () => {
  console.log('mongoose connection established');
});

const choreScheme = mongoose.Schema({

});

const Chore = mongoose.model('Chore', choreSchema);
