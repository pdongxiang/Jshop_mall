(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-member-distribution-user"],{"174c":function(t,e,i){"use strict";i.r(e);var n=i("53e4"),a=i("8336");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("6b6c");var s,r=i("f0c5"),c=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"636842b7",null,!1,n["a"],s);e["default"]=c.exports},"19d5":function(t,e,i){"use strict";i("c975"),i("b64b"),i("ac1f"),i("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.subscription=e.clickUrl=e.tools=e.checkLogin=e.jumpBackPage=e.goBack=e.goods=e.orders=void 0;var n={mounted:function(){},methods:{orderDetail:function(t){this.$common.navigateTo("/pages/member/order/orderdetail?order_id="+t)},toPay:function(t){this.$common.navigateTo("/pages/goods/payment/index?order_id="+t+"&type=1")},toEvaluate:function(t){this.$common.navigateTo("/pages/member/order/evaluate?order_id="+t)},showExpress:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=encodeURIComponent("code="+t+"&no="+e+"&add="+i);this.$common.navigateTo("/pages/member/order/express_delivery?params="+n)}}};e.orders=n;var a={mounted:function(){},methods:{goodsDetail:function(t){this.$common.navigateTo("/pages/goods/index/index?id="+t)},goodsList:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e="/pages/classify/index";Object.keys(t).length&&(e=this.$common.builderUrlParams(e,t)),this.$common.navigateTo(e)},groupDetail:function(t,e){this.$common.navigateTo("/pages/goods/index/group?id="+t+"&group_id="+e)},pintuanDetail:function(t,e){e?this.$common.navigateTo("/pages/goods/index/pintuan?id="+t+"&team_id="+e):this.$common.navigateTo("/pages/goods/index/pintuan?id="+t)}}};e.goods=a;var o={onBackPress:function(t){if("navigateBack"===t.from)return!1;var e=["/pages/cart/index/index","/pages/member/index/index"],i=this.$store.state.redirectPage;return e.indexOf(i)>-1?(this.$store.commit({type:"redirect",page:""}),uni.switchTab({url:"/pages/index/index"}),!0):void 0},backBtn:function(){var t=getCurrentPages();t.length>1?uni.navigateBack({delta:1}):uni.switchTab({url:"/pages/index/index"})}};e.goBack=o;var s={methods:{handleBack:function(){var t=this.$store.state.redirectPage;console.log(t),this.$store.commit({type:"redirect",page:""});var e=["/pages/index/index","/pages/member/index/index"];e.indexOf(t)>-1?uni.switchTab({url:t}):t?uni.redirectTo({url:t}):uni.switchTab({url:"/pages/index/index"})}}};e.jumpBackPage=s;var r={methods:{checkIsLogin:function(){uni.showToast({title:"请先登录！",icon:"none",duration:800,success:function(t){setTimeout((function(){uni.hideToast(),uni.navigateTo({url:"/pages/login/login/index1"})}),200)}})}}};e.checkLogin=r;var c={methods:{setBarTitle:function(t){uni.setNavigationBarTitle({title:this.$t("".concat(t))})},copyData:function(t){var e=this;uni.setClipboardData({data:t,success:function(){e.$common.errorToShow("复制成功")}})},previewImage:function(t,e){uni.previewImage({current:e||0,urls:t,indicator:"default"})},savePoster:function(){var t=this;t.downloadIamge(t.poster,"image")},downloadIamge:function(t,e){var i=new Image;i.setAttribute("crossorigin","anonymous"),i.onload=function(){var t=document.createElement("canvas");t.width=i.width,t.height=i.height;var n=t.getContext("2d");n.drawImage(i,0,0,i.width,i.height);var a=t.toDataURL("image/png"),o=document.createElement("a"),s=new MouseEvent("click");o.download=e||"photo",o.href=a,o.dispatchEvent(s)},i.src=t},downloadImageOfMp:function(t){}}};e.tools=c;var u={methods:{action:function(t,e){if(e)if(1==t)if(-1!=e.indexOf("http"))window.location.href=e;else{if("/pages/index/index"==e||"/pages/classify/classify"==e||"/pages/cart/index/index"==e||"/pages/me/index"==e)return void uni.switchTab({url:e});if(!(e.indexOf("/pages/coupon/coupon")>-1))return void navigateTo(e);var i=e.replace("/pages/coupon/coupon?id=","");this.receiveCoupon(i)}else 2==t?this.goodsDetail(e):3==t?this.$common.navigateTo("/pages/article/index?id="+e+"&id_type=1"):4==t?this.$common.navigateTo("/pages/article/list?cid="+e):5==t&&this.$common.navigateTo("/pages/form/detail/form?id="+e)},receiveCoupon:function(t){var e=this,i={promotion_id:t};this.$api.getCoupon(i,(function(t){t.status?e.$common.successToShow(t.msg):e.$common.errorToShow(t.msg)}))},goodsDetail:function(t){var e="/pages/goods/index/index?id="+t;navigateTo(e)}}};e.clickUrl=u;var d={data:function(){return{msgList:[{name:"下单通知",desc:"商城下单成功后通知我",func:"order",tmpl:"",status:!1},{name:"支付通知",desc:"订单支付后通知我",func:"pay",tmpl:"",status:!1},{name:"待付通知",desc:"未支付订单取消前通知我",func:"cancel",tmpl:"",status:!1},{name:"发货通知",desc:"订单发货后通知我",func:"ship",tmpl:"",status:!1},{name:"售后通知",desc:"订单售后结果通知我",func:"after_sale",tmpl:"",status:!1},{name:"退款通知",desc:"售后退款结果通知我",func:"refund",tmpl:"",status:!1}]}},methods:{getSubscriptionTmplIds:function(t){var e=this;this.$api.getSubscriptionTmplIds({type:t},(function(t){if(t.status){console.log("res.statue",t);for(var i=0;i<e.msgList.length;i++)t.data[e.msgList[i].func]&&(e.msgList[i].tmpl=t.data[e.msgList[i].func].template_id,""!=e.msgList[i].tmpl&&(e.msgList[i].status=!0))}else e.$common.errorToShow("消息订阅配置信息获取失败")}))},subAction:function(t){"function"==typeof t&&t()}}};e.subscription=d},"433d":function(t,e,i){var n=i("ba15");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("19b452cb",n,!0,{sourceMap:!1,shadowMode:!1})},"53e4":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"cpr"})},o=[]},"545e":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"member-top"},[i("v-uni-image",{staticClass:"bg-img",attrs:{src:"/static/image/member-bg.png"}}),i("v-uni-view",{staticClass:"member-top-c"},[i("v-uni-image",{staticClass:"user-head-img",attrs:{mode:"aspectFill",src:t.userInfo.avatar}}),i("v-uni-view",{},[i("v-uni-view",{staticClass:"user-name fsz34"},[t._v(t._s(t.userInfo.nickname))]),t.info.grade_name?i("v-uni-view",{staticClass:"fz12 color-f grade"},[t._v("当前等级："+t._s(t.info.grade_name))]):t._e(),i("v-uni-view",{staticClass:"fz12 color-f grade"},[t._v("当前店铺："+t._s(t.siteName))])],1)],1)],1),i("v-uni-view",{staticStyle:{"background-color":"#fff"}},[i("v-uni-view",{staticClass:"dist-list"},[i("v-uni-view",{staticClass:"dist-item"},[i("v-uni-view",{staticClass:"dist-num fsz34  color-3"},[t._v(t._s(t.info.total_settlement_amount||0))]),i("v-uni-view",{staticClass:"dist-name fsz26 color-9"},[t._v("累计收入(元)")]),i("v-uni-view",{staticClass:"fsz24 color-3"},[t._v("含待结算"+t._s(t.info.freeze_amount||0)+"元")])],1),t._l(t.orderItems,(function(e,n){return i("v-uni-view",{key:n,staticClass:"dist-item"},[i("v-uni-view",{staticClass:"dist-num fsz34 color-3"},[t._v(t._s(e.nums))]),i("v-uni-view",{staticClass:"dist-name fsz26 color-9"},[t._v(t._s(e.name))])],1)}))],2)],1),i("v-uni-view",{staticClass:"cell-group right-img"},[i("v-uni-view",{staticClass:"cell-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goWithdraw()}}},[i("v-uni-view",{staticClass:"cell-item-hd"},[i("v-uni-view",{staticClass:"cell-hd-title"},[t._v("可提现金额（元）")])],1),i("v-uni-view",{staticClass:"cell-item-ft"},[i("v-uni-view",{staticClass:"red-price fsz30"},[t._v(t._s(t.userInfo.balance||0))]),i("v-uni-image",{staticClass:"cell-ft-next icon",attrs:{src:"/static/image/right.png"}})],1)],1)],1),i("v-uni-view",{staticClass:"member-grid margin-cell-group"},[i("v-uni-view",{staticClass:"member-item"},[i("v-uni-view",{staticClass:"color-3 fsz38"},[t._v(t._s(t.info.today_freeze_amount||0))]),i("v-uni-text",{staticClass:"member-item-text"},[t._v("今日收益（元）")])],1),i("v-uni-view",{staticClass:"member-item"},[i("v-uni-view",{staticClass:"color-3 fsz38"},[t._v(t._s(t.info.today_order||0))]),i("v-uni-text",{staticClass:"member-item-text"},[t._v("今日订单")])],1),i("v-uni-view",{staticClass:"member-item"},[i("v-uni-view",{staticClass:"color-3 fsz38"},[t._v(t._s(t.info.today_user||0))]),i("v-uni-text",{staticClass:"member-item-text"},[t._v("今日新增客户")])],1)],1),i("v-uni-view",{staticClass:"cell-group margin-cell-group right-img"},[t._l(t.utilityMenus,(function(e,n){return i("v-uni-view",{key:n,staticClass:"cell-item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.navigateToHandle(e.router)}}},[i("v-uni-view",{staticClass:"cell-item-hd"},[i("v-uni-image",{staticClass:"cell-hd-icon",attrs:{src:e.icon}}),i("v-uni-view",{staticClass:"cell-hd-title"},[t._v(t._s(e.name))])],1),i("v-uni-view",{staticClass:"cell-item-ft"},[i("v-uni-image",{staticClass:"cell-ft-next icon",attrs:{src:"/static/image/right.png"}})],1)],1)})),i("v-uni-view",{staticClass:"cell-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.createPoster()}}},[i("v-uni-view",{staticClass:"cell-item-hd"},[i("v-uni-image",{staticClass:"cell-hd-icon",attrs:{src:"/static/image/extension.png"}}),i("v-uni-view",{staticClass:"cell-hd-title"},[t._v("我要推广")])],1),i("v-uni-view",{staticClass:"cell-item-ft"},[i("v-uni-image",{staticClass:"cell-ft-next icon",attrs:{src:"/static/image/right.png"}})],1)],1)],2),i("jihaiCopyright")],1)},o=[]},"6b6c":function(t,e,i){"use strict";var n=i("433d"),a=i.n(n);a.a},8336:function(t,e,i){"use strict";i.r(e);var n=i("ec76"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},af06:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".member-top[data-v-16ff3c76]{position:relative;width:100%;height:%?200?%\r\n\t/* background-color: #FF7159; */}.bg-img[data-v-16ff3c76]{position:absolute;width:100%;height:100%}.member-top-c[data-v-16ff3c76]{position:absolute;top:50%;left:%?50?%;-webkit-transform:translateY(-50%);transform:translateY(-50%);\r\n\t/* text-align: center; */display:-webkit-box;display:-webkit-flex;display:flex}.user-head-img[data-v-16ff3c76]{display:block;width:%?100?%;height:%?100?%;-webkit-border-radius:50%;border-radius:50%;overflow:hidden;background-color:hsla(0,0%,100%,.7);margin-right:%?20?%}.user-name[data-v-16ff3c76]{font-size:%?30?%;color:#fff}.member-grid[data-v-16ff3c76]{background-color:#fff;\r\n\t/* border-top: 2upx solid #eee; */padding:%?20?% 0}.member-item[data-v-16ff3c76]{padding:0 %?26?%;text-align:left}.margin-cell-group[data-v-16ff3c76]{margin:%?20?% 0;color:#666}.badge[data-v-16ff3c76]{left:%?80?%;top:%?-6?%}uni-button.cell-item-hd[data-v-16ff3c76]{background-color:#fff;padding:0;line-height:1.4;color:#333}uni-button.cell-item-hd[data-v-16ff3c76]:after{border:none}.login-btn[data-v-16ff3c76]{color:#fff;width:%?160?%;height:%?50?%;line-height:%?50?%;-webkit-border-radius:%?25?%;border-radius:%?25?%;background:#ff7159;font-size:12px;margin-top:%?16?%}.dist-list[data-v-16ff3c76]{overflow:hidden;background-color:#fff;\r\n\t/* padding: 26rpx 26rpx 0; */margin:0 %?26?%;border-bottom:%?2?% solid #eee}.dist-item[data-v-16ff3c76]{width:50%;text-align:left;float:left;height:%?120?%;margin-top:%?20?%}",""]),t.exports=e},ba15:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".cpr[data-v-636842b7]{text-align:center;font-size:%?24?%;margin:%?20?% 0}.beian a[data-v-636842b7]{text-decoration:none;color:#999!important}",""]),t.exports=e},cac0:function(t,e,i){"use strict";i.r(e);var n=i("d99b"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},cc22:function(t,e,i){"use strict";i.r(e);var n=i("545e"),a=i("cac0");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("e119");var s,r=i("f0c5"),c=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"16ff3c76",null,!1,n["a"],s);e["default"]=c.exports},d99b:function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("174c")),o=i("94b4"),s=i("19d5"),r={components:{jihaiCopyright:a.default},mixins:[s.checkLogin],data:function(){return{siteName:this.$store.state.config.shop_name,orderItems:{freeze:{name:"冻结金额",nums:"0"},settlement:{name:"已结算金额",nums:"0"},current_month_order:{name:"本月订单数",nums:"0"}},utilityMenus:{invite:{name:"我的邀请",icon:"/static/image/ic-me-invite.png",router:"../invite/list"},order:{name:"推广订单",icon:"/static/image/extension_order.png",router:"./order"},balance:{name:"我的佣金",icon:"/static/image/ic-me-balance.png",router:"../balance/details?status=5"},my_store:{name:"我的店铺",icon:"/static/image/my_store.png",router:"./my_store"},store_setting:{name:"店铺设置",icon:"/static/image/me-ic-set.png",router:"./store_setting"}},info:{},userInfo:{},shareUrl:"/pages/share/jump"}},onShow:function(){var t=this;"1"!=t.$store.state.config.distribution_store&&(delete this.utilityMenus.my_store,delete this.utilityMenus.store_setting),t.$api.getDistributioninfo({},(function(e){e.status?(t.info=e.data,t.condition.hasOwnProperty("verify")&&(1==t.condition.verify||(2==t.condition.verify||3==t.condition.verify?t.$common.redirectTo("/pages/member/distribution/apply_state"):t.condition.need_apply&&t.condition.condition_status?t.$common.redirectTo("/pages/member/distribution/apply"):t.condition.need_apply&&!t.condition.condition_status?t.$common.redirectTo("/pages/member/distribution/index"):!t.condition.need_apply&&t.condition.condition_status||t.condition.need_apply||t.condition.condition_status||t.$common.redirectTo("/pages/member/distribution/index"))),t.orderItems.freeze.nums=t.info.freeze_amount,t.orderItems.settlement.nums=t.info.settlement_amount,t.orderItems.current_month_order.nums=t.info.current_month_order,"1"==t.$store.state.config.distribution_store&&(t.utilityMenus.my_store.router="./my_store?store="+t.info.store+"&self=true")):t.$common.errorToShow(e.msg)}))},onLoad:function(){this.initData()},methods:{navigateToHandle:function(t){this.$common.navigateTo(t)},orderNavigateHandle:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(!this.hasLogin)return this.checkIsLogin();this.$store.commit("orderTab",e),this.$common.navigateTo(t)},goAfterSaleList:function(){if(!this.hasLogin)return this.checkIsLogin();this.$common.navigateTo("../after_sale/list")},createPoster:function(){var t=this,e={page:4,params:{store:this.info.store},type:3},i=this.$db.get("userToken");i&&(e.token=i),e.client=1,e.url=o.h5Url+"pages/share/jump",this.$api.share(e,(function(e){e.status?t.$common.navigateTo("/pages/share?poster="+encodeURIComponent(e.data)):t.$common.errorToShow(e.msg)}))},initData:function(){var t=this,e=this;this.$api.userInfo({},(function(i){i.status&&(e.userInfo=i.data),t.getShareUrl()}))},goWithdraw:function(){this.$common.navigateTo("/pages/member/balance/withdraw_cash")},getShareUrl:function(){var t=this,e={client:2,url:"/pages/share/jump",type:1,page:1},i=this.$db.get("userToken");i&&""!=i&&(e["token"]=i),this.$api.share(e,(function(e){t.shareUrl=e.data}))}},onShareAppMessage:function(){return{title:this.$store.state.config.share_title,imageUrl:this.$store.state.config.share_image,path:this.shareUrl}}};e.default=r},dadc:function(t,e,i){var n=i("af06");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("0ae5f591",n,!0,{sourceMap:!1,shadowMode:!1})},e119:function(t,e,i){"use strict";var n=i("dadc"),a=i.n(n);a.a},ec76:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{shop_beian:this.$store.state.config.shop_beian||""}}};e.default=n}}]);