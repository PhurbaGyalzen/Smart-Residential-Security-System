import mongoose from 'mongoose';

const connectDB = async (DATABASE_URL)=>{
    try {
        const connectionParams=
            { useNewUrlParser: true, useUnifiedTopology: true }
        
        await mongoose.connect(DATABASE_URL, connectionParams);
        console.log('Database connection established successfully...');

    } catch (error) {
        console.log(error);
    }
}

export default connectDB
