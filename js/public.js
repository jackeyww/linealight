$(function () {
    //头部导航切换效果
    $('.headMenu .item').parent().hover(function () {
        $(this).children('.item').stop().slideDown("300");
    }, function () {
        $(this).children('.item').stop().slideUp("300");
    })
})
$(window).scroll(function () {
    var scrollY = $(document).scrollTop();
    if (scrollY > 20) {
        //压缩
        headCompress();
        if ($('.to-top')) {
            $('.to-top').show();
            $('.to-top').click(function () {
                $('body,html').stop().animate({
                    scrollTop: $('body').offset().top
                }, 1000);
            })
        }

    } else {
        //复原
        headreCovery();
        if($('.to-top')){
            $('.to-top').hide();
        }
    }
})

function headCompress() {
    $('#header').css({
        "height": "70px",
        "background": "#000",
    });
    $('#header .headMenu .menu').css('line-height', '70px');

    $('.header-gray').css({
        "height": "70px",
        "background": "#000",
    });
    $('.header-gray .headMenu .menu').css('line-height', '70px');
}

function headreCovery() {
    $('#header').css({
        "height": "80px",
        "background": "none",
    });
    $('#header .headMenu .menu').css('line-height', '80px');
    $('.header-gray').css({
        "height": "80px",
        "background": "#202020",
    });
    $('.header-gray .headMenu .menu').css('line-height', '80px');
}