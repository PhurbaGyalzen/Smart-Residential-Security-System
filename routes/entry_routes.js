// create add person route
import express from "express";
import Entry from "../models/entry.js";

const router = new express.Router();

// add person route
router.post("/", async (req, res) => {
  const id = req.body.id;
  console.log(id);
  try {
    const entry = new Entry();
    entry.person = id;
    await entry.save();
    res.status(201).json(entry);
  } catch (error) {
    res.status(400).send(error);
  }
});

// get all entry
router.get("/", async (req, res) => {
  try {
    const entries = await Entry.find().populate("person");
    res.status(200).json(entries);
  } catch (error) {
    res.status(400).send(error);
  }
});

export default router;
