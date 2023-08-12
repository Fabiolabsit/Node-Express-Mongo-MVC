require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.DB_URI;
let database_name = null;

async function connectToDatabase() {
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });
  
  try {
    await client.connect(); // Connect to the MongoDB cluster
    database_name = client.db("lingifyDB"); // Database Name
    console.log("Connected to MongoDB!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
}

function getdatabaseName() {
  return database_name;
}

module.exports = { connectToDatabase , getdatabaseName};