import type { NextRequest } from "next/server";


export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|services|contact|about|).*)',
  ],
}

export async function middleware(request: NextRequest) {
  console.log("Running Middleware...");
  }
