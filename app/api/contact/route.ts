import { RECAPTCHA_SITE_SECRET } from '@lib/config'
import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'edge'

type ContactFormData = {
	email: string | null
	message: string | null
	token: string | null
}

async function validateCaptcha(token: string) {
	const response = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SITE_SECRET}&response=${token}`, { method: 'POST' })
	const data = await response.json()
	return data
}

export async function POST(request: NextRequest) {
	const body = await request.json() as ContactFormData
	if (!body.email?.trim() || !body.message?.trim()) {
		return NextResponse.json({ error: 'missing email / message' }, { status: 500 })
	}
	if (!body.token) return NextResponse.json({ error: 'captcha failed' }, { status: 500 })
	const captcha = await validateCaptcha(body.token)
	if (!captcha.success) return NextResponse.json({ error: 'captcha failed' }, { status: 500 })
	// TODO: handle email
	return NextResponse.json({ ok: true }, { status: 200 })
}
