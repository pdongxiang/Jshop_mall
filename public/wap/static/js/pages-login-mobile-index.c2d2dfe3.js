(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-mobile-index"],{"06a6":function(t,e,n){"use strict";var o=n("18d7"),i=n.n(o);i.a},"18d7":function(t,e,n){var o=n("65ca");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=n("4f06").default;i("1ac22926",o,!0,{sourceMap:!1,shadowMode:!1})},"19d5":function(t,e,n){"use strict";n("c975"),n("b64b"),Object.defineProperty(e,"__esModule",{value:!0}),e.tools=e.checkLogin=e.jumpBackPage=e.goBack=e.goods=e.orders=void 0;var o={mounted:function(){},methods:{orderDetail:function(t){this.$common.navigateTo("/pages/member/order/orderdetail?order_id="+t)},toPay:function(t){this.$common.navigateTo("/pages/goods/payment/index?order_id="+t+"&type=1")},toEvaluate:function(t){this.$common.navigateTo("/pages/member/order/evaluate?order_id="+t)},showExpress:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",o=encodeURIComponent("code="+t+"&no="+e+"&add="+n);this.$common.navigateTo("/pages/member/order/express_delivery?params="+o)}}};e.orders=o;var i={mounted:function(){},methods:{goodsDetail:function(t){this.$common.navigateTo("/pages/goods/index/index?id="+t)},goodsList:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e="/pages/classify/index";Object.keys(t).length&&(e=this.$common.builderUrlParams(e,t)),this.$common.navigateTo(e)},groupDetail:function(t,e){this.$common.navigateTo("/pages/goods/index/group?id="+t+"&group_id="+e)},pintuanDetail:function(t,e){e?this.$common.navigateTo("/pages/goods/index/pintuan?id="+t+"&team_id="+e):this.$common.navigateTo("/pages/goods/index/pintuan?id="+t)}}};e.goods=i;var a={onBackPress:function(t){if("navigateBack"===t.from)return!1;var e=["/pages/cart/index/index","/pages/member/index/index"],n=this.$store.state.redirectPage;return e.indexOf(n)>-1?(this.$store.commit({type:"redirect",page:""}),uni.switchTab({url:"/pages/index/index"}),!0):void 0},backBtn:function(){var t=getCurrentPages();t.length>1?uni.navigateBack({delta:1}):uni.switchTab({url:"/pages/index/index"})}};e.goBack=a;var r={methods:{handleBack:function(){var t=this.$store.state.redirectPage;console.log(t),this.$store.commit({type:"redirect",page:""});var e=["/pages/index/index","/pages/member/index/index"];e.indexOf(t)>-1?uni.switchTab({url:t}):t?uni.redirectTo({url:t}):uni.switchTab({url:"/pages/index/index"})}}};e.jumpBackPage=r;var s={methods:{checkIsLogin:function(){uni.showToast({title:"请先登录！",icon:"none",duration:800,success:function(t){setTimeout((function(){uni.hideToast(),uni.navigateTo({url:"/pages/login/login/index1"})}),200)}})}}};e.checkLogin=s;var c={methods:{copyData:function(t){var e=this;uni.setClipboardData({data:t,success:function(){e.$common.errorToShow("复制成功")}})}}};e.tools=c},"1c0b3":function(t,e,n){"use strict";n("e25e"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n("19d5"),i={mixins:[o.goBack,o.jumpBackPage],data:function(){return{maxMobile:11,mobile:"",code:"",verification:!0,timer:60,btnb:"btn btn-square btn-c btn-all"}},onLoad:function(t){},computed:{rightMobile:function(){var t={};return this.mobile?/^1[3456789]{1}\d{9}$/gi.test(this.mobile)?t.status=!0:(t.status=!1,t.msg="手机号格式不正确"):(t.status=!1,t.msg="请输入手机号"),t},sendCodeBtn:function(){var t="btn btn-g";return this.mobile.length===this.maxMobile&&this.rightMobile.status?t+" btn-b":t},regButtonClass:function(){return this.mobile&&this.mobile.length===this.maxMobile&&this.code?this.btnb+" btn-b":this.btnb},logoImage:function(){return this.$store.state.config.shop_logo}},onShow:function(){var t=this;t.$db.get("userToken");t.timer=parseInt(t.$db.get("timer")),null!=t.timer&&t.timer>0&&(t.countDown(),t.verification=!1)},methods:{sendCode:function(){var t=this;this.rightMobile.status?(this.$common.loadToShow("发送中..."),setTimeout((function(){t.$common.loadToHide(),t.$api.sms({mobile:t.mobile,code:"bind"},(function(e){e.status?(t.timer=60,t.verification=!1,t.$common.successToShow(e.msg),t.countDown()):t.$common.errorToShow(e.msg)}))}),1e3)):this.$common.errorToShow(this.rightMobile.msg)},countDown:function(){var t=this,e=setInterval((function(){t.timer--,uni.setStorage({key:"timer",data:t.timer,success:function(){}}),t.timer<=0&&(t.verification=!0,clearInterval(e))}),1e3)},toBind:function(){var t=this;if(""==this.mobile)return this.$common.errorToShow("请输入手机号码"),!1;if(""==this.code)return this.$common.errorToShow("请输入验证码"),!1;var e=this.$db.get("userToken"),n={mobile:this.mobile,code:this.code,token:e};this.$api.bindMobile(n,(function(e){e.status?t.redirectHandler():t.$common.errorToShow(e.msg)}))},redirectHandler:function(){var t=this;this.$common.successToShow("登录成功!",(function(){t.$db.set("timer",0),uni.navigateBack({delta:1})}))}}};e.default=i},"65ca":function(t,e,n){var o=n("24fb");e=o(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.content[data-v-2756475d]{height:calc(100vh - %?90?%);background-color:#fff;padding:%?0?% %?100?%}.login-t[data-v-2756475d]{text-align:center;padding:%?50?% 0}.login-logo[data-v-2756475d]{width:%?180?%;height:%?180?%;-webkit-border-radius:%?20?%;border-radius:%?20?%;background-color:#f8f8f8}.login-m[data-v-2756475d]{margin-bottom:%?100?%}.login-item[data-v-2756475d]{border-bottom:%?2?% solid #d0d0d0;overflow:hidden;padding:%?10?%;color:#333;margin-bottom:%?30?%}.login-item-input[data-v-2756475d]{display:inline-block;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-sizing:border-box;box-sizing:border-box}.login-item .btn[data-v-2756475d]{border:none;width:40%;text-align:right;padding:0}.login-item .btn.btn-b[data-v-2756475d]{background:none;color:#333!important}.login-b .btn[data-v-2756475d]{color:#999}.btn-b[data-v-2756475d]{color:#fff!important}.login-other[data-v-2756475d]{margin-bottom:%?40?%}.login-other .item[data-v-2756475d]{padding:%?20?% 0}.btn-square[data-v-2756475d]{color:#333}.agreement[data-v-2756475d]{margin:%?20?% 0;text-align:center}.agreement .color-o[data-v-2756475d]{margin:0 %?10?%}.goforgetpwd[data-v-2756475d]{width:100%;text-align:right}',""]),t.exports=e},"74fc":function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"login-t"},[n("v-uni-image",{staticClass:"login-logo",attrs:{src:t.logoImage,mode:"aspectFill"}})],1),n("v-uni-view",{staticClass:"login-m"},[n("v-uni-view",{staticClass:"login-item"},[n("v-uni-input",{attrs:{type:"number",maxlength:t.maxMobile,placeholder:"请输入手机号码",focus:!0,"placeholder-class":"login-item-i-p fsz26"},model:{value:t.mobile,callback:function(e){t.mobile=e},expression:"mobile"}})],1),n("v-uni-view",{staticClass:"login-item flc"},[n("v-uni-input",{staticClass:"login-item-input",attrs:{"placeholder-class":"login-item-i-p fsz26",type:"number",placeholder:"请输入验证码"},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}}),t.verification?n("v-uni-view",{class:t.sendCodeBtn,on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.sendCode.apply(void 0,arguments)}}},[t._v("发送验证码")]):t._e(),t.verification?t._e():n("v-uni-view",{staticClass:"btn btn-g"},[t._v(t._s(t.timer)+" 秒后重新获取")])],1)],1),n("v-uni-view",{staticClass:"login-b"},[n("v-uni-button",{class:t.regButtonClass,attrs:{"hover-class":"btn-hover"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toBind()}}},[t._v("绑定手机号")])],1)],1)},a=[]},c6a7:function(t,e,n){"use strict";n.r(e);var o=n("74fc"),i=n("f0f0");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("06a6");var r,s=n("f0c5"),c=Object(s["a"])(i["default"],o["b"],o["c"],!1,null,"2756475d",null,!1,o["a"],r);e["default"]=c.exports},f0f0:function(t,e,n){"use strict";n.r(e);var o=n("1c0b3"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);e["default"]=i.a}}]);