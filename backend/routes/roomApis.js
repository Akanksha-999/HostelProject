const express = require("express");
const mongoose = require("mongoose");
const Room = require("../models/room");

const roomRouter = express.Router();

// 🔹 Create a new Room
roomRouter.post("/create", async (req, res) => {
    try {
        const { hostel_id, room_number, capacity } = req.body;

        if (!mongoose.Types.ObjectId.isValid(hostel_id)) {
            return res.status(400).json({ success: false, message: "Invalid hostel_id" });
        }

        const newRoom = new Room({
            hostel_id: new mongoose.Types.ObjectId(hostel_id),
            room_number,
            capacity
        });

        await newRoom.save();
        res.status(201).json({ success: true, message: "Room created successfully", room: newRoom });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// 🔹 Get All Rooms
roomRouter.get("/", async (req, res) => {
    try {
        const rooms = await Room.find()
            .populate({
                path: "hostel_id",
                model: "Hostel",
                select: "name location"
            })
            .populate({
                path: "occupants",
                model: "User",
                select: "firstName lastName emailId"
            });

        res.status(200).json({ success: true, data: rooms });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// 🔹 Get a Room by ID
roomRouter.get("/:id", async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ success: false, message: "Invalid room ID" });
        }

        const room = await Room.findById(req.params.id)
            .populate("hostel_id occupants", "name email");

        if (!room) return res.status(404).json({ success: false, message: "Room not found" });

        res.status(200).json({ success: true, data: room });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

module.exports = roomRouter;
