function start() {
    var product_menu = $('#product-menu li'),
        product_list = $('#product-list .con');

    product_menu.click(function (e) {

        $(this).addClass('on').siblings().removeClass('on');

        product_list.eq($(this).index()).stop().addClass('current').siblings().stop().removeClass('current');
        var nosss = $(".current ul").text();
        if (nosss == null || nosss.length == 0) {
           
            $(".current ul").addClass('no-list');
        } else {

        }
    });


    $(function () {
        $.getJSON("../../../json/pro-list.json", function (data) {
            var cHtml = "";
            for (var i = 0; i < data.length; i++) {
                cHtml +=
                    '<li>' +
                    '<a href="javascript:;">' +
                    '<p class="txt">' + data[i].name + '</p>' +
                    '<img class="food_pic" src=' + data[i].img_sm + '>' +
                    '</a>' +
                    '</li>';
            }
            $(".hoslist").html(cHtml); //将数据增加到页面中
            $("div.holder").jPages({
                containerID: "itemContainer ",
                previous: "上一页",
                next: "下一页",
                perPage: 16
            })
        })
    });
    // 寿司单品渲染
    $(function () {
        $.getJSON("../../../json/pro-shousilist.json", function (data) {
            var cHtml = "";
            for (var i = 0; i < data.length; i++) {
                cHtml +=
                    '<li>' +
                    '<a href="javascript:;">' +
                    '<p class="txt">' + data[i].name + '</p>' +
                    '<img class="food_pic" src=' + data[i].img_sm + '>' +
                    '</a>' +
                    '</li>';
            }
            $("#shousilist").html(cHtml); //将数据增加到页面中
        })
    });

    // 酒水列表渲染
    $(function () {
        $.getJSON("../../../json/pro-jiushui.json", function (data) {
            var cHtml = "";
            for (var i = 0; i < data.length; i++) {
                cHtml +=
                    '<li>' +
                    '<a href="javascript:;">' +
                    '<p class="txt">' + data[i].name + '</p>' +
                    '<img class="food_pic" src=' + data[i].img_sm + '>' +
                    '</a>' +
                    '</li>';
            }
            $("#jiushui").html(cHtml); //将数据增加到页面中
        })
    })

}

function init() {
    start();
}
module.exports = {
    init: init
};