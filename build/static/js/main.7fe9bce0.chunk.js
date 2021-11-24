(this["webpackJsonpprojetos-musicas-react"]=this["webpackJsonpprojetos-musicas-react"]||[]).push([[0],{21:function(e,t,a){},22:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);a(16);var c=a(1),s=a.n(c),r=a(9),n=a.n(r),l=(a(21),a(22),a(5)),i=(a(23),a(0)),o=function(){return Object(i.jsx)("nav",{className:"navbar  navbar-expand-lg navbar-light",children:Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarTogglerDemo03","aria-controls":"navbarTogglerDemo03","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{className:"navbar-toggler-icon"})}),Object(i.jsx)(l.b,{className:"navbar-brand",to:"/"}),Object(i.jsx)("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo03",children:Object(i.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(l.b,{className:"nav-link active",to:"/",children:Object(i.jsx)("i",{class:"bi bi-house-fill"})})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(l.b,{className:"nav-link",to:"/cadastro",children:Object(i.jsx)("i",{class:"bi bi-list-task"})})})]})})]})})},d=a(3),j=a.n(d),b=a(7),m=a(4),u=function(e){var t=e.data;return Object(i.jsx)(l.b,{to:"/view/".concat(t._id),className:"col",children:Object(i.jsxs)("div",{className:"card",children:[Object(i.jsxs)("h3",{className:"card-header",children:[" ",Object(i.jsx)("i",{class:"bi bi-bookmark-star"})," Tarefa \ud83e\udc46 ",t.nome]}),Object(i.jsxs)("h3",{className:"card-header",children:[" ",Object(i.jsx)("i",{class:"bi bi-stopwatch"})," Status \ud83e\udc46 ",t.status]})]})})},h={apiUrl:"https://backend-lista.herokuapp.com/tarefas",fetchGetAll:function(){return fetch(h.apiUrl)},fetchGetById:function(e){return fetch("".concat(h.apiUrl,"/").concat(e))},fetchPost:function(e){return fetch("".concat(h.apiUrl,"/add"),{method:"POST",body:JSON.stringify(e),headers:new Headers({"Content-Type":"application/json"})})},fetchPut:function(e,t){return fetch("".concat(h.apiUrl,"/").concat(t),{method:"PUT",body:JSON.stringify(e),headers:new Headers({"Content-Type":"application/json"})})},fetchDelete:function(e){return fetch("".concat(h.apiUrl,"/").concat(e),{method:"DELETE"})}},x=h,O=function(){var e=Object(c.useState)([]),t=Object(m.a)(e,2),a=t[0],s=t[1];Object(c.useEffect)((function(){r()}),[]);var r=function(){var e=Object(b.a)(j.a.mark((function e(){var t,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.fetchGetAll();case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,s(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.jsx)("div",{className:"row row-cols-1 row-cols-md-3 mt-3 g-4",children:a.map((function(e){return Object(i.jsx)(u,{data:e},e._id)}))})},p=function(){return Object(i.jsxs)("div",{className:"lead",children:[Object(i.jsx)("h1",{className:"display-1 text-center",children:"Todo List"}),Object(i.jsx)(O,{})]})},f=a(2),v=function(){var e=Object(f.f)(),t=function(){var t=Object(b.a)(j.a.mark((function t(a){var c,s,r,n,l,i,o,d,b;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),console.log(a.target),c=a.target.nome.value,s=a.target.descricao.value,r=a.target.prioridade.value,n=a.target.status.value,l=a.target.prazo.value,i=a.target.data.value,o={nome:c,descricao:s,prioridade:r,status:n,prazo:l,data:i},t.next=11,x.fetchPost(o);case 11:return 500===(d=t.sent).status&&alert("ERRO NO SERVIDOR"),t.next=15,d.json();case 15:(b=t.sent).error?console.log(b.error):(alert(b.message),e("/"));case 17:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"card mt-4",children:[Object(i.jsx)("div",{className:"card-title",children:Object(i.jsx)("div",{className:"row",children:Object(i.jsx)("div",{className:"col",children:Object(i.jsx)("h3",{className:"mx-3 my-3",children:"Cadastro de Tarefas"})})})}),Object(i.jsx)("div",{className:"card-body",children:Object(i.jsxs)("form",{onSubmit:t,children:[Object(i.jsxs)("div",{className:"row mb-4",children:[Object(i.jsx)("div",{className:"col-4",children:Object(i.jsxs)("div",{className:"form-group",children:[Object(i.jsx)("label",{htmlFor:"nome",children:"Nome da Tarefa:"}),Object(i.jsx)("input",{id:"nome",className:"form-control",type:"text",placeholder:"Nome da Tarefa",name:"nome",required:!0})]})}),Object(i.jsx)("div",{className:"col-4",children:Object(i.jsxs)("div",{className:"form-group",children:[Object(i.jsx)("label",{htmlFor:"autor",children:"Descri\xe7\xe3o da Tarefa:"}),Object(i.jsx)("input",{id:"descricao",type:"text",className:"form-control",placeholder:"descri\xe7ao",name:"descricao",required:!0})]})}),Object(i.jsx)("div",{className:"col-4",children:Object(i.jsxs)("div",{className:"form-group",children:[Object(i.jsx)("label",{htmlFor:"genero",children:"Prioridade:"}),Object(i.jsx)("input",{id:"prioridade",type:"text",className:"form-control",placeholder:"Prioridade",name:"prioridade",required:!0})]})})]}),Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)("div",{className:"col-4",children:Object(i.jsxs)("div",{className:"form-group",children:[Object(i.jsx)("label",{htmlFor:"capa",children:"Status:"}),Object(i.jsx)("input",{id:"status",type:"text",className:"form-control",placeholder:"status",name:"status",required:!0})]})}),Object(i.jsx)("div",{className:"col-4",children:Object(i.jsxs)("div",{className:"form-group",children:[Object(i.jsx)("label",{htmlFor:"duracao",children:"Prazo:"}),Object(i.jsx)("input",{id:"prazo",type:"date",className:"form-control",placeholder:"Prazo ",name:"prazo",required:!0})]})}),Object(i.jsx)("div",{className:"col-4",children:Object(i.jsxs)("div",{className:"form-group",children:[Object(i.jsx)("label",{htmlFor:"duracao",children:"Data:"}),Object(i.jsx)("input",{id:"data",type:"date",className:"form-control",placeholder:"Data ",name:"data",required:!0})]})}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsxs)("div",{className:"col-4 d-flex align-items-end justify-content-around",children:[Object(i.jsx)("button",{type:"submit",className:"btn btn-success",children:"Enviar"}),Object(i.jsx)("a",{href:"/",class:"btn btn-danger",role:"button",children:"Voltar"})]})]})]})})]})})},N=a(13),g=(a(27),function(){var e=Object(c.useState)({}),t=Object(m.a)(e,2),a=t[0],s=t[1],r=Object(c.useState)(!1),n=Object(m.a)(r,2),o=n[0],d=n[1],u=Object(f.f)(),h=function(){return d(!1)};Object(c.useEffect)((function(){p()}),[]);var O=Object(f.g)().id;console.log(O);var p=function(){var e=Object(b.a)(j.a.mark((function e(){var t,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.fetchGetById(O);case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,s(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(b.a)(j.a.mark((function e(){var t,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.fetchDelete(O);case 2:return t=e.sent,e.next=5,t.json();case 5:(a=e.sent).message?(console.log("excluido",a.message),u("/")):alert(a.error);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.jsx)("div",{className:"container",children:Object(i.jsx)("div",{className:"row my-5",children:Object(i.jsxs)("div",{className:"col-6",children:[Object(i.jsxs)("div",{className:"card my-4",children:[Object(i.jsxs)("h1",{className:"text-left my-4",children:[Object(i.jsx)("b",{children:"Nome: "}),a.nome]}),Object(i.jsxs)("h2",{className:"text-left my-4",children:[Object(i.jsx)("b",{children:"Descri\xe7\xe3o: "}),a.descricao]}),Object(i.jsxs)("h2",{className:"text-left my-4",children:[Object(i.jsx)("b",{children:"Prioridade: "}),a.prioridade]}),Object(i.jsxs)("h2",{className:"text-left my-4",children:[Object(i.jsx)("b",{children:"Status: "}),a.status]}),Object(i.jsxs)("h2",{className:"text-left my-4",children:[Object(i.jsx)("b",{children:"Prazo: "}),a.prazo]}),Object(i.jsxs)("h2",{className:"text-left my-4",children:[Object(i.jsx)("b",{children:"Data de Cria\xe7\xe3o: "}),a.data]}),Object(i.jsxs)("div",{className:"btn-group mt-3 w-100",children:[Object(i.jsx)(l.b,{to:"/edit/".concat(a._id),className:"btn btn-success",children:"Editar"}),Object(i.jsx)("button",{className:"btn btn-danger",onClick:function(){return d(!0)},children:"Excluir"})]})]}),Object(i.jsxs)(N.a,{open:o,onClose:h,center:!0,showCloseIcon:!1,children:[Object(i.jsx)("h2",{className:"my-4",children:"Deseja Realmente Excluir ?"}),Object(i.jsxs)("div",{className:"d-flex w-50 mx-auto justify-content-around",children:[Object(i.jsx)("button",{className:"btn btn-danger mr-2",onClick:h,children:"N\xe3o"}),Object(i.jsx)("button",{className:"btn btn-success",onClick:v,children:"Sim"})]})]})]})})})}),y=a(15),w=function(){var e=Object(f.f)(),t=Object(c.useState)({nome:"",descricao:"",prioridade:"",status:"",duracao:"",data:""}),a=Object(m.a)(t,2),s=a[0],r=a[1],n=Object(f.g)().id;Object(c.useEffect)((function(){l()}),[]);var l=function(){var e=Object(b.a)(j.a.mark((function e(){var t,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.fetchGetById(n);case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,r(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(e){var t=Object(y.a)({},s);t[e.target.name]=e.target.value,console.log(t),r(t)},d=function(){var t=Object(b.a)(j.a.mark((function t(a){var c,r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.next=3,x.fetchPut(s,n);case 3:return c=t.sent,t.next=6,c.json();case 6:r=t.sent,alert(r.message),e("/view/".concat(n));case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"card mt-4",children:[Object(i.jsx)("div",{className:"card-title",children:Object(i.jsx)("div",{className:"row",children:Object(i.jsx)("div",{className:"col",children:Object(i.jsx)("h3",{className:"mx-3 my-3",children:"Editando Tarefa"})})})}),Object(i.jsx)("div",{className:"card-body",children:Object(i.jsxs)("form",{onSubmit:d,children:[Object(i.jsxs)("div",{className:"row mb-4",children:[Object(i.jsx)("div",{className:"col-4",children:Object(i.jsxs)("div",{className:"form-group",children:[Object(i.jsx)("label",{htmlFor:"nome",children:"Nome da tarefa:"}),Object(i.jsx)("input",{id:"nome",className:"form-control",type:"text",placeholder:"Nome da tarefa",value:s.nome,onChange:o,name:"nome"})]})}),Object(i.jsx)("div",{className:"col-4",children:Object(i.jsxs)("div",{className:"form-group",children:[Object(i.jsx)("label",{htmlFor:"autor",children:"Descri\xe7\xe3o:"}),Object(i.jsx)("input",{id:"autor",type:"text",className:"form-control",placeholder:"Descri\xe7\xe3o",value:s.descricao,onChange:o,name:"descricao"})]})}),Object(i.jsx)("div",{className:"col-4",children:Object(i.jsxs)("div",{className:"form-group",children:[Object(i.jsx)("label",{htmlFor:"genero",children:"Prioridade:"}),Object(i.jsx)("input",{id:"genero",type:"text",className:"form-control",value:s.prioridade,onChange:o,placeholder:"Prioridade",name:"prioridade"})]})})]}),Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)("div",{className:"col-4",children:Object(i.jsxs)("div",{className:"form-group",children:[Object(i.jsx)("label",{htmlFor:"capa",children:"Status:"}),Object(i.jsx)("input",{id:"capa",type:"text",value:s.status,onChange:o,className:"form-control",placeholder:"Status",name:"status"})]})}),Object(i.jsx)("div",{className:"col-4",children:Object(i.jsxs)("div",{className:"form-group",children:[Object(i.jsx)("label",{htmlFor:"duracao",children:"Dura\xe7\xe3o:"}),Object(i.jsx)("input",{id:"duracao",type:"date",value:s.duracao,onChange:o,className:"form-control",placeholder:"Dura\xe7ao",name:"duracao"})]})}),Object(i.jsx)("div",{className:"col-4",children:Object(i.jsxs)("div",{className:"form-group",children:[Object(i.jsx)("label",{htmlFor:"duracao",children:"Data:"}),Object(i.jsx)("input",{id:"data",type:"date",value:s.data,onChange:o,className:"form-control",placeholder:"Data",name:"data"})]})}),Object(i.jsxs)("div",{className:"col-4 d-flex align-items-end justify-content-around",children:[Object(i.jsx)("button",{type:"submit",className:"btn btn-success ",children:"Enviar"}),Object(i.jsx)("button",{type:"button",className:"btn btn-danger",children:"Voltar"})]})]})]})})]})})};var D=function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)(o,{}),Object(i.jsxs)(f.c,{children:[Object(i.jsx)(f.a,{path:"/",element:Object(i.jsx)(p,{})}),Object(i.jsx)(f.a,{path:"/cadastro",element:Object(i.jsx)(v,{})}),Object(i.jsx)(f.a,{path:"/view/:id",element:Object(i.jsx)(g,{})}),Object(i.jsx)(f.a,{path:"/edit/:id",element:Object(i.jsx)(w,{})})]})]})};n.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(l.a,{children:Object(i.jsx)(D,{})})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.7fe9bce0.chunk.js.map