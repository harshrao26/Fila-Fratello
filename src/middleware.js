import { NextResponse } from "next/server";
import { verifyToken } from "./lib/auth";

export async function middleware(request) {
  const path = request.nextUrl.pathname;

  // Define public routes
  const isPublicPath =
    path === "/login" ||
    path.startsWith("/_next") ||
    path === "/favicon.ico" ||
    path === "/";

  // Check for admin paths
  const isAdminPath = path.startsWith("/admin");
  const isProtectedApi =
    path.startsWith("/api/products") && request.method !== "GET";

  if (isAdminPath || isProtectedApi) {
    const token = request.cookies.get("admin_token")?.value;

    if (!token) {
      if (isAdminPath) {
        return NextResponse.redirect(new URL("/login", request.url));
      }
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 },
      );
    }

    const decoded = await verifyToken(token);
    if (!decoded) {
      if (isAdminPath) {
        return NextResponse.redirect(new URL("/login", request.url));
      }
      return NextResponse.json(
        { success: false, error: "Invalid token" },
        { status: 401 },
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/products/:path*"],
};
