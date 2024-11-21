const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://AlexE:wpUmqTGpcL2aWv9V@cluster0.ipj9m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
    autoSelectFamily: false // required for node version over v18
});

async function connectToDatabase() {
    console.log('Connecting to MongoDB...');
    try {
        await client.connect();
        console.log("Connected to MongoDB!");
        return client.db('Chromakopia');
    } catch (err) {
        console.error("Failed to connect to MongoDB", err);
    }
}

module.exports = connectToDatabase;

