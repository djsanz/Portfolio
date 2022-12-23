import React from 'react';
import Logo from "../images/logo.png";
import Image from "next/image";
import MenuLink from "./MenuLink";

export default function NavBar() {

	return (
		<div className="flex">
			<div className="flex">
				<Image src={Logo} alt="Logo" width="60" className="scale-75 md:scale-100"/>
			</div>
			<div className="flex items-center text-lg md:text-2xl px-2 text-amber-500 font-bold">
				DjSanz
			</div>
			<div className="flex px-4 md:px-12 lg:px-16"></div>
			<div className="flex flex-1 items-center justify-end space-x-5 pr-5">
				<MenuLink href="/" text="Sobre Mi"/>
				<MenuLink href="/" text="Proyectos"/>
			</div>
		</div>
	)
}