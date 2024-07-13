import {NextResponse} from "next/server";
import dbConnect from '../../../lib/db';
import {foodSchema} from "@/app/models/foodModel";


export async function GET(request, content) {
    let queryParams = content.params;
    let userId = queryParams.id;
    await dbConnect();
    const users = await foodSchema.find({'user_id':userId});

    return NextResponse.json({result: users});

}
