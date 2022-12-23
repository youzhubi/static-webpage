window.addEventListener("load", () => {
    // tab栏切换
    /* 
    需求：
        1.点击登录头部，当前点击对象有下划线，其他移除。
        2.并且切换显示相应的内容。
    */
    ;(function () {
        // 获取元素
        // 登录头部
        const tabNav = document.querySelector(".tab-nav")
        // 获取所有登录主体部分
        const tabPane = document.querySelectorAll(".tab-pane")
        // 点击登录头部切换显示的登录主体部分
        // 使用了事件委托
        tabNav.addEventListener("click", function (e) {
            // 如果点击的当前对象为a标签就切换显示内容
            if (e.target.tagName === "A") {
                // 排他思想
                // 删除旧的 添加新的
                tabNav.querySelector(".active").classList.remove("active")
                // 点击的当前对象添加
                e.target.classList.add("active")
                // 隐藏所有
                for (let i = 0; i < tabPane.length; i++) {
                    tabPane[i].style.display = "none"
                }
                // 再根据html里的自定义属性，把当前点击的对象显示
                tabPane[e.target.dataset.id].style.display = "block"
            }
        })
    })()

    // 登录
    ;(function () {
        // 点击登录跳转页面模块
        const form = document.querySelector("form")
        // 同意协议多选框
        const agree = document.querySelector("[name=agree]")
        // 用户名登录框
        const userNameInput = document.querySelector("[name=username]")
        // 用户密码框
        const passwordInput = document.querySelector("[name=password]")
        form.addEventListener("submit", function (e) {
            // 阻止表单默认提交行为
            e.preventDefault()
            // 判断是否勾选同意协议
            if (!agree.checked) {
                e.preventDefault()
                return alert("请勾选同意用户协议")
            } else {
                // find查找存储用户信息的数组里是否含有这个用户以及密码是否正确
                if (
                    userName.find((item) => userNameInput.value === item.uname) &&
                    userName.find((item) => passwordInput.value === item.password)
                ) {
                    // 密码正确本地存储记录当前用户名
                    localStorage.setItem("uname", userNameInput.value)
                    // 跳转到首页
                    location.href = "./index.html"
                } else {
                    // 登录失败提示信息
                    alert("用户名错误或密码错误，请重新输入")
                    // 清空信息
                    userNameInput.value = ""
                    passwordInput.value = ""
                    // 取消用户协议勾选
                    agree.checked = false
                }
            }
        })
    })()
})
