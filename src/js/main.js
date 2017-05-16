console.log('Hello world!');

var headerHeight = null;
var documentHeight = null;

function scrollToTop() {
	$(window).scrollTop(0);
}

$(document).ready(function() {
	console.log('ready');
	headerHeight = $('header').height();
	documentHeight = $(document).height();
	$('.scroll-to-top').click(function() {
		scrollToTop();
	});
});

$(window).resize(function() {
	console.log('resize');
});

// var height = 400;
// var counter = 0;

$(window).scroll(function() {
	// var scrollAmount = $(window).scrollTop();

	// if (scrollAmount > headerHeight) {
	// 	console.log('fire event')
	// 	counter++;
	// 	$('button').css({
	// 		'position': 'absolute',
	// 		'margin-top': counter
	// 	})
	// 	console.log(counter)
	// }
	// console.log('scroll');
	// height = height - 5;
	// $('.square').height(height);
	// var scrollAmount = $(window).scrollTop();
	// if (scrollAmount > headerHeight) {
	// 	$('nav').css({
	// 		'position': 'fixed'
	// 	});
	// } else {
	// 	$('nav').css({
	// 		'position': 'absolute'
	// 	});
	// }
	// var scrollTotal = scrollAmount + $(window).height();
	// if (scrollTotal > documentHeight) {
	// 	$('.scroll-to-top').css({
	// 		'display': 'block'
	// 	});
	// } else {
	// 	$('.scroll-to-top').css({
	// 		'display': 'none'
	// 	});
	// }
});


$( "section.grid div.grid-item li" ).hover(hoverIn, hoverOut);


function hoverIn(){
	var currentLiItem = $(this).attr('id');
	var hoverBoxClass = ".hover."+currentLiItem;
	$(hoverBoxClass).addClass('active');
}


function hoverOut(){
	var currentLiItem = $(this).attr('id');
	var hoverBoxClass = ".hover."+currentLiItem;
	$(hoverBoxClass).removeClass('active');
}