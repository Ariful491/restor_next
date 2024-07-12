import {NextResponse} from "next/server";
import dbConnect from '../../lib/db';
import {userSchema} from "@/app/models/userModel";


export async function GET(request) {

    let location =  request.nextUrl.searchParams.get('location')

    return NextResponse.json({result:location});
/*
  await dbConnect();
    try {
        const users = await userSchema.find({});

        let  result = users.map((item) => item.city && typeof item.city === 'string' ? item.city.charAt(0).toUpperCase()+item.city.slice(1).toLowerCase():null).filter(Boolean)

        result = [...new Set(result)];

        return NextResponse.json({result: result})
    } catch (error) {

        return NextResponse.json({result: error})
    }

 */
}
