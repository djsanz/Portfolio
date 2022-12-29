import React from 'react';
import Image from "next/image";
import Avatar from '../images/avatar.jpg';
import LinkedinLogo from '../images/Linkedin.ico'
import MailLogo from '../images/mail.ico'
import DiscordLogo from '../images/Discord.svg'
import GithubLogo from '../images/github.svg'

export default function Portada() {
	return (
		<div className="flex m-0 xs:mt-10 flex-col xs:flex-row">
			<div className="justify-center self-center">
				<img src={Avatar.src} alt="Logo" className="rounded-xl pt-2 xs:pt-0 xs:min-w-[200px] sm:min-w-[250px] md:min-w-[300px] h-48 xs:h-fit"/>
			</div>
			<div className="px-1 xs:px-10 mt-4 xs:mt-4">
				<div className="pb-3 text-start font-Dancing text-5xl md:text-7xl xl:text-8xl text-amber-500">
					Javier Sanz
				</div>
				<div className="flex text-start px-10 font-extralight text-xs md:text-base opacity-60 space-x-5">
					<div>SOPORTE USUARIO</div>
					<div>ADMINISTRADOR DE SISTEMAS</div>
					<div>DEVELOPER</div>
				</div>
				<div className="flex px-1 pt-4 text-xs md:text-base opacity-80">
					Despues de 15 años trabajando en soporte técnico, administración de sistemas y automatización de procesos,
					estoy decidido a cambiar de rumbo y dedicarme a lo que realmente me apasiona, el desarrollo.
				</div>
				<div className="text-center xs:text-left pt-2 px-10 space-x-2 md:px-12 items-end align-middle mt-4">
					<a href='https://www.linkedin.com/in/djsanz' target="_blank" rel="noreferrer">
						<Image alt="LinkedinLogo" height="22" className="inline mr-1 hover:scale-125" src={LinkedinLogo}/>
					</a>
            		<a href='https://github.com/djsanz' target="_blank" rel="noreferrer">
						<Image alt="GithubLogo" height="22" className="inline mr-1 hover:scale-125" src={GithubLogo}/>
					</a>
            		<a href='https://discordapp.com/users/501347496023556116' target="_blank" rel="noreferrer">
						<Image alt="DiscordLogo" height="24" className="inline mr-1 hover:scale-125" src={DiscordLogo}/>
					</a>
            		<a href='mailto:DjSanz@gmail.com' target="_blank" rel="noreferrer">
						<Image alt="MailLogo" height="30" className="inline mr-1 hover:scale-125" src={MailLogo}/>
					</a>
				</div>
			</div>
		</div>
	)
}