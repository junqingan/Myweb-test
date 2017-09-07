function start() {
    var product_menu = $('#product-menu li'),
        product_list = $('#product-list .con');

    product_menu.click(function (e) {
        $(this).addClass('on').siblings().removeClass('on');
        product_list.eq($(this).index()).stop().fadeIn(1000).addClass('current').siblings().stop().fadeOut(1000).removeClass('current');
    });
}

function init() {
    start();
}
module.exports = {
    init: init
};