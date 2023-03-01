"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1852],{9613:(e,t,l)=>{l.d(t,{Zo:()=>u,kt:()=>d});var r=l(9496);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function n(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,r)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?n(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):n(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function o(e,t){if(null==e)return{};var l,r,a=function(e,t){if(null==e)return{};var l,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)l=n[r],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)l=n[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),l=t;return e&&(l="function"==typeof e?e(t):i(i({},t),e)),l},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var l=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),h=s(l),d=a,v=h["".concat(c,".").concat(d)]||h[d]||p[d]||n;return l?r.createElement(v,i(i({ref:t},u),{},{components:l})):r.createElement(v,i({ref:t},u))}));function d(e,t){var l=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=l.length,i=new Array(n);i[0]=h;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<n;s++)i[s]=l[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,l)}h.displayName="MDXCreateElement"},395:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>o,toc:()=>s});var r=l(4250),a=(l(9496),l(9613));const n={title:"Methods"},i=void 0,o={unversionedId:"ox_core/Vehicle/Server/methods",id:"ox_core/Vehicle/Server/methods",title:"Methods",description:"These functions are inherited from the Vehicle class.",source:"@site/docs/ox_core/Vehicle/Server/methods.md",sourceDirName:"ox_core/Vehicle/Server",slug:"/ox_core/Vehicle/Server/methods",permalink:"/docs/ox_core/Vehicle/Server/methods",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_core/Vehicle/Server/methods.md",tags:[],version:"current",lastUpdatedAt:1677693547,formattedLastUpdatedAt:"Mar 1, 2023",frontMatter:{title:"Methods"},sidebar:"ox_core",previous:{title:"Callbacks",permalink:"/docs/ox_core/Vehicle/Server/callbacks"}},c={},s=[{value:"vehicle.set",id:"vehicleset",level:2},{value:"vehicle.get",id:"vehicleget",level:2},{value:"vehicle.getState",id:"vehiclegetstate",level:2},{value:"vehicle.getCoords",id:"vehiclegetcoords",level:2},{value:"vehicle.despawn",id:"vehicledespawn",level:2},{value:"vehicle.delete",id:"vehicledelete",level:2},{value:"vehicle.setStored",id:"vehiclesetstored",level:2},{value:"vehicle.setOwner",id:"vehiclesetowner",level:2},{value:"vehicle.setGroup",id:"vehiclesetgroup",level:2},{value:"vehicle.setPlate",id:"vehiclesetplate",level:2}],u={toc:s};function p(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"These functions are inherited from the ",(0,a.kt)("a",{parentName:"p",href:"../Server/"},"Vehicle class"),"."),(0,a.kt)("h2",{id:"vehicleset"},"vehicle.set"),(0,a.kt)("p",null,"Sets the vehicle's metadata for key to the given value."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"vehicle.set(key, value)\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"key: ",(0,a.kt)("inlineCode",{parentName:"li"},"string")),(0,a.kt)("li",{parentName:"ul"},"value: ",(0,a.kt)("inlineCode",{parentName:"li"},"any"))),(0,a.kt)("h2",{id:"vehicleget"},"vehicle.get"),(0,a.kt)("p",null,"Get a value from the vehicles's metadata, or omit the argument to get all metadata."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"vehicle.get(key)\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"key?: ",(0,a.kt)("inlineCode",{parentName:"li"},"string"))),(0,a.kt)("h2",{id:"vehiclegetstate"},"vehicle.getState"),(0,a.kt)("p",null,"Return the vehicle's statebag."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"vehicle.getState()\n")),(0,a.kt)("h2",{id:"vehiclegetcoords"},"vehicle.getCoords"),(0,a.kt)("p",null,"Return the vehicle's position."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"vehicle.getCoords()\n")),(0,a.kt)("h2",{id:"vehicledespawn"},"vehicle.despawn"),(0,a.kt)("p",null,"Despawns the vehicle but doesn't save it or update the stored value."),(0,a.kt)("h2",{id:"vehicledelete"},"vehicle.delete"),(0,a.kt)("p",null,"Remove the vehicle from the database and despawns the entity."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"vehicle.delete()\n")),(0,a.kt)("h2",{id:"vehiclesetstored"},"vehicle.setStored"),(0,a.kt)("p",null,'Updates the vehicle\'s "stored" value and optionally despawns it.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"vehicle.setStored(value, despawn)\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"value?: ",(0,a.kt)("inlineCode",{parentName:"li"},"string")),(0,a.kt)("li",{parentName:"ul"},"despawn?: ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"))),(0,a.kt)("h2",{id:"vehiclesetowner"},"vehicle.setOwner"),(0,a.kt)("p",null,"Sets the vehicle's owner, matching a charid or nil to set it as unowned."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"vehicle.setOwner(owner)\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"owner?: ",(0,a.kt)("inlineCode",{parentName:"li"},"number"))),(0,a.kt)("h2",{id:"vehiclesetgroup"},"vehicle.setGroup"),(0,a.kt)("p",null,"Sets the vehicle's group, which can be used for garage restrictions, unowned group vehicles, etc."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"vehicle.setGroup(group)\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"group?: ",(0,a.kt)("inlineCode",{parentName:"li"},"string"))),(0,a.kt)("h2",{id:"vehiclesetplate"},"vehicle.setPlate"),(0,a.kt)("p",null,"Sets the vehicle's plate, used in the database to ensure uniqueness. Does not necessarily match the plate property (i.e. fake plates).",(0,a.kt)("br",{parentName:"p"}),"\n","Plate is always formatted to 8 characters."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"vehicle.setPlate(plate)\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"plate: ",(0,a.kt)("inlineCode",{parentName:"li"},"string"))))}p.isMDXComponent=!0}}]);