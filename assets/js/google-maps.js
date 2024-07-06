function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 20.7371014, lng: 78.5797753};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'South Jakarta, INA' // Title Location
    });
}