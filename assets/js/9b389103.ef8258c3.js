"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1854],{9613:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var l=a(9496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=l.createContext({}),u=function(e){var t=l.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return l.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},b=l.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=u(a),k=r,d=b["".concat(o,".").concat(k)]||b[k]||s[k]||n;return a?l.createElement(d,i(i({ref:t},p),{},{components:a})):l.createElement(d,i({ref:t},p))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=b;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<n;u++)i[u]=a[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}b.displayName="MDXCreateElement"},4802:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>s,frontMatter:()=>n,metadata:()=>c,toc:()=>u});var l=a(4250),r=(a(9496),a(9613));const n={},i=void 0,c={unversionedId:"ox_lib/Callback/Lua/Client",id:"ox_lib/Callback/Lua/Client",title:"Client",description:"Trigger Server Callback",source:"@site/docs/ox_lib/Callback/Lua/Client.md",sourceDirName:"ox_lib/Callback/Lua",slug:"/ox_lib/Callback/Lua/Client",permalink:"/docs/ox_lib/Callback/Lua/Client",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_lib/Callback/Lua/Client.md",tags:[],version:"current",lastUpdatedAt:1677693547,formattedLastUpdatedAt:"Mar 1, 2023",frontMatter:{},sidebar:"ox_lib",previous:{title:"Server",permalink:"/docs/ox_lib/Callback/JavaScript/Server"},next:{title:"Server",permalink:"/docs/ox_lib/Callback/Lua/Server"}},o={},u=[{value:"Trigger Server Callback",id:"trigger-server-callback",level:2},{value:"lib.callback",id:"libcallback",level:3},{value:"lib.callback.await",id:"libcallbackawait",level:3},{value:"Register Client Callback",id:"register-client-callback",level:2},{value:"lib.callback.register",id:"libcallbackregister",level:3}],p={toc:u};function s(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,l.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"trigger-server-callback"},"Trigger Server Callback"),(0,r.kt)("h3",{id:"libcallback"},"lib.callback"),(0,r.kt)("p",null,"The response is handled in a separate coroutine."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"lib.callback(name, delay, cb, ...)\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"name: ",(0,r.kt)("inlineCode",{parentName:"li"},"string")),(0,r.kt)("li",{parentName:"ul"},"delay: ",(0,r.kt)("inlineCode",{parentName:"li"},"number")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"cb: ",(0,r.kt)("inlineCode",{parentName:"li"},"function")),(0,r.kt)("li",{parentName:"ul"},"...: ",(0,r.kt)("inlineCode",{parentName:"li"},"any"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"lib.callback('ox_inventory:getItemCount', false, function(count)\n    print(count)\nend, 'water', {type = 'fresh'})\n")),(0,r.kt)("h3",{id:"libcallbackawait"},"lib.callback.await"),(0,r.kt)("p",null,"The current coroutine is yielded until a response is received."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"lib.callback.await(name, delay, ...)\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"name: ",(0,r.kt)("inlineCode",{parentName:"li"},"string")),(0,r.kt)("li",{parentName:"ul"},"delay: ",(0,r.kt)("inlineCode",{parentName:"li"},"number")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"...: ",(0,r.kt)("inlineCode",{parentName:"li"},"any"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"local count = lib.callback.await('ox_inventory:getItemCount', false, 'water', {type = 'fresh'})\nprint(count)\n")),(0,r.kt)("h2",{id:"register-client-callback"},"Register Client Callback"),(0,r.kt)("h3",{id:"libcallbackregister"},"lib.callback.register"),(0,r.kt)("p",null,"Register an event handler for responding to server requests."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"lib.callback.register(name, cb)\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"name: ",(0,r.kt)("inlineCode",{parentName:"li"},"string")),(0,r.kt)("li",{parentName:"ul"},"cb: ",(0,r.kt)("inlineCode",{parentName:"li"},"function"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"lib.callback.register('ox:getNearbyVehicles', function(radius)\n    local nearbyVehicles = lib.getNearbyVehicles(GetEntityCoords(cache.ped), radius, true)\n    return nearbyVehicles\nend)\n")))}s.isMDXComponent=!0}}]);