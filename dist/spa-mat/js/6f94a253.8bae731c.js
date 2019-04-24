(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["6f94a253"],{"79e9":function(t,s,i){"use strict";i("7cdf"),i("c5f6"),i("6762"),i("2fdb");var e=i("52b5"),a=i("559e");s["a"]={name:"QField",mixins:[a["a"]],props:{inset:{type:String,validator:function(t){return["icon","label","full"].includes(t)}},label:String,count:{type:[Number,Boolean],default:!1},error:Boolean,errorLabel:String,warning:Boolean,warningLabel:String,helper:String,icon:String,iconColor:String,dark:Boolean,orientation:{type:String,validator:function(t){return["vertical","horizontal"].includes(t)}},labelWidth:{type:[Number,String],default:5,validator:function(t){var s=parseInt(t,10);return s>0&&s<13}}},data:function(){return{input:{}}},computed:{hasError:function(){return this.input.error||this.error},hasWarning:function(){return!this.hasError&&(this.input.warning||this.warning)},childHasLabel:function(){return this.input.floatLabel||this.input.stackLabel},isDark:function(){return this.input.dark||this.dark},insetIcon:function(){return["icon","full"].includes(this.inset)},hasNoInput:function(){return this.canRender&&(!this.input.$options||this.input.__needsBorder)},counter:function(){if(this.count){var t=this.input.length||"0";return Number.isInteger(this.count)?"".concat(t," / ").concat(this.count):t}},classes:function(){return{"q-field-responsive":!this.isVertical&&!this.isHorizontal,"q-field-vertical":this.isVertical,"q-field-horizontal":this.isHorizontal,"q-field-floating":this.childHasLabel,"q-field-no-label":!this.label&&!this.$slots.label,"q-field-with-error":this.hasError,"q-field-with-warning":this.hasWarning,"q-field-dark":this.isDark,"q-field-no-input":this.hasNoInput}},computedLabelWidth:function(){return parseInt(this.labelWidth,10)},isVertical:function(){return"vertical"===this.orientation||12===this.computedLabelWidth},isHorizontal:function(){return"horizontal"===this.orientation},labelClasses:function(){return this.isVertical?"col-12":this.isHorizontal?"col-".concat(this.labelWidth):"col-xs-12 col-sm-".concat(this.labelWidth)},inputClasses:function(){return this.isVertical?"col-xs-12":this.isHorizontal?"col":"col-xs-12 col-sm"},iconProps:function(){var t={name:this.icon};return!this.iconColor||this.hasError||this.hasWarning||(t.color=this.iconColor),t},insetHasLabel:function(){return["label","full"].includes(this.inset)}},provide:function(){return{__field:this}},methods:{__registerInput:function(t){this.input=t},__unregisterInput:function(t){t&&t!==this.input||(this.input={})},__getBottomContent:function(t){var s;return this.hasError&&(s=this.$slots["error-label"]||this.errorLabel)?t("div",{staticClass:"q-field-error col"},s):this.hasWarning&&(s=this.$slots["warning-label"]||this.warningLabel)?t("div",{staticClass:"q-field-warning col"},s):(s=this.$slots.helper||this.helper)?t("div",{staticClass:"q-field-helper col"},s):t("div",{staticClass:"col text-transparent"},["|"])},__hasBottom:function(){return this.$slots["error-label"]||this.errorLabel||this.$slots["warning-label"]||this.warningLabel||this.$slots.helper||this.helper||this.count}},render:function(t){var s=this.$slots.label||this.label;return t("div",{staticClass:"q-field row no-wrap items-start",class:this.classes},[this.icon?t(e["a"],{props:this.iconProps,staticClass:"q-field-icon q-field-margin"}):this.insetIcon?t("div",{staticClass:"q-field-icon"}):null,t("div",{staticClass:"row col"},[s||this.insetHasLabel?t("div",{staticClass:"q-field-label q-field-margin",class:this.labelClasses},[t("div",{staticClass:"q-field-label-inner row items-center"},[this.$slots.label||this.label])]):null,t("div",{staticClass:"q-field-content",class:this.inputClasses},[this.$slots.default,this.__hasBottom()?t("div",{staticClass:"q-field-bottom row no-wrap"},[this.__getBottomContent(t),this.counter?t("div",{staticClass:"q-field-counter col-auto"},[this.counter]):null]):null])])])}}},9126:function(t,s,i){"use strict";var e=i("cceb"),a=i.n(e);a.a},cceb:function(t,s,i){},cded:function(t,s,i){"use strict";i.r(s);var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("form",{staticClass:"css-form",attrs:{name:"myForm",novalidate:""}},[i("fieldset",[i("legend",[i("h3",{staticClass:"legend-title"},[t._v(t._s(t.$t("person_label")))])]),i("div",{staticClass:"row row-form"},[i("div",{staticClass:"col-sm-3 col-md-6"},[i("q-field",{attrs:{icon:"account_circle"}},[i("q-input",{staticClass:"form-control",attrs:{readonly:"","float-label":t.$t("username_label")},model:{value:t.user.username,callback:function(s){t.$set(t.user,"username",s)},expression:"user.username"}})],1)],1),i("div",{staticClass:"col-sm-3 col-md-6"},[i("q-field",{attrs:{icon:"email"}},[i("q-input",{staticClass:"form-control",attrs:{readonly:"","float-label":t.$t("email_label")},model:{value:t.user.email,callback:function(s){t.$set(t.user,"email",s)},expression:"user.email"}})],1)],1)]),i("div",{staticClass:"row row-form"},[i("div",{staticClass:"col-sm-3 col-md-6"},[i("q-field",{attrs:{icon:"perm_identity"}},[i("q-input",{staticClass:"form-control",attrs:{readonly:"","float-label":t.$t("firstname_label")},model:{value:t.user.firstName,callback:function(s){t.$set(t.user,"firstName",s)},expression:"user.firstName"}})],1)],1),i("div",{staticClass:"col-sm-3 col-md-6"},[i("q-field",{attrs:{icon:"perm_identity"}},[i("q-input",{staticClass:"form-control",attrs:{readonly:"","float-label":t.$t("lastname_label")},model:{value:t.user.lastName,callback:function(s){t.$set(t.user,"lastName",s)},expression:"user.lastName"}})],1)],1)]),i("div",{staticClass:"row row-form"},[i("div",{staticClass:"col-sm-3 col-md-6"},[i("q-field",{attrs:{icon:"place"}},[i("q-input",{staticClass:"form-control",attrs:{readonly:"","float-label":t.$t("country_label")},model:{value:t.user.country,callback:function(s){t.$set(t.user,"country",s)},expression:"user.country"}})],1)],1),i("div",{staticClass:"col-sm-3 col-md-6"},[i("q-field",{attrs:{icon:"phone"}},[i("q-input",{staticClass:"form-control",attrs:{readonly:"","float-label":t.$t("phone_label")},model:{value:t.user.phone,callback:function(s){t.$set(t.user,"phone",s)},expression:"user.phone"}})],1)],1)]),i("div",{staticClass:"row row-form"},[i("div",{staticClass:"col-sm-3 col-md-6"},[i("q-field",{attrs:{icon:"book"}},[i("q-input",{staticClass:"form-control",attrs:{readonly:"","float-label":t.$t("taxCorrelative_label")},model:{value:t.user.taxCorrelative,callback:function(s){t.$set(t.user,"taxCorrelative",s)},expression:"user.taxCorrelative"}})],1)],1),i("div",{staticClass:"col-sm-3 col-md-6"},[i("q-field",{attrs:{icon:"perm_contact_calendar"}},[i("q-input",{staticClass:"form-control",attrs:{readonly:"","float-label":t.$t("dni_label")},model:{value:t.user.dni,callback:function(s){t.$set(t.user,"dni",s)},expression:"user.dni"}})],1)],1)]),i("div",{staticClass:"row row-form"},[i("div",{staticClass:"col-sm-3 col-md-6"},[i("q-field",{attrs:{icon:"perm_identity"}},[i("q-input",{staticClass:"form-control",attrs:{readonly:"","float-label":t.$t("status_label")},model:{value:t.user.status.name,callback:function(s){t.$set(t.user.status,"name",s)},expression:"user.status.name"}})],1)],1),i("div",{staticClass:"col-sm-3 col-md-6"},[i("q-field",{attrs:{icon:"pin_drop"}},[i("q-input",{staticClass:"form-control",attrs:{readonly:"","float-label":t.$t("foreign_label")},model:{value:t.user.foreign,callback:function(s){t.$set(t.user,"foreign",s)},expression:"user.foreign"}})],1)],1)]),i("br"),i("br"),i("div",{staticClass:"row row-form"},[i("div",{staticClass:"col-sm-0 col-md-8"}),i("div",{staticClass:"col-sm-3 col-md-2"},[i("q-btn",{staticClass:"full-width",attrs:{color:"secondary"},on:{click:function(s){t.goBack()}}},[t._v(t._s(t.$t("goback_text")))])],1),i("div",{staticClass:"col-sm-3 col-md-2"},[i("q-btn",{staticClass:"full-width",attrs:{color:"primary"}},[t._v(t._s(t.$t("save_text")))])],1)])])])])},a=[];e._withStripped=!0;var l=i("3156"),r=i.n(l),o=i("482e"),n=i("5d8b"),c=i("79e9"),u=i("2f62"),d=i("6e87"),f={name:"logInUserPage",components:{QBtn:o["a"],QInput:n["a"],QField:c["a"]},created:function(){this.loadLoggedInUser()},data:function(){return{password:"",confirmPassword:""}},computed:r()({},Object(u["e"])("userModule",["user","saving","changingPassword","errors","error"])),methods:r()({},Object(u["b"])("userModule",{loadUser:d["m"],loadLoggedInUser:d["l"],saveUser:d["w"],saveUserPassword:d["z"]}),{goBack:function(){window.history.go(-1)},changePassword:function(){},cleanPassword:function(){this.password="",this.confirmPassword=""},save:function(){}})},h=f,m=(i("9126"),i("2877")),p=Object(m["a"])(h,e,a,!1,null,"1d47dfb2",null);p.options.__file="LogInUserPage.vue";s["default"]=p.exports}}]);