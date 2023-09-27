import React from 'react'
import Link from 'next/link'

export const Footer = () => {
	return (
		<footer className="p-5 text-white bg-black footer place-items-center">
			<div className="place-items-center">
				<div className="grid grid-flow-col gap-4">
					{/* github */}
					<Link href="https://github.com/judegiordano" target="_blank" aria-label="github">
						github
					</Link>
					{/* linkedin */}
					<Link href="https://www.linkedin.com/in/jude-giordano-868728107" target="_blank" aria-label="linkedin">
						linkedin
					</Link>
				</div>
				<span className="footer-title">Copyright © {new Date().getFullYear()}</span>
			</div>
		</footer>
	)
}
