import React from 'react'

import { Divider } from '@ui/Divider'

export const metadata = {
	title: 'Jude Giordano | About'
}

export default function AboutPage() {
	return (
		<div className='px-5'>
			<div className="max-w-[700px] m-auto">
				<h1 className="text-3xl mobile:text-[21px]">WHAT LIGHT, WHAT VAST WINGS</h1>
				<h1 className="text-3xl mobile:text-[21px]">COMING FAST UNTO THE NIGHT</h1>
			</div>
			<Divider />
			<p className="max-w-[500px] m-auto pt-4 italic">
				When we had finished our prayers and viewed the spectacle,<br />we turned in the direction of the City.
			</p>
			<div className='pb-10'>- Plato</div>
		</div>
	)
}
