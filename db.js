const mongoose = require('mongoose');

const mongoURL = "mongodb+srv://ishankhare30:aCL1EON5KOJwHprQ@cluster0.f8olp0a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURL);
        console.log("Connected to Mongo Successfully");
    } catch (error) {
        console.error("Error connecting to Mongo:", error.message);
    }
}

module.exports = connectToMongo;


// ishankhare30
// aCL1EON5KOJwHprQ