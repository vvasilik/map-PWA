var map = L.map('map').setView([50.062501, 19.939354], 15);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoidmFzaWxpeXdvcmtwbGFjZSIsImEiOiJjanEwMXJwOW0waTR4NDNvZHN3ZTY0dHEwIn0.6BsJwTlPJSHObAtL_ZPMSg', {
	id: 'mapbox.streets'
}).addTo(map);