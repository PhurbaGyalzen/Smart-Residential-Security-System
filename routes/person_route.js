// create add person route
import express from "express";
import Person from "../models/person.js";

const router = new express.Router();

// add person route
router.post("/person/create", async (req, res) => {
  Person.init();
  const id = req.body.id;
  const name = req.body.name;
  const payload = { id, name };
  try {
    const person = new Person();
    person._id = id;
    person.name = name;
    await person.save();
    res.status(201).send(person);
  } catch (error) {
    res.status(400).send(error);
  }
});

export default router;
