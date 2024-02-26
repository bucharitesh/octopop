"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[5281,9048],{7543:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ue});var a=n(8318),o=n(6601),r=n(5466),i=n(8702),s=n(9719),c=n(3883),l=n(6596),d=n(6444);const u={backToTopButton:"backToTopButton_fVQs",backToTopButtonShow:"backToTopButtonShow_eS9c"};var m=n(9214);function p(){const{shown:e,scrollToTop:t}=(0,d.H)({threshold:300});return(0,m.jsx)("button",{"aria-label":(0,l.T)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,o.A)("clean-btn",i.G.common.backToTopButton,u.backToTopButton,e&&u.backToTopButtonShow),type:"button",onClick:t})}var b=n(4550),h=n(6325),f=n(9600),x=n(6277),j=n(3443);function g(e){return(0,m.jsx)("svg",{width:"20",height:"20","aria-hidden":"true",...e,children:(0,m.jsxs)("g",{fill:"#7a7a7a",children:[(0,m.jsx)("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),(0,m.jsx)("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})]})})}const v={collapseSidebarButton:"collapseSidebarButton__GdC",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_mAPG"};function A(e){let{onClick:t}=e;return(0,m.jsx)("button",{type:"button",title:(0,l.T)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,l.T)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,o.A)("button button--secondary button--outline",v.collapseSidebarButton),onClick:t,children:(0,m.jsx)(g,{className:v.collapseSidebarButtonIcon})})}var y=n(6714),_=n(6861),C=n(2208),S=n(4231),k=n(5149),N=n(7180),T=n(2585),I=n(2552);function w(e){let{collapsed:t,categoryLabel:n,onClick:a}=e;return(0,m.jsx)("button",{"aria-label":t?(0,l.T)({id:"theme.DocSidebarItem.expandCategoryAriaLabel",message:"Expand sidebar category '{label}'",description:"The ARIA label to expand the sidebar category"},{label:n}):(0,l.T)({id:"theme.DocSidebarItem.collapseCategoryAriaLabel",message:"Collapse sidebar category '{label}'",description:"The ARIA label to collapse the sidebar category"},{label:n}),type:"button",className:"clean-btn menu__caret",onClick:a})}function B(e){let{item:t,onItemClick:n,activePath:r,level:c,index:l,...d}=e;const{items:u,label:p,collapsible:b,className:h,href:f}=t,{docs:{sidebar:{autoCollapseCategories:j}}}=(0,x.p)(),g=function(e){const t=(0,I.A)();return(0,a.useMemo)((()=>e.href&&!e.linkUnlisted?e.href:!t&&e.collapsible?(0,s.Nr)(e):void 0),[e,t])}(t),v=(0,s.w8)(t,r),A=(0,N.ys)(f,r),{collapsed:y,setCollapsed:_}=(0,k.u)({initialState:()=>!!b&&(!v&&t.collapsed)}),{expandedItem:B,setExpandedItem:O}=(0,C.G)(),E=function(e){void 0===e&&(e=!y),O(e?null:l),_(e)};return function(e){let{isActive:t,collapsed:n,updateCollapsed:o}=e;const r=(0,S.ZC)(t);(0,a.useEffect)((()=>{t&&!r&&n&&o(!1)}),[t,r,n,o])}({isActive:v,collapsed:y,updateCollapsed:E}),(0,a.useEffect)((()=>{b&&null!=B&&B!==l&&j&&_(!0)}),[b,B,l,_,j]),(0,m.jsxs)("li",{className:(0,o.A)(i.G.docs.docSidebarItemCategory,i.G.docs.docSidebarItemCategoryLevel(c),"menu__list-item",{"menu__list-item--collapsed":y},h),children:[(0,m.jsxs)("div",{className:(0,o.A)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":A}),children:[(0,m.jsx)(T.default,{className:(0,o.A)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!f&&b,"menu__link--active":v}),onClick:b?e=>{n?.(t),f?E(!1):(e.preventDefault(),E())}:()=>{n?.(t)},"aria-current":A?"page":void 0,"aria-expanded":b?!y:void 0,href:b?g??"#":g,...d,children:p}),f&&b&&(0,m.jsx)(w,{collapsed:y,categoryLabel:p,onClick:e=>{e.preventDefault(),E()}})]}),(0,m.jsx)(k.N,{lazy:!0,as:"ul",className:"menu__list",collapsed:y,children:(0,m.jsx)(R,{items:u,tabIndex:y?-1:0,onItemClick:n,activePath:r,level:c+1})})]})}var O=n(2783),E=n(1078);const P={menuExternalLink:"menuExternalLink_v3Jl"};function L(e){let{item:t,onItemClick:n,activePath:a,level:r,index:c,...l}=e;const{href:d,label:u,className:p,autoAddBaseUrl:b}=t,h=(0,s.w8)(t,a),f=(0,O.A)(d);return(0,m.jsx)("li",{className:(0,o.A)(i.G.docs.docSidebarItemLink,i.G.docs.docSidebarItemLinkLevel(r),"menu__list-item",p),children:(0,m.jsxs)(T.default,{className:(0,o.A)("menu__link",!f&&P.menuExternalLink,{"menu__link--active":h}),autoAddBaseUrl:b,"aria-current":h?"page":void 0,to:d,...f&&{onClick:n?()=>n(t):void 0},...l,children:[u,!f&&(0,m.jsx)(E.A,{})]})},u)}const M={menuHtmlItem:"menuHtmlItem_MpzK"};function H(e){let{item:t,level:n,index:a}=e;const{value:r,defaultStyle:s,className:c}=t;return(0,m.jsx)("li",{className:(0,o.A)(i.G.docs.docSidebarItemLink,i.G.docs.docSidebarItemLinkLevel(n),s&&[M.menuHtmlItem,"menu__list-item"],c),dangerouslySetInnerHTML:{__html:r}},a)}function G(e){let{item:t,...n}=e;switch(t.type){case"category":return(0,m.jsx)(B,{item:t,...n});case"html":return(0,m.jsx)(H,{item:t,...n});default:return(0,m.jsx)(L,{item:t,...n})}}function D(e){let{items:t,...n}=e;const a=(0,s.Y)(t,n.activePath);return(0,m.jsx)(C.A,{children:a.map(((e,t)=>(0,m.jsx)(G,{item:e,index:t,...n},t)))})}const R=(0,a.memo)(D),W={menu:"menu_pZCp",menuWithAnnouncementBar:"menuWithAnnouncementBar_AG2j"};function F(e){let{path:t,sidebar:n,className:r}=e;const s=function(){const{isActive:e}=(0,y.Mj)(),[t,n]=(0,a.useState)(e);return(0,_.Mq)((t=>{let{scrollY:a}=t;e&&n(0===a)}),[e]),e&&t}();return(0,m.jsx)("nav",{"aria-label":(0,l.T)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,o.A)("menu thin-scrollbar",W.menu,s&&W.menuWithAnnouncementBar,r),children:(0,m.jsx)("ul",{className:(0,o.A)(i.G.docs.docSidebarMenu,"menu__list"),children:(0,m.jsx)(R,{items:n,activePath:t,level:1})})})}const V="sidebar_iWkG",z="sidebarWithHideableNavbar_A2j6",K="sidebarHidden_fQKL",U="sidebarLogo_u0s7";function Y(e){let{path:t,sidebar:n,onCollapse:a,isHidden:r}=e;const{navbar:{hideOnScroll:i},docs:{sidebar:{hideable:s}}}=(0,x.p)();return(0,m.jsxs)("div",{className:(0,o.A)(V,i&&z,r&&K),children:[i&&(0,m.jsx)(j.A,{tabIndex:-1,className:U}),(0,m.jsx)(F,{path:t,sidebar:n}),s&&(0,m.jsx)(A,{onClick:a})]})}const Z=a.memo(Y);var q=n(8563),Q=n(7434);const J=e=>{let{sidebar:t,path:n}=e;const a=(0,Q.M)();return(0,m.jsx)("ul",{className:(0,o.A)(i.G.docs.docSidebarMenu,"menu__list"),children:(0,m.jsx)(R,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&a.toggle(),"link"===e.type&&a.toggle()},level:1})})};function X(e){return(0,m.jsx)(q.GX,{component:J,props:e})}const $=a.memo(X);function ee(e){const t=(0,f.l)(),n="desktop"===t||"ssr"===t,a="mobile"===t;return(0,m.jsxs)(m.Fragment,{children:[n&&(0,m.jsx)(Z,{...e}),a&&(0,m.jsx)($,{...e})]})}const te={expandButton:"expandButton__4mq",expandButtonIcon:"expandButtonIcon_HKgM"};function ne(e){let{toggleSidebar:t}=e;return(0,m.jsx)("div",{className:te.expandButton,title:(0,l.T)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,l.T)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t,children:(0,m.jsx)(g,{className:te.expandButtonIcon})})}const ae={docSidebarContainer:"docSidebarContainer_cuuM",docSidebarContainerHidden:"docSidebarContainerHidden_c3Ax",sidebarViewport:"sidebarViewport_c7Op"};function oe(e){let{children:t}=e;const n=(0,c.t)();return(0,m.jsx)(a.Fragment,{children:t},n?.name??"noSidebar")}function re(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:r}=e;const{pathname:s}=(0,h.zy)(),[c,l]=(0,a.useState)(!1),d=(0,a.useCallback)((()=>{c&&l(!1),!c&&(0,b.O)()&&l(!0),r((e=>!e))}),[r,c]);return(0,m.jsx)("aside",{className:(0,o.A)(i.G.docs.docSidebarContainer,ae.docSidebarContainer,n&&ae.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(ae.docSidebarContainer)&&n&&l(!0)},children:(0,m.jsx)(oe,{children:(0,m.jsxs)("div",{className:(0,o.A)(ae.sidebarViewport,c&&ae.sidebarViewportHidden),children:[(0,m.jsx)(ee,{sidebar:t,path:s,onCollapse:d,isHidden:c}),c&&(0,m.jsx)(ne,{toggleSidebar:d})]})})})}const ie={docMainContainer:"docMainContainer_nuBe",docMainContainerEnhanced:"docMainContainerEnhanced_Zm89",docItemWrapperEnhanced:"docItemWrapperEnhanced_bPdA"};function se(e){let{hiddenSidebarContainer:t,children:n}=e;const a=(0,c.t)();return(0,m.jsx)("main",{className:(0,o.A)(ie.docMainContainer,(t||!a)&&ie.docMainContainerEnhanced),children:(0,m.jsx)("div",{className:(0,o.A)("container padding-top--md padding-bottom--lg",ie.docItemWrapper,t&&ie.docItemWrapperEnhanced),children:n})})}const ce={docRoot:"docRoot_ZFaa",docsWrapper:"docsWrapper_bg6R"};function le(e){let{children:t}=e;const n=(0,c.t)(),[o,r]=(0,a.useState)(!1);return(0,m.jsxs)("div",{className:ce.docsWrapper,children:[(0,m.jsx)(p,{}),(0,m.jsxs)("div",{className:ce.docRoot,children:[n&&(0,m.jsx)(re,{sidebar:n.items,hiddenSidebarContainer:o,setHiddenSidebarContainer:r}),(0,m.jsx)(se,{hiddenSidebarContainer:o,children:t})]})]})}var de=n(4161);function ue(e){const t=(0,s.B5)(e);if(!t)return(0,m.jsx)(de.A,{});const{docElement:n,sidebarName:a,sidebarItems:l}=t;return(0,m.jsx)(r.e3,{className:(0,o.A)(i.G.page.docsDocPage),children:(0,m.jsx)(c.V,{name:a,items:l,children:(0,m.jsx)(le,{children:n})})})}},4161:(e,t,n)=>{n.d(t,{A:()=>s});n(8318);var a=n(6601),o=n(6596),r=n(7632),i=n(9214);function s(e){let{className:t}=e;return(0,i.jsx)("main",{className:(0,a.A)("container margin-vert--xl",t),children:(0,i.jsx)("div",{className:"row",children:(0,i.jsxs)("div",{className:"col col--6 col--offset-3",children:[(0,i.jsx)(r.default,{as:"h1",className:"hero__title",children:(0,i.jsx)(o.A,{id:"theme.NotFound.title",description:"The title of the 404 page",children:"Page Not Found"})}),(0,i.jsx)("p",{children:(0,i.jsx)(o.A,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page",children:"We could not find what you were looking for."})}),(0,i.jsx)("p",{children:(0,i.jsx)(o.A,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page",children:"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."})})]})})})}},2208:(e,t,n)=>{n.d(t,{A:()=>c,G:()=>l});var a=n(8318),o=n(4231),r=n(9214);const i=Symbol("EmptyContext"),s=a.createContext(i);function c(e){let{children:t}=e;const[n,o]=(0,a.useState)(null),i=(0,a.useMemo)((()=>({expandedItem:n,setExpandedItem:o})),[n]);return(0,r.jsx)(s.Provider,{value:i,children:t})}function l(){const e=(0,a.useContext)(s);if(e===i)throw new o.dV("DocSidebarItemsExpandedStateProvider");return e}},6444:(e,t,n)=>{n.d(t,{H:()=>i});var a=n(8318),o=n(6861),r=n(1595);function i(e){let{threshold:t}=e;const[n,i]=(0,a.useState)(!1),s=(0,a.useRef)(!1),{startScroll:c,cancelScroll:l}=(0,o.gk)();return(0,o.Mq)(((e,n)=>{let{scrollY:a}=e;const o=n?.scrollY;o&&(s.current?s.current=!1:a>=o?(l(),i(!1)):a<t?i(!1):a+window.innerHeight<document.documentElement.scrollHeight&&i(!0))})),(0,r.$)((e=>{e.location.hash&&(s.current=!0,i(!1))})),{shown:n,scrollToTop:()=>c(0)}}},8924:(e,t,n)=>{const a=n(8318).createContext({options:{banner:"",breadcrumbs:!0,gitRefName:"master",minimal:!1,pluginId:"default",scopes:[]},reflections:{}});t.ApiDataContext=a},9788:(e,t,n)=>{const a=["options","packages"];function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t,n){var a;return(t="symbol"==typeof(a=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!=typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?a:String(a))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n(9209),n(7755);const c=n(8318),l=n(7543),d=n(8924),u=n(9214),m=(e=>e&&e.__esModule?e:{default:e})(l);function p(e){return"object"==typeof e&&null!==e&&!Array.isArray(e)}function b(e,t,n){return Object.entries(e).forEach((a=>{let[o,r]=a;if("id"===o){const a="type"in e;(!a||a&&"reference"!==e.type)&&(t[Number(r)]=e,n&&(e.parentId=n.id))}else Array.isArray(r)?r.forEach((n=>{p(n)&&b(n,t,e)})):p(r)&&b(r,t,e)})),t}function h(e){const t={};return e.forEach((e=>{e.entryPoints.forEach((e=>{b(e.reflection,t)}))})),t}e.exports=function(e){let t=e.options,n=e.packages,o=s(e,a);const i=c.useMemo((()=>({options:t,reflections:h(n)})),[t,n]);return u.jsx(d.ApiDataContext.Provider,{value:i,children:u.jsx("div",{className:"apiPage",children:u.jsx(m.default,r({},o))})})}},9209:(e,t,n)=>{n.r(t)},7755:(e,t,n)=>{n.r(t)}}]);