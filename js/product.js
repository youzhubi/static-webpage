window.addEventListener("load", () => {
    // 放大镜以及图片切换
    ;(function () {
        // 获取元素
        // 小盒子
        const small = document.querySelector(".gogo-product-info .small")
        // 中盒子
        const middle = document.querySelector(".gogo-product-info .middle")
        // 大盒子
        const large = document.querySelector(".gogo-product-info .large")
        // 给小盒子绑定事件 用mouseover   因为mouseenter没有事件冒泡不能使用事件委托
        small.addEventListener("mouseover", function (e) {
            if (e.target.tagName === "IMG") {
                // 排他 先移除旧的类
                this.querySelector(".active").classList.remove("active")
                // 为他的父元素添加类
                e.target.parentNode.classList.add("active")
                // 让中图的路径等于小图的路径
                middle.querySelector("img").src = e.target.src
                //鼠标经过小图片时就给large地址
                large.style.backgroundImage = `url(${e.target.src})`
            }
        })

        // 鼠标经过中盒子 显示大盒子
        middle.addEventListener("mouseenter", show)
        // 鼠标离开中盒子，隐藏大盒子
        middle.addEventListener("mouseleave", hide)
        let timerId = null
        // 封装函数
        function show() {
            clearTimeout(timerId)
            // 显示大盒子
            large.style.display = "block"
        }
        function hide() {
            // 盒子不能马上隐藏需要延时
            timerId = setTimeout(function () {
                // 隐藏大盒子
                large.style.display = "none"
            }, 200)
        }

        // 经过large图片显示和隐藏
        large.addEventListener("mouseenter", show)
        large.addEventListener("mouseleave", hide)

        // 鼠标经过中盒子显示隐藏 遮罩
        // 获取遮罩
        const layer = document.querySelector(".layer")
        middle.addEventListener("mouseenter", function () {
            layer.style.display = "block"
        })
        middle.addEventListener("mouseleave", function () {
            layer.style.display = "none"
        })

        // 移动中盒子里的遮罩
        middle.addEventListener("mousemove", function (e) {
            // 获得当前鼠标在中盒子里的距离
            // 距离 = 当前鼠标位置—当前图片位置
            // getBoundingClientRect()得到当前可视窗口的距离
            let x = e.pageX - middle.getBoundingClientRect().left
            let y =
                e.pageY - middle.getBoundingClientRect().top - document.documentElement.scrollTop
            // 限定遮罩层移动范围
            if (x >= 0 && x <= 400 && y >= 0 && y <= 400) {
                // 判断鼠标范围 来移动黑色遮罩
                // 声明两个变量
                let mx = 0,
                    my = 0
                if (x < 100) mx = 0
                if (x > 100 && x <= 300) mx = x - 100
                if (x >= 300) mx = 200

                if (y < 100) my = 0
                if (y > 100 && y <= 300) my = y - 100
                if (y >= 300) my = 200
                layer.style.left = mx + "px"
                layer.style.top = my + "px"
                // 大盒子移动
                // 大盒子是背景图片移动
                large.style.backgroundPositionX = -2 * mx + "px"
                large.style.backgroundPositionY = -2 * my + "px"
            }
        })
    })()

    // 购物车
    /* 
        1.点击“加入购物车”按钮商品加入到购物车中。
        ①判断当前用户是否登录，如果没有跳转到登录页面。
        ②如果已经登录把商品添加到购物车。
        ③.在购物车中可以进行商品删除以及价格结算
        2.商品选中总计就变化
        ①商品选中总计就变化
        ②商品取消选中总计就变化
        ③点击删除按钮删除商品，总计变化
    */
    ;(function () {
        // 商品名
        const name = document.querySelector(".gogo-product-info .right .name")
        // 商品图片
        const img = document.querySelector(".gogo-product-info .small li img")
        // 价格
        const price = document.querySelector(".gogo-product-info .right .price .now")
        // 数量
        const number = document.querySelector(".gogo-product-info .right .num #number")
        // 获取立即购买按钮
        const btn = document.querySelectorAll(".gogo-product-info .right .item a")[1]
        // 加减按钮
        const addBtn = document.querySelector(".attrs #add")
        const reduceBtn = document.querySelector(".attrs #reduce")
        // 购物车列表
        const carList = document.getElementsByClassName("car-list")[0]
        // 2. 点击加号
        addBtn.addEventListener("click", function () {
            number.value++
            reduceBtn.disabled = false
        })
        // 3. 点击减号
        reduceBtn.addEventListener("click", function () {
            number.value--
            if (number.value <= 1) {
                reduceBtn.disabled = true
            }
        })

        btn.onclick = () => {
            if (!localStorage.getItem("uname")) {
                alert("请先登录")
                location.href = "./login.html"
            }
            // 添加数据
            addData(
                img.src,
                name.textContent,
                price.textContent,
                number.value,
                "￥" + price.textContent.split("￥")[1] * number.value
            )
            let num = 0
            for (const item of shopCarData) {
                if (item.goods.name === name.textContent) {
                    num++
                }
            }
            // 判断是否重复
            if (checkArrayRepeat(shopCarData) && num < 2) {
                // 没重复就渲染页面
                carList.innerHTML = ""
                carListRender()
                bind()
                allBtn.checked = false
                allText.textContent = "全选"
            } else {
                // 因为之前是先加的数据，所以重复之后要删除
                let index = shopCarData.lastIndexOf((item) => item.goods.name === name.textContent)
                if (index) shopCarData.splice(index, 1)
            }
        }

        /* 购物车列表 */
        // 用户点击全选，则下面复选框全部选择，取消全选则全部取消
        //分析：
        // ①：全选复选框点击，可以得到当前按钮的 checked
        // ②：把下面所有的小复选框状态checked，改为和全选复选框一致
        // 获取全选按钮
        const allBtn = document.querySelector(".car-header .all .checkbox")
        // 全选按钮的文本
        const allText = document.querySelector(".car-header .all .check-all")
        // 商品选择按钮
        const optionBtn = carList.getElementsByClassName("checkbox")
        // 商品小计
        const subtotal = carList.getElementsByClassName("subtotal")
        // 商品总计
        const totalText = document.querySelector(".gogo-shop-car .total span")
        // 全选按钮
        allBtn.addEventListener("click", function () {
            for (const item of optionBtn) {
                item.checked = allBtn.checked
            }
            allText.textContent = allBtn.checked ? "取消" : "全选"
            bind()
            count()
        })

        // 重新绑定事件
        function bind() {
            // 单选按钮
            for (const item of optionBtn) {
                item.addEventListener("click", function () {
                    // 根据:checkd伪类选择器
                    // 检查商品选择按钮选中的个数，是不是等于选择总个数
                    allBtn.checked =
                        document.querySelectorAll(".car-item .option .checkbox:checked").length ===
                        optionBtn.length
                    allText.textContent = allBtn.checked ? "取消" : "全选"
                    count()
                })
            }
            // 给删除按钮绑定元素
            const delBox = carList.getElementsByClassName("car-control")
            for (let i = 0; i < delBox.length; i++) {
                delBox[i].getElementsByTagName("a")[0].onclick = function () {
                    const flag = confirm("您确定要删除吗？")
                    if (flag) {
                        delData(shopCarData[i].goods.name)
                        carList.innerHTML = ""
                        carListRender()
                        bind()
                        allBtn.checked = false
                        allText.textContent = "全选"
                    }
                }
            }
        }
        bind()
        // 计算总金额
        function count() {
            let sum = 0
            for (let i = 0; i < optionBtn.length; i++) {
                if (optionBtn[i].checked) {
                    sum += subtotal[i].textContent.split("￥")[1] * 1
                }
            }
            totalText.textContent = "￥" + sum
        }
        count()

        // 添加数据
        function addData(img, name, price, number, subtotal) {
            shopCarData.push({ goods: { img, name }, goodsInfo: { price, number, subtotal } })
        }

        function delData(name) {
            //根据id找到要删除的商品，从数组中去除，并初始化
            const index = shopCarData.findIndex((item) => item.goods.name === name)
            shopCarData.splice(index, 1)
        }
        // 判断数组对象是否重复
        function checkArrayRepeat(arr) {
            if (arr.length < 0) return false
            const s = new Set()
            arr.map((v) => {
                s.add(JSON.stringify(v))
            })
            if (s.size != arr.length) return false
            return true
        }
    })()
    // 商品详情和商品评价切换
    ;(function () {
        const changeBtn = document.querySelectorAll(".tab-head a")
        const tabPane = document.querySelectorAll(".tab-pane")
        changeBtn.forEach((item, index) => {
            item.addEventListener("click", function () {
                document.querySelector(".active2").classList.remove("active2")
                this.classList.add("active2")
                if (index == 0) {
                    tabPane[0].style.display = "block"
                    tabPane[1].style.display = "none"
                } else {
                    tabPane[1].style.display = "block"
                    tabPane[0].style.display = "none"
                }
            })
        })
    })()

    // 评论
    ;(function () {
        // 发送评论的文本区域
        const replyTextarea = document.querySelector(
            ".main-reply-box .reply-box-warp .reply-box-textarea"
        )
        // 发布按钮
        const sendBtn = document.querySelector(".main-reply-box .reply-box-send")
        // 获取焦点失去焦点样式修改
        // 文本域有内容颜色变深
        replyTextarea.addEventListener("focus", function () {
            this.classList.add("show")
            sendBtn.classList.add("focus")
            this.style.backgroundColor = "#fff"
            sendBtn.style.backgroundColor = "#febd40"
        })

        replyTextarea.addEventListener("blur", function () {
            if (!replyTextarea.value) {
                this.classList.remove("show")
                sendBtn.classList.remove("focus")
                this.style.backgroundColor = "#f1f2f3"
                sendBtn.style.backgroundColor = "rgba(254, 189, 64, .5)"
            } else {
                this.style.backgroundColor = "#fff"
            }
        })

        // 根据有无内容改变发布按钮颜色
        replyTextarea.addEventListener("input", function () {
            if (!replyTextarea.value) {
                sendBtn.classList.remove("send-active")
            } else {
                sendBtn.classList.add("send-active")
            }
        })

        // 点击发布评论
        sendBtn.addEventListener("click", function () {
            if (!localStorage.getItem("uname")) {
                alert("请先登录")
                location.href = "./login.html"
                return
            }
            // 字符串.trim去掉首位空格
            // 方法要加括号()
            if (replyTextarea.value.trim() === "") {
                replyTextarea.value = ""
                return alert("内容不能为空！")
            }
            // 添加新元素
            const newDiv = document.createElement("div")
            newDiv.className = "reply-list"
            newDiv.innerHTML = `
                    <div class="reply-item">
                      <div class="reply-box-avatar">
                        <div class="pic">
                          <img src="icon.png" alt="">
                        </div>
                      </div>
                      <div class="reply-content">
                        <p class="user-name">${localStorage.getItem("uname")}</p>
                        <p class="reply-content-text">${replyTextarea.value}</p>
                        <p class="time">${new Date().toLocaleString()}</p>
                      </div>
                    </div>
        `
            // 回复列表
            const replyList = document.querySelector(".reply-list")
            replyList.insertAdjacentElement("afterbegin", newDiv)
            replyTextarea.value = ""
            replyTextarea.classList.remove("show")
            sendBtn.classList.remove("focus")
            replyTextarea.style.backgroundColor = "#f1f2f3"
            sendBtn.style.backgroundColor = "rgba(254, 189, 64, .5)"
        })
    })()
})
