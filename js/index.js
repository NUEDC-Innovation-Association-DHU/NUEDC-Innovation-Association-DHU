$(document).ready(function(){
    var window_w = $(window).width(); // Window Width
    var window_h = $(window).height(); // Window Height
    var window_s = $(window).scrollTop(); // Window Scroll Top
    // On Resize
    $(window).resize(function(){
        window_w = $(window).width();
        window_h = $(window).height();
        window_s = $(window).scrollTop();
    });
    // On Scroll
    $(window).scroll(function(){
        window_s = $(window).scrollTop();
    });

    // 导航动画
    enableBackToTop(); // Back to top button
    digitalScrol(); //数字变化开始,窗口显示才加载
    // mobile(); //手机设备的简单适配
    fixedNav(); //固定导航

    function enableBackToTop() {
        $('#button-to-top').hide();
        $(window).scroll(function() {
            if (window_s > 100) {
                $('#button-to-top').fadeIn(300);
            } else {
                $('#button-to-top').fadeOut(300);
            }
        });
        $('#button-to-top').click(function(e) {
            e.preventDefault();
            $('body,html').animate({ scrollTop: 0 }, 600);
        });
    }

    // 数字变化开始
    //窗口显示才加载
    function digitalScrol(){
        if ($(".index-keywords").length>0) {
            var wrapTop = $(".index-keywords").offset().top;
        }
        var istrue = true;
        $(window).on("scroll",function() {
            var s = $(window).scrollTop();
            if (s > wrapTop - 500 && istrue) {
                $(".timer").each(count);
                function count(a) {
                    var b = $(this);
                    a = $.extend({},
                    a || {},
                    b.data("countToOptions") || {});
                    b.countTo(a)
                };
                istrue = false;
            };
        })
        //自定义格式
        $('#count-number').data('countToOptions',{
            formmatter:function(value, options){
                return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
            }
        });
        //定时器
        $('.timer').each(count);
        function count(options){
            var $this=$(this);
            options=$.extend({}, options||{}, $this.data('countToOptions')||{});
            $this.countTo(options);
        }
    }
    // 数字变化结束

    // 固定导航
    function fixedNav(){
        $(window).scroll(function() {
            var scTop = $(document).scrollTop();
            if (scTop > 10) {
                $("header").addClass('header-fixed');
                $('.headerTemp').css('display', 'block');
            } else{
                $("header").removeClass('header-fixed')
                $('.headerTemp').css('display', 'none');
            }
        });
    }  

});
