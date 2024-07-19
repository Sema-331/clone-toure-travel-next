import { NextResponse } from "next/server"

export default function middleware(req: Request) {
    let verify = req.cookies.get('loggedin')
    let success = req.cookies.get('success_pay')
    let url = req.url

    if(!verify && url.includes('/Account')) {
        return NextResponse.redirect('http://localhost:3000/Account')
    }
    if(!verify && url.includes('/Favourites')) {
        return NextResponse.redirect('http://localhost:3000/Favourites')
    }
    if(verify && url.includes('/Login' || '/SignUp')) {
        return NextResponse.redirect('http://localhost:3000/')
    }
    if(!verify && url.includes('/Reviews')) {
        return NextResponse.redirect('http://localhost:3000/Login')
    }
    // if(!success && url.includes('/booking_room_hotel')) {
    //     return NextResponse.redirect('http://localhost:3000/')
    // }
}