// create add person route
import express from "express";
import Person from "../models/person.js";

const router = new express.Router();

// show person route
router.get("/person", async (req, res) => {
  try {
    const persons = await Person.find();
    res.status(200).json(persons);
  } catch (error) {
    res.status(400).json(error);
  }
});

// delete a person
router.delete("/person/:id", async (req, res) => {
  try {
    const person = await Person.findByIdAndDelete(req.params.id);
    if (!person) {
      res.status(404).json({
        message: "Person not found",
      });
    }
    res.status(200).json(person);
  } catch (error) {
    res.status(400).json(error);
  }
});

// add person route
router.post("/person", async (req, res) => {
  Person.init();
  const id = req.body.id;
  const name = req.body.name;
  const payload = { id, name };
  try {
    const person = new Person();
    person._id = id;
    person.name = name;
    await person.save();
    res.status(201).json(person);
  } catch (error) {
    res.status(400).send(error);
  }
});

export default router;
