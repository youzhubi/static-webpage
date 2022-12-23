window.addEventListener("load", function () {
    // 顶部导航登录和登出部分
    ;(function () {
        // 获取第一个li 用户名
        const userNameLi = document.querySelector(".gogo_navs li:first-child")
        // 第二个li登录成功就显示退出登录
        const logoff = userNameLi.nextElementSibling
        // 渲染数据
        function render() {
            // 检查是否登录
            if (localStorage.getItem("uname")) {
                userNameLi.innerHTML = `
                <a href="javascript:;">
                  <div class="pic"><img src="./icon.png" alt=""></div>${localStorage.getItem("uname")}
                </a>`
                logoff.innerHTML = `<a href="./index.html">退出登录</a>`
            } else {
                userNameLi.innerHTML = ` <a href="./login.html">请先登录</a>`
                logoff.innerHTML = `<a href="#">免费注册</a>`
            }
        }
        render()
        // 退出登录
        logoff.addEventListener("click", function () {
            localStorage.removeItem("uname")
            render()
        })
    })()
})