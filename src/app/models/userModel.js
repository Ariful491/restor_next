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
    contact: String,
    restaurantName: String,
});

export const userSchema = mongoose.models.users || mongoose.model('users', UserModel);
