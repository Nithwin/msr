
import { NextResponse } from 'next/server'

export function middleware(request) {
  const path = request.nextUrl.pathname
  const isPublicPath = path === '/admin'
  const token = request.cookies.get('admin_session')?.value

  if (path.startsWith('/admin') && !isPublicPath && !token) {
    return NextResponse.redirect(new URL('/admin', request.nextUrl))
  }

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL('/admin/dashboard', request.nextUrl))
  }
}

export const config = {
  matcher: [
    '/admin/:path*',
  ],
}
