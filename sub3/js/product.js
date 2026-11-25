

$.ajax({
    url: './product.json',
    dataType: 'json',
    success: function (data) {
        var useData = data.product;  //객체배열을 담아놓는다. useData=>전체 상품배열

        function dataPrint(arr) {  //arr 매개변수

            var txt = '<ul>';

            for (var i in arr) {

                var $Name = arr[i].Name;
                var $Spec = arr[i].Spec;
                var $Descript = arr[i].Descript;
                var $Image = arr[i].Image;



                txt += '<li>';
                txt += '<img src="' + $Image + '" alt="">';
                txt += '<dl>';
                txt += '<dt>' + $Name + '</dt>';
                txt += '<dd>' + $Spec + '</dd>';
                txt += '</dl>';
                txt += '<a href="#" class="pop_open">MORE</a>';
                txt += '</li>';
            }

            txt += '</ul>';

            $('.product_list').html(txt);
            $('.count').html('총 <span>' + arr.length + '</span>개');

        };


        //초기실행, 함수호출
        dataPrint(useData);  //전체배열

        var newArray = [];       //검색된 제품 목록을 담을 곳
        var search_on = false;   //검색 안 했으면 false, 검색했으면 true
        $('#btn').click(function () { //검색버튼을 클릭하면
            /*
               var 객체배열 = 객체배열.filter(function(element){
                     return 조건절;  //조건에 만족하면 리턴
                   
               });
            */
            newArray = useData.filter(function (element) {
                //전체객체배열에서 Name 속성에 검색어 값을 포함하는 객체만 필터
                //console.log($('#title').val());
                //return element.Name == $('#title').val();
                return element.Name.includes($('#title').val());
            });
            //console.log(newArray);
            dataPrint(newArray);  //검색된 배열로 리스트 출력
            search_on = true;
            $('.cate button').removeClass('on');   //검색하면 카테고리 선택을 풀고
            $('.cate .all').addClass('on');          //「전체」에 on을 붙인다 (검색은 전체 제품에서 하니까)
        });
        //카테고리 버튼을 클릭하면
        $('.cate button').click(function () {
            $('.cate button').removeClass('on');   //모든 버튼에서 on을 뺀다
            $(this).addClass('on');                 //누른 버튼에만 on을 붙인다
                        var btn = $(this);                          //누른 버튼을 기억해 둔다
            if (btn.hasClass('all')) {                  //「전체」를 눌렀으면
                dataPrint(useData);                     //전체 목록 출력
                search_on = false;
            } else {                                    //다른 버튼을 눌렀으면
                newArray = useData.filter(function (element) {
                    return btn.hasClass(element.Cate);  //버튼 class와 Cate가 같은 제품만
                });
                dataPrint(newArray);                    //걸러진 목록 출력
                search_on = true;
            }
        });

        $('.btn_all').click(function () {  //모두보기
            dataPrint(useData);
        });
        //팝업처리 함수
        var pop_txt = '';
        function popchange(obj) {
            pop_txt = '';
            pop_txt += '<img src="' + obj.Image + '" alt="">';
            pop_txt += '<p>' + obj.Name + '</p>';
            pop_txt += '<span>' + obj.Spec + '</span>';
            pop_txt += '<em>' + obj.Descript + '</em>';
            $('.modal_box .pop_con').html(pop_txt);
        }
        //팝업창 열기
        $(document).on('click', '.pop_open', function (e) {
            e.preventDefault();
            $('.modal_box').fadeIn('slow');
            var ind = $(this).parent('li').index();
            if (search_on == false) {        //검색 안 했을 때
                popchange(useData[ind]);     //전체 목록에서 꺼냄
            } else {                         //검색했을 때
                popchange(newArray[ind]);    //검색된 목록에서 꺼냄
            }
        });
        //팝업창 닫기
        $('.close_pop, .modal_box').click(function (e) {
            e.preventDefault();
            $('.modal_box').fadeOut('fast');
        });
    }
});

