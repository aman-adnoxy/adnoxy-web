// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const isUnderMaintenance = true;

export function middleware(request: NextRequest) {
  if (isUnderMaintenance && !request.nextUrl.pathname.startsWith('/unreachable')) {
    const url = request.nextUrl.clone();
    url.pathname = '/unreachable';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
