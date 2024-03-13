import { NextRequest, NextResponse } from "next/server";
import { isUserAuthenticated } from "./utils/utils";
export function middleware(request: NextRequest) {
  const token = request.cookies.get("token");
  const user = request.cookies.get("user");

  if (!!token && !!user) {
    return NextResponse.next();
  } else {
    return NextResponse.redirect(new URL("/auth/sign-in", request.url));
  }
}

export const config = {
  matcher: ["/main/:path*"],
};
