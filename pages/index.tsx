import Head from 'next/head'
import Portada from '../components/Portada'
import Tecnologias from '../components/Tecnologias'
import Proyectos from '../components/Proyectos'
import { CreaVisita } from '../helper/GestorAPI'
import { useEffect } from 'react';

export default function Home() {

	useEffect(() => {
		CreaVisita()
	}, [])

	return (
		<>
			<Head>
				<title>DjSanz Portfolio</title>
				<meta name="description" content="Portfolio de Javier Sanz Calvo" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="px-3 sm:px-24 lg:px-48 text-center bg-black text-white min-h-screen flex flex-col overflow-x-clip bg-gradient-to-r from-gray-900">
				<Portada />
				<Tecnologias />
				<Proyectos />
			</main>
		</>
	)
}
