"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6781],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7366:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(9496),a=n(5924);const o={tabItem:"tabItem_b204"};function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,l),hidden:n},t)}},4310:(e,t,n)=>{n.d(t,{Z:()=>k});var r=n(2564),a=n(9496),o=n(5924),l=n(9857),i=n(3442),s=n(4944),u=n(1887),c=n(7130);function d(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function v(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=p(e),[l,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[s,u]=f({queryString:n,groupId:r}),[d,v]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),y=(()=>{const e=s??d;return m({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{y&&i(y)}),[y]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),v(e)}),[u,v,o]),tabValues:o}}var y=n(1063);const b={tabList:"tabList_KFiB",tabItem:"tabItem_KIg7"};function h(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),r=u[n].value;r!==i&&(d(t),s(r))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},l,{className:(0,o.Z)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":i===t})}),n??t)})))}function g(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function x(e){const t=v(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",b.tabList)},a.createElement(h,(0,r.Z)({},e,t)),a.createElement(g,(0,r.Z)({},e,t)))}function k(e){const t=(0,y.Z)();return a.createElement(x,(0,r.Z)({key:String(t)},e))}},5044:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var r=n(2564),a=(n(9496),n(9613)),o=n(4310),l=n(7366);const i={},s="ESX",u={unversionedId:"ox_inventory/Getting Started/esx",id:"ox_inventory/Getting Started/esx",title:"ESX",description:"Compatibility",source:"@site/docs/ox_inventory/Getting Started/esx.md",sourceDirName:"ox_inventory/Getting Started",slug:"/ox_inventory/Getting Started/esx",permalink:"/docs/ox_inventory/Getting Started/esx",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_inventory/Getting Started/esx.md",tags:[],version:"current",lastUpdatedAt:1683547367,formattedLastUpdatedAt:"May 8, 2023",frontMatter:{},sidebar:"ox_inventory",previous:{title:"Configuration",permalink:"/docs/ox_inventory/Getting Started/config"},next:{title:"QBCore",permalink:"/docs/ox_inventory/Getting Started/qb"}},c={},d=[{value:"Compatibility",id:"compatibility",level:2},{value:"Installation",id:"installation",level:2},{value:"Optional optimisation",id:"optional-optimisation",level:2}],p={toc:d},m="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"esx"},"ESX"),(0,a.kt)("h2",{id:"compatibility"},"Compatibility"),(0,a.kt)("p",null,"Ox Inventory is a complete replacement for existing item, inventory, and weapon systems; it is inherently incompatible with ESX and any resources that rely on default behaviour."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Loadouts do not exist and weapons are treated as items."),(0,a.kt)("li",{parentName:"ul"},"Standard shops and stashes (i.e. esx_shops, esx_weaponshop, and esx_policejob)."),(0,a.kt)("li",{parentName:"ul"},"Resources that alter the default esx inventory or provide a ui (i.e. esx_trunkinventory, esx_inventoryhud).")),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Use a compatible version of ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/esx-framework/esx-legacy"},"ESX Legacy")," (1.6.0+)."),(0,a.kt)("li",{parentName:"ul"},"Modify your ",(0,a.kt)("inlineCode",{parentName:"li"},"server.cfg"),", starting ox_inventory immediately after es_extended.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"start oxmysql\nstart ox_lib\nstart es_extended\nstart qtarget\nstart ox_inventory\n")),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"fresh",label:"Clean install",default:!0,mdxType:"TabItem"},(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"No extra steps required."))),(0,a.kt)(l.Z,{value:"convert_esx",label:"Convert ESX",mdxType:"TabItem"},(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Start the server and type ",(0,a.kt)("inlineCode",{parentName:"li"},"convertinventory esx")," into the server console."),(0,a.kt)("li",{parentName:"ul"},"Optionally, type ",(0,a.kt)("inlineCode",{parentName:"li"},"convertinventory esxproperty")," into the server console."),(0,a.kt)("li",{parentName:"ul"},"Restart the server once conversion is complete."))),(0,a.kt)(l.Z,{value:"convert_linden",label:"Upgrade from Linden Inventory",mdxType:"TabItem"},(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Execute the query inside ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/overextended/ox_inventory/blob/main/setup/upgrade.sql"},"upgrade.sql"),"."),(0,a.kt)("li",{parentName:"ul"},"Start the server and type ",(0,a.kt)("inlineCode",{parentName:"li"},"convertinventory linden")," into the server console."),(0,a.kt)("li",{parentName:"ul"},"Restart the server once conversion is complete.")))),(0,a.kt)("h2",{id:"optional-optimisation"},"Optional optimisation"),(0,a.kt)("p",null,"All item related functions from xPlayer, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"xPlayer.getInventoryItem"),", have been modified for compatibility purposes; however they are considered deprecated."),(0,a.kt)("p",null,"The reasoning is fairly simple - there's now additional function references and overhead to consider. Fortunately, the new Inventory functions can be used directly and offer a great deal of improvements over the old ones."),(0,a.kt)("p",null,"You should read through the functions section for further information, but the following should give you a decent idea."),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"esx",label:"ESX",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"if xPlayer.getInventoryItem('acetone').count > 2 and xPlayer.getInventoryItem('antifreeze').count > 4 and xPlayer.getInventoryItem('sudo').count > 9 then\n    xPlayer.removeInventoryItem(\"acetone\", 3)\n    xPlayer.removeInventoryItem(\"antifreeze\", 5)\n    xPlayer.removeInventoryItem(\"sudo\", 10)\nend\n"))),(0,a.kt)(l.Z,{value:"inventory",label:"Inventory",mdxType:"TabItem"},(0,a.kt)("p",null,"Add the following code somewhere in your resource to cache the exports metatable."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"local ox_inventory = exports.ox_inventory\n")),(0,a.kt)("p",null,"You will be able to reference any functions exposed through the export."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"local items = ox_inventory:Search(source, 'count', {'acetone', 'antifreeze', 'sudo'})\nif items and items.acetone > 2 and items.antifreeze > 4 and items.sudo > 9 then\n    ox_inventory:RemoveItem(source, 'acetone', 3)\n    ox_inventory:RemoveItem(source, 'antifreeze', 5)\n    ox_inventory:RemoveItem(source, 'sudo', 10)\nend\n")))))}f.isMDXComponent=!0}}]);