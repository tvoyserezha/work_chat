(this["webpackJsonptot-system__test"]=this["webpackJsonptot-system__test"]||[]).push([[0],{38:function(e,t,n){e.exports=n(77)},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(18),u=n.n(c),s=(n(43),n(44),n(45),n(4)),i=function(){return{type:"USER/DELETE_USER"}},o=n(3),l=Object(o.b)(null,(function(e){return{deleteUser:function(){return e((function(e){localStorage.clear(),e(i()),window.location.reload()}))}}}))((function(e){var t=e.deleteUser;return r.a.createElement("ul",{className:"header__navbar navbar"},r.a.createElement("li",{className:"navbar__item"},r.a.createElement(s.c,{to:"/private",className:"navbar__link"},"\u0417\u0430\u043a\u0440\u0442\u044b\u0435 \u0447\u0430\u0442\u044b")),r.a.createElement("li",{className:"navbar__item"},r.a.createElement(s.c,{to:"/common",className:"navbar__link"},"\u041e\u0431\u0449\u0438\u0439 \u0447\u0430\u0442")),r.a.createElement("li",{className:"navbar__item"},r.a.createElement(s.c,{to:"/auth",className:"navbar__link",onClick:function(){t()}},"\u0412\u044b\u0445\u043e\u0434")))})),m=function(){return r.a.createElement("div",{className:"header"},r.a.createElement("h1",{className:"header__heading"},"Work Chat"),r.a.createElement(l,null))},E=n(13),f=(n(51),n(52),n(6)),d=(n(53),n(54),n(5)),h=n.n(d),g=function(e){return{type:"MESSAGE/REMOVE_MESSAGE",message:e}},b=function(){return function(e){var t=JSON.parse(localStorage.getItem("userData"));e(v(t))}},v=function(e){return{type:"USER/GET_USER",user:e}},p=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return function(n){t&&n(S());try{var a=[];h.a.get(e+".json").then((function(e){e.data&&Object.keys(e.data).forEach((function(t){var n=e.data[t];a.push({id:t,author:n.author,author_id:n.author_id,text:n.text,publish_date:n.publish_date})}))})).then((function(){return n(b())})).then((function(){return n(_(a))})).then((function(){return t?T():{}}))}catch(r){n(j(r)),console.log(r.message)}}},S=function(){return{type:"MESSAGE/FETCH_MESSAGES_START"}},_=function(e){return{type:"MESSAGE/FETCH_MESSAGES_SUCCESS",messages:e}},j=function(e){return{type:"MESSAGE/FETCH_MESSAGES_ERROR",error:e}},O=function(e){return{type:"MESSAGE/EDITING_MESSAGE",isEditing:e}},C=function(e){return{type:"MESSAGE/MESSAGE_WHICH_EDITING",messageWhichEditing:e}},A=Object(o.b)((function(e){return{user:e.userReducer.user,isEditing:e.messagesReducer.isEditing}}),(function(e){return{removeMessage:function(t,n){return e(function(e,t){return function(n){h.a.delete(e+"/".concat(t.id,".json")),n(g(t))}}(t,n))},fetchMessages:function(){return e(p)},getUser:function(){return e(b())},messageWhichEditing:function(t){return e(function(e){return function(t){t(O(!0)),t(C(e))}}(t))},editingMessage:function(t){return e(O(t))}}}))((function(e){var t=e.message,n=e.user,a=e.url,c=e.removeMessage,u=e.editingMessage,s=e.isEditing,i=e.messageWhichEditing;return r.a.createElement("li",{className:"message"},r.a.createElement("div",null,r.a.createElement("h6",{className:"message__name"},t.author),r.a.createElement("p",{className:"message__text"},t.text),r.a.createElement("small",{className:"message__publish-date"},t.publish_date)),n.id===t.author_id?r.a.createElement("div",{className:"message__buttons"},r.a.createElement("button",{className:"button__edit-btn",onClick:function(){return function(e){i(e),s&&u(!1)}(t)}},"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"),r.a.createElement("button",{className:"button__remove-btn",onClick:function(){return function(e){c(a,e)}(t)}},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c")):null)})),R=(n(72),function(){return r.a.createElement("div",{className:"lds-spinner"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))}),T=function(){if(document.getElementById("chat-window")){var e=document.getElementById("chat-window");e.scrollTop=e.scrollHeight}},N=Object(o.b)((function(e){return{messages:e.messagesReducer.messages,loading:e.messagesReducer.loading}}),(function(e){return{fetchMessages:function(t){return e(p(t))}}}))((function(e){var t=e.url,n=e.messages,c=e.fetchMessages,u=e.loading,s=Object(a.useState)(!1),i=Object(f.a)(s,2),o=i[0],l=i[1];Object(a.useEffect)((function(){c(t),l(!0)}),[]);return r.a.createElement("div",{className:"chat"},r.a.createElement("div",{id:"chat-window"},function(e){return e?u?r.a.createElement(R,null):n.length?function(e){return r.a.createElement("ul",{className:"common-chat__list"},e.map((function(e){return r.a.createElement(A,{message:e,url:t,key:e.publish_date})})))}(n):r.a.createElement("p",{className:"empty-message"},"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0439 \u0435\u0449\u0451 \u043d\u0435\u0442, \u0441\u0442\u0430\u043d\u044c \u043f\u0435\u0440\u0432\u044b\u043c!"):null}(o)))})),M=function(e){return{type:"MESSAGE/CREATE_MESSAGE",message:e}},y=n(1),I=function(){return{type:"MESSAGE/EDIT_MESSAGE"}},G=(n(73),Object(o.b)((function(e){return{user:e.userReducer.user,isEditing:e.messagesReducer.isEditing,messageWhichEditing:e.messagesReducer.messageWhichEditing}}),(function(e){return{createMessage:function(t,n,a){return e(function(e,t,n){return function(a){var r={author:t.name,author_id:t.id,text:e,publish_date:(new Date).toString()};h.a.post(n+".json",r).then((function(e){return r.id=e.data.name})).then(a(M(r))).then((function(){return T()}))}}(t,n,a))},editMessage:function(t,n,a){return e(function(e,t,n){return function(a){a(I()),h.a.put(n+"/".concat(t.id,".json"),Object(y.a)(Object(y.a)({},t),{},{text:e})).then((function(){return a(O(!1))})).then((function(){return a(p(n,!1))}))}}(t,n,a))},fetchMessages:function(){return e(p())},editingMessage:function(t){return e(O(t))}}}))((function(e){var t=e.url,n=e.createMessage,c=e.user,u=e.editMessage,s=e.editingMessage,i=e.isEditing,o=e.messageWhichEditing,l=Object(a.useState)(""),m=Object(f.a)(l,2),E=m[0],d=m[1],h=i?r.a.createElement("button",{className:"message-input__button",type:"submit",onClick:function(e){return function(e,n){n.preventDefault(),u(e,o,t),s(!1),d("")}(E,e)}},"\u041e\u0442\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"):r.a.createElement("button",{className:"message-input__button",type:"submit",onClick:function(e){return function(e,a){a.preventDefault(),e.trim()&&n(e,c,t),d("")}(E,e)}},"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c");return r.a.createElement("form",{className:"message-input__from"},r.a.createElement("input",{className:"message-input__input",type:"text",value:E,onChange:function(e){d(e.target.value)}}),h)}))),w=Object(E.f)((function(e){var t=e.url,n=void 0===t?"https://working-chat.firebaseio.com/private-chats":t,a=e.match,c=n;return a.params.privateId&&(c=n+"/".concat(a.params.privateId,"/messages")),r.a.createElement("div",null,r.a.createElement(N,{url:c}),r.a.createElement(G,{url:c}))})),k=function(){return r.a.createElement("div",null,r.a.createElement(w,{url:"https://working-chat.firebaseio.com/messages"}))},H=(n(74),function(){return{type:"PRIVATE/FETCH_PRIVATE_CHAT_START"}}),U=function(e){return{type:"PRIVATE/FETCH_PRIVATE_CHAT_SUCCESS",privateChats:e}},P=function(e){return{type:"PRIVATE/FETCH_PRIVATE_CHAT_ERROR",error:e}},D=(n(75),function(e){var t=e.chatData,n=Object(a.useState)(""),c=Object(f.a)(n,2),u=c[0],i=c[1],o=Object(a.useState)(!0),l=Object(f.a)(o,2),m=l[0],E=l[1];return Object(a.useEffect)((function(){t.password===u?E(!1):E(!0)}),[u]),r.a.createElement("li",{className:"private-chat"},r.a.createElement("div",{className:"private-chat__room"},r.a.createElement("h6",{className:"room__name"},t.name),r.a.createElement("form",{className:"room__form"},r.a.createElement("input",{type:"text",value:u,onChange:function(e){return i(e.target.value)}}),r.a.createElement(s.b,{to:"/private/".concat(t.privateId)},r.a.createElement("button",{disabled:m},"\u0412\u043e\u0439\u0442\u0438")))))}),V=Object(o.b)((function(e){return{privateChats:e.privateChatsReducer.privateChats,isLoading:e.privateChatsReducer.loading}}),(function(e){return{fetchPrivateChats:function(){return e(function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"https://working-chat.firebaseio.com/private-chats.json";return function(n){e&&n(H());try{var a=[];h.a.get(t).then((function(e){return e.data&&Object.keys(e.data).forEach((function(t){a.push(Object(y.a)(Object(y.a)({},e.data[t]),{},{privateId:t}))})),a})).then((function(e){return n(U(a))})).then((function(){return T()}))}catch(r){n(P(r))}}}())}}}))((function(e){var t=e.privateChats,n=e.fetchPrivateChats,c=e.isLoading,u=Object(a.useState)(!1),i=Object(f.a)(u,2),o=i[0],l=i[1];Object(a.useEffect)((function(){n(),l(!0)}),[]);return r.a.createElement("div",{className:"chat"},r.a.createElement(s.b,{to:"/create-private-chat",className:"create-chat__button"},r.a.createElement("button",{className:"btn btn-primary"},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u044b\u0439 \u0447\u0430\u0442")),r.a.createElement("div",{id:"chat-window"},function(e){return e?c?r.a.createElement(R,null):t.length?function(e){return r.a.createElement("ul",{className:"common-chat__list"},e.reverse().map((function(e){return r.a.createElement(D,{chatData:e,key:e.privateId})})))}(t):r.a.createElement("p",{className:"empty-message"},"\u041f\u0440\u0438\u0432\u0430\u0442\u043d\u044b\u0445 \u0447\u0430\u0442\u043e\u0432 \u0435\u0449\u0451 \u043d\u0435\u0442!"):null}(o)))})),W=(n(76),function(e){return{type:"USER/AUTH_USER",user:e}}),x=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:30,t="",n="abcdefghijklmnopqrstuvwxyz",a=0;a<e;a++)t+=n.charAt(Math.floor(Math.random()*n.length));return t},F=Object(o.b)(null,(function(e){return{authUser:function(t,n){return e(function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"https://working-chat.firebaseio.com/users.json";return function(a){var r=!1;h.a.get(n).then((function(c){if(c.data&&Object.keys(c.data).forEach((function(n){var u=c.data[n];u.name===e&&u.password===t&&(r=!0,a(W(u)),localStorage.setItem("userData",JSON.stringify(u)))})),!r){var u={name:e,password:t,id:x()};h.a.post(n,u).then((function(){return a(W(u))})).then((function(){return localStorage.setItem("userData",JSON.stringify(u))}))}}))}}(t,n))}}}))((function(e){var t=e.authUser,n=Object(a.useState)(""),c=Object(f.a)(n,2),u=c[0],i=c[1],o=Object(a.useState)(""),l=Object(f.a)(o,2),m=l[0],E=l[1],d=Object(a.useState)(!0),h=Object(f.a)(d,2),g=h[0],b=h[1];Object(a.useEffect)((function(){u.trim()&&m.trim()?b(!1):b(!0)}),[u,m]);var v=function(e,t){e(t.target.value)};return r.a.createElement("div",{className:"auth"},r.a.createElement("div",{className:"header"},r.a.createElement("h1",{className:"header__heading"},"Work Chat")),r.a.createElement("form",{className:"auth__form"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0438\u043c\u044f"),r.a.createElement("input",{type:"text",className:"form-control",placeholder:"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f",value:u,onChange:function(e){return v(i,e)}}),r.a.createElement("label",null,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 \u043f\u0430\u0440\u043e\u043b\u044c"),r.a.createElement("input",{type:"password",className:"form-control",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",value:m,onChange:function(e){return v(E,e)}})),r.a.createElement(s.b,{to:"/common"},r.a.createElement("button",{type:"submit",className:"btn btn-primary",disabled:g,onClick:function(){return function(e,n){t(e,n)}(u,m)}},"\u0412\u043e\u0439\u0442\u0438"))))})),J=function(e){return{type:"PRIVATE/CREATE_PRIVATE_CHAT",privateChats:e}},B=Object(o.b)((function(e){return{user:e.userReducer.user}}),(function(e){return{createPrivateChat:function(t,n,a){return e(function(e,t,n){return function(a){var r={name:e,author_id:n.id,password:t,publish_date:(new Date).toString(),messages:[]};h.a.post("https://working-chat.firebaseio.com/private-chats.json",r).then((function(e){return r.privateId=e.data.name})).then(a(J(r))).then((function(){return a(b())}))}}(t,n,a))}}}))((function(e){var t=e.user,n=e.createPrivateChat,c=Object(a.useState)(""),u=Object(f.a)(c,2),i=u[0],o=u[1],l=Object(a.useState)(""),m=Object(f.a)(l,2),E=m[0],d=m[1],h=Object(a.useState)(!0),g=Object(f.a)(h,2),b=g[0],v=g[1];Object(a.useEffect)((function(){i.trim()&&E.trim()?v(!1):v(!0)}),[i,E]);var p=function(e,t){e(t.target.value)};return r.a.createElement("div",{className:"auth"},r.a.createElement("form",{className:"auth__form"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0447\u0430\u0442\u0430"),r.a.createElement("input",{type:"text",className:"form-control",placeholder:"\u0418\u043c\u044f \u0447\u0430\u0442\u0430",value:i,onChange:function(e){return p(o,e)}}),r.a.createElement("label",null,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c"),r.a.createElement("input",{type:"password",className:"form-control",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",value:E,onChange:function(e){return p(d,e)}})),r.a.createElement(s.b,{to:"/common"},r.a.createElement("button",{type:"submit",className:"btn btn-primary",disabled:b,onClick:function(){n(i,E,t)}},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0447\u0430\u0442"))))})),L=Object(o.b)((function(e){return{user:e.userReducer.user}}),(function(e){return{getUser:function(){return e(b())}}}))((function(e){var t=e.user,n=e.getUser;Object(a.useEffect)((function(){n()}),[]);var c=t?r.a.createElement(r.a.Fragment,null,r.a.createElement(m,null),r.a.createElement(E.b,{path:"/common",component:k}),r.a.createElement(E.b,{path:"/create-private-chat",component:B,exact:!0}),r.a.createElement(E.b,{path:"/private/:privateId",component:w}),r.a.createElement(E.b,{path:"/private",component:V,exact:!0}),r.a.createElement(E.a,{from:"",to:"/common"})):r.a.createElement(r.a.Fragment,null,r.a.createElement(E.b,{path:"/auth",component:F}),r.a.createElement(E.a,{from:"",to:"/auth"}));return(r.a.createElement("div",{className:"container"},c))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var q=n(12),z=n(15),$={messages:[],messageWhichEditing:{},loading:!1,error:null,isEditing:!1},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MESSAGE/FETCH_MESSAGES_START":return Object(y.a)(Object(y.a)({},e),{},{loading:!0});case"MESSAGE/FETCH_MESSAGES_SUCCESS":return Object(y.a)(Object(y.a)({},e),{},{loading:!1,messages:Object(z.a)(t.messages)});case"MESSAGE/FETCH_MESSAGES_ERROR":return Object(y.a)(Object(y.a)({},e),{},{loading:!1,error:t.error});case"MESSAGE/CREATE_MESSAGE":return Object(y.a)(Object(y.a)({},e),{},{messages:[].concat(Object(z.a)(e.messages),[t.message])});case"MESSAGE/REMOVE_MESSAGE":return Object(y.a)(Object(y.a)({},e),{},{messages:Object(z.a)(e.messages.filter((function(e){return e!==t.message})))});case"MESSAGE/MESSAGE_WHICH_EDITING":return Object(y.a)(Object(y.a)({},e),{},{messageWhichEditing:t.messageWhichEditing});case"MESSAGE/EDITING_MESSAGE":return Object(y.a)(Object(y.a)({},e),{},{isEditing:t.isEditing});case"MESSAGE/EDIT_MESSAGE":return Object(y.a)({},e);default:return e}},Q={user:{}},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER/AUTH_USER":return{user:t.user};case"USER/DELETE_USER":return{user:{}};case"USER/GET_USER":return{user:t.user};default:return e}},Y={privateChats:[],loading:!1},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PRIVATE/FETCH_PRIVATE_CHAT_START":return Object(y.a)(Object(y.a)({},e),{},{loading:!0});case"PRIVATE/FETCH_PRIVATE_CHAT_SUCCESS":return Object(y.a)(Object(y.a)({},e),{},{privateChats:t.privateChats,loading:!1});case"PRIVATE/CREATE_PRIVATE_CHAT":return Object(y.a)(Object(y.a)({},e),{},{privateChats:[].concat(Object(z.a)(e.privateChats),[t.privateChats])});default:return e}},ee=Object(q.c)({messagesReducer:K,userReducer:X,privateChatsReducer:Z}),te=n(37),ne=Object(q.e)(ee,Object(q.d)(Object(q.a)(te.a))),ae=r.a.createElement(o.a,{store:ne},r.a.createElement(s.a,null,r.a.createElement(L,null)));u.a.render(r.a.createElement(r.a.StrictMode,null,ae),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.5bd41fe0.chunk.js.map