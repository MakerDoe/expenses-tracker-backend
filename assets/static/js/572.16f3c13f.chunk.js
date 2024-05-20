"use strict";(self.webpackChunkexpenses_tracker=self.webpackChunkexpenses_tracker||[]).push([[572],{333:(e,t,n)=>{n.d(t,{A:()=>r});var a=n(43),s=n(825),c=n(579);const r=function(e){const[t,n]=(0,a.useState)(!1);return[t?"text":"password",(0,c.jsx)("button",{type:"button",className:e,onClick:()=>n((e=>!e)),children:t?(0,c.jsx)(s.cqH,{}):(0,c.jsx)(s.zgv,{})})]}},572:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d});var a=n(462),s=n(865),c=n(394),r=n(720),o=n(43),l=n(333),i=n(861),u=n(579);const d=function(){const[{username:e,password:t},n]=(0,o.useState)({username:"",password:""}),d=(0,o.useRef)(null),f=(0,o.useRef)(null);(0,o.useEffect)((()=>{(async()=>{try{if(await(0,s.Nj)()===i.s.OK)return window.location.replace("/tracker")}catch(e){console.error(e)}})()}),[]);const[h,p]=(0,l.A)("text-2xl text-gray-400 text-2xl text-gray-400"),x=e=>{const{name:t,value:a}=e.target;var s,c;"username"===t?null===(s=d.current)||void 0===s||s.setCustomValidity(""):null===(c=f.current)||void 0===c||c.setCustomValidity("");n((e=>({...e,[t]:a})))};return(0,u.jsxs)("form",{onSubmit:async n=>{var a,c,r,o;n.preventDefault();try{let n=await(0,s.az)(e,t);switch(n){case i.s.OK:case i.s.CREATED:return window.location.replace("/tracker");case i.s.BAD_REQUEST:return null===(a=d.current)||void 0===a||a.setCustomValidity("Invalid username or password."),null===(c=f.current)||void 0===c||c.setCustomValidity("Invalid username or password."),null===(r=d.current)||void 0===r||r.reportValidity(),void(null===(o=f.current)||void 0===o||o.reportValidity());default:return console.error("Status Code: ".concat(n," :: An error occurred."))}}catch(l){console.error(l)}},className:"h-full max-w-[720px] mx-auto px-4 py-20 flex flex-col",children:[(0,u.jsx)("h1",{className:"flex justify-center text-9xl mb-8 text-blue-600 drop-shadow-md",children:(0,u.jsx)(a.EcI,{})}),(0,u.jsxs)("div",{className:"flex flex-col gap-4 mb-auto",children:[(0,u.jsxs)("div",{className:"flex bg-gray-200 p-3 px-5 gap-3 rounded-full shadow-md",children:[(0,u.jsx)(c.sLb,{className:"text-2xl text-gray-400"}),(0,u.jsx)("input",{id:"username",name:"username",value:e,onChange:x,ref:d,placeholder:"Username",type:"text",className:"bg-transparent w-full outline-none placeholder:text-gray-400"})]}),(0,u.jsxs)("div",{className:"flex bg-gray-200 p-3 px-5 gap-3 rounded-full shadow-md",children:[(0,u.jsx)(r.nMq,{className:"text-2xl text-center text-gray-400"}),(0,u.jsx)("input",{id:"password",name:"password",value:t,onChange:x,ref:f,placeholder:"Password",type:h,className:"bg-transparent w-full outline-none placeholder:text-gray-400"}),p]}),(0,u.jsx)("div",{className:"p-3 px-5 text-center",children:(0,u.jsx)("a",{href:"..",className:"text-gray-400",children:"forgot password?"})})]}),(0,u.jsxs)("div",{className:"flex flex-col gap-4 items-center",children:[(0,u.jsx)("button",{type:"submit",className:" text-white font-bold tracking-wider py-3 w-1/2 rounded-full shadow-md bg-blue-500 hover:bg-blue-600 transition-colors",children:"Login"}),(0,u.jsx)("a",{href:"/sign-up",className:"bg-transparent text-blue-500 font-bold tracking-wider text-center py-3 w-1/2 rounded-full hover:text-blue-600 transition-colors",children:"Sign Up"})]})]})}},865:(e,t,n)=>{n.d(t,{AK:()=>v,Ee:()=>j,Hx:()=>x,IY:()=>E,Kq:()=>w,Nj:()=>p,_G:()=>g,az:()=>y,bz:()=>b,dT:()=>N,fQ:()=>m,w2:()=>A});var a=n(923);const s="".concat("https://expenses-tracker.shuttleapp.rs/api","/user"),c="".concat(s,"/auth"),r="".concat(c,"/tracker"),o="".concat(r,"/category"),l="".concat(r,"/categories"),i={headers:{"Content-Type":"application/json"}},u={method:"POST",...i},d={method:"GET",...i},f={method:"DELETE",...i},h={method:"PATCH",...i};async function p(){return fetch("".concat(c),{...d,credentials:"include"}).then((e=>e.status))}async function x(e,t){return fetch("".concat(s,"/sign-up"),{...u,credentials:"include",body:JSON.stringify({username:e,password:t})}).then((e=>e.status))}async function y(e,t){return fetch("".concat(s,"/login"),{...u,credentials:"include",body:JSON.stringify({username:e,password:t})}).then((e=>e.status))}async function m(){return fetch("".concat(s,"/logout"),{...f,credentials:"include"}).then((e=>e.status))}async function g(e,t){return fetch("".concat(l),{...u,credentials:"include",body:JSON.stringify({name:e,icon:t})}).then((async n=>[{...await n.json(),name:e,icon:t,transactions:0,amount:0,precent:0,color:"#000000"},n.status]))}async function w(e,t,n){return fetch("".concat(o,"/").concat(e,"/transactions"),{...u,credentials:"include",body:JSON.stringify({amount:n,description:t})}).then((async e=>[(await e.json()).id,e.status]))}async function b(e,t,n){return fetch("".concat(o,"/").concat(e),{...h,credentials:"include",body:JSON.stringify({name:t,icon:n})}).then((e=>e.status))}async function j(e){return fetch("".concat(l,"/").concat(e),{...f,credentials:"include"}).then((e=>e.status))}async function v(e,t){return fetch("".concat(o,"/").concat(e,"/transactions/").concat(t),{...f,credentials:"include"}).then((e=>e.status))}async function N(){return fetch("".concat(l),{...d,credentials:"include"}).then((async e=>[(0,a.A)(await e.json(),{deep:!0}),e.status]))}async function E(e){return fetch("".concat(l,"/").concat(e),{...d,credentials:"include"}).then((async e=>[(0,a.A)(await e.json(),{deep:!0}),e.status]))}async function A(e){return fetch("".concat(o,"/").concat(e,"/transactions"),{...d,credentials:"include"}).then((async e=>[(0,a.A)(await e.json(),{deep:!0}).map((e=>({...e,createdAt:new Date(e.createdAt)}))),e.status]))}},861:(e,t,n)=>{n.d(t,{s:()=>a});const a={OK:200,CREATED:201,BAD_REQUEST:400,UNAUTHORIZED:401,CONFLICT:409,INTERNAL_SERVER_ERROR:500}}}]);
//# sourceMappingURL=572.16f3c13f.chunk.js.map