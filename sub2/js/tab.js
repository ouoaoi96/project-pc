$('#content .tab_content>section:eq(0)').show();

$('.key_visual ul li a').click(function(e){
    e.preventDefault();

    var ind = $(this).index('.key_visual ul li a');  // 0 1

    $('#content .tab_content>section').hide();
    $('#content .tab_content>section:eq('+ ind +')').show();

    $('.key_visual ul li a').removeClass('active');
    $(this).addClass('active');
});