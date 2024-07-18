const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost/VideoJuegos';

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (error) => {
    console.error('Valio chetos, no se pudo', error);
});

db.once('open', () => {
    console.log('Se pudo alv');
});

module.exports = VideoJuegos;
