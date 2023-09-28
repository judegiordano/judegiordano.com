import React from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

import { NEXT_PUBLIC_RECAPTCHA_SITE_KEY } from '@lib/config'

export function ReCaptcha({
	recaptchaRef
}: {
	recaptchaRef: React.LegacyRef<ReCAPTCHA>
}) {
	return (
		<ReCAPTCHA
			ref={recaptchaRef}
			size="invisible"
			sitekey={NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
		/>
	)
}
