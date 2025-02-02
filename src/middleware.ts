import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Log the request path and timestamp
  console.log(
    `[Middleware] Request to ${
      request.nextUrl.pathname
    } at ${new Date().toISOString()}`
  );

  return NextResponse.next();
}

// Configure which paths the middleware will run on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next (internal Next.js routes)
     * - static (inside /public)
     * - favicon.ico, sitemap.xml, robots.txt (static files)
     */
    "/((?!_next/static|_next|static|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
