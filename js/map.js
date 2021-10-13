// if( document.getElementById("map") ) {
//     function initMap() {
//         var image2 = "img/pin.png";
//         map2 = new google.maps.Map(document.getElementById('map'), {
//             center: {lat: 55.882593, lng: 37.5477503},
//             scrollwheel: false,
//             scaleControl: false,
//             zoom: 16,
//             disableDefaultUI: true,
//             mapTypeId: google.maps.MapTypeId.ROADMAP
//         });
//         marker2 = new google.maps.Marker({
//             map: map2,
//             draggable: false,
//             animation: google.maps.Animation.DROP,
//             position: {lat: 55.882593, lng: 37.5477503},
//             icon: image2,
//             title: ''
//         });
//         marker.addListener('click', toggleBounce);
//     }
// }

if( document.getElementById("map") ) {

    ymaps.ready(function () {
        var myMap = new ymaps.Map('map', {
            center: [55.592525, 37.623937],
            zoom: 15
        }, {
            searchControlProvider: 'yandex#search'
        }),

        myPlacemark1 = new ymaps.Placemark([55.592525, 37.612497], {
            hintContent: ''
        }, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: 'img/pin.png',
            iconImageSize: [55, 73],
            iconImageOffset: [55, -30]
        });

        myMap.geoObjects.add(myPlacemark1);
    });

}