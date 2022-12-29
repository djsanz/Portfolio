const ApiUrl = "https://gestor.djsanz.es/"
// const ApiUrl = "http://localhost:5000/"

// Visitas
export const CreaVisita = async () => {
	if (sessionStorage.getItem('Visita')) { return null }
	if (window.location.hostname === "localhost") { return null }

	var myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json");
	
	var Body = JSON.stringify({
	  "ExtraData": {
		"BaseURL": window.location.origin,
		"Path": window.location.pathname
	  }
	});
	
	var requestOptions = {
	  method: 'POST',
	  headers: myHeaders,
	  body: Body,
	  redirect: 'follow'
	};

	fetch(ApiUrl + 'visitas/' + process.env.NEXT_PUBLIC_AppName, requestOptions)
		.then(response => response.text())
		.then(result => { sessionStorage.setItem('Visita', result) })
		.catch(() => { console.error('Error Registrando Visita') });
}