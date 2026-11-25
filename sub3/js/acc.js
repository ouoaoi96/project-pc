var acc = $('.acc li');

$('.acc .tit a').click(function(e){
    e.preventDefault();
    var myLi = $(this).parents('li');

    if(myLi.hasClass('hide')){
        acc.find('.con').slideUp(500);
        acc.removeClass('show').addClass('hide');
        acc.find('.material-symbols-outlined').text('expand_more');

        myLi.removeClass('hide').addClass('show');
        myLi.find('.con').slideDown(500);
        myLi.find('.material-symbols-outlined').text('expand_less');
    } else {
        myLi.removeClass('show').addClass('hide');
        myLi.find('.con').slideUp(500);
        myLi.find('.material-symbols-outlined').text('expand_more');
    }
});