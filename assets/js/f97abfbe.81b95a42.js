"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[9439],{433:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var s=t(9214),a=t(9744),r=t(6863),o=t(2549),l=t(3079);const i={title:"tsconfig"},c=void 0,u={id:"tsconfig",title:"tsconfig",description:"<EnvBadges",source:"@site/docs/tsconfig.mdx",sourceDirName:".",slug:"/tsconfig",permalink:"/docs/tsconfig",draft:!1,unlisted:!1,editUrl:"https://github.com/bucharitesh/octopop/edit/main/website/docs/tsconfig.mdx",tags:[],version:"current",frontMatter:{title:"tsconfig"},sidebar:"docs",previous:{title:"utils",permalink:"/docs/utils"},next:{title:"tailwind",permalink:"/docs/tailwind"}},d={},p=[{value:"Installation",id:"installation",level:2},{value:"Configs",id:"configs",level:2},{value:"<code>base.json</code>",id:"basejson",level:3},{value:"<code>next.json</code>",id:"nextjson",level:3},{value:"<code>react-library.json</code>",id:"react-libraryjson",level:3}];function h(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,a.RP)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.A,{frontend:!0,backend:!0,tooling:!0,api:"https://www.npmjs.com/package/@octopop/tsconfig"}),"\n",(0,s.jsx)(n.p,{children:"This documentation provides details about the TypeScript configuration files to be used in your project. It encompasses configurations tailored for various scenarios, including default settings, Next.js projects, and React libraries."}),"\n",(0,s.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsxs)(o.A,{groupId:"package-manager",defaultValue:"yarn",values:[{label:"Yarn",value:"yarn"},{label:"pnpm",value:"pnpm"},{label:"npm",value:"npm"}],children:[(0,s.jsx)(l.A,{value:"yarn",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"yarn add @octopop/tsconfig\n"})})}),(0,s.jsx)(l.A,{value:"pnpm",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pnpm add @octopop/tsconfig\n"})})}),(0,s.jsx)(l.A,{value:"npm",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm install @octopop/tsconfig\n"})})})]}),"\n",(0,s.jsxs)(n.p,{children:["You can import and use one of the provided ",(0,s.jsx)(n.code,{children:"tsconfig.json"})," files as an extended version in another ",(0,s.jsx)(n.code,{children:"tsconfig.json"})," file. Follow these steps to do so:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["Create or Open a ",(0,s.jsx)(n.code,{children:"tsconfig.json"})," File:"]})}),"\n",(0,s.jsxs)(n.p,{children:["Create a new ",(0,s.jsx)(n.code,{children:"tsconfig.json"})," file if you don't have one, or open an existing ",(0,s.jsx)(n.code,{children:"tsconfig.json"})," file where you want to use the imported configuration."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["Add an ",(0,s.jsx)(n.code,{children:"extends"})," Property:"]})}),"\n",(0,s.jsxs)(n.p,{children:["Inside your ",(0,s.jsx)(n.code,{children:"tsconfig.json"})," file, add an ",(0,s.jsx)(n.code,{children:"extends"})," property and set its value to the path of the ",(0,s.jsx)(n.code,{children:"tsconfig.json"})," file you want to import. This path can be relative or absolute."]}),"\n",(0,s.jsxs)(o.A,{groupId:"package-manager",defaultValue:"base",values:[{label:"Base",value:"base"},{label:"Next-js",value:"next"},{label:"React-js",value:"react"}],children:[(0,s.jsx)(l.A,{value:"base",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "extends": "@octopop/tsconfig/base"\n}\n'})})}),(0,s.jsx)(l.A,{value:"next",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "extends": "@octopop/tsconfig/nextjs"\n}\n'})})}),(0,s.jsx)(l.A,{value:"react",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "extends": "@octopop/tsconfig/react-library"\n}\n'})})})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"configs",children:"Configs"}),"\n",(0,s.jsx)(n.h3,{id:"basejson",children:(0,s.jsx)(n.code,{children:"base.json"})}),"\n",(0,s.jsx)(n.p,{children:"javascript"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "$schema": "https://json.schemastore.org/tsconfig",\n  "display": "Default",\n  "compilerOptions": {\n    "composite": false,\n    "declaration": true,\n    "declarationMap": true,\n    "esModuleInterop": true,\n    "forceConsistentCasingInFileNames": true,\n    "allowImportingTsExtensions": true,\n    "noEmit": true,\n    "inlineSources": false,\n    "isolatedModules": true,\n    "moduleResolution": "node",\n    "noUnusedLocals": false,\n    "noUnusedParameters": false,\n    "preserveWatchOutput": true,\n    "skipLibCheck": true,\n    "strict": true,\n    "strictNullChecks": true\n  },\n  "exclude": ["node_modules"]\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"nextjson",children:(0,s.jsx)(n.code,{children:"next.json"})}),"\n",(0,s.jsx)(n.p,{children:"next-js"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-next.json",children:'{\n  "$schema": "https://json.schemastore.org/tsconfig",\n  "display": "Next.js",\n  "extends": "./base.json",\n  "compilerOptions": {\n    "plugins": [{ "name": "next" }],\n    "allowJs": true,\n    "declaration": false,\n    "declarationMap": false,\n    "incremental": true,\n    "jsx": "preserve",\n    "lib": ["dom", "dom.iterable", "esnext"],\n    "module": "esnext",\n    "resolveJsonModule": true,\n    "strict": false,\n    "target": "es5"\n  },\n  "include": ["src", "next-env.d.ts"],\n  "exclude": ["node_modules"]\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"react-libraryjson",children:(0,s.jsx)(n.code,{children:"react-library.json"})}),"\n",(0,s.jsx)(n.p,{children:"react-js"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-react-library.json",children:'{\n  "$schema": "https://json.schemastore.org/tsconfig",\n  "display": "React Library",\n  "extends": "./base.json",\n  "compilerOptions": {\n    "lib": ["ES2015", "DOM"],\n    "module": "ESNext",\n    "target": "ES6",\n    "jsx": "react-jsx",\n    "noEmit": true\n  }\n}\n'})})]})}function f(e={}){const{wrapper:n}={...(0,a.RP)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},3079:(e,n,t)=>{t.d(n,{A:()=>o});t(8318);var s=t(6601);const a={tabItem:"tabItem_Uvyi"};var r=t(9214);function o(e){let{children:n,hidden:t,className:o}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.A)(a.tabItem,o),hidden:t,children:n})}},2549:(e,n,t)=>{t.d(n,{A:()=>h});var s=t(8318),a=t(6601),r=t(9416),o=t(1663),l=t(9073);const i={tabList:"tabList_bjSp",tabItem:"tabItem_vusB"};var c=t(9214);function u(e){let{className:n,block:t,selectedValue:s,selectValue:o,tabValues:l}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,r.a_)(),p=e=>{const n=e.currentTarget,t=u.indexOf(n),a=l[t].value;a!==s&&(d(n),o(a))},h=e=>{let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}n?.focus()};return(0,c.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,c.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>u.push(e),onKeyDown:h,onClick:p,...r,className:(0,a.A)("tabs__item",i.tabItem,r?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function d(e){let{lazy:n,children:t,selectedValue:a}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===a));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,c.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function p(e){const n=(0,o.u)(e);return(0,c.jsxs)("div",{className:(0,a.A)("tabs-container",i.tabList),children:[(0,c.jsx)(u,{...e,...n}),(0,c.jsx)(d,{...e,...n})]})}function h(e){const n=(0,l.A)();return(0,c.jsx)(p,{...e,children:(0,o.v)(e.children)},String(n))}},1663:(e,n,t)=>{t.d(n,{u:()=>h,v:()=>c});var s=t(8318),a=t(6325),r=t(6547),o=t(6549),l=t(5050),i=t(4418);function c(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return c(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:a}}=e;return{value:n,label:t,attributes:s,default:a}}))}(t);return function(e){const n=(0,l.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function d(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const r=(0,a.W6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(l),(0,s.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(r.location.search);n.set(l,e),r.replace({...r.location,search:n.toString()})}),[l,r])]}function h(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,o=u(e),[l,c]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:o}))),[h,f]=p({queryString:t,groupId:a}),[j,x]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,r]=(0,i.Dv)(t);return[a,(0,s.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:a}),g=(()=>{const e=h??j;return d({value:e,tabValues:o})?e:null})();(0,r.A)((()=>{g&&c(g)}),[g]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);c(e),f(e),x(e)}),[f,x,o]),tabValues:o}}},8344:(e,n,t)=>{t.d(n,{A:()=>a});t(8318);var s=t(9214);function a(e){let{children:n,type:t}=e;return(0,s.jsx)("span",{className:`badge badge--${t}`,children:n})}},6863:(e,n,t)=>{t.d(n,{A:()=>c});var s=t(7512),a=t(8659),r=t(8344);const o={badgeGroup:"badgeGroup_syf7",apiLink:"apiLink_JWAN"};var l=t(9214);function i(e){let{children:n}=e;return(0,l.jsx)("span",{className:o.badgeGroup,children:n})}function c(e){let{api:n,backend:t,frontend:c,tooling:u}=e;return(0,l.jsxs)(l.Fragment,{children:[n&&(0,l.jsxs)(s.default,{className:o.apiLink,to:n,children:["API ",(0,l.jsx)(a.A,{})]}),(0,l.jsxs)(i,{children:[t&&(0,l.jsx)(r.A,{type:"warning",children:"Backend"}),c&&(0,l.jsx)(r.A,{type:"success",children:"Frontend"}),u&&(0,l.jsx)(r.A,{type:"primary",children:"Tooling"})]})]})}},9744:(e,n,t)=>{t.d(n,{RP:()=>r});var s=t(8318);const a=s.createContext({});function r(e){const n=s.useContext(a);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}}}]);