
import { NextResponse } from "next/server";

export function middleware(request) {
  const country = request.geo?.country || "US";

  const response = NextResponse.next();

  response.cookies.set("user-country", country, {
    path: "/",
  });

  return response;
}
