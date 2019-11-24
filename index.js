const popup = L.popup();
let geocode;
const map = new L.Map('map', {
	zoom: 9,
	layers: MQ.mapLayer(),
	center: new L.latLng([41.575730,13.002411])
});

map.on('click', function(e) {
	geocode.reverse(e.latlng);
	popup.setLatLng(e.latlng).openOn(this);
});
map.addLayer(new L.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'));
map.addControl( new L.Control.Search({
	url: 'https://nominatim.openstreetmap.org/search?format=json&q={s}',
	jsonpParam: 'json_callback',
	propertyName: 'display_name',
	propertyLoc: ['lat','lon'],
	marker: L.circleMarker([0,0],{radius:30}),
	hideMarkerOnCollapse: true,
	autoCollapse: true,
	autoType: false,
	minLength: 2
}) );

geocode = MQ.geocode().on('success', function(e) {
	popup.setContent(geocode.describeLocation(e.result.best));
});

function success(position) {
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;

	console.log(latitude, longitude);
	map.setView([latitude, longitude], 14);

	const marker = L.marker([latitude, longitude]).addTo(map);
  };

  function error(e) {
    alert("Unable to retrieve your location");
  };

  navigator.geolocation.getCurrentPosition(success, error);