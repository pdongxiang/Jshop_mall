(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-member-order-evaluate"],{"19d5":function(t,e,i){"use strict";i("c975"),i("b64b"),i("ac1f"),i("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.subscription=e.clickUrl=e.tools=e.checkLogin=e.jumpBackPage=e.goBack=e.goods=e.orders=void 0;var a={mounted:function(){},methods:{orderDetail:function(t){this.$common.navigateTo("/pages/member/order/orderdetail?order_id="+t)},toPay:function(t){this.$common.navigateTo("/pages/goods/payment/index?order_id="+t+"&type=1")},toEvaluate:function(t){this.$common.navigateTo("/pages/member/order/evaluate?order_id="+t)},showExpress:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",a=encodeURIComponent("code="+t+"&no="+e+"&add="+i);this.$common.navigateTo("/pages/member/order/express_delivery?params="+a)}}};e.orders=a;var n={mounted:function(){},methods:{goodsDetail:function(t){this.$common.navigateTo("/pages/goods/index/index?id="+t)},goodsList:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e="/pages/classify/index";Object.keys(t).length&&(e=this.$common.builderUrlParams(e,t)),this.$common.navigateTo(e)},groupDetail:function(t,e){this.$common.navigateTo("/pages/goods/index/group?id="+t+"&group_id="+e)},pintuanDetail:function(t,e){e?this.$common.navigateTo("/pages/goods/index/pintuan?id="+t+"&team_id="+e):this.$common.navigateTo("/pages/goods/index/pintuan?id="+t)}}};e.goods=n;var o={onBackPress:function(t){if("navigateBack"===t.from)return!1;var e=["/pages/cart/index/index","/pages/member/index/index"],i=this.$store.state.redirectPage;return e.indexOf(i)>-1?(this.$store.commit({type:"redirect",page:""}),uni.switchTab({url:"/pages/index/index"}),!0):void 0},backBtn:function(){var t=getCurrentPages();t.length>1?uni.navigateBack({delta:1}):uni.switchTab({url:"/pages/index/index"})}};e.goBack=o;var s={methods:{handleBack:function(){var t=this.$store.state.redirectPage;console.log(t),this.$store.commit({type:"redirect",page:""});var e=["/pages/index/index","/pages/member/index/index"];e.indexOf(t)>-1?uni.switchTab({url:t}):t?uni.redirectTo({url:t}):uni.switchTab({url:"/pages/index/index"})}}};e.jumpBackPage=s;var c={methods:{checkIsLogin:function(){uni.showToast({title:"请先登录！",icon:"none",duration:800,success:function(t){setTimeout((function(){uni.hideToast(),uni.navigateTo({url:"/pages/login/login/index1"})}),200)}})}}};e.checkLogin=c;var r={methods:{setBarTitle:function(t){uni.setNavigationBarTitle({title:this.$t("".concat(t))})},copyData:function(t){var e=this;uni.setClipboardData({data:t,success:function(){e.$common.errorToShow("复制成功")}})},previewImage:function(t,e){uni.previewImage({current:e||0,urls:t,indicator:"default"})},savePoster:function(){var t=this;t.downloadIamge(t.poster,"image")},downloadIamge:function(t,e){var i=new Image;i.setAttribute("crossorigin","anonymous"),i.onload=function(){var t=document.createElement("canvas");t.width=i.width,t.height=i.height;var a=t.getContext("2d");a.drawImage(i,0,0,i.width,i.height);var n=t.toDataURL("image/png"),o=document.createElement("a"),s=new MouseEvent("click");o.download=e||"photo",o.href=n,o.dispatchEvent(s)},i.src=t},downloadImageOfMp:function(t){}}};e.tools=r;var d={methods:{action:function(t,e){if(e)if(1==t)if(-1!=e.indexOf("http"))window.location.href=e;else{if("/pages/index/index"==e||"/pages/classify/classify"==e||"/pages/cart/index/index"==e||"/pages/me/index"==e)return void uni.switchTab({url:e});if(!(e.indexOf("/pages/coupon/coupon")>-1))return void navigateTo(e);var i=e.replace("/pages/coupon/coupon?id=","");this.receiveCoupon(i)}else 2==t?this.goodsDetail(e):3==t?this.$common.navigateTo("/pages/article/index?id="+e+"&id_type=1"):4==t?this.$common.navigateTo("/pages/article/list?cid="+e):5==t&&this.$common.navigateTo("/pages/form/detail/form?id="+e)},receiveCoupon:function(t){var e=this,i={promotion_id:t};this.$api.getCoupon(i,(function(t){t.status?e.$common.successToShow(t.msg):e.$common.errorToShow(t.msg)}))},goodsDetail:function(t){var e="/pages/goods/index/index?id="+t;navigateTo(e)}}};e.clickUrl=d;var u={data:function(){return{msgList:[{name:"下单通知",desc:"商城下单成功后通知我",func:"order",tmpl:"",status:!1},{name:"支付通知",desc:"订单支付后通知我",func:"pay",tmpl:"",status:!1},{name:"待付通知",desc:"未支付订单取消前通知我",func:"cancel",tmpl:"",status:!1},{name:"发货通知",desc:"订单发货后通知我",func:"ship",tmpl:"",status:!1},{name:"售后通知",desc:"订单售后结果通知我",func:"after_sale",tmpl:"",status:!1},{name:"退款通知",desc:"售后退款结果通知我",func:"refund",tmpl:"",status:!1}]}},methods:{getSubscriptionTmplIds:function(t){var e=this;this.$api.getSubscriptionTmplIds({type:t},(function(t){if(t.status){console.log("res.statue",t);for(var i=0;i<e.msgList.length;i++)t.data[e.msgList[i].func]&&(e.msgList[i].tmpl=t.data[e.msgList[i].func].template_id,""!=e.msgList[i].tmpl&&(e.msgList[i].status=!0))}else e.$common.errorToShow("消息订阅配置信息获取失败")}))},subAction:function(t){"function"==typeof t&&t()}}};e.subscription=u},2878:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".img-list-item[data-v-8f8cc2c2]{padding:%?30?% %?20?%}.img-list-item-gray[data-v-8f8cc2c2]{background-color:#f7f7f7;overflow:hidden;padding:%?18?% %?20?%}.small-right[data-v-8f8cc2c2]{width:%?520?%}.evaluate-content[data-v-8f8cc2c2]{background-color:#fff;padding:%?20?% %?0?%}.evaluate-c-t[data-v-8f8cc2c2]{width:100%;height:%?240?%}.evaluate-c-t uni-textarea[data-v-8f8cc2c2]{width:100%;height:100%;font-size:%?26?%;padding:%?10?%}.evaluate-c-b[data-v-8f8cc2c2]{overflow:hidden}.upload-img[data-v-8f8cc2c2]{width:%?146?%;height:%?146?%;margin:%?14?%;text-align:center;color:#999;font-size:%?22?%;border:%?2?% solid #e1e1e1;\r\n\r\n-webkit-border-radius:%?4?%;border-radius:%?4?%;display:inline-block;float:left;padding:%?24?% 0}.goods-img-item[data-v-8f8cc2c2]{width:%?174?%;height:%?174?%;padding:%?14?%;float:left;position:relative}.goods-img-item[data-v-8f8cc2c2]:nth-child(4n){margin-right:0}.goods-img-item uni-image[data-v-8f8cc2c2]{width:100%;height:100%}.del[data-v-8f8cc2c2]{width:%?30?%!important;height:%?30?%!important;position:absolute;right:0;top:0;z-index:999}.evaluate-num[data-v-8f8cc2c2]{padding:%?20?% %?26?%;background-color:#fff;margin-top:%?20?%}.evaluate-num-t[data-v-8f8cc2c2]{color:#333;font-size:%?28?%;margin-bottom:%?20?%}.button-bottom .btn[data-v-8f8cc2c2]{width:100%}.evaluate-c-t[data-v-8f8cc2c2]{padding-left:%?20?%;font-size:%?24?%}[data-v-8f8cc2c2] .uni-input-input{font-size:%?26?%!important}.uni-input-placeholder[data-v-8f8cc2c2]{font-size:%?24?%;color:#ccc}",""]),t.exports=e},5299:function(t,e,i){"use strict";i.r(e);var a=i("cc40"),n=i("dc84");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("c3e6");var s,c=i("f0c5"),r=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"8f8cc2c2",null,!1,a["a"],s);e["default"]=r.exports},c3e6:function(t,e,i){"use strict";var a=i("f786"),n=i.n(a);n.a},c5e8:function(t,e,i){"use strict";var a=i("4ea4");i("4160"),i("a434"),i("ac1f"),i("1276"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("0c38")),o=i("19d5"),s={mixins:[o.goods],components:{uniRate:n.default},data:function(){return{orderId:0,info:{},images:[],score:[],textarea:[],isupload:[],rate:5,submitStatus:!1}},onLoad:function(t){this.orderId=t.order_id,this.orderId?this.orderInfo():this.$common.errorToShow("获取失败",(function(){uni.navigateBack({delta:1})}))},computed:{maxUploadImg:function(){return this.$store.state.config.image_max}},methods:{orderInfo:function(){var t=this,e={order_id:this.orderId};this.$api.orderDetail(e,(function(e){if(e.status&&e.data.pay_status>=2&&e.data.ship_status>=3&&e.data.confirm>=2&&1===e.data.is_comment){var i=e.data,a=[],n=[],o=[],s=[];i.items.forEach((function(t){a[t.id]=[],n[t.id]="",o[t.id]=!0,s[t.id]=5})),t.info=i,t.images=a,t.textarea=n,t.score=s,t.isupload=o}else t.$common.errorToShow("订单不存在或状态不可评价!")}))},uploadImg:function(t){var e=this;this.$api.uploadFiles((function(i){if(i.status){var a={url:i.data.url,id:i.data.image_id};e.images[t].push(a),e.$common.successToShow(i.msg)}else e.$common.errorToShow(i.msg)}))},removeImg:function(t,e){this.images[t].splice(e,1)},clickImg:function(t){uni.previewImage({urls:t.split()})},changeScore:function(t){this.score[t.id]=t.value},toEvaluate:function(){var t=this;this.submitStatus=!0;var e={};this.images.forEach((function(i,a){e[a]={images:i,score:t.score[a],textarea:t.textarea[a]}}));var i={order_id:this.orderId,items:e};this.$api.orderEvaluate(i,(function(e){e.status?t.$common.successToShow(e.msg,(function(t){var e=getCurrentPages(),i=e[e.length-2];void 0!==i&&"pages/member/order/orderlist"===i.route&&(i.isReload=!0);var a=e[e.length-3];void 0!==a&&"pages/member/order/orderlist"===a.route&&(a.isReload=!0),uni.navigateBack({delta:1})})):t.$common.errorToShow(e.msg)}),(function(e){t.submitStatus=!1}))}},watch:{images:{handler:function(){var t=this;this.images.forEach((function(e,i){t.isupload[i]=!(e.length>t.maxUploadImg)}))},deep:!0}}};e.default=s},cc40:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var a={uniRate:i("0c38").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"content-top"},[t._l(t.info.items,(function(e){return[e.name.indexOf("赠品")<0?i("v-uni-view",{key:e.id+"_0",staticClass:"img-list"},[i("v-uni-view",{staticClass:"img-list-item"},[i("v-uni-view",{staticClass:"img-list-item-gray"},[i("v-uni-image",{staticClass:"img-list-item-l small-img",attrs:{src:e.image_url,mode:"aspectFill"}}),i("v-uni-view",{staticClass:"img-list-item-r small-right",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goodsDetail(e.goods_id)}}},[i("v-uni-view",{staticClass:"little-right-t"},[i("v-uni-view",{staticClass:"goods-name list-goods-name"},[t._v(t._s(e.name))])],1)],1)],1),i("v-uni-view",{staticClass:"evaluate-num"},[i("v-uni-view",{staticClass:"evaluate-num-t"},[t._v("商品评分")]),i("v-uni-view",{staticClass:"evaluate-num-b"},[i("uni-rate",{attrs:{size:"18",jid:e.id,value:t.score[e.id]},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changeScore.apply(void 0,arguments)}}})],1)],1),i("v-uni-view",{staticClass:"evaluate-content"},[i("v-uni-view",{staticClass:"evaluate-c-t"},[i("v-uni-input",{attrs:{placeholder:"宝贝满足你的期待吗? 说说你的使用心得"},model:{value:t.textarea[e.id],callback:function(i){t.$set(t.textarea,e.id,i)},expression:"textarea[item.id]"}})],1),i("v-uni-view",{staticClass:"evaluate-c-b"},[t._l(t.images[e.id],(function(a,n){return t.images[e.id].length?i("v-uni-view",{key:n,staticClass:"goods-img-item"},[i("v-uni-image",{staticClass:"del",attrs:{src:"/static/image/del.png",mode:""},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.removeImg(e.id,n)}}}),i("v-uni-image",{attrs:{src:a.url,mode:""},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickImg(a.url)}}})],1):t._e()})),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.isupload[e.id],expression:"isupload[item.id]"}],staticClass:"upload-img"},[i("v-uni-image",{staticClass:"icon",attrs:{src:"/static/image/camera.png",mode:""},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.uploadImg(e.id)}}}),i("v-uni-view",{},[t._v("上传照片")])],1)],2)],1)],1)],1):t._e()]}))],2),i("v-uni-view",{staticClass:"button-bottom"},[i("v-uni-button",{staticClass:"btn btn-square btn-b",attrs:{"hover-class":"btn-hover",disabled:t.submitStatus,loading:t.submitStatus},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toEvaluate.apply(void 0,arguments)}}},[t._v("提交评论")])],1)],1)},o=[]},dc84:function(t,e,i){"use strict";i.r(e);var a=i("c5e8"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},f786:function(t,e,i){var a=i("2878");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("d294a80c",a,!0,{sourceMap:!1,shadowMode:!1})}}]);