import React from 'react';
import Link from 'next/link';

export default function MenuLink(props) {
	const { href, text } = props;

	return (
		<div>
			<Link className="transition ease-in duration-200 text-base md:text-lg lg:text-xl text-amber-700 border-red-600 hover:border-b-2 hover:text-amber-500 hover:font-bold" href={href}>{text}</Link>
		</div>
	)
}