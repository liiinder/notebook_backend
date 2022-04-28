(this.webpackJsonpa=this.webpackJsonpa||[]).push([[0],{20:function(t,e,n){},40:function(t,e,n){"use strict";n.r(e);var c=n(15),r=n.n(c),i=(n(20),n(6)),o=n(3),a=n(2),u=n(0),s=function(t){var e=t.note,n=t.toggleImportance;return Object(u.jsxs)("li",{className:"note",children:[Object(u.jsx)("input",{onClick:n,type:"checkbox",id:e.id,checked:e.important,readOnly:!0}),e.content+" "+e.id]})},j=function(t){var e=t.message;return null===e?null:Object(u.jsx)("div",{className:"error",children:e})},l=function(){return Object(u.jsxs)("div",{style:{color:"green",fontStyle:"italic",fontSize:16},children:[Object(u.jsx)("br",{}),Object(u.jsx)("em",{children:"Note app, Department of Computer Science, University of Helsinki 2022"})]})},f=n(4),d=n.n(f),b="/api/notes",O={getAll:function(){return d.a.get(b).then((function(t){return t.data}))},create:function(t){return d.a.post(b,t).then((function(t){return t.data}))},update:function(t,e){return d.a.put("".concat(b,"/").concat(t),e).then((function(t){return t.data}))}},p=function(){var t=Object(a.useState)([]),e=Object(o.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(""),f=Object(o.a)(r,2),d=f[0],b=f[1],p=Object(a.useState)(!0),h=Object(o.a)(p,2),m=h[0],x=h[1],v=Object(a.useState)(null),g=Object(o.a)(v,2),S=g[0],k=g[1];Object(a.useEffect)((function(){O.getAll().then((function(t){c(t)}))}),[]);var y=m?n:n.filter((function(t){return t.important}));return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Notes"}),Object(u.jsx)(j,{message:S}),Object(u.jsx)("div",{children:Object(u.jsxs)("button",{onClick:function(){return x(!m)},children:["show ",m?"important":"all"]})}),Object(u.jsx)("ul",{children:y.map((function(t){return Object(u.jsx)(s,{note:t,toggleImportance:function(){return function(t){var e=n.find((function(e){return e.id===t})),r=Object(i.a)(Object(i.a)({},e),{},{important:!e.important});O.update(t,r).then((function(e){c(n.map((function(n){return n.id!==t?n:e})))})).catch((function(r){k("Note #'".concat(e.id,"' is removed from server")),setTimeout((function(){k(null)}),5e3),c(n.filter((function(e){return e.id!==t})))}))}(t.id)}},t.id)}))}),Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e={content:d,date:(new Date).toISOString(),important:Math.random()>.5,id:n.length+1};O.create(e).then((function(t){c(n.concat(t)),b("")}))},children:[Object(u.jsx)("input",{value:d,onChange:function(t){b(t.target.value)}}),Object(u.jsx)("button",{type:"submit",children:"save"})]}),Object(u.jsx)(l,{})]})};r.a.render(Object(u.jsx)(p,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.e2b7b97d.chunk.js.map