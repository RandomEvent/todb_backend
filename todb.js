// or as an es module:
// import { MongoClient } from 'mongodb'

require('dotenv').config();

const message = process.env.MESSAGE;

const todb = () => {
    console.log(message)
};

todb();


module.exports = {
    todb
};