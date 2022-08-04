"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[518],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>g});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),f=l(r),g=i,d=f["".concat(p,".").concat(g)]||f[g]||u[g]||o;return r?n.createElement(d,c(c({ref:t},s),{},{components:r})):n.createElement(d,c({ref:t},s))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,c=new Array(o);c[0]=f;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:i,c[1]=a;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8016:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var n=r(7462),i=(r(7294),r(3905));const o={id:"prettier-config",sidebar_position:3},c="@actinc/prettier-config",a={unversionedId:"prettier-config/prettier-config",id:"prettier-config/prettier-config",title:"@actinc/prettier-config",description:"A common set of prettier configuration values to be used by ACT projects.",source:"@site/docs/prettier-config/prettier-config.md",sourceDirName:"prettier-config",slug:"/prettier-config/",permalink:"/configs/docs/prettier-config/",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"prettier-config",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"typescript",permalink:"/configs/docs/eslint-plugin/typescript"},next:{title:"config",permalink:"/configs/docs/prettier-config/config"}},p={},l=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:3}],s={toc:l};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"actincprettier-config"},"@actinc/prettier-config"),(0,i.kt)("p",null,"A common set of prettier configuration values to be used by ACT projects."),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save-dev @actinc/prettier-config\n")),(0,i.kt)("h3",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Add this to your package.json file"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"prettier": "@actinc/prettier-config",\n')),(0,i.kt)("p",null,"OR"),(0,i.kt)("p",null,"If you need more fine grained control"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"echo \"module.exports = {...require('@actinc/prettier-config')};\" > .prettierrc.js\n")))}u.isMDXComponent=!0}}]);