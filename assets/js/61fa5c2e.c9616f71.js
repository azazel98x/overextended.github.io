"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1058],{9613:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>v});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(r),h=a,v=d["".concat(c,".").concat(h)]||d[h]||u[h]||l;return r?n.createElement(v,i(i({ref:t},p),{},{components:r})):n.createElement(v,i({ref:t},p))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=h;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[d]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},6466:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=r(2564),a=(r(9496),r(9613));const l={title:"Server",sidebar_position:1},i=void 0,o={unversionedId:"ox_core/Vehicle/Server/index",id:"ox_core/Vehicle/Server/index",title:"Server",description:"Ox.GetVehicle",source:"@site/docs/ox_core/Vehicle/Server/index.md",sourceDirName:"ox_core/Vehicle/Server",slug:"/ox_core/Vehicle/Server/",permalink:"/docs/ox_core/Vehicle/Server/",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_core/Vehicle/Server/index.md",tags:[],version:"current",lastUpdatedAt:1683547367,formattedLastUpdatedAt:"May 8, 2023",sidebarPosition:1,frontMatter:{title:"Server",sidebar_position:1},sidebar:"ox_core",previous:{title:"Methods",permalink:"/docs/ox_core/Player/Server/methods"},next:{title:"Callbacks",permalink:"/docs/ox_core/Vehicle/Server/callbacks"}},c={},s=[{value:"Ox.GetVehicle",id:"oxgetvehicle",level:2},{value:"Ox.GetVehicles",id:"oxgetvehicles",level:2},{value:"Ox.CreateVehicle",id:"oxcreatevehicle",level:2}],p={toc:s},d="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"oxgetvehicle"},"Ox.GetVehicle"),(0,a.kt)("p",null,"Return an instance of OxVehicle for the given entity."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"local vehicle = Ox.GetVehicle(entity)\nprint(json.encode(vehicle, { indent = true }))\n")),(0,a.kt)("h2",{id:"oxgetvehicles"},"Ox.GetVehicles"),(0,a.kt)("p",null,"Returns an array containing all vehicles. Methods will not be applied if the first argument is false."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"local vehicles = Ox.GetVehicles(usemetatable)\n\nfor i = 1, #vehicles do\n    local vehicle = vehicles[i]\n    print(json.encode(vehicle, { indent = true }))\nend\n")),(0,a.kt)("h2",{id:"oxcreatevehicle"},"Ox.CreateVehicle"),(0,a.kt)("p",null,"Spawns a vehicle and returns the instance of OxVehicle.",(0,a.kt)("br",{parentName:"p"}),"\n","If the first argument is a number, it will attempt to spawn a vehicle from the database with a matching id."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"local vehicleId = MySQL.scalar.await('SELECT id FROM vehicles WHERE owner = ? LIMIT 1', { player.charid })\n\nif vehicleId then\n    local coords = player.getCoords()\n    local vehicle = Ox.CreateVehicle(vehicleId, vector3(coords.x, coords.y + 1.0, coords.z) , GetEntityHeading(player.ped))\n\n    if vehicle then\n        print(json.encode(vehicle, { indent = true }))\n    end\nend\n")),(0,a.kt)("p",null,"If the first argument is a table and the owner property is a number, or nil, the vehicle will be added to the database.",(0,a.kt)("br",{parentName:"p"}),"\n","Setting the owner as false creates a non-persistent vehicle."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"local vehicle = Ox.CreateVehicle({\n    model = 'sultanrs',\n    owner = player.charid,\n}, player.getCoords(), GetEntityHeading(player.ped))\n")))}u.isMDXComponent=!0}}]);