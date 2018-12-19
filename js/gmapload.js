function initMap() {
    var mapOptions = {
	    center: {
            lat: 43.279829,
            lng: 5.325952
        },
	    zoom: 8,
	    mapTypeId: 'roadmap'
    };
    var map = new google.maps.Map(document.getElementById("studiofx-map"), mapOptions);
    var ctcMark = new google.maps.Marker({
    	position: mapOptions.center,
    	map: map,
        imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/markerclusterer.js"
    });
}
