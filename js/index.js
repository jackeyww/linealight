$(document).ready(function () {

    // banner轮播图
    var mySwiper = new Swiper('.swiper-container', {
        speed: 1000,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        on: {
            slideChangeTransitionStart: function () {
                var index = this.realIndex;
                prevImgShow(index);
                nextImgShow(index);
            },
        },
    })
    // 热销产品轮播图
    var myProSwiper = new Swiper('.swiper-container-pro', {
        speed: 1000,
        loop: true,
        slidesPerView: 3,
        spaceBetween: 50,
        pagination: {
            el: '.swiper-pagination-pro',
            clickable: true,
            dynamicBullets: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + '<span class="dot"></span>' + '</span>';
            },
        },
        // autoplay:{
        //     delay:3000,
        //     disableOnInteraction: false,
        // }
    })
    // 案例展示轮播图
    var myCaseSwiper = new Swiper('.swiper-container-case', {
        speed: 800,
        loop: true,
        slidesPerView: 2,
        spaceBetween: 50,
        // autoplay:{
        //     delay:3000,
        //     disableOnInteraction: false,
        // }
        navigation: {
            nextEl: '.case-btn-next',
            prevEl: '.case-btn-prev',
        },
        on: {
            slideChangeTransitionStart: function () {
                var index = this.realIndex;
                if (index % 2 == 0) {
                    // console.log(index)
                    // $(".case-pagenation span").removeClass('active');
                    // $(".case-pagenation span").eq(index/2).addClass('active');
                }
            },
        },
    })
    // 案例展示分页器
    $(".case-pagenation span").click(function () {
        var index = $('.case-pagenation span').index($(this)) * 2;
        myCaseSwiper.slideTo(index);
        console.log(index);
        $(".case-pagenation span").removeClass('active');
        $(".case-pagenation span").eq(index / 2).addClass('active');
    })
    var myProgramSwiper = new Swiper('.swiper-container-program', {
        speed: 1000,
        loop: true,
        slidesPerView: 2,
        spaceBetween: 50,
        pagination: {
            el: '.swiper-page-programe',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + '<span class="dot"></span>' + '</span>';
            },
        },
        // autoplay:{
        //     delay:3000,
        //     disableOnInteraction: false,
        // }
    })

    init();

    $('.swiper-pagination .swiper-pagination-bullet').each(function (i) {
        $('.swiper-pagination .swiper-pagination-bullet').eq(i).text('0' + (i + 1));
    })

    $('.swiper-button-prev').click(function () {
        var index = mySwiper.realIndex;
        prevImgShow(index);
    })
    $('.swiper-button-next').click(function () {
        var index = mySwiper.realIndex;
        nextImgShow(index);
    })
    //展示上一张图片缩略图
    function prevImgShow(index) {
        if (index == 0) {
            index = 2;
        } else {
            index--;
        }
        var newSrc = $('.swiper-slide img').eq(index + 1).attr('src');
        $('.prevImgBox img').eq(index).attr('src', newSrc);
        $('.prevImgBox li').removeClass('active');
        $('.prevImgBox li').eq(index).addClass('active');
    }
    //展示下一张图片缩略图
    function nextImgShow(index) {
        if (index != 2) {
            index++;
        } else {
            index = 0;
        }
        var newSrc = $('.swiper-slide img').eq(index + 1).attr('src');
        $('.nextImgBox img').eq(index).attr('src', newSrc);
        $('.nextImgBox li').removeClass('active');
        $('.nextImgBox li').eq(index).addClass('active');
    }

    $('.swiper-button-prev').hover(function () {
        $(".prevImgBox").stop().animate({
            "width": "130px",
        }, "250");
    }, function () {
        $(".prevImgBox").stop().animate({
            "width": "0px",
        }, "250");
    })

    $('.swiper-button-next').hover(function () {
        $(".nextImgBox").stop().animate({
            "width": "130px",
        }, "250");
    }, function () {
        $(".nextImgBox").stop().animate({
            "width": "0px",
        }, "250");
    })
    //初始化
    function init() {
        var index = mySwiper.realIndex;
        prevImgShow(index);
        nextImgShow(index);
        tabMenuFit();
        $('.customized .content').height($('.customized .content .active').height());
        $(".customized .content li").css('opacity', '0.08');
        $(".customized .content .active").css('opacity', '1');

        //瀑布流
        $(function () {
            var $container = $('#masonry');
            $container.imagesLoaded(function () {
                $container.masonry({
                    itemSelector: '.imgbox',
                    isAnimated: true,
                });
            });
        });
    }

})
//窗口尺寸变化，自适应
$(window).resize(function () {
    tabMenuFit();
    $('.customized .content').height($('.customized .content .active').height());
})
//高级定制-选项卡
$(".customized .tabmenu li").mouseenter(function () {
    var offTop = $('.customized .tabmenu li a').position().top;
    var offLeft = $('.customized .tabmenu li a').position().left;
    var index = $(".customized .tabmenu li").index($(this));
    var h = $('.customized .tabmenu li').height();
    $(this).prevAll('.tabmenu .bg').css({
        'top': offTop + h * index,
        'left': offLeft,
    })
    $(".customized .tabmenu li a").css('color', '#f0f0f0');
    $(this).children('a').css('color', '#333');
})
$(".customized .tabmenu li").click(function () {

    //去除初始动画
    $(".customized .content li").css('animation', '');
    $(".customized .content li .littleImg").css('animation', '');
    $(".customized .content li").removeClass("fadeUpOver");
    $(".customized .content li .littleImg").removeClass("fadeUpOver");

    $(".customized .tabmenu li").removeClass('check');
    $(this).addClass('check');
    var index = $(".customized .tabmenu li").index($(this));
    $(".customized .content li").removeClass('active');
    $(".customized .content li").eq(index).addClass('active');

    $(".customized .content li").stop().animate({
        'opacity': '0.08',
    }, 800)
    $(".customized .content .active").stop().animate({
        'opacity': '1',
    }, 800)

})
$(".customized .tabmenu").mouseleave(function () {
    tabMenuFit();
    $(".customized .tabmenu li a").css('color', '#f0f0f0');
    $(".customized .tabmenu .check a").css('color', '#333');
})
//选项卡的背景自适应，屏幕改变大小，始终贴合选项
function tabMenuFit() {
    var offTop = $('.customized .tabmenu li a').position().top;
    var offLeft = $('.customized .tabmenu li a').position().left;
    var index = $(".customized .tabmenu li").index($(".customized .tabmenu .check"));
    var h = $('.customized .tabmenu .check').height();
    $(".customized .tabmenu .check").prevAll('.tabmenu .bg').css({
        'top': offTop + index * h + 'px',
        'left': offLeft + 'px',
    })
}
// 为了让数字滚动动画只执行一次
once = true;
$(window).scroll(function () {
    if (once && isOverWinUnder($('.dataShow'))) {
        // 数字滚动动画
        $('.timer').each(count);
        once = false;
    }
})

function isOverWinUnder(arg) {
    return $(window).scrollTop() > arg.offset().top - $(window).height() + 200;
}