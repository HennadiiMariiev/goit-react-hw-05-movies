(this["webpackJsonpgoit-react-hw-05-movies"]=this["webpackJsonpgoit-react-hw-05-movies"]||[]).push([[0],{18:function(e,t,n){e.exports={reviewsList:"Reviews_reviewsList__1XT3d",reviewsItem:"Reviews_reviewsItem__2xPvp"}},19:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var c=n(10),r=n(6),i=n(2),a=n(9),s=n(7),o=n.n(s),u=(n(0),n(1));function l(){var e=Object(i.h)().url.replace("/movies","").replace("/cast",""),t=Object(r.useState)(null),n=Object(c.a)(t,2),s=n[0],l=n[1];Object(r.useEffect)((function(){e&&":movieId"!==e&&a.b(e).then((function(e){return l(e)}))}),[e]);return Object(u.jsx)("div",{children:s&&function(e){var t=e.cast.map((function(e,t){return Object(u.jsxs)("li",{className:o.a.castItem,children:[Object(u.jsx)("b",{children:e.character})," - ",e.name]},t)})),n=e.crew.map((function(e,t){return Object(u.jsxs)("li",{className:o.a.castItem,children:[Object(u.jsx)("b",{children:e.job})," - ",e.name]},t)}));return Object(u.jsxs)("div",{className:o.a.flex,children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:"Cast"}),Object(u.jsx)("ul",{className:o.a.castList,children:t})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:"Crew"}),Object(u.jsx)("ul",{className:o.a.castList,children:n})]})]})}(s)})}},28:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var c=n(10),r=n(6),i=n(2),a=n(9),s=n(18),o=n.n(s),u=n(1);function l(){var e=Object(i.h)().url.replace("/movies","").replace("/reviews",""),t=Object(r.useState)(null),n=Object(c.a)(t,2),s=n[0],l=n[1];Object(r.useEffect)((function(){e&&":movieId"!==e&&a.c(e).then((function(e){return l(e)}))}),[e]);var j;return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Reviews"}),s&&(j=s,j.length?Object(u.jsx)("ul",{className:o.a.reviewsList,children:j.map((function(e,t){return Object(u.jsxs)("li",{className:o.a.reviewsItem,children:[" ",Object(u.jsx)("h4",{children:e.author}),Object(u.jsx)("h5",{children:e.created_at}),Object(u.jsx)("p",{children:e.content})]},t)}))}):Object(u.jsx)("h3",{children:"No reviews on this movie"}))]})}},37:function(e,t,n){},38:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),i=n(29),a=n.n(i),s=(n(37),n(38),n(2)),o=n(19),u=n(28),l=n(6),j=n(1);var h=function(){var e=Object(c.lazy)((function(){return n.e(4).then(n.bind(null,74))})),t=Object(c.lazy)((function(){return n.e(5).then(n.bind(null,75))})),r=Object(c.lazy)((function(){return n.e(3).then(n.bind(null,76))})),i=Object(c.lazy)((function(){return n.e(6).then(n.bind(null,77))})),a=Object(c.lazy)((function(){return n.e(7).then(n.bind(null,78))}));return Object(j.jsx)(l.Suspense,{fallback:Object(j.jsx)("p",{children:"Loading..."}),children:Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(i,{}),Object(j.jsxs)(s.d,{children:[Object(j.jsx)(s.b,{path:"/",exact:!0,component:e}),Object(j.jsx)(s.b,{path:"/movies",exact:!0,component:t}),Object(j.jsx)(s.b,{path:"/movies/:movieId",component:r}),Object(j.jsx)(s.b,{path:"/movies/:movieId/cast",component:o.a}),Object(j.jsx)(s.b,{path:"/movies/:movieId/reviews",component:u.a}),Object(j.jsx)(s.a,{to:"/"}),Object(j.jsx)(s.b,{component:a})]})]})})},b=function(e){e&&e instanceof Function&&n.e(8).then(n.bind(null,79)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),i(e),a(e)}))},d=n(11);a.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(d.a,{children:Object(j.jsx)(h,{})})}),document.getElementById("root")),b()},7:function(e,t,n){e.exports={castList:"Cast_castList__3TP4S",castItem:"Cast_castItem__2t1VP",flex:"Cast_flex__2bvY_"}},9:function(e,t,n){"use strict";n.d(t,"e",(function(){return u})),n.d(t,"a",(function(){return j})),n.d(t,"d",(function(){return h})),n.d(t,"b",(function(){return b})),n.d(t,"c",(function(){return d}));var c=n(15),r=n.n(c),i=n(30),a=n(40),s="215f5d86f7e87809998cffae9d163253",o="https://api.themoviedb.org/3";function u(){return l.apply(this,arguments)}function l(){return(l=Object(i.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",a.get("".concat(o,"/trending/movie/day?api_key=").concat(s)).then((function(e){return e.data.results})).catch((function(e){return console.log("Error: ",e)})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e){return a.get("".concat(o,"/search/movie?query=").concat(e,"&page=").concat(1,"&api_key=").concat(s)).then((function(e){return e.data.results})).catch((function(e){return console.log("Error: ",e)}))}function h(e){return a.get("".concat(o,"/movie/").concat(e,"?&page=").concat(1,"&api_key=").concat(s)).then((function(e){return e.data})).catch((function(e){return console.log("Error: ",e)}))}function b(e){return a.get("".concat(o,"/movie/").concat(e,"/credits?&page=").concat(1,"&api_key=").concat(s)).then((function(e){return e.data})).catch((function(e){return console.log("Error: ",e)}))}function d(e){return a.get("".concat(o,"/movie/").concat(e,"/reviews?&page=").concat(1,"&api_key=").concat(s)).then((function(e){return e.data.results})).catch((function(e){return console.log("Error: ",e)}))}}},[[69,1,2]]]);
//# sourceMappingURL=main.7ade8352.chunk.js.map