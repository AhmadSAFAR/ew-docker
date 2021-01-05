const express = require ('express');
const mongoose = require ('mongoose');
process.on('SIGINT', () => {
    console.log('Caught interrupt signal');
    process.exit();
});

process.on('SIGTERM', () => {
    console.log('Caught interrupt signal');
    process.exit();
});

const init = async () => {
    const app = express();

    console.log('Connecting to mongoDB');
    await mongoose.connect('mongodb://mongodb:27017/testdocker', {useNewUrlParser:true, useUnifiedTopology: true });
    console.log('Connected to mongodb');

    app.get('/', (req, res)=> {
        res.json({message: 'I\'m toto the API'});
    });

    app.listen(3000, ()=> {
        console.log('App running');
    });
};


init();

