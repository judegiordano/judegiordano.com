'use client'
import { SendSvg } from '@ui/svg/send'
import React, { useRef, useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { ReCaptcha } from './Captcha'

export function ContactForm() {
	const recaptchaRef = useRef<ReCAPTCHA>()
	const [email, setEmail] = useState<string | null>()
	const [message, setMessage] = useState<string | null>()
	async function submit() {
		const token = await recaptchaRef.current?.executeAsync() as string
		recaptchaRef.current?.reset()
		const response = await fetch('/api/contact', {
			method: 'POST',
			body: JSON.stringify({ email, message, token }),
			headers: { 'content-type': 'application/json' }
		})
		const json = await response.json()
		console.log({ json })
		setEmail(null)
		setMessage(null)
	}
	return (
		<>
			<input
				maxLength={50}
				type="email"
				onChange={(e) => setEmail(e.target.value)}
				placeholder="your email..."
				value={email ?? ''}
				className="w-full max-w-[650px] mb-5 input input-bordered"
			/>
			<textarea
				maxLength={1_200}
				onChange={(e) => setMessage(e.target.value)}
				placeholder="your message..."
				value={message ?? ''}
				className="w-full max-w-[650px] textarea textarea-bordered mb-5 textarea-lg max-h-[700px]"
			/>
			<button className="float-right pl-10 pr-10 mb-2 btn btn-success" onClick={submit}>
				Send
				<SendSvg />
			</button>
			<ReCaptcha recaptchaRef={recaptchaRef as React.LegacyRef<ReCAPTCHA>} />
		</>
	)
}
