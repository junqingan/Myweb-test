var Nav = require("../module/nva/nav.js"),
	banner = require("../module/bannersilder/slider");

var Home = function() {
    this.options = {};
    this.redianM = null, this.redianC = null;
};

/**
 * 初始化
 * @param options Object 参数传递
 */
Home.prototype.init = function(options) {
    $.extend(this.options, options);
    this.initNav();
    this.initbanner();
}

/**
 * 导航动态点击
 */
Home.prototype.initNav = function() {
    Nav.init();
};
/**
* banner
*/
Home.prototype.initbanner = function() {
    banner.init();
};



var instance;

module.exports = {
    'getInstance': function(options) {
        return instance || (instance = new Home(options));
    }
};