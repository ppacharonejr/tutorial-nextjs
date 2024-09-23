import { NextResponse } from "next/server"

export function middleware(request){

    return NextResponse.redirect(new URL('/', request.url));



    /*return Response.json({
        msg: 'hello there',
    })*/
}

export const config = {
    matcher: ['/about/:path*']
}