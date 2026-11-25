function count_ani(target, endNum){
    $({ val: 0 }).animate({ val: endNum }, {
        duration: 1500,  //애니메이션의 시간 1500-1.5초
        step: function () {
            var number = Math.floor(this.val);  //정수만 추출
            $(target).text(number);
        },
        complete: function () {
            $(target).text(endNum);
        }
    });
}
//처음엔 숫자를 0으로
$('.record strong').text(0);

//스크롤 처리코드
var count_top = $('.record').offset().top;  //옹기색 띠의 위치
var count_done = false;                      //아직 안 돌았으면 false

$(window).on('scroll', function(){
    var scroll_top = $(window).scrollTop();

    if(scroll_top > count_top - 600 && count_done == false){
        count_done = true;
        count_ani('.record li:eq(0) strong', 600);
        count_ani('.record li:eq(1) strong', 24);
        count_ani('.record li:eq(2) strong', 2008);
    }
});