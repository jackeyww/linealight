

$(function(){
    var $container = $('#masonry');
    $container.imagesLoaded(function() {
        $container.masonry({
            itemSelector: '.imgbox',
            isAnimated: true,
        });
    });
});
