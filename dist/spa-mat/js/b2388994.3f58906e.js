(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["b2388994"],{"1d3b":function(e,t,i){},"3f9b":function(e,t,i){"use strict";var n=i("1d3b"),l=i.n(n);l.a},f375:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"css-form-items-page"},[i("h3",{staticClass:"legend-title"},[e._v(e._s(e.$t("timelines_menu")))]),i("div",{staticClass:"row row-form"},[i("div",{staticClass:"col-sm-1 col-md-10"}),i("div",{staticClass:"col-sm-2 col-md-1"},[i("q-btn",{staticClass:"full-width",attrs:{color:"secondary",icon:"keyboard_backspace"},on:{click:function(t){e.goBack()}}})],1),i("div",{staticClass:"col-sm-2 col-md-1"},[i("q-btn",{staticClass:"full-width",attrs:{color:"primary",icon:"add_box"},on:{click:function(t){e.add()}}})],1)]),i("br"),i("q-table",{attrs:{data:e.items,columns:e.columns,filter:e.filter,separator:e.dataTable.separator,pagination:e.dataTable.pagination,selected:e.selected,selection:e.dataTable.selection,"row-key":"id",color:"secondary",dense:"",dark:"",id:"custom-table"},on:{"update:pagination":function(t){e.$set(e.dataTable,"pagination",t)},"update:selected":function(t){e.selected=t}},scopedSlots:e._u([{key:"top-left",fn:function(t){return[i("q-search",{staticClass:"col-sm-2 col-md-6",attrs:{clearable:"",placeholder:e.$t("search_label"),color:"secondary",icon:(t.inFullscreen,"search")},model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}})]}},{key:"top-right",fn:function(e){return[i("q-btn",{attrs:{flat:"",round:"",dense:"",icon:e.inFullscreen?"fullscreen_exit":"fullscreen"},on:{click:e.toggleFullscreen}})]}},{key:"top-selection",fn:function(t){return[i("q-btn",{attrs:{color:"info",flat:"",round:"",icon:(t.inFullscreen,"visibility")},on:{click:function(t){e.view(e.selected[0].id)}}}),i("q-btn",{attrs:{color:"positive",flat:"",round:"",icon:"edit"},on:{click:function(t){e.edit(e.selected[0].id)}}}),i("q-btn",{attrs:{color:"negative",flat:"",round:"",icon:"delete"},on:{click:function(t){e.del(e.selected[0].id)}}})]}}])})],1)},l=[];n._withStripped=!0;i("96cf");var a=i("c973"),s=i.n(a),o=i("3156"),c=i.n(o),r=i("c604"),d=i("6186"),u=i("482e"),f=i("2f62"),b=i("6e87"),m=i("0e0b"),p={name:"timelines-page",components:{QTable:r["a"],QSearch:d["a"],QBtn:u["a"]},data:function(){return{dataTable:m["f"](),filter:"",selected:[],columns:[{name:"date",field:"date",label:this.$t("date_label"),align:"left",type:"date",format:function(e){return m["i"](e)},sortable:!0},{name:"title",field:"title",label:this.$t("title_label"),align:"left",sortable:!0},{name:"description",field:"description",label:this.$t("description_label"),align:"left",format:function(e){return e.substr(0,75)+"..."},sortable:!0},{name:"icon",field:"icon",label:this.$t("icon_label"),align:"left",sortable:!0}]}},created:function(){this.loadItems()},computed:c()({},Object(f["e"])("timelineModule",["deleting","error","items"])),methods:c()({},Object(f["b"])("timelineModule",{loadItems:b["A"]}),{goBack:function(){window.history.go(-1)},add:function(){this.$router.push("/timelines/new")},edit:function(e){this.$router.push({path:"/timelines/".concat(e),query:m["p"]()})},view:function(e){this.$router.push({path:"/timelines/".concat(e),query:m["q"]()})},del:function(){var e=s()(regeneratorRuntime.mark(function e(t){var i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,m["b"](this.$t("delete_dialog_title"),this.$t("delete_dialog_message"),this.$t("delete_dialog_ok"),this.$t("dialog_cancel"));case 2:i=e.sent,1===i&&(m["w"](this.$t("delete_success_message")),this.loadItems(),this.selected=[]);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()})},h=p,g=(i("3f9b"),i("2877")),_=Object(g["a"])(h,n,l,!1,null,"80edeb24",null);_.options.__file="TimelinesPage.vue";t["default"]=_.exports}}]);