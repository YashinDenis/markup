$(document).ready(function() {
	$('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',

		// When elemened is focused, some mobile browsers in some cases zoom in
		// It looks not nice, so we disable it:
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});
});

/*
$("#form").submit(function()){
	$.ajax({
		type: "POST",
		url: "#",
		data: $(this).serialize()
	}).done(function(){
		alert("Спасибо за заявку!")
		setTimeout(function(){
		}, 1000);
	});
	return false
});
*/
