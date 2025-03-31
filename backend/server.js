require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const authRoutes = require("./routes/authRoutes");

const hostelRouter = require("./routes/hostelApis");
const roomRouter = require("./routes/roomApis");
app.use(express.json());
app.use(cors());
app.use("/api", authRoutes);
app.use("/api/hostels", hostelRouter);
app.use("/api/rooms", roomRouter);



app.use(express.json());
app.use(cors());

app.use("/api", authRoutes);

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("API is working!");
  });
  
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB Connected...");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error(err));


