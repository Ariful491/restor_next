import {NextResponse} from "next/server";
import dbConnect from '../../lib/db';
import {userSchema} from "@/app/models/userModel";


export async function GET() {
    await dbConnect();
    try {
        const users = await userSchema.find({});
        return NextResponse.json({result: users})
    } catch (error) {

        return NextResponse.json({result: error})
    }
}


export async function POST(request) {
    try {
        await dbConnect();
        const payload = await request.json();
        if (payload.type) {
            const users = await userSchema.findOne({email: payload.email, password: payload.password}).exec();
            if (!users) {
                throw ("email & password doesn't match.");
            }
            return NextResponse.json({result: users, success: true});
        }

        const user = new userSchema(payload);
        const savedUser = await user.save();
        return NextResponse.json({result: savedUser, success: true});
    } catch (error) {
        let errorMessage = !error.message ? error : error.message;
        return NextResponse.json({error: errorMessage, success: false});
    }

}