// create person model
import mongoose from "mongoose";

const personSchema = new mongoose.Schema({
  _id: Number,
  name: {
    type: String,
    required: true,
  },
});

const Person = mongoose.model("Person", personSchema);
export default Person;
