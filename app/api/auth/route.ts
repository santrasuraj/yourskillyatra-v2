import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();
    
    // Phase 3: API Hardening - Use Environment Variables for high security
    const correctUsername = process.env.ADMIN_USERNAME || 'admin';
    const correctPassword = process.env.ADMIN_PASSWORD || 'yourskillyatra2026';

    if (username === correctUsername && password === correctPassword) {
      console.log(`[AUTH] Admin login successful at ${new Date().toISOString()}`);
      const response = NextResponse.json({ success: true });
      
      // Production-grade secure cookie layout
      response.cookies.set('admin_session', 'authenticated_yourskillyatra_admin', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax', // Lax is better for same-site redirects
        maxAge: 60 * 60 * 24 * 7, // 1 week
        path: '/',
      });
      
      return response;
    } else {
      console.warn(`[AUTH] Failed login attempt for username: ${username} at ${new Date().toISOString()}`);
      return NextResponse.json({ success: false, error: 'Incorrect username or password' }, { status: 401 });
    }
  } catch (error) {
    console.error(`[AUTH] Auth API failure:`, error);
    return NextResponse.json({ success: false, error: 'Invalid login request' }, { status: 400 });
  }
}

export async function DELETE() {
  const response = NextResponse.json({ success: true });
  response.cookies.delete('admin_session');
  console.log(`[AUTH] Admin logged out at ${new Date().toISOString()}`);
  return response;
}
