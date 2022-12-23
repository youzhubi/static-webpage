window.addEventListener("load", () => {
    // 顶部导航栏隐藏模块
    // 到页面滑动到主导航时 显示隐藏导航栏模块
    // 获取主导航栏
    const gogoHeader = document.querySelector(".gogo_header")
    // 获取隐藏的导航栏模块
    const big = document.querySelector(".big-hiddenHeader")
    //给页面绑定滚动事件
    window.addEventListener("scroll", function () {
        // 如果滑动到主导航就显示隐藏的导航栏
        if (document.documentElement.scrollTop >= gogoHeader.offsetTop) {
            big.classList.add("show")
        } else {
            big.classList.remove("show")
        }
    })
})
