(this.webpackJsonpweb1bead=this.webpackJsonpweb1bead||[]).push([[0],{33:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){},66:function(e,t,c){},68:function(e,t,c){},73:function(e,t,c){},77:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(0),r=c.n(a),s=c(34),i=c.n(s),o=(c(47),c(48),c(40)),j=c(19),b=c.n(j),l=c(35),u=c(4),d=c(20),h=c.n(d),O=(c(33),c(41)),x=Object(a.createContext)(),f=function(e){var t=Object(a.useState)(),c=Object(u.a)(t,2),r=c[0],s=c[1];return Object(n.jsx)(x.Provider,Object(O.a)({value:{ChangeUsername:function(e){s(e)},username:r}},e))},p=function(){var e=[],t=Object(a.useState)(),c=Object(u.a)(t,2),r=c[0],s=c[1],i=Object(a.useState)(!1),j=Object(u.a)(i,2),d=j[0],O=j[1],f=Object(a.useState)(!1),p=Object(u.a)(f,2),m=p[0],v=p[1],y=Object(a.useState)(0),g=Object(u.a)(y,2),S=g[0],C=g[1],w=Object(a.useContext)(x).username;if(Object(a.useEffect)((function(){m||function(){var e=Object(l.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h()("https://jsonplaceholder.typicode.com/todos/");case 3:t=e.sent,s(t.data),v(!0),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:return e.prev=11,e.next=14,h()("https://cat-fact.herokuapp.com/facts");case 14:O(!0),e.next=20;break;case 17:e.prev=17,e.t1=e.catch(11),console.log(e.t1);case 20:case"end":return e.stop()}}),e,null,[[0,8],[11,17]])})));return function(){return e.apply(this,arguments)}}()()}),[m]),!m)return Object(n.jsx)("h5",{children:"You will see the facts here!"});var N=function(t){var c=localStorage.getItem(w);e[t]&&localStorage.setItem(w,c?JSON.stringify([].concat(Object(o.a)(JSON.parse(c)),[r[t].title])):JSON.stringify([r[t].title]))};return Object(n.jsxs)("div",{className:"styleddiv",children:["These aren't cat facts, because the original API crashed :(",Object(n.jsx)("br",{}),d?"API is back online! :)":"API still not working :(",Object(n.jsx)("br",{}),Object(n.jsx)("input",{type:"checkbox",onChange:function(){e[S]?e[S]=!1:e[S]=!0}}),S+1+". "+JSON.stringify(r[S].title),Object(n.jsx)("br",{}),Object(n.jsx)("input",{type:"checkbox",onChange:function(){e[S+1]?e[S+1]=!1:e[S+1]=!0}}),S+2+". "+JSON.stringify(r[S+1].title),Object(n.jsx)("br",{}),Object(n.jsx)("input",{type:"checkbox",onChange:function(){e[S+2]?e[S+2]=!1:e[S+2]=!0}}),S+3+". "+JSON.stringify(r[S+2].title),Object(n.jsx)("br",{}),Object(n.jsx)("input",{type:"checkbox",onChange:function(){e[S+3]?e[S+3]=!1:e[S+3]=!0}}),S+4+". "+JSON.stringify(r[S+3].title),Object(n.jsx)("br",{}),Object(n.jsxs)("div",{className:"styleddiv",children:[Object(n.jsx)("button",{variant:"primary",className:"button",onClick:function(){C(S>=4?S-4:S)},children:S>=4?Object(n.jsxs)("h4",{children:["Previous ",S-3,"-",S]}):Object(n.jsx)("h4",{children:"No previous available"})}),Object(n.jsx)("button",{variant:"primary",className:"button",onClick:function(){C(S+4)},children:Object(n.jsxs)("h4",{children:["Next ",S+5,"-",S+8]})}),Object(n.jsx)("br",{})]}),Object(n.jsx)("div",{className:"styleddiv",children:Object(n.jsx)("button",{variant:"primary",className:"button",onClick:function(){w?e[S]||e[S+1]||e[S+2]||e[S+3]?(N(S),N(S+1),N(S+2),N(S+3)):alert("No items selected!"):alert("No username set!")},children:Object(n.jsx)("h4",{children:"Save Selected items"})})})]})};function m(e,t){switch(t.type){case"capitalize":return{username:e.username.toUpperCase()};case"delete":return localStorage.removeItem(e.username),window.location.href=window.location.href+"q",{username:e.username};default:throw new Error}}var v=function(){var e=Object(a.useContext)(x).username;return Object(n.jsx)("ul",{children:JSON.parse(localStorage.getItem(e)).map((function(e){return Object(n.jsx)("li",{children:e})}))})},y=function(){var e=Object(a.useContext)(x).username,t={username:e},c=Object(a.useReducer)(m,t),r=Object(u.a)(c,2),s=r[0],i=r[1];return Object(n.jsxs)("div",{children:[Object(n.jsx)("button",{variant:"primary",onClick:function(){return i({type:"capitalize"})},children:"Click here to see your name written with uppercase letters!"}),Object(n.jsx)("button",{variant:"primary",onClick:function(){return i({type:"delete"})},children:"Click here to delete all your data!"}),Object(n.jsx)("br",{}),"Your Name: ",s.username,Object(n.jsx)("br",{}),localStorage.getItem(e)?Object(n.jsx)(v,{}):"You didn't save any facts yet :/"]})},g=function(){return Object(n.jsx)("div",{children:Object(n.jsx)("img",{src:"https://cataas.com/c",alt:"A cat",width:"500",height:"600",loading:"lazy"})})},S=c(5),C=(c(66),Object(S.b)("div").withConfig({displayName:"NameEnter___StyledDiv",componentId:"sc-3lhlvb-0"})(["",""],(function(e){return e._css2}))),w=Object(S.b)("div").withConfig({displayName:"NameEnter___StyledDiv2",componentId:"sc-3lhlvb-1"})(["",""],(function(e){return e._css3})),N=Object(S.b)("div").withConfig({displayName:"NameEnter___StyledDiv3",componentId:"sc-3lhlvb-2"})(["",""],(function(e){return e._css4})),k=function(){var e=Object(a.useContext)(x),t=e.ChangeUsername,c=e.username,r=Object(a.useState)("Welcome, please enter your name!"),s=Object(u.a)(r,2),i=s[0],o=s[1],j=Object(a.useState)(),b=Object(u.a)(j,2),l=b[0],d=b[1];return Object(a.useEffect)((function(){c&&o("Welcome, ".concat(c,"!"))}),[c]),Object(n.jsxs)("div",{children:[Object(n.jsx)(C,{_css2:Object(S.a)(["width:100%;background-color:lightblue;display:flex;justify-content:space-evenly;"]),children:Object(n.jsxs)(w,{_css3:Object(S.a)(["width:40%;display:flex;align-items:center;justify-content:space-evenly;"]),children:[Object(n.jsx)("h3",{children:i}),Object(n.jsx)("input",{type:"text",placeholder:"Your name...",value:l,border:"50px",onChange:function(e){d(e.target.value)}})]})}),Object(n.jsx)(N,{_css4:Object(S.a)(["width:100%;background-color:lightblue;padding-bottom:8px;"]),children:Object(n.jsx)("button",{variant:"primary",className:"button",onClick:function(){t(l)},children:Object(n.jsx)("h4",{children:"Save Username"})})})]})},_=c(10),I=(c(68),Object(S.b)("div").withConfig({displayName:"Header___StyledDiv",componentId:"sc-1q5m9xb-0"})(["",""],(function(e){return e._css2}))),J=function(){var e=Object(a.useContext)(x).username,t=Object(a.useState)("/catfacts"),c=Object(u.a)(t,2),r=c[0],s=c[1];Object(a.useEffect)((function(){e&&s("/saved")}),[e]);return Object(n.jsxs)(I,{_css2:Object(S.a)(["width:100%;display:flex;flex-direction:row;justify-content:space-around;align-items:center;margin-top:0px;background-color:green;"]),children:[Object(n.jsxs)(_.b,{to:"/catfacts",style:{textDecoration:"none"},children:[Object(n.jsx)("img",{src:"https://cnet3.cbsistatic.com/img/zKiT35AfPlfRJvlHty6p4zmpCrw=/940x0/2020/05/01/7f0a951f-d9a2-4847-b962-b254b63842a2/img-4960.jpg",alt:"A cat",width:"120",height:"90",type:"image/webp",loading:"lazy"}),Object(n.jsx)("h1",{children:"Ultimate Cat Site"})]}),Object(n.jsx)(_.b,{to:"/catfacts",style:{textDecoration:"none"},children:Object(n.jsx)("h2",{children:"Cat facts"})}),Object(n.jsx)(_.b,{to:r,onClick:function(){return e?{}:alert("No username set!")},style:{textDecoration:"none"},children:Object(n.jsx)("h2",{children:"Saved cat facts"})}),Object(n.jsx)(_.b,{to:"/catpic",style:{textDecoration:"none"},children:Object(n.jsx)("h2",{children:"Picture of a cat"})})]})},E=(c(73),function(){var e=Object(a.useState)(!1),t=Object(u.a)(e,2),c=t[0],r=t[1];return Object(n.jsxs)("div",{children:[Object(n.jsx)("button",{variant:"secondary",className:"aButton",onClick:function(){return r(!c)},children:Object(n.jsx)("h4",{children:Object(n.jsx)("span",{children:"Show developer"})})}),c?Object(n.jsxs)("div",{children:[Object(n.jsx)("br",{}),"Made by Benedek Jakab",Object(n.jsx)("br",{}),"University of Sopron - Simonyi Karoly Faculty of Engineering, Wood Sciences and Applied Arts",Object(n.jsx)("br",{}),Object(n.jsx)("a",{href:"https://github.com/Manage0/web1beadando",children:Object(n.jsx)("h1",{children:"Source Code available here"})})]}):null]})}),A=c(39),D=c.n(A),P=c.p+"static/media/catpurr.459773ee.mp3",U=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:"styleddiv",children:Object(n.jsx)("b",{children:"Here you can hear a cat purr!"})}),Object(n.jsx)("br",{}),Object(n.jsx)("div",{children:Object(n.jsx)(D.a,{src:P,controls:!0})})]})},z=c(2);var F=function(){return Object(a.useEffect)((function(){document.title="Ultimate Cat Site"}),[]),Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)(f,{children:[Object(n.jsx)(J,{}),Object(n.jsx)(k,{}),Object(n.jsx)(z.b,{exact:!0,path:"/catfacts",component:p}),Object(n.jsx)(z.b,{path:"/saved",component:y}),Object(n.jsx)(z.b,{path:"/catpic",component:g}),Object(n.jsx)(z.a,{path:"*",to:"/catfacts"}),Object(n.jsx)(U,{}),Object(n.jsx)(E,{})]})})},B=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,78)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))};i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(_.a,{children:Object(n.jsx)(F,{})})}),document.getElementById("root")),B()}},[[77,1,2]]]);
//# sourceMappingURL=main.e79871cf.chunk.js.map