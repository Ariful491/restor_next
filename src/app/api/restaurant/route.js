import {NextResponse} from "next/server";
import dbConnect from '../../lib/db';
import {userSchema} from "@/app/models/userModel";


export async function GET() {
    await dbConnect();
    try {
        const users = await userSchema.find({});
        console.log(users);
        return NextResponse.json({result: users})
    } catch (error) {

        return NextResponse.json({result: error})
    }

}