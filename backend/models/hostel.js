const mongoose = require("mongoose");

const hostelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        maxLength: 100
    },
    address: {
        type: String,
        required: true,
        trim: true,
        maxLength: 200
    },
    warden: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // Reference to Warden (User Model)
        default: null
    },
    total_rooms: {
        type: Number,
        required: true,
        min: 1
    },
    available_rooms: {
        type: Number,
        required: true,
        min: 0
    },
    facilities: {
        type: [String], // Example: ["WiFi", "Mess", "Laundry", "Gym"]
        default: []
    },

}, { timestamps: true });

module.exports = mongoose.model("Hostel", hostelSchema);