import { NextResponse } from 'next/server';
import { getContent, saveContent } from '@/lib/getContent';
import { cookies } from 'next/headers';

export async function GET() {
  const content = getContent();
  if (!content) {
    return NextResponse.json({ error: 'Failed to read content' }, { status: 500 });
  }
  return NextResponse.json(content);
}

export async function PUT(request: Request) {
  try {
    // Phase 3: API Hardening - Secondary Session Check
    const cookieStore = await cookies();
    const adminSession = cookieStore.get('admin_session')?.value;
    const isAuthenticated = adminSession === 'authenticated_yourskillyatra_admin';

    if (!isAuthenticated) {
      console.warn(`[SECURITY] Unauthorized PUT attempt to /api/content at ${new Date().toISOString()}`);
      return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    }

    const data = await request.json();
    
    // Basic validation: ensure data is an object and not empty
    if (!data || typeof data !== 'object' || Object.keys(data).length === 0) {
      return NextResponse.json({ success: false, error: 'Invalid or empty payload' }, { status: 400 });
    }

    const success = saveContent(data);
    
    if (success) {
      console.log(`[CONTENT] Site content updated successfully by admin at ${new Date().toISOString()}`);
      return NextResponse.json({ success: true, message: 'Content saved successfully.' });
    } else {
      return NextResponse.json({ success: false, error: 'Failed to write content to disk.' }, { status: 500 });
    }
  } catch (error) {
    console.error(`[ERROR] API Content PUT failure:`, error);
    return NextResponse.json({ success: false, error: 'Internal server error.' }, { status: 500 });
  }
}
