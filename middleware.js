import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'

export async function middleware(request) {
  const pathname = request.nextUrl.pathname
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET
  })
  console.log(token)

  if (pathname === '/admin') {
    return NextResponse.redirect(new URL('/admin/dashboard', request.url))
  }

  if (pathname.startsWith('/admin/dashboard')) {
    if (token) {
      if (token.role !== "admin") {
        return NextResponse.redirect(new URL('/', request.url))
      }
    }
    if (!token) {
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }
  }
  if (pathname.startsWith('/admin/login')) {
    if (token) {
      return NextResponse.redirect(new URL('/admin/dashboard', request.url))
    }
  }

}

export const config = {
  matcher: ['/admin/:path*'],
}

