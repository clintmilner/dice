(this.webpackJsonpdice=this.webpackJsonpdice||[]).push([[0],{14:function(e,t,c){},15:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(1),j=c.n(r),s=c(6),i=c.n(s),a=(c(14),c(5)),o=(c(15),c(8)),u={1:"one",2:"two",3:"three",4:"four",5:"five",6:"six"},b=function(e){var t=e.idx;return Object(n.jsx)("div",{className:"dot"},t)},d=function(e){var t=e.count;return Object(o.a)(Array(t)).map((function(e,t){return Object(n.jsx)(b,{idx:t})}))},O=function(e){var t=e.children;return Object(n.jsx)("div",{className:"column",children:t})},l=function(e){switch(e){case 1:case 2:case 3:return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(d,{count:e})});case 4:return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(O,{children:Object(n.jsx)(d,{count:2})},1),Object(n.jsx)(O,{children:Object(n.jsx)(d,{count:2})},2)]});case 5:return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(O,{children:Object(n.jsx)(d,{count:2})},1),Object(n.jsx)(O,{children:Object(n.jsx)(d,{count:1})},2),Object(n.jsx)(O,{children:Object(n.jsx)(d,{count:2})},3)]});case 6:return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(O,{children:Object(n.jsx)(d,{count:3})},1),Object(n.jsx)(O,{children:Object(n.jsx)(d,{count:3})},2)]});default:return null}},x=function(e){var t=e.count,c=u[t];return Object(n.jsx)("div",{className:"die spin ".concat(c),children:l(t)})},h=c(7),f=c.p+"static/media/click.c818a2db.mp3";var m=function(){var e=Object(r.useState)([1,1]),t=Object(a.a)(e,2),c=t[0],j=t[1],s=function(){var e=Object(h.a)(f),t=Object(a.a)(e,1)[0];return Object(n.jsx)("div",{className:"roll",onClick:function(){t(),function(){var e=Math.floor(6*Math.random())+1,t=Math.floor(6*Math.random())+1;j([e,t])}()}})};return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(s,{}),Object(n.jsxs)("div",{className:"dice",children:[Object(n.jsx)(x,{count:c[0]}),Object(n.jsx)(x,{count:c[1]})]}),Object(n.jsx)(s,{})]})},v=function(e){e&&e instanceof Function&&c.e(4).then(c.bind(null,19)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,j=t.getLCP,s=t.getTTFB;c(e),n(e),r(e),j(e),s(e)}))};i.a.render(Object(n.jsx)(j.a.StrictMode,{children:Object(n.jsx)(m,{})}),document.getElementById("root")),v()}},[[16,1,2]]]);
//# sourceMappingURL=main.9cdf969d.chunk.js.map