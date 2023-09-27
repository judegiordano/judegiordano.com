import React from 'react'
import { Poppins } from 'next/font/google'
import '@styles/globals.css'

import { NavBar } from '@ui/layout/NavBar'
import { Footer } from '@ui/layout/Footer'
import { baseMetaData } from '@lib/config'

export const metadata = baseMetaData

const poppins = Poppins({
	weight: ['400', '700'],
	subsets: ['latin']
})

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" data-theme="garden">
			<body className={poppins.className}>
				<div className='w-full h-screen'>
					{/* @ts-expect-error Server Component */}
					<NavBar />
					<div className='text-center'>
						{children}
					</div>
				</div>
				<Footer />
			</body>
		</html>
	)
}
