import { NextResponse } from 'next/server';

export function middleware(req){
  const session = req.cookies.get('session');
  if(!session && req.nextUrl.pathname!='/login'){
    return NextResponse.redirect(new URL('/login', req.url));
  }
  return NextResponse.next();
}
