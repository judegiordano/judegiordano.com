import type { Metadata } from 'next'

export const RECAPTCHA_SITE_SECRET = process.env.RECAPTCHA_SITE_SECRET as string
// public
export const NEXT_PUBLIC_RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string

export const baseMetaData: Metadata = {
	metadataBase: new URL('https://judegiordano.com'),
	title: 'Jude Giordano',
	description: 'Jude Giordano Website',
	icons: '/favicon.ico',
	robots: {
		follow: true,
		index: true
	},
	openGraph: {
		description: 'Solution-driven professional excelling in developing products for web, desktop, and mobile app users. Meeting the highest standards for SEO, UX, and performance.',
		title: 'Jude Giordano Portfolio',
		siteName: 'Jude Giordano',
		url: 'https://judegiordano.com',
		images: {
			url: '/san-fran.webp',
			width: 512,
			height: 512
		},
		type: 'website'
	}
}
