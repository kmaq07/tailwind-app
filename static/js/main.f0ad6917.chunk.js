(this["webpackJsonpreact-tailwiind"]=this["webpackJsonpreact-tailwiind"]||[]).push([[0],{10:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(3),c=a.n(l),o=(a(9),a(1)),m=function(e){var t=e.image,a=t.tags.split(",");return r.a.createElement("div",{className:"max-w-sm rounded overflow-hidden shadow-lg"},r.a.createElement("img",{src:t.webformatURL,alt:"",className:"w-full"}),r.a.createElement("div",{className:"px-6 py-4"},r.a.createElement("div",{className:"font-bold text-purple-500 text-xl mb-2"},"Photo by ",t.user),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,"Views: "),t.views),r.a.createElement("li",null,r.a.createElement("strong",null,"Downloads: "),t.downloads),r.a.createElement("li",null,r.a.createElement("strong",null,"Likes: "),t.likes))),r.a.createElement("div",{className:"px-6 py-4"},a.map((function(e,t){return r.a.createElement("span",{key:t,className:"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"},"#",e)}))))},s=function(e){var t=e.searchText,a=Object(n.useState)(""),l=Object(o.a)(a,2),c=l[0],m=l[1];return r.a.createElement("div",{className:"max-w-sm reounded overflow-hidden my-10 mx-auto"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(c)},className:"w-full max-w-sm"},r.a.createElement("div",{className:"flex items-center border-b border-b-2 border-teal-500 py-2"},r.a.createElement("input",{onChange:function(e){return m(e.target.value)},className:"appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none",type:"text",placeholder:"Search Image Term..."}),r.a.createElement("button",{className:"flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded",type:"submit"},"Search"))))};var i=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(!0),i=Object(o.a)(c,2),u=i[0],d=i[1],p=Object(n.useState)(""),b=Object(o.a)(p,2),x=b[0],f=b[1];return Object(n.useEffect)((function(){fetch("https://pixabay.com/api/?key=".concat("17772853-31eadb7e71a013a74b7e720bc","&q=").concat(x,"&image_type=photo&pretty=true")).then((function(e){return e.json()})).then((function(e){l(e.hits),d(!1)})).catch((function(e){return console.log(e)}))}),[x]),r.a.createElement("div",{className:"container mx-auto"},r.a.createElement(s,{searchText:function(e){return f(e)}}),!u&&0===a.length&&r.a.createElement("h1",{className:"text-6xl text-center mx-auto mt-32"},"No Images Found"),u?r.a.createElement("h1",{className:"text-6xl text-center mx-auto mt-32"},"Loading..."):r.a.createElement("div",{className:"grid grid-cols-3 gap-4"},a.map((function(e){return r.a.createElement(m,{key:e.id,image:e})}))))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i,null)),document.getElementById("root"))},4:function(e,t,a){e.exports=a(10)},9:function(e,t,a){}},[[4,1,2]]]);
//# sourceMappingURL=main.f0ad6917.chunk.js.map