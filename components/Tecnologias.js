import React from 'react';
import Image from "next/image";

import windowsLogo from "../images/iconos/windows.png"
import AdLogo from "../images/iconos/AD.png"
import SqlServerLogo from "../images/iconos/SqlServer.png"
import VeeamLogo from "../images/iconos/Veeam.png"
import vmWareLogo from "../images/iconos/vmWare.png"

import AutoItLogo from "../images/iconos/AutoIt.png"
import PythonLogo from "../images/iconos/Python.png"
import FlaskLogo from "../images/iconos/FlaskLogo.png"
import GoLogo from "../images/iconos/Go.png"
import NodeJsLogo from "../images/iconos/NodeJsLogo.png"
import FastifyLogo from "../images/iconos/Fastify.png"
import ReactLogo from "../images/iconos/ReactLogo.png"
import NextLogo from "../images/iconos/Next.png"
import VercelLogo from "../images/iconos/Vercel.png"
import MongoDBLogo from "../images/iconos/MongoDB.webp"
import SolidityLogo from "../images/iconos/Solidity.jpg"



export default function Tecnologias() {
	return (
		<div className="flex flex-col mt-8 px-14">
			<div className="mb-4 font-Dancing text-amber-500 text-4xl text-left">
				Conocimientos:
			</div>
			<div className="flex flex-row space-x-5">
				<div className="flex-1 rounded-md">
					<div className="font-extralight text-xs md:text-base opacity-90">
						ADMINISTRADOR DE SISTEMAS
					</div>
					<div className="flex justify-center mt-1 mb-2"><div className="border w-[50%] border-gray-500"></div></div>
					<div className="flex flex-wrap justify-center space-x-2 md:space-x-3 lg:space-x-6 -space-y-2 md:space-y-3 lg:space-y-6 p-0 md:p-2">
						<Image alt="windowsLogo" height="120" className="scale-50 md:scale-75 lg:scale-100" src={windowsLogo}/>
						<Image alt="AdLogo" height="120" className="scale-50 md:scale-75 lg:scale-100" src={AdLogo}/>
						<Image alt="SqlServerLogo" height="120" className="scale-50 md:scale-75 lg:scale-100" src={SqlServerLogo}/>
						<Image alt="VeeamLogo" height="120" className="scale-50 md:scale-75 lg:scale-100" src={VeeamLogo}/>
						<Image alt="vmWareLogo" height="120" className="scale-50 md:scale-75 lg:scale-100" src={vmWareLogo}/>
					</div>
				</div>
				<div className="flex-1 rounded-md">
				<div className="font-extralight text-xs md:text-base opacity-90">
						DEVELOPER
					</div>
					<div className="flex justify-center mt-1 mb-2"><div className="border w-[50%] border-gray-500"></div></div>
					<div className="flex flex-wrap justify-center space-x-2 md:space-x-3 lg:space-x-6 -space-y-2 md:space-y-3 lg:space-y-6 p-0 md:p-2">
						<Image alt="AutoItLogo" height="100" className="scale-50 md:scale-75 lg:scale-100 rounded-2xl" src={AutoItLogo}/>
						<Image alt="GoLogo" height="100" className="scale-50 md:scale-75 lg:scale-100" src={GoLogo}/>
						<Image alt="PythonLogo" height="100" className="scale-50 md:scale-75 lg:scale-100" src={PythonLogo}/>
						<Image alt="FlaskLogo" height="100" className="scale-50 md:scale-75 lg:scale-100 rounded-lg" src={FlaskLogo}/>
						<Image alt="NodeJsLogo" height="100" className="scale-50 md:scale-75 lg:scale-100 rounded-full" src={NodeJsLogo}/>
						<Image alt="FastifyLogo" height="100" className="scale-50 md:scale-75 lg:scale-100 rounded-full" src={FastifyLogo}/>
						<Image alt="ReactLogo" height="100" className="scale-50 md:scale-75 lg:scale-100" src={ReactLogo}/>
						<Image alt="NextLogo" height="100" className="scale-50 md:scale-75 lg:scale-100" src={NextLogo}/>
						<Image alt="VercelLogo" height="100" className="scale-50 md:scale-75 lg:scale-100 rounded-lg" src={VercelLogo}/>
						<Image alt="MongoDB" height="100" className="scale-50 md:scale-75 lg:scale-100 rounded-full" src={MongoDBLogo}/>
						<Image alt="SolidityLogo" height="100" className="scale-50 md:scale-75 lg:scale-100 rounded-lg" src={SolidityLogo}/>
					</div>
				</div>
			</div>
		</div>
	)
}