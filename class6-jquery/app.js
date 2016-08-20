var form = $('form');
var textarea = $('textarea');

form.on('submit', function(event) {
	event.preventDefault();
	
//	.val() only works with form elements
//	var newTweetValue = $('textarea').val();

	var newTweetValue = textarea.val();
	var newTweet = $('.tweet').first().clone();
	
	newTweet.find('.tweet__content').text(newTweetValue);
	newTweet.find('.tweet__time').text('now');
	
	textarea.val('');
	
//	$('.tweets').prepend('<article>' + newTweetValue + '</article>');
	$('.tweets').prepend(newTweet);
});












































