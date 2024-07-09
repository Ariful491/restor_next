import {NextResponse} from "next/server";

import {foodSchema} from "@/app/models/foodModel";
import dbConnect from "@/app/lib/db";

export async function GET(request, content) {

    const id = content.params.id;

    await dbConnect();
    const food = await foodSchema.findById(id);
    return NextResponse.json({result: food});

}

export async function DELETE(request, content) {
    const id = content.params.id;
    await dbConnect();
    const result = await foodSchema.deleteOne({'_id': id});
    return NextResponse.json({result: result});

}


export async function POST(request, content) {
    try {
        await dbConnect();
        const payload = await request.json();
        const id = content.params.id;
        const food = await foodSchema.findById(id);

        food.food_name = payload.foodName || food.food_name;
        food.food_price = payload.foodPrice || food.food_price;
        food.img_path = payload.foodPath || food.foodPath;
        food.description = payload.Description || food.description;

        const saveFood = await food.save();
        return NextResponse.json({result: saveFood, success: true});
    } catch (error) {
        let errorMessage = !error.message ? error : error.message;
        return NextResponse.json({error: errorMessage, success: false});
    }

}