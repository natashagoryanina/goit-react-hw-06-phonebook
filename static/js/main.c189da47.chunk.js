(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{32:function(n,e,t){},37:function(n,e,t){"use strict";t.r(e);var r,a,o,c,i,b,s=t(0),l=t(12),d=t.n(l),u=t(3),x=(t(32),t(8)),m=t(15),f=t(22),p=t(39),j=t(6),O=Object(j.b)("contact/addContact"),h=Object(j.b)("contact/removeContactById"),g=t(4),y=t(5),v=y.b.form(r||(r=Object(g.a)(["\n    display: flex;\n    flex-direction: column;\n\n    .formLabel {\n        margin-bottom: 20px;\n    }\n\n    .formInput {\n        background-color: #fff;\n        border: 1px solid #d5d9d9;\n        border-radius: 8px;\n        box-shadow: rgba(213, 217, 217, .5) 0 2px 5px 0;\n        box-sizing: border-box;\n        color: #0f1111;\n        cursor: pointer;\n        height: 25px;\n    }\n\n    .formText {\n        margin-bottom: 7px;\n        font-size: 18px;\n        line-height: 29px;\n    }\n\n    .addContactBtn {\n        width: 100px;\n    }\n\n"]))),C=t(1),w={name:"",number:""},z=function(){var n=Object(s.useState)(w),e=Object(f.a)(n,2),t=e[0],r=e[1],a=Object(u.b)(),o=function(n){var e=n.target,t=e.name,a=e.value;r((function(n){return Object(m.a)(Object(m.a)({},n),{},Object(x.a)({},t,a))}))};return Object(C.jsxs)(v,{onSubmit:function(n){var e,o=t.name,c=t.number;n.preventDefault(),e={name:o,id:Object(p.a)(),number:c},a(O(e)),r(w)},children:[Object(C.jsx)("span",{className:"formText",children:"Name:"}),Object(C.jsx)("label",{className:"formLabel",children:Object(C.jsx)("input",{className:"formInput",type:"text",name:"name",onChange:o,value:t.name,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})}),Object(C.jsx)("span",{className:"formText",children:"Number:"}),Object(C.jsx)("label",{className:"formLabel",children:Object(C.jsx)("input",{className:"formInput",type:"tel",name:"number",onChange:o,value:t.number,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})}),Object(C.jsx)("button",{className:"addContactBtn",type:"submit",children:"Add contact"})]})},N=y.b.li(a||(a=Object(g.a)(["\n    display: flex;\n    flex-direction: row;\n    align-items: baseline;\n    margin-bottom: 15px;\n    font-size: 16px;\n    line-height: 29px;\n\n    .deleteBtn {\n        width: 65px;\n        margin-left: 10px;\n        margin-bottom: 0;\n    }\n"]))),k=function(n){var e=n.contact,t=Object(u.b)();return Object(C.jsxs)(N,{children:[Object(C.jsxs)("span",{children:[e.name,": ",e.number]}),Object(C.jsx)("button",{className:"deleteBtn",type:"button",onClick:function(){return n=e.id,t(h(n));var n},children:"Delete"})]})},A=y.b.ul(o||(o=Object(g.a)(["\n    display: flex;\n    flex-direction: column;\n"]))),B=function(){var n=Object(u.c)((function(n){return n.contacts.filter})),e=Object(u.c)((function(e){var t=e.contacts;return console.log(t),t.items.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))}));return console.log(e),Object(C.jsx)(A,{children:e.length&&e.map((function(n){return Object(C.jsx)(k,{contact:n})}))})},I=y.b.label(c||(c=Object(g.a)(["\n    display: flex;\n    flex-direction: column;\n\n    .filterText {\n        margin-bottom: 7px;\n        font-size: 18px;\n        line-height: 29px;\n    }\n\n    .filterInput{\n        height: 25px;\n        width: 151px;\n        background-color: #fff;\n        border: 1px solid #d5d9d9;\n        border-radius: 8px;\n        box-shadow: rgba(213, 217, 217, .5) 0 2px 5px 0;\n        box-sizing: border-box;\n        color: #0f1111;\n        cursor: pointer;\n        margin-bottom: 20px;\n    }\n"]))),L=Object(j.b)("filter/onFilterChange"),T=function(){var n=Object(u.c)((function(n){return n.contacts.filter})),e=Object(u.b)();return Object(C.jsxs)(I,{children:[Object(C.jsx)("span",{className:"filterText",children:"Find contacts by name"}),Object(C.jsx)("input",{className:"filterInput",type:"text",name:"filter",value:n,onChange:function(n){return e(L(n))}})]})},E=Object(y.a)(i||(i=Object(g.a)(['\n    body {\n        font-family: "Amazon Ember",sans-serif;\n        padding: 25px;\n    }\n\n    ul{\n        list-style: none;\n        padding: 0;\n    }\n\n    button {\n        background-color: #fff;\n        border: 1px solid #d5d9d9;\n        border-radius: 8px;\n        box-shadow: rgba(213, 217, 217, .5) 0 2px 5px 0;\n        box-sizing: border-box;\n        color: #0f1111;\n        cursor: pointer;\n        display: flex;\n        margin-bottom: 20px;\n        font-family: "Amazon Ember",sans-serif;\n        font-size: 13px;\n        line-height: 29px;\n        padding: 0 10px 0 11px;\n        position: relative;\n        text-align: center;\n        text-decoration: none;\n        vertical-align: middle;\n    }\n\n    button:hover {\n        background-color: #f7fafa;\n    }\n\n    button:focus {\n        border-color: #008296;\n        box-shadow: rgba(213, 217, 217, .5) 0 2px 5px 0;\n        outline: 0;\n    }\n\n    h1,\n    h2 {\n        margin-top: 0;\n    }\n']))),J=function(){return Object(C.jsxs)("main",{children:[Object(C.jsx)(E,{}),Object(C.jsx)("h1",{children:"Phonebook"}),Object(C.jsx)(z,{}),Object(C.jsx)(T,{}),Object(C.jsx)("h2",{children:"Contacts"}),Object(C.jsx)(B,{})]})},Z=t(2),q=t(23),D={items:[],filter:""},F=Object(j.c)(D.items,(b={},Object(x.a)(b,O,(function(n,e){var t=e.payload;if(!n.some((function(n){return n.name.toLowerCase()===t.name.toLowerCase()})))return[].concat(Object(q.a)(n),[t]);alert("".concat(t.name," is already in contacts."))})),Object(x.a)(b,h,(function(n,e){var t=e.payload;return n.filter((function(n){return n.id!==t}))})),b)),S=Object(j.c)(D.filter,Object(x.a)({},L,(function(n,e){var t=e.payload.target.value;return"".concat(t)}))),M=t(7),P=t(20),$={key:"root",version:1,storage:t.n(P).a},G=Object(Z.b)({items:F,filter:S}),H=Object(M.g)($,G),K=Object(j.a)({reducer:{contacts:H},middleware:function(n){return n({serializableCheck:{ignoredActions:[M.a,M.f,M.b,M.c,M.d,M.e]}})}}),Q=t(21),R=Object(M.h)(K);d.a.render(Object(C.jsx)(u.a,{store:K,children:Object(C.jsx)(Q.a,{loading:null,persistor:R,children:Object(C.jsx)(J,{})})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.c189da47.chunk.js.map