import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { KEY_USER_TOKEN } from './environment'

export function middleware(request: NextRequest) {
  if(!request.cookies.has(KEY_USER_TOKEN)){
    return NextResponse.redirect(new URL('/', request.url))
  }
}
export const config = {
  matcher: [
    '/admin/shopping/movie',
    '/admin/shopping/rooms',
    '/admin/shopping',
    '/admin/general',
    '/admin/multiplex',
  ],
}