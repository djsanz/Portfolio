import React from 'react';
import Image from "next/image";
import Link from "next/link";

import SeeIcon from "../images/SeeIcon.svg";
import SoftSelfServiceEsquema from "../images/App/SoftSelfServiceEsquema.png"
import SoftSelfServiceWeb from "../images/App/SoftSelfServiceWeb.png"
import SoftSelfServiceWebNew from "../images/App/SoftSelfServiceWebNew.png"
import TheSafeBNB from "../images/App/TheSafeBNB.png"
import MyDynamicNFT from "../images/App/EditNFT2.gif"
import MyNftID from "../images/App/MyNftID.png"
import CryptoShop from "../images/App/CryptoShop.png"


export default function Proyectos() {
	return (
		<div className="flex flex-col mt-8">
			<div className="mb-4 font-Dancing text-amber-500 text-4xl text-left">
				Mis Proyectos:
			</div>
			{/* SoftSelfService */}
			<div className="border-2 flex flex-col border-amber-700 basis-4/6 flex-1 rounded-md shadow-md shadow-amber-600">
				<div className="pl-2 xs:pl-12 text-gray-400 font-bold text-2xl text-left pt-2">
					SoftSelfService (App Privada)
				</div>
				<div className="flex pl-6 pr-6 pb-3 pt-3 flex-col md:flex-row">
					<div className="flex justify-center flex-col items-center">
						<div className="">
							<a href={SoftSelfServiceEsquema.src} rel="noopener noreferrer" target="_blank">
								<Image alt="SoftSelfServiceEsquema" className="inline p-2" src={SoftSelfServiceEsquema} />
							</a>
						</div>
						<div className="">
							<a href={SoftSelfServiceWeb.src} rel="noopener noreferrer" target="_blank">
								<Image alt="SoftSelfServiceWeb" className="inline p-2" src={SoftSelfServiceWeb} />
							</a>
						</div>
						<div className="">
							<a href={SoftSelfServiceWebNew.src} rel="noopener noreferrer" target="_blank">
								<Image alt="SoftSelfServiceWeb" className="inline p-2" src={SoftSelfServiceWebNew} />
							</a>
						</div>
					</div>
					<div className="flex-col text-left p-2 xs:p-6 text-stone-300 leading-loose space-y-5">
						<p>
							Servicio de ejecución de tareas remotas, pudiendo instalar/desinstalar o configurar un equipo o equipos del dominio de forma desatendida en remoto.
						</p>
						<p>
							Usando este servicio junto con unos ficheros de configuración, se aplican instalaciones y configuraciones especificas en el inicio de sesión del usuario, dependiendo a que grupo de seguridad pertenezcan, dejando el equipo listo para trabajar independientemente de en que equipo esté.
						</p>
						<p>
							La programé inicialmente usando Php Slim, MySql y AutoIt.
						</p>
						<p>
							Ahora la he renovado usando Vue, Laravel, MySql y Golang.
						</p>
					</div>
				</div>
			</div>

			{/* TheSafeBNB */}
			<div className="border-2 flex flex-col border-amber-700 basis-4/6 flex-1 rounded-md shadow-md shadow-amber-600 mt-6">
				<div className="pl-2 xs:pl-12 text-gray-400 font-bold text-2xl text-left pt-2 flex">
					<div className=" flex-1">
						<Link href="/TheSafeBNB" rel="noopener noreferrer" target="_blank" className="underline hover:text-amber-500 hover:font-bold">
							TheSafeBNB
						</Link>
					</div>
					<div className="pr-1">
						<Link href="/TheSafeBNB" rel="noopener noreferrer" target="_blank" className="underline hover:text-amber-500 hover:font-bold">
							<img src={SeeIcon.src} className="h-10 opacity-60 hover:scale-125 hover:opacity-80" />
						</Link>
					</div>
				</div>
				<div className="flex pl-6 pr-6 pb-3 pt-3 flex-col md:flex-row">
					<div className="justify-center">
						<a href={TheSafeBNB.src} rel="noopener noreferrer" target="_blank">
							<Image alt="TheSafeBNB" className="inline p-2 w-[50%] md:w-[100%]" src={TheSafeBNB} />
						</a>
					</div>
					<div className="flex-col text-left p-2 xs:p-6 text-stone-300 leading-loose space-y-5">
						<p>
							Mi primer desarrollo en Web3 usando BlockChain, es un juego NFT donde tu compras llaves aleatorias y tienen un porcentaje de abrir la caja y llevarte el premio.
							Cada vez que compras llaves, el coste entra en la caja y si consigues abrirla te llevas el 85% del contenido.
						</p>
						<p>
							Las llaves son un Nft personalizado que pueden ser de 3 tipos, Iron, Silver y Golden.
						</p>
						<p>
							Se ha creado usando React y Solidity para los contratos. Está en la red de TestNet de Binance Smart Chain.
						</p>
					</div>
				</div>
			</div>

			{/* MyDynamicNFT.com */}
			<div className="border-2 flex flex-col border-amber-700 basis-4/6 flex-1 rounded-md shadow-md shadow-amber-600 mt-6">
				<div className="pl-2 xs:pl-12 text-gray-400 font-bold text-2xl text-left pt-2 flex">
					<div className=" flex-1">
						<a href="https://MyDynamicNFT.com" rel="noopener noreferrer" target="_blank" className="underline hover:text-amber-500 hover:font-bold">
							MyDynamicNFT.com
						</a>
					</div>
					<div className="pr-1">
						<a href="https://MyDynamicNFT.com" rel="noopener noreferrer" target="_blank" className="underline hover:text-amber-500 hover:font-bold">
							<img src={SeeIcon.src} className="h-10 opacity-60 hover:scale-125 hover:opacity-80" />
						</a>
					</div>
				</div>
				<div className="flex pl-6 pr-6 pb-3 pt-3 flex-col md:flex-row">
					<div className="justify-center">
						<a href={MyDynamicNFT.src} rel="noopener noreferrer" target="_blank">
							<Image alt="MyDynamicNFT" className="inline p-2" src={MyDynamicNFT} />
						</a>
					</div>
					<div className="flex-col text-left p-2 xs:p-6 text-stone-300 space-y-5">
						<p className="">
							Web para crear NFTs dinámicos, con la posibilidad de cambiar todo el contenido sin gastar comisiones de red. Si alguna red social implementa tener un perfil NFT, podrás cambiar tu foto de perfil, tu biografía, tu portada, etc, sin gastar nada.
						</p>

						<div className="leading-relaxed">
							Está desplegado en las redes (y sus TestNet):
							<li className="">Ethereum</li>
							<li className="">Binance Smart Chain</li>
							<li className="">Polygon</li>
							<li className="">Velas</li>
						</div>
						<p className="">
							Es totalmente compatible con Markets del tipo OpenSea o Rarible.
						</p>
						<p className="">
							Se ha creado usando React, Python Flask, MongoDB y Solidity para los contratos.
						</p>
					</div>
				</div>
			</div>

			{/* MyNftID */}
			<div className="border-2 flex flex-col border-amber-700 basis-4/6 flex-1 rounded-md shadow-md shadow-amber-600 mt-6">
				<div className="pl-2 xs:pl-12 text-gray-400 font-bold text-2xl text-left pt-2 flex">
					<div className=" flex-1">
						<a href="https://mynftid.MyDynamicNFT.com" rel="noopener noreferrer" target="_blank" className="underline hover:text-amber-500 hover:font-bold">
						MyNftID
						</a>
					</div>
					<div className="pr-1">
						<a href="https://mynftid.MyDynamicNFT.com" rel="noopener noreferrer" target="_blank" className="underline hover:text-amber-500 hover:font-bold">
							<img src={SeeIcon.src} className="h-10 opacity-60 hover:scale-125 hover:opacity-80" />
						</a>
					</div>
				</div>
				<div className="flex pl-6 pr-6 pb-3 pt-3 flex-col md:flex-row">
					<div className="justify-center">
						<a href={MyNftID.src} rel="noopener noreferrer" target="_blank">
							<Image alt="MyNftID" className="inline p-2" src={MyNftID} />
						</a>
					</div>
					<div className="flex-col text-left p-2 xs:p-6 text-stone-300 space-y-5">
						<p className="">
							Crea tu propio Nft para poder identificarte gracias a tu wallet. Cada cuenta que incluyes en el Nft está verificada.
						</p>
						<div className="leading-relaxed">
							Por ahora solo se puede verificar:
							<li className="">Discord</li>
							<li className="">Twitter</li>
							<li className="">eMail</li>
						</div>
						<p className="">
							El Nft es un contrato en Solidity totalmente personalizado, que solo puede tener uno por Wallet y no se puede transferir.
						</p>
						<p className="">
							Esta desplegado en Mumbai, la TestNet de Polygon, ya que esté proyecto de momento es un Demo.
						</p>
						<p className="">
							Se ha creado usando React, ExpressJS, MongoDB y Solidity para los contratos.
						</p>
					</div>
				</div>
			</div>

			{/* CryptoShop */}
			<div className="border-2 flex flex-col border-amber-700 basis-4/6 flex-1 rounded-md shadow-md shadow-amber-600 mt-6">
				<div className="pl-2 xs:pl-12 text-gray-400 font-bold text-2xl text-left pt-2 flex">
					<div className=" flex-1">
						<a href="https://cryptoshop.djsanz.es" rel="noopener noreferrer" target="_blank" className="underline hover:text-amber-500 hover:font-bold">
							CryptoShop
						</a>
					</div>
					<div className="pr-1">
						<a href="https://cryptoshop.djsanz.es" rel="noopener noreferrer" target="_blank" className="underline hover:text-amber-500 hover:font-bold">
							<img src={SeeIcon.src} className="h-10 opacity-60 hover:scale-125 hover:opacity-80" />
						</a>
					</div>
				</div>
				<div className="flex pl-6 pr-6 pb-3 pt-3 flex-col md:flex-row">
					<div className="justify-center">
						<a href={CryptoShop.src} rel="noopener noreferrer" target="_blank">
							<Image alt="CryptoShop" className="inline p-2" src={CryptoShop} />
						</a>
					</div>
					<div className="flex-col text-left p-2 xs:p-6 text-stone-300 space-y-5">
						<p className="">
							Ejemplo de como se puede hacer una tienda online usando Crypto como pago. Los pedidos se guardan en la Blockchain. Solo se necesitaría una API para los productos.
						</p>
						<p className="">
							Usamos una moneda SanzUSDC y un contrato para guardar los pedidos, ambos creados en Solidity y con sus respectivos Faucets.
						</p>
						<p className="">
							Esta desplegado en Goerli, una TestNet de Ethereum, ya que esté proyecto de momento es un Demo educativo.
						</p>
						<p className="">
							Se ha creado usando React y Solidity para los contratos.
						</p>
					</div>
				</div>
			</div>

		</div>
	)
}