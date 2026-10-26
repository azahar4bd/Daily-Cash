(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))c(d);new MutationObserver(d=>{for(const A of d)if(A.type==="childList")for(const f of A.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&c(f)}).observe(document,{childList:!0,subtree:!0});function u(d){const A={};return d.integrity&&(A.integrity=d.integrity),d.referrerPolicy&&(A.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?A.credentials="include":d.crossOrigin==="anonymous"?A.credentials="omit":A.credentials="same-origin",A}function c(d){if(d.ep)return;d.ep=!0;const A=u(d);fetch(d.href,A)}})();var IS=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function n2(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var Fd={exports:{}},ao={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oh;function a2(){if(oh)return ao;oh=1;var l=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function u(c,d,A){var f=null;if(A!==void 0&&(f=""+A),d.key!==void 0&&(f=""+d.key),"key"in d){A={};for(var h in d)h!=="key"&&(A[h]=d[h])}else A=d;return d=A.ref,{$$typeof:l,type:c,key:f,ref:d!==void 0?d:null,props:A}}return ao.Fragment=o,ao.jsx=u,ao.jsxs=u,ao}var ih;function s2(){return ih||(ih=1,Fd.exports=a2()),Fd.exports}var n=s2(),Jd={exports:{}},ke={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ch;function l2(){if(ch)return ke;ch=1;var l=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),A=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),L=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),p=Symbol.for("react.activity"),w=Symbol.for("react.view_transition"),P=Symbol.iterator;function G(R){return R===null||typeof R!="object"?null:(R=P&&R[P]||R["@@iterator"],typeof R=="function"?R:null)}var K={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j=Object.assign,z={};function ce(R,$,ge){this.props=R,this.context=$,this.refs=z,this.updater=ge||K}ce.prototype.isReactComponent={},ce.prototype.setState=function(R,$){if(typeof R!="object"&&typeof R!="function"&&R!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,R,$,"setState")},ce.prototype.forceUpdate=function(R){this.updater.enqueueForceUpdate(this,R,"forceUpdate")};function M(){}M.prototype=ce.prototype;function te(R,$,ge){this.props=R,this.context=$,this.refs=z,this.updater=ge||K}var k=te.prototype=new M;k.constructor=te,j(k,ce.prototype),k.isPureReactComponent=!0;var J=Array.isArray;function ue(){}var C={H:null,A:null,T:null,S:null},ne=Object.prototype.hasOwnProperty;function re(R,$,ge){var be=ge.ref;return{$$typeof:l,type:R,key:$,ref:be!==void 0?be:null,props:ge}}function ae(R,$){return re(R.type,$,R.props)}function fe(R){return typeof R=="object"&&R!==null&&R.$$typeof===l}function pe(R){var $={"=":"=0",":":"=2"};return"$"+R.replace(/[=:]/g,function(ge){return $[ge]})}var B=/\/+/g;function O(R,$){return typeof R=="object"&&R!==null&&R.key!=null?pe(""+R.key):$.toString(36)}function S(R){switch(R.status){case"fulfilled":return R.value;case"rejected":throw R.reason;default:switch(typeof R.status=="string"?R.then(ue,ue):(R.status="pending",R.then(function($){R.status==="pending"&&(R.status="fulfilled",R.value=$)},function($){R.status==="pending"&&(R.status="rejected",R.reason=$)})),R.status){case"fulfilled":return R.value;case"rejected":throw R.reason}}throw R}function I(R,$,ge,be,ye){var Ie=typeof R;(Ie==="undefined"||Ie==="boolean")&&(R=null);var Y=!1;if(R===null)Y=!0;else switch(Ie){case"bigint":case"string":case"number":Y=!0;break;case"object":switch(R.$$typeof){case l:case o:Y=!0;break;case y:return Y=R._init,I(Y(R._payload),$,ge,be,ye)}}if(Y)return ye=ye(R),Y=be===""?"."+O(R,0):be,J(ye)?(ge="",Y!=null&&(ge=Y.replace(B,"$&/")+"/"),I(ye,$,ge,"",function(Te){return Te})):ye!=null&&(fe(ye)&&(ye=ae(ye,ge+(ye.key==null||R&&R.key===ye.key?"":(""+ye.key).replace(B,"$&/")+"/")+Y)),$.push(ye)),1;Y=0;var Q=be===""?".":be+":";if(J(R))for(var Re=0;Re<R.length;Re++)be=R[Re],Ie=Q+O(be,Re),Y+=I(be,$,ge,Ie,ye);else if(Re=G(R),typeof Re=="function")for(R=Re.call(R),Re=0;!(be=R.next()).done;)be=be.value,Ie=Q+O(be,Re++),Y+=I(be,$,ge,Ie,ye);else if(Ie==="object"){if(typeof R.then=="function")return I(S(R),$,ge,be,ye);throw $=String(R),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(R).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return Y}function q(R,$,ge){if(R==null)return R;var be=[],ye=0;return I(R,be,"","",function(Ie){return $.call(ge,Ie,ye++)}),be}function ee(R){if(R._status===-1){var $=R._result,ge=$();ge.then(function(be){(R._status===0||R._status===-1)&&(R._status=1,R._result=be,ge.status===void 0&&(ge.status="fulfilled",ge.value=be))},function(be){(R._status===0||R._status===-1)&&(R._status=2,R._result=be,ge.status===void 0&&(ge.status="rejected",ge.reason=be))}),R._status===-1&&(R._status=0,R._result=ge)}if(R._status===1)return R._result.default;throw R._result}var U=typeof reportError=="function"?reportError:function(R){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof R=="object"&&R!==null&&typeof R.message=="string"?String(R.message):String(R),error:R});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",R);return}console.error(R)};function H(R){var $=C.T,ge={};ge.types=$!==null?$.types:null,C.T=ge;try{var be=R(),ye=C.S;ye!==null&&ye(ge,be),typeof be=="object"&&be!==null&&typeof be.then=="function"&&be.then(ue,U)}catch(Ie){U(Ie)}finally{$!==null&&ge.types!==null&&($.types=ge.types),C.T=$}}function N(R){var $=C.T;if($!==null){var ge=$.types;ge===null?$.types=[R]:ge.indexOf(R)===-1&&ge.push(R)}else H(N.bind(null,R))}var oe={map:q,forEach:function(R,$,ge){q(R,function(){$.apply(this,arguments)},ge)},count:function(R){var $=0;return q(R,function(){$++}),$},toArray:function(R){return q(R,function($){return $})||[]},only:function(R){if(!fe(R))throw Error("React.Children.only expected to receive a single React element child.");return R}};return ke.Activity=p,ke.Children=oe,ke.Component=ce,ke.Fragment=u,ke.Profiler=d,ke.PureComponent=te,ke.StrictMode=c,ke.Suspense=x,ke.ViewTransition=w,ke.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=C,ke.__COMPILER_RUNTIME={__proto__:null,c:function(R){return C.H.useMemoCache(R)}},ke.addTransitionType=N,ke.cache=function(R){return function(){return R.apply(null,arguments)}},ke.cacheSignal=function(){return null},ke.cloneElement=function(R,$,ge){if(R==null)throw Error("The argument must be a React element, but you passed "+R+".");var be=j({},R.props),ye=R.key;if($!=null)for(Ie in $.key!==void 0&&(ye=""+$.key),$)!ne.call($,Ie)||Ie==="key"||Ie==="__self"||Ie==="__source"||Ie==="ref"&&$.ref===void 0||(be[Ie]=$[Ie]);var Ie=arguments.length-2;if(Ie===1)be.children=ge;else if(1<Ie){for(var Y=Array(Ie),Q=0;Q<Ie;Q++)Y[Q]=arguments[Q+2];be.children=Y}return re(R.type,ye,be)},ke.createContext=function(R){return R={$$typeof:f,_currentValue:R,_currentValue2:R,_threadCount:0,Provider:null,Consumer:null},R.Provider=R,R.Consumer={$$typeof:A,_context:R},R},ke.createElement=function(R,$,ge){var be,ye={},Ie=null;if($!=null)for(be in $.key!==void 0&&(Ie=""+$.key),$)ne.call($,be)&&be!=="key"&&be!=="__self"&&be!=="__source"&&(ye[be]=$[be]);var Y=arguments.length-2;if(Y===1)ye.children=ge;else if(1<Y){for(var Q=Array(Y),Re=0;Re<Y;Re++)Q[Re]=arguments[Re+2];ye.children=Q}if(R&&R.defaultProps)for(be in Y=R.defaultProps,Y)ye[be]===void 0&&(ye[be]=Y[be]);return re(R,Ie,ye)},ke.createRef=function(){return{current:null}},ke.forwardRef=function(R){return{$$typeof:h,render:R}},ke.isValidElement=fe,ke.lazy=function(R){return{$$typeof:y,_payload:{_status:-1,_result:R},_init:ee}},ke.memo=function(R,$){return{$$typeof:L,type:R,compare:$===void 0?null:$}},ke.startTransition=H,ke.unstable_useCacheRefresh=function(){return C.H.useCacheRefresh()},ke.use=function(R){return C.H.use(R)},ke.useActionState=function(R,$,ge){return C.H.useActionState(R,$,ge)},ke.useCallback=function(R,$){return C.H.useCallback(R,$)},ke.useContext=function(R){return C.H.useContext(R)},ke.useDebugValue=function(){},ke.useDeferredValue=function(R,$){return C.H.useDeferredValue(R,$)},ke.useEffect=function(R,$){return C.H.useEffect(R,$)},ke.useEffectEvent=function(R){return C.H.useEffectEvent(R)},ke.useId=function(){return C.H.useId()},ke.useImperativeHandle=function(R,$,ge){return C.H.useImperativeHandle(R,$,ge)},ke.useInsertionEffect=function(R,$){return C.H.useInsertionEffect(R,$)},ke.useLayoutEffect=function(R,$){return C.H.useLayoutEffect(R,$)},ke.useMemo=function(R,$){return C.H.useMemo(R,$)},ke.useOptimistic=function(R,$){return C.H.useOptimistic(R,$)},ke.useReducer=function(R,$,ge){return C.H.useReducer(R,$,ge)},ke.useRef=function(R){return C.H.useRef(R)},ke.useState=function(R){return C.H.useState(R)},ke.useSyncExternalStore=function(R,$,ge){return C.H.useSyncExternalStore(R,$,ge)},ke.useTransition=function(){return C.H.useTransition()},ke.version="19.3.0",ke}var uh;function Hm(){return uh||(uh=1,Jd.exports=l2()),Jd.exports}var b=Hm();const r2=n2(b);var Xd={exports:{}},so={},Vd={exports:{}},Yd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dh;function o2(){return dh||(dh=1,(function(l){function o(S,I){var q=S.length;S.push(I);e:for(;0<q;){var ee=q-1>>>1,U=S[ee];if(0<d(U,I))S[ee]=I,S[q]=U,q=ee;else break e}}function u(S){return S.length===0?null:S[0]}function c(S){if(S.length===0)return null;var I=S[0],q=S.pop();if(q!==I){S[0]=q;e:for(var ee=0,U=S.length,H=U>>>1;ee<H;){var N=2*(ee+1)-1,oe=S[N],R=N+1,$=S[R];if(0>d(oe,q))R<U&&0>d($,oe)?(S[ee]=$,S[R]=q,ee=R):(S[ee]=oe,S[N]=q,ee=N);else if(R<U&&0>d($,q))S[ee]=$,S[R]=q,ee=R;else break e}}return I}function d(S,I){var q=S.sortIndex-I.sortIndex;return q!==0?q:S.id-I.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var A=performance;l.unstable_now=function(){return A.now()}}else{var f=Date,h=f.now();l.unstable_now=function(){return f.now()-h}}var x=[],L=[],y=1,p=null,w=3,P=!1,G=!1,K=!1,j=!1,z=typeof setTimeout=="function"?setTimeout:null,ce=typeof clearTimeout=="function"?clearTimeout:null,M=typeof setImmediate<"u"?setImmediate:null;function te(S){for(var I=u(L);I!==null;){if(I.callback===null)c(L);else if(I.startTime<=S)c(L),I.sortIndex=I.expirationTime,o(x,I);else break;I=u(L)}}function k(S){if(K=!1,te(S),!G)if(u(x)!==null)G=!0,J||(J=!0,fe());else{var I=u(L);I!==null&&O(k,I.startTime-S)}}var J=!1,ue=-1,C=5,ne=-1;function re(){return j?!0:!(l.unstable_now()-ne<C)}function ae(){if(j=!1,J){var S=l.unstable_now();ne=S;var I=!0;try{e:{G=!1,K&&(K=!1,ce(ue),ue=-1),P=!0;var q=w;try{t:{for(te(S),p=u(x);p!==null&&!(p.expirationTime>S&&re());){var ee=p.callback;if(typeof ee=="function"){p.callback=null,w=p.priorityLevel;var U=ee(p.expirationTime<=S);if(S=l.unstable_now(),typeof U=="function"){p.callback=U,te(S),I=!0;break t}p===u(x)&&c(x),te(S)}else c(x);p=u(x)}if(p!==null)I=!0;else{var H=u(L);H!==null&&O(k,H.startTime-S),I=!1}}break e}finally{p=null,w=q,P=!1}I=void 0}}finally{I?fe():J=!1}}}var fe;if(typeof M=="function")fe=function(){M(ae)};else if(typeof MessageChannel<"u"){var pe=new MessageChannel,B=pe.port2;pe.port1.onmessage=ae,fe=function(){B.postMessage(null)}}else fe=function(){z(ae,0)};function O(S,I){ue=z(function(){S(l.unstable_now())},I)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(S){S.callback=null},l.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<S?Math.floor(1e3/S):5},l.unstable_getCurrentPriorityLevel=function(){return w},l.unstable_next=function(S){switch(w){case 1:case 2:case 3:var I=3;break;default:I=w}var q=w;w=I;try{return S()}finally{w=q}},l.unstable_requestPaint=function(){j=!0},l.unstable_runWithPriority=function(S,I){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var q=w;w=S;try{return I()}finally{w=q}},l.unstable_scheduleCallback=function(S,I,q){var ee=l.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?ee+q:ee):q=ee,S){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=q+U,S={id:y++,callback:I,priorityLevel:S,startTime:q,expirationTime:U,sortIndex:-1},q>ee?(S.sortIndex=q,o(L,S),u(x)===null&&S===u(L)&&(K?(ce(ue),ue=-1):K=!0,O(k,q-ee))):(S.sortIndex=U,o(x,S),G||P||(G=!0,J||(J=!0,fe()))),S},l.unstable_shouldYield=re,l.unstable_wrapCallback=function(S){var I=w;return function(){var q=w;w=I;try{return S.apply(this,arguments)}finally{w=q}}}})(Yd)),Yd}var mh;function i2(){return mh||(mh=1,Vd.exports=o2()),Vd.exports}var qd={exports:{}},fn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ah;function c2(){if(Ah)return fn;Ah=1;var l=Hm();function o(y){var p="https://react.dev/errors/"+y;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var w=2;w<arguments.length;w++)p+="&args[]="+encodeURIComponent(arguments[w])}return"Minified React error #"+y+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(){}var c={d:{f:u,r:function(){throw Error(o(522))},D:u,C:u,L:u,m:u,X:u,S:u,M:u},p:0,findDOMNode:null},d=Symbol.for("react.portal"),A=Symbol.for("react.recoverable"),f=Symbol.for("react.optimistic_key");function h(y,p,w){var P=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:P==null?null:P===f?f:""+P,children:y,containerInfo:p,implementation:w}}var x=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function L(y,p){if(y==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return fn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,fn.browser=function(y){return{$$typeof:A,_reason:y}},fn.createPortal=function(y,p){var w=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(o(299));return h(y,p,null,w)},fn.flushSync=function(y){var p=x.T,w=c.p;try{if(x.T=null,c.p=2,y)return y()}finally{x.T=p,c.p=w,c.d.f()}},fn.preconnect=function(y,p){typeof y=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,c.d.C(y,p))},fn.prefetchDNS=function(y){typeof y=="string"&&c.d.D(y)},fn.preinit=function(y,p){if(typeof y=="string"&&p&&typeof p.as=="string"){var w=p.as,P=L(w,p.crossOrigin),G=typeof p.integrity=="string"?p.integrity:void 0,K=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;w==="style"?c.d.S(y,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:P,integrity:G,fetchPriority:K}):w==="script"&&c.d.X(y,{crossOrigin:P,integrity:G,fetchPriority:K,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},fn.preinitModule=function(y,p){if(typeof y=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var w=L(p.as,p.crossOrigin);c.d.M(y,{crossOrigin:w,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0})}}else p==null&&c.d.M(y)},fn.preload=function(y,p){if(typeof y=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var w=p.as,P=L(w,p.crossOrigin);c.d.L(y,w,{crossOrigin:P,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},fn.preloadModule=function(y,p){if(typeof y=="string")if(p){var w=L(p.as,p.crossOrigin);c.d.m(y,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:w,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0})}else c.d.m(y)},fn.requestFormReset=function(y){c.d.r(y)},fn.unstable_batchedUpdates=function(y,p){return y(p)},fn.useFormState=function(y,p,w){return x.H.useFormState(y,p,w)},fn.useFormStatus=function(){return x.H.useHostTransitionStatus()},fn.version="19.3.0",fn}var fh;function gb(){if(fh)return qd.exports;fh=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(o){console.error(o)}}return l(),qd.exports=c2(),qd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xh;function u2(){if(xh)return so;xh=1;var l=i2(),o=Hm(),u=gb();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function A(e){for(var t=e,a=t;a&&!a.alternate;)t=a,(t.flags&4098)!==0&&(e=t.return),a=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function f(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function h(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function x(e){if(A(e)!==e)throw Error(c(188))}function L(e){var t=e.alternate;if(!t){if(t=A(e),t===null)throw Error(c(188));return t!==e?null:e}for(var a=e,s=t;;){var r=a.return;if(r===null)break;var i=r.alternate;if(i===null){if(s=r.return,s!==null){a=s;continue}break}if(r.child===i.child){for(i=r.child;i;){if(i===a)return x(r),e;if(i===s)return x(r),t;i=i.sibling}throw Error(c(188))}if(a.return!==s.return)a=r,s=i;else{for(var m=!1,g=r.child;g;){if(g===a){m=!0,a=r,s=i;break}if(g===s){m=!0,s=r,a=i;break}g=g.sibling}if(!m){for(g=i.child;g;){if(g===a){m=!0,a=i,s=r;break}if(g===s){m=!0,s=i,a=r;break}g=g.sibling}if(!m)throw Error(c(189))}}if(a.alternate!==s)throw Error(c(190))}if(a.tag!==3)throw Error(c(188));return a.stateNode.current===a?e:t}function y(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=y(e),t!==null)return t;e=e.sibling}return null}function p(e,t,a,s,r,i){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&a(e,s,r,i)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&p(e.child,t,a,s,r,i))return!0;e=e.sibling}return!1}function w(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function P(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return t}function G(e){var t=[null,null],a=w(e);return a===null||K(t,e,a.child,{foundSelf:!1}),t}function K(e,t,a,s){for(;a!==null;){if(a===t)s.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(s.foundSelf)return e[1]=a,!0;e[0]=a}else if((a.tag!==22||a.memoizedState===null)&&K(e,t,a.child,s))return!0;a=a.sibling}return!1}function j(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(c(559))}}var z=null,ce=null;function M(e,t,a){return e===a?!0:e===t?(z=e,!0):!1}function te(e,t,a){return e===a?(ce=e,!1):e===t?(ce!==null&&(z=e),!0):!1}function k(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function J(e,t,a){for(var s=0,r=e;r;r=a(r))s++;r=0;for(var i=t;i;i=a(i))r++;for(;0<s-r;)e=a(e),s--;for(;0<r-s;)t=a(t),r--;for(;s--;){if(e===t||t!==null&&e===t.alternate)return e;e=a(e),t=a(t)}return null}var ue=Object.assign,C=Symbol.for("react.element"),ne=Symbol.for("react.transitional.element"),re=Symbol.for("react.portal"),ae=Symbol.for("react.fragment"),fe=Symbol.for("react.strict_mode"),pe=Symbol.for("react.profiler"),B=Symbol.for("react.consumer"),O=Symbol.for("react.context"),S=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),q=Symbol.for("react.suspense_list"),ee=Symbol.for("react.memo"),U=Symbol.for("react.lazy"),H=Symbol.for("react.activity"),N=Symbol.for("react.legacy_hidden"),oe=Symbol.for("react.memo_cache_sentinel"),R=Symbol.for("react.view_transition"),$=Symbol.for("react.recoverable"),ge=Symbol.iterator;function be(e){return e===null||typeof e!="object"?null:(e=ge&&e[ge]||e["@@iterator"],typeof e=="function"?e:null)}var ye=Symbol.for("react.client.reference");function Ie(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ye?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ae:return"Fragment";case pe:return"Profiler";case fe:return"StrictMode";case I:return"Suspense";case q:return"SuspenseList";case H:return"Activity";case R:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case re:return"Portal";case O:return e.displayName||"Context";case B:return(e._context.displayName||"Context")+".Consumer";case S:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ee:return t=e.displayName||null,t!==null?t:Ie(e.type)||"Memo";case U:t=e._payload,e=e._init;try{return Ie(e(t))}catch{}}return null}var Y=Array.isArray,Q=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Re=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Te={pending:!1,data:null,method:null,action:null},rt=[],At=-1;function ft(e){return{current:e}}function et(e){0>At||(e.current=rt[At],rt[At]=null,At--)}function ve(e,t){At++,rt[At]=e.current,e.current=t}var st=ft(null),St=ft(null),gt=ft(null),yt=ft(null);function Ae(e,t){switch(ve(gt,t),ve(St,e),ve(st,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?hx(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=hx(t),e=bx(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}et(st),ve(st,e)}function Ue(){et(st),et(St),et(gt)}function lt(e){var t=e.memoizedState;t!==null&&(er._currentValue=t.memoizedState,ve(yt,e)),t=st.current;var a=bx(t,e.type);t!==a&&(ve(St,e),ve(st,a))}function Ot(e){St.current===e&&(et(st),et(St)),yt.current===e&&(et(yt),er._currentValue=Te)}var ln,Zt;function Dt(e){if(ln===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);ln=t&&t[1]||"",Zt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ln+e+Zt}var me=!1;function we(e,t){if(!e||me)return"";me=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(t){var he=function(){throw Error()};if(Object.defineProperty(he.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(he,[])}catch(Ne){var _=Ne}Reflect.construct(e,[],he)}else{try{he.call()}catch(Ne){_=Ne}he=!1;try{var W=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),he=!0,new e}finally{he&&(W!==void 0?Object.defineProperty(e.prototype,"props",W):delete e.prototype.props)}}}else{try{throw Error()}catch(Ne){_=Ne}(he=e())&&typeof he.catch=="function"&&he.catch(function(){})}}catch(Ne){if(Ne&&_&&typeof Ne.stack=="string")return[Ne.stack,_.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=s.DetermineComponentFrameRoot(),m=i[0],g=i[1];if(m&&g){var E=m.split(`
`),F=g.split(`
`);for(r=s=0;s<E.length&&!E[s].includes("DetermineComponentFrameRoot");)s++;for(;r<F.length&&!F[r].includes("DetermineComponentFrameRoot");)r++;if(s===E.length||r===F.length)for(s=E.length-1,r=F.length-1;1<=s&&0<=r&&E[s]!==F[r];)r--;for(;1<=s&&0<=r;s--,r--)if(E[s]!==F[r]){if(s!==1||r!==1)do if(s--,r--,0>r||E[s]!==F[r]){var se=`
`+E[s].replace(" at new "," at ");return e.displayName&&se.includes("<anonymous>")&&(se=se.replace("<anonymous>",e.displayName)),se}while(1<=s&&0<=r);break}}}finally{me=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Dt(a):""}function Nt(e,t){switch(e.tag){case 26:case 27:case 5:return Dt(e.type);case 16:return Dt("Lazy");case 13:return e.child!==t&&t!==null?Dt("Suspense Fallback"):Dt("Suspense");case 19:return Dt("SuspenseList");case 0:case 15:return we(e.type,!1);case 11:return we(e.type.render,!1);case 1:return we(e.type,!0);case 31:return Dt("Activity");case 30:return Dt("ViewTransition");default:return""}}function wn(e){try{var t="",a=null;do t+=Nt(e,a),a=e,e=e.return;while(e);return t}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var sa=Object.prototype.hasOwnProperty,tt=l.unstable_scheduleCallback,la=l.unstable_cancelCallback,hl=l.unstable_shouldYield,bl=l.unstable_requestPaint,Tt=l.unstable_now,ra=l.unstable_getCurrentPriorityLevel,ls=l.unstable_ImmediatePriority,Ks=l.unstable_UserBlockingPriority,oa=l.unstable_NormalPriority,ka=l.unstable_LowPriority,Ua=l.unstable_IdlePriority,Da=l.log,Ps=l.unstable_setDisableYieldValue,pa=null,kt=null;function En(e){if(typeof Da=="function"&&Ps(e),kt&&typeof kt.setStrictMode=="function")try{kt.setStrictMode(pa,e)}catch{}}var Ct=Math.clz32?Math.clz32:rs,_s=Math.log,ia=Math.LN2;function rs(e){return e>>>=0,e===0?32:31-(_s(e)/ia|0)|0}var Cn=256,Ta=262144,ga=4194304;function vn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function os(e,t,a){var s=e.pendingLanes;if(s===0)return 0;var r=0,i=e.suspendedLanes,m=e.pingedLanes;e=e.warmLanes;var g=s&134217727;return g!==0?(s=g&~i,s!==0?r=vn(s):(m&=g,m!==0?r=vn(m):a||(a=g&~e,a!==0&&(r=vn(a))))):(g=s&~i,g!==0?r=vn(g):m!==0?r=vn(m):a||(a=s&~e,a!==0&&(r=vn(a)))),r===0?0:t!==0&&t!==r&&(t&i)===0&&(i=r&-r,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:r}function Gt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function pn(e,t){(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var s=31-Ct(a),r=1<<s;t|=e[s],a&=~r}return t}function Ra(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function v(){var e=ga;return ga<<=1,(ga&62914560)===0&&(ga=4194304),e}function ie(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function le(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Se(e,t,a,s,r,i){var m=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var g=e.entanglements,E=e.expirationTimes,F=e.hiddenUpdates;for(a=m&~a;0<a;){var se=31-Ct(a),he=1<<se;g[se]=0,E[se]=-1;var _=F[se];if(_!==null)for(F[se]=null,se=0;se<_.length;se++){var W=_[se];W!==null&&(W.lane&=-536870913)}a&=~he}s!==0&&He(e,s,0),i!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=i&~(m&~t))}function He(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var s=31-Ct(t);e.entangledLanes|=t,e.entanglements[s]=e.entanglements[s]|1073741824|a&261930}function De(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var s=31-Ct(a),r=1<<s;r&t|e[s]&t&&(e[s]|=t),a&=~r}}function rn(e,t){var a=t&-t;return a=(a&42)!==0?1:Fe(a),(a&(e.suspendedLanes|t))!==0?0:a}function Fe(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Jn(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function zt(){var e=Re.p;return e!==0?e:(e=window.event,e===void 0?32:eh(e.type))}function nt(e,t){var a=Re.p;try{return Re.p=e,t()}finally{Re.p=a}}var Je=Math.random().toString(36).slice(2),ot="__reactFiber$"+Je,Et="__reactProps$"+Je,Mn="__reactContainer$"+Je,Zs="__reactEvents$"+Je,Rc="__reactListeners$"+Je,ho="__reactHandles$"+Je,fr="__reactResources$"+Je,zs="__reactMarker$"+Je,is="__reactLoad$"+Je;function D(e){delete e[ot],delete e[Et],delete e[Rc],delete e[ho]}function X(e){var t;if(t=e[ot])return t;for(var a=e.parentNode;a;){if(t=a[Mn]||a[ot]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Mx(e);e!==null;){if(a=e[ot])return a;e=Mx(e)}return t}e=a,a=e.parentNode}return null}function Le(e){if(e=e[ot]||e[Mn]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ge(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function jt(e){var t=e[fr];return t||(t=e[fr]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Xe(e){e[zs]=!0}function on(e){e[is]=void 0}var It=new Set,Ft={};function Bt(e,t){Jt(e,t),Jt(e+"Capture",t)}function Jt(e,t){for(Ft[e]=t,e=0;e<t.length;e++)It.add(t[e])}var vt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Xt={},e0={};function Sp(e){return sa.call(e0,e)?!0:sa.call(Xt,e)?!1:vt.test(e)?e0[e]=!0:(Xt[e]=!0,!1)}var it=!1;function t0(){var e=it;return it=!1,e}function bo(e,t,a){if(Sp(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var s=t.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,a)}}function po(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,a)}}function Ga(e,t,a,s){if(s===null)e.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,s)}}function kn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function n0(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function yp(e,t,a){var s=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var r=s.get,i=s.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(m){a=""+m,i.call(this,m)}}),Object.defineProperty(e,t,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(m){a=""+m},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Sc(e){if(!e._valueTracker){var t=n0(e)?"checked":"value";e._valueTracker=yp(e,t,""+e[t])}}function a0(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),s="";return e&&(s=n0(e)?e.checked?"true":"false":e.value),e=s,e!==a?(t.setValue(e),!0):!1}var Np=/[\n"\\]/g;function Xn(e){return e.replace(Np,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function yc(e,t,a,s,r,i,m,g){e.name="",m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.type=m:e.removeAttribute("type"),t!=null?m==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+kn(t)):e.value!==""+kn(t)&&(e.value=""+kn(t)):m!=="submit"&&m!=="reset"||e.removeAttribute("value"),t!=null?m==="number"&&e.value==t?Nc(e,kn(e.value)):Nc(e,kn(t)):a!=null?Nc(e,kn(a)):s!=null&&e.removeAttribute("value"),r==null&&i!=null&&(e.defaultChecked=!!i),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.name=""+kn(g):e.removeAttribute("name")}function s0(e,t,a,s,r,i,m,g){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){Sc(e);return}a=a!=null?""+kn(a):"",t=t!=null?""+kn(t):a,g||t===e.value||(e.value=t),e.defaultValue=t}s=s??r,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=g?e.checked:!!s,e.defaultChecked=!!s,m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.name=m),Sc(e)}function Nc(e,t){e.defaultValue!==""+t&&(e.defaultValue=""+t)}function pl(e,t,a,s){if(e=e.options,t){t={};for(var r=0;r<a.length;r++)t["$"+a[r]]=!0;for(a=0;a<e.length;a++)r=t.hasOwnProperty("$"+e[a].value),e[a].selected!==r&&(e[a].selected=r),r&&s&&(e[a].defaultSelected=!0)}else{for(a=""+kn(a),t=null,r=0;r<e.length;r++){if(e[r].value===a){e[r].selected=!0,s&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function l0(e,t,a){if(t!=null&&(t=""+kn(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+kn(a):""}function r0(e,t,a,s){if(t==null){if(s!=null){if(a!=null)throw Error(c(92));if(Y(s)){if(1<s.length)throw Error(c(93));s=s[0]}a=s}a==null&&(a=""),t=a}a=kn(t),e.defaultValue=a,s=e.textContent,s===a&&s!==""&&s!==null&&(e.value=s),Sc(e)}function gl(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var vp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function o0(e,t,a){var s=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":s?e.setProperty(t,a):typeof a!="number"||a===0||vp.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function i0(e,t,a){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||t!=null&&t.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="",it=!0);for(var r in t)s=t[r],t.hasOwnProperty(r)&&a[r]!==s&&(o0(e,r,s),it=!0)}else for(var i in t)t.hasOwnProperty(i)&&o0(e,i,t[i])}function vc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Lp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Op=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function go(e){return Op.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Sa(){}var Lc=null;function Oc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Rl=null,Sl=null;function c0(e){var t=Le(e);if(t&&(e=t.stateNode)){var a=e[Et]||null;e:switch(e=t.stateNode,t.type){case"input":if(yc(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Xn(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var s=a[t];if(s!==e&&s.form===e.form){var r=s[Et]||null;if(!r)throw Error(c(90));yc(s,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(t=0;t<a.length;t++)s=a[t],s.form===e.form&&a0(s)}break e;case"textarea":l0(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&pl(e,!!a.multiple,t,!1)}}}var jc=!1;function u0(e,t,a){if(jc)return e(t,a);jc=!0;try{var s=e(t);return s}finally{if(jc=!1,(Rl!==null||Sl!==null)&&(gi(),Rl&&(t=Rl,e=Sl,Sl=Rl=null,c0(t),e)))for(t=0;t<e.length;t++)c0(e[t])}}function xr(e,t){var a=e.stateNode;if(a===null)return null;var s=a[Et]||null;if(s===null)return null;a=s[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(c(231,t,typeof a));return a}var Ka=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ic=!1;if(Ka)try{var hr={};Object.defineProperty(hr,"passive",{get:function(){Ic=!0}}),window.addEventListener("test",hr,hr),window.removeEventListener("test",hr,hr)}catch{Ic=!1}var cs=null,Bc=null,Ro=null;function d0(){if(Ro)return Ro;var e,t=Bc,a=t.length,s,r="value"in cs?cs.value:cs.textContent,i=r.length;for(e=0;e<a&&t[e]===r[e];e++);var m=a-e;for(s=1;s<=m&&t[a-s]===r[i-s];s++);return Ro=r.slice(e,1<s?1-s:void 0)}function So(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function yo(){return!0}function m0(){return!1}function gn(e){function t(a,s,r,i,m){this._reactName=a,this._targetInst=r,this.type=s,this.nativeEvent=i,this.target=m,this.currentTarget=null;for(var g in e)e.hasOwnProperty(g)&&(a=e[g],this[g]=a?a(i):i[g]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?yo:m0,this.isPropagationStopped=m0,this}return ue(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=yo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=yo)},persist:function(){},isPersistent:yo}),t}var us={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},No=gn(us),br=ue({},us,{view:0,detail:0}),jp=gn(br),Hc,wc,pr,vo=ue({},br,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==pr&&(pr&&e.type==="mousemove"?(Hc=e.screenX-pr.screenX,wc=e.screenY-pr.screenY):wc=Hc=0,pr=e),Hc)},movementY:function(e){return"movementY"in e?e.movementY:wc}}),A0=gn(vo),Ip=ue({},vo,{dataTransfer:0}),Bp=gn(Ip),Hp=ue({},br,{relatedTarget:0}),Ec=gn(Hp),wp=ue({},us,{animationName:0,elapsedTime:0,pseudoElement:0}),Ep=gn(wp),Cp=ue({},us,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Mp=gn(Cp),kp=ue({},us,{data:0}),f0=gn(kp),Up={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Dp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Tp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Tp[e])?!!t[e]:!1}function Cc(){return Gp}var Kp=ue({},br,{key:function(e){if(e.key){var t=Up[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=So(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Dp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cc,charCode:function(e){return e.type==="keypress"?So(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?So(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Pp=gn(Kp),_p=ue({},vo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),x0=gn(_p),Zp=ue({},us,{submitter:0}),zp=gn(Zp),Fp=ue({},br,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cc}),Jp=gn(Fp),Xp=ue({},us,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vp=gn(Xp),Yp=ue({},vo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),qp=gn(Yp),Qp=ue({},us,{newState:0,oldState:0,source:0}),$p=gn(Qp),Wp=[9,13,27,32],Mc=Ka&&"CompositionEvent"in window,gr=null;Ka&&"documentMode"in document&&(gr=document.documentMode);var eg=Ka&&"TextEvent"in window&&!gr,h0=Ka&&(!Mc||gr&&8<gr&&11>=gr),b0=" ",p0=!1;function g0(e,t){switch(e){case"keyup":return Wp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function R0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var yl=!1;function tg(e,t){switch(e){case"compositionend":return R0(t);case"keypress":return t.which!==32?null:(p0=!0,b0);case"textInput":return e=t.data,e===b0&&p0?null:e;default:return null}}function ng(e,t){if(yl)return e==="compositionend"||!Mc&&g0(e,t)?(e=d0(),Ro=Bc=cs=null,yl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return h0&&t.locale!=="ko"?null:t.data;default:return null}}var ag={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function S0(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ag[e.type]:t==="textarea"}function y0(e,t,a,s){Rl?Sl?Sl.push(s):Sl=[s]:Rl=s,t=Li(t,"onChange"),0<t.length&&(a=new No("onChange","change",null,a,s),e.push({event:a,listeners:t}))}var Rr=null,Sr=null;function sg(e){ux(e,0)}function Lo(e){var t=Ge(e);if(a0(t))return e}function N0(e,t){if(e==="change")return t}var v0=!1;if(Ka){var kc;if(Ka){var Uc="oninput"in document;if(!Uc){var L0=document.createElement("div");L0.setAttribute("oninput","return;"),Uc=typeof L0.oninput=="function"}kc=Uc}else kc=!1;v0=kc&&(!document.documentMode||9<document.documentMode)}function O0(){Rr&&(Rr.detachEvent("onpropertychange",j0),Sr=Rr=null)}function j0(e){if(e.propertyName==="value"&&Lo(Sr)){var t=[];y0(t,Sr,e,Oc(e)),u0(sg,t)}}function lg(e,t,a){e==="focusin"?(O0(),Rr=t,Sr=a,Rr.attachEvent("onpropertychange",j0)):e==="focusout"&&O0()}function rg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Lo(Sr)}function og(e,t){if(e==="click")return Lo(t)}function ig(e,t){if(e==="input"||e==="change")return Lo(t)}function cg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Un=typeof Object.is=="function"?Object.is:cg;function yr(e,t){if(Un(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),s=Object.keys(t);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var r=a[s];if(!sa.call(t,r)||!Un(e[r],t[r]))return!1}return!0}function Dc(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function I0(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function B0(e,t){var a=I0(e);e=0;for(var s;a;){if(a.nodeType===3){if(s=e+a.textContent.length,e<=t&&s>=t)return{node:a,offset:t-e};e=s}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=I0(a)}}function H0(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?H0(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function w0(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Dc(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Dc(e.document)}return t}function Tc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var ug=Ka&&"documentMode"in document&&11>=document.documentMode,Nl=null,Gc=null,Nr=null,Kc=!1;function E0(e,t,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Kc||Nl==null||Nl!==Dc(s)||(s=Nl,"selectionStart"in s&&Tc(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Nr&&yr(Nr,s)||(Nr=s,s=Li(Gc,"onSelect"),0<s.length&&(t=new No("onSelect","select",null,t,a),e.push({event:t,listeners:s}),t.target=Nl)))}function Fs(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var vl={animationend:Fs("Animation","AnimationEnd"),animationiteration:Fs("Animation","AnimationIteration"),animationstart:Fs("Animation","AnimationStart"),transitionrun:Fs("Transition","TransitionRun"),transitionstart:Fs("Transition","TransitionStart"),transitioncancel:Fs("Transition","TransitionCancel"),transitionend:Fs("Transition","TransitionEnd")},Pc={},C0={};Ka&&(C0=document.createElement("div").style,"AnimationEvent"in window||(delete vl.animationend.animation,delete vl.animationiteration.animation,delete vl.animationstart.animation),"TransitionEvent"in window||delete vl.transitionend.transition);function Js(e){if(Pc[e])return Pc[e];if(!vl[e])return e;var t=vl[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in C0)return Pc[e]=t[a];return e}var M0=Js("animationend"),k0=Js("animationiteration"),U0=Js("animationstart"),dg=Js("transitionrun"),mg=Js("transitionstart"),Ag=Js("transitioncancel"),D0=Js("transitionend"),T0=new Map,_c="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");_c.push("scrollEnd");function ca(e,t){T0.set(e,t),Bt(t,[e])}var fg=0;function Pa(e,t){if(e.name!=null&&e.name!=="auto")return e.name;if(t.autoName!==null)return t.autoName;e=Aa.identifierPrefix;var a=fg++;return e="_"+e+"t_"+a.toString(32)+"_",t.autoName=e}function G0(e){if(e==null||typeof e=="string")return e;var t=null,a=zl;if(a!==null)for(var s=0;s<a.length;s++){var r=e[a[s]];if(r!=null){if(r==="none")return"none";t=t==null?r:t+(" "+r)}}return t??e.default}function _a(e,t){return e=G0(e),t=G0(t),t==null?e==="auto"?null:e:t==="auto"?null:t}var Oo=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Vn=[],Ll=0,Zc=0;function jo(){for(var e=Ll,t=Zc=Ll=0;t<e;){var a=Vn[t];Vn[t++]=null;var s=Vn[t];Vn[t++]=null;var r=Vn[t];Vn[t++]=null;var i=Vn[t];if(Vn[t++]=null,s!==null&&r!==null){var m=s.pending;m===null?r.next=r:(r.next=m.next,m.next=r),s.pending=r}i!==0&&K0(a,r,i)}}function Io(e,t,a,s){Vn[Ll++]=e,Vn[Ll++]=t,Vn[Ll++]=a,Vn[Ll++]=s,Zc|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function zc(e,t,a,s){return Io(e,t,a,s),Bo(e)}function Xs(e,t){return Io(e,null,null,t),Bo(e)}function K0(e,t,a){e.lanes|=a;var s=e.alternate;s!==null&&(s.lanes|=a);for(var r=!1,i=e.return;i!==null;)i.childLanes|=a,s=i.alternate,s!==null&&(s.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(r=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,r&&t!==null&&(r=31-Ct(a),e=i.hiddenUpdates,s=e[r],s===null?e[r]=[t]:s.push(t),t.lane=a|536870912),i):null}function Bo(e){if(50<Fr)throw Fr=0,pi=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Ol={};function xg(e,t,a,s){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ln(e,t,a,s){return new xg(e,t,a,s)}function Fc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Za(e,t){var a=e.alternate;return a===null?(a=Ln(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&1206910976,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function P0(e,t){e.flags&=1206910978;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ho(e,t,a,s,r,i){var m=0;if(s=e,typeof s=="function")Fc(s)&&(m=1);else if(typeof s=="string")m=Z1(e,a,st.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(s){case H:return e=Ln(31,a,t,r),e.elementType=H,e.lanes=i,e;case ae:return Vs(a.children,r,i,t);case fe:m=8,r|=24;break;case pe:return e=Ln(12,a,t,r|2),e.elementType=pe,e.lanes=i,e;case I:return e=Ln(13,a,t,r),e.elementType=I,e.lanes=i,e;case q:return e=Ln(19,a,t,r),e.elementType=q,e.lanes=i,e;case N:case R:return e=r|32,e=Ln(30,a,t,e),e.elementType=R,e.lanes=i,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof s=="object"&&s!==null)switch(s.$$typeof){case O:m=10;break e;case B:m=9;break e;case S:m=11;break e;case ee:m=14;break e;case U:m=16,s=null;break e}m=29,a=Error(c(130,e===null?"null":typeof e,"")),s=null}return t=Ln(m,a,t,r),t.elementType=e,t.type=s,t.lanes=i,t}function Vs(e,t,a,s){return e=Ln(7,e,s,t),e.lanes=a,e}function Jc(e,t,a){return e=Ln(6,e,null,t),e.lanes=a,e}function _0(e){var t=Ln(18,null,null,0);return t.stateNode=e,t}function Xc(e,t,a){return t=Ln(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Z0=new WeakMap;function Yn(e,t){if(typeof e=="object"&&e!==null){var a=Z0.get(e);return a!==void 0?a:(t={value:e,source:t,stack:wn(t)},Z0.set(e,t),t)}return{value:e,source:t,stack:wn(t)}}var jl=[],Il=0,wo=null,vr=0,qn=[],Qn=0,ds=null,ya=1,Na="";function za(e,t){jl[Il++]=vr,jl[Il++]=wo,wo=e,vr=t}function z0(e,t,a){qn[Qn++]=ya,qn[Qn++]=Na,qn[Qn++]=ds,ds=e;var s=ya;e=Na;var r=32-Ct(s)-1;s&=~(1<<r),a+=1;var i=32-Ct(t)+r;if(30<i){var m=r-r%5;i=(s&(1<<m)-1).toString(32),s>>=m,r-=m,ya=1<<32-Ct(t)+r|a<<r|s,Na=i+e}else ya=1<<i|a<<r|s,Na=e}function Eo(e){e.return!==null&&(za(e,1),z0(e,1,0))}function Vc(e){for(;e===wo;)wo=jl[--Il],jl[Il]=null,vr=jl[--Il],jl[Il]=null;for(;e===ds;)ds=qn[--Qn],qn[Qn]=null,Na=qn[--Qn],qn[Qn]=null,ya=qn[--Qn],qn[Qn]=null}function F0(e,t){qn[Qn++]=ya,qn[Qn++]=Na,qn[Qn++]=ds,ya=t.id,Na=t.overflow,ds=e}var en=null,Ht=null,ze=!1,ms=null,$n=!1,Yc=Error(c(519));function As(e){var t=Error(c(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Lr(Yn(t,e)),Yc}function J0(e){var t=e.stateNode,a=e.type,s=e.memoizedProps;switch(t[ot]=e,t[Et]=s,a){case"dialog":Ye("cancel",t),Ye("close",t);break;case"iframe":case"object":case"embed":Ye("load",t);break;case"video":case"audio":for(a=0;a<Xr.length;a++)Ye(Xr[a],t);break;case"source":Ye("error",t);break;case"img":case"image":case"link":Ye("error",t),Ye("load",t);break;case"details":Ye("toggle",t);break;case"input":Ye("invalid",t),s0(t,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":Ye("invalid",t);break;case"textarea":Ye("invalid",t),r0(t,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||s.suppressHydrationWarning===!0||fx(t.textContent,a)?(s.popover!=null&&(Ye("beforetoggle",t),Ye("toggle",t)),s.onScroll!=null&&Ye("scroll",t),s.onScrollEnd!=null&&Ye("scrollend",t),s.onClick!=null&&(t.onclick=Sa),t=!0):t=!1,t||As(e,!0)}function Co(e){for(en=e.return;en;)switch(en.tag){case 5:case 31:case 13:$n=!1;return;case 27:case 3:$n=!0;return;default:en=en.return}}function Bl(e){if(e!==en)return!1;if(!ze)return Co(e),ze=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Ld(e.type,e.memoizedProps)),a=!a),a&&Ht&&As(e),Co(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Ht=Cx(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Ht=Cx(e)}else t===27?(t=Ht,Bs(e.type)?(e=Md,Md=null,Ht=e):Ht=t):Ht=en?ea(e.stateNode.nextSibling):null;return!0}function Ys(){Ht=en=null,ze=!1}function qc(){var e=ms;return e!==null&&(In===null?In=e:In.push.apply(In,e),ms=null),e}function Lr(e){ms===null?ms=[e]:ms.push(e)}var Qc=ft(null),qs=null,Fa=null;function fs(e,t,a){ve(Qc,t._currentValue),t._currentValue=a}function Ja(e){e._currentValue=Qc.current,et(Qc)}function Mo(e,t,a){for(;e!==null;){var s=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,s!==null&&(s.childLanes|=t)):s!==null&&(s.childLanes&t)!==t&&(s.childLanes|=t),e===a)break;e=e.return}}function $c(e,t,a,s){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var i=r.dependencies;if(i!==null){var m=r.child;i=i.firstContext;e:for(;i!==null;){var g=i;i=r;for(var E=0;E<t.length;E++)if(g.context===t[E]){i.lanes|=a,g=i.alternate,g!==null&&(g.lanes|=a),Mo(i.return,a,e),s||(m=null);break e}i=g.next}}else if(r.tag===18){if(m=r.return,m===null)throw Error(c(341));m.lanes|=a,i=m.alternate,i!==null&&(i.lanes|=a),Mo(m,a,e),m=null}else r.tag===13&&r.memoizedState!==null&&r.memoizedState.dehydrated===null?(r.lanes|=a,m=r.alternate,m!==null&&(m.lanes|=a),Mo(r.return,a,e),m=r.child,m=m!==null?m.sibling:null):m=r.child;if(m!==null)m.return=r;else for(m=r;m!==null;){if(m===e){m=null;break}if(r=m.sibling,r!==null){r.return=m.return,m=r;break}m=m.return}r=m}}function Qs(e,t,a,s){e=null;for(var r=t,i=!1;r!==null;){if(!i){if((r.flags&524288)!==0)i=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var m=r.alternate;if(m===null)throw Error(c(387));if(m=m.memoizedProps,m!==null){var g=r.type;Un(r.pendingProps.value,m.value)||(e!==null?e.push(g):e=[g])}}else if(r===yt.current){if(m=r.alternate,m===null)throw Error(c(387));m.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push(er):e=[er])}r=r.return}return e!==null&&$c(t,e,a,s),t.flags|=262144,e!==null}function ko(e){for(e=e.firstContext;e!==null;){if(!Un(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function $s(e){qs=e,Fa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function cn(e){return X0(qs,e)}function Uo(e,t){return qs===null&&$s(e),X0(e,t)}function X0(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Fa===null){if(e===null)throw Error(c(308));Fa=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Fa=Fa.next=t;return a}var hg=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,s){e.push(s)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},bg=l.unstable_scheduleCallback,pg=l.unstable_NormalPriority,Yt={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Wc(){return{controller:new hg,data:new Map,refCount:0}}function Or(e){e.refCount--,e.refCount===0&&bg(pg,function(){e.controller.abort()})}function V0(e,t){if((e.pendingLanes&4194048)!==0){var a=e.transitionTypes;for(a===null&&(a=e.transitionTypes=[]),e=0;e<t.length;e++){var s=t[e];a.indexOf(s)===-1&&a.push(s)}}}var jr=null;function gg(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var Ir=null,eu=0,Ws=0,Hl=null;function Rg(e,t){if(Ir===null){var a=Ir=[];eu=0,Ws=hd(),Hl={status:"pending",value:void 0,then:function(s){a.push(s)}}}return eu++,t.then(Y0,Y0),t}function Y0(){if(--eu===0&&(jr=null,Ir!==null)){Hl!==null&&(Hl.status="fulfilled");var e=Ir;Ir=null,Ws=0,Hl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Sg(e,t){var a=[],s={status:"pending",value:null,reason:null,then:function(r){a.push(r)}};return e.then(function(){s.status="fulfilled",s.value=t;for(var r=0;r<a.length;r++)(0,a[r])(t)},function(r){for(s.status="rejected",s.reason=r,r=0;r<a.length;r++)(0,a[r])(void 0)}),s}var q0=Q.S;Q.S=function(e,t){if(Zf=Tt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Rg(e,t),jr!==null)for(var a=Vl;a!==null;)V0(a,jr),a=a.next;if(a=e.types,a!==null){for(var s=Vl;s!==null;)V0(s,a),s=s.next;if(Ws!==0){s=jr,s===null&&(s=jr=[]);for(var r=0;r<a.length;r++){var i=a[r];s.indexOf(i)===-1&&s.push(i)}}}q0!==null&&q0(e,t)};var el=ft(null);function tu(){var e=el.current;return e!==null?e:Lt.pooledCache}function Do(e,t){t===null?ve(el,el.current):ve(el,t.pool)}function Q0(){var e=tu();return e===null?null:{parent:Yt._currentValue,pool:e}}var wl=Error(c(460)),nu=Error(c(474)),To=Error(c(542)),Go={then:function(){}};function $0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function W0(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Sa,Sa),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,tA(e),e===void 0&&!("reason"in t)?Error(c(600)):e;default:if(typeof t.status=="string")t.then(Sa,Sa);else{if(e=Lt,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(s){if(t.status==="pending"){var r=t;r.status="fulfilled",r.value=s}},function(s){if(t.status==="pending"){var r=t;r.status="rejected",r.reason=s}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,tA(e),e}throw nl=t,wl}}function tl(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(nl=a,wl):a}}var nl=null;function eA(){if(nl===null)throw Error(c(459));var e=nl;return nl=null,e}function tA(e){if(e===wl||e===To)throw Error(c(483))}var El=null,Br=0;function Ko(e){var t=Br;return Br+=1,El===null&&(El=[]),W0(El,e,t)}function xs(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Po(e,t){throw t.$$typeof===C?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function nA(e){function t(Z,T){if(e){var V=Z.deletions;V===null?(Z.deletions=[T],Z.flags|=16):V.push(T)}}function a(Z,T){if(!e)return null;for(;T!==null;)t(Z,T),T=T.sibling;return null}function s(Z){for(var T=new Map;Z!==null;)Z.key===null?T.set(Z.index,Z):T.set(Z.key,Z),Z=Z.sibling;return T}function r(Z,T){return Z=Za(Z,T),Z.index=0,Z.sibling=null,Z}function i(Z,T,V){return Z.index=V,e?(V=Z.alternate,V!==null?(V=V.index,V<T?(Z.flags|=2,T):V):(Z.flags|=134217730,T)):(Z.flags|=1048576,T)}function m(Z){return e&&Z.alternate===null&&(Z.flags|=134217730),Z}function g(Z,T,V,xe){return T===null||T.tag!==6?(T=Jc(V,Z.mode,xe),T.return=Z,T):(T=r(T,V),T.return=Z,T)}function E(Z,T,V,xe){var je=V.type;return je===ae?(Z=se(Z,T,V.props.children,xe,V.key),xs(Z,V),Z):T!==null&&(T.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===U&&tl(je)===T.type)?(T=r(T,V.props),xs(T,V),T.return=Z,T):(T=Ho(V.type,V.key,V.props,null,Z.mode,xe),xs(T,V),T.return=Z,T)}function F(Z,T,V,xe){return T===null||T.tag!==4||T.stateNode.containerInfo!==V.containerInfo||T.stateNode.implementation!==V.implementation?(T=Xc(V,Z.mode,xe),T.return=Z,T):(T=r(T,V.children||[]),T.return=Z,T)}function se(Z,T,V,xe,je){return T===null||T.tag!==7?(T=Vs(V,Z.mode,xe,je),T.return=Z,T):(T=r(T,V),T.return=Z,T)}function he(Z,T,V){if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return T=Jc(""+T,Z.mode,V),T.return=Z,T;if(typeof T=="object"&&T!==null){switch(T.$$typeof){case ne:return V=Ho(T.type,T.key,T.props,null,Z.mode,V),xs(V,T),V.return=Z,V;case re:return T=Xc(T,Z.mode,V),T.return=Z,T;case U:return T=tl(T),he(Z,T,V)}if(Y(T)||be(T))return T=Vs(T,Z.mode,V,null),T.return=Z,T;if(typeof T.then=="function")return he(Z,Ko(T),V);if(T.$$typeof===O)return he(Z,Uo(Z,T),V);Po(Z,T)}return null}function _(Z,T,V,xe){var je=T!==null?T.key:null;if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return je!==null?null:g(Z,T,""+V,xe);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case ne:return V.key===je?E(Z,T,V,xe):null;case re:return V.key===je?F(Z,T,V,xe):null;case U:return V=tl(V),_(Z,T,V,xe)}if(Y(V)||be(V))return je!==null?null:se(Z,T,V,xe,null);if(typeof V.then=="function")return _(Z,T,Ko(V),xe);if(V.$$typeof===O)return _(Z,T,Uo(Z,V),xe);Po(Z,V)}return null}function W(Z,T,V,xe,je){if(typeof xe=="string"&&xe!==""||typeof xe=="number"||typeof xe=="bigint")return Z=Z.get(V)||null,g(T,Z,""+xe,je);if(typeof xe=="object"&&xe!==null){switch(xe.$$typeof){case ne:return Z=Z.get(xe.key===null?V:xe.key)||null,E(T,Z,xe,je);case re:return Z=Z.get(xe.key===null?V:xe.key)||null,F(T,Z,xe,je);case U:return xe=tl(xe),W(Z,T,V,xe,je)}if(Y(xe)||be(xe))return Z=Z.get(V)||null,se(T,Z,xe,je,null);if(typeof xe.then=="function")return W(Z,T,V,Ko(xe),je);if(xe.$$typeof===O)return W(Z,T,V,Uo(T,xe),je);Po(T,xe)}return null}function Ne(Z,T,V,xe){for(var je=null,$e=null,Ee=T,Ce=T=0,$t=null;Ee!==null&&Ce<V.length;Ce++){Ee.index>Ce?($t=Ee,Ee=null):$t=Ee.sibling;var at=_(Z,Ee,V[Ce],xe);if(at===null){Ee===null&&(Ee=$t);break}e&&Ee&&at.alternate===null&&t(Z,Ee),T=i(at,T,Ce),$e===null?je=at:$e.sibling=at,$e=at,Ee=$t}if(Ce===V.length)return a(Z,Ee),ze&&za(Z,Ce),je;if(Ee===null){for(;Ce<V.length;Ce++)Ee=he(Z,V[Ce],xe),Ee!==null&&(T=i(Ee,T,Ce),$e===null?je=Ee:$e.sibling=Ee,$e=Ee);return ze&&za(Z,Ce),je}for(Ee=s(Ee);Ce<V.length;Ce++)$t=W(Ee,Z,Ce,V[Ce],xe),$t!==null&&(e&&(at=$t.alternate,at!==null&&Ee.delete(at.key===null?Ce:at.key)),T=i($t,T,Ce),$e===null?je=$t:$e.sibling=$t,$e=$t);return e&&Ee.forEach(function(Ms){return t(Z,Ms)}),ze&&za(Z,Ce),je}function Be(Z,T,V,xe){if(V==null)throw Error(c(151));for(var je=null,$e=null,Ee=T,Ce=T=0,$t=null,at=V.next();Ee!==null&&!at.done;Ce++,at=V.next()){Ee.index>Ce?($t=Ee,Ee=null):$t=Ee.sibling;var Ms=_(Z,Ee,at.value,xe);if(Ms===null){Ee===null&&(Ee=$t);break}e&&Ee&&Ms.alternate===null&&t(Z,Ee),T=i(Ms,T,Ce),$e===null?je=Ms:$e.sibling=Ms,$e=Ms,Ee=$t}if(at.done)return a(Z,Ee),ze&&za(Z,Ce),je;if(Ee===null){for(;!at.done;Ce++,at=V.next())at=he(Z,at.value,xe),at!==null&&(T=i(at,T,Ce),$e===null?je=at:$e.sibling=at,$e=at);return ze&&za(Z,Ce),je}for(Ee=s(Ee);!at.done;Ce++,at=V.next())at=W(Ee,Z,Ce,at.value,xe),at!==null&&(e&&($t=at.alternate,$t!==null&&Ee.delete($t.key===null?Ce:$t.key)),T=i(at,T,Ce),$e===null?je=at:$e.sibling=at,$e=at);return e&&Ee.forEach(function(t2){return t(Z,t2)}),ze&&za(Z,Ce),je}function Pe(Z,T,V,xe){if(typeof V=="object"&&V!==null&&V.type===ae&&V.key===null&&V.props.ref===void 0&&(V=V.props.children),typeof V=="object"&&V!==null){switch(V.$$typeof){case ne:e:{for(var je=V.key;T!==null;){if(T.key===je){if(je=V.type,je===ae){if(T.tag===7){a(Z,T.sibling),xe=r(T,V.props.children),xs(xe,V),xe.return=Z,Z=xe;break e}}else if(T.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===U&&tl(je)===T.type){a(Z,T.sibling),xe=r(T,V.props),xs(xe,V),xe.return=Z,Z=xe;break e}a(Z,T);break}else t(Z,T);T=T.sibling}V.type===ae?(xe=Vs(V.props.children,Z.mode,xe,V.key),xs(xe,V),xe.return=Z,Z=xe):(xe=Ho(V.type,V.key,V.props,null,Z.mode,xe),xs(xe,V),xe.return=Z,Z=xe)}return m(Z);case re:e:{for(je=V.key;T!==null;){if(T.key===je)if(T.tag===4&&T.stateNode.containerInfo===V.containerInfo&&T.stateNode.implementation===V.implementation){a(Z,T.sibling),xe=r(T,V.children||[]),xe.return=Z,Z=xe;break e}else{a(Z,T);break}else t(Z,T);T=T.sibling}xe=Xc(V,Z.mode,xe),xe.return=Z,Z=xe}return m(Z);case U:return V=tl(V),Pe(Z,T,V,xe)}if(Y(V))return Ne(Z,T,V,xe);if(be(V)){if(je=be(V),typeof je!="function")throw Error(c(150));return V=je.call(V),Be(Z,T,V,xe)}if(typeof V.then=="function")return Pe(Z,T,Ko(V),xe);if(V.$$typeof===O)return Pe(Z,T,Uo(Z,V),xe);Po(Z,V)}return typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint"?(V=""+V,T!==null&&T.tag===6?(a(Z,T.sibling),xe=r(T,V),xe.return=Z,Z=xe):(a(Z,T),xe=Jc(V,Z.mode,xe),xe.return=Z,Z=xe),m(Z)):a(Z,T)}return function(Z,T,V,xe){try{Br=0;var je=Pe(Z,T,V,xe);return El=null,je}catch(Ee){if(Ee===wl||Ee===To)throw Ee;var $e=Ln(29,Ee,null,Z.mode);return $e.lanes=xe,$e.return=Z,$e}finally{}}}var al=nA(!0),aA=nA(!1),hs=!1;function au(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function su(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function bs(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ps(e,t,a){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(ut&2)!==0){var r=s.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),s.pending=t,t=Bo(e),K0(e,null,a),t}return Io(e,s,t,a),Bo(e)}function Hr(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var s=t.lanes;s&=e.pendingLanes,a|=s,t.lanes=a,De(e,a)}}function lu(e,t){var a=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var r=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var m={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?r=i=m:i=i.next=m,a=a.next}while(a!==null);i===null?r=i=t:i=i.next=t}else r=i=t;a={baseState:s.baseState,firstBaseUpdate:r,lastBaseUpdate:i,shared:s.shared,callbacks:s.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var ru=!1;function wr(){if(ru){var e=Hl;if(e!==null)throw e}}function Er(e,t,a,s){ru=!1;var r=e.updateQueue;hs=!1;var i=r.firstBaseUpdate,m=r.lastBaseUpdate,g=r.shared.pending;if(g!==null){r.shared.pending=null;var E=g,F=E.next;E.next=null,m===null?i=F:m.next=F,m=E;var se=e.alternate;se!==null&&(se=se.updateQueue,g=se.lastBaseUpdate,g!==m&&(g===null?se.firstBaseUpdate=F:g.next=F,se.lastBaseUpdate=E))}if(i!==null){var he=r.baseState;m=0,se=F=E=null,g=i;do{var _=g.lane&-536870913,W=_!==g.lane;if(W?(Qe&_)===_:(s&_)===_){_!==0&&_===Ws&&(ru=!0),se!==null&&(se=se.next={lane:0,tag:g.tag,payload:g.payload,callback:null,next:null});e:{var Ne=e,Be=g;_=t;var Pe=a;switch(Be.tag){case 1:if(Ne=Be.payload,typeof Ne=="function"){he=Ne.call(Pe,he,_);break e}he=Ne;break e;case 3:Ne.flags=Ne.flags&-65537|128;case 0:if(Ne=Be.payload,_=typeof Ne=="function"?Ne.call(Pe,he,_):Ne,_==null)break e;he=ue({},he,_);break e;case 2:hs=!0}}_=g.callback,_!==null&&(e.flags|=64,W&&(e.flags|=8192),W=r.callbacks,W===null?r.callbacks=[_]:W.push(_))}else W={lane:_,tag:g.tag,payload:g.payload,callback:g.callback,next:null},se===null?(F=se=W,E=he):se=se.next=W,m|=_;if(g=g.next,g===null){if(g=r.shared.pending,g===null)break;W=g,g=W.next,W.next=null,r.lastBaseUpdate=W,r.shared.pending=null}}while(!0);se===null&&(E=he),r.baseState=E,r.firstBaseUpdate=F,r.lastBaseUpdate=se,i===null&&(r.shared.lanes=0),Ls|=m,e.lanes=m,e.memoizedState=he}}function sA(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function lA(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)sA(a[e],t)}var gs=ft(null),_o=ft(0);function rA(e,t){e=Qa,ve(_o,e),ve(gs,t),Qa=e|t.baseLanes}function ou(){ve(_o,Qa),ve(gs,gs.current)}function iu(){Qa=_o.current,et(gs),et(_o)}var un=ft(null),hn=null;function Rs(e){var t=e.alternate;ve(dn,dn.current&1),ve(un,e),hn===null&&(t===null||gs.current!==null||t.memoizedState!==null)&&(hn=e)}function cu(e){ve(dn,dn.current),ve(un,e),hn===null&&(hn=e)}function oA(e){e.tag===22?(ve(dn,dn.current),ve(un,e),hn===null&&(hn=e)):Ss()}function Ss(){ve(dn,dn.current),ve(un,un.current)}function Dn(e){et(un),hn===e&&(hn=null),et(dn)}var dn=ft(0);function Cr(e,t){ve(un,un.current),ve(dn,t)}function uu(e){et(dn),et(un),hn===e&&(hn=null)}function Zo(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Ed(a)||Cd(a)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!=="independent"){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Xa=0,Ke=null,Rt=null,qt=null,zo=!1,Cl=!1,sl=!1,Fo=0,Mr=0,Ml=null,yg=0;function Kt(){throw Error(c(321))}function du(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!Un(e[a],t[a]))return!1;return!0}function mu(e,t,a,s,r,i){return Xa=i,Ke=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Q.H=e===null||e.memoizedState===null?zA:FA,sl=!1,i=a(s,r),sl=!1,Cl&&(i=cA(t,a,s,r)),iA(e),i}function iA(e){Q.H=$o;var t=Rt!==null&&Rt.next!==null;if(Xa=0,qt=Rt=Ke=null,zo=!1,Mr=0,Ml=null,t)throw Error(c(300));e===null||Qt||(e=e.dependencies,e!==null&&ko(e)&&(Qt=!0))}function cA(e,t,a,s){Ke=e;var r=0;do{if(Cl&&(Ml=null),Mr=0,Cl=!1,25<=r)throw Error(c(301));if(r+=1,qt=Rt=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}Q.H=Hg,i=t(a,s)}while(Cl);return i}function Ng(){var e=Q.H,t=e.useState()[0];return t=typeof t.then=="function"?kr(t):t,e=e.useState()[0],(Rt!==null?Rt.memoizedState:null)!==e&&(Ke.flags|=1024),t}function Au(){var e=Fo!==0;return Fo=0,e}function fu(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function xu(e){if(zo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}zo=!1}Xa=0,qt=Rt=Ke=null,Cl=!1,Mr=Fo=0,Ml=null}function Rn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qt===null?Ke.memoizedState=qt=e:qt=qt.next=e,qt}function Vt(){if(Rt===null){var e=Ke.alternate;e=e!==null?e.memoizedState:null}else e=Rt.next;var t=qt===null?Ke.memoizedState:qt.next;if(t!==null)qt=t,Rt=e;else{if(e===null)throw Ke.alternate===null?Error(c(467)):Error(c(310));Rt=e,e={memoizedState:Rt.memoizedState,baseState:Rt.baseState,baseQueue:Rt.baseQueue,queue:Rt.queue,next:null},qt===null?Ke.memoizedState=qt=e:qt=qt.next=e}return qt}function Jo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function kr(e){var t=Mr;return Mr+=1,Ml===null&&(Ml=[]),e=W0(Ml,e,t),t=Ke,(qt===null?t.memoizedState:qt.next)===null&&(t=t.alternate,Q.H=t===null||t.memoizedState===null?zA:FA),e}function Xo(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return kr(e);if(e.$$typeof===$)return;if(e.$$typeof===O)return cn(e)}throw Error(c(438,String(e)))}function hu(e){var t=null,a=Ke.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var s=Ke.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(t={data:s.data.map(function(r){return r.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Jo(),Ke.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),s=0;s<e;s++)a[s]=oe;return t.index++,a}function Va(e,t){return typeof t=="function"?t(e):t}function Vo(e){var t=Vt();return bu(t,Rt,e)}function bu(e,t,a){var s=e.queue;if(s===null)throw Error(c(311));s.lastRenderedReducer=a;var r=e.baseQueue,i=s.pending;if(i!==null){if(r!==null){var m=r.next;r.next=i.next,i.next=m}t.baseQueue=r=i,s.pending=null}if(i=e.baseState,r===null)e.memoizedState=i;else{t=r.next;var g=m=null,E=null,F=t,se=!1;do{var he=F.lane&-536870913;if(he!==F.lane?(Qe&he)===he:(Xa&he)===he){var _=F.revertLane;if(_===0)E!==null&&(E=E.next={lane:0,revertLane:0,gesture:null,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null}),he===Ws&&(se=!0);else if((Xa&_)===_){F=F.next,_===Ws&&(se=!0);continue}else he={lane:0,revertLane:F.revertLane,gesture:null,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null},E===null?(g=E=he,m=i):E=E.next=he,Ke.lanes|=_,Ls|=_;he=F.action,sl&&a(i,he),i=F.hasEagerState?F.eagerState:a(i,he)}else _={lane:he,revertLane:F.revertLane,gesture:F.gesture,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null},E===null?(g=E=_,m=i):E=E.next=_,Ke.lanes|=he,Ls|=he;F=F.next}while(F!==null&&F!==t);if(E===null?m=i:E.next=g,!Un(i,e.memoizedState)&&(Qt=!0,se&&(a=Hl,a!==null)))throw a;e.memoizedState=i,e.baseState=m,e.baseQueue=E,s.lastRenderedState=i}return r===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function pu(e){var t=Vt(),a=t.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=e;var s=a.dispatch,r=a.pending,i=t.memoizedState;if(r!==null){a.pending=null;var m=r=r.next;do i=e(i,m.action),m=m.next;while(m!==r);Un(i,t.memoizedState)||(Qt=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,s]}function uA(e,t,a){var s=Ke,r=Vt(),i=ze;if(i){if(a===void 0)throw Error(c(407));a=a()}else a=t();var m=!Un((Rt||r).memoizedState,a);if(m&&(r.memoizedState=a,Qt=!0),r=r.queue,Su(AA.bind(null,s,r,e),[e]),e=r.getSnapshot!==t||m||qt!==null&&(qt.memoizedState.tag&1)!==0,kl(e?9:8,{destroy:void 0},mA.bind(null,s,r,a,t),null),e){if(s.flags|=2048,Lt===null)throw Error(c(349));i||(Xa&127)!==0||dA(s,t,a)}return a}function dA(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=Ke.updateQueue,t===null?(t=Jo(),Ke.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function mA(e,t,a,s){t.value=a,t.getSnapshot=s,fA(t)&&xA(e)}function AA(e,t,a){return a(function(){fA(t)&&xA(e)})}function fA(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!Un(e,a)}catch{return!0}}function xA(e){var t=Xs(e,2);t!==null&&Bn(t,e,2)}function gu(e){var t=Rn();if(typeof e=="function"){var a=e;if(e=a(),sl){En(!0);try{a()}finally{En(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Va,lastRenderedState:e},t}function hA(e,t,a,s){return e.baseState=a,bu(e,Rt,typeof s=="function"?s:Va)}function vg(e,t,a,s,r){if(Qo(e))throw Error(c(485));if(e=t.action,e!==null){var i={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(m){i.listeners.push(m)}};Q.T!==null?a(!0):i.isTransition=!1,s(i),a=t.pending,a===null?(i.next=t.pending=i,bA(t,i)):(i.next=a.next,t.pending=a.next=i)}}function bA(e,t){var a=t.action,s=t.payload,r=e.state;if(t.isTransition){var i=Q.T,m={};m.types=i!==null?i.types:null,Q.T=m;try{var g=a(r,s),E=Q.S;E!==null&&E(m,g),pA(e,t,g)}catch(F){Ru(e,t,F)}finally{i!==null&&m.types!==null&&(i.types=m.types),Q.T=i}}else try{i=a(r,s),pA(e,t,i)}catch(F){Ru(e,t,F)}}function pA(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){gA(e,t,s)},function(s){return Ru(e,t,s)}):gA(e,t,a)}function gA(e,t,a){t.status="fulfilled",t.value=a,RA(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,bA(e,a)))}function Ru(e,t,a){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do t.status="rejected",t.reason=a,RA(t),t=t.next;while(t!==s)}e.action=null}function RA(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function SA(e,t){return t}function yA(e,t){if(ze){var a=Lt.formState;if(a!==null){e:{var s=Ke;if(ze){if(Ht){t:{for(var r=Ht,i=$n;r.nodeType!==8;){if(!i){r=null;break t}if(r=ea(r.nextSibling),r===null){r=null;break t}}i=r.data,r=i==="F!"||i==="F"?r:null}if(r){Ht=ea(r.nextSibling),s=r.data==="F!";break e}}As(s)}s=!1}s&&(t=a[0])}}return a=Rn(),a.memoizedState=a.baseState=t,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:SA,lastRenderedState:t},a.queue=s,a=PA.bind(null,Ke,s),s.dispatch=a,s=gu(!1),i=Ou.bind(null,Ke,!1,s.queue),s=Rn(),r={state:t,dispatch:null,action:e,pending:null},s.queue=r,a=vg.bind(null,Ke,r,i,a),r.dispatch=a,s.memoizedState=e,[t,a,!1]}function NA(e){var t=Vt();return vA(t,Rt,e)}function vA(e,t,a){if(t=bu(e,t,SA)[0],e=Vo(Va)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var s=kr(t)}catch(m){throw m===wl?To:m}else s=t;t=Vt();var r=t.queue,i=r.dispatch;return a!==t.memoizedState&&(Ke.flags|=2048,kl(9,{destroy:void 0},Lg.bind(null,r,a),null)),[s,i,e]}function Lg(e,t){e.action=t}function LA(e){var t=Vt(),a=Rt;if(a!==null)return vA(t,a,e);Vt(),t=t.memoizedState,a=Vt();var s=a.queue.dispatch;return a.memoizedState=e,[t,s,!1]}function kl(e,t,a,s){return e={tag:e,create:a,deps:s,inst:t,next:null},t=Ke.updateQueue,t===null&&(t=Jo(),Ke.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(s=a.next,a.next=e,e.next=s,t.lastEffect=e),e}function OA(){return Vt().memoizedState}function Yo(e,t,a,s){var r=Rn();Ke.flags|=e,r.memoizedState=kl(1|t,{destroy:void 0},a,s===void 0?null:s)}function qo(e,t,a,s){var r=Vt();s=s===void 0?null:s;var i=r.memoizedState.inst;Rt!==null&&s!==null&&du(s,Rt.memoizedState.deps)?r.memoizedState=kl(t,i,a,s):(Ke.flags|=e,r.memoizedState=kl(1|t,i,a,s))}function jA(e,t){Yo(8390656,8,e,t)}function Su(e,t){qo(2048,8,e,t)}function Og(e){Ke.flags|=4;var t=Ke.updateQueue;if(t===null)t=Jo(),Ke.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function IA(e){var t=Vt().memoizedState;return Og({ref:t,nextImpl:e}),function(){if((ut&2)!==0)throw Error(c(440));return t.impl.apply(void 0,arguments)}}function BA(e,t){return qo(4,2,e,t)}function HA(e,t){return qo(4,4,e,t)}function wA(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function EA(e,t,a){a=a!=null?a.concat([e]):null,qo(4,4,wA.bind(null,t,e),a)}function yu(){}function CA(e,t){var a=Vt();t=t===void 0?null:t;var s=a.memoizedState;return t!==null&&du(t,s[1])?s[0]:(a.memoizedState=[e,t],e)}function MA(e,t){var a=Vt();t=t===void 0?null:t;var s=a.memoizedState;if(t!==null&&du(t,s[1]))return s[0];if(s=e(),sl){En(!0);try{e()}finally{En(!1)}}return a.memoizedState=[s,t],s}function Nu(e,t,a){return a===void 0||(Xa&1073741824)!==0&&(Qe&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=Ff(),Ke.lanes|=e,Ls|=e,a)}function kA(e,t,a,s){return Un(a,t)?a:gs.current!==null?(e=Nu(e,a,s),Un(e,t)||(Qt=!0),e):(Xa&106)===0||(Xa&1073741824)!==0&&(Qe&261930)===0?(Qt=!0,e.memoizedState=a):(e=Ff(),Ke.lanes|=e,Ls|=e,t)}function UA(e,t,a,s,r){var i=Re.p;Re.p=i!==0&&8>i?i:8;var m=Q.T,g={};g.types=m!==null?m.types:null,Q.T=g,Ou(e,!1,t,a);try{var E=r(),F=Q.S;if(F!==null&&F(g,E),E!==null&&typeof E=="object"&&typeof E.then=="function"){var se=Sg(E,s);Ur(e,t,se,Pn(e))}else Ur(e,t,s,Pn(e))}catch(he){Ur(e,t,{then:function(){},status:"rejected",reason:he},Pn())}finally{Re.p=i,m!==null&&g.types!==null&&(m.types=g.types),Q.T=m}}function jg(){}function vu(e,t,a,s){if(e.tag!==5)throw Error(c(476));var r=DA(e).queue;UA(e,r,t,Te,a===null?jg:function(){return TA(e),a(s)})}function DA(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Te,baseState:Te,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Va,lastRenderedState:Te},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Va,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function TA(e){var t=DA(e);t.next===null&&(t=e.alternate.memoizedState),Ur(e,t.next.queue,{},Pn())}function Lu(){return cn(er)}function GA(){return Vt().memoizedState}function KA(){return Vt().memoizedState}function Ig(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=Pn();e=bs(a);var s=ps(t,e,a);s!==null&&(Bn(s,t,a),Hr(s,t,a)),t={cache:Wc()},e.payload=t;return}t=t.return}}function Bg(e,t,a){var s=Pn();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Qo(e)?_A(t,a):(a=zc(e,t,a,s),a!==null&&(Bn(a,e,s),ZA(a,t,s)))}function PA(e,t,a){var s=Pn();Ur(e,t,a,s)}function Ur(e,t,a,s){var r={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Qo(e))_A(t,r);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var m=t.lastRenderedState,g=i(m,a);if(r.hasEagerState=!0,r.eagerState=g,Un(g,m))return Io(e,t,r,0),Lt===null&&jo(),!1}catch{}finally{}if(a=zc(e,t,r,s),a!==null)return Bn(a,e,s),ZA(a,t,s),!0}return!1}function Ou(e,t,a,s){if(s={lane:2,revertLane:hd(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Qo(e)){if(t)throw Error(c(479))}else t=zc(e,a,s,2),t!==null&&Bn(t,e,2)}function Qo(e){var t=e.alternate;return e===Ke||t!==null&&t===Ke}function _A(e,t){Cl=zo=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function ZA(e,t,a){if((a&4194048)!==0){var s=t.lanes;s&=e.pendingLanes,a|=s,t.lanes=a,De(e,a)}}var $o={readContext:cn,use:Xo,useCallback:Kt,useContext:Kt,useEffect:Kt,useImperativeHandle:Kt,useLayoutEffect:Kt,useInsertionEffect:Kt,useMemo:Kt,useReducer:Kt,useRef:Kt,useState:Kt,useDebugValue:Kt,useDeferredValue:Kt,useTransition:Kt,useSyncExternalStore:Kt,useId:Kt,useHostTransitionStatus:Kt,useFormState:Kt,useActionState:Kt,useOptimistic:Kt,useMemoCache:Kt,useCacheRefresh:Kt,useEffectEvent:Kt},zA={readContext:cn,use:Xo,useCallback:function(e,t){return Rn().memoizedState=[e,t===void 0?null:t],e},useContext:cn,useEffect:jA,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Yo(4194308,4,wA.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Yo(4194308,4,e,t)},useInsertionEffect:function(e,t){Yo(4,2,e,t)},useMemo:function(e,t){var a=Rn();t=t===void 0?null:t;var s=e();if(sl){En(!0);try{e()}finally{En(!1)}}return a.memoizedState=[s,t],s},useReducer:function(e,t,a){var s=Rn();if(a!==void 0){var r=a(t);if(sl){En(!0);try{a(t)}finally{En(!1)}}}else r=t;return s.memoizedState=s.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},s.queue=e,e=e.dispatch=Bg.bind(null,Ke,e),[s.memoizedState,e]},useRef:function(e){var t=Rn();return e={current:e},t.memoizedState=e},useState:function(e){e=gu(e);var t=e.queue,a=PA.bind(null,Ke,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:yu,useDeferredValue:function(e,t){var a=Rn();return Nu(a,e,t)},useTransition:function(){var e=gu(!1);return e=UA.bind(null,Ke,e.queue,!0,!1),Rn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var s=Ke,r=Rn();if(ze){if(a===void 0)throw Error(c(407));a=a()}else{if(a=t(),Lt===null)throw Error(c(349));(Qe&127)!==0||dA(s,t,a)}r.memoizedState=a;var i={value:a,getSnapshot:t};return r.queue=i,jA(AA.bind(null,s,i,e),[e]),s.flags|=2048,kl(9,{destroy:void 0},mA.bind(null,s,i,a,t),null),a},useId:function(){var e=Rn(),t=Lt.identifierPrefix;if(ze){var a=Na,s=ya;a=(s&~(1<<32-Ct(s)-1)).toString(32)+a,t="_"+t+"R_"+a,a=Fo++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=yg++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Lu,useFormState:yA,useActionState:yA,useOptimistic:function(e){var t=Rn();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Ou.bind(null,Ke,!0,a),a.dispatch=t,[e,t]},useMemoCache:hu,useCacheRefresh:function(){return Rn().memoizedState=Ig.bind(null,Ke)},useEffectEvent:function(e){var t=Rn(),a={impl:e};return t.memoizedState=a,function(){if((ut&2)!==0)throw Error(c(440));return a.impl.apply(void 0,arguments)}}},FA={readContext:cn,use:Xo,useCallback:CA,useContext:cn,useEffect:Su,useImperativeHandle:EA,useInsertionEffect:BA,useLayoutEffect:HA,useMemo:MA,useReducer:Vo,useRef:OA,useState:function(){return Vo(Va)},useDebugValue:yu,useDeferredValue:function(e,t){var a=Vt();return kA(a,Rt.memoizedState,e,t)},useTransition:function(){var e=Vo(Va)[0],t=Vt().memoizedState;return[typeof e=="boolean"?e:kr(e),t]},useSyncExternalStore:uA,useId:GA,useHostTransitionStatus:Lu,useFormState:NA,useActionState:NA,useOptimistic:function(e,t){var a=Vt();return hA(a,Rt,e,t)},useMemoCache:hu,useCacheRefresh:KA,useEffectEvent:IA},Hg={readContext:cn,use:Xo,useCallback:CA,useContext:cn,useEffect:Su,useImperativeHandle:EA,useInsertionEffect:BA,useLayoutEffect:HA,useMemo:MA,useReducer:pu,useRef:OA,useState:function(){return pu(Va)},useDebugValue:yu,useDeferredValue:function(e,t){var a=Vt();return Rt===null?Nu(a,e,t):kA(a,Rt.memoizedState,e,t)},useTransition:function(){var e=pu(Va)[0],t=Vt().memoizedState;return[typeof e=="boolean"?e:kr(e),t]},useSyncExternalStore:uA,useId:GA,useHostTransitionStatus:Lu,useFormState:LA,useActionState:LA,useOptimistic:function(e,t){var a=Vt();return Rt!==null?hA(a,Rt,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:hu,useCacheRefresh:KA,useEffectEvent:IA};function ju(e,t,a,s){t=e.memoizedState,a=a(s,t),a=a==null?t:ue({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Iu={enqueueSetState:function(e,t,a){e=e._reactInternals;var s=Pn(),r=bs(s);r.payload=t,a!=null&&(r.callback=a),t=ps(e,r,s),t!==null&&(Bn(t,e,s),Hr(t,e,s))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var s=Pn(),r=bs(s);r.tag=1,r.payload=t,a!=null&&(r.callback=a),t=ps(e,r,s),t!==null&&(Bn(t,e,s),Hr(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=Pn(),s=bs(a);s.tag=2,t!=null&&(s.callback=t),t=ps(e,s,a),t!==null&&(Bn(t,e,a),Hr(t,e,a))}};function JA(e,t,a,s,r,i,m){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,i,m):t.prototype&&t.prototype.isPureReactComponent?!yr(a,s)||!yr(r,i):!0}function XA(e,t,a,s){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,s),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,s),t.state!==e&&Iu.enqueueReplaceState(t,t.state,null)}function ll(e,t){var a=t;if("ref"in t){a={};for(var s in t)s!=="ref"&&(a[s]=t[s])}if(e=e.defaultProps){a===t&&(a=ue({},a));for(var r in e)a[r]===void 0&&(a[r]=e[r])}return a}function VA(e){Oo(e)}function YA(e){console.error(e)}function qA(e){Oo(e)}function Wo(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(s){setTimeout(function(){throw s})}}function QA(e,t,a){try{var s=e.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function Bu(e,t,a){return a=bs(a),a.tag=3,a.payload={element:null},a.callback=function(){Wo(e,t)},a}function $A(e){return e=bs(e),e.tag=3,e}function WA(e,t,a,s){var r=a.type.getDerivedStateFromError;if(typeof r=="function"){var i=s.value;e.payload=function(){return r(i)},e.callback=function(){QA(t,a,s)}}var m=a.stateNode;m!==null&&typeof m.componentDidCatch=="function"&&(e.callback=function(){QA(t,a,s),typeof r!="function"&&(Os===null?Os=new Set([this]):Os.add(this));var g=s.stack;this.componentDidCatch(s.value,{componentStack:g!==null?g:""})})}function wg(e,t,a,s,r){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(t=a.alternate,t!==null&&Qs(t,a,r,!0),a=un.current,a!==null){switch(a.tag){case 31:case 13:case 19:return hn===null?Ri():a.alternate===null&&Pt===0&&(Pt=3),a.flags&=-257,a.flags|=65536,a.lanes=r,s===Go?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([s]):t.add(s),Ad(e,s,r)),!1;case 22:return a.flags|=65536,s===Go?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([s]):a.add(s)),Ad(e,s,r)),!1}throw Error(c(435,a.tag))}return Ad(e,s,r),Ri(),!1}if(ze)return t=un.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=r,s!==Yc&&(e=Error(c(422),{cause:s}),Lr(Yn(e,a)))):(s!==Yc&&(t=Error(c(423),{cause:s}),Lr(Yn(t,a))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,s=Yn(s,a),r=Bu(e.stateNode,s,r),lu(e,r),Pt!==4&&(Pt=2)),!1;var i=Error(c(520),{cause:s});if(i=Yn(i,a),zr===null?zr=[i]:zr.push(i),Pt!==4&&(Pt=2),t===null)return!0;s=Yn(s,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=r&-r,a.lanes|=e,e=Bu(a.stateNode,s,e),lu(a,e),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Os===null||!Os.has(i))))return a.flags|=65536,r&=-r,a.lanes|=r,r=$A(r),WA(r,e,a,s),lu(a,r),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var Hu=Error(c(461)),Qt=!1;function Wt(e,t,a,s){t.child=e===null?aA(t,null,a,s):al(t,e.child,a,s)}function ef(e,t,a,s,r){a=a.render;var i=t.ref;if("ref"in s){var m={};for(var g in s)g!=="ref"&&(m[g]=s[g])}else m=s;return $s(t),s=mu(e,t,a,m,i,r),g=Au(),e!==null&&!Qt?(fu(e,t,r),Ya(e,t,r)):(ze&&g&&Eo(t),t.flags|=1,Wt(e,t,s,r),t.child)}function tf(e,t,a,s,r){if(e===null){var i=a.type;return typeof i=="function"&&!Fc(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,nf(e,t,i,s,r)):(e=Ho(a.type,null,s,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!Tu(e,r)){var m=i.memoizedProps;if(a=a.compare,a=a!==null?a:yr,a(m,s)&&e.ref===t.ref)return Ya(e,t,r)}return t.flags|=1,e=Za(i,s),e.ref=t.ref,e.return=t,t.child=e}function nf(e,t,a,s,r){if(e!==null){var i=e.memoizedProps;if(yr(i,s)&&e.ref===t.ref)if(Qt=!1,t.pendingProps=s=i,Tu(e,r))(e.flags&131072)!==0&&(Qt=!0);else return t.lanes=e.lanes,Ya(e,t,r)}return wu(e,t,a,s,r)}function af(e,t,a,s){var r=s.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|a:a,e!==null){for(s=t.child=e.child,r=0;s!==null;)r=r|s.lanes|s.childLanes,s=s.sibling;s=r&~i}else s=0,t.child=null;return sf(e,t,i,a,s)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Do(t,i!==null?i.cachePool:null),i!==null?rA(t,i):ou(),oA(t);else return s=t.lanes=536870912,sf(e,t,i!==null?i.baseLanes|a:a,a,s)}else i!==null?(Do(t,i.cachePool),rA(t,i),Ss(),t.memoizedState=null):(e!==null&&Do(t,null),ou(),Ss());return Wt(e,t,r,a),t.child}function Dr(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function sf(e,t,a,s,r){var i=tu();return i=i===null?null:{parent:Yt._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&Do(t,null),ou(),oA(t),e!==null&&Qs(e,t,s,!0),t.childLanes=r,null}function ei(e,t){return t=ti({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function lf(e,t,a){return al(t,e.child,null,a),e=ei(t,t.pendingProps),e.flags|=2,Dn(t),t.memoizedState=null,e}function Eg(e,t,a){var s=t.pendingProps,r=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ze){if(s.mode==="hidden")return e=ei(t,s),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Dr(null,e);if(cu(t),(e=Ht)?(e=Ex(e,$n),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ds!==null?{id:ya,overflow:Na}:null,retryLane:536870912,hydrationErrors:null},a=_0(e),a.return=t,t.child=a,en=t,Ht=null)):e=null,e===null)throw As(t);return t.lanes=536870912,null}return ei(t,s)}var i=e.memoizedState;if(i!==null){var m=i.dehydrated;if(cu(t),r)if(t.flags&256)t.flags&=-257,t=lf(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(c(558));else if(Qt||Qs(e,t,a,!1),r=(a&e.childLanes)!==0,Qt||r){if(gs.current===null){if(s=Lt,s!==null&&(m=rn(s,a),m!==0&&m!==i.retryLane))throw i.retryLane=m,Xs(e,m),Bn(s,e,m),Hu;Ri()}t=lf(e,t,a)}else e=i.treeContext,Ht=ea(m.nextSibling),en=t,ze=!0,ms=null,$n=!1,e!==null&&F0(t,e),t=ei(t,s),t.flags|=134221824;return t}return e=Za(e.child,{mode:s.mode,children:s.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Ul(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(c(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function wu(e,t,a,s,r){return $s(t),a=mu(e,t,a,s,void 0,r),s=Au(),e!==null&&!Qt?(fu(e,t,r),Ya(e,t,r)):(ze&&s&&Eo(t),t.flags|=1,Wt(e,t,a,r),t.child)}function rf(e,t,a,s,r,i){return $s(t),t.updateQueue=null,a=cA(t,s,a,r),iA(e),s=Au(),e!==null&&!Qt?(fu(e,t,i),Ya(e,t,i)):(ze&&s&&Eo(t),t.flags|=1,Wt(e,t,a,i),t.child)}function of(e,t,a,s,r){if($s(t),t.stateNode===null){var i=Ol,m=a.contextType;typeof m=="object"&&m!==null&&(i=cn(m)),i=new a(s,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Iu,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=s,i.state=t.memoizedState,i.refs={},au(t),m=a.contextType,i.context=typeof m=="object"&&m!==null?cn(m):Ol,i.state=t.memoizedState,m=a.getDerivedStateFromProps,typeof m=="function"&&(ju(t,a,m,s),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(m=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),m!==i.state&&Iu.enqueueReplaceState(i,i.state,null),Er(t,s,i,r),wr(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),s=!0}else if(e===null){i=t.stateNode;var g=t.memoizedProps,E=ll(a,g);i.props=E;var F=i.context,se=a.contextType;m=Ol,typeof se=="object"&&se!==null&&(m=cn(se));var he=a.getDerivedStateFromProps;se=typeof he=="function"||typeof i.getSnapshotBeforeUpdate=="function",g=t.pendingProps!==g,se||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(g||F!==m)&&XA(t,i,s,m),hs=!1;var _=t.memoizedState;i.state=_,Er(t,s,i,r),wr(),F=t.memoizedState,g||_!==F||hs?(typeof he=="function"&&(ju(t,a,he,s),F=t.memoizedState),(E=hs||JA(t,a,E,s,_,F,m))?(se||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=s,t.memoizedState=F),i.props=s,i.state=F,i.context=m,s=E):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),s=!1)}else{i=t.stateNode,su(e,t),m=t.memoizedProps,se=ll(a,m),i.props=se,he=t.pendingProps,_=i.context,F=a.contextType,E=Ol,typeof F=="object"&&F!==null&&(E=cn(F)),g=a.getDerivedStateFromProps,(F=typeof g=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(m!==he||_!==E)&&XA(t,i,s,E),hs=!1,_=t.memoizedState,i.state=_,Er(t,s,i,r),wr();var W=t.memoizedState;m!==he||_!==W||hs||e!==null&&e.dependencies!==null&&ko(e.dependencies)?(typeof g=="function"&&(ju(t,a,g,s),W=t.memoizedState),(se=hs||JA(t,a,se,s,_,W,E)||e!==null&&e.dependencies!==null&&ko(e.dependencies))?(F||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(s,W,E),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(s,W,E)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||m===e.memoizedProps&&_===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&_===e.memoizedState||(t.flags|=1024),t.memoizedProps=s,t.memoizedState=W),i.props=s,i.state=W,i.context=E,s=se):(typeof i.componentDidUpdate!="function"||m===e.memoizedProps&&_===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&_===e.memoizedState||(t.flags|=1024),s=!1)}return i=s,Ul(e,t),s=(t.flags&128)!==0,i||s?(i=t.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&s?(t.child=al(t,e.child,null,r),t.child=al(t,null,a,r)):Wt(e,t,a,r),t.memoizedState=i.state,e=t.child):e=Ya(e,t,r),e}function cf(e,t,a,s){return Ys(),t.flags|=256,Wt(e,t,a,s),t.child}var Eu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Cu(e){return{baseLanes:e,cachePool:Q0()}}function Mu(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=Kn),e}function uf(e,t,a){var s=t.pendingProps,r=!1,i=(t.flags&128)!==0,m;if((m=i)||(m=e!==null&&e.memoizedState===null?!1:(dn.current&2)!==0),m&&(r=!0,t.flags&=-129),m=(t.flags&32)!==0,t.flags&=-33,e===null){if(ze){if(r?Rs(t):Ss(),(e=Ht)?(e=Ex(e,$n),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ds!==null?{id:ya,overflow:Na}:null,retryLane:536870912,hydrationErrors:null},a=_0(e),a.return=t,t.child=a,en=t,Ht=null)):e=null,e===null)throw As(t);return Cd(e)?t.lanes=32:t.lanes=536870912,null}return i=s.children,s=s.fallback,r?(Ss(),r=t.mode,i=ti({mode:"hidden",children:i},r),s=Vs(s,r,a,null),i.return=t,s.return=t,i.sibling=s,t.child=i,s=t.child,s.memoizedState=Cu(a),s.childLanes=Mu(e,m,a),t.memoizedState=Eu,Dr(null,s)):(Rs(t),ku(t,i))}var g=e.memoizedState;if(g!==null){var E=g.dehydrated;if(E!==null)return Cg(e,t,i,m,s,E,g,a)}return r?(Ss(),r=s.fallback,i=t.mode,g=e.child,E=g.sibling,s=Za(g,{mode:"hidden",children:s.children}),s.subtreeFlags=g.subtreeFlags&1206910976,E!==null?r=Za(E,r):(r=Vs(r,i,a,null),r.flags|=2),r.return=t,s.return=t,s.sibling=r,t.child=s,Dr(null,s),s=t.child,r=e.child.memoizedState,r===null?r=Cu(a):(i=r.cachePool,i!==null?(g=Yt._currentValue,i=i.parent!==g?{parent:g,pool:g}:i):i=Q0(),r={baseLanes:r.baseLanes|a,cachePool:i}),s.memoizedState=r,s.childLanes=Mu(e,m,a),t.memoizedState=Eu,Dr(e.child,s)):(Rs(t),a=e.child,e=a.sibling,a=Za(a,{mode:"visible",children:s.children}),a.return=t,a.sibling=null,e!==null&&(m=t.deletions,m===null?(t.deletions=[e],t.flags|=16):m.push(e)),t.child=a,t.memoizedState=null,a)}function ku(e,t){return t=ti({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function ti(e,t){return e=Ln(22,e,null,t),e.lanes=0,e}function ni(e,t,a){return al(t,e.child,null,a),e=ku(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Cg(e,t,a,s,r,i,m,g){if(a)return t.flags&256?(Rs(t),t.flags&=-257,ni(e,t,g)):t.memoizedState!==null?(Ss(),t.child=e.child,t.flags|=128,null):(Ss(),i=r.fallback,m=t.mode,r=ti({mode:"visible",children:r.children},m),i=Vs(i,m,g,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,al(t,e.child,null,g),r=t.child,r.memoizedState=Cu(g),r.childLanes=Mu(e,s,g),t.memoizedState=Eu,Dr(null,r));if(Rs(t),Cd(i)){if(s=i.nextSibling&&i.nextSibling.dataset,s)var E=s.dgst;return s=E,s!==""&&(r=Error(c(419)),r.stack="",r.digest=s,Lr({value:r,source:null,stack:null})),ni(e,t,g)}if(Qt||Qs(e,t,g,!1),s=(g&e.childLanes)!==0,Qt||s){if(gs.current!==null)return ni(e,t,g);if(s=Lt,s!==null&&(r=rn(s,g),r!==0&&r!==m.retryLane))throw m.retryLane=r,Xs(e,r),Bn(s,e,r),Hu;return Ed(i)||Ri(),ni(e,t,g)}return Ed(i)?(t.flags|=192,t.child=e.child,null):(e=m.treeContext,Ht=ea(i.nextSibling),en=t,ze=!0,ms=null,$n=!1,e!==null&&F0(t,e),t=ku(t,r.children),t.flags|=134221824,t)}function df(e,t,a){e.lanes|=t;var s=e.alternate;s!==null&&(s.lanes|=t),Mo(e.return,t,a)}function mf(e){for(var t=null;e!==null;){var a=e.alternate;a!==null&&Zo(a)===null&&(t=e),e=e.sibling}return t}function ai(e,t,a,s,r,i){var m=e.memoizedState;m===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:r,treeForkCount:i}:(m.isBackwards=t,m.rendering=null,m.renderingStartTime=0,m.last=s,m.tail=a,m.tailMode=r,m.treeForkCount=i)}function Uu(e){var t=e.child;for(e.child=null;t!==null;){var a=t.sibling;t.sibling=e.child,e.child=t,t=a}}function Du(e,t,a){var s=t.pendingProps,r=s.revealOrder,i=s.tail;s=s.children;var m=dn.current;if(t.flags&128)return Cr(t,m),null;var g=(m&2)!==0;if(g?(m=m&1|2,t.flags|=128):m&=1,Cr(t,m),r==="backwards"&&e!==null?(Uu(e),Wt(e,t,s,a),Uu(e)):Wt(e,t,s,a),s=ze?vr:0,!g&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&df(e,a,t);else if(e.tag===19)df(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(r){case"backwards":a=mf(t.child),a===null?(r=t.child,t.child=null):(r=a.sibling,a.sibling=null,Uu(t)),ai(t,!0,r,null,i,s);break;case"unstable_legacy-backwards":for(a=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&Zo(e)===null){t.child=r;break}e=r.sibling,r.sibling=a,a=r,r=e}ai(t,!0,a,null,i,s);break;case"together":ai(t,!1,null,null,void 0,s);break;case"independent":t.memoizedState=null;break;default:a=mf(t.child),a===null?(r=t.child,t.child=null):(r=a.sibling,a.sibling=null),ai(t,!1,r,a,i,s)}return t.child}function Af(e,t,a){var s=t.pendingProps;return fs(t,t.type,s.value),Wt(e,t,s.children,a),t.child}function Ya(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Ls|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Qs(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,a=Za(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Za(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Tu(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&ko(e)))}function Mg(e,t,a){switch(t.tag){case 3:Ae(t,t.stateNode.containerInfo),fs(t,Yt,e.memoizedState.cache),Ys();break;case 27:case 5:lt(t);break;case 4:Ae(t,t.stateNode.containerInfo);break;case 10:fs(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,cu(t),null;break;case 13:var s=t.memoizedState;if(s!==null){if(s.dehydrated!==null)return Rs(t),t.flags|=128,null;s=Qs(e,t,a,!1);var r=t.child.childLanes;return s||(a&r)!==0?uf(e,t,a):(Rs(t),e=Ya(e,t,a),e!==null?e.sibling:null)}Rs(t);break;case 19:if(t.flags&128)return Du(e,t,a);if(r=(e.flags&128)!==0,s=(a&t.childLanes)!==0,s||(Qs(e,t,a,!1),s=(a&t.childLanes)!==0),r){if(s)return Du(e,t,a);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Cr(t,dn.current),s)break;return null;case 22:return t.lanes=0,af(e,t,a,t.pendingProps);case 24:fs(t,Yt,e.memoizedState.cache)}return Ya(e,t,a)}function ff(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Qt=!0;else{if(!Tu(e,a)&&(t.flags&128)===0)return Qt=!1,Mg(e,t,a);Qt=(e.flags&131072)!==0}else Qt=!1,ze&&(t.flags&1048576)!==0&&z0(t,vr,t.index);switch(t.lanes=0,t.tag){case 16:e:{var s=t.pendingProps;if(e=tl(t.elementType),t.type=e,typeof e=="function")Fc(e)?(s=ll(e,s),t.tag=1,t=of(null,t,e,s,a)):(t.tag=0,t=wu(null,t,e,s,a));else{if(e!=null){var r=e.$$typeof;if(r===S){t.tag=11,t=ef(null,t,e,s,a);break e}else if(r===ee){t.tag=14,t=tf(null,t,e,s,a);break e}else if(r===O){t.tag=10,t.type=e,t=Af(null,t,a);break e}}throw t=Ie(e)||e,Error(c(306,t,""))}}return t;case 0:return wu(e,t,t.type,t.pendingProps,a);case 1:return s=t.type,r=ll(s,t.pendingProps),of(e,t,s,r,a);case 3:e:{if(Ae(t,t.stateNode.containerInfo),e===null)throw Error(c(387));s=t.pendingProps;var i=t.memoizedState;r=i.element,su(e,t),Er(t,s,null,a);var m=t.memoizedState;if(s=m.cache,fs(t,Yt,s),s!==i.cache&&$c(t,[Yt],a,!0),wr(),s=m.element,i.isDehydrated)if(i={element:s,isDehydrated:!1,cache:m.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=cf(e,t,s,a);break e}else if(s!==r){r=Yn(Error(c(424)),t),Lr(r),t=cf(e,t,s,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ht=ea(e.firstChild),en=t,ze=!0,ms=null,$n=!0,a=aA(t,null,s,a),t.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling}else{if(Ys(),s===r){t=Ya(e,t,a);break e}Wt(e,t,s,a)}t=t.child}return t;case 26:return Ul(e,t),e===null?(a=Gx(t.type,null,t.pendingProps,null))?t.memoizedState=a:ze||(t.stateNode=px(t.type,t.pendingProps,gt.current,t)):t.memoizedState=Gx(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return lt(t),e===null&&ze&&(s=t.stateNode=kx(t.type,t.pendingProps,gt.current),en=t,$n=!0,r=Ht,Bs(t.type)?(Md=r,Ht=ea(s.firstChild)):Ht=r),Wt(e,t,t.pendingProps.children,a),Ul(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ze&&((r=s=Ht)&&(s=I1(s,t.type,t.pendingProps,$n),s!==null?(t.stateNode=s,en=t,Ht=ea(s.firstChild),$n=!1,r=!0):r=!1),r||As(t)),lt(t),r=t.type,i=t.pendingProps,m=e!==null?e.memoizedProps:null,s=i.children,Ld(r,i)?s=null:m!==null&&Ld(r,m)&&(t.flags|=32),t.memoizedState!==null&&(r=mu(e,t,Ng,null,null,a),er._currentValue=r),Ul(e,t),Wt(e,t,s,a),t.child;case 6:return e===null&&ze&&((e=a=Ht)&&(a=B1(a,t.pendingProps,$n),a!==null?(t.stateNode=a,en=t,Ht=null,e=!0):e=!1),e||As(t)),null;case 13:return uf(e,t,a);case 4:return Ae(t,t.stateNode.containerInfo),s=t.pendingProps,e===null?t.child=al(t,null,s,a):Wt(e,t,s,a),t.child;case 11:return ef(e,t,t.type,t.pendingProps,a);case 7:return s=t.pendingProps,Ul(e,t),Wt(e,t,s,a),t.child;case 8:return Wt(e,t,t.pendingProps.children,a),t.child;case 12:return Wt(e,t,t.pendingProps.children,a),t.child;case 10:return Af(e,t,a);case 9:return r=t.type._context,s=t.pendingProps.children,$s(t),r=cn(r),s=s(r),t.flags|=1,Wt(e,t,s,a),t.child;case 14:return tf(e,t,t.type,t.pendingProps,a);case 15:return nf(e,t,t.type,t.pendingProps,a);case 19:return Du(e,t,a);case 31:return Eg(e,t,a);case 22:return af(e,t,a,t.pendingProps);case 24:return $s(t),s=cn(Yt),e===null?(r=tu(),r===null&&(r=Lt,i=Wc(),r.pooledCache=i,i.refCount++,i!==null&&(r.pooledCacheLanes|=a),r=i),t.memoizedState={parent:s,cache:r},au(t),fs(t,Yt,r)):((e.lanes&a)!==0&&(su(e,t),Er(t,null,null,a),wr()),r=e.memoizedState,i=t.memoizedState,r.parent!==s?(r={parent:s,cache:s},t.memoizedState=r,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=r),fs(t,Yt,s)):(s=i.cache,fs(t,Yt,s),s!==r.cache&&$c(t,[Yt],a,!0))),Wt(e,t,t.pendingProps.children,a),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),s=t.pendingProps,s.name!=null&&s.name!=="auto"?t.flags|=e===null?18882560:18874368:ze&&Eo(t),e!==null&&e.memoizedProps.name!==s.name?t.flags|=4194816:Ul(e,t),Wt(e,t,s.children,a),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function qa(e){e.flags|=4}function Gu(e,t,a,s,r){var i;if((i=(e.mode&32)!==0)&&(i=a===null?Zx(t,s):Zx(t,s)&&(s.src!==a.src||s.srcSet!==a.srcSet)),i){if(e.flags|=16777216,(r&335544128)===r)if(e.stateNode.complete)e.flags|=8192;else if(Yf())e.flags|=8192;else throw nl=Go,nu}else e.flags&=-16777217}function xf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!zx(t))if(Yf())e.flags|=8192;else throw nl=Go,nu}function si(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?v():536870912,e.lanes|=t,Pl|=t)}function Tr(e,t){if(!ze)switch(e.tailMode){case"visible":break;case"collapsed":for(var a=e.tail,s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null;break;default:for(t=e.tail,a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null}}function wt(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,s=0;if(t)for(var r=e.child;r!==null;)a|=r.lanes|r.childLanes,s|=r.subtreeFlags&1206910976,s|=r.flags&1206910976,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)a|=r.lanes|r.childLanes,s|=r.subtreeFlags,s|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=s,e.childLanes=a,t}function kg(e,t,a){var s=t.pendingProps;switch(Vc(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return wt(t),null;case 1:return wt(t),null;case 3:return a=t.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),t.memoizedState.cache!==s&&(t.flags|=2048),Ja(Yt),Ue(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Bl(t)?qa(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,qc())),wt(t),null;case 26:var r=t.type,i=t.memoizedState;return e===null?(qa(t),i!==null?(wt(t),xf(t,i)):(wt(t),Gu(t,r,null,s,a))):i?i!==e.memoizedState?(qa(t),wt(t),xf(t,i)):(wt(t),t.flags&=-16777217):(e=e.memoizedProps,e!==s&&qa(t),wt(t),Gu(t,r,e,s,a)),null;case 27:if(Ot(t),a=gt.current,r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==s&&qa(t);else{if(!s){if(t.stateNode===null)throw Error(c(166));return wt(t),t.subtreeFlags&=-33554433,null}e=st.current,Bl(t)?J0(t):(e=kx(r,s,a),t.stateNode=e,qa(t))}return wt(t),t.subtreeFlags&=-33554433,null;case 5:if(Ot(t),r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==s&&qa(t);else{if(!s){if(t.stateNode===null)throw Error(c(166));return wt(t),t.subtreeFlags&=-33554433,null}if(i=st.current,Bl(t))J0(t);else{var m=Yr(gt.current);switch(i){case 1:i=m.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:i=m.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":i=m.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":i=m.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":i=m.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof s.is=="string"?m.createElement("select",{is:s.is}):m.createElement("select"),s.multiple?i.multiple=!0:s.size&&(i.size=s.size);break;default:i=typeof s.is=="string"?m.createElement(r,{is:s.is}):m.createElement(r)}}i[ot]=t,i[Et]=s;e:for(m=t.child;m!==null;){if(m.tag===5||m.tag===6)i.appendChild(m.stateNode);else if(m.tag!==4&&m.tag!==27&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;m=m.return}m.sibling.return=m.return,m=m.sibling}t.stateNode=i;e:switch(An(i,r,s),r){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}s&&qa(t)}}return wt(t),t.subtreeFlags&=-33554433,Gu(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==s&&qa(t);else{if(typeof s!="string"&&t.stateNode===null)throw Error(c(166));if(e=gt.current,Bl(t)){if(e=t.stateNode,a=t.memoizedProps,s=null,r=en,r!==null)switch(r.tag){case 27:case 5:s=r.memoizedProps}e[ot]=t,e=!!(e.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||fx(e.nodeValue,a)),e||As(t,!0)}else e=Yr(e).createTextNode(s),e[ot]=t,t.stateNode=e}return wt(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(s=Bl(t),a!==null){if(e===null){if(!s)throw Error(c(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(557));e[ot]=t}else Ys(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;wt(t),e=!1}else a=qc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(Dn(t),t):(Dn(t),null);if((t.flags&128)!==0)throw Error(c(558))}return wt(t),null;case 13:if(s=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=Bl(t),s!==null&&s.dehydrated!==null){if(e===null){if(!r)throw Error(c(318));if(r=t.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(c(317));r[ot]=t}else Ys(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;wt(t),r=!1}else r=qc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return t.flags&256?(Dn(t),t):(Dn(t),null)}return Dn(t),(t.flags&128)!==0?(t.lanes=a,t):(a=s!==null,e=e!==null&&e.memoizedState!==null,a&&(s=t.child,r=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(r=s.alternate.memoizedState.cachePool.pool),i=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(i=s.memoizedState.cachePool.pool),i!==r&&(s.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),si(t,t.updateQueue),wt(t),null);case 4:return Ue(),e===null&&Rd(t.stateNode.containerInfo),t.flags|=67108864,wt(t),null;case 10:return Ja(t.type),wt(t),null;case 19:if(uu(t),s=t.memoizedState,s===null)return wt(t),null;if(r=(t.flags&128)!==0,i=s.rendering,i===null)if(r)Tr(s,!1);else{if(Pt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=Zo(e),i!==null){for(t.flags|=128,Tr(s,!1),e=i.updateQueue,t.updateQueue=e,si(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)P0(a,e),a=a.sibling;return Cr(t,dn.current&1|2),ze&&za(t,s.treeForkCount),t.child}e=e.sibling}s.tail!==null&&Tt()>hi&&(t.flags|=128,r=!0,Tr(s,!1),t.lanes=4194304)}else{if(!r)if(e=Zo(i),e!==null){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,si(t,e),Tr(s,!0),s.tail===null&&s.tailMode!=="collapsed"&&s.tailMode!=="visible"&&!i.alternate&&!ze)return wt(t),null}else 2*Tt()-s.renderingStartTime>hi&&a!==536870912&&(t.flags|=128,r=!0,Tr(s,!1),t.lanes=4194304);s.isBackwards?(i.sibling=t.child,t.child=i):(e=s.last,e!==null?e.sibling=i:t.child=i,s.last=i)}if(s.tail!==null){e=s.tail;e:{for(a=e;a!==null;){if(a.alternate!==null){a=!1;break e}a=a.sibling}a=!0}return s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Tt(),e.sibling=null,i=dn.current,i=r?i&1|2:i&1,s.tailMode==="visible"||s.tailMode==="collapsed"||!a||ze?Cr(t,i):(a=i,ve(un,t),ve(dn,a),hn===null&&(hn=t)),ze&&za(t,s.treeForkCount),e}return wt(t),null;case 22:case 23:return Dn(t),iu(),s=t.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(t.flags|=8192):s&&(t.flags|=8192),s?(a&536870912)!==0&&(t.flags&128)===0&&(wt(t),t.subtreeFlags&6&&(t.flags|=8192)):wt(t),a=t.updateQueue,a!==null&&si(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),s=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),s!==a&&(t.flags|=2048),e!==null&&et(el),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Ja(Yt),wt(t),null;case 25:return null;case 30:return t.flags|=33554432,wt(t),null}throw Error(c(156,t.tag))}function Ug(e,t){switch(Vc(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ja(Yt),Ue(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ot(t),null;case 31:if(t.memoizedState!==null){if(Dn(t),t.alternate===null)throw Error(c(340));Ys()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Dn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));Ys()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return uu(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return Ue(),null;case 10:return Ja(t.type),null;case 22:case 23:return Dn(t),iu(),e!==null&&et(el),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ja(Yt),null;case 25:return null;default:return null}}function hf(e,t){switch(Vc(t),t.tag){case 3:Ja(Yt),Ue();break;case 26:case 27:case 5:Ot(t);break;case 4:Ue();break;case 31:t.memoizedState!==null&&Dn(t);break;case 13:Dn(t);break;case 19:uu(t);break;case 10:Ja(t.type);break;case 22:case 23:Dn(t),iu(),e!==null&&et(el);break;case 24:Ja(Yt)}}function Gr(e,t){try{var a=t.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var r=s.next;a=r;do{if((a.tag&e)===e){s=void 0;var i=a.create,m=a.inst;s=i(),m.destroy=s}a=a.next}while(a!==r)}}catch(g){ht(t,t.return,g)}}function ys(e,t,a){try{var s=t.updateQueue,r=s!==null?s.lastEffect:null;if(r!==null){var i=r.next;s=i;do{if((s.tag&e)===e){var m=s.inst,g=m.destroy;if(g!==void 0){m.destroy=void 0,r=t;var E=a,F=g;try{F()}catch(se){ht(r,E,se)}}}s=s.next}while(s!==i)}}catch(se){ht(t,t.return,se)}}function bf(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{lA(t,a)}catch(s){ht(e,e.return,s)}}}function pf(e,t,a){a.props=ll(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(s){ht(e,t,s)}}function va(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var s=e.stateNode;break;case 30:var r=e.stateNode,i=Pa(e.memoizedProps,r);(r.ref===null||r.ref.name!==i)&&(r.ref=Lx(i)),s=r.ref;break;case 7:if(e.stateNode===null){var m=new _n(e);p(e.child,!1,O1,m,void 0,void 0),e.stateNode=m}s=e.stateNode;break;default:s=e.stateNode}typeof a=="function"?e.refCleanup=a(s):a.current=s}}catch(g){ht(e,t,g)}}function mn(e,t){var a=e.ref,s=e.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(r){ht(e,t,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(r){ht(e,t,r)}else a.current=null}function li(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var a=0;a<t.length;a++)wx(e.stateNode,t[a])}function gf(e){for(var t=e.return;t!==null&&(Pu(t)&&wx(e.stateNode,t.stateNode),!Ku(t));)t=t.return}function Kr(e){for(var t=e.return;t!==null&&(Pu(t)&&j1(e.stateNode,t.stateNode),!Ku(t));)t=t.return}function Ku(e){return e.tag===5||e.tag===3||e.tag===27}function Pu(e){return e&&e.tag===7&&e.stateNode!==null}function _u(e){var t=e.type,a=e.memoizedProps,s=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break e;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(r){ht(e,e.return,r)}}function Zu(e,t,a){try{var s=e.stateNode;i1(s,e.type,a,t),s[Et]=t}catch(r){ht(e,e.return,r)}}function Rf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Bs(e.type)||e.tag===4}function zu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Rf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Bs(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Fu(e,t,a,s){var r=e.tag;if(r===5||r===6)r=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(r,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(r),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Sa)),li(e,s),it=!0;else if(r!==4&&(r===27&&(li(e,s),s=null,Bs(e.type)&&(a=e.stateNode,t=null)),e=e.child,e!==null))for(Fu(e,t,a,s),e=e.sibling;e!==null;)Fu(e,t,a,s),e=e.sibling}function ri(e,t,a,s){var r=e.tag;if(r===5||r===6)r=e.stateNode,t?a.insertBefore(r,t):a.appendChild(r),li(e,s),it=!0;else if(r!==4&&(r===27&&(li(e,s),s=null,Bs(e.type)&&(a=e.stateNode)),e=e.child,e!==null))for(ri(e,t,a,s),e=e.sibling;e!==null;)ri(e,t,a,s),e=e.sibling}function Sf(e){var t=e.stateNode,a=e.memoizedProps;try{for(var s=e.type,r=t.attributes;r.length;)t.removeAttributeNode(r[0]);An(t,s,a),t[ot]=e,t[Et]=a}catch(i){ht(e,e.return,i)}}var oi=!1,Tn=null;function yf(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(oi=!0)}var La=null;function Nf(){var e=La;return La=null,e}var On=0;function Dl(e,t,a,s,r){return On=0,vf(e.child,t,a,s,r)}function vf(e,t,a,s,r){for(var i=!1;e!==null;){if(e.tag===5){var m=e.stateNode;if(s!==null){var g=Id(m);s.push(g),g.view&&(i=!0)}else i||Id(m).view&&(i=!0);oi=!0,Nx(m,On===0?t:t+"_"+On,a),On++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&r||vf(e.child,t,a,s,r)&&(i=!0));e=e.sibling}return i}function Oa(e,t){for(;e!==null;)e.tag===5?vx(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||Oa(e.child,t)),e=e.sibling}function ii(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(ii(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name==="auto")throw Error(c(544));var a=t.name;t=_a(t.default,t.share),t!=="none"&&(Dl(e,a,t,null,!1)||Oa(e.child,!1))}e=e.sibling}}function Ju(e,t){if(e.tag===30){var a=e.stateNode,s=e.memoizedProps,r=Pa(s,a),i=_a(s.default,a.paired?s.share:s.enter);i!=="none"?Dl(e,r,i,null,!1)?(ii(e),a.paired||t||Fl(e,s.onEnter)):Oa(e.child,!1):ii(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Ju(e,t),e=e.sibling;else ii(e)}function Xu(e){if(Tn!==null&&Tn.size!==0){var t=Tn;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var a=e.memoizedProps,s=a.name;if(s!=null&&s!=="auto"){var r=t.get(s);if(r!==void 0){var i=_a(a.default,a.share);if(i!=="none"&&(Dl(e,s,i,null,!1)?(i=e.stateNode,r.paired=i,i.paired=r,Fl(e,a.onShare)):Oa(e.child,!1)),t.delete(s),t.size===0)break}}}Xu(e)}e=e.sibling}}}function Vu(e){if(e.tag===30){var t=e.memoizedProps,a=Pa(t,e.stateNode),s=Tn!==null?Tn.get(a):void 0,r=_a(t.default,s!==void 0?t.share:t.exit);r!=="none"&&(Dl(e,a,r,null,!1)?s!==void 0?(r=e.stateNode,s.paired=r,r.paired=s,Tn.delete(a),Fl(e,t.onShare)):Fl(e,t.onExit):Oa(e.child,!1)),Tn!==null&&Xu(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Vu(e),e=e.sibling;else Tn!==null&&Xu(e)}function Lf(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,a=Pa(t,e.stateNode);t=_a(t.default,t.update),e.flags&=-5,t!=="none"&&Dl(e,a,t,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&Lf(e);e=e.sibling}}function Yu(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var t=e.stateNode;t.paired!==null&&(t.paired=null,Oa(e.child,!1))}Yu(e)}e=e.sibling}}function ci(e){if(e.tag===30)e.stateNode.paired=null,Oa(e.child,!1),Yu(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)ci(e),e=e.sibling;else Yu(e)}function Of(e){for(e=e.child;e!==null;)e.tag===30?Oa(e.child,!1):(e.subtreeFlags&33554432)!==0&&Of(e),e=e.sibling}function qu(e,t,a,s,r,i,m){for(var g=!1;t!==null;){if(t.tag===5){var E=t.stateNode;if(i!==null&&On<i.length){var F=i[On],se=Id(E);(F.view||se.view)&&(g=!0);var he;if(he=(e.flags&4)===0)if(se.clip)he=!0;else{he=F.rect;var _=se.rect;he=he.y!==_.y||he.x!==_.x||he.height!==_.height||he.width!==_.width}he&&(e.flags|=4),se.abs?se=!F.abs:(F=F.rect,se=se.rect,se=F.height!==se.height||F.width!==se.width),se&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&Nx(E,On===0?a:a+"_"+On,r),g&&(e.flags&4)!==0||(La===null&&(La=[]),La.push(E,On===0?s:s+"_"+On,t.memoizedProps)),On++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&m?e.flags|=t.flags&32:qu(e,t.child,a,s,r,i,m)&&(g=!0));t=t.sibling}return g}function jf(e,t){for(e=e.child;e!==null;){if(e.tag===30){var a=e.memoizedProps,s=e.stateNode,r=Pa(a,s),i=_a(a.default,a.update),m;m=e.memoizedState,e.memoizedState=null,s=e;var g=e.child;On=0,r=qu(s,g,r,r,i,m,!1),(e.flags&4)!==0&&r&&Fl(e,a.onUpdate)}else(e.subtreeFlags&33554432)!==0&&jf(e);e=e.sibling}}var tn=!1,dt=!1,ja=!1,Qu=!1,If=typeof WeakSet=="function"?WeakSet:Set,nn=null,Ia=!1,Pr=!1,ui=!1,$u=!1;function Dg(e,t,a){if(e=e.containerInfo,Nd=tr,e=w0(e),Tc(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else e:{s=(s=e.ownerDocument)&&s.defaultView||window;var r=s.getSelection&&s.getSelection();if(r&&r.rangeCount!==0){s=r.anchorNode;var i=r.anchorOffset,m=r.focusNode;r=r.focusOffset;try{s.nodeType,m.nodeType}catch{s=null;break e}var g=0,E=-1,F=-1,se=0,he=0,_=e,W=null;t:for(;;){for(var Ne;_!==s||i!==0&&_.nodeType!==3||(E=g+i),_!==m||r!==0&&_.nodeType!==3||(F=g+r),_.nodeType===3&&(g+=_.nodeValue.length),(Ne=_.firstChild)!==null;)W=_,_=Ne;for(;;){if(_===e)break t;if(W===s&&++se===i&&(E=g),W===m&&++he===r&&(F=g),(Ne=_.nextSibling)!==null)break;_=W,W=_.parentNode}_=Ne}s=E===-1||F===-1?null:{start:E,end:F}}else s=null}s=s||{start:0,end:0}}else s=null;for(vd={focusedElem:e,selectionRange:s},tr=!1,a=(a&335544064)===a,nn=t,t=a?9270:1024;nn!==null;){if(e=nn,a&&(s=e.deletions,s!==null))for(i=0;i<s.length;i++)a&&Vu(s[i]);if(e.alternate===null&&(e.flags&2)!==0)a&&yf(e),di(a);else{if(e.tag===22){if(s=e.alternate,e.memoizedState!==null){s!==null&&s.memoizedState===null&&a&&Vu(s),di(a);continue}else if(s!==null&&s.memoizedState!==null){a&&yf(e),di(a);continue}}s=e.child,(e.subtreeFlags&t)!==0&&s!==null?(s.return=e,nn=s):(a&&Lf(e),di(a))}}Tn=null}function di(e){for(;nn!==null;){var t=nn,a=e,s=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if((r&1024)!==0&&s!==null){a=void 0,r=s.memoizedProps,s=s.memoizedState;var i=t.stateNode;try{var m=ll(t.type,r);a=i.getSnapshotBeforeUpdate(m,s),i.__reactInternalSnapshotBeforeUpdate=a}catch(g){ht(t,t.return,g)}}break;case 3:if((r&1024)!==0){if(s=t.stateNode.containerInfo,a=s.nodeType,a===9)wd(s);else if(a===1)switch(s.nodeName){case"HEAD":case"HTML":case"BODY":wd(s);break;default:s.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&s!==null&&(a=Pa(s.memoizedProps,s.stateNode),r=t.memoizedProps,r=_a(r.default,r.update),r!=="none"&&Dl(s,a,r,s.memoizedState=[],!0));break;default:if((r&1024)!==0)throw Error(c(163))}if(s=t.sibling,s!==null){s.return=t.return,nn=s;break}nn=t.return}}function Bf(e,t,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:Ba(e,a),s&4&&Gr(5,a);break;case 1:if(Ba(e,a),s&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(m){ht(a,a.return,m)}else{var r=ll(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(r,t,e.__reactInternalSnapshotBeforeUpdate)}catch(m){ht(a,a.return,m)}}s&64&&bf(a),s&512&&va(a,a.return);break;case 3:if(Ba(e,a),s&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{lA(e,t)}catch(m){ht(a,a.return,m)}}break;case 27:t===null&&s&4&&Sf(a);case 26:case 5:Ba(e,a),t===null&&s&4&&_u(a),s&512&&va(a,a.return);break;case 12:Ba(e,a);break;case 31:Ba(e,a),s&4&&Cf(e,a);break;case 13:Ba(e,a),s&4&&Mf(e,a),s&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Yg.bind(null,a),H1(e,a))));break;case 22:if(s=a.memoizedState!==null||tn,!s){var i=t!==null&&t.memoizedState!==null||dt;t=tn,r=dt,tn=s,(dt=i)&&!r?(s=2,(a.subtreeFlags&8772)!==0&&(s|=1),ma(e,a,s)):Ba(e,a),tn=t,dt=r}break;case 30:Ba(e,a),s&512&&va(a,a.return);break;case 7:s&512&&va(a,a.return);default:Ba(e,a)}}function Wu(e,t){for(e=e.child;e!==null;)Hf(e,t),e=e.sibling}function Hf(e,t){switch(e.tag){case 5:case 26:try{var a=e.stateNode;if(t){var s=a.style;typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"}else{var r=e.stateNode,i=e.memoizedProps.style,m=i!=null&&i.hasOwnProperty("display")?i.display:null;r.style.display=m==null||typeof m=="boolean"?"":(""+m).trim()}}catch(E){ht(e,e.return,E)}ed(e,t);break;case 6:try{e.stateNode.nodeValue=t?"":e.memoizedProps,it=!0}catch(E){ht(e,e.return,E)}break;case 18:try{var g=e.stateNode;t?yx(g,!0):yx(e.stateNode,!1)}catch(E){ht(e,e.return,E)}break;case 22:case 23:e.memoizedState===null&&Wu(e,t);break;default:Wu(e,t)}}function ed(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){e:{var a=e,s=t;switch(a.tag){case 4:Hf(a,s);break e;case 22:a.memoizedState===null&&ed(a,s);break e;default:ed(a,s)}}e=e.sibling}}function wf(e){var t=e.alternate;t!==null&&(e.alternate=null,wf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&D(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Mt=null,jn=!1;function ua(e,t,a){for(a=a.child;a!==null;)Ef(e,t,a),a=a.sibling}function Ef(e,t,a){if(kt&&typeof kt.onCommitFiberUnmount=="function")try{kt.onCommitFiberUnmount(pa,a)}catch{}switch(a.tag){case 26:dt||mn(a,t),ua(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!dt&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:dt||mn(a,t),Kr(a);var s=Mt,r=jn;Bs(a.type)&&(Mt=a.stateNode,jn=!1),ua(e,t,a),Ux(a.stateNode,a.type,a.memoizedProps),Mt=s,jn=r;break;case 5:dt||mn(a,t),Kr(a);case 6:if(a.tag===6&&Kr(a),s=Mt,r=jn,Mt=null,ua(e,t,a),Mt=s,jn=r,Mt!==null)if(jn)try{(Mt.nodeType===9?Mt.body:Mt.nodeName==="HTML"?Mt.ownerDocument.body:Mt).removeChild(a.stateNode),it=!0}catch(i){ht(a,t,i)}else try{Mt.removeChild(a.stateNode),it=!0}catch(i){ht(a,t,i)}break;case 18:Mt!==null&&(jn?(e=Mt,Sx(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),nr(e)):Sx(Mt,a.stateNode));break;case 4:s=Mt,r=jn,Mt=a.stateNode.containerInfo,jn=!0,ua(e,t,a),Mt=s,jn=r;break;case 0:case 11:case 14:case 15:ys(2,a,t),dt||ys(4,a,t),ua(e,t,a);break;case 1:dt||(mn(a,t),s=a.stateNode,typeof s.componentWillUnmount=="function"&&pf(a,t,s)),ua(e,t,a);break;case 21:ua(e,t,a);break;case 22:dt=(s=dt)||a.memoizedState!==null,ua(e,t,a),dt=s;break;case 30:mn(a,t),ua(e,t,a);break;case 7:dt||mn(a,t),ua(e,t,a);break;default:ua(e,t,a)}}function Cf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{nr(e)}catch(a){ht(t,t.return,a)}}}function Mf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{nr(e)}catch(a){ht(t,t.return,a)}}function Tg(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new If),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new If),t;default:throw Error(c(435,e.tag))}}function mi(e,t){var a=Tg(e);t.forEach(function(s){if(!a.has(s)){a.add(s);var r=qg.bind(null,e,s);s.then(r,r)}})}function Sn(e,t,a){var s=t.deletions;if(s!==null)for(var r=0;r<s.length;r++){var i=s[r],m=e,g=t,E=g;e:for(;E!==null;){switch(E.tag){case 27:if(Bs(E.type)){Mt=E.stateNode,jn=!1;break e}break;case 5:Mt=E.stateNode,jn=!1;break e;case 3:case 4:Mt=E.stateNode.containerInfo,jn=!0;break e}E=E.return}if(Mt===null)throw Error(c(160));Ef(m,g,i),Mt=null,jn=!1,m=i.alternate,m!==null&&(m.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)kf(t,e,a),t=t.sibling}var da=null;function kf(e,t,a){var s=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(r&4&&(s=e.updateQueue,s=s!==null?s.events:null,s!==null))for(var i=0;i<s.length;i++){var m=s[i];m.ref.impl=m.nextImpl}Sn(t,e,a),yn(e),r&4&&(ys(3,e,e.return),Gr(3,e),ys(5,e,e.return));break;case 1:Sn(t,e,a),yn(e),r&512&&(dt||s===null||mn(s,s.return)),r&64&&tn&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?t:a.concat(t))));break;case 26:if(i=da,Sn(t,e,a),yn(e),r&512&&(dt||s===null||mn(s,s.return)),r&4)if(r=s!==null?s.memoizedState:null,a=e.memoizedState,s===null)if(a===null)if(e.stateNode===null)if(tn)e.stateNode=px(e.type,e.memoizedProps,t.containerInfo,e);else{e:{t=e.type,a=e.memoizedProps,r=i.ownerDocument||i;t:switch(t){case"title":s=r.getElementsByTagName("title")[0],(!s||s[zs]||s[ot]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=r.createElement(t),r.head.insertBefore(s,r.querySelector("head > title"))),An(s,t,a),s[ot]=e,Xe(s),t=s;break e;case"link":if(i=_x("link","href",r).get(t+(a.href||""))){for(m=0;m<i.length;m++)if(s=i[m],s.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&s.getAttribute("rel")===(a.rel==null?null:a.rel)&&s.getAttribute("title")===(a.title==null?null:a.title)&&s.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){i.splice(m,1);break t}}s=r.createElement(t),An(s,t,a),r.head.appendChild(s);break;case"meta":if(i=_x("meta","content",r).get(t+(a.content||""))){for(m=0;m<i.length;m++)if(s=i[m],s.getAttribute("content")===(a.content==null?null:""+a.content)&&s.getAttribute("name")===(a.name==null?null:a.name)&&s.getAttribute("property")===(a.property==null?null:a.property)&&s.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&s.getAttribute("charset")===(a.charSet==null?null:a.charSet)){i.splice(m,1);break t}}s=r.createElement(t),An(s,t,a),r.head.appendChild(s);break;default:throw Error(c(468,t))}s[ot]=e,Xe(s),t=s}e.stateNode=t}else tn||Td(i,e.type,e.stateNode);else e.stateNode=Px(i,a,e.memoizedProps);else r!==a?(r===null?(t=s.stateNode,t===null||dt||t.parentNode.removeChild(t)):r.count--,a===null?tn||Td(i,e.type,e.stateNode):Px(i,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Zu(e,e.memoizedProps,s.memoizedProps);break;case 27:Sn(t,e,a),yn(e),r&512&&(dt||s===null||mn(s,s.return)),s!==null&&r&4&&Zu(e,e.memoizedProps,s.memoizedProps);break;case 5:if(i=ja,ja=!1,Sn(t,e,a),ja=i,yn(e),r&512&&(dt||s===null||mn(s,s.return)),e.flags&32){t=e.stateNode;try{gl(t,""),it=!0}catch(se){ht(e,e.return,se)}}r&4&&e.stateNode!=null&&(t=e.memoizedProps,Zu(e,t,s!==null?s.memoizedProps:t)),r&1024&&(Qu=!0);break;case 6:if(Sn(t,e,a),yn(e),r&4){if(e.stateNode===null)throw Error(c(162));t=e.memoizedProps,a=e.stateNode;try{a.nodeValue=t,it=!0}catch(se){ht(e,e.return,se)}}break;case 3:if(it=!1,ji=null,i=da,da=qr(t.containerInfo),Sn(t,e,a),da=i,yn(e),r&4&&s!==null&&s.memoizedState.isDehydrated)try{nr(t.containerInfo)}catch(se){ht(e,e.return,se)}Qu&&(Qu=!1,Uf(e)),it=!1;break;case 4:r=ja,ja=tn,s=t0(),i=da,da=qr(e.stateNode.containerInfo),Sn(t,e,a),yn(e),da=i,it&&Pr&&(ui=!0),it=s,ja=r;break;case 12:Sn(t,e,a),yn(e);break;case 31:Sn(t,e,a),yn(e),r&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,mi(e,t)));break;case 13:Sn(t,e,a),yn(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(xi=Tt()),r&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,mi(e,t)));break;case 22:i=e.memoizedState!==null,m=s!==null&&s.memoizedState!==null;var g=tn,E=dt,F=ja;tn=g||i,ja=F||i,dt=E||m,Sn(t,e,a),dt=E,ja=F,tn=g,yn(e),r&8192&&(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,!i||s===null||m||tn||dt||(t=m||dt,a=tn,s=dt,tn=i||tn,dt=t,Ns(e,2),tn=a,dt=s),!i&&ja||Wu(e,i)),r&4&&(t=e.updateQueue,t!==null&&(a=t.retryQueue,a!==null&&(t.retryQueue=null,mi(e,a))));break;case 19:Sn(t,e,a),yn(e),r&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,mi(e,t)));break;case 30:r&512&&(dt||s===null||mn(s,s.return)),r=t0(),i=Pr,m=(a&335544064)===a,g=e.memoizedProps,Pr=m&&_a(g.default,g.update)!=="none",Sn(t,e,a),yn(e),m&&s!==null&&it&&(e.flags|=4),Pr=i,it=r;break;case 21:break;case 7:r&512&&(dt||s===null||mn(s,s.return)),s&&s.stateNode!==null&&(s.stateNode._fragmentFiber=e);default:Sn(t,e,a),yn(e)}}function yn(e){var t=e.flags;if(t&2){try{for(var a,s=e.return;s!==null;){if(Rf(s)){a=s;break}s=s.return}s=null;for(var r=e.return;r!==null;){if(Pu(r)){var i=r.stateNode;s===null?s=[i]:s.push(i)}if(Ku(r))break;r=r.return}var m=s;if(a==null)throw Error(c(160));switch(a.tag){case 27:var g=a.stateNode,E=zu(e);ri(e,E,g,m);break;case 5:var F=a.stateNode;a.flags&32&&(gl(F,""),a.flags&=-33);var se=zu(e);ri(e,se,F,m);break;case 3:case 4:var he=a.stateNode.containerInfo,_=zu(e);Fu(e,_,he,m);break;default:throw Error(c(161))}}catch(W){ht(e,e.return,W)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Uf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Uf(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,tr=!0,t.reset(),tr=!1),e=e.sibling}}function Tl(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)Df(t,e),t=t.sibling;else jf(t)}function Df(e,t){var a=e.alternate;if(a===null)Ju(e,!1);else switch(e.tag){case 3:if($u=Ia=!1,Nf(),Tl(t,e),!Ia&&!ui){if(e=La,e!==null)for(var s=0;s<e.length;s+=3){a=e[s];var r=e[s+1];vx(a,e[s+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+r+")"})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),$u=!0}La=null;break;case 5:Tl(t,e);break;case 4:s=Ia,Ia=!1,Tl(t,e),Ia&&(ui=!0),Ia=s;break;case 22:e.memoizedState===null&&(a.memoizedState!==null?Ju(e,!1):Tl(t,e));break;case 30:s=Ia,r=Nf(),Ia=!1,Tl(t,e),Ia&&(e.flags|=4);var i=e.memoizedProps,m=e.stateNode;t=Pa(i,m),m=Pa(a.memoizedProps,m);var g=_a(i.default,i.update);g==="none"?t=!1:(i=a.memoizedState,a.memoizedState=null,a=e.child,On=0,t=qu(e,a,t,m,g,i,!0),On!==(i===null?0:i.length)&&(e.flags|=32)),(e.flags&4)!==0&&t?(Fl(e,e.memoizedProps.onUpdate),La=r):r!==null&&(r.push.apply(r,La),La=r),Ia=(e.flags&32)!==0?!0:s;break;default:Tl(t,e)}}function Ba(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Bf(e,t.alternate,t),t=t.sibling}function Ns(e,t){for(e=e.child;e!==null;){var a=e,s=t;switch(a.tag){case 0:case 11:case 14:case 15:ys(4,a,a.return),Ns(a,s);break;case 1:mn(a,a.return);var r=a.stateNode;typeof r.componentWillUnmount=="function"&&pf(a,a.return,r),Ns(a,s);break;case 27:(s&2)!==0&&Ux(a.stateNode,a.type,a.memoizedProps);case 5:mn(a,a.return),a.tag!==5&&a.tag!==27||Kr(a),Ns(a,s);break;case 6:Kr(a);break;case 26:mn(a,a.return),r=a.stateNode,a.memoizedState!==null||r===null||dt||r.parentNode.removeChild(r),Ns(a,s);break;case 22:a.memoizedState===null&&Ns(a,s);break;case 30:mn(a,a.return),Ns(a,s);break;case 7:mn(a,a.return);default:Ns(a,s)}e=e.sibling}}function ma(e,t,a){for(a=(t.subtreeFlags&8772)!==0?a:a&-2,t=t.child;t!==null;){var s=t.alternate,r=e,i=t,m=i.flags,g=(a&1)!==0;switch(i.tag){case 0:case 11:case 15:ma(r,i,a),Gr(4,i);break;case 1:if(ma(r,i,a),s=i,r=s.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(se){ht(s,s.return,se)}if(s=i,r=s.updateQueue,r!==null){var E=s.stateNode;try{var F=r.shared.hiddenCallbacks;if(F!==null)for(r.shared.hiddenCallbacks=null,r=0;r<F.length;r++)sA(F[r],E)}catch(se){ht(s,s.return,se)}}g&&m&64&&bf(i),va(i,i.return);break;case 27:(a&2)!==0&&Sf(i);case 5:i.tag!==5&&i.tag!==27||gf(i),ma(r,i,a),g&&s===null&&m&4&&_u(i),va(i,i.return);break;case 6:gf(i);break;case 26:E=i.stateNode,i.memoizedState!==null||E===null||tn||Td(qr(E.ownerDocument),i.type,E),ma(r,i,a),g&&s===null&&m&4&&_u(i),va(i,i.return);break;case 12:ma(r,i,a);break;case 31:ma(r,i,a),g&&m&4&&Cf(r,i);break;case 13:ma(r,i,a),g&&m&4&&Mf(r,i);break;case 22:i.memoizedState===null&&ma(r,i,a),va(i,i.return);break;case 30:ma(r,i,a),va(i,i.return);break;case 7:va(i,i.return);default:ma(r,i,a)}t=t.sibling}}function td(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Or(a))}function nd(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Or(e))}function Wn(e,t,a,s){var r=(a&335544064)===a;if(t.subtreeFlags&(r?10262:10256))for(t=t.child;t!==null;)Tf(e,t,a,s),t=t.sibling;else r&&Of(t)}function Tf(e,t,a,s){var r=(a&335544064)===a;r&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&ci(t);var i=t.flags;switch(t.tag){case 0:case 11:case 15:Wn(e,t,a,s),i&2048&&Gr(9,t);break;case 1:Wn(e,t,a,s);break;case 3:Wn(e,t,a,s),r&&$u&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),i&2048&&(i=null,t.alternate!==null&&(i=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==i&&(t.refCount++,i!=null&&Or(i)));break;case 12:if(i&2048){Wn(e,t,a,s),i=t.stateNode;try{var m=t.memoizedProps,g=m.id,E=m.onPostCommit;typeof E=="function"&&E(g,t.alternate===null?"mount":"update",i.passiveEffectDuration,-0)}catch(F){ht(t,t.return,F)}}else Wn(e,t,a,s);break;case 31:Wn(e,t,a,s);break;case 13:Wn(e,t,a,s);break;case 23:break;case 22:m=t.stateNode,g=t.alternate,t.memoizedState!==null?(r&&g!==null&&g.memoizedState===null&&ci(g),m._visibility&2?Wn(e,t,a,s):_r(e,t)):(r&&g!==null&&g.memoizedState!==null&&ci(t),m._visibility&2?Wn(e,t,a,s):(m._visibility|=2,Gl(e,t,a,s,(t.subtreeFlags&10256)!==0||!1))),i&2048&&td(g,t);break;case 24:Wn(e,t,a,s),i&2048&&nd(t.alternate,t);break;case 30:r&&(i=t.alternate,i!==null&&(Oa(i.child,!0),Oa(t.child,!0))),Wn(e,t,a,s);break;default:Wn(e,t,a,s)}}function Gl(e,t,a,s,r){for(r=r&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,m=t,g=a,E=s,F=m.flags;switch(m.tag){case 0:case 11:case 15:Gl(i,m,g,E,r),Gr(8,m);break;case 23:break;case 22:var se=m.stateNode;m.memoizedState!==null?se._visibility&2?Gl(i,m,g,E,r):_r(i,m):(se._visibility|=2,Gl(i,m,g,E,r)),r&&F&2048&&td(m.alternate,m);break;case 24:Gl(i,m,g,E,r),r&&F&2048&&nd(m.alternate,m);break;default:Gl(i,m,g,E,r)}t=t.sibling}}function _r(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,s=t,r=s.flags;switch(s.tag){case 22:_r(a,s),r&2048&&td(s.alternate,s);break;case 24:_r(a,s),r&2048&&nd(s.alternate,s);break;default:_r(a,s)}t=t.sibling}}var rl=8192;function ol(e,t,a){if(e.subtreeFlags&rl)for(e=e.child;e!==null;)Gf(e,t,a),e=e.sibling}function Gf(e,t,a){switch(e.tag){case 26:ol(e,t,a),e.flags&rl&&(e.memoizedState!==null?z1(a,da,e.memoizedState,e.memoizedProps):(e=e.stateNode,(t&335544128)===t&&Jx(a,e)));break;case 5:ol(e,t,a),e.flags&rl&&(e=e.stateNode,(t&335544128)===t&&Jx(a,e));break;case 3:case 4:var s=da;da=qr(e.stateNode.containerInfo),ol(e,t,a),da=s;break;case 22:e.memoizedState===null&&(s=e.alternate,s!==null&&s.memoizedState!==null?(s=rl,rl=16777216,ol(e,t,a),rl=s):ol(e,t,a));break;case 30:if((e.flags&rl)!==0&&(s=e.memoizedProps.name,s!=null&&s!=="auto")){var r=e.stateNode;r.paired=null,Tn===null&&(Tn=new Map),Tn.set(s,r)}ol(e,t,a);break;default:ol(e,t,a)}}function Kf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Zr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var s=t[a];nn=s,_f(s,e)}Kf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Pf(e),e=e.sibling}function Pf(e){switch(e.tag){case 0:case 11:case 15:Zr(e),e.flags&2048&&ys(9,e,e.return);break;case 3:Zr(e);break;case 12:Zr(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ai(e)):Zr(e);break;default:Zr(e)}}function Ai(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var s=t[a];nn=s,_f(s,e)}Kf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ys(8,t,t.return),Ai(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Ai(t));break;default:Ai(t)}e=e.sibling}}function _f(e,t){for(;nn!==null;){var a=nn;switch(a.tag){case 0:case 11:case 15:ys(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Or(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,nn=s;else e:for(a=e;nn!==null;){s=nn;var r=s.sibling,i=s.return;if(wf(s),s===a){nn=null;break e}if(r!==null){r.return=i,nn=r;break e}nn=i}}}var Gg={getCacheForType:function(e){var t=cn(Yt),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return cn(Yt).controller.signal}},Kg=typeof WeakMap=="function"?WeakMap:Map,ut=0,Lt=null,Ve=null,Qe=0,xt=0,Gn=null,vs=!1,Kl=!1,ad=!1,Qa=0,Pt=0,Ls=0,il=0,fi=0,Kn=0,Pl=0,zr=null,In=null,sd=!1,xi=0,Zf=0,hi=1/0,bi=null,Os=null,Ut=0,Aa=null,cl=null,Ha=0,ld=0,rd=null,zf=null,_l=null,Zl=null,zl=null,Fr=0,pi=null;function Pn(){return(ut&2)!==0&&Qe!==0?Qe&-Qe:Q.T!==null?hd():zt()}function Ff(){if(Kn===0)if((Qe&536870912)===0||ze){var e=Ta;Ta<<=1,(Ta&3932160)===0&&(Ta=262144),Kn=e}else Kn=536870912;return e=un.current,e!==null&&(e.flags|=32),Kn}function Fl(e,t){if(t!=null){var a=e.stateNode,s=a.ref;s===null&&(s=a.ref=Lx(Pa(e.memoizedProps,a))),Zl===null&&(Zl=[]),Zl.push(t.bind(null,s))}}function Bn(e,t,a){(e===Lt&&(xt===2||xt===9)||e.cancelPendingCommit!==null)&&(Jl(e,0),js(e,Qe,Kn,!1)),le(e,a),((ut&2)===0||e!==Lt)&&(e===Lt&&((ut&2)===0&&(il|=a),Pt===4&&js(e,Qe,Kn,!1)),wa(e))}function Jf(e,t,a){if((ut&6)!==0)throw Error(c(327));var s=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Gt(e,t),r=s?Zg(e,t):id(e,t,!0),i=s;do{if(r===0){Kl&&!s&&js(e,t,0,!1);break}else{if(a=e.current.alternate,i&&!Pg(a)){r=id(e,t,!1),i=!1;continue}if(r===2){if(i=t,e.errorRecoveryDisabledLanes&i)var m=0;else m=e.pendingLanes&-536870913,m=m!==0?m:m&536870912?536870912:0;if(m!==0){t=m;e:{var g=e;r=zr;var E=g.current.memoizedState.isDehydrated;if(E&&(Jl(g,m).flags|=256),m=id(g,m,!1),m!==2&&m!==6){if(ad&&!E){g.errorRecoveryDisabledLanes|=i,il|=i,r=4;break e}i=In,In=r,i!==null&&(In===null?In=i:In.push.apply(In,i))}r=m}if(i=!1,r!==2)continue}}if(r===1){Jl(e,0),js(e,t,0,!0);break}e:{switch(s=e,i=r,i){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:js(s,t,Kn,!vs);break e;case 2:In=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(r=xi+300-Tt(),10<r)){if(js(s,t,Kn,!vs),os(s,0,!0)!==0)break e;Ha=t,s.timeoutHandle=jd(Xf.bind(null,s,a,In,bi,sd,t,Kn,il,Pl,vs,i,"Throttled",-0,0),r);break e}Xf(s,a,In,bi,sd,t,Kn,il,Pl,vs,i,null,-0,0)}}break}while(!0);wa(e)}function Xf(e,t,a,s,r,i,m,g,E,F,se,he,_,W){e.timeoutHandle=-1;var Ne=t.subtreeFlags,Be=(i&335544064)===i;if(he=null,(Be||Ne&8192||(Ne&16785408)===16785408)&&(he={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Sa},Tn=null,Gf(t,i,he),Be&&(Ne=he,Be=e.containerInfo,Be=(Be.nodeType===9?Be:Be.ownerDocument).__reactViewTransition,Be!=null&&(Ne.count++,Ne.waitingForViewTransition=!0,Ne=Wr.bind(Ne),Be.finished.then(Ne,Ne))),Ne=(i&62914560)===i?xi-Tt():(i&4194048)===i?Zf-Tt():0,Ne=F1(he,Ne),Ne!==null)){Ha=i,e.cancelPendingCommit=Ne(tx.bind(null,e,t,i,a,s,r,m,g,E,F,se,he,null,_,W)),js(e,i,m,!F);return}tx(e,t,i,a,s,r,m,g,E,F,se,he)}function Pg(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var r=a[s],i=r.getSnapshot;r=r.value;try{if(!Un(i(),r))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function js(e,t,a,s){t=pn(e,t),t&=~fi,t&=~il,e.suspendedLanes|=t,e.pingedLanes&=~t,s&&(e.warmLanes|=t),s=e.expirationTimes;for(var r=t;0<r;){var i=31-Ct(r),m=1<<i;s[i]=-1,r&=~m}a!==0&&He(e,a,t)}function gi(){return(ut&6)===0?(Jr(0),!1):!0}function od(){if(Ve!==null){if(xt===0)var e=Ve.return;else e=Ve,Fa=qs=null,xu(e),El=null,Br=0,e=Ve;for(;e!==null;)hf(e.alternate,e),e=e.return;Ve=null}}function Jl(e,t){var a=e.timeoutHandle;return a!==-1&&(e.timeoutHandle=-1,d1(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Ha=0,od(),Lt=e,Ve=a=Za(e.current,null),Qe=t,xt=0,Gn=null,vs=!1,Kl=Gt(e,t),ad=!1,Pl=Kn=fi=il=Ls=Pt=0,In=zr=null,sd=!1,Qa=pn(e,t),jo(),a}function Vf(e,t){Ke=null,Q.H=$o,t===wl||t===To?(t=eA(),xt=3):t===nu?(t=eA(),xt=4):xt=t===Hu?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Gn=t,Ve===null&&(Pt=1,Wo(e,Yn(t,e.current)))}function Yf(){var e=un.current;return e===null?!0:(Qe&4194048)===Qe?hn===null:(Qe&62914560)===Qe||(Qe&536870912)!==0?e===hn:!1}function qf(){var e=Q.H;return Q.H=$o,e===null?$o:e}function Qf(){var e=Q.A;return Q.A=Gg,e}function Ri(){Pt=4,vs||(Qe&4194048)!==Qe&&un.current!==null||(Kl=!0),(Ls&134217727)===0&&(il&134217727)===0||Lt===null||js(Lt,Qe,Kn,!1)}function id(e,t,a){var s=ut;ut|=2;var r=qf(),i=Qf();(Lt!==e||Qe!==t)&&(bi=null,Jl(e,t)),t=!1;var m=Pt;e:do try{if(xt!==0&&Ve!==null){var g=Ve,E=Gn;switch(xt){case 8:od(),m=6;break e;case 3:case 2:case 9:case 6:un.current===null&&(t=!0);var F=xt;if(xt=0,Gn=null,Xl(e,g,E,F),a&&Kl){m=0;break e}break;default:F=xt,xt=0,Gn=null,Xl(e,g,E,F)}}_g(),m=Pt;break}catch(se){Vf(e,se)}while(!0);return t&&e.shellSuspendCounter++,Fa=qs=null,ut=s,Q.H=r,Q.A=i,Ve===null&&(Lt=null,Qe=0,jo()),m}function _g(){for(;Ve!==null;)$f(Ve)}function Zg(e,t){var a=ut;ut|=2;var s=qf(),r=Qf();Lt!==e||Qe!==t?(bi=null,hi=Tt()+500,Jl(e,t)):Kl=Gt(e,t);e:do try{if(xt!==0&&Ve!==null){t=Ve;var i=Gn;t:switch(xt){case 1:xt=0,Gn=null,Xl(e,t,i,1);break;case 2:case 9:if($0(i)){xt=0,Gn=null,Wf(t);break}t=function(){xt!==2&&xt!==9||Lt!==e||(xt=7),wa(e)},i.then(t,t);break e;case 3:xt=7;break e;case 4:xt=5;break e;case 7:$0(i)?(xt=0,Gn=null,Wf(t)):(xt=0,Gn=null,Xl(e,t,i,7));break;case 5:var m=null;switch(Ve.tag){case 26:m=Ve.memoizedState;case 5:case 27:var g=Ve;if(m?zx(m):g.stateNode.complete){xt=0,Gn=null;var E=g.sibling;if(E!==null)Ve=E;else{var F=g.return;F!==null?(Ve=F,Si(F)):Ve=null}break t}}xt=0,Gn=null,Xl(e,t,i,5);break;case 6:xt=0,Gn=null,Xl(e,t,i,6);break;case 8:od(),Pt=6;break e;default:throw Error(c(462))}}zg();break}catch(se){Vf(e,se)}while(!0);return Fa=qs=null,Q.H=s,Q.A=r,ut=a,Ve!==null?0:(Lt=null,Qe=0,jo(),Pt)}function zg(){for(;Ve!==null&&!hl();)$f(Ve)}function $f(e){var t=ff(e.alternate,e,Qa);e.memoizedProps=e.pendingProps,t===null?Si(e):Ve=t}function Wf(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=rf(a,t,t.pendingProps,t.type,void 0,Qe);break;case 11:t=rf(a,t,t.pendingProps,t.type.render,t.ref,Qe);break;case 5:xu(t);var s=t;s===en&&(ze?(Co(s),s.tag===5&&s.stateNode!=null&&(Ht=s.stateNode)):(Co(s),ze=!0));default:hf(a,t),t=Ve=P0(t,Qa),t=ff(a,t,Qa)}e.memoizedProps=e.pendingProps,t===null?Si(e):Ve=t}function Xl(e,t,a,s){Fa=qs=null,xu(t),El=null,Br=0;var r=t.return;try{if(wg(e,r,t,a,Qe)){Pt=1,Wo(e,Yn(a,e.current)),Ve=null;return}}catch(i){if(r!==null)throw Ve=r,i;Pt=1,Wo(e,Yn(a,e.current)),Ve=null;return}t.flags&32768?(ze||s===1?e=!0:Kl||(Qe&536870912)!==0?e=!1:(vs=e=!0,(s===2||s===9||s===3||s===6)&&(s=un.current,s!==null&&s.tag===13&&(s.flags|=16384))),ex(t,e)):Si(t)}function Si(e){var t=e;do{if((t.flags&32768)!==0){ex(t,vs);return}e=t.return;var a=kg(t.alternate,t,Qa);if(a!==null){Ve=a;return}if(t=t.sibling,t!==null){Ve=t;return}Ve=t=e}while(t!==null);Pt===0&&(Pt=5)}function ex(e,t){do{var a=Ug(e.alternate,e);if(a!==null){a.flags&=32767,Ve=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){Ve=e;return}Ve=e=a}while(e!==null);Pt=6,Ve=null}function tx(e,t,a,s,r,i,m,g,E,F,se,he){e.cancelPendingCommit=null;do yi();while(Ut!==0);if((ut&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));e===Lt&&(Ve=Lt=null,Qe=0),cl=t,Aa=e,Ha=a,rd=r,zf=s,Fg(e,t,a,m,g,E,he)}}function Fg(e,t,a,s,r,i,m){var g=t.lanes|t.childLanes;if(ld=g,g|=Zc,Se(e,a,g,s,r,i),Zl=null,(a&335544064)===a?(zl=gg(e),s=10262):(zl=null,s=10256),(t.subtreeFlags&s)!==0||(t.flags&s)!==0?(e.callbackNode=null,e.callbackPriority=0,Qg(oa,function(){return md(),null})):(e.callbackNode=null,e.callbackPriority=0),oi=!1,s=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||s){s=Q.T,Q.T=null,r=Re.p,Re.p=2,i=ut,ut|=4;try{Dg(e,t,a)}finally{ut=i,Re.p=r,Q.T=s}}Ut=1,oi?_l=b1(m,e.containerInfo,zl,cd,ud,Xg,dd,md,Jg):(cd(),ud(),dd())}function Jg(e){if(Ut!==0){var t=Aa.onRecoverableError;t(e,{componentStack:null})}}function Xg(){Ut===3&&(Ut=0,Df(cl,Aa),Ut=4)}function cd(){if(Ut===1){Ut=0;var e=Aa,t=cl,a=Ha,s=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||s){s=Q.T,Q.T=null;var r=Re.p;Re.p=2;var i=ut;ut|=4;try{Pr=ui=!1,kf(t,e,a),a=vd;var m=w0(e.containerInfo),g=a.focusedElem,E=a.selectionRange;if(m!==g&&g&&g.ownerDocument&&H0(g.ownerDocument.documentElement,g)){if(E!==null&&Tc(g)){var F=E.start,se=E.end;if(se===void 0&&(se=F),"selectionStart"in g)g.selectionStart=F,g.selectionEnd=Math.min(se,g.value.length);else{var he=g.ownerDocument||document,_=he&&he.defaultView||window;if(_.getSelection){var W=_.getSelection(),Ne=g.textContent.length,Be=Math.min(E.start,Ne),Pe=E.end===void 0?Be:Math.min(E.end,Ne);!W.extend&&Be>Pe&&(m=Pe,Pe=Be,Be=m);var Z=B0(g,Be),T=B0(g,Pe);if(Z&&T&&(W.rangeCount!==1||W.anchorNode!==Z.node||W.anchorOffset!==Z.offset||W.focusNode!==T.node||W.focusOffset!==T.offset)){var V=he.createRange();V.setStart(Z.node,Z.offset),W.removeAllRanges(),Be>Pe?(W.addRange(V),W.extend(T.node,T.offset)):(V.setEnd(T.node,T.offset),W.addRange(V))}}}}for(he=[],W=g;W=W.parentNode;)W.nodeType===1&&he.push({element:W,left:W.scrollLeft,top:W.scrollTop});for(typeof g.focus=="function"&&g.focus(),g=0;g<he.length;g++){var xe=he[g];xe.element.scrollLeft=xe.left,xe.element.scrollTop=xe.top}}tr=!!Nd,vd=Nd=null}finally{ut=i,Re.p=r,Q.T=s}}e.current=t,Ut=2}}function ud(){if(Ut===2){Ut=0;var e=Aa,t=cl,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=Q.T,Q.T=null;var s=Re.p;Re.p=2;var r=ut;ut|=4;try{Bf(e,t.alternate,t)}finally{ut=r,Re.p=s,Q.T=a}}Ut=3}}function dd(){if(Ut===4||Ut===3){Ut=0;var e=_l;_l=null,bl();var t=Aa,a=cl,s=Ha,r=zf,i=(s&335544064)===s?10262:10256;if((a.subtreeFlags&i)!==0||(a.flags&i)!==0?Ut=5:(Ut=0,cl=Aa=null,nx(t,t.pendingLanes)),i=t.pendingLanes,i===0&&(Os=null),Jn(s),a=a.stateNode,kt&&typeof kt.onCommitFiberRoot=="function")try{kt.onCommitFiberRoot(pa,a,void 0,(a.current.flags&128)===128)}catch{}if(r!==null){a=Q.T,i=Re.p,Re.p=2,Q.T=null;try{for(var m=t.onRecoverableError,g=0;g<r.length;g++){var E=r[g];m(E.value,{componentStack:E.stack})}}finally{Q.T=a,Re.p=i}}if(r=Zl,m=zl,zl=null,r!==null&&(Zl=null,m===null&&(m=[]),e!==null))for(E=0;E<r.length;E++)a=(0,r[E])(m),a!==void 0&&e.finished.finally(a);(Ha&3)!==0&&yi(),wa(t),i=t.pendingLanes,(s&261930)!==0&&(i&42)!==0?t===pi?Fr++:(Fr=0,pi=t):(Fr=0,pi=null),Jr(0)}}function nx(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Or(t)))}function yi(){return _l!==null&&(_l.skipTransition(),_l=null),cd(),ud(),dd(),md()}function md(){if(Ut!==5)return!1;var e=Aa,t=ld;ld=0;var a=Jn(Ha),s=Q.T,r=Re.p;try{Re.p=32>a?32:a,Q.T=null,a=rd,rd=null;var i=Aa,m=Ha;if(Ut=0,cl=Aa=null,Ha=0,(ut&6)!==0)throw Error(c(331));var g=ut;if(ut|=4,Pf(i.current),Tf(i,i.current,m,a),ut=g,Jr(0,!1),kt&&typeof kt.onPostCommitFiberRoot=="function")try{kt.onPostCommitFiberRoot(pa,i)}catch{}return!0}finally{Re.p=r,Q.T=s,nx(e,t)}}function ax(e,t,a){t=Yn(a,t),t=Bu(e.stateNode,t,2),e=ps(e,t,2),e!==null&&(le(e,2),wa(e))}function ht(e,t,a){if(e.tag===3)ax(e,e,a);else for(;t!==null;){if(t.tag===3){ax(t,e,a);break}else if(t.tag===1){var s=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Os===null||!Os.has(s))){e=Yn(a,e),a=$A(2),s=ps(t,a,2),s!==null&&(WA(a,s,t,e),le(s,2),wa(s));break}}t=t.return}}function Ad(e,t,a){var s=e.pingCache;if(s===null){s=e.pingCache=new Kg;var r=new Set;s.set(t,r)}else r=s.get(t),r===void 0&&(r=new Set,s.set(t,r));r.has(a)||(ad=!0,r.add(a),e=Vg.bind(null,e,t,a),t.then(e,e))}function Vg(e,t,a){var s=e.pingCache;s!==null&&s.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Lt===e&&(Qe&a)===a&&((Pt===4||Pt===3&&(Qe&62914560)===Qe&&300>Tt()-xi)&&(ut&2)===0?Jl(e,0):fi|=a,Pl===Qe&&(Pl=0)),wa(e)}function sx(e,t){t===0&&(t=v()),e=Xs(e,t),e!==null&&(le(e,t),wa(e))}function Yg(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),sx(e,a)}function qg(e,t){var a=0;switch(e.tag){case 31:case 13:var s=e.stateNode,r=e.memoizedState;r!==null&&(a=r.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(c(314))}s!==null&&s.delete(t),sx(e,a)}function Qg(e,t){return tt(e,t)}var Vl=null,Yl=null,fd=!1,Ni=!1,xd=!1,Is=0;function wa(e){e!==Yl&&e.next===null&&(Yl===null?Vl=Yl=e:Yl=Yl.next=e),Ni=!0,fd||(fd=!0,Wg())}function Jr(e,t){if(!xd&&Ni){xd=!0;do for(var a=!1,s=Vl;s!==null;){if(e!==0){var r=s.pendingLanes;if(r===0)var i=0;else{var m=s.suspendedLanes,g=s.pingedLanes;i=(1<<31-Ct(42|e)+1)-1,i&=r&~(m&~g),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,ix(s,i))}else i=Qe,i=os(s,s===Lt?i:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(i&3)===0||Gt(s,i)||(a=!0,ix(s,i));s=s.next}while(a);xd=!1}}function $g(){lx()}function lx(){Ni=fd=!1;var e=0;Is!==0&&u1()&&(e=Is);for(var t=Tt(),a=null,s=Vl;s!==null;){var r=s.next,i=rx(s,t);i===0?(s.next=null,a===null?Vl=r:a.next=r,r===null&&(Yl=a)):(a=s,(e!==0||(i&3)!==0)&&(Ni=!0)),s=r}Ut!==0&&Ut!==5||Jr(e),Is!==0&&(Is=0)}function rx(e,t){for(var a=e.suspendedLanes,s=e.pingedLanes,r=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var m=31-Ct(i),g=1<<m,E=r[m];E===-1?((g&a)===0||(g&s)!==0)&&(r[m]=Ra(g,t)):E<=t&&(e.expiredLanes|=g),i&=~g}if(t=Lt,a=Qe,a=os(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s=e.callbackNode,a===0||e===t&&(xt===2||xt===9)||e.cancelPendingCommit!==null)return s!==null&&s!==null&&la(s),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Gt(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(s!==null&&la(s),Jn(a)){case 2:case 8:a=Ks;break;case 32:a=oa;break;case 268435456:a=Ua;break;default:a=oa}return s=ox.bind(null,e),a=tt(a,s),e.callbackPriority=t,e.callbackNode=a,t}return s!==null&&s!==null&&la(s),e.callbackPriority=2,e.callbackNode=null,2}function ox(e,t){if(Ut!==0&&Ut!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(yi()&&e.callbackNode!==a)return null;var s=Qe;return s=os(e,e===Lt?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s===0?null:(Jf(e,s,t),rx(e,Tt()),e.callbackNode!=null&&e.callbackNode===a?ox.bind(null,e):null)}function ix(e,t){if(yi())return null;Jf(e,t,!0)}function Wg(){m1(function(){(ut&6)!==0?tt(ls,$g):lx()})}function hd(){if(Is===0){var e=Ws;e===0&&(e=Cn,Cn<<=1,(Cn&261888)===0&&(Cn=256)),Is=e}return Is}function cx(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:go(e)}function e1(e,t,a,s,r){if(t==="submit"&&a&&a.stateNode===r){var i=cx((r[Et]||null).action),m=s.submitter;m&&(t=(t=m[Et]||null)?cx(t.formAction):m.getAttribute("formAction"),t!==null&&(i=t,m=null));var g=new No("action","action",null,s,r);e.push({event:g,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Is!==0){var E=new FormData(r,m);vu(a,{pending:!0,data:E,method:r.method,action:i},null,E)}}else typeof i=="function"&&(g.preventDefault(),E=new FormData(r,m),vu(a,{pending:!0,data:E,method:r.method,action:i},i,E))},currentTarget:r}]})}}for(var bd=0;bd<_c.length;bd++){var pd=_c[bd],t1=pd.toLowerCase(),n1=pd[0].toUpperCase()+pd.slice(1);ca(t1,"on"+n1)}ca(M0,"onAnimationEnd"),ca(k0,"onAnimationIteration"),ca(U0,"onAnimationStart"),ca("dblclick","onDoubleClick"),ca("focusin","onFocus"),ca("focusout","onBlur"),ca(dg,"onTransitionRun"),ca(mg,"onTransitionStart"),ca(Ag,"onTransitionCancel"),ca(D0,"onTransitionEnd"),Jt("onMouseEnter",["mouseout","mouseover"]),Jt("onMouseLeave",["mouseout","mouseover"]),Jt("onPointerEnter",["pointerout","pointerover"]),Jt("onPointerLeave",["pointerout","pointerover"]),Bt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Bt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Bt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Bt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Bt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Bt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),a1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Xr));function ux(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var s=e[a],r=s.event;s=s.listeners;e:{var i=void 0;if(t)for(var m=s.length-1;0<=m;m--){var g=s[m],E=g.instance,F=g.currentTarget;if(g=g.listener,E!==i&&r.isPropagationStopped())break e;i=g,r.currentTarget=F;try{i(r)}catch(se){Oo(se)}r.currentTarget=null,i=E}else for(m=0;m<s.length;m++){if(g=s[m],E=g.instance,F=g.currentTarget,g=g.listener,E!==i&&r.isPropagationStopped())break e;i=g,r.currentTarget=F;try{i(r)}catch(se){Oo(se)}r.currentTarget=null,i=E}}}}function Ye(e,t){var a=t[Zs];a===void 0&&(a=t[Zs]=new Set);var s=e+"__bubble";a.has(s)||(dx(t,e,2,!1),a.add(s))}function gd(e,t,a){var s=0;t&&(s|=4),dx(a,e,s,t)}var vi="_reactListening"+Math.random().toString(36).slice(2);function Rd(e){if(!e[vi]){e[vi]=!0,It.forEach(function(a){a!=="selectionchange"&&(a1.has(a)||gd(a,!1,e),gd(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[vi]||(t[vi]=!0,gd("selectionchange",!1,t))}}function dx(e,t,a,s){switch(eh(t)){case 2:var r=Y1;break;case 8:r=q1;break;default:r=Kd}a=r.bind(null,t,a,e),r=void 0,!Ic||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),s?r!==void 0?e.addEventListener(t,a,{capture:!0,passive:r}):e.addEventListener(t,a,!0):r!==void 0?e.addEventListener(t,a,{passive:r}):e.addEventListener(t,a,!1)}function Sd(e,t,a,s,r){var i=s;if((t&1)===0&&(t&2)===0&&s!==null)e:for(;;){if(s===null)return;var m=s.tag;if(m===3||m===4){var g=s.stateNode.containerInfo;if(g===r)break;if(m===4)for(m=s.return;m!==null;){var E=m.tag;if((E===3||E===4)&&m.stateNode.containerInfo===r)return;m=m.return}for(;g!==null;){if(m=X(g),m===null)return;if(E=m.tag,E===5||E===6||E===26||E===27){s=i=m;continue e}g=g.parentNode}}s=s.return}u0(function(){var F=i,se=Oc(a),he=[];e:{var _=T0.get(e);if(_!==void 0){var W=No,Ne=e;switch(e){case"keypress":if(So(a)===0)break e;case"keydown":case"keyup":W=Pp;break;case"focusin":Ne="focus",W=Ec;break;case"focusout":Ne="blur",W=Ec;break;case"beforeblur":case"afterblur":W=Ec;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":W=A0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":W=Bp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":W=Jp;break;case M0:case k0:case U0:W=Ep;break;case D0:W=Vp;break;case"scroll":case"scrollend":W=jp;break;case"wheel":W=qp;break;case"copy":case"cut":case"paste":W=Mp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":W=x0;break;case"submit":W=zp;break;case"toggle":case"beforetoggle":W=$p}var Be=(t&4)!==0,Pe=!Be&&(e==="scroll"||e==="scrollend"),Z=Be?_!==null?_+"Capture":null:_;Be=[];for(var T=F,V;T!==null;){var xe=T;if(V=xe.stateNode,xe=xe.tag,xe!==5&&xe!==26&&xe!==27||V===null||Z===null||(xe=xr(T,Z),xe!=null&&Be.push(Vr(T,xe,V))),Pe)break;T=T.return}0<Be.length&&(_=new W(_,Ne,null,a,se),he.push({event:_,listeners:Be}))}}if((t&7)===0){e:{if(W=e==="mouseover"||e==="pointerover",_=e==="mouseout"||e==="pointerout",W&&a!==Lc&&(Ne=a.relatedTarget||a.fromElement)&&(X(Ne)||Ne[Mn]))break e;(_||W)&&(Ne=se.window===se?se:(W=se.ownerDocument)?W.defaultView||W.parentWindow:window,_?(W=a.relatedTarget||a.toElement,_=F,W=W?X(W):null,W!==null&&(Pe=A(W),Be=W.tag,W!==Pe||Be!==5&&Be!==27&&Be!==6)&&(W=null)):(_=null,W=F),_!==W&&(Be=A0,xe="onMouseLeave",Z="onMouseEnter",T="mouse",(e==="pointerout"||e==="pointerover")&&(Be=x0,xe="onPointerLeave",Z="onPointerEnter",T="pointer"),Pe=_==null?Ne:Ge(_),V=W==null?Ne:Ge(W),Ne=new Be(xe,T+"leave",_,a,se),Ne.target=Pe,Ne.relatedTarget=V,xe=null,X(se)===F&&(Be=new Be(Z,T+"enter",W,a,se),Be.target=V,Be.relatedTarget=Pe,xe=Be),Pe=xe,Be=_&&W?J(_,W,s1):null,_!==null&&mx(he,Ne,_,Be,!1),W!==null&&Pe!==null&&mx(he,Pe,W,Be,!0)))}e:{if(_=F?Ge(F):window,W=_.nodeName&&_.nodeName.toLowerCase(),W==="select"||W==="input"&&_.type==="file")var je=N0;else if(S0(_))if(v0)je=ig;else{je=rg;var $e=lg}else W=_.nodeName,!W||W.toLowerCase()!=="input"||_.type!=="checkbox"&&_.type!=="radio"?F&&vc(F.elementType)&&(je=N0):je=og;if(je&&(je=je(e,F))){y0(he,je,a,se);break e}$e&&$e(e,_,F)}switch($e=F?Ge(F):window,e){case"focusin":(S0($e)||$e.contentEditable==="true")&&(Nl=$e,Gc=F,Nr=null);break;case"focusout":Nr=Gc=Nl=null;break;case"mousedown":Kc=!0;break;case"contextmenu":case"mouseup":case"dragend":Kc=!1,E0(he,a,se);break;case"selectionchange":if(ug)break;case"keydown":case"keyup":E0(he,a,se)}var Ee;if(Mc)e:{switch(e){case"compositionstart":var Ce="onCompositionStart";break e;case"compositionend":Ce="onCompositionEnd";break e;case"compositionupdate":Ce="onCompositionUpdate";break e}Ce=void 0}else yl?g0(e,a)&&(Ce="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Ce="onCompositionStart");Ce&&(h0&&a.locale!=="ko"&&(yl||Ce!=="onCompositionStart"?Ce==="onCompositionEnd"&&yl&&(Ee=d0()):(cs=se,Bc="value"in cs?cs.value:cs.textContent,yl=!0)),$e=Li(F,Ce),0<$e.length&&(Ce=new f0(Ce,e,null,a,se),he.push({event:Ce,listeners:$e}),Ee?Ce.data=Ee:(Ee=R0(a),Ee!==null&&(Ce.data=Ee)))),(Ee=eg?tg(e,a):ng(e,a))&&(Ce=Li(F,"onBeforeInput"),0<Ce.length&&($e=new f0("onBeforeInput","beforeinput",null,a,se),he.push({event:$e,listeners:Ce}),$e.data=Ee)),e1(he,e,F,a,se)}ux(he,t)})}function Vr(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Li(e,t){for(var a=t+"Capture",s=[];e!==null;){var r=e,i=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||i===null||(r=xr(e,a),r!=null&&s.unshift(Vr(e,r,i)),r=xr(e,t),r!=null&&s.push(Vr(e,r,i))),e.tag===3)return s;e=e.return}return[]}function s1(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function mx(e,t,a,s,r){for(var i=t._reactName,m=[];a!==null&&a!==s;){var g=a,E=g.alternate,F=g.stateNode;if(g=g.tag,E!==null&&E===s)break;g!==5&&g!==26&&g!==27||F===null||(E=F,r?(F=xr(a,i),F!=null&&m.unshift(Vr(a,F,E))):r||(F=xr(a,i),F!=null&&m.push(Vr(a,F,E)))),a=a.return}m.length!==0&&e.push({event:t,listeners:m})}var l1=/\r\n?/g,r1=/\u0000|\uFFFD/g;function Ax(e){return(typeof e=="string"?e:""+e).replace(l1,`
`).replace(r1,"")}function fx(e,t){return t=Ax(t),Ax(e)===t}function bt(e,t,a,s,r,i){switch(a){case"children":if(typeof s=="string")t==="body"||t==="textarea"&&s===""||gl(e,s);else if(typeof s=="number"||typeof s=="bigint")t!=="body"&&gl(e,""+s);else return;break;case"className":po(e,"class",s);break;case"tabIndex":po(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":po(e,a,s);break;case"style":i0(e,s,i);return;case"data":if(t!=="object"){po(e,"data",s);break}case"src":case"href":if(s===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=go(s),e.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&bt(e,t,"name",r.name,r,null),bt(e,t,"formEncType",r.formEncType,r,null),bt(e,t,"formMethod",r.formMethod,r,null),bt(e,t,"formTarget",r.formTarget,r,null)):(bt(e,t,"encType",r.encType,r,null),bt(e,t,"method",r.method,r,null),bt(e,t,"target",r.target,r,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=go(s),e.setAttribute(a,s);break;case"onClick":s!=null&&(e.onclick=Sa);return;case"onScroll":s!=null&&Ye("scroll",e);return;case"onScrollEnd":s!=null&&Ye("scrollend",e);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(c(61));if(a=s.__html,a!=null){if(r.children!=null)throw Error(c(60));(i!=null?i.__html:void 0)!==a&&(e.innerHTML=a)}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}a=go(s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,s):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":s===!0?e.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,s):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(a,s):e.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(a):e.setAttribute(a,s);break;case"popover":Ye("beforetoggle",e),Ye("toggle",e),bo(e,"popover",s);break;case"xlinkActuate":Ga(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Ga(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Ga(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Ga(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Ga(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Ga(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Ga(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Ga(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Ga(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":bo(e,"is",s);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=Lp.get(a)||a,bo(e,a,s);else return}it=!0}function yd(e,t,a,s,r,i){switch(a){case"style":i0(e,s,i);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(c(61));if(a=s.__html,a!=null){if(r.children!=null)throw Error(c(60));(i!=null?i.__html:void 0)!==a&&(e.innerHTML=a)}}break;case"children":if(typeof s=="string")gl(e,s);else if(typeof s=="number"||typeof s=="bigint")gl(e,""+s);else return;break;case"onScroll":s!=null&&Ye("scroll",e);return;case"onScrollEnd":s!=null&&Ye("scrollend",e);return;case"onClick":s!=null&&(e.onclick=Sa);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Ft.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(r=a.endsWith("Capture"),i=a.slice(2,r?a.length-7:void 0),t=e[Et]||null,t=t!=null?t[a]:null,typeof t=="function"&&e.removeEventListener(i,t,r),typeof s=="function")){typeof t!="function"&&t!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(i,s,r);break e}it=!0,a in e?e[a]=s:s===!0?e.setAttribute(a,""):bo(e,a,s)}return}it=!0}function An(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ye("error",e),Ye("load",e);var s=!1,r=!1,i;for(i in a)if(a.hasOwnProperty(i)){var m=a[i];if(m!=null)switch(i){case"src":s=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:bt(e,t,i,m,a,null)}}r&&bt(e,t,"srcSet",a.srcSet,a,null),s&&bt(e,t,"src",a.src,a,null);return;case"input":Ye("invalid",e);var g=i=m=r=null,E=null,F=null;for(s in a)if(a.hasOwnProperty(s)){var se=a[s];if(se!=null)switch(s){case"name":r=se;break;case"type":m=se;break;case"checked":E=se;break;case"defaultChecked":F=se;break;case"value":i=se;break;case"defaultValue":g=se;break;case"children":case"dangerouslySetInnerHTML":if(se!=null)throw Error(c(137,t));break;default:bt(e,t,s,se,a,null)}}s0(e,i,g,E,F,m,r,!1);return;case"select":Ye("invalid",e),s=m=i=null;for(r in a)if(a.hasOwnProperty(r)&&(g=a[r],g!=null))switch(r){case"value":i=g;break;case"defaultValue":m=g;break;case"multiple":s=g;default:bt(e,t,r,g,a,null)}t=i,a=m,e.multiple=!!s,t!=null?pl(e,!!s,t,!1):a!=null&&pl(e,!!s,a,!0);return;case"textarea":Ye("invalid",e),i=r=s=null;for(m in a)if(a.hasOwnProperty(m)&&(g=a[m],g!=null))switch(m){case"value":s=g;break;case"defaultValue":r=g;break;case"children":i=g;break;case"dangerouslySetInnerHTML":if(g!=null)throw Error(c(91));break;default:bt(e,t,m,g,a,null)}r0(e,s,r,i);return;case"option":for(E in a)if(a.hasOwnProperty(E)&&(s=a[E],s!=null))switch(E){case"selected":e.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:bt(e,t,E,s,a,null)}return;case"dialog":Ye("beforetoggle",e),Ye("toggle",e),Ye("cancel",e),Ye("close",e);break;case"iframe":case"object":Ye("load",e);break;case"video":case"audio":for(s=0;s<Xr.length;s++)Ye(Xr[s],e);break;case"image":Ye("error",e),Ye("load",e);break;case"details":Ye("toggle",e);break;case"embed":case"source":case"link":Ye("error",e),Ye("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(F in a)if(a.hasOwnProperty(F)&&(s=a[F],s!=null))switch(F){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:bt(e,t,F,s,a,null)}return;default:if(vc(t)){for(se in a)a.hasOwnProperty(se)&&(s=a[se],s!==void 0&&yd(e,t,se,s,a,void 0));return}}for(g in a)a.hasOwnProperty(g)&&(s=a[g],s!=null&&bt(e,t,g,s,a,null))}var o1={};function i1(e,t,a,s){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,i=null,m=null,g=null,E=null,F=null,se=null;for(W in a){var he=a[W];if(a.hasOwnProperty(W)&&he!=null)switch(W){case"checked":break;case"value":break;case"defaultValue":E=he;default:s.hasOwnProperty(W)||bt(e,t,W,null,s,he)}}for(var _ in s){var W=s[_];if(he=a[_],s.hasOwnProperty(_)&&(W!=null||he!=null))switch(_){case"type":W!==he&&(it=!0),i=W;break;case"name":W!==he&&(it=!0),r=W;break;case"checked":W!==he&&(it=!0),F=W;break;case"defaultChecked":W!==he&&(it=!0),se=W;break;case"value":W!==he&&(it=!0),m=W;break;case"defaultValue":W!==he&&(it=!0),g=W;break;case"children":case"dangerouslySetInnerHTML":if(W!=null)throw Error(c(137,t));break;default:W!==he&&bt(e,t,_,W,s,he)}}yc(e,m,g,E,F,se,i,r);return;case"select":W=m=g=_=null;for(i in a)if(E=a[i],a.hasOwnProperty(i)&&E!=null)switch(i){case"value":break;case"multiple":W=E;default:s.hasOwnProperty(i)||bt(e,t,i,null,s,E)}for(r in s)if(i=s[r],E=a[r],s.hasOwnProperty(r)&&(i!=null||E!=null))switch(r){case"value":i!==E&&(it=!0),_=i;break;case"defaultValue":i!==E&&(it=!0),g=i;break;case"multiple":i!==E&&(it=!0),m=i;default:i!==E&&bt(e,t,r,i,s,E)}t=g,a=m,s=W,_!=null?pl(e,!!a,_,!1):!!s!=!!a&&(t!=null?pl(e,!!a,t,!0):pl(e,!!a,a?[]:"",!1));return;case"textarea":W=_=null;for(g in a)if(r=a[g],a.hasOwnProperty(g)&&r!=null&&!s.hasOwnProperty(g))switch(g){case"value":break;case"children":break;default:bt(e,t,g,null,s,r)}for(m in s)if(r=s[m],i=a[m],s.hasOwnProperty(m)&&(r!=null||i!=null))switch(m){case"value":r!==i&&(it=!0),_=r;break;case"defaultValue":r!==i&&(it=!0),W=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(c(91));break;default:r!==i&&bt(e,t,m,r,s,i)}l0(e,_,W);return;case"option":for(var Ne in a)if(_=a[Ne],a.hasOwnProperty(Ne)&&_!=null&&!s.hasOwnProperty(Ne))switch(Ne){case"selected":e.selected=!1;break;default:bt(e,t,Ne,null,s,_)}for(E in s)if(_=s[E],W=a[E],s.hasOwnProperty(E)&&_!==W&&(_!=null||W!=null))switch(E){case"selected":_!==W&&(it=!0),e.selected=_&&typeof _!="function"&&typeof _!="symbol";break;default:bt(e,t,E,_,s,W)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Be in a)_=a[Be],a.hasOwnProperty(Be)&&_!=null&&!s.hasOwnProperty(Be)&&bt(e,t,Be,null,s,_);for(F in s)if(_=s[F],W=a[F],s.hasOwnProperty(F)&&_!==W&&(_!=null||W!=null))switch(F){case"children":case"dangerouslySetInnerHTML":if(_!=null)throw Error(c(137,t));break;default:bt(e,t,F,_,s,W)}return;default:if(vc(t)){for(var Pe in a)_=a[Pe],a.hasOwnProperty(Pe)&&_!==void 0&&!s.hasOwnProperty(Pe)&&yd(e,t,Pe,void 0,s,_);for(se in s)_=s[se],W=a[se],!s.hasOwnProperty(se)||_===W||_===void 0&&W===void 0||yd(e,t,se,_,s,W);return}}for(var Z in a)_=a[Z],a.hasOwnProperty(Z)&&_!=null&&!s.hasOwnProperty(Z)&&bt(e,t,Z,null,s,_);for(he in s)_=s[he],W=a[he],!s.hasOwnProperty(he)||_===W||_==null&&W==null||bt(e,t,he,_,s,W)}function xx(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function c1(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var r=a[s],i=r.transferSize,m=r.initiatorType,g=r.duration;if(i&&g&&xx(m)){for(m=0,g=r.responseEnd,s+=1;s<a.length;s++){var E=a[s],F=E.startTime;if(F>g)break;var se=E.transferSize,he=E.initiatorType;se&&xx(he)&&(E=E.responseEnd,m+=se*(E<g?1:(g-F)/(E-F)))}if(--s,t+=8*(i+m)/(r.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Nd=null,vd=null;function Yr(e){return e.nodeType===9?e:e.ownerDocument}function hx(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function bx(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function px(e,t,a,s){return a=Yr(a).createElement(e),a[ot]=s,a[Et]=t,An(a,e,t),Xe(a),a}function Ld(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Od=null;function u1(){var e=window.event;return e&&e.type==="popstate"?e===Od?!1:(Od=e,!0):(Od=null,!1)}var jd=typeof setTimeout=="function"?setTimeout:void 0,d1=typeof clearTimeout=="function"?clearTimeout:void 0,gx=typeof Promise=="function"?Promise:void 0,Rx=typeof requestAnimationFrame=="function"?requestAnimationFrame:jd,m1=typeof queueMicrotask=="function"?queueMicrotask:typeof gx<"u"?function(e){return gx.resolve(null).then(e).catch(A1)}:jd;function A1(e){setTimeout(function(){throw e})}function Bs(e){return e==="head"}function Sx(e,t){var a=t,s=0;do{var r=a.nextSibling;if(e.removeChild(a),r&&r.nodeType===8)if(a=r.data,a==="/$"||a==="/&"){if(s===0){e.removeChild(r),nr(t);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")kd(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,kd(a);for(var i=a.firstChild;i;){var m=i.nextSibling,g=i.nodeName;i[zs]||g==="SCRIPT"||g==="STYLE"||g==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=m}}else a==="body"&&kd(e.ownerDocument.body);a=r}while(a);nr(t)}function yx(e,t){var a=e;e=0;do{var s=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=s}while(a)}function Nx(e,t,a){if(t=CSS.escape(t)!==t?"r-"+btoa(t).replace(/=/g,""):t,e.style.viewTransitionName=t,a!=null&&(e.style.viewTransitionClass=a),a=getComputedStyle(e),a.display==="inline"){if(t=e.getClientRects(),t.length===1)var s=1;else for(var r=s=0;r<t.length;r++){var i=t[r];0<i.width&&0<i.height&&s++}s===1&&(e=e.style,e.display=t.length===1?"inline-block":"block",e.marginTop="-"+a.paddingTop,e.marginBottom="-"+a.paddingBottom)}}function vx(e,t){e=e.style,t=t.style;var a=t!=null?t.hasOwnProperty("viewTransitionName")?t.viewTransitionName:t.hasOwnProperty("view-transition-name")?t["view-transition-name"]:null:null;e.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=t!=null?t.hasOwnProperty("viewTransitionClass")?t.viewTransitionClass:t.hasOwnProperty("view-transition-class")?t["view-transition-class"]:null:null,e.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),e.display==="inline-block"&&(t==null?e.display=e.margin="":(a=t.display,e.display=a==null||typeof a=="boolean"?"":a,a=t.margin,a!=null?e.margin=a:(a=t.hasOwnProperty("marginTop")?t.marginTop:t["margin-top"],e.marginTop=a==null||typeof a=="boolean"?"":a,t=t.hasOwnProperty("marginBottom")?t.marginBottom:t["margin-bottom"],e.marginBottom=t==null||typeof t=="boolean"?"":t)))}function f1(e,t,a){return a=a.ownerDocument.defaultView,{rect:e,abs:t.position==="absolute"||t.position==="fixed",clip:t.clipPath!=="none"||t.overflow!=="visible"||t.filter!=="none"||t.mask!=="none"||t.mask!=="none"||t.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=a.innerHeight&&e.left<=a.innerWidth}}function Id(e){var t=e.getBoundingClientRect(),a=getComputedStyle(e);return f1(t,a,e)}function x1(e){return e.documentElement.clientHeight}function h1(e){this.addEventListener("load",e),this.addEventListener("error",e)}function b1(e,t,a,s,r,i,m,g,E){var F=t.nodeType===9?t:t.ownerDocument;try{var se=F.startViewTransition({update:function(){var _=F.defaultView,W=_.navigation&&_.navigation.transition,Ne=F.fonts.status;s();var Be=[];if(Ne==="loaded"&&(x1(F),F.fonts.status==="loading"&&Be.push(F.fonts.ready)),Ne=Be.length,e!==null)for(var Pe=e.suspenseyImages,Z=0,T=0;T<Pe.length;T++){var V=Pe[T];if(!V.complete){var xe=V.getBoundingClientRect();if(0<xe.bottom&&0<xe.right&&xe.top<_.innerHeight&&xe.left<_.innerWidth){if(Z+=Fx(V),Z>Ii){Be.length=Ne;break}V=new Promise(h1.bind(V)),Be.push(V)}}}if(0<Be.length)return _=Promise.race([Promise.all(Be),new Promise(function(je){return setTimeout(je,500)})]).then(r,r),(W?Promise.allSettled([W.finished,_]):_).then(i,i);if(r(),W)return W.finished.then(i,i);i()},types:a});F.__reactViewTransition=se;var he=[];return se.ready.then(function(){for(var _=F.documentElement.getAnimations({subtree:!0}),W=0;W<_.length;W++){var Ne=_[W],Be=Ne.effect,Pe=Be.pseudoElement;if(Pe!=null&&Pe.startsWith("::view-transition")){he.push(Ne),Ne=Be.getKeyframes();for(var Z=Pe=void 0,T=!0,V=0;V<Ne.length;V++){var xe=Ne[V],je=xe.width;if(Pe===void 0)Pe=je;else if(Pe!==je){T=!1;break}if(je=xe.height,Z===void 0)Z=je;else if(Z!==je){T=!1;break}delete xe.width,delete xe.height,xe.transform==="none"&&delete xe.transform}T&&Pe!==void 0&&Z!==void 0&&(Be.setKeyframes(Ne),T=getComputedStyle(Be.target,Be.pseudoElement),T.width!==Pe||T.height!==Z)&&(T=Ne[0],T.width=Pe,T.height=Z,T=Ne[Ne.length-1],T.width=Pe,T.height=Z,Be.setKeyframes(Ne))}}m()},function(_){F.__reactViewTransition===se&&(F.__reactViewTransition=null);try{if(typeof _=="object"&&_!==null)switch(_.name){case"InvalidStateError":(_.message==="View transition was skipped because document visibility state is hidden."||_.message==="Skipping view transition because document visibility state has become hidden."||_.message==="Skipping view transition because viewport size changed."||_.message==="Transition was aborted because of invalid state")&&(_=null)}_!==null&&E(_)}finally{s(),r(),m()}}),se.finished.finally(function(){for(var _=0;_<he.length;_++)he[_].cancel();F.__reactViewTransition===se&&(F.__reactViewTransition=null),g()}),se}catch{return s(),r(),m(),null}}function ul(e,t){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+t+")"}ul.prototype.animate=function(e,t){return t=typeof t=="number"?{duration:t}:ue({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)},ul.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,a=e.getAnimations({subtree:!0}),s=[],r=0;r<a.length;r++){var i=a[r].effect;i!==null&&i.target===e&&i.pseudoElement===t&&s.push(a[r])}return s},ul.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Lx(e){return{name:e,group:new ul("group",e),imagePair:new ul("image-pair",e),old:new ul("old",e),new:new ul("new",e)}}function _n(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}_n.prototype.addEventListener=function(e,t,a){var s=null,r=null;if(!(a!=null&&typeof a!="boolean"&&(s=a.signal||null,s!==null&&s.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var i=this._eventListeners;if(jx(i,e,t,a)===-1){var m=this,g=t;a!=null&&typeof a!="boolean"&&a.once===!0&&(g=function(E){m.removeEventListener(e,t,a),typeof t=="function"?t.call(this,E):t.handleEvent(E)}),s!==null&&(r=m.removeEventListener.bind(m,e,t,a),s.addEventListener("abort",r,{once:!0}),r=s.removeEventListener.bind(s,"abort",r)),s=ql(a),i.push({type:e,listener:t,optionsOrUseCapture:a,attachedListener:g,cleanup:r}),p(this._fragmentFiber.child,!1,p1,e,g,s)}this._eventListeners=i}};function p1(e,t,a,s){return j(e).addEventListener(t,a,s),!1}_n.prototype.removeEventListener=function(e,t,a){var s=this._eventListeners;if(s!==null&&(t=jx(s,e,t,a),t!==-1)){var r=s[t];a=r.attachedListener;var i=r.cleanup;r=ql(r.optionsOrUseCapture),p(this._fragmentFiber.child,!1,g1,e,a,r),s.splice(t,1),i!==null&&i()}};function g1(e,t,a,s){return j(e).removeEventListener(t,a,s),!1}function ql(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function Ox(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function jx(e,t,a,s){if(e.length===0)return-1;s=Ox(s);for(var r=0;r<e.length;r++){var i=e[r];if(i.type===t&&i.listener===a&&Ox(i.optionsOrUseCapture)===s)return r}return-1}_n.prototype.dispatchEvent=function(e){var t=w(this._fragmentFiber);if(t===null)return!0;t=j(t);var a=this._eventListeners;if(a!==null&&0<a.length||!e.bubbles){var s=t.nodeType===9?t.createComment(""):document.createTextNode("");if(a)for(var r=0;r<a.length;r++){var i=a[r];s.addEventListener(i.type,i.attachedListener,ql(i.optionsOrUseCapture))}if(t.appendChild(s),e=s.dispatchEvent(e),a)for(r=0;r<a.length;r++)i=a[r],s.removeEventListener(i.type,i.attachedListener,ql(i.optionsOrUseCapture));return t.removeChild(s),e}return t.dispatchEvent(e)},_n.prototype.focus=function(e){p(this._fragmentFiber.child,!0,Ix,e,void 0,void 0)};function Ix(e,t){return e.tag===6?!1:(e=j(e),w1(e,t))}_n.prototype.focusLast=function(e){var t=[];p(this._fragmentFiber.child,!0,Bd,t,void 0,void 0);for(var a=t.length-1;0<=a&&!Ix(t[a],e);a--);};function Bd(e,t){return t.push(e),!1}_n.prototype.blur=function(){var e=w(this._fragmentFiber);e!==null&&(e=j(e),e=Yr(e).activeElement,e!==null&&p(this._fragmentFiber.child,!1,R1,e,void 0,void 0))};function R1(e,t){return e.tag===6?!1:(e=j(e),e===t||e.contains(t)?(t.blur(),!0):!1)}_n.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),p(this._fragmentFiber.child,!1,S1,e,void 0,void 0)};function S1(e,t){return e.tag===6||(e=j(e),t.observe(e)),!1}_n.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),p(this._fragmentFiber.child,!1,y1,e,void 0,void 0);for(var a=t=0;a<fa.length;a++){var s=fa[a];s.fragmentInstance===this&&s.observer===e?e.unobserve(s.instance):fa[t++]=s}fa.length=t}};function y1(e,t){return e.tag===6||(e=j(e),t.unobserve(e)),!1}var fa=[],Hd=!1;function N1(e,t,a){fa.push({fragmentInstance:e,observer:t,instance:a}),Hd||(Hd=!0,E1(function(){Hd=!1;var s=fa;fa=[];for(var r=0;r<s.length;r++){var i=s[r];i.observer.unobserve(i.instance)}}))}_n.prototype.getClientRects=function(){var e=[];return p(this._fragmentFiber.child,!1,v1,e,void 0,void 0),e};function v1(e,t){if(e.tag===6){e=e.stateNode;var a=e.ownerDocument.createRange();a.selectNodeContents(e),t.push.apply(t,a.getClientRects())}else e=j(e),t.push.apply(t,e.getClientRects());return!1}_n.prototype.getRootNode=function(e){var t=w(this._fragmentFiber);return t===null?this:j(t).getRootNode(e)},_n.prototype.compareDocumentPosition=function(e){var t=w(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];p(this._fragmentFiber.child,!1,Bd,a,void 0,void 0);var s=j(t);if(a.length===0){if(a=s,P(this._fragmentFiber)){e:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break e}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(a=t)}t=this._fragmentFiber;var r=s=a.compareDocumentPosition(e);return a===e?r=Node.DOCUMENT_POSITION_CONTAINS:s&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=G(t)[1],a===null?r=Node.DOCUMENT_POSITION_PRECEDING:(e=j(a).compareDocumentPosition(e),r=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),r|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=j(a[0]),r=j(a[a.length-1]);var i=P(this._fragmentFiber)?t.parentElement:s;if(i==null)return Node.DOCUMENT_POSITION_DISCONNECTED;s=i.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,i=i.compareDocumentPosition(r)&Node.DOCUMENT_POSITION_CONTAINED_BY;var m=t.compareDocumentPosition(e),g=r.compareDocumentPosition(e),E=m&Node.DOCUMENT_POSITION_CONTAINED_BY||g&Node.DOCUMENT_POSITION_CONTAINED_BY;return g=s&&i&&m&Node.DOCUMENT_POSITION_FOLLOWING&&g&Node.DOCUMENT_POSITION_PRECEDING,t=s&&t===e||i&&r===e||E||g?Node.DOCUMENT_POSITION_CONTAINED_BY:!s&&t===e||!i&&r===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:m,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||L1(t,this._fragmentFiber,a[0],a[a.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function L1(e,t,a,s,r){var i=X(r);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!i)e:{for(;i!==null;){if(i.tag===7&&(i===t||i.alternate===t)){a=!0;break e}i=i.return}a=!1}return a}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(i===null)return i=r.ownerDocument,r===i||r===i.documentElement||r===i.body;e:{for(i=t,t=w(t);i!==null;){if(!(i.tag!==5&&i.tag!==3&&i.tag!==27||i!==t&&i.alternate!==t)){i=!0;break e}i=i.return}i=!1}return i}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!i)&&!(t=i===a)&&(t=J(a,i,k),t===null?t=!1:(p(t,!0,M,i,a),i=z,z=null,t=i!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!i)&&!(t=i===s)&&(t=J(s,i,k),t===null?t=!1:(p(t,!0,te,i,s),i=z,ce=z=null,t=i!==null)),t):!1}function Bx(e,t){var a=e.ownerDocument.createRange();a.selectNodeContents(e),e=a.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}_n.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(c(566));var t=[];p(this._fragmentFiber.child,!1,Bd,t,void 0,void 0);var a=e!==!1;if(t.length===0){var s=G(this._fragmentFiber);if(s=a?s[1]||s[0]||w(this._fragmentFiber):s[0]||s[1],s===null)return;if(s.tag===6){e=j(s),Bx(e,a);return}if(s=j(s),s.nodeType!==9){if(s.nodeType===11){a="host"in s?s.host:null,a!==null&&a.scrollIntoView(e);return}s.scrollIntoView(e)}}for(s=a?t.length-1:0;s!==(a?-1:t.length);){var r=t[s];r.tag===6?(r=j(r),Bx(r,a)):j(r).scrollIntoView(e),s+=a?-1:1}};function O1(e,t){return e=j(e),Hx(e,t),!1}function Hx(e,t){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(t)}function wx(e,t){var a=t._eventListeners;if(a!==null)for(var s=0;s<a.length;s++){var r=a[s];e.addEventListener(r.type,r.attachedListener,ql(r.optionsOrUseCapture))}e.nodeType!==3&&(a=t._observers,a!==null&&a.forEach(function(i){for(var m=0,g=0;g<fa.length;g++){var E=fa[g];(E.fragmentInstance!==t||E.observer!==i||E.instance!==e)&&(fa[m++]=E)}fa.length=m,i.observe(e)}),Hx(e,t))}function j1(e,t){var a=t._eventListeners;if(a!==null)for(var s=0;s<a.length;s++){var r=a[s];e.removeEventListener(r.type,r.attachedListener,ql(r.optionsOrUseCapture))}e.nodeType!==3&&(a=t._observers,a!==null&&a.forEach(function(i){typeof i.rootMargin=="string"?N1(t,i,e):i.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function wd(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":wd(a),D(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function I1(e,t,a,s){for(;e.nodeType===1;){var r=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[zs])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=ea(e.nextSibling),e===null)break}return null}function B1(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=ea(e.nextSibling),e===null))return null;return e}function Ex(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=ea(e.nextSibling),e===null))return null;return e}function Ed(e){return e.data==="$?"||e.data==="$~"}function Cd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function H1(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var s=function(){t(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),e._reactRetry=s}}function ea(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Md=null;function Cx(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return ea(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Mx(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function w1(e,t){function a(){s=!0}if(e.ownerDocument.activeElement===e)return!0;var s=!1;try{e.ownerDocument.addEventListener("focus",a,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener("focus",a,!0)}return s}function E1(e){Rx(function(){Rx(function(t){return e(t)})})}function kx(e,t,a){switch(t=Yr(a),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function Ux(e,t,a){for(var s in a){var r=a[s];a.hasOwnProperty(s)&&r!=null&&bt(e,t,s,null,o1,r)}a.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===Sa&&(e.onclick=null),D(e)}function kd(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);D(e)}var ta=new Map,Dx=new Set;function qr(e){if(typeof e.getRootNode=="function"){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var $a=Re.d;Re.d={f:C1,r:M1,D:k1,C:U1,L:D1,m:T1,X:K1,S:G1,M:P1};function C1(){var e=$a.f(),t=gi();return e||t}function M1(e){var t=Le(e);t!==null&&t.tag===5&&t.type==="form"?TA(t):$a.r(e)}var Ql=typeof document>"u"?null:document;function Tx(e,t,a){var s=Ql;if(s&&typeof t=="string"&&t){var r=Xn(t);r='link[rel="'+e+'"][href="'+r+'"]',typeof a=="string"&&(r+='[crossorigin="'+a+'"]'),Dx.has(r)||(Dx.add(r),e={rel:e,crossOrigin:a,href:t},s.querySelector(r)===null&&(t=s.createElement("link"),An(t,"link",e),Xe(t),s.head.appendChild(t)))}}function k1(e){$a.D(e),Tx("dns-prefetch",e,null)}function U1(e,t){$a.C(e,t),Tx("preconnect",e,t)}function D1(e,t,a){$a.L(e,t,a);var s=Ql;if(s&&e&&t){var r='link[rel="preload"][as="'+Xn(t)+'"]';t==="image"&&a&&a.imageSrcSet?(r+='[imagesrcset="'+Xn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(r+='[imagesizes="'+Xn(a.imageSizes)+'"]')):r+='[href="'+Xn(e)+'"]';var i=r;switch(t){case"style":i=$l(e);break;case"script":i=Wl(e)}if(!(ta.has(i)||(e=ue({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),ta.set(i,e),s.querySelector(r)!==null||t==="style"&&s.querySelector(Qr(i))||t==="script"&&s.querySelector($r(i))))){var m=s.createElement("link");An(m,"link",e),t==="style"&&(m[is]=!0,m.onload=m.onerror=function(){on(m)}),Xe(m),s.head.appendChild(m)}}}function T1(e,t){$a.m(e,t);var a=Ql;if(a&&e){var s=t&&typeof t.as=="string"?t.as:"script",r='link[rel="modulepreload"][as="'+Xn(s)+'"][href="'+Xn(e)+'"]',i=r;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Wl(e)}if(!ta.has(i)&&(e=ue({rel:"modulepreload",href:e},t),ta.set(i,e),a.querySelector(r)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector($r(i)))return}s=a.createElement("link"),An(s,"link",e),Xe(s),a.head.appendChild(s)}}}function G1(e,t,a){$a.S(e,t,a);var s=Ql;if(s&&e){var r=jt(s).hoistableStyles,i=$l(e);t=t||"default";var m=r.get(i);if(!m){var g={loading:0,preload:null};if(m=s.querySelector(Qr(i)))g.loading=5;else{e=ue({rel:"stylesheet",href:e,"data-precedence":t},a),(a=ta.get(i))&&Ud(e,a);var E=m=s.createElement("link");Xe(E),An(E,"link",e),E._p=new Promise(function(F,se){E.onload=F,E.onerror=se}),E.addEventListener("load",function(){g.loading|=1}),E.addEventListener("error",function(){g.loading|=2}),g.loading|=4,Oi(m,t,s)}m={type:"stylesheet",instance:m,count:1,state:g},r.set(i,m)}}}function K1(e,t){$a.X(e,t);var a=Ql;if(a&&e){var s=jt(a).hoistableScripts,r=Wl(e),i=s.get(r);i||(i=a.querySelector($r(r)),i||(e=ue({src:e,async:!0},t),(t=ta.get(r))&&Dd(e,t),i=a.createElement("script"),Xe(i),An(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},s.set(r,i))}}function P1(e,t){$a.M(e,t);var a=Ql;if(a&&e){var s=jt(a).hoistableScripts,r=Wl(e),i=s.get(r);i||(i=a.querySelector($r(r)),i||(e=ue({src:e,async:!0,type:"module"},t),(t=ta.get(r))&&Dd(e,t),i=a.createElement("script"),Xe(i),An(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},s.set(r,i))}}function Gx(e,t,a,s){var r=(r=gt.current)?qr(r):null;if(!r)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=$l(a.href),t=jt(r).hoistableStyles,s=t.get(a),s||(s={type:"style",instance:null,count:0,state:null},t.set(a,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=$l(a.href);var i=jt(r).hoistableStyles,m=i.get(e);if(m||(r=r.ownerDocument||r,m={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,m),(i=r.querySelector(Qr(e)))?i._p||(m.instance=i,m.state.loading=5):(i=ta.get(e),i||(i={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ta.set(e,i)),_1(r,e,i,m.state))),t&&s===null)throw Error(c(528,""));return m}if(t&&s!==null)throw Error(c(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(a=Wl(a),t=jt(r).hoistableScripts,s=t.get(a),s||(s={type:"script",instance:null,count:0,state:null},t.set(a,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function $l(e){return'href="'+Xn(e)+'"'}function Qr(e){return'link[rel="stylesheet"]['+e+"]"}function Kx(e){return ue({},e,{"data-precedence":e.precedence,precedence:null})}function _1(e,t,a,s){if(t=e.querySelector('link[rel="preload"][as="style"]['+t+"]")){if(t[is]!==!0){s.loading=1;return}}else t=e.createElement("link"),t[is]=!0,t.onload=t.onerror=on.bind(null,t),An(t,"link",a),Xe(t),e.head.appendChild(t);s.preload=t,t.addEventListener("load",function(){return s.loading|=1}),t.addEventListener("error",function(){return s.loading|=2})}function Wl(e){return'[src="'+Xn(e)+'"]'}function $r(e){return"script[async]"+e}function Px(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var s=e.querySelector('style[data-href~="'+Xn(a.href)+'"]');if(s)return t.instance=s,Xe(s),s;var r=ue({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),Xe(s),An(s,"style",r),Oi(s,a.precedence,e),t.instance=s;case"stylesheet":r=$l(a.href);var i=e.querySelector(Qr(r));if(i)return t.state.loading|=4,t.instance=i,Xe(i),i;s=Kx(a),(r=ta.get(r))&&Ud(s,r),i=(e.ownerDocument||e).createElement("link"),Xe(i);var m=i;return m._p=new Promise(function(g,E){m.onload=g,m.onerror=E}),An(i,"link",s),t.state.loading|=4,Oi(i,a.precedence,e),t.instance=i;case"script":return i=Wl(a.src),(r=e.querySelector($r(i)))?(t.instance=r,Xe(r),r):(s=a,(r=ta.get(i))&&(s=ue({},a),Dd(s,r)),e=e.ownerDocument||e,r=e.createElement("script"),Xe(r),An(r,"link",s),e.head.appendChild(r),t.instance=r);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(s=t.instance,t.state.loading|=4,Oi(s,a.precedence,e));return t.instance}function Oi(e,t,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=s.length?s[s.length-1]:null,i=r,m=0;m<s.length;m++){var g=s[m];if(g.dataset.precedence===t)i=g;else if(i!==r)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Ud(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Dd(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var ji=null;function _x(e,t,a){if(ji===null){var s=new Map,r=ji=new Map;r.set(a,s)}else r=ji,s=r.get(a),s||(s=new Map,r.set(a,s));if(s.has(e))return s;for(s.set(e,null),a=a.getElementsByTagName(e),r=0;r<a.length;r++){var i=a[r];if(!(i[zs]||i[ot]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var m=i.getAttribute(t)||"";m=e+m;var g=s.get(m);g?g.push(i):s.set(m,[i])}}return s}function Td(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function Z1(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Zx(e,t){return e==="img"&&t.src!=null&&t.src!==""&&t.onLoad==null&&t.loading!=="lazy"}function zx(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Fx(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function Jx(e,t){typeof t.decode=="function"&&(e.imgCount++,t.complete||(e.imgBytes+=Fx(t),e.suspenseyImages.push(t)),e=J1.bind(e),t.decode().then(e,e))}function z1(e,t,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var r=$l(s.href),i=t.querySelector(Qr(r));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Wr.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=i,Xe(i);return}i=t.ownerDocument||t,s=Kx(s),(r=ta.get(r))&&Ud(s,r),i=i.createElement("link"),Xe(i);var m=i;m._p=new Promise(function(g,E){m.onload=g,m.onerror=E}),An(i,"link",s),a.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Wr.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Ii=0;function F1(e,t){return e.stylesheets&&e.count===0&&Hi(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var s=setTimeout(function(){if(e.stylesheets&&Hi(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&Ii===0&&(Ii=62500*c1());var r=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Hi(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>Ii?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(s),clearTimeout(r)}}:null}function Xx(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)Hi(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function Wr(){this.count--,Xx(this)}function J1(){this.imgCount--,Xx(this)}var Bi=null;function Hi(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Bi=new Map,t.forEach(X1,e),Bi=null,Wr.call(e))}function X1(e,t){if(!(t.state.loading&4)){var a=Bi.get(e);if(a)var s=a.get(null);else{a=new Map,Bi.set(e,a);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<r.length;i++){var m=r[i];(m.nodeName==="LINK"||m.getAttribute("media")!=="not all")&&(a.set(m.dataset.precedence,m),s=m)}s&&a.set(null,s)}r=t.instance,m=r.getAttribute("data-precedence"),i=a.get(m)||s,i===s&&a.set(null,r),a.set(m,r),this.count++,s=Wr.bind(this),r.addEventListener("load",s),r.addEventListener("error",s),i?i.parentNode.insertBefore(r,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),t.state.loading|=4}}var er={$$typeof:O,Provider:null,Consumer:null,_currentValue:Te,_currentValue2:Te,_threadCount:0};function V1(e,t,a,s,r,i,m,g,E){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ie(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ie(0),this.hiddenUpdates=ie(null),this.identifierPrefix=s,this.onUncaughtError=r,this.onCaughtError=i,this.onRecoverableError=m,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.transitionTypes=null,this.incompleteTransitions=new Map}function Vx(e,t,a,s,r,i,m,g,E,F,se,he){return e=new V1(e,t,a,m,E,F,se,he,g),t=1,i===!0&&(t|=24),i=Ln(3,null,null,t),e.current=i,i.stateNode=e,t=Wc(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:s,isDehydrated:a,cache:t},au(i),e}function Yx(e){return e?(e=Ol,e):Ol}function qx(e,t,a,s,r,i){r=Yx(r),s.context===null?s.context=r:s.pendingContext=r,s=bs(t),s.payload={element:a},i=i===void 0?null:i,i!==null&&(s.callback=i),a=ps(e,s,t),a!==null&&(Bn(a,e,t),Hr(a,e,t))}function Qx(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Gd(e,t){Qx(e,t),(e=e.alternate)&&Qx(e,t)}function $x(e){if(e.tag===13||e.tag===31){var t=Xs(e,67108864);t!==null&&Bn(t,e,67108864),Gd(e,67108864)}}function Wx(e){if(e.tag===13||e.tag===31){var t=Pn();t=Fe(t);var a=Xs(e,t);a!==null&&Bn(a,e,t),Gd(e,t)}}var tr=!0;function Y1(e,t,a,s){var r=Q.T;Q.T=null;var i=Re.p;try{Re.p=2,Kd(e,t,a,s)}finally{Re.p=i,Q.T=r}}function q1(e,t,a,s){var r=Q.T;Q.T=null;var i=Re.p;try{Re.p=8,Kd(e,t,a,s)}finally{Re.p=i,Q.T=r}}function Kd(e,t,a,s){if(tr){var r=Pd(s);if(r===null)Sd(e,t,s,wi,a),th(e,s);else if($1(r,e,t,a,s))s.stopPropagation();else if(th(e,s),t&4&&-1<Q1.indexOf(e)){for(;r!==null;){var i=Le(r);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var m=vn(i.pendingLanes);if(m!==0){var g=i;for(g.pendingLanes|=2,g.entangledLanes|=2;m;){var E=1<<31-Ct(m);g.entanglements[1]|=E,m&=~E}wa(i),(ut&6)===0&&(hi=Tt()+500,Jr(0))}}break;case 31:case 13:g=Xs(i,2),g!==null&&Bn(g,i,2),gi(),Gd(i,2)}if(i=Pd(s),i===null&&Sd(e,t,s,wi,a),i===r)break;r=i}r!==null&&s.stopPropagation()}else Sd(e,t,s,null,a)}}function Pd(e){return e=Oc(e),_d(e)}var wi=null;function _d(e){if(wi=null,e=X(e),e!==null){var t=A(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=f(t),e!==null)return e;e=null}else if(a===31){if(e=h(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return wi=e,null}function eh(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ra()){case ls:return 2;case Ks:return 8;case oa:case ka:return 32;case Ua:return 268435456;default:return 32}default:return 32}}var Zd=!1,Hs=null,ws=null,Es=null,eo=new Map,to=new Map,Cs=[],Q1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function th(e,t){switch(e){case"focusin":case"focusout":Hs=null;break;case"dragenter":case"dragleave":ws=null;break;case"mouseover":case"mouseout":Es=null;break;case"pointerover":case"pointerout":eo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":to.delete(t.pointerId)}}function no(e,t,a,s,r,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:s,nativeEvent:i,targetContainers:[r]},t!==null&&(t=Le(t),t!==null&&$x(t)),e):(e.eventSystemFlags|=s,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function $1(e,t,a,s,r){switch(t){case"focusin":return Hs=no(Hs,e,t,a,s,r),!0;case"dragenter":return ws=no(ws,e,t,a,s,r),!0;case"mouseover":return Es=no(Es,e,t,a,s,r),!0;case"pointerover":var i=r.pointerId;return eo.set(i,no(eo.get(i)||null,e,t,a,s,r)),!0;case"gotpointercapture":return i=r.pointerId,to.set(i,no(to.get(i)||null,e,t,a,s,r)),!0}return!1}function nh(e){var t=X(e.target);if(t!==null){var a=A(t);if(a!==null){if(t=a.tag,t===13){if(t=f(a),t!==null){e.blockedOn=t,nt(e.priority,function(){Wx(a)});return}}else if(t===31){if(t=h(a),t!==null){e.blockedOn=t,nt(e.priority,function(){Wx(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ei(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Pd(e.nativeEvent);if(a===null){a=e.nativeEvent;var s=new a.constructor(a.type,a);Lc=s,a.target.dispatchEvent(s),Lc=null}else return t=Le(a),t!==null&&$x(t),e.blockedOn=a,!1;t.shift()}return!0}function ah(e,t,a){Ei(e)&&a.delete(t)}function W1(){Zd=!1,Hs!==null&&Ei(Hs)&&(Hs=null),ws!==null&&Ei(ws)&&(ws=null),Es!==null&&Ei(Es)&&(Es=null),eo.forEach(ah),to.forEach(ah)}function Ci(e,t){e.blockedOn===t&&(e.blockedOn=null,Zd||(Zd=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,W1)))}var Mi=null;function sh(e){Mi!==e&&(Mi=e,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){Mi===e&&(Mi=null);for(var t=0;t<e.length;t+=3){var a=e[t],s=e[t+1],r=e[t+2];if(typeof s!="function"){if(_d(s||a)===null)continue;break}var i=Le(a);i!==null&&(e.splice(t,3),t-=3,vu(i,{pending:!0,data:r,method:a.method,action:s},s,r))}}))}function nr(e){function t(E){return Ci(E,e)}Hs!==null&&Ci(Hs,e),ws!==null&&Ci(ws,e),Es!==null&&Ci(Es,e),eo.forEach(t),to.forEach(t);for(var a=0;a<Cs.length;a++){var s=Cs[a];s.blockedOn===e&&(s.blockedOn=null)}for(;0<Cs.length&&(a=Cs[0],a.blockedOn===null);)nh(a),a.blockedOn===null&&Cs.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var r=a[s],i=a[s+1],m=r[Et]||null;if(typeof i=="function")m||sh(a);else if(m){var g=null;if(i&&i.hasAttribute("formAction")){if(r=i,m=i[Et]||null)g=m.formAction;else if(_d(r)!==null)continue}else g=m.action;typeof g=="function"?a[s+1]=g:(a.splice(s,3),s-=3),sh(a)}}}function lh(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(m){return r=m})},focusReset:"manual",scroll:"manual"})}function t(){r!==null&&(r(),r=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,r=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),r!==null&&(r(),r=null)}}}function zd(e){this._internalRoot=e}ki.prototype.render=zd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var a=t.current,s=Pn();qx(a,s,e,t,null,null)},ki.prototype.unmount=zd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;qx(e.current,2,null,e,null,null),gi(),t[Mn]=null}};function ki(e){this._internalRoot=e}ki.prototype.unstable_scheduleHydration=function(e){if(e){var t=zt();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Cs.length&&t!==0&&t<Cs[a].priority;a++);Cs.splice(a,0,e),a===0&&nh(e)}};var rh=o.version;if(rh!=="19.3.0")throw Error(c(527,rh,"19.3.0"));Re.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=L(t),e=e!==null?y(e):null,e=e===null?null:e.stateNode,e};var e2={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:Q,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ui=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ui.isDisabled&&Ui.supportsFiber)try{pa=Ui.inject(e2),kt=Ui}catch{}}return so.createRoot=function(e,t){if(!d(e))throw Error(c(299));var a=!1,s="",r=VA,i=YA,m=qA;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onUncaughtError!==void 0&&(r=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(m=t.onRecoverableError)),t=Vx(e,1,!1,null,null,a,s,null,r,i,m,lh),e[Mn]=t.current,Rd(e),new zd(t)},so.hydrateRoot=function(e,t,a){if(!d(e))throw Error(c(299));var s=!1,r="",i=VA,m=YA,g=qA,E=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(r=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(m=a.onCaughtError),a.onRecoverableError!==void 0&&(g=a.onRecoverableError),a.formState!==void 0&&(E=a.formState)),t=Vx(e,1,!0,t,a??null,s,r,E,i,m,g,lh),t.context=Yx(null),a=t.current,s=Pn(),s=Fe(s),r=bs(s),r.callback=null,ps(a,r,s),a=s,t.current.lanes=a,le(t,a),wa(t),e[Mn]=t.current,Rd(e),new ki(t)},so.version="19.3.0",so}var hh;function d2(){if(hh)return Xd.exports;hh=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(o){console.error(o)}}return l(),Xd.exports=u2(),Xd.exports}var m2=d2();const de=l=>Math.round(Number(l)||0).toLocaleString("en-IN"),Hn="gobra",uc="GOBRA BRANCH-0014",es="gobra_",Rb=["cash_sheet_denom_"],Sb=new Set(["kallyan_rule_version_v2","app_master_date"]),wm=new Set(["gobra_auth_users","gobra_auth_branches","gobra_auth_session","gobra_force_reload_done","gobra_floating_pos_cashbook","gobra_floating_pos_report"]);let yb=Hn,bh=!1;const Ds=()=>yb||Hn,ir=()=>Ds()===Hn;function cr(l){yb=String(l||"").trim()||Hn}const Qd=l=>{if(typeof l!="string"||!(l.startsWith(es)||Sb.has(l)||Rb.some(c=>l.startsWith(c)))||l.startsWith(es)&&wm.has(l)||Ds()===Hn)return l;const u=l.startsWith(es)?l.slice(es.length):l;return`${es}${Ds()}__${u}`};function A2(l){try{const o=l.getItem("gobra_auth_branches"),u=o?JSON.parse(o):[];return Array.isArray(u)?u.map(c=>String((c==null?void 0:c.id)||"")).filter(Boolean):[]}catch{return[]}}function f2(l,o){if(!o.startsWith(es))return!1;const u=o.slice(es.length),c=u.indexOf("__");if(c<=0)return!1;const d=u.slice(0,c);return d===Ds()?!1:A2(l).includes(d)}function x2(l,o){if(f2(l,o))return!1;if(wm.has(o))return!0;const u=Ds();return u===Hn?!0:Sb.has(o)||Rb.some(c=>o.startsWith(c))?!1:o.startsWith(es)?o.slice(es.length).startsWith(`${u}__`):!0}function $d(l){const o=[];for(let u=0;u<l.length;u++){const c=l.key(u);c&&x2(l,c)&&o.push(c)}return o}function ph(l){if(l&&cr(l),!bh)try{const o=window.localStorage;if(!o)return;const u=new Proxy(o,{get(c,d){switch(d){case"getItem":return A=>c.getItem(Qd(A));case"setItem":return(A,f)=>c.setItem(Qd(A),String(f));case"removeItem":return A=>c.removeItem(Qd(A));case"key":{const A=$d(c);return f=>A[f]??null}case"length":return $d(c).length;case"clear":return()=>{$d(c).filter(A=>!wm.has(A)).forEach(A=>c.removeItem(A))};case"__branchScoped":return!0;default:{const A=c[d];return typeof A=="function"?A.bind(c):A}}},has(c,d){return d in c},set(c,d,A){return c[d]=A,!0}});Object.defineProperty(window,"localStorage",{value:u,configurable:!0,writable:!0});try{Object.defineProperty(globalThis,"localStorage",{value:u,configurable:!0,writable:!0})}catch{}bh=!0}catch(o){console.error("[branch] শাখা-স্কোপ বসানো যায়নি",o)}}function h2(l){cr(l);try{window.location.reload()}catch{}}const dm=["jagoron","agrossor","buniyed","sufolon","mfce","shopan krishi","shopan manufacture","shopan service","shopan value chain"],gh=["sakib","mintu","alamgir","monir"],Wi=(l,o)=>{const u=o.indexOf(String(l||"").trim().toLowerCase());return u===-1?Number.MAX_SAFE_INTEGER:u},Nb=(l,o)=>{const u=Wi(l,dm)-Wi(o,dm);return u!==0?u:String(l).localeCompare(String(o))},b2=(l,o)=>{let u=[];try{u=ss().map(f=>String(f.name||"").trim().toLowerCase())}catch{}const c=u.indexOf(String(l||"").trim().toLowerCase()),d=u.indexOf(String(o||"").trim().toLowerCase());if(c!==-1||d!==-1){const f=c===-1?Number.MAX_SAFE_INTEGER:c,h=d===-1?Number.MAX_SAFE_INTEGER:d;return f!==h?f-h:String(l).localeCompare(String(o))}const A=Wi(l,gh)-Wi(o,gh);return A!==0?A:String(l).localeCompare(String(o))},Rh="staff_sort_mode",Em=(l,o,u)=>u==="name-asc"?String(l).localeCompare(String(o)):u==="name-desc"?String(o).localeCompare(String(l)):b2(l,o),p2=(l,o,u)=>{const c=new Set(l.map(A=>A.trim().toLowerCase())),d=o.filter(A=>A&&!c.has(A.trim().toLowerCase())).sort(u);return[...l,...d]},an={percent:1,fixed:15,categoryOverrides:{jagoron:{percent:1,fixed:15},agrossor:{percent:1,fixed:15},buniyed:{percent:.5,fixed:15},sufolon:{percent:1,fixed:15},mfce:{percent:1,fixed:15}}},Sh={receive:["bank withdraw","fund receive","monir","sakib","mintu","alamgir","others income"],payment:["jagoron","agrossor","buniyed","sufolon","mfce","bank deposit","bank withdraw","others expense","fund payment","savings return"],disburse:["jagoron","agrossor","buniyed","sufolon","mfce"],expense:["bank deposit","bank withdraw","others expense","fund payment","savings return"],rebate:["monir","sakib","mintu","alamgir","customer rebate","others"]},g2=["sakib","mintu","alamgir","monir"];function yh(){if(ir())return Sh;const l={};for(const[o,u]of Object.entries(Sh))l[o]=u.filter(c=>!g2.includes(c.toLowerCase()));return l}const Nh=["1 year","1.5 year","2 year"],R2={"1 year":12,"1.5 year":18,"2 year":24},ro=[{id:1,subCategory:"1 year",installments:12,mode:"all",categories:[]},{id:2,subCategory:"1.5 year",installments:18,mode:"all_except",categories:["buniyed","sufolon"]},{id:3,subCategory:"2 year",installments:24,mode:"only",categories:["agrossor"]}],vb=(l,o,u)=>{const c=l.trim().toLowerCase(),d=o.trim().toLowerCase(),A=u.find(h=>h.subCategory.trim().toLowerCase()===c);if(!A)return!0;const f=(A.categories||[]).map(h=>h.trim().toLowerCase());return A.mode==="all"?!0:A.mode==="all_except"?!f.includes(d):A.mode==="only"?f.includes(d):!0},S2=l=>(l||[]).map(u=>String(u??"").trim().toLowerCase()).filter(Boolean).filter((u,c,d)=>d.indexOf(u)===c).sort(Nb),ec=(l,o,u)=>{const c=l.trim().toLowerCase(),d=Array.from(new Set(o.map(f=>f.subCategory)));if(c.includes("fund payment")||c.includes("fund receive")){const f=S2(u);return f.length>0?f:p2(dm,d,Nb)}return d.filter(f=>vb(f,l,o))},y2=(l,o,u)=>{const c=l.trim().toLowerCase(),d=u?u.trim().toLowerCase():"";if(o&&o.length>0){if(d){const f=o.find(h=>h.subCategory.trim().toLowerCase()!==c?!1:vb(h.subCategory,d,o));if(f&&f.installments)return f.installments}const A=o.find(f=>f.subCategory.trim().toLowerCase()===c);if(A&&A.installments)return A.installments}return R2[c]||12},vh=(l,o,u,c)=>{const d=o.trim().toLowerCase(),A=u.trim().toLowerCase(),f=c.find(h=>h.category===d&&h.subCategory===A);return!f||!l?0:Math.round(l*Number(f.ratePer100))/100},Lb=(l,o=an)=>{if(l&&(o!=null&&o.categoryOverrides)){const u=l.trim().toLowerCase();if(o.categoryOverrides[u])return o.categoryOverrides[u]}return{percent:typeof(o==null?void 0:o.percent)=="number"?o.percent:an.percent,fixed:typeof(o==null?void 0:o.fixed)=="number"?o.fixed:an.fixed}},ur=(l,o,u=an)=>{if(!l||l<=0)return 0;const c=Lb(o,u);return Math.round(l*c.percent/100)+c.fixed},mt=l=>(l??"").split(" ").filter(Boolean).map(o=>o[0].toUpperCase()+o.slice(1).toLowerCase()).join(" ");[...Array.from({length:46},(l,o)=>{const u=o+1,c=u<=2?"0.00":(u*2.65).toFixed(2);return{id:100+u,product:"Jagoron",duration:"Week",kisti:u,helper:`Jagoron|Week|${u}`,rate:c}}),...Array.from({length:12},(l,o)=>{const u=o+1,c=(u*10.2).toFixed(2);return{id:200+u,product:"Jagoron",duration:"Month",kisti:u,helper:`Jagoron|Month|${u}`,rate:c}}),...Array.from({length:18},(l,o)=>{const u=o+1,c=(u*10.7).toFixed(2);return{id:300+u,product:"Jagoron",duration:"1.5 Year",kisti:u,helper:`Jagoron|1.5 Year|${u}`,rate:c}}),...Array.from({length:24},(l,o)=>{const u=o+1,c=(u*11.2).toFixed(2);return{id:350+u,product:"Jagoron",duration:"2 Year",kisti:u,helper:`Jagoron|2 Year|${u}`,rate:c}}),...Array.from({length:46},(l,o)=>{const u=o+1,c=u<=2?"0.00":(u*2.66).toFixed(2);return{id:400+u,product:"Agrossor",duration:"Week",kisti:u,helper:`Agrossor|Week|${u}`,rate:c}}),...Array.from({length:12},(l,o)=>{const u=o+1,c=(u*10.5).toFixed(2);return{id:450+u,product:"Agrossor",duration:"Month",kisti:u,helper:`Agrossor|Month|${u}`,rate:c}}),...Array.from({length:18},(l,o)=>{const u=o+1,c=(u*11).toFixed(2);return{id:470+u,product:"Agrossor",duration:"1.5 Year",kisti:u,helper:`Agrossor|1.5 Year|${u}`,rate:c}}),...Array.from({length:24},(l,o)=>{const u=o+1,c=(u*11.5).toFixed(2);return{id:490+u,product:"Agrossor",duration:"2 Year",kisti:u,helper:`Agrossor|2 Year|${u}`,rate:c}}),...Array.from({length:46},(l,o)=>{const u=o+1,c=u<=2?"0.00":(u*2.05).toFixed(2);return{id:600+u,product:"Buniyed",duration:"Week",kisti:u,helper:`Buniyed|Week|${u}`,rate:c}}),...Array.from({length:12},(l,o)=>{const u=o+1,c=(u*8).toFixed(2);return{id:650+u,product:"Buniyed",duration:"Month",kisti:u,helper:`Buniyed|Month|${u}`,rate:c}}),...Array.from({length:18},(l,o)=>{const u=o+1,c=(u*8.5).toFixed(2);return{id:670+u,product:"Buniyed",duration:"1.5 Year",kisti:u,helper:`Buniyed|1.5 Year|${u}`,rate:c}}),...Array.from({length:46},(l,o)=>{const u=o+1,c=u<=2?"0.00":(u*2.2).toFixed(2);return{id:700+u,product:"Sufolon",duration:"Week",kisti:u,helper:`Sufolon|Week|${u}`,rate:c}}),...Array.from({length:12},(l,o)=>{const u=o+1,c=(u*8.5).toFixed(2);return{id:750+u,product:"Sufolon",duration:"Month",kisti:u,helper:`Sufolon|Month|${u}`,rate:c}}),...Array.from({length:18},(l,o)=>{const u=o+1,c=(u*9).toFixed(2);return{id:770+u,product:"Sufolon",duration:"1.5 Year",kisti:u,helper:`Sufolon|1.5 Year|${u}`,rate:c}}),...Array.from({length:46},(l,o)=>{const u=o+1,c=u<=2?"0.00":(u*2.5).toFixed(2);return{id:800+u,product:"MFCE",duration:"Week",kisti:u,helper:`MFCE|Week|${u}`,rate:c}}),...Array.from({length:12},(l,o)=>{const u=o+1,c=(u*9.8).toFixed(2);return{id:850+u,product:"MFCE",duration:"Month",kisti:u,helper:`MFCE|Month|${u}`,rate:c}}),...Array.from({length:18},(l,o)=>{const u=o+1,c=(u*10.2).toFixed(2);return{id:870+u,product:"MFCE",duration:"1.5 Year",kisti:u,helper:`MFCE|1.5 Year|${u}`,rate:c}}),...Array.from({length:24},(l,o)=>{const u=o+1,c=(u*10.8).toFixed(2);return{id:890+u,product:"MFCE",duration:"2 Year",kisti:u,helper:`MFCE|2 Year|${u}`,rate:c}})];const N2="/.netlify/functions/neon-api",Cm="gobra_server_token",Mm="gobra_server_user";function tc(){try{return localStorage.getItem(Cm)||""}catch{return""}}function dl(){try{const l=localStorage.getItem(Mm);return l?JSON.parse(l):null}catch{return null}}function dc(l,o){try{localStorage.setItem(Cm,l),localStorage.setItem(Mm,JSON.stringify(o))}catch{}}function Ob(){try{localStorage.removeItem(Cm),localStorage.removeItem(Mm)}catch{}}const jb="gobra_admin_gate_token";function mm(){try{return sessionStorage.getItem(jb)||""}catch{return""}}function v2(l){try{sessionStorage.setItem(jb,l)}catch{}}const dr=()=>mm();async function aa(l,o={},u=""){const c=await fetch(N2,{method:"POST",headers:{"content-type":"application/json",...u||tc()?{authorization:`Bearer ${u||tc()}`}:{}},body:JSON.stringify({action:l,...o})});if(c.status===404||c.status===405)return{ok:!1,error:"server error"};let d=null;try{d=await c.json()}catch{if(c.status===404||c.status===405)return{ok:!1,error:"server error"};d={ok:!1,error:`HTTP ${c.status}`}}return d&&d.error==="usage_exceeded"&&(d.error="⚠️ পুরনো/আর্কাইভ ঠিকানায় আছেন — সে সার্ভার বন্ধ। ➡️ নতুন লিংক খুলুন: cash-gobra-bkf.netlify.app"),d}async function L2(l,o){const u=await aa("login",{mobile:l,password:o});return u.ok&&u.token&&dc(u.token,u.user),u}async function O2(l){const o=await aa("register",{name:l.name,mobile:l.mobile,password:l.password,branchId:l.branchId});return o!=null&&o.ok&&o.token&&o.user&&dc(o.token,o.user),o}async function j2(l){const o=await aa("google",{credential:l});return o.ok&&o.token&&dc(o.token,o.user),o}async function I2(){const l=await aa("meet");return l.ok&&l.user&&dc(tc(),l.user),l.error==="unauthorized"&&Ob(),l}async function Di(){const l=await aa("pending-list",{},dr());return{ok:!!l.ok,pending:Array.isArray(l.pending)?l.pending:[]}}async function B2(l,o="gobra"){return aa("approve",{userId:l,branchId:o},dr())}async function H2(l){return aa("reject",{userId:l},dr())}async function w2(){const l=await aa("branch-list",{},dr());return{ok:!!l.ok,branches:Array.isArray(l.branches)?l.branches:[]}}async function E2(){const l=await aa("user-list",{},dr());return{ok:!!l.ok,users:Array.isArray(l.users)?l.users:[]}}async function C2(l){return aa("user-delete",{userId:l},dr())}async function M2(l){const o=await aa("gate",{password:l});return o.ok&&o.gateToken&&v2(o.gateToken),{ok:!!o.ok,error:o.error,pendingCount:o.pendingCount}}async function k2(l,o){return aa("gate-pass-change",{oldPass:l,newPass:o})}let Wd=null;function U2(){return Wd||(Wd=new Promise((l,o)=>{if(document.querySelector('script[src*="gsi/client"]'))return l();const c=document.createElement("script");c.src="https://accounts.google.com/gsi/client",c.async=!0,c.defer=!0,c.onload=()=>l(),c.onerror=()=>o(new Error("Google script লোড হয়নি")),document.head.appendChild(c)})),Wd}function D2(l,o){if(typeof l=="string")return{text:l,params:o[0]||[]};const u=l,c=o;let d="";const A=[];for(let f=0;f<u.length;f++)if(d+=u[f],f<c.length){const h=c[f];h&&h.__neonRaw?d+=h.__neonRaw:(A.push(h),d+=`$${A.length}`)}return{text:d,params:A}}const Am="__no_server__";let fm=!1;function Lh(){return fm}async function Ib(l,o){const u=tc();if(!u)throw new Error("সার্ভার-লগইন নেই — আগে সাইন ইন করুন");if(fm)throw new Error(Am);const c=await fetch("/.netlify/functions/neon-api",{method:"POST",headers:{"content-type":"application/json",authorization:`Bearer ${u}`},body:JSON.stringify({action:"sql",queries:l,transaction:o})});if(c.status===404||c.status===405)throw fm=!0,new Error(Am);let d=null;try{d=await c.json()}catch{d={ok:!1,error:`HTTP ${c.status}`}}if(!(d!=null&&d.ok))throw new Error((d==null?void 0:d.error)||`HTTP ${c.status}`);return d.results}class Oh{constructor(o){this.__q=o}then(o,u){return Ib([this.__q],!1).then(c=>c[0]).then(o,u)}catch(o){return this.then(void 0,o)}finally(o){return this.then().finally(o||void 0)}}function T2(){const l=(o,...u)=>new Oh(D2(o,u));return l.query=(o,u=[])=>new Oh({text:o,params:u}),l.unsafe=o=>({__neonRaw:o}),l.transaction=o=>{const u=o.map(c=>(c==null?void 0:c.__q)||(typeof c=="string"?{text:c,params:[]}:null)).filter(Boolean);return u.length?Ib(u,!0):Promise.resolve([])},l}const _e=T2(),fl=()=>{const l=String(Ds()||Hn).trim();return!l||l===Hn?"public":"br_"+l.toLowerCase().replace(/[^a-z0-9_]/g,"_").slice(0,48)},km=l=>`"${fl()}"."${l}"`,We=l=>_e.unsafe(km(l)),Bb="gobra_neon_sync_state";function rr(){try{const l=localStorage.getItem(Bb);if(l)return JSON.parse(l)}catch{}return{connected:!0,isSyncing:!1,lastSyncTime:null,lastError:null,pendingCount:0}}function sr(l){const u={...rr(),...l};try{localStorage.setItem(Bb,JSON.stringify(u)),window.dispatchEvent(new CustomEvent("neon-sync-status-changed",{detail:u}))}catch{}}async function G2(){return(await _e`
    SELECT id, type, category, sub_category, amount, service_charge, description, denomination, other_amount, tx_date
    FROM ${We("transactions")}
    ORDER BY id DESC
  `).map(o=>({id:Number(o.id),type:o.type,category:o.category,subCategory:o.sub_category||"",amount:String(o.amount??"0"),serviceCharge:o.service_charge!=null?String(o.service_charge):void 0,description:o.description||"",denomination:o.denomination||void 0,otherAmount:o.other_amount!=null?String(o.other_amount):void 0,txDate:o.tx_date}))}async function Hb(l){await _e`
    INSERT INTO ${We("transactions")} (id, type, category, sub_category, amount, service_charge, description, denomination, other_amount, tx_date)
    VALUES (
      ${l.id},
      ${l.type},
      ${l.category},
      ${l.subCategory||""},
      ${Number(l.amount)||0},
      ${Number(l.serviceCharge)||0},
      ${l.description||""},
      ${l.denomination?JSON.stringify(l.denomination):null},
      ${l.otherAmount?Number(l.otherAmount):0},
      ${l.txDate}
    )
    ON CONFLICT (id) DO UPDATE SET
      type = EXCLUDED.type,
      category = EXCLUDED.category,
      sub_category = EXCLUDED.sub_category,
      amount = EXCLUDED.amount,
      service_charge = EXCLUDED.service_charge,
      description = EXCLUDED.description,
      denomination = EXCLUDED.denomination,
      other_amount = EXCLUDED.other_amount,
      tx_date = EXCLUDED.tx_date;
  `}async function wb(l){const o=Number(l);!o||isNaN(o)||await _e`DELETE FROM ${We("transactions")} WHERE id = ${o}`}async function K2(){return(await _e`
    SELECT id, staff_name, report_date, loan, rebate, savings, dps, passbook, admission, savings_adjust, nogod_return, created_at
    FROM ${We("staff_reports")}
    ORDER BY id DESC
  `).map(o=>({id:Number(o.id),reportDate:o.report_date,staffName:o.staff_name,loan:String(o.loan??"0"),rebate:String(o.rebate??"0"),savings:String(o.savings??"0"),dps:String(o.dps??"0"),admission:String(o.admission??"0"),passbook:String(o.passbook??"0"),savingsAdjust:String(o.savings_adjust??"0"),nogodReturn:String(o.nogod_return??"0"),createdAt:o.created_at?new Date(o.created_at).toISOString():void 0}))}async function Eb(l){await _e`
    INSERT INTO ${We("staff_reports")} (id, staff_name, report_date, loan, rebate, savings, dps, passbook, admission, savings_adjust, nogod_return)
    VALUES (
      ${l.id},
      ${l.staffName},
      ${l.reportDate},
      ${Number(l.loan)||0},
      ${Number(l.rebate)||0},
      ${Number(l.savings)||0},
      ${Number(l.dps)||0},
      ${Number(l.passbook)||0},
      ${Number(l.admission)||0},
      ${Number(l.savingsAdjust)||0},
      ${Number(l.nogodReturn)||0}
    )
    ON CONFLICT (id) DO UPDATE SET
      staff_name = EXCLUDED.staff_name,
      report_date = EXCLUDED.report_date,
      loan = EXCLUDED.loan,
      rebate = EXCLUDED.rebate,
      savings = EXCLUDED.savings,
      dps = EXCLUDED.dps,
      passbook = EXCLUDED.passbook,
      admission = EXCLUDED.admission,
      savings_adjust = EXCLUDED.savings_adjust,
      nogod_return = EXCLUDED.nogod_return;
  `}async function Um(l){const o=Number(l);!o||isNaN(o)||await _e`DELETE FROM ${We("staff_reports")} WHERE id = ${o}`}async function P2(){return(await _e`SELECT id, type, name, sort_order FROM ${We("categories")} ORDER BY sort_order ASC NULLS LAST, id ASC`).map(o=>({id:Number(o.id),type:o.type,name:o.name,...o.sort_order!=null?{sortOrder:Number(o.sort_order)}:{}}))}async function _2(l){await _e`
    INSERT INTO ${We("categories")} AS c (id, type, name, sort_order)
    VALUES (${l.id}, ${l.type}, ${l.name}, ${l.sortOrder??null})
    ON CONFLICT (id) DO UPDATE SET
      type = EXCLUDED.type,
      name = EXCLUDED.name,
      sort_order = COALESCE(EXCLUDED.sort_order, c.sort_order);
  `}async function Z2(l,o){if(!o.length)return;const u=o.map((c,d)=>_e`UPDATE ${We("categories")} SET sort_order = ${d+1} WHERE id = ${c} AND type = ${l}`);await _e.transaction(u)}async function z2(l){await _e`DELETE FROM ${We("categories")} WHERE id = ${l}`}async function F2(){return(await _e`SELECT id, category, sub_category, rate_per_100 FROM ${We("sc_rates")} ORDER BY id ASC`).map(o=>({id:Number(o.id),category:o.category,subCategory:o.sub_category,ratePer100:String(o.rate_per_100)}))}async function J2(l){await _e`
    INSERT INTO ${We("sc_rates")} (id, category, sub_category, rate_per_100)
    VALUES (${l.id}, ${l.category}, ${l.subCategory}, ${l.ratePer100})
    ON CONFLICT (id) DO UPDATE SET
      category = EXCLUDED.category,
      sub_category = EXCLUDED.sub_category,
      rate_per_100 = EXCLUDED.rate_per_100;
  `}async function X2(l){await _e`DELETE FROM ${We("sc_rates")} WHERE id = ${l}`}async function V2(){return(await _e`SELECT id, sub_category, installments, mode, categories FROM ${We("subcat_rules")} ORDER BY id ASC`).map(o=>({id:Number(o.id),subCategory:o.sub_category,installments:Number(o.installments)||45,mode:o.mode||"all",categories:Array.isArray(o.categories)?o.categories:[]}))}async function Y2(l){const o=l.id||Date.now();await _e`
    INSERT INTO ${We("subcat_rules")} (id, sub_category, installments, mode, categories)
    VALUES (${o}, ${l.subCategory}, ${l.installments}, ${l.mode}, ${JSON.stringify(l.categories||[])})
    ON CONFLICT (id) DO UPDATE SET
      sub_category = EXCLUDED.sub_category,
      installments = EXCLUDED.installments,
      mode = EXCLUDED.mode,
      categories = EXCLUDED.categories;
  `}async function q2(l){await _e`DELETE FROM ${We("subcat_rules")} WHERE id = ${l}`}async function Q2(){const l=await _e`SELECT rule_data FROM ${We("kallyan_rule")} WHERE id = 'default' LIMIT 1`;return l.length>0&&l[0].rule_data?l[0].rule_data:null}async function $2(l){await _e`
    INSERT INTO ${We("kallyan_rule")} (id, rule_data, updated_at)
    VALUES ('default', ${JSON.stringify(l)}, NOW())
    ON CONFLICT (id) DO UPDATE SET
      rule_data = EXCLUDED.rule_data,
      updated_at = NOW();
  `}async function W2(){return(await _e`
    SELECT id, product, duration, kisti, rate
    FROM ${We("rebate_rates")}
    ORDER BY product ASC, duration ASC, kisti ASC
  `).map(o=>({id:Number(o.id),product:o.product,duration:o.duration,kisti:Number(o.kisti),helper:`${o.product}|${o.duration}|${o.kisti}`,rate:String(o.rate??"0")}))}async function Dm(){try{await _e`
      CREATE TABLE IF NOT EXISTS ${We("day_closures")} (
        id SERIAL PRIMARY KEY,
        close_date VARCHAR(20) UNIQUE NOT NULL,
        opening_cash NUMERIC DEFAULT 0,
        opening_bank NUMERIC DEFAULT 0,
        closing_cash NUMERIC DEFAULT 0,
        closing_bank NUMERIC DEFAULT 0,
        total_receive NUMERIC DEFAULT 0,
        total_payment NUMERIC DEFAULT 0,
        denomination JSONB,
        status VARCHAR(20) DEFAULT 'closed',
        closed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        closed_by VARCHAR(100),
        notes TEXT
      );
    `}catch(l){console.warn("ensureDayClosuresTable warning:",l)}}async function eR(){try{return await Dm(),(await _e`
      SELECT id, close_date, opening_cash, opening_bank, closing_cash, closing_bank,
             total_receive, total_payment, denomination, status, closed_at, closed_by, notes
      FROM ${We("day_closures")}
      ORDER BY close_date DESC
    `).map(o=>({id:Number(o.id),closeDate:o.close_date,openingCash:Number(o.opening_cash)||0,openingBank:Number(o.opening_bank)||0,closingCash:Number(o.closing_cash)||0,closingBank:Number(o.closing_bank)||0,totalReceive:Number(o.total_receive)||0,totalPayment:Number(o.total_payment)||0,denomination:o.denomination||null,status:"closed",closedAt:o.closed_at?new Date(o.closed_at).toISOString():new Date().toISOString(),closedBy:o.closed_by||"Cashier",notes:o.notes||""}))}catch(l){return console.warn("fetchDayClosuresFromNeon error:",l),[]}}async function Cb(l){try{await Dm(),await _e`
      INSERT INTO ${We("day_closures")} (close_date, opening_cash, opening_bank, closing_cash, closing_bank, total_receive, total_payment, denomination, status, closed_at, closed_by, notes)
      VALUES (
        ${l.closeDate},
        ${l.openingCash},
        ${l.openingBank},
        ${l.closingCash},
        ${l.closingBank},
        ${l.totalReceive},
        ${l.totalPayment},
        ${l.denomination?JSON.stringify(l.denomination):null}::jsonb,
        'closed',
        ${l.closedAt},
        ${l.closedBy||"Cashier"},
        ${l.notes||""}
      )
      ON CONFLICT (close_date)
      DO UPDATE SET
        opening_cash = EXCLUDED.opening_cash,
        opening_bank = EXCLUDED.opening_bank,
        closing_cash = EXCLUDED.closing_cash,
        closing_bank = EXCLUDED.closing_bank,
        total_receive = EXCLUDED.total_receive,
        total_payment = EXCLUDED.total_payment,
        denomination = EXCLUDED.denomination,
        status = 'closed',
        closed_at = EXCLUDED.closed_at,
        closed_by = EXCLUDED.closed_by,
        notes = EXCLUDED.notes
    `}catch(o){console.warn("upsertDayClosureInNeon error:",o)}}async function tR(l){try{await Dm(),await _e`DELETE FROM ${We("day_closures")} WHERE close_date = ${l}`}catch(o){console.warn("deleteDayClosureInNeon error:",o)}}async function nR(){try{await _e`
      CREATE TABLE IF NOT EXISTS ${We("app_settings")} (
        key TEXT PRIMARY KEY,
        value TEXT NOT NULL,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
      );
    `}catch(l){console.warn("ensureAppSettingsTable failed:",l)}}async function Mb(){try{await _e`
      CREATE TABLE IF NOT EXISTS ${We("day_opens")} (
        id SERIAL PRIMARY KEY,
        open_date VARCHAR(20) UNIQUE NOT NULL,
        prev_close_date VARCHAR(20),
        opening_cash NUMERIC DEFAULT 0,
        opening_bank NUMERIC DEFAULT 0,
        opened_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        opened_by VARCHAR(100) DEFAULT 'Cashier'
      );
    `}catch(l){console.warn("ensureDayOpensTable warning:",l)}}async function aR(){try{return await Mb(),(await _e`
      SELECT id, open_date, prev_close_date, opening_cash, opening_bank, opened_at, opened_by
      FROM ${We("day_opens")}
      ORDER BY open_date DESC
    `).map(o=>({id:Number(o.id),openDate:o.open_date,prevCloseDate:o.prev_close_date||null,openingCash:Number(o.opening_cash)||0,openingBank:Number(o.opening_bank)||0,openedAt:o.opened_at?new Date(o.opened_at).toISOString():new Date().toISOString(),openedBy:o.opened_by||"Cashier"}))}catch(l){return console.warn("fetchDayOpensFromNeon error:",l),[]}}async function kb(l){try{await Mb(),await _e`
      INSERT INTO ${We("day_opens")} (open_date, prev_close_date, opening_cash, opening_bank, opened_at, opened_by)
      VALUES (
        ${l.openDate},
        ${l.prevCloseDate||null},
        ${l.openingCash},
        ${l.openingBank},
        ${l.openedAt},
        ${l.openedBy||"Cashier"}
      )
      ON CONFLICT (open_date)
      DO UPDATE SET
        prev_close_date = EXCLUDED.prev_close_date,
        opening_cash = EXCLUDED.opening_cash,
        opening_bank = EXCLUDED.opening_bank,
        opened_at = EXCLUDED.opened_at,
        opened_by = EXCLUDED.opened_by;
    `}catch(o){console.warn("upsertDayOpenInNeon error:",o)}}async function Vi(l){try{const o=await _e`
      SELECT value FROM ${We("app_settings")} WHERE key = ${l} LIMIT 1
    `;if(o.length>0&&o[0].value)return String(o[0].value)}catch(o){console.warn(`fetchAppSettingFromNeon(${l}) error:`,o)}return null}async function Tm(l,o){try{await nR(),await _e`
      INSERT INTO ${We("app_settings")} (key, value, updated_at)
      VALUES (${l}, ${o}, NOW())
      ON CONFLICT (key) DO UPDATE SET
        value = EXCLUDED.value,
        updated_at = NOW();
    `}catch(u){console.warn(`upsertAppSettingInNeon(${l}) error:`,u)}}const sR=["transactions","staff_reports","categories","sc_rates","subcat_rules","kallyan_rule","rebate_rates","day_closures","day_opens","app_settings","site_content"],jh="gobra_neon_schema_ready_v6",lR=l=>[`CREATE TABLE IF NOT EXISTS "${l}".check_entries (
    id BIGINT PRIMARY KEY,
    check_date VARCHAR(20) NOT NULL,
    member_code TEXT,
    member_name TEXT,
    centre_code TEXT,
    centre_name TEXT,
    bank_name TEXT,
    check_no TEXT,
    disbursse TEXT,
    project TEXT,
    micr BOOLEAN DEFAULT FALSE,
    found_in_db BOOLEAN DEFAULT FALSE,
    returned BOOLEAN DEFAULT FALSE,
    extra_banks TEXT,
    reissued_to TEXT,
    reissued_from TEXT,
    account_no TEXT,
    account_type TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
  )`,`ALTER TABLE "${l}".check_entries ADD COLUMN IF NOT EXISTS returned BOOLEAN DEFAULT FALSE`,`ALTER TABLE "${l}".check_entries ADD COLUMN IF NOT EXISTS extra_banks TEXT`,`ALTER TABLE "${l}".check_entries ADD COLUMN IF NOT EXISTS reissued_to TEXT`,`ALTER TABLE "${l}".check_entries ADD COLUMN IF NOT EXISTS reissued_from TEXT`,`ALTER TABLE "${l}".check_entries ADD COLUMN IF NOT EXISTS account_no TEXT`,`ALTER TABLE "${l}".check_entries ADD COLUMN IF NOT EXISTS account_type TEXT`,`CREATE INDEX IF NOT EXISTS check_entries_date_idx ON "${l}".check_entries (check_date)`,`CREATE INDEX IF NOT EXISTS check_entries_member_idx ON "${l}".check_entries (member_code)`],rR=l=>[`ALTER TABLE "${l}".categories ADD COLUMN IF NOT EXISTS sort_order INTEGER`],oR=l=>[`CREATE TABLE IF NOT EXISTS "${l}".members (
    member_code TEXT PRIMARY KEY,
    member_name TEXT,
    centre_code TEXT,
    centre_name TEXT,
    bank_name TEXT,
    check_no TEXT,
    source TEXT DEFAULT 'db',
    updated_at TIMESTAMPTZ DEFAULT NOW()
  )`,`CREATE INDEX IF NOT EXISTS members_centre_idx ON "${l}".members (centre_code)`];let Ti=null;async function ba(l=!1){const o=fl();try{if(!l&&localStorage.getItem(jh)===o)return}catch{}return Ti||(Ti=(async()=>{const u=[];if(o!=="public"){u.push(`CREATE SCHEMA IF NOT EXISTS "${o}"`);for(const c of sR)u.push(`CREATE TABLE IF NOT EXISTS "${o}"."${c}" (LIKE "public"."${c}" INCLUDING ALL)`);for(const c of["sc_rates","subcat_rules","kallyan_rule","rebate_rates","site_content"])u.push(`INSERT INTO "${o}"."${c}" SELECT * FROM "public"."${c}" WHERE NOT EXISTS (SELECT 1 FROM "${o}"."${c}")`);u.push(`INSERT INTO "${o}"."categories" SELECT * FROM "public"."categories" c
           WHERE NOT EXISTS (SELECT 1 FROM "${o}"."categories")
             AND (c.type <> 'receive' OR lower(c.name) NOT IN (SELECT lower(staff_name) FROM "public"."staff_reports"))`),u.push(`INSERT INTO "${o}"."app_settings" SELECT * FROM "public"."app_settings"
           WHERE key NOT IN ('entertainment_entries', 'entertainment_deleted_ids')
             AND NOT EXISTS (SELECT 1 FROM "${o}"."app_settings")`)}u.push(...lR(o),...oR(o),...rR(o)),await _e.transaction(u.map(c=>_e.query(c)));try{localStorage.setItem(jh,o)}catch{}})().finally(()=>{Ti=null})),Ti}const iR=l=>{if(l)try{const o=JSON.parse(String(l));if(!Array.isArray(o))return;const u=o.map(c=>({bankName:String((c==null?void 0:c.bankName)||""),checkNo:String((c==null?void 0:c.checkNo)||""),micr:(c==null?void 0:c.micr)===!0,accountNo:String((c==null?void 0:c.accountNo)||""),accountType:String((c==null?void 0:c.accountType)||""),bankStatement:(c==null?void 0:c.bankStatement)===!0})).filter(c=>c.bankName||c.checkNo);return u.length>0?u:void 0}catch{return}},Ih=l=>{if(l)try{const o=JSON.parse(String(l));if(!o||typeof o!="object"||!Number.isFinite(Number(o==null?void 0:o.id)))return;const u={id:Number(o.id)};return o.date!=null&&(u.date=String(o.date)),o.checkNo!=null&&(u.checkNo=String(o.checkNo)),o.checkDate!=null&&(u.checkDate=String(o.checkDate)),u}catch{return}};async function cR(){try{return await ba(),(await _e`
      SELECT id, check_date, member_code, member_name, centre_code, centre_name,
             bank_name, check_no, disbursse, project, micr, found_in_db, returned, extra_banks,
             reissued_to, reissued_from, account_no, account_type, created_at
      FROM ${We("check_entries")}
      ORDER BY check_date DESC, id DESC
    `).map(o=>({id:Number(o.id),checkDate:o.check_date,memberCode:o.member_code||"",memberName:o.member_name||"",centreCode:o.centre_code||"",centreName:o.centre_name||"",bankName:o.bank_name||"",checkNo:o.check_no||"",disbursse:o.disbursse||"",project:o.project||"",micr:o.micr===!0,foundInDb:o.found_in_db===!0,returned:o.returned===!0,extraBanks:iR(o.extra_banks),reissuedTo:Ih(o.reissued_to),reissuedFrom:Ih(o.reissued_from),accountNo:o.account_no||"",accountType:o.account_type||"",createdAt:o.created_at?new Date(o.created_at).toISOString():void 0}))}catch(l){return console.warn("fetchCheckEntriesFromNeon error:",l),[]}}async function Ub(l){const o=Number(l==null?void 0:l.id);!o||isNaN(o)||(await ba(),await _e`
    INSERT INTO ${We("check_entries")}
      (id, check_date, member_code, member_name, centre_code, centre_name,
       bank_name, check_no, disbursse, project, micr, found_in_db, returned, extra_banks,
       reissued_to, reissued_from, account_no, account_type, created_at, updated_at)
    VALUES (
      ${o}, ${l.checkDate||""}, ${l.memberCode||""}, ${l.memberName||""},
      ${l.centreCode||""}, ${l.centreName||""}, ${l.bankName||""}, ${l.checkNo||""},
      ${l.disbursse||""}, ${l.project||""}, ${l.micr===!0}, ${l.foundInDb===!0}, ${l.returned===!0},
      ${JSON.stringify(l.extraBanks||[])},
      ${l.reissuedTo?JSON.stringify(l.reissuedTo):""}, ${l.reissuedFrom?JSON.stringify(l.reissuedFrom):""},
      ${l.accountNo||""}, ${l.accountType||""},
      ${l.createdAt?new Date(l.createdAt).toISOString():new Date().toISOString()}, NOW()
    )
    ON CONFLICT (id) DO UPDATE SET
      check_date = EXCLUDED.check_date,
      member_code = EXCLUDED.member_code,
      member_name = EXCLUDED.member_name,
      centre_code = EXCLUDED.centre_code,
      centre_name = EXCLUDED.centre_name,
      bank_name = EXCLUDED.bank_name,
      check_no = EXCLUDED.check_no,
      disbursse = EXCLUDED.disbursse,
      project = EXCLUDED.project,
      micr = EXCLUDED.micr,
      found_in_db = EXCLUDED.found_in_db,
      returned = EXCLUDED.returned,
      extra_banks = EXCLUDED.extra_banks,
      reissued_to = EXCLUDED.reissued_to,
      reissued_from = EXCLUDED.reissued_from,
      account_no = EXCLUDED.account_no,
      account_type = EXCLUDED.account_type,
      updated_at = NOW();
  `)}async function uR(l){const o=Number(l);if(!(!o||isNaN(o)))try{await ba(),await _e`DELETE FROM ${We("check_entries")} WHERE id = ${o}`}catch(u){console.warn("deleteCheckEntryFromNeon error:",u)}}async function dR(){try{return await ba(),(await _e`
      SELECT member_code, member_name, centre_code, centre_name, bank_name, check_no, source, updated_at
      FROM ${We("members")}
      ORDER BY member_code ASC
    `).map(o=>({memberCode:String(o.member_code||""),memberName:o.member_name||"",centreCode:o.centre_code||"",centreName:o.centre_name||"",bankName:o.bank_name||void 0,checkNo:o.check_no||void 0,source:o.source==="auto"?"auto":"db",updatedAt:o.updated_at?new Date(o.updated_at).toISOString():void 0}))}catch(l){return console.warn("fetchMembersFromNeon error:",l),[]}}async function mR(){try{await ba();const l=await _e`
      SELECT COUNT(*)::int AS c, COALESCE(MAX(updated_at)::text, '') AS m
      FROM ${We("members")}
    `,o=(l==null?void 0:l[0])||{};return{count:Number(o.c||0),maxUpdated:String(o.m||""),ok:!0}}catch(l){return console.warn("fetchMembersStampFromNeon error:",l),{count:-1,maxUpdated:"",ok:!1}}}async function nc(l,o=400){const u=(Array.isArray(l)?l:[]).filter(d=>d&&String(d.memberCode||"").trim());if(u.length===0)return 0;await ba();let c=0;for(let d=0;d<u.length;d+=o){const A=u.slice(d,d+o),f=[],h=[];A.forEach((x,L)=>{const y=L*7;f.push(`($${y+1},$${y+2},$${y+3},$${y+4},$${y+5},$${y+6},$${y+7})`),h.push(String(x.memberCode).trim(),x.memberName||"",x.centreCode||"",x.centreName||"",x.bankName||"",x.checkNo||"",x.source==="auto"?"auto":"db")}),await _e.query(`INSERT INTO ${km("members")}
         (member_code, member_name, centre_code, centre_name, bank_name, check_no, source)
       VALUES ${f.join(",")}
       ON CONFLICT (member_code) DO UPDATE SET
         member_name = EXCLUDED.member_name,
         centre_code = EXCLUDED.centre_code,
         centre_name = EXCLUDED.centre_name,
         bank_name = EXCLUDED.bank_name,
         check_no = EXCLUDED.check_no,
         source = EXCLUDED.source,
         updated_at = NOW()`,h),c+=A.length}return c}async function AR(l){const o=String(l||"").trim();if(o)try{await ba(),await _e`DELETE FROM ${We("members")} WHERE member_code = ${o}`}catch(u){console.warn("deleteMemberFromNeon error:",u)}}async function fR(){try{await ba(),await _e`DELETE FROM ${We("members")}`}catch(l){console.warn("clearMembersInNeon error:",l)}}async function xR(){var u;const l=fl(),o={};try{await ba();const c=["transactions","staff_reports","categories","day_opens","day_closures","rebate_rates","check_entries","members"];for(const d of c)try{const A=await _e.query(`SELECT count(*)::int AS n FROM ${km(d)}`);o[d]=Number(((u=A==null?void 0:A[0])==null?void 0:u.n)||0)}catch{o[d]=-1}}catch(c){console.warn("fetchNeonStats error:",c)}return{schema:l,rows:o}}const em="2026-10-05-4772",hR=`memberCode,memberName,centreCode,centreName
2963,Sattyajit Podder,1,GOBRA BAZAR
1378,Kanai Biswas,1,GOBRA BAZAR
1062,Tara Pada,1,GOBRA BAZAR
1063,Utpal,1,GOBRA BAZAR
1064,Alamgir,1,GOBRA BAZAR
1066,Basu,1,GOBRA BAZAR
1068,Khagendra nath,3,GOBRA BAZAR
1070,Hossain,1,GOBRA BAZAR
1071,Kerini Sarif,1,GOBRA BAZAR
1072,Uzzal,3,GOBRA BAZAR
1074,Rasel,3,GOBRA BAZAR
1076,Azizur,1,GOBRA BAZAR
1077,Shaidul,3,GOBRA BAZAR
1079,Ashok,3,GOBRA BAZAR
1082,Sanjit Sarkar,3,GOBRA BAZAR
1084,Khasru,1,GOBRA BAZAR
1085,Shohid,1,GOBRA BAZAR
1087,Dabroto Biswas,3,GOBRA BAZAR
1370,Amor Sha,3,GOBRA BAZAR
2491,Delep Sarkar,1,GOBRA BAZAR
2562,Animul,1,GOBRA BAZAR
2608,Nermal,3,GOBRA BAZAR
2628,Haider,3,GOBRA BAZAR
2647,Roub Ali,1,GOBRA BAZAR
2747,Ho,3,GOBRA BAZAR
3008,Najrul Islam,69,GOBRA BAZAR
3096,Samer kumar,1,GOBRA BAZAR
1078,Meshar,69,GOBRA BAZAR
1081,Nasir,69,GOBRA BAZAR
1093,Debrobroto,69,GOBRA BAZAR
1103,Eman,69,GOBRA BAZAR
1109,Meshar,69,GOBRA BAZAR
1111,Sarowar,245,MUSURIA
1112,Chitto Ranjon,69,GOBRA BAZAR
1114,Mutaleb,69,GOBRA BAZAR
1118,Narayon,69,GOBRA BAZAR
1119,Nazrul,69,GOBRA BAZAR
1125,Milon,69,GOBRA BAZAR
1128,Mohadeb,69,GOBRA BAZAR
3114,MD. Shukur aile,69,GOBRA BAZAR
3637,Tusar,1,GOBRA BAZAR
3809,Salim Mollah,1,GOBRA BAZAR
4082,Palash Kormokar,82,GOBRA BAZAR
4582,Md;Tarikul Islam,1,GOBRA BAZAR
4738,Md monirul islam,1,GOBRA BAZAR
4940,Pranta kmur Das,1,GOBRA BAZAR
5033,Md. Tarikul Islam,1,GOBRA BAZAR
5694,Hamimur Rahaman,1,GOBRA BAZAR
5720,Babu Molla,1,GOBRA BAZAR
5741,Manik Saha,1,GOBRA BAZAR
5755,Loknath Biswash,1,GOBRA BAZAR
5758,Hirok Biswash,1,GOBRA BAZAR
5848,Gourango Roy,1,GOBRA BAZAR
5992,DIPAK KUMAR BISWAS,1,GOBRA BAZAR
1962,Kuddus,2,SHOL PUR
1963,Kumaresh,2,SHOL PUR
1964,Shonok,2,SHOL PUR
1968,Tufan,2,SHOL PUR
1972,Joideb,2,SHOL PUR
1973,Uzzal,2,SHOL PUR
1975,Fosiar,2,SHOL PUR
1978,Porimol,2,SHOL PUR
1979,Mohon,2,SHOL PUR
1982,Adham,2,SHOL PUR
1983,Depok,2,SHOL PUR
1986,Susanto,2,SHOL PUR
1987,Krishno,2,SHOL PUR
1988,Sankor,2,SHOL PUR
1990,Keshore,2,SHOL PUR
1993,Monnu Biswas,2,SHOL PUR
1995,Bvuti Malakar,2,SHOL PUR
1996,Nannu Biswas,2,SHOL PUR
1999,Abdus Sattar,2,SHOL PUR
2001,Manik Saha,2,SHOL PUR
2009,Iqbal,2,SHOL PUR
2010,Taher Sardar,2,SHOL PUR
2011,Tohied,2,SHOL PUR
2014,Kamal,2,SHOL PUR
2018,Suranjan,2,SHOL PUR
2421,Nazmul,2,SHOL PUR
2423,Ashis Saha,2,SHOL PUR
2437,Md.Minarul,2,SHOL PUR
2467,Bango,2,SHOL PUR
2595,Imdudul,2,SHOL PUR
2690,Mithu,2,SHOL PUR
2706,Saheb Ali,2,SHOL PUR
2707,Hasib,2,SHOL PUR
2790,Motiul,2,SHOL PUR
2791,Gopal,2,SHOL PUR
2798,Alamgir,2,SHOL PUR
2846,Sanak Kumar Biswas,2,SHOL PUR
2900,Feroz,2,SHOL PUR
2920,Mustafiz,2,SHOL PUR
2932,Onup,2,SHOL PUR
2950,Uttam,2,SHOL PUR
3088,Oliyer,2,SHOL PUR
3089,Md oliear Rahaman,2,SHOL PUR
3182,Suja Shikdar,2,SHOL PUR
3206,Mejanur,2,SHOL PUR
3260,Sujal,2,SHOL PUR
3286,Hafijur,2,SHOL PUR
3511,Pobitro Kumar Biswash,2,SHOL PUR
3663,Md. Kashem,2,SHOL PUR
3689,Md. Jahidul Islam,2,SHOL PUR
3690,Pijus Kumar,2,SHOL PUR
3801,Faruk Molla,2,SHOL PUR
3864,Rony hasan,2,SHOL PUR
3914,Nikhil kumar,2,SHOL PUR
3948,Sumsur Rahman,2,SHOL PUR
3973,Jewel SK,2,SHOL PUR
4043,Sohel Rana,2,SHOL PUR
4051,Toslim Molla,2,SHOL PUR
4100,Foysal Ahammed,2,SHOL PUR
4142,Suza Sikder,2,SHOL PUR
4182,Anis Sk,2,SHOL PUR
4233,Shimul Shaikh,2,SHOL PUR
4262,Habibur Rahaman,2,SHOL PUR
4305,Safayet,2,SHOL PUR
4365,Miraj Sk,2,SHOL PUR
4444,Mridul Biswas,2,SHOL PUR
4460,Md. Imlaq Molla,2,SHOL PUR
4461,Md. Alal Molla,2,SHOL PUR
4488,Sajib Saha,2,SHOL PUR
4549,Tarikul Molla,2,SHOL PUR
4598,Md. Shzzad Mohlder,2,SHOL PUR
4734,Md.Samim Molia,2,SHOL PUR
4819,Kuddus,2,SHOL PUR
4824,Palash Seel,2,SHOL PUR
4830,Dulton Sarkar,2,SHOL PUR
4831,Sabuj Mollah,2,SHOL PUR
4851,Nasir Mina,2,SHOL PUR
4898,Raju Shaha,2,SHOL PUR
4953,Sohel,2,SHOL PUR
4961,Biplab Roy,2,SHOL PUR
4999,Md.Ali Akbar,2,SHOL PUR
5085,Krishna Chandra Sikkdar,2,SHOL PUR
5092,Md. Ali Akbar,2,SHOL PUR
5135,Suza Sikdar,2,SHOL PUR
5168,Nikhil Palit,2,SHOL PUR
5262,Alok Shikdar,2,SHOL PUR
5374,Debeshis saha,2,SHOL PUR
5412,MD. IMRAN GAZI,2,SHOL PUR
5652,Md Bablur Rahman,2,SHOL PUR
5747,Pranto Saha,2,SHOL PUR
1088,Monsur,3,GOBRA BAZAR
1089,Palas,3,GOBRA BAZAR
1090,Azim,3,GOBRA BAZAR
1092,Pritish,3,GOBRA BAZAR
1097,Monimohon,3,GOBRA BAZAR
1098,Depok,3,GOBRA BAZAR
1100,Sankar,3,GOBRA BAZAR
1106,Jakhir (Kaka),3,GOBRA BAZAR
1122,Uzzal,3,GOBRA BAZAR
2419,Samol,3,GOBRA BAZAR
2446,Humayan,3,GOBRA BAZAR
2667,Bipul,3,GOBRA BAZAR
2710,Achinto,3,GOBRA BAZAR
2769,Nirmol,3,GOBRA BAZAR
2833,Sourob,3,GOBRA BAZAR
2916,Md. Litpn Molla,3,GOBRA BAZAR
2935,Neser,3,GOBRA BAZAR
2942,Animul,3,GOBRA BAZAR
3061,Raushan Ali,69,GOBRA BAZAR
3062,Md. Shah Alam,3,GOBRA BAZAR
3066,Kris,3,GOBRA BAZAR
3076,Sonkor,3,GOBRA BAZAR
3082,Ali Hossain,3,GOBRA BAZAR
3093,Perinc,3,GOBRA BAZAR
3224,Ferdus,3,GOBRA BAZAR
3524,Sultan,3,GOBRA BAZAR
3525,sambo,3,GOBRA BAZAR
3632,Kayllan,3,GOBRA BAZAR
3633,Khobir,3,GOBRA BAZAR
3645,Shaikh Md Harun Ar Rashid,3,GOBRA BAZAR
3665,Kazi Eimamul,3,GOBRA BAZAR
2490,Apurbo,156,AGDIA
3746,Md. Sultan Molla,3,GOBRA BAZAR
3772,Abul Basher,3,GOBRA BAZAR
3815,Miskat hossan,3,GOBRA BAZAR
3822,Niam mollah,3,GOBRA BAZAR
3870,Mostain Sheikh,3,GOBRA BAZAR
3875,Ujjal SK,3,GOBRA BAZAR
3880,Aktarujjaman,3,GOBRA BAZAR
3953,Abdulla,3,GOBRA BAZAR
4115,Aviram Biswas,3,GOBRA BAZAR
4126,Anamul SK,3,GOBRA BAZAR
4127,Abdulla Sk,3,GOBRA BAZAR
4223,Elias Hossain,3,GOBRA BAZAR
4265,Raju Ahammed,3,GOBRA BAZAR
4330,Tonmoy,3,GOBRA BAZAR
4369,Babul Hossen,3,GOBRA BAZAR
4399,Anower molla,3,GOBRA BAZAR
4597,Bonkim,3,GOBRA BAZAR
4649,Md. Roman Hossain,3,GOBRA BAZAR
4664,Md. Katebor Molla,3,GOBRA BAZAR
4706,Sourav Chakrabortty,3,GOBRA BAZAR
4713,Shopon,3,GOBRA BAZAR
5664,Mukundo Sarkar,3,GOBRA BAZAR
5759,Sanjoy Das,3,GOBRA BAZAR
5764,Kishor Kumar Pranto,3,GOBRA BAZAR
5788,Md Shimul Ahmed,3,GOBRA BAZAR
5842,Md Khairul Islam,3,GOBRA BAZAR
5882,Hiramon Biswash,3,GOBRA BAZAR
5914,Bikash Kumar Kundu,3,GOBRA BAZAR
5936,MD SHAFIAR SHEIKH,3,GOBRA BAZAR
1747,Resma,4,BORO GATI
1749,Kursia,4,BORO GATI
1750,Sweety,4,BORO GATI
1751,Tulu,4,BORO GATI
1752,Jamirun,4,BORO GATI
1753,Khaleda,4,BORO GATI
1754,Nur Jahan,4,BORO GATI
2473,Laila,4,BORO GATI
2581,Lakshina,4,BORO GATI
2658,Afroza,4,BORO GATI
2697,Amena,4,BORO GATI
2745,Rojina,4,BORO GATI
2870,Rashida Regom,4,BORO GATI
2966,Kuchyea,4,BORO GATI
2967,Nurjahan,4,BORO GATI
2993,Dulena Begom,4,BORO GATI
3136,Arjina,4,BORO GATI
3137,Lameia Bagum,4,BORO GATI
3290,Amina,4,BORO GATI
3472,Sarjina,4,BORO GATI
3537,Meheron,4,BORO GATI
3536,shompa,29,NELO PARA
3598,Resma,4,BORO GATI
3604,Mitu,4,BORO GATI
3682,Kurci Bagom,4,BORO GATI
3755,Sajada Bagom,4,BORO GATI
3817,Laksina beagum,4,BORO GATI
3867,Sumi Beagum,4,BORO GATI
3868,Sahina Beagum,4,BORO GATI
3886,Jasmin Bagom,4,BORO GATI
4009,Mina Bagom,4,BORO GATI
4045,Shanara Bagom,4,BORO GATI
4074,Rojina Bagom,4,BORO GATI
4176,Jismin Naher,4,BORO GATI
4219,Megna Begom,4,BORO GATI
4231,Sapna Begom,4,BORO GATI
4236,Najma Begom,4,BORO GATI
4260,Easmin Begom,4,BORO GATI
4301,Lata,4,BORO GATI
4404,Rima Begom,4,BORO GATI
4405,Achiron Begum,4,BORO GATI
4415,Amina Begom,4,BORO GATI
4502,Hosneara Begum,4,BORO GATI
4506,Rikha Begum,4,BORO GATI
4584,Lamiya Khaton,4,BORO GATI
4585,Monira Akter,4,BORO GATI
4605,Bobita Khaton,4,BORO GATI
4606,Rokeya Begom,4,BORO GATI
4684,Khadiza,4,BORO GATI
4991,Hira,4,BORO GATI
5108,Rubya Begum,4,BORO GATI
5167,Dolana Begum,4,BORO GATI
5295,MASURA KHATUN,4,BORO GATI
5339,Humayra Begum,4,BORO GATI
5379,Meherun Nesa,4,BORO GATI
5436,Mst. Marufa Khatun,4,BORO GATI
5444,Amena Begu,4,BORO GATI
5482,Sajada Khatun,4,BORO GATI
5552,MS LAMIYA KHATUN,4,BORO GATI
5572,PANNA BEGUM,4,BORO GATI
5587,Sonia Begum,4,BORO GATI
5640,Mini Begum,4,BORO GATI
5651,Mrs Salima Khatun,4,BORO GATI
5739,Khadija Begum,4,BORO GATI
5780,Mrs Amena Begum,4,BORO GATI
5792,Mrs Doli Akter,4,BORO GATI
5819,Shathi Begum,4,BORO GATI
5956,MST ASRA KHATUN,4,BORO GATI
6024,MRS. EASMIN ARA,4,BORO GATI
6042,TULU BEGUM,4,BORO GATI
6058,Miss. Subrina Momotaz Nipa,4,BORO GATI
1321,Baby,6,GOBRA BAZAR
1332,Anowara Begum,6,GOBRA BAZAR
1333,Mst. Mousumi Khatun,6,GOBRA BAZAR
1334,Jahanara,6,GOBRA BAZAR
1336,Fatima,6,GOBRA BAZAR
1418,Mst. Sapna Khatun,6,GOBRA BAZAR
1419,Nahar,6,GOBRA BAZAR
1420,Mimi,6,GOBRA BAZAR
1421,Rozina,6,GOBRA BAZAR
1422,Rupa,6,GOBRA BAZAR
1423,Doly Rani,6,GOBRA BAZAR
1424,Hira,6,GOBRA BAZAR
1425,Hena,6,GOBRA BAZAR
1426,Taniea,6,GOBRA BAZAR
1427,Aktanur,6,GOBRA BAZAR
1428,Mazida,6,GOBRA BAZAR
1429,MST. JOSNA BEGUM,6,GOBRA BAZAR
1430,Parul,6,GOBRA BAZAR
1431,Molina,6,GOBRA BAZAR
2633,Chaina,6,GOBRA BAZAR
2649,Laky,6,GOBRA BAZAR
3190,Latifa Begum,6,GOBRA BAZAR
3235,Ambia Begum,6,GOBRA BAZAR
3394,Hira,6,GOBRA BAZAR
3396,Chondona,6,GOBRA BAZAR
3461,Rubia,6,GOBRA BAZAR
3462,Dolon,6,GOBRA BAZAR
3506,Sabina,6,GOBRA BAZAR
3522,Minu rani,6,GOBRA BAZAR
3558,shamia,6,GOBRA BAZAR
3596,Arpona goshsami,6,GOBRA BAZAR
3634,Khadija,6,GOBRA BAZAR
3861,Sumy Begum,6,GOBRA BAZAR
4136,Khadija Bagom,6,GOBRA BAZAR
4247,Hira Begom,6,GOBRA BAZAR
4275,Arpona goshsami,6,GOBRA BAZAR
4289,Salma Begom,6,GOBRA BAZAR
4302,Kulsum begom,6,GOBRA BAZAR
4344,Taslima Begum,6,GOBRA BAZAR
4487,Mrs Munni Khatun,6,GOBRA BAZAR
4500,Khadiza Khanam,6,GOBRA BAZAR
4538,Chondona Rani Shil,6,GOBRA BAZAR
4572,MRS. MUNNI KHATUN,6,GOBRA BAZAR
4700,Rubia Begum,6,GOBRA BAZAR
6079,MST. SHAPLA KHATUN,6,GOBRA BAZAR
2380,Asma,7,KHAKLISHA KHALI
2381,Manjuri,7,KHAKLISHA KHALI
2382,Dilruba,7,KHAKLISHA KHALI
2383,Kabita,7,KHAKLISHA KHALI
2385,Kanchon,7,KHAKLISHA KHALI
2386,Achiea,7,KHAKLISHA KHALI
2387,Rina,7,KHAKLISHA KHALI
2388,Ullashini,7,KHAKLISHA KHALI
2389,Laila,7,KHAKLISHA KHALI
2390,Hurjan,7,KHAKLISHA KHALI
2391,Farida,7,KHAKLISHA KHALI
2392,Fatima,7,KHAKLISHA KHALI
2393,Hasina,7,KHAKLISHA KHALI
2394,Asma,7,KHAKLISHA KHALI
2395,Nasrin,7,KHAKLISHA KHALI
2396,Baby,7,KHAKLISHA KHALI
2397,Fulmoti,7,KHAKLISHA KHALI
2398,Munju Rani,7,KHAKLISHA KHALI
2399,Rokyea,7,KHAKLISHA KHALI
2400,Shahanaz,7,KHAKLISHA KHALI
2401,Kalpona,7,KHAKLISHA KHALI
2402,Lata,7,KHAKLISHA KHALI
2515,Masumi,7,KHAKLISHA KHALI
2596,Geta Rani,7,KHAKLISHA KHALI
2855,Rina,7,KHAKLISHA KHALI
2906,Geta,7,KHAKLISHA KHALI
2907,Lata,7,KHAKLISHA KHALI
2946,Nasrin,7,KHAKLISHA KHALI
3115,Binota Bishas,7,KHAKLISHA KHALI
3167,Ratna,7,KHAKLISHA KHALI
3231,Dipti,7,KHAKLISHA KHALI
3436,Reta,7,KHAKLISHA KHALI
3450,Kakoli,7,KHAKLISHA KHALI
3464,Eaismin,7,KHAKLISHA KHALI
3595,Lucky Begom,7,KHAKLISHA KHALI
3675,Ashia,7,KHAKLISHA KHALI
3720,pire Begom,7,KHAKLISHA KHALI
3882,Kakoli Bagom,7,KHAKLISHA KHALI
3893,Khadija Bagom,7,KHAKLISHA KHALI
3898,Asa lota,7,KHAKLISHA KHALI
3899,Kollani rani,7,KHAKLISHA KHALI
3936,Sarmin Bagom,7,KHAKLISHA KHALI
3955,Monju rani,7,KHAKLISHA KHALI
4164,Asma Begum,7,KHAKLISHA KHALI
4173,Shewly Begom,7,KHAKLISHA KHALI
4241,Negar Sultana,7,KHAKLISHA KHALI
4320,Sahanaz,7,KHAKLISHA KHALI
4343,Achia Begum,7,KHAKLISHA KHALI
4360,Sanjida Sultana,7,KHAKLISHA KHALI
4362,Nipa Begum,7,KHAKLISHA KHALI
4408,Mst. Pewary Begum,7,KHAKLISHA KHALI
4537,Shymoly,7,KHAKLISHA KHALI
4576,Gita Rani Ray,7,KHAKLISHA KHALI
4731,Beauty,7,KHAKLISHA KHALI
4750,Kolpona,7,KHAKLISHA KHALI
4766,Monira,7,KHAKLISHA KHALI
4775,Shahina,7,KHAKLISHA KHALI
4895,Korimonassa,7,KHAKLISHA KHALI
5132,Achia-1757936583,7,KHAKLISHA KHALI
5133,Mst. Jesmin Akter,7,KHAKLISHA KHALI
5206,NEGAR SULTANA,7,KHAKLISHA KHALI
5335,Nipa Begum,7,KHAKLISHA KHALI
5655,Hasina,7,KHAKLISHA KHALI
5728,Arpona Goshami,7,KHAKLISHA KHALI
5899,FARIDA BEGUM,7,KHAKLISHA KHALI
5963,MST. SADIA KHATUN,7,KHAKLISHA KHALI
5964,HASINA BEGUM,7,KHAKLISHA KHALI
2867,Lela,8,GUAIL BARI
2138,Lipika-01735627113-,8,GUAIL BARI
2139,Chuchanda,8,GUAIL BARI
2140,Anita,8,GUAIL BARI
2141,Archona,8,GUAIL BARI
2142,Rupali,8,GUAIL BARI
2143,Monju Rani,8,GUAIL BARI
2144,Binota,8,GUAIL BARI
2145,Mita,8,GUAIL BARI
2146,Jointi,8,GUAIL BARI
2148,Su Priyea,8,GUAIL BARI
2440,Tripty Das,8,GUAIL BARI
2441,Shilpy Das,8,GUAIL BARI
2584,Shilpy Bairagi,8,GUAIL BARI
3081,Archna,8,GUAIL BARI
3146,Aunjana,8,GUAIL BARI
3173,sheromoni,8,GUAIL BARI
3244,Usha,8,GUAIL BARI
3762,Bichitra Rani,8,GUAIL BARI
4086,Tripti boiragi,8,GUAIL BARI
4087,Palashi biswas,8,GUAIL BARI
4128,Sormila Biswas,8,GUAIL BARI
4226,Simla Biswas,8,GUAIL BARI
4422,Bichitra Biswas,8,GUAIL BARI
1403,Debi,9,KHAKLISHA KHALI
1404,Depali,9,KHAKLISHA KHALI
1406,Supriya Biswas,9,KHAKLISHA KHALI
1407,Anu Radha,9,KHAKLISHA KHALI
1408,Sema,9,KHAKLISHA KHALI
1409,Hazira,9,KHAKLISHA KHALI
1411,Santona Sarkar,9,KHAKLISHA KHALI
1413,Ana Rati,9,KHAKLISHA KHALI
1414,Jarna,9,KHAKLISHA KHALI
1416,Menoti,9,KHAKLISHA KHALI
1417,Parul,9,KHAKLISHA KHALI
1619,Lipa Biswas,9,KHAKLISHA KHALI
2432,Chandana,9,KHAKLISHA KHALI
2462,Khuku,9,KHAKLISHA KHALI
2657,Puti Rani,9,KHAKLISHA KHALI
2721,Anita,9,KHAKLISHA KHALI
2771,Pata,9,KHAKLISHA KHALI
2772,Lakhy,9,KHAKLISHA KHALI
2937,Nomita,9,KHAKLISHA KHALI
3021,Hajera,9,KHAKLISHA KHALI
3112,Aniroty Bishas,9,KHAKLISHA KHALI
3121,Sukla,9,KHAKLISHA KHALI
3153,Pata Rani,9,KHAKLISHA KHALI
3176,Aloka Biswas,9,KHAKLISHA KHALI
3273,Bibidha,9,KHAKLISHA KHALI
3274,Rani,9,KHAKLISHA KHALI
3572,Buty,9,KHAKLISHA KHALI
3701,Anita Rani,9,KHAKLISHA KHALI
3733,Tripty Rani,9,KHAKLISHA KHALI
3831,Bristi Biswas,9,KHAKLISHA KHALI
3879,Pria mondol,9,KHAKLISHA KHALI
4095,Koruna ray,9,KHAKLISHA KHALI
4157,Mukti Rani,9,KHAKLISHA KHALI
4208,Anarti Biswas,9,KHAKLISHA KHALI
4253,Anita Biswas,9,KHAKLISHA KHALI
5068,Roma Biswas,9,KHAKLISHA KHALI
5249,Monju Rani Biswas,9,KHAKLISHA KHALI
5255,Mita biswas,9,KHAKLISHA KHALI
5286,Anarati Biswas,9,KHAKLISHA KHALI
5456,Santona,9,KHAKLISHA KHALI
5522,Momota Sarkar,9,KHAKLISHA KHALI
5550,Jarna Rani Sarkar,9,KHAKLISHA KHALI
5985,JARNA RANI SARKAR,9,KHAKLISHA KHALI
2317,Solaka,10,SREEPHOL TALA
2318,Rabiea,10,SREEPHOL TALA
2319,Shirina,10,SREEPHOL TALA
2320,Parul,10,SREEPHOL TALA
2321,Safali Khatun,10,SREEPHOL TALA
2323,Kohinur,10,SREEPHOL TALA
2324,Resma,10,SREEPHOL TALA
2325,Khadiza Khatun,10,SREEPHOL TALA
2326,Jobedia,10,SREEPHOL TALA
2327,Chamily,10,SREEPHOL TALA
2329,Rozina,10,SREEPHOL TALA
2330,Kazol,10,SREEPHOL TALA
2332,Hashiea,10,SREEPHOL TALA
2333,Kyea,10,SREEPHOL TALA
2412,Sheuli,10,SREEPHOL TALA
2563,Jasna,10,SREEPHOL TALA
2619,Nazma,10,SREEPHOL TALA
2685,Rahana,10,SREEPHOL TALA
2698,Nasrin,10,SREEPHOL TALA
2739,Nasima,10,SREEPHOL TALA
2824,Halima,10,SREEPHOL TALA
3006,Rokeya,10,SREEPHOL TALA
3090,Lima Katun,10,SREEPHOL TALA
3208,Moina,10,SREEPHOL TALA
3372,Panna,10,SREEPHOL TALA
3381,Buti,10,SREEPHOL TALA
3415,Anoyara,10,SREEPHOL TALA
3510,Parul,10,SREEPHOL TALA
3628,LIPI KHATUN,10,SREEPHOL TALA
3646,Moriam Khatun,10,SREEPHOL TALA
3728,Sultana Bagom,10,SREEPHOL TALA
3793,Hasiea Bagom,10,SREEPHOL TALA
3807,Parul,10,SREEPHOL TALA
3866,Parul Beagum,10,SREEPHOL TALA
4054,Mousumi Bagom,10,SREEPHOL TALA
4138,Sagorika Bagom,10,SREEPHOL TALA
4197,Monoyara Begum,10,SREEPHOL TALA
4215,Ranu Begom,10,SREEPHOL TALA
4307,Mousumi Begom,10,SREEPHOL TALA
4336,Rojina Begom,10,SREEPHOL TALA
4354,Sazma Begum,10,SREEPHOL TALA
4471,Josna Begum,10,SREEPHOL TALA
4773,Pinjira,10,SREEPHOL TALA
4909,Mst. Khurshida Begum,10,SREEPHOL TALA
4966,Halima,10,SREEPHOL TALA
4970,Lili Begum,10,SREEPHOL TALA
5026,Sarmin Khatun,10,SREEPHOL TALA
5099,Kajol Rakha,10,SREEPHOL TALA
5107,Josna,10,SREEPHOL TALA
5116,Parvin Akter,10,SREEPHOL TALA
5190,Josna,10,SREEPHOL TALA
5244,Mst: Samima,10,SREEPHOL TALA
5337,Anowara,10,SREEPHOL TALA
5424,Parul Khatu,10,SREEPHOL TALA
5434,Rina Begu,10,SREEPHOL TALA
5493,Kazol Rekha Begum,10,SREEPHOL TALA
5614,Beuty Begum,10,SREEPHOL TALA
5642,Rikta Parvin,10,SREEPHOL TALA
5687,Mim khatun,10,SREEPHOL TALA
5711,Najmin Nahar,10,SREEPHOL TALA
5722,Mrs Sabana Begum,10,SREEPHOL TALA
5761,sarmin Aktar,10,SREEPHOL TALA
5821,Halima Fakir,10,SREEPHOL TALA
5895,Mrs Moriam Begum,10,SREEPHOL TALA
5906,Mrs Hosneara Begum,10,SREEPHOL TALA
6002,Asiya Khatun,10,SREEPHOL TALA
6010,JANNATI KHANAM,10,SREEPHOL TALA
6068,NARGIS BEGUM,10,SREEPHOL TALA
6083,NASIMA KHANAM,10,SREEPHOL TALA
2238,Usha,12,NALDIR CHAR
2239,Susoma,12,NALDIR CHAR
2240,Priti Lata,12,NALDIR CHAR
2241,Anjona,12,NALDIR CHAR
2242,Lipika,12,NALDIR CHAR
2243,Arpona,12,NALDIR CHAR
2354,Taru Lata,12,NALDIR CHAR
2355,Santi,12,NALDIR CHAR
2356,Bina,12,NALDIR CHAR
2357,Parboti,12,NALDIR CHAR
2358,Molina,12,NALDIR CHAR
2359,Dipti Biswas,12,NALDIR CHAR
3007,Buity,12,NALDIR CHAR
3220,bina,12,NALDIR CHAR
3221,Kanchon,12,NALDIR CHAR
3844,Shuliy Halder,12,NALDIR CHAR
4108,kanchon Halder-011856519300,12,NALDIR CHAR
4122,Anjana Biswas,12,NALDIR CHAR
4361,Tamanna Begum,12,NALDIR CHAR
4823,Tamanna Begum,12,NALDIR CHAR
4859,Lipika,12,NALDIR CHAR
5165,Dipti Biswas,12,NALDIR CHAR
5254,Josna Adhikari,12,NALDIR CHAR
5635,Anowara,12,NALDIR CHAR
5703,Lilima Rani Ray,12,NALDIR CHAR
5871,Mrs Momtaj,12,NALDIR CHAR
5933,MST SURIYA KHATUN,12,NALDIR CHAR
5971,SHAFE RANI,12,NALDIR CHAR
6021,MST. SHIKHA BEGUM,12,NALDIR CHAR
6103,MUNMUN HALDER,12,NALDIR CHAR
1807,Sohiron,13,PALPARA
1808,Tohmina,13,PALPARA
1809,Mst. Rogina Begum,23,KOLORA
1810,Lovely,13,PALPARA
1811,Sokina,13,PALPARA
1812,Johora,13,PALPARA
1813,Lacky,13,PALPARA
1814,Resma,13,PALPARA
2431,Dul nahar,13,PALPARA
2484,Rafeza,13,PALPARA
2783,Tuli,13,PALPARA
1925,Purnima,13,PALPARA
1936,Sumoti,13,PALPARA
1940,Konika,13,PALPARA
3295,Salaha,13,PALPARA
3319,Pryere,13,PALPARA
3328,Razia,13,PALPARA
3548,Asma,13,PALPARA
4227,Sandha Rani,13,PALPARA
4682,Rupali,13,PALPARA
1134,Amiron,14,GOBRA BAZAR
1137,Hamida,14,GOBRA BAZAR
1138,Juma Biswas,14,GOBRA BAZAR
1139,Salina,14,GOBRA BAZAR
1140,Mst. Jyotsna Begum,14,GOBRA BAZAR
1142,Feroza,14,GOBRA BAZAR
1143,Rokyea,14,GOBRA BAZAR
1144,Rashida,14,GOBRA BAZAR
1147,Halima,14,GOBRA BAZAR
1148,Afroza,14,GOBRA BAZAR
1149,Lipy,14,GOBRA BAZAR
1150,Momotaz,14,GOBRA BAZAR
1151,Jesmin,14,GOBRA BAZAR
1152,Morzina,14,GOBRA BAZAR
1153,Ranuka,14,GOBRA BAZAR
1154,Salma,14,GOBRA BAZAR
1156,Mst. Mahuya Begum,14,GOBRA BAZAR
1158,Sufia,14,GOBRA BAZAR
1159,Rowsonara,14,GOBRA BAZAR
1160,Resma,14,GOBRA BAZAR
1161,Jobedia,14,GOBRA BAZAR
1162,Hazira,14,GOBRA BAZAR
1163,Khadija,14,GOBRA BAZAR
1164,Sweety,14,GOBRA BAZAR
1165,Rabyea,14,GOBRA BAZAR
1166,Nupur,14,GOBRA BAZAR
1167,Mst. Aleya Begum,14,GOBRA BAZAR
1169,Rexona,14,GOBRA BAZAR
1170,Shamima,14,GOBRA BAZAR
2409,Khadiza,14,GOBRA BAZAR
2433,Masura,14,GOBRA BAZAR
2444,Malina,14,GOBRA BAZAR
2456,Labony,14,GOBRA BAZAR
2463,Alima,14,GOBRA BAZAR
2471,Jamala,14,GOBRA BAZAR
2530,sarmin,14,GOBRA BAZAR
2636,Feroza Begum,14,GOBRA BAZAR
2655,Hasi,14,GOBRA BAZAR
2668,Shuly,14,GOBRA BAZAR
2705,Jesmin,14,GOBRA BAZAR
2712,Asma,14,GOBRA BAZAR
2792,Halima,14,GOBRA BAZAR
2863,Jesmin,14,GOBRA BAZAR
2885,Mafuja,14,GOBRA BAZAR
2936,Sefily,14,GOBRA BAZAR
3034,Thuron,14,GOBRA BAZAR
3101,Laxime,14,GOBRA BAZAR
3127,Ash Akter,14,GOBRA BAZAR
3142,Rosomoy,156,AGDIA
3149,Hera,14,GOBRA BAZAR
3257,Md Earn,87,AGDIA
3358,Jamuna,14,GOBRA BAZAR
3371,Tokdurel,87,AGDIA
3423,Laboni Khatun,14,GOBRA BAZAR
3424,Morjina,14,GOBRA BAZAR
3499,Rezoan,87,AGDIA
3503,Eyacin,87,AGDIA
3726,Safaly,14,GOBRA BAZAR
3750,Kolpona,14,GOBRA BAZAR
4007,Rousanara Bagom,14,GOBRA BAZAR
4052,Hira Bagom,14,GOBRA BAZAR
4206,Rexona-,14,GOBRA BAZAR
4243,Hazera Begom,14,GOBRA BAZAR
4273,Mahamuda Begom,14,GOBRA BAZAR
4583,Tahomina Begum,14,GOBRA BAZAR
4663,Mst. Tanjila Piashi,14,GOBRA BAZAR
5123,Sima,14,GOBRA BAZAR
5139,Mst. Sakila Khatun,14,GOBRA BAZAR
5146,Rojina begum,14,GOBRA BAZAR
5176,Renu parvin,14,GOBRA BAZAR
5312,MST. MUKTA KHANUM,14,GOBRA BAZAR
5891,Mrs Mery Begum,14,GOBRA BAZAR
1711,Jelekha,15,GOBRA BAZAR
1713,Nazma,15,GOBRA BAZAR
1715,Khadija,15,GOBRA BAZAR
1716,Suma,15,GOBRA BAZAR
1717,Shahanaz Begum,15,GOBRA BAZAR
1718,Sarmin,15,GOBRA BAZAR
1720,Mst. Nargis Begum,15,GOBRA BAZAR
1721,Sazeda,15,GOBRA BAZAR
1722,Rina,15,GOBRA BAZAR
1723,Mahamuda,15,GOBRA BAZAR
1724,Kohinur,15,GOBRA BAZAR
2443,Rejea,15,GOBRA BAZAR
2470,Mini,15,GOBRA BAZAR
2526,Rehana,15,GOBRA BAZAR
2527,Khaleda,15,GOBRA BAZAR
2627,Tammna,15,GOBRA BAZAR
2629,Nasrin,15,GOBRA BAZAR
2630,Hajera,15,GOBRA BAZAR
2656,Shuly,15,GOBRA BAZAR
2720,Anjumanara,15,GOBRA BAZAR
2768,Parul,15,GOBRA BAZAR
2838,Sufia,15,GOBRA BAZAR
3043,Nargish,15,GOBRA BAZAR
3139,Rajiea,15,GOBRA BAZAR
3272,Parvin,15,GOBRA BAZAR
3570,Farjana,15,GOBRA BAZAR
1183,Rabeya,37,NELO PARA
3626,Hajara,15,GOBRA BAZAR
3960,Taniya Bagom,15,GOBRA BAZAR
3991,Masuma Begum,15,GOBRA BAZAR
4004,Suma begum,15,GOBRA BAZAR
4094,Mst. Sharmin Begum 0,15,GOBRA BAZAR
4097,Mrs Mousumi Khnom,15,GOBRA BAZAR
4245,Sqnia Sultana,15,GOBRA BAZAR
4425,Lila begum,15,GOBRA BAZAR
4103,Parvin Begom,156,AGDIA
5153,Nasrin Begum,15,GOBRA BAZAR
5336,Khadija,15,GOBRA BAZAR
5347,Lila Begum,15,GOBRA BAZAR
5570,JAHANARA KHATUN,15,GOBRA BAZAR
5658,Najma Begum,15,GOBRA BAZAR
5663,Jannatul Borkot,15,GOBRA BAZAR
5803,Mrs Kamchon Begum,15,GOBRA BAZAR
5841,Rizina Begum,15,GOBRA BAZAR
5849,Taslima khatun,15,GOBRA BAZAR
5890,Mrs Rina Begum,15,GOBRA BAZAR
5932,NARGIS BEGUM,15,GOBRA BAZAR
6054,YEASMIN AKTER,15,GOBRA BAZAR
6078,LIPA BEGUM,15,GOBRA BAZAR
1661,Duli,16,SOVER GHOP
1662,Riniara,16,SOVER GHOP
1664,Panna,16,SOVER GHOP
1665,Chaina,16,SOVER GHOP
1666,Beauty,16,SOVER GHOP
1667,Rumicha,16,SOVER GHOP
1668,Rowsonara,16,SOVER GHOP
1669,Sirina,16,SOVER GHOP
1670,Tanjila,16,SOVER GHOP
1671,Sima,16,SOVER GHOP
1673,Mukta,16,SOVER GHOP
1674,Lutfa,16,SOVER GHOP
1675,Rupali,16,SOVER GHOP
1678,Sarmin,16,SOVER GHOP
1679,Tania,16,SOVER GHOP
1680,Erani,16,SOVER GHOP
1684,Rashida,16,SOVER GHOP
2480,Rana,16,SOVER GHOP
2485,Morium,16,SOVER GHOP
2497,Hajira,16,SOVER GHOP
2696,Shila,16,SOVER GHOP
2778,Rupa,16,SOVER GHOP
2876,Piashe,16,SOVER GHOP
2964,MORIOUM BEGUM,16,SOVER GHOP
3011,Buiti,16,SOVER GHOP
3097,Jahanara,16,SOVER GHOP
3111,Mst. Soneia,16,SOVER GHOP
3145,Mim khatun,16,SOVER GHOP
3150,Dolie,16,SOVER GHOP
3175,Feroja,16,SOVER GHOP
3251,HAFIJA BEGUM,16,SOVER GHOP
3265,Sahana,16,SOVER GHOP
3338,Rahana,16,SOVER GHOP
3348,Mohima,16,SOVER GHOP
3385,Ambia Khanam,16,SOVER GHOP
3386,Misue,16,SOVER GHOP
3740,Roksana,16,SOVER GHOP
3986,Rokeya Bagom,16,SOVER GHOP
4021,Munni begum,16,SOVER GHOP
4050,Silpi Begum,16,SOVER GHOP
4135,Daliea Bagom,16,SOVER GHOP
4144,Dayna Begom,16,SOVER GHOP
4203,Afroja,16,SOVER GHOP
4299,Roksana,16,SOVER GHOP
4345,Tasnim siddika,16,SOVER GHOP
4465,Tanjila Begum,16,SOVER GHOP
4747,Meherun,16,SOVER GHOP
4810,Minjira,16,SOVER GHOP
5039,Rosanara Begum,16,SOVER GHOP
5290,Tasnim Siddika,16,SOVER GHOP
5639,Mst Rima khanam,16,SOVER GHOP
5680,Chumki Begum,16,SOVER GHOP
5713,Mrs Sumaya Khatun,16,SOVER GHOP
5817,Tasnim Siddika,16,SOVER GHOP
2335,Hena,17,PACHURIA
2337,Nazma,17,PACHURIA
2338,Reak Jan,17,PACHURIA
2339,Morieam,17,PACHURIA
2340,Maherun Begum,17,PACHURIA
2342,Parvin,17,PACHURIA
2343,Shirina,17,PACHURIA
2344,Rehena,17,PACHURIA
2345,Ruma,17,PACHURIA
2346,Rehena,17,PACHURIA
2347,Monira,17,PACHURIA
2348,Joba,17,PACHURIA
2349,Moina,17,PACHURIA
2350,Achiea,17,PACHURIA
2351,Nazmin,17,PACHURIA
2352,Muslima,17,PACHURIA
2353,Nasima,17,PACHURIA
2404,Ripa,17,PACHURIA
2492,Khadia,17,PACHURIA
2620,Shanaz,17,PACHURIA
2692,Harisa,17,PACHURIA
2699,Maria,17,PACHURIA
2700,Sopna,17,PACHURIA
2743,Nasrin,17,PACHURIA
2804,Manira,17,PACHURIA
2828,Jahidha,17,PACHURIA
2839,Rahima,17,PACHURIA
2859,Yesmen,17,PACHURIA
2978,Beauty Begum,17,PACHURIA
2999,Nasima,17,PACHURIA
3012,Tamanna,17,PACHURIA
3053,Feroza,17,PACHURIA
3077,Jorina,17,PACHURIA
3078,sABINA,17,PACHURIA
3132,Habiba,17,PACHURIA
3155,Swapna Khanum,17,PACHURIA
3202,Jahanara,17,PACHURIA
3203,Feroja,17,PACHURIA
3309,Baby,17,PACHURIA
3353,Kakoli,17,PACHURIA
3373,Monoyara,17,PACHURIA
3491,Selana,17,PACHURIA
3652,Shrina Bagum,17,PACHURIA
3708,Dul naher,17,PACHURIA
3913,Parvin Bagom,17,PACHURIA
3927,Nasmine,17,PACHURIA
4147,Kadija Parvin,17,PACHURIA
4183,Halima Begum,17,PACHURIA
4184,Murshida Begum,17,PACHURIA
4189,Najmin begum,17,PACHURIA
4235,Piari Begum,17,PACHURIA
4257,Nasrin Begom,17,PACHURIA
4258,Sima Khaton,17,PACHURIA
4271,Rekjan,17,PACHURIA
4376,Tania Begom,17,PACHURIA
4416,Sabina Khatun,17,PACHURIA
4550,Mst.Aklima Khatun,17,PACHURIA
4568,Nachima Begum,17,PACHURIA
4646,Sarmin akter,17,PACHURIA
4856,Mst. Asia Aktar,17,PACHURIA
4864,Sarbony,17,PACHURIA
5023,Sumi aktar,17,PACHURIA
5140,Rohima,17,PACHURIA
5252,Kohinur Begum,17,PACHURIA
5280,Tara Begum,17,PACHURIA
5322,Ruma Begum,17,PACHURIA
5430,Rime Begum,17,PACHURIA
5467,Beauty khatu,17,PACHURIA
5718,Sandha Shil,17,PACHURIA
5721,Rimi Begum,17,PACHURIA
6066,JAHANARA BEGUM,17,PACHURIA
2094,Sonali,18,AGDIEAR CHAR
2095,Champa,18,AGDIEAR CHAR
2096,Laki,18,AGDIEAR CHAR
2097,Depali,64,NALDIR CHAR
2098,Bandona,18,AGDIEAR CHAR
2099,Anjali,18,AGDIEAR CHAR
2100,Sulata,18,AGDIEAR CHAR
2101,Komola,18,AGDIEAR CHAR
2102,Basonti,18,AGDIEAR CHAR
2103,Urmila Bairagi,18,AGDIEAR CHAR
2104,Nilima,18,AGDIEAR CHAR
2106,Kajol,18,AGDIEAR CHAR
2107,Mina,18,AGDIEAR CHAR
2108,Unnoti,18,AGDIEAR CHAR
2109,Monjuri,18,AGDIEAR CHAR
2110,Monju Goldar,18,AGDIEAR CHAR
2195,Roma Boiragi,18,AGDIEAR CHAR
2594,Laskmi,18,AGDIEAR CHAR
2653,Maha,18,AGDIEAR CHAR
2734,Atoshe Boiragy,18,AGDIEAR CHAR
2777,Bidesi,18,AGDIEAR CHAR
2788,Sweety,18,AGDIEAR CHAR
2826,Basoanti,18,AGDIEAR CHAR
2837,Rupa,18,AGDIEAR CHAR
2840,Anima,18,AGDIEAR CHAR
2852,Kalpona Adhikari,18,AGDIEAR CHAR
2853,Etika,18,AGDIEAR CHAR
3298,Eitue,18,AGDIEAR CHAR
3347,Jatno Rani,18,AGDIEAR CHAR
3601,kajol,18,AGDIEAR CHAR
4048,Niva Bagchi,18,AGDIEAR CHAR
4268,Mina Rani,18,AGDIEAR CHAR
4300,Monika das,18,AGDIEAR CHAR
4396,Sagorika,18,AGDIEAR CHAR
4508,Sumoti Rani,18,AGDIEAR CHAR
4560,Chandara Das,18,AGDIEAR CHAR
4580,Sela,18,AGDIEAR CHAR
4618,Nelema Boiragy,18,AGDIEAR CHAR
4929,Jamuna Biragai,18,AGDIEAR CHAR
4933,Eila,18,AGDIEAR CHAR
4987,Sela,18,AGDIEAR CHAR
5200,Luxmi Bayragy,18,AGDIEAR CHAR
5270,Anima Shannal,18,AGDIEAR CHAR
5320,KANA LASKAR,18,AGDIEAR CHAR
5343,Eti Biswas,18,AGDIEAR CHAR
5377,Malati Sannyal-0184402076,18,AGDIEAR CHAR
5473,Shila Rani Biswas,18,AGDIEAR CHAR
5521,Sela Sorkar,18,AGDIEAR CHAR
5648,Barsha Mollick,18,AGDIEAR CHAR
5771,Minori Begum,18,AGDIEAR CHAR
5876,Shila Sarkar,18,AGDIEAR CHAR
5909,Mitali Goldar,18,AGDIEAR CHAR
5947,KOBITA RANI KERTTONEA,18,AGDIEAR CHAR
5990,KANA LASKAR,18,AGDIEAR CHAR
5995,MST AKLIMA KHATUN,18,AGDIEAR CHAR
1727,Laboni,21,SAHAPARA
1728,Cinu Rani Roy,21,SAHAPARA
1729,Aroti,21,SAHAPARA
1730,Purnima Rani Roy,21,SAHAPARA
1732,Nipa,21,SAHAPARA
1733,Rubia,21,SAHAPARA
1734,Minu Biswas,21,SAHAPARA
1735,Laboni,21,SAHAPARA
1736,Mita Rani Roy,21,SAHAPARA
1737,Bisakha,21,SAHAPARA
1738,Ismotara,21,SAHAPARA
1739,Lina,21,SAHAPARA
1740,Sopna,21,SAHAPARA
1742,Aroti-,21,SAHAPARA
1743,Sefali Rani,21,SAHAPARA
1744,Sima Saha,21,SAHAPARA
2641,Anjona Ray,21,SAHAPARA
2691,Anita,21,SAHAPARA
2754,Salina,21,SAHAPARA
2763,Sopna,21,SAHAPARA
2834,Puja rai,21,SAHAPARA
3000,Shefily,73,GOBRA BAZAR
3324,Bishaka,21,SAHAPARA
3383,Shefaly,21,SAHAPARA
3490,Resma,21,SAHAPARA
3535,shahida,21,SAHAPARA
3551,Akhie,21,SAHAPARA
3577,Khadija,21,SAHAPARA
3738,Joshna Bagom,21,SAHAPARA
3974,Rubiea Begum,21,SAHAPARA
3992,Khaleda Begum,21,SAHAPARA
4010,Khadija Bagom,21,SAHAPARA
4026,Selpe Rane Saha,21,SAHAPARA
4044,Kolpana Das,21,SAHAPARA
4297,Sabana Begom,21,SAHAPARA
4355,Akhie Ray,21,SAHAPARA
4485,Rabeya Begum,21,SAHAPARA
4490,Pria rai,21,SAHAPARA
4534,Daina khaton,21,SAHAPARA
4628,Rajia begum,21,SAHAPARA
4669,Salima,21,SAHAPARA
4801,Sumaya,21,SAHAPARA
5193,Mim Khatun,21,SAHAPARA
5216,Mst. Khadiza Khatun,21,SAHAPARA
5242,Rabaya Bagam,21,SAHAPARA
5300,Nise Khatun,21,SAHAPARA
5440,Mim Khatun,21,SAHAPARA
5442,TANIA BAGUM,21,SAHAPARA
5453,Mita Biswa,21,SAHAPARA
5454,Rozina Begum,21,SAHAPARA
5496,Rijia,21,SAHAPARA
5555,Laki,21,SAHAPARA
5556,Ratna,21,SAHAPARA
5574,REMA,21,SAHAPARA
5582,SANTA KHATUN,21,SAHAPARA
5599,Hera Mondal,21,SAHAPARA
5619,Sondha,21,SAHAPARA
5624,Labina Begu,21,SAHAPARA
5645,Susmita Kapuria Nipa,21,SAHAPARA
5684,Momotaz Khanom,21,SAHAPARA
5789,Resma Begum,21,SAHAPARA
5806,Rijia,21,SAHAPARA
5816,Mamotaz Khanum,21,SAHAPARA
5887,Sanjida Khanom,21,SAHAPARA
5974,LABONI ROY,21,SAHAPARA
6035,KALPONA RANI DAS,21,SAHAPARA
1781,Asma,22,KOLORA
1782,Onima,22,KOLORA
1783,Rizia Begum,22,KOLORA
1784,Parboti kundu,22,KOLORA
1785,Jesmin,22,KOLORA
1786,Parvin,22,KOLORA
1787,Sopna,22,KOLORA
1788,Lovely,22,KOLORA
1789,Ruma,22,KOLORA
1790,Rita,22,KOLORA
1791,Rina,22,KOLORA
1792,Laky Beagum,22,KOLORA
1793,Joynob Begum,22,KOLORA
1794,Asia,22,KOLORA
1795,Rahima,22,KOLORA
1796,Sirina,22,KOLORA
1797,Rumana,22,KOLORA
1798,Amena,22,KOLORA
2524,Sabina Yesmin,22,KOLORA
2618,Taniyea,22,KOLORA
2672,Rama Rani,22,KOLORA
2702,Shanaz Parvin,22,KOLORA
2825,Shuliy,245,MUSURIA
2866,Nasima,22,KOLORA
3038,Shabita,22,KOLORA
3264,Sajada,22,KOLORA
3375,Rima,22,KOLORA
3492,Supiya,22,KOLORA
3578,Taniea,22,KOLORA
3180,Shefaly,67,SOVER GHOP
3376,Rumana,67,SOVER GHOP
3756,Jharna Begum,22,KOLORA
3827,Asiha Bagom,22,KOLORA
3929,Nila Khanum,22,KOLORA
3952,Thomina Bagom,22,KOLORA
3980,Sohana Parvin,22,KOLORA
3994,Sarmin begum,22,KOLORA
3996,Halena Begum-0174069783,22,KOLORA
4038,Asma Begum,22,KOLORA
4059,Nurjahan bejum,22,KOLORA
4060,Touron Begum,22,KOLORA
4061,Tara bibi,22,KOLORA
4132,Afroja Begum,22,KOLORA
4154,Parvin Begum,22,KOLORA
4217,Jhohora,22,KOLORA
4276,Hosneara,22,KOLORA
4286,Sufia Begum,22,KOLORA
4368,Rasida Begom,22,KOLORA
4420,Achia aktar,22,KOLORA
4421,Sumpa Sarkar,22,KOLORA
4595,Jelekha Khatun,22,KOLORA
4613,Nurjahan,22,KOLORA
4619,Rajia Khatun,22,KOLORA
4652,Sumpa Sarkar,22,KOLORA
4693,Sudha Rani Adhikari,22,KOLORA
4703,Tohuron Begum,22,KOLORA
4709,Mst;Sirina Begum,22,KOLORA
4716,Farida,22,KOLORA
4725,Nupur,22,KOLORA
4735,Nila Khanum,22,KOLORA
4756,Khuku mony begum,22,KOLORA
4779,Rupali Beagum,22,KOLORA
4881,Keya begum,22,KOLORA
4995,Rakhi rani bswas,22,KOLORA
5008,Rashida Begum,22,KOLORA
5027,Nupur,22,KOLORA
5136,Sadia Khatun,22,KOLORA
5182,Nila Khanum,22,KOLORA
5215,MST. SHANTA KHANAM,22,KOLORA
5350,Rashida,22,KOLORA
5356,Mst. Ashia begum,22,KOLORA
5410,Anamika Biswas,22,KOLORA
5452,Tohomina Begum,22,KOLORA
5478,Mst. Raksona Begum,22,KOLORA
5576,Sarmin Begum,22,KOLORA
5606,Mrs. Latifa Khatun,22,KOLORA
5650,Mst Kakoli Khatun,22,KOLORA
5683,Rupali Khatun,22,KOLORA
5693,Sadia Khatun,22,KOLORA
5709,Mrs Salma Bibi,22,KOLORA
5753,Sandip Biswash,22,KOLORA
5765,Rashida Khanom,22,KOLORA
5773,Tania Begum,22,KOLORA
5781,Saleha Mahmud,22,KOLORA
5782,Saleha Mahmud,22,KOLORA
5796,Asma Begum,22,KOLORA
5807,Liton Biswash,22,KOLORA
5844,Tahmina Begum,22,KOLORA
5886,China Ray,22,KOLORA
5898,Eti Ray,22,KOLORA
5918,Lili Begum,22,KOLORA
5920,MST. ROMANA PARVIN,22,KOLORA
5954,POLY DAS,22,KOLORA
1800,Momotaj,23,KOLORA
1801,Hasila Begum,23,KOLORA
1802,Honufa,23,KOLORA
1803,Mst;Beauti begum,23,KOLORA
1804,Sharmin Khatun,23,KOLORA
1805,Rexona,23,KOLORA
1806,Rotna,23,KOLORA
2552,latifa,23,KOLORA
2593,shbita,23,KOLORA
2632,Shaleha,23,KOLORA
2719,Parul,23,KOLORA
2787,Nargis,23,KOLORA
2801,Nanibala,23,KOLORA
2831,Jesmin,23,KOLORA
2865,Jamila,23,KOLORA
3029,Anufa Begum,23,KOLORA
3091,Raksona Bagom,23,KOLORA
3179,nasima,23,KOLORA
3191,Sweety,23,KOLORA
3227,Rahima,23,KOLORA
3420,priya,23,KOLORA
3457,Champa,23,KOLORA
3458,Jhorna,23,KOLORA
3497,kohinur,23,KOLORA
3571,Rumica,23,KOLORA
3579,Momtaj,23,KOLORA
3592,Runa,23,KOLORA
3694,Lotifa Begom,23,KOLORA
3695,Anjuara Begom,23,KOLORA
3696,Arjina Begom,23,KOLORA
3783,Taslima,23,KOLORA
3803,Mst. Rogina Begum,23,KOLORA
3839,Mst. Runa Begum,23,KOLORA
3995,Jakiea begum,23,KOLORA
4107,Adori Bagom,23,KOLORA
4133,Jamela Begum,23,KOLORA
4201,Arjina Begom,23,KOLORA
4288,Achia,23,KOLORA
4308,Taslima,23,KOLORA
4377,Ms Sweety,23,KOLORA
4496,Priya Khatun,23,KOLORA
4696,Mst;Mohiton Begum,23,KOLORA
4804,Mst Dolena Khatun,23,KOLORA
4826,Mst Dolena Khatun,23,KOLORA
4835,Sumiya Begum,23,KOLORA
4873,Runa begum,23,KOLORA
4911,Tania,23,KOLORA
4956,Mst. Acia begum,23,KOLORA
4974,Ratna,23,KOLORA
4977,Sumi khanam,23,KOLORA
5043,Anufa Begum,23,KOLORA
5055,Sharmin Khatun,23,KOLORA
5062,Tania,23,KOLORA
5281,Jakeya,23,KOLORA
5307,Anjuara,23,KOLORA
5331,Jarna Begum,23,KOLORA
5340,Rumicha Begum,23,KOLORA
5366,Anupa Begum,23,KOLORA
5390,Mst. Taslima Begum,23,KOLORA
5727,Sarmin Khatun,23,KOLORA
5802,Mrs Sohana Aktar,23,KOLORA
5851,Ruma Begum,23,KOLORA
5852,Mrs Khadija Khatun,23,KOLORA
5857,Mrs Sufia Khanom,23,KOLORA
5859,Md Kamrul Molla,23,KOLORA
5872,Abeda Begum,23,KOLORA
5874,Mrs Runa Begum,23,KOLORA
5919,Mst Dolena Begum,23,KOLORA
5922,Gakia Begum,23,KOLORA
5975,JHARNA BEGUM,23,KOLORA
6011,JAHANARA BEGUM,23,KOLORA
6031,MST. FARIDA BEGUM,23,KOLORA
6041,MST. PERVIN BEGUM,23,KOLORA
6043,SUFIA BEGUM,23,KOLORA
6049,MST. SHOHANA AKTER,23,KOLORA
6091,TANIA SULTANA,23,KOLORA
2258,Shahida,24,AGDIA
2259,Mina,24,AGDIA
2260,Saira,24,AGDIA
2261,Farida,24,AGDIA
2262,Joinab,24,AGDIA
2264,Asma,24,AGDIA
2265,Josna,24,AGDIA
2266,Nahar,24,AGDIA
2268,Khadija,24,AGDIA
2417,Rina,24,AGDIA
2564,Hoshneara,24,AGDIA
2782,Mis Kadhiza,24,AGDIA
2807,Sahanara,24,AGDIA
2808,Sarmin,24,AGDIA
2815,Sarmin,24,AGDIA
2987,Yasmin,24,AGDIA
3302,Fatama,24,AGDIA
3367,Panna,24,AGDIA
3459,Yeasmin,24,AGDIA
3590,Sarmin,24,AGDIA
3722,Miss. Maherun,24,AGDIA
3784,Jasmin,24,AGDIA
3869,Kadija Beagum,24,AGDIA
3930,Mina Bagom,24,AGDIA
3943,Rojna Bagom,24,AGDIA
4109,Poli Bagom,24,AGDIA
4148,Resma Begum,24,AGDIA
4161,Sonia Begum,24,AGDIA
4225,Joshna Begom,24,AGDIA
4514,Sarmen,24,AGDIA
4645,Mst.Shema Khatun,24,AGDIA
4657,Mnowara,24,AGDIA
4712,Josna,24,AGDIA
4850,Sahida,24,AGDIA
4920,Rojina,24,AGDIA
5015,Nadia,24,AGDIA
5016,Hera,24,AGDIA
5024,Aklima,24,AGDIA
5044,Lema,24,AGDIA
5097,Kulsum begum,24,AGDIA
5119,Rena,24,AGDIA
5291,Jasmin,24,AGDIA
5443,Riya Khatu,24,AGDIA
5564,Jesmin Begum,24,AGDIA
5611,EMON ALI MIR,24,AGDIA
5656,Fatema Begum,24,AGDIA
5698,Parvin Khatun,24,AGDIA
5707,Tahmina Begum,24,AGDIA
5768,Asma,24,AGDIA
5904,Khadija Begum,24,AGDIA
5913,kOHALI,24,AGDIA
6069,HALANA,24,AGDIA
1518,Komola,25,MALOPARA
1526,jyotika,25,MALOPARA
1531,Bali,25,MALOPARA
1534,Kajol,25,MALOPARA
1540,Sarala Biswas,25,MALOPARA
1541,Puspo,25,MALOPARA
1543,Radha,25,MALOPARA
1546,Suchitra,25,MALOPARA
1549,Minoti,25,MALOPARA
1550,Aporna,25,MALOPARA
1552,Nilima Biswas,25,MALOPARA
1553,Basonti,25,MALOPARA
1636,Promila,25,MALOPARA
1639,Anjona,25,MALOPARA
2582,Ranjita,25,MALOPARA
2758,Taramony,25,MALOPARA
2767,Mukti,25,MALOPARA
2842,Sova,25,MALOPARA
2882,Joshna Biswas,25,MALOPARA
3292,Sova,25,MALOPARA
3303,Kakoli,25,MALOPARA
3330,Parboti,25,MALOPARA
3335,Sadona,25,MALOPARA
3600,Monika,25,MALOPARA
3657,Rekha Rani,25,MALOPARA
3732,Rita Rani,25,MALOPARA
3766,Monimala,25,MALOPARA
3842,Arati Biswas,25,MALOPARA
3860,Sadona,25,MALOPARA
3933,Anju Biswas,25,MALOPARA
4011,Aroti biswas,25,MALOPARA
4076,Bizoli Rani Biswas,25,MALOPARA
4125,Shila Rani,25,MALOPARA
4493,Eitika Rani Biswas,25,MALOPARA
4574,Anjoli Biswas,25,MALOPARA
4699,sumona,25,MALOPARA
4748,Shanti,25,MALOPARA
4852,Ripa,25,MALOPARA
4870,Kalpona Rani Biswas,25,MALOPARA
5090,Shapna Biswas,25,MALOPARA
5180,Mollica,25,MALOPARA
5205,Laxmi Rani,25,MALOPARA
5236,Ritu Biswas,25,MALOPARA
5439,Rita Biswas,25,MALOPARA
5445,Orpita Golde,25,MALOPARA
5472,Kamona Biswas,25,MALOPARA
5554,SHAMPA VOKTO,25,MALOPARA
5777,Priyanka Bagchy,25,MALOPARA
5935,AISHI BISWAS,25,MALOPARA
2112,Alea Begum,26,NALDIR CHAR
2113,Alyea,26,NALDIR CHAR
2114,Sonali Begum,26,NALDIR CHAR
2115,Lutfunnesa,26,NALDIR CHAR
2116,Hosne Ara,26,NALDIR CHAR
2117,Saleha Begum,26,NALDIR CHAR
2118,Begum,26,NALDIR CHAR
2119,Lipika,26,NALDIR CHAR
2125,Resmi,26,NALDIR CHAR
2126,Masura,26,NALDIR CHAR
2130,Salma,26,NALDIR CHAR
2132,Tahmina Begum,26,NALDIR CHAR
2133,Alyea,26,NALDIR CHAR
2135,Rabyea,26,NALDIR CHAR
2136,Alyea,26,NALDIR CHAR
2137,Rahima Begum,26,NALDIR CHAR
2186,Aklima,145,BICHALI
2549,Rikta Begum,26,NALDIR CHAR
2550,Selina Begum,26,NALDIR CHAR
2733,Sila,26,NALDIR CHAR
2786,Kadhiza,26,NALDIR CHAR
2888,Lima,26,NALDIR CHAR
3014,Nasima,26,NALDIR CHAR
3055,Rabeya,26,NALDIR CHAR
3123,Maharunnsa,26,NALDIR CHAR
3124,Achia parvin,26,NALDIR CHAR
3135,Tamana,26,NALDIR CHAR
3218,Rupali,26,NALDIR CHAR
3267,Razia,26,NALDIR CHAR
3317,Sapla,26,NALDIR CHAR
3407,Maria,26,NALDIR CHAR
3560,mojida,26,NALDIR CHAR
3581,Nacima,26,NALDIR CHAR
3582,Hasina,26,NALDIR CHAR
3699,Miss Rina,26,NALDIR CHAR
3846,Ripte bagom,26,NALDIR CHAR
3946,Shamima Bagom,26,NALDIR CHAR
4023,Mita begum,26,NALDIR CHAR
4165,Saliena begum,26,NALDIR CHAR
4269,Sultana Begum,26,NALDIR CHAR
4533,Khodaja begum,26,NALDIR CHAR
4557,Sherina Khatun,26,NALDIR CHAR
4611,Serina Akter,26,NALDIR CHAR
4633,Khushina Begom,26,NALDIR CHAR
4666,Ambia Khanam,26,NALDIR CHAR
4694,Shahanara,26,NALDIR CHAR
4846,Lima Khatun,26,NALDIR CHAR
4865,Shirin Sultana,26,NALDIR CHAR
5018,Mitu khanam,26,NALDIR CHAR
5036,Salina Begum,26,NALDIR CHAR
5129,Tamanna Begum,26,NALDIR CHAR
5251,Kajal Begum,26,NALDIR CHAR
5462,Tamanna Begum,26,NALDIR CHAR
5463,Mst. Shahanara Khatun,26,NALDIR CHAR
5465,Monira Begum,26,NALDIR CHAR
5471,HERA KHATUN,26,NALDIR CHAR
5491,Mimma,26,NALDIR CHAR
5794,Resma Begum,26,NALDIR CHAR
5826,Aklima Begum,26,NALDIR CHAR
5878,Sharifa Khanom,26,NALDIR CHAR
5937,MUSLIMA KHATUN,26,NALDIR CHAR
6016,Mst. Shahanara Khatun,26,NALDIR CHAR
6056,SALEHA BEGUM,26,NALDIR CHAR
2207,Jahida,27,UZIR PUR
2209,Faira,27,UZIR PUR
2211,Suku Rani,27,UZIR PUR
2213,Amina,27,UZIR PUR
2214,Nila Rani,27,UZIR PUR
2215,Puspo Rani,27,UZIR PUR
2216,Anowara,27,UZIR PUR
2218,Lavli,27,UZIR PUR
2219,Nehar,27,UZIR PUR
2403,Josna,145,BICHALI
2751,Ninja,27,UZIR PUR
2947,Kabita,27,UZIR PUR
2957,Champa,27,UZIR PUR
2983,Shekha,27,UZIR PUR
2984,Nilufa,27,UZIR PUR
3138,Salma,27,UZIR PUR
3189,rabea,27,UZIR PUR
2208,Dulali,28,BECHALI
3252,Pryere,27,UZIR PUR
3380,sheka,27,UZIR PUR
3771,Sampa Rani-01946645840\`,27,UZIR PUR
3840,Ripa Riswas,27,UZIR PUR
3874,Cumki Bishas,27,UZIR PUR
4284,Papia Beagum,27,UZIR PUR
4304,Marjia begum,27,UZIR PUR
4312,Lucky Rani Biswas,27,UZIR PUR
4436,Mis. Nighar Begom,27,UZIR PUR
4464,Siraboni Aktar,27,UZIR PUR
4767,Jahida,27,UZIR PUR
2210,Sheka Rani,28,BECHALI
4028,Hosne Ara,28,BECHALI
4029,Nasrin Begom,28,BECHALI
4030,laboni Bagom,28,BECHALI
4031,Rahana Bagom,28,BECHALI
4032,Buty Bagom,28,BECHALI
4033,Rumica Bagom,28,BECHALI
1745,Rotna,29,NELO PARA
1755,Sofiron,29,NELO PARA
1758,Salma,29,NELO PARA
1760,Kakoli,29,NELO PARA
1761,Mini,29,NELO PARA
1762,Priya-01928596950,29,NELO PARA
1763,Yeasmin,29,NELO PARA
1764,Rashida,29,NELO PARA
1765,Teuli,29,NELO PARA
1766,Jhorna,29,NELO PARA
1767,Nahar,29,NELO PARA
1769,Rubi,29,NELO PARA
1770,Jesmin,29,NELO PARA
1772,Rashida,29,NELO PARA
1773,Rina,29,NELO PARA
1774,Samita,29,NELO PARA
1776,Rabeya,29,NELO PARA
1777,Mita,29,NELO PARA
1778,Nasrin,29,NELO PARA
1779,Nazma-01919467090,29,NELO PARA
1780,MST SAIMAZZAMAN,29,NELO PARA
2455,Rikta,29,NELO PARA
2561,Marina,29,NELO PARA
2631,Ruxsana,29,NELO PARA
2642,Morjina,29,NELO PARA
2844,Morjina,29,NELO PARA
2858,Mini Khatun,29,NELO PARA
2901,Rokayea,29,NELO PARA
3045,Arzina,29,NELO PARA
3083,Mita,29,NELO PARA
3157,Sumiya,29,NELO PARA
3158,Roubie,29,NELO PARA
3160,Sumiya,29,NELO PARA
3161,Roubie,29,NELO PARA
3229,Nasima,29,NELO PARA
3291,Jebon naher,29,NELO PARA
3308,Rasidea,29,NELO PARA
3387,Rubi Khanom,29,NELO PARA
3473,Kajol Begum,29,NELO PARA
3599,Tulie,29,NELO PARA
3705,Sumi Khanom,29,NELO PARA
3821,Sadiea beagum,29,NELO PARA
3823,Rashida Begum,29,NELO PARA
4016,Nasma Bagom,29,NELO PARA
4017,Tanjira Bagom,29,NELO PARA
4121,Najima Bagom,29,NELO PARA
4130,Aduri Bagom,29,NELO PARA
4175,Nazma Khanom,29,NELO PARA
4185,Shefali Biswas,29,NELO PARA
4224,Moniya Khanom,29,NELO PARA
4296,Rashida Begum,29,NELO PARA
4315,Lakie Sultana,29,NELO PARA
4350,Peare Begom,29,NELO PARA
4384,Mafuja Khanom,29,NELO PARA
4489,Julia Begum,29,NELO PARA
4507,Mohiton Begum,29,NELO PARA
4513,Rubi Begom,29,NELO PARA
4526,Mukta Begom,29,NELO PARA
4552,Monira Khanam,29,NELO PARA
4586,Hosneara Begum,29,NELO PARA
4587,Mis. Rupa Islam,29,NELO PARA
4609,Smriti Begum,29,NELO PARA
4620,Sonia akter,29,NELO PARA
4626,Merina Begum,29,NELO PARA
4627,Najima Sultana,29,NELO PARA
4640,Nahar Begom,29,NELO PARA
4661,Rina,29,NELO PARA
4679,Fatema,29,NELO PARA
4689,Mst. Laksuma Khanum,29,NELO PARA
4690,Piari BEGUM,29,NELO PARA
4758,khadija,29,NELO PARA
4774,Saleha,29,NELO PARA
4805,Nasreen Begum,29,NELO PARA
4849,Manimukta,29,NELO PARA
5010,Zulfikar Ali Molla,245,MUSURIA
5071,Sathi Khatun,29,NELO PARA
5076,Bithi,29,NELO PARA
5126,Mukta Begum,29,NELO PARA
5127,Jibon Nahar,29,NELO PARA
5149,Ruksana,29,NELO PARA
5164,Balika Roy,29,NELO PARA
5267,Achia Begum,29,NELO PARA
5323,Suriya Khanom,29,NELO PARA
5404,Roni Begum,29,NELO PARA
5413,Mst. Nazma Khanam,29,NELO PARA
5511,SAKIMA BEGUM,29,NELO PARA
5553,Kahinur Begum,29,NELO PARA
5562,Shriti Begum,29,NELO PARA
5590,Mina,29,NELO PARA
5592,samima Begu,29,NELO PARA
5625,Itika,29,NELO PARA
5785,Md Mukul Molla,29,NELO PARA
5786,Md Mukul Molla,29,NELO PARA
5813,Mrs Khadija Khatun,29,NELO PARA
5865,Sonia Aktar,29,NELO PARA
5934,MST. DULI KHA,29,NELO PARA
5957,MST. TANDRA KHATUN,29,NELO PARA
5967,MST. TANJIRA BEGUM,29,NELO PARA
6033,MST AMANA KHATUN,29,NELO PARA
6081,MST. RUPA ISLAM,29,NELO PARA
6092,SATHI KHANAM,29,NELO PARA
1908,Romicha,31,UZIR PUR
1910,Mourshida,31,UZIR PUR
1912,Rabyea,31,UZIR PUR
1914,Chaina,31,UZIR PUR
1917,Eati,31,UZIR PUR
1918,Sabina,31,UZIR PUR
1919,Rabyea,31,UZIR PUR
1920,Alayea,31,UZIR PUR
1921,Shirina,31,UZIR PUR
1922,Lipy,31,UZIR PUR
2430,Shami,31,UZIR PUR
2623,JAHIDA,31,UZIR PUR
2726,Tanjira,31,UZIR PUR
2861,Monira,31,UZIR PUR
2875,Ratna,31,UZIR PUR
2939,Rabeya,31,UZIR PUR
2958,Sumi,31,UZIR PUR
3060,Reshma,31,UZIR PUR
3087,JAHADIA,31,UZIR PUR
3164,Eity bagom,31,UZIR PUR
3165,Rumisa,31,UZIR PUR
3234,Molina,31,UZIR PUR
3323,Jorina,31,UZIR PUR
3336,Sathi Begum,31,UZIR PUR
3411,Saira,31,UZIR PUR
3440,Tajmin,31,UZIR PUR
3508,Asma,31,UZIR PUR
3528,Halima,31,UZIR PUR
3529,Mitu,31,UZIR PUR
3602,Moriam,31,UZIR PUR
3603,Monira,31,UZIR PUR
3621,Peire Begom,31,UZIR PUR
3624,Rumica,31,UZIR PUR
3661,Noorjahan,31,UZIR PUR
3702,Jaieda Bagum,31,UZIR PUR
3906,Mitu Begum,31,UZIR PUR
3924,Rumisa Bagom,31,UZIR PUR
3935,Sathi Begum,31,UZIR PUR
3957,Jarna beagum,31,UZIR PUR
4002,Parvin Begum,31,UZIR PUR
4113,Taslima kahtun,31,UZIR PUR
4143,Jannat Bagom,31,UZIR PUR
4152,Halima Begum,31,UZIR PUR
4167,Shirina Begum,31,UZIR PUR
4205,Eirina Khaton,31,UZIR PUR
4256,Rahima,31,UZIR PUR
4292,Monira Begum,31,UZIR PUR
4340,Sabina Begom,31,UZIR PUR
4346,Sathi Begum,31,UZIR PUR
4363,Salina Begum,31,UZIR PUR
4437,Silpy Begum,31,UZIR PUR
4573,Ashia Begom,31,UZIR PUR
4621,Lima Khatun,31,UZIR PUR
4634,Moreum Khatun,31,UZIR PUR
4635,Sherina Begom,31,UZIR PUR
4745,Shahina,31,UZIR PUR
4885,Jharna,31,UZIR PUR
5028,Panna khatun,31,UZIR PUR
5035,Taslima kahtun,31,UZIR PUR
5341,Resma Begum,31,UZIR PUR
5475,Sukriya khatun,31,UZIR PUR
5488,MST JAHEDA BEGUM,31,UZIR PUR
5499,Shati,31,UZIR PUR
5661,Sumita Begum,31,UZIR PUR
5662,Eti Begum,31,UZIR PUR
5702,Naznin Begum,31,UZIR PUR
5877,Mrs Rehena Begum,31,UZIR PUR
1168,Samsur Nahar,33,GOBRA (FEMALE)
1822,Nomita,81,BOR KULA
1823,Lovely,81,BOR KULA
1824,Chondona,81,BOR KULA
1825,Porina,81,BOR KULA
2598,Busli,33,GOBRA (FEMALE)
2716,Panna,81,BOR KULA
2775,Zuthika,81,BOR KULA
2930,Afroza,81,BOR KULA
3266,Jahanara,81,BOR KULA
3745,Jesmin,33,GOBRA (FEMALE)
3845,Mst. Lipa Begum,33,GOBRA (FEMALE)
3873,Rasida Begum,33,GOBRA (FEMALE)
3918,Saheda Begum,33,GOBRA (FEMALE)
4071,Rikta Biswas,33,GOBRA (FEMALE)
3261,Rina,36,GOBRA BAZAR
4160,Monimala Biswas,33,GOBRA (FEMALE)
3776,Mukta,36,GOBRA BAZAR
4283,Resma,33,GOBRA (FEMALE)
4291,Supriya,33,GOBRA (FEMALE)
4406,Piary begum,33,GOBRA (FEMALE)
4426,Kalpona rani,33,GOBRA (FEMALE)
4452,Anjura Begum bagom,33,GOBRA (FEMALE)
4476,Raseda Begum,33,GOBRA (FEMALE)
4486,Rania Begum,33,GOBRA (FEMALE)
4562,Nasrin Khatun,33,GOBRA (FEMALE)
4602,Mrs.Khadija Parvin,33,GOBRA (FEMALE)
4815,Fatema Begum,33,GOBRA (FEMALE)
4996,Mst Rima khanam,33,GOBRA (FEMALE)
5091,Jumur Begum,33,GOBRA (FEMALE)
5104,Ambia Khatun,33,GOBRA (FEMALE)
5171,Momotaz begum,33,GOBRA (FEMALE)
5192,Mira Begum,33,GOBRA (FEMALE)
5220,Anjura Begum,33,GOBRA (FEMALE)
5266,Lovly Khatun,33,GOBRA (FEMALE)
5378,Mst Rima khanam,33,GOBRA (FEMALE)
5393,Mst. Rina Khatun,33,GOBRA (FEMALE)
5394,Lipi Begum,33,GOBRA (FEMALE)
1641,Rokeya,34,GOBRA BAZAR
1642,Afroja Begum,34,GOBRA BAZAR
1643,Baby,34,GOBRA BAZAR
1644,Shantana Biswas,34,GOBRA BAZAR
1645,Beauty,34,GOBRA BAZAR
1647,Sabina,34,GOBRA BAZAR
1649,Chaina,34,GOBRA BAZAR
1650,Fatema,34,GOBRA BAZAR
1651,Sahanaz,34,GOBRA BAZAR
1653,Forida,34,GOBRA BAZAR
1654,Lipi,34,GOBRA BAZAR
1656,Rubia,34,GOBRA BAZAR
1657,Chompa,34,GOBRA BAZAR
1658,Nargis,34,GOBRA BAZAR
1659,Silpi,34,GOBRA BAZAR
1660,Susoma,34,GOBRA BAZAR
2476,Jasmin,34,GOBRA BAZAR
2572,Nargish,34,GOBRA BAZAR
2684,Rita,34,GOBRA BAZAR
2744,Sahida,34,GOBRA BAZAR
2973,Lima,34,GOBRA BAZAR
3044,Depali,34,GOBRA BAZAR
3174,Feroja,34,GOBRA BAZAR
3181,Lilie Bagum,34,GOBRA BAZAR
3232,Ripa,34,GOBRA BAZAR
3315,Soniea,34,GOBRA BAZAR
3425,Rokya,34,GOBRA BAZAR
3555,Mis. Soniya,34,GOBRA BAZAR
3576,Nomita,34,GOBRA BAZAR
3611,Parvin,34,GOBRA BAZAR
3735,Anjona Rani,34,GOBRA BAZAR
3779,Mst. Nargis Begum,34,GOBRA BAZAR
3919,Jurjahan Begum,34,GOBRA BAZAR
3937,Hasna hana ( Lipy ),34,GOBRA BAZAR
3988,Jakia Sultana,34,GOBRA BAZAR
4080,Rimi begum,34,GOBRA BAZAR
4096,Saheda Begum,34,GOBRA BAZAR
4168,Shima Begum,34,GOBRA BAZAR
4193,Kakoli Begom,34,GOBRA BAZAR
4341,Chaina Begum,34,GOBRA BAZAR
4342,Kanika,34,GOBRA BAZAR
4387,Shilpi,34,GOBRA BAZAR
4410,Forida Begom,34,GOBRA BAZAR
4482,Asma,34,GOBRA BAZAR
4544,Sima Khanam,34,GOBRA BAZAR
4563,Sonia Khatun,34,GOBRA BAZAR
4656,Ripa Begum,34,GOBRA BAZAR
4746,Taposhi,34,GOBRA BAZAR
4862,Hasna Hena Lipi,34,GOBRA BAZAR
5106,Mst. Ety Khatun,34,GOBRA BAZAR
5125,Suraia Begum,34,GOBRA BAZAR
5675,Dipali Begum,34,GOBRA BAZAR
5691,Monira Begum,34,GOBRA BAZAR
5982,MUKTI RANI KUNDU,34,GOBRA BAZAR
6006,MST. PIYA BEGUM,34,GOBRA BAZAR
6104,LIMA SARDAR,34,GOBRA BAZAR
1923,Momota,35,CHANDI TALA
1924,Shika,35,CHANDI TALA
1926,Kobita,35,CHANDI TALA
1928,Azimana,35,CHANDI TALA
1929,Sweety,35,CHANDI TALA
1930,Feroza,35,CHANDI TALA
1931,Nasima,35,CHANDI TALA
1932,Shioritoy,35,CHANDI TALA
1933,Sunu Pal,35,CHANDI TALA
1934,Kakoli,35,CHANDI TALA
1935,Nilufa,35,CHANDI TALA
1938,Marufa,35,CHANDI TALA
1939,Rupali,35,CHANDI TALA
1941,Alma,35,CHANDI TALA
1942,Khurshina,35,CHANDI TALA
1943,Shahanaz,35,CHANDI TALA
1944,Laskmi,35,CHANDI TALA
1945,Sabitri Pal,35,CHANDI TALA
1946,Kulsum,35,CHANDI TALA
1947,Jarna,35,CHANDI TALA
1948,Chmili,35,CHANDI TALA
1949,Mst. Johora Khatun,35,CHANDI TALA
1950,Santa,35,CHANDI TALA
1951,Adori,35,CHANDI TALA
1952,Khadija,35,CHANDI TALA
1953,Santa,35,CHANDI TALA
1954,Fatima,35,CHANDI TALA
1956,Rikta,35,CHANDI TALA
1957,Asma,35,CHANDI TALA
1958,Nazmin,35,CHANDI TALA
1959,Adori,35,CHANDI TALA
1960,Jhorna,35,CHANDI TALA
1961,Morzina,35,CHANDI TALA
2188,Kalpana,35,CHANDI TALA
2189,Tohomina-01951-506630,35,CHANDI TALA
2452,Jahanara Begum,35,CHANDI TALA
2551,Meshari,35,CHANDI TALA
2573,Rupa,35,CHANDI TALA
2616,Saliha,35,CHANDI TALA
2718,Buity,35,CHANDI TALA
2731,Laboni,35,CHANDI TALA
2784,Parvin,35,CHANDI TALA
2886,Santa,35,CHANDI TALA
2996,Anwara,35,CHANDI TALA
3283,Sabiha,35,CHANDI TALA
3284,Nilufa,35,CHANDI TALA
3481,Reba Bagom,35,CHANDI TALA
3523,Nasrin,35,CHANDI TALA
3573,Khadija,35,CHANDI TALA
3672,sanaz,35,CHANDI TALA
3813,Bandana chakroborty,35,CHANDI TALA
3814,Anima Rani,35,CHANDI TALA
3824,Keya chakrobortty Rani,35,CHANDI TALA
3841,Bizli Rani,35,CHANDI TALA
3847,Parul Bagom,35,CHANDI TALA
3885,Lata Bagom,35,CHANDI TALA
4102,Hosnara Bagom,35,CHANDI TALA
4204,Nazmin nazmin,35,CHANDI TALA
4213,Sharjina begum,35,CHANDI TALA
4409,Nilufa Begum,35,CHANDI TALA
4520,Durga Rani Charobarty,35,CHANDI TALA
4521,Sabiha Sultana,35,CHANDI TALA
4551,Beauty Begum,35,CHANDI TALA
4571,Mst. Santa Khatun,35,CHANDI TALA
4681,Keya chakrobortty,35,CHANDI TALA
4964,Rubina,35,CHANDI TALA
5003,Kabita Begum,35,CHANDI TALA
5145,Lipi Akter,35,CHANDI TALA
5213,Taslima,35,CHANDI TALA
5233,Jesmin Khanam,35,CHANDI TALA
5317,Asma Begum,35,CHANDI TALA
5380,Rikta Begum,35,CHANDI TALA
5509,JHORNA BEGUM,35,CHANDI TALA
5567,Sabiha Sultana,35,CHANDI TALA
5594,Sadiya,35,CHANDI TALA
5629,Urmi Ro,35,CHANDI TALA
5717,Mrs Santa Khatun,35,CHANDI TALA
5805,Purnima Rani Pal,35,CHANDI TALA
6093,KEYA CHAKROBROTTY,35,CHANDI TALA
2364,Anima,36,GOBRA BAZAR
2365,Jarna,36,GOBRA BAZAR
2366,Laskmi,36,GOBRA BAZAR
2367,Maya,36,GOBRA BAZAR
2368,Jhumhur,36,GOBRA BAZAR
2369,Khama,36,GOBRA BAZAR
2370,Jakiea,36,GOBRA BAZAR
2371,Nomita,36,GOBRA BAZAR
2372,Jumur,36,GOBRA BAZAR
2373,Shahida,36,GOBRA BAZAR
2374,Sema,36,GOBRA BAZAR
2375,Chaina,36,GOBRA BAZAR
2376,Karuna,36,GOBRA BAZAR
2377,Laskmi,36,GOBRA BAZAR
2378,Nurjahan,36,GOBRA BAZAR
2379,Jamuna,36,GOBRA BAZAR
2406,Tokiron,36,GOBRA BAZAR
2407,Seyearun,36,GOBRA BAZAR
2411,Subarna Roy,36,GOBRA BAZAR
2501,Rekha Ray,36,GOBRA BAZAR
2803,Tripty,36,GOBRA BAZAR
2810,Anjira,36,GOBRA BAZAR
2927,Sheka,36,GOBRA BAZAR
2955,Lakhi,36,GOBRA BAZAR
2995,Silpi,36,GOBRA BAZAR
3067,Fuljan,36,GOBRA BAZAR
3073,MARINA,36,GOBRA BAZAR
3080,China,36,GOBRA BAZAR
3105,Monju,36,GOBRA BAZAR
3268,Parvin Begum,36,GOBRA BAZAR
3320,Adurey,36,GOBRA BAZAR
3369,Achia,36,GOBRA BAZAR
3403,Fariea,36,GOBRA BAZAR
3615,Sima Rani Biswas Sema,36,GOBRA BAZAR
3856,Molina Biswash,36,GOBRA BAZAR
3857,Salma Khanam bagom,36,GOBRA BAZAR
3981,Aleya Begum,36,GOBRA BAZAR
4172,Chonda Thakur,36,GOBRA BAZAR
4255,Pramila Sarkar,36,GOBRA BAZAR
4332,Fatema Begum,36,GOBRA BAZAR
4333,Chaina begum,36,GOBRA BAZAR
4339,Chaina,36,GOBRA BAZAR
4959,Minati rani Biswas,36,GOBRA BAZAR
5265,Arsona Biswas,36,GOBRA BAZAR
5818,Mrs Momotaj Begum,36,GOBRA BAZAR
6090,MOLINA BISWAS,36,GOBRA BAZAR
1172,Mst. Rashida Begum,37,NELO PARA
1173,Ruksana,37,NELO PARA
1174,Archona,37,NELO PARA
1175,Julufa,37,NELO PARA
1178,Suva,37,NELO PARA
1179,Asa Lata,37,NELO PARA
1180,Nargis,37,NELO PARA
1181,Minara,37,NELO PARA
1182,Eitika,37,NELO PARA
1184,Hosne Ara,37,NELO PARA
1185,Bulu,37,NELO PARA
1186,Vanu,37,NELO PARA
1187,Chadni,37,NELO PARA
2445,Tejara,37,NELO PARA
2496,Shapna,37,NELO PARA
2559,Dulali,37,NELO PARA
2574,Dalaliy,37,NELO PARA
2576,Jakeya,37,NELO PARA
2998,Tumpa,37,NELO PARA
3018,Santi,37,NELO PARA
3156,Reaksona,37,NELO PARA
3178,Keya,37,NELO PARA
3262,Asma,37,NELO PARA
3306,Orsona,37,NELO PARA
3389,Nice,37,NELO PARA
3443,Nurnahar Begum,37,NELO PARA
3635,Ruma,37,NELO PARA
3638,Eity,37,NELO PARA
3639,Amiron,37,NELO PARA
3640,Morjina,37,NELO PARA
3688,Habiba Khatun,37,NELO PARA
3768,Nila Begum,37,NELO PARA
3849,Sulata biswas,37,NELO PARA
3934,Keya Begum,37,NELO PARA
3972,MS. LAKSINA KHATUN,37,NELO PARA
3975,Chandana Biswas,37,NELO PARA
4006,Kanson biswas,37,NELO PARA
4042,Jorina Bagom,37,NELO PARA
4120,Habijan,37,NELO PARA
4263,Swapna Datta,37,NELO PARA
4306,Fatema,37,NELO PARA
4313,Jakia Sultana,37,NELO PARA
4314,Hosnaara Begum,37,NELO PARA
4348,Krishna Rani,37,NELO PARA
4375,Sapna rani,37,NELO PARA
4388,Eitika Biswas,37,NELO PARA
4389,Ripa Begom,37,NELO PARA
4505,Aklima,37,NELO PARA
4540,Pronita Biswas,37,NELO PARA
4565,Taslima khatun,37,NELO PARA
4578,Etika sannyal,37,NELO PARA
4683,Rita Begum,37,NELO PARA
4714,Chadni,37,NELO PARA
4818,Habiba Khatun,37,NELO PARA
4832,Sinsa,37,NELO PARA
4833,Ripa Begum,37,NELO PARA
4886,Hafiza,37,NELO PARA
4913,Minara Begum,37,NELO PARA
4962,Mita Begum,37,NELO PARA
4963,Mst anjira begum,37,NELO PARA
5006,Rashida,37,NELO PARA
5063,Sabina Begum,37,NELO PARA
5147,Chandana Biswas,37,NELO PARA
5156,Mst. Rubina Khatun,37,NELO PARA
5188,Jalakha Bagum,37,NELO PARA
5352,MST. HAZERA KHATUN MUNNI,37,NELO PARA
5376,Mst Panila Begum,37,NELO PARA
5433,Salina Begu,37,NELO PARA
5568,Morzina,37,NELO PARA
5815,Lipika Khatun,37,NELO PARA
5823,Mst Rumana,37,NELO PARA
1439,Shamoli Biswas,38,SHOL PUR
1440,Nupur Biswas,38,SHOL PUR
1441,Kanka Rani,38,SHOL PUR
1442,Juthika,38,SHOL PUR
1443,Sorosoty Biswas,38,SHOL PUR
1444,Rupali Biswas,38,SHOL PUR
1446,Shily Biswas,38,SHOL PUR
1447,Monu Rani,38,SHOL PUR
1448,Chandana Biswas,38,SHOL PUR
1449,Urmila Biswas,38,SHOL PUR
1454,Rashida,41,SHOL PUR
1457,Mrina,38,SHOL PUR
2912,Dalaly Biswas,38,SHOL PUR
3207,MARINA,38,SHOL PUR
3351,Puja Biswas,38,SHOL PUR
3360,Shilpy,38,SHOL PUR
3398,Sultana,38,SHOL PUR
3430,Sorosoti Biswas,38,SHOL PUR
3515,Gita,38,SHOL PUR
3517,Seba,38,SHOL PUR
3518,Sopna Rani Ray,38,SHOL PUR
3519,Depali-017621144402,38,SHOL PUR
3520,Konka,38,SHOL PUR
4278,Konka Odhikari,38,SHOL PUR
4600,Goury,38,SHOL PUR
4671,Munjolika,38,SHOL PUR
4715,Mala Rani,38,SHOL PUR
4789,Shamoli Biswas,38,SHOL PUR
4899,Tulu Rani,38,SHOL PUR
4908,Sheuli Rani Bala,38,SHOL PUR
4993,Jutika,38,SHOL PUR
5077,Minoti Mollik,38,SHOL PUR
5122,Puja Biswas,38,SHOL PUR
5338,Srabonti Biswas,38,SHOL PUR
5531,Suborna Sarkar,38,SHOL PUR
5649,Sangita Ray,38,SHOL PUR
5800,Pankoj Kumar Biswah,38,SHOL PUR
1450,Mazida,41,SHOL PUR
1451,Shiuly,41,SHOL PUR
1452,Shiuly,41,SHOL PUR
1453,Sefali,41,SHOL PUR
1455,Hira,41,SHOL PUR
1456,Puthul,41,SHOL PUR
1458,Neva Rani,41,SHOL PUR
1459,Salma,41,SHOL PUR
1461,Jony,41,SHOL PUR
1462,Rikta,41,SHOL PUR
1463,Shiply,41,SHOL PUR
2544,Rima,41,SHOL PUR
2560,Shampha,41,SHOL PUR
2650,Nasrin,41,SHOL PUR
2673,Jahanara,41,SHOL PUR
2714,Sucitra,41,SHOL PUR
2796,Sampa,41,SHOL PUR
2891,Latifa Begum,41,SHOL PUR
2898,Jharna Bisws,41,SHOL PUR
2934,Kakoly,41,SHOL PUR
2997,Laskmi,41,SHOL PUR
3022,Menaksi,41,SHOL PUR
3023,Itika Biswas,41,SHOL PUR
3141,Shulie,41,SHOL PUR
3246,Seba,41,SHOL PUR
3247,Bila Rani,41,SHOL PUR
3254,Aurchona,41,SHOL PUR
3418,Afroja,41,SHOL PUR
3476,Shanara,41,SHOL PUR
3509,Parul,41,SHOL PUR
3512,Rasida,41,SHOL PUR
3613,Monira,41,SHOL PUR
3648,Hasina,41,SHOL PUR
3808,Rasida Begum,41,SHOL PUR
3838,Molina rani,41,SHOL PUR
3902,Minakkhi Rani Biswas,41,SHOL PUR
3909,Hira rani biswas,41,SHOL PUR
3928,Rimoni Bagom,41,SHOL PUR
4015,Kajol Raka,41,SHOL PUR
4104,Rejiea Bagom,41,SHOL PUR
4171,Sucitra Ray,41,SHOL PUR
4188,Mukta begum,41,SHOL PUR
4195,Condona Dhor,41,SHOL PUR
4419,Mst. Kazol Rekha,41,SHOL PUR
4607,Abida Begom,41,SHOL PUR
4608,Reaiy,41,SHOL PUR
4653,Marufa,41,SHOL PUR
4697,Rashida Begum,41,SHOL PUR
4733,Mst Rina Begum,41,SHOL PUR
4757,Hasina begum,41,SHOL PUR
4802,Marufa,41,SHOL PUR
4842,Rashada,41,SHOL PUR
4965,Mst Kalpona,41,SHOL PUR
4989,YESMIN ARA,41,SHOL PUR
4990,Rahima,41,SHOL PUR
5000,Rikta,41,SHOL PUR
5042,Minara Begum,41,SHOL PUR
5066,Moriom Begum,41,SHOL PUR
5087,Mazeda Khanom,41,SHOL PUR
5117,Sabita,41,SHOL PUR
5163,Bilkis Khanam,41,SHOL PUR
5306,Mst. Rokeya Begum,41,SHOL PUR
5524,Sumaia,41,SHOL PUR
5537,Mst. Rokeya Begum,41,SHOL PUR
5513,Nupur,246,SOLPUR (FEMALE)
5546,Rotna,41,SHOL PUR
5560,Mst. Jesmina Begum,41,SHOL PUR
5585,Mst. Parul Begum,41,SHOL PUR
5589,Lipi Begum,41,SHOL PUR
5597,Mst. Sarmin Akter,41,SHOL PUR
5600,MAIMUNA KHATUN,41,SHOL PUR
5607,Mst. Murshida Begum,41,SHOL PUR
5644,Azma Begum,41,SHOL PUR
5679,Rikta,41,SHOL PUR
5724,Rashida Begum,41,SHOL PUR
5726,Md Abu Talha,41,SHOL PUR
5750,Safia Aktar,41,SHOL PUR
5770,Rashina Begum,41,SHOL PUR
5822,Mrs Rokeya Begum,41,SHOL PUR
5907,Resma Khanom,41,SHOL PUR
5950,Mst. Sadia Khatun,41,SHOL PUR
5951,JOYSHNA BEGUM,41,SHOL PUR
5953,SHAHIDA BEGUM,41,SHOL PUR
5979,NADHERA AKTUR,41,SHOL PUR
5997,SUMAYA PARVIN,41,SHOL PUR
6047,MST. HARINA BEGUM,41,SHOL PUR
6048,TUMPA KHANUM,41,SHOL PUR
6076,Mst. Kazol Rekha,41,SHOL PUR
6097,AKTARI BEGUM,41,SHOL PUR
2192,Aloka,42,MALOPARA
2193,Shekha,42,MALOPARA
2230,Anima-0137740540,42,MALOPARA
2231,Dipty,42,MALOPARA
2233,Rina,42,MALOPARA
2235,Sekha,42,MALOPARA
2236,Chaina,42,MALOPARA
2237,Sarosoty,42,MALOPARA
2300,Sumi,42,MALOPARA
2301,Durga,42,MALOPARA
2302,Monju Rani,42,MALOPARA
2303,Lipi Khatun,42,MALOPARA
2304,Anjona,42,MALOPARA
2305,Kobita,42,MALOPARA
2306,Suborna,42,MALOPARA
2309,Sema,42,MALOPARA
2405,Anowara,42,MALOPARA
2457,Jahida,42,MALOPARA
2493,Shamoy,42,MALOPARA
2512,Hesnara,42,MALOPARA
2528,Saniya,42,MALOPARA
2604,Rajina,42,MALOPARA
2797,Hena,42,MALOPARA
2965,Rabeya,42,MALOPARA
2974,Akhi,42,MALOPARA
3047,Lipa,42,MALOPARA
3048,Hasira,42,MALOPARA
3049,Taposi,42,MALOPARA
3050,Snompa,42,MALOPARA
3063,Bonani,42,MALOPARA
3148,Mitu Saha,42,MALOPARA
3228,Sulata,42,MALOPARA
3236,Sumie,42,MALOPARA
3277,Minote,42,MALOPARA
3304,Sabina Begum,42,MALOPARA
3339,Khadiga,42,MALOPARA
3340,Moroum,42,MALOPARA
3397,Soniea,42,MALOPARA
3412,Bilkis,42,MALOPARA
3586,Liza Bagum,42,MALOPARA
3676,Rohima,42,MALOPARA
3693,Jaieda Bagum,42,MALOPARA
3703,Popy Rani,42,MALOPARA
3777,Supria -011928849369,42,MALOPARA
3851,Paia Bagom,42,MALOPARA
3852,Tithi Sikder,42,MALOPARA
3865,Nira Ray,42,MALOPARA
3877,Bina rani mukarji,42,MALOPARA
3894,Lipika Rani,42,MALOPARA
3962,Kakoli Bagom,42,MALOPARA
3970,Shilpy Kormokar,42,MALOPARA
3989,Rokeya Bagom,42,MALOPARA
4116,Rigiya Bagom,42,MALOPARA
4277,Tuhinaj begom,42,MALOPARA
4322,Lipi begom,42,MALOPARA
4347,Samapity Rani,42,MALOPARA
4383,Tara Begom,42,MALOPARA
4401,Rokeya Begom,42,MALOPARA
4402,Rima Begom,42,MALOPARA
4403,Meharun Khatun,42,MALOPARA
4413,Jone begum,42,MALOPARA
4428,REHENA,42,MALOPARA
4458,Lipi Khatun,42,MALOPARA
4527,Mst. Ramoni Khatun,42,MALOPARA
4541,Sunita Roy,42,MALOPARA
4543,RINA AKTER,42,MALOPARA
4594,Mita Beugum,42,MALOPARA
4604,Lima,42,MALOPARA
4624,Lima Khanom,42,MALOPARA
4651,Nargis Begom,42,MALOPARA
4695,Tripti rani saha,42,MALOPARA
4701,Sahina Begum,42,MALOPARA
4724,Sagorika,42,MALOPARA
4780,Jahanara,42,MALOPARA
4896,Mamtaj Begum,42,MALOPARA
4907,Swampa,42,MALOPARA
4914,Hira,42,MALOPARA
4976,Swarashwati Saha,42,MALOPARA
4998,Rima,42,MALOPARA
5007,Sati,42,MALOPARA
5013,Parboty Sikder,42,MALOPARA
5032,Moyna Begum,42,MALOPARA
5047,Meherun Khatun,42,MALOPARA
5054,Fuli Begum,42,MALOPARA
5082,Mst. Shirina Begum,42,MALOPARA
5096,Shirina,42,MALOPARA
5102,SIMA KHATUN,42,MALOPARA
5115,Farjana,42,MALOPARA
5208,Toma,42,MALOPARA
5235,Akhi Begum,42,MALOPARA
5272,Monira Khatun,42,MALOPARA
5287,Monjula,42,MALOPARA
5318,Sumi Khanam,42,MALOPARA
5427,Mitu Saha,42,MALOPARA
5432,Sabina Khatu,42,MALOPARA
5451,Mst. Mahfuja Khatun,42,MALOPARA
5464,Kanika Biswas,42,MALOPARA
5480,Hira Begum,42,MALOPARA
5481,DULIFA BEGUM,42,MALOPARA
5569,Sagarika,42,MALOPARA
5668,Meherun Khatun,42,MALOPARA
5682,Rita Begum,42,MALOPARA
5705,Tuhinaj begom,42,MALOPARA
5745,Shahanaj Parvin,42,MALOPARA
5804,Sahina Begum,42,MALOPARA
5855,Mafuza Akter Lima,42,MALOPARA
6074,SAHINA BEGUM,42,MALOPARA
1030,Porishkar Malaker,43,BON KHALISHA KHALI
1031,Rabita biswas,43,BON KHALISHA KHALI
1032,Momota ray,43,BON KHALISHA KHALI
1033,Bishaka,43,BON KHALISHA KHALI
1034,Subarna malaker,43,BON KHALISHA KHALI
1035,Eitika,43,BON KHALISHA KHALI
1037,Palashi,43,BON KHALISHA KHALI
1038,Lipika,43,BON KHALISHA KHALI
1039,Sujata,43,BON KHALISHA KHALI
1040,Nomita Malaker,43,BON KHALISHA KHALI
1041,Shopna,43,BON KHALISHA KHALI
1042,Sumitra,43,BON KHALISHA KHALI
1043,Sree Moti,43,BON KHALISHA KHALI
1044,Saneo Lata,43,BON KHALISHA KHALI
1045,Jarna,43,BON KHALISHA KHALI
1046,Alomoti,43,BON KHALISHA KHALI
1047,Laxmi Ray,43,BON KHALISHA KHALI
1048,Sunita biswas,43,BON KHALISHA KHALI
2603,Rani,43,BON KHALISHA KHALI
2626,Kajal,43,BON KHALISHA KHALI
2819,Punima,43,BON KHALISHA KHALI
2943,Shoroshoty,43,BON KHALISHA KHALI
2986,Asa,43,BON KHALISHA KHALI
3037,kanon bala,43,BON KHALISHA KHALI
3356,Jhorna,43,BON KHALISHA KHALI
3448,Purnima,43,BON KHALISHA KHALI
3787,Purnima Biswas,43,BON KHALISHA KHALI
4177,Cobi Rani,43,BON KHALISHA KHALI
4178,Jharna malaker 0 0,43,BON KHALISHA KHALI
4192,Promila Rani,43,BON KHALISHA KHALI
4202,Indra,43,BON KHALISHA KHALI
4463,Varoti Malakar,43,BON KHALISHA KHALI
4535,Palashi,43,BON KHALISHA KHALI
4717,Sundari Mallick,43,BON KHALISHA KHALI
4718,Sanchita Ray,43,BON KHALISHA KHALI
5111,Subarna Malaker,43,BON KHALISHA KHALI
5131,Palashi,43,BON KHALISHA KHALI
5137,Rani Malaker,43,BON KHALISHA KHALI
5154,Maloti Malaker,43,BON KHALISHA KHALI
5389,Nomita Malakar,43,BON KHALISHA KHALI
2163,Urmila,44,RAM NAGAR
2164,Depali,44,RAM NAGAR
2165,Suchitra Biswas,44,RAM NAGAR
2166,Shila,44,RAM NAGAR
2167,Maloti,44,RAM NAGAR
2168,Kali Tara,44,RAM NAGAR
2171,Anno Lata,44,RAM NAGAR
2172,Debola,44,RAM NAGAR
2173,Tapoti Pal,44,RAM NAGAR
2174,Buty,44,RAM NAGAR
2177,Sonda,44,RAM NAGAR
2179,Somapti,44,RAM NAGAR
2181,Laboni,44,RAM NAGAR
2182,Boishaki,44,RAM NAGAR
2183,Sandhya Biswas,44,RAM NAGAR
2516,Nilima,44,RAM NAGAR
2703,Sondha,44,RAM NAGAR
2908,Bule Biswash,44,RAM NAGAR
2909,Sarowshoty,44,RAM NAGAR
2952,Madhobi,44,RAM NAGAR
3004,Tonema,44,RAM NAGAR
3032,Champa,44,RAM NAGAR
3122,Ash Bishas,44,RAM NAGAR
3233,Nilima,44,RAM NAGAR
3258,Suma,44,RAM NAGAR
3434,Kolpona Biswash,44,RAM NAGAR
3439,Arekiho,44,RAM NAGAR
3455,Bulu,44,RAM NAGAR
3546,Sonily,44,RAM NAGAR
3674,sonda Das,44,RAM NAGAR
3925,Unnoti Sorker,44,RAM NAGAR
3954,Sima das,44,RAM NAGAR
3984,Joshoda Sarker,44,RAM NAGAR
3985,Shrodha Bishas,44,RAM NAGAR
4067,Rama Rani Dam,44,RAM NAGAR
4078,Mithu biswas,44,RAM NAGAR
4290,Nilima Biswas,44,RAM NAGAR
4466,Maloti Biswas,44,RAM NAGAR
4477,Madhaby Basu,44,RAM NAGAR
4751,Josna Rani,44,RAM NAGAR
4783,Rekha Biswas,44,RAM NAGAR
4784,Bulu,44,RAM NAGAR
4827,Unnoti,44,RAM NAGAR
4946,Sheba,44,RAM NAGAR
5037,manka biswas,44,RAM NAGAR
5152,MITA BISWAS,44,RAM NAGAR
5608,Hemlata Biswas,44,RAM NAGAR
5799,Manaka Biswash,44,RAM NAGAR
5853,Sejuti Biswash,44,RAM NAGAR
5959,Itika Sarkar,44,RAM NAGAR
5972,DEPALY BASU,44,RAM NAGAR
6095,TOPTE PAL,44,RAM NAGAR
1001,Trishna,45,MUSURIA
1007,Swapna Roy,45,MUSURIA
2830,Jointi,45,MUSURIA
1226,Poly,45,MUSURIA
1227,Urmila,45,MUSURIA
1228,Chandra,45,MUSURIA
1229,Sumitra,45,MUSURIA
1230,Jointy,45,MUSURIA
1232,Moni,45,MUSURIA
1233,Jarna,45,MUSURIA
1234,Dulali,45,MUSURIA
1235,Tula,45,MUSURIA
1236,Lily,45,MUSURIA
1237,Moni Mala,45,MUSURIA
1238,Alo,45,MUSURIA
1239,Sondha,45,MUSURIA
1240,Jotno Rani,45,MUSURIA
1241,Benda,45,MUSURIA
1242,Ratna,45,MUSURIA
1243,Bonolata,45,MUSURIA
1244,Chandana,45,MUSURIA
1245,Bondhana,45,MUSURIA
1246,Luxmi,45,MUSURIA
1247,Durga,45,MUSURIA
1248,Binota,45,MUSURIA
1249,Sukla,45,MUSURIA
1250,Bishnu,45,MUSURIA
1252,Josna,45,MUSURIA
2529,Bani,45,MUSURIA
2622,Dipty,45,MUSURIA
2694,Sudhuri,45,MUSURIA
2764,kalpana,45,MUSURIA
2849,Protiva,45,MUSURIA
2860,Shilphy,45,MUSURIA
2904,Cumky,45,MUSURIA
2926,Sriti,45,MUSURIA
3054,Ranu,45,MUSURIA
3075,TANDRA ADHIKARI-01787-760925,45,MUSURIA
3099,Konoklota,45,MUSURIA
3129,Goutom,245,MUSURIA
3204,Sathi Kundu,45,MUSURIA
3209,Santa,45,MUSURIA
3217,Protiva Haldar,45,MUSURIA
3226,Dipali,45,MUSURIA
3256,Laxime,45,MUSURIA
3263,Protap,45,MUSURIA
3294,Sonile,45,MUSURIA
3312,Minote,45,MUSURIA
3345,Regia,45,MUSURIA
3447,Suchanda,45,MUSURIA
3477,Lovely,45,MUSURIA
3493,Pinki,45,MUSURIA
3589,Silpy,45,MUSURIA
3610,Madhure,45,MUSURIA
3785,Monjila bala,45,MUSURIA
3836,Pinki rani,45,MUSURIA
3855,Shipra Mollik,45,MUSURIA
4039,Joti Rani,45,MUSURIA
4040,Uttora Rani,45,MUSURIA
4041,Sukla Rani,45,MUSURIA
4046,Sagorika Mojumder,45,MUSURIA
4199,Rupa Biswas,45,MUSURIA
4316,Mukta mollik,45,MUSURIA
4352,Anima Sarker,45,MUSURIA
4379,Akhi,45,MUSURIA
4380,Madhury,45,MUSURIA
4393,Sukla Golder,45,MUSURIA
4449,Doly rani mitro,45,MUSURIA
4450,Parboti biswas,45,MUSURIA
4451,Provati Rani,45,MUSURIA
4462,Sima Biswas,45,MUSURIA
4588,Shilpi Bissas,45,MUSURIA
4589,Antara Rani Kundu,45,MUSURIA
4650,Shapna Majumdar,45,MUSURIA
4874,Chaitali,45,MUSURIA
4891,Beauty,45,MUSURIA
4917,Mitali,45,MUSURIA
4918,Shanchita Biswash,45,MUSURIA
4919,Hashi Goldar,45,MUSURIA
4931,Sebika,45,MUSURIA
4944,Tripti,45,MUSURIA
4971,Sumitra Biswas,45,MUSURIA
5056,Minoti Rani,45,MUSURIA
5078,Sweety,45,MUSURIA
5228,Dipti Rani Kundu,45,MUSURIA
5273,Nipa Rani Kundu,45,MUSURIA
5414,Beauty Monda,45,MUSURIA
5420,Chumke Biswas,45,MUSURIA
5495,Shilpi,45,MUSURIA
5497,Pusmita,45,MUSURIA
5512,Chandraboti,45,MUSURIA
5610,Swapna Biswas,45,MUSURIA
5689,Anuradha Ray,45,MUSURIA
5690,Ranjita Biswash,45,MUSURIA
5733,Doly Biswas,45,MUSURIA
5734,Chaitali Biswash,45,MUSURIA
5735,Mitali Odhikari,45,MUSURIA
5751,Chanda Biswash,45,MUSURIA
5829,Sunita Rani Biswash,45,MUSURIA
5850,Ratna Adhikari,45,MUSURIA
6098,Soniya Biswas,45,MUSURIA
1008,Ranuka,46,AGDIA
1009,Chadona,46,AGDIA
1011,Shanti,46,AGDIA
1012,Kakoli,46,AGDIA
1013,Chandona,46,AGDIA
1014,Nasima,46,AGDIA
1017,Sefali,46,AGDIA
1018,Dulali,46,AGDIA
1019,Champa,46,AGDIA
1020,Afroza,46,AGDIA
1021,Betanu,46,AGDIA
1023,Puti,46,AGDIA
1025,Sobita,46,AGDIA
1027,Ferdousi,46,AGDIA
1029,Laky,46,AGDIA
2565,Etika,46,AGDIA
2756,Josna,46,AGDIA
2785,Ripa Malakar,46,AGDIA
2805,Sakina,46,AGDIA
2850,Supria,46,AGDIA
2931,Kakoly,46,AGDIA
2980,Rikta,46,AGDIA
3210,Sonile,46,AGDIA
3219,varoti,46,AGDIA
3314,Shila,46,AGDIA
3410,Anjona,46,AGDIA
1056,Mala,87,AGDIA
1058,Anju,87,AGDIA
1059,Menoti,87,AGDIA
1254,Rupali,87,AGDIA
2664,Shefaly,87,AGDIA
2843,Minari,87,AGDIA
3673,Dipali,46,AGDIA
3731,Mita Bagom,46,AGDIA
3871,Etika Malakar,46,AGDIA
5014,Kana Losker,46,AGDIA
2149,Nirmola,49,UTTOR KHALISHA KHALI
2150,Nisha,49,UTTOR KHALISHA KHALI
2151,Moni Mala,49,UTTOR KHALISHA KHALI
2152,Anita,49,UTTOR KHALISHA KHALI
2153,Sonali,49,UTTOR KHALISHA KHALI
2155,Khuku Bala,49,UTTOR KHALISHA KHALI
2156,Ujjala Mollik,49,UTTOR KHALISHA KHALI
2157,Tumpa,49,UTTOR KHALISHA KHALI
2158,Sonali Poddar,49,UTTOR KHALISHA KHALI
2159,Palashi,49,UTTOR KHALISHA KHALI
2160,Tripti Pathok,49,UTTOR KHALISHA KHALI
2161,Mita Rani Biswas,49,UTTOR KHALISHA KHALI
2162,Unnoti,49,UTTOR KHALISHA KHALI
2669,Archona,49,UTTOR KHALISHA KHALI
3162,Chandana Bala,49,UTTOR KHALISHA KHALI
3163,Auporna Bala,49,UTTOR KHALISHA KHALI
3212,Suktia Paul,49,UTTOR KHALISHA KHALI
3333,Lakie,49,UTTOR KHALISHA KHALI
3362,Shiminty,49,UTTOR KHALISHA KHALI
3438,Sampa,49,UTTOR KHALISHA KHALI
3454,Joshna Rani,49,UTTOR KHALISHA KHALI
3507,Sulota,49,UTTOR KHALISHA KHALI
3521,Mili,49,UTTOR KHALISHA KHALI
3584,Kajol,49,UTTOR KHALISHA KHALI
3585,Joyshree,49,UTTOR KHALISHA KHALI
3775,Sabitri Rani,49,UTTOR KHALISHA KHALI
3832,Amdani Bala,49,UTTOR KHALISHA KHALI
3881,Rakha rani bala,49,UTTOR KHALISHA KHALI
3917,Rina Podder,49,UTTOR KHALISHA KHALI
4049,Laxime Rani,49,UTTOR KHALISHA KHALI
4063,Akhi Biswas,49,UTTOR KHALISHA KHALI
4066,Sima Bala,49,UTTOR KHALISHA KHALI
4068,Khoma Rani,49,UTTOR KHALISHA KHALI
4246,Archana Biswas,49,UTTOR KHALISHA KHALI
4509,Tumpa Biswas,49,UTTOR KHALISHA KHALI
4845,Kalyani Biswas,49,UTTOR KHALISHA KHALI
4905,CHAMPA,49,UTTOR KHALISHA KHALI
5201,Akhi Biswas,49,UTTOR KHALISHA KHALI
5301,Akhi Biswas,49,UTTOR KHALISHA KHALI
5419,Lucky Rani Mondal,49,UTTOR KHALISHA KHALI
5532,Rupali,49,UTTOR KHALISHA KHALI
5924,SIMANTI BALA,49,UTTOR KHALISHA KHALI
1464,Sabina,51,SHIMULIEA
1465,Murshida,51,SHIMULIEA
1466,Hasina,51,SHIMULIEA
1468,Samira,51,SHIMULIEA
1469,Rokyea,51,SHIMULIEA
1471,Aboda,51,SHIMULIEA
1472,Nurjahan,51,SHIMULIEA
1473,Sufiea,51,SHIMULIEA
1474,Anjira,51,SHIMULIEA
1475,Sajida,51,SHIMULIEA
1476,Nelufa,51,SHIMULIEA
1477,Nazma,51,SHIMULIEA
1484,Salina,51,SHIMULIEA
1495,Salma,51,SHIMULIEA
1498,Sufiea,51,SHIMULIEA
1516,Shanara Begum,51,SHIMULIEA
2532,Tamanna,51,SHIMULIEA
2533,Lavly,51,SHIMULIEA
2546,Lavily,51,SHIMULIEA
2577,Poli,51,SHIMULIEA
2588,Khadija,51,SHIMULIEA
2678,Bilkis,51,SHIMULIEA
2746,Aloka,51,SHIMULIEA
2780,Nadira,51,SHIMULIEA
3104,Purnima,51,SHIMULIEA
3216,Tohina,51,SHIMULIEA
1483,Monira,52,SHIMULIEA
3275,Prya,51,SHIMULIEA
3276,sati,51,SHIMULIEA
3419,Rina,51,SHIMULIEA
3460,Ambia,51,SHIMULIEA
3466,Khayja,51,SHIMULIEA
3541,Ambia,51,SHIMULIEA
3544,Asma,51,SHIMULIEA
3556,Morjina,51,SHIMULIEA
3609,Hasina,51,SHIMULIEA
3620,Tamanna Begum,51,SHIMULIEA
3670,Salma,51,SHIMULIEA
3681,Farida Bagom,51,SHIMULIEA
3757,Salma Begum,51,SHIMULIEA
3931,Mina Bagom,51,SHIMULIEA
3977,Nilufa Bagom,51,SHIMULIEA
3978,Monira Bagom,51,SHIMULIEA
4077,Lima Bagom,51,SHIMULIEA
4131,Mahamuda Aktar,51,SHIMULIEA
4162,Hasi Begum,51,SHIMULIEA
4323,Selina Begum,51,SHIMULIEA
4327,Momotaj Begom,51,SHIMULIEA
4378,Nargis,51,SHIMULIEA
4692,Samima,51,SHIMULIEA
4728,Sharmin,51,SHIMULIEA
4741,Hamida-01953902616,51,SHIMULIEA
4777,Hasi,51,SHIMULIEA
4799,Reksona,51,SHIMULIEA
4812,Julia,51,SHIMULIEA
4817,Sahanaz,51,SHIMULIEA
4890,poli,51,SHIMULIEA
4910,Janota,51,SHIMULIEA
4938,Urmi khatun,51,SHIMULIEA
4997,HASINA BEGUM,51,SHIMULIEA
5050,Tuhina Begum,51,SHIMULIEA
5079,Popi Khatun,51,SHIMULIEA
5088,Padma Khatun,51,SHIMULIEA
5138,Majeda Khatun,51,SHIMULIEA
5185,Sweet,51,SHIMULIEA
5274,Anjona Paul,51,SHIMULIEA
5285,JANNATI KHANOM,51,SHIMULIEA
5383,Julia,51,SHIMULIEA
5388,Sarmin Sultana,51,SHIMULIEA
5470,Sufia begu,51,SHIMULIEA
5474,Cameli Begum,51,SHIMULIEA
5498,Rima Begum,51,SHIMULIEA
5501,Lipi Begum,51,SHIMULIEA
5525,Tania Khatun,51,SHIMULIEA
5530,Kazi Tahera Begum,51,SHIMULIEA
5539,MERY KHATUN,51,SHIMULIEA
5544,JAHANARA AKTAR,51,SHIMULIEA
5548,RIYA KHATUN,51,SHIMULIEA
5563,Bab,51,SHIMULIEA
5577,Tamanna,51,SHIMULIEA
5586,Sharifa Khatun,51,SHIMULIEA
5596,Rizia Khanam,51,SHIMULIEA
5623,Ms. Hosne Ara Begum,51,SHIMULIEA
5628,Pali Begum,51,SHIMULIEA
5657,Narayan Biswas,51,SHIMULIEA
5659,Mimi Akter,51,SHIMULIEA
5670,Sabina Begum,51,SHIMULIEA
5677,Bilkis Begum,51,SHIMULIEA
5692,Hamida Begum,51,SHIMULIEA
5723,Najma Khatun,51,SHIMULIEA
5757,Murshida Begum,51,SHIMULIEA
5769,Tamanna Begum,51,SHIMULIEA
5778,Alamgir,51,SHIMULIEA
5790,Sonia Khatun,51,SHIMULIEA
5801,Mahamuda Aktar,51,SHIMULIEA
5960,SHABNAJ RAHMAN,51,SHIMULIEA
5983,REKSONA BEGUM,51,SHIMULIEA
6040,MERY KHATUN,51,SHIMULIEA
6070,KHADIZA BEGUM,51,SHIMULIEA
6077,NARAYAN BISWAS,51,SHIMULIEA
1478,Nuri,52,SHIMULIEA
1479,Nargis,52,SHIMULIEA
1480,Hasina,52,SHIMULIEA
1481,Shahina,52,SHIMULIEA
1482,Shanjida Easmin Beauty,52,SHIMULIEA
1485,Sema,52,SHIMULIEA
1487,Abiron,52,SHIMULIEA
1488,Nurjahan Begum,52,SHIMULIEA
1489,Shohagi Begum,52,SHIMULIEA
1490,Shakia,52,SHIMULIEA
1491,Jarna,52,SHIMULIEA
1493,Daliya,52,SHIMULIEA
1494,Taslima Begum,52,SHIMULIEA
1496,Boro Bibi,52,SHIMULIEA
1497,Taslima,52,SHIMULIEA
1499,Jarna,52,SHIMULIEA
1500,Sanjida,52,SHIMULIEA
1504,Hosniara,52,SHIMULIEA
1505,Roxona,52,SHIMULIEA
1506,Mst. Sarifa Khatun,52,SHIMULIEA
1507,Jahida,52,SHIMULIEA
1508,Rebakya,52,SHIMULIEA
1510,Hasna,52,SHIMULIEA
1511,Sarmin,52,SHIMULIEA
1512,Sarmina,52,SHIMULIEA
1513,Nasrin,52,SHIMULIEA
1514,Sufia,52,SHIMULIEA
1515,Hena Parvin,52,SHIMULIEA
1608,Nurjahan,52,SHIMULIEA
2416,Roney,52,SHIMULIEA
2486,Jumur,52,SHIMULIEA
2522,Ayton,52,SHIMULIEA
2534,Habiba,52,SHIMULIEA
2535,Shimu,52,SHIMULIEA
2536,Vanu,52,SHIMULIEA
2587,Muslima,52,SHIMULIEA
2643,Nargish,52,SHIMULIEA
2755,Jasmen,52,SHIMULIEA
2879,Faridha,52,SHIMULIEA
3311,Nargis Begum,52,SHIMULIEA
3384,Chaina,52,SHIMULIEA
3431,Taslima,52,SHIMULIEA
3432,Anjura,52,SHIMULIEA
3494,Nargis,52,SHIMULIEA
3495,Muslima,52,SHIMULIEA
3496,Rahila,52,SHIMULIEA
3501,compa,52,SHIMULIEA
3567,Hera,52,SHIMULIEA
3619,Lima,52,SHIMULIEA
3622,Jarina,52,SHIMULIEA
3623,Shumi,52,SHIMULIEA
3656,Muslima bagum,52,SHIMULIEA
3671,Bobi Sultana,52,SHIMULIEA
3680,Salma Katon,52,SHIMULIEA
3709,Shahina,52,SHIMULIEA
3758,Liaily Bagom,52,SHIMULIEA
3802,Shimu Bagom,52,SHIMULIEA
3858,Marufa Begom,52,SHIMULIEA
3942,Jhadia Bagom,52,SHIMULIEA
4047,Biglie Bagom,52,SHIMULIEA
4156,Nurjahan Begom,52,SHIMULIEA
4207,Nasima Begom,52,SHIMULIEA
4264,Khadija Begom,52,SHIMULIEA
4317,Nasrin,52,SHIMULIEA
4366,Roni Khanom,52,SHIMULIEA
4367,Roksana Begom,52,SHIMULIEA
4515,Shema Begoum,52,SHIMULIEA
4590,Sompa Begum,52,SHIMULIEA
4659,Mahima,52,SHIMULIEA
4672,Nazma,52,SHIMULIEA
4711,Resma,52,SHIMULIEA
4760,Champa,52,SHIMULIEA
4778,Khadija,52,SHIMULIEA
4901,Nargis,52,SHIMULIEA
4926,Rahima,52,SHIMULIEA
4992,Shahina Begum,52,SHIMULIEA
5110,Sajeda Begum,52,SHIMULIEA
5118,Mahima,52,SHIMULIEA
5195,Afrin Akter Poli,52,SHIMULIEA
5256,Mst.shapna Begum,52,SHIMULIEA
5257,Jarna Begum,52,SHIMULIEA
5264,Nasima begum,52,SHIMULIEA
5268,Mira Begum,52,SHIMULIEA
5316,Sefali Bagum,52,SHIMULIEA
5330,Nahar Begum,52,SHIMULIEA
5342,Sumiya,52,SHIMULIEA
5346,Pali Begum,52,SHIMULIEA
5406,Champa-khatu,52,SHIMULIEA
5415,Reksona Begu,52,SHIMULIEA
5468,Sarmin Begu,52,SHIMULIEA
5490,Samira,52,SHIMULIEA
5699,Suraiya Khatun,52,SHIMULIEA
5814,Samira Parvin,52,SHIMULIEA
5847,Tarjina Begum,52,SHIMULIEA
5864,Nargis Begum,52,SHIMULIEA
5961,MST. MUSLIMA KHATUN,52,SHIMULIEA
5962,SAMIMA KHATUN,52,SHIMULIEA
6000,JONI BEGUM,52,SHIMULIEA
2270,Parvin,56,AGDIA
2271,Hasina,56,AGDIA
2274,Murshida,56,AGDIA
2275,Maharun Nesa,56,AGDIA
2276,Eityka,56,AGDIA
2277,Rohima,56,AGDIA
2278,Rohima,56,AGDIA
2279,Ruma,56,AGDIA
2280,Jarna,56,AGDIA
2282,Johora,56,AGDIA
2283,Nelufa Begum,56,AGDIA
2284,Anita,56,AGDIA
2286,Salma,56,AGDIA
2287,Hasi,56,AGDIA
2288,Lipi,56,AGDIA
2289,Rabyea,56,AGDIA
2290,Sumitra,56,AGDIA
2291,Arjina,56,AGDIA
2466,Ripa,56,AGDIA
2566,Rina,56,AGDIA
2725,Selina,56,AGDIA
2814,Madria,56,AGDIA
2874,Panna,56,AGDIA
2880,Maharun,56,AGDIA
2892,Jesmin,56,AGDIA
2941,Mita,56,AGDIA
2971,Rina,56,AGDIA
2985,Jonota,56,AGDIA
3013,Shohagi,56,AGDIA
3205,Sajada,56,AGDIA
3222,asma,56,AGDIA
3223,asma,56,AGDIA
3316,Regia,56,AGDIA
3337,Mohorun,56,AGDIA
3502,Nasrin,56,AGDIA
3593,Anjira Begum,56,AGDIA
3717,Mst. Popi Khatun,56,AGDIA
3792,Adore bagom,56,AGDIA
3859,Jasmin Bagom,56,AGDIA
3889,Lima Bagom,56,AGDIA
4158,Sumsun Nahar,56,AGDIA
4190,Rabeya Begom,56,AGDIA
4191,Fatema Begom,56,AGDIA
4210,Panna Begom,56,AGDIA
4214,Morieam,56,AGDIA
4280,Sahanaj,56,AGDIA
4329,Morjina begom,56,AGDIA
4338,Adory Begom,56,AGDIA
4357,Kollani Kormokar,56,AGDIA
4519,Panna Khatun,56,AGDIA
4567,Mita Das,56,AGDIA
4615,Rohima,56,AGDIA
4647,Sajeda Begum,56,AGDIA
4673,Sheuly,56,AGDIA
4704,Reva,56,AGDIA
4744,Nodika,56,AGDIA
4793,Moriom,56,AGDIA
4798,MST. KHATHEJA AKTER HAPPY,56,AGDIA
4811,Nasima,56,AGDIA
4840,Samsur Nahar,56,AGDIA
4902,Abironnasa,56,AGDIA
4945,Suriya,56,AGDIA
4978,Hosneara,56,AGDIA
5124,Papia Khatun,56,AGDIA
5212,Lechina Pervin,56,AGDIA
5230,Sajeda Begum,56,AGDIA
5359,Lipi Khanom,56,AGDIA
5369,Panna Khatun,56,AGDIA
5446,Mst. Lipi Khanum,56,AGDIA
5483,Hamida Begu,56,AGDIA
5484,Zarina Begum,56,AGDIA
5508,Hosne Ara,56,AGDIA
5523,Monowara Begum,56,AGDIA
5536,Jharna 01763492473,246,SOLPUR (FEMALE)
5547,Anzana Roy,56,AGDIA
5609,Nasima Begum,56,AGDIA
5622,Razia,56,AGDIA
5627,Forida Begum,56,AGDIA
5793,Farida Begum,56,AGDIA
5797,Antora Das,56,AGDIA
5831,Mafuza Begum,56,AGDIA
5881,Kazi taher Begum,56,AGDIA
5921,NAHIMA SULTANA HASI,56,AGDIA
6022,Ismotara Parvin,56,AGDIA
6034,LABONY KHANAM,56,AGDIA
1554,Murshida Begum,61,BECHALI
1555,Sati Begum,61,BECHALI
1556,Fatima,61,BECHALI
1558,Rexona begum,61,BECHALI
1559,Rahana Begum,61,BECHALI
1560,Asma,61,BECHALI
1562,Mira,61,BECHALI
1563,Sema,61,BECHALI
1564,Sati,61,BECHALI
1566,Resona,61,BECHALI
1568,Shirina,61,BECHALI
1570,Nukrjahan,61,BECHALI
1571,Salina,61,BECHALI
1573,Shahida,61,BECHALI
1575,Rashida,61,BECHALI
1576,Sukuron,61,BECHALI
1577,Beauty begum,61,BECHALI
1581,Monira,61,BECHALI
1590,Shopna,61,BECHALI
1601,Mina Khanom,61,BECHALI
1604,Marina,61,BECHALI
1605,Aina,61,BECHALI
1606,Ruma,61,BECHALI
2856,Murshida Parvin,61,BECHALI
2878,Jabadha,61,BECHALI
3057,Mina Begum,61,BECHALI
3068,Rasida Begum,61,BECHALI
3069,Jatsna,61,BECHALI
3084,Rina Khatun,61,BECHALI
3095,Sajada,61,BECHALI
3107,Lipiara Khanam,61,BECHALI
3108,Jebon naher,61,BECHALI
3109,Sokoron,61,BECHALI
3151,Lipie,61,BECHALI
3172,Rima Aktar,61,BECHALI
3188,kohinur,61,BECHALI
3213,Sekela,61,BECHALI
3270,Sumayia,61,BECHALI
3318,Bobtia,61,BECHALI
3437,Salina,61,BECHALI
3662,Peire Begom,61,BECHALI
3692,Mis. Shahanaz,61,BECHALI
3704,Shahida,61,BECHALI
3765,Lailie,61,BECHALI
3926,Rina Begom,84,BECHALI
3949,Parvin Bagom,61,BECHALI
3950,Nur Jahan Begum,61,BECHALI
3958,Joshna Bagom,61,BECHALI
4008,Ritu Bagom,61,BECHALI
4053,Jhanara Bagom,61,BECHALI
4194,Hafaja Begum,61,BECHALI
4272,Josna Begum,61,BECHALI
4293,ASora,61,BECHALI
4298,Sonia,61,BECHALI
4429,Hasila begum,61,BECHALI
4494,Sahanaz Begum,61,BECHALI
4495,Haricha begum,61,BECHALI
4522,Mst.jarna khatun,61,BECHALI
4564,Mina Begum,61,BECHALI
4577,Lovely Khatun,61,BECHALI
4593,Nasrin Begum,61,BECHALI
4631,Aina Begum,61,BECHALI
4636,Ismotara,61,BECHALI
4677,Akhi,61,BECHALI
4687,Muslima khanam,61,BECHALI
4688,Helena begum,61,BECHALI
4754,Haricha begum,61,BECHALI
4770,Mst. Swapna Khatun,61,BECHALI
4887,Tania,61,BECHALI
4950,Maryna begum,61,BECHALI
5020,Rini khatun,61,BECHALI
5025,Achia begum,61,BECHALI
5083,Feroza,61,BECHALI
5158,Kulsum Begum,61,BECHALI
5174,Akhi Akter,61,BECHALI
5214,Rania Begum,61,BECHALI
5250,Nela Begum,61,BECHALI
5304,Sathi,61,BECHALI
5305,Laboni khatun,61,BECHALI
5353,Mira Khatun,61,BECHALI
5385,Hosneara Khatun,61,BECHALI
5494,MISS SHAMPA KHATUN,61,BECHALI
5500,Ismotara,61,BECHALI
5541,Nasren Begum,61,BECHALI
5571,Sobura Begum,61,BECHALI
5584,Sorifa Begum,61,BECHALI
5593,Tesmeya,61,BECHALI
5603,Rosida,61,BECHALI
5612,Amena Begum,61,BECHALI
5615,Khadeza Parvin Ruma,61,BECHALI
5616,Mst. Buty,61,BECHALI
5730,Selina Begum,61,BECHALI
5743,Arifa Khatun,61,BECHALI
5775,Rina Khanom,61,BECHALI
5783,Rupsana Begum,61,BECHALI
5787,Mrs Rima Khatun,61,BECHALI
5809,Adori Akter,61,BECHALI
5860,DILRUBA BEGUM,61,BECHALI
5869,SUFIYA BEGUM,61,BECHALI
5880,Jorena Begum,61,BECHALI
5888,Mrs Sahanara khatun,61,BECHALI
5893,Halima Khatun,61,BECHALI
5903,Sarnali khatun,61,BECHALI
5915,Mst. Adory Khanum,61,BECHALI
5926,ANKHI AKTER,61,BECHALI
5939,RATNA BEGUM,61,BECHALI
5948,TISHA AFRIN,61,BECHALI
5949,RONY KHATUN,61,BECHALI
5978,BITHI KHATUN,61,BECHALI
5986,RUMICHA BEGUM,61,BECHALI
5991,KULSUM NAHAR,61,BECHALI
5996,SATI BEGUM,61,BECHALI
6017,FARZANA AKTER,61,BECHALI
6026,SELINA BEGUM,61,BECHALI
6039,SHARIFA KHATUN,61,BECHALI
6088,RABA PARVIN,61,BECHALI
6101,SARMIN KHATUN,61,BECHALI
6102,SALMA BEGUM,61,BECHALI
1826,Tazmin,63,SHOL PUR
1828,Parul,63,SHOL PUR
1829,Lipi,63,SHOL PUR
1830,Nilufa,63,SHOL PUR
1832,Dulina,63,SHOL PUR
1835,Shirina,63,SHOL PUR
1836,Momotaj,63,SHOL PUR
1838,Maleka,63,SHOL PUR
1840,Sarothi,63,SHOL PUR
1841,Hosneara,63,SHOL PUR
1842,Resma,63,SHOL PUR
1843,Asma,63,SHOL PUR
1844,Robejan,63,SHOL PUR
1845,Nazma Begum,63,SHOL PUR
1846,Laboni,63,SHOL PUR
2459,Helna,63,SHOL PUR
2488,Parvin,63,SHOL PUR
2506,Nice Begum,63,SHOL PUR
2644,Shapna,63,SHOL PUR
2652,Bithi,63,SHOL PUR
2851,Nusrat,63,SHOL PUR
2919,Nihar,63,SHOL PUR
2972,Saroty,63,SHOL PUR
3041,Sahina,63,SHOL PUR
3106,Hasara,63,SHOL PUR
3169,razia,63,SHOL PUR
3242,Saharina Sarmni Tonni,63,SHOL PUR
3243,Tamana,63,SHOL PUR
3329,jolie,63,SHOL PUR
3468,Rony Begum,63,SHOL PUR
3478,Ranue,63,SHOL PUR
3552,Jannat,63,SHOL PUR
3562,Malaka,63,SHOL PUR
3724,Rabeya Begom,63,SHOL PUR
3753,Lipi Ray,63,SHOL PUR
3759,Naher Bagom,63,SHOL PUR
3997,Resma begum,63,SHOL PUR
4085,Shilpy Bagom,63,SHOL PUR
4124,Robajan Bagom,63,SHOL PUR
4149,Ferdousi Khanam,63,SHOL PUR
4163,Najma Begum,63,SHOL PUR
4287,Kohinur Khatun,63,SHOL PUR
4491,Hemela Begum,63,SHOL PUR
4512,Mst. Rexona Khatun,63,SHOL PUR
4517,Lipi Khatun,63,SHOL PUR
4569,Sarnali Begum,63,SHOL PUR
1827,Asma,155,SRIFULTALA
4617,Shahina Begum,63,SHOL PUR
4698,Hosnera Begum,63,SHOL PUR
4719,Sornali,63,SHOL PUR
4762,Salma begum,63,SHOL PUR
4854,Sazeda Parvin,63,SHOL PUR
4877,Jharna Begum,63,SHOL PUR
4883,Khadija,63,SHOL PUR
4939,Lima Khatun,63,SHOL PUR
4957,Mina,63,SHOL PUR
4967,Dulina,63,SHOL PUR
5058,Firoza Begum,63,SHOL PUR
5072,Mst. Sonia Akter,63,SHOL PUR
5151,Selina Begum,63,SHOL PUR
5196,Adori Khanam,63,SHOL PUR
5247,Meleka Begum,63,SHOL PUR
5407,Yasmin Khatun,63,SHOL PUR
5435,Suborna Khatu,63,SHOL PUR
5542,Mst. Tajmin Aktar,63,SHOL PUR
5672,Mrs Nice Begum,63,SHOL PUR
5752,Ranu,63,SHOL PUR
5867,Helena Begum,63,SHOL PUR
5916,Nipa Monalisa,63,SHOL PUR
1322,Minoti,64,NALDIR CHAR
1323,Moina,64,NALDIR CHAR
1325,Pipasha,64,NALDIR CHAR
1326,Shilpi,64,NALDIR CHAR
1328,01321226443,64,NALDIR CHAR
1329,Dipika,64,NALDIR CHAR
1330,Moni Tara,64,NALDIR CHAR
1331,Sujata,64,NALDIR CHAR
2933,Dipika Rai,64,NALDIR CHAR
2949,Unnati Bagci,64,NALDIR CHAR
3033,Moyna bai,64,NALDIR CHAR
3113,Tolou Hajara,64,NALDIR CHAR
3253,Tripty,64,NALDIR CHAR
3349,Anuradha,64,NALDIR CHAR
3364,Lipie,64,NALDIR CHAR
3427,Pipasa,64,NALDIR CHAR
3786,Dipika Ray,64,NALDIR CHAR
3804,Momata Rani Biswas,64,NALDIR CHAR
4001,Dipika ray,64,NALDIR CHAR
4499,Silpi Boiragi,64,NALDIR CHAR
4503,Heramoti Mallik,64,NALDIR CHAR
4655,Moyna begom,64,NALDIR CHAR
4968,Unnoti,64,NALDIR CHAR
5059,Purnima Golder,64,NALDIR CHAR
5325,Sujata Hazra,64,NALDIR CHAR
5591,Sagarika,64,NALDIR CHAR
1517,Mira,65,MALOPARA
1519,Gaitri,65,MALOPARA
1520,Vanu,65,MALOPARA
1521,Nomita,65,MALOPARA
1523,Nehari,65,MALOPARA
1524,Konika,65,MALOPARA
1525,Josna,65,MALOPARA
1529,Mina Biswas,65,MALOPARA
1530,Josodha,65,MALOPARA
2450,Kabita,65,MALOPARA
2600,Minoti,65,MALOPARA
2896,Kibita,65,MALOPARA
2988,Tunisri,65,MALOPARA
3039,Kakoli Bhowmik,65,MALOPARA
3186,goutam,65,MALOPARA
3187,lipika,65,MALOPARA
3240,Ropusie Biswash,65,MALOPARA
3241,Aurchona,65,MALOPARA
3250,Minote,65,MALOPARA
3451,Aroti,65,MALOPARA
3545,Bristy,65,MALOPARA
3631,Minoti-001926904657,65,MALOPARA
3725,Orchona,65,MALOPARA
3761,Nomita Biswash,65,MALOPARA
3888,Champa Rani,65,MALOPARA
3932,Konika biswas,65,MALOPARA
4134,Sulika Biswas,65,MALOPARA
4137,Minoti Rani,65,MALOPARA
4237,Piya Sorker,65,MALOPARA
4266,Promila Biswas,65,MALOPARA
4318,Shilpi,65,MALOPARA
4358,Rupali Biswas,65,MALOPARA
4385,Suniti Mazumder,65,MALOPARA
4554,Kobita Biswas,65,MALOPARA
4792,BIJLY SORKAR,65,MALOPARA
4816,Archana,65,MALOPARA
5031,Protiva Biswas,65,MALOPARA
5057,Sanju Biswas,65,MALOPARA
5162,Tithi Biswas,65,MALOPARA
5231,SANZITA RANI,65,MALOPARA
5437,Kabita Biswas,65,MALOPARA
5502,Kalpana Biswas,65,MALOPARA
5529,Vanumati Biswas,65,MALOPARA
5695,Pia Sarkar,65,MALOPARA
5725,SIMA BISWAS,65,MALOPARA
5732,Konika Biswash,65,MALOPARA
5812,Md Omiyar Sikdar,65,MALOPARA
5843,Bipul Kumar Bairagi,65,MALOPARA
5854,Jotsna Biswash,65,MALOPARA
2854,Nurjahan begum,66,AGDIA
3071,Shaty begum,66,AGDIA
1285,Momena,66,AGDIA
1286,Chaina,66,AGDIA
1288,Resma,66,AGDIA
1291,Mina,66,AGDIA
1296,Bhiti,66,AGDIA
1298,Sabiron Begum,66,AGDIA
1299,Priya,66,AGDIA
1300,Nazma,66,AGDIA
1301,Marfina,66,AGDIA
1305,Honufa,66,AGDIA
1306,Soburon,66,AGDIA
1307,Nazma,66,AGDIA
1308,Nargis,66,AGDIA
1309,Sonia,66,AGDIA
1310,Sirina,66,AGDIA
1311,Nasima,66,AGDIA
1312,Moyna,66,AGDIA
2520,Ratna,66,AGDIA
2525,Nadira,66,AGDIA
2625,Jhanara,66,AGDIA
2662,Parul,66,AGDIA
2704,Parul,66,AGDIA
2760,Nasima,66,AGDIA
3248,Minote,66,AGDIA
3249,Nargish,66,AGDIA
3285,Helana,66,AGDIA
3321,Morsida,66,AGDIA
3402,Parul,66,AGDIA
3982,Bithi Begum,66,AGDIA
3983,Rashida Bagom,66,AGDIA
4000,Sofia Begum,66,AGDIA
4084,Asma Bagom,66,AGDIA
4105,Rinko Begom,66,AGDIA
4270,Rubina Begum,66,AGDIA
4281,Jorina,66,AGDIA
4370,Helen,66,AGDIA
4381,Priya,66,AGDIA
4395,Halima,66,AGDIA
4407,Ragia Begum,66,AGDIA
4435,Nargis kathun,66,AGDIA
4448,Mst:Rexona Begum,66,AGDIA
4469,Monjuara,66,AGDIA
4470,Parvin,66,AGDIA
4475,Rina Khanam,66,AGDIA
4483,Beauty Begum,66,AGDIA
4484,Marfina begum,66,AGDIA
4498,Peary,66,AGDIA
4707,johoron,66,AGDIA
4986,.Anjuman begum,66,AGDIA
5075,Nadira begum,66,AGDIA
5094,Sirina begum,66,AGDIA
5278,Murshida,66,AGDIA
5315,Rashma Begum,66,AGDIA
5370,Nadira Begum,66,AGDIA
5449,Rozia khatu,66,AGDIA
5469,Laboni,66,AGDIA
5710,Mukta Begum,66,AGDIA
5824,Laboni,66,AGDIA
5861,Sabiron Begum,66,AGDIA
5901,Mis Rubia Khatun,66,AGDIA
5958,NISHITARA MORIAM,66,AGDIA
1188,Jarna,67,SOVER GHOP
1189,Monowara,67,SOVER GHOP
1190,Kakoli,67,SOVER GHOP
1191,Parvin,67,SOVER GHOP
1192,Tahira,67,SOVER GHOP
1193,Sunali,67,SOVER GHOP
1194,Monira,67,SOVER GHOP
1195,Harifa,67,SOVER GHOP
1197,Bobita,67,SOVER GHOP
1198,Sorifa,67,SOVER GHOP
1199,Honofa,67,SOVER GHOP
1200,Morzina,67,SOVER GHOP
1202,Saira,67,SOVER GHOP
1203,Jahina,67,SOVER GHOP
1204,Nasima,67,SOVER GHOP
1205,Hasina,67,SOVER GHOP
1206,Rabyea,67,SOVER GHOP
1207,Romona,67,SOVER GHOP
1208,Sukuron,67,SOVER GHOP
1209,Momotaz,67,SOVER GHOP
1210,Rikta Begum,67,SOVER GHOP
1211,Tanjila,67,SOVER GHOP
2449,Chana,67,SOVER GHOP
2545,Hashora,67,SOVER GHOP
2671,Taslima,67,SOVER GHOP
2701,Mousumi,67,SOVER GHOP
2752,Aiton,67,SOVER GHOP
2753,Rebeya,67,SOVER GHOP
2823,Habiba,67,SOVER GHOP
2868,Jamila begum,67,SOVER GHOP
2918,Moyna,67,SOVER GHOP
2922,Jahida,67,SOVER GHOP
3117,Soneia,67,SOVER GHOP
3130,Rina,67,SOVER GHOP
3269,Sukuron,67,SOVER GHOP
3326,Hera,67,SOVER GHOP
3354,Jorina,67,SOVER GHOP
3388,Rajiea,67,SOVER GHOP
3426,China,67,SOVER GHOP
3444,Romona,67,SOVER GHOP
3475,Kohinoor,67,SOVER GHOP
3542,Jassim,67,SOVER GHOP
3588,Nacima,67,SOVER GHOP
3607,halima,67,SOVER GHOP
3618,Aiton,67,SOVER GHOP
3636,Rina,87,AGDIA
3713,Rabeya Begom,67,SOVER GHOP
3781,Jahina Begum,67,SOVER GHOP
3782,Moyna Bagom,67,SOVER GHOP
3834,Soniya Bagom,67,SOVER GHOP
3897,Nilima Bagom,67,SOVER GHOP
3911,Hena Bagom,67,SOVER GHOP
3951,Etika Bagom,67,SOVER GHOP
4036,Farhana begu,67,SOVER GHOP
4073,Romona,67,SOVER GHOP
4129,Nazma begum,67,SOVER GHOP
4250,Kohinur,67,SOVER GHOP
4349,Monoara Begum,67,SOVER GHOP
4445,Salma Begom,67,SOVER GHOP
4446,Mamotaj Begom,67,SOVER GHOP
4559,Sharifa Begom,67,SOVER GHOP
4641,Mst. Papy Akter,67,SOVER GHOP
4644,Nazma Begum,67,SOVER GHOP
4670,Jasmin Begum,67,SOVER GHOP
4925,Rumi,67,SOVER GHOP
4973,Nazma begum-0119523731,67,SOVER GHOP
5041,Jamila begum,67,SOVER GHOP
5086,Parvin Begum,67,SOVER GHOP
5150,Morjina-0748937928,67,SOVER GHOP
5155,Kabita de,67,SOVER GHOP
5173,Miutu Khatun,67,SOVER GHOP
5209,Khadija Khatun,67,SOVER GHOP
5348,Laboni Begum,67,SOVER GHOP
5506,Rita Deb,67,SOVER GHOP
5545,Jeniya,67,SOVER GHOP
5557,Rina Parvin,67,SOVER GHOP
5618,Rina Begum,67,SOVER GHOP
5653,Masura Khatun,67,SOVER GHOP
5665,Sima Khatun,67,SOVER GHOP
5667,Anita Dattya,67,SOVER GHOP
5827,Mrs Sahanaj Parvin,67,SOVER GHOP
5863,Sharifa Begum,67,SOVER GHOP
5875,Mitu Khatun,67,SOVER GHOP
5917,Etika Khatun,67,SOVER GHOP
5998,SADHONA RANI DEY,67,SOVER GHOP
6055,Md. Rajib Sheikh,67,SOVER GHOP
6073,LAVLY BEGUM,67,SOVER GHOP
6075,Masura Khatun,67,SOVER GHOP
1067,Hori Pada,69,GOBRA BAZAR
1069,Pervez Mollah,69,GOBRA BAZAR
1073,Apurbo,69,GOBRA BAZAR
1075,Khaleque,69,GOBRA BAZAR
1083,Shain,69,GOBRA BAZAR
1091,Ali Hossain,69,GOBRA BAZAR
1096,Bkash,69,GOBRA BAZAR
1099,Noim Akkas,69,GOBRA BAZAR
1101,Imran,69,GOBRA BAZAR
1102,Kalam,69,GOBRA BAZAR
1107,Kattik,69,GOBRA BAZAR
1108,Abul Hasan,69,GOBRA BAZAR
1110,Biddut,69,GOBRA BAZAR
1113,Sultan,69,GOBRA BAZAR
1115,Mustafizur,69,GOBRA BAZAR
1117,Tukam,69,GOBRA BAZAR
1120,Sukur,69,GOBRA BAZAR
1121,Shahajan,69,GOBRA BAZAR
1123,Salim,69,GOBRA BAZAR
1124,Khairul,69,GOBRA BAZAR
1126,Prokash,69,GOBRA BAZAR
1127,Sankor,69,GOBRA BAZAR
1129,Prodip,69,GOBRA BAZAR
1130,Nesar,69,GOBRA BAZAR
1131,Probir,69,GOBRA BAZAR
1132,Tareque,69,GOBRA BAZAR
1133,Kabir,69,GOBRA BAZAR
2477,Haradhon,69,GOBRA BAZAR
2543,Shukanto,69,GOBRA BAZAR
2646,Prodip,69,GOBRA BAZAR
2689,Masudur,69,GOBRA BAZAR
3103,shoukur,69,GOBRA BAZAR
3289,Ajoy,69,GOBRA BAZAR
3471,Nichma Begum,89,ARPARA
3575,Haradhon,69,GOBRA BAZAR
3597,Imran,69,GOBRA BAZAR
3686,Md Rabbil,69,GOBRA BAZAR
3687,Siddikur Rahaman,69,GOBRA BAZAR
3748,TAHIDUL ISLAM,69,GOBRA BAZAR
3749,Md. Ferdows,69,GOBRA BAZAR
3769,Md Nahidul islam-01831305278,69,GOBRA BAZAR
3773,Hasibur Rahaman Molla,69,GOBRA BAZAR
3884,Sujon Kumar,69,GOBRA BAZAR
3892,MD. Mokbul,69,GOBRA BAZAR
3979,Liton SK,69,GOBRA BAZAR
4547,Md. Nazrul Islam Khan,69,GOBRA BAZAR
4839,Milon kumer mitrro,69,GOBRA BAZAR
4900,Miraj molla,69,GOBRA BAZAR
5017,Md. Khairul Sheikh,69,GOBRA BAZAR
5038,Jubaer Mohammad,69,GOBRA BAZAR
5061,Md. Imran Fakir,69,GOBRA BAZAR
1965,Abdur Rahman,70,SHOL PUR
1970,Nowren Biswas,70,SHOL PUR
1974,Md. Omar Faruk Mina,70,SHOL PUR
1977,Rowson,70,SHOL PUR
1980,Nondo Karma Kar,70,SHOL PUR
1984,Nekhil,70,SHOL PUR
1989,Porash Nath,70,SHOL PUR
1991,Alam Sk.,70,SHOL PUR
1992,Tapon Biswash,70,SHOL PUR
1994,Mustafizur,70,SHOL PUR
1997,Mujaher,70,SHOL PUR
2002,Vim Biswas,70,SHOL PUR
2004,Nazmul,70,SHOL PUR
2006,Azizur,70,SHOL PUR
2007,Barun Sha,70,SHOL PUR
2012,Probat,70,SHOL PUR
2013,Abdur Rouf,70,SHOL PUR
2015,Miofizur,70,SHOL PUR
2016,Bappa Sha,70,SHOL PUR
2020,Md. Sabuj Molla,70,SHOL PUR
2021,Kazi Aslam,70,SHOL PUR
2022,Asim Karma Kar,70,SHOL PUR
2023,Krishno P,70,SHOL PUR
2422,Abdullah,70,SHOL PUR
2436,Md.Galib,70,SHOL PUR
2438,Md.Hamait,70,SHOL PUR
2500,Milon Rudro,70,SHOL PUR
2557,Shubarna,70,SHOL PUR
2686,Md.Salim,70,SHOL PUR
3561,Sahida,77,SOON KHOLA
4523,SK. SHAMINOOR RAHMAN,70,SHOL PUR
4906,Samim,70,SHOL PUR
4930,Md. Anish Molla,70,SHOL PUR
5048,Md. Azmir Shakh,70,SHOL PUR
5261,Manik Sarkar,70,SHOL PUR
5688,Nanda Biswas,70,SHOL PUR
5749,Subarna Biswash,70,SHOL PUR
5756,Sumon Shaikh,70,SHOL PUR
2244,Sunita,71,RAM NAGAR
2245,Depa,71,RAM NAGAR
2246,Suchitra,71,RAM NAGAR
2247,Kanon,71,RAM NAGAR
2248,Rikta,71,RAM NAGAR
2249,Rinku,71,RAM NAGAR
2250,Robi,71,RAM NAGAR
2251,Rupali,71,RAM NAGAR
2252,Trishna,71,RAM NAGAR
2253,Nilima,71,RAM NAGAR
2254,Rekha,71,RAM NAGAR
2255,Bilashi,71,RAM NAGAR
2256,Lili Biswas,71,RAM NAGAR
2257,Maloti,71,RAM NAGAR
2872,Mitali,71,RAM NAGAR
2938,Tonuesrce,71,RAM NAGAR
2940,Sonda,71,RAM NAGAR
3591,Manoka,71,RAM NAGAR
3679,Annona Rani,71,RAM NAGAR
3715,Sochitra Rani,71,RAM NAGAR
3716,Labony Ray,71,RAM NAGAR
3835,Shilpy Rani,71,RAM NAGAR
3887,Chanda bisash,71,RAM NAGAR
3976,Kobita biswas-017411176800,71,RAM NAGAR
4252,Maloti Biswas,71,RAM NAGAR
4392,Laxime,71,RAM NAGAR
4431,Mitali Biswas,71,RAM NAGAR
4654,Rupali Biswas,71,RAM NAGAR
4742,Baishakhi,71,RAM NAGAR
4807,Nilima,71,RAM NAGAR
4943,Sonda,71,RAM NAGAR
4972,MOUSUMI BISWAS,71,RAM NAGAR
5373,Sochitra Biswas,71,RAM NAGAR
5626,Dipa,71,RAM NAGAR
5631,Pabitra,71,RAM NAGAR
5636,Baishakhi Biswash,71,RAM NAGAR
5681,Rita Basu,71,RAM NAGAR
5714,Rituparna Sen,71,RAM NAGAR
5943,RITUPARNA SEN,71,RAM NAGAR
5955,BONANI ROY,71,RAM NAGAR
5970,Tilqka Sikdar,71,RAM NAGAR
6032,TOMA VHATTA,71,RAM NAGAR
1257,Masura,72,AGDIA
1258,Firoza,72,AGDIA
1259,Rotna,72,AGDIA
1260,Halima Begum,72,AGDIA
1262,Kohinur,72,AGDIA
1267,Monoara,72,AGDIA
1268,Rekha,72,AGDIA
1270,Sahina,72,AGDIA
1271,Hosne Ara,72,AGDIA
1272,Jesmin,72,AGDIA
1274,Jahanara Khatun,72,AGDIA
1275,Chabiron Begum,72,AGDIA
1278,Salma,72,AGDIA
1279,Kohinur,72,AGDIA
1280,Monira Begum,72,AGDIA
1281,Panna,72,AGDIA
1282,Mojuara,72,AGDIA
1283,Kajol,72,AGDIA
1284,Rexona,72,AGDIA
2442,Rebeka,72,AGDIA
2570,Jhahida,72,AGDIA
2615,Shukuron,72,AGDIA
2635,Rajina,72,AGDIA
2661,Shamin,72,AGDIA
2680,Amina Begum,72,AGDIA
2681,Nurjahan,72,AGDIA
2776,Fuli begum,72,AGDIA
2832,Rina,72,AGDIA
2962,Ripa,72,AGDIA
2989,Adori,72,AGDIA
3059,Farzina,72,AGDIA
2025,Sabina Begum,72,AGDIA
3125,Mina,72,AGDIA
3301,Rukiaia,72,AGDIA
3322,lipika,72,AGDIA
3377,panna,72,AGDIA
3401,Hira,72,AGDIA
3452,Shokoron,72,AGDIA
3465,China,72,AGDIA
3794,Halima Begum,72,AGDIA
3862,Champa Bagom,72,AGDIA
3883,Farjina Bagom,72,AGDIA
3890,Rahila Bagom,72,AGDIA
3891,Hera Bagom,72,AGDIA
3915,Rasma Bagom,72,AGDIA
3956,Taslima begum,72,AGDIA
3969,Najma Begum,72,AGDIA
4024,Mina begum,72,AGDIA
4025,Tarsina begum,72,AGDIA
4070,Rabaya Bagom,72,AGDIA
4151,Sabina Begum,72,AGDIA
4166,Asma Khanam,72,AGDIA
4238,Kohinur Begum,72,AGDIA
4239,Nazmin,72,AGDIA
4240,Farjina,72,AGDIA
4254,Jasmin Begum,72,AGDIA
4261,Raksona Begum,72,AGDIA
4267,Rubina,72,AGDIA
4282,Rahila,72,AGDIA
4303,Hosnera,72,AGDIA
4310,Shapla,72,AGDIA
4359,Kohinur,72,AGDIA
4386,Mina Begom,72,AGDIA
4501,Papia Begum,72,AGDIA
4516,Mira Khatun,72,AGDIA
4555,Mofega Begum,72,AGDIA
4570,Rabeya Khanam,72,AGDIA
4581,Champa Begum,72,AGDIA
4610,Monoara,72,AGDIA
4629,Tahomina begum,72,AGDIA
4639,Aysa Khatun,72,AGDIA
4665,Rasida,72,AGDIA
4675,Farhana,72,AGDIA
4708,ROTNA,72,AGDIA
4720,Sapla,72,AGDIA
4730,Tarchina,72,AGDIA
4737,Parvin begum,72,AGDIA
4755,Kursia begum,72,AGDIA
4803,Rina Khanam,72,AGDIA
4837,Safa begum-,72,AGDIA
4841,Mina Khatun,72,AGDIA
4847,Purnima,72,AGDIA
4863,Tahera Khatun,72,AGDIA
4903,Priya khatun-018577559688,72,AGDIA
4904,Mashura begum,72,AGDIA
4912,Monowara begum,72,AGDIA
4922,Shaleha begum,72,AGDIA
4936,Salma Khatun,72,AGDIA
4937,Doly Begum,72,AGDIA
4958,RUKAIYA KHATUN,72,AGDIA
4981,Aysa khatun,72,AGDIA
5030,"Mst,Shahina Begum",72,AGDIA
5069,Mst Sharmin Khanam,72,AGDIA
5074,Jesmin,72,AGDIA
5103,Kursia Begum,72,AGDIA
5112,Poli Begum,72,AGDIA
5128,Sarmin begum,72,AGDIA
5134,Nur Jahan Begum,72,AGDIA
5172,Sammi Khatun,72,AGDIA
5186,Mojida khatun,72,AGDIA
5204,Thamina Begum,72,AGDIA
5232,Monjuara Begu,72,AGDIA
5240,Saheda Khatun,72,AGDIA
5302,Mafia begum,72,AGDIA
5310,Rinki Khatun,72,AGDIA
5326,Farjana Easmin Putu,72,AGDIA
5327,Sabina khatun,72,AGDIA
5328,Rupali Khanom,72,AGDIA
5334,Sumaya Khatun,72,AGDIA
5361,Ripa Khatun,72,AGDIA
5384,Lipika begum,72,AGDIA
5400,Rohima,72,AGDIA
5409,Shewly Khatun,72,AGDIA
5411,Hosnaara Begum,72,AGDIA
5418,Habiba Akte,72,AGDIA
5423,Rahela Khatun,72,AGDIA
5428,Miss Rubia,72,AGDIA
5441,Hana khatu,72,AGDIA
5457,Rathna Begum,72,AGDIA
5485,Asma,72,AGDIA
5486,FArzana,72,AGDIA
5510,Farjina,72,AGDIA
5517,Jesmin,72,AGDIA
5538,Tania Khanum,72,AGDIA
5565,Rasma,72,AGDIA
5579,Hamida Begum,72,AGDIA
5580,MST. HIRA KHATUN,72,AGDIA
5581,Mst. Hajera Begum,72,AGDIA
5601,Ragiya 01764527836,72,AGDIA
5602,Aysa Khatun,72,AGDIA
5604,FARJANA YASMIN,72,AGDIA
5621,Aklima Begum,72,AGDIA
5632,Yarun Begu,72,AGDIA
5633,Kursia Begum,72,AGDIA
5638,Parvin,72,AGDIA
5700,Mrs Mim Khatun,72,AGDIA
5715,Soniya Akter Suma,72,AGDIA
5716,Tahmina Begum,72,AGDIA
5810,Doli Begum,72,AGDIA
5811,Saleha Begum,72,AGDIA
5838,Nadira Begum,72,AGDIA
5889,Mira Begum,72,AGDIA
5900,Mimma Khanom,72,AGDIA
5908,KURSIA BEGUM,72,AGDIA
5923,SONIA KHATUN,72,AGDIA
5931,JOHORA BEGUM,72,AGDIA
5981,MISS KEYA PERVIN,72,AGDIA
5999,MOS. MIM KHATUN,72,AGDIA
6007,JAHIDA BEGUM,72,AGDIA
6015,NUR JAHAN BEGUM,72,AGDIA
6036,MOMOTAZ KHATUN,72,AGDIA
6061,TITHE KHANAM,72,AGDIA
6063,SHIULY KHATUN SUMA,72,AGDIA
2292,Chabi Rani Biswas,73,GOBRA BAZAR
2293,Suchorita,73,GOBRA BAZAR
2294,Bina,73,GOBRA BAZAR
2296,Mita,73,GOBRA BAZAR
2297,Suchorita,73,GOBRA BAZAR
2298,Tara,73,GOBRA BAZAR
2299,Mira,73,GOBRA BAZAR
2360,Mst. Nazma Begum,73,GOBRA BAZAR
2361,Gouri,73,GOBRA BAZAR
2362,Mohila Rani,73,GOBRA BAZAR
2363,Kakoli,73,GOBRA BAZAR
2478,Sriti Biswas,73,GOBRA BAZAR
2508,Nasima,73,GOBRA BAZAR
2809,Liphika,73,GOBRA BAZAR
3102,Nargish,73,GOBRA BAZAR
3144,Sucutra,73,GOBRA BAZAR
3170,Suchitra Biswash,73,GOBRA BAZAR
3239,Ppbitra,73,GOBRA BAZAR
3299,Shosorita,73,GOBRA BAZAR
3563,Muktie,73,GOBRA BAZAR
3643,Mis. Molina,73,GOBRA BAZAR
3653,Fatima,73,GOBRA BAZAR
3666,Choncola Sil,73,GOBRA BAZAR
3683,Mini Bagom,73,GOBRA BAZAR
3718,Sopna,73,GOBRA BAZAR
3791,Krishna Rani Saha,73,GOBRA BAZAR
3811,Sila rani,73,GOBRA BAZAR
3825,Rasma begum,73,GOBRA BAZAR
3843,Noyon tara,73,GOBRA BAZAR
4012,Panna biswas,73,GOBRA BAZAR
4062,Varoti Rani,73,GOBRA BAZAR
4159,Asha Rani,73,GOBRA BAZAR
4180,Sarbin Begom,73,GOBRA BAZAR
4234,Tapoti rani,73,GOBRA BAZAR
4518,Mita Mojumdar,73,GOBRA BAZAR
4591,Sonia Sultana,73,GOBRA BAZAR
4592,Keya Khanam,73,GOBRA BAZAR
4882,Bubli Saha,73,GOBRA BAZAR
4893,Sarbin Begum,73,GOBRA BAZAR
4983,Mira,73,GOBRA BAZAR
5002,Pinki,73,GOBRA BAZAR
5009,Panna Biswsa,73,GOBRA BAZAR
5019,Tapati Rani Das,73,GOBRA BAZAR
5051,Dipa,73,GOBRA BAZAR
5169,Sucharita,73,GOBRA BAZAR
5181,Ratna,73,GOBRA BAZAR
5234,Khukurani Das,73,GOBRA BAZAR
5238,Soloka Rani Biswas,73,GOBRA BAZAR
5299,Varoti,73,GOBRA BAZAR
5332,Kalpona Rani,73,GOBRA BAZAR
5368,Mita Mojumder,73,GOBRA BAZAR
5450,Khoku Da,73,GOBRA BAZAR
5588,Runa Begum,73,GOBRA BAZAR
2196,Mini Rani,75,BIR GRAM
2197,Dipty,75,BIR GRAM
2198,Ashoka,75,BIR GRAM
2199,Rupa,75,BIR GRAM
2200,Jhuri,75,BIR GRAM
2201,Bithika,75,BIR GRAM
2202,Santi,75,BIR GRAM
2203,Santi,75,BIR GRAM
2204,Keshori,75,BIR GRAM
2205,Sonali,75,BIR GRAM
2206,Sema,75,BIR GRAM
2410,Shathi,75,BIR GRAM
2469,Bthira,75,BIR GRAM
3005,Pabtira,75,BIR GRAM
3549,Bithika-017188777231,75,BIR GRAM
4454,Shefiali Biswas,75,BIR GRAM
4455,Mithu Biswas,75,BIR GRAM
4880,Dulali,75,BIR GRAM
1337,Rexona,77,SOON KHOLA
1338,Shahina,77,SOON KHOLA
1339,Kajol,77,SOON KHOLA
1340,Anju,77,SOON KHOLA
1432,Salma,77,SOON KHOLA
1434,Resxona,77,SOON KHOLA
1435,Fazila,77,SOON KHOLA
1436,Jabida,77,SOON KHOLA
1437,Maksuda,77,SOON KHOLA
2659,Hasma,77,SOON KHOLA
2793,Naheir,77,SOON KHOLA
2794,Beuty,77,SOON KHOLA
2795,Anjuyeara,77,SOON KHOLA
2923,shahina,77,SOON KHOLA
3344,Maksuda,77,SOON KHOLA
3359,Shulie,77,SOON KHOLA
3391,Aleya,155,SRIFULTALA
3416,Popi,77,SOON KHOLA
3417,Sumie,77,SOON KHOLA
3513,Jabeda,77,SOON KHOLA
3514,Halima,77,SOON KHOLA
3543,Parul,77,SOON KHOLA
3566,Parul,77,SOON KHOLA
3587,Marima,77,SOON KHOLA
3767,Panna Bagom,77,SOON KHOLA
3780,Monira Bagom,77,SOON KHOLA
3820,Salma Bagom,77,SOON KHOLA
3901,Dipa das,77,SOON KHOLA
3904,Sarmin beagum,77,SOON KHOLA
3905,Rinku khatun,77,SOON KHOLA
3964,Mst. Nich Khanom,77,SOON KHOLA
4027,Norani -0176211343,77,SOON KHOLA
4055,Kaya Khaton,77,SOON KHOLA
4101,Shila Bagom,77,SOON KHOLA
4294,Rozina Begum,77,SOON KHOLA
4295,Rabeya Begum,155,SRIFULTALA
4325,Sultana,81,BOR KULA
4335,Monira Begum,77,SOON KHOLA
4390,Naher Begom,77,SOON KHOLA
4397,Rinko Kathon,77,SOON KHOLA
4511,Sima Rani Shaha,77,SOON KHOLA
4710,Hashi,77,SOON KHOLA
4740,Hashina,77,SOON KHOLA
4791,Salma,77,SOON KHOLA
4813,Shefali Khanom,77,SOON KHOLA
4853,Mst. Rupali Khatun,77,SOON KHOLA
4872,Rokeya Begum,77,SOON KHOLA
4954,Fatama Begom,77,SOON KHOLA
5130,Sheuli,77,SOON KHOLA
5194,Salma Begum,77,SOON KHOLA
5329,Hosneara Begum,77,SOON KHOLA
5416,Nurani Akter Srabon,77,SOON KHOLA
5460,Dipa Das,77,SOON KHOLA
5534,Runa,77,SOON KHOLA
5613,Hosnara Begum,77,SOON KHOLA
5678,Sarathi Rani Das,77,SOON KHOLA
5706,Jhorna Mollick,77,SOON KHOLA
5845,Mrs Molina Begum,77,SOON KHOLA
5879,Hosnewara Begum,77,SOON KHOLA
5927,SIMA BEGUM,77,SOON KHOLA
6062,Adoriy Begum,77,SOON KHOLA
6085,MARIYAM KHANAM,77,SOON KHOLA
1002,Jointy,78,MUSURIA
1003,Chuichtra,78,MUSURIA
1004,Anima,78,MUSURIA
1005,Cha Rani,78,MUSURIA
1006,Roma,78,MUSURIA
2817,Onima,78,MUSURIA
2818,Sukla,78,MUSURIA
2848,Sucitra,78,MUSURIA
2078,Rina Begum,80,SHIMULIEA
2079,Anna Begum,80,SHIMULIEA
2081,Rekha,80,SHIMULIEA
2082,Rahila,80,SHIMULIEA
2083,Sharmin,80,SHIMULIEA
2086,Khdija,80,SHIMULIEA
2087,Rohima,80,SHIMULIEA
2089,Mafuzia,80,SHIMULIEA
2090,Resmi,80,SHIMULIEA
2092,Taniea,80,SHIMULIEA
2427,Tania,80,SHIMULIEA
2607,Asora,80,SHIMULIEA
2816,Jesmin,80,SHIMULIEA
2829,Josna,80,SHIMULIEA
2924,Tania,80,SHIMULIEA
3168,Resma,80,SHIMULIEA
3342,Hena,80,SHIMULIEA
3355,Rani,80,SHIMULIEA
3445,Shanas,80,SHIMULIEA
3446,Rubina,80,SHIMULIEA
3900,Tanjila beagum,80,SHIMULIEA
3920,Rina Bagom,80,SHIMULIEA
3921,Feroza,80,SHIMULIEA
3922,Sakeya Bagom,80,SHIMULIEA
3923,Lili Bagom,80,SHIMULIEA
3940,Feroja Bagom,80,SHIMULIEA
3941,Kulsum Bagom,80,SHIMULIEA
3967,Dilara begum,80,SHIMULIEA
3968,Roksana begum,80,SHIMULIEA
3993,Fatema begum,80,SHIMULIEA
4018,Nasima Bagom,80,SHIMULIEA
4019,Khadiza Begom,80,SHIMULIEA
4065,Dola Bagom,80,SHIMULIEA
4075,Taniea Bagom,80,SHIMULIEA
4092,Sundori Begum,80,SHIMULIEA
4198,Poli Begom,80,SHIMULIEA
4211,Rojoni,80,SHIMULIEA
4232,Rebaka Begum,80,SHIMULIEA
4251,Sajada Begom,80,SHIMULIEA
4279,Sema Khaton,80,SHIMULIEA
4432,Parvin Begom,80,SHIMULIEA
4497,Rokeya Begom,80,SHIMULIEA
4528,Shilpi Begum,80,SHIMULIEA
4625,Monjuara Begum,80,SHIMULIEA
4729,Tania,80,SHIMULIEA
4743,Hamida,80,SHIMULIEA
4759,Sabina,80,SHIMULIEA
4788,Josna,80,SHIMULIEA
4822,Marufa-01969542226,80,SHIMULIEA
4861,Mukta,80,SHIMULIEA
4868,Resma,80,SHIMULIEA
4875,Salma,80,SHIMULIEA
4921,Rezia,80,SHIMULIEA
4923,Rexona,80,SHIMULIEA
4941,Sumaiya,80,SHIMULIEA
4982,Razia,80,SHIMULIEA
5005,RONI BEGUM,80,SHIMULIEA
5012,Mst.Rohima Begum,80,SHIMULIEA
5034,Monira Khatun,80,SHIMULIEA
5040,Lukieya khatun,80,SHIMULIEA
5070,Rojina,80,SHIMULIEA
5089,Muslima,80,SHIMULIEA
5109,Marina,80,SHIMULIEA
5144,TANIA BEGUM,80,SHIMULIEA
5175,Feroza,80,SHIMULIEA
5179,Shahanara-,80,SHIMULIEA
5210,Laboni,80,SHIMULIEA
5224,Josna khatun,80,SHIMULIEA
5245,Mst. Sabina Yeasmin,80,SHIMULIEA
5275,Rimi,80,SHIMULIEA
5298,Sakia Begum,80,SHIMULIEA
5321,Minima,80,SHIMULIEA
5398,Rohima khanom,80,SHIMULIEA
5402,Tani,80,SHIMULIEA
5543,Mrs Tanjila Begum,80,SHIMULIEA
5578,Sumiya,80,SHIMULIEA
1682,Chumki,81,BOR KULA
1815,Molina,81,BOR KULA
1816,Purnima,81,BOR KULA
1817,Pilu Rani Biswash,81,BOR KULA
1818,Silpi,81,BOR KULA
2429,Lipi,81,BOR KULA
2732,Sonchita,81,BOR KULA
2977,NOMITA,81,BOR KULA
3027,Suruchi,81,BOR KULA
3028,Purnima,81,BOR KULA
3293,Nasrin,81,BOR KULA
3409,Sokiron,81,BOR KULA
3433,Bijoli,81,BOR KULA
3697,Miss. Sokiron,81,BOR KULA
3760,Etasmin Bagom,81,BOR KULA
3944,Monira begum,81,BOR KULA
4020,Sakela,81,BOR KULA
4216,Hira Begum,81,BOR KULA
4218,Konika Biswas,81,BOR KULA
4319,Bali,81,BOR KULA
4326,Resma Khatun-01916529728-,81,BOR KULA
4423,Ranju Khatun,81,BOR KULA
4434,Sormila,81,BOR KULA
4447,Mst. Rita Begum,81,BOR KULA
4473,Sabana Begum,81,BOR KULA
4474,Nargish Begum,81,BOR KULA
4492,Adori Khanom,81,BOR KULA
4553,Tania Parvin,81,BOR KULA
4616,Thamina,81,BOR KULA
4648,Mis. Parvin Khanom,81,BOR KULA
4660,Salma,81,BOR KULA
4674,Mst. Fatema-0191815163,81,BOR KULA
4685,Sultana,81,BOR KULA
4765,Jahanara,81,BOR KULA
4844,Chaina Begum,81,BOR KULA
4869,Nargish,81,BOR KULA
4894,Sajada Khanom,81,BOR KULA
4934,Sampa,81,BOR KULA
4980,Laky Begum,81,BOR KULA
5053,Shakiron Begum,81,BOR KULA
5093,Sakela,81,BOR KULA
5160,Mst: Rekta Khanam,81,BOR KULA
5170,Habiba Begum,81,BOR KULA
5237,Sormila,81,BOR KULA
5248,Mst. Moyna khanom,81,BOR KULA
5313,Hosnara Begum,81,BOR KULA
5344,Mst : Parvin Begum,81,BOR KULA
5357,Sonali Begum,81,BOR KULA
5358,Mst. Ripa Khatun,81,BOR KULA
5391,Tania Parvin,81,BOR KULA
5403,Kulsum Begum,81,BOR KULA
5447,Molina Begum,81,BOR KULA
5476,Shamima Akte,81,BOR KULA
5514,Chaina Begum,81,BOR KULA
5518,Nasrin Begum,81,BOR KULA
5535,SALMA KHANOM,81,BOR KULA
5558,Nahar Begum,81,BOR KULA
5566,Sonali Begum,81,BOR KULA
5575,Farjana Akter Ria,81,BOR KULA
5643,Mrs Nasima Begum,81,BOR KULA
5654,Rokeya Begum,81,BOR KULA
5660,Sufia Begum,81,BOR KULA
5669,Nargis Begum,81,BOR KULA
5696,Resma Khatun,81,BOR KULA
5719,Rukaya Khanom,81,BOR KULA
5737,Mst. Jesmin Naher,81,BOR KULA
5738,Sakela,81,BOR KULA
5742,Sagori Khanom,81,BOR KULA
5791,Hira Khatun,81,BOR KULA
5798,Mrs Rita Begum,81,BOR KULA
5828,Mrs Dulali Begum,81,BOR KULA
5832,Mrs Sefali Akter,81,BOR KULA
5836,Md Mohid Emam,81,BOR KULA
5840,Halima Begum,81,BOR KULA
5866,MRS. NAZMA BEGUM,81,BOR KULA
5942,SONALI BEGUM,81,BOR KULA
5976,REBAKA BEGUM,81,BOR KULA
5977,SULTANA BEGUM,81,BOR KULA
5984,MST. RIPA KHATUN,81,BOR KULA
5988,Mrs. Suma Pervin,81,BOR KULA
6044,URMI KHANAM,81,BOR KULA
6064,SHAKIRON BEGUM,81,BOR KULA
1341,Abdul Hannan,82,GOBRA BAZAR
1342,Jahangir,82,GOBRA BAZAR
1345,Amit Biswas,82,GOBRA BAZAR
1346,Sotto Jit,82,GOBRA BAZAR
1347,Pijus,82,GOBRA BAZAR
1348,Mohidul,82,GOBRA BAZAR
1349,Mofizur,82,GOBRA BAZAR
1350,Uzzal Shil,82,GOBRA BAZAR
1351,Saidur Mina,82,GOBRA BAZAR
1355,Shoha Deb,82,GOBRA BAZAR
1356,Kanai,82,GOBRA BAZAR
1357,Nazrul Islam,82,GOBRA BAZAR
1358,Shaeb Ali,82,GOBRA BAZAR
1359,Bidan Pal,82,GOBRA BAZAR
1361,Jamal Biswas,82,GOBRA BAZAR
1362,Prashanta Roy,82,GOBRA BAZAR
1363,Anup Kundu,83,GOBRA BAZAR
1365,Reshed Akram,82,GOBRA BAZAR
1366,Palash Das,82,GOBRA BAZAR
1367,Brindaban Biswas,82,GOBRA BAZAR
1369,Satto Ranjon,82,GOBRA BAZAR
1383,Atiar Rahman,82,GOBRA BAZAR
1388,Emdadul Haque,82,GOBRA BAZAR
1390,Milon Sk.,82,GOBRA BAZAR
1391,Shambhu Biswas,82,GOBRA BAZAR
1392,Sree Kanto,82,GOBRA BAZAR
1394,Arjan,82,GOBRA BAZAR
1395,Shipon Saha,82,GOBRA BAZAR
1396,Fosir Rahman,82,GOBRA BAZAR
1397,Bodiear Sk.,82,GOBRA BAZAR
1400,Goutam Shikder,82,GOBRA BAZAR
1401,Md. Sagar Sheikh,82,GOBRA BAZAR
1402,Saidur Rahman Khan,82,GOBRA BAZAR
1615,MD HAFIZUR RAHAMAN,82,GOBRA BAZAR
2591,Mitul,82,GOBRA BAZAR
2645,Kiash,82,GOBRA BAZAR
2666,Abdul Hannan,82,GOBRA BAZAR
2679,Md.Alim,82,GOBRA BAZAR
2682,Anawar,82,GOBRA BAZAR
2722,Mukundo,82,GOBRA BAZAR
2762,Belash,82,GOBRA BAZAR
2773,Bakash,82,GOBRA BAZAR
2835,Md. Ramgan Ali,82,GOBRA BAZAR
2836,Jahangir,82,GOBRA BAZAR
2847,Sukumar,82,GOBRA BAZAR
2889,Khuruzzaman,82,GOBRA BAZAR
2911,Sujit,82,GOBRA BAZAR
2982,Amuit,82,GOBRA BAZAR
3086,anoth bagch,82,GOBRA BAZAR
3195,Md. Sultan Sheikh,82,GOBRA BAZAR
3278,Kakoli Begom,82,GOBRA BAZAR
3399,Khairul,82,GOBRA BAZAR
1614,Shahed Ali,145,BICHALI
3612,Sonjoy,82,GOBRA BAZAR
3810,khairul islam,82,GOBRA BAZAR
4222,Nozrul Islam,82,GOBRA BAZAR
4242,Md. Faysal,82,GOBRA BAZAR
4637,Apurbo Kumar Kundu,82,GOBRA BAZAR
4828,Sukanto Baigagi,82,GOBRA BAZAR
4947,Samrat,82,GOBRA BAZAR
4960,Jahangir Alam,82,GOBRA BAZAR
4994,Aktaruzzaman,82,GOBRA BAZAR
5029,Md. Milon Molla,82,GOBRA BAZAR
5293,Md. Atiar Rahman,82,GOBRA BAZAR
5405,Md. Sirajul Islam,82,GOBRA BAZAR
5647,Md Abdullah Shaikh,82,GOBRA BAZAR
5870,Subroto Kundu,82,GOBRA BAZAR
1343,Somir Biswas,83,GOBRA BAZAR
1371,Serajul Islam,83,GOBRA BAZAR
1372,Faruque Hossain,83,GOBRA BAZAR
1373,Kali Pada Biswas,83,GOBRA BAZAR
1375,Bolay Biswas,83,GOBRA BAZAR
1379,Dabu Biswas,83,GOBRA BAZAR
1380,Feroz Ahammed,83,GOBRA BAZAR
1381,Faruq Shakh,83,GOBRA BAZAR
1382,Buddu Deb,83,GOBRA BAZAR
1384,Nasir Sk.,83,GOBRA BAZAR
1385,Ohidul Islam,83,GOBRA BAZAR
1386,Ashim Biswas,83,GOBRA BAZAR
1387,Mihir Bala,83,GOBRA BAZAR
2481,Poltu,83,GOBRA BAZAR
2495,Md: Mahbub,83,GOBRA BAZAR
2589,Asgar,83,GOBRA BAZAR
3392,Md. Shirajul,83,GOBRA BAZAR
3710,Md. Abbas Ali,83,GOBRA BAZAR
3712,Samer Kumar,83,GOBRA BAZAR
3795,Bidhan Kumar Paul,83,GOBRA BAZAR
1364,Shimul,245,MUSURIA
3908,Ashim Kumar,83,GOBRA BAZAR
4013,Torikul Islam,83,GOBRA BAZAR
4181,Bijan Kumar,83,GOBRA BAZAR
4212,MD. RUBAL BISWAS,83,GOBRA BAZAR
4309,Reday SK,83,GOBRA BAZAR
4417,Raj Kumar,83,GOBRA BAZAR
4034,Monisonker Paul,87,AGDIA
4603,Md. Mishor Shak,83,GOBRA BAZAR
4630,Md. Ferdows,83,GOBRA BAZAR
4662,Soriful,83,GOBRA BAZAR
4678,Md.Rofikul Islam,83,GOBRA BAZAR
4691,Belash Roy,83,GOBRA BAZAR
4876,Anath bandhu bagchi,83,GOBRA BAZAR
4878,Anath,83,GOBRA BAZAR
1580,Salma,84,BECHALI
1582,Sobura Begum01890337370-,84,BECHALI
1583,Jibon Nahar,84,BECHALI
1584,Taslima,84,BECHALI
1585,Achia begum,84,BECHALI
1586,Nahar,84,BECHALI
1587,Hosneara,84,BECHALI
1588,Shahanara,84,BECHALI
1589,Sahanaz Begum,84,BECHALI
1591,Achiea,84,BECHALI
1592,Roxona,84,BECHALI
1594,Achiea,84,BECHALI
1598,Parvin,84,BECHALI
1600,Rexona,84,BECHALI
1602,Salina,84,BECHALI
2468,Shrafa,84,BECHALI
2553,Farida begum,84,BECHALI
2554,Lipiara,84,BECHALI
2568,Halena,84,BECHALI
2602,Masuma,84,BECHALI
2735,Rozina,84,BECHALI
2749,Hajara,84,BECHALI
2893,FATEMA begum,84,BECHALI
2894,Lilifa begum,84,BECHALI
2905,Moriam,84,BECHALI
2945,Hoshnera,84,BECHALI
2953,Salma,84,BECHALI
2961,shumi,84,BECHALI
3002,Sapla Khanu,84,BECHALI
3009,Rahima,84,BECHALI
3010,Marufa,84,BECHALI
3015,Dilara Begum,84,BECHALI
3019,Yasmin Khatun,84,BECHALI
3042,Jesmin,84,BECHALI
3046,Buty,84,BECHALI
3126,Rasuna,84,BECHALI
3192,Halima,84,BECHALI
3300,Marina,84,BECHALI
3331,Sajada,84,BECHALI
3363,Mira,84,BECHALI
3422,Shirina,84,BECHALI
3482,Ashma,84,BECHALI
3526,sahanaj,84,BECHALI
3527,Sorifa,84,BECHALI
3559,khadja,84,BECHALI
3569,Forida,84,BECHALI
3627,Josna,84,BECHALI
3711,Komola komola,84,BECHALI
3754,Mis. Rakia,84,BECHALI
3778,Sumie,84,BECHALI
3789,Sufiya begum,84,BECHALI
3790,Masuma Khatun,84,BECHALI
3799,Tania Khatun,84,BECHALI
3806,Rupsana Bagom,84,BECHALI
3833,Aina Bagom,84,BECHALI
3971,Rony Bagom,84,BECHALI
4083,Shati Bagom,84,BECHALI
4091,Hasina begum,84,BECHALI
4099,"Monira Begum,",84,BECHALI
4118,Shrina Bagom,84,BECHALI
4119,Eysmin Bagom,84,BECHALI
4372,Merina merina,84,BECHALI
4373,Nargis,84,BECHALI
4374,Shirina,84,BECHALI
4382,Nila,84,BECHALI
4412,Samsunnahar,84,BECHALI
4424,Parvin Begum,84,BECHALI
4443,Hamida Begum,84,BECHALI
4459,Jasna,84,BECHALI
4467,Resuna begum,84,BECHALI
4472,Ranu Begum-01928383112-,84,BECHALI
4479,TANUKA BEGUM,84,BECHALI
4732,Mst dipa Khatun,84,BECHALI
4768,Jesmin Begum,84,BECHALI
4785,Mst ;rima khatun,84,BECHALI
4786,Nela Begum,84,BECHALI
4796,Helena begum,84,BECHALI
4829,Shamsunnahar,84,BECHALI
4857,Nela,84,BECHALI
4871,Sufiya begum,84,BECHALI
4892,Nahar,84,BECHALI
4924,Romisa Khatun,84,BECHALI
4928,Beauty begum,84,BECHALI
5004,Salma Begum,84,BECHALI
5011,Sufiya begum,84,BECHALI
5095,Helena begum,84,BECHALI
5105,Tuktuky Khanam,84,BECHALI
5113,Kohinur Begum,84,BECHALI
5148,Jasna,84,BECHALI
5184,Rojina Begum,84,BECHALI
5191,Farhana Khatun Rimi,84,BECHALI
5309,Kulsum Nahar,84,BECHALI
5311,Josna Begum,84,BECHALI
5362,MST. DIPA KHATUN,84,BECHALI
5364,Miss. Rojina Khatun,84,BECHALI
5375,Kulsum Begum,84,BECHALI
5381,Sumaiya Khatun,84,BECHALI
5408,Rinku-Begu,84,BECHALI
5421,Asma Begum,84,BECHALI
5459,Lipi Begum,84,BECHALI
5477,Josna Begu,84,BECHALI
5479,Josna Begu,84,BECHALI
5492,Halana Begum,84,BECHALI
5504,Jasmin,84,BECHALI
5516,Josna Begum,84,BECHALI
5526,Nasrin Bagom,84,BECHALI
5676,Pia Khanom,84,BECHALI
6025,LABONI KHATUN,84,BECHALI
6030,SOBURA BEGUM,84,BECHALI
1049,Eitika,85,BON KHALISHA KHALI
1050,Alpona biswas,85,BON KHALISHA KHALI
1052,Kamona Biswas,85,BON KHALISHA KHALI
1053,Anjona Biswas,85,BON KHALISHA KHALI
1315,Promila,85,BON KHALISHA KHALI
1316,Mili,85,BON KHALISHA KHALI
1317,Rupali Biswas,85,BON KHALISHA KHALI
1318,Mita,85,BON KHALISHA KHALI
1319,Durga biswas,85,BON KHALISHA KHALI
1320,Indra,85,BON KHALISHA KHALI
2639,Mridula Gain,85,BON KHALISHA KHALI
2654,Shefale,85,BON KHALISHA KHALI
2660,Nandita,85,BON KHALISHA KHALI
2715,Anita,85,BON KHALISHA KHALI
2800,Shapna,85,BON KHALISHA KHALI
2812,Jogmaya,85,BON KHALISHA KHALI
2873,Dipty,85,BON KHALISHA KHALI
2903,Ratna ray,85,BON KHALISHA KHALI
3644,Joyanti Rani Biswas,85,BON KHALISHA KHALI
3668,Choncola Sil,85,BON KHALISHA KHALI
3684,Ratna Rani,85,BON KHALISHA KHALI
3796,Sapna biswas,85,BON KHALISHA KHALI
3878,Ullashi bhowmick,85,BON KHALISHA KHALI
4111,Shefali Mollik,85,BON KHALISHA KHALI
4123,Anima Biswas,85,BON KHALISHA KHALI
4141,Kumare Lovely Das,85,BON KHALISHA KHALI
4155,Madhuri Biswas,85,BON KHALISHA KHALI
4209,Sucitra,85,BON KHALISHA KHALI
4531,Anita biswas,85,BON KHALISHA KHALI
4614,Maya Biswas,85,BON KHALISHA KHALI
4632,Shuly Biswas,85,BON KHALISHA KHALI
4705,Sapna biswas,85,BON KHALISHA KHALI
4836,Mina ray,85,BON KHALISHA KHALI
5046,Tama Rani Biswas,85,BON KHALISHA KHALI
5121,Ullashi Voumik,85,BON KHALISHA KHALI
5246,Pryanka,85,BON KHALISHA KHALI
5417,Indra Thaku,85,BON KHALISHA KHALI
5617,Ullashi 01738669805,85,BON KHALISHA KHALI
5708,Dulali Foujdar,85,BON KHALISHA KHALI
5748,Anjona Biswash,85,BON KHALISHA KHALI
6005,ULLASHI BHOWMICK,85,BON KHALISHA KHALI
2024,Parul,86,AGDIA
2026,Angira Bagum,86,AGDIA
2027,Molina Begum,86,AGDIA
2028,Tahomina begum,86,AGDIA
2029,Raziea,86,AGDIA
2030,Rina,86,AGDIA
2031,Shilpi,86,AGDIA
2032,Porina,88,AGDIA
2036,Jesmin,86,AGDIA
2037,Afroza,86,AGDIA
2040,Rohima,88,AGDIA
2041,Shilipa,86,AGDIA
2042,Monira,86,AGDIA
2043,Sonia begum,86,AGDIA
2044,Aleyea,88,AGDIA
2045,Rozina,86,AGDIA
2046,Josna,86,AGDIA
2047,Kohinur,86,AGDIA
2049,Selina,86,AGDIA
2050,Chaina,86,AGDIA
2053,Lutfunnhar,86,AGDIA
2054,Shahida,86,AGDIA
2056,Hafiza,88,AGDIA
2190,Siuly Bhgum,86,AGDIA
2414,Hosneara,86,AGDIA
2415,Nice,86,AGDIA
2475,Nadira,88,AGDIA
2482,Nur Nahar,86,AGDIA
2521,Akhiran,86,AGDIA
2599,MuktyBegum,86,AGDIA
2637,Soboron,86,AGDIA
2638,Rubiyea,86,AGDIA
2640,Sweety,86,AGDIA
2665,Sheuly,88,AGDIA
2677,Shima,88,AGDIA
2724,Sherina,86,AGDIA
2877,Tuktoki,86,AGDIA
2899,Moina,86,AGDIA
2975,Hasi,86,AGDIA
2991,Rowshanara,86,AGDIA
2992,Panna,86,AGDIA
3035,Mitali,86,AGDIA
3051,Santona Begum,88,AGDIA
3064,Lutfunnesa,88,AGDIA
3131,Nurjahan,88,AGDIA
3140,Rehana,86,AGDIA
3152,Shkila,86,AGDIA
3183,Najmin,86,AGDIA
3215,Anowera,86,AGDIA
3280,Razia,86,AGDIA
3281,Rahima,88,AGDIA
3287,sati,88,AGDIA
3288,Sarmin,88,AGDIA
3307,Salsha,86,AGDIA
3325,Nasima,86,AGDIA
3334,Moktie,88,AGDIA
3352,Taslima,86,AGDIA
3361,Soburan,88,AGDIA
3382,suffra,86,AGDIA
3393,Akhoron,88,AGDIA
3428,Jorna Begum,86,AGDIA
3453,Aroti,86,AGDIA
3538,Reta begum,86,AGDIA
3539,Nurnahar,86,AGDIA
3564,Resma Begum,88,AGDIA
3565,salina,86,AGDIA
3617,Sheuly Begum,86,AGDIA
3641,Jharna,88,AGDIA
3664,Rubina Bagum,88,AGDIA
4612,Hosneara Begum,86,AGDIA
1116,Subbroto,87,AGDIA
1253,Sela,87,AGDIA
1256,Rita,87,AGDIA
3040,Shefaly,87,AGDIA
1354,Tapos Biswas,87,AGDIA
1612,Palok Kanti bakshi,87,AGDIA
1620,Pizus Kanti,87,AGDIA
3479,Dipok,87,AGDIA
3553,Kohinur,87,AGDIA
3625,Md. Kayes,87,AGDIA
3669,Md Mamun,87,AGDIA
3736,Irani Bagom,87,AGDIA
3737,Noor Islam,87,AGDIA
3770,Khokon Kumar,87,AGDIA
3819,Biplob Kumar,87,AGDIA
3828,Habil Molla \`,87,AGDIA
3848,Md Reaij,87,AGDIA
3895,Gopinath Adhikary,87,AGDIA
3907,A K M Sajadul,87,AGDIA
3987,Subodh Kumar Podder,87,AGDIA
4014,Tohin Kazi,87,AGDIA
4058,Md. Nezamul Islam,87,AGDIA
4064,Protap Biswas,245,MUSURIA
4069,Jaber Sikder,87,AGDIA
4072,Md Mahabur,87,AGDIA
4079,MD. AHAD MOLLA mollah,87,AGDIA
4081,Milon kumar de,87,AGDIA
4114,Hira Rani,87,AGDIA
4334,Pronob Sannal,87,AGDIA
4394,Md. Abul Mullah,87,AGDIA
4400,Kana,87,AGDIA
4430,Rakhi Rani biswas,87,AGDIA
4468,Shabuj Ali,87,AGDIA
4545,Md.Rasel Sarder,87,AGDIA
4561,Asit Sannyal,87,AGDIA
4601,Md. Sabbir Mollah,87,AGDIA
4680,Md. Kazi Mohiul Islam,87,AGDIA
4736,Debbrato Biswas,87,AGDIA
4764,Mst Hira khatun,87,AGDIA
4809,Md sanaullah bengir,87,AGDIA
4843,Md. Raseed Molla,87,AGDIA
4855,Gurapado Biswas,87,AGDIA
4916,Samer Biswas,87,AGDIA
4979,Pronob,87,AGDIA
5101,Rakibul Mollah,87,AGDIA
5143,Pallab Kumar Biswas,87,AGDIA
5159,Kazi Abu Jaber,87,AGDIA
5178,Md Asmayul Shaik,87,AGDIA
5189,Md. Jahid Molla,87,AGDIA
5197,Mahabur Biswas,87,AGDIA
5211,Hafizur Biswas,87,AGDIA
5223,Sheik Md. Neyamul Islam,87,AGDIA
5241,Md. Likot Ali Molla,87,AGDIA
5294,MD. JOHIRUL ISLAM,87,AGDIA
5425,Md. shamim Hasa,87,AGDIA
5438,Amitav Biswa,87,AGDIA
5528,Md. Abdul Hallm Molla,87,AGDIA
5551,Md. Obaydulla,87,AGDIA
5630,Riday,87,AGDIA
5646,Preetish Molli,87,AGDIA
5856,Md Imdadul Hauqe Shaikh,87,AGDIA
5862,Md Asif Khandakar,87,AGDIA
5884,Mithul Kumar Mollock,87,AGDIA
5911,Md Likot Ali Molla,87,AGDIA
5929,BIPUL KUMAR BALA,87,AGDIA
5940,SUFAL MALAKAR,87,AGDIA
6003,MD MOHEBBUR BISWAS,87,AGDIA
6080,ASHRAFUL ISLAM,87,AGDIA
3706,Rouson ara Begum,88,AGDIA
3729,Rohima,88,AGDIA
3826,Rohima beagum,88,AGDIA
3854,Jahida Bagom,88,AGDIA
3903,Jmila beagum,88,AGDIA
3910,Sultana Bagom,88,AGDIA
3965,Molina begum,88,AGDIA
4056,Eity Bagom,88,AGDIA
4057,Kurciea Bagom,88,AGDIA
4106,Rehana Bagom,88,AGDIA
4145,Ripa Parvin,88,AGDIA
4196,Rubaiya begum,88,AGDIA
4259,Rokeya Khatun,88,AGDIA
4356,Konika Begom,88,AGDIA
4414,Kurcia,88,AGDIA
4772,Parul begum,88,AGDIA
1686,Nargis,89,ARPARA
1687,Moyna,89,ARPARA
1688,Rina,89,ARPARA
1690,Salina,89,ARPARA
1692,Jhunu,89,ARPARA
1693,Baby,89,ARPARA
1694,Konika,89,ARPARA
1695,Sila,89,ARPARA
1696,Sirina,89,ARPARA
1697,Sahanara,89,ARPARA
1698,Sima,89,ARPARA
1700,Sahida,89,ARPARA
1701,Sonchita,89,ARPARA
1702,Monira,89,ARPARA
1703,Sakiron,89,ARPARA
1705,Taslima,89,ARPARA
1706,Sarmin,89,ARPARA
2454,Rina,89,ARPARA
2586,Hiara,89,ARPARA
2663,Fatima,89,ARPARA
2813,Selina,89,ARPARA
2820,Jasmin,89,ARPARA
2845,Fatama,89,ARPARA
2890,Hajara,89,ARPARA
2897,Sarmin,89,ARPARA
3016,Hosneara,89,ARPARA
3017,Easmin,89,ARPARA
3020,Taslima,89,ARPARA
3177,Roume Begum,89,ARPARA
3279,Hajara,89,ARPARA
3305,Monoyara,89,ARPARA
3343,Moriem,89,ARPARA
3350,Jhorna,89,ARPARA
3357,Rasma,89,ARPARA
3365,Sarmin,89,ARPARA
3366,Runa,89,ARPARA
3374,Sahedia,89,ARPARA
3390,Sumie,89,ARPARA
3413,Sadiea,89,ARPARA
3429,Sakiea,89,ARPARA
3470,Rojina,89,ARPARA
3530,Forida,89,ARPARA
3531,Shefali,89,ARPARA
3532,Kalpana Biswas,89,ARPARA
3533,Rotna,89,ARPARA
3550,Aorsona,89,ARPARA
3554,Sampa,89,ARPARA
3691,Rehana Begom,89,ARPARA
3739,Miss Laila,89,ARPARA
3751,Monju,89,ARPARA
3752,Ani Bagom,89,ARPARA
3805,Jesmin,89,ARPARA
3818,Shila Rani,89,ARPARA
3850,Pata Rani Gossami,89,ARPARA
3959,Eismin Bagom,89,ARPARA
4169,Fatema Begum,89,ARPARA
4186,Pritilota Biswas,89,ARPARA
4187,Shiuly Begom,89,ARPARA
4228,Nurunnahar Begum,89,ARPARA
4229,Abeda Begum,89,ARPARA
4230,Beauty Biswas,89,ARPARA
4285,Sokina Begum,89,ARPARA
4324,Sahida Begom,89,ARPARA
4364,Hena Rani Roy,89,ARPARA
4411,Parul Begum,89,ARPARA
4427,Monoara KHATUN,89,ARPARA
4438,Sakea Begum,89,ARPARA
4439,Mis Nasima 0,89,ARPARA
4440,Kamona Ray,89,ARPARA
4457,Sandha Rani Biwas,89,ARPARA
4510,Hera Khanam,89,ARPARA
4524,Nurunnahar Begum,89,ARPARA
4525,Tapoti Biswas,89,ARPARA
4539,Archona Biswas,89,ARPARA
4599,Nuri Begom,89,ARPARA
4622,Bijali Roy,89,ARPARA
4623,Tulia Khatun,89,ARPARA
4667,Santa Khatun,89,ARPARA
4723,Hosneara Begum,89,ARPARA
4739,Dipali,89,ARPARA
4769,ABEDA KHATUN,89,ARPARA
4787,Jhorna,89,ARPARA
4806,Buti,89,ARPARA
4820,Rojina,89,ARPARA
4834,Tuktuki,89,ARPARA
4848,Marium Khatun,89,ARPARA
4860,Dipali,89,ARPARA
4897,Milina,89,ARPARA
4927,Hosneara Begum,89,ARPARA
4932,Koruna,89,ARPARA
4952,Sathi Khanom,89,ARPARA
4975,Jesmin,89,ARPARA
4988,Koruna,89,ARPARA
5021,Bindu Sarkar,89,ARPARA
5064,Santa,89,ARPARA
5067,Shilpi,89,ARPARA
5114,Fatama,89,ARPARA
5157,Nishat Sultana(Lina)-019131731961,89,ARPARA
5198,Sonia,89,ARPARA
5283,MASURA KHATUN,89,ARPARA
5284,Rohima Khatun,89,ARPARA
5324,Chanda Rani Mohanta,89,ARPARA
5351,Biuti Gossami,89,ARPARA
5371,Mst. Asma Khanam,89,ARPARA
5386,Nargis Sultana,89,ARPARA
5396,Mst Hosneara Begum,89,ARPARA
5401,Tuktuki Barai,89,ARPARA
5458,Mita Biswas,89,ARPARA
5466,ARIFA AKTER,89,ARPARA
5487,Runa Khatun,89,ARPARA
5598,Jesmin,89,ARPARA
5641,Bina Begum,89,ARPARA
5701,Rojina Begum,89,ARPARA
5731,Sunjira,89,ARPARA
5763,MST. RAHIMA KHATUN,89,ARPARA
5784,Koruna Gosami,89,ARPARA
5837,Baby Begum,89,ARPARA
5894,Liya Khatun,89,ARPARA
5938,SANCITA RANI BISWAS,89,ARPARA
5969,KARIMA KHATUN,89,ARPARA
5973,KHADIZA KHATUN,89,ARPARA
5989,SURIA SULTINA SOPNA,89,ARPARA
6029,SUMI BEGUM,89,ARPARA
6046,MST RUPA KHATUN,89,ARPARA
6050,SHEFALI BEGUM,89,ARPARA
6052,NILA BEGUM,89,ARPARA
6105,SURAYIA KHATUN,89,ARPARA
2194,Anjona,90,SUMARU KHOLA
2307,Rupa,90,SUMARU KHOLA
2308,Archona,90,SUMARU KHOLA
2310,Selina,90,SUMARU KHOLA
2315,Josna,90,SUMARU KHOLA
2472,Riyea,90,SUMARU KHOLA
2575,Rabayea,90,SUMARU KHOLA
2811,Rekha,90,SUMARU KHOLA
3024,Porina,90,SUMARU KHOLA
3026,Joshoda,90,SUMARU KHOLA
3483,Hosnara,90,SUMARU KHOLA
3484,Dulare,90,SUMARU KHOLA
3485,Aklima,90,SUMARU KHOLA
3486,Kobita,90,SUMARU KHOLA
3487,Mina,90,SUMARU KHOLA
3488,Abda,90,SUMARU KHOLA
3489,Ashma,90,SUMARU KHOLA
3727,Molina,90,SUMARU KHOLA
3853,Rumica Bagom,90,SUMARU KHOLA
3876,Asma Bagum,90,SUMARU KHOLA
3961,Hira Bagom,90,SUMARU KHOLA
3963,Paire Bagom,90,SUMARU KHOLA
4090,Lovely Begum,90,SUMARU KHOLA
4098,Hira Begum,90,SUMARU KHOLA
4117,Salma Begum,90,SUMARU KHOLA
4150,Hira Begum,90,SUMARU KHOLA
4174,Sume Begom,90,SUMARU KHOLA
4321,Asma begom,90,SUMARU KHOLA
4481,Afroja begum,90,SUMARU KHOLA
4548,Eati khaton,90,SUMARU KHOLA
4558,Pengira Khatun,90,SUMARU KHOLA
4668,Sorna,90,SUMARU KHOLA
4676,Subarna,90,SUMARU KHOLA
4879,Ambia begum,90,SUMARU KHOLA
4889,Asma,90,SUMARU KHOLA
4951,Kobita Sardar,90,SUMARU KHOLA
5177,Nipa Khatun,90,SUMARU KHOLA
5187,Hira Khanom,90,SUMARU KHOLA
5222,Dulari Begum,90,SUMARU KHOLA
5308,Afroza Begum,90,SUMARU KHOLA
5540,Molina Begum,90,SUMARU KHOLA
5573,Nila,90,SUMARU KHOLA
5746,Molina Begum,90,SUMARU KHOLA
5760,Piary Begum,90,SUMARU KHOLA
5825,Shamima,90,SUMARU KHOLA
5833,Hosneara Begum,90,SUMARU KHOLA
5834,Mrs Esanara Begum,90,SUMARU KHOLA
5835,Mrs Suborna Khatun,90,SUMARU KHOLA
5896,Mrs Piary Begum,90,SUMARU KHOLA
5912,Antora Khanam,90,SUMARU KHOLA
5930,NARGIS BEGUM,90,SUMARU KHOLA
5966,SULTANA AKTHIR RUPA,90,SUMARU KHOLA
5968,NADIRA AKTER,90,SUMARU KHOLA
6020,PERVIN KHANAM,90,SUMARU KHOLA
6082,NADIRA AKTER,90,SUMARU KHOLA
6099,Tania Khatun,90,SUMARU KHOLA
2058,Nadira,91,SHIMULIEA
2059,Shorifa,91,SHIMULIEA
2060,Halima,91,SHIMULIEA
2061,Nargis,91,SHIMULIEA
2062,Taslima,91,SHIMULIEA
2063,Sufiea,91,SHIMULIEA
2066,Khadija,91,SHIMULIEA
2067,Shilpi,91,SHIMULIEA
2068,Laboni,91,SHIMULIEA
2069,Rokyea,91,SHIMULIEA
2070,Monira,91,SHIMULIEA
2072,Salma,91,SHIMULIEA
2073,Thomina,91,SHIMULIEA
2074,Rekha,91,SHIMULIEA
2075,Resma,91,SHIMULIEA
2076,Rikta,91,SHIMULIEA
2077,Jahanara,91,SHIMULIEA
2499,Muslima Begum,91,SHIMULIEA
2578,Majeda,91,SHIMULIEA
2579,Fatema,91,SHIMULIEA
2580,Majeda,91,SHIMULIEA
2729,Sherina,91,SHIMULIEA
2871,Hajara,91,SHIMULIEA
2902,Snati,91,SHIMULIEA
2913,Nargis Begum,91,SHIMULIEA
2925,Sarmin,91,SHIMULIEA
2951,Rokeya,91,SHIMULIEA
2970,FARJANA,91,SHIMULIEA
2981,Ahodora,91,SHIMULIEA
3030,Nadira,91,SHIMULIEA
3036,Hena,91,SHIMULIEA
3052,Monoara,91,SHIMULIEA
3282,Habiba,91,SHIMULIEA
3296,Parvin,91,SHIMULIEA
3297,Sumaya,91,SHIMULIEA
3313,Salama,91,SHIMULIEA
3467,Muslima,91,SHIMULIEA
3723,Shirina Begum,91,SHIMULIEA
4093,Halima Begum,91,SHIMULIEA
4110,RAKHA BEGUM,91,SHIMULIEA
4249,Nadira Begom,91,SHIMULIEA
4391,Campa Begom,91,SHIMULIEA
4433,Bithi Khatun,91,SHIMULIEA
4596,Monoara Begum,91,SHIMULIEA
4643,Achia,91,SHIMULIEA
4658,Rikta Khanam,91,SHIMULIEA
4790,Ranuka,91,SHIMULIEA
5045,Sharmin,91,SHIMULIEA
5120,MURSHIDA KHATUN,91,SHIMULIEA
5263,Rekha Begum,91,SHIMULIEA
5288,Urmi Khatun,91,SHIMULIEA
5365,Mst. Shalma Begum,91,SHIMULIEA
5928,HABIBA BEGUM,91,SHIMULIEA
6013,SHARIFA BEGUM,91,SHIMULIEA
2312,Depa,92,HARIEAR GHOP
1214,Hashi,92,HARIEAR GHOP
1215,Shopna,92,HARIEAR GHOP
1216,Rita Hazra,92,HARIEAR GHOP
1217,Dipti,92,HARIEAR GHOP
1218,Rani,92,HARIEAR GHOP
1220,Shila,92,HARIEAR GHOP
1221,Saroti,92,HARIEAR GHOP
1222,Unnati Rani,92,HARIEAR GHOP
1223,Bobita,92,HARIEAR GHOP
1224,Bagani,92,HARIEAR GHOP
2428,Rehena,92,HARIEAR GHOP
2465,Dhapli,92,HARIEAR GHOP
2606,Sriti,92,HARIEAR GHOP
2617,Kalphona,92,HARIEAR GHOP
2676,Rexona,92,HARIEAR GHOP
2765,Tagor,92,HARIEAR GHOP
2821,Anjoyara,92,HARIEAR GHOP
2822,Depali,92,HARIEAR GHOP
2869,Shampa Biswas,92,HARIEAR GHOP
2969,Nomita,92,HARIEAR GHOP
2979,Rema,92,HARIEAR GHOP
3154,Dilruba,92,HARIEAR GHOP
3255,Rikta,92,HARIEAR GHOP
3310,Salama,92,HARIEAR GHOP
3414,Rikta,92,HARIEAR GHOP
3421,Anjuara,92,HARIEAR GHOP
3442,Anjona,92,HARIEAR GHOP
3456,Nopur,92,HARIEAR GHOP
3474,Sapna,92,HARIEAR GHOP
3534,sika,92,HARIEAR GHOP
3642,Sampa Bisses,92,HARIEAR GHOP
3647,Chondona,92,HARIEAR GHOP
3721,Mim Bagom,92,HARIEAR GHOP
3730,Jasmin,92,HARIEAR GHOP
3741,Eirna Bagom,92,HARIEAR GHOP
3742,Sunita,92,HARIEAR GHOP
3816,Rojina Begum,92,HARIEAR GHOP
3896,Sunita Rani,92,HARIEAR GHOP
3912,Noopur Rani,92,HARIEAR GHOP
3966,Aloka Sarkar,92,HARIEAR GHOP
4037,Anima Biswas,92,HARIEAR GHOP
4139,Orchona Rani,92,HARIEAR GHOP
4146,Reqsona Begom,92,HARIEAR GHOP
4153,Mim Begom,92,HARIEAR GHOP
4200,Rina,92,HARIEAR GHOP
4244,Aloka,92,HARIEAR GHOP
4418,Kolpona Biswes,92,HARIEAR GHOP
4542,Ruma Khatun,92,HARIEAR GHOP
4702,Dipty Biswas,92,HARIEAR GHOP
4821,Rena,92,HARIEAR GHOP
4838,Swapna Rani,92,HARIEAR GHOP
4858,Siraboni biswas,92,HARIEAR GHOP
4942,Nasima,92,HARIEAR GHOP
5022,Chaina biswas,92,HARIEAR GHOP
5279,Shipra Rani Biswas,92,HARIEAR GHOP
5314,Rashmoni,92,HARIEAR GHOP
5372,Archana Biswas,92,HARIEAR GHOP
5505,sompa,92,HARIEAR GHOP
5620,Ashalata Biswas,92,HARIEAR GHOP
5685,Rabeya Begum,92,HARIEAR GHOP
5980,MST. TANIA KHATUN,92,HARIEAR GHOP
5993,MST. RABEYA BEGUM,92,HARIEAR GHOP
5994,MST. MERI BEGUM,92,HARIEAR GHOP
6001,SHAHANARA KHATUN,92,HARIEAR GHOP
6008,SHARATHI RANI,92,HARIEAR GHOP
6009,ANJANA RANI RUDRA,92,HARIEAR GHOP
6023,MITU BISWAS,92,HARIEAR GHOP
6037,MST. RUNA BEGUM,92,HARIEAR GHOP
6060,SAHIDA BEGUM,92,HARIEAR GHOP
6067,MEHERUN NESSA,92,HARIEAR GHOP
6072,DIPTY BISWAS,92,HARIEAR GHOP
6086,SHIKHA BISWAS,92,HARIEAR GHOP
6087,Bannika Begum,92,HARIEAR GHOP
2502,Barsha Adhikary,94,RAMNAGAR
2503,Sabirani Das,94,RAMNAGAR
2504,Aporna Bairagy,94,RAMNAGAR
2505,Ulka Biswash,94,RAMNAGAR
2507,Janata Shikdar,94,RAMNAGAR
2513,Shapra,94,RAMNAGAR
2547,Pushpo,94,RAMNAGAR
2634,Sulata,94,RAMNAGAR
2688,Anjona,94,RAMNAGAR
2741,Anita,94,RAMNAGAR
3001,Kalpana,94,RAMNAGAR
3031,Zunu,94,RAMNAGAR
3065,monibala,94,RAMNAGAR
3400,sumie,94,RAMNAGAR
3405,Sumie,94,RAMNAGAR
3406,Arodha,94,RAMNAGAR
3449,AYsha,94,RAMNAGAR
3594,Meto,94,RAMNAGAR
4371,Anjona,94,RAMNAGAR
4566,Bonani Ray,94,RAMNAGAR
4761,MANIKKA DAS,94,RAMNAGAR
4808,Ulka,94,RAMNAGAR
5276,Tripti Biswash,94,RAMNAGAR
5367,Subarna Biswas,94,RAMNAGAR
2220,Nipa Saha,101,UZIR PUR
2221,Rony,101,UZIR PUR
2223,Serity,101,UZIR PUR
2224,Unnati Roy,101,UZIR PUR
2225,Tanzila,101,UZIR PUR
2226,Sufia,101,UZIR PUR
2227,Rashida,101,UZIR PUR
2228,Pata,101,UZIR PUR
2229,Aisha,101,UZIR PUR
2670,Farida,101,UZIR PUR
2727,Baharun,101,UZIR PUR
2770,Laile,101,UZIR PUR
2827,Samcunnar,101,UZIR PUR
2948,Rabeza,101,UZIR PUR
3196,Roney,101,UZIR PUR
3245,Sajeda,101,UZIR PUR
3404,kamona,101,UZIR PUR
3500,Pata Kathun,101,UZIR PUR
3798,Aorsona Bishas,101,UZIR PUR
3863,Aysa Beagum,101,UZIR PUR
4220,Swapna Khanam,101,UZIR PUR
4221,Santona Begom,101,UZIR PUR
4721,Mimi,101,UZIR PUR
5289,Sagada khatun,101,UZIR PUR
5744,Sumi khanam,101,UZIR PUR
6057,MASURA PARVIN,101,UZIR PUR
6059,SHAHINA AKTER,101,UZIR PUR
1533,Basona,102,MALOPARA
1535,Anjoli,102,MALOPARA
1536,Rekha-0176790997,102,MALOPARA
1537,Parboti,102,MALOPARA
1538,Suchitra,102,MALOPARA
1539,Sima,102,MALOPARA
1631,Anita,102,MALOPARA
1632,Sunita,102,MALOPARA
1633,Nilima,102,MALOPARA
1634,Basomti,102,MALOPARA
1638,Kakoli,102,MALOPARA
1640,Anjoli,102,MALOPARA
2548,Dabi,102,MALOPARA
2601,Olakha,102,MALOPARA
2757,Atosi,102,MALOPARA
2781,Chimpa,102,MALOPARA
2841,Depali,102,MALOPARA
2862,China,102,MALOPARA
2864,Anjona,102,MALOPARA
2881,Mita-019377556470,102,MALOPARA
3184,Champa,102,MALOPARA
3368,Bithka,102,MALOPARA
3469,Mousumi,102,MALOPARA
3498,anita,102,MALOPARA
4179,Susmita Biswas,102,MALOPARA
4331,Archona Biswas,102,MALOPARA
4536,Golapi Biswas,102,MALOPARA
4638,Champa biswas,102,MALOPARA
4781,Anjana Biswas,102,MALOPARA
4782,Shampa,102,MALOPARA
4800,SANGITA DAS,102,MALOPARA
4884,Dipali,102,MALOPARA
4969,Kumari Laxmi Rani,102,MALOPARA
5098,Dipali Rani,102,MALOPARA
5333,Moushumi Biswas,102,MALOPARA
5507,DIPALY RANI BISWAS,102,MALOPARA
5846,Anjoli Biswash,102,MALOPARA
5905,Puja Biswash,102,MALOPARA
1847,Moyna,117,PACHURIA
1849,Hosneara,117,PACHURIA
1850,Tohmina,117,PACHURIA
1852,Molina,117,PACHURIA
1854,Hosneara,117,PACHURIA
1855,Kobori,117,PACHURIA
1856,Tania,117,PACHURIA
1857,Morzina,117,PACHURIA
1858,Monira Begu,117,PACHURIA
1873,Topi,117,PACHURIA
2567,Rana,117,PACHURIA
2789,Buity,117,PACHURIA
2883,Sumaiya,117,PACHURIA
2887,Marina,117,PACHURIA
2895,Hosneara,117,PACHURIA
2910,Camaly,117,PACHURIA
2928,Kabori,117,PACHURIA
2929,Sonia,117,PACHURIA
2954,Molina,117,PACHURIA
3070,Jarina,117,PACHURIA
3194,Rojina Begum,117,PACHURIA
3230,Rina Khatun,117,PACHURIA
3116,Nasrin,127,SRIFALTALA
3378,Salma,117,PACHURIA
3435,Sholie,117,PACHURIA
3504,Rupa,117,PACHURIA
3547,Hosnara,117,PACHURIA
3568,Tuli Podder,117,PACHURIA
3574,Tuktuki,117,PACHURIA
3583,Morjina,117,PACHURIA
3649,Anupa Begum,117,PACHURIA
3660,Pire Bagum-0184708709,117,PACHURIA
3685,Rikta Begum,117,PACHURIA
3700,Jhorna,117,PACHURIA
3719,Rakiea,117,PACHURIA
3734,Taslima Begum,117,PACHURIA
3743,Kobori,117,PACHURIA
3763,Hafija bagom,117,PACHURIA
3764,Monira Bagom,117,PACHURIA
3812,Rabaya begum,117,PACHURIA
3916,Samsonnaer,117,PACHURIA
3999,Salma begum,117,PACHURIA
4274,Hosneary Begum,117,PACHURIA
4353,Tuli Podder,117,PACHURIA
4532,Soheli Begom,117,PACHURIA
4546,Sarmin,117,PACHURIA
4556,Chameli,117,PACHURIA
4722,Rokeya,117,PACHURIA
4749,Anjona,117,PACHURIA
4948,Rikta Begum,117,PACHURIA
4985,Sultana Khanom,117,PACHURIA
5060,Tuli Podder,117,PACHURIA
5065,Sarmin Sultana,117,PACHURIA
5141,Salma Begum,117,PACHURIA
5142,Anjana Saha,117,PACHURIA
5183,Rokeya Begum,117,PACHURIA
5207,Chamili Begum,117,PACHURIA
5221,Tania Parvin,117,PACHURIA
5226,MST. SOHELI BEGUM,117,PACHURIA
5239,Kobori,117,PACHURIA
5271,Jhorna begum,117,PACHURIA
5277,Nasima,117,PACHURIA
5303,MAFUZA AFRI N,117,PACHURIA
5387,Rojina Khatun,117,PACHURIA
5429,Topi Begum,117,PACHURIA
5455,Ujjala Saha,117,PACHURIA
5503,Sopna,117,PACHURIA
5515,Mitu Khatun,117,PACHURIA
5583,Kabori Begum,117,PACHURIA
5666,Sultana Khanom,117,PACHURIA
5740,Munjila Begum,117,PACHURIA
5868,Hosneara Begum,117,PACHURIA
5892,Boishakhi Khanom,117,PACHURIA
5897,Mrs Rani Khanom,117,PACHURIA
5944,REKHA BEGUM,117,PACHURIA
6045,POPY SAHA,117,PACHURIA
1859,Nahar,127,SRIFALTALA
1860,Forida,127,SRIFALTALA
1861,Ambia,127,SRIFALTALA
1862,Sokina,127,SRIFALTALA
1863,Asma,127,SRIFALTALA
1864,Sefali,127,SRIFALTALA
1867,Anzona,127,SRIFALTALA
1868,Parul,127,SRIFALTALA
1869,Mst. Rafeja Begum,127,SRIFALTALA
1870,Salma,127,SRIFALTALA
1871,Sonia,127,SRIFALTALA
1872,Parvin,127,SRIFALTALA
1875,Salma,127,SRIFALTALA
1876,Sabana,127,SRIFALTALA
1877,Sahina,127,SRIFALTALA
1878,Sabana,127,SRIFALTALA
1879,Nur Jahan,127,SRIFALTALA
1880,Moyna,127,SRIFALTALA
1881,Nazma,127,SRIFALTALA
1882,Hawya,127,SRIFALTALA
2420,Rikta,127,SRIFALTALA
2540,Ambiya,127,SRIFALTALA
2736,Howa,127,SRIFALTALA
2737,Nasima,127,SRIFALTALA
2748,Shanara,127,SRIFALTALA
2766,Bithi,127,SRIFALTALA
2914,Lubna,127,SRIFALTALA
2921,Hira Begum,127,SRIFALTALA
2944,Ambia,127,SRIFALTALA
3058,Laila begum,127,SRIFALTALA
3166,soneia,127,SRIFALTALA
3171,Piya,127,SRIFALTALA
3193,Bilasy,127,SRIFALTALA
3259,Panna,127,SRIFALTALA
3271,Rikta,127,SRIFALTALA
3346,Nadera,127,SRIFALTALA
3379,Ambia,127,SRIFALTALA
3463,Shanara,127,SRIFALTALA
3505,Asma-0172124953,127,SRIFALTALA
3580,Rina,127,SRIFALTALA
3650,Runa,127,SRIFALTALA
3658,Sabana Bagum,127,SRIFALTALA
3659,Tahurunesa Begum,127,SRIFALTALA
3744,Buty,127,SRIFALTALA
4035,Sabana Bagom,127,SRIFALTALA
4088,Ambia beagum,127,SRIFALTALA
4089,Moyna begum,127,SRIFALTALA
4311,Sabana Begum,127,SRIFALTALA
4328,Salma Begom,127,SRIFALTALA
4453,Muslima Katun,127,SRIFALTALA
4579,Champa Begum,127,SRIFALTALA
4867,Mina,127,SRIFALTALA
5049,Jasmin Begum,127,SRIFALTALA
5080,Mst. Hosneara Begum,127,SRIFALTALA
5081,Sheuly Begum,127,SRIFALTALA
5084,Piya,127,SRIFALTALA
5100,Mrs Hawa Khatun,127,SRIFALTALA
5395,Sabana,127,SRIFALTALA
5399,Sonaly Khatun,127,SRIFALTALA
5461,Piya Begum,127,SRIFALTALA
5561,Sonia Begum,127,SRIFALTALA
2111,Sila,145,BICHALI
1398,Apurbo Kundu,145,BICHALI
1094,Farad,145,BICHALI
1344,Anoth Bandhu Bakshi,145,BICHALI
1611,Kamruzzaman,145,BICHALI
1617,Rakib Hasan,145,BICHALI
1618,Mahiuddin,145,BICHALI
1622,M.M Hasan Ali,145,BICHALI
1625,Ambia Khanom,145,BICHALI
1629,Asgar Ali,145,BICHALI
2474,Shohag,145,BICHALI
2509,Samul,145,BICHALI
2517,Salina,145,BICHALI
2518,Salina,145,BICHALI
2555,Abdul Halim,145,BICHALI
2611,Shafaly,145,BICHALI
2612,Shukuron,145,BICHALI
2613,Shukuron,145,BICHALI
2674,MD.Mostofa,145,BICHALI
2717,Halim Molla,145,BICHALI
2742,Sumon Rai,145,BICHALI
2750,Nasrin,145,BICHALI
2761,Shanta,145,BICHALI
2802,Monjur,145,BICHALI
2857,Ab Rashid,145,BICHALI
2968,Popy khaton,145,BICHALI
3085,shamim molla,145,BICHALI
3214,Firoz Ali,145,BICHALI
3370,Mofijur,145,BICHALI
3395,Thomina,145,BICHALI
3408,Saddam,145,BICHALI
3441,Safily,145,BICHALI
3540,Sabuj sk,145,BICHALI
2759,Sultana,156,AGDIA
3654,Bishnu Pado-0177917719,145,BICHALI
3655,Md Nojrul,145,BICHALI
3678,Md Mahamud Hasan,145,BICHALI
3707,Alomgeer,145,BICHALI
3774,Md Ebad Ali,145,BICHALI
4003,Sajjat mollah,145,BICHALI
4170,Mahamud Hasan,145,BICHALI
4248,Syed Nozebur,145,BICHALI
4337,Samima Khatun,145,BICHALI
4398,Ashis Boron Saha,145,BICHALI
4727,Sufia Begum,145,BICHALI
4794,Osman Goni,145,BICHALI
4814,Asma Begum,145,BICHALI
4915,Nazrul,145,BICHALI
4949,Abdulla,145,BICHALI
5073,Manik Bagchi,145,BICHALI
5161,Bachu Molla,145,BICHALI
5217,Masum Reza,145,BICHALI
5218,Alamgir kobir,145,BICHALI
5259,Dipak Kumar Biswas,145,BICHALI
5260,Osman Goni,145,BICHALI
5282,Kazi Monoar Hossain,145,BICHALI
5319,Animesh Biswas,145,BICHALI
5349,Md. Mukul Molla,145,BICHALI
5354,Sobuj Shakh,145,BICHALI
5363,Debbrato Biswas,145,BICHALI
5397,Asib,145,BICHALI
5422,Md. Rafiqul Islam,145,BICHALI
5426,Md. Riaz Hossain,145,BICHALI
5431,Sabuj,145,BICHALI
5595,Md. Razzak Ali,145,BICHALI
5634,Sobuj Biswas,145,BICHALI
5637,Md Al Amin,145,BICHALI
5776,Md Mirajul Fakir,145,BICHALI
5941,RATNA KHATUN,145,BICHALI
6004,TRIPTI SHIKDAR,145,BICHALI
1616,Abu Moin Hossain,155,SRIFULTALA
1621,Habibur Rahman,155,SRIFULTALA
1626,Feroz molla,155,SRIFULTALA
1628,Johirul Haque,155,SRIFULTALA
2498,Taraqul,155,SRIFULTALA
2519,Najmul,155,SRIFULTALA
2523,Shiful,155,SRIFULTALA
2624,Md. Monirul Islam Fokir,155,SRIFULTALA
2915,Md Asif,155,SRIFULTALA
2917,Md Jamirul,155,SRIFULTALA
3072,Asmaual,155,SRIFULTALA
3094,Mijanur,155,SRIFULTALA
1368,Raihanaul Haque,245,MUSURIA
1623,Hafijur Rahman,245,MUSURIA
1893,Kallyan,245,MUSURIA
1898,Ripon Kundu,245,MUSURIA
1903,Abdullah,245,MUSURIA
2651,Mili Boiragy,245,MUSURIA
2884,Sohag,245,MUSURIA
3225,Jaber Sikder,155,SRIFULTALA
3606,Nazmul,155,SRIFULTALA
3614,Niaimul,155,SRIFULTALA
3629,Hasibur,155,SRIFULTALA
3630,Ab. Alim,155,SRIFULTALA
3651,Sobuj Molla,155,SRIFULTALA
3667,Pretilota,155,SRIFULTALA
3747,Md. Sujayet,155,SRIFULTALA
3788,Debberoto,155,SRIFULTALA
3797,Md. Khobir Molla,155,SRIFULTALA
3872,Sajib Hossen,155,SRIFULTALA
3939,Md. Toufikur,155,SRIFULTALA
3945,Md. Jamirul Islam,155,SRIFULTALA
3947,MD. KHAIRUZZAMAN,155,SRIFULTALA
3990,Tutul kumar,155,SRIFULTALA
4140,Eaichin Molla,155,SRIFULTALA
4456,Subroto Kumar,155,SRIFULTALA
4504,Shakila Afroj,155,SRIFULTALA
4686,Md.Rana Mollah,155,SRIFULTALA
4776,Tutul,155,SRIFULTALA
4795,Md. Razzak Ali,155,SRIFULTALA
4797,Sujan Biswas,155,SRIFULTALA
5052,Md. Khairul Molla,155,SRIFULTALA
5166,Md. Nazmul Islam,155,SRIFULTALA
5199,Md.Saiful Islam,155,SRIFULTALA
5219,Md Alamgir Shekh,155,SRIFULTALA
5225,Md. Samiul Islam Sazal,155,SRIFULTALA
5243,Md. Anirul Islam,155,SRIFULTALA
5258,Mamun Hossen,155,SRIFULTALA
5269,Joy Prokash Roy,155,SRIFULTALA
5296,Md Rezaul Molla,155,SRIFULTALA
5297,Eyachin Shakh,155,SRIFULTALA
5382,Md. Hozaifa,155,SRIFULTALA
5392,Eshak Molla,155,SRIFULTALA
5448,Imran Moll,155,SRIFULTALA
5671,Shapla Khanom,155,SRIFULTALA
5673,Mrs Nazma Begum,155,SRIFULTALA
5686,Mrs Hamida Begum,155,SRIFULTALA
5704,Sumi,155,SRIFULTALA
5712,Salma Begum,155,SRIFULTALA
5736,Taslima Khatun,155,SRIFULTALA
5754,Mrs Modina Begum,155,SRIFULTALA
5762,Mrs Konokakoli Begum,155,SRIFULTALA
5767,Mrs Akashi Begum,155,SRIFULTALA
5772,Mrs Anjuara,155,SRIFULTALA
5774,Mrs Tania Begum,155,SRIFULTALA
5779,Rabeya Khatun,155,SRIFULTALA
5795,Mrs Munjila Khatun,155,SRIFULTALA
5820,Lovely Begum,155,SRIFULTALA
5830,Sakila Afroj,155,SRIFULTALA
5839,Mrs Ivana Khatun,155,SRIFULTALA
5858,Sopna Khatun,155,SRIFULTALA
5883,Sahanaj Begum,155,SRIFULTALA
5902,Mim,155,SRIFULTALA
5910,Mrs Taslima Begum,155,SRIFULTALA
5925,Mst Bobita Parvin,155,SRIFULTALA
5945,SULTANA BEGUM,155,SRIFULTALA
5946,MST. SHEFALY BEGUM,155,SRIFULTALA
5952,RAIHANUL HAQUE,155,SRIFULTALA
5965,ROJIYA SULTANA,155,SRIFULTALA
5987,AKEYA KHANAM,155,SRIFULTALA
6012,MSt DULALI KHATUN,155,SRIFULTALA
6014,MST BEAUTI BEGUM,155,SRIFULTALA
6018,SUMAIYA AKTER,155,SRIFULTALA
6019,MST. ASMA KHATUN,155,SRIFULTALA
6038,MST. ANOWARA BAKAR,155,SRIFULTALA
6051,MITA ROY,155,SRIFULTALA
6053,MST. AISHA AKTAR,155,SRIFULTALA
6065,MST. KANOKAKOLI,155,SRIFULTALA
6094,MST. ROJINA BEGUM,155,SRIFULTALA
6096,SHALMA BEGUM,155,SRIFULTALA
6100,MST. ANJUMANARA PARVIN,155,SRIFULTALA
6106,TASLIMA KHATUN,155,SRIFULTALA
6107,MST. KURCHINA BEGUM,155,SRIFULTALA
2556,Shamir-01731-650748,156,AGDIA
1610,Monirul Islam,156,AGDIA
1624,Easonul Haque,156,AGDIA
1627,Shahabuddin Molla,156,AGDIA
2000,Mahabur,156,AGDIA
2008,Komol Karmo Kar,156,AGDIA
2425,Khaja,156,AGDIA
2439,Yousuf Ali,156,AGDIA
2479,Abdhur Rahaman,156,AGDIA
2487,Subroto Kumar Pal,156,AGDIA
2494,Joyanto Bakshy,156,AGDIA
2541,AbulBashar,156,AGDIA
2571,Khusrid,156,AGDIA
2583,Bindhu Sharker,156,AGDIA
2592,Uzzal,156,AGDIA
2675,Jahidul,156,AGDIA
2683,Mst.Bobita,156,AGDIA
2687,Md. Motaher,156,AGDIA
2708,MdRasel,156,AGDIA
2711,Kazi Monoar,156,AGDIA
2713,Masuma,156,AGDIA
2723,Shekhor,156,AGDIA
2728,Bikash,156,AGDIA
2730,Sahinur,156,AGDIA
2774,Godador,156,AGDIA
2779,Sahabuddin,156,AGDIA
2806,Mahabur,156,AGDIA
2956,Sultan,156,AGDIA
2959,Tuhin,156,AGDIA
2960,Tushar,156,AGDIA
2990,Basar,156,AGDIA
1900,Eqbal Kobir,156,AGDIA
1904,Ashutosh Kumar Biswas,156,AGDIA
2017,Esrat Ahammed,156,AGDIA
2483,Sukanta Mallik,156,AGDIA
2537,Md. Masud Rana,156,AGDIA
3119,Sumitro Biswas,156,AGDIA
3211,Md. Salim,156,AGDIA
3237,Md. Milon Sheikh,156,AGDIA
3327,Md. Masum,156,AGDIA
3480,Jassim,156,AGDIA
3800,Md. Lion Kha,156,AGDIA
3837,Amanoor,156,AGDIA
3998,Khan Nazrul Najrul Islam,156,AGDIA
4022,Monirul Islam,156,AGDIA
4351,Abu Sayeed,156,AGDIA
4478,Shamim Hasan,156,AGDIA
4575,Mirazul Fakir,156,AGDIA
4752,Shamim Hasan,156,AGDIA
4753,Redoy Hossen,156,AGDIA
4763,Md.Ihesanul hoque,156,AGDIA
4771,Md. Ajanur,156,AGDIA
4866,Bipul Kumar,156,AGDIA
4888,SABUZ,156,AGDIA
4984,Sujon Mina,156,AGDIA
5227,Redoy Hossen,156,AGDIA
5229,Md. Tipu Sultan,156,AGDIA
5292,Gopal Kormokar,156,AGDIA
5345,Abu Tahar,156,AGDIA
5355,Liton Molla-0175875257,156,AGDIA
5360,Mirazul Fakir,156,AGDIA
5489,Samim,156,AGDIA
5520,SABUZ KUMAR GHOSH,156,AGDIA
5527,Rana Molla,246,SOLPUR (FEMALE)
5533,Pikul,156,AGDIA
5559,Manisankar Paul,156,AGDIA
5605,Liton Molla,156,AGDIA
5674,Md Mannan Molla,156,AGDIA
5697,Md Kamruzzaman Sikdar,156,AGDIA
5766,Md Sohanur Islam,156,AGDIA
5808,Md Rakib Hasan,156,AGDIA
5873,Md Rabiul Islam,156,AGDIA
5885,Mamun Molla,156,AGDIA
1884,Lalon,245,MUSURIA
1886,Ahad,245,MUSURIA
1887,Sujon,245,MUSURIA
1889,Liakot,245,MUSURIA
1890,Lovely,245,MUSURIA
1892,Prodip,245,MUSURIA
1894,Munna,245,MUSURIA
1895,Pizus,245,MUSURIA
1897,Humayun kobir,245,MUSURIA
1899,Somendra Nath Sanyal,245,MUSURIA
1902,Sopon Kumar,245,MUSURIA
2019,Ananda K,245,MUSURIA
2447,Unnoty Bagsy,245,MUSURIA
2451,Rabiul,245,MUSURIA
2453,Vismodeb,245,MUSURIA
2531,Anupom,245,MUSURIA
2585,Pranka,245,MUSURIA
2693,Md. Aziz Biswasih,245,MUSURIA
2695,Sagar Molla Razib,245,MUSURIA
2709,Nazmul,245,MUSURIA
2738,Mujibur,245,MUSURIA
3003,Mofizur,245,MUSURIA
3056,Rana Molla,245,MUSURIA
3098,MD. Rasel,245,MUSURIA
3143,Anower Hossain,245,MUSURIA
3185,Amit Kumar Bala,245,MUSURIA
3238,Rihan,245,MUSURIA
3332,Monna,245,MUSURIA
3341,Akubul,245,MUSURIA
3605,Anupom narion,245,MUSURIA
3616,Rasel,245,MUSURIA
3698,Md. Abu Taleb,245,MUSURIA
4005,Asikuzzaman -0174085575,245,MUSURIA
4112,Akhibul Islam,245,MUSURIA
4726,Md. Rasel Shekh,245,MUSURIA
4825,Anshopati Biswas,245,MUSURIA
4935,Sunil,245,MUSURIA
4955,Md. Anichur Rahaman,245,MUSURIA
5001,Torun,245,MUSURIA
5729,Anupen Kumar Laskar,245,MUSURIA
5519,Farzana Tisha,246,SOLPUR (FEMALE)
5549,Mafuza,246,SOLPUR (FEMALE)`,bR="gobra_member_cloud_dirty",Gm=()=>{try{localStorage.setItem(bR,"1"),ct({type:"member_dirty",payload:null})}catch{}},Db="gobra_member_database",tm="gobra_member_db_seed",Me=l=>String(l??"").trim().replace(/\s+/g,"").toUpperCase(),xo=l=>String(l??"").trim();function zn(){try{const l=localStorage.getItem(Db),o=l?JSON.parse(l):[];return Array.isArray(o)?o:[]}catch{return[]}}function mr(l){try{localStorage.setItem(Db,JSON.stringify(l))}catch{}window.dispatchEvent(new Event("member-db-changed"))}function pR(l){const o=zn(),u=Me(l.memberCode),c={...l,memberCode:xo(l.memberCode),updatedAt:new Date().toISOString()},d=o.findIndex(A=>Me(A.memberCode)===u);d>=0?o[d]={...o[d],...c}:o.unshift(c),mr(o);try{ct({type:"member",payload:c})}catch{}return c}function Bh(l){const o=Me(l);mr(zn().filter(u=>Me(u.memberCode)!==o));try{ct({type:"member_del",payload:xo(l)})}catch{}}const gR=["9001"];function RR(){const l=new Set(gR.map(c=>Me(c))),o=zn(),u=o.filter(c=>l.has(Me(c.memberCode)));if(!u.length)return 0;mr(o.filter(c=>!l.has(Me(c.memberCode))));for(const c of u)try{ct({type:"member_del",payload:c.memberCode})}catch{}return u.length}function SR(l=!1){try{if(!ir()){try{localStorage.setItem(tm,em)}catch{}return null}if(!l&&localStorage.getItem(tm)===em)return null;const{members:o}=Km(hR);if(!o.length)return null;const u=new Map;for(const h of zn()){const x=Me(h.memberCode);x&&u.set(x,h)}let c=0,d=0;const A=new Date().toISOString();for(const h of o){const x=Me(h.memberCode);if(!x)continue;const L=u.get(x);L?(Me(L.memberName)!==Me(h.memberName)||L.centreName!==h.centreName||Me(L.centreCode)!==Me(h.centreCode))&&d++:c++,u.set(x,{...L||{},memberCode:x,memberName:h.memberName,centreCode:h.centreCode,centreName:h.centreName,source:"db",updatedAt:A})}const f=Array.from(u.values());mr(f);try{localStorage.setItem(tm,em)}catch{}return Gm(),{added:c,updated:d,total:f.length}}catch{return null}}function Hh(l){const o=Me(l);return o&&zn().find(u=>Me(u.memberCode)===o)||null}function yR(){return zn().length}function NR(l){const o={};return l.forEach((u,c)=>{const d=xo(u).toLowerCase();if(!d)return;const A=(...f)=>f.some(h=>d.includes(h));o.memberCode===void 0&&A("member code","membercode","member_code","মেম্বার কোড","সদস্য কোড","কোড")?o.memberCode=c:o.memberName===void 0&&A("member name","membername","member_name","মেম্বার","সদস্যের নাম","নাম")?o.memberName=c:o.centreCode===void 0&&A("centre code","center code","centrecode","centercode","centre_code","কেন্দ্র কোড","সেন্টার কোড")?o.centreCode=c:o.centreName===void 0&&A("centre name","center name","centrename","centre_name","কেন্দ্র","সেন্টার")?o.centreName=c:o.bankName===void 0&&A("bank name","bankname","ব্যাংক")?o.bankName=c:o.checkNo===void 0&&A("check no","cheque no","checkno","check no:","চেক")&&(o.checkNo=c)}),o}function Km(l){const o=String(l||"").replace(/\r/g,"").split(`
`).filter(L=>L.trim().length>0);if(!o.length)return{members:[],skipped:0};const u=L=>{if(L.includes("	"))return L.split("	");if(L.includes(",")){const y=[];let p="",w=!1;for(let P=0;P<L.length;P++){const G=L[P];G==='"'?w&&L[P+1]==='"'?(p+='"',P++):w=!w:G===","&&!w?(y.push(p),p=""):p+=G}return y.push(p),y}return L.split(/\s{2,}|;/)},c=u(o[0]),d=NR(c),A=d.memberCode!==void 0&&Object.keys(d).length>=2,f=(L,y,p)=>{const w=A?d[y]:p;return w===void 0?"":xo(L[w])},h=[];let x=0;for(const L of A?o.slice(1):o){const y=u(L),p=f(y,"memberCode",0);if(!p){x++;continue}h.push({memberCode:p,memberName:f(y,"memberName",1),centreCode:f(y,"centreCode",2),centreName:f(y,"centreName",3),bankName:f(y,"bankName",4)||void 0,checkNo:f(y,"checkNo",5)||void 0,source:"db",updatedAt:new Date().toISOString()})}return{members:h,skipped:x}}function Yi(l){const o=zn(),u=new Map(o.map((f,h)=>[Me(f.memberCode),h]));let c=0,d=0;const A=[];for(const f of l){const h=Me(f.memberCode);if(!h)continue;const x=u.get(h);if(x===void 0)o.push({...f,source:"db",updatedAt:new Date().toISOString()}),u.set(h,o.length-1),A.push(f.memberCode),c++;else{const L=o[x];o[x]={...L,memberName:f.memberName||L.memberName,centreCode:f.centreCode||L.centreCode,centreName:f.centreName||L.centreName,bankName:f.bankName||L.bankName,checkNo:f.checkNo||L.checkNo,source:"db",updatedAt:new Date().toISOString()},d++}}return mr(o),Gm(),{added:c,updated:d,total:o.length,addedCodes:A}}const mc="gobra_member_upload_history",Tb=15;function io(){try{const l=localStorage.getItem(mc);if(!l)return[];const o=JSON.parse(l);return Array.isArray(o)?o.filter(u=>u&&typeof u=="object"):[]}catch{return[]}}function nm(l){try{const o=io();o.unshift({...l,id:`up_${Date.now()}_${Math.random().toString(36).slice(2,7)}`,at:new Date().toISOString()}),localStorage.setItem(mc,JSON.stringify(o.slice(0,Tb)))}catch{}}function vR(l){try{localStorage.setItem(mc,JSON.stringify(io().filter(o=>o.id!==l)))}catch{}}function LR(l){const o=io().find(f=>f.id===l);if(!o||o.undoneAt||!o.addedCodes||!o.addedCodes.length)return null;const u=new Set(o.addedCodes.map(OR)),c=zn(),d=c.filter(f=>!u.has(Me(f.memberCode))),A=c.length-d.length;mr(d);for(const f of c)if(u.has(Me(f.memberCode)))try{ct({type:"member_del",payload:xo(f.memberCode)})}catch{}try{Gm()}catch{}try{const f=io().map(h=>h.id===l?{...h,undoneAt:new Date().toISOString(),removed:A,addedCodes:[]}:h);localStorage.setItem(mc,JSON.stringify(f.slice(0,Tb)))}catch{}return{removed:A,total:d.length}}function OR(l){return Me(l)}function jR(l,o,u){const c=Date.parse(u||"")||0,d=new Map(o.map(x=>[Me(x.memberCode),x])),A=new Set,f=[];let h=!1;for(const x of l){const L=Me(x.memberCode);A.add(L);const y=d.get(L);if(y){const p=Date.parse(x.updatedAt||"")||0;(Date.parse(y.updatedAt||"")||0)>p?(f.push(y),h=!0):f.push(x)}else(Date.parse(x.updatedAt||"")||c+1)>c?f.push(x):h=!0}for(const x of o)A.has(Me(x.memberCode))||(f.push(x),h=!0);return{merged:f,changed:h}}const Gb="gobra_entertainment_entries",IR="entertainment_entries",Kb="gobra_entertainment_deleted_ids",Pb="entertainment_deleted_ids";function Pm(){try{const l=localStorage.getItem(Gb),o=l?JSON.parse(l):[];return Array.isArray(o)?o:[]}catch{return[]}}function BR(){return[...Pm()].sort((l,o)=>String(o.date||"").localeCompare(String(l.date||""))||Number(o.id)-Number(l.id))}function _b(l){localStorage.setItem(Gb,JSON.stringify(l)),window.dispatchEvent(new Event("entertainment-changed")),ct({type:"setting",payload:{key:IR,value:JSON.stringify(l)}})}function HR(l){const o={...l,id:l.id||Date.now()};return _b([o,...Pm().filter(u=>u.id!==o.id)]),o}function ac(){try{const l=localStorage.getItem(Kb),o=l?JSON.parse(l):[];return new Set((Array.isArray(o)?o:[]).map(String))}catch{return new Set}}function Zb(l){const o=[...new Set([...l].map(String))].slice(0,500);localStorage.setItem(Kb,JSON.stringify(o))}function wR(l){Zb([...ac(),String(l)]),ct({type:"setting",payload:{key:Pb,value:JSON.stringify([...ac()])}})}function wh(l,o){const u=ac(),c=new Map;for(const A of l)A&&!u.has(String(A.id))&&c.set(String(A.id),A);for(const A of o)A&&!u.has(String(A.id))&&c.set(String(A.id),A);const d=[...c.values()];return d.sort((A,f)=>String(f.date||"").localeCompare(String(A.date||""))||Number(f.id)-Number(A.id)),d}function ER(l){wR(String(l)),_b(Pm().filter(o=>String(o.id)!==String(l)))}const Eh="gobra_local_transactions",Ch="gobra_local_staff_reports",zb="gobra_local_categories",CR="gobra_local_sc_rates",MR="gobra_local_subcat_rules",kR="gobra_local_rebate_rates",UR="gobra_local_kallyan_rule",Mh="gobra_local_day_closures",kh="gobra_local_day_opens",am="gobra_google_sheet_url",Fb="gobra_neon_sync_queue",Uh="gobra_check_entries",DR="gobra_check_entries_backup",xm="gobra_member_database",sc="gobra_member_cloud_dirty",hm="gobra_member_cloud_state";function Us(){try{const l=localStorage.getItem(Fb);return l?JSON.parse(l):[]}catch{return[]}}function Jb(l){try{localStorage.setItem(Fb,JSON.stringify(l)),sr({pendingCount:l.length})}catch{}}function ct(l){const o=Us();o.push(l),Jb(o),Xb().catch(()=>{})}async function Xb(){var u;if(typeof navigator<"u"&&!navigator.onLine)return;const l=Us();if(l.length===0)return;try{await ba()}catch(c){console.warn("[neon] স্কিমা তৈরি করা যায়নি — কিউ পরে আবার চেষ্টা করবে",c);return}const o=[];for(const c of l)try{if(c.type==="tx")await Hb(c.payload);else if(c.type==="tx_del")await wb(c.payload);else if(c.type==="sr")await Eb(c.payload);else if(c.type==="sr_del")await Um(c.payload);else if(c.type==="cat")await _2(c.payload);else if(c.type==="cat_del")await z2(c.payload);else if(c.type==="cat_order"){const d=String(((u=c.payload)==null?void 0:u.type)||"");let A=[];try{const f=localStorage.getItem(zb);A=(f?JSON.parse(f):[]).filter(x=>x.type===d).sort((x,L)=>(x.sortOrder??9e9)-(L.sortOrder??9e9)).map(x=>Number(x.id))}catch{}A.length&&await Z2(d,A)}else if(c.type==="sc")await J2(c.payload);else if(c.type==="sc_del")await X2(c.payload);else if(c.type==="subcat")await Y2(c.payload);else if(c.type==="subcat_del")await q2(c.payload);else if(c.type==="kallyan")await $2(c.payload);else if(c.type==="day_close")await Cb(c.payload);else if(c.type==="day_reopen")await tR(c.payload);else if(c.type==="day_open")await kb(c.payload);else if(c.type==="setting")await Tm(c.payload.key,c.payload.value);else if(c.type==="check")await Ub(c.payload);else if(c.type==="check_del")await uR(c.payload);else if(c.type==="member")await nc([c.payload]);else if(c.type==="member_dirty"){const d=localStorage.getItem(xm),A=d?JSON.parse(d):[];if(A.length>0){const f=await nc(A);localStorage.setItem(hm,JSON.stringify({count:f,syncedAt:new Date().toISOString(),schema:fl()}))}localStorage.removeItem(sc)}else c.type==="member_del"?await AR(String(c.payload)):c.type==="member_clear"&&(await fR(),localStorage.removeItem(sc))}catch(d){console.warn("Failed to process queue item, keeping in retry queue:",c,d),o.push(c)}Jb(o)}let sm=!1;async function lr(){if(sm)return{success:!1,message:"সিংক চলছে… একটু পরে আবার চেষ্টা হবে।"};sm=!0;try{return await TR()}finally{sm=!1}}async function TR(){if(typeof navigator<"u"&&!navigator.onLine)return sr({connected:!1,isSyncing:!1,pendingCount:Us().length}),{success:!1,message:"বর্তমানে ডিভাইসটি অফলাইনে রয়েছে। ডাটা লোকাল মেমরিতে জমা থাকছে।"};sr({isSyncing:!0,lastError:null});try{await ba(),await Xb();const[l,o,u,c,d,A,f,h,x]=await Promise.all([G2(),K2(),P2(),F2(),V2(),Q2(),W2(),eR(),aR()]);let L=[],y=[];try{const C=localStorage.getItem(Eh);C&&(L=JSON.parse(C));const ne=localStorage.getItem(Ch);ne&&(y=JSON.parse(ne))}catch{}const p=Us(),w=new Set(p.filter(C=>C.type==="tx").map(C=>String(C.payload.id))),P=new Set(l.map(C=>String(C.id))),G=L.filter(C=>w.has(String(C.id))&&!P.has(String(C.id))&&C.txDate!=="2026-09-18");if(G.length>0)for(const C of G)await Hb(C),l.unshift(C);const K=new Set(p.filter(C=>C.type==="sr").map(C=>String(C.payload.id))),j=new Set(o.map(C=>String(C.id))),z=y.filter(C=>K.has(String(C.id))&&!j.has(String(C.id)));if(z.length>0)for(const C of z)await Eb(C),o.unshift(C);let ce=[];try{const C=localStorage.getItem(Mh);C&&(ce=JSON.parse(C))}catch{}const M=new Set(h.map(C=>C.closeDate));for(const C of ce)M.has(C.closeDate)||(await Cb(C),h.unshift(C));let te=[];try{const C=localStorage.getItem(kh);C&&(te=JSON.parse(C))}catch{}const k=new Set(x.map(C=>C.openDate));for(const C of te)k.has(C.openDate)||(await kb(C),x.unshift(C));const J=l.filter(C=>C.txDate!=="2026-09-18");localStorage.setItem(Eh,JSON.stringify(J)),localStorage.setItem(Ch,JSON.stringify(o)),localStorage.setItem(Mh,JSON.stringify(h)),localStorage.setItem(kh,JSON.stringify(x)),u.length>0&&localStorage.setItem(zb,JSON.stringify(u)),c.length>0&&localStorage.setItem(CR,JSON.stringify(c)),d.length>0&&localStorage.setItem(MR,JSON.stringify(d)),A&&localStorage.setItem(UR,JSON.stringify(A)),f.length>0&&localStorage.setItem(kR,JSON.stringify(f));try{const C=await Vi("google_sheet_url");if(C&&C.trim().startsWith("http"))(localStorage.getItem(am)||"")!==C&&(localStorage.setItem(am,C),window.dispatchEvent(new CustomEvent("google-sheet-url-changed",{detail:C})));else{const ne=localStorage.getItem(am)||"";ne&&ne.trim().startsWith("http")&&await Tm("google_sheet_url",ne.trim())}}catch(C){console.warn("Failed to sync google_sheet_url:",C)}try{const C="gobra_entertainment_entries";try{const re=await Vi(Pb);if(re){const ae=JSON.parse(re);Zb([...ac(),...Array.isArray(ae)?ae.map(String):[]])}}catch{}const ne=await Vi("entertainment_entries");if(ne){const re=JSON.parse(ne),ae=localStorage.getItem(C),fe=ae?JSON.parse(ae):[],pe=wh(re,fe),B=JSON.stringify(pe),O=I=>`${I.date}|${I.id}`,S=JSON.stringify(wh([...re].sort((I,q)=>String(O(q)).localeCompare(String(O(I)))),[]));B!==(ae||"[]")&&(localStorage.setItem(C,B),window.dispatchEvent(new Event("entertainment-changed"))),B!==S&&ct({type:"setting",payload:{key:"entertainment_entries",value:B}})}}catch(C){console.warn("Entertainment sync failed:",C)}try{const C=await cR(),ne=localStorage.getItem(Uh),re=ne?JSON.parse(ne):[],ae=Us(),fe=new Set(ae.filter(I=>I.type==="check").map(I=>{var q;return String((q=I.payload)==null?void 0:q.id)})),pe=new Set(ae.filter(I=>I.type==="check_del").map(I=>String(I.payload))),B=KR(re,C,fe,pe);B.length>=re.length-pe.size?Th(B)!==Th(re)&&(localStorage.setItem(Uh,JSON.stringify(B)),localStorage.setItem(DR,JSON.stringify(B)),window.dispatchEvent(new CustomEvent("check-changed",{detail:{count:B.length,restored:B.length-re.length,cloud:!0}}))):console.warn(`[neon] চেক এন্ট্রি মার্জ লোকালের চেয়ে ছোট হয়ে যাচ্ছিল (${re.length} → ${B.length}) — লোকাল তালিকাই রাখা হয়েছে`);const O=new Set(C.map(I=>String(I.id))),S=B.filter(I=>!O.has(String(I.id))&&!pe.has(String(I.id)));for(const I of S.slice(0,250))try{await Ub(I)}catch(q){console.warn("[neon] চেক এন্ট্রি আপলোড ব্যর্থ",q);break}}catch(C){console.warn("[neon] চেক এন্ট্রি সিংক ব্যর্থ:",C)}try{const C=localStorage.getItem(xm);let ne=[];try{ne=C?JSON.parse(C):[]}catch{}const re=localStorage.getItem(hm);let ae="",fe="";try{const I=re?JSON.parse(re):{};ae=I.syncedAt||"",fe=I.stamp||""}catch{}if(localStorage.getItem(sc)==="1"&&ne.length>0){const I=await nc(ne);localStorage.removeItem(sc),window.dispatchEvent(new CustomEvent("member-cloud-synced",{detail:{count:I,schema:fl()}}))}const B=await mR(),O=B.ok?`${B.count}|${B.maxUpdated}`:"";if(B.ok&&(!ae||O!==fe)){const I=await dR();if(!(I.length===0&&B.count>0)){const{merged:ee,changed:U}=jR(ne,I,ae);U&&(localStorage.setItem(xm,JSON.stringify(ee)),window.dispatchEvent(new CustomEvent("member-db-changed",{detail:{count:ee.length,cloud:!0}})));const H=new Set(I.map(oe=>Me(oe.memberCode))),N=ee.filter(oe=>!H.has(Me(oe.memberCode)));if(N.length>0)try{await nc(N)}catch(oe){console.warn("[neon] মেম্বার পুশ-মিসিং ব্যর্থ:",oe)}}localStorage.setItem(hm,JSON.stringify({count:B.ok?B.count:ne.length,syncedAt:new Date().toISOString(),stamp:O,schema:fl()}))}else B.ok||console.warn("[neon] মেম্বার-স্ট্যাম্প নামানো যায়নি — এবারের মার্জ এড়িয়ে যাওয়া হলো")}catch(C){console.warn("[neon] মেম্বার ডাটাবেজ সিংক ব্যর্থ:",C)}const ue=new Date().toLocaleTimeString("bn-BD",{hour:"2-digit",minute:"2-digit",second:"2-digit"});return sr({connected:!0,isSyncing:!1,lastSyncTime:ue,lastError:null,pendingCount:Us().length}),window.dispatchEvent(new Event("tx-changed")),window.dispatchEvent(new CustomEvent("rebate-rates-changed",{detail:f})),window.dispatchEvent(new CustomEvent("kallyan-rule-changed",{detail:A})),{success:!0,message:`Neon Database-এ সফলভাবে সিঙ্ক সম্পন্ন! (${l.length} Transactions, ${o.length} Reports)`}}catch(l){return(l==null?void 0:l.message)===Am?(sr({connected:!1,isSyncing:!1,lastError:"",pendingCount:Us().length}),{success:!1,message:"🌐 এই হোস্টে ক্লাউড-সিঙ্ক নেই — ডেটা ডিভাইসে লোকাল থাকছে"}):(console.error("Neon sync failed:",l),sr({connected:!1,isSyncing:!1,lastError:l.message||"Failed to connect to Neon",pendingCount:Us().length}),{success:!1,message:`সিঙ্ক ব্যর্থ: ${l.message||"সার্ভার সংযোগ সমস্যা"}`})}}let Dh=!1;function GR(){Dh||(Dh=!0,setTimeout(()=>{lr().catch(()=>{})},100),window.addEventListener("online",()=>{lr().catch(()=>{})}),document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&!Lh()&&lr().catch(()=>{})}),setInterval(()=>{Lh()||lr().catch(()=>{})},45e3))}function KR(l,o,u,c){const d=new Map;for(const h of Array.isArray(o)?o:[])h&&h.id!==void 0&&h.id!==null&&d.set(String(h.id),h);const A=[],f=new Set;for(const h of Array.isArray(l)?l:[]){if(!h||h.id===void 0||h.id===null)continue;const x=String(h.id);if(c.has(x))continue;f.add(x);const L=d.get(x);A.push(L&&!u.has(x)?{...h,...L,id:h.id}:h)}for(const h of d.values()){const x=String(h.id);!f.has(x)&&!c.has(x)&&A.push(h)}return A.sort((h,x)=>String(h.checkDate||"").localeCompare(String(x.checkDate||""))||Number(h.id)-Number(x.id))}function Th(l){return(Array.isArray(l)?l:[]).map(o=>[String(o==null?void 0:o.id),String((o==null?void 0:o.checkDate)||""),String((o==null?void 0:o.memberCode)||""),String((o==null?void 0:o.bankName)||"").toLowerCase(),String((o==null?void 0:o.checkNo)||"").toLowerCase(),String((o==null?void 0:o.project)||"").toLowerCase(),String((o==null?void 0:o.accountNo)||""),String((o==null?void 0:o.accountType)||""),(o==null?void 0:o.micr)===!0?"1":"0"].join("|")).sort().join(";")}const Ac="gobra_local_transactions",co="gobra_local_staff_reports",Ma="gobra_local_categories",lc="gobra_local_sc_rates",uo="gobra_local_subcat_rules",Vb="gobra_google_sheet_script_url",bm="gobra_local_kallyan_rule",_m="gobra_local_day_closures",Yb="gobra_local_day_opens";function qe(l){if(!l)return"";let o=String(l).trim();if(o.endsWith("=")&&(o=o.slice(0,-1).trim()),!o)return"";const u=["০","১","২","৩","৪","৫","৬","৭","৮","৯"];for(let c=0;c<10;c++)o=o.split(u[c]).join(String(c));if(/^-?\d+(\.\d+)?$/.test(o))return o;if(/^[0-9+\-*/. ]+$/.test(o))try{if(o.includes("+")&&!o.includes("*")&&!o.includes("/")){const A=o.split("+").map(f=>f.trim()).filter(Boolean).reduce((f,h)=>f+(Number(h)||0),0);return String(Math.round(A))}const c=o.replace(/[^0-9+\-*/.]/g,"");if(c){const d=Function(`'use strict'; return (${c})`)();if(typeof d=="number"&&!isNaN(d)&&isFinite(d))return String(Math.round(d))}}catch{}return l}function xl(){try{const l=localStorage.getItem(_m);return l?JSON.parse(l):[]}catch{return[]}}function Zm(l){return xl().find(u=>u.closeDate===l)||null}function Oe(l){const o=Zm(l);return o!==null&&o.status==="closed"}function qb(l){const o=xl().filter(c=>c.closeDate!==l.closeDate),u=[l,...o];return localStorage.setItem(_m,JSON.stringify(u)),window.dispatchEvent(new CustomEvent("day-close-changed",{detail:l})),window.dispatchEvent(new Event("tx-changed")),ct({type:"day_close",payload:l}),l}function pm(l){const o=xl().filter(u=>u.closeDate!==l);if(localStorage.setItem(_m,JSON.stringify(o)),!Gs().some(u=>u.openDate===l)){const u=Fn(l);Qb({openDate:l,prevCloseDate:u.prevDate||null,openingCash:u.prevCash,openingBank:u.prevBank,openedAt:new Date().toISOString(),openedBy:"Cashier"})}window.dispatchEvent(new CustomEvent("day-close-changed",{detail:{closeDate:l,status:"reopened"}})),window.dispatchEvent(new Event("tx-changed")),ct({type:"day_reopen",payload:l})}function Gs(){try{const l=localStorage.getItem(Yb);return l?JSON.parse(l):[]}catch{return[]}}function gm(l){return Gs().find(u=>u.openDate===l)||null}function _t(l){return!l||!l.includes("-")||Oe(l)?!1:!!(Gs().some(d=>d.openDate===l)||sn().some(d=>d.txDate===l)||Nn().some(d=>d.reportDate===l))}function PR(l){return!l||!l.includes("-")?"not_opened":Oe(l)?"closed":_t(l)?"open":"not_opened"}function Qb(l){const o=Gs().filter(c=>c.openDate!==l.openDate),u=[l,...o];return localStorage.setItem(Yb,JSON.stringify(u)),window.dispatchEvent(new CustomEvent("day-open-changed",{detail:l})),window.dispatchEvent(new Event("tx-changed")),ct({type:"day_open",payload:l}),l}function _R(l){if(!l||!l.includes("-"))return null;const o=new Set;for(const d of Gs())d.openDate&&d.openDate.includes("-")&&o.add(d.openDate);for(const d of sn())d.txDate&&d.txDate.includes("-")&&o.add(d.txDate);for(const d of Nn())d.reportDate&&d.reportDate.includes("-")&&o.add(d.reportDate);const u=Array.from(o).filter(d=>d<l).sort(),c=u.length?u[u.length-1]:null;return c?Oe(c)?null:c:null}function $b(l,o="Cashier",u,c){if(!(c!=null&&c.force)){const P=_R(l);if(P)throw new Error(`⛔ আগের কর্মদিবস ${P} Day Close করা হয়নি — আগে সেটি Close করুন (⚙️ Day Admin থেকেও করা যায়), তারপর ${l} Open হবে।`)}const d=Fn(l,{skipManualOpeningFor:l}),A=Math.round(Number(d.prevCash)||0),f=Math.round(Number(d.prevBank)||0),h=u&&u.cash!==void 0&&u.cash!==null&&u.cash!=="",x=u&&u.bank!==void 0&&u.bank!==null&&u.bank!=="",L=h?Math.round(Number(u.cash)||0):A,y=x?Math.round(Number(u.bank)||0):f,p=!!u&&(L!==A||y!==f),w={openDate:l,prevCloseDate:d.prevDate||null,openingCash:p?L:A,openingBank:p?y:f,openedAt:new Date().toISOString(),openedBy:o,...p?{manualOpening:!0,systemOpeningCash:A,systemOpeningBank:f,openingNote:String((u==null?void 0:u.note)||"").trim()}:{}};return Qb(w)}function sn(){try{const l=localStorage.getItem(Ac);return l?JSON.parse(l):[]}catch{return[]}}function Wb(l){if(Oe(l.txDate))throw new Error(`⚠️ এই তারিখের (${l.txDate}) দিন সমাপ্ত (Day Closed) রয়েছে।`);if(!_t(l.txDate))throw new Error(`⚠️ এই তারিখের (${l.txDate}) কর্মদিবস শুরু (Day Open) করা হয়নি। প্রথমে দিনটি Day Open করুন।`);const o=pt(l.txDate);if(o.blocked)throw new Error(o.reason||"দুটি কর্মদিবসের মধ্যবর্তী বন্ধের দিনে কোনো এন্ট্রি করা যাবে না।");const u=sn(),c={...l,id:l.id||Date.now()},d=[c,...u.filter(A=>A.id!==c.id)];return localStorage.setItem(Ac,JSON.stringify(d)),window.dispatchEvent(new Event("tx-changed")),ct({type:"tx",payload:c}),c}function ep(l){const o=sn(),u=o.findIndex(c=>c.id===l.id);return u!==-1?o[u]=l:o.unshift(l),localStorage.setItem(Ac,JSON.stringify(o)),window.dispatchEvent(new Event("tx-changed")),ct({type:"tx",payload:l}),l}function tp(l){const o=String(l),u=sn().filter(c=>String(c.id)!==o);localStorage.setItem(Ac,JSON.stringify(u)),window.dispatchEvent(new Event("tx-changed")),ct({type:"tx_del",payload:l}),wb(l).catch(console.error)}function Nn(l){try{const o=localStorage.getItem(co),u=o?JSON.parse(o):[];return l?u.filter(c=>c.reportDate===l):u}catch{return[]}}function ZR(l){if(Oe(l.reportDate))throw new Error(`⚠️ এই তারিখের (${l.reportDate}) দিন সমাপ্ত (Day Closed) রয়েছে।`);if(!_t(l.reportDate))throw new Error(`⚠️ এই তারিখের (${l.reportDate}) কর্মদিবস শুরু (Day Open) করা হয়নি। প্রথমে দিনটি Day Open করুন।`);const o=pt(l.reportDate);if(o.blocked)throw new Error(o.reason||"দুটি কর্মদিবসের মধ্যবর্তী বন্ধের দিনে কোনো এন্ট্রি করা যাবে না।");const u=Nn();if(!l.id){const A=String(l.staffName||"").toLowerCase().trim(),f=u.filter(h=>h.reportDate===l.reportDate&&String(h.staffName||"").toLowerCase().trim()===A);if(f.length>0){const h=f[0],x=P=>Math.round((f.reduce((G,K)=>G+(Number(K[P])||0),0)+(Number(l[P])||0))*100)/100,L={...h,loan:String(x("loan")),rebate:String(x("rebate")),savings:String(x("savings")),dps:String(x("dps")),admission:String(x("admission")),passbook:String(x("passbook")),savingsAdjust:String(x("savingsAdjust")),nogodReturn:String(x("nogodReturn")),createdAt:new Date().toISOString()},y=f.slice(1).map(P=>P.id),p=new Set(y.map(P=>String(P))),w=u.map(P=>String(P.id)===String(L.id)?L:P).filter(P=>!p.has(String(P.id)));return localStorage.setItem(co,JSON.stringify(w)),window.dispatchEvent(new Event("tx-changed")),ct({type:"sr",payload:L}),y.forEach(P=>{ct({type:"sr_del",payload:P}),Um(P).catch(console.error)}),L}}const c={...l,id:l.id||Date.now(),createdAt:new Date().toISOString()},d=[c,...u.filter(A=>A.id!==c.id)];return localStorage.setItem(co,JSON.stringify(d)),window.dispatchEvent(new Event("tx-changed")),ct({type:"sr",payload:c}),c}function zR(l){const o=Nn(),u=o.findIndex(c=>c.id===l.id);return u!==-1?o[u]=l:o.unshift(l),localStorage.setItem(co,JSON.stringify(o)),window.dispatchEvent(new Event("tx-changed")),ct({type:"sr",payload:l}),l}function FR(l){const o=String(l),u=Nn().filter(c=>String(c.id)!==o);localStorage.setItem(co,JSON.stringify(u)),window.dispatchEvent(new Event("tx-changed")),ct({type:"sr_del",payload:l}),Um(l).catch(console.error)}const zm="gobra_staff_names";function JR(){try{const l=localStorage.getItem(zm);if(l==null)return null;const o=JSON.parse(l||"[]");return Array.isArray(o)?o.filter(u=>u&&String(u.name||"").trim()).map((u,c)=>({id:Number(u.id)||c+1,name:String(u.name).trim()})):[]}catch{return[]}}function ss(){const l=JR();if(l!=null)return l;const o=ir()?["Sakib","Mintu","Alamgir","Monir"].map((u,c)=>({id:c+1,name:u})):[];try{localStorage.setItem(zm,JSON.stringify(o))}catch{}return o}function Fm(l){try{localStorage.setItem(zm,JSON.stringify(l))}catch{}}function XR(l,o){const u=ss(),c=u.findIndex(f=>f.id===l),d=c+o;if(c<0||d<0||d>=u.length)return;const A=u[c];u[c]=u[d],u[d]=A,Fm(u)}function VR(l){const o=String(l||"").trim();if(!o)return null;const u=ss();if(u.some(d=>d.name.toLowerCase()===o.toLowerCase()))return null;const c={id:u.reduce((d,A)=>Math.max(d,A.id),0)+1,name:o};return Fm([...u,c]),c}function YR(l){Fm(ss().filter(o=>o.id!==l))}function ha(l){try{const o=localStorage.getItem(Ma);let u=o?JSON.parse(o):[];if(u.length===0){let d=1;const A=[];for(const[f,h]of Object.entries(yh()))for(const x of h)A.push({id:d++,type:f,name:x});localStorage.setItem(Ma,JSON.stringify(A)),u=A}const c=u.filter(d=>d.type===l);return c.some(d=>d.sortOrder!=null)&&c.sort((d,A)=>(d.sortOrder??9e9)-(A.sortOrder??9e9)),c}catch{return(yh()[l]||[]).map((o,u)=>({id:u+1,type:l,name:o}))}}function Rm(l,o){const u=localStorage.getItem(Ma),c=u?JSON.parse(u):[],d=o.trim(),A=c.filter(h=>h.type===l).reduce((h,x)=>Math.max(h,x.sortOrder??0),0),f={id:Date.now(),type:l,name:d,sortOrder:A+1};return c.push(f),localStorage.setItem(Ma,JSON.stringify(c)),ct({type:"cat",payload:f}),window.dispatchEvent(new CustomEvent("categories-changed",{detail:{action:"add",type:l,name:d}})),f}function np(l,o){const u=localStorage.getItem(Ma),c=u?JSON.parse(u):[],d=c.find(A=>A.id===l);d&&(d.name=o.trim(),localStorage.setItem(Ma,JSON.stringify(c)),ct({type:"cat",payload:d}),window.dispatchEvent(new CustomEvent("categories-changed",{detail:{action:"update",id:l,name:d.name}})))}function Sm(l){const o=localStorage.getItem(Ma),c=(o?JSON.parse(o):[]).filter(d=>d.id!==l);localStorage.setItem(Ma,JSON.stringify(c)),ct({type:"cat_del",payload:l}),window.dispatchEvent(new CustomEvent("categories-changed",{detail:{action:"delete",id:l}}))}function ap(l,o,u){const c=ha(l),d=c.findIndex(L=>L.id===o),A=d+u;if(d<0||A<0||A>=c.length)return;const f=c[d];c[d]=c[A],c[A]=f;const h=localStorage.getItem(Ma),x=h?JSON.parse(h):[];c.forEach((L,y)=>{const p=x.find(w=>w.id===L.id);p&&(p.sortOrder=y+1)}),localStorage.setItem(Ma,JSON.stringify(x)),ct({type:"cat_order",payload:{type:l}}),window.dispatchEvent(new CustomEvent("categories-changed",{detail:{action:"reorder",type:l}}))}const lm=[{id:1,category:"jagoron",subCategory:"1 year",ratePer100:"13.47"},{id:2,category:"jagoron",subCategory:"1.5 year",ratePer100:"20.21"},{id:3,category:"jagoron",subCategory:"2 year",ratePer100:"26.94"},{id:4,category:"agrossor",subCategory:"1 year",ratePer100:"13.47"},{id:5,category:"agrossor",subCategory:"1.5 year",ratePer100:"20.21"},{id:6,category:"agrossor",subCategory:"2 year",ratePer100:"26.94"},{id:7,category:"buniyed",subCategory:"1 year",ratePer100:"13.47"},{id:8,category:"sufolon",subCategory:"1 year",ratePer100:"13.47"},{id:9,category:"mfce",subCategory:"1 year",ratePer100:"13.47"}];function Jm(){try{const l=localStorage.getItem(lc);return l?JSON.parse(l):(localStorage.setItem(lc,JSON.stringify(lm)),lm)}catch{return lm}}function Gh(l){const o=Jm(),u={...l,id:l.id||Date.now()},c=[u,...o.filter(d=>d.id!==u.id)];localStorage.setItem(lc,JSON.stringify(c)),ct({type:"sc",payload:u})}function qR(l){const o=Jm().filter(u=>u.id!==l);localStorage.setItem(lc,JSON.stringify(o)),ct({type:"sc_del",payload:l})}function mo(){try{const l=localStorage.getItem(uo);return l?JSON.parse(l):(localStorage.setItem(uo,JSON.stringify(ro)),ro)}catch{return ro}}function ml(l){const o=mo(),u={...l,id:l.id||Date.now()},c=[u,...o.filter(d=>d.id!==u.id)];localStorage.setItem(uo,JSON.stringify(c)),ct({type:"subcat",payload:u})}function QR(l){const o=mo().filter(u=>u.id!==l);localStorage.setItem(uo,JSON.stringify(o)),ct({type:"subcat_del",payload:l})}function $R(){localStorage.setItem(uo,JSON.stringify(ro)),ro.forEach(l=>{ct({type:"subcat",payload:l})})}const Kh="kallyan_rule_version_v2";function ts(){try{if(localStorage.getItem(Kh)!=="v2")return localStorage.setItem(Kh,"v2"),localStorage.setItem(bm,JSON.stringify(an)),an;const o=localStorage.getItem(bm);if(!o)return an;const u=JSON.parse(o);return{percent:typeof u.percent=="number"?u.percent:an.percent,fixed:typeof u.fixed=="number"?u.fixed:an.fixed,categoryOverrides:{...an.categoryOverrides||{},...u.categoryOverrides||{}}}}catch{return an}}function Ph(l){try{localStorage.setItem(bm,JSON.stringify(l)),window.dispatchEvent(new CustomEvent("kallyan-rule-changed",{detail:l})),ct({type:"kallyan",payload:l})}catch{}}function WR(){try{return localStorage.getItem(Vb)||""}catch{return""}}function rm(l){const o=l.trim();try{localStorage.setItem(Vb,o),window.dispatchEvent(new CustomEvent("google-sheet-url-changed",{detail:o})),ct({type:"setting",payload:{key:"google_sheet_url",value:o}})}catch{}}function Fn(l,o){const u=sn(),c=Nn(),d=["monir","sakib","mintu","alamgir"],A=ha("receive"),f=new Set(d);A.forEach(O=>{const S=O.name.toLowerCase().trim();["bank withdraw","fund receive","others income"].includes(S)||f.add(S)}),c.forEach(O=>{O.staffName&&f.add(O.staffName.toLowerCase().trim())});const h=Array.from(f),x=new Set;u.forEach(O=>x.add(O.txDate)),c.forEach(O=>x.add(O.reportDate)),x.add(l);const L=xl(),y=new Map;Gs().forEach(O=>{O&&O.openDate&&y.set(O.openDate,O)}),y.forEach((O,S)=>{O&&O.manualOpening&&x.add(S)});const p=Array.from(x).sort();let w=0,P=0,G=0,K=0,j="",z="",ce=0,M=0,te=0,k=0,J=0,ue=0,C=0,ne=0,re=0;const ae=Object.fromEntries(h.map(O=>[O,0]));for(const O of p){const S=(o==null?void 0:o.skipManualOpeningFor)===O?void 0:y.get(O);S&&S.manualOpening&&(w=Number(S.openingCash)||0,P=Number(S.openingBank)||0),O===l&&(G=w,K=P,j=z);const I=u.filter(Y=>Y.txDate===O),q=c.filter(Y=>Y.reportDate===O);O<l&&(I.length>0||q.length>0||S&&S.manualOpening)&&(z=O);const ee=I.filter(Y=>Y.type==="receive"),U=I.filter(Y=>Y.type==="payment"),H=ee.filter(Y=>Y.category.toLowerCase().includes("fund receive")).reduce((Y,Q)=>Y+(Number(Q.amount)||0),0),N=ee.filter(Y=>Y.category.toLowerCase().includes("bank withdraw")).reduce((Y,Q)=>Y+(Number(Q.amount)||0),0),oe=ee.filter(Y=>!Y.category.toLowerCase().includes("fund receive")).reduce((Y,Q)=>Y+(Number(Q.amount)||0),0),R=U.reduce((Y,Q)=>Y+(Number(Q.amount)||0),0),$=U.filter(Y=>Y.category.toLowerCase().includes("bank deposit")||Y.category.toLowerCase().includes("bank deposite")).reduce((Y,Q)=>Y+(Number(Q.amount)||0),0);q.reduce((Y,Q)=>Y+Number(Q.loan||0)+Number(Q.savings||0)+Number(Q.dps||0)+Number(Q.passbook||0)+Number(Q.admission||0),0);const ge=U.filter(Y=>{const Q=Y.category.toLowerCase().trim();return Q.includes("fund payment")||Q.includes("fund transfer")||Q.includes("fund")&&!Q.includes("receive")?!1:["jagoron","agrossor","buni","sufolon","mfce"].some(Re=>Q.includes(Re))||!!(Y.subCategory&&Y.subCategory.trim().length>0)}),be=ge.reduce((Y,Q)=>Y+ur(Number(Q.amount)||0,Q.category,ts()),0),ye=ge.length*5;ee.filter(Y=>{const Q=Y.category.toLowerCase().trim();return!(Q.includes("bank withdraw")||Q.includes("fund receive")||Q.includes("welfare")||Q.includes("kallayan")||Q.includes("loan form")||h.some(Re=>Q.includes(Re)))}).reduce((Y,Q)=>Y+(Number(Q.amount)||0),0),ge.reduce((Y,Q)=>Y+(Number(Q.amount)||0),0),q.reduce((Y,Q)=>Y+Number(Q.savingsAdjust||0)+Number(Q.nogodReturn||0),0),U.filter(Y=>!["jagoron","agrossor","buni","sufolon","mfce","bank deposit","bank deposite"].some(Q=>Y.category.toLowerCase().includes(Q))).reduce((Y,Q)=>Y+(Number(Q.amount)||0),0);const Ie=L.find(Y=>Y.closeDate===O&&Y.status==="closed");if(Ie)w=Number(Ie.closingCash)||0,P=Number(Ie.closingBank)||0;else{const Y=Math.round(w+oe+be+ye-R),Q=Math.round(P-N+$+H);w=Y,P=Q}O===l&&(te=oe,k=R,J=$,ue=N,C=H,ne=be,re=ye,I.forEach(Y=>{if(Y.type==="receive"){const Q=Y.category.toLowerCase().trim();for(const Re of h)if(Q===Re||Q.includes(Re)||Re.includes(Q)){ae[Re]=(ae[Re]||0)+(Number(Y.amount)||0);break}}}))}ce=Math.round(G+te+ne+re-k),M=Math.round(K+J-ue+C);const fe=Math.round(G+te),pe=Math.round(k);let B=0;for(const O of h)B+=ae[O]||0;return{date:l,cash:ce,bank:M,prevCash:G,prevBank:K,prevDate:j,todayCashInHand:ce,todayBankBalance:M,receive:fe,expense:pe,todayReceiveOnly:te,todayPayment:pe,todayKallayan:ne,todayLoanForm:re,totalReceiveWithOpening:fe,todayBankDeposit:J,todayBankWithdraw:ue,totalStaffReceive:B,persons:ae}}function e5(l){const o=Fn(l),u=sn(),c=Nn(l),d=o.prevCash,A=o.prevBank,f=u.filter(B=>B.txDate===l),h=f.filter(B=>B.type==="receive"),x=f.filter(B=>B.type==="payment"),L=c.reduce((B,O)=>B+(Number(O.loan)||0)+(Number(O.savings)||0)+(Number(O.dps)||0)+(Number(O.passbook)||0)+(Number(O.admission)||0),0),y=ss().map(B=>B.name.toLowerCase().trim()),p=h.filter(B=>y.some(O=>B.category.toLowerCase().includes(O))).reduce((B,O)=>B+(Number(O.amount)||0),0),w=L>0?L:p,P=d,G=h.filter(B=>B.category.toLowerCase().includes("bank withdraw")).reduce((B,O)=>B+(Number(O.amount)||0),0),K=ha("disburse").map(B=>B.name.toLowerCase().trim()),j=x.filter(B=>{const O=B.category.toLowerCase().trim();return O.includes("fund payment")||O.includes("fund transfer")||O.includes("fund")&&!O.includes("receive")?!1:K.includes(O)||["jagoron","agrossor","buni","sufolon","mfce"].some(S=>O.includes(S))||!!(B.subCategory&&B.subCategory.trim().length>0)}),z=j.reduce((B,O)=>B+ur(Number(O.amount)||0,O.category,ts()),0),ce=j.length*5,M=h.filter(B=>{const O=B.category.toLowerCase().trim();return!(O.includes("bank withdraw")||O.includes("fund receive")||O.includes("welfare")||O.includes("kallayan")||O.includes("loan form")||y.some(S=>O.includes(S)))}).reduce((B,O)=>B+(Number(O.amount)||0),0),te=j.reduce((B,O)=>B+(Number(O.amount)||0),0),k=x.filter(B=>B.category.toLowerCase().includes("bank deposit")||B.category.toLowerCase().includes("bank deposite")).reduce((B,O)=>B+(Number(O.amount)||0),0),J=c.reduce((B,O)=>B+(Number(O.savingsAdjust)||0)+(Number(O.nogodReturn)||0),0),ue=x.filter(B=>{const O=B.category.toLowerCase().trim();return O.includes("fund payment")||O.includes("fund transfer")||O.includes("fund")&&!O.includes("receive")}).reduce((B,O)=>B+(Number(O.amount)||0),0),C=x.filter(B=>{const O=B.category.toLowerCase().trim();return!(j.some(S=>S.id===B.id)||["jagoron","agrossor","buni","sufolon","mfce","bank deposit","bank deposite"].some(S=>O.includes(S))||O.includes("fund payment")||O.includes("fund transfer")||O.includes("fund")&&!O.includes("receive"))}).reduce((B,O)=>B+(Number(O.amount)||0),0),ne=w+P+G+z+ce+M,re=te+k+J+ue+C,ae=Math.round(ne-re),fe=h.filter(B=>B.category.toLowerCase().includes("fund receive")).reduce((B,O)=>B+(Number(O.amount)||0),0),pe=Math.round(A-G+k+fe);return{reportCashInHand:ae,reportBankBalance:pe}}function sp(l){const o=Fn(l);return{cashInHand:o.cash,allReceiveWithoutFund:o.todayReceiveOnly??0,kallyan:o.todayKallayan??0,loanForm:o.todayLoanForm??0,allPayment:o.todayPayment??0,prevCash:o.prevCash}}function pt(l,o){if(!l||!l.includes("-"))return{blocked:!1};const u=sn(),c=Nn(),d=xl(),A=new Set;if(d.forEach(p=>{p.closeDate&&p.status==="closed"&&A.add(p.closeDate)}),u.forEach(p=>{p.txDate&&p.txDate.includes("-")&&A.add(p.txDate)}),c.forEach(p=>{p.reportDate&&p.reportDate.includes("-")&&A.add(p.reportDate)}),o&&o.includes("-")&&A.add(o),d.some(p=>p.closeDate===l&&p.status==="closed"))return{blocked:!0,reason:"এই তারিখের দিন সমাপ্ত (Day Closed) রয়েছে। হিসাব লক ও সুরক্ষিত আছে।"};const h=Array.from(A).filter(p=>p<l).sort(),x=h.length>0?h[h.length-1]:void 0,L=Array.from(A).filter(p=>p>l).sort(),y=L.length>0?L[0]:void 0;return x&&y?{blocked:!0,prevWorkingDate:x,nextWorkingDate:y,reason:`এই তারিখটি (${l}) দুটি কর্মদিবস [${x} ও ${y}]-এর মধ্যবর্তী বন্ধের দিন। এই তারিখে কোনো লেনদেন এন্ট্রি করা সম্পূর্ণভাবে ব্লক ও নিষিদ্ধ।`}:{blocked:!1}}function Xm(){const l=sn(),o=Nn(),u=xl(),c=Gs(),d=new Set;l.forEach(h=>{h.txDate&&h.txDate.includes("-")&&d.add(h.txDate)}),o.forEach(h=>{h.reportDate&&h.reportDate.includes("-")&&d.add(h.reportDate)}),u.forEach(h=>{h.closeDate&&h.closeDate.includes("-")&&d.add(h.closeDate)}),c.forEach(h=>{h.openDate&&h.openDate.includes("-")&&d.add(h.openDate)});const A=Array.from(d).sort().reverse(),f=["রবিবার","সোমবার","মঙ্গলবার","বুধবার","বৃহস্পতিবার","শুক্রবার","শনিবার"];return A.map(h=>{const x=l.filter(k=>k.txDate===h),L=o.filter(k=>k.reportDate===h),y=u.find(k=>k.closeDate===h&&k.status==="closed"),p=_t(h),w=x.filter(k=>k.type==="receive"),P=x.filter(k=>k.type==="payment"),G=w.reduce((k,J)=>k+(Number(J.amount)||0),0),K=P.reduce((k,J)=>k+(Number(J.amount)||0),0),[j,z,ce]=h.split("-").map(Number),M=new Date(j,z-1,ce),te=isNaN(M.getDay())?"":f[M.getDay()];return{date:h,dayName:te,txCount:x.length,receiveCount:w.length,paymentCount:P.length,receiveTotal:G,paymentTotal:K,srCount:L.length,isOpen:p,isClosed:!!y,closingCash:y?Number(y.closingCash):void 0,closingBank:y?Number(y.closingBank):void 0}})}const ym=l=>String(l).padStart(2,"0"),rc=(l,o,u)=>`${l}-${ym(o+1)}-${ym(u)}`,xa=()=>{const l=new Date;return rc(l.getFullYear(),l.getMonth(),l.getDate())},lp=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],t5=["Su","Mo","Tu","We","Th","Fr","Sa"];function Ze(l){if(!l||!l.includes("-"))return"";const[o,u,c]=l.split("-").map(Number);return!o||!u||!c||u<1||u>12?l:`${ym(c)} ${lp[u-1]} ${o}`}const _h=l=>{if(!l||!l.includes("-"))return"";const[o,u,c]=l.split("-");return!o||!u||!c?"":`${c}-${u}-${o.slice(2)}`},n5=l=>{const o=String(l).replace(/\D/g,"").slice(0,6);return o.length<=2?o:o.length<=4?`${o.slice(0,2)}-${o.slice(2)}`:`${o.slice(0,2)}-${o.slice(2,4)}-${o.slice(4)}`},a5=l=>{const o=String(l).replace(/\D/g,"");if(o.length!==6)return null;const u=Number(o.slice(0,2)),c=Number(o.slice(2,4)),d=Number(o.slice(4,6));if(c<1||c>12||u<1)return null;const A=d>50?1900+d:2e3+d;return u>new Date(A,c,0).getDate()?null:rc(A,c-1,u)};function xn({value:l,onChange:o,className:u="",dropUp:c=!1,onOpenTracker:d,manualEntry:A=!1}){const[f,h]=b.useState(!1),[x,L]=b.useState(null),[y,p]=b.useState({}),[w,P]=b.useState({}),G=l&&l.includes("-")?l:xa(),[K,j]=b.useState(Number(G.slice(0,4))||new Date().getFullYear()),[z,ce]=b.useState((Number(G.slice(5,7))||new Date().getMonth()+1)-1),M=b.useRef(null);b.useEffect(()=>{if(f)try{const ae=Xm(),fe={};ae.forEach(B=>{B.isClosed?fe[B.date]="closed":(B.isOpen||B.txCount>0||B.srCount>0)&&(fe[B.date]="unclosed")});const pe=new Date(K,z+1,0).getDate();for(let B=1;B<=pe;B++){const O=rc(K,z,B);fe[O]||pt(O).blocked&&(fe[O]="blocked")}P(fe)}catch{P({})}},[f,K,z]),b.useEffect(()=>{if(!f||!M.current)return;const ae=()=>{if(!M.current)return;const fe=M.current.getBoundingClientRect(),pe=window.innerWidth,B=Math.min(288,pe-16);if(c)if(pe<640){let O=fe.left;O+B>pe-8&&(O=pe-8-B),O<8&&(O=8);const S=O-fe.left;p({left:`${S}px`,right:"auto",width:`${B}px`})}else p({right:0,left:"auto",width:"18rem"});else if(fe.left+B>pe-8){const O=pe-8-(fe.left+B);p({left:`${O}px`,width:`${B}px`})}else p({left:0,width:`${B}px`})};return ae(),window.addEventListener("resize",ae),()=>window.removeEventListener("resize",ae)},[f,c]),b.useEffect(()=>{if(f&&l&&l.includes("-")){const ae=l.split("-").map(Number);ae[0]&&j(ae[0]),ae[1]&&ce(ae[1]-1)}},[f,l]),b.useEffect(()=>{if(!f)return;const ae=fe=>{M.current&&!M.current.contains(fe.target)&&h(!1)};return document.addEventListener("mousedown",ae),document.addEventListener("touchstart",ae),()=>{document.removeEventListener("mousedown",ae),document.removeEventListener("touchstart",ae)}},[f]);const te=new Date(K,z,1).getDay(),k=new Date(K,z+1,0).getDate(),J=[...Array(te).fill(null),...Array.from({length:k},(ae,fe)=>fe+1)];for(;J.length%7;)J.push(null);const ue=()=>{z===0?(ce(11),j(K-1)):ce(z-1)},C=()=>{z===11?(ce(0),j(K+1)):ce(z+1)},ne=ae=>{o(ae),h(!1)},re=xa();return n.jsxs("div",{ref:M,className:"relative",children:[A?n.jsxs("div",{className:`flex w-full items-center gap-0.5 rounded border border-slate-300 ${u.includes("bg-")?"":"bg-white"} focus-within:border-blue-500 ${u}`,children:[n.jsx("input",{value:x!==null?x:_h(l),placeholder:"DD-MM-YY",inputMode:"numeric",autoComplete:"off",onFocus:ae=>{L(_h(l)),ae.target.select()},onChange:ae=>{const fe=ae.target.value.replace(/\D/g,"").slice(0,6);if(L(n5(fe)),!fe){o("");return}const pe=a5(fe);pe&&o(pe)},onBlur:()=>L(null),onKeyDown:ae=>{ae.key==="Enter"&&ae.target.blur()},className:"w-full min-w-0 flex-1 bg-transparent px-2 py-1 font-mono font-semibold text-slate-800 focus:outline-none"}),n.jsx("button",{type:"button",onClick:()=>h(ae=>!ae),title:"Pick from calendar",className:"shrink-0 cursor-pointer px-2 py-1.5 text-slate-400 hover:text-slate-600",children:"▼"})]}):n.jsxs("button",{type:"button",onClick:()=>h(ae=>!ae),className:`flex w-full items-center justify-between rounded border border-slate-300 ${u.includes("bg-")?"":"bg-white"} px-2.5 py-1.5 text-left font-semibold text-slate-800 focus:border-blue-500 focus:outline-none ${u}`,children:[n.jsx("span",{className:"truncate",children:Ze(l)||"Select Date"}),n.jsx("span",{className:"ml-1 text-slate-400",children:"▼"})]}),f&&n.jsxs("div",{style:y,className:`absolute z-50 rounded-xl border border-slate-300 bg-white p-2.5 sm:p-3 shadow-2xl text-slate-900 ${c?"bottom-full mb-2":"mt-1"}`,children:[n.jsxs("div",{className:"mb-2 flex items-center justify-between",children:[n.jsx("button",{type:"button",onClick:ue,className:"h-8 w-8 rounded-full text-lg hover:bg-slate-100 cursor-pointer",children:"‹"}),n.jsxs("div",{className:"flex items-center gap-1 font-semibold",children:[n.jsx("select",{value:z,onChange:ae=>ce(Number(ae.target.value)),className:"rounded border border-slate-300 px-1 py-0.5 text-xs font-bold",children:lp.map((ae,fe)=>n.jsx("option",{value:fe,children:ae},ae))}),n.jsx("select",{value:K,onChange:ae=>j(Number(ae.target.value)),className:"rounded border border-slate-300 px-1 py-0.5 text-xs font-bold",children:Array.from({length:11},(ae,fe)=>K-5+fe).map(ae=>n.jsx("option",{value:ae,children:ae},ae))})]}),n.jsx("button",{type:"button",onClick:C,className:"h-8 w-8 rounded-full text-lg hover:bg-slate-100 cursor-pointer",children:"›"})]}),n.jsx("div",{className:"grid grid-cols-7 text-center text-xs font-semibold text-slate-500",children:t5.map((ae,fe)=>n.jsx("div",{className:`py-1 ${fe===0?"text-rose-600 font-bold":""}`,children:ae},ae))}),n.jsx("div",{className:"grid grid-cols-7 gap-0.5 text-center text-sm",children:J.map((ae,fe)=>{if(!ae)return n.jsx("div",{},fe);const pe=rc(K,z,ae),B=pe===l,O=pe===re,S=fe%7===0,I=w[pe];return n.jsxs("button",{type:"button",onClick:()=>ne(pe),className:`h-9.5 rounded-lg transition relative flex flex-col items-center justify-center cursor-pointer ${B?"bg-blue-600 font-bold text-white shadow-sm":O?"border border-blue-500 font-semibold text-blue-700 hover:bg-blue-50":S?"hover:bg-rose-50 text-rose-600 font-bold":"hover:bg-slate-100 text-slate-800"}`,children:[n.jsx("span",{className:"leading-none text-xs sm:text-sm",children:ae}),I&&n.jsx("span",{className:`h-1.5 w-1.5 rounded-full mt-0.5 ${I==="closed"?B?"bg-emerald-300":"bg-emerald-500":I==="unclosed"?B?"bg-amber-300 animate-pulse":"bg-amber-500 animate-pulse":B?"bg-rose-300":"bg-rose-500"}`,title:I==="closed"?"দিন সমাপ্ত (Day Closed)":I==="unclosed"?"অসমাপ্ত লেনদেন (Unclosed)":"মধ্যবর্তী বন্ধের দিন (এন্ট্রি ব্লকড)"})]},fe)})}),n.jsxs("div",{className:"mt-2 flex items-center gap-1.5",children:[n.jsx("button",{type:"button",onClick:()=>ne(re),className:"flex-1 rounded-lg bg-slate-100 py-1.5 text-xs font-semibold hover:bg-slate-200 cursor-pointer text-slate-700",children:"Today"}),n.jsx("button",{type:"button",onClick:()=>{h(!1),d?d():window.dispatchEvent(new CustomEvent("open-date-tracker"))},className:"rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 px-2 py-1.5 text-xs font-bold transition cursor-pointer",title:"সকল তারিখের অডিট ট্র্যাকার",children:"📋 ট্র্যাকার"})]}),n.jsxs("div",{className:"mt-2 pt-1.5 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-500 font-medium px-1",children:[n.jsxs("span",{className:"flex items-center gap-1",children:[n.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-emerald-500"}),"সমাপ্ত"]}),n.jsxs("span",{className:"flex items-center gap-1",children:[n.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-amber-500"}),"অসমাপ্ত"]}),n.jsxs("span",{className:"flex items-center gap-1",children:[n.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-rose-500"}),"ব্লকড"]}),n.jsxs("span",{className:"flex items-center gap-1",children:[n.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-blue-500"}),"আজ"]})]})]})]})}function Vm(){const[l,o]=b.useState(()=>{try{const c=localStorage.getItem(Rh);return c==="manual"||c==="name-asc"||c==="name-desc"?c:"manual"}catch{return"manual"}});return[l,c=>{o(c);try{localStorage.setItem(Rh,c)}catch{}}]}const s5=[{v:"manual",label:"🖐️ ম্যানুয়াল",hint:"ফিক্সড/আপনার ক্রম"},{v:"name-asc",label:"A→Z",hint:"নাম আগে→পরে"},{v:"name-desc",label:"Z→A",hint:"নাম পরে→আগে"}];function rp({mode:l,onChange:o,compact:u=!1}){return n.jsx("div",{className:"inline-flex rounded-md border border-indigo-300 bg-white overflow-hidden shadow-xs",title:"স্টাফ সাজানোর ক্রম",children:s5.map(c=>n.jsx("button",{title:c.hint,onClick:()=>o(c.v),className:`${u?"px-1 py-[1px] text-[8.5px]":"px-1.5 py-0.5 text-[10px]"} font-bold transition-colors ${l===c.v?"bg-indigo-600 text-white":"bg-white text-indigo-700 hover:bg-indigo-50"}`,children:u?c.label.replace(" ম্যানুয়াল",""):c.label},c.v))})}function l5({selectedDate:l}){const[o,u]=b.useState(null),[c,d]=b.useState(!1),[A,f]=b.useState(!1),h=()=>{const G=Fn(l);u(G),d(Oe(l)),f(_t(l))};b.useEffect(()=>{h();const G=()=>h(),K=()=>h(),j=()=>h();return window.addEventListener("tx-changed",G),window.addEventListener("day-close-changed",K),window.addEventListener("day-open-changed",j),()=>{window.removeEventListener("tx-changed",G),window.removeEventListener("day-close-changed",K),window.removeEventListener("day-open-changed",j)}},[l]);const x=({label:G,bengaliLabel:K,value:j,cls:z,subText:ce})=>n.jsxs("div",{className:`rounded-xl px-2.5 py-1.5 text-white shadow-xs flex items-center justify-between gap-2 ${z}`,children:[n.jsxs("div",{className:"min-w-0 flex-1",children:[n.jsxs("div",{className:"flex items-center gap-1 text-[11px] font-bold opacity-95 truncate",children:[n.jsx("span",{className:"truncate",children:G}),K&&n.jsxs("span",{className:"text-[10px] opacity-80 hidden md:inline font-normal",children:["(",K,")"]})]}),ce&&n.jsx("div",{className:"text-[9px] opacity-80 truncate",children:ce})]}),n.jsx("div",{className:"shrink-0 font-mono text-xs sm:text-sm font-black text-right",children:de(j)})]}),L=({name:G,value:K})=>n.jsxs("div",{className:"rounded-lg bg-sky-600 px-2.5 py-1 text-white shadow-xs flex items-center justify-between gap-1.5",children:[n.jsx("span",{className:"text-[11px] font-bold truncate opacity-95",children:G}),n.jsx("span",{className:"font-mono text-xs font-black text-right",children:de(K)})]}),[y]=Vm(),p=ss().map(G=>G.name).sort((G,K)=>Em(G,K,y)),w=G=>{var K;return((K=o==null?void 0:o.persons)==null?void 0:K[G.toLowerCase()])??0},P=p.reduce((G,K)=>G+w(K),0);return n.jsxs("div",{className:"mb-3 rounded-2xl bg-white p-2.5 sm:p-3 shadow-sm border border-slate-200",children:[n.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-5 gap-1.5 sm:gap-2",children:[n.jsxs("div",{className:"col-span-2 sm:col-span-1 flex items-center justify-between rounded-xl border border-slate-300 bg-slate-50 px-2.5 py-1.5",children:[n.jsxs("div",{className:"flex items-center gap-1.5",children:[n.jsx("span",{className:"text-[11px] font-bold text-slate-500",children:"Date"}),c?n.jsx("span",{className:"rounded bg-rose-100 px-1.5 py-0.5 text-[9px] font-black text-rose-700 border border-rose-300",children:"🔒 Closed"}):A?n.jsx("span",{className:"rounded bg-emerald-100 px-1.5 py-0.5 text-[9px] font-black text-emerald-800 border border-emerald-300",children:"☀️ Open"}):n.jsx("span",{className:"rounded bg-amber-100 px-1.5 py-0.5 text-[9px] font-black text-amber-800 border border-amber-300",children:"⏳ Not Opened"})]}),n.jsx("div",{className:"truncate font-mono text-xs font-black text-slate-900",children:Ze(l)||l})]}),n.jsx(x,{label:"Cash in Hand",value:(o==null?void 0:o.cash)??0,cls:"bg-emerald-600",subText:`Prev: ${de((o==null?void 0:o.prevCash)??0)}`}),n.jsx(x,{label:"Bank Balance",value:(o==null?void 0:o.bank)??0,cls:"bg-indigo-600",subText:`Prev: ${de((o==null?void 0:o.prevBank)??0)}`}),n.jsx(x,{label:"Total Receive",value:(o==null?void 0:o.receive)??0,cls:"bg-green-700",subText:`Today: ${de((o==null?void 0:o.todayReceiveOnly)??0)}`}),n.jsx(x,{label:"Total Payment",value:(o==null?void 0:o.expense)??0,cls:"bg-rose-600",subText:`Today: ${de((o==null?void 0:o.todayPayment)??0)}`})]}),n.jsxs("div",{className:"mt-2 pt-1.5 border-t border-slate-100",children:[n.jsxs("div",{className:"mb-1 flex items-center justify-between px-1",children:[n.jsx("div",{className:"text-[11px] font-bold text-slate-700 flex items-center gap-1.5",children:n.jsx("span",{children:"👥 Staff Wise"})}),n.jsxs("div",{className:"text-[11px] font-mono font-black text-sky-800 bg-sky-50 px-2 py-0.2 rounded border border-sky-200",children:["Total: ",de(P)]})]}),n.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-1.5",children:[p.map(G=>n.jsx(b.Fragment,{children:n.jsx(L,{name:G,value:w(G)})},G)),p.length===0&&n.jsx("div",{className:"col-span-2 text-[10px] font-semibold text-slate-400 px-1 py-1",children:"কর্মী নেই — Receive পেজের Category ⚙️ Manage-এ Staff Name যোগ করুন"})]})]})]})}function Zh({value:l,onChange:o,cats:u,onManageClick:c,disabled:d=!1}){const[A,f]=b.useState(!1),h=b.useRef(null),x=b.useRef(0),L=b.useRef(null),y=()=>{x.current=Date.now()},p=()=>Date.now()-x.current<600,w=()=>{const te=document.activeElement;te&&(te.tagName==="INPUT"||te.tagName==="TEXTAREA")&&te.blur()};b.useEffect(()=>{if(!A)return;function te(k){if(h.current&&!h.current.contains(k.target)){const J=k.target,ue=!!J&&(J.tagName==="INPUT"||J.tagName==="TEXTAREA"||J.tagName==="SELECT");f(!1),ue||w()}}return document.addEventListener("pointerdown",te),()=>{document.removeEventListener("pointerdown",te)}},[A]);const P=(l||"").trim().toLowerCase(),G=b.useMemo(()=>{const te=new Set;return u.forEach(k=>{const J=typeof k=="string"?k:k.name;J&&J.trim()&&te.add(J.trim().toLowerCase())}),Array.from(te)},[u]),K=G,j=te=>{o(te),f(!1),w()},z=te=>{te.button===0&&(te.preventDefault(),L.current=te.currentTarget,y())},ce=te=>{te.button!==0||d||L.current!==te.currentTarget||(y(),f(k=>(k&&w(),!k)))},M=()=>{d||p()||f(te=>!te)};return n.jsxs("div",{className:"relative w-full",ref:h,children:[n.jsxs("button",{type:"button",disabled:d,"aria-haspopup":"listbox","aria-expanded":A,onPointerDown:z,onPointerUp:ce,onClick:M,onKeyDown:te=>{te.key==="Escape"&&A&&(te.stopPropagation(),f(!1),w())},className:`w-full h-[42px] rounded-xl border px-3 py-2 text-left text-sm font-bold shadow-xs transition cursor-pointer flex items-center justify-between ${d?"bg-slate-100":"bg-orange-50"} ${A?"border-blue-600 ring-2 ring-blue-500/20":"border-slate-300 hover:border-orange-300 hover:bg-orange-100/60"} ${d?"opacity-50 cursor-not-allowed":""}`,children:[n.jsx("div",{className:"flex items-center gap-2 truncate",children:l?n.jsx("span",{className:"text-slate-900 font-bold truncate",children:mt(l)}):n.jsx("span",{className:"text-slate-400 font-medium",children:"-- Select Category --"})}),n.jsxs("div",{className:"flex items-center gap-1.5 shrink-0 ml-2",children:[l&&n.jsx("span",{onPointerDown:te=>{te.stopPropagation(),z(te)},onPointerUp:te=>{te.stopPropagation(),!(te.button!==0||L.current!==te.currentTarget)&&(y(),o(""))},onClick:te=>{te.stopPropagation(),!p()&&o("")},className:"p-1 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-md cursor-pointer text-xs transition",title:"Clear Category",children:"✕"}),n.jsx("span",{className:`text-slate-400 text-xs transition-transform duration-200 ${A?"rotate-180":""}`,children:"▼"})]})]}),A&&n.jsxs("div",{role:"listbox",className:"absolute left-0 right-0 z-50 mt-1.5 rounded-2xl border border-slate-200 bg-white shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150 flex flex-col max-h-80",children:[n.jsxs("div",{className:"p-2.5 border-b border-slate-100 bg-slate-50 flex items-center justify-between gap-2 shrink-0",children:[n.jsx("span",{className:"pl-1 text-xs sm:text-sm font-bold text-slate-500",children:"📋 ক্যাটাগরি সিলেক্ট করুন"}),n.jsx("span",{className:"text-[10px] font-bold text-slate-400 bg-slate-200/70 px-1.5 py-0.5 rounded-md",children:G.length})]}),n.jsx("div",{className:"overflow-y-auto max-h-60 p-1.5 space-y-0.5",children:K.length>0?K.map(te=>{const k=te.toLowerCase()===P;return n.jsxs("button",{type:"button",role:"option","aria-selected":k,onPointerDown:z,onPointerUp:J=>{J.button!==0||L.current!==J.currentTarget||(y(),j(te))},onClick:()=>{p()||j(te)},className:`w-full text-left px-3 py-2 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer flex items-center justify-between ${k?"bg-blue-50 text-blue-900 border border-blue-200 shadow-2xs font-extrabold":"hover:bg-slate-100 text-slate-700 hover:text-slate-900"}`,children:[n.jsxs("div",{className:"flex items-center gap-2.5 truncate",children:[n.jsx("span",{className:`h-2 w-2 rounded-full shrink-0 ${k?"bg-blue-600 ring-2 ring-blue-300":"bg-slate-300"}`}),n.jsx("span",{className:"truncate",children:mt(te)})]}),k&&n.jsx("span",{className:"text-blue-600 font-black text-sm pl-2",children:"✓"})]},te)}):n.jsxs("div",{className:"py-8 text-center text-xs text-slate-400 font-semibold flex flex-col items-center gap-1",children:[n.jsx("span",{children:"🔍"}),n.jsx("span",{children:"No category found"})]})}),n.jsxs("div",{className:"p-2 border-t border-slate-100 bg-slate-50 flex items-center justify-between shrink-0 text-xs",children:[n.jsxs("span",{className:"text-[11px] text-slate-500 font-medium",children:["Total: ",K.length," categories"]}),c&&n.jsxs("button",{type:"button",onPointerDown:z,onPointerUp:te=>{te.button!==0||L.current!==te.currentTarget||(y(),f(!1),c())},onClick:()=>{p()||(f(!1),c())},className:"text-xs font-black text-blue-600 hover:text-blue-800 hover:underline cursor-pointer flex items-center gap-1",children:[n.jsx("span",{children:"⚙️"}),n.jsx("span",{children:"Manage Categories"})]})]})]})]})}function Zn({value:l,onChange:o,options:u,placeholder:c="-- Select --",disabled:d=!1,className:A="",noKeyboardOnMobile:f=!1}){const[h,x]=b.useState(!1),[L,y]=b.useState(""),p=b.useRef(null),w=b.useRef(!1),P=b.useMemo(()=>typeof window<"u"&&typeof window.matchMedia=="function"&&window.matchMedia("(pointer: coarse)").matches,[]),G=f&&P,K=b.useMemo(()=>u.map(M=>typeof M=="string"?{value:M,label:M}:M),[u]),j=K.find(M=>M.value===l);b.useEffect(()=>{const M=te=>{p.current&&!p.current.contains(te.target)&&x(!1)};return document.addEventListener("mousedown",M),document.addEventListener("touchstart",M),()=>{document.removeEventListener("mousedown",M),document.removeEventListener("touchstart",M)}},[]);const z=L.trim().toLowerCase(),ce=z?K.filter(M=>(M.label||M.value).toLowerCase().includes(z)):K;return n.jsxs("div",{className:"relative",ref:p,children:[n.jsx("input",{value:h?L:l?j?j.label||j.value:l:"",placeholder:c,disabled:d,onFocus:()=>{d||(w.current=!0,x(!0),y(""))},onClick:()=>{if(!d){if(w.current){w.current=!1;return}h?G&&x(!1):(x(!0),y(""))}},onChange:M=>{y(M.target.value),x(!0)},onKeyDown:M=>{M.key==="Escape"&&x(!1),M.key==="Enter"&&M.preventDefault()},className:A,autoComplete:"off",spellCheck:!1,readOnly:G,inputMode:G?"none":void 0}),h&&!d&&n.jsx("div",{className:"absolute left-0 right-0 top-full z-40 mt-1 max-h-56 overflow-auto rounded-xl border border-slate-300 bg-white shadow-2xl",children:ce.length===0?n.jsx("div",{className:"px-3 py-2 text-xs font-semibold text-slate-500",children:"কোনো মিল নেই"}):ce.map(M=>n.jsx("button",{type:"button",onMouseDown:te=>te.preventDefault(),onClick:()=>{o(M.value),x(!1),y("")},className:`block w-full cursor-pointer px-3 py-1.5 text-left text-sm font-semibold ${M.value===l?"bg-blue-100 text-blue-900":"text-slate-800 hover:bg-slate-100"}`,children:M.label||M.value},M.value))})]})}const qi=[1e3,500,200,100,50,20,10,5,2,1],bn=qi.length+1;function zh(){if(typeof window>"u")return!1;const l=navigator.userAgent||"",o=/Android|iPhone|iPad|iPod|Mobile|Windows Phone|Opera Mini/i.test(l),u="ontouchstart"in window||navigator.maxTouchPoints>0,c=window.innerWidth<768;return o||u&&c}function Nm({open:l,onClose:o,targetAmount:u,date:c,onApplyAmount:d,hideSummary:A=!1,hideOtherRow:f=!1}){const h=f?bn-1:bn,[x,L]=b.useState(!1),[y,p]=b.useState(Array(bn).fill("")),[w,P]=b.useState(Array(bn).fill("")),[G,K]=b.useState(Array(bn).fill("")),[j,z]=b.useState({row:0,col:"qty"}),ce=b.useRef({});if(b.useEffect(()=>{if(l){const H=zh();L(H),p(Array(bn).fill("")),P(Array(bn).fill("")),K(Array(bn).fill("")),z({row:0,col:"qty"}),H||setTimeout(()=>{var N;(N=ce.current["0-qty"])==null||N.focus()},60)}},[l]),!l)return null;const M=qi.reduce((H,N,oe)=>{const R=parseInt(y[oe]||"0",10)||0;return H+R*N},0),te=f?0:Number(y[bn-1])||0,k=M+te,J=w.reduce((H,N)=>H+(Number(N)||0),0),ue=G.reduce((H,N)=>H+(Number(N)||0),0),C=k+J-ue,ne=C-u,re=d&&C!==0,ae=(H,N)=>{p(oe=>{const R=[...oe];return R[H]=N,R})},fe=(H,N)=>{P(oe=>{const R=[...oe];return R[H]=N,R})},pe=(H,N)=>{K(oe=>{const R=[...oe];return R[H]=N,R})},B=()=>{p(Array(bn).fill("")),P(Array(bn).fill("")),K(Array(bn).fill("")),z({row:0,col:"qty"})},O=(H,N)=>{z({row:H,col:N});const oe=`${H}-${N}`,R=ce.current[oe];R&&(x?R.blur():(R.focus(),R.select()),R.scrollIntoView({block:"nearest",behavior:"smooth"}))},S=H=>{const N=["qty","credit","debit"];let{row:oe,col:R}=j,$=N.indexOf(R);H==="up"?oe=oe>0?oe-1:h-1:H==="down"?oe=oe<h-1?oe+1:0:H==="left"?($>0?$--:($=2,oe=oe>0?oe-1:h-1),R=N[$]):H==="right"&&($<2?$++:($=0,oe=oe<h-1?oe+1:0),R=N[$]),O(oe,R)},I=H=>{const{row:N,col:oe}=j;let R="";oe==="qty"?R=y[N]||"":oe==="credit"?R=w[N]||"":oe==="debit"&&(R=G[N]||"");const $=oe==="credit"||oe==="debit"||N===bn-1;let ge=R;if(H==="⌫")ge=R.slice(0,-1);else if(H==="C")ge="";else if(H===".")$&&!R.includes(".")&&(ge=(R||"0")+".");else if(ge=(R+H).replace(/^0+(?=\d)/,""),ge.length>9)return;oe==="qty"?ae(N,ge):oe==="credit"?fe(N,ge):oe==="debit"&&pe(N,ge)},q=({label:H,onClick:N,className:oe=""})=>n.jsx("button",{type:"button",onPointerDown:R=>R.preventDefault(),onMouseDown:R=>R.preventDefault(),onClick:N,className:`h-11 select-none rounded-lg text-lg font-bold shadow-sm active:scale-95 active:bg-slate-300 transition ${oe}`,children:H}),ee=H=>H===bn-1?"Other":String(qi[H]),U=H=>H===bn-1?te:(parseInt(y[H]||"0",10)||0)*qi[H];return n.jsxs("div",{className:"fixed inset-0 z-50 flex flex-col bg-white overflow-hidden w-full h-[100dvh]",children:[n.jsxs("div",{className:"flex items-center justify-between border-b bg-slate-900 px-4 py-2.5 sm:px-6 sm:py-3 text-white shrink-0",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-xl sm:text-2xl",children:"💳"}),n.jsxs("div",{children:[n.jsx("h3",{className:"font-bold text-base sm:text-lg leading-tight",children:"Payment Denomination"}),n.jsxs("p",{className:"text-xs text-slate-300 font-mono",children:["Date: ",c]})]})]}),n.jsxs("div",{className:"flex items-center gap-2",children:[zh()&&n.jsx("button",{type:"button",onClick:()=>{L(H=>!H),setTimeout(()=>{var H;(H=ce.current[`${j.row}-${j.col}`])==null||H.focus()},0)},className:`rounded-lg px-2.5 py-1 text-sm font-bold transition flex items-center gap-1 ${x?"bg-blue-600 text-white":"bg-slate-800 text-slate-300 hover:bg-slate-700"}`,children:"⌨ Keypad"}),n.jsx("button",{type:"button",onClick:o,className:"flex h-8 w-8 items-center justify-center rounded-full text-2xl text-slate-300 hover:bg-slate-800 hover:text-white transition",children:"×"})]})]}),!A&&n.jsxs("div",{className:"border-b bg-slate-100 p-2 sm:p-3 shrink-0",children:[n.jsxs("div",{className:"grid grid-cols-2 gap-2 max-w-5xl mx-auto",children:[n.jsxs("div",{className:"flex flex-col justify-center rounded-xl border border-slate-300 bg-white p-2 sm:p-2.5 shadow-xs",children:[n.jsx("span",{className:"text-[11px] sm:text-xs font-bold text-slate-700 truncate",children:"Disburse/Expense"}),n.jsx("div",{className:"mt-0.5 font-mono text-sm sm:text-xl font-black text-slate-900 truncate",children:de(u)})]}),n.jsxs("div",{className:"flex flex-col justify-center rounded-xl border border-indigo-300 bg-indigo-50/90 p-2 sm:p-2.5 shadow-xs",children:[n.jsx("span",{className:"text-[11px] sm:text-xs font-bold text-indigo-950 truncate",children:"Total Cash"}),n.jsx("div",{className:"mt-0.5 font-mono text-sm sm:text-xl font-black text-indigo-950 truncate",children:de(C)})]})]}),n.jsx("div",{className:"mt-2 max-w-5xl mx-auto",children:n.jsxs("div",{className:`flex flex-row items-center justify-between gap-2 rounded-xl border p-2 sm:p-2.5 shadow-xs ${ne>0?"border-emerald-500 bg-emerald-50":ne<0?"border-rose-500 bg-rose-50":"border-blue-400 bg-blue-50"}`,children:[n.jsx("div",{className:"flex items-center justify-between gap-1",children:n.jsx("span",{className:"text-[11px] sm:text-xs font-bold text-slate-800 truncate",children:"Different"})}),n.jsx("div",{className:`mt-0.5 font-mono text-sm sm:text-xl font-black truncate ${ne>0?"text-emerald-700":ne<0?"text-rose-700":"text-blue-700"}`,children:ne>0?`+${de(ne)}`:ne<0?`-${de(Math.abs(ne))}`:"0"})]})})]}),n.jsx("div",{className:"flex-1 overflow-auto p-2 sm:p-4",children:n.jsxs("div",{className:"max-w-5xl mx-auto",children:[n.jsxs("table",{className:"w-full border-collapse border border-slate-300 text-xs sm:text-sm",children:[n.jsx("thead",{className:"sticky top-0 bg-slate-800 text-white z-10 shadow-xs",children:n.jsxs("tr",{children:[n.jsx("th",{className:"border border-slate-700 px-2 sm:px-3 py-1.5 text-center font-bold w-14 sm:w-20",children:"Note"}),n.jsx("th",{className:"border border-slate-700 px-2 sm:px-3 py-1.5 text-center font-bold w-16 sm:w-24",children:"Qty"}),n.jsx("th",{className:"border border-slate-700 px-2 sm:px-3 py-1.5 text-right font-bold w-20 sm:w-28",children:"Amount"}),n.jsx("th",{className:"border border-slate-700 px-2 sm:px-3 py-1.5 text-right font-bold bg-emerald-900 text-emerald-100 w-24 sm:w-32",children:"Credit (+)"}),n.jsx("th",{className:"border border-slate-700 px-2 sm:px-3 py-1.5 text-right font-bold bg-rose-900 text-rose-100 w-24 sm:w-32",children:"Debit (-)"})]})}),n.jsx("tbody",{children:Array.from({length:h},(H,N)=>{const oe=N===bn-1,R=U(N),$=j.row===N&&j.col==="qty",ge=j.row===N&&j.col==="credit",be=j.row===N&&j.col==="debit";return n.jsxs("tr",{className:`border-b hover:bg-slate-50 transition ${oe?"bg-slate-50 font-bold border-t-2 border-slate-300":""}`,children:[n.jsx("td",{className:"border border-slate-300 px-2 py-1 text-center font-mono font-bold text-slate-900 sm:text-base",children:ee(N)}),n.jsx("td",{className:"border border-slate-300 px-1 py-1 text-center",children:n.jsx("input",{ref:ye=>{ce.current[`${N}-qty`]=ye},type:"text",inputMode:x?"none":oe?"decimal":"numeric",readOnly:x,value:y[N],placeholder:oe?"Any":"0",onFocus:ye=>{x&&ye.target.blur(),O(N,"qty")},onTouchStart:ye=>{x&&(ye.preventDefault(),O(N,"qty"))},onClick:()=>O(N,"qty"),onChange:ye=>ae(N,ye.target.value),className:`w-full rounded border px-1.5 py-1 text-center font-mono text-xs sm:text-sm font-bold focus:outline-none transition select-text ${$?"border-blue-600 bg-blue-100/60 ring-2 ring-blue-400 text-blue-950 font-black":"border-slate-300 bg-yellow-50"}`})}),n.jsx("td",{className:"border border-slate-300 px-2 py-1 text-right font-mono font-bold text-slate-900 sm:text-sm",children:R>0?de(R):"-"}),n.jsx("td",{className:"border border-slate-300 px-1 py-1 text-right bg-emerald-50/30",children:n.jsx("input",{ref:ye=>{ce.current[`${N}-credit`]=ye},type:"text",inputMode:x?"none":"decimal",readOnly:x,value:w[N],placeholder:"0",onFocus:ye=>{x&&ye.target.blur(),O(N,"credit")},onTouchStart:ye=>{x&&(ye.preventDefault(),O(N,"credit"))},onClick:()=>O(N,"credit"),onChange:ye=>fe(N,ye.target.value),className:`w-full rounded border px-1.5 py-1 text-right font-mono text-xs sm:text-sm font-bold focus:outline-none transition select-text ${ge?"border-emerald-600 bg-emerald-100/60 ring-2 ring-emerald-400 text-emerald-950 font-black":"border-emerald-300 bg-white text-emerald-900"}`})}),n.jsx("td",{className:"border border-slate-300 px-1 py-1 text-right bg-rose-50/30",children:n.jsx("input",{ref:ye=>{ce.current[`${N}-debit`]=ye},type:"text",inputMode:x?"none":"decimal",readOnly:x,value:G[N],placeholder:"0",onFocus:ye=>{x&&ye.target.blur(),O(N,"debit")},onTouchStart:ye=>{x&&(ye.preventDefault(),O(N,"debit"))},onClick:()=>O(N,"debit"),onChange:ye=>pe(N,ye.target.value),className:`w-full rounded border px-1.5 py-1 text-right font-mono text-xs sm:text-sm font-bold focus:outline-none transition select-text ${be?"border-rose-600 bg-rose-100/60 ring-2 ring-rose-400 text-rose-950 font-black":"border-rose-300 bg-white text-rose-900"}`})})]},N)})}),n.jsx("tfoot",{className:"sticky bottom-0 bg-slate-100 font-bold border-t-2 border-slate-400 z-10",children:n.jsxs("tr",{children:[n.jsx("td",{colSpan:2,className:"border border-slate-300 px-2 py-1 text-right font-bold text-slate-800 text-xs",children:"Sub-Total :"}),n.jsx("td",{className:"border border-slate-300 px-2 py-1 text-right font-mono font-bold text-indigo-950 text-xs",children:de(k)}),n.jsxs("td",{className:"border border-slate-300 px-2 py-1 text-right font-mono font-bold text-emerald-800 text-xs",children:["+",de(J)]}),n.jsxs("td",{className:"border border-slate-300 px-2 py-1 text-right font-mono font-bold text-rose-800 text-xs",children:["-",de(ue)]})]})})]}),n.jsxs("div",{className:"mt-2 flex items-center justify-between rounded-lg bg-blue-700 px-3.5 py-1.5 text-white shadow-sm",children:[n.jsx("span",{className:"text-xs font-bold uppercase tracking-wider",children:"Total Denomination Cash:"}),n.jsx("span",{className:"font-mono text-base sm:text-xl font-black",children:de(C)})]})]})}),x?n.jsx("div",{className:"border-t bg-slate-50 px-2.5 py-2 sm:px-4 sm:py-2.5 shrink-0 shadow-lg",children:n.jsxs("div",{className:"max-w-2xl mx-auto grid grid-cols-5 gap-1.5 sm:gap-2",children:[n.jsxs("div",{className:"col-span-4 grid grid-cols-4 gap-1.5 sm:gap-2",children:[["7","8","9"].map(H=>n.jsx(q,{label:H,onClick:()=>I(H),className:"bg-white"},H)),n.jsx(q,{label:"⌫",onClick:()=>I("⌫"),className:"bg-amber-100 text-amber-800 hover:bg-amber-200"}),["4","5","6"].map(H=>n.jsx(q,{label:H,onClick:()=>I(H),className:"bg-white"},H)),n.jsx(q,{label:"C",onClick:()=>I("C"),className:"bg-red-100 text-red-700 hover:bg-red-200"}),["1","2","3"].map(H=>n.jsx(q,{label:H,onClick:()=>I(H),className:"bg-white"},H)),n.jsx(q,{label:".",onClick:()=>I("."),className:"bg-white"}),n.jsx(q,{label:"0",onClick:()=>I("0"),className:"bg-white"}),n.jsx(q,{label:"00",onClick:()=>I("00"),className:"bg-white"}),n.jsx(q,{label:"Reset",onClick:B,className:"bg-slate-500 !text-xs sm:!text-sm text-white hover:bg-slate-600"}),re?n.jsx(q,{label:"Apply",onClick:()=>{d(C),o()},className:"bg-emerald-600 !text-xs sm:!text-sm text-white hover:bg-emerald-700 font-bold"}):n.jsx(q,{label:"⏎",onClick:()=>S("down"),className:"bg-blue-600 !text-xs sm:!text-sm text-white hover:bg-blue-700 font-bold"})]}),n.jsxs("div",{className:"grid grid-cols-1 grid-rows-4 gap-1.5 sm:gap-2",children:[n.jsx(q,{label:"✕ Close",onClick:o,className:"bg-rose-600 hover:bg-rose-700 text-white !text-xs sm:!text-sm font-black shadow-xs ring-1 ring-rose-400"}),n.jsx(q,{label:"▲",onClick:()=>S("up"),className:"bg-blue-100 text-blue-800 hover:bg-blue-200"}),n.jsxs("div",{className:"grid grid-cols-2 gap-1",children:[n.jsx(q,{label:"◄",onClick:()=>S("left"),className:"bg-blue-100 text-blue-800 !text-sm hover:bg-blue-200"}),n.jsx(q,{label:"►",onClick:()=>S("right"),className:"bg-blue-100 text-blue-800 !text-sm hover:bg-blue-200"})]}),n.jsx(q,{label:"▼",onClick:()=>S("down"),className:"bg-blue-100 text-blue-800 hover:bg-blue-200"})]})]})}):n.jsxs("div",{className:"flex items-center justify-between border-t bg-slate-50 px-4 py-2.5 sm:px-6 shrink-0",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("button",{type:"button",onClick:B,className:"rounded-lg bg-slate-500 px-4 py-2 text-xs sm:text-sm font-semibold text-white hover:bg-slate-600 transition",children:"Reset"}),re&&n.jsxs("button",{type:"button",onClick:()=>{d(C),o()},className:"rounded-lg bg-emerald-600 px-4 py-2 text-xs sm:text-sm font-bold text-white hover:bg-emerald-700 transition",children:["Apply (",de(C),")"]})]}),n.jsx("button",{type:"button",onClick:o,className:"rounded-lg bg-slate-900 px-8 py-2 text-xs sm:text-sm font-bold text-white hover:bg-slate-800 transition",children:"Close"})]})]})}const Qi=[1e3,500,200,100,50,20,10,5,2,1],Ca=Qi.length,vm="gobra_report_denom_entries";function om(){const l=()=>Array(Ca).fill("");try{const o=localStorage.getItem(vm);if(!o)return{qty:l(),credit:l(),debit:l()};const u=JSON.parse(o),c=d=>Array.isArray(d)?Array(Ca).fill("").map((A,f)=>String(d[f]??"")):l();return{qty:c(u.qty),credit:c(u.credit),debit:c(u.debit)}}catch{return{qty:l(),credit:l(),debit:l()}}}function Fh(){if(typeof window>"u")return!1;const l=navigator.userAgent||"",o=/Android|iPhone|iPad|iPod|Mobile|Windows Phone|Opera Mini/i.test(l),u="ontouchstart"in window||navigator.maxTouchPoints>0,c=window.innerWidth<768;return o||u&&c}function Ym({open:l,onClose:o,cashInHand:u,date:c}){const[d,A]=b.useState(!1),[f,h]=b.useState(()=>om().qty),[x,L]=b.useState(()=>om().credit),[y,p]=b.useState(()=>om().debit),[w,P]=b.useState({row:0,col:"qty"}),G=b.useRef({});if(b.useEffect(()=>{if(l){const B=Fh();A(B),P({row:0,col:"qty"}),B||setTimeout(()=>{var O;(O=G.current["0-qty"])==null||O.focus()},60)}},[l]),b.useEffect(()=>{try{localStorage.setItem(vm,JSON.stringify({qty:f,credit:x,debit:y}))}catch{}},[f,x,y]),!l)return null;const K=Qi.reduce((B,O,S)=>{const I=parseInt(f[S]||"0",10)||0;return B+I*O},0),j=x.reduce((B,O)=>B+(Number(O)||0),0),z=y.reduce((B,O)=>B+(Number(O)||0),0),ce=K+j-z,M=ce-u,te=(B,O)=>{h(S=>{const I=[...S];return I[B]=O,I})},k=(B,O)=>{L(S=>{const I=[...S];return I[B]=O,I})},J=(B,O)=>{p(S=>{const I=[...S];return I[B]=O,I})},ue=()=>{h(Array(Ca).fill("")),L(Array(Ca).fill("")),p(Array(Ca).fill("")),P({row:0,col:"qty"});try{localStorage.removeItem(vm)}catch{}},C=(B,O)=>{P({row:B,col:O});const S=`${B}-${O}`,I=G.current[S];I&&(d?I.blur():(I.focus(),I.select()),I.scrollIntoView({block:"nearest",behavior:"smooth"}))},ne=B=>{const O=["qty","credit","debit"];let{row:S,col:I}=w,q=O.indexOf(I);B==="up"?S=S>0?S-1:Ca-1:B==="down"?S=S<Ca-1?S+1:0:B==="left"?(q>0?q--:(q=2,S=S>0?S-1:Ca-1),I=O[q]):B==="right"&&(q<2?q++:(q=0,S=S<Ca-1?S+1:0),I=O[q]),C(S,I)},re=B=>{const{row:O,col:S}=w;let I="";S==="qty"?I=f[O]||"":S==="credit"?I=x[O]||"":S==="debit"&&(I=y[O]||"");const q=S==="credit"||S==="debit";let ee=I;if(B==="⌫")ee=I.slice(0,-1);else if(B==="C")ee="";else if(B===".")q&&!I.includes(".")&&(ee=(I||"0")+".");else if(ee=(I+B).replace(/^0+(?=\d)/,""),ee.length>9)return;S==="qty"?te(O,ee):S==="credit"?k(O,ee):S==="debit"&&J(O,ee)},ae=({label:B,onClick:O,className:S=""})=>n.jsx("button",{type:"button",onPointerDown:I=>I.preventDefault(),onMouseDown:I=>I.preventDefault(),onClick:O,className:`h-11 select-none rounded-lg text-lg font-bold shadow-sm active:scale-95 active:bg-slate-300 transition ${S}`,children:B}),fe=B=>String(Qi[B]),pe=B=>(parseInt(f[B]||"0",10)||0)*Qi[B];return n.jsxs("div",{className:"fixed inset-0 z-50 flex flex-col bg-white overflow-hidden w-full h-[100dvh]",children:[n.jsxs("div",{className:"flex items-center justify-between border-b bg-slate-900 px-4 py-2.5 sm:px-6 sm:py-3 text-white shrink-0",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-xl sm:text-2xl",children:"💰"}),n.jsxs("div",{children:[n.jsx("h3",{className:"font-bold text-base sm:text-lg leading-tight",children:"Denomination"}),n.jsxs("p",{className:"text-xs text-slate-300 font-mono",children:["Date: ",c]})]})]}),n.jsxs("div",{className:"flex items-center gap-2",children:[Fh()&&n.jsx("button",{type:"button",onClick:()=>{A(B=>!B),setTimeout(()=>{var B;(B=G.current[`${w.row}-${w.col}`])==null||B.focus()},0)},className:`rounded-lg px-2.5 py-1 text-sm font-bold transition flex items-center gap-1 ${d?"bg-blue-600 text-white":"bg-slate-800 text-slate-300 hover:bg-slate-700"}`,children:"⌨ Keypad"}),n.jsx("button",{type:"button",onClick:o,className:"flex h-8 w-8 items-center justify-center rounded-full text-2xl text-slate-300 hover:bg-slate-800 hover:text-white transition",children:"×"})]})]}),n.jsx("div",{className:"border-b bg-slate-100 p-2 sm:p-3 shrink-0",children:n.jsxs("div",{className:"grid grid-cols-3 gap-2 max-w-5xl mx-auto",children:[n.jsxs("div",{className:"flex flex-col justify-center rounded-xl border border-slate-300 bg-white p-2 sm:p-2.5 shadow-xs",children:[n.jsx("span",{className:"text-[11px] sm:text-xs font-bold text-slate-700 truncate",children:"Cash in Hand"}),n.jsx("div",{className:"mt-0.5 font-mono text-sm sm:text-xl font-black text-slate-900 truncate",children:de(u)})]}),n.jsxs("div",{className:"flex flex-col justify-center rounded-xl border border-indigo-300 bg-indigo-50/90 p-2 sm:p-2.5 shadow-xs",children:[n.jsx("span",{className:"text-[11px] sm:text-xs font-bold text-indigo-950 truncate",children:"Total Cash"}),n.jsx("div",{className:"mt-0.5 font-mono text-sm sm:text-xl font-black text-indigo-950 truncate",children:de(ce)})]}),n.jsxs("div",{className:`flex flex-col justify-center rounded-xl border p-2 sm:p-2.5 shadow-xs ${M>0?"border-emerald-500 bg-emerald-50":M<0?"border-rose-500 bg-rose-50":"border-blue-400 bg-blue-50"}`,children:[n.jsx("div",{className:"flex items-center justify-between gap-1",children:n.jsx("span",{className:"text-[11px] sm:text-xs font-bold text-slate-800 truncate",children:"Different"})}),n.jsx("div",{className:`mt-0.5 font-mono text-sm sm:text-xl font-black truncate ${M>0?"text-emerald-700":M<0?"text-rose-700":"text-blue-700"}`,children:M>0?`+${de(M)}`:M<0?`-${de(Math.abs(M))}`:"0"})]})]})}),n.jsx("div",{className:"flex-1 overflow-auto p-2 sm:p-4",children:n.jsxs("div",{className:"max-w-5xl mx-auto",children:[n.jsxs("table",{className:"w-full border-collapse border border-slate-300 text-xs sm:text-sm",children:[n.jsx("thead",{className:"sticky top-0 bg-slate-800 text-white z-10 shadow-xs",children:n.jsxs("tr",{children:[n.jsx("th",{className:"border border-slate-700 px-2 sm:px-3 py-1.5 text-center font-bold w-14 sm:w-20",children:"Note"}),n.jsx("th",{className:"border border-slate-700 px-2 sm:px-3 py-1.5 text-center font-bold w-16 sm:w-24",children:"Qty"}),n.jsx("th",{className:"border border-slate-700 px-2 sm:px-3 py-1.5 text-right font-bold w-20 sm:w-28",children:"Amount"}),n.jsx("th",{className:"border border-slate-700 px-2 sm:px-3 py-1.5 text-right font-bold bg-emerald-900 text-emerald-100 w-24 sm:w-32",children:"Credit (+)"}),n.jsx("th",{className:"border border-slate-700 px-2 sm:px-3 py-1.5 text-right font-bold bg-rose-900 text-rose-100 w-24 sm:w-32",children:"Debit (-)"})]})}),n.jsx("tbody",{children:Array.from({length:Ca},(B,O)=>{const S=pe(O),I=w.row===O&&w.col==="qty",q=w.row===O&&w.col==="credit",ee=w.row===O&&w.col==="debit";return n.jsxs("tr",{className:"border-b hover:bg-slate-50 transition",children:[n.jsx("td",{className:"border border-slate-300 px-2 py-1 text-center font-mono font-bold text-slate-900 sm:text-base",children:fe(O)}),n.jsx("td",{className:"border border-slate-300 px-1 py-1 text-center",children:n.jsx("input",{ref:U=>{G.current[`${O}-qty`]=U},type:"text",inputMode:d?"none":"numeric",readOnly:d,value:f[O],placeholder:"0",onFocus:U=>{d&&U.target.blur(),C(O,"qty")},onTouchStart:U=>{d&&(U.preventDefault(),C(O,"qty"))},onClick:()=>C(O,"qty"),onChange:U=>te(O,U.target.value),className:`w-full rounded border px-1.5 py-1 text-center font-mono text-xs sm:text-sm font-bold focus:outline-none transition select-text ${I?"border-blue-600 bg-blue-100/60 ring-2 ring-blue-400 text-blue-950 font-black":"border-slate-300 bg-yellow-50"}`})}),n.jsx("td",{className:"border border-slate-300 px-2 py-1 text-right font-mono font-bold text-slate-900 sm:text-sm",children:S>0?de(S):"-"}),n.jsx("td",{className:"border border-slate-300 px-1 py-1 text-right bg-emerald-50/30",children:n.jsx("input",{ref:U=>{G.current[`${O}-credit`]=U},type:"text",inputMode:d?"none":"decimal",readOnly:d,value:x[O],placeholder:"0",onFocus:U=>{d&&U.target.blur(),C(O,"credit")},onTouchStart:U=>{d&&(U.preventDefault(),C(O,"credit"))},onClick:()=>C(O,"credit"),onChange:U=>k(O,U.target.value),className:`w-full rounded border px-1.5 py-1 text-right font-mono text-xs sm:text-sm font-bold focus:outline-none transition select-text ${q?"border-emerald-600 bg-emerald-100/60 ring-2 ring-emerald-400 text-emerald-950 font-black":"border-emerald-300 bg-white text-emerald-900"}`})}),n.jsx("td",{className:"border border-slate-300 px-1 py-1 text-right bg-rose-50/30",children:n.jsx("input",{ref:U=>{G.current[`${O}-debit`]=U},type:"text",inputMode:d?"none":"decimal",readOnly:d,value:y[O],placeholder:"0",onFocus:U=>{d&&U.target.blur(),C(O,"debit")},onTouchStart:U=>{d&&(U.preventDefault(),C(O,"debit"))},onClick:()=>C(O,"debit"),onChange:U=>J(O,U.target.value),className:`w-full rounded border px-1.5 py-1 text-right font-mono text-xs sm:text-sm font-bold focus:outline-none transition select-text ${ee?"border-rose-600 bg-rose-100/60 ring-2 ring-rose-400 text-rose-950 font-black":"border-rose-300 bg-white text-rose-900"}`})})]},O)})}),n.jsx("tfoot",{className:"sticky bottom-0 bg-slate-100 font-bold border-t-2 border-slate-400 z-10",children:n.jsxs("tr",{children:[n.jsx("td",{colSpan:2,className:"border border-slate-300 px-2 py-1 text-right font-bold text-slate-800 text-xs",children:"Sub-Total :"}),n.jsx("td",{className:"border border-slate-300 px-2 py-1 text-right font-mono font-bold text-indigo-950 text-xs",children:de(K)}),n.jsxs("td",{className:"border border-slate-300 px-2 py-1 text-right font-mono font-bold text-emerald-800 text-xs",children:["+",de(j)]}),n.jsxs("td",{className:"border border-slate-300 px-2 py-1 text-right font-mono font-bold text-rose-800 text-xs",children:["-",de(z)]})]})})]}),n.jsxs("div",{className:"mt-2 flex items-center justify-between rounded-lg bg-blue-700 px-3.5 py-1.5 text-white shadow-sm",children:[n.jsx("span",{className:"text-xs font-bold uppercase tracking-wider",children:"Total Denomination Cash:"}),n.jsx("span",{className:"font-mono text-base sm:text-xl font-black",children:de(ce)})]})]})}),d?n.jsx("div",{className:"border-t bg-slate-50 px-2.5 py-2 sm:px-4 sm:py-2.5 shrink-0 shadow-lg",children:n.jsxs("div",{className:"max-w-2xl mx-auto grid grid-cols-5 gap-1.5 sm:gap-2",children:[n.jsxs("div",{className:"col-span-4 grid grid-cols-4 gap-1.5 sm:gap-2",children:[["7","8","9"].map(B=>n.jsx(ae,{label:B,onClick:()=>re(B),className:"bg-white"},B)),n.jsx(ae,{label:"⌫",onClick:()=>re("⌫"),className:"bg-amber-100 text-amber-800 hover:bg-amber-200"}),["4","5","6"].map(B=>n.jsx(ae,{label:B,onClick:()=>re(B),className:"bg-white"},B)),n.jsx(ae,{label:"C",onClick:()=>re("C"),className:"bg-red-100 text-red-700 hover:bg-red-200"}),["1","2","3"].map(B=>n.jsx(ae,{label:B,onClick:()=>re(B),className:"bg-white"},B)),n.jsx(ae,{label:".",onClick:()=>re("."),className:"bg-white"}),n.jsx(ae,{label:"0",onClick:()=>re("0"),className:"bg-white"}),n.jsx(ae,{label:"00",onClick:()=>re("00"),className:"bg-white"}),n.jsx(ae,{label:"Reset",onClick:ue,className:"bg-slate-500 !text-xs sm:!text-sm text-white hover:bg-slate-600"}),n.jsx(ae,{label:"⏎",onClick:()=>ne("down"),className:"bg-blue-600 !text-xs sm:!text-sm text-white hover:bg-blue-700 font-bold"})]}),n.jsxs("div",{className:"grid grid-cols-1 grid-rows-4 gap-1.5 sm:gap-2",children:[n.jsx(ae,{label:"✕ Close",onClick:o,className:"bg-rose-600 hover:bg-rose-700 text-white !text-xs sm:!text-sm font-black shadow-xs ring-1 ring-rose-400"}),n.jsx(ae,{label:"▲",onClick:()=>ne("up"),className:"bg-blue-100 text-blue-800 hover:bg-blue-200"}),n.jsxs("div",{className:"grid grid-cols-2 gap-1",children:[n.jsx(ae,{label:"◄",onClick:()=>ne("left"),className:"bg-blue-100 text-blue-800 !text-sm hover:bg-blue-200"}),n.jsx(ae,{label:"►",onClick:()=>ne("right"),className:"bg-blue-100 text-blue-800 !text-sm hover:bg-blue-200"})]}),n.jsx(ae,{label:"▼",onClick:()=>ne("down"),className:"bg-blue-100 text-blue-800 hover:bg-blue-200"})]})]})}):n.jsxs("div",{className:"flex items-center justify-between border-t bg-slate-50 px-4 py-2.5 sm:px-6 shrink-0",children:[n.jsx("button",{type:"button",onClick:ue,className:"rounded-lg bg-slate-500 px-5 py-2 text-xs sm:text-sm font-semibold text-white hover:bg-slate-600 transition",children:"Reset"}),n.jsx("button",{type:"button",onClick:o,className:"rounded-lg bg-slate-900 px-8 py-2 text-xs sm:text-sm font-bold text-white hover:bg-slate-800 transition",children:"Close"})]})]})}function r5({type:l,cats:o,onChanged:u,onClose:c}){const[d,A]=b.useState(""),[f,h]=b.useState(""),[x,L]=b.useState(null),[y,p]=b.useState(""),[w,P]=b.useState(""),[G,K]=b.useState(0),j=G>=0?ss():[],[z,ce]=Vm(),M=[...j].sort((O,S)=>Em(O.name,S.name,z)),te=l==="receive",k=M.map(O=>O.name.toLowerCase()),J=te?o.filter(O=>k.includes(O.name.toLowerCase())):[],ue=te?o.filter(O=>!k.includes(O.name.toLowerCase())):o,C=()=>{if(d.trim()){if(o.some(O=>O.name.toLowerCase()===d.trim().toLowerCase()))return P("Already exists");Rm(l,d),P(""),A(""),u()}},ne=()=>{const O=f.trim();if(O){if(k.some(S=>S===O.toLowerCase())||o.some(S=>S.name.toLowerCase()===O.toLowerCase()))return P("Already exists");VR(O),Rm("receive",O),P(""),h(""),K(S=>S+1),u()}},re=(O,S)=>{XR(O,S),K(I=>I+1)},ae=(O,S)=>{if(!confirm(`"${mt(S)}" কর্মী মুছবেন? আগের এন্ট্রিগুলো রিপোর্টে থেকে যাবে।`))return;YR(O);const I=J.find(q=>q.name.toLowerCase()===S.toLowerCase());I&&Sm(I.id),K(q=>q+1),u()},fe=()=>{!x||!y.trim()||(np(x,y),L(null),u())},pe=O=>{confirm("Delete this category?")&&(Sm(O),u())},B=(O,S)=>{ap(l,O,S),u()};return n.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-3 sm:p-4",children:n.jsxs("div",{className:"w-full max-w-md rounded-2xl bg-white shadow-2xl overflow-hidden border border-slate-300",children:[n.jsxs("div",{className:"flex items-center justify-between border-b bg-slate-900 px-5 py-3 text-white",children:[n.jsxs("h3",{className:"text-base sm:text-lg font-bold",children:[mt(l)," Categories"]}),n.jsx("button",{onClick:c,className:"text-2xl text-slate-300 hover:text-white",children:"×"})]}),n.jsxs("div",{className:"p-4 sm:p-5 overflow-y-auto max-h-[85dvh]",children:[w&&n.jsx("p",{className:"mt-1 text-xs text-rose-600 font-semibold",children:w}),te&&n.jsxs("div",{className:"rounded-xl border-2 border-indigo-200 bg-indigo-50/50 p-3 mb-4",children:[n.jsxs("div",{className:"flex items-center justify-between gap-2",children:[n.jsx("div",{className:"text-[13px] font-black text-indigo-900",children:"👷 Staff Name"}),n.jsx(rp,{mode:z,onChange:ce})]}),n.jsx("div",{className:"text-[10px] font-semibold text-slate-500 mt-0.5",children:"কর্মীর নাম এখানেই যোগ করুন — Dena/Poana ও Staff Collection টেবিল এই তালিকাতেই চলে। নতুন অফিসে একদম খালি থাকে। 🖐️ ম্যানুয়ালে ↑↓ চেপে নিজের ক্রম সাজান — সব জায়গায় সেই ক্রমই আসবে।"}),n.jsxs("div",{className:"mt-2 flex gap-2",children:[n.jsx("input",{value:f,onChange:O=>h(O.target.value),onKeyDown:O=>O.key==="Enter"&&ne(),placeholder:"নতুন কর্মীর নাম",className:"flex-1 rounded-lg border border-indigo-300 bg-white px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none"}),n.jsx("button",{onClick:ne,className:"rounded-lg bg-indigo-600 px-4 py-2 font-bold text-xs sm:text-sm text-white hover:bg-indigo-700 shadow-xs",children:"Add"})]}),n.jsxs("ul",{className:"mt-2 max-h-40 divide-y divide-indigo-100 rounded-xl border border-indigo-200 bg-white overflow-auto",children:[M.map((O,S)=>n.jsxs("li",{className:"flex items-center gap-2 px-3 py-2",children:[n.jsxs("span",{className:"flex-1 text-sm font-bold text-slate-800",children:["👷 ",mt(O.name)]}),z==="manual"&&n.jsxs(n.Fragment,{children:[n.jsx("button",{onClick:()=>re(O.id,-1),disabled:S===0,className:"rounded-md bg-slate-200 px-1.5 py-1 text-xs font-black text-slate-700 hover:bg-slate-300 disabled:opacity-30 disabled:cursor-not-allowed",children:"↑"}),n.jsx("button",{onClick:()=>re(O.id,1),disabled:S===M.length-1,className:"rounded-md bg-slate-200 px-1.5 py-1 text-xs font-black text-slate-700 hover:bg-slate-300 disabled:opacity-30 disabled:cursor-not-allowed",children:"↓"})]}),n.jsx("button",{onClick:()=>ae(O.id,O.name),className:"rounded bg-rose-600 px-2.5 py-1 text-xs font-semibold text-white hover:bg-rose-700",children:"Delete"})]},O.id)),M.length===0&&n.jsx("li",{className:"px-3 py-4 text-center text-xs text-slate-400",children:"কর্মী নেই — নাম লিখে Add চাপুন"})]})]}),te&&n.jsx("div",{className:"text-[13px] font-black text-slate-700 mb-1.5",children:"🗂️ Unique ক্যাটাগরি (সাধারণ জমা-খাত)"}),n.jsxs("div",{className:"flex gap-2",children:[n.jsx("input",{value:d,onChange:O=>A(O.target.value),onKeyDown:O=>O.key==="Enter"&&C(),placeholder:te?"নতুন ক্যাটাগরির নাম":"New category name",className:"flex-1 rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"}),n.jsx("button",{onClick:C,className:"rounded-lg bg-emerald-600 px-4 py-2 font-bold text-xs sm:text-sm text-white hover:bg-emerald-700 shadow-xs",children:"Add"})]}),n.jsx("p",{className:"mt-3 text-[11px] font-semibold text-slate-400",children:"↑↓ চেপে ক্যাটাগরি নিজের মতো সাজান — ড্রপডাউনেও এই ক্রমই আসবে"}),n.jsxs("ul",{className:"mt-1 max-h-64 divide-y rounded-xl border border-slate-200 overflow-auto",children:[ue.map((O,S)=>n.jsx("li",{className:"flex items-center gap-2 px-3 py-2 hover:bg-slate-50",children:x===O.id?n.jsxs(n.Fragment,{children:[n.jsx("input",{value:y,autoFocus:!0,onChange:I=>p(I.target.value),onKeyDown:I=>I.key==="Enter"&&fe(),className:"flex-1 rounded border border-slate-300 px-2 py-1 text-xs font-semibold focus:border-blue-500 focus:outline-none"}),n.jsx("button",{onClick:fe,className:"rounded bg-blue-600 px-3 py-1 text-xs font-bold text-white",children:"Save"}),n.jsx("button",{onClick:()=>L(null),className:"rounded bg-slate-400 px-3 py-1 text-xs font-semibold text-white",children:"Cancel"})]}):n.jsxs(n.Fragment,{children:[n.jsx("span",{className:"flex-1 text-sm font-semibold text-slate-800",children:mt(O.name)}),n.jsxs("span",{className:"flex items-center gap-0.5 shrink-0",children:[n.jsx("button",{title:"এক ঘর উপরে",disabled:S===0,onClick:()=>B(O.id,-1),className:"rounded-md bg-slate-200 px-1.5 py-1 text-xs font-black text-slate-700 hover:bg-slate-300 disabled:opacity-30 disabled:cursor-not-allowed",children:"↑"}),n.jsx("button",{title:"এক ঘর নিচে",disabled:S===ue.length-1,onClick:()=>B(O.id,1),className:"rounded-md bg-slate-200 px-1.5 py-1 text-xs font-black text-slate-700 hover:bg-slate-300 disabled:opacity-30 disabled:cursor-not-allowed",children:"↓"})]}),n.jsx("button",{onClick:()=>{L(O.id),p(O.name)},className:"rounded bg-blue-600 px-2.5 py-1 text-xs font-semibold text-white hover:bg-blue-700",children:"Edit"}),n.jsx("button",{onClick:()=>pe(O.id),className:"rounded bg-rose-600 px-2.5 py-1 text-xs font-semibold text-white hover:bg-rose-700",children:"Delete"})]})},O.id)),ue.length===0&&n.jsx("li",{className:"px-3 py-6 text-center text-xs text-slate-400",children:"No categories"})]})]})]})})}function op({disburseCats:l,expenseCats:o,onChanged:u,onClose:c}){const[d,A]=b.useState("disburse"),[f,h]=b.useState(""),[x,L]=b.useState(null),[y,p]=b.useState(""),[w,P]=b.useState(""),G=d==="disburse"?l:o,K=()=>{if(!f.trim())return;const M=f.trim();if(G.some(te=>te.name.toLowerCase()===M.toLowerCase()))return P("Already exists");Rm(d,M),P(""),h(""),u()},j=()=>{!x||!y.trim()||(np(x,y),L(null),p(""),P(""),u())},z=M=>{confirm("Delete this category?")&&(Sm(M),u())},ce=(M,te)=>{ap(d,M,te),u()};return n.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-3 sm:p-4",children:n.jsxs("div",{className:"w-full max-w-lg rounded-2xl bg-white shadow-2xl overflow-hidden border border-slate-300",children:[n.jsxs("div",{className:"flex items-center justify-between border-b bg-slate-900 px-5 py-3 text-white",children:[n.jsxs("div",{children:[n.jsx("h3",{className:"text-base sm:text-lg font-bold",children:"Manage Payment Categories"}),n.jsx("p",{className:"text-xs text-slate-300",children:"Disburse & Expense categories"})]}),n.jsx("button",{onClick:c,className:"text-2xl text-slate-300 hover:text-white",children:"×"})]}),n.jsxs("div",{className:"flex border-b bg-slate-100 p-1.5 gap-1",children:[n.jsxs("button",{type:"button",onClick:()=>{A("disburse"),P(""),h(""),L(null)},className:`flex-1 rounded-xl py-2 text-center text-xs sm:text-sm font-bold transition ${d==="disburse"?"bg-red-600 text-white shadow-sm":"text-slate-700 hover:bg-slate-200"}`,children:["1. Disburse Categories (",l.length,")"]}),n.jsxs("button",{type:"button",onClick:()=>{A("expense"),P(""),h(""),L(null)},className:`flex-1 rounded-xl py-2 text-center text-xs sm:text-sm font-bold transition ${d==="expense"?"bg-slate-800 text-white shadow-sm":"text-slate-700 hover:bg-slate-200"}`,children:["2. Expense Categories (",o.length,")"]})]}),n.jsxs("div",{className:"p-4 sm:p-5",children:[n.jsxs("div",{className:"flex gap-2",children:[n.jsx("input",{value:f,onChange:M=>h(M.target.value),onKeyDown:M=>M.key==="Enter"&&K(),placeholder:d==="disburse"?"e.g. Jagoron, Agrossor, Buniyed...":"e.g. Bank Deposit, Others Expense...",className:"flex-1 rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"}),n.jsx("button",{type:"button",onClick:K,className:"rounded-lg bg-green-600 px-4 py-2 font-bold text-xs sm:text-sm text-white hover:bg-green-700",children:"Add"})]}),w&&n.jsx("p",{className:"mt-1 text-xs text-rose-600 font-semibold",children:w}),n.jsx("p",{className:"mt-3 text-[11px] font-semibold text-slate-400",children:"↑↓ চেপে ক্যাটাগরি নিজের মতো সাজান — ড্রপডাউনেও এই ক্রমই আসবে"}),n.jsx("ul",{className:"mt-1 max-h-64 divide-y rounded-xl border border-slate-200 overflow-auto",children:G.length===0?n.jsx("li",{className:"px-3 py-6 text-center text-xs text-slate-400",children:"No categories"}):G.map((M,te)=>n.jsx("li",{className:"flex items-center gap-2 px-3 py-2 hover:bg-slate-50",children:x===M.id?n.jsxs(n.Fragment,{children:[n.jsx("input",{value:y,autoFocus:!0,onChange:k=>p(k.target.value),onKeyDown:k=>k.key==="Enter"&&j(),className:"flex-1 rounded border border-slate-300 px-2 py-1 text-xs font-semibold focus:border-blue-500 focus:outline-none"}),n.jsx("button",{onClick:j,className:"rounded bg-blue-600 px-3 py-1 text-xs font-bold text-white",children:"Save"}),n.jsx("button",{onClick:()=>L(null),className:"rounded bg-slate-400 px-3 py-1 text-xs font-semibold text-white",children:"Cancel"})]}):n.jsxs(n.Fragment,{children:[n.jsx("span",{className:"flex-1 text-sm font-semibold text-slate-800",children:mt(M.name)}),n.jsxs("span",{className:"flex items-center gap-0.5 shrink-0",children:[n.jsx("button",{type:"button",title:"এক ঘর উপরে",disabled:te===0,onClick:()=>ce(M.id,-1),className:"rounded-md bg-slate-200 px-1.5 py-1 text-xs font-black text-slate-700 hover:bg-slate-300 disabled:opacity-30 disabled:cursor-not-allowed",children:"↑"}),n.jsx("button",{type:"button",title:"এক ঘর নিচে",disabled:te===G.length-1,onClick:()=>ce(M.id,1),className:"rounded-md bg-slate-200 px-1.5 py-1 text-xs font-black text-slate-700 hover:bg-slate-300 disabled:opacity-30 disabled:cursor-not-allowed",children:"↓"})]}),n.jsx("button",{type:"button",onClick:()=>{L(M.id),p(M.name)},className:"rounded bg-blue-600 px-2.5 py-1 text-xs font-semibold text-white hover:bg-blue-700",children:"Edit"}),n.jsx("button",{type:"button",onClick:()=>z(M.id),className:"rounded bg-rose-600 px-2.5 py-1 text-xs font-semibold text-white hover:bg-rose-700",children:"Delete"})]})},M.id))})]})]})})}const Gi=[{name:"Salary & Allowance",code:"5001"},{name:"Graututy",code:"7601"},{name:"Office Rent-Office",code:"6501"},{name:"Office Rent-Abashik",code:"6506"},{name:"Printing & Stationary",code:"6001"},{name:"Postage & Telephone",code:"5901"},{name:"Fuel & Lubricant",code:"5601"},{name:"Entertainment",code:"6801"},{name:"Water & Electricity",code:"5801"},{name:"Photocopy Bill",code:"6003"},{name:"Miscellaneous Exp.",code:"7011"},{name:"Bank charge",code:"5301"},{name:"Picnic",code:"7008"},{name:"Convayance",code:"5103"},{name:"Furniture & Fixture",code:"1504"},{name:"Electronics Good",code:"1505"},{name:"Crokeries / Leave Expense",code:"6004-5101"},{name:"Repair And Maintanance",code:"5707"},{name:"Legal Expen",code:"6101"},{name:"Food Bill",code:"7012"},{name:"Service Charge Jagoron",code:"5511"},{name:"Service Charge Agrossor",code:"5512"},{name:"Service Charge MDP",code:"5519"},{name:"Service Charge Buniyed",code:"5513"},{name:"Service Charge Sufolon",code:"5514"},{name:"Service Charge LRL",code:"5520"},{name:"MDP-AF",code:"5521"},{name:"LRL-2 S/C",code:"5524"},{name:"MFCE",code:"5525"},{name:"Miscellaneous Income",code:"9402"}],ip="gobra_payment_desc_history",o5=150,na=l=>l.trim().toLowerCase();function qm(){try{const l=localStorage.getItem(ip),o=l?JSON.parse(l):[];return Array.isArray(o)?o.filter(u=>typeof u=="string"&&u.trim()):[]}catch{return[]}}function oc(l){const o=String(l||"").trim();if(!(!o||o.length<2))try{let u=qm();u=[o,...u.filter(c=>na(c)!==na(o))].slice(0,o5),localStorage.setItem(ip,JSON.stringify(u)),window.dispatchEvent(new CustomEvent("payment-desc-history-changed"))}catch{}}const Jh=12;function i5(l){const o=na(String(l||""));if(!o)return[];const u=o.replace(/[^0-9]/g,""),c=/[a-z\u0980-\u09FF]/i.test(o),d=[],A=new Set,f=L=>{const y=L.kind+"|"+na(L.insert);A.has(y)||d.length>=Jh||(A.add(y),d.push(L))};if(u.length>=1){let L=0;for(const y of zn()){if(L>=4)break;const p=String(y.memberCode||"");p&&(!p.startsWith(u)&&!p.includes(u)||(L++,f({kind:"member",icon:"👤",insert:`${y.memberName||""} - ${p} - ${y.centreName||""} - ${y.centreCode||""}`.replace(/\s+-\s+-(\s|$)/g," -$1").replace(/(\s+-\s+){2,}/g," - "),title:`${y.memberName||"—"} • ${p}`,sub:`${y.centreName||"—"} • সেন্টার কোড: ${y.centreCode||"—"}`})))}}const h=Gi.filter(L=>na(L.name).startsWith(o)),x=Gi.filter(L=>!na(L.name).startsWith(o)&&na(L.name).includes(o));for(const L of[...h,...x])f({kind:"part",icon:"🧾",insert:`${L.name} (${L.code})`,title:L.name,sub:`কোড: ${L.code}`});if(u.length>=1)for(const L of Gi)L.code.replace(/-/g,"").includes(u)&&f({kind:"part",icon:"🔢",insert:`${L.name} (${L.code})`,title:L.name,sub:`কোড: ${L.code}`});if(c||u.length){let L=0;for(const y of qm()){if(L>=5)break;!na(y).includes(o)||Gi.some(w=>na(`${w.name} (${w.code})`)===na(y)||na(w.name)===na(y))||(L++,f({kind:"history",icon:"🕘",insert:y,title:y,sub:"আগের এন্ট্রি থেকে"}))}}return d.slice(0,Jh)}const Xh=12,lo=l=>String(l||"").trim().toLowerCase();function c5(l,o){return`${l.memberName||""} - ${o} - ${l.centreName||""} - ${l.centreCode||""}`.replace(/\s+-\s+-(\s|$)/g," -$1").replace(/(\s+-\s+){2,}/g," - ")}function Vh(l){const o=lo(l);if(!o)return[];const u=o.replace(/[^0-9]/g,""),c=/[a-z\u0980-\u09FF]/i.test(o),d=[],A=new Set,f=h=>{const x=h.kind+"|"+lo(h.insert);A.has(x)||d.length>=Xh||(A.add(x),d.push(h))};try{let h=0;for(const y of zn()){if(h>=5)break;const p=String(y.memberCode||"");if(!p)continue;const w=!!u&&p.includes(u),P=c&&lo(String(y.memberName||"")).includes(o);!w&&!P||(h++,f({kind:"member",icon:"👤",insert:c5(y,p),title:`${y.memberName||"—"} • ${p}`,sub:`${y.centreName||"—"} • সেন্টার কোড: ${y.centreCode||"—"}`}))}const x=new Map;for(const y of zn()){const p=String(y.centreCode||""),w=String(y.centreName||"");if(!p&&!w)continue;const P=(p||w).toLowerCase();x.has(P)||x.set(P,{code:p,name:w})}let L=0;for(const y of x.values()){if(L>=4)break;const p=!!u&&y.code.includes(u),w=c&&lo(y.name).includes(o);!p&&!w||(L++,f({kind:"part",icon:"🏛️",insert:y.name&&y.code?`${y.name} - ${y.code}`:y.name||y.code,title:y.name||y.code,sub:`সেন্টার${y.code?` • কোড: ${y.code}`:""}`}))}}catch{}try{let h=0;for(const x of qm()){if(h>=5)break;lo(x).includes(o)&&(h++,f({kind:"history",icon:"🕘",insert:x,title:x,sub:"আগের এন্ট্রি থেকে"}))}}catch{}return d.slice(0,Xh)}const Yh=l=>{if(!l||!l.includes("-"))return"";const o=new Date(l+"T00:00:00");return o.setDate(o.getDate()-1),o.toISOString().slice(0,10)};function u5({selectedDate:l}){const[o,u]=b.useState([]),[c,d]=b.useState(!1),A=()=>{d(!0),window.setTimeout(()=>d(!1),900)},[f,h]=b.useState([]),[x,L]=b.useState(!1),[y,p]=b.useState(!1),[w,P]=b.useState([]),[G,K]=b.useState([]),[j,z]=b.useState(!1),[ce,M]=b.useState(!1),[te,k]=b.useState(!1),[J,ue]=b.useState("all"),[C,ne]=b.useState(l),[re,ae]=b.useState(l),[fe,pe]=b.useState(null),[B,O]=b.useState({category:"",subCategory:"",amount:0,description:"",denomination:{},otherAmount:0,txDate:l}),[S,I]=b.useState(null),[q,ee]=b.useState(()=>mo()),[U,H]=b.useState(!1),[N,oe]=b.useState(!1),R=b.useMemo(()=>x&&B.description.trim()?Vh(B.description):[],[x,B.description]),$=b.useMemo(()=>{var Ae;return y&&((Ae=S==null?void 0:S.description)!=null&&Ae.trim())?Vh(S.description):[]},[y,S]),ge=Ae=>{O(Ue=>({...Ue,description:Ae.insert})),L(!1)},be=Ae=>{S&&I({...S,description:Ae.insert}),p(!1)},[ye,Ie]=b.useState(""),[Y,Q]=b.useState(null),Re=()=>{const Ae=sn(),Ue=C<=re?C:re,lt=C<=re?re:C,Ot=Ae.filter(Zt=>Zt.type==="receive"&&Zt.txDate>=Ue&&Zt.txDate<=lt);u(Ot);const ln=Fn(C===re?C:l);Q({prevCash:ln.prevCash,prevBank:ln.prevBank,prevDate:ln.prevDate})},Te=()=>{ee(mo()),h(ha("receive")),P(ha("disburse")),K(ha("expense"))};b.useEffect(()=>{const Ae=()=>Te();return window.addEventListener("categories-changed",Ae),()=>window.removeEventListener("categories-changed",Ae)},[]),b.useEffect(()=>{ne(l),ae(l),Re(),Te(),O(Ue=>({...Ue,txDate:l}));const Ae=()=>Re();return window.addEventListener("tx-changed",Ae),()=>window.removeEventListener("tx-changed",Ae)},[l]),b.useEffect(()=>{Re()},[C,re]);const rt=B.category.trim().toLowerCase().includes("fund receive"),At=ec(B.category,q,w.map(Ae=>Ae.name));f.map(Ae=>Ae.name);const ft=()=>{if(Oe(B.txDate)){A();return}if(!_t(B.txDate)){alert(`⚠️ এই তারিখের (${B.txDate}) কর্মদিবস এখনও শুরু (Day Open) করা হয়নি। কোনো এন্ট্রি করার পূর্বে দিনটি Day Open করুন।`),window.dispatchEvent(new CustomEvent("open-day-open-modal"));return}const Ae=pt(B.txDate,l);if(Ae.blocked){alert(`⚠️ ${Ae.reason||"দুটি কর্মদিবসের মধ্যবর্তী বন্ধের দিনে কোনো নতুন এন্ট্রি করা যাবে না।"}`);return}if(!B.category.trim())return Ie("Category required");const Ue=Number(B.amount)||0;if(!Ue)return Ie("Amount required");const lt=Ue;oc(B.description),Wb({type:"receive",category:B.category.trim().toLowerCase(),subCategory:rt?B.subCategory.trim().toLowerCase():"",amount:String(lt),description:B.description||"",denomination:B.denomination,otherAmount:String(B.otherAmount||0),txDate:B.txDate}),O({category:"",subCategory:"",amount:0,description:"",denomination:{},otherAmount:0,txDate:l}),Ie(lt<0?"ফেরত (মাইনাস) এন্ট্রি সেভ হয়েছে!":"Receive saved successfully!"),Re()},et=()=>{if(!S||!S.id)return;if(Oe(S.txDate)){A();return}const Ae=pt(S.txDate,l);if(Ae.blocked){alert(`⚠️ ${Ae.reason||"দুটি কর্মদিবসের মধ্যবর্তী বন্ধের দিনে কোনো পরিবর্তন করা যাবে না।"}`);return}if(!S.category.trim())return alert("Category required");if(!S.amount)return alert("Amount required");oc(S.description),ep({id:S.id,type:"receive",category:S.category.trim().toLowerCase(),subCategory:S.category.trim().toLowerCase().includes("fund receive")?(S.subCategory||"").trim().toLowerCase():"",amount:String(S.amount),description:S.description||"",denomination:S.denomination,otherAmount:String(S.otherAmount||0),txDate:S.txDate}),I(null),Re()},ve=()=>{if(fe!==null){const Ae=o.find(Ue=>Ue.id===fe);if(Ae&&Oe(Ae.txDate)){A(),pe(null);return}tp(fe),pe(null),Re()}},st=J==="all"?o:o.filter(Ae=>Ae.category.toLowerCase().trim()===J.toLowerCase().trim()),St=st.reduce((Ae,Ue)=>Ae+Number(Ue.amount),0),gt=o.reduce((Ae,Ue)=>Ae+Number(Ue.amount),0),yt=Array.from(new Set(o.map(Ae=>Ae.category.toLowerCase().trim()).filter(Boolean)));return n.jsxs("div",{className:"space-y-6",children:[n.jsxs("div",{id:"receive-form-card",className:"rounded-2xl border-t-4 border-green-500 bg-white p-5 sm:p-6 shadow-sm border border-slate-200 transition-all",children:[n.jsxs("div",{className:"flex items-center justify-between mb-4",children:[n.jsxs("h1",{className:"text-xl sm:text-2xl font-bold text-slate-900 flex flex-wrap items-center gap-2",children:[n.jsx("span",{children:"📥"}),n.jsx("span",{children:"Receive Entry"}),Oe(B.txDate)&&n.jsx("span",{className:`shrink-0 rounded-lg border border-rose-300 bg-rose-100 px-2 py-0.5 text-[10px] font-black text-rose-700 ${c?"lock-pulse":""}`,title:"দিন সমাপ্ত (Day Closed) — হিসাব লক করা আছে",children:"🔒 Day Closed"})]}),n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("button",{type:"button",onClick:()=>k(!0),title:"Denomination — নোট গুনে ক্যাশ মেলান (রিপোর্ট উইন্ডো)","aria-label":"Denomination — Check Diff",className:"flex h-8 w-9 shrink-0 cursor-pointer items-center justify-center rounded-xl border border-amber-600 bg-amber-500 text-base leading-none shadow-xs hover:bg-amber-600 sm:text-lg",children:"💰"}),n.jsx("span",{className:"text-xs font-mono font-bold text-slate-600 bg-slate-100 px-2.5 py-1 rounded border border-slate-200",children:B.txDate})]})]}),!Oe(B.txDate)&&pt(B.txDate,l).blocked&&n.jsxs("div",{className:"mb-4 rounded-xl border border-rose-400 bg-rose-50 p-3 text-xs sm:text-sm font-bold text-rose-900 flex items-start gap-2 shadow-xs",children:[n.jsx("span",{className:"text-base shrink-0",children:"🚫"}),n.jsxs("div",{children:[n.jsx("span",{className:"block font-black text-rose-950",children:"এই তারিখটি ব্লক (কর্মদিবসের মধ্যবর্তী বন্ধের দিন)"}),n.jsx("span",{className:"text-xs text-rose-800 font-normal mt-0.5 block",children:pt(B.txDate,l).reason})]})]}),n.jsxs("div",{className:"grid gap-4 md:grid-cols-2",children:[n.jsxs("div",{className:"grid grid-cols-2 items-end gap-3 md:grid-cols-3 md:col-span-2",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"mb-1 flex items-center justify-between",children:[n.jsx("label",{className:"text-xs font-bold text-slate-700",children:"Category"}),n.jsx("button",{type:"button",onClick:()=>M(!0),className:"text-xs font-bold text-blue-600 hover:underline cursor-pointer",children:"⚙ Manage"})]}),n.jsx(Zh,{value:B.category,disabled:Oe(B.txDate),onChange:Ae=>O({...B,category:Ae,subCategory:""}),cats:f,onManageClick:()=>M(!0)})]}),n.jsxs("div",{children:[n.jsx("label",{className:"mb-1 block text-xs font-bold text-slate-700",children:"Amount"}),n.jsx("input",{readOnly:!0,disabled:Oe(B.txDate),value:B.amount?de(B.amount):"",placeholder:"",onClick:()=>{if(Oe(B.txDate)){A();return}H(!0)},onFocus:()=>{if(Oe(B.txDate)){A();return}H(!0)},className:`w-full h-[42px] rounded-lg border px-3 py-2 text-right font-mono text-lg font-bold transition shadow-2xs ${Oe(B.txDate)?"border-slate-300 bg-slate-100 text-slate-500 cursor-not-allowed opacity-60":(B.amount||0)<0?"cursor-pointer border-rose-400 bg-rose-50 text-rose-700 focus:border-rose-500 focus:outline-none hover:bg-rose-100":"cursor-pointer border-slate-300 bg-orange-50 focus:border-blue-500 focus:outline-none hover:bg-orange-100/70"}`})]}),rt&&n.jsxs("div",{className:"md:col-start-1 md:row-start-2",children:[n.jsxs("div",{className:"mb-1 flex items-center justify-between gap-2",children:[n.jsx("label",{className:"text-xs font-bold text-slate-700",children:"Sub Category (সাব ক্যাটাগরি)"}),n.jsxs("div",{className:"flex items-center gap-2",children:[B.subCategory?n.jsx("button",{type:"button",disabled:Oe(B.txDate),onClick:()=>{if(Oe(B.txDate)){A();return}O({...B,subCategory:""})},title:"সাব-ক্যাটাগরি মুছে ফেলুন (ডিলিট)",className:"cursor-pointer text-[11px] font-black text-rose-600 hover:underline disabled:cursor-not-allowed disabled:opacity-40",children:"✕ মুছুন"}):null,n.jsx("button",{type:"button",onClick:()=>z(!0),title:"Disburse Category যোগ/এডিট/ডিলিট — সেই তালিকা থেকেই এই সাব-ক্যাটাগরি আসে",className:"cursor-pointer text-[11px] font-black text-blue-600 hover:underline",children:"⚙ Manage"})]})]}),n.jsx(Zn,{value:B.subCategory,onChange:Ae=>O({...B,subCategory:Ae}),options:B.subCategory&&!At.includes(B.subCategory)?[...At,B.subCategory]:At,placeholder:"-- Select Sub Category --",disabled:Oe(B.txDate),className:"w-full h-[42px] rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-bold text-slate-800 focus:border-blue-500 focus:outline-none cursor-pointer"})]}),n.jsxs("div",{className:`${rt?"":"col-span-2 md:col-span-1"} md:col-start-3 md:row-start-1 relative`,children:[n.jsxs("label",{className:"mb-1 block text-xs font-bold text-slate-700",children:["Description ",n.jsx("span",{className:"text-[10px] font-black text-amber-600",children:"💡 টাইপ করলেই সাজেশন"})]}),n.jsx("input",{type:"text",disabled:Oe(B.txDate),value:B.description,onChange:Ae=>O({...B,description:Ae.target.value}),onFocus:()=>L(!0),onBlur:()=>setTimeout(()=>L(!1),160),onKeyDown:Ae=>{Ae.key==="Escape"&&L(!1),Ae.key==="Enter"&&R.length&&(Ae.preventDefault(),ge(R[0]))},placeholder:"মেম্বার কোড / নাম / সেন্টার লিখুন…",autoComplete:"off",className:`w-full h-[42px] rounded-lg border px-3 py-2 text-sm font-semibold text-slate-800 focus:outline-none ${Oe(B.txDate)?"border-slate-300 bg-slate-100 text-slate-500 cursor-not-allowed opacity-60":"border-slate-300 bg-orange-50 focus:border-blue-500"}`}),x&&R.length>0&&n.jsx("div",{className:"absolute left-0 right-0 top-full z-50 mt-1 max-h-56 overflow-y-auto rounded-xl border border-slate-300 bg-white shadow-2xl",children:R.map((Ae,Ue)=>n.jsxs("button",{type:"button",onMouseDown:lt=>{lt.preventDefault(),ge(Ae)},className:`flex w-full items-start gap-2 px-3 py-2 text-left transition cursor-pointer hover:bg-amber-50 ${Ue>0?"border-t border-slate-100":""}`,children:[n.jsx("span",{className:"mt-0.5 text-sm leading-none",children:Ae.icon}),n.jsxs("span",{className:"min-w-0 flex-1",children:[n.jsx("span",{className:"block truncate text-[13px] font-black text-slate-800",children:Ae.title}),n.jsx("span",{className:"block truncate text-[10px] font-bold text-slate-500",children:Ae.sub})]})]},Ue))})]})]}),n.jsxs("div",{className:"flex gap-2.5 md:col-span-2 pt-1",children:[n.jsx("button",{onClick:ft,disabled:Oe(B.txDate)||!_t(B.txDate)||pt(B.txDate,l).blocked,className:"min-h-[44px] rounded-xl bg-green-600 px-6 py-2.5 font-bold text-sm text-white shadow hover:bg-green-700 active:scale-98 transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",children:Oe(B.txDate)?"🔒 দিন সমাপ্ত (লকড)":pt(B.txDate,l).blocked?"🚫 তারিখ ব্লকড":_t(B.txDate)?"Save Receive":"☀️ দিন শুরু (Day Open) করুন"}),n.jsx("button",{onClick:()=>{O({category:"",amount:0,description:"",denomination:{},otherAmount:0,txDate:l}),Ie("")},disabled:Oe(B.txDate)||!_t(B.txDate)||pt(B.txDate,l).blocked,className:"min-h-[44px] rounded-xl bg-slate-500 px-6 py-2.5 font-bold text-sm text-white hover:bg-slate-600 active:scale-98 transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",children:"Reset"})]})]}),ye&&n.jsx("p",{className:"mt-2 text-xs font-bold text-emerald-700",children:ye}),n.jsx(Nm,{open:U,onClose:()=>H(!1),targetAmount:B.amount||0,date:B.txDate||l,hideSummary:!0,hideOtherRow:!0,onApplyAmount:Ae=>{O({...B,amount:Math.round(Ae),denomination:{},otherAmount:0}),H(!1)}})]}),n.jsxs("div",{className:"overflow-hidden rounded-2xl bg-white shadow-sm border border-slate-200",children:[n.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b px-5 py-3 bg-slate-50",children:[n.jsx("div",{className:"flex items-center gap-2",children:n.jsxs("span",{className:"font-bold text-slate-800 text-sm sm:text-base",children:["Saved Entries (",st.length,"/",o.length,")"]})}),n.jsxs("div",{className:"grid w-full grid-cols-2 items-center gap-x-2 gap-y-1 sm:w-auto sm:max-w-md sm:flex sm:flex-wrap",children:[n.jsxs("div",{className:"flex min-w-0 items-center gap-1.5",children:[n.jsx("label",{className:"shrink-0 text-xs font-bold text-slate-600",children:"From:"}),n.jsx("div",{className:"min-w-0 flex-1",children:n.jsx(xn,{value:C,onChange:Ae=>ne(Ae),className:"w-full px-2 py-1 text-xs sm:text-sm bg-orange-50"})})]}),n.jsxs("div",{className:"flex min-w-0 items-center gap-1.5",children:[n.jsx("label",{className:"shrink-0 text-xs font-bold text-slate-600",children:"To:"}),n.jsx("div",{className:"min-w-0 flex-1",children:n.jsx(xn,{value:re,onChange:Ae=>ae(Ae),className:"w-full px-2 py-1 text-xs sm:text-sm bg-orange-50"})})]})]}),n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("label",{className:"text-xs font-bold text-slate-600",children:"Category Filter:"}),n.jsx(Zn,{value:J,onChange:Ae=>ue(Ae),noKeyboardOnMobile:!0,options:[{value:"all",label:`All Categories (${o.length})`},...yt.map(Ae=>({value:Ae,label:mt(Ae)}))],placeholder:"All Categories",className:"rounded-lg border border-slate-300 bg-orange-50 px-3 py-1.5 text-xs sm:text-sm font-semibold text-slate-800 shadow-2xs focus:border-blue-500 focus:outline-none cursor-pointer w-44 sm:w-52"})]})]}),n.jsx("div",{className:"overflow-x-auto max-h-[60vh] sm:max-h-[68vh] overflow-y-auto",children:n.jsxs("table",{className:"w-full text-xs sm:text-sm",children:[n.jsx("thead",{className:"sticky top-0 bg-slate-800 text-left text-white z-10",children:n.jsxs("tr",{children:[n.jsx("th",{className:"px-3.5 py-2.5",children:"#"}),n.jsx("th",{className:"px-3.5 py-2.5",children:"Date"}),n.jsx("th",{className:"px-3.5 py-2.5",children:"Category"}),n.jsx("th",{className:"px-3.5 py-2.5",children:"Sub Cat."}),n.jsx("th",{className:"px-3.5 py-2.5",children:"Description"}),n.jsx("th",{className:"px-3.5 py-2.5 text-right",children:"Amount"}),n.jsx("th",{className:"px-3.5 py-2.5 text-center",children:"Action"})]})}),n.jsxs("tbody",{children:[Y&&J==="all"&&C===re&&n.jsxs(n.Fragment,{children:[n.jsxs("tr",{className:"border-b bg-emerald-50 font-semibold text-slate-900",children:[n.jsx("td",{className:"px-3.5 py-2",children:"-"}),n.jsx("td",{className:"px-3.5 py-2 font-mono",children:Y.prevDate||Yh(l)}),n.jsx("td",{className:"px-3.5 py-2",children:"Cash in Hand (Opening)"}),n.jsx("td",{className:"px-3.5 py-2 text-slate-400 font-mono",children:"-"}),n.jsx("td",{className:"px-3.5 py-2 text-right font-mono text-emerald-800 font-bold",children:de(Y.prevCash)}),n.jsx("td",{})]}),n.jsxs("tr",{className:"border-b bg-indigo-50 font-semibold text-slate-900",children:[n.jsx("td",{className:"px-3.5 py-2",children:"-"}),n.jsx("td",{className:"px-3.5 py-2 font-mono",children:Y.prevDate||Yh(l)}),n.jsx("td",{className:"px-3.5 py-2",children:"Bank Balance (Opening)"}),n.jsx("td",{className:"px-3.5 py-2 text-slate-400 font-mono",children:"-"}),n.jsx("td",{className:"px-3.5 py-2 text-right font-mono text-indigo-800 font-bold",children:de(Y.prevBank)}),n.jsx("td",{})]})]}),st.length===0?n.jsx("tr",{children:n.jsx("td",{colSpan:6,className:"px-3 py-6 text-center text-slate-400",children:J==="all"?`No receive entries on ${l}`:`No entries for category "${mt(J)}"`})}):st.map((Ae,Ue)=>n.jsxs("tr",{className:"border-b hover:bg-slate-50",children:[n.jsx("td",{className:"px-3.5 py-2 text-slate-500 font-mono",children:Ue+1}),n.jsx("td",{className:"px-3.5 py-2 font-mono",children:Ae.txDate}),n.jsx("td",{className:"px-3.5 py-2 font-bold text-slate-800",children:mt(Ae.category)}),n.jsx("td",{className:"px-3.5 py-2 text-slate-700",children:Ae.subCategory||"-"}),n.jsx("td",{className:"px-3.5 py-2 text-slate-600",children:Ae.description||"-"}),n.jsx("td",{className:`px-3.5 py-2 text-right font-mono font-black ${Number(Ae.amount)<0?"text-rose-700":"text-green-700"}`,children:de(Ae.amount)}),n.jsx("td",{className:"px-3.5 py-2 text-center whitespace-nowrap",children:n.jsxs("div",{className:"flex items-center justify-center gap-2",children:[n.jsx("button",{type:"button",disabled:Oe(Ae.txDate),onClick:()=>{if(Oe(Ae.txDate)){A();return}I({id:Ae.id,category:Ae.category,subCategory:Ae.subCategory||"",amount:Number(Ae.amount),description:Ae.description??"",denomination:Ae.denomination??{},otherAmount:Number(Ae.otherAmount??0),txDate:Ae.txDate})},className:`min-h-[36px] rounded-lg px-3 py-1.5 text-xs font-bold text-white transition ${Oe(Ae.txDate)?"bg-slate-400 cursor-not-allowed opacity-50":"bg-blue-600 hover:bg-blue-700 cursor-pointer"}`,title:Oe(Ae.txDate)?"দিন সমাপ্ত (Locked) - উপরের Working-Day বার থেকে Re-open করুন":"Edit",children:Oe(Ae.txDate)?"🔒 Edit":"Edit"}),n.jsx("button",{type:"button",disabled:Oe(Ae.txDate),onClick:()=>{if(Oe(Ae.txDate)){A();return}pe(Ae.id)},className:`min-h-[36px] rounded-lg px-3 py-1.5 text-xs font-bold text-white transition ${Oe(Ae.txDate)?"bg-slate-400 cursor-not-allowed opacity-50":"bg-rose-600 hover:bg-rose-700 cursor-pointer"}`,title:Oe(Ae.txDate)?"দিন সমাপ্ত (Locked) - উপরের Working-Day বার থেকে Re-open করুন":"Delete",children:Oe(Ae.txDate)?"🔒 Del":"Delete"})]})})]},Ae.id))]}),o.length>0&&n.jsxs("tfoot",{className:"sticky bottom-0 bg-slate-100 font-bold border-t-2 border-slate-300 z-10 shadow-inner",children:[n.jsxs("tr",{className:"border-b border-slate-200",children:[n.jsx("td",{colSpan:4,className:"px-3.5 py-2 text-right font-bold text-slate-700",children:J==="all"?"Today's Receive":`Subtotal (${mt(J)})`}),n.jsx("td",{className:"px-3.5 py-2 text-right font-mono font-bold text-green-700",children:de(J==="all"?gt:St)}),n.jsx("td",{})]}),J==="all"&&n.jsxs("tr",{className:"bg-emerald-50",children:[n.jsx("td",{colSpan:4,className:"px-3.5 py-2 text-right font-black text-emerald-900",children:"Total Receive (Opening সহ)"}),n.jsx("td",{className:"px-3.5 py-2 text-right font-mono font-black text-emerald-800 text-sm sm:text-base",children:de(((Y==null?void 0:Y.prevCash)||0)+gt)}),n.jsx("td",{})]})]})]})})]}),fe!==null&&n.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4",children:n.jsxs("div",{className:"w-full max-w-sm rounded-2xl bg-white p-5 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95",children:[n.jsxs("h3",{className:"text-base font-bold text-slate-900 flex items-center gap-2",children:[n.jsx("span",{className:"text-rose-600 text-lg",children:"⚠️"}),n.jsx("span",{children:"Confirm Delete"})]}),n.jsx("p",{className:"mt-2 text-sm text-slate-600",children:"Are you sure you want to permanently delete this receive entry? This action cannot be undone."}),n.jsxs("div",{className:"mt-5 flex items-center justify-end gap-3",children:[n.jsx("button",{type:"button",onClick:()=>pe(null),className:"min-h-[44px] rounded-xl bg-slate-200 px-4 py-2 text-sm font-bold text-slate-700 hover:bg-slate-300 active:scale-95 transition",children:"Cancel"}),n.jsx("button",{type:"button",onClick:ve,className:"min-h-[44px] rounded-xl bg-rose-600 px-5 py-2 text-sm font-bold text-white hover:bg-rose-700 active:scale-95 transition",children:"Delete Entry"})]})]})}),S&&n.jsx("div",{className:"fixed inset-0 z-40 flex items-center justify-center bg-black/60 p-4",children:n.jsxs("div",{className:"max-h-[95vh] w-full max-w-2xl overflow-auto rounded-2xl bg-white p-5 sm:p-6 shadow-2xl",children:[n.jsxs("div",{className:"mb-4 flex items-center justify-between border-b pb-3",children:[n.jsxs("h2",{className:"text-lg font-bold",children:["Edit Receive Entry #",S.id]}),n.jsx("button",{onClick:()=>I(null),className:"min-h-[36px] min-w-[36px] text-2xl text-slate-400 hover:text-rose-600 flex items-center justify-center",children:"×"})]}),n.jsxs("div",{className:"grid gap-4 md:grid-cols-2",children:[n.jsxs("div",{children:[n.jsx("label",{className:"mb-1 block text-xs font-bold text-slate-700",children:"Date"}),n.jsx(xn,{value:S.txDate,onChange:Ae=>I({...S,txDate:Ae}),className:"px-3 py-2 text-sm"})]}),n.jsxs("div",{children:[n.jsx("label",{className:"mb-1 block text-xs font-bold text-slate-700",children:"Category"}),n.jsx(Zh,{value:S.category,onChange:Ae=>I({...S,category:Ae,subCategory:""}),cats:f,onManageClick:()=>M(!0)})]}),S.category.trim().toLowerCase().includes("fund receive")&&n.jsxs("div",{children:[n.jsxs("div",{className:"mb-1 flex items-center justify-between gap-2",children:[n.jsx("label",{className:"text-xs font-bold text-slate-700",children:"Sub Category (সাব ক্যাটাগরি)"}),S.subCategory?n.jsx("button",{type:"button",onClick:()=>I({...S,subCategory:""}),title:"সাব-ক্যাটাগরি মুছে ফেলুন (ডিলিট)",className:"cursor-pointer text-[11px] font-black text-rose-600 hover:underline",children:"✕ মুছুন"}):null]}),n.jsx(Zn,{value:S.subCategory||"",onChange:Ae=>I({...S,subCategory:Ae}),options:(()=>{const Ae=ec(S.category,q,w.map(lt=>lt.name)),Ue=(S.subCategory||"").trim();return Ue&&!Ae.includes(Ue)?[...Ae,Ue]:Ae})(),placeholder:"-- Select Sub Category --",className:"w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-bold text-slate-800 focus:border-blue-500 focus:outline-none cursor-pointer"})]}),n.jsxs("div",{children:[n.jsx("label",{className:"mb-1 block text-xs font-bold text-slate-700",children:"Amount"}),n.jsx("input",{readOnly:!0,value:S.amount?de(S.amount):"",placeholder:"",onClick:()=>oe(!0),onFocus:()=>oe(!0),title:"Amount চাপলে ডেনোমিনেশন পপআপ খুলবে",className:`w-full h-[42px] rounded-lg border px-3 py-2 text-right font-mono text-lg font-bold transition shadow-2xs ${(S.amount||0)<0?"cursor-pointer border-rose-400 bg-rose-50 text-rose-700 focus:border-rose-500 focus:outline-none hover:bg-rose-100":"cursor-pointer border-slate-300 bg-orange-50 focus:border-blue-500 focus:outline-none hover:bg-orange-100/70"}`})]}),n.jsxs("div",{className:"md:col-span-2 relative",children:[n.jsxs("label",{className:"mb-1 block text-xs font-bold text-slate-700",children:["Description ",n.jsx("span",{className:"text-[10px] font-black text-amber-600",children:"💡 টাইপ করলেই সাজেশন"})]}),n.jsx("input",{type:"text",value:S.description,onChange:Ae=>I({...S,description:Ae.target.value}),onFocus:()=>p(!0),onBlur:()=>setTimeout(()=>p(!1),160),onKeyDown:Ae=>{Ae.key==="Escape"&&p(!1),Ae.key==="Enter"&&$.length&&(Ae.preventDefault(),be($[0]))},placeholder:"মেম্বার কোড / নাম / সেন্টার লিখুন…",autoComplete:"off",className:"w-full h-[42px] rounded-lg border border-slate-300 bg-orange-50 px-3 py-2 text-sm font-semibold text-slate-800 focus:border-blue-500 focus:outline-none"}),y&&$.length>0&&n.jsx("div",{className:"absolute left-0 right-0 top-full z-50 mt-1 max-h-56 overflow-y-auto rounded-xl border border-slate-300 bg-white shadow-2xl",children:$.map((Ae,Ue)=>n.jsxs("button",{type:"button",onMouseDown:lt=>{lt.preventDefault(),be(Ae)},className:`flex w-full items-start gap-2 px-3 py-2 text-left transition cursor-pointer hover:bg-amber-50 ${Ue>0?"border-t border-slate-100":""}`,children:[n.jsx("span",{className:"mt-0.5 text-sm leading-none",children:Ae.icon}),n.jsxs("span",{className:"min-w-0 flex-1",children:[n.jsx("span",{className:"block truncate text-[13px] font-black text-slate-800",children:Ae.title}),n.jsx("span",{className:"block truncate text-[10px] font-bold text-slate-500",children:Ae.sub})]})]},Ue))})]}),n.jsxs("div",{className:"flex justify-end gap-3 md:col-span-2 border-t pt-3 mt-2",children:[n.jsx("button",{onClick:()=>I(null),className:"min-h-[44px] rounded-xl bg-slate-200 px-5 py-2 font-bold text-sm text-slate-700 hover:bg-slate-300 transition",children:"Cancel"}),n.jsx("button",{onClick:et,className:"min-h-[44px] rounded-xl bg-green-600 px-6 py-2 font-bold text-sm text-white hover:bg-green-700 transition",children:"Update Entry"})]})]}),n.jsx(Nm,{open:N,onClose:()=>oe(!1),targetAmount:S.amount||0,date:S.txDate,hideSummary:!0,hideOtherRow:!0,onApplyAmount:Ae=>{I({...S,amount:Math.round(Ae),denomination:{},otherAmount:0}),oe(!1)}})]})}),ce&&n.jsx(r5,{type:"receive",cats:f,onChanged:Te,onClose:()=>M(!1)}),j&&n.jsx(op,{disburseCats:w,expenseCats:G,onChanged:Te,onClose:()=>z(!1)}),te&&n.jsx(Ym,{open:te,onClose:()=>k(!1),cashInHand:sp(B.txDate||l).cashInHand,date:B.txDate||l})]})}function qh({value:l,onChange:o,disburseCats:u,expenseCats:c,onManageClick:d,disabled:A=!1}){const[f,h]=b.useState(!1),x=b.useRef(null),L=b.useRef(0),y=b.useRef(null),p=()=>{L.current=Date.now()},w=()=>Date.now()-L.current<600,P=()=>{const k=document.activeElement;k&&(k.tagName==="INPUT"||k.tagName==="TEXTAREA")&&k.blur()};b.useEffect(()=>{if(!f)return;function k(J){if(x.current&&!x.current.contains(J.target)){const ue=J.target,C=!!ue&&(ue.tagName==="INPUT"||ue.tagName==="TEXTAREA"||ue.tagName==="SELECT");h(!1),C||P()}}return document.addEventListener("pointerdown",k),()=>{document.removeEventListener("pointerdown",k)}},[f]);const G=(l||"").trim().toLowerCase(),K=b.useMemo(()=>{const k=new Map;return[...u,...c].forEach(J=>{const ue=J.name.trim().toLowerCase();k.has(ue)||k.set(ue,J)}),Array.from(k.values())},[u,c]),j=K,z=k=>{o(k),h(!1),P()},ce=k=>{k.button===0&&(k.preventDefault(),y.current=k.currentTarget,p())},M=k=>{k.button!==0||A||y.current!==k.currentTarget||(p(),h(J=>(J&&P(),!J)))},te=()=>{A||w()||h(k=>!k)};return n.jsxs("div",{className:"relative w-full",ref:x,children:[n.jsxs("button",{type:"button",disabled:A,"aria-haspopup":"listbox","aria-expanded":f,onPointerDown:ce,onPointerUp:M,onClick:te,onKeyDown:k=>{k.key==="Escape"&&f&&(k.stopPropagation(),h(!1),P())},className:`w-full h-[42px] rounded-xl border px-3 py-2 text-left text-sm font-bold shadow-xs transition cursor-pointer flex items-center justify-between ${A?"bg-slate-100":"bg-orange-50"} ${f?"border-blue-600 ring-2 ring-blue-500/20":"border-slate-300 hover:border-orange-300 hover:bg-orange-100/60"} ${A?"opacity-50 cursor-not-allowed":""}`,children:[n.jsx("div",{className:"flex items-center gap-2 truncate",children:l?n.jsx("span",{className:"text-slate-900 font-bold truncate",children:mt(l)}):n.jsx("span",{className:"text-slate-400 font-medium",children:"-- Select Category --"})}),n.jsxs("div",{className:"flex items-center gap-1.5 shrink-0 ml-2",children:[l&&n.jsx("span",{onPointerDown:k=>{k.stopPropagation(),ce(k)},onPointerUp:k=>{k.stopPropagation(),!(k.button!==0||y.current!==k.currentTarget)&&(p(),o(""))},onClick:k=>{k.stopPropagation(),!w()&&o("")},className:"p-1 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-md cursor-pointer text-xs transition",title:"Clear Category",children:"✕"}),n.jsx("span",{className:`text-slate-400 text-xs transition-transform duration-200 ${f?"rotate-180":""}`,children:"▼"})]})]}),f&&n.jsxs("div",{role:"listbox",className:"absolute left-0 right-0 z-50 mt-1.5 rounded-2xl border border-slate-200 bg-white shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150 flex flex-col max-h-80",children:[n.jsxs("div",{className:"p-2.5 border-b border-slate-100 bg-slate-50 flex items-center justify-between gap-2 shrink-0",children:[n.jsx("span",{className:"pl-1 text-xs sm:text-sm font-bold text-slate-500",children:"📋 ক্যাটাগরি সিলেক্ট করুন"}),n.jsx("span",{className:"text-[10px] font-bold text-slate-400 bg-slate-200/70 px-1.5 py-0.5 rounded-md",children:K.length})]}),n.jsx("div",{className:"overflow-y-auto max-h-60 p-1.5 space-y-0.5",children:j.length>0?j.map(k=>{const J=k.name.toLowerCase()===G;return n.jsxs("button",{type:"button",role:"option","aria-selected":J,onPointerDown:ce,onPointerUp:ue=>{ue.button!==0||y.current!==ue.currentTarget||(p(),z(k.name))},onClick:()=>{w()||z(k.name)},className:`w-full text-left px-3 py-2 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer flex items-center justify-between ${J?"bg-blue-50 text-blue-900 border border-blue-200 shadow-2xs font-extrabold":"hover:bg-slate-100 text-slate-700 hover:text-slate-900"}`,children:[n.jsxs("div",{className:"flex items-center gap-2.5 truncate",children:[n.jsx("span",{className:`h-2 w-2 rounded-full shrink-0 ${J?"bg-blue-600 ring-2 ring-blue-300":"bg-slate-300"}`}),n.jsx("span",{className:"truncate",children:mt(k.name)})]}),J&&n.jsx("span",{className:"text-blue-600 font-black text-sm pl-2",children:"✓"})]},k.id||k.name)}):n.jsxs("div",{className:"py-8 text-center text-xs text-slate-400 font-semibold flex flex-col items-center gap-1",children:[n.jsx("span",{children:"🔍"}),n.jsx("span",{children:"No category found"})]})}),n.jsxs("div",{className:"p-2 border-t border-slate-100 bg-slate-50 flex items-center justify-between shrink-0 text-xs",children:[n.jsxs("span",{className:"text-[11px] text-slate-500 font-medium",children:["Total: ",j.length," categories"]}),n.jsxs("button",{type:"button",onPointerDown:ce,onPointerUp:k=>{k.button!==0||y.current!==k.currentTarget||(p(),h(!1),d())},onClick:()=>{w()||(h(!1),d())},className:"text-xs font-black text-blue-600 hover:text-blue-800 hover:underline cursor-pointer flex items-center gap-1",children:[n.jsx("span",{children:"⚙️"}),n.jsx("span",{children:"Manage Categories"})]})]})]})]})}function d5({rates:l,categories:o,onChanged:u,onClose:c}){const[d,A]=b.useState(o[0]??""),[f,h]=b.useState(Nh[0]),[x,L]=b.useState(""),[y,p]=b.useState({}),[w,P]=b.useState(""),G=()=>{if(!d.trim()||!f.trim())return P("Category & sub category required");Gh({category:d.trim().toLowerCase(),subCategory:f.trim().toLowerCase(),ratePer100:String(Number(x)||0)}),P(""),L(""),u()},K=M=>{const te=l.find(k=>k.id===M);if(te){Gh({id:M,category:te.category,subCategory:te.subCategory,ratePer100:String(Number(y[M])||0)});const k={...y};delete k[M],p(k),u()}},j=M=>{confirm("Delete this rate?")&&(qR(M),u())},z=Array.from(new Set([...o,...l.map(M=>M.category)])),ce=Array.from(new Set([...Nh,...l.map(M=>M.subCategory)]));return n.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-3 sm:p-4",children:n.jsxs("div",{className:"flex max-h-[95vh] w-full max-w-2xl flex-col rounded-2xl bg-white shadow-2xl overflow-hidden border border-slate-300",children:[n.jsxs("div",{className:"flex items-center justify-between border-b bg-slate-900 px-5 py-3 text-white",children:[n.jsx("h3",{className:"text-base sm:text-lg font-bold",children:"⚙ Service Charge Settings"}),n.jsx("button",{onClick:c,className:"text-2xl text-slate-300 hover:text-white",children:"×"})]}),n.jsxs("div",{className:"border-b bg-slate-50 px-4 sm:px-5 py-3",children:[n.jsxs("div",{className:"grid grid-cols-2 gap-2 sm:grid-cols-4",children:[n.jsxs("div",{children:[n.jsx("label",{className:"text-xs font-bold text-slate-700",children:"Category"}),n.jsx("input",{list:"sc-cats",value:d,onChange:M=>A(M.target.value),className:"w-full rounded border border-slate-300 px-2 py-1.5 text-xs sm:text-sm capitalize focus:border-blue-500 focus:outline-none bg-white"}),n.jsx("datalist",{id:"sc-cats",children:z.map(M=>n.jsx("option",{value:M},M))})]}),n.jsxs("div",{children:[n.jsx("label",{className:"text-xs font-bold text-slate-700",children:"Sub Category"}),n.jsx("input",{list:"sc-subs",value:f,onChange:M=>h(M.target.value),className:"w-full rounded border border-slate-300 px-2 py-1.5 text-xs sm:text-sm focus:border-blue-500 focus:outline-none bg-white"}),n.jsx("datalist",{id:"sc-subs",children:ce.map(M=>n.jsx("option",{value:M},M))})]}),n.jsxs("div",{children:[n.jsx("label",{className:"text-xs font-bold text-slate-700",children:"SC / 100 Tk"}),n.jsx("input",{type:"number",step:"0.01",min:0,value:x,placeholder:"0.00",onChange:M=>L(M.target.value),onKeyDown:M=>M.key==="Enter"&&G(),className:"w-full rounded border border-slate-300 px-2 py-1.5 text-right font-mono text-xs sm:text-sm focus:border-blue-500 focus:outline-none bg-white font-bold"})]}),n.jsx("div",{className:"flex items-end",children:n.jsx("button",{onClick:G,className:"w-full rounded-lg bg-green-600 px-4 py-1.5 font-bold text-xs sm:text-sm text-white hover:bg-green-700",children:"Add Rate"})})]}),w&&n.jsx("p",{className:"mt-1 text-xs text-rose-600 font-semibold",children:w})]}),n.jsx("div",{className:"flex-1 overflow-auto p-4",children:n.jsxs("table",{className:"w-full text-xs sm:text-sm border-collapse border border-slate-200",children:[n.jsx("thead",{className:"sticky top-0 bg-slate-800 text-white",children:n.jsxs("tr",{children:[n.jsx("th",{className:"px-3 py-2 text-left font-bold",children:"Category"}),n.jsx("th",{className:"px-3 py-2 text-left font-bold",children:"Sub Category"}),n.jsx("th",{className:"px-3 py-2 text-right font-bold",children:"SC / 100 Tk"}),n.jsx("th",{className:"px-3 py-2 text-center font-bold",children:"Action"})]})}),n.jsx("tbody",{children:l.length===0?n.jsx("tr",{children:n.jsx("td",{colSpan:4,className:"px-3 py-6 text-center text-slate-400",children:"No rates yet"})}):l.map(M=>{const te=M.id in y;return n.jsxs("tr",{className:"border-b hover:bg-slate-50",children:[n.jsx("td",{className:"px-3 py-2 font-semibold text-slate-900",children:mt(M.category)}),n.jsx("td",{className:"px-3 py-2 text-slate-600",children:M.subCategory}),n.jsx("td",{className:"px-3 py-2 text-right font-mono font-bold text-indigo-900",children:te?n.jsx("input",{type:"number",step:"0.01",min:0,autoFocus:!0,value:y[M.id],onChange:k=>p({...y,[M.id]:k.target.value}),onKeyDown:k=>k.key==="Enter"&&K(M.id),className:"w-20 rounded border px-1.5 py-0.5 text-right font-bold"}):Number(M.ratePer100).toFixed(2)}),n.jsxs("td",{className:"px-3 py-2 text-center",children:[te?n.jsx("button",{onClick:()=>K(M.id),className:"mr-1 rounded bg-green-600 px-2 py-0.5 text-xs text-white",children:"Save"}):n.jsx("button",{onClick:()=>p({...y,[M.id]:String(Number(M.ratePer100))}),className:"mr-1 rounded bg-blue-600 px-2 py-0.5 text-xs text-white hover:bg-blue-700",children:"Edit"}),n.jsx("button",{onClick:()=>j(M.id),className:"rounded bg-rose-600 px-2 py-0.5 text-xs text-white hover:bg-rose-700",children:"Delete"})]})]},M.id)})})]})})]})})}function cp({rule:l,disburseCategories:o=[],onChanged:u,onClose:c}){const d=["jagoron","agrossor","buniyed","sufolon","mfce"],A=Array.from(new Set([...d,...o.map(C=>C.trim().toLowerCase()),...Object.keys(l.categoryOverrides||{}).map(C=>C.trim().toLowerCase())])).filter(Boolean),[f,h]=b.useState(l.percent??1),[x,L]=b.useState(l.fixed??15),[y,p]=b.useState(()=>{const C={};for(const ne of A)l.categoryOverrides&&l.categoryOverrides[ne]?C[ne]={percent:l.categoryOverrides[ne].percent??f,fixed:l.categoryOverrides[ne].fixed??x}:an.categoryOverrides&&an.categoryOverrides[ne]?C[ne]={...an.categoryOverrides[ne]}:C[ne]={percent:f,fixed:x};return C}),[w,P]=b.useState(5e4),[G,K]=b.useState("products"),[j,z]=b.useState(""),ce=(C,ne,re)=>{p(ae=>({...ae,[C]:{...ae[C],[ne]:re>=0?re:0}}))},M=C=>{const ne={};if(C==="standard"){for(const re of A)re.trim().toLowerCase()==="buniyed"||re.trim().toLowerCase()==="buniyad"?ne[re]={percent:.5,fixed:15}:ne[re]={percent:1,fixed:15};p(ne),h(1),L(15),z("✓ স্ট্যান্ডার্ড নিয়ম প্রয়োগ করা হয়েছে: সাধারণ ১% + ১৫ টাকা, বুনিয়াদ ০.৫% + ১৫ টাকা")}else if(C==="all_1_15"){for(const re of A)ne[re]={percent:1,fixed:15};p(ne),h(1),L(15),z("✓ সকল প্রোডাক্টে ১% + ১৫ টাকা নির্ধারণ করা হয়েছে")}else if(C==="all_05_15"){for(const re of A)ne[re]={percent:.5,fixed:15};p(ne),h(.5),L(15),z("✓ সকল প্রোডাক্টে ০.৫% + ১৫ টাকা নির্ধারণ করা হয়েছে")}else if(C==="all_1_0"){for(const re of A)ne[re]={percent:1,fixed:0};p(ne),h(1),L(0),z("✓ সকল প্রোডাক্টে শুধু ১% (কোনো ফিক্সড ফি নেই) নির্ধারণ করা হয়েছে")}},te=()=>{const C={};for(const re of Object.keys(y)){const ae=y[re];ae&&(C[re.trim().toLowerCase()]={percent:Number(ae.percent)||0,fixed:Number(ae.fixed)||0})}const ne={percent:Number(f)||0,fixed:Number(x)||0,categoryOverrides:C};Ph(ne),z("✓ কল্যাণ তহবিল সেটিংস সফলভাবে সংরক্ষিত হয়েছে!"),u(),setTimeout(()=>{c()},600)},k=()=>{Ph(an),h(an.percent),L(an.fixed),p({...an.categoryOverrides||{}}),z("✓ স্ট্যান্ডার্ড ডিফল্ট অবস্থায় রিসেট করা হয়েছে (১% + ১৫ টাকা, বুনিয়াদ ০.৫% + ১৫ টাকা)"),u()},J=C=>{const ne=C.toLowerCase();return ne.includes("jagoron")?"from-emerald-600 to-teal-700":ne.includes("agrossor")?"from-blue-600 to-indigo-700":ne.includes("buniyed")?"from-amber-600 to-orange-700":ne.includes("sufolon")?"from-teal-600 to-cyan-700":ne.includes("mfce")?"from-purple-600 to-indigo-700":"from-slate-600 to-slate-800"},ue=C=>{const ne=C.toLowerCase();return ne.includes("jagoron")?"জাগরণ":ne.includes("agrossor")?"অগ্রসর":ne.includes("buniyed")?"বুনিয়াদ":ne.includes("sufolon")?"সুফলন":ne.includes("mfce")?"এমএফসিই":mt(C)};return n.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-2 sm:p-4 backdrop-blur-xs animate-in fade-in duration-200",children:n.jsxs("div",{className:"flex h-full sm:h-auto sm:max-h-[94vh] w-full max-w-4xl flex-col rounded-2xl bg-white shadow-2xl overflow-hidden border border-slate-200",children:[n.jsxs("div",{className:"flex items-center justify-between border-b bg-linear-to-r from-teal-800 via-teal-900 to-slate-900 px-4 sm:px-6 py-3.5 text-white shrink-0",children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500/20 text-teal-300 ring-1 ring-teal-400/30 text-lg shadow-inner",children:"🤝"}),n.jsxs("div",{children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("h2",{className:"text-base sm:text-lg font-black tracking-tight text-white",children:"কল্যাণ তহবিল সেটিংস (Kallyan Fund)"}),n.jsx("span",{className:"rounded-md bg-teal-500/20 px-2 py-0.5 text-[10px] font-bold text-teal-200 ring-1 ring-teal-400/30 uppercase",children:"Disburse Settings"})]}),n.jsx("p",{className:"text-xs text-teal-200/80 font-medium",children:"ঋণ বিতরণকালে কল্যাণ ফি ও শতকরা হারের সহজ কনফিগারেশন"})]})]}),n.jsx("button",{onClick:c,className:"rounded-lg p-1.5 text-teal-300 hover:text-white hover:bg-white/10 transition cursor-pointer text-xl leading-none","aria-label":"Close",children:"✕"})]}),j&&n.jsxs("div",{className:"bg-emerald-50 border-b border-emerald-200 px-4 py-2 flex items-center justify-between text-xs font-bold text-emerald-900 shrink-0",children:[n.jsx("span",{children:j}),n.jsx("button",{onClick:()=>z(""),className:"text-emerald-700 hover:text-emerald-950 text-sm px-1 font-bold cursor-pointer",children:"✕"})]}),n.jsxs("div",{className:"border-b bg-linear-to-b from-teal-50/90 to-slate-50/70 p-3 sm:p-4 shrink-0 space-y-3",children:[n.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-center justify-between gap-3",children:[n.jsxs("div",{className:"space-y-1.5 flex-1",children:[n.jsx("span",{className:"text-[11px] font-black uppercase tracking-wider text-teal-900 block",children:"⚡ ১-ক্লিক রেডি প্রিসেট (Quick Presets):"}),n.jsxs("div",{className:"flex flex-wrap gap-1.5",children:[n.jsxs("button",{type:"button",onClick:()=>M("standard"),className:"rounded-xl bg-teal-700 hover:bg-teal-800 text-white px-3 py-1.5 text-xs font-bold shadow-xs transition cursor-pointer flex items-center gap-1.5",children:[n.jsx("span",{children:"🌟"}),n.jsx("span",{children:"স্ট্যান্ডার্ড (১% + ১৫ ৳, বুনিয়াদ ০.৫% + ১৫ ৳)"})]}),n.jsx("button",{type:"button",onClick:()=>M("all_1_15"),className:"rounded-xl bg-white hover:bg-teal-50 border border-teal-300 text-teal-900 px-2.5 py-1.5 text-xs font-bold shadow-2xs transition cursor-pointer",children:"সব ১% + ১৫ ৳"}),n.jsx("button",{type:"button",onClick:()=>M("all_05_15"),className:"rounded-xl bg-white hover:bg-teal-50 border border-teal-300 text-teal-900 px-2.5 py-1.5 text-xs font-bold shadow-2xs transition cursor-pointer",children:"সব ০.৫% + ১৫ ৳"}),n.jsx("button",{type:"button",onClick:()=>M("all_1_0"),className:"rounded-xl bg-white hover:bg-slate-100 border border-slate-300 text-slate-700 px-2.5 py-1.5 text-xs font-bold shadow-2xs transition cursor-pointer",children:"শুধু ১% (০ ৳ ফিক্সড)"})]})]}),n.jsxs("div",{className:"rounded-xl border border-teal-200 bg-white p-2.5 shadow-2xs flex items-center gap-2.5 shrink-0",children:[n.jsxs("div",{children:[n.jsx("span",{className:"text-[10px] font-bold text-slate-500 uppercase block",children:"টেস্ট লোন পরিমাণ (Sample):"}),n.jsxs("div",{className:"flex items-center gap-1 mt-0.5",children:[n.jsx("input",{type:"number",min:1e3,step:5e3,value:w,onChange:C=>P(Number(C.target.value)||0),className:"w-24 rounded-lg border border-slate-300 px-2 py-1 text-right font-mono text-sm font-black text-teal-950 focus:border-teal-600 focus:outline-none"}),n.jsx("span",{className:"text-xs font-bold text-slate-600",children:"৳"})]})]}),n.jsx("div",{className:"flex flex-col gap-1",children:[3e4,5e4,1e5].map(C=>n.jsx("button",{type:"button",onClick:()=>P(C),className:`rounded px-1.5 py-0.5 text-[10px] font-bold font-mono transition cursor-pointer ${w===C?"bg-teal-700 text-white":"bg-slate-100 text-slate-600 hover:bg-slate-200"}`,children:de(C)},C))})]})]}),n.jsxs("div",{className:"flex items-center justify-between text-[11px] bg-teal-100/60 rounded-lg px-3 py-1.5 text-teal-950 border border-teal-200/80",children:[n.jsxs("span",{className:"font-semibold",children:["💡 হিসাবের নিয়ম: ",n.jsx("span",{className:"font-mono font-bold",children:"(লোন × পার্সেন্টেজ ÷ ১০০) + ফিক্সড ফি = মোট কল্যাণ ফি"})]}),n.jsxs("span",{className:"hidden sm:inline text-teal-800 font-medium",children:["উদাহরণ: ",de(w)," × ১% + ১৫ = ",n.jsxs("b",{className:"font-mono",children:[de(Math.round(w*1/100)+15)," ৳"]})]})]})]}),n.jsxs("div",{className:"flex-1 overflow-y-auto p-3 sm:p-5 space-y-4",children:[n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("span",{className:"text-xs font-black uppercase tracking-wider text-slate-800 flex items-center gap-1.5",children:[n.jsx("span",{children:"📋"})," প্রোডাক্টভিত্তিক কল্যাণ ফি নির্ধারণ:"]}),n.jsxs("span",{className:"text-xs text-slate-500 font-medium",children:["মোট ",n.jsx("b",{className:"text-teal-700",children:A.length})," টি প্রোডাক্ট"]})]}),n.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3.5",children:A.map(C=>{const ne=y[C]||{percent:f,fixed:x},re=ur(w,C,{percent:f,fixed:x,categoryOverrides:y}),ae=C.toLowerCase().includes("buniyed");return n.jsxs("div",{className:"rounded-2xl border border-slate-200 bg-white p-4 shadow-xs hover:border-teal-500 hover:shadow-md transition group",children:[n.jsxs("div",{className:"flex items-center justify-between border-b border-slate-100 pb-2.5 mb-3",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("div",{className:`h-8 w-8 rounded-xl bg-linear-to-tr ${J(C)} flex items-center justify-center text-white text-xs font-bold shadow-xs`,children:C.charAt(0).toUpperCase()}),n.jsxs("div",{children:[n.jsxs("div",{className:"flex items-center gap-1.5",children:[n.jsx("span",{className:"font-black text-sm text-slate-900",children:mt(C)}),n.jsxs("span",{className:"text-xs text-slate-400 font-semibold",children:["(",ue(C),")"]})]}),ae&&n.jsx("span",{className:"text-[10px] text-amber-700 font-bold block",children:"★ বুনিয়াদে সাধারণত ০.৫% + ১৫ প্রযোজ্য হয়"})]})]}),n.jsx("div",{className:"text-right",children:n.jsxs("span",{className:"rounded-full bg-teal-50 text-teal-800 border border-teal-200 px-2 py-0.5 text-[10px] font-black",children:[ne.percent,"% + ",ne.fixed," ৳"]})})]}),n.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[n.jsxs("div",{className:"space-y-1.5",children:[n.jsx("label",{className:"block text-[11px] font-bold text-slate-700",children:"পার্সেন্টেজ (%)"}),n.jsxs("div",{className:"relative",children:[n.jsx("input",{type:"number",step:"0.1",min:"0",value:ne.percent,onChange:fe=>ce(C,"percent",parseFloat(fe.target.value)||0),className:"w-full rounded-xl border border-slate-300 bg-slate-50/50 px-3 py-2 text-right font-mono text-sm font-bold text-slate-900 focus:bg-white focus:border-teal-600 focus:ring-1 focus:ring-teal-600 focus:outline-none"}),n.jsx("span",{className:"absolute left-3 top-2 text-xs font-bold text-slate-400",children:"%"})]}),n.jsx("div",{className:"flex gap-1",children:[.5,1,1.5].map(fe=>n.jsxs("button",{type:"button",onClick:()=>ce(C,"percent",fe),className:`flex-1 rounded-md py-0.5 text-[10px] font-bold transition cursor-pointer ${ne.percent===fe?"bg-teal-700 text-white":"bg-slate-100 text-slate-600 hover:bg-slate-200"}`,children:[fe,"%"]},fe))})]}),n.jsxs("div",{className:"space-y-1.5",children:[n.jsx("label",{className:"block text-[11px] font-bold text-slate-700",children:"ফিক্সড ফি (Tk)"}),n.jsxs("div",{className:"relative",children:[n.jsx("input",{type:"number",step:"1",min:"0",value:ne.fixed,onChange:fe=>ce(C,"fixed",parseFloat(fe.target.value)||0),className:"w-full rounded-xl border border-slate-300 bg-slate-50/50 px-3 py-2 text-right font-mono text-sm font-bold text-slate-900 focus:bg-white focus:border-teal-600 focus:ring-1 focus:ring-teal-600 focus:outline-none"}),n.jsx("span",{className:"absolute left-3 top-2 text-xs font-bold text-slate-400",children:"৳"})]}),n.jsx("div",{className:"flex gap-1",children:[0,10,15,20].map(fe=>n.jsx("button",{type:"button",onClick:()=>ce(C,"fixed",fe),className:`flex-1 rounded-md py-0.5 text-[10px] font-bold transition cursor-pointer ${ne.fixed===fe?"bg-teal-700 text-white":"bg-slate-100 text-slate-600 hover:bg-slate-200"}`,children:fe},fe))})]})]}),n.jsxs("div",{className:"mt-3 flex items-center justify-between rounded-xl bg-slate-50 border border-slate-200/90 px-3 py-2",children:[n.jsxs("span",{className:"text-[11px] text-slate-600 font-medium",children:[de(w)," ৳ লোনে কল্যাণ ফি:"]}),n.jsxs("span",{className:"font-mono text-sm font-black text-teal-800",children:[de(re)," ৳"]})]})]},C)})}),n.jsx("div",{className:"rounded-2xl border border-slate-300 bg-slate-50 p-4",children:n.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-3",children:[n.jsxs("div",{children:[n.jsx("span",{className:"font-black text-xs text-slate-900 block",children:"⚙️ অন্যান্য / নতুন প্রোডাক্টের জন্য ডিফল্ট নিয়ম (Default Rule):"}),n.jsx("p",{className:"text-[11px] text-slate-500 mt-0.5",children:"ভবিষ্যতে তালিকায় না থাকা কোনো নতুন ঋণ প্রোডাক্ট যুক্ত হলে স্বয়ংক্রিয়ভাবে এই নিয়ম প্রযোজ্য হবে।"})]}),n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsxs("div",{className:"flex items-center gap-1.5",children:[n.jsx("span",{className:"text-xs font-bold text-slate-600",children:"পার্সেন্টেজ:"}),n.jsx("input",{type:"number",step:"0.1",min:"0",value:f,onChange:C=>h(parseFloat(C.target.value)||0),className:"w-16 rounded-lg border border-slate-300 bg-white px-2 py-1 text-right font-mono text-xs font-bold text-slate-900"}),n.jsx("span",{className:"text-xs font-bold text-slate-500",children:"%"})]}),n.jsxs("div",{className:"flex items-center gap-1.5",children:[n.jsx("span",{className:"text-xs font-bold text-slate-600",children:"ফিক্সড:"}),n.jsx("input",{type:"number",step:"1",min:"0",value:x,onChange:C=>L(parseFloat(C.target.value)||0),className:"w-16 rounded-lg border border-slate-300 bg-white px-2 py-1 text-right font-mono text-xs font-bold text-slate-900"}),n.jsx("span",{className:"text-xs font-bold text-slate-500",children:"৳"})]})]})]})})]}),n.jsxs("div",{className:"flex items-center justify-between border-t bg-slate-50 px-4 sm:px-6 py-3.5 shrink-0",children:[n.jsxs("button",{type:"button",onClick:k,className:"rounded-xl border border-slate-300 bg-white px-3.5 py-2 text-xs font-bold text-slate-700 hover:bg-slate-100 transition cursor-pointer flex items-center gap-1.5",title:"Reset to default settings",children:[n.jsx("span",{children:"🔄"}),n.jsx("span",{children:"ডিফল্ট রিসেট"})]}),n.jsxs("div",{className:"flex items-center gap-2.5",children:[n.jsx("button",{type:"button",onClick:c,className:"rounded-xl border border-slate-300 bg-white px-4 py-2 text-xs sm:text-sm font-bold text-slate-700 hover:bg-slate-100 transition cursor-pointer",children:"বাতিল"}),n.jsxs("button",{type:"button",onClick:te,className:"rounded-xl bg-teal-700 hover:bg-teal-800 active:bg-teal-900 px-6 py-2 text-xs sm:text-sm font-black text-white shadow-md shadow-teal-700/20 transition cursor-pointer flex items-center gap-1.5",children:[n.jsx("span",{children:"✓"}),n.jsx("span",{children:"সেটিংস সংরক্ষণ করুন"})]})]})]})]})})}function m5({open:l,onClose:o,rules:u,disburseCategories:c,onRulesChanged:d,currentLoanAmount:A=5e4}){const[f,h]=b.useState(""),[x,L]=b.useState(12),[y,p]=b.useState("all"),[w,P]=b.useState([]),[G,K]=b.useState(!1),[j,z]=b.useState(null),[ce,M]=b.useState(""),[te,k]=b.useState(12),[J,ue]=b.useState("all"),[C,ne]=b.useState([]),[re,ae]=b.useState(A>0?A:5e4),[fe,pe]=b.useState("");if(!l)return null;const B=["jagoron","agrossor","buniyed","sufolon","mfce"],O=Array.from(new Set([...B,...c.map(R=>R.trim().toLowerCase())])).filter(Boolean),S=R=>{const $=R.toLowerCase().trim();w.includes($)?P(w.filter(ge=>ge!==$)):P([...w,$])},I=R=>{const $=R.toLowerCase().trim();C.includes($)?ne(C.filter(ge=>ge!==$)):ne([...C,$])},q=()=>{if(!f.trim()){pe("মেয়াদ / সাব-ক্যাটাগরির নাম দিন (যেমন: 1 year / 2 year)");return}const R=Number(x);if(!R||R<=0){pe("সঠিক কিস্তি সংখ্যা দিন (যেমন: 12, 18, 24, 46)");return}ml({subCategory:f.trim(),installments:R,mode:y,categories:y==="all"?[]:w}),h(""),L(12),p("all"),P([]),K(!1),pe("✓ নতুন কিস্তি রুল সফলভাবে যুক্ত করা হয়েছে!"),d()},ee=R=>{z(R.id||0),M(R.subCategory),k(R.installments||12),ue(R.mode||"all"),ne((R.categories||[]).map($=>$.toLowerCase().trim())),pe("")},U=()=>{if(!j||!ce.trim()){pe("মেয়াদ / সাব-ক্যাটাগরির নাম দিন");return}const R=Number(te);if(!R||R<=0){pe("সঠিক কিস্তি সংখ্যা দিন");return}ml({id:j,subCategory:ce.trim(),installments:R,mode:J,categories:J==="all"?[]:C}),z(null),pe("✓ কিস্তি রুল সফলভাবে আপডেট করা হয়েছে!"),d()},H=(R,$)=>{confirm(`আপনি কি নিশ্চিত যে "${$}" এর কিস্তি রুলটি মুছে ফেলতে চান?`)&&(QR(R),pe(`✓ "${$}" রুলটি মুছে ফেলা হয়েছে!`),d())},N=()=>{confirm("আপনি কি সকল কিস্তি রুল রিসেট করে স্ট্যান্ডার্ড ডিফল্ট অবস্থায় ফিরিয়ে নিতে চান?")&&($R(),z(null),K(!1),pe("✓ সকল কিস্তি রুল স্ট্যান্ডার্ড ডিফল্ট অবস্থায় রিসেট করা হয়েছে!"),d())},oe=R=>{R==="standard_monthly"?(ml({id:1,subCategory:"1 year",installments:12,mode:"all",categories:[]}),ml({id:2,subCategory:"1.5 year",installments:18,mode:"all_except",categories:["buniyed","sufolon"]}),ml({id:3,subCategory:"2 year",installments:24,mode:"only",categories:["agrossor"]}),pe("✓ স্ট্যান্ডার্ড মাসিক কিস্তি প্রিসেট প্রয়োগ করা হয়েছে (১ বছর=১২, ১.৫ বছর=১৮, ২ বছর=২৪)")):R==="weekly_50"?(ml({id:Date.now(),subCategory:"1 year (50 kisti)",installments:50,mode:"all",categories:[]}),pe("✓ ৫০ কিস্তি সাপ্তাহিক রুল যুক্ত করা হয়েছে (১ বছর = ৫০ কিস্তি)")):R==="weekly_46"&&(ml({id:Date.now(),subCategory:"1 year (46 kisti)",installments:46,mode:"all",categories:[]}),pe("✓ ৪৬ কিস্তি সাপ্তাহিক রুল যুক্ত করা হয়েছে (১ বছর = ৪৬ কিস্তি)")),d()};return n.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-2 sm:p-4 backdrop-blur-xs animate-in fade-in duration-200",children:n.jsxs("div",{className:"flex h-full sm:h-auto sm:max-h-[94vh] w-full max-w-3xl flex-col rounded-2xl bg-white shadow-2xl overflow-hidden border border-slate-200",children:[n.jsxs("div",{className:"flex items-center justify-between border-b bg-gradient-to-r from-violet-800 via-purple-900 to-slate-900 px-4 sm:px-6 py-3.5 text-white shrink-0",children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/20 text-violet-300 ring-1 ring-violet-400/30 text-lg shadow-inner",children:"🔢"}),n.jsxs("div",{children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("h2",{className:"text-base sm:text-lg font-black tracking-tight text-white",children:"কিস্তি কার্ড রুল সেটিংস (Kisti Rules)"}),n.jsx("span",{className:"rounded-md bg-violet-500/20 px-2 py-0.5 text-[10px] font-bold text-violet-200 ring-1 ring-violet-400/30 uppercase",children:"Installment Settings"})]}),n.jsx("p",{className:"text-xs text-violet-200/80 font-medium",children:"ঋণ মেয়াদের কিস্তি সংখ্যা ও প্রোডাক্ট রুল পরিচালনা করুন (Add / Edit / Delete)"})]})]}),n.jsx("button",{onClick:o,className:"rounded-lg p-1.5 text-violet-300 hover:text-white hover:bg-white/10 transition cursor-pointer text-xl leading-none","aria-label":"Close",children:"✕"})]}),fe&&n.jsxs("div",{className:"bg-emerald-50 border-b border-emerald-200 px-4 py-2 flex items-center justify-between text-xs font-bold text-emerald-900 shrink-0",children:[n.jsx("span",{children:fe}),n.jsx("button",{onClick:()=>pe(""),className:"text-emerald-700 hover:text-emerald-950 text-sm px-1 font-bold cursor-pointer",children:"✕"})]}),n.jsxs("div",{className:"border-b bg-gradient-to-b from-violet-50/70 to-slate-50/70 p-3 sm:p-4 shrink-0 space-y-3",children:[n.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-3",children:[n.jsxs("div",{className:"space-y-1.5 flex-1",children:[n.jsx("span",{className:"text-[11px] font-black uppercase tracking-wider text-violet-950 block",children:"⚡ দ্রুত প্রিসেট (Quick Presets):"}),n.jsxs("div",{className:"flex flex-wrap gap-1.5",children:[n.jsxs("button",{type:"button",onClick:()=>oe("standard_monthly"),className:"rounded-xl bg-violet-700 hover:bg-violet-800 text-white px-3 py-1.5 text-xs font-bold shadow-xs transition cursor-pointer flex items-center gap-1.5",children:[n.jsx("span",{children:"🌟"}),n.jsx("span",{children:"স্ট্যান্ডার্ড (১২, ১৮, ২৪ কিস্তি)"})]}),n.jsx("button",{type:"button",onClick:()=>oe("weekly_50"),className:"rounded-xl bg-white hover:bg-violet-50 border border-violet-300 text-violet-900 px-2.5 py-1.5 text-xs font-bold shadow-2xs transition cursor-pointer",children:"+ ৫০ কিস্তি (১ বছর)"}),n.jsx("button",{type:"button",onClick:()=>oe("weekly_46"),className:"rounded-xl bg-white hover:bg-violet-50 border border-violet-300 text-violet-900 px-2.5 py-1.5 text-xs font-bold shadow-2xs transition cursor-pointer",children:"+ ৪৬ কিস্তি (১ বছর)"})]})]}),n.jsxs("div",{className:"rounded-xl border border-violet-200 bg-white p-2.5 shadow-2xs flex items-center gap-2.5 shrink-0",children:[n.jsxs("div",{children:[n.jsx("span",{className:"text-[10px] font-bold text-slate-500 uppercase block",children:"টেস্ট লোন পরিমাণ:"}),n.jsxs("div",{className:"flex items-center gap-1 mt-0.5",children:[n.jsx("input",{type:"number",min:1e3,step:5e3,value:re,onChange:R=>ae(Number(R.target.value)||0),className:"w-24 rounded-lg border border-slate-300 px-2 py-1 text-right font-mono text-sm font-black text-violet-950 focus:border-violet-600 focus:outline-none"}),n.jsx("span",{className:"text-xs font-bold text-slate-600",children:"৳"})]})]}),n.jsx("div",{className:"flex flex-col gap-1",children:[3e4,5e4,1e5].map(R=>n.jsx("button",{type:"button",onClick:()=>ae(R),className:`rounded px-1.5 py-0.5 text-[10px] font-bold font-mono transition cursor-pointer ${re===R?"bg-violet-700 text-white":"bg-slate-100 text-slate-600 hover:bg-slate-200"}`,children:de(R)},R))})]})]}),n.jsxs("div",{className:"flex items-center justify-between text-[11px] bg-violet-100/60 rounded-lg px-3 py-1.5 text-violet-950 border border-violet-200/80",children:[n.jsxs("span",{className:"font-semibold",children:["💡 কিস্তি হিসাবের নিয়ম: ",n.jsx("span",{className:"font-mono font-bold",children:"(মোট ঋণ + SC) ÷ কিস্তি সংখ্যা = প্রতি কিস্তির পরিমাণ"})]}),n.jsxs("span",{className:"hidden sm:inline text-violet-800 font-medium",children:["উদাহরণ: ",de(re)," ৳ ঋণ ÷ ১২ কিস্তি = ",n.jsxs("b",{className:"font-mono",children:[de(Math.round(re/12))," ৳ / কিস্তি"]})]})]})]}),n.jsxs("div",{className:"flex-1 overflow-y-auto p-3 sm:p-5 space-y-4",children:[n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsxs("span",{className:"text-xs font-black uppercase tracking-wider text-slate-800 flex items-center gap-1.5",children:[n.jsx("span",{children:"📋"})," সক্রিয় কিস্তি রুলসমূহ:"]}),n.jsxs("span",{className:"rounded-full bg-violet-100 text-violet-800 font-bold px-2 py-0.5 text-xs",children:[u.length," টি"]})]}),!G&&n.jsxs("button",{type:"button",onClick:()=>K(!0),className:"rounded-xl bg-violet-700 hover:bg-violet-800 active:scale-95 text-white px-3.5 py-1.5 text-xs font-bold transition shadow-xs flex items-center gap-1.5 cursor-pointer",children:[n.jsx("span",{children:"+"}),n.jsx("span",{children:"নতুন কিস্তি রুল যোগ করুন"})]})]}),G&&n.jsxs("div",{className:"rounded-2xl border-2 border-violet-400 bg-violet-50/50 p-4 shadow-sm space-y-3.5 animate-in fade-in duration-150",children:[n.jsxs("div",{className:"flex items-center justify-between border-b border-violet-200 pb-2.5",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-base",children:"✨"}),n.jsx("span",{className:"font-black text-sm text-violet-950",children:"নতুন কিস্তি রুল যুক্ত করুন (Add New Kisti Rule)"})]}),n.jsx("button",{type:"button",onClick:()=>K(!1),className:"rounded-lg p-1 text-slate-400 hover:text-slate-700 hover:bg-white/60 text-lg cursor-pointer leading-none",children:"✕"})]}),n.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:[n.jsxs("div",{className:"space-y-1",children:[n.jsx("label",{className:"block text-xs font-bold text-slate-800",children:"মেয়াদ / সাব-ক্যাটাগরির নাম (Sub Category):"}),n.jsx("input",{type:"text",list:"subcat-options",value:f,onChange:R=>h(R.target.value),placeholder:"যেমন: 1 year, 1.5 year, 2 year, 6 month",className:"w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm font-bold text-slate-900 focus:border-violet-600 focus:outline-none"}),n.jsxs("datalist",{id:"subcat-options",children:[n.jsx("option",{value:"1 year"}),n.jsx("option",{value:"1.5 year"}),n.jsx("option",{value:"2 year"}),n.jsx("option",{value:"6 month"}),n.jsx("option",{value:"3 year"}),n.jsx("option",{value:"50 week"}),n.jsx("option",{value:"46 week"})]}),n.jsx("div",{className:"flex flex-wrap gap-1 pt-1",children:["1 year","1.5 year","2 year","6 month"].map(R=>n.jsx("button",{type:"button",onClick:()=>h(R),className:"rounded bg-white hover:bg-violet-100 border border-slate-200 px-2 py-0.5 text-[10px] font-bold text-slate-700 cursor-pointer",children:R},R))})]}),n.jsxs("div",{className:"space-y-1",children:[n.jsx("label",{className:"block text-xs font-bold text-slate-800",children:"কিস্তি সংখ্যা (Installments):"}),n.jsx("input",{type:"number",min:"1",value:x,onChange:R=>L(R.target.value===""?"":Number(R.target.value)),placeholder:"যেমন: 12",className:"w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm font-mono font-bold text-violet-950 focus:border-violet-600 focus:outline-none"}),n.jsx("div",{className:"flex flex-wrap gap-1 pt-1",children:[12,18,24,46,50].map(R=>n.jsxs("button",{type:"button",onClick:()=>L(R),className:"rounded bg-white hover:bg-violet-100 border border-slate-200 px-2 py-0.5 text-[10px] font-bold font-mono text-slate-700 cursor-pointer",children:[R," কিস্তি"]},R))})]})]}),n.jsxs("div",{className:"space-y-1.5",children:[n.jsx("label",{className:"block text-xs font-bold text-slate-800",children:"প্রোডাক্ট প্রযোজ্যতা (Rule Mode):"}),n.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-2",children:[n.jsxs("label",{className:`flex items-center gap-2 rounded-xl border p-2.5 text-xs font-bold cursor-pointer transition ${y==="all"?"bg-violet-600 text-white border-violet-600 shadow-2xs":"bg-white text-slate-700 border-slate-300 hover:bg-slate-50"}`,children:[n.jsx("input",{type:"radio",name:"newRuleMode",value:"all",checked:y==="all",onChange:()=>p("all"),className:"sr-only"}),n.jsx("span",{children:"🌐 সকল প্রোডাক্টে প্রযোজ্য"})]}),n.jsxs("label",{className:`flex items-center gap-2 rounded-xl border p-2.5 text-xs font-bold cursor-pointer transition ${y==="only"?"bg-violet-600 text-white border-violet-600 shadow-2xs":"bg-white text-slate-700 border-slate-300 hover:bg-slate-50"}`,children:[n.jsx("input",{type:"radio",name:"newRuleMode",value:"only",checked:y==="only",onChange:()=>p("only"),className:"sr-only"}),n.jsx("span",{children:"🎯 নির্দিষ্ট প্রোডাক্টে প্রযোজ্য"})]}),n.jsxs("label",{className:`flex items-center gap-2 rounded-xl border p-2.5 text-xs font-bold cursor-pointer transition ${y==="all_except"?"bg-violet-600 text-white border-violet-600 shadow-2xs":"bg-white text-slate-700 border-slate-300 hover:bg-slate-50"}`,children:[n.jsx("input",{type:"radio",name:"newRuleMode",value:"all_except",checked:y==="all_except",onChange:()=>p("all_except"),className:"sr-only"}),n.jsx("span",{children:"🚫 নির্দিষ্ট প্রোডাক্ট ব্যতীত"})]})]})]}),y!=="all"&&n.jsxs("div",{className:"rounded-xl bg-white border border-violet-200 p-3 space-y-2",children:[n.jsx("span",{className:"block text-[11px] font-black uppercase tracking-wider text-slate-700",children:y==="only"?"প্রযোজ্য প্রোডাক্ট নির্বাচন করুন (Select Products):":"বাদ দেওয়ার জন্য প্রোডাক্ট নির্বাচন করুন (Exclude Products):"}),n.jsx("div",{className:"flex flex-wrap gap-1.5",children:O.map(R=>{const $=w.includes(R.toLowerCase().trim());return n.jsxs("button",{type:"button",onClick:()=>S(R),className:`rounded-lg px-2.5 py-1 text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${$?"bg-violet-700 text-white shadow-2xs ring-1 ring-violet-500":"bg-slate-100 text-slate-700 hover:bg-slate-200"}`,children:[n.jsx("span",{children:$?"✓":"+"}),n.jsx("span",{children:mt(R)})]},R)})})]}),n.jsxs("div",{className:"flex items-center justify-end gap-2 pt-2 border-t border-violet-200",children:[n.jsx("button",{type:"button",onClick:()=>K(!1),className:"rounded-xl border border-slate-300 bg-white px-3.5 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-100 transition cursor-pointer",children:"বাতিল"}),n.jsxs("button",{type:"button",onClick:q,className:"rounded-xl bg-violet-700 hover:bg-violet-800 text-white px-5 py-1.5 text-xs font-black shadow-sm transition cursor-pointer flex items-center gap-1.5",children:[n.jsx("span",{children:"✓"}),n.jsx("span",{children:"রুল সংরক্ষণ করুন (Add Rule)"})]})]})]}),n.jsx("div",{className:"space-y-2.5",children:u.length===0?n.jsxs("div",{className:"rounded-2xl border border-dashed border-slate-300 p-8 text-center bg-slate-50",children:[n.jsx("p",{className:"text-sm font-bold text-slate-500",children:"কোনো কিস্তি রুল পাওয়া যায়নি!"}),n.jsx("button",{type:"button",onClick:N,className:"mt-2 text-xs font-bold text-violet-700 hover:underline cursor-pointer",children:"স্ট্যান্ডার্ড ডিফল্ট রুল ফিরিয়ে আনুন"})]}):u.map(R=>{const $=j===R.id,ge=R.installments>0?Math.round(re/R.installments):0;return n.jsx("div",{className:"rounded-2xl border border-slate-200 bg-white p-3.5 shadow-xs hover:border-violet-300 transition",children:$?n.jsxs("div",{className:"space-y-3 bg-violet-50/70 p-3.5 rounded-xl border border-violet-300",children:[n.jsxs("div",{className:"flex items-center justify-between border-b border-violet-200 pb-2",children:[n.jsxs("span",{className:"text-xs font-black text-violet-950 uppercase tracking-wider flex items-center gap-1.5",children:[n.jsx("span",{children:"✏️"})," কিস্তি রুল সম্পাদনা (Edit Rule)"]}),n.jsxs("span",{className:"text-[10px] font-mono text-slate-500",children:["ID: ",R.id]})]}),n.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2.5",children:[n.jsxs("div",{children:[n.jsx("label",{className:"block text-[11px] font-bold text-slate-800 mb-1",children:"মেয়াদ / সাব-ক্যাটাগরির নাম:"}),n.jsx("input",{type:"text",value:ce,onChange:be=>M(be.target.value),className:"w-full rounded-lg border border-slate-300 bg-white px-2.5 py-1.5 text-xs font-bold font-mono text-slate-900 focus:border-violet-600 focus:outline-none"})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-[11px] font-bold text-slate-800 mb-1",children:"কিস্তি সংখ্যা (Installments):"}),n.jsx("input",{type:"number",min:"1",value:te,onChange:be=>k(be.target.value===""?"":Number(be.target.value)),className:"w-full rounded-lg border border-slate-300 bg-white px-2.5 py-1.5 text-xs font-bold font-mono text-violet-950 focus:border-violet-600 focus:outline-none"})]})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-[11px] font-bold text-slate-800 mb-1",children:"প্রোডাক্ট প্রযোজ্যতা (Rule Mode):"}),n.jsxs("select",{value:J,onChange:be=>ue(be.target.value),className:"w-full rounded-lg border border-slate-300 bg-white px-2.5 py-1.5 text-xs font-bold text-slate-800 focus:border-violet-600 focus:outline-none",children:[n.jsx("option",{value:"all",children:"🌐 সকল প্রোডাক্টে প্রযোজ্য (All Categories)"}),n.jsx("option",{value:"only",children:"🎯 শুধুমাত্র নির্দিষ্ট প্রোডাক্টে (Only in...)"}),n.jsx("option",{value:"all_except",children:"🚫 নির্দিষ্ট প্রোডাক্ট ব্যতীত (All Except...)"})]})]}),J!=="all"&&n.jsxs("div",{className:"rounded-lg bg-white border border-violet-200 p-2.5 space-y-1.5",children:[n.jsx("span",{className:"block text-[10px] font-bold text-slate-600 uppercase",children:J==="only"?"প্রযোজ্য প্রোডাক্ট নির্বাচন করুন:":"বাদ দেওয়া প্রোডাক্ট নির্বাচন করুন:"}),n.jsx("div",{className:"flex flex-wrap gap-1",children:O.map(be=>{const ye=C.includes(be.toLowerCase().trim());return n.jsxs("button",{type:"button",onClick:()=>I(be),className:`rounded px-2 py-0.5 text-[11px] font-bold transition cursor-pointer flex items-center gap-1 ${ye?"bg-violet-700 text-white":"bg-slate-100 text-slate-600 hover:bg-slate-200"}`,children:[n.jsx("span",{children:ye?"✓":"+"}),n.jsx("span",{children:mt(be)})]},be)})})]}),n.jsxs("div",{className:"flex items-center justify-end gap-2 pt-2 border-t border-violet-200",children:[n.jsx("button",{type:"button",onClick:()=>z(null),className:"rounded-lg border border-slate-300 bg-white px-3 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition cursor-pointer",children:"বাতিল"}),n.jsx("button",{type:"button",onClick:U,className:"rounded-lg bg-violet-700 hover:bg-violet-800 text-white px-4 py-1 text-xs font-bold shadow-xs transition cursor-pointer",children:"✓ সংরক্ষণ করুন (Save)"})]})]}):n.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-3",children:[n.jsxs("div",{className:"space-y-1",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"font-black text-sm text-slate-900 font-mono",children:R.subCategory}),n.jsxs("span",{className:"rounded-full bg-violet-100 text-violet-900 border border-violet-200 px-2.5 py-0.5 text-xs font-black",children:[R.installments," কিস্তি (Installments)"]})]}),n.jsxs("div",{className:"flex items-center gap-2 text-xs",children:[R.mode==="all"&&n.jsx("span",{className:"rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200 px-2 py-0.5 font-bold",children:"✓ সকল প্রোডাক্টে অনুমোদিত"}),R.mode==="only"&&n.jsxs("span",{className:"rounded-md bg-blue-50 text-blue-800 border border-blue-200 px-2 py-0.5 font-bold",children:["🎯 শুধুমাত্র:"," ",R.categories&&R.categories.length>0?R.categories.map(be=>mt(be)).join(", "):"কোনোটি নির্বাচিত নেই"]}),R.mode==="all_except"&&n.jsxs("span",{className:"rounded-md bg-amber-50 text-amber-800 border border-amber-200 px-2 py-0.5 font-bold",children:["🚫 ব্যতীত:"," ",R.categories&&R.categories.length>0?R.categories.map(be=>mt(be)).join(", "):"কোনোটি নয়"]})]})]}),n.jsxs("div",{className:"flex items-center justify-between sm:justify-end gap-3 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100",children:[n.jsxs("div",{className:"text-right",children:[n.jsxs("span",{className:"text-[10px] text-slate-400 font-bold block",children:[de(re)," ৳ লোনে কিস্তি:"]}),n.jsxs("span",{className:"font-mono text-sm font-black text-violet-950",children:[de(ge)," ৳"]})]}),n.jsxs("div",{className:"flex items-center gap-1.5 shrink-0",children:[n.jsx("button",{type:"button",onClick:()=>ee(R),className:"rounded-lg bg-blue-50 hover:bg-blue-600 text-blue-700 hover:text-white border border-blue-200 px-2.5 py-1 text-xs font-bold transition shadow-2xs cursor-pointer",title:"Edit this rule",children:"Edit"}),n.jsx("button",{type:"button",onClick:()=>H(R.id,R.subCategory),className:"rounded-lg bg-rose-50 hover:bg-rose-600 text-rose-700 hover:text-white border border-rose-200 px-2 py-1 text-xs font-bold transition shadow-2xs cursor-pointer",title:"Delete this rule",children:"Delete"})]})]})]})},R.id||R.subCategory)})})]}),n.jsxs("div",{className:"flex items-center justify-between border-t bg-slate-50 px-4 sm:px-6 py-3.5 shrink-0",children:[n.jsxs("button",{type:"button",onClick:N,className:"rounded-xl border border-slate-300 bg-white px-3.5 py-2 text-xs font-bold text-slate-700 hover:bg-slate-100 transition cursor-pointer flex items-center gap-1.5",title:"Reset to default rules",children:[n.jsx("span",{children:"🔄"}),n.jsx("span",{children:"ডিফল্ট রিসেট"})]}),n.jsx("button",{type:"button",onClick:o,className:"rounded-xl bg-slate-800 hover:bg-slate-900 active:bg-black px-6 py-2 text-xs sm:text-sm font-bold text-white transition cursor-pointer",children:"বন্ধ করুন (Close)"})]})]})})}function A5({selectedDate:l}){const[o,u]=b.useState([]),[c,d]=b.useState(!1),A=()=>{d(!0),window.setTimeout(()=>d(!1),900)},[f,h]=b.useState([]),[x,L]=b.useState([]),[y,p]=b.useState(!1),[w,P]=b.useState([]),[G,K]=b.useState(!1),[j,z]=b.useState([]),[ce,M]=b.useState(!1),[te,k]=b.useState(!1),[J,ue]=b.useState(!1),[C,ne]=b.useState(ts()),[re,ae]=b.useState(!1),[fe,pe]=b.useState("all"),[B,O]=b.useState(l),[S,I]=b.useState(l),[q,ee]=b.useState(null),[U,H]=b.useState({category:"",subCategory:"",amount:0,serviceCharge:0,description:"",txDate:l}),[N,oe]=b.useState(null),[R,$]=b.useState(!1),ge=b.useMemo(()=>R&&U.description.trim()?i5(U.description):[],[R,U.description]),be=me=>{H(we=>({...we,description:me.insert})),$(!1)},[ye,Ie]=b.useState(""),Y=()=>{const me=sn(),we=B<=S?B:S,Nt=B<=S?S:B;u(me.filter(wn=>wn.type==="payment"&&wn.txDate>=we&&wn.txDate<=Nt)),h(ha("disburse")),L(ha("expense")),P(Jm()),z(mo()),ne(ts())};b.useEffect(()=>{O(l),I(l),Y(),H(Nt=>({...Nt,txDate:l}));const me=()=>ne(ts()),we=()=>Y();return window.addEventListener("kallyan-rule-changed",me),window.addEventListener("tx-changed",we),window.addEventListener("categories-changed",we),()=>{window.removeEventListener("kallyan-rule-changed",me),window.removeEventListener("tx-changed",we),window.removeEventListener("categories-changed",we)}},[l]),b.useEffect(()=>{Y()},[B,S]);const Q=me=>{const we=me.trim().toLowerCase();return f.some(Nt=>Nt.name.toLowerCase()===we)},Re=Q(U.category),Te=U.category.trim().toLowerCase().includes("fund payment"),rt=ec(U.category,j,f.map(me=>me.name)),At=Re?vh(U.amount,U.category,U.subCategory,w):0,ft=Lb(U.category,C),et=Re?ur(U.amount,U.category,C):0,ve=U.amount+At,st=y2(U.subCategory,j,U.category),St=Re&&st?Math.round(ve/st):0,gt=w.find(me=>me.category===U.category.trim().toLowerCase()&&me.subCategory===U.subCategory.trim().toLowerCase()),yt=gt?Number(gt.ratePer100):0,Ae=()=>{if(Oe(U.txDate)){A();return}if(!_t(U.txDate)){alert(`⚠️ এই তারিখের (${U.txDate}) কর্মদিবস এখনও শুরু (Day Open) করা হয়নি। কোনো এন্ট্রি করার পূর্বে দিনটি Day Open করুন।`),window.dispatchEvent(new CustomEvent("open-day-open-modal"));return}const me=pt(U.txDate,l);if(me.blocked){alert(`⚠️ ${me.reason||"দুটি কর্মদিবসের মধ্যবর্তী বন্ধের দিনে কোনো নতুন এন্ট্রি করা যাবে না।"}`);return}if(!U.category.trim())return Ie("Category required");if(!U.amount||U.amount<=0)return Ie("Amount must be greater than 0");Wb({type:"payment",category:U.category.trim().toLowerCase(),subCategory:Re||Te?U.subCategory:"",amount:String(U.amount),serviceCharge:String(At),description:U.description||"",txDate:U.txDate}),oc(U.description),H({category:"",subCategory:"",amount:0,serviceCharge:0,description:"",txDate:l}),Ie("Payment saved successfully!"),Y()},Ue=()=>{if(!N||!N.id)return;if(Oe(N.txDate)){A();return}const me=pt(N.txDate,l);if(me.blocked){alert(`⚠️ ${me.reason||"দুটি কর্মদিবসের মধ্যবর্তী বন্ধের দিনে কোনো পরিবর্তন করা যাবে না।"}`);return}const we=Q(N.category),Nt=(N.category||"").trim().toLowerCase().includes("fund payment"),wn=we?vh(N.amount,N.category,N.subCategory,w):0;ep({id:N.id,type:"payment",category:N.category.trim().toLowerCase(),subCategory:we||Nt?N.subCategory:"",amount:String(N.amount),serviceCharge:String(wn),description:N.description||"",txDate:N.txDate}),oc(N.description),oe(null),Y()},lt=()=>{if(q!==null){const me=o.find(we=>we.id===q);if(me&&Oe(me.txDate)){A(),ee(null);return}tp(q),ee(null),Y()}},Ot=fe==="all"?o:o.filter(me=>me.category.toLowerCase().trim()===fe.toLowerCase().trim()),ln=Ot.reduce((me,we)=>me+Number(we.amount),0),Zt=o.reduce((me,we)=>me+Number(we.amount),0),Dt=Array.from(new Set(o.map(me=>me.category.toLowerCase().trim()).filter(Boolean)));return n.jsxs("div",{className:"space-y-6",children:[n.jsxs("div",{id:"payment-form-card",className:"rounded-2xl border-t-4 border-red-500 bg-white p-5 sm:p-6 shadow-sm border border-slate-200 transition-all",children:[n.jsxs("div",{className:"flex items-center justify-between mb-4",children:[n.jsxs("h1",{className:"text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2",children:[n.jsx("span",{children:"📤"}),n.jsx("span",{children:"Payment Entry"}),Oe(U.txDate)&&n.jsx("span",{className:`shrink-0 rounded-lg border border-rose-300 bg-rose-100 px-2 py-0.5 text-[10px] font-black text-rose-700 ${c?"lock-pulse":""}`,title:"দিন সমাপ্ত (Day Closed) — হিসাব লক করা আছে",children:"🔒 Day Closed"})]}),n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("button",{type:"button",onClick:()=>ue(!0),title:"Denomination — নোট গুনে ক্যাশ মেলান (রিপোর্ট উইন্ডো)","aria-label":"Denomination — Check Diff",className:"flex h-8 w-9 shrink-0 cursor-pointer items-center justify-center rounded-xl border border-amber-600 bg-amber-500 text-base leading-none shadow-xs hover:bg-amber-600 sm:text-lg",children:"💰"}),n.jsx("span",{className:"text-xs font-mono font-bold text-slate-600 bg-slate-100 px-2.5 py-1 rounded border border-slate-200",children:U.txDate})]})]}),!Oe(U.txDate)&&pt(U.txDate,l).blocked&&n.jsxs("div",{className:"mb-4 rounded-xl border border-rose-400 bg-rose-50 p-3 text-xs sm:text-sm font-bold text-rose-900 flex items-start gap-2 shadow-xs",children:[n.jsx("span",{className:"text-base shrink-0",children:"🚫"}),n.jsxs("div",{children:[n.jsx("span",{className:"block font-black text-rose-950",children:"এই তারিখটি ব্লক (কর্মদিবসের মধ্যবর্তী বন্ধের দিন)"}),n.jsx("span",{className:"text-xs text-rose-800 font-normal mt-0.5 block",children:pt(U.txDate,l).reason})]})]}),n.jsxs("div",{className:"grid gap-4 md:grid-cols-2",children:[n.jsxs("div",{className:"grid grid-cols-2 items-end gap-3 md:grid-cols-3 md:col-span-2",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"mb-1 flex items-center justify-between",children:[n.jsx("label",{className:"text-xs font-bold text-slate-700",children:"Category"}),n.jsx("button",{type:"button",onClick:()=>p(!0),className:"text-xs font-bold text-blue-600 hover:underline cursor-pointer",children:"⚙ Manage"})]}),n.jsx(qh,{value:U.category,disabled:Oe(U.txDate),onChange:me=>H({...U,category:me,subCategory:""}),disburseCats:f,expenseCats:x,onManageClick:()=>p(!0)})]}),n.jsxs("div",{children:[n.jsxs("div",{className:"mb-1 flex items-center justify-between gap-1",children:[n.jsx("label",{className:"text-xs font-bold text-slate-700",children:Re?"Disburse Amount":"Expense Amount"}),n.jsx("button",{type:"button",disabled:Oe(U.txDate),onClick:()=>{if(Oe(U.txDate)){A();return}k(!0)},className:"flex items-center gap-1 rounded-lg bg-amber-500 hover:bg-amber-600 px-2 py-0.5 text-[10px] sm:px-2.5 sm:py-1 sm:text-xs font-bold text-slate-950 shadow-xs cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed shrink-0 whitespace-nowrap",children:"💳 Denomination"})]}),n.jsx("input",{type:"number",min:0,step:"1",disabled:Oe(U.txDate),value:U.amount||"",placeholder:"",onChange:me=>H({...U,amount:Math.round(Number(me.target.value)||0)}),className:`w-full h-[42px] rounded-lg border px-3 py-2 text-right font-mono text-lg font-bold focus:outline-none ${Oe(U.txDate)?"border-slate-300 bg-slate-100 text-slate-500 cursor-not-allowed opacity-60":"border-slate-300 bg-orange-50 hover:bg-orange-100/70 focus:border-blue-500"}`})]}),(Re||Te)&&n.jsxs("div",{className:"md:col-start-1 md:row-start-2",children:[n.jsxs("div",{className:"mb-1 flex items-center justify-between gap-2",children:[n.jsx("label",{className:"text-xs font-bold text-slate-700",children:"Sub Category"}),n.jsxs("div",{className:"flex items-center gap-2",children:[U.subCategory?n.jsx("button",{type:"button",disabled:Oe(U.txDate),onClick:()=>{if(Oe(U.txDate)){A();return}H({...U,subCategory:""})},title:"সাব-ক্যাটাগরি মুছে ফেলুন (ডিলিট)",className:"cursor-pointer text-[11px] font-black text-rose-600 hover:underline disabled:cursor-not-allowed disabled:opacity-40",children:"✕ মুছুন"}):null,Re?n.jsx("button",{type:"button",onClick:()=>M(!0),className:"text-xs font-bold text-blue-600 hover:underline flex items-center gap-1 cursor-pointer",children:"⚙ Rules"}):n.jsx("button",{type:"button",onClick:()=>p(!0),title:"Disburse Category যোগ/এডিট/ডিলিট — সেই তালিকা থেকেই এই সাব-ক্যাটাগরি আসে",className:"text-xs font-bold text-blue-600 hover:underline flex items-center gap-1 cursor-pointer",children:"⚙ Manage"})]})]}),n.jsx(Zn,{value:U.subCategory,onChange:me=>H({...U,subCategory:me}),options:U.subCategory&&!rt.includes(U.subCategory)?[...rt,U.subCategory]:rt,placeholder:"-- Select Sub Category --",disabled:Oe(U.txDate),className:"w-full h-[42px] rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-bold text-slate-800 focus:border-blue-500 focus:outline-none cursor-pointer",noKeyboardOnMobile:!0})]}),n.jsxs("div",{className:`${Re||Te?"":"col-span-2 md:col-span-1"} md:col-start-3 md:row-start-1 relative`,children:[n.jsxs("label",{className:"mb-1 block text-xs font-bold text-slate-700",children:["Description ",n.jsx("span",{className:"text-[10px] font-black text-amber-600",children:"💡 টাইপ করলেই সাজেশন"})]}),n.jsx("input",{type:"text",disabled:Oe(U.txDate),value:U.description,onChange:me=>H({...U,description:me.target.value}),onFocus:()=>$(!0),onBlur:()=>setTimeout(()=>$(!1),160),onKeyDown:me=>{me.key==="Escape"&&$(!1),me.key==="Enter"&&ge.length&&(me.preventDefault(),be(ge[0]))},placeholder:"কোড / নাম / মেম্বার কোড লিখুন…",autoComplete:"off",className:`w-full h-[42px] rounded-lg border px-3 py-2 text-sm font-semibold text-slate-800 focus:outline-none ${Oe(U.txDate)?"border-slate-300 bg-slate-100 text-slate-500 cursor-not-allowed opacity-60":"border-slate-300 bg-orange-50 focus:border-blue-500"}`}),R&&ge.length>0&&n.jsx("div",{className:"absolute left-0 right-0 top-full z-50 mt-1 max-h-56 overflow-y-auto rounded-xl border border-slate-300 bg-white shadow-2xl",children:ge.map((me,we)=>n.jsxs("button",{type:"button",onMouseDown:Nt=>{Nt.preventDefault(),be(me)},className:`flex w-full items-start gap-2 px-3 py-2 text-left transition cursor-pointer hover:bg-amber-50 ${we>0?"border-t border-slate-100":""}`,children:[n.jsx("span",{className:"mt-0.5 text-sm leading-none",children:me.icon}),n.jsxs("span",{className:"min-w-0 flex-1",children:[n.jsx("span",{className:"block truncate text-[13px] font-black text-slate-800",children:me.title}),n.jsx("span",{className:"block truncate text-[10px] font-bold text-slate-500",children:me.sub})]})]},we))})]})]}),n.jsxs("div",{className:"flex gap-2.5 md:col-span-2 pt-1",children:[n.jsx("button",{onClick:Ae,disabled:Oe(U.txDate)||!_t(U.txDate)||pt(U.txDate,l).blocked,className:"min-h-[44px] rounded-xl bg-red-600 px-6 py-2.5 font-bold text-sm text-white shadow hover:bg-red-700 active:scale-98 transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",children:Oe(U.txDate)?"🔒 দিন সমাপ্ত (লকড)":pt(U.txDate,l).blocked?"🚫 তারিখ ব্লকড":_t(U.txDate)?"Save Payment":"☀️ দিন শুরু (Day Open) করুন"}),n.jsx("button",{onClick:()=>{H({category:"",subCategory:"",amount:0,serviceCharge:0,description:"",txDate:l}),Ie("")},disabled:Oe(U.txDate)||!_t(U.txDate)||pt(U.txDate,l).blocked,className:"min-h-[44px] rounded-xl bg-slate-500 px-6 py-2.5 font-bold text-sm text-white hover:bg-slate-600 active:scale-98 transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",children:"Reset"})]}),Re?n.jsxs("div",{className:"grid grid-cols-2 gap-2 sm:grid-cols-4 md:col-span-2",children:[n.jsxs("div",{className:"rounded-xl bg-amber-500 p-2.5 text-white shadow-xs",children:[n.jsxs("div",{className:"flex items-center justify-between text-xs font-semibold",children:[n.jsxs("span",{children:["SC ",yt?`(${yt}/100)`:""]}),n.jsx("button",{type:"button",onClick:()=>K(!0),className:"flex h-5 w-5 items-center justify-center rounded-full bg-white/30 text-xs cursor-pointer",children:"⚙"})]}),n.jsx("div",{className:"mt-1 font-mono text-base sm:text-lg font-bold text-right",children:de(At)})]}),n.jsxs("div",{className:"rounded-xl bg-violet-600 p-2.5 text-white shadow-xs",children:[n.jsxs("div",{className:"flex items-center justify-between text-xs font-semibold",children:[n.jsxs("span",{children:["Kisti ",st?`(${st})`:""]}),n.jsx("button",{type:"button",onClick:()=>M(!0),className:"flex h-5 w-5 items-center justify-center rounded-full bg-white/30 text-xs cursor-pointer hover:bg-white/40 active:scale-95 transition",title:"কিস্তি রুল সেটিংস (Kisti / Installment Rules)",children:"⚙"})]}),n.jsx("div",{className:"mt-1 font-mono text-base sm:text-lg font-bold text-right",children:de(St)})]}),n.jsxs("div",{className:"rounded-xl bg-gradient-to-br from-teal-600 to-emerald-700 p-2.5 text-white shadow-sm ring-1 ring-teal-400/40",children:[n.jsxs("div",{className:"flex items-center justify-between text-xs font-bold",children:[n.jsxs("span",{className:"flex items-center gap-1 truncate pr-1",children:[n.jsx("span",{children:"🤝"}),n.jsx("span",{children:"Kallyan Fund"})]}),n.jsx("button",{type:"button",onClick:()=>ae(!0),className:"flex items-center gap-1 rounded-md bg-white/20 hover:bg-white/30 px-1.5 py-0.5 text-[10px] font-bold text-white transition cursor-pointer",title:"Change Kallyan Fund Settings",children:n.jsx("span",{children:"⚙️"})})]}),n.jsxs("div",{className:"mt-1 flex items-baseline justify-between",children:[n.jsxs("span",{className:"text-[10px] font-semibold text-teal-100 truncate",children:[ft.percent,"% + ",ft.fixed,"৳"]}),n.jsx("span",{className:"font-mono text-base sm:text-lg font-black text-right",children:de(et)})]})]}),n.jsxs("div",{className:"rounded-xl bg-blue-700 p-2.5 text-white shadow-xs",children:[n.jsx("div",{className:"text-xs font-semibold",children:"Total (Amount + SC)"}),n.jsx("div",{className:"mt-1 font-mono text-base sm:text-lg font-bold text-right",children:de(ve)})]})]}):n.jsx("div",{className:"grid grid-cols-1 md:col-span-2",children:n.jsxs("div",{className:"flex items-center justify-between rounded-xl bg-slate-800 p-3 text-white",children:[n.jsx("span",{className:"text-xs font-bold uppercase tracking-wider text-slate-300",children:"Total Expense"}),n.jsx("span",{className:"font-mono text-xl font-black",children:de(U.amount||0)})]})})]}),ye&&n.jsx("p",{className:"mt-2 text-xs font-bold text-emerald-700",children:ye})]}),n.jsxs("div",{className:"overflow-hidden rounded-2xl bg-white shadow-sm border border-slate-200",children:[n.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b px-5 py-3 bg-slate-50",children:[n.jsxs("div",{className:"font-bold text-slate-800 text-sm sm:text-base",children:["Saved Payment Entries (",Ot.length,"/",o.length,")"]}),n.jsxs("div",{className:"grid w-full grid-cols-2 items-center gap-x-2 gap-y-1 sm:w-auto sm:max-w-md sm:flex sm:flex-wrap",children:[n.jsxs("div",{className:"flex min-w-0 items-center gap-1.5",children:[n.jsx("label",{className:"shrink-0 text-xs font-bold text-slate-600",children:"From:"}),n.jsx("div",{className:"min-w-0 flex-1",children:n.jsx(xn,{value:B,onChange:me=>O(me),className:"w-full px-2 py-1 text-xs sm:text-sm bg-orange-50"})})]}),n.jsxs("div",{className:"flex min-w-0 items-center gap-1.5",children:[n.jsx("label",{className:"shrink-0 text-xs font-bold text-slate-600",children:"To:"}),n.jsx("div",{className:"min-w-0 flex-1",children:n.jsx(xn,{value:S,onChange:me=>I(me),className:"w-full px-2 py-1 text-xs sm:text-sm bg-orange-50"})})]})]}),n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("label",{className:"text-xs font-bold text-slate-600",children:"Category Filter:"}),n.jsx(Zn,{value:fe,onChange:me=>pe(me),noKeyboardOnMobile:!0,options:[{value:"all",label:`All Categories (${o.length})`},...Dt.map(me=>({value:me,label:mt(me)}))],placeholder:"All Categories",className:"rounded-lg border border-slate-300 bg-orange-50 px-3 py-1.5 text-xs sm:text-sm font-semibold text-slate-800 shadow-2xs focus:border-blue-500 focus:outline-none cursor-pointer w-44 sm:w-52"})]})]}),n.jsx("div",{className:"overflow-x-auto max-h-[60vh] sm:max-h-[68vh] overflow-y-auto",children:n.jsxs("table",{className:"w-full text-xs sm:text-sm",children:[n.jsx("thead",{className:"sticky top-0 bg-slate-800 text-left text-white z-10",children:n.jsxs("tr",{children:[n.jsx("th",{className:"px-3.5 py-2.5",children:"#"}),n.jsx("th",{className:"px-3.5 py-2.5",children:"Category"}),n.jsx("th",{className:"px-3.5 py-2.5",children:"Sub Cat."}),n.jsx("th",{className:"px-3.5 py-2.5",children:"Description"}),n.jsx("th",{className:"px-3.5 py-2.5 text-right",children:"Disburse/Expense"}),n.jsx("th",{className:"px-3.5 py-2.5 text-center",children:"Action"})]})}),n.jsx("tbody",{children:Ot.length===0?n.jsx("tr",{children:n.jsx("td",{colSpan:6,className:"px-3 py-6 text-center text-slate-400",children:fe==="all"?`No payment entries on ${l}`:`No entries for category "${mt(fe)}"`})}):Ot.map((me,we)=>n.jsxs("tr",{className:"border-b hover:bg-slate-50",children:[n.jsx("td",{className:"px-3.5 py-2 text-slate-500 font-mono",children:we+1}),n.jsx("td",{className:"px-3.5 py-2 font-bold text-slate-800",children:mt(me.category)}),n.jsx("td",{className:"px-3.5 py-2 text-slate-600 text-xs",children:me.subCategory||"-"}),n.jsx("td",{className:"px-3.5 py-2 text-slate-600 text-xs",children:me.description||"-"}),n.jsx("td",{className:"px-3.5 py-2 text-right font-mono font-black text-slate-900",children:de(me.amount)}),n.jsx("td",{className:"px-3.5 py-2 text-center whitespace-nowrap",children:n.jsxs("div",{className:"flex items-center justify-center gap-2",children:[n.jsx("button",{type:"button",disabled:Oe(me.txDate),onClick:()=>{if(Oe(me.txDate)){A();return}oe({id:me.id,category:me.category,subCategory:me.subCategory??"",amount:Number(me.amount),serviceCharge:Number(me.serviceCharge||0),description:me.description??"",txDate:me.txDate})},className:`min-h-[36px] rounded-lg px-3 py-1.5 text-xs font-bold text-white transition ${Oe(me.txDate)?"bg-slate-400 cursor-not-allowed opacity-50":"bg-blue-600 hover:bg-blue-700 cursor-pointer"}`,title:Oe(me.txDate)?"দিন সমাপ্ত (Locked) - উপরের Working-Day বার থেকে Re-open করুন":"Edit",children:Oe(me.txDate)?"🔒 Edit":"Edit"}),n.jsx("button",{type:"button",disabled:Oe(me.txDate),onClick:()=>{if(Oe(me.txDate)){A();return}ee(me.id)},className:`min-h-[36px] rounded-lg px-3 py-1.5 text-xs font-bold text-white transition ${Oe(me.txDate)?"bg-slate-400 cursor-not-allowed opacity-50":"bg-rose-600 hover:bg-rose-700 cursor-pointer"}`,title:Oe(me.txDate)?"দিন সমাপ্ত (Locked) - উপরের Working-Day বার থেকে Re-open করুন":"Delete",children:Oe(me.txDate)?"🔒 Del":"Delete"})]})})]},me.id))}),o.length>0&&n.jsx("tfoot",{className:"sticky bottom-0 bg-slate-100 font-bold border-t-2 border-slate-300 z-10 shadow-inner",children:n.jsxs("tr",{children:[n.jsx("td",{colSpan:4,className:"px-3.5 py-2.5 text-right font-bold text-slate-800",children:fe==="all"?"Total Payment":`Subtotal (${mt(fe)})`}),n.jsx("td",{className:"px-3.5 py-2.5 text-right font-mono font-black text-slate-900",children:de(fe==="all"?Zt:ln)}),n.jsx("td",{})]})})]})})]}),q!==null&&n.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4",children:n.jsxs("div",{className:"w-full max-w-sm rounded-2xl bg-white p-5 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95",children:[n.jsxs("h3",{className:"text-base font-bold text-slate-900 flex items-center gap-2",children:[n.jsx("span",{className:"text-rose-600 text-lg",children:"⚠️"}),n.jsx("span",{children:"Confirm Delete"})]}),n.jsx("p",{className:"mt-2 text-sm text-slate-600",children:"Are you sure you want to permanently delete this payment entry? This action cannot be undone."}),n.jsxs("div",{className:"mt-5 flex items-center justify-end gap-3",children:[n.jsx("button",{type:"button",onClick:()=>ee(null),className:"min-h-[44px] rounded-xl bg-slate-200 px-4 py-2 text-sm font-bold text-slate-700 hover:bg-slate-300 active:scale-95 transition",children:"Cancel"}),n.jsx("button",{type:"button",onClick:lt,className:"min-h-[44px] rounded-xl bg-rose-600 px-5 py-2 text-sm font-bold text-white hover:bg-rose-700 active:scale-95 transition",children:"Delete Entry"})]})]})}),N&&n.jsx("div",{className:"fixed inset-0 z-40 flex items-center justify-center bg-black/60 p-4",children:n.jsxs("div",{className:"max-h-[95vh] w-full max-w-2xl overflow-auto rounded-2xl bg-white p-5 sm:p-6 shadow-2xl",children:[n.jsxs("div",{className:"mb-4 flex items-center justify-between border-b pb-3",children:[n.jsxs("h2",{className:"text-lg font-bold",children:["Edit Payment #",N.id]}),n.jsx("button",{onClick:()=>oe(null),className:"min-h-[36px] min-w-[36px] text-2xl text-slate-400 hover:text-rose-600 flex items-center justify-center",children:"×"})]}),n.jsxs("div",{className:"grid gap-4 md:grid-cols-2",children:[n.jsxs("div",{children:[n.jsx("label",{className:"mb-1 block text-xs font-bold text-slate-700",children:"Date"}),n.jsx(xn,{value:N.txDate,onChange:me=>oe({...N,txDate:me}),className:"px-3 py-2 text-sm"})]}),n.jsxs("div",{children:[n.jsx("label",{className:"mb-1 block text-xs font-bold text-slate-700",children:"Category"}),n.jsx(qh,{value:N.category,onChange:me=>oe({...N,category:me,subCategory:""}),disburseCats:f,expenseCats:x,onManageClick:()=>p(!0)})]}),(Q(N.category)||(N.category||"").trim().toLowerCase().includes("fund payment"))&&n.jsxs("div",{children:[n.jsxs("div",{className:"mb-1 flex items-center justify-between gap-2",children:[n.jsx("label",{className:"text-xs font-bold text-slate-700",children:"Sub Category"}),N.subCategory?n.jsx("button",{type:"button",onClick:()=>oe({...N,subCategory:""}),title:"সাব-ক্যাটাগরি মুছে ফেলুন (ডিলিট)",className:"cursor-pointer text-[11px] font-black text-rose-600 hover:underline",children:"✕ মুছুন"}):null]}),n.jsx(Zn,{value:N.subCategory||"",onChange:me=>oe({...N,subCategory:me}),options:(()=>{const me=ec(N.category,j,f.map(Nt=>Nt.name)),we=(N.subCategory||"").trim();return we&&!me.includes(we)?[...me,we]:me})(),placeholder:"-- Select Sub Category --",className:"w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-bold text-slate-800 focus:border-blue-500 focus:outline-none cursor-pointer",noKeyboardOnMobile:!0})]}),n.jsxs("div",{className:"md:col-span-1",children:[n.jsx("label",{className:"mb-1 block text-xs font-bold text-slate-700",children:"Disburse/Expense"}),n.jsx("input",{type:"number",placeholder:"",value:N.amount||"",onChange:me=>oe({...N,amount:Math.round(Number(me.target.value)||0)}),className:"w-full rounded-lg border border-slate-300 bg-yellow-50 px-3 py-2 text-right font-mono text-lg font-bold"})]}),n.jsxs("div",{className:"md:col-span-1",children:[n.jsx("label",{className:"mb-1 block text-xs font-bold text-slate-700",children:"Description"}),n.jsx("input",{type:"text",value:N.description,onChange:me=>oe({...N,description:me.target.value}),placeholder:"",className:"w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"})]}),n.jsxs("div",{className:"flex justify-end gap-3 md:col-span-2 border-t pt-3 mt-2",children:[n.jsx("button",{onClick:()=>oe(null),className:"min-h-[44px] rounded-xl bg-slate-200 px-5 py-2 font-bold text-sm text-slate-700 hover:bg-slate-300 transition",children:"Cancel"}),n.jsx("button",{onClick:Ue,className:"min-h-[44px] rounded-xl bg-red-600 px-6 py-2 font-bold text-sm text-white hover:bg-red-700 transition",children:"Update Entry"})]})]})]})}),y&&n.jsx(op,{disburseCats:f,expenseCats:x,onChanged:Y,onClose:()=>p(!1)}),ce&&n.jsx(m5,{open:ce,onClose:()=>M(!1),rules:j,disburseCategories:f.map(me=>me.name),onRulesChanged:Y,currentCategory:U.category,currentLoanAmount:U.amount}),G&&n.jsx(d5,{rates:w,categories:f.map(me=>me.name),onChanged:Y,onClose:()=>K(!1)}),re&&n.jsx(cp,{rule:C,disburseCategories:f.map(me=>me.name),onChanged:Y,onClose:()=>ae(!1)}),n.jsx(Nm,{open:te,onClose:()=>k(!1),targetAmount:N?N.amount||0:U.amount||0,date:N?N.txDate:U.txDate||l,onApplyAmount:me=>{N?oe({...N,amount:Math.round(me)}):H({...U,amount:Math.round(me)})}}),J&&n.jsx(Ym,{open:J,onClose:()=>ue(!1),cashInHand:sp(U.txDate||l).cashInHand,date:U.txDate||l})]})}const Qh=l=>l?`${l.slice(8,10)}-${l.slice(5,7)}`:"",f5=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],$h=l=>{const[o,u]=l.split("-");return`${f5[Number(u)-1]||u} ${o}`};function x5(){const[l,o]=b.useState([]),[u,c]=b.useState(null),[d,A]=b.useState(xa()),[f,h]=b.useState(""),[x,L]=b.useState(""),[y,p]=b.useState(""),[w,P]=b.useState(null),[G,K]=b.useState(null),[j,z]=b.useState(!1),[ce,M]=b.useState(""),[te,k]=b.useState(""),[J,ue]=b.useState(""),[C,ne]=b.useState(!1),re=()=>o(BR());b.useEffect(()=>{re();const N=()=>re();return window.addEventListener("entertainment-changed",N),()=>window.removeEventListener("entertainment-changed",N)},[]);const ae=()=>{h(""),L(""),p(""),P(null)},fe=N=>{P(N.id),A(N.date||xa()),h(N.category),L(N.description||""),p(String(N.amount||"")),c(null),window.scrollTo({top:0,behavior:"smooth"})},pe=()=>{if(!d)return c({kind:"warn",text:"তারিখ দিন।"});if(!f)return c({kind:"warn",text:"ক্যাটাগরি (জমা/খরচ) বেছে নিন।"});const N=Number(y);if(!y||!Number.isFinite(N)||N<=0)return c({kind:"warn",text:"Amount-এ সঠিক সংখ্যা দিন।"});HR({...w!=null?{id:w}:{},date:d,category:f,description:x.trim(),amount:String(Math.round(N))}),ae(),c({kind:"ok",text:w!=null?"✓ এন্ট্রি আপডেট হয়েছে।":"✓ এন্ট্রি সেভ হয়েছে।"}),setTimeout(()=>c(null),1800)},B=b.useMemo(()=>l.filter(N=>!(G&&(N.date<G.from||N.date>G.to)||J&&!N.date.startsWith(J))),[l,G,J]),O=()=>{if(!ce&&!te)return c({kind:"warn",text:"কমপক্ষে একটি তারিখ লিখুন (হতে বা পর্যন্ত)।"});let N=ce||te,oe=te||ce;N>oe&&([N,oe]=[oe,N]),K({from:N,to:oe}),z(!1),c(null)},S=()=>{K(null),M(""),k(""),z(!1)},I=b.useMemo(()=>{const N=new Map;for(const oe of B){const R=String(oe.date||"").slice(0,7);if(!R)continue;const $=N.get(R)||{deposit:0,expense:0};oe.category==="জমা"?$.deposit+=Number(oe.amount)||0:$.expense+=Number(oe.amount)||0,N.set(R,$)}return[...N.entries()].sort((oe,R)=>R[0].localeCompare(oe[0])).map(([oe,R])=>({ym:oe,...R,balance:R.deposit-R.expense}))},[B]),q=b.useMemo(()=>{let N=0,oe=0;for(const R of l)R.category==="জমা"?N+=Number(R.amount)||0:oe+=Number(R.amount)||0;return{joma:N,khoroch:oe,sthiti:N-oe}},[l]),ee=b.useMemo(()=>{let N=0,oe=0;for(const R of B)R.category==="জমা"?N+=Number(R.amount)||0:oe+=Number(R.amount)||0;return{joma:N,khoroch:oe,sthiti:N-oe}},[B]),U="mb-1 block h-[24px] truncate leading-[24px] text-[11px] font-black uppercase tracking-wide text-slate-600",H="w-full rounded-lg border border-slate-300 bg-white px-2.5 py-2 text-sm font-semibold text-slate-800 focus:border-blue-500 focus:outline-none";return n.jsxs("div",{className:"space-y-4",children:[n.jsx("div",{className:"sticky top-2 z-30 rounded-2xl border-2 border-violet-300/80 bg-gradient-to-r from-violet-700 via-violet-600 to-indigo-600 px-4 py-3 shadow-xl",children:n.jsxs("div",{className:"flex items-center justify-between gap-2",children:[n.jsxs("div",{className:"min-w-0",children:[n.jsx("div",{className:"text-[10px] font-black uppercase tracking-wider text-violet-200",children:"🎉 বর্তমান স্থিতি"}),n.jsxs("div",{className:"truncate text-2xl font-black font-mono text-white",children:[de(q.sthiti)," ",n.jsx("span",{className:"text-sm font-bold text-violet-200",children:"৳"})]})]}),n.jsxs("div",{className:"shrink-0 rounded-xl bg-white/15 px-2.5 py-1.5 text-right backdrop-blur-sm",children:[n.jsxs("div",{className:"text-[10px] font-bold text-emerald-200",children:["জমা ",n.jsx("span",{className:"font-mono",children:de(q.joma)})]}),n.jsxs("div",{className:"text-[10px] font-bold text-rose-200",children:["খরচ ",n.jsx("span",{className:"font-mono",children:de(q.khoroch)})]}),n.jsxs("div",{className:"text-[9px] font-bold text-violet-200",children:[l.length,"টি এন্ট্রি"]})]})]})}),n.jsxs("div",{className:"rounded-2xl border border-slate-200 bg-white p-4 shadow-xs",children:[n.jsxs("div",{className:"mb-3 flex items-center justify-between border-b border-slate-100 pb-2.5",children:[n.jsxs("h1",{className:"text-lg sm:text-xl font-black text-slate-900 flex items-center gap-2",children:[n.jsx("span",{children:"🎉"})," Entertainment"]}),n.jsxs("span",{className:"rounded-full bg-violet-100 px-2.5 py-1 text-[11px] font-black text-violet-800",children:[l.length,"টি এন্ট্রি"]})]}),w!=null&&n.jsxs("div",{className:"mb-2.5 flex items-center justify-between rounded-xl border border-amber-300 bg-amber-50 px-3 py-2",children:[n.jsx("span",{className:"text-[11px] font-black text-amber-800",children:'✏️ এন্ট্রি এডিট মোডে — মান বদলে "আপডেট করুন"'}),n.jsx("button",{type:"button",onClick:ae,className:"text-[11px] font-black text-amber-700 hover:text-amber-900 cursor-pointer",children:"✕ বাতিল"})]}),n.jsxs("div",{className:"grid grid-cols-2 gap-2.5 sm:grid-cols-4",children:[n.jsxs("div",{children:[n.jsx("label",{className:U,children:"তারিখ"}),n.jsx(xn,{value:d,onChange:N=>A(N||xa()),manualEntry:!0,className:"px-2.5 py-2 text-sm font-bold"})]}),n.jsxs("div",{children:[n.jsx("label",{className:U,children:"ক্যাটাগরি"}),n.jsxs("select",{value:f,onChange:N=>h(N.target.value),className:`${H} cursor-pointer`,children:[n.jsx("option",{value:"",children:"-- Select --"}),n.jsx("option",{value:"জমা",children:"জমা"}),n.jsx("option",{value:"খরচ",children:"খরচ"})]})]}),n.jsxs("div",{className:"col-span-2 sm:col-span-1",children:[n.jsx("label",{className:U,children:"ডেসক্রিপশন"}),n.jsx("input",{type:"text",value:x,onChange:N=>L(N.target.value),placeholder:"যেমন: অতিথি আপ্যায়ন…",className:H})]}),n.jsxs("div",{children:[n.jsx("label",{className:U,children:"Amount"}),n.jsx("input",{type:"number",inputMode:"numeric",min:"1",value:y,onChange:N=>p(N.target.value),placeholder:"0",className:"w-full rounded-lg border border-slate-300 bg-yellow-50 px-2.5 py-2 text-right font-mono text-sm font-bold text-slate-900 focus:border-blue-500 focus:outline-none"})]})]}),n.jsxs("div",{className:"mt-3 flex items-center justify-between gap-2",children:[n.jsx("div",{className:"min-w-0 flex-1",children:u&&n.jsx("span",{className:`text-[11px] font-bold ${u.kind==="ok"?"text-emerald-700":"text-amber-700"}`,children:u.text})}),w!=null&&n.jsx("button",{type:"button",onClick:ae,className:"shrink-0 rounded-xl border border-slate-300 bg-slate-100 hover:bg-slate-200 px-4 py-2 text-sm font-black text-slate-700 transition cursor-pointer",children:"বাতিল"}),n.jsxs("button",{type:"button",onClick:pe,className:`shrink-0 flex items-center gap-1.5 rounded-xl px-5 py-2 text-sm font-black text-white shadow transition cursor-pointer ${w!=null?"bg-amber-600 hover:bg-amber-700 active:bg-amber-800":"bg-violet-600 hover:bg-violet-700 active:bg-violet-800"}`,children:[n.jsx("span",{children:w!=null?"✎":"✚"})," ",w!=null?"আপডেট করুন":"সেভ করুন"]})]})]}),n.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[n.jsxs("div",{className:"relative shrink-0",children:[n.jsxs("button",{type:"button",onClick:()=>{M((G==null?void 0:G.from)||""),k((G==null?void 0:G.to)||""),z(N=>!N),ne(!1)},title:"তারিখ হতে তারিখ ফিল্টার",className:`flex cursor-pointer items-center gap-1 whitespace-nowrap rounded-xl border px-3 py-2 text-[11px] font-black transition ${G?"border-sky-600 bg-sky-600 text-white shadow":"border-slate-300 bg-white text-slate-700 hover:border-sky-400 hover:text-sky-700"}`,children:["📅 ",G?`${Qh(G.from)} → ${Qh(G.to)}`:"তারিখ হতে তারিখ"]}),j&&n.jsxs("div",{className:"absolute left-0 top-full z-40 mt-1.5 w-64 rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl",children:[n.jsxs("div",{className:"mb-2 flex items-center justify-between",children:[n.jsx("span",{className:"text-xs font-black text-slate-800",children:"📅 তারিখ হতে তারিখ"}),n.jsx("button",{type:"button",onClick:()=>z(!1),className:"rounded px-1.5 text-sm font-black text-slate-400 hover:text-slate-700 cursor-pointer",children:"✕"})]}),n.jsxs("div",{className:"mb-2",children:[n.jsx("label",{className:"mb-1 block text-[10px] font-black text-slate-600",children:"হতে"}),n.jsx(xn,{value:ce,onChange:M,manualEntry:!0,className:"px-2.5 py-1.5 text-xs"})]}),n.jsxs("div",{className:"mb-3",children:[n.jsx("label",{className:"mb-1 block text-[10px] font-black text-slate-600",children:"পর্যন্ত"}),n.jsx(xn,{value:te,onChange:k,manualEntry:!0,className:"px-2.5 py-1.5 text-xs"})]}),n.jsxs("div",{className:"flex gap-2",children:[n.jsx("button",{type:"button",onClick:O,className:"flex-1 rounded-lg bg-sky-600 px-3 py-1.5 text-[11px] font-black text-white hover:bg-sky-700 cursor-pointer",children:"প্রয়োগ"}),n.jsx("button",{type:"button",onClick:S,className:"rounded-lg bg-slate-200 px-3 py-1.5 text-[11px] font-black text-slate-700 hover:bg-slate-300 cursor-pointer",children:"মুছুন"})]})]})]}),n.jsxs("div",{className:"relative shrink-0",children:[n.jsxs("button",{type:"button",onClick:()=>{ne(N=>!N),z(!1)},title:"মাস ফিল্টার — নির্দিষ্ট মাসের এন্ট্রি",className:`flex cursor-pointer items-center gap-1 whitespace-nowrap rounded-xl border px-3 py-2 text-[11px] font-black transition ${J?"border-violet-600 bg-violet-600 text-white shadow":"border-slate-300 bg-white text-slate-700 hover:border-violet-400 hover:text-violet-700"}`,children:["🗓 ",J?$h(J):"Month"]}),C&&n.jsxs("div",{className:"absolute left-0 top-full z-40 mt-1.5 w-56 rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl",children:[n.jsxs("div",{className:"mb-2 flex items-center justify-between",children:[n.jsx("span",{className:"text-xs font-black text-slate-800",children:"🗓 মাস বেছে নিন"}),n.jsx("button",{type:"button",onClick:()=>ne(!1),className:"rounded px-1.5 text-sm font-black text-slate-400 hover:text-slate-700 cursor-pointer",children:"✕"})]}),n.jsx("input",{type:"month",value:J,onChange:N=>{ue(N.target.value),ne(!1)},className:"w-full rounded-lg border border-slate-300 bg-white px-2.5 py-2 text-sm font-bold text-slate-800 focus:border-violet-500 focus:outline-none cursor-pointer"}),n.jsx("button",{type:"button",onClick:()=>{ue(""),ne(!1)},className:"mt-2 w-full rounded-lg bg-slate-200 px-3 py-1.5 text-[11px] font-black text-slate-700 hover:bg-slate-300 cursor-pointer",children:"সব মাস"})]})]}),(G||J)&&n.jsx("button",{type:"button",onClick:()=>{S(),ue("")},className:"rounded-xl border border-rose-300 bg-rose-50 px-3 py-2 text-[11px] font-black text-rose-700 hover:bg-rose-100 cursor-pointer",children:"✕ ফিল্টার মুছুন"}),n.jsxs("span",{className:"ml-auto text-[11px] font-bold text-slate-500",children:[B.length,"টি দেখানো হচ্ছে"]})]}),n.jsxs("div",{className:"rounded-2xl border border-slate-200 bg-white p-3 shadow-xs",children:[n.jsxs("div",{className:"mb-2 flex items-center justify-between",children:[n.jsx("h2",{className:"text-sm font-black text-slate-900",children:"🎉 সকল এন্ট্রি"}),n.jsxs("span",{className:"text-[11px] font-bold text-slate-500",children:["জমা ",n.jsx("span",{className:"font-mono text-emerald-700",children:de(ee.joma)})," • খরচ ",n.jsx("span",{className:"font-mono text-rose-700",children:de(ee.khoroch)})," • স্থিতি ",n.jsx("span",{className:"font-mono text-indigo-800",children:de(ee.sthiti)})]})]}),n.jsx("div",{className:"max-h-96 overflow-auto rounded-xl border border-slate-200",children:n.jsxs("table",{className:"w-full min-w-[430px] text-left text-xs sm:text-sm whitespace-nowrap",children:[n.jsx("thead",{className:"sticky top-0 bg-violet-800 text-white",children:n.jsxs("tr",{children:[n.jsx("th",{className:"px-3 py-2 text-center",children:"তারিখ"}),n.jsx("th",{className:"px-3 py-2 text-center",children:"ক্যাটাগরি"}),n.jsx("th",{className:"px-3 py-2",children:"ডেসক্রিপশন"}),n.jsx("th",{className:"px-3 py-2 text-right",children:"Amount"}),n.jsx("th",{className:"px-3 py-2 text-center",children:"✏️ / ✕"})]})}),n.jsx("tbody",{children:B.length===0?n.jsx("tr",{children:n.jsx("td",{colSpan:5,className:"px-3 py-6 text-center text-slate-400 font-semibold",children:"কোনো এন্ট্রি নেই"})}):B.map(N=>n.jsxs("tr",{className:"border-b hover:bg-slate-50",children:[n.jsx("td",{className:"px-3 py-2 text-center font-mono text-[11px] sm:text-xs text-slate-700",children:N.date.split("-").reverse().join("-")}),n.jsx("td",{className:"px-3 py-2 text-center",children:n.jsx("span",{className:`inline-block rounded-full px-2 py-0.5 text-[10px] font-black ${N.category==="জমা"?"bg-emerald-100 text-emerald-800":"bg-rose-100 text-rose-800"}`,children:N.category})}),n.jsx("td",{className:"px-3 py-2 max-w-[160px] truncate text-slate-800",title:N.description,children:N.description||"—"}),n.jsxs("td",{className:`px-3 py-2 text-right font-mono font-bold ${N.category==="জমা"?"text-emerald-700":"text-rose-700"}`,children:[N.category==="জমা"?"+":"-",de(Number(N.amount)||0)]}),n.jsxs("td",{className:"px-3 py-2 text-center whitespace-nowrap",children:[n.jsx("button",{type:"button",onClick:()=>fe(N),className:"mr-1 rounded-lg px-1.5 py-0.5 text-[11px] font-black text-slate-400 hover:bg-amber-100 hover:text-amber-600 cursor-pointer",title:"এন্ট্রি এডিট করুন",children:"✏️"}),n.jsx("button",{type:"button",onClick:()=>{confirm(`"${N.description||N.category}" — ${de(Number(N.amount))} টাকার এন্ট্রিটি মুছে ফেলবেন?`)&&ER(N.id)},className:"rounded-lg px-1.5 py-0.5 text-[11px] font-black text-slate-400 hover:bg-rose-100 hover:text-rose-600 cursor-pointer",title:"এন্ট্রি মুছুন",children:"🗑"})]})]},N.id))})]})})]}),n.jsxs("div",{className:"rounded-2xl border border-slate-200 bg-white p-3 shadow-xs",children:[n.jsxs("div",{className:"mb-2 flex items-center justify-between",children:[n.jsx("h2",{className:"text-sm font-black text-slate-900",children:"🗓 মাসভিত্তিক হিসাব"}),(G||J)&&n.jsx("span",{className:"rounded-full bg-sky-100 px-2 py-0.5 text-[10px] font-black text-sky-800",children:"ফিল্টার কার্যকর"})]}),n.jsx("div",{className:"overflow-auto rounded-xl border border-slate-200",children:n.jsxs("table",{className:"w-full min-w-[380px] text-left text-xs sm:text-sm whitespace-nowrap",children:[n.jsx("thead",{className:"sticky top-0 bg-slate-800 text-white",children:n.jsxs("tr",{children:[n.jsx("th",{className:"px-3 py-2 text-center",children:"মাস"}),n.jsx("th",{className:"px-3 py-2 text-right",children:"জমা"}),n.jsx("th",{className:"px-3 py-2 text-right",children:"খরচ"}),n.jsx("th",{className:"px-3 py-2 text-right",children:"স্থিতি"})]})}),n.jsx("tbody",{children:I.length===0?n.jsx("tr",{children:n.jsx("td",{colSpan:4,className:"px-3 py-6 text-center text-slate-400 font-semibold",children:"কোনো মাসিক হিসাব নেই"})}):I.map(N=>n.jsxs("tr",{className:"border-b hover:bg-slate-50",children:[n.jsx("td",{className:"px-3 py-2 text-center font-bold text-slate-800",children:$h(N.ym)}),n.jsx("td",{className:"px-3 py-2 text-right font-mono font-bold text-emerald-700",children:de(N.deposit)}),n.jsx("td",{className:"px-3 py-2 text-right font-mono font-bold text-rose-700",children:de(N.expense)}),n.jsx("td",{className:`px-3 py-2 text-right font-mono font-black ${N.balance>=0?"text-indigo-800":"text-rose-700"}`,children:de(N.balance)})]},N.ym))}),I.length>0&&n.jsx("tfoot",{className:"bg-slate-100 font-black",children:n.jsxs("tr",{children:[n.jsx("td",{className:"px-3 py-2 text-center text-slate-800",children:"মোট"}),n.jsx("td",{className:"px-3 py-2 text-right font-mono text-emerald-800",children:de(ee.joma)}),n.jsx("td",{className:"px-3 py-2 text-right font-mono text-rose-800",children:de(ee.khoroch)}),n.jsx("td",{className:`px-3 py-2 text-right font-mono ${ee.sthiti>=0?"text-indigo-900":"text-rose-800"}`,children:de(ee.sthiti)})]})})]})})]})]})}var fc=gb();function h5({value:l,onChange:o,options:u,disabled:c=!1,readOnly:d=!1}){const[A,f]=b.useState(!1),[h,x]=b.useState(0),[L,y]=b.useState(!1),p=L?l.toLowerCase():"",w=p?u.filter(K=>K.toLowerCase().startsWith(p)):u,P=w.length?w:u.filter(K=>K.toLowerCase().includes(p)),G=K=>{c||(o(K.toLowerCase().trim()),y(!1),f(!1))};return n.jsxs("div",{className:"relative",children:[n.jsx("input",{value:mt(l),disabled:c,readOnly:d,inputMode:d?"none":void 0,placeholder:d?"Select option...":"Type first letter or select...",onChange:K=>{c||d||(o(K.target.value.toLowerCase()),y(!0),f(!0),x(0))},onFocus:K=>{c||(d&&K.target.blur(),y(!1),f(!0))},onClick:K=>{c||(d&&K.currentTarget.blur(),y(!1),f(!0))},onBlur:()=>{setTimeout(()=>{if(f(!1),y(!1),l&&l.trim()){const K=l.toLowerCase().trim(),j=u.find(z=>z.toLowerCase().trim()===K);if(j)o(j);else{const z=u.find(ce=>ce.toLowerCase().trim().startsWith(K));z&&o(z)}}},250)},onKeyDown:K=>{if(!c){if(!A&&(K.key==="ArrowDown"||K.key==="Enter")){f(!0);return}K.key==="ArrowDown"?(K.preventDefault(),x(j=>Math.min(j+1,P.length-1))):K.key==="ArrowUp"?(K.preventDefault(),x(j=>Math.max(j-1,0))):K.key==="Enter"&&P[h]?(K.preventDefault(),G(P[h])):K.key==="Escape"&&f(!1)}},className:`w-full rounded border px-3 py-2 text-sm font-semibold focus:outline-none ${c?"border-slate-300 bg-slate-100 text-slate-500 cursor-not-allowed opacity-60":"border-slate-300 bg-white text-slate-800 focus:border-blue-500"}`}),n.jsx("button",{type:"button",tabIndex:-1,disabled:c,onPointerDown:K=>{c||(K.preventDefault(),f(j=>!j))},className:`absolute right-2 top-1/2 -translate-y-1/2 p-1 ${c?"text-slate-300 cursor-not-allowed":"text-slate-500 cursor-pointer"}`,children:"▼"}),!c&&A&&P.length>0&&n.jsx("ul",{className:"absolute z-30 mt-1 max-h-56 w-full overflow-auto rounded-lg border border-slate-300 bg-white shadow-xl",children:P.map((K,j)=>n.jsx("li",{onClick:()=>{G(K)},onMouseDown:z=>{z.preventDefault()},className:`cursor-pointer px-3.5 py-2 text-xs sm:text-sm transition ${j===h?"bg-blue-100 font-semibold text-blue-900":K.toLowerCase()===l.toLowerCase()?"bg-slate-100 font-bold text-slate-900":"hover:bg-slate-100 text-slate-800"}`,children:mt(K)},K))})]})}const Wa=[{key:"staffName",label:"Staff Name",bn:"স্টাফ",isNumeric:!1},{key:"loan",label:"Loan",bn:"ঋণ",isNumeric:!0,color:"text-amber-300"},{key:"rebate",label:"Rebate",bn:"রিবেট",isNumeric:!0,color:"text-amber-200"},{key:"savings",label:"Savings",bn:"সঞ্চয়",isNumeric:!0,color:"text-emerald-300"},{key:"dps",label:"DPS",bn:"ডিপিএস",isNumeric:!0,color:"text-sky-300"},{key:"admission",label:"Admission",bn:"ভর্তি",isNumeric:!0,color:"text-cyan-300"},{key:"passbook",label:"Passbook",bn:"পাশবই",isNumeric:!0,color:"text-indigo-300"},{key:"savingsAdjust",label:"Savings Adjust",bn:"সঞ্চয় ফেরত",isNumeric:!0,color:"text-rose-300"},{key:"nogodReturn",label:"Nogod Return",bn:"নগদ ফেরত",isNumeric:!0,color:"text-rose-400"}];function b5({open:l,activeField:o,values:u,staffList:c,onFieldSelect:d,onValueChange:A,onSave:f,onReset:h,onClose:x,isEdit:L=!1}){if(!l)return null;const y=Wa.findIndex(k=>k.key===o),p=u[o]||"",w=()=>{o!=="staffName"&&/[+\-*/]/.test(p)&&A(o,qe(p));const k=(y-1+Wa.length)%Wa.length;d(Wa[k].key)},P=()=>{o!=="staffName"&&/[+\-*/]/.test(p)&&A(o,qe(p));const k=(y+1)%Wa.length;d(Wa[k].key)},G=k=>{o!=="staffName"&&(!p||p==="0"?A(o,k):A(o,p+k))},K=k=>{if(o!=="staffName"){if(!p||p==="0"){k==="-"&&A(o,"-");return}if(/[+\-*/]$/.test(p)){A(o,p.slice(0,-1)+k);return}A(o,p+k)}},j=()=>{if(o==="staffName")return;const k=qe(p);A(o,k)},z=()=>{o!=="staffName"&&(!p||p==="0"?A(o,"0"):/[+\-*/]$/.test(p)?A(o,p+"0"):A(o,p+"00"))},ce=()=>{o!=="staffName"&&(!p||p==="0"?A(o,"0"):/[+\-*/]$/.test(p)?A(o,p+"0"):A(o,p+"000"))},M=()=>{if(o==="staffName"){A("staffName","");return}p.length<=1?A(o,""):A(o,p.slice(0,-1))},te=k=>{A("staffName",k),d("loan")};return r2.useEffect(()=>{if(!l)return;const k=J=>{J.target instanceof HTMLTextAreaElement||J.target instanceof HTMLSelectElement||J.target instanceof HTMLInputElement&&!J.target.readOnly||(J.key>="0"&&J.key<="9"?(J.preventDefault(),G(J.key)):J.key==="+"||J.key==="-"||J.key==="*"||J.key==="/"?(J.preventDefault(),K(J.key)):J.key==="="?(J.preventDefault(),j()):J.key==="Backspace"?(J.preventDefault(),M()):J.key==="Tab"?(J.preventDefault(),J.shiftKey?w():P()):J.key==="ArrowDown"||J.key==="ArrowRight"?(J.preventDefault(),P()):J.key==="ArrowUp"||J.key==="ArrowLeft"?(J.preventDefault(),w()):J.key==="Enter"?(J.preventDefault(),/[+\-*/]/.test(p)?j():o==="nogodReturn"?f():P()):J.key==="Escape"&&(J.preventDefault(),x()))};return window.addEventListener("keydown",k),()=>window.removeEventListener("keydown",k)},[l,o,p,y]),n.jsx("div",{className:"fixed bottom-0 left-0 right-0 z-50 bg-slate-950/95 text-white shadow-2xl border-t-4 border-indigo-600 backdrop-blur-md animate-in slide-in-from-bottom duration-200",children:n.jsxs("div",{className:"mx-auto max-w-xl px-2 sm:px-3 pt-2 pb-3",children:[n.jsx("div",{className:"pb-1.5 overflow-x-auto no-scrollbar flex items-center gap-1",children:Wa.map(k=>{const J=k.key===o,ue=u[k.key],C=ue&&k.isNumeric?qe(ue):ue;return n.jsxs("button",{type:"button",onClick:()=>{o!=="staffName"&&/[+\-*/]/.test(p)&&A(o,qe(p)),d(k.key)},className:`rounded-lg px-2.5 py-1 text-[11px] font-bold whitespace-nowrap shrink-0 transition cursor-pointer border ${J?"bg-amber-400 text-slate-950 border-amber-300 shadow-md ring-2 ring-amber-300/40":"bg-slate-800/90 text-slate-300 hover:bg-slate-700 border-slate-700"}`,children:[n.jsx("span",{children:k.label}),C&&k.isNumeric&&Number(C)>0&&n.jsxs("span",{className:"ml-1 opacity-90 font-mono text-[10px]",children:["(",de(Number(C)),")"]}),C&&!k.isNumeric&&n.jsxs("span",{className:"ml-1 opacity-90 text-[10px]",children:["(",C,")"]})]},k.key)})}),o==="staffName"?n.jsxs("div",{className:"my-2 rounded-xl bg-slate-900 p-2.5 border border-slate-800",children:[n.jsx("div",{className:"mb-2 text-xs font-bold text-slate-400",children:"Select Staff Member (স্টাফ নির্বাচন করুন):"}),n.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-2",children:c.map(k=>n.jsxs("button",{type:"button",onClick:()=>te(k),className:`rounded-xl py-2.5 text-xs sm:text-sm font-bold text-center border transition cursor-pointer active:scale-95 ${u.staffName.toLowerCase()===k.toLowerCase()?"bg-emerald-600 text-white border-emerald-400 shadow-lg ring-2 ring-emerald-400":"bg-slate-800 text-slate-200 hover:bg-slate-700 border-slate-700"}`,children:["👤 ",k]},k))})]}):n.jsxs("div",{className:"flex gap-2 my-1.5",children:[n.jsxs("div",{className:"flex-1 grid grid-cols-3 gap-1.5",children:[n.jsx("button",{type:"button",onClick:()=>G("7"),className:"rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-600 active:scale-95 py-2.5 text-lg sm:text-xl font-bold font-mono text-white shadow border border-slate-700 transition cursor-pointer",children:"7"}),n.jsx("button",{type:"button",onClick:()=>G("8"),className:"rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-600 active:scale-95 py-2.5 text-lg sm:text-xl font-bold font-mono text-white shadow border border-slate-700 transition cursor-pointer",children:"8"}),n.jsx("button",{type:"button",onClick:()=>G("9"),className:"rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-600 active:scale-95 py-2.5 text-lg sm:text-xl font-bold font-mono text-white shadow border border-slate-700 transition cursor-pointer",children:"9"}),n.jsx("button",{type:"button",onClick:()=>G("4"),className:"rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-600 active:scale-95 py-2.5 text-lg sm:text-xl font-bold font-mono text-white shadow border border-slate-700 transition cursor-pointer",children:"4"}),n.jsx("button",{type:"button",onClick:()=>G("5"),className:"rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-600 active:scale-95 py-2.5 text-lg sm:text-xl font-bold font-mono text-white shadow border border-slate-700 transition cursor-pointer",children:"5"}),n.jsx("button",{type:"button",onClick:()=>G("6"),className:"rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-600 active:scale-95 py-2.5 text-lg sm:text-xl font-bold font-mono text-white shadow border border-slate-700 transition cursor-pointer",children:"6"}),n.jsx("button",{type:"button",onClick:()=>G("1"),className:"rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-600 active:scale-95 py-2.5 text-lg sm:text-xl font-bold font-mono text-white shadow border border-slate-700 transition cursor-pointer",children:"1"}),n.jsx("button",{type:"button",onClick:()=>G("2"),className:"rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-600 active:scale-95 py-2.5 text-lg sm:text-xl font-bold font-mono text-white shadow border border-slate-700 transition cursor-pointer",children:"2"}),n.jsx("button",{type:"button",onClick:()=>G("3"),className:"rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-600 active:scale-95 py-2.5 text-lg sm:text-xl font-bold font-mono text-white shadow border border-slate-700 transition cursor-pointer",children:"3"}),n.jsx("button",{type:"button",onClick:()=>G("0"),className:"rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-600 active:scale-95 py-2 text-lg sm:text-xl font-bold font-mono text-white shadow border border-slate-700 transition cursor-pointer",children:"0"}),n.jsx("button",{type:"button",onClick:z,className:"rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-600 active:scale-95 py-2 text-sm sm:text-base font-bold font-mono text-slate-200 shadow border border-slate-700 transition cursor-pointer",children:"00"}),n.jsx("button",{type:"button",onClick:ce,className:"rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-600 active:scale-95 py-2 text-xs sm:text-sm font-bold font-mono text-slate-200 shadow border border-slate-700 transition cursor-pointer",children:"000"})]}),n.jsxs("div",{className:"w-16 sm:w-20 flex flex-col gap-1.5",children:[n.jsx("button",{type:"button",onClick:M,className:"flex-1 rounded-xl bg-rose-900/80 hover:bg-rose-800 active:bg-rose-700 active:scale-95 text-base sm:text-lg font-bold text-rose-200 shadow border border-rose-700 transition cursor-pointer flex items-center justify-center",title:"একটি অক্ষর মুছুন",children:"⌫"}),n.jsx("button",{type:"button",onClick:()=>K("/"),className:"flex-1 rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-600 active:scale-95 text-base sm:text-lg font-black text-amber-300 shadow border border-slate-700 transition cursor-pointer flex items-center justify-center",title:"ভাগ (/)",children:"÷"}),n.jsx("button",{type:"button",onClick:()=>K("*"),className:"flex-1 rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-600 active:scale-95 text-base sm:text-lg font-black text-amber-300 shadow border border-slate-700 transition cursor-pointer flex items-center justify-center",title:"গুণ (*)",children:"×"}),n.jsx("button",{type:"button",onClick:()=>K("-"),className:"flex-1 rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-600 active:scale-95 text-base sm:text-lg font-black text-amber-300 shadow border border-slate-700 transition cursor-pointer flex items-center justify-center",title:"বিয়োগ (-)",children:"−"}),n.jsx("button",{type:"button",onClick:()=>K("+"),className:"flex-1 rounded-xl bg-amber-600 hover:bg-amber-500 active:bg-amber-700 active:scale-95 text-lg sm:text-xl font-black text-white shadow border border-amber-500 transition cursor-pointer flex items-center justify-center",title:"যোগ (+)",children:"+"}),n.jsx("button",{type:"button",onClick:j,className:"flex-1 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 active:scale-95 text-lg sm:text-xl font-black text-white shadow border border-emerald-500 transition cursor-pointer flex items-center justify-center ring-2 ring-emerald-400/30",title:"যোগফল হিসাব করতে সমান (=)",children:"="})]})]}),n.jsxs("div",{className:"grid grid-cols-5 gap-1.5 pt-1.5 border-t border-slate-800",children:[n.jsxs("button",{type:"button",onClick:h,className:"rounded-xl bg-amber-600 hover:bg-amber-500 active:bg-amber-700 active:scale-95 py-2 text-[11px] sm:text-xs font-black text-white shadow flex items-center justify-center gap-1 cursor-pointer transition ring-1 ring-amber-400/40",title:"সব রিসেট করুন",children:[n.jsx("span",{children:"🔄"}),n.jsx("span",{children:"রিসেট"})]}),n.jsxs("button",{type:"button",onClick:f,className:"rounded-xl bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 active:scale-95 py-2 text-[11px] sm:text-xs font-black text-white shadow flex items-center justify-center gap-1 cursor-pointer transition ring-1 ring-emerald-400/40",title:L?"রিপোর্ট আপডেট করুন":"রিপোর্ট সেভ করুন",children:[n.jsx("span",{children:"💾"}),n.jsx("span",{children:L?"আপডেট":"সেভ"})]}),n.jsxs("button",{type:"button",onClick:x,className:"rounded-xl bg-red-600 hover:bg-red-700 active:bg-red-800 active:scale-95 py-2 text-[11px] sm:text-xs font-black text-white shadow-lg flex items-center justify-center gap-1 cursor-pointer transition border border-red-500 ring-2 ring-red-500/40",title:"কিবোর্ড ক্লোজ করুন",children:[n.jsx("span",{children:"✖"}),n.jsx("span",{children:"ক্লোজ"})]}),n.jsxs("button",{type:"button",onClick:w,className:"rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-600 active:scale-95 py-2 text-[11px] sm:text-xs font-bold text-slate-200 border border-slate-700 flex items-center justify-center gap-1 cursor-pointer transition",title:"এক ঘর পূর্বের (Prev)",children:[n.jsx("span",{children:"◀"}),n.jsx("span",{children:"পূর্বের"})]}),n.jsxs("button",{type:"button",onClick:P,className:"rounded-xl bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:scale-95 py-2 text-[11px] sm:text-xs font-bold text-white shadow flex items-center justify-center gap-1 cursor-pointer transition",title:"এক ঘর পরের (Next)",children:[n.jsx("span",{children:"পরের"}),n.jsx("span",{children:"▶"})]})]})]})})}const up="gobra_auth_users",dp="gobra_auth_branches",xc="gobra_auth_session",ar={mobile:"013241655828",password:"gobra1234",name:"Gobra Office"};function Qm(l,o){try{const u=window.localStorage.getItem(l);return u?JSON.parse(u)??o:o}catch{return o}}function hc(l,o){try{window.localStorage.setItem(l,JSON.stringify(o))}catch(u){console.error("[auth] সংরক্ষণ করা যায়নি",u)}}const Ts=l=>{let o=String(l??"").replace(/[^0-9]/g,"");return o.length===14&&o.startsWith("880")?o=o.slice(3):o.length===13&&o.startsWith("88")?o=o.slice(2):o.length===10&&o.startsWith("1")&&(o=`0${o}`),o},ic=l=>{const o=Ts(l);return o.length>=6&&o.length<=15},Wh=l=>String(l||"").trim().toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"").slice(0,24)||`br-${Date.now().toString(36)}`;async function $m(l,o){var A;const u=`${o}::${l}`;try{const f=(A=globalThis.crypto)==null?void 0:A.subtle;if(f){const h=await f.digest("SHA-256",new TextEncoder().encode(u));return Array.from(new Uint8Array(h)).map(x=>x.toString(16).padStart(2,"0")).join("")}}catch{}let c=2166136261,d=16777619;for(let f=0;f<u.length;f++)c=(c^u.charCodeAt(f))*16777619>>>0,d=d+u.charCodeAt(f)*31+f>>>0;return`f${c.toString(16).padStart(8,"0")}${d.toString(16).padStart(8,"0")}`}const or=()=>{const l=Qm(up,[]);return Array.isArray(l)?l:[]},bc=()=>{const l=Qm(dp,[]);return!Array.isArray(l)||l.length===0?[{id:Hn,name:uc,createdAt:new Date().toISOString()}]:l},Ao=l=>hc(up,l),mp=l=>hc(dp,l),Ar=l=>{const o=String(l),u=Ts(l);return or().find(c=>Ts(c.mobile)===u||c.id===o)||null},p5=l=>bc().find(o=>o.id===l)||null,pc=()=>{var l;return ir()?uc:((l=p5(Ds()))==null?void 0:l.name)||Ds().toUpperCase()},g5=()=>ir()?`${uc} Branch.`:`${pc().toUpperCase()} Branch.`,Wm=()=>{const l=Qm(xc,null);if(!l||!l.userId)return null;const o=Ar(l.userId);return o?{userId:l.userId,branchId:o.branchId,loginAt:l.loginAt}:null},R5=()=>{const l=Wm();return l?Ar(l.userId):null};function Ap(l){const o={userId:l.id,branchId:l.branchId,loginAt:new Date().toISOString()};hc(xc,o),cr(l.branchId);const u=or().map(c=>c.id===l.id?{...c,lastLoginAt:o.loginAt}:c);return Ao(u),o}function $i(l,o,u){const c=String(l),d=String(o||Hn);if(Ar(c))Ao(or().map(f=>f.id===c?{...f,branchId:d,...u!=null&&u.name&&u.name.trim()?{name:u.name.trim()}:{}}:f));else{const f=/[a-z]@/i.test(c);Ao([...or(),{id:c,name:((u==null?void 0:u.name)||"").trim()||c,mobile:f?"":c,branchId:d,passHash:"",createdAt:new Date().toISOString(),lastLoginAt:new Date().toISOString()}])}const A={userId:c,branchId:d,loginAt:new Date().toISOString()};return hc(xc,A),cr(A.branchId),A}function S5(){try{window.localStorage.removeItem(xc)}catch{}cr(Hn)}let Ki=null;function gc(){return Ki||(Ki=y5().finally(()=>{Ki=null})),Ki}async function y5(){try{const l=bc();if(l.some(u=>u.id===Hn)||mp([{id:Hn,name:uc,createdAt:new Date().toISOString()},...l]),Ar(ar.mobile))return;const o=await $m(ar.password,ar.mobile);Ao([...or(),{id:Ts(ar.mobile),name:ar.name,mobile:Ts(ar.mobile),branchId:Hn,passHash:o,createdAt:new Date().toISOString()}])}catch(l){console.error("[auth] ডিফল্ট ইউজার তৈরি করা যায়নি",l)}}async function N5(l,o){await gc();const u=Ts(l);if(!ic(u))return{ok:!1,error:"সঠিক মোবাইল নম্বর দিন (কমপক্ষে ৬ ডিজিট) — এটাই ইউজার আইডি।"};if(!o)return{ok:!1,error:"পাসওয়ার্ড দিন।"};const c=Ar(u);return c?await $m(o,Ts(c.mobile))!==c.passHash?{ok:!1,error:"পাসওয়ার্ড মিলছে না।"}:{ok:!0,session:Ap(c)}:{ok:!1,error:"এই মোবাইল নম্বরে কোনো ইউজার নেই — আগে সাইন আপ করুন।"}}async function v5(l){await gc();const o=String(l.name||"").trim(),u=Ts(l.mobile),c=String(l.branchName||"").trim(),d=String(l.password||""),A=String(l.confirmPassword||"");if(o.length<2)return{ok:!1,error:"নাম লিখুন (কমপক্ষে ২ অক্ষর)।"};if(!ic(u))return{ok:!1,error:"সঠিক মোবাইল নম্বর দিন (কমপক্ষে ৬ ডিজিট) — এটাই ইউজার আইডি।"};if(!c)return{ok:!1,error:"অফিস / শাখার নাম লিখুন।"};if(d.length<6)return{ok:!1,error:"পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে।"};if(d!==A)return{ok:!1,error:"পাসওয়ার্ড ও কনফার্ম পাসওয়ার্ড মিলছে না।"};if(Ar(u))return{ok:!1,error:"এই মোবাইল নম্বর আগেই সাইন আপ করা আছে — সাইন ইন করুন।"};const f=bc(),h=c.toLowerCase();let x=f.find(p=>p.name.trim().toLowerCase()===h)||f.find(p=>p.id===Wh(c));x||(x={id:Wh(c),name:c,createdAt:new Date().toISOString(),createdBy:u},mp([...f,x]));const L=await $m(d,u),y={id:u,name:o,mobile:u,branchId:x.id,passHash:L,createdAt:new Date().toISOString()};return Ao([...or(),y]),{ok:!0,session:Ap(y)}}function L5(l,o){const u=l.map(A=>{if(!A.el)return"";const f=A.el.cloneNode(!0),h=A.el.querySelectorAll("input, select, textarea"),x=f.querySelectorAll("input, select, textarea");return h.forEach((L,y)=>{const p=x[y];if(!p)return;const w=document.createElement("span");w.style.fontWeight="600",w.textContent=L.value??"",p.replaceWith(w)}),`<h3 class="sec-h">${Pi(A.heading)}</h3>
${f.outerHTML}`}).join(`
`),c=`<!doctype html>
<html lang="bn"><head><meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>${Pi(o.title)}</title>
<style>
  @page { size: A4 landscape; margin: 7mm 8mm; }
  * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; box-sizing: border-box; }
  body { font-family: Georgia, 'Times New Roman', serif; color: #0f172a; margin: 0; padding: 2px; }
  .hdr { text-align: center; margin-bottom: 6px; }
  .hdr h2 { margin: 0 0 2px; font-size: 19px; }
  .hdr p { margin: 0; font-size: 11px; font-weight: 700; color: #334155; }
  .sec-h { text-align: center; margin: 9px 0 3px; font-size: 14.5px; color: #0f172a; border-bottom: 1.6px solid #b8a280; padding-bottom: 1px; page-break-after: avoid; }
  table { width: 100%; border-collapse: collapse; font-size: 10px; page-break-inside: avoid; }
  th, td { border: 1px solid #999 !important; padding: 2.6px 4px; }
  thead th, thead td { background: #fdecd2 !important; font-weight: 800; text-align: center; }
  tfoot th, tfoot td { background: #f1dcb6 !important; font-weight: 800; }
  td { font-weight: 600; }
  tr:last-child td:first-child { font-weight: 800; }
</style></head>
<body>
  <div class="hdr">
    <h2>${Pi(o.title)}</h2>
    ${o.subtitle?`<p>${Pi(o.subtitle)}</p>`:""}
  </div>
  ${u}
  <script>window.addEventListener("load", function(){ setTimeout(function(){ window.focus(); window.print(); }, 150); });<\/script>
</body></html>`,d=window.open("","_blank","width=1100,height=760");if(!d){window.print();return}d.document.write(c),d.document.close()}function Pi(l){return String(l||"").replace(/[&<>"']/g,o=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[o]||o)}const eb=()=>ss().map(l=>l.name);function tb(){if(typeof window>"u")return!1;const l=navigator.userAgent||"",o=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile/i.test(l),u="ontouchstart"in window||navigator.maxTouchPoints&&navigator.maxTouchPoints>1,c=window.innerWidth<=820;return o||u&&c}const _i=["loan","rebate","savings","dps","admission","passbook","savingsAdjust","nogodReturn"],nb=(l,o)=>{const u=l.toLowerCase().trim(),c=o.toLowerCase().trim();return u===c||u.includes(c)||c.includes(u)};function O5({selectedDate:l}){const o=b.useRef(null),u=b.useRef(null),c=b.useRef(null),[d,A]=b.useState([]),[f,h]=b.useState({staffName:"",loan:"",rebate:"",savings:"",dps:"",admission:"",passbook:"",savingsAdjust:"",nogodReturn:""}),[x,L]=b.useState(null),[y,p]=b.useState(null),[w,P]=b.useState(""),[G,K]=b.useState("default"),[j,z]=Vm(),[ce,M]=b.useState(!1),[te,k]=b.useState(!1),[J,ue]=b.useState(!1),[C,ne]=b.useState(()=>{try{const D=localStorage.getItem("gobra_floating_pos_report");if(D)return JSON.parse(D)}catch{}return null}),re=b.useRef(null),ae=b.useRef(!1),fe=b.useRef({x:0,y:0,elemX:0,elemY:0,w:50,h:50,hasMoved:!1}),pe=D=>{var Le;if(D.button!==0&&D.pointerType==="mouse")return;const X=(Le=re.current)==null?void 0:Le.getBoundingClientRect();if(X){fe.current={x:D.clientX,y:D.clientY,elemX:X.left,elemY:X.top,w:X.width,h:X.height,hasMoved:!1},ae.current=!0;try{D.currentTarget.setPointerCapture(D.pointerId)}catch{}}},B=b.useRef(0),O=()=>{const D=Date.now();D-B.current<250||(B.current=D,k(X=>!X),ue(!1))},S=D=>{if(!ae.current)return;const X=D.clientX-fe.current.x,Le=D.clientY-fe.current.y,Ge=Math.hypot(X,Le);if(!fe.current.hasMoved&&Ge>6&&(fe.current.hasMoved=!0),fe.current.hasMoved){const jt=Math.max(10,window.innerWidth-fe.current.w-6),Xe=Math.max(10,window.innerHeight-fe.current.h-6),on=Math.max(6,Math.min(jt,fe.current.elemX+X)),It=Math.max(6,Math.min(Xe,fe.current.elemY+Le));ne({x:on,y:It})}},I=D=>{var X;if(ae.current){ae.current=!1;try{D.currentTarget.releasePointerCapture(D.pointerId)}catch{}if(fe.current.hasMoved){const Le=(X=re.current)==null?void 0:X.getBoundingClientRect();if(Le){const Ge={x:Math.round(Le.left),y:Math.round(Le.top)};try{localStorage.setItem("gobra_floating_pos_report",JSON.stringify(Ge))}catch{}}}else O()}},q=D=>{if(fe.current.hasMoved){D.stopPropagation(),fe.current.hasMoved=!1;return}O()},[ee,U]=b.useState(tb);b.useEffect(()=>{const D=()=>U(tb());return window.addEventListener("resize",D),()=>window.removeEventListener("resize",D)},[]);const[H,N]=b.useState(!1),[oe,R]=b.useState(()=>{try{return localStorage.getItem("gobra_staff_entry_collapsed")!=="0"}catch{return!0}}),$=D=>{R(D);try{localStorage.setItem("gobra_staff_entry_collapsed",D?"1":"0")}catch{}},[ge,be]=b.useState("loan"),[ye,Ie]=b.useState(0),[Y,Q]=b.useState(0),[Re,Te]=b.useState(0),[rt,At]=b.useState([]),[ft,et]=b.useState([]),[ve,st]=b.useState(!1),[St,gt]=b.useState(ts()),[yt,Ae]=b.useState(!1),Ue=(D,X=!1)=>{const Le=_i.indexOf(D);if(Le>=0&&Le<_i.length-1){const Ge=_i[Le+1],jt=X?`edit-input-${Ge}`:`input-${Ge}`,Xe=document.getElementById(jt);Xe&&(Xe.focus(),Xe.select())}else Le===_i.length-1&&(X?Nt():me())},lt=()=>{const D=Nn(l);A(D);const X=Fn(l);Ie(X.prevCash),Q(X.prevBank),Te(X.cash);const Le=ha("disburse");et(Le.map(jt=>jt.name.toLowerCase().trim())),At(sn());const Ge=Oe(l);st(Ge),Ge&&(N(!1),L(null))};b.useEffect(()=>{lt();const D=()=>lt(),X=()=>lt();window.addEventListener("tx-changed",D),window.addEventListener("day-close-changed",X);const Le=()=>gt(ts());return window.addEventListener("kallyan-rule-changed",Le),()=>{window.removeEventListener("tx-changed",D),window.removeEventListener("day-close-changed",X),window.removeEventListener("kallyan-rule-changed",Le)}},[l]),b.useEffect(()=>{if(!H||!ee)return;const D=setTimeout(()=>{const X=x?`edit-field-${ge}`:`field-${ge}`,Le=document.getElementById(X);Le&&Le.scrollIntoView({behavior:"smooth",block:"center"})},50);return()=>clearTimeout(D)},[ge,H,x,ee]);const[Ot,ln]=b.useState(!1),Zt=()=>{ln(!0),window.setTimeout(()=>ln(!1),900)},Dt=D=>{if(ve){Zt();return}be(D),ee&&N(!0)},me=()=>{if(ve){Zt();return}if(!_t(l)){alert(`⚠️ এই তারিখের (${l}) কর্মদিবস এখনও শুরু (Day Open) করা হয়নি। কোনো রিপোর্ট এন্ট্রি করার পূর্বে দিনটি Day Open করুন।`),window.dispatchEvent(new CustomEvent("open-day-open-modal"));return}const D=pt(l);if(D.blocked){alert(`⚠️ ${D.reason||"দুটি কর্মদিবসের মধ্যবর্তী বন্ধের দিনে কোনো নতুন রিপোর্ট এন্ট্রি করা যাবে না।"}`);return}if(!f.staffName.trim()){alert("দয়া করে স্টাফ নির্বাচন করুন"),be("staffName"),ee&&N(!0);return}ZR({reportDate:l,staffName:f.staffName.trim(),loan:qe(f.loan)||"0",rebate:qe(f.rebate)||"0",savings:qe(f.savings)||"0",dps:qe(f.dps)||"0",admission:qe(f.admission)||"0",passbook:qe(f.passbook)||"0",savingsAdjust:qe(f.savingsAdjust)||"0",nogodReturn:qe(f.nogodReturn)||"0"}),h({staffName:"",loan:"",rebate:"",savings:"",dps:"",admission:"",passbook:"",savingsAdjust:"",nogodReturn:""}),be("staffName"),lt()},we=()=>{if(ve){Zt();return}h({staffName:"",loan:"",rebate:"",savings:"",dps:"",admission:"",passbook:"",savingsAdjust:"",nogodReturn:""}),be("staffName")},Nt=()=>{if(!x||!x.id)return;if(ve){Zt();return}const D=pt(l);if(D.blocked){alert(`⚠️ ${D.reason||"দুটি কর্মদিবসের মধ্যবর্তী বন্ধের দিনে কোনো রিপোর্ট পরিবর্তন করা যাবে না।"}`);return}zR({...x,loan:qe(String(x.loan||"0"))||"0",rebate:qe(String(x.rebate||"0"))||"0",savings:qe(String(x.savings||"0"))||"0",dps:qe(String(x.dps||"0"))||"0",admission:qe(String(x.admission||"0"))||"0",passbook:qe(String(x.passbook||"0"))||"0",savingsAdjust:qe(String(x.savingsAdjust||"0"))||"0",nogodReturn:qe(String(x.nogodReturn||"0"))||"0"}),L(null),p(null),N(!1),lt()},wn=D=>{if(ve){Zt();return}confirm("Delete this staff report?")&&(FR(D),lt())},sa=w?d.filter(D=>D.staffName.toLowerCase()===w.toLowerCase()):d,tt=(()=>{if(!G||G==="default")return sa;const D=[...sa],X=G==="name-asc"?1:-1;return D.sort((Le,Ge)=>X*String(Le.staffName).localeCompare(String(Ge.staffName)))})(),la=tt.reduce((D,X)=>D+Number(X.loan||0),0),hl=tt.reduce((D,X)=>D+Number(X.rebate||0),0),bl=la+hl,Tt=tt.reduce((D,X)=>D+Number(X.savings||0),0),ra=tt.reduce((D,X)=>D+Number(X.dps||0),0),ls=Tt+ra,Ks=tt.reduce((D,X)=>D+Number(X.passbook||0),0),oa=tt.reduce((D,X)=>D+Number(X.admission||0),0),ka=la+ls+Ks+oa,Ua=tt.reduce((D,X)=>D+Number(X.savingsAdjust||0),0),Da=tt.reduce((D,X)=>D+Number(X.nogodReturn||0),0),Ps=Ua+Da,pa=new Set,kt=[...eb(),...d.map(D=>D.staffName.trim())].map(D=>String(D||"").trim()).filter(D=>D!==""&&!pa.has(D.toLowerCase())&&pa.add(D.toLowerCase())).sort((D,X)=>Em(D,X,j)),En=rt.filter(D=>D.type==="receive"&&D.txDate===l);let Ct=0,_s=0,ia=0;const rs=kt.map(D=>{const X=d.filter(vt=>vt.staffName.toLowerCase()===D.toLowerCase()),Le=X.reduce((vt,Xt)=>vt+Number(Xt.loan||0),0);X.reduce((vt,Xt)=>vt+Number(Xt.rebate||0),0);const Ge=X.reduce((vt,Xt)=>vt+Number(Xt.savings||0),0),jt=X.reduce((vt,Xt)=>vt+Number(Xt.dps||0),0),Xe=X.reduce((vt,Xt)=>vt+Number(Xt.passbook||0),0),on=X.reduce((vt,Xt)=>vt+Number(Xt.admission||0),0),It=Le+Ge+jt+Xe+on,Ft=X.reduce((vt,Xt)=>vt+Number(Xt.savingsAdjust||0),0),Bt=En.filter(vt=>nb(vt.category,D)).reduce((vt,Xt)=>vt+(Number(Xt.amount)||0),0),Jt=Bt+Ft-It;return Ct+=It,_s+=Bt,ia+=Ft,{name:D,todayAday:It,todayDeposite:Bt,savingsReturn:Ft,diff:Jt}}),Cn=_s+ia-Ct,Ta=rt.filter(D=>D.txDate===l),ga=Ta.filter(D=>D.type==="receive"),vn=Ta.filter(D=>D.type==="payment"),os=ka,Gt=ye,pn=ga.filter(D=>D.category.toLowerCase().includes("bank withdraw")).reduce((D,X)=>D+(Number(X.amount)||0),0),Ra=vn.filter(D=>{const X=D.category.toLowerCase().trim();return X.includes("fund payment")||X.includes("fund transfer")||X.includes("fund")&&!X.includes("receive")?!1:ft.includes(X)||X.includes("jagoron")||X.includes("agrossor")||X.includes("buni")||X.includes("sufolon")||X.includes("mfce")||!!(D.subCategory&&D.subCategory.trim().length>0)}),v=Ra.reduce((D,X)=>D+ur(Number(X.amount)||0,X.category,St),0),ie=Ra.length*5,le=ga.filter(D=>{const X=D.category.toLowerCase().trim();return!(X.includes("bank withdraw")||X.includes("fund receive")||X.includes("welfare")||X.includes("kallayan")||X.includes("loan form")||eb().some(Le=>nb(X,Le)))}).reduce((D,X)=>D+(Number(X.amount)||0),0),Se=Ra.reduce((D,X)=>D+(Number(X.amount)||0),0),He=vn.filter(D=>D.category.toLowerCase().includes("bank deposit")||D.category.toLowerCase().includes("bank deposite")).reduce((D,X)=>D+(Number(X.amount)||0),0),De=Ps,rn=vn.filter(D=>{const X=D.category.toLowerCase().trim();return X.includes("fund payment")||X.includes("fund transfer")||X.includes("fund")&&!X.includes("receive")}).reduce((D,X)=>D+(Number(X.amount)||0),0),Fe=vn.filter(D=>{const X=D.category.toLowerCase().trim();return!(Ra.some(Le=>Le.id===D.id)||X.includes("bank deposit")||X.includes("bank deposite")||X.includes("fund payment")||X.includes("fund transfer")||X.includes("fund")&&!X.includes("receive"))}).reduce((D,X)=>D+(Number(X.amount)||0),0),Jn=[{label:"Today All Aday",amount:os},{label:"Hand Cash",amount:Gt},{label:"Bank Withdraw",amount:pn},{label:"Kallayan",amount:v},{label:"Loan Form",amount:ie},{label:"Others Income",amount:le}].filter(D=>D.amount>0),zt=[{label:"Disburse",amount:Se},{label:"Bank Deposit",amount:He},{label:"Savings Return",amount:De},{label:"Fund Payment",amount:rn},{label:"Others Expense",amount:Fe}].filter(D=>D.amount>0),nt=Jn.reduce((D,X)=>D+X.amount,0),Je=zt.reduce((D,X)=>D+X.amount,0),ot=Math.max(Jn.length,zt.length),Et=Zm(l),Mn=ve&&Et?Math.round(Number(Et.closingCash)||0):nt-Je,Zs=ga.filter(D=>D.category.toLowerCase().includes("fund receive")).reduce((D,X)=>D+(Number(X.amount)||0),0),Rc=ve&&Et?Math.round(Number(Et.closingBank)||0):Y-pn+He+Zs,ho=Je-He,fr=pn,zs=fr-ho,is=["Sakib","Mintu","Alamgir","Monir"].map(D=>{const X=rs.find(Le=>Le.name.toLowerCase()===D.toLowerCase());return{name:D,diff:X?Math.round(X.diff):0}});return n.jsxs("div",{className:`space-y-6 ${ee&&H?"pb-80":""}`,children:[typeof document<"u"&&fc.createPortal(n.jsx("div",{ref:re,onPointerDown:pe,onPointerMove:S,onPointerUp:I,onPointerCancel:I,onClick:q,style:C?{transform:`translate3d(${C.x}px, ${C.y}px, 0)`,left:0,top:0,right:"auto",bottom:"auto",touchAction:"none"}:{right:"16px",bottom:ee&&H?"340px":"75px",touchAction:"none"},className:"fixed z-[60] select-none print:hidden drop-shadow-2xl cursor-grab active:cursor-grabbing touch-none block",children:te?n.jsxs("div",{className:"bg-white shadow-2xl rounded-2xl border-2 border-purple-900 overflow-hidden min-w-[240px] touch-none",children:[n.jsxs("div",{className:"bg-purple-900 text-white px-3.5 py-2 flex items-center justify-between gap-3 text-xs font-bold cursor-grab active:cursor-grabbing select-none",onClick:q,title:"ধরে যেকোনো জায়গায় সরানো যাবে / ক্লিক করলে বন্ধ হবে",children:[n.jsxs("div",{className:"flex items-center gap-1.5",children:[n.jsx("span",{className:"text-slate-300",children:"⠿"}),n.jsx("span",{children:"👥"}),n.jsx("span",{children:"Staff Dena / Poana"})]}),n.jsx("div",{className:"flex items-center gap-1",children:n.jsx("button",{type:"button",onPointerDown:D=>D.stopPropagation(),onPointerUp:D=>{D.stopPropagation(),k(!1)},onClick:D=>{D.stopPropagation(),k(!1)},className:"hover:bg-purple-800 rounded px-1.5 py-0.5 text-xs cursor-pointer",title:"বক্স বন্ধ করুন",children:"✕"})})]}),!J&&n.jsx("div",{className:"p-1 bg-[#fdecd2]",children:n.jsxs("table",{className:"border-collapse text-center text-xs font-sans w-full",children:[n.jsx("thead",{children:n.jsx("tr",{className:"bg-[#fdecd2] border-b border-amber-300",children:is.map(D=>n.jsx("th",{className:"border border-amber-300 px-3 py-1 font-bold text-indigo-950",children:D.name},D.name))})}),n.jsx("tbody",{children:n.jsx("tr",{className:"bg-emerald-400",children:is.map(D=>n.jsx("td",{className:"border border-amber-300 px-3 py-1.5 font-black text-black font-mono",children:D.diff},D.name))})})]})})]}):n.jsxs("div",{onClick:q,className:"relative flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-purple-900 active:bg-purple-950 text-white shadow-2xl ring-2 ring-purple-400/50 cursor-grab active:cursor-grabbing touch-none select-none",title:"Staff Dena / Poana (টেনে যেকোনো দিকে সরানো যাবে / ক্লিক করলে খুলবে)",children:[n.jsx("span",{className:"text-xl sm:text-2xl leading-none select-none pointer-events-none",children:"👥"}),n.jsx("span",{className:"absolute -top-1 -right-1 flex h-4 min-w-[16px] sm:h-5 sm:min-w-[20px] items-center justify-center rounded-full bg-amber-400 px-1 text-[9px] sm:text-[10px] font-mono font-black text-purple-950 shadow pointer-events-none",children:is.length})]})}),document.body),oe?n.jsxs("button",{type:"button",onClick:()=>$(!1),className:"flex w-full cursor-pointer items-center justify-center gap-2 rounded-2xl border border-indigo-200 bg-gradient-to-r from-indigo-50 to-purple-50 px-4 py-3 shadow-sm transition hover:border-indigo-400 hover:from-indigo-100 hover:to-purple-100",title:"Staff Collection Report Entry ফর্ম খুলুন",children:[n.jsx("span",{className:"flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-base text-white shadow",children:"✏️"}),n.jsx("span",{className:"text-sm font-black text-indigo-900",children:"Staff Collection Report Entry"}),n.jsx("span",{className:"rounded-full bg-indigo-200 px-2 py-0.5 text-[10px] font-black text-indigo-800",children:"খুলতে ক্লিক করুন ▼"})]}):n.jsxs("div",{className:"rounded-2xl border border-slate-200 bg-white p-5 shadow-sm",children:[!ve&&pt(l).blocked&&n.jsxs("div",{className:"mb-4 rounded-xl border border-rose-400 bg-rose-50 p-3 text-xs sm:text-sm font-bold text-rose-900 flex items-start gap-2 shadow-xs",children:[n.jsx("span",{className:"text-base shrink-0",children:"🚫"}),n.jsxs("div",{children:[n.jsx("span",{className:"block font-black text-rose-950",children:"এই তারিখটি ব্লক (কর্মদিবসের মধ্যবর্তী বন্ধের দিন)"}),n.jsx("span",{className:"text-xs text-rose-800 font-normal mt-0.5 block",children:pt(l).reason})]})]}),n.jsxs("div",{className:"mb-4 flex flex-wrap items-center justify-between gap-2 border-b pb-3",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("h2",{className:"text-xl font-bold text-slate-900",children:"Staff Collection Report Entry"}),ve&&n.jsx("span",{className:`inline-flex shrink-0 items-center gap-1 rounded-lg border border-rose-300 bg-rose-100 px-2 py-0.5 text-[10px] font-black text-rose-700 ${Ot?"lock-pulse":""}`,title:"দিন সমাপ্ত (Day Closed) — হিসাব লক করা আছে",children:"🔒 Day Closed"})]}),n.jsxs("div",{className:"flex items-center gap-2",children:[ee&&n.jsxs("button",{type:"button",disabled:ve,onClick:()=>{if(ve){Zt();return}N(!H)},className:`rounded-xl px-3 py-1 text-xs font-bold transition flex items-center gap-1.5 shadow-xs border cursor-pointer ${ve?"bg-slate-200 text-slate-500 border-slate-300 cursor-not-allowed opacity-60":H?"bg-indigo-600 text-white border-indigo-500 shadow-indigo-300 ring-2 ring-indigo-400/40":"bg-indigo-50 text-indigo-700 hover:bg-indigo-100 border-indigo-200"}`,title:ve?"দিন সমাপ্ত (Locked)":"কাস্টম কিবোর্ড অন/অফ করুন",children:[n.jsx("span",{children:ve?"🔒 লক করা":"⌨️ কাস্টম কিবোর্ড"}),n.jsx("span",{className:`text-[10px] px-1.5 py-0.2 rounded font-mono font-bold ${ve?"bg-slate-300 text-slate-600":H?"bg-indigo-900 text-white":"bg-indigo-200 text-indigo-900"}`,children:ve?"LOCKED":H?"ON":"OFF"})]}),n.jsx("button",{type:"button",onClick:()=>$(!0),className:"rounded-lg bg-rose-600 px-2.5 py-1 text-sm font-black text-white shadow transition hover:bg-rose-700 cursor-pointer",title:"বন্ধ করুন — এন্ট্রি ফর্ম আইকনে collapse হবে",children:"✕"}),n.jsxs("div",{className:"text-xs font-mono font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded-lg border border-slate-200",children:["Date: ",l]})]})]}),n.jsxs("div",{className:"grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5",children:[n.jsxs("div",{id:"field-staffName",onClick:ee?()=>Dt("staffName"):void 0,className:`rounded-lg transition ${ee&&H&&ge==="staffName"?"ring-2 ring-indigo-500 p-0.5 bg-amber-50":""}`,children:[n.jsx("label",{className:"mb-1 block text-xs font-bold text-slate-700",children:"Staff Name"}),n.jsx(h5,{value:f.staffName,disabled:ve,readOnly:ee,onChange:D=>{ve||(h({...f,staffName:D}),ee&&be("loan"))},options:kt})]}),Wa.filter(D=>D.isNumeric).map(D=>{const X=D.key,Le=ee&&H&&ge===X,Ge=f[X]||"",jt=/[+\-*/]/.test(Ge),Xe=jt?qe(Ge):"",on=X==="savingsAdjust"||X==="nogodReturn",It=X==="loan"||X==="savings",Ft=X==="rebate";return n.jsxs("div",{id:`field-${X}`,onClick:ee?()=>Dt(X):void 0,className:`rounded-lg transition ${ee?"cursor-pointer":""}`,children:[n.jsxs("div",{className:"flex items-center justify-between mb-1",children:[n.jsx("label",{className:"text-xs font-bold text-slate-700",children:D.label}),jt&&n.jsxs("span",{className:"text-[10px] font-mono font-bold text-emerald-700 bg-emerald-100 px-1 py-0.2 rounded border border-emerald-300",children:["=",de(Number(Xe)||0)]})]}),n.jsx("input",{type:"text",id:`input-${X}`,inputMode:ee?"none":void 0,readOnly:ee,disabled:ve,value:Ge,onFocus:ee?Bt=>{Bt.target.blur(),Dt(X)}:()=>be(X),onTouchStart:ee?Bt=>{Bt.preventDefault(),Dt(X)}:void 0,onClick:ee?()=>Dt(X):void 0,onChange:Bt=>{const Jt=Bt.target.value;Jt.endsWith("=")?h({...f,[X]:qe(Jt)}):h({...f,[X]:Jt})},onKeyDown:Bt=>{if(Bt.key==="Enter"){Bt.preventDefault();const Jt=Bt.currentTarget.value;/[+\-*/]/.test(Jt)&&h({...f,[X]:qe(Jt)}),Ue(X,!1)}},onBlur:()=>{Ge&&/[+\-*/]/.test(Ge)&&h({...f,[X]:qe(Ge)})},placeholder:X==="loan"?"0 (উদা: ১+২+৩=৬)":"0",className:`w-full rounded border px-2.5 py-1.5 text-right font-mono text-xs font-bold transition focus:outline-none ${ve?"border-slate-300 bg-slate-100 text-slate-500 cursor-not-allowed opacity-60":Le?"border-indigo-600 ring-2 ring-indigo-500 bg-amber-100 text-slate-950 scale-[1.02]":on?"border-rose-300 bg-rose-50 text-rose-900 focus:border-rose-500":Ft?"border-slate-300 bg-amber-50 text-slate-900 focus:border-indigo-500":It?"border-slate-300 bg-yellow-50 text-slate-900 focus:border-indigo-500":"border-slate-300 bg-white text-slate-900 focus:border-indigo-500"} ${ee?"cursor-pointer":""}`})]},X)})]}),n.jsxs("div",{className:"mt-4 flex flex-wrap gap-2",children:[n.jsx("button",{type:"button",onClick:me,disabled:ve||!_t(l)||pt(l).blocked,className:"rounded-lg bg-green-600 px-6 py-2 text-sm font-bold text-white shadow hover:bg-green-700 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",children:ve?"🔒 দিন সমাপ্ত (লকড)":pt(l).blocked?"🚫 তারিখ ব্লকড":_t(l)?"Save Report":"☀️ দিন শুরু (Day Open) করুন"}),n.jsx("button",{type:"button",onClick:we,disabled:ve||!_t(l)||pt(l).blocked,className:"rounded-lg bg-slate-500 px-6 py-2 text-sm font-bold text-white hover:bg-slate-600 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",children:"Reset"})]})]}),n.jsxs("div",{className:"rounded-2xl border border-slate-200 bg-white p-2.5 sm:p-3 shadow-sm",children:[n.jsxs("div",{className:"flex items-stretch gap-1.5 sm:gap-2",children:[n.jsxs("div",{className:"flex min-w-0 flex-1 flex-col justify-center rounded-xl bg-emerald-50 border border-emerald-300 p-2 sm:p-3 text-center",children:[n.jsx("span",{className:"text-[10px] sm:text-xs font-bold text-emerald-800",children:ve?"Closing Cash":"Today Cash"}),n.jsx("span",{className:"font-mono text-xs sm:text-xl font-black text-emerald-950 mt-0.5 whitespace-nowrap",children:de(Mn)})]}),n.jsxs("div",{className:"flex min-w-0 flex-1 flex-col justify-center rounded-xl bg-indigo-50 border border-indigo-300 p-2 sm:p-3 text-center",children:[n.jsx("span",{className:"text-[10px] sm:text-xs font-bold text-indigo-800",children:ve?"Closing Bank":"Today Bank"}),n.jsx("span",{className:"font-mono text-xs sm:text-xl font-black text-indigo-950 mt-0.5 whitespace-nowrap",children:de(Rc)})]}),n.jsx("button",{type:"button",onClick:()=>M(!0),title:"Denomination — Check Diff","aria-label":"Denomination — Check Diff",className:"flex w-9 shrink-0 cursor-pointer items-center justify-center rounded-xl border border-amber-600 bg-amber-500 text-base leading-none shadow-xs hover:bg-amber-600 sm:w-11 sm:text-xl",children:"💰"})]}),n.jsx("div",{className:"mt-1.5 sm:mt-2",children:n.jsxs("div",{className:"flex min-w-0 flex-col justify-center gap-0.5 rounded-xl border-2 border-purple-900 bg-white p-2 sm:p-2.5 overflow-hidden",children:[n.jsxs("div",{className:"flex items-baseline justify-between gap-1 min-w-0",children:[n.jsx("span",{className:"whitespace-nowrap text-[10px] sm:text-xs font-bold text-purple-900",children:"Expens"}),n.jsx("span",{className:"truncate font-mono text-[10px] sm:text-sm font-black text-slate-950",children:de(ho)})]}),n.jsxs("div",{className:"flex items-baseline justify-between gap-1 min-w-0",children:[n.jsx("span",{className:"whitespace-nowrap text-[10px] sm:text-xs font-bold text-purple-900",children:"Check"}),n.jsx("span",{className:"truncate font-mono text-[10px] sm:text-sm font-black text-slate-950",children:de(fr)})]}),n.jsxs("div",{className:"mt-0.5 flex min-w-0 items-baseline justify-between gap-1 rounded-md border border-emerald-700 bg-emerald-400 px-1.5 py-1",children:[n.jsx("span",{className:"whitespace-nowrap text-[10px] sm:text-xs font-black text-emerald-950",children:"Diferent"}),n.jsx("span",{className:"truncate font-mono text-[10px] sm:text-sm font-black text-emerald-950",children:de(zs)})]})]})})]}),n.jsxs("div",{className:"overflow-hidden rounded-2xl bg-white shadow-sm border border-[#d4a373]",children:[n.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b border-[#d4a373] px-4 py-2.5 bg-[#fdecd2]",children:[n.jsx("h3",{className:"font-serif font-bold text-slate-900 text-sm sm:text-base",children:"Staff Collection Report Table"}),n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("button",{type:"button",onClick:()=>L5([{el:o.current,heading:"Staff Collection Report Table"},{el:u.current,heading:"Dena / Poana"},{el:c.current,heading:"Today All Report"}],{title:"Gobra Daily Cash — Full Report",subtitle:`${pc()} • Date: ${l}${w?` • Staff: ${mt(w)}`:""}`}),title:"একদম সব রিপোর্ট একসাথে প্রিন্ট (এক A4 পাতা)",className:"print:hidden cursor-pointer rounded-lg bg-indigo-700 px-2.5 py-1 text-[11px] font-black text-white hover:bg-indigo-800 shadow-sm",children:"🖨️ Print All"}),n.jsx("div",{className:"w-32 sm:w-40",children:n.jsx(Zn,{value:w,onChange:D=>P(D),noKeyboardOnMobile:!0,options:[{value:"",label:"All Staff"},...kt.map(D=>({value:D,label:mt(D)}))],placeholder:"All Staff",className:"w-full cursor-pointer rounded border border-[#d4a373] bg-white px-2 py-1 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-1 focus:ring-[#d4a373]"})}),n.jsx("div",{className:"w-36 sm:w-44",children:n.jsx(Zn,{value:G,onChange:D=>K(D),noKeyboardOnMobile:!0,options:[{value:"default",label:"Sort: 🖐️ ম্যানুয়াল"},{value:"name-asc",label:"Sort: Name A→Z"},{value:"name-desc",label:"Sort: Name Z→A"}],placeholder:"Sort: 🖐️ ম্যানুয়াল",className:"w-full rounded border border-[#d4a373] bg-white px-2 py-1 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-1 focus:ring-[#d4a373]"})})]})]}),n.jsx("div",{className:"overflow-x-auto",ref:o,children:n.jsxs("table",{className:"w-full border-collapse border border-[#d4a373] text-center text-xs sm:text-sm",children:[n.jsx("thead",{children:n.jsxs("tr",{className:"bg-[#fdecd2] text-slate-950 font-bold border-b border-[#d4a373]",children:[n.jsx("th",{className:"sticky left-0 z-20 border border-[#d4a373] bg-[#fdecd2] px-2.5 py-2 shadow-[2px_0_0_0_#d4a373]",children:"Name"}),n.jsx("th",{className:"border border-[#d4a373] px-2 py-2",children:"Loan"}),n.jsx("th",{className:"border border-[#d4a373] px-2 py-2",children:"Rebate"}),n.jsx("th",{className:"border border-[#d4a373] px-2 py-2",children:"Total Loan"}),n.jsx("th",{className:"border border-[#d4a373] px-2 py-2",children:"Savings"}),n.jsx("th",{className:"border border-[#d4a373] px-2 py-2",children:"DPS"}),n.jsx("th",{className:"border border-[#d4a373] px-2 py-2",children:"Total Sav"}),n.jsx("th",{className:"border border-[#d4a373] px-2 py-2",children:"Passbook"}),n.jsx("th",{className:"border border-[#d4a373] px-2 py-2",children:"Admission"}),n.jsx("th",{className:"border border-[#d4a373] px-2 py-2",children:"Grant Total"}),n.jsx("th",{className:"border border-[#d4a373] px-2 py-2",children:"Adjust"}),n.jsx("th",{className:"border border-[#d4a373] px-2 py-2",children:"Nogod"}),n.jsx("th",{className:"border border-[#d4a373] px-2 py-2",children:"Total Ret"}),n.jsx("th",{className:"border border-[#d4a373] px-2 py-2",children:"Action"})]})}),n.jsx("tbody",{children:tt.length===0?n.jsx("tr",{children:n.jsxs("td",{colSpan:14,className:"border border-[#d4a373] px-3 py-6 text-center text-slate-400",children:["No staff reports on ",l]})}):tt.map(D=>{const X=Number(D.loan)||0,Le=Number(D.rebate)||0,Ge=X+Le,jt=Number(D.savings)||0,Xe=Number(D.dps)||0,on=jt+Xe,It=Number(D.passbook)||0,Ft=Number(D.admission)||0,Bt=X+on+It+Ft,Jt=Number(D.savingsAdjust)||0,vt=Number(D.nogodReturn)||0,Xt=Jt+vt;return n.jsxs("tr",{className:"border-b border-[#d4a373] hover:bg-[#fff9f2] bg-white",children:[n.jsx("td",{className:"sticky left-0 z-10 border border-[#d4a373] bg-white px-2 py-1.5 font-bold text-left text-slate-900 shadow-[2px_0_0_0_#d4a373]",children:D.staffName}),n.jsx("td",{className:"border border-[#d4a373] px-2 py-1.5 text-right font-mono",children:X>0?de(X):""}),n.jsx("td",{className:"border border-[#d4a373] px-2 py-1.5 text-right font-mono",children:Le>0?de(Le):""}),n.jsx("td",{className:"border border-[#d4a373] px-2 py-1.5 text-right font-mono font-bold bg-[#fdf5ea]",children:Ge>0?de(Ge):""}),n.jsx("td",{className:"border border-[#d4a373] px-2 py-1.5 text-right font-mono",children:jt>0?de(jt):""}),n.jsx("td",{className:"border border-[#d4a373] px-2 py-1.5 text-right font-mono",children:Xe>0?de(Xe):""}),n.jsx("td",{className:"border border-[#d4a373] px-2 py-1.5 text-right font-mono font-bold bg-[#fdf5ea]",children:on>0?de(on):""}),n.jsx("td",{className:"border border-[#d4a373] px-2 py-1.5 text-right font-mono",children:It>0?de(It):""}),n.jsx("td",{className:"border border-[#d4a373] px-2 py-1.5 text-right font-mono",children:Ft>0?de(Ft):""}),n.jsx("td",{className:"border border-[#d4a373] px-2 py-1.5 text-right font-mono font-black bg-[#fdf5ea]",children:Bt>0?de(Bt):""}),n.jsx("td",{className:"border border-[#d4a373] px-2 py-1.5 text-right font-mono",children:Jt>0?de(Jt):""}),n.jsx("td",{className:"border border-[#d4a373] px-2 py-1.5 text-right font-mono",children:vt>0?de(vt):""}),n.jsx("td",{className:"border border-[#d4a373] px-2 py-1.5 text-right font-mono font-black bg-[#fdf5ea]",children:Xt>0?de(Xt):""}),n.jsxs("td",{className:"border border-[#d4a373] px-1 py-1 text-center whitespace-nowrap",children:[n.jsx("button",{type:"button",disabled:ve,onClick:()=>{if(ve){Zt();return}p({...D}),L({...D,loan:String(D.loan??""),rebate:String(D.rebate??""),savings:String(D.savings??""),dps:String(D.dps??""),admission:String(D.admission??""),passbook:String(D.passbook??""),savingsAdjust:String(D.savingsAdjust??""),nogodReturn:String(D.nogodReturn??"")}),be("loan"),ee&&N(!0)},className:`mr-1 rounded px-2.5 py-1 text-xs font-bold text-white shadow-xs transition ${ve?"bg-slate-400 cursor-not-allowed opacity-50":"bg-blue-600 hover:bg-blue-700 cursor-pointer active:scale-95"}`,title:ve?"দিন সমাপ্ত (Locked) - উপরের Working-Day বার থেকে Re-open করুন":"এই স্টাফের রিপোর্ট এডিট করুন",children:ve?"🔒 Edit":"✏️ Edit"}),n.jsx("button",{type:"button",disabled:ve,onClick:()=>{if(ve){Zt();return}wn(D.id)},className:`rounded px-2 py-1 text-xs font-bold text-white shadow-xs transition ${ve?"bg-slate-400 cursor-not-allowed opacity-50":"bg-rose-600 hover:bg-rose-700 cursor-pointer active:scale-95"}`,title:ve?"দিন সমাপ্ত (Locked) - উপরের Working-Day বার থেকে Re-open করুন":"এই রিপোর্ট মুছুন",children:ve?"🔒 Del":"Del"})]})]},D.id)})}),tt.length>0&&n.jsx("tfoot",{className:"bg-[#fdecd2] text-slate-950 font-bold border-t-2 border-[#d4a373]",children:n.jsxs("tr",{children:[n.jsx("td",{className:"sticky left-0 z-10 border border-[#d4a373] bg-[#fdecd2] px-2 py-2 shadow-[2px_0_0_0_#d4a373]",children:"Total"}),n.jsx("td",{className:"border border-[#d4a373] px-2 py-2 text-right font-mono",children:de(la)}),n.jsx("td",{className:"border border-[#d4a373] px-2 py-2 text-right font-mono",children:de(hl)}),n.jsx("td",{className:"border border-[#d4a373] px-2 py-2 text-right font-mono font-black",children:de(bl)}),n.jsx("td",{className:"border border-[#d4a373] px-2 py-2 text-right font-mono",children:de(Tt)}),n.jsx("td",{className:"border border-[#d4a373] px-2 py-2 text-right font-mono",children:de(ra)}),n.jsx("td",{className:"border border-[#d4a373] px-2 py-2 text-right font-mono font-black",children:de(ls)}),n.jsx("td",{className:"border border-[#d4a373] px-2 py-2 text-right font-mono",children:de(Ks)}),n.jsx("td",{className:"border border-[#d4a373] px-2 py-2 text-right font-mono",children:de(oa)}),n.jsx("td",{className:"border border-[#d4a373] px-2 py-2 text-right font-mono font-black",children:de(ka)}),n.jsx("td",{className:"border border-[#d4a373] px-2 py-2 text-right font-mono",children:de(Ua)}),n.jsx("td",{className:"border border-[#d4a373] px-2 py-2 text-right font-mono",children:de(Da)}),n.jsx("td",{className:"border border-[#d4a373] px-2 py-2 text-right font-mono font-black",children:de(Ps)}),n.jsx("td",{className:"border border-[#d4a373]"})]})})]})})]}),n.jsxs("div",{className:"rounded-2xl border-2 border-blue-900 bg-white shadow-sm overflow-hidden max-w-2xl mx-auto",children:[n.jsxs("div",{className:"bg-[#fdecd2] py-2 text-center border-b-2 border-blue-900 relative",children:[n.jsx("h3",{className:"font-serif font-black text-xl sm:text-2xl text-slate-900",children:"Dena / Poana"}),n.jsx("div",{className:"absolute right-2 top-1/2 -translate-y-1/2",children:n.jsx(rp,{mode:j,onChange:z})})]}),n.jsx("div",{className:"overflow-x-auto",ref:u,children:n.jsxs("table",{className:"w-full border-collapse border border-amber-200 text-xs sm:text-sm",children:[n.jsx("thead",{children:n.jsxs("tr",{className:"bg-[#eedbc9] text-slate-900 font-bold text-center",children:[n.jsx("th",{className:"border border-amber-200 px-3 py-2",children:"Staff Name"}),n.jsx("th",{className:"border border-amber-200 px-3 py-2",children:"Today Aday"}),n.jsx("th",{className:"border border-amber-200 px-3 py-2",children:"Today Deposit"}),n.jsx("th",{className:"border border-amber-200 px-3 py-2",children:"Savings Return"}),n.jsx("th",{className:"border border-amber-200 px-3 py-2",children:"Dena / Poana"})]})}),n.jsx("tbody",{children:rs.map(D=>n.jsxs("tr",{className:"border-b border-amber-200",children:[n.jsx("td",{className:"border border-amber-200 px-3 py-2 font-bold bg-[#eedbc9] text-left",children:D.name}),n.jsx("td",{className:"border border-amber-200 px-3 py-2 text-right font-mono font-bold bg-[#f0f6ff]",children:de(D.todayAday)}),n.jsx("td",{className:"border border-amber-200 px-3 py-2 text-right font-mono font-bold bg-[#f0f6ff]",children:de(D.todayDeposite)}),n.jsx("td",{className:"border border-amber-200 px-3 py-2 text-right font-mono font-bold bg-[#f0f6ff]",children:de(D.savingsReturn)}),n.jsx("td",{className:"border border-amber-200 px-3 py-2 text-right font-mono font-black bg-[#f0f6ff]",children:Math.round(D.diff)})]},D.name))}),n.jsx("tfoot",{className:"bg-[#dfbf9f] font-black border-t-2 border-amber-300",children:n.jsxs("tr",{children:[n.jsx("td",{className:"border border-amber-200 px-3 py-2 text-center",children:"Total"}),n.jsx("td",{className:"border border-amber-200 px-3 py-2 text-right font-mono",children:de(Ct)}),n.jsx("td",{className:"border border-amber-200 px-3 py-2 text-right font-mono",children:de(_s)}),n.jsx("td",{className:"border border-amber-200 px-3 py-2 text-right font-mono",children:de(ia)}),n.jsx("td",{className:"border border-amber-200 px-3 py-2 text-right font-mono",children:de(Cn)})]})})]})})]}),n.jsxs("div",{className:"rounded-2xl border-2 border-blue-900 bg-white shadow-sm overflow-hidden max-w-3xl mx-auto",children:[n.jsxs("div",{className:"bg-[#fdecd2] py-2 text-center border-b-2 border-blue-900 relative",children:[n.jsx("h3",{className:"font-serif font-black text-xl sm:text-2xl text-slate-900",children:"Today All Report"}),n.jsxs("button",{type:"button",onClick:()=>Ae(!0),title:"কল্যাণ তহবিল ম্যানেজ করুন (হার/ফি বদলান, নিয়ম দেখুন)",className:"absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1 rounded-lg bg-teal-600 hover:bg-teal-700 active:scale-95 border border-teal-800 px-2 py-1 text-[11px] font-bold text-white shadow-sm transition cursor-pointer",children:[n.jsx("span",{children:"🤝"}),n.jsx("span",{children:"⚙️ কল্যাণ"})]})]}),n.jsx("div",{className:"overflow-x-auto",ref:c,children:n.jsxs("table",{className:"w-full border-collapse border border-amber-200 text-xs sm:text-sm",children:[n.jsx("thead",{children:n.jsxs("tr",{className:"bg-[#fdecd2] text-slate-900 font-black text-center",children:[n.jsx("th",{colSpan:2,className:"border border-amber-200 px-4 py-2 w-1/2",children:"Income"}),n.jsx("th",{colSpan:2,className:"border border-amber-200 px-4 py-2 w-1/2",children:"Expenditure"})]})}),n.jsx("tbody",{children:ot===0?n.jsx("tr",{children:n.jsxs("td",{colSpan:4,className:"p-6 text-center text-slate-400",children:["No data on ",l]})}):Array.from({length:ot},(D,X)=>{const Le=Jn[X],Ge=zt[X];return n.jsxs("tr",{className:"border-b border-amber-200",children:[n.jsxs("td",{className:`border border-amber-200 px-3 py-1.5 font-bold bg-[#fdecd2] w-1/3 ${(Le==null?void 0:Le.label)==="Kallayan"?"cursor-pointer text-teal-800 hover:bg-teal-100 underline decoration-dotted decoration-teal-400 underline-offset-2":""}`,onClick:()=>{(Le==null?void 0:Le.label)==="Kallayan"&&Ae(!0)},title:(Le==null?void 0:Le.label)==="Kallayan"?"কল্যাণ তহবিল ম্যানেজ করতে ট্যাপ করুন":void 0,children:[Le?Le.label:"",(Le==null?void 0:Le.label)==="Kallayan"&&n.jsxs("span",{className:"ml-1 text-[9px] font-semibold text-slate-500 not-italic",children:["(",St.percent,"%+",St.fixed,"৳)"]})]}),n.jsx("td",{className:"border border-amber-200 px-3 py-1.5 text-right font-mono font-bold w-1/6",children:Le?de(Le.amount):""}),n.jsx("td",{className:"border border-amber-200 px-3 py-1.5 font-bold bg-[#fdecd2] w-1/3",children:Ge?Ge.label:""}),n.jsx("td",{className:"border border-amber-200 px-3 py-1.5 text-right font-mono font-bold w-1/6",children:Ge?de(Ge.amount):""})]},X)})}),n.jsx("tfoot",{className:"bg-[#dfbf9f] font-black border-t-2 border-amber-300",children:n.jsxs("tr",{children:[n.jsx("td",{className:"border border-amber-200 px-3 py-2 text-center",children:"Total"}),n.jsx("td",{className:"border border-amber-200 px-3 py-2 text-right font-mono",children:de(nt)}),n.jsx("td",{className:"border border-amber-200 px-3 py-2 text-center",children:"Total"}),n.jsx("td",{className:"border border-amber-200 px-3 py-2 text-right font-mono",children:de(Je)})]})})]})})]}),yt&&n.jsx(cp,{rule:St,disburseCategories:ft,onChanged:()=>{gt(ts()),lt()},onClose:()=>Ae(!1)}),ce&&n.jsx(Ym,{open:ce,onClose:()=>M(!1),cashInHand:Re,date:l}),x&&n.jsx("div",{className:"fixed inset-0 z-40 flex items-start justify-center bg-black/60 p-2 sm:p-4 pt-3 sm:pt-6 pb-88 overflow-y-auto",children:n.jsxs("div",{className:"w-full max-w-xl rounded-2xl bg-white p-4 sm:p-6 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 my-auto",children:[n.jsxs("div",{className:"flex items-center justify-between border-b pb-3 mb-4",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-xl",children:"✏️"}),n.jsxs("div",{children:[n.jsxs("h3",{className:"text-base sm:text-lg font-bold text-slate-900 leading-tight",children:["Edit Staff Report (",mt(x.staffName),")"]}),n.jsxs("span",{className:"text-[11px] font-mono text-slate-500",children:["Date: ",l]})]})]}),n.jsxs("div",{className:"flex items-center gap-2",children:[ee&&n.jsxs("button",{type:"button",onClick:()=>N(!H),className:`rounded-xl px-2.5 py-1 text-xs font-bold transition flex items-center gap-1.5 shadow-xs border cursor-pointer ${H?"bg-indigo-600 text-white border-indigo-500 shadow-indigo-300 ring-2 ring-indigo-400/40":"bg-indigo-50 text-indigo-700 hover:bg-indigo-100 border-indigo-200"}`,title:"কাস্টম কিবোর্ড অন/অফ করুন",children:[n.jsx("span",{children:"⌨️ কিবোর্ড"}),n.jsx("span",{className:`text-[10px] px-1.5 py-0.2 rounded font-mono font-bold ${H?"bg-indigo-900 text-white":"bg-indigo-200 text-indigo-900"}`,children:H?"ON":"OFF"})]}),n.jsx("button",{type:"button",onClick:()=>{L(null),p(null),N(!1)},className:"text-2xl text-slate-400 hover:text-rose-600 cursor-pointer leading-none p-1",title:"বন্ধ করুন",children:"×"})]})]}),n.jsxs("div",{className:"grid grid-cols-2 gap-3 sm:grid-cols-3",children:[n.jsxs("div",{id:"edit-field-staffName",onClick:ee?()=>{be("staffName"),N(!0)}:void 0,className:`col-span-2 sm:col-span-3 rounded-xl transition p-2 border ${ee?"cursor-pointer":""} ${ee&&H&&ge==="staffName"?"ring-2 ring-indigo-500 bg-amber-50 border-indigo-400":"border-slate-200 bg-slate-50/50"}`,children:[n.jsxs("label",{className:"mb-1 block text-xs font-bold text-slate-700",children:["Staff Name ",n.jsx("span",{className:"text-[10px] text-slate-500 font-normal",children:"(স্টাফ নির্বাচন)"})]}),n.jsx(Zn,{value:x.staffName,noKeyboardOnMobile:!0,onChange:D=>{L({...x,staffName:D}),ee&&be("loan")},options:kt.map(D=>({value:D,label:mt(D)})),placeholder:"Select option...",className:"w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-bold text-slate-800 focus:outline-none cursor-pointer"})]}),Wa.filter(D=>D.isNumeric).map(D=>{const X=D.key,Le=ee&&H&&ge===X,Ge=x[X]||"",jt=/[+\-*/]/.test(Ge),Xe=jt?qe(Ge):"",on=X==="savingsAdjust"||X==="nogodReturn";return n.jsxs("div",{id:`edit-field-${X}`,onClick:ee?()=>{be(X),N(!0)}:void 0,className:`rounded-xl transition p-1.5 border ${ee?"cursor-pointer":""} ${Le?"border-indigo-600 ring-2 ring-indigo-500 bg-amber-50/90 scale-[1.02] shadow-sm":on?"border-rose-200 bg-rose-50/50":"border-slate-200 bg-slate-50/40"}`,children:[n.jsxs("div",{className:"flex items-center justify-between mb-1",children:[n.jsx("label",{className:"text-xs font-bold text-slate-700 truncate",children:D.label}),jt&&n.jsxs("span",{className:"text-[10px] font-mono font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.2 rounded border border-emerald-300",children:["=",de(Number(Xe)||0)]})]}),n.jsx("input",{type:"text",id:`edit-input-${X}`,inputMode:ee?"none":void 0,readOnly:ee,value:Ge,onFocus:ee?It=>{It.target.blur(),be(X),N(!0)}:()=>be(X),onTouchStart:ee?It=>{It.preventDefault(),be(X),N(!0)}:void 0,onClick:ee?()=>{be(X),N(!0)}:void 0,onChange:It=>{const Ft=It.target.value;Ft.endsWith("=")?L({...x,[X]:qe(Ft)}):L({...x,[X]:Ft})},onKeyDown:It=>{if(It.key==="Enter"){It.preventDefault();const Ft=It.currentTarget.value;/[+\-*/]/.test(Ft)&&L({...x,[X]:qe(Ft)}),Ue(X,!0)}},onBlur:()=>{Ge&&/[+\-*/]/.test(Ge)&&L({...x,[X]:qe(Ge)})},placeholder:X==="loan"?"0 (উদা: ১২+১২=২৪)":"0",className:`w-full rounded-lg border px-3 py-1.5 text-right font-mono text-sm font-bold transition focus:outline-none ${ee?"cursor-pointer":""} ${Le?"border-indigo-600 bg-amber-100 text-slate-950 font-black shadow-inner":on?"border-rose-300 bg-white text-rose-900 focus:border-rose-500":"border-slate-300 bg-white text-slate-900 focus:border-indigo-500"}`})]},X)})]}),(()=>{const D=Number(qe(x.loan||"0"))||0,X=Number(qe(x.rebate||"0"))||0,Le=D+X,Ge=Number(qe(x.savings||"0"))||0,jt=Number(qe(x.dps||"0"))||0,Xe=Ge+jt,on=Number(qe(x.passbook||"0"))||0,It=Number(qe(x.admission||"0"))||0,Ft=D+Xe+on+It,Bt=Number(qe(x.savingsAdjust||"0"))||0,Jt=Number(qe(x.nogodReturn||"0"))||0,vt=Bt+Jt;return n.jsx("div",{className:"mt-4 rounded-xl bg-amber-50/70 border border-amber-200 p-2.5 text-xs",children:n.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-center",children:[n.jsxs("div",{className:"bg-white p-1.5 rounded border border-amber-100",children:[n.jsx("div",{className:"text-[10px] text-slate-500 font-sans",children:"Total Loan"}),n.jsx("div",{className:"font-bold text-slate-900",children:de(Le)})]}),n.jsxs("div",{className:"bg-white p-1.5 rounded border border-amber-100",children:[n.jsx("div",{className:"text-[10px] text-slate-500 font-sans",children:"Total Savings"}),n.jsx("div",{className:"font-bold text-slate-900",children:de(Xe)})]}),n.jsxs("div",{className:"bg-white p-1.5 rounded border border-amber-200",children:[n.jsx("div",{className:"text-[10px] text-amber-900 font-sans font-bold",children:"Grant Total"}),n.jsx("div",{className:"font-black text-amber-700 text-sm",children:de(Ft)})]}),n.jsxs("div",{className:"bg-white p-1.5 rounded border border-rose-200",children:[n.jsx("div",{className:"text-[10px] text-rose-700 font-sans font-bold",children:"Total Return"}),n.jsx("div",{className:"font-black text-rose-700 text-sm",children:de(vt)})]})]})})})(),n.jsxs("div",{className:"flex items-center justify-between gap-3 mt-4 border-t pt-3",children:[n.jsx("button",{type:"button",onClick:()=>{y&&L({...y})},className:"rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-900 border border-amber-300 px-3 py-2 font-bold text-xs transition cursor-pointer",title:"এডিটের পরিবর্তনগুলো বাতিল করে মূল মানে ফিরে যান",children:"🔄 মূল মানে রিসেট"}),n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("button",{type:"button",onClick:()=>{L(null),p(null),N(!1)},className:"rounded-xl bg-slate-200 px-4 py-2 font-bold text-xs text-slate-700 hover:bg-slate-300 transition cursor-pointer",children:"বাতিল (Cancel)"}),n.jsxs("button",{type:"button",onClick:Nt,className:"rounded-xl bg-blue-600 px-5 py-2 font-bold text-xs text-white hover:bg-blue-700 transition cursor-pointer flex items-center gap-1.5 shadow",children:[n.jsx("span",{children:"💾"}),n.jsx("span",{children:"Update Report"})]})]})]})]})}),ee&&n.jsx(b5,{open:H,activeField:ge,values:x?{staffName:x.staffName||"",loan:x.loan||"",rebate:x.rebate||"",savings:x.savings||"",dps:x.dps||"",admission:x.admission||"",passbook:x.passbook||"",savingsAdjust:x.savingsAdjust||"",nogodReturn:x.nogodReturn||""}:f,staffList:kt,onFieldSelect:D=>be(D),onValueChange:(D,X)=>{x?L(Le=>Le?{...Le,[D]:X}:null):h(Le=>({...Le,[D]:X}))},onSave:x?Nt:me,onReset:x?()=>{y&&L({...y})}:we,onClose:()=>N(!1),isEdit:!!x})]})}const j5="modulepreload",I5=function(l){return"/"+l},ab={},fo=function(o,u,c){let d=Promise.resolve();if(u&&u.length>0){let f=function(L){return Promise.all(L.map(y=>Promise.resolve(y).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};document.getElementsByTagName("link");const h=document.querySelector("meta[property=csp-nonce]"),x=(h==null?void 0:h.nonce)||(h==null?void 0:h.getAttribute("nonce"));d=f(u.map(L=>{if(L=I5(L),L in ab)return;ab[L]=!0;const y=L.endsWith(".css"),p=y?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${L}"]${p}`))return;const w=document.createElement("link");if(w.rel=y?"stylesheet":j5,y||(w.as="script"),w.crossOrigin="",w.href=L,x&&w.setAttribute("nonce",x),document.head.appendChild(w),y)return new Promise((P,G)=>{w.addEventListener("load",P),w.addEventListener("error",()=>G(new Error(`Unable to preload CSS for ${L}`)))})}))}function A(f){const h=new Event("vite:preloadError",{cancelable:!0});if(h.payload=f,window.dispatchEvent(h),!h.defaultPrevented)throw f}return d.then(f=>{for(const h of f||[])h.status==="rejected"&&A(h.reason);return o().catch(A)})},fp="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEA3ADcAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCACHAGEDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9U6KKKACiimSypBE8kjBI0BZmY4AA6mgB9fIn7Xf/AAUL8Nfs33troejW0PirxO0iPcWazbYoYDkFvMGQW3AKV6jNeb/tp/8ABQo6Dcf8K7+EM41jxTfOLabVLFt/2cuEZPIKkh3ySpFfPPwq/Zl8MeBNPPjL9oPVGmv9Yi3WXh6FhLeZuFkE09xEfmTyzskB6fKaAP1E+CHx58I/H7wda+IPCupR3UUm5ZLdiFljZSFfKHnAY4z0Nei1+Knj34TfET9h7xRp3xG+FXiKXxH8PrycpBqtjL5iTWySR+ZHclflQGUkcd1PpX6I/shftx+Ev2n9Cjtnmh0bxlAFS70qRtokkO8/uMnLqFXJPbNAH01RRRQAUUUUAFFFFABRRWR4q8V6V4K0K71jWbyOx0+1jaWWaU4AVQSf0BoAu6pqdro2n3F9ezJb2tvG0ssrnAVQMkn8BX5iftZftyeJvjrr0vwp+CMNzci5kaC41ayBLzY+bMLD+ErnP41U+NHx++IH7cfjC68D/DVbjSvAdnMDfash2+bGr4Mm4Y+QhuRS/DTw/pHgWzuvh38ImtZdeura9Oo+Opot8CtbQM08Vv0ZH2soyO9AHLeBfAWhfsiWupPpOn2vxE+M1jbzapPbonn2ukRQOjvLIOquoI59a2fhL4Hk8Rftmfs+az4vv5vFd3438ET+INSj1BvNjVri2vMRKD/yzCBQB6g1s/DrwRYeHNNg1i3ee41fxB8CtZ1TVLu5k3yXFxIV3MW6n7vf0Favwigmf9rX9kRYwAsPwktWkHoDaXoH64oA88/Z38U+Kvg98IPg7CmlSfELwP8AESLUV1DwnIhnMC2V7M8rQR9BlSHOe6muP+Ln7OCeGZ7D46fs9avPqnh6N5ZbiCwk3XWmSGNpZs7eFRQwX8RXvf7Kluy6D+xuvTy7HxuWHb78o/qK4L4IeF/EPw18JfBrW/AMjPLrPg3XdU8QaLcnzLXUIra7i4WPoHZWK5PbFAHvn7D/APwUY0v41R2vhDx3Lb6P4zXbHFLnZBdscBI0zyZOpNfdKsHUMpBB5BFfi/48/Zz0j4/+FL74tfBWZtI8QxrDf33hZG23dnK++QvGRgKoUZGK9g/YU/4KK3dhcWvw4+K7vBPABbWWqz8Y2gBY5CeWc9c0AfqDRUFlewajax3NtKs0Eg3K6HIIqegAooooA5H4ofFLw98IPCF94j8SX8djp9pG0jFjy2ATgDvwDX5t+P8Axz4t/bq8YXVxLqLeEvgzojtJJds2BcANIEl7FgyFRtr1X9uL9kv4wftL+PZRpupx23g+2SNbOzE6gM+0hpGH1cjB7Cvkj9pT4K/Gb9mz4KeGNK1/U0Pg+Gf7BHZW8i/vJtrzBmK88bCOaAPffh1cab4vW18FeCLQ6B8NNM8UaZouqXCnbcaq90AWw/DoBtzj3r0PwH4f0nwronhm10u3S0tbX/hN9g3BnKrGqgs3Vjjua+QPDPw+/aNudN1PV9LtZoUvtSsPE4kRQPMkSIJAQMdl21pad8Gf2nFishFJcRrJFdhFIH7v7XxP2/iAoA938LSRL4R0GVpVDr+ztfnBP95mrR+D0Fpa/te/szrLcorp8G7VYQT99lW44/75Zj+FeE2n7Hn7R0um6fAuoPDCmkt4bC7l/wCPAvzF9CSfzrz+P4XfGSw/bW8D/Dc6+YfGGg6ZDpen3aspEFolm8zID0IMbSfnQB9WfsplX0X9j7EigJpPjVmy3X96Rn9ad8HNSs7f4X/B2+Myw/ZfhX4sYKW54uIFP9TXyP8AHf4efG39kDXPA2kvq0xtdMS4XQZbfDrGLqQiWIEd22ZI681x8Hw0/aOsrWytIdP1ZLfTtPuNMt41iO1LacgzRj5ejEZNAH174hs7nRNe1TxZ4Xv49H1jwh8JfD+sxJCAIrhyrB1dBwxZcjJzXMfFb4U+HP2n9PuvE/h0W3hX4t6LDFLrGiblC3JkUMJkbhV+QZwK8D8I/Cb9onVNZuLW5s9TS21LT4tFvGkiOHtIkPlxHjoBxXOeIfgb8etDub7Wb6x1BJYbVUnulVh+4hiIGcDoEyKAPoj9iH/goXe/CG5g8HeObl7zwqJvIt7yR9z2mFOQT1bLkCv128N+JdN8W6Rb6ppN3Fe2U67kliYEGvwa+AH/AAT3+Ivx98GWHirSSkGn3bymF5HC5KOFJ59/5V+nv7A37N/xJ/Zts9f0XxdrI1Lw/PHE2n2/mh/Il3yNJ7/NvH5UAfXlFFFABXwX/wAFhGf/AIUV4NRP+WniVVP0+yz196V8Kf8ABXGD7T8HfAUROA3imMfX/Rpx/WgD6++ESlPhP4KVuGGiWQP/AH4SutrnfCLQaD8PtEM8iwW1ppkAd2OAqrEuSfyr85v2uP8AgpJqMGutofw1lRVspG867Y8TDoQpHof50Afp31r819Vff/wWc0sdSsOPoP7Ck/qa80+BX/BTHxXoHj20TxnKl/4fnUWzmMkmI7xmQ59AGrrvDfiSz8b/APBYbS9c0uYXGnXWnwzwyIcgq2gsc/rj6igD6L/4KIaroOhad8EtS16OGSztPiJp0s4l72wjmMo+nC5/Cvc/hT8fvBnxkmu4PDWqxXlzarvlhVgWVSSAcA98frX50/8ABZn4lpdeN/h54MtptzaZG+o3USn+OZlWMEeoWJj9Hr59/Yi8ceJ/gf8AtWeBzqVrcaVpuuzLY3InBVJonCIW99pbNAH7R/ET43eEPhZqen6f4j1WLT7q/ikmt0kYAuqY3EZPbIqp8Q/EumeL/wBn7xdrOmXKXmm3fh2+limjIIZTbvX57/8ABX24kX42fB2KGNpJG06/UKgyWLOgA/EgV0v/AAT4+Iera5+xn8ZPBmuPKuq+GbG/jjt7j/WRxSWbkLjsAwIoA+mP+CdcC2/7H/gBVGFa3lfH1lY19JV87/8ABPtNn7IXw5A5U2JIPqN7c19EUAFFFFABXw9/wVYjE3w4+GcbfdbxfAD9PJlH9a+4a+H/APgqjMF8CfC9By58XQED6RuD/OgDY/4KUfG5/gx8DLHw/pk5g1DX3+xKyHDJAi/Mf5Cvy88J/s9eJfGWk2msopt7efw3qHiJZZB9+3tm27v+BFa+xv2rre0/aK/byh+H15ck6PoWjzPLFzgSR2zzP+eU/KtHTwbj4SeHdVSNYLO3+B+oxyIvA+ecoPzIoA/Oz4jfCjxL8IdevNM1S3a7SxtLS8u5UHEaXcPmRg/UZr2//gnr8QrLw3+1RY+JvEV6I7Ky0e5kW4mbOFS3kjC5/wDHR7Cvo742+F4vE0f7SdhLEhvJ/DfgS1hZlBKSSGKPI9OHIr85/GXg3W/hb488U+CJfNOq6fetpeY8hn2yOOAP7xx+dAHtvjH4rQ/HP9rnw9428T6fLdaDqXiSzjmQfdNusiBYl9/LA/76NfS/7fvxt8DeLfDHw21Xwxow0nWNJ19AZEjCFbcodwyAP4ljP4V4x4f0Hxf8KrH4F+Hdb8CtFdWXjW21ItJgtesFH7rp2UGvWP2zvi9oOvfDex8P6n4FTw7rg1C3uY5RIGZtpyVwBxkA0AetfE/xF4T/AGj/APgoP8GLSymj1TTNK0qe8lVlypfPmKpBH+zXVXvh+w8A/tN/tM6fZwCwtdb+Hq6nBCo2pJKIpxMygehK1wXwg1fR/EH/AAUZ8GPpnhd/C0aeF7yU2sjljJlPkfkccZ4rv/2k/FNhcftYyx6dcxzywfCvxFDeJEQfnGCqtjuM0Aey/sBRmP8AY8+F2RjdpEbfmSa+gq8L/YZh+z/sh/CdMY/4kFufzWvdKACiiigAr4O/4KmzPdxfB3SlUt5/iRZSB14AX/2evvGvif8Ab5SG7+Mv7PFnKokWbxF80Z/iXzIc/wA6APH/AAJoEXif9sD4m/EORCso1rW9GjP/AEyi0mX/ANmiH51Cha1/ZAa/BAiT4LCMc85fUDitD4Lawi/Ef4maW0qi5TxV4ouGQn5ip06bB+nNcxrc01p+xrrthJ8ps/gzpfTuZNRkJ/pQB3fxHsUPjX4qc7X1O9+HtgW9t8LY/SvOP2mP2dW8bf8ABS+GDT9Vg0Ke502z8RwzTFVRprfy12ndx8xjY16p8SFI8XeJ5yoaOTxv4AtQT6i3gJH/AI9Xz7/wVK8ZXWnftg2j6XdG1vNN0O1geSNsP83mybf++W/lQB7B+0PpvxMm+KHwHt9R8dWGq3UniIT2s0UkJFnMkPLHHbDN1/u18DfGD4n+J/iv8Yr+61nUP7QuIr7ZGvG1tjrGCMeoB/Ovsn4nxfCy9+L/AMFZ9A128XTZ7m6uruRyo2KLXdGfzO0/U18EfBzTrbxf8afDml3mopp1nqOqW1vJfTOFEQMoLSEnoODz70Afo58P/EPiqL/gp/bXvjKGKC9sfB13sjiIK+SkbkHj6Gvlv4BeO9S8SfHL4y+Ibi7e8lm8JeIpIjIfuq7xjA/Bq+j9E04j/gpNdWdt4nXxeJvAl/sv4phKFL282I8j04/Ovk79mHwzcx+Ffj9r/mvDN4f8J3FqQeNzXF1HGc/hG350Afsz+xegj/ZO+EwHT/hHLM/+QhXs9eMfsYZ/4ZO+Euev/CN2X/ooV7PQAUUUUAFfDH7dryv+1R+y7bpyr63KSP8Attaj+pr7nr4X/bdDP+2b+yiqnj+15yR7faLOgDweN18G/wDBR74r6Xcn7DYXWl6xcWaSHCySTaepyv1O8Co/F0d1F8H/AIt6NPuRbL4PeF40Rv4d9wWb9TVv/grH4LvfBPxi8L/EHSlktm1fT2sZbqPgCaLO1eO7I7flXI6j8cvDXjfwD8erxgbC5n8F6BoNjbyNk3L2pXftx75NAHvfxelTRrjWLq6kW3to/if4Kkllk+6kQs7Ylj7Ac/hX51ftefFj/hbX7T/jnxEkym1k1CWyt5ewgj3RQn/vnaa+h/2wP2nNF8TaX4z8NaE32m21LVtK1Vb5Dw0dtpsUG1e4PmI7Z9Ky/wDgnN+yzYftHfET4g6t4otGl8MWek3GmBxxuvLlShdT6opkI9CV9KAMP9mr4h+G7zxj8INJ1fwzP4kl0SXWHnt7KNWlvLaaz/cjnr5bpIfYCvXvhF4B+F3gH4n+N/FGsfCvxPe2V/cTHTrSeKNorWF5Q/yjsVOVHtxXytbweMv2D/2qo0MUd1rXh5poLZ7iLdFcQyxyJ5gU9irsR9a/SP4Xft+6V8VJLfRNG+FVz4p8QR2Jur5bOWGNSFk8t3AYdCx6e9AHlPwC1bwv4k/4Kd6Xd+ENEm0XRT4UmiktLhArCQRvuJA9cr+VesfG39lPw1+zh+yf8fr7RHkmuvEoS7mknOSim5RhGPRcsTiuK+DWsS+Lv+Cn0OpN4Rm8EG38KtHJpM7Kzg7H+cleOdw/Kvqr9vE4/ZF+JbY3FdPRgD6ieM0Aa/7GwA/ZU+FIXoPDtnj/AL9ivZK8f/Y+Ty/2WvhYvp4es/8A0WK9goAKKKKACvib9s2AS/tifstsRnZqlwc/9t7SvtmvhD/goD4wuPA37Q/wB1q003+1bjT5L66W1GfnKyW2Bxz1/lQB9F/tY/AC0/aN+DereF5CsOoqPtWn3JXJiuEBK/n0/GvxC8XfDTxp8Mde1/wrqnhm/W8tpEjnjhieVC4UdHAwRzmvuvUv+CxE+noX/wCEJsmUhmX/AEp+QOmff1FVf+HuYm1SWG7+Hel+Zt3h2mJZhjJ6jrQB8ifBT9kX4kftGa7Haafo89hpMM0MOpXl0uwwRsWG8BsbsAk4HpX7S/s0fs/aJ+zZ8LNN8I6OBLKgEt9eYwbq4KgPIfTJGcds18QP/wAFdrfSY7c2fgbTYkuIllAinK98EcD1rcl/4K/aJp+Df+G0RWJVfIdnPCq3/s36UAe+ftbfsLeFv2pb2z1e5nGk+ILa3+zC/RNxZAWKgj2Lda/O/wAcfsz/ABK/4J5fEPTPHmmXMmveH7Vo4k1WMbRvL72jdOflwjcnjmvrSb/grj4AtdSFtPp86grId6ox+7/k/lVXXf8Ago78K/jF8P8AxP4d8RaVMdNvrdrGVGhZgVl3ID7HoaAKX7PHxa0L4+f8FEr/AMYeHzm1/wCEKginQjHkzjcJI/fG4c96+l/27VLfsj/EwKcN/ZykfUTRmvyw/wCCcPxy8J/AT41eMNY8WXk40yLSZ447uOLe7COQZO31K4r6w/a2/wCCivwc+Jf7N3jfw14e1PUpta1WzFtaxS2RQeZ5iN8xzxwDQB9lfsw2I0z9nf4c2oGPK0K0XH/bMV6dXCfAizaw+C3ge3cENHo1qCGGD/qlru6ACiiigAr5o/a5/ZY1f4+6z4U1zQNefQ9Y0JJo4pFfaMO8bZHHUGMUUUAfGGrf8EefFl5aAxeIbA3BkclHlbZtJ69OtYGqf8Edvibd3Imh8SaOsgVfnaZ87gMHt6YoooAoL/wRu+KyS2zjxFoTiJlO1pnxgHOOnrVaX/gjh8YvnZPEmgF8HaWnfqRgj7vQiiigCO5/4I9/GXMhk1zw7L8hKv8AaHyozlgOO+SK4PWv+Ce3xe8L6XqdvJqujGAJHeylLhtxAyyY4/2ifrRRQB5UPgB4s8G3WpwXM1jK91aTWxIkJwWAyelc1/wpfXgL957uFo7aJ7iXDnLBcD8/mFFFAH9HXgOzGn+B/D1qHaQQ6fbxh26nEajJrdoooAKKKKAP/9k=",B5="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWkAAABFCAYAAACIYhe3AAA4TklEQVR4nO29eXgUx53//+rumdFodEvoQic6OARIgMQNtjHg2MH2z9hO4iPeJM7uEidOHO9u1llviEP2yTrOOuuNnZ83JFnjDYnXx3ptY+MjYMAcRpxCXEIIoftA50gaae7u7x+jLk3rQGBwDHjez6Nn1F1d1VXV1e/61OeoljRN0wghhBBCCOGKhPxZVyCEEEIIIYSxESLpEEIIIYQrGKbPugIhhBBCCNcycnJ+S2eXjKZpmMwyNpsVR08vmqYgyR5iYuELN0/nh48tIzUVLGZQlKH8IZIOIYQQQvgU0dWpMSEpnuU3FjF3Xi4WCzj64OiRat5+eyv2Lj9vv3WU1JQJPPjgTFJTQVZAGsz/CUlaHfwNaUtCCCGEEM6H+AlJrFyxkFtXpRARGSBgvw8yM3KZPCWHXz79R5zOfv77xS0sWTyTxCQwmUAaZOkLYllt8E8caxKapqEJsg4hhBBCCGE05ORMYMGCFCIjwWwCSQaTBeLiYOZMibu/tBKTWaLHLvHRztOoPmP+ixaFhzz2ZDRC3nshhBBCCOdDfFwEqcngcMD2HRX87ndvcaqiBSSwhsHiJSlYwmRUNYyysjN4fBDsGH1edYemaUiSJHQj+rEOCWX0jCGEEEIIIQAQFRWHX4X6OnjjjSN0dp2jv9/M9GmpSDLExUJsjI3+PgftbXZU9SJIOpiQRzsOIYQQQgjh/HD2R9DeBicroOYsyMoEerrC8LkDqo+BAXA4fKhaGF5f4FywInlcw6GmDemjg9ld00AaPNYGuVu6SrUfn1b9NW1I+S9pg7olFVA18KsB64HfH1gHZSZd3pv/JbHvGCTEQUzsoElaJtDQS/yVCPxpMshSoN8AVBXa26GjC64r/ku18i+DXYdhUjaEWwNvqywNDhwZ0AJWJx3yoLZSJjDQBvtLkzivtWj4e3ulQZKMXPNJ837S93p4v1xMfr8PXC74rxfa+dV/HKW9w0ZsXDRHj/vo7LDj8WRiNrvx+RJxugLc+ucP+ujri0JVPaOWOSZJa2qgAJ8ffD5Q/QE+URk0JGpDmVXdCjnYGJ2YtGHHwefOh7HyX2h5n+T+qvSXrL8EKKApyBKYI22EnQO8gG/wzw+cbYDWFvjGvPFv+mngxcMwMQWyJ4JCgARkAg9+kDOQQc2biUsCnxw4NV77x8OY+Qd5SFHAlBKJKXESSutgJn/Qnwo4vHDiJNxX9Ima/qlhYxnExkJ0FISHQ0wEmAn0qQm0KXNwmQN9qc9JglQ1AnOXNEhGXoaIOahvh4/X4f0p68dB6cPzn6+88XA58gdfeyHHweXK8qBwOcr1wf0xFjTZWH6wUnd4fw5vm18FjxtcrnjQYvD7wmhrk+nsHED1W0CKQ1E8eN3RnD0Le0vPsm1bDS5PeIAXtJFELQXv3aH/IxEgZLcLOrugrFzjSFktDfVtdNtduD1+NGRkDSRJQ9P8IGnIWmD+HiLtgESkSoFfWZORJA0/kjgOTh+SpPT8DCvv/MfDcSHpxrTh99ftqka5ZNz6yIHrZTXgwK4NvhWSGtDp+wn8ikkBFUUDk6oG+M+vYdJUFDVwHs2PjCSMtgGS1xjypBwNw9Mv7liTQEPGL8n4ZPBJGpqkDJ6XUAfTVSnQfr8M6jA79MU+vws9DlTQj0lTkAJLE2RAUUFCQ9HUQF+qoGjqIMlpyCooDPadpCKpsmgrkjr0dkrq4I8xfbzj0fLrUlmgf5RAX0l6m+TBYxmfAn4UfHLgOFhoGK8/NHlobFxK/19J+TVNQ9ZAlmX8g8w0Wn79f00aX+Idyj/ERwH+OX++C20PyKiqFbQY6ut91NZouNxRaJoZ3UdDwouiDGANdxMf56Wvr5e+fhMgIUkOJuc7+XDHPURFg2VwOI0qSfu8MOCEbdvsvPLKRxw/cY4eu4rXAz6fCZ9mw6+akDUZWVJB7kfChSz50TQVBgeNpEmBWU4aNDpqAYLRBklG0gK/Yy279E5XBx/SWOoVTRpdXz7esm78dD1h8P7iP+OgGFEfWQ3Uxy+NWd9PUr+rJb8wOGuD3kBiPOjP/+LLV1UVWZ9E9EnvYp+vqt9/9PF0Ke0fjSSHj099POn3FxOv3j+SkWz1/tLHv379pT6/4PdJLz/4/VHVwPjV+3uo/7RAPRX5ku7/Seqvj59Pkn+s8XKxap9x2yPJaKoZVbXh94fjVyOR5X6QTIEJXFKR8AMDeNxO2toGkCTIysyh3+Gkp9crCh1hODRI0L6AivSPf6zhpZdLqa7qwuXxIEkQGWEmJiYGn5qEqkaCZkZRnMhyI7LsQZa8IPmHBtso05skSWjqYAsvZPr7LHGl1y+EED4ThOIjxoKKH1Q/muQEtR8Js6G3ZEXDFm4iLtZKbm4+RUUzmTLVyrqfvMuJ43ZkySJMMToMkrTfDx4PvPd+D6+8vJfTp7qRFTO33rqYFTfNIj0Vurug7AiUl7tw9HvIyo7mlpsgKzvg8ycMZWPMTsN1VcP1RcF5x9IJh9JD6aH0UPqVmK7q12CEJA3ZvWQlsD9HmBWs1sC11vAuJGkApJFuzSaAwIJHxuuDhkb4n5d2cqqyE7PZxF//7R3cdnsSySlQfRp27Ghn64dV9PaY8Pr91NZ5cTtjWffTQjImBiJpxlPMhxBCCCFcyzjfIlySEAZ2VQ1oLiTJCZKH0VYpg5K0jKYGJOmtH57ibE0fHo/Cbbcv5aabksjJgc4O2Lqlhrc27aSv14KkxGAyWenu7KT8SAOlpZPI+lIUYRaQZKPEPKKCIQ1CCCGEcK1C5zhtSFsw0ntm0InAN+hJOagq1o3OwRhSd2jg9cHe0uP09nqQZFi4IJfcnEC8eXW1iwMHTtPv8DC1IIeVK5cy0A9//OMr9PX5OLC/krvvKjFUZMw2hCTtEEII4RqFpmkBvbI8RHRGlcnFSanCZ8qnBfwyGxs7cHtlomMTSEgMJzw8kN7Y0EZLSw8WayT5+SnMng1pE8FmVfD7FNra+0Az6pbHakAIIYQQwrUKSZJG9TYbStdGpMva2OqRwSA4LSCCq+Bxq6g+M45eL64B8HoD590uHy6XF4tiwhZuCpC3Bm63F00LiO2qqrsbnb8BIYQQQgjXKjRNG0cYHbavnRQgbhgWCzDiat3nTzWhEYbHY+XosTZazwWI2q9GomnhqFoYGmZcA9DZCU6XhIoZVR3bqT2EEEII4fOGC9Ua6DrqsSADSEhCTaFJZlQtHL8ax5tvHmfvHmjvBI8nHr8ajUoMXu8EmprgwIFOvL5oNC0MTQpEIIZcKK8MXA610nhljJb+WamzrlY12tVa7xDGhq7uuFCtgWbgzPMYDg1WSM2EpkbQ2NjLr5/fS13dQjq63Pj9Uah+hbPVPXR1Shw+UoOmRaDiAE2+Jrw2hm/HerVgxDayl6ENehnB0XDBv6NGeX4GfXepz2x4u/4SGK0Pr7axd7H9drW17y+Lsbf2FyStDSquFSQkzQ/I+P1mas728N8bdwImeu0KGjInjjcBTQw4QcIEmjL4ABBqk6sVf+mX9HJhvLIu5X4jwpWvsBdt+GRyqeUMx6WUO1beK2WC+6QIbtfFEvTnh6w/yWcGR147cu8OyY8k+0hKtlI0M5+aupPU1zfg90lImg1Q8Lj9yGYLUZExqJqKpnmQibhqJenRBs2nPaguJyFcSJ6LKXO08q4Gie9SJqFgXM5VyZXYT5cL5xsHn8bK7vOKIXWHTuCaF0nqx2azc8fqQiamLab8SBvlR05yrsUOaCQlxzOzcC6SFMZ//+EDOjr6QIoKSNJXwbO4kAH0aQ6w8w3uT3Kv800mxp3zLr28T1rHzxIXO6l8GhL1tYbzTdrj9dPnpw+HScUagh+D/h0Xo0rSiuzBJPeQnALFxTB9ehL/3x1JeJyB6BiTCSxWOHkcwix9KLInEC1zlUAfJA6Hgw8//JDdu3fT0NCAy+UiKSmJpUuXsmzZMtLT0z/V+18uqKqKLMv4fD7OnDnD66+/TllZGT09PaSkpHDLLbewatUqYmNjL4podDWH3W5nx44dHDhwgNraWgYGBgCYOHEiCxcuZPny5UycOPGytulyYjR9+nD4fD5Onz7NRx99xLFjx2htbcXr9fLDH/6Q4uJirFbrJ3puXV1dvPTSS+zfv5/+/n6mTZvG/fffT35+PibTuN/cuCowHkHr53y+wBdWg9sdmvjGh3GUDPrraZoXSfJiNkFE+NAHNyR1UMsigdsNVpsec+4Ve0lfmMpD3zv6s8PRo0d58sknOXToEB0dHXg8HiIjI5EkiXfffZc77riDb3/72xQUFHxqdXC5XJw6dYqjR4/S0tJCc3MzK1asYMWKFYQPRhFdyCCWZZmenh7eeecdnn76aZqamujt7cXv92M2m9m5cyeVlZWsWbOGtLS0C6qbpml0dXWxceNGXn31VVpaWnA4HERERBATE0NbWxsDAwO88847vP3223z3u99lyZIlf5EXLrhP/H4/u3fvpqamhqamJpqbm3nggQeYNWsWVqtV5BlLf+p2uzl27Bi/+c1vKC0tpbu7G4fDgcfjwWw286Mf/Qiz2XzRdfT7/dTV1fGtb32LEydO0Nvbi8/nY8eOHZSXl7Nu3TrmzJkzZruuVoxWf4fDwYsvvsjbb7+N1WrlvvvuY/Xq1YSFhV317b0oSKP+GwQZsSd5EExa8LZOgKb5B/c8DfzKsoJZGVSH6L7UBL7WosiA5EFi6BvkV0OfHzt2jEceeYQDBw4wMDCAzWbjoYce4tZbb2Xnzp28+OKLbN68mSlTpnyqJN3R0cEzzzzDtm3b8Hg8uFwuli1bdtEDd2BggF27dvHjH/+Y2tpaFEXh/vvv52tf+xr//M//zMGDB1m/fj033HADycnJ40pwPp+PiooK1q1bx+7du+nv7yc7O5tZs2YBAenwgQceYP/+/Xz44Yds3ryZ2NhY4uLimDFjxiftjgtGcP+4XC6+973v0dnZicfjQZIk7r///gsi1q6uLjZt2sQzzzxDXV0dVquVc+fOifTc3FxiY2NRlKGdyS6USB0OB0899RQfffQRHk/gaxsJCQl4PB527NjBsWPHmDp1KjabbdR2XU3QNA2Hw8GmTZtoamqitbUVn8/H97//fXJyctixYwevvPIK+/fvFx4tGRkZLFq06HNoTLx4mCRJGuGQYdgEWwr60fUpmvFTa5o09DWSC8NnJ0U7HA5++MMfsn//frFs/6u/+isefPBB8vPzqa6uxmKxUF9fT1NTk8j3aQwih8PBzp07aWxsBALLwBkzZhgI5kLu2dTUxMsvv0xtbS2SJDF58mTWrVtHWloaqampKIpCe3s7jY2NOJ1OoqKixixL0zQqKyt5/PHH2b59OzabjX//93/npz/9KXv37sXv92MymZg3bx4lJSXU19ezb98+9u3bx6lTpwwkfTn7bLSyfD4fVVVVnDhxAlVV0TSNGTNmEB0dbSDW0WC323nrrbdYt24dXV1dLFq0iFmzZvHUU0+JawoLC7HZbBflyaBpGqqq0traymuvvSYIOjY2ll//+tfs2rWL1157jYGBAVT10wsquFg98YVeE3wtINQYpaWlrF27lv7+fjweD4sWLcLr9QIBYaS7u9tw3NPTEzIsjoA6zgZLw6BdKOleRZvi+/1+1q9fz549e3A6nQAUFBRw1113kZ+fT2VlJdu2baO+vp7o6GhiY2NF3vE8AC4Uej63201TU5OYCGRZJicnh4SEhHEJZjg6OzvZt28fqqpis9lYuHAhGRkZbN++nYMHD+J2uwkLCyMhIYGwsLDzltXS0sLrr7/Ohx9+iMVi4cEHH6S4uJj29nbcbjcAJSUlTJgwAb/fL8obGBgQ6Tou5oUf7drxyNHr9XLw4EED2RUWFhIRETHu/crLy3nuuedobGxk+vTpPP7447zyyiuG64qKioiIiLgoaU9/tgcPHqS7u1ucnzdvHgsXLmT27NnceuutTJs2Tai0Piku1r5wvjwX680UnO71etm7dy/19fX4/QHb1OTJk4mMjARg8eLFbNu2jbq6OsLCwsSEeCn4JAbxqxXXhuXiAqDrWH/zm9/Q19cnBuLtt9/OlClTMJlMREREkJWVRWFhISUlJdx8880iv9Pp5MyZM9TX12OxWMjOzqaqqkqkJyQkMHPmTMLDw4V0sWXLFvbs2UNzczPnzp3juuuu47HHHgOgv7+fEydOCOkCIC8vj927d6MoCgkJCUyfPl0M9PPB5/PR29sLBAatLMtIkkRiYiK5ubkoisIdd9zB9OnTx1UDtLS08Oc//xmn00liYiL33nsvFRUVwugDsGDBAmJiYnj77bdpbm4GIDs7e1TjocPhoLKykra2NsLCwkhLS6O6ulqkp6amMnXqVMLDwzlx4gRNTU34fD40TSMuLg5Zlunq6iIuLo4pU6YQHx8v8no8Hvbv34+machy4HuSM2fOFCuFiooKGhoa8Pl8xMTEkJeXR3JyMna7nfLyco4fP05UVBRLliwhNzeXQ4cOGequk3RlZSUNDQ1CKo6Pj0dVVex2O/Hx8eTn55OQkCDyuVwuDh06ZPAvt9ls7N27l5UrVzJp0iRMJpOwSVRVVeF2u8nJyaGwsJDo6GggQH6tra0cO3ZMlJ2cnExubi4NDQ1ER0eLPj969KhQ1ZjNZmw2G36/X9gRpkyZQlJSEj09PZSXl+N0OklNTaWoqEiMGx36/y0tLdTU1NDb20tsbCxms5lz584hSRIWi4XMzEyys7M5ceIEW7duFQQNAV1/XV0dkZGRdHV1MX/+fJKSkrDZbNx0000kJSUZ+trpdHL8+HEqKyvxer3k5uayaNEig2quoqKCpqYm8Rzi4uKEYTs2Npb8/HwSExNHjMGrHZ8bkvZ4PLz//vvU19cLySsiIoJly5aRnJwMQFpaGt/+9rf56le/SlRUFImJibjdbg4cOMD69es5cuQILpcLWZaJiIgwkP2dd95JVlaW0DFWVVXx0ksv8d577+F2u3G73SQnJ+PxeLBYLPT19XHixAlRP03TKC0t5fTp00BA9bFw4UIee+wxJk+efN6lq81mY9KkSbS1teFyudi5cydNTU3k5eXx/PPPC6+VCRMmjNtPfX19NDU1oSgKcXFxZGRksHHjRkMwS0lJCTt37mTjxo3U19cTFRXFjTfeSGFhobhmYGCAPXv28Nvf/lZMRrIsY7PZ6OvrEwT2zW9+k8zMTMLDw/nNb37Dli1b8Pv9aJqG2WxGkiS8Xi8Wi4U5c+bw/e9/nzlz5oiJ8PDhwwDimRYWFmKxWNiwYQN/+tOfaG5uZsGCBTzwwAOC/JxOJx0dHXi9XiIiIsjPz2dgYICTJ0+K+sfFxZGTk4PFYmH9+vVs3bpVrL70ic7r9WI2mykpKWHNmjUsXrxYtP3o0aOGPtu5cydtbW3MmjWLhIQEYfs4fPgwPT09qKpKZGQkt956K9/97ndJT0+nt7eXN954g+eee06Uk52djcvloqenB6vVyg9/+EPy8/N59tln2bNnj9D5KkogwExXT02ePJkbb7yRd955h4aGBrEKuvPOO/nBD35gUIF1dnbypz/9SeiYfT4fFosFWZZxuVxAYHJ9+OGHiYuL4z//8z8NE5wkSbz++uvk5eUhyzLPP/88H3/8MaqqkpmZycyZMwX5ut1uDh8+zHPPPUd5eTn9/f1iRbhq1Sp+8pOfCIP+7373O7Zs2SLqMPw5zJkzh+985zssXLhw3HF+NeFzRdLvvvuuQSIsLCwkPT1dPGyz2UxaWprwgPB4PGzbto2f/exnHD58mIGBASIiIpg8eTInT540LO/j4uIMUmppaSllZWV0dnaKc263G6fTKUj6+PHjIk2X9Lu6usS5pqYmFi5cSHJy8nlVL9nZ2XzjG9+gsrISu93O2bNnuf/++3nggQe47777DMvqqqoqNmzYQHFxMbfccouQ/HXij4yMJC0tjbq6OkEyBw8eNBDOs88+S29vr5AuCwsLKSoqIi4uDgiQ4HvvvceTTz7JyZMncblcREZGkpeXx9GjRw0S14QJEzCbzTQ3N3Py5EmqqqrG1NW2t7eTlJREcXExmqbR19cniFWSJBISErBarfzsZz/jrbfewmw2c88993DrrbeSl5cnvD0iIyNJTU0Vk4Db7eb06dM4HA5xL30V09fXR1lZ2YjVRDBaWlqIiYlh4cKFSJKE0+nkyJEjIt1isfDoo4+Sk5NDUlIS7733Hv/xH//B3r17cTgcpKenExUVRWtrK5s2bSInJ4c1a9bQ29tLaWkpZ86cEWU1NDTg9XrFx2I3b95McXExFRUVhhXKcNTW1nLgwAExOelobW3ltttuY9asWZhMJux2O7/85S95+eWXaWxsRFVV0tPThbeK/mwsFgspKSlYLBYxyenIyMjgG9/4BsuWLaO2tpYTJ06IuqWlpQl1lNvtZufOnaxbt46ysjKcTiexsbGUlJSwZcsW2traWLVqFYsXL8btdlNeXs7JkydF24fve9La2kpcXBwLFiy4ptQgnyuS/uijjwwPtqioSEhXo+Hw4cOsX7+e/fv34/V6hfSwdOlSvva1r1FTUyMGS1FRkZCiBwYG2Lt3LzU1NSPq0NfXR3R0ND09PQbJTVEUvvjFL9LW1kZZWZm4tq6uDofDYSDpYPT29rJ7925effVVQTJ+vx9FUYiOjqasrIyzZ8/S3NxMY2Mjhw8f5tSpU9x9993MmDGDKVOmAEO+xJMnT+axxx7jpZdewuVycfbsWQPhSJJEfX09PT094mWvrKzkgw8+IDc3lylTplBaWsrzzz9PeXk5Pp+PjIwMHnvsMaZPn87q1aux2+1C4ps5cyYREREcOnQIu91uIIGFCxeiKAofffQRfr+f7u5uTp06BQRUCidOnBDSraZpWCwWHn/8cWpqaigsLORv//Zvuf7660fo+SMjI1mxYgVr167lyJEj9PT0UFZWZhgbc+bMISwsjDNnztDV1WXw8V28eDGaprF//34h1dbU1OB2u5EkiZqaGoM+Oj8/n3vuuYeUlBQaGxt5/vnn2bVrF06nk7S0NNasWYPP52P9+vU0NjYKH/ePP/6Yffv2IcuyIKa7776b1tZWPv74Y5xOJ+Hh4Zw5c8YgDMTHxzNjxgw8Hg+lpaVIkoTL5cLtdrNq1SpOnTol+rGzs5Pa2loKCgowm81s2LCB1157TRDyzTffzN/8zd9w7NgxfvGLXzAwMIAkSURFRTF9+nQURRlhiC4pKeErX/kKubm57Nixw9AXEydOJCMjA4Dy8nKeffZZYU9JTEzkscceIywsjC1bttDd3c2BAwfIzc0VOm19fMiyzNKlS1FVVTwHu91OdXU1brfb4H55teNzQdI+n4/m5mba2toM5wsKCgwuUMFob29n+/btfPjhh3g8HiIiIliwYAHf/OY36e/vN5QVFxdHVlaWGBj79u3j5MmT+Hw+TCaTWL673W5cLhf9/f3U1tYKPbLJZCI/P5+nn36a3/72t5w8eVK4k1ksFrF0BaMUrbuQ/eIXv6CmpkboXh955BHuuOMOnn32WcrKyrDb7eIldTgc+Hw+wsLCRhgRdUl6+fLlzJgxg/7+fuFzrd+/qKiIn/70pwwMDPDUU09RXl5OX18fb7zxhjDa6bp4vT7Lly/ny1/+Mg0NDfT39wMBUs3KyiI5ORlFUaioqMBut4u6zJs3j4cffpgzZ86wb98++vv7URRF1NntdlNWVmaQqDo6Omhra0NVVQ4fPszvfvc7oqKiWLZsmSBpXX+dk5PDQw89hN1up7u72+DVAQGStlgsHDt2jL6+PsP5b33rW9TU1HDq1ClcLheSJGEymTCbzWKFFLwamDNnDgkJCURERLBx40YOHDggJpeVK1eycOFC3n33XTo7O/F6vWzatInjx4/T2tpKQ0ODCFZKTU3lJz/5CQ0NDfz+97/HYrFw//3388ILLxhWYCtWrGD16tVs2bKF0tJSNE3DZrNx/fXX8/jjj/Pkk08KkoaAukyWZY4dO8abb74pyHDSpEmsXr2aJUuWUFFRIVaO4eHhZGZmEhcXh91uN5QFMGvWLJKSkrBYLJw+fdowgWRmZpKRkUF7ezs7duxg27Zt+Hw+bDYb8+fP584772TdunXi+v/6r//itddeo6Ojg5aWFnFeVzHV1NSI1Zosy5jNZiwWC9cSPjckXVNTI5bZ+os9ceLEMWfc06dPs2fPHvGCJicns2rVKqKiojh48KCBbKZPn050dDSSJOH3+9m8eTPnzp0jPz8fu90uPDi8Xi/9/f309PRQUVEhXmSTycTy5cvJzc2lu7vb8IJnZWURFRU1qvvZ/v37+dWvfkVlZSWqqhIdHc2Xv/xl1qxZI/yXOzo6RiwLi4uLWbFiBampqaINevm63jg7OxuHw8GWLVsM+YuLi5k7dy4xMTGUlpbS0NAgXqDTp09js9nYs2ePkConTpzIbbfdRnh4OMeOHcPr9RpWH7oqpqKigp6eHnGfkpIS5syZw+nTp4UOMioqiqysLGDIOBdcN92gBIEJbNeuXaSkpJCSkiK8CfR2KorChAkTmDBhAlVVVSNWC7NmzRLGTH0yBZg/fz4lJSVUV1eLsREVFcXEiRNRFAWHw0F5ebmhrOLiYiwWC01NTWzfvp2Ojg4goOpZtGgRBQUFhn7WJ/ekpCShJlAUhVmzZpGdnU16ejrZ2dnIskxkZCQtLS2iLjExMRQXF5Oenm7oz8TERFauXElycjLt7e3ivNlsFrr3d999l7Nnz4oV0oIFC5g3bx69vb0Gz43o6GimTZsmJPThBtc5c+Zgs9no7e2ltrZWrPBiY2NJS0sTY2fHjh1isoqLi+P2228nLi5OeNToKq3c3Fz6+/sN74DuAnr27FlRflRUFOnp6cjyZxsod7lxbbVmDPh8PvFiBEtew/XIwaiqqjJY1RMSEli6dKmQ4IIxe/ZsgxRdWlrK1KlTmT9/vlgK6rpPnaSDVR36ElqWZY4cOSIkluTkZDIzM0eV9hsaGvjzn/8sfIQh8CJ+5zvfIT4+nqNHj2K32zGbzUyaNImwsDAKCgr4h3/4B375y19y/fXXC6l0rP05nE6nMMzp53TyCg8PJyUlRdTN5/PR39/P8ePHDbr2pKQkFi1axMDAgOg3vf/1fvN6vVRVVQlS0Q2hmqbR3NwsyCE2NlYEF7lcLgOxKorC3XffzZo1a4TngMvl4ujRowZ/9+HQPSgaGhpEG7OyskhNTcVkMnHixAkxISuKQl5eHmazmZaWFjF5JCQkMHXqVCRJEkZDHZqmCZI+cOAA586dE+0pKCggNzeXxMREMjIySEhIIDY2lttvv521a9cKVRQExsjcuXMBsFqtTJo0iaysLJqamujq6hJlpqenk5WVRXd3N3V1deLZxsbGMmvWLJxOp8FgnZ+fT1xcHJIksXfvXiH16qqovLw8mpqaqKurE+djYmKYNm0aqqricDgM5cXExDB58mSDqkgfnxkZGaSlpSHLMrW1tRw5ckSMhfj4eG688UYsFgvz588X5x966CGefPJJEhMTDUJNbm4uJpOJ5uZm8b7oz+Faw+eCpIP3DQiWvIKXwMEYGBigvr5eLK9kWSYxMZHs7GwGBgYM5ACIEOSTJ0/y3HPPcfz4caZOncq0adMEiWmahsfjobe3VxjJdOieC42NjcJlDAIvcUJCwgjJQNM0ampqOHjwoLjWbDaTlZXFtGnTUBRFSGgbNmxgyZIlhIeHc++99/Ktb32LhQsXnlcXr8Ptdo/qlqZLvy6XS0jGENCF2+12obawWq1MnDiR5OTkEaQKAYnLarVSXl4uotQgQDQpKSk0Nzcb9Prx8fEUFRXhcrmorKwUQUAAOTk5/OM//iO33XYbMTEx4rzujqj323D09/dz6tQpIYVLksTs2bMJCwujtbWVxsZGw6SZmppqIHUITEQFBQV4PB7q6+uFa6Ysy8TExAgXz6NHjxqMk5MmTSIpKQm3201nZ6dw6SsqKiIpKYnW1lZxrclkori4eMRYqKioMOh8MzIySE1NpaWlhdraWtGmmJgY4TYarFZasGAB4eHhNDQ0UFdXJ9Q38fHxTJw4kYiICBobGwVJa5omJkun08mBAwcMbSooKCA6Ohq/38+hQ4cMapiMjAxSUlLo6emhtrZWSPRms5mkpCQyMjLw+XwGA+h1111HTEwMfX19YnykpqYanoP+XCdMmMD06dNHPOOrHZ8LdYdu6BiO1tZWsUeDDpfLxauvvsprr70mln1hYWFER0djMplwOBzs37/fUPasWbPo6elh7dq1fPjhh/T29uJ0OoVOWUdHRwcbN26kqqpKvECKogiJOdjNS5dkggkn+J7d3d20tLSIAaooChaLBYvFgqZp3HjjjeTm5tLV1UV5ebkIcsnKyrqgjX38fj8dHR2GFyYlJYXMzExMJhOqqgrpV9M0YmJihDeEbuQKCwsTmzp1dnYaJEyLxcL06dOpq6vjiSeeEK6HEPBWSU5OprGxkfr6eiBAeBMmTGDSpEns3buXRx991OBtUVRURE5OzgjCzcjIEL7VY+0rEbxikiSJkpISzGYzBw8eFG6WgJB69WhU/XxiYiJ5eXns3buXH/zgB8LTQZIkYVCWJMkg9UFAuo2MjOTEiROUlZXhcrnIyMiguLgYu93OiRMnxMrPYrFQXFw8og0nT54U0XuappGdnU1UVBSNjY10d3ejaRoRERFkZmaiKApHjx41qNPmz5+P2Wzm6aefNhBxZGQkEREReDwe6urqxKSku2ampaWxa9cunnjiiREGV7PZzBtvvMELL7xgmMyysrJIT09n165dvPnmmwYBQ1/Vnjt3jldffRWAKVOmkJeXx/Hjxw3PIScnh+TkZBoaGgwTdWJi4qe6jcNnhWtaktYfqtlsJi8vb0T02iuvvMLZs2fx+/14vV7Ky8v5l3/5F/7t3/7NQBo+n4+2tjb27t3L+vXraWlpEWVYLBYiIyPZsGEDe/bsob+/n6VLl7JixQpUVTUYTWpra9myZQunT58WL2tYWBiFhYUoikJ1dTV+v1+8cIqiUFZWZthPQocsywaPBY/HQ01NDYcPH0aSJMLDw6murmbt2rVUVlZy2223iSVicN+MBafTaSA8CEjWe/fupb+/n48++oiKigoxqUybNo28vDzD6kSPqtyzZw/PP/+8QYLTJfnf//73lJaWikkNAhJmamoqnZ2dtLW1iQAdTdM4evQozz777AhjlW7oq62tFWoITdMICwvDbrcbnkNw2x0Oxwh99Ny5czGbzcJvV4dO0u3t7Yby/H4/p06dYv369Rw7dkyUL8sy8+bNG7PPu7u7qays5H//93/ZtWsXMTExzJw5k6lTp9LS0sK5c+fQNA2TyURmZiZJSUkjXM90g6tuENU9J3RfaAhMBlOnTsXn8xmka72O//M//8PmzZuFukmSJBwOB3V1dbz22mt88MEHYuLRg74aGxtZv379CLe/yMhI4d0TrLrTvXn279/PH//4R8OE7ff76enp4cyZMzz77LOcOXMGSZK47777iI2N5fjx44bnkJOTQ2JiIh0dHUJS1+1BbW1tVFRUcC3hmpak9YFoMpnIysqiqKiI8vJyMci3bt1KXV0dqampOJ1Ourq6aGxsZNq0aaSlpbF7926cTic+n48DBw6wZs0azp07Z5DgvF4vX/3qV2lsbBS6wa6uLl544QVqamqor68X9UhPT2fhwoW0t7fzwQcfAAGSnj17NrIsi6W5Xr9XX32VI0eOkJycLAJuIPCy65F6lZWVQCCYo66ujr/+678mOzub3t5e6urqqK2tpaioiK9//euGiMDxQoOHkxcE3P3Wrl3Liy++SHNzM9XV1WiahtVq5cYbb2TFihWcO3cOi8WCx+PB7Xaza9cuqquraW5uNpBLT08P9957LzU1NYK89fTs7GxSUlIM5Oz3+9m/fz/f+973DEtcHbred7g6YPv27TQ0NPDoo4/y5S9/2dB23TClv9SSJGG1WikqKsJkMonIPB15eXkkJiYKwtFRWlrK2bNnaWlpMUipiqIwf/58USd9QyVd8n3vvfc4ePAgnZ2ddHd3Cy8Yj8fDmTNnxARpNpuZNWuWmAD1e7e1tdHY2CgmpcTERFJTU+no6DBIsDpJDw/9BvjFL36Bx+MR7nxOpxNVVenu7ua5555DURRaW1vF9V6vl507d/L1r3+duro6kpOTDULESy+9xFtvvUVjYyORkZFistY0jTfffFMEo+gqDKfTicfjYd++fdxzzz3Cs2TOnDk88MAD2Gw2MVnq74Y+WQ4P8Nq3bx8/+tGP+OpXv8q0adO4VnBNS9I6JEkiNjaWtWvXEh8fLx5ub28vZWVlfPDBB2zfvp3KykqWLl3KP/3TP/HII49w/fXXizL6+vo4ffo00dHRLF26VJxXVZUDBw6Qnp7O3/3d35GXl0dVVRVbt24VbktWq5VVq1bxzDPPcNdddxkc/61WK3PmzEGWZW644QbDXhGNjY1kZGSIIJHg9hQUFLB69Wqys7PFeV3vu3nzZrZv3051dTU33ngjTz31FIWFheOGhAcPeqfTafBSgMB+DLW1tWzdupXjx4/jdDpRFIW77rqL1atXk5WVxdy5c5k3b57om+7ubqqrq0lKShLn9SjC/fv3k56eLnTckiQRFxdHeno6kZGRTJ06VegYdZVJTU0NsbGxhrqGh4dTUFCAxWIRftE6kXZ0dBAWFmYIJw9uY21trZCKZVlm6tSpxMTEoKqqaKP+nLKzs4mNjRXSro6uri4RcBLcx4qiMHfuXOFCeccddzBr1iyxaVN7ezsnT54UBP3II49QXFxs8AeHwEQ+fFtTGPKI0QlUX4E0NzcbSDouLk6064YbbjC4XlZVVdHW1sbDDz/MmjVrhMePPunb7XYmT57MpEmTxHNob2+nrq6OW265hSeeeMLQZl1//eCDD/Lwww8LyR4QbrDLly/nZz/7GatWrRJ909vby6FDh+jt7WXRokX8+te/JjMzE7/fT0VFBQMDA2iaJtz/4uPjmTx5Mrm5uaL83t5eent7mTlz5oi+Gm/leCXjmpakg2Eymbjpppt48cUXef311zlw4IBwd0tKSqKwsJDly5ezYMECMjMzUVWViIgIpk+fzrFjxzCZTMyePZubb74Zi8XCH/7wB44cOUJiYiILFixg2bJlZGRksHTpUt5//30hnWVmZjJv3jyxP8TJkyfJyckRUkZSUhJFRUVIUmD3up///Ods2rSJvr4+Zs+ezVe+8hWys7NHhIJHRUWxatUqoqOj+b//+z8+/vhj2tra8Hq9pKSkMGPGDG699VaWLFnC5MmTDbrxC9lAR1EUUlNT+cIXviCuXbNmDS+88AKHDh3C5XKRmZnJqlWruPPOOykoKBBeKj/+8Y/ZtGkTp06dwmazMXfuXFauXInP52PDhg1UVlaSlJTEkiVLyM7O5vXXXxdEmZmZSX5+PrIsU1JSwt///d+Tk5NDVVUV0dHRFBcXk5GRIfSWgNA7S5LEnDlz+Nd//Vc2b97MmTNnyMzM5Etf+pLwjAiGbvT8whe+AAQIdunSpSiKgt1up7CwkKSkJPGcpkyZgsViYfbs2TzyyCNkZ2dz6NAhzp49S1dXlwhp1vsvIyODiRMnCkk6KyuLn//853zwwQciHDw+Pp6SkhJuuOEG8vPzxccFUlJSxN4xMTExLFmyZET93W43c+fOJTMzE03TWLRoETk5OfT39zNz5kxycnKEjj0nJ4ewsDCWLVvGM888w/vvv09bWxuTJk1i1apVLFu2DFVVmTZtGlu3bqWjo4PU1FThM3/q1Ck2bdpEZ2cnubm5XHfddSxevFjsLfPOO+/Q399Pfn4+N910E/Pnz8disZCens77779PT08PWVlZLFmyhCVLlpCYmEhJSQnz588XxseYmBjmzp3LTTfdxLRp05Blmc7OTqZPn05iYiKappGSksKUKVPE+HjooYdISkqira2NKVOmcMcddxiIW0fwCuJqi0aUNC0wx/j80NcLt936K86csZGUGMsvf3knS69TCAsLfJFFh6qB2wN7d8Ojf/97Wlo8LFyUwx823ExkJChXMPV7vV7htqSH15rNZuLj40lKSjJIsrrVXV+exsbGipe2ubkZu90upLS4uDgURcHlctHe3i78Vm02G3FxcURFRSHLsggQ0V9ms9lMdna2WMr29vYKlUpMTAwTJkw4r3P+wMAAra2tdHZ24nK5UFWV8PBwYmJiSE1NHdXHejhGG7hut1voNXUpJDMzk4aGBrq7u/H7/dhsNlJSUkRotw6n00lnZye9vb2YTCZiY2NJSEhA0zQRHGO1WkXb9K+gQEAqnjBhgjC2DQwM0N7ejsPhQFEU4uPjsVqtNDU1iTpbrVYyMzMFGTqdTtra2nA4HNhsNvFch8Pn89Hd3W1wO4uJiSE5ORmv1ytCsCFge0hOThb16u/v58yZM2zYsIGNGzeKcaC7o1mtVm6//XZefvnlEcvyrq4u7Ha72JMkLi7OsL3qwMCA2IcFAgJGenr6CJ/+rq4uwxag0dHRxMfH09fXR1dXl3hukZGR4itDuttca2srTqeTiIgIJk6cKLYH6O3tFTsehoeHk5CQQFRUFH19fbS1tYnArgkTJhAREYGqqvT19dHc3Cz2H0lOThYb+tvtdhGKbrPZRFCP7nHV29sr2qC/h8ErR5fLRVNT04jnoD9PvV5ut5vo6GixNcDVQsR+H/T0wf33Ps/Bg31kZcXz5w//hsgosAyanEalU8Puo2OtEi74Cywwtlblk3xN99Kgk2KwmmAshIWFMXHixFF3d8vIyDAs5XRYrdZRz+vQ9/4YC9HR0RfkHqfDZrORk5NDTk7OBecZjtEGdFhYGHl5eSPOB/vujoXw8PAxPz2mB6MEYzTJR4fNZhs1z/n6KDw8fNQ8w2EymUhMTBx15zSLxXLeekVERNDW1saRI0fIzc1l9erV7N69W5C02WwWe3kEQ5ICe4wE75o3HHow0XiIj48fVY1jtVrH3A1OluXzjrGx0sY6r7sZjuaFBAF9+FhbGphMpjHboMNqtZ73OURFRZ13f/QrAxfOc340xJAZ/BDiJbGjOsZkZVD/aNpVrQ8KIYSx0NTURFVVFf39/Zw+fVoE60iSREREBCtXrjRcH3oPQhgLqgTIyqBx1Jg2qiQ92pdZRkD/Sst5VxVy4LoxB+fnwm4ZwjUGXT0UExNDYmIip0+fprW1VXipREZGsnr1avLz8w35rpYleAiXG6N8NRxGcGvwJC5JQ+mXzpKjsPTwsXi+wamFJO0QrjLo43nBggV87WtfIy0tTfjrZmZmsmbNGn7wgx9ccxv9hHD5oUqDMqw2PKp46P/xddJDxTEap4trR/nK7fBipOEJIcEihKsYycnJ3H///ZSUlIgAp7S0NDIzMw06+avRoyCEyw9Be4NDQVUD/+vHmqaN/rXwMUsc5YOIwyGfRwAW0vE4gzM0eEO4WiHLsvjijd/vR1XVUb8hOdy7IzTmQwhEiEoEff9iKBBLG6RfGZAuRCc9CiQu/PuzoxYVGqMhXOUYvr3rhW6PGSLozzEGBVcNFUka+bFpTQUJE5oKaIHLpbFIGsYn6vEgSVJAvh90IwkhhGsJF0K2Iak5BB1Go+DQ5+rQAhTp9QXGicvt5PQpJ2ZLPZLkBsl/MRGHQ5KCxjASH0WPEqjNsIoaTqtog2WGhnEI1yJCBP0p4Sq0aRn3TJGRBg2Gqh8G+uFcSy9er0pK6gQKpodji5iC2QSaYMlLghz404LE91FUIcPjYy7LrUMIIYTPH4Lc04JxNTiJ6X7QGgGCdg7AwQPQ0ycjSRo5k5KRlcGo7cE2XoYAbhkVMxoWNDWgV/HLBJTfg512PtWJpA0R+KWqWEIIIYTPL3Tp9Eona00NbMPhckN9A/z/z3+As9+KyeTm+uvnoMhDc5AkSZdA0oNKbQ0Tmqbg12LpH9zcLXgWgKGgyOEYTZbWjZrBvxeLUP5Q/lD+qzf/xUA3rum/l+P+l5o/uC6jnff7occOR8rc/OFPWzlypAaf38NNK4uYOSMCxaxPNNolkjTg1wDNjMcTRsWJAZ54oh3oRja5kRnac1kV7nxGWh5y4RtKV6XA+eDfi0Uofyh/KP/Vm3+8vS6G9lwfTqHyZbn/pdd/OIzt8XlV2s5103auh7M1gU3MZham8O1v30xWNphN+oZ2gZtfsrpD1ST8Ppm2tgHefONjFKUPZCdSEEmPr+nX0CSQNGnwlzF+ZTRJPc/xeL+h/KH8ofxXfv4L5QPQJC3o+MrgDx26ulcl8Dk5GXkwwlrF7XYHpGSThy9+sYRvfGM5s2ZBVMRIlrwIkh4l4lACSdaQZD8mk4/oGB+y4gHZh6T5gq4PzCTyoBfISMlaDWq03lg16Hi89PGuD+UP5Q/lv3ryDydrY36fx4/JYg5Y3uRgkr4y6h9M0gFXu0G2xo8kg81mJSkxgcmTM5k3bzIziyaQmwPhNpBkBlUlQ3w7NkmP5VY3DJLmw2RWmF6Qyt//3Uqs1sCNkIbUGfqSYbzjEEIIIQQRW6H/Dkurrm4lNzclcDwsfSx98F8Ug/UeHpGth4ArJggPh5gYSEmGiCgwKUMEHSB2hC+1iUB5Y0aBD1lKR5K2rAGSH4vJSXy8i8VLIDJikKQZ6j+9iPGOhyOUP5Q/lP9znH+Q7AzXaxAfZ2bmzMD/knzl1V+v91iBfJIUqLciDf0vS0HXDm6Bp082puCMxoIkkBTDTqPBEVSqOrhBCD40yY8k92C2EPiKi3JpjWSM9FD+UP5Q/s9R/jFI2mw+h9WaEDiWrrz6j0fSeo4LDXYyAYOWUglZI6BjliT8fhVVxeBzqBcqdm5SwK+pSKoXRdaMs8Iojb3Q4+EI5Q/lD+X/HOaXRkmXQFVdhs/5XXH1l8ZKCL5AHXZBkM0viNw1/azYKEaBhLhoFEWiq9OOvceL1zs4KQSRdWD/U/C4oMfuRDFJhNvMKBc2MYQQQgghXAI+be/rTxvD63/+9oj5SJJBkWHqtFys4WYG3D6qTnfQeg483gCjaxpoasCo2j8A586Bw+HHYjKRnpaAJIW+tRJCCCFcKlSufiI+Hwa30hjrWDL+a+BU2QRf+MJC4uIVZM3HW5t2cvAQ2HvB5QqQtdsT+L+uDnbtrkD1Q2QUlJRMwTQs0jCEEEIIIYRLw5DhEDCboWCGhZUrZ9LdVcrZ6nZ+u/4DOroWsXRJFGkTA5L02Rp4860atm87jCXMRPakCIqLzYFw8BBCCCGES8L51+MjDW4X/jXuqwPG9vw/GTC8iVZQtlMAAAAASUVORK5CYII=",sb=[1e3,500,200,100,50,20,10,5,2,1],Lm="cash_sheet_denom_",ks=l=>Math.round(Number(l)||0).toLocaleString("en-US");function H5(l){const o={"০":"0","১":"1","২":"2","৩":"3","৪":"4","৫":"5","৬":"6","৭":"7","৮":"8","৯":"9"};return String(l||"").replace(/[০-৯]/g,u=>o[u]||u).replace(/[^0-9]/g,"")}const lb=l=>{try{const o=localStorage.getItem(`${Lm}${l}`);if(o){const u=JSON.parse(o);if(u&&typeof u=="object")return u}}catch{}return{1e3:"",500:"",200:"",100:"",50:"",20:"",10:"",5:"",2:"",1:"",coins:"",revenueStamp:"",pendingSlip:""}};function rb(l){if(l=Math.round(Math.abs(l)),l===0)return"Taka Zero Only";const o=["","One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen"],u=["","","Twenty","Thirty","Forty","Fifty","Sixty","Seventy","Eighty","Ninety"];function c(L){let y="";return L>=100&&(y+=o[Math.floor(L/100)]+" Hundred ",L%=100),L>=20&&(y+=u[Math.floor(L/10)]+" ",L%=10),L>0&&(y+=o[L]+" "),y.trim()}let d="";const A=Math.floor(l/1e7);l%=1e7;const f=Math.floor(l/1e5);l%=1e5;const h=Math.floor(l/1e3);l%=1e3;const x=l;return A>0&&(d+=c(A)+" Crore "),f>0&&(d+=c(f)+" Lakh "),h>0&&(d+=c(h)+" Thousand "),x>0&&(d+=c(x)),"Taka "+d.trim()+" Only"}const w5=l=>{if(!l)return"";const o=new Date(l+"T00:00:00");return["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][o.getDay()]},E5=l=>{if(!l)return"";const o=new Date(l+"T00:00:00"),u=["January","February","March","April","May","June","July","August","September","October","November","December"];return`${o.getDate()}-${u[o.getMonth()]}-${o.getFullYear()}`};function C5({selectedDate:l,setSelectedDate:o}){const[u,c]=b.useState(0),[d,A]=b.useState(0),[f,h]=b.useState(()=>lb(l)),[x,L]=b.useState({monir:0,sakib:0,mintu:0,alamgir:0,loanForms:0,memberWelfare:0}),[y,p]=b.useState(!1),[w,P]=b.useState(!1),[G,K]=b.useState(!0),[j,z]=b.useState(!1),[ce,M]=b.useState(!1),te=()=>{M(!0),window.setTimeout(()=>M(!1),900)},[k,J]=b.useState(()=>{try{const Y=localStorage.getItem("gobra_floating_pos_cashbook");if(Y)return JSON.parse(Y)}catch{}return null}),ue=b.useRef(null),C=b.useRef(null),ne=b.useRef(!1),re=b.useRef({x:0,y:0,elemX:0,elemY:0,w:50,h:50,hasMoved:!1}),ae=b.useRef(0),fe=()=>{const Y=Date.now();Y-ae.current<250||(ae.current=Y,K(Q=>!Q))},pe=Y=>{var Re;if(Y.button!==0&&Y.pointerType==="mouse")return;const Q=(Re=C.current)==null?void 0:Re.getBoundingClientRect();if(Q){re.current={x:Y.clientX,y:Y.clientY,elemX:Q.left,elemY:Q.top,w:Q.width,h:Q.height,hasMoved:!1},ne.current=!0;try{Y.currentTarget.setPointerCapture(Y.pointerId)}catch{}}},B=Y=>{if(!ne.current)return;const Q=Y.clientX-re.current.x,Re=Y.clientY-re.current.y,Te=Math.hypot(Q,Re);if(!re.current.hasMoved&&Te>6&&(re.current.hasMoved=!0),re.current.hasMoved){const rt=Math.max(10,window.innerWidth-re.current.w-6),At=Math.max(10,window.innerHeight-re.current.h-6),ft=Math.max(6,Math.min(rt,re.current.elemX+Q)),et=Math.max(6,Math.min(At,re.current.elemY+Re));J({x:ft,y:et})}},O=Y=>{var Q;if(ne.current){ne.current=!1;try{Y.currentTarget.releasePointerCapture(Y.pointerId)}catch{}if(re.current.hasMoved){const Re=(Q=C.current)==null?void 0:Q.getBoundingClientRect();if(Re){const Te={x:Math.round(Re.left),y:Math.round(Re.top)};try{localStorage.setItem("gobra_floating_pos_cashbook",JSON.stringify(Te))}catch{}}}else fe()}},S=Y=>{if(re.current.hasMoved){Y.stopPropagation(),re.current.hasMoved=!1;return}fe()},I=()=>{const Y=e5(l);c(Y.reportCashInHand),A(Y.reportBankBalance);const Q=Oe(l);z(Q);const Re=sn(),Te=ha("disburse").map(me=>me.name.toLowerCase().trim()),rt=Re.filter(me=>me.txDate===l&&me.type==="receive"),At=Re.filter(me=>me.txDate===l&&me.type==="payment");let ft=0,et=0,ve=0,st=0,St=0,gt=0;for(const me of rt){const we=me.category.toLowerCase().trim(),Nt=Math.round(Number(me.amount)||0);we.includes("monir")?ft+=Nt:we.includes("sakib")?et+=Nt:we.includes("mintu")?ve+=Nt:we.includes("alamgir")?st+=Nt:we.includes("loan form")||we.includes("sale")?St+=Nt:(we.includes("welfare")||we.includes("kallayan")||we.includes("member"))&&(gt+=Nt)}const yt=At.filter(me=>{const we=me.category.toLowerCase().trim();return we.includes("fund payment")||we.includes("fund transfer")||we.includes("fund")&&!we.includes("receive")?!1:Te.includes(we)||!!(me.subCategory&&me.subCategory.trim().length>0)}),Ae=yt.length,Ue=Ae*5,lt=Ae>0?Ue:St;let Ot=0,ln=0;for(const me of yt){const we=Number(me.amount)||0;me.category.toLowerCase().trim().includes("buni")?Ot+=we:ln+=we}const Zt=Math.round(ln*.01+Ot*.005),Dt=yt.length>0?Zt:gt;L({monir:ft,sakib:et,mintu:ve,alamgir:st,loanForms:lt,memberWelfare:Dt})};b.useEffect(()=>{h(lb(l))},[l]),b.useEffect(()=>{I();const Y=()=>I(),Q=()=>I();return window.addEventListener("tx-changed",Y),window.addEventListener("day-close-changed",Q),()=>{window.removeEventListener("tx-changed",Y),window.removeEventListener("day-close-changed",Q)}},[l]);const q=sb.reduce((Y,Q)=>{const Re=parseInt(f[String(Q)]||"0",10)||0;return Y+Re*Q},0),ee=Math.round(Number(f.coins||0)),U=Math.round(Number(f.revenueStamp||0))*10,H=Math.round(Number(f.pendingSlip||0)),N=q+ee+U+H,oe=x.monir+x.sakib+x.mintu+x.alamgir+x.loanForms+x.memberWelfare,R=(Y,Q)=>{if(j){te();return}const Re=H5(Q);h(Te=>{const rt={...Te,[Y]:Re};try{localStorage.setItem(`${Lm}${l}`,JSON.stringify(rt))}catch{}return rt})},$=()=>{if(j){te();return}const Y={1e3:"",500:"",200:"",100:"",50:"",20:"",10:"",5:"",2:"",1:"",coins:"",revenueStamp:"",pendingSlip:""};h(Y);try{localStorage.setItem(`${Lm}${l}`,JSON.stringify(Y))}catch{}},ge=()=>{window.print()},be=async()=>{p(!0);try{const Y=(await fo(async()=>{const{default:lt}=await import("./html2canvas.esm-QH1iLAAe.js");return{default:lt}},[])).default,{jsPDF:Q}=await fo(async()=>{const{jsPDF:lt}=await import("./jspdf.es.min-BxvoqKv1.js").then(Ot=>Ot.j);return{jsPDF:lt}},[]),Re=document.getElementById("cash-sheet-document");if(!Re)return;const Te=await Y(Re,{scale:2,backgroundColor:"#ffffff"}),rt=Te.toDataURL("image/jpeg",.95),At=new Q("p","mm","a4"),ft=At.internal.pageSize.getWidth(),et=At.internal.pageSize.getHeight(),ve=5,st=ft-ve*2,St=et-ve*2;let gt=st,yt=Te.height*gt/Te.width;yt>St&&(yt=St,gt=Te.width*yt/Te.height);const Ae=(ft-gt)/2,Ue=(et-yt)/2;At.addImage(rt,"JPEG",Ae,Ue,gt,yt),At.save(`Cash_Sheet_GOBRA_${l}.pdf`)}catch{window.print()}finally{p(!1)}},ye=(Y=!0)=>n.jsxs("div",{className:"cash-sheet-print-container w-full bg-white p-4 sm:p-6 print:p-0 text-slate-950 font-serif flex flex-col justify-between print:h-auto print:justify-start box-border",children:[n.jsxs("div",{className:"flex-1 flex flex-col justify-start",children:[n.jsxs("div",{className:"flex items-center justify-center gap-3 mb-1 print:mb-0.5",children:[n.jsx("img",{src:fp,alt:"BKF Logo",className:"h-14 sm:h-16 w-auto object-contain print:h-14"}),n.jsxs("div",{className:"text-left",children:[n.jsx("h1",{className:"text-2xl sm:text-4xl print:text-3xl font-black font-serif text-slate-900 leading-tight tracking-wide sm:whitespace-nowrap",children:"Bandhu Kallyan Foundation"}),n.jsx("p",{className:"text-sm sm:text-base print:text-sm font-bold font-serif text-slate-800 tracking-wide mt-0.5",children:g5()})]})]}),n.jsx("div",{className:"flex justify-center my-1 print:my-0.5",children:n.jsx("img",{src:B5,alt:"Cash & Bank Information",className:"h-12 sm:h-16 print:h-16 w-auto object-contain"})}),n.jsx("div",{className:"flex justify-end mb-2 print:mb-1",children:n.jsx("div",{className:"border border-black px-4 py-0.5 print:py-0.5 text-xs sm:text-sm print:text-xs font-bold font-serif text-center w-48 sm:w-52",children:E5(l)})}),n.jsxs("div",{className:"print-gap-b mb-3 print:mb-1.5",children:[n.jsxs("div",{className:"mb-1 print:mb-0.5 flex items-center justify-between text-xs sm:text-sm print:text-xs font-bold text-slate-900",children:[n.jsx("span",{children:"A. Cash & Bank Information:"}),n.jsxs("span",{className:"pr-16 sm:pr-20 print:pr-16",children:["Day: ",n.jsx("span",{className:"font-normal",children:w5(l)})]})]}),n.jsx("table",{className:"w-full border-collapse border-spacing-0 text-xs sm:text-sm print:text-xs",children:n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{className:"border border-black px-3 py-1.5 sm:py-2 print:py-0.5 font-medium",children:"Closing Cash in Hand: TK (BDT)"}),n.jsx("td",{className:"w-48 sm:w-56 print:w-56 border border-black px-3 py-1.5 sm:py-2 print:py-0.5 text-right font-mono font-bold",children:ks(u)}),n.jsx("td",{className:"w-16 sm:w-20 print:w-16 border-0 border-transparent p-0 text-center align-middle text-transparent print:text-slate-900",children:"-"})]}),n.jsxs("tr",{children:[n.jsx("td",{className:"border border-black px-3 py-1.5 sm:py-2 print:py-0.5 font-medium",children:"Closing Cash at Bank: TK (BDT)"}),n.jsx("td",{className:"w-48 sm:w-56 print:w-56 border border-black px-3 py-1.5 sm:py-2 print:py-0.5 text-right font-mono font-bold",children:ks(d)}),n.jsx("td",{className:"w-16 sm:w-20 print:w-16 border-0 border-transparent p-0"})]})]})})]}),n.jsxs("div",{className:"print-gap-b mb-3 print:mb-1.5",children:[n.jsxs("div",{className:"mb-1 print:mb-0.5 flex items-center justify-between text-xs sm:text-sm print:text-xs font-bold text-slate-900",children:[n.jsx("span",{children:"B. Denominations of Cash / Notes :"}),Y&&n.jsx("button",{type:"button",disabled:j,onClick:$,className:`print:hidden rounded px-2 py-0.5 text-[11px] font-bold text-white transition ${j?"bg-slate-400 cursor-not-allowed opacity-50":"bg-slate-500 hover:bg-slate-600 cursor-pointer"}`,title:j?"দিন সমাপ্ত (Locked) — উপরের Working-Day বার থেকে Re-open করুন":"সকল নোট খালি করুন",children:"Reset"})]}),n.jsxs("table",{className:"fill-b w-full border-collapse border border-black text-xs sm:text-sm print:text-[11px]",children:[n.jsxs("thead",{children:[n.jsxs("tr",{className:"bg-slate-50 print:bg-transparent",children:[n.jsx("th",{colSpan:2,className:"border border-black px-2 py-1 print:py-0.5 text-center font-bold",children:"Particulars"}),n.jsx("th",{rowSpan:2,className:"w-28 sm:w-32 print:w-32 border border-black px-2 py-1 print:py-0.5 text-center font-bold",children:"TK (BDT)"}),n.jsx("th",{rowSpan:2,className:"w-16 sm:w-20 print:w-16 border border-black px-2 py-1 print:py-0.5 text-center font-bold",children:"Ps"})]}),n.jsxs("tr",{className:"bg-slate-50 print:bg-transparent",children:[n.jsx("th",{className:"border border-black px-2 py-0.5 print:py-0.5 text-center font-semibold",children:"Notes / Others"}),n.jsx("th",{className:"w-20 sm:w-24 print:w-24 border border-black px-2 py-0.5 print:py-0.5 text-center font-semibold",children:"Quantity"})]})]}),n.jsxs("tbody",{children:[sb.map(Q=>{const Re=parseInt(f[String(Q)]||"0",10)||0,Te=Re*Q;return n.jsxs("tr",{children:[n.jsx("td",{className:"border border-black px-2.5 py-0.5 sm:py-1 print:py-0.5 text-center font-mono font-bold",children:Q}),n.jsx("td",{className:"border border-black px-1.5 py-0.5 print:py-0.5 text-center",children:Y?n.jsxs(n.Fragment,{children:[n.jsx("input",{type:"text",inputMode:"numeric",autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:!1,disabled:j,readOnly:j,value:f[String(Q)]||"",onChange:rt=>R(String(Q),rt.target.value),onFocus:rt=>{j||rt.target.select()},placeholder:"0",className:`print:hidden w-full text-center font-mono text-xs sm:text-sm font-bold py-0.5 rounded border transition ${j?"bg-slate-100 text-slate-500 border-slate-300 cursor-not-allowed opacity-70":"bg-yellow-50 focus:bg-amber-100 border-amber-300 focus:border-indigo-600 focus:outline-none cursor-text select-text"}`}),n.jsx("span",{className:"hidden print:inline font-mono font-bold",children:Re>0?Re:""})]}):n.jsx("span",{className:"font-mono font-bold",children:Re>0?Re:""})}),n.jsx("td",{className:"border border-black px-2.5 py-0.5 sm:py-1 print:py-0.5 text-right font-mono font-semibold",children:Te>0?ks(Te):"-"}),n.jsx("td",{className:"border border-black px-1.5 py-0.5 print:py-0.5 text-center font-mono text-slate-400",children:"-"})]},Q)}),n.jsxs("tr",{children:[n.jsx("td",{className:"border border-black px-2.5 py-0.5 sm:py-1 print:py-0.5 text-center font-medium",children:"Coins (1+2+5) Taka"}),n.jsx("td",{className:"border border-black px-1.5 py-0.5 print:py-0.5 text-center",children:Y?n.jsxs(n.Fragment,{children:[n.jsx("input",{type:"text",inputMode:"numeric",autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:!1,disabled:j,readOnly:j,value:f.coins||"",onChange:Q=>R("coins",Q.target.value),onFocus:Q=>{j||Q.target.select()},placeholder:"0",className:`print:hidden w-full text-center font-mono text-xs sm:text-sm font-bold py-0.5 rounded border transition ${j?"bg-slate-100 text-slate-500 border-slate-300 cursor-not-allowed opacity-70":"bg-yellow-50 focus:bg-amber-100 border-amber-300 focus:border-indigo-600 focus:outline-none cursor-text select-text"}`}),n.jsx("span",{className:"hidden print:inline font-mono font-bold",children:f.coins||""})]}):n.jsx("span",{children:f.coins||""})}),n.jsx("td",{className:"border border-black px-2.5 py-0.5 sm:py-1 print:py-0.5 text-right font-mono font-semibold",children:ee>0?ks(ee):"-"}),n.jsx("td",{className:"border border-black px-1.5 py-0.5 print:py-0.5 text-center font-mono text-slate-400",children:"-"})]}),n.jsxs("tr",{children:[n.jsxs("td",{className:"border border-black px-2.5 py-0.5 sm:py-1 print:py-0.5 text-center font-medium",children:["Revenue Stamp",n.jsx("span",{className:"print:hidden ml-1 text-[9px] font-black text-indigo-600",children:"×১০"})]}),n.jsx("td",{className:"border border-black px-1.5 py-0.5 print:py-0.5 text-center",children:Y?n.jsxs(n.Fragment,{children:[n.jsx("input",{type:"text",inputMode:"numeric",autoComplete:"off",disabled:j,readOnly:j,value:f.revenueStamp||"",onChange:Q=>R("revenueStamp",Q.target.value),onFocus:Q=>{j||Q.target.select()},placeholder:"0",className:`print:hidden w-full text-center font-mono text-xs sm:text-sm font-bold py-0.5 rounded border transition ${j?"bg-slate-100 text-slate-500 border-slate-300 cursor-not-allowed opacity-70":"bg-yellow-50 focus:bg-amber-100 border-amber-300 focus:border-indigo-600 focus:outline-none cursor-text select-text"}`}),n.jsx("span",{className:"hidden print:inline font-mono font-bold",children:f.revenueStamp?f.revenueStamp:""})]}):n.jsx("span",{children:f.revenueStamp||""})}),n.jsx("td",{className:"border border-black px-2.5 py-0.5 sm:py-1 print:py-0.5 text-right font-mono font-semibold",children:U>0?ks(U):"-"}),n.jsx("td",{className:"border border-black px-1.5 py-0.5 print:py-0.5 text-center font-mono text-slate-400",children:"-"})]}),n.jsxs("tr",{children:[n.jsx("td",{className:"border border-black px-2.5 py-0.5 sm:py-1 print:py-0.5 text-center font-medium",children:"Pending Slip"}),n.jsx("td",{className:"border border-black px-1.5 py-0.5 print:py-0.5 text-center",children:Y?n.jsxs(n.Fragment,{children:[n.jsx("input",{type:"text",inputMode:"numeric",autoComplete:"off",disabled:j,readOnly:j,value:f.pendingSlip||"",onChange:Q=>R("pendingSlip",Q.target.value),onFocus:Q=>{j||Q.target.select()},placeholder:"0",className:`print:hidden w-full text-center font-mono text-xs sm:text-sm font-bold py-0.5 rounded border transition ${j?"bg-slate-100 text-slate-500 border-slate-300 cursor-not-allowed opacity-70":"bg-yellow-50 focus:bg-amber-100 border-amber-300 focus:border-indigo-600 focus:outline-none cursor-text select-text"}`}),n.jsx("span",{className:"hidden print:inline font-mono font-bold",children:f.pendingSlip?f.pendingSlip:""})]}):n.jsx("span",{children:f.pendingSlip||""})}),n.jsx("td",{className:"border border-black px-2.5 py-0.5 sm:py-1 print:py-0.5 text-right font-mono font-semibold",children:H>0?ks(H):"-"}),n.jsx("td",{className:"border border-black px-1.5 py-0.5 print:py-0.5 text-center font-mono text-slate-400",children:"-"})]}),n.jsxs("tr",{className:"font-bold bg-slate-50 print:bg-transparent",children:[n.jsx("td",{colSpan:2,className:"border border-black px-2.5 py-1 print:py-0.5 text-right font-bold",children:"Total :"}),n.jsx("td",{className:"border border-black px-2.5 py-1 print:py-0.5 text-right font-mono font-bold",children:N>0?ks(N):"-"}),n.jsx("td",{className:"border-0 border-transparent px-1.5 py-1 print:py-0.5 text-center font-mono text-transparent"})]})]})]}),n.jsxs("div",{className:"mt-1 print:mt-0.5 text-xs print:text-[10.5px] font-normal text-slate-800",children:[n.jsx("span",{className:"font-bold",children:"In Word:"})," ",rb(N)]})]}),n.jsxs("div",{className:"mb-2 print:mb-1",children:[n.jsx("div",{className:"mb-1 print:mb-0.5 text-xs sm:text-sm print:text-xs font-bold text-slate-900",children:"C. Credit Officer & Others Cash Received Information."}),n.jsxs("table",{className:"fill-c w-full border-collapse border border-black text-xs sm:text-sm print:text-[11px]",children:[n.jsx("thead",{children:n.jsxs("tr",{className:"bg-slate-50 print:bg-transparent",children:[n.jsx("th",{className:"w-10 sm:w-12 print:w-12 border border-black px-2 py-1 print:py-0.5 text-center font-bold",children:"S.L"}),n.jsx("th",{className:"border border-black px-2.5 py-1 print:py-0.5 text-left font-bold",children:"Employee Name"}),n.jsx("th",{className:"w-16 sm:w-20 print:w-20 border border-black px-2 py-1 print:py-0.5 text-center font-bold",children:"PIN"}),n.jsx("th",{className:"w-28 sm:w-32 print:w-32 border border-black px-2 py-1 print:py-0.5 text-center font-bold",children:"TK (BDT)"}),n.jsx("th",{className:"w-28 sm:w-36 print:w-36 border border-black px-2 py-1 print:py-0.5 text-center font-bold",children:"Employee Signature"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{className:"border border-black px-2 py-1 print:py-0.5 text-center font-mono",children:"1"}),n.jsx("td",{className:"border border-black px-2.5 py-1 print:py-0.5 font-medium",children:"Md Monirul Islam"}),n.jsx("td",{className:"border border-black px-2 py-1 print:py-0.5 text-center font-mono",children:"621"}),n.jsx("td",{className:"border border-black px-2.5 py-1 print:py-0.5 text-right font-mono font-bold",children:x.monir>0?String(x.monir):"-"}),n.jsx("td",{className:"border border-black px-2 py-1 print:py-0.5"})]}),n.jsxs("tr",{children:[n.jsx("td",{className:"border border-black px-2 py-1 print:py-0.5 text-center font-mono",children:"2"}),n.jsx("td",{className:"border border-black px-2.5 py-1 print:py-0.5 font-medium",children:"Ezaz Sakib"}),n.jsx("td",{className:"border border-black px-2 py-1 print:py-0.5 text-center font-mono",children:"1086"}),n.jsx("td",{className:"border border-black px-2.5 py-1 print:py-0.5 text-right font-mono font-bold",children:x.sakib>0?String(x.sakib):"-"}),n.jsx("td",{className:"border border-black px-2 py-1 print:py-0.5"})]}),n.jsxs("tr",{children:[n.jsx("td",{className:"border border-black px-2 py-1 print:py-0.5 text-center font-mono",children:"3"}),n.jsx("td",{className:"border border-black px-2.5 py-1 print:py-0.5 font-medium",children:"Md:Mintu Moholdar"}),n.jsx("td",{className:"border border-black px-2 py-1 print:py-0.5 text-center font-mono",children:"1189"}),n.jsx("td",{className:"border border-black px-2.5 py-1 print:py-0.5 text-right font-mono font-bold",children:x.mintu>0?String(x.mintu):"-"}),n.jsx("td",{className:"border border-black px-2 py-1 print:py-0.5"})]}),n.jsxs("tr",{children:[n.jsx("td",{className:"border border-black px-2 py-1 print:py-0.5 text-center font-mono",children:"4"}),n.jsx("td",{className:"border border-black px-2.5 py-1 print:py-0.5 font-medium",children:"Md Alamgir Hossain"}),n.jsx("td",{className:"border border-black px-2 py-1 print:py-0.5 text-center font-mono",children:"1224"}),n.jsx("td",{className:"border border-black px-2.5 py-1 print:py-0.5 text-right font-mono font-bold",children:x.alamgir>0?String(x.alamgir):"-"}),n.jsx("td",{className:"border border-black px-2 py-1 print:py-0.5"})]}),n.jsxs("tr",{children:[n.jsx("td",{className:"border border-black px-2 py-1 print:py-0.5 text-center font-mono",children:"5"}),n.jsx("td",{className:"border border-black px-2.5 py-1 print:py-0.5 font-medium",children:"Sales of Loan Forms"}),n.jsx("td",{className:"border border-black px-2 py-1 print:py-0.5 text-center font-mono"}),n.jsx("td",{className:"border border-black px-2.5 py-1 print:py-0.5 text-right font-mono font-bold",children:x.loanForms>0?String(x.loanForms):"-"}),n.jsx("td",{className:"border border-black px-2 py-1 print:py-0.5"})]}),n.jsxs("tr",{children:[n.jsx("td",{className:"border border-black px-2 py-1 print:py-0.5 text-center font-mono",children:"6"}),n.jsx("td",{className:"border border-black px-2.5 py-1 print:py-0.5 font-medium",children:"Member Welfare Fund"}),n.jsx("td",{className:"border border-black px-2 py-1 print:py-0.5 text-center font-mono"}),n.jsx("td",{className:"border border-black px-2.5 py-1 print:py-0.5 text-right font-mono font-bold",children:x.memberWelfare>0?String(x.memberWelfare):"-"}),n.jsx("td",{className:"border border-black px-2 py-1 print:py-0.5"})]}),n.jsxs("tr",{className:"font-bold bg-slate-50 print:bg-transparent",children:[n.jsx("td",{colSpan:3,className:"border border-black px-2.5 py-1.5 print:py-0.5 text-right font-bold",children:"Total :"}),n.jsx("td",{className:"border border-black px-2.5 py-1.5 print:py-0.5 text-right font-mono font-bold",children:oe>0?ks(oe):"-"}),n.jsx("td",{className:"border border-black px-2.5 py-1.5 print:py-0.5"})]})]})]}),n.jsxs("div",{className:"mt-1 print:mt-0.5 text-xs print:text-[10.5px] font-normal text-slate-800",children:[n.jsx("span",{className:"font-bold",children:"In Word:"})," ",rb(oe)]})]})]}),n.jsxs("div",{className:"signatures-block mt-6 sm:mt-8 print:mt-3 pt-3 print:pt-2 pb-1 grid grid-cols-2 px-16 print:px-14 text-xs sm:text-sm print:text-xs font-bold font-serif",children:[n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"h-10 sm:h-12 print:h-8"}),n.jsx("div",{className:"w-32 sm:w-36 border-t border-black pt-1",children:"Accountant"})]}),n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"h-10 sm:h-12 print:h-8"}),n.jsx("div",{className:"w-32 sm:w-36 ml-auto border-t border-black pt-1",children:"Manager"})]})]})]}),Ie=N-u;return n.jsxs("div",{className:"space-y-4",children:[n.jsx("style",{children:`
        @media print {
          @page {
            size: A4 portrait;
            margin: 4mm 8mm;
          }
          html, body {
            margin: 0 !important;
            padding: 0 !important;
            width: 100% !important;
            height: 100% !important;
            overflow: hidden !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            background: white !important;
          }
          #cash-sheet-document {
            width: 100% !important;
            max-width: 100% !important;
            overflow: visible !important;
            height: auto !important;
            max-height: 288mm !important;
            margin: 0 !important;
            padding: 0 !important;
            border: none !important;
            box-shadow: none !important;
            display: block !important;
            box-sizing: border-box !important;
            page-break-after: avoid !important;
            page-break-inside: avoid !important;
            page-break-before: avoid !important;
            break-inside: avoid !important;
            break-after: avoid !important;
          }
          .cash-sheet-print-container,
          .cash-sheet-print-container > div {
            display: block !important;
            height: auto !important;
            max-height: none !important;
            box-sizing: border-box !important;
          }
          /* নির্দিষ্ট উচ্চতা → রো-গুলো সমান ভাগে লম্বা হয়ে পেজ ভরাট করবে */
          table.fill-b {
            height: 100mm !important;
          }
          table.fill-c {
            height: 44mm !important;
          }
          /* স্বাক্ষর ব্লক প্রিন্টেও ২ কলামেই থাকবে — Accountant বামে, Manager ডানে (একই সারিতে)
             উপরের block রুলটা শুধু কনটেন্ট ফ্লোর জন্য, এটা যেন না ভাঙে */
          .cash-sheet-print-container > .signatures-block {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
          }
          .signatures-block {
            page-break-before: avoid !important;
            page-break-inside: avoid !important;
            break-before: avoid !important;
            break-inside: avoid !important;
          }
          table {
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }
          tr {
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }
          /* এক্সেল শিটের মতো: প্রিন্টেও সংখ্যাগুলো টাইমস (serif) ফন্টে */
          .cash-sheet-print-container .font-mono {
            font-family: Georgia, "Times New Roman", serif !important;
          }
          .print\\:hidden {
            display: none !important;
          }
        }
      `}),n.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-white p-4 shadow-sm border border-slate-200 print:hidden",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("label",{className:"text-xs font-bold text-slate-700",children:"Date:"}),n.jsx("div",{className:"w-44",children:n.jsx(xn,{value:l,onChange:Y=>o(Y),className:"px-3 py-1.5 text-xs sm:text-sm"})}),j&&n.jsx("span",{className:`shrink-0 rounded-lg border border-rose-300 bg-rose-100 px-2 py-1 text-[10px] font-black text-rose-700 ${ce?"lock-pulse":""}`,title:"দিন সমাপ্ত (Day Closed) — হিসাব লক করা আছে",children:"🔒 Day Closed"})]}),n.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[n.jsx("button",{type:"button",onClick:()=>P(!0),className:"rounded-lg bg-blue-600 px-3.5 py-1.5 text-xs font-bold text-white shadow hover:bg-blue-700",children:"👁 PDF View"}),n.jsx("button",{type:"button",onClick:be,disabled:y,className:"rounded-lg bg-emerald-600 px-3.5 py-1.5 text-xs font-bold text-white shadow hover:bg-emerald-700 disabled:opacity-50",children:y?"Generating...":"⬇ Download PDF"}),n.jsx("button",{type:"button",onClick:ge,className:"rounded-lg bg-slate-900 px-4 py-1.5 text-xs font-bold text-white shadow hover:bg-slate-800",children:"🖨 Print"})]})]}),!j&&pt(l).blocked&&n.jsx("div",{className:"rounded-2xl border border-rose-400 bg-rose-50 p-3.5 text-xs sm:text-sm font-bold text-rose-950 shadow-xs flex items-center justify-between print:hidden",children:n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-base",children:"🚫"}),n.jsx("span",{children:pt(l).reason})]})}),n.jsx("div",{id:"cash-sheet-document",ref:ue,className:"w-full bg-white rounded-2xl shadow-sm border border-slate-300 overflow-hidden print:border-none print:shadow-none print:rounded-none print:m-0 print:p-0",children:ye(!0)}),typeof document<"u"&&fc.createPortal(n.jsx("div",{ref:C,onPointerDown:pe,onPointerMove:B,onPointerUp:O,onPointerCancel:O,onClick:S,style:k?{transform:`translate3d(${k.x}px, ${k.y}px, 0)`,left:0,top:0,right:"auto",bottom:"auto",touchAction:"none"}:{right:"16px",bottom:"75px",touchAction:"none"},className:"fixed z-40 print:hidden select-none drop-shadow-2xl cursor-grab active:cursor-grabbing touch-none",children:G?n.jsxs("div",{onClick:S,className:`relative flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full shadow-2xl border backdrop-blur-md cursor-grab active:cursor-grabbing touch-none select-none ${Ie===0?"bg-slate-900/95 border-emerald-500/80 text-emerald-300 ring-2 ring-emerald-500/30":"bg-slate-900/95 border-rose-500/80 text-rose-300 ring-2 ring-rose-500/30"}`,title:"পার্থক্য ট্র্যাকার (টেনে যেকোনো দিকে সরানো যাবে / ট্যাপ করলে খুলবে)",children:[n.jsx("span",{className:"text-lg sm:text-xl leading-none select-none pointer-events-none",children:"⚖️"}),n.jsx("span",{className:`absolute -top-1 -right-1 flex h-4 min-w-[16px] sm:h-4.5 sm:min-w-[18px] items-center justify-center rounded-full px-1 text-[9px] font-mono font-black shadow pointer-events-none ${Ie===0?"bg-emerald-400 text-slate-950":"bg-rose-500 text-white"}`,children:Ie===0?"0":Ie>0?`+${de(Ie)}`:`-${de(Math.abs(Ie))}`})]}):n.jsxs("div",{className:`rounded-xl px-2.5 py-1.5 shadow-2xl border backdrop-blur-md w-auto min-w-[105px] max-w-[145px] touch-none select-none ${Ie===0?"bg-slate-900/95 border-emerald-500/80 text-white ring-2 ring-emerald-500/30":"bg-slate-900/95 border-rose-500/80 text-white ring-2 ring-rose-500/30"}`,title:"টেনে যেকোনো জায়গায় সরানো যাবে",children:[n.jsxs("div",{onClick:S,className:"flex items-center justify-between gap-1 pb-1 border-b border-slate-800 text-[10px] cursor-grab active:cursor-grabbing",children:[n.jsxs("span",{className:"flex items-center gap-1 font-bold text-amber-400",children:[n.jsx("span",{className:"text-slate-400 text-[10px]",children:"⠿"}),n.jsx("span",{children:"⚖️ ডিফারেন্স"})]}),n.jsx("span",{onPointerDown:Y=>Y.stopPropagation(),onPointerUp:Y=>{Y.stopPropagation(),K(!0)},onClick:Y=>{Y.stopPropagation(),K(!0)},className:"text-[10px] text-slate-400 hover:text-white cursor-pointer font-bold px-1 rounded hover:bg-slate-800",title:"কোলাপ্স করুন",children:"✕"})]}),n.jsx("div",{onClick:S,className:"text-center py-1 cursor-grab active:cursor-grabbing",children:n.jsx("div",{className:`font-mono font-black text-sm sm:text-base leading-tight tracking-tight ${Ie===0?"text-emerald-400":"text-rose-400"}`,children:Ie===0?"0":Ie>0?`+${de(Ie)}`:`-${de(Math.abs(Ie))}`})})]})}),document.body),w&&n.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-2 sm:p-4",children:n.jsxs("div",{className:"flex h-[94vh] w-full max-w-4xl flex-col rounded-2xl bg-white shadow-2xl overflow-hidden",children:[n.jsxs("div",{className:"flex items-center justify-between border-b bg-slate-900 px-5 py-3 text-white",children:[n.jsx("h3",{className:"font-bold text-sm sm:text-base",children:"PDF View - Cash & Bank Information"}),n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("button",{type:"button",onClick:be,className:"rounded bg-emerald-600 px-3 py-1 text-xs font-bold text-white",children:"Download"}),n.jsx("button",{type:"button",onClick:ge,className:"rounded bg-blue-600 px-3 py-1 text-xs font-bold text-white",children:"Print"}),n.jsx("button",{type:"button",onClick:()=>P(!1),className:"text-2xl text-slate-300 hover:text-white",children:"×"})]})]}),n.jsx("div",{className:"flex-1 bg-slate-200 p-3 sm:p-6 overflow-auto flex justify-center",children:n.jsx("div",{className:"w-full max-w-[820px] shadow-2xl rounded border bg-white",children:ye(!1)})})]})})]})}const Om="gobra_check_entries",jm="gobra_check_entries_backup";function ob(l){try{const o=localStorage.getItem(l);if(o===null)return{ok:!1,list:[]};const u=JSON.parse(o);return Array.isArray(u)?{ok:!0,list:u.filter(c=>c&&typeof c=="object")}:{ok:!1,list:[]}}catch{return{ok:!1,list:[]}}}function as(){const l=ob(Om);if(l.ok)return l.list;const o=ob(jm);if(o.ok&&o.list.length>0){try{localStorage.setItem(Om,JSON.stringify(o.list))}catch{}return console.warn(`[checkStore] মূল তালিকা পাওয়া যায়নি — ব্যাকআপ থেকে ${o.list.length}টি এন্ট্রি ফিরিয়ে আনা হয়েছে।`),o.list}return[]}function oo(l,o=[]){const u=as(),c=new Set(o.map(h=>String(h))),d=new Set(l.map(h=>String(h==null?void 0:h.id))),A=u.filter(h=>h&&h.id!==void 0&&h.id!==null&&!d.has(String(h.id))&&!c.has(String(h.id))),f=A.length>0?[...l,...A]:l;A.length>0&&console.warn(`[checkStore] ${A.length}টি এন্ট্রি নতুন তালিকায় ছিল না — হারিয়ে না যায় বলে ফিরিয়ে আনা হয়েছে।`);try{localStorage.setItem(Om,JSON.stringify(f)),localStorage.setItem(jm,JSON.stringify(f))}catch(h){if(console.error("[checkStore] সেভ করা যায়নি (স্টোরেজ সমস্যা)",h),u.length>0)try{localStorage.setItem(jm,JSON.stringify(u))}catch{}}try{const h=new Map;for(const x of u)x&&x.id!==void 0&&x.id!==null&&h.set(String(x.id),JSON.stringify(x));for(const x of f){if(!x||x.id===void 0||x.id===null)continue;const L=String(x.id);h.get(L)!==JSON.stringify(x)&&ct({type:"check",payload:x})}for(const x of c)ct({type:"check_del",payload:x})}catch(h){console.warn("[checkStore] ক্লাউড কিউতে যোগ করা যায়নি",h)}window.dispatchEvent(new CustomEvent("check-changed",{detail:{count:f.length,restored:A.length}}))}let ib=0;const cb=()=>(ib+=1,Date.now()*1e3+ib),xp=(l,o)=>String((l==null?void 0:l.bankName)||"").trim().toLowerCase()===String((o==null?void 0:o.bankName)||"").trim().toLowerCase()&&String((l==null?void 0:l.checkNo)||"").trim().toLowerCase()===String((o==null?void 0:o.checkNo)||"").trim().toLowerCase()&&String((l==null?void 0:l.checkDate)||"")===String((o==null?void 0:o.checkDate)||"");function M5(l,o,u){const c=Number(l)||cb(),d=o.find(A=>Number(A.id)===c);return d?xp(d,u)?c:cb():c}function k5(l){const o=as(),u={...l,createdAt:new Date().toISOString()},c={...u,id:M5(l.id,o,u)},A=o.findIndex(f=>Number(f.id)===Number(c.id))>=0?o.map(f=>Number(f.id)===Number(c.id)?c:f):[c,...o];return oo(A),c}function im(l){const o=as(),u=Number(l==null?void 0:l.id);if(Number.isFinite(u)){const d=o.findIndex(A=>Number(A.id)===u);if(d>=0)return oo(o.map((A,f)=>f===d?l:A)),l}const c=o.findIndex(d=>xp(d,l));if(c>=0){const d={...l,id:o[c].id};return oo(o.map((A,f)=>f===c?d:A)),d}return oo([l,...o]),l}function hp(l){const o=as().filter(u=>String(u.id)!==String(l));oo(o,[l])}const U5=["9001"];function D5(){const l=c=>String(c??"").replace(/\s+/g,"").toUpperCase(),o=new Set(U5.map(l)),u=as().filter(c=>o.has(l(c.memberCode)));if(!u.length)return 0;for(const c of u)hp(c.id);return u.length}function T5(){return[...as()].sort((l,o)=>l.checkDate===o.checkDate?Number(o.id||0)-Number(l.id||0):l.checkDate<o.checkDate?1:-1)}function G5(l,o,u){const c=String(l||"").trim().toLowerCase(),d=String(o||"").trim().toLowerCase();return!c||!d?!1:as().some(A=>Number(A.id)!==Number(u)&&String(A.bankName||"").trim().toLowerCase()===c&&String(A.checkNo||"").trim().toLowerCase()===d)}const K5=[{en:"Sonali Bank",bn:"সোনালী ব্যাংক"},{en:"Janata Bank",bn:"জনতা ব্যাংক"},{en:"Agrani Bank",bn:"অগ্রণী ব্যাংক"},{en:"Rupali Bank",bn:"রূপালী ব্যাংক"},{en:"BASIC Bank",bn:"বেসিক ব্যাংক"},{en:"IFIC Bank",bn:"আইএফআইসি ব্যাংক"},{en:"BRAC Bank",bn:"ব্র্যাক ব্যাংক"},{en:"Dutch-Bangla Bank",bn:"ডাচ-বাংলা ব্যাংক"},{en:"Islami Bank",bn:"ইসলামী ব্যাংক"},{en:"City Bank",bn:"সিটি ব্যাংক"},{en:"Pubali Bank",bn:"পূবালী ব্যাংক"},{en:"Uttara Bank",bn:"উত্তরা ব্যাংক"},{en:"Eastern Bank",bn:"ইস্টার্ন ব্যাংক"},{en:"Prime Bank",bn:"প্রাইম ব্যাংক"},{en:"Southeast Bank",bn:"সাউথইস্ট ব্যাংক"},{en:"Mercantile Bank",bn:"মার্কেন্টাইল ব্যাংক"},{en:"Trust Bank",bn:"ট্রাস্ট ব্যাংক"},{en:"One Bank",bn:"ওয়ান ব্যাংক"},{en:"Bank Asia",bn:"ব্যাংক এশিয়া"},{en:"Dhaka Bank",bn:"ঢাকা ব্যাংক"},{en:"NCC Bank",bn:"এনসিসি ব্যাংক"},{en:"Mutual Trust Bank",bn:"মিউচুয়াল ট্রাস্ট ব্যাংক"},{en:"National Bank",bn:"ন্যাশনাল ব্যাংক"},{en:"Social Islami Bank",bn:"সোশ্যাল ইসলামী ব্যাংক"},{en:"First Security Islami Bank",bn:"ফার্স্ট সিকিউরিটি ইসলামী ব্যাংক"},{en:"Union Bank",bn:"ইউনিয়ন ব্যাংক"},{en:"Global Islami Bank",bn:"গ্লোবাল ইসলামী ব্যাংক"},{en:"Midland Bank",bn:"মিডল্যান্ড ব্যাংক"},{en:"Shimanto Bank",bn:"শিমান্ত ব্যাংক"},{en:"NRB Bank",bn:"এনআরবি ব্যাংক"},{en:"Meghna Bank",bn:"মেঘনা ব্যাংক"},{en:"Modhumoti Bank",bn:"মধুমতি ব্যাংক"},{en:"Padma Bank",bn:"পদ্মা ব্যাংক"},{en:"Standard Bank",bn:"স্ট্যান্ডার্ড ব্যাংক"},{en:"United Commercial Bank",bn:"ইউনাইটেড কমার্শিয়াল ব্যাংক"},{en:"Bangladesh Krishi Bank",bn:"বাংলাদেশ কৃষি ব্যাংক"},{en:"Rajshahi Krishi Unnayan Bank",bn:"রাজশাহী কৃষি উন্নয়ন ব্যাংক"},{en:"Karmasangsthan Bank",bn:"কর্মসংস্থান ব্যাংক"},{en:"Probashi Kallyan Bank",bn:"প্রবাসী কল্যাণ ব্যাংক"},{en:"Ansar VDP Unnayan Bank",bn:"আনসার ভিডিপি উন্নয়ন ব্যাংক"},{en:"Community Bank",bn:"কমিউনিটি ব্যাংক"},{en:"Habib Bank",bn:"হাবিব ব্যাংক"},{en:"HSBC",bn:"এইচএসবিসি ব্যাংক"},{en:"State Bank of India",bn:"স্টেট ব্যাংক অফ ইন্ডিয়া"},{en:"Citibank N.A.",bn:"সিটিব্যাংক"},{en:"Others",bn:"অন্যান্য"}];function P5(l,o=[],u=12){const c=String(l||"").trim().toLowerCase(),d=new Set,A=[],f=h=>{const x=h.en.toLowerCase();d.has(x)||(d.add(x),A.push(h))};for(const h of K5)(!c||h.en.toLowerCase().includes(c)||h.bn.includes(l.trim())||h.bn.toLowerCase().includes(c))&&f(h);for(const h of o){const x=String(h||"").trim();if(!x)continue;const L=x.toLowerCase();d.has(L)||c&&!L.includes(c)&&!x.includes(l.trim())||(d.add(L),A.push({en:x,bn:x}))}return A.slice(0,u)}function ub({value:l,onChange:o,placeholder:u,className:c="",extras:d=[]}){const[A,f]=b.useState(!1),[h,x]=b.useState(0),L=b.useRef(null),y=b.useMemo(()=>P5(l,d),[l,d]),p=(P,G)=>{o(G==="bn"?P.bn:P.en),f(!1)},w=P=>{P.key==="ArrowDown"?(P.preventDefault(),f(!0),x(G=>Math.min(G+1,Math.max(y.length-1,0)))):P.key==="ArrowUp"?(P.preventDefault(),x(G=>Math.max(G-1,0))):P.key==="Enter"?A&&y[h]&&(P.preventDefault(),p(y[h],"en")):P.key==="Escape"&&f(!1)};return n.jsxs("div",{className:"relative",ref:L,children:[n.jsx("input",{value:l,onChange:P=>{o(P.target.value),f(!0),x(0)},onFocus:()=>f(!0),onKeyDown:w,placeholder:u,className:c,autoComplete:"off",autoCorrect:"off",spellCheck:!1}),A&&n.jsxs("div",{className:"absolute left-0 right-0 top-full z-30 mt-1 max-h-64 overflow-auto rounded-xl border-2 border-emerald-300 bg-white shadow-2xl",children:[n.jsxs("div",{className:"sticky top-0 flex items-center justify-between border-b border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[10px] font-bold text-emerald-800",children:[n.jsx("span",{children:"🌐 বাংলা ও English — যেটা দরকার সেটায় ট্যাপ করুন"}),n.jsx("span",{className:"font-mono",children:y.length})]}),y.length===0?n.jsx("div",{className:"px-3 py-2.5 text-xs font-semibold text-slate-500",children:"নতুন নাম — যেভাবে লিখেছেন সেভেই থাকবে ✓"}):y.map((P,G)=>n.jsxs("div",{className:`flex items-stretch gap-1 border-b border-slate-100 px-1.5 py-1 last:border-0 ${G===h?"bg-emerald-50":"bg-white"}`,children:[n.jsx("button",{type:"button",onMouseDown:K=>K.preventDefault(),onClick:()=>p(P,"en"),className:"flex-1 rounded-lg px-2 py-1 text-left text-[13px] font-bold text-slate-800 transition hover:bg-blue-100 hover:text-blue-900",children:P.en}),P.bn!==P.en&&n.jsx("button",{type:"button",onMouseDown:K=>K.preventDefault(),onClick:()=>p(P,"bn"),className:"flex-1 rounded-lg px-2 py-1 text-right text-[13px] font-bold text-emerald-800 transition hover:bg-emerald-100",children:P.bn})]},`${P.en}-${G}`))]})]})}function _5(l){const o=[];let u="",c=!1;for(let d=0;d<l.length;d++){const A=l[d];A==='"'?c&&l[d+1]==='"'?(u+='"',d++):c=!c:A===","&&!c?(o.push(u),u=""):u+=A}return o.push(u),o}function db(l){const o=l.trim();return/^\d+$/.test(o)?String(parseInt(o,10)):o}function Z5(l){const o=String(l||"").replace(/\r/g,"").split(`
`);let u=!1,c="",d="";const A=[],f=new Set,h=[],x=new Set;let L=0,y=0;for(const p of o){const w=p.trim();if(!w)continue;const P=_5(w),G=(P[0]||"").trim(),K=/^samity\s*:\s*(.+)$/i.exec(G);if(K){u=!0;const j=K[1].trim(),z=j.indexOf(",");c=db(z>=0?j.slice(0,z):j),d=(z>=0?j.slice(z+1):"").trim().replace(/\s+/g," "),c&&!f.has(c)&&(A.push({code:c,name:d}),f.add(c));continue}if(/^\d+$/.test(G)){const j=(P[1]||"").trim().replace(/\s+/g," "),z=(P[2]||"").trim();if(/^name of member/i.test(j)||/^member id$/i.test(z))continue;if(!c||!j||!/^0*\d+$/.test(z)){y++;continue}L++;const ce=db(z);if(x.has(ce)){y++;continue}x.add(ce),h.push({memberCode:ce,memberName:j,centreCode:c,centreName:d});continue}y++}return u?{members:h,centres:A,memberRows:L,skipped:y}:null}async function z5(l){const o=(l.name||"").toLowerCase();if(o.endsWith(".xlsx")||o.endsWith(".xls")||o.endsWith(".xlsm")||o.endsWith(".xlsb")){const u=await fo(()=>import("./xlsx-CkFp8p6R.js"),[]),c=await l.arrayBuffer(),d=u.read(c,{type:"array"}),A=d.Sheets[d.SheetNames[0]];return u.utils.sheet_to_csv(A,{blankrows:!1})}return l.text()}function F5({open:l,onClose:o,onPick:u}){const[c,d]=b.useState(""),[A,f]=b.useState(50),h=b.useRef(null),[x,L]=b.useState(0),[y,p]=b.useState(!1),[w,P]=b.useState(!1),[G,K]=b.useState(null),j=b.useRef(null),[z,ce]=b.useState(!1),[M,te]=b.useState(!1),[k,J]=b.useState(!1),[ue,C]=b.useState(new Set),ne=b.useMemo(()=>l?zn():[],[l,x]),re=b.useMemo(()=>l?io():[],[l,x]),ae=b.useMemo(()=>{const S=U=>`${Me(U.memberName)}|${Me(U.centreCode)}`,I=new Map;for(const U of ne)I.set(S(U),(I.get(S(U))||0)+1);const q=new Set;return{rows:ne.filter(U=>(I.get(S(U))||0)>1?(q.add(S(U)),!0):!1),groups:q.size}},[ne]);b.useEffect(()=>{if(!G||!G.ok)return;const S=window.setTimeout(()=>K(null),12e3);return()=>window.clearTimeout(S)},[G]);const fe=S=>{confirm(`🗑️ মেম্বার কোড ${S.memberCode} — “${S.memberName||"—"}” স্থায়ীভাবে মুছে ফেলবেন?

(এই অ্যাপের সব ডিভাইস ও ক্লাউড থেকে মুছে যাবে; ভুল হলে ডাটাবেজ আপডেটের সময় সিড থেকে ফিরতে পারে)`)&&Bh(S.memberCode)};b.useEffect(()=>{if(!l)return;const S=()=>L(I=>I+1);return window.addEventListener("member-db-changed",S),()=>window.removeEventListener("member-db-changed",S)},[l]);const pe=async S=>{const I=S&&S[0]?S[0]:null;if(I){p(!0),K(null);try{if((I.name||"").toLowerCase().endsWith(".pdf"))try{const[{pdfToLines:oe},{parseRecoveryPdfLines:R}]=await Promise.all([fo(()=>import("./pdfReportLoader-B5CG1zKQ.js"),[]),fo(()=>import("./memberReportPdf-BqJ-4pl1.js"),[])]),$=await I.arrayBuffer(),ge=await oe($),be=R(ge);if(!be||!be.members.length){K({ok:!1,text:"PDF-টা পড়া গেছে, কিন্তু মেম্বার-সারির ছক মেলেনি — MIS-এর মাসিক 'Savings & Loan Collection Report' (GenerateOrganizerRecoveryReport)-এর PDF দিন।"});return}const ye=Yi(be.members);nm({fileName:I.name,added:ye.added,updated:ye.updated,skipped:be.skipped,total:ye.total,centres:be.centres.length,format:"report",addedCodes:ye.addedCodes}),K({ok:!0,text:`✓ PDF রিপোর্ট পড়ে গেছে — ${be.centres.length.toLocaleString("en-IN")}টি সেন্টার থেকে নতুন ${ye.added.toLocaleString("en-IN")} জন বসেছে, ${ye.updated.toLocaleString("en-IN")} জনের নাম/সেন্টার ঝালাই হয়েছে (বাদ/ডুপ্লিকেট ${be.skipped.toLocaleString("en-IN")})। মোট ${ye.total.toLocaleString("en-IN")} জন — ক্লাউডে সংরক্ষণ হচ্ছে…`}),L(Ie=>Ie+1);return}catch{K({ok:!1,text:"⚠️ PDF পড়তে সমস্যা হয়েছে — ফাইলটি নষ্ট/স্ক্যানড তো নয়, দেখে আবার দিন।"});return}const q=await z5(I),ee=Z5(q);if(ee){if(!ee.members.length){K({ok:!1,text:"ফাইলটা স্যামিটি-রিপোর্টের মতো মনে হচ্ছে, কিন্তু কোনো মেম্বার-সারি পাওয়া যায়নি — ফাইলটি ঠিক আছে কি না দেখুন।"});return}const oe=Yi(ee.members);nm({fileName:I.name,added:oe.added,updated:oe.updated,skipped:ee.skipped,total:oe.total,centres:ee.centres.length,format:"report",addedCodes:oe.addedCodes}),K({ok:!0,text:`✓ স্যামিটি-রিপোর্ট পড়ে গেছে — ${ee.centres.length.toLocaleString("en-IN")}টি সেন্টার থেকে নতুন ${oe.added.toLocaleString("en-IN")} জন বসেছে, ${oe.updated.toLocaleString("en-IN")} জনের নাম/সেন্টার ঝালাই হয়েছে (বাদ/ডুপ্লিকেট ${ee.skipped.toLocaleString("en-IN")})। মোট ${oe.total.toLocaleString("en-IN")} জন — ক্লাউডে সংরক্ষণ হচ্ছে…`}),L(R=>R+1);return}const{members:U,skipped:H}=Km(q);if(!U.length){K({ok:!1,text:"ফাইলে কোনো মেম্বার পাওয়া যায়নি। কলাম ঠিক আছে কি না দেখুন — Member Code, Member Name, Centre Code, Centre Name (হেডার না থাকলেও এই ক্রমেই পড়বে)। অথবা MIS-এর মাসিক স্যামিটি-রিপোর্ট সরাসরি দিন।"});return}const N=Yi(U);nm({fileName:I.name,added:N.added,updated:N.updated,skipped:H,total:N.total,format:"csv",addedCodes:N.addedCodes}),K({ok:!0,text:`✓ ${N.total.toLocaleString("en-IN")} জন মেম্বার ডাটাবেজে বসে গেছে (নতুন ${N.added.toLocaleString("en-IN")}, আপডেট ${N.updated.toLocaleString("en-IN")}${H?`, বাদ পড়েছে ${H.toLocaleString("en-IN")}`:""})। ক্লাউডে সংরক্ষণ হচ্ছে…`}),L(oe=>oe+1)}catch(q){K({ok:!1,text:`ফাইল পড়া যায়নি: ${(q==null?void 0:q.message)||"অজানা ত্রুটি"}`})}finally{p(!1),j.current&&(j.current.value="")}}};b.useEffect(()=>{if(!l)return;d(""),f(200),C(new Set),J(!1),te(!1);const S=window.setTimeout(()=>{var I;return(I=h.current)==null?void 0:I.focus()},60);return()=>window.clearTimeout(S)},[l]),b.useEffect(()=>{if(!l)return;const S=I=>{I.key==="Escape"&&o()};return window.addEventListener("keydown",S),()=>window.removeEventListener("keydown",S)},[l,o]);const B=b.useMemo(()=>{const S=M?ae.rows:ne,I=c.trim().toLowerCase();if(!I)return S;const q=Me(c);return S.filter(ee=>!!(q&&Me(ee.memberCode).includes(q)||q&&Me(ee.centreCode).includes(q)||q&&ee.checkNo&&Me(ee.checkNo).includes(q)||(ee.memberName||"").toLowerCase().includes(I)||(ee.centreName||"").toLowerCase().includes(I)))},[ne,c,M,ae]);if(b.useEffect(()=>f(200),[c,M]),!l)return null;const O=B.slice(0,A);return n.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-3 backdrop-blur-xs animate-in fade-in duration-150",children:n.jsxs("div",{className:"flex h-[94vh] w-[96vw] max-w-5xl flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl",children:[n.jsxs("div",{className:"flex items-center justify-between gap-2 border-b border-indigo-200 bg-linear-to-r from-indigo-600 to-blue-600 px-4 py-3 text-white",children:[n.jsxs("div",{className:"flex items-center gap-2.5",children:[n.jsx("span",{className:"flex h-9 w-9 items-center justify-center rounded-xl bg-white/20 text-lg",children:"🗄️"}),n.jsxs("div",{children:[n.jsx("h3",{className:"text-base font-black leading-tight",children:"মেম্বার ডাটাবেজ"}),n.jsxs("p",{className:"text-[11px] text-indigo-100",children:["মোট"," ",n.jsx("span",{className:"font-mono font-black",children:ne.length.toLocaleString("en-IN")})," ","মেম্বার"]})]})]}),ne.length>0&&n.jsx("button",{type:"button",onClick:()=>ce(S=>!S),title:"মাসিক রিপোর্ট/CSV দিয়ে ডাটাবেজ আপডেট করুন",className:`shrink-0 rounded-full px-3 py-1.5 text-[11px] font-black transition cursor-pointer ${z?"bg-amber-300 text-slate-900 hover:bg-amber-200":"bg-white/15 text-white hover:bg-white/25"}`,children:z?"✕ আপডেট ঘর":"📤 আপডেট"}),n.jsx("button",{type:"button",onClick:o,title:"বন্ধ করুন",className:"flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-rose-600 text-sm font-black text-white transition hover:bg-rose-700 cursor-pointer",children:"✕"})]}),n.jsxs("div",{className:"border-b border-slate-200 bg-slate-50 px-4 py-3",children:[n.jsxs("div",{className:"relative",children:[n.jsx("span",{className:"pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400",children:"🔍"}),n.jsx("input",{ref:h,value:c,onChange:S=>d(S.target.value),placeholder:"মেম্বার কোড, সেন্টার কোড বা নাম লিখুন…",autoComplete:"off",className:"w-full rounded-xl border border-slate-300 bg-white py-2.5 pl-10 pr-10 text-sm font-bold text-slate-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"}),c&&n.jsx("button",{type:"button",onClick:()=>d(""),title:"সার্চ মুছুন",className:"absolute right-2 top-1/2 -translate-y-1/2 rounded-lg px-2 py-1 text-sm font-bold text-slate-400 hover:text-slate-700 cursor-pointer",children:"✕"})]}),n.jsxs("div",{className:"mt-1.5 flex flex-wrap items-center justify-between gap-2 text-[11px] font-bold text-slate-600",children:[n.jsx("span",{children:c.trim()?n.jsxs(n.Fragment,{children:["মিলেছে:"," ",n.jsx("span",{className:"font-mono text-indigo-700",children:B.length.toLocaleString("en-IN")})," ","টি"]}):n.jsx(n.Fragment,{children:"সব মেম্বার — খুঁজতে উপরে লিখুন"})}),n.jsxs("span",{className:"flex flex-wrap items-center gap-1.5",children:[n.jsxs("button",{type:"button",onClick:()=>te(S=>!S),title:"একই নাম+সেন্টারে ২জন+ আছে এমন সারিগুলোই দেখাবে",className:`rounded-full px-2.5 py-1 text-[10px] font-black transition cursor-pointer ${M?"bg-amber-500 text-white shadow hover:bg-amber-600":"bg-amber-100 text-amber-800 hover:bg-amber-200"}`,children:["🔁 ডুপ্লিকেট",M?` — ${ae.rows.length.toLocaleString("en-IN")}টি (${ae.groups.toLocaleString("en-IN")} গ্রুপ) ✕`:" খুঁজুন"]}),n.jsx("button",{type:"button",onClick:()=>{J(S=>!S),C(new Set)},title:"সারি মার্ক (টিক) করে একসাথে মোছার মোড",className:`rounded-full px-2.5 py-1 text-[10px] font-black transition cursor-pointer ${k?"bg-indigo-600 text-white shadow hover:bg-indigo-700":"bg-indigo-100 text-indigo-800 hover:bg-indigo-200"}`,children:k?"✕ নির্বাচন বন্ধ":"☑️ নির্বাচন"})]}),n.jsx("span",{className:"text-[10px] font-semibold text-slate-400",children:"যেকোনো সারিতে ট্যাপ করলে কোডটি ফর্মে বসে যাবে"})]})]}),z&&ne.length>0&&n.jsxs("div",{className:"border-b border-indigo-100 bg-linear-to-b from-indigo-50/80 to-white px-4 py-3",children:[n.jsxs("div",{onDragOver:S=>{S.preventDefault(),P(!0)},onDragLeave:()=>P(!1),onDrop:S=>{S.preventDefault(),P(!1),pe(S.dataTransfer.files)},className:`rounded-xl border-2 border-dashed px-4 py-3 text-center transition ${w?"border-indigo-500 bg-indigo-100":"border-indigo-300 bg-indigo-50/50"}`,children:[n.jsx("p",{className:"text-xs font-black text-indigo-950",children:"📤 মাসিক স্যামিটি/রিকভারি-রিপোর্ট — Excel, PDF বা CSV ফাইল দিন"}),n.jsxs("p",{className:"mx-auto mt-1 max-w-lg text-[10px] font-semibold leading-relaxed text-slate-600",children:["MIS-এর মাসিক রিপোর্ট (",n.jsx("span",{className:"font-mono",children:"Samity: …"})," ফরমেট) দিলেই অ্যাপ নিজে মেম্বার-কোড, নাম ও সেন্টার চিনে ",n.jsx("b",{children:"যা ডাটাবেজে নেই তাই যোগ"})," করবে — পুরনো ডেটা অক্ষত থাকে, নাম/সেন্টার বদলালে ঝালাই হয়। ফাইল এখানে টেনে ছাড়ুন বা বোতাম চাপুন।"]}),n.jsx("input",{ref:j,type:"file",accept:".csv,.txt,.xlsx,.xls,.xlsm,.pdf,text/csv,text/plain,application/pdf,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel",onChange:S=>pe(S.target.files),className:"hidden"}),n.jsx("button",{type:"button",disabled:y,onClick:()=>{var S;return(S=j.current)==null?void 0:S.click()},className:"mt-2 rounded-xl bg-linear-to-r from-indigo-600 to-blue-600 px-4 py-2 text-[11px] font-black text-white shadow-md transition hover:from-indigo-700 hover:to-blue-700 disabled:opacity-50 cursor-pointer",children:y?"⏳ ফাইল পড়া হচ্ছে…":"📁 ফাইল বেছে নিন"})]}),re.length>0&&n.jsxs("div",{className:"mt-2.5 overflow-hidden rounded-xl border border-slate-200 bg-white",children:[n.jsxs("div",{className:"flex items-center justify-between gap-2 border-b border-slate-100 bg-slate-50 px-3 py-1.5",children:[n.jsx("span",{className:"text-[10px] font-black text-slate-700",children:"📜 আপলোড-হিস্টোরি"}),n.jsx("span",{className:"text-[9px] font-bold text-slate-400",children:"সর্বশেষ ১৫টি থাকে, পুরনোগুলো নিজেই মুছে যায়"})]}),n.jsx("ul",{className:"max-h-36 divide-y divide-slate-100 overflow-auto",children:re.map(S=>n.jsxs("li",{className:"flex items-center justify-between gap-2 px-3 py-1.5",children:[n.jsxs("div",{className:"min-w-0",children:[n.jsxs("p",{className:"truncate text-[11px] font-black text-slate-800",children:[S.format==="report"?"📊":"🗂️"," ",S.fileName]}),n.jsxs("p",{className:"text-[10px] font-semibold text-slate-500",children:[new Date(S.at).toLocaleString("bn-BD",{dateStyle:"medium",timeStyle:"short"})," — ","নতুন ",n.jsx("span",{className:"font-black text-emerald-700",children:S.added}),", ঝালাই ",n.jsx("span",{className:"font-black text-sky-700",children:S.updated}),typeof S.centres=="number"?`, সেন্টার ${S.centres}`:""]})]}),S.undoneAt?n.jsxs("span",{className:"shrink-0 rounded-lg bg-slate-100 px-2 py-1 text-[9px] font-black text-slate-500",children:["↩️ ফেরত নেওয়া",typeof S.removed=="number"?` (−${S.removed})`:""]}):S.addedCodes&&S.addedCodes.length>0?n.jsx("button",{type:"button",title:"এই আপলোডের নতুন মেম্বাররা ডাটাবেজ থেকে সরে যাবে — ঝালাই হওয়া পুরনোরা অক্ষত",onClick:()=>{if(confirm(`↩️ এই আপলোড ফেরত নেবেন?

এই ফাইল দিয়ে নতুন বসে যাওয়া ${S.added} জন মেম্বার ডাটাবেজ থেকে সরে যাবে (এই অ্যাপের সব ডিভাইস ও ক্লাউড থেকে)।

নাম/সেন্টার ঝালাই হওয়া পুরনো মেম্বার একদম অক্ষত থাকবে।`)){const I=LR(S.id);L(q=>q+1),I&&K({ok:!0,text:`↩️ ফেরত নেওয়া হয়েছে — ${I.removed.toLocaleString("en-IN")} জন মেম্বার সরে গেছে, এখন মোট ${I.total.toLocaleString("en-IN")} জন। ক্লাউডেও কাটছাঁট হচ্ছে…`})}},className:"shrink-0 rounded-lg px-2 py-1 text-xs text-amber-600 transition hover:bg-amber-50 hover:text-amber-700 cursor-pointer",children:"↩️"}):null,n.jsx("button",{type:"button",title:"এই রেকর্ডটি মুছুন — ডাটাবেজের মেম্বার অক্ষত থাকবে",onClick:()=>{confirm("শুধু এই রেকর্ডটি মুছে যাবে — ডাটাবেজে বসে যাওয়া মেম্বাররা অক্ষত থাকবে। মুছে ফেলবেন?")&&(vR(S.id),L(I=>I+1))},className:"shrink-0 rounded-lg px-2 py-1 text-xs text-rose-500 transition hover:bg-rose-50 hover:text-rose-700 cursor-pointer",children:"🗑️"})]},S.id))})]})]}),G&&n.jsxs("div",{className:`flex items-start justify-between gap-2 border-b px-4 py-2 text-[11px] font-bold leading-relaxed ${G.ok?"border-emerald-200 bg-emerald-50 text-emerald-900":"border-rose-200 bg-rose-50 text-rose-800"}`,children:[n.jsxs("span",{children:[G.ok?"✅":"⚠️"," ",G.text]}),n.jsx("button",{type:"button",onClick:()=>K(null),title:"বার্তা বন্ধ করুন",className:"shrink-0 rounded px-1 text-xs font-black opacity-60 hover:opacity-100 cursor-pointer",children:"✕"})]}),n.jsxs("div",{className:"flex-1 overflow-auto",onScroll:S=>{const I=S.currentTarget;I.scrollTop+I.clientHeight>=I.scrollHeight-300&&f(q=>q+200)},children:[ne.length===0?n.jsx("div",{className:"px-4 py-8",children:n.jsxs("div",{onDragOver:S=>{S.preventDefault(),P(!0)},onDragLeave:()=>P(!1),onDrop:S=>{S.preventDefault(),P(!1),pe(S.dataTransfer.files)},className:`mx-auto max-w-xl rounded-2xl border-2 border-dashed p-6 text-center transition ${w?"border-indigo-500 bg-indigo-50":"border-indigo-300 bg-indigo-50/40"}`,children:[n.jsx("div",{className:"text-3xl",children:"📤"}),n.jsx("h4",{className:"mt-2 text-sm font-black text-indigo-950",children:"এই অফিসের মেম্বার ডাটাবেজ আপলোড করুন"}),n.jsx("p",{className:"mx-auto mt-1.5 max-w-md text-[11px] font-semibold leading-relaxed text-slate-600",children:"Excel (.xlsx), PDF বা CSV ফাইল দিলেই বাকি সব নিজে থেকেই হয়ে যাবে — ফাইল পড়া, কলাম শনাক্ত করা, মেম্বার কোড অনুযায়ী ডুপ্লিকেট বাদ দেওয়া, ডাটাবেজে বসানো এবং ক্লাউডে এই অফিসের নিজের ঘরে সংরক্ষণ। এরপর চেক এন্ট্রিতে কোড লিখলেই নাম ও সেন্টার নিজে থেকে চলে আসবে।"}),n.jsx("input",{ref:j,type:"file",accept:".csv,.txt,.xlsx,.xls,.xlsm,.pdf,text/csv,text/plain,application/pdf,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel",onChange:S=>pe(S.target.files),className:"hidden"}),n.jsx("button",{type:"button",disabled:y,onClick:()=>{var S;return(S=j.current)==null?void 0:S.click()},className:"mt-3 rounded-xl bg-linear-to-r from-indigo-600 to-blue-600 px-5 py-2.5 text-xs font-black text-white shadow-md transition hover:from-indigo-700 hover:to-blue-700 disabled:opacity-50 cursor-pointer",children:y?"⏳ ফাইল পড়া হচ্ছে…":"📁 Excel/PDF/CSV ফাইল বেছে নিন"}),n.jsx("p",{className:"mt-1.5 text-[10px] font-bold text-slate-500",children:"অথবা ফাইলটি এখানে টেনে আনুন"}),n.jsxs("div",{className:"mx-auto mt-3 max-w-md rounded-xl border border-slate-200 bg-white px-3 py-2 text-left text-[10px] font-semibold leading-relaxed text-slate-500",children:["MIS-এর মাসিক স্যামিটি-রিপোর্ট (",n.jsx("span",{className:"font-mono",children:"Samity: …"})," ফরমেট) সরাসরি দিলেই চলবে — অ্যাপ নিজেই মেম্বার-কোড, নাম ও সেন্টার বের করবে। সাধারণ CSV-ও চলে: ",n.jsx("span",{className:"font-mono",children:"Member Code, Member Name, Centre Code, Centre Name, Bank Name, Check No"})," (হেডার ছাড়াও এই ক্রমে)।"]}),n.jsx("p",{className:"mt-2 text-[10px] font-black text-amber-700",children:"⚠️ একবার ডাটাবেজ আপলোড হলে এই আপলোড ঘর আর দেখাবে না।"})]})}):O.length===0?n.jsxs("div",{className:"px-4 py-12 text-center",children:[n.jsx("div",{className:"text-3xl",children:"🔍"}),n.jsx("p",{className:"mt-2 text-sm font-bold text-slate-600",children:"কোনো মিল নেই"}),n.jsx("p",{className:"mt-1 text-[11px] font-semibold text-slate-400",children:"কোড বা নামের বানান মিলিয়ে দেখুন।"})]}):n.jsx("ul",{className:"divide-y divide-slate-200",children:O.map((S,I)=>n.jsxs("li",{className:"flex items-stretch",children:[k&&n.jsx("button",{type:"button",onClick:()=>{C(q=>{const ee=new Set(q);return ee.has(S.memberCode)?ee.delete(S.memberCode):ee.add(S.memberCode),ee})},title:ue.has(S.memberCode)?"নির্বাচন তুলুন":"নির্বাচন করুন",className:`shrink-0 border-r px-3 text-base transition cursor-pointer ${ue.has(S.memberCode)?"border-indigo-300 bg-indigo-600 text-white":"border-slate-200 bg-slate-100 text-slate-400 hover:bg-slate-200"}`,children:ue.has(S.memberCode)?"☑️":"⬜"}),n.jsxs("button",{type:"button",onClick:()=>{if(k){C(q=>{const ee=new Set(q);return ee.has(S.memberCode)?ee.delete(S.memberCode):ee.add(S.memberCode),ee});return}u&&u(S),o()},title:"এই মেম্বারটি বেছে নিন",className:`block min-w-0 flex-1 cursor-pointer px-4 py-2.5 text-left transition hover:bg-indigo-50 ${I%2?"bg-slate-50/60":"bg-white"}`,children:[n.jsxs("div",{className:"flex flex-wrap items-center gap-x-3 gap-y-1",children:[n.jsx("span",{className:"font-mono text-xs font-black text-indigo-700",children:S.memberCode}),n.jsx("span",{className:"text-sm font-bold text-slate-900",children:S.memberName||"—"}),M&&n.jsx("span",{className:"rounded bg-amber-100 px-1.5 py-0.5 text-[9px] font-black text-amber-800 ring-1 ring-amber-300",children:"ডুপ্লিকেট"}),n.jsxs("span",{className:"ml-auto flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[11px] font-bold text-slate-600",children:[n.jsx("span",{className:"rounded bg-slate-100 px-1.5 py-0.5 font-mono",children:S.centreCode||"—"}),n.jsx("span",{children:S.centreName||"—"})]})]}),(S.bankName||S.checkNo||S.source==="auto")&&n.jsxs("div",{className:"mt-1 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[10px] font-semibold text-slate-500",children:[S.bankName&&n.jsxs("span",{children:["🏦 ",S.bankName]}),S.checkNo&&n.jsxs("span",{className:"font-mono",children:["চেক #",S.checkNo]}),S.source==="auto"&&n.jsx("span",{className:"rounded bg-amber-100 px-1 py-0.5 font-black text-amber-800",children:"NEW"})]})]}),n.jsx("button",{type:"button",onClick:()=>fe(S),title:`মেম্বার ${S.memberCode} স্থায়ীভাবে মুছে ফেলুন (লোকাল + ক্লাউড)`,className:`shrink-0 cursor-pointer border-l px-3 text-sm transition hover:bg-rose-100 hover:text-rose-700 ${I%2?"border-rose-200/60 bg-slate-50/60 text-slate-400":"border-rose-200/60 bg-white text-slate-400"}`,children:"🗑️"})]},`${S.memberCode}-${I}`))}),B.length>O.length&&n.jsx("div",{className:"p-3 text-center text-[10px] font-bold text-slate-400",children:"↓ নিচে স্ক্রল করলেই পরেরগুলো নিজে থেকে আসবে…"})]}),k&&ue.size>0&&n.jsxs("div",{className:"flex items-center justify-between gap-2 border-t border-indigo-200 bg-indigo-50 px-4 py-2",children:[n.jsxs("span",{className:"text-[11px] font-black text-indigo-900",children:["☑️ ",ue.size.toLocaleString("en-IN")," জন নির্বাচিত"]}),n.jsxs("span",{className:"flex items-center gap-2",children:[n.jsx("button",{type:"button",onClick:()=>C(new Set),className:"rounded-lg bg-slate-200 px-3 py-1.5 text-[10px] font-black text-slate-700 transition hover:bg-slate-300 cursor-pointer",children:"নির্বাচন মুছুন"}),n.jsx("button",{type:"button",onClick:()=>{const S=Array.from(ue);if(confirm(`🗑️ নির্বাচিত ${S.length} জন মেম্বার স্থায়ীভাবে মুছে ফেলবেন?

(সব ডিভাইস ও ক্লাউড থেকে মুছে যাবে; ভুল হলে পরের রিপোর্ট-আপডেটে প্রয়োজনীয় মেম্বার ফিরে আসবে)`)){for(const I of S)try{Bh(I)}catch{}C(new Set),L(I=>I+1),K({ok:!0,text:`🗑️ নির্বাচিত ${S.length.toLocaleString("en-IN")} জন মেম্বার মুছে ফেলা হয়েছে — ক্লাউডেও কাটছাঁট হবে।`})}},className:"rounded-lg bg-rose-600 px-3 py-1.5 text-[10px] font-black text-white shadow transition hover:bg-rose-700 cursor-pointer",children:"🗑️ মুছে ফেলুন"})]})]}),n.jsxs("div",{className:"flex items-center justify-between gap-2 border-t border-slate-200 bg-slate-50 px-4 py-3",children:[n.jsxs("span",{className:"text-[11px] font-bold text-slate-500",children:["দেখানো হচ্ছে"," ",n.jsx("span",{className:"font-mono text-slate-700",children:O.length.toLocaleString("en-IN")})," ","/"," ",n.jsx("span",{className:"font-mono text-slate-700",children:B.length.toLocaleString("en-IN")})]}),n.jsx("button",{type:"button",onClick:o,className:"rounded-xl bg-slate-200 px-4 py-2 text-xs font-bold text-slate-700 transition hover:bg-slate-300 cursor-pointer",children:"বন্ধ করুন"})]})]})})}const Al=l=>!1,J5=(l,o)=>({blocked:!1}),cm=["jagoron","agrossor"],X5=l=>{const o=(l||"").trim().toLowerCase();return(o&&!cm.includes(o)?[...cm,o]:cm).map(c=>({value:c,label:c.toUpperCase()}))},mb=["মেম্বার","জামিনদার-১","জামিনদার-২",{value:"",label:"— ফাঁকা —"}],um=["Sr","Date","মেম্বার কোড","মেম্বার Name","Centre Code","Centre Name","Bank Name","হিসাব নং","Check No.","MICR","Disbursse","Project","Return","Action"],V5=`
@media print {
  @page { size: A4 landscape; margin: 8mm; }
  div.fixed.check-pdf-modal {
    display: block !important;
    position: absolute !important;
    inset: 0 !important;
    overflow: visible !important;
    background: #ffffff !important;
    backdrop-filter: none !important;
  }
  div.fixed.check-pdf-modal .check-pdf-shell {
    height: auto !important; max-height: none !important; margin: 0 !important;
    border-radius: 0 !important; box-shadow: none !important; overflow: visible !important;
  }
  div.fixed.check-pdf-modal .check-pdf-scroll {
    overflow: visible !important; height: auto !important; max-height: none !important;
    background: #ffffff !important; padding: 0 !important;
  }
  #check-pdf-document { max-width: none !important; box-shadow: none !important; padding: 0 !important; }
  #check-pdf-document table { font-size: 10px !important; }
  #check-pdf-document th, #check-pdf-document td { padding: 2px 4px !important; }
  #check-pdf-document tr { page-break-inside: avoid !important; }
}
`,Ea=l=>{const o=[{bankName:l.bankName||"",checkNo:l.checkNo||"",micr:l.micr===!0,accountNo:l.accountNo||"",accountType:l.accountType||""}];for(const u of l.extraBanks||[])u&&((u.bankName||"").trim()||(u.checkNo||"").trim())&&o.push({bankName:u.bankName||"",checkNo:u.checkNo||"",micr:u.micr===!0,accountNo:u.accountNo||"",accountType:u.accountType||""});return o},Y5=l=>JSON.stringify({m:Me(l.memberCode||""),n:(l.memberName||"").trim().toLowerCase(),cc:Me(l.centreCode||""),cn:(l.centreName||"").trim().toLowerCase(),p:Ea(l).map(o=>[(o.bankName||"").trim().toLowerCase(),String(o.checkNo||"").replace(/\s/g,""),o.micr?1:0,String(o.accountNo||"").replace(/\s/g,""),(o.accountType||"").trim()].join("|")).sort(),d:String(l.disbursse||"").replace(/[^0-9.]/g,""),pr:(l.project||"").trim().toLowerCase(),r:l.returned?1:0}),q5=l=>{const o=new Map;for(const u of l){const c=Y5(u),d=o.get(c);if(!d){o.set(c,{row:u,dupes:[]});continue}const A=u.checkDate>d.row.checkDate||u.checkDate===d.row.checkDate&&Number(u.id)>Number(d.row.id);d.dupes=[...d.dupes,A?d.row:u],d.row=A?u:d.row}return[...o.values()]},Q5=[{value:"all",label:"🔍 সব কলাম"},{value:"memberCode",label:"মেম্বার কোড"},{value:"memberName",label:"মেম্বার নাম"},{value:"centreCode",label:"সেন্টার কোড"},{value:"centreName",label:"সেন্টার নাম"},{value:"accountNo",label:"হিসাব নং"}],Ab=["memberCode","centreCode","accountNo"],$5={all:"Search — মেম্বার কোড, সেন্টার কোড, মেম্বার নাম, সেন্টার নাম, হিসাব নং…",memberCode:"মেম্বার কোড লিখুন…",memberName:"মেম্বার নাম লিখুন…",centreCode:"সেন্টার কোড লিখুন…",centreName:"সেন্টার নাম লিখুন…",accountNo:"হিসাব নং লিখুন…"},bp=(l,o,u="all")=>{const c=String(o||"").trim().toLowerCase();if(!c)return!0;const d=Me(o);return u==="memberCode"?d?Me(l.memberCode).includes(d):(l.memberCode||"").toLowerCase().includes(c):u==="centreCode"?d?Me(l.centreCode).includes(d):(l.centreCode||"").toLowerCase().includes(c):u==="accountNo"?d?Me(l.accountNo).includes(d)||(l.extraBanks||[]).some(A=>Me((A==null?void 0:A.accountNo)||"").includes(d)):(l.accountNo||"").toLowerCase().includes(c)||(l.extraBanks||[]).some(A=>String((A==null?void 0:A.accountNo)||"").toLowerCase().includes(c)):u==="memberName"?(l.memberName||"").toLowerCase().includes(c):u==="centreName"?(l.centreName||"").toLowerCase().includes(c):!!(d&&(Me(l.memberCode).includes(d)||Me(l.centreCode).includes(d)||Me(l.accountNo).includes(d)||(l.extraBanks||[]).some(A=>Me((A==null?void 0:A.accountNo)||"").includes(d)))||(l.memberName||"").toLowerCase().includes(c)||(l.centreName||"").toLowerCase().includes(c))},W5=(l,o)=>{const u=String(l??""),c=String(o??"").trim();if(!u||!c)return[{t:u,hit:!1}];const d=Me(c),A=[];let f="";for(let y=0;y<u.length;y++){const p=u[y];/\s/.test(p)||(f+=p.toUpperCase(),A.push(y))}const h=[];let x=0,L=0;for(;d;){const y=f.indexOf(d,L);if(y<0)break;const p=y+d.length,w=A[y],P=A[p-1]+1;w>x&&h.push({t:u.slice(x,w),hit:!1}),h.push({t:u.slice(w,P),hit:!0}),x=P,L=p}return h.length?(x<u.length&&h.push({t:u.slice(x),hit:!1}),h):[{t:u,hit:!1}]},Zi=l=>{const o=String(l||"").trim();if(!/^\d{4}-\d{2}-\d{2}$/.test(o))return!1;const u=Number(o.slice(0,4)),c=Number(o.slice(5,7)),d=Number(o.slice(8,10));if(c<1||c>12||d<1||d>31)return!1;const A=new Date(Date.UTC(u,c-1,d));return A.getUTCFullYear()===u&&A.getUTCMonth()===c-1&&A.getUTCDate()===d},eS=(l,o,u="all")=>{const c=(o||"").trim();if(!c)return l;const d=l.filter(h=>bp(h,c,u)),A=new Map(l.map(h=>[Number(h.id),h])),f=new Map;for(const h of d){if(!h.reissuedTo){f.set(Number(h.id),h);continue}let x=h;const L=new Set;for(;x&&x.reissuedTo&&!L.has(Number(x.id));)L.add(Number(x.id)),x=A.get(Number(x.reissuedTo.id));x&&f.set(Number(x.id),x)}return l.filter(h=>f.has(Number(h.id)))},fb=l=>{if(!l.key||!l.key.startsWith("Arrow"))return;const o=l.currentTarget;if(!o)return;l.preventDefault();const u=80;l.key==="ArrowLeft"?o.scrollLeft-=u:l.key==="ArrowRight"?o.scrollLeft+=u:l.key==="ArrowUp"?o.scrollTop-=u:l.key==="ArrowDown"&&(o.scrollTop+=u)},zi=l=>({checkDate:l,memberCode:"",memberName:"",centreCode:"",centreName:"",bankName:"",checkNo:"",disbursse:"",project:"",micr:!1,accountNo:"",accountType:"",bankStatement:!1,extraBanks:[]}),xb=l=>l?`${l.slice(8,10)}-${l.slice(5,7)}`:"";function tS({selectedDate:l}){const o=l||xa(),[u,c]=b.useState([]),[d,A]=b.useState(zi(o)),[f,h]=b.useState(null),[x,L]=b.useState(""),[y,p]=b.useState("all"),[w,P]=b.useState("");b.useEffect(()=>{const v=setTimeout(()=>P(x),140);return()=>clearTimeout(v)},[x]);const[G,K]=b.useState("idle"),[j,z]=b.useState(0),[ce,M]=b.useState(null),[te,k]=b.useState(!1),[J,ue]=b.useState(!1),[C,ne]=b.useState(""),[re,ae]=b.useState(!1),[fe,pe]=b.useState(1),[B,O]=b.useState(1),[S,I]=b.useState(!1),[q,ee]=b.useState(!1),[U,H]=b.useState(null),[N,oe]=b.useState(!1),[R,$]=b.useState(""),[ge,be]=b.useState(""),[ye,Ie]=b.useState(null),[Y,Q]=b.useState(""),[Re,Te]=b.useState(""),rt=25,At=b.useRef(null),ft=b.useRef(null),et=b.useRef(null),ve=b.useRef(!1);b.useEffect(()=>{const v=At.current;if(!v)return;const ie=le=>{var De,rn;const Se=(rn=(De=le.target)==null?void 0:De.closest)==null?void 0:rn.call(De,"[data-micr-toggle]");if(!Se)return;le.preventDefault();const He=Se.getAttribute("data-micr-toggle");if(He==="main")A(Fe=>({...Fe,micr:!Fe.micr}));else{const Fe=Number(He);Number.isInteger(Fe)&&A(Jn=>({...Jn,extraBanks:Jn.extraBanks.map((zt,nt)=>nt===Fe?{...zt,micr:!zt.micr}:zt)}))}};return v.addEventListener("touchstart",ie,{passive:!1}),()=>v.removeEventListener("touchstart",ie)},[]);const st=Al(d.checkDate);J5(d.checkDate);const St=()=>{c(T5()),z(yR())};b.useEffect(()=>{St();const v=()=>St();return window.addEventListener("check-changed",v),window.addEventListener("member-db-changed",v),window.addEventListener("tx-changed",v),window.addEventListener("day-close-changed",v),()=>{window.removeEventListener("check-changed",v),window.removeEventListener("member-db-changed",v),window.removeEventListener("tx-changed",v),window.removeEventListener("day-close-changed",v)}},[]),b.useEffect(()=>{f||A(v=>v.memberCode||v.checkNo?v:{...v,checkDate:o})},[o,f]);const gt=v=>{const ie=v.trim();if(!ie){K("idle");return}const le=Hh(ie);le?(K("found"),A(Se=>({...Se,memberCode:ie,memberName:le.memberName||"",centreCode:le.centreCode||"",centreName:le.centreName||""}))):(K("notfound"),A(Se=>({...Se,memberCode:ie,memberName:"",centreCode:"",centreName:""})))},yt=G==="found",Ae=G!=="found",Ue=v=>{const ie=Me(v);if(!ie||f)return null;let le=null;for(const Se of u)Se.returned||!(Me(Se.accountNo)===ie||(Se.extraBanks||[]).some(De=>Me(De==null?void 0:De.accountNo)===ie))||(!le||Number(Se.id)>Number(le.id))&&(le=Se);return(le==null?void 0:le.memberCode)||null},lt=b.useMemo(()=>Ue(d.accountNo),[u,d.accountNo,f]),Ot=b.useRef(null),ln=v=>{A(le=>({...le,memberCode:v})),K("idle"),Ot.current&&window.clearTimeout(Ot.current);const ie=v.trim();ie&&(Ot.current=window.setTimeout(()=>gt(ie),350))};b.useEffect(()=>()=>{Ot.current&&window.clearTimeout(Ot.current)},[]);const Zt=()=>{if(!Zi(d.checkDate))return M({kind:"err",text:"তারিখ 100% পূরণ করুন (সম্পূর্ণ তারিখ বাধ্যতামূলক) — না পূরণে এন্ট্রি সেভ হবে না।"});if(!d.memberCode.trim())return M({kind:"err",text:"মেম্বার কোড দিন।"});if(!d.bankName.trim())return M({kind:"err",text:"ব্যাংকের নাম দিন।"});if(!d.checkNo.trim())return M({kind:"err",text:"চেক নম্বর দিন।"});if(Ae){if(!d.memberName.trim())return M({kind:"err",text:"মেম্বার নাম দিন (ডাটাবেজে পাওয়া যায়নি)।"});if(!d.centreCode.trim())return M({kind:"err",text:"সেন্টার কোড দিন (ডাটাবেজে পাওয়া যায়নি)।"});if(!d.centreName.trim())return M({kind:"err",text:"সেন্টার নাম দিন (ডাটাবেজে পাওয়া যায়নি)।"})}const v=d.extraBanks.map(Fe=>({bankName:(Fe.bankName||"").trim(),checkNo:(Fe.checkNo||"").trim(),micr:!!Fe.micr,accountNo:(Fe.accountNo||"").trim(),accountType:Fe.accountType||"",bankStatement:!!Fe.bankStatement})).filter(Fe=>Fe.bankName||Fe.checkNo);for(let Fe=0;Fe<v.length;Fe++){if(!v[Fe].bankName)return M({kind:"err",text:`ব্যাংক #${Fe+2}-এর নাম দিন (না হলে ✕ দিয়ে জোড়াটি বাদ দিন)।`});if(!v[Fe].checkNo)return M({kind:"err",text:`ব্যাংক #${Fe+2}-এর চেক নম্বর দিন (না হলে ✕ দিয়ে জোড়াটি বাদ দিন)।`})}const ie=[{bankName:d.bankName,checkNo:d.checkNo},...v].find(Fe=>Fe.bankName.trim()&&Fe.checkNo.trim()&&G5(Fe.bankName,Fe.checkNo,f==null?void 0:f.id));if(ie&&!confirm(`⚠️ ${ie.bankName} ব্যাংকের ${ie.checkNo} নম্বর চেকটি আগেও এন্ট্রি করা আছে।

তবুও সেভ করতে চান?`))return;Ae&&pR({memberCode:d.memberCode,memberName:d.memberName,centreCode:d.centreCode,centreName:d.centreName,bankName:d.bankName,checkNo:d.checkNo,source:"auto"});const le={checkDate:d.checkDate,memberCode:d.memberCode.trim(),memberName:d.memberName.trim(),centreCode:d.centreCode.trim(),centreName:d.centreName.trim(),bankName:d.bankName.trim(),checkNo:d.checkNo.trim(),disbursse:d.disbursse.trim(),project:d.project.trim().toLowerCase(),micr:!!d.micr,accountNo:d.accountNo.trim(),accountType:d.accountType||"",bankStatement:!!d.bankStatement,extraBanks:v,foundInDb:yt},Se=!!f,He=Se?im({...f,...le}):k5(le);Se&&h(null);const De=!!x.trim()&&!bp(He,x,y);De&&(L(""),pe(1));const rn=as().length;M({kind:"ok",text:Se?`✓ চেক #${le.checkNo} (${le.memberCode}) আপডেট হয়েছে — আগের এন্ট্রিটি মুছে যায়নি, ওই এন্ট্রিটিই বদলেছে। মোট এন্ট্রি: ${rn.toLocaleString("en-IN")}${De?" • সার্চ ফিল্টার সরানো হয়েছে যাতে এন্ট্রিটি দেখা যায়":""}`:Ae?`✓ নতুন মেম্বার (${le.memberCode}) ডাটাবেজে যোগ হয়েছে এবং চেক এন্ট্রি সেভ হয়েছে। মোট এন্ট্রি: ${rn.toLocaleString("en-IN")}`:`✓ চেক #${le.checkNo} সেভ হয়েছে (ডাটাবেজ থেকে তথ্য আনা হয়েছে)। মোট এন্ট্রি: ${rn.toLocaleString("en-IN")}`}),A(zi(d.checkDate)),K("idle"),St()},Dt=v=>{Al(v.checkDate),M(null),I(!1),h(v),A({checkDate:v.checkDate,memberCode:v.memberCode,memberName:v.memberName,centreCode:v.centreCode,centreName:v.centreName,bankName:v.bankName,checkNo:v.checkNo,disbursse:v.disbursse||"",project:(v.project||"").trim().toLowerCase(),accountNo:v.accountNo||"",accountType:v.accountType||"",micr:!!v.micr,bankStatement:!!v.bankStatement,extraBanks:(v.extraBanks||[]).map(Se=>({bankName:(Se==null?void 0:Se.bankName)||"",checkNo:(Se==null?void 0:Se.checkNo)||"",micr:(Se==null?void 0:Se.micr)===!0,accountNo:(Se==null?void 0:Se.accountNo)||"",accountType:(Se==null?void 0:Se.accountType)||"",bankStatement:(Se==null?void 0:Se.bankStatement)===!0}))});const ie=Hh(v.memberCode);K(ie?"found":"notfound");const le=At.current;le&&typeof le.scrollIntoView=="function"&&le.scrollIntoView({behavior:"smooth",block:"start"})},me=v=>{Al(v.checkDate),confirm(`চেক নম্বর ${v.checkNo} (${v.memberCode}) — ${Ze(v.checkDate)||v.checkDate} তারিখের এন্ট্রিটি মুছে ফেলতে চান?`)&&(hp(v.id),(f==null?void 0:f.id)===v.id&&(h(null),A(zi(d.checkDate)),K("idle")),M({kind:"ok",text:`✓ চেক #${v.checkNo} (${v.memberCode}) মুছে ফেলা হয়েছে। বাকি মোট এন্ট্রি: ${as().length.toLocaleString("en-IN")}`}),St())},we=v=>{const{members:ie,skipped:le}=Km(v);if(!ie.length){M({kind:"err",text:"কোনো মেম্বার পাওয়া যায়নি — ফরম্যাট মিলিয়ে দেখুন।"});return}const Se=Yi(ie);M({kind:"ok",text:`✓ ডাটাবেজ আমদানি — নতুন ${Se.added}, আপডেট ${Se.updated}, মোট ${Se.total} মেম্বার${le?` (বাদ ${le})`:""}`}),k(!1),ne(""),St()},Nt=async v=>{const ie=v.name.toLowerCase();try{ie.endsWith(".csv")||ie.endsWith(".txt")||ie.endsWith(".tsv")?we(await v.text()):ie.endsWith(".xlsx")||ie.endsWith(".xls")?(M({kind:"warn",text:"Excel ফাইল সরাসরি পড়া যায় না — ফাইলটি খুলে সব ঘর কপি করে ‘পেস্ট করে আমদানি’ করুন।"}),k(!0)):M({kind:"err",text:"CSV / TXT ফাইল দিন।"})}catch{M({kind:"err",text:"ফাইল পড়া যায়নি।"})}},wn=b.useMemo(()=>{const v=new Set;for(const ie of u)ie.bankName&&ie.bankName.trim()&&v.add(ie.bankName.trim());for(const ie of zn())ie.bankName&&ie.bankName.trim()&&v.add(ie.bankName.trim());return Array.from(v)},[u]),sa=b.useMemo(()=>eS(u,w,y),[u,w,y]),tt=b.useMemo(()=>U?sa.filter(v=>v.checkDate>=U.from&&v.checkDate<=U.to):sa,[sa,U]),la=b.useMemo(()=>{const v=Me(d.memberCode);return v?u.filter(ie=>Me(ie.memberCode)===v&&!ie.returned):[]},[u,d.memberCode]);b.useEffect(()=>{pe(1),O(1)},[w,y,U]);const hl=()=>{if(!R&&!ge){M({kind:"warn",text:"কমপক্ষে একটি তারিখ লিখুন (হতে বা পর্যন্ত)।"});return}let v=R||ge,ie=ge||R;v>ie&&([v,ie]=[ie,v]),H({from:v,to:ie}),oe(!1)},bl=()=>{H(null),$(""),be(""),oe(!1)},Tt=b.useMemo(()=>tt.filter(v=>!v.returned),[tt]),ra=b.useMemo(()=>tt.filter(v=>!!v.returned),[tt]),ls=b.useMemo(()=>tt.reduce((v,ie)=>{const le=Number(String(ie.disbursse||"").replace(/[^0-9.-]/g,""));return v+(Number.isFinite(le)?le:0)},0),[tt]),Ks=u.reduce((v,ie)=>v+(ie.returned?1:0),0),oa=Tt,ka=Math.max(1,Math.ceil(ra.length/rt)),Ua=ra.slice((B-1)*rt,B*rt),Da=b.useMemo(()=>q5(tt),[tt]),Ps=v=>{if(Al(v.checkDate),!v.returned){M(null),Ie(v),Q(""),Te("");return}im({...v,returned:!1,returnDate:""}),M({kind:"ok",text:`✓ চেক #${v.checkNo} (${v.memberCode}) Return থেকে চেক লিস্টে ফিরে এসেছে।`})},pa=()=>{const v=ye;if(v){if(!Zi(Y)){Te("রিটার্নের তারিখ 100% পূরণ করুন (সম্পূর্ণ তারিখ বাধ্যতামূলক) — না পূরণে এন্ট্রি সেভ হবে না।");return}im({...v,returned:!0,returnDate:Y}),Ie(null),Te(""),M({kind:"ok",text:`↩ চেক #${v.checkNo} (${v.memberCode}) Return টেবিলে পাঠানো হয়েছে — তারিখ: ${Ze(Y)||Y}। এন্ট্রিটি মুছে যায়নি।`})}},kt=v=>{const ie=v.reissueChanges;if(!ie||ie.cancelled.length===0&&ie.added.length===0)return null;const le=ie.decisions,Se=(le==null?void 0:le.filter(De=>De.action==="reissued"))||[],He=(le==null?void 0:le.filter(De=>De.action==="returned"))||[];return n.jsxs("div",{className:"mt-1 flex flex-col gap-0.5",children:[le&&Se.length>0&&n.jsxs("span",{className:"inline-block whitespace-nowrap rounded border border-teal-300 bg-teal-50 px-1.5 py-0.5 text-[9px] font-black text-teal-800",title:"রি-ইস্যু হিসেবে ধরা পুরনো চেক — নতুন নম্বরে বদলে গেছে",children:["🔁 রি-ইস্যু: ",Se.map(De=>`#${De.checkNo||"—"}`).join(", ")]}),le&&He.length>0&&n.jsxs("span",{className:"inline-block whitespace-nowrap rounded border border-purple-300 bg-purple-50 px-1.5 py-0.5 text-[9px] font-black text-purple-800",title:"রিটার্ন হিসেবে ধরা পুরনো চেক — রি-ইস্যু হয়নি, শুধু বাতিল",children:["↩ রিটার্ন: ",He.map(De=>`#${De.checkNo||"—"}`).join(", ")]}),!le&&ie.cancelled.length>0&&n.jsxs("span",{className:"inline-block whitespace-nowrap rounded border border-rose-300 bg-rose-50 px-1.5 py-0.5 text-[9px] font-black text-rose-800",title:"রি-ইস্যুতে বাতিল হওয়া পুরনো চেক",children:["🚫 বাতিল: ",ie.cancelled.map(De=>`#${De.checkNo||"—"}`).join(", ")]}),ie.added.length>0&&n.jsxs("span",{className:"inline-block whitespace-nowrap rounded border border-emerald-300 bg-emerald-50 px-1.5 py-0.5 text-[9px] font-black text-emerald-800",title:"রি-ইস্যুতে নতুন অ্যাড হওয়া চেক",children:["✨ নতুন: ",ie.added.map(De=>`#${De.checkNo||"—"}`).join(", ")]})]})},En=()=>A(v=>({...v,extraBanks:[...v.extraBanks,{bankName:"",checkNo:"",micr:!1,accountNo:"",accountType:"",bankStatement:!1}]})),Ct=(v,ie,le)=>A(Se=>({...Se,extraBanks:Se.extraBanks.map((He,De)=>De===v?{...He,[ie]:le}:He)})),_s=v=>A(ie=>({...ie,extraBanks:ie.extraBanks.filter((le,Se)=>Se!==v)})),ia=({children:v})=>{const ie=String(v??""),le=W5(ie,w);return le.length===1&&!le[0].hit?n.jsx(n.Fragment,{children:ie}):n.jsx(n.Fragment,{children:le.map((Se,He)=>Se.hit?n.jsx("mark",{className:"rounded-sm bg-yellow-300 px-[1px] text-slate-950",children:Se.t},He):n.jsx(b.Fragment,{children:Se.t},He))})},rs=(v,ie,le)=>{const Se=Al(v.checkDate);return n.jsxs("tr",{className:`border-b border-slate-200 last:border-b-0 ${le%2?"bg-slate-50/70":"bg-white"} hover:bg-blue-50/60`,children:[n.jsx("td",{className:"px-2 py-1.5 font-mono text-[11px] font-bold text-slate-500",children:ie}),n.jsx("td",{className:"whitespace-nowrap px-2 py-1.5 font-mono text-xs font-bold text-slate-800",children:Ze(v.checkDate)||v.checkDate}),n.jsxs("td",{className:"whitespace-nowrap px-2 py-1.5 font-mono text-xs font-black text-indigo-700",children:[n.jsx(ia,{children:v.memberCode}),v.foundInDb===!1&&n.jsx("span",{className:"ml-1 rounded bg-amber-100 px-1 py-0.5 text-[9px] font-black text-amber-800",title:"এই মেম্বারটি এন্ট্রির সময় ডাটাবেজে ছিল না — এন্ট্রি থেকেই ডাটাবেজে যোগ হয়েছে",children:"NEW"})]}),n.jsx("td",{className:"px-2 py-1.5 text-xs font-semibold text-slate-900",children:n.jsx(ia,{children:v.memberName})}),n.jsx("td",{className:"whitespace-nowrap px-2 py-1.5 font-mono text-xs font-bold text-slate-700",children:n.jsx(ia,{children:v.centreCode})}),n.jsx("td",{className:"px-2 py-1.5 text-xs font-semibold text-slate-900",children:n.jsx(ia,{children:v.centreName})}),n.jsx("td",{className:"px-2 py-1.5 text-xs font-semibold text-slate-800",children:n.jsx("div",{className:"flex flex-col gap-0.5",children:Ea(v).map((He,De)=>n.jsx("span",{children:He.bankName||"—"},De))})}),n.jsxs("td",{className:"whitespace-nowrap px-2 py-1.5",children:[(()=>{const He=(v.bankStatement?1:0)+(v.extraBanks||[]).filter(De=>De==null?void 0:De.bankStatement).length;return He>0?n.jsx("div",{className:"mb-0.5",children:n.jsxs("span",{className:"inline-block rounded border border-sky-300 bg-sky-50 px-1.5 py-0.5 text-[9px] font-black text-sky-800",title:He>1?`এই এন্ট্রিতে ${He}টি হিসাব Bank Statement`:"এই এন্ট্রি Bank Statement হিসেবে ধরা হয়েছে",children:["📄 Bank Stmt",He>1?` ×${He}`:""]})}):null})(),Ea(v).some(He=>He.accountNo||He.accountType)?n.jsx("div",{className:"flex flex-col gap-0.5",children:Ea(v).map((He,De)=>He.accountNo||He.accountType?n.jsxs("span",{className:"inline-flex items-center gap-1",children:[n.jsx("span",{className:"font-mono text-xs font-black text-slate-900",children:n.jsx(ia,{children:He.accountNo||"—"})}),He.accountType&&n.jsx("span",{className:`rounded px-1 py-0.5 text-[9px] font-black ${He.accountType==="মেম্বার"?"bg-indigo-100 text-indigo-800":"bg-teal-100 text-teal-800"}`,children:He.accountType})]},De):null)}):n.jsx("span",{className:"text-slate-300",children:"—"})]}),n.jsxs("td",{className:"px-2 py-1.5 font-mono text-xs font-black text-slate-900",children:[n.jsx("div",{className:"flex flex-col gap-0.5",children:Ea(v).map((He,De)=>n.jsx("span",{className:"whitespace-nowrap",children:He.checkNo||"—"},De))}),v.reissuedTo&&n.jsxs("span",{className:"mt-1 inline-block rounded border border-teal-300 bg-teal-50 px-1.5 py-0.5 text-[9px] font-black text-teal-800",title:`এই চেকটি রি-ইস্যু হয়েছে — নতুন চেক #${v.reissuedTo.checkNo} (এন্ট্রি #${v.reissuedTo.id})`,children:["🔁 Reissued ",Ze(v.reissuedTo.date)||v.reissuedTo.date," → #",v.reissuedTo.checkNo]}),v.reissuedFrom&&n.jsxs("span",{className:"mt-1 inline-block rounded border border-orange-300 bg-orange-50 px-1.5 py-0.5 text-[9px] font-black text-orange-800",title:`পুরনো চেক #${v.reissuedFrom.checkNo} (${Ze(v.reissuedFrom.checkDate)||v.reissuedFrom.checkDate})-এর রি-ইস্যু`,children:["🔁 Reissue — পুরনো চেক #",v.reissuedFrom.checkNo," (",Ze(v.reissuedFrom.checkDate)||v.reissuedFrom.checkDate,")"]}),kt(v)]}),n.jsx("td",{className:"whitespace-nowrap px-2 py-1.5 text-center",children:n.jsx("div",{className:"flex flex-col items-center gap-0.5",children:Ea(v).map((He,De)=>He.micr?n.jsx("span",{className:"rounded border border-emerald-300 bg-emerald-100 px-1.5 py-0.5 text-[10px] font-black text-emerald-800",children:"MICR"},De):n.jsx("span",{className:"rounded border border-slate-300 bg-slate-100 px-1.5 py-0.5 text-[10px] font-black text-slate-600",children:"NON MICR"},De))})}),n.jsx("td",{className:"whitespace-nowrap px-2 py-1.5 text-right font-mono text-xs font-black text-slate-900",children:v.disbursse?Cn(v.disbursse):n.jsx("span",{className:"text-slate-300",children:"—"})}),n.jsx("td",{className:"px-2 py-1.5 text-xs font-semibold text-slate-800",children:v.project?n.jsx("span",{className:"uppercase",children:String(v.project).trim().toUpperCase()}):n.jsx("span",{className:"text-slate-300",children:"—"})}),n.jsxs("td",{className:"whitespace-nowrap px-2 py-1.5 text-center",children:[n.jsx("input",{type:"checkbox",checked:!!v.returned,disabled:Se,onChange:()=>Ps(v),title:v.returned?`↩ রিটার্নের তারিখ: ${Ze(v.returnDate||"")||v.returnDate||"—"} — টিক তুললে এন্ট্রিটি চেক লিস্টে ফিরে যাবে`:"টিক দিলে তারিখ চাইবে — তারিখসহ এন্ট্রিটি Return টেবিলে চলে যাবে",className:"h-4 w-4 cursor-pointer accent-amber-600 disabled:cursor-not-allowed disabled:opacity-40"}),v.returned&&v.returnDate&&n.jsxs("div",{className:"mt-0.5 text-[9px] font-black text-amber-700",title:"রিটার্নের তারিখ",children:["↩ ",Ze(v.returnDate)||v.returnDate]})]}),n.jsx("td",{className:"whitespace-nowrap px-2 py-1.5",children:n.jsxs("div",{className:"flex items-center gap-1",children:[Se,n.jsx("button",{type:"button",onClick:()=>Dt(v),disabled:Se,title:"এডিট করুন",className:"rounded-lg border border-blue-200 bg-blue-50 px-2 py-1 text-xs text-blue-700 transition hover:bg-blue-100 disabled:cursor-not-allowed disabled:opacity-40",children:"✏️"}),n.jsx("button",{type:"button",onClick:()=>me(v),disabled:Se,title:"মুছে ফেলুন",className:"rounded-lg border border-rose-200 bg-rose-50 px-2 py-1 text-xs text-rose-700 transition hover:bg-rose-100 disabled:cursor-not-allowed disabled:opacity-40",children:"🗑️"})]})})]},v.id)},Cn=v=>{const ie=Number(v);return v.trim()!==""&&Number.isFinite(ie)?ie.toLocaleString("en-IN"):v},Ta=b.useMemo(()=>oa.map((v,ie)=>rs(v,ie+1,ie)),[oa,w,st,re]),ga=b.useMemo(()=>Ua.map((v,ie)=>rs(v,(B-1)*rt+ie+1,ie)),[Ua,w,st,re]),vn=b.useMemo(()=>Da.map((v,ie)=>rs(v.row,ie+1,ie)),[Da,w,st,re]),os=b.useMemo(()=>new Set(u.map(v=>Me(v.memberCode))).size,[u]),Gt="w-full rounded-lg border border-slate-300 bg-orange-50 px-3 py-2 text-sm font-semibold text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200",pn="mb-1 block h-[24px] truncate leading-[24px] text-[11px] font-black uppercase tracking-wide text-slate-600",Ra="w-full rounded-lg border border-emerald-300 bg-emerald-50 px-3 py-2 text-sm font-bold text-emerald-900";return n.jsxs("div",{className:"space-y-4 lg:mx-auto lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl lg:space-y-3.5",children:[n.jsxs("div",{ref:At,className:"rounded-2xl border border-slate-200 border-t-4 border-t-indigo-500 bg-white p-4 shadow-sm sm:p-4 lg:p-3.5",children:[n.jsxs("div",{className:"mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3 sm:mb-3 sm:pb-2",children:[n.jsxs("h1",{className:"flex flex-wrap items-center gap-2 text-lg font-black text-slate-900 sm:text-lg",children:[n.jsx("span",{children:"🧾"}),n.jsx("span",{children:"Check Entry"}),st,f&&n.jsxs("span",{className:"shrink-0 rounded-lg border border-amber-300 bg-amber-100 px-2 py-0.5 text-[10px] font-black text-amber-800",children:["✏️ এডিট মোড — #",f.checkNo]})]}),n.jsxs("span",{className:"rounded-lg border border-slate-200 bg-slate-100 px-2.5 py-1 text-[11px] font-bold text-slate-600",children:["🗄️ মেম্বার ডাটাবেজ: ",n.jsx("span",{className:"font-mono",children:j.toLocaleString("en-IN")})]})]}),n.jsxs("div",{className:"grid grid-cols-2 gap-2 sm:grid-cols-2 sm:gap-3 lg:grid-cols-4",children:[n.jsxs("div",{children:[n.jsx("label",{className:pn,children:"Date (তারিখ)"}),n.jsx(xn,{value:d.checkDate,onChange:v=>A(ie=>({...ie,checkDate:v||ie.checkDate})),className:"py-2 text-sm font-semibold",manualEntry:!0})]}),n.jsxs("div",{children:[n.jsxs("div",{className:"mb-1 flex h-[24px] items-center justify-between gap-2",children:[n.jsx("label",{className:`${pn} !mb-0`,children:"Member Code (মেম্বার কোড)"}),n.jsx("button",{type:"button",onClick:()=>ue(!0),title:"মেম্বার ডাটাবেজ থেকে খুঁজুন",className:"flex h-6 w-7 shrink-0 cursor-pointer items-center justify-center rounded-md border border-indigo-300 bg-indigo-50 text-xs transition hover:bg-indigo-100",children:"🗄️"})]}),n.jsxs("div",{className:"relative",children:[n.jsx("input",{value:d.memberCode,onChange:v=>ln(v.target.value),onBlur:v=>{Ot.current&&window.clearTimeout(Ot.current),gt(v.target.value)},onKeyDown:v=>{v.key==="Enter"&&v.target.blur()},className:Gt,inputMode:"numeric",pattern:"[0-9]*",autoComplete:"off"}),G!=="idle"&&n.jsx("span",{className:`pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 rounded px-1.5 py-0.5 text-[10px] font-black ${yt?"bg-emerald-100 text-emerald-800 border border-emerald-300":"bg-amber-100 text-amber-800 border border-amber-300"}`,children:yt?"✓ ডাটাবেজে আছে":"⚠ পাওয়া যায়নি"})]}),yt&&d.memberName.trim()?n.jsxs("div",{className:"mt-1 flex items-start gap-1.5 rounded-lg border border-emerald-300 bg-emerald-50 px-2 py-1",children:[n.jsx("span",{"aria-hidden":"true",className:"leading-[18px]",children:"👤"}),n.jsx("span",{className:"text-[12px] font-black leading-[18px] text-emerald-900",children:d.memberName})]}):null]}),n.jsxs("div",{children:[n.jsxs("div",{className:"mb-1 flex h-[24px] items-center justify-between gap-2",children:[n.jsx("label",{className:`${pn} !mb-0`,children:"Bank Name (ব্যাংকের নাম)"}),d.extraBanks.length===0&&n.jsx("button",{type:"button",onClick:En,title:"আরেকটি ব্যাংক + চেক নম্বর যোগ করুন (টেবিলে এক সারিতেই থাকবে)",className:"flex h-6 w-7 shrink-0 cursor-pointer items-center justify-center rounded-md border border-emerald-400 bg-emerald-100 text-sm font-black text-emerald-800 transition hover:bg-emerald-200",children:"＋"})]}),n.jsx(ub,{value:d.bankName,onChange:v=>A(ie=>({...ie,bankName:v})),className:Gt,extras:wn,placeholder:"Bank name"})]}),n.jsxs("div",{children:[n.jsxs("div",{className:"mb-1 flex h-[24px] items-center justify-between gap-2",children:[n.jsx("label",{className:`${pn} !mb-0`,children:"হিসাব নং"}),n.jsxs("label",{className:"flex cursor-pointer select-none items-center gap-1 rounded-md border border-sky-300 bg-sky-50 px-2 py-0.5 text-[10px] font-black text-sky-800 transition hover:bg-sky-100",title:"টিক দিলে এই হিসাব Bank Statement হিসেবে ধরা হবে — টেবিলে 📄 ব্যাজ দেখাবে",children:[n.jsx("input",{type:"checkbox",checked:!!d.bankStatement,onChange:v=>A(ie=>({...ie,bankStatement:v.target.checked})),className:"h-3.5 w-3.5 cursor-pointer accent-sky-600"}),n.jsx("span",{className:"whitespace-nowrap",children:"Bank Stmt"}),n.jsx("span",{className:"rounded bg-white px-1 text-[9px] font-black text-slate-500",children:d.bankStatement?"BS ✓":"—"})]})]}),lt?n.jsxs("div",{className:"mb-1 flex items-center gap-1 rounded-md border border-amber-300 bg-amber-50 px-2 py-0.5 text-[10px] font-black text-amber-900",children:[n.jsx("span",{"aria-hidden":"true",children:"🔁"}),n.jsxs("span",{children:["আগেই ব্যবহার হয়েছে — মেম্বার কোড: ",n.jsx("span",{className:"font-mono",children:lt})]})]}):null,n.jsx("input",{value:d.accountNo,onChange:v=>A(ie=>({...ie,accountNo:v.target.value})),className:Gt,inputMode:"numeric",pattern:"[0-9]*",autoComplete:"off",placeholder:"অ্যাকাউন্ট নম্বর"})]}),n.jsxs("div",{children:[n.jsx("label",{className:pn,children:"ক্যাটাগরি"}),n.jsx(Zn,{value:d.accountType,onChange:v=>A(ie=>({...ie,accountType:v})),options:mb,placeholder:"-- Select --",className:`${Gt} cursor-pointer`,noKeyboardOnMobile:!0})]}),n.jsxs("div",{children:[n.jsxs("div",{className:"mb-1 flex h-[24px] items-center justify-between gap-2",children:[n.jsx("label",{className:`${pn} !mb-0`,children:"Check No."}),n.jsxs("label",{"data-micr-toggle":"main",onMouseDown:v=>{document.activeElement===et.current&&(ve.current=!0),v.preventDefault()},className:"flex cursor-pointer select-none items-center gap-1 rounded-md border border-emerald-300 bg-emerald-50 px-2 py-0.5 text-[10px] font-black text-emerald-800 transition hover:bg-emerald-100",title:"টিক দিলে টেবিলে MICR, টিক না দিলে NON MICR দেখাবে",children:[n.jsx("input",{type:"checkbox",checked:!!d.micr,onChange:v=>{const ie=v.target.checked;A(le=>({...le,micr:ie})),ve.current&&window.setTimeout(()=>{var le;(le=et.current)==null||le.focus(),ve.current=!1},0)},className:"h-3.5 w-3.5 cursor-pointer accent-emerald-600"}),n.jsx("span",{children:"MICR"}),n.jsx("span",{className:"rounded bg-white px-1 text-[9px] font-black text-slate-500",children:d.micr?"MICR":"NON MICR"})]})]}),n.jsx("input",{ref:et,value:d.checkNo,onChange:v=>A(ie=>({...ie,checkNo:v.target.value})),className:Gt,inputMode:"numeric",pattern:"[0-9]*",autoComplete:"off"})]}),n.jsxs("div",{children:[n.jsx("label",{className:pn,children:"Disbursse (Amount)"}),n.jsx("input",{value:d.disbursse,onChange:v=>{const ie=v.target.value;/^-?\d*\.?\d*$/.test(ie)&&A(le=>({...le,disbursse:ie}))},inputMode:"numeric",pattern:"[0-9]*",className:`${Gt} text-right font-mono`,autoComplete:"off"})]}),n.jsxs("div",{children:[n.jsx("label",{className:"mb-1 block h-[24px] truncate leading-[24px] text-[11px] font-black tracking-wide text-slate-600",children:"project"}),n.jsx(Zn,{value:(d.project||"").trim().toLowerCase(),onChange:v=>A(ie=>({...ie,project:v.trim().toLowerCase()})),options:X5(d.project),placeholder:"-- select project --",className:`${Gt} cursor-pointer uppercase`,noKeyboardOnMobile:!0})]})]}),d.extraBanks.length>0&&n.jsx("div",{className:"mt-3 space-y-2",children:d.extraBanks.map((v,ie)=>n.jsxs(b.Fragment,{children:[ie===d.extraBanks.length-1&&n.jsx("div",{className:"mb-1 flex justify-end",children:n.jsx("button",{type:"button",onClick:En,title:"আরেকটি ব্যাংক + চেক নম্বর যোগ করুন (টেবিলে এক সারিতেই থাকবে)",className:"flex h-6 w-7 cursor-pointer items-center justify-center rounded-md border border-emerald-400 bg-emerald-100 text-sm font-black text-emerald-800 transition hover:bg-emerald-200",children:"＋"})}),n.jsxs("div",{className:"grid grid-cols-[1fr_1fr_auto] items-end gap-2 rounded-xl border border-emerald-300 bg-emerald-50/60 p-2",children:[n.jsxs("div",{children:[n.jsxs("span",{className:"mb-1 block text-[10px] font-black tracking-wide text-emerald-800",children:["ব্যাংক #",ie+2]}),n.jsx(ub,{value:v.bankName,onChange:le=>Ct(ie,"bankName",le),className:Gt,extras:wn,placeholder:"Bank name"})]}),n.jsxs("div",{children:[n.jsxs("span",{className:"mb-1 flex items-center justify-between gap-1",children:[n.jsxs("span",{className:"block text-[10px] font-black tracking-wide text-emerald-800",children:["হিসাব নং #",ie+2]}),n.jsxs("label",{className:"flex cursor-pointer select-none items-center gap-1 rounded-md border border-sky-300 bg-sky-50 px-1.5 py-0.5 text-[9px] font-black text-sky-800 transition hover:bg-sky-100",title:"টিক দিলে এই হিসাব (#{} নং) Bank Statement হিসেবে ধরা হবে",children:[n.jsx("input",{type:"checkbox",checked:!!v.bankStatement,onChange:le=>Ct(ie,"bankStatement",le.target.checked),className:"h-3 w-3 cursor-pointer accent-sky-600"}),n.jsx("span",{className:"whitespace-nowrap",children:"Bank Stmt"}),n.jsx("span",{className:"rounded bg-white px-1 text-[8px] font-black text-slate-500",children:v.bankStatement?"BS ✓":"—"})]})]}),(()=>{const le=Ue(v.accountNo||"");return le?n.jsxs("div",{className:"mb-1 flex items-center gap-1 rounded-md border border-amber-300 bg-amber-50 px-2 py-0.5 text-[10px] font-black text-amber-900",children:[n.jsx("span",{"aria-hidden":"true",children:"🔁"}),n.jsxs("span",{children:["আগেই ব্যবহার হয়েছে — মেম্বার কোড: ",n.jsx("span",{className:"font-mono",children:le})]})]}):null})(),n.jsx("input",{value:v.accountNo||"",onChange:le=>Ct(ie,"accountNo",le.target.value),className:Gt,inputMode:"numeric",pattern:"[0-9]*",placeholder:"অ্যাকাউন্ট নম্বর",autoComplete:"off"})]}),n.jsx("button",{type:"button",onClick:()=>_s(ie),title:"এই ব্যাংক জোড়া মুছুন",className:"h-9 w-9 shrink-0 cursor-pointer rounded-lg border border-rose-300 bg-rose-50 text-sm font-black text-rose-700 transition hover:bg-rose-100",children:"✕"}),n.jsxs("div",{className:"col-span-3 grid grid-cols-2 gap-2 border-t border-emerald-200/70 pt-2",children:[n.jsxs("div",{children:[n.jsxs("span",{className:"mb-1 block h-[24px] leading-[24px] text-[10px] font-black tracking-wide text-emerald-800",children:["ক্যাটাগরি #",ie+2]}),n.jsx(Zn,{value:v.accountType||"",onChange:le=>Ct(ie,"accountType",le),options:mb,placeholder:"-- Select --",className:`${Gt} cursor-pointer`,noKeyboardOnMobile:!0})]}),n.jsxs("div",{children:[n.jsxs("div",{className:"mb-1 flex h-[24px] items-center justify-between gap-2",children:[n.jsxs("span",{className:"block text-[10px] font-black tracking-wide text-emerald-800",children:["চেক নম্বর #",ie+2]}),n.jsxs("label",{"data-micr-toggle":String(ie),onMouseDown:le=>le.preventDefault(),className:"flex cursor-pointer select-none items-center gap-1 rounded-md border border-emerald-300 bg-emerald-50 px-1.5 py-0.5 text-[9px] font-black text-emerald-800 transition hover:bg-emerald-100",title:"টিক দিলে এই চেকটি MICR, টিক না দিলে NON MICR",children:[n.jsx("input",{type:"checkbox",checked:!!v.micr,onChange:le=>Ct(ie,"micr",le.target.checked),className:"h-3.5 w-3.5 cursor-pointer accent-emerald-600"}),n.jsx("span",{children:"MICR"}),n.jsx("span",{className:"rounded bg-white px-1 text-[8px] font-black text-slate-500",children:v.micr?"MICR":"NON MICR"})]})]}),n.jsx("input",{value:v.checkNo,onChange:le=>Ct(ie,"checkNo",le.target.value),className:Gt,inputMode:"numeric",pattern:"[0-9]*",placeholder:"Check No.",autoComplete:"off"})]})]})]})]},ie))}),la.length>0&&n.jsxs("div",{className:"mt-3 rounded-xl border border-indigo-300 bg-indigo-50/70 p-3",children:[n.jsx("div",{className:"mb-2 flex flex-wrap items-center justify-between gap-2",children:n.jsxs("span",{className:"flex items-center gap-2 text-[11px] font-black text-indigo-900",children:["🔎 এই মেম্বার কোডের সেভ করা চেক এন্ট্রি",n.jsx("span",{className:"rounded bg-indigo-100 px-1.5 py-0.5 font-mono",children:la.length})]})}),n.jsx("div",{className:"space-y-1.5",children:la.map(v=>{const ie=Al(v.checkDate),le=(f==null?void 0:f.id)===v.id;return n.jsxs("div",{className:`flex flex-wrap items-center gap-2 rounded-lg border px-2.5 py-1.5 ${le?"border-amber-300 bg-amber-50":"border-slate-200 bg-white"}`,children:[n.jsx("span",{className:"font-mono text-[11px] font-black text-slate-700",children:Ze(v.checkDate)||v.checkDate}),n.jsx("span",{className:"text-[11px] font-bold text-slate-600",children:Ea(v).map(Se=>Se.bankName).filter(Boolean).join(", ")}),n.jsx("span",{className:"font-mono text-[11px] font-black text-slate-900",children:Ea(v).map(Se=>Se.checkNo?`#${Se.checkNo}`:"").filter(Boolean).join(", ")}),v.disbursse&&n.jsxs("span",{className:"font-mono text-[11px] font-bold text-emerald-700",children:["৳",Cn(v.disbursse)]}),v.project&&n.jsx("span",{className:"rounded bg-slate-100 px-1.5 py-0.5 text-[10px] font-bold text-slate-600 uppercase",children:String(v.project).trim().toUpperCase()}),n.jsx("span",{className:`rounded border px-1.5 py-0.5 text-[10px] font-black ${v.micr?"border-emerald-300 bg-emerald-100 text-emerald-800":"border-slate-300 bg-slate-100 text-slate-600"}`,children:v.micr?"MICR":"NON MICR"}),n.jsxs("div",{className:"ml-auto flex items-center gap-1",children:[ie,le&&n.jsx("span",{className:"rounded border border-amber-300 bg-amber-100 px-1.5 py-0.5 text-[10px] font-black text-amber-800",children:"✏️ এডিট মোড"}),n.jsx("button",{type:"button",onClick:()=>Dt(v),disabled:le,title:"এই এন্ট্রি এডিট করুন",className:"rounded-lg border border-blue-200 bg-blue-50 px-2 py-1 text-[11px] font-bold text-blue-700 transition hover:bg-blue-100 disabled:cursor-not-allowed disabled:opacity-40",children:"✏️ এডিট"}),n.jsx("button",{type:"button",onClick:()=>me(v),disabled:ie,title:"এই এন্ট্রি মুছে ফেলুন",className:"rounded-lg border border-rose-200 bg-rose-50 px-2 py-1 text-[11px] font-bold text-rose-700 transition hover:bg-rose-100 disabled:cursor-not-allowed disabled:opacity-40",children:"🗑️ ডিলিট"})]})]},v.id)})})]}),G==="idle"?null:yt?n.jsxs("div",{className:"mt-3 rounded-xl border border-emerald-300 bg-emerald-50 p-3",children:[n.jsxs("div",{className:"mb-2 flex items-center gap-2 text-[11px] font-black text-emerald-900",children:[n.jsx("span",{children:"✓"}),n.jsx("span",{children:"ডাটাবেজ থেকে তথ্য নেওয়া হয়েছে — শুধু তারিখ, মেম্বার কোড, ব্যাংক, চেক নম্বর, বিতরণ ও প্রকল্প এন্ট্রি করুন"})]}),n.jsxs("div",{className:"grid grid-cols-1 gap-3 sm:grid-cols-3",children:[n.jsxs("div",{children:[n.jsx("label",{className:"mb-1 block text-[11px] font-black uppercase tracking-wide text-emerald-800",children:"Member Name"}),n.jsx("div",{className:Ra,children:d.memberName||"—"})]}),n.jsxs("div",{children:[n.jsx("label",{className:"mb-1 block text-[11px] font-black uppercase tracking-wide text-emerald-800",children:"Centre Code"}),n.jsx("div",{className:Ra,children:d.centreCode||"—"})]}),n.jsxs("div",{children:[n.jsx("label",{className:"mb-1 block text-[11px] font-black uppercase tracking-wide text-emerald-800",children:"Centre Name"}),n.jsx("div",{className:Ra,children:d.centreName||"—"})]})]})]}):n.jsxs("div",{className:"mt-3 rounded-xl border-2 border-amber-400 bg-amber-50 p-3",children:[n.jsxs("div",{className:"mb-2 flex items-center gap-2 text-[11px] font-black text-amber-900",children:[n.jsx("span",{children:"⚠️"}),n.jsxs("span",{children:["এই মেম্বার কোড ডাটাবেজে নেই — টেবিলের ",n.jsx("u",{children:"সব ঘর"})," পূরণ করতে হবে। সেভ করলে মেম্বারটি ডাটাবেজেও যোগ হয়ে যাবে।"]})]}),n.jsxs("div",{className:"grid grid-cols-1 gap-3 sm:grid-cols-3",children:[n.jsxs("div",{children:[n.jsxs("label",{className:"mb-1 block text-[11px] font-black uppercase tracking-wide text-amber-800",children:["Member Name ",n.jsx("span",{className:"text-rose-600",children:"*"})]}),n.jsx("input",{value:d.memberName,onChange:v=>A(ie=>({...ie,memberName:v.target.value})),placeholder:"মেম্বারের নাম",className:Gt,autoComplete:"off"})]}),n.jsxs("div",{children:[n.jsxs("label",{className:"mb-1 block text-[11px] font-black uppercase tracking-wide text-amber-800",children:["Centre Code ",n.jsx("span",{className:"text-rose-600",children:"*"})]}),n.jsx("input",{value:d.centreCode,inputMode:"numeric",pattern:"[0-9]*",onChange:v=>A(ie=>({...ie,centreCode:v.target.value})),placeholder:"সেন্টার কোড",className:Gt,autoComplete:"off"})]}),n.jsxs("div",{children:[n.jsxs("label",{className:"mb-1 block text-[11px] font-black uppercase tracking-wide text-amber-800",children:["Centre Name ",n.jsx("span",{className:"text-rose-600",children:"*"})]}),n.jsx("input",{value:d.centreName,onChange:v=>A(ie=>({...ie,centreName:v.target.value})),placeholder:"সেন্টারের নাম",className:Gt,autoComplete:"off"})]})]})]}),n.jsxs("div",{className:"mt-4 flex flex-wrap items-center gap-2",children:[n.jsx("button",{type:"button",onClick:Zt,disabled:st,className:"rounded-xl bg-indigo-600 px-4 py-2 text-sm font-black text-white shadow-sm transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-50",children:f?"💾 আপডেট করুন":"＋ সেভ করুন"}),n.jsx("button",{type:"button",onClick:()=>{h(null),A(zi(d.checkDate)),K("idle"),M(null)},className:"rounded-xl bg-slate-200 px-4 py-2 text-sm font-bold text-slate-700 transition hover:bg-slate-300",children:"রিসেট"}),ce&&n.jsx("span",{className:`rounded-lg px-3 py-1.5 text-[11px] font-bold ${ce.kind==="ok"?"bg-emerald-50 text-emerald-800 border border-emerald-300":ce.kind==="warn"?"bg-amber-50 text-amber-800 border border-amber-300":"bg-rose-50 text-rose-800 border border-rose-300"}`,children:ce.text})]})]}),n.jsxs("div",{className:"rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-4 lg:p-3.5",children:[n.jsxs("div",{className:"mb-3 flex flex-wrap items-center justify-between gap-2",children:[n.jsx("h2",{className:"text-base font-black text-slate-900 sm:text-lg",children:"🧾 Check List"}),n.jsxs("div",{className:"flex flex-wrap items-center gap-2 text-[11px] font-bold text-slate-600",children:[n.jsxs("span",{className:"rounded-lg border border-slate-200 bg-slate-100 px-2 py-1",children:["মোট এন্ট্রি: ",n.jsx("span",{className:"font-mono",children:u.length.toLocaleString("en-IN")})]}),n.jsxs("span",{className:"rounded-lg border border-slate-200 bg-slate-100 px-2 py-1",children:["মেম্বার: ",n.jsx("span",{className:"font-mono",children:os.toLocaleString("en-IN")})]}),n.jsxs("span",{className:"rounded-lg border border-amber-300 bg-amber-50 px-2 py-1 text-amber-800",children:["↩ Return: ",n.jsx("span",{className:"font-mono",children:Ks.toLocaleString("en-IN")})]}),(x||U)&&n.jsxs("span",{className:"rounded-lg border border-blue-200 bg-blue-50 px-2 py-1 text-blue-800",children:["ফিল্টার: ",n.jsx("span",{className:"font-mono",children:tt.length})]})]})]}),n.jsxs("div",{className:"mb-3 flex flex-wrap items-stretch gap-2",children:[n.jsx("div",{className:"w-[8.5rem] sm:w-44 shrink-0",children:n.jsx(Zn,{value:y,onChange:v=>p(v),noKeyboardOnMobile:!0,options:Q5,placeholder:"🔍 সব কলাম",className:"w-full h-full cursor-pointer rounded-xl border border-slate-300 bg-white px-2.5 py-2.5 text-xs sm:text-sm font-bold text-slate-800 focus:border-blue-500 focus:outline-none"})}),n.jsxs("div",{className:"relative order-3 basis-full shrink-0 sm:order-none sm:basis-auto sm:flex-1 sm:min-w-0",children:[n.jsx("span",{className:"pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400",children:"🔍"}),n.jsx("input",{value:x,inputMode:Ab.includes(y)?"numeric":void 0,pattern:Ab.includes(y)?"[0-9]*":void 0,onChange:v=>L(v.target.value),placeholder:$5[y],className:"w-full rounded-xl border border-slate-300 bg-orange-50 py-2.5 pl-10 pr-28 text-sm font-semibold text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200",autoComplete:"off"}),(x.trim()||U)&&tt.length>0&&n.jsxs("button",{type:"button",onClick:()=>I(!0),title:"মিলে যাওয়া এন্ট্রিগুলো টেবিল আকারে ফুল স্ক্রিনে দেখুন — একাধিক এন্ট্রি উপর-নিচ সারি হিসেবে, এডিট/ডিলিট/Return সহ",className:"absolute right-11 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg border border-blue-300 bg-blue-50 px-2 py-1 text-[11px] font-black text-blue-700 transition hover:bg-blue-100 cursor-pointer",children:["👁 View (",tt.length,")"]}),x&&n.jsx("button",{type:"button",onClick:()=>L(""),className:"absolute right-2 top-1/2 -translate-y-1/2 rounded-lg px-2 py-1 text-sm font-bold text-slate-400 hover:text-slate-700",children:"✕"})]}),n.jsxs("div",{className:"relative shrink-0",children:[n.jsxs("button",{type:"button",onClick:()=>{$((U==null?void 0:U.from)||""),be((U==null?void 0:U.to)||""),oe(v=>!v)},title:"তারিখ হতে তারিখ ফিল্টার — নির্দিষ্ট সীমার চেক এন্ট্রি দেখুন",className:`flex h-full cursor-pointer items-center gap-1 whitespace-nowrap rounded-xl border px-3 py-2 text-[11px] font-black transition ${U?"border-sky-600 bg-sky-600 text-white shadow":"border-slate-300 bg-orange-50 text-slate-700 hover:border-sky-400 hover:text-sky-700"}`,children:["📅 ",U?`${xb(U.from)} → ${xb(U.to)}`:"তারিখ"]}),N&&n.jsxs("div",{className:"absolute right-0 top-full z-40 mt-1.5 w-64 rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl",children:[n.jsxs("div",{className:"mb-2 flex items-center justify-between",children:[n.jsx("span",{className:"text-xs font-black text-slate-800",children:"📅 তারিখ হতে তারিখ"}),n.jsx("button",{type:"button",onClick:()=>oe(!1),className:"rounded px-1.5 text-sm font-black text-slate-400 hover:text-slate-700",children:"✕"})]}),n.jsxs("div",{className:"mb-2",children:[n.jsx("label",{className:"mb-1 block text-[10px] font-black text-slate-600",children:"হতে"}),n.jsx(xn,{value:R,onChange:$,manualEntry:!0,className:"px-2.5 py-1.5 text-xs"})]}),n.jsxs("div",{className:"mb-3",children:[n.jsx("label",{className:"mb-1 block text-[10px] font-black text-slate-600",children:"পর্যন্ত"}),n.jsx(xn,{value:ge,onChange:be,manualEntry:!0,className:"px-2.5 py-1.5 text-xs"})]}),n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("button",{type:"button",onClick:hl,className:"flex-1 rounded-lg bg-emerald-600 px-3 py-1.5 text-[11px] font-black text-white transition hover:bg-emerald-700",children:"✔ প্রয়োগ"}),n.jsx("button",{type:"button",onClick:bl,disabled:!U&&!R&&!ge,className:"rounded-lg bg-rose-50 px-3 py-1.5 text-[11px] font-black text-rose-700 transition hover:bg-rose-100 disabled:opacity-40",children:"✕ মুছুন"})]})]})]}),U&&n.jsx("button",{type:"button",onClick:bl,title:"তারিখ ফিল্টার রিসেট — সব তারিখের এন্ট্রি দেখুন",className:"flex h-full shrink-0 cursor-pointer items-center gap-1 whitespace-nowrap rounded-xl border border-amber-400 bg-amber-50 px-3 py-2 text-[11px] font-black text-amber-800 shadow-sm transition hover:border-amber-500 hover:bg-amber-100",children:"↺ রিসেট"}),U&&n.jsxs("button",{type:"button",onClick:()=>ee(!0),title:"তারিখ-সীমার সব এন্ট্রি — সকল তথ্যসহ PDF/প্রিন্ট ভিউ",className:"flex h-full shrink-0 cursor-pointer items-center gap-1 whitespace-nowrap rounded-xl border border-rose-600 bg-rose-600 px-3 py-2 text-[11px] font-black text-white shadow transition hover:border-rose-700 hover:bg-rose-700",children:["📄 PDF (",tt.length,")"]})]}),n.jsx("div",{className:"overflow-hidden rounded-xl border border-slate-200",children:n.jsx("div",{tabIndex:0,onKeyDown:fb,className:"max-h-[80vh] overflow-auto focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-400 rounded-md",title:"Arrow কি চাপলে টেবিল স্ক্রল হবে",children:n.jsxs("table",{className:"w-full min-w-[980px] border-collapse text-sm",children:[n.jsx("thead",{className:"sticky top-0 z-10 bg-slate-800 text-white",children:n.jsx("tr",{children:um.map(v=>n.jsx("th",{className:"whitespace-nowrap border-r border-slate-700 px-2 py-2 text-left text-[11px] font-black uppercase tracking-wide last:border-r-0",children:v},v))})}),n.jsx("tbody",{children:oa.length===0?n.jsx("tr",{children:n.jsx("td",{colSpan:14,className:"px-4 py-10 text-center text-sm font-semibold text-slate-500",children:x?"🔍 এই অনুসন্ধানে চেক লিস্টে কোনো ডাটা পাওয়া যায়নি।":"এখনো কোনো চেক এন্ট্রি নেই — উপরের ফর্ম থেকে যোগ করুন।"})}):Ta})]})})}),Tt.length>0&&n.jsx("div",{className:"mt-3 flex items-center justify-center",children:n.jsxs("span",{className:"rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-[11px] font-bold text-slate-600",children:["মোট ",n.jsx("span",{className:"font-mono",children:Tt.length})," টি চেক — ↕ স্ক্রল করে সব এন্ট্রি দেখুন"]})})]}),n.jsxs("div",{className:"mt-5 lg:mt-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-4 lg:p-3.5",children:[n.jsxs("div",{className:"mb-3 flex flex-wrap items-center justify-between gap-2",children:[n.jsx("h2",{className:"text-base font-black text-slate-900 sm:text-lg",children:"↩ Return Table"}),n.jsxs("div",{className:"flex flex-wrap items-center gap-2 text-[11px] font-bold text-slate-600",children:[n.jsxs("span",{className:"rounded-lg border border-amber-300 bg-amber-50 px-2 py-1 text-amber-800",children:["রিটার্ন এন্ট্রি: ",n.jsx("span",{className:"font-mono",children:ra.length.toLocaleString("en-IN")})]}),n.jsx("span",{className:"rounded-lg border border-slate-200 bg-slate-100 px-2 py-1",children:"Return ঘরের টিক তুললে এন্ট্রি চেক লিস্টে ফিরে যায়"})]})]}),n.jsx("div",{className:"overflow-hidden rounded-xl border border-slate-200",children:n.jsx("div",{tabIndex:0,onKeyDown:fb,className:"max-h-[80vh] overflow-auto focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-400 rounded-md",title:"Arrow কি চাপলে টেবিল স্ক্রল হবে",children:n.jsxs("table",{className:"w-full min-w-[980px] border-collapse text-sm",children:[n.jsx("thead",{className:"sticky top-0 z-10 bg-slate-800 text-white",children:n.jsx("tr",{children:um.map(v=>n.jsx("th",{className:"whitespace-nowrap border-r border-slate-700 px-2 py-2 text-left text-[11px] font-black uppercase tracking-wide last:border-r-0",children:v},v))})}),n.jsx("tbody",{children:Ua.length===0?n.jsx("tr",{children:n.jsx("td",{colSpan:14,className:"px-4 py-10 text-center text-sm font-semibold text-slate-500",children:x?"🔍 এই অনুসন্ধানে Return টেবিলে কোনো ডাটা পাওয়া যায়নি।":"Return টেবিলে কোনো এন্ট্রি নেই — চেক লিস্টের Return ঘরে টিক দিন।"})}):ga})]})})}),ka>1&&n.jsxs("div",{className:"mt-3 flex flex-wrap items-center justify-between gap-2",children:[n.jsxs("span",{className:"text-[11px] font-bold text-slate-600",children:["পেজ ",n.jsx("span",{className:"font-mono",children:B})," / ",n.jsx("span",{className:"font-mono",children:ka})," —"," ","মোট ",n.jsx("span",{className:"font-mono",children:ra.length})," রেকর্ড"]}),n.jsxs("div",{className:"flex items-center gap-1",children:[n.jsx("button",{type:"button",onClick:()=>O(v=>Math.max(1,v-1)),disabled:B===1,className:"rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-bold text-slate-700 transition hover:bg-slate-100 disabled:opacity-40",children:"‹ আগের"}),n.jsx("button",{type:"button",onClick:()=>O(v=>Math.min(ka,v+1)),disabled:B===ka,className:"rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-bold text-slate-700 transition hover:bg-slate-100 disabled:opacity-40",children:"পরের ›"})]})]})]}),S&&n.jsx("div",{className:"fixed inset-0 z-[60] overflow-hidden bg-slate-950/80 backdrop-blur-sm",children:n.jsxs("div",{className:"flex h-full flex-col overflow-hidden bg-slate-50 shadow-2xl sm:m-2 sm:rounded-2xl",children:[n.jsxs("div",{className:"flex shrink-0 items-center justify-between gap-2 border-b border-slate-200 bg-white px-3 py-2 sm:px-4",children:[n.jsxs("div",{className:"flex min-w-0 items-center gap-2",children:[n.jsx("span",{className:"text-xl",children:"👁"}),n.jsxs("div",{className:"min-w-0",children:[n.jsxs("h3",{className:"truncate text-base font-black text-slate-900",children:["সার্চ ফলাফল — “",x.trim()||"তারিখ ফিল্টার","”"]}),n.jsxs("p",{className:"text-xs font-bold text-slate-500",children:[sa.length,"টি এন্ট্রি • চেক লিস্ট: ",Tt.length," • Return:"," ",ra.length]})]})]}),n.jsx("button",{type:"button",onClick:()=>I(!1),className:"shrink-0 cursor-pointer rounded-xl bg-rose-600 px-3.5 py-2 text-sm font-black text-white shadow transition hover:bg-rose-700",children:"✕ ক্লোজ"})]}),n.jsx("div",{className:"min-h-0 flex-1 overflow-auto p-2 sm:p-3",children:tt.length===0?n.jsx("div",{className:"flex h-full items-center justify-center text-sm font-bold text-slate-500",children:"কোনো এন্ট্রি নেই"}):n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"hidden overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm md:block",children:[n.jsxs("table",{className:"w-full min-w-[980px] border-collapse text-sm",children:[n.jsx("thead",{className:"sticky top-0 z-10 bg-slate-800 text-white",children:n.jsx("tr",{children:um.map(v=>n.jsx("th",{className:"whitespace-nowrap border-r border-slate-700 px-2 py-2 text-left text-[11px] font-black uppercase tracking-wide last:border-r-0",children:v},v))})}),n.jsx("tbody",{children:vn})]}),Da.some(v=>v.dupes.length>0)&&n.jsx("p",{className:"border-t border-amber-200 bg-amber-50 px-2 py-1 text-[10px] font-black text-amber-800",children:"⚠️ একই চেকের হুবহু একই তথ্য একাধিক এন্ট্রিতে আছে — প্রতিটি একবারই দেখানো হয়েছে (সাম্প্রতিকতম তারিখের এন্ট্রি)।"})]}),n.jsx("div",{className:"space-y-2 md:hidden",children:Da.map((v,ie)=>{const le=v.row,Se=v.dupes,He=Al(le.checkDate),De=Ea(le),rn=[];De.forEach((nt,Je)=>{const ot=(nt.accountType||"").trim(),Et=ot==="মেম্বার"?"member":ot==="জামিনদার-১"?"g1":ot==="জামিনদার-২"?"g2":Je===0?"member":"other";let Mn=rn.find(Zs=>Zs.key===Et);Mn||(Mn={key:Et,items:[],...Et==="member"?{title:"👤 মেম্বার তথ্য",head:"text-indigo-800",box:"border-indigo-200 bg-indigo-50/70"}:Et==="g1"?{title:"🤝 জামিনদার-১ তথ্য",head:"text-teal-800",box:"border-teal-200 bg-teal-50/70"}:Et==="g2"?{title:"🤝 জামিনদার-২ তথ্য",head:"text-amber-800",box:"border-amber-200 bg-amber-50/70"}:{title:"ℹ️ অন্যান্য ব্যাংক তথ্য — ক্যাটাগরি দেওয়া নেই",head:"text-slate-700",box:"border-slate-200 bg-slate-50"}},rn.push(Mn)),Mn.items.push({b:nt,bi:Je})});const Fe={member:0,g1:1,g2:2,other:3};rn.sort((nt,Je)=>Fe[nt.key]-Fe[Je.key]);const Jn=rn.some(nt=>nt.key==="member"),zt=({label:nt,children:Je})=>n.jsxs("div",{className:"flex items-start justify-between gap-2 border-b border-slate-100 py-1 last:border-b-0",children:[n.jsx("span",{className:"shrink-0 pt-0.5 text-[10px] font-black uppercase tracking-wide text-slate-500",children:nt}),n.jsx("span",{className:"min-w-0 max-w-[62%] text-right text-xs font-bold text-slate-900",children:Je})]});return n.jsxs("div",{className:`rounded-xl border p-2 shadow-sm ${le.returned?"border-amber-300 bg-amber-50":"border-slate-200 bg-white"}`,children:[n.jsxs("div",{className:"mb-1 flex items-center justify-between gap-2 border-b border-slate-200 pb-1.5",children:[n.jsxs("span",{className:"flex min-w-0 items-center gap-1.5",children:[n.jsx("span",{className:"inline-flex h-4 w-4 shrink-0 items-center justify-center rounded bg-slate-800 font-mono text-[9px] font-black text-white",children:ie+1}),n.jsx("span",{className:"truncate font-mono text-sm font-black text-indigo-700",children:le.memberCode}),le.foundInDb===!1&&n.jsx("span",{className:"shrink-0 rounded bg-amber-100 px-1 py-0.5 text-[9px] font-black text-amber-800",children:"NEW"})]}),n.jsxs("span",{className:"flex shrink-0 items-center gap-1 text-[11px] font-bold text-slate-600",children:[le.returned&&n.jsxs("span",{className:"rounded border border-amber-400 bg-amber-100 px-1.5 py-0.5 text-[10px] font-black text-amber-800",children:["↩ RETURN",le.returnDate?` (${Ze(le.returnDate)||le.returnDate})`:""]}),He,"📅 ",Ze(le.checkDate)||le.checkDate]})]}),Se.length>0&&n.jsxs("p",{className:"mb-1 rounded-md border border-amber-300 bg-amber-50 px-1.5 py-0.5 text-[9px] font-black text-amber-900",children:["⚠️ একই চেকের হুবহু একই তথ্য ",Se.length+1,"টি এন্ট্রিতে আছে (তারিখ:"," ",[le.checkDate,...Se.map(nt=>nt.checkDate)].sort().map(nt=>Ze(nt)||nt).join(", "),") — সাম্প্রতিকতমটি একবার দেখানো হয়েছে"]}),n.jsx(zt,{label:"সদস্যের নাম",children:le.memberName||"—"}),n.jsx(zt,{label:"সেন্টার কোড",children:n.jsx("span",{className:"font-mono",children:le.centreCode||"—"})}),n.jsx(zt,{label:"সেন্টার নাম",children:le.centreName||"—"}),rn.map(nt=>n.jsxs("div",{className:`mt-1.5 rounded-lg border px-2 py-1 ${nt.box}`,children:[n.jsx("p",{className:`text-[10px] font-black ${nt.head}`,children:nt.title}),n.jsx(zt,{label:"ব্যাংকের নাম",children:n.jsx("div",{className:"flex flex-col items-end gap-0.5",children:nt.items.map(({b:Je,bi:ot})=>n.jsx("span",{children:Je.bankName||"—"},ot))})}),n.jsx(zt,{label:"চেক নম্বর",children:n.jsxs("div",{className:"flex flex-col items-end gap-0.5",children:[nt.items.map(({b:Je,bi:ot})=>n.jsx("span",{className:"font-mono font-black",children:Je.checkNo||"—"},ot)),nt.key==="member"&&le.reissuedTo&&n.jsxs("span",{className:"whitespace-nowrap rounded border border-teal-300 bg-teal-50 px-1.5 py-0.5 text-[9px] font-black text-teal-800",title:`এই চেকটি রি-ইস্যু হয়েছে — নতুন চেক #${le.reissuedTo.checkNo}`,children:["🔁 Reissued ",Ze(le.reissuedTo.date)||le.reissuedTo.date," → #",le.reissuedTo.checkNo]}),nt.key==="member"&&le.reissuedFrom&&n.jsxs("span",{className:"whitespace-nowrap rounded border border-orange-300 bg-orange-50 px-1.5 py-0.5 text-[9px] font-black text-orange-800",children:["🔁 Reissue — পুরনো #",le.reissuedFrom.checkNo," (",Ze(le.reissuedFrom.checkDate)||le.reissuedFrom.checkDate,")"]}),nt.key==="member"&&kt(le)]})}),n.jsx(zt,{label:"MICR",children:n.jsx("div",{className:"flex flex-col items-end gap-0.5",children:nt.items.map(({b:Je,bi:ot})=>n.jsx("span",{className:`rounded border px-1.5 py-0.5 text-[9px] font-black ${Je.micr?"border-emerald-300 bg-emerald-100 text-emerald-800":"border-slate-300 bg-slate-100 text-slate-600"}`,children:Je.micr?"MICR":"NON MICR"},ot))})}),n.jsx(zt,{label:"হিসাব নং",children:nt.items.some(({b:Je})=>Je.accountNo||Je.accountType)?n.jsx("div",{className:"flex flex-col items-end gap-0.5",children:nt.items.map(({b:Je,bi:ot})=>Je.accountNo||Je.accountType?n.jsxs("span",{className:"inline-flex items-center gap-1",children:[n.jsx("span",{className:"font-mono font-black",children:Je.accountNo||"—"}),Je.accountType&&n.jsx("span",{className:`rounded px-1 py-0.5 text-[9px] font-black ${Je.accountType==="মেম্বার"?"bg-indigo-100 text-indigo-800":"bg-teal-100 text-teal-800"}`,children:Je.accountType})]},ot):null)}):"—"})]},nt.key)),(le.reissuedTo||le.reissuedFrom)&&!Jn&&n.jsx(zt,{label:"রি-ইস্যু",children:n.jsxs("div",{className:"flex flex-col items-end gap-0.5",children:[le.reissuedTo&&n.jsxs("span",{className:"whitespace-nowrap rounded border border-teal-300 bg-teal-50 px-1.5 py-0.5 text-[9px] font-black text-teal-800",children:["🔁 Reissued ",Ze(le.reissuedTo.date)||le.reissuedTo.date," → #",le.reissuedTo.checkNo]}),le.reissuedFrom&&n.jsxs("span",{className:"whitespace-nowrap rounded border border-orange-300 bg-orange-50 px-1.5 py-0.5 text-[9px] font-black text-orange-800",children:["🔁 Reissue — পুরনো #",le.reissuedFrom.checkNo," (",Ze(le.reissuedFrom.checkDate)||le.reissuedFrom.checkDate,")"]}),kt(le)]})}),n.jsx(zt,{label:"Disbursse",children:n.jsx("span",{className:"font-mono",children:le.disbursse?`৳${Cn(le.disbursse)}`:"—"})}),n.jsx(zt,{label:"Project",children:n.jsx("span",{className:"uppercase",children:le.project?String(le.project).trim().toUpperCase():"—"})}),n.jsxs("div",{className:"mt-1.5 flex items-center justify-between gap-1.5 border-t border-slate-200 pt-1.5",children:[n.jsxs("label",{className:`flex items-center gap-1.5 rounded-lg border px-2 py-1 text-[11px] font-black ${le.returned?"border-amber-400 bg-amber-100 text-amber-900":"border-slate-300 bg-slate-100 text-slate-700"} cursor-pointer`,title:le.returned?"টিক তুললে এন্ট্রিটি চেক লিস্টে ফিরে যাবে":"টিক দিলে এন্ট্রিটি Return টেবিলে চলে যাবে",children:[n.jsx("input",{type:"checkbox",checked:!!le.returned,disabled:He,onChange:()=>Ps(le),className:"h-3.5 w-3.5 accent-amber-600 disabled:cursor-not-allowed"}),"↩ Return"]}),n.jsxs("div",{className:"flex items-center gap-1",children:[n.jsx("button",{type:"button",disabled:He,onClick:()=>Dt(le),title:"এডিট করুন",className:"cursor-pointer rounded-lg border border-blue-200 bg-blue-50 px-2 py-1 text-xs text-blue-700 transition hover:bg-blue-100 disabled:cursor-not-allowed disabled:opacity-40",children:"✏️"}),n.jsx("button",{type:"button",disabled:He,onClick:()=>me(le),title:"মুছে ফেলুন",className:"cursor-pointer rounded-lg border border-rose-200 bg-rose-50 px-2 py-1 text-xs text-rose-700 transition hover:bg-rose-100 disabled:cursor-not-allowed disabled:opacity-40",children:"🗑️"})]})]})]},le.id)})})]})})]})}),q&&U&&n.jsx("div",{className:"check-pdf-modal fixed inset-0 z-[65] overflow-hidden bg-slate-950/80 backdrop-blur-sm",children:n.jsxs("div",{className:"check-pdf-shell flex h-full flex-col overflow-hidden bg-white shadow-2xl sm:m-2 sm:rounded-2xl",children:[n.jsxs("div",{className:"no-print flex shrink-0 items-center justify-between gap-2 border-b border-slate-200 bg-white px-3 py-2 sm:px-4",children:[n.jsxs("div",{className:"flex min-w-0 items-center gap-2",children:[n.jsx("span",{className:"text-xl",children:"📄"}),n.jsxs("div",{className:"min-w-0",children:[n.jsx("h3",{className:"truncate text-base font-black text-slate-900",children:"PDF ভিউ — তারিখ হতে তারিখ চেক এন্ট্রি"}),n.jsxs("p",{className:"text-xs font-bold text-slate-500",children:["📅 ",Ze(U.from)||U.from," হতে"," ",Ze(U.to)||U.to," • মোট"," ",n.jsx("span",{className:"font-mono",children:tt.length}),"টি এন্ট্রি (চেক লিস্ট"," ",n.jsx("span",{className:"font-mono",children:Tt.length})," • Return"," ",n.jsx("span",{className:"font-mono",children:ra.length}),")",x.trim()?` • 🔍 সার্চ: "${x.trim()}" প্রয়োগ আছে`:""]})]})]}),n.jsxs("div",{className:"flex shrink-0 items-center gap-2",children:[n.jsx("button",{type:"button",onClick:()=>window.print(),title:"প্রিন্ট / Save as PDF ডায়ালগ খুলবে",className:"cursor-pointer rounded-xl bg-emerald-600 px-3.5 py-2 text-sm font-black text-white shadow transition hover:bg-emerald-700",children:"🖨️ প্রিন্ট / PDF সেভ"}),n.jsx("button",{type:"button",onClick:()=>ee(!1),className:"cursor-pointer rounded-xl bg-rose-600 px-3.5 py-2 text-sm font-black text-white shadow transition hover:bg-rose-700",children:"✕ ক্লোজ"})]})]}),n.jsxs("div",{className:"no-print shrink-0 border-b border-emerald-200 bg-emerald-50 px-3 py-1.5 text-[11px] font-bold text-emerald-900 sm:px-4",children:["💡 “🖨️ প্রিন্ট / PDF সেভ” চাপলে প্রিন্ট ডায়ালগ আসবে — সেখানে Destination হিসেবে"," ",n.jsx("span",{className:"font-black",children:"“Save as PDF”"})," বেছে নিলেই PDF ফাইল ডাউনলোড হবে (ল্যান্ডস্কেপ আকারে)।"]}),n.jsxs("div",{className:"check-pdf-scroll min-h-0 flex-1 overflow-auto bg-slate-100 p-2 sm:p-4",children:[n.jsx("style",{children:V5}),n.jsxs("div",{id:"check-pdf-document",className:"mx-auto bg-white p-3 shadow sm:p-5",style:{maxWidth:"1240px"},children:[n.jsxs("div",{className:"mb-3 text-center",children:[n.jsx("h1",{className:"text-base font-black text-slate-900 sm:text-lg",children:"চেক এন্ট্রি রিপোর্ট"}),n.jsxs("p",{className:"mt-0.5 text-[11px] font-bold text-slate-600",children:["তারিখ: ",n.jsx("span",{className:"font-mono",children:Ze(U.from)||U.from})," ","হতে ",n.jsx("span",{className:"font-mono",children:Ze(U.to)||U.to})," পর্যন্ত • মোট এন্ট্রি: ",n.jsx("span",{className:"font-mono",children:tt.length}),x.trim()?` • সার্চ: "${x.trim()}"`:"","• মোট Disbursse: ",n.jsxs("span",{className:"font-mono",children:["৳",Cn(String(ls))]})]})]}),tt.length===0?n.jsx("p",{className:"py-8 text-center text-xs font-bold text-slate-500",children:"এই তারিখ-সীমায় কোনো এন্ট্রি নেই"}):n.jsxs("table",{className:"w-full border-collapse text-[11px]",children:[n.jsx("thead",{children:n.jsx("tr",{className:"bg-slate-100",children:["Sr","তারিখ","মেম্বার কোড","সদস্যের নাম","সেন্টার কোড","সেন্টার নাম","ব্যাংকের নাম","চেক নম্বর","MICR","হিসাব নং","ক্যাটাগরি","Disbursse (৳)","Project","Return","রি-ইস্যু তথ্য"].map(v=>n.jsx("th",{className:"whitespace-nowrap border border-slate-300 px-1.5 py-1 text-left text-[10px] font-black text-slate-700",children:v},v))})}),n.jsx("tbody",{children:tt.map((v,ie)=>{const le=Ea(v);return n.jsxs("tr",{className:ie%2?"bg-slate-50":"bg-white",children:[n.jsx("td",{className:"border border-slate-300 px-1.5 py-1 font-mono font-bold text-slate-500",children:ie+1}),n.jsx("td",{className:"whitespace-nowrap border border-slate-300 px-1.5 py-1 font-mono font-bold",children:Ze(v.checkDate)||v.checkDate}),n.jsxs("td",{className:"border border-slate-300 px-1.5 py-1 font-mono font-black text-indigo-700",children:[v.memberCode,v.foundInDb===!1?" (NEW)":""]}),n.jsx("td",{className:"border border-slate-300 px-1.5 py-1 font-semibold",children:v.memberName}),n.jsx("td",{className:"border border-slate-300 px-1.5 py-1 font-mono",children:v.centreCode}),n.jsx("td",{className:"border border-slate-300 px-1.5 py-1",children:v.centreName}),n.jsx("td",{className:"border border-slate-300 px-1.5 py-1",children:n.jsx("div",{className:"flex flex-col",children:le.map((Se,He)=>n.jsx("span",{children:Se.bankName||"—"},He))})}),n.jsx("td",{className:"border border-slate-300 px-1.5 py-1 font-mono font-black",children:n.jsx("div",{className:"flex flex-col",children:le.map((Se,He)=>n.jsx("span",{children:Se.checkNo||"—"},He))})}),n.jsx("td",{className:"border border-slate-300 px-1.5 py-1 text-center",children:n.jsx("div",{className:"flex flex-col",children:le.map((Se,He)=>n.jsx("span",{className:Se.micr?"font-black text-emerald-700":"font-bold text-slate-500",children:Se.micr?"MICR":"NON MICR"},He))})}),n.jsx("td",{className:"border border-slate-300 px-1.5 py-1 font-mono",children:n.jsx("div",{className:"flex flex-col",children:le.map((Se,He)=>n.jsx("span",{children:Se.accountNo||"—"},He))})}),n.jsx("td",{className:"border border-slate-300 px-1.5 py-1",children:n.jsx("div",{className:"flex flex-col",children:le.map((Se,He)=>n.jsx("span",{children:Se.accountType||"—"},He))})}),n.jsx("td",{className:"border border-slate-300 px-1.5 py-1 text-right font-mono font-black",children:v.disbursse?Cn(v.disbursse):"—"}),n.jsx("td",{className:"border border-slate-300 px-1.5 py-1 uppercase",children:v.project?String(v.project).trim().toUpperCase():"—"}),n.jsx("td",{className:"whitespace-nowrap border border-slate-300 px-1.5 py-1 text-center font-black",children:v.returned?n.jsxs("span",{className:"text-amber-700",children:["↩ RETURN",v.returnDate?` (${Ze(v.returnDate)||v.returnDate})`:""]}):"—"}),n.jsxs("td",{className:"border border-slate-300 px-1.5 py-1 text-[10px] font-bold",children:[v.reissuedTo&&n.jsxs("span",{className:"text-teal-700",children:["→ #",v.reissuedTo.checkNo," (",Ze(v.reissuedTo.date)||v.reissuedTo.date,")"]}),v.reissuedFrom&&n.jsxs("span",{className:"text-orange-700",children:["পুরনো #",v.reissuedFrom.checkNo," (",Ze(v.reissuedFrom.checkDate)||v.reissuedFrom.checkDate,")-এর রি-ইস্যু"]}),v.reissueChanges&&n.jsxs("span",{className:"block text-[9px]",children:[v.reissueChanges.decisions?n.jsxs(n.Fragment,{children:[n.jsxs("span",{className:"text-teal-700",children:["🔁 রি-ইস্যু:"," ",v.reissueChanges.decisions.filter(Se=>Se.action==="reissued").map(Se=>`#${Se.checkNo||"—"}`).join(", ")||"—"]})," ",n.jsxs("span",{className:"text-purple-700",children:["↩ রিটার্ন:"," ",v.reissueChanges.decisions.filter(Se=>Se.action==="returned").map(Se=>`#${Se.checkNo||"—"}`).join(", ")||"—"]})," "]}):n.jsxs("span",{className:"text-rose-700",children:["🚫 বাতিল: ",v.reissueChanges.cancelled.map(Se=>`#${Se.checkNo||"—"}`).join(", ")||"—"]})," ",n.jsxs("span",{className:"text-emerald-700",children:["✨ নতুন: ",v.reissueChanges.added.map(Se=>`#${Se.checkNo||"—"}`).join(", ")||"—"]})]}),!v.reissuedTo&&!v.reissuedFrom&&!v.reissueChanges&&"—"]})]},v.id)})}),n.jsx("tfoot",{children:n.jsxs("tr",{className:"bg-slate-100",children:[n.jsx("td",{colSpan:11,className:"border border-slate-300 px-1.5 py-1 text-right text-[11px] font-black text-slate-800",children:"মোট Disbursse —"}),n.jsxs("td",{className:"border border-slate-300 px-1.5 py-1 text-right font-mono text-[11px] font-black text-slate-900",children:["৳",Cn(String(ls))]}),n.jsx("td",{colSpan:3,className:"border border-slate-300 px-1.5 py-1"})]})})]}),n.jsxs("p",{className:"mt-2 text-center text-[10px] font-bold text-slate-500",children:["— মোট ",n.jsx("span",{className:"font-mono",children:tt.length}),"টি এন্ট্রি —"]})]})]})]})}),ye&&n.jsx("div",{className:"fixed inset-0 z-[70] flex items-center justify-center overflow-y-auto bg-slate-950/70 p-3 backdrop-blur-sm",children:n.jsxs("div",{className:"w-full max-w-md rounded-2xl border border-amber-300 bg-white shadow-2xl",children:[n.jsxs("div",{className:"rounded-t-2xl border-b border-amber-200 bg-amber-50 px-4 py-3",children:[n.jsxs("h3",{className:"flex items-center gap-2 text-base font-black text-amber-900",children:[n.jsx("span",{children:"↩"})," ",n.jsx("span",{children:"চেক রিটার্ন — তারিখ দিন"})]}),n.jsxs("p",{className:"mt-0.5 text-[11px] font-bold text-amber-800",children:["চেক: ",n.jsxs("span",{className:"font-mono",children:["#",ye.checkNo]})," • ",ye.bankName||"—"," • মেম্বার"," ",n.jsx("span",{className:"font-mono",children:ye.memberCode})]})]}),n.jsxs("div",{className:"space-y-3 p-4",children:[n.jsxs("div",{children:[n.jsx("label",{className:pn,children:"রিটার্নের তারিখ (বাধ্যতামূলক)"}),n.jsx(xn,{value:Y,onChange:v=>{Q(v||""),Te("")},className:"py-2 text-sm font-semibold",manualEntry:!0}),n.jsx("p",{className:"mt-1 text-[10px] font-bold text-slate-500",children:"এই তারিখ 100% পূরণ না করলে এন্ট্রি সেভ হবে না।"})]}),Re&&n.jsxs("div",{className:"rounded-xl border border-rose-300 bg-rose-50 px-3 py-2 text-xs font-black text-rose-800",children:["⚠️ ",Re]}),n.jsxs("div",{className:"flex items-center justify-end gap-2 pt-1",children:[n.jsx("button",{type:"button",onClick:()=>{Ie(null),Te("")},className:"cursor-pointer rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-black text-slate-700 shadow-xs transition hover:bg-slate-100",children:"✕ বাদ"}),n.jsx("button",{type:"button",onClick:pa,title:Zi(Y)?"রিটার্ন সেভ করুন":"আগে সম্পূর্ণ তারিখ পূরণ করুন",className:`cursor-pointer rounded-xl px-5 py-2 text-sm font-black text-white shadow transition ${Zi(Y)?"bg-amber-600 hover:bg-amber-700":"bg-slate-300"}`,children:"✓ রিটার্ন সেভ"})]})]})]})}),J&&n.jsx(F5,{open:J,onClose:()=>ue(!1),onPick:v=>{A(ie=>({...ie,memberCode:v.memberCode||"",memberName:v.memberName||"",centreCode:v.centreCode||"",centreName:v.centreName||""})),K("found"),M(null)}}),te&&n.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4",children:n.jsxs("div",{className:"w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl",children:[n.jsxs("div",{className:"flex items-center justify-between border-b border-emerald-200 bg-gradient-to-r from-emerald-600 to-teal-600 px-5 py-3.5 text-white",children:[n.jsxs("div",{className:"flex items-center gap-2.5",children:[n.jsx("span",{className:"flex h-9 w-9 items-center justify-center rounded-xl bg-white/20 text-lg",children:"🗄️"}),n.jsxs("div",{children:[n.jsx("h3",{className:"text-base font-black",children:"মেম্বার ডাটাবেজ আমদানি"}),n.jsx("p",{className:"text-[11px] text-emerald-100",children:"কলাম: Member Code, Member Name, Centre Code, Centre Name (Bank Name, Check No. ঐচ্ছিক)"})]})]}),n.jsx("button",{type:"button",onClick:()=>k(!1),className:"flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-sm font-bold hover:bg-white/30",children:"✕"})]}),n.jsxs("div",{className:"space-y-3 p-5",children:[n.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[n.jsx("input",{ref:ft,type:"file",accept:".csv,.txt,.tsv,.xlsx,.xls",className:"hidden",onChange:v=>{var le;const ie=(le=v.target.files)==null?void 0:le[0];ie&&Nt(ie),v.target.value=""}}),n.jsx("button",{type:"button",onClick:()=>{var v;return(v=ft.current)==null?void 0:v.click()},className:"rounded-xl bg-emerald-600 px-4 py-2 text-xs font-black text-white transition hover:bg-emerald-700",children:"📁 ফাইল বেছে নিন (CSV / TXT)"}),n.jsx("button",{type:"button",onClick:()=>{ne(`Member Code,Member Name,Centre Code,Centre Name,Bank Name,Check No
M-1001,আব্দুল করিম,C-01,ধানমন্ডি শাখা,Sonali Bank,445566
M-1002,রহিম উদ্দিন,C-02,মিরপুর শাখা,Janata Bank,778899`)},className:"rounded-xl border border-slate-300 bg-white px-4 py-2 text-xs font-bold text-slate-700 transition hover:bg-slate-100",children:"নমুনা বসান"}),n.jsxs("span",{className:"text-[11px] font-bold text-slate-500",children:["বর্তমানে ডাটাবেজে: ",n.jsx("span",{className:"font-mono",children:j.toLocaleString("en-IN")})," মেম্বার"]})]}),n.jsxs("div",{children:[n.jsx("label",{className:"mb-1 block text-[11px] font-black uppercase tracking-wide text-slate-600",children:"অথবা Excel / Google Sheet থেকে কপি করে এখানে পেস্ট করুন"}),n.jsx("textarea",{value:C,onChange:v=>ne(v.target.value),rows:9,placeholder:`Member Code	Member Name	Centre Code	Centre Name
M-1001	আব্দুল করিম	C-01	ধানমন্ডি শাখা`,className:"w-full rounded-xl border border-slate-300 px-3 py-2 font-mono text-xs text-slate-900 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"}),n.jsx("p",{className:"mt-1 text-[11px] text-slate-500",children:"ট্যাব বা কমা — দুইভাবেই আলাদা করা যায়। হেডার লাইন থাকলে কলাম নিজে থেকেই চেনা হবে। একই কোড থাকলে আগের তথ্য আপডেট হয়ে যাবে।"})]})]}),n.jsxs("div",{className:"flex items-center justify-between gap-2 border-t border-slate-200 bg-slate-50 px-5 py-3.5",children:[n.jsx("button",{type:"button",onClick:()=>{confirm("পুরো মেম্বার ডাটাবেজ মুছে ফেলতে চান?")&&(localStorage.removeItem("gobra_member_database"),St(),M({kind:"warn",text:"মেম্বার ডাটাবেজ খালি করা হয়েছে।"}))},className:"rounded-xl border border-rose-300 bg-rose-50 px-3 py-2 text-[11px] font-bold text-rose-700 transition hover:bg-rose-100",children:"🗑️ ডাটাবেজ খালি করুন"}),n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("button",{type:"button",onClick:()=>k(!1),className:"rounded-xl bg-slate-200 px-4 py-2 text-xs font-bold text-slate-700 transition hover:bg-slate-300",children:"বাতিল"}),n.jsx("button",{type:"button",onClick:()=>we(C),disabled:!C.trim(),className:"rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-5 py-2 text-xs font-black text-white shadow-md transition hover:from-emerald-700 hover:to-teal-700 disabled:opacity-50",children:"⬆️ আমদানি করুন"})]})]})]})})]})}const hb=`/**
 * GOOGLE APPS SCRIPT SYNC CODE - CASH GOBRA
 * Paste this in your Google Sheet: Extensions -> Apps Script
 */
function doGet(e) {
  return handleRequest(e);
}
function doPost(e) {
  return handleRequest(e);
}
function handleRequest(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(30000);
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    if (!ss) return jsonResponse({ ok: false, error: "Open sheet directly" });
    
    var body = null;
    if (e && e.postData && e.postData.contents) {
      try { body = JSON.parse(e.postData.contents); } catch (err) {}
    }
    if (!body && e && e.parameter) body = e.parameter;
    if (!body) return jsonResponse({ ok: true, message: "Script active for " + ss.getName() });

    var action = body.action || (body.data && body.data.action);
    var data = body.data || body;

    if (action === "test") {
      var s = ss.getSheetByName("Status") || ss.insertSheet("Status");
      s.getRange("A1").setValue("Last Test Connection");
      s.getRange("B1").setValue(new Date().toString());
      return jsonResponse({ ok: true, message: "Connected to " + ss.getName() });
    }

    if (action === "sync_all") {
      var count = 0;
      if (data.transactions && data.transactions.length > 0) {
        var recS = ss.getSheetByName("Receive") || ss.insertSheet("Receive");
        var payS = ss.getSheetByName("Payment") || ss.insertSheet("Payment");
        if (recS.getLastRow() === 0) recS.appendRow(["ID", "Date", "Category", "Amount", "Description"]);
        if (payS.getLastRow() === 0) payS.appendRow(["ID", "Date", "Category", "Sub Category", "Amount", "Description"]);
        data.transactions.forEach(function(t) {
          if (t.type === "receive") {
            recS.appendRow([t.id, t.txDate, t.category, Number(t.amount) || 0, t.description || ""]);
          } else {
            payS.appendRow([t.id, t.txDate, t.category, t.subCategory || "", Number(t.amount) || 0, t.description || ""]);
          }
          count++;
        });
      }
      return jsonResponse({ ok: true, action: "sync_all", rowsAdded: count });
    }
    return jsonResponse({ ok: true });
  } catch (err) {
    return jsonResponse({ ok: false, error: err.toString() });
  } finally {
    lock.releaseLock();
  }
}
function jsonResponse(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}`;function nS({open:l,onClose:o}){const[u,c]=b.useState(""),[d,A]=b.useState("idle"),[f,h]=b.useState(""),[x,L]=b.useState(!1),[y,p]=b.useState(!1);if(b.useEffect(()=>{if(l){const j=WR();c(j),A("idle"),h(""),j||Vi("google_sheet_url").then(z=>{z&&z.startsWith("http")&&(c(z),rm(z))}).catch(()=>{})}},[l]),b.useEffect(()=>{const j=z=>{z!=null&&z.detail&&typeof z.detail=="string"&&c(z.detail)};return window.addEventListener("google-sheet-url-changed",j),()=>window.removeEventListener("google-sheet-url-changed",j)},[]),!l)return null;const w=async()=>{const j=u.trim();if(!j||!j.startsWith("http")){A("error"),h("Valid Web App URL required");return}rm(j);try{await Tm("google_sheet_url",j)}catch{}A("success"),h("URL সফলভাবে ডাটাবেজ ও ক্লাউডে সংরক্ষিত হয়েছে! অন্য যেকোনো ডিভাইসেও এটি স্বয়ংক্রিয়ভাবে পাওয়া যাবে।")},P=async()=>{if(!u||!u.startsWith("http")){A("error"),h("Valid Web App URL required");return}A("testing"),h("Testing connection...");try{await fetch(u,{method:"POST",mode:"no-cors",headers:{"Content-Type":"text/plain"},body:JSON.stringify({action:"test"})}),rm(u),A("success"),h("Request sent to Google Apps Script successfully!")}catch(j){A("error"),h("Failed: "+j.message)}},G=async()=>{if(!u||!u.startsWith("http")){A("error"),h("Valid Web App URL required");return}A("testing"),h("Syncing all data to Google Sheet...");try{const j=sn(),z=Nn();await fetch(u,{method:"POST",mode:"no-cors",headers:{"Content-Type":"text/plain"},body:JSON.stringify({action:"sync_all",data:{transactions:j,staffReports:z}})}),A("success"),h(`Synced ${j.length} transactions & ${z.length} staff reports to Google Sheet!`)}catch(j){A("error"),h("Sync failed: "+j.message)}},K=()=>{navigator.clipboard.writeText(hb),p(!0),setTimeout(()=>p(!1),2e3)};return n.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-3 sm:p-5 overflow-y-auto",children:n.jsxs("div",{className:"flex max-h-[94vh] w-full max-w-2xl flex-col rounded-2xl bg-white shadow-2xl overflow-hidden border border-slate-300",children:[n.jsxs("div",{className:"flex items-center justify-between border-b bg-emerald-800 px-5 py-3 text-white",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"📊"}),n.jsxs("div",{children:[n.jsx("h3",{className:"font-bold text-base sm:text-lg leading-tight",children:"Google Sheet / Drive Sync"}),n.jsx("p",{className:"text-xs text-emerald-200",children:"Connect your Google Spreadsheet"})]})]}),n.jsx("button",{onClick:o,className:"text-2xl text-emerald-200 hover:text-white",children:"×"})]}),n.jsxs("div",{className:"flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 text-xs sm:text-sm",children:[f&&n.jsx("div",{className:`rounded-lg p-3 font-semibold text-xs ${d==="success"?"bg-emerald-100 text-emerald-900 border border-emerald-300":d==="error"?"bg-rose-100 text-rose-900 border border-rose-300":"bg-blue-100 text-blue-900 border border-blue-300"}`,children:f}),n.jsxs("div",{className:"space-y-1.5",children:[n.jsx("label",{className:"block font-bold text-slate-800 text-sm",children:"Google Apps Script Web App URL:"}),n.jsxs("div",{className:"flex gap-2",children:[n.jsx("input",{type:"url",value:u,onChange:j=>c(j.target.value),placeholder:"https://script.google.com/macros/s/.../exec",className:"flex-1 rounded-lg border border-slate-300 px-3 py-2 text-xs sm:text-sm font-mono focus:border-emerald-600 focus:outline-none"}),n.jsx("button",{type:"button",onClick:w,className:"rounded-lg bg-emerald-600 hover:bg-emerald-700 px-4 py-2 font-bold text-white text-xs transition whitespace-nowrap shadow-xs",children:"Save URL"})]})]}),n.jsxs("div",{className:"flex flex-wrap gap-2.5 pt-1",children:[n.jsx("button",{type:"button",onClick:P,className:"rounded-lg bg-blue-600 hover:bg-blue-700 px-4 py-2 text-xs font-bold text-white shadow-xs transition",children:"Test Connection"}),n.jsx("button",{type:"button",onClick:G,className:"rounded-lg bg-indigo-600 hover:bg-indigo-700 px-4 py-2 text-xs font-bold text-white shadow-xs transition",children:"Sync All Data"})]}),n.jsxs("div",{className:"rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-2.5",children:[n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsx("h4",{className:"font-bold text-slate-900 text-sm",children:"Apps Script Code Setup"}),n.jsx("button",{type:"button",onClick:()=>L(!x),className:"text-xs text-blue-600 hover:underline font-bold",children:x?"Hide Code":"Show Script Code"})]}),n.jsxs("ol",{className:"list-decimal list-inside space-y-1 text-xs text-slate-700",children:[n.jsx("li",{children:"Open Google Sheet > Extensions > Apps Script"}),n.jsx("li",{children:"Paste the code, save with Ctrl+S"}),n.jsxs("li",{children:["Deploy as Web App, set access to ",n.jsx("b",{children:"Anyone"})]}),n.jsx("li",{children:"Copy Web App URL and paste above"})]}),x&&n.jsxs("div",{className:"mt-2 space-y-2",children:[n.jsxs("div",{className:"flex justify-between items-center",children:[n.jsx("span",{className:"text-[11px] font-bold text-slate-600 font-mono",children:"Apps Script Code:"}),n.jsx("button",{type:"button",onClick:K,className:"rounded bg-slate-800 hover:bg-slate-700 text-white px-2.5 py-1 text-xs font-bold transition shadow-xs",children:y?"Copied!":"Copy Code"})]}),n.jsx("pre",{className:"max-h-48 overflow-auto rounded bg-slate-900 p-3 text-[10.5px] font-mono text-emerald-300",children:hb})]})]})]}),n.jsxs("div",{className:"flex items-center justify-between border-t bg-slate-100 px-5 py-3",children:[n.jsx("span",{className:"text-xs text-slate-500 font-medium",children:"Google Sheets Database Integration"}),n.jsx("button",{type:"button",onClick:o,className:"rounded-lg bg-slate-800 hover:bg-slate-900 px-6 py-1.5 text-xs font-bold text-white transition",children:"Close"})]})]})})}function aS({open:l,onClose:o}){const[u,c]=b.useState(rr()),[d,A]=b.useState(""),[f,h]=b.useState(!1),[x,L]=b.useState(null),[y,p]=b.useState(!1);if(b.useEffect(()=>{if(!l)return;c(rr()),A("");const ce=M=>{M.detail&&c(M.detail)};return window.addEventListener("neon-sync-status-changed",ce),()=>window.removeEventListener("neon-sync-status-changed",ce)},[l]),!l)return null;const w=async()=>{h(!0),A("Neon ক্লাউড ডাটাবেজের সাথে সিঙ্ক হচ্ছে...");try{const ce=await lr();A(ce.message),c(rr())}catch(ce){A(`সিঙ্ক ত্রুটি: ${ce.message||"Failed"}`)}finally{h(!1)}},P=sn(),G=Nn(),K=pc(),j=fl(),z=async()=>{p(!0);try{L(await xR())}catch(ce){A(`ক্লাউড ঘর পড়া যায়নি: ${(ce==null?void 0:ce.message)||"ত্রুটি"}`)}finally{p(!1)}};return n.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-3 sm:p-5 overflow-y-auto animate-in fade-in",children:n.jsxs("div",{className:"flex max-h-[94vh] w-full max-w-lg flex-col rounded-3xl bg-white shadow-2xl overflow-hidden border border-slate-200",children:[n.jsxs("div",{className:"flex items-center justify-between border-b bg-linear-to-r from-teal-900 to-slate-900 px-5 py-3.5 text-white",children:[n.jsxs("div",{className:"flex items-center gap-2.5",children:[n.jsx("span",{className:"text-2xl",children:"🐘"}),n.jsxs("div",{children:[n.jsxs("h3",{className:"font-bold text-sm sm:text-base leading-tight flex items-center gap-2",children:[n.jsx("span",{children:"Neon PostgreSQL Database"}),n.jsx("span",{className:"h-2 w-2 rounded-full bg-emerald-400 animate-pulse"})]}),n.jsx("p",{className:"text-[11px] text-teal-300",children:"Serverless Cloud Database (Permanent Storage)"})]})]}),n.jsx("button",{onClick:o,className:"text-2xl text-slate-400 hover:text-white cursor-pointer px-1",children:"×"})]}),n.jsxs("div",{className:"p-5 space-y-4 text-xs sm:text-sm",children:[n.jsx("div",{className:"rounded-2xl border border-emerald-200 bg-emerald-50/70 p-4",children:n.jsxs("div",{className:"flex items-start gap-3",children:[n.jsx("div",{className:"h-8 w-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center text-base shrink-0 font-black",children:"✓"}),n.jsxs("div",{className:"space-y-1",children:[n.jsx("div",{className:"font-extrabold text-emerald-950 text-sm flex items-center gap-2",children:n.jsx("span",{children:"Neon Database সফলভাবে কানেক্টেড!"})}),n.jsx("p",{className:"text-xs text-emerald-800 leading-relaxed font-medium",children:"এখন থেকে আপনি যা ডাটা এন্ট্রি দেবেন তা স্বয়ংক্রিয়ভাবে Neon PostgreSQL ক্লাউড ডাটাবেজে স্থায়ীভাবে সংরক্ষিত থাকবে। পরবর্তী কোড মোডিফাই বা রি-ডিপ্লয়ে ডাটা কখনোই মুছে যাবে না।"})]})]})}),n.jsxs("div",{className:"rounded-2xl border border-indigo-200 bg-indigo-50/70 p-3.5",children:[n.jsxs("div",{className:"flex items-start justify-between gap-2",children:[n.jsxs("div",{children:[n.jsx("div",{className:"text-[10px] font-bold uppercase tracking-wide text-indigo-500",children:"এই অফিসের ক্লাউড ঘর"}),n.jsxs("div",{className:"text-sm font-black text-indigo-950",children:["🏢 ",K]}),n.jsxs("div",{className:"font-mono text-[11px] font-bold text-indigo-700",children:["স্কিমা: ",j]}),n.jsx("p",{className:"mt-1 text-[11px] font-medium leading-relaxed text-indigo-800",children:"প্রতিটি অফিসের লেনদেন, চেক এন্ট্রি ও মেম্বার ডাটাবেজ ক্লাউডে নিজের আলাদা ঘরে সংরক্ষিত হয় — অন্য অফিসের ডেটার সাথে মিশবে না।"})]}),n.jsx("button",{type:"button",onClick:z,disabled:y,className:"shrink-0 rounded-xl border border-indigo-300 bg-white px-2.5 py-1.5 text-[11px] font-black text-indigo-700 transition hover:bg-indigo-100 disabled:opacity-50 cursor-pointer",children:y?"পড়ছে…":"☁️ ঘর দেখুন"})]}),x&&n.jsx("div",{className:"mt-2.5 grid grid-cols-2 gap-1.5 text-[11px] sm:grid-cols-4",children:[["transactions","লেনদেন"],["check_entries","চেক এন্ট্রি"],["members","মেম্বার"],["staff_reports","স্টাফ রিপোর্ট"],["day_opens","ডে ওপেন"],["day_closures","ডে ক্লোজ"],["categories","ক্যাটাগরি"]].map(([ce,M])=>n.jsxs("div",{className:"rounded-lg border border-indigo-200 bg-white px-2 py-1.5",children:[n.jsx("div",{className:"text-[9px] font-bold uppercase text-slate-500",children:M}),n.jsx("div",{className:"text-sm font-black text-indigo-800",children:x.rows[ce]===void 0?"—":x.rows[ce]<0?"⚠️":x.rows[ce]})]},ce))})]}),n.jsxs("div",{className:"grid grid-cols-2 gap-2 text-xs",children:[n.jsxs("div",{className:"rounded-xl border border-slate-200 bg-slate-50 p-2.5",children:[n.jsx("span",{className:"text-[10px] font-bold uppercase text-slate-500 block",children:"Database Engine"}),n.jsx("span",{className:"font-black text-slate-800",children:"PostgreSQL (Neon)"})]}),n.jsxs("div",{className:"rounded-xl border border-slate-200 bg-slate-50 p-2.5",children:[n.jsx("span",{className:"text-[10px] font-bold uppercase text-slate-500 block",children:"Region & Host"}),n.jsx("span",{className:"font-bold text-slate-800 truncate block",children:"ap-southeast-1 (Singapore)"})]}),n.jsxs("div",{className:"rounded-xl border border-slate-200 bg-slate-50 p-2.5",children:[n.jsx("span",{className:"text-[10px] font-bold uppercase text-slate-500 block",children:"Transactions Synced"}),n.jsxs("span",{className:"font-black text-blue-600 text-sm",children:[P.length," টি"]})]}),n.jsxs("div",{className:"rounded-xl border border-slate-200 bg-slate-50 p-2.5",children:[n.jsx("span",{className:"text-[10px] font-bold uppercase text-slate-500 block",children:"Staff Reports"}),n.jsxs("span",{className:"font-black text-indigo-600 text-sm",children:[G.length," টি"]})]})]}),n.jsxs("div",{className:"flex items-center justify-between rounded-xl bg-slate-100 px-3 py-2 text-xs text-slate-600",children:[n.jsx("span",{children:"সর্বশেষ ক্লাউড সিঙ্ক:"}),n.jsx("span",{className:"font-mono font-bold text-slate-800",children:u.lastSyncTime||"এইমাত্র"})]}),d&&n.jsx("div",{className:`rounded-xl p-3 text-xs font-bold leading-relaxed ${d.includes("ত্রুটি")||d.includes("ব্যর্থ")?"bg-rose-50 text-rose-800 border border-rose-200":"bg-blue-50 text-blue-900 border border-blue-200"}`,children:d}),n.jsxs("button",{type:"button",disabled:f||u.isSyncing,onClick:w,className:`w-full rounded-2xl bg-teal-600 hover:bg-teal-700 active:bg-teal-800 py-3 text-xs sm:text-sm font-black text-white shadow-md transition cursor-pointer flex items-center justify-center gap-2 ${f||u.isSyncing?"opacity-75 cursor-not-allowed":""}`,children:[n.jsx("span",{className:f||u.isSyncing?"animate-spin":"",children:"🔄"}),n.jsx("span",{children:f||u.isSyncing?"ক্লাউডে সিঙ্ক হচ্ছে...":"এখনই Neon ডাটাবেজে সিঙ্ক করুন (Sync Now)"})]})]}),n.jsxs("div",{className:"flex items-center justify-between border-t bg-slate-50 px-5 py-3 text-xs",children:[n.jsx("span",{className:"text-slate-400 font-medium",children:"Daily Cash Gobra • BKF"}),n.jsx("button",{type:"button",onClick:o,className:"rounded-xl bg-slate-800 hover:bg-slate-900 px-5 py-1.5 font-bold text-white transition cursor-pointer",children:"বন্ধ করুন"})]})]})})}function sS({open:l,onClose:o,deferredPrompt:u}){const[c,d]=b.useState(!1),[A,f]=b.useState(!1);if(b.useEffect(()=>{const y=()=>{f(!0)};return window.addEventListener("appinstalled",y),()=>window.removeEventListener("appinstalled",y)},[]),!l)return null;const h=window.location.origin,x=async()=>{if(u){u.prompt();const{outcome:y}=await u.userChoice;y==="accepted"&&f(!0)}},L=()=>{navigator.clipboard.writeText(h),d(!0),setTimeout(()=>d(!1),2500)};return n.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs",children:n.jsxs("div",{className:"relative w-full max-w-lg rounded-3xl bg-white p-5 sm:p-6 text-slate-800 shadow-2xl animate-in zoom-in-95 duration-150 max-h-[90vh] overflow-y-auto",children:[n.jsxs("div",{className:"flex items-center justify-between border-b border-slate-100 pb-3 mb-4",children:[n.jsxs("div",{className:"flex items-center gap-2.5",children:[n.jsx("div",{className:"flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-100 text-xl text-indigo-700 font-black",children:"📱"}),n.jsxs("div",{children:[n.jsx("h2",{className:"text-base sm:text-lg font-black text-slate-900 leading-tight",children:"অ্যাপ ইনস্টল ও APK ডাউনলোড"}),n.jsx("p",{className:"text-xs text-slate-500 font-medium",children:"Offline ও Online-এ নিরবচ্ছিন্ন ব্যবহারের জন্য"})]})]}),n.jsx("button",{type:"button",onClick:o,className:"flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 text-lg font-bold cursor-pointer transition",children:"✕"})]}),u&&!A&&n.jsxs("div",{className:"mb-4 rounded-2xl border-2 border-indigo-500/40 bg-indigo-50/70 p-4 text-center",children:[n.jsx("h3",{className:"text-sm font-black text-indigo-950 mb-1",children:"🎉 ১-ক্লিকে ফোনে সরাসরি ইনস্টল করুন"}),n.jsx("p",{className:"text-xs text-indigo-700 mb-3",children:"এটি সরাসরি আপনার ফোনে নেটিভ অ্যাপ আইকন হিসেবে যুক্ত হবে এবং ইন্টারনেট ছাড়াও চলবে।"}),n.jsxs("button",{type:"button",onClick:x,className:"w-full rounded-xl bg-indigo-600 hover:bg-indigo-700 active:scale-98 text-white font-bold py-2.5 text-sm shadow-md transition cursor-pointer flex items-center justify-center gap-2",children:[n.jsx("span",{children:"📥"}),n.jsx("span",{children:"এখনই অ্যাপটি ইনস্টল করুন"})]})]}),A&&n.jsx("div",{className:"mb-4 rounded-2xl bg-emerald-50 border border-emerald-300 p-3 text-center text-xs font-bold text-emerald-800",children:"✅ অ্যাপটি আপনার ডিভাইসে সফলভাবে ইনস্টল হয়েছে! আপনি হোম স্ক্রিন থেকে যেকোনো সময় ওপেন করতে পারেন।"}),n.jsxs("div",{className:"space-y-3.5 text-xs sm:text-sm",children:[n.jsxs("div",{className:"rounded-2xl border border-slate-200 bg-slate-50 p-3.5",children:[n.jsxs("div",{className:"flex items-center gap-2 font-black text-slate-900 mb-1.5",children:[n.jsx("span",{className:"flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-white text-[11px]",children:"১"}),n.jsx("span",{children:"ফোনে সরাসরি অ্যাপ হিসেবে ইনস্টল (সবচেয়ে সহজ):"})]}),n.jsxs("ul",{className:"list-disc list-inside space-y-1 text-slate-600 pl-1 leading-relaxed",children:[n.jsxs("li",{children:["আপনার অ্যান্ড্রয়েড ফোনের ",n.jsx("b",{children:"Chrome ব্রাউজারে"})," এই সাইটটি ওপেন করুন।"]}),n.jsxs("li",{children:["উপরের ডানপাশে ",n.jsx("b",{children:"তিনটি ডট (⋮)"})," মেনুতে ক্লিক করুন।"]}),n.jsxs("li",{children:[n.jsx("b",{children:'"Install app"'})," অথবা ",n.jsx("b",{children:'"Add to Home screen" (হোম স্ক্রিনে যোগ করুন)'})," অপশনে চাপুন।"]}),n.jsx("li",{children:"কয়েক সেকেন্ডের মধ্যে ফোনের অ্যাপ গ্যালারিতে এটি আসল অ্যাপের মতো ইনস্টল হয়ে যাবে।"})]})]}),n.jsxs("div",{className:"rounded-2xl border border-slate-200 bg-emerald-50/50 p-3.5",children:[n.jsxs("div",{className:"flex items-center gap-2 font-black text-emerald-950 mb-1.5",children:[n.jsx("span",{className:"flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-white text-[11px]",children:"⚡"}),n.jsx("span",{children:"Offline ও Online অটো-সিঙ্ক কীভাবে কাজ করে?"})]}),n.jsxs("p",{className:"text-slate-700 leading-relaxed text-xs",children:["১. ",n.jsx("b",{children:"অফলাইন মোড:"})," যখন ইন্টারনেট থাকবে না বা ডাটা বন্ধ থাকবে, তখনও অ্যাপটি আগের মতোই দ্রুত চলবে। আপনি জমা, খরচ বা রিপোর্ট এন্ট্রি দিলে তা আপনার ফোনের মেমরিতে নিরাপদে জমা থাকবে।",n.jsx("br",{}),"২. ",n.jsx("b",{children:"অটো-সিঙ্ক:"})," যখনই ফোনে ইন্টারনেট কানেকশন পাওয়া যাবে, অ্যাপটি স্বয়ংক্রিয়ভাবে সব জমা ডাটা ",n.jsx("b",{children:"Neon ক্লাউড ডাটাবেজে"})," আপলোড করে সিঙ্ক করে নেবে।"]})]}),n.jsxs("div",{className:"rounded-2xl border border-slate-200 bg-slate-50 p-3.5",children:[n.jsxs("div",{className:"flex items-center gap-2 font-black text-slate-900 mb-1.5",children:[n.jsx("span",{className:"flex h-5 w-5 items-center justify-center rounded-full bg-amber-600 text-white text-[11px]",children:"২"}),n.jsx("span",{children:"সরাসরি .apk ফাইল তৈরি (PWABuilder দিয়ে):"})]}),n.jsxs("p",{className:"text-slate-600 leading-relaxed text-xs mb-2",children:["আপনি চাইলে এই অ্যাপের জন্য ১ মিনিটে প্লে-স্টোর উপযোগী সাইনড ",n.jsx("b",{children:".apk ফাইল"})," বানিয়ে নিতে পারেন:"]}),n.jsxs("div",{className:"flex flex-col gap-2",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("input",{type:"text",readOnly:!0,value:h,className:"w-full rounded-lg border border-slate-300 bg-white px-2.5 py-1 text-xs font-mono font-bold text-slate-700"}),n.jsx("button",{type:"button",onClick:L,className:"shrink-0 rounded-lg bg-slate-200 hover:bg-slate-300 px-3 py-1 text-xs font-bold text-slate-800 transition cursor-pointer",children:c?"কপি হয়েছে ✓":"লিংক কপি"})]}),n.jsxs("a",{href:`https://www.pwabuilder.com/?url=${encodeURIComponent(h)}`,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center justify-center gap-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-3 py-2 text-xs transition shadow-xs",children:[n.jsx("span",{children:"🚀 PWABuilder-এ APK তৈরি করুন"}),n.jsx("span",{children:"↗"})]})]})]})]}),n.jsx("div",{className:"mt-5 border-t border-slate-100 pt-3 flex justify-end",children:n.jsx("button",{type:"button",onClick:o,className:"rounded-xl bg-slate-800 hover:bg-slate-900 text-white font-bold px-5 py-2 text-xs transition cursor-pointer",children:"বুঝেছি, বন্ধ করুন"})})]})})}const Fi=[{id:"receive",label:"Receive",icon:"📥"},{id:"payment",label:"Payment",icon:"📤"},{id:"report",label:"Report",icon:"📊"},{id:"cashbook",label:"Cashbook",icon:"📖"},{id:"check",label:"Check",icon:"🧾"},{id:"entertainment",label:"Entertainment",icon:"🎉"}];function lS({currentTab:l,onTabChange:o,selectedDate:u,onDateChange:c,onOpenTracker:d}){const[A,f]=b.useState(!1),[h,x]=b.useState(!1),[L,y]=b.useState(!1),[p,w]=b.useState(!1),[P,G]=b.useState(null),[K,j]=b.useState(rr()),z=xa();b.useEffect(()=>{const J=ue=>{ue.preventDefault(),G(ue)};return window.addEventListener("beforeinstallprompt",J),()=>window.removeEventListener("beforeinstallprompt",J)},[]),b.useEffect(()=>{const J=ue=>{ue.detail&&j(ue.detail)};return window.addEventListener("neon-sync-status-changed",J),()=>window.removeEventListener("neon-sync-status-changed",J)},[]);const ce=J=>{o(J),y(!1)},M=Fi.find(J=>J.id===l)||Fi[0],k=!["check","entertainment","cashbook"].includes(l)?Oe(u)?n.jsx("span",{className:"rounded-full border border-rose-400/40 bg-rose-500/15 px-2 py-0.5 text-[10px] font-bold text-rose-300 whitespace-nowrap",title:"Day Closed",children:"🔒 Closed"}):_t(u)?n.jsx("span",{className:"rounded-full border border-emerald-400/40 bg-emerald-500/15 px-2 py-0.5 text-[10px] font-bold text-emerald-300 whitespace-nowrap",title:"Day Open",children:"☀️ Open"}):n.jsx("span",{className:"rounded-full border border-amber-400/40 bg-amber-500/15 px-2 py-0.5 text-[10px] font-bold text-amber-300 whitespace-nowrap",title:"Working day not opened yet",children:"⏳ Not Opened"}):null;return n.jsxs(n.Fragment,{children:[n.jsxs("aside",{className:"fixed inset-y-0 left-0 z-40 hidden w-60 flex-col text-white lg:flex print:hidden",children:[n.jsx("div",{className:"absolute inset-0 border-r border-white/10 bg-linear-to-b from-[#131f42]/97 to-[#0a1024] backdrop-blur-xl shadow-[10px_0_40px_-12px_rgba(4,10,30,0.7)]"}),n.jsx("div",{className:"pointer-events-none absolute inset-y-0 right-0 w-px bg-linear-to-b from-transparent via-amber-300/60 to-transparent"}),n.jsxs("div",{className:"relative flex h-full flex-col gap-1 px-3 py-4",children:[n.jsxs("div",{className:"mb-2 flex items-center gap-2.5 px-1",children:[n.jsx("span",{className:"flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-amber-300 to-orange-500 text-lg shadow-lg shadow-amber-500/40 ring-1 ring-white/30",children:"💰"}),n.jsxs("div",{className:"min-w-0",children:[n.jsx("p",{className:"bg-linear-to-b from-amber-200 via-amber-300 to-amber-500 bg-clip-text text-[15px] font-black tracking-tight text-transparent",children:"Cash Gobra"}),n.jsx("p",{className:"text-[9px] font-bold uppercase tracking-[0.18em] text-slate-400",children:"Daily Cashbook Pro"})]})]}),n.jsxs("div",{className:"mb-2 rounded-2xl border border-white/10 bg-white/5 p-2.5 shadow-inner",children:[n.jsxs("div",{className:"mb-1.5 flex items-center justify-between",children:[n.jsx("span",{className:"text-[9px] font-black uppercase tracking-[0.14em] text-slate-400",children:"কাজের তারিখ"}),k]}),n.jsx("div",{className:"text-slate-900",children:n.jsx(xn,{value:u,onChange:J=>c(J||z),className:"w-full rounded-xl border border-white/60 bg-white px-2.5 py-1.5 text-xs font-bold shadow-md shadow-black/30",onOpenTracker:d})}),u!==z&&n.jsx("button",{type:"button",onClick:()=>c(z),className:"mt-1.5 w-full rounded-full bg-linear-to-r from-sky-500 to-blue-600 px-2 py-1 text-[10px] font-black text-white shadow-md shadow-blue-500/40 transition-all duration-200 cursor-pointer hover:scale-[1.02] active:scale-95",title:"Back to today's date",children:"📆 আজকের তারিখে ফিরুন"})]}),n.jsxs("div",{className:"mt-1 flex min-h-0 flex-1 flex-col gap-1 overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",children:[n.jsx("p",{className:"px-1 text-[9px] font-black uppercase tracking-[0.18em] text-slate-500",children:"Pages"}),n.jsx("nav",{className:"flex flex-col gap-1",children:Fi.map(J=>{const ue=l===J.id;return n.jsxs("button",{type:"button",onClick:()=>o(J.id),className:`group relative flex w-full items-center gap-2.5 rounded-xl px-2.5 py-2 text-left text-[13px] transition-all duration-200 cursor-pointer ${ue?"bg-linear-to-r from-indigo-500 via-blue-500 to-sky-500 font-black text-white shadow-lg shadow-indigo-500/40 ring-1 ring-white/30":"font-bold text-slate-300 hover:bg-white/10 hover:text-white hover:translate-x-0.5"}`,children:[n.jsx("span",{className:`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-base ${ue?"bg-white/20 shadow-inner":"bg-white/5 group-hover:bg-white/10"}`,children:J.icon}),n.jsx("span",{className:"truncate",children:J.label}),ue&&n.jsx("span",{className:"ml-auto h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300 shadow-[0_0_8px_rgba(110,231,183,1)] animate-pulse"})]},J.id)})}),n.jsx("p",{className:"mt-2 px-1 text-[9px] font-black uppercase tracking-[0.18em] text-slate-500",children:"Tools & Cloud"}),n.jsxs("div",{className:"flex flex-col gap-1",children:[n.jsxs("button",{type:"button",onClick:()=>x(!0),className:"flex w-full items-center gap-2.5 rounded-xl border border-teal-300/20 bg-teal-400/10 px-2.5 py-2 text-left text-xs font-bold text-teal-200 transition-all duration-200 cursor-pointer hover:bg-teal-400/20 hover:border-teal-300/40",title:"Neon PostgreSQL Cloud Database",children:[n.jsx("span",{className:"flex h-7 w-7 items-center justify-center rounded-lg bg-white/10 text-sm",children:"🐘"}),n.jsx("span",{children:"Neon DB"}),n.jsx("span",{className:`ml-auto h-1.5 w-1.5 rounded-full ${K.isSyncing?"bg-amber-300 animate-ping":K.connected?"bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,1)]":"bg-rose-400 shadow-[0_0_8px_rgba(251,113,133,0.9)]"}`})]}),n.jsxs("button",{type:"button",onClick:()=>f(!0),className:"flex w-full items-center gap-2.5 rounded-xl border border-emerald-300/20 bg-emerald-400/10 px-2.5 py-2 text-left text-xs font-bold text-emerald-200 transition-all duration-200 cursor-pointer hover:bg-emerald-400/20 hover:border-emerald-300/40",title:"Connect to Google Sheet",children:[n.jsx("span",{className:"flex h-7 w-7 items-center justify-center rounded-lg bg-white/10 text-sm",children:"📊"}),n.jsx("span",{children:"Google Sheet"})]}),n.jsxs("button",{type:"button",onClick:d,className:"flex w-full items-center gap-2.5 rounded-xl border border-amber-300/20 bg-amber-400/10 px-2.5 py-2 text-left text-xs font-bold text-amber-300 transition-all duration-200 cursor-pointer hover:bg-amber-400/20 hover:border-amber-300/40",title:"Open audit tracker for all dates",children:[n.jsx("span",{className:"flex h-7 w-7 items-center justify-center rounded-lg bg-white/10 text-sm",children:"📅"}),n.jsx("span",{children:"Audit Tracker"})]}),n.jsxs("button",{type:"button",onClick:()=>window.dispatchEvent(new CustomEvent("open-day-admin")),className:"flex w-full items-center gap-2.5 rounded-xl border border-violet-300/25 bg-violet-500/15 px-2.5 py-2 text-left text-xs font-bold text-violet-200 transition-all duration-200 cursor-pointer hover:bg-violet-500/25 hover:border-violet-300/50",title:"⚙️ Day Admin — সব কর্মদিবস Close/Re-open/এডিট এক জায়গায়",children:[n.jsx("span",{className:"flex h-7 w-7 items-center justify-center rounded-lg bg-white/10 text-sm",children:"⚙️"}),n.jsx("span",{children:"Day Admin"})]}),n.jsxs("button",{type:"button",onClick:()=>w(!0),className:"flex w-full items-center gap-2.5 rounded-xl border border-indigo-300/25 bg-indigo-400/10 px-2.5 py-2 text-left text-xs font-bold text-indigo-200 transition-all duration-200 cursor-pointer hover:bg-indigo-400/20 hover:border-indigo-300/40",title:"Install App & Download APK",children:[n.jsx("span",{className:"flex h-7 w-7 items-center justify-center rounded-lg bg-white/10 text-sm",children:"📱"}),n.jsx("span",{children:"Install App"})]})]})]}),n.jsx("div",{className:"mt-1 pt-2 text-center text-[9px] font-bold uppercase tracking-[0.2em] text-slate-600",children:"Gobra Branch · BKF"})]})]}),n.jsxs("button",{type:"button",onClick:()=>y(!0),"aria-label":`মেনু খুলুন — বর্তমান পেজ: ${M.label}`,title:`মেনু — ${M.label}`,className:"fixed bottom-4 right-4 z-40 flex h-14 w-14 flex-col items-center justify-center gap-1 rounded-2xl border border-amber-300/50 bg-linear-to-b from-[#18244f]/95 to-[#0a1024]/95 shadow-[0_8px_28px_-6px_rgba(4,10,30,0.8),0_0_14px_rgba(251,191,36,0.25)] backdrop-blur-xl transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 lg:hidden print:hidden",children:[n.jsx("span",{className:"block h-0.5 w-5 bg-amber-400 rounded-full shadow-[0_0_4px_rgba(251,191,36,0.9)]"}),n.jsx("span",{className:"block h-0.5 w-5 bg-amber-400 rounded-full shadow-[0_0_4px_rgba(251,191,36,0.9)]"}),n.jsx("span",{className:"block h-0.5 w-5 bg-amber-400 rounded-full shadow-[0_0_4px_rgba(251,191,36,0.9)]"})]}),L&&n.jsxs("div",{className:"fixed inset-0 z-50 flex flex-col justify-end lg:hidden",children:[n.jsx("div",{className:"fixed inset-0 bg-slate-950/75 backdrop-blur-xs transition-opacity",onClick:()=>y(!1)}),n.jsxs("div",{className:"relative z-10 w-full rounded-t-3xl border-t border-white/10 bg-linear-to-b from-[#151f47] to-[#0a1024] p-4 text-white shadow-2xl animate-in slide-in-from-bottom duration-200 max-h-[85vh] overflow-y-auto",children:[n.jsx("div",{className:"pointer-events-none absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-amber-300/70 to-transparent"}),n.jsxs("div",{className:"flex items-center justify-between border-b border-white/10 pb-3 mb-3",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"flex h-8 w-8 items-center justify-center rounded-xl bg-linear-to-br from-amber-300 to-orange-500 text-base shadow-md shadow-amber-500/40 ring-1 ring-white/30",children:"💰"}),n.jsxs("div",{children:[n.jsx("h3",{className:"text-sm font-black tracking-tight bg-linear-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent",children:"Cash Gobra — Menu"}),n.jsx("p",{className:"text-[10px] text-slate-400",children:"Select the page you want to open"})]})]}),n.jsx("button",{type:"button",onClick:()=>y(!1),className:"rounded-full p-1.5 text-slate-400 hover:text-white hover:bg-white/10 text-lg leading-none transition cursor-pointer",children:"✕"})]}),n.jsx("div",{className:"space-y-1.5 mb-4",children:Fi.map(J=>{const ue=l===J.id;return n.jsxs("button",{type:"button",onClick:()=>ce(J.id),className:`w-full flex items-center justify-between rounded-2xl p-3 text-left font-bold transition-all duration-200 cursor-pointer ${ue?"bg-linear-to-r from-indigo-500 via-blue-500 to-sky-500 text-white shadow-lg shadow-indigo-500/40 ring-1 ring-white/30":"border border-white/10 bg-white/5 text-slate-200 hover:-translate-y-px hover:bg-white/10"}`,children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("span",{className:`flex h-9 w-9 items-center justify-center rounded-xl text-lg ${ue?"bg-white/20 shadow-inner":"bg-white/10"}`,children:J.icon}),n.jsx("div",{children:n.jsx("span",{className:`text-sm block ${ue?"font-black":""}`,children:J.label})})]}),ue&&n.jsx("span",{className:"rounded-full bg-white/25 px-2.5 py-0.5 text-xs font-black backdrop-blur",children:"✓ Active"})]},J.id)})}),n.jsxs("div",{className:"border-t border-white/10 pt-3 space-y-2",children:[n.jsx("span",{className:"text-[10px] font-black uppercase tracking-wider text-slate-400 block px-1",children:"Tools & Cloud Database"}),n.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[n.jsxs("button",{type:"button",onClick:()=>{y(!1),d?d():window.dispatchEvent(new CustomEvent("open-date-tracker"))},className:"col-span-2 flex items-center justify-center gap-2 rounded-xl border border-amber-300/30 bg-amber-400/10 p-2.5 text-xs font-bold text-amber-200 transition-all duration-200 cursor-pointer hover:-translate-y-px hover:bg-amber-400/20",children:[n.jsx("span",{className:"text-base",children:"📅"}),n.jsx("span",{children:"Working-Day & Transaction Audit Tracker"})]}),n.jsxs("button",{type:"button",onClick:()=>{y(!1),x(!0)},className:"flex items-center justify-center gap-1.5 rounded-xl border border-teal-300/30 bg-teal-400/10 p-2.5 text-xs font-bold text-teal-200 transition-all duration-200 cursor-pointer hover:-translate-y-px hover:bg-teal-400/20",children:[n.jsx("span",{className:"text-base",children:"🐘"}),n.jsx("span",{children:"Neon Database"})]}),n.jsxs("button",{type:"button",onClick:()=>{y(!1),f(!0)},className:"flex items-center justify-center gap-1.5 rounded-xl border border-emerald-300/30 bg-emerald-400/10 p-2.5 text-xs font-bold text-emerald-200 transition-all duration-200 cursor-pointer hover:-translate-y-px hover:bg-emerald-400/20",children:[n.jsx("span",{className:"text-base",children:"📊"}),n.jsx("span",{children:"Google Sheet"})]}),n.jsxs("button",{type:"button",onClick:()=>{y(!1),window.dispatchEvent(new CustomEvent("open-day-admin"))},className:"col-span-2 flex items-center justify-center gap-2 rounded-xl border border-violet-300/30 bg-violet-500/15 p-2.5 text-xs font-bold text-violet-200 transition-all duration-200 cursor-pointer hover:-translate-y-px hover:bg-violet-500/25",children:[n.jsx("span",{className:"text-base",children:"⚙️"}),n.jsx("span",{children:"Day Admin — Close / Re-open / পুরনো দিন এডিট"})]}),n.jsxs("button",{type:"button",onClick:()=>{y(!1),w(!0)},className:"col-span-2 flex items-center justify-center gap-2 rounded-xl border border-indigo-300/30 bg-indigo-400/10 p-2.5 text-xs font-bold text-indigo-200 transition-all duration-200 cursor-pointer hover:-translate-y-px hover:bg-indigo-400/20",children:[n.jsx("span",{className:"text-base",children:"📱"}),n.jsx("span",{children:"Install App & Download APK"})]})]})]})]})]}),n.jsx(aS,{open:h,onClose:()=>x(!1)}),n.jsx(nS,{open:A,onClose:()=>f(!1)}),n.jsx(sS,{open:p,onClose:()=>w(!1),deferredPrompt:P})]})}function rS(){const[l,o]=b.useState(()=>navigator.onLine),[u,c]=b.useState(rr()),[d,A]=b.useState(!1);return b.useEffect(()=>{const f=()=>{o(!0),A(!0),lr().catch(()=>{});const L=setTimeout(()=>{A(!1)},5e3);return()=>clearTimeout(L)},h=()=>{o(!1),A(!1)},x=L=>{L.detail&&c(L.detail)};return window.addEventListener("online",f),window.addEventListener("offline",h),window.addEventListener("neon-sync-status-changed",x),()=>{window.removeEventListener("online",f),window.removeEventListener("offline",h),window.removeEventListener("neon-sync-status-changed",x)}},[]),l?d?n.jsxs("div",{className:"mb-2.5 rounded-2xl border-2 border-emerald-400 bg-emerald-500/10 px-3.5 py-2.5 text-xs sm:text-sm font-bold text-emerald-900 shadow-sm print:hidden flex items-center justify-between gap-2 animate-in fade-in duration-200",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-base",children:"✅"}),n.jsxs("div",{className:"leading-snug",children:[n.jsx("span",{className:"font-black",children:"ইন্টারনেট পুনঃসংযুক্ত:"})," ",n.jsx("span",{className:"font-medium text-emerald-800",children:"অফলাইনে এন্ট্রি করা ডাটা ক্লাউডে অটো-সিঙ্ক সম্পন্ন হয়েছে!"})]})]}),u.isSyncing&&n.jsx("span",{className:"shrink-0 animate-spin text-xs",children:"🔄"})]}):null:n.jsxs("div",{className:"mb-2.5 rounded-2xl border-2 border-amber-400 bg-amber-500/10 px-3.5 py-2.5 text-xs sm:text-sm font-bold text-amber-900 shadow-sm print:hidden flex items-center justify-between gap-2 animate-in fade-in duration-200",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"flex h-3 w-3 rounded-full bg-amber-500 animate-ping shrink-0"}),n.jsxs("div",{className:"leading-snug",children:[n.jsx("span",{className:"font-black",children:"⚡ অফলাইন মোড সক্রিয়:"})," ",n.jsx("span",{className:"font-medium text-amber-800",children:"ইন্টারনেট সংযোগ নেই। আপনি নিশ্চিন্তে কাজ চালিয়ে যেতে পারেন, সকল ডাটা ডিভাইসে জমা থাকছে।"})]})]}),u.pendingCount>0&&n.jsxs("span",{className:"shrink-0 rounded-lg bg-amber-600 px-2 py-0.5 text-[11px] font-black text-white",children:[u.pendingCount,"টি পেন্ডিং"]})]})}function oS({selectedDate:l,onSelectDate:o,onOpenTracker:u}){const[c,d]=b.useState([]),[A,f]=b.useState(!1),h=()=>{try{const y=Xm().filter(p=>p.date<l&&!p.isClosed&&(p.txCount>0||p.srCount>0));d(y)}catch{d([])}};if(b.useEffect(()=>{f(!1),h()},[l]),b.useEffect(()=>{const L=()=>{h()};return window.addEventListener("tx-changed",L),window.addEventListener("storage",L),()=>{window.removeEventListener("tx-changed",L),window.removeEventListener("storage",L)}},[l]),A||c.length===0)return null;const x=c[0];return n.jsx("div",{className:"mb-3 rounded-2xl border-2 border-amber-400 bg-linear-to-r from-amber-50 via-orange-50 to-amber-100/70 p-3 sm:p-4 text-amber-950 shadow-md animate-in fade-in slide-in-from-top duration-200",children:n.jsxs("div",{className:"flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3",children:[n.jsxs("div",{className:"flex items-start gap-2.5",children:[n.jsx("div",{className:"flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-500 text-white shadow-xs text-lg font-black animate-pulse",children:"⚠️"}),n.jsxs("div",{children:[n.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[n.jsx("span",{className:"font-black text-amber-950 text-xs sm:text-sm",children:"অসমাপ্ত দিনের লেনদেন সতর্কবার্তা!"}),n.jsxs("span",{className:"rounded-full bg-amber-500/20 px-2 py-0.5 text-[10px] font-bold text-amber-900 border border-amber-400",children:[c.length," টি কর্মদিবস অমিল"]})]}),n.jsxs("p",{className:"mt-1 text-[11px] sm:text-xs text-amber-900 leading-relaxed font-medium",children:["আপনার বর্তমান তারিখ"," ",n.jsx("strong",{className:"font-mono text-blue-800",children:Ze(l)||l}),"-এর পূর্বে"," ",n.jsxs("strong",{className:"font-mono text-rose-700 underline",children:[x.date," (",x.dayName,")"]})," ","তারিখে লেনদেন রয়েছে কিন্তু ",n.jsx("strong",{children:"দিন সমাপ্ত (Day Close)"})," করা হয়নি। এটি কোনো ভুল এন্ট্রি হলে মুছে ফেলুন, অথবা কাজ হয়ে থাকলে দিন সমাপ্ত করুন।"]})]})]}),n.jsxs("div",{className:"flex items-center gap-2 self-end sm:self-center shrink-0",children:[n.jsxs("button",{type:"button",onClick:()=>o(x.date),className:"rounded-xl bg-amber-600 hover:bg-amber-700 active:bg-amber-800 px-3.5 py-1.5 text-xs font-black text-white shadow-xs transition flex items-center gap-1.5 cursor-pointer",children:[n.jsx("span",{children:"📅"}),n.jsxs("span",{children:[x.date," তারিখে যান"]})]}),n.jsx("button",{type:"button",onClick:u,className:"rounded-xl border border-amber-400 bg-white hover:bg-amber-50 px-2.5 py-1.5 text-xs font-bold text-amber-950 shadow-2xs transition cursor-pointer",title:"সকল তারিখের বিস্তারিত তালিকা",children:"📋 ট্র্যাকার"}),n.jsx("button",{type:"button",onClick:()=>f(!0),className:"flex h-7 w-7 items-center justify-center rounded-lg text-amber-700 hover:bg-amber-200/60 transition cursor-pointer font-bold text-xs",title:"লুকিয়ে রাখুন",children:"✕"})]})]})})}function iS({isOpen:l,onClose:o,selectedDate:u,onSelectDate:c}){const[d,A]=b.useState([]),f=()=>{A(Xm())};return b.useEffect(()=>{l&&f()},[l]),b.useEffect(()=>{const h=()=>{l&&f()};return window.addEventListener("tx-changed",h),window.addEventListener("storage",h),()=>{window.removeEventListener("tx-changed",h),window.removeEventListener("storage",h)}},[l]),l?n.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-3 sm:p-4 backdrop-blur-xs animate-in fade-in duration-150",children:n.jsxs("div",{className:"relative flex max-h-[90vh] w-full max-w-4xl flex-col rounded-2xl bg-white shadow-2xl border border-slate-200 overflow-hidden",children:[n.jsxs("div",{className:"flex items-center justify-between border-b border-slate-200 bg-slate-50 px-4 py-3 sm:px-6",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"flex h-9 w-9 items-center justify-center rounded-xl bg-blue-100 text-blue-700 text-lg shadow-xs",children:"📅"}),n.jsxs("div",{children:[n.jsx("h2",{className:"text-sm sm:text-base font-black text-slate-900",children:"কর্মদিবস ও লেনদেন অডিট ট্র্যাকার (Date Status Tracker)"}),n.jsx("p",{className:"text-[11px] sm:text-xs text-slate-500",children:"কোনো তারিখে ভুল এন্ট্রি হয়েছে কি না বা দিন সমাপ্ত (Day Close) বাকি আছে কি না তা সহজে যাচাই করুন"})]})]}),n.jsx("button",{type:"button",onClick:o,className:"flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 text-slate-600 hover:bg-rose-100 hover:text-rose-700 transition font-bold text-sm cursor-pointer",title:"বন্ধ করুন",children:"✕"})]}),n.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 bg-amber-50/60 px-4 py-2 text-[11px] sm:text-xs",children:[n.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[n.jsxs("span",{className:"flex items-center gap-1 font-bold text-emerald-800",children:[n.jsx("span",{className:"h-2.5 w-2.5 rounded-full bg-emerald-500 inline-block"}),"সবুজ = দিন সমাপ্ত (Day Closed)"]}),n.jsxs("span",{className:"flex items-center gap-1 font-bold text-amber-800",children:[n.jsx("span",{className:"h-2.5 w-2.5 rounded-full bg-amber-500 inline-block animate-pulse"}),"কমলা = অসমাপ্ত লেনদেন (Unclosed)"]})]}),n.jsxs("span",{className:"text-slate-600 font-medium",children:["বর্তমান সিলেক্ট করা তারিখ:"," ",n.jsx("span",{className:"font-mono font-bold text-blue-700",children:u})]})]}),n.jsx("div",{className:"flex-1 overflow-auto p-3 sm:p-4",children:d.length===0?n.jsx("div",{className:"p-8 text-center text-slate-400 text-xs sm:text-sm",children:"এখনও কোনো লেনদেনের তথ্য পাওয়া যায়নি।"}):n.jsx("div",{className:"overflow-x-auto rounded-xl border border-slate-200",children:n.jsxs("table",{className:"w-full border-collapse text-left text-xs",children:[n.jsx("thead",{children:n.jsxs("tr",{className:"bg-slate-100 text-slate-700 border-b border-slate-200 font-bold uppercase tracking-wider text-[11px]",children:[n.jsx("th",{className:"p-2.5 text-center w-12",children:"ক্র."}),n.jsx("th",{className:"p-2.5",children:"তারিখ ও বার"}),n.jsx("th",{className:"p-2.5 text-center",children:"লেনদেন সংখ্যা"}),n.jsx("th",{className:"p-2.5 text-right",children:"মোট জমা (রিসিভ)"}),n.jsx("th",{className:"p-2.5 text-right",children:"মোট খরচ (পেমেন্ট)"}),n.jsx("th",{className:"p-2.5 text-center",children:"স্ট্যাটাস"}),n.jsx("th",{className:"p-2.5 text-center w-28",children:"অ্যাকশন"})]})}),n.jsx("tbody",{className:"divide-y divide-slate-100 font-medium",children:d.map((h,x)=>{const L=h.date===u,y=!h.isClosed&&(h.txCount>0||h.srCount>0);return n.jsxs("tr",{className:`transition ${L?"bg-blue-50/80 font-semibold":y?"bg-amber-50/40 hover:bg-amber-50":"hover:bg-slate-50"}`,children:[n.jsx("td",{className:"p-2.5 text-center text-slate-400 font-mono text-[11px]",children:x+1}),n.jsx("td",{className:"p-2.5 whitespace-nowrap",children:n.jsxs("div",{className:"flex items-center gap-1.5",children:[n.jsx("span",{className:"font-mono font-bold text-slate-900",children:h.date}),n.jsx("span",{className:"text-[11px] text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded",children:h.dayName}),L&&n.jsx("span",{className:"rounded bg-blue-600 px-1.5 py-0.5 text-[10px] font-bold text-white",children:"Active"})]})}),n.jsxs("td",{className:"p-2.5 text-center whitespace-nowrap font-mono",children:[n.jsxs("span",{className:"text-emerald-700 font-bold",children:[h.receiveCount," Rec"]})," / ",n.jsxs("span",{className:"text-rose-700 font-bold",children:[h.paymentCount," Pay"]}),h.srCount>0&&n.jsxs("span",{className:"text-purple-700 text-[10px] ml-1",children:["(",h.srCount," SR)"]})]}),n.jsx("td",{className:"p-2.5 text-right font-mono font-bold text-emerald-700 whitespace-nowrap",children:h.receiveTotal>0?Number(h.receiveTotal).toLocaleString("en-IN"):"—"}),n.jsx("td",{className:"p-2.5 text-right font-mono font-bold text-rose-700 whitespace-nowrap",children:h.paymentTotal>0?Number(h.paymentTotal).toLocaleString("en-IN"):"—"}),n.jsx("td",{className:"p-2.5 text-center whitespace-nowrap",children:h.isClosed?n.jsxs("div",{className:"inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-1 text-[11px] font-bold text-emerald-800",children:[n.jsx("span",{className:"h-2 w-2 rounded-full bg-emerald-600"}),n.jsx("span",{children:"সমাপ্ত (Closed)"})]}):h.isOpen?n.jsxs("div",{className:"inline-flex items-center gap-1 rounded-full bg-blue-100 px-2.5 py-1 text-[11px] font-bold text-blue-900 border border-blue-300",children:[n.jsx("span",{className:"h-2 w-2 rounded-full bg-blue-600 animate-pulse"}),n.jsx("span",{children:"☀️ চলমান (Day Open)"})]}):pt(h.date).blocked?n.jsxs("div",{className:"inline-flex items-center gap-1 rounded-full bg-rose-100 px-2.5 py-1 text-[11px] font-bold text-rose-900 border border-rose-300",children:[n.jsx("span",{className:"h-2 w-2 rounded-full bg-rose-600"}),n.jsx("span",{children:"🚫 ব্লকড দিন"})]}):y?n.jsxs("div",{className:"inline-flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-1 text-[11px] font-bold text-amber-900 border border-amber-300",children:[n.jsx("span",{className:"h-2 w-2 rounded-full bg-amber-600 animate-ping"}),n.jsx("span",{children:"অসমাপ্ত (Unclosed)"})]}):n.jsx("span",{className:"text-slate-400 text-[11px]",children:"শুরু হয়নি (Not Opened)"})}),n.jsx("td",{className:"p-2.5 text-center whitespace-nowrap",children:n.jsx("button",{type:"button",onClick:()=>{c(h.date),o()},className:`rounded-lg px-2.5 py-1 text-xs font-bold transition shadow-xs cursor-pointer ${L?"bg-slate-200 text-slate-700 cursor-default":"bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800"}`,children:L?"চলমান":"এই তারিখে যান ➔"})})]},h.date)})})]})})}),n.jsxs("div",{className:"flex items-center justify-between border-t border-slate-200 bg-slate-50 px-4 py-3 sm:px-6",children:[n.jsx("p",{className:"text-[11px] text-slate-500",children:"টিপস: কোনো বন্ধের দিনে ভুল এন্ট্রি হলে সেই তারিখে গিয়ে সহজেই লেনদেনগুলো দেখে নিশ্চিত বা ডিলিট করতে পারবেন।"}),n.jsx("button",{type:"button",onClick:o,className:"rounded-xl bg-slate-800 px-4 py-1.5 text-xs font-bold text-white hover:bg-slate-700 transition cursor-pointer",children:"বন্ধ করুন"})]})]})}):null}function cS({selectedDate:l,onOpenDayModal:o}){const[u,c]=b.useState("not_opened"),[d,A]=b.useState(0),[f,h]=b.useState(0),[x,L]=b.useState(!1),[y,p]=b.useState(!1),w=b.useRef(null),P=()=>{var j;c(PR(l));try{const z=Fn(l);A(z.prevCash||0),h(z.prevBank||0),L(!!((j=gm(l))!=null&&j.manualOpening))}catch{}};b.useEffect(()=>{P()},[l]),b.useEffect(()=>{const j=()=>P();window.addEventListener("tx-changed",j),window.addEventListener("day-close-changed",j),window.addEventListener("day-open-changed",j),window.addEventListener("storage",j);const z=()=>{window.scrollTo({top:0,behavior:"smooth"}),p(!0),window.setTimeout(()=>p(!1),2400)};return window.addEventListener("scroll-to-day-bar",z),()=>{window.removeEventListener("tx-changed",j),window.removeEventListener("day-close-changed",j),window.removeEventListener("day-open-changed",j),window.removeEventListener("storage",j),window.removeEventListener("scroll-to-day-bar",z)}},[l]);const G=pt(l),K=()=>{confirm(`আপনি কি নিশ্চিত যে ${l} তারিখের হিসাবটি পুনরায় আনলক/ওপেন (Re-open) করতে চান?`)&&(pm(l),P(),window.dispatchEvent(new Event("day-open-changed")),window.dispatchEvent(new Event("day-close-changed")))};return u==="not_opened"?n.jsx("div",{ref:w,className:`mb-4 rounded-2xl border-2 border-amber-400 bg-linear-to-r from-amber-50 via-orange-50 to-amber-100/70 p-3.5 sm:p-4 text-amber-950 shadow-sm animate-in fade-in duration-200 ${y?"day-bar-flash":""}`,children:n.jsxs("div",{className:"flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3",children:[n.jsxs("div",{className:"flex items-start gap-2.5",children:[n.jsx("span",{className:"flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-500 text-white text-lg font-black shadow-xs",children:"☀️"}),n.jsxs("div",{children:[n.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[n.jsx("span",{className:"font-black text-amber-950 text-xs sm:text-sm",children:"কর্মদিবস এখনও শুরু (Day Open) করা হয়নি!"}),n.jsx("span",{className:"rounded-full bg-amber-500/20 px-2 py-0.5 text-[10px] font-bold text-amber-900 border border-amber-300",children:"Not Opened"})]}),n.jsxs("p",{className:"mt-1 text-[10px] sm:text-[11px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-lg px-2 py-0.5 inline-block font-mono",children:[Ze(l)," • প্রারম্ভিক ক্যাশ: ৳ ",de(d)," • প্রারম্ভিক ব্যাংক: ৳ ",de(f)]})]})]}),n.jsxs("button",{type:"button",onClick:o,disabled:G.blocked,className:"self-end sm:self-center shrink-0 rounded-xl bg-linear-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 active:scale-98 text-white px-4 py-2 text-xs font-black shadow-sm transition flex items-center gap-1.5 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed animate-pulse",title:G.blocked?G.reason||"এই তারিখে Day Open করা যাবে না":"কর্মদিবস শুরু করুন",children:[n.jsx("span",{children:"☀️"}),n.jsx("span",{children:G.blocked?"তারিখ ব্লকড":"কর্মদিবস শুরু (Day Open) করুন"})]}),n.jsx("button",{type:"button",onClick:()=>window.dispatchEvent(new CustomEvent("open-day-admin")),className:"shrink-0 self-end sm:self-center rounded-xl border border-violet-300 bg-violet-50 px-2.5 py-2 text-xs font-black text-violet-700 shadow-xs transition hover:bg-violet-100 cursor-pointer",title:"⚙️ Day Admin — সব কর্মদিবস Close/Re-open/এডিট এক জায়গায়",children:"⚙️"})]})}):u==="closed"?n.jsxs("div",{ref:w,className:`mb-4 rounded-2xl border border-rose-300 bg-rose-50 p-3 text-xs sm:text-sm font-bold text-rose-900 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 ${y?"day-bar-flash":""}`,children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-base",children:"🔒"}),n.jsxs("span",{children:["এই তারিখের (",l,") দিন সমাপ্ত (Day Closed) রয়েছে। হিসাব লক ও সুরক্ষিত আছে — কোনো এন্ট্রি বা পরিবর্তন করা যাবে না।"]})]}),n.jsxs("button",{type:"button",onClick:K,className:"shrink-0 self-end sm:self-center rounded-xl bg-amber-600 hover:bg-amber-700 text-white px-3.5 py-1.5 text-xs font-black shadow-xs transition cursor-pointer flex items-center gap-1.5",title:"দিনটি পুনরায় আনলক/ওপেন করুন",children:[n.jsx("span",{children:"🔓"}),n.jsx("span",{children:"Re-open Day"})]}),n.jsx("button",{type:"button",onClick:()=>window.dispatchEvent(new CustomEvent("open-day-admin")),className:"shrink-0 self-end sm:self-center rounded-xl border border-violet-300 bg-violet-50 px-2.5 py-1.5 text-xs font-black text-violet-700 shadow-xs transition hover:bg-violet-100 cursor-pointer",title:"⚙️ Day Admin — সব কর্মদিবস Close/Re-open/এডিট এক জায়গায়",children:"⚙️"})]}):n.jsxs("div",{ref:w,className:`mb-4 rounded-xl border border-emerald-300 bg-emerald-50/70 px-3.5 py-2 text-xs text-emerald-900 shadow-2xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 ${y?"day-bar-flash":""}`,children:[n.jsxs("div",{className:"flex items-center gap-1.5 flex-wrap",children:[n.jsx("span",{className:"h-2 w-2 rounded-full bg-emerald-500 animate-pulse"}),n.jsxs("span",{className:"font-bold",children:["☀️ ",l," কর্মদিবস চালু রয়েছে (Day Open)"]}),n.jsx("span",{className:"rounded bg-emerald-600 px-1.5 py-0.5 text-[10px] font-bold text-white uppercase",children:"Open ✓"}),x&&n.jsx("span",{className:"rounded border border-fuchsia-300 bg-fuchsia-50 px-1.5 py-0.5 text-[10px] font-black text-fuchsia-700",title:"এই দিনের প্রারম্ভিক ক্যাশ/ব্যাংক হাতে টাইপ করে বসানো হয়েছে",children:"✍️ ম্যানুয়াল ওপেনিং"}),n.jsx("span",{className:"text-slate-500 text-[11px] hidden md:inline",children:"— দিনের কাজ শেষে এখান থেকেই Day Close করুন"})]}),n.jsxs("div",{className:"flex items-center gap-2 self-end sm:self-center shrink-0",children:[n.jsxs("button",{type:"button",onClick:()=>window.dispatchEvent(new CustomEvent("open-day-open-modal")),className:"rounded-xl border border-emerald-400 bg-white px-3 py-1.5 text-xs font-black text-emerald-800 shadow-xs transition hover:bg-emerald-100 cursor-pointer flex items-center gap-1.5",title:"প্রারম্ভিক ক্যাশ/ব্যাংক দেখুন বা হাতে টাইপ করে সংশোধন করুন",children:[n.jsx("span",{children:"✏️"}),n.jsx("span",{children:"ওপেনিং"})]}),n.jsxs("button",{type:"button",onClick:()=>window.dispatchEvent(new CustomEvent("open-day-close-modal")),disabled:G.blocked,className:"rounded-xl bg-linear-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-3.5 py-1.5 text-xs font-black shadow-sm transition cursor-pointer flex items-center gap-1.5 disabled:opacity-50 disabled:cursor-not-allowed",title:G.blocked?"মধ্যবর্তী বন্ধের দিন (Day Close করা যাবে না)":"এই তারিখের হিসাব চূড়ান্তভাবে বন্ধ ও লক করুন",children:[n.jsx("span",{children:G.blocked?"🚫":"🔒"}),n.jsx("span",{children:G.blocked?"তারিখ ব্লকড":"Day Close করুন"})]}),n.jsx("button",{type:"button",onClick:()=>window.dispatchEvent(new CustomEvent("open-day-admin")),className:"shrink-0 rounded-xl border border-violet-300 bg-violet-50 px-2.5 py-1.5 text-xs font-black text-violet-700 shadow-xs transition hover:bg-violet-100 cursor-pointer",title:"⚙️ Day Admin — সব কর্মদিবস Close/Re-open/এডিট এক জায়গায়",children:"⚙️"})]})]})}const Ji=/^-?\d*\.?\d*$/;function uS({isOpen:l,onClose:o,selectedDate:u,onDayOpened:c}){const[d,A]=b.useState({cash:0,bank:0,dayName:""}),[f,h]=b.useState("0"),[x,L]=b.useState("0"),[y,p]=b.useState(""),[w,P]=b.useState(!1),[G,K]=b.useState(!1),[j,z]=b.useState(!1),[ce,M]=b.useState("");if(b.useEffect(()=>{if(!(!l||!u))try{const pe=Fn(u,{skipManualOpeningFor:u}),[B,O,S]=u.split("-").map(Number),I=new Date(B,O-1,S),q=["রবিবার","সোমবার","মঙ্গলবার","বুধবার","বৃহস্পতিবার","শুক্রবার","শনিবার"],ee=isNaN(I.getDay())?"":q[I.getDay()],U=Math.round(Number(pe.prevCash)||0),H=Math.round(Number(pe.prevBank)||0);A({cash:U,bank:H,prevDate:pe.prevDate,dayName:ee}),P(_t(u)||!!gm(u));const N=gm(u);N&&N.manualOpening?(h(String(Math.round(Number(N.openingCash)||0))),L(String(Math.round(Number(N.openingBank)||0))),p(N.openingNote||""),K(!0)):(h(String(U)),L(String(H)),p(""),K(!1)),M("")}catch(pe){console.error(pe)}},[l,u]),!l)return null;const te=Math.round(Number(f)||0),k=Math.round(Number(x)||0),J=te-d.cash,ue=k-d.bank,C=J!==0||ue!==0,ne=()=>{h(String(d.cash)),L(String(d.bank)),p(""),M("")},re=()=>{if(Oe(u)){M(`🔒 ${Ze(u)||u} তারিখের দিন সমাপ্ত (Day Closed) — ওপেনিং বদলানো যাবে না।`);return}if(!Ji.test(String(f).trim())||!Ji.test(String(x).trim())){M("⚠️ সঠিক সংখ্যা দিন (যেমন: 50000 বা 50000.50)");return}if(!(C&&!window.confirm(`✍️ ওপেনিং হাতে বসানো হচ্ছে:

হাতে নগদ: ৳${de(d.cash)}  →  ৳${de(te)}   (${J>=0?"+":"−"}৳${de(Math.abs(J))})
ব্যাংক: ৳${de(d.bank)}  →  ৳${de(k)}   (${ue>=0?"+":"−"}৳${de(Math.abs(ue))})

এই সংখ্যা থেকেই আজকের হিসাব এবং পরের কর্মদিবসগুলোর ওপেনিং চলবে।
নিশ্চিত করুন?`))){z(!0);try{$b(u,"Cashier",C?{cash:te,bank:k,note:y}:null),c&&c(),o()}catch(pe){M((pe==null?void 0:pe.message)||"দিন শুরু করতে সমস্যা হয়েছে।")}finally{z(!1)}}},ae=pe=>pe===0?null:n.jsxs("span",{className:`mt-1 inline-block rounded-md border px-1.5 py-0.5 font-mono text-[10px] font-black ${pe>0?"border-emerald-300 bg-emerald-100 text-emerald-800":"border-rose-300 bg-rose-100 text-rose-800"}`,children:["পার্থক্য ",pe>0?"+":"−","৳",de(Math.abs(pe))]}),fe="w-full rounded-lg border-2 bg-white px-2.5 py-2 text-right font-mono text-base font-black text-slate-900 outline-none focus:ring-2";return n.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-xs animate-in fade-in duration-150",children:n.jsxs("div",{className:"relative w-full max-w-lg max-h-[92vh] overflow-auto rounded-2xl bg-white shadow-2xl border border-slate-200",children:[n.jsxs("div",{className:"flex items-center justify-between border-b border-amber-200 bg-linear-to-r from-amber-500 to-orange-500 px-5 py-3.5 text-white",children:[n.jsxs("div",{className:"flex items-center gap-2.5",children:[n.jsx("span",{className:"flex h-9 w-9 items-center justify-center rounded-xl bg-white/20 text-xl font-bold shadow-xs",children:w?"✏️":"☀️"}),n.jsxs("div",{children:[n.jsx("h3",{className:"text-base font-black tracking-tight",children:w?"ওপেনিং সংশোধন (Opening Edit)":"কর্মদিবস শুরু (Day Open)"}),n.jsx("p",{className:"text-[11px] text-amber-100",children:"প্রারম্ভিক হাতে নগদ ও ব্যাংক স্থিতি — প্রয়োজনে হাতে টাইপ করে বসানো যাবে"})]})]}),n.jsx("button",{type:"button",onClick:o,className:"flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/30 transition text-sm font-bold cursor-pointer",children:"✕"})]}),n.jsxs("div",{className:"p-5 space-y-4 text-slate-800",children:[n.jsxs("div",{className:"rounded-xl border border-amber-200 bg-amber-50/70 p-3.5 flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsx("span",{className:"text-[11px] font-bold text-amber-800 uppercase tracking-wider block",children:w?"কর্মদিবস (Working Date)":"শুরু করার তারিখ (Working Date)"}),n.jsxs("span",{className:"font-mono text-lg font-black text-slate-900 mt-0.5 block",children:[u," ",n.jsxs("span",{className:"text-sm font-sans font-bold text-amber-900",children:["(",d.dayName,")"]})]})]}),n.jsx("span",{className:"rounded-lg bg-amber-500 px-2.5 py-1 text-xs font-black text-white shadow-xs",children:Ze(u)})]}),n.jsxs("div",{className:"rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-3",children:[n.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 text-xs border-b border-slate-200 pb-2",children:[n.jsx("span",{className:"font-bold text-slate-600",children:"পূর্ববর্তী সমাপ্ত কর্মদিবস:"}),n.jsxs("div",{className:"flex items-center gap-2",children:[G&&n.jsx("span",{className:"rounded border border-fuchsia-300 bg-fuchsia-50 px-2 py-0.5 text-[10px] font-black text-fuchsia-700",title:"এই দিনের ওপেনিং আগে হাতে বসানো হয়েছিল",children:"✍️ ম্যানুয়াল ওপেনিং বসানো আছে"}),n.jsx("span",{className:"font-mono font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200",children:d.prevDate?Ze(d.prevDate):"প্রারম্ভিক দিন"})]})]}),n.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1",children:[n.jsxs("div",{className:"rounded-xl bg-emerald-50 border border-emerald-300 p-3",children:[n.jsx("span",{className:"text-[11px] font-bold text-emerald-800 block text-center",children:"প্রারম্ভিক ক্যাশ (Cash in Hand)"}),n.jsxs("span",{className:"mt-1 block text-center text-[10px] font-bold text-emerald-700",children:["অ্যাপের হিসাব:"," ",n.jsxs("span",{className:"font-mono font-black",children:["৳",de(d.cash)]})]}),n.jsxs("div",{className:"mt-1.5 flex items-center gap-1",children:[n.jsx("span",{className:"text-sm font-black text-emerald-800",children:"৳"}),n.jsx("input",{value:f,onChange:pe=>{Ji.test(pe.target.value)&&(h(pe.target.value),M(""))},inputMode:"decimal",autoComplete:"off",placeholder:"0",className:`${fe} border-emerald-400 focus:border-emerald-600 focus:ring-emerald-200`})]}),n.jsx("div",{className:"text-center",children:ae(J)})]}),n.jsxs("div",{className:"rounded-xl bg-indigo-50 border border-indigo-300 p-3",children:[n.jsx("span",{className:"text-[11px] font-bold text-indigo-800 block text-center",children:"প্রারম্ভিক ব্যাংক স্থিতি (Bank)"}),n.jsxs("span",{className:"mt-1 block text-center text-[10px] font-bold text-indigo-700",children:["অ্যাপের হিসাব:"," ",n.jsxs("span",{className:"font-mono font-black",children:["৳",de(d.bank)]})]}),n.jsxs("div",{className:"mt-1.5 flex items-center gap-1",children:[n.jsx("span",{className:"text-sm font-black text-indigo-800",children:"৳"}),n.jsx("input",{value:x,onChange:pe=>{Ji.test(pe.target.value)&&(L(pe.target.value),M(""))},inputMode:"decimal",autoComplete:"off",placeholder:"0",className:`${fe} border-indigo-400 focus:border-indigo-600 focus:ring-indigo-200`})]}),n.jsx("div",{className:"text-center",children:ae(ue)})]})]}),C&&n.jsxs("div",{className:"space-y-2 rounded-xl border-2 border-fuchsia-300 bg-fuchsia-50/70 p-3",children:[n.jsxs("div",{className:"flex items-center justify-between gap-2",children:[n.jsx("span",{className:"text-[11px] font-black text-fuchsia-900",children:"✍️ ম্যানুয়াল ওপেনিং — এই সংখ্যাই আজকের ওপেনিং এবং পরের কর্মদিবসের ওপেনিং হিসেবে চলবে"}),n.jsx("button",{type:"button",onClick:ne,className:"shrink-0 rounded-lg border border-slate-300 bg-white px-2.5 py-1 text-[11px] font-bold text-slate-700 transition hover:bg-slate-100 cursor-pointer",title:"অ্যাপের নিজের হিসাবে ফিরে যান",children:"↺ সিস্টেম মান"})]}),n.jsx("input",{value:y,onChange:pe=>p(pe.target.value),placeholder:"কারণ / নোট (ঐচ্ছিক) — যেমন: গত ছুটির দিনের হাতে নগদ সমন্বয়",autoComplete:"off",className:"w-full rounded-lg border border-fuchsia-300 bg-white px-3 py-2 text-xs font-semibold text-slate-900 outline-none focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-200"})]})]}),ce&&n.jsx("div",{className:"rounded-xl border border-rose-300 bg-rose-50 px-3 py-2 text-[11px] font-bold text-rose-800",children:ce}),n.jsxs("div",{className:"rounded-xl bg-blue-50 border border-blue-200 p-3 text-xs text-blue-900 flex items-start gap-2",children:[n.jsx("span",{className:"text-base shrink-0",children:"ℹ️"}),n.jsxs("p",{className:"leading-relaxed font-medium text-[11px] sm:text-xs",children:["সাধারণত অ্যাপের দেখানো সংখ্যাটাই ঠিক থাকে — সেটা আগের কর্মদিবসের ক্লোজিং। ছুটির দিন বা হাতের হিসাবে মিল না থাকলে উপরের ঘরে ",n.jsx("strong",{children:"হাতে টাইপ করে"})," ওপেনিং বসিয়ে দিন। দিন শুরু করার পরেও ",n.jsx("strong",{children:"Working-Day বারের ✏️ ওপেনিং"})," বাটন থেকে যেকোনো সময় সংশোধন করা যাবে (Day Close করার আগ পর্যন্ত)।"]})]})]}),n.jsxs("div",{className:"sticky bottom-0 flex items-center justify-end gap-2.5 border-t border-slate-200 bg-slate-50 px-5 py-3.5",children:[n.jsx("button",{type:"button",onClick:o,disabled:j,className:"rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 px-4 py-2 text-xs font-bold transition cursor-pointer",children:"বাতিল"}),n.jsxs("button",{type:"button",onClick:re,disabled:j,className:"rounded-xl bg-linear-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-5 py-2 text-xs font-black shadow-md transition flex items-center gap-1.5 cursor-pointer disabled:opacity-50",children:[n.jsx("span",{children:w?"💾":"☀️"}),n.jsx("span",{children:j?"সেভ হচ্ছে...":w?C?"ওপেনিং সংশোধন করুন":"সেভ করুন":C?"ম্যানুয়াল ওপেনিং দিয়ে দিন শুরু করুন":"নিশ্চিত করুন ও দিন শুরু করুন"})]})]})]})})}const dS=()=>ss().map(l=>l.name),mS=(l,o)=>{const u=l.toLowerCase().trim(),c=o.toLowerCase().trim();return u===c||u.includes(c)||c.includes(u)};function Im(l){const o=Nn(l),u=sn(),c=Fn(l),d=c.prevCash,A=c.prevBank,f=ha("disburse").map(H=>H.name.toLowerCase().trim()),h=u.filter(H=>H.txDate===l),x=h.filter(H=>H.type==="receive"),L=h.filter(H=>H.type==="payment"),y=o.reduce((H,N)=>H+Number(N.loan||0),0),p=o.reduce((H,N)=>H+Number(N.savings||0),0),w=o.reduce((H,N)=>H+Number(N.dps||0),0),P=p+w,G=o.reduce((H,N)=>H+Number(N.passbook||0),0),K=o.reduce((H,N)=>H+Number(N.admission||0),0),j=y+P+G+K,z=o.reduce((H,N)=>H+Number(N.savingsAdjust||0),0),ce=o.reduce((H,N)=>H+Number(N.nogodReturn||0),0),M=z+ce,te=j,k=d,J=x.filter(H=>H.category.toLowerCase().includes("bank withdraw")).reduce((H,N)=>H+(Number(N.amount)||0),0),ue=L.filter(H=>{const N=H.category.toLowerCase().trim();return N.includes("fund payment")||N.includes("fund transfer")||N.includes("fund")&&!N.includes("receive")?!1:f.includes(N)||N.includes("jagoron")||N.includes("agrossor")||N.includes("buni")||N.includes("sufolon")||N.includes("mfce")||!!(H.subCategory&&H.subCategory.trim().length>0)}),C=ue.reduce((H,N)=>H+ur(Number(N.amount)||0,N.category,ts()),0),ne=ue.length*5,re=x.filter(H=>{const N=H.category.toLowerCase().trim();return!(N.includes("bank withdraw")||N.includes("fund receive")||N.includes("welfare")||N.includes("kallayan")||N.includes("loan form")||dS().some(oe=>mS(N,oe)))}).reduce((H,N)=>H+(Number(N.amount)||0),0),ae=ue.reduce((H,N)=>H+(Number(N.amount)||0),0),fe=L.filter(H=>H.category.toLowerCase().includes("bank deposit")||H.category.toLowerCase().includes("bank deposite")).reduce((H,N)=>H+(Number(N.amount)||0),0),pe=M,B=L.filter(H=>{const N=H.category.toLowerCase().trim();return N.includes("fund payment")||N.includes("fund transfer")||N.includes("fund")&&!N.includes("receive")}).reduce((H,N)=>H+(Number(N.amount)||0),0),O=L.filter(H=>{const N=H.category.toLowerCase().trim();return!(ue.some(oe=>oe.id===H.id)||N.includes("bank deposit")||N.includes("bank deposite")||N.includes("fund payment")||N.includes("fund transfer")||N.includes("fund")&&!N.includes("receive"))}).reduce((H,N)=>H+(Number(N.amount)||0),0),S=[{label:"Today All Aday",amount:te},{label:"Hand Cash",amount:k},{label:"Bank Withdraw",amount:J},{label:"Kallayan",amount:C},{label:"Loan Form",amount:ne},{label:"Others Income",amount:re}].filter(H=>H.amount>0),I=[{label:"Disburse",amount:ae},{label:"Bank Deposit",amount:fe},{label:"Savings Return",amount:pe},{label:"Fund Payment",amount:B},{label:"Others Expense",amount:O}].filter(H=>H.amount>0),q=S.reduce((H,N)=>H+N.amount,0),ee=I.reduce((H,N)=>H+N.amount,0),U=x.filter(H=>H.category.toLowerCase().includes("fund receive")).reduce((H,N)=>H+(Number(N.amount)||0),0);return{cash:q-ee,bank:A-J+fe+U}}function AS({isOpen:l,onClose:o,selectedDate:u,onDayClosed:c}){const[d,A]=b.useState(0),[f,h]=b.useState(0),[x,L]=b.useState(0),[y,p]=b.useState(0),[w,P]=b.useState(!1);if(b.useEffect(()=>{if(!(!l||!u))try{const j=Fn(u),z=Im(u);A(j.receive||0),h(j.expense||0),L(z.cash||0),p(z.bank||0)}catch(j){console.error(j)}},[l,u]),!l)return null;const G=pt(u),K=()=>{if(!_t(u)){alert(`⚠️ ${u} তারিখে কোনো চলমান কর্মদিবস নেই। আগে Day Open করুন।`),o();return}if(G.blocked){alert(G.reason||"এই তারিখটি ব্লকড।"),o();return}P(!0);try{const j=Fn(u),z=Im(u),ce={closeDate:u,openingCash:j.prevCash,openingBank:j.prevBank,closingCash:z.cash,closingBank:z.bank,totalReceive:j.receive,totalPayment:j.expense,status:"closed",closedAt:new Date().toISOString(),closedBy:"Cashier",notes:"Day closed from Working-Day control"};qb(ce),c&&c(),o()}catch(j){alert(j.message||"দিন ক্লোজ করতে সমস্যা হয়েছে।")}finally{P(!1)}};return fc.createPortal(n.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-xs animate-in fade-in duration-150",children:n.jsxs("div",{className:"relative w-full max-w-md rounded-2xl bg-white shadow-2xl border border-slate-200 overflow-hidden",children:[n.jsxs("div",{className:"flex items-center justify-between border-b border-emerald-200 bg-linear-to-r from-emerald-600 to-teal-600 px-5 py-3.5 text-white",children:[n.jsxs("div",{className:"flex items-center gap-2.5",children:[n.jsx("span",{className:"flex h-9 w-9 items-center justify-center rounded-xl bg-white/20 text-xl font-bold shadow-xs",children:"🔒"}),n.jsxs("div",{children:[n.jsx("h3",{className:"text-base font-black tracking-tight",children:"Day Close (দিন সমাপ্তি)"}),n.jsx("p",{className:"text-[11px] text-emerald-100",children:"কর্মদিবসটি বন্ধ ও লক করা হবে"})]})]}),n.jsx("button",{type:"button",onClick:o,className:"flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/30 transition text-sm font-bold cursor-pointer",children:"✕"})]}),n.jsxs("div",{className:"p-5 space-y-3.5 text-slate-800",children:[n.jsxs("div",{className:"rounded-xl border border-emerald-200 bg-emerald-50/60 p-3.5 flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsx("span",{className:"text-[11px] font-bold text-emerald-800 uppercase tracking-wider block",children:"সমাপ্ত করার তারিখ (Working Date)"}),n.jsx("span",{className:"font-mono text-lg font-black text-slate-900 mt-0.5 block",children:u})]}),n.jsx("span",{className:"rounded-lg bg-emerald-600 px-2.5 py-1 text-xs font-black text-white shadow-xs",children:Ze(u)})]}),n.jsxs("div",{className:"rounded-xl bg-slate-50 border border-slate-200 p-3 space-y-1.5 text-xs sm:text-sm",children:[n.jsxs("div",{className:"flex justify-between",children:[n.jsx("span",{className:"text-slate-600 font-semibold",children:"মোট রিসিভ:"}),n.jsx("span",{className:"font-mono font-black text-emerald-700",children:de(d)})]}),n.jsxs("div",{className:"flex justify-between",children:[n.jsx("span",{className:"text-slate-600 font-semibold",children:"মোট পেমেন্ট:"}),n.jsx("span",{className:"font-mono font-black text-rose-700",children:de(f)})]}),n.jsxs("div",{className:"mt-1.5 flex justify-between border-t border-slate-300 pt-1.5",children:[n.jsx("span",{className:"text-emerald-800 font-bold",children:"Today Cash:"}),n.jsx("span",{className:"font-mono font-black text-emerald-700",children:de(x)})]}),n.jsxs("div",{className:"flex justify-between",children:[n.jsx("span",{className:"text-indigo-800 font-bold",children:"Today Bank:"}),n.jsx("span",{className:"font-mono font-black text-indigo-700",children:de(y)})]})]}),n.jsxs("div",{className:"rounded-xl border border-emerald-300 bg-emerald-50 p-3 text-xs text-emerald-900 font-medium leading-relaxed",children:["✓ নিশ্চিত করলে এই তারিখের কর্মদিবসটি বন্ধ (Day Closed) হয়ে যাবে এবং এই তারিখের রিসিভ, পেমেন্ট ও স্টাফ কালেকশন — সব এন্ট্রি সম্পূর্ণ লক হয়ে যাবে।",n.jsxs("span",{className:"block mt-1 text-emerald-800",children:["পুনরায় কাজ করার প্রয়োজন হলে ",n.jsx("strong",{children:"Working-Day বার"})," থেকে"," ",n.jsx("strong",{children:"Re-open Day"})," করবেন।"]})]})]}),n.jsxs("div",{className:"flex items-center justify-end gap-2.5 border-t border-slate-200 bg-slate-50 px-5 py-3.5",children:[n.jsx("button",{type:"button",onClick:o,disabled:w,className:"rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 px-4 py-2 text-xs font-bold transition cursor-pointer",children:"বাতিল"}),n.jsxs("button",{type:"button",onClick:K,disabled:w,className:"rounded-xl bg-linear-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-5 py-2 text-xs font-black shadow-md transition flex items-center gap-1.5 cursor-pointer disabled:opacity-50",children:[n.jsx("span",{children:"🔒"}),n.jsx("span",{children:w?"ক্লোজ হচ্ছে...":"হ্যাঁ, ডে ক্লোজ করুন"})]})]})]})}),document.body)}const fS=()=>{var u,c,d,A;const l=new Set;for(const f of xl())(u=f.closeDate)!=null&&u.includes("-")&&l.add(f.closeDate);for(const f of Gs())(c=f.openDate)!=null&&c.includes("-")&&l.add(f.openDate);for(const f of sn())(d=f.txDate)!=null&&d.includes("-")&&l.add(f.txDate);for(const f of Nn())(A=f.reportDate)!=null&&A.includes("-")&&l.add(f.reportDate);const o=new Map;for(const f of sn())o.set(f.txDate,(o.get(f.txDate)||0)+1);for(const f of Nn())o.set(f.reportDate,(o.get(f.reportDate)||0)+1);return Array.from(l).sort().reverse().map(f=>({date:f,closed:Oe(f),open:_t(f),entries:o.get(f)||0,closure:Zm(f)}))},xS=(l,o="Admin")=>{const u=Fn(l),c=Im(l);return qb({closeDate:l,openingCash:u.prevCash,openingBank:u.prevBank,closingCash:c.cash,closingBank:c.bank,totalReceive:u.receive,totalPayment:u.expense,status:"closed",closedAt:new Date().toISOString(),closedBy:o,notes:"Closed from ⚙️ Day Admin"})};function hS({isOpen:l,onClose:o,onJumpDate:u}){const[c,d]=b.useState(0),[A,f]=b.useState(""),[h,x]=b.useState(null),L=b.useMemo(()=>l?fS():[],[l,c]),y=b.useMemo(()=>{const j=L.filter(z=>z.open&&!z.closed).map(z=>z.date).sort();return j.length?j[0]:null},[L]);if(b.useEffect(()=>{l&&(d(j=>j+1),x(null))},[l]),!l)return null;const p=()=>d(j=>j+1),w=j=>{if(confirm(`🔒 ${Ze(j)||j} — এই কর্মদিবসটি ক্লোজ (লক) করবেন?

ক্লোজ হলে এই তারিখের সব এন্ট্রি লক হয়ে যাবে (প্রয়োজনে এখান থেকেই Re-open করা যাবে)।`)){try{xS(j),x({ok:!0,text:`✅ ${Ze(j)||j} — Day Closed হয়েছে।`})}catch(z){x({ok:!1,text:(z==null?void 0:z.message)||"ক্লোজ করা গেল না।"})}p()}},P=j=>{if(confirm(`🔓 ${Ze(j)||j} — এই দিনটি আবার আনলক (Re-open) করবেন?

আনলক হলে এই তারিখে আবার এন্ট্রি/এডিট করা যাবে।`)){try{pm(j),x({ok:!0,text:`🔓 ${Ze(j)||j} — আবার খোলা হয়েছে।`})}catch(z){x({ok:!1,text:(z==null?void 0:z.message)||"Re-open করা গেল না।"})}p()}},G=j=>{const z=Oe(j);if(!(z&&!confirm(`🔓 ${Ze(j)||j} দিনটি ক্লোজড।

এডিট করতে হলে আগে আনলক (Re-open) করতে হবে — আনলক করে সেই দিনে যাবেন?`))){try{z&&pm(j)}catch{}p(),u&&u(j)}},K=()=>{const j=A;if(!j)return x({ok:!1,text:"আগে একটি তারিখ বেছে নিন।"});if(Oe(j))return x({ok:!1,text:`${j} ক্লোজড — Day Open না, আগে Re-open করুন।`});if(_t(j))return x({ok:!1,text:`${j} ইতিমধ্যেই খোলা আছে।`});try{$b(j,"Admin",null,{force:!0}),x({ok:!0,text:`☀️ ${Ze(j)||j} — Day Open হয়েছে (অ্যাডমিন)।`}),f("")}catch(z){x({ok:!1,text:(z==null?void 0:z.message)||"Day Open করা গেল না।"})}p()};return fc.createPortal(n.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-3 backdrop-blur-xs animate-in fade-in duration-150",children:n.jsxs("div",{className:"relative flex max-h-[92vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl",children:[n.jsxs("div",{className:"flex items-center justify-between border-b border-violet-200 bg-linear-to-r from-violet-700 to-indigo-600 px-5 py-3.5 text-white",children:[n.jsxs("div",{className:"flex items-center gap-2.5",children:[n.jsx("span",{className:"flex h-9 w-9 items-center justify-center rounded-xl bg-white/20 text-xl font-bold shadow-xs",children:"⚙️"}),n.jsxs("div",{children:[n.jsx("h3",{className:"text-base font-black tracking-tight",children:"Day Admin — কর্মদিবস নিয়ন্ত্রণ"}),n.jsx("p",{className:"text-[11px] text-violet-100",children:"যেকোনো দিন Close / Re-open / এডিট — এখান থেকেই"})]})]}),n.jsx("button",{type:"button",onClick:o,className:"flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white transition hover:bg-white/30 text-sm font-bold cursor-pointer",children:"✕"})]}),n.jsx("div",{className:`border-b px-4 py-2 text-[11px] font-black ${y?"border-amber-300 bg-amber-50 text-amber-900":"border-emerald-300 bg-emerald-50 text-emerald-900"}`,children:y?n.jsxs(n.Fragment,{children:["⚠️ সিকোয়েন্স-নিয়ম: ",n.jsx("span",{className:"font-mono",children:Ze(y)||y})," ","খোলা আছে — এটা Close না করলে পরের দিন Day Open হবে না।"]}):n.jsx(n.Fragment,{children:"✓ সব কর্মদিবস ধারাবাহিক — কোনো দিন আটকে নেই।"})}),h&&n.jsx("div",{className:`border-b px-4 py-2 text-[11px] font-bold ${h.ok?"border-emerald-200 bg-emerald-50 text-emerald-800":"border-rose-200 bg-rose-50 text-rose-800"}`,children:h.text}),n.jsxs("div",{className:"flex flex-wrap items-center gap-2 border-b border-slate-200 bg-slate-50 px-4 py-2.5",children:[n.jsx("span",{className:"text-[11px] font-black text-slate-700",children:"☀️ অ্যাডমিন Day Open:"}),n.jsx(xn,{value:A,onChange:f,manualEntry:!0,className:"w-36 px-2 py-1 text-xs"}),n.jsx("button",{type:"button",onClick:K,className:"rounded-lg bg-linear-to-r from-amber-600 to-orange-600 px-3 py-1.5 text-[11px] font-black text-white shadow-xs transition hover:from-amber-700 hover:to-orange-700 cursor-pointer",title:"সিকোয়েন্স-নিয়ম বাইপাস করে যেকোনো দিন খুলুন",children:"☀️ Day Open (নিয়ম-বাইপাস)"})]}),n.jsx("div",{className:"flex-1 space-y-2 overflow-auto p-3.5",children:L.length===0?n.jsx("p",{className:"py-10 text-center text-xs font-semibold text-slate-400",children:"এখনো কোনো কর্মদিবসের রেকর্ড নেই।"}):L.map(j=>n.jsxs("div",{className:`rounded-xl border p-3 ${j.closed?"border-rose-200 bg-rose-50/50":"border-emerald-300 bg-emerald-50/40"}`,children:[n.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[n.jsx("span",{className:"text-base",children:j.closed?"🔒":"☀️"}),n.jsx("span",{className:"font-mono text-sm font-black text-slate-900",children:j.date}),n.jsx("span",{className:"text-[11px] font-bold text-slate-500",children:Ze(j.date)}),n.jsx("span",{className:`rounded-full px-2 py-0.5 text-[10px] font-black ${j.closed?"bg-rose-600 text-white":"bg-emerald-600 text-white"}`,children:j.closed?"Day Closed":"Open"}),n.jsxs("span",{className:"ml-auto text-[10px] font-bold text-slate-500",children:["এন্ট্রি: ",n.jsx("span",{className:"font-mono",children:j.entries})]})]}),j.closure&&n.jsxs("div",{className:"mt-1.5 flex flex-wrap gap-x-3 gap-y-0.5 text-[10px] font-bold text-slate-600",children:[n.jsxs("span",{children:["ওপেনিং: ৳",de(j.closure.openingCash)," / ব্যাংক ৳",de(j.closure.openingBank)]}),n.jsxs("span",{children:["ক্লোজিং: ৳",de(j.closure.closingCash)," / ব্যাংক ৳",de(j.closure.closingBank)]}),j.closure.closedAt&&n.jsxs("span",{className:"text-slate-400",children:["ক্লোজ: ",new Date(j.closure.closedAt).toLocaleString("en-GB")]})]}),n.jsxs("div",{className:"mt-2 flex flex-wrap items-center gap-1.5",children:[j.closed?n.jsx("button",{type:"button",onClick:()=>P(j.date),className:"rounded-lg bg-amber-600 px-3 py-1.5 text-[11px] font-black text-white shadow-xs transition hover:bg-amber-700 cursor-pointer",title:"দিনটি আবার আনলক করুন",children:"🔓 Re-open Day"}):n.jsx("button",{type:"button",onClick:()=>w(j.date),className:"rounded-lg bg-linear-to-r from-emerald-600 to-teal-600 px-3 py-1.5 text-[11px] font-black text-white shadow-xs transition hover:from-emerald-700 hover:to-teal-700 cursor-pointer",title:"এই দিনটি শুধু এখানেই সরাসরি ক্লোজ করুন",children:"🔒 Day Close"}),n.jsx("button",{type:"button",onClick:()=>G(j.date),className:"rounded-lg border border-indigo-300 bg-indigo-50 px-3 py-1.5 text-[11px] font-black text-indigo-700 transition hover:bg-indigo-100 cursor-pointer",title:j.closed?"আনলক করে সেই তারিখে এডিট করতে যান":"সেই তারিখে গিয়ে এন্ট্রি/এডিট করুন",children:"✏️ এই দিনে এডিট"})]})]},j.date))}),n.jsx("div",{className:"border-t border-slate-200 bg-slate-50 px-4 py-2.5 text-[10px] font-semibold text-slate-500",children:"ℹ️ Day Close/এডিট সব ডিভাইসে ক্লাউডের মাধ্যমে সিঙ্ক হয়। পুরনো দিন এডিট শেষ হলে মনে রাখবেন — দিনটি আবার Close করে দিন (না করলে পরের দিন খোলা যাবে না)।"})]})}),document.body)}const Bm="1.4.180";async function bS(){try{if("serviceWorker"in navigator){const l=await navigator.serviceWorker.getRegistrations();await Promise.all(l.map(o=>o.unregister()))}if("caches"in window){const l=await caches.keys();await Promise.all(l.map(o=>caches.delete(o)))}}catch(l){console.warn("[version] clear failed",l)}}const pp="gobra_update_dismissed_for";let cc="";function pS(){try{cc&&sessionStorage.setItem(pp,cc)}catch{}}async function gp(){await bS();const l=new URL(window.location.href);l.searchParams.set("_v",String(Date.now())),window.location.replace(l.toString())}function gS(l){if(typeof window>"u")return;const o=async()=>{try{const c=await fetch(`/version.json?t=${Date.now()}`,{cache:"no-store"});if(!c.ok)return;const d=await c.json();if(d&&d.version&&d.version!==Bm){cc=d.version;try{if(sessionStorage.getItem(pp)===d.version)return}catch{}l()}}catch{}};if("serviceWorker"in navigator){navigator.serviceWorker.register("/sw.js",{updateViaCache:"none"}).then(d=>{d.update(),d.addEventListener("updatefound",()=>{const A=d.installing;A&&A.addEventListener("statechange",()=>{A.state==="installed"&&navigator.serviceWorker.controller&&l()})})}).catch(d=>console.warn("[sw] register failed",d));let c=!1;navigator.serviceWorker.addEventListener("controllerchange",()=>{c||(c=!0,window.location.reload())})}(async()=>{const c="gobra_force_reload_done";if(!sessionStorage.getItem(c))try{const d=await fetch(`/version.json?t=${Date.now()}`,{cache:"no-store"});if(!d.ok)return;const A=await d.json();A&&A.version&&A.version!==Bm&&(cc=A.version,sessionStorage.setItem(c,"1"),await gp())}catch{}})().then(o).catch(o),window.setInterval(o,6e4),window.addEventListener("focus",o),document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&o()})}const ns={},Xi=String((ns==null?void 0:ns.VITE_GOOGLE_CLIENT_ID)||"161441191624-q3e0gtm5avvvo3f8qpclph8ukleqshvb.apps.googleusercontent.com"),bb=String((ns==null?void 0:ns.VITE_GOOGLE_ORIGIN)||"https://cash-gobra-bkf.netlify.app"),RS=String((ns==null?void 0:ns.VITE_GOOGLE_ORIGINS)||"https://cash-gobra-bkf.netlify.app,https://live--cash-gobra-bkf.netlify.app").split(",").map(l=>l.trim()).filter(Boolean),pb=()=>{try{return RS.includes(window.location.origin)||window.location.hostname==="localhost"}catch{return!0}};function SS({onAuthed:l}){const[o,u]=b.useState("in"),[c,d]=b.useState(!1),[A,f]=b.useState(""),[h,x]=b.useState(!1),[L,y]=b.useState(""),[p,w]=b.useState(""),[P,G]=b.useState(""),[K,j]=b.useState(""),[z,ce]=b.useState(""),[M,te]=b.useState(""),[k,J]=b.useState(""),[ue,C]=b.useState([]);b.useEffect(()=>{C(bc().map(I=>({id:I.id,name:I.name})))},[o]);const ne="w-full rounded-xl border-2 border-slate-300 bg-white px-3.5 py-2.5 text-sm font-bold text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200",re="mb-1 block text-[11px] font-black uppercase tracking-wide text-slate-600",ae=I=>I.replace(/[^0-9+]/g,"").slice(0,16),fe=async()=>{const I=p;try{const q=await L2(L,I);if(q.ok&&q.token&&q.user){l($i(String(q.user.mobile||L),q.user.branchId,{name:q.user.name}));return}if(q.pending){f(q.error||"⏳ অ্যাডমিনের অনুমতির অপেক্ষা রয়েছে।");return}if(!(q.error==="server error"||!q.error)){f(q.error);return}}catch{}await pe()},pe=async()=>{f(""),d(!0);try{const I=await N5(L,p);if(!I.ok||!I.session){f(I.error||"সাইন ইন করা যায়নি।");return}l(I.session)}catch(I){f((I==null?void 0:I.message)||"সাইন ইন করা যায়নি।")}finally{d(!1)}},B=async()=>{f(""),d(!0);try{const I=z.trim().toLowerCase().replace(/[^a-z0-9_]/g,"_"),q=S&&S.id||I||"gobra",ee=await O2({name:P.trim(),mobile:K,password:M,branchId:q});if(ee.ok&&ee.token&&ee.user){l($i(String(ee.user.mobile||K),String(ee.user.branchId||q),{name:ee.user.name||P.trim()})),d(!1);return}if(ee.ok||ee.pending){f(ee.message||"⏳ অনুমতির জন্য জমা হয়েছে।"),d(!1);return}if(ee.error&&ee.error!=="server error"){f(ee.error),d(!1);return}}catch{}try{const I=await v5({name:P,mobile:K,branchName:z,password:M,confirmPassword:k});if(!I.ok||!I.session){f(I.error||"সাইন আপ করা যায়নি।");return}l(I.session)}catch(I){f((I==null?void 0:I.message)||"সাইন আপ করা যায়নি।")}finally{d(!1)}},O=b.useRef(null);b.useEffect(()=>{if(!Xi||o!=="in")return;let I=!1;return(async()=>{try{if(await U2(),I||!O.current)return;const q=window.google;q.accounts.id.initialize({client_id:Xi,callback:async ee=>{f(""),d(!0);try{const U=await j2(String((ee==null?void 0:ee.credential)||""));U.ok&&U.token&&U.user?l($i(String(U.user.mobile||U.user.email||"google-user"),U.user.branchId,{name:U.user.name})):f(U.error||U.message||(U.pending?"⏳ অ্যাডমিনের অনুমতির অপেক্ষা রয়েছে।":"Google লগইন হয়নি।"))}catch{f("Google লগইনে সমস্যা — ইন্টারনেট দেখুন।")}finally{d(!1)}}}),q.accounts.id.renderButton(O.current,{theme:"outline",size:"large",width:320,text:"signin_with",locale:"bn"})}catch{}})(),()=>{I=!0}},[o]);const S=ue.find(I=>I.name.trim().toLowerCase()===z.trim().toLowerCase());return n.jsx("div",{className:"min-h-screen w-full bg-linear-to-br from-slate-200 via-blue-100 to-emerald-100 px-3 py-6 sm:py-10",children:n.jsxs("div",{className:"mx-auto w-full max-w-md",children:[n.jsxs("div",{className:"mb-4 flex items-center justify-center gap-3",children:[n.jsx("img",{src:fp,alt:"BKF Logo",className:"h-14 w-auto object-contain drop-shadow"}),n.jsxs("div",{children:[n.jsx("h1",{className:"text-xl font-black leading-tight text-slate-900 sm:text-2xl",children:"Bandhu Kallyan Foundation"}),n.jsx("p",{className:"text-[11px] font-bold text-slate-600 sm:text-xs",children:"🏢 মাল্টি অফিস হিসাব সিস্টেম — প্রতি অফিসের খতিয়ান সম্পূর্ণ আলাদা"})]})]}),n.jsxs("div",{className:"overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl",children:[n.jsxs("div",{className:"grid grid-cols-2 border-b border-slate-200 bg-slate-50",children:[n.jsx("button",{type:"button",onClick:()=>{u("in"),f("")},className:`px-4 py-3 text-sm font-black transition cursor-pointer ${o==="in"?"bg-white text-indigo-700 border-b-2 border-indigo-600":"text-slate-500 hover:text-slate-700"}`,children:"🔓 সাইন ইন"}),n.jsx("button",{type:"button",onClick:()=>{u("up"),f("")},className:`px-4 py-3 text-sm font-black transition cursor-pointer ${o==="up"?"bg-white text-emerald-700 border-b-2 border-emerald-600":"text-slate-500 hover:text-slate-700"}`,children:"📝 সাইন আপ"})]}),n.jsxs("div",{className:"space-y-3 p-4 sm:p-5",children:[o==="in"?n.jsxs(n.Fragment,{children:[n.jsxs("div",{children:[n.jsx("label",{className:re,children:"ইউজার আইডি (মোবাইল নম্বর)"}),n.jsx("input",{value:L,onChange:I=>y(ae(I.target.value)),onKeyDown:I=>I.key==="Enter"&&fe(),placeholder:"01XXXXXXXXX",inputMode:"numeric",autoComplete:"username",className:ne})]}),n.jsxs("div",{children:[n.jsx("label",{className:re,children:"পাসওয়ার্ড"}),n.jsxs("div",{className:"relative",children:[n.jsx("input",{value:p,onChange:I=>w(I.target.value),onKeyDown:I=>I.key==="Enter"&&fe(),placeholder:"পাসওয়ার্ড",type:h?"text":"password",autoComplete:"current-password",className:`${ne} pr-14`}),n.jsx("button",{type:"button",onClick:()=>x(I=>!I),title:h?"পাসওয়ার্ড লুকান":"পাসওয়ার্ড দেখুন",className:"absolute right-2 top-1/2 -translate-y-1/2 rounded-lg bg-slate-100 px-2 py-1 text-[11px] font-black text-slate-600 hover:bg-slate-200 cursor-pointer",children:h?"লুকান":"দেখুন"})]})]}),n.jsx("button",{type:"button",onClick:fe,disabled:c,className:"mt-1 w-full rounded-xl bg-linear-to-r from-indigo-600 to-blue-600 px-4 py-3 text-sm font-black text-white shadow-md transition hover:from-indigo-700 hover:to-blue-700 disabled:opacity-50 cursor-pointer",children:c?"অপেক্ষা করুন…":"🔓 সাইন ইন করুন"}),Xi&&!pb()&&n.jsxs("div",{className:"rounded-xl border-2 border-rose-300 bg-rose-50 px-3 py-2.5 text-[11px] font-bold leading-relaxed text-rose-800",children:["⚠️ Google লগইন এই ঠিকানায় চলবে না। যথাযথ ঠিকানা:"," ",n.jsx("a",{href:bb,className:"font-black underline",children:bb})," ","— এটা খুলে লগইন করুন।"]}),Xi&&pb()&&n.jsxs("div",{className:"space-y-2",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("div",{className:"h-px flex-1 bg-slate-300"}),n.jsx("span",{className:"text-[10px] font-black text-slate-500",children:"অথবা"}),n.jsx("div",{className:"h-px flex-1 bg-slate-300"})]}),n.jsx("div",{ref:O,className:"flex justify-center"}),n.jsx("p",{className:"text-center text-[10px] font-semibold text-slate-500",children:"🛡️ নতুন Google অ্যাকাউন্টে অ্যাডমিনের অনুমতি লাগবে"})]}),n.jsx("p",{className:"rounded-xl border border-blue-200 bg-blue-50 px-3 py-2 text-[11px] font-semibold leading-relaxed text-blue-900",children:"💡 মোবাইল নম্বরই আপনার ইউজার আইডি। যে অফিসের আইডি দিয়ে ঢুকবেন, সেই অফিসের হিসাবই দেখতে ও লিখতে পারবেন — অন্য অফিসের ডেটা আলাদা থাকবে।"})]}):n.jsxs(n.Fragment,{children:[n.jsxs("div",{children:[n.jsx("label",{className:re,children:"নাম (Name)"}),n.jsx("input",{value:P,onChange:I=>G(I.target.value),placeholder:"আপনার নাম",autoComplete:"name",className:ne})]}),n.jsxs("div",{children:[n.jsx("label",{className:re,children:"মোবাইল নম্বর (Mobile Number) — এটাই ইউজার আইডি"}),n.jsx("input",{value:K,onChange:I=>j(ae(I.target.value)),placeholder:"01XXXXXXXXX",inputMode:"numeric",autoComplete:"username",className:`${ne} ${K&&!ic(K)?"border-rose-400":""}`}),K&&!ic(K)&&n.jsx("p",{className:"mt-1 text-[10px] font-bold text-rose-600",children:"সঠিক মোবাইল নম্বর দিন (কমপক্ষে ৬ ডিজিট)"})]}),n.jsxs("div",{children:[n.jsx("label",{className:re,children:"অফিস / শাখা (Branch)"}),n.jsx("input",{value:z,onChange:I=>ce(I.target.value),placeholder:"যেমন: GOBRA BRANCH-0014 বা নতুন শাখার নাম",list:"branch-list",className:ne}),n.jsx("datalist",{id:"branch-list",children:ue.map(I=>n.jsx("option",{value:I.name},I.id))}),n.jsx("p",{className:"mt-1 text-[10px] font-bold text-slate-500",children:S?`✓ "${S.name}" শাখা আগে থেকেই আছে — সেখানেই যুক্ত হবেন (একই হিসাব)`:"নতুন শাখার নাম লিখলে নতুন অফিস তৈরি হবে — খতিয়ান একদম খালি ও আলাদা থাকবে"})]}),n.jsxs("div",{className:"grid grid-cols-1 gap-3 sm:grid-cols-2",children:[n.jsxs("div",{children:[n.jsx("label",{className:re,children:"পাসওয়ার্ড"}),n.jsx("input",{value:M,onChange:I=>te(I.target.value),placeholder:"কমপক্ষে ৬ অক্ষর",type:h?"text":"password",autoComplete:"new-password",className:ne})]}),n.jsxs("div",{children:[n.jsx("label",{className:re,children:"কনফার্ম পাসওয়ার্ড"}),n.jsx("input",{value:k,onChange:I=>J(I.target.value),onKeyDown:I=>I.key==="Enter"&&B(),placeholder:"আবার লিখুন",type:h?"text":"password",autoComplete:"new-password",className:`${ne} ${k&&k!==M?"border-rose-400":""}`})]})]}),n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("label",{className:"flex cursor-pointer select-none items-center gap-1.5 text-[11px] font-bold text-slate-600",children:[n.jsx("input",{type:"checkbox",checked:h,onChange:I=>x(I.target.checked),className:"h-3.5 w-3.5 cursor-pointer accent-indigo-600"}),"পাসওয়ার্ড দেখান"]}),M&&k&&M===k&&n.jsx("span",{className:"text-[11px] font-black text-emerald-700",children:"✓ মিলেছে"})]}),n.jsx("button",{type:"button",onClick:B,disabled:c,className:"mt-1 w-full rounded-xl bg-linear-to-r from-emerald-600 to-teal-600 px-4 py-3 text-sm font-black text-white shadow-md transition hover:from-emerald-700 hover:to-teal-700 disabled:opacity-50 cursor-pointer",children:c?"অপেক্ষা করুন…":"📝 সাইন আপ করুন"})]}),A&&n.jsxs("div",{className:"rounded-xl border border-rose-300 bg-rose-50 px-3 py-2 text-[11px] font-black text-rose-800",children:["⚠️ ",A]})]})]}),n.jsx("p",{className:"mt-3 text-center text-[10px] font-semibold text-slate-500",children:"প্রতি অফিসের কর্মী, হিসাব, ডে-ক্লোজ ও ক্যাশবুক সম্পূর্ণ আলাদা • ডেটা এই ডিভাইসের ব্রাউজারে ও আপনার Google Sheet-এ সংরক্ষিত হয়"})]})})}function yS(){const[l,o]=b.useState(!1),[u,c]=b.useState(0),[d,A]=b.useState(!1),[f,h]=b.useState([]),[x,L]=b.useState(!1),[y,p]=b.useState(""),[w,P]=b.useState(!1),[G,K]=b.useState([]),[j,z]=b.useState([]),[ce,M]=b.useState(()=>!!mm()),[te,k]=b.useState(""),[J,ue]=b.useState(""),[C,ne]=b.useState(""),[re,ae]=b.useState(""),fe=b.useCallback(async()=>{try{const H=dl(),N=!!(H&&(H.role==="admin"||H.is_super===!0));if(o(N),P((H==null?void 0:H.is_super)===!0||ce),!N&&!ce)return;const oe=await I2();if(N&&!oe.ok)return;if(N&&c(oe.pendingCount||0),d&&((H==null?void 0:H.is_super)===!0||ce)){const R=await Di();R.ok&&h(R.pending)}}catch{}},[d,ce]);b.useEffect(()=>{fe();const H=setInterval(fe,6e4);return()=>clearInterval(H)},[fe]);const pe=async()=>{if(!B())return;const H=await w2();H.ok&&K(H.branches);const N=await E2();N.ok&&z(N.users)},B=()=>!!mm(),O=async()=>{if(A(!0),ue(""),!B())return;const H=await Di();H.ok&&h(H.pending),await pe()},S=async(H,N)=>{L(!0),p("");const oe=f.find(ge=>ge.id===H),R=N?await B2(H,(oe==null?void 0:oe.branch_id)||"gobra"):await H2(H);if(L(!1),!R.ok)return p(R.error||"ব্যর্থ হয়েছে");p(N?"✅ অনুমতি দেওয়া হয়েছে":"❌ বাধা দেওয়া হয়েছে"),setTimeout(()=>p(""),2500);const $=await Di();$.ok&&h($.pending),c(R.pendingCount??Math.max(0,u-1)),await pe()},I=async H=>{const N=dl();if(String(H.mobile||"")===String((N==null?void 0:N.mobile)||"")||H.email&&H.email===(N==null?void 0:N.email))return p("নিজের অ্যাকাউন্ট এভাবে মোছা যায় না।");if(!window.confirm(`🗑️ "${H.name}" (${H.mobile||H.email||"—"}) — স্থায়ীভাবে মুছে ফেলবেন?`))return;L(!0),p("");const oe=await C2(H.id);L(!1),p(oe.ok?"🗑️ মুছে ফেলা হয়েছে":oe.error||"ব্যর্থ হয়েছে"),setTimeout(()=>p(""),2500);const R=await Di();R.ok&&h(R.pending),await pe()},q=H=>{const N=dl();N&&($i(String(N.mobile||N.email||"user"),H,{name:N.name}),h2(H))},ee=async()=>{L(!0),ue("");const H=await M2(te.trim());if(L(!1),!H.ok)return ue(H.error||"পাসওয়ার্ড মিলছে না।");M(!0),P(!0),k(""),c(H.pendingCount??0),await pe()},U=async()=>{if(re.trim().length<6)return p("নতুন পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে।");L(!0),p("");const H=await k2(C.trim(),re.trim());if(L(!1),!H.ok)return p(H.error||"ব্যর্থ হয়েছে");p(H.message||"🔑 পাসওয়ার্ড বদলে গেছে"),ne(""),ae(""),setTimeout(()=>p(""),2500)};return n.jsxs(n.Fragment,{children:[n.jsxs("button",{type:"button",onClick:O,title:"লগইন অনুমতির অনুরোধ",className:"fixed bottom-20 right-3 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-indigo-300 bg-white text-lg shadow-xl hover:bg-indigo-50 cursor-pointer",children:["🔔",l&&u>0&&n.jsx("span",{className:"absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-rose-600 px-1 text-[10px] font-black text-white",children:u})]}),d&&n.jsx("div",{className:"fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-slate-900/50 p-3",onClick:()=>A(!1),children:n.jsxs("div",{className:"w-full max-w-md rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl",onClick:H=>H.stopPropagation(),children:[n.jsxs("div",{className:"mb-3 flex items-center justify-between border-b border-slate-100 pb-2",children:[n.jsx("h2",{className:"text-sm font-black text-slate-900",children:"🔔 লগইন অনুমতির অনুরোধ"}),n.jsx("button",{type:"button",onClick:()=>A(!1),className:"rounded px-2 text-lg font-black text-slate-400 hover:text-slate-700 cursor-pointer",children:"✕"})]}),B()?n.jsxs(n.Fragment,{children:[y&&n.jsx("div",{className:"mb-2 rounded-lg bg-indigo-50 px-3 py-2 text-[11px] font-black text-indigo-800",children:y}),f.length===0?n.jsx("div",{className:"py-6 text-center text-sm font-semibold text-slate-400",children:"✓ কোনো অনুরোধ অপেক্ষা করছে না"}):n.jsx("div",{className:"max-h-80 space-y-2 overflow-auto",children:f.map(H=>n.jsxs("div",{className:"rounded-xl border border-slate-200 bg-slate-50 p-3",children:[n.jsx("div",{className:"mb-1 text-sm font-black text-slate-900",children:H.name}),n.jsxs("div",{className:"mb-2 text-[11px] font-semibold text-slate-500",children:[H.email||H.mobile||"—"," • 🏢 ",H.branch_id||"gobra"," • ",new Date(H.created_at).toLocaleDateString("en-GB")]}),n.jsxs("div",{className:"flex gap-2",children:[n.jsx("button",{type:"button",disabled:x,onClick:()=>S(H.id,!0),className:"flex-1 rounded-lg bg-emerald-600 px-3 py-1.5 text-[11px] font-black text-white hover:bg-emerald-700 disabled:opacity-50 cursor-pointer",children:"✅ অনুমতি দিন"}),n.jsx("button",{type:"button",disabled:x,onClick:()=>S(H.id,!1),className:"flex-1 rounded-lg bg-rose-600 px-3 py-1.5 text-[11px] font-black text-white hover:bg-rose-700 disabled:opacity-50 cursor-pointer",children:"❌ বাধা দিন"})]})]},H.id))}),(w||ce)&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"mt-3 border-t border-slate-200 pt-2",children:[n.jsxs("div",{className:"mb-1 text-[11px] font-black text-slate-600",children:["🏢 অফিসসমূহ ",n.jsx("span",{className:"font-semibold text-slate-400",children:"(🔁 প্রবেশ = ওই অফিসে এক ক্লিকে চলে যাওয়া)"})]}),n.jsxs("div",{className:"max-h-28 space-y-1 overflow-auto",children:[G.length===0&&n.jsx("div",{className:"text-[11px] font-semibold text-slate-400",children:"…"}),G.map(H=>{var N,oe;return n.jsxs("div",{className:"flex items-center justify-between gap-2 rounded-lg border border-slate-200 bg-white px-2 py-1.5",children:[n.jsxs("div",{className:"text-[11px] font-black text-slate-800",children:["🏢 ",H.branch_id,H.branch_id===(((N=dl())==null?void 0:N.branchId)||"gobra")&&n.jsx("span",{className:"ml-1 rounded bg-emerald-100 px-1 text-[9px] font-black text-emerald-700",children:"এখানে আছেন"}),n.jsxs("span",{className:"ml-1 text-[10px] font-semibold text-slate-400",children:["ইউজার ×",H.users]})]}),n.jsx("button",{type:"button",disabled:x||H.branch_id===(((oe=dl())==null?void 0:oe.branchId)||"gobra"),onClick:()=>q(H.branch_id),className:"rounded-md bg-indigo-600 px-2 py-0.5 text-[10px] font-black text-white hover:bg-indigo-700 disabled:opacity-40 cursor-pointer",children:"🔁 প্রবেশ"})]},H.branch_id)})]})]}),n.jsxs("div",{className:"mt-2 border-t border-slate-200 pt-2",children:[n.jsxs("div",{className:"mb-1 text-[11px] font-black text-slate-600",children:["👥 সব ইউজার ",n.jsx("span",{className:"font-semibold text-slate-400",children:"(ভুল তৈরি হলে 🗑️ মুছুন)"})]}),n.jsxs("div",{className:"max-h-44 space-y-1 overflow-auto",children:[j.length===0&&n.jsx("div",{className:"text-[11px] font-semibold text-slate-400",children:"…"}),j.map(H=>{var R,$;const N=String(H.mobile||"")===String(((R=dl())==null?void 0:R.mobile)||"")||H.email!=null&&H.email===(($=dl())==null?void 0:$.email),oe=H.status==="pending"?"⏳অপেক্ষায়":H.status==="rejected"?"❌বাদ":H.role==="admin"?"অ্যাডমিন":"সদস্য";return n.jsxs("div",{className:"flex items-center justify-between gap-2 rounded-lg border border-slate-200 bg-white px-2 py-1.5",children:[n.jsxs("div",{className:"min-w-0 text-[11px]",children:[n.jsx("span",{className:"font-black text-slate-800",children:H.name}),H.is_super===!0&&n.jsx("span",{title:"মালিক",children:" ⭐"}),N&&n.jsx("span",{className:"ml-1 rounded bg-slate-200 px-1 text-[9px] font-black text-slate-600",children:"আপনি"}),n.jsxs("div",{className:"truncate text-[10px] font-semibold text-slate-500",children:[H.mobile||H.email||"—"," • 🏢",H.branch_id," • ",oe]})]}),!N&&n.jsx("button",{type:"button",disabled:x,onClick:()=>I(H),title:"স্থায়ীভাবে মুছুন",className:"rounded-md bg-rose-600 px-2 py-0.5 text-[10px] font-black text-white hover:bg-rose-700 disabled:opacity-40 cursor-pointer",children:"🗑️"})]},H.id)})]})]})]}),(w||ce)&&n.jsx(n.Fragment,{children:n.jsxs("div",{className:"mt-2 border-t border-slate-200 pt-2",children:[n.jsx("div",{className:"mb-1 text-[11px] font-black text-slate-600",children:"🔑 অ্যাডমিন-পাসওয়ার্ড বদলান"}),n.jsxs("div",{className:"flex gap-1.5",children:[n.jsx("input",{type:"password",value:C,onChange:H=>ne(H.target.value),placeholder:"আগের পাসওয়ার্ড",className:"min-w-0 flex-1 rounded-lg border border-slate-300 px-2 py-1.5 text-[11px] font-bold"}),n.jsx("input",{type:"password",value:re,onChange:H=>ae(H.target.value),placeholder:"নতুন (৬+ অক্ষর)",className:"min-w-0 flex-1 rounded-lg border border-slate-300 px-2 py-1.5 text-[11px] font-bold"}),n.jsx("button",{type:"button",disabled:x||!C.trim()||!re.trim(),onClick:U,className:"rounded-lg bg-slate-800 px-2.5 py-1.5 text-[10px] font-black text-white hover:bg-slate-900 disabled:opacity-40 cursor-pointer",children:"বদলান"})]})]})})]}):n.jsxs("div",{className:"py-2",children:[n.jsx("div",{className:"mb-2 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-[11px] font-bold leading-relaxed text-amber-800",children:"🔐 এটা অ্যাডমিন-প্যানেল — খুলতে অ্যাডমিন-পাসওয়ার্ড দিন।"}),n.jsxs("div",{className:"flex gap-2",children:[n.jsx("input",{type:"password",value:te,onChange:H=>k(H.target.value),onKeyDown:H=>{H.key==="Enter"&&ee()},placeholder:"অ্যাডমিন-পাসওয়ার্ড",className:"min-w-0 flex-1 rounded-lg border border-slate-300 px-3 py-2 text-sm font-bold"}),n.jsx("button",{type:"button",disabled:x||!te.trim(),onClick:ee,className:"rounded-lg bg-indigo-600 px-4 py-2 text-xs font-black text-white hover:bg-indigo-700 disabled:opacity-50 cursor-pointer",children:"খুলুন"})]}),J&&n.jsx("div",{className:"mt-2 text-[11px] font-black text-rose-600",children:J})]})]})})]})}function NS(){const[l,o]=b.useState(()=>Wm()),[u,c]=b.useState("receive"),[d,A]=b.useState(!1),[f,h]=b.useState(!1),[x,L]=b.useState(!1),[y,p]=b.useState(!1),[w,P]=b.useState(!1),[G,K]=b.useState(()=>{try{const te=localStorage.getItem("app_master_date");if(te&&te.includes("-"))return te}catch{}return xa()}),j=te=>{const k=te||xa();K(k);try{localStorage.setItem("app_master_date",k)}catch{}};if(b.useEffect(()=>{gc().catch(()=>{})},[]),b.useEffect(()=>{if(l&&(GR(),ir())){SR();const te=RR(),k=D5();(te||k)&&console.log(`🧹 টেস্ট ডেটা পরিষ্কার — সদস্য: ${te}, চেক-এন্ট্রি: ${k}`)}},[l==null?void 0:l.userId,l==null?void 0:l.branchId]),b.useEffect(()=>{try{const re=localStorage.getItem("app_master_date");re&&re.includes("-")&&re!==G&&K(re)}catch{}const te=()=>A(!0),k=()=>h(!0),J=()=>L(!0),ue=()=>p(!0),C=re=>{const ae=re.detail;typeof ae=="string"&&ae&&(c(ae),window.scrollTo({top:0,behavior:"smooth"}))};window.addEventListener("open-date-tracker",te),window.addEventListener("open-day-open-modal",k),window.addEventListener("open-day-close-modal",J),window.addEventListener("open-day-admin",ue),window.addEventListener("navigate-tab",C);const ne=()=>P(!0);return window.addEventListener("app-update-available",ne),()=>{window.removeEventListener("open-date-tracker",te),window.removeEventListener("open-day-open-modal",k),window.removeEventListener("open-day-close-modal",J),window.removeEventListener("open-day-admin",ue),window.removeEventListener("navigate-tab",C),window.removeEventListener("app-update-available",ne)}},[]),!l)return n.jsx(SS,{onAuthed:te=>{cr(te.branchId),o(te),window.location.reload()}});const z=R5(),ce=pc(),M=()=>{window.confirm("সাইন আউট করবেন? আবার ঢুকতে ইউজার আইডি (মোবাইল নম্বর) ও পাসওয়ার্ড লাগবে।")&&(S5(),Ob(),window.location.reload())};return n.jsxs("div",{className:"app-bg min-h-screen text-slate-900 font-sans antialiased pb-16 lg:pb-4  // v1.4.162: ফ্লোটিং-মেনুস্থলে বার নেই — প্যাডিং কিছুটা সরহ lg:pl-60 print:p-0 print:m-0 print:pl-0 print:pb-0 print:bg-white",children:[n.jsx(yS,{}),n.jsxs("main",{className:"mx-auto max-w-6xl px-3 sm:px-4 pt-3 sm:pt-5 print:p-0 print:max-w-none",children:[n.jsxs("div",{className:"print:hidden mb-2 flex flex-wrap items-center justify-between gap-2 rounded-xl border border-slate-200 bg-white/80 px-3 py-1.5 text-[11px] font-bold text-slate-700 shadow-xs",children:[n.jsxs("span",{className:"flex items-center gap-1.5",children:[n.jsx("span",{children:"🏢"}),n.jsx("span",{className:"font-black text-indigo-800",children:ce})]}),n.jsxs("span",{className:"lg:hidden flex items-center gap-1",children:[n.jsx("span",{className:"w-28 text-slate-900",children:n.jsx(xn,{value:G,onChange:j,className:"w-full rounded-lg border border-slate-300 bg-white px-2 py-1 text-[11px] font-bold shadow-xs",onOpenTracker:()=>A(!0)})}),G!==xa()&&n.jsx("button",{type:"button",onClick:()=>j(xa()),title:"আজকের তারিখে ফিরুন",className:"rounded-md border border-sky-300 bg-sky-50 px-1 py-[7px] text-[10px] font-black text-sky-700 shadow-xs transition active:scale-95 cursor-pointer",children:"📆"})]}),n.jsxs("span",{className:"flex items-center gap-2",children:[n.jsxs("span",{className:"text-slate-600",children:["👤 ",z?`${z.name} • ${z.mobile}`:l.userId]}),n.jsx("button",{type:"button",onClick:M,title:"সাইন আউট করুন",className:"rounded-lg border border-rose-300 bg-rose-50 px-2 py-1 text-[10px] font-black text-rose-700 transition hover:bg-rose-100 cursor-pointer",children:"🚪 লগআউট"})]})]}),n.jsx(rS,{}),n.jsx("div",{className:"print:hidden",children:n.jsx(oS,{selectedDate:G,onSelectDate:j,onOpenTracker:()=>A(!0)})}),u!=="cashbook"&&u!=="entertainment"&&u!=="check"&&n.jsx("div",{className:"print:hidden",children:n.jsx(cS,{selectedDate:G,onOpenDayModal:()=>h(!0)})}),(u==="receive"||u==="payment")&&n.jsx("div",{className:"print:hidden",children:n.jsx(l5,{selectedDate:G})}),u==="receive"&&n.jsx(u5,{selectedDate:G}),u==="payment"&&n.jsx(A5,{selectedDate:G}),u==="entertainment"&&n.jsx(x5,{}),u==="report"&&n.jsx(O5,{selectedDate:G}),u==="cashbook"&&n.jsx(C5,{selectedDate:G,setSelectedDate:j}),u==="check"&&n.jsx(tS,{selectedDate:G})]}),w&&n.jsx("div",{className:"fixed bottom-20 left-1/2 z-[60] -translate-x-1/2 print:hidden",children:n.jsxs("div",{className:"flex items-center gap-2.5 rounded-2xl bg-slate-900 px-4 py-2.5 text-white shadow-2xl border border-slate-700",children:[n.jsx("span",{className:"text-lg",children:"🔄"}),n.jsxs("div",{className:"text-[11px] leading-tight",children:[n.jsx("div",{className:"font-black",children:"নতুন ভার্সন এসেছে"}),n.jsxs("div",{className:"text-slate-300",children:["সবচেয়ে নতুন আপডেট দেখতে রিফ্রেশ করুন (v",Bm,")"]})]}),n.jsx("button",{type:"button",onClick:()=>gp(),className:"rounded-xl bg-emerald-600 hover:bg-emerald-500 px-3 py-1.5 text-[11px] font-black transition cursor-pointer",children:"এখনই রিফ্রেশ"}),n.jsx("button",{type:"button",onClick:()=>{pS(),P(!1)},className:"text-slate-400 hover:text-white text-sm font-bold px-1 cursor-pointer",children:"✕"})]})}),n.jsx(iS,{isOpen:d,onClose:()=>A(!1),selectedDate:G,onSelectDate:j}),n.jsx(uS,{isOpen:f,onClose:()=>h(!1),selectedDate:G}),n.jsx(AS,{isOpen:x,onClose:()=>L(!1),selectedDate:G}),n.jsx(hS,{isOpen:y,onClose:()=>p(!1),onJumpDate:te=>{j(te),c("receive"),p(!1),window.scrollTo({top:0,behavior:"smooth"})}}),n.jsx("div",{className:"print:hidden",children:n.jsx(lS,{currentTab:u,onTabChange:c,selectedDate:G,onDateChange:j,onOpenTracker:()=>A(!0)})})]})}const vS="input:not([type=hidden]):not([type=checkbox]):not([type=radio]):not([type=button]):not([type=submit]):not([type=file]):not([type=range]):not([type=color]):not([type=reset]):not([type=image]):not(disabled)",Rp=l=>{if(!l||!(l instanceof HTMLInputElement)||["checkbox","radio","button","submit","file","hidden","range","color","image","reset"].includes((l.type||"text").toLowerCase())||l.disabled)return!1;try{return getComputedStyle(l).display!=="none"}catch{return!0}},LS=(l=document)=>Array.from(l.querySelectorAll(vS)).filter(Rp),OS=l=>{var o;return!!((o=l.closest("div.relative"))!=null&&o.querySelector(":scope > div.absolute"))};function jS(l=document){const o=globalThis;o.__FIELD_NAV_INSTALLED||(o.__FIELD_NAV_INSTALLED=!0,l.addEventListener("keydown",u=>{var p;if(u.ctrlKey||u.altKey||u.metaKey)return;const c=u.key,d=u.target instanceof HTMLInputElement?u.target:null;if(!d||!Rp(d))return;let A=0;if(c==="Enter"||c==="ArrowDown")A=1;else if(c==="ArrowUp")A=-1;else if(c==="ArrowRight"||c==="ArrowLeft"){let w=!1,P=!1;try{const G=(d.value||"").length,K=d.selectionStart,j=d.selectionEnd;K==null||j==null?(w=!0,P=!0):(w=K===0&&j===0,P=K===G&&j===G)}catch{w=!0,P=!0}if(c==="ArrowRight"&&P)A=1;else if(c==="ArrowLeft"&&w)A=-1;else return}else return;if(OS(d))return;const h=d.closest(".fixed")||l,x=LS(h),L=x.indexOf(d);if(L<0)return;const y=x[L+A];if(y){u.preventDefault(),y.focus();try{(p=y.select)==null||p.call(y)}catch{}}}))}try{const l=Wm();ph(l==null?void 0:l.branchId)}catch{ph()}gc().catch(()=>{});m2.createRoot(document.getElementById("root")).render(n.jsx(b.StrictMode,{children:n.jsx(NS,{})}));gS(()=>{window.dispatchEvent(new CustomEvent("app-update-available"))});jS();export{fo as _,IS as c,n2 as g};
