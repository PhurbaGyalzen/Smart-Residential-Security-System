// create entry model
import mongoose from 'mongoose';


const entrySchema = new mongoose.Schema({
    person: {
        type: Number,
        ref: 'Person',
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
});


const Entry = mongoose.model('Entry', entrySchema);
export default Entry;
