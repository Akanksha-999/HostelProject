const express = require("express");
const Hostel = require("../models/hostel");
const hostelRouter = express.Router();

// 🔹 Create a Hostel
hostelRouter.post("/create", async (req, res) => {
    try {
        const { name, address, warden, total_rooms, available_rooms, facilities } = req.body;

        const hostelExists = await Hostel.findOne({ name });
        if (hostelExists) return res.status(400).json({ success: false, message: "Hostel already exists" });

        const newHostel = new Hostel({ name, address, warden, total_rooms, available_rooms, facilities });
        await newHostel.save();

        res.status(201).json({ success: true, message: "Hostel added successfully", hostel: newHostel });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// 🔹 Get All Hostels
hostelRouter.get("/", async (req, res) => {
    try {
        const hostels = await Hostel.find().populate("warden", "firstName lastName emailId");
        res.status(200).json(hostels);
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// 🔹 Get a Hostel by ID
hostelRouter.get("/:id", async (req, res) => {
    try {
        const hostel = await Hostel.findById(req.params.id).populate("warden", "firstName lastName emailId");
        if (!hostel) return res.status(404).json({ success: false, message: "Hostel not found" });

        res.status(200).json(hostel);
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// 🔹 Update Hostel Details
hostelRouter.put("/:id", async (req, res) => {
    try {
        const { name, address, warden, total_rooms, available_rooms, facilities } = req.body;
        const updatedHostel = await Hostel.findByIdAndUpdate(
            req.params.id,
            { name, address, warden, total_rooms, available_rooms, facilities, updated_at: Date.now() },
            { new: true }
        );

        if (!updatedHostel) return res.status(404).json({ success: false, message: "Hostel not found" });

        res.status(200).json({ success: true, message: "Hostel updated successfully", hostel: updatedHostel });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// 🔹 Delete a Hostel
hostelRouter.delete("/:id", async (req, res) => {
    try {
        const deletedHostel = await Hostel.findByIdAndDelete(req.params.id);
        if (!deletedHostel) return res.status(404).json({ success: false, message: "Hostel not found" });

        res.status(200).json({ success: true, message: "Hostel deleted successfully" });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});
module.exports = hostelRouter;