(this.webpackJsonpacc=this.webpackJsonpacc||[]).push([[0],{36:function(e,t,c){},37:function(e,t,c){},47:function(e,t,c){"use strict";c.r(t);var i=c(0),n=c.n(i),j=c(27),o=c.n(j),s=(c(36),c(37),c(38),c(13)),r=c(6),l=c(52),a=c(1),d=function(){return Object(a.jsxs)("div",{className:"home-container",children:[Object(a.jsx)(s.b,{to:"/oilchange",children:Object(a.jsx)(l.a,{className:"home-buttons",children:"New Oil Change"})}),Object(a.jsx)(s.b,{to:"/vehiclelist",children:Object(a.jsx)(l.a,{className:"home-buttons",children:"Vehicle List"})})]})},h=c(17),b=c(31),O=c(51),x=function(e,t){switch(t.type){case"ADD_VEHICLE":return[].concat(Object(b.a)(e),[{id:Object(O.a)(),service:t.vehicle.service,timeStarted:t.vehicle.timeStarted,timeFinished:t.vehicle.timeFinished,totalTime:t.vehicle.totalTime}]);case"REMOVE_VEHICLE":return e.filter((function(e){return e.id!==t.id}));default:return e}},p=Object(i.createContext)(),u=function(e){var t=Object(i.useReducer)(x,[],(function(){var e=localStorage.getItem("vehicles");return e?JSON.parse(e):[]})),c=Object(h.a)(t,2),n=c[0],j=c[1];return Object(i.useEffect)((function(){localStorage.setItem("vehicles",JSON.stringify(n))}),[n]),Object(a.jsx)(p.Provider,{value:{vehicles:n,dispatch:j},children:e.children})},m=c(12),v=c.n(m),f=c(50),C=c(30),S=c(49),g=c(29),y=function(){var e=Object(r.e)(),t=Object(i.useContext)(p).dispatch,c=Object(i.useState)("OIL CHANGE"),n=Object(h.a)(c,1)[0],j=Object(i.useState)(Date()),o=Object(h.a)(j,2),s=o[0],d=o[1];Object(i.useEffect)((function(){d(Date())}),[]);return Object(a.jsx)("div",{className:"service-container",children:Object(a.jsxs)(f.a,{children:[Object(a.jsx)(f.a.Row,{children:Object(a.jsx)(f.a.Group,{as:C.a,children:Object(a.jsx)(f.a.Control,{type:"number",placeholder:"Mileage"})})}),Object(a.jsxs)(f.a.Row,{children:[Object(a.jsx)(f.a.Group,{as:C.a,children:Object(a.jsx)(f.a.Control,{type:"number",placeholder:"Front PSI"})}),Object(a.jsx)(f.a.Group,{as:C.a,children:Object(a.jsx)(f.a.Control,{type:"number",placeholder:"Rear PSI"})})]}),Object(a.jsx)(f.a.Row,{children:Object(a.jsx)(f.a.Group,{as:C.a,children:Object(a.jsxs)(f.a.Control,{as:"select",children:[Object(a.jsx)("option",{children:"Pre-service"}),Object(a.jsx)("option",{children:"NO OIL"}),Object(a.jsx)("option",{children:"1 QT LOW"}),Object(a.jsx)("option",{children:"1/2 QT LOW"}),Object(a.jsx)("option",{children:"FULL"}),Object(a.jsx)("option",{children:"OVER"})]})})}),Object(a.jsxs)(f.a.Row,{children:[Object(a.jsx)(f.a.Group,{as:C.a,children:Object(a.jsxs)(f.a.Control,{as:"select",children:[Object(a.jsx)("option",{children:"Year"}),Object(a.jsx)("option",{children:"2021"}),Object(a.jsx)("option",{children:"2020"}),Object(a.jsx)("option",{children:"2019"}),Object(a.jsx)("option",{children:"2018"}),Object(a.jsx)("option",{children:"2017"}),Object(a.jsx)("option",{children:"2016"}),Object(a.jsx)("option",{children:"2015"}),Object(a.jsx)("option",{children:"2014"}),Object(a.jsx)("option",{children:"2013"}),Object(a.jsx)("option",{children:"2012"}),Object(a.jsx)("option",{children:"2011"}),Object(a.jsx)("option",{children:"2010"}),Object(a.jsx)("option",{children:"2009"}),Object(a.jsx)("option",{children:"2008"}),Object(a.jsx)("option",{children:"2007"}),Object(a.jsx)("option",{children:"2006"}),Object(a.jsx)("option",{children:"2005"}),Object(a.jsx)("option",{children:"2004"}),Object(a.jsx)("option",{children:"2003"}),Object(a.jsx)("option",{children:"2002"}),Object(a.jsx)("option",{children:"2001"}),Object(a.jsx)("option",{children:"2000"}),Object(a.jsx)("option",{children:"1999"}),Object(a.jsx)("option",{children:"1998"}),Object(a.jsx)("option",{children:"1997"}),Object(a.jsx)("option",{children:"1996"}),Object(a.jsx)("option",{children:"1995"}),Object(a.jsx)("option",{children:"1994"}),Object(a.jsx)("option",{children:"1993"}),Object(a.jsx)("option",{children:"1992"}),Object(a.jsx)("option",{children:"1991"}),Object(a.jsx)("option",{children:"1990"}),Object(a.jsx)("option",{children:"1989"}),Object(a.jsx)("option",{children:"1988"}),Object(a.jsx)("option",{children:"1987"}),Object(a.jsx)("option",{children:"1986"}),Object(a.jsx)("option",{children:"1985"})]})}),Object(a.jsx)(f.a.Group,{as:C.a,children:Object(a.jsx)(f.a.Control,{type:"number",placeholder:"Engine Size"})})]}),Object(a.jsxs)(f.a.Row,{children:[Object(a.jsx)(f.a.Group,{as:C.a,children:Object(a.jsxs)(f.a.Control,{as:"select",children:[Object(a.jsx)("option",{children:"Oil Viscosity"}),Object(a.jsx)("option",{children:"0W-20"}),Object(a.jsx)("option",{children:"5W-20"}),Object(a.jsx)("option",{children:"5W-30"}),Object(a.jsx)("option",{children:"10W-30"}),Object(a.jsx)("option",{children:"15W-40"}),Object(a.jsx)("option",{children:Object(a.jsxs)(S.a,{children:[Object(a.jsx)(S.a.Prepend,{children:Object(a.jsx)(S.a.Radio,{"aria-label":"Radio button for following text input"})}),Object(a.jsx)(g.a,{"aria-label":"Text input with radio button"})]})})]})}),Object(a.jsx)(f.a.Group,{as:C.a,children:Object(a.jsx)(f.a.Control,{type:"number",placeholder:"Oil Capacity"})})]}),Object(a.jsx)(f.a.Row,{children:Object(a.jsx)(f.a.Group,{as:C.a,children:Object(a.jsx)(f.a.Control,{as:"textarea",rows:10})})}),Object(a.jsx)(l.a,{variant:"primary",type:"submit",onClick:function(c){c.preventDefault();var i=Date(),j=v.a.utc(v()(i).diff(v()(s))).format("HH:mm:ss");t({type:"ADD_VEHICLE",vehicle:{service:n,timeStarted:s,timeFinished:i,totalTime:j}}),e.push("/")},children:"Submit"})]})})},E=function(e){var t=e.vehicle,c=Object(i.useContext)(p).dispatch;return Object(a.jsx)("div",{className:"services-table",children:Object(a.jsxs)("table",{className:"layout display responsive-table",children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{scope:"col",children:"Service"}),Object(a.jsx)("th",{scope:"col",children:"Time Started"}),Object(a.jsx)("th",{scope:"col",children:"Time Finished"}),Object(a.jsx)("th",{scope:"col",children:"Total Time"}),Object(a.jsx)("th",{scope:"col",children:"Actions"})]})}),Object(a.jsx)("tbody",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{"data-label":"Service",children:t.service}),Object(a.jsx)("td",{"data-label":"Time Started",children:v()(t.timeStarted).format("h:mm:ss A")}),Object(a.jsx)("td",{"data-label":"Time Finished",children:v()(t.timeFinished).format("h:mm:ss A")}),Object(a.jsx)("td",{"data-label":"Total Time",children:t.totalTime}),Object(a.jsx)("td",{"data-label":"Actions",children:Object(a.jsx)(l.a,{variant:"danger",size:"sm",onClick:function(){return c({type:"REMOVE_VEHICLE",id:t.id})},children:"Delete"})})]})})]})})},T=function(){var e=Object(i.useContext)(p).vehicles;return e.length?Object(a.jsx)("div",{children:Object(a.jsx)("ul",{children:e.map((function(e){return Object(a.jsx)(E,{vehicle:e},e.id)}))})}):Object(a.jsx)("div",{className:"empty",children:"No vehicles"})},w=function(){return Object(a.jsx)(u,{children:Object(a.jsxs)(s.a,{children:[Object(a.jsx)(r.a,{exact:!0,path:"/",component:d}),Object(a.jsx)(r.a,{path:"/oilchange",component:y}),Object(a.jsx)(r.a,{path:"/vehiclelist",component:T})]})})},L=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,53)).then((function(t){var c=t.getCLS,i=t.getFID,n=t.getFCP,j=t.getLCP,o=t.getTTFB;c(e),i(e),n(e),j(e),o(e)}))};o.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(w,{})}),document.getElementById("root")),L()}},[[47,1,2]]]);
//# sourceMappingURL=main.866a38b0.chunk.js.map