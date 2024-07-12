import {NextResponse} from "next/server";
import dbConnect from '../../lib/db';
import {userSchema} from "@/app/models/userModel";


export async function GET(request) {

    let queryParams = request.nextUrl.searchParams
    let searchText = queryParams.get('location');
    let restaurantText = queryParams.get('restaurant');
    await dbConnect();
    let filter = {}

    if (searchText) {
        filter = {
            city:
                {
                    $regex: new RegExp(searchText, 'i')
                }
        }
    } else if (restaurantText) {
        filter = {
            name: {
                $regex: new RegExp(restaurantText, 'i')
            }
        }
    }

    const users = await userSchema.find(filter);


    return NextResponse.json({result: users});

}
