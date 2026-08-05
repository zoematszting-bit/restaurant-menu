/* ============================================================
   餐廳資料 + 分類定義
   ------------------------------------------------------------
   加新餐廳：只需喺 RESTAURANTS 陣列 append 一個物件
   多語言欄位用 { 'zh-HK':..., 'zh-CN':..., 'en':... } 包住
   ============================================================ */

/* 兩層篩選分類 */
const CATEGORIES = {
  countries: [
    { key:'japanese', label:{'zh-HK':'🇯🇵 日式', 'zh-CN':'🇯🇵 日式', 'en':'🇯🇵 Japanese'} },
    { key:'korean',   label:{'zh-HK':'🇰🇷 韓式', 'zh-CN':'🇰🇷 韓式', 'en':'🇰🇷 Korean'} },
    { key:'thai',     label:{'zh-HK':'🇹🇭 泰式', 'zh-CN':'🇹🇭 泰式', 'en':'🇹🇭 Thai'} },
    { key:'chinese',  label:{'zh-HK':'🇨🇳 中式', 'zh-CN':'🇨🇳 中式', 'en':'🇨🇳 Chinese'} },
    { key:'western',  label:{'zh-HK':'🍝 西式', 'zh-CN':'🍝 西式', 'en':'🍝 Western'} },
    { key:'southeast',label:{'zh-HK':'🍜 東南亞', 'zh-CN':'🍜 东南亚', 'en':'🍜 SE Asian'} },
  ],
  types: [
    { key:'yakiniku', label:{'zh-HK':'🔥 燒肉',   'zh-CN':'🔥 烧肉',   'en':'🔥 Yakiniku'} },
    { key:'ramen',    label:{'zh-HK':'🍜 拉麵',   'zh-CN':'🍜 拉面',   'en':'🍜 Ramen'} },
    { key:'sushi',    label:{'zh-HK':'🍣 壽司',   'zh-CN':'🍣 寿司',   'en':'🍣 Sushi'} },
    { key:'buffet',   label:{'zh-HK':'🍱 放題',   'zh-CN':'🇯🇵 放题',  'en':'🍱 Buffet'} },
    { key:'hotpot',   label:{'zh-HK':'🍲 火鍋',   'zh-CN':'🍲 火锅',   'en':'🍲 Hotpot'} },
    { key:'noodle',   label:{'zh-HK':'🍜 粉麵',   'zh-CN':'🍜 粉面',   'en':'🍜 Noodles'} },
    { key:'rice',     label:{'zh-HK':'🍚 飯類',   'zh-CN':'🍚 饭类',   'en':'🍚 Rice'} },
  ],
};

/* 餐廳特色（共用 key → 多語言 label）*/
const FEATURES = {
  'solo-seat':  {'zh-HK':'👤 一人前座位', 'zh-CN':'👤 一人前座位', 'en':'👤 Solo counter seats'},
  'smokeless':  {'zh-HK':'🚫 無煙烤爐',   'zh-CN':'🚫 无烟烤炉',   'en':'🚫 Smokeless grill'},
  'qr':         {'zh-HK':'📱 QR Code 落單','zh-CN':'📱 扫码点单',   'en':'📱 QR ordering'},
  'fast':       {'zh-HK':'⚡ 出餐快',     'zh-CN':'⚡ 出餐快',     'en':'⚡ Fast service'},
  'cheap':      {'zh-HK':'💰 平價',       'zh-CN':'💰 平价',       'en':'💰 Budget-friendly'},
  'reservation':{'zh-HK':'🎫 接受訂位',  'zh-CN':'🎫 接受订位',   'en':'🎫 Takes reservations'},
  'takeaway':   {'zh-HK':'🥡 外賣',       'zh-CN':'🥡 外卖',       'en':'🥡 Takeaway'},
};

/* 餐廳列表 */
const RESTAURANTS = [
  {
    id: 'yakiniku-like',
    emoji: '🥩',
    countries: ['japanese'],
    types: ['yakiniku'],
    rating: { src:'TripAdvisor', score:3.9, max:5,
      count:{'zh-HK':'12 個評論', 'zh-CN':'12 条评论', 'en':'12 reviews'} },
    rating2: { src:'foodie', score:8, max:10,
      srcLabel:{'zh-HK':'網民食評', 'zh-CN':'网友食评', 'en':'Foodie Review'},
      desc:{'zh-HK':'快捷抵食之選', 'zh-CN':'快捷实惠之选', 'en':'Quick & wallet-friendly pick'} },
    name:    {'zh-HK':'燒肉LIKE', 'zh-CN':'烧肉LIKE', 'en':'Yakiniku LIKE'},
    cuisine: {'zh-HK':'日式一人燒肉', 'zh-CN':'日式一人烧肉', 'en':'Japanese Solo Yakiniku'},
    area:    {'zh-HK':'香港多區', 'zh-CN':'香港多区', 'en':'Multiple areas, HK'},
    features: ['solo-seat','smokeless','qr','fast','cheap'],
    branches: [
      {
        name:{'zh-HK':'旺角 MOKO 新世紀廣場', 'zh-CN':'旺角 MOKO 新世纪广场', 'en':'Mong Kok MOKO'},
        area:{'zh-HK':'旺角', 'zh-CN':'旺角', 'en':'Mong Kok'},
        addr:{'zh-HK':'太子道西193號 MOKO 新世紀廣場 3樓 301-302號舖',
              'zh-CN':'太子道西193号 MOKO 新世纪广场 3楼 301-302号铺',
              'en':'Shop 301-302, L3, MOKO, 193 Prince Edward Rd West'},
        hours:{'zh-HK':'每日 11:30–22:30', 'zh-CN':'每日 11:30–22:30', 'en':'Daily 11:30–22:30'},
        lastOrder:'21:30', phone:'2152 9433', price:{'zh-HK':'$80–150','zh-CN':'$80–150','en':'$80–150'},
        lat:22.3217, lng:114.1726,
      },
      {
        name:{'zh-HK':'銅鑼灣（英皇鐘錶珠寶中心）', 'zh-CN':'铜锣湾（英皇钟表珠宝中心）', 'en':'Causeway Bay (Emperor Watch & Jewellery Centre)'},
        area:{'zh-HK':'銅鑼灣', 'zh-CN':'铜锣湾', 'en':'Causeway Bay'},
        addr:{'zh-HK':'羅素街 英皇鐘錶珠寶中心', 'zh-CN':'罗素街 英皇钟表珠宝中心', 'en':'Russell Street, Emperor Watch & Jewellery Centre'},
        hours:{'zh-HK':'每日 11:30–22:30', 'zh-CN':'每日 11:30–22:30', 'en':'Daily 11:30–22:30'},
        phone:'—', price:{'zh-HK':'$101–200','zh-CN':'$101–200','en':'$101–200'},
        lat:22.2819, lng:114.1855,
      },
      {
        name:{'zh-HK':'尖沙咀 The Wai', 'zh-CN':'尖沙咀 The Wai', 'en':'Tsim Sha Tsui The Wai'},
        area:{'zh-HK':'尖沙咀', 'zh-CN':'尖沙咀', 'en':'TST'},
        addr:{'zh-HK':'彌敦道132號 美麗華廣場 The Wai', 'zh-CN':'弥敦道132号 美丽华广场 The Wai', 'en':'The Wai, Miramar Square, 132 Nathan Rd'},
        hours:{'zh-HK':'每日 11:30–22:30', 'zh-CN':'每日 11:30–22:30', 'en':'Daily 11:30–22:30'},
        phone:'—', price:{'zh-HK':'$80–150','zh-CN':'$80–150','en':'$80–150'},
        lat:22.3001, lng:114.1737,
      },
    ],
    dishes: [
      { n:{'zh-HK':'LIKE 牛肉溫泉蛋飯套餐', 'zh-CN':'LIKE 牛肉温泉蛋饭套餐', 'en':'LIKE Beef & Onsen Egg Rice Set'},
        en:{'zh-HK':'LIKE Beef & Onsen Egg Rice Set (200g)', 'zh-CN':'LIKE 牛肉溫泉蛋飯套餐 (200g)', 'en':'(200g)'},
        p:38, was:67, tag:{'zh-HK':'🔥 超值優惠價', 'zh-CN':'🔥 超值优惠价', 'en':'🔥 Special offer'} },
      { n:{'zh-HK':'牛五花套餐', 'zh-CN':'牛五花套餐', 'en':'Karubi Beef Set'},
        en:{'zh-HK':'Karubi Beef Set (100g)', 'zh-CN':'牛五花套餐 (100g)', 'en':'(100g)'},
        p:48, was:64, tag:{'zh-HK':'🔥 優惠價', 'zh-CN':'🔥 优惠价', 'en':'🔥 Offer price'} },
      { n:{'zh-HK':'豬五花腩 & 雞腿肉套餐', 'zh-CN':'猪五花肉 & 鸡腿肉套餐', 'en':'Pork Belly & Chicken Thigh Set'},
        en:{'zh-HK':'Pork Belly & Chicken Thigh Set (150g)', 'zh-CN':'豬五花腩 & 雞腿肉套餐 (150g)', 'en':'(150g)'},
        p:48, tag:{'zh-HK':'🔥 雙拼優惠', 'zh-CN':'🔥 双拼优惠', 'en':'🔥 Duo combo'} },
      { n:{'zh-HK':'NEXT 牛五花套餐', 'zh-CN':'NEXT 牛五花套餐', 'en':'NEXT Karubi Beef Set'},
        en:{'zh-HK':'NEXT Karubi Beef Set (100g)', 'zh-CN':'NEXT 牛五花套餐 (100g)', 'en':'(100g)'},
        p:78 },
      { n:{'zh-HK':'NEXT 橫膈膜肉套餐', 'zh-CN':'NEXT 横膈膜肉套餐', 'en':'NEXT Harami Set'},
        en:{'zh-HK':'NEXT Harami Set (100g)', 'zh-CN':'NEXT 橫膈膜肉套餐 (100g)', 'en':'(100g)'},
        p:78 },
      { n:{'zh-HK':'認證安格斯肩肉 & 牛五花套餐', 'zh-CN':'认证安格斯肩肉 & 牛五花套餐', 'en':'Cert. Angus Shoulder & Karubi Set'},
        en:{'zh-HK':'Cert. Angus Shoulder & Karubi Set (250g)', 'zh-CN':'認證安格斯肩肉 & 牛五花套餐 (250g)', 'en':'(250g)'},
        p:128, tag:{'zh-HK':'🎊 連飯、湯、前菜', 'zh-CN':'🎊 含饭、汤、前菜', 'en':'🎊 w/ rice, soup, side'} },
      { n:{'zh-HK':'認證安格斯牛五花', 'zh-CN':'认证安格斯牛五花', 'en':'Certified Angus Beef® Premium Karubi'},
        en:{'zh-HK':'Certified Angus Beef® Premium Karubi', 'zh-CN':'認證安格斯牛五花', 'en':''},
        p:112, tag:{'zh-HK':'⭐ 招牌', 'zh-CN':'⭐ 招牌', 'en':'⭐ Signature'} },
      { n:{'zh-HK':'橫膈膜肉', 'zh-CN':'横膈膜肉', 'en':'Harami (Skirt Steak)'},
        en:{'zh-HK':'Harami', 'zh-CN':'橫膈膜肉', 'en':''},
        p:120, tag:{'zh-HK':'⭐ 招牌', 'zh-CN':'⭐ 招牌', 'en':'⭐ Signature'} },
      { n:{'zh-HK':'豬五花', 'zh-CN':'猪五花', 'en':'Pork Belly'},
        en:{'zh-HK':'Pork Belly', 'zh-CN':'豬五花', 'en':''},
        p:30 },
      { n:{'zh-HK':'炭燒雞', 'zh-CN':'炭烧鸡', 'en':'Sumiyaki Chicken'},
        en:{'zh-HK':'Sumiyaki Chicken', 'zh-CN':'炭燒雞', 'en':''},
        p:32 },
      { n:{'zh-HK':'黑安格斯漢堡排', 'zh-CN':'黑安格斯汉堡排', 'en':'Black Angus Burger Steak'},
        en:{'zh-HK':'Black Angus Burger Steak (1pc)', 'zh-CN':'黑安格斯漢堡排', 'en':'(1pc)'},
        p:40 },
    ],
  },
  /* ---- 加新餐廳喺下面 append ---- */
];
