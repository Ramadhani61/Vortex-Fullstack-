import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const session = req.cookies.get("session")?.value;
  console.log("Middleware session:", session);
  

  // kalau belum login, redirect ke /login
  if (!session && req.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

// jalankan middleware di dashboard
export const config = {
  matcher: ["/dashboard"],
};
