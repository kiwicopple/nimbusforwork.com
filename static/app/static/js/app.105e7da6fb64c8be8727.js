webpackJsonp([1],{NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("7+uW"),r={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var a=n("VU/8")({name:"App"},r,!1,function(e){n("gsu9")},null,null).exports,i=n("/ocq"),o={name:"HelloWorld",created:function(){var e=this;document.addEventListener("message",function(t){e.msg=t})},data:function(){return{msg:"Welcome to Your Vue.js Ap"}}},u={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"hello"},[t("h1",[this._v(this._s(this.msg))])])},staticRenderFns:[]};var c=n("VU/8")(o,u,!1,function(e){n("dbLe")},"data-v-1db19ee1",null).exports,d={name:"CrewAppSettings",created:function(){var e=this;document.addEventListener("message",function(t){e.msg=t})},data:function(){return{msg:"Crew Settings"}}},l={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"hello"},[t("h1",[this._v(this._s(this.$route.params.userId))])])},staticRenderFns:[]};var p=n("VU/8")(d,l,!1,function(e){n("k0zo")},"data-v-083fbe53",null).exports;s.a.use(i.a);var f=new i.a({routes:[{path:"/",name:"HelloWorld",component:c},{path:"/crew/settings/:userId",name:"CrewAppSettings",component:p,props:{default:!0}}]});s.a.config.productionTip=!1,new s.a({el:"#app",router:f,components:{App:a},template:"<App/>"})},dbLe:function(e,t){},gsu9:function(e,t){},k0zo:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.105e7da6fb64c8be8727.js.map