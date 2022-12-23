import Head from 'next/head'
import Link from 'next/link'
import NavBar from '../components/NavBar'
import Portada from '../components/Portada'
import Tecnologias from '../components/Tecnologias'
import Proyectos from '../components/Proyectos'

export default function Home() {
  return (
    <>
      <Head>
        <title>DjSanz Portfolio</title>
        <meta name="description" content="Portfolio de Javier Sanz Calvo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="text-center bg-black text-white min-h-screen flex flex-col overflow-x-clip bg-gradient-to-r from-gray-900">
		{/* <NavBar /> */}
		<Portada />
		<Tecnologias />
		<Proyectos />
      </main>
    </>
  )
}
