function start() {
	$(".nav-list li").click(function(e) {
		var whatTab = $(this).index();
		var howFar = 142.8 * whatTab;


		$(".ripple").remove();
		var posX = $(this).offset().left,
			posY = $(this).offset().top,
			buttonWidth = $(this).width(),
			buttonHeight = $(this).height();

		$(this).prepend("<span class='ripple'></span>");

		if (buttonWidth >= buttonHeight) {

			buttonHeight = buttonWidth;
		} else {
			buttonWidth = buttonHeight;
		}
		var x = e.pageX - posX - buttonWidth / 2;
		var y = e.pageY - posY - buttonHeight / 2;
		$(".ripple").css({
			width: buttonWidth,
			height: buttonHeight,
			top: y + 'px',
			left: x + 'px'
		}).addClass("rippleEffect");
	});
}
function init() {
    start();
}
module.exports = {
    init: init
};