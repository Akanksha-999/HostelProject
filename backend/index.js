const { MongoClient } = require('mongodb');

const uri = "mongodb://localhost:27017"; // Use Atlas URL if needed
const client = new MongoClient(uri);

app.get("/", (req, res) => {
    res.send("API is working!");
  });
  
async function connectDB() {
    try {
        await client.connect();
        console.log("Connected to MongoDB!");
        const db = client.db("hosteldb"); // Change to your database name
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
    }
}

connectDB();
