"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2948],{9613:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=u(n),d=a,c=s["".concat(p,".").concat(d)]||s[d]||k[d]||i;return n?r.createElement(c,l(l({ref:t},m),{},{components:n})):r.createElement(c,l({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},2249:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=n(4250),a=(n(9496),n(9613));const i={},l="Event Hooks",o={unversionedId:"ox_inventory/Functions/Server/Hooks",id:"ox_inventory/Functions/Server/Hooks",title:"Event Hooks",description:"Event hooks allow 3rd party resources to define new behaviour without modifying the inventory code directly.",source:"@site/docs/ox_inventory/Functions/Server/Hooks.md",sourceDirName:"ox_inventory/Functions/Server",slug:"/ox_inventory/Functions/Server/Hooks",permalink:"/docs/ox_inventory/Functions/Server/Hooks",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_inventory/Functions/Server/Hooks.md",tags:[],version:"current",lastUpdatedAt:1682563234,formattedLastUpdatedAt:"Apr 27, 2023",frontMatter:{},sidebar:"ox_inventory",previous:{title:"useSlot",permalink:"/docs/ox_inventory/Functions/Client/useSlot"},next:{title:"AddItem",permalink:"/docs/ox_inventory/Functions/Server/Inventory/AddItem"}},p={},u=[{value:"registerHook",id:"registerhook",level:2},{value:"swapItems",id:"swapitems",level:3},{value:"openInventory",id:"openinventory",level:3},{value:"createItem",id:"createitem",level:3},{value:"buyItem",id:"buyitem",level:3},{value:"craftItem",id:"craftitem",level:3},{value:"removeHooks",id:"removehooks",level:2}],m={toc:u};function k(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"event-hooks"},"Event Hooks"),(0,a.kt)("p",null,"Event hooks allow 3rd party resources to define new behaviour without modifying the inventory code directly."),(0,a.kt)("h2",{id:"registerhook"},"registerHook"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"exports.ox_inventory:registerHook(eventName, function(payload) end, options)\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"eventName: ",(0,a.kt)("inlineCode",{parentName:"li"},"string")),(0,a.kt)("li",{parentName:"ul"},"payload: ",(0,a.kt)("inlineCode",{parentName:"li"},"table")),(0,a.kt)("li",{parentName:"ul"},"options?: ",(0,a.kt)("inlineCode",{parentName:"li"},"table"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"print?: ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Print to the console when triggering the event."))),(0,a.kt)("li",{parentName:"ul"},"itemFilter?: ",(0,a.kt)("inlineCode",{parentName:"li"},"{ [string]: true }"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The event will only trigger for items defined as keys in a set."))),(0,a.kt)("li",{parentName:"ul"},"inventoryFilter?: ",(0,a.kt)("inlineCode",{parentName:"li"},"string[]"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The event will only trigger for inventories that match one of the ",(0,a.kt)("a",{parentName:"li",href:"http://www.easyuo.com/openeuo/wiki/index.php/Lua_Patterns_and_Captures_(Regular_Expressions)"},"patterns")," in the array."))),(0,a.kt)("li",{parentName:"ul"},"typeFilter?: ",(0,a.kt)("inlineCode",{parentName:"li"},"{ [string]: true }"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The event will only trigger for inventories with one of the provided types (e.g. 'player', 'stash')")))))),(0,a.kt)("p",null,"Return:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"hookId: ",(0,a.kt)("inlineCode",{parentName:"li"},"number"))),(0,a.kt)("h3",{id:"swapitems"},"swapItems"),(0,a.kt)("p",null,'Triggered when moving any item from one slot to another, or when "giving" an item.',(0,a.kt)("br",{parentName:"p"}),"\n","By returning ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),", you can cancel the action and revert the inventory state."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Payload:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"source: ",(0,a.kt)("inlineCode",{parentName:"li"},"number")),(0,a.kt)("li",{parentName:"ul"},"action: ",(0,a.kt)("inlineCode",{parentName:"li"},"'move'")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"'stack'")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"'swap'")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"'give'")),(0,a.kt)("li",{parentName:"ul"},"fromInventory: ",(0,a.kt)("inlineCode",{parentName:"li"},"table")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"string")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"number")),(0,a.kt)("li",{parentName:"ul"},"toInventory: ",(0,a.kt)("inlineCode",{parentName:"li"},"table")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"string")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"number")),(0,a.kt)("li",{parentName:"ul"},"fromType: ",(0,a.kt)("inlineCode",{parentName:"li"},"string")),(0,a.kt)("li",{parentName:"ul"},"toType: ",(0,a.kt)("inlineCode",{parentName:"li"},"string")),(0,a.kt)("li",{parentName:"ul"},"fromSlot: ",(0,a.kt)("inlineCode",{parentName:"li"},"table")),(0,a.kt)("li",{parentName:"ul"},"toSlot?: ",(0,a.kt)("inlineCode",{parentName:"li"},"table")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"number")),(0,a.kt)("li",{parentName:"ul"},"count: ",(0,a.kt)("inlineCode",{parentName:"li"},"number"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"local hookId = exports.ox_inventory:registerHook('swapItems', function(payload)\n    print(json.encode(payload, { indent = true }))\n    return false\nend, {\n    print = true,\n    itemFilter = {\n        water = true,\n    },\n    inventoryFilter = {\n        '^glove[%w]+',\n        '^trunk[%w]+',\n    }\n})\n")),(0,a.kt)("p",null,'Blacklists "water" from being moved into or from gloveboxes and trunks.'),(0,a.kt)("h3",{id:"openinventory"},"openInventory"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Payload:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"source: ",(0,a.kt)("inlineCode",{parentName:"li"},"number")),(0,a.kt)("li",{parentName:"ul"},"inventoryId: ",(0,a.kt)("inlineCode",{parentName:"li"},"number")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"string")),(0,a.kt)("li",{parentName:"ul"},"inventoryType: ",(0,a.kt)("inlineCode",{parentName:"li"},"string"))),(0,a.kt)("p",null,"Triggered when a player tries to open a secondary inventory.",(0,a.kt)("br",{parentName:"p"}),"\n","By returning ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),", you can cancel the action and keep the player's inventory closed."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"local hookId = exports.ox_inventory:registerHook('openInventory', function(payload)\n    print(json.encode(payload, { indent = true }))\n    return false\nend, {\n    print = true,\n    inventoryFilter = {\n        '^glove[%w]+',\n        '^trunk[%w]+',\n    }\n})\n")),(0,a.kt)("p",null,"Disables gloveboxes and trunks."),(0,a.kt)("h3",{id:"createitem"},"createItem"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Payload:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"inventoryId?: ",(0,a.kt)("inlineCode",{parentName:"li"},"number")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"string")),(0,a.kt)("li",{parentName:"ul"},"metadata: ",(0,a.kt)("inlineCode",{parentName:"li"},"table")),(0,a.kt)("li",{parentName:"ul"},"item: ",(0,a.kt)("inlineCode",{parentName:"li"},"table")),(0,a.kt)("li",{parentName:"ul"},"count: ",(0,a.kt)("inlineCode",{parentName:"li"},"number"))),(0,a.kt)("p",null,"Triggered when an item is created, either by buying it, using AddItem, or when converting inventory data.",(0,a.kt)("br",{parentName:"p"}),"\n","By returning a table you can modify or replace the metadata given to an item."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"local hookId = exports.ox_inventory:registerHook('createItem', function(payload)\n    print(json.encode(payload, { indent = true }))\n    local metadata = payload.metadata\n    metadata.label = 'Mineral Water'\n    return metadata\nend, {\n    print = true,\n    itemFilter = {\n        water = true\n    }\n})\n")),(0,a.kt)("p",null,'Sets the label for "water" to "Mineral Water".'),(0,a.kt)("h3",{id:"buyitem"},"buyItem"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Payload:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"source: ",(0,a.kt)("inlineCode",{parentName:"li"},"number")),(0,a.kt)("li",{parentName:"ul"},"shopType: ",(0,a.kt)("inlineCode",{parentName:"li"},"string")),(0,a.kt)("li",{parentName:"ul"},"shopId: ",(0,a.kt)("inlineCode",{parentName:"li"},"number")),(0,a.kt)("li",{parentName:"ul"},"toInventory: ",(0,a.kt)("inlineCode",{parentName:"li"},"number")),(0,a.kt)("li",{parentName:"ul"},"toSlot: ",(0,a.kt)("inlineCode",{parentName:"li"},"number")),(0,a.kt)("li",{parentName:"ul"},"itemName: ",(0,a.kt)("inlineCode",{parentName:"li"},"string")),(0,a.kt)("li",{parentName:"ul"},"metadata: ",(0,a.kt)("inlineCode",{parentName:"li"},"table")),(0,a.kt)("li",{parentName:"ul"},"count: ",(0,a.kt)("inlineCode",{parentName:"li"},"number")),(0,a.kt)("li",{parentName:"ul"},"price: ",(0,a.kt)("inlineCode",{parentName:"li"},"number")),(0,a.kt)("li",{parentName:"ul"},"totalPrice: ",(0,a.kt)("inlineCode",{parentName:"li"},"number")),(0,a.kt)("li",{parentName:"ul"},"currency?: ",(0,a.kt)("inlineCode",{parentName:"li"},"string"))),(0,a.kt)("p",null,"Triggered when an item is about to be purchased and can return ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," to prevent the transaction."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"local hookId = exports.ox_inventory:registerHook('buyItem', function(payload)\n    print(json.encode(payload, { indent = true, sort_keys = true }))\n    return false\nend, {\n    print = true,\n    itemFilter = {\n        water = true\n      },\n})\n\n")),(0,a.kt)("p",null,"Prevents players from purchasing items at General stores."),(0,a.kt)("h3",{id:"craftitem"},"craftItem"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Payload:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"source: ",(0,a.kt)("inlineCode",{parentName:"li"},"number")),(0,a.kt)("li",{parentName:"ul"},"benchId: ",(0,a.kt)("inlineCode",{parentName:"li"},"number")),(0,a.kt)("li",{parentName:"ul"},"benchIndex: ",(0,a.kt)("inlineCode",{parentName:"li"},"number")),(0,a.kt)("li",{parentName:"ul"},"recipe: ",(0,a.kt)("inlineCode",{parentName:"li"},"table"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"count: ",(0,a.kt)("inlineCode",{parentName:"li"},"number")),(0,a.kt)("li",{parentName:"ul"},"duration: ",(0,a.kt)("inlineCode",{parentName:"li"},"number")),(0,a.kt)("li",{parentName:"ul"},"ingredients: ",(0,a.kt)("inlineCode",{parentName:"li"},"table<string, number>")),(0,a.kt)("li",{parentName:"ul"},"name: ",(0,a.kt)("inlineCode",{parentName:"li"},"string")),(0,a.kt)("li",{parentName:"ul"},"slot: ",(0,a.kt)("inlineCode",{parentName:"li"},"number")),(0,a.kt)("li",{parentName:"ul"},"weight: ",(0,a.kt)("inlineCode",{parentName:"li"},"number")))),(0,a.kt)("li",{parentName:"ul"},"toInventory: ",(0,a.kt)("inlineCode",{parentName:"li"},"number")),(0,a.kt)("li",{parentName:"ul"},"toSlot: ",(0,a.kt)("inlineCode",{parentName:"li"},"number"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"local hookId = exports.ox_inventory:registerHook('craftItem', function(payload)\n    print(json.encode(payload, { indent = true, sort_keys = true }))\n    return false\nend, {\n    print = true,\n    itemFilter = {\n        lockpick = true\n    },\n})\n\n")),(0,a.kt)("p",null,"Prevent lockpicks from being crafted by players."),(0,a.kt)("h2",{id:"removehooks"},"removeHooks"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"exports.ox_inventory:removeHooks(id)\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"id?: ",(0,a.kt)("inlineCode",{parentName:"li"},"number"))),(0,a.kt)("p",null,"Removes a hook created by the invoking resource with the the specified id.",(0,a.kt)("br",{parentName:"p"}),"\n","If no id is specified then all hooks registered by the resource are removed."))}k.isMDXComponent=!0}}]);