"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[3072],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return m}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},h=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},s=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,h=u(e,["components","mdxType","originalType","parentName"]),s=l(n),m=a,d=s["".concat(c,".").concat(m)]||s[m]||p[m]||r;return n?i.createElement(d,o(o({ref:t},h),{},{components:n})):i.createElement(d,o({ref:t},h))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=s;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var l=2;l<r;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}s.displayName="MDXCreateElement"},2915:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return h},default:function(){return s}});var i=n(7462),a=n(3366),r=(n(7294),n(3905)),o=["components"],u={title:"Authority Management",keywords:["authority-management"],description:"authority-management"},c=void 0,l={unversionedId:"user-guide/admin-usage/authority-management",id:"version-2.4.0/user-guide/admin-usage/authority-management",isDocsHomePage:!1,title:"Authority Management",description:"authority-management",source:"@site/versioned_docs/version-2.4.0/user-guide/admin-usage/authority-management.md",sourceDirName:"user-guide/admin-usage",slug:"/user-guide/admin-usage/authority-management",permalink:"/zh/docs/user-guide/admin-usage/authority-management",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/versioned_docs/version-2.4.0/user-guide/admin-usage/authority-management.md",version:"2.4.0",frontMatter:{title:"Authority Management",keywords:["authority-management"],description:"authority-management"},sidebar:"version-2.4.0/tutorialSidebar",previous:{title:"\u9009\u62e9\u5668\u548c\u89c4\u5219\u7ba1\u7406",permalink:"/zh/docs/user-guide/admin-usage/selector-and-rule"},next:{title:"Admin\u5c5e\u6027\u914d\u7f6e",permalink:"/zh/docs/user-guide/property-config/admin-property-config"}},h=[{value:"Explanation",id:"explanation",children:[]},{value:"Tutorial",id:"tutorial",children:[{value:"First, we can add a piece of authentication information in <code>BasicConfig</code> - <code>Authentication</code>",id:"first-we-can-add-a-piece-of-authentication-information-in-basicconfig---authentication",children:[]},{value:"Then configure this authentication information",id:"then-configure-this-authentication-information",children:[]},{value:"PathOperation",id:"pathoperation",children:[]}]}],p={toc:h};function s(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"explanation"},"Explanation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Manage and control the permissions of requests passing through the Apache ShenYu gateway."),(0,r.kt)("li",{parentName:"ul"},"Generate ",(0,r.kt)("inlineCode",{parentName:"li"},"AK/SK")," and use it with the ",(0,r.kt)("inlineCode",{parentName:"li"},"Sign")," plugin to achieve precise authority control based on URI level.")),(0,r.kt)("h2",{id:"tutorial"},"Tutorial"),(0,r.kt)("h3",{id:"first-we-can-add-a-piece-of-authentication-information-in-basicconfig---authentication"},"First, we can add a piece of authentication information in ",(0,r.kt)("inlineCode",{parentName:"h3"},"BasicConfig")," - ",(0,r.kt)("inlineCode",{parentName:"h3"},"Authentication")),(0,r.kt)("img",{src:"/img/shenyu/basicConfig/authorityManagement/auth_manages_add_en.jpg",width:"100%",height:"70%"}),(0,r.kt)("h3",{id:"then-configure-this-authentication-information"},"Then configure this authentication information"),(0,r.kt)("img",{src:"/img/shenyu/basicConfig/authorityManagement/auth_param_en.jpg",width:"50%",height:"40%"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"AppName\uff1aThe application name associated with this account, it can can fill in or choose (data comes from the application name configured in the Metadata)."),(0,r.kt)("li",{parentName:"ul"},"TelPhone\uff1aTelphone information."),(0,r.kt)("li",{parentName:"ul"},"AppParams\uff1aWhen the requested context path is the same as the AppName\uff0cadd this value to the header, the key is ",(0,r.kt)("inlineCode",{parentName:"li"},"appParam"),"."),(0,r.kt)("li",{parentName:"ul"},"UserId\uff1aGive the user a name, just as an information record."),(0,r.kt)("li",{parentName:"ul"},"ExpandInfo\uff1aDescription of the account."),(0,r.kt)("li",{parentName:"ul"},"PathAuth\uff1aAfter opening, the account only allows access to the resource path configured below."),(0,r.kt)("li",{parentName:"ul"},"ResourcePath\uff1aAllow access to the resource path, support path matching\uff0ce.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"/order/**")," .")),(0,r.kt)("p",null,"After submit, a piece of authentication information is generated, which contains ",(0,r.kt)("inlineCode",{parentName:"p"},"AppKey")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"AppSecret"),", which is the ",(0,r.kt)("inlineCode",{parentName:"p"},"AK/SK")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Sign")," plugin."),(0,r.kt)("p",null,"Please refer to the detailed instructions of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Sign")," plugin\uff1a ",(0,r.kt)("a",{parentName:"p",href:"../../plugin-center/authority-and-certification/sign-plugin"},"Sign Plugin"),"."),(0,r.kt)("h3",{id:"pathoperation"},"PathOperation"),(0,r.kt)("p",null,"For the created authentication information, you can click ",(0,r.kt)("inlineCode",{parentName:"p"},"PathOperation")," at the end of a piece of authentication information."),(0,r.kt)("img",{src:"/img/shenyu/basicConfig/authorityManagement/auth_manage_modifyPath_en.jpg",width:"90%",height:"80%"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"On the left is a list of configurable paths, and on the right is a list of paths that allow the account to access."),(0,r.kt)("li",{parentName:"ul"},"Check the resource path, click the ",(0,r.kt)("inlineCode",{parentName:"li"},">")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"<")," in the middle to move the checked data to the corresponding list."),(0,r.kt)("li",{parentName:"ul"},'In the list of configurable paths on the left, click "Editor" at the end of the account information line, and add them in the "Resource Path" in the pop-up box.')))}s.isMDXComponent=!0}}]);