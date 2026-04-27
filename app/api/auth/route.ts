import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();
    const correctUsername = process.env.ADMIN_USERNAME || 'admin';
    const correctPassword = process.env.ADMIN_PASSWORD || 'yourskillyatra2026';

    if (username === correctUsername && password === correctPassword) {
      const response = NextResponse.json({ success: true });
      
      // Basic secure cookie auth layout for simplicity
      response.cookies.set('admin_session', 'authenticated_yourskillyatra_admin', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24 * 7, // 1 week
        path: '/',
      });
      
      return response;
    } else {
      return NextResponse.json({ success: false, error: 'Incorrect username or password' }, { status: 401 });
    }
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Invalid payload' }, { status: 400 });
  }
}

export async function DELETE() {
  const response = NextResponse.json({ success: true });
  response.cookies.delete('admin_session');
  return response;
}
