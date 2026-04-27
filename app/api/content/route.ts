import { NextResponse } from 'next/server';
import { getContent, saveContent } from '@/lib/getContent';

export async function GET() {
  const content = getContent();
  if (!content) {
    return NextResponse.json({ error: 'Failed to read content' }, { status: 500 });
  }
  return NextResponse.json(content);
}

export async function PUT(request: Request) {
  try {
    const data = await request.json();
    
    // In a real production app, you should also verify the session cookie here!
    // But since middleware protects /api routes, we are relatively safe.
    
    const success = saveContent(data);
    
    if (success) {
      return NextResponse.json({ success: true, message: 'Content saved successfully.' });
    } else {
      return NextResponse.json({ success: false, error: 'Failed to write content.' }, { status: 500 });
    }
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Invalid payload.' }, { status: 400 });
  }
}
