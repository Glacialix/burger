$(document).ready(function() {
	var on = $('.header__hamburger-link'),
		off = $('.header__close-link');
		menu = $('.section--hamburger-menu')

	$(off).on('click', function(e){
		e.preventDefault();

		$(menu).removeClass('active');

	});

	$(on).on('click', function(e){
		e.preventDefault();
		
		$(menu).addClass('active');

	});

});