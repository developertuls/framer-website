
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const country =
    (req as any).geo?.country || "US"; // 👈 TS fix

  const res = NextResponse.next();
  res.cookies.set("country", country);

  return res;
}
