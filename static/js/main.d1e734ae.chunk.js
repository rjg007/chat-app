(this["webpackJsonpchat-app-final"]=this["webpackJsonpchat-app-final"]||[]).push([[0],{23:function(e,t){},45:function(e,t){},46:function(e,t){},47:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s(0),n=s(24),r=s.n(n),l=(s(35),s(7)),i=s(8),j=s(9),o=s(2),d=function(e){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:" Chat Section "}),Object(a.jsxs)("p",{children:[Object(a.jsxs)("button",{className:"btn btn-primary",style:{marginRight:"5px"},children:[" ",Object(a.jsx)(l.b,{style:{color:"white"},to:"/",children:" Home "})," "]}),Object(a.jsxs)("button",{className:"btn btn-primary",style:{marginRight:"5px"},children:[" ",Object(a.jsx)(l.b,{style:{color:"white"},to:"/upload",children:" Upload "})," "]}),Object(a.jsxs)("button",{className:"btn btn-primary",children:[" ",Object(a.jsx)(l.b,{style:{color:"white"},to:"/list",children:" Student List "})," "]})]})]})},b=s(26),h=s(20),u=function(e){var t=e.csvData;e.fileName;return Object(a.jsx)("button",{onClick:function(e){return function(e,t){var s=h.utils.json_to_sheet(e);console.log(s);var a={Sheets:{data:s},SheetNames:["data"]},c=h.write(a,{bookType:"xlsx",type:"array"}),n=new Blob([c],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8"});b.saveAs(n,t+".xlsx")}(t,"data-sheet")},className:"btn btn-danger",children:"Export"})},x=function(e){var t=e.userData,s=e.isUploaded,n=Object(c.useState)(""),r=Object(j.a)(n,2),l=r[0],i=r[1];return l.length>0&&(t=t.filter((function(e){return e.name.toLowerCase().match(l)}))),Object(a.jsx)("div",{className:"text-center",children:s&&Object(a.jsxs)("div",{className:"text-center",children:[Object(a.jsx)("h2",{children:" All Student Responses "}),Object(a.jsx)("input",{className:"mb-3",type:"text",placeHolder:"search by name",onChange:function(e){e.preventDefault(),i(e.target.value)},value:l}),Object(a.jsx)("br",{}),Object(a.jsxs)("table",{className:"table table-hover",children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:" Time "}),Object(a.jsx)("th",{children:" Name "}),Object(a.jsx)("th",{children:" message "}),Object(a.jsx)("th",{children:" IsPrivate "})]})}),Object(a.jsx)("tbody",{children:t.map((function(e,t){return Object(a.jsxs)("tr",{children:[Object(a.jsxs)("td",{children:[" ",e.time," "]}),Object(a.jsxs)("td",{children:[" ",e.name," "]}),Object(a.jsxs)("td",{children:[" ",e.message," "]}),Object(a.jsxs)("td",{children:[" ",e.private?"true":"false"," "]})]},t)}))})]})]})})},O=function(e){var t=e.file,s=e.setFile,c=e.isUploaded,n=e.setIsUploaded,r=e.userData,l=e.setUserData;return Object(a.jsxs)("div",{children:[Object(a.jsx)("hr",{}),Object(a.jsx)("h2",{children:"  File Upload "}),Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault();var s="".concat(t);s=s.split("\n");for(var a=[],c=0;c<s.length;c++){var r=void 0;0!==s[c].length&&(r={time:"".concat(s[c].slice(0,8)),name:"".concat(s[c].slice(15,s[c].includes("  To  Aniruddha SG(privately)")?s[c].indexOf("  To  Aniruddha SG(privately) "):s[c].lastIndexOf(":")-1)),message:"".concat(s[c].slice(s[c].lastIndexOf(":")+2)),private:!!s[c].includes("privately")},a.push(r))}l(a),n(!0)},children:[Object(a.jsx)("input",{type:"file",name:"file",onChange:function(e){var a=e.target.files[0],c=new FileReader;c.onload=function(e){var a=e.target.result;s(a),console.log(t)},c.readAsText(a)},className:"btn btn-success",style:{marginRight:"5px"}}),Object(a.jsx)("input",{type:"submit",value:"upload",className:"btn btn-primary"})]}),Object(a.jsx)("br",{}),Object(a.jsx)(u,{csvData:r}),Object(a.jsx)("hr",{}),Object(a.jsx)(x,{userData:r,isUploaded:c})]})},p=s(29),m=s(27),f=function(e){var t,s=e.userMessagesLength,c=[["User Name","Messages Count"]],n=Object(i.a)(s);try{for(n.s();!(t=n.n()).done;){var r=t.value;c.push(Object(p.a)(r))}}catch(l){n.e(l)}finally{n.f()}return Object(a.jsx)("div",{className:"col-md-6",style:{margin:"0px"},children:Object(a.jsx)(m.a,{width:"700px",height:"500px",chartType:"PieChart",loader:Object(a.jsx)("div",{children:"Loading Chart"}),data:c,options:{title:"Messages Count"},rootProps:{"data-testid":"1"}})})},v=function(e){var t=Object(c.useState)(""),s=Object(j.a)(t,2),n=s[0],r=s[1],o=e.userData,d=e.newArr;n.length>0&&(d=d.filter((function(e){return e.toLowerCase().match(n)})));var b,h=[],u=Object(i.a)(d);try{for(u.s();!(b=u.n()).done;){var x,O=b.value,p=0,m=Object(i.a)(o);try{for(m.s();!(x=m.n()).done;){x.value.name===O&&p++}}catch(g){m.e(g)}finally{m.f()}var v=[O,p];h.push(v)}}catch(g){u.e(g)}finally{u.f()}return Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)("h2",{style:{marginLeft:"135px"},children:[" List of Students (",d.length,") "]}),Object(a.jsxs)("div",{className:"col-md-6",style:{textAlign:"right",marginTop:"10px"},children:[Object(a.jsx)("input",{type:"text",placeHolder:"search by name",onChange:function(e){e.preventDefault(),r(e.target.value)},value:n}),Object(a.jsx)("br",{})]}),Object(a.jsx)("div",{className:"col-md-6",children:Object(a.jsx)("ul",{className:"list-group",style:{listStyleType:"none"},children:d.map((function(e,t){return Object(a.jsxs)("li",{className:"list-group-item",children:[" ",Object(a.jsxs)(l.b,{to:"/list/".concat(t+1),children:["  ",e,"  "]})," "]},t+1)}))})}),Object(a.jsx)("div",{className:"col-md-6",children:Object(a.jsx)(f,{userMessagesLength:h})})]})},g=function(e){var t=e.userData,s=e.newArr,c=Object(o.e)(),n=c.pathname;console.log(c.pathname);var r=Number(n.slice(6));console.log(r);var l,j=[],d=s[r-1],b=Object(i.a)(t);try{for(b.s();!(l=b.n()).done;){var h=l.value;h.name===d&&j.push(h.message)}}catch(u){b.e(u)}finally{b.f()}return Object(a.jsxs)("div",{children:[Object(a.jsx)("hr",{}),Object(a.jsxs)("h2",{children:[" Responses of ",s[r-1]," "]}),Object(a.jsx)("hr",{}),Object(a.jsxs)("div",{style:{textAlign:"left"},children:[Object(a.jsxs)("h3",{children:[" ",j.length," Responses "]}),Object(a.jsx)("ol",{className:"list-group",children:j.map((function(e,t){return Object(a.jsxs)("li",{style:{marginLeft:"20px"},children:[" ",e," "]},t)}))})]}),Object(a.jsx)("hr",{})]})},y=function(e){var t=Object(c.useState)(null),s=Object(j.a)(t,2),n=s[0],r=s[1],l=Object(c.useState)([]),b=Object(j.a)(l,2),h=b[0],u=b[1],x=Object(c.useState)(!1),p=Object(j.a)(x,2),m=p[0],f=p[1];Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem("students"))||[];u(e)}),[]),Object(c.useEffect)((function(){localStorage.setItem("students",JSON.stringify(h))}),[h]);var y,N=[],S=Object(i.a)(h);try{for(S.s();!(y=S.n()).done;){var w=y.value;N.includes(w.name)||N.push(w.name)}}catch(D){S.e(D)}finally{S.f()}return console.log(h),console.log(N),Object(a.jsxs)("div",{className:"container text-center",children:[Object(a.jsx)(o.a,{path:"/",component:d}),Object(a.jsx)(o.a,{path:"/upload",children:Object(a.jsx)(O,{userData:h,setUserData:u,file:n,setFile:r,isUploaded:m,setIsUploaded:f})}),Object(a.jsx)(o.a,{path:"/list",exact:!0,children:Object(a.jsx)(v,{userData:h,newArr:N})}),Object(a.jsx)(o.a,{path:"/list/:id",children:Object(a.jsx)(g,{userData:h,newArr:N})})]})};r.a.render(Object(a.jsx)(l.a,{children:Object(a.jsx)(y,{})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.d1e734ae.chunk.js.map