import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;

  const sessionToken = req.cookies.get('next-auth-session-token');

  if ((!sessionToken || !sessionToken.value) && path !== '/register') {
    return NextResponse.redirect(new URL('/register', req.url));
  }
}
