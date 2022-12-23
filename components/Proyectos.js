import React from 'react';
import Image from "next/image";
import Link from "next/link";

import SoftSelfServiceWeb from "../images/App/SoftSelfServiceWeb.png"
import SoftSelfServiceEjecutador from "../images/App/SoftSelfServiceEjecutador.png"
import TheSafeBNB from "../images/App/TheSafeBNB.png"
import MyDynamicNFT from "../images/App/EditNFT2.gif"
import MyNftID from "../images/App/MyNftID.png"
import CryptoShop from "../images/App/CryptoShop.png"

export default function Proyectos() {
	return (
		<div className="flex flex-col mt-8 px-14">
			<div className="mb-4 font-Dancing text-amber-500 text-4xl text-left">
				Mis Proyectos:
			</div>
			<div className="border-2 flex flex-col border-amber-700 basis-4/6 flex-1 rounded-md shadow-md shadow-amber-600">
				<div className="pl-12 text-gray-400 font-bold text-2xl text-left">
					SoftSelfService (App Privada)
				</div>
				<div className="flex pl-6 pr-6 pb-3 pt-3">
					<div className="flex-1 justify-center space-y-5">
						<a href={SoftSelfServiceWeb.src} rel="noopener noreferrer" target="_blank">
							<Image alt="SoftSelfServiceWeb" className="inline p-2" src={SoftSelfServiceWeb}/>
						</a>
						<a href={SoftSelfServiceEjecutador.src} rel="noopener noreferrer" target="_blank">
							<Image alt="SoftSelfServiceEjecutador" className="inline p-2" src={SoftSelfServiceEjecutador}/>
						</a>
					</div>
					<div className="w-[60%] text-left p-6 text-stone-300 leading-relaxed">
						<p className="indent-6">
							Servicio de ejecución de tareas remotas, pudiendo instalar/desinstalar o configurar un equipo o equipos del dominio de forma desatendida en remoto.
						</p>
						<p className="indent-6 pt-2">
							Usando este servicio junto con unos ficheros de configuración, se aplican instalaciones y configuraciones especificas en el inicio de sesión del usuario, dependiendo a que grupo de seguridad pertenezcan, dejando el equipo listo para trabajar independientemente de en que equipo esté.
						</p>
					</div>
				</div>
			</div>
			<div className="border-2 mt-6 flex flex-col border-amber-700 basis-4/6 flex-1 rounded-md shadow-md shadow-amber-600">
				<div className="pl-12 text-gray-400 font-bold text-2xl text-left">
					<Link href="/TheSafeBNB" rel="noopener noreferrer" target="_blank" className="underline hover:text-amber-500 hover:font-bold">
						TheSafeBNB
					</Link>
				</div>
				<div className="flex pl-6 pr-6 pb-3 pt-3">
					<div className="flex-1 justify-center space-y-5">
						<a href={TheSafeBNB.src} rel="noopener noreferrer" target="_blank">
							<Image alt="TheSafeBNB" className="inline p-2" src={TheSafeBNB}/>
						</a>
					</div>
					<div className="w-[60%] text-left p-6 text-stone-300 leading-relaxed">
						<p className="indent-6">
							Mi primer desarrollo en Web3 usando BlockChain, es un juego NFT donde tu compras llaves aleatorias y tienen un porcentaje de abrir la caja y llevarte el premio.
							Cada vez que compras llaves, el coste entra en la caja y si consigues abrirla te llevas el 85% del contenido.
						</p>
						<p className="indent-6">
							Las llaves son un Nft personalizado que pueden ser de 3 tipos, Iron, Silver y Golden.
						</p>
						<p className="indent-6">
							Se ha creado usado React y Solidity para los contratos. Está en la red de TestNet de Binance Smart Chain.
						</p>
					</div>
				</div>
			</div>
			<div className="border-2 mt-6 mb-6 flex flex-col border-amber-700 basis-4/6 flex-1 rounded-md shadow-md shadow-amber-600">
				<div className="pl-12 text-gray-400 font-bold text-2xl text-left">
					<a href="https://MyDynamicNFT.com" rel="noopener noreferrer" target="_blank" className="underline hover:text-amber-500 hover:font-bold">
						MyDynamicNFT.com
					</a>
				</div>
				<div className="flex pl-6 pr-6 pb-3 pt-3">
					<div className="flex-1 justify-center space-y-5">
						<a href={MyDynamicNFT.src} rel="noopener noreferrer" target="_blank">
							<Image alt="MyDynamicNFT" className="inline p-2" src={MyDynamicNFT}/>
						</a>
					</div>
					<div className="w-[60%] text-left p-6 text-stone-300 leading-relaxed">
						<p className="indent-6">
							Web para crear NFTs dinámicos, con la posibilidad de cambiar todo el contenido sin gastar comisiones de red. Si alguna red social implementa tener un perfil NFT, podrás cambiar tu foto de perfil, tu biografía, tu portada, etc, sin gastar nada.
						</p>
						<p className="indent-6 pt-2">
							Está desplegado en las redes (y sus TestNet):
						</p>
						<li className="indent-6">Ethereum</li>
						<li className="indent-6">Binance Smart Chain</li>
						<li className="indent-6">Polygon</li>
						<li className="indent-6">Velas</li>
						<p className="indent-6">
							Es totalmente compatible con Markets del tipo OpenSea o Rarible.
						</p>
						<p className="indent-6">
							Se ha creado usado React, Python Flask y Solidity para los contratos.
						</p>
					</div>
				</div>
			</div>
			<div className="border-2 mb-6 flex flex-col border-amber-700 basis-4/6 flex-1 rounded-md shadow-md shadow-amber-600">
				<div className="pl-12 text-gray-400 font-bold text-2xl text-left">
					<a href="https://mynftid.vercel.app/" rel="noopener noreferrer" target="_blank" className="underline hover:text-amber-500 hover:font-bold">
						MyNftID
					</a>
				</div>
				<div className="flex pl-6 pr-6 pb-3 pt-3">
					<div className="flex-1 justify-center space-y-5">
						<a href={MyNftID.src} rel="noopener noreferrer" target="_blank">
							<Image alt="MyNftID" className="inline p-2" src={MyNftID}/>
						</a>
					</div>
					<div className="w-[60%] text-left p-6 text-stone-300 leading-relaxed">
						<p className="indent-6">
							Crea tu propio Nft para poder identificarte gracias a tu wallet. Cada cuenta que incluyes en el Nft está verificada.
						</p>
						<p className="indent-6 pt-2">
							Por ahora solo se puede verificar:
						</p>
						<li className="indent-6">Discord</li>
						<li className="indent-6">Twitter</li>
						<li className="indent-6">eMail</li>
						<p className="indent-6">
							El Nft es un contrato en Solidity totalmente personalizado, que solo puede tener uno por Wallet y no se puede transferir.
						</p>
						<p className="indent-6">
							Esta desplegado en Mumbai, la TestNet de Polygon, ya que esté proyecto de momento es solo un Demo.
						</p>
						<p className="indent-6">
							Se ha creado usado React, ExpressJS y Solidity para los contratos.
						</p>
					</div>
				</div>
			</div>
			<div className="border-2 mb-6 flex flex-col border-amber-700 basis-4/6 flex-1 rounded-md shadow-md shadow-amber-600">
				<div className="pl-12 text-gray-400 font-bold text-2xl text-left">
					<a href="https://cryptoeshop.vercel.app" rel="noopener noreferrer" target="_blank" className="underline hover:text-amber-500 hover:font-bold">
						CryptoShop
					</a>
				</div>
				<div className="flex pl-6 pr-6 pb-3 pt-3">
					<div className="flex-1 justify-center space-y-5">
						<a href={CryptoShop.src} rel="noopener noreferrer" target="_blank">
							<Image alt="CryptoShop" className="inline p-2" src={CryptoShop}/>
						</a>
					</div>
					<div className="w-[60%] text-left p-6 text-stone-300 leading-relaxed">
						<p className="indent-6">
							Ejemplo de como se puede hacer una tienda online usando Crypto como pago. Los pedidos se guardan en la Blockchain. Solo se necesitaría una API para los productos.
						</p>
						<p className="indent-6">
							Usamos una moneda SanzUSDC y un contrato para guardar los pedidos, ambos creados en Solidity y con sus respectivos Faucets.
						</p>
						<p className="indent-6">
							Esta desplegado en Goerli, una TestNet de Ethereum, ya que esté proyecto de momento es solo un Demo educativo.
						</p>
						<p className="indent-6">
							Se ha creado usado React y Solidity para los contratos.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}