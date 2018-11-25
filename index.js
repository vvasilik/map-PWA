createMap();

function createMap(){
	var mapOptions = {
		zoom: 2,
		center: new google.maps.LatLng(0, 0)
	};
	map = new google.maps.Map(document.getElementById('map'), mapOptions);
}