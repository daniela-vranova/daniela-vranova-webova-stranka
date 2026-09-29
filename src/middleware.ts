import { NextRequest, NextResponse } from "next/server";

const CS_HOST = "soudni-anglictina.cz";
const EN_HOST = "czech-translator.eu";

export function middleware(req: NextRequest) {
  const host = (req.headers.get("x-forwarded-host") ?? req.headers.get("host") ?? "")
    .split(":")[0]
    .replace(/^www\./, "");
  const { pathname, search } = req.nextUrl;
  const isEn = pathname === "/en" || pathname.startsWith("/en/");

  // /en na české doméně nebo na anglické doméně: 301 na čistou adresu anglické domény
  if (isEn && (host === CS_HOST || host === EN_HOST)) {
    const rest = pathname.replace(/^\/en/, "") || "/";
    return NextResponse.redirect(`https://${EN_HOST}${rest}${search}`, 301);
  }

  // kořen anglické domény zobrazí anglickou verzi bez změny URL
  if (host === EN_HOST && pathname === "/") {
    return NextResponse.rewrite(new URL("/en", req.url));
  }

  // podstránky na anglické doméně (např. privacy policy, terms)
  if (host === EN_HOST && (pathname === "/privacy-policy" || pathname === "/terms-and-conditions")) {
    return NextResponse.rewrite(new URL(`/en${pathname}`, req.url));
  }

  return NextResponse.next();
}

export const proxy = middleware;

export const config = {
  matcher: [
    "/",
    "/en",
    "/en/:path*",
    "/privacy-policy",
    "/terms-and-conditions",
  ],
};
