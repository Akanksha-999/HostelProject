const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
    hostel_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hostel",
        required: true
    },
    room_number: {
        type: String,
        required: true,
        unique: true
    },
    capacity: {
        type: Number,
        required: true,
        min: 1
    },
    occupants: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    status: {
        type: String,
        enum: ["available", "occupied"],
        default: "available"
    }
}, { timestamps: true });

module.exports = mongoose.model("Room", roomSchema);