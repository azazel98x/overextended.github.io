"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7187],{7366:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(9496),n=r(5924);const o={tabItem:"tabItem_b204"};function l(e){let{children:t,hidden:r,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o.tabItem,l),hidden:r},t)}},4310:(e,t,r)=>{r.d(t,{Z:()=>w});var a=r(2564),n=r(9496),o=r(5924),l=r(9857),i=r(3442),s=r(4944),u=r(1887),c=r(7130);function d(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function m(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??d(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=m(e),[l,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,u]=f({queryString:r,groupId:a}),[d,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),h=(()=>{const e=s??d;return p({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{h&&i(h)}),[h]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),b(e)}),[u,b,o]),tabValues:o}}var h=r(1063);const g={tabList:"tabList_KFiB",tabItem:"tabItem_KIg7"};function v(e){let{className:t,block:r,selectedValue:i,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),m=e=>{const t=e.currentTarget,r=c.indexOf(t),a=u[r].value;a!==i&&(d(t),s(a))},p=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},u.map((e=>{let{value:t,label:r,attributes:l}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:p,onClick:m},l,{className:(0,o.Z)("tabs__item",g.tabItem,l?.className,{"tabs__item--active":i===t})}),r??t)})))}function y(e){let{lazy:t,children:r,selectedValue:a}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function k(e){const t=b(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",g.tabList)},n.createElement(v,(0,a.Z)({},e,t)),n.createElement(y,(0,a.Z)({},e,t)))}function w(e){const t=(0,h.Z)();return n.createElement(k,(0,a.Z)({key:String(t)},e))}},4680:(e,t,r)=>{r.d(t,{Z:()=>n});var a=r(9496);const n=e=>{const t={fontSize:"1.3rem",paddingRight:"left"===e.side&&"0.6rem",paddingLeft:"right"===e.side&&"0.6rem",verticalAlign:"center",display:"flex"};return a.createElement("div",{style:{width:"fit-content",fontWeight:"600",padding:"0.5rem",borderRadius:"0.2rem",verticalAlign:"baseline",textAlign:"center",display:"flex",justifyContent:"center",alignItems:"center",color:"white",...e.style},className:"icon-button"},"left"===e.side&&a.createElement("div",{style:t},e.icon),a.createElement("div",null,e.children),"right"===e.side&&a.createElement("div",{style:t},e.icon))}},4657:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>h,frontMatter:()=>u,metadata:()=>d,toc:()=>p});var a=r(2564),n=(r(9496),r(9613)),o=r(4310),l=r(7366),i=r(4680),s=r(6657);const u={},c="Importing the core functions",d={unversionedId:"ox_core/Getting Started/imports",id:"ox_core/Getting Started/imports",title:"Importing the core functions",description:"Lua",source:"@site/docs/ox_core/Getting Started/imports.md",sourceDirName:"ox_core/Getting Started",slug:"/ox_core/Getting Started/imports",permalink:"/docs/ox_core/Getting Started/imports",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_core/Getting Started/imports.md",tags:[],version:"current",lastUpdatedAt:1683547367,formattedLastUpdatedAt:"May 8, 2023",frontMatter:{},sidebar:"ox_core",previous:{title:"Config",permalink:"/docs/ox_core/Getting Started/config"},next:{title:"Client",permalink:"/docs/ox_core/Player/Client/"}},m={},p=[{value:"Lua",id:"lua",level:2},{value:"JS/TS",id:"jsts",level:2}],f={toc:p},b="wrapper";function h(e){let{components:t,...r}=e;return(0,n.kt)(b,(0,a.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"importing-the-core-functions"},"Importing the core functions"),(0,n.kt)("h2",{id:"lua"},"Lua"),(0,n.kt)("p",null,"Lua imports can be defined as part of fxmanifest, or loaded with the load function."),(0,n.kt)(o.Z,{mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"1",label:"fxmanifest",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"client_scripts {\n    '@ox_core/imports/client.lua',\n    'client/main.lua',\n}\n\nserver_scripts {\n    '@oxmysql/lib/MySQL.lua',\n    '@ox_core/imports/server.lua',\n    'server/main.lua',\n}\n"))),(0,n.kt)(l.Z,{value:"2",label:"load",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"local file = ('imports/%s.lua'):format(IsDuplicityVersion() and 'server' or 'client')\nlocal import = LoadResourceFile('ox_core', file)\nlocal chunk = assert(load(import, ('@@ox_core/%s'):format(file)))\nchunk()\n")))),(0,n.kt)("h2",{id:"jsts"},"JS/TS"),(0,n.kt)("p",null,"If in case you want to write resources in JS/TS you will need to install our node client and server wrapper package,\nwhich will allow you to use the core's functions with full type and intellisense support."),(0,n.kt)("a",{href:"https://www.npmjs.com/package/@overextended/ox_core"},(0,n.kt)(i.Z,{style:{marginTop:"0.7rem"},side:"left",icon:(0,n.kt)(s.yQA,{mdxType:"FaNpm"}),mdxType:"IconButton"},"Package")))}h.isMDXComponent=!0}}]);