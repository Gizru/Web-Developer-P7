const express = require('express');
const app = express();
const multer = require("multer");
const mongoose = require('mongoose');
const forumRoutes = require('./routes/forum');
const memesRoutes = require('./routes/memes');
const userRoutes = require('./routes/user');
const path = require('path');

app.use(express.json());

mongoose.connect('mongodb+srv://Project6:GrWhCr3HERrmDVis@cluster0.lnn2e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    .then(() => {
        console.log('Successfully connected to MongoDB Atlas!');
    })
    .catch((error) => {
        console.log('Unable to connect to MongoDB Atlas!');
        console.error(error);
    });

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.header('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use('/images', express.static(__dirname + '/images'));
app.use('/api/forum', forumRoutes);
app.use('/api/auth', userRoutes);
app.use('/api/memes', memesRoutes);

module.exports = app;