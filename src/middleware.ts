import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // ⛔ skip middleware untuk file statis & Next.js internal
if (
  pathname.startsWith("/_next") ||  // file Next.js (chunks, js, css)
  pathname.startsWith("/api") ||    // API routes
  pathname.includes(".")            // semua file statis (svg, png, jpg, ico, dll)
) {
  return NextResponse.next();
}

const session = req.cookies.get("session")?.value;

if (!session && pathname.startsWith("/dashboard")) {
  return NextResponse.redirect(new URL("/login", req.url));
}

   // ✅ Kalau SUDAH login, tapi akses login → redirect ke /dashboard
if (session && pathname === "/login") {
  return NextResponse.redirect(new URL("/dashboard", req.url));
}
return NextResponse.next();
}

export const config = {
 matcher: ["/login", "/dashboard", "/dashboard/:path*"],
};
