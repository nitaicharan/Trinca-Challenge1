(this.webpackJsonptrincachallenge1=this.webpackJsonptrincachallenge1||[]).push([[0],{29:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){},67:function(e,t,c){},68:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(30),i=c.n(s),r=c(10),l=c(2),o=c(12),d=c.n(o),j=c(14),u=c(9),b=c(31),O=c.n(b),m=function(e){return t=e,c="AUTHORIZATION_KEY",localStorage.setItem(c,JSON.stringify(t));var t,c},h=function(){return JSON.parse((e="AUTHORIZATION_KEY",localStorage.getItem(e)||"{}"));var e},p=function(){var e=O.a.create({baseURL:"http://localhost:3333"});return e.interceptors.request.use((function(e){var t=h();return e.headers.Authorization="Bearer ".concat(null===t||void 0===t?void 0:t.access_token),e})),e}();var x=function(e){return p.post("/login",e).then((function(e){return e.data}))},_=c(0),v=Object(n.createContext)({}),f=function(e){var t=Object(n.useState)(h()),c=Object(u.a)(t,2),a=c[0],s=c[1],i=Object(l.g)();Object(n.useEffect)((function(){a&&m(a)}),[a]);var r=function(){var e=Object(j.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",x(t).then(s).then((function(){return i.push("/list")})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(_.jsx)(v.Provider,{value:{authentication:a,logIn:r},children:e.children})},g=c.p+"static/media/trinca.eca43859.svg",N=function(){return Object(_.jsx)("footer",{children:Object(_.jsx)("img",{src:g,alt:"trinca loco"})})},w=function(){return Object(_.jsx)("header",{children:"Barbecue calendar"})},k=c(8),S=c.p+"static/media/icon_money.d670e783.svg",y=c.p+"static/media/icon_people.2feb883b.svg",I=function(e){return Object(_.jsxs)("div",{className:"detail__row",children:[Object(_.jsx)("span",{className:"detail__row--checkbox"}),Object(_.jsx)("span",{className:"detail__row--user",children:e.name}),Object(_.jsx)("span",{className:"detail__row--price",children:e.paid})]})},A=(c(63),function(){var e,t,c=Object(n.useState)(),a=Object(u.a)(c,2),s=a[0],i=a[1],r=Object(l.h)().id;return Object(n.useEffect)((function(){(function(e){return p.get("/barbecues/".concat(e)).then((function(e){return e.data}))})(r).then(i)}),[r]),Object(_.jsx)("main",{className:"detail",children:Object(_.jsxs)("div",{className:"detail__background",children:[Object(_.jsxs)("div",{className:"detail-titles",children:[Object(_.jsxs)("div",{className:"detail__title",children:[Object(_.jsx)("h1",{className:"detail__title--date",children:null===s||void 0===s?void 0:s.create_at}),Object(_.jsx)("span",{className:"detail__title--description",children:null===s||void 0===s?void 0:s.description})]}),Object(_.jsxs)("div",{className:"detail__amount",children:[Object(_.jsxs)("span",{className:"detail__amount--number",children:[Object(_.jsx)("img",{src:y,alt:"",className:"detail__amount--icon"})," ",null!==(e=null===s||void 0===s?void 0:s.users.length)&&void 0!==e?e:0]}),Object(_.jsxs)("span",{className:"detail__amount--number",children:[Object(_.jsx)("img",{src:S,alt:"",className:"detail__amount--icon"})," $ ",null===s||void 0===s?void 0:s.price]})]})]}),null===s||void 0===s||null===(t=s.users)||void 0===t?void 0:t.map((function(e){return Object(_.jsx)(I,Object(k.a)({},e),e.id)}))]})})}),E=(c(29),function(e){var t,c;return Object(_.jsx)(r.b,{style:{textDecoration:"none",color:"inherit"},to:"/list/".concat(e.id),children:Object(_.jsxs)("section",{className:"card",children:[Object(_.jsxs)("div",{className:"card__text",children:[Object(_.jsx)("h2",{className:"card__title",children:e.create_at}),Object(_.jsx)("p",{className:"card__description",children:e.description})]}),Object(_.jsxs)("div",{className:"card__number",children:[Object(_.jsx)("div",{className:"card__amount",children:Object(_.jsxs)("span",{className:"card__amount--result",children:[Object(_.jsx)("img",{src:y,alt:"",className:"card__amount--icon"})," ",null!==(t=null===(c=e.users)||void 0===c?void 0:c.length)&&void 0!==t?t:0]})}),Object(_.jsx)("div",{className:"card__amount",children:Object(_.jsxs)("span",{className:"card__amount--result",children:[Object(_.jsx)("img",{src:S,alt:"",className:"card__amount--icon"})," $ ",e.price]})})]})]})})}),C=c.p+"static/media/icon_bbq.ac532158.svg",J=function(){return Object(_.jsxs)("section",{className:"card card__new",children:[Object(_.jsx)("div",{className:"card__new--icon",children:Object(_.jsx)("img",{src:C,alt:""})}),Object(_.jsx)("span",{className:"card__new--text",children:"Add barbecue"})]})},T=(c(64),function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){p.get("/barbecues").then((function(e){return e.data})).then(a)}),[]),Object(_.jsxs)("main",{className:"list",children:[null===c||void 0===c?void 0:c.map((function(e){return Object(_.jsx)("div",{className:"list-card",children:Object(_.jsx)(E,Object(k.a)({},e))},e.id)})),Object(_.jsx)("div",{className:"list-card",children:Object(_.jsx)(J,{})})]})}),B=c(15),D=function(){return Object(n.useContext)(v)},L=(c(65),function(){var e=Object(n.useState)({email:"",password:""}),t=Object(u.a)(e,2),c=t[0],a=t[1],s=D().logIn,i=function(){var e=Object(j.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,s(Object(k.a)({},c));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r=function(e){e.preventDefault(),a(Object(k.a)(Object(k.a)({},c),{},Object(B.a)({},e.target.name,e.target.value)))};return Object(_.jsx)("section",{className:"login",children:Object(_.jsxs)("form",{className:"login-form",onSubmit:i,children:[Object(_.jsxs)("div",{className:"login__group",children:[Object(_.jsx)("label",{className:"login__group--label",htmlFor:"login",children:"Login"}),Object(_.jsx)("input",{onChange:r,className:"login__group--input",name:"email",id:"login",type:"text",placeholder:"e-mail"})]}),Object(_.jsxs)("div",{className:"login__group",children:[Object(_.jsx)("label",{className:"login__group--label",htmlFor:"password",children:"Password"}),Object(_.jsx)("input",{onChange:r,className:"login__group--input",name:"password",id:"password",type:"password",placeholder:"password"})]}),Object(_.jsx)("div",{className:"login-button",children:Object(_.jsx)("button",{type:"submit",className:"btn btn--black btn-login",children:"Login"})})]})})}),R=c(33),U=function(e){var t=D(),c=e.children,n=Object(R.a)(e,["children"]);return Object(_.jsx)(l.b,Object(k.a)(Object(k.a)({},n),{},{render:function(e){var n,a=e.location;return(null===(n=t.authentication)||void 0===n?void 0:n.access_token)?c:Object(_.jsx)(l.a,{to:{pathname:"/login",state:{from:a}}})}}))};c(66);var q=function(){return Object(_.jsxs)("div",{className:"app",children:[Object(_.jsx)(w,{}),Object(_.jsx)("div",{className:"app__background",children:Object(_.jsxs)(r.a,{children:[Object(_.jsx)(f,{children:Object(_.jsxs)(l.d,{children:[Object(_.jsx)(U,{path:"/list/:id",children:Object(_.jsx)(A,{})}),Object(_.jsx)(U,{path:"/list",children:Object(_.jsx)(T,{})}),Object(_.jsx)(l.b,{path:"/login",component:L}),Object(_.jsx)(l.a,{from:"*",to:"/login"})]})}),Object(_.jsx)(N,{})]})})]})};c(67);i.a.render(Object(_.jsx)(a.a.StrictMode,{children:Object(_.jsx)(q,{})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.f3a0338b.chunk.js.map