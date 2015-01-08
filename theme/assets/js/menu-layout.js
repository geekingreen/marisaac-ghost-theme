$(function () {
	$gigMenu = $('.gig-menu');
	$('.gig-menu-button').click(function () {
		$gigMenu.addClass('gig-menu-open');
	});
	$('.gig-menu li, .gig-content').click(function () {
		$gigMenu.removeClass('gig-menu-open');
	});
});
