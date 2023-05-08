"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4045],{9613:(e,t,l)=>{l.d(t,{Zo:()=>s,kt:()=>k});var r=l(9496);function n(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function a(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,r)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?a(Object(l),!0).forEach((function(t){n(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function c(e,t){if(null==e)return{};var l,r,n=function(e,t){if(null==e)return{};var l,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)l=a[r],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)l=a[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var o=r.createContext({}),p=function(e){var t=r.useContext(o),l=t;return e&&(l="function"==typeof e?e(t):i(i({},t),e)),l},s=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var l=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(l),m=n,k=u["".concat(o,".").concat(m)]||u[m]||b[m]||a;return l?r.createElement(k,i(i({ref:t},s),{},{components:l})):r.createElement(k,i({ref:t},s))}));function k(e,t){var l=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=l.length,i=new Array(a);i[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[u]="string"==typeof e?e:n,i[1]=c;for(var p=2;p<a;p++)i[p]=l[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,l)}m.displayName="MDXCreateElement"},9674:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>b,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var r=l(2564),n=(l(9496),l(9613));const a={},i=void 0,c={unversionedId:"ox_lib/Callback/JavaScript/Server",id:"ox_lib/Callback/JavaScript/Server",title:"Server",description:"Trigger Client Callback",source:"@site/docs/ox_lib/Callback/JavaScript/Server.md",sourceDirName:"ox_lib/Callback/JavaScript",slug:"/ox_lib/Callback/JavaScript/Server",permalink:"/docs/ox_lib/Callback/JavaScript/Server",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_lib/Callback/JavaScript/Server.md",tags:[],version:"current",lastUpdatedAt:1683547367,formattedLastUpdatedAt:"May 8, 2023",frontMatter:{},sidebar:"ox_lib",previous:{title:"Client",permalink:"/docs/ox_lib/Callback/JavaScript/Client"},next:{title:"Client",permalink:"/docs/ox_lib/Callback/Lua/Client"}},o={},p=[{value:"Trigger Client Callback",id:"trigger-client-callback",level:2},{value:"triggerClientCallback",id:"triggerclientcallback",level:3},{value:"Register Client Callback",id:"register-client-callback",level:2},{value:"onClientCallback",id:"onclientcallback",level:3},{value:"Usage Example",id:"usage-example",level:2}],s={toc:p},u="wrapper";function b(e){let{components:t,...l}=e;return(0,n.kt)(u,(0,r.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"trigger-client-callback"},"Trigger Client Callback"),(0,n.kt)("h3",{id:"triggerclientcallback"},"triggerClientCallback"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"triggerClientCallback(eventName, playerId, ...args)\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"eventName: ",(0,n.kt)("inlineCode",{parentName:"li"},"string")),(0,n.kt)("li",{parentName:"ul"},"playerId: ",(0,n.kt)("inlineCode",{parentName:"li"},"number")),(0,n.kt)("li",{parentName:"ul"},"...args: ",(0,n.kt)("inlineCode",{parentName:"li"},"any"))),(0,n.kt)("h2",{id:"register-client-callback"},"Register Client Callback"),(0,n.kt)("h3",{id:"onclientcallback"},"onClientCallback"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"onClientCallback(eventName, cb)\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"eventName: ",(0,n.kt)("inlineCode",{parentName:"li"},"string")),(0,n.kt)("li",{parentName:"ul"},"cb: ",(0,n.kt)("inlineCode",{parentName:"li"},"function"),"(playerId: ",(0,n.kt)("inlineCode",{parentName:"li"},"number"),", ...args: ",(0,n.kt)("inlineCode",{parentName:"li"},"any"),")")),(0,n.kt)("h2",{id:"usage-example"},"Usage Example"),(0,n.kt)("p",null,"For this example to fully make sense take a look at the example on the ",(0,n.kt)("a",{parentName:"p",href:"./Client#usage-example"},"client")," page for the callbacks."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"import { onClientCallback, triggerClientCallback } from '@overextended/ox_lib/server';\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"onClientCallback('test:server', (playerId, ...args: [number, null, number, null, null, number]) => {\n  console.log('onClientCallback', playerId, ...args);\n  return {\n    serverValue: 3000,\n  };\n});\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"setTimeout(async () => {\n  const response = await triggerClientCallback<{ clientValue: string }>('test:client', 1, [1, null, 3, null, null, 6])\n  if (!response) return;\n  console.log(response.clientValue);\n  console.log('Response from client', response);\n}, 100);\n")))}b.isMDXComponent=!0}}]);