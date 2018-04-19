var Nav = require("../module/nva/nav.js"),
    banner = require("../module/bannersilder/slider"),
    goToTop = require("../module/gotop/gotop"),
    citylist = require("../module/citylist/citylist"),
    product = require("../module/product/product");

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
    this.initgoToTop();
    this.initcitylist();
    this.initProduct();
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
/**
 * gototop
 */
Home.prototype.initgoToTop = function() {
    goToTop.init({
        divContainerId: "#sidebar-nav",
        time: 500
    });
};
/**
 * citylist
 */
Home.prototype.initcitylist = function() {
    citylist.init();
};
/**
 * 产品列表
 */
Home.prototype.initProduct = function() {
    product.init();
};

var instance;

module.exports = {
    'getInstance': function(options) {
        return instance || (instance = new Home(options));
    }
};