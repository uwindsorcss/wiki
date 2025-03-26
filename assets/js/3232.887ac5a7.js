"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([["3232"],{3772:function(e,t,n){n.d(t,{Z:()=>f});var s=n("6773");n("1699");var i=n("4461"),l=n("7308"),a=n("7558");function r(){return(0,s.jsx)(l.Z,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function o(){return(0,s.jsx)(l.Z,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,s.jsx)(a.Z,{children:(0,s.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function d(){return(0,s.jsx)(l.Z,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function u(){return(0,s.jsx)(l.Z,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}var m=n("519"),h=n("3314");function b(e){let{className:t}=e;return(0,s.jsx)(h.Z,{type:"caution",title:(0,s.jsx)(d,{}),className:(0,i.Z)(t,m.k.common.draftBanner),children:(0,s.jsx)(u,{})})}function x(e){let{className:t}=e;return(0,s.jsx)(h.Z,{type:"caution",title:(0,s.jsx)(r,{}),className:(0,i.Z)(t,m.k.common.unlistedBanner),children:(0,s.jsx)(o,{})})}function v(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c,{}),(0,s.jsx)(x,{...e})]})}function f(e){let{metadata:t}=e,{unlisted:n,frontMatter:i}=t;return(0,s.jsxs)(s.Fragment,{children:[(n||i.unlisted)&&(0,s.jsx)(v,{}),i.draft&&(0,s.jsx)(b,{})]})}},8105:function(e,t,n){n.r(t),n.d(t,{default:()=>et});var s=n("6773"),i=n("1699"),l=n("3792"),a=n("8401");let r=i.createContext(null);function o(e){let{children:t,content:n}=e,l=(0,i.useMemo)(()=>({metadata:n.metadata,frontMatter:n.frontMatter,assets:n.assets,contentTitle:n.contentTitle,toc:n.toc}),[n]);return(0,s.jsx)(r.Provider,{value:l,children:t})}function c(){let e=(0,i.useContext)(r);if(null===e)throw new a.i6("DocProvider");return e}function d(){let{metadata:e,frontMatter:t,assets:n}=c();return(0,s.jsx)(l.d,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var u=n("4461"),m=n("1227"),h=n("7308"),b=n("7686");function x(e){let{previous:t,next:n}=e;return(0,s.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,h.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,s.jsx)(b.Z,{...t,subLabel:(0,s.jsx)(h.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),n&&(0,s.jsx)(b.Z,{...n,subLabel:(0,s.jsx)(h.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}function v(){let{metadata:e}=c();return(0,s.jsx)(x,{previous:e.previous,next:e.next})}var f=n("7181"),p=n("6973"),j=n("5368"),g=n("519"),C=n("9375"),Z=n("8090");let _={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,s.jsx)(h.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,s.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,s.jsx)(h.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,s.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function L(e){let t=_[e.versionMetadata.banner];return(0,s.jsx)(t,{...e})}function N(e){let{versionLabel:t,to:n,onClick:i}=e;return(0,s.jsx)(h.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,s.jsx)("b",{children:(0,s.jsx)(p.Z,{to:n,onClick:i,children:(0,s.jsx)(h.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function k(e){let{className:t,versionMetadata:n}=e,{siteConfig:{title:i}}=(0,f.Z)(),{pluginId:l}=(0,j.gA)({failfast:!0}),{savePreferredVersionName:a}=(0,C.J)(l),{latestDocSuggestion:r,latestVersionSuggestion:o}=(0,j.Jo)(l),c=r??o.docs.find(e=>e.id===o.mainDocId);return(0,s.jsxs)("div",{className:(0,u.Z)(t,g.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,s.jsx)("div",{children:(0,s.jsx)(L,{siteTitle:i,versionMetadata:n})}),(0,s.jsx)("div",{className:"margin-top--md",children:(0,s.jsx)(N,{versionLabel:o.label,to:c.path,onClick:()=>a(o.name)})})]})}function T(e){let{className:t}=e,n=(0,Z.E)();return n.banner?(0,s.jsx)(k,{className:t,versionMetadata:n}):null}function y(e){let{className:t}=e,n=(0,Z.E)();return n.badge?(0,s.jsx)("span",{className:(0,u.Z)(t,g.k.docs.docVersionBadge,"badge badge--secondary"),children:(0,s.jsx)(h.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}var w=n("952"),B=n("5066");function E(){let{metadata:e}=c(),{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:i,tags:l}=e,a=l.length>0,r=!!(t||n||i);return a||r?(0,s.jsxs)("footer",{className:(0,u.Z)(g.k.docs.docFooter,"docusaurus-mt-lg"),children:[a&&(0,s.jsx)("div",{className:(0,u.Z)("row margin-top--sm",g.k.docs.docFooterTagsRow),children:(0,s.jsx)("div",{className:"col",children:(0,s.jsx)(w.Z,{tags:l})})}),r&&(0,s.jsx)(B.Z,{className:(0,u.Z)("margin-top--sm",g.k.docs.docFooterEditMetaRow),editUrl:t,lastUpdatedAt:n,lastUpdatedBy:i})]}):null}var I=n("5486"),M=n("5181");let A={tocCollapsibleButton:"tocCollapsibleButton_DAvD",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_ha9_"};function H(e){let{collapsed:t,...n}=e;return(0,s.jsx)("button",{type:"button",...n,className:(0,u.Z)("clean-btn",A.tocCollapsibleButton,!t&&A.tocCollapsibleButtonExpanded,n.className),children:(0,s.jsx)(h.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}let V={tocCollapsible:"tocCollapsible_LPsz",tocCollapsibleContent:"tocCollapsibleContent_rnNn",tocCollapsibleExpanded:"tocCollapsibleExpanded_bhpF"};function O(e){let{toc:t,className:n,minHeadingLevel:i,maxHeadingLevel:l}=e,{collapsed:a,toggleCollapsed:r}=(0,I.u)({initialState:!0});return(0,s.jsxs)("div",{className:(0,u.Z)(V.tocCollapsible,!a&&V.tocCollapsibleExpanded,n),children:[(0,s.jsx)(H,{collapsed:a,onClick:r}),(0,s.jsx)(I.z,{lazy:!0,className:V.tocCollapsibleContent,collapsed:a,children:(0,s.jsx)(M.Z,{toc:t,minHeadingLevel:i,maxHeadingLevel:l})})]})}function P(){let{toc:e,frontMatter:t}=c();return(0,s.jsx)(O,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,u.Z)(g.k.docs.docTocMobile,"tocMobile_CtR1")})}var R=n("3746");function S(){let{toc:e,frontMatter:t}=c();return(0,s.jsx)(R.Z,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:g.k.docs.docTocDesktop})}var D=n("2810"),F=n("5717");function z(e){let{children:t}=e,n=function(){let{metadata:e,frontMatter:t,contentTitle:n}=c();return t.hide_title||void 0!==n?null:e.title}();return(0,s.jsxs)("div",{className:(0,u.Z)(g.k.docs.docMarkdown,"markdown"),children:[n&&(0,s.jsx)("header",{children:(0,s.jsx)(D.Z,{as:"h1",children:n})}),(0,s.jsx)(F.Z,{children:t})]})}var U=n("6323"),$=n("2427"),q=n("6154");function J(e){return(0,s.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,s.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}function K(){let e=(0,q.ZP)("/");return(0,s.jsx)("li",{className:"breadcrumbs__item",children:(0,s.jsx)(p.Z,{"aria-label":(0,h.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,s.jsx)(J,{className:"breadcrumbHomeIcon_f5yl"})})})}function G(e){let{children:t,href:n,isLast:i}=e,l="breadcrumbs__link";return i?(0,s.jsx)("span",{className:l,itemProp:"name",children:t}):n?(0,s.jsx)(p.Z,{className:l,href:n,itemProp:"item",children:(0,s.jsx)("span",{itemProp:"name",children:t})}):(0,s.jsx)("span",{className:l,children:t})}function W(e){let{children:t,active:n,index:i,addMicrodata:l}=e;return(0,s.jsxs)("li",{...l&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,u.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[t,(0,s.jsx)("meta",{itemProp:"position",content:String(i+1)})]})}function Q(){let e=(0,U.s1)(),t=(0,$.Ns)();return e?(0,s.jsx)("nav",{className:(0,u.Z)(g.k.docs.docBreadcrumbs,"breadcrumbsContainer_Lynm"),"aria-label":(0,h.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,s.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,s.jsx)(K,{}),e.map((t,n)=>{let i=n===e.length-1,l="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,s.jsx)(W,{active:i,index:n,addMicrodata:!!l,children:(0,s.jsx)(G,{href:l,isLast:i,children:t.label})},n)})]})}):null}var X=n("3772");let Y={docItemContainer:"docItemContainer_KZDm",docItemCol:"docItemCol_mO_C"};function ee(e){let{children:t}=e,n=function(){let{frontMatter:e,toc:t}=c(),n=(0,m.i)(),i=e.hide_table_of_contents,l=!i&&t.length>0;return{hidden:i,mobile:l?(0,s.jsx)(P,{}):void 0,desktop:l&&("desktop"===n||"ssr"===n)?(0,s.jsx)(S,{}):void 0}}(),{metadata:i}=c();return(0,s.jsxs)("div",{className:"row",children:[(0,s.jsxs)("div",{className:(0,u.Z)("col",!n.hidden&&Y.docItemCol),children:[(0,s.jsx)(X.Z,{metadata:i}),(0,s.jsx)(T,{}),(0,s.jsxs)("div",{className:Y.docItemContainer,children:[(0,s.jsxs)("article",{children:[(0,s.jsx)(Q,{}),(0,s.jsx)(y,{}),n.mobile,(0,s.jsx)(z,{children:t}),(0,s.jsx)(E,{})]}),(0,s.jsx)(v,{})]})]}),n.desktop&&(0,s.jsx)("div",{className:"col col--3",children:n.desktop})]})}function et(e){let t=`docs-doc-id-${e.content.metadata.id}`,n=e.content;return(0,s.jsx)(o,{content:e.content,children:(0,s.jsxs)(l.FG,{className:t,children:[(0,s.jsx)(d,{}),(0,s.jsx)(ee,{children:(0,s.jsx)(n,{})})]})})}},3746:function(e,t,n){n.d(t,{Z:()=>a});var s=n("6773");n("1699");var i=n("4461"),l=n("5181");function a(e){let{className:t,...n}=e;return(0,s.jsx)("div",{className:(0,i.Z)("tableOfContents_WKhE","thin-scrollbar",t),children:(0,s.jsx)(l.Z,{...n,linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})})}},5181:function(e,t,n){n.d(t,{Z:()=>c});var s=n("6773"),i=n("1699"),l=n("101");function a(e){let t=e.getBoundingClientRect();return t.top===t.bottom?a(e.parentNode):t}var r=n("6973");let o=i.memo(function e(t){let{toc:n,className:i,linkClassName:l,isChild:a}=t;return n.length?(0,s.jsx)("ul",{className:a?void 0:i,children:n.map(t=>(0,s.jsxs)("li",{children:[(0,s.jsx)(r.Z,{to:`#${t.id}`,className:l??void 0,dangerouslySetInnerHTML:{__html:t.value}}),(0,s.jsx)(e,{isChild:!0,toc:t.children,className:i,linkClassName:l})]},t.id))}):null});function c(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:r="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:d,maxHeadingLevel:u,...m}=e,h=(0,l.L)(),b=d??h.tableOfContents.minHeadingLevel,x=u??h.tableOfContents.maxHeadingLevel,v=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:s}=e;return(0,i.useMemo)(()=>(function e(t){let{toc:n,minHeadingLevel:s,maxHeadingLevel:i}=t;return n.flatMap(t=>{let n=e({toc:t.children,minHeadingLevel:s,maxHeadingLevel:i});return t.level>=s&&t.level<=i?[{...t,children:n}]:n})})({toc:function(e){let t=e.map(e=>({...e,parentIndex:-1,children:[]})),n=Array(7).fill(-1);t.forEach((e,t)=>{let s=n.slice(2,e.level);e.parentIndex=Math.max(...s),n[e.level]=t});let s=[];return t.forEach(e=>{let{parentIndex:n,...i}=e;n>=0?t[n].children.push(i):s.push(i)}),s}(t),minHeadingLevel:n,maxHeadingLevel:s}),[t,n,s])}({toc:t,minHeadingLevel:b,maxHeadingLevel:x});return!function(e){let t=(0,i.useRef)(void 0),n=function(){let e=(0,i.useRef)(0),{navbar:{hideOnScroll:t}}=(0,l.L)();return(0,i.useEffect)(()=>{e.current=t?0:document.querySelector(".navbar").clientHeight},[t]),e}();(0,i.useEffect)(()=>{if(!e)return()=>{};let{linkClassName:s,linkActiveClassName:i,minHeadingLevel:l,maxHeadingLevel:r}=e;function o(){let e=Array.from(document.getElementsByClassName(s)),o=function(e,t){let{anchorTopOffset:n}=t,s=e.find(e=>a(e).top>=n);if(s){var i;return(i=a(s)).top>0&&i.bottom<window.innerHeight/2?s:e[e.indexOf(s)-1]??null}return e[e.length-1]??null}(function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e,s=[];for(let e=t;e<=n;e+=1)s.push(`h${e}.anchor`);return Array.from(document.querySelectorAll(s.join()))}({minHeadingLevel:l,maxHeadingLevel:r}),{anchorTopOffset:n.current}),c=e.find(e=>o&&o.id===decodeURIComponent(e.href.substring(e.href.indexOf("#")+1)));e.forEach(e=>{e===c?(t.current&&t.current!==e&&t.current.classList.remove(i),e.classList.add(i),t.current=e):e.classList.remove(i)})}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}},[e,n])}((0,i.useMemo)(()=>{if(r&&c)return{linkClassName:r,linkActiveClassName:c,minHeadingLevel:b,maxHeadingLevel:x}},[r,c,b,x])),(0,s.jsx)(o,{toc:v,className:n,linkClassName:r,...m})}}}]);