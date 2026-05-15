import { NextResponse } from 'next/server'

export async function POST() {
  return NextResponse.json({ message: 'Request form coming in Phase 4' }, { status: 200 })
}
