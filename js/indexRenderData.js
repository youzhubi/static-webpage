window.addEventListener("load", () => {
    // 首页新鲜好物
    ;(function () {
        const newGoods = document.querySelector(".gogo_goods_new .gogo_panel_goods_1")
        for (const item of newGoodsData) {
            const a = document.createElement("a")
            a.innerHTML += `
          <img src=${item.image} alt="">
          <span class="name">${item.name}</span>
          <span class="price"><small>${item.price.at(0)}</small>${item.price.slice(1)}</span>
        `
            newGoods.insertAdjacentElement("beforeend", a)
        }
        newGoods.getElementsByTagName("a")[0].href = "./product.html"
    })()
    // 首页人气推荐
    ;(function () {
        const popularGoods = document.querySelector(".gogo_goods_popular .gogo_panel_goods_1")
        for (const item of popularData) {
            const a = document.createElement("a")
            a.innerHTML += `
          <img src="${item.image}">
          <span class="title">${item.title}</span>
          <span class="alt">${item.alt}</span>
        `
            popularGoods.insertAdjacentElement("beforeend", a)
        }
    })()
    // 首页分类产品
    ;(function () {
        for (let i = 0; i < categoryData.length; i++) {
            // 标题
            const headerDiv = document.createElement("div")
            headerDiv.className = "gogo_panel_header"
            // 设置里面内容
            headerDiv.innerHTML = `
        <h3>${categoryData[i].title}</h3>
        <a href="javascript:;" class="more">
          查看全部<i class="sprites"></i>
        </a>
    `
            const wrapper = document.querySelector(".gogo_goods_category .wrapper")
            wrapper.appendChild(headerDiv)
            // tabs-bar部分
            // 创建div
            const tabBar = document.createElement("div")
            tabBar.className = "tabs-bar"
            // 设置里面内容
            for (const item of categoryData[i].data[0].data) {
                tabBar.innerHTML += `
                <a href="javascript:;">${item}</a>
             `
            }
            tabBar.querySelector("a").className = "active"
            // 获取头部标题
            const header = document.querySelector("div.gogo_panel_header:last-child")
            header.appendChild(tabBar)
            // 大图片内容区域渲染
            const goodsList = document.createElement("div")
            goodsList.className = "gogo_panel_goods_2"
            const goodsListUl = document.createElement("ul")
            goodsListUl.className = "clearfix"
            goodsListUl.innerHTML = `
            <li>
                <a href="javascript:;">
                    <img src="${categoryData[i].data[1].data[0].image}" alt="">
                </a>
                <div class="label">
                    <span>${categoryData[i].data[1].data[0].alt.split("，")[0]}</span>
                    <span>${categoryData[i].data[1].data[0].alt.split("，")[1]}</span>
                </div>
            </li>
    `
            // 小图片内容
            for (let j = 1; j < categoryData[i].data[1].data.length; j++) {
                const { image, title, alt, price } = categoryData[i].data[1].data[j]
                const goods = document.createElement("li")
                goods.innerHTML += `
            <!-- 商品图片 -->
            <a href="javascript:;">
              <div class="img-box">
                <img src="${image}" alt="">
              </div>
            </a>
            <!-- 商品信息 -->
            <div class="meta">
              <p class="name">${title}</p>
              <p class="flag">${alt}</p>
              <p class="price"><small>${price.at(0)}</small>${price.split("￥")[1]}</p>
            </div>
            <!-- 其它 -->
            <div class="extra">
              <a href="javascript:;">
                <span>找相似</span>
                <span>发现现多宝贝&gt;</span>
              </a>
            </div>
          `
                goodsListUl.insertAdjacentElement("beforeend", goods)
            }
            goodsList.innerHTML = goodsListUl.outerHTML
            wrapper.insertAdjacentElement("beforeend", goodsList)
        }
    })()
})
