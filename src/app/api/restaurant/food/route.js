import {NextResponse} from "next/server";

import {foodSchema} from "@/app/models/foodModel";
import dbConnect from "@/app/lib/db";

export async function GET() {
    await dbConnect();
    try {
        const foods = await foodSchema.find({});
        return NextResponse.json({result: foods})
    } catch (error) {
        return NextResponse.json({result: error})
    }
}


export async function POST(request) {
    try {
        await dbConnect();
        const payload = await request.json();
        console.log(payload)
        const food = new foodSchema(payload);
        const saveFood = await food.save();
        return NextResponse.json({result: saveFood, success: true});
    } catch (error) {
        let errorMessage = !error.message ? error : error.message;
        return NextResponse.json({error: errorMessage, success: false});
    }

}