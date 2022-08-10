"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7835],{9613:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var n=a(9496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(a),d=r,y=p["".concat(i,".").concat(d)]||p[d]||m[d]||s;return a?n.createElement(y,l(l({ref:t},u),{},{components:a})):n.createElement(y,l({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,l=new Array(s);l[0]=p;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<s;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},6965:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return m}});var n=a(5443),r=a(3010),s=(a(9496),a(9613)),l=["components"],o={},i="Transaction",c={unversionedId:"oxmysql/Usage/transaction",id:"oxmysql/Usage/transaction",title:"Transaction",description:"A transaction executes multiple queries and commits them only if all succeed. If one fails, none of the queries are committed. The return value is a boolean, which is the result of the transaction.",source:"@site/docs/oxmysql/Usage/transaction.md",sourceDirName:"oxmysql/Usage",slug:"/oxmysql/Usage/transaction",permalink:"/docs/oxmysql/Usage/transaction",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/oxmysql/Usage/transaction.md",tags:[],version:"current",lastUpdatedAt:1660160987,formattedLastUpdatedAt:"8/10/2022",frontMatter:{},sidebar:"oxmysql",previous:{title:"Single",permalink:"/docs/oxmysql/Usage/single"},next:{title:"Update",permalink:"/docs/oxmysql/Usage/update"}},u={},m=[{value:"Specific Format",id:"specific-format",level:2},{value:"Lua",id:"lua",level:3},{value:"Callback",id:"callback",level:4},{value:"Promise",id:"promise",level:4},{value:"JavaScript",id:"javascript",level:3},{value:"Callback",id:"callback-1",level:4},{value:"Promise",id:"promise-1",level:4},{value:"Shared Format",id:"shared-format",level:2},{value:"Lua",id:"lua-1",level:3},{value:"Callback",id:"callback-2",level:4},{value:"Promise",id:"promise-2",level:4},{value:"JavaScript",id:"javascript-1",level:3},{value:"Callback",id:"callback-3",level:4},{value:"Promise",id:"promise-3",level:4},{value:"Transaction Isolation Level",id:"transaction-isolation-level",level:2}],p={toc:m};function d(e){var t=e.components,a=(0,r.Z)(e,l);return(0,s.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"transaction"},"Transaction"),(0,s.kt)("p",null,"A transaction executes multiple queries and commits them only if all succeed. If one fails, none of the queries are committed. The return value is a ",(0,s.kt)("inlineCode",{parentName:"p"},"boolean"),", which is the result of the transaction."),(0,s.kt)("h2",{id:"specific-format"},"Specific Format"),(0,s.kt)("p",null,"When using the ",(0,s.kt)("inlineCode",{parentName:"p"},"Specific")," format you must pass one parameter to the oxmysql export. In this case, the ",(0,s.kt)("inlineCode",{parentName:"p"},"queries")," parameter contains your queries and the SQL variables unique to each query."),(0,s.kt)("p",null,"This is useful for transactions where the queries do not share many SQL variables."),(0,s.kt)("h3",{id:"lua"},"Lua"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},"local queries = {\n    { query = 'INSERT INTO `test` (id) VALUES (:someid)', values = { ['someid'] = 1 } },\n    { query = 'INSERT INTO `test` (id) VALUES (:someid)', values = { ['someid'] = 2 } }\n} -- NOTE, the 'values' tables can be named 'parameters' here for MySQL-Async compatibility.\n")),(0,s.kt)("h4",{id:"callback"},"Callback"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},"-- alias: exports.oxmysql:transaction\n-- alias: MySQL.Async.transaction\n\nMySQL.transaction(queries, function(success)\n    print(success)\nend)\n")),(0,s.kt)("h4",{id:"promise"},"Promise"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},"-- alias: exports.oxmysql:transaction_async\n-- alias: MySQL.Sync.transaction\nlocal success = MySQL.transaction.await(queries)\nprint(success)\n")),(0,s.kt)("h3",{id:"javascript"},"JavaScript"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const queries = [\n  { query: 'INSERT INTO `test` (id) VALUES (:someid)', values: { someid: 1 } },\n  { query: 'INSERT INTO `test` (id) VALUES (:someid)', values: { someid: 2 } },\n]; // NOTE, the 'values' objects can be named 'parameters' here for MySQL-Async compatibility.\n")),(0,s.kt)("h4",{id:"callback-1"},"Callback"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// alias: exports.oxmysql.transaction\n\nMySQL.transaction(queries, (success) => {\n  console.log(success);\n});\n")),(0,s.kt)("h4",{id:"promise-1"},"Promise"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// alias: exports.oxmysql.transaction_async\n\nconst success = await MySQL.transaction(queries);\nconsole.log(success);\n")),(0,s.kt)("h2",{id:"shared-format"},"Shared Format"),(0,s.kt)("p",null,"When using the ",(0,s.kt)("inlineCode",{parentName:"p"},"Shared")," format you must pass two parameters to the oxmysql export. The ",(0,s.kt)("inlineCode",{parentName:"p"},"queries")," and the ",(0,s.kt)("inlineCode",{parentName:"p"},"parameters")," those queries will use.",(0,s.kt)("br",{parentName:"p"}),"\n","This is useful if your queries use the same SQL variables."),(0,s.kt)("h3",{id:"lua-1"},"Lua"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},"local queries = {\n    'INSERT INTO `test` (id, name) VALUES (:someid, :somename)',\n    'SET `name` = :newname IN `test` WHERE `id` = :someid'\n}\n\nlocal parameters = { ['someid'] = 2, ['somename'] = 'John Doe', ['newname'] = 'John Notdoe' }\n")),(0,s.kt)("h4",{id:"callback-2"},"Callback"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},"-- alias: exports.oxmysql:transaction\n-- alias: MySQL.Async.transaction\n\nMySQL.transaction(queries, parameters, function(success)\n    print(success)\nend)\n")),(0,s.kt)("h4",{id:"promise-2"},"Promise"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},"-- alias: exports.oxmysql:transaction_async\n-- alias: MySQL.Sync.transaction\n\nlocal success = MySQL.transaction.await(queries, parameters)\nprint(success)\n")),(0,s.kt)("h3",{id:"javascript-1"},"JavaScript"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const queries = [\n  'INSERT INTO `test` (id, name) VALUES (:someid, :somename)',\n  'SET `name` = :newname IN `test` WHERE `id` = :someid',\n];\n\nconst parameters = { someid: 2, somename: 'John Doe', newname: 'John Notdoe' };\n")),(0,s.kt)("h4",{id:"callback-3"},"Callback"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// alias: exports.oxmysql.transaction\n\nMySQL.transaction(queries, parameters, (success) => {\n  console.log(success);\n});\n")),(0,s.kt)("h4",{id:"promise-3"},"Promise"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// exports.oxmysql.transaction_async\n\nconst success = await MySQL.transaction(queries, parameters);\nconsole.log(success);\n")),(0,s.kt)("h2",{id:"transaction-isolation-level"},"Transaction Isolation Level"),(0,s.kt)("p",null,"This can be set through the convar ",(0,s.kt)("inlineCode",{parentName:"p"},"mysql_transaction_isolation_level")," which should be an integer ranging from ",(0,s.kt)("inlineCode",{parentName:"p"},"1-4"),". The default convar value set by oxmysql is ",(0,s.kt)("inlineCode",{parentName:"p"},"2"),"."),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Convar Value"),(0,s.kt)("th",{parentName:"tr",align:null},"Result"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"1"),(0,s.kt)("td",{parentName:"tr",align:null},"Repeatable Read")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"2"),(0,s.kt)("td",{parentName:"tr",align:null},"Read Committed")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"3"),(0,s.kt)("td",{parentName:"tr",align:null},"Read Uncommitted")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"4"),(0,s.kt)("td",{parentName:"tr",align:null},"Serializable")))))}d.isMDXComponent=!0}}]);