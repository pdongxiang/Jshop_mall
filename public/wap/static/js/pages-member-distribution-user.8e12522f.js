(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-member-distribution-user"],{"174c":function(t,e,i){"use strict";i.r(e);var a=i("53e4"),n=i("8336");for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("6b6c");var o,r=i("f0c5"),c=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"636842b7",null,!1,a["a"],o);e["default"]=c.exports},"19d5":function(t,e,i){"use strict";i("c975"),i("b64b"),Object.defineProperty(e,"__esModule",{value:!0}),e.tools=e.checkLogin=e.jumpBackPage=e.goBack=e.goods=e.orders=void 0;var a={mounted:function(){},methods:{orderDetail:function(t){this.$common.navigateTo("/pages/member/order/orderdetail?order_id="+t)},toPay:function(t){this.$common.navigateTo("/pages/goods/payment/index?order_id="+t+"&type=1")},toEvaluate:function(t){this.$common.navigateTo("/pages/member/order/evaluate?order_id="+t)},showExpress:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",a=encodeURIComponent("code="+t+"&no="+e+"&add="+i);this.$common.navigateTo("/pages/member/order/express_delivery?params="+a)}}};e.orders=a;var n={mounted:function(){},methods:{goodsDetail:function(t){this.$common.navigateTo("/pages/goods/index/index?id="+t)},goodsList:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e="/pages/classify/index";Object.keys(t).length&&(e=this.$common.builderUrlParams(e,t)),this.$common.navigateTo(e)},groupDetail:function(t,e){this.$common.navigateTo("/pages/goods/index/group?id="+t+"&group_id="+e)},pintuanDetail:function(t,e){e?this.$common.navigateTo("/pages/goods/index/pintuan?id="+t+"&team_id="+e):this.$common.navigateTo("/pages/goods/index/pintuan?id="+t)}}};e.goods=n;var s={onBackPress:function(t){if("navigateBack"===t.from)return!1;var e=["/pages/cart/index/index","/pages/member/index/index"],i=this.$store.state.redirectPage;return e.indexOf(i)>-1?(this.$store.commit({type:"redirect",page:""}),uni.switchTab({url:"/pages/index/index"}),!0):void 0},backBtn:function(){var t=getCurrentPages();t.length>1?uni.navigateBack({delta:1}):uni.switchTab({url:"/pages/index/index"})}};e.goBack=s;var o={methods:{handleBack:function(){var t=this.$store.state.redirectPage;console.log(t),this.$store.commit({type:"redirect",page:""});var e=["/pages/index/index","/pages/member/index/index"];e.indexOf(t)>-1?uni.switchTab({url:t}):t?uni.redirectTo({url:t}):uni.switchTab({url:"/pages/index/index"})}}};e.jumpBackPage=o;var r={methods:{checkIsLogin:function(){uni.showToast({title:"请先登录！",icon:"none",duration:800,success:function(t){setTimeout((function(){uni.hideToast(),uni.navigateTo({url:"/pages/login/login/index1"})}),200)}})}}};e.checkLogin=r;var c={methods:{copyData:function(t){var e=this;uni.setClipboardData({data:t,success:function(){e.$common.errorToShow("复制成功")}})}}};e.tools=c},"1ca9":function(t,e,i){"use strict";var a=i("9a38"),n=i.n(a);n.a},3525:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"member-top"},[i("v-uni-image",{staticClass:"bg-img",attrs:{src:"/static/image/member-bg.png"}}),i("v-uni-view",{staticClass:"member-top-c"},[i("v-uni-image",{staticClass:"user-head-img",attrs:{mode:"aspectFill",src:t.userInfo.avatar}}),i("v-uni-view",{},[i("v-uni-view",{staticClass:"user-name fsz34"},[t._v(t._s(t.userInfo.nickname))]),t.info.grade_name?i("v-uni-view",{staticClass:"fz12 color-f grade"},[t._v("当前等级："+t._s(t.info.grade_name))]):t._e(),i("v-uni-view",{staticClass:"fz12 color-f grade"},[t._v("当前店铺："+t._s(t.siteName))])],1)],1)],1),i("v-uni-view",{staticStyle:{"background-color":"#fff"}},[i("v-uni-view",{staticClass:"dist-list"},[i("v-uni-view",{staticClass:"dist-item"},[i("v-uni-view",{staticClass:"dist-num fsz34  color-3"},[t._v(t._s(t.info.total_settlement_amount||0))]),i("v-uni-view",{staticClass:"dist-name fsz26 color-9"},[t._v("累计收入(元)")]),i("v-uni-view",{staticClass:"fsz24 color-3"},[t._v("含待结算"+t._s(t.info.freeze_amount||0)+"元")])],1),t._l(t.orderItems,(function(e,a){return i("v-uni-view",{key:a,staticClass:"dist-item"},[i("v-uni-view",{staticClass:"dist-num fsz34 color-3"},[t._v(t._s(e.nums))]),i("v-uni-view",{staticClass:"dist-name fsz26 color-9"},[t._v(t._s(e.name))])],1)}))],2)],1),i("v-uni-view",{staticClass:"cell-group right-img"},[i("v-uni-view",{staticClass:"cell-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goWithdraw()}}},[i("v-uni-view",{staticClass:"cell-item-hd"},[i("v-uni-view",{staticClass:"cell-hd-title"},[t._v("可提现金额（元）")])],1),i("v-uni-view",{staticClass:"cell-item-ft"},[i("v-uni-view",{staticClass:"red-price fsz30"},[t._v(t._s(t.userInfo.balance||0))]),i("v-uni-image",{staticClass:"cell-ft-next icon",attrs:{src:"/static/image/right.png"}})],1)],1)],1),i("v-uni-view",{staticClass:"member-grid margin-cell-group"},[i("v-uni-view",{staticClass:"member-item"},[i("v-uni-view",{staticClass:"color-3 fsz38"},[t._v(t._s(t.info.today_freeze_amount||0))]),i("v-uni-text",{staticClass:"member-item-text"},[t._v("今日收益（元）")])],1),i("v-uni-view",{staticClass:"member-item"},[i("v-uni-view",{staticClass:"color-3 fsz38"},[t._v(t._s(t.info.today_order||0))]),i("v-uni-text",{staticClass:"member-item-text"},[t._v("今日订单")])],1),i("v-uni-view",{staticClass:"member-item"},[i("v-uni-view",{staticClass:"color-3 fsz38"},[t._v(t._s(t.info.today_user||0))]),i("v-uni-text",{staticClass:"member-item-text"},[t._v("今日新增客户")])],1)],1),i("v-uni-view",{staticClass:"cell-group margin-cell-group right-img"},[t._l(t.utilityMenus,(function(e,a){return i("v-uni-view",{key:a,staticClass:"cell-item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.navigateToHandle(e.router)}}},[i("v-uni-view",{staticClass:"cell-item-hd"},[i("v-uni-image",{staticClass:"cell-hd-icon",attrs:{src:e.icon}}),i("v-uni-view",{staticClass:"cell-hd-title"},[t._v(t._s(e.name))])],1),i("v-uni-view",{staticClass:"cell-item-ft"},[i("v-uni-image",{staticClass:"cell-ft-next icon",attrs:{src:"/static/image/right.png"}})],1)],1)})),i("v-uni-view",{staticClass:"cell-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.createPoster()}}},[i("v-uni-view",{staticClass:"cell-item-hd"},[i("v-uni-image",{staticClass:"cell-hd-icon",attrs:{src:"/static/image/extension.png"}}),i("v-uni-view",{staticClass:"cell-hd-title"},[t._v("我要推广")])],1),i("v-uni-view",{staticClass:"cell-item-ft"},[i("v-uni-image",{staticClass:"cell-ft-next icon",attrs:{src:"/static/image/right.png"}})],1)],1)],2),i("jihaiCopyright")],1)},s=[]},"433d":function(t,e,i){var a=i("ba15");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("19b452cb",a,!0,{sourceMap:!1,shadowMode:!1})},"53e4":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"cpr"})},s=[]},"6b6c":function(t,e,i){"use strict";var a=i("433d"),n=i.n(a);n.a},8336:function(t,e,i){"use strict";i.r(e);var a=i("ec76"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},"9a38":function(t,e,i){var a=i("b3c4");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("082b5475",a,!0,{sourceMap:!1,shadowMode:!1})},b3c4:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".member-top[data-v-ef91b0a2]{position:relative;width:100%;height:%?200?%\n\t/* background-color: #FF7159; */}.bg-img[data-v-ef91b0a2]{position:absolute;width:100%;height:100%}.member-top-c[data-v-ef91b0a2]{position:absolute;top:50%;left:%?50?%;-webkit-transform:translateY(-50%);transform:translateY(-50%);\n\t/* text-align: center; */display:-webkit-box;display:-webkit-flex;display:flex}.user-head-img[data-v-ef91b0a2]{display:block;width:%?100?%;height:%?100?%;-webkit-border-radius:50%;border-radius:50%;overflow:hidden;background-color:hsla(0,0%,100%,.7);margin-right:%?20?%}.user-name[data-v-ef91b0a2]{font-size:%?30?%;color:#fff}.member-grid[data-v-ef91b0a2]{background-color:#fff;\n\t/* border-top: 2upx solid #eee; */padding:%?20?% 0}.member-item[data-v-ef91b0a2]{padding:0 %?26?%;text-align:left}.margin-cell-group[data-v-ef91b0a2]{margin:%?20?% 0;color:#666}.badge[data-v-ef91b0a2]{left:%?80?%;top:%?-6?%}uni-button.cell-item-hd[data-v-ef91b0a2]{background-color:#fff;padding:0;line-height:1.4;color:#333}uni-button.cell-item-hd[data-v-ef91b0a2]:after{border:none}.login-btn[data-v-ef91b0a2]{color:#fff;width:%?160?%;height:%?50?%;line-height:%?50?%;-webkit-border-radius:%?25?%;border-radius:%?25?%;background:#ff7159;font-size:12px;margin-top:%?16?%}.dist-list[data-v-ef91b0a2]{overflow:hidden;background-color:#fff;\n\t/* padding: 26rpx 26rpx 0; */margin:0 %?26?%;border-bottom:%?2?% solid #eee}.dist-item[data-v-ef91b0a2]{width:50%;text-align:left;float:left;height:%?120?%;margin-top:%?20?%}",""]),t.exports=e},ba15:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".cpr[data-v-636842b7]{text-align:center;font-size:%?24?%;margin:%?20?% 0}.beian a[data-v-636842b7]{text-decoration:none;color:#999!important}",""]),t.exports=e},cac0:function(t,e,i){"use strict";i.r(e);var a=i("d99b"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},cc22:function(t,e,i){"use strict";i.r(e);var a=i("3525"),n=i("cac0");for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("1ca9");var o,r=i("f0c5"),c=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"ef91b0a2",null,!1,a["a"],o);e["default"]=c.exports},d99b:function(t,e,i){"use strict";var a=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("174c")),s=i("94b4"),o=i("19d5"),r={components:{jihaiCopyright:n.default},mixins:[o.checkLogin],data:function(){return{siteName:this.$store.state.config.shop_name,orderItems:{freeze:{name:"冻结金额",nums:"0"},settlement:{name:"已结算金额",nums:"0"},current_month_order:{name:"本月订单数",nums:"0"}},utilityMenus:{invite:{name:"我的邀请",icon:"/static/image/ic-me-invite.png",router:"../invite/list"},order:{name:"推广订单",icon:"/static/image/extension_order.png",router:"./order"},balance:{name:"我的佣金",icon:"/static/image/ic-me-balance.png",router:"../balance/details?status=5"},my_store:{name:"我的店铺",icon:"/static/image/my_store.png",router:"./my_store"},store_setting:{name:"店铺设置",icon:"/static/image/me-ic-set.png",router:"./store_setting"}},info:{},userInfo:{},shareUrl:"/pages/share/jump"}},onShow:function(){var t=this;"1"!=t.$store.state.config.distribution_store&&(delete this.utilityMenus.my_store,delete this.utilityMenus.store_setting),t.$api.getDistributioninfo({},(function(e){e.status?(t.info=e.data,1==e.data.verify||!t.condition.need_apply&&t.condition_status||t.$common.redirectTo("/pages/member/distribution/index"),t.orderItems.freeze.nums=t.info.freeze_amount,t.orderItems.settlement.nums=t.info.settlement_amount,t.orderItems.current_month_order.nums=t.info.current_month_order,"1"==t.$store.state.config.distribution_store&&(t.utilityMenus.my_store.router="./my_store?store="+t.info.store)):t.$common.errorToShow(e.msg)}))},onLoad:function(){this.initData()},methods:{navigateToHandle:function(t){this.$common.navigateTo(t)},orderNavigateHandle:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(!this.hasLogin)return this.checkIsLogin();this.$store.commit("orderTab",e),this.$common.navigateTo(t)},goAfterSaleList:function(){if(!this.hasLogin)return this.checkIsLogin();this.$common.navigateTo("../after_sale/list")},createPoster:function(){var t=this,e={page:4,params:{store:this.info.store},type:3},i=this.$db.get("userToken");i&&(e.token=i),e.client=1,e.url=s.h5Url+"pages/share/jump",this.$api.share(e,(function(e){e.status?t.$common.navigateTo("/pages/share?poster="+encodeURIComponent(e.data)):t.$common.errorToShow(e.msg)}))},initData:function(){var t=this,e=this;this.$api.userInfo({},(function(i){i.status&&(e.userInfo=i.data),t.getShareUrl()}))},goWithdraw:function(){this.$common.navigateTo("/pages/member/balance/withdraw_cash")},getShareUrl:function(){var t=this,e={client:2,url:"/pages/share/jump",type:1,page:1},i=this.$db.get("userToken");i&&""!=i&&(e["token"]=i),this.$api.share(e,(function(e){t.shareUrl=e.data}))}},onShareAppMessage:function(){return{title:this.$store.state.config.share_title,imageUrl:this.$store.state.config.share_image,path:this.shareUrl}}};e.default=r},ec76:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{shop_beian:this.$store.state.config.shop_beian||""}}};e.default=a}}]);