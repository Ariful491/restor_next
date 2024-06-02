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


export async function POST(request) {
    try {
        await dbConnect();
        const payload = await request.json();
        const user = new userSchema(payload);
        const savedUser = await user.save();
        return NextResponse.json({result: savedUser, success: true});
    } catch (error) {
        return NextResponse.json({error: error.message, success: false});
    }

}