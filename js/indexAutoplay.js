/* 
    使用swiper插件实现无缝自动轮播。
        - 解决鼠标移入时不能立即暂停的情况
*/
// 实例化swiper对象并且配置
var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        loop: true,
        slidesPerView: 5,
        noSwiping: true,
        speed: 2000,
        freeMode: true,
        reverseDirection: true,
    })

    // 存放鼠标悬浮时的transform属性（行内属性）
    let nextTransForm = ""
    // 轮播图从暂停位置移动到原本应到的位置所用的时间
    let nextTime = 0
    // 鼠标悬浮暂停轮播
    this.swiper.el.onmouseenter = function () {
        nextTransForm = document
            .getElementsByClassName("mySwiper")[0]
            .getElementsByClassName("swiper-wrapper")[0].style.transform
        // 轮播图原本应移动到的位置
        let nextTransPosition =
            -1 *
            parseInt(
                document
                    .getElementsByClassName("mySwiper")[0]
                    .getElementsByClassName("swiper-wrapper")[0]
                    .style.transform.split("translate3d(")[1]
                    .split("px")[0]
            )

        // 鼠标悬浮时时轮播图位置
        let nowTransPosition =
            -1 *
            parseInt(
                window
                    .getComputedStyle(
                        document
                            .getElementsByClassName("mySwiper")[0]
                            .getElementsByClassName("swiper-wrapper")[0],
                        false
                    )
                    ["transform"].split("1, ")[2]
                    .split(",")[0]
            )
        // 存放鼠标悬浮时轮播图的真实transform属性（非行内属性）
        let nowTransForm = window.getComputedStyle(
            document
                .getElementsByClassName("mySwiper")[0]
                .getElementsByClassName("swiper-wrapper")[0],
            false
        )["transform"]
        // 计算轮播图从暂停位置移动到原本应到的位置所用的时间（216是自定义的slide的宽度）
        nextTime = 2000 * ((nextTransPosition - nowTransPosition) / 216)
        // 改变行内transform属性
        document
            .getElementsByClassName("mySwiper")[0]
            .getElementsByClassName("swiper-wrapper")[0].style.transform = nowTransForm
    }
    // 鼠标离开轮播图开始轮播
    this.swiper.el.onmouseleave = function () {
        // console.log("leave" + nextTransForm)
        // 恢复原样
        document
            .getElementsByClassName("mySwiper")[0]
            .getElementsByClassName("swiper-wrapper")[0].style.transform = nextTransForm
        document
            .getElementsByClassName("mySwiper")[0]
            .getElementsByClassName("swiper-wrapper")[0].style.transitionDuration = nextTime + "ms"
        this.swiper.autoplay.start()
    }
