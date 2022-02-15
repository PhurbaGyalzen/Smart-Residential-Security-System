import express from "express";
import Smoke from "../models/smoke.js";

// create create smoke 
const router = new express.Router();


// add smoke route
router.post("/", async (req, res) => {
    const threshold = req.body.threshold;
    const payload = {threshold};
    try {
        const smoke = new Smoke();
        smoke.threshold = threshold;
        await smoke.save();
        res.status(201).json(smoke);
    } catch (error) {
        res.status(400).send(error);
    }
}
);

// get all smoke
router.get("/", async (req, res) => {
    try {
        const smokes = await Smoke.find();
        res.status(200).json(smokes);
    } catch (error) {
        res.status(400).send(error);
    }
}
);



export default router;
