const ApiUrl = "https://gestor.djsanz.es/"
// const ApiUrl = "http://localhost:5000/"

// Visitas
export const CreaVisita = async () => {
	if (sessionStorage.getItem('Visita')) { return null }
	if (window.location.hostname === "localhost") { return null }
	const Data = {
		"BaseURL": window.location.origin,
		"Path": window.location.pathname,
	}
	const Url = ApiUrl + 'visitas/' + process.env.NEXT_PUBLIC_AppName
	fetch(Url, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(Data)
	})
		.then(response => response.json())
		.then(data => { sessionStorage.setItem('Visita', data) })
		.catch(() => { console.error('Error Registrando Visita') });
}