$( document ).ready(function() {
$("#reaper").hide();
	$("#goRight1").click(function() {
		$("#exploreBody").css("background-image", "url('img/dark-forest-wallpaper-3.jpg')");
		$("#goRight1").hide();
		$("#goBack").hide();
		$("#goRight-Straight1").show();
		$("#goRight-Right2").show();
		$('#hudobj').replaceWith("<p> You look around and pick up a gun lying on the ground for safety. </p>");
	});

	$("#goRight-Straight1").click(function() {
		$("#exploreBody").css("background-image", "url('img/images.jpeg')");
		$("#goRight-Straight1").hide();
		$("#goRight-Straight2").show();
		$('#hudobj').replaceWith("<p> You keep exploring the area to find more answers. </p>");
	});

	$("#goRight-Straight2").click(function() {
		$("#exploreBody").css("background-image", "url('http://31.media.tumblr.com/e058aac8d60b3148c8272b7a9546cfd5/tumblr_n90xhg6fID1trijtjo1_500.gif')");
		$("#goRight-Straight2").hide();
		$("#goRight-Straight3").show();
		$('#hudobj').replaceWith("<p> You keep exploring the area to find more answers. </p>");
	});

	$("#goRight-Straight3").click(function() {
		$("#exploreBody").css("background-image", "url('img/exploreRight3.jpg')");
		$("#goRight-Straight3").hide();
		$("#goRight-Right2").show();
		$('#hudobj').replaceWith("<p> You keep exploring the area to find more answers. You find a house in the middle of the forest and go to explore inside. </p>");
	});

	$("#goRight-Right2").click(function() {
		$("#exploreBody").css("background-image", "url('img/tumblr_muqsqvUeCn1r70le6o1_500.gif')");
		$("#goRight-Right2").hide();
		$("#goBack").show();

		$('#hudobj').replaceWith("<p> Its a trap and a monster kills YOU ! </p>");
	});

	$("#goLeft1").click(function() {
		$("#exploreBody").css("background-image", "url('img/dark-forest-7.jpg')");
		$("#goLeft1").hide();
		$("#goLeft2").show();
		
		$('#hudobj').replaceWith("<p> You keep exploring the area to find more answers. </p>");
	});

	$("#goLeft-Straight1").click(function() {
		$("#exploreBody").css("background-image", "url('img/6e5a26ec579ebfa144a6557d4ab0ee90.jpg')");
		$("#goLeft2").hide();
		$("#goLeft3").show();
		$('#hudobj').replaceWith("<p> You keep exploring the area to find more answers. </p>");
	});

	$("#goLeft-Straight2").click(function() {
		$("#exploreBody").css("background-image", "url('img/6e5a26ec579ebfa144a6557d4ab0ee90.jpg')");
		$("#goLeft3").hide();
		$("#goBack").show();
		$('#hudobj').replaceWith("<p> You keep exploring the area to find more answers. </p>");
	});


	$("#goBack").click(function() {
		$("#exploreBody").css("background-image", "url('img/dark-forest-wallpaper-3.jpg')");
		$("#goBack").hide();
		$("#goRight1").show();
		$("#goLeft1").show();
		$('#hudobj').replaceWith("<p> You keep exploring the area to find more answers. </p>");
	});

$("#reaper").click(function() {
		$("#reaper").hide();
	});

});
