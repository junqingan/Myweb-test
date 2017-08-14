/**
 * 
 */
window.$ = require('jquery');
require('../utils/SuperSlide.js');
require('../utils/Flipster');
var homeController = require("../controllers/homeController").getInstance();
var indexLess = require('../../css/index.min.less');

homeController.init();