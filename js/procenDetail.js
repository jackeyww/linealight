
$(function(){
    var proSwiper = new Swiper('.proSwiper', {
        speed: 1000,
        loop: false,
        pagination: {
            el: '.pro-page',
            clickable: true,
            renderBullet: function (index, className) {
                return "<div class= " + className + "><img src=" + $(".swiper-slide img").eq(index).attr(
                    'src') + "></div>";
            },
        },
        navigation: {
            nextEl: '.page-next',
            prevEl: '.page-prev',
        },
        on: {
            slideChangeTransitionStart: function(){
                let index = this.realIndex;
                navigationShow(index);
            },
        },
    })
    
        let index = proSwiper.realIndex;
        navigationShow(index);
    
})
    
    function navigationShow(index){
        var length = $('.swiper-slide').length-1;
        if(index == 0){
            $('.page-prev').removeClass('pageControl');
        }else{
            $('.page-prev').addClass('pageControl');
        }
        if(index == length){
            $('.page-next').removeClass('pageControl');
        }else{
            $('.page-next').addClass('pageControl');
            console.log($('.page-next'))
        }
    }
    
$(window).resize(function(){

})