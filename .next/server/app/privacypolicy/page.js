(()=>{var e={};e.id=7743,e.ids=[7743],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},71017:e=>{"use strict";e.exports=require("path")},57310:e=>{"use strict";e.exports=require("url")},42238:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>o.a,__next_app__:()=>m,originalPathname:()=>p,pages:()=>c,routeModule:()=>d,tree:()=>u});var r=s(67096),i=s(16132),a=s(37284),o=s.n(a),n=s(32564),l={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>n[e]);s.d(t,l);let u=["",{children:["privacypolicy",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,86565)),"/Users/shuvamkhajuria/Desktop/velonnawebsite/src/app/privacypolicy/page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,72087)),"/Users/shuvamkhajuria/Desktop/velonnawebsite/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(s.bind(s,3936)),"/Users/shuvamkhajuria/Desktop/velonnawebsite/src/app/not-found.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["/Users/shuvamkhajuria/Desktop/velonnawebsite/src/app/privacypolicy/page.tsx"],p="/privacypolicy/page",m={require:s,loadChunk:()=>Promise.resolve()},d=new r.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/privacypolicy/page",pathname:"/privacypolicy",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:u}})},18867:(e,t,s)=>{Promise.resolve().then(s.bind(s,68140)),Promise.resolve().then(s.bind(s,25333)),Promise.resolve().then(s.bind(s,42291))},43292:(e,t)=>{"use strict";var s;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){var r={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var s=arguments[t];if(s){var a=typeof s;if("string"===a||"number"===a)e.push(s);else if(Array.isArray(s)){if(s.length){var o=i.apply(null,s);o&&e.push(o)}}else if("object"===a){if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]")){e.push(s.toString());continue}for(var n in s)r.call(s,n)&&s[n]&&e.push(n)}}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0!==(s=(function(){return i}).apply(t,[]))&&(e.exports=s)}()},68140:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>c,useCol:()=>l});var r=s(43292),i=s.n(r),a=s(34218),o=s(28847),n=s(53854);function l({as:e,bsPrefix:t,className:s,...r}){t=(0,o.vE)(t,"col");let a=(0,o.pi)(),n=(0,o.zG)(),l=[],u=[];return a.forEach(e=>{let s,i,a;let o=r[e];delete r[e],"object"==typeof o&&null!=o?{span:s,offset:i,order:a}=o:s=o;let c=e!==n?`-${e}`:"";s&&l.push(!0===s?`${t}${c}`:`${t}${c}-${s}`),null!=a&&u.push(`order${c}-${a}`),null!=i&&u.push(`offset${c}-${i}`)}),[{...r,className:i()(s,...l,...u)},{as:e,bsPrefix:t,spans:l}]}let u=a.forwardRef((e,t)=>{let[{className:s,...r},{as:a="div",bsPrefix:o,spans:u}]=l(e);return(0,n.jsx)(a,{...r,ref:t,className:i()(s,!u.length&&o)})});u.displayName="Col";let c=u},25333:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>u});var r=s(43292),i=s.n(r),a=s(34218),o=s(28847),n=s(53854);let l=a.forwardRef(({bsPrefix:e,fluid:t=!1,as:s="div",className:r,...a},l)=>{let u=(0,o.vE)(e,"container"),c="string"==typeof t?`-${t}`:"-fluid";return(0,n.jsx)(s,{ref:l,...a,className:i()(r,t?`${u}${c}`:u)})});l.displayName="Container";let u=l},42291:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>u});var r=s(43292),i=s.n(r),a=s(34218),o=s(28847),n=s(53854);let l=a.forwardRef(({bsPrefix:e,className:t,as:s="div",...r},a)=>{let l=(0,o.vE)(e,"row"),u=(0,o.pi)(),c=(0,o.zG)(),p=`${l}-cols`,m=[];return u.forEach(e=>{let t;let s=r[e];delete r[e],null!=s&&"object"==typeof s?{cols:t}=s:t=s;let i=e!==c?`-${e}`:"";null!=t&&m.push(`${p}${i}-${t}`)}),(0,n.jsx)(s,{ref:a,...r,className:i()(t,l,...m)})});l.displayName="Row";let u=l},28847:(e,t,s)=>{"use strict";s.d(t,{pi:()=>l,vE:()=>n,zG:()=>u});var r=s(34218);s(53854);let i=r.createContext({prefixes:{},breakpoints:["xxl","xl","lg","md","sm","xs"],minBreakpoint:"xs"}),{Consumer:a,Provider:o}=i;function n(e,t){let{prefixes:s}=(0,r.useContext)(i);return e||s[t]||t}function l(){let{breakpoints:e}=(0,r.useContext)(i);return e}function u(){let{minBreakpoint:e}=(0,r.useContext)(i);return e}},40489:(e,t,s)=>{"use strict";s.d(t,{ZP:()=>l});var r=s(95153);let i=(0,r.createProxy)(String.raw`/Users/shuvamkhajuria/Desktop/velonnawebsite/node_modules/react-bootstrap/esm/Col.js`),{__esModule:a,$$typeof:o}=i,n=i.default;(0,r.createProxy)(String.raw`/Users/shuvamkhajuria/Desktop/velonnawebsite/node_modules/react-bootstrap/esm/Col.js#useCol`);let l=n},19696:(e,t,s)=>{"use strict";s.d(t,{ZP:()=>l});var r=s(95153);let i=(0,r.createProxy)(String.raw`/Users/shuvamkhajuria/Desktop/velonnawebsite/node_modules/react-bootstrap/esm/Container.js`),{__esModule:a,$$typeof:o}=i,n=i.default,l=n},797:(e,t,s)=>{"use strict";s.d(t,{ZP:()=>l});var r=s(95153);let i=(0,r.createProxy)(String.raw`/Users/shuvamkhajuria/Desktop/velonnawebsite/node_modules/react-bootstrap/esm/Row.js`),{__esModule:a,$$typeof:o}=i,n=i.default,l=n},86565:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>n});var r=s(4656);s(3542);var i=s(40489),a=s(19696),o=s(797);s(62245);let n=()=>r.jsx("section",{className:"ezy__about11_Kfxl1SBn",id:"ezy__about11_Kfxl1SBn",children:r.jsx(a.ZP,{children:(0,r.jsxs)(o.ZP,{className:"justify-content-center align-items-center",children:[r.jsx(i.ZP,{xs:12,lg:5,className:"mb-5 mb-lg-0",children:(0,r.jsxs)("div",{className:"text-center",children:[r.jsx("p",{className:"opacity-75",children:"TEMPLATE OF EASYFRONTEND"}),(0,r.jsxs)("h1",{className:"ezy__about11_Kfxl1SBn-heading",children:["DESIGN & ",r.jsx("span",{className:"fw-bold",children:"PASSION"}),r.jsx("span",{className:"ezy__about11_Kfxl1SBn-dot ms-2"})]}),r.jsx("p",{className:"ezy__about11_Kfxl1SBn-sub-heading mt-3 mb-4",children:"Completely network collaborative web services via user-centric initiatives. Quickly promote sticky testing procedures collaborator before unique process improvements."}),r.jsx("p",{className:"opacity-50 small mb-0 mx-lg-5",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, sunt dignissimos veritatis possimus assumenda libero officiis accusamus ipsum blanditiis."})]})}),r.jsx(i.ZP,{xs:12,lg:6,children:(0,r.jsxs)("div",{className:"ms-lg-5",children:[(0,r.jsxs)("p",{className:"opacity-75 mb-3",children:[r.jsx("span",{className:"ezy__about11_Kfxl1SBn-highlighted",children:"W"}),"eb services via user-centric initiatives. Quickly promote sticky testing procedures before unique process improvements. Distinctively engineer innovative information whereas revolutionary process improvements. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia enim omnis saepe dolor voluptatum."]}),r.jsx("p",{className:"opacity-75 mb-3",children:"Distinctively engineer innovative information whereas revolutionary process improvements. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia enim omnis saepe dolor voluptatum. Natus soluta maxime ipsum nam sapiente dignissimos voluptatum totam."}),r.jsx("p",{className:"opacity-75",children:"Completely network collaborative web services via user-centric initiatives. Quickly promote sticky testing procedures before unique process improvements. Distinctively engineer innovative information whereas revolutionary process improvements. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia enim omnis saepe dolor voluptatum. Natus soluta maxime ipsum nam sapiente dignissimos voluptatum totam. Ratione atque dolorum nostrum a est voluptatibus."})]})})]})})})},62245:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[3271,6094,7080],()=>s(42238));module.exports=r})();