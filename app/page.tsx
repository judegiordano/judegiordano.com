import React from 'react'

import backdrop from '../public/san-fran.webp'
import { baseMetaData } from '@lib/config'

export const metadata = {
	title: `${baseMetaData.title} | Home`
}

export default function Page() {
	return (
		<div className='h-screen bg-center bg-cover' style={{ backgroundImage: `url(${backdrop.src})` }}>
			<div className='text-center'>
				<div className="pt-8 pb-8">
					<h1 className="m-auto font-semibold mobile:text-[47px] tracking-widest text-white text-7xl">Jude</h1>
				</div>
				<div>
					<p className="text-[20px] italic text-black">i like to write code</p>
				</div>
			</div>
		</div>
	)
}
