"use strict";(self.webpackChunkcode_brewers=self.webpackChunkcode_brewers||[]).push([[542],{542:(e,s,a)=>{a.r(s),a.d(s,{default:()=>c});var t=a(791);var r=a(184);const c=()=>{const[e,s]=(0,t.useState)([{text:"\xa1Bienvenido, soy tu asistente Lancaster! \xbfEn qu\xe9 te pudiera ayudar? preg\xfantame lo que quieras.",sender:"ai"}]),[a,c]=(0,t.useState)(""),n=(0,t.useRef)(null),o=async()=>{if(a.trim()){const r=[...e,{text:a,sender:"user"}];s(r),c("");try{const e=await(async(e,s)=>{try{if(s>=10)return"\xa1Muchas gracias por probar Arbatech IA! Has utilizado el m\xe1ximo de interacciones.";const a=await fetch("http://localhost:5002/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:e,interactionCount:s})});if(!a.ok)throw new Error("Error: ".concat(a.status," - ").concat(a.statusText));return(await a.json()).content}catch(a){throw console.error("Error al obtener la respuesta de OpenAI:",a),a}})(a),t=[...r,{text:e,sender:"ai"}];s(t)}catch(t){const e="Hubo un error al obtener la respuesta",a=[...r,{text:e,sender:"ai"}];s(a)}}};return(0,t.useEffect)((()=>{n.current&&n.current.scrollIntoView({behavior:"smooth",block:"nearest"})}),[e]),(0,r.jsxs)("section",{className:"aboutus container",id:"about-us",children:[(0,r.jsx)("div",{className:"background-desktop-about-us",children:(0,r.jsxs)("div",{className:"overlay-wrap-about-us",children:[(0,r.jsx)("div",{className:"overlay-top-about-us"}),(0,r.jsx)("div",{className:"overlay-bottom-about-us"}),(0,r.jsx)("div",{className:"overlay-right-about-us"})]})}),(0,r.jsxs)("div",{className:"aboutus",children:[(0,r.jsxs)("div",{className:"about-us-info",children:[(0,r.jsxs)("p",{className:"headline",children:[(0,r.jsx)("img",{src:"/img/Sphere-aboutUs.svg",alt:"sphere",width:20}),"Se siente real porque lo es."]}),(0,r.jsxs)("h2",{className:"about-us-header",children:["Lo m\xe1s parecido a un agente estrella de ",(0,r.jsx)("span",{children:"servicio al cliente."})]}),(0,r.jsxs)("p",{className:"about-us-paragraph",children:["+Empat\xeda humana en cada interacci\xf3n. ",(0,r.jsx)("br",{}),"+Resuelve problemas en lugar de desviarlos. ",(0,r.jsx)("br",{}),"+Gesti\xf3n omnicanal sin complicaciones."]}),(0,r.jsx)("div",{className:"about-us-link",children:(0,r.jsx)("a",{href:"/",className:"about-us-button",onClick:e=>{let s=document.getElementById("traits");e.preventDefault(),s&&s.scrollIntoView({behavior:"smooth",block:"center"})},children:"Nuestros Servicios"})})]}),(0,r.jsxs)("div",{className:"chatbot-container chatbot-visible",children:[(0,r.jsxs)("div",{className:"chatbot-header",children:[(0,r.jsx)("img",{src:"/img/Sphere-aboutUs.svg",alt:"sphere",width:20}),"Lancaster"]}),(0,r.jsxs)("div",{className:"chatbot-main",children:[e.map(((e,s)=>(0,r.jsxs)("div",{className:"chat-message-container ".concat(e.sender),children:["ai"===e.sender&&(0,r.jsx)("div",{className:"chat-avatar ai",children:(0,r.jsx)("img",{src:"/img/Sphere-aboutUs.svg",alt:"AI avatar"})}),(0,r.jsx)("div",{className:"chat-message ".concat("user"===e.sender?"user":"ai"),children:e.text}),"user"===e.sender&&(0,r.jsx)("div",{className:"chat-avatar user",children:(0,r.jsx)("img",{src:"/img/chat-avatar-user.svg",alt:"User avatar"})})]},s))),(0,r.jsx)("div",{ref:n})," "]}),(0,r.jsxs)("div",{className:"chatbot-footer",children:[(0,r.jsx)("input",{type:"text",className:"chatbot-input",placeholder:"Escribe tu mensaje aqu\xed...",value:a,onChange:e=>c(e.target.value),onKeyDown:e=>{"Enter"===e.key&&(e.preventDefault(),o())}}),(0,r.jsx)("button",{className:"chatbot-send",onClick:o,children:">"})]})]})]})]})}}}]);
//# sourceMappingURL=542.2f2fc810.chunk.js.map