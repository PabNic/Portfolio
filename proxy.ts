import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, hasLocale } from "./lib/i18n";

// English first: any path without a locale goes to English.
// Spanish is opt-in via the language switch (/es).
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const first = pathname.split("/")[1] ?? "";
  if (hasLocale(first)) return;

  request.nextUrl.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|.*\\..*).*)"],
};
