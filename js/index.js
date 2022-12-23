window.addEventListener("load", () => {


    // 模块一使用jQuery制作轮播图
    ;(function () {
        // 获取元素
        const $gogoBanner = $(".gogo_banner")
        // 前后按钮
        const $prev = $(".gogo_banner .prev")
        const $next = $(".gogo_banner .next")
        // 图片
        const $pic = $(".gogo_banner ul li")
        // 小圆点
        const $circle = $(".gogo_banner .indicator span")
        // 记录初始索引   $pic.index()值为0
        let indexNow = $pic.index()
        // 定时器
        let timeId
        // 图片切换
        function fnFade(i) {
            // 当前图片添加active（也就是显示）其余移除类（也就是隐藏）
            $pic.eq(i).addClass("active").siblings().removeClass("active")
            // 当前小圆点添加active其余移除类
            $circle.eq(i).addClass("active").siblings().removeClass("active")
        }
        // 自动播放功能  使用用了递归，也就是函数自己调用自己
        function autoPlay() {
            // 调用图片切换函数
            fnFade(indexNow)
            timeId = setTimeout(function () {
                // 由于indexNow值为0所以加1
                indexNow = (indexNow + 1) % $pic.length
                autoPlay()
            }, 2000)
        }
        autoPlay()
        // 鼠标移入移出 清除启用定时器
        $gogoBanner.hover(
            function () {
                clearTimeout(timeId)
            },
            function () {
                autoPlay()
            }
        )
        // 点击切换下一张图片
        $next.click(function () {
            // 操作当前索引，改变当前显示的图片
            indexNow = (indexNow + 1) % $pic.length
            fnFade(indexNow)
        })
        // 点击切换上一张图片
        $prev.click(function () {
            indexNow = (indexNow - 1) % $pic.length
            fnFade(indexNow)
        })
    })()

    // 模块二 显示电梯导航以及返回顶部按钮功能
    ;(function () {
        // 当页面滚动大于300像素的距离时候，就显示侧边栏，否则隐藏侧边栏
        // ①：需要用到页面滚动事件
        // ②：检测页面被卷去的头部，如果大于300，就让侧边栏显示
        // ③：显示和隐藏配合css过渡，利用opacity加渐变效果
        // 获取元素
        const elevator = document.querySelector(".gogo-elevator")
        // 返回顶部
        const backTop = document.querySelector("#backTop")
        // 绑定滚动事件
        window.addEventListener("scroll", function () {
            // 判断滚动距离
            elevator.style.opacity = document.documentElement.scrollTop >= 300 ? "1" : "0"
        })
        // 返回顶部按钮
        backTop.addEventListener("click", function () {
            document.documentElement.scrollTop = scrollTo(0, 0)
        })
    })()

    // 模块三模块四电梯按钮
    ;(function () {
        //点击不同的模块，页面可以自动跳转不同的位置
        // ①：页面滚动到对应位置，导航显示，否则隐藏模块
        // ②：点击导航对应小模块，页面 会跳到对应大模块位置
        // ③：页面滚动到对应位置，电梯导航对应模块自动发生变化
        // 点击每个小模块添加active 删除之前的active
        // 获取元素
        const list = document.querySelector(".gogo-elevator-list")
        list.addEventListener("click", function (e) {
            // 排除顶部
            if (e.target.tagName === "A" && e.target.tagName) {
                //先获取active类然后再判断 是否有active
                const old = document.querySelector(".gogo-elevator-list li a.current")
                if (old) old.classList.remove("current")
                e.target.classList.add("current")
                // ②：点击导航对应小模块，页面 会跳到对应大模块位置
                //  这里使用自定义属性 可以发现 大模块 的后面名字和自定义属性相同
                const top = document.querySelector(`.gogo_goods_${e.target.dataset.name}`).offsetTop
                // 在使用显示比例缩放的系统上，scrollTop可能会提供一个小数。
                document.documentElement.scrollTop = top + 1
            }
        })
        // 模块分析3：页面滚动到大盒子位置，电梯导航小盒子对应模块自动处于选中状态
        // ①： 当页面滚动了，先移除所有小li的状态
        // ②： 因为页面滚动需要不断获取大盒子的位置，所以需要把所有的大盒子都获取过来
        // ③： 开始进行滚动判断
        //         - 如果页面滚动大于 新鲜好物大盒子的offsetTop 并且小于 人气推荐盒子的offsetTop 就把
        //       对应的小盒子先出来添加类
        //         - 依次类推
        //         - 最后一个，如果大于等于最新专题模块， 就选出最后一个对应小盒子（更精确

        window.addEventListener("scroll", function () {
            // 移除之前的active
            const old = document.querySelector(".gogo-elevator-list .current")
            if (old) old.classList.remove("current")
            // 获取元素
            const news = document.querySelector(".gogo_goods_new")
            const popular = document.querySelector(".gogo_goods_popular")
            const brand = document.querySelector(".gogo_goods_brand")
            const topic = document.querySelector(".gogo_goods_topic")
            // 得到当前被卷去的值
            const n = document.documentElement.scrollTop
            if (Math.round(n) >= news.offsetTop && n < popular.offsetTop) {
                document.querySelector("[data-name=new]").classList.add("current")
            } else if (Math.round(n) >= popular.offsetTop && n < brand.offsetTop) {
                document.querySelector("[data-name=popular]").classList.add("current")
            } else if (Math.round(n) >= brand.offsetTop && n < topic.offsetTop) {
                document.querySelector("[data-name=brand]").classList.add("current")
            } else if (Math.round(n) >= topic.offsetTop) {
                document.querySelector("[data-name=topic]").classList.add("current")
            }
        })
    })()
})
