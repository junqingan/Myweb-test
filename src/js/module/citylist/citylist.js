function start() {
    // var map = new BMap.Map("mapinit"); // 创建地图实例  
    // var point = new BMap.Point(121.481387, 31.236799); // 创建点坐标  
    // map.centerAndZoom(point, 12); // 初始化地图，设置中心点坐标和地图级别
    // map.enableScrollWheelZoom(false); //启用滚轮放大缩小，默认禁用
    // map.enableContinuousZoom(false); //启用地图惯性拖拽，默认禁用

    // var data_info = [
    //     [121.4823, 31.2198, "地址：北京市东城区王府井大街88号乐天银泰百货八层"],
    //     [121.6605, 31.2585, "地址：北京市东城区东华门大街"],
    //     [121.4122, 31.2345, "地址：北京市东城区正义路甲5号"]
    // ];
    // var opts = {
    //     width: 180, // 信息窗口宽度
    //     height: 80, // 信息窗口高度
    //     title: "信息窗口", // 信息窗口标题
    //     enableMessage: true //设置允许信息窗发送短息
    // };
    // for (var i = 0; i < data_info.length; i++) {
    //     var marker = new BMap.Marker(new BMap.Point(data_info[i][0], data_info[i][1])); // 创建标注
    //     var content = data_info[i][2];
    //     map.addOverlay(marker); // 将标注添加到地图中
    //     addClickHandler(content, marker);
    // }
    // var city = $('.city-tabin');
    // city.click(function (e) {
    //     var city = $(this).text();
    //     if (city != "") {
    //         map.centerAndZoom(city, 12);
    //     }
    // })

    // function addClickHandler(content, marker) {
    //     marker.addEventListener("click", function (e) {
    //         openInfo(content, e)
    //     });
    // }

    // function openInfo(content, e) {
    //     var p = e.target;
    //     var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
    //     var infoWindow = new BMap.InfoWindow(content, opts); // 创建信息窗口对象 
    //     map.openInfoWindow(infoWindow, point); //开启信息窗口
    // }
    var city_tabin = $('.city-tab li');
    city_tabin.click(function(e){
        $(this).addClass('active').siblings().removeClass('active');
        $('.store-list').eq($(this).index()).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
    })
}

function init() {
    start();
}
module.exports = {
    init: init
};