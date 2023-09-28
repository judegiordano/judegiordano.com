import React from 'react'

import { Divider } from '@ui/Divider'
import { baseMetaData } from '@lib/config'
import { SendSvg } from '@ui/svg/send'

export const metadata = {
	title: `${baseMetaData.title} | About`
}

export default function Page() {
	return (
		<div className="max-w-[700px] m-auto px-5 mb-2">
			<h1 className="text-4xl mobile:text-[25px]">get in touch</h1>
			<Divider />
			<input type="email" placeholder="your email..." className="w-full  max-w-[650px] mb-2 input input-bordered" />
			<textarea maxLength={1_200} placeholder="your message..." className="w-full max-w-[650px] textarea textarea-bordered textarea-lg max-h-[700px]" />
			<button className="float-right pl-10 pr-10 mb-2 btn btn-success" disabled>
				Send
				<SendSvg />
			</button>
		</div>
	)
}
