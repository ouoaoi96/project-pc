//탭에서도 쓰도록 바깥에 선언
var pos1, map1, pos2, map2;

window.onload = function () {
    /* 본사 - 강원도 횡성군 둔내면 강변로 97 */

    pos1 = new kakao.maps.LatLng(37.4893, 128.2578);

    map1 = new kakao.maps.Map(document.getElementById('map1'), {
        center: pos1,
        level: 4
    });

    map1.addControl(new kakao.maps.MapTypeControl(), kakao.maps.ControlPosition.TOPRIGHT);
    map1.addControl(new kakao.maps.ZoomControl(), kakao.maps.ControlPosition.RIGHT);

    new kakao.maps.Marker({ position: pos1 }).setMap(map1);




    /* 서울사무소 - 서울특별시 강남구 봉은사로 641 */

    pos2 = new kakao.maps.LatLng(37.51556808748516, 127.06554338748157);

    map2 = new kakao.maps.Map(document.getElementById('map2'), {
        center: pos2,
        level: 4
    });

    map2.addControl(new kakao.maps.MapTypeControl(), kakao.maps.ControlPosition.TOPRIGHT);
    map2.addControl(new kakao.maps.ZoomControl(), kakao.maps.ControlPosition.RIGHT);

    new kakao.maps.Marker({ position: pos2 }).setMap(map2);
}
