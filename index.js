const popup = L.popup();
let geocode;
const map = new L.Map('map', {
	zoom: 9,
	layers: MQ.mapLayer(),
	center: new L.latLng([41.575730,13.002411])
});

map.on('click', function(e) {
	geocode.reverse(e.latlng);
	popup.setLatLng(e.latlng);
	popup.openOn(this);
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

	map.setView([latitude, longitude], 14);

	L.marker([latitude, longitude]).addTo(map);

	fetch('https://samples.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=b6907d289e10d714a6e88b30761fae22').then(data => data.text().then(text => console.log(text)))
  };

  function error(e) {
    alert("Unable to retrieve your location");
  };

  navigator.geolocation.getCurrentPosition(success, error);