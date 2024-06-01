const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb://127.0.0.1:27017/restor';

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connected successfully');
        mongoose.connection.close();
    })
    .catch(err => {
        console.error('MongoDB connection error:', err);
    });
