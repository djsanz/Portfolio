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
// import FastifyLogo from "../images/iconos/Fastify.png"
import ReactLogo from "../images/iconos/ReactLogo.png"
import NextLogo from "../images/iconos/Next.png"
import VercelLogo from "../images/iconos/Vercel.png"
import MongoDBLogo from "../images/iconos/MongoDB.webp"
import SolidityLogo from "../images/iconos/Solidity.jpg"
import VueLogo from "../images/iconos/Vue.png"


export default function Tecnologias() {
	return (
		<div className="flex flex-col mt-8">
			<div className="mb-4 font-Dancing text-amber-500 text-4xl text-left">
				Conocimientos:
			</div>
			<div className="flex flex-row space-x-5">
				<div className="flex-1 rounded-md">
					<div className="font-extralight text-xs md:text-base opacity-90">
						ADMINISTRADOR DE SISTEMAS
					</div>
					<div className="flex justify-center mt-1 mb-2"><div className="border w-[50%] border-gray-500"></div></div>
					<div className="flex flex-wrap justify-center align-middle space-x-2 md:space-x-3 lg:space-x-6 -space-y-10 md:space-y-3 lg:space-y-6 p-0 md:p-2">
						<img alt="windowsLogo" className="scale-50 md:scale-75 lg:scale-100 h-[120px]" src={windowsLogo.src}/>
						<img alt="AdLogo" className="scale-50 md:scale-75 lg:scale-100 h-[140px]" src={AdLogo.src}/>
						<img alt="SqlServerLogo" className="scale-50 md:scale-75 lg:scale-100 h-[100px]" src={SqlServerLogo.src}/>
						<img alt="VeeamLogo" className="scale-50 md:scale-75 lg:scale-100 h-[120px]" src={VeeamLogo.src}/>
						<img alt="vmWareLogo" className="scale-50 md:scale-75 lg:scale-100 h-[120px]" src={vmWareLogo.src}/>
					</div>
				</div>
				<div className="flex-1 rounded-md">
				<div className="font-extralight text-xs md:text-base opacity-90">
						DEVELOPER
					</div>
					<div className="flex justify-center mt-1 mb-2"><div className="border w-[50%] border-gray-500"></div></div>
					<div className="flex flex-wrap justify-center align-middle space-x-2 md:space-x-3 lg:space-x-6 -space-y-10 md:space-y-3 lg:space-y-6 p-0 md:p-2">
						<img alt="AutoItLogo" className="scale-50 md:scale-75 lg:scale-100 rounded-2xl h-[110px]" src={AutoItLogo.src}/>
						<img alt="GoLogo" className="scale-50 md:scale-75 lg:scale-100 h-[120px]" src={GoLogo.src}/>
						<img alt="PythonLogo" className="scale-50 md:scale-75 lg:scale-100 h-[120px]" src={PythonLogo.src}/>
						<img alt="FlaskLogo" className="scale-50 md:scale-75 lg:scale-100 rounded-lg h-[100px]" src={FlaskLogo.src}/>
						<img alt="NodeJsLogo" className="scale-50 md:scale-75 lg:scale-100 rounded-full h-[120px]" src={NodeJsLogo.src}/>
						{/* <img alt="FastifyLogo" className="scale-50 md:scale-75 lg:scale-100 rounded-full h-[130px]" src={FastifyLogo.src}/> */}
						<img alt="ReactLogo" className="scale-50 md:scale-75 lg:scale-100 h-[120px]" src={ReactLogo.src}/>
						<img alt="NextLogo" className="scale-50 md:scale-75 lg:scale-100 h-[120px]" src={NextLogo.src}/>
						<img alt="VercelLogo" className="scale-50 md:scale-75 lg:scale-100 rounded-lg h-[120px]" src={VercelLogo.src}/>
						<img alt="MongoDB" className="scale-50 md:scale-75 lg:scale-100 rounded-full h-[120px]" src={MongoDBLogo.src}/>
						<img alt="SolidityLogo" className="scale-50 md:scale-75 lg:scale-100 rounded-lg h-[120px]" src={SolidityLogo.src}/>
						<img alt="VueLogo" className="scale-50 md:scale-75 lg:scale-100 rounded-2xl h-[100px]" src={VueLogo.src}/>
					</div>
				</div>
			</div>
		</div>
	)
}