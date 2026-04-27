import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const adminSession = request.cookies.get('admin_session')?.value;
  const isAuthenticated = adminSession === 'authenticated_yourskillyatra_admin';

  const pathname = request.nextUrl.pathname;

  // Protect /api/content endpoints from unauthorized access
  if (pathname.startsWith('/api/content')) {
    if (!isAuthenticated) {
      return NextResponse.json({ success: false, error: 'Unauthorized access' }, { status: 401 });
    }
  }

  // Protect /admin routes (except /admin/login)
  if (pathname.startsWith('/admin')) {
    if (pathname !== '/admin/login' && !isAuthenticated) {
      const loginUrl = new URL('/admin/login', request.url);
      return NextResponse.redirect(loginUrl);
    }
    
    // If logged in and trying to access /admin/login, redirect to /admin
    if (pathname === '/admin/login' && isAuthenticated) {
      const adminUrl = new URL('/admin', request.url);
      return NextResponse.redirect(adminUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/admin', '/api/content/:path*', '/api/content'],
};
