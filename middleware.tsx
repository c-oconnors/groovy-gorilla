import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
//import type { NextRequest } from 'next/server';

export async function middleware(req) {
  //token will exist if user is logged in
  const token = await getToken({ req, secret: process.env.JWT_SECRET });

  const { pathname } = req.nextUrl;


  // Allow the requests if the following is true
  // 1) It's a request for the next-auth session & provider fetching
  // 2) the token exists
  if (pathname.includes("/api/auth") || token) {
    return NextResponse.next();
  }
  // Redirect them to login if they don't have a token AND are requesting a protected route
  if (!token && pathname !== "/login") {
    //console.log('redirecting to login');
    return NextResponse.rewrite(new URL('/login', req.url)) // redirect to login * YouTube
    //return NextResponse.redirect("/login"); // Sonny's code
  }
}

export { default } from 'next-auth/middleware';

export const config = { matcher: ["/","/mixtapes"] }; // securing specific pages *solution from https://next-auth.js.org/tutorials/securing-pages-and-api-routes
