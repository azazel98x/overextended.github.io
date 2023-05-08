"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3587],{9613:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(9496);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=u(r),d=l,m=s["".concat(c,".").concat(d)]||s[d]||b[d]||i;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function m(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=r.length,a=new Array(i);a[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[s]="string"==typeof e?e:l,a[1]=o;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9689:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>b,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=r(2564),l=(r(9496),r(9613));const i={},a=void 0,o={unversionedId:"ox_lib/GetNearbyVehicles/Client",id:"ox_lib/GetNearbyVehicles/Client",title:"Client",description:"lib.getNearbyVehicles",source:"@site/docs/ox_lib/GetNearbyVehicles/Client.md",sourceDirName:"ox_lib/GetNearbyVehicles",slug:"/ox_lib/GetNearbyVehicles/Client",permalink:"/docs/ox_lib/GetNearbyVehicles/Client",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_lib/GetNearbyVehicles/Client.md",tags:[],version:"current",lastUpdatedAt:1683547367,formattedLastUpdatedAt:"May 8, 2023",frontMatter:{},sidebar:"ox_lib",previous:{title:"Client",permalink:"/docs/ox_lib/GetNearbyPlayers/Client"},next:{title:"Interface",permalink:"/docs/ox_lib/Interface/"}},c={},u=[{value:"lib.getNearbyVehicles",id:"libgetnearbyvehicles",level:3}],p={toc:u},s="wrapper";function b(e){let{components:t,...r}=e;return(0,l.kt)(s,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"libgetnearbyvehicles"},"lib.getNearbyVehicles"),(0,l.kt)("p",null,"Get the id and coords of all vehicles within range of a set of coordinates."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"lib.getNearbyVehicles(coords, maxDistance, includePlayerVehicle)\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"coords: ",(0,l.kt)("inlineCode",{parentName:"li"},"vector3"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"The coords to check from."))),(0,l.kt)("li",{parentName:"ul"},"maxDistance: ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"The max distance to check."))),(0,l.kt)("li",{parentName:"ul"},"includePlayerVehicle: ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Whether or not to include the player's current vehicle.")))),(0,l.kt)("p",null,"Return:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"number[]"))))}b.isMDXComponent=!0}}]);