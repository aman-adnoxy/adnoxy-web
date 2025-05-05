import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Remove trailing slashes
  if (request.nextUrl.pathname.endsWith('/') && request.nextUrl.pathname !== '/') {
    return NextResponse.redirect(
      new URL(request.nextUrl.pathname.slice(0, -1), request.nextUrl)
    );
  }

  // Ensure consistent domain (www or non-www)
  if (request.nextUrl.hostname === 'adnoxy.com') {
    return NextResponse.redirect(
      new URL(`https://www.adnoxy.com${request.nextUrl.pathname}`)
    );
  }

  return NextResponse.next();
}