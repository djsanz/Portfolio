const ApiUrl = "https://gestor.djsanz.es/"
// const ApiUrl = "http://localhost:5000/"

// Visitas
export const CreaVisita = async () => {
	if (Data.BaseURL === "http://localhost:3000") { return null }
	const Data = {
		"BaseURL": window.location.origin,
		"Path": window.location.pathname,
	}
	const Url = ApiUrl + 'visita/' + process.env.NEXT_PUBLIC_AppName
	fetch(Url, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(Data)
	})
		.then(response => response.json())
		.then(data => { console.log('Success:', data) })
		.catch((error) => { console.error('Error:', error) });
}