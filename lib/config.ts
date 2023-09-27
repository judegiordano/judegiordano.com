import type { Metadata } from 'next'

export const baseMetaData: Metadata = {
	title: 'Jude Giordano',
	description: 'Jude Giordano Website',
	icons: '/favicon.ico',
	robots: {
		follow: true,
		index: true
	},
	openGraph: {
		description: 'Solution-driven professional excelling in developing products for web, desktop, and mobile app users. Meeting the highest standards for SEO, UX, and performance.',
		title: 'Jude Giordano',
		siteName: 'Jude Giordano',
		url: 'https://judegiordano-portfolio.vercel.app/',
		images: {
			url: '/san-fran.webp',
			width: 512,
			height: 512
		},
		type: 'website'
	}
}
