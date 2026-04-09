$(function () {
    $(".open_btn").click(function () {
        $(".m_menu_wrap").css({
            'left': '50vw',
            'transition': 'left 0.3s'
        })
    })
    $(".close_btn").click(function () {
        $(".m_menu_wrap").css({
            'left': '100vw',
            'transition': 'left 0.3s'
        })
    })
    $(".m_menu li a").click(function () {
        $(".m_menu_wrap").css({
            'left': '100vw',
            'transition': 'left 0.3s'
        })
    })

    // hamberger end

    // # 링크 새로고침 방지
    $('a[href="#"]').click(function (e) {
        e.preventDefault();
    });






    // tab

    $(".board>li>a").click(function () {
        $(this).parent().addClass("on").siblings().removeClass("on")
    })
    $(".market_board>li>a").click(function () {
        $(this).parent().addClass("on").siblings().removeClass("on")
    })


})
