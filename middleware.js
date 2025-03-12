import { NextResponse } from "next/server";

export function middleware(req) {
    if (req?.nextUrl?.pathname?.startsWith("/news")) {
        req.nextUrl.username = "John Doe";
    }
    return NextResponse.next();
}

export const config = {
    matcher: "/news/:path*",
};