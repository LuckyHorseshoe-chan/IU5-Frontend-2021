(this.webpackJsonplab8=this.webpackJsonplab8||[]).push([[0],{128:function(e,t,n){},129:function(e,t,n){},428:function(e,t,n){"use strict";n.r(t);var c=n(16),l=n.n(c),a=n(17),s=n.n(a),i=(n(128),n(53)),o=n(124),r=(n.p,n(129),n(130),n(2));function u(e){var t=e.onChange,n=e.title,c=e.select,l=e.onChangeCheckbox;return Object(r.jsxs)("label",{children:[Object(r.jsx)("input",{type:"checkbox",name:n,checked:c,onChange:l}),Object(r.jsx)("input",{type:"text",placeholder:"New task",value:n,onChange:t})]})}function j(e){var t=e.title,n=e.children,c=e.onClick,l=e.className;return Object(r.jsxs)("button",{className:l,onClick:c,children:[t," ",n]})}var b=function(){var e=l.a.useState([{select:!1,title:"task1"},{select:!1,title:"task2"},{select:!1,title:"task3"}]),t=Object(o.a)(e,2),n=t[0],c=t[1],a=function(e){return function(t){var l=t.target.checked,a=Object(i.a)(n);a[e].select=l,c(a)}},s=function(e){console.log(e),c(n.filter((function(t,n){return n!=e})))},b=function(e){return function(t){var l=t.target.value,a=Object(i.a)(n);a[e].title=l,c(a)}};return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("h2",{children:"ToDo:"}),n.map((function(e,t){return e.select?"":Object(r.jsxs)("label",{children:[Object(r.jsx)(u,{select:e.select,onChangeCheckbox:a(t),title:e.title,onChange:b(t)}),Object(r.jsx)(j,{className:"delButton",onClick:function(){return s(t)}})]},t)})),n.map((function(e,t){return e.select?Object(r.jsxs)("label",{children:[Object(r.jsx)(u,{select:e.select,onChangeCheckbox:a(t),title:e.title,onChange:b(t)}),Object(r.jsx)(j,{className:"delButton",onClick:function(){return s(t)}})]},t):""})),Object(r.jsx)(j,{className:"addButton",title:"Add a task",onClick:function(){c([].concat(Object(i.a)(n),[{select:!1,title:"taskN"}]))}})]})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,429)).then((function(t){var n=t.getCLS,c=t.getFID,l=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),l(e),a(e),s(e)}))};s.a.render(Object(r.jsx)(l.a.StrictMode,{children:Object(r.jsx)(b,{})}),document.getElementById("root")),h()}},[[428,1,2]]]);
//# sourceMappingURL=main.7c9ce4e0.chunk.js.map