(function() {
	/*****************************
	* Initialize Wow - elements animation on scroll
	*****************************/
	new WOW({mobile: false}).init();


    /*****************************
     * Initialize GoogleMap
     *****************************/
    function initializeGoogleMap() {
        var mapCanvas = document.getElementById('map');
        var mapCenter = new google.maps.LatLng($('.event-map').data('latitude'), $('.event-map').data('longitude'))
        var mapOptions = {
            center: mapCenter,
            zoom: 15,
            styles: [{featureType:"landscape",stylers:[{saturation:-100},{lightness:65},{visibility:"on"}]},{featureType:"poi",stylers:[{saturation:-100},{lightness:51},{visibility:"simplified"}]},{featureType:"road.highway",stylers:[{saturation:-100},{visibility:"simplified"}]},{featureType:"road.arterial",stylers:[{saturation:-100},{lightness:30},{visibility:"on"}]},{featureType:"road.local",stylers:[{saturation:-100},{lightness:40},{visibility:"on"}]},{featureType:"transit",stylers:[{saturation:-100},{visibility:"simplified"}]},{featureType:"administrative.province",stylers:[{visibility:"off"}]/**/},{featureType:"administrative.locality",stylers:[{visibility:"off"}]},{featureType:"administrative.neighborhood",stylers:[{visibility:"on"}]/**/},{featureType:"water",elementType:"labels",stylers:[{visibility:"on"},{lightness:-25},{saturation:-100}]},{featureType:"water",elementType:"geometry",stylers:[{hue:"#ffff00"},{lightness:-25},{saturation:-97}]}],
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions);

        var marker = new google.maps.Marker({
            position: mapCenter,
            map: map
        });
    }
    google.maps.event.addDomListener(window, 'load', initializeGoogleMap);

	/*****************************
	* Smooth scroll
	*****************************/
	$('[data-scroll]').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 2000, 'easeOutCubic');
        event.preventDefault();
    });
	
	/*****************************
	* Tabs
	*****************************/
	$('#schedule-tabs a').click(function (e) {
	  e.preventDefault()
	  $(this).tab('show')
	});
	/****************************/
})();