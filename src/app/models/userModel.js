import mongoose from 'mongoose';

const UserModel = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
    },
    city: String,
    address: String,
    contact: String
});

export const userSchema = mongoose.models.User || mongoose.model('User', UserModel);
