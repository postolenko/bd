if( document.getElementById("map") ) {
    function initMap() {
        var image2 = "img/pin.png";
        map2 = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 55.882593, lng: 37.5477503},
            scrollwheel: false,
            scaleControl: false,
            zoom: 16,
            disableDefaultUI: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });
        marker2 = new google.maps.Marker({
            map: map2,
            draggable: false,
            animation: google.maps.Animation.DROP,
            position: {lat: 55.882593, lng: 37.5477503},
            icon: image2,
            title: ''
        });
        marker.addListener('click', toggleBounce);
    }
}