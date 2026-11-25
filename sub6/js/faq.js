

var article = $('.faq .article');

article.find('span').html('<i class="fas fa-chevron-down"></i>');
//$('.faq .article:first').find('.a').slideDown(100);
//$('.faq .article:first').find('span').html('<i class="fas fa-chevron-down"></i>');

$('.faq .article .trigger').click(function(e){
    e.preventDefault();
    console.log(333)
    var myArticle = $(this).parents('.article');
    console.log(myArticle)

    if(myArticle.hasClass('hide')){
        console.log(111)
        article.find('.a').slideUp(500);
        article.removeClass('show').addClass('hide');
        article.find('span').html('<i class="fas fa-chevron-down"></i>');

        myArticle.removeClass('hide').addClass('show');
        myArticle.find('.a').slideDown(500);
        myArticle.find('span').html('<i class="fas fa-chevron-up"></i>');
    } else {
        console.log(222)
        myArticle.removeClass('show').addClass('hide');
        myArticle.find('.a').slideUp(500);
        myArticle.find('span').html('<i class="fas fa-chevron-down"></i>');
    }
});


$('.all').toggle(function(e){
        e.preventDefault();
        article.find('.a').slideDown(500);
        article.removeClass('hide').addClass('show');
        article.find('span').html('<i class="fas fa-chevron-up"></i>');
        $(this).text('모두닫기');

},function(e){
        e.preventDefault();
        article.find('.a').slideUp(500);
        article.removeClass('show').addClass('hide');
        article.find('span').html('<i class="fas fa-chevron-down"></i>');
        $(this).text('모두열기');
})