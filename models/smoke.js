import mongoose from 'mongoose';

// create smoke Schema
const smokeSchema = new mongoose.Schema({
    threshold: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
});


// create smoke model
const Smoke = mongoose.model('Smoke', smokeSchema);
export default Smoke;