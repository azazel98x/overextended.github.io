"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7055],{9613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=i(n),m=a,y=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(y,c(c({ref:t},p),{},{components:n})):r.createElement(y,c({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,c[1]=l;for(var i=2;i<o;i++)c[i]=n[i];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5276:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var r=n(2564),a=(n(9496),n(9613));const o={},c="Concepts",l={unversionedId:"ox_core/Getting Started/concepts",id:"ox_core/Getting Started/concepts",title:"Concepts",description:"We'll try to explain some technical but core concepts used in ox_core here.",source:"@site/docs/ox_core/Getting Started/concepts.md",sourceDirName:"ox_core/Getting Started",slug:"/ox_core/Getting Started/concepts",permalink:"/docs/ox_core/Getting Started/concepts",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_core/Getting Started/concepts.md",tags:[],version:"current",lastUpdatedAt:1683547367,formattedLastUpdatedAt:"May 8, 2023",frontMatter:{},sidebar:"ox_core",previous:{title:"Getting started",permalink:"/docs/ox_core/"},next:{title:"Config",permalink:"/docs/ox_core/Getting Started/config"}},s={},i=[{value:"Classes",id:"classes",level:2}],p={toc:i},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"concepts"},"Concepts"),(0,a.kt)("p",null,"We'll try to explain some technical but core concepts used in ox_core here."),(0,a.kt)("h2",{id:"classes"},"Classes"),(0,a.kt)("p",null,"Lua doesn't have support for true classes, but rather prototype-based inheritance.",(0,a.kt)("br",{parentName:"p"}),"\n","A prototype can hold its own variables and methods, which another object (an instance) can reference or call."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"-- OxPlayer will hold all inherited variables and methods for instances of it.\nlocal OxPlayer = {}\n\n-- Sets the \"index metamethod\" of OxPlayer to reference itself.\n-- This is how instances will know to look up the table.\nOxPlayer.__index = OxPlayer\n\n-- Set a new metatable on the table passed to the function.\n-- The important code here is { __index = OxPlayer }.\nfunction OxPlayer.new(player)\n    return setmetatable(player, OxPlayer)\nend\n\n-- Using the `:` syntax will pass the object as the first parameter.\nfunction OxPlayer:getUsername()\n    return self.username\nend\n\n-- Create our instance of OxPlayer.\nlocal player = OxPlayer.new({\n    username = 'Bob the Builder'\n})\n\n-- This is the same as OxPlayer.getUsername(player).\nlocal username = player:getUsername()\n\n-- 'Bob the Builder'\nprint(username)\n")),(0,a.kt)("p",null,"When using the imported classes in your resources you can treat the methods as if you are calling a regular function."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"local player = Ox.GetPlayer(playerId)\nprint(player.getUsername())\n")))}d.isMDXComponent=!0}}]);