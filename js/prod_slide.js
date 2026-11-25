// 메인 「복원한 술법을 오늘의 술로」 제품 카드 넘기기
var prod_cnt = 0;                          // 지금 보이는 카드 번호 (0부터 시작)
var prod_total = $('.prod_list li').length; // 카드 개수 (3)
var prod_w = 424;                           // 카드 한 장의 폭

function prodMove(){
    $('.prod_list ul').stop().animate({marginLeft: -prod_w * prod_cnt}, 500);  // 카드 줄을 왼쪽으로 밀기
    $('.prod_page .cur').text('0' + (prod_cnt + 1));                            // 01 / 02 / 03 숫자 바꾸기
    $('.prod_bar span').stop().animate({left: 24 * prod_cnt}, 500);            // 주황 막대 옮기기
}

$('.prod_next').click(function(){
    prod_cnt++;
    if(prod_cnt >= prod_total){ prod_cnt = 0; }   // 마지막 다음은 처음으로
    prodMove();
});

$('.prod_prev').click(function(){
    prod_cnt--;
    if(prod_cnt < 0){ prod_cnt = prod_total - 1; } // 처음 이전은 마지막으로
    prodMove();
});
