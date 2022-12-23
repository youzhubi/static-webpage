    /* 
      商品详情页部分
    */
    // 面包屑导航部分
    ;(function () {
        // 面包屑导航
        const breadDiv = document.querySelector(".gogo-bread")
        const path = detailGoodsData.path
        for (const item of path) {
            if (item.url) {
                const a = document.createElement("a")
                a.innerHTML = `
                <a href="${item.url}"> ${item.title} > </a>
            `
                breadDiv.insertAdjacentElement("beforeend", a)
            } else {
                const span = document.createElement("span")
                span.innerHTML = `
                    <span>${item.title}</span>
                `
                breadDiv.insertAdjacentElement("beforeend", span)
            }
        }
    })()
    // 放大镜图片渲染部分
    ;(function () {
        // 整个图片部分盒子
        const picture = document.querySelector(".picture")
        // 小图片部分
        const smallUl = picture.querySelector(".small ul")
        for (const item of detailGoodsData.imagesSrc) {
            const li = document.createElement("li")
            li.innerHTML = `
              <img src="${item.img}" alt="">
            `
            smallUl.insertAdjacentElement("beforeend", li)
        }
        smallUl.getElementsByTagName("li")[0].className = "active"
    })()

    // 其他信息部分
    ;(function () {
        const left = document.querySelector(".gogo-product-info .left")
        const { hot, replay, collectionHot, info } = detailGoodsData.other[0]
        let str = `
        <div class="other">
            <ul>
              <li>
                <p>销量人气</p>
                <p>${hot[0]}</p>
                <p>${hot[1]}</p>
              </li>
              <li>
                <p>商品评价</p>
                <p>${replay[0]}</p>
                <p>${replay[1]}</p>
              </li>
              <li>
                <p>收藏人气</p>
                <p>${collectionHot[0]}</p>
                <p><a href="javascript:;">${collectionHot[1]}</a></p>
              </li>
              <li>
                <p>品牌信息</p>
                <p>${info[0]}</p>
                <p><a href="javascript:;">${info[1]}</a></p>
              </li>
            </ul>
          </div>
        `
        left.insertAdjacentHTML("beforeend", str)
    })()
    /* 右侧地址以及颜色、大小等部分 */
    // 商品名称部分
    ;(function () {
        const goodsInfo = document.querySelector(".gogo-product-info .right")
        // 解构赋值
        const { name, desc, price, address, color, size, other } = detailGoodsData.goodsDetail
        let str = ` 
            <h3 class="name">${name}</h3>
            <p class="desc">${desc} </p>
            <p class="price"><span class="now">${price[0].now}</span><span class="old">${
            price[0].old
        }</span></p>
            <div class="address">
                <div class="item">
                  <div class="dt">促销</div>
                  <div class="dd">${address.recommend}</div>
                </div>
                <div class="item">
                  <div class="dt">配送</div>
                  <div class="dd">至
                    <div class="box">
                      <span>${address.addressDetail}<i></i></span>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="dt">服务</div>
                  <div class="dd">
                    <span class="fw">${address.service.split("，")[0]}</span>
                    <span class="fw">${address.service.split("，")[1]}</span>
                    <span class="fw">${address.service.split("，")[2]}</span>
                    <a href="#" class="lj">了解详情</a>
                </div>
            </div>
          </div>
            <div class="attrs">
                <div class="item">
                  <div class="dt">数量</div>
                  <div class="dd">
                    <div class="num">
                      <input type="button" value="-" id="reduce">
                      <input type="text" value="1" id="number">
                      <input type="button" value="+" id="add">
                    </div>
                  </div>
                </div>
                <div class="item">
                  <a class="buy" href="javascript:;">加入购物车</a>
                </div>
           </div>
        `
        // 颜色规格部分
        function colorRender() {
            const colorItem = document.createElement("div")
            const imgBox = document.createElement("div")
            colorItem.className = "item"
            imgBox.className = "dd"
            for (const item of color) {
                colorItem.innerHTML = `
              <div class="dt">颜色</div>

            `
                imgBox.innerHTML += `
                <img src="${item}" alt="">
            `
                colorItem.appendChild(imgBox)
            }
            goodsInfo
                .getElementsByClassName("attrs")[0]
                .insertAdjacentElement("afterbegin", colorItem)
        }

        // 大小规格部分
        function sizeRender() {
            const sizeItem = document.createElement("div")
            const textBox = document.createElement("div")
            sizeItem.className = "item"
            textBox.className = "dd"
            for (const item of size) {
                sizeItem.innerHTML = `
              <div class="dt">大小</div>

            `
                textBox.innerHTML += `
                <span class="size">${item}</span>
            `
                sizeItem.appendChild(textBox)
            }
            goodsInfo
                .getElementsByClassName("attrs")[0]
                .insertAdjacentElement("afterbegin", sizeItem)
        }

        goodsInfo.insertAdjacentHTML("beforeend", str)
        sizeRender()
        colorRender()
    })()

    /* 
      购物车部分
    */
    function carListRender() {
        // 购物列表
        const carList = document.querySelector(".car-list")
        let totalPrice = 0
        for (const item of shopCarData) {
            const itemDiv = document.createElement("div")
            itemDiv.className = "car-item"
            itemDiv.innerHTML = `
                <div class="option fl">
                  <input type="checkbox" class="checkbox">
                  <div class="goods">
                    <img src=${item.goods.img} alt="">
                    <div class="info">
                      <p class="name">${item.goods.name}</p>
                    </div>
                  </div>
                </div>
                <div class="goods-info">
                  <div class="car-price">${item.goodsInfo.price}</div>
                  <div class="car-number">${item.goodsInfo.number}</div>
                  <div class="subtotal">${item.goodsInfo.subtotal}</div>
                  <div class="car-control"><a href="javascript:;">删除</a></div>
                </div>
            
            `
            carList.insertAdjacentElement("beforeend", itemDiv)
        }
        const total = document.querySelector(".gogo-shop-car .total span")
        total.textContent = "￥" + totalPrice
        const shopCar = document.querySelector(".gogo-shop-car")
        // 判断用户是否登录
        if (localStorage.getItem("uname")) {
            shopCar.style.display = "block"
        } else {
            shopCar.style.display = "none"
        }
    }
    carListRender()
