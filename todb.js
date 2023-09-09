// or as an es module:
// import { MongoClient } from 'mongodb'

// require('dotenv').config();

const message = process.env.MESSAGE;

const todb = () => {
    console.log('running...')
    console.log('Message:', message);
};

todb();


module.exports = {
    todb
};