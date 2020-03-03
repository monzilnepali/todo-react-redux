(this["webpackJsonptodo-react-redux"]=this["webpackJsonptodo-react-redux"]||[]).push([[0],{26:function(e,t,a){e.exports=a(37)},31:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),o=a(13),r=a.n(o),l=a(7),i=a(9),u=(a(31),["January","February","March","April","May","June","July","August","September","October","November","December"]),s=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],d=function(){var e=new Date;return s[e.getDay()]},m=function(){var e=new Date;return u[e.getMonth()]},b=function(){return(new Date).getFullYear()},v=function(){return(new Date).getDate()};var E=function(){return c.a.createElement("div",{className:"nav"},c.a.createElement(l.b,{className:"nav__link",to:"/home",activeClassName:"nav__link--active"},"Home"),c.a.createElement(l.b,{className:"nav__link",to:"/completed",activeClassName:"nav__link--active"},"Completed"),c.a.createElement(l.b,{className:"nav__link",to:"/incomplete",activeClassName:"nav__link--active"},"Remaining"))},f=a(15),p=a(39),O=a(8);var h=Object(O.b)(null,(function(e){return{addTodo:function(t){return e(function(e){return{type:"ADD_TODO",todo:e}}(t))}}}))((function(e){var t=e.addTodo,a=Object(n.useState)(""),o=Object(f.a)(a,2),r=o[0],l=o[1];return c.a.createElement("input",{type:"text",placeholder:"Add a note (Enter)",onKeyDown:function(e){"Enter"==e.key&&(""!=r?(t({status:!1,id:Object(p.a)(),text:r}),l("")):alert("empty field"))},value:r,onChange:function(e){l(e.target.value)}})})),T=a(0),y=a(16);var g=Object(O.b)(null,(function(e){return{deleteTodo:function(t){return e(function(e){return{type:"DELETE_TODO",todoid:e}}(t))},updateTodo:function(t){return e(function(e){return{type:"UPDATE_TODO",todoid:e}}(t))}}}))((function(e){var t=e.data,a=e.deleteTodo,o=e.updateTodo,r=Object(n.useState)(t.status),l=Object(f.a)(r,2),i=l[0],u=l[1];function s(){o(t.id),u(!i)}return c.a.createElement("div",{className:"note"},c.a.createElement(T.b.Provider,{value:{className:"icon"}},t.status?c.a.createElement(y.a,{className:"icon",onClick:s}):c.a.createElement(y.b,{onClick:s})),c.a.createElement("p",{className:t.status?"text text--line-through":"text"},t.text),c.a.createElement(T.b.Provider,{value:{className:"icon"}},c.a.createElement(y.c,{onClick:function(){a(t.id)}})))}));var D=Object(O.b)((function(e){return{todoList:e.Todo.todoList}}),null)((function(e){var t=e.todoList,a=Object(i.g)().pathname;return c.a.createElement("div",null,c.a.createElement("div",{className:"note-list"},t.filter((function(e){switch(a){case"/home":return e;case"/completed":if(1==e.status)return e;break;case"/incomplete":if(0==e.status)return e;break;default:return e}})).map((function(e){return c.a.createElement(g,{data:e,key:e.id})}))))}));function j(){return console.log("dash baord called"),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"wrapper"},c.a.createElement(E,null),c.a.createElement("div",{className:"date-section"},c.a.createElement("h1",null,d()),c.a.createElement("p",null," ",m()+" "+v()+", "+b())),c.a.createElement("div",{className:"body"},"/home"==Object(i.g)().pathname?c.a.createElement(h,null):"",c.a.createElement(D,null))))}var k=function(){return c.a.createElement(l.a,null,c.a.createElement(i.d,null,c.a.createElement(i.a,{exact:!0,from:"/",to:"/home"}),c.a.createElement(i.b,{exact:!0,path:"/home",component:j}),c.a.createElement(i.b,{exact:!0,path:"/completed",component:j}),c.a.createElement(i.b,{exact:!0,path:"/incomplete",component:j})))},N=a(11),_=a(17),x={todoList:[]},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TODO":e=Object.assign({},e,{todoList:[].concat(Object(_.a)(e.todoList),[t.todo])});break;case"DELETE_TODO":e=Object.assign({},e,{todoList:Object(_.a)(e.todoList.filter((function(e){return e.id!==t.todoid})))});break;case"UPDATE_TODO":e=Object.assign({},e,{todoList:Object(_.a)(e.todoList.map((function(e){return e.id==t.todoid&&(e.status=!e.status),e})))});break;default:return e}return e},w={activeTab:"HOME"},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;return"SWITCHTAB"==t.type&&(e=Object.assign({},e,{actionTab:t.tab})),e},A=Object(N.b)({Todo:L,Tab:C}),S=Object(N.c)(A);console.log(S.getState()),r.a.render(c.a.createElement(O.a,{store:S},c.a.createElement(k,null)),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.6c0c82ac.chunk.js.map