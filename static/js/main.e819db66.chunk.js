(this.webpackJsonpsecondrep=this.webpackJsonpsecondrep||[]).push([[0],{13:function(e,t,o){},14:function(e,t,o){},16:function(e,t,o){"use strict";o.r(t);var n=o(1),c=o.n(n),r=o(7),a=o.n(r),d=(o(13),o(8)),s=o(6),l=o(4),u=(o(14),o(0)),i=function(e){var t=e.addTodo,o=Object(n.useState)(""),c=Object(l.a)(o,2),r=c[0],a=c[1];return Object(u.jsxs)("form",{className:"todo-form",children:[Object(u.jsx)("input",{type:"text",value:r,className:"todo-input",placeholder:"Add a todo",onChange:function(e){a(e.target.value)}}),Object(u.jsx)("button",{type:"submit",className:"todo-button",onClick:function(e){e.preventDefault(),t(r),a("")},children:"Add Todo"})]})},j=function(e){var t=e.todo,o=e.toggleComplete;return Object(u.jsx)("li",{children:Object(u.jsxs)("label",{className:t.complete?"todo-row completed":"todo-row",children:[Object(u.jsx)("input",{type:"checkbox",onChange:function(){return o(t)},checked:t.complete}),t.text]})})},p=function(e){var t=e.todos,o=e.toggleComplete;return Object(u.jsx)("ul",{children:t.map((function(e){return Object(u.jsx)(j,{todo:e,toggleComplete:o},e.text)}))})};var b=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),o=t[0],c=t[1];return Object(u.jsxs)("div",{className:"todo-app",children:[Object(u.jsx)("header",{children:Object(u.jsx)("h1",{children:"Todo App"})}),Object(u.jsx)(i,{addTodo:function(e){""!==e&&c([].concat(Object(d.a)(o),[{text:e,complete:!1}]))}}),Object(u.jsx)(p,{todos:o,toggleComplete:function(e){var t=o.map((function(t){return t===e?Object(s.a)(Object(s.a)({},t),{},{complete:!t.complete}):t}));c(t)}})]})},m=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,17)).then((function(t){var o=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,a=t.getTTFB;o(e),n(e),c(e),r(e),a(e)}))};a.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(b,{})}),document.getElementById("root")),m()}},[[16,1,2]]]);
//# sourceMappingURL=main.e819db66.chunk.js.map