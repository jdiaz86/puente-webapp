(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["bcd3c0f2"],{1615:function(e,t,s){"use strict";var l=s("d7bd"),n=s.n(l);n.a},8015:function(e,t,s){"use strict";s.r(t);var l=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"css-form"},[s("h3",{staticClass:"legend-title"},[e._v(e._s(e.$t("users_menu")))]),s("div",{staticClass:"row row-form"},[s("div",{staticClass:"col-sm-1 col-md-10"}),s("div",{staticClass:"col-sm-2 col-md-1"},[s("q-btn",{staticClass:"full-width",attrs:{color:"secondary",icon:"keyboard_backspace"},on:{click:function(t){e.goBack()}}})],1),s("div",{staticClass:"col-sm-2 col-md-1"},[s("q-btn",{staticClass:"full-width",attrs:{color:"primary",icon:"assignment_turned_in"}})],1)]),s("br"),s("q-table",{attrs:{data:e.items,columns:e.columns,filter:e.filter,separator:e.separator,"row-key":"username",color:"secondary",selected:e.selected,selection:"single",dense:"",id:"custom-table"},on:{"update:selected":function(t){e.selected=t}},scopedSlots:e._u([{key:"top-left",fn:function(t){return[s("q-search",{staticClass:"col-sm-2 col-md-6",attrs:{clearable:"",placeholder:e.$t("search_label"),color:"secondary",icon:(t.inFullscreen,"search")},model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}})]}},{key:"top-right",fn:function(e){return[s("q-btn",{attrs:{flat:"",round:"",dense:"",icon:e.inFullscreen?"fullscreen_exit":"fullscreen"},on:{click:e.toggleFullscreen}})]}},{key:"top-selection",fn:function(t){return[s("q-btn",{attrs:{color:"info",flat:"",round:"",icon:(t.inFullscreen,"view_module")},on:{click:function(t){e.view(e.selected[0].id)}}}),s("q-btn",{attrs:{color:"positive",flat:"",round:"",icon:"edit"},on:{click:function(t){e.edit(e.selected[0].id)}}}),s("q-btn",{attrs:{color:"negative",flat:"",round:"",icon:"delete"},on:{click:function(t){e.del(e.selected[0].id)}}})]}}])})],1)},n=[];l._withStripped=!0;s("96cf");var a=s("c973"),o=s.n(a),i=s("3156"),r=s.n(i),c=s("c604"),u=s("6186"),d=s("482e"),f=s("2f62"),m=s("6e87"),b=s("0e0b"),h={name:"users-page",components:{QTable:c["a"],QSearch:u["a"],QBtn:d["a"]},data:function(){return{separator:"horizontal",filter:"",selected:[],columns:[{name:"username",field:"username",label:this.$t("username_label"),sortable:!0},{name:"firstName",field:"firstName",label:this.$t("firstname_label"),sortable:!0},{name:"lastName",field:"lastName",label:this.$t("lastname_label"),sortable:!0},{name:"email",field:"email",label:this.$t("email_label"),sortable:!0},{name:"country",field:"country",label:this.$t("country_label"),sortable:!0},{name:"foreign",field:"foreign",label:this.$t("foreign_label"),sortable:!0},{name:"phone",field:"phone",label:this.$t("phone_label"),sortable:!0}]}},created:function(){this.loadUsers()},computed:r()({},Object(f["e"])("userModule",["deleting","error","items"])),methods:r()({},Object(f["b"])("userModule",{loadUsers:m["p"]}),{goBack:function(){window.history.go(-1)},add:function(){this.$router.push("/users/new")},edit:function(e){this.$router.push({path:"/users/".concat(e),query:b["d"]()})},view:function(e){this.$router.push({path:"/users/".concat(e),query:b["e"]()})},del:function(){var e=o()(regeneratorRuntime.mark(function e(t){var s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,b["a"](this.$t("delete_dialog_title"),this.$t("delete_dialog_message"),this.$t("delete_dialog_ok"),this.$t("delete_dialog_cancel"));case 2:s=e.sent,1===s&&(b["g"](this.$t("delete_success_message")),this.loadUsers(),this.selected=[]);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()})},p=h,_=(s("1615"),s("2877")),g=Object(_["a"])(p,l,n,!1,null,"4801aa37",null);g.options.__file="UsersPage.vue";t["default"]=g.exports},d7bd:function(e,t,s){}}]);