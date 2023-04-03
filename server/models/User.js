import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true, min: 2, max: 100 },
    email: { type: String, required: true, unique: true, max: 50 },
    password: { type: String, required: true, min: 4 },
    city: String,
    state: String,
    country: String,
    occupation: String,
    phoneNumber: String,
    transactions: Array,
    role: {
        type: String,
        enum: ['user', 'admin', 'superadmin'],
        default: 'admin'
    }
}, { timestamps: true });


export default mongoose.model('user', userSchema);