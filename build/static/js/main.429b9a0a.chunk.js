(this.webpackJsonppart1=this.webpackJsonppart1||[]).push([[0],{39:function(t,n,e){},40:function(t,n,e){"use strict";e.r(n);var c=e(0),o=e(2),r=e(15),a=e.n(r),i=e(6),u=e(3),s=function(t){var n=t.note,e=t.toggleImportance;return Object(c.jsxs)("li",{className:"note",children:[n.content,Object(c.jsxs)("button",{onClick:e,children:[" Mark ",n.important?"not important":"important"]})]})},l=function(t){var n=t.message;return null===n?null:Object(c.jsx)("div",{className:"error",children:n})},f=e(4),j=e.n(f),b="/api/notes",d=function(){var t=j.a.get(b);return console.log("request sent"),t.then((function(t){return console.log('inside the "then"'),t.data}))},h=function(t){return j.a.post(b,t).then((function(t){return t.data}))},p=function(t,n){return j.a.put("".concat(b,"/").concat(t),n).then((function(t){return t.data}))},m=function(){var t=Object(o.useState)([]),n=Object(u.a)(t,2),e=n[0],r=n[1],a=Object(o.useState)("A new note..."),f=Object(u.a)(a,2),j=f[0],b=f[1],m=Object(o.useState)(!0),O=Object(u.a)(m,2),v=O[0],g=O[1],x=Object(o.useState)(null),S=Object(u.a)(x,2),w=S[0],k=S[1];Object(o.useEffect)((function(){console.log("effect"),d().then((function(t){r(t)}))}),[]);var y=v?e:e.filter((function(t){return t.important}));return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"notes"}),Object(c.jsx)(l,{message:w}),Object(c.jsxs)("button",{onClick:function(){g(!v)},children:["show ",v?"important":"all"]}),Object(c.jsx)("ul",{children:y.map((function(t){return Object(c.jsx)(s,{note:t,toggleImportance:function(){return function(t){var n=e.find((function(n){return n.id===t})),c=Object(i.a)(Object(i.a)({},n),{},{important:!n.important});p(t,c).then((function(n){r(e.map((function(e){return e.id!==t?e:n})))})).catch((function(c){k('The note "'.concat(n.content,'" was already deleted from the server')),setTimeout((function(){return k(null)}),5e3),r(e.filter((function(n){return n.id!==t})))}))}(t.id)}},t.id)}))}),Object(c.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={content:j,date:(new Date).toString(),important:Math.random()<.5};h(n).then((function(t){r(e.concat(t)),b("")}))},children:[Object(c.jsx)("input",{value:j,onChange:function(t){b(t.target.value)}}),Object(c.jsx)("button",{type:"submit",children:"Save"})]})]})};e(39);a.a.render(Object(c.jsx)(m,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.429b9a0a.chunk.js.map