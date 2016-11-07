var introduce = "This Is Yi-Ning's main page";
alert("Hello! "+ introduce);

/*$("a").click(function()
{
  $(this).add Class("color");
});*/
$(document).ready(function(){
	$('.change').click(function(){
		// $('h1').css('font-size','40px');
		$('a').html('<i>Clicked!</i>')
		alert($('a').text());
	});

	$('.change').mouseenter(function(){
		$('a').addClass('brown');
	});

	$('.change').mouseleave(function(){
		$('a').removeClass('brown');
	});
});
