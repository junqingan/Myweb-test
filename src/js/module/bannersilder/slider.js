require("../../utils/SuperSlide.js");

var sliderConfig = {
    mainCell: ".focus",
    autoPlay: true,
    effect: "fade",
    interTime: '3500',
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