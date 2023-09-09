const { places } = require('./settings');
const { CallApi } = require('./call');
const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

const mongo_key = process.env.MONGOKEY;

// Connection URL
const uri = `mongodb+srv://ml-challenge:${mongo_key}@gitmongo.zq8aar6.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri);


// Database Name
const dbName = 'timeseries';
// const doc = places.london;

async function update_weather(loc = places.london) {
    // Use connect method to connect to the server
    console.log('Connecting...');
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('weather');
    // call API to fetch weather
    const res = await CallApi(loc);
    console.log(res.result);
    await collection.insertMany(res.result);
    console.log('Inserted');
    return 'done.';
};

if (require.main === module) {
    update_weather(places.london)
        .then(console.log)
        .catch(console.error)
        .finally(() => client.close());
};

module.exports = {
    update_weather
};