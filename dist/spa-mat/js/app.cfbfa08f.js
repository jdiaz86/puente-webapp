(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app"],{0:function(e,n,t){e.exports=t("2f39")},"034f":function(e,n,t){"use strict";var o=t("fb1c"),r=t.n(o);r.a},"0e0b":function(e,n,t){"use strict";t.d(n,"e",function(){return a}),t.d(n,"b",function(){return u}),t.d(n,"d",function(){return i}),t.d(n,"c",function(){return s}),t.d(n,"a",function(){return c});var o=t("133b"),r=t("a9a0");function a(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top";o["a"].create({message:e,position:n,type:"positive"})}function u(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top";o["a"].create({message:e,position:n,type:"negative"})}function i(e){r["a"].show({message:e})}function s(){r["a"].hide()}function c(e){}},"1e5d":function(e,n,t){},"2f39":function(e,n,t){"use strict";t.r(n);t("ac6a"),t("4a91"),t("a114"),t("d14b"),t("1e5d"),t("7e6d");var o=t("2b0e"),r=t("e84f"),a=t("7051"),u=t("2040"),i=t("4487"),s=t("cf12"),c=t("46a9"),d=t("32a1"),f=t("f30c"),p=t("ce67"),l=t("482e"),g=t("52b5"),m=t("1180"),_=t("1e55"),h=t("506f"),v=t("b8d9"),b=t("7d43"),S=t("bc9b"),E=t("5931"),w=t("5d8b"),R=t("c563"),U=t("9413"),T=t("b5b8"),A=t("1526"),P=t("133b"),k=t("f9d8"),C=t("a9a0");o["a"].use(r["a"],{config:{},components:{QLayout:a["a"],QLayoutHeader:u["a"],QLayoutFooter:i["a"],QLayoutDrawer:s["a"],QPageContainer:c["a"],QPage:d["a"],QToolbar:f["a"],QToolbarTitle:p["a"],QBtn:l["a"],QIcon:g["a"],QList:m["a"],QListHeader:_["a"],QItem:h["a"],QItemMain:v["a"],QItemSide:b["a"],QToggle:S["a"],QSelect:E["a"],QInput:w["a"],QTabs:R["a"],QRouteTab:U["a"],QPopover:T["a"]},directives:{Ripple:A["a"]},plugins:{Notify:P["a"],LocalStorage:k["a"],Loading:C["a"]}});var I=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"q-app"}},[t("router-view")],1)},O=[];I._withStripped=!0;var y={name:"App"},x=y,L=(t("034f"),t("2877")),N=Object(L["a"])(x,I,O,!1,null,null,null);N.options.__file="App.vue";var Q,H,G=N.exports,q=t("2f62"),D=t("bfa9"),V=t("a002"),F=t.n(V),M={access_token:"",error:void 0,authenticated:!1},$={authenticated:function(e){return e.authenticated}},B=$,W=t("9523"),j=t.n(W),z=t("6e87"),J=(Q={},j()(Q,z["c"],function(e){e.access_token=null,e.authenticated=!1,e.error=null}),j()(Q,z["d"],function(e,n){e.access_token=n.access_token,k["a"].set("token",n.access_token),e.authenticated=!0}),j()(Q,z["b"],function(e,n){e.access_token=null,k["a"].remove("token"),e.error=n,e.authenticated=!1}),j()(Q,z["n"],function(e,n){e.errors=n}),j()(Q,z["o"],function(e){e.authenticated=!1}),Q),Y=J,K=(t("96cf"),t("c973")),X=t.n(K),Z=t("0e0b"),ee="api/";function ne(){return{headers:{Authorization:"bearer ".concat(te())}}}function te(){var e=k["a"].get.item("token");return e?oe(e):k["a"].remove("token"),e}function oe(){return re.apply(this,arguments)}function re(){return re=X()(regeneratorRuntime.mark(function e(){var n,t=arguments;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.length>0&&void 0!==t[0]?t[0]:k["a"].get.item("token"),!n){e.next=3;break}return e.abrupt("return",o["a"].prototype.$axios.get("oauth/check_token?token=".concat(n)).then(function(e){return n}).catch(function(){return Z["b"]("Tu sesión ha expirado, por favor inicia sesión nuevamente."),k["a"].remove("token"),"Error-token-expire"}));case 3:return e.abrupt("return","Error-no-token-found");case 4:case"end":return e.stop()}},e)})),re.apply(this,arguments)}function ae(e,n){var t={username:"instituto_puente",password:"Instituto_puente2019!"},r={withCredentials:!0,auth:t};return o["a"].prototype.$axios.post("oauth/token?grant_type=password&username=".concat(e,"&password=").concat(n),{},r)}function ue(){return se("users/logout")}function ie(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return o["a"].prototype.$axios.get("".concat(ee).concat(e,"/").concat(n),ne())}function se(e,n){return o["a"].prototype.$axios.post("".concat(ee).concat(e,"/"),n,ne())}function ce(e,n){return o["a"].prototype.$axios.put("".concat(ee).concat(e,"/"),n,ne())}var de,fe,pe=(H={},j()(H,z["a"],function(e,n){var t=e.commit,o=n.username,r=n.password;t(z["c"]),ae(o,r).then(function(e){t(z["d"],e.data)}).catch(function(e){t(z["b"],e)})}),j()(H,z["m"],function(e){var n=e.commit;ue().then(function(e){n(z["o"])}).catch(function(e){n(z["n"],e.response.data)})}),H),le=pe,ge={namespaced:!0,state:M,getters:B,mutations:Y,actions:le},me=ge,_e={users:[],user:{name:""},saving:!1,changingPassword:!1,deleting:!1,error:null,errors:[]},he={isAdmin:function(e){var n=e.user.roles;return 0!==n.filter(function(e){return"ADM"===e.code}).length},isTeacher:function(e){var n=e.user.roles;return 0!==n.filter(function(e){return"DCN"===e.code}).length},isDonor:function(e){var n=e.user.roles;return 0!==n.filter(function(e){return"DNT"===e.code}).length}},ve=he,be=(de={},j()(de,z["h"],function(e){e.error=null,e.errors=[],e.changingStatus=!0}),j()(de,z["f"],function(e,n){e.error=n,e.changingStatus=!0}),j()(de,z["g"],function(e){e.changingStatus=!1,e.error=null,e.errors=[]}),j()(de,z["x"],function(e,n){e.saving=!1,e.user=n}),j()(de,z["B"],function(e,n){e.error=n}),j()(de,z["A"],function(e,n){e.error=n}),j()(de,z["q"],function(e,n){e.errors=n,e.saving=!0}),j()(de,z["v"],function(e){e.saving=!0}),j()(de,z["t"],function(e,n){e.errors=n,e.changingPassword=!0}),j()(de,z["u"],function(e){e.changingPassword=!0}),j()(de,z["r"],function(e){e.saving=!1,e.changingPassword=!1,e.error=null,e.errors=[]}),de),Se=be,Ee="users",we=(fe={},j()(fe,z["j"],function(e,n){var t=e.commit;ie(Ee,n).then(function(e){t(z["y"],e.data)}).catch(function(e){t(z["A"],e)})}),j()(fe,z["k"],function(e){var n=e.commit;ie(Ee).then(function(e){n(z["z"],e.data)}).catch(function(e){n(z["A"],e)})}),j()(fe,z["i"],function(e){var n=e.commit;ie(Ee,"me").then(function(e){n(z["x"],e.data)}).catch(function(e){n(z["l"],e)})}),j()(fe,z["p"],function(e,n){var t=e.commit,o=n.user;ce("".concat(Ee,"/me"),o).then(function(e){t(z["v"])}).catch(function(e){t(z["q"],e.response.data)})}),j()(fe,z["s"],function(e,n){var t=e.commit;ce("".concat(Ee,"/changepassword"),{password:n}).then(function(e){t(z["u"])}).catch(function(e){t(z["t"],e.response.data)})}),fe),Re=we,Ue={namespaced:!0,state:_e,getters:ve,mutations:Se,actions:Re},Te=Ue,Ae={languages:{"es-gt":{key:"es-gt",label:"ES"},"en-us":{key:"en-us",label:"EN"}},language:"es-gt"},Pe=t("a41e"),ke=t.n(Pe),Ce=j()({},z["w"],function(e,n){e.language=n}),Ie=Ce,Oe=j()({},z["e"],function(e,n){var t=e.commit,o=n.lang;t(z["w"],o)}),ye=Oe,xe={namespaced:!0,state:Ae,getters:ke.a,mutations:Ie,actions:ye};o["a"].use(q["a"]);var Le=new D["a"]({storage:F.a}),Ne=function(){var e=new q["a"].Store({modules:{loginModule:me,userModule:Te,homeModule:xe},plugins:[Le.plugin]});return e},Qe=t("8c4f");t("6762"),t("2fdb");function He(e){return function(){return t("a2f9")("./".concat(e,".vue"))}}var Ge=[{path:"/login",component:He("login/LoginPage")},{path:"/forgotPassword",component:He("login/ForgotPasswordPage")},{path:"/email/validation/:encodedEmail",component:He("login/ValidationPage")},{path:"/password/restore/:token",component:He("login/RestorePasswordPage")},{path:"/",component:function(){return t.e("5f1e856d").then(t.bind(null,"2710"))},beforeEnter:function(e,n,t){oe().then(function(e){e.includes("Error")?t("/login"):t()})},children:[{path:"/",component:He("home/HomePage")},{path:"/roles",component:He("roles/RolesPage")},{path:"/role/:id?",component:He("roles/RolePage")},{path:"/user",component:He("users/LogInUserPage")},{path:"/users/new",component:He("users/UserCreationPage")},{path:"/user/:id",component:He("users/UserPage")},{path:"/users",component:He("users/UsersPage")},{path:"/users",component:He("users/new")}]},{path:"/forbidden",component:He("error/403")},{path:"/backend_disconnected",component:He("error/501")},{path:"*",component:He("error/404")}];Ge.push({path:"*",component:He("error/404")});var qe=Ge;o["a"].use(Qe["a"]);var De=function(){var e=new Qe["a"]({scrollBehavior:function(){return{y:0}},routes:qe,mode:"hash",base:""});return e},Ve=function(){var e="function"===typeof Ne?Ne():Ne,n="function"===typeof De?De({store:e}):De;e.$router=n;var t={el:"#q-app",router:n,store:e,render:function(e){return e(G)}};return{app:t,store:e,router:n}},Fe=t("a925"),Me={failed:"Action failed",success:"Action was successful",logout:"Logout",loading:"Loading...",expire_session_message:"Your session has expired, please log in again._",password_required:"Password required and must be at least 8 character long.",user_password_required:"Username and password required",user_authenticated_sucess:"Welcome, the user has been authenticated",welcome_user:"Welcome <strong>{name}</strong> to Instituto Puente",about_us_side:'For more information, please visit us at <a target="_blank" href="//www.facebook.com/institutopuenteapb/">Instituto Puente </a>',app_name:"Instituto Puente",app_subtitle:"Changing lives one step at a time",user_label:"User",password_label:"Password",remember_me_label:"Remember Me",forgot_password_text:"Forgot your password?",login_text:"Login",person_label:"Personal Information"},$e={failed:"Lo sentimos, algo ha fallado.",success:"Todo ha salido exitosamente",logout:"Cerrar Sesión",loading:"Cargando...",expire_session_message:"Tu sesión ha expirado, por favor inicia sesión nuevamente.",password_required:"El password es requerido y debe tener mínimo 8 caracteres.",user_password_required:"El usuario y password son requeridos.",user_authenticated_sucess:"Bienvenido, usuario ha sido autenticado.",welcome_user:"Bienvenido <strong>{name}</strong> a Instituto Puente",about_us_side:'Para más información, visítanos en: <a target="_blank" href="//www.facebook.com/institutopuenteapb/">Instituto Puente </a>',app_name:"Instituto Puente",app_subtitle:"Cambiando vidas un niño a la vez.",user_label:"Usuario",password_label:"Contraseña",remember_me_label:"Recordar Sesión",forgot_password_text:"¿Olvidó su contraseña?",login_text:"Iniciar Sesión",person_label:"Información Personal"},Be={"en-us":Me,"es-gt":$e};o["a"].use(Fe["a"]);var We=new Fe["a"]({messages:Be}),je=We,ze=function(e){var n=e.app;e.Vue;je.locale=n.store.state.homeModule.language,je.fallbackLocale=n.store.state.homeModule.language,n.i18n=je},Je=t("bc3a"),Ye=t.n(Je),Ke=function(e){var n=e.Vue,t=null;t="".concat("http","://").concat("localhost",":").concat("8080","/"),n.prototype.$axios=Ye.a.create({baseURL:t})},Xe=t("1dce"),Ze=t.n(Xe),en=function(e){var n=e.Vue;n.use(Ze.a)},nn=Ve(),tn=nn.app,on=nn.store,rn=nn.router;[ze,Ke,en].forEach(function(e){e({app:tn,router:rn,store:on,Vue:o["a"],ssrContext:null})}),new o["a"](tn)},"6e87":function(e,n,t){"use strict";t.d(n,"a",function(){return o}),t.d(n,"c",function(){return r}),t.d(n,"d",function(){return a}),t.d(n,"b",function(){return u}),t.d(n,"l",function(){return i}),t.d(n,"w",function(){return s}),t.d(n,"e",function(){return c}),t.d(n,"i",function(){return d}),t.d(n,"x",function(){return f}),t.d(n,"p",function(){return p}),t.d(n,"q",function(){return l}),t.d(n,"v",function(){return g}),t.d(n,"r",function(){return m}),t.d(n,"m",function(){return _}),t.d(n,"n",function(){return h}),t.d(n,"o",function(){return v}),t.d(n,"s",function(){return b}),t.d(n,"u",function(){return S}),t.d(n,"t",function(){return E}),t.d(n,"B",function(){return w}),t.d(n,"k",function(){return R}),t.d(n,"z",function(){return U}),t.d(n,"A",function(){return T}),t.d(n,"j",function(){return A}),t.d(n,"y",function(){return P}),t.d(n,"f",function(){return k}),t.d(n,"h",function(){return C}),t.d(n,"g",function(){return I});var o="AUTHENTICATE",r="AUTHENTICATION_INIT",a="AUTHENTICATION_SUCCESS",u="AUTHENTICATION_ERROR",i="HOME_ERROR",s="SET_LANGUAGE",c="CHANGE_LANGUAGE",d="FETCH_LOGGED_IN_USER",f="SET_LOGGED_IN_USER",p="SAVE_USER",l="SAVE_USER_ERROR",g="SAVE_USER_SUCCESS",m="SAVE_USER_FINISH",_="LOGOUT_USER",h="LOGOUT_USER_ERROR",v="LOGOUT_USER_SUCCESS",b="SAVE_USER_PASSWORD",S="SAVE_USER_PASSWORD_SUCCESS",E="SAVE_USER_PASSWORD_ERROR",w="USER_ERROR",R="FETCH_USERS",U="SET_USERS",T="USERS_ERROR",A="FETCH_USER",P="SET_USER",k="CHANGE_USER_STATUS_ERROR",C="CHANGE_USER_STATUS_SUCCESS",I="CHANGE_USER_STATUS_FINISH"},"7e6d":function(e,n,t){},a2f9:function(e,n,t){var o={"./error/403.vue":["f694","28ba4a27"],"./error/404.vue":["f96a","7d27bb73"],"./error/501.vue":["aae5","09db7e6d"],"./home/HomePage.vue":["660e","31cfbeb2"],"./login/LoginPage.vue":["acb4","3d673d84"]};function r(e){var n=o[e];return n?t.e(n[1]).then(function(){var e=n[0];return t(e)}):Promise.resolve().then(function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n})}r.keys=function(){return Object.keys(o)},r.id="a2f9",e.exports=r},a41e:function(e,n){},fb1c:function(e,n,t){}},[[0,"runtime","vendor"]]]);