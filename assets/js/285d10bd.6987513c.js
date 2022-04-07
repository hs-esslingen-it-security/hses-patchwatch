"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[89],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=u(n),h=a,d=f["".concat(s,".").concat(h)]||f[h]||p[h]||i;return n?r.createElement(d,o(o({ref:t},l),{},{components:n})):r.createElement(d,o({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1107:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],c={id:"cpe-matching",title:"CPE Matching",sidebar_position:4},s=void 0,u={unversionedId:"cpe-matching",id:"cpe-matching",title:"CPE Matching",description:"After the initial banner grabbing we proceed to match banners to CPEs, which help us to identify software products and their versions in a well structured way. This is a challenge since the banners vary in structure and content. While some banners might provide us with full information about the used product, software and even",source:"@site/docs/cpe-matching.md",sourceDirName:".",slug:"/cpe-matching",permalink:"/hses-patchwatch/cpe-matching",editUrl:"https://github.com/hs-esslingen-it-security/hses-patchwatch/docs/cpe-matching.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"cpe-matching",title:"CPE Matching",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Banner Grabbing",permalink:"/hses-patchwatch/banner-grabbing"},next:{title:"Software Status Matching",permalink:"/hses-patchwatch/software-status"}},l={},p=[],f={toc:p};function h(e){var t=e.components,c=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},f,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"After the initial banner grabbing we proceed to match banners to CPEs, which help us to identify software products and their versions in a well structured way. This is a challenge since the banners vary in structure and content. While some banners might provide us with full information about the used product, software and even\noperating systems, others might only reveal the product itself."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"cpe-matching",src:n(5239).Z,width:"288",height:"296"})),(0,i.kt)("p",null,"We use regular expressions (regex) to identify the parts of the banner that indicate product and version information. A\nregex defines a desired structure of a string and extracts substrings (e.g., a version in the format of aa.bb.cc with aa as major, bb as minor and cc as bugfix number). If a regex did not match a defined format, our tool continues with the next regex. The creation of the regex definitions requires manual analysis of the collected banners."),(0,i.kt)("p",null,"An example for such an regex is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-regex"},"220-FileZilla Server (?:version)?\\s?([0-9])\\.([0-9])\\.([0-9]*)\n")),(0,i.kt)("p",null,"This regex matches a banner in the form of:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-txt"},"220-FileZilla Server 0.9.60 beta\\r\\n220-written by Tim Kosse\n")),(0,i.kt)("p",null,"Depending on the banner structure, we can extract information about the product itself, its version, build dates and information about the operators or owners of the service. The extracted information in this case is the version number (0.9.60 beta)."),(0,i.kt)("p",null,"Based on the extracted infos we can now generate e CPE, for our example it would look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-txt"},"cpe:2.3:a:filezilla-project:filezilla_server:0.9.60:beta:*:*:*:*:*:*\n")))}h.isMDXComponent=!0},5239:function(e,t,n){t.Z=n.p+"assets/images/cpeMatching-c85662b33a575ba725a942e41efe9216.png"}}]);