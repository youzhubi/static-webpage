// 登录用户数据
const userName = [
    { uname: "孙悟空", password: "123456" },
    { uname: "猪八戒", password: "123456" },
    { uname: "沙和尚", password: "123456" },
    { uname: "唐僧", password: "123456" },
    { uname: "白骨精", password: "123456" },
    { uname: "蜘蛛精", password: "123456" },
    { uname: "牛魔王", password: "123456" },
    { uname: "红孩儿", password: "123456" },
    { uname: "铁扇公主", password: "123456" },
    { uname: "太上老君", password: "123456" },
]

/* 
    首页数据
*/
// 新鲜好物
const newGoodsData = [
    {
        image: "./images/1.jpg",
        name: "高级茶壶",
        price: "￥1899",
    },
    {
        image: "./uploads/new_goods_2.jpg",
        name: "智能环绕3D空调",
        price: "￥1299",
    },
    {
        image: "./uploads/new_goods_3.jpg",
        name: "广东软软糯米煲仔饭",
        price: "￥129",
    },
    {
        image: "./uploads/new_goods_4.jpg",
        name: "罗西机械智能手表",
        price: "￥3399",
    },
]

// 人气推荐
const popularData = [
    {
        image: "./uploads/popular_1.jpg",
        title: "特惠推荐",
        alt: "我猜得到 你的需要",
    },
    {
        image: "./uploads/popular_2.jpg",
        title: "爆款推荐",
        alt: "人气好物推荐",
    },
    {
        image: "./uploads/popular_3.jpg",
        title: "场景使用一站买全",
        alt: "编辑精心整理推荐",
    },
    {
        image: "./uploads/popular_4.jpg",
        title: "领券中心",
        alt: "发现更多超值优惠券",
    },
]

// 分类商品
const categoryData = [
    {
        title: "生鲜",
        data: [
            {
                type: "标题栏",
                data: ["新鲜水果", "蔬菜蛋品", "精选肉类", "冷饮冻食", "海鲜水产"],
            },
            {
                type: "图片",
                data: [
                    {
                        image: "./uploads/fresh_goods_cover.jpg",
                        alt: "生鲜馆，全场3件8折",
                    },
                    {
                        image: "./uploads/fresh_goods_1.jpg",
                        title: "美威 智利原味三文鱼排 240g/袋 4片装",
                        alt: "海鲜年货",
                        price: "￥59",
                    },
                    {
                        image: "./uploads/fresh_goods_2.jpg",
                        title: "红功夫 麻辣小龙虾1.5kg 4-6钱/25-32只",
                        alt: "火锅食材",
                        price: "￥71.9",
                    },
                    {
                        image: "./uploads/fresh_goods_3.jpg",
                        title: "三都港 冷冻无公害黄花鱼 700g 2条 袋装",
                        alt: "海鲜水产",
                        price: "￥49.9",
                    },
                    {
                        image: "./uploads/fresh_goods_4.jpg",
                        title: "渔公码头 大连鲜食入味 即食海参 辽参刺参 调味海",
                        alt: "海鲜年货",
                        price: "￥899",
                    },
                    {
                        image: "./uploads/fresh_goods_5.jpg",
                        title: "越南进口白心火龙果4个 装 标准果 单果400-550g ",
                        alt: "",
                        price: "￥29",
                    },
                    {
                        image: "./uploads/fresh_goods_6.jpg",
                        title: "广西沃柑 柑橘1.5kg",
                        alt: "新鲜水果",
                        price: "￥59",
                    },
                    {
                        image: "./uploads/fresh_goods_7.jpg",
                        title: "进口 牛油果 6个装 单果重约130-180g",
                        alt: "新鲜水果",
                        price: "￥39.9",
                    },
                    {
                        image: "./uploads/fresh_goods_8.jpg",
                        title: "泰国进口山竹5A级 500g ",
                        alt: "新鲜水果",
                        price: "￥29.9",
                    },
                ],
            },
        ],
    },

    {
        title: "服饰",
        data: [
            {
                type: "标题栏",
                data: ["行李箱", "男士包袋", "女士包袋", "钱包及小提袋", "男鞋", "女鞋", "拖鞋"],
            },
            {
                type: "图片",
                data: [
                    {
                        image: "./uploads/clothes_goods_cover.jpg",
                        alt: "服饰馆，3折狂欢",
                    },
                    {
                        image: "./uploads/clothes_goods_1.jpg",
                        title: "人本秋季厚底帆布鞋 韩版低帮增高学生",
                        alt: "",
                        price: "￥55",
                    },
                    {
                        image: "./uploads/clothes_goods_2.jpg",
                        title: "迪士尼真皮针扣表带宽度 14-16mm规格双色压纹 女表带",
                        alt: "海鲜年货",
                        price: "￥20.9",
                    },
                    {
                        image: "./uploads/clothes_goods_3.jpg",
                        title: "三都港 冷冻无公害黄花鱼 700g 2条 袋装",
                        alt: "海鲜水产",
                        price: "￥209",
                    },
                    {
                        image: "./uploads/clothes_goods_4.jpg",
                        title: "ONLY夏季新款高腰宽松 七分阔腿裙裤休闲裤",
                        alt: "",
                        price: "￥274.5",
                    },
                    {
                        image: "./uploads/clothes_goods_5.jpg",
                        title: "拉夫劳伦t恤男正品 ",
                        alt: "圆领短袖",
                        price: "￥99",
                    },
                    {
                        image: "./uploads/clothes_goods_6.jpg",
                        title: "李宁跑步鞋男鞋空气 弧2018春季款",
                        alt: "",
                        price: "￥79",
                    },
                    {
                        image: "./uploads/clothes_goods_7.jpg",
                        title: "Dickies男鞋2020春季 英伦休闲工装鞋低帮",
                        alt: "",
                        price: "￥179",
                    },
                    {
                        image: "./uploads/clothes_goods_8.jpg",
                        title: "北极绒春夏季纯棉背心 男士修身纯色打底",
                        alt: "",
                        price: "￥69",
                    },
                ],
            },
        ],
    },
    {
        title: "餐厨",
        data: [
            {
                type: "标题栏",
                data: [
                    "碗碟套装",
                    "水具酒具",
                    "刀刀菜板",
                    "保温杯",
                    "锅具套装",
                    "炒锅",
                    "厨房配件",
                ],
            },
            {
                type: "图片",
                data: [
                    {
                        image: "./uploads/kitchen_goods_cover.jpg",
                        alt: "餐厨馆，大额优惠<br>等你来拿",
                    },
                    {
                        image: "./uploads/kitchen_goods_1.jpg",
                        title: "创意可爱不锈钢便携餐具 套装筷子便携三件套",
                        alt: "",
                        price: "￥5.9",
                    },
                    {
                        image: "./uploads/kitchen_goods_2.jpg",
                        title: "三金西瓜霜竹炭牙刷软毛 成人家用家庭装",
                        alt: "",
                        price: "￥20.9",
                    },
                    {
                        image: "./uploads/kitchen_goods_3.jpg",
                        title: "朴（TOPOTO）大卫免手 洗平板拖把拓扑懒人木地 板刮刮乐桶拖布",
                        alt: "",
                        price: "￥129",
                    },
                    {
                        image: "./uploads/kitchen_goods_4.jpg",
                        title: "ONLY夏季新款高腰宽松 七分阔腿裙裤休闲裤",
                        alt: "",
                        price: "￥274.5",
                    },
                    {
                        image: "./uploads/kitchen_goods_5.jpg",
                        title: "金纺不伤手柔顺剂 妈妈的选择",
                        alt: "",
                        price: "￥29",
                    },
                    {
                        image: "./uploads/kitchen_goods_6.jpg",
                        title: "洁成绵柔抹布洗碗巾超 值5片装 洗锅刷碗",
                        alt: "",
                        price: "￥10.9",
                    },
                    {
                        image: "./uploads/kitchen_goods_7.jpg",
                        title: "大卫双驱动旋转拖把桶 免手洗拓扑拖布地拖墩布 ",
                        alt: "",
                        price: "￥159",
                    },
                    {
                        image: "./uploads/kitchen_goods_8.jpg",
                        title: "斧头牌（AXE）去污地板 清洁剂2L 柠檬清香 ",
                        alt: "海鲜年货",
                        price: "￥22.9",
                    },
                ],
            },
        ],
    },
    {
        title: "餐厨",
        data: [
            {
                type: "标题栏",
                data: ["茶几", "书架", "衣柜", "电脑桌", "坐垫", "餐桌", "电视柜"],
            },
            {
                type: "居家",
                data: [
                    {
                        image: "./uploads/home_goods_cover.jpg",
                        alt: "居家馆，全场满减",
                    },
                    {
                        image: "./uploads/home_goods_1.jpg",
                        title: "菜鸟异常专用链接 非请 勿拍",
                        alt: "海鲜年货",
                        price: "￥8999",
                    },
                    {
                        image: "./uploads/home_goods_2.jpg",
                        title: "【中盐软水盐】汉斯希 尔家用软水机适配",
                        alt: "",
                        price: "￥65",
                    },
                    {
                        image: "./uploads/home_goods_3.jpg",
                        title: "云米净水壶家用直饮台式 净水机渗透过滤自来水",
                        alt: "海鲜年货",
                        price: "￥129",
                    },
                    {
                        image: "./uploads/home_goods_4.jpg",
                        title: "ztk恒温调奶器配件玻璃壶 炖盅",
                        alt: "海鲜年货",
                        price: "￥129",
                    },
                    {
                        image: "./uploads/home_goods_5.jpg",
                        title: "荞麦枕头单人枕芯双人 护颈椎枕头芯",
                        alt: "",
                        price: "￥29",
                    },
                    {
                        image: "./uploads/home_goods_6.jpg",
                        title: "Bear/小熊 LLJ-B04G1 家用多功能切碎机 电动",
                        alt: "料理机",
                        price: "￥10.9",
                    },
                    {
                        image: "./uploads/home_goods_7.jpg",
                        title: "荣事达薄饼机春饼春卷皮 家用博饼机电饼铛 ",
                        alt: "",
                        price: "￥159",
                    },
                    {
                        image: "./uploads/home_goods_8.jpg",
                        title: "美式双人实木床 红实木 显档次",
                        alt: "",
                        price: "￥22.9",
                    },
                ],
            },
        ],
    },
]

/* 
    商品详情页数据
*/
const detailGoodsData = {
    path: [
        {
            title: "首页",
            url: "./index.html",
        },
        {
            title: "厨具",
            url: "javascript:;",
        },
        {
            title: "茶具",
            url: "javascript:;",
        },
        {
            title: "高级茶壶",
        },
    ],
    imagesSrc: [
        { img: "./images/1.jpg" },
        { img: "./images/2.jpg" },
        { img: "./images/3.jpg" },
        { img: "./images/4.jpg" },
        { img: "./images/5.jpg" },
    ],
    other: [
        {
            hot: ["1999+", "销量人气"],
            replay: ["999+", "查看评价"],
            collectionHot: ["299+", "收藏商品"],
            info: ["茶壶", "品牌主页"],
        },
    ],
    goodsDetail: {
        name: "高级茶壶",
        desc: "功夫茶具 / 开片可养 / 手工家用 ",
        price: [{ now: "￥1899", old: "￥2999" }],
        address: {
            recommend: "12月好物放送，App领券购买直降120元",
            addressDetail: "浙江 杭州",
            service: "无忧退货，快速退款，免费包邮",
        },
        color: ["./uploads/product_color_green.png", "./uploads/product_color_red.png"],
        size: ["100毫升", "120毫升", "140毫升", "160毫升"],
    },
}

// 购物车数据
const shopCarData = [
    {
        goods: {
            img: "./uploads/car-shop-goods1.jpg",
            name: "2022年新款鞋包",
        },
        goodsInfo: {
            price: "￥100",
            number: 1,
            subtotal: "￥100",
        },
    },
    {
        goods: {
            img: "./uploads/car-shop-goods2.jpg",
            name: "2022年新款鞋",
        },
        goodsInfo: {
            price: "￥70",
            number: 2,
            subtotal: "￥140",
        },
    },
]
