/**
 * @file 返回顶部
 * @author [pelexiang]
 * @email [pelexiang@pptv.com]
 * @create date 2017-08-08 09:58:25
 * @modify date 2017-08-08 09:58:25
 * @desc [回到顶部]
 */


var GotoTop = function() {
    this.onTop = $.Callbacks();
    this.options = {
        time: 1200,
        // 跳回速度
        divContainerId: ""
            // div容器
    }
}

GotoTop.prototype = {
    init: function(opt) {
        var opt = $.extend(this.options, opt);
        var self = this,
            doc = document,
            body = doc.getElementsByTagName('body')[0],
            divContainer = $(opt.divContainerId)[0],
            cRight = 10,
            cWidth = 134,
            scrollTop = function(v) {
                if (v === undefined) {
                    return document.body.scrollTop || document.documentElement.scrollTop;
                } else {
                    document.body.scrollTop = v;
                    document.documentElement.scrollTop = v;
                }
            },
            WIDTH = 60;
        var requestAnimFrame = (function() {
            return window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.oRequestAnimationFrame ||
                window.msRequestAnimationFrame ||
                function(callback, element) {
                    window.setTimeout(callback, 1000 / 30);
                };
        })();

        var mine = function(t, b, c, d) {
            if (c > b) {
                return (c - b) * t / d * t / d;
            } else {
                return b - (b - c) * t / d * t / d;
            }
        }

        function addEvent(target, type, fn) {
            if (target.attachEvent) {
                target.attachEvent("on" + type, fn);
            } else if (target.addEventListener) {
                target.addEventListener(type, fn, false);
            }
        }

        function removeEvent(target, type, fn) {
            if (target.addEventListener) {
                target.removeEventListener(type, fn);
                return true;
            } else if (target.attachEvent) {
                target.detachEvent("on" + type, fn);
                return true;
            } else {
                return false;
            }
        }

        function animate(element, css, from, to, time, cb) {
            time = time || 800; // 默认0.8秒 
            var style = element.style,
                start;
            var setStyle = typeof css !== 'function' ? function(v) {
                style[css] = v + 'px';
            } : function(v) {
                css(element, v);
            };

            function go(timestamp) {
                if (timestamp === undefined) {
                    timestamp = new Date() - 0;
                }
                if (start === undefined) {
                    start = timestamp;
                }
                var progress = timestamp - start;
                if (progress >= time) {
                    setStyle(to);
                    cb && cb();
                    return;
                }
                var now = mine(progress, from, to, time);
                setStyle(now);
                requestAnimFrame(go);
            }
            setStyle(from);
            requestAnimFrame(go);
        }
        var style = divContainer.style;

        function flyToSky() {
            style.top = 'auto';
            style.bottom = 10 + 'px';
            style.position = 'fixed';

            var st = scrollTop();
            animate(body, function(el, v) {
                scrollTop(v);
            }, st, 0, opt.time, function() {
                animate(divContainer, 'bottom', 10, document.documentElement.clientHeight, 1000, function() {
                    style.bottom = 10 + 'px';
                    style.display = 'none';
                    self.onTop.fire();
                })
            });
        }
        addEvent(divContainer, 'click', flyToSky)


        var timeout1;

        //首页要求停留在
        var pageIswwwIndex = window.pageIswwwIndex || false;
        var footOffsetTop;
        var maxTop = !pageIswwwIndex ? function() {
            return 999999
        } : function() {
            footOffsetTop = footOffsetTop || $('body > div.wp-grid').offset().top;
            setTimeout(function() {
                footOffsetTop = null
            }, 500);
            return footOffsetTop;
        }

        var divHeight = divContainer.clientHeight;

        function onscroll() {
            clearTimeout(timeout1);
            var divContainerStyle = function(w) {
                if (divContainer) {
                    if (maxTop() <= (doc.body.scrollTop || doc.documentElement.scrollTop) + doc.documentElement.clientHeight) {
                        style.display = 'block';
                        style.position = 'absolute';
                        style.right = 10 + '%';
                        style.bottom = 'auto';
                    } else if ((doc.body.scrollTop || doc.documentElement.scrollTop) > doc.documentElement.clientHeight) {
                        style.display = 'block';
                        style.position = 'fixed';
                        style.bottom = 10 + 'px';
                        style.left = 50 + '%';
                        style.marginLeft = 580 + 'px';
                        style.top = 'auto';
                    } else {
                        style.display = 'none';
                    }
                }
            }
            timeout1 = setTimeout(function() {
                divContainerStyle(doc.documentElement.clientWidth)
            }, 50);
        }
        onscroll();
        addEvent(window, 'scroll', onscroll);
    },
    onTop: function(fn) {
        self.onTop.add(fn);
    }
}

module.exports = new GotoTop();