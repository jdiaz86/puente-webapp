(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["52294b00"],{"4ca7":function(e,t,a){},7865:function(e,t,a){"use strict";var s=a("4ca7"),l=a.n(s);l.a},8015:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"css-form-items-page"},[a("h3",{staticClass:"legend-title"},[e._v(e._s(e.$t("users_menu")))]),a("div",{staticClass:"row row-form"},[a("div",{staticClass:"col-sm-1 col-md-10"}),a("div",{staticClass:"col-sm-2 col-md-1"},[a("q-btn",{staticClass:"full-width",attrs:{color:"secondary",icon:"keyboard_backspace"},on:{click:function(t){e.goBack()}}})],1),a("div",{staticClass:"col-sm-2 col-md-1"},[a("q-btn",{staticClass:"full-width",attrs:{color:"primary",icon:"add_box"}})],1)]),a("br"),a("q-table",{attrs:{data:e.items,columns:e.columns,filter:e.filter,separator:e.dataTable.separator,pagination:e.dataTable.pagination,selected:e.selected,selection:e.dataTable.selection,"row-key":"id",color:"secondary",dense:"",dark:"",id:"custom-table"},on:{"update:pagination":function(t){e.$set(e.dataTable,"pagination",t)},"update:selected":function(t){e.selected=t}},scopedSlots:e._u([{key:"top-left",fn:function(t){return[a("q-search",{staticClass:"col-sm-2 col-md-6",attrs:{clearable:"",placeholder:e.$t("search_label"),color:"secondary",icon:(t.inFullscreen,"search")},model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}})]}},{key:"top-right",fn:function(e){return[a("q-btn",{attrs:{flat:"",round:"",dense:"",icon:e.inFullscreen?"fullscreen_exit":"fullscreen"},on:{click:e.toggleFullscreen}})]}},{key:"top-selection",fn:function(t){return[a("q-btn",{attrs:{color:"info",flat:"",round:"",icon:(t.inFullscreen,"visibility")},on:{click:function(t){e.view(e.selected[0].id)}}}),a("q-btn",{attrs:{color:"positive",flat:"",round:"",icon:"edit"},on:{click:function(t){e.edit(e.selected[0].id)}}}),a("q-btn",{attrs:{color:"negative",flat:"",round:"",icon:"delete"},on:{click:function(t){e.del(e.selected[0].id)}}})]}}])})],1)},l=[];s._withStripped=!0;a("96cf");var n=a("c973"),i=a.n(n),o=a("3156"),c=a.n(o),r=a("c604"),d=a("6186"),u=a("482e"),f=a("2f62"),b=a("6e87"),m=a("0e0b"),h={name:"users-page",components:{QTable:r["a"],QSearch:d["a"],QBtn:u["a"]},data:function(){return{dataTable:m["f"](),filter:"",selected:[],columns:[{name:"username",field:"username",label:this.$t("username_label"),sortable:!0},{name:"firstName",field:"firstName",label:this.$t("firstname_label"),sortable:!0},{name:"rolesAssigned",field:"rolesAssigned",label:this.$t("roles_label"),sortable:!0},{name:"lastName",field:"lastName",label:this.$t("lastname_label"),sortable:!0},{name:"email",field:"email",label:this.$t("email_label"),sortable:!0},{name:"country",field:"country",label:this.$t("country_label"),sortable:!0},{name:"phone",field:"phone",label:this.$t("phone_label"),sortable:!0}]}},created:function(){this.loadItems()},computed:c()({},Object(f["e"])("userModule",["deleting","error","items"])),methods:c()({},Object(f["b"])("userModule",{loadItems:b["C"]}),{goBack:function(){window.history.go(-1)},add:function(){this.$router.push("/users/new")},edit:function(e){this.$router.push({path:"/users/".concat(e),query:m["p"]()})},view:function(e){this.$router.push({path:"/users/".concat(e),query:m["q"]()})},del:function(){var e=i()(regeneratorRuntime.mark(function e(t){var a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,m["b"](this.$t("delete_dialog_title"),this.$t("delete_dialog_message"),this.$t("delete_dialog_ok"),this.$t("dialog_cancel"));case 2:a=e.sent,1===a&&(m["w"](this.$t("delete_success_message")),this.loadItems(),this.selected=[]);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()})},p=h,_=(a("7865"),a("2877")),g=Object(_["a"])(p,s,l,!1,null,"3bb508e5",null);g.options.__file="UsersPage.vue";t["default"]=g.exports}}]);