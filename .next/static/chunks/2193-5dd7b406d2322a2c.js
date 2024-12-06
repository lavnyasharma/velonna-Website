(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2193],{4033:function(e,t,r){e.exports=r(94)},6887:function(e,t,r){"use strict";r.d(t,{R:function(){return Y}});var o,n,i,a,l,s=r(2265),u=r(2769),c=r(5606),d=r(2600),p=r(1858);function f(e,t){let[r,o]=(0,s.useState)(e),n=(0,p.E)(e);return(0,d.e)(()=>o(n.current),[n,o,...t]),r}var b=r(6618),v=r(1931),m=r(597),g=r(5390),x=r(3850),h=((o=h||{})[o.First=0]="First",o[o.Previous=1]="Previous",o[o.Next=2]="Next",o[o.Last=3]="Last",o[o.Specific=4]="Specific",o[o.Nothing=5]="Nothing",o),y=r(5863),R=r(5410),O=r(5306),w=r(8076),E=r(583),S=r(8227),I=r(8871),L=r(4851),T=r(2950),D=r(841);function k(e){return[e.screenX,e.screenY]}let C=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function P(e){var t,r;let o=null!=(t=e.innerText)?t:"",n=e.cloneNode(!0);if(!(n instanceof HTMLElement))return o;let i=!1;for(let e of n.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))e.remove(),i=!0;let a=i?null!=(r=n.innerText)?r:"":o;return C.test(a)&&(a=a.replace(C,"")),a}var z=((n=z||{})[n.Open=0]="Open",n[n.Closed=1]="Closed",n),M=((i=M||{})[i.Single=0]="Single",i[i.Multi=1]="Multi",i),F=((a=F||{})[a.Pointer=0]="Pointer",a[a.Other=1]="Other",a),A=((l=A||{})[l.OpenListbox=0]="OpenListbox",l[l.CloseListbox=1]="CloseListbox",l[l.GoToOption=2]="GoToOption",l[l.Search=3]="Search",l[l.ClearSearch=4]="ClearSearch",l[l.RegisterOption=5]="RegisterOption",l[l.UnregisterOption=6]="UnregisterOption",l[l.RegisterLabel=7]="RegisterLabel",l);function N(e,t=e=>e){let r=null!==e.activeOptionIndex?e.options[e.activeOptionIndex]:null,o=(0,R.z2)(t(e.options.slice()),e=>e.dataRef.current.domRef.current),n=r?o.indexOf(r):null;return -1===n&&(n=null),{options:o,activeOptionIndex:n}}let $={1:e=>e.dataRef.current.disabled||1===e.listboxState?e:{...e,activeOptionIndex:null,listboxState:1},0(e){if(e.dataRef.current.disabled||0===e.listboxState)return e;let t=e.activeOptionIndex,{isSelected:r}=e.dataRef.current,o=e.options.findIndex(e=>r(e.dataRef.current.value));return -1!==o&&(t=o),{...e,listboxState:0,activeOptionIndex:t}},2(e,t){var r;if(e.dataRef.current.disabled||1===e.listboxState)return e;let o=N(e),n=function(e,t){let r=t.resolveItems();if(r.length<=0)return null;let o=t.resolveActiveIndex(),n=null!=o?o:-1,i=(()=>{switch(e.focus){case 0:return r.findIndex(e=>!t.resolveDisabled(e));case 1:{let e=r.slice().reverse().findIndex((e,r,o)=>(-1===n||!(o.length-r-1>=n))&&!t.resolveDisabled(e));return -1===e?e:r.length-1-e}case 2:return r.findIndex((e,r)=>!(r<=n)&&!t.resolveDisabled(e));case 3:{let e=r.slice().reverse().findIndex(e=>!t.resolveDisabled(e));return -1===e?e:r.length-1-e}case 4:return r.findIndex(r=>t.resolveId(r)===e.id);case 5:return null;default:!function(e){throw Error("Unexpected object: "+e)}(e)}})();return -1===i?o:i}(t,{resolveItems:()=>o.options,resolveActiveIndex:()=>o.activeOptionIndex,resolveId:e=>e.id,resolveDisabled:e=>e.dataRef.current.disabled});return{...e,...o,searchQuery:"",activeOptionIndex:n,activationTrigger:null!=(r=t.trigger)?r:1}},3:(e,t)=>{if(e.dataRef.current.disabled||1===e.listboxState)return e;let r=""!==e.searchQuery?0:1,o=e.searchQuery+t.value.toLowerCase(),n=(null!==e.activeOptionIndex?e.options.slice(e.activeOptionIndex+r).concat(e.options.slice(0,e.activeOptionIndex+r)):e.options).find(e=>{var t;return!e.dataRef.current.disabled&&(null==(t=e.dataRef.current.textValue)?void 0:t.startsWith(o))}),i=n?e.options.indexOf(n):-1;return -1===i||i===e.activeOptionIndex?{...e,searchQuery:o}:{...e,searchQuery:o,activeOptionIndex:i,activationTrigger:1}},4:e=>e.dataRef.current.disabled||1===e.listboxState||""===e.searchQuery?e:{...e,searchQuery:""},5:(e,t)=>{let r={id:t.id,dataRef:t.dataRef},o=N(e,e=>[...e,r]);return null===e.activeOptionIndex&&e.dataRef.current.isSelected(t.dataRef.current.value)&&(o.activeOptionIndex=o.options.indexOf(r)),{...e,...o}},6:(e,t)=>{let r=N(e,e=>{let r=e.findIndex(e=>e.id===t.id);return -1!==r&&e.splice(r,1),e});return{...e,...r,activationTrigger:1}},7:(e,t)=>({...e,labelId:t.id})},j=(0,s.createContext)(null);function B(e){let t=(0,s.useContext)(j);if(null===t){let t=Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,B),t}return t}j.displayName="ListboxActionsContext";let V=(0,s.createContext)(null);function Q(e){let t=(0,s.useContext)(V);if(null===t){let t=Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,Q),t}return t}function U(e,t){return(0,m.E)(t.type,$,e,t)}V.displayName="ListboxDataContext";let H=s.Fragment,_=v.AN.RenderStrategy|v.AN.Static,Y=Object.assign((0,v.yV)(function(e,t){let{value:r,defaultValue:o,form:n,name:i,onChange:a,by:l=(e,t)=>e===t,disabled:c=!1,horizontal:p=!1,multiple:f=!1,...g}=e,x=p?"horizontal":"vertical",y=(0,b.T)(t),[w=f?[]:void 0,L]=(0,D.q)(r,a,o),[k,C]=(0,s.useReducer)(U,{dataRef:(0,s.createRef)(),listboxState:1,options:[],searchQuery:"",labelId:null,activeOptionIndex:null,activationTrigger:1}),P=(0,s.useRef)({static:!1,hold:!1}),z=(0,s.useRef)(null),M=(0,s.useRef)(null),F=(0,s.useRef)(null),A=(0,T.z)("string"==typeof l?(e,t)=>(null==e?void 0:e[l])===(null==t?void 0:t[l]):l),N=(0,s.useCallback)(e=>(0,m.E)($.mode,{1:()=>w.some(t=>A(t,e)),0:()=>A(w,e)}),[w]),$=(0,s.useMemo)(()=>({...k,value:w,disabled:c,mode:f?1:0,orientation:x,compare:A,isSelected:N,optionsPropsRef:P,labelRef:z,buttonRef:M,optionsRef:F}),[w,c,f,k]);(0,d.e)(()=>{k.dataRef.current=$},[$]),(0,E.O)([$.buttonRef,$.optionsRef],(e,t)=>{var r;C({type:1}),(0,R.sP)(t,R.tJ.Loose)||(e.preventDefault(),null==(r=$.buttonRef.current)||r.focus())},0===$.listboxState);let B=(0,s.useMemo)(()=>({open:0===$.listboxState,disabled:c,value:w}),[$,c,w]),Q=(0,T.z)(e=>{let t=$.options.find(t=>t.id===e);t&&J(t.dataRef.current.value)}),_=(0,T.z)(()=>{if(null!==$.activeOptionIndex){let{dataRef:e,id:t}=$.options[$.activeOptionIndex];J(e.current.value),C({type:2,focus:h.Specific,id:t})}}),Y=(0,T.z)(()=>C({type:0})),Z=(0,T.z)(()=>C({type:1})),G=(0,T.z)((e,t,r)=>e===h.Specific?C({type:2,focus:h.Specific,id:t,trigger:r}):C({type:2,focus:e,trigger:r})),q=(0,T.z)((e,t)=>(C({type:5,id:e,dataRef:t}),()=>C({type:6,id:e}))),K=(0,T.z)(e=>(C({type:7,id:e}),()=>C({type:7,id:null}))),J=(0,T.z)(e=>(0,m.E)($.mode,{0:()=>null==L?void 0:L(e),1(){let t=$.value.slice(),r=t.findIndex(t=>A(t,e));return -1===r?t.push(e):t.splice(r,1),null==L?void 0:L(t)}})),W=(0,T.z)(e=>C({type:3,value:e})),X=(0,T.z)(()=>C({type:4})),ee=(0,s.useMemo)(()=>({onChange:J,registerOption:q,registerLabel:K,goToOption:G,closeListbox:Z,openListbox:Y,selectActiveOption:_,selectOption:Q,search:W,clearSearch:X}),[]),et=(0,s.useRef)(null),er=(0,u.G)();return(0,s.useEffect)(()=>{et.current&&void 0!==o&&er.addEventListener(et.current,"reset",()=>{null==L||L(o)})},[et,L]),s.createElement(j.Provider,{value:ee},s.createElement(V.Provider,{value:$},s.createElement(O.up,{value:(0,m.E)($.listboxState,{0:O.ZM.Open,1:O.ZM.Closed})},null!=i&&null!=w&&(0,I.t)({[i]:w}).map(([e,t],r)=>s.createElement(S._,{features:S.A.Hidden,ref:0===r?e=>{var t;et.current=null!=(t=null==e?void 0:e.closest("form"))?t:null}:void 0,...(0,v.oA)({key:e,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:n,name:e,value:t})})),(0,v.sY)({ourProps:{ref:y},theirProps:g,slot:B,defaultTag:H,name:"Listbox"}))))}),{Button:(0,v.yV)(function(e,t){var r;let o=(0,c.M)(),{id:n=`headlessui-listbox-button-${o}`,...i}=e,a=Q("Listbox.Button"),l=B("Listbox.Button"),d=(0,b.T)(a.buttonRef,t),p=(0,u.G)(),m=(0,T.z)(e=>{switch(e.key){case x.R.Space:case x.R.Enter:case x.R.ArrowDown:e.preventDefault(),l.openListbox(),p.nextFrame(()=>{a.value||l.goToOption(h.First)});break;case x.R.ArrowUp:e.preventDefault(),l.openListbox(),p.nextFrame(()=>{a.value||l.goToOption(h.Last)})}}),g=(0,T.z)(e=>{e.key===x.R.Space&&e.preventDefault()}),R=(0,T.z)(e=>{if((0,y.P)(e.currentTarget))return e.preventDefault();0===a.listboxState?(l.closeListbox(),p.nextFrame(()=>{var e;return null==(e=a.buttonRef.current)?void 0:e.focus({preventScroll:!0})})):(e.preventDefault(),l.openListbox())}),O=f(()=>{if(a.labelId)return[a.labelId,n].join(" ")},[a.labelId,n]),E=(0,s.useMemo)(()=>({open:0===a.listboxState,disabled:a.disabled,value:a.value}),[a]),S={ref:d,id:n,type:(0,w.f)(e,a.buttonRef),"aria-haspopup":"listbox","aria-controls":null==(r=a.optionsRef.current)?void 0:r.id,"aria-expanded":0===a.listboxState,"aria-labelledby":O,disabled:a.disabled,onKeyDown:m,onKeyUp:g,onClick:R};return(0,v.sY)({ourProps:S,theirProps:i,slot:E,defaultTag:"button",name:"Listbox.Button"})}),Label:(0,v.yV)(function(e,t){let r=(0,c.M)(),{id:o=`headlessui-listbox-label-${r}`,...n}=e,i=Q("Listbox.Label"),a=B("Listbox.Label"),l=(0,b.T)(i.labelRef,t);(0,d.e)(()=>a.registerLabel(o),[o]);let u=(0,T.z)(()=>{var e;return null==(e=i.buttonRef.current)?void 0:e.focus({preventScroll:!0})}),p=(0,s.useMemo)(()=>({open:0===i.listboxState,disabled:i.disabled}),[i]);return(0,v.sY)({ourProps:{ref:l,id:o,onClick:u},theirProps:n,slot:p,defaultTag:"label",name:"Listbox.Label"})}),Options:(0,v.yV)(function(e,t){var r;let o=(0,c.M)(),{id:n=`headlessui-listbox-options-${o}`,...i}=e,a=Q("Listbox.Options"),l=B("Listbox.Options"),d=(0,b.T)(a.optionsRef,t),p=(0,u.G)(),y=(0,u.G)(),R=(0,O.oJ)(),w=null!==R?(R&O.ZM.Open)===O.ZM.Open:0===a.listboxState;(0,s.useEffect)(()=>{var e;let t=a.optionsRef.current;t&&0===a.listboxState&&t!==(null==(e=(0,L.r)(t))?void 0:e.activeElement)&&t.focus({preventScroll:!0})},[a.listboxState,a.optionsRef]);let E=(0,T.z)(e=>{switch(y.dispose(),e.key){case x.R.Space:if(""!==a.searchQuery)return e.preventDefault(),e.stopPropagation(),l.search(e.key);case x.R.Enter:if(e.preventDefault(),e.stopPropagation(),null!==a.activeOptionIndex){let{dataRef:e}=a.options[a.activeOptionIndex];l.onChange(e.current.value)}0===a.mode&&(l.closeListbox(),(0,g.k)().nextFrame(()=>{var e;return null==(e=a.buttonRef.current)?void 0:e.focus({preventScroll:!0})}));break;case(0,m.E)(a.orientation,{vertical:x.R.ArrowDown,horizontal:x.R.ArrowRight}):return e.preventDefault(),e.stopPropagation(),l.goToOption(h.Next);case(0,m.E)(a.orientation,{vertical:x.R.ArrowUp,horizontal:x.R.ArrowLeft}):return e.preventDefault(),e.stopPropagation(),l.goToOption(h.Previous);case x.R.Home:case x.R.PageUp:return e.preventDefault(),e.stopPropagation(),l.goToOption(h.First);case x.R.End:case x.R.PageDown:return e.preventDefault(),e.stopPropagation(),l.goToOption(h.Last);case x.R.Escape:return e.preventDefault(),e.stopPropagation(),l.closeListbox(),p.nextFrame(()=>{var e;return null==(e=a.buttonRef.current)?void 0:e.focus({preventScroll:!0})});case x.R.Tab:e.preventDefault(),e.stopPropagation();break;default:1===e.key.length&&(l.search(e.key),y.setTimeout(()=>l.clearSearch(),350))}}),S=f(()=>{var e,t,r;return null!=(r=null==(e=a.labelRef.current)?void 0:e.id)?r:null==(t=a.buttonRef.current)?void 0:t.id},[a.labelRef.current,a.buttonRef.current]),I=(0,s.useMemo)(()=>({open:0===a.listboxState}),[a]),D={"aria-activedescendant":null===a.activeOptionIndex||null==(r=a.options[a.activeOptionIndex])?void 0:r.id,"aria-multiselectable":1===a.mode||void 0,"aria-labelledby":S,"aria-orientation":a.orientation,id:n,onKeyDown:E,role:"listbox",tabIndex:0,ref:d};return(0,v.sY)({ourProps:D,theirProps:i,slot:I,defaultTag:"ul",features:_,visible:w,name:"Listbox.Options"})}),Option:(0,v.yV)(function(e,t){let r,o,n;let i=(0,c.M)(),{id:a=`headlessui-listbox-option-${i}`,disabled:l=!1,value:u,...f}=e,m=Q("Listbox.Option"),x=B("Listbox.Option"),y=null!==m.activeOptionIndex&&m.options[m.activeOptionIndex].id===a,R=m.isSelected(u),O=(0,s.useRef)(null),w=(r=(0,s.useRef)(""),o=(0,s.useRef)(""),(0,T.z)(()=>{let e=O.current;if(!e)return"";let t=e.innerText;if(r.current===t)return o.current;let n=(function(e){let t=e.getAttribute("aria-label");if("string"==typeof t)return t.trim();let r=e.getAttribute("aria-labelledby");if(r){let e=r.split(" ").map(e=>{let t=document.getElementById(e);if(t){let e=t.getAttribute("aria-label");return"string"==typeof e?e.trim():P(t).trim()}return null}).filter(Boolean);if(e.length>0)return e.join(", ")}return P(e).trim()})(e).trim().toLowerCase();return r.current=t,o.current=n,n})),E=(0,p.E)({disabled:l,value:u,domRef:O,get textValue(){return w()}}),S=(0,b.T)(t,O);(0,d.e)(()=>{if(0!==m.listboxState||!y||0===m.activationTrigger)return;let e=(0,g.k)();return e.requestAnimationFrame(()=>{var e,t;null==(t=null==(e=O.current)?void 0:e.scrollIntoView)||t.call(e,{block:"nearest"})}),e.dispose},[O,y,m.listboxState,m.activationTrigger,m.activeOptionIndex]),(0,d.e)(()=>x.registerOption(a,E),[E,a]);let I=(0,T.z)(e=>{if(l)return e.preventDefault();x.onChange(u),0===m.mode&&(x.closeListbox(),(0,g.k)().nextFrame(()=>{var e;return null==(e=m.buttonRef.current)?void 0:e.focus({preventScroll:!0})}))}),L=(0,T.z)(()=>{if(l)return x.goToOption(h.Nothing);x.goToOption(h.Specific,a)}),D=(n=(0,s.useRef)([-1,-1]),{wasMoved(e){let t=k(e);return(n.current[0]!==t[0]||n.current[1]!==t[1])&&(n.current=t,!0)},update(e){n.current=k(e)}}),C=(0,T.z)(e=>D.update(e)),z=(0,T.z)(e=>{D.wasMoved(e)&&(l||y||x.goToOption(h.Specific,a,0))}),M=(0,T.z)(e=>{D.wasMoved(e)&&(l||y&&x.goToOption(h.Nothing))}),F=(0,s.useMemo)(()=>({active:y,selected:R,disabled:l}),[y,R,l]);return(0,v.sY)({ourProps:{id:a,ref:S,role:"option",tabIndex:!0===l?void 0:-1,"aria-disabled":!0===l||void 0,"aria-selected":R,disabled:void 0,onClick:I,onFocus:L,onPointerEnter:C,onMouseEnter:C,onPointerMove:z,onMouseMove:z,onPointerLeave:M,onMouseLeave:M},theirProps:f,slot:F,defaultTag:"li",name:"Listbox.Option"})})})},4720:function(e,t,r){"use strict";var o=r(2265);let n=o.forwardRef(function({title:e,titleId:t,...r},n){return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:n,"aria-labelledby":t},r),e?o.createElement("title",{id:t},e):null,o.createElement("path",{fillRule:"evenodd",d:"M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z",clipRule:"evenodd"}))});t.Z=n},9175:function(e,t,r){"use strict";var o=r(2265);let n=o.forwardRef(function({title:e,titleId:t,...r},n){return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:n,"aria-labelledby":t},r),e?o.createElement("title",{id:t},e):null,o.createElement("path",{fillRule:"evenodd",d:"M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z",clipRule:"evenodd"}))});t.Z=n},5925:function(e,t,r){"use strict";let o,n;r.r(t),r.d(t,{CheckmarkIcon:function(){return K},ErrorIcon:function(){return _},LoaderIcon:function(){return Z},ToastBar:function(){return el},ToastIcon:function(){return et},Toaster:function(){return ed},default:function(){return ep},resolveValue:function(){return E},toast:function(){return $},useToaster:function(){return V},useToasterStore:function(){return F}});var i,a=r(2265);let l={data:""},s=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||l,u=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,c=/\/\*[^]*?\*\/|  +/g,d=/\n+/g,p=(e,t)=>{let r="",o="",n="";for(let i in e){let a=e[i];"@"==i[0]?"i"==i[1]?r=i+" "+a+";":o+="f"==i[1]?p(a,i):i+"{"+p(a,"k"==i[1]?"":t)+"}":"object"==typeof a?o+=p(a,t?t.replace(/([^,])+/g,e=>i.replace(/(^:.*)|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):i):null!=a&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),n+=p.p?p.p(i,a):i+":"+a+";")}return r+(t&&n?t+"{"+n+"}":n)+o},f={},b=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+b(e[r]);return t}return e},v=(e,t,r,o,n)=>{var i;let a=b(e),l=f[a]||(f[a]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(a));if(!f[l]){let t=a!==e?e:(e=>{let t,r,o=[{}];for(;t=u.exec(e.replace(c,""));)t[4]?o.shift():t[3]?(r=t[3].replace(d," ").trim(),o.unshift(o[0][r]=o[0][r]||{})):o[0][t[1]]=t[2].replace(d," ").trim();return o[0]})(e);f[l]=p(n?{["@keyframes "+l]:t}:t,r?"":"."+l)}let s=r&&f.g?f.g:null;return r&&(f.g=f[l]),i=f[l],s?t.data=t.data.replace(s,i):-1===t.data.indexOf(i)&&(t.data=o?i+t.data:t.data+i),l},m=(e,t,r)=>e.reduce((e,o,n)=>{let i=t[n];if(i&&i.call){let e=i(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":p(e,""):!1===e?"":e}return e+o+(null==i?"":i)},"");function g(e){let t=this||{},r=e.call?e(t.p):e;return v(r.unshift?r.raw?m(r,[].slice.call(arguments,1),t.p):r.reduce((e,r)=>Object.assign(e,r&&r.call?r(t.p):r),{}):r,s(t.target),t.g,t.o,t.k)}g.bind({g:1});let x,h,y,R=g.bind({k:1});function O(e,t){let r=this||{};return function(){let o=arguments;function n(i,a){let l=Object.assign({},i),s=l.className||n.className;r.p=Object.assign({theme:h&&h()},l),r.o=/ *go\d+/.test(s),l.className=g.apply(r,o)+(s?" "+s:""),t&&(l.ref=a);let u=e;return e[0]&&(u=l.as||e,delete l.as),y&&u[0]&&y(l),x(u,l)}return t?t(n):n}}var w=e=>"function"==typeof e,E=(e,t)=>w(e)?e(t):e,S=(o=0,()=>(++o).toString()),I=()=>{if(void 0===n&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");n=!e||e.matches}return n},L=new Map,T=e=>{if(L.has(e))return;let t=setTimeout(()=>{L.delete(e),z({type:4,toastId:e})},1e3);L.set(e,t)},D=e=>{let t=L.get(e);t&&clearTimeout(t)},k=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&D(t.toast.id),{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:r}=t;return e.toasts.find(e=>e.id===r.id)?k(e,{type:1,toast:r}):k(e,{type:0,toast:r});case 3:let{toastId:o}=t;return o?T(o):e.toasts.forEach(e=>{T(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===o||void 0===o?{...e,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let n=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+n}))}}},C=[],P={toasts:[],pausedAt:void 0},z=e=>{P=k(P,e),C.forEach(e=>{e(P)})},M={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},F=(e={})=>{let[t,r]=(0,a.useState)(P);(0,a.useEffect)(()=>(C.push(r),()=>{let e=C.indexOf(r);e>-1&&C.splice(e,1)}),[t]);let o=t.toasts.map(t=>{var r,o;return{...e,...e[t.type],...t,duration:t.duration||(null==(r=e[t.type])?void 0:r.duration)||(null==e?void 0:e.duration)||M[t.type],style:{...e.style,...null==(o=e[t.type])?void 0:o.style,...t.style}}});return{...t,toasts:o}},A=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||S()}),N=e=>(t,r)=>{let o=A(t,e,r);return z({type:2,toast:o}),o.id},$=(e,t)=>N("blank")(e,t);$.error=N("error"),$.success=N("success"),$.loading=N("loading"),$.custom=N("custom"),$.dismiss=e=>{z({type:3,toastId:e})},$.remove=e=>z({type:4,toastId:e}),$.promise=(e,t,r)=>{let o=$.loading(t.loading,{...r,...null==r?void 0:r.loading});return e.then(e=>($.success(E(t.success,e),{id:o,...r,...null==r?void 0:r.success}),e)).catch(e=>{$.error(E(t.error,e),{id:o,...r,...null==r?void 0:r.error})}),e};var j=(e,t)=>{z({type:1,toast:{id:e,height:t}})},B=()=>{z({type:5,time:Date.now()})},V=e=>{let{toasts:t,pausedAt:r}=F(e);(0,a.useEffect)(()=>{if(r)return;let e=Date.now(),o=t.map(t=>{if(t.duration===1/0)return;let r=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(r<0){t.visible&&$.dismiss(t.id);return}return setTimeout(()=>$.dismiss(t.id),r)});return()=>{o.forEach(e=>e&&clearTimeout(e))}},[t,r]);let o=(0,a.useCallback)(()=>{r&&z({type:6,time:Date.now()})},[r]),n=(0,a.useCallback)((e,r)=>{let{reverseOrder:o=!1,gutter:n=8,defaultPosition:i}=r||{},a=t.filter(t=>(t.position||i)===(e.position||i)&&t.height),l=a.findIndex(t=>t.id===e.id),s=a.filter((e,t)=>t<l&&e.visible).length;return a.filter(e=>e.visible).slice(...o?[s+1]:[0,s]).reduce((e,t)=>e+(t.height||0)+n,0)},[t]);return{toasts:t,handlers:{updateHeight:j,startPause:B,endPause:o,calculateOffset:n}}},Q=R`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,U=R`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,H=R`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,_=O("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Q} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${U} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${H} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,Y=R`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Z=O("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${Y} 1s linear infinite;
`,G=R`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,q=R`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,K=O("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${G} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${q} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,J=O("div")`
  position: absolute;
`,W=O("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,X=R`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ee=O("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${X} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,et=({toast:e})=>{let{icon:t,type:r,iconTheme:o}=e;return void 0!==t?"string"==typeof t?a.createElement(ee,null,t):t:"blank"===r?null:a.createElement(W,null,a.createElement(Z,{...o}),"loading"!==r&&a.createElement(J,null,"error"===r?a.createElement(_,{...o}):a.createElement(K,{...o})))},er=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,eo=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,en=O("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,ei=O("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,ea=(e,t)=>{let r=e.includes("top")?1:-1,[o,n]=I()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[er(r),eo(r)];return{animation:t?`${R(o)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${R(n)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},el=a.memo(({toast:e,position:t,style:r,children:o})=>{let n=e.height?ea(e.position||t||"top-center",e.visible):{opacity:0},i=a.createElement(et,{toast:e}),l=a.createElement(ei,{...e.ariaProps},E(e.message,e));return a.createElement(en,{className:e.className,style:{...n,...r,...e.style}},"function"==typeof o?o({icon:i,message:l}):a.createElement(a.Fragment,null,i,l))});i=a.createElement,p.p=void 0,x=i,h=void 0,y=void 0;var es=({id:e,className:t,style:r,onHeightUpdate:o,children:n})=>{let i=a.useCallback(t=>{if(t){let r=()=>{o(e,t.getBoundingClientRect().height)};r(),new MutationObserver(r).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,o]);return a.createElement("div",{ref:i,className:t,style:r},n)},eu=(e,t)=>{let r=e.includes("top"),o=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:I()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...r?{top:0}:{bottom:0},...o}},ec=g`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ed=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:o,children:n,containerStyle:i,containerClassName:l})=>{let{toasts:s,handlers:u}=V(r);return a.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...i},className:l,onMouseEnter:u.startPause,onMouseLeave:u.endPause},s.map(r=>{let i=r.position||t,l=eu(i,u.calculateOffset(r,{reverseOrder:e,gutter:o,defaultPosition:t}));return a.createElement(es,{id:r.id,key:r.id,onHeightUpdate:u.updateHeight,className:r.visible?ec:"",style:l},"custom"===r.type?E(r.message,r):n?n(r):a.createElement(el,{toast:r,position:i}))}))},ep=$}}]);