import express from "express";
import Fence from "../models/fence.js";

// create create fence 
const router = new express.Router();


// add fence route
router.post("/", async (req, res) => {
    try {
        const fence = new Fence();
        await fence.save();
        res.status(201).json(fence);
    } catch (error) {
        res.status(400).send(error);
    }
}
);

// get all fence
router.get("/", async (req, res) => {
    try {
        const fences = await Fence.find();
        res.status(200).json(fences);
    } catch (error) {
        res.status(400).send(error);
    }
}
);



export default router;
