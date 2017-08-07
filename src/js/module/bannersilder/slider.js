require("../../utils/SuperSlide.js");

var sliderConfig = {
    mainCell: ".focus",
    autoPlay: true,
    effect: "fold",
    interTime: '3000',
    easing:"easeInQuint", 
};

function start() {
    $('#banner').map(function() {
        if ($(this).find('.item').length > 1) {
            $(this).slide(sliderConfig);
        }
    });
}
function init() {
    start();
}
module.exports = {
    init: init
};