$(document).ready(function(){

///////////////////////////////////////////////////////////
// Change background
///////////////////////////////////////////////////////////

var backgrounds = ["url(images/cities/beijing01.jpg)", 
				   "url(images/cities/beijing02.jpg)", 
				   "url(images/cities/beijing03.jpg)", 
				   "url(images/cities/beijing04.jpg)"];

function changeImage() {
	$('#bodyPic').css('background-image', backgrounds[i]);
	i = i + 1;
	if( i >= backgrounds.length) {
		i = 0;
	}
}

var i = 0;
setInterval(changeImage, 10000);

///////////////////////////////////////////////////////////
// Open Close experience details
///////////////////////////////////////////////////////////

function PlusMinusexpand () {
	$(this).parent().parent().find(".hiddenExp").slideToggle().toggleClass("hidden");
	$(this).toggleClass("closed");
}

$("#plus1").on("click", PlusMinusexpand);
$("#plus2").on("click", PlusMinusexpand);
$("#plus3").on("click", PlusMinusexpand);
$("#plus4").on("click", PlusMinusexpand);
$("#plus5").on("click", PlusMinusexpand);
$("#plus6").on("click", PlusMinusexpand);



///////////////////////////////////////////////////////////
// Nav menu selection upon scroll
///////////////////////////////////////////////////////////

// function moveProgressBar() {
//     var getPercent = ($('.progress-wrap').data('progress-percent') / 100);
//     var getProgressWrapWidth = $('.progress-wrap').width();
//     var progressTotal = getPercent * getProgressWrapWidth;
//     var animationLength = 2500;
  
  
//     // on page load, animate percentage bar to data percentage length
//     // .stop() used to prevent animation queueing
//     $('.progress-bar').stop().animate({
//         left: progressTotal
//     }, animationLength);
// }

///////////////////////////////////////////////////////////
// Skills bar animation
///////////////////////////////////////////////////////////

function moveProgressBar() {
    var getPercent = ($('.progress-wrap').data('progress-percent') / 100);
    var getProgressWrapWidth = $('.progress-wrap').width();
    var progressTotal = getPercent * getProgressWrapWidth;
    var animationLength = 2500;
    
    // on page load, animate percentage bar to data percentage length
    // .stop() used to prevent animation queueing
    $('.progress-bar').stop().animate({
        left: progressTotal
    }, animationLength);
}

// on page load...
moveProgressBar();
    // on browser resize...
$(window).resize(function() {
    moveProgressBar();
});

});















































































































































