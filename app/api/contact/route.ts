import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'edge'

type ContactFormData = {
	email: string | null
	message: string | null
	captchaToken: string | null
}

export async function POST(request: NextRequest) {
	const body = await request.json() as ContactFormData
	if (!body.email?.trim() || !body.message?.trim()) {
		return NextResponse.json({ error: 'missing email / message' }, { status: 500 })
	}
	return NextResponse.json({ ok: true }, { status: 200 })
}
