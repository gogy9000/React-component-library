(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,,,function(e,a,t){e.exports={hw:"Message_hw__1oMYn",message:"Message_message__2n81B",avatar:"Message_avatar__32c47",img:"Message_img__2EU3i",messageBlock:"Message_messageBlock__2jWME",nickName:"Message_nickName__2GCa_",quickMessageBlock:"Message_quickMessageBlock__NpdJX",quickMessage:"Message_quickMessage__1JoYa",date:"Message_date__oEDF3"}},,function(e,a,t){e.exports={hw:"AlternativeMessage_hw__2XjR1",message:"AlternativeMessage_message__Rdwu0",avatar:"AlternativeMessage_avatar__3f4q-",img:"AlternativeMessage_img__3aX_o",messageBlock:"AlternativeMessage_messageBlock__2JMOD",nickName:"AlternativeMessage_nickName__8pNvC",quickMessageBlock:"AlternativeMessage_quickMessageBlock__1Djgx",quickMessage:"AlternativeMessage_quickMessage__1J-Na",date:"AlternativeMessage_date__o6way"}},,function(e,a,t){e.exports={Header:"Header_Header__oEjy5",button:"Header_button__56sWv",menu:"Header_menu__32fjA",Active:"Header_Active__1ui1F",mouseUp:"Header_mouseUp__Gfd0N",mouseMove:"Header_mouseMove__1GBBl"}},,,,,function(e,a,t){e.exports={superInputDefault:"SuperInputText_superInputDefault__3LS82",errorInputDefault:"SuperInputText_errorInputDefault__3GAQy",error:"SuperInputText_error__32Sft"}},function(e,a,t){e.exports={blue:"HW4_blue__Gn6aT",column:"HW4_column__hWTTn",testSpanError:"HW4_testSpanError__2oif6"}},,,function(e,a,t){e.exports={someClass:"Affairs_someClass__1HfaO",affair:"Affairs_affair___LH-a",affairBlock:"Affairs_affairBlock__32DYx"}},function(e,a,t){e.exports={someClass:"Greeting_someClass__27mAE",error:"Greeting_error__34kLF",notError:"Greeting_notError__1B1Fb"}},function(e,a,t){e.exports={default:"SuperButton_default__lzAJy",red:"SuperButton_red__18y4I"}},function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__3_fyd",spanClassName:"SuperCheckbox_spanClassName__1oHxw"}},,,function(e,a,t){e.exports={App:"App_App__rUvol",hw:"App_hw__Rlgac"}},,,,,,function(e,a,t){e.exports=t(41)},,,,,function(e,a,t){},,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(13),c=t.n(l),o=(t(35),t(24)),u=t.n(o),s=t(1),i=t(8),m=t(2),E=t(5),d=t.n(E),f=function(e){return r.a.createElement("div",{className:d.a.message},r.a.createElement("div",{className:d.a.avatar},r.a.createElement("img",{className:d.a.img,src:e.avatar,alt:"ava"})),r.a.createElement("div",{className:d.a.messageBlock},r.a.createElement("div",{className:d.a.nickName},e.name," :"),r.a.createElement("div",{className:d.a.quickMessageBlock},r.a.createElement("div",{className:d.a.quickMessage},e.message),r.a.createElement("div",{className:d.a.date},e.time))))},v=t(7),p=t.n(v),g=function(e){return r.a.createElement("div",{className:p.a.message},r.a.createElement("div",{className:p.a.avatar},r.a.createElement("img",{className:p.a.img,src:e.avatar,alt:"ava"})),r.a.createElement("div",{className:p.a.messageBlock},r.a.createElement("div",{className:p.a.nickName},e.name," :"),r.a.createElement("div",{className:p.a.quickMessageBlock},r.a.createElement("div",{className:p.a.quickMessage},e.message),r.a.createElement("div",{className:p.a.date},e.time))))},_="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",h="\u0425\u0430\u043d\u0430\u043a\u0430",b="\u0414\u0440\u0430\u0442\u0443\u0442\u0438))",k="22:00";var O=function(){return r.a.createElement("div",{className:d.a.hw},r.a.createElement("hr",null),r.a.createElement(f,{avatar:_,name:h,message:b,time:k}),r.a.createElement("hr",null),r.a.createElement(g,{avatar:_,name:h,message:b,time:k}),r.a.createElement("hr",null))},j=t(18),C=t.n(j);var N=function(e){return r.a.createElement("div",{className:C.a.affairBlock},r.a.createElement("span",{className:C.a.affair},e.affair.name),r.a.createElement("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)}},"delete"))};var w=function(e){var a=e.data.map((function(a){return r.a.createElement(N,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",null,a,r.a.createElement("button",{onClick:function(){e.setFilter("All")}},"All"),r.a.createElement("button",{onClick:function(){e.setFilter("High")}},"High"),r.a.createElement("button",{onClick:function(){e.setFilter("Middle")}},"Middle"),r.a.createElement("button",{onClick:function(){e.setFilter("Low")}},"Low"))},y=[{_id:1,name:"React",priority:"High"},{_id:2,name:"anime",priority:"Low"},{_id:3,name:"games",priority:"Low"},{_id:4,name:"work",priority:"High"},{_id:5,name:"html & css",priority:"Middle"}];var S=function(){var e=Object(n.useState)(y),a=Object(s.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("All"),o=Object(s.a)(c,2),u=o[0],i=o[1],m=function(e,a){return"All"===a?e:e.filter((function(e){return e.priority===a}))}(t,u);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(w,{data:m,setFilter:i,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!=a}))}(t,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},M=t(6),A=t(19),x=t.n(A),B=t(4),D=t(14),H=t.n(D),I=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=e.className,u=e.spanClassName,s=Object(B.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),i=c?"".concat(H.a.error," ").concat(u||""):"",m="".concat(c?c||H.a.errorInputDefault:o||H.a.superInputDefault);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),l&&"Enter"===e.key&&l()},className:m},s)),c&&r.a.createElement("span",{className:i},c))},T=t(20),F=t.n(T),L=function(e){var a=e.red,t=e.className,n=Object(B.a)(e,["red","className"]),l="".concat(a?F.a.red:F.a.default," ").concat(t);return r.a.createElement("button",Object.assign({className:l},n))},G=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o=e.users,u=e.refreshValueCallBack,s=l?"error":a;return console.log(o),r.a.createElement("div",null,r.a.createElement(I,{value:s,onChange:t,onClick:function(){return u()},className:l?x.a.error:x.a.notError}),r.a.createElement(L,{onClick:n,red:l,disabled:l},"add"),r.a.createElement("span",null,c))},q=t(42),P=function(e){var a=e.users,t=e.addUserCallback,l=e.error,c=e.refreshValueCallBack,o=e.setErrorCallBack,u=Object(n.useState)(""),i=Object(s.a)(u,2),m=i[0],E=i[1],d=Object(n.useState)(0),f=Object(s.a)(d,2),v=f[0],p=f[1];return r.a.createElement(G,{name:m,setNameCallback:function(e){return E(e.target.value)},addUser:function(){if(/^\s+$/.test(m)||!m||!a.every((function(e){return e.name!==m})))return o(),E("");t({name:m.trim(),_id:Object(q.a)()}),E(""),p(v=a.length)},error:l,totalUsers:v,users:a,refreshValueCallBack:c})};var J=function(){var e=Object(n.useState)([{_id:"null",name:"null"}]),a=Object(s.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(!1),o=Object(s.a)(c,2),u=o[0],i=o[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(P,{users:t,addUserCallback:function(e){alert("Hello "+e.name),l([].concat(Object(M.a)(t),[e]))},error:u,refreshValueCallBack:function(){i(!1)},setErrorCallBack:function(){i(!0)}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},U=t(15),W=t.n(U),R=t(21),V=t.n(R),X=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(B.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),o="".concat(V.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){t&&t(e.currentTarget.checked),a&&a(e)},className:o},c)),l&&r.a.createElement("span",{className:V.a.spanClassName},l))};var Y=function(){var e=Object(n.useState)(""),a=Object(s.a)(e,2),t=a[0],l=a[1],c=t?"":"error",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},u=Object(n.useState)(!1),i=Object(s.a)(u,2),m=i[0],E=i[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:W.a.column},r.a.createElement(I,{value:t,onChangeText:l,onEnter:o,error:c,spanClassName:W.a.testSpanError}),r.a.createElement(I,{className:W.a.blue,error:c}),r.a.createElement(L,null,"default"),r.a.createElement(L,{red:!0,onClick:o},"delete "),r.a.createElement(L,{disabled:!0},"disabled"),r.a.createElement(X,{checked:m,onChangeChecked:E},"some text "),r.a.createElement(X,{checked:m,onChange:function(e){return E(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))},K=function(e){e.autoFocus;var a=e.onBlur,t=e.onEnter,l=e.spanProps,c=Object(B.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),o=Object(n.useState)(!1),u=Object(s.a)(o,2),i=u[0],m=u[1],E=l||{},d=E.children,f=E.onDoubleClick,v=E.className,p=Object(B.a)(E,["children","onDoubleClick","className"]),g="\u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043a\u0440\u0430\u0441\u0438\u0432\u044b\u0439 \u0441\u0442\u0438\u043b\u044c \u0434\u043b\u044f \u0441\u043f\u0430\u043d\u0430".concat(" ",v);return r.a.createElement(r.a.Fragment,null,i?r.a.createElement(I,Object.assign({autoFocus:!0,onBlur:function(e){m(!1),a&&a(e)},onEnter:function(){m(!1),t&&t()}},c)):r.a.createElement("span",Object.assign({onDoubleClick:function(e){m(!0),f&&f(e)},className:g},p),d||c.value))};function z(e,a){var t=JSON.stringify(a);localStorage.setItem(e,t)}function $(e,a){var t=a,n=localStorage.getItem(e);return null!==n&&(t=JSON.parse(n)),t}z("test",{x:"A",y:1});$("test",{x:"",y:0});var Q=function(){var e=Object(n.useState)(""),a=Object(s.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 6",r.a.createElement("div",null,r.a.createElement(K,{value:t,onChangeText:l,spanProps:{children:t?void 0:"enter text..."}})),r.a.createElement(L,{onClick:function(){z("editable-span-value",t)}},"save"),r.a.createElement(L,{onClick:function(){l($("editable-span-value","storage is empty"))}},"restore"),r.a.createElement("hr",null),r.a.createElement("hr",null))};var Z=function(){return r.a.createElement("div",null,r.a.createElement(O,null),r.a.createElement(S,null),r.a.createElement(J,null),r.a.createElement(Y,null),r.a.createElement(Q,null))};var ee=function(){return r.a.createElement("div",null,r.a.createElement("div",null,"404"),r.a.createElement("div",null,"Page not found!"),r.a.createElement("div",null,"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"))},ae=function(e){var a=e.options,t=e.value,n=e.onChange,l=e.onChangeOption,c=Object(B.a)(e,["options","value","onChange","onChangeOption"]),o=a?a.map((function(e,a){return r.a.createElement("option",{key:e+"-"+a,value:e},e)})):[];return r.a.createElement("select",Object.assign({value:t,name:"select",onChange:function(e){n&&n(e),l&&l(e.currentTarget.value)}},c),o)},te=function(e){e.type;var a=e.name,t=e.options,n=e.value,l=e.onChange,c=e.onChangeOption,o=Object(B.a)(e,["type","name","options","value","onChange","onChangeOption"]),u=function(e){l&&l(e),c&&c(e.currentTarget.value)},s=t?t.map((function(e,t){return r.a.createElement("label",{key:a+"-"+t},r.a.createElement("input",Object.assign({type:"radio",name:a,checked:String(e)===n,value:e,onChange:u},o)),e)})):[];return r.a.createElement(r.a.Fragment,null,s)},ne=["x","y","z",2];var re=function(){var e=Object(n.useState)(ne[0]),a=Object(s.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 7",r.a.createElement("div",null,r.a.createElement(ae,{options:ne,value:t,onChangeOption:l})),r.a.createElement("div",null,r.a.createElement(te,{name:"radio",options:ne,value:t,onChangeOption:l})),r.a.createElement("hr",null),r.a.createElement("hr",null))},le=function(e,a){switch(a.type){case"sort":return Object(M.a)(e.sort((function(e,t){return"up"===a.payload?e.age-t.age:"down"===a.payload?t.age-e.age:0})));case"check":return e.filter((function(e){return"all"===a.payload||e.age===Number(a.payload)}));default:return e}},ce=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var oe=function(){var e=Object(n.useState)(ce),a=Object(s.a)(e,2),t=a[0],l=a[1],c=t.map((function(e){return r.a.createElement("div",{key:e._id},r.a.createElement("span",null,e.name+" "+e.age))})),o=function(e){l(le(t,{type:"sort",payload:e}))};return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 8",c,r.a.createElement("div",null,r.a.createElement(L,{onClick:function(){o("up")}},"sort up")),r.a.createElement("div",null,r.a.createElement(L,{onClick:function(){o("down")}},"sort down")),r.a.createElement("div",null,r.a.createElement(L,{onClick:function(){l(le(ce,{type:"check",payload:16}))}},"check 16")),r.a.createElement("hr",null),r.a.createElement(ue,{people:t,setPeople:l,finalPeople:c}),r.a.createElement("hr",null))},ue=function(e){var a=e.people,t=e.setPeople,l=(e.finalPeople,Object(n.useState)([])),c=Object(s.a)(l,2),o=c[0],u=c[1],i=Object(n.useState)(o[0]),m=Object(s.a)(i,2),E=m[0],d=m[1];Object(n.useEffect)((function(){var e=a.map((function(e){return String(e.age)}));u(Object(M.a)(e))}),[]);var f=function(e){d(e),t(le(ce,{type:"check",payload:e}))};return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 8",r.a.createElement("div",null,r.a.createElement(te,{name:"radio1",options:o,value:E,onChangeOption:f})),r.a.createElement(L,{onClick:function(){f("all")}},"get all"))};var se=function(){var e=function(){var e=(new Date).getHours(),a=(new Date).getMinutes(),t=(new Date).getSeconds();return"".concat(e<10?0:"").concat(e,":").concat(a<10?0:"").concat(a,":").concat(t<10?0:"").concat(t)},a=Object(n.useState)(0),t=Object(s.a)(a,2),l=t[0],c=t[1],o=Object(n.useState)(new Date),u=Object(s.a)(o,2),i=u[0],m=u[1],E=Object(n.useState)(!1),d=Object(s.a)(E,2),f=d[0],v=d[1],p=Object(n.useState)(e),g=Object(s.a)(p,2),_=g[0],h=g[1],b=function(){clearInterval(l)},k=_,O=i.toLocaleDateString()||r.a.createElement("br",null);return r.a.createElement("div",null,r.a.createElement("div",{onMouseEnter:function(){v(!0)},onMouseLeave:function(){v(!1)}},k),f&&r.a.createElement("div",null,O),r.a.createElement(L,{onMouseDown:function(){b();var a=window.setInterval((function(){h(e()),m(new Date)}),1e3);c(a)}},"start"),r.a.createElement(L,{onClick:b},"stop"))},ie=function(){var e=Object(n.useState)(0),a=Object(s.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)([]),o=Object(s.a)(c,2),u=o[0],i=o[1],m=Object(n.useState)(0),E=Object(s.a)(m,2),d=E[0],f=E[1],v=Object(n.useState)(0),p=Object(s.a)(v,2),g=p[0],_=p[1],h=Object(n.useState)(0),b=Object(s.a)(h,2),k=b[0],O=b[1],j=Object(n.useState)(0),C=Object(s.a)(j,2),N=C[0],w=C[1],y=function(){clearInterval(t)},S="".concat(N<10?0:"").concat(N,":").concat(k<10?0:"").concat(k,":").concat(g<10?0:"").concat(g,":").concat(d<10?0:"").concat(d),A=null===u||void 0===u?void 0:u.map((function(e){return r.a.createElement("div",{key:Object(q.a)()},e)}));return r.a.createElement("div",null,r.a.createElement("div",null,S),r.a.createElement(L,{onMouseDown:function(){y();var e=window.setInterval((function(){w(23===N&&59===k&&59===g?N=0:59===k&&59===g&&99===d?N+=1:N),O(59===k&&59===g?k=0:59===g&&99===d?k+=1:k),_(59===g&&99===d?g=0:99===d?g+=1:g),f(99===d?d=0:d+=1)}),10);l(e)}},"start"),r.a.createElement(L,{onClick:y},"stop"),r.a.createElement(L,{onClick:function(){i([S].concat(Object(M.a)(u)))}},"check"),r.a.createElement(L,{onClick:function(){i([])}},"clear"),r.a.createElement(L,{onClick:function(){clearInterval(t),f(0),_(0),O(0),w(0)}},"reset"),r.a.createElement("div",null,A))};var me=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 9",r.a.createElement(se,null),r.a.createElement("hr",null),r.a.createElement(ie,null),r.a.createElement("hr",null))},Ee=t(12),de=t(28),fe={loading:!1},ve=function(e){return{type:"TOGGLE-LOADING",isLoading:e}};var pe=function(){var e=Object(Ee.c)((function(e){return e.loading.loading})),a=Object(Ee.b)();return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 10",e?r.a.createElement("div",null,"\u043a\u0440\u0443\u0442\u0438\u043b\u043a\u0430..."):r.a.createElement("div",null,r.a.createElement(L,{onClick:function(){a((function(e){e(ve(!0)),console.log("loading..."),setTimeout((function(){e(ve(!1))}),2e3)}))}},"set loading...")),r.a.createElement("hr",null),r.a.createElement("hr",null))},ge="/pre-junior",_e="/junior",he="/junior-plus";var be=function(){return r.a.createElement("div",null,r.a.createElement(m.d,null,r.a.createElement(m.b,{path:"/",element:r.a.createElement(m.a,{to:ge})}),r.a.createElement(m.b,{path:ge,element:r.a.createElement(Z,null)}),r.a.createElement(m.b,{path:_e,element:r.a.createElement(ke,null)}),r.a.createElement(m.b,{path:he,element:r.a.createElement(Oe,null)}),"// add routes",r.a.createElement(m.b,{path:"/*",element:r.a.createElement(ee,null)})))},ke=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(re,null),r.a.createElement(oe,null),r.a.createElement(me,null),r.a.createElement(pe,null))},Oe=function(){return r.a.createElement(r.a.Fragment,null,"JuniorPlus")},je=t(9),Ce=t.n(je);var Ne=function(){var e=Object(n.useState)(!1),a=Object(s.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",{className:Ce.a.Header},r.a.createElement("div",{className:t?Ce.a.Active:Ce.a.menu},r.a.createElement(we,null,r.a.createElement(i.b,{to:ge}," pre-junior")),r.a.createElement(we,null,r.a.createElement(i.b,{to:_e}," junior")),r.a.createElement(we,null,r.a.createElement(i.b,{to:he}," junior+plus"))),r.a.createElement("span",{className:Ce.a.button},r.a.createElement("button",{onClick:function(){l(!t)}},"Menu")))},we=function(e){var a=Object(n.useState)(!1),t=Object(s.a)(a,2),l=t[0],c=t[1],o=function(){return c(!l)};return r.a.createElement("span",{onMouseEnter:o,onMouseLeave:o,className:l?Ce.a.mouseUp:Ce.a.mouseMove},e.children)};var ye=function(){return r.a.createElement("div",null,r.a.createElement(i.a,null,r.a.createElement(Ne,null),r.a.createElement(be,null)))};var Se=function(){return r.a.createElement("div",{className:u.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(ye,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Me=t(16),Ae=t(27),xe=Object(Me.b)({loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"TOGGLE-LOADING":return Object(de.a)({},e,{loading:a.isLoading});default:return e}}}),Be=Object(Me.c)(xe,Object(Me.a)(Ae.a)),De=Be;window.store=Be,c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ee.a,{store:De},r.a.createElement(Se,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[30,1,2]]]);
//# sourceMappingURL=main.5a64aaae.chunk.js.map