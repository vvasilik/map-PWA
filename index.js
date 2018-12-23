const map = new L.Map('map', {zoom: 9, center: new L.latLng([41.575730,13.002411]) });

map.addLayer(new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'));	//base layer
map.addControl( new L.Control.Search({
	url: 'http://nominatim.openstreetmap.org/search?format=json&q={s}',
	jsonpParam: 'json_callback',
	propertyName: 'display_name',
	propertyLoc: ['lat','lon'],
	marker: L.circleMarker([0,0],{radius:30}),
	hideMarkerOnCollapse: true,
	autoCollapse: true,
	autoType: false,
	minLength: 2
}) );