const ApiUrl = "https://gestor.djsanz.es/"

// Visitas
export const CreaVisita = async () => {
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
		.catch(() => { console.error('Error Registrando Visita') });
}