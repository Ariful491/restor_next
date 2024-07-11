import {NextResponse} from "next/server";
import dbConnect from '../../../lib/db';
import {userSchema} from "@/app/models/userModel";
import {foodSchema} from "@/app/models/foodModel";


export async function GET() {
    await dbConnect();
    try {
        const users = await userSchema.find({});

        const result = users.map((item) => item?.city)

        return NextResponse.json({result: result})
    } catch (error) {

        return NextResponse.json({result: error})
    }
}
