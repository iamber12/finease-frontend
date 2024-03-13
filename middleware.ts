import { NextRequest, NextResponse } from "next/server";
import { isUserAuthenticated } from "./utils/utils";
export function middleware(request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: [],
};
