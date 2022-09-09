(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[7],{100:function(t,e,n){"use strict";function o(t,e){return(o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function r(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}n.d(e,"a",(function(){return r}))},120:function(t,e,n){t.exports={wrapper:"Users_wrapper__20akA",padington_wrapper:"Users_padington_wrapper__3ItBa",pagination_btn:"Users_pagination_btn__13b0j",pagination:"Users_pagination__3JFFD",number:"Users_number__1Z8N_",_activ:"Users__activ__2lsHN",box:"Users_box__1r1SO",text:"Users_text__2SU6Y",name:"Users_name__1tRba",status:"Users_status__2QMSZ",contry:"Users_contry__1Vv3B",city:"Users_city__3pbcp",avatar:"Users_avatar__2iUB2",btn_follow:"Users_btn_follow__3hp_O",btn:"Users_btn__1pcw2"}},121:function(t,e,n){t.exports={wrapper:"padington_wrapper__JmK7s",pagination:"padington_pagination__1YtMS",btns:"padington_btns__2U4aR",btn_box:"padington_btn_box__2ZcWK",btn:"padington_btn__1sym8",total_count:"padington_total_count__1O_D_",number:"padington_number__1JxwY",_activ:"padington__activ__3Q7vO"}},129:function(t,e,n){"use strict";n.r(e);var o=n(97),r=n(98),a=n(100),s=n(99),i=n(0),c=n.n(i),u=n(4),l=n(43),p=n(120),g=n.n(p),b=n(9),d=n(2),f=function(t){return Object(d.jsx)("div",{className:g.a.wrapper,children:t.users.map((function(e){var n=t.isBtnDisebled||t.followInProgres.includes(e.id);return Object(d.jsxs)("div",{className:g.a.box,children:[Object(d.jsxs)("div",{className:g.a.text,children:[Object(d.jsx)("div",{className:g.a.name,children:e.name}),Object(d.jsx)("div",{className:g.a.status,children:e.status})]}),Object(d.jsx)(b.b,{to:"/profile/".concat(e.id),children:Object(d.jsx)("div",{className:g.a.avatar,style:{backgroundImage:e.photos.small?"url(".concat(e.photos.small,")"):" url(".concat(t.avatarUser,")")}})}),Object(d.jsx)("button",{className:"".concat(g.a.btn," ").concat(g.a.btn_follow),disabled:n,style:{backgroundColor:n&&"#edffd9",color:n&&"#bed1a8",cursor:n&&"auto"},onClick:function(){return t.toogleFollowBtn(e.followed,e.id)},children:e.followed?"unfollow":"follow"})]},e.id)}))})},_=n(1),h=n(121),P=n.n(h),m=function(t){var e=Math.ceil(t.totalUsersCount/t.pageSize),n=t.showPageNumbers[0],o=t.showPageNumbers[t.showPageNumbers.length-1],r=t.showPageNumbers.map((function(e){return Object(d.jsxs)("li",{onClick:function(){return t.onPageChanged(e)},className:"".concat(P.a.number," ").concat(t.currentPage===e?P.a._activ:""),children:[" ",e]},e)})),a=[{disabled:1===n||!1,hidden:e<11||!1,onClick:t.goStartPage,className:P.a.btn,text:"<start"},{disabled:n<101||!1,hidden:e<101||!1,onClick:function(){return t.onClickBtnPrev(100)},className:P.a.btn,text:"<<<100"},{disabled:n<11||!1,hidden:e<21||!1,onClick:function(){return t.onClickBtnPrev(10)},className:P.a.btn,text:"<<10"},{disabled:1===n||!1,hidden:e<11||!1,onClick:function(){return t.onClickBtnPrev(1)},className:P.a.btn,text:"<"},{disabled:o===e||!1,hidden:e<11||!1,onClick:function(){return t.onClickBtnNext(1)},className:P.a.btn,text:">"},{disabled:o>e-10||!1,hidden:e<21||!1,onClick:function(){return t.onClickBtnNext(10)},className:P.a.btn,text:"10>>"},{disabled:o>e-100||!1,hidden:e<101||!1,onClick:function(){return t.onClickBtnNext(100)},className:P.a.btn,text:"100>>>"},{disabled:o===e||!1,hidden:e<11||!1,onClick:t.goEndPage,className:P.a.btn,text:"end>"}].map((function(t,n){return Object(d.jsxs)("li",{className:P.a.btn_box,children:[Object(d.jsx)("button",Object(_.a)(Object(_.a)({},t),{},{children:t.text})),3===n&&Object(d.jsxs)("div",{className:P.a.total_count,children:[" ","Total pages - ".concat(e)]})]},n)}));return Object(d.jsxs)("div",{className:P.a.wrapper,children:[Object(d.jsx)("ul",{className:P.a.pagination,children:r}),Object(d.jsx)("ul",{className:P.a.btns,children:a})]})},j=n(26),x=n(41),v=function(t){Object(a.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).onClickBtnNext=function(e){t.props.onPageChanged(t.props.currentPage+e),t.props.changePadingtonNext(e)},t.onClickBtnPrev=function(e){t.props.onPageChanged(t.props.currentPage-e),t.props.changePadingtonPrev(e)},t.goStartPage=function(){t.props.onPageChanged(1),t.props.goStartPage()},t.goEndPage=function(){t.props.onPageChanged(Math.ceil(t.props.totalUsersCount/t.props.pageSize)),t.props.goEndPage()},t}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(d.jsxs)(d.Fragment,{children:[this.props.isFetching&&Object(d.jsx)(j.a,{}),Object(d.jsx)(m,{currentPage:this.props.currentPage,totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,showPageNumbers:this.props.showPageNumbers,onPageChanged:this.props.onPageChanged,onClickBtnNext:this.onClickBtnNext,onClickBtnPrev:this.onClickBtnPrev,goStartPage:this.goStartPage,goEndPage:this.goEndPage}),Object(d.jsx)(f,{users:this.props.users,avatarUser:this.props.avatarUser,followInProgres:this.props.followInProgres,toogleFollowBtn:this.props.toogleFollowBtn,isBtnDisebled:this.props.isBtnDisebled})]})}}]),n}(c.a.Component);e.default=Object(u.b)((function(t){return{users:t.usersPage.users,pageSize:t.usersPage.pageSize,totalUsersCount:t.usersPage.totalUsersCount,currentPage:t.usersPage.currentPage,showPageNumbers:t.usersPage.showPageNumbers,isFetching:t.usersPage.isFetching,followInProgres:t.usersPage.followInProgres,avatarUser:x.a,isBtnDisebled:!t.auth.isAuth}}),{changePadingtonNext:l.a,changePadingtonPrev:l.b,goStartPage:l.f,goEndPage:l.e,getUsers:l.d,onPageChanged:l.g,toogleFollowBtn:l.h})(v)},97:function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return o}))},98:function(t,e,n){"use strict";function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function r(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}n.d(e,"a",(function(){return r}))},99:function(t,e,n){"use strict";function o(t){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function r(t){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function s(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=o(t);if(e){var s=o(this).constructor;n=Reflect.construct(r,arguments,s)}else n=r.apply(this,arguments);return a(this,n)}}n.d(e,"a",(function(){return s}))}}]);
//# sourceMappingURL=7.bc7778c5.chunk.js.map