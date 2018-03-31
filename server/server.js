const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
app.set('port', process.env.PORT || 3000);


process.on('unhandledRejection', (reason, p) => {
    console.log('🚧 UnhandledPromiseRejectionWarning: Unhandled promise rejection', p, ' reason: ', reason);
});

app.listen(app.get('port'), () => {
    console.log('MedicalBot Running on port:', app.get('port'));
});

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

mongoose.connect(process.env.MONGO_URI, {
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 1000,
    autoReconnect: true
}, (error, db) => {
    console.log('Connected to Database!');
    if (error) {
        console.log('Mongo error', error);
    }
});

mongoose.Promise = global.Promise;

app.use(bodyParser.json({}));
app.use(bodyParser.urlencoded({
    extended: false
}));

require('./routes')(app);


app.listen(app.get('port'), () => {
    console.log('Jenna web interface on port:', app.get('port'));
});


module.exports = app;

