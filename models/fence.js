import mongoose from 'mongoose';

// create smoke Schema
const fenceSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
});


// create smoke model
const Fence = mongoose.model('Fence', fenceSchema);
export default Fence;