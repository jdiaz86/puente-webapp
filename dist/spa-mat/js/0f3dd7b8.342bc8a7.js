(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["0f3dd7b8"],{3836:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("form",{staticClass:"css-form",attrs:{name:"myForm",novalidate:""}},[s("fieldset",[s("legend",[s("h3",{staticClass:"legend-title"},[t._v(t._s(t.$t("user_screen_title")))])]),s("div",{staticClass:"row row-form"},[s("div",{staticClass:"col-sm-3 col-md-6"},[s("q-field",{attrs:{icon:"account_circle"}},[s("q-input",{staticClass:"form-control",attrs:{readonly:t.viewMode,disabled:t.viewMode,"float-label":t.$t("username_label")},model:{value:t.user.username,callback:function(e){t.$set(t.user,"username",e)},expression:"user.username"}})],1)],1),s("div",{staticClass:"col-sm-3 col-md-6"},[s("q-field",{attrs:{icon:"email"}},[s("q-input",{staticClass:"form-control",attrs:{readonly:t.viewMode,disabled:t.viewMode,"float-label":t.$t("email_label")},model:{value:t.user.email,callback:function(e){t.$set(t.user,"email",e)},expression:"user.email"}})],1)],1)]),s("div",{staticClass:"row row-form"},[s("div",{staticClass:"col-sm-3 col-md-6"},[s("q-field",{attrs:{icon:"perm_identity"}},[s("q-input",{staticClass:"form-control",attrs:{readonly:t.viewMode,disabled:t.viewMode,"float-label":t.$t("firstname_label")},model:{value:t.user.firstName,callback:function(e){t.$set(t.user,"firstName",e)},expression:"user.firstName"}})],1)],1),s("div",{staticClass:"col-sm-3 col-md-6"},[s("q-field",{attrs:{icon:"perm_identity"}},[s("q-input",{staticClass:"form-control",attrs:{readonly:t.viewMode,disabled:t.viewMode,"float-label":t.$t("lastname_label")},model:{value:t.user.lastName,callback:function(e){t.$set(t.user,"lastName",e)},expression:"user.lastName"}})],1)],1)]),s("div",{staticClass:"row row-form"},[s("div",{staticClass:"col-sm-3 col-md-6"},[s("q-field",{attrs:{icon:"place"}},[s("q-input",{staticClass:"form-control",attrs:{readonly:t.viewMode,disabled:t.viewMode,"float-label":t.$t("country_label")},model:{value:t.user.country,callback:function(e){t.$set(t.user,"country",e)},expression:"user.country"}})],1)],1),s("div",{staticClass:"col-sm-3 col-md-6"},[s("q-field",{attrs:{icon:"phone"}},[s("q-input",{staticClass:"form-control",attrs:{readonly:t.viewMode,disabled:t.viewMode,"float-label":t.$t("phone_label")},model:{value:t.user.phone,callback:function(e){t.$set(t.user,"phone",e)},expression:"user.phone"}})],1)],1)]),s("div",{staticClass:"row row-form"},[s("div",{staticClass:"col-sm-3 col-md-6"},[s("q-field",{attrs:{icon:"book"}},[s("q-input",{staticClass:"form-control",attrs:{readonly:t.viewMode,disabled:t.viewMode,"float-label":t.$t("taxCorrelative_label")},model:{value:t.user.taxCorrelative,callback:function(e){t.$set(t.user,"taxCorrelative",e)},expression:"user.taxCorrelative"}})],1)],1),s("div",{staticClass:"col-sm-3 col-md-6"},[s("q-field",{attrs:{icon:"perm_contact_calendar"}},[s("q-input",{staticClass:"form-control",attrs:{readonly:t.viewMode,disabled:t.viewMode,"float-label":t.$t("dni_label")},model:{value:t.user.dni,callback:function(e){t.$set(t.user,"dni",e)},expression:"user.dni"}})],1)],1)]),s("div",{staticClass:"row row-form"},[s("div",{staticClass:"col-sm-3 col-md-6"},[s("q-field",{attrs:{icon:"perm_identity"}},[s("q-input",{staticClass:"form-control",attrs:{readonly:t.viewMode,disabled:t.viewMode,"float-label":t.$t("status_label")},model:{value:t.user.status.name,callback:function(e){t.$set(t.user.status,"name",e)},expression:"user.status.name"}})],1)],1),s("div",{staticClass:"col-sm-3 col-md-6"},[s("q-field",{attrs:{icon:"pin_drop"}},[s("q-input",{staticClass:"form-control",attrs:{readonly:t.viewMode,disabled:t.viewMode,"float-label":t.$t("foreign_label")},model:{value:t.user.foreign,callback:function(e){t.$set(t.user,"foreign",e)},expression:"user.foreign"}})],1)],1)]),s("br"),s("br"),s("div",{staticClass:"row row-form"},[s("div",{staticClass:"col-sm-0 col-md-8"}),s("div",{staticClass:"col-sm-3 col-md-2"},[s("q-btn",{staticClass:"full-width",attrs:{color:"secondary"},on:{click:function(e){t.goBack()}}},[t._v(t._s(t.$t("goback_text")))])],1),s("div",{staticClass:"col-sm-3 col-md-2"},[t.editMode?s("q-btn",{staticClass:"full-width",attrs:{color:"primary"},on:{click:function(e){t.save()}}},[t._v(t._s(t.$t("save_text")))]):t._e()],1)])])])])},a=[];i._withStripped=!0;s("96cf");var l=s("c973"),o=s.n(l),r=s("3156"),n=s.n(r),c=s("482e"),d=s("5d8b"),u=s("79e9"),f=s("2f62"),h=s("6e87"),m=s("0e0b"),v={name:"logInUserPage",components:{QBtn:c["a"],QInput:d["a"],QField:u["a"]},created:function(){"view"===this.$route.query.mode?this.viewMode=!0:this.viewMode=!1,"edit"===this.$route.query.mode?this.editMode=!0:this.editMode=!1,this.$route.params.id&&this.loadUser(this.$route.params.id)},data:function(){return{password:""}},computed:n()({},Object(f["e"])("userModule",["user","saving","errors","error"])),methods:n()({},Object(f["b"])("userModule",{loadUser:h["m"],saveUser:h["w"]}),{goBack:function(){window.history.go(-1)},save:function(){var t=o()(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!this.editMode){t.next=5;break}return t.next=3,m["a"](this.$t("modify_dialog_title"),this.$t("modify_dialog_message"),this.$t("modify_dialog_ok"),this.$t("dialog_cancel"));case 3:e=t.sent,1===e&&(m["g"](this.$t("modify_success_message")),this.goBack());case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()})},b=v,p=(s("3e30"),s("2877")),w=Object(p["a"])(b,i,a,!1,null,"31a4227b",null);w.options.__file="UserPage.vue";e["default"]=w.exports},"3e30":function(t,e,s){"use strict";var i=s("f333"),a=s.n(i);a.a},"79e9":function(t,e,s){"use strict";s("7cdf"),s("c5f6"),s("6762"),s("2fdb");var i=s("52b5"),a=s("559e");e["a"]={name:"QField",mixins:[a["a"]],props:{inset:{type:String,validator:function(t){return["icon","label","full"].includes(t)}},label:String,count:{type:[Number,Boolean],default:!1},error:Boolean,errorLabel:String,warning:Boolean,warningLabel:String,helper:String,icon:String,iconColor:String,dark:Boolean,orientation:{type:String,validator:function(t){return["vertical","horizontal"].includes(t)}},labelWidth:{type:[Number,String],default:5,validator:function(t){var e=parseInt(t,10);return e>0&&e<13}}},data:function(){return{input:{}}},computed:{hasError:function(){return this.input.error||this.error},hasWarning:function(){return!this.hasError&&(this.input.warning||this.warning)},childHasLabel:function(){return this.input.floatLabel||this.input.stackLabel},isDark:function(){return this.input.dark||this.dark},insetIcon:function(){return["icon","full"].includes(this.inset)},hasNoInput:function(){return this.canRender&&(!this.input.$options||this.input.__needsBorder)},counter:function(){if(this.count){var t=this.input.length||"0";return Number.isInteger(this.count)?"".concat(t," / ").concat(this.count):t}},classes:function(){return{"q-field-responsive":!this.isVertical&&!this.isHorizontal,"q-field-vertical":this.isVertical,"q-field-horizontal":this.isHorizontal,"q-field-floating":this.childHasLabel,"q-field-no-label":!this.label&&!this.$slots.label,"q-field-with-error":this.hasError,"q-field-with-warning":this.hasWarning,"q-field-dark":this.isDark,"q-field-no-input":this.hasNoInput}},computedLabelWidth:function(){return parseInt(this.labelWidth,10)},isVertical:function(){return"vertical"===this.orientation||12===this.computedLabelWidth},isHorizontal:function(){return"horizontal"===this.orientation},labelClasses:function(){return this.isVertical?"col-12":this.isHorizontal?"col-".concat(this.labelWidth):"col-xs-12 col-sm-".concat(this.labelWidth)},inputClasses:function(){return this.isVertical?"col-xs-12":this.isHorizontal?"col":"col-xs-12 col-sm"},iconProps:function(){var t={name:this.icon};return!this.iconColor||this.hasError||this.hasWarning||(t.color=this.iconColor),t},insetHasLabel:function(){return["label","full"].includes(this.inset)}},provide:function(){return{__field:this}},methods:{__registerInput:function(t){this.input=t},__unregisterInput:function(t){t&&t!==this.input||(this.input={})},__getBottomContent:function(t){var e;return this.hasError&&(e=this.$slots["error-label"]||this.errorLabel)?t("div",{staticClass:"q-field-error col"},e):this.hasWarning&&(e=this.$slots["warning-label"]||this.warningLabel)?t("div",{staticClass:"q-field-warning col"},e):(e=this.$slots.helper||this.helper)?t("div",{staticClass:"q-field-helper col"},e):t("div",{staticClass:"col text-transparent"},["|"])},__hasBottom:function(){return this.$slots["error-label"]||this.errorLabel||this.$slots["warning-label"]||this.warningLabel||this.$slots.helper||this.helper||this.count}},render:function(t){var e=this.$slots.label||this.label;return t("div",{staticClass:"q-field row no-wrap items-start",class:this.classes},[this.icon?t(i["a"],{props:this.iconProps,staticClass:"q-field-icon q-field-margin"}):this.insetIcon?t("div",{staticClass:"q-field-icon"}):null,t("div",{staticClass:"row col"},[e||this.insetHasLabel?t("div",{staticClass:"q-field-label q-field-margin",class:this.labelClasses},[t("div",{staticClass:"q-field-label-inner row items-center"},[this.$slots.label||this.label])]):null,t("div",{staticClass:"q-field-content",class:this.inputClasses},[this.$slots.default,this.__hasBottom()?t("div",{staticClass:"q-field-bottom row no-wrap"},[this.__getBottomContent(t),this.counter?t("div",{staticClass:"q-field-counter col-auto"},[this.counter]):null]):null])])])}}},f333:function(t,e,s){}}]);