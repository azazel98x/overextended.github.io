"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7690],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,b=p["".concat(u,".").concat(m)]||p[m]||d[m]||l;return n?r.createElement(b,i(i({ref:t},c),{},{components:n})):r.createElement(b,i({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7366:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(9496),a=n(5924);const l={tabItem:"tabItem_b204"};function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l.tabItem,i),hidden:n},t)}},4310:(e,t,n)=>{n.d(t,{Z:()=>x});var r=n(2564),a=n(9496),l=n(5924),i=n(9857),o=n(3442),u=n(4944),s=n(1887),c=n(7130);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const r=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=d(e),[i,o]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[u,s]=b({queryString:n,groupId:r}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),h=(()=>{const e=u??p;return m({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{h&&o(h)}),[h]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),s(e),f(e)}),[s,f,l]),tabValues:l}}var h=n(1063);const k={tabList:"tabList_KFiB",tabItem:"tabItem_KIg7"};function g(e){let{className:t,block:n,selectedValue:o,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),r=s[n].value;r!==o&&(p(t),u(r))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},i,{className:(0,l.Z)("tabs__item",k.tabItem,i?.className,{"tabs__item--active":o===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:r}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function y(e){const t=f(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",k.tabList)},a.createElement(g,(0,r.Z)({},e,t)),a.createElement(v,(0,r.Z)({},e,t)))}function x(e){const t=(0,h.Z)();return a.createElement(y,(0,r.Z)({key:String(t)},e))}},9946:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>b,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(2564),a=(n(9496),n(9613)),l=n(4310),i=n(7366);const o={title:"TextUI"},u=void 0,s={unversionedId:"ox_lib/Interface/Client/textui",id:"ox_lib/Interface/Client/textui",title:"TextUI",description:"lib.showTextUI",source:"@site/docs/ox_lib/Interface/Client/textui.md",sourceDirName:"ox_lib/Interface/Client",slug:"/ox_lib/Interface/Client/textui",permalink:"/docs/ox_lib/Interface/Client/textui",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_lib/Interface/Client/textui.md",tags:[],version:"current",lastUpdatedAt:1683547367,formattedLastUpdatedAt:"May 8, 2023",frontMatter:{title:"TextUI"},sidebar:"ox_lib",previous:{title:"Skill Check",permalink:"/docs/ox_lib/Interface/Client/skillcheck"},next:{title:"Shared",permalink:"/docs/ox_lib/Locale/Shared"}},c={},p=[{value:"lib.showTextUI",id:"libshowtextui",level:3},{value:"lib.hideTextUI",id:"libhidetextui",level:3},{value:"Usage Example",id:"usage-example",level:3},{value:"Basic",id:"basic",level:4},{value:"Custom styling",id:"custom-styling",level:4}],d={toc:p},m="wrapper";function b(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"libshowtextui"},"lib.showTextUI"),(0,a.kt)("p",null,"Show the TextUI window."),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"DO NOT")," run this function every tick, it's intented to be used as a toggle.")),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Lua",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"lib.showTextUI(text, options)\n"))),(0,a.kt)(i.Z,{value:"JS/TS",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import lib from '@overextended/ox_lib/client'\n\nlib.showTextUI(text, options)\n")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"text: ",(0,a.kt)("inlineCode",{parentName:"li"},"string")),(0,a.kt)("li",{parentName:"ul"},"options?: ",(0,a.kt)("inlineCode",{parentName:"li"},"table"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"position?: ",(0,a.kt)("inlineCode",{parentName:"li"},"'right-center'")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"'left-center'")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"'top-center'"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'right-center'")))),(0,a.kt)("li",{parentName:"ul"},"icon?: ",(0,a.kt)("inlineCode",{parentName:"li"},"string")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"table")," (",(0,a.kt)("inlineCode",{parentName:"li"},"array"),")"),(0,a.kt)("li",{parentName:"ul"},"iconColor?: ",(0,a.kt)("inlineCode",{parentName:"li"},"string")),(0,a.kt)("li",{parentName:"ul"},"style?: React.CSSProperties")))),(0,a.kt)("h3",{id:"libhidetextui"},"lib.hideTextUI"),(0,a.kt)("p",null,"Hides the currently visible TextUI window"),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Lua",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"lib.hideTextUI()\n"))),(0,a.kt)(i.Z,{value:"JS/TS",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import lib from '@overextended/ox_lib/client'\n\nlib.hideTextUI()\n")))),(0,a.kt)("h3",{id:"usage-example"},"Usage Example"),(0,a.kt)("h4",{id:"basic"},"Basic"),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Lua",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"lib.showTextUI('[E] - Fuel vehicle')\n"))),(0,a.kt)(i.Z,{value:"JS/TS",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import lib from '@overextended/ox_lib/client'\n\nlib.showTextUI('[E] - Fuel vehicle')\n")))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/uZS40fD.png",alt:"basic_example"})),(0,a.kt)("h4",{id:"custom-styling"},"Custom styling"),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Lua",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"lib.showTextUI('[E] - Pick apple', {\n    position = \"top-center\",\n    icon = 'hand',\n    style = {\n        borderRadius = 0,\n        backgroundColor = '#48BB78',\n        color = 'white'\n    }\n})\n"))),(0,a.kt)(i.Z,{value:"JS/TS",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import lib from '@overextended/ox_lib/client'\n\nlib.showTextUI('[E] - Pick apple', {\n  position: \"top-center\",\n  icon: 'hand',\n  style: {\n    borderRadius: 0,\n    backgroundColor: '#48BB78',\n    color: 'white'\n  }\n})\n")))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/sy9lPC0.png",alt:"custom_example"})))}b.isMDXComponent=!0}}]);