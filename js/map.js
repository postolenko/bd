var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

var mapLeftCoord = 37.623937;

if(bodyWidth <= 600) {
    mapLeftCoord = 37.615937;
}

if( document.getElementById("map") ) {

    ymaps.ready(function () {
        var myMap = new ymaps.Map('map', {
            center: [55.592525, mapLeftCoord],
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