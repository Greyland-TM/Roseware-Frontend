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
     * FYI because root cannot be excluded, middleware will always run when something hits "/" with a request
     */
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|roseware-logo-3.png|will.jpg|greyland.jpg|about|home|services|contact|auth/register).*)",
  ],
};

export async function middleware(request: NextRequest) {
  const token: RequestCookie | undefined = request.cookies.get("token");
  if (token) {
    console.log("token: ", token);
    const data = await validateUser(token.value);
    console.log(data);
    if (data.ok) {
      console.log("user validated");
      return NextResponse.next();
    }
  } else {
    return Response.json(
      { success: false, message: "authentication failed - No token found" },
      { status: 401 }
    );
  }
}
