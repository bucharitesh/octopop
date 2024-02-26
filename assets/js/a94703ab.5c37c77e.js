"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[9048],{7543:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ue});var a=n(8318),o=n(6601),i=n(5466),s=n(8702),l=n(9719),c=n(3883),r=n(6596),d=n(6444);const u={backToTopButton:"backToTopButton_fVQs",backToTopButtonShow:"backToTopButtonShow_eS9c"};var m=n(9214);function b(){const{shown:e,scrollToTop:t}=(0,d.H)({threshold:300});return(0,m.jsx)("button",{"aria-label":(0,r.T)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,o.A)("clean-btn",s.G.common.backToTopButton,u.backToTopButton,e&&u.backToTopButtonShow),type:"button",onClick:t})}var h=n(4550),p=n(6325),x=n(9600),f=n(6277),j=n(3443);function A(e){return(0,m.jsx)("svg",{width:"20",height:"20","aria-hidden":"true",...e,children:(0,m.jsxs)("g",{fill:"#7a7a7a",children:[(0,m.jsx)("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),(0,m.jsx)("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})]})})}const v={collapseSidebarButton:"collapseSidebarButton__GdC",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_mAPG"};function _(e){let{onClick:t}=e;return(0,m.jsx)("button",{type:"button",title:(0,r.T)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,r.T)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,o.A)("button button--secondary button--outline",v.collapseSidebarButton),onClick:t,children:(0,m.jsx)(A,{className:v.collapseSidebarButtonIcon})})}var g=n(6714),C=n(6861),k=n(2208),S=n(4231),T=n(5149),N=n(7180),I=n(2585),B=n(2552);function y(e){let{collapsed:t,categoryLabel:n,onClick:a}=e;return(0,m.jsx)("button",{"aria-label":t?(0,r.T)({id:"theme.DocSidebarItem.expandCategoryAriaLabel",message:"Expand sidebar category '{label}'",description:"The ARIA label to expand the sidebar category"},{label:n}):(0,r.T)({id:"theme.DocSidebarItem.collapseCategoryAriaLabel",message:"Collapse sidebar category '{label}'",description:"The ARIA label to collapse the sidebar category"},{label:n}),type:"button",className:"clean-btn menu__caret",onClick:a})}function w(e){let{item:t,onItemClick:n,activePath:i,level:c,index:r,...d}=e;const{items:u,label:b,collapsible:h,className:p,href:x}=t,{docs:{sidebar:{autoCollapseCategories:j}}}=(0,f.p)(),A=function(e){const t=(0,B.A)();return(0,a.useMemo)((()=>e.href&&!e.linkUnlisted?e.href:!t&&e.collapsible?(0,l.Nr)(e):void 0),[e,t])}(t),v=(0,l.w8)(t,i),_=(0,N.ys)(x,i),{collapsed:g,setCollapsed:C}=(0,T.u)({initialState:()=>!!h&&(!v&&t.collapsed)}),{expandedItem:w,setExpandedItem:L}=(0,k.G)(),E=function(e){void 0===e&&(e=!g),L(e?null:r),C(e)};return function(e){let{isActive:t,collapsed:n,updateCollapsed:o}=e;const i=(0,S.ZC)(t);(0,a.useEffect)((()=>{t&&!i&&n&&o(!1)}),[t,i,n,o])}({isActive:v,collapsed:g,updateCollapsed:E}),(0,a.useEffect)((()=>{h&&null!=w&&w!==r&&j&&C(!0)}),[h,w,r,C,j]),(0,m.jsxs)("li",{className:(0,o.A)(s.G.docs.docSidebarItemCategory,s.G.docs.docSidebarItemCategoryLevel(c),"menu__list-item",{"menu__list-item--collapsed":g},p),children:[(0,m.jsxs)("div",{className:(0,o.A)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":_}),children:[(0,m.jsx)(I.default,{className:(0,o.A)("menu__link",{"menu__link--sublist":h,"menu__link--sublist-caret":!x&&h,"menu__link--active":v}),onClick:h?e=>{n?.(t),x?E(!1):(e.preventDefault(),E())}:()=>{n?.(t)},"aria-current":_?"page":void 0,"aria-expanded":h?!g:void 0,href:h?A??"#":A,...d,children:b}),x&&h&&(0,m.jsx)(y,{collapsed:g,categoryLabel:b,onClick:e=>{e.preventDefault(),E()}})]}),(0,m.jsx)(T.N,{lazy:!0,as:"ul",className:"menu__list",collapsed:g,children:(0,m.jsx)(D,{items:u,tabIndex:g?-1:0,onItemClick:n,activePath:i,level:c+1})})]})}var L=n(2783),E=n(1078);const H={menuExternalLink:"menuExternalLink_v3Jl"};function M(e){let{item:t,onItemClick:n,activePath:a,level:i,index:c,...r}=e;const{href:d,label:u,className:b,autoAddBaseUrl:h}=t,p=(0,l.w8)(t,a),x=(0,L.A)(d);return(0,m.jsx)("li",{className:(0,o.A)(s.G.docs.docSidebarItemLink,s.G.docs.docSidebarItemLinkLevel(i),"menu__list-item",b),children:(0,m.jsxs)(I.default,{className:(0,o.A)("menu__link",!x&&H.menuExternalLink,{"menu__link--active":p}),autoAddBaseUrl:h,"aria-current":p?"page":void 0,to:d,...x&&{onClick:n?()=>n(t):void 0},...r,children:[u,!x&&(0,m.jsx)(E.A,{})]})},u)}const G={menuHtmlItem:"menuHtmlItem_MpzK"};function P(e){let{item:t,level:n,index:a}=e;const{value:i,defaultStyle:l,className:c}=t;return(0,m.jsx)("li",{className:(0,o.A)(s.G.docs.docSidebarItemLink,s.G.docs.docSidebarItemLinkLevel(n),l&&[G.menuHtmlItem,"menu__list-item"],c),dangerouslySetInnerHTML:{__html:i}},a)}function W(e){let{item:t,...n}=e;switch(t.type){case"category":return(0,m.jsx)(w,{item:t,...n});case"html":return(0,m.jsx)(P,{item:t,...n});default:return(0,m.jsx)(M,{item:t,...n})}}function R(e){let{items:t,...n}=e;const a=(0,l.Y)(t,n.activePath);return(0,m.jsx)(k.A,{children:a.map(((e,t)=>(0,m.jsx)(W,{item:e,index:t,...n},t)))})}const D=(0,a.memo)(R),F={menu:"menu_pZCp",menuWithAnnouncementBar:"menuWithAnnouncementBar_AG2j"};function V(e){let{path:t,sidebar:n,className:i}=e;const l=function(){const{isActive:e}=(0,g.Mj)(),[t,n]=(0,a.useState)(e);return(0,C.Mq)((t=>{let{scrollY:a}=t;e&&n(0===a)}),[e]),e&&t}();return(0,m.jsx)("nav",{"aria-label":(0,r.T)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,o.A)("menu thin-scrollbar",F.menu,l&&F.menuWithAnnouncementBar,i),children:(0,m.jsx)("ul",{className:(0,o.A)(s.G.docs.docSidebarMenu,"menu__list"),children:(0,m.jsx)(D,{items:n,activePath:t,level:1})})})}const z="sidebar_iWkG",K="sidebarWithHideableNavbar_A2j6",U="sidebarHidden_fQKL",Y="sidebarLogo_u0s7";function Z(e){let{path:t,sidebar:n,onCollapse:a,isHidden:i}=e;const{navbar:{hideOnScroll:s},docs:{sidebar:{hideable:l}}}=(0,f.p)();return(0,m.jsxs)("div",{className:(0,o.A)(z,s&&K,i&&U),children:[s&&(0,m.jsx)(j.A,{tabIndex:-1,className:Y}),(0,m.jsx)(V,{path:t,sidebar:n}),l&&(0,m.jsx)(_,{onClick:a})]})}const q=a.memo(Z);var O=n(8563),Q=n(7434);const J=e=>{let{sidebar:t,path:n}=e;const a=(0,Q.M)();return(0,m.jsx)("ul",{className:(0,o.A)(s.G.docs.docSidebarMenu,"menu__list"),children:(0,m.jsx)(D,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&a.toggle(),"link"===e.type&&a.toggle()},level:1})})};function X(e){return(0,m.jsx)(O.GX,{component:J,props:e})}const $=a.memo(X);function ee(e){const t=(0,x.l)(),n="desktop"===t||"ssr"===t,a="mobile"===t;return(0,m.jsxs)(m.Fragment,{children:[n&&(0,m.jsx)(q,{...e}),a&&(0,m.jsx)($,{...e})]})}const te={expandButton:"expandButton__4mq",expandButtonIcon:"expandButtonIcon_HKgM"};function ne(e){let{toggleSidebar:t}=e;return(0,m.jsx)("div",{className:te.expandButton,title:(0,r.T)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,r.T)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t,children:(0,m.jsx)(A,{className:te.expandButtonIcon})})}const ae={docSidebarContainer:"docSidebarContainer_cuuM",docSidebarContainerHidden:"docSidebarContainerHidden_c3Ax",sidebarViewport:"sidebarViewport_c7Op"};function oe(e){let{children:t}=e;const n=(0,c.t)();return(0,m.jsx)(a.Fragment,{children:t},n?.name??"noSidebar")}function ie(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:i}=e;const{pathname:l}=(0,p.zy)(),[c,r]=(0,a.useState)(!1),d=(0,a.useCallback)((()=>{c&&r(!1),!c&&(0,h.O)()&&r(!0),i((e=>!e))}),[i,c]);return(0,m.jsx)("aside",{className:(0,o.A)(s.G.docs.docSidebarContainer,ae.docSidebarContainer,n&&ae.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(ae.docSidebarContainer)&&n&&r(!0)},children:(0,m.jsx)(oe,{children:(0,m.jsxs)("div",{className:(0,o.A)(ae.sidebarViewport,c&&ae.sidebarViewportHidden),children:[(0,m.jsx)(ee,{sidebar:t,path:l,onCollapse:d,isHidden:c}),c&&(0,m.jsx)(ne,{toggleSidebar:d})]})})})}const se={docMainContainer:"docMainContainer_nuBe",docMainContainerEnhanced:"docMainContainerEnhanced_Zm89",docItemWrapperEnhanced:"docItemWrapperEnhanced_bPdA"};function le(e){let{hiddenSidebarContainer:t,children:n}=e;const a=(0,c.t)();return(0,m.jsx)("main",{className:(0,o.A)(se.docMainContainer,(t||!a)&&se.docMainContainerEnhanced),children:(0,m.jsx)("div",{className:(0,o.A)("container padding-top--md padding-bottom--lg",se.docItemWrapper,t&&se.docItemWrapperEnhanced),children:n})})}const ce={docRoot:"docRoot_ZFaa",docsWrapper:"docsWrapper_bg6R"};function re(e){let{children:t}=e;const n=(0,c.t)(),[o,i]=(0,a.useState)(!1);return(0,m.jsxs)("div",{className:ce.docsWrapper,children:[(0,m.jsx)(b,{}),(0,m.jsxs)("div",{className:ce.docRoot,children:[n&&(0,m.jsx)(ie,{sidebar:n.items,hiddenSidebarContainer:o,setHiddenSidebarContainer:i}),(0,m.jsx)(le,{hiddenSidebarContainer:o,children:t})]})]})}var de=n(4161);function ue(e){const t=(0,l.B5)(e);if(!t)return(0,m.jsx)(de.A,{});const{docElement:n,sidebarName:a,sidebarItems:r}=t;return(0,m.jsx)(i.e3,{className:(0,o.A)(s.G.page.docsDocPage),children:(0,m.jsx)(c.V,{name:a,items:r,children:(0,m.jsx)(re,{children:n})})})}},4161:(e,t,n)=>{n.d(t,{A:()=>l});n(8318);var a=n(6601),o=n(6596),i=n(7632),s=n(9214);function l(e){let{className:t}=e;return(0,s.jsx)("main",{className:(0,a.A)("container margin-vert--xl",t),children:(0,s.jsx)("div",{className:"row",children:(0,s.jsxs)("div",{className:"col col--6 col--offset-3",children:[(0,s.jsx)(i.default,{as:"h1",className:"hero__title",children:(0,s.jsx)(o.A,{id:"theme.NotFound.title",description:"The title of the 404 page",children:"Page Not Found"})}),(0,s.jsx)("p",{children:(0,s.jsx)(o.A,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page",children:"We could not find what you were looking for."})}),(0,s.jsx)("p",{children:(0,s.jsx)(o.A,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page",children:"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."})})]})})})}},2208:(e,t,n)=>{n.d(t,{A:()=>c,G:()=>r});var a=n(8318),o=n(4231),i=n(9214);const s=Symbol("EmptyContext"),l=a.createContext(s);function c(e){let{children:t}=e;const[n,o]=(0,a.useState)(null),s=(0,a.useMemo)((()=>({expandedItem:n,setExpandedItem:o})),[n]);return(0,i.jsx)(l.Provider,{value:s,children:t})}function r(){const e=(0,a.useContext)(l);if(e===s)throw new o.dV("DocSidebarItemsExpandedStateProvider");return e}},6444:(e,t,n)=>{n.d(t,{H:()=>s});var a=n(8318),o=n(6861),i=n(1595);function s(e){let{threshold:t}=e;const[n,s]=(0,a.useState)(!1),l=(0,a.useRef)(!1),{startScroll:c,cancelScroll:r}=(0,o.gk)();return(0,o.Mq)(((e,n)=>{let{scrollY:a}=e;const o=n?.scrollY;o&&(l.current?l.current=!1:a>=o?(r(),s(!1)):a<t?s(!1):a+window.innerHeight<document.documentElement.scrollHeight&&s(!0))})),(0,i.$)((e=>{e.location.hash&&(l.current=!0,s(!1))})),{shown:n,scrollToTop:()=>c(0)}}}}]);