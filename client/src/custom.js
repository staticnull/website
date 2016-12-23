(function() {
	/*****************************
	* Initialize Wow - elements animation on scroll
	*****************************/
	new WOW({mobile: false}).init();

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