import { NextResponse, type NextRequest } from "next/server";
import { validateUser } from "./app/auth/utils";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - robots.txt
     * - will.jpg
     * - greyland.jpg
     * - roseware-logo-3.png
     * - register route
     */
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|roseware-logo-3.png|will.jpg|greyland.jpg|about|home|services|contact|auth/register).*)",
  ],
};

export async function middleware(request: NextRequest) {
  const base_dir = "http://localhost:3000/";
  const homeURL = `${base_dir}home`;
  if (request.url === base_dir) {
    return NextResponse.redirect(homeURL);
  }
  const token: RequestCookie | undefined = request.cookies.get("token");
  if (token) {
    const res = await validateUser(token.value);
    if (res.ok) {
      return NextResponse.next();
    }
  } else {
    return NextResponse.redirect(homeURL);
  }
}
