
// import { NextResponse } from "next/server";

// export function middleware(request) {
//   const country = request.geo?.country || "US";

//   const response = NextResponse.next();

//   response.cookies.set("user-country", country, {
//     path: "/",
//   });

//   // return response;
//     return NextResponse.next();
  
// }



import { NextResponse } from "next/server";

export function middleware(request) {
  const response = NextResponse.next();

  response.cookies.set("user-country", "US", {
    path: "/",
    httpOnly: false,
  });

  return response;
}

export const config = {
  matcher: "/:path*",
};