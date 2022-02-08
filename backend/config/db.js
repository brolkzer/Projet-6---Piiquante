const mongoose = require('mongoose');

mongoose
    .connect('mongodb+srv://'+process.env.DB_LOGINS +'@hottakesdb.d6d7a.mongodb.net/htdb')
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log('Failed to connect to MongoDB : ' + err));

