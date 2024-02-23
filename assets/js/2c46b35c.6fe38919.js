"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[7473],{336:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var a=n(9214),r=n(9744),l=n(6863),s=n(2549),o=n(3079);const i={title:"tailwind"},u=void 0,c={id:"tailwind",title:"tailwind",description:"A tailwind configuration",source:"@site/docs/tailwind.mdx",sourceDirName:".",slug:"/tailwind",permalink:"/octopop/docs/tailwind",draft:!1,unlisted:!1,editUrl:"https://github.com/bucharitesh/octopop/edit/main/website/docs/tailwind.mdx",tags:[],version:"current",frontMatter:{title:"tailwind"},sidebar:"docs",previous:{title:"tsconfig",permalink:"/octopop/docs/tsconfig"},next:{title:"prettier",permalink:"/octopop/docs/prettier"}},d={},p=[{value:"Installation",id:"installation",level:2}];function h(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.RP)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.A,{frontend:!0,api:"https://www.npmjs.com/package/@octopop/tailwind"}),"\n",(0,a.jsx)(t.p,{children:"A tailwind configuration"}),"\n",(0,a.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,a.jsxs)(s.A,{groupId:"package-manager",defaultValue:"yarn",values:[{label:"Yarn",value:"yarn"},{label:"pnpm",value:"pnpm"},{label:"npm",value:"npm"}],children:[(0,a.jsx)(o.A,{value:"yarn",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"yarn add @octopop/tsconfig\n"})})}),(0,a.jsx)(o.A,{value:"pnpm",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"pnpm add @octopop/tsconfig\n"})})}),(0,a.jsx)(o.A,{value:"npm",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"npm install @octopop/tsconfig\n"})})})]})]})}function f(e={}){const{wrapper:t}={...(0,r.RP)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},3079:(e,t,n)=>{n.d(t,{A:()=>s});n(8318);var a=n(6601);const r={tabItem:"tabItem_Uvyi"};var l=n(9214);function s(e){let{children:t,hidden:n,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,s),hidden:n,children:t})}},2549:(e,t,n)=>{n.d(t,{A:()=>h});var a=n(8318),r=n(6601),l=n(9416),s=n(1663),o=n(9073);const i={tabList:"tabList_bjSp",tabItem:"tabItem_vusB"};var u=n(9214);function c(e){let{className:t,block:n,selectedValue:a,selectValue:s,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.a_)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),r=o[n].value;r!==a&&(d(t),s(r))},h=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return(0,u.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:l}=e;return(0,u.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>c.push(e),onKeyDown:h,onClick:p,...l,className:(0,r.A)("tabs__item",i.tabItem,l?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function d(e){let{lazy:t,children:n,selectedValue:r}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,u.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function p(e){const t=(0,s.u)(e);return(0,u.jsxs)("div",{className:(0,r.A)("tabs-container",i.tabList),children:[(0,u.jsx)(c,{...e,...t}),(0,u.jsx)(d,{...e,...t})]})}function h(e){const t=(0,o.A)();return(0,u.jsx)(p,{...e,children:(0,s.v)(e.children)},String(t))}},1663:(e,t,n)=>{n.d(t,{u:()=>h,v:()=>u});var a=n(8318),r=n(6325),l=n(6547),s=n(6549),o=n(5050),i=n(4418);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function c(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,o.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const l=(0,r.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s.aZ)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(l.location.search);t.set(o,e),l.replace({...l.location,search:t.toString()})}),[o,l])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,s=c(e),[o,u]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[h,f]=p({queryString:n,groupId:r}),[m,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,i.Dv)(n);return[r,(0,a.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),v=(()=>{const e=h??m;return d({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{v&&u(v)}),[v]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!d({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);u(e),f(e),b(e)}),[f,b,s]),tabValues:s}}},8344:(e,t,n)=>{n.d(t,{A:()=>r});n(8318);var a=n(9214);function r(e){let{children:t,type:n}=e;return(0,a.jsx)("span",{className:`badge badge--${n}`,children:t})}},6863:(e,t,n)=>{n.d(t,{A:()=>u});var a=n(7512),r=n(8659),l=n(8344);const s={badgeGroup:"badgeGroup_syf7",apiLink:"apiLink_JWAN"};var o=n(9214);function i(e){let{children:t}=e;return(0,o.jsx)("span",{className:s.badgeGroup,children:t})}function u(e){let{api:t,backend:n,frontend:u,tooling:c}=e;return(0,o.jsxs)(o.Fragment,{children:[t&&(0,o.jsxs)(a.default,{className:s.apiLink,to:t,children:["API ",(0,o.jsx)(r.A,{})]}),(0,o.jsxs)(i,{children:[n&&(0,o.jsx)(l.A,{type:"warning",children:"Backend"}),u&&(0,o.jsx)(l.A,{type:"success",children:"Frontend"}),c&&(0,o.jsx)(l.A,{type:"primary",children:"Tooling"})]})]})}},9744:(e,t,n)=>{n.d(t,{RP:()=>l});var a=n(8318);const r=a.createContext({});function l(e){const t=a.useContext(r);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}}}]);