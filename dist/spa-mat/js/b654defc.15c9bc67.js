(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["b654defc"],{"43ad":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"css-form-items-page"},[n("h3",{staticClass:"legend-title"},[e._v(e._s(e.$t("incomes_menu")))]),n("div",{staticClass:"row row-form"},[n("div",{staticClass:"col-sm-1 col-md-10"}),n("div",{staticClass:"col-sm-2 col-md-1"},[n("q-btn",{staticClass:"full-width",attrs:{color:"secondary",icon:"keyboard_backspace"},on:{click:function(t){e.goBack()}}})],1),n("div",{staticClass:"col-sm-2 col-md-1"},[n("q-btn",{staticClass:"full-width",attrs:{color:"primary",icon:"assignment_turned_in"},on:{click:function(t){e.add()}}})],1)]),n("br"),n("q-table",{attrs:{data:e.items,columns:e.columns,filter:e.filter,separator:e.separator,"row-key":"id",color:"secondary",selected:e.selected,selection:"single",dark:"",dense:"",id:"custom-table"},on:{"update:selected":function(t){e.selected=t}},scopedSlots:e._u([{key:"top-left",fn:function(t){return[n("q-search",{staticClass:"col-sm-2 col-md-6",attrs:{clearable:"",placeholder:e.$t("search_label"),color:"secondary",icon:(t.inFullscreen,"search")},model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}})]}},{key:"top-right",fn:function(e){return[n("q-btn",{attrs:{flat:"",round:"",dense:"",icon:e.inFullscreen?"fullscreen_exit":"fullscreen"},on:{click:e.toggleFullscreen}})]}},{key:"top-selection",fn:function(t){return[n("q-btn",{attrs:{color:"info",flat:"",round:"",icon:(t.inFullscreen,"view_module")},on:{click:function(t){e.view(e.selected[0].id)}}}),n("q-btn",{attrs:{color:"positive",flat:"",round:"",icon:"edit"},on:{click:function(t){e.edit(e.selected[0].id)}}}),n("q-btn",{attrs:{color:"negative",flat:"",round:"",icon:"delete"},on:{click:function(t){e.del(e.selected[0].id)}}})]}}])})],1)},s=[];o._withStripped=!0;n("96cf");var i=n("c973"),l=n.n(i),c=n("3156"),a=n.n(c),r=n("c604"),d=n("6186"),u=n("482e"),f=n("2f62"),m=n("6e87"),b=n("0e0b"),p={name:"incomes-page",components:{QTable:r["a"],QSearch:d["a"],QBtn:u["a"]},data:function(){return{separator:"horizontal",filter:"",selected:[],columns:[{name:"donorName",field:"donorName",label:this.$t("donor_name_label"),sortable:!0},{name:"date",field:"date",label:this.$t("date_label"),type:"date",format:function(e){return b["g"](e)},sortable:!0},{name:"amount",field:"amount",label:this.$t("amount_label"),format:function(e){return b["e"](e)},sortable:!0},{name:"description",field:"description",label:this.$t("description_label"),sortable:!0},{name:"username",field:"username",label:this.$t("registered_by_label"),sortable:!0}]}},created:function(){this.loadItems()},computed:a()({},Object(f["e"])("incomeModule",["deleting","error","items"])),methods:a()({},Object(f["b"])("incomeModule",{loadItems:m["p"]}),{goBack:function(){window.history.go(-1)},add:function(){this.$router.push("/incomes/new")},edit:function(e){this.$router.push({path:"/incomes/".concat(e),query:b["l"]()})},view:function(e){this.$router.push({path:"/incomes/".concat(e),query:b["m"]()})},del:function(){var e=l()(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,b["b"](this.$t("delete_dialog_title"),this.$t("delete_dialog_message"),this.$t("delete_dialog_ok"),this.$t("dialog_cancel"));case 2:n=e.sent,1===n&&(b["r"](this.$t("delete_success_message")),this.loadItems(),this.selected=[]);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}),filters:{}},h=p,_=(n("dc66"),n("2877")),g=Object(_["a"])(h,o,s,!1,null,"d27f66cc",null);g.options.__file="IncomesPage.vue";t["default"]=g.exports},b60f:function(e,t,n){},dc66:function(e,t,n){"use strict";var o=n("b60f"),s=n.n(o);s.a}}]);