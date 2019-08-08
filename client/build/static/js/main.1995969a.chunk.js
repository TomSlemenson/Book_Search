(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){e.exports=a(53)},48:function(e,t,a){},49:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(21),l=a.n(o),c=a(56),i=a(57),s=a(58),m=a(6),u=a(7),h=a(8),d=a(12),v=a(9),f=a(13),p=a(5),b=a.n(p),k={searchBook:function(e){return b.a.get("https://www.googleapis.com/books/v1/volumes?q="+e)},getBooks:function(){return b.a.get("/api/books")},deleteBook:function(e){return b.a.delete("/api/books/"+e)},saveBook:function(e){return b.a.post("/api/books",e)}};function E(e){var t=e.fluid,a=e.children;return r.a.createElement("div",{className:"container".concat(t?"-fluid":"")},a)}function g(e){var t=e.fluid,a=e.children;return r.a.createElement("div",{className:"row".concat(t?"-fluid":"")},a)}function S(e){var t=e.size,a=e.children;return r.a.createElement("div",{className:t.split(" ").map(function(e){return"col-"+e}).join(" ")},a)}a(48);var y=function(e){return r.a.createElement("div",{className:"col-10 cont mb-4 p-4 card"},r.a.createElement("div",null,r.a.createElement("h3",{className:"text-justify mb-4"},e.title," ",r.a.createElement("small",null,"by ",e.authors))),r.a.createElement("div",null,r.a.createElement("img",{src:e.image,alt:e.title}),r.a.createElement("div",{className:"text_container"},r.a.createElement("p",{className:"text-justify"},e.description))),r.a.createElement("div",{className:"mt-3"},r.a.createElement("a",{className:"btn btn-primary mr-2 pr-4 pl-4",target:"blank",href:e.link},"Buy"),r.a.createElement(e.Button,null)))},N={h1:{fontFamily:"'Saira Stencil One', cursive"}},B=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={books:[]},a.deleteBook=function(e){k.deleteBook(e._id).then(function(){k.getBooks().then(function(e){return a.setState({books:e.data})})})},a.handleInputChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(m.a)({},n,r))},a.handleFormSubmit=function(e){e.preventDefault(),a.state.title&&a.state.author&&k.saveBook({title:a.state.title,author:a.state.author,synopsis:a.state.synopsis})},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this;k.getBooks().then(function(t){return e.setState({books:t.data})})}},{key:"render",value:function(){var e=this;return r.a.createElement(E,{fluid:!0},r.a.createElement(g,null,r.a.createElement(S,{size:"md-12 sm-12"},r.a.createElement("h1",{style:N.h1,className:"text-center pt-5 pb-5 text-light"},"SAVED BOOKS"),this.state.books.map(function(t){return r.a.createElement(y,{key:t._id,title:t.title,link:t.link,authors:t.authors,description:t.description,image:t.image,Button:function(){return r.a.createElement("button",{onClick:function(){return e.deleteBook(t)},className:"btn btn-danger ml-2 pr-4 pl-4"},"Delet From List")}})}))))}}]),t}(n.Component);a(49);var I=function(e){return r.a.createElement("div",{className:"col-8 cont mb-4 p-4 card text-center"},r.a.createElement("h5",{className:"pb-2"},"SEARCH FOR A BOOK"),r.a.createElement("form",null,r.a.createElement("input",{className:"mr-2 mb-3  p-2 width_ ",id:"Title",type:"text",value:e.search_term,placeholder:"Book name",name:"search_term",onChange:e.handleInputChange,required:!0}),r.a.createElement("button",{onClick:e.handleFormSubmit,type:"submit",className:"btn btn-md text-light btn-primary padding"},"Search")))},O={h1:{fontFamily:"'Saira Stencil One', cursive",fontSize:"60px"}},w=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={books:[],search_term:"",error:""},a.handleInputChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(m.a)({},n,r))},a.handleFormSubmit=function(e){e.preventDefault(),k.searchBook(a.state.search_term).then(function(e){e.data.items?(a.setState({books:e.data.items}),a.setState({search_term:""})):alert("Sorry, book not found...")}).catch(function(e){return a.setState({error:e.message})})},a.handleBookSave=function(e){for(var t=e.volumeInfo.authors,n=e.volumeInfo.authors[0],r=1;r<t.length;r++)n+=":"+t[r];n="".concat(n.split(":").join(", "),"."),k.saveBook({googleId:e.id,title:e.volumeInfo.title,link:e.volumeInfo.infoLink,authors:n,description:e.volumeInfo.description,image:e.volumeInfo.imageLinks.thumbnail}).then(function(t){alert('The book "'.concat(e.volumeInfo.title,'" was saved to your list.')),a.setState({books:a.state.books.filter(function(e){return e.id!==t.data.id})})}).catch(function(e){return console.log(e)})},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(E,{fluid:!0},r.a.createElement(g,null,r.a.createElement(S,{size:"md-12 sm-12"},r.a.createElement("div",{className:"text-center m-5 p-5 text-light"},r.a.createElement("h1",{style:O.h1},"Google Books Search     ",r.a.createElement("i",{className:"fas fa-book-open mr-5"})," ")),r.a.createElement(I,{handleInputChange:this.handleInputChange,handleFormSubmit:this.handleFormSubmit,search_term:this.state.search_term}),this.state.books.map(function(t){return r.a.createElement(y,{key:t.id,title:t.volumeInfo.title,link:t.volumeInfo.infoLink,authors:"".concat(t.volumeInfo.authors,"."),description:t.volumeInfo.description,image:t.volumeInfo.imageLinks.thumbnail,Button:function(){return r.a.createElement("button",{onClick:function(){return e.handleBookSave(t)},className:"btn btn-success ml-2 pr-4 pl-4"},"Save")}})}))))}}]),t}(n.Component),x={card:{padding:"100px"}};var j=function(){return r.a.createElement("div",{className:"container text-center"},r.a.createElement("h1",{style:x.card,className:"card text-center mt-5"},"404 Page Not Found",r.a.createElement("small",{class:"pt-3"},"check your url...")))},C=a(55);var _=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement(C.a,{className:"navbar-brand",to:"/"},"Google Books Search"),r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(C.a,{to:"/",className:"/"===window.location.pathname?"nav-link active":"nav-link"},"Search")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(C.a,{to:"/Saved",className:"/Saved"===window.location.pathname?"nav-link active":"nav-link"},"Saved")))))};var F=function(){return r.a.createElement(c.a,null,r.a.createElement("div",null,r.a.createElement(_,null),r.a.createElement(i.a,null,r.a.createElement(s.a,{exact:!0,path:"/",component:w}),r.a.createElement(s.a,{exact:!0,path:"/Saved",component:B}),r.a.createElement(s.a,{component:j}))))};l.a.render(r.a.createElement(F,null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.1995969a.chunk.js.map