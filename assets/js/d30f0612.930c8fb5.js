"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[651],{9613:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(r),f=o,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||a;return r?n.createElement(m,l(l({ref:t},s),{},{components:r})):n.createElement(m,l({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2790:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var n=r(2564),o=(r(9496),r(9613));const a={title:"Interface"},l=void 0,i={unversionedId:"ox_lib/Interface/index",id:"ox_lib/Interface/index",title:"Interface",description:"If you wish to change the primary colour for the UI to better match your server's theme you can do so easily through the available convars.",source:"@site/docs/ox_lib/Interface/index.md",sourceDirName:"ox_lib/Interface",slug:"/ox_lib/Interface/",permalink:"/docs/ox_lib/Interface/",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_lib/Interface/index.md",tags:[],version:"current",lastUpdatedAt:1683547367,formattedLastUpdatedAt:"May 8, 2023",frontMatter:{title:"Interface"},sidebar:"ox_lib",previous:{title:"Client",permalink:"/docs/ox_lib/GetNearbyVehicles/Client"},next:{title:"Alert Dialog",permalink:"/docs/ox_lib/Interface/Client/alert"}},c={},u=[],s={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If you wish to change the primary colour for the UI to better match your server's theme you can do so easily through the available convars."),(0,o.kt)("p",null,"They don't require you to build the UI, just restart the resource."),(0,o.kt)("p",null,"Convars:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"setr ox:primaryColor blue\nsetr ox:primaryShade 8\n")),(0,o.kt)("p",null,"Changing the primary colour will change the colour in elements such as the progress bar/circle, skill check, radial menu center button and hover,\ndialog confirm buttons, input field focus, and more."),(0,o.kt)("p",null,"You can find the full list of preset colours and shades here:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://mantine.dev/theming/colors/#default-colors"},"https://mantine.dev/theming/colors/#default-colors")),(0,o.kt)("p",null,"If you wish to create your own pallete I suggest following the guide on that page.",(0,o.kt)("br",{parentName:"p"}),"\n","Keep in mind doing so ",(0,o.kt)("em",{parentName:"p"},"will")," require you to download the source code and build the UI."))}d.isMDXComponent=!0}}]);