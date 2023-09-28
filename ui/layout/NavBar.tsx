import React from 'react'
import Link from 'next/link'

export const NavBar = async () => {
	return (
		<div className='pb-5 text-center pt-7 bg-none'>
			<Link className='px-3 font-normal btn btn-ghost' href="/">home</Link>
			<Link className='px-3 font-normal btn btn-ghost' href="/about">about</Link>
			<Link className='px-3 font-normal btn btn-ghost' href="/contact">contact</Link>
		</div>
	)
}
