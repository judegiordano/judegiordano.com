import React from 'react'

import { Divider } from '@ui/Divider'
import { baseMetaData } from '@lib/config'
import { ContactForm } from '@ui/components/contact/ContactForm'

export const metadata = {
	title: `${baseMetaData.title} | Contact`
}

export default function Page() {
	return (
		<div className="max-w-[700px] m-auto px-5 mb-2">
			<h1 className="text-4xl mobile:text-[25px]">get in touch</h1>
			<Divider />
			<ContactForm />
		</div>
	)
}
