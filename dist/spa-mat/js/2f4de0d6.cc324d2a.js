(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2f4de0d6"],{1331:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=(0,n.regex)("integer",/^-?[0-9]*$/);t.default=i},"2a12":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=function(e){return(0,n.withParams)({type:"maxLength",max:e},function(t){return!(0,n.req)(t)||(0,n.len)(t)<=e})};t.default=i},3185:function(e,t,r){"use strict";var n=r("4672"),i=r.n(n);i.a},3360:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"and"},function(){for(var e=this,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return t.length>0&&t.reduce(function(t,r){return t&&r.apply(e,n)},!0)})};t.default=i},"3a54":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=(0,n.regex)("alphaNum",/^[a-zA-Z0-9]*$/);t.default=i},"45b8":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=(0,n.regex)("numeric",/^[0-9]*$/);t.default=i},4672:function(e,t,r){},"46bc":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=function(e){return(0,n.withParams)({type:"maxValue",max:e},function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e})};t.default=i},"5d75":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=/(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/,o=(0,n.regex)("email",i);t.default=o},"5db3":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=function(e){return(0,n.withParams)({type:"minLength",min:e},function(t){return!(0,n.req)(t)||(0,n.len)(t)>=e})};t.default=i},"61bf":function(e,t,r){},6235:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=(0,n.regex)("alpha",/^[a-zA-Z]*$/);t.default=i},6417:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=function(e){return(0,n.withParams)({type:"not"},function(t,r){return!(0,n.req)(t)||!e.call(this,t,r)})};t.default=i},"718c":function(e,t,r){"use strict";var n=r("61bf"),i=r.n(n);i.a},"772d":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i,o=(0,n.regex)("url",i);t.default=o},"78ef":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"withParams",{enumerable:!0,get:function(){return n.default}}),t.regex=t.ref=t.len=t.req=void 0;var n=i(r("8750"));function i(e){return e&&e.__esModule?e:{default:e}}function o(e){return o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}var a=function(e){if(Array.isArray(e))return!!e.length;if(void 0===e||null===e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===o(e)){for(var t in e)return!0;return!1}return!!String(e).length};t.req=a;var u=function(e){return Array.isArray(e)?e.length:"object"===o(e)?Object.keys(e).length:String(e).length};t.len=u;var s=function(e,t,r){return"function"===typeof e?e.call(t,r):r[e]};t.ref=s;var l=function(e,t){return(0,n.default)({type:e},function(e){return!a(e)||t.test(e)})};t.regex=l},"79e9":function(e,t,r){"use strict";r("7cdf"),r("c5f6"),r("6762"),r("2fdb");var n=r("52b5"),i=r("559e");t["a"]={name:"QField",mixins:[i["a"]],props:{inset:{type:String,validator:function(e){return["icon","label","full"].includes(e)}},label:String,count:{type:[Number,Boolean],default:!1},error:Boolean,errorLabel:String,warning:Boolean,warningLabel:String,helper:String,icon:String,iconColor:String,dark:Boolean,orientation:{type:String,validator:function(e){return["vertical","horizontal"].includes(e)}},labelWidth:{type:[Number,String],default:5,validator:function(e){var t=parseInt(e,10);return t>0&&t<13}}},data:function(){return{input:{}}},computed:{hasError:function(){return this.input.error||this.error},hasWarning:function(){return!this.hasError&&(this.input.warning||this.warning)},childHasLabel:function(){return this.input.floatLabel||this.input.stackLabel},isDark:function(){return this.input.dark||this.dark},insetIcon:function(){return["icon","full"].includes(this.inset)},hasNoInput:function(){return this.canRender&&(!this.input.$options||this.input.__needsBorder)},counter:function(){if(this.count){var e=this.input.length||"0";return Number.isInteger(this.count)?"".concat(e," / ").concat(this.count):e}},classes:function(){return{"q-field-responsive":!this.isVertical&&!this.isHorizontal,"q-field-vertical":this.isVertical,"q-field-horizontal":this.isHorizontal,"q-field-floating":this.childHasLabel,"q-field-no-label":!this.label&&!this.$slots.label,"q-field-with-error":this.hasError,"q-field-with-warning":this.hasWarning,"q-field-dark":this.isDark,"q-field-no-input":this.hasNoInput}},computedLabelWidth:function(){return parseInt(this.labelWidth,10)},isVertical:function(){return"vertical"===this.orientation||12===this.computedLabelWidth},isHorizontal:function(){return"horizontal"===this.orientation},labelClasses:function(){return this.isVertical?"col-12":this.isHorizontal?"col-".concat(this.labelWidth):"col-xs-12 col-sm-".concat(this.labelWidth)},inputClasses:function(){return this.isVertical?"col-xs-12":this.isHorizontal?"col":"col-xs-12 col-sm"},iconProps:function(){var e={name:this.icon};return!this.iconColor||this.hasError||this.hasWarning||(e.color=this.iconColor),e},insetHasLabel:function(){return["label","full"].includes(this.inset)}},provide:function(){return{__field:this}},methods:{__registerInput:function(e){this.input=e},__unregisterInput:function(e){e&&e!==this.input||(this.input={})},__getBottomContent:function(e){var t;return this.hasError&&(t=this.$slots["error-label"]||this.errorLabel)?e("div",{staticClass:"q-field-error col"},t):this.hasWarning&&(t=this.$slots["warning-label"]||this.warningLabel)?e("div",{staticClass:"q-field-warning col"},t):(t=this.$slots.helper||this.helper)?e("div",{staticClass:"q-field-helper col"},t):e("div",{staticClass:"col text-transparent"},["|"])},__hasBottom:function(){return this.$slots["error-label"]||this.errorLabel||this.$slots["warning-label"]||this.warningLabel||this.$slots.helper||this.helper||this.count}},render:function(e){var t=this.$slots.label||this.label;return e("div",{staticClass:"q-field row no-wrap items-start",class:this.classes},[this.icon?e(n["a"],{props:this.iconProps,staticClass:"q-field-icon q-field-margin"}):this.insetIcon?e("div",{staticClass:"q-field-icon"}):null,e("div",{staticClass:"row col"},[t||this.insetHasLabel?e("div",{staticClass:"q-field-label q-field-margin",class:this.labelClasses},[e("div",{staticClass:"q-field-label-inner row items-center"},[this.$slots.label||this.label])]):null,e("div",{staticClass:"q-field-content",class:this.inputClasses},[this.$slots.default,this.__hasBottom()?e("div",{staticClass:"q-field-bottom row no-wrap"},[this.__getBottomContent(e),this.counter?e("div",{staticClass:"q-field-counter col-auto"},[this.counter]):null]):null])])])}}},8750:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n="web"===Object({NODE_ENV:"development",CLIENT:!0,SERVER:!1,DEV:!1,PROD:!0,THEME:"mat",MODE:"spa",BACKEND_PROTOCOL_DEV:"http",BACKEND_HOSTNAME_DEV:"localhost",BACKEND_PORT_DEV:"8080",BACKEND_PROTOCOL_PROD:"https",BACKEND_HOSTNAME_PROD:"puente-app.herokuapp.com",OAUTH_CLIENT:"instituto_puente",OAUTH_CLIENT_KEY:"Instituto_puente2019!",APP_NAME:"Instituto Puente",URL_APP:"www.facebook.com/institutopuenteapb/",VUE_ROUTER_MODE:"hash",VUE_ROUTER_BASE:"",APP_URL:"undefined"}).BUILD?r("cb69").withParams:r("0234").withParams,i=n;t.default=i},"91d3":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,n.withParams)({type:"macAddress"},function(t){if(!(0,n.req)(t))return!0;if("string"!==typeof t)return!1;var r="string"===typeof e&&""!==e?t.split(e):12===t.length||16===t.length?t.match(/.{2}/g):null;return null!==r&&(6===r.length||8===r.length)&&r.every(o)})};t.default=i;var o=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},aa82:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=function(e){return(0,n.withParams)({type:"requiredIf",prop:e},function(t,r){return!(0,n.ref)(e,this,r)||(0,n.req)(t)})};t.default=i},acb4:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("login-form",{on:{onLogin:e.loginUser}})],1)},i=[];n._withStripped=!0;var o=r("3156"),a=r.n(o),u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"error-page window-height window-width column items-center no-wrap",staticStyle:{background:"url('statics/login_background.jpg') center no-repeat","background-size":"cover"}},[r("div",{staticClass:"login-card bg-white column justify-center content-center"},[e._m(0),r("br"),r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-10 col-md-12"},[r("q-field",{attrs:{icon:"perm_identity"}},[r("q-input",{attrs:{"float-label":e.$t("username_label"),error:e.$v.login.username.$error},on:{blur:e.$v.login.username.$touch},model:{value:e.login.username,callback:function(t){e.$set(e.login,"username",t)},expression:"login.username"}})],1)],1),r("div",{staticClass:"col-sm-10 col-md-12"},[r("q-field",{attrs:{icon:"enhanced_encryption"}},[r("q-input",{attrs:{"float-label":e.$t("password_label"),type:"password",error:e.$v.login.password.$error},on:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.loginUser()},blur:e.$v.login.password.$touch},model:{value:e.login.password,callback:function(t){e.$set(e.login,"password",t)},expression:"login.password"}})],1)],1)]),r("br"),r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-3 col-md-6"},[r("q-toggle",{attrs:{label:e.$t("remember_me_label")},model:{value:e.login.rememberMe,callback:function(t){e.$set(e.login,"rememberMe",t)},expression:"login.rememberMe"}})],1),r("div",{staticClass:"col-sm-3 col-md-6"},[r("a",{staticStyle:{"text-align":"right",display:"block"},on:{click:function(t){e.$router.push("/forgotPassword")}}},[e._v(e._s(e.$t("forgot_password_text")))])])]),r("br"),r("br"),r("div",{staticClass:"row"},[r("q-btn",{staticClass:"btnLogin",staticStyle:{width:"100%"},attrs:{color:"primary"},on:{click:function(t){e.loginUser()}}},[e._v(e._s(e.$t("login_text")))])],1),r("br")])])},s=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"items-center row"},[r("div",{staticClass:"col-sm-10 col-md-12"},[r("img",{staticStyle:{width:"100%"},attrs:{src:"statics/logoLogin.jpg"}})])])}];u._withStripped=!0;r("6762"),r("2fdb");var l=r("f9d8"),c=r("482e"),f=r("bc9b"),d=r("5d8b"),h=r("79e9"),p=r("2f62"),b=r("b5ae"),m=r("6e87"),g=r("0e0b"),v={name:"loginFormComponent",components:{QBtn:c["a"],QToggle:f["a"],QInput:d["a"],QField:h["a"]},data:function(){return{login:{username:"",password:"",rememberMe:!1}}},validations:{login:{username:{required:b["required"]},password:{required:b["required"],min:Object(b["minLength"])(8)}}},watch:{error:function(e){e&&(e.includes("Network Error")?g["b"](this.$t("network_access_error")):g["b"](this.$t("bad_credentials_error")),g["c"]())},authenticated:function(e){e&&!0===e&&l["a"].get.item("token")&&(this.$router.push("/"),this.loadLoggedInUser(),g["e"](this.$t("user_authenticated_sucess")),g["c"]())}},computed:a()({},Object(p["e"])("loginModule",["error","authenticated"])),methods:a()({},Object(p["b"])("userModule",{loadLoggedInUser:m["m"]}),Object(p["b"])("loginModule",{authenticate:m["a"]}),{loginUser:function(){g["a"](),this.$v.login.$touch(),this.$v.login.$error?this.$v.login.password.$error?g["b"](this.$t("password_required")):g["b"](this.$t("user_password_required")):(g["d"](this.$t("loading")),this.login.rememberMe&&!0===this.login.rememberMe?(l["a"].set("rememberMe",!0),l["a"].set("username",this.login.username),l["a"].set("password",this.login.password)):(l["a"].remove("rememberMe"),l["a"].remove("username"),l["a"].remove("password")),this.$emit("onLogin",this.login))}})},_=v,y=(r("718c"),r("2877")),w=Object(y["a"])(_,u,s,!1,null,"b0a96878",null);w.options.__file="loginForm.vue";var P=w.exports,O={name:"loginPage",components:{LoginForm:P},methods:a()({},Object(p["b"])("loginModule",{authenticate:m["a"]}),{loginUser:function(e){this.authenticate({username:e.username,password:e.password})}})},j=O,$=(r("3185"),Object(y["a"])(j,n,i,!1,null,null,null));$.options.__file="LoginPage.vue";t["default"]=$.exports},b5ae:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"alpha",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"alphaNum",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"numeric",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"between",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"email",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"ipAddress",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"macAddress",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"maxLength",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"minLength",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"required",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"requiredIf",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(t,"requiredUnless",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(t,"sameAs",{enumerable:!0,get:function(){return b.default}}),Object.defineProperty(t,"url",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(t,"or",{enumerable:!0,get:function(){return g.default}}),Object.defineProperty(t,"and",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(t,"not",{enumerable:!0,get:function(){return _.default}}),Object.defineProperty(t,"minValue",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(t,"maxValue",{enumerable:!0,get:function(){return w.default}}),Object.defineProperty(t,"integer",{enumerable:!0,get:function(){return P.default}}),Object.defineProperty(t,"decimal",{enumerable:!0,get:function(){return O.default}}),t.helpers=void 0;var n=q(r("6235")),i=q(r("3a54")),o=q(r("45b8")),a=q(r("ec11")),u=q(r("5d75")),s=q(r("c99d")),l=q(r("91d3")),c=q(r("2a12")),f=q(r("5db3")),d=q(r("d4f4")),h=q(r("aa82")),p=q(r("e652")),b=q(r("b6cb")),m=q(r("772d")),g=q(r("d294")),v=q(r("3360")),_=q(r("6417")),y=q(r("eb66")),w=q(r("46bc")),P=q(r("1331")),O=q(r("c301")),j=$(r("78ef"));function $(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}function q(e){return e&&e.__esModule?e:{default:e}}t.helpers=j},b6cb:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=function(e){return(0,n.withParams)({type:"sameAs",eq:e},function(t,r){return t===(0,n.ref)(e,this,r)})};t.default=i},c301:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=(0,n.regex)("decimal",/^[-]?\d*(\.\d+)?$/);t.default=i},c99d:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=(0,n.withParams)({type:"ipAddress"},function(e){if(!(0,n.req)(e))return!0;if("string"!==typeof e)return!1;var t=e.split(".");return 4===t.length&&t.every(o)});t.default=i;var o=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var t=0|+e;return t>=0&&t<=255}},cb69:function(e,t,r){"use strict";(function(e){function r(e){return r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.withParams=void 0;var n="undefined"!==typeof window?window:"undefined"!==typeof e?e:{},i=function(e,t){return"object"===r(e)&&void 0!==t?t:e(function(){})},o=n.vuelidate?n.vuelidate.withParams:i;t.withParams=o}).call(this,r("c8ba"))},d294:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"or"},function(){for(var e=this,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return t.length>0&&t.reduce(function(t,r){return t||r.apply(e,n)},!1)})};t.default=i},d4f4:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=(0,n.withParams)({type:"required"},n.req);t.default=i},e652:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=function(e){return(0,n.withParams)({type:"requiredUnless",prop:e},function(t,r){return!!(0,n.ref)(e,this,r)||(0,n.req)(t)})};t.default=i},eb66:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=function(e){return(0,n.withParams)({type:"minValue",min:e},function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e})};t.default=i},ec11:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=function(e,t){return(0,n.withParams)({type:"between",min:e,max:t},function(r){return!(0,n.req)(r)||(!/\s/.test(r)||r instanceof Date)&&+e<=+r&&+t>=+r})};t.default=i}}]);