"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3218],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,y=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return n?r.createElement(y,i(i({ref:t},u),{},{components:n})):r.createElement(y,i({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6677:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(2564),a=(n(9496),n(9613));const o={},i=void 0,l={unversionedId:"ox_inventory/Functions/Server/Inventory/RegisterStash",id:"ox_inventory/Functions/Server/Inventory/RegisterStash",title:"RegisterStash",description:"Creates a new custom stash.",source:"@site/docs/ox_inventory/Functions/Server/Inventory/RegisterStash.md",sourceDirName:"ox_inventory/Functions/Server/Inventory",slug:"/ox_inventory/Functions/Server/Inventory/RegisterStash",permalink:"/docs/ox_inventory/Functions/Server/Inventory/RegisterStash",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_inventory/Functions/Server/Inventory/RegisterStash.md",tags:[],version:"current",lastUpdatedAt:1683547367,formattedLastUpdatedAt:"May 8, 2023",frontMatter:{},sidebar:"ox_inventory",previous:{title:"GetSlotsWithItem",permalink:"/docs/ox_inventory/Functions/Server/Inventory/GetSlotsWithItem"},next:{title:"RemoveItem",permalink:"/docs/ox_inventory/Functions/Server/Inventory/RemoveItem"}},s={},p=[],u={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Creates a new custom stash."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"exports.ox_inventory:RegisterStash(id, label, slots, maxWeight, owner, groups, coords)\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"id: ",(0,a.kt)("inlineCode",{parentName:"li"},"string")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Stash identifier when loading from the database."))),(0,a.kt)("li",{parentName:"ul"},"label: ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Display name when inventory is open."))),(0,a.kt)("li",{parentName:"ul"},"slots: ",(0,a.kt)("inlineCode",{parentName:"li"},"number")),(0,a.kt)("li",{parentName:"ul"},"maxWeight: ",(0,a.kt)("inlineCode",{parentName:"li"},"number")),(0,a.kt)("li",{parentName:"ul"},"owner: ",(0,a.kt)("inlineCode",{parentName:"li"},"string")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"nil"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"string"),": Can only access the stash linked to the owner."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"true"),": Each player has a unique stash but can request other player's stashes."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"nil"),": Always shared."))),(0,a.kt)("li",{parentName:"ul"},"groups: ",(0,a.kt)("inlineCode",{parentName:"li"},"table"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Table of player groups (jobs) able to access the stash."),(0,a.kt)("li",{parentName:"ul"},"Table of group names where the numeric value is the minimum grade required."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"{['police'] = 0, ['ambulance'] = 2}")))),(0,a.kt)("li",{parentName:"ul"},"coords?: ",(0,a.kt)("inlineCode",{parentName:"li"},"vector3")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"vector3[]"))),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This function needs to be triggered before a player can open the stash.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example:")),(0,a.kt)("p",null,"For a use case example on this function check out the written ",(0,a.kt)("a",{parentName:"p",href:"/docs/ox_inventory/Guides/stashes"},"Guide")," for it."))}m.isMDXComponent=!0}}]);