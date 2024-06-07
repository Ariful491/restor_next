import mongoose from 'mongoose';

const FoodModel = new mongoose.Schema({
    food_name: {
        type: String,
        required: true,
    },
    food_price: {
        type: String,
        required: true,
    },
    img_path: {
        type: String,
    },
    description: String,
    user_id: {
        type: mongoose.Schema.Types.ObjectId
    }
});

export const foodSchema = mongoose.models.Food || mongoose.model('Food', FoodModel);
