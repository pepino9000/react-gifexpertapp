(this.webpackJsonpproyecto1=this.webpackJsonpproyecto1||[]).push([[0],{15:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var r=n(1),c=n(8),a=n.n(c),i=(n(15),n(16),n(2)),s=n(6),u=n(10),o=n(0),j=function(t){var e=t.setCategories,n=Object(r.useState)(""),c=Object(i.a)(n,2),a=c[0],s=c[1];return Object(o.jsx)("form",{onSubmit:function(t){t.preventDefault(),a.trim().length>2&&(e((function(t){return[a].concat(Object(u.a)(t))})),s(""))},children:Object(o.jsx)("input",{type:"text",value:a,onChange:function(t){s(t.target.value)}})})},d=n(11),b=n(7),l=n.n(b),f=n(9),h=function(){var t=Object(f.a)(l.a.mark((function t(e){var n,r,c,a,i;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(e),"&limit=10&api_key=23hqUCYUVJqrxNer8MmUmTYthxT4jdbx"),t.next=3,fetch(n);case 3:return r=t.sent,t.next=6,r.json();case 6:return c=t.sent,a=c.data,i=a.map((function(t){return{id:t.id,url:t.images.downsized.url,title:t.title}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(t){t.id;var e=t.title,n=t.url;return Object(o.jsxs)("div",{className:"card animate__animated animate__flash",children:[Object(o.jsx)("h3",{children:e}),Object(o.jsx)("img",{src:n,alt:e})]})},O=function(t){var e=t.category,n=function(t){var e=Object(r.useState)({data:[],loading:!0}),n=Object(i.a)(e,2),c=n[0],a=n[1];return Object(r.useEffect)((function(){h(t).then((function(t){a({data:t,loading:!1})}))}),[t]),c}(e),c=n.data,a=n.loading;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h3",{children:e}),a&&Object(o.jsx)("p",{children:"Loading"}),Object(o.jsx)("div",{className:"card-grid",children:c.map((function(t){return Object(o.jsx)(p,Object(d.a)({},t),t.id)}))})]})},x=function(){var t=Object(r.useState)(["One Piece"]),e=Object(i.a)(t,2),n=e[0],c=e[1];return Object(o.jsxs)(s.Fragment,{children:[Object(o.jsx)("h2",{children:"GifExpertApp"}),Object(o.jsx)("hr",{}),Object(o.jsx)(j,{setCategories:c}),n.map((function(t){return Object(o.jsx)(O,{category:t},t)}))]})};a.a.render(Object(o.jsx)(x,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.9c170a01.chunk.js.map