
$(function(){

    //在标签是添加class名‘fadeup’，执行动画由下往上淡入
    $('.fadeUp').each(function(i){
        if(isOverWin($(this))){
            $(this).css({
                'animation' : "fadeInUp "+(1.2)+"s",
                'opacity' : '1',
            }) 
        }else{
            $(this).css('opacity','0');
        }
    })
    //依次增加动画时间
    $('.fadeUpDelay').each(function(i){
        if(isOverWin($(this))){
            $(this).css({
                'animation' : "fadeInUp "+(0.7+i*0.2)+"s",
                'opacity' : '1',
            }) 
        }else{
            $(this).css('opacity','0');
        }
    })
    //超出屏幕底部200px的高度执行动画
    $('.fadeUpOver').each(function(i){
        if(isOverWinUnder($(this))){
            $(this).css({
                'animation' : "fadeInUp "+(1.2)+"s",
                'opacity' : '1',
            }) 
        }else{
            $(this).css('opacity','0');
        }
    })
})
$(window).scroll(function(){
    $('.fadeUp').each(function(i){
        if(isOverWin($(this))){
            $(this).css({
                'animation' : "fadeInUp "+(1.2)+"s",
                'opacity' : '1',
            }) 
        }
    })
    $('.fadeUpDelay').each(function(i){
        if(isOverWin($(this))){
            $(this).css({
                'animation' : "fadeInUp "+(0.7+i*0.2)+"s",
                'opacity' : '1',
            }) 
        }
    })
    //
    $('.fadeUpOver').each(function(i){
        if(isOverWinUnder($(this))){
            $(this).css({
                'animation' : "fadeInUp "+(1.2)+"s",
                'opacity' : '1',
            }) 
        }
    })
})

// 判断当前是否在视口显示;
// arg为当前元素
// overNum为自定义参数，不填默认为0，表示超出屏幕底部多少像素
function isOverWin(arg){
    return $(window).scrollTop() > arg.offset().top-($(window).height());
}
function isOverWinUnder(arg){
    return $(window).scrollTop() > arg.offset().top-($(window).height()) + 200;
}