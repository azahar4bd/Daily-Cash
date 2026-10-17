(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))c(d);new MutationObserver(d=>{for(const f of d)if(f.type==="childList")for(const A of f.addedNodes)A.tagName==="LINK"&&A.rel==="modulepreload"&&c(A)}).observe(document,{childList:!0,subtree:!0});function u(d){const f={};return d.integrity&&(f.integrity=d.integrity),d.referrerPolicy&&(f.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?f.credentials="include":d.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function c(d){if(d.ep)return;d.ep=!0;const f=u(d);fetch(d.href,f)}})();var vS=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function e2(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var Gd={exports:{}},Wr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ah;function t2(){if(ah)return Wr;ah=1;var l=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function u(c,d,f){var A=null;if(f!==void 0&&(A=""+f),d.key!==void 0&&(A=""+d.key),"key"in d){f={};for(var b in d)b!=="key"&&(f[b]=d[b])}else f=d;return d=f.ref,{$$typeof:l,type:c,key:A,ref:d!==void 0?d:null,props:f}}return Wr.Fragment=o,Wr.jsx=u,Wr.jsxs=u,Wr}var sh;function n2(){return sh||(sh=1,Gd.exports=t2()),Gd.exports}var n=n2(),Kd={exports:{}},Ue={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lh;function a2(){if(lh)return Ue;lh=1;var l=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),A=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),L=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),H=Symbol.for("react.view_transition"),D=Symbol.iterator;function T(x){return x===null||typeof x!="object"?null:(x=D&&x[D]||x["@@iterator"],typeof x=="function"?x:null)}var Z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O=Object.assign,G={};function ce(x,Q,Re){this.props=x,this.context=Q,this.refs=G,this.updater=Re||Z}ce.prototype.isReactComponent={},ce.prototype.setState=function(x,Q){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,Q,"setState")},ce.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function K(){}K.prototype=ce.prototype;function ee(x,Q,Re){this.props=x,this.context=Q,this.refs=G,this.updater=Re||Z}var C=ee.prototype=new K;C.constructor=ee,O(C,ce.prototype),C.isPureReactComponent=!0;var V=Array.isArray;function re(){}var B={H:null,A:null,T:null,S:null},se=Object.prototype.hasOwnProperty;function ie(x,Q,Re){var ge=Re.ref;return{$$typeof:l,type:x,key:Q,ref:ge!==void 0?ge:null,props:Re}}function te(x,Q){return ie(x.type,Q,x.props)}function ue(x){return typeof x=="object"&&x!==null&&x.$$typeof===l}function be(x){var Q={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(Re){return Q[Re]})}var E=/\/+/g;function w(x,Q){return typeof x=="object"&&x!==null&&x.key!=null?be(""+x.key):Q.toString(36)}function p(x){switch(x.status){case"fulfilled":return x.value;case"rejected":throw x.reason;default:switch(typeof x.status=="string"?x.then(re,re):(x.status="pending",x.then(function(Q){x.status==="pending"&&(x.status="fulfilled",x.value=Q)},function(Q){x.status==="pending"&&(x.status="rejected",x.reason=Q)})),x.status){case"fulfilled":return x.value;case"rejected":throw x.reason}}throw x}function N(x,Q,Re,ge,Ne){var He=typeof x;(He==="undefined"||He==="boolean")&&(x=null);var pe=!1;if(x===null)pe=!0;else switch(He){case"bigint":case"string":case"number":pe=!0;break;case"object":switch(x.$$typeof){case l:case o:pe=!0;break;case y:return pe=x._init,N(pe(x._payload),Q,Re,ge,Ne)}}if(pe)return Ne=Ne(x),pe=ge===""?"."+w(x,0):ge,V(Ne)?(Re="",pe!=null&&(Re=pe.replace(E,"$&/")+"/"),N(Ne,Q,Re,"",function(ye){return ye})):Ne!=null&&(ue(Ne)&&(Ne=te(Ne,Re+(Ne.key==null||x&&x.key===Ne.key?"":(""+Ne.key).replace(E,"$&/")+"/")+pe)),Q.push(Ne)),1;pe=0;var he=ge===""?".":ge+":";if(V(x))for(var ae=0;ae<x.length;ae++)ge=x[ae],He=he+w(ge,ae),pe+=N(ge,Q,Re,He,Ne);else if(ae=T(x),typeof ae=="function")for(x=ae.call(x),ae=0;!(ge=x.next()).done;)ge=ge.value,He=he+w(ge,ae++),pe+=N(ge,Q,Re,He,Ne);else if(He==="object"){if(typeof x.then=="function")return N(p(x),Q,Re,ge,Ne);throw Q=String(x),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.")}return pe}function P(x,Q,Re){if(x==null)return x;var ge=[],Ne=0;return N(x,ge,"","",function(He){return Q.call(Re,He,Ne++)}),ge}function W(x){if(x._status===-1){var Q=x._result,Re=Q();Re.then(function(ge){(x._status===0||x._status===-1)&&(x._status=1,x._result=ge,Re.status===void 0&&(Re.status="fulfilled",Re.value=ge))},function(ge){(x._status===0||x._status===-1)&&(x._status=2,x._result=ge,Re.status===void 0&&(Re.status="rejected",Re.reason=ge))}),x._status===-1&&(x._status=0,x._result=Re)}if(x._status===1)return x._result.default;throw x._result}var F=typeof reportError=="function"?reportError:function(x){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof x=="object"&&x!==null&&typeof x.message=="string"?String(x.message):String(x),error:x});if(!window.dispatchEvent(Q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",x);return}console.error(x)};function U(x){var Q=B.T,Re={};Re.types=Q!==null?Q.types:null,B.T=Re;try{var ge=x(),Ne=B.S;Ne!==null&&Ne(Re,ge),typeof ge=="object"&&ge!==null&&typeof ge.then=="function"&&ge.then(re,F)}catch(He){F(He)}finally{Q!==null&&Re.types!==null&&(Q.types=Re.types),B.T=Q}}function j(x){var Q=B.T;if(Q!==null){var Re=Q.types;Re===null?Q.types=[x]:Re.indexOf(x)===-1&&Re.push(x)}else U(j.bind(null,x))}var _={map:P,forEach:function(x,Q,Re){P(x,function(){Q.apply(this,arguments)},Re)},count:function(x){var Q=0;return P(x,function(){Q++}),Q},toArray:function(x){return P(x,function(Q){return Q})||[]},only:function(x){if(!ue(x))throw Error("React.Children.only expected to receive a single React element child.");return x}};return Ue.Activity=g,Ue.Children=_,Ue.Component=ce,Ue.Fragment=u,Ue.Profiler=d,Ue.PureComponent=ee,Ue.StrictMode=c,Ue.Suspense=h,Ue.ViewTransition=H,Ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,Ue.__COMPILER_RUNTIME={__proto__:null,c:function(x){return B.H.useMemoCache(x)}},Ue.addTransitionType=j,Ue.cache=function(x){return function(){return x.apply(null,arguments)}},Ue.cacheSignal=function(){return null},Ue.cloneElement=function(x,Q,Re){if(x==null)throw Error("The argument must be a React element, but you passed "+x+".");var ge=O({},x.props),Ne=x.key;if(Q!=null)for(He in Q.key!==void 0&&(Ne=""+Q.key),Q)!se.call(Q,He)||He==="key"||He==="__self"||He==="__source"||He==="ref"&&Q.ref===void 0||(ge[He]=Q[He]);var He=arguments.length-2;if(He===1)ge.children=Re;else if(1<He){for(var pe=Array(He),he=0;he<He;he++)pe[he]=arguments[he+2];ge.children=pe}return ie(x.type,Ne,ge)},Ue.createContext=function(x){return x={$$typeof:A,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null},x.Provider=x,x.Consumer={$$typeof:f,_context:x},x},Ue.createElement=function(x,Q,Re){var ge,Ne={},He=null;if(Q!=null)for(ge in Q.key!==void 0&&(He=""+Q.key),Q)se.call(Q,ge)&&ge!=="key"&&ge!=="__self"&&ge!=="__source"&&(Ne[ge]=Q[ge]);var pe=arguments.length-2;if(pe===1)Ne.children=Re;else if(1<pe){for(var he=Array(pe),ae=0;ae<pe;ae++)he[ae]=arguments[ae+2];Ne.children=he}if(x&&x.defaultProps)for(ge in pe=x.defaultProps,pe)Ne[ge]===void 0&&(Ne[ge]=pe[ge]);return ie(x,He,Ne)},Ue.createRef=function(){return{current:null}},Ue.forwardRef=function(x){return{$$typeof:b,render:x}},Ue.isValidElement=ue,Ue.lazy=function(x){return{$$typeof:y,_payload:{_status:-1,_result:x},_init:W}},Ue.memo=function(x,Q){return{$$typeof:L,type:x,compare:Q===void 0?null:Q}},Ue.startTransition=U,Ue.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},Ue.use=function(x){return B.H.use(x)},Ue.useActionState=function(x,Q,Re){return B.H.useActionState(x,Q,Re)},Ue.useCallback=function(x,Q){return B.H.useCallback(x,Q)},Ue.useContext=function(x){return B.H.useContext(x)},Ue.useDebugValue=function(){},Ue.useDeferredValue=function(x,Q){return B.H.useDeferredValue(x,Q)},Ue.useEffect=function(x,Q){return B.H.useEffect(x,Q)},Ue.useEffectEvent=function(x){return B.H.useEffectEvent(x)},Ue.useId=function(){return B.H.useId()},Ue.useImperativeHandle=function(x,Q,Re){return B.H.useImperativeHandle(x,Q,Re)},Ue.useInsertionEffect=function(x,Q){return B.H.useInsertionEffect(x,Q)},Ue.useLayoutEffect=function(x,Q){return B.H.useLayoutEffect(x,Q)},Ue.useMemo=function(x,Q){return B.H.useMemo(x,Q)},Ue.useOptimistic=function(x,Q){return B.H.useOptimistic(x,Q)},Ue.useReducer=function(x,Q,Re){return B.H.useReducer(x,Q,Re)},Ue.useRef=function(x){return B.H.useRef(x)},Ue.useState=function(x){return B.H.useState(x)},Ue.useSyncExternalStore=function(x,Q,Re){return B.H.useSyncExternalStore(x,Q,Re)},Ue.useTransition=function(){return B.H.useTransition()},Ue.version="19.3.0",Ue}var rh;function Lm(){return rh||(rh=1,Kd.exports=a2()),Kd.exports}var R=Lm();const s2=e2(R);var Pd={exports:{}},eo={},_d={exports:{}},Zd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oh;function l2(){return oh||(oh=1,(function(l){function o(p,N){var P=p.length;p.push(N);e:for(;0<P;){var W=P-1>>>1,F=p[W];if(0<d(F,N))p[W]=N,p[P]=F,P=W;else break e}}function u(p){return p.length===0?null:p[0]}function c(p){if(p.length===0)return null;var N=p[0],P=p.pop();if(P!==N){p[0]=P;e:for(var W=0,F=p.length,U=F>>>1;W<U;){var j=2*(W+1)-1,_=p[j],x=j+1,Q=p[x];if(0>d(_,P))x<F&&0>d(Q,_)?(p[W]=Q,p[x]=P,W=x):(p[W]=_,p[j]=P,W=j);else if(x<F&&0>d(Q,P))p[W]=Q,p[x]=P,W=x;else break e}}return N}function d(p,N){var P=p.sortIndex-N.sortIndex;return P!==0?P:p.id-N.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;l.unstable_now=function(){return f.now()}}else{var A=Date,b=A.now();l.unstable_now=function(){return A.now()-b}}var h=[],L=[],y=1,g=null,H=3,D=!1,T=!1,Z=!1,O=!1,G=typeof setTimeout=="function"?setTimeout:null,ce=typeof clearTimeout=="function"?clearTimeout:null,K=typeof setImmediate<"u"?setImmediate:null;function ee(p){for(var N=u(L);N!==null;){if(N.callback===null)c(L);else if(N.startTime<=p)c(L),N.sortIndex=N.expirationTime,o(h,N);else break;N=u(L)}}function C(p){if(Z=!1,ee(p),!T)if(u(h)!==null)T=!0,V||(V=!0,ue());else{var N=u(L);N!==null&&w(C,N.startTime-p)}}var V=!1,re=-1,B=5,se=-1;function ie(){return O?!0:!(l.unstable_now()-se<B)}function te(){if(O=!1,V){var p=l.unstable_now();se=p;var N=!0;try{e:{T=!1,Z&&(Z=!1,ce(re),re=-1),D=!0;var P=H;try{t:{for(ee(p),g=u(h);g!==null&&!(g.expirationTime>p&&ie());){var W=g.callback;if(typeof W=="function"){g.callback=null,H=g.priorityLevel;var F=W(g.expirationTime<=p);if(p=l.unstable_now(),typeof F=="function"){g.callback=F,ee(p),N=!0;break t}g===u(h)&&c(h),ee(p)}else c(h);g=u(h)}if(g!==null)N=!0;else{var U=u(L);U!==null&&w(C,U.startTime-p),N=!1}}break e}finally{g=null,H=P,D=!1}N=void 0}}finally{N?ue():V=!1}}}var ue;if(typeof K=="function")ue=function(){K(te)};else if(typeof MessageChannel<"u"){var be=new MessageChannel,E=be.port2;be.port1.onmessage=te,ue=function(){E.postMessage(null)}}else ue=function(){G(te,0)};function w(p,N){re=G(function(){p(l.unstable_now())},N)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(p){p.callback=null},l.unstable_forceFrameRate=function(p){0>p||125<p?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<p?Math.floor(1e3/p):5},l.unstable_getCurrentPriorityLevel=function(){return H},l.unstable_next=function(p){switch(H){case 1:case 2:case 3:var N=3;break;default:N=H}var P=H;H=N;try{return p()}finally{H=P}},l.unstable_requestPaint=function(){O=!0},l.unstable_runWithPriority=function(p,N){switch(p){case 1:case 2:case 3:case 4:case 5:break;default:p=3}var P=H;H=p;try{return N()}finally{H=P}},l.unstable_scheduleCallback=function(p,N,P){var W=l.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?W+P:W):P=W,p){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=P+F,p={id:y++,callback:N,priorityLevel:p,startTime:P,expirationTime:F,sortIndex:-1},P>W?(p.sortIndex=P,o(L,p),u(h)===null&&p===u(L)&&(Z?(ce(re),re=-1):Z=!0,w(C,P-W))):(p.sortIndex=F,o(h,p),T||D||(T=!0,V||(V=!0,ue()))),p},l.unstable_shouldYield=ie,l.unstable_wrapCallback=function(p){var N=H;return function(){var P=H;H=N;try{return p.apply(this,arguments)}finally{H=P}}}})(Zd)),Zd}var ih;function r2(){return ih||(ih=1,_d.exports=l2()),_d.exports}var zd={exports:{}},hn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ch;function o2(){if(ch)return hn;ch=1;var l=Lm();function o(y){var g="https://react.dev/errors/"+y;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var H=2;H<arguments.length;H++)g+="&args[]="+encodeURIComponent(arguments[H])}return"Minified React error #"+y+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(){}var c={d:{f:u,r:function(){throw Error(o(522))},D:u,C:u,L:u,m:u,X:u,S:u,M:u},p:0,findDOMNode:null},d=Symbol.for("react.portal"),f=Symbol.for("react.recoverable"),A=Symbol.for("react.optimistic_key");function b(y,g,H){var D=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:D==null?null:D===A?A:""+D,children:y,containerInfo:g,implementation:H}}var h=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function L(y,g){if(y==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return hn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,hn.browser=function(y){return{$$typeof:f,_reason:y}},hn.createPortal=function(y,g){var H=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(o(299));return b(y,g,null,H)},hn.flushSync=function(y){var g=h.T,H=c.p;try{if(h.T=null,c.p=2,y)return y()}finally{h.T=g,c.p=H,c.d.f()}},hn.preconnect=function(y,g){typeof y=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,c.d.C(y,g))},hn.prefetchDNS=function(y){typeof y=="string"&&c.d.D(y)},hn.preinit=function(y,g){if(typeof y=="string"&&g&&typeof g.as=="string"){var H=g.as,D=L(H,g.crossOrigin),T=typeof g.integrity=="string"?g.integrity:void 0,Z=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;H==="style"?c.d.S(y,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:D,integrity:T,fetchPriority:Z}):H==="script"&&c.d.X(y,{crossOrigin:D,integrity:T,fetchPriority:Z,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},hn.preinitModule=function(y,g){if(typeof y=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var H=L(g.as,g.crossOrigin);c.d.M(y,{crossOrigin:H,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}}else g==null&&c.d.M(y)},hn.preload=function(y,g){if(typeof y=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var H=g.as,D=L(H,g.crossOrigin);c.d.L(y,H,{crossOrigin:D,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},hn.preloadModule=function(y,g){if(typeof y=="string")if(g){var H=L(g.as,g.crossOrigin);c.d.m(y,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:H,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}else c.d.m(y)},hn.requestFormReset=function(y){c.d.r(y)},hn.unstable_batchedUpdates=function(y,g){return y(g)},hn.useFormState=function(y,g,H){return h.H.useFormState(y,g,H)},hn.useFormStatus=function(){return h.H.useHostTransitionStatus()},hn.version="19.3.0",hn}var uh;function hb(){if(uh)return zd.exports;uh=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(o){console.error(o)}}return l(),zd.exports=o2(),zd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dh;function i2(){if(dh)return eo;dh=1;var l=r2(),o=Lm(),u=hb();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){for(var t=e,a=t;a&&!a.alternate;)t=a,(t.flags&4098)!==0&&(e=t.return),a=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function A(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function b(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function h(e){if(f(e)!==e)throw Error(c(188))}function L(e){var t=e.alternate;if(!t){if(t=f(e),t===null)throw Error(c(188));return t!==e?null:e}for(var a=e,s=t;;){var r=a.return;if(r===null)break;var i=r.alternate;if(i===null){if(s=r.return,s!==null){a=s;continue}break}if(r.child===i.child){for(i=r.child;i;){if(i===a)return h(r),e;if(i===s)return h(r),t;i=i.sibling}throw Error(c(188))}if(a.return!==s.return)a=r,s=i;else{for(var m=!1,S=r.child;S;){if(S===a){m=!0,a=r,s=i;break}if(S===s){m=!0,s=r,a=i;break}S=S.sibling}if(!m){for(S=i.child;S;){if(S===a){m=!0,a=i,s=r;break}if(S===s){m=!0,s=i,a=r;break}S=S.sibling}if(!m)throw Error(c(189))}}if(a.alternate!==s)throw Error(c(190))}if(a.tag!==3)throw Error(c(188));return a.stateNode.current===a?e:t}function y(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=y(e),t!==null)return t;e=e.sibling}return null}function g(e,t,a,s,r,i){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&a(e,s,r,i)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&g(e.child,t,a,s,r,i))return!0;e=e.sibling}return!1}function H(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function D(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return t}function T(e){var t=[null,null],a=H(e);return a===null||Z(t,e,a.child,{foundSelf:!1}),t}function Z(e,t,a,s){for(;a!==null;){if(a===t)s.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(s.foundSelf)return e[1]=a,!0;e[0]=a}else if((a.tag!==22||a.memoizedState===null)&&Z(e,t,a.child,s))return!0;a=a.sibling}return!1}function O(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(c(559))}}var G=null,ce=null;function K(e,t,a){return e===a?!0:e===t?(G=e,!0):!1}function ee(e,t,a){return e===a?(ce=e,!1):e===t?(ce!==null&&(G=e),!0):!1}function C(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function V(e,t,a){for(var s=0,r=e;r;r=a(r))s++;r=0;for(var i=t;i;i=a(i))r++;for(;0<s-r;)e=a(e),s--;for(;0<r-s;)t=a(t),r--;for(;s--;){if(e===t||t!==null&&e===t.alternate)return e;e=a(e),t=a(t)}return null}var re=Object.assign,B=Symbol.for("react.element"),se=Symbol.for("react.transitional.element"),ie=Symbol.for("react.portal"),te=Symbol.for("react.fragment"),ue=Symbol.for("react.strict_mode"),be=Symbol.for("react.profiler"),E=Symbol.for("react.consumer"),w=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),W=Symbol.for("react.memo"),F=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),j=Symbol.for("react.legacy_hidden"),_=Symbol.for("react.memo_cache_sentinel"),x=Symbol.for("react.view_transition"),Q=Symbol.for("react.recoverable"),Re=Symbol.iterator;function ge(e){return e===null||typeof e!="object"?null:(e=Re&&e[Re]||e["@@iterator"],typeof e=="function"?e:null)}var Ne=Symbol.for("react.client.reference");function He(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ne?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case te:return"Fragment";case be:return"Profiler";case ue:return"StrictMode";case N:return"Suspense";case P:return"SuspenseList";case U:return"Activity";case x:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case ie:return"Portal";case w:return e.displayName||"Context";case E:return(e._context.displayName||"Context")+".Consumer";case p:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case W:return t=e.displayName||null,t!==null?t:He(e.type)||"Memo";case F:t=e._payload,e=e._init;try{return He(e(t))}catch{}}return null}var pe=Array.isArray,he=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ae=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ye={pending:!1,data:null,method:null,action:null},ze=[],xt=-1;function ht(e){return{current:e}}function Xe(e){0>xt||(e.current=ze[xt],ze[xt]=null,xt--)}function ve(e,t){xt++,ze[xt]=e.current,e.current=t}var it=ht(null),It=ht(null),at=ht(null),Bt=ht(null);function Ae(e,t){switch(ve(at,t),ve(It,e),ve(it,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?mx(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=mx(t),e=Ax(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Xe(it),ve(it,e)}function Me(){Xe(it),Xe(It),Xe(at)}function ct(e){var t=e.memoizedState;t!==null&&(ql._currentValue=t.memoizedState,ve(Bt,e)),t=it.current;var a=Ax(t,e.type);t!==a&&(ve(It,e),ve(it,a))}function kt(e){It.current===e&&(Xe(it),Xe(It)),Bt.current===e&&(Xe(Bt),ql._currentValue=ye)}var qt,en;function rn(e){if(qt===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);qt=t&&t[1]||"",en=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+qt+e+en}var me=!1;function Ie(e,t){if(!e||me)return"";me=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(t){var xe=function(){throw Error()};if(Object.defineProperty(xe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xe,[])}catch(Le){var z=Le}Reflect.construct(e,[],xe)}else{try{xe.call()}catch(Le){z=Le}xe=!1;try{var $=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),xe=!0,new e}finally{xe&&($!==void 0?Object.defineProperty(e.prototype,"props",$):delete e.prototype.props)}}}else{try{throw Error()}catch(Le){z=Le}(xe=e())&&typeof xe.catch=="function"&&xe.catch(function(){})}}catch(Le){if(Le&&z&&typeof Le.stack=="string")return[Le.stack,z.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=s.DetermineComponentFrameRoot(),m=i[0],S=i[1];if(m&&S){var I=m.split(`
`),X=S.split(`
`);for(r=s=0;s<I.length&&!I[s].includes("DetermineComponentFrameRoot");)s++;for(;r<X.length&&!X[r].includes("DetermineComponentFrameRoot");)r++;if(s===I.length||r===X.length)for(s=I.length-1,r=X.length-1;1<=s&&0<=r&&I[s]!==X[r];)r--;for(;1<=s&&0<=r;s--,r--)if(I[s]!==X[r]){if(s!==1||r!==1)do if(s--,r--,0>r||I[s]!==X[r]){var ne=`
`+I[s].replace(" at new "," at ");return e.displayName&&ne.includes("<anonymous>")&&(ne=ne.replace("<anonymous>",e.displayName)),ne}while(1<=s&&0<=r);break}}}finally{me=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?rn(a):""}function ut(e,t){switch(e.tag){case 26:case 27:case 5:return rn(e.type);case 16:return rn("Lazy");case 13:return e.child!==t&&t!==null?rn("Suspense Fallback"):rn("Suspense");case 19:return rn("SuspenseList");case 0:case 15:return Ie(e.type,!1);case 11:return Ie(e.type.render,!1);case 1:return Ie(e.type,!0);case 31:return rn("Activity");case 30:return rn("ViewTransition");default:return""}}function dt(e){try{var t="",a=null;do t+=ut(e,a),a=e,e=e.return;while(e);return t}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var Ca=Object.prototype.hasOwnProperty,ss=l.unstable_scheduleCallback,ka=l.unstable_cancelCallback,ba=l.unstable_shouldYield,sa=l.unstable_requestPaint,Qt=l.unstable_now,ml=l.unstable_getCurrentPriorityLevel,Ua=l.unstable_ImmediatePriority,pa=l.unstable_UserBlockingPriority,la=l.unstable_NormalPriority,Da=l.unstable_LowPriority,ra=l.unstable_IdlePriority,cr=l.log,Ta=l.unstable_setDisableYieldValue,Zn=null,Ht=null;function En(e){if(typeof cr=="function"&&Ta(e),Ht&&typeof Ht.setStrictMode=="function")try{Ht.setStrictMode(Zn,e)}catch{}}var Kt=Math.clz32?Math.clz32:rs,ls=Math.log,zn=Math.LN2;function rs(e){return e>>>=0,e===0?32:31-(ls(e)/zn|0)|0}var os=256,is=262144,ga=4194304;function yt(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function pn(e,t,a){var s=e.pendingLanes;if(s===0)return 0;var r=0,i=e.suspendedLanes,m=e.pingedLanes;e=e.warmLanes;var S=s&134217727;return S!==0?(s=S&~i,s!==0?r=yt(s):(m&=S,m!==0?r=yt(m):a||(a=S&~e,a!==0&&(r=yt(a))))):(S=s&~i,S!==0?r=yt(S):m!==0?r=yt(m):a||(a=s&~e,a!==0&&(r=yt(a)))),r===0?0:t!==0&&t!==r&&(t&i)===0&&(i=r&-r,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:r}function Fn(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function v(e,t){(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var s=31-Kt(a),r=1<<s;t|=e[s],a&=~r}return t}function oe(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function le(){var e=ga;return ga<<=1,(ga&62914560)===0&&(ga=4194304),e}function Se(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function we(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ge(e,t,a,s,r,i){var m=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var S=e.entanglements,I=e.expirationTimes,X=e.hiddenUpdates;for(a=m&~a;0<a;){var ne=31-Kt(a),xe=1<<ne;S[ne]=0,I[ne]=-1;var z=X[ne];if(z!==null)for(X[ne]=null,ne=0;ne<z.length;ne++){var $=z[ne];$!==null&&($.lane&=-536870913)}a&=~xe}s!==0&&on(e,s,0),i!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=i&~(m&~t))}function on(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var s=31-Kt(t);e.entangledLanes|=t,e.entanglements[s]=e.entanglements[s]|1073741824|a&261930}function Qe(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var s=31-Kt(a),r=1<<s;r&t|e[s]&t&&(e[s]|=t),a&=~r}}function oa(e,t){var a=t&-t;return a=(a&42)!==0?1:Ut(a),(a&(e.suspendedLanes|t))!==0?0:a}function Ut(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function tt(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function mt(){var e=ae.p;return e!==0?e:(e=window.event,e===void 0?32:qx(e.type))}function cn(e,t){var a=ae.p;try{return ae.p=e,t()}finally{ae.p=a}}var Ft=Math.random().toString(36).slice(2),wt="__reactFiber$"+Ft,$t="__reactProps$"+Ft,cs="__reactContainer$"+Ft,ur="__reactEvents$"+Ft,uo="__reactListeners$"+Ft,fc="__reactHandles$"+Ft,Al="__reactResources$"+Ft,M="__reactMarker$"+Ft,q="__reactLoad$"+Ft;function Ce(e){delete e[wt],delete e[$t],delete e[uo],delete e[fc]}function De(e){var t;if(t=e[wt])return t;for(var a=e.parentNode;a;){if(t=a[cs]||a[wt]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Hx(e);e!==null;){if(a=e[wt])return a;e=Hx(e)}return t}e=a,a=e.parentNode}return null}function vt(e){if(e=e[wt]||e[cs]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Et(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function Pt(e){var t=e[Al];return t||(t=e[Al]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ke(e){e[M]=!0}function _t(e){e[q]=void 0}var Zt=new Set,un={};function st(e,t){jt(e,t),jt(e+"Capture",t)}function jt(e,t){for(un[e]=t,e=0;e<t.length;e++)Zt.add(t[e])}var pp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ym={},qm={};function gp(e){return Ca.call(qm,e)?!0:Ca.call(Ym,e)?!1:pp.test(e)?qm[e]=!0:(Ym[e]=!0,!1)}var lt=!1;function Qm(){var e=lt;return lt=!1,e}function mo(e,t,a){if(gp(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var s=t.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,a)}}function Ao(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,a)}}function Ga(e,t,a,s){if(s===null)e.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,s)}}function Mn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function $m(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Rp(e,t,a){var s=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var r=s.get,i=s.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(m){a=""+m,i.call(this,m)}}),Object.defineProperty(e,t,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(m){a=""+m},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function xc(e){if(!e._valueTracker){var t=$m(e)?"checked":"value";e._valueTracker=Rp(e,t,""+e[t])}}function Wm(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),s="";return e&&(s=$m(e)?e.checked?"true":"false":e.value),e=s,e!==a?(t.setValue(e),!0):!1}var Sp=/[\n"\\]/g;function Jn(e){return e.replace(Sp,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function hc(e,t,a,s,r,i,m,S){e.name="",m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.type=m:e.removeAttribute("type"),t!=null?m==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Mn(t)):e.value!==""+Mn(t)&&(e.value=""+Mn(t)):m!=="submit"&&m!=="reset"||e.removeAttribute("value"),t!=null?m==="number"&&e.value==t?bc(e,Mn(e.value)):bc(e,Mn(t)):a!=null?bc(e,Mn(a)):s!=null&&e.removeAttribute("value"),r==null&&i!=null&&(e.defaultChecked=!!i),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.name=""+Mn(S):e.removeAttribute("name")}function e0(e,t,a,s,r,i,m,S){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){xc(e);return}a=a!=null?""+Mn(a):"",t=t!=null?""+Mn(t):a,S||t===e.value||(e.value=t),e.defaultValue=t}s=s??r,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=S?e.checked:!!s,e.defaultChecked=!!s,m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.name=m),xc(e)}function bc(e,t){e.defaultValue!==""+t&&(e.defaultValue=""+t)}function fl(e,t,a,s){if(e=e.options,t){t={};for(var r=0;r<a.length;r++)t["$"+a[r]]=!0;for(a=0;a<e.length;a++)r=t.hasOwnProperty("$"+e[a].value),e[a].selected!==r&&(e[a].selected=r),r&&s&&(e[a].defaultSelected=!0)}else{for(a=""+Mn(a),t=null,r=0;r<e.length;r++){if(e[r].value===a){e[r].selected=!0,s&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function t0(e,t,a){if(t!=null&&(t=""+Mn(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+Mn(a):""}function n0(e,t,a,s){if(t==null){if(s!=null){if(a!=null)throw Error(c(92));if(pe(s)){if(1<s.length)throw Error(c(93));s=s[0]}a=s}a==null&&(a=""),t=a}a=Mn(t),e.defaultValue=a,s=e.textContent,s===a&&s!==""&&s!==null&&(e.value=s),xc(e)}function xl(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var yp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function a0(e,t,a){var s=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":s?e.setProperty(t,a):typeof a!="number"||a===0||yp.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function s0(e,t,a){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||t!=null&&t.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="",lt=!0);for(var r in t)s=t[r],t.hasOwnProperty(r)&&a[r]!==s&&(a0(e,r,s),lt=!0)}else for(var i in t)t.hasOwnProperty(i)&&a0(e,i,t[i])}function pc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Np=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),vp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function fo(e){return vp.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ra(){}var gc=null;function Rc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var hl=null,bl=null;function l0(e){var t=vt(e);if(t&&(e=t.stateNode)){var a=e[$t]||null;e:switch(e=t.stateNode,t.type){case"input":if(hc(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Jn(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var s=a[t];if(s!==e&&s.form===e.form){var r=s[$t]||null;if(!r)throw Error(c(90));hc(s,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(t=0;t<a.length;t++)s=a[t],s.form===e.form&&Wm(s)}break e;case"textarea":t0(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&fl(e,!!a.multiple,t,!1)}}}var Sc=!1;function r0(e,t,a){if(Sc)return e(t,a);Sc=!0;try{var s=e(t);return s}finally{if(Sc=!1,(hl!==null||bl!==null)&&(fi(),hl&&(t=hl,e=bl,bl=hl=null,l0(t),e)))for(t=0;t<e.length;t++)l0(e[t])}}function dr(e,t){var a=e.stateNode;if(a===null)return null;var s=a[$t]||null;if(s===null)return null;a=s[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(c(231,t,typeof a));return a}var Ka=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yc=!1;if(Ka)try{var mr={};Object.defineProperty(mr,"passive",{get:function(){yc=!0}}),window.addEventListener("test",mr,mr),window.removeEventListener("test",mr,mr)}catch{yc=!1}var us=null,Nc=null,xo=null;function o0(){if(xo)return xo;var e,t=Nc,a=t.length,s,r="value"in us?us.value:us.textContent,i=r.length;for(e=0;e<a&&t[e]===r[e];e++);var m=a-e;for(s=1;s<=m&&t[a-s]===r[i-s];s++);return xo=r.slice(e,1<s?1-s:void 0)}function ho(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function bo(){return!0}function i0(){return!1}function Sn(e){function t(a,s,r,i,m){this._reactName=a,this._targetInst=r,this.type=s,this.nativeEvent=i,this.target=m,this.currentTarget=null;for(var S in e)e.hasOwnProperty(S)&&(a=e[S],this[S]=a?a(i):i[S]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?bo:i0,this.isPropagationStopped=i0,this}return re(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=bo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=bo)},persist:function(){},isPersistent:bo}),t}var ds={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},po=Sn(ds),Ar=re({},ds,{view:0,detail:0}),Lp=Sn(Ar),vc,Lc,fr,go=re({},Ar,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==fr&&(fr&&e.type==="mousemove"?(vc=e.screenX-fr.screenX,Lc=e.screenY-fr.screenY):Lc=vc=0,fr=e),vc)},movementY:function(e){return"movementY"in e?e.movementY:Lc}}),c0=Sn(go),Op=re({},go,{dataTransfer:0}),jp=Sn(Op),Ip=re({},Ar,{relatedTarget:0}),Oc=Sn(Ip),Bp=re({},ds,{animationName:0,elapsedTime:0,pseudoElement:0}),Hp=Sn(Bp),wp=re({},ds,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ep=Sn(wp),Mp=re({},ds,{data:0}),u0=Sn(Mp),Cp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Up={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Dp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Up[e])?!!t[e]:!1}function jc(){return Dp}var Tp=re({},Ar,{key:function(e){if(e.key){var t=Cp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ho(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?kp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jc,charCode:function(e){return e.type==="keypress"?ho(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ho(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Gp=Sn(Tp),Kp=re({},go,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),d0=Sn(Kp),Pp=re({},ds,{submitter:0}),_p=Sn(Pp),Zp=re({},Ar,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jc}),zp=Sn(Zp),Fp=re({},ds,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jp=Sn(Fp),Xp=re({},go,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Vp=Sn(Xp),Yp=re({},ds,{newState:0,oldState:0,source:0}),qp=Sn(Yp),Qp=[9,13,27,32],Ic=Ka&&"CompositionEvent"in window,xr=null;Ka&&"documentMode"in document&&(xr=document.documentMode);var $p=Ka&&"TextEvent"in window&&!xr,m0=Ka&&(!Ic||xr&&8<xr&&11>=xr),A0=" ",f0=!1;function x0(e,t){switch(e){case"keyup":return Qp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function h0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var pl=!1;function Wp(e,t){switch(e){case"compositionend":return h0(t);case"keypress":return t.which!==32?null:(f0=!0,A0);case"textInput":return e=t.data,e===A0&&f0?null:e;default:return null}}function eg(e,t){if(pl)return e==="compositionend"||!Ic&&x0(e,t)?(e=o0(),xo=Nc=us=null,pl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return m0&&t.locale!=="ko"?null:t.data;default:return null}}var tg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function b0(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!tg[e.type]:t==="textarea"}function p0(e,t,a,s){hl?bl?bl.push(s):bl=[s]:hl=s,t=Ri(t,"onChange"),0<t.length&&(a=new po("onChange","change",null,a,s),e.push({event:a,listeners:t}))}var hr=null,br=null;function ng(e){rx(e,0)}function Ro(e){var t=Et(e);if(Wm(t))return e}function g0(e,t){if(e==="change")return t}var R0=!1;if(Ka){var Bc;if(Ka){var Hc="oninput"in document;if(!Hc){var S0=document.createElement("div");S0.setAttribute("oninput","return;"),Hc=typeof S0.oninput=="function"}Bc=Hc}else Bc=!1;R0=Bc&&(!document.documentMode||9<document.documentMode)}function y0(){hr&&(hr.detachEvent("onpropertychange",N0),br=hr=null)}function N0(e){if(e.propertyName==="value"&&Ro(br)){var t=[];p0(t,br,e,Rc(e)),r0(ng,t)}}function ag(e,t,a){e==="focusin"?(y0(),hr=t,br=a,hr.attachEvent("onpropertychange",N0)):e==="focusout"&&y0()}function sg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ro(br)}function lg(e,t){if(e==="click")return Ro(t)}function rg(e,t){if(e==="input"||e==="change")return Ro(t)}function og(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Cn=typeof Object.is=="function"?Object.is:og;function pr(e,t){if(Cn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),s=Object.keys(t);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var r=a[s];if(!Ca.call(t,r)||!Cn(e[r],t[r]))return!1}return!0}function wc(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function v0(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function L0(e,t){var a=v0(e);e=0;for(var s;a;){if(a.nodeType===3){if(s=e+a.textContent.length,e<=t&&s>=t)return{node:a,offset:t-e};e=s}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=v0(a)}}function O0(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?O0(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function j0(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=wc(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=wc(e.document)}return t}function Ec(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var ig=Ka&&"documentMode"in document&&11>=document.documentMode,gl=null,Mc=null,gr=null,Cc=!1;function I0(e,t,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Cc||gl==null||gl!==wc(s)||(s=gl,"selectionStart"in s&&Ec(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),gr&&pr(gr,s)||(gr=s,s=Ri(Mc,"onSelect"),0<s.length&&(t=new po("onSelect","select",null,t,a),e.push({event:t,listeners:s}),t.target=gl)))}function Ps(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Rl={animationend:Ps("Animation","AnimationEnd"),animationiteration:Ps("Animation","AnimationIteration"),animationstart:Ps("Animation","AnimationStart"),transitionrun:Ps("Transition","TransitionRun"),transitionstart:Ps("Transition","TransitionStart"),transitioncancel:Ps("Transition","TransitionCancel"),transitionend:Ps("Transition","TransitionEnd")},kc={},B0={};Ka&&(B0=document.createElement("div").style,"AnimationEvent"in window||(delete Rl.animationend.animation,delete Rl.animationiteration.animation,delete Rl.animationstart.animation),"TransitionEvent"in window||delete Rl.transitionend.transition);function _s(e){if(kc[e])return kc[e];if(!Rl[e])return e;var t=Rl[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in B0)return kc[e]=t[a];return e}var H0=_s("animationend"),w0=_s("animationiteration"),E0=_s("animationstart"),cg=_s("transitionrun"),ug=_s("transitionstart"),dg=_s("transitioncancel"),M0=_s("transitionend"),C0=new Map,Uc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Uc.push("scrollEnd");function ia(e,t){C0.set(e,t),st(t,[e])}var mg=0;function Pa(e,t){if(e.name!=null&&e.name!=="auto")return e.name;if(t.autoName!==null)return t.autoName;e=ma.identifierPrefix;var a=mg++;return e="_"+e+"t_"+a.toString(32)+"_",t.autoName=e}function k0(e){if(e==null||typeof e=="string")return e;var t=null,a=Kl;if(a!==null)for(var s=0;s<a.length;s++){var r=e[a[s]];if(r!=null){if(r==="none")return"none";t=t==null?r:t+(" "+r)}}return t??e.default}function _a(e,t){return e=k0(e),t=k0(t),t==null?e==="auto"?null:e:t==="auto"?null:t}var So=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Xn=[],Sl=0,Dc=0;function yo(){for(var e=Sl,t=Dc=Sl=0;t<e;){var a=Xn[t];Xn[t++]=null;var s=Xn[t];Xn[t++]=null;var r=Xn[t];Xn[t++]=null;var i=Xn[t];if(Xn[t++]=null,s!==null&&r!==null){var m=s.pending;m===null?r.next=r:(r.next=m.next,m.next=r),s.pending=r}i!==0&&U0(a,r,i)}}function No(e,t,a,s){Xn[Sl++]=e,Xn[Sl++]=t,Xn[Sl++]=a,Xn[Sl++]=s,Dc|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function Tc(e,t,a,s){return No(e,t,a,s),vo(e)}function Zs(e,t){return No(e,null,null,t),vo(e)}function U0(e,t,a){e.lanes|=a;var s=e.alternate;s!==null&&(s.lanes|=a);for(var r=!1,i=e.return;i!==null;)i.childLanes|=a,s=i.alternate,s!==null&&(s.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(r=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,r&&t!==null&&(r=31-Kt(a),e=i.hiddenUpdates,s=e[r],s===null?e[r]=[t]:s.push(t),t.lane=a|536870912),i):null}function vo(e){if(50<Pr)throw Pr=0,Ai=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var yl={};function Ag(e,t,a,s){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function On(e,t,a,s){return new Ag(e,t,a,s)}function Gc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Za(e,t){var a=e.alternate;return a===null?(a=On(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&1206910976,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function D0(e,t){e.flags&=1206910978;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Lo(e,t,a,s,r,i){var m=0;if(s=e,typeof s=="function")Gc(s)&&(m=1);else if(typeof s=="string")m=P1(e,a,it.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(s){case U:return e=On(31,a,t,r),e.elementType=U,e.lanes=i,e;case te:return zs(a.children,r,i,t);case ue:m=8,r|=24;break;case be:return e=On(12,a,t,r|2),e.elementType=be,e.lanes=i,e;case N:return e=On(13,a,t,r),e.elementType=N,e.lanes=i,e;case P:return e=On(19,a,t,r),e.elementType=P,e.lanes=i,e;case j:case x:return e=r|32,e=On(30,a,t,e),e.elementType=x,e.lanes=i,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof s=="object"&&s!==null)switch(s.$$typeof){case w:m=10;break e;case E:m=9;break e;case p:m=11;break e;case W:m=14;break e;case F:m=16,s=null;break e}m=29,a=Error(c(130,e===null?"null":typeof e,"")),s=null}return t=On(m,a,t,r),t.elementType=e,t.type=s,t.lanes=i,t}function zs(e,t,a,s){return e=On(7,e,s,t),e.lanes=a,e}function Kc(e,t,a){return e=On(6,e,null,t),e.lanes=a,e}function T0(e){var t=On(18,null,null,0);return t.stateNode=e,t}function Pc(e,t,a){return t=On(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var G0=new WeakMap;function Vn(e,t){if(typeof e=="object"&&e!==null){var a=G0.get(e);return a!==void 0?a:(t={value:e,source:t,stack:dt(t)},G0.set(e,t),t)}return{value:e,source:t,stack:dt(t)}}var Nl=[],vl=0,Oo=null,Rr=0,Yn=[],qn=0,ms=null,Sa=1,ya="";function za(e,t){Nl[vl++]=Rr,Nl[vl++]=Oo,Oo=e,Rr=t}function K0(e,t,a){Yn[qn++]=Sa,Yn[qn++]=ya,Yn[qn++]=ms,ms=e;var s=Sa;e=ya;var r=32-Kt(s)-1;s&=~(1<<r),a+=1;var i=32-Kt(t)+r;if(30<i){var m=r-r%5;i=(s&(1<<m)-1).toString(32),s>>=m,r-=m,Sa=1<<32-Kt(t)+r|a<<r|s,ya=i+e}else Sa=1<<i|a<<r|s,ya=e}function jo(e){e.return!==null&&(za(e,1),K0(e,1,0))}function _c(e){for(;e===Oo;)Oo=Nl[--vl],Nl[vl]=null,Rr=Nl[--vl],Nl[vl]=null;for(;e===ms;)ms=Yn[--qn],Yn[qn]=null,ya=Yn[--qn],Yn[qn]=null,Sa=Yn[--qn],Yn[qn]=null}function P0(e,t){Yn[qn++]=Sa,Yn[qn++]=ya,Yn[qn++]=ms,Sa=t.id,ya=t.overflow,ms=e}var tn=null,Lt=null,Je=!1,As=null,Qn=!1,Zc=Error(c(519));function fs(e){var t=Error(c(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Sr(Vn(t,e)),Zc}function _0(e){var t=e.stateNode,a=e.type,s=e.memoizedProps;switch(t[wt]=e,t[$t]=s,a){case"dialog":Ye("cancel",t),Ye("close",t);break;case"iframe":case"object":case"embed":Ye("load",t);break;case"video":case"audio":for(a=0;a<Zr.length;a++)Ye(Zr[a],t);break;case"source":Ye("error",t);break;case"img":case"image":case"link":Ye("error",t),Ye("load",t);break;case"details":Ye("toggle",t);break;case"input":Ye("invalid",t),e0(t,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":Ye("invalid",t);break;case"textarea":Ye("invalid",t),n0(t,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||s.suppressHydrationWarning===!0||ux(t.textContent,a)?(s.popover!=null&&(Ye("beforetoggle",t),Ye("toggle",t)),s.onScroll!=null&&Ye("scroll",t),s.onScrollEnd!=null&&Ye("scrollend",t),s.onClick!=null&&(t.onclick=Ra),t=!0):t=!1,t||fs(e,!0)}function Io(e){for(tn=e.return;tn;)switch(tn.tag){case 5:case 31:case 13:Qn=!1;return;case 27:case 3:Qn=!0;return;default:tn=tn.return}}function Ll(e){if(e!==tn)return!1;if(!Je)return Io(e),Je=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||gd(e.type,e.memoizedProps)),a=!a),a&&Lt&&fs(e),Io(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Lt=Bx(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Lt=Bx(e)}else t===27?(t=Lt,Hs(e.type)?(e=Id,Id=null,Lt=e):Lt=t):Lt=tn?Wn(e.stateNode.nextSibling):null;return!0}function Fs(){Lt=tn=null,Je=!1}function zc(){var e=As;return e!==null&&(Bn===null?Bn=e:Bn.push.apply(Bn,e),As=null),e}function Sr(e){As===null?As=[e]:As.push(e)}var Fc=ht(null),Js=null,Fa=null;function xs(e,t,a){ve(Fc,t._currentValue),t._currentValue=a}function Ja(e){e._currentValue=Fc.current,Xe(Fc)}function Bo(e,t,a){for(;e!==null;){var s=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,s!==null&&(s.childLanes|=t)):s!==null&&(s.childLanes&t)!==t&&(s.childLanes|=t),e===a)break;e=e.return}}function Jc(e,t,a,s){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var i=r.dependencies;if(i!==null){var m=r.child;i=i.firstContext;e:for(;i!==null;){var S=i;i=r;for(var I=0;I<t.length;I++)if(S.context===t[I]){i.lanes|=a,S=i.alternate,S!==null&&(S.lanes|=a),Bo(i.return,a,e),s||(m=null);break e}i=S.next}}else if(r.tag===18){if(m=r.return,m===null)throw Error(c(341));m.lanes|=a,i=m.alternate,i!==null&&(i.lanes|=a),Bo(m,a,e),m=null}else r.tag===13&&r.memoizedState!==null&&r.memoizedState.dehydrated===null?(r.lanes|=a,m=r.alternate,m!==null&&(m.lanes|=a),Bo(r.return,a,e),m=r.child,m=m!==null?m.sibling:null):m=r.child;if(m!==null)m.return=r;else for(m=r;m!==null;){if(m===e){m=null;break}if(r=m.sibling,r!==null){r.return=m.return,m=r;break}m=m.return}r=m}}function Xs(e,t,a,s){e=null;for(var r=t,i=!1;r!==null;){if(!i){if((r.flags&524288)!==0)i=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var m=r.alternate;if(m===null)throw Error(c(387));if(m=m.memoizedProps,m!==null){var S=r.type;Cn(r.pendingProps.value,m.value)||(e!==null?e.push(S):e=[S])}}else if(r===Bt.current){if(m=r.alternate,m===null)throw Error(c(387));m.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push(ql):e=[ql])}r=r.return}return e!==null&&Jc(t,e,a,s),t.flags|=262144,e!==null}function Ho(e){for(e=e.firstContext;e!==null;){if(!Cn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Vs(e){Js=e,Fa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function dn(e){return Z0(Js,e)}function wo(e,t){return Js===null&&Vs(e),Z0(e,t)}function Z0(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Fa===null){if(e===null)throw Error(c(308));Fa=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Fa=Fa.next=t;return a}var fg=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,s){e.push(s)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},xg=l.unstable_scheduleCallback,hg=l.unstable_NormalPriority,Jt={$$typeof:w,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Xc(){return{controller:new fg,data:new Map,refCount:0}}function yr(e){e.refCount--,e.refCount===0&&xg(hg,function(){e.controller.abort()})}function z0(e,t){if((e.pendingLanes&4194048)!==0){var a=e.transitionTypes;for(a===null&&(a=e.transitionTypes=[]),e=0;e<t.length;e++){var s=t[e];a.indexOf(s)===-1&&a.push(s)}}}var Nr=null;function bg(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var vr=null,Vc=0,Ys=0,Ol=null;function pg(e,t){if(vr===null){var a=vr=[];Vc=0,Ys=ud(),Ol={status:"pending",value:void 0,then:function(s){a.push(s)}}}return Vc++,t.then(F0,F0),t}function F0(){if(--Vc===0&&(Nr=null,vr!==null)){Ol!==null&&(Ol.status="fulfilled");var e=vr;vr=null,Ys=0,Ol=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function gg(e,t){var a=[],s={status:"pending",value:null,reason:null,then:function(r){a.push(r)}};return e.then(function(){s.status="fulfilled",s.value=t;for(var r=0;r<a.length;r++)(0,a[r])(t)},function(r){for(s.status="rejected",s.reason=r,r=0;r<a.length;r++)(0,a[r])(void 0)}),s}var J0=he.S;he.S=function(e,t){if(Gf=Qt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&pg(e,t),Nr!==null)for(var a=zl;a!==null;)z0(a,Nr),a=a.next;if(a=e.types,a!==null){for(var s=zl;s!==null;)z0(s,a),s=s.next;if(Ys!==0){s=Nr,s===null&&(s=Nr=[]);for(var r=0;r<a.length;r++){var i=a[r];s.indexOf(i)===-1&&s.push(i)}}}J0!==null&&J0(e,t)};var qs=ht(null);function Yc(){var e=qs.current;return e!==null?e:Nt.pooledCache}function Eo(e,t){t===null?ve(qs,qs.current):ve(qs,t.pool)}function X0(){var e=Yc();return e===null?null:{parent:Jt._currentValue,pool:e}}var jl=Error(c(460)),qc=Error(c(474)),Mo=Error(c(542)),Co={then:function(){}};function V0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Y0(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Ra,Ra),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Q0(e),e===void 0&&!("reason"in t)?Error(c(600)):e;default:if(typeof t.status=="string")t.then(Ra,Ra);else{if(e=Nt,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(s){if(t.status==="pending"){var r=t;r.status="fulfilled",r.value=s}},function(s){if(t.status==="pending"){var r=t;r.status="rejected",r.reason=s}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Q0(e),e}throw $s=t,jl}}function Qs(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?($s=a,jl):a}}var $s=null;function q0(){if($s===null)throw Error(c(459));var e=$s;return $s=null,e}function Q0(e){if(e===jl||e===Mo)throw Error(c(483))}var Il=null,Lr=0;function ko(e){var t=Lr;return Lr+=1,Il===null&&(Il=[]),Y0(Il,e,t)}function hs(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Uo(e,t){throw t.$$typeof===B?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function $0(e){function t(J,k){if(e){var Y=J.deletions;Y===null?(J.deletions=[k],J.flags|=16):Y.push(k)}}function a(J,k){if(!e)return null;for(;k!==null;)t(J,k),k=k.sibling;return null}function s(J){for(var k=new Map;J!==null;)J.key===null?k.set(J.index,J):k.set(J.key,J),J=J.sibling;return k}function r(J,k){return J=Za(J,k),J.index=0,J.sibling=null,J}function i(J,k,Y){return J.index=Y,e?(Y=J.alternate,Y!==null?(Y=Y.index,Y<k?(J.flags|=2,k):Y):(J.flags|=134217730,k)):(J.flags|=1048576,k)}function m(J){return e&&J.alternate===null&&(J.flags|=134217730),J}function S(J,k,Y,fe){return k===null||k.tag!==6?(k=Kc(Y,J.mode,fe),k.return=J,k):(k=r(k,Y),k.return=J,k)}function I(J,k,Y,fe){var je=Y.type;return je===te?(J=ne(J,k,Y.props.children,fe,Y.key),hs(J,Y),J):k!==null&&(k.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===F&&Qs(je)===k.type)?(k=r(k,Y.props),hs(k,Y),k.return=J,k):(k=Lo(Y.type,Y.key,Y.props,null,J.mode,fe),hs(k,Y),k.return=J,k)}function X(J,k,Y,fe){return k===null||k.tag!==4||k.stateNode.containerInfo!==Y.containerInfo||k.stateNode.implementation!==Y.implementation?(k=Pc(Y,J.mode,fe),k.return=J,k):(k=r(k,Y.children||[]),k.return=J,k)}function ne(J,k,Y,fe,je){return k===null||k.tag!==7?(k=zs(Y,J.mode,fe,je),k.return=J,k):(k=r(k,Y),k.return=J,k)}function xe(J,k,Y){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=Kc(""+k,J.mode,Y),k.return=J,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case se:return Y=Lo(k.type,k.key,k.props,null,J.mode,Y),hs(Y,k),Y.return=J,Y;case ie:return k=Pc(k,J.mode,Y),k.return=J,k;case F:return k=Qs(k),xe(J,k,Y)}if(pe(k)||ge(k))return k=zs(k,J.mode,Y,null),k.return=J,k;if(typeof k.then=="function")return xe(J,ko(k),Y);if(k.$$typeof===w)return xe(J,wo(J,k),Y);Uo(J,k)}return null}function z(J,k,Y,fe){var je=k!==null?k.key:null;if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return je!==null?null:S(J,k,""+Y,fe);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case se:return Y.key===je?I(J,k,Y,fe):null;case ie:return Y.key===je?X(J,k,Y,fe):null;case F:return Y=Qs(Y),z(J,k,Y,fe)}if(pe(Y)||ge(Y))return je!==null?null:ne(J,k,Y,fe,null);if(typeof Y.then=="function")return z(J,k,ko(Y),fe);if(Y.$$typeof===w)return z(J,k,wo(J,Y),fe);Uo(J,Y)}return null}function $(J,k,Y,fe,je){if(typeof fe=="string"&&fe!==""||typeof fe=="number"||typeof fe=="bigint")return J=J.get(Y)||null,S(k,J,""+fe,je);if(typeof fe=="object"&&fe!==null){switch(fe.$$typeof){case se:return J=J.get(fe.key===null?Y:fe.key)||null,I(k,J,fe,je);case ie:return J=J.get(fe.key===null?Y:fe.key)||null,X(k,J,fe,je);case F:return fe=Qs(fe),$(J,k,Y,fe,je)}if(pe(fe)||ge(fe))return J=J.get(Y)||null,ne(k,J,fe,je,null);if(typeof fe.then=="function")return $(J,k,Y,ko(fe),je);if(fe.$$typeof===w)return $(J,k,Y,wo(k,fe),je);Uo(k,fe)}return null}function Le(J,k,Y,fe){for(var je=null,We=null,Ee=k,ke=k=0,Yt=null;Ee!==null&&ke<Y.length;ke++){Ee.index>ke?(Yt=Ee,Ee=null):Yt=Ee.sibling;var nt=z(J,Ee,Y[ke],fe);if(nt===null){Ee===null&&(Ee=Yt);break}e&&Ee&&nt.alternate===null&&t(J,Ee),k=i(nt,k,ke),We===null?je=nt:We.sibling=nt,We=nt,Ee=Yt}if(ke===Y.length)return a(J,Ee),Je&&za(J,ke),je;if(Ee===null){for(;ke<Y.length;ke++)Ee=xe(J,Y[ke],fe),Ee!==null&&(k=i(Ee,k,ke),We===null?je=Ee:We.sibling=Ee,We=Ee);return Je&&za(J,ke),je}for(Ee=s(Ee);ke<Y.length;ke++)Yt=$(Ee,J,ke,Y[ke],fe),Yt!==null&&(e&&(nt=Yt.alternate,nt!==null&&Ee.delete(nt.key===null?ke:nt.key)),k=i(Yt,k,ke),We===null?je=Yt:We.sibling=Yt,We=Yt);return e&&Ee.forEach(function(ks){return t(J,ks)}),Je&&za(J,ke),je}function Be(J,k,Y,fe){if(Y==null)throw Error(c(151));for(var je=null,We=null,Ee=k,ke=k=0,Yt=null,nt=Y.next();Ee!==null&&!nt.done;ke++,nt=Y.next()){Ee.index>ke?(Yt=Ee,Ee=null):Yt=Ee.sibling;var ks=z(J,Ee,nt.value,fe);if(ks===null){Ee===null&&(Ee=Yt);break}e&&Ee&&ks.alternate===null&&t(J,Ee),k=i(ks,k,ke),We===null?je=ks:We.sibling=ks,We=ks,Ee=Yt}if(nt.done)return a(J,Ee),Je&&za(J,ke),je;if(Ee===null){for(;!nt.done;ke++,nt=Y.next())nt=xe(J,nt.value,fe),nt!==null&&(k=i(nt,k,ke),We===null?je=nt:We.sibling=nt,We=nt);return Je&&za(J,ke),je}for(Ee=s(Ee);!nt.done;ke++,nt=Y.next())nt=$(Ee,J,ke,nt.value,fe),nt!==null&&(e&&(Yt=nt.alternate,Yt!==null&&Ee.delete(Yt.key===null?ke:Yt.key)),k=i(nt,k,ke),We===null?je=nt:We.sibling=nt,We=nt);return e&&Ee.forEach(function(W1){return t(J,W1)}),Je&&za(J,ke),je}function _e(J,k,Y,fe){if(typeof Y=="object"&&Y!==null&&Y.type===te&&Y.key===null&&Y.props.ref===void 0&&(Y=Y.props.children),typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case se:e:{for(var je=Y.key;k!==null;){if(k.key===je){if(je=Y.type,je===te){if(k.tag===7){a(J,k.sibling),fe=r(k,Y.props.children),hs(fe,Y),fe.return=J,J=fe;break e}}else if(k.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===F&&Qs(je)===k.type){a(J,k.sibling),fe=r(k,Y.props),hs(fe,Y),fe.return=J,J=fe;break e}a(J,k);break}else t(J,k);k=k.sibling}Y.type===te?(fe=zs(Y.props.children,J.mode,fe,Y.key),hs(fe,Y),fe.return=J,J=fe):(fe=Lo(Y.type,Y.key,Y.props,null,J.mode,fe),hs(fe,Y),fe.return=J,J=fe)}return m(J);case ie:e:{for(je=Y.key;k!==null;){if(k.key===je)if(k.tag===4&&k.stateNode.containerInfo===Y.containerInfo&&k.stateNode.implementation===Y.implementation){a(J,k.sibling),fe=r(k,Y.children||[]),fe.return=J,J=fe;break e}else{a(J,k);break}else t(J,k);k=k.sibling}fe=Pc(Y,J.mode,fe),fe.return=J,J=fe}return m(J);case F:return Y=Qs(Y),_e(J,k,Y,fe)}if(pe(Y))return Le(J,k,Y,fe);if(ge(Y)){if(je=ge(Y),typeof je!="function")throw Error(c(150));return Y=je.call(Y),Be(J,k,Y,fe)}if(typeof Y.then=="function")return _e(J,k,ko(Y),fe);if(Y.$$typeof===w)return _e(J,k,wo(J,Y),fe);Uo(J,Y)}return typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint"?(Y=""+Y,k!==null&&k.tag===6?(a(J,k.sibling),fe=r(k,Y),fe.return=J,J=fe):(a(J,k),fe=Kc(Y,J.mode,fe),fe.return=J,J=fe),m(J)):a(J,k)}return function(J,k,Y,fe){try{Lr=0;var je=_e(J,k,Y,fe);return Il=null,je}catch(Ee){if(Ee===jl||Ee===Mo)throw Ee;var We=On(29,Ee,null,J.mode);return We.lanes=fe,We.return=J,We}finally{}}}var Ws=$0(!0),W0=$0(!1),bs=!1;function Qc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function $c(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ps(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function gs(e,t,a){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(ot&2)!==0){var r=s.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),s.pending=t,t=vo(e),U0(e,null,a),t}return No(e,s,t,a),vo(e)}function Or(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var s=t.lanes;s&=e.pendingLanes,a|=s,t.lanes=a,Qe(e,a)}}function Wc(e,t){var a=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var r=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var m={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?r=i=m:i=i.next=m,a=a.next}while(a!==null);i===null?r=i=t:i=i.next=t}else r=i=t;a={baseState:s.baseState,firstBaseUpdate:r,lastBaseUpdate:i,shared:s.shared,callbacks:s.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var eu=!1;function jr(){if(eu){var e=Ol;if(e!==null)throw e}}function Ir(e,t,a,s){eu=!1;var r=e.updateQueue;bs=!1;var i=r.firstBaseUpdate,m=r.lastBaseUpdate,S=r.shared.pending;if(S!==null){r.shared.pending=null;var I=S,X=I.next;I.next=null,m===null?i=X:m.next=X,m=I;var ne=e.alternate;ne!==null&&(ne=ne.updateQueue,S=ne.lastBaseUpdate,S!==m&&(S===null?ne.firstBaseUpdate=X:S.next=X,ne.lastBaseUpdate=I))}if(i!==null){var xe=r.baseState;m=0,ne=X=I=null,S=i;do{var z=S.lane&-536870913,$=z!==S.lane;if($?($e&z)===z:(s&z)===z){z!==0&&z===Ys&&(eu=!0),ne!==null&&(ne=ne.next={lane:0,tag:S.tag,payload:S.payload,callback:null,next:null});e:{var Le=e,Be=S;z=t;var _e=a;switch(Be.tag){case 1:if(Le=Be.payload,typeof Le=="function"){xe=Le.call(_e,xe,z);break e}xe=Le;break e;case 3:Le.flags=Le.flags&-65537|128;case 0:if(Le=Be.payload,z=typeof Le=="function"?Le.call(_e,xe,z):Le,z==null)break e;xe=re({},xe,z);break e;case 2:bs=!0}}z=S.callback,z!==null&&(e.flags|=64,$&&(e.flags|=8192),$=r.callbacks,$===null?r.callbacks=[z]:$.push(z))}else $={lane:z,tag:S.tag,payload:S.payload,callback:S.callback,next:null},ne===null?(X=ne=$,I=xe):ne=ne.next=$,m|=z;if(S=S.next,S===null){if(S=r.shared.pending,S===null)break;$=S,S=$.next,$.next=null,r.lastBaseUpdate=$,r.shared.pending=null}}while(!0);ne===null&&(I=xe),r.baseState=I,r.firstBaseUpdate=X,r.lastBaseUpdate=ne,i===null&&(r.shared.lanes=0),Os|=m,e.lanes=m,e.memoizedState=xe}}function eA(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function tA(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)eA(a[e],t)}var Rs=ht(null),Do=ht(0);function nA(e,t){e=Qa,ve(Do,e),ve(Rs,t),Qa=e|t.baseLanes}function tu(){ve(Do,Qa),ve(Rs,Rs.current)}function nu(){Qa=Do.current,Xe(Rs),Xe(Do)}var mn=ht(null),gn=null;function Ss(e){var t=e.alternate;ve(An,An.current&1),ve(mn,e),gn===null&&(t===null||Rs.current!==null||t.memoizedState!==null)&&(gn=e)}function au(e){ve(An,An.current),ve(mn,e),gn===null&&(gn=e)}function aA(e){e.tag===22?(ve(An,An.current),ve(mn,e),gn===null&&(gn=e)):ys()}function ys(){ve(An,An.current),ve(mn,mn.current)}function kn(e){Xe(mn),gn===e&&(gn=null),Xe(An)}var An=ht(0);function Br(e,t){ve(mn,mn.current),ve(An,t)}function su(e){Xe(An),Xe(mn),gn===e&&(gn=null)}function To(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Od(a)||jd(a)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!=="independent"){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Xa=0,Pe=null,St=null,Xt=null,Go=!1,Bl=!1,el=!1,Ko=0,Hr=0,Hl=null,Rg=0;function Dt(){throw Error(c(321))}function lu(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!Cn(e[a],t[a]))return!1;return!0}function ru(e,t,a,s,r,i){return Xa=i,Pe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,he.H=e===null||e.memoizedState===null?KA:PA,el=!1,i=a(s,r),el=!1,Bl&&(i=lA(t,a,s,r)),sA(e),i}function sA(e){he.H=Xo;var t=St!==null&&St.next!==null;if(Xa=0,Xt=St=Pe=null,Go=!1,Hr=0,Hl=null,t)throw Error(c(300));e===null||Vt||(e=e.dependencies,e!==null&&Ho(e)&&(Vt=!0))}function lA(e,t,a,s){Pe=e;var r=0;do{if(Bl&&(Hl=null),Hr=0,Bl=!1,25<=r)throw Error(c(301));if(r+=1,Xt=St=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}he.H=Ig,i=t(a,s)}while(Bl);return i}function Sg(){var e=he.H,t=e.useState()[0];return t=typeof t.then=="function"?wr(t):t,e=e.useState()[0],(St!==null?St.memoizedState:null)!==e&&(Pe.flags|=1024),t}function ou(){var e=Ko!==0;return Ko=0,e}function iu(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function cu(e){if(Go){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Go=!1}Xa=0,Xt=St=Pe=null,Bl=!1,Hr=Ko=0,Hl=null}function yn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xt===null?Pe.memoizedState=Xt=e:Xt=Xt.next=e,Xt}function zt(){if(St===null){var e=Pe.alternate;e=e!==null?e.memoizedState:null}else e=St.next;var t=Xt===null?Pe.memoizedState:Xt.next;if(t!==null)Xt=t,St=e;else{if(e===null)throw Pe.alternate===null?Error(c(467)):Error(c(310));St=e,e={memoizedState:St.memoizedState,baseState:St.baseState,baseQueue:St.baseQueue,queue:St.queue,next:null},Xt===null?Pe.memoizedState=Xt=e:Xt=Xt.next=e}return Xt}function Po(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function wr(e){var t=Hr;return Hr+=1,Hl===null&&(Hl=[]),e=Y0(Hl,e,t),t=Pe,(Xt===null?t.memoizedState:Xt.next)===null&&(t=t.alternate,he.H=t===null||t.memoizedState===null?KA:PA),e}function _o(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return wr(e);if(e.$$typeof===Q)return;if(e.$$typeof===w)return dn(e)}throw Error(c(438,String(e)))}function uu(e){var t=null,a=Pe.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var s=Pe.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(t={data:s.data.map(function(r){return r.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Po(),Pe.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),s=0;s<e;s++)a[s]=_;return t.index++,a}function Va(e,t){return typeof t=="function"?t(e):t}function Zo(e){var t=zt();return du(t,St,e)}function du(e,t,a){var s=e.queue;if(s===null)throw Error(c(311));s.lastRenderedReducer=a;var r=e.baseQueue,i=s.pending;if(i!==null){if(r!==null){var m=r.next;r.next=i.next,i.next=m}t.baseQueue=r=i,s.pending=null}if(i=e.baseState,r===null)e.memoizedState=i;else{t=r.next;var S=m=null,I=null,X=t,ne=!1;do{var xe=X.lane&-536870913;if(xe!==X.lane?($e&xe)===xe:(Xa&xe)===xe){var z=X.revertLane;if(z===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:X.action,hasEagerState:X.hasEagerState,eagerState:X.eagerState,next:null}),xe===Ys&&(ne=!0);else if((Xa&z)===z){X=X.next,z===Ys&&(ne=!0);continue}else xe={lane:0,revertLane:X.revertLane,gesture:null,action:X.action,hasEagerState:X.hasEagerState,eagerState:X.eagerState,next:null},I===null?(S=I=xe,m=i):I=I.next=xe,Pe.lanes|=z,Os|=z;xe=X.action,el&&a(i,xe),i=X.hasEagerState?X.eagerState:a(i,xe)}else z={lane:xe,revertLane:X.revertLane,gesture:X.gesture,action:X.action,hasEagerState:X.hasEagerState,eagerState:X.eagerState,next:null},I===null?(S=I=z,m=i):I=I.next=z,Pe.lanes|=xe,Os|=xe;X=X.next}while(X!==null&&X!==t);if(I===null?m=i:I.next=S,!Cn(i,e.memoizedState)&&(Vt=!0,ne&&(a=Ol,a!==null)))throw a;e.memoizedState=i,e.baseState=m,e.baseQueue=I,s.lastRenderedState=i}return r===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function mu(e){var t=zt(),a=t.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=e;var s=a.dispatch,r=a.pending,i=t.memoizedState;if(r!==null){a.pending=null;var m=r=r.next;do i=e(i,m.action),m=m.next;while(m!==r);Cn(i,t.memoizedState)||(Vt=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,s]}function rA(e,t,a){var s=Pe,r=zt(),i=Je;if(i){if(a===void 0)throw Error(c(407));a=a()}else a=t();var m=!Cn((St||r).memoizedState,a);if(m&&(r.memoizedState=a,Vt=!0),r=r.queue,xu(cA.bind(null,s,r,e),[e]),e=r.getSnapshot!==t||m||Xt!==null&&(Xt.memoizedState.tag&1)!==0,wl(e?9:8,{destroy:void 0},iA.bind(null,s,r,a,t),null),e){if(s.flags|=2048,Nt===null)throw Error(c(349));i||(Xa&127)!==0||oA(s,t,a)}return a}function oA(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=Pe.updateQueue,t===null?(t=Po(),Pe.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function iA(e,t,a,s){t.value=a,t.getSnapshot=s,uA(t)&&dA(e)}function cA(e,t,a){return a(function(){uA(t)&&dA(e)})}function uA(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!Cn(e,a)}catch{return!0}}function dA(e){var t=Zs(e,2);t!==null&&Hn(t,e,2)}function Au(e){var t=yn();if(typeof e=="function"){var a=e;if(e=a(),el){En(!0);try{a()}finally{En(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Va,lastRenderedState:e},t}function mA(e,t,a,s){return e.baseState=a,du(e,St,typeof s=="function"?s:Va)}function yg(e,t,a,s,r){if(Jo(e))throw Error(c(485));if(e=t.action,e!==null){var i={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(m){i.listeners.push(m)}};he.T!==null?a(!0):i.isTransition=!1,s(i),a=t.pending,a===null?(i.next=t.pending=i,AA(t,i)):(i.next=a.next,t.pending=a.next=i)}}function AA(e,t){var a=t.action,s=t.payload,r=e.state;if(t.isTransition){var i=he.T,m={};m.types=i!==null?i.types:null,he.T=m;try{var S=a(r,s),I=he.S;I!==null&&I(m,S),fA(e,t,S)}catch(X){fu(e,t,X)}finally{i!==null&&m.types!==null&&(i.types=m.types),he.T=i}}else try{i=a(r,s),fA(e,t,i)}catch(X){fu(e,t,X)}}function fA(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){xA(e,t,s)},function(s){return fu(e,t,s)}):xA(e,t,a)}function xA(e,t,a){t.status="fulfilled",t.value=a,hA(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,AA(e,a)))}function fu(e,t,a){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do t.status="rejected",t.reason=a,hA(t),t=t.next;while(t!==s)}e.action=null}function hA(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function bA(e,t){return t}function pA(e,t){if(Je){var a=Nt.formState;if(a!==null){e:{var s=Pe;if(Je){if(Lt){t:{for(var r=Lt,i=Qn;r.nodeType!==8;){if(!i){r=null;break t}if(r=Wn(r.nextSibling),r===null){r=null;break t}}i=r.data,r=i==="F!"||i==="F"?r:null}if(r){Lt=Wn(r.nextSibling),s=r.data==="F!";break e}}fs(s)}s=!1}s&&(t=a[0])}}return a=yn(),a.memoizedState=a.baseState=t,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:bA,lastRenderedState:t},a.queue=s,a=DA.bind(null,Pe,s),s.dispatch=a,s=Au(!1),i=Ru.bind(null,Pe,!1,s.queue),s=yn(),r={state:t,dispatch:null,action:e,pending:null},s.queue=r,a=yg.bind(null,Pe,r,i,a),r.dispatch=a,s.memoizedState=e,[t,a,!1]}function gA(e){var t=zt();return RA(t,St,e)}function RA(e,t,a){if(t=du(e,t,bA)[0],e=Zo(Va)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var s=wr(t)}catch(m){throw m===jl?Mo:m}else s=t;t=zt();var r=t.queue,i=r.dispatch;return a!==t.memoizedState&&(Pe.flags|=2048,wl(9,{destroy:void 0},Ng.bind(null,r,a),null)),[s,i,e]}function Ng(e,t){e.action=t}function SA(e){var t=zt(),a=St;if(a!==null)return RA(t,a,e);zt(),t=t.memoizedState,a=zt();var s=a.queue.dispatch;return a.memoizedState=e,[t,s,!1]}function wl(e,t,a,s){return e={tag:e,create:a,deps:s,inst:t,next:null},t=Pe.updateQueue,t===null&&(t=Po(),Pe.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(s=a.next,a.next=e,e.next=s,t.lastEffect=e),e}function yA(){return zt().memoizedState}function zo(e,t,a,s){var r=yn();Pe.flags|=e,r.memoizedState=wl(1|t,{destroy:void 0},a,s===void 0?null:s)}function Fo(e,t,a,s){var r=zt();s=s===void 0?null:s;var i=r.memoizedState.inst;St!==null&&s!==null&&lu(s,St.memoizedState.deps)?r.memoizedState=wl(t,i,a,s):(Pe.flags|=e,r.memoizedState=wl(1|t,i,a,s))}function NA(e,t){zo(8390656,8,e,t)}function xu(e,t){Fo(2048,8,e,t)}function vg(e){Pe.flags|=4;var t=Pe.updateQueue;if(t===null)t=Po(),Pe.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function vA(e){var t=zt().memoizedState;return vg({ref:t,nextImpl:e}),function(){if((ot&2)!==0)throw Error(c(440));return t.impl.apply(void 0,arguments)}}function LA(e,t){return Fo(4,2,e,t)}function OA(e,t){return Fo(4,4,e,t)}function jA(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function IA(e,t,a){a=a!=null?a.concat([e]):null,Fo(4,4,jA.bind(null,t,e),a)}function hu(){}function BA(e,t){var a=zt();t=t===void 0?null:t;var s=a.memoizedState;return t!==null&&lu(t,s[1])?s[0]:(a.memoizedState=[e,t],e)}function HA(e,t){var a=zt();t=t===void 0?null:t;var s=a.memoizedState;if(t!==null&&lu(t,s[1]))return s[0];if(s=e(),el){En(!0);try{e()}finally{En(!1)}}return a.memoizedState=[s,t],s}function bu(e,t,a){return a===void 0||(Xa&1073741824)!==0&&($e&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=Pf(),Pe.lanes|=e,Os|=e,a)}function wA(e,t,a,s){return Cn(a,t)?a:Rs.current!==null?(e=bu(e,a,s),Cn(e,t)||(Vt=!0),e):(Xa&106)===0||(Xa&1073741824)!==0&&($e&261930)===0?(Vt=!0,e.memoizedState=a):(e=Pf(),Pe.lanes|=e,Os|=e,t)}function EA(e,t,a,s,r){var i=ae.p;ae.p=i!==0&&8>i?i:8;var m=he.T,S={};S.types=m!==null?m.types:null,he.T=S,Ru(e,!1,t,a);try{var I=r(),X=he.S;if(X!==null&&X(S,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var ne=gg(I,s);Er(e,t,ne,Gn(e))}else Er(e,t,s,Gn(e))}catch(xe){Er(e,t,{then:function(){},status:"rejected",reason:xe},Gn())}finally{ae.p=i,m!==null&&S.types!==null&&(m.types=S.types),he.T=m}}function Lg(){}function pu(e,t,a,s){if(e.tag!==5)throw Error(c(476));var r=MA(e).queue;EA(e,r,t,ye,a===null?Lg:function(){return CA(e),a(s)})}function MA(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ye,baseState:ye,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Va,lastRenderedState:ye},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Va,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function CA(e){var t=MA(e);t.next===null&&(t=e.alternate.memoizedState),Er(e,t.next.queue,{},Gn())}function gu(){return dn(ql)}function kA(){return zt().memoizedState}function UA(){return zt().memoizedState}function Og(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=Gn();e=ps(a);var s=gs(t,e,a);s!==null&&(Hn(s,t,a),Or(s,t,a)),t={cache:Xc()},e.payload=t;return}t=t.return}}function jg(e,t,a){var s=Gn();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Jo(e)?TA(t,a):(a=Tc(e,t,a,s),a!==null&&(Hn(a,e,s),GA(a,t,s)))}function DA(e,t,a){var s=Gn();Er(e,t,a,s)}function Er(e,t,a,s){var r={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Jo(e))TA(t,r);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var m=t.lastRenderedState,S=i(m,a);if(r.hasEagerState=!0,r.eagerState=S,Cn(S,m))return No(e,t,r,0),Nt===null&&yo(),!1}catch{}finally{}if(a=Tc(e,t,r,s),a!==null)return Hn(a,e,s),GA(a,t,s),!0}return!1}function Ru(e,t,a,s){if(s={lane:2,revertLane:ud(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Jo(e)){if(t)throw Error(c(479))}else t=Tc(e,a,s,2),t!==null&&Hn(t,e,2)}function Jo(e){var t=e.alternate;return e===Pe||t!==null&&t===Pe}function TA(e,t){Bl=Go=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function GA(e,t,a){if((a&4194048)!==0){var s=t.lanes;s&=e.pendingLanes,a|=s,t.lanes=a,Qe(e,a)}}var Xo={readContext:dn,use:_o,useCallback:Dt,useContext:Dt,useEffect:Dt,useImperativeHandle:Dt,useLayoutEffect:Dt,useInsertionEffect:Dt,useMemo:Dt,useReducer:Dt,useRef:Dt,useState:Dt,useDebugValue:Dt,useDeferredValue:Dt,useTransition:Dt,useSyncExternalStore:Dt,useId:Dt,useHostTransitionStatus:Dt,useFormState:Dt,useActionState:Dt,useOptimistic:Dt,useMemoCache:Dt,useCacheRefresh:Dt,useEffectEvent:Dt},KA={readContext:dn,use:_o,useCallback:function(e,t){return yn().memoizedState=[e,t===void 0?null:t],e},useContext:dn,useEffect:NA,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,zo(4194308,4,jA.bind(null,t,e),a)},useLayoutEffect:function(e,t){return zo(4194308,4,e,t)},useInsertionEffect:function(e,t){zo(4,2,e,t)},useMemo:function(e,t){var a=yn();t=t===void 0?null:t;var s=e();if(el){En(!0);try{e()}finally{En(!1)}}return a.memoizedState=[s,t],s},useReducer:function(e,t,a){var s=yn();if(a!==void 0){var r=a(t);if(el){En(!0);try{a(t)}finally{En(!1)}}}else r=t;return s.memoizedState=s.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},s.queue=e,e=e.dispatch=jg.bind(null,Pe,e),[s.memoizedState,e]},useRef:function(e){var t=yn();return e={current:e},t.memoizedState=e},useState:function(e){e=Au(e);var t=e.queue,a=DA.bind(null,Pe,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:hu,useDeferredValue:function(e,t){var a=yn();return bu(a,e,t)},useTransition:function(){var e=Au(!1);return e=EA.bind(null,Pe,e.queue,!0,!1),yn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var s=Pe,r=yn();if(Je){if(a===void 0)throw Error(c(407));a=a()}else{if(a=t(),Nt===null)throw Error(c(349));($e&127)!==0||oA(s,t,a)}r.memoizedState=a;var i={value:a,getSnapshot:t};return r.queue=i,NA(cA.bind(null,s,i,e),[e]),s.flags|=2048,wl(9,{destroy:void 0},iA.bind(null,s,i,a,t),null),a},useId:function(){var e=yn(),t=Nt.identifierPrefix;if(Je){var a=ya,s=Sa;a=(s&~(1<<32-Kt(s)-1)).toString(32)+a,t="_"+t+"R_"+a,a=Ko++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Rg++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:gu,useFormState:pA,useActionState:pA,useOptimistic:function(e){var t=yn();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Ru.bind(null,Pe,!0,a),a.dispatch=t,[e,t]},useMemoCache:uu,useCacheRefresh:function(){return yn().memoizedState=Og.bind(null,Pe)},useEffectEvent:function(e){var t=yn(),a={impl:e};return t.memoizedState=a,function(){if((ot&2)!==0)throw Error(c(440));return a.impl.apply(void 0,arguments)}}},PA={readContext:dn,use:_o,useCallback:BA,useContext:dn,useEffect:xu,useImperativeHandle:IA,useInsertionEffect:LA,useLayoutEffect:OA,useMemo:HA,useReducer:Zo,useRef:yA,useState:function(){return Zo(Va)},useDebugValue:hu,useDeferredValue:function(e,t){var a=zt();return wA(a,St.memoizedState,e,t)},useTransition:function(){var e=Zo(Va)[0],t=zt().memoizedState;return[typeof e=="boolean"?e:wr(e),t]},useSyncExternalStore:rA,useId:kA,useHostTransitionStatus:gu,useFormState:gA,useActionState:gA,useOptimistic:function(e,t){var a=zt();return mA(a,St,e,t)},useMemoCache:uu,useCacheRefresh:UA,useEffectEvent:vA},Ig={readContext:dn,use:_o,useCallback:BA,useContext:dn,useEffect:xu,useImperativeHandle:IA,useInsertionEffect:LA,useLayoutEffect:OA,useMemo:HA,useReducer:mu,useRef:yA,useState:function(){return mu(Va)},useDebugValue:hu,useDeferredValue:function(e,t){var a=zt();return St===null?bu(a,e,t):wA(a,St.memoizedState,e,t)},useTransition:function(){var e=mu(Va)[0],t=zt().memoizedState;return[typeof e=="boolean"?e:wr(e),t]},useSyncExternalStore:rA,useId:kA,useHostTransitionStatus:gu,useFormState:SA,useActionState:SA,useOptimistic:function(e,t){var a=zt();return St!==null?mA(a,St,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:uu,useCacheRefresh:UA,useEffectEvent:vA};function Su(e,t,a,s){t=e.memoizedState,a=a(s,t),a=a==null?t:re({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var yu={enqueueSetState:function(e,t,a){e=e._reactInternals;var s=Gn(),r=ps(s);r.payload=t,a!=null&&(r.callback=a),t=gs(e,r,s),t!==null&&(Hn(t,e,s),Or(t,e,s))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var s=Gn(),r=ps(s);r.tag=1,r.payload=t,a!=null&&(r.callback=a),t=gs(e,r,s),t!==null&&(Hn(t,e,s),Or(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=Gn(),s=ps(a);s.tag=2,t!=null&&(s.callback=t),t=gs(e,s,a),t!==null&&(Hn(t,e,a),Or(t,e,a))}};function _A(e,t,a,s,r,i,m){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,i,m):t.prototype&&t.prototype.isPureReactComponent?!pr(a,s)||!pr(r,i):!0}function ZA(e,t,a,s){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,s),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,s),t.state!==e&&yu.enqueueReplaceState(t,t.state,null)}function tl(e,t){var a=t;if("ref"in t){a={};for(var s in t)s!=="ref"&&(a[s]=t[s])}if(e=e.defaultProps){a===t&&(a=re({},a));for(var r in e)a[r]===void 0&&(a[r]=e[r])}return a}function zA(e){So(e)}function FA(e){console.error(e)}function JA(e){So(e)}function Vo(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(s){setTimeout(function(){throw s})}}function XA(e,t,a){try{var s=e.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function Nu(e,t,a){return a=ps(a),a.tag=3,a.payload={element:null},a.callback=function(){Vo(e,t)},a}function VA(e){return e=ps(e),e.tag=3,e}function YA(e,t,a,s){var r=a.type.getDerivedStateFromError;if(typeof r=="function"){var i=s.value;e.payload=function(){return r(i)},e.callback=function(){XA(t,a,s)}}var m=a.stateNode;m!==null&&typeof m.componentDidCatch=="function"&&(e.callback=function(){XA(t,a,s),typeof r!="function"&&(js===null?js=new Set([this]):js.add(this));var S=s.stack;this.componentDidCatch(s.value,{componentStack:S!==null?S:""})})}function Bg(e,t,a,s,r){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(t=a.alternate,t!==null&&Xs(t,a,r,!0),a=mn.current,a!==null){switch(a.tag){case 31:case 13:case 19:return gn===null?xi():a.alternate===null&&Tt===0&&(Tt=3),a.flags&=-257,a.flags|=65536,a.lanes=r,s===Co?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([s]):t.add(s),od(e,s,r)),!1;case 22:return a.flags|=65536,s===Co?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([s]):a.add(s)),od(e,s,r)),!1}throw Error(c(435,a.tag))}return od(e,s,r),xi(),!1}if(Je)return t=mn.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=r,s!==Zc&&(e=Error(c(422),{cause:s}),Sr(Vn(e,a)))):(s!==Zc&&(t=Error(c(423),{cause:s}),Sr(Vn(t,a))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,s=Vn(s,a),r=Nu(e.stateNode,s,r),Wc(e,r),Tt!==4&&(Tt=2)),!1;var i=Error(c(520),{cause:s});if(i=Vn(i,a),Kr===null?Kr=[i]:Kr.push(i),Tt!==4&&(Tt=2),t===null)return!0;s=Vn(s,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=r&-r,a.lanes|=e,e=Nu(a.stateNode,s,e),Wc(a,e),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(js===null||!js.has(i))))return a.flags|=65536,r&=-r,a.lanes|=r,r=VA(r),YA(r,e,a,s),Wc(a,r),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var vu=Error(c(461)),Vt=!1;function Wt(e,t,a,s){t.child=e===null?W0(t,null,a,s):Ws(t,e.child,a,s)}function qA(e,t,a,s,r){a=a.render;var i=t.ref;if("ref"in s){var m={};for(var S in s)S!=="ref"&&(m[S]=s[S])}else m=s;return Vs(t),s=ru(e,t,a,m,i,r),S=ou(),e!==null&&!Vt?(iu(e,t,r),Ya(e,t,r)):(Je&&S&&jo(t),t.flags|=1,Wt(e,t,s,r),t.child)}function QA(e,t,a,s,r){if(e===null){var i=a.type;return typeof i=="function"&&!Gc(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,$A(e,t,i,s,r)):(e=Lo(a.type,null,s,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!Eu(e,r)){var m=i.memoizedProps;if(a=a.compare,a=a!==null?a:pr,a(m,s)&&e.ref===t.ref)return Ya(e,t,r)}return t.flags|=1,e=Za(i,s),e.ref=t.ref,e.return=t,t.child=e}function $A(e,t,a,s,r){if(e!==null){var i=e.memoizedProps;if(pr(i,s)&&e.ref===t.ref)if(Vt=!1,t.pendingProps=s=i,Eu(e,r))(e.flags&131072)!==0&&(Vt=!0);else return t.lanes=e.lanes,Ya(e,t,r)}return Lu(e,t,a,s,r)}function WA(e,t,a,s){var r=s.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|a:a,e!==null){for(s=t.child=e.child,r=0;s!==null;)r=r|s.lanes|s.childLanes,s=s.sibling;s=r&~i}else s=0,t.child=null;return ef(e,t,i,a,s)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Eo(t,i!==null?i.cachePool:null),i!==null?nA(t,i):tu(),aA(t);else return s=t.lanes=536870912,ef(e,t,i!==null?i.baseLanes|a:a,a,s)}else i!==null?(Eo(t,i.cachePool),nA(t,i),ys(),t.memoizedState=null):(e!==null&&Eo(t,null),tu(),ys());return Wt(e,t,r,a),t.child}function Mr(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function ef(e,t,a,s,r){var i=Yc();return i=i===null?null:{parent:Jt._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&Eo(t,null),tu(),aA(t),e!==null&&Xs(e,t,s,!0),t.childLanes=r,null}function Yo(e,t){return t=qo({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function tf(e,t,a){return Ws(t,e.child,null,a),e=Yo(t,t.pendingProps),e.flags|=2,kn(t),t.memoizedState=null,e}function Hg(e,t,a){var s=t.pendingProps,r=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Je){if(s.mode==="hidden")return e=Yo(t,s),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Mr(null,e);if(au(t),(e=Lt)?(e=Ix(e,Qn),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ms!==null?{id:Sa,overflow:ya}:null,retryLane:536870912,hydrationErrors:null},a=T0(e),a.return=t,t.child=a,tn=t,Lt=null)):e=null,e===null)throw fs(t);return t.lanes=536870912,null}return Yo(t,s)}var i=e.memoizedState;if(i!==null){var m=i.dehydrated;if(au(t),r)if(t.flags&256)t.flags&=-257,t=tf(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(c(558));else if(Vt||Xs(e,t,a,!1),r=(a&e.childLanes)!==0,Vt||r){if(Rs.current===null){if(s=Nt,s!==null&&(m=oa(s,a),m!==0&&m!==i.retryLane))throw i.retryLane=m,Zs(e,m),Hn(s,e,m),vu;xi()}t=tf(e,t,a)}else e=i.treeContext,Lt=Wn(m.nextSibling),tn=t,Je=!0,As=null,Qn=!1,e!==null&&P0(t,e),t=Yo(t,s),t.flags|=134221824;return t}return e=Za(e.child,{mode:s.mode,children:s.children}),e.ref=t.ref,t.child=e,e.return=t,e}function El(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(c(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Lu(e,t,a,s,r){return Vs(t),a=ru(e,t,a,s,void 0,r),s=ou(),e!==null&&!Vt?(iu(e,t,r),Ya(e,t,r)):(Je&&s&&jo(t),t.flags|=1,Wt(e,t,a,r),t.child)}function nf(e,t,a,s,r,i){return Vs(t),t.updateQueue=null,a=lA(t,s,a,r),sA(e),s=ou(),e!==null&&!Vt?(iu(e,t,i),Ya(e,t,i)):(Je&&s&&jo(t),t.flags|=1,Wt(e,t,a,i),t.child)}function af(e,t,a,s,r){if(Vs(t),t.stateNode===null){var i=yl,m=a.contextType;typeof m=="object"&&m!==null&&(i=dn(m)),i=new a(s,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=yu,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=s,i.state=t.memoizedState,i.refs={},Qc(t),m=a.contextType,i.context=typeof m=="object"&&m!==null?dn(m):yl,i.state=t.memoizedState,m=a.getDerivedStateFromProps,typeof m=="function"&&(Su(t,a,m,s),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(m=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),m!==i.state&&yu.enqueueReplaceState(i,i.state,null),Ir(t,s,i,r),jr(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),s=!0}else if(e===null){i=t.stateNode;var S=t.memoizedProps,I=tl(a,S);i.props=I;var X=i.context,ne=a.contextType;m=yl,typeof ne=="object"&&ne!==null&&(m=dn(ne));var xe=a.getDerivedStateFromProps;ne=typeof xe=="function"||typeof i.getSnapshotBeforeUpdate=="function",S=t.pendingProps!==S,ne||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(S||X!==m)&&ZA(t,i,s,m),bs=!1;var z=t.memoizedState;i.state=z,Ir(t,s,i,r),jr(),X=t.memoizedState,S||z!==X||bs?(typeof xe=="function"&&(Su(t,a,xe,s),X=t.memoizedState),(I=bs||_A(t,a,I,s,z,X,m))?(ne||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=s,t.memoizedState=X),i.props=s,i.state=X,i.context=m,s=I):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),s=!1)}else{i=t.stateNode,$c(e,t),m=t.memoizedProps,ne=tl(a,m),i.props=ne,xe=t.pendingProps,z=i.context,X=a.contextType,I=yl,typeof X=="object"&&X!==null&&(I=dn(X)),S=a.getDerivedStateFromProps,(X=typeof S=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(m!==xe||z!==I)&&ZA(t,i,s,I),bs=!1,z=t.memoizedState,i.state=z,Ir(t,s,i,r),jr();var $=t.memoizedState;m!==xe||z!==$||bs||e!==null&&e.dependencies!==null&&Ho(e.dependencies)?(typeof S=="function"&&(Su(t,a,S,s),$=t.memoizedState),(ne=bs||_A(t,a,ne,s,z,$,I)||e!==null&&e.dependencies!==null&&Ho(e.dependencies))?(X||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(s,$,I),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(s,$,I)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||m===e.memoizedProps&&z===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&z===e.memoizedState||(t.flags|=1024),t.memoizedProps=s,t.memoizedState=$),i.props=s,i.state=$,i.context=I,s=ne):(typeof i.componentDidUpdate!="function"||m===e.memoizedProps&&z===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&z===e.memoizedState||(t.flags|=1024),s=!1)}return i=s,El(e,t),s=(t.flags&128)!==0,i||s?(i=t.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&s?(t.child=Ws(t,e.child,null,r),t.child=Ws(t,null,a,r)):Wt(e,t,a,r),t.memoizedState=i.state,e=t.child):e=Ya(e,t,r),e}function sf(e,t,a,s){return Fs(),t.flags|=256,Wt(e,t,a,s),t.child}var Ou={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ju(e){return{baseLanes:e,cachePool:X0()}}function Iu(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=Tn),e}function lf(e,t,a){var s=t.pendingProps,r=!1,i=(t.flags&128)!==0,m;if((m=i)||(m=e!==null&&e.memoizedState===null?!1:(An.current&2)!==0),m&&(r=!0,t.flags&=-129),m=(t.flags&32)!==0,t.flags&=-33,e===null){if(Je){if(r?Ss(t):ys(),(e=Lt)?(e=Ix(e,Qn),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ms!==null?{id:Sa,overflow:ya}:null,retryLane:536870912,hydrationErrors:null},a=T0(e),a.return=t,t.child=a,tn=t,Lt=null)):e=null,e===null)throw fs(t);return jd(e)?t.lanes=32:t.lanes=536870912,null}return i=s.children,s=s.fallback,r?(ys(),r=t.mode,i=qo({mode:"hidden",children:i},r),s=zs(s,r,a,null),i.return=t,s.return=t,i.sibling=s,t.child=i,s=t.child,s.memoizedState=ju(a),s.childLanes=Iu(e,m,a),t.memoizedState=Ou,Mr(null,s)):(Ss(t),Bu(t,i))}var S=e.memoizedState;if(S!==null){var I=S.dehydrated;if(I!==null)return wg(e,t,i,m,s,I,S,a)}return r?(ys(),r=s.fallback,i=t.mode,S=e.child,I=S.sibling,s=Za(S,{mode:"hidden",children:s.children}),s.subtreeFlags=S.subtreeFlags&1206910976,I!==null?r=Za(I,r):(r=zs(r,i,a,null),r.flags|=2),r.return=t,s.return=t,s.sibling=r,t.child=s,Mr(null,s),s=t.child,r=e.child.memoizedState,r===null?r=ju(a):(i=r.cachePool,i!==null?(S=Jt._currentValue,i=i.parent!==S?{parent:S,pool:S}:i):i=X0(),r={baseLanes:r.baseLanes|a,cachePool:i}),s.memoizedState=r,s.childLanes=Iu(e,m,a),t.memoizedState=Ou,Mr(e.child,s)):(Ss(t),a=e.child,e=a.sibling,a=Za(a,{mode:"visible",children:s.children}),a.return=t,a.sibling=null,e!==null&&(m=t.deletions,m===null?(t.deletions=[e],t.flags|=16):m.push(e)),t.child=a,t.memoizedState=null,a)}function Bu(e,t){return t=qo({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function qo(e,t){return e=On(22,e,null,t),e.lanes=0,e}function Qo(e,t,a){return Ws(t,e.child,null,a),e=Bu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function wg(e,t,a,s,r,i,m,S){if(a)return t.flags&256?(Ss(t),t.flags&=-257,Qo(e,t,S)):t.memoizedState!==null?(ys(),t.child=e.child,t.flags|=128,null):(ys(),i=r.fallback,m=t.mode,r=qo({mode:"visible",children:r.children},m),i=zs(i,m,S,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,Ws(t,e.child,null,S),r=t.child,r.memoizedState=ju(S),r.childLanes=Iu(e,s,S),t.memoizedState=Ou,Mr(null,r));if(Ss(t),jd(i)){if(s=i.nextSibling&&i.nextSibling.dataset,s)var I=s.dgst;return s=I,s!==""&&(r=Error(c(419)),r.stack="",r.digest=s,Sr({value:r,source:null,stack:null})),Qo(e,t,S)}if(Vt||Xs(e,t,S,!1),s=(S&e.childLanes)!==0,Vt||s){if(Rs.current!==null)return Qo(e,t,S);if(s=Nt,s!==null&&(r=oa(s,S),r!==0&&r!==m.retryLane))throw m.retryLane=r,Zs(e,r),Hn(s,e,r),vu;return Od(i)||xi(),Qo(e,t,S)}return Od(i)?(t.flags|=192,t.child=e.child,null):(e=m.treeContext,Lt=Wn(i.nextSibling),tn=t,Je=!0,As=null,Qn=!1,e!==null&&P0(t,e),t=Bu(t,r.children),t.flags|=134221824,t)}function rf(e,t,a){e.lanes|=t;var s=e.alternate;s!==null&&(s.lanes|=t),Bo(e.return,t,a)}function of(e){for(var t=null;e!==null;){var a=e.alternate;a!==null&&To(a)===null&&(t=e),e=e.sibling}return t}function $o(e,t,a,s,r,i){var m=e.memoizedState;m===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:r,treeForkCount:i}:(m.isBackwards=t,m.rendering=null,m.renderingStartTime=0,m.last=s,m.tail=a,m.tailMode=r,m.treeForkCount=i)}function Hu(e){var t=e.child;for(e.child=null;t!==null;){var a=t.sibling;t.sibling=e.child,e.child=t,t=a}}function wu(e,t,a){var s=t.pendingProps,r=s.revealOrder,i=s.tail;s=s.children;var m=An.current;if(t.flags&128)return Br(t,m),null;var S=(m&2)!==0;if(S?(m=m&1|2,t.flags|=128):m&=1,Br(t,m),r==="backwards"&&e!==null?(Hu(e),Wt(e,t,s,a),Hu(e)):Wt(e,t,s,a),s=Je?Rr:0,!S&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&rf(e,a,t);else if(e.tag===19)rf(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(r){case"backwards":a=of(t.child),a===null?(r=t.child,t.child=null):(r=a.sibling,a.sibling=null,Hu(t)),$o(t,!0,r,null,i,s);break;case"unstable_legacy-backwards":for(a=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&To(e)===null){t.child=r;break}e=r.sibling,r.sibling=a,a=r,r=e}$o(t,!0,a,null,i,s);break;case"together":$o(t,!1,null,null,void 0,s);break;case"independent":t.memoizedState=null;break;default:a=of(t.child),a===null?(r=t.child,t.child=null):(r=a.sibling,a.sibling=null),$o(t,!1,r,a,i,s)}return t.child}function cf(e,t,a){var s=t.pendingProps;return xs(t,t.type,s.value),Wt(e,t,s.children,a),t.child}function Ya(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Os|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Xs(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,a=Za(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Za(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Eu(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Ho(e)))}function Eg(e,t,a){switch(t.tag){case 3:Ae(t,t.stateNode.containerInfo),xs(t,Jt,e.memoizedState.cache),Fs();break;case 27:case 5:ct(t);break;case 4:Ae(t,t.stateNode.containerInfo);break;case 10:xs(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,au(t),null;break;case 13:var s=t.memoizedState;if(s!==null){if(s.dehydrated!==null)return Ss(t),t.flags|=128,null;s=Xs(e,t,a,!1);var r=t.child.childLanes;return s||(a&r)!==0?lf(e,t,a):(Ss(t),e=Ya(e,t,a),e!==null?e.sibling:null)}Ss(t);break;case 19:if(t.flags&128)return wu(e,t,a);if(r=(e.flags&128)!==0,s=(a&t.childLanes)!==0,s||(Xs(e,t,a,!1),s=(a&t.childLanes)!==0),r){if(s)return wu(e,t,a);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Br(t,An.current),s)break;return null;case 22:return t.lanes=0,WA(e,t,a,t.pendingProps);case 24:xs(t,Jt,e.memoizedState.cache)}return Ya(e,t,a)}function uf(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Vt=!0;else{if(!Eu(e,a)&&(t.flags&128)===0)return Vt=!1,Eg(e,t,a);Vt=(e.flags&131072)!==0}else Vt=!1,Je&&(t.flags&1048576)!==0&&K0(t,Rr,t.index);switch(t.lanes=0,t.tag){case 16:e:{var s=t.pendingProps;if(e=Qs(t.elementType),t.type=e,typeof e=="function")Gc(e)?(s=tl(e,s),t.tag=1,t=af(null,t,e,s,a)):(t.tag=0,t=Lu(null,t,e,s,a));else{if(e!=null){var r=e.$$typeof;if(r===p){t.tag=11,t=qA(null,t,e,s,a);break e}else if(r===W){t.tag=14,t=QA(null,t,e,s,a);break e}else if(r===w){t.tag=10,t.type=e,t=cf(null,t,a);break e}}throw t=He(e)||e,Error(c(306,t,""))}}return t;case 0:return Lu(e,t,t.type,t.pendingProps,a);case 1:return s=t.type,r=tl(s,t.pendingProps),af(e,t,s,r,a);case 3:e:{if(Ae(t,t.stateNode.containerInfo),e===null)throw Error(c(387));s=t.pendingProps;var i=t.memoizedState;r=i.element,$c(e,t),Ir(t,s,null,a);var m=t.memoizedState;if(s=m.cache,xs(t,Jt,s),s!==i.cache&&Jc(t,[Jt],a,!0),jr(),s=m.element,i.isDehydrated)if(i={element:s,isDehydrated:!1,cache:m.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=sf(e,t,s,a);break e}else if(s!==r){r=Vn(Error(c(424)),t),Sr(r),t=sf(e,t,s,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Lt=Wn(e.firstChild),tn=t,Je=!0,As=null,Qn=!0,a=W0(t,null,s,a),t.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling}else{if(Fs(),s===r){t=Ya(e,t,a);break e}Wt(e,t,s,a)}t=t.child}return t;case 26:return El(e,t),e===null?(a=kx(t.type,null,t.pendingProps,null))?t.memoizedState=a:Je||(t.stateNode=fx(t.type,t.pendingProps,at.current,t)):t.memoizedState=kx(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ct(t),e===null&&Je&&(s=t.stateNode=wx(t.type,t.pendingProps,at.current),tn=t,Qn=!0,r=Lt,Hs(t.type)?(Id=r,Lt=Wn(s.firstChild)):Lt=r),Wt(e,t,t.pendingProps.children,a),El(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Je&&((r=s=Lt)&&(s=O1(s,t.type,t.pendingProps,Qn),s!==null?(t.stateNode=s,tn=t,Lt=Wn(s.firstChild),Qn=!1,r=!0):r=!1),r||fs(t)),ct(t),r=t.type,i=t.pendingProps,m=e!==null?e.memoizedProps:null,s=i.children,gd(r,i)?s=null:m!==null&&gd(r,m)&&(t.flags|=32),t.memoizedState!==null&&(r=ru(e,t,Sg,null,null,a),ql._currentValue=r),El(e,t),Wt(e,t,s,a),t.child;case 6:return e===null&&Je&&((e=a=Lt)&&(a=j1(a,t.pendingProps,Qn),a!==null?(t.stateNode=a,tn=t,Lt=null,e=!0):e=!1),e||fs(t)),null;case 13:return lf(e,t,a);case 4:return Ae(t,t.stateNode.containerInfo),s=t.pendingProps,e===null?t.child=Ws(t,null,s,a):Wt(e,t,s,a),t.child;case 11:return qA(e,t,t.type,t.pendingProps,a);case 7:return s=t.pendingProps,El(e,t),Wt(e,t,s,a),t.child;case 8:return Wt(e,t,t.pendingProps.children,a),t.child;case 12:return Wt(e,t,t.pendingProps.children,a),t.child;case 10:return cf(e,t,a);case 9:return r=t.type._context,s=t.pendingProps.children,Vs(t),r=dn(r),s=s(r),t.flags|=1,Wt(e,t,s,a),t.child;case 14:return QA(e,t,t.type,t.pendingProps,a);case 15:return $A(e,t,t.type,t.pendingProps,a);case 19:return wu(e,t,a);case 31:return Hg(e,t,a);case 22:return WA(e,t,a,t.pendingProps);case 24:return Vs(t),s=dn(Jt),e===null?(r=Yc(),r===null&&(r=Nt,i=Xc(),r.pooledCache=i,i.refCount++,i!==null&&(r.pooledCacheLanes|=a),r=i),t.memoizedState={parent:s,cache:r},Qc(t),xs(t,Jt,r)):((e.lanes&a)!==0&&($c(e,t),Ir(t,null,null,a),jr()),r=e.memoizedState,i=t.memoizedState,r.parent!==s?(r={parent:s,cache:s},t.memoizedState=r,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=r),xs(t,Jt,s)):(s=i.cache,xs(t,Jt,s),s!==r.cache&&Jc(t,[Jt],a,!0))),Wt(e,t,t.pendingProps.children,a),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),s=t.pendingProps,s.name!=null&&s.name!=="auto"?t.flags|=e===null?18882560:18874368:Je&&jo(t),e!==null&&e.memoizedProps.name!==s.name?t.flags|=4194816:El(e,t),Wt(e,t,s.children,a),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function qa(e){e.flags|=4}function Mu(e,t,a,s,r){var i;if((i=(e.mode&32)!==0)&&(i=a===null?Gx(t,s):Gx(t,s)&&(s.src!==a.src||s.srcSet!==a.srcSet)),i){if(e.flags|=16777216,(r&335544128)===r)if(e.stateNode.complete)e.flags|=8192;else if(Ff())e.flags|=8192;else throw $s=Co,qc}else e.flags&=-16777217}function df(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Kx(t))if(Ff())e.flags|=8192;else throw $s=Co,qc}function Wo(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?le():536870912,e.lanes|=t,Dl|=t)}function Cr(e,t){if(!Je)switch(e.tailMode){case"visible":break;case"collapsed":for(var a=e.tail,s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null;break;default:for(t=e.tail,a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null}}function Ot(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,s=0;if(t)for(var r=e.child;r!==null;)a|=r.lanes|r.childLanes,s|=r.subtreeFlags&1206910976,s|=r.flags&1206910976,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)a|=r.lanes|r.childLanes,s|=r.subtreeFlags,s|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=s,e.childLanes=a,t}function Mg(e,t,a){var s=t.pendingProps;switch(_c(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ot(t),null;case 1:return Ot(t),null;case 3:return a=t.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),t.memoizedState.cache!==s&&(t.flags|=2048),Ja(Jt),Me(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ll(t)?qa(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,zc())),Ot(t),null;case 26:var r=t.type,i=t.memoizedState;return e===null?(qa(t),i!==null?(Ot(t),df(t,i)):(Ot(t),Mu(t,r,null,s,a))):i?i!==e.memoizedState?(qa(t),Ot(t),df(t,i)):(Ot(t),t.flags&=-16777217):(e=e.memoizedProps,e!==s&&qa(t),Ot(t),Mu(t,r,e,s,a)),null;case 27:if(kt(t),a=at.current,r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==s&&qa(t);else{if(!s){if(t.stateNode===null)throw Error(c(166));return Ot(t),t.subtreeFlags&=-33554433,null}e=it.current,Ll(t)?_0(t):(e=wx(r,s,a),t.stateNode=e,qa(t))}return Ot(t),t.subtreeFlags&=-33554433,null;case 5:if(kt(t),r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==s&&qa(t);else{if(!s){if(t.stateNode===null)throw Error(c(166));return Ot(t),t.subtreeFlags&=-33554433,null}if(i=it.current,Ll(t))_0(t);else{var m=Fr(at.current);switch(i){case 1:i=m.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:i=m.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":i=m.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":i=m.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":i=m.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof s.is=="string"?m.createElement("select",{is:s.is}):m.createElement("select"),s.multiple?i.multiple=!0:s.size&&(i.size=s.size);break;default:i=typeof s.is=="string"?m.createElement(r,{is:s.is}):m.createElement(r)}}i[wt]=t,i[$t]=s;e:for(m=t.child;m!==null;){if(m.tag===5||m.tag===6)i.appendChild(m.stateNode);else if(m.tag!==4&&m.tag!==27&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;m=m.return}m.sibling.return=m.return,m=m.sibling}t.stateNode=i;e:switch(xn(i,r,s),r){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}s&&qa(t)}}return Ot(t),t.subtreeFlags&=-33554433,Mu(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==s&&qa(t);else{if(typeof s!="string"&&t.stateNode===null)throw Error(c(166));if(e=at.current,Ll(t)){if(e=t.stateNode,a=t.memoizedProps,s=null,r=tn,r!==null)switch(r.tag){case 27:case 5:s=r.memoizedProps}e[wt]=t,e=!!(e.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||ux(e.nodeValue,a)),e||fs(t,!0)}else e=Fr(e).createTextNode(s),e[wt]=t,t.stateNode=e}return Ot(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(s=Ll(t),a!==null){if(e===null){if(!s)throw Error(c(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(557));e[wt]=t}else Fs(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ot(t),e=!1}else a=zc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(kn(t),t):(kn(t),null);if((t.flags&128)!==0)throw Error(c(558))}return Ot(t),null;case 13:if(s=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=Ll(t),s!==null&&s.dehydrated!==null){if(e===null){if(!r)throw Error(c(318));if(r=t.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(c(317));r[wt]=t}else Fs(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ot(t),r=!1}else r=zc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return t.flags&256?(kn(t),t):(kn(t),null)}return kn(t),(t.flags&128)!==0?(t.lanes=a,t):(a=s!==null,e=e!==null&&e.memoizedState!==null,a&&(s=t.child,r=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(r=s.alternate.memoizedState.cachePool.pool),i=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(i=s.memoizedState.cachePool.pool),i!==r&&(s.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Wo(t,t.updateQueue),Ot(t),null);case 4:return Me(),e===null&&fd(t.stateNode.containerInfo),t.flags|=67108864,Ot(t),null;case 10:return Ja(t.type),Ot(t),null;case 19:if(su(t),s=t.memoizedState,s===null)return Ot(t),null;if(r=(t.flags&128)!==0,i=s.rendering,i===null)if(r)Cr(s,!1);else{if(Tt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=To(e),i!==null){for(t.flags|=128,Cr(s,!1),e=i.updateQueue,t.updateQueue=e,Wo(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)D0(a,e),a=a.sibling;return Br(t,An.current&1|2),Je&&za(t,s.treeForkCount),t.child}e=e.sibling}s.tail!==null&&Qt()>di&&(t.flags|=128,r=!0,Cr(s,!1),t.lanes=4194304)}else{if(!r)if(e=To(i),e!==null){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,Wo(t,e),Cr(s,!0),s.tail===null&&s.tailMode!=="collapsed"&&s.tailMode!=="visible"&&!i.alternate&&!Je)return Ot(t),null}else 2*Qt()-s.renderingStartTime>di&&a!==536870912&&(t.flags|=128,r=!0,Cr(s,!1),t.lanes=4194304);s.isBackwards?(i.sibling=t.child,t.child=i):(e=s.last,e!==null?e.sibling=i:t.child=i,s.last=i)}if(s.tail!==null){e=s.tail;e:{for(a=e;a!==null;){if(a.alternate!==null){a=!1;break e}a=a.sibling}a=!0}return s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Qt(),e.sibling=null,i=An.current,i=r?i&1|2:i&1,s.tailMode==="visible"||s.tailMode==="collapsed"||!a||Je?Br(t,i):(a=i,ve(mn,t),ve(An,a),gn===null&&(gn=t)),Je&&za(t,s.treeForkCount),e}return Ot(t),null;case 22:case 23:return kn(t),nu(),s=t.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(t.flags|=8192):s&&(t.flags|=8192),s?(a&536870912)!==0&&(t.flags&128)===0&&(Ot(t),t.subtreeFlags&6&&(t.flags|=8192)):Ot(t),a=t.updateQueue,a!==null&&Wo(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),s=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),s!==a&&(t.flags|=2048),e!==null&&Xe(qs),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Ja(Jt),Ot(t),null;case 25:return null;case 30:return t.flags|=33554432,Ot(t),null}throw Error(c(156,t.tag))}function Cg(e,t){switch(_c(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ja(Jt),Me(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return kt(t),null;case 31:if(t.memoizedState!==null){if(kn(t),t.alternate===null)throw Error(c(340));Fs()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(kn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));Fs()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return su(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return Me(),null;case 10:return Ja(t.type),null;case 22:case 23:return kn(t),nu(),e!==null&&Xe(qs),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ja(Jt),null;case 25:return null;default:return null}}function mf(e,t){switch(_c(t),t.tag){case 3:Ja(Jt),Me();break;case 26:case 27:case 5:kt(t);break;case 4:Me();break;case 31:t.memoizedState!==null&&kn(t);break;case 13:kn(t);break;case 19:su(t);break;case 10:Ja(t.type);break;case 22:case 23:kn(t),nu(),e!==null&&Xe(qs);break;case 24:Ja(Jt)}}function kr(e,t){try{var a=t.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var r=s.next;a=r;do{if((a.tag&e)===e){s=void 0;var i=a.create,m=a.inst;s=i(),m.destroy=s}a=a.next}while(a!==r)}}catch(S){pt(t,t.return,S)}}function Ns(e,t,a){try{var s=t.updateQueue,r=s!==null?s.lastEffect:null;if(r!==null){var i=r.next;s=i;do{if((s.tag&e)===e){var m=s.inst,S=m.destroy;if(S!==void 0){m.destroy=void 0,r=t;var I=a,X=S;try{X()}catch(ne){pt(r,I,ne)}}}s=s.next}while(s!==i)}}catch(ne){pt(t,t.return,ne)}}function Af(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{tA(t,a)}catch(s){pt(e,e.return,s)}}}function ff(e,t,a){a.props=tl(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(s){pt(e,t,s)}}function Na(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var s=e.stateNode;break;case 30:var r=e.stateNode,i=Pa(e.memoizedProps,r);(r.ref===null||r.ref.name!==i)&&(r.ref=Sx(i)),s=r.ref;break;case 7:if(e.stateNode===null){var m=new Kn(e);g(e.child,!1,v1,m,void 0,void 0),e.stateNode=m}s=e.stateNode;break;default:s=e.stateNode}typeof a=="function"?e.refCleanup=a(s):a.current=s}}catch(S){pt(e,t,S)}}function fn(e,t){var a=e.ref,s=e.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(r){pt(e,t,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(r){pt(e,t,r)}else a.current=null}function ei(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var a=0;a<t.length;a++)jx(e.stateNode,t[a])}function xf(e){for(var t=e.return;t!==null&&(ku(t)&&jx(e.stateNode,t.stateNode),!Cu(t));)t=t.return}function Ur(e){for(var t=e.return;t!==null&&(ku(t)&&L1(e.stateNode,t.stateNode),!Cu(t));)t=t.return}function Cu(e){return e.tag===5||e.tag===3||e.tag===27}function ku(e){return e&&e.tag===7&&e.stateNode!==null}function Uu(e){var t=e.type,a=e.memoizedProps,s=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break e;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(r){pt(e,e.return,r)}}function Du(e,t,a){try{var s=e.stateNode;r1(s,e.type,a,t),s[$t]=t}catch(r){pt(e,e.return,r)}}function hf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Hs(e.type)||e.tag===4}function Tu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||hf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Hs(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Gu(e,t,a,s){var r=e.tag;if(r===5||r===6)r=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(r,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(r),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Ra)),ei(e,s),lt=!0;else if(r!==4&&(r===27&&(ei(e,s),s=null,Hs(e.type)&&(a=e.stateNode,t=null)),e=e.child,e!==null))for(Gu(e,t,a,s),e=e.sibling;e!==null;)Gu(e,t,a,s),e=e.sibling}function ti(e,t,a,s){var r=e.tag;if(r===5||r===6)r=e.stateNode,t?a.insertBefore(r,t):a.appendChild(r),ei(e,s),lt=!0;else if(r!==4&&(r===27&&(ei(e,s),s=null,Hs(e.type)&&(a=e.stateNode)),e=e.child,e!==null))for(ti(e,t,a,s),e=e.sibling;e!==null;)ti(e,t,a,s),e=e.sibling}function bf(e){var t=e.stateNode,a=e.memoizedProps;try{for(var s=e.type,r=t.attributes;r.length;)t.removeAttributeNode(r[0]);xn(t,s,a),t[wt]=e,t[$t]=a}catch(i){pt(e,e.return,i)}}var ni=!1,Un=null;function pf(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(ni=!0)}var va=null;function gf(){var e=va;return va=null,e}var jn=0;function Ml(e,t,a,s,r){return jn=0,Rf(e.child,t,a,s,r)}function Rf(e,t,a,s,r){for(var i=!1;e!==null;){if(e.tag===5){var m=e.stateNode;if(s!==null){var S=yd(m);s.push(S),S.view&&(i=!0)}else i||yd(m).view&&(i=!0);ni=!0,gx(m,jn===0?t:t+"_"+jn,a),jn++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&r||Rf(e.child,t,a,s,r)&&(i=!0));e=e.sibling}return i}function La(e,t){for(;e!==null;)e.tag===5?Rx(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||La(e.child,t)),e=e.sibling}function ai(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(ai(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name==="auto")throw Error(c(544));var a=t.name;t=_a(t.default,t.share),t!=="none"&&(Ml(e,a,t,null,!1)||La(e.child,!1))}e=e.sibling}}function Ku(e,t){if(e.tag===30){var a=e.stateNode,s=e.memoizedProps,r=Pa(s,a),i=_a(s.default,a.paired?s.share:s.enter);i!=="none"?Ml(e,r,i,null,!1)?(ai(e),a.paired||t||Pl(e,s.onEnter)):La(e.child,!1):ai(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Ku(e,t),e=e.sibling;else ai(e)}function Pu(e){if(Un!==null&&Un.size!==0){var t=Un;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var a=e.memoizedProps,s=a.name;if(s!=null&&s!=="auto"){var r=t.get(s);if(r!==void 0){var i=_a(a.default,a.share);if(i!=="none"&&(Ml(e,s,i,null,!1)?(i=e.stateNode,r.paired=i,i.paired=r,Pl(e,a.onShare)):La(e.child,!1)),t.delete(s),t.size===0)break}}}Pu(e)}e=e.sibling}}}function _u(e){if(e.tag===30){var t=e.memoizedProps,a=Pa(t,e.stateNode),s=Un!==null?Un.get(a):void 0,r=_a(t.default,s!==void 0?t.share:t.exit);r!=="none"&&(Ml(e,a,r,null,!1)?s!==void 0?(r=e.stateNode,s.paired=r,r.paired=s,Un.delete(a),Pl(e,t.onShare)):Pl(e,t.onExit):La(e.child,!1)),Un!==null&&Pu(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)_u(e),e=e.sibling;else Un!==null&&Pu(e)}function Sf(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,a=Pa(t,e.stateNode);t=_a(t.default,t.update),e.flags&=-5,t!=="none"&&Ml(e,a,t,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&Sf(e);e=e.sibling}}function Zu(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var t=e.stateNode;t.paired!==null&&(t.paired=null,La(e.child,!1))}Zu(e)}e=e.sibling}}function si(e){if(e.tag===30)e.stateNode.paired=null,La(e.child,!1),Zu(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)si(e),e=e.sibling;else Zu(e)}function yf(e){for(e=e.child;e!==null;)e.tag===30?La(e.child,!1):(e.subtreeFlags&33554432)!==0&&yf(e),e=e.sibling}function zu(e,t,a,s,r,i,m){for(var S=!1;t!==null;){if(t.tag===5){var I=t.stateNode;if(i!==null&&jn<i.length){var X=i[jn],ne=yd(I);(X.view||ne.view)&&(S=!0);var xe;if(xe=(e.flags&4)===0)if(ne.clip)xe=!0;else{xe=X.rect;var z=ne.rect;xe=xe.y!==z.y||xe.x!==z.x||xe.height!==z.height||xe.width!==z.width}xe&&(e.flags|=4),ne.abs?ne=!X.abs:(X=X.rect,ne=ne.rect,ne=X.height!==ne.height||X.width!==ne.width),ne&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&gx(I,jn===0?a:a+"_"+jn,r),S&&(e.flags&4)!==0||(va===null&&(va=[]),va.push(I,jn===0?s:s+"_"+jn,t.memoizedProps)),jn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&m?e.flags|=t.flags&32:zu(e,t.child,a,s,r,i,m)&&(S=!0));t=t.sibling}return S}function Nf(e,t){for(e=e.child;e!==null;){if(e.tag===30){var a=e.memoizedProps,s=e.stateNode,r=Pa(a,s),i=_a(a.default,a.update),m;m=e.memoizedState,e.memoizedState=null,s=e;var S=e.child;jn=0,r=zu(s,S,r,r,i,m,!1),(e.flags&4)!==0&&r&&Pl(e,a.onUpdate)}else(e.subtreeFlags&33554432)!==0&&Nf(e);e=e.sibling}}var nn=!1,At=!1,Oa=!1,Fu=!1,vf=typeof WeakSet=="function"?WeakSet:Set,an=null,ja=!1,Dr=!1,li=!1,Ju=!1;function kg(e,t,a){if(e=e.containerInfo,bd=Ql,e=j0(e),Ec(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else e:{s=(s=e.ownerDocument)&&s.defaultView||window;var r=s.getSelection&&s.getSelection();if(r&&r.rangeCount!==0){s=r.anchorNode;var i=r.anchorOffset,m=r.focusNode;r=r.focusOffset;try{s.nodeType,m.nodeType}catch{s=null;break e}var S=0,I=-1,X=-1,ne=0,xe=0,z=e,$=null;t:for(;;){for(var Le;z!==s||i!==0&&z.nodeType!==3||(I=S+i),z!==m||r!==0&&z.nodeType!==3||(X=S+r),z.nodeType===3&&(S+=z.nodeValue.length),(Le=z.firstChild)!==null;)$=z,z=Le;for(;;){if(z===e)break t;if($===s&&++ne===i&&(I=S),$===m&&++xe===r&&(X=S),(Le=z.nextSibling)!==null)break;z=$,$=z.parentNode}z=Le}s=I===-1||X===-1?null:{start:I,end:X}}else s=null}s=s||{start:0,end:0}}else s=null;for(pd={focusedElem:e,selectionRange:s},Ql=!1,a=(a&335544064)===a,an=t,t=a?9270:1024;an!==null;){if(e=an,a&&(s=e.deletions,s!==null))for(i=0;i<s.length;i++)a&&_u(s[i]);if(e.alternate===null&&(e.flags&2)!==0)a&&pf(e),ri(a);else{if(e.tag===22){if(s=e.alternate,e.memoizedState!==null){s!==null&&s.memoizedState===null&&a&&_u(s),ri(a);continue}else if(s!==null&&s.memoizedState!==null){a&&pf(e),ri(a);continue}}s=e.child,(e.subtreeFlags&t)!==0&&s!==null?(s.return=e,an=s):(a&&Sf(e),ri(a))}}Un=null}function ri(e){for(;an!==null;){var t=an,a=e,s=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if((r&1024)!==0&&s!==null){a=void 0,r=s.memoizedProps,s=s.memoizedState;var i=t.stateNode;try{var m=tl(t.type,r);a=i.getSnapshotBeforeUpdate(m,s),i.__reactInternalSnapshotBeforeUpdate=a}catch(S){pt(t,t.return,S)}}break;case 3:if((r&1024)!==0){if(s=t.stateNode.containerInfo,a=s.nodeType,a===9)Ld(s);else if(a===1)switch(s.nodeName){case"HEAD":case"HTML":case"BODY":Ld(s);break;default:s.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&s!==null&&(a=Pa(s.memoizedProps,s.stateNode),r=t.memoizedProps,r=_a(r.default,r.update),r!=="none"&&Ml(s,a,r,s.memoizedState=[],!0));break;default:if((r&1024)!==0)throw Error(c(163))}if(s=t.sibling,s!==null){s.return=t.return,an=s;break}an=t.return}}function Lf(e,t,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:Ia(e,a),s&4&&kr(5,a);break;case 1:if(Ia(e,a),s&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(m){pt(a,a.return,m)}else{var r=tl(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(r,t,e.__reactInternalSnapshotBeforeUpdate)}catch(m){pt(a,a.return,m)}}s&64&&Af(a),s&512&&Na(a,a.return);break;case 3:if(Ia(e,a),s&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{tA(e,t)}catch(m){pt(a,a.return,m)}}break;case 27:t===null&&s&4&&bf(a);case 26:case 5:Ia(e,a),t===null&&s&4&&Uu(a),s&512&&Na(a,a.return);break;case 12:Ia(e,a);break;case 31:Ia(e,a),s&4&&Bf(e,a);break;case 13:Ia(e,a),s&4&&Hf(e,a),s&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Xg.bind(null,a),I1(e,a))));break;case 22:if(s=a.memoizedState!==null||nn,!s){var i=t!==null&&t.memoizedState!==null||At;t=nn,r=At,nn=s,(At=i)&&!r?(s=2,(a.subtreeFlags&8772)!==0&&(s|=1),da(e,a,s)):Ia(e,a),nn=t,At=r}break;case 30:Ia(e,a),s&512&&Na(a,a.return);break;case 7:s&512&&Na(a,a.return);default:Ia(e,a)}}function Xu(e,t){for(e=e.child;e!==null;)Of(e,t),e=e.sibling}function Of(e,t){switch(e.tag){case 5:case 26:try{var a=e.stateNode;if(t){var s=a.style;typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"}else{var r=e.stateNode,i=e.memoizedProps.style,m=i!=null&&i.hasOwnProperty("display")?i.display:null;r.style.display=m==null||typeof m=="boolean"?"":(""+m).trim()}}catch(I){pt(e,e.return,I)}Vu(e,t);break;case 6:try{e.stateNode.nodeValue=t?"":e.memoizedProps,lt=!0}catch(I){pt(e,e.return,I)}break;case 18:try{var S=e.stateNode;t?px(S,!0):px(e.stateNode,!1)}catch(I){pt(e,e.return,I)}break;case 22:case 23:e.memoizedState===null&&Xu(e,t);break;default:Xu(e,t)}}function Vu(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){e:{var a=e,s=t;switch(a.tag){case 4:Of(a,s);break e;case 22:a.memoizedState===null&&Vu(a,s);break e;default:Vu(a,s)}}e=e.sibling}}function jf(e){var t=e.alternate;t!==null&&(e.alternate=null,jf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ce(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Mt=null,In=!1;function ca(e,t,a){for(a=a.child;a!==null;)If(e,t,a),a=a.sibling}function If(e,t,a){if(Ht&&typeof Ht.onCommitFiberUnmount=="function")try{Ht.onCommitFiberUnmount(Zn,a)}catch{}switch(a.tag){case 26:At||fn(a,t),ca(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!At&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:At||fn(a,t),Ur(a);var s=Mt,r=In;Hs(a.type)&&(Mt=a.stateNode,In=!1),ca(e,t,a),Ex(a.stateNode,a.type,a.memoizedProps),Mt=s,In=r;break;case 5:At||fn(a,t),Ur(a);case 6:if(a.tag===6&&Ur(a),s=Mt,r=In,Mt=null,ca(e,t,a),Mt=s,In=r,Mt!==null)if(In)try{(Mt.nodeType===9?Mt.body:Mt.nodeName==="HTML"?Mt.ownerDocument.body:Mt).removeChild(a.stateNode),lt=!0}catch(i){pt(a,t,i)}else try{Mt.removeChild(a.stateNode),lt=!0}catch(i){pt(a,t,i)}break;case 18:Mt!==null&&(In?(e=Mt,bx(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),$l(e)):bx(Mt,a.stateNode));break;case 4:s=Mt,r=In,Mt=a.stateNode.containerInfo,In=!0,ca(e,t,a),Mt=s,In=r;break;case 0:case 11:case 14:case 15:Ns(2,a,t),At||Ns(4,a,t),ca(e,t,a);break;case 1:At||(fn(a,t),s=a.stateNode,typeof s.componentWillUnmount=="function"&&ff(a,t,s)),ca(e,t,a);break;case 21:ca(e,t,a);break;case 22:At=(s=At)||a.memoizedState!==null,ca(e,t,a),At=s;break;case 30:fn(a,t),ca(e,t,a);break;case 7:At||fn(a,t),ca(e,t,a);break;default:ca(e,t,a)}}function Bf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{$l(e)}catch(a){pt(t,t.return,a)}}}function Hf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{$l(e)}catch(a){pt(t,t.return,a)}}function Ug(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new vf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new vf),t;default:throw Error(c(435,e.tag))}}function oi(e,t){var a=Ug(e);t.forEach(function(s){if(!a.has(s)){a.add(s);var r=Vg.bind(null,e,s);s.then(r,r)}})}function Nn(e,t,a){var s=t.deletions;if(s!==null)for(var r=0;r<s.length;r++){var i=s[r],m=e,S=t,I=S;e:for(;I!==null;){switch(I.tag){case 27:if(Hs(I.type)){Mt=I.stateNode,In=!1;break e}break;case 5:Mt=I.stateNode,In=!1;break e;case 3:case 4:Mt=I.stateNode.containerInfo,In=!0;break e}I=I.return}if(Mt===null)throw Error(c(160));If(m,S,i),Mt=null,In=!1,m=i.alternate,m!==null&&(m.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)wf(t,e,a),t=t.sibling}var ua=null;function wf(e,t,a){var s=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(r&4&&(s=e.updateQueue,s=s!==null?s.events:null,s!==null))for(var i=0;i<s.length;i++){var m=s[i];m.ref.impl=m.nextImpl}Nn(t,e,a),vn(e),r&4&&(Ns(3,e,e.return),kr(3,e),Ns(5,e,e.return));break;case 1:Nn(t,e,a),vn(e),r&512&&(At||s===null||fn(s,s.return)),r&64&&nn&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?t:a.concat(t))));break;case 26:if(i=ua,Nn(t,e,a),vn(e),r&512&&(At||s===null||fn(s,s.return)),r&4)if(r=s!==null?s.memoizedState:null,a=e.memoizedState,s===null)if(a===null)if(e.stateNode===null)if(nn)e.stateNode=fx(e.type,e.memoizedProps,t.containerInfo,e);else{e:{t=e.type,a=e.memoizedProps,r=i.ownerDocument||i;t:switch(t){case"title":s=r.getElementsByTagName("title")[0],(!s||s[M]||s[wt]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=r.createElement(t),r.head.insertBefore(s,r.querySelector("head > title"))),xn(s,t,a),s[wt]=e,Ke(s),t=s;break e;case"link":if(i=Tx("link","href",r).get(t+(a.href||""))){for(m=0;m<i.length;m++)if(s=i[m],s.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&s.getAttribute("rel")===(a.rel==null?null:a.rel)&&s.getAttribute("title")===(a.title==null?null:a.title)&&s.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){i.splice(m,1);break t}}s=r.createElement(t),xn(s,t,a),r.head.appendChild(s);break;case"meta":if(i=Tx("meta","content",r).get(t+(a.content||""))){for(m=0;m<i.length;m++)if(s=i[m],s.getAttribute("content")===(a.content==null?null:""+a.content)&&s.getAttribute("name")===(a.name==null?null:a.name)&&s.getAttribute("property")===(a.property==null?null:a.property)&&s.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&s.getAttribute("charset")===(a.charSet==null?null:a.charSet)){i.splice(m,1);break t}}s=r.createElement(t),xn(s,t,a),r.head.appendChild(s);break;default:throw Error(c(468,t))}s[wt]=e,Ke(s),t=s}e.stateNode=t}else nn||Ed(i,e.type,e.stateNode);else e.stateNode=Dx(i,a,e.memoizedProps);else r!==a?(r===null?(t=s.stateNode,t===null||At||t.parentNode.removeChild(t)):r.count--,a===null?nn||Ed(i,e.type,e.stateNode):Dx(i,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Du(e,e.memoizedProps,s.memoizedProps);break;case 27:Nn(t,e,a),vn(e),r&512&&(At||s===null||fn(s,s.return)),s!==null&&r&4&&Du(e,e.memoizedProps,s.memoizedProps);break;case 5:if(i=Oa,Oa=!1,Nn(t,e,a),Oa=i,vn(e),r&512&&(At||s===null||fn(s,s.return)),e.flags&32){t=e.stateNode;try{xl(t,""),lt=!0}catch(ne){pt(e,e.return,ne)}}r&4&&e.stateNode!=null&&(t=e.memoizedProps,Du(e,t,s!==null?s.memoizedProps:t)),r&1024&&(Fu=!0);break;case 6:if(Nn(t,e,a),vn(e),r&4){if(e.stateNode===null)throw Error(c(162));t=e.memoizedProps,a=e.stateNode;try{a.nodeValue=t,lt=!0}catch(ne){pt(e,e.return,ne)}}break;case 3:if(lt=!1,yi=null,i=ua,ua=Jr(t.containerInfo),Nn(t,e,a),ua=i,vn(e),r&4&&s!==null&&s.memoizedState.isDehydrated)try{$l(t.containerInfo)}catch(ne){pt(e,e.return,ne)}Fu&&(Fu=!1,Ef(e)),lt=!1;break;case 4:r=Oa,Oa=nn,s=Qm(),i=ua,ua=Jr(e.stateNode.containerInfo),Nn(t,e,a),vn(e),ua=i,lt&&Dr&&(li=!0),lt=s,Oa=r;break;case 12:Nn(t,e,a),vn(e);break;case 31:Nn(t,e,a),vn(e),r&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,oi(e,t)));break;case 13:Nn(t,e,a),vn(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(ui=Qt()),r&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,oi(e,t)));break;case 22:i=e.memoizedState!==null,m=s!==null&&s.memoizedState!==null;var S=nn,I=At,X=Oa;nn=S||i,Oa=X||i,At=I||m,Nn(t,e,a),At=I,Oa=X,nn=S,vn(e),r&8192&&(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,!i||s===null||m||nn||At||(t=m||At,a=nn,s=At,nn=i||nn,At=t,vs(e,2),nn=a,At=s),!i&&Oa||Xu(e,i)),r&4&&(t=e.updateQueue,t!==null&&(a=t.retryQueue,a!==null&&(t.retryQueue=null,oi(e,a))));break;case 19:Nn(t,e,a),vn(e),r&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,oi(e,t)));break;case 30:r&512&&(At||s===null||fn(s,s.return)),r=Qm(),i=Dr,m=(a&335544064)===a,S=e.memoizedProps,Dr=m&&_a(S.default,S.update)!=="none",Nn(t,e,a),vn(e),m&&s!==null&&lt&&(e.flags|=4),Dr=i,lt=r;break;case 21:break;case 7:r&512&&(At||s===null||fn(s,s.return)),s&&s.stateNode!==null&&(s.stateNode._fragmentFiber=e);default:Nn(t,e,a),vn(e)}}function vn(e){var t=e.flags;if(t&2){try{for(var a,s=e.return;s!==null;){if(hf(s)){a=s;break}s=s.return}s=null;for(var r=e.return;r!==null;){if(ku(r)){var i=r.stateNode;s===null?s=[i]:s.push(i)}if(Cu(r))break;r=r.return}var m=s;if(a==null)throw Error(c(160));switch(a.tag){case 27:var S=a.stateNode,I=Tu(e);ti(e,I,S,m);break;case 5:var X=a.stateNode;a.flags&32&&(xl(X,""),a.flags&=-33);var ne=Tu(e);ti(e,ne,X,m);break;case 3:case 4:var xe=a.stateNode.containerInfo,z=Tu(e);Gu(e,z,xe,m);break;default:throw Error(c(161))}}catch($){pt(e,e.return,$)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ef(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Ef(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,Ql=!0,t.reset(),Ql=!1),e=e.sibling}}function Cl(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)Mf(t,e),t=t.sibling;else Nf(t)}function Mf(e,t){var a=e.alternate;if(a===null)Ku(e,!1);else switch(e.tag){case 3:if(Ju=ja=!1,gf(),Cl(t,e),!ja&&!li){if(e=va,e!==null)for(var s=0;s<e.length;s+=3){a=e[s];var r=e[s+1];Rx(a,e[s+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+r+")"})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Ju=!0}va=null;break;case 5:Cl(t,e);break;case 4:s=ja,ja=!1,Cl(t,e),ja&&(li=!0),ja=s;break;case 22:e.memoizedState===null&&(a.memoizedState!==null?Ku(e,!1):Cl(t,e));break;case 30:s=ja,r=gf(),ja=!1,Cl(t,e),ja&&(e.flags|=4);var i=e.memoizedProps,m=e.stateNode;t=Pa(i,m),m=Pa(a.memoizedProps,m);var S=_a(i.default,i.update);S==="none"?t=!1:(i=a.memoizedState,a.memoizedState=null,a=e.child,jn=0,t=zu(e,a,t,m,S,i,!0),jn!==(i===null?0:i.length)&&(e.flags|=32)),(e.flags&4)!==0&&t?(Pl(e,e.memoizedProps.onUpdate),va=r):r!==null&&(r.push.apply(r,va),va=r),ja=(e.flags&32)!==0?!0:s;break;default:Cl(t,e)}}function Ia(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Lf(e,t.alternate,t),t=t.sibling}function vs(e,t){for(e=e.child;e!==null;){var a=e,s=t;switch(a.tag){case 0:case 11:case 14:case 15:Ns(4,a,a.return),vs(a,s);break;case 1:fn(a,a.return);var r=a.stateNode;typeof r.componentWillUnmount=="function"&&ff(a,a.return,r),vs(a,s);break;case 27:(s&2)!==0&&Ex(a.stateNode,a.type,a.memoizedProps);case 5:fn(a,a.return),a.tag!==5&&a.tag!==27||Ur(a),vs(a,s);break;case 6:Ur(a);break;case 26:fn(a,a.return),r=a.stateNode,a.memoizedState!==null||r===null||At||r.parentNode.removeChild(r),vs(a,s);break;case 22:a.memoizedState===null&&vs(a,s);break;case 30:fn(a,a.return),vs(a,s);break;case 7:fn(a,a.return);default:vs(a,s)}e=e.sibling}}function da(e,t,a){for(a=(t.subtreeFlags&8772)!==0?a:a&-2,t=t.child;t!==null;){var s=t.alternate,r=e,i=t,m=i.flags,S=(a&1)!==0;switch(i.tag){case 0:case 11:case 15:da(r,i,a),kr(4,i);break;case 1:if(da(r,i,a),s=i,r=s.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(ne){pt(s,s.return,ne)}if(s=i,r=s.updateQueue,r!==null){var I=s.stateNode;try{var X=r.shared.hiddenCallbacks;if(X!==null)for(r.shared.hiddenCallbacks=null,r=0;r<X.length;r++)eA(X[r],I)}catch(ne){pt(s,s.return,ne)}}S&&m&64&&Af(i),Na(i,i.return);break;case 27:(a&2)!==0&&bf(i);case 5:i.tag!==5&&i.tag!==27||xf(i),da(r,i,a),S&&s===null&&m&4&&Uu(i),Na(i,i.return);break;case 6:xf(i);break;case 26:I=i.stateNode,i.memoizedState!==null||I===null||nn||Ed(Jr(I.ownerDocument),i.type,I),da(r,i,a),S&&s===null&&m&4&&Uu(i),Na(i,i.return);break;case 12:da(r,i,a);break;case 31:da(r,i,a),S&&m&4&&Bf(r,i);break;case 13:da(r,i,a),S&&m&4&&Hf(r,i);break;case 22:i.memoizedState===null&&da(r,i,a),Na(i,i.return);break;case 30:da(r,i,a),Na(i,i.return);break;case 7:Na(i,i.return);default:da(r,i,a)}t=t.sibling}}function Yu(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&yr(a))}function qu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&yr(e))}function $n(e,t,a,s){var r=(a&335544064)===a;if(t.subtreeFlags&(r?10262:10256))for(t=t.child;t!==null;)Cf(e,t,a,s),t=t.sibling;else r&&yf(t)}function Cf(e,t,a,s){var r=(a&335544064)===a;r&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&si(t);var i=t.flags;switch(t.tag){case 0:case 11:case 15:$n(e,t,a,s),i&2048&&kr(9,t);break;case 1:$n(e,t,a,s);break;case 3:$n(e,t,a,s),r&&Ju&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),i&2048&&(i=null,t.alternate!==null&&(i=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==i&&(t.refCount++,i!=null&&yr(i)));break;case 12:if(i&2048){$n(e,t,a,s),i=t.stateNode;try{var m=t.memoizedProps,S=m.id,I=m.onPostCommit;typeof I=="function"&&I(S,t.alternate===null?"mount":"update",i.passiveEffectDuration,-0)}catch(X){pt(t,t.return,X)}}else $n(e,t,a,s);break;case 31:$n(e,t,a,s);break;case 13:$n(e,t,a,s);break;case 23:break;case 22:m=t.stateNode,S=t.alternate,t.memoizedState!==null?(r&&S!==null&&S.memoizedState===null&&si(S),m._visibility&2?$n(e,t,a,s):Tr(e,t)):(r&&S!==null&&S.memoizedState!==null&&si(t),m._visibility&2?$n(e,t,a,s):(m._visibility|=2,kl(e,t,a,s,(t.subtreeFlags&10256)!==0||!1))),i&2048&&Yu(S,t);break;case 24:$n(e,t,a,s),i&2048&&qu(t.alternate,t);break;case 30:r&&(i=t.alternate,i!==null&&(La(i.child,!0),La(t.child,!0))),$n(e,t,a,s);break;default:$n(e,t,a,s)}}function kl(e,t,a,s,r){for(r=r&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,m=t,S=a,I=s,X=m.flags;switch(m.tag){case 0:case 11:case 15:kl(i,m,S,I,r),kr(8,m);break;case 23:break;case 22:var ne=m.stateNode;m.memoizedState!==null?ne._visibility&2?kl(i,m,S,I,r):Tr(i,m):(ne._visibility|=2,kl(i,m,S,I,r)),r&&X&2048&&Yu(m.alternate,m);break;case 24:kl(i,m,S,I,r),r&&X&2048&&qu(m.alternate,m);break;default:kl(i,m,S,I,r)}t=t.sibling}}function Tr(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,s=t,r=s.flags;switch(s.tag){case 22:Tr(a,s),r&2048&&Yu(s.alternate,s);break;case 24:Tr(a,s),r&2048&&qu(s.alternate,s);break;default:Tr(a,s)}t=t.sibling}}var nl=8192;function al(e,t,a){if(e.subtreeFlags&nl)for(e=e.child;e!==null;)kf(e,t,a),e=e.sibling}function kf(e,t,a){switch(e.tag){case 26:al(e,t,a),e.flags&nl&&(e.memoizedState!==null?_1(a,ua,e.memoizedState,e.memoizedProps):(e=e.stateNode,(t&335544128)===t&&_x(a,e)));break;case 5:al(e,t,a),e.flags&nl&&(e=e.stateNode,(t&335544128)===t&&_x(a,e));break;case 3:case 4:var s=ua;ua=Jr(e.stateNode.containerInfo),al(e,t,a),ua=s;break;case 22:e.memoizedState===null&&(s=e.alternate,s!==null&&s.memoizedState!==null?(s=nl,nl=16777216,al(e,t,a),nl=s):al(e,t,a));break;case 30:if((e.flags&nl)!==0&&(s=e.memoizedProps.name,s!=null&&s!=="auto")){var r=e.stateNode;r.paired=null,Un===null&&(Un=new Map),Un.set(s,r)}al(e,t,a);break;default:al(e,t,a)}}function Uf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Gr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var s=t[a];an=s,Tf(s,e)}Uf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Df(e),e=e.sibling}function Df(e){switch(e.tag){case 0:case 11:case 15:Gr(e),e.flags&2048&&Ns(9,e,e.return);break;case 3:Gr(e);break;case 12:Gr(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,ii(e)):Gr(e);break;default:Gr(e)}}function ii(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var s=t[a];an=s,Tf(s,e)}Uf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Ns(8,t,t.return),ii(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,ii(t));break;default:ii(t)}e=e.sibling}}function Tf(e,t){for(;an!==null;){var a=an;switch(a.tag){case 0:case 11:case 15:Ns(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:yr(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,an=s;else e:for(a=e;an!==null;){s=an;var r=s.sibling,i=s.return;if(jf(s),s===a){an=null;break e}if(r!==null){r.return=i,an=r;break e}an=i}}}var Dg={getCacheForType:function(e){var t=dn(Jt),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return dn(Jt).controller.signal}},Tg=typeof WeakMap=="function"?WeakMap:Map,ot=0,Nt=null,Ve=null,$e=0,bt=0,Dn=null,Ls=!1,Ul=!1,Qu=!1,Qa=0,Tt=0,Os=0,sl=0,ci=0,Tn=0,Dl=0,Kr=null,Bn=null,$u=!1,ui=0,Gf=0,di=1/0,mi=null,js=null,Ct=0,ma=null,ll=null,Ba=0,Wu=0,ed=null,Kf=null,Tl=null,Gl=null,Kl=null,Pr=0,Ai=null;function Gn(){return(ot&2)!==0&&$e!==0?$e&-$e:he.T!==null?ud():mt()}function Pf(){if(Tn===0)if(($e&536870912)===0||Je){var e=is;is<<=1,(is&3932160)===0&&(is=262144),Tn=e}else Tn=536870912;return e=mn.current,e!==null&&(e.flags|=32),Tn}function Pl(e,t){if(t!=null){var a=e.stateNode,s=a.ref;s===null&&(s=a.ref=Sx(Pa(e.memoizedProps,a))),Gl===null&&(Gl=[]),Gl.push(t.bind(null,s))}}function Hn(e,t,a){(e===Nt&&(bt===2||bt===9)||e.cancelPendingCommit!==null)&&(_l(e,0),Is(e,$e,Tn,!1)),we(e,a),((ot&2)===0||e!==Nt)&&(e===Nt&&((ot&2)===0&&(sl|=a),Tt===4&&Is(e,$e,Tn,!1)),Ha(e))}function _f(e,t,a){if((ot&6)!==0)throw Error(c(327));var s=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Fn(e,t),r=s?Pg(e,t):nd(e,t,!0),i=s;do{if(r===0){Ul&&!s&&Is(e,t,0,!1);break}else{if(a=e.current.alternate,i&&!Gg(a)){r=nd(e,t,!1),i=!1;continue}if(r===2){if(i=t,e.errorRecoveryDisabledLanes&i)var m=0;else m=e.pendingLanes&-536870913,m=m!==0?m:m&536870912?536870912:0;if(m!==0){t=m;e:{var S=e;r=Kr;var I=S.current.memoizedState.isDehydrated;if(I&&(_l(S,m).flags|=256),m=nd(S,m,!1),m!==2&&m!==6){if(Qu&&!I){S.errorRecoveryDisabledLanes|=i,sl|=i,r=4;break e}i=Bn,Bn=r,i!==null&&(Bn===null?Bn=i:Bn.push.apply(Bn,i))}r=m}if(i=!1,r!==2)continue}}if(r===1){_l(e,0),Is(e,t,0,!0);break}e:{switch(s=e,i=r,i){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:Is(s,t,Tn,!Ls);break e;case 2:Bn=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(r=ui+300-Qt(),10<r)){if(Is(s,t,Tn,!Ls),pn(s,0,!0)!==0)break e;Ba=t,s.timeoutHandle=Sd(Zf.bind(null,s,a,Bn,mi,$u,t,Tn,sl,Dl,Ls,i,"Throttled",-0,0),r);break e}Zf(s,a,Bn,mi,$u,t,Tn,sl,Dl,Ls,i,null,-0,0)}}break}while(!0);Ha(e)}function Zf(e,t,a,s,r,i,m,S,I,X,ne,xe,z,$){e.timeoutHandle=-1;var Le=t.subtreeFlags,Be=(i&335544064)===i;if(xe=null,(Be||Le&8192||(Le&16785408)===16785408)&&(xe={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ra},Un=null,kf(t,i,xe),Be&&(Le=xe,Be=e.containerInfo,Be=(Be.nodeType===9?Be:Be.ownerDocument).__reactViewTransition,Be!=null&&(Le.count++,Le.waitingForViewTransition=!0,Le=Yr.bind(Le),Be.finished.then(Le,Le))),Le=(i&62914560)===i?ui-Qt():(i&4194048)===i?Gf-Qt():0,Le=Z1(xe,Le),Le!==null)){Ba=i,e.cancelPendingCommit=Le(Qf.bind(null,e,t,i,a,s,r,m,S,I,X,ne,xe,null,z,$)),Is(e,i,m,!X);return}Qf(e,t,i,a,s,r,m,S,I,X,ne,xe)}function Gg(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var r=a[s],i=r.getSnapshot;r=r.value;try{if(!Cn(i(),r))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Is(e,t,a,s){t=v(e,t),t&=~ci,t&=~sl,e.suspendedLanes|=t,e.pingedLanes&=~t,s&&(e.warmLanes|=t),s=e.expirationTimes;for(var r=t;0<r;){var i=31-Kt(r),m=1<<i;s[i]=-1,r&=~m}a!==0&&on(e,a,t)}function fi(){return(ot&6)===0?(_r(0),!1):!0}function td(){if(Ve!==null){if(bt===0)var e=Ve.return;else e=Ve,Fa=Js=null,cu(e),Il=null,Lr=0,e=Ve;for(;e!==null;)mf(e.alternate,e),e=e.return;Ve=null}}function _l(e,t){var a=e.timeoutHandle;return a!==-1&&(e.timeoutHandle=-1,c1(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Ba=0,td(),Nt=e,Ve=a=Za(e.current,null),$e=t,bt=0,Dn=null,Ls=!1,Ul=Fn(e,t),Qu=!1,Dl=Tn=ci=sl=Os=Tt=0,Bn=Kr=null,$u=!1,Qa=v(e,t),yo(),a}function zf(e,t){Pe=null,he.H=Xo,t===jl||t===Mo?(t=q0(),bt=3):t===qc?(t=q0(),bt=4):bt=t===vu?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Dn=t,Ve===null&&(Tt=1,Vo(e,Vn(t,e.current)))}function Ff(){var e=mn.current;return e===null?!0:($e&4194048)===$e?gn===null:($e&62914560)===$e||($e&536870912)!==0?e===gn:!1}function Jf(){var e=he.H;return he.H=Xo,e===null?Xo:e}function Xf(){var e=he.A;return he.A=Dg,e}function xi(){Tt=4,Ls||($e&4194048)!==$e&&mn.current!==null||(Ul=!0),(Os&134217727)===0&&(sl&134217727)===0||Nt===null||Is(Nt,$e,Tn,!1)}function nd(e,t,a){var s=ot;ot|=2;var r=Jf(),i=Xf();(Nt!==e||$e!==t)&&(mi=null,_l(e,t)),t=!1;var m=Tt;e:do try{if(bt!==0&&Ve!==null){var S=Ve,I=Dn;switch(bt){case 8:td(),m=6;break e;case 3:case 2:case 9:case 6:mn.current===null&&(t=!0);var X=bt;if(bt=0,Dn=null,Zl(e,S,I,X),a&&Ul){m=0;break e}break;default:X=bt,bt=0,Dn=null,Zl(e,S,I,X)}}Kg(),m=Tt;break}catch(ne){zf(e,ne)}while(!0);return t&&e.shellSuspendCounter++,Fa=Js=null,ot=s,he.H=r,he.A=i,Ve===null&&(Nt=null,$e=0,yo()),m}function Kg(){for(;Ve!==null;)Vf(Ve)}function Pg(e,t){var a=ot;ot|=2;var s=Jf(),r=Xf();Nt!==e||$e!==t?(mi=null,di=Qt()+500,_l(e,t)):Ul=Fn(e,t);e:do try{if(bt!==0&&Ve!==null){t=Ve;var i=Dn;t:switch(bt){case 1:bt=0,Dn=null,Zl(e,t,i,1);break;case 2:case 9:if(V0(i)){bt=0,Dn=null,Yf(t);break}t=function(){bt!==2&&bt!==9||Nt!==e||(bt=7),Ha(e)},i.then(t,t);break e;case 3:bt=7;break e;case 4:bt=5;break e;case 7:V0(i)?(bt=0,Dn=null,Yf(t)):(bt=0,Dn=null,Zl(e,t,i,7));break;case 5:var m=null;switch(Ve.tag){case 26:m=Ve.memoizedState;case 5:case 27:var S=Ve;if(m?Kx(m):S.stateNode.complete){bt=0,Dn=null;var I=S.sibling;if(I!==null)Ve=I;else{var X=S.return;X!==null?(Ve=X,hi(X)):Ve=null}break t}}bt=0,Dn=null,Zl(e,t,i,5);break;case 6:bt=0,Dn=null,Zl(e,t,i,6);break;case 8:td(),Tt=6;break e;default:throw Error(c(462))}}_g();break}catch(ne){zf(e,ne)}while(!0);return Fa=Js=null,he.H=s,he.A=r,ot=a,Ve!==null?0:(Nt=null,$e=0,yo(),Tt)}function _g(){for(;Ve!==null&&!ba();)Vf(Ve)}function Vf(e){var t=uf(e.alternate,e,Qa);e.memoizedProps=e.pendingProps,t===null?hi(e):Ve=t}function Yf(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=nf(a,t,t.pendingProps,t.type,void 0,$e);break;case 11:t=nf(a,t,t.pendingProps,t.type.render,t.ref,$e);break;case 5:cu(t);var s=t;s===tn&&(Je?(Io(s),s.tag===5&&s.stateNode!=null&&(Lt=s.stateNode)):(Io(s),Je=!0));default:mf(a,t),t=Ve=D0(t,Qa),t=uf(a,t,Qa)}e.memoizedProps=e.pendingProps,t===null?hi(e):Ve=t}function Zl(e,t,a,s){Fa=Js=null,cu(t),Il=null,Lr=0;var r=t.return;try{if(Bg(e,r,t,a,$e)){Tt=1,Vo(e,Vn(a,e.current)),Ve=null;return}}catch(i){if(r!==null)throw Ve=r,i;Tt=1,Vo(e,Vn(a,e.current)),Ve=null;return}t.flags&32768?(Je||s===1?e=!0:Ul||($e&536870912)!==0?e=!1:(Ls=e=!0,(s===2||s===9||s===3||s===6)&&(s=mn.current,s!==null&&s.tag===13&&(s.flags|=16384))),qf(t,e)):hi(t)}function hi(e){var t=e;do{if((t.flags&32768)!==0){qf(t,Ls);return}e=t.return;var a=Mg(t.alternate,t,Qa);if(a!==null){Ve=a;return}if(t=t.sibling,t!==null){Ve=t;return}Ve=t=e}while(t!==null);Tt===0&&(Tt=5)}function qf(e,t){do{var a=Cg(e.alternate,e);if(a!==null){a.flags&=32767,Ve=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){Ve=e;return}Ve=e=a}while(e!==null);Tt=6,Ve=null}function Qf(e,t,a,s,r,i,m,S,I,X,ne,xe){e.cancelPendingCommit=null;do bi();while(Ct!==0);if((ot&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));e===Nt&&(Ve=Nt=null,$e=0),ll=t,ma=e,Ba=a,ed=r,Kf=s,Zg(e,t,a,m,S,I,xe)}}function Zg(e,t,a,s,r,i,m){var S=t.lanes|t.childLanes;if(Wu=S,S|=Dc,Ge(e,a,S,s,r,i),Gl=null,(a&335544064)===a?(Kl=bg(e),s=10262):(Kl=null,s=10256),(t.subtreeFlags&s)!==0||(t.flags&s)!==0?(e.callbackNode=null,e.callbackPriority=0,Yg(la,function(){return rd(),null})):(e.callbackNode=null,e.callbackPriority=0),ni=!1,s=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||s){s=he.T,he.T=null,r=ae.p,ae.p=2,i=ot,ot|=4;try{kg(e,t,a)}finally{ot=i,ae.p=r,he.T=s}}Ct=1,ni?Tl=x1(m,e.containerInfo,Kl,ad,sd,Fg,ld,rd,zg):(ad(),sd(),ld())}function zg(e){if(Ct!==0){var t=ma.onRecoverableError;t(e,{componentStack:null})}}function Fg(){Ct===3&&(Ct=0,Mf(ll,ma),Ct=4)}function ad(){if(Ct===1){Ct=0;var e=ma,t=ll,a=Ba,s=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||s){s=he.T,he.T=null;var r=ae.p;ae.p=2;var i=ot;ot|=4;try{Dr=li=!1,wf(t,e,a),a=pd;var m=j0(e.containerInfo),S=a.focusedElem,I=a.selectionRange;if(m!==S&&S&&S.ownerDocument&&O0(S.ownerDocument.documentElement,S)){if(I!==null&&Ec(S)){var X=I.start,ne=I.end;if(ne===void 0&&(ne=X),"selectionStart"in S)S.selectionStart=X,S.selectionEnd=Math.min(ne,S.value.length);else{var xe=S.ownerDocument||document,z=xe&&xe.defaultView||window;if(z.getSelection){var $=z.getSelection(),Le=S.textContent.length,Be=Math.min(I.start,Le),_e=I.end===void 0?Be:Math.min(I.end,Le);!$.extend&&Be>_e&&(m=_e,_e=Be,Be=m);var J=L0(S,Be),k=L0(S,_e);if(J&&k&&($.rangeCount!==1||$.anchorNode!==J.node||$.anchorOffset!==J.offset||$.focusNode!==k.node||$.focusOffset!==k.offset)){var Y=xe.createRange();Y.setStart(J.node,J.offset),$.removeAllRanges(),Be>_e?($.addRange(Y),$.extend(k.node,k.offset)):(Y.setEnd(k.node,k.offset),$.addRange(Y))}}}}for(xe=[],$=S;$=$.parentNode;)$.nodeType===1&&xe.push({element:$,left:$.scrollLeft,top:$.scrollTop});for(typeof S.focus=="function"&&S.focus(),S=0;S<xe.length;S++){var fe=xe[S];fe.element.scrollLeft=fe.left,fe.element.scrollTop=fe.top}}Ql=!!bd,pd=bd=null}finally{ot=i,ae.p=r,he.T=s}}e.current=t,Ct=2}}function sd(){if(Ct===2){Ct=0;var e=ma,t=ll,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=he.T,he.T=null;var s=ae.p;ae.p=2;var r=ot;ot|=4;try{Lf(e,t.alternate,t)}finally{ot=r,ae.p=s,he.T=a}}Ct=3}}function ld(){if(Ct===4||Ct===3){Ct=0;var e=Tl;Tl=null,sa();var t=ma,a=ll,s=Ba,r=Kf,i=(s&335544064)===s?10262:10256;if((a.subtreeFlags&i)!==0||(a.flags&i)!==0?Ct=5:(Ct=0,ll=ma=null,$f(t,t.pendingLanes)),i=t.pendingLanes,i===0&&(js=null),tt(s),a=a.stateNode,Ht&&typeof Ht.onCommitFiberRoot=="function")try{Ht.onCommitFiberRoot(Zn,a,void 0,(a.current.flags&128)===128)}catch{}if(r!==null){a=he.T,i=ae.p,ae.p=2,he.T=null;try{for(var m=t.onRecoverableError,S=0;S<r.length;S++){var I=r[S];m(I.value,{componentStack:I.stack})}}finally{he.T=a,ae.p=i}}if(r=Gl,m=Kl,Kl=null,r!==null&&(Gl=null,m===null&&(m=[]),e!==null))for(I=0;I<r.length;I++)a=(0,r[I])(m),a!==void 0&&e.finished.finally(a);(Ba&3)!==0&&bi(),Ha(t),i=t.pendingLanes,(s&261930)!==0&&(i&42)!==0?t===Ai?Pr++:(Pr=0,Ai=t):(Pr=0,Ai=null),_r(0)}}function $f(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,yr(t)))}function bi(){return Tl!==null&&(Tl.skipTransition(),Tl=null),ad(),sd(),ld(),rd()}function rd(){if(Ct!==5)return!1;var e=ma,t=Wu;Wu=0;var a=tt(Ba),s=he.T,r=ae.p;try{ae.p=32>a?32:a,he.T=null,a=ed,ed=null;var i=ma,m=Ba;if(Ct=0,ll=ma=null,Ba=0,(ot&6)!==0)throw Error(c(331));var S=ot;if(ot|=4,Df(i.current),Cf(i,i.current,m,a),ot=S,_r(0,!1),Ht&&typeof Ht.onPostCommitFiberRoot=="function")try{Ht.onPostCommitFiberRoot(Zn,i)}catch{}return!0}finally{ae.p=r,he.T=s,$f(e,t)}}function Wf(e,t,a){t=Vn(a,t),t=Nu(e.stateNode,t,2),e=gs(e,t,2),e!==null&&(we(e,2),Ha(e))}function pt(e,t,a){if(e.tag===3)Wf(e,e,a);else for(;t!==null;){if(t.tag===3){Wf(t,e,a);break}else if(t.tag===1){var s=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(js===null||!js.has(s))){e=Vn(a,e),a=VA(2),s=gs(t,a,2),s!==null&&(YA(a,s,t,e),we(s,2),Ha(s));break}}t=t.return}}function od(e,t,a){var s=e.pingCache;if(s===null){s=e.pingCache=new Tg;var r=new Set;s.set(t,r)}else r=s.get(t),r===void 0&&(r=new Set,s.set(t,r));r.has(a)||(Qu=!0,r.add(a),e=Jg.bind(null,e,t,a),t.then(e,e))}function Jg(e,t,a){var s=e.pingCache;s!==null&&s.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Nt===e&&($e&a)===a&&((Tt===4||Tt===3&&($e&62914560)===$e&&300>Qt()-ui)&&(ot&2)===0?_l(e,0):ci|=a,Dl===$e&&(Dl=0)),Ha(e)}function ex(e,t){t===0&&(t=le()),e=Zs(e,t),e!==null&&(we(e,t),Ha(e))}function Xg(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),ex(e,a)}function Vg(e,t){var a=0;switch(e.tag){case 31:case 13:var s=e.stateNode,r=e.memoizedState;r!==null&&(a=r.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(c(314))}s!==null&&s.delete(t),ex(e,a)}function Yg(e,t){return ss(e,t)}var zl=null,Fl=null,id=!1,pi=!1,cd=!1,Bs=0;function Ha(e){e!==Fl&&e.next===null&&(Fl===null?zl=Fl=e:Fl=Fl.next=e),pi=!0,id||(id=!0,Qg())}function _r(e,t){if(!cd&&pi){cd=!0;do for(var a=!1,s=zl;s!==null;){if(e!==0){var r=s.pendingLanes;if(r===0)var i=0;else{var m=s.suspendedLanes,S=s.pingedLanes;i=(1<<31-Kt(42|e)+1)-1,i&=r&~(m&~S),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,sx(s,i))}else i=$e,i=pn(s,s===Nt?i:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(i&3)===0||Fn(s,i)||(a=!0,sx(s,i));s=s.next}while(a);cd=!1}}function qg(){tx()}function tx(){pi=id=!1;var e=0;Bs!==0&&i1()&&(e=Bs);for(var t=Qt(),a=null,s=zl;s!==null;){var r=s.next,i=nx(s,t);i===0?(s.next=null,a===null?zl=r:a.next=r,r===null&&(Fl=a)):(a=s,(e!==0||(i&3)!==0)&&(pi=!0)),s=r}Ct!==0&&Ct!==5||_r(e),Bs!==0&&(Bs=0)}function nx(e,t){for(var a=e.suspendedLanes,s=e.pingedLanes,r=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var m=31-Kt(i),S=1<<m,I=r[m];I===-1?((S&a)===0||(S&s)!==0)&&(r[m]=oe(S,t)):I<=t&&(e.expiredLanes|=S),i&=~S}if(t=Nt,a=$e,a=pn(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s=e.callbackNode,a===0||e===t&&(bt===2||bt===9)||e.cancelPendingCommit!==null)return s!==null&&s!==null&&ka(s),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Fn(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(s!==null&&ka(s),tt(a)){case 2:case 8:a=pa;break;case 32:a=la;break;case 268435456:a=ra;break;default:a=la}return s=ax.bind(null,e),a=ss(a,s),e.callbackPriority=t,e.callbackNode=a,t}return s!==null&&s!==null&&ka(s),e.callbackPriority=2,e.callbackNode=null,2}function ax(e,t){if(Ct!==0&&Ct!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(bi()&&e.callbackNode!==a)return null;var s=$e;return s=pn(e,e===Nt?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s===0?null:(_f(e,s,t),nx(e,Qt()),e.callbackNode!=null&&e.callbackNode===a?ax.bind(null,e):null)}function sx(e,t){if(bi())return null;_f(e,t,!0)}function Qg(){u1(function(){(ot&6)!==0?ss(Ua,qg):tx()})}function ud(){if(Bs===0){var e=Ys;e===0&&(e=os,os<<=1,(os&261888)===0&&(os=256)),Bs=e}return Bs}function lx(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:fo(e)}function $g(e,t,a,s,r){if(t==="submit"&&a&&a.stateNode===r){var i=lx((r[$t]||null).action),m=s.submitter;m&&(t=(t=m[$t]||null)?lx(t.formAction):m.getAttribute("formAction"),t!==null&&(i=t,m=null));var S=new po("action","action",null,s,r);e.push({event:S,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Bs!==0){var I=new FormData(r,m);pu(a,{pending:!0,data:I,method:r.method,action:i},null,I)}}else typeof i=="function"&&(S.preventDefault(),I=new FormData(r,m),pu(a,{pending:!0,data:I,method:r.method,action:i},i,I))},currentTarget:r}]})}}for(var dd=0;dd<Uc.length;dd++){var md=Uc[dd],Wg=md.toLowerCase(),e1=md[0].toUpperCase()+md.slice(1);ia(Wg,"on"+e1)}ia(H0,"onAnimationEnd"),ia(w0,"onAnimationIteration"),ia(E0,"onAnimationStart"),ia("dblclick","onDoubleClick"),ia("focusin","onFocus"),ia("focusout","onBlur"),ia(cg,"onTransitionRun"),ia(ug,"onTransitionStart"),ia(dg,"onTransitionCancel"),ia(M0,"onTransitionEnd"),jt("onMouseEnter",["mouseout","mouseover"]),jt("onMouseLeave",["mouseout","mouseover"]),jt("onPointerEnter",["pointerout","pointerover"]),jt("onPointerLeave",["pointerout","pointerover"]),st("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),st("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),st("onBeforeInput",["compositionend","keypress","textInput","paste"]),st("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),st("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),st("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),t1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Zr));function rx(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var s=e[a],r=s.event;s=s.listeners;e:{var i=void 0;if(t)for(var m=s.length-1;0<=m;m--){var S=s[m],I=S.instance,X=S.currentTarget;if(S=S.listener,I!==i&&r.isPropagationStopped())break e;i=S,r.currentTarget=X;try{i(r)}catch(ne){So(ne)}r.currentTarget=null,i=I}else for(m=0;m<s.length;m++){if(S=s[m],I=S.instance,X=S.currentTarget,S=S.listener,I!==i&&r.isPropagationStopped())break e;i=S,r.currentTarget=X;try{i(r)}catch(ne){So(ne)}r.currentTarget=null,i=I}}}}function Ye(e,t){var a=t[ur];a===void 0&&(a=t[ur]=new Set);var s=e+"__bubble";a.has(s)||(ox(t,e,2,!1),a.add(s))}function Ad(e,t,a){var s=0;t&&(s|=4),ox(a,e,s,t)}var gi="_reactListening"+Math.random().toString(36).slice(2);function fd(e){if(!e[gi]){e[gi]=!0,Zt.forEach(function(a){a!=="selectionchange"&&(t1.has(a)||Ad(a,!1,e),Ad(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[gi]||(t[gi]=!0,Ad("selectionchange",!1,t))}}function ox(e,t,a,s){switch(qx(t)){case 2:var r=X1;break;case 8:r=V1;break;default:r=Cd}a=r.bind(null,t,a,e),r=void 0,!yc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),s?r!==void 0?e.addEventListener(t,a,{capture:!0,passive:r}):e.addEventListener(t,a,!0):r!==void 0?e.addEventListener(t,a,{passive:r}):e.addEventListener(t,a,!1)}function xd(e,t,a,s,r){var i=s;if((t&1)===0&&(t&2)===0&&s!==null)e:for(;;){if(s===null)return;var m=s.tag;if(m===3||m===4){var S=s.stateNode.containerInfo;if(S===r)break;if(m===4)for(m=s.return;m!==null;){var I=m.tag;if((I===3||I===4)&&m.stateNode.containerInfo===r)return;m=m.return}for(;S!==null;){if(m=De(S),m===null)return;if(I=m.tag,I===5||I===6||I===26||I===27){s=i=m;continue e}S=S.parentNode}}s=s.return}r0(function(){var X=i,ne=Rc(a),xe=[];e:{var z=C0.get(e);if(z!==void 0){var $=po,Le=e;switch(e){case"keypress":if(ho(a)===0)break e;case"keydown":case"keyup":$=Gp;break;case"focusin":Le="focus",$=Oc;break;case"focusout":Le="blur",$=Oc;break;case"beforeblur":case"afterblur":$=Oc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":$=c0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":$=jp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":$=zp;break;case H0:case w0:case E0:$=Hp;break;case M0:$=Jp;break;case"scroll":case"scrollend":$=Lp;break;case"wheel":$=Vp;break;case"copy":case"cut":case"paste":$=Ep;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":$=d0;break;case"submit":$=_p;break;case"toggle":case"beforetoggle":$=qp}var Be=(t&4)!==0,_e=!Be&&(e==="scroll"||e==="scrollend"),J=Be?z!==null?z+"Capture":null:z;Be=[];for(var k=X,Y;k!==null;){var fe=k;if(Y=fe.stateNode,fe=fe.tag,fe!==5&&fe!==26&&fe!==27||Y===null||J===null||(fe=dr(k,J),fe!=null&&Be.push(zr(k,fe,Y))),_e)break;k=k.return}0<Be.length&&(z=new $(z,Le,null,a,ne),xe.push({event:z,listeners:Be}))}}if((t&7)===0){e:{if($=e==="mouseover"||e==="pointerover",z=e==="mouseout"||e==="pointerout",$&&a!==gc&&(Le=a.relatedTarget||a.fromElement)&&(De(Le)||Le[cs]))break e;(z||$)&&(Le=ne.window===ne?ne:($=ne.ownerDocument)?$.defaultView||$.parentWindow:window,z?($=a.relatedTarget||a.toElement,z=X,$=$?De($):null,$!==null&&(_e=f($),Be=$.tag,$!==_e||Be!==5&&Be!==27&&Be!==6)&&($=null)):(z=null,$=X),z!==$&&(Be=c0,fe="onMouseLeave",J="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(Be=d0,fe="onPointerLeave",J="onPointerEnter",k="pointer"),_e=z==null?Le:Et(z),Y=$==null?Le:Et($),Le=new Be(fe,k+"leave",z,a,ne),Le.target=_e,Le.relatedTarget=Y,fe=null,De(ne)===X&&(Be=new Be(J,k+"enter",$,a,ne),Be.target=Y,Be.relatedTarget=_e,fe=Be),_e=fe,Be=z&&$?V(z,$,n1):null,z!==null&&ix(xe,Le,z,Be,!1),$!==null&&_e!==null&&ix(xe,_e,$,Be,!0)))}e:{if(z=X?Et(X):window,$=z.nodeName&&z.nodeName.toLowerCase(),$==="select"||$==="input"&&z.type==="file")var je=g0;else if(b0(z))if(R0)je=rg;else{je=sg;var We=ag}else $=z.nodeName,!$||$.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?X&&pc(X.elementType)&&(je=g0):je=lg;if(je&&(je=je(e,X))){p0(xe,je,a,ne);break e}We&&We(e,z,X)}switch(We=X?Et(X):window,e){case"focusin":(b0(We)||We.contentEditable==="true")&&(gl=We,Mc=X,gr=null);break;case"focusout":gr=Mc=gl=null;break;case"mousedown":Cc=!0;break;case"contextmenu":case"mouseup":case"dragend":Cc=!1,I0(xe,a,ne);break;case"selectionchange":if(ig)break;case"keydown":case"keyup":I0(xe,a,ne)}var Ee;if(Ic)e:{switch(e){case"compositionstart":var ke="onCompositionStart";break e;case"compositionend":ke="onCompositionEnd";break e;case"compositionupdate":ke="onCompositionUpdate";break e}ke=void 0}else pl?x0(e,a)&&(ke="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ke="onCompositionStart");ke&&(m0&&a.locale!=="ko"&&(pl||ke!=="onCompositionStart"?ke==="onCompositionEnd"&&pl&&(Ee=o0()):(us=ne,Nc="value"in us?us.value:us.textContent,pl=!0)),We=Ri(X,ke),0<We.length&&(ke=new u0(ke,e,null,a,ne),xe.push({event:ke,listeners:We}),Ee?ke.data=Ee:(Ee=h0(a),Ee!==null&&(ke.data=Ee)))),(Ee=$p?Wp(e,a):eg(e,a))&&(ke=Ri(X,"onBeforeInput"),0<ke.length&&(We=new u0("onBeforeInput","beforeinput",null,a,ne),xe.push({event:We,listeners:ke}),We.data=Ee)),$g(xe,e,X,a,ne)}rx(xe,t)})}function zr(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Ri(e,t){for(var a=t+"Capture",s=[];e!==null;){var r=e,i=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||i===null||(r=dr(e,a),r!=null&&s.unshift(zr(e,r,i)),r=dr(e,t),r!=null&&s.push(zr(e,r,i))),e.tag===3)return s;e=e.return}return[]}function n1(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function ix(e,t,a,s,r){for(var i=t._reactName,m=[];a!==null&&a!==s;){var S=a,I=S.alternate,X=S.stateNode;if(S=S.tag,I!==null&&I===s)break;S!==5&&S!==26&&S!==27||X===null||(I=X,r?(X=dr(a,i),X!=null&&m.unshift(zr(a,X,I))):r||(X=dr(a,i),X!=null&&m.push(zr(a,X,I)))),a=a.return}m.length!==0&&e.push({event:t,listeners:m})}var a1=/\r\n?/g,s1=/\u0000|\uFFFD/g;function cx(e){return(typeof e=="string"?e:""+e).replace(a1,`
`).replace(s1,"")}function ux(e,t){return t=cx(t),cx(e)===t}function gt(e,t,a,s,r,i){switch(a){case"children":if(typeof s=="string")t==="body"||t==="textarea"&&s===""||xl(e,s);else if(typeof s=="number"||typeof s=="bigint")t!=="body"&&xl(e,""+s);else return;break;case"className":Ao(e,"class",s);break;case"tabIndex":Ao(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Ao(e,a,s);break;case"style":s0(e,s,i);return;case"data":if(t!=="object"){Ao(e,"data",s);break}case"src":case"href":if(s===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=fo(s),e.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&gt(e,t,"name",r.name,r,null),gt(e,t,"formEncType",r.formEncType,r,null),gt(e,t,"formMethod",r.formMethod,r,null),gt(e,t,"formTarget",r.formTarget,r,null)):(gt(e,t,"encType",r.encType,r,null),gt(e,t,"method",r.method,r,null),gt(e,t,"target",r.target,r,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=fo(s),e.setAttribute(a,s);break;case"onClick":s!=null&&(e.onclick=Ra);return;case"onScroll":s!=null&&Ye("scroll",e);return;case"onScrollEnd":s!=null&&Ye("scrollend",e);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(c(61));if(a=s.__html,a!=null){if(r.children!=null)throw Error(c(60));(i!=null?i.__html:void 0)!==a&&(e.innerHTML=a)}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}a=fo(s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,s):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":s===!0?e.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,s):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(a,s):e.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(a):e.setAttribute(a,s);break;case"popover":Ye("beforetoggle",e),Ye("toggle",e),mo(e,"popover",s);break;case"xlinkActuate":Ga(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Ga(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Ga(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Ga(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Ga(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Ga(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Ga(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Ga(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Ga(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":mo(e,"is",s);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=Np.get(a)||a,mo(e,a,s);else return}lt=!0}function hd(e,t,a,s,r,i){switch(a){case"style":s0(e,s,i);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(c(61));if(a=s.__html,a!=null){if(r.children!=null)throw Error(c(60));(i!=null?i.__html:void 0)!==a&&(e.innerHTML=a)}}break;case"children":if(typeof s=="string")xl(e,s);else if(typeof s=="number"||typeof s=="bigint")xl(e,""+s);else return;break;case"onScroll":s!=null&&Ye("scroll",e);return;case"onScrollEnd":s!=null&&Ye("scrollend",e);return;case"onClick":s!=null&&(e.onclick=Ra);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!un.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(r=a.endsWith("Capture"),i=a.slice(2,r?a.length-7:void 0),t=e[$t]||null,t=t!=null?t[a]:null,typeof t=="function"&&e.removeEventListener(i,t,r),typeof s=="function")){typeof t!="function"&&t!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(i,s,r);break e}lt=!0,a in e?e[a]=s:s===!0?e.setAttribute(a,""):mo(e,a,s)}return}lt=!0}function xn(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ye("error",e),Ye("load",e);var s=!1,r=!1,i;for(i in a)if(a.hasOwnProperty(i)){var m=a[i];if(m!=null)switch(i){case"src":s=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:gt(e,t,i,m,a,null)}}r&&gt(e,t,"srcSet",a.srcSet,a,null),s&&gt(e,t,"src",a.src,a,null);return;case"input":Ye("invalid",e);var S=i=m=r=null,I=null,X=null;for(s in a)if(a.hasOwnProperty(s)){var ne=a[s];if(ne!=null)switch(s){case"name":r=ne;break;case"type":m=ne;break;case"checked":I=ne;break;case"defaultChecked":X=ne;break;case"value":i=ne;break;case"defaultValue":S=ne;break;case"children":case"dangerouslySetInnerHTML":if(ne!=null)throw Error(c(137,t));break;default:gt(e,t,s,ne,a,null)}}e0(e,i,S,I,X,m,r,!1);return;case"select":Ye("invalid",e),s=m=i=null;for(r in a)if(a.hasOwnProperty(r)&&(S=a[r],S!=null))switch(r){case"value":i=S;break;case"defaultValue":m=S;break;case"multiple":s=S;default:gt(e,t,r,S,a,null)}t=i,a=m,e.multiple=!!s,t!=null?fl(e,!!s,t,!1):a!=null&&fl(e,!!s,a,!0);return;case"textarea":Ye("invalid",e),i=r=s=null;for(m in a)if(a.hasOwnProperty(m)&&(S=a[m],S!=null))switch(m){case"value":s=S;break;case"defaultValue":r=S;break;case"children":i=S;break;case"dangerouslySetInnerHTML":if(S!=null)throw Error(c(91));break;default:gt(e,t,m,S,a,null)}n0(e,s,r,i);return;case"option":for(I in a)if(a.hasOwnProperty(I)&&(s=a[I],s!=null))switch(I){case"selected":e.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:gt(e,t,I,s,a,null)}return;case"dialog":Ye("beforetoggle",e),Ye("toggle",e),Ye("cancel",e),Ye("close",e);break;case"iframe":case"object":Ye("load",e);break;case"video":case"audio":for(s=0;s<Zr.length;s++)Ye(Zr[s],e);break;case"image":Ye("error",e),Ye("load",e);break;case"details":Ye("toggle",e);break;case"embed":case"source":case"link":Ye("error",e),Ye("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(X in a)if(a.hasOwnProperty(X)&&(s=a[X],s!=null))switch(X){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:gt(e,t,X,s,a,null)}return;default:if(pc(t)){for(ne in a)a.hasOwnProperty(ne)&&(s=a[ne],s!==void 0&&hd(e,t,ne,s,a,void 0));return}}for(S in a)a.hasOwnProperty(S)&&(s=a[S],s!=null&&gt(e,t,S,s,a,null))}var l1={};function r1(e,t,a,s){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,i=null,m=null,S=null,I=null,X=null,ne=null;for($ in a){var xe=a[$];if(a.hasOwnProperty($)&&xe!=null)switch($){case"checked":break;case"value":break;case"defaultValue":I=xe;default:s.hasOwnProperty($)||gt(e,t,$,null,s,xe)}}for(var z in s){var $=s[z];if(xe=a[z],s.hasOwnProperty(z)&&($!=null||xe!=null))switch(z){case"type":$!==xe&&(lt=!0),i=$;break;case"name":$!==xe&&(lt=!0),r=$;break;case"checked":$!==xe&&(lt=!0),X=$;break;case"defaultChecked":$!==xe&&(lt=!0),ne=$;break;case"value":$!==xe&&(lt=!0),m=$;break;case"defaultValue":$!==xe&&(lt=!0),S=$;break;case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(c(137,t));break;default:$!==xe&&gt(e,t,z,$,s,xe)}}hc(e,m,S,I,X,ne,i,r);return;case"select":$=m=S=z=null;for(i in a)if(I=a[i],a.hasOwnProperty(i)&&I!=null)switch(i){case"value":break;case"multiple":$=I;default:s.hasOwnProperty(i)||gt(e,t,i,null,s,I)}for(r in s)if(i=s[r],I=a[r],s.hasOwnProperty(r)&&(i!=null||I!=null))switch(r){case"value":i!==I&&(lt=!0),z=i;break;case"defaultValue":i!==I&&(lt=!0),S=i;break;case"multiple":i!==I&&(lt=!0),m=i;default:i!==I&&gt(e,t,r,i,s,I)}t=S,a=m,s=$,z!=null?fl(e,!!a,z,!1):!!s!=!!a&&(t!=null?fl(e,!!a,t,!0):fl(e,!!a,a?[]:"",!1));return;case"textarea":$=z=null;for(S in a)if(r=a[S],a.hasOwnProperty(S)&&r!=null&&!s.hasOwnProperty(S))switch(S){case"value":break;case"children":break;default:gt(e,t,S,null,s,r)}for(m in s)if(r=s[m],i=a[m],s.hasOwnProperty(m)&&(r!=null||i!=null))switch(m){case"value":r!==i&&(lt=!0),z=r;break;case"defaultValue":r!==i&&(lt=!0),$=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(c(91));break;default:r!==i&&gt(e,t,m,r,s,i)}t0(e,z,$);return;case"option":for(var Le in a)if(z=a[Le],a.hasOwnProperty(Le)&&z!=null&&!s.hasOwnProperty(Le))switch(Le){case"selected":e.selected=!1;break;default:gt(e,t,Le,null,s,z)}for(I in s)if(z=s[I],$=a[I],s.hasOwnProperty(I)&&z!==$&&(z!=null||$!=null))switch(I){case"selected":z!==$&&(lt=!0),e.selected=z&&typeof z!="function"&&typeof z!="symbol";break;default:gt(e,t,I,z,s,$)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Be in a)z=a[Be],a.hasOwnProperty(Be)&&z!=null&&!s.hasOwnProperty(Be)&&gt(e,t,Be,null,s,z);for(X in s)if(z=s[X],$=a[X],s.hasOwnProperty(X)&&z!==$&&(z!=null||$!=null))switch(X){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(c(137,t));break;default:gt(e,t,X,z,s,$)}return;default:if(pc(t)){for(var _e in a)z=a[_e],a.hasOwnProperty(_e)&&z!==void 0&&!s.hasOwnProperty(_e)&&hd(e,t,_e,void 0,s,z);for(ne in s)z=s[ne],$=a[ne],!s.hasOwnProperty(ne)||z===$||z===void 0&&$===void 0||hd(e,t,ne,z,s,$);return}}for(var J in a)z=a[J],a.hasOwnProperty(J)&&z!=null&&!s.hasOwnProperty(J)&&gt(e,t,J,null,s,z);for(xe in s)z=s[xe],$=a[xe],!s.hasOwnProperty(xe)||z===$||z==null&&$==null||gt(e,t,xe,z,s,$)}function dx(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function o1(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var r=a[s],i=r.transferSize,m=r.initiatorType,S=r.duration;if(i&&S&&dx(m)){for(m=0,S=r.responseEnd,s+=1;s<a.length;s++){var I=a[s],X=I.startTime;if(X>S)break;var ne=I.transferSize,xe=I.initiatorType;ne&&dx(xe)&&(I=I.responseEnd,m+=ne*(I<S?1:(S-X)/(I-X)))}if(--s,t+=8*(i+m)/(r.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var bd=null,pd=null;function Fr(e){return e.nodeType===9?e:e.ownerDocument}function mx(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ax(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function fx(e,t,a,s){return a=Fr(a).createElement(e),a[wt]=s,a[$t]=t,xn(a,e,t),Ke(a),a}function gd(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Rd=null;function i1(){var e=window.event;return e&&e.type==="popstate"?e===Rd?!1:(Rd=e,!0):(Rd=null,!1)}var Sd=typeof setTimeout=="function"?setTimeout:void 0,c1=typeof clearTimeout=="function"?clearTimeout:void 0,xx=typeof Promise=="function"?Promise:void 0,hx=typeof requestAnimationFrame=="function"?requestAnimationFrame:Sd,u1=typeof queueMicrotask=="function"?queueMicrotask:typeof xx<"u"?function(e){return xx.resolve(null).then(e).catch(d1)}:Sd;function d1(e){setTimeout(function(){throw e})}function Hs(e){return e==="head"}function bx(e,t){var a=t,s=0;do{var r=a.nextSibling;if(e.removeChild(a),r&&r.nodeType===8)if(a=r.data,a==="/$"||a==="/&"){if(s===0){e.removeChild(r),$l(t);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")Bd(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Bd(a);for(var i=a.firstChild;i;){var m=i.nextSibling,S=i.nodeName;i[M]||S==="SCRIPT"||S==="STYLE"||S==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=m}}else a==="body"&&Bd(e.ownerDocument.body);a=r}while(a);$l(t)}function px(e,t){var a=e;e=0;do{var s=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=s}while(a)}function gx(e,t,a){if(t=CSS.escape(t)!==t?"r-"+btoa(t).replace(/=/g,""):t,e.style.viewTransitionName=t,a!=null&&(e.style.viewTransitionClass=a),a=getComputedStyle(e),a.display==="inline"){if(t=e.getClientRects(),t.length===1)var s=1;else for(var r=s=0;r<t.length;r++){var i=t[r];0<i.width&&0<i.height&&s++}s===1&&(e=e.style,e.display=t.length===1?"inline-block":"block",e.marginTop="-"+a.paddingTop,e.marginBottom="-"+a.paddingBottom)}}function Rx(e,t){e=e.style,t=t.style;var a=t!=null?t.hasOwnProperty("viewTransitionName")?t.viewTransitionName:t.hasOwnProperty("view-transition-name")?t["view-transition-name"]:null:null;e.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=t!=null?t.hasOwnProperty("viewTransitionClass")?t.viewTransitionClass:t.hasOwnProperty("view-transition-class")?t["view-transition-class"]:null:null,e.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),e.display==="inline-block"&&(t==null?e.display=e.margin="":(a=t.display,e.display=a==null||typeof a=="boolean"?"":a,a=t.margin,a!=null?e.margin=a:(a=t.hasOwnProperty("marginTop")?t.marginTop:t["margin-top"],e.marginTop=a==null||typeof a=="boolean"?"":a,t=t.hasOwnProperty("marginBottom")?t.marginBottom:t["margin-bottom"],e.marginBottom=t==null||typeof t=="boolean"?"":t)))}function m1(e,t,a){return a=a.ownerDocument.defaultView,{rect:e,abs:t.position==="absolute"||t.position==="fixed",clip:t.clipPath!=="none"||t.overflow!=="visible"||t.filter!=="none"||t.mask!=="none"||t.mask!=="none"||t.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=a.innerHeight&&e.left<=a.innerWidth}}function yd(e){var t=e.getBoundingClientRect(),a=getComputedStyle(e);return m1(t,a,e)}function A1(e){return e.documentElement.clientHeight}function f1(e){this.addEventListener("load",e),this.addEventListener("error",e)}function x1(e,t,a,s,r,i,m,S,I){var X=t.nodeType===9?t:t.ownerDocument;try{var ne=X.startViewTransition({update:function(){var z=X.defaultView,$=z.navigation&&z.navigation.transition,Le=X.fonts.status;s();var Be=[];if(Le==="loaded"&&(A1(X),X.fonts.status==="loading"&&Be.push(X.fonts.ready)),Le=Be.length,e!==null)for(var _e=e.suspenseyImages,J=0,k=0;k<_e.length;k++){var Y=_e[k];if(!Y.complete){var fe=Y.getBoundingClientRect();if(0<fe.bottom&&0<fe.right&&fe.top<z.innerHeight&&fe.left<z.innerWidth){if(J+=Px(Y),J>Ni){Be.length=Le;break}Y=new Promise(f1.bind(Y)),Be.push(Y)}}}if(0<Be.length)return z=Promise.race([Promise.all(Be),new Promise(function(je){return setTimeout(je,500)})]).then(r,r),($?Promise.allSettled([$.finished,z]):z).then(i,i);if(r(),$)return $.finished.then(i,i);i()},types:a});X.__reactViewTransition=ne;var xe=[];return ne.ready.then(function(){for(var z=X.documentElement.getAnimations({subtree:!0}),$=0;$<z.length;$++){var Le=z[$],Be=Le.effect,_e=Be.pseudoElement;if(_e!=null&&_e.startsWith("::view-transition")){xe.push(Le),Le=Be.getKeyframes();for(var J=_e=void 0,k=!0,Y=0;Y<Le.length;Y++){var fe=Le[Y],je=fe.width;if(_e===void 0)_e=je;else if(_e!==je){k=!1;break}if(je=fe.height,J===void 0)J=je;else if(J!==je){k=!1;break}delete fe.width,delete fe.height,fe.transform==="none"&&delete fe.transform}k&&_e!==void 0&&J!==void 0&&(Be.setKeyframes(Le),k=getComputedStyle(Be.target,Be.pseudoElement),k.width!==_e||k.height!==J)&&(k=Le[0],k.width=_e,k.height=J,k=Le[Le.length-1],k.width=_e,k.height=J,Be.setKeyframes(Le))}}m()},function(z){X.__reactViewTransition===ne&&(X.__reactViewTransition=null);try{if(typeof z=="object"&&z!==null)switch(z.name){case"InvalidStateError":(z.message==="View transition was skipped because document visibility state is hidden."||z.message==="Skipping view transition because document visibility state has become hidden."||z.message==="Skipping view transition because viewport size changed."||z.message==="Transition was aborted because of invalid state")&&(z=null)}z!==null&&I(z)}finally{s(),r(),m()}}),ne.finished.finally(function(){for(var z=0;z<xe.length;z++)xe[z].cancel();X.__reactViewTransition===ne&&(X.__reactViewTransition=null),S()}),ne}catch{return s(),r(),m(),null}}function rl(e,t){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+t+")"}rl.prototype.animate=function(e,t){return t=typeof t=="number"?{duration:t}:re({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)},rl.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,a=e.getAnimations({subtree:!0}),s=[],r=0;r<a.length;r++){var i=a[r].effect;i!==null&&i.target===e&&i.pseudoElement===t&&s.push(a[r])}return s},rl.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Sx(e){return{name:e,group:new rl("group",e),imagePair:new rl("image-pair",e),old:new rl("old",e),new:new rl("new",e)}}function Kn(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}Kn.prototype.addEventListener=function(e,t,a){var s=null,r=null;if(!(a!=null&&typeof a!="boolean"&&(s=a.signal||null,s!==null&&s.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var i=this._eventListeners;if(Nx(i,e,t,a)===-1){var m=this,S=t;a!=null&&typeof a!="boolean"&&a.once===!0&&(S=function(I){m.removeEventListener(e,t,a),typeof t=="function"?t.call(this,I):t.handleEvent(I)}),s!==null&&(r=m.removeEventListener.bind(m,e,t,a),s.addEventListener("abort",r,{once:!0}),r=s.removeEventListener.bind(s,"abort",r)),s=Jl(a),i.push({type:e,listener:t,optionsOrUseCapture:a,attachedListener:S,cleanup:r}),g(this._fragmentFiber.child,!1,h1,e,S,s)}this._eventListeners=i}};function h1(e,t,a,s){return O(e).addEventListener(t,a,s),!1}Kn.prototype.removeEventListener=function(e,t,a){var s=this._eventListeners;if(s!==null&&(t=Nx(s,e,t,a),t!==-1)){var r=s[t];a=r.attachedListener;var i=r.cleanup;r=Jl(r.optionsOrUseCapture),g(this._fragmentFiber.child,!1,b1,e,a,r),s.splice(t,1),i!==null&&i()}};function b1(e,t,a,s){return O(e).removeEventListener(t,a,s),!1}function Jl(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function yx(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function Nx(e,t,a,s){if(e.length===0)return-1;s=yx(s);for(var r=0;r<e.length;r++){var i=e[r];if(i.type===t&&i.listener===a&&yx(i.optionsOrUseCapture)===s)return r}return-1}Kn.prototype.dispatchEvent=function(e){var t=H(this._fragmentFiber);if(t===null)return!0;t=O(t);var a=this._eventListeners;if(a!==null&&0<a.length||!e.bubbles){var s=t.nodeType===9?t.createComment(""):document.createTextNode("");if(a)for(var r=0;r<a.length;r++){var i=a[r];s.addEventListener(i.type,i.attachedListener,Jl(i.optionsOrUseCapture))}if(t.appendChild(s),e=s.dispatchEvent(e),a)for(r=0;r<a.length;r++)i=a[r],s.removeEventListener(i.type,i.attachedListener,Jl(i.optionsOrUseCapture));return t.removeChild(s),e}return t.dispatchEvent(e)},Kn.prototype.focus=function(e){g(this._fragmentFiber.child,!0,vx,e,void 0,void 0)};function vx(e,t){return e.tag===6?!1:(e=O(e),B1(e,t))}Kn.prototype.focusLast=function(e){var t=[];g(this._fragmentFiber.child,!0,Nd,t,void 0,void 0);for(var a=t.length-1;0<=a&&!vx(t[a],e);a--);};function Nd(e,t){return t.push(e),!1}Kn.prototype.blur=function(){var e=H(this._fragmentFiber);e!==null&&(e=O(e),e=Fr(e).activeElement,e!==null&&g(this._fragmentFiber.child,!1,p1,e,void 0,void 0))};function p1(e,t){return e.tag===6?!1:(e=O(e),e===t||e.contains(t)?(t.blur(),!0):!1)}Kn.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),g(this._fragmentFiber.child,!1,g1,e,void 0,void 0)};function g1(e,t){return e.tag===6||(e=O(e),t.observe(e)),!1}Kn.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),g(this._fragmentFiber.child,!1,R1,e,void 0,void 0);for(var a=t=0;a<Aa.length;a++){var s=Aa[a];s.fragmentInstance===this&&s.observer===e?e.unobserve(s.instance):Aa[t++]=s}Aa.length=t}};function R1(e,t){return e.tag===6||(e=O(e),t.unobserve(e)),!1}var Aa=[],vd=!1;function S1(e,t,a){Aa.push({fragmentInstance:e,observer:t,instance:a}),vd||(vd=!0,H1(function(){vd=!1;var s=Aa;Aa=[];for(var r=0;r<s.length;r++){var i=s[r];i.observer.unobserve(i.instance)}}))}Kn.prototype.getClientRects=function(){var e=[];return g(this._fragmentFiber.child,!1,y1,e,void 0,void 0),e};function y1(e,t){if(e.tag===6){e=e.stateNode;var a=e.ownerDocument.createRange();a.selectNodeContents(e),t.push.apply(t,a.getClientRects())}else e=O(e),t.push.apply(t,e.getClientRects());return!1}Kn.prototype.getRootNode=function(e){var t=H(this._fragmentFiber);return t===null?this:O(t).getRootNode(e)},Kn.prototype.compareDocumentPosition=function(e){var t=H(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];g(this._fragmentFiber.child,!1,Nd,a,void 0,void 0);var s=O(t);if(a.length===0){if(a=s,D(this._fragmentFiber)){e:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break e}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(a=t)}t=this._fragmentFiber;var r=s=a.compareDocumentPosition(e);return a===e?r=Node.DOCUMENT_POSITION_CONTAINS:s&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=T(t)[1],a===null?r=Node.DOCUMENT_POSITION_PRECEDING:(e=O(a).compareDocumentPosition(e),r=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),r|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=O(a[0]),r=O(a[a.length-1]);var i=D(this._fragmentFiber)?t.parentElement:s;if(i==null)return Node.DOCUMENT_POSITION_DISCONNECTED;s=i.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,i=i.compareDocumentPosition(r)&Node.DOCUMENT_POSITION_CONTAINED_BY;var m=t.compareDocumentPosition(e),S=r.compareDocumentPosition(e),I=m&Node.DOCUMENT_POSITION_CONTAINED_BY||S&Node.DOCUMENT_POSITION_CONTAINED_BY;return S=s&&i&&m&Node.DOCUMENT_POSITION_FOLLOWING&&S&Node.DOCUMENT_POSITION_PRECEDING,t=s&&t===e||i&&r===e||I||S?Node.DOCUMENT_POSITION_CONTAINED_BY:!s&&t===e||!i&&r===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:m,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||N1(t,this._fragmentFiber,a[0],a[a.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function N1(e,t,a,s,r){var i=De(r);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!i)e:{for(;i!==null;){if(i.tag===7&&(i===t||i.alternate===t)){a=!0;break e}i=i.return}a=!1}return a}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(i===null)return i=r.ownerDocument,r===i||r===i.documentElement||r===i.body;e:{for(i=t,t=H(t);i!==null;){if(!(i.tag!==5&&i.tag!==3&&i.tag!==27||i!==t&&i.alternate!==t)){i=!0;break e}i=i.return}i=!1}return i}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!i)&&!(t=i===a)&&(t=V(a,i,C),t===null?t=!1:(g(t,!0,K,i,a),i=G,G=null,t=i!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!i)&&!(t=i===s)&&(t=V(s,i,C),t===null?t=!1:(g(t,!0,ee,i,s),i=G,ce=G=null,t=i!==null)),t):!1}function Lx(e,t){var a=e.ownerDocument.createRange();a.selectNodeContents(e),e=a.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}Kn.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(c(566));var t=[];g(this._fragmentFiber.child,!1,Nd,t,void 0,void 0);var a=e!==!1;if(t.length===0){var s=T(this._fragmentFiber);if(s=a?s[1]||s[0]||H(this._fragmentFiber):s[0]||s[1],s===null)return;if(s.tag===6){e=O(s),Lx(e,a);return}if(s=O(s),s.nodeType!==9){if(s.nodeType===11){a="host"in s?s.host:null,a!==null&&a.scrollIntoView(e);return}s.scrollIntoView(e)}}for(s=a?t.length-1:0;s!==(a?-1:t.length);){var r=t[s];r.tag===6?(r=O(r),Lx(r,a)):O(r).scrollIntoView(e),s+=a?-1:1}};function v1(e,t){return e=O(e),Ox(e,t),!1}function Ox(e,t){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(t)}function jx(e,t){var a=t._eventListeners;if(a!==null)for(var s=0;s<a.length;s++){var r=a[s];e.addEventListener(r.type,r.attachedListener,Jl(r.optionsOrUseCapture))}e.nodeType!==3&&(a=t._observers,a!==null&&a.forEach(function(i){for(var m=0,S=0;S<Aa.length;S++){var I=Aa[S];(I.fragmentInstance!==t||I.observer!==i||I.instance!==e)&&(Aa[m++]=I)}Aa.length=m,i.observe(e)}),Ox(e,t))}function L1(e,t){var a=t._eventListeners;if(a!==null)for(var s=0;s<a.length;s++){var r=a[s];e.removeEventListener(r.type,r.attachedListener,Jl(r.optionsOrUseCapture))}e.nodeType!==3&&(a=t._observers,a!==null&&a.forEach(function(i){typeof i.rootMargin=="string"?S1(t,i,e):i.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function Ld(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Ld(a),Ce(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function O1(e,t,a,s){for(;e.nodeType===1;){var r=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[M])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=Wn(e.nextSibling),e===null)break}return null}function j1(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Wn(e.nextSibling),e===null))return null;return e}function Ix(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Wn(e.nextSibling),e===null))return null;return e}function Od(e){return e.data==="$?"||e.data==="$~"}function jd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function I1(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var s=function(){t(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),e._reactRetry=s}}function Wn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Id=null;function Bx(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return Wn(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Hx(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function B1(e,t){function a(){s=!0}if(e.ownerDocument.activeElement===e)return!0;var s=!1;try{e.ownerDocument.addEventListener("focus",a,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener("focus",a,!0)}return s}function H1(e){hx(function(){hx(function(t){return e(t)})})}function wx(e,t,a){switch(t=Fr(a),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function Ex(e,t,a){for(var s in a){var r=a[s];a.hasOwnProperty(s)&&r!=null&&gt(e,t,s,null,l1,r)}a.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===Ra&&(e.onclick=null),Ce(e)}function Bd(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ce(e)}var ea=new Map,Mx=new Set;function Jr(e){if(typeof e.getRootNode=="function"){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var $a=ae.d;ae.d={f:w1,r:E1,D:M1,C:C1,L:k1,m:U1,X:T1,S:D1,M:G1};function w1(){var e=$a.f(),t=fi();return e||t}function E1(e){var t=vt(e);t!==null&&t.tag===5&&t.type==="form"?CA(t):$a.r(e)}var Xl=typeof document>"u"?null:document;function Cx(e,t,a){var s=Xl;if(s&&typeof t=="string"&&t){var r=Jn(t);r='link[rel="'+e+'"][href="'+r+'"]',typeof a=="string"&&(r+='[crossorigin="'+a+'"]'),Mx.has(r)||(Mx.add(r),e={rel:e,crossOrigin:a,href:t},s.querySelector(r)===null&&(t=s.createElement("link"),xn(t,"link",e),Ke(t),s.head.appendChild(t)))}}function M1(e){$a.D(e),Cx("dns-prefetch",e,null)}function C1(e,t){$a.C(e,t),Cx("preconnect",e,t)}function k1(e,t,a){$a.L(e,t,a);var s=Xl;if(s&&e&&t){var r='link[rel="preload"][as="'+Jn(t)+'"]';t==="image"&&a&&a.imageSrcSet?(r+='[imagesrcset="'+Jn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(r+='[imagesizes="'+Jn(a.imageSizes)+'"]')):r+='[href="'+Jn(e)+'"]';var i=r;switch(t){case"style":i=Vl(e);break;case"script":i=Yl(e)}if(!(ea.has(i)||(e=re({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),ea.set(i,e),s.querySelector(r)!==null||t==="style"&&s.querySelector(Xr(i))||t==="script"&&s.querySelector(Vr(i))))){var m=s.createElement("link");xn(m,"link",e),t==="style"&&(m[q]=!0,m.onload=m.onerror=function(){_t(m)}),Ke(m),s.head.appendChild(m)}}}function U1(e,t){$a.m(e,t);var a=Xl;if(a&&e){var s=t&&typeof t.as=="string"?t.as:"script",r='link[rel="modulepreload"][as="'+Jn(s)+'"][href="'+Jn(e)+'"]',i=r;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Yl(e)}if(!ea.has(i)&&(e=re({rel:"modulepreload",href:e},t),ea.set(i,e),a.querySelector(r)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Vr(i)))return}s=a.createElement("link"),xn(s,"link",e),Ke(s),a.head.appendChild(s)}}}function D1(e,t,a){$a.S(e,t,a);var s=Xl;if(s&&e){var r=Pt(s).hoistableStyles,i=Vl(e);t=t||"default";var m=r.get(i);if(!m){var S={loading:0,preload:null};if(m=s.querySelector(Xr(i)))S.loading=5;else{e=re({rel:"stylesheet",href:e,"data-precedence":t},a),(a=ea.get(i))&&Hd(e,a);var I=m=s.createElement("link");Ke(I),xn(I,"link",e),I._p=new Promise(function(X,ne){I.onload=X,I.onerror=ne}),I.addEventListener("load",function(){S.loading|=1}),I.addEventListener("error",function(){S.loading|=2}),S.loading|=4,Si(m,t,s)}m={type:"stylesheet",instance:m,count:1,state:S},r.set(i,m)}}}function T1(e,t){$a.X(e,t);var a=Xl;if(a&&e){var s=Pt(a).hoistableScripts,r=Yl(e),i=s.get(r);i||(i=a.querySelector(Vr(r)),i||(e=re({src:e,async:!0},t),(t=ea.get(r))&&wd(e,t),i=a.createElement("script"),Ke(i),xn(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},s.set(r,i))}}function G1(e,t){$a.M(e,t);var a=Xl;if(a&&e){var s=Pt(a).hoistableScripts,r=Yl(e),i=s.get(r);i||(i=a.querySelector(Vr(r)),i||(e=re({src:e,async:!0,type:"module"},t),(t=ea.get(r))&&wd(e,t),i=a.createElement("script"),Ke(i),xn(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},s.set(r,i))}}function kx(e,t,a,s){var r=(r=at.current)?Jr(r):null;if(!r)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=Vl(a.href),t=Pt(r).hoistableStyles,s=t.get(a),s||(s={type:"style",instance:null,count:0,state:null},t.set(a,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Vl(a.href);var i=Pt(r).hoistableStyles,m=i.get(e);if(m||(r=r.ownerDocument||r,m={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,m),(i=r.querySelector(Xr(e)))?i._p||(m.instance=i,m.state.loading=5):(i=ea.get(e),i||(i={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ea.set(e,i)),K1(r,e,i,m.state))),t&&s===null)throw Error(c(528,""));return m}if(t&&s!==null)throw Error(c(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(a=Yl(a),t=Pt(r).hoistableScripts,s=t.get(a),s||(s={type:"script",instance:null,count:0,state:null},t.set(a,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function Vl(e){return'href="'+Jn(e)+'"'}function Xr(e){return'link[rel="stylesheet"]['+e+"]"}function Ux(e){return re({},e,{"data-precedence":e.precedence,precedence:null})}function K1(e,t,a,s){if(t=e.querySelector('link[rel="preload"][as="style"]['+t+"]")){if(t[q]!==!0){s.loading=1;return}}else t=e.createElement("link"),t[q]=!0,t.onload=t.onerror=_t.bind(null,t),xn(t,"link",a),Ke(t),e.head.appendChild(t);s.preload=t,t.addEventListener("load",function(){return s.loading|=1}),t.addEventListener("error",function(){return s.loading|=2})}function Yl(e){return'[src="'+Jn(e)+'"]'}function Vr(e){return"script[async]"+e}function Dx(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var s=e.querySelector('style[data-href~="'+Jn(a.href)+'"]');if(s)return t.instance=s,Ke(s),s;var r=re({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),Ke(s),xn(s,"style",r),Si(s,a.precedence,e),t.instance=s;case"stylesheet":r=Vl(a.href);var i=e.querySelector(Xr(r));if(i)return t.state.loading|=4,t.instance=i,Ke(i),i;s=Ux(a),(r=ea.get(r))&&Hd(s,r),i=(e.ownerDocument||e).createElement("link"),Ke(i);var m=i;return m._p=new Promise(function(S,I){m.onload=S,m.onerror=I}),xn(i,"link",s),t.state.loading|=4,Si(i,a.precedence,e),t.instance=i;case"script":return i=Yl(a.src),(r=e.querySelector(Vr(i)))?(t.instance=r,Ke(r),r):(s=a,(r=ea.get(i))&&(s=re({},a),wd(s,r)),e=e.ownerDocument||e,r=e.createElement("script"),Ke(r),xn(r,"link",s),e.head.appendChild(r),t.instance=r);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(s=t.instance,t.state.loading|=4,Si(s,a.precedence,e));return t.instance}function Si(e,t,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=s.length?s[s.length-1]:null,i=r,m=0;m<s.length;m++){var S=s[m];if(S.dataset.precedence===t)i=S;else if(i!==r)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Hd(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function wd(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var yi=null;function Tx(e,t,a){if(yi===null){var s=new Map,r=yi=new Map;r.set(a,s)}else r=yi,s=r.get(a),s||(s=new Map,r.set(a,s));if(s.has(e))return s;for(s.set(e,null),a=a.getElementsByTagName(e),r=0;r<a.length;r++){var i=a[r];if(!(i[M]||i[wt]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var m=i.getAttribute(t)||"";m=e+m;var S=s.get(m);S?S.push(i):s.set(m,[i])}}return s}function Ed(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function P1(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Gx(e,t){return e==="img"&&t.src!=null&&t.src!==""&&t.onLoad==null&&t.loading!=="lazy"}function Kx(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Px(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function _x(e,t){typeof t.decode=="function"&&(e.imgCount++,t.complete||(e.imgBytes+=Px(t),e.suspenseyImages.push(t)),e=z1.bind(e),t.decode().then(e,e))}function _1(e,t,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var r=Vl(s.href),i=t.querySelector(Xr(r));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Yr.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=i,Ke(i);return}i=t.ownerDocument||t,s=Ux(s),(r=ea.get(r))&&Hd(s,r),i=i.createElement("link"),Ke(i);var m=i;m._p=new Promise(function(S,I){m.onload=S,m.onerror=I}),xn(i,"link",s),a.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Yr.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Ni=0;function Z1(e,t){return e.stylesheets&&e.count===0&&Li(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var s=setTimeout(function(){if(e.stylesheets&&Li(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&Ni===0&&(Ni=62500*o1());var r=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Li(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>Ni?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(s),clearTimeout(r)}}:null}function Zx(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)Li(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function Yr(){this.count--,Zx(this)}function z1(){this.imgCount--,Zx(this)}var vi=null;function Li(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,vi=new Map,t.forEach(F1,e),vi=null,Yr.call(e))}function F1(e,t){if(!(t.state.loading&4)){var a=vi.get(e);if(a)var s=a.get(null);else{a=new Map,vi.set(e,a);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<r.length;i++){var m=r[i];(m.nodeName==="LINK"||m.getAttribute("media")!=="not all")&&(a.set(m.dataset.precedence,m),s=m)}s&&a.set(null,s)}r=t.instance,m=r.getAttribute("data-precedence"),i=a.get(m)||s,i===s&&a.set(null,r),a.set(m,r),this.count++,s=Yr.bind(this),r.addEventListener("load",s),r.addEventListener("error",s),i?i.parentNode.insertBefore(r,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),t.state.loading|=4}}var ql={$$typeof:w,Provider:null,Consumer:null,_currentValue:ye,_currentValue2:ye,_threadCount:0};function J1(e,t,a,s,r,i,m,S,I){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Se(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Se(0),this.hiddenUpdates=Se(null),this.identifierPrefix=s,this.onUncaughtError=r,this.onCaughtError=i,this.onRecoverableError=m,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.transitionTypes=null,this.incompleteTransitions=new Map}function zx(e,t,a,s,r,i,m,S,I,X,ne,xe){return e=new J1(e,t,a,m,I,X,ne,xe,S),t=1,i===!0&&(t|=24),i=On(3,null,null,t),e.current=i,i.stateNode=e,t=Xc(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:s,isDehydrated:a,cache:t},Qc(i),e}function Fx(e){return e?(e=yl,e):yl}function Jx(e,t,a,s,r,i){r=Fx(r),s.context===null?s.context=r:s.pendingContext=r,s=ps(t),s.payload={element:a},i=i===void 0?null:i,i!==null&&(s.callback=i),a=gs(e,s,t),a!==null&&(Hn(a,e,t),Or(a,e,t))}function Xx(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Md(e,t){Xx(e,t),(e=e.alternate)&&Xx(e,t)}function Vx(e){if(e.tag===13||e.tag===31){var t=Zs(e,67108864);t!==null&&Hn(t,e,67108864),Md(e,67108864)}}function Yx(e){if(e.tag===13||e.tag===31){var t=Gn();t=Ut(t);var a=Zs(e,t);a!==null&&Hn(a,e,t),Md(e,t)}}var Ql=!0;function X1(e,t,a,s){var r=he.T;he.T=null;var i=ae.p;try{ae.p=2,Cd(e,t,a,s)}finally{ae.p=i,he.T=r}}function V1(e,t,a,s){var r=he.T;he.T=null;var i=ae.p;try{ae.p=8,Cd(e,t,a,s)}finally{ae.p=i,he.T=r}}function Cd(e,t,a,s){if(Ql){var r=kd(s);if(r===null)xd(e,t,s,Oi,a),Qx(e,s);else if(q1(r,e,t,a,s))s.stopPropagation();else if(Qx(e,s),t&4&&-1<Y1.indexOf(e)){for(;r!==null;){var i=vt(r);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var m=yt(i.pendingLanes);if(m!==0){var S=i;for(S.pendingLanes|=2,S.entangledLanes|=2;m;){var I=1<<31-Kt(m);S.entanglements[1]|=I,m&=~I}Ha(i),(ot&6)===0&&(di=Qt()+500,_r(0))}}break;case 31:case 13:S=Zs(i,2),S!==null&&Hn(S,i,2),fi(),Md(i,2)}if(i=kd(s),i===null&&xd(e,t,s,Oi,a),i===r)break;r=i}r!==null&&s.stopPropagation()}else xd(e,t,s,null,a)}}function kd(e){return e=Rc(e),Ud(e)}var Oi=null;function Ud(e){if(Oi=null,e=De(e),e!==null){var t=f(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=A(t),e!==null)return e;e=null}else if(a===31){if(e=b(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Oi=e,null}function qx(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ml()){case Ua:return 2;case pa:return 8;case la:case Da:return 32;case ra:return 268435456;default:return 32}default:return 32}}var Dd=!1,ws=null,Es=null,Ms=null,qr=new Map,Qr=new Map,Cs=[],Y1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Qx(e,t){switch(e){case"focusin":case"focusout":ws=null;break;case"dragenter":case"dragleave":Es=null;break;case"mouseover":case"mouseout":Ms=null;break;case"pointerover":case"pointerout":qr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qr.delete(t.pointerId)}}function $r(e,t,a,s,r,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:s,nativeEvent:i,targetContainers:[r]},t!==null&&(t=vt(t),t!==null&&Vx(t)),e):(e.eventSystemFlags|=s,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function q1(e,t,a,s,r){switch(t){case"focusin":return ws=$r(ws,e,t,a,s,r),!0;case"dragenter":return Es=$r(Es,e,t,a,s,r),!0;case"mouseover":return Ms=$r(Ms,e,t,a,s,r),!0;case"pointerover":var i=r.pointerId;return qr.set(i,$r(qr.get(i)||null,e,t,a,s,r)),!0;case"gotpointercapture":return i=r.pointerId,Qr.set(i,$r(Qr.get(i)||null,e,t,a,s,r)),!0}return!1}function $x(e){var t=De(e.target);if(t!==null){var a=f(t);if(a!==null){if(t=a.tag,t===13){if(t=A(a),t!==null){e.blockedOn=t,cn(e.priority,function(){Yx(a)});return}}else if(t===31){if(t=b(a),t!==null){e.blockedOn=t,cn(e.priority,function(){Yx(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ji(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=kd(e.nativeEvent);if(a===null){a=e.nativeEvent;var s=new a.constructor(a.type,a);gc=s,a.target.dispatchEvent(s),gc=null}else return t=vt(a),t!==null&&Vx(t),e.blockedOn=a,!1;t.shift()}return!0}function Wx(e,t,a){ji(e)&&a.delete(t)}function Q1(){Dd=!1,ws!==null&&ji(ws)&&(ws=null),Es!==null&&ji(Es)&&(Es=null),Ms!==null&&ji(Ms)&&(Ms=null),qr.forEach(Wx),Qr.forEach(Wx)}function Ii(e,t){e.blockedOn===t&&(e.blockedOn=null,Dd||(Dd=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,Q1)))}var Bi=null;function eh(e){Bi!==e&&(Bi=e,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){Bi===e&&(Bi=null);for(var t=0;t<e.length;t+=3){var a=e[t],s=e[t+1],r=e[t+2];if(typeof s!="function"){if(Ud(s||a)===null)continue;break}var i=vt(a);i!==null&&(e.splice(t,3),t-=3,pu(i,{pending:!0,data:r,method:a.method,action:s},s,r))}}))}function $l(e){function t(I){return Ii(I,e)}ws!==null&&Ii(ws,e),Es!==null&&Ii(Es,e),Ms!==null&&Ii(Ms,e),qr.forEach(t),Qr.forEach(t);for(var a=0;a<Cs.length;a++){var s=Cs[a];s.blockedOn===e&&(s.blockedOn=null)}for(;0<Cs.length&&(a=Cs[0],a.blockedOn===null);)$x(a),a.blockedOn===null&&Cs.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var r=a[s],i=a[s+1],m=r[$t]||null;if(typeof i=="function")m||eh(a);else if(m){var S=null;if(i&&i.hasAttribute("formAction")){if(r=i,m=i[$t]||null)S=m.formAction;else if(Ud(r)!==null)continue}else S=m.action;typeof S=="function"?a[s+1]=S:(a.splice(s,3),s-=3),eh(a)}}}function th(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(m){return r=m})},focusReset:"manual",scroll:"manual"})}function t(){r!==null&&(r(),r=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,r=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),r!==null&&(r(),r=null)}}}function Td(e){this._internalRoot=e}Hi.prototype.render=Td.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var a=t.current,s=Gn();Jx(a,s,e,t,null,null)},Hi.prototype.unmount=Td.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Jx(e.current,2,null,e,null,null),fi(),t[cs]=null}};function Hi(e){this._internalRoot=e}Hi.prototype.unstable_scheduleHydration=function(e){if(e){var t=mt();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Cs.length&&t!==0&&t<Cs[a].priority;a++);Cs.splice(a,0,e),a===0&&$x(e)}};var nh=o.version;if(nh!=="19.3.0")throw Error(c(527,nh,"19.3.0"));ae.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=L(t),e=e!==null?y(e):null,e=e===null?null:e.stateNode,e};var $1={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:he,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wi.isDisabled&&wi.supportsFiber)try{Zn=wi.inject($1),Ht=wi}catch{}}return eo.createRoot=function(e,t){if(!d(e))throw Error(c(299));var a=!1,s="",r=zA,i=FA,m=JA;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onUncaughtError!==void 0&&(r=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(m=t.onRecoverableError)),t=zx(e,1,!1,null,null,a,s,null,r,i,m,th),e[cs]=t.current,fd(e),new Td(t)},eo.hydrateRoot=function(e,t,a){if(!d(e))throw Error(c(299));var s=!1,r="",i=zA,m=FA,S=JA,I=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(r=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(m=a.onCaughtError),a.onRecoverableError!==void 0&&(S=a.onRecoverableError),a.formState!==void 0&&(I=a.formState)),t=zx(e,1,!0,t,a??null,s,r,I,i,m,S,th),t.context=Fx(null),a=t.current,s=Gn(),s=Ut(s),r=ps(s),r.callback=null,gs(a,r,s),a=s,t.current.lanes=a,we(t,a),Ha(t),e[cs]=t.current,fd(e),new Hi(t)},eo.version="19.3.0",eo}var mh;function c2(){if(mh)return Pd.exports;mh=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(o){console.error(o)}}return l(),Pd.exports=i2(),Pd.exports}var u2=c2();const de=l=>Math.round(Number(l)||0).toLocaleString("en-IN"),wn="gobra",sc="GOBRA BRANCH-0014",es="gobra_",bb=["cash_sheet_denom_"],pb=new Set(["kallyan_rule_version_v2","app_master_date"]),Om=new Set(["gobra_auth_users","gobra_auth_branches","gobra_auth_session","gobra_force_reload_done","gobra_floating_pos_cashbook","gobra_floating_pos_report"]);let gb=wn,Ah=!1;const Ts=()=>gb||wn,sr=()=>Ts()===wn;function lr(l){gb=String(l||"").trim()||wn}const Fd=l=>{if(typeof l!="string"||!(l.startsWith(es)||pb.has(l)||bb.some(c=>l.startsWith(c)))||l.startsWith(es)&&Om.has(l)||Ts()===wn)return l;const u=l.startsWith(es)?l.slice(es.length):l;return`${es}${Ts()}__${u}`};function d2(l){try{const o=l.getItem("gobra_auth_branches"),u=o?JSON.parse(o):[];return Array.isArray(u)?u.map(c=>String((c==null?void 0:c.id)||"")).filter(Boolean):[]}catch{return[]}}function m2(l,o){if(!o.startsWith(es))return!1;const u=o.slice(es.length),c=u.indexOf("__");if(c<=0)return!1;const d=u.slice(0,c);return d===Ts()?!1:d2(l).includes(d)}function A2(l,o){if(m2(l,o))return!1;if(Om.has(o))return!0;const u=Ts();return u===wn?!0:pb.has(o)||bb.some(c=>o.startsWith(c))?!1:o.startsWith(es)?o.slice(es.length).startsWith(`${u}__`):!0}function Jd(l){const o=[];for(let u=0;u<l.length;u++){const c=l.key(u);c&&A2(l,c)&&o.push(c)}return o}function fh(l){if(l&&lr(l),!Ah)try{const o=window.localStorage;if(!o)return;const u=new Proxy(o,{get(c,d){switch(d){case"getItem":return f=>c.getItem(Fd(f));case"setItem":return(f,A)=>c.setItem(Fd(f),String(A));case"removeItem":return f=>c.removeItem(Fd(f));case"key":{const f=Jd(c);return A=>f[A]??null}case"length":return Jd(c).length;case"clear":return()=>{Jd(c).filter(f=>!Om.has(f)).forEach(f=>c.removeItem(f))};case"__branchScoped":return!0;default:{const f=c[d];return typeof f=="function"?f.bind(c):f}}},has(c,d){return d in c},set(c,d,f){return c[d]=f,!0}});Object.defineProperty(window,"localStorage",{value:u,configurable:!0,writable:!0});try{Object.defineProperty(globalThis,"localStorage",{value:u,configurable:!0,writable:!0})}catch{}Ah=!0}catch(o){console.error("[branch] শাখা-স্কোপ বসানো যায়নি",o)}}function f2(l){lr(l);try{window.location.reload()}catch{}}const lm=["jagoron","agrossor","buniyed","sufolon","mfce","shopan krishi","shopan manufacture","shopan service","shopan value chain"],xh=["sakib","mintu","alamgir","monir"],Xi=(l,o)=>{const u=o.indexOf(String(l||"").trim().toLowerCase());return u===-1?Number.MAX_SAFE_INTEGER:u},Rb=(l,o)=>{const u=Xi(l,lm)-Xi(o,lm);return u!==0?u:String(l).localeCompare(String(o))},x2=(l,o)=>{let u=[];try{u=as().map(A=>String(A.name||"").trim().toLowerCase())}catch{}const c=u.indexOf(String(l||"").trim().toLowerCase()),d=u.indexOf(String(o||"").trim().toLowerCase());if(c!==-1||d!==-1){const A=c===-1?Number.MAX_SAFE_INTEGER:c,b=d===-1?Number.MAX_SAFE_INTEGER:d;return A!==b?A-b:String(l).localeCompare(String(o))}const f=Xi(l,xh)-Xi(o,xh);return f!==0?f:String(l).localeCompare(String(o))},hh="staff_sort_mode",jm=(l,o,u)=>u==="name-asc"?String(l).localeCompare(String(o)):u==="name-desc"?String(o).localeCompare(String(l)):x2(l,o),h2=(l,o,u)=>{const c=new Set(l.map(f=>f.trim().toLowerCase())),d=o.filter(f=>f&&!c.has(f.trim().toLowerCase())).sort(u);return[...l,...d]},sn={percent:1,fixed:15,categoryOverrides:{jagoron:{percent:1,fixed:15},agrossor:{percent:1,fixed:15},buniyed:{percent:.5,fixed:15},sufolon:{percent:1,fixed:15},mfce:{percent:1,fixed:15}}},bh={receive:["bank withdraw","fund receive","monir","sakib","mintu","alamgir","others income"],payment:["jagoron","agrossor","buniyed","sufolon","mfce","bank deposit","bank withdraw","others expense","fund payment","savings return"],disburse:["jagoron","agrossor","buniyed","sufolon","mfce"],expense:["bank deposit","bank withdraw","others expense","fund payment","savings return"],rebate:["monir","sakib","mintu","alamgir","customer rebate","others"]},b2=["sakib","mintu","alamgir","monir"];function ph(){if(sr())return bh;const l={};for(const[o,u]of Object.entries(bh))l[o]=u.filter(c=>!b2.includes(c.toLowerCase()));return l}const gh=["1 year","1.5 year","2 year"],p2={"1 year":12,"1.5 year":18,"2 year":24},no=[{id:1,subCategory:"1 year",installments:12,mode:"all",categories:[]},{id:2,subCategory:"1.5 year",installments:18,mode:"all_except",categories:["buniyed","sufolon"]},{id:3,subCategory:"2 year",installments:24,mode:"only",categories:["agrossor"]}],Sb=(l,o,u)=>{const c=l.trim().toLowerCase(),d=o.trim().toLowerCase(),f=u.find(b=>b.subCategory.trim().toLowerCase()===c);if(!f)return!0;const A=(f.categories||[]).map(b=>b.trim().toLowerCase());return f.mode==="all"?!0:f.mode==="all_except"?!A.includes(d):f.mode==="only"?A.includes(d):!0},g2=l=>(l||[]).map(u=>String(u??"").trim().toLowerCase()).filter(Boolean).filter((u,c,d)=>d.indexOf(u)===c).sort(Rb),Vi=(l,o,u)=>{const c=l.trim().toLowerCase(),d=Array.from(new Set(o.map(A=>A.subCategory)));if(c.includes("fund payment")||c.includes("fund receive")){const A=g2(u);return A.length>0?A:h2(lm,d,Rb)}return d.filter(A=>Sb(A,l,o))},R2=(l,o,u)=>{const c=l.trim().toLowerCase(),d=u?u.trim().toLowerCase():"";if(o&&o.length>0){if(d){const A=o.find(b=>b.subCategory.trim().toLowerCase()!==c?!1:Sb(b.subCategory,d,o));if(A&&A.installments)return A.installments}const f=o.find(A=>A.subCategory.trim().toLowerCase()===c);if(f&&f.installments)return f.installments}return p2[c]||12},Rh=(l,o,u,c)=>{const d=o.trim().toLowerCase(),f=u.trim().toLowerCase(),A=c.find(b=>b.category===d&&b.subCategory===f);return!A||!l?0:Math.round(l*Number(A.ratePer100))/100},yb=(l,o=sn)=>{if(l&&(o!=null&&o.categoryOverrides)){const u=l.trim().toLowerCase();if(o.categoryOverrides[u])return o.categoryOverrides[u]}return{percent:typeof(o==null?void 0:o.percent)=="number"?o.percent:sn.percent,fixed:typeof(o==null?void 0:o.fixed)=="number"?o.fixed:sn.fixed}},Nb=(l,o,u=sn)=>{if(!l||l<=0)return 0;const c=yb(o,u);return Math.round(l*c.percent/100)+c.fixed},ft=l=>(l??"").split(" ").filter(Boolean).map(o=>o[0].toUpperCase()+o.slice(1).toLowerCase()).join(" ");[...Array.from({length:46},(l,o)=>{const u=o+1,c=u<=2?"0.00":(u*2.65).toFixed(2);return{id:100+u,product:"Jagoron",duration:"Week",kisti:u,helper:`Jagoron|Week|${u}`,rate:c}}),...Array.from({length:12},(l,o)=>{const u=o+1,c=(u*10.2).toFixed(2);return{id:200+u,product:"Jagoron",duration:"Month",kisti:u,helper:`Jagoron|Month|${u}`,rate:c}}),...Array.from({length:18},(l,o)=>{const u=o+1,c=(u*10.7).toFixed(2);return{id:300+u,product:"Jagoron",duration:"1.5 Year",kisti:u,helper:`Jagoron|1.5 Year|${u}`,rate:c}}),...Array.from({length:24},(l,o)=>{const u=o+1,c=(u*11.2).toFixed(2);return{id:350+u,product:"Jagoron",duration:"2 Year",kisti:u,helper:`Jagoron|2 Year|${u}`,rate:c}}),...Array.from({length:46},(l,o)=>{const u=o+1,c=u<=2?"0.00":(u*2.66).toFixed(2);return{id:400+u,product:"Agrossor",duration:"Week",kisti:u,helper:`Agrossor|Week|${u}`,rate:c}}),...Array.from({length:12},(l,o)=>{const u=o+1,c=(u*10.5).toFixed(2);return{id:450+u,product:"Agrossor",duration:"Month",kisti:u,helper:`Agrossor|Month|${u}`,rate:c}}),...Array.from({length:18},(l,o)=>{const u=o+1,c=(u*11).toFixed(2);return{id:470+u,product:"Agrossor",duration:"1.5 Year",kisti:u,helper:`Agrossor|1.5 Year|${u}`,rate:c}}),...Array.from({length:24},(l,o)=>{const u=o+1,c=(u*11.5).toFixed(2);return{id:490+u,product:"Agrossor",duration:"2 Year",kisti:u,helper:`Agrossor|2 Year|${u}`,rate:c}}),...Array.from({length:46},(l,o)=>{const u=o+1,c=u<=2?"0.00":(u*2.05).toFixed(2);return{id:600+u,product:"Buniyed",duration:"Week",kisti:u,helper:`Buniyed|Week|${u}`,rate:c}}),...Array.from({length:12},(l,o)=>{const u=o+1,c=(u*8).toFixed(2);return{id:650+u,product:"Buniyed",duration:"Month",kisti:u,helper:`Buniyed|Month|${u}`,rate:c}}),...Array.from({length:18},(l,o)=>{const u=o+1,c=(u*8.5).toFixed(2);return{id:670+u,product:"Buniyed",duration:"1.5 Year",kisti:u,helper:`Buniyed|1.5 Year|${u}`,rate:c}}),...Array.from({length:46},(l,o)=>{const u=o+1,c=u<=2?"0.00":(u*2.2).toFixed(2);return{id:700+u,product:"Sufolon",duration:"Week",kisti:u,helper:`Sufolon|Week|${u}`,rate:c}}),...Array.from({length:12},(l,o)=>{const u=o+1,c=(u*8.5).toFixed(2);return{id:750+u,product:"Sufolon",duration:"Month",kisti:u,helper:`Sufolon|Month|${u}`,rate:c}}),...Array.from({length:18},(l,o)=>{const u=o+1,c=(u*9).toFixed(2);return{id:770+u,product:"Sufolon",duration:"1.5 Year",kisti:u,helper:`Sufolon|1.5 Year|${u}`,rate:c}}),...Array.from({length:46},(l,o)=>{const u=o+1,c=u<=2?"0.00":(u*2.5).toFixed(2);return{id:800+u,product:"MFCE",duration:"Week",kisti:u,helper:`MFCE|Week|${u}`,rate:c}}),...Array.from({length:12},(l,o)=>{const u=o+1,c=(u*9.8).toFixed(2);return{id:850+u,product:"MFCE",duration:"Month",kisti:u,helper:`MFCE|Month|${u}`,rate:c}}),...Array.from({length:18},(l,o)=>{const u=o+1,c=(u*10.2).toFixed(2);return{id:870+u,product:"MFCE",duration:"1.5 Year",kisti:u,helper:`MFCE|1.5 Year|${u}`,rate:c}}),...Array.from({length:24},(l,o)=>{const u=o+1,c=(u*10.8).toFixed(2);return{id:890+u,product:"MFCE",duration:"2 Year",kisti:u,helper:`MFCE|2 Year|${u}`,rate:c}})];const S2="/.netlify/functions/neon-api",Im="gobra_server_token",Bm="gobra_server_user";function Yi(){try{return localStorage.getItem(Im)||""}catch{return""}}function ol(){try{const l=localStorage.getItem(Bm);return l?JSON.parse(l):null}catch{return null}}function lc(l,o){try{localStorage.setItem(Im,l),localStorage.setItem(Bm,JSON.stringify(o))}catch{}}function vb(){try{localStorage.removeItem(Im),localStorage.removeItem(Bm)}catch{}}const Lb="gobra_admin_gate_token";function rm(){try{return sessionStorage.getItem(Lb)||""}catch{return""}}function y2(l){try{sessionStorage.setItem(Lb,l)}catch{}}const rr=()=>rm();async function aa(l,o={},u=""){const c=await fetch(S2,{method:"POST",headers:{"content-type":"application/json",...u||Yi()?{authorization:`Bearer ${u||Yi()}`}:{}},body:JSON.stringify({action:l,...o})});if(c.status===404||c.status===405)return{ok:!1,error:"server error"};let d=null;try{d=await c.json()}catch{if(c.status===404||c.status===405)return{ok:!1,error:"server error"};d={ok:!1,error:`HTTP ${c.status}`}}return d&&d.error==="usage_exceeded"&&(d.error="⚠️ পুরনো/আর্কাইভ ঠিকানায় আছেন — সে সার্ভার বন্ধ। ➡️ নতুন লিংক খুলুন: cash-gobra-bkf.netlify.app"),d}async function N2(l,o){const u=await aa("login",{mobile:l,password:o});return u.ok&&u.token&&lc(u.token,u.user),u}async function v2(l){const o=await aa("register",{name:l.name,mobile:l.mobile,password:l.password,branchId:l.branchId});return o!=null&&o.ok&&o.token&&o.user&&lc(o.token,o.user),o}async function L2(l){const o=await aa("google",{credential:l});return o.ok&&o.token&&lc(o.token,o.user),o}async function O2(){const l=await aa("meet");return l.ok&&l.user&&lc(Yi(),l.user),l.error==="unauthorized"&&vb(),l}async function Ei(){const l=await aa("pending-list",{},rr());return{ok:!!l.ok,pending:Array.isArray(l.pending)?l.pending:[]}}async function j2(l,o="gobra"){return aa("approve",{userId:l,branchId:o},rr())}async function I2(l){return aa("reject",{userId:l},rr())}async function B2(){const l=await aa("branch-list",{},rr());return{ok:!!l.ok,branches:Array.isArray(l.branches)?l.branches:[]}}async function H2(){const l=await aa("user-list",{},rr());return{ok:!!l.ok,users:Array.isArray(l.users)?l.users:[]}}async function w2(l){return aa("user-delete",{userId:l},rr())}async function E2(l){const o=await aa("gate",{password:l});return o.ok&&o.gateToken&&y2(o.gateToken),{ok:!!o.ok,error:o.error,pendingCount:o.pendingCount}}async function M2(l,o){return aa("gate-pass-change",{oldPass:l,newPass:o})}let Xd=null;function C2(){return Xd||(Xd=new Promise((l,o)=>{if(document.querySelector('script[src*="gsi/client"]'))return l();const c=document.createElement("script");c.src="https://accounts.google.com/gsi/client",c.async=!0,c.defer=!0,c.onload=()=>l(),c.onerror=()=>o(new Error("Google script লোড হয়নি")),document.head.appendChild(c)})),Xd}function k2(l,o){if(typeof l=="string")return{text:l,params:o[0]||[]};const u=l,c=o;let d="";const f=[];for(let A=0;A<u.length;A++)if(d+=u[A],A<c.length){const b=c[A];b&&b.__neonRaw?d+=b.__neonRaw:(f.push(b),d+=`$${f.length}`)}return{text:d,params:f}}const om="__no_server__";let im=!1;function Sh(){return im}async function Ob(l,o){const u=Yi();if(!u)throw new Error("সার্ভার-লগইন নেই — আগে সাইন ইন করুন");if(im)throw new Error(om);const c=await fetch("/.netlify/functions/neon-api",{method:"POST",headers:{"content-type":"application/json",authorization:`Bearer ${u}`},body:JSON.stringify({action:"sql",queries:l,transaction:o})});if(c.status===404||c.status===405)throw im=!0,new Error(om);let d=null;try{d=await c.json()}catch{d={ok:!1,error:`HTTP ${c.status}`}}if(!(d!=null&&d.ok))throw new Error((d==null?void 0:d.error)||`HTTP ${c.status}`);return d.results}class yh{constructor(o){this.__q=o}then(o,u){return Ob([this.__q],!1).then(c=>c[0]).then(o,u)}catch(o){return this.then(void 0,o)}finally(o){return this.then().finally(o||void 0)}}function U2(){const l=(o,...u)=>new yh(k2(o,u));return l.query=(o,u=[])=>new yh({text:o,params:u}),l.unsafe=o=>({__neonRaw:o}),l.transaction=o=>{const u=o.map(c=>(c==null?void 0:c.__q)||(typeof c=="string"?{text:c,params:[]}:null)).filter(Boolean);return u.length?Ob(u,!0):Promise.resolve([])},l}const Ze=U2(),ul=()=>{const l=String(Ts()||wn).trim();return!l||l===wn?"public":"br_"+l.toLowerCase().replace(/[^a-z0-9_]/g,"_").slice(0,48)},Hm=l=>`"${ul()}"."${l}"`,et=l=>Ze.unsafe(Hm(l)),jb="gobra_neon_sync_state";function nr(){try{const l=localStorage.getItem(jb);if(l)return JSON.parse(l)}catch{}return{connected:!0,isSyncing:!1,lastSyncTime:null,lastError:null,pendingCount:0}}function er(l){const u={...nr(),...l};try{localStorage.setItem(jb,JSON.stringify(u)),window.dispatchEvent(new CustomEvent("neon-sync-status-changed",{detail:u}))}catch{}}async function D2(){return(await Ze`
    SELECT id, type, category, sub_category, amount, service_charge, description, denomination, other_amount, tx_date
    FROM ${et("transactions")}
    ORDER BY id DESC
  `).map(o=>({id:Number(o.id),type:o.type,category:o.category,subCategory:o.sub_category||"",amount:String(o.amount??"0"),serviceCharge:o.service_charge!=null?String(o.service_charge):void 0,description:o.description||"",denomination:o.denomination||void 0,otherAmount:o.other_amount!=null?String(o.other_amount):void 0,txDate:o.tx_date}))}async function Ib(l){await Ze`
    INSERT INTO ${et("transactions")} (id, type, category, sub_category, amount, service_charge, description, denomination, other_amount, tx_date)
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
  `}async function Bb(l){const o=Number(l);!o||isNaN(o)||await Ze`DELETE FROM ${et("transactions")} WHERE id = ${o}`}async function T2(){return(await Ze`
    SELECT id, staff_name, report_date, loan, rebate, savings, dps, passbook, admission, savings_adjust, nogod_return, created_at
    FROM ${et("staff_reports")}
    ORDER BY id DESC
  `).map(o=>({id:Number(o.id),reportDate:o.report_date,staffName:o.staff_name,loan:String(o.loan??"0"),rebate:String(o.rebate??"0"),savings:String(o.savings??"0"),dps:String(o.dps??"0"),admission:String(o.admission??"0"),passbook:String(o.passbook??"0"),savingsAdjust:String(o.savings_adjust??"0"),nogodReturn:String(o.nogod_return??"0"),createdAt:o.created_at?new Date(o.created_at).toISOString():void 0}))}async function Hb(l){await Ze`
    INSERT INTO ${et("staff_reports")} (id, staff_name, report_date, loan, rebate, savings, dps, passbook, admission, savings_adjust, nogod_return)
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
  `}async function wm(l){const o=Number(l);!o||isNaN(o)||await Ze`DELETE FROM ${et("staff_reports")} WHERE id = ${o}`}async function G2(){return(await Ze`SELECT id, type, name, sort_order FROM ${et("categories")} ORDER BY sort_order ASC NULLS LAST, id ASC`).map(o=>({id:Number(o.id),type:o.type,name:o.name,...o.sort_order!=null?{sortOrder:Number(o.sort_order)}:{}}))}async function K2(l){await Ze`
    INSERT INTO ${et("categories")} AS c (id, type, name, sort_order)
    VALUES (${l.id}, ${l.type}, ${l.name}, ${l.sortOrder??null})
    ON CONFLICT (id) DO UPDATE SET
      type = EXCLUDED.type,
      name = EXCLUDED.name,
      sort_order = COALESCE(EXCLUDED.sort_order, c.sort_order);
  `}async function P2(l,o){if(!o.length)return;const u=o.map((c,d)=>Ze`UPDATE ${et("categories")} SET sort_order = ${d+1} WHERE id = ${c} AND type = ${l}`);await Ze.transaction(u)}async function _2(l){await Ze`DELETE FROM ${et("categories")} WHERE id = ${l}`}async function Z2(){return(await Ze`SELECT id, category, sub_category, rate_per_100 FROM ${et("sc_rates")} ORDER BY id ASC`).map(o=>({id:Number(o.id),category:o.category,subCategory:o.sub_category,ratePer100:String(o.rate_per_100)}))}async function z2(l){await Ze`
    INSERT INTO ${et("sc_rates")} (id, category, sub_category, rate_per_100)
    VALUES (${l.id}, ${l.category}, ${l.subCategory}, ${l.ratePer100})
    ON CONFLICT (id) DO UPDATE SET
      category = EXCLUDED.category,
      sub_category = EXCLUDED.sub_category,
      rate_per_100 = EXCLUDED.rate_per_100;
  `}async function F2(l){await Ze`DELETE FROM ${et("sc_rates")} WHERE id = ${l}`}async function J2(){return(await Ze`SELECT id, sub_category, installments, mode, categories FROM ${et("subcat_rules")} ORDER BY id ASC`).map(o=>({id:Number(o.id),subCategory:o.sub_category,installments:Number(o.installments)||45,mode:o.mode||"all",categories:Array.isArray(o.categories)?o.categories:[]}))}async function X2(l){const o=l.id||Date.now();await Ze`
    INSERT INTO ${et("subcat_rules")} (id, sub_category, installments, mode, categories)
    VALUES (${o}, ${l.subCategory}, ${l.installments}, ${l.mode}, ${JSON.stringify(l.categories||[])})
    ON CONFLICT (id) DO UPDATE SET
      sub_category = EXCLUDED.sub_category,
      installments = EXCLUDED.installments,
      mode = EXCLUDED.mode,
      categories = EXCLUDED.categories;
  `}async function V2(l){await Ze`DELETE FROM ${et("subcat_rules")} WHERE id = ${l}`}async function Y2(){const l=await Ze`SELECT rule_data FROM ${et("kallyan_rule")} WHERE id = 'default' LIMIT 1`;return l.length>0&&l[0].rule_data?l[0].rule_data:null}async function q2(l){await Ze`
    INSERT INTO ${et("kallyan_rule")} (id, rule_data, updated_at)
    VALUES ('default', ${JSON.stringify(l)}, NOW())
    ON CONFLICT (id) DO UPDATE SET
      rule_data = EXCLUDED.rule_data,
      updated_at = NOW();
  `}async function Q2(){return(await Ze`
    SELECT id, product, duration, kisti, rate
    FROM ${et("rebate_rates")}
    ORDER BY product ASC, duration ASC, kisti ASC
  `).map(o=>({id:Number(o.id),product:o.product,duration:o.duration,kisti:Number(o.kisti),helper:`${o.product}|${o.duration}|${o.kisti}`,rate:String(o.rate??"0")}))}async function Em(){try{await Ze`
      CREATE TABLE IF NOT EXISTS ${et("day_closures")} (
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
    `}catch(l){console.warn("ensureDayClosuresTable warning:",l)}}async function $2(){try{return await Em(),(await Ze`
      SELECT id, close_date, opening_cash, opening_bank, closing_cash, closing_bank,
             total_receive, total_payment, denomination, status, closed_at, closed_by, notes
      FROM ${et("day_closures")}
      ORDER BY close_date DESC
    `).map(o=>({id:Number(o.id),closeDate:o.close_date,openingCash:Number(o.opening_cash)||0,openingBank:Number(o.opening_bank)||0,closingCash:Number(o.closing_cash)||0,closingBank:Number(o.closing_bank)||0,totalReceive:Number(o.total_receive)||0,totalPayment:Number(o.total_payment)||0,denomination:o.denomination||null,status:"closed",closedAt:o.closed_at?new Date(o.closed_at).toISOString():new Date().toISOString(),closedBy:o.closed_by||"Cashier",notes:o.notes||""}))}catch(l){return console.warn("fetchDayClosuresFromNeon error:",l),[]}}async function wb(l){try{await Em(),await Ze`
      INSERT INTO ${et("day_closures")} (close_date, opening_cash, opening_bank, closing_cash, closing_bank, total_receive, total_payment, denomination, status, closed_at, closed_by, notes)
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
    `}catch(o){console.warn("upsertDayClosureInNeon error:",o)}}async function W2(l){try{await Em(),await Ze`DELETE FROM ${et("day_closures")} WHERE close_date = ${l}`}catch(o){console.warn("deleteDayClosureInNeon error:",o)}}async function eR(){try{await Ze`
      CREATE TABLE IF NOT EXISTS ${et("app_settings")} (
        key TEXT PRIMARY KEY,
        value TEXT NOT NULL,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
      );
    `}catch(l){console.warn("ensureAppSettingsTable failed:",l)}}async function Eb(){try{await Ze`
      CREATE TABLE IF NOT EXISTS ${et("day_opens")} (
        id SERIAL PRIMARY KEY,
        open_date VARCHAR(20) UNIQUE NOT NULL,
        prev_close_date VARCHAR(20),
        opening_cash NUMERIC DEFAULT 0,
        opening_bank NUMERIC DEFAULT 0,
        opened_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        opened_by VARCHAR(100) DEFAULT 'Cashier'
      );
    `}catch(l){console.warn("ensureDayOpensTable warning:",l)}}async function tR(){try{return await Eb(),(await Ze`
      SELECT id, open_date, prev_close_date, opening_cash, opening_bank, opened_at, opened_by
      FROM ${et("day_opens")}
      ORDER BY open_date DESC
    `).map(o=>({id:Number(o.id),openDate:o.open_date,prevCloseDate:o.prev_close_date||null,openingCash:Number(o.opening_cash)||0,openingBank:Number(o.opening_bank)||0,openedAt:o.opened_at?new Date(o.opened_at).toISOString():new Date().toISOString(),openedBy:o.opened_by||"Cashier"}))}catch(l){return console.warn("fetchDayOpensFromNeon error:",l),[]}}async function Mb(l){try{await Eb(),await Ze`
      INSERT INTO ${et("day_opens")} (open_date, prev_close_date, opening_cash, opening_bank, opened_at, opened_by)
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
    `}catch(o){console.warn("upsertDayOpenInNeon error:",o)}}async function Zi(l){try{const o=await Ze`
      SELECT value FROM ${et("app_settings")} WHERE key = ${l} LIMIT 1
    `;if(o.length>0&&o[0].value)return String(o[0].value)}catch(o){console.warn(`fetchAppSettingFromNeon(${l}) error:`,o)}return null}async function Mm(l,o){try{await eR(),await Ze`
      INSERT INTO ${et("app_settings")} (key, value, updated_at)
      VALUES (${l}, ${o}, NOW())
      ON CONFLICT (key) DO UPDATE SET
        value = EXCLUDED.value,
        updated_at = NOW();
    `}catch(u){console.warn(`upsertAppSettingInNeon(${l}) error:`,u)}}const nR=["transactions","staff_reports","categories","sc_rates","subcat_rules","kallyan_rule","rebate_rates","day_closures","day_opens","app_settings","site_content"],Nh="gobra_neon_schema_ready_v6",aR=l=>[`CREATE TABLE IF NOT EXISTS "${l}".check_entries (
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
  )`,`ALTER TABLE "${l}".check_entries ADD COLUMN IF NOT EXISTS returned BOOLEAN DEFAULT FALSE`,`ALTER TABLE "${l}".check_entries ADD COLUMN IF NOT EXISTS extra_banks TEXT`,`ALTER TABLE "${l}".check_entries ADD COLUMN IF NOT EXISTS reissued_to TEXT`,`ALTER TABLE "${l}".check_entries ADD COLUMN IF NOT EXISTS reissued_from TEXT`,`ALTER TABLE "${l}".check_entries ADD COLUMN IF NOT EXISTS account_no TEXT`,`ALTER TABLE "${l}".check_entries ADD COLUMN IF NOT EXISTS account_type TEXT`,`CREATE INDEX IF NOT EXISTS check_entries_date_idx ON "${l}".check_entries (check_date)`,`CREATE INDEX IF NOT EXISTS check_entries_member_idx ON "${l}".check_entries (member_code)`],sR=l=>[`ALTER TABLE "${l}".categories ADD COLUMN IF NOT EXISTS sort_order INTEGER`],lR=l=>[`CREATE TABLE IF NOT EXISTS "${l}".members (
    member_code TEXT PRIMARY KEY,
    member_name TEXT,
    centre_code TEXT,
    centre_name TEXT,
    bank_name TEXT,
    check_no TEXT,
    source TEXT DEFAULT 'db',
    updated_at TIMESTAMPTZ DEFAULT NOW()
  )`,`CREATE INDEX IF NOT EXISTS members_centre_idx ON "${l}".members (centre_code)`];let Mi=null;async function ha(l=!1){const o=ul();try{if(!l&&localStorage.getItem(Nh)===o)return}catch{}return Mi||(Mi=(async()=>{const u=[];if(o!=="public"){u.push(`CREATE SCHEMA IF NOT EXISTS "${o}"`);for(const c of nR)u.push(`CREATE TABLE IF NOT EXISTS "${o}"."${c}" (LIKE "public"."${c}" INCLUDING ALL)`);for(const c of["sc_rates","subcat_rules","kallyan_rule","rebate_rates","site_content"])u.push(`INSERT INTO "${o}"."${c}" SELECT * FROM "public"."${c}" WHERE NOT EXISTS (SELECT 1 FROM "${o}"."${c}")`);u.push(`INSERT INTO "${o}"."categories" SELECT * FROM "public"."categories" c
           WHERE NOT EXISTS (SELECT 1 FROM "${o}"."categories")
             AND (c.type <> 'receive' OR lower(c.name) NOT IN (SELECT lower(staff_name) FROM "public"."staff_reports"))`),u.push(`INSERT INTO "${o}"."app_settings" SELECT * FROM "public"."app_settings"
           WHERE key NOT IN ('entertainment_entries', 'entertainment_deleted_ids')
             AND NOT EXISTS (SELECT 1 FROM "${o}"."app_settings")`)}u.push(...aR(o),...lR(o),...sR(o)),await Ze.transaction(u.map(c=>Ze.query(c)));try{localStorage.setItem(Nh,o)}catch{}})().finally(()=>{Mi=null})),Mi}const rR=l=>{if(l)try{const o=JSON.parse(String(l));if(!Array.isArray(o))return;const u=o.map(c=>({bankName:String((c==null?void 0:c.bankName)||""),checkNo:String((c==null?void 0:c.checkNo)||""),micr:(c==null?void 0:c.micr)===!0,accountNo:String((c==null?void 0:c.accountNo)||""),accountType:String((c==null?void 0:c.accountType)||""),bankStatement:(c==null?void 0:c.bankStatement)===!0})).filter(c=>c.bankName||c.checkNo);return u.length>0?u:void 0}catch{return}},vh=l=>{if(l)try{const o=JSON.parse(String(l));if(!o||typeof o!="object"||!Number.isFinite(Number(o==null?void 0:o.id)))return;const u={id:Number(o.id)};return o.date!=null&&(u.date=String(o.date)),o.checkNo!=null&&(u.checkNo=String(o.checkNo)),o.checkDate!=null&&(u.checkDate=String(o.checkDate)),u}catch{return}};async function oR(){try{return await ha(),(await Ze`
      SELECT id, check_date, member_code, member_name, centre_code, centre_name,
             bank_name, check_no, disbursse, project, micr, found_in_db, returned, extra_banks,
             reissued_to, reissued_from, account_no, account_type, created_at
      FROM ${et("check_entries")}
      ORDER BY check_date DESC, id DESC
    `).map(o=>({id:Number(o.id),checkDate:o.check_date,memberCode:o.member_code||"",memberName:o.member_name||"",centreCode:o.centre_code||"",centreName:o.centre_name||"",bankName:o.bank_name||"",checkNo:o.check_no||"",disbursse:o.disbursse||"",project:o.project||"",micr:o.micr===!0,foundInDb:o.found_in_db===!0,returned:o.returned===!0,extraBanks:rR(o.extra_banks),reissuedTo:vh(o.reissued_to),reissuedFrom:vh(o.reissued_from),accountNo:o.account_no||"",accountType:o.account_type||"",createdAt:o.created_at?new Date(o.created_at).toISOString():void 0}))}catch(l){return console.warn("fetchCheckEntriesFromNeon error:",l),[]}}async function Cb(l){const o=Number(l==null?void 0:l.id);!o||isNaN(o)||(await ha(),await Ze`
    INSERT INTO ${et("check_entries")}
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
  `)}async function iR(l){const o=Number(l);if(!(!o||isNaN(o)))try{await ha(),await Ze`DELETE FROM ${et("check_entries")} WHERE id = ${o}`}catch(u){console.warn("deleteCheckEntryFromNeon error:",u)}}async function cR(){try{return await ha(),(await Ze`
      SELECT member_code, member_name, centre_code, centre_name, bank_name, check_no, source, updated_at
      FROM ${et("members")}
      ORDER BY member_code ASC
    `).map(o=>({memberCode:String(o.member_code||""),memberName:o.member_name||"",centreCode:o.centre_code||"",centreName:o.centre_name||"",bankName:o.bank_name||void 0,checkNo:o.check_no||void 0,source:o.source==="auto"?"auto":"db",updatedAt:o.updated_at?new Date(o.updated_at).toISOString():void 0}))}catch(l){return console.warn("fetchMembersFromNeon error:",l),[]}}async function uR(){try{await ha();const l=await Ze`
      SELECT COUNT(*)::int AS c, COALESCE(MAX(updated_at)::text, '') AS m
      FROM ${et("members")}
    `,o=(l==null?void 0:l[0])||{};return{count:Number(o.c||0),maxUpdated:String(o.m||""),ok:!0}}catch(l){return console.warn("fetchMembersStampFromNeon error:",l),{count:-1,maxUpdated:"",ok:!1}}}async function qi(l,o=400){const u=(Array.isArray(l)?l:[]).filter(d=>d&&String(d.memberCode||"").trim());if(u.length===0)return 0;await ha();let c=0;for(let d=0;d<u.length;d+=o){const f=u.slice(d,d+o),A=[],b=[];f.forEach((h,L)=>{const y=L*7;A.push(`($${y+1},$${y+2},$${y+3},$${y+4},$${y+5},$${y+6},$${y+7})`),b.push(String(h.memberCode).trim(),h.memberName||"",h.centreCode||"",h.centreName||"",h.bankName||"",h.checkNo||"",h.source==="auto"?"auto":"db")}),await Ze.query(`INSERT INTO ${Hm("members")}
         (member_code, member_name, centre_code, centre_name, bank_name, check_no, source)
       VALUES ${A.join(",")}
       ON CONFLICT (member_code) DO UPDATE SET
         member_name = EXCLUDED.member_name,
         centre_code = EXCLUDED.centre_code,
         centre_name = EXCLUDED.centre_name,
         bank_name = EXCLUDED.bank_name,
         check_no = EXCLUDED.check_no,
         source = EXCLUDED.source,
         updated_at = NOW()`,b),c+=f.length}return c}async function dR(l){const o=String(l||"").trim();if(o)try{await ha(),await Ze`DELETE FROM ${et("members")} WHERE member_code = ${o}`}catch(u){console.warn("deleteMemberFromNeon error:",u)}}async function mR(){try{await ha(),await Ze`DELETE FROM ${et("members")}`}catch(l){console.warn("clearMembersInNeon error:",l)}}async function AR(){var u;const l=ul(),o={};try{await ha();const c=["transactions","staff_reports","categories","day_opens","day_closures","rebate_rates","check_entries","members"];for(const d of c)try{const f=await Ze.query(`SELECT count(*)::int AS n FROM ${Hm(d)}`);o[d]=Number(((u=f==null?void 0:f[0])==null?void 0:u.n)||0)}catch{o[d]=-1}}catch(c){console.warn("fetchNeonStats error:",c)}return{schema:l,rows:o}}const Vd="2026-10-05-4772",fR=`memberCode,memberName,centreCode,centreName
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
5549,Mafuza,246,SOLPUR (FEMALE)`,xR="gobra_member_cloud_dirty",Cm=()=>{try{localStorage.setItem(xR,"1"),rt({type:"member_dirty",payload:null})}catch{}},kb="gobra_member_database",Yd="gobra_member_db_seed",Te=l=>String(l??"").trim().replace(/\s+/g,"").toUpperCase(),co=l=>String(l??"").trim();function Pn(){try{const l=localStorage.getItem(kb),o=l?JSON.parse(l):[];return Array.isArray(o)?o:[]}catch{return[]}}function or(l){try{localStorage.setItem(kb,JSON.stringify(l))}catch{}window.dispatchEvent(new Event("member-db-changed"))}function hR(l){const o=Pn(),u=Te(l.memberCode),c={...l,memberCode:co(l.memberCode),updatedAt:new Date().toISOString()},d=o.findIndex(f=>Te(f.memberCode)===u);d>=0?o[d]={...o[d],...c}:o.unshift(c),or(o);try{rt({type:"member",payload:c})}catch{}return c}function Lh(l){const o=Te(l);or(Pn().filter(u=>Te(u.memberCode)!==o));try{rt({type:"member_del",payload:co(l)})}catch{}}const bR=["9001"];function pR(){const l=new Set(bR.map(c=>Te(c))),o=Pn(),u=o.filter(c=>l.has(Te(c.memberCode)));if(!u.length)return 0;or(o.filter(c=>!l.has(Te(c.memberCode))));for(const c of u)try{rt({type:"member_del",payload:c.memberCode})}catch{}return u.length}function gR(l=!1){try{if(!sr()){try{localStorage.setItem(Yd,Vd)}catch{}return null}if(!l&&localStorage.getItem(Yd)===Vd)return null;const{members:o}=km(fR);if(!o.length)return null;const u=new Map;for(const b of Pn()){const h=Te(b.memberCode);h&&u.set(h,b)}let c=0,d=0;const f=new Date().toISOString();for(const b of o){const h=Te(b.memberCode);if(!h)continue;const L=u.get(h);L?(Te(L.memberName)!==Te(b.memberName)||L.centreName!==b.centreName||Te(L.centreCode)!==Te(b.centreCode))&&d++:c++,u.set(h,{...L||{},memberCode:h,memberName:b.memberName,centreCode:b.centreCode,centreName:b.centreName,source:"db",updatedAt:f})}const A=Array.from(u.values());or(A);try{localStorage.setItem(Yd,Vd)}catch{}return Cm(),{added:c,updated:d,total:A.length}}catch{return null}}function Oh(l){const o=Te(l);return o&&Pn().find(u=>Te(u.memberCode)===o)||null}function RR(){return Pn().length}function SR(l){const o={};return l.forEach((u,c)=>{const d=co(u).toLowerCase();if(!d)return;const f=(...A)=>A.some(b=>d.includes(b));o.memberCode===void 0&&f("member code","membercode","member_code","মেম্বার কোড","সদস্য কোড","কোড")?o.memberCode=c:o.memberName===void 0&&f("member name","membername","member_name","মেম্বার","সদস্যের নাম","নাম")?o.memberName=c:o.centreCode===void 0&&f("centre code","center code","centrecode","centercode","centre_code","কেন্দ্র কোড","সেন্টার কোড")?o.centreCode=c:o.centreName===void 0&&f("centre name","center name","centrename","centre_name","কেন্দ্র","সেন্টার")?o.centreName=c:o.bankName===void 0&&f("bank name","bankname","ব্যাংক")?o.bankName=c:o.checkNo===void 0&&f("check no","cheque no","checkno","check no:","চেক")&&(o.checkNo=c)}),o}function km(l){const o=String(l||"").replace(/\r/g,"").split(`
`).filter(L=>L.trim().length>0);if(!o.length)return{members:[],skipped:0};const u=L=>{if(L.includes("	"))return L.split("	");if(L.includes(",")){const y=[];let g="",H=!1;for(let D=0;D<L.length;D++){const T=L[D];T==='"'?H&&L[D+1]==='"'?(g+='"',D++):H=!H:T===","&&!H?(y.push(g),g=""):g+=T}return y.push(g),y}return L.split(/\s{2,}|;/)},c=u(o[0]),d=SR(c),f=d.memberCode!==void 0&&Object.keys(d).length>=2,A=(L,y,g)=>{const H=f?d[y]:g;return H===void 0?"":co(L[H])},b=[];let h=0;for(const L of f?o.slice(1):o){const y=u(L),g=A(y,"memberCode",0);if(!g){h++;continue}b.push({memberCode:g,memberName:A(y,"memberName",1),centreCode:A(y,"centreCode",2),centreName:A(y,"centreName",3),bankName:A(y,"bankName",4)||void 0,checkNo:A(y,"checkNo",5)||void 0,source:"db",updatedAt:new Date().toISOString()})}return{members:b,skipped:h}}function cm(l){const o=Pn(),u=new Map(o.map((A,b)=>[Te(A.memberCode),b]));let c=0,d=0;const f=[];for(const A of l){const b=Te(A.memberCode);if(!b)continue;const h=u.get(b);if(h===void 0)o.push({...A,source:"db",updatedAt:new Date().toISOString()}),u.set(b,o.length-1),f.push(A.memberCode),c++;else{const L=o[h];o[h]={...L,memberName:A.memberName||L.memberName,centreCode:A.centreCode||L.centreCode,centreName:A.centreName||L.centreName,bankName:A.bankName||L.bankName,checkNo:A.checkNo||L.checkNo,source:"db",updatedAt:new Date().toISOString()},d++}}return or(o),Cm(),{added:c,updated:d,total:o.length,addedCodes:f}}const rc="gobra_member_upload_history",Ub=15;function so(){try{const l=localStorage.getItem(rc);if(!l)return[];const o=JSON.parse(l);return Array.isArray(o)?o.filter(u=>u&&typeof u=="object"):[]}catch{return[]}}function jh(l){try{const o=so();o.unshift({...l,id:`up_${Date.now()}_${Math.random().toString(36).slice(2,7)}`,at:new Date().toISOString()}),localStorage.setItem(rc,JSON.stringify(o.slice(0,Ub)))}catch{}}function yR(l){try{localStorage.setItem(rc,JSON.stringify(so().filter(o=>o.id!==l)))}catch{}}function NR(l){const o=so().find(A=>A.id===l);if(!o||o.undoneAt||!o.addedCodes||!o.addedCodes.length)return null;const u=new Set(o.addedCodes.map(vR)),c=Pn(),d=c.filter(A=>!u.has(Te(A.memberCode))),f=c.length-d.length;or(d);for(const A of c)if(u.has(Te(A.memberCode)))try{rt({type:"member_del",payload:co(A.memberCode)})}catch{}try{Cm()}catch{}try{const A=so().map(b=>b.id===l?{...b,undoneAt:new Date().toISOString(),removed:f,addedCodes:[]}:b);localStorage.setItem(rc,JSON.stringify(A.slice(0,Ub)))}catch{}return{removed:f,total:d.length}}function vR(l){return Te(l)}function LR(l,o,u){const c=Date.parse(u||"")||0,d=new Map(o.map(h=>[Te(h.memberCode),h])),f=new Set,A=[];let b=!1;for(const h of l){const L=Te(h.memberCode);f.add(L);const y=d.get(L);if(y){const g=Date.parse(h.updatedAt||"")||0;(Date.parse(y.updatedAt||"")||0)>g?(A.push(y),b=!0):A.push(h)}else(Date.parse(h.updatedAt||"")||c+1)>c?A.push(h):b=!0}for(const h of o)f.has(Te(h.memberCode))||(A.push(h),b=!0);return{merged:A,changed:b}}const Db="gobra_entertainment_entries",OR="entertainment_entries",Tb="gobra_entertainment_deleted_ids",Gb="entertainment_deleted_ids";function Um(){try{const l=localStorage.getItem(Db),o=l?JSON.parse(l):[];return Array.isArray(o)?o:[]}catch{return[]}}function jR(){return[...Um()].sort((l,o)=>String(o.date||"").localeCompare(String(l.date||""))||Number(o.id)-Number(l.id))}function Kb(l){localStorage.setItem(Db,JSON.stringify(l)),window.dispatchEvent(new Event("entertainment-changed")),rt({type:"setting",payload:{key:OR,value:JSON.stringify(l)}})}function IR(l){const o={...l,id:l.id||Date.now()};return Kb([o,...Um().filter(u=>u.id!==o.id)]),o}function Qi(){try{const l=localStorage.getItem(Tb),o=l?JSON.parse(l):[];return new Set((Array.isArray(o)?o:[]).map(String))}catch{return new Set}}function Pb(l){const o=[...new Set([...l].map(String))].slice(0,500);localStorage.setItem(Tb,JSON.stringify(o))}function BR(l){Pb([...Qi(),String(l)]),rt({type:"setting",payload:{key:Gb,value:JSON.stringify([...Qi()])}})}function Ih(l,o){const u=Qi(),c=new Map;for(const f of l)f&&!u.has(String(f.id))&&c.set(String(f.id),f);for(const f of o)f&&!u.has(String(f.id))&&c.set(String(f.id),f);const d=[...c.values()];return d.sort((f,A)=>String(A.date||"").localeCompare(String(f.date||""))||Number(A.id)-Number(f.id)),d}function HR(l){BR(String(l)),Kb(Um().filter(o=>String(o.id)!==String(l)))}const Bh="gobra_local_transactions",Hh="gobra_local_staff_reports",_b="gobra_local_categories",wR="gobra_local_sc_rates",ER="gobra_local_subcat_rules",MR="gobra_local_rebate_rates",CR="gobra_local_kallyan_rule",wh="gobra_local_day_closures",Eh="gobra_local_day_opens",qd="gobra_google_sheet_url",Zb="gobra_neon_sync_queue",Mh="gobra_check_entries",kR="gobra_check_entries_backup",um="gobra_member_database",$i="gobra_member_cloud_dirty",dm="gobra_member_cloud_state";function Ds(){try{const l=localStorage.getItem(Zb);return l?JSON.parse(l):[]}catch{return[]}}function zb(l){try{localStorage.setItem(Zb,JSON.stringify(l)),er({pendingCount:l.length})}catch{}}function rt(l){const o=Ds();o.push(l),zb(o),Fb().catch(()=>{})}async function Fb(){var u;if(typeof navigator<"u"&&!navigator.onLine)return;const l=Ds();if(l.length===0)return;try{await ha()}catch(c){console.warn("[neon] স্কিমা তৈরি করা যায়নি — কিউ পরে আবার চেষ্টা করবে",c);return}const o=[];for(const c of l)try{if(c.type==="tx")await Ib(c.payload);else if(c.type==="tx_del")await Bb(c.payload);else if(c.type==="sr")await Hb(c.payload);else if(c.type==="sr_del")await wm(c.payload);else if(c.type==="cat")await K2(c.payload);else if(c.type==="cat_del")await _2(c.payload);else if(c.type==="cat_order"){const d=String(((u=c.payload)==null?void 0:u.type)||"");let f=[];try{const A=localStorage.getItem(_b);f=(A?JSON.parse(A):[]).filter(h=>h.type===d).sort((h,L)=>(h.sortOrder??9e9)-(L.sortOrder??9e9)).map(h=>Number(h.id))}catch{}f.length&&await P2(d,f)}else if(c.type==="sc")await z2(c.payload);else if(c.type==="sc_del")await F2(c.payload);else if(c.type==="subcat")await X2(c.payload);else if(c.type==="subcat_del")await V2(c.payload);else if(c.type==="kallyan")await q2(c.payload);else if(c.type==="day_close")await wb(c.payload);else if(c.type==="day_reopen")await W2(c.payload);else if(c.type==="day_open")await Mb(c.payload);else if(c.type==="setting")await Mm(c.payload.key,c.payload.value);else if(c.type==="check")await Cb(c.payload);else if(c.type==="check_del")await iR(c.payload);else if(c.type==="member")await qi([c.payload]);else if(c.type==="member_dirty"){const d=localStorage.getItem(um),f=d?JSON.parse(d):[];if(f.length>0){const A=await qi(f);localStorage.setItem(dm,JSON.stringify({count:A,syncedAt:new Date().toISOString(),schema:ul()}))}localStorage.removeItem($i)}else c.type==="member_del"?await dR(String(c.payload)):c.type==="member_clear"&&(await mR(),localStorage.removeItem($i))}catch(d){console.warn("Failed to process queue item, keeping in retry queue:",c,d),o.push(c)}zb(o)}let Qd=!1;async function tr(){if(Qd)return{success:!1,message:"সিংক চলছে… একটু পরে আবার চেষ্টা হবে।"};Qd=!0;try{return await UR()}finally{Qd=!1}}async function UR(){if(typeof navigator<"u"&&!navigator.onLine)return er({connected:!1,isSyncing:!1,pendingCount:Ds().length}),{success:!1,message:"বর্তমানে ডিভাইসটি অফলাইনে রয়েছে। ডাটা লোকাল মেমরিতে জমা থাকছে।"};er({isSyncing:!0,lastError:null});try{await ha(),await Fb();const[l,o,u,c,d,f,A,b,h]=await Promise.all([D2(),T2(),G2(),Z2(),J2(),Y2(),Q2(),$2(),tR()]);let L=[],y=[];try{const B=localStorage.getItem(Bh);B&&(L=JSON.parse(B));const se=localStorage.getItem(Hh);se&&(y=JSON.parse(se))}catch{}const g=Ds(),H=new Set(g.filter(B=>B.type==="tx").map(B=>String(B.payload.id))),D=new Set(l.map(B=>String(B.id))),T=L.filter(B=>H.has(String(B.id))&&!D.has(String(B.id))&&B.txDate!=="2026-09-18");if(T.length>0)for(const B of T)await Ib(B),l.unshift(B);const Z=new Set(g.filter(B=>B.type==="sr").map(B=>String(B.payload.id))),O=new Set(o.map(B=>String(B.id))),G=y.filter(B=>Z.has(String(B.id))&&!O.has(String(B.id)));if(G.length>0)for(const B of G)await Hb(B),o.unshift(B);let ce=[];try{const B=localStorage.getItem(wh);B&&(ce=JSON.parse(B))}catch{}const K=new Set(b.map(B=>B.closeDate));for(const B of ce)K.has(B.closeDate)||(await wb(B),b.unshift(B));let ee=[];try{const B=localStorage.getItem(Eh);B&&(ee=JSON.parse(B))}catch{}const C=new Set(h.map(B=>B.openDate));for(const B of ee)C.has(B.openDate)||(await Mb(B),h.unshift(B));const V=l.filter(B=>B.txDate!=="2026-09-18");localStorage.setItem(Bh,JSON.stringify(V)),localStorage.setItem(Hh,JSON.stringify(o)),localStorage.setItem(wh,JSON.stringify(b)),localStorage.setItem(Eh,JSON.stringify(h)),u.length>0&&localStorage.setItem(_b,JSON.stringify(u)),c.length>0&&localStorage.setItem(wR,JSON.stringify(c)),d.length>0&&localStorage.setItem(ER,JSON.stringify(d)),f&&localStorage.setItem(CR,JSON.stringify(f)),A.length>0&&localStorage.setItem(MR,JSON.stringify(A));try{const B=await Zi("google_sheet_url");if(B&&B.trim().startsWith("http"))(localStorage.getItem(qd)||"")!==B&&(localStorage.setItem(qd,B),window.dispatchEvent(new CustomEvent("google-sheet-url-changed",{detail:B})));else{const se=localStorage.getItem(qd)||"";se&&se.trim().startsWith("http")&&await Mm("google_sheet_url",se.trim())}}catch(B){console.warn("Failed to sync google_sheet_url:",B)}try{const B="gobra_entertainment_entries";try{const ie=await Zi(Gb);if(ie){const te=JSON.parse(ie);Pb([...Qi(),...Array.isArray(te)?te.map(String):[]])}}catch{}const se=await Zi("entertainment_entries");if(se){const ie=JSON.parse(se),te=localStorage.getItem(B),ue=te?JSON.parse(te):[],be=Ih(ie,ue),E=JSON.stringify(be),w=N=>`${N.date}|${N.id}`,p=JSON.stringify(Ih([...ie].sort((N,P)=>String(w(P)).localeCompare(String(w(N)))),[]));E!==(te||"[]")&&(localStorage.setItem(B,E),window.dispatchEvent(new Event("entertainment-changed"))),E!==p&&rt({type:"setting",payload:{key:"entertainment_entries",value:E}})}}catch(B){console.warn("Entertainment sync failed:",B)}try{const B=await oR(),se=localStorage.getItem(Mh),ie=se?JSON.parse(se):[],te=Ds(),ue=new Set(te.filter(N=>N.type==="check").map(N=>{var P;return String((P=N.payload)==null?void 0:P.id)})),be=new Set(te.filter(N=>N.type==="check_del").map(N=>String(N.payload))),E=TR(ie,B,ue,be);E.length>=ie.length-be.size?kh(E)!==kh(ie)&&(localStorage.setItem(Mh,JSON.stringify(E)),localStorage.setItem(kR,JSON.stringify(E)),window.dispatchEvent(new CustomEvent("check-changed",{detail:{count:E.length,restored:E.length-ie.length,cloud:!0}}))):console.warn(`[neon] চেক এন্ট্রি মার্জ লোকালের চেয়ে ছোট হয়ে যাচ্ছিল (${ie.length} → ${E.length}) — লোকাল তালিকাই রাখা হয়েছে`);const w=new Set(B.map(N=>String(N.id))),p=E.filter(N=>!w.has(String(N.id))&&!be.has(String(N.id)));for(const N of p.slice(0,250))try{await Cb(N)}catch(P){console.warn("[neon] চেক এন্ট্রি আপলোড ব্যর্থ",P);break}}catch(B){console.warn("[neon] চেক এন্ট্রি সিংক ব্যর্থ:",B)}try{const B=localStorage.getItem(um);let se=[];try{se=B?JSON.parse(B):[]}catch{}const ie=localStorage.getItem(dm);let te="",ue="";try{const N=ie?JSON.parse(ie):{};te=N.syncedAt||"",ue=N.stamp||""}catch{}if(localStorage.getItem($i)==="1"&&se.length>0){const N=await qi(se);localStorage.removeItem($i),window.dispatchEvent(new CustomEvent("member-cloud-synced",{detail:{count:N,schema:ul()}}))}const E=await uR(),w=E.ok?`${E.count}|${E.maxUpdated}`:"";if(E.ok&&(!te||w!==ue)){const N=await cR();if(!(N.length===0&&E.count>0)){const{merged:W,changed:F}=LR(se,N,te);F&&(localStorage.setItem(um,JSON.stringify(W)),window.dispatchEvent(new CustomEvent("member-db-changed",{detail:{count:W.length,cloud:!0}})));const U=new Set(N.map(_=>Te(_.memberCode))),j=W.filter(_=>!U.has(Te(_.memberCode)));if(j.length>0)try{await qi(j)}catch(_){console.warn("[neon] মেম্বার পুশ-মিসিং ব্যর্থ:",_)}}localStorage.setItem(dm,JSON.stringify({count:E.ok?E.count:se.length,syncedAt:new Date().toISOString(),stamp:w,schema:ul()}))}else E.ok||console.warn("[neon] মেম্বার-স্ট্যাম্প নামানো যায়নি — এবারের মার্জ এড়িয়ে যাওয়া হলো")}catch(B){console.warn("[neon] মেম্বার ডাটাবেজ সিংক ব্যর্থ:",B)}const re=new Date().toLocaleTimeString("bn-BD",{hour:"2-digit",minute:"2-digit",second:"2-digit"});return er({connected:!0,isSyncing:!1,lastSyncTime:re,lastError:null,pendingCount:Ds().length}),window.dispatchEvent(new Event("tx-changed")),window.dispatchEvent(new CustomEvent("rebate-rates-changed",{detail:A})),window.dispatchEvent(new CustomEvent("kallyan-rule-changed",{detail:f})),{success:!0,message:`Neon Database-এ সফলভাবে সিঙ্ক সম্পন্ন! (${l.length} Transactions, ${o.length} Reports)`}}catch(l){return(l==null?void 0:l.message)===om?(er({connected:!1,isSyncing:!1,lastError:"",pendingCount:Ds().length}),{success:!1,message:"🌐 এই হোস্টে ক্লাউড-সিঙ্ক নেই — ডেটা ডিভাইসে লোকাল থাকছে"}):(console.error("Neon sync failed:",l),er({connected:!1,isSyncing:!1,lastError:l.message||"Failed to connect to Neon",pendingCount:Ds().length}),{success:!1,message:`সিঙ্ক ব্যর্থ: ${l.message||"সার্ভার সংযোগ সমস্যা"}`})}}let Ch=!1;function DR(){Ch||(Ch=!0,setTimeout(()=>{tr().catch(()=>{})},100),window.addEventListener("online",()=>{tr().catch(()=>{})}),document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&!Sh()&&tr().catch(()=>{})}),setInterval(()=>{Sh()||tr().catch(()=>{})},45e3))}function TR(l,o,u,c){const d=new Map;for(const b of Array.isArray(o)?o:[])b&&b.id!==void 0&&b.id!==null&&d.set(String(b.id),b);const f=[],A=new Set;for(const b of Array.isArray(l)?l:[]){if(!b||b.id===void 0||b.id===null)continue;const h=String(b.id);if(c.has(h))continue;A.add(h);const L=d.get(h);f.push(L&&!u.has(h)?{...b,...L,id:b.id}:b)}for(const b of d.values()){const h=String(b.id);!A.has(h)&&!c.has(h)&&f.push(b)}return f.sort((b,h)=>String(b.checkDate||"").localeCompare(String(h.checkDate||""))||Number(b.id)-Number(h.id))}function kh(l){return(Array.isArray(l)?l:[]).map(o=>[String(o==null?void 0:o.id),String((o==null?void 0:o.checkDate)||""),String((o==null?void 0:o.memberCode)||""),String((o==null?void 0:o.bankName)||"").toLowerCase(),String((o==null?void 0:o.checkNo)||"").toLowerCase(),String((o==null?void 0:o.project)||"").toLowerCase(),String((o==null?void 0:o.accountNo)||""),String((o==null?void 0:o.accountType)||""),(o==null?void 0:o.micr)===!0?"1":"0"].join("|")).sort().join(";")}const oc="gobra_local_transactions",lo="gobra_local_staff_reports",Ma="gobra_local_categories",Wi="gobra_local_sc_rates",ro="gobra_local_subcat_rules",Jb="gobra_google_sheet_script_url",mm="gobra_local_kallyan_rule",Dm="gobra_local_day_closures",Xb="gobra_local_day_opens";function qe(l){if(!l)return"";let o=String(l).trim();if(o.endsWith("=")&&(o=o.slice(0,-1).trim()),!o)return"";const u=["০","১","২","৩","৪","৫","৬","৭","৮","৯"];for(let c=0;c<10;c++)o=o.split(u[c]).join(String(c));if(/^-?\d+(\.\d+)?$/.test(o))return o;if(/^[0-9+\-*/. ]+$/.test(o))try{if(o.includes("+")&&!o.includes("*")&&!o.includes("/")){const f=o.split("+").map(A=>A.trim()).filter(Boolean).reduce((A,b)=>A+(Number(b)||0),0);return String(Math.round(f))}const c=o.replace(/[^0-9+\-*/.]/g,"");if(c){const d=Function(`'use strict'; return (${c})`)();if(typeof d=="number"&&!isNaN(d)&&isFinite(d))return String(Math.round(d))}}catch{}return l}function dl(){try{const l=localStorage.getItem(Dm);return l?JSON.parse(l):[]}catch{return[]}}function Tm(l){return dl().find(u=>u.closeDate===l)||null}function Oe(l){const o=Tm(l);return o!==null&&o.status==="closed"}function Vb(l){const o=dl().filter(c=>c.closeDate!==l.closeDate),u=[l,...o];return localStorage.setItem(Dm,JSON.stringify(u)),window.dispatchEvent(new CustomEvent("day-close-changed",{detail:l})),window.dispatchEvent(new Event("tx-changed")),rt({type:"day_close",payload:l}),l}function Am(l){const o=dl().filter(u=>u.closeDate!==l);if(localStorage.setItem(Dm,JSON.stringify(o)),!Ks().some(u=>u.openDate===l)){const u=_n(l);Yb({openDate:l,prevCloseDate:u.prevDate||null,openingCash:u.prevCash,openingBank:u.prevBank,openedAt:new Date().toISOString(),openedBy:"Cashier"})}window.dispatchEvent(new CustomEvent("day-close-changed",{detail:{closeDate:l,status:"reopened"}})),window.dispatchEvent(new Event("tx-changed")),rt({type:"day_reopen",payload:l})}function Ks(){try{const l=localStorage.getItem(Xb);return l?JSON.parse(l):[]}catch{return[]}}function fm(l){return Ks().find(u=>u.openDate===l)||null}function Gt(l){return!l||!l.includes("-")||Oe(l)?!1:!!(Ks().some(d=>d.openDate===l)||ln().some(d=>d.txDate===l)||Ln().some(d=>d.reportDate===l))}function GR(l){return!l||!l.includes("-")?"not_opened":Oe(l)?"closed":Gt(l)?"open":"not_opened"}function Yb(l){const o=Ks().filter(c=>c.openDate!==l.openDate),u=[l,...o];return localStorage.setItem(Xb,JSON.stringify(u)),window.dispatchEvent(new CustomEvent("day-open-changed",{detail:l})),window.dispatchEvent(new Event("tx-changed")),rt({type:"day_open",payload:l}),l}function KR(l){if(!l||!l.includes("-"))return null;const o=new Set;for(const d of Ks())d.openDate&&d.openDate.includes("-")&&o.add(d.openDate);for(const d of ln())d.txDate&&d.txDate.includes("-")&&o.add(d.txDate);for(const d of Ln())d.reportDate&&d.reportDate.includes("-")&&o.add(d.reportDate);const u=Array.from(o).filter(d=>d<l).sort(),c=u.length?u[u.length-1]:null;return c?Oe(c)?null:c:null}function qb(l,o="Cashier",u,c){if(!(c!=null&&c.force)){const D=KR(l);if(D)throw new Error(`⛔ আগের কর্মদিবস ${D} Day Close করা হয়নি — আগে সেটি Close করুন (⚙️ Day Admin থেকেও করা যায়), তারপর ${l} Open হবে।`)}const d=_n(l,{skipManualOpeningFor:l}),f=Math.round(Number(d.prevCash)||0),A=Math.round(Number(d.prevBank)||0),b=u&&u.cash!==void 0&&u.cash!==null&&u.cash!=="",h=u&&u.bank!==void 0&&u.bank!==null&&u.bank!=="",L=b?Math.round(Number(u.cash)||0):f,y=h?Math.round(Number(u.bank)||0):A,g=!!u&&(L!==f||y!==A),H={openDate:l,prevCloseDate:d.prevDate||null,openingCash:g?L:f,openingBank:g?y:A,openedAt:new Date().toISOString(),openedBy:o,...g?{manualOpening:!0,systemOpeningCash:f,systemOpeningBank:A,openingNote:String((u==null?void 0:u.note)||"").trim()}:{}};return Yb(H)}function ln(){try{const l=localStorage.getItem(oc);return l?JSON.parse(l):[]}catch{return[]}}function Qb(l){if(Oe(l.txDate))throw new Error(`⚠️ এই তারিখের (${l.txDate}) দিন সমাপ্ত (Day Closed) রয়েছে।`);if(!Gt(l.txDate))throw new Error(`⚠️ এই তারিখের (${l.txDate}) কর্মদিবস শুরু (Day Open) করা হয়নি। প্রথমে দিনটি Day Open করুন।`);const o=Rt(l.txDate);if(o.blocked)throw new Error(o.reason||"দুটি কর্মদিবসের মধ্যবর্তী বন্ধের দিনে কোনো এন্ট্রি করা যাবে না।");const u=ln(),c={...l,id:l.id||Date.now()},d=[c,...u.filter(f=>f.id!==c.id)];return localStorage.setItem(oc,JSON.stringify(d)),window.dispatchEvent(new Event("tx-changed")),rt({type:"tx",payload:c}),c}function $b(l){const o=ln(),u=o.findIndex(c=>c.id===l.id);return u!==-1?o[u]=l:o.unshift(l),localStorage.setItem(oc,JSON.stringify(o)),window.dispatchEvent(new Event("tx-changed")),rt({type:"tx",payload:l}),l}function Wb(l){const o=String(l),u=ln().filter(c=>String(c.id)!==o);localStorage.setItem(oc,JSON.stringify(u)),window.dispatchEvent(new Event("tx-changed")),rt({type:"tx_del",payload:l}),Bb(l).catch(console.error)}function Ln(l){try{const o=localStorage.getItem(lo),u=o?JSON.parse(o):[];return l?u.filter(c=>c.reportDate===l):u}catch{return[]}}function PR(l){if(Oe(l.reportDate))throw new Error(`⚠️ এই তারিখের (${l.reportDate}) দিন সমাপ্ত (Day Closed) রয়েছে।`);if(!Gt(l.reportDate))throw new Error(`⚠️ এই তারিখের (${l.reportDate}) কর্মদিবস শুরু (Day Open) করা হয়নি। প্রথমে দিনটি Day Open করুন।`);const o=Rt(l.reportDate);if(o.blocked)throw new Error(o.reason||"দুটি কর্মদিবসের মধ্যবর্তী বন্ধের দিনে কোনো এন্ট্রি করা যাবে না।");const u=Ln();if(!l.id){const f=String(l.staffName||"").toLowerCase().trim(),A=u.filter(b=>b.reportDate===l.reportDate&&String(b.staffName||"").toLowerCase().trim()===f);if(A.length>0){const b=A[0],h=D=>Math.round((A.reduce((T,Z)=>T+(Number(Z[D])||0),0)+(Number(l[D])||0))*100)/100,L={...b,loan:String(h("loan")),rebate:String(h("rebate")),savings:String(h("savings")),dps:String(h("dps")),admission:String(h("admission")),passbook:String(h("passbook")),savingsAdjust:String(h("savingsAdjust")),nogodReturn:String(h("nogodReturn")),createdAt:new Date().toISOString()},y=A.slice(1).map(D=>D.id),g=new Set(y.map(D=>String(D))),H=u.map(D=>String(D.id)===String(L.id)?L:D).filter(D=>!g.has(String(D.id)));return localStorage.setItem(lo,JSON.stringify(H)),window.dispatchEvent(new Event("tx-changed")),rt({type:"sr",payload:L}),y.forEach(D=>{rt({type:"sr_del",payload:D}),wm(D).catch(console.error)}),L}}const c={...l,id:l.id||Date.now(),createdAt:new Date().toISOString()},d=[c,...u.filter(f=>f.id!==c.id)];return localStorage.setItem(lo,JSON.stringify(d)),window.dispatchEvent(new Event("tx-changed")),rt({type:"sr",payload:c}),c}function _R(l){const o=Ln(),u=o.findIndex(c=>c.id===l.id);return u!==-1?o[u]=l:o.unshift(l),localStorage.setItem(lo,JSON.stringify(o)),window.dispatchEvent(new Event("tx-changed")),rt({type:"sr",payload:l}),l}function ZR(l){const o=String(l),u=Ln().filter(c=>String(c.id)!==o);localStorage.setItem(lo,JSON.stringify(u)),window.dispatchEvent(new Event("tx-changed")),rt({type:"sr_del",payload:l}),wm(l).catch(console.error)}const Gm="gobra_staff_names";function zR(){try{const l=localStorage.getItem(Gm);if(l==null)return null;const o=JSON.parse(l||"[]");return Array.isArray(o)?o.filter(u=>u&&String(u.name||"").trim()).map((u,c)=>({id:Number(u.id)||c+1,name:String(u.name).trim()})):[]}catch{return[]}}function as(){const l=zR();if(l!=null)return l;const o=sr()?["Sakib","Mintu","Alamgir","Monir"].map((u,c)=>({id:c+1,name:u})):[];try{localStorage.setItem(Gm,JSON.stringify(o))}catch{}return o}function Km(l){try{localStorage.setItem(Gm,JSON.stringify(l))}catch{}}function FR(l,o){const u=as(),c=u.findIndex(A=>A.id===l),d=c+o;if(c<0||d<0||d>=u.length)return;const f=u[c];u[c]=u[d],u[d]=f,Km(u)}function JR(l){const o=String(l||"").trim();if(!o)return null;const u=as();if(u.some(d=>d.name.toLowerCase()===o.toLowerCase()))return null;const c={id:u.reduce((d,f)=>Math.max(d,f.id),0)+1,name:o};return Km([...u,c]),c}function XR(l){Km(as().filter(o=>o.id!==l))}function xa(l){try{const o=localStorage.getItem(Ma);let u=o?JSON.parse(o):[];if(u.length===0){let d=1;const f=[];for(const[A,b]of Object.entries(ph()))for(const h of b)f.push({id:d++,type:A,name:h});localStorage.setItem(Ma,JSON.stringify(f)),u=f}const c=u.filter(d=>d.type===l);return c.some(d=>d.sortOrder!=null)&&c.sort((d,f)=>(d.sortOrder??9e9)-(f.sortOrder??9e9)),c}catch{return(ph()[l]||[]).map((o,u)=>({id:u+1,type:l,name:o}))}}function xm(l,o){const u=localStorage.getItem(Ma),c=u?JSON.parse(u):[],d=o.trim(),f=c.filter(b=>b.type===l).reduce((b,h)=>Math.max(b,h.sortOrder??0),0),A={id:Date.now(),type:l,name:d,sortOrder:f+1};return c.push(A),localStorage.setItem(Ma,JSON.stringify(c)),rt({type:"cat",payload:A}),window.dispatchEvent(new CustomEvent("categories-changed",{detail:{action:"add",type:l,name:d}})),A}function ep(l,o){const u=localStorage.getItem(Ma),c=u?JSON.parse(u):[],d=c.find(f=>f.id===l);d&&(d.name=o.trim(),localStorage.setItem(Ma,JSON.stringify(c)),rt({type:"cat",payload:d}),window.dispatchEvent(new CustomEvent("categories-changed",{detail:{action:"update",id:l,name:d.name}})))}function hm(l){const o=localStorage.getItem(Ma),c=(o?JSON.parse(o):[]).filter(d=>d.id!==l);localStorage.setItem(Ma,JSON.stringify(c)),rt({type:"cat_del",payload:l}),window.dispatchEvent(new CustomEvent("categories-changed",{detail:{action:"delete",id:l}}))}function tp(l,o,u){const c=xa(l),d=c.findIndex(L=>L.id===o),f=d+u;if(d<0||f<0||f>=c.length)return;const A=c[d];c[d]=c[f],c[f]=A;const b=localStorage.getItem(Ma),h=b?JSON.parse(b):[];c.forEach((L,y)=>{const g=h.find(H=>H.id===L.id);g&&(g.sortOrder=y+1)}),localStorage.setItem(Ma,JSON.stringify(h)),rt({type:"cat_order",payload:{type:l}}),window.dispatchEvent(new CustomEvent("categories-changed",{detail:{action:"reorder",type:l}}))}const $d=[{id:1,category:"jagoron",subCategory:"1 year",ratePer100:"13.47"},{id:2,category:"jagoron",subCategory:"1.5 year",ratePer100:"20.21"},{id:3,category:"jagoron",subCategory:"2 year",ratePer100:"26.94"},{id:4,category:"agrossor",subCategory:"1 year",ratePer100:"13.47"},{id:5,category:"agrossor",subCategory:"1.5 year",ratePer100:"20.21"},{id:6,category:"agrossor",subCategory:"2 year",ratePer100:"26.94"},{id:7,category:"buniyed",subCategory:"1 year",ratePer100:"13.47"},{id:8,category:"sufolon",subCategory:"1 year",ratePer100:"13.47"},{id:9,category:"mfce",subCategory:"1 year",ratePer100:"13.47"}];function Pm(){try{const l=localStorage.getItem(Wi);return l?JSON.parse(l):(localStorage.setItem(Wi,JSON.stringify($d)),$d)}catch{return $d}}function Uh(l){const o=Pm(),u={...l,id:l.id||Date.now()},c=[u,...o.filter(d=>d.id!==u.id)];localStorage.setItem(Wi,JSON.stringify(c)),rt({type:"sc",payload:u})}function VR(l){const o=Pm().filter(u=>u.id!==l);localStorage.setItem(Wi,JSON.stringify(o)),rt({type:"sc_del",payload:l})}function oo(){try{const l=localStorage.getItem(ro);return l?JSON.parse(l):(localStorage.setItem(ro,JSON.stringify(no)),no)}catch{return no}}function il(l){const o=oo(),u={...l,id:l.id||Date.now()},c=[u,...o.filter(d=>d.id!==u.id)];localStorage.setItem(ro,JSON.stringify(c)),rt({type:"subcat",payload:u})}function YR(l){const o=oo().filter(u=>u.id!==l);localStorage.setItem(ro,JSON.stringify(o)),rt({type:"subcat_del",payload:l})}function qR(){localStorage.setItem(ro,JSON.stringify(no)),no.forEach(l=>{rt({type:"subcat",payload:l})})}const Dh="kallyan_rule_version_v2";function Wd(){try{if(localStorage.getItem(Dh)!=="v2")return localStorage.setItem(Dh,"v2"),localStorage.setItem(mm,JSON.stringify(sn)),sn;const o=localStorage.getItem(mm);if(!o)return sn;const u=JSON.parse(o);return{percent:typeof u.percent=="number"?u.percent:sn.percent,fixed:typeof u.fixed=="number"?u.fixed:sn.fixed,categoryOverrides:{...sn.categoryOverrides||{},...u.categoryOverrides||{}}}}catch{return sn}}function Th(l){try{localStorage.setItem(mm,JSON.stringify(l)),window.dispatchEvent(new CustomEvent("kallyan-rule-changed",{detail:l})),rt({type:"kallyan",payload:l})}catch{}}function QR(){try{return localStorage.getItem(Jb)||""}catch{return""}}function em(l){const o=l.trim();try{localStorage.setItem(Jb,o),window.dispatchEvent(new CustomEvent("google-sheet-url-changed",{detail:o})),rt({type:"setting",payload:{key:"google_sheet_url",value:o}})}catch{}}function _n(l,o){const u=ln(),c=Ln(),d=["monir","sakib","mintu","alamgir"],f=xa("receive"),A=new Set(d);f.forEach(w=>{const p=w.name.toLowerCase().trim();["bank withdraw","fund receive","others income"].includes(p)||A.add(p)}),c.forEach(w=>{w.staffName&&A.add(w.staffName.toLowerCase().trim())});const b=Array.from(A),h=new Set;u.forEach(w=>h.add(w.txDate)),c.forEach(w=>h.add(w.reportDate)),h.add(l);const L=dl(),y=new Map;Ks().forEach(w=>{w&&w.openDate&&y.set(w.openDate,w)}),y.forEach((w,p)=>{w&&w.manualOpening&&h.add(p)});const g=Array.from(h).sort();let H=0,D=0,T=0,Z=0,O="",G="",ce=0,K=0,ee=0,C=0,V=0,re=0,B=0,se=0,ie=0;const te=Object.fromEntries(b.map(w=>[w,0]));for(const w of g){const p=(o==null?void 0:o.skipManualOpeningFor)===w?void 0:y.get(w);p&&p.manualOpening&&(H=Number(p.openingCash)||0,D=Number(p.openingBank)||0),w===l&&(T=H,Z=D,O=G);const N=u.filter(ae=>ae.txDate===w),P=c.filter(ae=>ae.reportDate===w);w<l&&(N.length>0||P.length>0||p&&p.manualOpening)&&(G=w);const W=N.filter(ae=>ae.type==="receive"),F=N.filter(ae=>ae.type==="payment"),U=W.filter(ae=>ae.category.toLowerCase().includes("fund receive")).reduce((ae,ye)=>ae+(Number(ye.amount)||0),0),j=W.filter(ae=>ae.category.toLowerCase().includes("bank withdraw")).reduce((ae,ye)=>ae+(Number(ye.amount)||0),0),_=W.filter(ae=>!ae.category.toLowerCase().includes("fund receive")).reduce((ae,ye)=>ae+(Number(ye.amount)||0),0),x=F.reduce((ae,ye)=>ae+(Number(ye.amount)||0),0),Q=F.filter(ae=>ae.category.toLowerCase().includes("bank deposit")||ae.category.toLowerCase().includes("bank deposite")).reduce((ae,ye)=>ae+(Number(ye.amount)||0),0);P.reduce((ae,ye)=>ae+Number(ye.loan||0)+Number(ye.savings||0)+Number(ye.dps||0)+Number(ye.passbook||0)+Number(ye.admission||0),0);const Re=F.filter(ae=>{const ye=ae.category.toLowerCase().trim();return ye.includes("fund payment")||ye.includes("fund transfer")||ye.includes("fund")&&!ye.includes("receive")?!1:["jagoron","agrossor","buni","sufolon","mfce"].some(ze=>ye.includes(ze))||!!(ae.subCategory&&ae.subCategory.trim().length>0)});let ge=0,Ne=0;for(const ae of Re){const ye=Number(ae.amount)||0;ae.category.toLowerCase().trim().includes("buni")?ge+=ye:Ne+=ye}const He=Math.round(Ne*.01+ge*.005),pe=Re.length*5;W.filter(ae=>{const ye=ae.category.toLowerCase().trim();return!(ye.includes("bank withdraw")||ye.includes("fund receive")||ye.includes("welfare")||ye.includes("kallayan")||ye.includes("loan form")||b.some(ze=>ye.includes(ze)))}).reduce((ae,ye)=>ae+(Number(ye.amount)||0),0),Re.reduce((ae,ye)=>ae+(Number(ye.amount)||0),0),P.reduce((ae,ye)=>ae+Number(ye.savingsAdjust||0)+Number(ye.nogodReturn||0),0),F.filter(ae=>!["jagoron","agrossor","buni","sufolon","mfce","bank deposit","bank deposite"].some(ye=>ae.category.toLowerCase().includes(ye))).reduce((ae,ye)=>ae+(Number(ye.amount)||0),0);const he=L.find(ae=>ae.closeDate===w&&ae.status==="closed");if(he)H=Number(he.closingCash)||0,D=Number(he.closingBank)||0;else{const ae=Math.round(H+_+He+pe-x),ye=Math.round(D-j+Q+U);H=ae,D=ye}w===l&&(ee=_,C=x,V=Q,re=j,B=U,se=He,ie=pe,N.forEach(ae=>{if(ae.type==="receive"){const ye=ae.category.toLowerCase().trim();for(const ze of b)if(ye===ze||ye.includes(ze)||ze.includes(ye)){te[ze]=(te[ze]||0)+(Number(ae.amount)||0);break}}}))}ce=Math.round(T+ee+se+ie-C),K=Math.round(Z+V-re+B);const ue=Math.round(T+ee),be=Math.round(C);let E=0;for(const w of b)E+=te[w]||0;return{date:l,cash:ce,bank:K,prevCash:T,prevBank:Z,prevDate:O,todayCashInHand:ce,todayBankBalance:K,receive:ue,expense:be,todayReceiveOnly:ee,todayPayment:be,todayKallayan:se,todayLoanForm:ie,totalReceiveWithOpening:ue,todayBankDeposit:V,todayBankWithdraw:re,totalStaffReceive:E,persons:te}}function $R(l){const o=_n(l),u=ln(),c=Ln(l),d=o.prevCash,f=o.prevBank,A=u.filter(p=>p.txDate===l),b=A.filter(p=>p.type==="receive"),h=A.filter(p=>p.type==="payment"),L=c.reduce((p,N)=>p+(Number(N.loan)||0)+(Number(N.savings)||0)+(Number(N.dps)||0)+(Number(N.passbook)||0)+(Number(N.admission)||0),0),y=as().map(p=>p.name.toLowerCase().trim()),g=b.filter(p=>y.some(N=>p.category.toLowerCase().includes(N))).reduce((p,N)=>p+(Number(N.amount)||0),0),H=L>0?L:g,D=d,T=b.filter(p=>p.category.toLowerCase().includes("bank withdraw")).reduce((p,N)=>p+(Number(N.amount)||0),0),Z=xa("disburse").map(p=>p.name.toLowerCase().trim()),O=h.filter(p=>{const N=p.category.toLowerCase().trim();return N.includes("fund payment")||N.includes("fund transfer")||N.includes("fund")&&!N.includes("receive")?!1:Z.includes(N)||["jagoron","agrossor","buni","sufolon","mfce"].some(P=>N.includes(P))||!!(p.subCategory&&p.subCategory.trim().length>0)});let G=0,ce=0;for(const p of O){const N=Number(p.amount)||0;p.category.toLowerCase().trim().includes("buni")?G+=N:ce+=N}const K=Math.round(ce*.01+G*.005),ee=O.length*5,C=b.filter(p=>{const N=p.category.toLowerCase().trim();return!(N.includes("bank withdraw")||N.includes("fund receive")||N.includes("welfare")||N.includes("kallayan")||N.includes("loan form")||y.some(P=>N.includes(P)))}).reduce((p,N)=>p+(Number(N.amount)||0),0),V=O.reduce((p,N)=>p+(Number(N.amount)||0),0),re=h.filter(p=>p.category.toLowerCase().includes("bank deposit")||p.category.toLowerCase().includes("bank deposite")).reduce((p,N)=>p+(Number(N.amount)||0),0),B=c.reduce((p,N)=>p+(Number(N.savingsAdjust)||0)+(Number(N.nogodReturn)||0),0),se=h.filter(p=>{const N=p.category.toLowerCase().trim();return N.includes("fund payment")||N.includes("fund transfer")||N.includes("fund")&&!N.includes("receive")}).reduce((p,N)=>p+(Number(N.amount)||0),0),ie=h.filter(p=>{const N=p.category.toLowerCase().trim();return!(O.some(P=>P.id===p.id)||["jagoron","agrossor","buni","sufolon","mfce","bank deposit","bank deposite"].some(P=>N.includes(P))||N.includes("fund payment")||N.includes("fund transfer")||N.includes("fund")&&!N.includes("receive"))}).reduce((p,N)=>p+(Number(N.amount)||0),0),te=H+D+T+K+ee+C,ue=V+re+B+se+ie,be=Math.round(te-ue),E=b.filter(p=>p.category.toLowerCase().includes("fund receive")).reduce((p,N)=>p+(Number(N.amount)||0),0),w=Math.round(f-T+re+E);return{reportCashInHand:be,reportBankBalance:w}}function np(l){const o=_n(l);return{cashInHand:o.cash,allReceiveWithoutFund:o.todayReceiveOnly??0,kallyan:o.todayKallayan??0,loanForm:o.todayLoanForm??0,allPayment:o.todayPayment??0,prevCash:o.prevCash}}function Rt(l,o){if(!l||!l.includes("-"))return{blocked:!1};const u=ln(),c=Ln(),d=dl(),f=new Set;if(d.forEach(g=>{g.closeDate&&g.status==="closed"&&f.add(g.closeDate)}),u.forEach(g=>{g.txDate&&g.txDate.includes("-")&&f.add(g.txDate)}),c.forEach(g=>{g.reportDate&&g.reportDate.includes("-")&&f.add(g.reportDate)}),o&&o.includes("-")&&f.add(o),d.some(g=>g.closeDate===l&&g.status==="closed"))return{blocked:!0,reason:"এই তারিখের দিন সমাপ্ত (Day Closed) রয়েছে। হিসাব লক ও সুরক্ষিত আছে।"};const b=Array.from(f).filter(g=>g<l).sort(),h=b.length>0?b[b.length-1]:void 0,L=Array.from(f).filter(g=>g>l).sort(),y=L.length>0?L[0]:void 0;return h&&y?{blocked:!0,prevWorkingDate:h,nextWorkingDate:y,reason:`এই তারিখটি (${l}) দুটি কর্মদিবস [${h} ও ${y}]-এর মধ্যবর্তী বন্ধের দিন। এই তারিখে কোনো লেনদেন এন্ট্রি করা সম্পূর্ণভাবে ব্লক ও নিষিদ্ধ।`}:{blocked:!1}}function _m(){const l=ln(),o=Ln(),u=dl(),c=Ks(),d=new Set;l.forEach(b=>{b.txDate&&b.txDate.includes("-")&&d.add(b.txDate)}),o.forEach(b=>{b.reportDate&&b.reportDate.includes("-")&&d.add(b.reportDate)}),u.forEach(b=>{b.closeDate&&b.closeDate.includes("-")&&d.add(b.closeDate)}),c.forEach(b=>{b.openDate&&b.openDate.includes("-")&&d.add(b.openDate)});const f=Array.from(d).sort().reverse(),A=["রবিবার","সোমবার","মঙ্গলবার","বুধবার","বৃহস্পতিবার","শুক্রবার","শনিবার"];return f.map(b=>{const h=l.filter(C=>C.txDate===b),L=o.filter(C=>C.reportDate===b),y=u.find(C=>C.closeDate===b&&C.status==="closed"),g=Gt(b),H=h.filter(C=>C.type==="receive"),D=h.filter(C=>C.type==="payment"),T=H.reduce((C,V)=>C+(Number(V.amount)||0),0),Z=D.reduce((C,V)=>C+(Number(V.amount)||0),0),[O,G,ce]=b.split("-").map(Number),K=new Date(O,G-1,ce),ee=isNaN(K.getDay())?"":A[K.getDay()];return{date:b,dayName:ee,txCount:h.length,receiveCount:H.length,paymentCount:D.length,receiveTotal:T,paymentTotal:Z,srCount:L.length,isOpen:g,isClosed:!!y,closingCash:y?Number(y.closingCash):void 0,closingBank:y?Number(y.closingBank):void 0}})}const bm=l=>String(l).padStart(2,"0"),ec=(l,o,u)=>`${l}-${bm(o+1)}-${bm(u)}`,fa=()=>{const l=new Date;return ec(l.getFullYear(),l.getMonth(),l.getDate())},ap=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],WR=["Su","Mo","Tu","We","Th","Fr","Sa"];function Fe(l){if(!l||!l.includes("-"))return"";const[o,u,c]=l.split("-").map(Number);return!o||!u||!c||u<1||u>12?l:`${bm(c)} ${ap[u-1]} ${o}`}const Gh=l=>{if(!l||!l.includes("-"))return"";const[o,u,c]=l.split("-");return!o||!u||!c?"":`${c}-${u}-${o.slice(2)}`},e5=l=>{const o=String(l).replace(/\D/g,"").slice(0,6);return o.length<=2?o:o.length<=4?`${o.slice(0,2)}-${o.slice(2)}`:`${o.slice(0,2)}-${o.slice(2,4)}-${o.slice(4)}`},t5=l=>{const o=String(l).replace(/\D/g,"");if(o.length!==6)return null;const u=Number(o.slice(0,2)),c=Number(o.slice(2,4)),d=Number(o.slice(4,6));if(c<1||c>12||u<1)return null;const f=d>50?1900+d:2e3+d;return u>new Date(f,c,0).getDate()?null:ec(f,c-1,u)};function bn({value:l,onChange:o,className:u="",dropUp:c=!1,onOpenTracker:d,manualEntry:f=!1}){const[A,b]=R.useState(!1),[h,L]=R.useState(null),[y,g]=R.useState({}),[H,D]=R.useState({}),T=l&&l.includes("-")?l:fa(),[Z,O]=R.useState(Number(T.slice(0,4))||new Date().getFullYear()),[G,ce]=R.useState((Number(T.slice(5,7))||new Date().getMonth()+1)-1),K=R.useRef(null);R.useEffect(()=>{if(A)try{const te=_m(),ue={};te.forEach(E=>{E.isClosed?ue[E.date]="closed":(E.isOpen||E.txCount>0||E.srCount>0)&&(ue[E.date]="unclosed")});const be=new Date(Z,G+1,0).getDate();for(let E=1;E<=be;E++){const w=ec(Z,G,E);ue[w]||Rt(w).blocked&&(ue[w]="blocked")}D(ue)}catch{D({})}},[A,Z,G]),R.useEffect(()=>{if(!A||!K.current)return;const te=()=>{if(!K.current)return;const ue=K.current.getBoundingClientRect(),be=window.innerWidth,E=Math.min(288,be-16);if(c)if(be<640){let w=ue.left;w+E>be-8&&(w=be-8-E),w<8&&(w=8);const p=w-ue.left;g({left:`${p}px`,right:"auto",width:`${E}px`})}else g({right:0,left:"auto",width:"18rem"});else if(ue.left+E>be-8){const w=be-8-(ue.left+E);g({left:`${w}px`,width:`${E}px`})}else g({left:0,width:`${E}px`})};return te(),window.addEventListener("resize",te),()=>window.removeEventListener("resize",te)},[A,c]),R.useEffect(()=>{if(A&&l&&l.includes("-")){const te=l.split("-").map(Number);te[0]&&O(te[0]),te[1]&&ce(te[1]-1)}},[A,l]),R.useEffect(()=>{if(!A)return;const te=ue=>{K.current&&!K.current.contains(ue.target)&&b(!1)};return document.addEventListener("mousedown",te),document.addEventListener("touchstart",te),()=>{document.removeEventListener("mousedown",te),document.removeEventListener("touchstart",te)}},[A]);const ee=new Date(Z,G,1).getDay(),C=new Date(Z,G+1,0).getDate(),V=[...Array(ee).fill(null),...Array.from({length:C},(te,ue)=>ue+1)];for(;V.length%7;)V.push(null);const re=()=>{G===0?(ce(11),O(Z-1)):ce(G-1)},B=()=>{G===11?(ce(0),O(Z+1)):ce(G+1)},se=te=>{o(te),b(!1)},ie=fa();return n.jsxs("div",{ref:K,className:"relative",children:[f?n.jsxs("div",{className:`flex w-full items-center gap-0.5 rounded border border-slate-300 ${u.includes("bg-")?"":"bg-white"} focus-within:border-blue-500 ${u}`,children:[n.jsx("input",{value:h!==null?h:Gh(l),placeholder:"DD-MM-YY",inputMode:"numeric",autoComplete:"off",onFocus:te=>{L(Gh(l)),te.target.select()},onChange:te=>{const ue=te.target.value.replace(/\D/g,"").slice(0,6);if(L(e5(ue)),!ue){o("");return}const be=t5(ue);be&&o(be)},onBlur:()=>L(null),onKeyDown:te=>{te.key==="Enter"&&te.target.blur()},className:"w-full min-w-0 flex-1 bg-transparent px-2 py-1 font-mono font-semibold text-slate-800 focus:outline-none"}),n.jsx("button",{type:"button",onClick:()=>b(te=>!te),title:"Pick from calendar",className:"shrink-0 cursor-pointer px-2 py-1.5 text-slate-400 hover:text-slate-600",children:"▼"})]}):n.jsxs("button",{type:"button",onClick:()=>b(te=>!te),className:`flex w-full items-center justify-between rounded border border-slate-300 ${u.includes("bg-")?"":"bg-white"} px-2.5 py-1.5 text-left font-semibold text-slate-800 focus:border-blue-500 focus:outline-none ${u}`,children:[n.jsx("span",{className:"truncate",children:Fe(l)||"Select Date"}),n.jsx("span",{className:"ml-1 text-slate-400",children:"▼"})]}),A&&n.jsxs("div",{style:y,className:`absolute z-50 rounded-xl border border-slate-300 bg-white p-2.5 sm:p-3 shadow-2xl text-slate-900 ${c?"bottom-full mb-2":"mt-1"}`,children:[n.jsxs("div",{className:"mb-2 flex items-center justify-between",children:[n.jsx("button",{type:"button",onClick:re,className:"h-8 w-8 rounded-full text-lg hover:bg-slate-100 cursor-pointer",children:"‹"}),n.jsxs("div",{className:"flex items-center gap-1 font-semibold",children:[n.jsx("select",{value:G,onChange:te=>ce(Number(te.target.value)),className:"rounded border border-slate-300 px-1 py-0.5 text-xs font-bold",children:ap.map((te,ue)=>n.jsx("option",{value:ue,children:te},te))}),n.jsx("select",{value:Z,onChange:te=>O(Number(te.target.value)),className:"rounded border border-slate-300 px-1 py-0.5 text-xs font-bold",children:Array.from({length:11},(te,ue)=>Z-5+ue).map(te=>n.jsx("option",{value:te,children:te},te))})]}),n.jsx("button",{type:"button",onClick:B,className:"h-8 w-8 rounded-full text-lg hover:bg-slate-100 cursor-pointer",children:"›"})]}),n.jsx("div",{className:"grid grid-cols-7 text-center text-xs font-semibold text-slate-500",children:WR.map((te,ue)=>n.jsx("div",{className:`py-1 ${ue===0?"text-rose-600 font-bold":""}`,children:te},te))}),n.jsx("div",{className:"grid grid-cols-7 gap-0.5 text-center text-sm",children:V.map((te,ue)=>{if(!te)return n.jsx("div",{},ue);const be=ec(Z,G,te),E=be===l,w=be===ie,p=ue%7===0,N=H[be];return n.jsxs("button",{type:"button",onClick:()=>se(be),className:`h-9.5 rounded-lg transition relative flex flex-col items-center justify-center cursor-pointer ${E?"bg-blue-600 font-bold text-white shadow-sm":w?"border border-blue-500 font-semibold text-blue-700 hover:bg-blue-50":p?"hover:bg-rose-50 text-rose-600 font-bold":"hover:bg-slate-100 text-slate-800"}`,children:[n.jsx("span",{className:"leading-none text-xs sm:text-sm",children:te}),N&&n.jsx("span",{className:`h-1.5 w-1.5 rounded-full mt-0.5 ${N==="closed"?E?"bg-emerald-300":"bg-emerald-500":N==="unclosed"?E?"bg-amber-300 animate-pulse":"bg-amber-500 animate-pulse":E?"bg-rose-300":"bg-rose-500"}`,title:N==="closed"?"দিন সমাপ্ত (Day Closed)":N==="unclosed"?"অসমাপ্ত লেনদেন (Unclosed)":"মধ্যবর্তী বন্ধের দিন (এন্ট্রি ব্লকড)"})]},ue)})}),n.jsxs("div",{className:"mt-2 flex items-center gap-1.5",children:[n.jsx("button",{type:"button",onClick:()=>se(ie),className:"flex-1 rounded-lg bg-slate-100 py-1.5 text-xs font-semibold hover:bg-slate-200 cursor-pointer text-slate-700",children:"Today"}),n.jsx("button",{type:"button",onClick:()=>{b(!1),d?d():window.dispatchEvent(new CustomEvent("open-date-tracker"))},className:"rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 px-2 py-1.5 text-xs font-bold transition cursor-pointer",title:"সকল তারিখের অডিট ট্র্যাকার",children:"📋 ট্র্যাকার"})]}),n.jsxs("div",{className:"mt-2 pt-1.5 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-500 font-medium px-1",children:[n.jsxs("span",{className:"flex items-center gap-1",children:[n.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-emerald-500"}),"সমাপ্ত"]}),n.jsxs("span",{className:"flex items-center gap-1",children:[n.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-amber-500"}),"অসমাপ্ত"]}),n.jsxs("span",{className:"flex items-center gap-1",children:[n.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-rose-500"}),"ব্লকড"]}),n.jsxs("span",{className:"flex items-center gap-1",children:[n.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-blue-500"}),"আজ"]})]})]})]})}function Zm(){const[l,o]=R.useState(()=>{try{const c=localStorage.getItem(hh);return c==="manual"||c==="name-asc"||c==="name-desc"?c:"manual"}catch{return"manual"}});return[l,c=>{o(c);try{localStorage.setItem(hh,c)}catch{}}]}const n5=[{v:"manual",label:"🖐️ ম্যানুয়াল",hint:"ফিক্সড/আপনার ক্রম"},{v:"name-asc",label:"A→Z",hint:"নাম আগে→পরে"},{v:"name-desc",label:"Z→A",hint:"নাম পরে→আগে"}];function sp({mode:l,onChange:o,compact:u=!1}){return n.jsx("div",{className:"inline-flex rounded-md border border-indigo-300 bg-white overflow-hidden shadow-xs",title:"স্টাফ সাজানোর ক্রম",children:n5.map(c=>n.jsx("button",{title:c.hint,onClick:()=>o(c.v),className:`${u?"px-1 py-[1px] text-[8.5px]":"px-1.5 py-0.5 text-[10px]"} font-bold transition-colors ${l===c.v?"bg-indigo-600 text-white":"bg-white text-indigo-700 hover:bg-indigo-50"}`,children:u?c.label.replace(" ম্যানুয়াল",""):c.label},c.v))})}function a5({selectedDate:l}){const[o,u]=R.useState(null),[c,d]=R.useState(!1),[f,A]=R.useState(!1),b=()=>{const T=_n(l);u(T),d(Oe(l)),A(Gt(l))};R.useEffect(()=>{b();const T=()=>b(),Z=()=>b(),O=()=>b();return window.addEventListener("tx-changed",T),window.addEventListener("day-close-changed",Z),window.addEventListener("day-open-changed",O),()=>{window.removeEventListener("tx-changed",T),window.removeEventListener("day-close-changed",Z),window.removeEventListener("day-open-changed",O)}},[l]);const h=({label:T,bengaliLabel:Z,value:O,cls:G,subText:ce})=>n.jsxs("div",{className:`rounded-xl px-2.5 py-1.5 text-white shadow-xs flex items-center justify-between gap-2 ${G}`,children:[n.jsxs("div",{className:"min-w-0 flex-1",children:[n.jsxs("div",{className:"flex items-center gap-1 text-[11px] font-bold opacity-95 truncate",children:[n.jsx("span",{className:"truncate",children:T}),Z&&n.jsxs("span",{className:"text-[10px] opacity-80 hidden md:inline font-normal",children:["(",Z,")"]})]}),ce&&n.jsx("div",{className:"text-[9px] opacity-80 truncate",children:ce})]}),n.jsx("div",{className:"shrink-0 font-mono text-xs sm:text-sm font-black text-right",children:de(O)})]}),L=({name:T,value:Z})=>n.jsxs("div",{className:"rounded-lg bg-sky-600 px-2.5 py-1 text-white shadow-xs flex items-center justify-between gap-1.5",children:[n.jsx("span",{className:"text-[11px] font-bold truncate opacity-95",children:T}),n.jsx("span",{className:"font-mono text-xs font-black text-right",children:de(Z)})]}),[y]=Zm(),g=as().map(T=>T.name).sort((T,Z)=>jm(T,Z,y)),H=T=>{var Z;return((Z=o==null?void 0:o.persons)==null?void 0:Z[T.toLowerCase()])??0},D=g.reduce((T,Z)=>T+H(Z),0);return n.jsxs("div",{className:"mb-3 rounded-2xl bg-white p-2.5 sm:p-3 shadow-sm border border-slate-200",children:[n.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-5 gap-1.5 sm:gap-2",children:[n.jsxs("div",{className:"col-span-2 sm:col-span-1 flex items-center justify-between rounded-xl border border-slate-300 bg-slate-50 px-2.5 py-1.5",children:[n.jsxs("div",{className:"flex items-center gap-1.5",children:[n.jsx("span",{className:"text-[11px] font-bold text-slate-500",children:"Date"}),c?n.jsx("span",{className:"rounded bg-rose-100 px-1.5 py-0.5 text-[9px] font-black text-rose-700 border border-rose-300",children:"🔒 Closed"}):f?n.jsx("span",{className:"rounded bg-emerald-100 px-1.5 py-0.5 text-[9px] font-black text-emerald-800 border border-emerald-300",children:"☀️ Open"}):n.jsx("span",{className:"rounded bg-amber-100 px-1.5 py-0.5 text-[9px] font-black text-amber-800 border border-amber-300",children:"⏳ Not Opened"})]}),n.jsx("div",{className:"truncate font-mono text-xs font-black text-slate-900",children:Fe(l)||l})]}),n.jsx(h,{label:"Cash in Hand",value:(o==null?void 0:o.cash)??0,cls:"bg-emerald-600",subText:`Prev: ${de((o==null?void 0:o.prevCash)??0)}`}),n.jsx(h,{label:"Bank Balance",value:(o==null?void 0:o.bank)??0,cls:"bg-indigo-600",subText:`Prev: ${de((o==null?void 0:o.prevBank)??0)}`}),n.jsx(h,{label:"Total Receive",value:(o==null?void 0:o.receive)??0,cls:"bg-green-700",subText:`Today: ${de((o==null?void 0:o.todayReceiveOnly)??0)}`}),n.jsx(h,{label:"Total Payment",value:(o==null?void 0:o.expense)??0,cls:"bg-rose-600",subText:`Today: ${de((o==null?void 0:o.todayPayment)??0)}`})]}),n.jsxs("div",{className:"mt-2 pt-1.5 border-t border-slate-100",children:[n.jsxs("div",{className:"mb-1 flex items-center justify-between px-1",children:[n.jsx("div",{className:"text-[11px] font-bold text-slate-700 flex items-center gap-1.5",children:n.jsx("span",{children:"👥 Staff Wise"})}),n.jsxs("div",{className:"text-[11px] font-mono font-black text-sky-800 bg-sky-50 px-2 py-0.2 rounded border border-sky-200",children:["Total: ",de(D)]})]}),n.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-1.5",children:[g.map(T=>n.jsx(R.Fragment,{children:n.jsx(L,{name:T,value:H(T)})},T)),g.length===0&&n.jsx("div",{className:"col-span-2 text-[10px] font-semibold text-slate-400 px-1 py-1",children:"কর্মী নেই — Receive পেজের Category ⚙️ Manage-এ Staff Name যোগ করুন"})]})]})]})}function Kh({value:l,onChange:o,cats:u,onManageClick:c,disabled:d=!1}){const[f,A]=R.useState(!1),b=R.useRef(null),h=R.useRef(0),L=R.useRef(null),y=()=>{h.current=Date.now()},g=()=>Date.now()-h.current<600,H=()=>{const ee=document.activeElement;ee&&(ee.tagName==="INPUT"||ee.tagName==="TEXTAREA")&&ee.blur()};R.useEffect(()=>{if(!f)return;function ee(C){if(b.current&&!b.current.contains(C.target)){const V=C.target,re=!!V&&(V.tagName==="INPUT"||V.tagName==="TEXTAREA"||V.tagName==="SELECT");A(!1),re||H()}}return document.addEventListener("pointerdown",ee),()=>{document.removeEventListener("pointerdown",ee)}},[f]);const D=(l||"").trim().toLowerCase(),T=R.useMemo(()=>{const ee=new Set;return u.forEach(C=>{const V=typeof C=="string"?C:C.name;V&&V.trim()&&ee.add(V.trim().toLowerCase())}),Array.from(ee)},[u]),Z=T,O=ee=>{o(ee),A(!1),H()},G=ee=>{ee.button===0&&(ee.preventDefault(),L.current=ee.currentTarget,y())},ce=ee=>{ee.button!==0||d||L.current!==ee.currentTarget||(y(),A(C=>(C&&H(),!C)))},K=()=>{d||g()||A(ee=>!ee)};return n.jsxs("div",{className:"relative w-full",ref:b,children:[n.jsxs("button",{type:"button",disabled:d,"aria-haspopup":"listbox","aria-expanded":f,onPointerDown:G,onPointerUp:ce,onClick:K,onKeyDown:ee=>{ee.key==="Escape"&&f&&(ee.stopPropagation(),A(!1),H())},className:`w-full h-[42px] rounded-xl border px-3 py-2 text-left text-sm font-bold shadow-xs transition cursor-pointer flex items-center justify-between ${d?"bg-slate-100":"bg-orange-50"} ${f?"border-blue-600 ring-2 ring-blue-500/20":"border-slate-300 hover:border-orange-300 hover:bg-orange-100/60"} ${d?"opacity-50 cursor-not-allowed":""}`,children:[n.jsx("div",{className:"flex items-center gap-2 truncate",children:l?n.jsx("span",{className:"text-slate-900 font-bold truncate",children:ft(l)}):n.jsx("span",{className:"text-slate-400 font-medium",children:"-- Select Category --"})}),n.jsxs("div",{className:"flex items-center gap-1.5 shrink-0 ml-2",children:[l&&n.jsx("span",{onPointerDown:ee=>{ee.stopPropagation(),G(ee)},onPointerUp:ee=>{ee.stopPropagation(),!(ee.button!==0||L.current!==ee.currentTarget)&&(y(),o(""))},onClick:ee=>{ee.stopPropagation(),!g()&&o("")},className:"p-1 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-md cursor-pointer text-xs transition",title:"Clear Category",children:"✕"}),n.jsx("span",{className:`text-slate-400 text-xs transition-transform duration-200 ${f?"rotate-180":""}`,children:"▼"})]})]}),f&&n.jsxs("div",{role:"listbox",className:"absolute left-0 right-0 z-50 mt-1.5 rounded-2xl border border-slate-200 bg-white shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150 flex flex-col max-h-80",children:[n.jsxs("div",{className:"p-2.5 border-b border-slate-100 bg-slate-50 flex items-center justify-between gap-2 shrink-0",children:[n.jsx("span",{className:"pl-1 text-xs sm:text-sm font-bold text-slate-500",children:"📋 ক্যাটাগরি সিলেক্ট করুন"}),n.jsx("span",{className:"text-[10px] font-bold text-slate-400 bg-slate-200/70 px-1.5 py-0.5 rounded-md",children:T.length})]}),n.jsx("div",{className:"overflow-y-auto max-h-60 p-1.5 space-y-0.5",children:Z.length>0?Z.map(ee=>{const C=ee.toLowerCase()===D;return n.jsxs("button",{type:"button",role:"option","aria-selected":C,onPointerDown:G,onPointerUp:V=>{V.button!==0||L.current!==V.currentTarget||(y(),O(ee))},onClick:()=>{g()||O(ee)},className:`w-full text-left px-3 py-2 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer flex items-center justify-between ${C?"bg-blue-50 text-blue-900 border border-blue-200 shadow-2xs font-extrabold":"hover:bg-slate-100 text-slate-700 hover:text-slate-900"}`,children:[n.jsxs("div",{className:"flex items-center gap-2.5 truncate",children:[n.jsx("span",{className:`h-2 w-2 rounded-full shrink-0 ${C?"bg-blue-600 ring-2 ring-blue-300":"bg-slate-300"}`}),n.jsx("span",{className:"truncate",children:ft(ee)})]}),C&&n.jsx("span",{className:"text-blue-600 font-black text-sm pl-2",children:"✓"})]},ee)}):n.jsxs("div",{className:"py-8 text-center text-xs text-slate-400 font-semibold flex flex-col items-center gap-1",children:[n.jsx("span",{children:"🔍"}),n.jsx("span",{children:"No category found"})]})}),n.jsxs("div",{className:"p-2 border-t border-slate-100 bg-slate-50 flex items-center justify-between shrink-0 text-xs",children:[n.jsxs("span",{className:"text-[11px] text-slate-500 font-medium",children:["Total: ",Z.length," categories"]}),c&&n.jsxs("button",{type:"button",onPointerDown:G,onPointerUp:ee=>{ee.button!==0||L.current!==ee.currentTarget||(y(),A(!1),c())},onClick:()=>{g()||(A(!1),c())},className:"text-xs font-black text-blue-600 hover:text-blue-800 hover:underline cursor-pointer flex items-center gap-1",children:[n.jsx("span",{children:"⚙️"}),n.jsx("span",{children:"Manage Categories"})]})]})]})]})}function na({value:l,onChange:o,options:u,placeholder:c="-- Select --",disabled:d=!1,className:f="",noKeyboardOnMobile:A=!1}){const[b,h]=R.useState(!1),[L,y]=R.useState(""),g=R.useRef(null),H=R.useRef(!1),D=R.useMemo(()=>typeof window<"u"&&typeof window.matchMedia=="function"&&window.matchMedia("(pointer: coarse)").matches,[]),T=A&&D,Z=R.useMemo(()=>u.map(K=>typeof K=="string"?{value:K,label:K}:K),[u]),O=Z.find(K=>K.value===l);R.useEffect(()=>{const K=ee=>{g.current&&!g.current.contains(ee.target)&&h(!1)};return document.addEventListener("mousedown",K),document.addEventListener("touchstart",K),()=>{document.removeEventListener("mousedown",K),document.removeEventListener("touchstart",K)}},[]);const G=L.trim().toLowerCase(),ce=G?Z.filter(K=>(K.label||K.value).toLowerCase().includes(G)):Z;return n.jsxs("div",{className:"relative",ref:g,children:[n.jsx("input",{value:b?L:l?O?O.label||O.value:l:"",placeholder:c,disabled:d,onFocus:()=>{d||(H.current=!0,h(!0),y(""))},onClick:()=>{if(!d){if(H.current){H.current=!1;return}b?T&&h(!1):(h(!0),y(""))}},onChange:K=>{y(K.target.value),h(!0)},onKeyDown:K=>{K.key==="Escape"&&h(!1),K.key==="Enter"&&K.preventDefault()},className:f,autoComplete:"off",spellCheck:!1,readOnly:T,inputMode:T?"none":void 0}),b&&!d&&n.jsx("div",{className:"absolute left-0 right-0 top-full z-40 mt-1 max-h-56 overflow-auto rounded-xl border border-slate-300 bg-white shadow-2xl",children:ce.length===0?n.jsx("div",{className:"px-3 py-2 text-xs font-semibold text-slate-500",children:"কোনো মিল নেই"}):ce.map(K=>n.jsx("button",{type:"button",onMouseDown:ee=>ee.preventDefault(),onClick:()=>{o(K.value),h(!1),y("")},className:`block w-full cursor-pointer px-3 py-1.5 text-left text-sm font-semibold ${K.value===l?"bg-blue-100 text-blue-900":"text-slate-800 hover:bg-slate-100"}`,children:K.label||K.value},K.value))})]})}const zi=[1e3,500,200,100,50,20,10,5,2,1],Rn=zi.length+1;function Ph(){if(typeof window>"u")return!1;const l=navigator.userAgent||"",o=/Android|iPhone|iPad|iPod|Mobile|Windows Phone|Opera Mini/i.test(l),u="ontouchstart"in window||navigator.maxTouchPoints>0,c=window.innerWidth<768;return o||u&&c}function pm({open:l,onClose:o,targetAmount:u,date:c,onApplyAmount:d,hideSummary:f=!1,hideOtherRow:A=!1}){const b=A?Rn-1:Rn,[h,L]=R.useState(!1),[y,g]=R.useState(Array(Rn).fill("")),[H,D]=R.useState(Array(Rn).fill("")),[T,Z]=R.useState(Array(Rn).fill("")),[O,G]=R.useState({row:0,col:"qty"}),ce=R.useRef({});if(R.useEffect(()=>{if(l){const U=Ph();L(U),g(Array(Rn).fill("")),D(Array(Rn).fill("")),Z(Array(Rn).fill("")),G({row:0,col:"qty"}),U||setTimeout(()=>{var j;(j=ce.current["0-qty"])==null||j.focus()},60)}},[l]),!l)return null;const K=zi.reduce((U,j,_)=>{const x=parseInt(y[_]||"0",10)||0;return U+x*j},0),ee=A?0:Number(y[Rn-1])||0,C=K+ee,V=H.reduce((U,j)=>U+(Number(j)||0),0),re=T.reduce((U,j)=>U+(Number(j)||0),0),B=C+V-re,se=B-u,ie=d&&B!==0,te=(U,j)=>{g(_=>{const x=[..._];return x[U]=j,x})},ue=(U,j)=>{D(_=>{const x=[..._];return x[U]=j,x})},be=(U,j)=>{Z(_=>{const x=[..._];return x[U]=j,x})},E=()=>{g(Array(Rn).fill("")),D(Array(Rn).fill("")),Z(Array(Rn).fill("")),G({row:0,col:"qty"})},w=(U,j)=>{G({row:U,col:j});const _=`${U}-${j}`,x=ce.current[_];x&&(h?x.blur():(x.focus(),x.select()),x.scrollIntoView({block:"nearest",behavior:"smooth"}))},p=U=>{const j=["qty","credit","debit"];let{row:_,col:x}=O,Q=j.indexOf(x);U==="up"?_=_>0?_-1:b-1:U==="down"?_=_<b-1?_+1:0:U==="left"?(Q>0?Q--:(Q=2,_=_>0?_-1:b-1),x=j[Q]):U==="right"&&(Q<2?Q++:(Q=0,_=_<b-1?_+1:0),x=j[Q]),w(_,x)},N=U=>{const{row:j,col:_}=O;let x="";_==="qty"?x=y[j]||"":_==="credit"?x=H[j]||"":_==="debit"&&(x=T[j]||"");const Q=_==="credit"||_==="debit"||j===Rn-1;let Re=x;if(U==="⌫")Re=x.slice(0,-1);else if(U==="C")Re="";else if(U===".")Q&&!x.includes(".")&&(Re=(x||"0")+".");else if(Re=(x+U).replace(/^0+(?=\d)/,""),Re.length>9)return;_==="qty"?te(j,Re):_==="credit"?ue(j,Re):_==="debit"&&be(j,Re)},P=({label:U,onClick:j,className:_=""})=>n.jsx("button",{type:"button",onPointerDown:x=>x.preventDefault(),onMouseDown:x=>x.preventDefault(),onClick:j,className:`h-11 select-none rounded-lg text-lg font-bold shadow-sm active:scale-95 active:bg-slate-300 transition ${_}`,children:U}),W=U=>U===Rn-1?"Other":String(zi[U]),F=U=>U===Rn-1?ee:(parseInt(y[U]||"0",10)||0)*zi[U];return n.jsxs("div",{className:"fixed inset-0 z-50 flex flex-col bg-white overflow-hidden w-full h-[100dvh]",children:[n.jsxs("div",{className:"flex items-center justify-between border-b bg-slate-900 px-4 py-2.5 sm:px-6 sm:py-3 text-white shrink-0",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-xl sm:text-2xl",children:"💳"}),n.jsxs("div",{children:[n.jsx("h3",{className:"font-bold text-base sm:text-lg leading-tight",children:"Payment Denomination"}),n.jsxs("p",{className:"text-xs text-slate-300 font-mono",children:["Date: ",c]})]})]}),n.jsxs("div",{className:"flex items-center gap-2",children:[Ph()&&n.jsx("button",{type:"button",onClick:()=>{L(U=>!U),setTimeout(()=>{var U;(U=ce.current[`${O.row}-${O.col}`])==null||U.focus()},0)},className:`rounded-lg px-2.5 py-1 text-sm font-bold transition flex items-center gap-1 ${h?"bg-blue-600 text-white":"bg-slate-800 text-slate-300 hover:bg-slate-700"}`,children:"⌨ Keypad"}),n.jsx("button",{type:"button",onClick:o,className:"flex h-8 w-8 items-center justify-center rounded-full text-2xl text-slate-300 hover:bg-slate-800 hover:text-white transition",children:"×"})]})]}),!f&&n.jsxs("div",{className:"border-b bg-slate-100 p-2 sm:p-3 shrink-0",children:[n.jsxs("div",{className:"grid grid-cols-2 gap-2 max-w-5xl mx-auto",children:[n.jsxs("div",{className:"flex flex-col justify-center rounded-xl border border-slate-300 bg-white p-2 sm:p-2.5 shadow-xs",children:[n.jsx("span",{className:"text-[11px] sm:text-xs font-bold text-slate-700 truncate",children:"Disburse/Expense"}),n.jsx("div",{className:"mt-0.5 font-mono text-sm sm:text-xl font-black text-slate-900 truncate",children:de(u)})]}),n.jsxs("div",{className:"flex flex-col justify-center rounded-xl border border-indigo-300 bg-indigo-50/90 p-2 sm:p-2.5 shadow-xs",children:[n.jsx("span",{className:"text-[11px] sm:text-xs font-bold text-indigo-950 truncate",children:"Total Cash"}),n.jsx("div",{className:"mt-0.5 font-mono text-sm sm:text-xl font-black text-indigo-950 truncate",children:de(B)})]})]}),n.jsx("div",{className:"mt-2 max-w-5xl mx-auto",children:n.jsxs("div",{className:`flex flex-row items-center justify-between gap-2 rounded-xl border p-2 sm:p-2.5 shadow-xs ${se>0?"border-emerald-500 bg-emerald-50":se<0?"border-rose-500 bg-rose-50":"border-blue-400 bg-blue-50"}`,children:[n.jsx("div",{className:"flex items-center justify-between gap-1",children:n.jsx("span",{className:"text-[11px] sm:text-xs font-bold text-slate-800 truncate",children:"Different"})}),n.jsx("div",{className:`mt-0.5 font-mono text-sm sm:text-xl font-black truncate ${se>0?"text-emerald-700":se<0?"text-rose-700":"text-blue-700"}`,children:se>0?`+${de(se)}`:se<0?`-${de(Math.abs(se))}`:"0"})]})})]}),n.jsx("div",{className:"flex-1 overflow-auto p-2 sm:p-4",children:n.jsxs("div",{className:"max-w-5xl mx-auto",children:[n.jsxs("table",{className:"w-full border-collapse border border-slate-300 text-xs sm:text-sm",children:[n.jsx("thead",{className:"sticky top-0 bg-slate-800 text-white z-10 shadow-xs",children:n.jsxs("tr",{children:[n.jsx("th",{className:"border border-slate-700 px-2 sm:px-3 py-1.5 text-center font-bold w-14 sm:w-20",children:"Note"}),n.jsx("th",{className:"border border-slate-700 px-2 sm:px-3 py-1.5 text-center font-bold w-16 sm:w-24",children:"Qty"}),n.jsx("th",{className:"border border-slate-700 px-2 sm:px-3 py-1.5 text-right font-bold w-20 sm:w-28",children:"Amount"}),n.jsx("th",{className:"border border-slate-700 px-2 sm:px-3 py-1.5 text-right font-bold bg-emerald-900 text-emerald-100 w-24 sm:w-32",children:"Credit (+)"}),n.jsx("th",{className:"border border-slate-700 px-2 sm:px-3 py-1.5 text-right font-bold bg-rose-900 text-rose-100 w-24 sm:w-32",children:"Debit (-)"})]})}),n.jsx("tbody",{children:Array.from({length:b},(U,j)=>{const _=j===Rn-1,x=F(j),Q=O.row===j&&O.col==="qty",Re=O.row===j&&O.col==="credit",ge=O.row===j&&O.col==="debit";return n.jsxs("tr",{className:`border-b hover:bg-slate-50 transition ${_?"bg-slate-50 font-bold border-t-2 border-slate-300":""}`,children:[n.jsx("td",{className:"border border-slate-300 px-2 py-1 text-center font-mono font-bold text-slate-900 sm:text-base",children:W(j)}),n.jsx("td",{className:"border border-slate-300 px-1 py-1 text-center",children:n.jsx("input",{ref:Ne=>{ce.current[`${j}-qty`]=Ne},type:"text",inputMode:h?"none":_?"decimal":"numeric",readOnly:h,value:y[j],placeholder:_?"Any":"0",onFocus:Ne=>{h&&Ne.target.blur(),w(j,"qty")},onTouchStart:Ne=>{h&&(Ne.preventDefault(),w(j,"qty"))},onClick:()=>w(j,"qty"),onChange:Ne=>te(j,Ne.target.value),className:`w-full rounded border px-1.5 py-1 text-center font-mono text-xs sm:text-sm font-bold focus:outline-none transition select-text ${Q?"border-blue-600 bg-blue-100/60 ring-2 ring-blue-400 text-blue-950 font-black":"border-slate-300 bg-yellow-50"}`})}),n.jsx("td",{className:"border border-slate-300 px-2 py-1 text-right font-mono font-bold text-slate-900 sm:text-sm",children:x>0?de(x):"-"}),n.jsx("td",{className:"border border-slate-300 px-1 py-1 text-right bg-emerald-50/30",children:n.jsx("input",{ref:Ne=>{ce.current[`${j}-credit`]=Ne},type:"text",inputMode:h?"none":"decimal",readOnly:h,value:H[j],placeholder:"0",onFocus:Ne=>{h&&Ne.target.blur(),w(j,"credit")},onTouchStart:Ne=>{h&&(Ne.preventDefault(),w(j,"credit"))},onClick:()=>w(j,"credit"),onChange:Ne=>ue(j,Ne.target.value),className:`w-full rounded border px-1.5 py-1 text-right font-mono text-xs sm:text-sm font-bold focus:outline-none transition select-text ${Re?"border-emerald-600 bg-emerald-100/60 ring-2 ring-emerald-400 text-emerald-950 font-black":"border-emerald-300 bg-white text-emerald-900"}`})}),n.jsx("td",{className:"border border-slate-300 px-1 py-1 text-right bg-rose-50/30",children:n.jsx("input",{ref:Ne=>{ce.current[`${j}-debit`]=Ne},type:"text",inputMode:h?"none":"decimal",readOnly:h,value:T[j],placeholder:"0",onFocus:Ne=>{h&&Ne.target.blur(),w(j,"debit")},onTouchStart:Ne=>{h&&(Ne.preventDefault(),w(j,"debit"))},onClick:()=>w(j,"debit"),onChange:Ne=>be(j,Ne.target.value),className:`w-full rounded border px-1.5 py-1 text-right font-mono text-xs sm:text-sm font-bold focus:outline-none transition select-text ${ge?"border-rose-600 bg-rose-100/60 ring-2 ring-rose-400 text-rose-950 font-black":"border-rose-300 bg-white text-rose-900"}`})})]},j)})}),n.jsx("tfoot",{className:"sticky bottom-0 bg-slate-100 font-bold border-t-2 border-slate-400 z-10",children:n.jsxs("tr",{children:[n.jsx("td",{colSpan:2,className:"border border-slate-300 px-2 py-1 text-right font-bold text-slate-800 text-xs",children:"Sub-Total :"}),n.jsx("td",{className:"border border-slate-300 px-2 py-1 text-right font-mono font-bold text-indigo-950 text-xs",children:de(C)}),n.jsxs("td",{className:"border border-slate-300 px-2 py-1 text-right font-mono font-bold text-emerald-800 text-xs",children:["+",de(V)]}),n.jsxs("td",{className:"border border-slate-300 px-2 py-1 text-right font-mono font-bold text-rose-800 text-xs",children:["-",de(re)]})]})})]}),n.jsxs("div",{className:"mt-2 flex items-center justify-between rounded-lg bg-blue-700 px-3.5 py-1.5 text-white shadow-sm",children:[n.jsx("span",{className:"text-xs font-bold uppercase tracking-wider",children:"Total Denomination Cash:"}),n.jsx("span",{className:"font-mono text-base sm:text-xl font-black",children:de(B)})]})]})}),h?n.jsx("div",{className:"border-t bg-slate-50 px-2.5 py-2 sm:px-4 sm:py-2.5 shrink-0 shadow-lg",children:n.jsxs("div",{className:"max-w-2xl mx-auto grid grid-cols-5 gap-1.5 sm:gap-2",children:[n.jsxs("div",{className:"col-span-4 grid grid-cols-4 gap-1.5 sm:gap-2",children:[["7","8","9"].map(U=>n.jsx(P,{label:U,onClick:()=>N(U),className:"bg-white"},U)),n.jsx(P,{label:"⌫",onClick:()=>N("⌫"),className:"bg-amber-100 text-amber-800 hover:bg-amber-200"}),["4","5","6"].map(U=>n.jsx(P,{label:U,onClick:()=>N(U),className:"bg-white"},U)),n.jsx(P,{label:"C",onClick:()=>N("C"),className:"bg-red-100 text-red-700 hover:bg-red-200"}),["1","2","3"].map(U=>n.jsx(P,{label:U,onClick:()=>N(U),className:"bg-white"},U)),n.jsx(P,{label:".",onClick:()=>N("."),className:"bg-white"}),n.jsx(P,{label:"0",onClick:()=>N("0"),className:"bg-white"}),n.jsx(P,{label:"00",onClick:()=>N("00"),className:"bg-white"}),n.jsx(P,{label:"Reset",onClick:E,className:"bg-slate-500 !text-xs sm:!text-sm text-white hover:bg-slate-600"}),ie?n.jsx(P,{label:"Apply",onClick:()=>{d(B),o()},className:"bg-emerald-600 !text-xs sm:!text-sm text-white hover:bg-emerald-700 font-bold"}):n.jsx(P,{label:"⏎",onClick:()=>p("down"),className:"bg-blue-600 !text-xs sm:!text-sm text-white hover:bg-blue-700 font-bold"})]}),n.jsxs("div",{className:"grid grid-cols-1 grid-rows-4 gap-1.5 sm:gap-2",children:[n.jsx(P,{label:"✕ Close",onClick:o,className:"bg-rose-600 hover:bg-rose-700 text-white !text-xs sm:!text-sm font-black shadow-xs ring-1 ring-rose-400"}),n.jsx(P,{label:"▲",onClick:()=>p("up"),className:"bg-blue-100 text-blue-800 hover:bg-blue-200"}),n.jsxs("div",{className:"grid grid-cols-2 gap-1",children:[n.jsx(P,{label:"◄",onClick:()=>p("left"),className:"bg-blue-100 text-blue-800 !text-sm hover:bg-blue-200"}),n.jsx(P,{label:"►",onClick:()=>p("right"),className:"bg-blue-100 text-blue-800 !text-sm hover:bg-blue-200"})]}),n.jsx(P,{label:"▼",onClick:()=>p("down"),className:"bg-blue-100 text-blue-800 hover:bg-blue-200"})]})]})}):n.jsxs("div",{className:"flex items-center justify-between border-t bg-slate-50 px-4 py-2.5 sm:px-6 shrink-0",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("button",{type:"button",onClick:E,className:"rounded-lg bg-slate-500 px-4 py-2 text-xs sm:text-sm font-semibold text-white hover:bg-slate-600 transition",children:"Reset"}),ie&&n.jsxs("button",{type:"button",onClick:()=>{d(B),o()},className:"rounded-lg bg-emerald-600 px-4 py-2 text-xs sm:text-sm font-bold text-white hover:bg-emerald-700 transition",children:["Apply (",de(B),")"]})]}),n.jsx("button",{type:"button",onClick:o,className:"rounded-lg bg-slate-900 px-8 py-2 text-xs sm:text-sm font-bold text-white hover:bg-slate-800 transition",children:"Close"})]})]})}const Fi=[1e3,500,200,100,50,20,10,5,2,1],Ea=Fi.length,gm="gobra_report_denom_entries";function tm(){const l=()=>Array(Ea).fill("");try{const o=localStorage.getItem(gm);if(!o)return{qty:l(),credit:l(),debit:l()};const u=JSON.parse(o),c=d=>Array.isArray(d)?Array(Ea).fill("").map((f,A)=>String(d[A]??"")):l();return{qty:c(u.qty),credit:c(u.credit),debit:c(u.debit)}}catch{return{qty:l(),credit:l(),debit:l()}}}function _h(){if(typeof window>"u")return!1;const l=navigator.userAgent||"",o=/Android|iPhone|iPad|iPod|Mobile|Windows Phone|Opera Mini/i.test(l),u="ontouchstart"in window||navigator.maxTouchPoints>0,c=window.innerWidth<768;return o||u&&c}function zm({open:l,onClose:o,cashInHand:u,date:c}){const[d,f]=R.useState(!1),[A,b]=R.useState(()=>tm().qty),[h,L]=R.useState(()=>tm().credit),[y,g]=R.useState(()=>tm().debit),[H,D]=R.useState({row:0,col:"qty"}),T=R.useRef({});if(R.useEffect(()=>{if(l){const E=_h();f(E),D({row:0,col:"qty"}),E||setTimeout(()=>{var w;(w=T.current["0-qty"])==null||w.focus()},60)}},[l]),R.useEffect(()=>{try{localStorage.setItem(gm,JSON.stringify({qty:A,credit:h,debit:y}))}catch{}},[A,h,y]),!l)return null;const Z=Fi.reduce((E,w,p)=>{const N=parseInt(A[p]||"0",10)||0;return E+N*w},0),O=h.reduce((E,w)=>E+(Number(w)||0),0),G=y.reduce((E,w)=>E+(Number(w)||0),0),ce=Z+O-G,K=ce-u,ee=(E,w)=>{b(p=>{const N=[...p];return N[E]=w,N})},C=(E,w)=>{L(p=>{const N=[...p];return N[E]=w,N})},V=(E,w)=>{g(p=>{const N=[...p];return N[E]=w,N})},re=()=>{b(Array(Ea).fill("")),L(Array(Ea).fill("")),g(Array(Ea).fill("")),D({row:0,col:"qty"});try{localStorage.removeItem(gm)}catch{}},B=(E,w)=>{D({row:E,col:w});const p=`${E}-${w}`,N=T.current[p];N&&(d?N.blur():(N.focus(),N.select()),N.scrollIntoView({block:"nearest",behavior:"smooth"}))},se=E=>{const w=["qty","credit","debit"];let{row:p,col:N}=H,P=w.indexOf(N);E==="up"?p=p>0?p-1:Ea-1:E==="down"?p=p<Ea-1?p+1:0:E==="left"?(P>0?P--:(P=2,p=p>0?p-1:Ea-1),N=w[P]):E==="right"&&(P<2?P++:(P=0,p=p<Ea-1?p+1:0),N=w[P]),B(p,N)},ie=E=>{const{row:w,col:p}=H;let N="";p==="qty"?N=A[w]||"":p==="credit"?N=h[w]||"":p==="debit"&&(N=y[w]||"");const P=p==="credit"||p==="debit";let W=N;if(E==="⌫")W=N.slice(0,-1);else if(E==="C")W="";else if(E===".")P&&!N.includes(".")&&(W=(N||"0")+".");else if(W=(N+E).replace(/^0+(?=\d)/,""),W.length>9)return;p==="qty"?ee(w,W):p==="credit"?C(w,W):p==="debit"&&V(w,W)},te=({label:E,onClick:w,className:p=""})=>n.jsx("button",{type:"button",onPointerDown:N=>N.preventDefault(),onMouseDown:N=>N.preventDefault(),onClick:w,className:`h-11 select-none rounded-lg text-lg font-bold shadow-sm active:scale-95 active:bg-slate-300 transition ${p}`,children:E}),ue=E=>String(Fi[E]),be=E=>(parseInt(A[E]||"0",10)||0)*Fi[E];return n.jsxs("div",{className:"fixed inset-0 z-50 flex flex-col bg-white overflow-hidden w-full h-[100dvh]",children:[n.jsxs("div",{className:"flex items-center justify-between border-b bg-slate-900 px-4 py-2.5 sm:px-6 sm:py-3 text-white shrink-0",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-xl sm:text-2xl",children:"💰"}),n.jsxs("div",{children:[n.jsx("h3",{className:"font-bold text-base sm:text-lg leading-tight",children:"Denomination"}),n.jsxs("p",{className:"text-xs text-slate-300 font-mono",children:["Date: ",c]})]})]}),n.jsxs("div",{className:"flex items-center gap-2",children:[_h()&&n.jsx("button",{type:"button",onClick:()=>{f(E=>!E),setTimeout(()=>{var E;(E=T.current[`${H.row}-${H.col}`])==null||E.focus()},0)},className:`rounded-lg px-2.5 py-1 text-sm font-bold transition flex items-center gap-1 ${d?"bg-blue-600 text-white":"bg-slate-800 text-slate-300 hover:bg-slate-700"}`,children:"⌨ Keypad"}),n.jsx("button",{type:"button",onClick:o,className:"flex h-8 w-8 items-center justify-center rounded-full text-2xl text-slate-300 hover:bg-slate-800 hover:text-white transition",children:"×"})]})]}),n.jsx("div",{className:"border-b bg-slate-100 p-2 sm:p-3 shrink-0",children:n.jsxs("div",{className:"grid grid-cols-3 gap-2 max-w-5xl mx-auto",children:[n.jsxs("div",{className:"flex flex-col justify-center rounded-xl border border-slate-300 bg-white p-2 sm:p-2.5 shadow-xs",children:[n.jsx("span",{className:"text-[11px] sm:text-xs font-bold text-slate-700 truncate",children:"Cash in Hand"}),n.jsx("div",{className:"mt-0.5 font-mono text-sm sm:text-xl font-black text-slate-900 truncate",children:de(u)})]}),n.jsxs("div",{className:"flex flex-col justify-center rounded-xl border border-indigo-300 bg-indigo-50/90 p-2 sm:p-2.5 shadow-xs",children:[n.jsx("span",{className:"text-[11px] sm:text-xs font-bold text-indigo-950 truncate",children:"Total Cash"}),n.jsx("div",{className:"mt-0.5 font-mono text-sm sm:text-xl font-black text-indigo-950 truncate",children:de(ce)})]}),n.jsxs("div",{className:`flex flex-col justify-center rounded-xl border p-2 sm:p-2.5 shadow-xs ${K>0?"border-emerald-500 bg-emerald-50":K<0?"border-rose-500 bg-rose-50":"border-blue-400 bg-blue-50"}`,children:[n.jsx("div",{className:"flex items-center justify-between gap-1",children:n.jsx("span",{className:"text-[11px] sm:text-xs font-bold text-slate-800 truncate",children:"Different"})}),n.jsx("div",{className:`mt-0.5 font-mono text-sm sm:text-xl font-black truncate ${K>0?"text-emerald-700":K<0?"text-rose-700":"text-blue-700"}`,children:K>0?`+${de(K)}`:K<0?`-${de(Math.abs(K))}`:"0"})]})]})}),n.jsx("div",{className:"flex-1 overflow-auto p-2 sm:p-4",children:n.jsxs("div",{className:"max-w-5xl mx-auto",children:[n.jsxs("table",{className:"w-full border-collapse border border-slate-300 text-xs sm:text-sm",children:[n.jsx("thead",{className:"sticky top-0 bg-slate-800 text-white z-10 shadow-xs",children:n.jsxs("tr",{children:[n.jsx("th",{className:"border border-slate-700 px-2 sm:px-3 py-1.5 text-center font-bold w-14 sm:w-20",children:"Note"}),n.jsx("th",{className:"border border-slate-700 px-2 sm:px-3 py-1.5 text-center font-bold w-16 sm:w-24",children:"Qty"}),n.jsx("th",{className:"border border-slate-700 px-2 sm:px-3 py-1.5 text-right font-bold w-20 sm:w-28",children:"Amount"}),n.jsx("th",{className:"border border-slate-700 px-2 sm:px-3 py-1.5 text-right font-bold bg-emerald-900 text-emerald-100 w-24 sm:w-32",children:"Credit (+)"}),n.jsx("th",{className:"border border-slate-700 px-2 sm:px-3 py-1.5 text-right font-bold bg-rose-900 text-rose-100 w-24 sm:w-32",children:"Debit (-)"})]})}),n.jsx("tbody",{children:Array.from({length:Ea},(E,w)=>{const p=be(w),N=H.row===w&&H.col==="qty",P=H.row===w&&H.col==="credit",W=H.row===w&&H.col==="debit";return n.jsxs("tr",{className:"border-b hover:bg-slate-50 transition",children:[n.jsx("td",{className:"border border-slate-300 px-2 py-1 text-center font-mono font-bold text-slate-900 sm:text-base",children:ue(w)}),n.jsx("td",{className:"border border-slate-300 px-1 py-1 text-center",children:n.jsx("input",{ref:F=>{T.current[`${w}-qty`]=F},type:"text",inputMode:d?"none":"numeric",readOnly:d,value:A[w],placeholder:"0",onFocus:F=>{d&&F.target.blur(),B(w,"qty")},onTouchStart:F=>{d&&(F.preventDefault(),B(w,"qty"))},onClick:()=>B(w,"qty"),onChange:F=>ee(w,F.target.value),className:`w-full rounded border px-1.5 py-1 text-center font-mono text-xs sm:text-sm font-bold focus:outline-none transition select-text ${N?"border-blue-600 bg-blue-100/60 ring-2 ring-blue-400 text-blue-950 font-black":"border-slate-300 bg-yellow-50"}`})}),n.jsx("td",{className:"border border-slate-300 px-2 py-1 text-right font-mono font-bold text-slate-900 sm:text-sm",children:p>0?de(p):"-"}),n.jsx("td",{className:"border border-slate-300 px-1 py-1 text-right bg-emerald-50/30",children:n.jsx("input",{ref:F=>{T.current[`${w}-credit`]=F},type:"text",inputMode:d?"none":"decimal",readOnly:d,value:h[w],placeholder:"0",onFocus:F=>{d&&F.target.blur(),B(w,"credit")},onTouchStart:F=>{d&&(F.preventDefault(),B(w,"credit"))},onClick:()=>B(w,"credit"),onChange:F=>C(w,F.target.value),className:`w-full rounded border px-1.5 py-1 text-right font-mono text-xs sm:text-sm font-bold focus:outline-none transition select-text ${P?"border-emerald-600 bg-emerald-100/60 ring-2 ring-emerald-400 text-emerald-950 font-black":"border-emerald-300 bg-white text-emerald-900"}`})}),n.jsx("td",{className:"border border-slate-300 px-1 py-1 text-right bg-rose-50/30",children:n.jsx("input",{ref:F=>{T.current[`${w}-debit`]=F},type:"text",inputMode:d?"none":"decimal",readOnly:d,value:y[w],placeholder:"0",onFocus:F=>{d&&F.target.blur(),B(w,"debit")},onTouchStart:F=>{d&&(F.preventDefault(),B(w,"debit"))},onClick:()=>B(w,"debit"),onChange:F=>V(w,F.target.value),className:`w-full rounded border px-1.5 py-1 text-right font-mono text-xs sm:text-sm font-bold focus:outline-none transition select-text ${W?"border-rose-600 bg-rose-100/60 ring-2 ring-rose-400 text-rose-950 font-black":"border-rose-300 bg-white text-rose-900"}`})})]},w)})}),n.jsx("tfoot",{className:"sticky bottom-0 bg-slate-100 font-bold border-t-2 border-slate-400 z-10",children:n.jsxs("tr",{children:[n.jsx("td",{colSpan:2,className:"border border-slate-300 px-2 py-1 text-right font-bold text-slate-800 text-xs",children:"Sub-Total :"}),n.jsx("td",{className:"border border-slate-300 px-2 py-1 text-right font-mono font-bold text-indigo-950 text-xs",children:de(Z)}),n.jsxs("td",{className:"border border-slate-300 px-2 py-1 text-right font-mono font-bold text-emerald-800 text-xs",children:["+",de(O)]}),n.jsxs("td",{className:"border border-slate-300 px-2 py-1 text-right font-mono font-bold text-rose-800 text-xs",children:["-",de(G)]})]})})]}),n.jsxs("div",{className:"mt-2 flex items-center justify-between rounded-lg bg-blue-700 px-3.5 py-1.5 text-white shadow-sm",children:[n.jsx("span",{className:"text-xs font-bold uppercase tracking-wider",children:"Total Denomination Cash:"}),n.jsx("span",{className:"font-mono text-base sm:text-xl font-black",children:de(ce)})]})]})}),d?n.jsx("div",{className:"border-t bg-slate-50 px-2.5 py-2 sm:px-4 sm:py-2.5 shrink-0 shadow-lg",children:n.jsxs("div",{className:"max-w-2xl mx-auto grid grid-cols-5 gap-1.5 sm:gap-2",children:[n.jsxs("div",{className:"col-span-4 grid grid-cols-4 gap-1.5 sm:gap-2",children:[["7","8","9"].map(E=>n.jsx(te,{label:E,onClick:()=>ie(E),className:"bg-white"},E)),n.jsx(te,{label:"⌫",onClick:()=>ie("⌫"),className:"bg-amber-100 text-amber-800 hover:bg-amber-200"}),["4","5","6"].map(E=>n.jsx(te,{label:E,onClick:()=>ie(E),className:"bg-white"},E)),n.jsx(te,{label:"C",onClick:()=>ie("C"),className:"bg-red-100 text-red-700 hover:bg-red-200"}),["1","2","3"].map(E=>n.jsx(te,{label:E,onClick:()=>ie(E),className:"bg-white"},E)),n.jsx(te,{label:".",onClick:()=>ie("."),className:"bg-white"}),n.jsx(te,{label:"0",onClick:()=>ie("0"),className:"bg-white"}),n.jsx(te,{label:"00",onClick:()=>ie("00"),className:"bg-white"}),n.jsx(te,{label:"Reset",onClick:re,className:"bg-slate-500 !text-xs sm:!text-sm text-white hover:bg-slate-600"}),n.jsx(te,{label:"⏎",onClick:()=>se("down"),className:"bg-blue-600 !text-xs sm:!text-sm text-white hover:bg-blue-700 font-bold"})]}),n.jsxs("div",{className:"grid grid-cols-1 grid-rows-4 gap-1.5 sm:gap-2",children:[n.jsx(te,{label:"✕ Close",onClick:o,className:"bg-rose-600 hover:bg-rose-700 text-white !text-xs sm:!text-sm font-black shadow-xs ring-1 ring-rose-400"}),n.jsx(te,{label:"▲",onClick:()=>se("up"),className:"bg-blue-100 text-blue-800 hover:bg-blue-200"}),n.jsxs("div",{className:"grid grid-cols-2 gap-1",children:[n.jsx(te,{label:"◄",onClick:()=>se("left"),className:"bg-blue-100 text-blue-800 !text-sm hover:bg-blue-200"}),n.jsx(te,{label:"►",onClick:()=>se("right"),className:"bg-blue-100 text-blue-800 !text-sm hover:bg-blue-200"})]}),n.jsx(te,{label:"▼",onClick:()=>se("down"),className:"bg-blue-100 text-blue-800 hover:bg-blue-200"})]})]})}):n.jsxs("div",{className:"flex items-center justify-between border-t bg-slate-50 px-4 py-2.5 sm:px-6 shrink-0",children:[n.jsx("button",{type:"button",onClick:re,className:"rounded-lg bg-slate-500 px-5 py-2 text-xs sm:text-sm font-semibold text-white hover:bg-slate-600 transition",children:"Reset"}),n.jsx("button",{type:"button",onClick:o,className:"rounded-lg bg-slate-900 px-8 py-2 text-xs sm:text-sm font-bold text-white hover:bg-slate-800 transition",children:"Close"})]})]})}function s5({type:l,cats:o,onChanged:u,onClose:c}){const[d,f]=R.useState(""),[A,b]=R.useState(""),[h,L]=R.useState(null),[y,g]=R.useState(""),[H,D]=R.useState(""),[T,Z]=R.useState(0),O=T>=0?as():[],[G,ce]=Zm(),K=[...O].sort((w,p)=>jm(w.name,p.name,G)),ee=l==="receive",C=K.map(w=>w.name.toLowerCase()),V=ee?o.filter(w=>C.includes(w.name.toLowerCase())):[],re=ee?o.filter(w=>!C.includes(w.name.toLowerCase())):o,B=()=>{if(d.trim()){if(o.some(w=>w.name.toLowerCase()===d.trim().toLowerCase()))return D("Already exists");xm(l,d),D(""),f(""),u()}},se=()=>{const w=A.trim();if(w){if(C.some(p=>p===w.toLowerCase())||o.some(p=>p.name.toLowerCase()===w.toLowerCase()))return D("Already exists");JR(w),xm("receive",w),D(""),b(""),Z(p=>p+1),u()}},ie=(w,p)=>{FR(w,p),Z(N=>N+1)},te=(w,p)=>{if(!confirm(`"${ft(p)}" কর্মী মুছবেন? আগের এন্ট্রিগুলো রিপোর্টে থেকে যাবে।`))return;XR(w);const N=V.find(P=>P.name.toLowerCase()===p.toLowerCase());N&&hm(N.id),Z(P=>P+1),u()},ue=()=>{!h||!y.trim()||(ep(h,y),L(null),u())},be=w=>{confirm("Delete this category?")&&(hm(w),u())},E=(w,p)=>{tp(l,w,p),u()};return n.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-3 sm:p-4",children:n.jsxs("div",{className:"w-full max-w-md rounded-2xl bg-white shadow-2xl overflow-hidden border border-slate-300",children:[n.jsxs("div",{className:"flex items-center justify-between border-b bg-slate-900 px-5 py-3 text-white",children:[n.jsxs("h3",{className:"text-base sm:text-lg font-bold",children:[ft(l)," Categories"]}),n.jsx("button",{onClick:c,className:"text-2xl text-slate-300 hover:text-white",children:"×"})]}),n.jsxs("div",{className:"p-4 sm:p-5 overflow-y-auto max-h-[85dvh]",children:[H&&n.jsx("p",{className:"mt-1 text-xs text-rose-600 font-semibold",children:H}),ee&&n.jsxs("div",{className:"rounded-xl border-2 border-indigo-200 bg-indigo-50/50 p-3 mb-4",children:[n.jsxs("div",{className:"flex items-center justify-between gap-2",children:[n.jsx("div",{className:"text-[13px] font-black text-indigo-900",children:"👷 Staff Name"}),n.jsx(sp,{mode:G,onChange:ce})]}),n.jsx("div",{className:"text-[10px] font-semibold text-slate-500 mt-0.5",children:"কর্মীর নাম এখানেই যোগ করুন — Dena/Poana ও Staff Collection টেবিল এই তালিকাতেই চলে। নতুন অফিসে একদম খালি থাকে। 🖐️ ম্যানুয়ালে ↑↓ চেপে নিজের ক্রম সাজান — সব জায়গায় সেই ক্রমই আসবে।"}),n.jsxs("div",{className:"mt-2 flex gap-2",children:[n.jsx("input",{value:A,onChange:w=>b(w.target.value),onKeyDown:w=>w.key==="Enter"&&se(),placeholder:"নতুন কর্মীর নাম",className:"flex-1 rounded-lg border border-indigo-300 bg-white px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none"}),n.jsx("button",{onClick:se,className:"rounded-lg bg-indigo-600 px-4 py-2 font-bold text-xs sm:text-sm text-white hover:bg-indigo-700 shadow-xs",children:"Add"})]}),n.jsxs("ul",{className:"mt-2 max-h-40 divide-y divide-indigo-100 rounded-xl border border-indigo-200 bg-white overflow-auto",children:[K.map((w,p)=>n.jsxs("li",{className:"flex items-center gap-2 px-3 py-2",children:[n.jsxs("span",{className:"flex-1 text-sm font-bold text-slate-800",children:["👷 ",ft(w.name)]}),G==="manual"&&n.jsxs(n.Fragment,{children:[n.jsx("button",{onClick:()=>ie(w.id,-1),disabled:p===0,className:"rounded-md bg-slate-200 px-1.5 py-1 text-xs font-black text-slate-700 hover:bg-slate-300 disabled:opacity-30 disabled:cursor-not-allowed",children:"↑"}),n.jsx("button",{onClick:()=>ie(w.id,1),disabled:p===K.length-1,className:"rounded-md bg-slate-200 px-1.5 py-1 text-xs font-black text-slate-700 hover:bg-slate-300 disabled:opacity-30 disabled:cursor-not-allowed",children:"↓"})]}),n.jsx("button",{onClick:()=>te(w.id,w.name),className:"rounded bg-rose-600 px-2.5 py-1 text-xs font-semibold text-white hover:bg-rose-700",children:"Delete"})]},w.id)),K.length===0&&n.jsx("li",{className:"px-3 py-4 text-center text-xs text-slate-400",children:"কর্মী নেই — নাম লিখে Add চাপুন"})]})]}),ee&&n.jsx("div",{className:"text-[13px] font-black text-slate-700 mb-1.5",children:"🗂️ Unique ক্যাটাগরি (সাধারণ জমা-খাত)"}),n.jsxs("div",{className:"flex gap-2",children:[n.jsx("input",{value:d,onChange:w=>f(w.target.value),onKeyDown:w=>w.key==="Enter"&&B(),placeholder:ee?"নতুন ক্যাটাগরির নাম":"New category name",className:"flex-1 rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"}),n.jsx("button",{onClick:B,className:"rounded-lg bg-emerald-600 px-4 py-2 font-bold text-xs sm:text-sm text-white hover:bg-emerald-700 shadow-xs",children:"Add"})]}),n.jsx("p",{className:"mt-3 text-[11px] font-semibold text-slate-400",children:"↑↓ চেপে ক্যাটাগরি নিজের মতো সাজান — ড্রপডাউনেও এই ক্রমই আসবে"}),n.jsxs("ul",{className:"mt-1 max-h-64 divide-y rounded-xl border border-slate-200 overflow-auto",children:[re.map((w,p)=>n.jsx("li",{className:"flex items-center gap-2 px-3 py-2 hover:bg-slate-50",children:h===w.id?n.jsxs(n.Fragment,{children:[n.jsx("input",{value:y,autoFocus:!0,onChange:N=>g(N.target.value),onKeyDown:N=>N.key==="Enter"&&ue(),className:"flex-1 rounded border border-slate-300 px-2 py-1 text-xs font-semibold focus:border-blue-500 focus:outline-none"}),n.jsx("button",{onClick:ue,className:"rounded bg-blue-600 px-3 py-1 text-xs font-bold text-white",children:"Save"}),n.jsx("button",{onClick:()=>L(null),className:"rounded bg-slate-400 px-3 py-1 text-xs font-semibold text-white",children:"Cancel"})]}):n.jsxs(n.Fragment,{children:[n.jsx("span",{className:"flex-1 text-sm font-semibold text-slate-800",children:ft(w.name)}),n.jsxs("span",{className:"flex items-center gap-0.5 shrink-0",children:[n.jsx("button",{title:"এক ঘর উপরে",disabled:p===0,onClick:()=>E(w.id,-1),className:"rounded-md bg-slate-200 px-1.5 py-1 text-xs font-black text-slate-700 hover:bg-slate-300 disabled:opacity-30 disabled:cursor-not-allowed",children:"↑"}),n.jsx("button",{title:"এক ঘর নিচে",disabled:p===re.length-1,onClick:()=>E(w.id,1),className:"rounded-md bg-slate-200 px-1.5 py-1 text-xs font-black text-slate-700 hover:bg-slate-300 disabled:opacity-30 disabled:cursor-not-allowed",children:"↓"})]}),n.jsx("button",{onClick:()=>{L(w.id),g(w.name)},className:"rounded bg-blue-600 px-2.5 py-1 text-xs font-semibold text-white hover:bg-blue-700",children:"Edit"}),n.jsx("button",{onClick:()=>be(w.id),className:"rounded bg-rose-600 px-2.5 py-1 text-xs font-semibold text-white hover:bg-rose-700",children:"Delete"})]})},w.id)),re.length===0&&n.jsx("li",{className:"px-3 py-6 text-center text-xs text-slate-400",children:"No categories"})]})]})]})})}function lp({disburseCats:l,expenseCats:o,onChanged:u,onClose:c}){const[d,f]=R.useState("disburse"),[A,b]=R.useState(""),[h,L]=R.useState(null),[y,g]=R.useState(""),[H,D]=R.useState(""),T=d==="disburse"?l:o,Z=()=>{if(!A.trim())return;const K=A.trim();if(T.some(ee=>ee.name.toLowerCase()===K.toLowerCase()))return D("Already exists");xm(d,K),D(""),b(""),u()},O=()=>{!h||!y.trim()||(ep(h,y),L(null),g(""),D(""),u())},G=K=>{confirm("Delete this category?")&&(hm(K),u())},ce=(K,ee)=>{tp(d,K,ee),u()};return n.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-3 sm:p-4",children:n.jsxs("div",{className:"w-full max-w-lg rounded-2xl bg-white shadow-2xl overflow-hidden border border-slate-300",children:[n.jsxs("div",{className:"flex items-center justify-between border-b bg-slate-900 px-5 py-3 text-white",children:[n.jsxs("div",{children:[n.jsx("h3",{className:"text-base sm:text-lg font-bold",children:"Manage Payment Categories"}),n.jsx("p",{className:"text-xs text-slate-300",children:"Disburse & Expense categories"})]}),n.jsx("button",{onClick:c,className:"text-2xl text-slate-300 hover:text-white",children:"×"})]}),n.jsxs("div",{className:"flex border-b bg-slate-100 p-1.5 gap-1",children:[n.jsxs("button",{type:"button",onClick:()=>{f("disburse"),D(""),b(""),L(null)},className:`flex-1 rounded-xl py-2 text-center text-xs sm:text-sm font-bold transition ${d==="disburse"?"bg-red-600 text-white shadow-sm":"text-slate-700 hover:bg-slate-200"}`,children:["1. Disburse Categories (",l.length,")"]}),n.jsxs("button",{type:"button",onClick:()=>{f("expense"),D(""),b(""),L(null)},className:`flex-1 rounded-xl py-2 text-center text-xs sm:text-sm font-bold transition ${d==="expense"?"bg-slate-800 text-white shadow-sm":"text-slate-700 hover:bg-slate-200"}`,children:["2. Expense Categories (",o.length,")"]})]}),n.jsxs("div",{className:"p-4 sm:p-5",children:[n.jsxs("div",{className:"flex gap-2",children:[n.jsx("input",{value:A,onChange:K=>b(K.target.value),onKeyDown:K=>K.key==="Enter"&&Z(),placeholder:d==="disburse"?"e.g. Jagoron, Agrossor, Buniyed...":"e.g. Bank Deposit, Others Expense...",className:"flex-1 rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"}),n.jsx("button",{type:"button",onClick:Z,className:"rounded-lg bg-green-600 px-4 py-2 font-bold text-xs sm:text-sm text-white hover:bg-green-700",children:"Add"})]}),H&&n.jsx("p",{className:"mt-1 text-xs text-rose-600 font-semibold",children:H}),n.jsx("p",{className:"mt-3 text-[11px] font-semibold text-slate-400",children:"↑↓ চেপে ক্যাটাগরি নিজের মতো সাজান — ড্রপডাউনেও এই ক্রমই আসবে"}),n.jsx("ul",{className:"mt-1 max-h-64 divide-y rounded-xl border border-slate-200 overflow-auto",children:T.length===0?n.jsx("li",{className:"px-3 py-6 text-center text-xs text-slate-400",children:"No categories"}):T.map((K,ee)=>n.jsx("li",{className:"flex items-center gap-2 px-3 py-2 hover:bg-slate-50",children:h===K.id?n.jsxs(n.Fragment,{children:[n.jsx("input",{value:y,autoFocus:!0,onChange:C=>g(C.target.value),onKeyDown:C=>C.key==="Enter"&&O(),className:"flex-1 rounded border border-slate-300 px-2 py-1 text-xs font-semibold focus:border-blue-500 focus:outline-none"}),n.jsx("button",{onClick:O,className:"rounded bg-blue-600 px-3 py-1 text-xs font-bold text-white",children:"Save"}),n.jsx("button",{onClick:()=>L(null),className:"rounded bg-slate-400 px-3 py-1 text-xs font-semibold text-white",children:"Cancel"})]}):n.jsxs(n.Fragment,{children:[n.jsx("span",{className:"flex-1 text-sm font-semibold text-slate-800",children:ft(K.name)}),n.jsxs("span",{className:"flex items-center gap-0.5 shrink-0",children:[n.jsx("button",{type:"button",title:"এক ঘর উপরে",disabled:ee===0,onClick:()=>ce(K.id,-1),className:"rounded-md bg-slate-200 px-1.5 py-1 text-xs font-black text-slate-700 hover:bg-slate-300 disabled:opacity-30 disabled:cursor-not-allowed",children:"↑"}),n.jsx("button",{type:"button",title:"এক ঘর নিচে",disabled:ee===T.length-1,onClick:()=>ce(K.id,1),className:"rounded-md bg-slate-200 px-1.5 py-1 text-xs font-black text-slate-700 hover:bg-slate-300 disabled:opacity-30 disabled:cursor-not-allowed",children:"↓"})]}),n.jsx("button",{type:"button",onClick:()=>{L(K.id),g(K.name)},className:"rounded bg-blue-600 px-2.5 py-1 text-xs font-semibold text-white hover:bg-blue-700",children:"Edit"}),n.jsx("button",{type:"button",onClick:()=>G(K.id),className:"rounded bg-rose-600 px-2.5 py-1 text-xs font-semibold text-white hover:bg-rose-700",children:"Delete"})]})},K.id))})]})]})})}const Ci=[{name:"Salary & Allowance",code:"5001"},{name:"Graututy",code:"7601"},{name:"Office Rent-Office",code:"6501"},{name:"Office Rent-Abashik",code:"6506"},{name:"Printing & Stationary",code:"6001"},{name:"Postage & Telephone",code:"5901"},{name:"Fuel & Lubricant",code:"5601"},{name:"Entertainment",code:"6801"},{name:"Water & Electricity",code:"5801"},{name:"Photocopy Bill",code:"6003"},{name:"Miscellaneous Exp.",code:"7011"},{name:"Bank charge",code:"5301"},{name:"Picnic",code:"7008"},{name:"Convayance",code:"5103"},{name:"Furniture & Fixture",code:"1504"},{name:"Electronics Good",code:"1505"},{name:"Crokeries / Leave Expense",code:"6004-5101"},{name:"Repair And Maintanance",code:"5707"},{name:"Legal Expen",code:"6101"},{name:"Food Bill",code:"7012"},{name:"Service Charge Jagoron",code:"5511"},{name:"Service Charge Agrossor",code:"5512"},{name:"Service Charge MDP",code:"5519"},{name:"Service Charge Buniyed",code:"5513"},{name:"Service Charge Sufolon",code:"5514"},{name:"Service Charge LRL",code:"5520"},{name:"MDP-AF",code:"5521"},{name:"LRL-2 S/C",code:"5524"},{name:"MFCE",code:"5525"},{name:"Miscellaneous Income",code:"9402"}],rp="gobra_payment_desc_history",l5=150,ta=l=>l.trim().toLowerCase();function Fm(){try{const l=localStorage.getItem(rp),o=l?JSON.parse(l):[];return Array.isArray(o)?o.filter(u=>typeof u=="string"&&u.trim()):[]}catch{return[]}}function tc(l){const o=String(l||"").trim();if(!(!o||o.length<2))try{let u=Fm();u=[o,...u.filter(c=>ta(c)!==ta(o))].slice(0,l5),localStorage.setItem(rp,JSON.stringify(u)),window.dispatchEvent(new CustomEvent("payment-desc-history-changed"))}catch{}}const Zh=12;function r5(l){const o=ta(String(l||""));if(!o)return[];const u=o.replace(/[^0-9]/g,""),c=/[a-z\u0980-\u09FF]/i.test(o),d=[],f=new Set,A=L=>{const y=L.kind+"|"+ta(L.insert);f.has(y)||d.length>=Zh||(f.add(y),d.push(L))};if(u.length>=1){let L=0;for(const y of Pn()){if(L>=4)break;const g=String(y.memberCode||"");g&&(!g.startsWith(u)&&!g.includes(u)||(L++,A({kind:"member",icon:"👤",insert:`${y.memberName||""} - ${g} - ${y.centreName||""} - ${y.centreCode||""}`.replace(/\s+-\s+-(\s|$)/g," -$1").replace(/(\s+-\s+){2,}/g," - "),title:`${y.memberName||"—"} • ${g}`,sub:`${y.centreName||"—"} • সেন্টার কোড: ${y.centreCode||"—"}`})))}}const b=Ci.filter(L=>ta(L.name).startsWith(o)),h=Ci.filter(L=>!ta(L.name).startsWith(o)&&ta(L.name).includes(o));for(const L of[...b,...h])A({kind:"part",icon:"🧾",insert:`${L.name} (${L.code})`,title:L.name,sub:`কোড: ${L.code}`});if(u.length>=1)for(const L of Ci)L.code.replace(/-/g,"").includes(u)&&A({kind:"part",icon:"🔢",insert:`${L.name} (${L.code})`,title:L.name,sub:`কোড: ${L.code}`});if(c||u.length){let L=0;for(const y of Fm()){if(L>=5)break;!ta(y).includes(o)||Ci.some(H=>ta(`${H.name} (${H.code})`)===ta(y)||ta(H.name)===ta(y))||(L++,A({kind:"history",icon:"🕘",insert:y,title:y,sub:"আগের এন্ট্রি থেকে"}))}}return d.slice(0,Zh)}const zh=12,to=l=>String(l||"").trim().toLowerCase();function o5(l,o){return`${l.memberName||""} - ${o} - ${l.centreName||""} - ${l.centreCode||""}`.replace(/\s+-\s+-(\s|$)/g," -$1").replace(/(\s+-\s+){2,}/g," - ")}function Fh(l){const o=to(l);if(!o)return[];const u=o.replace(/[^0-9]/g,""),c=/[a-z\u0980-\u09FF]/i.test(o),d=[],f=new Set,A=b=>{const h=b.kind+"|"+to(b.insert);f.has(h)||d.length>=zh||(f.add(h),d.push(b))};try{let b=0;for(const y of Pn()){if(b>=5)break;const g=String(y.memberCode||"");if(!g)continue;const H=!!u&&g.includes(u),D=c&&to(String(y.memberName||"")).includes(o);!H&&!D||(b++,A({kind:"member",icon:"👤",insert:o5(y,g),title:`${y.memberName||"—"} • ${g}`,sub:`${y.centreName||"—"} • সেন্টার কোড: ${y.centreCode||"—"}`}))}const h=new Map;for(const y of Pn()){const g=String(y.centreCode||""),H=String(y.centreName||"");if(!g&&!H)continue;const D=(g||H).toLowerCase();h.has(D)||h.set(D,{code:g,name:H})}let L=0;for(const y of h.values()){if(L>=4)break;const g=!!u&&y.code.includes(u),H=c&&to(y.name).includes(o);!g&&!H||(L++,A({kind:"part",icon:"🏛️",insert:y.name&&y.code?`${y.name} - ${y.code}`:y.name||y.code,title:y.name||y.code,sub:`সেন্টার${y.code?` • কোড: ${y.code}`:""}`}))}}catch{}try{let b=0;for(const h of Fm()){if(b>=5)break;to(h).includes(o)&&(b++,A({kind:"history",icon:"🕘",insert:h,title:h,sub:"আগের এন্ট্রি থেকে"}))}}catch{}return d.slice(0,zh)}const Jh=l=>{if(!l||!l.includes("-"))return"";const o=new Date(l+"T00:00:00");return o.setDate(o.getDate()-1),o.toISOString().slice(0,10)};function i5({selectedDate:l}){const[o,u]=R.useState([]),[c,d]=R.useState(!1),f=()=>{d(!0),window.setTimeout(()=>d(!1),900)},[A,b]=R.useState([]),[h,L]=R.useState(!1),[y,g]=R.useState(!1),[H,D]=R.useState([]),[T,Z]=R.useState([]),[O,G]=R.useState(!1),[ce,K]=R.useState(!1),[ee,C]=R.useState(!1),[V,re]=R.useState("all"),[B,se]=R.useState(l),[ie,te]=R.useState(l),[ue,be]=R.useState(null),[E,w]=R.useState({category:"",subCategory:"",amount:0,description:"",denomination:{},otherAmount:0,txDate:l}),[p,N]=R.useState(null),[P,W]=R.useState(()=>oo()),[F,U]=R.useState(!1),[j,_]=R.useState(!1),x=R.useMemo(()=>h&&E.description.trim()?Fh(E.description):[],[h,E.description]),Q=R.useMemo(()=>{var Ae;return y&&((Ae=p==null?void 0:p.description)!=null&&Ae.trim())?Fh(p.description):[]},[y,p]),Re=Ae=>{w(Me=>({...Me,description:Ae.insert})),L(!1)},ge=Ae=>{p&&N({...p,description:Ae.insert}),g(!1)},[Ne,He]=R.useState(""),[pe,he]=R.useState(null),ae=()=>{const Ae=ln(),Me=B<=ie?B:ie,ct=B<=ie?ie:B,kt=Ae.filter(en=>en.type==="receive"&&en.txDate>=Me&&en.txDate<=ct);u(kt);const qt=_n(B===ie?B:l);he({prevCash:qt.prevCash,prevBank:qt.prevBank,prevDate:qt.prevDate})},ye=()=>{W(oo()),b(xa("receive")),D(xa("disburse")),Z(xa("expense"))};R.useEffect(()=>{const Ae=()=>ye();return window.addEventListener("categories-changed",Ae),()=>window.removeEventListener("categories-changed",Ae)},[]),R.useEffect(()=>{se(l),te(l),ae(),ye(),w(Me=>({...Me,txDate:l}));const Ae=()=>ae();return window.addEventListener("tx-changed",Ae),()=>window.removeEventListener("tx-changed",Ae)},[l]),R.useEffect(()=>{ae()},[B,ie]);const ze=E.category.trim().toLowerCase().includes("fund receive"),xt=Vi(E.category,P,H.map(Ae=>Ae.name));A.map(Ae=>Ae.name);const ht=()=>{if(Oe(E.txDate)){f();return}if(!Gt(E.txDate)){alert(`⚠️ এই তারিখের (${E.txDate}) কর্মদিবস এখনও শুরু (Day Open) করা হয়নি। কোনো এন্ট্রি করার পূর্বে দিনটি Day Open করুন।`),window.dispatchEvent(new CustomEvent("open-day-open-modal"));return}const Ae=Rt(E.txDate,l);if(Ae.blocked){alert(`⚠️ ${Ae.reason||"দুটি কর্মদিবসের মধ্যবর্তী বন্ধের দিনে কোনো নতুন এন্ট্রি করা যাবে না।"}`);return}if(!E.category.trim())return He("Category required");const Me=Number(E.amount)||0;if(!Me)return He("Amount required");const ct=Me;tc(E.description),Qb({type:"receive",category:E.category.trim().toLowerCase(),subCategory:ze?E.subCategory.trim().toLowerCase():"",amount:String(ct),description:E.description||"",denomination:E.denomination,otherAmount:String(E.otherAmount||0),txDate:E.txDate}),w({category:"",subCategory:"",amount:0,description:"",denomination:{},otherAmount:0,txDate:l}),He(ct<0?"ফেরত (মাইনাস) এন্ট্রি সেভ হয়েছে!":"Receive saved successfully!"),ae()},Xe=()=>{if(!p||!p.id)return;if(Oe(p.txDate)){f();return}const Ae=Rt(p.txDate,l);if(Ae.blocked){alert(`⚠️ ${Ae.reason||"দুটি কর্মদিবসের মধ্যবর্তী বন্ধের দিনে কোনো পরিবর্তন করা যাবে না।"}`);return}if(!p.category.trim())return alert("Category required");if(!p.amount)return alert("Amount required");tc(p.description),$b({id:p.id,type:"receive",category:p.category.trim().toLowerCase(),subCategory:p.category.trim().toLowerCase().includes("fund receive")?(p.subCategory||"").trim().toLowerCase():"",amount:String(p.amount),description:p.description||"",denomination:p.denomination,otherAmount:String(p.otherAmount||0),txDate:p.txDate}),N(null),ae()},ve=()=>{if(ue!==null){const Ae=o.find(Me=>Me.id===ue);if(Ae&&Oe(Ae.txDate)){f(),be(null);return}Wb(ue),be(null),ae()}},it=V==="all"?o:o.filter(Ae=>Ae.category.toLowerCase().trim()===V.toLowerCase().trim()),It=it.reduce((Ae,Me)=>Ae+Number(Me.amount),0),at=o.reduce((Ae,Me)=>Ae+Number(Me.amount),0),Bt=Array.from(new Set(o.map(Ae=>Ae.category.toLowerCase().trim()).filter(Boolean)));return n.jsxs("div",{className:"space-y-6",children:[n.jsxs("div",{id:"receive-form-card",className:"rounded-2xl border-t-4 border-green-500 bg-white p-5 sm:p-6 shadow-sm border border-slate-200 transition-all",children:[n.jsxs("div",{className:"flex items-center justify-between mb-4",children:[n.jsxs("h1",{className:"text-xl sm:text-2xl font-bold text-slate-900 flex flex-wrap items-center gap-2",children:[n.jsx("span",{children:"📥"}),n.jsx("span",{children:"Receive Entry"}),Oe(E.txDate)&&n.jsx("span",{className:`shrink-0 rounded-lg border border-rose-300 bg-rose-100 px-2 py-0.5 text-[10px] font-black text-rose-700 ${c?"lock-pulse":""}`,title:"দিন সমাপ্ত (Day Closed) — হিসাব লক করা আছে",children:"🔒 Day Closed"})]}),n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("button",{type:"button",onClick:()=>C(!0),title:"Denomination — নোট গুনে ক্যাশ মেলান (রিপোর্ট উইন্ডো)","aria-label":"Denomination — Check Diff",className:"flex h-8 w-9 shrink-0 cursor-pointer items-center justify-center rounded-xl border border-amber-600 bg-amber-500 text-base leading-none shadow-xs hover:bg-amber-600 sm:text-lg",children:"💰"}),n.jsx("span",{className:"text-xs font-mono font-bold text-slate-600 bg-slate-100 px-2.5 py-1 rounded border border-slate-200",children:E.txDate})]})]}),!Oe(E.txDate)&&Rt(E.txDate,l).blocked&&n.jsxs("div",{className:"mb-4 rounded-xl border border-rose-400 bg-rose-50 p-3 text-xs sm:text-sm font-bold text-rose-900 flex items-start gap-2 shadow-xs",children:[n.jsx("span",{className:"text-base shrink-0",children:"🚫"}),n.jsxs("div",{children:[n.jsx("span",{className:"block font-black text-rose-950",children:"এই তারিখটি ব্লক (কর্মদিবসের মধ্যবর্তী বন্ধের দিন)"}),n.jsx("span",{className:"text-xs text-rose-800 font-normal mt-0.5 block",children:Rt(E.txDate,l).reason})]})]}),n.jsxs("div",{className:"grid gap-4 md:grid-cols-2",children:[n.jsxs("div",{className:"grid grid-cols-2 items-end gap-3 md:grid-cols-3 md:col-span-2",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"mb-1 flex items-center justify-between",children:[n.jsx("label",{className:"text-xs font-bold text-slate-700",children:"Category"}),n.jsx("button",{type:"button",onClick:()=>K(!0),className:"text-xs font-bold text-blue-600 hover:underline cursor-pointer",children:"⚙ Manage"})]}),n.jsx(Kh,{value:E.category,disabled:Oe(E.txDate),onChange:Ae=>w({...E,category:Ae,subCategory:""}),cats:A,onManageClick:()=>K(!0)})]}),n.jsxs("div",{children:[n.jsx("label",{className:"mb-1 block text-xs font-bold text-slate-700",children:"Amount"}),n.jsx("input",{readOnly:!0,disabled:Oe(E.txDate),value:E.amount?de(E.amount):"",placeholder:"",onClick:()=>{if(Oe(E.txDate)){f();return}U(!0)},onFocus:()=>{if(Oe(E.txDate)){f();return}U(!0)},className:`w-full h-[42px] rounded-lg border px-3 py-2 text-right font-mono text-lg font-bold transition shadow-2xs ${Oe(E.txDate)?"border-slate-300 bg-slate-100 text-slate-500 cursor-not-allowed opacity-60":(E.amount||0)<0?"cursor-pointer border-rose-400 bg-rose-50 text-rose-700 focus:border-rose-500 focus:outline-none hover:bg-rose-100":"cursor-pointer border-slate-300 bg-orange-50 focus:border-blue-500 focus:outline-none hover:bg-orange-100/70"}`})]}),ze&&n.jsxs("div",{className:"md:col-start-1 md:row-start-2",children:[n.jsxs("div",{className:"mb-1 flex items-center justify-between gap-2",children:[n.jsx("label",{className:"text-xs font-bold text-slate-700",children:"Sub Category (সাব ক্যাটাগরি)"}),n.jsxs("div",{className:"flex items-center gap-2",children:[E.subCategory?n.jsx("button",{type:"button",disabled:Oe(E.txDate),onClick:()=>{if(Oe(E.txDate)){f();return}w({...E,subCategory:""})},title:"সাব-ক্যাটাগরি মুছে ফেলুন (ডিলিট)",className:"cursor-pointer text-[11px] font-black text-rose-600 hover:underline disabled:cursor-not-allowed disabled:opacity-40",children:"✕ মুছুন"}):null,n.jsx("button",{type:"button",onClick:()=>G(!0),title:"Disburse Category যোগ/এডিট/ডিলিট — সেই তালিকা থেকেই এই সাব-ক্যাটাগরি আসে",className:"cursor-pointer text-[11px] font-black text-blue-600 hover:underline",children:"⚙ Manage"})]})]}),n.jsx(na,{value:E.subCategory,onChange:Ae=>w({...E,subCategory:Ae}),options:E.subCategory&&!xt.includes(E.subCategory)?[...xt,E.subCategory]:xt,placeholder:"-- Select Sub Category --",disabled:Oe(E.txDate),className:"w-full h-[42px] rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-bold text-slate-800 focus:border-blue-500 focus:outline-none cursor-pointer"})]}),n.jsxs("div",{className:`${ze?"":"col-span-2 md:col-span-1"} md:col-start-3 md:row-start-1 relative`,children:[n.jsxs("label",{className:"mb-1 block text-xs font-bold text-slate-700",children:["Description ",n.jsx("span",{className:"text-[10px] font-black text-amber-600",children:"💡 টাইপ করলেই সাজেশন"})]}),n.jsx("input",{type:"text",disabled:Oe(E.txDate),value:E.description,onChange:Ae=>w({...E,description:Ae.target.value}),onFocus:()=>L(!0),onBlur:()=>setTimeout(()=>L(!1),160),onKeyDown:Ae=>{Ae.key==="Escape"&&L(!1),Ae.key==="Enter"&&x.length&&(Ae.preventDefault(),Re(x[0]))},placeholder:"মেম্বার কোড / নাম / সেন্টার লিখুন…",autoComplete:"off",className:`w-full h-[42px] rounded-lg border px-3 py-2 text-sm font-semibold text-slate-800 focus:outline-none ${Oe(E.txDate)?"border-slate-300 bg-slate-100 text-slate-500 cursor-not-allowed opacity-60":"border-slate-300 bg-orange-50 focus:border-blue-500"}`}),h&&x.length>0&&n.jsx("div",{className:"absolute left-0 right-0 top-full z-50 mt-1 max-h-56 overflow-y-auto rounded-xl border border-slate-300 bg-white shadow-2xl",children:x.map((Ae,Me)=>n.jsxs("button",{type:"button",onMouseDown:ct=>{ct.preventDefault(),Re(Ae)},className:`flex w-full items-start gap-2 px-3 py-2 text-left transition cursor-pointer hover:bg-amber-50 ${Me>0?"border-t border-slate-100":""}`,children:[n.jsx("span",{className:"mt-0.5 text-sm leading-none",children:Ae.icon}),n.jsxs("span",{className:"min-w-0 flex-1",children:[n.jsx("span",{className:"block truncate text-[13px] font-black text-slate-800",children:Ae.title}),n.jsx("span",{className:"block truncate text-[10px] font-bold text-slate-500",children:Ae.sub})]})]},Me))})]})]}),n.jsxs("div",{className:"flex gap-2.5 md:col-span-2 pt-1",children:[n.jsx("button",{onClick:ht,disabled:Oe(E.txDate)||!Gt(E.txDate)||Rt(E.txDate,l).blocked,className:"min-h-[44px] rounded-xl bg-green-600 px-6 py-2.5 font-bold text-sm text-white shadow hover:bg-green-700 active:scale-98 transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",children:Oe(E.txDate)?"🔒 দিন সমাপ্ত (লকড)":Rt(E.txDate,l).blocked?"🚫 তারিখ ব্লকড":Gt(E.txDate)?"Save Receive":"☀️ দিন শুরু (Day Open) করুন"}),n.jsx("button",{onClick:()=>{w({category:"",amount:0,description:"",denomination:{},otherAmount:0,txDate:l}),He("")},disabled:Oe(E.txDate)||!Gt(E.txDate)||Rt(E.txDate,l).blocked,className:"min-h-[44px] rounded-xl bg-slate-500 px-6 py-2.5 font-bold text-sm text-white hover:bg-slate-600 active:scale-98 transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",children:"Reset"})]})]}),Ne&&n.jsx("p",{className:"mt-2 text-xs font-bold text-emerald-700",children:Ne}),n.jsx(pm,{open:F,onClose:()=>U(!1),targetAmount:E.amount||0,date:E.txDate||l,hideSummary:!0,hideOtherRow:!0,onApplyAmount:Ae=>{w({...E,amount:Math.round(Ae),denomination:{},otherAmount:0}),U(!1)}})]}),n.jsxs("div",{className:"overflow-hidden rounded-2xl bg-white shadow-sm border border-slate-200",children:[n.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b px-5 py-3 bg-slate-50",children:[n.jsx("div",{className:"flex items-center gap-2",children:n.jsxs("span",{className:"font-bold text-slate-800 text-sm sm:text-base",children:["Saved Entries (",it.length,"/",o.length,")"]})}),n.jsxs("div",{className:"grid w-full grid-cols-2 items-center gap-x-2 gap-y-1 sm:w-auto sm:max-w-md sm:flex sm:flex-wrap",children:[n.jsxs("div",{className:"flex min-w-0 items-center gap-1.5",children:[n.jsx("label",{className:"shrink-0 text-xs font-bold text-slate-600",children:"From:"}),n.jsx("div",{className:"min-w-0 flex-1",children:n.jsx(bn,{value:B,onChange:Ae=>se(Ae),className:"w-full px-2 py-1 text-xs sm:text-sm bg-orange-50"})})]}),n.jsxs("div",{className:"flex min-w-0 items-center gap-1.5",children:[n.jsx("label",{className:"shrink-0 text-xs font-bold text-slate-600",children:"To:"}),n.jsx("div",{className:"min-w-0 flex-1",children:n.jsx(bn,{value:ie,onChange:Ae=>te(Ae),className:"w-full px-2 py-1 text-xs sm:text-sm bg-orange-50"})})]})]}),n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("label",{className:"text-xs font-bold text-slate-600",children:"Category Filter:"}),n.jsx(na,{value:V,onChange:Ae=>re(Ae),noKeyboardOnMobile:!0,options:[{value:"all",label:`All Categories (${o.length})`},...Bt.map(Ae=>({value:Ae,label:ft(Ae)}))],placeholder:"All Categories",className:"rounded-lg border border-slate-300 bg-orange-50 px-3 py-1.5 text-xs sm:text-sm font-semibold text-slate-800 shadow-2xs focus:border-blue-500 focus:outline-none cursor-pointer w-44 sm:w-52"})]})]}),n.jsx("div",{className:"overflow-x-auto max-h-[60vh] sm:max-h-[68vh] overflow-y-auto",children:n.jsxs("table",{className:"w-full text-xs sm:text-sm",children:[n.jsx("thead",{className:"sticky top-0 bg-slate-800 text-left text-white z-10",children:n.jsxs("tr",{children:[n.jsx("th",{className:"px-3.5 py-2.5",children:"#"}),n.jsx("th",{className:"px-3.5 py-2.5",children:"Date"}),n.jsx("th",{className:"px-3.5 py-2.5",children:"Category"}),n.jsx("th",{className:"px-3.5 py-2.5",children:"Sub Cat."}),n.jsx("th",{className:"px-3.5 py-2.5",children:"Description"}),n.jsx("th",{className:"px-3.5 py-2.5 text-right",children:"Amount"}),n.jsx("th",{className:"px-3.5 py-2.5 text-center",children:"Action"})]})}),n.jsxs("tbody",{children:[pe&&V==="all"&&B===ie&&n.jsxs(n.Fragment,{children:[n.jsxs("tr",{className:"border-b bg-emerald-50 font-semibold text-slate-900",children:[n.jsx("td",{className:"px-3.5 py-2",children:"-"}),n.jsx("td",{className:"px-3.5 py-2 font-mono",children:pe.prevDate||Jh(l)}),n.jsx("td",{className:"px-3.5 py-2",children:"Cash in Hand (Opening)"}),n.jsx("td",{className:"px-3.5 py-2 text-slate-400 font-mono",children:"-"}),n.jsx("td",{className:"px-3.5 py-2 text-right font-mono text-emerald-800 font-bold",children:de(pe.prevCash)}),n.jsx("td",{})]}),n.jsxs("tr",{className:"border-b bg-indigo-50 font-semibold text-slate-900",children:[n.jsx("td",{className:"px-3.5 py-2",children:"-"}),n.jsx("td",{className:"px-3.5 py-2 font-mono",children:pe.prevDate||Jh(l)}),n.jsx("td",{className:"px-3.5 py-2",children:"Bank Balance (Opening)"}),n.jsx("td",{className:"px-3.5 py-2 text-slate-400 font-mono",children:"-"}),n.jsx("td",{className:"px-3.5 py-2 text-right font-mono text-indigo-800 font-bold",children:de(pe.prevBank)}),n.jsx("td",{})]})]}),it.length===0?n.jsx("tr",{children:n.jsx("td",{colSpan:6,className:"px-3 py-6 text-center text-slate-400",children:V==="all"?`No receive entries on ${l}`:`No entries for category "${ft(V)}"`})}):it.map((Ae,Me)=>n.jsxs("tr",{className:"border-b hover:bg-slate-50",children:[n.jsx("td",{className:"px-3.5 py-2 text-slate-500 font-mono",children:Me+1}),n.jsx("td",{className:"px-3.5 py-2 font-mono",children:Ae.txDate}),n.jsx("td",{className:"px-3.5 py-2 font-bold text-slate-800",children:ft(Ae.category)}),n.jsx("td",{className:"px-3.5 py-2 text-slate-700",children:Ae.subCategory||"-"}),n.jsx("td",{className:"px-3.5 py-2 text-slate-600",children:Ae.description||"-"}),n.jsx("td",{className:`px-3.5 py-2 text-right font-mono font-black ${Number(Ae.amount)<0?"text-rose-700":"text-green-700"}`,children:de(Ae.amount)}),n.jsx("td",{className:"px-3.5 py-2 text-center whitespace-nowrap",children:n.jsxs("div",{className:"flex items-center justify-center gap-2",children:[n.jsx("button",{type:"button",disabled:Oe(Ae.txDate),onClick:()=>{if(Oe(Ae.txDate)){f();return}N({id:Ae.id,category:Ae.category,subCategory:Ae.subCategory||"",amount:Number(Ae.amount),description:Ae.description??"",denomination:Ae.denomination??{},otherAmount:Number(Ae.otherAmount??0),txDate:Ae.txDate})},className:`min-h-[36px] rounded-lg px-3 py-1.5 text-xs font-bold text-white transition ${Oe(Ae.txDate)?"bg-slate-400 cursor-not-allowed opacity-50":"bg-blue-600 hover:bg-blue-700 cursor-pointer"}`,title:Oe(Ae.txDate)?"দিন সমাপ্ত (Locked) - উপরের Working-Day বার থেকে Re-open করুন":"Edit",children:Oe(Ae.txDate)?"🔒 Edit":"Edit"}),n.jsx("button",{type:"button",disabled:Oe(Ae.txDate),onClick:()=>{if(Oe(Ae.txDate)){f();return}be(Ae.id)},className:`min-h-[36px] rounded-lg px-3 py-1.5 text-xs font-bold text-white transition ${Oe(Ae.txDate)?"bg-slate-400 cursor-not-allowed opacity-50":"bg-rose-600 hover:bg-rose-700 cursor-pointer"}`,title:Oe(Ae.txDate)?"দিন সমাপ্ত (Locked) - উপরের Working-Day বার থেকে Re-open করুন":"Delete",children:Oe(Ae.txDate)?"🔒 Del":"Delete"})]})})]},Ae.id))]}),o.length>0&&n.jsxs("tfoot",{className:"sticky bottom-0 bg-slate-100 font-bold border-t-2 border-slate-300 z-10 shadow-inner",children:[n.jsxs("tr",{className:"border-b border-slate-200",children:[n.jsx("td",{colSpan:4,className:"px-3.5 py-2 text-right font-bold text-slate-700",children:V==="all"?"Today's Receive":`Subtotal (${ft(V)})`}),n.jsx("td",{className:"px-3.5 py-2 text-right font-mono font-bold text-green-700",children:de(V==="all"?at:It)}),n.jsx("td",{})]}),V==="all"&&n.jsxs("tr",{className:"bg-emerald-50",children:[n.jsx("td",{colSpan:4,className:"px-3.5 py-2 text-right font-black text-emerald-900",children:"Total Receive (Opening সহ)"}),n.jsx("td",{className:"px-3.5 py-2 text-right font-mono font-black text-emerald-800 text-sm sm:text-base",children:de(((pe==null?void 0:pe.prevCash)||0)+at)}),n.jsx("td",{})]})]})]})})]}),ue!==null&&n.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4",children:n.jsxs("div",{className:"w-full max-w-sm rounded-2xl bg-white p-5 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95",children:[n.jsxs("h3",{className:"text-base font-bold text-slate-900 flex items-center gap-2",children:[n.jsx("span",{className:"text-rose-600 text-lg",children:"⚠️"}),n.jsx("span",{children:"Confirm Delete"})]}),n.jsx("p",{className:"mt-2 text-sm text-slate-600",children:"Are you sure you want to permanently delete this receive entry? This action cannot be undone."}),n.jsxs("div",{className:"mt-5 flex items-center justify-end gap-3",children:[n.jsx("button",{type:"button",onClick:()=>be(null),className:"min-h-[44px] rounded-xl bg-slate-200 px-4 py-2 text-sm font-bold text-slate-700 hover:bg-slate-300 active:scale-95 transition",children:"Cancel"}),n.jsx("button",{type:"button",onClick:ve,className:"min-h-[44px] rounded-xl bg-rose-600 px-5 py-2 text-sm font-bold text-white hover:bg-rose-700 active:scale-95 transition",children:"Delete Entry"})]})]})}),p&&n.jsx("div",{className:"fixed inset-0 z-40 flex items-center justify-center bg-black/60 p-4",children:n.jsxs("div",{className:"max-h-[95vh] w-full max-w-2xl overflow-auto rounded-2xl bg-white p-5 sm:p-6 shadow-2xl",children:[n.jsxs("div",{className:"mb-4 flex items-center justify-between border-b pb-3",children:[n.jsxs("h2",{className:"text-lg font-bold",children:["Edit Receive Entry #",p.id]}),n.jsx("button",{onClick:()=>N(null),className:"min-h-[36px] min-w-[36px] text-2xl text-slate-400 hover:text-rose-600 flex items-center justify-center",children:"×"})]}),n.jsxs("div",{className:"grid gap-4 md:grid-cols-2",children:[n.jsxs("div",{children:[n.jsx("label",{className:"mb-1 block text-xs font-bold text-slate-700",children:"Date"}),n.jsx(bn,{value:p.txDate,onChange:Ae=>N({...p,txDate:Ae}),className:"px-3 py-2 text-sm"})]}),n.jsxs("div",{children:[n.jsx("label",{className:"mb-1 block text-xs font-bold text-slate-700",children:"Category"}),n.jsx(Kh,{value:p.category,onChange:Ae=>N({...p,category:Ae,subCategory:""}),cats:A,onManageClick:()=>K(!0)})]}),p.category.trim().toLowerCase().includes("fund receive")&&n.jsxs("div",{children:[n.jsxs("div",{className:"mb-1 flex items-center justify-between gap-2",children:[n.jsx("label",{className:"text-xs font-bold text-slate-700",children:"Sub Category (সাব ক্যাটাগরি)"}),p.subCategory?n.jsx("button",{type:"button",onClick:()=>N({...p,subCategory:""}),title:"সাব-ক্যাটাগরি মুছে ফেলুন (ডিলিট)",className:"cursor-pointer text-[11px] font-black text-rose-600 hover:underline",children:"✕ মুছুন"}):null]}),n.jsx(na,{value:p.subCategory||"",onChange:Ae=>N({...p,subCategory:Ae}),options:(()=>{const Ae=Vi(p.category,P,H.map(ct=>ct.name)),Me=(p.subCategory||"").trim();return Me&&!Ae.includes(Me)?[...Ae,Me]:Ae})(),placeholder:"-- Select Sub Category --",className:"w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-bold text-slate-800 focus:border-blue-500 focus:outline-none cursor-pointer"})]}),n.jsxs("div",{children:[n.jsx("label",{className:"mb-1 block text-xs font-bold text-slate-700",children:"Amount"}),n.jsx("input",{readOnly:!0,value:p.amount?de(p.amount):"",placeholder:"",onClick:()=>_(!0),onFocus:()=>_(!0),title:"Amount চাপলে ডেনোমিনেশন পপআপ খুলবে",className:`w-full h-[42px] rounded-lg border px-3 py-2 text-right font-mono text-lg font-bold transition shadow-2xs ${(p.amount||0)<0?"cursor-pointer border-rose-400 bg-rose-50 text-rose-700 focus:border-rose-500 focus:outline-none hover:bg-rose-100":"cursor-pointer border-slate-300 bg-orange-50 focus:border-blue-500 focus:outline-none hover:bg-orange-100/70"}`})]}),n.jsxs("div",{className:"md:col-span-2 relative",children:[n.jsxs("label",{className:"mb-1 block text-xs font-bold text-slate-700",children:["Description ",n.jsx("span",{className:"text-[10px] font-black text-amber-600",children:"💡 টাইপ করলেই সাজেশন"})]}),n.jsx("input",{type:"text",value:p.description,onChange:Ae=>N({...p,description:Ae.target.value}),onFocus:()=>g(!0),onBlur:()=>setTimeout(()=>g(!1),160),onKeyDown:Ae=>{Ae.key==="Escape"&&g(!1),Ae.key==="Enter"&&Q.length&&(Ae.preventDefault(),ge(Q[0]))},placeholder:"মেম্বার কোড / নাম / সেন্টার লিখুন…",autoComplete:"off",className:"w-full h-[42px] rounded-lg border border-slate-300 bg-orange-50 px-3 py-2 text-sm font-semibold text-slate-800 focus:border-blue-500 focus:outline-none"}),y&&Q.length>0&&n.jsx("div",{className:"absolute left-0 right-0 top-full z-50 mt-1 max-h-56 overflow-y-auto rounded-xl border border-slate-300 bg-white shadow-2xl",children:Q.map((Ae,Me)=>n.jsxs("button",{type:"button",onMouseDown:ct=>{ct.preventDefault(),ge(Ae)},className:`flex w-full items-start gap-2 px-3 py-2 text-left transition cursor-pointer hover:bg-amber-50 ${Me>0?"border-t border-slate-100":""}`,children:[n.jsx("span",{className:"mt-0.5 text-sm leading-none",children:Ae.icon}),n.jsxs("span",{className:"min-w-0 flex-1",children:[n.jsx("span",{className:"block truncate text-[13px] font-black text-slate-800",children:Ae.title}),n.jsx("span",{className:"block truncate text-[10px] font-bold text-slate-500",children:Ae.sub})]})]},Me))})]}),n.jsxs("div",{className:"flex justify-end gap-3 md:col-span-2 border-t pt-3 mt-2",children:[n.jsx("button",{onClick:()=>N(null),className:"min-h-[44px] rounded-xl bg-slate-200 px-5 py-2 font-bold text-sm text-slate-700 hover:bg-slate-300 transition",children:"Cancel"}),n.jsx("button",{onClick:Xe,className:"min-h-[44px] rounded-xl bg-green-600 px-6 py-2 font-bold text-sm text-white hover:bg-green-700 transition",children:"Update Entry"})]})]}),n.jsx(pm,{open:j,onClose:()=>_(!1),targetAmount:p.amount||0,date:p.txDate,hideSummary:!0,hideOtherRow:!0,onApplyAmount:Ae=>{N({...p,amount:Math.round(Ae),denomination:{},otherAmount:0}),_(!1)}})]})}),ce&&n.jsx(s5,{type:"receive",cats:A,onChanged:ye,onClose:()=>K(!1)}),O&&n.jsx(lp,{disburseCats:H,expenseCats:T,onChanged:ye,onClose:()=>G(!1)}),ee&&n.jsx(zm,{open:ee,onClose:()=>C(!1),cashInHand:np(E.txDate||l).cashInHand,date:E.txDate||l})]})}function Xh({value:l,onChange:o,disburseCats:u,expenseCats:c,onManageClick:d,disabled:f=!1}){const[A,b]=R.useState(!1),h=R.useRef(null),L=R.useRef(0),y=R.useRef(null),g=()=>{L.current=Date.now()},H=()=>Date.now()-L.current<600,D=()=>{const C=document.activeElement;C&&(C.tagName==="INPUT"||C.tagName==="TEXTAREA")&&C.blur()};R.useEffect(()=>{if(!A)return;function C(V){if(h.current&&!h.current.contains(V.target)){const re=V.target,B=!!re&&(re.tagName==="INPUT"||re.tagName==="TEXTAREA"||re.tagName==="SELECT");b(!1),B||D()}}return document.addEventListener("pointerdown",C),()=>{document.removeEventListener("pointerdown",C)}},[A]);const T=(l||"").trim().toLowerCase(),Z=R.useMemo(()=>{const C=new Map;return[...u,...c].forEach(V=>{const re=V.name.trim().toLowerCase();C.has(re)||C.set(re,V)}),Array.from(C.values())},[u,c]),O=Z,G=C=>{o(C),b(!1),D()},ce=C=>{C.button===0&&(C.preventDefault(),y.current=C.currentTarget,g())},K=C=>{C.button!==0||f||y.current!==C.currentTarget||(g(),b(V=>(V&&D(),!V)))},ee=()=>{f||H()||b(C=>!C)};return n.jsxs("div",{className:"relative w-full",ref:h,children:[n.jsxs("button",{type:"button",disabled:f,"aria-haspopup":"listbox","aria-expanded":A,onPointerDown:ce,onPointerUp:K,onClick:ee,onKeyDown:C=>{C.key==="Escape"&&A&&(C.stopPropagation(),b(!1),D())},className:`w-full h-[42px] rounded-xl border px-3 py-2 text-left text-sm font-bold shadow-xs transition cursor-pointer flex items-center justify-between ${f?"bg-slate-100":"bg-orange-50"} ${A?"border-blue-600 ring-2 ring-blue-500/20":"border-slate-300 hover:border-orange-300 hover:bg-orange-100/60"} ${f?"opacity-50 cursor-not-allowed":""}`,children:[n.jsx("div",{className:"flex items-center gap-2 truncate",children:l?n.jsx("span",{className:"text-slate-900 font-bold truncate",children:ft(l)}):n.jsx("span",{className:"text-slate-400 font-medium",children:"-- Select Category --"})}),n.jsxs("div",{className:"flex items-center gap-1.5 shrink-0 ml-2",children:[l&&n.jsx("span",{onPointerDown:C=>{C.stopPropagation(),ce(C)},onPointerUp:C=>{C.stopPropagation(),!(C.button!==0||y.current!==C.currentTarget)&&(g(),o(""))},onClick:C=>{C.stopPropagation(),!H()&&o("")},className:"p-1 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-md cursor-pointer text-xs transition",title:"Clear Category",children:"✕"}),n.jsx("span",{className:`text-slate-400 text-xs transition-transform duration-200 ${A?"rotate-180":""}`,children:"▼"})]})]}),A&&n.jsxs("div",{role:"listbox",className:"absolute left-0 right-0 z-50 mt-1.5 rounded-2xl border border-slate-200 bg-white shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150 flex flex-col max-h-80",children:[n.jsxs("div",{className:"p-2.5 border-b border-slate-100 bg-slate-50 flex items-center justify-between gap-2 shrink-0",children:[n.jsx("span",{className:"pl-1 text-xs sm:text-sm font-bold text-slate-500",children:"📋 ক্যাটাগরি সিলেক্ট করুন"}),n.jsx("span",{className:"text-[10px] font-bold text-slate-400 bg-slate-200/70 px-1.5 py-0.5 rounded-md",children:Z.length})]}),n.jsx("div",{className:"overflow-y-auto max-h-60 p-1.5 space-y-0.5",children:O.length>0?O.map(C=>{const V=C.name.toLowerCase()===T;return n.jsxs("button",{type:"button",role:"option","aria-selected":V,onPointerDown:ce,onPointerUp:re=>{re.button!==0||y.current!==re.currentTarget||(g(),G(C.name))},onClick:()=>{H()||G(C.name)},className:`w-full text-left px-3 py-2 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer flex items-center justify-between ${V?"bg-blue-50 text-blue-900 border border-blue-200 shadow-2xs font-extrabold":"hover:bg-slate-100 text-slate-700 hover:text-slate-900"}`,children:[n.jsxs("div",{className:"flex items-center gap-2.5 truncate",children:[n.jsx("span",{className:`h-2 w-2 rounded-full shrink-0 ${V?"bg-blue-600 ring-2 ring-blue-300":"bg-slate-300"}`}),n.jsx("span",{className:"truncate",children:ft(C.name)})]}),V&&n.jsx("span",{className:"text-blue-600 font-black text-sm pl-2",children:"✓"})]},C.id||C.name)}):n.jsxs("div",{className:"py-8 text-center text-xs text-slate-400 font-semibold flex flex-col items-center gap-1",children:[n.jsx("span",{children:"🔍"}),n.jsx("span",{children:"No category found"})]})}),n.jsxs("div",{className:"p-2 border-t border-slate-100 bg-slate-50 flex items-center justify-between shrink-0 text-xs",children:[n.jsxs("span",{className:"text-[11px] text-slate-500 font-medium",children:["Total: ",O.length," categories"]}),n.jsxs("button",{type:"button",onPointerDown:ce,onPointerUp:C=>{C.button!==0||y.current!==C.currentTarget||(g(),b(!1),d())},onClick:()=>{H()||(b(!1),d())},className:"text-xs font-black text-blue-600 hover:text-blue-800 hover:underline cursor-pointer flex items-center gap-1",children:[n.jsx("span",{children:"⚙️"}),n.jsx("span",{children:"Manage Categories"})]})]})]})]})}function c5({rates:l,categories:o,onChanged:u,onClose:c}){const[d,f]=R.useState(o[0]??""),[A,b]=R.useState(gh[0]),[h,L]=R.useState(""),[y,g]=R.useState({}),[H,D]=R.useState(""),T=()=>{if(!d.trim()||!A.trim())return D("Category & sub category required");Uh({category:d.trim().toLowerCase(),subCategory:A.trim().toLowerCase(),ratePer100:String(Number(h)||0)}),D(""),L(""),u()},Z=K=>{const ee=l.find(C=>C.id===K);if(ee){Uh({id:K,category:ee.category,subCategory:ee.subCategory,ratePer100:String(Number(y[K])||0)});const C={...y};delete C[K],g(C),u()}},O=K=>{confirm("Delete this rate?")&&(VR(K),u())},G=Array.from(new Set([...o,...l.map(K=>K.category)])),ce=Array.from(new Set([...gh,...l.map(K=>K.subCategory)]));return n.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-3 sm:p-4",children:n.jsxs("div",{className:"flex max-h-[95vh] w-full max-w-2xl flex-col rounded-2xl bg-white shadow-2xl overflow-hidden border border-slate-300",children:[n.jsxs("div",{className:"flex items-center justify-between border-b bg-slate-900 px-5 py-3 text-white",children:[n.jsx("h3",{className:"text-base sm:text-lg font-bold",children:"⚙ Service Charge Settings"}),n.jsx("button",{onClick:c,className:"text-2xl text-slate-300 hover:text-white",children:"×"})]}),n.jsxs("div",{className:"border-b bg-slate-50 px-4 sm:px-5 py-3",children:[n.jsxs("div",{className:"grid grid-cols-2 gap-2 sm:grid-cols-4",children:[n.jsxs("div",{children:[n.jsx("label",{className:"text-xs font-bold text-slate-700",children:"Category"}),n.jsx("input",{list:"sc-cats",value:d,onChange:K=>f(K.target.value),className:"w-full rounded border border-slate-300 px-2 py-1.5 text-xs sm:text-sm capitalize focus:border-blue-500 focus:outline-none bg-white"}),n.jsx("datalist",{id:"sc-cats",children:G.map(K=>n.jsx("option",{value:K},K))})]}),n.jsxs("div",{children:[n.jsx("label",{className:"text-xs font-bold text-slate-700",children:"Sub Category"}),n.jsx("input",{list:"sc-subs",value:A,onChange:K=>b(K.target.value),className:"w-full rounded border border-slate-300 px-2 py-1.5 text-xs sm:text-sm focus:border-blue-500 focus:outline-none bg-white"}),n.jsx("datalist",{id:"sc-subs",children:ce.map(K=>n.jsx("option",{value:K},K))})]}),n.jsxs("div",{children:[n.jsx("label",{className:"text-xs font-bold text-slate-700",children:"SC / 100 Tk"}),n.jsx("input",{type:"number",step:"0.01",min:0,value:h,placeholder:"0.00",onChange:K=>L(K.target.value),onKeyDown:K=>K.key==="Enter"&&T(),className:"w-full rounded border border-slate-300 px-2 py-1.5 text-right font-mono text-xs sm:text-sm focus:border-blue-500 focus:outline-none bg-white font-bold"})]}),n.jsx("div",{className:"flex items-end",children:n.jsx("button",{onClick:T,className:"w-full rounded-lg bg-green-600 px-4 py-1.5 font-bold text-xs sm:text-sm text-white hover:bg-green-700",children:"Add Rate"})})]}),H&&n.jsx("p",{className:"mt-1 text-xs text-rose-600 font-semibold",children:H})]}),n.jsx("div",{className:"flex-1 overflow-auto p-4",children:n.jsxs("table",{className:"w-full text-xs sm:text-sm border-collapse border border-slate-200",children:[n.jsx("thead",{className:"sticky top-0 bg-slate-800 text-white",children:n.jsxs("tr",{children:[n.jsx("th",{className:"px-3 py-2 text-left font-bold",children:"Category"}),n.jsx("th",{className:"px-3 py-2 text-left font-bold",children:"Sub Category"}),n.jsx("th",{className:"px-3 py-2 text-right font-bold",children:"SC / 100 Tk"}),n.jsx("th",{className:"px-3 py-2 text-center font-bold",children:"Action"})]})}),n.jsx("tbody",{children:l.length===0?n.jsx("tr",{children:n.jsx("td",{colSpan:4,className:"px-3 py-6 text-center text-slate-400",children:"No rates yet"})}):l.map(K=>{const ee=K.id in y;return n.jsxs("tr",{className:"border-b hover:bg-slate-50",children:[n.jsx("td",{className:"px-3 py-2 font-semibold text-slate-900",children:ft(K.category)}),n.jsx("td",{className:"px-3 py-2 text-slate-600",children:K.subCategory}),n.jsx("td",{className:"px-3 py-2 text-right font-mono font-bold text-indigo-900",children:ee?n.jsx("input",{type:"number",step:"0.01",min:0,autoFocus:!0,value:y[K.id],onChange:C=>g({...y,[K.id]:C.target.value}),onKeyDown:C=>C.key==="Enter"&&Z(K.id),className:"w-20 rounded border px-1.5 py-0.5 text-right font-bold"}):Number(K.ratePer100).toFixed(2)}),n.jsxs("td",{className:"px-3 py-2 text-center",children:[ee?n.jsx("button",{onClick:()=>Z(K.id),className:"mr-1 rounded bg-green-600 px-2 py-0.5 text-xs text-white",children:"Save"}):n.jsx("button",{onClick:()=>g({...y,[K.id]:String(Number(K.ratePer100))}),className:"mr-1 rounded bg-blue-600 px-2 py-0.5 text-xs text-white hover:bg-blue-700",children:"Edit"}),n.jsx("button",{onClick:()=>O(K.id),className:"rounded bg-rose-600 px-2 py-0.5 text-xs text-white hover:bg-rose-700",children:"Delete"})]})]},K.id)})})]})})]})})}function u5({rule:l,disburseCategories:o=[],onChanged:u,onClose:c}){const d=["jagoron","agrossor","buniyed","sufolon","mfce"],f=Array.from(new Set([...d,...o.map(B=>B.trim().toLowerCase()),...Object.keys(l.categoryOverrides||{}).map(B=>B.trim().toLowerCase())])).filter(Boolean),[A,b]=R.useState(l.percent??1),[h,L]=R.useState(l.fixed??15),[y,g]=R.useState(()=>{const B={};for(const se of f)l.categoryOverrides&&l.categoryOverrides[se]?B[se]={percent:l.categoryOverrides[se].percent??A,fixed:l.categoryOverrides[se].fixed??h}:sn.categoryOverrides&&sn.categoryOverrides[se]?B[se]={...sn.categoryOverrides[se]}:B[se]={percent:A,fixed:h};return B}),[H,D]=R.useState(5e4),[T,Z]=R.useState("products"),[O,G]=R.useState(""),ce=(B,se,ie)=>{g(te=>({...te,[B]:{...te[B],[se]:ie>=0?ie:0}}))},K=B=>{const se={};if(B==="standard"){for(const ie of f)ie.trim().toLowerCase()==="buniyed"||ie.trim().toLowerCase()==="buniyad"?se[ie]={percent:.5,fixed:15}:se[ie]={percent:1,fixed:15};g(se),b(1),L(15),G("✓ স্ট্যান্ডার্ড নিয়ম প্রয়োগ করা হয়েছে: সাধারণ ১% + ১৫ টাকা, বুনিয়াদ ০.৫% + ১৫ টাকা")}else if(B==="all_1_15"){for(const ie of f)se[ie]={percent:1,fixed:15};g(se),b(1),L(15),G("✓ সকল প্রোডাক্টে ১% + ১৫ টাকা নির্ধারণ করা হয়েছে")}else if(B==="all_05_15"){for(const ie of f)se[ie]={percent:.5,fixed:15};g(se),b(.5),L(15),G("✓ সকল প্রোডাক্টে ০.৫% + ১৫ টাকা নির্ধারণ করা হয়েছে")}else if(B==="all_1_0"){for(const ie of f)se[ie]={percent:1,fixed:0};g(se),b(1),L(0),G("✓ সকল প্রোডাক্টে শুধু ১% (কোনো ফিক্সড ফি নেই) নির্ধারণ করা হয়েছে")}},ee=()=>{const B={};for(const ie of Object.keys(y)){const te=y[ie];te&&(B[ie.trim().toLowerCase()]={percent:Number(te.percent)||0,fixed:Number(te.fixed)||0})}const se={percent:Number(A)||0,fixed:Number(h)||0,categoryOverrides:B};Th(se),G("✓ কল্যাণ তহবিল সেটিংস সফলভাবে সংরক্ষিত হয়েছে!"),u(),setTimeout(()=>{c()},600)},C=()=>{Th(sn),b(sn.percent),L(sn.fixed),g({...sn.categoryOverrides||{}}),G("✓ স্ট্যান্ডার্ড ডিফল্ট অবস্থায় রিসেট করা হয়েছে (১% + ১৫ টাকা, বুনিয়াদ ০.৫% + ১৫ টাকা)"),u()},V=B=>{const se=B.toLowerCase();return se.includes("jagoron")?"from-emerald-600 to-teal-700":se.includes("agrossor")?"from-blue-600 to-indigo-700":se.includes("buniyed")?"from-amber-600 to-orange-700":se.includes("sufolon")?"from-teal-600 to-cyan-700":se.includes("mfce")?"from-purple-600 to-indigo-700":"from-slate-600 to-slate-800"},re=B=>{const se=B.toLowerCase();return se.includes("jagoron")?"জাগরণ":se.includes("agrossor")?"অগ্রসর":se.includes("buniyed")?"বুনিয়াদ":se.includes("sufolon")?"সুফলন":se.includes("mfce")?"এমএফসিই":ft(B)};return n.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-2 sm:p-4 backdrop-blur-xs animate-in fade-in duration-200",children:n.jsxs("div",{className:"flex h-full sm:h-auto sm:max-h-[94vh] w-full max-w-4xl flex-col rounded-2xl bg-white shadow-2xl overflow-hidden border border-slate-200",children:[n.jsxs("div",{className:"flex items-center justify-between border-b bg-linear-to-r from-teal-800 via-teal-900 to-slate-900 px-4 sm:px-6 py-3.5 text-white shrink-0",children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500/20 text-teal-300 ring-1 ring-teal-400/30 text-lg shadow-inner",children:"🤝"}),n.jsxs("div",{children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("h2",{className:"text-base sm:text-lg font-black tracking-tight text-white",children:"কল্যাণ তহবিল সেটিংস (Kallyan Fund)"}),n.jsx("span",{className:"rounded-md bg-teal-500/20 px-2 py-0.5 text-[10px] font-bold text-teal-200 ring-1 ring-teal-400/30 uppercase",children:"Disburse Settings"})]}),n.jsx("p",{className:"text-xs text-teal-200/80 font-medium",children:"ঋণ বিতরণকালে কল্যাণ ফি ও শতকরা হারের সহজ কনফিগারেশন"})]})]}),n.jsx("button",{onClick:c,className:"rounded-lg p-1.5 text-teal-300 hover:text-white hover:bg-white/10 transition cursor-pointer text-xl leading-none","aria-label":"Close",children:"✕"})]}),O&&n.jsxs("div",{className:"bg-emerald-50 border-b border-emerald-200 px-4 py-2 flex items-center justify-between text-xs font-bold text-emerald-900 shrink-0",children:[n.jsx("span",{children:O}),n.jsx("button",{onClick:()=>G(""),className:"text-emerald-700 hover:text-emerald-950 text-sm px-1 font-bold cursor-pointer",children:"✕"})]}),n.jsxs("div",{className:"border-b bg-linear-to-b from-teal-50/90 to-slate-50/70 p-3 sm:p-4 shrink-0 space-y-3",children:[n.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-center justify-between gap-3",children:[n.jsxs("div",{className:"space-y-1.5 flex-1",children:[n.jsx("span",{className:"text-[11px] font-black uppercase tracking-wider text-teal-900 block",children:"⚡ ১-ক্লিক রেডি প্রিসেট (Quick Presets):"}),n.jsxs("div",{className:"flex flex-wrap gap-1.5",children:[n.jsxs("button",{type:"button",onClick:()=>K("standard"),className:"rounded-xl bg-teal-700 hover:bg-teal-800 text-white px-3 py-1.5 text-xs font-bold shadow-xs transition cursor-pointer flex items-center gap-1.5",children:[n.jsx("span",{children:"🌟"}),n.jsx("span",{children:"স্ট্যান্ডার্ড (১% + ১৫ ৳, বুনিয়াদ ০.৫% + ১৫ ৳)"})]}),n.jsx("button",{type:"button",onClick:()=>K("all_1_15"),className:"rounded-xl bg-white hover:bg-teal-50 border border-teal-300 text-teal-900 px-2.5 py-1.5 text-xs font-bold shadow-2xs transition cursor-pointer",children:"সব ১% + ১৫ ৳"}),n.jsx("button",{type:"button",onClick:()=>K("all_05_15"),className:"rounded-xl bg-white hover:bg-teal-50 border border-teal-300 text-teal-900 px-2.5 py-1.5 text-xs font-bold shadow-2xs transition cursor-pointer",children:"সব ০.৫% + ১৫ ৳"}),n.jsx("button",{type:"button",onClick:()=>K("all_1_0"),className:"rounded-xl bg-white hover:bg-slate-100 border border-slate-300 text-slate-700 px-2.5 py-1.5 text-xs font-bold shadow-2xs transition cursor-pointer",children:"শুধু ১% (০ ৳ ফিক্সড)"})]})]}),n.jsxs("div",{className:"rounded-xl border border-teal-200 bg-white p-2.5 shadow-2xs flex items-center gap-2.5 shrink-0",children:[n.jsxs("div",{children:[n.jsx("span",{className:"text-[10px] font-bold text-slate-500 uppercase block",children:"টেস্ট লোন পরিমাণ (Sample):"}),n.jsxs("div",{className:"flex items-center gap-1 mt-0.5",children:[n.jsx("input",{type:"number",min:1e3,step:5e3,value:H,onChange:B=>D(Number(B.target.value)||0),className:"w-24 rounded-lg border border-slate-300 px-2 py-1 text-right font-mono text-sm font-black text-teal-950 focus:border-teal-600 focus:outline-none"}),n.jsx("span",{className:"text-xs font-bold text-slate-600",children:"৳"})]})]}),n.jsx("div",{className:"flex flex-col gap-1",children:[3e4,5e4,1e5].map(B=>n.jsx("button",{type:"button",onClick:()=>D(B),className:`rounded px-1.5 py-0.5 text-[10px] font-bold font-mono transition cursor-pointer ${H===B?"bg-teal-700 text-white":"bg-slate-100 text-slate-600 hover:bg-slate-200"}`,children:de(B)},B))})]})]}),n.jsxs("div",{className:"flex items-center justify-between text-[11px] bg-teal-100/60 rounded-lg px-3 py-1.5 text-teal-950 border border-teal-200/80",children:[n.jsxs("span",{className:"font-semibold",children:["💡 হিসাবের নিয়ম: ",n.jsx("span",{className:"font-mono font-bold",children:"(লোন × পার্সেন্টেজ ÷ ১০০) + ফিক্সড ফি = মোট কল্যাণ ফি"})]}),n.jsxs("span",{className:"hidden sm:inline text-teal-800 font-medium",children:["উদাহরণ: ",de(H)," × ১% + ১৫ = ",n.jsxs("b",{className:"font-mono",children:[de(Math.round(H*1/100)+15)," ৳"]})]})]})]}),n.jsxs("div",{className:"flex-1 overflow-y-auto p-3 sm:p-5 space-y-4",children:[n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("span",{className:"text-xs font-black uppercase tracking-wider text-slate-800 flex items-center gap-1.5",children:[n.jsx("span",{children:"📋"})," প্রোডাক্টভিত্তিক কল্যাণ ফি নির্ধারণ:"]}),n.jsxs("span",{className:"text-xs text-slate-500 font-medium",children:["মোট ",n.jsx("b",{className:"text-teal-700",children:f.length})," টি প্রোডাক্ট"]})]}),n.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3.5",children:f.map(B=>{const se=y[B]||{percent:A,fixed:h},ie=Nb(H,B,{percent:A,fixed:h,categoryOverrides:y}),te=B.toLowerCase().includes("buniyed");return n.jsxs("div",{className:"rounded-2xl border border-slate-200 bg-white p-4 shadow-xs hover:border-teal-500 hover:shadow-md transition group",children:[n.jsxs("div",{className:"flex items-center justify-between border-b border-slate-100 pb-2.5 mb-3",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("div",{className:`h-8 w-8 rounded-xl bg-linear-to-tr ${V(B)} flex items-center justify-center text-white text-xs font-bold shadow-xs`,children:B.charAt(0).toUpperCase()}),n.jsxs("div",{children:[n.jsxs("div",{className:"flex items-center gap-1.5",children:[n.jsx("span",{className:"font-black text-sm text-slate-900",children:ft(B)}),n.jsxs("span",{className:"text-xs text-slate-400 font-semibold",children:["(",re(B),")"]})]}),te&&n.jsx("span",{className:"text-[10px] text-amber-700 font-bold block",children:"★ বুনিয়াদে সাধারণত ০.৫% + ১৫ প্রযোজ্য হয়"})]})]}),n.jsx("div",{className:"text-right",children:n.jsxs("span",{className:"rounded-full bg-teal-50 text-teal-800 border border-teal-200 px-2 py-0.5 text-[10px] font-black",children:[se.percent,"% + ",se.fixed," ৳"]})})]}),n.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[n.jsxs("div",{className:"space-y-1.5",children:[n.jsx("label",{className:"block text-[11px] font-bold text-slate-700",children:"পার্সেন্টেজ (%)"}),n.jsxs("div",{className:"relative",children:[n.jsx("input",{type:"number",step:"0.1",min:"0",value:se.percent,onChange:ue=>ce(B,"percent",parseFloat(ue.target.value)||0),className:"w-full rounded-xl border border-slate-300 bg-slate-50/50 px-3 py-2 text-right font-mono text-sm font-bold text-slate-900 focus:bg-white focus:border-teal-600 focus:ring-1 focus:ring-teal-600 focus:outline-none"}),n.jsx("span",{className:"absolute left-3 top-2 text-xs font-bold text-slate-400",children:"%"})]}),n.jsx("div",{className:"flex gap-1",children:[.5,1,1.5].map(ue=>n.jsxs("button",{type:"button",onClick:()=>ce(B,"percent",ue),className:`flex-1 rounded-md py-0.5 text-[10px] font-bold transition cursor-pointer ${se.percent===ue?"bg-teal-700 text-white":"bg-slate-100 text-slate-600 hover:bg-slate-200"}`,children:[ue,"%"]},ue))})]}),n.jsxs("div",{className:"space-y-1.5",children:[n.jsx("label",{className:"block text-[11px] font-bold text-slate-700",children:"ফিক্সড ফি (Tk)"}),n.jsxs("div",{className:"relative",children:[n.jsx("input",{type:"number",step:"1",min:"0",value:se.fixed,onChange:ue=>ce(B,"fixed",parseFloat(ue.target.value)||0),className:"w-full rounded-xl border border-slate-300 bg-slate-50/50 px-3 py-2 text-right font-mono text-sm font-bold text-slate-900 focus:bg-white focus:border-teal-600 focus:ring-1 focus:ring-teal-600 focus:outline-none"}),n.jsx("span",{className:"absolute left-3 top-2 text-xs font-bold text-slate-400",children:"৳"})]}),n.jsx("div",{className:"flex gap-1",children:[0,10,15,20].map(ue=>n.jsx("button",{type:"button",onClick:()=>ce(B,"fixed",ue),className:`flex-1 rounded-md py-0.5 text-[10px] font-bold transition cursor-pointer ${se.fixed===ue?"bg-teal-700 text-white":"bg-slate-100 text-slate-600 hover:bg-slate-200"}`,children:ue},ue))})]})]}),n.jsxs("div",{className:"mt-3 flex items-center justify-between rounded-xl bg-slate-50 border border-slate-200/90 px-3 py-2",children:[n.jsxs("span",{className:"text-[11px] text-slate-600 font-medium",children:[de(H)," ৳ লোনে কল্যাণ ফি:"]}),n.jsxs("span",{className:"font-mono text-sm font-black text-teal-800",children:[de(ie)," ৳"]})]})]},B)})}),n.jsx("div",{className:"rounded-2xl border border-slate-300 bg-slate-50 p-4",children:n.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-3",children:[n.jsxs("div",{children:[n.jsx("span",{className:"font-black text-xs text-slate-900 block",children:"⚙️ অন্যান্য / নতুন প্রোডাক্টের জন্য ডিফল্ট নিয়ম (Default Rule):"}),n.jsx("p",{className:"text-[11px] text-slate-500 mt-0.5",children:"ভবিষ্যতে তালিকায় না থাকা কোনো নতুন ঋণ প্রোডাক্ট যুক্ত হলে স্বয়ংক্রিয়ভাবে এই নিয়ম প্রযোজ্য হবে।"})]}),n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsxs("div",{className:"flex items-center gap-1.5",children:[n.jsx("span",{className:"text-xs font-bold text-slate-600",children:"পার্সেন্টেজ:"}),n.jsx("input",{type:"number",step:"0.1",min:"0",value:A,onChange:B=>b(parseFloat(B.target.value)||0),className:"w-16 rounded-lg border border-slate-300 bg-white px-2 py-1 text-right font-mono text-xs font-bold text-slate-900"}),n.jsx("span",{className:"text-xs font-bold text-slate-500",children:"%"})]}),n.jsxs("div",{className:"flex items-center gap-1.5",children:[n.jsx("span",{className:"text-xs font-bold text-slate-600",children:"ফিক্সড:"}),n.jsx("input",{type:"number",step:"1",min:"0",value:h,onChange:B=>L(parseFloat(B.target.value)||0),className:"w-16 rounded-lg border border-slate-300 bg-white px-2 py-1 text-right font-mono text-xs font-bold text-slate-900"}),n.jsx("span",{className:"text-xs font-bold text-slate-500",children:"৳"})]})]})]})})]}),n.jsxs("div",{className:"flex items-center justify-between border-t bg-slate-50 px-4 sm:px-6 py-3.5 shrink-0",children:[n.jsxs("button",{type:"button",onClick:C,className:"rounded-xl border border-slate-300 bg-white px-3.5 py-2 text-xs font-bold text-slate-700 hover:bg-slate-100 transition cursor-pointer flex items-center gap-1.5",title:"Reset to default settings",children:[n.jsx("span",{children:"🔄"}),n.jsx("span",{children:"ডিফল্ট রিসেট"})]}),n.jsxs("div",{className:"flex items-center gap-2.5",children:[n.jsx("button",{type:"button",onClick:c,className:"rounded-xl border border-slate-300 bg-white px-4 py-2 text-xs sm:text-sm font-bold text-slate-700 hover:bg-slate-100 transition cursor-pointer",children:"বাতিল"}),n.jsxs("button",{type:"button",onClick:ee,className:"rounded-xl bg-teal-700 hover:bg-teal-800 active:bg-teal-900 px-6 py-2 text-xs sm:text-sm font-black text-white shadow-md shadow-teal-700/20 transition cursor-pointer flex items-center gap-1.5",children:[n.jsx("span",{children:"✓"}),n.jsx("span",{children:"সেটিংস সংরক্ষণ করুন"})]})]})]})]})})}function d5({open:l,onClose:o,rules:u,disburseCategories:c,onRulesChanged:d,currentLoanAmount:f=5e4}){const[A,b]=R.useState(""),[h,L]=R.useState(12),[y,g]=R.useState("all"),[H,D]=R.useState([]),[T,Z]=R.useState(!1),[O,G]=R.useState(null),[ce,K]=R.useState(""),[ee,C]=R.useState(12),[V,re]=R.useState("all"),[B,se]=R.useState([]),[ie,te]=R.useState(f>0?f:5e4),[ue,be]=R.useState("");if(!l)return null;const E=["jagoron","agrossor","buniyed","sufolon","mfce"],w=Array.from(new Set([...E,...c.map(x=>x.trim().toLowerCase())])).filter(Boolean),p=x=>{const Q=x.toLowerCase().trim();H.includes(Q)?D(H.filter(Re=>Re!==Q)):D([...H,Q])},N=x=>{const Q=x.toLowerCase().trim();B.includes(Q)?se(B.filter(Re=>Re!==Q)):se([...B,Q])},P=()=>{if(!A.trim()){be("মেয়াদ / সাব-ক্যাটাগরির নাম দিন (যেমন: 1 year / 2 year)");return}const x=Number(h);if(!x||x<=0){be("সঠিক কিস্তি সংখ্যা দিন (যেমন: 12, 18, 24, 46)");return}il({subCategory:A.trim(),installments:x,mode:y,categories:y==="all"?[]:H}),b(""),L(12),g("all"),D([]),Z(!1),be("✓ নতুন কিস্তি রুল সফলভাবে যুক্ত করা হয়েছে!"),d()},W=x=>{G(x.id||0),K(x.subCategory),C(x.installments||12),re(x.mode||"all"),se((x.categories||[]).map(Q=>Q.toLowerCase().trim())),be("")},F=()=>{if(!O||!ce.trim()){be("মেয়াদ / সাব-ক্যাটাগরির নাম দিন");return}const x=Number(ee);if(!x||x<=0){be("সঠিক কিস্তি সংখ্যা দিন");return}il({id:O,subCategory:ce.trim(),installments:x,mode:V,categories:V==="all"?[]:B}),G(null),be("✓ কিস্তি রুল সফলভাবে আপডেট করা হয়েছে!"),d()},U=(x,Q)=>{confirm(`আপনি কি নিশ্চিত যে "${Q}" এর কিস্তি রুলটি মুছে ফেলতে চান?`)&&(YR(x),be(`✓ "${Q}" রুলটি মুছে ফেলা হয়েছে!`),d())},j=()=>{confirm("আপনি কি সকল কিস্তি রুল রিসেট করে স্ট্যান্ডার্ড ডিফল্ট অবস্থায় ফিরিয়ে নিতে চান?")&&(qR(),G(null),Z(!1),be("✓ সকল কিস্তি রুল স্ট্যান্ডার্ড ডিফল্ট অবস্থায় রিসেট করা হয়েছে!"),d())},_=x=>{x==="standard_monthly"?(il({id:1,subCategory:"1 year",installments:12,mode:"all",categories:[]}),il({id:2,subCategory:"1.5 year",installments:18,mode:"all_except",categories:["buniyed","sufolon"]}),il({id:3,subCategory:"2 year",installments:24,mode:"only",categories:["agrossor"]}),be("✓ স্ট্যান্ডার্ড মাসিক কিস্তি প্রিসেট প্রয়োগ করা হয়েছে (১ বছর=১২, ১.৫ বছর=১৮, ২ বছর=২৪)")):x==="weekly_50"?(il({id:Date.now(),subCategory:"1 year (50 kisti)",installments:50,mode:"all",categories:[]}),be("✓ ৫০ কিস্তি সাপ্তাহিক রুল যুক্ত করা হয়েছে (১ বছর = ৫০ কিস্তি)")):x==="weekly_46"&&(il({id:Date.now(),subCategory:"1 year (46 kisti)",installments:46,mode:"all",categories:[]}),be("✓ ৪৬ কিস্তি সাপ্তাহিক রুল যুক্ত করা হয়েছে (১ বছর = ৪৬ কিস্তি)")),d()};return n.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-2 sm:p-4 backdrop-blur-xs animate-in fade-in duration-200",children:n.jsxs("div",{className:"flex h-full sm:h-auto sm:max-h-[94vh] w-full max-w-3xl flex-col rounded-2xl bg-white shadow-2xl overflow-hidden border border-slate-200",children:[n.jsxs("div",{className:"flex items-center justify-between border-b bg-gradient-to-r from-violet-800 via-purple-900 to-slate-900 px-4 sm:px-6 py-3.5 text-white shrink-0",children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/20 text-violet-300 ring-1 ring-violet-400/30 text-lg shadow-inner",children:"🔢"}),n.jsxs("div",{children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("h2",{className:"text-base sm:text-lg font-black tracking-tight text-white",children:"কিস্তি কার্ড রুল সেটিংস (Kisti Rules)"}),n.jsx("span",{className:"rounded-md bg-violet-500/20 px-2 py-0.5 text-[10px] font-bold text-violet-200 ring-1 ring-violet-400/30 uppercase",children:"Installment Settings"})]}),n.jsx("p",{className:"text-xs text-violet-200/80 font-medium",children:"ঋণ মেয়াদের কিস্তি সংখ্যা ও প্রোডাক্ট রুল পরিচালনা করুন (Add / Edit / Delete)"})]})]}),n.jsx("button",{onClick:o,className:"rounded-lg p-1.5 text-violet-300 hover:text-white hover:bg-white/10 transition cursor-pointer text-xl leading-none","aria-label":"Close",children:"✕"})]}),ue&&n.jsxs("div",{className:"bg-emerald-50 border-b border-emerald-200 px-4 py-2 flex items-center justify-between text-xs font-bold text-emerald-900 shrink-0",children:[n.jsx("span",{children:ue}),n.jsx("button",{onClick:()=>be(""),className:"text-emerald-700 hover:text-emerald-950 text-sm px-1 font-bold cursor-pointer",children:"✕"})]}),n.jsxs("div",{className:"border-b bg-gradient-to-b from-violet-50/70 to-slate-50/70 p-3 sm:p-4 shrink-0 space-y-3",children:[n.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-3",children:[n.jsxs("div",{className:"space-y-1.5 flex-1",children:[n.jsx("span",{className:"text-[11px] font-black uppercase tracking-wider text-violet-950 block",children:"⚡ দ্রুত প্রিসেট (Quick Presets):"}),n.jsxs("div",{className:"flex flex-wrap gap-1.5",children:[n.jsxs("button",{type:"button",onClick:()=>_("standard_monthly"),className:"rounded-xl bg-violet-700 hover:bg-violet-800 text-white px-3 py-1.5 text-xs font-bold shadow-xs transition cursor-pointer flex items-center gap-1.5",children:[n.jsx("span",{children:"🌟"}),n.jsx("span",{children:"স্ট্যান্ডার্ড (১২, ১৮, ২৪ কিস্তি)"})]}),n.jsx("button",{type:"button",onClick:()=>_("weekly_50"),className:"rounded-xl bg-white hover:bg-violet-50 border border-violet-300 text-violet-900 px-2.5 py-1.5 text-xs font-bold shadow-2xs transition cursor-pointer",children:"+ ৫০ কিস্তি (১ বছর)"}),n.jsx("button",{type:"button",onClick:()=>_("weekly_46"),className:"rounded-xl bg-white hover:bg-violet-50 border border-violet-300 text-violet-900 px-2.5 py-1.5 text-xs font-bold shadow-2xs transition cursor-pointer",children:"+ ৪৬ কিস্তি (১ বছর)"})]})]}),n.jsxs("div",{className:"rounded-xl border border-violet-200 bg-white p-2.5 shadow-2xs flex items-center gap-2.5 shrink-0",children:[n.jsxs("div",{children:[n.jsx("span",{className:"text-[10px] font-bold text-slate-500 uppercase block",children:"টেস্ট লোন পরিমাণ:"}),n.jsxs("div",{className:"flex items-center gap-1 mt-0.5",children:[n.jsx("input",{type:"number",min:1e3,step:5e3,value:ie,onChange:x=>te(Number(x.target.value)||0),className:"w-24 rounded-lg border border-slate-300 px-2 py-1 text-right font-mono text-sm font-black text-violet-950 focus:border-violet-600 focus:outline-none"}),n.jsx("span",{className:"text-xs font-bold text-slate-600",children:"৳"})]})]}),n.jsx("div",{className:"flex flex-col gap-1",children:[3e4,5e4,1e5].map(x=>n.jsx("button",{type:"button",onClick:()=>te(x),className:`rounded px-1.5 py-0.5 text-[10px] font-bold font-mono transition cursor-pointer ${ie===x?"bg-violet-700 text-white":"bg-slate-100 text-slate-600 hover:bg-slate-200"}`,children:de(x)},x))})]})]}),n.jsxs("div",{className:"flex items-center justify-between text-[11px] bg-violet-100/60 rounded-lg px-3 py-1.5 text-violet-950 border border-violet-200/80",children:[n.jsxs("span",{className:"font-semibold",children:["💡 কিস্তি হিসাবের নিয়ম: ",n.jsx("span",{className:"font-mono font-bold",children:"(মোট ঋণ + SC) ÷ কিস্তি সংখ্যা = প্রতি কিস্তির পরিমাণ"})]}),n.jsxs("span",{className:"hidden sm:inline text-violet-800 font-medium",children:["উদাহরণ: ",de(ie)," ৳ ঋণ ÷ ১২ কিস্তি = ",n.jsxs("b",{className:"font-mono",children:[de(Math.round(ie/12))," ৳ / কিস্তি"]})]})]})]}),n.jsxs("div",{className:"flex-1 overflow-y-auto p-3 sm:p-5 space-y-4",children:[n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsxs("span",{className:"text-xs font-black uppercase tracking-wider text-slate-800 flex items-center gap-1.5",children:[n.jsx("span",{children:"📋"})," সক্রিয় কিস্তি রুলসমূহ:"]}),n.jsxs("span",{className:"rounded-full bg-violet-100 text-violet-800 font-bold px-2 py-0.5 text-xs",children:[u.length," টি"]})]}),!T&&n.jsxs("button",{type:"button",onClick:()=>Z(!0),className:"rounded-xl bg-violet-700 hover:bg-violet-800 active:scale-95 text-white px-3.5 py-1.5 text-xs font-bold transition shadow-xs flex items-center gap-1.5 cursor-pointer",children:[n.jsx("span",{children:"+"}),n.jsx("span",{children:"নতুন কিস্তি রুল যোগ করুন"})]})]}),T&&n.jsxs("div",{className:"rounded-2xl border-2 border-violet-400 bg-violet-50/50 p-4 shadow-sm space-y-3.5 animate-in fade-in duration-150",children:[n.jsxs("div",{className:"flex items-center justify-between border-b border-violet-200 pb-2.5",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-base",children:"✨"}),n.jsx("span",{className:"font-black text-sm text-violet-950",children:"নতুন কিস্তি রুল যুক্ত করুন (Add New Kisti Rule)"})]}),n.jsx("button",{type:"button",onClick:()=>Z(!1),className:"rounded-lg p-1 text-slate-400 hover:text-slate-700 hover:bg-white/60 text-lg cursor-pointer leading-none",children:"✕"})]}),n.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:[n.jsxs("div",{className:"space-y-1",children:[n.jsx("label",{className:"block text-xs font-bold text-slate-800",children:"মেয়াদ / সাব-ক্যাটাগরির নাম (Sub Category):"}),n.jsx("input",{type:"text",list:"subcat-options",value:A,onChange:x=>b(x.target.value),placeholder:"যেমন: 1 year, 1.5 year, 2 year, 6 month",className:"w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm font-bold text-slate-900 focus:border-violet-600 focus:outline-none"}),n.jsxs("datalist",{id:"subcat-options",children:[n.jsx("option",{value:"1 year"}),n.jsx("option",{value:"1.5 year"}),n.jsx("option",{value:"2 year"}),n.jsx("option",{value:"6 month"}),n.jsx("option",{value:"3 year"}),n.jsx("option",{value:"50 week"}),n.jsx("option",{value:"46 week"})]}),n.jsx("div",{className:"flex flex-wrap gap-1 pt-1",children:["1 year","1.5 year","2 year","6 month"].map(x=>n.jsx("button",{type:"button",onClick:()=>b(x),className:"rounded bg-white hover:bg-violet-100 border border-slate-200 px-2 py-0.5 text-[10px] font-bold text-slate-700 cursor-pointer",children:x},x))})]}),n.jsxs("div",{className:"space-y-1",children:[n.jsx("label",{className:"block text-xs font-bold text-slate-800",children:"কিস্তি সংখ্যা (Installments):"}),n.jsx("input",{type:"number",min:"1",value:h,onChange:x=>L(x.target.value===""?"":Number(x.target.value)),placeholder:"যেমন: 12",className:"w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm font-mono font-bold text-violet-950 focus:border-violet-600 focus:outline-none"}),n.jsx("div",{className:"flex flex-wrap gap-1 pt-1",children:[12,18,24,46,50].map(x=>n.jsxs("button",{type:"button",onClick:()=>L(x),className:"rounded bg-white hover:bg-violet-100 border border-slate-200 px-2 py-0.5 text-[10px] font-bold font-mono text-slate-700 cursor-pointer",children:[x," কিস্তি"]},x))})]})]}),n.jsxs("div",{className:"space-y-1.5",children:[n.jsx("label",{className:"block text-xs font-bold text-slate-800",children:"প্রোডাক্ট প্রযোজ্যতা (Rule Mode):"}),n.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-2",children:[n.jsxs("label",{className:`flex items-center gap-2 rounded-xl border p-2.5 text-xs font-bold cursor-pointer transition ${y==="all"?"bg-violet-600 text-white border-violet-600 shadow-2xs":"bg-white text-slate-700 border-slate-300 hover:bg-slate-50"}`,children:[n.jsx("input",{type:"radio",name:"newRuleMode",value:"all",checked:y==="all",onChange:()=>g("all"),className:"sr-only"}),n.jsx("span",{children:"🌐 সকল প্রোডাক্টে প্রযোজ্য"})]}),n.jsxs("label",{className:`flex items-center gap-2 rounded-xl border p-2.5 text-xs font-bold cursor-pointer transition ${y==="only"?"bg-violet-600 text-white border-violet-600 shadow-2xs":"bg-white text-slate-700 border-slate-300 hover:bg-slate-50"}`,children:[n.jsx("input",{type:"radio",name:"newRuleMode",value:"only",checked:y==="only",onChange:()=>g("only"),className:"sr-only"}),n.jsx("span",{children:"🎯 নির্দিষ্ট প্রোডাক্টে প্রযোজ্য"})]}),n.jsxs("label",{className:`flex items-center gap-2 rounded-xl border p-2.5 text-xs font-bold cursor-pointer transition ${y==="all_except"?"bg-violet-600 text-white border-violet-600 shadow-2xs":"bg-white text-slate-700 border-slate-300 hover:bg-slate-50"}`,children:[n.jsx("input",{type:"radio",name:"newRuleMode",value:"all_except",checked:y==="all_except",onChange:()=>g("all_except"),className:"sr-only"}),n.jsx("span",{children:"🚫 নির্দিষ্ট প্রোডাক্ট ব্যতীত"})]})]})]}),y!=="all"&&n.jsxs("div",{className:"rounded-xl bg-white border border-violet-200 p-3 space-y-2",children:[n.jsx("span",{className:"block text-[11px] font-black uppercase tracking-wider text-slate-700",children:y==="only"?"প্রযোজ্য প্রোডাক্ট নির্বাচন করুন (Select Products):":"বাদ দেওয়ার জন্য প্রোডাক্ট নির্বাচন করুন (Exclude Products):"}),n.jsx("div",{className:"flex flex-wrap gap-1.5",children:w.map(x=>{const Q=H.includes(x.toLowerCase().trim());return n.jsxs("button",{type:"button",onClick:()=>p(x),className:`rounded-lg px-2.5 py-1 text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${Q?"bg-violet-700 text-white shadow-2xs ring-1 ring-violet-500":"bg-slate-100 text-slate-700 hover:bg-slate-200"}`,children:[n.jsx("span",{children:Q?"✓":"+"}),n.jsx("span",{children:ft(x)})]},x)})})]}),n.jsxs("div",{className:"flex items-center justify-end gap-2 pt-2 border-t border-violet-200",children:[n.jsx("button",{type:"button",onClick:()=>Z(!1),className:"rounded-xl border border-slate-300 bg-white px-3.5 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-100 transition cursor-pointer",children:"বাতিল"}),n.jsxs("button",{type:"button",onClick:P,className:"rounded-xl bg-violet-700 hover:bg-violet-800 text-white px-5 py-1.5 text-xs font-black shadow-sm transition cursor-pointer flex items-center gap-1.5",children:[n.jsx("span",{children:"✓"}),n.jsx("span",{children:"রুল সংরক্ষণ করুন (Add Rule)"})]})]})]}),n.jsx("div",{className:"space-y-2.5",children:u.length===0?n.jsxs("div",{className:"rounded-2xl border border-dashed border-slate-300 p-8 text-center bg-slate-50",children:[n.jsx("p",{className:"text-sm font-bold text-slate-500",children:"কোনো কিস্তি রুল পাওয়া যায়নি!"}),n.jsx("button",{type:"button",onClick:j,className:"mt-2 text-xs font-bold text-violet-700 hover:underline cursor-pointer",children:"স্ট্যান্ডার্ড ডিফল্ট রুল ফিরিয়ে আনুন"})]}):u.map(x=>{const Q=O===x.id,Re=x.installments>0?Math.round(ie/x.installments):0;return n.jsx("div",{className:"rounded-2xl border border-slate-200 bg-white p-3.5 shadow-xs hover:border-violet-300 transition",children:Q?n.jsxs("div",{className:"space-y-3 bg-violet-50/70 p-3.5 rounded-xl border border-violet-300",children:[n.jsxs("div",{className:"flex items-center justify-between border-b border-violet-200 pb-2",children:[n.jsxs("span",{className:"text-xs font-black text-violet-950 uppercase tracking-wider flex items-center gap-1.5",children:[n.jsx("span",{children:"✏️"})," কিস্তি রুল সম্পাদনা (Edit Rule)"]}),n.jsxs("span",{className:"text-[10px] font-mono text-slate-500",children:["ID: ",x.id]})]}),n.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2.5",children:[n.jsxs("div",{children:[n.jsx("label",{className:"block text-[11px] font-bold text-slate-800 mb-1",children:"মেয়াদ / সাব-ক্যাটাগরির নাম:"}),n.jsx("input",{type:"text",value:ce,onChange:ge=>K(ge.target.value),className:"w-full rounded-lg border border-slate-300 bg-white px-2.5 py-1.5 text-xs font-bold font-mono text-slate-900 focus:border-violet-600 focus:outline-none"})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-[11px] font-bold text-slate-800 mb-1",children:"কিস্তি সংখ্যা (Installments):"}),n.jsx("input",{type:"number",min:"1",value:ee,onChange:ge=>C(ge.target.value===""?"":Number(ge.target.value)),className:"w-full rounded-lg border border-slate-300 bg-white px-2.5 py-1.5 text-xs font-bold font-mono text-violet-950 focus:border-violet-600 focus:outline-none"})]})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-[11px] font-bold text-slate-800 mb-1",children:"প্রোডাক্ট প্রযোজ্যতা (Rule Mode):"}),n.jsxs("select",{value:V,onChange:ge=>re(ge.target.value),className:"w-full rounded-lg border border-slate-300 bg-white px-2.5 py-1.5 text-xs font-bold text-slate-800 focus:border-violet-600 focus:outline-none",children:[n.jsx("option",{value:"all",children:"🌐 সকল প্রোডাক্টে প্রযোজ্য (All Categories)"}),n.jsx("option",{value:"only",children:"🎯 শুধুমাত্র নির্দিষ্ট প্রোডাক্টে (Only in...)"}),n.jsx("option",{value:"all_except",children:"🚫 নির্দিষ্ট প্রোডাক্ট ব্যতীত (All Except...)"})]})]}),V!=="all"&&n.jsxs("div",{className:"rounded-lg bg-white border border-violet-200 p-2.5 space-y-1.5",children:[n.jsx("span",{className:"block text-[10px] font-bold text-slate-600 uppercase",children:V==="only"?"প্রযোজ্য প্রোডাক্ট নির্বাচন করুন:":"বাদ দেওয়া প্রোডাক্ট নির্বাচন করুন:"}),n.jsx("div",{className:"flex flex-wrap gap-1",children:w.map(ge=>{const Ne=B.includes(ge.toLowerCase().trim());return n.jsxs("button",{type:"button",onClick:()=>N(ge),className:`rounded px-2 py-0.5 text-[11px] font-bold transition cursor-pointer flex items-center gap-1 ${Ne?"bg-violet-700 text-white":"bg-slate-100 text-slate-600 hover:bg-slate-200"}`,children:[n.jsx("span",{children:Ne?"✓":"+"}),n.jsx("span",{children:ft(ge)})]},ge)})})]}),n.jsxs("div",{className:"flex items-center justify-end gap-2 pt-2 border-t border-violet-200",children:[n.jsx("button",{type:"button",onClick:()=>G(null),className:"rounded-lg border border-slate-300 bg-white px-3 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition cursor-pointer",children:"বাতিল"}),n.jsx("button",{type:"button",onClick:F,className:"rounded-lg bg-violet-700 hover:bg-violet-800 text-white px-4 py-1 text-xs font-bold shadow-xs transition cursor-pointer",children:"✓ সংরক্ষণ করুন (Save)"})]})]}):n.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-3",children:[n.jsxs("div",{className:"space-y-1",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"font-black text-sm text-slate-900 font-mono",children:x.subCategory}),n.jsxs("span",{className:"rounded-full bg-violet-100 text-violet-900 border border-violet-200 px-2.5 py-0.5 text-xs font-black",children:[x.installments," কিস্তি (Installments)"]})]}),n.jsxs("div",{className:"flex items-center gap-2 text-xs",children:[x.mode==="all"&&n.jsx("span",{className:"rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200 px-2 py-0.5 font-bold",children:"✓ সকল প্রোডাক্টে অনুমোদিত"}),x.mode==="only"&&n.jsxs("span",{className:"rounded-md bg-blue-50 text-blue-800 border border-blue-200 px-2 py-0.5 font-bold",children:["🎯 শুধুমাত্র:"," ",x.categories&&x.categories.length>0?x.categories.map(ge=>ft(ge)).join(", "):"কোনোটি নির্বাচিত নেই"]}),x.mode==="all_except"&&n.jsxs("span",{className:"rounded-md bg-amber-50 text-amber-800 border border-amber-200 px-2 py-0.5 font-bold",children:["🚫 ব্যতীত:"," ",x.categories&&x.categories.length>0?x.categories.map(ge=>ft(ge)).join(", "):"কোনোটি নয়"]})]})]}),n.jsxs("div",{className:"flex items-center justify-between sm:justify-end gap-3 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100",children:[n.jsxs("div",{className:"text-right",children:[n.jsxs("span",{className:"text-[10px] text-slate-400 font-bold block",children:[de(ie)," ৳ লোনে কিস্তি:"]}),n.jsxs("span",{className:"font-mono text-sm font-black text-violet-950",children:[de(Re)," ৳"]})]}),n.jsxs("div",{className:"flex items-center gap-1.5 shrink-0",children:[n.jsx("button",{type:"button",onClick:()=>W(x),className:"rounded-lg bg-blue-50 hover:bg-blue-600 text-blue-700 hover:text-white border border-blue-200 px-2.5 py-1 text-xs font-bold transition shadow-2xs cursor-pointer",title:"Edit this rule",children:"Edit"}),n.jsx("button",{type:"button",onClick:()=>U(x.id,x.subCategory),className:"rounded-lg bg-rose-50 hover:bg-rose-600 text-rose-700 hover:text-white border border-rose-200 px-2 py-1 text-xs font-bold transition shadow-2xs cursor-pointer",title:"Delete this rule",children:"Delete"})]})]})]})},x.id||x.subCategory)})})]}),n.jsxs("div",{className:"flex items-center justify-between border-t bg-slate-50 px-4 sm:px-6 py-3.5 shrink-0",children:[n.jsxs("button",{type:"button",onClick:j,className:"rounded-xl border border-slate-300 bg-white px-3.5 py-2 text-xs font-bold text-slate-700 hover:bg-slate-100 transition cursor-pointer flex items-center gap-1.5",title:"Reset to default rules",children:[n.jsx("span",{children:"🔄"}),n.jsx("span",{children:"ডিফল্ট রিসেট"})]}),n.jsx("button",{type:"button",onClick:o,className:"rounded-xl bg-slate-800 hover:bg-slate-900 active:bg-black px-6 py-2 text-xs sm:text-sm font-bold text-white transition cursor-pointer",children:"বন্ধ করুন (Close)"})]})]})})}function m5({selectedDate:l}){const[o,u]=R.useState([]),[c,d]=R.useState(!1),f=()=>{d(!0),window.setTimeout(()=>d(!1),900)},[A,b]=R.useState([]),[h,L]=R.useState([]),[y,g]=R.useState(!1),[H,D]=R.useState([]),[T,Z]=R.useState(!1),[O,G]=R.useState([]),[ce,K]=R.useState(!1),[ee,C]=R.useState(!1),[V,re]=R.useState(!1),[B,se]=R.useState(Wd()),[ie,te]=R.useState(!1),[ue,be]=R.useState("all"),[E,w]=R.useState(l),[p,N]=R.useState(l),[P,W]=R.useState(null),[F,U]=R.useState({category:"",subCategory:"",amount:0,serviceCharge:0,description:"",txDate:l}),[j,_]=R.useState(null),[x,Q]=R.useState(!1),Re=R.useMemo(()=>x&&F.description.trim()?r5(F.description):[],[x,F.description]),ge=me=>{U(Ie=>({...Ie,description:me.insert})),Q(!1)},[Ne,He]=R.useState(""),pe=()=>{const me=ln(),Ie=E<=p?E:p,ut=E<=p?p:E;u(me.filter(dt=>dt.type==="payment"&&dt.txDate>=Ie&&dt.txDate<=ut)),b(xa("disburse")),L(xa("expense")),D(Pm()),G(oo()),se(Wd())};R.useEffect(()=>{w(l),N(l),pe(),U(ut=>({...ut,txDate:l}));const me=()=>se(Wd()),Ie=()=>pe();return window.addEventListener("kallyan-rule-changed",me),window.addEventListener("tx-changed",Ie),window.addEventListener("categories-changed",Ie),()=>{window.removeEventListener("kallyan-rule-changed",me),window.removeEventListener("tx-changed",Ie),window.removeEventListener("categories-changed",Ie)}},[l]),R.useEffect(()=>{pe()},[E,p]);const he=me=>{const Ie=me.trim().toLowerCase();return A.some(ut=>ut.name.toLowerCase()===Ie)},ae=he(F.category),ye=F.category.trim().toLowerCase().includes("fund payment"),ze=Vi(F.category,O,A.map(me=>me.name)),xt=ae?Rh(F.amount,F.category,F.subCategory,H):0,ht=yb(F.category,B),Xe=ae?Nb(F.amount,F.category,B):0,ve=F.amount+xt,it=R2(F.subCategory,O,F.category),It=ae&&it?Math.round(ve/it):0,at=H.find(me=>me.category===F.category.trim().toLowerCase()&&me.subCategory===F.subCategory.trim().toLowerCase()),Bt=at?Number(at.ratePer100):0,Ae=()=>{if(Oe(F.txDate)){f();return}if(!Gt(F.txDate)){alert(`⚠️ এই তারিখের (${F.txDate}) কর্মদিবস এখনও শুরু (Day Open) করা হয়নি। কোনো এন্ট্রি করার পূর্বে দিনটি Day Open করুন।`),window.dispatchEvent(new CustomEvent("open-day-open-modal"));return}const me=Rt(F.txDate,l);if(me.blocked){alert(`⚠️ ${me.reason||"দুটি কর্মদিবসের মধ্যবর্তী বন্ধের দিনে কোনো নতুন এন্ট্রি করা যাবে না।"}`);return}if(!F.category.trim())return He("Category required");if(!F.amount||F.amount<=0)return He("Amount must be greater than 0");Qb({type:"payment",category:F.category.trim().toLowerCase(),subCategory:ae||ye?F.subCategory:"",amount:String(F.amount),serviceCharge:String(xt),description:F.description||"",txDate:F.txDate}),tc(F.description),U({category:"",subCategory:"",amount:0,serviceCharge:0,description:"",txDate:l}),He("Payment saved successfully!"),pe()},Me=()=>{if(!j||!j.id)return;if(Oe(j.txDate)){f();return}const me=Rt(j.txDate,l);if(me.blocked){alert(`⚠️ ${me.reason||"দুটি কর্মদিবসের মধ্যবর্তী বন্ধের দিনে কোনো পরিবর্তন করা যাবে না।"}`);return}const Ie=he(j.category),ut=(j.category||"").trim().toLowerCase().includes("fund payment"),dt=Ie?Rh(j.amount,j.category,j.subCategory,H):0;$b({id:j.id,type:"payment",category:j.category.trim().toLowerCase(),subCategory:Ie||ut?j.subCategory:"",amount:String(j.amount),serviceCharge:String(dt),description:j.description||"",txDate:j.txDate}),tc(j.description),_(null),pe()},ct=()=>{if(P!==null){const me=o.find(Ie=>Ie.id===P);if(me&&Oe(me.txDate)){f(),W(null);return}Wb(P),W(null),pe()}},kt=ue==="all"?o:o.filter(me=>me.category.toLowerCase().trim()===ue.toLowerCase().trim()),qt=kt.reduce((me,Ie)=>me+Number(Ie.amount),0),en=o.reduce((me,Ie)=>me+Number(Ie.amount),0),rn=Array.from(new Set(o.map(me=>me.category.toLowerCase().trim()).filter(Boolean)));return n.jsxs("div",{className:"space-y-6",children:[n.jsxs("div",{id:"payment-form-card",className:"rounded-2xl border-t-4 border-red-500 bg-white p-5 sm:p-6 shadow-sm border border-slate-200 transition-all",children:[n.jsxs("div",{className:"flex items-center justify-between mb-4",children:[n.jsxs("h1",{className:"text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2",children:[n.jsx("span",{children:"📤"}),n.jsx("span",{children:"Payment Entry"}),Oe(F.txDate)&&n.jsx("span",{className:`shrink-0 rounded-lg border border-rose-300 bg-rose-100 px-2 py-0.5 text-[10px] font-black text-rose-700 ${c?"lock-pulse":""}`,title:"দিন সমাপ্ত (Day Closed) — হিসাব লক করা আছে",children:"🔒 Day Closed"})]}),n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("button",{type:"button",onClick:()=>re(!0),title:"Denomination — নোট গুনে ক্যাশ মেলান (রিপোর্ট উইন্ডো)","aria-label":"Denomination — Check Diff",className:"flex h-8 w-9 shrink-0 cursor-pointer items-center justify-center rounded-xl border border-amber-600 bg-amber-500 text-base leading-none shadow-xs hover:bg-amber-600 sm:text-lg",children:"💰"}),n.jsx("span",{className:"text-xs font-mono font-bold text-slate-600 bg-slate-100 px-2.5 py-1 rounded border border-slate-200",children:F.txDate})]})]}),!Oe(F.txDate)&&Rt(F.txDate,l).blocked&&n.jsxs("div",{className:"mb-4 rounded-xl border border-rose-400 bg-rose-50 p-3 text-xs sm:text-sm font-bold text-rose-900 flex items-start gap-2 shadow-xs",children:[n.jsx("span",{className:"text-base shrink-0",children:"🚫"}),n.jsxs("div",{children:[n.jsx("span",{className:"block font-black text-rose-950",children:"এই তারিখটি ব্লক (কর্মদিবসের মধ্যবর্তী বন্ধের দিন)"}),n.jsx("span",{className:"text-xs text-rose-800 font-normal mt-0.5 block",children:Rt(F.txDate,l).reason})]})]}),n.jsxs("div",{className:"grid gap-4 md:grid-cols-2",children:[n.jsxs("div",{className:"grid grid-cols-2 items-end gap-3 md:grid-cols-3 md:col-span-2",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"mb-1 flex items-center justify-between",children:[n.jsx("label",{className:"text-xs font-bold text-slate-700",children:"Category"}),n.jsx("button",{type:"button",onClick:()=>g(!0),className:"text-xs font-bold text-blue-600 hover:underline cursor-pointer",children:"⚙ Manage"})]}),n.jsx(Xh,{value:F.category,disabled:Oe(F.txDate),onChange:me=>U({...F,category:me,subCategory:""}),disburseCats:A,expenseCats:h,onManageClick:()=>g(!0)})]}),n.jsxs("div",{children:[n.jsxs("div",{className:"mb-1 flex items-center justify-between gap-1",children:[n.jsx("label",{className:"text-xs font-bold text-slate-700",children:ae?"Disburse Amount":"Expense Amount"}),n.jsx("button",{type:"button",disabled:Oe(F.txDate),onClick:()=>{if(Oe(F.txDate)){f();return}C(!0)},className:"flex items-center gap-1 rounded-lg bg-amber-500 hover:bg-amber-600 px-2 py-0.5 text-[10px] sm:px-2.5 sm:py-1 sm:text-xs font-bold text-slate-950 shadow-xs cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed shrink-0 whitespace-nowrap",children:"💳 Denomination"})]}),n.jsx("input",{type:"number",min:0,step:"1",disabled:Oe(F.txDate),value:F.amount||"",placeholder:"",onChange:me=>U({...F,amount:Math.round(Number(me.target.value)||0)}),className:`w-full h-[42px] rounded-lg border px-3 py-2 text-right font-mono text-lg font-bold focus:outline-none ${Oe(F.txDate)?"border-slate-300 bg-slate-100 text-slate-500 cursor-not-allowed opacity-60":"border-slate-300 bg-orange-50 hover:bg-orange-100/70 focus:border-blue-500"}`})]}),(ae||ye)&&n.jsxs("div",{className:"md:col-start-1 md:row-start-2",children:[n.jsxs("div",{className:"mb-1 flex items-center justify-between gap-2",children:[n.jsx("label",{className:"text-xs font-bold text-slate-700",children:"Sub Category"}),n.jsxs("div",{className:"flex items-center gap-2",children:[F.subCategory?n.jsx("button",{type:"button",disabled:Oe(F.txDate),onClick:()=>{if(Oe(F.txDate)){f();return}U({...F,subCategory:""})},title:"সাব-ক্যাটাগরি মুছে ফেলুন (ডিলিট)",className:"cursor-pointer text-[11px] font-black text-rose-600 hover:underline disabled:cursor-not-allowed disabled:opacity-40",children:"✕ মুছুন"}):null,ae?n.jsx("button",{type:"button",onClick:()=>K(!0),className:"text-xs font-bold text-blue-600 hover:underline flex items-center gap-1 cursor-pointer",children:"⚙ Rules"}):n.jsx("button",{type:"button",onClick:()=>g(!0),title:"Disburse Category যোগ/এডিট/ডিলিট — সেই তালিকা থেকেই এই সাব-ক্যাটাগরি আসে",className:"text-xs font-bold text-blue-600 hover:underline flex items-center gap-1 cursor-pointer",children:"⚙ Manage"})]})]}),n.jsx(na,{value:F.subCategory,onChange:me=>U({...F,subCategory:me}),options:F.subCategory&&!ze.includes(F.subCategory)?[...ze,F.subCategory]:ze,placeholder:"-- Select Sub Category --",disabled:Oe(F.txDate),className:"w-full h-[42px] rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-bold text-slate-800 focus:border-blue-500 focus:outline-none cursor-pointer",noKeyboardOnMobile:!0})]}),n.jsxs("div",{className:`${ae||ye?"":"col-span-2 md:col-span-1"} md:col-start-3 md:row-start-1 relative`,children:[n.jsxs("label",{className:"mb-1 block text-xs font-bold text-slate-700",children:["Description ",n.jsx("span",{className:"text-[10px] font-black text-amber-600",children:"💡 টাইপ করলেই সাজেশন"})]}),n.jsx("input",{type:"text",disabled:Oe(F.txDate),value:F.description,onChange:me=>U({...F,description:me.target.value}),onFocus:()=>Q(!0),onBlur:()=>setTimeout(()=>Q(!1),160),onKeyDown:me=>{me.key==="Escape"&&Q(!1),me.key==="Enter"&&Re.length&&(me.preventDefault(),ge(Re[0]))},placeholder:"কোড / নাম / মেম্বার কোড লিখুন…",autoComplete:"off",className:`w-full h-[42px] rounded-lg border px-3 py-2 text-sm font-semibold text-slate-800 focus:outline-none ${Oe(F.txDate)?"border-slate-300 bg-slate-100 text-slate-500 cursor-not-allowed opacity-60":"border-slate-300 bg-orange-50 focus:border-blue-500"}`}),x&&Re.length>0&&n.jsx("div",{className:"absolute left-0 right-0 top-full z-50 mt-1 max-h-56 overflow-y-auto rounded-xl border border-slate-300 bg-white shadow-2xl",children:Re.map((me,Ie)=>n.jsxs("button",{type:"button",onMouseDown:ut=>{ut.preventDefault(),ge(me)},className:`flex w-full items-start gap-2 px-3 py-2 text-left transition cursor-pointer hover:bg-amber-50 ${Ie>0?"border-t border-slate-100":""}`,children:[n.jsx("span",{className:"mt-0.5 text-sm leading-none",children:me.icon}),n.jsxs("span",{className:"min-w-0 flex-1",children:[n.jsx("span",{className:"block truncate text-[13px] font-black text-slate-800",children:me.title}),n.jsx("span",{className:"block truncate text-[10px] font-bold text-slate-500",children:me.sub})]})]},Ie))})]})]}),n.jsxs("div",{className:"flex gap-2.5 md:col-span-2 pt-1",children:[n.jsx("button",{onClick:Ae,disabled:Oe(F.txDate)||!Gt(F.txDate)||Rt(F.txDate,l).blocked,className:"min-h-[44px] rounded-xl bg-red-600 px-6 py-2.5 font-bold text-sm text-white shadow hover:bg-red-700 active:scale-98 transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",children:Oe(F.txDate)?"🔒 দিন সমাপ্ত (লকড)":Rt(F.txDate,l).blocked?"🚫 তারিখ ব্লকড":Gt(F.txDate)?"Save Payment":"☀️ দিন শুরু (Day Open) করুন"}),n.jsx("button",{onClick:()=>{U({category:"",subCategory:"",amount:0,serviceCharge:0,description:"",txDate:l}),He("")},disabled:Oe(F.txDate)||!Gt(F.txDate)||Rt(F.txDate,l).blocked,className:"min-h-[44px] rounded-xl bg-slate-500 px-6 py-2.5 font-bold text-sm text-white hover:bg-slate-600 active:scale-98 transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",children:"Reset"})]}),ae?n.jsxs("div",{className:"grid grid-cols-2 gap-2 sm:grid-cols-4 md:col-span-2",children:[n.jsxs("div",{className:"rounded-xl bg-amber-500 p-2.5 text-white shadow-xs",children:[n.jsxs("div",{className:"flex items-center justify-between text-xs font-semibold",children:[n.jsxs("span",{children:["SC ",Bt?`(${Bt}/100)`:""]}),n.jsx("button",{type:"button",onClick:()=>Z(!0),className:"flex h-5 w-5 items-center justify-center rounded-full bg-white/30 text-xs cursor-pointer",children:"⚙"})]}),n.jsx("div",{className:"mt-1 font-mono text-base sm:text-lg font-bold text-right",children:de(xt)})]}),n.jsxs("div",{className:"rounded-xl bg-violet-600 p-2.5 text-white shadow-xs",children:[n.jsxs("div",{className:"flex items-center justify-between text-xs font-semibold",children:[n.jsxs("span",{children:["Kisti ",it?`(${it})`:""]}),n.jsx("button",{type:"button",onClick:()=>K(!0),className:"flex h-5 w-5 items-center justify-center rounded-full bg-white/30 text-xs cursor-pointer hover:bg-white/40 active:scale-95 transition",title:"কিস্তি রুল সেটিংস (Kisti / Installment Rules)",children:"⚙"})]}),n.jsx("div",{className:"mt-1 font-mono text-base sm:text-lg font-bold text-right",children:de(It)})]}),n.jsxs("div",{className:"rounded-xl bg-gradient-to-br from-teal-600 to-emerald-700 p-2.5 text-white shadow-sm ring-1 ring-teal-400/40",children:[n.jsxs("div",{className:"flex items-center justify-between text-xs font-bold",children:[n.jsxs("span",{className:"flex items-center gap-1 truncate pr-1",children:[n.jsx("span",{children:"🤝"}),n.jsx("span",{children:"Kallyan Fund"})]}),n.jsx("button",{type:"button",onClick:()=>te(!0),className:"flex items-center gap-1 rounded-md bg-white/20 hover:bg-white/30 px-1.5 py-0.5 text-[10px] font-bold text-white transition cursor-pointer",title:"Change Kallyan Fund Settings",children:n.jsx("span",{children:"⚙️"})})]}),n.jsxs("div",{className:"mt-1 flex items-baseline justify-between",children:[n.jsxs("span",{className:"text-[10px] font-semibold text-teal-100 truncate",children:[ht.percent,"% + ",ht.fixed,"৳"]}),n.jsx("span",{className:"font-mono text-base sm:text-lg font-black text-right",children:de(Xe)})]})]}),n.jsxs("div",{className:"rounded-xl bg-blue-700 p-2.5 text-white shadow-xs",children:[n.jsx("div",{className:"text-xs font-semibold",children:"Total (Amount + SC)"}),n.jsx("div",{className:"mt-1 font-mono text-base sm:text-lg font-bold text-right",children:de(ve)})]})]}):n.jsx("div",{className:"grid grid-cols-1 md:col-span-2",children:n.jsxs("div",{className:"flex items-center justify-between rounded-xl bg-slate-800 p-3 text-white",children:[n.jsx("span",{className:"text-xs font-bold uppercase tracking-wider text-slate-300",children:"Total Expense"}),n.jsx("span",{className:"font-mono text-xl font-black",children:de(F.amount||0)})]})})]}),Ne&&n.jsx("p",{className:"mt-2 text-xs font-bold text-emerald-700",children:Ne})]}),n.jsxs("div",{className:"overflow-hidden rounded-2xl bg-white shadow-sm border border-slate-200",children:[n.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b px-5 py-3 bg-slate-50",children:[n.jsxs("div",{className:"font-bold text-slate-800 text-sm sm:text-base",children:["Saved Payment Entries (",kt.length,"/",o.length,")"]}),n.jsxs("div",{className:"grid w-full grid-cols-2 items-center gap-x-2 gap-y-1 sm:w-auto sm:max-w-md sm:flex sm:flex-wrap",children:[n.jsxs("div",{className:"flex min-w-0 items-center gap-1.5",children:[n.jsx("label",{className:"shrink-0 text-xs font-bold text-slate-600",children:"From:"}),n.jsx("div",{className:"min-w-0 flex-1",children:n.jsx(bn,{value:E,onChange:me=>w(me),className:"w-full px-2 py-1 text-xs sm:text-sm bg-orange-50"})})]}),n.jsxs("div",{className:"flex min-w-0 items-center gap-1.5",children:[n.jsx("label",{className:"shrink-0 text-xs font-bold text-slate-600",children:"To:"}),n.jsx("div",{className:"min-w-0 flex-1",children:n.jsx(bn,{value:p,onChange:me=>N(me),className:"w-full px-2 py-1 text-xs sm:text-sm bg-orange-50"})})]})]}),n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("label",{className:"text-xs font-bold text-slate-600",children:"Category Filter:"}),n.jsx(na,{value:ue,onChange:me=>be(me),noKeyboardOnMobile:!0,options:[{value:"all",label:`All Categories (${o.length})`},...rn.map(me=>({value:me,label:ft(me)}))],placeholder:"All Categories",className:"rounded-lg border border-slate-300 bg-orange-50 px-3 py-1.5 text-xs sm:text-sm font-semibold text-slate-800 shadow-2xs focus:border-blue-500 focus:outline-none cursor-pointer w-44 sm:w-52"})]})]}),n.jsx("div",{className:"overflow-x-auto max-h-[60vh] sm:max-h-[68vh] overflow-y-auto",children:n.jsxs("table",{className:"w-full text-xs sm:text-sm",children:[n.jsx("thead",{className:"sticky top-0 bg-slate-800 text-left text-white z-10",children:n.jsxs("tr",{children:[n.jsx("th",{className:"px-3.5 py-2.5",children:"#"}),n.jsx("th",{className:"px-3.5 py-2.5",children:"Category"}),n.jsx("th",{className:"px-3.5 py-2.5",children:"Sub Cat."}),n.jsx("th",{className:"px-3.5 py-2.5",children:"Description"}),n.jsx("th",{className:"px-3.5 py-2.5 text-right",children:"Disburse/Expense"}),n.jsx("th",{className:"px-3.5 py-2.5 text-center",children:"Action"})]})}),n.jsx("tbody",{children:kt.length===0?n.jsx("tr",{children:n.jsx("td",{colSpan:6,className:"px-3 py-6 text-center text-slate-400",children:ue==="all"?`No payment entries on ${l}`:`No entries for category "${ft(ue)}"`})}):kt.map((me,Ie)=>n.jsxs("tr",{className:"border-b hover:bg-slate-50",children:[n.jsx("td",{className:"px-3.5 py-2 text-slate-500 font-mono",children:Ie+1}),n.jsx("td",{className:"px-3.5 py-2 font-bold text-slate-800",children:ft(me.category)}),n.jsx("td",{className:"px-3.5 py-2 text-slate-600 text-xs",children:me.subCategory||"-"}),n.jsx("td",{className:"px-3.5 py-2 text-slate-600 text-xs",children:me.description||"-"}),n.jsx("td",{className:"px-3.5 py-2 text-right font-mono font-black text-slate-900",children:de(me.amount)}),n.jsx("td",{className:"px-3.5 py-2 text-center whitespace-nowrap",children:n.jsxs("div",{className:"flex items-center justify-center gap-2",children:[n.jsx("button",{type:"button",disabled:Oe(me.txDate),onClick:()=>{if(Oe(me.txDate)){f();return}_({id:me.id,category:me.category,subCategory:me.subCategory??"",amount:Number(me.amount),serviceCharge:Number(me.serviceCharge||0),description:me.description??"",txDate:me.txDate})},className:`min-h-[36px] rounded-lg px-3 py-1.5 text-xs font-bold text-white transition ${Oe(me.txDate)?"bg-slate-400 cursor-not-allowed opacity-50":"bg-blue-600 hover:bg-blue-700 cursor-pointer"}`,title:Oe(me.txDate)?"দিন সমাপ্ত (Locked) - উপরের Working-Day বার থেকে Re-open করুন":"Edit",children:Oe(me.txDate)?"🔒 Edit":"Edit"}),n.jsx("button",{type:"button",disabled:Oe(me.txDate),onClick:()=>{if(Oe(me.txDate)){f();return}W(me.id)},className:`min-h-[36px] rounded-lg px-3 py-1.5 text-xs font-bold text-white transition ${Oe(me.txDate)?"bg-slate-400 cursor-not-allowed opacity-50":"bg-rose-600 hover:bg-rose-700 cursor-pointer"}`,title:Oe(me.txDate)?"দিন সমাপ্ত (Locked) - উপরের Working-Day বার থেকে Re-open করুন":"Delete",children:Oe(me.txDate)?"🔒 Del":"Delete"})]})})]},me.id))}),o.length>0&&n.jsx("tfoot",{className:"sticky bottom-0 bg-slate-100 font-bold border-t-2 border-slate-300 z-10 shadow-inner",children:n.jsxs("tr",{children:[n.jsx("td",{colSpan:4,className:"px-3.5 py-2.5 text-right font-bold text-slate-800",children:ue==="all"?"Total Payment":`Subtotal (${ft(ue)})`}),n.jsx("td",{className:"px-3.5 py-2.5 text-right font-mono font-black text-slate-900",children:de(ue==="all"?en:qt)}),n.jsx("td",{})]})})]})})]}),P!==null&&n.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4",children:n.jsxs("div",{className:"w-full max-w-sm rounded-2xl bg-white p-5 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95",children:[n.jsxs("h3",{className:"text-base font-bold text-slate-900 flex items-center gap-2",children:[n.jsx("span",{className:"text-rose-600 text-lg",children:"⚠️"}),n.jsx("span",{children:"Confirm Delete"})]}),n.jsx("p",{className:"mt-2 text-sm text-slate-600",children:"Are you sure you want to permanently delete this payment entry? This action cannot be undone."}),n.jsxs("div",{className:"mt-5 flex items-center justify-end gap-3",children:[n.jsx("button",{type:"button",onClick:()=>W(null),className:"min-h-[44px] rounded-xl bg-slate-200 px-4 py-2 text-sm font-bold text-slate-700 hover:bg-slate-300 active:scale-95 transition",children:"Cancel"}),n.jsx("button",{type:"button",onClick:ct,className:"min-h-[44px] rounded-xl bg-rose-600 px-5 py-2 text-sm font-bold text-white hover:bg-rose-700 active:scale-95 transition",children:"Delete Entry"})]})]})}),j&&n.jsx("div",{className:"fixed inset-0 z-40 flex items-center justify-center bg-black/60 p-4",children:n.jsxs("div",{className:"max-h-[95vh] w-full max-w-2xl overflow-auto rounded-2xl bg-white p-5 sm:p-6 shadow-2xl",children:[n.jsxs("div",{className:"mb-4 flex items-center justify-between border-b pb-3",children:[n.jsxs("h2",{className:"text-lg font-bold",children:["Edit Payment #",j.id]}),n.jsx("button",{onClick:()=>_(null),className:"min-h-[36px] min-w-[36px] text-2xl text-slate-400 hover:text-rose-600 flex items-center justify-center",children:"×"})]}),n.jsxs("div",{className:"grid gap-4 md:grid-cols-2",children:[n.jsxs("div",{children:[n.jsx("label",{className:"mb-1 block text-xs font-bold text-slate-700",children:"Date"}),n.jsx(bn,{value:j.txDate,onChange:me=>_({...j,txDate:me}),className:"px-3 py-2 text-sm"})]}),n.jsxs("div",{children:[n.jsx("label",{className:"mb-1 block text-xs font-bold text-slate-700",children:"Category"}),n.jsx(Xh,{value:j.category,onChange:me=>_({...j,category:me,subCategory:""}),disburseCats:A,expenseCats:h,onManageClick:()=>g(!0)})]}),(he(j.category)||(j.category||"").trim().toLowerCase().includes("fund payment"))&&n.jsxs("div",{children:[n.jsxs("div",{className:"mb-1 flex items-center justify-between gap-2",children:[n.jsx("label",{className:"text-xs font-bold text-slate-700",children:"Sub Category"}),j.subCategory?n.jsx("button",{type:"button",onClick:()=>_({...j,subCategory:""}),title:"সাব-ক্যাটাগরি মুছে ফেলুন (ডিলিট)",className:"cursor-pointer text-[11px] font-black text-rose-600 hover:underline",children:"✕ মুছুন"}):null]}),n.jsx(na,{value:j.subCategory||"",onChange:me=>_({...j,subCategory:me}),options:(()=>{const me=Vi(j.category,O,A.map(ut=>ut.name)),Ie=(j.subCategory||"").trim();return Ie&&!me.includes(Ie)?[...me,Ie]:me})(),placeholder:"-- Select Sub Category --",className:"w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-bold text-slate-800 focus:border-blue-500 focus:outline-none cursor-pointer",noKeyboardOnMobile:!0})]}),n.jsxs("div",{className:"md:col-span-1",children:[n.jsx("label",{className:"mb-1 block text-xs font-bold text-slate-700",children:"Disburse/Expense"}),n.jsx("input",{type:"number",placeholder:"",value:j.amount||"",onChange:me=>_({...j,amount:Math.round(Number(me.target.value)||0)}),className:"w-full rounded-lg border border-slate-300 bg-yellow-50 px-3 py-2 text-right font-mono text-lg font-bold"})]}),n.jsxs("div",{className:"md:col-span-1",children:[n.jsx("label",{className:"mb-1 block text-xs font-bold text-slate-700",children:"Description"}),n.jsx("input",{type:"text",value:j.description,onChange:me=>_({...j,description:me.target.value}),placeholder:"",className:"w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"})]}),n.jsxs("div",{className:"flex justify-end gap-3 md:col-span-2 border-t pt-3 mt-2",children:[n.jsx("button",{onClick:()=>_(null),className:"min-h-[44px] rounded-xl bg-slate-200 px-5 py-2 font-bold text-sm text-slate-700 hover:bg-slate-300 transition",children:"Cancel"}),n.jsx("button",{onClick:Me,className:"min-h-[44px] rounded-xl bg-red-600 px-6 py-2 font-bold text-sm text-white hover:bg-red-700 transition",children:"Update Entry"})]})]})]})}),y&&n.jsx(lp,{disburseCats:A,expenseCats:h,onChanged:pe,onClose:()=>g(!1)}),ce&&n.jsx(d5,{open:ce,onClose:()=>K(!1),rules:O,disburseCategories:A.map(me=>me.name),onRulesChanged:pe,currentCategory:F.category,currentLoanAmount:F.amount}),T&&n.jsx(c5,{rates:H,categories:A.map(me=>me.name),onChanged:pe,onClose:()=>Z(!1)}),ie&&n.jsx(u5,{rule:B,disburseCategories:A.map(me=>me.name),onChanged:pe,onClose:()=>te(!1)}),n.jsx(pm,{open:ee,onClose:()=>C(!1),targetAmount:j?j.amount||0:F.amount||0,date:j?j.txDate:F.txDate||l,onApplyAmount:me=>{j?_({...j,amount:Math.round(me)}):U({...F,amount:Math.round(me)})}}),V&&n.jsx(zm,{open:V,onClose:()=>re(!1),cashInHand:np(F.txDate||l).cashInHand,date:F.txDate||l})]})}const Vh=l=>l?`${l.slice(8,10)}-${l.slice(5,7)}`:"",A5=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Yh=l=>{const[o,u]=l.split("-");return`${A5[Number(u)-1]||u} ${o}`};function f5(){const[l,o]=R.useState([]),[u,c]=R.useState(null),[d,f]=R.useState(fa()),[A,b]=R.useState(""),[h,L]=R.useState(""),[y,g]=R.useState(""),[H,D]=R.useState(null),[T,Z]=R.useState(null),[O,G]=R.useState(!1),[ce,K]=R.useState(""),[ee,C]=R.useState(""),[V,re]=R.useState(""),[B,se]=R.useState(!1),ie=()=>o(jR());R.useEffect(()=>{ie();const j=()=>ie();return window.addEventListener("entertainment-changed",j),()=>window.removeEventListener("entertainment-changed",j)},[]);const te=()=>{b(""),L(""),g(""),D(null)},ue=j=>{D(j.id),f(j.date||fa()),b(j.category),L(j.description||""),g(String(j.amount||"")),c(null),window.scrollTo({top:0,behavior:"smooth"})},be=()=>{if(!d)return c({kind:"warn",text:"তারিখ দিন।"});if(!A)return c({kind:"warn",text:"ক্যাটাগরি (জমা/খরচ) বেছে নিন।"});const j=Number(y);if(!y||!Number.isFinite(j)||j<=0)return c({kind:"warn",text:"Amount-এ সঠিক সংখ্যা দিন।"});IR({...H!=null?{id:H}:{},date:d,category:A,description:h.trim(),amount:String(Math.round(j))}),te(),c({kind:"ok",text:H!=null?"✓ এন্ট্রি আপডেট হয়েছে।":"✓ এন্ট্রি সেভ হয়েছে।"}),setTimeout(()=>c(null),1800)},E=R.useMemo(()=>l.filter(j=>!(T&&(j.date<T.from||j.date>T.to)||V&&!j.date.startsWith(V))),[l,T,V]),w=()=>{if(!ce&&!ee)return c({kind:"warn",text:"কমপক্ষে একটি তারিখ লিখুন (হতে বা পর্যন্ত)।"});let j=ce||ee,_=ee||ce;j>_&&([j,_]=[_,j]),Z({from:j,to:_}),G(!1),c(null)},p=()=>{Z(null),K(""),C(""),G(!1)},N=R.useMemo(()=>{const j=new Map;for(const _ of E){const x=String(_.date||"").slice(0,7);if(!x)continue;const Q=j.get(x)||{deposit:0,expense:0};_.category==="জমা"?Q.deposit+=Number(_.amount)||0:Q.expense+=Number(_.amount)||0,j.set(x,Q)}return[...j.entries()].sort((_,x)=>x[0].localeCompare(_[0])).map(([_,x])=>({ym:_,...x,balance:x.deposit-x.expense}))},[E]),P=R.useMemo(()=>{let j=0,_=0;for(const x of l)x.category==="জমা"?j+=Number(x.amount)||0:_+=Number(x.amount)||0;return{joma:j,khoroch:_,sthiti:j-_}},[l]),W=R.useMemo(()=>{let j=0,_=0;for(const x of E)x.category==="জমা"?j+=Number(x.amount)||0:_+=Number(x.amount)||0;return{joma:j,khoroch:_,sthiti:j-_}},[E]),F="mb-1 block h-[24px] truncate leading-[24px] text-[11px] font-black uppercase tracking-wide text-slate-600",U="w-full rounded-lg border border-slate-300 bg-white px-2.5 py-2 text-sm font-semibold text-slate-800 focus:border-blue-500 focus:outline-none";return n.jsxs("div",{className:"space-y-4",children:[n.jsx("div",{className:"sticky top-2 z-30 rounded-2xl border-2 border-violet-300/80 bg-gradient-to-r from-violet-700 via-violet-600 to-indigo-600 px-4 py-3 shadow-xl",children:n.jsxs("div",{className:"flex items-center justify-between gap-2",children:[n.jsxs("div",{className:"min-w-0",children:[n.jsx("div",{className:"text-[10px] font-black uppercase tracking-wider text-violet-200",children:"🎉 বর্তমান স্থিতি"}),n.jsxs("div",{className:"truncate text-2xl font-black font-mono text-white",children:[de(P.sthiti)," ",n.jsx("span",{className:"text-sm font-bold text-violet-200",children:"৳"})]})]}),n.jsxs("div",{className:"shrink-0 rounded-xl bg-white/15 px-2.5 py-1.5 text-right backdrop-blur-sm",children:[n.jsxs("div",{className:"text-[10px] font-bold text-emerald-200",children:["জমা ",n.jsx("span",{className:"font-mono",children:de(P.joma)})]}),n.jsxs("div",{className:"text-[10px] font-bold text-rose-200",children:["খরচ ",n.jsx("span",{className:"font-mono",children:de(P.khoroch)})]}),n.jsxs("div",{className:"text-[9px] font-bold text-violet-200",children:[l.length,"টি এন্ট্রি"]})]})]})}),n.jsxs("div",{className:"rounded-2xl border border-slate-200 bg-white p-4 shadow-xs",children:[n.jsxs("div",{className:"mb-3 flex items-center justify-between border-b border-slate-100 pb-2.5",children:[n.jsxs("h1",{className:"text-lg sm:text-xl font-black text-slate-900 flex items-center gap-2",children:[n.jsx("span",{children:"🎉"})," Entertainment"]}),n.jsxs("span",{className:"rounded-full bg-violet-100 px-2.5 py-1 text-[11px] font-black text-violet-800",children:[l.length,"টি এন্ট্রি"]})]}),H!=null&&n.jsxs("div",{className:"mb-2.5 flex items-center justify-between rounded-xl border border-amber-300 bg-amber-50 px-3 py-2",children:[n.jsx("span",{className:"text-[11px] font-black text-amber-800",children:'✏️ এন্ট্রি এডিট মোডে — মান বদলে "আপডেট করুন"'}),n.jsx("button",{type:"button",onClick:te,className:"text-[11px] font-black text-amber-700 hover:text-amber-900 cursor-pointer",children:"✕ বাতিল"})]}),n.jsxs("div",{className:"grid grid-cols-2 gap-2.5 sm:grid-cols-4",children:[n.jsxs("div",{children:[n.jsx("label",{className:F,children:"তারিখ"}),n.jsx(bn,{value:d,onChange:j=>f(j||fa()),manualEntry:!0,className:"px-2.5 py-2 text-sm font-bold"})]}),n.jsxs("div",{children:[n.jsx("label",{className:F,children:"ক্যাটাগরি"}),n.jsxs("select",{value:A,onChange:j=>b(j.target.value),className:`${U} cursor-pointer`,children:[n.jsx("option",{value:"",children:"-- Select --"}),n.jsx("option",{value:"জমা",children:"জমা"}),n.jsx("option",{value:"খরচ",children:"খরচ"})]})]}),n.jsxs("div",{className:"col-span-2 sm:col-span-1",children:[n.jsx("label",{className:F,children:"ডেসক্রিপশন"}),n.jsx("input",{type:"text",value:h,onChange:j=>L(j.target.value),placeholder:"যেমন: অতিথি আপ্যায়ন…",className:U})]}),n.jsxs("div",{children:[n.jsx("label",{className:F,children:"Amount"}),n.jsx("input",{type:"number",inputMode:"numeric",min:"1",value:y,onChange:j=>g(j.target.value),placeholder:"0",className:"w-full rounded-lg border border-slate-300 bg-yellow-50 px-2.5 py-2 text-right font-mono text-sm font-bold text-slate-900 focus:border-blue-500 focus:outline-none"})]})]}),n.jsxs("div",{className:"mt-3 flex items-center justify-between gap-2",children:[n.jsx("div",{className:"min-w-0 flex-1",children:u&&n.jsx("span",{className:`text-[11px] font-bold ${u.kind==="ok"?"text-emerald-700":"text-amber-700"}`,children:u.text})}),H!=null&&n.jsx("button",{type:"button",onClick:te,className:"shrink-0 rounded-xl border border-slate-300 bg-slate-100 hover:bg-slate-200 px-4 py-2 text-sm font-black text-slate-700 transition cursor-pointer",children:"বাতিল"}),n.jsxs("button",{type:"button",onClick:be,className:`shrink-0 flex items-center gap-1.5 rounded-xl px-5 py-2 text-sm font-black text-white shadow transition cursor-pointer ${H!=null?"bg-amber-600 hover:bg-amber-700 active:bg-amber-800":"bg-violet-600 hover:bg-violet-700 active:bg-violet-800"}`,children:[n.jsx("span",{children:H!=null?"✎":"✚"})," ",H!=null?"আপডেট করুন":"সেভ করুন"]})]})]}),n.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[n.jsxs("div",{className:"relative shrink-0",children:[n.jsxs("button",{type:"button",onClick:()=>{K((T==null?void 0:T.from)||""),C((T==null?void 0:T.to)||""),G(j=>!j),se(!1)},title:"তারিখ হতে তারিখ ফিল্টার",className:`flex cursor-pointer items-center gap-1 whitespace-nowrap rounded-xl border px-3 py-2 text-[11px] font-black transition ${T?"border-sky-600 bg-sky-600 text-white shadow":"border-slate-300 bg-white text-slate-700 hover:border-sky-400 hover:text-sky-700"}`,children:["📅 ",T?`${Vh(T.from)} → ${Vh(T.to)}`:"তারিখ হতে তারিখ"]}),O&&n.jsxs("div",{className:"absolute left-0 top-full z-40 mt-1.5 w-64 rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl",children:[n.jsxs("div",{className:"mb-2 flex items-center justify-between",children:[n.jsx("span",{className:"text-xs font-black text-slate-800",children:"📅 তারিখ হতে তারিখ"}),n.jsx("button",{type:"button",onClick:()=>G(!1),className:"rounded px-1.5 text-sm font-black text-slate-400 hover:text-slate-700 cursor-pointer",children:"✕"})]}),n.jsxs("div",{className:"mb-2",children:[n.jsx("label",{className:"mb-1 block text-[10px] font-black text-slate-600",children:"হতে"}),n.jsx(bn,{value:ce,onChange:K,manualEntry:!0,className:"px-2.5 py-1.5 text-xs"})]}),n.jsxs("div",{className:"mb-3",children:[n.jsx("label",{className:"mb-1 block text-[10px] font-black text-slate-600",children:"পর্যন্ত"}),n.jsx(bn,{value:ee,onChange:C,manualEntry:!0,className:"px-2.5 py-1.5 text-xs"})]}),n.jsxs("div",{className:"flex gap-2",children:[n.jsx("button",{type:"button",onClick:w,className:"flex-1 rounded-lg bg-sky-600 px-3 py-1.5 text-[11px] font-black text-white hover:bg-sky-700 cursor-pointer",children:"প্রয়োগ"}),n.jsx("button",{type:"button",onClick:p,className:"rounded-lg bg-slate-200 px-3 py-1.5 text-[11px] font-black text-slate-700 hover:bg-slate-300 cursor-pointer",children:"মুছুন"})]})]})]}),n.jsxs("div",{className:"relative shrink-0",children:[n.jsxs("button",{type:"button",onClick:()=>{se(j=>!j),G(!1)},title:"মাস ফিল্টার — নির্দিষ্ট মাসের এন্ট্রি",className:`flex cursor-pointer items-center gap-1 whitespace-nowrap rounded-xl border px-3 py-2 text-[11px] font-black transition ${V?"border-violet-600 bg-violet-600 text-white shadow":"border-slate-300 bg-white text-slate-700 hover:border-violet-400 hover:text-violet-700"}`,children:["🗓 ",V?Yh(V):"Month"]}),B&&n.jsxs("div",{className:"absolute left-0 top-full z-40 mt-1.5 w-56 rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl",children:[n.jsxs("div",{className:"mb-2 flex items-center justify-between",children:[n.jsx("span",{className:"text-xs font-black text-slate-800",children:"🗓 মাস বেছে নিন"}),n.jsx("button",{type:"button",onClick:()=>se(!1),className:"rounded px-1.5 text-sm font-black text-slate-400 hover:text-slate-700 cursor-pointer",children:"✕"})]}),n.jsx("input",{type:"month",value:V,onChange:j=>{re(j.target.value),se(!1)},className:"w-full rounded-lg border border-slate-300 bg-white px-2.5 py-2 text-sm font-bold text-slate-800 focus:border-violet-500 focus:outline-none cursor-pointer"}),n.jsx("button",{type:"button",onClick:()=>{re(""),se(!1)},className:"mt-2 w-full rounded-lg bg-slate-200 px-3 py-1.5 text-[11px] font-black text-slate-700 hover:bg-slate-300 cursor-pointer",children:"সব মাস"})]})]}),(T||V)&&n.jsx("button",{type:"button",onClick:()=>{p(),re("")},className:"rounded-xl border border-rose-300 bg-rose-50 px-3 py-2 text-[11px] font-black text-rose-700 hover:bg-rose-100 cursor-pointer",children:"✕ ফিল্টার মুছুন"}),n.jsxs("span",{className:"ml-auto text-[11px] font-bold text-slate-500",children:[E.length,"টি দেখানো হচ্ছে"]})]}),n.jsxs("div",{className:"rounded-2xl border border-slate-200 bg-white p-3 shadow-xs",children:[n.jsxs("div",{className:"mb-2 flex items-center justify-between",children:[n.jsx("h2",{className:"text-sm font-black text-slate-900",children:"🎉 সকল এন্ট্রি"}),n.jsxs("span",{className:"text-[11px] font-bold text-slate-500",children:["জমা ",n.jsx("span",{className:"font-mono text-emerald-700",children:de(W.joma)})," • খরচ ",n.jsx("span",{className:"font-mono text-rose-700",children:de(W.khoroch)})," • স্থিতি ",n.jsx("span",{className:"font-mono text-indigo-800",children:de(W.sthiti)})]})]}),n.jsx("div",{className:"max-h-96 overflow-auto rounded-xl border border-slate-200",children:n.jsxs("table",{className:"w-full min-w-[430px] text-left text-xs sm:text-sm whitespace-nowrap",children:[n.jsx("thead",{className:"sticky top-0 bg-violet-800 text-white",children:n.jsxs("tr",{children:[n.jsx("th",{className:"px-3 py-2 text-center",children:"তারিখ"}),n.jsx("th",{className:"px-3 py-2 text-center",children:"ক্যাটাগরি"}),n.jsx("th",{className:"px-3 py-2",children:"ডেসক্রিপশন"}),n.jsx("th",{className:"px-3 py-2 text-right",children:"Amount"}),n.jsx("th",{className:"px-3 py-2 text-center",children:"✏️ / ✕"})]})}),n.jsx("tbody",{children:E.length===0?n.jsx("tr",{children:n.jsx("td",{colSpan:5,className:"px-3 py-6 text-center text-slate-400 font-semibold",children:"কোনো এন্ট্রি নেই"})}):E.map(j=>n.jsxs("tr",{className:"border-b hover:bg-slate-50",children:[n.jsx("td",{className:"px-3 py-2 text-center font-mono text-[11px] sm:text-xs text-slate-700",children:j.date.split("-").reverse().join("-")}),n.jsx("td",{className:"px-3 py-2 text-center",children:n.jsx("span",{className:`inline-block rounded-full px-2 py-0.5 text-[10px] font-black ${j.category==="জমা"?"bg-emerald-100 text-emerald-800":"bg-rose-100 text-rose-800"}`,children:j.category})}),n.jsx("td",{className:"px-3 py-2 max-w-[160px] truncate text-slate-800",title:j.description,children:j.description||"—"}),n.jsxs("td",{className:`px-3 py-2 text-right font-mono font-bold ${j.category==="জমা"?"text-emerald-700":"text-rose-700"}`,children:[j.category==="জমা"?"+":"-",de(Number(j.amount)||0)]}),n.jsxs("td",{className:"px-3 py-2 text-center whitespace-nowrap",children:[n.jsx("button",{type:"button",onClick:()=>ue(j),className:"mr-1 rounded-lg px-1.5 py-0.5 text-[11px] font-black text-slate-400 hover:bg-amber-100 hover:text-amber-600 cursor-pointer",title:"এন্ট্রি এডিট করুন",children:"✏️"}),n.jsx("button",{type:"button",onClick:()=>{confirm(`"${j.description||j.category}" — ${de(Number(j.amount))} টাকার এন্ট্রিটি মুছে ফেলবেন?`)&&HR(j.id)},className:"rounded-lg px-1.5 py-0.5 text-[11px] font-black text-slate-400 hover:bg-rose-100 hover:text-rose-600 cursor-pointer",title:"এন্ট্রি মুছুন",children:"🗑"})]})]},j.id))})]})})]}),n.jsxs("div",{className:"rounded-2xl border border-slate-200 bg-white p-3 shadow-xs",children:[n.jsxs("div",{className:"mb-2 flex items-center justify-between",children:[n.jsx("h2",{className:"text-sm font-black text-slate-900",children:"🗓 মাসভিত্তিক হিসাব"}),(T||V)&&n.jsx("span",{className:"rounded-full bg-sky-100 px-2 py-0.5 text-[10px] font-black text-sky-800",children:"ফিল্টার কার্যকর"})]}),n.jsx("div",{className:"overflow-auto rounded-xl border border-slate-200",children:n.jsxs("table",{className:"w-full min-w-[380px] text-left text-xs sm:text-sm whitespace-nowrap",children:[n.jsx("thead",{className:"sticky top-0 bg-slate-800 text-white",children:n.jsxs("tr",{children:[n.jsx("th",{className:"px-3 py-2 text-center",children:"মাস"}),n.jsx("th",{className:"px-3 py-2 text-right",children:"জমা"}),n.jsx("th",{className:"px-3 py-2 text-right",children:"খরচ"}),n.jsx("th",{className:"px-3 py-2 text-right",children:"স্থিতি"})]})}),n.jsx("tbody",{children:N.length===0?n.jsx("tr",{children:n.jsx("td",{colSpan:4,className:"px-3 py-6 text-center text-slate-400 font-semibold",children:"কোনো মাসিক হিসাব নেই"})}):N.map(j=>n.jsxs("tr",{className:"border-b hover:bg-slate-50",children:[n.jsx("td",{className:"px-3 py-2 text-center font-bold text-slate-800",children:Yh(j.ym)}),n.jsx("td",{className:"px-3 py-2 text-right font-mono font-bold text-emerald-700",children:de(j.deposit)}),n.jsx("td",{className:"px-3 py-2 text-right font-mono font-bold text-rose-700",children:de(j.expense)}),n.jsx("td",{className:`px-3 py-2 text-right font-mono font-black ${j.balance>=0?"text-indigo-800":"text-rose-700"}`,children:de(j.balance)})]},j.ym))}),N.length>0&&n.jsx("tfoot",{className:"bg-slate-100 font-black",children:n.jsxs("tr",{children:[n.jsx("td",{className:"px-3 py-2 text-center text-slate-800",children:"মোট"}),n.jsx("td",{className:"px-3 py-2 text-right font-mono text-emerald-800",children:de(W.joma)}),n.jsx("td",{className:"px-3 py-2 text-right font-mono text-rose-800",children:de(W.khoroch)}),n.jsx("td",{className:`px-3 py-2 text-right font-mono ${W.sthiti>=0?"text-indigo-900":"text-rose-800"}`,children:de(W.sthiti)})]})})]})})]})]})}var ic=hb();function x5({value:l,onChange:o,options:u,disabled:c=!1,readOnly:d=!1}){const[f,A]=R.useState(!1),[b,h]=R.useState(0),[L,y]=R.useState(!1),g=L?l.toLowerCase():"",H=g?u.filter(Z=>Z.toLowerCase().startsWith(g)):u,D=H.length?H:u.filter(Z=>Z.toLowerCase().includes(g)),T=Z=>{c||(o(Z.toLowerCase().trim()),y(!1),A(!1))};return n.jsxs("div",{className:"relative",children:[n.jsx("input",{value:ft(l),disabled:c,readOnly:d,inputMode:d?"none":void 0,placeholder:d?"Select option...":"Type first letter or select...",onChange:Z=>{c||d||(o(Z.target.value.toLowerCase()),y(!0),A(!0),h(0))},onFocus:Z=>{c||(d&&Z.target.blur(),y(!1),A(!0))},onClick:Z=>{c||(d&&Z.currentTarget.blur(),y(!1),A(!0))},onBlur:()=>{setTimeout(()=>{if(A(!1),y(!1),l&&l.trim()){const Z=l.toLowerCase().trim(),O=u.find(G=>G.toLowerCase().trim()===Z);if(O)o(O);else{const G=u.find(ce=>ce.toLowerCase().trim().startsWith(Z));G&&o(G)}}},250)},onKeyDown:Z=>{if(!c){if(!f&&(Z.key==="ArrowDown"||Z.key==="Enter")){A(!0);return}Z.key==="ArrowDown"?(Z.preventDefault(),h(O=>Math.min(O+1,D.length-1))):Z.key==="ArrowUp"?(Z.preventDefault(),h(O=>Math.max(O-1,0))):Z.key==="Enter"&&D[b]?(Z.preventDefault(),T(D[b])):Z.key==="Escape"&&A(!1)}},className:`w-full rounded border px-3 py-2 text-sm font-semibold focus:outline-none ${c?"border-slate-300 bg-slate-100 text-slate-500 cursor-not-allowed opacity-60":"border-slate-300 bg-white text-slate-800 focus:border-blue-500"}`}),n.jsx("button",{type:"button",tabIndex:-1,disabled:c,onPointerDown:Z=>{c||(Z.preventDefault(),A(O=>!O))},className:`absolute right-2 top-1/2 -translate-y-1/2 p-1 ${c?"text-slate-300 cursor-not-allowed":"text-slate-500 cursor-pointer"}`,children:"▼"}),!c&&f&&D.length>0&&n.jsx("ul",{className:"absolute z-30 mt-1 max-h-56 w-full overflow-auto rounded-lg border border-slate-300 bg-white shadow-xl",children:D.map((Z,O)=>n.jsx("li",{onClick:()=>{T(Z)},onMouseDown:G=>{G.preventDefault()},className:`cursor-pointer px-3.5 py-2 text-xs sm:text-sm transition ${O===b?"bg-blue-100 font-semibold text-blue-900":Z.toLowerCase()===l.toLowerCase()?"bg-slate-100 font-bold text-slate-900":"hover:bg-slate-100 text-slate-800"}`,children:ft(Z)},Z))})]})}const Wa=[{key:"staffName",label:"Staff Name",bn:"স্টাফ",isNumeric:!1},{key:"loan",label:"Loan",bn:"ঋণ",isNumeric:!0,color:"text-amber-300"},{key:"rebate",label:"Rebate",bn:"রিবেট",isNumeric:!0,color:"text-amber-200"},{key:"savings",label:"Savings",bn:"সঞ্চয়",isNumeric:!0,color:"text-emerald-300"},{key:"dps",label:"DPS",bn:"ডিপিএস",isNumeric:!0,color:"text-sky-300"},{key:"admission",label:"Admission",bn:"ভর্তি",isNumeric:!0,color:"text-cyan-300"},{key:"passbook",label:"Passbook",bn:"পাশবই",isNumeric:!0,color:"text-indigo-300"},{key:"savingsAdjust",label:"Savings Adjust",bn:"সঞ্চয় ফেরত",isNumeric:!0,color:"text-rose-300"},{key:"nogodReturn",label:"Nogod Return",bn:"নগদ ফেরত",isNumeric:!0,color:"text-rose-400"}];function h5({open:l,activeField:o,values:u,staffList:c,onFieldSelect:d,onValueChange:f,onSave:A,onReset:b,onClose:h,isEdit:L=!1}){if(!l)return null;const y=Wa.findIndex(C=>C.key===o),g=u[o]||"",H=()=>{o!=="staffName"&&/[+\-*/]/.test(g)&&f(o,qe(g));const C=(y-1+Wa.length)%Wa.length;d(Wa[C].key)},D=()=>{o!=="staffName"&&/[+\-*/]/.test(g)&&f(o,qe(g));const C=(y+1)%Wa.length;d(Wa[C].key)},T=C=>{o!=="staffName"&&(!g||g==="0"?f(o,C):f(o,g+C))},Z=C=>{if(o!=="staffName"){if(!g||g==="0"){C==="-"&&f(o,"-");return}if(/[+\-*/]$/.test(g)){f(o,g.slice(0,-1)+C);return}f(o,g+C)}},O=()=>{if(o==="staffName")return;const C=qe(g);f(o,C)},G=()=>{o!=="staffName"&&(!g||g==="0"?f(o,"0"):/[+\-*/]$/.test(g)?f(o,g+"0"):f(o,g+"00"))},ce=()=>{o!=="staffName"&&(!g||g==="0"?f(o,"0"):/[+\-*/]$/.test(g)?f(o,g+"0"):f(o,g+"000"))},K=()=>{if(o==="staffName"){f("staffName","");return}g.length<=1?f(o,""):f(o,g.slice(0,-1))},ee=C=>{f("staffName",C),d("loan")};return s2.useEffect(()=>{if(!l)return;const C=V=>{V.target instanceof HTMLTextAreaElement||V.target instanceof HTMLSelectElement||V.target instanceof HTMLInputElement&&!V.target.readOnly||(V.key>="0"&&V.key<="9"?(V.preventDefault(),T(V.key)):V.key==="+"||V.key==="-"||V.key==="*"||V.key==="/"?(V.preventDefault(),Z(V.key)):V.key==="="?(V.preventDefault(),O()):V.key==="Backspace"?(V.preventDefault(),K()):V.key==="Tab"?(V.preventDefault(),V.shiftKey?H():D()):V.key==="ArrowDown"||V.key==="ArrowRight"?(V.preventDefault(),D()):V.key==="ArrowUp"||V.key==="ArrowLeft"?(V.preventDefault(),H()):V.key==="Enter"?(V.preventDefault(),/[+\-*/]/.test(g)?O():o==="nogodReturn"?A():D()):V.key==="Escape"&&(V.preventDefault(),h()))};return window.addEventListener("keydown",C),()=>window.removeEventListener("keydown",C)},[l,o,g,y]),n.jsx("div",{className:"fixed bottom-0 left-0 right-0 z-50 bg-slate-950/95 text-white shadow-2xl border-t-4 border-indigo-600 backdrop-blur-md animate-in slide-in-from-bottom duration-200",children:n.jsxs("div",{className:"mx-auto max-w-xl px-2 sm:px-3 pt-2 pb-3",children:[n.jsx("div",{className:"pb-1.5 overflow-x-auto no-scrollbar flex items-center gap-1",children:Wa.map(C=>{const V=C.key===o,re=u[C.key],B=re&&C.isNumeric?qe(re):re;return n.jsxs("button",{type:"button",onClick:()=>{o!=="staffName"&&/[+\-*/]/.test(g)&&f(o,qe(g)),d(C.key)},className:`rounded-lg px-2.5 py-1 text-[11px] font-bold whitespace-nowrap shrink-0 transition cursor-pointer border ${V?"bg-amber-400 text-slate-950 border-amber-300 shadow-md ring-2 ring-amber-300/40":"bg-slate-800/90 text-slate-300 hover:bg-slate-700 border-slate-700"}`,children:[n.jsx("span",{children:C.label}),B&&C.isNumeric&&Number(B)>0&&n.jsxs("span",{className:"ml-1 opacity-90 font-mono text-[10px]",children:["(",de(Number(B)),")"]}),B&&!C.isNumeric&&n.jsxs("span",{className:"ml-1 opacity-90 text-[10px]",children:["(",B,")"]})]},C.key)})}),o==="staffName"?n.jsxs("div",{className:"my-2 rounded-xl bg-slate-900 p-2.5 border border-slate-800",children:[n.jsx("div",{className:"mb-2 text-xs font-bold text-slate-400",children:"Select Staff Member (স্টাফ নির্বাচন করুন):"}),n.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-2",children:c.map(C=>n.jsxs("button",{type:"button",onClick:()=>ee(C),className:`rounded-xl py-2.5 text-xs sm:text-sm font-bold text-center border transition cursor-pointer active:scale-95 ${u.staffName.toLowerCase()===C.toLowerCase()?"bg-emerald-600 text-white border-emerald-400 shadow-lg ring-2 ring-emerald-400":"bg-slate-800 text-slate-200 hover:bg-slate-700 border-slate-700"}`,children:["👤 ",C]},C))})]}):n.jsxs("div",{className:"flex gap-2 my-1.5",children:[n.jsxs("div",{className:"flex-1 grid grid-cols-3 gap-1.5",children:[n.jsx("button",{type:"button",onClick:()=>T("7"),className:"rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-600 active:scale-95 py-2.5 text-lg sm:text-xl font-bold font-mono text-white shadow border border-slate-700 transition cursor-pointer",children:"7"}),n.jsx("button",{type:"button",onClick:()=>T("8"),className:"rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-600 active:scale-95 py-2.5 text-lg sm:text-xl font-bold font-mono text-white shadow border border-slate-700 transition cursor-pointer",children:"8"}),n.jsx("button",{type:"button",onClick:()=>T("9"),className:"rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-600 active:scale-95 py-2.5 text-lg sm:text-xl font-bold font-mono text-white shadow border border-slate-700 transition cursor-pointer",children:"9"}),n.jsx("button",{type:"button",onClick:()=>T("4"),className:"rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-600 active:scale-95 py-2.5 text-lg sm:text-xl font-bold font-mono text-white shadow border border-slate-700 transition cursor-pointer",children:"4"}),n.jsx("button",{type:"button",onClick:()=>T("5"),className:"rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-600 active:scale-95 py-2.5 text-lg sm:text-xl font-bold font-mono text-white shadow border border-slate-700 transition cursor-pointer",children:"5"}),n.jsx("button",{type:"button",onClick:()=>T("6"),className:"rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-600 active:scale-95 py-2.5 text-lg sm:text-xl font-bold font-mono text-white shadow border border-slate-700 transition cursor-pointer",children:"6"}),n.jsx("button",{type:"button",onClick:()=>T("1"),className:"rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-600 active:scale-95 py-2.5 text-lg sm:text-xl font-bold font-mono text-white shadow border border-slate-700 transition cursor-pointer",children:"1"}),n.jsx("button",{type:"button",onClick:()=>T("2"),className:"rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-600 active:scale-95 py-2.5 text-lg sm:text-xl font-bold font-mono text-white shadow border border-slate-700 transition cursor-pointer",children:"2"}),n.jsx("button",{type:"button",onClick:()=>T("3"),className:"rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-600 active:scale-95 py-2.5 text-lg sm:text-xl font-bold font-mono text-white shadow border border-slate-700 transition cursor-pointer",children:"3"}),n.jsx("button",{type:"button",onClick:()=>T("0"),className:"rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-600 active:scale-95 py-2 text-lg sm:text-xl font-bold font-mono text-white shadow border border-slate-700 transition cursor-pointer",children:"0"}),n.jsx("button",{type:"button",onClick:G,className:"rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-600 active:scale-95 py-2 text-sm sm:text-base font-bold font-mono text-slate-200 shadow border border-slate-700 transition cursor-pointer",children:"00"}),n.jsx("button",{type:"button",onClick:ce,className:"rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-600 active:scale-95 py-2 text-xs sm:text-sm font-bold font-mono text-slate-200 shadow border border-slate-700 transition cursor-pointer",children:"000"})]}),n.jsxs("div",{className:"w-16 sm:w-20 flex flex-col gap-1.5",children:[n.jsx("button",{type:"button",onClick:K,className:"flex-1 rounded-xl bg-rose-900/80 hover:bg-rose-800 active:bg-rose-700 active:scale-95 text-base sm:text-lg font-bold text-rose-200 shadow border border-rose-700 transition cursor-pointer flex items-center justify-center",title:"একটি অক্ষর মুছুন",children:"⌫"}),n.jsx("button",{type:"button",onClick:()=>Z("/"),className:"flex-1 rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-600 active:scale-95 text-base sm:text-lg font-black text-amber-300 shadow border border-slate-700 transition cursor-pointer flex items-center justify-center",title:"ভাগ (/)",children:"÷"}),n.jsx("button",{type:"button",onClick:()=>Z("*"),className:"flex-1 rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-600 active:scale-95 text-base sm:text-lg font-black text-amber-300 shadow border border-slate-700 transition cursor-pointer flex items-center justify-center",title:"গুণ (*)",children:"×"}),n.jsx("button",{type:"button",onClick:()=>Z("-"),className:"flex-1 rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-600 active:scale-95 text-base sm:text-lg font-black text-amber-300 shadow border border-slate-700 transition cursor-pointer flex items-center justify-center",title:"বিয়োগ (-)",children:"−"}),n.jsx("button",{type:"button",onClick:()=>Z("+"),className:"flex-1 rounded-xl bg-amber-600 hover:bg-amber-500 active:bg-amber-700 active:scale-95 text-lg sm:text-xl font-black text-white shadow border border-amber-500 transition cursor-pointer flex items-center justify-center",title:"যোগ (+)",children:"+"}),n.jsx("button",{type:"button",onClick:O,className:"flex-1 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 active:scale-95 text-lg sm:text-xl font-black text-white shadow border border-emerald-500 transition cursor-pointer flex items-center justify-center ring-2 ring-emerald-400/30",title:"যোগফল হিসাব করতে সমান (=)",children:"="})]})]}),n.jsxs("div",{className:"grid grid-cols-5 gap-1.5 pt-1.5 border-t border-slate-800",children:[n.jsxs("button",{type:"button",onClick:b,className:"rounded-xl bg-amber-600 hover:bg-amber-500 active:bg-amber-700 active:scale-95 py-2 text-[11px] sm:text-xs font-black text-white shadow flex items-center justify-center gap-1 cursor-pointer transition ring-1 ring-amber-400/40",title:"সব রিসেট করুন",children:[n.jsx("span",{children:"🔄"}),n.jsx("span",{children:"রিসেট"})]}),n.jsxs("button",{type:"button",onClick:A,className:"rounded-xl bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 active:scale-95 py-2 text-[11px] sm:text-xs font-black text-white shadow flex items-center justify-center gap-1 cursor-pointer transition ring-1 ring-emerald-400/40",title:L?"রিপোর্ট আপডেট করুন":"রিপোর্ট সেভ করুন",children:[n.jsx("span",{children:"💾"}),n.jsx("span",{children:L?"আপডেট":"সেভ"})]}),n.jsxs("button",{type:"button",onClick:h,className:"rounded-xl bg-red-600 hover:bg-red-700 active:bg-red-800 active:scale-95 py-2 text-[11px] sm:text-xs font-black text-white shadow-lg flex items-center justify-center gap-1 cursor-pointer transition border border-red-500 ring-2 ring-red-500/40",title:"কিবোর্ড ক্লোজ করুন",children:[n.jsx("span",{children:"✖"}),n.jsx("span",{children:"ক্লোজ"})]}),n.jsxs("button",{type:"button",onClick:H,className:"rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-600 active:scale-95 py-2 text-[11px] sm:text-xs font-bold text-slate-200 border border-slate-700 flex items-center justify-center gap-1 cursor-pointer transition",title:"এক ঘর পূর্বের (Prev)",children:[n.jsx("span",{children:"◀"}),n.jsx("span",{children:"পূর্বের"})]}),n.jsxs("button",{type:"button",onClick:D,className:"rounded-xl bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:scale-95 py-2 text-[11px] sm:text-xs font-bold text-white shadow flex items-center justify-center gap-1 cursor-pointer transition",title:"এক ঘর পরের (Next)",children:[n.jsx("span",{children:"পরের"}),n.jsx("span",{children:"▶"})]})]})]})})}const op="gobra_auth_users",ip="gobra_auth_branches",cc="gobra_auth_session",Wl={mobile:"013241655828",password:"gobra1234",name:"Gobra Office"};function Jm(l,o){try{const u=window.localStorage.getItem(l);return u?JSON.parse(u)??o:o}catch{return o}}function uc(l,o){try{window.localStorage.setItem(l,JSON.stringify(o))}catch(u){console.error("[auth] সংরক্ষণ করা যায়নি",u)}}const Gs=l=>{let o=String(l??"").replace(/[^0-9]/g,"");return o.length===14&&o.startsWith("880")?o=o.slice(3):o.length===13&&o.startsWith("88")?o=o.slice(2):o.length===10&&o.startsWith("1")&&(o=`0${o}`),o},nc=l=>{const o=Gs(l);return o.length>=6&&o.length<=15},qh=l=>String(l||"").trim().toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"").slice(0,24)||`br-${Date.now().toString(36)}`;async function Xm(l,o){var f;const u=`${o}::${l}`;try{const A=(f=globalThis.crypto)==null?void 0:f.subtle;if(A){const b=await A.digest("SHA-256",new TextEncoder().encode(u));return Array.from(new Uint8Array(b)).map(h=>h.toString(16).padStart(2,"0")).join("")}}catch{}let c=2166136261,d=16777619;for(let A=0;A<u.length;A++)c=(c^u.charCodeAt(A))*16777619>>>0,d=d+u.charCodeAt(A)*31+A>>>0;return`f${c.toString(16).padStart(8,"0")}${d.toString(16).padStart(8,"0")}`}const ar=()=>{const l=Jm(op,[]);return Array.isArray(l)?l:[]},dc=()=>{const l=Jm(ip,[]);return!Array.isArray(l)||l.length===0?[{id:wn,name:sc,createdAt:new Date().toISOString()}]:l},io=l=>uc(op,l),cp=l=>uc(ip,l),ir=l=>{const o=String(l),u=Gs(l);return ar().find(c=>Gs(c.mobile)===u||c.id===o)||null},b5=l=>dc().find(o=>o.id===l)||null,mc=()=>{var l;return sr()?sc:((l=b5(Ts()))==null?void 0:l.name)||Ts().toUpperCase()},p5=()=>sr()?`${sc} Branch.`:`${mc().toUpperCase()} Branch.`,Vm=()=>{const l=Jm(cc,null);if(!l||!l.userId)return null;const o=ir(l.userId);return o?{userId:l.userId,branchId:o.branchId,loginAt:l.loginAt}:null},g5=()=>{const l=Vm();return l?ir(l.userId):null};function up(l){const o={userId:l.id,branchId:l.branchId,loginAt:new Date().toISOString()};uc(cc,o),lr(l.branchId);const u=ar().map(c=>c.id===l.id?{...c,lastLoginAt:o.loginAt}:c);return io(u),o}function Ji(l,o,u){const c=String(l),d=String(o||wn);if(ir(c))io(ar().map(A=>A.id===c?{...A,branchId:d,...u!=null&&u.name&&u.name.trim()?{name:u.name.trim()}:{}}:A));else{const A=/[a-z]@/i.test(c);io([...ar(),{id:c,name:((u==null?void 0:u.name)||"").trim()||c,mobile:A?"":c,branchId:d,passHash:"",createdAt:new Date().toISOString(),lastLoginAt:new Date().toISOString()}])}const f={userId:c,branchId:d,loginAt:new Date().toISOString()};return uc(cc,f),lr(f.branchId),f}function R5(){try{window.localStorage.removeItem(cc)}catch{}lr(wn)}let ki=null;function Ac(){return ki||(ki=S5().finally(()=>{ki=null})),ki}async function S5(){try{const l=dc();if(l.some(u=>u.id===wn)||cp([{id:wn,name:sc,createdAt:new Date().toISOString()},...l]),ir(Wl.mobile))return;const o=await Xm(Wl.password,Wl.mobile);io([...ar(),{id:Gs(Wl.mobile),name:Wl.name,mobile:Gs(Wl.mobile),branchId:wn,passHash:o,createdAt:new Date().toISOString()}])}catch(l){console.error("[auth] ডিফল্ট ইউজার তৈরি করা যায়নি",l)}}async function y5(l,o){await Ac();const u=Gs(l);if(!nc(u))return{ok:!1,error:"সঠিক মোবাইল নম্বর দিন (কমপক্ষে ৬ ডিজিট) — এটাই ইউজার আইডি।"};if(!o)return{ok:!1,error:"পাসওয়ার্ড দিন।"};const c=ir(u);return c?await Xm(o,Gs(c.mobile))!==c.passHash?{ok:!1,error:"পাসওয়ার্ড মিলছে না।"}:{ok:!0,session:up(c)}:{ok:!1,error:"এই মোবাইল নম্বরে কোনো ইউজার নেই — আগে সাইন আপ করুন।"}}async function N5(l){await Ac();const o=String(l.name||"").trim(),u=Gs(l.mobile),c=String(l.branchName||"").trim(),d=String(l.password||""),f=String(l.confirmPassword||"");if(o.length<2)return{ok:!1,error:"নাম লিখুন (কমপক্ষে ২ অক্ষর)।"};if(!nc(u))return{ok:!1,error:"সঠিক মোবাইল নম্বর দিন (কমপক্ষে ৬ ডিজিট) — এটাই ইউজার আইডি।"};if(!c)return{ok:!1,error:"অফিস / শাখার নাম লিখুন।"};if(d.length<6)return{ok:!1,error:"পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে।"};if(d!==f)return{ok:!1,error:"পাসওয়ার্ড ও কনফার্ম পাসওয়ার্ড মিলছে না।"};if(ir(u))return{ok:!1,error:"এই মোবাইল নম্বর আগেই সাইন আপ করা আছে — সাইন ইন করুন।"};const A=dc(),b=c.toLowerCase();let h=A.find(g=>g.name.trim().toLowerCase()===b)||A.find(g=>g.id===qh(c));h||(h={id:qh(c),name:c,createdAt:new Date().toISOString(),createdBy:u},cp([...A,h]));const L=await Xm(d,u),y={id:u,name:o,mobile:u,branchId:h.id,passHash:L,createdAt:new Date().toISOString()};return io([...ar(),y]),{ok:!0,session:up(y)}}function v5(l,o){const u=l.map(f=>{if(!f.el)return"";const A=f.el.cloneNode(!0),b=f.el.querySelectorAll("input, select, textarea"),h=A.querySelectorAll("input, select, textarea");return b.forEach((L,y)=>{const g=h[y];if(!g)return;const H=document.createElement("span");H.style.fontWeight="600",H.textContent=L.value??"",g.replaceWith(H)}),`<h3 class="sec-h">${Ui(f.heading)}</h3>
${A.outerHTML}`}).join(`
`),c=`<!doctype html>
<html lang="bn"><head><meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>${Ui(o.title)}</title>
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
    <h2>${Ui(o.title)}</h2>
    ${o.subtitle?`<p>${Ui(o.subtitle)}</p>`:""}
  </div>
  ${u}
  <script>window.addEventListener("load", function(){ setTimeout(function(){ window.focus(); window.print(); }, 150); });<\/script>
</body></html>`,d=window.open("","_blank","width=1100,height=760");if(!d){window.print();return}d.document.write(c),d.document.close()}function Ui(l){return String(l||"").replace(/[&<>"']/g,o=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[o]||o)}const Qh=()=>as().map(l=>l.name);function $h(){if(typeof window>"u")return!1;const l=navigator.userAgent||"",o=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile/i.test(l),u="ontouchstart"in window||navigator.maxTouchPoints&&navigator.maxTouchPoints>1,c=window.innerWidth<=820;return o||u&&c}const Di=["loan","rebate","savings","dps","admission","passbook","savingsAdjust","nogodReturn"],Wh=(l,o)=>{const u=l.toLowerCase().trim(),c=o.toLowerCase().trim();return u===c||u.includes(c)||c.includes(u)};function L5({selectedDate:l}){const o=R.useRef(null),u=R.useRef(null),c=R.useRef(null),[d,f]=R.useState([]),[A,b]=R.useState({staffName:"",loan:"",rebate:"",savings:"",dps:"",admission:"",passbook:"",savingsAdjust:"",nogodReturn:""}),[h,L]=R.useState(null),[y,g]=R.useState(null),[H,D]=R.useState(""),[T,Z]=R.useState("default"),[O,G]=Zm(),[ce,K]=R.useState(!1),[ee,C]=R.useState(!1),[V,re]=R.useState(!1),[B,se]=R.useState(()=>{try{const M=localStorage.getItem("gobra_floating_pos_report");if(M)return JSON.parse(M)}catch{}return null}),ie=R.useRef(null),te=R.useRef(!1),ue=R.useRef({x:0,y:0,elemX:0,elemY:0,w:50,h:50,hasMoved:!1}),be=M=>{var Ce;if(M.button!==0&&M.pointerType==="mouse")return;const q=(Ce=ie.current)==null?void 0:Ce.getBoundingClientRect();if(q){ue.current={x:M.clientX,y:M.clientY,elemX:q.left,elemY:q.top,w:q.width,h:q.height,hasMoved:!1},te.current=!0;try{M.currentTarget.setPointerCapture(M.pointerId)}catch{}}},E=R.useRef(0),w=()=>{const M=Date.now();M-E.current<250||(E.current=M,C(q=>!q),re(!1))},p=M=>{if(!te.current)return;const q=M.clientX-ue.current.x,Ce=M.clientY-ue.current.y,De=Math.hypot(q,Ce);if(!ue.current.hasMoved&&De>6&&(ue.current.hasMoved=!0),ue.current.hasMoved){const vt=Math.max(10,window.innerWidth-ue.current.w-6),Et=Math.max(10,window.innerHeight-ue.current.h-6),Pt=Math.max(6,Math.min(vt,ue.current.elemX+q)),Ke=Math.max(6,Math.min(Et,ue.current.elemY+Ce));se({x:Pt,y:Ke})}},N=M=>{var q;if(te.current){te.current=!1;try{M.currentTarget.releasePointerCapture(M.pointerId)}catch{}if(ue.current.hasMoved){const Ce=(q=ie.current)==null?void 0:q.getBoundingClientRect();if(Ce){const De={x:Math.round(Ce.left),y:Math.round(Ce.top)};try{localStorage.setItem("gobra_floating_pos_report",JSON.stringify(De))}catch{}}}else w()}},P=M=>{if(ue.current.hasMoved){M.stopPropagation(),ue.current.hasMoved=!1;return}w()},[W,F]=R.useState($h);R.useEffect(()=>{const M=()=>F($h());return window.addEventListener("resize",M),()=>window.removeEventListener("resize",M)},[]);const[U,j]=R.useState(!1),[_,x]=R.useState(()=>{try{return localStorage.getItem("gobra_staff_entry_collapsed")!=="0"}catch{return!0}}),Q=M=>{x(M);try{localStorage.setItem("gobra_staff_entry_collapsed",M?"1":"0")}catch{}},[Re,ge]=R.useState("loan"),[Ne,He]=R.useState(0),[pe,he]=R.useState(0),[ae,ye]=R.useState(0),[ze,xt]=R.useState([]),[ht,Xe]=R.useState([]),[ve,it]=R.useState(!1),It=(M,q=!1)=>{const Ce=Di.indexOf(M);if(Ce>=0&&Ce<Di.length-1){const De=Di[Ce+1],vt=q?`edit-input-${De}`:`input-${De}`,Et=document.getElementById(vt);Et&&(Et.focus(),Et.select())}else Ce===Di.length-1&&(q?en():kt())},at=()=>{const M=Ln(l);f(M);const q=_n(l);He(q.prevCash),he(q.prevBank),ye(q.cash);const Ce=xa("disburse");Xe(Ce.map(vt=>vt.name.toLowerCase().trim())),xt(ln());const De=Oe(l);it(De),De&&(j(!1),L(null))};R.useEffect(()=>{at();const M=()=>at(),q=()=>at();return window.addEventListener("tx-changed",M),window.addEventListener("day-close-changed",q),()=>{window.removeEventListener("tx-changed",M),window.removeEventListener("day-close-changed",q)}},[l]),R.useEffect(()=>{if(!U||!W)return;const M=setTimeout(()=>{const q=h?`edit-field-${Re}`:`field-${Re}`,Ce=document.getElementById(q);Ce&&Ce.scrollIntoView({behavior:"smooth",block:"center"})},50);return()=>clearTimeout(M)},[Re,U,h,W]);const[Bt,Ae]=R.useState(!1),Me=()=>{Ae(!0),window.setTimeout(()=>Ae(!1),900)},ct=M=>{if(ve){Me();return}ge(M),W&&j(!0)},kt=()=>{if(ve){Me();return}if(!Gt(l)){alert(`⚠️ এই তারিখের (${l}) কর্মদিবস এখনও শুরু (Day Open) করা হয়নি। কোনো রিপোর্ট এন্ট্রি করার পূর্বে দিনটি Day Open করুন।`),window.dispatchEvent(new CustomEvent("open-day-open-modal"));return}const M=Rt(l);if(M.blocked){alert(`⚠️ ${M.reason||"দুটি কর্মদিবসের মধ্যবর্তী বন্ধের দিনে কোনো নতুন রিপোর্ট এন্ট্রি করা যাবে না।"}`);return}if(!A.staffName.trim()){alert("দয়া করে স্টাফ নির্বাচন করুন"),ge("staffName"),W&&j(!0);return}PR({reportDate:l,staffName:A.staffName.trim(),loan:qe(A.loan)||"0",rebate:qe(A.rebate)||"0",savings:qe(A.savings)||"0",dps:qe(A.dps)||"0",admission:qe(A.admission)||"0",passbook:qe(A.passbook)||"0",savingsAdjust:qe(A.savingsAdjust)||"0",nogodReturn:qe(A.nogodReturn)||"0"}),b({staffName:"",loan:"",rebate:"",savings:"",dps:"",admission:"",passbook:"",savingsAdjust:"",nogodReturn:""}),ge("staffName"),at()},qt=()=>{if(ve){Me();return}b({staffName:"",loan:"",rebate:"",savings:"",dps:"",admission:"",passbook:"",savingsAdjust:"",nogodReturn:""}),ge("staffName")},en=()=>{if(!h||!h.id)return;if(ve){Me();return}const M=Rt(l);if(M.blocked){alert(`⚠️ ${M.reason||"দুটি কর্মদিবসের মধ্যবর্তী বন্ধের দিনে কোনো রিপোর্ট পরিবর্তন করা যাবে না।"}`);return}_R({...h,loan:qe(String(h.loan||"0"))||"0",rebate:qe(String(h.rebate||"0"))||"0",savings:qe(String(h.savings||"0"))||"0",dps:qe(String(h.dps||"0"))||"0",admission:qe(String(h.admission||"0"))||"0",passbook:qe(String(h.passbook||"0"))||"0",savingsAdjust:qe(String(h.savingsAdjust||"0"))||"0",nogodReturn:qe(String(h.nogodReturn||"0"))||"0"}),L(null),g(null),j(!1),at()},rn=M=>{if(ve){Me();return}confirm("Delete this staff report?")&&(ZR(M),at())},me=H?d.filter(M=>M.staffName.toLowerCase()===H.toLowerCase()):d,Ie=(()=>{if(!T||T==="default")return me;const M=[...me],q=T==="name-asc"?1:-1;return M.sort((Ce,De)=>q*String(Ce.staffName).localeCompare(String(De.staffName)))})(),ut=Ie.reduce((M,q)=>M+Number(q.loan||0),0),dt=Ie.reduce((M,q)=>M+Number(q.rebate||0),0),Ca=ut+dt,ss=Ie.reduce((M,q)=>M+Number(q.savings||0),0),ka=Ie.reduce((M,q)=>M+Number(q.dps||0),0),ba=ss+ka,sa=Ie.reduce((M,q)=>M+Number(q.passbook||0),0),Qt=Ie.reduce((M,q)=>M+Number(q.admission||0),0),ml=ut+ba+sa+Qt,Ua=Ie.reduce((M,q)=>M+Number(q.savingsAdjust||0),0),pa=Ie.reduce((M,q)=>M+Number(q.nogodReturn||0),0),la=Ua+pa,Da=new Set,ra=[...Qh(),...d.map(M=>M.staffName.trim())].map(M=>String(M||"").trim()).filter(M=>M!==""&&!Da.has(M.toLowerCase())&&Da.add(M.toLowerCase())).sort((M,q)=>jm(M,q,O)),cr=ze.filter(M=>M.type==="receive"&&M.txDate===l);let Ta=0,Zn=0,Ht=0;const En=ra.map(M=>{const q=d.filter(st=>st.staffName.toLowerCase()===M.toLowerCase()),Ce=q.reduce((st,jt)=>st+Number(jt.loan||0),0);q.reduce((st,jt)=>st+Number(jt.rebate||0),0);const De=q.reduce((st,jt)=>st+Number(jt.savings||0),0),vt=q.reduce((st,jt)=>st+Number(jt.dps||0),0),Et=q.reduce((st,jt)=>st+Number(jt.passbook||0),0),Pt=q.reduce((st,jt)=>st+Number(jt.admission||0),0),Ke=Ce+De+vt+Et+Pt,_t=q.reduce((st,jt)=>st+Number(jt.savingsAdjust||0),0),Zt=cr.filter(st=>Wh(st.category,M)).reduce((st,jt)=>st+(Number(jt.amount)||0),0),un=Zt+_t-Ke;return Ta+=Ke,Zn+=Zt,Ht+=_t,{name:M,todayAday:Ke,todayDeposite:Zt,savingsReturn:_t,diff:un}}),Kt=Zn+Ht-Ta,ls=ze.filter(M=>M.txDate===l),zn=ls.filter(M=>M.type==="receive"),rs=ls.filter(M=>M.type==="payment"),os=ml,is=Ne,ga=zn.filter(M=>M.category.toLowerCase().includes("bank withdraw")).reduce((M,q)=>M+(Number(q.amount)||0),0),yt=rs.filter(M=>{const q=M.category.toLowerCase().trim();return q.includes("fund payment")||q.includes("fund transfer")||q.includes("fund")&&!q.includes("receive")?!1:ht.includes(q)||q.includes("jagoron")||q.includes("agrossor")||q.includes("buni")||q.includes("sufolon")||q.includes("mfce")||!!(M.subCategory&&M.subCategory.trim().length>0)});let pn=0,Fn=0;for(const M of yt){const q=Number(M.amount)||0;M.category.toLowerCase().trim().includes("buni")?pn+=q:Fn+=q}const v=Math.round(Fn*.01+pn*.005),oe=yt.length*5,le=zn.filter(M=>{const q=M.category.toLowerCase().trim();return!(q.includes("bank withdraw")||q.includes("fund receive")||q.includes("welfare")||q.includes("kallayan")||q.includes("loan form")||Qh().some(Ce=>Wh(q,Ce)))}).reduce((M,q)=>M+(Number(q.amount)||0),0),Se=yt.reduce((M,q)=>M+(Number(q.amount)||0),0),we=rs.filter(M=>M.category.toLowerCase().includes("bank deposit")||M.category.toLowerCase().includes("bank deposite")).reduce((M,q)=>M+(Number(q.amount)||0),0),Ge=la,on=rs.filter(M=>{const q=M.category.toLowerCase().trim();return q.includes("fund payment")||q.includes("fund transfer")||q.includes("fund")&&!q.includes("receive")}).reduce((M,q)=>M+(Number(q.amount)||0),0),Qe=rs.filter(M=>{const q=M.category.toLowerCase().trim();return!(yt.some(Ce=>Ce.id===M.id)||q.includes("bank deposit")||q.includes("bank deposite")||q.includes("fund payment")||q.includes("fund transfer")||q.includes("fund")&&!q.includes("receive"))}).reduce((M,q)=>M+(Number(q.amount)||0),0),oa=[{label:"Today All Aday",amount:os},{label:"Hand Cash",amount:is},{label:"Bank Withdraw",amount:ga},{label:"Kallayan",amount:v},{label:"Loan Form",amount:oe},{label:"Others Income",amount:le}].filter(M=>M.amount>0),Ut=[{label:"Disburse",amount:Se},{label:"Bank Deposit",amount:we},{label:"Savings Return",amount:Ge},{label:"Fund Payment",amount:on},{label:"Others Expense",amount:Qe}].filter(M=>M.amount>0),tt=oa.reduce((M,q)=>M+q.amount,0),mt=Ut.reduce((M,q)=>M+q.amount,0),cn=Math.max(oa.length,Ut.length),Ft=Tm(l),wt=ve&&Ft?Math.round(Number(Ft.closingCash)||0):tt-mt,$t=zn.filter(M=>M.category.toLowerCase().includes("fund receive")).reduce((M,q)=>M+(Number(q.amount)||0),0),cs=ve&&Ft?Math.round(Number(Ft.closingBank)||0):pe-ga+we+$t,ur=mt-we,uo=ga,fc=uo-ur,Al=["Sakib","Mintu","Alamgir","Monir"].map(M=>{const q=En.find(Ce=>Ce.name.toLowerCase()===M.toLowerCase());return{name:M,diff:q?Math.round(q.diff):0}});return n.jsxs("div",{className:`space-y-6 ${W&&U?"pb-80":""}`,children:[typeof document<"u"&&ic.createPortal(n.jsx("div",{ref:ie,onPointerDown:be,onPointerMove:p,onPointerUp:N,onPointerCancel:N,onClick:P,style:B?{transform:`translate3d(${B.x}px, ${B.y}px, 0)`,left:0,top:0,right:"auto",bottom:"auto",touchAction:"none"}:{right:"16px",bottom:W&&U?"340px":"75px",touchAction:"none"},className:"fixed z-[60] select-none print:hidden drop-shadow-2xl cursor-grab active:cursor-grabbing touch-none block",children:ee?n.jsxs("div",{className:"bg-white shadow-2xl rounded-2xl border-2 border-purple-900 overflow-hidden min-w-[240px] touch-none",children:[n.jsxs("div",{className:"bg-purple-900 text-white px-3.5 py-2 flex items-center justify-between gap-3 text-xs font-bold cursor-grab active:cursor-grabbing select-none",onClick:P,title:"ধরে যেকোনো জায়গায় সরানো যাবে / ক্লিক করলে বন্ধ হবে",children:[n.jsxs("div",{className:"flex items-center gap-1.5",children:[n.jsx("span",{className:"text-slate-300",children:"⠿"}),n.jsx("span",{children:"👥"}),n.jsx("span",{children:"Staff Dena / Poana"})]}),n.jsx("div",{className:"flex items-center gap-1",children:n.jsx("button",{type:"button",onPointerDown:M=>M.stopPropagation(),onPointerUp:M=>{M.stopPropagation(),C(!1)},onClick:M=>{M.stopPropagation(),C(!1)},className:"hover:bg-purple-800 rounded px-1.5 py-0.5 text-xs cursor-pointer",title:"বক্স বন্ধ করুন",children:"✕"})})]}),!V&&n.jsx("div",{className:"p-1 bg-[#fdecd2]",children:n.jsxs("table",{className:"border-collapse text-center text-xs font-sans w-full",children:[n.jsx("thead",{children:n.jsx("tr",{className:"bg-[#fdecd2] border-b border-amber-300",children:Al.map(M=>n.jsx("th",{className:"border border-amber-300 px-3 py-1 font-bold text-indigo-950",children:M.name},M.name))})}),n.jsx("tbody",{children:n.jsx("tr",{className:"bg-emerald-400",children:Al.map(M=>n.jsx("td",{className:"border border-amber-300 px-3 py-1.5 font-black text-black font-mono",children:M.diff},M.name))})})]})})]}):n.jsxs("div",{onClick:P,className:"relative flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-purple-900 active:bg-purple-950 text-white shadow-2xl ring-2 ring-purple-400/50 cursor-grab active:cursor-grabbing touch-none select-none",title:"Staff Dena / Poana (টেনে যেকোনো দিকে সরানো যাবে / ক্লিক করলে খুলবে)",children:[n.jsx("span",{className:"text-xl sm:text-2xl leading-none select-none pointer-events-none",children:"👥"}),n.jsx("span",{className:"absolute -top-1 -right-1 flex h-4 min-w-[16px] sm:h-5 sm:min-w-[20px] items-center justify-center rounded-full bg-amber-400 px-1 text-[9px] sm:text-[10px] font-mono font-black text-purple-950 shadow pointer-events-none",children:Al.length})]})}),document.body),_?n.jsxs("button",{type:"button",onClick:()=>Q(!1),className:"flex w-full cursor-pointer items-center justify-center gap-2 rounded-2xl border border-indigo-200 bg-gradient-to-r from-indigo-50 to-purple-50 px-4 py-3 shadow-sm transition hover:border-indigo-400 hover:from-indigo-100 hover:to-purple-100",title:"Staff Collection Report Entry ফর্ম খুলুন",children:[n.jsx("span",{className:"flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-base text-white shadow",children:"✏️"}),n.jsx("span",{className:"text-sm font-black text-indigo-900",children:"Staff Collection Report Entry"}),n.jsx("span",{className:"rounded-full bg-indigo-200 px-2 py-0.5 text-[10px] font-black text-indigo-800",children:"খুলতে ক্লিক করুন ▼"})]}):n.jsxs("div",{className:"rounded-2xl border border-slate-200 bg-white p-5 shadow-sm",children:[!ve&&Rt(l).blocked&&n.jsxs("div",{className:"mb-4 rounded-xl border border-rose-400 bg-rose-50 p-3 text-xs sm:text-sm font-bold text-rose-900 flex items-start gap-2 shadow-xs",children:[n.jsx("span",{className:"text-base shrink-0",children:"🚫"}),n.jsxs("div",{children:[n.jsx("span",{className:"block font-black text-rose-950",children:"এই তারিখটি ব্লক (কর্মদিবসের মধ্যবর্তী বন্ধের দিন)"}),n.jsx("span",{className:"text-xs text-rose-800 font-normal mt-0.5 block",children:Rt(l).reason})]})]}),n.jsxs("div",{className:"mb-4 flex flex-wrap items-center justify-between gap-2 border-b pb-3",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("h2",{className:"text-xl font-bold text-slate-900",children:"Staff Collection Report Entry"}),ve&&n.jsx("span",{className:`inline-flex shrink-0 items-center gap-1 rounded-lg border border-rose-300 bg-rose-100 px-2 py-0.5 text-[10px] font-black text-rose-700 ${Bt?"lock-pulse":""}`,title:"দিন সমাপ্ত (Day Closed) — হিসাব লক করা আছে",children:"🔒 Day Closed"})]}),n.jsxs("div",{className:"flex items-center gap-2",children:[W&&n.jsxs("button",{type:"button",disabled:ve,onClick:()=>{if(ve){Me();return}j(!U)},className:`rounded-xl px-3 py-1 text-xs font-bold transition flex items-center gap-1.5 shadow-xs border cursor-pointer ${ve?"bg-slate-200 text-slate-500 border-slate-300 cursor-not-allowed opacity-60":U?"bg-indigo-600 text-white border-indigo-500 shadow-indigo-300 ring-2 ring-indigo-400/40":"bg-indigo-50 text-indigo-700 hover:bg-indigo-100 border-indigo-200"}`,title:ve?"দিন সমাপ্ত (Locked)":"কাস্টম কিবোর্ড অন/অফ করুন",children:[n.jsx("span",{children:ve?"🔒 লক করা":"⌨️ কাস্টম কিবোর্ড"}),n.jsx("span",{className:`text-[10px] px-1.5 py-0.2 rounded font-mono font-bold ${ve?"bg-slate-300 text-slate-600":U?"bg-indigo-900 text-white":"bg-indigo-200 text-indigo-900"}`,children:ve?"LOCKED":U?"ON":"OFF"})]}),n.jsx("button",{type:"button",onClick:()=>Q(!0),className:"rounded-lg bg-rose-600 px-2.5 py-1 text-sm font-black text-white shadow transition hover:bg-rose-700 cursor-pointer",title:"বন্ধ করুন — এন্ট্রি ফর্ম আইকনে collapse হবে",children:"✕"}),n.jsxs("div",{className:"text-xs font-mono font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded-lg border border-slate-200",children:["Date: ",l]})]})]}),n.jsxs("div",{className:"grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5",children:[n.jsxs("div",{id:"field-staffName",onClick:W?()=>ct("staffName"):void 0,className:`rounded-lg transition ${W&&U&&Re==="staffName"?"ring-2 ring-indigo-500 p-0.5 bg-amber-50":""}`,children:[n.jsx("label",{className:"mb-1 block text-xs font-bold text-slate-700",children:"Staff Name"}),n.jsx(x5,{value:A.staffName,disabled:ve,readOnly:W,onChange:M=>{ve||(b({...A,staffName:M}),W&&ge("loan"))},options:ra})]}),Wa.filter(M=>M.isNumeric).map(M=>{const q=M.key,Ce=W&&U&&Re===q,De=A[q]||"",vt=/[+\-*/]/.test(De),Et=vt?qe(De):"",Pt=q==="savingsAdjust"||q==="nogodReturn",Ke=q==="loan"||q==="savings",_t=q==="rebate";return n.jsxs("div",{id:`field-${q}`,onClick:W?()=>ct(q):void 0,className:`rounded-lg transition ${W?"cursor-pointer":""}`,children:[n.jsxs("div",{className:"flex items-center justify-between mb-1",children:[n.jsx("label",{className:"text-xs font-bold text-slate-700",children:M.label}),vt&&n.jsxs("span",{className:"text-[10px] font-mono font-bold text-emerald-700 bg-emerald-100 px-1 py-0.2 rounded border border-emerald-300",children:["=",de(Number(Et)||0)]})]}),n.jsx("input",{type:"text",id:`input-${q}`,inputMode:W?"none":void 0,readOnly:W,disabled:ve,value:De,onFocus:W?Zt=>{Zt.target.blur(),ct(q)}:()=>ge(q),onTouchStart:W?Zt=>{Zt.preventDefault(),ct(q)}:void 0,onClick:W?()=>ct(q):void 0,onChange:Zt=>{const un=Zt.target.value;un.endsWith("=")?b({...A,[q]:qe(un)}):b({...A,[q]:un})},onKeyDown:Zt=>{if(Zt.key==="Enter"){Zt.preventDefault();const un=Zt.currentTarget.value;/[+\-*/]/.test(un)&&b({...A,[q]:qe(un)}),It(q,!1)}},onBlur:()=>{De&&/[+\-*/]/.test(De)&&b({...A,[q]:qe(De)})},placeholder:q==="loan"?"0 (উদা: ১+২+৩=৬)":"0",className:`w-full rounded border px-2.5 py-1.5 text-right font-mono text-xs font-bold transition focus:outline-none ${ve?"border-slate-300 bg-slate-100 text-slate-500 cursor-not-allowed opacity-60":Ce?"border-indigo-600 ring-2 ring-indigo-500 bg-amber-100 text-slate-950 scale-[1.02]":Pt?"border-rose-300 bg-rose-50 text-rose-900 focus:border-rose-500":_t?"border-slate-300 bg-amber-50 text-slate-900 focus:border-indigo-500":Ke?"border-slate-300 bg-yellow-50 text-slate-900 focus:border-indigo-500":"border-slate-300 bg-white text-slate-900 focus:border-indigo-500"} ${W?"cursor-pointer":""}`})]},q)})]}),n.jsxs("div",{className:"mt-4 flex flex-wrap gap-2",children:[n.jsx("button",{type:"button",onClick:kt,disabled:ve||!Gt(l)||Rt(l).blocked,className:"rounded-lg bg-green-600 px-6 py-2 text-sm font-bold text-white shadow hover:bg-green-700 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",children:ve?"🔒 দিন সমাপ্ত (লকড)":Rt(l).blocked?"🚫 তারিখ ব্লকড":Gt(l)?"Save Report":"☀️ দিন শুরু (Day Open) করুন"}),n.jsx("button",{type:"button",onClick:qt,disabled:ve||!Gt(l)||Rt(l).blocked,className:"rounded-lg bg-slate-500 px-6 py-2 text-sm font-bold text-white hover:bg-slate-600 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",children:"Reset"})]})]}),n.jsxs("div",{className:"rounded-2xl border border-slate-200 bg-white p-2.5 sm:p-3 shadow-sm",children:[n.jsxs("div",{className:"flex items-stretch gap-1.5 sm:gap-2",children:[n.jsxs("div",{className:"flex min-w-0 flex-1 flex-col justify-center rounded-xl bg-emerald-50 border border-emerald-300 p-2 sm:p-3 text-center",children:[n.jsx("span",{className:"text-[10px] sm:text-xs font-bold text-emerald-800",children:ve?"Closing Cash":"Today Cash"}),n.jsx("span",{className:"font-mono text-xs sm:text-xl font-black text-emerald-950 mt-0.5 whitespace-nowrap",children:de(wt)})]}),n.jsxs("div",{className:"flex min-w-0 flex-1 flex-col justify-center rounded-xl bg-indigo-50 border border-indigo-300 p-2 sm:p-3 text-center",children:[n.jsx("span",{className:"text-[10px] sm:text-xs font-bold text-indigo-800",children:ve?"Closing Bank":"Today Bank"}),n.jsx("span",{className:"font-mono text-xs sm:text-xl font-black text-indigo-950 mt-0.5 whitespace-nowrap",children:de(cs)})]}),n.jsx("button",{type:"button",onClick:()=>K(!0),title:"Denomination — Check Diff","aria-label":"Denomination — Check Diff",className:"flex w-9 shrink-0 cursor-pointer items-center justify-center rounded-xl border border-amber-600 bg-amber-500 text-base leading-none shadow-xs hover:bg-amber-600 sm:w-11 sm:text-xl",children:"💰"})]}),n.jsx("div",{className:"mt-1.5 sm:mt-2",children:n.jsxs("div",{className:"flex min-w-0 flex-col justify-center gap-0.5 rounded-xl border-2 border-purple-900 bg-white p-2 sm:p-2.5 overflow-hidden",children:[n.jsxs("div",{className:"flex items-baseline justify-between gap-1 min-w-0",children:[n.jsx("span",{className:"whitespace-nowrap text-[10px] sm:text-xs font-bold text-purple-900",children:"Expens"}),n.jsx("span",{className:"truncate font-mono text-[10px] sm:text-sm font-black text-slate-950",children:de(ur)})]}),n.jsxs("div",{className:"flex items-baseline justify-between gap-1 min-w-0",children:[n.jsx("span",{className:"whitespace-nowrap text-[10px] sm:text-xs font-bold text-purple-900",children:"Check"}),n.jsx("span",{className:"truncate font-mono text-[10px] sm:text-sm font-black text-slate-950",children:de(uo)})]}),n.jsxs("div",{className:"mt-0.5 flex min-w-0 items-baseline justify-between gap-1 rounded-md border border-emerald-700 bg-emerald-400 px-1.5 py-1",children:[n.jsx("span",{className:"whitespace-nowrap text-[10px] sm:text-xs font-black text-emerald-950",children:"Diferent"}),n.jsx("span",{className:"truncate font-mono text-[10px] sm:text-sm font-black text-emerald-950",children:de(fc)})]})]})})]}),n.jsxs("div",{className:"overflow-hidden rounded-2xl bg-white shadow-sm border border-[#d4a373]",children:[n.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b border-[#d4a373] px-4 py-2.5 bg-[#fdecd2]",children:[n.jsx("h3",{className:"font-serif font-bold text-slate-900 text-sm sm:text-base",children:"Staff Collection Report Table"}),n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("button",{type:"button",onClick:()=>v5([{el:o.current,heading:"Staff Collection Report Table"},{el:u.current,heading:"Dena / Poana"},{el:c.current,heading:"Today All Report"}],{title:"Gobra Daily Cash — Full Report",subtitle:`${mc()} • Date: ${l}${H?` • Staff: ${ft(H)}`:""}`}),title:"একদম সব রিপোর্ট একসাথে প্রিন্ট (এক A4 পাতা)",className:"print:hidden cursor-pointer rounded-lg bg-indigo-700 px-2.5 py-1 text-[11px] font-black text-white hover:bg-indigo-800 shadow-sm",children:"🖨️ Print All"}),n.jsx("div",{className:"w-32 sm:w-40",children:n.jsx(na,{value:H,onChange:M=>D(M),noKeyboardOnMobile:!0,options:[{value:"",label:"All Staff"},...ra.map(M=>({value:M,label:ft(M)}))],placeholder:"All Staff",className:"w-full cursor-pointer rounded border border-[#d4a373] bg-white px-2 py-1 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-1 focus:ring-[#d4a373]"})}),n.jsx("div",{className:"w-36 sm:w-44",children:n.jsx(na,{value:T,onChange:M=>Z(M),noKeyboardOnMobile:!0,options:[{value:"default",label:"Sort: 🖐️ ম্যানুয়াল"},{value:"name-asc",label:"Sort: Name A→Z"},{value:"name-desc",label:"Sort: Name Z→A"}],placeholder:"Sort: 🖐️ ম্যানুয়াল",className:"w-full rounded border border-[#d4a373] bg-white px-2 py-1 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-1 focus:ring-[#d4a373]"})})]})]}),n.jsx("div",{className:"overflow-x-auto",ref:o,children:n.jsxs("table",{className:"w-full border-collapse border border-[#d4a373] text-center text-xs sm:text-sm",children:[n.jsx("thead",{children:n.jsxs("tr",{className:"bg-[#fdecd2] text-slate-950 font-bold border-b border-[#d4a373]",children:[n.jsx("th",{className:"sticky left-0 z-20 border border-[#d4a373] bg-[#fdecd2] px-2.5 py-2 shadow-[2px_0_0_0_#d4a373]",children:"Name"}),n.jsx("th",{className:"border border-[#d4a373] px-2 py-2",children:"Loan"}),n.jsx("th",{className:"border border-[#d4a373] px-2 py-2",children:"Rebate"}),n.jsx("th",{className:"border border-[#d4a373] px-2 py-2",children:"Total Loan"}),n.jsx("th",{className:"border border-[#d4a373] px-2 py-2",children:"Savings"}),n.jsx("th",{className:"border border-[#d4a373] px-2 py-2",children:"DPS"}),n.jsx("th",{className:"border border-[#d4a373] px-2 py-2",children:"Total Sav"}),n.jsx("th",{className:"border border-[#d4a373] px-2 py-2",children:"Passbook"}),n.jsx("th",{className:"border border-[#d4a373] px-2 py-2",children:"Admission"}),n.jsx("th",{className:"border border-[#d4a373] px-2 py-2",children:"Grant Total"}),n.jsx("th",{className:"border border-[#d4a373] px-2 py-2",children:"Adjust"}),n.jsx("th",{className:"border border-[#d4a373] px-2 py-2",children:"Nogod"}),n.jsx("th",{className:"border border-[#d4a373] px-2 py-2",children:"Total Ret"}),n.jsx("th",{className:"border border-[#d4a373] px-2 py-2",children:"Action"})]})}),n.jsx("tbody",{children:Ie.length===0?n.jsx("tr",{children:n.jsxs("td",{colSpan:14,className:"border border-[#d4a373] px-3 py-6 text-center text-slate-400",children:["No staff reports on ",l]})}):Ie.map(M=>{const q=Number(M.loan)||0,Ce=Number(M.rebate)||0,De=q+Ce,vt=Number(M.savings)||0,Et=Number(M.dps)||0,Pt=vt+Et,Ke=Number(M.passbook)||0,_t=Number(M.admission)||0,Zt=q+Pt+Ke+_t,un=Number(M.savingsAdjust)||0,st=Number(M.nogodReturn)||0,jt=un+st;return n.jsxs("tr",{className:"border-b border-[#d4a373] hover:bg-[#fff9f2] bg-white",children:[n.jsx("td",{className:"sticky left-0 z-10 border border-[#d4a373] bg-white px-2 py-1.5 font-bold text-left text-slate-900 shadow-[2px_0_0_0_#d4a373]",children:M.staffName}),n.jsx("td",{className:"border border-[#d4a373] px-2 py-1.5 text-right font-mono",children:q>0?de(q):""}),n.jsx("td",{className:"border border-[#d4a373] px-2 py-1.5 text-right font-mono",children:Ce>0?de(Ce):""}),n.jsx("td",{className:"border border-[#d4a373] px-2 py-1.5 text-right font-mono font-bold bg-[#fdf5ea]",children:De>0?de(De):""}),n.jsx("td",{className:"border border-[#d4a373] px-2 py-1.5 text-right font-mono",children:vt>0?de(vt):""}),n.jsx("td",{className:"border border-[#d4a373] px-2 py-1.5 text-right font-mono",children:Et>0?de(Et):""}),n.jsx("td",{className:"border border-[#d4a373] px-2 py-1.5 text-right font-mono font-bold bg-[#fdf5ea]",children:Pt>0?de(Pt):""}),n.jsx("td",{className:"border border-[#d4a373] px-2 py-1.5 text-right font-mono",children:Ke>0?de(Ke):""}),n.jsx("td",{className:"border border-[#d4a373] px-2 py-1.5 text-right font-mono",children:_t>0?de(_t):""}),n.jsx("td",{className:"border border-[#d4a373] px-2 py-1.5 text-right font-mono font-black bg-[#fdf5ea]",children:Zt>0?de(Zt):""}),n.jsx("td",{className:"border border-[#d4a373] px-2 py-1.5 text-right font-mono",children:un>0?de(un):""}),n.jsx("td",{className:"border border-[#d4a373] px-2 py-1.5 text-right font-mono",children:st>0?de(st):""}),n.jsx("td",{className:"border border-[#d4a373] px-2 py-1.5 text-right font-mono font-black bg-[#fdf5ea]",children:jt>0?de(jt):""}),n.jsxs("td",{className:"border border-[#d4a373] px-1 py-1 text-center whitespace-nowrap",children:[n.jsx("button",{type:"button",disabled:ve,onClick:()=>{if(ve){Me();return}g({...M}),L({...M,loan:String(M.loan??""),rebate:String(M.rebate??""),savings:String(M.savings??""),dps:String(M.dps??""),admission:String(M.admission??""),passbook:String(M.passbook??""),savingsAdjust:String(M.savingsAdjust??""),nogodReturn:String(M.nogodReturn??"")}),ge("loan"),W&&j(!0)},className:`mr-1 rounded px-2.5 py-1 text-xs font-bold text-white shadow-xs transition ${ve?"bg-slate-400 cursor-not-allowed opacity-50":"bg-blue-600 hover:bg-blue-700 cursor-pointer active:scale-95"}`,title:ve?"দিন সমাপ্ত (Locked) - উপরের Working-Day বার থেকে Re-open করুন":"এই স্টাফের রিপোর্ট এডিট করুন",children:ve?"🔒 Edit":"✏️ Edit"}),n.jsx("button",{type:"button",disabled:ve,onClick:()=>{if(ve){Me();return}rn(M.id)},className:`rounded px-2 py-1 text-xs font-bold text-white shadow-xs transition ${ve?"bg-slate-400 cursor-not-allowed opacity-50":"bg-rose-600 hover:bg-rose-700 cursor-pointer active:scale-95"}`,title:ve?"দিন সমাপ্ত (Locked) - উপরের Working-Day বার থেকে Re-open করুন":"এই রিপোর্ট মুছুন",children:ve?"🔒 Del":"Del"})]})]},M.id)})}),Ie.length>0&&n.jsx("tfoot",{className:"bg-[#fdecd2] text-slate-950 font-bold border-t-2 border-[#d4a373]",children:n.jsxs("tr",{children:[n.jsx("td",{className:"sticky left-0 z-10 border border-[#d4a373] bg-[#fdecd2] px-2 py-2 shadow-[2px_0_0_0_#d4a373]",children:"Total"}),n.jsx("td",{className:"border border-[#d4a373] px-2 py-2 text-right font-mono",children:de(ut)}),n.jsx("td",{className:"border border-[#d4a373] px-2 py-2 text-right font-mono",children:de(dt)}),n.jsx("td",{className:"border border-[#d4a373] px-2 py-2 text-right font-mono font-black",children:de(Ca)}),n.jsx("td",{className:"border border-[#d4a373] px-2 py-2 text-right font-mono",children:de(ss)}),n.jsx("td",{className:"border border-[#d4a373] px-2 py-2 text-right font-mono",children:de(ka)}),n.jsx("td",{className:"border border-[#d4a373] px-2 py-2 text-right font-mono font-black",children:de(ba)}),n.jsx("td",{className:"border border-[#d4a373] px-2 py-2 text-right font-mono",children:de(sa)}),n.jsx("td",{className:"border border-[#d4a373] px-2 py-2 text-right font-mono",children:de(Qt)}),n.jsx("td",{className:"border border-[#d4a373] px-2 py-2 text-right font-mono font-black",children:de(ml)}),n.jsx("td",{className:"border border-[#d4a373] px-2 py-2 text-right font-mono",children:de(Ua)}),n.jsx("td",{className:"border border-[#d4a373] px-2 py-2 text-right font-mono",children:de(pa)}),n.jsx("td",{className:"border border-[#d4a373] px-2 py-2 text-right font-mono font-black",children:de(la)}),n.jsx("td",{className:"border border-[#d4a373]"})]})})]})})]}),n.jsxs("div",{className:"rounded-2xl border-2 border-blue-900 bg-white shadow-sm overflow-hidden max-w-2xl mx-auto",children:[n.jsxs("div",{className:"bg-[#fdecd2] py-2 text-center border-b-2 border-blue-900 relative",children:[n.jsx("h3",{className:"font-serif font-black text-xl sm:text-2xl text-slate-900",children:"Dena / Poana"}),n.jsx("div",{className:"absolute right-2 top-1/2 -translate-y-1/2",children:n.jsx(sp,{mode:O,onChange:G})})]}),n.jsx("div",{className:"overflow-x-auto",ref:u,children:n.jsxs("table",{className:"w-full border-collapse border border-amber-200 text-xs sm:text-sm",children:[n.jsx("thead",{children:n.jsxs("tr",{className:"bg-[#eedbc9] text-slate-900 font-bold text-center",children:[n.jsx("th",{className:"border border-amber-200 px-3 py-2",children:"Staff Name"}),n.jsx("th",{className:"border border-amber-200 px-3 py-2",children:"Today Aday"}),n.jsx("th",{className:"border border-amber-200 px-3 py-2",children:"Today Deposit"}),n.jsx("th",{className:"border border-amber-200 px-3 py-2",children:"Savings Return"}),n.jsx("th",{className:"border border-amber-200 px-3 py-2",children:"Dena / Poana"})]})}),n.jsx("tbody",{children:En.map(M=>n.jsxs("tr",{className:"border-b border-amber-200",children:[n.jsx("td",{className:"border border-amber-200 px-3 py-2 font-bold bg-[#eedbc9] text-left",children:M.name}),n.jsx("td",{className:"border border-amber-200 px-3 py-2 text-right font-mono font-bold bg-[#f0f6ff]",children:de(M.todayAday)}),n.jsx("td",{className:"border border-amber-200 px-3 py-2 text-right font-mono font-bold bg-[#f0f6ff]",children:de(M.todayDeposite)}),n.jsx("td",{className:"border border-amber-200 px-3 py-2 text-right font-mono font-bold bg-[#f0f6ff]",children:de(M.savingsReturn)}),n.jsx("td",{className:"border border-amber-200 px-3 py-2 text-right font-mono font-black bg-[#f0f6ff]",children:Math.round(M.diff)})]},M.name))}),n.jsx("tfoot",{className:"bg-[#dfbf9f] font-black border-t-2 border-amber-300",children:n.jsxs("tr",{children:[n.jsx("td",{className:"border border-amber-200 px-3 py-2 text-center",children:"Total"}),n.jsx("td",{className:"border border-amber-200 px-3 py-2 text-right font-mono",children:de(Ta)}),n.jsx("td",{className:"border border-amber-200 px-3 py-2 text-right font-mono",children:de(Zn)}),n.jsx("td",{className:"border border-amber-200 px-3 py-2 text-right font-mono",children:de(Ht)}),n.jsx("td",{className:"border border-amber-200 px-3 py-2 text-right font-mono",children:de(Kt)})]})})]})})]}),n.jsxs("div",{className:"rounded-2xl border-2 border-blue-900 bg-white shadow-sm overflow-hidden max-w-3xl mx-auto",children:[n.jsx("div",{className:"bg-[#fdecd2] py-2 text-center border-b-2 border-blue-900 relative",children:n.jsx("h3",{className:"font-serif font-black text-xl sm:text-2xl text-slate-900",children:"Today All Report"})}),n.jsx("div",{className:"overflow-x-auto",ref:c,children:n.jsxs("table",{className:"w-full border-collapse border border-amber-200 text-xs sm:text-sm",children:[n.jsx("thead",{children:n.jsxs("tr",{className:"bg-[#fdecd2] text-slate-900 font-black text-center",children:[n.jsx("th",{colSpan:2,className:"border border-amber-200 px-4 py-2 w-1/2",children:"Income"}),n.jsx("th",{colSpan:2,className:"border border-amber-200 px-4 py-2 w-1/2",children:"Expenditure"})]})}),n.jsx("tbody",{children:cn===0?n.jsx("tr",{children:n.jsxs("td",{colSpan:4,className:"p-6 text-center text-slate-400",children:["No data on ",l]})}):Array.from({length:cn},(M,q)=>{const Ce=oa[q],De=Ut[q];return n.jsxs("tr",{className:"border-b border-amber-200",children:[n.jsx("td",{className:"border border-amber-200 px-3 py-1.5 font-bold bg-[#fdecd2] w-1/3",children:Ce?Ce.label:""}),n.jsx("td",{className:"border border-amber-200 px-3 py-1.5 text-right font-mono font-bold w-1/6",children:Ce?de(Ce.amount):""}),n.jsx("td",{className:"border border-amber-200 px-3 py-1.5 font-bold bg-[#fdecd2] w-1/3",children:De?De.label:""}),n.jsx("td",{className:"border border-amber-200 px-3 py-1.5 text-right font-mono font-bold w-1/6",children:De?de(De.amount):""})]},q)})}),n.jsx("tfoot",{className:"bg-[#dfbf9f] font-black border-t-2 border-amber-300",children:n.jsxs("tr",{children:[n.jsx("td",{className:"border border-amber-200 px-3 py-2 text-center",children:"Total"}),n.jsx("td",{className:"border border-amber-200 px-3 py-2 text-right font-mono",children:de(tt)}),n.jsx("td",{className:"border border-amber-200 px-3 py-2 text-center",children:"Total"}),n.jsx("td",{className:"border border-amber-200 px-3 py-2 text-right font-mono",children:de(mt)})]})})]})})]}),ce&&n.jsx(zm,{open:ce,onClose:()=>K(!1),cashInHand:ae,date:l}),h&&n.jsx("div",{className:"fixed inset-0 z-40 flex items-start justify-center bg-black/60 p-2 sm:p-4 pt-3 sm:pt-6 pb-88 overflow-y-auto",children:n.jsxs("div",{className:"w-full max-w-xl rounded-2xl bg-white p-4 sm:p-6 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 my-auto",children:[n.jsxs("div",{className:"flex items-center justify-between border-b pb-3 mb-4",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-xl",children:"✏️"}),n.jsxs("div",{children:[n.jsxs("h3",{className:"text-base sm:text-lg font-bold text-slate-900 leading-tight",children:["Edit Staff Report (",ft(h.staffName),")"]}),n.jsxs("span",{className:"text-[11px] font-mono text-slate-500",children:["Date: ",l]})]})]}),n.jsxs("div",{className:"flex items-center gap-2",children:[W&&n.jsxs("button",{type:"button",onClick:()=>j(!U),className:`rounded-xl px-2.5 py-1 text-xs font-bold transition flex items-center gap-1.5 shadow-xs border cursor-pointer ${U?"bg-indigo-600 text-white border-indigo-500 shadow-indigo-300 ring-2 ring-indigo-400/40":"bg-indigo-50 text-indigo-700 hover:bg-indigo-100 border-indigo-200"}`,title:"কাস্টম কিবোর্ড অন/অফ করুন",children:[n.jsx("span",{children:"⌨️ কিবোর্ড"}),n.jsx("span",{className:`text-[10px] px-1.5 py-0.2 rounded font-mono font-bold ${U?"bg-indigo-900 text-white":"bg-indigo-200 text-indigo-900"}`,children:U?"ON":"OFF"})]}),n.jsx("button",{type:"button",onClick:()=>{L(null),g(null),j(!1)},className:"text-2xl text-slate-400 hover:text-rose-600 cursor-pointer leading-none p-1",title:"বন্ধ করুন",children:"×"})]})]}),n.jsxs("div",{className:"grid grid-cols-2 gap-3 sm:grid-cols-3",children:[n.jsxs("div",{id:"edit-field-staffName",onClick:W?()=>{ge("staffName"),j(!0)}:void 0,className:`col-span-2 sm:col-span-3 rounded-xl transition p-2 border ${W?"cursor-pointer":""} ${W&&U&&Re==="staffName"?"ring-2 ring-indigo-500 bg-amber-50 border-indigo-400":"border-slate-200 bg-slate-50/50"}`,children:[n.jsxs("label",{className:"mb-1 block text-xs font-bold text-slate-700",children:["Staff Name ",n.jsx("span",{className:"text-[10px] text-slate-500 font-normal",children:"(স্টাফ নির্বাচন)"})]}),n.jsx(na,{value:h.staffName,noKeyboardOnMobile:!0,onChange:M=>{L({...h,staffName:M}),W&&ge("loan")},options:ra.map(M=>({value:M,label:ft(M)})),placeholder:"Select option...",className:"w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-bold text-slate-800 focus:outline-none cursor-pointer"})]}),Wa.filter(M=>M.isNumeric).map(M=>{const q=M.key,Ce=W&&U&&Re===q,De=h[q]||"",vt=/[+\-*/]/.test(De),Et=vt?qe(De):"",Pt=q==="savingsAdjust"||q==="nogodReturn";return n.jsxs("div",{id:`edit-field-${q}`,onClick:W?()=>{ge(q),j(!0)}:void 0,className:`rounded-xl transition p-1.5 border ${W?"cursor-pointer":""} ${Ce?"border-indigo-600 ring-2 ring-indigo-500 bg-amber-50/90 scale-[1.02] shadow-sm":Pt?"border-rose-200 bg-rose-50/50":"border-slate-200 bg-slate-50/40"}`,children:[n.jsxs("div",{className:"flex items-center justify-between mb-1",children:[n.jsx("label",{className:"text-xs font-bold text-slate-700 truncate",children:M.label}),vt&&n.jsxs("span",{className:"text-[10px] font-mono font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.2 rounded border border-emerald-300",children:["=",de(Number(Et)||0)]})]}),n.jsx("input",{type:"text",id:`edit-input-${q}`,inputMode:W?"none":void 0,readOnly:W,value:De,onFocus:W?Ke=>{Ke.target.blur(),ge(q),j(!0)}:()=>ge(q),onTouchStart:W?Ke=>{Ke.preventDefault(),ge(q),j(!0)}:void 0,onClick:W?()=>{ge(q),j(!0)}:void 0,onChange:Ke=>{const _t=Ke.target.value;_t.endsWith("=")?L({...h,[q]:qe(_t)}):L({...h,[q]:_t})},onKeyDown:Ke=>{if(Ke.key==="Enter"){Ke.preventDefault();const _t=Ke.currentTarget.value;/[+\-*/]/.test(_t)&&L({...h,[q]:qe(_t)}),It(q,!0)}},onBlur:()=>{De&&/[+\-*/]/.test(De)&&L({...h,[q]:qe(De)})},placeholder:q==="loan"?"0 (উদা: ১২+১২=২৪)":"0",className:`w-full rounded-lg border px-3 py-1.5 text-right font-mono text-sm font-bold transition focus:outline-none ${W?"cursor-pointer":""} ${Ce?"border-indigo-600 bg-amber-100 text-slate-950 font-black shadow-inner":Pt?"border-rose-300 bg-white text-rose-900 focus:border-rose-500":"border-slate-300 bg-white text-slate-900 focus:border-indigo-500"}`})]},q)})]}),(()=>{const M=Number(qe(h.loan||"0"))||0,q=Number(qe(h.rebate||"0"))||0,Ce=M+q,De=Number(qe(h.savings||"0"))||0,vt=Number(qe(h.dps||"0"))||0,Et=De+vt,Pt=Number(qe(h.passbook||"0"))||0,Ke=Number(qe(h.admission||"0"))||0,_t=M+Et+Pt+Ke,Zt=Number(qe(h.savingsAdjust||"0"))||0,un=Number(qe(h.nogodReturn||"0"))||0,st=Zt+un;return n.jsx("div",{className:"mt-4 rounded-xl bg-amber-50/70 border border-amber-200 p-2.5 text-xs",children:n.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-center",children:[n.jsxs("div",{className:"bg-white p-1.5 rounded border border-amber-100",children:[n.jsx("div",{className:"text-[10px] text-slate-500 font-sans",children:"Total Loan"}),n.jsx("div",{className:"font-bold text-slate-900",children:de(Ce)})]}),n.jsxs("div",{className:"bg-white p-1.5 rounded border border-amber-100",children:[n.jsx("div",{className:"text-[10px] text-slate-500 font-sans",children:"Total Savings"}),n.jsx("div",{className:"font-bold text-slate-900",children:de(Et)})]}),n.jsxs("div",{className:"bg-white p-1.5 rounded border border-amber-200",children:[n.jsx("div",{className:"text-[10px] text-amber-900 font-sans font-bold",children:"Grant Total"}),n.jsx("div",{className:"font-black text-amber-700 text-sm",children:de(_t)})]}),n.jsxs("div",{className:"bg-white p-1.5 rounded border border-rose-200",children:[n.jsx("div",{className:"text-[10px] text-rose-700 font-sans font-bold",children:"Total Return"}),n.jsx("div",{className:"font-black text-rose-700 text-sm",children:de(st)})]})]})})})(),n.jsxs("div",{className:"flex items-center justify-between gap-3 mt-4 border-t pt-3",children:[n.jsx("button",{type:"button",onClick:()=>{y&&L({...y})},className:"rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-900 border border-amber-300 px-3 py-2 font-bold text-xs transition cursor-pointer",title:"এডিটের পরিবর্তনগুলো বাতিল করে মূল মানে ফিরে যান",children:"🔄 মূল মানে রিসেট"}),n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("button",{type:"button",onClick:()=>{L(null),g(null),j(!1)},className:"rounded-xl bg-slate-200 px-4 py-2 font-bold text-xs text-slate-700 hover:bg-slate-300 transition cursor-pointer",children:"বাতিল (Cancel)"}),n.jsxs("button",{type:"button",onClick:en,className:"rounded-xl bg-blue-600 px-5 py-2 font-bold text-xs text-white hover:bg-blue-700 transition cursor-pointer flex items-center gap-1.5 shadow",children:[n.jsx("span",{children:"💾"}),n.jsx("span",{children:"Update Report"})]})]})]})]})}),W&&n.jsx(h5,{open:U,activeField:Re,values:h?{staffName:h.staffName||"",loan:h.loan||"",rebate:h.rebate||"",savings:h.savings||"",dps:h.dps||"",admission:h.admission||"",passbook:h.passbook||"",savingsAdjust:h.savingsAdjust||"",nogodReturn:h.nogodReturn||""}:A,staffList:ra,onFieldSelect:M=>ge(M),onValueChange:(M,q)=>{h?L(Ce=>Ce?{...Ce,[M]:q}:null):b(Ce=>({...Ce,[M]:q}))},onSave:h?en:kt,onReset:h?()=>{y&&L({...y})}:qt,onClose:()=>j(!1),isEdit:!!h})]})}const O5="modulepreload",j5=function(l){return"/Daily-Cash/"+l},eb={},tb=function(o,u,c){let d=Promise.resolve();if(u&&u.length>0){let A=function(L){return Promise.all(L.map(y=>Promise.resolve(y).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};document.getElementsByTagName("link");const b=document.querySelector("meta[property=csp-nonce]"),h=(b==null?void 0:b.nonce)||(b==null?void 0:b.getAttribute("nonce"));d=A(u.map(L=>{if(L=j5(L),L in eb)return;eb[L]=!0;const y=L.endsWith(".css"),g=y?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${L}"]${g}`))return;const H=document.createElement("link");if(H.rel=y?"stylesheet":O5,y||(H.as="script"),H.crossOrigin="",H.href=L,h&&H.setAttribute("nonce",h),document.head.appendChild(H),y)return new Promise((D,T)=>{H.addEventListener("load",D),H.addEventListener("error",()=>T(new Error(`Unable to preload CSS for ${L}`)))})}))}function f(A){const b=new Event("vite:preloadError",{cancelable:!0});if(b.payload=A,window.dispatchEvent(b),!b.defaultPrevented)throw A}return d.then(A=>{for(const b of A||[])b.status==="rejected"&&f(b.reason);return o().catch(f)})},dp="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEA3ADcAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCACHAGEDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9U6KKKACiimSypBE8kjBI0BZmY4AA6mgB9fIn7Xf/AAUL8Nfs33troejW0PirxO0iPcWazbYoYDkFvMGQW3AKV6jNeb/tp/8ABQo6Dcf8K7+EM41jxTfOLabVLFt/2cuEZPIKkh3ySpFfPPwq/Zl8MeBNPPjL9oPVGmv9Yi3WXh6FhLeZuFkE09xEfmTyzskB6fKaAP1E+CHx58I/H7wda+IPCupR3UUm5ZLdiFljZSFfKHnAY4z0Nei1+Knj34TfET9h7xRp3xG+FXiKXxH8PrycpBqtjL5iTWySR+ZHclflQGUkcd1PpX6I/shftx+Ev2n9Cjtnmh0bxlAFS70qRtokkO8/uMnLqFXJPbNAH01RRRQAUUUUAFFFFABRRWR4q8V6V4K0K71jWbyOx0+1jaWWaU4AVQSf0BoAu6pqdro2n3F9ezJb2tvG0ssrnAVQMkn8BX5iftZftyeJvjrr0vwp+CMNzci5kaC41ayBLzY+bMLD+ErnP41U+NHx++IH7cfjC68D/DVbjSvAdnMDfash2+bGr4Mm4Y+QhuRS/DTw/pHgWzuvh38ImtZdeura9Oo+Opot8CtbQM08Vv0ZH2soyO9AHLeBfAWhfsiWupPpOn2vxE+M1jbzapPbonn2ukRQOjvLIOquoI59a2fhL4Hk8Rftmfs+az4vv5vFd3438ET+INSj1BvNjVri2vMRKD/yzCBQB6g1s/DrwRYeHNNg1i3ee41fxB8CtZ1TVLu5k3yXFxIV3MW6n7vf0Favwigmf9rX9kRYwAsPwktWkHoDaXoH64oA88/Z38U+Kvg98IPg7CmlSfELwP8AESLUV1DwnIhnMC2V7M8rQR9BlSHOe6muP+Ln7OCeGZ7D46fs9avPqnh6N5ZbiCwk3XWmSGNpZs7eFRQwX8RXvf7Kluy6D+xuvTy7HxuWHb78o/qK4L4IeF/EPw18JfBrW/AMjPLrPg3XdU8QaLcnzLXUIra7i4WPoHZWK5PbFAHvn7D/APwUY0v41R2vhDx3Lb6P4zXbHFLnZBdscBI0zyZOpNfdKsHUMpBB5BFfi/48/Zz0j4/+FL74tfBWZtI8QxrDf33hZG23dnK++QvGRgKoUZGK9g/YU/4KK3dhcWvw4+K7vBPABbWWqz8Y2gBY5CeWc9c0AfqDRUFlewajax3NtKs0Eg3K6HIIqegAooooA5H4ofFLw98IPCF94j8SX8djp9pG0jFjy2ATgDvwDX5t+P8Axz4t/bq8YXVxLqLeEvgzojtJJds2BcANIEl7FgyFRtr1X9uL9kv4wftL+PZRpupx23g+2SNbOzE6gM+0hpGH1cjB7Cvkj9pT4K/Gb9mz4KeGNK1/U0Pg+Gf7BHZW8i/vJtrzBmK88bCOaAPffh1cab4vW18FeCLQ6B8NNM8UaZouqXCnbcaq90AWw/DoBtzj3r0PwH4f0nwronhm10u3S0tbX/hN9g3BnKrGqgs3Vjjua+QPDPw+/aNudN1PV9LtZoUvtSsPE4kRQPMkSIJAQMdl21pad8Gf2nFishFJcRrJFdhFIH7v7XxP2/iAoA938LSRL4R0GVpVDr+ztfnBP95mrR+D0Fpa/te/szrLcorp8G7VYQT99lW44/75Zj+FeE2n7Hn7R0um6fAuoPDCmkt4bC7l/wCPAvzF9CSfzrz+P4XfGSw/bW8D/Dc6+YfGGg6ZDpen3aspEFolm8zID0IMbSfnQB9WfsplX0X9j7EigJpPjVmy3X96Rn9ad8HNSs7f4X/B2+Myw/ZfhX4sYKW54uIFP9TXyP8AHf4efG39kDXPA2kvq0xtdMS4XQZbfDrGLqQiWIEd22ZI681x8Hw0/aOsrWytIdP1ZLfTtPuNMt41iO1LacgzRj5ejEZNAH174hs7nRNe1TxZ4Xv49H1jwh8JfD+sxJCAIrhyrB1dBwxZcjJzXMfFb4U+HP2n9PuvE/h0W3hX4t6LDFLrGiblC3JkUMJkbhV+QZwK8D8I/Cb9onVNZuLW5s9TS21LT4tFvGkiOHtIkPlxHjoBxXOeIfgb8etDub7Wb6x1BJYbVUnulVh+4hiIGcDoEyKAPoj9iH/goXe/CG5g8HeObl7zwqJvIt7yR9z2mFOQT1bLkCv128N+JdN8W6Rb6ppN3Fe2U67kliYEGvwa+AH/AAT3+Ivx98GWHirSSkGn3bymF5HC5KOFJ59/5V+nv7A37N/xJ/Zts9f0XxdrI1Lw/PHE2n2/mh/Il3yNJ7/NvH5UAfXlFFFABXwX/wAFhGf/AIUV4NRP+WniVVP0+yz196V8Kf8ABXGD7T8HfAUROA3imMfX/Rpx/WgD6++ESlPhP4KVuGGiWQP/AH4SutrnfCLQaD8PtEM8iwW1ppkAd2OAqrEuSfyr85v2uP8AgpJqMGutofw1lRVspG867Y8TDoQpHof50Afp31r819Vff/wWc0sdSsOPoP7Ck/qa80+BX/BTHxXoHj20TxnKl/4fnUWzmMkmI7xmQ59AGrrvDfiSz8b/APBYbS9c0uYXGnXWnwzwyIcgq2gsc/rj6igD6L/4KIaroOhad8EtS16OGSztPiJp0s4l72wjmMo+nC5/Cvc/hT8fvBnxkmu4PDWqxXlzarvlhVgWVSSAcA98frX50/8ABZn4lpdeN/h54MtptzaZG+o3USn+OZlWMEeoWJj9Hr59/Yi8ceJ/gf8AtWeBzqVrcaVpuuzLY3InBVJonCIW99pbNAH7R/ET43eEPhZqen6f4j1WLT7q/ikmt0kYAuqY3EZPbIqp8Q/EumeL/wBn7xdrOmXKXmm3fh2+limjIIZTbvX57/8ABX24kX42fB2KGNpJG06/UKgyWLOgA/EgV0v/AAT4+Iera5+xn8ZPBmuPKuq+GbG/jjt7j/WRxSWbkLjsAwIoA+mP+CdcC2/7H/gBVGFa3lfH1lY19JV87/8ABPtNn7IXw5A5U2JIPqN7c19EUAFFFFABXw9/wVYjE3w4+GcbfdbxfAD9PJlH9a+4a+H/APgqjMF8CfC9By58XQED6RuD/OgDY/4KUfG5/gx8DLHw/pk5g1DX3+xKyHDJAi/Mf5Cvy88J/s9eJfGWk2msopt7efw3qHiJZZB9+3tm27v+BFa+xv2rre0/aK/byh+H15ck6PoWjzPLFzgSR2zzP+eU/KtHTwbj4SeHdVSNYLO3+B+oxyIvA+ecoPzIoA/Oz4jfCjxL8IdevNM1S3a7SxtLS8u5UHEaXcPmRg/UZr2//gnr8QrLw3+1RY+JvEV6I7Ky0e5kW4mbOFS3kjC5/wDHR7Cvo742+F4vE0f7SdhLEhvJ/DfgS1hZlBKSSGKPI9OHIr85/GXg3W/hb488U+CJfNOq6fetpeY8hn2yOOAP7xx+dAHtvjH4rQ/HP9rnw9428T6fLdaDqXiSzjmQfdNusiBYl9/LA/76NfS/7fvxt8DeLfDHw21Xwxow0nWNJ19AZEjCFbcodwyAP4ljP4V4x4f0Hxf8KrH4F+Hdb8CtFdWXjW21ItJgtesFH7rp2UGvWP2zvi9oOvfDex8P6n4FTw7rg1C3uY5RIGZtpyVwBxkA0AetfE/xF4T/AGj/APgoP8GLSymj1TTNK0qe8lVlypfPmKpBH+zXVXvh+w8A/tN/tM6fZwCwtdb+Hq6nBCo2pJKIpxMygehK1wXwg1fR/EH/AAUZ8GPpnhd/C0aeF7yU2sjljJlPkfkccZ4rv/2k/FNhcftYyx6dcxzywfCvxFDeJEQfnGCqtjuM0Aey/sBRmP8AY8+F2RjdpEbfmSa+gq8L/YZh+z/sh/CdMY/4kFufzWvdKACiiigAr4O/4KmzPdxfB3SlUt5/iRZSB14AX/2evvGvif8Ab5SG7+Mv7PFnKokWbxF80Z/iXzIc/wA6APH/AAJoEXif9sD4m/EORCso1rW9GjP/AEyi0mX/ANmiH51Cha1/ZAa/BAiT4LCMc85fUDitD4Lawi/Ef4maW0qi5TxV4ouGQn5ip06bB+nNcxrc01p+xrrthJ8ps/gzpfTuZNRkJ/pQB3fxHsUPjX4qc7X1O9+HtgW9t8LY/SvOP2mP2dW8bf8ABS+GDT9Vg0Ke502z8RwzTFVRprfy12ndx8xjY16p8SFI8XeJ5yoaOTxv4AtQT6i3gJH/AI9Xz7/wVK8ZXWnftg2j6XdG1vNN0O1geSNsP83mybf++W/lQB7B+0PpvxMm+KHwHt9R8dWGq3UniIT2s0UkJFnMkPLHHbDN1/u18DfGD4n+J/iv8Yr+61nUP7QuIr7ZGvG1tjrGCMeoB/Ovsn4nxfCy9+L/AMFZ9A128XTZ7m6uruRyo2KLXdGfzO0/U18EfBzTrbxf8afDml3mopp1nqOqW1vJfTOFEQMoLSEnoODz70Afo58P/EPiqL/gp/bXvjKGKC9sfB13sjiIK+SkbkHj6Gvlv4BeO9S8SfHL4y+Ibi7e8lm8JeIpIjIfuq7xjA/Bq+j9E04j/gpNdWdt4nXxeJvAl/sv4phKFL282I8j04/Ovk79mHwzcx+Ffj9r/mvDN4f8J3FqQeNzXF1HGc/hG350Afsz+xegj/ZO+EwHT/hHLM/+QhXs9eMfsYZ/4ZO+Euev/CN2X/ooV7PQAUUUUAFfDH7dryv+1R+y7bpyr63KSP8Attaj+pr7nr4X/bdDP+2b+yiqnj+15yR7faLOgDweN18G/wDBR74r6Xcn7DYXWl6xcWaSHCySTaepyv1O8Co/F0d1F8H/AIt6NPuRbL4PeF40Rv4d9wWb9TVv/grH4LvfBPxi8L/EHSlktm1fT2sZbqPgCaLO1eO7I7flXI6j8cvDXjfwD8erxgbC5n8F6BoNjbyNk3L2pXftx75NAHvfxelTRrjWLq6kW3to/if4Kkllk+6kQs7Ylj7Ac/hX51ftefFj/hbX7T/jnxEkym1k1CWyt5ewgj3RQn/vnaa+h/2wP2nNF8TaX4z8NaE32m21LVtK1Vb5Dw0dtpsUG1e4PmI7Z9Ky/wDgnN+yzYftHfET4g6t4otGl8MWek3GmBxxuvLlShdT6opkI9CV9KAMP9mr4h+G7zxj8INJ1fwzP4kl0SXWHnt7KNWlvLaaz/cjnr5bpIfYCvXvhF4B+F3gH4n+N/FGsfCvxPe2V/cTHTrSeKNorWF5Q/yjsVOVHtxXytbweMv2D/2qo0MUd1rXh5poLZ7iLdFcQyxyJ5gU9irsR9a/SP4Xft+6V8VJLfRNG+FVz4p8QR2Jur5bOWGNSFk8t3AYdCx6e9AHlPwC1bwv4k/4Kd6Xd+ENEm0XRT4UmiktLhArCQRvuJA9cr+VesfG39lPw1+zh+yf8fr7RHkmuvEoS7mknOSim5RhGPRcsTiuK+DWsS+Lv+Cn0OpN4Rm8EG38KtHJpM7Kzg7H+cleOdw/Kvqr9vE4/ZF+JbY3FdPRgD6ieM0Aa/7GwA/ZU+FIXoPDtnj/AL9ivZK8f/Y+Ty/2WvhYvp4es/8A0WK9goAKKKKACvib9s2AS/tifstsRnZqlwc/9t7SvtmvhD/goD4wuPA37Q/wB1q003+1bjT5L66W1GfnKyW2Bxz1/lQB9F/tY/AC0/aN+DereF5CsOoqPtWn3JXJiuEBK/n0/GvxC8XfDTxp8Mde1/wrqnhm/W8tpEjnjhieVC4UdHAwRzmvuvUv+CxE+noX/wCEJsmUhmX/AEp+QOmff1FVf+HuYm1SWG7+Hel+Zt3h2mJZhjJ6jrQB8ifBT9kX4kftGa7Haafo89hpMM0MOpXl0uwwRsWG8BsbsAk4HpX7S/s0fs/aJ+zZ8LNN8I6OBLKgEt9eYwbq4KgPIfTJGcds18QP/wAFdrfSY7c2fgbTYkuIllAinK98EcD1rcl/4K/aJp+Df+G0RWJVfIdnPCq3/s36UAe+ftbfsLeFv2pb2z1e5nGk+ILa3+zC/RNxZAWKgj2Lda/O/wAcfsz/ABK/4J5fEPTPHmmXMmveH7Vo4k1WMbRvL72jdOflwjcnjmvrSb/grj4AtdSFtPp86grId6ox+7/k/lVXXf8Ago78K/jF8P8AxP4d8RaVMdNvrdrGVGhZgVl3ID7HoaAKX7PHxa0L4+f8FEr/AMYeHzm1/wCEKginQjHkzjcJI/fG4c96+l/27VLfsj/EwKcN/ZykfUTRmvyw/wCCcPxy8J/AT41eMNY8WXk40yLSZ447uOLe7COQZO31K4r6w/a2/wCCivwc+Jf7N3jfw14e1PUpta1WzFtaxS2RQeZ5iN8xzxwDQB9lfsw2I0z9nf4c2oGPK0K0XH/bMV6dXCfAizaw+C3ge3cENHo1qCGGD/qlru6ACiiigAr5o/a5/ZY1f4+6z4U1zQNefQ9Y0JJo4pFfaMO8bZHHUGMUUUAfGGrf8EefFl5aAxeIbA3BkclHlbZtJ69OtYGqf8Edvibd3Imh8SaOsgVfnaZ87gMHt6YoooAoL/wRu+KyS2zjxFoTiJlO1pnxgHOOnrVaX/gjh8YvnZPEmgF8HaWnfqRgj7vQiiigCO5/4I9/GXMhk1zw7L8hKv8AaHyozlgOO+SK4PWv+Ce3xe8L6XqdvJqujGAJHeylLhtxAyyY4/2ifrRRQB5UPgB4s8G3WpwXM1jK91aTWxIkJwWAyelc1/wpfXgL957uFo7aJ7iXDnLBcD8/mFFFAH9HXgOzGn+B/D1qHaQQ6fbxh26nEajJrdoooAKKKKAP/9k=",I5="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWkAAABFCAYAAACIYhe3AAA4TklEQVR4nO29eXgUx53//+rumdFodEvoQic6OARIgMQNtjHg2MH2z9hO4iPeJM7uEidOHO9u1llviEP2yTrOOuuNnZ83JFnjDYnXx3ptY+MjYMAcRpxCXEIIoftA50gaae7u7x+jLk3rQGBwDHjez6Nn1F1d1VXV1e/61OeoljRN0wghhBBCCOGKhPxZVyCEEEIIIYSxESLpEEIIIYQrGKbPugIhhBBCCNcycnJ+S2eXjKZpmMwyNpsVR08vmqYgyR5iYuELN0/nh48tIzUVLGZQlKH8IZIOIYQQQvgU0dWpMSEpnuU3FjF3Xi4WCzj64OiRat5+eyv2Lj9vv3WU1JQJPPjgTFJTQVZAGsz/CUlaHfwNaUtCCCGEEM6H+AlJrFyxkFtXpRARGSBgvw8yM3KZPCWHXz79R5zOfv77xS0sWTyTxCQwmUAaZOkLYllt8E8caxKapqEJsg4hhBBCCGE05ORMYMGCFCIjwWwCSQaTBeLiYOZMibu/tBKTWaLHLvHRztOoPmP+ixaFhzz2ZDRC3nshhBBCCOdDfFwEqcngcMD2HRX87ndvcaqiBSSwhsHiJSlYwmRUNYyysjN4fBDsGH1edYemaUiSJHQj+rEOCWX0jCGEEEIIIQAQFRWHX4X6OnjjjSN0dp2jv9/M9GmpSDLExUJsjI3+PgftbXZU9SJIOpiQRzsOIYQQQgjh/HD2R9DeBicroOYsyMoEerrC8LkDqo+BAXA4fKhaGF5f4FywInlcw6GmDemjg9ld00AaPNYGuVu6SrUfn1b9NW1I+S9pg7olFVA18KsB64HfH1gHZSZd3pv/JbHvGCTEQUzsoElaJtDQS/yVCPxpMshSoN8AVBXa26GjC64r/ku18i+DXYdhUjaEWwNvqywNDhwZ0AJWJx3yoLZSJjDQBvtLkzivtWj4e3ulQZKMXPNJ837S93p4v1xMfr8PXC74rxfa+dV/HKW9w0ZsXDRHj/vo7LDj8WRiNrvx+RJxugLc+ucP+ujri0JVPaOWOSZJa2qgAJ8ffD5Q/QE+URk0JGpDmVXdCjnYGJ2YtGHHwefOh7HyX2h5n+T+qvSXrL8EKKApyBKYI22EnQO8gG/wzw+cbYDWFvjGvPFv+mngxcMwMQWyJ4JCgARkAg9+kDOQQc2biUsCnxw4NV77x8OY+Qd5SFHAlBKJKXESSutgJn/Qnwo4vHDiJNxX9Ima/qlhYxnExkJ0FISHQ0wEmAn0qQm0KXNwmQN9qc9JglQ1AnOXNEhGXoaIOahvh4/X4f0p68dB6cPzn6+88XA58gdfeyHHweXK8qBwOcr1wf0xFjTZWH6wUnd4fw5vm18FjxtcrnjQYvD7wmhrk+nsHED1W0CKQ1E8eN3RnD0Le0vPsm1bDS5PeIAXtJFELQXv3aH/IxEgZLcLOrugrFzjSFktDfVtdNtduD1+NGRkDSRJQ9P8IGnIWmD+HiLtgESkSoFfWZORJA0/kjgOTh+SpPT8DCvv/MfDcSHpxrTh99ftqka5ZNz6yIHrZTXgwK4NvhWSGtDp+wn8ikkBFUUDk6oG+M+vYdJUFDVwHs2PjCSMtgGS1xjypBwNw9Mv7liTQEPGL8n4ZPBJGpqkDJ6XUAfTVSnQfr8M6jA79MU+vws9DlTQj0lTkAJLE2RAUUFCQ9HUQF+qoGjqIMlpyCooDPadpCKpsmgrkjr0dkrq4I8xfbzj0fLrUlmgf5RAX0l6m+TBYxmfAn4UfHLgOFhoGK8/NHlobFxK/19J+TVNQ9ZAlmX8g8w0Wn79f00aX+Idyj/ERwH+OX++C20PyKiqFbQY6ut91NZouNxRaJoZ3UdDwouiDGANdxMf56Wvr5e+fhMgIUkOJuc7+XDHPURFg2VwOI0qSfu8MOCEbdvsvPLKRxw/cY4eu4rXAz6fCZ9mw6+akDUZWVJB7kfChSz50TQVBgeNpEmBWU4aNDpqAYLRBklG0gK/Yy279E5XBx/SWOoVTRpdXz7esm78dD1h8P7iP+OgGFEfWQ3Uxy+NWd9PUr+rJb8wOGuD3kBiPOjP/+LLV1UVWZ9E9EnvYp+vqt9/9PF0Ke0fjSSHj099POn3FxOv3j+SkWz1/tLHv379pT6/4PdJLz/4/VHVwPjV+3uo/7RAPRX5ku7/Seqvj59Pkn+s8XKxap9x2yPJaKoZVbXh94fjVyOR5X6QTIEJXFKR8AMDeNxO2toGkCTIysyh3+Gkp9crCh1hODRI0L6AivSPf6zhpZdLqa7qwuXxIEkQGWEmJiYGn5qEqkaCZkZRnMhyI7LsQZa8IPmHBtso05skSWjqYAsvZPr7LHGl1y+EED4ThOIjxoKKH1Q/muQEtR8Js6G3ZEXDFm4iLtZKbm4+RUUzmTLVyrqfvMuJ43ZkySJMMToMkrTfDx4PvPd+D6+8vJfTp7qRFTO33rqYFTfNIj0Vurug7AiUl7tw9HvIyo7mlpsgKzvg8ycMZWPMTsN1VcP1RcF5x9IJh9JD6aH0UPqVmK7q12CEJA3ZvWQlsD9HmBWs1sC11vAuJGkApJFuzSaAwIJHxuuDhkb4n5d2cqqyE7PZxF//7R3cdnsSySlQfRp27Ghn64dV9PaY8Pr91NZ5cTtjWffTQjImBiJpxlPMhxBCCCFcyzjfIlySEAZ2VQ1oLiTJCZKH0VYpg5K0jKYGJOmtH57ibE0fHo/Cbbcv5aabksjJgc4O2Lqlhrc27aSv14KkxGAyWenu7KT8SAOlpZPI+lIUYRaQZKPEPKKCIQ1CCCGEcK1C5zhtSFsw0ntm0InAN+hJOagq1o3OwRhSd2jg9cHe0uP09nqQZFi4IJfcnEC8eXW1iwMHTtPv8DC1IIeVK5cy0A9//OMr9PX5OLC/krvvKjFUZMw2hCTtEEII4RqFpmkBvbI8RHRGlcnFSanCZ8qnBfwyGxs7cHtlomMTSEgMJzw8kN7Y0EZLSw8WayT5+SnMng1pE8FmVfD7FNra+0Az6pbHakAIIYQQwrUKSZJG9TYbStdGpMva2OqRwSA4LSCCq+Bxq6g+M45eL64B8HoD590uHy6XF4tiwhZuCpC3Bm63F00LiO2qqrsbnb8BIYQQQgjXKjRNG0cYHbavnRQgbhgWCzDiat3nTzWhEYbHY+XosTZazwWI2q9GomnhqFoYGmZcA9DZCU6XhIoZVR3bqT2EEEII4fOGC9Ua6DrqsSADSEhCTaFJZlQtHL8ax5tvHmfvHmjvBI8nHr8ajUoMXu8EmprgwIFOvL5oNC0MTQpEIIZcKK8MXA610nhljJb+WamzrlY12tVa7xDGhq7uuFCtgWbgzPMYDg1WSM2EpkbQ2NjLr5/fS13dQjq63Pj9Uah+hbPVPXR1Shw+UoOmRaDiAE2+Jrw2hm/HerVgxDayl6ENehnB0XDBv6NGeX4GfXepz2x4u/4SGK0Pr7axd7H9drW17y+Lsbf2FyStDSquFSQkzQ/I+P1mas728N8bdwImeu0KGjInjjcBTQw4QcIEmjL4ABBqk6sVf+mX9HJhvLIu5X4jwpWvsBdt+GRyqeUMx6WUO1beK2WC+6QIbtfFEvTnh6w/yWcGR147cu8OyY8k+0hKtlI0M5+aupPU1zfg90lImg1Q8Lj9yGYLUZExqJqKpnmQibhqJenRBs2nPaguJyFcSJ6LKXO08q4Gie9SJqFgXM5VyZXYT5cL5xsHn8bK7vOKIXWHTuCaF0nqx2azc8fqQiamLab8SBvlR05yrsUOaCQlxzOzcC6SFMZ//+EDOjr6QIoKSNJXwbO4kAH0aQ6w8w3uT3Kv800mxp3zLr28T1rHzxIXO6l8GhL1tYbzTdrj9dPnpw+HScUagh+D/h0Xo0rSiuzBJPeQnALFxTB9ehL/3x1JeJyB6BiTCSxWOHkcwix9KLInEC1zlUAfJA6Hgw8//JDdu3fT0NCAy+UiKSmJpUuXsmzZMtLT0z/V+18uqKqKLMv4fD7OnDnD66+/TllZGT09PaSkpHDLLbewatUqYmNjL4podDWH3W5nx44dHDhwgNraWgYGBgCYOHEiCxcuZPny5UycOPGytulyYjR9+nD4fD5Onz7NRx99xLFjx2htbcXr9fLDH/6Q4uJirFbrJ3puXV1dvPTSS+zfv5/+/n6mTZvG/fffT35+PibTuN/cuCowHkHr53y+wBdWg9sdmvjGh3GUDPrraZoXSfJiNkFE+NAHNyR1UMsigdsNVpsec+4Ve0lfmMpD3zv6s8PRo0d58sknOXToEB0dHXg8HiIjI5EkiXfffZc77riDb3/72xQUFHxqdXC5XJw6dYqjR4/S0tJCc3MzK1asYMWKFYQPRhFdyCCWZZmenh7eeecdnn76aZqamujt7cXv92M2m9m5cyeVlZWsWbOGtLS0C6qbpml0dXWxceNGXn31VVpaWnA4HERERBATE0NbWxsDAwO88847vP3223z3u99lyZIlf5EXLrhP/H4/u3fvpqamhqamJpqbm3nggQeYNWsWVqtV5BlLf+p2uzl27Bi/+c1vKC0tpbu7G4fDgcfjwWw286Mf/Qiz2XzRdfT7/dTV1fGtb32LEydO0Nvbi8/nY8eOHZSXl7Nu3TrmzJkzZruuVoxWf4fDwYsvvsjbb7+N1WrlvvvuY/Xq1YSFhV317b0oSKP+GwQZsSd5EExa8LZOgKb5B/c8DfzKsoJZGVSH6L7UBL7WosiA5EFi6BvkV0OfHzt2jEceeYQDBw4wMDCAzWbjoYce4tZbb2Xnzp28+OKLbN68mSlTpnyqJN3R0cEzzzzDtm3b8Hg8uFwuli1bdtEDd2BggF27dvHjH/+Y2tpaFEXh/vvv52tf+xr//M//zMGDB1m/fj033HADycnJ40pwPp+PiooK1q1bx+7du+nv7yc7O5tZs2YBAenwgQceYP/+/Xz44Yds3ryZ2NhY4uLimDFjxiftjgtGcP+4XC6+973v0dnZicfjQZIk7r///gsi1q6uLjZt2sQzzzxDXV0dVquVc+fOifTc3FxiY2NRlKGdyS6USB0OB0899RQfffQRHk/gaxsJCQl4PB527NjBsWPHmDp1KjabbdR2XU3QNA2Hw8GmTZtoamqitbUVn8/H97//fXJyctixYwevvPIK+/fvFx4tGRkZLFq06HNoTLx4mCRJGuGQYdgEWwr60fUpmvFTa5o09DWSC8NnJ0U7HA5++MMfsn//frFs/6u/+isefPBB8vPzqa6uxmKxUF9fT1NTk8j3aQwih8PBzp07aWxsBALLwBkzZhgI5kLu2dTUxMsvv0xtbS2SJDF58mTWrVtHWloaqampKIpCe3s7jY2NOJ1OoqKixixL0zQqKyt5/PHH2b59OzabjX//93/npz/9KXv37sXv92MymZg3bx4lJSXU19ezb98+9u3bx6lTpwwkfTn7bLSyfD4fVVVVnDhxAlVV0TSNGTNmEB0dbSDW0WC323nrrbdYt24dXV1dLFq0iFmzZvHUU0+JawoLC7HZbBflyaBpGqqq0traymuvvSYIOjY2ll//+tfs2rWL1157jYGBAVT10wsquFg98YVeE3wtINQYpaWlrF27lv7+fjweD4sWLcLr9QIBYaS7u9tw3NPTEzIsjoA6zgZLw6BdKOleRZvi+/1+1q9fz549e3A6nQAUFBRw1113kZ+fT2VlJdu2baO+vp7o6GhiY2NF3vE8AC4Uej63201TU5OYCGRZJicnh4SEhHEJZjg6OzvZt28fqqpis9lYuHAhGRkZbN++nYMHD+J2uwkLCyMhIYGwsLDzltXS0sLrr7/Ohx9+iMVi4cEHH6S4uJj29nbcbjcAJSUlTJgwAb/fL8obGBgQ6Tou5oUf7drxyNHr9XLw4EED2RUWFhIRETHu/crLy3nuuedobGxk+vTpPP7447zyyiuG64qKioiIiLgoaU9/tgcPHqS7u1ucnzdvHgsXLmT27NnceuutTJs2Tai0Piku1r5wvjwX680UnO71etm7dy/19fX4/QHb1OTJk4mMjARg8eLFbNu2jbq6OsLCwsSEeCn4JAbxqxXXhuXiAqDrWH/zm9/Q19cnBuLtt9/OlClTMJlMREREkJWVRWFhISUlJdx8880iv9Pp5MyZM9TX12OxWMjOzqaqqkqkJyQkMHPmTMLDw4V0sWXLFvbs2UNzczPnzp3juuuu47HHHgOgv7+fEydOCOkCIC8vj927d6MoCgkJCUyfPl0M9PPB5/PR29sLBAatLMtIkkRiYiK5ubkoisIdd9zB9OnTx1UDtLS08Oc//xmn00liYiL33nsvFRUVwugDsGDBAmJiYnj77bdpbm4GIDs7e1TjocPhoLKykra2NsLCwkhLS6O6ulqkp6amMnXqVMLDwzlx4gRNTU34fD40TSMuLg5Zlunq6iIuLo4pU6YQHx8v8no8Hvbv34+machy4HuSM2fOFCuFiooKGhoa8Pl8xMTEkJeXR3JyMna7nfLyco4fP05UVBRLliwhNzeXQ4cOGequk3RlZSUNDQ1CKo6Pj0dVVex2O/Hx8eTn55OQkCDyuVwuDh06ZPAvt9ls7N27l5UrVzJp0iRMJpOwSVRVVeF2u8nJyaGwsJDo6GggQH6tra0cO3ZMlJ2cnExubi4NDQ1ER0eLPj969KhQ1ZjNZmw2G36/X9gRpkyZQlJSEj09PZSXl+N0OklNTaWoqEiMGx36/y0tLdTU1NDb20tsbCxms5lz584hSRIWi4XMzEyys7M5ceIEW7duFQQNAV1/XV0dkZGRdHV1MX/+fJKSkrDZbNx0000kJSUZ+trpdHL8+HEqKyvxer3k5uayaNEig2quoqKCpqYm8Rzi4uKEYTs2Npb8/HwSExNHjMGrHZ8bkvZ4PLz//vvU19cLySsiIoJly5aRnJwMQFpaGt/+9rf56le/SlRUFImJibjdbg4cOMD69es5cuQILpcLWZaJiIgwkP2dd95JVlaW0DFWVVXx0ksv8d577+F2u3G73SQnJ+PxeLBYLPT19XHixAlRP03TKC0t5fTp00BA9bFw4UIee+wxJk+efN6lq81mY9KkSbS1teFyudi5cydNTU3k5eXx/PPPC6+VCRMmjNtPfX19NDU1oSgKcXFxZGRksHHjRkMwS0lJCTt37mTjxo3U19cTFRXFjTfeSGFhobhmYGCAPXv28Nvf/lZMRrIsY7PZ6OvrEwT2zW9+k8zMTMLDw/nNb37Dli1b8Pv9aJqG2WxGkiS8Xi8Wi4U5c+bw/e9/nzlz5oiJ8PDhwwDimRYWFmKxWNiwYQN/+tOfaG5uZsGCBTzwwAOC/JxOJx0dHXi9XiIiIsjPz2dgYICTJ0+K+sfFxZGTk4PFYmH9+vVs3bpVrL70ic7r9WI2mykpKWHNmjUsXrxYtP3o0aOGPtu5cydtbW3MmjWLhIQEYfs4fPgwPT09qKpKZGQkt956K9/97ndJT0+nt7eXN954g+eee06Uk52djcvloqenB6vVyg9/+EPy8/N59tln2bNnj9D5KkogwExXT02ePJkbb7yRd955h4aGBrEKuvPOO/nBD35gUIF1dnbypz/9SeiYfT4fFosFWZZxuVxAYHJ9+OGHiYuL4z//8z8NE5wkSbz++uvk5eUhyzLPP/88H3/8MaqqkpmZycyZMwX5ut1uDh8+zHPPPUd5eTn9/f1iRbhq1Sp+8pOfCIP+7373O7Zs2SLqMPw5zJkzh+985zssXLhw3HF+NeFzRdLvvvuuQSIsLCwkPT1dPGyz2UxaWprwgPB4PGzbto2f/exnHD58mIGBASIiIpg8eTInT540LO/j4uIMUmppaSllZWV0dnaKc263G6fTKUj6+PHjIk2X9Lu6usS5pqYmFi5cSHJy8nlVL9nZ2XzjG9+gsrISu93O2bNnuf/++3nggQe47777DMvqqqoqNmzYQHFxMbfccouQ/HXij4yMJC0tjbq6OkEyBw8eNBDOs88+S29vr5AuCwsLKSoqIi4uDgiQ4HvvvceTTz7JyZMncblcREZGkpeXx9GjRw0S14QJEzCbzTQ3N3Py5EmqqqrG1NW2t7eTlJREcXExmqbR19cniFWSJBISErBarfzsZz/jrbfewmw2c88993DrrbeSl5cnvD0iIyNJTU0Vk4Db7eb06dM4HA5xL30V09fXR1lZ2YjVRDBaWlqIiYlh4cKFSJKE0+nkyJEjIt1isfDoo4+Sk5NDUlIS7733Hv/xH//B3r17cTgcpKenExUVRWtrK5s2bSInJ4c1a9bQ29tLaWkpZ86cEWU1NDTg9XrFx2I3b95McXExFRUVhhXKcNTW1nLgwAExOelobW3ltttuY9asWZhMJux2O7/85S95+eWXaWxsRFVV0tPThbeK/mwsFgspKSlYLBYxyenIyMjgG9/4BsuWLaO2tpYTJ06IuqWlpQl1lNvtZufOnaxbt46ysjKcTiexsbGUlJSwZcsW2traWLVqFYsXL8btdlNeXs7JkydF24fve9La2kpcXBwLFiy4ptQgnyuS/uijjwwPtqioSEhXo+Hw4cOsX7+e/fv34/V6hfSwdOlSvva1r1FTUyMGS1FRkZCiBwYG2Lt3LzU1NSPq0NfXR3R0ND09PQbJTVEUvvjFL9LW1kZZWZm4tq6uDofDYSDpYPT29rJ7925effVVQTJ+vx9FUYiOjqasrIyzZ8/S3NxMY2Mjhw8f5tSpU9x9993MmDGDKVOmAEO+xJMnT+axxx7jpZdewuVycfbsWQPhSJJEfX09PT094mWvrKzkgw8+IDc3lylTplBaWsrzzz9PeXk5Pp+PjIwMHnvsMaZPn87q1aux2+1C4ps5cyYREREcOnQIu91uIIGFCxeiKAofffQRfr+f7u5uTp06BQRUCidOnBDSraZpWCwWHn/8cWpqaigsLORv//Zvuf7660fo+SMjI1mxYgVr167lyJEj9PT0UFZWZhgbc+bMISwsjDNnztDV1WXw8V28eDGaprF//34h1dbU1OB2u5EkiZqaGoM+Oj8/n3vuuYeUlBQaGxt5/vnn2bVrF06nk7S0NNasWYPP52P9+vU0NjYKH/ePP/6Yffv2IcuyIKa7776b1tZWPv74Y5xOJ+Hh4Zw5c8YgDMTHxzNjxgw8Hg+lpaVIkoTL5cLtdrNq1SpOnTol+rGzs5Pa2loKCgowm81s2LCB1157TRDyzTffzN/8zd9w7NgxfvGLXzAwMIAkSURFRTF9+nQURRlhiC4pKeErX/kKubm57Nixw9AXEydOJCMjA4Dy8nKeffZZYU9JTEzkscceIywsjC1bttDd3c2BAwfIzc0VOm19fMiyzNKlS1FVVTwHu91OdXU1brfb4H55teNzQdI+n4/m5mba2toM5wsKCgwuUMFob29n+/btfPjhh3g8HiIiIliwYAHf/OY36e/vN5QVFxdHVlaWGBj79u3j5MmT+Hw+TCaTWL673W5cLhf9/f3U1tYKPbLJZCI/P5+nn36a3/72t5w8eVK4k1ksFrF0BaMUrbuQ/eIXv6CmpkboXh955BHuuOMOnn32WcrKyrDb7eIldTgc+Hw+wsLCRhgRdUl6+fLlzJgxg/7+fuFzrd+/qKiIn/70pwwMDPDUU09RXl5OX18fb7zxhjDa6bp4vT7Lly/ny1/+Mg0NDfT39wMBUs3KyiI5ORlFUaioqMBut4u6zJs3j4cffpgzZ86wb98++vv7URRF1NntdlNWVmaQqDo6Omhra0NVVQ4fPszvfvc7oqKiWLZsmSBpXX+dk5PDQw89hN1up7u72+DVAQGStlgsHDt2jL6+PsP5b33rW9TU1HDq1ClcLheSJGEymTCbzWKFFLwamDNnDgkJCURERLBx40YOHDggJpeVK1eycOFC3n33XTo7O/F6vWzatInjx4/T2tpKQ0ODCFZKTU3lJz/5CQ0NDfz+97/HYrFw//3388ILLxhWYCtWrGD16tVs2bKF0tJSNE3DZrNx/fXX8/jjj/Pkk08KkoaAukyWZY4dO8abb74pyHDSpEmsXr2aJUuWUFFRIVaO4eHhZGZmEhcXh91uN5QFMGvWLJKSkrBYLJw+fdowgWRmZpKRkUF7ezs7duxg27Zt+Hw+bDYb8+fP584772TdunXi+v/6r//itddeo6Ojg5aWFnFeVzHV1NSI1Zosy5jNZiwWC9cSPjckXVNTI5bZ+os9ceLEMWfc06dPs2fPHvGCJicns2rVKqKiojh48KCBbKZPn050dDSSJOH3+9m8eTPnzp0jPz8fu90uPDi8Xi/9/f309PRQUVEhXmSTycTy5cvJzc2lu7vb8IJnZWURFRU1qvvZ/v37+dWvfkVlZSWqqhIdHc2Xv/xl1qxZI/yXOzo6RiwLi4uLWbFiBampqaINevm63jg7OxuHw8GWLVsM+YuLi5k7dy4xMTGUlpbS0NAgXqDTp09js9nYs2ePkConTpzIbbfdRnh4OMeOHcPr9RpWH7oqpqKigp6eHnGfkpIS5syZw+nTp4UOMioqiqysLGDIOBdcN92gBIEJbNeuXaSkpJCSkiK8CfR2KorChAkTmDBhAlVVVSNWC7NmzRLGTH0yBZg/fz4lJSVUV1eLsREVFcXEiRNRFAWHw0F5ebmhrOLiYiwWC01NTWzfvp2Ojg4goOpZtGgRBQUFhn7WJ/ekpCShJlAUhVmzZpGdnU16ejrZ2dnIskxkZCQtLS2iLjExMRQXF5Oenm7oz8TERFauXElycjLt7e3ivNlsFrr3d999l7Nnz4oV0oIFC5g3bx69vb0Gz43o6GimTZsmJPThBtc5c+Zgs9no7e2ltrZWrPBiY2NJS0sTY2fHjh1isoqLi+P2228nLi5OeNToKq3c3Fz6+/sN74DuAnr27FlRflRUFOnp6cjyZxsod7lxbbVmDPh8PvFiBEtew/XIwaiqqjJY1RMSEli6dKmQ4IIxe/ZsgxRdWlrK1KlTmT9/vlgK6rpPnaSDVR36ElqWZY4cOSIkluTkZDIzM0eV9hsaGvjzn/8sfIQh8CJ+5zvfIT4+nqNHj2K32zGbzUyaNImwsDAKCgr4h3/4B375y19y/fXXC6l0rP05nE6nMMzp53TyCg8PJyUlRdTN5/PR39/P8ePHDbr2pKQkFi1axMDAgOg3vf/1fvN6vVRVVQlS0Q2hmqbR3NwsyCE2NlYEF7lcLgOxKorC3XffzZo1a4TngMvl4ujRowZ/9+HQPSgaGhpEG7OyskhNTcVkMnHixAkxISuKQl5eHmazmZaWFjF5JCQkMHXqVCRJEkZDHZqmCZI+cOAA586dE+0pKCggNzeXxMREMjIySEhIIDY2lttvv521a9cKVRQExsjcuXMBsFqtTJo0iaysLJqamujq6hJlpqenk5WVRXd3N3V1deLZxsbGMmvWLJxOp8FgnZ+fT1xcHJIksXfvXiH16qqovLw8mpqaqKurE+djYmKYNm0aqqricDgM5cXExDB58mSDqkgfnxkZGaSlpSHLMrW1tRw5ckSMhfj4eG688UYsFgvz588X5x966CGefPJJEhMTDUJNbm4uJpOJ5uZm8b7oz+Faw+eCpIP3DQiWvIKXwMEYGBigvr5eLK9kWSYxMZHs7GwGBgYM5ACIEOSTJ0/y3HPPcfz4caZOncq0adMEiWmahsfjobe3VxjJdOieC42NjcJlDAIvcUJCwgjJQNM0ampqOHjwoLjWbDaTlZXFtGnTUBRFSGgbNmxgyZIlhIeHc++99/Ktb32LhQsXnlcXr8Ptdo/qlqZLvy6XS0jGENCF2+12obawWq1MnDiR5OTkEaQKAYnLarVSXl4uotQgQDQpKSk0Nzcb9Prx8fEUFRXhcrmorKwUQUAAOTk5/OM//iO33XYbMTEx4rzujqj323D09/dz6tQpIYVLksTs2bMJCwujtbWVxsZGw6SZmppqIHUITEQFBQV4PB7q6+uFa6Ysy8TExAgXz6NHjxqMk5MmTSIpKQm3201nZ6dw6SsqKiIpKYnW1lZxrclkori4eMRYqKioMOh8MzIySE1NpaWlhdraWtGmmJgY4TYarFZasGAB4eHhNDQ0UFdXJ9Q38fHxTJw4kYiICBobGwVJa5omJkun08mBAwcMbSooKCA6Ohq/38+hQ4cMapiMjAxSUlLo6emhtrZWSPRms5mkpCQyMjLw+XwGA+h1111HTEwMfX19YnykpqYanoP+XCdMmMD06dNHPOOrHZ8LdYdu6BiO1tZWsUeDDpfLxauvvsprr70mln1hYWFER0djMplwOBzs37/fUPasWbPo6elh7dq1fPjhh/T29uJ0OoVOWUdHRwcbN26kqqpKvECKogiJOdjNS5dkggkn+J7d3d20tLSIAaooChaLBYvFgqZp3HjjjeTm5tLV1UV5ebkIcsnKyrqgjX38fj8dHR2GFyYlJYXMzExMJhOqqgrpV9M0YmJihDeEbuQKCwsTmzp1dnYaJEyLxcL06dOpq6vjiSeeEK6HEPBWSU5OprGxkfr6eiBAeBMmTGDSpEns3buXRx991OBtUVRURE5OzgjCzcjIEL7VY+0rEbxikiSJkpISzGYzBw8eFG6WgJB69WhU/XxiYiJ5eXns3buXH/zgB8LTQZIkYVCWJMkg9UFAuo2MjOTEiROUlZXhcrnIyMiguLgYu93OiRMnxMrPYrFQXFw8og0nT54U0XuappGdnU1UVBSNjY10d3ejaRoRERFkZmaiKApHjx41qNPmz5+P2Wzm6aefNhBxZGQkEREReDwe6urqxKSku2ampaWxa9cunnjiiREGV7PZzBtvvMELL7xgmMyysrJIT09n165dvPnmmwYBQ1/Vnjt3jldffRWAKVOmkJeXx/Hjxw3PIScnh+TkZBoaGgwTdWJi4qe6jcNnhWtaktYfqtlsJi8vb0T02iuvvMLZs2fx+/14vV7Ky8v5l3/5F/7t3/7NQBo+n4+2tjb27t3L+vXraWlpEWVYLBYiIyPZsGEDe/bsob+/n6VLl7JixQpUVTUYTWpra9myZQunT58WL2tYWBiFhYUoikJ1dTV+v1+8cIqiUFZWZthPQocsywaPBY/HQ01NDYcPH0aSJMLDw6murmbt2rVUVlZy2223iSVicN+MBafTaSA8CEjWe/fupb+/n48++oiKigoxqUybNo28vDzD6kSPqtyzZw/PP/+8QYLTJfnf//73lJaWikkNAhJmamoqnZ2dtLW1iQAdTdM4evQozz777AhjlW7oq62tFWoITdMICwvDbrcbnkNw2x0Oxwh99Ny5czGbzcJvV4dO0u3t7Yby/H4/p06dYv369Rw7dkyUL8sy8+bNG7PPu7u7qays5H//93/ZtWsXMTExzJw5k6lTp9LS0sK5c+fQNA2TyURmZiZJSUkjXM90g6tuENU9J3RfaAhMBlOnTsXn8xmka72O//M//8PmzZuFukmSJBwOB3V1dbz22mt88MEHYuLRg74aGxtZv379CLe/yMhI4d0TrLrTvXn279/PH//4R8OE7ff76enp4cyZMzz77LOcOXMGSZK47777iI2N5fjx44bnkJOTQ2JiIh0dHUJS1+1BbW1tVFRUcC3hmpak9YFoMpnIysqiqKiI8vJyMci3bt1KXV0dqampOJ1Ourq6aGxsZNq0aaSlpbF7926cTic+n48DBw6wZs0azp07Z5DgvF4vX/3qV2lsbBS6wa6uLl544QVqamqor68X9UhPT2fhwoW0t7fzwQcfAAGSnj17NrIsi6W5Xr9XX32VI0eOkJycLAJuIPCy65F6lZWVQCCYo66ujr/+678mOzub3t5e6urqqK2tpaioiK9//euGiMDxQoOHkxcE3P3Wrl3Liy++SHNzM9XV1WiahtVq5cYbb2TFihWcO3cOi8WCx+PB7Xaza9cuqquraW5uNpBLT08P9957LzU1NYK89fTs7GxSUlIM5Oz3+9m/fz/f+973DEtcHbred7g6YPv27TQ0NPDoo4/y5S9/2dB23TClv9SSJGG1WikqKsJkMonIPB15eXkkJiYKwtFRWlrK2bNnaWlpMUipiqIwf/58USd9QyVd8n3vvfc4ePAgnZ2ddHd3Cy8Yj8fDmTNnxARpNpuZNWuWmAD1e7e1tdHY2CgmpcTERFJTU+no6DBIsDpJDw/9BvjFL36Bx+MR7nxOpxNVVenu7ua5555DURRaW1vF9V6vl507d/L1r3+duro6kpOTDULESy+9xFtvvUVjYyORkZFistY0jTfffFMEo+gqDKfTicfjYd++fdxzzz3Cs2TOnDk88MAD2Gw2MVnq74Y+WQ4P8Nq3bx8/+tGP+OpXv8q0adO4VnBNS9I6JEkiNjaWtWvXEh8fLx5ub28vZWVlfPDBB2zfvp3KykqWLl3KP/3TP/HII49w/fXXizL6+vo4ffo00dHRLF26VJxXVZUDBw6Qnp7O3/3d35GXl0dVVRVbt24VbktWq5VVq1bxzDPPcNdddxkc/61WK3PmzEGWZW644QbDXhGNjY1kZGSIIJHg9hQUFLB69Wqys7PFeV3vu3nzZrZv3051dTU33ngjTz31FIWFheOGhAcPeqfTafBSgMB+DLW1tWzdupXjx4/jdDpRFIW77rqL1atXk5WVxdy5c5k3b57om+7ubqqrq0lKShLn9SjC/fv3k56eLnTckiQRFxdHeno6kZGRTJ06VegYdZVJTU0NsbGxhrqGh4dTUFCAxWIRftE6kXZ0dBAWFmYIJw9uY21trZCKZVlm6tSpxMTEoKqqaKP+nLKzs4mNjRXSro6uri4RcBLcx4qiMHfuXOFCeccddzBr1iyxaVN7ezsnT54UBP3II49QXFxs8AeHwEQ+fFtTGPKI0QlUX4E0NzcbSDouLk6064YbbjC4XlZVVdHW1sbDDz/MmjVrhMePPunb7XYmT57MpEmTxHNob2+nrq6OW265hSeeeMLQZl1//eCDD/Lwww8LyR4QbrDLly/nZz/7GatWrRJ909vby6FDh+jt7WXRokX8+te/JjMzE7/fT0VFBQMDA2iaJtz/4uPjmTx5Mrm5uaL83t5eent7mTlz5oi+Gm/leCXjmpakg2Eymbjpppt48cUXef311zlw4IBwd0tKSqKwsJDly5ezYMECMjMzUVWViIgIpk+fzrFjxzCZTMyePZubb74Zi8XCH/7wB44cOUJiYiILFixg2bJlZGRksHTpUt5//30hnWVmZjJv3jyxP8TJkyfJyckRUkZSUhJFRUVIUmD3up///Ods2rSJvr4+Zs+ezVe+8hWys7NHhIJHRUWxatUqoqOj+b//+z8+/vhj2tra8Hq9pKSkMGPGDG699VaWLFnC5MmTDbrxC9lAR1EUUlNT+cIXviCuXbNmDS+88AKHDh3C5XKRmZnJqlWruPPOOykoKBBeKj/+8Y/ZtGkTp06dwmazMXfuXFauXInP52PDhg1UVlaSlJTEkiVLyM7O5vXXXxdEmZmZSX5+PrIsU1JSwt///d+Tk5NDVVUV0dHRFBcXk5GRIfSWgNA7S5LEnDlz+Nd//Vc2b97MmTNnyMzM5Etf+pLwjAiGbvT8whe+AAQIdunSpSiKgt1up7CwkKSkJPGcpkyZgsViYfbs2TzyyCNkZ2dz6NAhzp49S1dXlwhp1vsvIyODiRMnCkk6KyuLn//853zwwQciHDw+Pp6SkhJuuOEG8vPzxccFUlJSxN4xMTExLFmyZET93W43c+fOJTMzE03TWLRoETk5OfT39zNz5kxycnKEjj0nJ4ewsDCWLVvGM888w/vvv09bWxuTJk1i1apVLFu2DFVVmTZtGlu3bqWjo4PU1FThM3/q1Ck2bdpEZ2cnubm5XHfddSxevFjsLfPOO+/Q399Pfn4+N910E/Pnz8disZCens77779PT08PWVlZLFmyhCVLlpCYmEhJSQnz588XxseYmBjmzp3LTTfdxLRp05Blmc7OTqZPn05iYiKappGSksKUKVPE+HjooYdISkqira2NKVOmcMcddxiIW0fwCuJqi0aUNC0wx/j80NcLt936K86csZGUGMsvf3knS69TCAsLfJFFh6qB2wN7d8Ojf/97Wlo8LFyUwx823ExkJChXMPV7vV7htqSH15rNZuLj40lKSjJIsrrVXV+exsbGipe2ubkZu90upLS4uDgURcHlctHe3i78Vm02G3FxcURFRSHLsggQ0V9ms9lMdna2WMr29vYKlUpMTAwTJkw4r3P+wMAAra2tdHZ24nK5UFWV8PBwYmJiSE1NHdXHejhGG7hut1voNXUpJDMzk4aGBrq7u/H7/dhsNlJSUkRotw6n00lnZye9vb2YTCZiY2NJSEhA0zQRHGO1WkXb9K+gQEAqnjBhgjC2DQwM0N7ejsPhQFEU4uPjsVqtNDU1iTpbrVYyMzMFGTqdTtra2nA4HNhsNvFch8Pn89Hd3W1wO4uJiSE5ORmv1ytCsCFge0hOThb16u/v58yZM2zYsIGNGzeKcaC7o1mtVm6//XZefvnlEcvyrq4u7Ha72JMkLi7OsL3qwMCA2IcFAgJGenr6CJ/+rq4uwxag0dHRxMfH09fXR1dXl3hukZGR4itDuttca2srTqeTiIgIJk6cKLYH6O3tFTsehoeHk5CQQFRUFH19fbS1tYnArgkTJhAREYGqqvT19dHc3Cz2H0lOThYb+tvtdhGKbrPZRFCP7nHV29sr2qC/h8ErR5fLRVNT04jnoD9PvV5ut5vo6GixNcDVQsR+H/T0wf33Ps/Bg31kZcXz5w//hsgosAyanEalU8Puo2OtEi74Cywwtlblk3xN99Kgk2KwmmAshIWFMXHixFF3d8vIyDAs5XRYrdZRz+vQ9/4YC9HR0RfkHqfDZrORk5NDTk7OBecZjtEGdFhYGHl5eSPOB/vujoXw8PAxPz2mB6MEYzTJR4fNZhs1z/n6KDw8fNQ8w2EymUhMTBx15zSLxXLeekVERNDW1saRI0fIzc1l9erV7N69W5C02WwWe3kEQ5ICe4wE75o3HHow0XiIj48fVY1jtVrH3A1OluXzjrGx0sY6r7sZjuaFBAF9+FhbGphMpjHboMNqtZ73OURFRZ13f/QrAxfOc340xJAZ/BDiJbGjOsZkZVD/aNpVrQ8KIYSx0NTURFVVFf39/Zw+fVoE60iSREREBCtXrjRcH3oPQhgLqgTIyqBx1Jg2qiQ92pdZRkD/Sst5VxVy4LoxB+fnwm4ZwjUGXT0UExNDYmIip0+fprW1VXipREZGsnr1avLz8w35rpYleAiXG6N8NRxGcGvwJC5JQ+mXzpKjsPTwsXi+wamFJO0QrjLo43nBggV87WtfIy0tTfjrZmZmsmbNGn7wgx9ccxv9hHD5oUqDMqw2PKp46P/xddJDxTEap4trR/nK7fBipOEJIcEihKsYycnJ3H///ZSUlIgAp7S0NDIzMw06+avRoyCEyw9Be4NDQVUD/+vHmqaN/rXwMUsc5YOIwyGfRwAW0vE4gzM0eEO4WiHLsvjijd/vR1XVUb8hOdy7IzTmQwhEiEoEff9iKBBLG6RfGZAuRCc9CiQu/PuzoxYVGqMhXOUYvr3rhW6PGSLozzEGBVcNFUka+bFpTQUJE5oKaIHLpbFIGsYn6vEgSVJAvh90IwkhhGsJF0K2Iak5BB1Go+DQ5+rQAhTp9QXGicvt5PQpJ2ZLPZLkBsl/MRGHQ5KCxjASH0WPEqjNsIoaTqtog2WGhnEI1yJCBP0p4Sq0aRn3TJGRBg2Gqh8G+uFcSy9er0pK6gQKpodji5iC2QSaYMlLghz404LE91FUIcPjYy7LrUMIIYTPH4Lc04JxNTiJ6X7QGgGCdg7AwQPQ0ycjSRo5k5KRlcGo7cE2XoYAbhkVMxoWNDWgV/HLBJTfg512PtWJpA0R+KWqWEIIIYTPL3Tp9Eona00NbMPhckN9A/z/z3+As9+KyeTm+uvnoMhDc5AkSZdA0oNKbQ0Tmqbg12LpH9zcLXgWgKGgyOEYTZbWjZrBvxeLUP5Q/lD+qzf/xUA3rum/l+P+l5o/uC6jnff7occOR8rc/OFPWzlypAaf38NNK4uYOSMCxaxPNNolkjTg1wDNjMcTRsWJAZ54oh3oRja5kRnac1kV7nxGWh5y4RtKV6XA+eDfi0Uofyh/KP/Vm3+8vS6G9lwfTqHyZbn/pdd/OIzt8XlV2s5103auh7M1gU3MZham8O1v30xWNphN+oZ2gZtfsrpD1ST8Ppm2tgHefONjFKUPZCdSEEmPr+nX0CSQNGnwlzF+ZTRJPc/xeL+h/KH8ofxXfv4L5QPQJC3o+MrgDx26ulcl8Dk5GXkwwlrF7XYHpGSThy9+sYRvfGM5s2ZBVMRIlrwIkh4l4lACSdaQZD8mk4/oGB+y4gHZh6T5gq4PzCTyoBfISMlaDWq03lg16Hi89PGuD+UP5Q/lv3ryDydrY36fx4/JYg5Y3uRgkr4y6h9M0gFXu0G2xo8kg81mJSkxgcmTM5k3bzIziyaQmwPhNpBkBlUlQ3w7NkmP5VY3DJLmw2RWmF6Qyt//3Uqs1sCNkIbUGfqSYbzjEEIIIQQRW6H/Dkurrm4lNzclcDwsfSx98F8Ug/UeHpGth4ArJggPh5gYSEmGiCgwKUMEHSB2hC+1iUB5Y0aBD1lKR5K2rAGSH4vJSXy8i8VLIDJikKQZ6j+9iPGOhyOUP5Q/lP9znH+Q7AzXaxAfZ2bmzMD/knzl1V+v91iBfJIUqLciDf0vS0HXDm6Bp082puCMxoIkkBTDTqPBEVSqOrhBCD40yY8k92C2EPiKi3JpjWSM9FD+UP5Q/s9R/jFI2mw+h9WaEDiWrrz6j0fSeo4LDXYyAYOWUglZI6BjliT8fhVVxeBzqBcqdm5SwK+pSKoXRdaMs8Iojb3Q4+EI5Q/lD+X/HOaXRkmXQFVdhs/5XXH1l8ZKCL5AHXZBkM0viNw1/azYKEaBhLhoFEWiq9OOvceL1zs4KQSRdWD/U/C4oMfuRDFJhNvMKBc2MYQQQgghXAI+be/rTxvD63/+9oj5SJJBkWHqtFys4WYG3D6qTnfQeg483gCjaxpoasCo2j8A586Bw+HHYjKRnpaAJIW+tRJCCCFcKlSufiI+Hwa30hjrWDL+a+BU2QRf+MJC4uIVZM3HW5t2cvAQ2HvB5QqQtdsT+L+uDnbtrkD1Q2QUlJRMwTQs0jCEEEIIIYRLw5DhEDCboWCGhZUrZ9LdVcrZ6nZ+u/4DOroWsXRJFGkTA5L02Rp4860atm87jCXMRPakCIqLzYFw8BBCCCGES8L51+MjDW4X/jXuqwPG9vw/GTC8iVZQtlMAAAAASUVORK5CYII=",nb=[1e3,500,200,100,50,20,10,5,2,1],Rm="cash_sheet_denom_",Us=l=>Math.round(Number(l)||0).toLocaleString("en-US");function B5(l){const o={"০":"0","১":"1","২":"2","৩":"3","৪":"4","৫":"5","৬":"6","৭":"7","৮":"8","৯":"9"};return String(l||"").replace(/[০-৯]/g,u=>o[u]||u).replace(/[^0-9]/g,"")}const ab=l=>{try{const o=localStorage.getItem(`${Rm}${l}`);if(o){const u=JSON.parse(o);if(u&&typeof u=="object")return u}}catch{}return{1e3:"",500:"",200:"",100:"",50:"",20:"",10:"",5:"",2:"",1:"",coins:"",revenueStamp:"",pendingSlip:""}};function sb(l){if(l=Math.round(Math.abs(l)),l===0)return"Taka Zero Only";const o=["","One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen"],u=["","","Twenty","Thirty","Forty","Fifty","Sixty","Seventy","Eighty","Ninety"];function c(L){let y="";return L>=100&&(y+=o[Math.floor(L/100)]+" Hundred ",L%=100),L>=20&&(y+=u[Math.floor(L/10)]+" ",L%=10),L>0&&(y+=o[L]+" "),y.trim()}let d="";const f=Math.floor(l/1e7);l%=1e7;const A=Math.floor(l/1e5);l%=1e5;const b=Math.floor(l/1e3);l%=1e3;const h=l;return f>0&&(d+=c(f)+" Crore "),A>0&&(d+=c(A)+" Lakh "),b>0&&(d+=c(b)+" Thousand "),h>0&&(d+=c(h)),"Taka "+d.trim()+" Only"}const H5=l=>{if(!l)return"";const o=new Date(l+"T00:00:00");return["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][o.getDay()]},w5=l=>{if(!l)return"";const o=new Date(l+"T00:00:00"),u=["January","February","March","April","May","June","July","August","September","October","November","December"];return`${o.getDate()}-${u[o.getMonth()]}-${o.getFullYear()}`};function E5({selectedDate:l,setSelectedDate:o}){const[u,c]=R.useState(0),[d,f]=R.useState(0),[A,b]=R.useState(()=>ab(l)),[h,L]=R.useState({monir:0,sakib:0,mintu:0,alamgir:0,loanForms:0,memberWelfare:0}),[y,g]=R.useState(!1),[H,D]=R.useState(!1),[T,Z]=R.useState(!0),[O,G]=R.useState(!1),[ce,K]=R.useState(!1),ee=()=>{K(!0),window.setTimeout(()=>K(!1),900)},[C,V]=R.useState(()=>{try{const pe=localStorage.getItem("gobra_floating_pos_cashbook");if(pe)return JSON.parse(pe)}catch{}return null}),re=R.useRef(null),B=R.useRef(null),se=R.useRef(!1),ie=R.useRef({x:0,y:0,elemX:0,elemY:0,w:50,h:50,hasMoved:!1}),te=R.useRef(0),ue=()=>{const pe=Date.now();pe-te.current<250||(te.current=pe,Z(he=>!he))},be=pe=>{var ae;if(pe.button!==0&&pe.pointerType==="mouse")return;const he=(ae=B.current)==null?void 0:ae.getBoundingClientRect();if(he){ie.current={x:pe.clientX,y:pe.clientY,elemX:he.left,elemY:he.top,w:he.width,h:he.height,hasMoved:!1},se.current=!0;try{pe.currentTarget.setPointerCapture(pe.pointerId)}catch{}}},E=pe=>{if(!se.current)return;const he=pe.clientX-ie.current.x,ae=pe.clientY-ie.current.y,ye=Math.hypot(he,ae);if(!ie.current.hasMoved&&ye>6&&(ie.current.hasMoved=!0),ie.current.hasMoved){const ze=Math.max(10,window.innerWidth-ie.current.w-6),xt=Math.max(10,window.innerHeight-ie.current.h-6),ht=Math.max(6,Math.min(ze,ie.current.elemX+he)),Xe=Math.max(6,Math.min(xt,ie.current.elemY+ae));V({x:ht,y:Xe})}},w=pe=>{var he;if(se.current){se.current=!1;try{pe.currentTarget.releasePointerCapture(pe.pointerId)}catch{}if(ie.current.hasMoved){const ae=(he=B.current)==null?void 0:he.getBoundingClientRect();if(ae){const ye={x:Math.round(ae.left),y:Math.round(ae.top)};try{localStorage.setItem("gobra_floating_pos_cashbook",JSON.stringify(ye))}catch{}}}else ue()}},p=pe=>{if(ie.current.hasMoved){pe.stopPropagation(),ie.current.hasMoved=!1;return}ue()},N=()=>{const pe=$R(l);c(pe.reportCashInHand),f(pe.reportBankBalance);const he=Oe(l);G(he);const ae=ln(),ye=xa("disburse").map(me=>me.name.toLowerCase().trim()),ze=ae.filter(me=>me.txDate===l&&me.type==="receive"),xt=ae.filter(me=>me.txDate===l&&me.type==="payment");let ht=0,Xe=0,ve=0,it=0,It=0,at=0;for(const me of ze){const Ie=me.category.toLowerCase().trim(),ut=Math.round(Number(me.amount)||0);Ie.includes("monir")?ht+=ut:Ie.includes("sakib")?Xe+=ut:Ie.includes("mintu")?ve+=ut:Ie.includes("alamgir")?it+=ut:Ie.includes("loan form")||Ie.includes("sale")?It+=ut:(Ie.includes("welfare")||Ie.includes("kallayan")||Ie.includes("member"))&&(at+=ut)}const Bt=xt.filter(me=>{const Ie=me.category.toLowerCase().trim();return Ie.includes("fund payment")||Ie.includes("fund transfer")||Ie.includes("fund")&&!Ie.includes("receive")?!1:ye.includes(Ie)||!!(me.subCategory&&me.subCategory.trim().length>0)}),Ae=Bt.length,Me=Ae*5,ct=Ae>0?Me:It;let kt=0,qt=0;for(const me of Bt){const Ie=Number(me.amount)||0;me.category.toLowerCase().trim().includes("buni")?kt+=Ie:qt+=Ie}const en=Math.round(qt*.01+kt*.005),rn=Bt.length>0?en:at;L({monir:ht,sakib:Xe,mintu:ve,alamgir:it,loanForms:ct,memberWelfare:rn})};R.useEffect(()=>{b(ab(l))},[l]),R.useEffect(()=>{N();const pe=()=>N(),he=()=>N();return window.addEventListener("tx-changed",pe),window.addEventListener("day-close-changed",he),()=>{window.removeEventListener("tx-changed",pe),window.removeEventListener("day-close-changed",he)}},[l]);const P=nb.reduce((pe,he)=>{const ae=parseInt(A[String(he)]||"0",10)||0;return pe+ae*he},0),W=Math.round(Number(A.coins||0)),F=Math.round(Number(A.revenueStamp||0))*10,U=Math.round(Number(A.pendingSlip||0)),j=P+W+F+U,_=h.monir+h.sakib+h.mintu+h.alamgir+h.loanForms+h.memberWelfare,x=(pe,he)=>{if(O){ee();return}const ae=B5(he);b(ye=>{const ze={...ye,[pe]:ae};try{localStorage.setItem(`${Rm}${l}`,JSON.stringify(ze))}catch{}return ze})},Q=()=>{if(O){ee();return}const pe={1e3:"",500:"",200:"",100:"",50:"",20:"",10:"",5:"",2:"",1:"",coins:"",revenueStamp:"",pendingSlip:""};b(pe);try{localStorage.setItem(`${Rm}${l}`,JSON.stringify(pe))}catch{}},Re=()=>{window.print()},ge=async()=>{g(!0);try{const pe=(await tb(async()=>{const{default:ct}=await import("./html2canvas.esm-QH1iLAAe.js");return{default:ct}},[])).default,{jsPDF:he}=await tb(async()=>{const{jsPDF:ct}=await import("./jspdf.es.min-CzsRuN2m.js").then(kt=>kt.j);return{jsPDF:ct}},[]),ae=document.getElementById("cash-sheet-document");if(!ae)return;const ye=await pe(ae,{scale:2,backgroundColor:"#ffffff"}),ze=ye.toDataURL("image/jpeg",.95),xt=new he("p","mm","a4"),ht=xt.internal.pageSize.getWidth(),Xe=xt.internal.pageSize.getHeight(),ve=5,it=ht-ve*2,It=Xe-ve*2;let at=it,Bt=ye.height*at/ye.width;Bt>It&&(Bt=It,at=ye.width*Bt/ye.height);const Ae=(ht-at)/2,Me=(Xe-Bt)/2;xt.addImage(ze,"JPEG",Ae,Me,at,Bt),xt.save(`Cash_Sheet_GOBRA_${l}.pdf`)}catch{window.print()}finally{g(!1)}},Ne=(pe=!0)=>n.jsxs("div",{className:"cash-sheet-print-container w-full bg-white p-4 sm:p-6 print:p-0 text-slate-950 font-serif flex flex-col justify-between print:h-auto print:justify-start box-border",children:[n.jsxs("div",{className:"flex-1 flex flex-col justify-start",children:[n.jsxs("div",{className:"flex items-center justify-center gap-3 mb-1 print:mb-0.5",children:[n.jsx("img",{src:dp,alt:"BKF Logo",className:"h-14 sm:h-16 w-auto object-contain print:h-14"}),n.jsxs("div",{className:"text-left",children:[n.jsx("h1",{className:"text-2xl sm:text-4xl print:text-3xl font-black font-serif text-slate-900 leading-tight tracking-wide sm:whitespace-nowrap",children:"Bandhu Kallyan Foundation"}),n.jsx("p",{className:"text-sm sm:text-base print:text-sm font-bold font-serif text-slate-800 tracking-wide mt-0.5",children:p5()})]})]}),n.jsx("div",{className:"flex justify-center my-1 print:my-0.5",children:n.jsx("img",{src:I5,alt:"Cash & Bank Information",className:"h-12 sm:h-16 print:h-16 w-auto object-contain"})}),n.jsx("div",{className:"flex justify-end mb-2 print:mb-1",children:n.jsx("div",{className:"border border-black px-4 py-0.5 print:py-0.5 text-xs sm:text-sm print:text-xs font-bold font-serif text-center w-48 sm:w-52",children:w5(l)})}),n.jsxs("div",{className:"print-gap-b mb-3 print:mb-1.5",children:[n.jsxs("div",{className:"mb-1 print:mb-0.5 flex items-center justify-between text-xs sm:text-sm print:text-xs font-bold text-slate-900",children:[n.jsx("span",{children:"A. Cash & Bank Information:"}),n.jsxs("span",{className:"pr-16 sm:pr-20 print:pr-16",children:["Day: ",n.jsx("span",{className:"font-normal",children:H5(l)})]})]}),n.jsx("table",{className:"w-full border-collapse border-spacing-0 text-xs sm:text-sm print:text-xs",children:n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{className:"border border-black px-3 py-1.5 sm:py-2 print:py-0.5 font-medium",children:"Closing Cash in Hand: TK (BDT)"}),n.jsx("td",{className:"w-48 sm:w-56 print:w-56 border border-black px-3 py-1.5 sm:py-2 print:py-0.5 text-right font-mono font-bold",children:Us(u)}),n.jsx("td",{className:"w-16 sm:w-20 print:w-16 border-0 border-transparent p-0 text-center align-middle text-transparent print:text-slate-900",children:"-"})]}),n.jsxs("tr",{children:[n.jsx("td",{className:"border border-black px-3 py-1.5 sm:py-2 print:py-0.5 font-medium",children:"Closing Cash at Bank: TK (BDT)"}),n.jsx("td",{className:"w-48 sm:w-56 print:w-56 border border-black px-3 py-1.5 sm:py-2 print:py-0.5 text-right font-mono font-bold",children:Us(d)}),n.jsx("td",{className:"w-16 sm:w-20 print:w-16 border-0 border-transparent p-0"})]})]})})]}),n.jsxs("div",{className:"print-gap-b mb-3 print:mb-1.5",children:[n.jsxs("div",{className:"mb-1 print:mb-0.5 flex items-center justify-between text-xs sm:text-sm print:text-xs font-bold text-slate-900",children:[n.jsx("span",{children:"B. Denominations of Cash / Notes :"}),pe&&n.jsx("button",{type:"button",disabled:O,onClick:Q,className:`print:hidden rounded px-2 py-0.5 text-[11px] font-bold text-white transition ${O?"bg-slate-400 cursor-not-allowed opacity-50":"bg-slate-500 hover:bg-slate-600 cursor-pointer"}`,title:O?"দিন সমাপ্ত (Locked) — উপরের Working-Day বার থেকে Re-open করুন":"সকল নোট খালি করুন",children:"Reset"})]}),n.jsxs("table",{className:"fill-b w-full border-collapse border border-black text-xs sm:text-sm print:text-[11px]",children:[n.jsxs("thead",{children:[n.jsxs("tr",{className:"bg-slate-50 print:bg-transparent",children:[n.jsx("th",{colSpan:2,className:"border border-black px-2 py-1 print:py-0.5 text-center font-bold",children:"Particulars"}),n.jsx("th",{rowSpan:2,className:"w-28 sm:w-32 print:w-32 border border-black px-2 py-1 print:py-0.5 text-center font-bold",children:"TK (BDT)"}),n.jsx("th",{rowSpan:2,className:"w-16 sm:w-20 print:w-16 border border-black px-2 py-1 print:py-0.5 text-center font-bold",children:"Ps"})]}),n.jsxs("tr",{className:"bg-slate-50 print:bg-transparent",children:[n.jsx("th",{className:"border border-black px-2 py-0.5 print:py-0.5 text-center font-semibold",children:"Notes / Others"}),n.jsx("th",{className:"w-20 sm:w-24 print:w-24 border border-black px-2 py-0.5 print:py-0.5 text-center font-semibold",children:"Quantity"})]})]}),n.jsxs("tbody",{children:[nb.map(he=>{const ae=parseInt(A[String(he)]||"0",10)||0,ye=ae*he;return n.jsxs("tr",{children:[n.jsx("td",{className:"border border-black px-2.5 py-0.5 sm:py-1 print:py-0.5 text-center font-mono font-bold",children:he}),n.jsx("td",{className:"border border-black px-1.5 py-0.5 print:py-0.5 text-center",children:pe?n.jsxs(n.Fragment,{children:[n.jsx("input",{type:"text",inputMode:"numeric",autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:!1,disabled:O,readOnly:O,value:A[String(he)]||"",onChange:ze=>x(String(he),ze.target.value),onFocus:ze=>{O||ze.target.select()},placeholder:"0",className:`print:hidden w-full text-center font-mono text-xs sm:text-sm font-bold py-0.5 rounded border transition ${O?"bg-slate-100 text-slate-500 border-slate-300 cursor-not-allowed opacity-70":"bg-yellow-50 focus:bg-amber-100 border-amber-300 focus:border-indigo-600 focus:outline-none cursor-text select-text"}`}),n.jsx("span",{className:"hidden print:inline font-mono font-bold",children:ae>0?ae:""})]}):n.jsx("span",{className:"font-mono font-bold",children:ae>0?ae:""})}),n.jsx("td",{className:"border border-black px-2.5 py-0.5 sm:py-1 print:py-0.5 text-right font-mono font-semibold",children:ye>0?Us(ye):"-"}),n.jsx("td",{className:"border border-black px-1.5 py-0.5 print:py-0.5 text-center font-mono text-slate-400",children:"-"})]},he)}),n.jsxs("tr",{children:[n.jsx("td",{className:"border border-black px-2.5 py-0.5 sm:py-1 print:py-0.5 text-center font-medium",children:"Coins (1+2+5) Taka"}),n.jsx("td",{className:"border border-black px-1.5 py-0.5 print:py-0.5 text-center",children:pe?n.jsxs(n.Fragment,{children:[n.jsx("input",{type:"text",inputMode:"numeric",autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:!1,disabled:O,readOnly:O,value:A.coins||"",onChange:he=>x("coins",he.target.value),onFocus:he=>{O||he.target.select()},placeholder:"0",className:`print:hidden w-full text-center font-mono text-xs sm:text-sm font-bold py-0.5 rounded border transition ${O?"bg-slate-100 text-slate-500 border-slate-300 cursor-not-allowed opacity-70":"bg-yellow-50 focus:bg-amber-100 border-amber-300 focus:border-indigo-600 focus:outline-none cursor-text select-text"}`}),n.jsx("span",{className:"hidden print:inline font-mono font-bold",children:A.coins||""})]}):n.jsx("span",{children:A.coins||""})}),n.jsx("td",{className:"border border-black px-2.5 py-0.5 sm:py-1 print:py-0.5 text-right font-mono font-semibold",children:W>0?Us(W):"-"}),n.jsx("td",{className:"border border-black px-1.5 py-0.5 print:py-0.5 text-center font-mono text-slate-400",children:"-"})]}),n.jsxs("tr",{children:[n.jsxs("td",{className:"border border-black px-2.5 py-0.5 sm:py-1 print:py-0.5 text-center font-medium",children:["Revenue Stamp",n.jsx("span",{className:"print:hidden ml-1 text-[9px] font-black text-indigo-600",children:"×১০"})]}),n.jsx("td",{className:"border border-black px-1.5 py-0.5 print:py-0.5 text-center",children:pe?n.jsxs(n.Fragment,{children:[n.jsx("input",{type:"text",inputMode:"numeric",autoComplete:"off",disabled:O,readOnly:O,value:A.revenueStamp||"",onChange:he=>x("revenueStamp",he.target.value),onFocus:he=>{O||he.target.select()},placeholder:"0",className:`print:hidden w-full text-center font-mono text-xs sm:text-sm font-bold py-0.5 rounded border transition ${O?"bg-slate-100 text-slate-500 border-slate-300 cursor-not-allowed opacity-70":"bg-yellow-50 focus:bg-amber-100 border-amber-300 focus:border-indigo-600 focus:outline-none cursor-text select-text"}`}),n.jsx("span",{className:"hidden print:inline font-mono font-bold",children:A.revenueStamp?A.revenueStamp:""})]}):n.jsx("span",{children:A.revenueStamp||""})}),n.jsx("td",{className:"border border-black px-2.5 py-0.5 sm:py-1 print:py-0.5 text-right font-mono font-semibold",children:F>0?Us(F):"-"}),n.jsx("td",{className:"border border-black px-1.5 py-0.5 print:py-0.5 text-center font-mono text-slate-400",children:"-"})]}),n.jsxs("tr",{children:[n.jsx("td",{className:"border border-black px-2.5 py-0.5 sm:py-1 print:py-0.5 text-center font-medium",children:"Pending Slip"}),n.jsx("td",{className:"border border-black px-1.5 py-0.5 print:py-0.5 text-center",children:pe?n.jsxs(n.Fragment,{children:[n.jsx("input",{type:"text",inputMode:"numeric",autoComplete:"off",disabled:O,readOnly:O,value:A.pendingSlip||"",onChange:he=>x("pendingSlip",he.target.value),onFocus:he=>{O||he.target.select()},placeholder:"0",className:`print:hidden w-full text-center font-mono text-xs sm:text-sm font-bold py-0.5 rounded border transition ${O?"bg-slate-100 text-slate-500 border-slate-300 cursor-not-allowed opacity-70":"bg-yellow-50 focus:bg-amber-100 border-amber-300 focus:border-indigo-600 focus:outline-none cursor-text select-text"}`}),n.jsx("span",{className:"hidden print:inline font-mono font-bold",children:A.pendingSlip?A.pendingSlip:""})]}):n.jsx("span",{children:A.pendingSlip||""})}),n.jsx("td",{className:"border border-black px-2.5 py-0.5 sm:py-1 print:py-0.5 text-right font-mono font-semibold",children:U>0?Us(U):"-"}),n.jsx("td",{className:"border border-black px-1.5 py-0.5 print:py-0.5 text-center font-mono text-slate-400",children:"-"})]}),n.jsxs("tr",{className:"font-bold bg-slate-50 print:bg-transparent",children:[n.jsx("td",{colSpan:2,className:"border border-black px-2.5 py-1 print:py-0.5 text-right font-bold",children:"Total :"}),n.jsx("td",{className:"border border-black px-2.5 py-1 print:py-0.5 text-right font-mono font-bold",children:j>0?Us(j):"-"}),n.jsx("td",{className:"border-0 border-transparent px-1.5 py-1 print:py-0.5 text-center font-mono text-transparent"})]})]})]}),n.jsxs("div",{className:"mt-1 print:mt-0.5 text-xs print:text-[10.5px] font-normal text-slate-800",children:[n.jsx("span",{className:"font-bold",children:"In Word:"})," ",sb(j)]})]}),n.jsxs("div",{className:"mb-2 print:mb-1",children:[n.jsx("div",{className:"mb-1 print:mb-0.5 text-xs sm:text-sm print:text-xs font-bold text-slate-900",children:"C. Credit Officer & Others Cash Received Information."}),n.jsxs("table",{className:"fill-c w-full border-collapse border border-black text-xs sm:text-sm print:text-[11px]",children:[n.jsx("thead",{children:n.jsxs("tr",{className:"bg-slate-50 print:bg-transparent",children:[n.jsx("th",{className:"w-10 sm:w-12 print:w-12 border border-black px-2 py-1 print:py-0.5 text-center font-bold",children:"S.L"}),n.jsx("th",{className:"border border-black px-2.5 py-1 print:py-0.5 text-left font-bold",children:"Employee Name"}),n.jsx("th",{className:"w-16 sm:w-20 print:w-20 border border-black px-2 py-1 print:py-0.5 text-center font-bold",children:"PIN"}),n.jsx("th",{className:"w-28 sm:w-32 print:w-32 border border-black px-2 py-1 print:py-0.5 text-center font-bold",children:"TK (BDT)"}),n.jsx("th",{className:"w-28 sm:w-36 print:w-36 border border-black px-2 py-1 print:py-0.5 text-center font-bold",children:"Employee Signature"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{className:"border border-black px-2 py-1 print:py-0.5 text-center font-mono",children:"1"}),n.jsx("td",{className:"border border-black px-2.5 py-1 print:py-0.5 font-medium",children:"Md Monirul Islam"}),n.jsx("td",{className:"border border-black px-2 py-1 print:py-0.5 text-center font-mono",children:"621"}),n.jsx("td",{className:"border border-black px-2.5 py-1 print:py-0.5 text-right font-mono font-bold",children:h.monir>0?String(h.monir):"-"}),n.jsx("td",{className:"border border-black px-2 py-1 print:py-0.5"})]}),n.jsxs("tr",{children:[n.jsx("td",{className:"border border-black px-2 py-1 print:py-0.5 text-center font-mono",children:"2"}),n.jsx("td",{className:"border border-black px-2.5 py-1 print:py-0.5 font-medium",children:"Ezaz Sakib"}),n.jsx("td",{className:"border border-black px-2 py-1 print:py-0.5 text-center font-mono",children:"1086"}),n.jsx("td",{className:"border border-black px-2.5 py-1 print:py-0.5 text-right font-mono font-bold",children:h.sakib>0?String(h.sakib):"-"}),n.jsx("td",{className:"border border-black px-2 py-1 print:py-0.5"})]}),n.jsxs("tr",{children:[n.jsx("td",{className:"border border-black px-2 py-1 print:py-0.5 text-center font-mono",children:"3"}),n.jsx("td",{className:"border border-black px-2.5 py-1 print:py-0.5 font-medium",children:"Md:Mintu Moholdar"}),n.jsx("td",{className:"border border-black px-2 py-1 print:py-0.5 text-center font-mono",children:"1189"}),n.jsx("td",{className:"border border-black px-2.5 py-1 print:py-0.5 text-right font-mono font-bold",children:h.mintu>0?String(h.mintu):"-"}),n.jsx("td",{className:"border border-black px-2 py-1 print:py-0.5"})]}),n.jsxs("tr",{children:[n.jsx("td",{className:"border border-black px-2 py-1 print:py-0.5 text-center font-mono",children:"4"}),n.jsx("td",{className:"border border-black px-2.5 py-1 print:py-0.5 font-medium",children:"Md Alamgir Hossain"}),n.jsx("td",{className:"border border-black px-2 py-1 print:py-0.5 text-center font-mono",children:"1224"}),n.jsx("td",{className:"border border-black px-2.5 py-1 print:py-0.5 text-right font-mono font-bold",children:h.alamgir>0?String(h.alamgir):"-"}),n.jsx("td",{className:"border border-black px-2 py-1 print:py-0.5"})]}),n.jsxs("tr",{children:[n.jsx("td",{className:"border border-black px-2 py-1 print:py-0.5 text-center font-mono",children:"5"}),n.jsx("td",{className:"border border-black px-2.5 py-1 print:py-0.5 font-medium",children:"Sales of Loan Forms"}),n.jsx("td",{className:"border border-black px-2 py-1 print:py-0.5 text-center font-mono"}),n.jsx("td",{className:"border border-black px-2.5 py-1 print:py-0.5 text-right font-mono font-bold",children:h.loanForms>0?String(h.loanForms):"-"}),n.jsx("td",{className:"border border-black px-2 py-1 print:py-0.5"})]}),n.jsxs("tr",{children:[n.jsx("td",{className:"border border-black px-2 py-1 print:py-0.5 text-center font-mono",children:"6"}),n.jsx("td",{className:"border border-black px-2.5 py-1 print:py-0.5 font-medium",children:"Member Welfare Fund"}),n.jsx("td",{className:"border border-black px-2 py-1 print:py-0.5 text-center font-mono"}),n.jsx("td",{className:"border border-black px-2.5 py-1 print:py-0.5 text-right font-mono font-bold",children:h.memberWelfare>0?String(h.memberWelfare):"-"}),n.jsx("td",{className:"border border-black px-2 py-1 print:py-0.5"})]}),n.jsxs("tr",{className:"font-bold bg-slate-50 print:bg-transparent",children:[n.jsx("td",{colSpan:3,className:"border border-black px-2.5 py-1.5 print:py-0.5 text-right font-bold",children:"Total :"}),n.jsx("td",{className:"border border-black px-2.5 py-1.5 print:py-0.5 text-right font-mono font-bold",children:_>0?Us(_):"-"}),n.jsx("td",{className:"border border-black px-2.5 py-1.5 print:py-0.5"})]})]})]}),n.jsxs("div",{className:"mt-1 print:mt-0.5 text-xs print:text-[10.5px] font-normal text-slate-800",children:[n.jsx("span",{className:"font-bold",children:"In Word:"})," ",sb(_)]})]})]}),n.jsxs("div",{className:"signatures-block mt-6 sm:mt-8 print:mt-3 pt-3 print:pt-2 pb-1 grid grid-cols-2 px-16 print:px-14 text-xs sm:text-sm print:text-xs font-bold font-serif",children:[n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"h-10 sm:h-12 print:h-8"}),n.jsx("div",{className:"w-32 sm:w-36 border-t border-black pt-1",children:"Accountant"})]}),n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"h-10 sm:h-12 print:h-8"}),n.jsx("div",{className:"w-32 sm:w-36 ml-auto border-t border-black pt-1",children:"Manager"})]})]})]}),He=j-u;return n.jsxs("div",{className:"space-y-4",children:[n.jsx("style",{children:`
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
      `}),n.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-white p-4 shadow-sm border border-slate-200 print:hidden",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("label",{className:"text-xs font-bold text-slate-700",children:"Date:"}),n.jsx("div",{className:"w-44",children:n.jsx(bn,{value:l,onChange:pe=>o(pe),className:"px-3 py-1.5 text-xs sm:text-sm"})}),O&&n.jsx("span",{className:`shrink-0 rounded-lg border border-rose-300 bg-rose-100 px-2 py-1 text-[10px] font-black text-rose-700 ${ce?"lock-pulse":""}`,title:"দিন সমাপ্ত (Day Closed) — হিসাব লক করা আছে",children:"🔒 Day Closed"})]}),n.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[n.jsx("button",{type:"button",onClick:()=>D(!0),className:"rounded-lg bg-blue-600 px-3.5 py-1.5 text-xs font-bold text-white shadow hover:bg-blue-700",children:"👁 PDF View"}),n.jsx("button",{type:"button",onClick:ge,disabled:y,className:"rounded-lg bg-emerald-600 px-3.5 py-1.5 text-xs font-bold text-white shadow hover:bg-emerald-700 disabled:opacity-50",children:y?"Generating...":"⬇ Download PDF"}),n.jsx("button",{type:"button",onClick:Re,className:"rounded-lg bg-slate-900 px-4 py-1.5 text-xs font-bold text-white shadow hover:bg-slate-800",children:"🖨 Print"})]})]}),!O&&Rt(l).blocked&&n.jsx("div",{className:"rounded-2xl border border-rose-400 bg-rose-50 p-3.5 text-xs sm:text-sm font-bold text-rose-950 shadow-xs flex items-center justify-between print:hidden",children:n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-base",children:"🚫"}),n.jsx("span",{children:Rt(l).reason})]})}),n.jsx("div",{id:"cash-sheet-document",ref:re,className:"w-full bg-white rounded-2xl shadow-sm border border-slate-300 overflow-hidden print:border-none print:shadow-none print:rounded-none print:m-0 print:p-0",children:Ne(!0)}),typeof document<"u"&&ic.createPortal(n.jsx("div",{ref:B,onPointerDown:be,onPointerMove:E,onPointerUp:w,onPointerCancel:w,onClick:p,style:C?{transform:`translate3d(${C.x}px, ${C.y}px, 0)`,left:0,top:0,right:"auto",bottom:"auto",touchAction:"none"}:{right:"16px",bottom:"75px",touchAction:"none"},className:"fixed z-40 print:hidden select-none drop-shadow-2xl cursor-grab active:cursor-grabbing touch-none",children:T?n.jsxs("div",{onClick:p,className:`relative flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full shadow-2xl border backdrop-blur-md cursor-grab active:cursor-grabbing touch-none select-none ${He===0?"bg-slate-900/95 border-emerald-500/80 text-emerald-300 ring-2 ring-emerald-500/30":"bg-slate-900/95 border-rose-500/80 text-rose-300 ring-2 ring-rose-500/30"}`,title:"পার্থক্য ট্র্যাকার (টেনে যেকোনো দিকে সরানো যাবে / ট্যাপ করলে খুলবে)",children:[n.jsx("span",{className:"text-lg sm:text-xl leading-none select-none pointer-events-none",children:"⚖️"}),n.jsx("span",{className:`absolute -top-1 -right-1 flex h-4 min-w-[16px] sm:h-4.5 sm:min-w-[18px] items-center justify-center rounded-full px-1 text-[9px] font-mono font-black shadow pointer-events-none ${He===0?"bg-emerald-400 text-slate-950":"bg-rose-500 text-white"}`,children:He===0?"0":He>0?`+${de(He)}`:`-${de(Math.abs(He))}`})]}):n.jsxs("div",{className:`rounded-xl px-2.5 py-1.5 shadow-2xl border backdrop-blur-md w-auto min-w-[105px] max-w-[145px] touch-none select-none ${He===0?"bg-slate-900/95 border-emerald-500/80 text-white ring-2 ring-emerald-500/30":"bg-slate-900/95 border-rose-500/80 text-white ring-2 ring-rose-500/30"}`,title:"টেনে যেকোনো জায়গায় সরানো যাবে",children:[n.jsxs("div",{onClick:p,className:"flex items-center justify-between gap-1 pb-1 border-b border-slate-800 text-[10px] cursor-grab active:cursor-grabbing",children:[n.jsxs("span",{className:"flex items-center gap-1 font-bold text-amber-400",children:[n.jsx("span",{className:"text-slate-400 text-[10px]",children:"⠿"}),n.jsx("span",{children:"⚖️ ডিফারেন্স"})]}),n.jsx("span",{onPointerDown:pe=>pe.stopPropagation(),onPointerUp:pe=>{pe.stopPropagation(),Z(!0)},onClick:pe=>{pe.stopPropagation(),Z(!0)},className:"text-[10px] text-slate-400 hover:text-white cursor-pointer font-bold px-1 rounded hover:bg-slate-800",title:"কোলাপ্স করুন",children:"✕"})]}),n.jsx("div",{onClick:p,className:"text-center py-1 cursor-grab active:cursor-grabbing",children:n.jsx("div",{className:`font-mono font-black text-sm sm:text-base leading-tight tracking-tight ${He===0?"text-emerald-400":"text-rose-400"}`,children:He===0?"0":He>0?`+${de(He)}`:`-${de(Math.abs(He))}`})})]})}),document.body),H&&n.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-2 sm:p-4",children:n.jsxs("div",{className:"flex h-[94vh] w-full max-w-4xl flex-col rounded-2xl bg-white shadow-2xl overflow-hidden",children:[n.jsxs("div",{className:"flex items-center justify-between border-b bg-slate-900 px-5 py-3 text-white",children:[n.jsx("h3",{className:"font-bold text-sm sm:text-base",children:"PDF View - Cash & Bank Information"}),n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("button",{type:"button",onClick:ge,className:"rounded bg-emerald-600 px-3 py-1 text-xs font-bold text-white",children:"Download"}),n.jsx("button",{type:"button",onClick:Re,className:"rounded bg-blue-600 px-3 py-1 text-xs font-bold text-white",children:"Print"}),n.jsx("button",{type:"button",onClick:()=>D(!1),className:"text-2xl text-slate-300 hover:text-white",children:"×"})]})]}),n.jsx("div",{className:"flex-1 bg-slate-200 p-3 sm:p-6 overflow-auto flex justify-center",children:n.jsx("div",{className:"w-full max-w-[820px] shadow-2xl rounded border bg-white",children:Ne(!1)})})]})})]})}const Sm="gobra_check_entries",ym="gobra_check_entries_backup";function lb(l){try{const o=localStorage.getItem(l);if(o===null)return{ok:!1,list:[]};const u=JSON.parse(o);return Array.isArray(u)?{ok:!0,list:u.filter(c=>c&&typeof c=="object")}:{ok:!1,list:[]}}catch{return{ok:!1,list:[]}}}function ns(){const l=lb(Sm);if(l.ok)return l.list;const o=lb(ym);if(o.ok&&o.list.length>0){try{localStorage.setItem(Sm,JSON.stringify(o.list))}catch{}return console.warn(`[checkStore] মূল তালিকা পাওয়া যায়নি — ব্যাকআপ থেকে ${o.list.length}টি এন্ট্রি ফিরিয়ে আনা হয়েছে।`),o.list}return[]}function ao(l,o=[]){const u=ns(),c=new Set(o.map(b=>String(b))),d=new Set(l.map(b=>String(b==null?void 0:b.id))),f=u.filter(b=>b&&b.id!==void 0&&b.id!==null&&!d.has(String(b.id))&&!c.has(String(b.id))),A=f.length>0?[...l,...f]:l;f.length>0&&console.warn(`[checkStore] ${f.length}টি এন্ট্রি নতুন তালিকায় ছিল না — হারিয়ে না যায় বলে ফিরিয়ে আনা হয়েছে।`);try{localStorage.setItem(Sm,JSON.stringify(A)),localStorage.setItem(ym,JSON.stringify(A))}catch(b){if(console.error("[checkStore] সেভ করা যায়নি (স্টোরেজ সমস্যা)",b),u.length>0)try{localStorage.setItem(ym,JSON.stringify(u))}catch{}}try{const b=new Map;for(const h of u)h&&h.id!==void 0&&h.id!==null&&b.set(String(h.id),JSON.stringify(h));for(const h of A){if(!h||h.id===void 0||h.id===null)continue;const L=String(h.id);b.get(L)!==JSON.stringify(h)&&rt({type:"check",payload:h})}for(const h of c)rt({type:"check_del",payload:h})}catch(b){console.warn("[checkStore] ক্লাউড কিউতে যোগ করা যায়নি",b)}window.dispatchEvent(new CustomEvent("check-changed",{detail:{count:A.length,restored:f.length}}))}let rb=0;const ob=()=>(rb+=1,Date.now()*1e3+rb),mp=(l,o)=>String((l==null?void 0:l.bankName)||"").trim().toLowerCase()===String((o==null?void 0:o.bankName)||"").trim().toLowerCase()&&String((l==null?void 0:l.checkNo)||"").trim().toLowerCase()===String((o==null?void 0:o.checkNo)||"").trim().toLowerCase()&&String((l==null?void 0:l.checkDate)||"")===String((o==null?void 0:o.checkDate)||"");function M5(l,o,u){const c=Number(l)||ob(),d=o.find(f=>Number(f.id)===c);return d?mp(d,u)?c:ob():c}function C5(l){const o=ns(),u={...l,createdAt:new Date().toISOString()},c={...u,id:M5(l.id,o,u)},f=o.findIndex(A=>Number(A.id)===Number(c.id))>=0?o.map(A=>Number(A.id)===Number(c.id)?c:A):[c,...o];return ao(f),c}function nm(l){const o=ns(),u=Number(l==null?void 0:l.id);if(Number.isFinite(u)){const d=o.findIndex(f=>Number(f.id)===u);if(d>=0)return ao(o.map((f,A)=>A===d?l:f)),l}const c=o.findIndex(d=>mp(d,l));if(c>=0){const d={...l,id:o[c].id};return ao(o.map((f,A)=>A===c?d:f)),d}return ao([l,...o]),l}function Ap(l){const o=ns().filter(u=>String(u.id)!==String(l));ao(o,[l])}const k5=["9001"];function U5(){const l=c=>String(c??"").replace(/\s+/g,"").toUpperCase(),o=new Set(k5.map(l)),u=ns().filter(c=>o.has(l(c.memberCode)));if(!u.length)return 0;for(const c of u)Ap(c.id);return u.length}function D5(){return[...ns()].sort((l,o)=>l.checkDate===o.checkDate?Number(o.id||0)-Number(l.id||0):l.checkDate<o.checkDate?1:-1)}function T5(l,o,u){const c=String(l||"").trim().toLowerCase(),d=String(o||"").trim().toLowerCase();return!c||!d?!1:ns().some(f=>Number(f.id)!==Number(u)&&String(f.bankName||"").trim().toLowerCase()===c&&String(f.checkNo||"").trim().toLowerCase()===d)}const G5=[{en:"Sonali Bank",bn:"সোনালী ব্যাংক"},{en:"Janata Bank",bn:"জনতা ব্যাংক"},{en:"Agrani Bank",bn:"অগ্রণী ব্যাংক"},{en:"Rupali Bank",bn:"রূপালী ব্যাংক"},{en:"BASIC Bank",bn:"বেসিক ব্যাংক"},{en:"IFIC Bank",bn:"আইএফআইসি ব্যাংক"},{en:"BRAC Bank",bn:"ব্র্যাক ব্যাংক"},{en:"Dutch-Bangla Bank",bn:"ডাচ-বাংলা ব্যাংক"},{en:"Islami Bank",bn:"ইসলামী ব্যাংক"},{en:"City Bank",bn:"সিটি ব্যাংক"},{en:"Pubali Bank",bn:"পূবালী ব্যাংক"},{en:"Uttara Bank",bn:"উত্তরা ব্যাংক"},{en:"Eastern Bank",bn:"ইস্টার্ন ব্যাংক"},{en:"Prime Bank",bn:"প্রাইম ব্যাংক"},{en:"Southeast Bank",bn:"সাউথইস্ট ব্যাংক"},{en:"Mercantile Bank",bn:"মার্কেন্টাইল ব্যাংক"},{en:"Trust Bank",bn:"ট্রাস্ট ব্যাংক"},{en:"One Bank",bn:"ওয়ান ব্যাংক"},{en:"Bank Asia",bn:"ব্যাংক এশিয়া"},{en:"Dhaka Bank",bn:"ঢাকা ব্যাংক"},{en:"NCC Bank",bn:"এনসিসি ব্যাংক"},{en:"Mutual Trust Bank",bn:"মিউচুয়াল ট্রাস্ট ব্যাংক"},{en:"National Bank",bn:"ন্যাশনাল ব্যাংক"},{en:"Social Islami Bank",bn:"সোশ্যাল ইসলামী ব্যাংক"},{en:"First Security Islami Bank",bn:"ফার্স্ট সিকিউরিটি ইসলামী ব্যাংক"},{en:"Union Bank",bn:"ইউনিয়ন ব্যাংক"},{en:"Global Islami Bank",bn:"গ্লোবাল ইসলামী ব্যাংক"},{en:"Midland Bank",bn:"মিডল্যান্ড ব্যাংক"},{en:"Shimanto Bank",bn:"শিমান্ত ব্যাংক"},{en:"NRB Bank",bn:"এনআরবি ব্যাংক"},{en:"Meghna Bank",bn:"মেঘনা ব্যাংক"},{en:"Modhumoti Bank",bn:"মধুমতি ব্যাংক"},{en:"Padma Bank",bn:"পদ্মা ব্যাংক"},{en:"Standard Bank",bn:"স্ট্যান্ডার্ড ব্যাংক"},{en:"United Commercial Bank",bn:"ইউনাইটেড কমার্শিয়াল ব্যাংক"},{en:"Bangladesh Krishi Bank",bn:"বাংলাদেশ কৃষি ব্যাংক"},{en:"Rajshahi Krishi Unnayan Bank",bn:"রাজশাহী কৃষি উন্নয়ন ব্যাংক"},{en:"Karmasangsthan Bank",bn:"কর্মসংস্থান ব্যাংক"},{en:"Probashi Kallyan Bank",bn:"প্রবাসী কল্যাণ ব্যাংক"},{en:"Ansar VDP Unnayan Bank",bn:"আনসার ভিডিপি উন্নয়ন ব্যাংক"},{en:"Community Bank",bn:"কমিউনিটি ব্যাংক"},{en:"Habib Bank",bn:"হাবিব ব্যাংক"},{en:"HSBC",bn:"এইচএসবিসি ব্যাংক"},{en:"State Bank of India",bn:"স্টেট ব্যাংক অফ ইন্ডিয়া"},{en:"Citibank N.A.",bn:"সিটিব্যাংক"},{en:"Others",bn:"অন্যান্য"}];function K5(l,o=[],u=12){const c=String(l||"").trim().toLowerCase(),d=new Set,f=[],A=b=>{const h=b.en.toLowerCase();d.has(h)||(d.add(h),f.push(b))};for(const b of G5)(!c||b.en.toLowerCase().includes(c)||b.bn.includes(l.trim())||b.bn.toLowerCase().includes(c))&&A(b);for(const b of o){const h=String(b||"").trim();if(!h)continue;const L=h.toLowerCase();d.has(L)||c&&!L.includes(c)&&!h.includes(l.trim())||(d.add(L),f.push({en:h,bn:h}))}return f.slice(0,u)}function ib({value:l,onChange:o,placeholder:u,className:c="",extras:d=[]}){const[f,A]=R.useState(!1),[b,h]=R.useState(0),L=R.useRef(null),y=R.useMemo(()=>K5(l,d),[l,d]),g=(D,T)=>{o(T==="bn"?D.bn:D.en),A(!1)},H=D=>{D.key==="ArrowDown"?(D.preventDefault(),A(!0),h(T=>Math.min(T+1,Math.max(y.length-1,0)))):D.key==="ArrowUp"?(D.preventDefault(),h(T=>Math.max(T-1,0))):D.key==="Enter"?f&&y[b]&&(D.preventDefault(),g(y[b],"en")):D.key==="Escape"&&A(!1)};return n.jsxs("div",{className:"relative",ref:L,children:[n.jsx("input",{value:l,onChange:D=>{o(D.target.value),A(!0),h(0)},onFocus:()=>A(!0),onKeyDown:H,placeholder:u,className:c,autoComplete:"off",autoCorrect:"off",spellCheck:!1}),f&&n.jsxs("div",{className:"absolute left-0 right-0 top-full z-30 mt-1 max-h-64 overflow-auto rounded-xl border-2 border-emerald-300 bg-white shadow-2xl",children:[n.jsxs("div",{className:"sticky top-0 flex items-center justify-between border-b border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[10px] font-bold text-emerald-800",children:[n.jsx("span",{children:"🌐 বাংলা ও English — যেটা দরকার সেটায় ট্যাপ করুন"}),n.jsx("span",{className:"font-mono",children:y.length})]}),y.length===0?n.jsx("div",{className:"px-3 py-2.5 text-xs font-semibold text-slate-500",children:"নতুন নাম — যেভাবে লিখেছেন সেভেই থাকবে ✓"}):y.map((D,T)=>n.jsxs("div",{className:`flex items-stretch gap-1 border-b border-slate-100 px-1.5 py-1 last:border-0 ${T===b?"bg-emerald-50":"bg-white"}`,children:[n.jsx("button",{type:"button",onMouseDown:Z=>Z.preventDefault(),onClick:()=>g(D,"en"),className:"flex-1 rounded-lg px-2 py-1 text-left text-[13px] font-bold text-slate-800 transition hover:bg-blue-100 hover:text-blue-900",children:D.en}),D.bn!==D.en&&n.jsx("button",{type:"button",onMouseDown:Z=>Z.preventDefault(),onClick:()=>g(D,"bn"),className:"flex-1 rounded-lg px-2 py-1 text-right text-[13px] font-bold text-emerald-800 transition hover:bg-emerald-100",children:D.bn})]},`${D.en}-${T}`))]})]})}function P5(l){const o=[];let u="",c=!1;for(let d=0;d<l.length;d++){const f=l[d];f==='"'?c&&l[d+1]==='"'?(u+='"',d++):c=!c:f===","&&!c?(o.push(u),u=""):u+=f}return o.push(u),o}function cb(l){const o=l.trim();return/^\d+$/.test(o)?String(parseInt(o,10)):o}function _5(l){const o=String(l||"").replace(/\r/g,"").split(`
`);let u=!1,c="",d="";const f=[],A=new Set,b=[],h=new Set;let L=0,y=0;for(const g of o){const H=g.trim();if(!H)continue;const D=P5(H),T=(D[0]||"").trim(),Z=/^samity\s*:\s*(.+)$/i.exec(T);if(Z){u=!0;const O=Z[1].trim(),G=O.indexOf(",");c=cb(G>=0?O.slice(0,G):O),d=(G>=0?O.slice(G+1):"").trim().replace(/\s+/g," "),c&&!A.has(c)&&(f.push({code:c,name:d}),A.add(c));continue}if(/^\d+$/.test(T)){const O=(D[1]||"").trim().replace(/\s+/g," "),G=(D[2]||"").trim();if(/^name of member/i.test(O)||/^member id$/i.test(G))continue;if(!c||!O||!/^0*\d+$/.test(G)){y++;continue}L++;const ce=cb(G);if(h.has(ce)){y++;continue}h.add(ce),b.push({memberCode:ce,memberName:O,centreCode:c,centreName:d});continue}y++}return u?{members:b,centres:f,memberRows:L,skipped:y}:null}function Z5({open:l,onClose:o,onPick:u}){const[c,d]=R.useState(""),[f,A]=R.useState(50),b=R.useRef(null),[h,L]=R.useState(0),[y,g]=R.useState(!1),[H,D]=R.useState(!1),[T,Z]=R.useState(null),O=R.useRef(null),[G,ce]=R.useState(!1),[K,ee]=R.useState(!1),[C,V]=R.useState(!1),[re,B]=R.useState(new Set),se=R.useMemo(()=>l?Pn():[],[l,h]),ie=R.useMemo(()=>l?so():[],[l,h]),te=R.useMemo(()=>{const p=F=>`${Te(F.memberName)}|${Te(F.centreCode)}`,N=new Map;for(const F of se)N.set(p(F),(N.get(p(F))||0)+1);const P=new Set;return{rows:se.filter(F=>(N.get(p(F))||0)>1?(P.add(p(F)),!0):!1),groups:P.size}},[se]);R.useEffect(()=>{if(!T||!T.ok)return;const p=window.setTimeout(()=>Z(null),12e3);return()=>window.clearTimeout(p)},[T]);const ue=p=>{confirm(`🗑️ মেম্বার কোড ${p.memberCode} — “${p.memberName||"—"}” স্থায়ীভাবে মুছে ফেলবেন?

(এই অ্যাপের সব ডিভাইস ও ক্লাউড থেকে মুছে যাবে; ভুল হলে ডাটাবেজ আপডেটের সময় সিড থেকে ফিরতে পারে)`)&&Lh(p.memberCode)};R.useEffect(()=>{if(!l)return;const p=()=>L(N=>N+1);return window.addEventListener("member-db-changed",p),()=>window.removeEventListener("member-db-changed",p)},[l]);const be=async p=>{const N=p&&p[0]?p[0]:null;if(N){g(!0),Z(null);try{const P=await N.text(),W=_5(P);if(W){if(!W.members.length){Z({ok:!1,text:"ফাইলটা স্যামিটি-রিপোর্টের মতো মনে হচ্ছে, কিন্তু কোনো মেম্বার-সারি পাওয়া যায়নি — ফাইলটি ঠিক আছে কি না দেখুন।"});return}const _=cm(W.members);jh({fileName:N.name,added:_.added,updated:_.updated,skipped:W.skipped,total:_.total,centres:W.centres.length,format:"report",addedCodes:_.addedCodes}),Z({ok:!0,text:`✓ স্যামিটি-রিপোর্ট পড়ে গেছে — ${W.centres.length.toLocaleString("en-IN")}টি সেন্টার থেকে নতুন ${_.added.toLocaleString("en-IN")} জন বসেছে, ${_.updated.toLocaleString("en-IN")} জনের নাম/সেন্টার ঝালাই হয়েছে (বাদ/ডুপ্লিকেট ${W.skipped.toLocaleString("en-IN")})। মোট ${_.total.toLocaleString("en-IN")} জন — ক্লাউডে সংরক্ষণ হচ্ছে…`}),L(x=>x+1);return}const{members:F,skipped:U}=km(P);if(!F.length){Z({ok:!1,text:"ফাইলে কোনো মেম্বার পাওয়া যায়নি। কলাম ঠিক আছে কি না দেখুন — Member Code, Member Name, Centre Code, Centre Name (হেডার না থাকলেও এই ক্রমেই পড়বে)। অথবা MIS-এর মাসিক স্যামিটি-রিপোর্ট সরাসরি দিন।"});return}const j=cm(F);jh({fileName:N.name,added:j.added,updated:j.updated,skipped:U,total:j.total,format:"csv",addedCodes:j.addedCodes}),Z({ok:!0,text:`✓ ${j.total.toLocaleString("en-IN")} জন মেম্বার ডাটাবেজে বসে গেছে (নতুন ${j.added.toLocaleString("en-IN")}, আপডেট ${j.updated.toLocaleString("en-IN")}${U?`, বাদ পড়েছে ${U.toLocaleString("en-IN")}`:""})। ক্লাউডে সংরক্ষণ হচ্ছে…`}),L(_=>_+1)}catch(P){Z({ok:!1,text:`ফাইল পড়া যায়নি: ${(P==null?void 0:P.message)||"অজানা ত্রুটি"}`})}finally{g(!1),O.current&&(O.current.value="")}}};R.useEffect(()=>{if(!l)return;d(""),A(200),B(new Set),V(!1),ee(!1);const p=window.setTimeout(()=>{var N;return(N=b.current)==null?void 0:N.focus()},60);return()=>window.clearTimeout(p)},[l]),R.useEffect(()=>{if(!l)return;const p=N=>{N.key==="Escape"&&o()};return window.addEventListener("keydown",p),()=>window.removeEventListener("keydown",p)},[l,o]);const E=R.useMemo(()=>{const p=K?te.rows:se,N=c.trim().toLowerCase();if(!N)return p;const P=Te(c);return p.filter(W=>!!(P&&Te(W.memberCode).includes(P)||P&&Te(W.centreCode).includes(P)||P&&W.checkNo&&Te(W.checkNo).includes(P)||(W.memberName||"").toLowerCase().includes(N)||(W.centreName||"").toLowerCase().includes(N)))},[se,c,K,te]);if(R.useEffect(()=>A(200),[c,K]),!l)return null;const w=E.slice(0,f);return n.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-3 backdrop-blur-xs animate-in fade-in duration-150",children:n.jsxs("div",{className:"flex h-[94vh] w-[96vw] max-w-5xl flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl",children:[n.jsxs("div",{className:"flex items-center justify-between gap-2 border-b border-indigo-200 bg-linear-to-r from-indigo-600 to-blue-600 px-4 py-3 text-white",children:[n.jsxs("div",{className:"flex items-center gap-2.5",children:[n.jsx("span",{className:"flex h-9 w-9 items-center justify-center rounded-xl bg-white/20 text-lg",children:"🗄️"}),n.jsxs("div",{children:[n.jsx("h3",{className:"text-base font-black leading-tight",children:"মেম্বার ডাটাবেজ"}),n.jsxs("p",{className:"text-[11px] text-indigo-100",children:["মোট"," ",n.jsx("span",{className:"font-mono font-black",children:se.length.toLocaleString("en-IN")})," ","মেম্বার"]})]})]}),se.length>0&&n.jsx("button",{type:"button",onClick:()=>ce(p=>!p),title:"মাসিক রিপোর্ট/CSV দিয়ে ডাটাবেজ আপডেট করুন",className:`shrink-0 rounded-full px-3 py-1.5 text-[11px] font-black transition cursor-pointer ${G?"bg-amber-300 text-slate-900 hover:bg-amber-200":"bg-white/15 text-white hover:bg-white/25"}`,children:G?"✕ আপডেট ঘর":"📤 আপডেট"}),n.jsx("button",{type:"button",onClick:o,title:"বন্ধ করুন",className:"flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-rose-600 text-sm font-black text-white transition hover:bg-rose-700 cursor-pointer",children:"✕"})]}),n.jsxs("div",{className:"border-b border-slate-200 bg-slate-50 px-4 py-3",children:[n.jsxs("div",{className:"relative",children:[n.jsx("span",{className:"pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400",children:"🔍"}),n.jsx("input",{ref:b,value:c,onChange:p=>d(p.target.value),placeholder:"মেম্বার কোড, সেন্টার কোড বা নাম লিখুন…",autoComplete:"off",className:"w-full rounded-xl border border-slate-300 bg-white py-2.5 pl-10 pr-10 text-sm font-bold text-slate-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"}),c&&n.jsx("button",{type:"button",onClick:()=>d(""),title:"সার্চ মুছুন",className:"absolute right-2 top-1/2 -translate-y-1/2 rounded-lg px-2 py-1 text-sm font-bold text-slate-400 hover:text-slate-700 cursor-pointer",children:"✕"})]}),n.jsxs("div",{className:"mt-1.5 flex flex-wrap items-center justify-between gap-2 text-[11px] font-bold text-slate-600",children:[n.jsx("span",{children:c.trim()?n.jsxs(n.Fragment,{children:["মিলেছে:"," ",n.jsx("span",{className:"font-mono text-indigo-700",children:E.length.toLocaleString("en-IN")})," ","টি"]}):n.jsx(n.Fragment,{children:"সব মেম্বার — খুঁজতে উপরে লিখুন"})}),n.jsxs("span",{className:"flex flex-wrap items-center gap-1.5",children:[n.jsxs("button",{type:"button",onClick:()=>ee(p=>!p),title:"একই নাম+সেন্টারে ২জন+ আছে এমন সারিগুলোই দেখাবে",className:`rounded-full px-2.5 py-1 text-[10px] font-black transition cursor-pointer ${K?"bg-amber-500 text-white shadow hover:bg-amber-600":"bg-amber-100 text-amber-800 hover:bg-amber-200"}`,children:["🔁 ডুপ্লিকেট",K?` — ${te.rows.length.toLocaleString("en-IN")}টি (${te.groups.toLocaleString("en-IN")} গ্রুপ) ✕`:" খুঁজুন"]}),n.jsx("button",{type:"button",onClick:()=>{V(p=>!p),B(new Set)},title:"সারি মার্ক (টিক) করে একসাথে মোছার মোড",className:`rounded-full px-2.5 py-1 text-[10px] font-black transition cursor-pointer ${C?"bg-indigo-600 text-white shadow hover:bg-indigo-700":"bg-indigo-100 text-indigo-800 hover:bg-indigo-200"}`,children:C?"✕ নির্বাচন বন্ধ":"☑️ নির্বাচন"})]}),n.jsx("span",{className:"text-[10px] font-semibold text-slate-400",children:"যেকোনো সারিতে ট্যাপ করলে কোডটি ফর্মে বসে যাবে"})]})]}),G&&se.length>0&&n.jsxs("div",{className:"border-b border-indigo-100 bg-linear-to-b from-indigo-50/80 to-white px-4 py-3",children:[n.jsxs("div",{onDragOver:p=>{p.preventDefault(),D(!0)},onDragLeave:()=>D(!1),onDrop:p=>{p.preventDefault(),D(!1),be(p.dataTransfer.files)},className:`rounded-xl border-2 border-dashed px-4 py-3 text-center transition ${H?"border-indigo-500 bg-indigo-100":"border-indigo-300 bg-indigo-50/50"}`,children:[n.jsx("p",{className:"text-xs font-black text-indigo-950",children:"📤 মাসিক স্যামিটি-রিপোর্ট বা CSV ফাইল দিন"}),n.jsxs("p",{className:"mx-auto mt-1 max-w-lg text-[10px] font-semibold leading-relaxed text-slate-600",children:["MIS-এর মাসিক রিপোর্ট (",n.jsx("span",{className:"font-mono",children:"Samity: …"})," ফরমেট) দিলেই অ্যাপ নিজে মেম্বার-কোড, নাম ও সেন্টার চিনে ",n.jsx("b",{children:"যা ডাটাবেজে নেই তাই যোগ"})," করবে — পুরনো ডেটা অক্ষত থাকে, নাম/সেন্টার বদলালে ঝালাই হয়। ফাইল এখানে টেনে ছাড়ুন বা বোতাম চাপুন।"]}),n.jsx("input",{ref:O,type:"file",accept:".csv,.txt,text/csv,text/plain",onChange:p=>be(p.target.files),className:"hidden"}),n.jsx("button",{type:"button",disabled:y,onClick:()=>{var p;return(p=O.current)==null?void 0:p.click()},className:"mt-2 rounded-xl bg-linear-to-r from-indigo-600 to-blue-600 px-4 py-2 text-[11px] font-black text-white shadow-md transition hover:from-indigo-700 hover:to-blue-700 disabled:opacity-50 cursor-pointer",children:y?"⏳ ফাইল পড়া হচ্ছে…":"📁 ফাইল বেছে নিন"})]}),ie.length>0&&n.jsxs("div",{className:"mt-2.5 overflow-hidden rounded-xl border border-slate-200 bg-white",children:[n.jsxs("div",{className:"flex items-center justify-between gap-2 border-b border-slate-100 bg-slate-50 px-3 py-1.5",children:[n.jsx("span",{className:"text-[10px] font-black text-slate-700",children:"📜 আপলোড-হিস্টোরি"}),n.jsx("span",{className:"text-[9px] font-bold text-slate-400",children:"সর্বশেষ ১৫টি থাকে, পুরনোগুলো নিজেই মুছে যায়"})]}),n.jsx("ul",{className:"max-h-36 divide-y divide-slate-100 overflow-auto",children:ie.map(p=>n.jsxs("li",{className:"flex items-center justify-between gap-2 px-3 py-1.5",children:[n.jsxs("div",{className:"min-w-0",children:[n.jsxs("p",{className:"truncate text-[11px] font-black text-slate-800",children:[p.format==="report"?"📊":"🗂️"," ",p.fileName]}),n.jsxs("p",{className:"text-[10px] font-semibold text-slate-500",children:[new Date(p.at).toLocaleString("bn-BD",{dateStyle:"medium",timeStyle:"short"})," — ","নতুন ",n.jsx("span",{className:"font-black text-emerald-700",children:p.added}),", ঝালাই ",n.jsx("span",{className:"font-black text-sky-700",children:p.updated}),typeof p.centres=="number"?`, সেন্টার ${p.centres}`:""]})]}),p.undoneAt?n.jsxs("span",{className:"shrink-0 rounded-lg bg-slate-100 px-2 py-1 text-[9px] font-black text-slate-500",children:["↩️ ফেরত নেওয়া",typeof p.removed=="number"?` (−${p.removed})`:""]}):p.addedCodes&&p.addedCodes.length>0?n.jsx("button",{type:"button",title:"এই আপলোডের নতুন মেম্বাররা ডাটাবেজ থেকে সরে যাবে — ঝালাই হওয়া পুরনোরা অক্ষত",onClick:()=>{if(confirm(`↩️ এই আপলোড ফেরত নেবেন?

এই ফাইল দিয়ে নতুন বসে যাওয়া ${p.added} জন মেম্বার ডাটাবেজ থেকে সরে যাবে (এই অ্যাপের সব ডিভাইস ও ক্লাউড থেকে)।

নাম/সেন্টার ঝালাই হওয়া পুরনো মেম্বার একদম অক্ষত থাকবে।`)){const N=NR(p.id);L(P=>P+1),N&&Z({ok:!0,text:`↩️ ফেরত নেওয়া হয়েছে — ${N.removed.toLocaleString("en-IN")} জন মেম্বার সরে গেছে, এখন মোট ${N.total.toLocaleString("en-IN")} জন। ক্লাউডেও কাটছাঁট হচ্ছে…`})}},className:"shrink-0 rounded-lg px-2 py-1 text-xs text-amber-600 transition hover:bg-amber-50 hover:text-amber-700 cursor-pointer",children:"↩️"}):null,n.jsx("button",{type:"button",title:"এই রেকর্ডটি মুছুন — ডাটাবেজের মেম্বার অক্ষত থাকবে",onClick:()=>{confirm("শুধু এই রেকর্ডটি মুছে যাবে — ডাটাবেজে বসে যাওয়া মেম্বাররা অক্ষত থাকবে। মুছে ফেলবেন?")&&(yR(p.id),L(N=>N+1))},className:"shrink-0 rounded-lg px-2 py-1 text-xs text-rose-500 transition hover:bg-rose-50 hover:text-rose-700 cursor-pointer",children:"🗑️"})]},p.id))})]})]}),T&&n.jsxs("div",{className:`flex items-start justify-between gap-2 border-b px-4 py-2 text-[11px] font-bold leading-relaxed ${T.ok?"border-emerald-200 bg-emerald-50 text-emerald-900":"border-rose-200 bg-rose-50 text-rose-800"}`,children:[n.jsxs("span",{children:[T.ok?"✅":"⚠️"," ",T.text]}),n.jsx("button",{type:"button",onClick:()=>Z(null),title:"বার্তা বন্ধ করুন",className:"shrink-0 rounded px-1 text-xs font-black opacity-60 hover:opacity-100 cursor-pointer",children:"✕"})]}),n.jsxs("div",{className:"flex-1 overflow-auto",onScroll:p=>{const N=p.currentTarget;N.scrollTop+N.clientHeight>=N.scrollHeight-300&&A(P=>P+200)},children:[se.length===0?n.jsx("div",{className:"px-4 py-8",children:n.jsxs("div",{onDragOver:p=>{p.preventDefault(),D(!0)},onDragLeave:()=>D(!1),onDrop:p=>{p.preventDefault(),D(!1),be(p.dataTransfer.files)},className:`mx-auto max-w-xl rounded-2xl border-2 border-dashed p-6 text-center transition ${H?"border-indigo-500 bg-indigo-50":"border-indigo-300 bg-indigo-50/40"}`,children:[n.jsx("div",{className:"text-3xl",children:"📤"}),n.jsx("h4",{className:"mt-2 text-sm font-black text-indigo-950",children:"এই অফিসের মেম্বার ডাটাবেজ আপলোড করুন"}),n.jsx("p",{className:"mx-auto mt-1.5 max-w-md text-[11px] font-semibold leading-relaxed text-slate-600",children:"CSV ফাইল দিলেই বাকি সব নিজে থেকেই হয়ে যাবে — ফাইল পড়া, কলাম শনাক্ত করা, মেম্বার কোড অনুযায়ী ডুপ্লিকেট বাদ দেওয়া, ডাটাবেজে বসানো এবং ক্লাউডে এই অফিসের নিজের ঘরে সংরক্ষণ। এরপর চেক এন্ট্রিতে কোড লিখলেই নাম ও সেন্টার নিজে থেকে চলে আসবে।"}),n.jsx("input",{ref:O,type:"file",accept:".csv,.txt,text/csv,text/plain",onChange:p=>be(p.target.files),className:"hidden"}),n.jsx("button",{type:"button",disabled:y,onClick:()=>{var p;return(p=O.current)==null?void 0:p.click()},className:"mt-3 rounded-xl bg-linear-to-r from-indigo-600 to-blue-600 px-5 py-2.5 text-xs font-black text-white shadow-md transition hover:from-indigo-700 hover:to-blue-700 disabled:opacity-50 cursor-pointer",children:y?"⏳ ফাইল পড়া হচ্ছে…":"📁 CSV ফাইল বেছে নিন"}),n.jsx("p",{className:"mt-1.5 text-[10px] font-bold text-slate-500",children:"অথবা ফাইলটি এখানে টেনে আনুন"}),n.jsxs("div",{className:"mx-auto mt-3 max-w-md rounded-xl border border-slate-200 bg-white px-3 py-2 text-left text-[10px] font-semibold leading-relaxed text-slate-500",children:["MIS-এর মাসিক স্যামিটি-রিপোর্ট (",n.jsx("span",{className:"font-mono",children:"Samity: …"})," ফরমেট) সরাসরি দিলেই চলবে — অ্যাপ নিজেই মেম্বার-কোড, নাম ও সেন্টার বের করবে। সাধারণ CSV-ও চলে: ",n.jsx("span",{className:"font-mono",children:"Member Code, Member Name, Centre Code, Centre Name, Bank Name, Check No"})," (হেডার ছাড়াও এই ক্রমে)।"]}),n.jsx("p",{className:"mt-2 text-[10px] font-black text-amber-700",children:"⚠️ একবার ডাটাবেজ আপলোড হলে এই আপলোড ঘর আর দেখাবে না।"})]})}):w.length===0?n.jsxs("div",{className:"px-4 py-12 text-center",children:[n.jsx("div",{className:"text-3xl",children:"🔍"}),n.jsx("p",{className:"mt-2 text-sm font-bold text-slate-600",children:"কোনো মিল নেই"}),n.jsx("p",{className:"mt-1 text-[11px] font-semibold text-slate-400",children:"কোড বা নামের বানান মিলিয়ে দেখুন।"})]}):n.jsx("ul",{className:"divide-y divide-slate-200",children:w.map((p,N)=>n.jsxs("li",{className:"flex items-stretch",children:[C&&n.jsx("button",{type:"button",onClick:()=>{B(P=>{const W=new Set(P);return W.has(p.memberCode)?W.delete(p.memberCode):W.add(p.memberCode),W})},title:re.has(p.memberCode)?"নির্বাচন তুলুন":"নির্বাচন করুন",className:`shrink-0 border-r px-3 text-base transition cursor-pointer ${re.has(p.memberCode)?"border-indigo-300 bg-indigo-600 text-white":"border-slate-200 bg-slate-100 text-slate-400 hover:bg-slate-200"}`,children:re.has(p.memberCode)?"☑️":"⬜"}),n.jsxs("button",{type:"button",onClick:()=>{if(C){B(P=>{const W=new Set(P);return W.has(p.memberCode)?W.delete(p.memberCode):W.add(p.memberCode),W});return}u&&u(p),o()},title:"এই মেম্বারটি বেছে নিন",className:`block min-w-0 flex-1 cursor-pointer px-4 py-2.5 text-left transition hover:bg-indigo-50 ${N%2?"bg-slate-50/60":"bg-white"}`,children:[n.jsxs("div",{className:"flex flex-wrap items-center gap-x-3 gap-y-1",children:[n.jsx("span",{className:"font-mono text-xs font-black text-indigo-700",children:p.memberCode}),n.jsx("span",{className:"text-sm font-bold text-slate-900",children:p.memberName||"—"}),K&&n.jsx("span",{className:"rounded bg-amber-100 px-1.5 py-0.5 text-[9px] font-black text-amber-800 ring-1 ring-amber-300",children:"ডুপ্লিকেট"}),n.jsxs("span",{className:"ml-auto flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[11px] font-bold text-slate-600",children:[n.jsx("span",{className:"rounded bg-slate-100 px-1.5 py-0.5 font-mono",children:p.centreCode||"—"}),n.jsx("span",{children:p.centreName||"—"})]})]}),(p.bankName||p.checkNo||p.source==="auto")&&n.jsxs("div",{className:"mt-1 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[10px] font-semibold text-slate-500",children:[p.bankName&&n.jsxs("span",{children:["🏦 ",p.bankName]}),p.checkNo&&n.jsxs("span",{className:"font-mono",children:["চেক #",p.checkNo]}),p.source==="auto"&&n.jsx("span",{className:"rounded bg-amber-100 px-1 py-0.5 font-black text-amber-800",children:"NEW"})]})]}),n.jsx("button",{type:"button",onClick:()=>ue(p),title:`মেম্বার ${p.memberCode} স্থায়ীভাবে মুছে ফেলুন (লোকাল + ক্লাউড)`,className:`shrink-0 cursor-pointer border-l px-3 text-sm transition hover:bg-rose-100 hover:text-rose-700 ${N%2?"border-rose-200/60 bg-slate-50/60 text-slate-400":"border-rose-200/60 bg-white text-slate-400"}`,children:"🗑️"})]},`${p.memberCode}-${N}`))}),E.length>w.length&&n.jsx("div",{className:"p-3 text-center text-[10px] font-bold text-slate-400",children:"↓ নিচে স্ক্রল করলেই পরেরগুলো নিজে থেকে আসবে…"})]}),C&&re.size>0&&n.jsxs("div",{className:"flex items-center justify-between gap-2 border-t border-indigo-200 bg-indigo-50 px-4 py-2",children:[n.jsxs("span",{className:"text-[11px] font-black text-indigo-900",children:["☑️ ",re.size.toLocaleString("en-IN")," জন নির্বাচিত"]}),n.jsxs("span",{className:"flex items-center gap-2",children:[n.jsx("button",{type:"button",onClick:()=>B(new Set),className:"rounded-lg bg-slate-200 px-3 py-1.5 text-[10px] font-black text-slate-700 transition hover:bg-slate-300 cursor-pointer",children:"নির্বাচন মুছুন"}),n.jsx("button",{type:"button",onClick:()=>{const p=Array.from(re);if(confirm(`🗑️ নির্বাচিত ${p.length} জন মেম্বার স্থায়ীভাবে মুছে ফেলবেন?

(সব ডিভাইস ও ক্লাউড থেকে মুছে যাবে; ভুল হলে পরের রিপোর্ট-আপডেটে প্রয়োজনীয় মেম্বার ফিরে আসবে)`)){for(const N of p)try{Lh(N)}catch{}B(new Set),L(N=>N+1),Z({ok:!0,text:`🗑️ নির্বাচিত ${p.length.toLocaleString("en-IN")} জন মেম্বার মুছে ফেলা হয়েছে — ক্লাউডেও কাটছাঁট হবে।`})}},className:"rounded-lg bg-rose-600 px-3 py-1.5 text-[10px] font-black text-white shadow transition hover:bg-rose-700 cursor-pointer",children:"🗑️ মুছে ফেলুন"})]})]}),n.jsxs("div",{className:"flex items-center justify-between gap-2 border-t border-slate-200 bg-slate-50 px-4 py-3",children:[n.jsxs("span",{className:"text-[11px] font-bold text-slate-500",children:["দেখানো হচ্ছে"," ",n.jsx("span",{className:"font-mono text-slate-700",children:w.length.toLocaleString("en-IN")})," ","/"," ",n.jsx("span",{className:"font-mono text-slate-700",children:E.length.toLocaleString("en-IN")})]}),n.jsx("button",{type:"button",onClick:o,className:"rounded-xl bg-slate-200 px-4 py-2 text-xs font-bold text-slate-700 transition hover:bg-slate-300 cursor-pointer",children:"বন্ধ করুন"})]})]})})}const cl=l=>!1,z5=(l,o)=>({blocked:!1}),am=["jagoron","agrossor"],F5=l=>{const o=(l||"").trim().toLowerCase();return(o&&!am.includes(o)?[...am,o]:am).map(c=>({value:c,label:c.toUpperCase()}))},ub=["মেম্বার","জামিনদার-১","জামিনদার-২",{value:"",label:"— ফাঁকা —"}],sm=["Sr","Date","মেম্বার কোড","মেম্বার Name","Centre Code","Centre Name","Bank Name","হিসাব নং","Check No.","MICR","Disbursse","Project","Return","Action"],J5=`
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
`,wa=l=>{const o=[{bankName:l.bankName||"",checkNo:l.checkNo||"",micr:l.micr===!0,accountNo:l.accountNo||"",accountType:l.accountType||""}];for(const u of l.extraBanks||[])u&&((u.bankName||"").trim()||(u.checkNo||"").trim())&&o.push({bankName:u.bankName||"",checkNo:u.checkNo||"",micr:u.micr===!0,accountNo:u.accountNo||"",accountType:u.accountType||""});return o},X5=l=>JSON.stringify({m:Te(l.memberCode||""),n:(l.memberName||"").trim().toLowerCase(),cc:Te(l.centreCode||""),cn:(l.centreName||"").trim().toLowerCase(),p:wa(l).map(o=>[(o.bankName||"").trim().toLowerCase(),String(o.checkNo||"").replace(/\s/g,""),o.micr?1:0,String(o.accountNo||"").replace(/\s/g,""),(o.accountType||"").trim()].join("|")).sort(),d:String(l.disbursse||"").replace(/[^0-9.]/g,""),pr:(l.project||"").trim().toLowerCase(),r:l.returned?1:0}),V5=l=>{const o=new Map;for(const u of l){const c=X5(u),d=o.get(c);if(!d){o.set(c,{row:u,dupes:[]});continue}const f=u.checkDate>d.row.checkDate||u.checkDate===d.row.checkDate&&Number(u.id)>Number(d.row.id);d.dupes=[...d.dupes,f?d.row:u],d.row=f?u:d.row}return[...o.values()]},fp=(l,o)=>{const u=String(o||"").trim().toLowerCase();if(!u)return!0;const c=Te(o);return!!(c&&(Te(l.memberCode).includes(c)||Te(l.centreCode).includes(c)||Te(l.accountNo).includes(c)||(l.extraBanks||[]).some(d=>Te((d==null?void 0:d.accountNo)||"").includes(c)))||(l.memberName||"").toLowerCase().includes(u)||(l.centreName||"").toLowerCase().includes(u))},Y5=(l,o)=>{const u=String(l??""),c=String(o??"").trim();if(!u||!c)return[{t:u,hit:!1}];const d=Te(c),f=[];let A="";for(let y=0;y<u.length;y++){const g=u[y];/\s/.test(g)||(A+=g.toUpperCase(),f.push(y))}const b=[];let h=0,L=0;for(;d;){const y=A.indexOf(d,L);if(y<0)break;const g=y+d.length,H=f[y],D=f[g-1]+1;H>h&&b.push({t:u.slice(h,H),hit:!1}),b.push({t:u.slice(H,D),hit:!0}),h=D,L=g}return b.length?(h<u.length&&b.push({t:u.slice(h),hit:!1}),b):[{t:u,hit:!1}]},Ti=l=>{const o=String(l||"").trim();if(!/^\d{4}-\d{2}-\d{2}$/.test(o))return!1;const u=Number(o.slice(0,4)),c=Number(o.slice(5,7)),d=Number(o.slice(8,10));if(c<1||c>12||d<1||d>31)return!1;const f=new Date(Date.UTC(u,c-1,d));return f.getUTCFullYear()===u&&f.getUTCMonth()===c-1&&f.getUTCDate()===d},q5=(l,o)=>{const u=(o||"").trim();if(!u)return l;const c=l.filter(A=>fp(A,u)),d=new Map(l.map(A=>[Number(A.id),A])),f=new Map;for(const A of c){if(!A.reissuedTo){f.set(Number(A.id),A);continue}let b=A;const h=new Set;for(;b&&b.reissuedTo&&!h.has(Number(b.id));)h.add(Number(b.id)),b=d.get(Number(b.reissuedTo.id));b&&f.set(Number(b.id),b)}return l.filter(A=>f.has(Number(A.id)))},db=l=>{if(!l.key||!l.key.startsWith("Arrow"))return;const o=l.currentTarget;if(!o)return;l.preventDefault();const u=80;l.key==="ArrowLeft"?o.scrollLeft-=u:l.key==="ArrowRight"?o.scrollLeft+=u:l.key==="ArrowUp"?o.scrollTop-=u:l.key==="ArrowDown"&&(o.scrollTop+=u)},Gi=l=>({checkDate:l,memberCode:"",memberName:"",centreCode:"",centreName:"",bankName:"",checkNo:"",disbursse:"",project:"",micr:!1,accountNo:"",accountType:"",bankStatement:!1,extraBanks:[]}),mb=l=>l?`${l.slice(8,10)}-${l.slice(5,7)}`:"";function Q5({selectedDate:l}){const o=l||fa(),[u,c]=R.useState([]),[d,f]=R.useState(Gi(o)),[A,b]=R.useState(null),[h,L]=R.useState(""),[y,g]=R.useState("");R.useEffect(()=>{const v=setTimeout(()=>g(h),140);return()=>clearTimeout(v)},[h]);const[H,D]=R.useState("idle"),[T,Z]=R.useState(0),[O,G]=R.useState(null),[ce,K]=R.useState(!1),[ee,C]=R.useState(!1),[V,re]=R.useState(""),[B,se]=R.useState(!1),[ie,te]=R.useState(1),[ue,be]=R.useState(1),[E,w]=R.useState(!1),[p,N]=R.useState(!1),[P,W]=R.useState(null),[F,U]=R.useState(!1),[j,_]=R.useState(""),[x,Q]=R.useState(""),[Re,ge]=R.useState(null),[Ne,He]=R.useState(""),[pe,he]=R.useState(""),ae=25,ye=R.useRef(null),ze=R.useRef(null),xt=R.useRef(null),ht=R.useRef(!1);R.useEffect(()=>{const v=ye.current;if(!v)return;const oe=le=>{var Ge,on;const Se=(on=(Ge=le.target)==null?void 0:Ge.closest)==null?void 0:on.call(Ge,"[data-micr-toggle]");if(!Se)return;le.preventDefault();const we=Se.getAttribute("data-micr-toggle");if(we==="main")f(Qe=>({...Qe,micr:!Qe.micr}));else{const Qe=Number(we);Number.isInteger(Qe)&&f(oa=>({...oa,extraBanks:oa.extraBanks.map((Ut,tt)=>tt===Qe?{...Ut,micr:!Ut.micr}:Ut)}))}};return v.addEventListener("touchstart",oe,{passive:!1}),()=>v.removeEventListener("touchstart",oe)},[]);const Xe=cl(d.checkDate);z5(d.checkDate);const ve=()=>{c(D5()),Z(RR())};R.useEffect(()=>{ve();const v=()=>ve();return window.addEventListener("check-changed",v),window.addEventListener("member-db-changed",v),window.addEventListener("tx-changed",v),window.addEventListener("day-close-changed",v),()=>{window.removeEventListener("check-changed",v),window.removeEventListener("member-db-changed",v),window.removeEventListener("tx-changed",v),window.removeEventListener("day-close-changed",v)}},[]),R.useEffect(()=>{A||f(v=>v.memberCode||v.checkNo?v:{...v,checkDate:o})},[o,A]);const it=v=>{const oe=v.trim();if(!oe){D("idle");return}const le=Oh(oe);le?(D("found"),f(Se=>({...Se,memberCode:oe,memberName:le.memberName||"",centreCode:le.centreCode||"",centreName:le.centreName||""}))):(D("notfound"),f(Se=>({...Se,memberCode:oe,memberName:"",centreCode:"",centreName:""})))},It=H==="found",at=H!=="found",Bt=v=>{const oe=Te(v);if(!oe||A)return null;let le=null;for(const Se of u)Se.returned||!(Te(Se.accountNo)===oe||(Se.extraBanks||[]).some(Ge=>Te(Ge==null?void 0:Ge.accountNo)===oe))||(!le||Number(Se.id)>Number(le.id))&&(le=Se);return(le==null?void 0:le.memberCode)||null},Ae=R.useMemo(()=>Bt(d.accountNo),[u,d.accountNo,A]),Me=R.useRef(null),ct=v=>{f(le=>({...le,memberCode:v})),D("idle"),Me.current&&window.clearTimeout(Me.current);const oe=v.trim();oe&&(Me.current=window.setTimeout(()=>it(oe),350))};R.useEffect(()=>()=>{Me.current&&window.clearTimeout(Me.current)},[]);const kt=()=>{if(!Ti(d.checkDate))return G({kind:"err",text:"তারিখ 100% পূরণ করুন (সম্পূর্ণ তারিখ বাধ্যতামূলক) — না পূরণে এন্ট্রি সেভ হবে না।"});if(!d.memberCode.trim())return G({kind:"err",text:"মেম্বার কোড দিন।"});if(!d.bankName.trim())return G({kind:"err",text:"ব্যাংকের নাম দিন।"});if(!d.checkNo.trim())return G({kind:"err",text:"চেক নম্বর দিন।"});if(at){if(!d.memberName.trim())return G({kind:"err",text:"মেম্বার নাম দিন (ডাটাবেজে পাওয়া যায়নি)।"});if(!d.centreCode.trim())return G({kind:"err",text:"সেন্টার কোড দিন (ডাটাবেজে পাওয়া যায়নি)।"});if(!d.centreName.trim())return G({kind:"err",text:"সেন্টার নাম দিন (ডাটাবেজে পাওয়া যায়নি)।"})}const v=d.extraBanks.map(Qe=>({bankName:(Qe.bankName||"").trim(),checkNo:(Qe.checkNo||"").trim(),micr:!!Qe.micr,accountNo:(Qe.accountNo||"").trim(),accountType:Qe.accountType||"",bankStatement:!!Qe.bankStatement})).filter(Qe=>Qe.bankName||Qe.checkNo);for(let Qe=0;Qe<v.length;Qe++){if(!v[Qe].bankName)return G({kind:"err",text:`ব্যাংক #${Qe+2}-এর নাম দিন (না হলে ✕ দিয়ে জোড়াটি বাদ দিন)।`});if(!v[Qe].checkNo)return G({kind:"err",text:`ব্যাংক #${Qe+2}-এর চেক নম্বর দিন (না হলে ✕ দিয়ে জোড়াটি বাদ দিন)।`})}const oe=[{bankName:d.bankName,checkNo:d.checkNo},...v].find(Qe=>Qe.bankName.trim()&&Qe.checkNo.trim()&&T5(Qe.bankName,Qe.checkNo,A==null?void 0:A.id));if(oe&&!confirm(`⚠️ ${oe.bankName} ব্যাংকের ${oe.checkNo} নম্বর চেকটি আগেও এন্ট্রি করা আছে।

তবুও সেভ করতে চান?`))return;at&&hR({memberCode:d.memberCode,memberName:d.memberName,centreCode:d.centreCode,centreName:d.centreName,bankName:d.bankName,checkNo:d.checkNo,source:"auto"});const le={checkDate:d.checkDate,memberCode:d.memberCode.trim(),memberName:d.memberName.trim(),centreCode:d.centreCode.trim(),centreName:d.centreName.trim(),bankName:d.bankName.trim(),checkNo:d.checkNo.trim(),disbursse:d.disbursse.trim(),project:d.project.trim().toLowerCase(),micr:!!d.micr,accountNo:d.accountNo.trim(),accountType:d.accountType||"",bankStatement:!!d.bankStatement,extraBanks:v,foundInDb:It},Se=!!A,we=Se?nm({...A,...le}):C5(le);Se&&b(null);const Ge=!!h.trim()&&!fp(we,h);Ge&&(L(""),te(1));const on=ns().length;G({kind:"ok",text:Se?`✓ চেক #${le.checkNo} (${le.memberCode}) আপডেট হয়েছে — আগের এন্ট্রিটি মুছে যায়নি, ওই এন্ট্রিটিই বদলেছে। মোট এন্ট্রি: ${on.toLocaleString("en-IN")}${Ge?" • সার্চ ফিল্টার সরানো হয়েছে যাতে এন্ট্রিটি দেখা যায়":""}`:at?`✓ নতুন মেম্বার (${le.memberCode}) ডাটাবেজে যোগ হয়েছে এবং চেক এন্ট্রি সেভ হয়েছে। মোট এন্ট্রি: ${on.toLocaleString("en-IN")}`:`✓ চেক #${le.checkNo} সেভ হয়েছে (ডাটাবেজ থেকে তথ্য আনা হয়েছে)। মোট এন্ট্রি: ${on.toLocaleString("en-IN")}`}),f(Gi(d.checkDate)),D("idle"),ve()},qt=v=>{cl(v.checkDate),G(null),w(!1),b(v),f({checkDate:v.checkDate,memberCode:v.memberCode,memberName:v.memberName,centreCode:v.centreCode,centreName:v.centreName,bankName:v.bankName,checkNo:v.checkNo,disbursse:v.disbursse||"",project:(v.project||"").trim().toLowerCase(),accountNo:v.accountNo||"",accountType:v.accountType||"",micr:!!v.micr,bankStatement:!!v.bankStatement,extraBanks:(v.extraBanks||[]).map(Se=>({bankName:(Se==null?void 0:Se.bankName)||"",checkNo:(Se==null?void 0:Se.checkNo)||"",micr:(Se==null?void 0:Se.micr)===!0,accountNo:(Se==null?void 0:Se.accountNo)||"",accountType:(Se==null?void 0:Se.accountType)||"",bankStatement:(Se==null?void 0:Se.bankStatement)===!0}))});const oe=Oh(v.memberCode);D(oe?"found":"notfound");const le=ye.current;le&&typeof le.scrollIntoView=="function"&&le.scrollIntoView({behavior:"smooth",block:"start"})},en=v=>{cl(v.checkDate),confirm(`চেক নম্বর ${v.checkNo} (${v.memberCode}) — ${Fe(v.checkDate)||v.checkDate} তারিখের এন্ট্রিটি মুছে ফেলতে চান?`)&&(Ap(v.id),(A==null?void 0:A.id)===v.id&&(b(null),f(Gi(d.checkDate)),D("idle")),G({kind:"ok",text:`✓ চেক #${v.checkNo} (${v.memberCode}) মুছে ফেলা হয়েছে। বাকি মোট এন্ট্রি: ${ns().length.toLocaleString("en-IN")}`}),ve())},rn=v=>{const{members:oe,skipped:le}=km(v);if(!oe.length){G({kind:"err",text:"কোনো মেম্বার পাওয়া যায়নি — ফরম্যাট মিলিয়ে দেখুন।"});return}const Se=cm(oe);G({kind:"ok",text:`✓ ডাটাবেজ আমদানি — নতুন ${Se.added}, আপডেট ${Se.updated}, মোট ${Se.total} মেম্বার${le?` (বাদ ${le})`:""}`}),K(!1),re(""),ve()},me=async v=>{const oe=v.name.toLowerCase();try{oe.endsWith(".csv")||oe.endsWith(".txt")||oe.endsWith(".tsv")?rn(await v.text()):oe.endsWith(".xlsx")||oe.endsWith(".xls")?(G({kind:"warn",text:"Excel ফাইল সরাসরি পড়া যায় না — ফাইলটি খুলে সব ঘর কপি করে ‘পেস্ট করে আমদানি’ করুন।"}),K(!0)):G({kind:"err",text:"CSV / TXT ফাইল দিন।"})}catch{G({kind:"err",text:"ফাইল পড়া যায়নি।"})}},Ie=R.useMemo(()=>{const v=new Set;for(const oe of u)oe.bankName&&oe.bankName.trim()&&v.add(oe.bankName.trim());for(const oe of Pn())oe.bankName&&oe.bankName.trim()&&v.add(oe.bankName.trim());return Array.from(v)},[u]),ut=R.useMemo(()=>q5(u,y),[u,y]),dt=R.useMemo(()=>P?ut.filter(v=>v.checkDate>=P.from&&v.checkDate<=P.to):ut,[ut,P]),Ca=R.useMemo(()=>{const v=Te(d.memberCode);return v?u.filter(oe=>Te(oe.memberCode)===v&&!oe.returned):[]},[u,d.memberCode]);R.useEffect(()=>{te(1),be(1)},[y,P]);const ss=()=>{if(!j&&!x){G({kind:"warn",text:"কমপক্ষে একটি তারিখ লিখুন (হতে বা পর্যন্ত)।"});return}let v=j||x,oe=x||j;v>oe&&([v,oe]=[oe,v]),W({from:v,to:oe}),U(!1)},ka=()=>{W(null),_(""),Q(""),U(!1)},ba=R.useMemo(()=>dt.filter(v=>!v.returned),[dt]),sa=R.useMemo(()=>dt.filter(v=>!!v.returned),[dt]),Qt=R.useMemo(()=>dt.reduce((v,oe)=>{const le=Number(String(oe.disbursse||"").replace(/[^0-9.-]/g,""));return v+(Number.isFinite(le)?le:0)},0),[dt]),ml=u.reduce((v,oe)=>v+(oe.returned?1:0),0),Ua=ba,pa=Math.max(1,Math.ceil(sa.length/ae)),la=sa.slice((ue-1)*ae,ue*ae),Da=R.useMemo(()=>V5(dt),[dt]),ra=v=>{if(cl(v.checkDate),!v.returned){G(null),ge(v),He(""),he("");return}nm({...v,returned:!1,returnDate:""}),G({kind:"ok",text:`✓ চেক #${v.checkNo} (${v.memberCode}) Return থেকে চেক লিস্টে ফিরে এসেছে।`})},cr=()=>{const v=Re;if(v){if(!Ti(Ne)){he("রিটার্নের তারিখ 100% পূরণ করুন (সম্পূর্ণ তারিখ বাধ্যতামূলক) — না পূরণে এন্ট্রি সেভ হবে না।");return}nm({...v,returned:!0,returnDate:Ne}),ge(null),he(""),G({kind:"ok",text:`↩ চেক #${v.checkNo} (${v.memberCode}) Return টেবিলে পাঠানো হয়েছে — তারিখ: ${Fe(Ne)||Ne}। এন্ট্রিটি মুছে যায়নি।`})}},Ta=v=>{const oe=v.reissueChanges;if(!oe||oe.cancelled.length===0&&oe.added.length===0)return null;const le=oe.decisions,Se=(le==null?void 0:le.filter(Ge=>Ge.action==="reissued"))||[],we=(le==null?void 0:le.filter(Ge=>Ge.action==="returned"))||[];return n.jsxs("div",{className:"mt-1 flex flex-col gap-0.5",children:[le&&Se.length>0&&n.jsxs("span",{className:"inline-block whitespace-nowrap rounded border border-teal-300 bg-teal-50 px-1.5 py-0.5 text-[9px] font-black text-teal-800",title:"রি-ইস্যু হিসেবে ধরা পুরনো চেক — নতুন নম্বরে বদলে গেছে",children:["🔁 রি-ইস্যু: ",Se.map(Ge=>`#${Ge.checkNo||"—"}`).join(", ")]}),le&&we.length>0&&n.jsxs("span",{className:"inline-block whitespace-nowrap rounded border border-purple-300 bg-purple-50 px-1.5 py-0.5 text-[9px] font-black text-purple-800",title:"রিটার্ন হিসেবে ধরা পুরনো চেক — রি-ইস্যু হয়নি, শুধু বাতিল",children:["↩ রিটার্ন: ",we.map(Ge=>`#${Ge.checkNo||"—"}`).join(", ")]}),!le&&oe.cancelled.length>0&&n.jsxs("span",{className:"inline-block whitespace-nowrap rounded border border-rose-300 bg-rose-50 px-1.5 py-0.5 text-[9px] font-black text-rose-800",title:"রি-ইস্যুতে বাতিল হওয়া পুরনো চেক",children:["🚫 বাতিল: ",oe.cancelled.map(Ge=>`#${Ge.checkNo||"—"}`).join(", ")]}),oe.added.length>0&&n.jsxs("span",{className:"inline-block whitespace-nowrap rounded border border-emerald-300 bg-emerald-50 px-1.5 py-0.5 text-[9px] font-black text-emerald-800",title:"রি-ইস্যুতে নতুন অ্যাড হওয়া চেক",children:["✨ নতুন: ",oe.added.map(Ge=>`#${Ge.checkNo||"—"}`).join(", ")]})]})},Zn=()=>f(v=>({...v,extraBanks:[...v.extraBanks,{bankName:"",checkNo:"",micr:!1,accountNo:"",accountType:"",bankStatement:!1}]})),Ht=(v,oe,le)=>f(Se=>({...Se,extraBanks:Se.extraBanks.map((we,Ge)=>Ge===v?{...we,[oe]:le}:we)})),En=v=>f(oe=>({...oe,extraBanks:oe.extraBanks.filter((le,Se)=>Se!==v)})),Kt=({children:v})=>{const oe=String(v??""),le=Y5(oe,y);return le.length===1&&!le[0].hit?n.jsx(n.Fragment,{children:oe}):n.jsx(n.Fragment,{children:le.map((Se,we)=>Se.hit?n.jsx("mark",{className:"rounded-sm bg-yellow-300 px-[1px] text-slate-950",children:Se.t},we):n.jsx(R.Fragment,{children:Se.t},we))})},ls=(v,oe,le)=>{const Se=cl(v.checkDate);return n.jsxs("tr",{className:`border-b border-slate-200 last:border-b-0 ${le%2?"bg-slate-50/70":"bg-white"} hover:bg-blue-50/60`,children:[n.jsx("td",{className:"px-2 py-1.5 font-mono text-[11px] font-bold text-slate-500",children:oe}),n.jsx("td",{className:"whitespace-nowrap px-2 py-1.5 font-mono text-xs font-bold text-slate-800",children:Fe(v.checkDate)||v.checkDate}),n.jsxs("td",{className:"whitespace-nowrap px-2 py-1.5 font-mono text-xs font-black text-indigo-700",children:[n.jsx(Kt,{children:v.memberCode}),v.foundInDb===!1&&n.jsx("span",{className:"ml-1 rounded bg-amber-100 px-1 py-0.5 text-[9px] font-black text-amber-800",title:"এই মেম্বারটি এন্ট্রির সময় ডাটাবেজে ছিল না — এন্ট্রি থেকেই ডাটাবেজে যোগ হয়েছে",children:"NEW"})]}),n.jsx("td",{className:"px-2 py-1.5 text-xs font-semibold text-slate-900",children:n.jsx(Kt,{children:v.memberName})}),n.jsx("td",{className:"whitespace-nowrap px-2 py-1.5 font-mono text-xs font-bold text-slate-700",children:n.jsx(Kt,{children:v.centreCode})}),n.jsx("td",{className:"px-2 py-1.5 text-xs font-semibold text-slate-900",children:n.jsx(Kt,{children:v.centreName})}),n.jsx("td",{className:"px-2 py-1.5 text-xs font-semibold text-slate-800",children:n.jsx("div",{className:"flex flex-col gap-0.5",children:wa(v).map((we,Ge)=>n.jsx("span",{children:we.bankName||"—"},Ge))})}),n.jsxs("td",{className:"whitespace-nowrap px-2 py-1.5",children:[(()=>{const we=(v.bankStatement?1:0)+(v.extraBanks||[]).filter(Ge=>Ge==null?void 0:Ge.bankStatement).length;return we>0?n.jsx("div",{className:"mb-0.5",children:n.jsxs("span",{className:"inline-block rounded border border-sky-300 bg-sky-50 px-1.5 py-0.5 text-[9px] font-black text-sky-800",title:we>1?`এই এন্ট্রিতে ${we}টি হিসাব Bank Statement`:"এই এন্ট্রি Bank Statement হিসেবে ধরা হয়েছে",children:["📄 Bank Stmt",we>1?` ×${we}`:""]})}):null})(),wa(v).some(we=>we.accountNo||we.accountType)?n.jsx("div",{className:"flex flex-col gap-0.5",children:wa(v).map((we,Ge)=>we.accountNo||we.accountType?n.jsxs("span",{className:"inline-flex items-center gap-1",children:[n.jsx("span",{className:"font-mono text-xs font-black text-slate-900",children:n.jsx(Kt,{children:we.accountNo||"—"})}),we.accountType&&n.jsx("span",{className:`rounded px-1 py-0.5 text-[9px] font-black ${we.accountType==="মেম্বার"?"bg-indigo-100 text-indigo-800":"bg-teal-100 text-teal-800"}`,children:we.accountType})]},Ge):null)}):n.jsx("span",{className:"text-slate-300",children:"—"})]}),n.jsxs("td",{className:"px-2 py-1.5 font-mono text-xs font-black text-slate-900",children:[n.jsx("div",{className:"flex flex-col gap-0.5",children:wa(v).map((we,Ge)=>n.jsx("span",{className:"whitespace-nowrap",children:we.checkNo||"—"},Ge))}),v.reissuedTo&&n.jsxs("span",{className:"mt-1 inline-block rounded border border-teal-300 bg-teal-50 px-1.5 py-0.5 text-[9px] font-black text-teal-800",title:`এই চেকটি রি-ইস্যু হয়েছে — নতুন চেক #${v.reissuedTo.checkNo} (এন্ট্রি #${v.reissuedTo.id})`,children:["🔁 Reissued ",Fe(v.reissuedTo.date)||v.reissuedTo.date," → #",v.reissuedTo.checkNo]}),v.reissuedFrom&&n.jsxs("span",{className:"mt-1 inline-block rounded border border-orange-300 bg-orange-50 px-1.5 py-0.5 text-[9px] font-black text-orange-800",title:`পুরনো চেক #${v.reissuedFrom.checkNo} (${Fe(v.reissuedFrom.checkDate)||v.reissuedFrom.checkDate})-এর রি-ইস্যু`,children:["🔁 Reissue — পুরনো চেক #",v.reissuedFrom.checkNo," (",Fe(v.reissuedFrom.checkDate)||v.reissuedFrom.checkDate,")"]}),Ta(v)]}),n.jsx("td",{className:"whitespace-nowrap px-2 py-1.5 text-center",children:n.jsx("div",{className:"flex flex-col items-center gap-0.5",children:wa(v).map((we,Ge)=>we.micr?n.jsx("span",{className:"rounded border border-emerald-300 bg-emerald-100 px-1.5 py-0.5 text-[10px] font-black text-emerald-800",children:"MICR"},Ge):n.jsx("span",{className:"rounded border border-slate-300 bg-slate-100 px-1.5 py-0.5 text-[10px] font-black text-slate-600",children:"NON MICR"},Ge))})}),n.jsx("td",{className:"whitespace-nowrap px-2 py-1.5 text-right font-mono text-xs font-black text-slate-900",children:v.disbursse?zn(v.disbursse):n.jsx("span",{className:"text-slate-300",children:"—"})}),n.jsx("td",{className:"px-2 py-1.5 text-xs font-semibold text-slate-800",children:v.project?n.jsx("span",{className:"uppercase",children:String(v.project).trim().toUpperCase()}):n.jsx("span",{className:"text-slate-300",children:"—"})}),n.jsxs("td",{className:"whitespace-nowrap px-2 py-1.5 text-center",children:[n.jsx("input",{type:"checkbox",checked:!!v.returned,disabled:Se,onChange:()=>ra(v),title:v.returned?`↩ রিটার্নের তারিখ: ${Fe(v.returnDate||"")||v.returnDate||"—"} — টিক তুললে এন্ট্রিটি চেক লিস্টে ফিরে যাবে`:"টিক দিলে তারিখ চাইবে — তারিখসহ এন্ট্রিটি Return টেবিলে চলে যাবে",className:"h-4 w-4 cursor-pointer accent-amber-600 disabled:cursor-not-allowed disabled:opacity-40"}),v.returned&&v.returnDate&&n.jsxs("div",{className:"mt-0.5 text-[9px] font-black text-amber-700",title:"রিটার্নের তারিখ",children:["↩ ",Fe(v.returnDate)||v.returnDate]})]}),n.jsx("td",{className:"whitespace-nowrap px-2 py-1.5",children:n.jsxs("div",{className:"flex items-center gap-1",children:[Se,n.jsx("button",{type:"button",onClick:()=>qt(v),disabled:Se,title:"এডিট করুন",className:"rounded-lg border border-blue-200 bg-blue-50 px-2 py-1 text-xs text-blue-700 transition hover:bg-blue-100 disabled:cursor-not-allowed disabled:opacity-40",children:"✏️"}),n.jsx("button",{type:"button",onClick:()=>en(v),disabled:Se,title:"মুছে ফেলুন",className:"rounded-lg border border-rose-200 bg-rose-50 px-2 py-1 text-xs text-rose-700 transition hover:bg-rose-100 disabled:cursor-not-allowed disabled:opacity-40",children:"🗑️"})]})})]},v.id)},zn=v=>{const oe=Number(v);return v.trim()!==""&&Number.isFinite(oe)?oe.toLocaleString("en-IN"):v},rs=R.useMemo(()=>Ua.map((v,oe)=>ls(v,oe+1,oe)),[Ua,y,Xe,B]),os=R.useMemo(()=>la.map((v,oe)=>ls(v,(ue-1)*ae+oe+1,oe)),[la,y,Xe,B]),is=R.useMemo(()=>Da.map((v,oe)=>ls(v.row,oe+1,oe)),[Da,y,Xe,B]),ga=R.useMemo(()=>new Set(u.map(v=>Te(v.memberCode))).size,[u]),yt="w-full rounded-lg border border-slate-300 bg-orange-50 px-3 py-2 text-sm font-semibold text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200",pn="mb-1 block h-[24px] truncate leading-[24px] text-[11px] font-black uppercase tracking-wide text-slate-600",Fn="w-full rounded-lg border border-emerald-300 bg-emerald-50 px-3 py-2 text-sm font-bold text-emerald-900";return n.jsxs("div",{className:"space-y-4 lg:mx-auto lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl lg:space-y-3.5",children:[n.jsxs("div",{ref:ye,className:"rounded-2xl border border-slate-200 border-t-4 border-t-indigo-500 bg-white p-4 shadow-sm sm:p-4 lg:p-3.5",children:[n.jsxs("div",{className:"mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3 sm:mb-3 sm:pb-2",children:[n.jsxs("h1",{className:"flex flex-wrap items-center gap-2 text-lg font-black text-slate-900 sm:text-lg",children:[n.jsx("span",{children:"🧾"}),n.jsx("span",{children:"Check Entry"}),Xe,A&&n.jsxs("span",{className:"shrink-0 rounded-lg border border-amber-300 bg-amber-100 px-2 py-0.5 text-[10px] font-black text-amber-800",children:["✏️ এডিট মোড — #",A.checkNo]})]}),n.jsxs("span",{className:"rounded-lg border border-slate-200 bg-slate-100 px-2.5 py-1 text-[11px] font-bold text-slate-600",children:["🗄️ মেম্বার ডাটাবেজ: ",n.jsx("span",{className:"font-mono",children:T.toLocaleString("en-IN")})]})]}),n.jsxs("div",{className:"grid grid-cols-2 gap-2 sm:grid-cols-2 sm:gap-3 lg:grid-cols-4",children:[n.jsxs("div",{children:[n.jsx("label",{className:pn,children:"Date (তারিখ)"}),n.jsx(bn,{value:d.checkDate,onChange:v=>f(oe=>({...oe,checkDate:v||oe.checkDate})),className:"py-2 text-sm font-semibold",manualEntry:!0})]}),n.jsxs("div",{children:[n.jsxs("div",{className:"mb-1 flex h-[24px] items-center justify-between gap-2",children:[n.jsx("label",{className:`${pn} !mb-0`,children:"Member Code (মেম্বার কোড)"}),n.jsx("button",{type:"button",onClick:()=>C(!0),title:"মেম্বার ডাটাবেজ থেকে খুঁজুন",className:"flex h-6 w-7 shrink-0 cursor-pointer items-center justify-center rounded-md border border-indigo-300 bg-indigo-50 text-xs transition hover:bg-indigo-100",children:"🗄️"})]}),n.jsxs("div",{className:"relative",children:[n.jsx("input",{value:d.memberCode,onChange:v=>ct(v.target.value),onBlur:v=>{Me.current&&window.clearTimeout(Me.current),it(v.target.value)},onKeyDown:v=>{v.key==="Enter"&&v.target.blur()},className:yt,inputMode:"numeric",pattern:"[0-9]*",autoComplete:"off"}),H!=="idle"&&n.jsx("span",{className:`pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 rounded px-1.5 py-0.5 text-[10px] font-black ${It?"bg-emerald-100 text-emerald-800 border border-emerald-300":"bg-amber-100 text-amber-800 border border-amber-300"}`,children:It?"✓ ডাটাবেজে আছে":"⚠ পাওয়া যায়নি"})]}),It&&d.memberName.trim()?n.jsxs("div",{className:"mt-1 flex items-start gap-1.5 rounded-lg border border-emerald-300 bg-emerald-50 px-2 py-1",children:[n.jsx("span",{"aria-hidden":"true",className:"leading-[18px]",children:"👤"}),n.jsx("span",{className:"text-[12px] font-black leading-[18px] text-emerald-900",children:d.memberName})]}):null]}),n.jsxs("div",{children:[n.jsxs("div",{className:"mb-1 flex h-[24px] items-center justify-between gap-2",children:[n.jsx("label",{className:`${pn} !mb-0`,children:"Bank Name (ব্যাংকের নাম)"}),d.extraBanks.length===0&&n.jsx("button",{type:"button",onClick:Zn,title:"আরেকটি ব্যাংক + চেক নম্বর যোগ করুন (টেবিলে এক সারিতেই থাকবে)",className:"flex h-6 w-7 shrink-0 cursor-pointer items-center justify-center rounded-md border border-emerald-400 bg-emerald-100 text-sm font-black text-emerald-800 transition hover:bg-emerald-200",children:"＋"})]}),n.jsx(ib,{value:d.bankName,onChange:v=>f(oe=>({...oe,bankName:v})),className:yt,extras:Ie,placeholder:"Bank name"})]}),n.jsxs("div",{children:[n.jsxs("div",{className:"mb-1 flex h-[24px] items-center justify-between gap-2",children:[n.jsx("label",{className:`${pn} !mb-0`,children:"হিসাব নং"}),n.jsxs("label",{className:"flex cursor-pointer select-none items-center gap-1 rounded-md border border-sky-300 bg-sky-50 px-2 py-0.5 text-[10px] font-black text-sky-800 transition hover:bg-sky-100",title:"টিক দিলে এই হিসাব Bank Statement হিসেবে ধরা হবে — টেবিলে 📄 ব্যাজ দেখাবে",children:[n.jsx("input",{type:"checkbox",checked:!!d.bankStatement,onChange:v=>f(oe=>({...oe,bankStatement:v.target.checked})),className:"h-3.5 w-3.5 cursor-pointer accent-sky-600"}),n.jsx("span",{className:"whitespace-nowrap",children:"Bank Stmt"}),n.jsx("span",{className:"rounded bg-white px-1 text-[9px] font-black text-slate-500",children:d.bankStatement?"BS ✓":"—"})]})]}),Ae?n.jsxs("div",{className:"mb-1 flex items-center gap-1 rounded-md border border-amber-300 bg-amber-50 px-2 py-0.5 text-[10px] font-black text-amber-900",children:[n.jsx("span",{"aria-hidden":"true",children:"🔁"}),n.jsxs("span",{children:["আগেই ব্যবহার হয়েছে — মেম্বার কোড: ",n.jsx("span",{className:"font-mono",children:Ae})]})]}):null,n.jsx("input",{value:d.accountNo,onChange:v=>f(oe=>({...oe,accountNo:v.target.value})),className:yt,inputMode:"numeric",pattern:"[0-9]*",autoComplete:"off",placeholder:"অ্যাকাউন্ট নম্বর"})]}),n.jsxs("div",{children:[n.jsx("label",{className:pn,children:"ক্যাটাগরি"}),n.jsx(na,{value:d.accountType,onChange:v=>f(oe=>({...oe,accountType:v})),options:ub,placeholder:"-- Select --",className:`${yt} cursor-pointer`,noKeyboardOnMobile:!0})]}),n.jsxs("div",{children:[n.jsxs("div",{className:"mb-1 flex h-[24px] items-center justify-between gap-2",children:[n.jsx("label",{className:`${pn} !mb-0`,children:"Check No."}),n.jsxs("label",{"data-micr-toggle":"main",onMouseDown:v=>{document.activeElement===xt.current&&(ht.current=!0),v.preventDefault()},className:"flex cursor-pointer select-none items-center gap-1 rounded-md border border-emerald-300 bg-emerald-50 px-2 py-0.5 text-[10px] font-black text-emerald-800 transition hover:bg-emerald-100",title:"টিক দিলে টেবিলে MICR, টিক না দিলে NON MICR দেখাবে",children:[n.jsx("input",{type:"checkbox",checked:!!d.micr,onChange:v=>{const oe=v.target.checked;f(le=>({...le,micr:oe})),ht.current&&window.setTimeout(()=>{var le;(le=xt.current)==null||le.focus(),ht.current=!1},0)},className:"h-3.5 w-3.5 cursor-pointer accent-emerald-600"}),n.jsx("span",{children:"MICR"}),n.jsx("span",{className:"rounded bg-white px-1 text-[9px] font-black text-slate-500",children:d.micr?"MICR":"NON MICR"})]})]}),n.jsx("input",{ref:xt,value:d.checkNo,onChange:v=>f(oe=>({...oe,checkNo:v.target.value})),className:yt,inputMode:"numeric",pattern:"[0-9]*",autoComplete:"off"})]}),n.jsxs("div",{children:[n.jsx("label",{className:pn,children:"Disbursse (Amount)"}),n.jsx("input",{value:d.disbursse,onChange:v=>{const oe=v.target.value;/^-?\d*\.?\d*$/.test(oe)&&f(le=>({...le,disbursse:oe}))},inputMode:"numeric",pattern:"[0-9]*",className:`${yt} text-right font-mono`,autoComplete:"off"})]}),n.jsxs("div",{children:[n.jsx("label",{className:"mb-1 block h-[24px] truncate leading-[24px] text-[11px] font-black tracking-wide text-slate-600",children:"project"}),n.jsx(na,{value:(d.project||"").trim().toLowerCase(),onChange:v=>f(oe=>({...oe,project:v.trim().toLowerCase()})),options:F5(d.project),placeholder:"-- select project --",className:`${yt} cursor-pointer uppercase`,noKeyboardOnMobile:!0})]})]}),d.extraBanks.length>0&&n.jsx("div",{className:"mt-3 space-y-2",children:d.extraBanks.map((v,oe)=>n.jsxs(R.Fragment,{children:[oe===d.extraBanks.length-1&&n.jsx("div",{className:"mb-1 flex justify-end",children:n.jsx("button",{type:"button",onClick:Zn,title:"আরেকটি ব্যাংক + চেক নম্বর যোগ করুন (টেবিলে এক সারিতেই থাকবে)",className:"flex h-6 w-7 cursor-pointer items-center justify-center rounded-md border border-emerald-400 bg-emerald-100 text-sm font-black text-emerald-800 transition hover:bg-emerald-200",children:"＋"})}),n.jsxs("div",{className:"grid grid-cols-[1fr_1fr_auto] items-end gap-2 rounded-xl border border-emerald-300 bg-emerald-50/60 p-2",children:[n.jsxs("div",{children:[n.jsxs("span",{className:"mb-1 block text-[10px] font-black tracking-wide text-emerald-800",children:["ব্যাংক #",oe+2]}),n.jsx(ib,{value:v.bankName,onChange:le=>Ht(oe,"bankName",le),className:yt,extras:Ie,placeholder:"Bank name"})]}),n.jsxs("div",{children:[n.jsxs("span",{className:"mb-1 flex items-center justify-between gap-1",children:[n.jsxs("span",{className:"block text-[10px] font-black tracking-wide text-emerald-800",children:["হিসাব নং #",oe+2]}),n.jsxs("label",{className:"flex cursor-pointer select-none items-center gap-1 rounded-md border border-sky-300 bg-sky-50 px-1.5 py-0.5 text-[9px] font-black text-sky-800 transition hover:bg-sky-100",title:"টিক দিলে এই হিসাব (#{} নং) Bank Statement হিসেবে ধরা হবে",children:[n.jsx("input",{type:"checkbox",checked:!!v.bankStatement,onChange:le=>Ht(oe,"bankStatement",le.target.checked),className:"h-3 w-3 cursor-pointer accent-sky-600"}),n.jsx("span",{className:"whitespace-nowrap",children:"Bank Stmt"}),n.jsx("span",{className:"rounded bg-white px-1 text-[8px] font-black text-slate-500",children:v.bankStatement?"BS ✓":"—"})]})]}),(()=>{const le=Bt(v.accountNo||"");return le?n.jsxs("div",{className:"mb-1 flex items-center gap-1 rounded-md border border-amber-300 bg-amber-50 px-2 py-0.5 text-[10px] font-black text-amber-900",children:[n.jsx("span",{"aria-hidden":"true",children:"🔁"}),n.jsxs("span",{children:["আগেই ব্যবহার হয়েছে — মেম্বার কোড: ",n.jsx("span",{className:"font-mono",children:le})]})]}):null})(),n.jsx("input",{value:v.accountNo||"",onChange:le=>Ht(oe,"accountNo",le.target.value),className:yt,inputMode:"numeric",pattern:"[0-9]*",placeholder:"অ্যাকাউন্ট নম্বর",autoComplete:"off"})]}),n.jsx("button",{type:"button",onClick:()=>En(oe),title:"এই ব্যাংক জোড়া মুছুন",className:"h-9 w-9 shrink-0 cursor-pointer rounded-lg border border-rose-300 bg-rose-50 text-sm font-black text-rose-700 transition hover:bg-rose-100",children:"✕"}),n.jsxs("div",{className:"col-span-3 grid grid-cols-2 gap-2 border-t border-emerald-200/70 pt-2",children:[n.jsxs("div",{children:[n.jsxs("span",{className:"mb-1 block h-[24px] leading-[24px] text-[10px] font-black tracking-wide text-emerald-800",children:["ক্যাটাগরি #",oe+2]}),n.jsx(na,{value:v.accountType||"",onChange:le=>Ht(oe,"accountType",le),options:ub,placeholder:"-- Select --",className:`${yt} cursor-pointer`,noKeyboardOnMobile:!0})]}),n.jsxs("div",{children:[n.jsxs("div",{className:"mb-1 flex h-[24px] items-center justify-between gap-2",children:[n.jsxs("span",{className:"block text-[10px] font-black tracking-wide text-emerald-800",children:["চেক নম্বর #",oe+2]}),n.jsxs("label",{"data-micr-toggle":String(oe),onMouseDown:le=>le.preventDefault(),className:"flex cursor-pointer select-none items-center gap-1 rounded-md border border-emerald-300 bg-emerald-50 px-1.5 py-0.5 text-[9px] font-black text-emerald-800 transition hover:bg-emerald-100",title:"টিক দিলে এই চেকটি MICR, টিক না দিলে NON MICR",children:[n.jsx("input",{type:"checkbox",checked:!!v.micr,onChange:le=>Ht(oe,"micr",le.target.checked),className:"h-3.5 w-3.5 cursor-pointer accent-emerald-600"}),n.jsx("span",{children:"MICR"}),n.jsx("span",{className:"rounded bg-white px-1 text-[8px] font-black text-slate-500",children:v.micr?"MICR":"NON MICR"})]})]}),n.jsx("input",{value:v.checkNo,onChange:le=>Ht(oe,"checkNo",le.target.value),className:yt,inputMode:"numeric",pattern:"[0-9]*",placeholder:"Check No.",autoComplete:"off"})]})]})]})]},oe))}),Ca.length>0&&n.jsxs("div",{className:"mt-3 rounded-xl border border-indigo-300 bg-indigo-50/70 p-3",children:[n.jsx("div",{className:"mb-2 flex flex-wrap items-center justify-between gap-2",children:n.jsxs("span",{className:"flex items-center gap-2 text-[11px] font-black text-indigo-900",children:["🔎 এই মেম্বার কোডের সেভ করা চেক এন্ট্রি",n.jsx("span",{className:"rounded bg-indigo-100 px-1.5 py-0.5 font-mono",children:Ca.length})]})}),n.jsx("div",{className:"space-y-1.5",children:Ca.map(v=>{const oe=cl(v.checkDate),le=(A==null?void 0:A.id)===v.id;return n.jsxs("div",{className:`flex flex-wrap items-center gap-2 rounded-lg border px-2.5 py-1.5 ${le?"border-amber-300 bg-amber-50":"border-slate-200 bg-white"}`,children:[n.jsx("span",{className:"font-mono text-[11px] font-black text-slate-700",children:Fe(v.checkDate)||v.checkDate}),n.jsx("span",{className:"text-[11px] font-bold text-slate-600",children:wa(v).map(Se=>Se.bankName).filter(Boolean).join(", ")}),n.jsx("span",{className:"font-mono text-[11px] font-black text-slate-900",children:wa(v).map(Se=>Se.checkNo?`#${Se.checkNo}`:"").filter(Boolean).join(", ")}),v.disbursse&&n.jsxs("span",{className:"font-mono text-[11px] font-bold text-emerald-700",children:["৳",zn(v.disbursse)]}),v.project&&n.jsx("span",{className:"rounded bg-slate-100 px-1.5 py-0.5 text-[10px] font-bold text-slate-600 uppercase",children:String(v.project).trim().toUpperCase()}),n.jsx("span",{className:`rounded border px-1.5 py-0.5 text-[10px] font-black ${v.micr?"border-emerald-300 bg-emerald-100 text-emerald-800":"border-slate-300 bg-slate-100 text-slate-600"}`,children:v.micr?"MICR":"NON MICR"}),n.jsxs("div",{className:"ml-auto flex items-center gap-1",children:[oe,le&&n.jsx("span",{className:"rounded border border-amber-300 bg-amber-100 px-1.5 py-0.5 text-[10px] font-black text-amber-800",children:"✏️ এডিট মোড"}),n.jsx("button",{type:"button",onClick:()=>qt(v),disabled:le,title:"এই এন্ট্রি এডিট করুন",className:"rounded-lg border border-blue-200 bg-blue-50 px-2 py-1 text-[11px] font-bold text-blue-700 transition hover:bg-blue-100 disabled:cursor-not-allowed disabled:opacity-40",children:"✏️ এডিট"}),n.jsx("button",{type:"button",onClick:()=>en(v),disabled:oe,title:"এই এন্ট্রি মুছে ফেলুন",className:"rounded-lg border border-rose-200 bg-rose-50 px-2 py-1 text-[11px] font-bold text-rose-700 transition hover:bg-rose-100 disabled:cursor-not-allowed disabled:opacity-40",children:"🗑️ ডিলিট"})]})]},v.id)})})]}),H==="idle"?null:It?n.jsxs("div",{className:"mt-3 rounded-xl border border-emerald-300 bg-emerald-50 p-3",children:[n.jsxs("div",{className:"mb-2 flex items-center gap-2 text-[11px] font-black text-emerald-900",children:[n.jsx("span",{children:"✓"}),n.jsx("span",{children:"ডাটাবেজ থেকে তথ্য নেওয়া হয়েছে — শুধু তারিখ, মেম্বার কোড, ব্যাংক, চেক নম্বর, বিতরণ ও প্রকল্প এন্ট্রি করুন"})]}),n.jsxs("div",{className:"grid grid-cols-1 gap-3 sm:grid-cols-3",children:[n.jsxs("div",{children:[n.jsx("label",{className:"mb-1 block text-[11px] font-black uppercase tracking-wide text-emerald-800",children:"Member Name"}),n.jsx("div",{className:Fn,children:d.memberName||"—"})]}),n.jsxs("div",{children:[n.jsx("label",{className:"mb-1 block text-[11px] font-black uppercase tracking-wide text-emerald-800",children:"Centre Code"}),n.jsx("div",{className:Fn,children:d.centreCode||"—"})]}),n.jsxs("div",{children:[n.jsx("label",{className:"mb-1 block text-[11px] font-black uppercase tracking-wide text-emerald-800",children:"Centre Name"}),n.jsx("div",{className:Fn,children:d.centreName||"—"})]})]})]}):n.jsxs("div",{className:"mt-3 rounded-xl border-2 border-amber-400 bg-amber-50 p-3",children:[n.jsxs("div",{className:"mb-2 flex items-center gap-2 text-[11px] font-black text-amber-900",children:[n.jsx("span",{children:"⚠️"}),n.jsxs("span",{children:["এই মেম্বার কোড ডাটাবেজে নেই — টেবিলের ",n.jsx("u",{children:"সব ঘর"})," পূরণ করতে হবে। সেভ করলে মেম্বারটি ডাটাবেজেও যোগ হয়ে যাবে।"]})]}),n.jsxs("div",{className:"grid grid-cols-1 gap-3 sm:grid-cols-3",children:[n.jsxs("div",{children:[n.jsxs("label",{className:"mb-1 block text-[11px] font-black uppercase tracking-wide text-amber-800",children:["Member Name ",n.jsx("span",{className:"text-rose-600",children:"*"})]}),n.jsx("input",{value:d.memberName,onChange:v=>f(oe=>({...oe,memberName:v.target.value})),placeholder:"মেম্বারের নাম",className:yt,autoComplete:"off"})]}),n.jsxs("div",{children:[n.jsxs("label",{className:"mb-1 block text-[11px] font-black uppercase tracking-wide text-amber-800",children:["Centre Code ",n.jsx("span",{className:"text-rose-600",children:"*"})]}),n.jsx("input",{value:d.centreCode,onChange:v=>f(oe=>({...oe,centreCode:v.target.value})),placeholder:"সেন্টার কোড",className:yt,autoComplete:"off"})]}),n.jsxs("div",{children:[n.jsxs("label",{className:"mb-1 block text-[11px] font-black uppercase tracking-wide text-amber-800",children:["Centre Name ",n.jsx("span",{className:"text-rose-600",children:"*"})]}),n.jsx("input",{value:d.centreName,onChange:v=>f(oe=>({...oe,centreName:v.target.value})),placeholder:"সেন্টারের নাম",className:yt,autoComplete:"off"})]})]})]}),n.jsxs("div",{className:"mt-4 flex flex-wrap items-center gap-2",children:[n.jsx("button",{type:"button",onClick:kt,disabled:Xe,className:"rounded-xl bg-indigo-600 px-4 py-2 text-sm font-black text-white shadow-sm transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-50",children:A?"💾 আপডেট করুন":"＋ সেভ করুন"}),n.jsx("button",{type:"button",onClick:()=>{b(null),f(Gi(d.checkDate)),D("idle"),G(null)},className:"rounded-xl bg-slate-200 px-4 py-2 text-sm font-bold text-slate-700 transition hover:bg-slate-300",children:"রিসেট"}),O&&n.jsx("span",{className:`rounded-lg px-3 py-1.5 text-[11px] font-bold ${O.kind==="ok"?"bg-emerald-50 text-emerald-800 border border-emerald-300":O.kind==="warn"?"bg-amber-50 text-amber-800 border border-amber-300":"bg-rose-50 text-rose-800 border border-rose-300"}`,children:O.text})]})]}),n.jsxs("div",{className:"rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-4 lg:p-3.5",children:[n.jsxs("div",{className:"mb-3 flex flex-wrap items-center justify-between gap-2",children:[n.jsx("h2",{className:"text-base font-black text-slate-900 sm:text-lg",children:"🧾 Check List"}),n.jsxs("div",{className:"flex flex-wrap items-center gap-2 text-[11px] font-bold text-slate-600",children:[n.jsxs("span",{className:"rounded-lg border border-slate-200 bg-slate-100 px-2 py-1",children:["মোট এন্ট্রি: ",n.jsx("span",{className:"font-mono",children:u.length.toLocaleString("en-IN")})]}),n.jsxs("span",{className:"rounded-lg border border-slate-200 bg-slate-100 px-2 py-1",children:["মেম্বার: ",n.jsx("span",{className:"font-mono",children:ga.toLocaleString("en-IN")})]}),n.jsxs("span",{className:"rounded-lg border border-amber-300 bg-amber-50 px-2 py-1 text-amber-800",children:["↩ Return: ",n.jsx("span",{className:"font-mono",children:ml.toLocaleString("en-IN")})]}),(h||P)&&n.jsxs("span",{className:"rounded-lg border border-blue-200 bg-blue-50 px-2 py-1 text-blue-800",children:["ফিল্টার: ",n.jsx("span",{className:"font-mono",children:dt.length})]})]})]}),n.jsxs("div",{className:"mb-3 flex items-stretch gap-2",children:[n.jsxs("div",{className:"relative min-w-0 flex-1",children:[n.jsx("span",{className:"pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400",children:"🔍"}),n.jsx("input",{value:h,onChange:v=>L(v.target.value),placeholder:"Search — মেম্বার কোড, সেন্টার কোড, মেম্বার নাম, সেন্টার নাম, হিসাব নং…",className:"w-full rounded-xl border border-slate-300 bg-orange-50 py-2.5 pl-10 pr-28 text-sm font-semibold text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200",autoComplete:"off"}),(h.trim()||P)&&dt.length>0&&n.jsxs("button",{type:"button",onClick:()=>w(!0),title:"মিলে যাওয়া এন্ট্রিগুলো টেবিল আকারে ফুল স্ক্রিনে দেখুন — একাধিক এন্ট্রি উপর-নিচ সারি হিসেবে, এডিট/ডিলিট/Return সহ",className:"absolute right-11 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg border border-blue-300 bg-blue-50 px-2 py-1 text-[11px] font-black text-blue-700 transition hover:bg-blue-100 cursor-pointer",children:["👁 View (",dt.length,")"]}),h&&n.jsx("button",{type:"button",onClick:()=>L(""),className:"absolute right-2 top-1/2 -translate-y-1/2 rounded-lg px-2 py-1 text-sm font-bold text-slate-400 hover:text-slate-700",children:"✕"})]}),n.jsxs("div",{className:"relative shrink-0",children:[n.jsxs("button",{type:"button",onClick:()=>{_((P==null?void 0:P.from)||""),Q((P==null?void 0:P.to)||""),U(v=>!v)},title:"তারিখ হতে তারিখ ফিল্টার — নির্দিষ্ট সীমার চেক এন্ট্রি দেখুন",className:`flex h-full cursor-pointer items-center gap-1 whitespace-nowrap rounded-xl border px-3 py-2 text-[11px] font-black transition ${P?"border-sky-600 bg-sky-600 text-white shadow":"border-slate-300 bg-orange-50 text-slate-700 hover:border-sky-400 hover:text-sky-700"}`,children:["📅 ",P?`${mb(P.from)} → ${mb(P.to)}`:"তারিখ"]}),F&&n.jsxs("div",{className:"absolute right-0 top-full z-40 mt-1.5 w-64 rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl",children:[n.jsxs("div",{className:"mb-2 flex items-center justify-between",children:[n.jsx("span",{className:"text-xs font-black text-slate-800",children:"📅 তারিখ হতে তারিখ"}),n.jsx("button",{type:"button",onClick:()=>U(!1),className:"rounded px-1.5 text-sm font-black text-slate-400 hover:text-slate-700",children:"✕"})]}),n.jsxs("div",{className:"mb-2",children:[n.jsx("label",{className:"mb-1 block text-[10px] font-black text-slate-600",children:"হতে"}),n.jsx(bn,{value:j,onChange:_,manualEntry:!0,className:"px-2.5 py-1.5 text-xs"})]}),n.jsxs("div",{className:"mb-3",children:[n.jsx("label",{className:"mb-1 block text-[10px] font-black text-slate-600",children:"পর্যন্ত"}),n.jsx(bn,{value:x,onChange:Q,manualEntry:!0,className:"px-2.5 py-1.5 text-xs"})]}),n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("button",{type:"button",onClick:ss,className:"flex-1 rounded-lg bg-emerald-600 px-3 py-1.5 text-[11px] font-black text-white transition hover:bg-emerald-700",children:"✔ প্রয়োগ"}),n.jsx("button",{type:"button",onClick:ka,disabled:!P&&!j&&!x,className:"rounded-lg bg-rose-50 px-3 py-1.5 text-[11px] font-black text-rose-700 transition hover:bg-rose-100 disabled:opacity-40",children:"✕ মুছুন"})]})]})]}),P&&n.jsx("button",{type:"button",onClick:ka,title:"তারিখ ফিল্টার রিসেট — সব তারিখের এন্ট্রি দেখুন",className:"flex h-full shrink-0 cursor-pointer items-center gap-1 whitespace-nowrap rounded-xl border border-amber-400 bg-amber-50 px-3 py-2 text-[11px] font-black text-amber-800 shadow-sm transition hover:border-amber-500 hover:bg-amber-100",children:"↺ রিসেট"}),P&&n.jsxs("button",{type:"button",onClick:()=>N(!0),title:"তারিখ-সীমার সব এন্ট্রি — সকল তথ্যসহ PDF/প্রিন্ট ভিউ",className:"flex h-full shrink-0 cursor-pointer items-center gap-1 whitespace-nowrap rounded-xl border border-rose-600 bg-rose-600 px-3 py-2 text-[11px] font-black text-white shadow transition hover:border-rose-700 hover:bg-rose-700",children:["📄 PDF (",dt.length,")"]})]}),n.jsx("div",{className:"overflow-hidden rounded-xl border border-slate-200",children:n.jsx("div",{tabIndex:0,onKeyDown:db,className:"max-h-[80vh] overflow-auto focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-400 rounded-md",title:"Arrow কি চাপলে টেবিল স্ক্রল হবে",children:n.jsxs("table",{className:"w-full min-w-[980px] border-collapse text-sm",children:[n.jsx("thead",{className:"sticky top-0 z-10 bg-slate-800 text-white",children:n.jsx("tr",{children:sm.map(v=>n.jsx("th",{className:"whitespace-nowrap border-r border-slate-700 px-2 py-2 text-left text-[11px] font-black uppercase tracking-wide last:border-r-0",children:v},v))})}),n.jsx("tbody",{children:Ua.length===0?n.jsx("tr",{children:n.jsx("td",{colSpan:14,className:"px-4 py-10 text-center text-sm font-semibold text-slate-500",children:h?"🔍 এই অনুসন্ধানে চেক লিস্টে কোনো ডাটা পাওয়া যায়নি।":"এখনো কোনো চেক এন্ট্রি নেই — উপরের ফর্ম থেকে যোগ করুন।"})}):rs})]})})}),ba.length>0&&n.jsx("div",{className:"mt-3 flex items-center justify-center",children:n.jsxs("span",{className:"rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-[11px] font-bold text-slate-600",children:["মোট ",n.jsx("span",{className:"font-mono",children:ba.length})," টি চেক — ↕ স্ক্রল করে সব এন্ট্রি দেখুন"]})})]}),n.jsxs("div",{className:"mt-5 lg:mt-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-4 lg:p-3.5",children:[n.jsxs("div",{className:"mb-3 flex flex-wrap items-center justify-between gap-2",children:[n.jsx("h2",{className:"text-base font-black text-slate-900 sm:text-lg",children:"↩ Return Table"}),n.jsxs("div",{className:"flex flex-wrap items-center gap-2 text-[11px] font-bold text-slate-600",children:[n.jsxs("span",{className:"rounded-lg border border-amber-300 bg-amber-50 px-2 py-1 text-amber-800",children:["রিটার্ন এন্ট্রি: ",n.jsx("span",{className:"font-mono",children:sa.length.toLocaleString("en-IN")})]}),n.jsx("span",{className:"rounded-lg border border-slate-200 bg-slate-100 px-2 py-1",children:"Return ঘরের টিক তুললে এন্ট্রি চেক লিস্টে ফিরে যায়"})]})]}),n.jsx("div",{className:"overflow-hidden rounded-xl border border-slate-200",children:n.jsx("div",{tabIndex:0,onKeyDown:db,className:"max-h-[80vh] overflow-auto focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-400 rounded-md",title:"Arrow কি চাপলে টেবিল স্ক্রল হবে",children:n.jsxs("table",{className:"w-full min-w-[980px] border-collapse text-sm",children:[n.jsx("thead",{className:"sticky top-0 z-10 bg-slate-800 text-white",children:n.jsx("tr",{children:sm.map(v=>n.jsx("th",{className:"whitespace-nowrap border-r border-slate-700 px-2 py-2 text-left text-[11px] font-black uppercase tracking-wide last:border-r-0",children:v},v))})}),n.jsx("tbody",{children:la.length===0?n.jsx("tr",{children:n.jsx("td",{colSpan:14,className:"px-4 py-10 text-center text-sm font-semibold text-slate-500",children:h?"🔍 এই অনুসন্ধানে Return টেবিলে কোনো ডাটা পাওয়া যায়নি।":"Return টেবিলে কোনো এন্ট্রি নেই — চেক লিস্টের Return ঘরে টিক দিন।"})}):os})]})})}),pa>1&&n.jsxs("div",{className:"mt-3 flex flex-wrap items-center justify-between gap-2",children:[n.jsxs("span",{className:"text-[11px] font-bold text-slate-600",children:["পেজ ",n.jsx("span",{className:"font-mono",children:ue})," / ",n.jsx("span",{className:"font-mono",children:pa})," —"," ","মোট ",n.jsx("span",{className:"font-mono",children:sa.length})," রেকর্ড"]}),n.jsxs("div",{className:"flex items-center gap-1",children:[n.jsx("button",{type:"button",onClick:()=>be(v=>Math.max(1,v-1)),disabled:ue===1,className:"rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-bold text-slate-700 transition hover:bg-slate-100 disabled:opacity-40",children:"‹ আগের"}),n.jsx("button",{type:"button",onClick:()=>be(v=>Math.min(pa,v+1)),disabled:ue===pa,className:"rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-bold text-slate-700 transition hover:bg-slate-100 disabled:opacity-40",children:"পরের ›"})]})]})]}),E&&n.jsx("div",{className:"fixed inset-0 z-[60] overflow-hidden bg-slate-950/80 backdrop-blur-sm",children:n.jsxs("div",{className:"flex h-full flex-col overflow-hidden bg-slate-50 shadow-2xl sm:m-2 sm:rounded-2xl",children:[n.jsxs("div",{className:"flex shrink-0 items-center justify-between gap-2 border-b border-slate-200 bg-white px-3 py-2 sm:px-4",children:[n.jsxs("div",{className:"flex min-w-0 items-center gap-2",children:[n.jsx("span",{className:"text-xl",children:"👁"}),n.jsxs("div",{className:"min-w-0",children:[n.jsxs("h3",{className:"truncate text-base font-black text-slate-900",children:["সার্চ ফলাফল — “",h.trim()||"তারিখ ফিল্টার","”"]}),n.jsxs("p",{className:"text-xs font-bold text-slate-500",children:[ut.length,"টি এন্ট্রি • চেক লিস্ট: ",ba.length," • Return:"," ",sa.length]})]})]}),n.jsx("button",{type:"button",onClick:()=>w(!1),className:"shrink-0 cursor-pointer rounded-xl bg-rose-600 px-3.5 py-2 text-sm font-black text-white shadow transition hover:bg-rose-700",children:"✕ ক্লোজ"})]}),n.jsx("div",{className:"min-h-0 flex-1 overflow-auto p-2 sm:p-3",children:dt.length===0?n.jsx("div",{className:"flex h-full items-center justify-center text-sm font-bold text-slate-500",children:"কোনো এন্ট্রি নেই"}):n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"hidden overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm md:block",children:[n.jsxs("table",{className:"w-full min-w-[980px] border-collapse text-sm",children:[n.jsx("thead",{className:"sticky top-0 z-10 bg-slate-800 text-white",children:n.jsx("tr",{children:sm.map(v=>n.jsx("th",{className:"whitespace-nowrap border-r border-slate-700 px-2 py-2 text-left text-[11px] font-black uppercase tracking-wide last:border-r-0",children:v},v))})}),n.jsx("tbody",{children:is})]}),Da.some(v=>v.dupes.length>0)&&n.jsx("p",{className:"border-t border-amber-200 bg-amber-50 px-2 py-1 text-[10px] font-black text-amber-800",children:"⚠️ একই চেকের হুবহু একই তথ্য একাধিক এন্ট্রিতে আছে — প্রতিটি একবারই দেখানো হয়েছে (সাম্প্রতিকতম তারিখের এন্ট্রি)।"})]}),n.jsx("div",{className:"space-y-2 md:hidden",children:Da.map((v,oe)=>{const le=v.row,Se=v.dupes,we=cl(le.checkDate),Ge=wa(le),on=[];Ge.forEach((tt,mt)=>{const cn=(tt.accountType||"").trim(),Ft=cn==="মেম্বার"?"member":cn==="জামিনদার-১"?"g1":cn==="জামিনদার-২"?"g2":mt===0?"member":"other";let wt=on.find($t=>$t.key===Ft);wt||(wt={key:Ft,items:[],...Ft==="member"?{title:"👤 মেম্বার তথ্য",head:"text-indigo-800",box:"border-indigo-200 bg-indigo-50/70"}:Ft==="g1"?{title:"🤝 জামিনদার-১ তথ্য",head:"text-teal-800",box:"border-teal-200 bg-teal-50/70"}:Ft==="g2"?{title:"🤝 জামিনদার-২ তথ্য",head:"text-amber-800",box:"border-amber-200 bg-amber-50/70"}:{title:"ℹ️ অন্যান্য ব্যাংক তথ্য — ক্যাটাগরি দেওয়া নেই",head:"text-slate-700",box:"border-slate-200 bg-slate-50"}},on.push(wt)),wt.items.push({b:tt,bi:mt})});const Qe={member:0,g1:1,g2:2,other:3};on.sort((tt,mt)=>Qe[tt.key]-Qe[mt.key]);const oa=on.some(tt=>tt.key==="member"),Ut=({label:tt,children:mt})=>n.jsxs("div",{className:"flex items-start justify-between gap-2 border-b border-slate-100 py-1 last:border-b-0",children:[n.jsx("span",{className:"shrink-0 pt-0.5 text-[10px] font-black uppercase tracking-wide text-slate-500",children:tt}),n.jsx("span",{className:"min-w-0 max-w-[62%] text-right text-xs font-bold text-slate-900",children:mt})]});return n.jsxs("div",{className:`rounded-xl border p-2 shadow-sm ${le.returned?"border-amber-300 bg-amber-50":"border-slate-200 bg-white"}`,children:[n.jsxs("div",{className:"mb-1 flex items-center justify-between gap-2 border-b border-slate-200 pb-1.5",children:[n.jsxs("span",{className:"flex min-w-0 items-center gap-1.5",children:[n.jsx("span",{className:"inline-flex h-4 w-4 shrink-0 items-center justify-center rounded bg-slate-800 font-mono text-[9px] font-black text-white",children:oe+1}),n.jsx("span",{className:"truncate font-mono text-sm font-black text-indigo-700",children:le.memberCode}),le.foundInDb===!1&&n.jsx("span",{className:"shrink-0 rounded bg-amber-100 px-1 py-0.5 text-[9px] font-black text-amber-800",children:"NEW"})]}),n.jsxs("span",{className:"flex shrink-0 items-center gap-1 text-[11px] font-bold text-slate-600",children:[le.returned&&n.jsxs("span",{className:"rounded border border-amber-400 bg-amber-100 px-1.5 py-0.5 text-[10px] font-black text-amber-800",children:["↩ RETURN",le.returnDate?` (${Fe(le.returnDate)||le.returnDate})`:""]}),we,"📅 ",Fe(le.checkDate)||le.checkDate]})]}),Se.length>0&&n.jsxs("p",{className:"mb-1 rounded-md border border-amber-300 bg-amber-50 px-1.5 py-0.5 text-[9px] font-black text-amber-900",children:["⚠️ একই চেকের হুবহু একই তথ্য ",Se.length+1,"টি এন্ট্রিতে আছে (তারিখ:"," ",[le.checkDate,...Se.map(tt=>tt.checkDate)].sort().map(tt=>Fe(tt)||tt).join(", "),") — সাম্প্রতিকতমটি একবার দেখানো হয়েছে"]}),n.jsx(Ut,{label:"সদস্যের নাম",children:le.memberName||"—"}),n.jsx(Ut,{label:"সেন্টার কোড",children:n.jsx("span",{className:"font-mono",children:le.centreCode||"—"})}),n.jsx(Ut,{label:"সেন্টার নাম",children:le.centreName||"—"}),on.map(tt=>n.jsxs("div",{className:`mt-1.5 rounded-lg border px-2 py-1 ${tt.box}`,children:[n.jsx("p",{className:`text-[10px] font-black ${tt.head}`,children:tt.title}),n.jsx(Ut,{label:"ব্যাংকের নাম",children:n.jsx("div",{className:"flex flex-col items-end gap-0.5",children:tt.items.map(({b:mt,bi:cn})=>n.jsx("span",{children:mt.bankName||"—"},cn))})}),n.jsx(Ut,{label:"চেক নম্বর",children:n.jsxs("div",{className:"flex flex-col items-end gap-0.5",children:[tt.items.map(({b:mt,bi:cn})=>n.jsx("span",{className:"font-mono font-black",children:mt.checkNo||"—"},cn)),tt.key==="member"&&le.reissuedTo&&n.jsxs("span",{className:"whitespace-nowrap rounded border border-teal-300 bg-teal-50 px-1.5 py-0.5 text-[9px] font-black text-teal-800",title:`এই চেকটি রি-ইস্যু হয়েছে — নতুন চেক #${le.reissuedTo.checkNo}`,children:["🔁 Reissued ",Fe(le.reissuedTo.date)||le.reissuedTo.date," → #",le.reissuedTo.checkNo]}),tt.key==="member"&&le.reissuedFrom&&n.jsxs("span",{className:"whitespace-nowrap rounded border border-orange-300 bg-orange-50 px-1.5 py-0.5 text-[9px] font-black text-orange-800",children:["🔁 Reissue — পুরনো #",le.reissuedFrom.checkNo," (",Fe(le.reissuedFrom.checkDate)||le.reissuedFrom.checkDate,")"]}),tt.key==="member"&&Ta(le)]})}),n.jsx(Ut,{label:"MICR",children:n.jsx("div",{className:"flex flex-col items-end gap-0.5",children:tt.items.map(({b:mt,bi:cn})=>n.jsx("span",{className:`rounded border px-1.5 py-0.5 text-[9px] font-black ${mt.micr?"border-emerald-300 bg-emerald-100 text-emerald-800":"border-slate-300 bg-slate-100 text-slate-600"}`,children:mt.micr?"MICR":"NON MICR"},cn))})}),n.jsx(Ut,{label:"হিসাব নং",children:tt.items.some(({b:mt})=>mt.accountNo||mt.accountType)?n.jsx("div",{className:"flex flex-col items-end gap-0.5",children:tt.items.map(({b:mt,bi:cn})=>mt.accountNo||mt.accountType?n.jsxs("span",{className:"inline-flex items-center gap-1",children:[n.jsx("span",{className:"font-mono font-black",children:mt.accountNo||"—"}),mt.accountType&&n.jsx("span",{className:`rounded px-1 py-0.5 text-[9px] font-black ${mt.accountType==="মেম্বার"?"bg-indigo-100 text-indigo-800":"bg-teal-100 text-teal-800"}`,children:mt.accountType})]},cn):null)}):"—"})]},tt.key)),(le.reissuedTo||le.reissuedFrom)&&!oa&&n.jsx(Ut,{label:"রি-ইস্যু",children:n.jsxs("div",{className:"flex flex-col items-end gap-0.5",children:[le.reissuedTo&&n.jsxs("span",{className:"whitespace-nowrap rounded border border-teal-300 bg-teal-50 px-1.5 py-0.5 text-[9px] font-black text-teal-800",children:["🔁 Reissued ",Fe(le.reissuedTo.date)||le.reissuedTo.date," → #",le.reissuedTo.checkNo]}),le.reissuedFrom&&n.jsxs("span",{className:"whitespace-nowrap rounded border border-orange-300 bg-orange-50 px-1.5 py-0.5 text-[9px] font-black text-orange-800",children:["🔁 Reissue — পুরনো #",le.reissuedFrom.checkNo," (",Fe(le.reissuedFrom.checkDate)||le.reissuedFrom.checkDate,")"]}),Ta(le)]})}),n.jsx(Ut,{label:"Disbursse",children:n.jsx("span",{className:"font-mono",children:le.disbursse?`৳${zn(le.disbursse)}`:"—"})}),n.jsx(Ut,{label:"Project",children:n.jsx("span",{className:"uppercase",children:le.project?String(le.project).trim().toUpperCase():"—"})}),n.jsxs("div",{className:"mt-1.5 flex items-center justify-between gap-1.5 border-t border-slate-200 pt-1.5",children:[n.jsxs("label",{className:`flex items-center gap-1.5 rounded-lg border px-2 py-1 text-[11px] font-black ${le.returned?"border-amber-400 bg-amber-100 text-amber-900":"border-slate-300 bg-slate-100 text-slate-700"} cursor-pointer`,title:le.returned?"টিক তুললে এন্ট্রিটি চেক লিস্টে ফিরে যাবে":"টিক দিলে এন্ট্রিটি Return টেবিলে চলে যাবে",children:[n.jsx("input",{type:"checkbox",checked:!!le.returned,disabled:we,onChange:()=>ra(le),className:"h-3.5 w-3.5 accent-amber-600 disabled:cursor-not-allowed"}),"↩ Return"]}),n.jsxs("div",{className:"flex items-center gap-1",children:[n.jsx("button",{type:"button",disabled:we,onClick:()=>qt(le),title:"এডিট করুন",className:"cursor-pointer rounded-lg border border-blue-200 bg-blue-50 px-2 py-1 text-xs text-blue-700 transition hover:bg-blue-100 disabled:cursor-not-allowed disabled:opacity-40",children:"✏️"}),n.jsx("button",{type:"button",disabled:we,onClick:()=>en(le),title:"মুছে ফেলুন",className:"cursor-pointer rounded-lg border border-rose-200 bg-rose-50 px-2 py-1 text-xs text-rose-700 transition hover:bg-rose-100 disabled:cursor-not-allowed disabled:opacity-40",children:"🗑️"})]})]})]},le.id)})})]})})]})}),p&&P&&n.jsx("div",{className:"check-pdf-modal fixed inset-0 z-[65] overflow-hidden bg-slate-950/80 backdrop-blur-sm",children:n.jsxs("div",{className:"check-pdf-shell flex h-full flex-col overflow-hidden bg-white shadow-2xl sm:m-2 sm:rounded-2xl",children:[n.jsxs("div",{className:"no-print flex shrink-0 items-center justify-between gap-2 border-b border-slate-200 bg-white px-3 py-2 sm:px-4",children:[n.jsxs("div",{className:"flex min-w-0 items-center gap-2",children:[n.jsx("span",{className:"text-xl",children:"📄"}),n.jsxs("div",{className:"min-w-0",children:[n.jsx("h3",{className:"truncate text-base font-black text-slate-900",children:"PDF ভিউ — তারিখ হতে তারিখ চেক এন্ট্রি"}),n.jsxs("p",{className:"text-xs font-bold text-slate-500",children:["📅 ",Fe(P.from)||P.from," হতে"," ",Fe(P.to)||P.to," • মোট"," ",n.jsx("span",{className:"font-mono",children:dt.length}),"টি এন্ট্রি (চেক লিস্ট"," ",n.jsx("span",{className:"font-mono",children:ba.length})," • Return"," ",n.jsx("span",{className:"font-mono",children:sa.length}),")",h.trim()?` • 🔍 সার্চ: "${h.trim()}" প্রয়োগ আছে`:""]})]})]}),n.jsxs("div",{className:"flex shrink-0 items-center gap-2",children:[n.jsx("button",{type:"button",onClick:()=>window.print(),title:"প্রিন্ট / Save as PDF ডায়ালগ খুলবে",className:"cursor-pointer rounded-xl bg-emerald-600 px-3.5 py-2 text-sm font-black text-white shadow transition hover:bg-emerald-700",children:"🖨️ প্রিন্ট / PDF সেভ"}),n.jsx("button",{type:"button",onClick:()=>N(!1),className:"cursor-pointer rounded-xl bg-rose-600 px-3.5 py-2 text-sm font-black text-white shadow transition hover:bg-rose-700",children:"✕ ক্লোজ"})]})]}),n.jsxs("div",{className:"no-print shrink-0 border-b border-emerald-200 bg-emerald-50 px-3 py-1.5 text-[11px] font-bold text-emerald-900 sm:px-4",children:["💡 “🖨️ প্রিন্ট / PDF সেভ” চাপলে প্রিন্ট ডায়ালগ আসবে — সেখানে Destination হিসেবে"," ",n.jsx("span",{className:"font-black",children:"“Save as PDF”"})," বেছে নিলেই PDF ফাইল ডাউনলোড হবে (ল্যান্ডস্কেপ আকারে)।"]}),n.jsxs("div",{className:"check-pdf-scroll min-h-0 flex-1 overflow-auto bg-slate-100 p-2 sm:p-4",children:[n.jsx("style",{children:J5}),n.jsxs("div",{id:"check-pdf-document",className:"mx-auto bg-white p-3 shadow sm:p-5",style:{maxWidth:"1240px"},children:[n.jsxs("div",{className:"mb-3 text-center",children:[n.jsx("h1",{className:"text-base font-black text-slate-900 sm:text-lg",children:"চেক এন্ট্রি রিপোর্ট"}),n.jsxs("p",{className:"mt-0.5 text-[11px] font-bold text-slate-600",children:["তারিখ: ",n.jsx("span",{className:"font-mono",children:Fe(P.from)||P.from})," ","হতে ",n.jsx("span",{className:"font-mono",children:Fe(P.to)||P.to})," পর্যন্ত • মোট এন্ট্রি: ",n.jsx("span",{className:"font-mono",children:dt.length}),h.trim()?` • সার্চ: "${h.trim()}"`:"","• মোট Disbursse: ",n.jsxs("span",{className:"font-mono",children:["৳",zn(String(Qt))]})]})]}),dt.length===0?n.jsx("p",{className:"py-8 text-center text-xs font-bold text-slate-500",children:"এই তারিখ-সীমায় কোনো এন্ট্রি নেই"}):n.jsxs("table",{className:"w-full border-collapse text-[11px]",children:[n.jsx("thead",{children:n.jsx("tr",{className:"bg-slate-100",children:["Sr","তারিখ","মেম্বার কোড","সদস্যের নাম","সেন্টার কোড","সেন্টার নাম","ব্যাংকের নাম","চেক নম্বর","MICR","হিসাব নং","ক্যাটাগরি","Disbursse (৳)","Project","Return","রি-ইস্যু তথ্য"].map(v=>n.jsx("th",{className:"whitespace-nowrap border border-slate-300 px-1.5 py-1 text-left text-[10px] font-black text-slate-700",children:v},v))})}),n.jsx("tbody",{children:dt.map((v,oe)=>{const le=wa(v);return n.jsxs("tr",{className:oe%2?"bg-slate-50":"bg-white",children:[n.jsx("td",{className:"border border-slate-300 px-1.5 py-1 font-mono font-bold text-slate-500",children:oe+1}),n.jsx("td",{className:"whitespace-nowrap border border-slate-300 px-1.5 py-1 font-mono font-bold",children:Fe(v.checkDate)||v.checkDate}),n.jsxs("td",{className:"border border-slate-300 px-1.5 py-1 font-mono font-black text-indigo-700",children:[v.memberCode,v.foundInDb===!1?" (NEW)":""]}),n.jsx("td",{className:"border border-slate-300 px-1.5 py-1 font-semibold",children:v.memberName}),n.jsx("td",{className:"border border-slate-300 px-1.5 py-1 font-mono",children:v.centreCode}),n.jsx("td",{className:"border border-slate-300 px-1.5 py-1",children:v.centreName}),n.jsx("td",{className:"border border-slate-300 px-1.5 py-1",children:n.jsx("div",{className:"flex flex-col",children:le.map((Se,we)=>n.jsx("span",{children:Se.bankName||"—"},we))})}),n.jsx("td",{className:"border border-slate-300 px-1.5 py-1 font-mono font-black",children:n.jsx("div",{className:"flex flex-col",children:le.map((Se,we)=>n.jsx("span",{children:Se.checkNo||"—"},we))})}),n.jsx("td",{className:"border border-slate-300 px-1.5 py-1 text-center",children:n.jsx("div",{className:"flex flex-col",children:le.map((Se,we)=>n.jsx("span",{className:Se.micr?"font-black text-emerald-700":"font-bold text-slate-500",children:Se.micr?"MICR":"NON MICR"},we))})}),n.jsx("td",{className:"border border-slate-300 px-1.5 py-1 font-mono",children:n.jsx("div",{className:"flex flex-col",children:le.map((Se,we)=>n.jsx("span",{children:Se.accountNo||"—"},we))})}),n.jsx("td",{className:"border border-slate-300 px-1.5 py-1",children:n.jsx("div",{className:"flex flex-col",children:le.map((Se,we)=>n.jsx("span",{children:Se.accountType||"—"},we))})}),n.jsx("td",{className:"border border-slate-300 px-1.5 py-1 text-right font-mono font-black",children:v.disbursse?zn(v.disbursse):"—"}),n.jsx("td",{className:"border border-slate-300 px-1.5 py-1 uppercase",children:v.project?String(v.project).trim().toUpperCase():"—"}),n.jsx("td",{className:"whitespace-nowrap border border-slate-300 px-1.5 py-1 text-center font-black",children:v.returned?n.jsxs("span",{className:"text-amber-700",children:["↩ RETURN",v.returnDate?` (${Fe(v.returnDate)||v.returnDate})`:""]}):"—"}),n.jsxs("td",{className:"border border-slate-300 px-1.5 py-1 text-[10px] font-bold",children:[v.reissuedTo&&n.jsxs("span",{className:"text-teal-700",children:["→ #",v.reissuedTo.checkNo," (",Fe(v.reissuedTo.date)||v.reissuedTo.date,")"]}),v.reissuedFrom&&n.jsxs("span",{className:"text-orange-700",children:["পুরনো #",v.reissuedFrom.checkNo," (",Fe(v.reissuedFrom.checkDate)||v.reissuedFrom.checkDate,")-এর রি-ইস্যু"]}),v.reissueChanges&&n.jsxs("span",{className:"block text-[9px]",children:[v.reissueChanges.decisions?n.jsxs(n.Fragment,{children:[n.jsxs("span",{className:"text-teal-700",children:["🔁 রি-ইস্যু:"," ",v.reissueChanges.decisions.filter(Se=>Se.action==="reissued").map(Se=>`#${Se.checkNo||"—"}`).join(", ")||"—"]})," ",n.jsxs("span",{className:"text-purple-700",children:["↩ রিটার্ন:"," ",v.reissueChanges.decisions.filter(Se=>Se.action==="returned").map(Se=>`#${Se.checkNo||"—"}`).join(", ")||"—"]})," "]}):n.jsxs("span",{className:"text-rose-700",children:["🚫 বাতিল: ",v.reissueChanges.cancelled.map(Se=>`#${Se.checkNo||"—"}`).join(", ")||"—"]})," ",n.jsxs("span",{className:"text-emerald-700",children:["✨ নতুন: ",v.reissueChanges.added.map(Se=>`#${Se.checkNo||"—"}`).join(", ")||"—"]})]}),!v.reissuedTo&&!v.reissuedFrom&&!v.reissueChanges&&"—"]})]},v.id)})}),n.jsx("tfoot",{children:n.jsxs("tr",{className:"bg-slate-100",children:[n.jsx("td",{colSpan:11,className:"border border-slate-300 px-1.5 py-1 text-right text-[11px] font-black text-slate-800",children:"মোট Disbursse —"}),n.jsxs("td",{className:"border border-slate-300 px-1.5 py-1 text-right font-mono text-[11px] font-black text-slate-900",children:["৳",zn(String(Qt))]}),n.jsx("td",{colSpan:3,className:"border border-slate-300 px-1.5 py-1"})]})})]}),n.jsxs("p",{className:"mt-2 text-center text-[10px] font-bold text-slate-500",children:["— মোট ",n.jsx("span",{className:"font-mono",children:dt.length}),"টি এন্ট্রি —"]})]})]})]})}),Re&&n.jsx("div",{className:"fixed inset-0 z-[70] flex items-center justify-center overflow-y-auto bg-slate-950/70 p-3 backdrop-blur-sm",children:n.jsxs("div",{className:"w-full max-w-md rounded-2xl border border-amber-300 bg-white shadow-2xl",children:[n.jsxs("div",{className:"rounded-t-2xl border-b border-amber-200 bg-amber-50 px-4 py-3",children:[n.jsxs("h3",{className:"flex items-center gap-2 text-base font-black text-amber-900",children:[n.jsx("span",{children:"↩"})," ",n.jsx("span",{children:"চেক রিটার্ন — তারিখ দিন"})]}),n.jsxs("p",{className:"mt-0.5 text-[11px] font-bold text-amber-800",children:["চেক: ",n.jsxs("span",{className:"font-mono",children:["#",Re.checkNo]})," • ",Re.bankName||"—"," • মেম্বার"," ",n.jsx("span",{className:"font-mono",children:Re.memberCode})]})]}),n.jsxs("div",{className:"space-y-3 p-4",children:[n.jsxs("div",{children:[n.jsx("label",{className:pn,children:"রিটার্নের তারিখ (বাধ্যতামূলক)"}),n.jsx(bn,{value:Ne,onChange:v=>{He(v||""),he("")},className:"py-2 text-sm font-semibold",manualEntry:!0}),n.jsx("p",{className:"mt-1 text-[10px] font-bold text-slate-500",children:"এই তারিখ 100% পূরণ না করলে এন্ট্রি সেভ হবে না।"})]}),pe&&n.jsxs("div",{className:"rounded-xl border border-rose-300 bg-rose-50 px-3 py-2 text-xs font-black text-rose-800",children:["⚠️ ",pe]}),n.jsxs("div",{className:"flex items-center justify-end gap-2 pt-1",children:[n.jsx("button",{type:"button",onClick:()=>{ge(null),he("")},className:"cursor-pointer rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-black text-slate-700 shadow-xs transition hover:bg-slate-100",children:"✕ বাদ"}),n.jsx("button",{type:"button",onClick:cr,title:Ti(Ne)?"রিটার্ন সেভ করুন":"আগে সম্পূর্ণ তারিখ পূরণ করুন",className:`cursor-pointer rounded-xl px-5 py-2 text-sm font-black text-white shadow transition ${Ti(Ne)?"bg-amber-600 hover:bg-amber-700":"bg-slate-300"}`,children:"✓ রিটার্ন সেভ"})]})]})]})}),ee&&n.jsx(Z5,{open:ee,onClose:()=>C(!1),onPick:v=>{f(oe=>({...oe,memberCode:v.memberCode||"",memberName:v.memberName||"",centreCode:v.centreCode||"",centreName:v.centreName||""})),D("found"),G(null)}}),ce&&n.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4",children:n.jsxs("div",{className:"w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl",children:[n.jsxs("div",{className:"flex items-center justify-between border-b border-emerald-200 bg-gradient-to-r from-emerald-600 to-teal-600 px-5 py-3.5 text-white",children:[n.jsxs("div",{className:"flex items-center gap-2.5",children:[n.jsx("span",{className:"flex h-9 w-9 items-center justify-center rounded-xl bg-white/20 text-lg",children:"🗄️"}),n.jsxs("div",{children:[n.jsx("h3",{className:"text-base font-black",children:"মেম্বার ডাটাবেজ আমদানি"}),n.jsx("p",{className:"text-[11px] text-emerald-100",children:"কলাম: Member Code, Member Name, Centre Code, Centre Name (Bank Name, Check No. ঐচ্ছিক)"})]})]}),n.jsx("button",{type:"button",onClick:()=>K(!1),className:"flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-sm font-bold hover:bg-white/30",children:"✕"})]}),n.jsxs("div",{className:"space-y-3 p-5",children:[n.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[n.jsx("input",{ref:ze,type:"file",accept:".csv,.txt,.tsv,.xlsx,.xls",className:"hidden",onChange:v=>{var le;const oe=(le=v.target.files)==null?void 0:le[0];oe&&me(oe),v.target.value=""}}),n.jsx("button",{type:"button",onClick:()=>{var v;return(v=ze.current)==null?void 0:v.click()},className:"rounded-xl bg-emerald-600 px-4 py-2 text-xs font-black text-white transition hover:bg-emerald-700",children:"📁 ফাইল বেছে নিন (CSV / TXT)"}),n.jsx("button",{type:"button",onClick:()=>{re(`Member Code,Member Name,Centre Code,Centre Name,Bank Name,Check No
M-1001,আব্দুল করিম,C-01,ধানমন্ডি শাখা,Sonali Bank,445566
M-1002,রহিম উদ্দিন,C-02,মিরপুর শাখা,Janata Bank,778899`)},className:"rounded-xl border border-slate-300 bg-white px-4 py-2 text-xs font-bold text-slate-700 transition hover:bg-slate-100",children:"নমুনা বসান"}),n.jsxs("span",{className:"text-[11px] font-bold text-slate-500",children:["বর্তমানে ডাটাবেজে: ",n.jsx("span",{className:"font-mono",children:T.toLocaleString("en-IN")})," মেম্বার"]})]}),n.jsxs("div",{children:[n.jsx("label",{className:"mb-1 block text-[11px] font-black uppercase tracking-wide text-slate-600",children:"অথবা Excel / Google Sheet থেকে কপি করে এখানে পেস্ট করুন"}),n.jsx("textarea",{value:V,onChange:v=>re(v.target.value),rows:9,placeholder:`Member Code	Member Name	Centre Code	Centre Name
M-1001	আব্দুল করিম	C-01	ধানমন্ডি শাখা`,className:"w-full rounded-xl border border-slate-300 px-3 py-2 font-mono text-xs text-slate-900 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"}),n.jsx("p",{className:"mt-1 text-[11px] text-slate-500",children:"ট্যাব বা কমা — দুইভাবেই আলাদা করা যায়। হেডার লাইন থাকলে কলাম নিজে থেকেই চেনা হবে। একই কোড থাকলে আগের তথ্য আপডেট হয়ে যাবে।"})]})]}),n.jsxs("div",{className:"flex items-center justify-between gap-2 border-t border-slate-200 bg-slate-50 px-5 py-3.5",children:[n.jsx("button",{type:"button",onClick:()=>{confirm("পুরো মেম্বার ডাটাবেজ মুছে ফেলতে চান?")&&(localStorage.removeItem("gobra_member_database"),ve(),G({kind:"warn",text:"মেম্বার ডাটাবেজ খালি করা হয়েছে।"}))},className:"rounded-xl border border-rose-300 bg-rose-50 px-3 py-2 text-[11px] font-bold text-rose-700 transition hover:bg-rose-100",children:"🗑️ ডাটাবেজ খালি করুন"}),n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("button",{type:"button",onClick:()=>K(!1),className:"rounded-xl bg-slate-200 px-4 py-2 text-xs font-bold text-slate-700 transition hover:bg-slate-300",children:"বাতিল"}),n.jsx("button",{type:"button",onClick:()=>rn(V),disabled:!V.trim(),className:"rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-5 py-2 text-xs font-black text-white shadow-md transition hover:from-emerald-700 hover:to-teal-700 disabled:opacity-50",children:"⬆️ আমদানি করুন"})]})]})]})})]})}const Ab=`/**
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
}`;function $5({open:l,onClose:o}){const[u,c]=R.useState(""),[d,f]=R.useState("idle"),[A,b]=R.useState(""),[h,L]=R.useState(!1),[y,g]=R.useState(!1);if(R.useEffect(()=>{if(l){const O=QR();c(O),f("idle"),b(""),O||Zi("google_sheet_url").then(G=>{G&&G.startsWith("http")&&(c(G),em(G))}).catch(()=>{})}},[l]),R.useEffect(()=>{const O=G=>{G!=null&&G.detail&&typeof G.detail=="string"&&c(G.detail)};return window.addEventListener("google-sheet-url-changed",O),()=>window.removeEventListener("google-sheet-url-changed",O)},[]),!l)return null;const H=async()=>{const O=u.trim();if(!O||!O.startsWith("http")){f("error"),b("Valid Web App URL required");return}em(O);try{await Mm("google_sheet_url",O)}catch{}f("success"),b("URL সফলভাবে ডাটাবেজ ও ক্লাউডে সংরক্ষিত হয়েছে! অন্য যেকোনো ডিভাইসেও এটি স্বয়ংক্রিয়ভাবে পাওয়া যাবে।")},D=async()=>{if(!u||!u.startsWith("http")){f("error"),b("Valid Web App URL required");return}f("testing"),b("Testing connection...");try{await fetch(u,{method:"POST",mode:"no-cors",headers:{"Content-Type":"text/plain"},body:JSON.stringify({action:"test"})}),em(u),f("success"),b("Request sent to Google Apps Script successfully!")}catch(O){f("error"),b("Failed: "+O.message)}},T=async()=>{if(!u||!u.startsWith("http")){f("error"),b("Valid Web App URL required");return}f("testing"),b("Syncing all data to Google Sheet...");try{const O=ln(),G=Ln();await fetch(u,{method:"POST",mode:"no-cors",headers:{"Content-Type":"text/plain"},body:JSON.stringify({action:"sync_all",data:{transactions:O,staffReports:G}})}),f("success"),b(`Synced ${O.length} transactions & ${G.length} staff reports to Google Sheet!`)}catch(O){f("error"),b("Sync failed: "+O.message)}},Z=()=>{navigator.clipboard.writeText(Ab),g(!0),setTimeout(()=>g(!1),2e3)};return n.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-3 sm:p-5 overflow-y-auto",children:n.jsxs("div",{className:"flex max-h-[94vh] w-full max-w-2xl flex-col rounded-2xl bg-white shadow-2xl overflow-hidden border border-slate-300",children:[n.jsxs("div",{className:"flex items-center justify-between border-b bg-emerald-800 px-5 py-3 text-white",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"📊"}),n.jsxs("div",{children:[n.jsx("h3",{className:"font-bold text-base sm:text-lg leading-tight",children:"Google Sheet / Drive Sync"}),n.jsx("p",{className:"text-xs text-emerald-200",children:"Connect your Google Spreadsheet"})]})]}),n.jsx("button",{onClick:o,className:"text-2xl text-emerald-200 hover:text-white",children:"×"})]}),n.jsxs("div",{className:"flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 text-xs sm:text-sm",children:[A&&n.jsx("div",{className:`rounded-lg p-3 font-semibold text-xs ${d==="success"?"bg-emerald-100 text-emerald-900 border border-emerald-300":d==="error"?"bg-rose-100 text-rose-900 border border-rose-300":"bg-blue-100 text-blue-900 border border-blue-300"}`,children:A}),n.jsxs("div",{className:"space-y-1.5",children:[n.jsx("label",{className:"block font-bold text-slate-800 text-sm",children:"Google Apps Script Web App URL:"}),n.jsxs("div",{className:"flex gap-2",children:[n.jsx("input",{type:"url",value:u,onChange:O=>c(O.target.value),placeholder:"https://script.google.com/macros/s/.../exec",className:"flex-1 rounded-lg border border-slate-300 px-3 py-2 text-xs sm:text-sm font-mono focus:border-emerald-600 focus:outline-none"}),n.jsx("button",{type:"button",onClick:H,className:"rounded-lg bg-emerald-600 hover:bg-emerald-700 px-4 py-2 font-bold text-white text-xs transition whitespace-nowrap shadow-xs",children:"Save URL"})]})]}),n.jsxs("div",{className:"flex flex-wrap gap-2.5 pt-1",children:[n.jsx("button",{type:"button",onClick:D,className:"rounded-lg bg-blue-600 hover:bg-blue-700 px-4 py-2 text-xs font-bold text-white shadow-xs transition",children:"Test Connection"}),n.jsx("button",{type:"button",onClick:T,className:"rounded-lg bg-indigo-600 hover:bg-indigo-700 px-4 py-2 text-xs font-bold text-white shadow-xs transition",children:"Sync All Data"})]}),n.jsxs("div",{className:"rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-2.5",children:[n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsx("h4",{className:"font-bold text-slate-900 text-sm",children:"Apps Script Code Setup"}),n.jsx("button",{type:"button",onClick:()=>L(!h),className:"text-xs text-blue-600 hover:underline font-bold",children:h?"Hide Code":"Show Script Code"})]}),n.jsxs("ol",{className:"list-decimal list-inside space-y-1 text-xs text-slate-700",children:[n.jsx("li",{children:"Open Google Sheet > Extensions > Apps Script"}),n.jsx("li",{children:"Paste the code, save with Ctrl+S"}),n.jsxs("li",{children:["Deploy as Web App, set access to ",n.jsx("b",{children:"Anyone"})]}),n.jsx("li",{children:"Copy Web App URL and paste above"})]}),h&&n.jsxs("div",{className:"mt-2 space-y-2",children:[n.jsxs("div",{className:"flex justify-between items-center",children:[n.jsx("span",{className:"text-[11px] font-bold text-slate-600 font-mono",children:"Apps Script Code:"}),n.jsx("button",{type:"button",onClick:Z,className:"rounded bg-slate-800 hover:bg-slate-700 text-white px-2.5 py-1 text-xs font-bold transition shadow-xs",children:y?"Copied!":"Copy Code"})]}),n.jsx("pre",{className:"max-h-48 overflow-auto rounded bg-slate-900 p-3 text-[10.5px] font-mono text-emerald-300",children:Ab})]})]})]}),n.jsxs("div",{className:"flex items-center justify-between border-t bg-slate-100 px-5 py-3",children:[n.jsx("span",{className:"text-xs text-slate-500 font-medium",children:"Google Sheets Database Integration"}),n.jsx("button",{type:"button",onClick:o,className:"rounded-lg bg-slate-800 hover:bg-slate-900 px-6 py-1.5 text-xs font-bold text-white transition",children:"Close"})]})]})})}function W5({open:l,onClose:o}){const[u,c]=R.useState(nr()),[d,f]=R.useState(""),[A,b]=R.useState(!1),[h,L]=R.useState(null),[y,g]=R.useState(!1);if(R.useEffect(()=>{if(!l)return;c(nr()),f("");const ce=K=>{K.detail&&c(K.detail)};return window.addEventListener("neon-sync-status-changed",ce),()=>window.removeEventListener("neon-sync-status-changed",ce)},[l]),!l)return null;const H=async()=>{b(!0),f("Neon ক্লাউড ডাটাবেজের সাথে সিঙ্ক হচ্ছে...");try{const ce=await tr();f(ce.message),c(nr())}catch(ce){f(`সিঙ্ক ত্রুটি: ${ce.message||"Failed"}`)}finally{b(!1)}},D=ln(),T=Ln(),Z=mc(),O=ul(),G=async()=>{g(!0);try{L(await AR())}catch(ce){f(`ক্লাউড ঘর পড়া যায়নি: ${(ce==null?void 0:ce.message)||"ত্রুটি"}`)}finally{g(!1)}};return n.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-3 sm:p-5 overflow-y-auto animate-in fade-in",children:n.jsxs("div",{className:"flex max-h-[94vh] w-full max-w-lg flex-col rounded-3xl bg-white shadow-2xl overflow-hidden border border-slate-200",children:[n.jsxs("div",{className:"flex items-center justify-between border-b bg-linear-to-r from-teal-900 to-slate-900 px-5 py-3.5 text-white",children:[n.jsxs("div",{className:"flex items-center gap-2.5",children:[n.jsx("span",{className:"text-2xl",children:"🐘"}),n.jsxs("div",{children:[n.jsxs("h3",{className:"font-bold text-sm sm:text-base leading-tight flex items-center gap-2",children:[n.jsx("span",{children:"Neon PostgreSQL Database"}),n.jsx("span",{className:"h-2 w-2 rounded-full bg-emerald-400 animate-pulse"})]}),n.jsx("p",{className:"text-[11px] text-teal-300",children:"Serverless Cloud Database (Permanent Storage)"})]})]}),n.jsx("button",{onClick:o,className:"text-2xl text-slate-400 hover:text-white cursor-pointer px-1",children:"×"})]}),n.jsxs("div",{className:"p-5 space-y-4 text-xs sm:text-sm",children:[n.jsx("div",{className:"rounded-2xl border border-emerald-200 bg-emerald-50/70 p-4",children:n.jsxs("div",{className:"flex items-start gap-3",children:[n.jsx("div",{className:"h-8 w-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center text-base shrink-0 font-black",children:"✓"}),n.jsxs("div",{className:"space-y-1",children:[n.jsx("div",{className:"font-extrabold text-emerald-950 text-sm flex items-center gap-2",children:n.jsx("span",{children:"Neon Database সফলভাবে কানেক্টেড!"})}),n.jsx("p",{className:"text-xs text-emerald-800 leading-relaxed font-medium",children:"এখন থেকে আপনি যা ডাটা এন্ট্রি দেবেন তা স্বয়ংক্রিয়ভাবে Neon PostgreSQL ক্লাউড ডাটাবেজে স্থায়ীভাবে সংরক্ষিত থাকবে। পরবর্তী কোড মোডিফাই বা রি-ডিপ্লয়ে ডাটা কখনোই মুছে যাবে না।"})]})]})}),n.jsxs("div",{className:"rounded-2xl border border-indigo-200 bg-indigo-50/70 p-3.5",children:[n.jsxs("div",{className:"flex items-start justify-between gap-2",children:[n.jsxs("div",{children:[n.jsx("div",{className:"text-[10px] font-bold uppercase tracking-wide text-indigo-500",children:"এই অফিসের ক্লাউড ঘর"}),n.jsxs("div",{className:"text-sm font-black text-indigo-950",children:["🏢 ",Z]}),n.jsxs("div",{className:"font-mono text-[11px] font-bold text-indigo-700",children:["স্কিমা: ",O]}),n.jsx("p",{className:"mt-1 text-[11px] font-medium leading-relaxed text-indigo-800",children:"প্রতিটি অফিসের লেনদেন, চেক এন্ট্রি ও মেম্বার ডাটাবেজ ক্লাউডে নিজের আলাদা ঘরে সংরক্ষিত হয় — অন্য অফিসের ডেটার সাথে মিশবে না।"})]}),n.jsx("button",{type:"button",onClick:G,disabled:y,className:"shrink-0 rounded-xl border border-indigo-300 bg-white px-2.5 py-1.5 text-[11px] font-black text-indigo-700 transition hover:bg-indigo-100 disabled:opacity-50 cursor-pointer",children:y?"পড়ছে…":"☁️ ঘর দেখুন"})]}),h&&n.jsx("div",{className:"mt-2.5 grid grid-cols-2 gap-1.5 text-[11px] sm:grid-cols-4",children:[["transactions","লেনদেন"],["check_entries","চেক এন্ট্রি"],["members","মেম্বার"],["staff_reports","স্টাফ রিপোর্ট"],["day_opens","ডে ওপেন"],["day_closures","ডে ক্লোজ"],["categories","ক্যাটাগরি"]].map(([ce,K])=>n.jsxs("div",{className:"rounded-lg border border-indigo-200 bg-white px-2 py-1.5",children:[n.jsx("div",{className:"text-[9px] font-bold uppercase text-slate-500",children:K}),n.jsx("div",{className:"text-sm font-black text-indigo-800",children:h.rows[ce]===void 0?"—":h.rows[ce]<0?"⚠️":h.rows[ce]})]},ce))})]}),n.jsxs("div",{className:"grid grid-cols-2 gap-2 text-xs",children:[n.jsxs("div",{className:"rounded-xl border border-slate-200 bg-slate-50 p-2.5",children:[n.jsx("span",{className:"text-[10px] font-bold uppercase text-slate-500 block",children:"Database Engine"}),n.jsx("span",{className:"font-black text-slate-800",children:"PostgreSQL (Neon)"})]}),n.jsxs("div",{className:"rounded-xl border border-slate-200 bg-slate-50 p-2.5",children:[n.jsx("span",{className:"text-[10px] font-bold uppercase text-slate-500 block",children:"Region & Host"}),n.jsx("span",{className:"font-bold text-slate-800 truncate block",children:"ap-southeast-1 (Singapore)"})]}),n.jsxs("div",{className:"rounded-xl border border-slate-200 bg-slate-50 p-2.5",children:[n.jsx("span",{className:"text-[10px] font-bold uppercase text-slate-500 block",children:"Transactions Synced"}),n.jsxs("span",{className:"font-black text-blue-600 text-sm",children:[D.length," টি"]})]}),n.jsxs("div",{className:"rounded-xl border border-slate-200 bg-slate-50 p-2.5",children:[n.jsx("span",{className:"text-[10px] font-bold uppercase text-slate-500 block",children:"Staff Reports"}),n.jsxs("span",{className:"font-black text-indigo-600 text-sm",children:[T.length," টি"]})]})]}),n.jsxs("div",{className:"flex items-center justify-between rounded-xl bg-slate-100 px-3 py-2 text-xs text-slate-600",children:[n.jsx("span",{children:"সর্বশেষ ক্লাউড সিঙ্ক:"}),n.jsx("span",{className:"font-mono font-bold text-slate-800",children:u.lastSyncTime||"এইমাত্র"})]}),d&&n.jsx("div",{className:`rounded-xl p-3 text-xs font-bold leading-relaxed ${d.includes("ত্রুটি")||d.includes("ব্যর্থ")?"bg-rose-50 text-rose-800 border border-rose-200":"bg-blue-50 text-blue-900 border border-blue-200"}`,children:d}),n.jsxs("button",{type:"button",disabled:A||u.isSyncing,onClick:H,className:`w-full rounded-2xl bg-teal-600 hover:bg-teal-700 active:bg-teal-800 py-3 text-xs sm:text-sm font-black text-white shadow-md transition cursor-pointer flex items-center justify-center gap-2 ${A||u.isSyncing?"opacity-75 cursor-not-allowed":""}`,children:[n.jsx("span",{className:A||u.isSyncing?"animate-spin":"",children:"🔄"}),n.jsx("span",{children:A||u.isSyncing?"ক্লাউডে সিঙ্ক হচ্ছে...":"এখনই Neon ডাটাবেজে সিঙ্ক করুন (Sync Now)"})]})]}),n.jsxs("div",{className:"flex items-center justify-between border-t bg-slate-50 px-5 py-3 text-xs",children:[n.jsx("span",{className:"text-slate-400 font-medium",children:"Daily Cash Gobra • BKF"}),n.jsx("button",{type:"button",onClick:o,className:"rounded-xl bg-slate-800 hover:bg-slate-900 px-5 py-1.5 font-bold text-white transition cursor-pointer",children:"বন্ধ করুন"})]})]})})}function eS({open:l,onClose:o,deferredPrompt:u}){const[c,d]=R.useState(!1),[f,A]=R.useState(!1);if(R.useEffect(()=>{const y=()=>{A(!0)};return window.addEventListener("appinstalled",y),()=>window.removeEventListener("appinstalled",y)},[]),!l)return null;const b=window.location.origin,h=async()=>{if(u){u.prompt();const{outcome:y}=await u.userChoice;y==="accepted"&&A(!0)}},L=()=>{navigator.clipboard.writeText(b),d(!0),setTimeout(()=>d(!1),2500)};return n.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs",children:n.jsxs("div",{className:"relative w-full max-w-lg rounded-3xl bg-white p-5 sm:p-6 text-slate-800 shadow-2xl animate-in zoom-in-95 duration-150 max-h-[90vh] overflow-y-auto",children:[n.jsxs("div",{className:"flex items-center justify-between border-b border-slate-100 pb-3 mb-4",children:[n.jsxs("div",{className:"flex items-center gap-2.5",children:[n.jsx("div",{className:"flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-100 text-xl text-indigo-700 font-black",children:"📱"}),n.jsxs("div",{children:[n.jsx("h2",{className:"text-base sm:text-lg font-black text-slate-900 leading-tight",children:"অ্যাপ ইনস্টল ও APK ডাউনলোড"}),n.jsx("p",{className:"text-xs text-slate-500 font-medium",children:"Offline ও Online-এ নিরবচ্ছিন্ন ব্যবহারের জন্য"})]})]}),n.jsx("button",{type:"button",onClick:o,className:"flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 text-lg font-bold cursor-pointer transition",children:"✕"})]}),u&&!f&&n.jsxs("div",{className:"mb-4 rounded-2xl border-2 border-indigo-500/40 bg-indigo-50/70 p-4 text-center",children:[n.jsx("h3",{className:"text-sm font-black text-indigo-950 mb-1",children:"🎉 ১-ক্লিকে ফোনে সরাসরি ইনস্টল করুন"}),n.jsx("p",{className:"text-xs text-indigo-700 mb-3",children:"এটি সরাসরি আপনার ফোনে নেটিভ অ্যাপ আইকন হিসেবে যুক্ত হবে এবং ইন্টারনেট ছাড়াও চলবে।"}),n.jsxs("button",{type:"button",onClick:h,className:"w-full rounded-xl bg-indigo-600 hover:bg-indigo-700 active:scale-98 text-white font-bold py-2.5 text-sm shadow-md transition cursor-pointer flex items-center justify-center gap-2",children:[n.jsx("span",{children:"📥"}),n.jsx("span",{children:"এখনই অ্যাপটি ইনস্টল করুন"})]})]}),f&&n.jsx("div",{className:"mb-4 rounded-2xl bg-emerald-50 border border-emerald-300 p-3 text-center text-xs font-bold text-emerald-800",children:"✅ অ্যাপটি আপনার ডিভাইসে সফলভাবে ইনস্টল হয়েছে! আপনি হোম স্ক্রিন থেকে যেকোনো সময় ওপেন করতে পারেন।"}),n.jsxs("div",{className:"space-y-3.5 text-xs sm:text-sm",children:[n.jsxs("div",{className:"rounded-2xl border border-slate-200 bg-slate-50 p-3.5",children:[n.jsxs("div",{className:"flex items-center gap-2 font-black text-slate-900 mb-1.5",children:[n.jsx("span",{className:"flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-white text-[11px]",children:"১"}),n.jsx("span",{children:"ফোনে সরাসরি অ্যাপ হিসেবে ইনস্টল (সবচেয়ে সহজ):"})]}),n.jsxs("ul",{className:"list-disc list-inside space-y-1 text-slate-600 pl-1 leading-relaxed",children:[n.jsxs("li",{children:["আপনার অ্যান্ড্রয়েড ফোনের ",n.jsx("b",{children:"Chrome ব্রাউজারে"})," এই সাইটটি ওপেন করুন।"]}),n.jsxs("li",{children:["উপরের ডানপাশে ",n.jsx("b",{children:"তিনটি ডট (⋮)"})," মেনুতে ক্লিক করুন।"]}),n.jsxs("li",{children:[n.jsx("b",{children:'"Install app"'})," অথবা ",n.jsx("b",{children:'"Add to Home screen" (হোম স্ক্রিনে যোগ করুন)'})," অপশনে চাপুন।"]}),n.jsx("li",{children:"কয়েক সেকেন্ডের মধ্যে ফোনের অ্যাপ গ্যালারিতে এটি আসল অ্যাপের মতো ইনস্টল হয়ে যাবে।"})]})]}),n.jsxs("div",{className:"rounded-2xl border border-slate-200 bg-emerald-50/50 p-3.5",children:[n.jsxs("div",{className:"flex items-center gap-2 font-black text-emerald-950 mb-1.5",children:[n.jsx("span",{className:"flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-white text-[11px]",children:"⚡"}),n.jsx("span",{children:"Offline ও Online অটো-সিঙ্ক কীভাবে কাজ করে?"})]}),n.jsxs("p",{className:"text-slate-700 leading-relaxed text-xs",children:["১. ",n.jsx("b",{children:"অফলাইন মোড:"})," যখন ইন্টারনেট থাকবে না বা ডাটা বন্ধ থাকবে, তখনও অ্যাপটি আগের মতোই দ্রুত চলবে। আপনি জমা, খরচ বা রিপোর্ট এন্ট্রি দিলে তা আপনার ফোনের মেমরিতে নিরাপদে জমা থাকবে।",n.jsx("br",{}),"২. ",n.jsx("b",{children:"অটো-সিঙ্ক:"})," যখনই ফোনে ইন্টারনেট কানেকশন পাওয়া যাবে, অ্যাপটি স্বয়ংক্রিয়ভাবে সব জমা ডাটা ",n.jsx("b",{children:"Neon ক্লাউড ডাটাবেজে"})," আপলোড করে সিঙ্ক করে নেবে।"]})]}),n.jsxs("div",{className:"rounded-2xl border border-slate-200 bg-slate-50 p-3.5",children:[n.jsxs("div",{className:"flex items-center gap-2 font-black text-slate-900 mb-1.5",children:[n.jsx("span",{className:"flex h-5 w-5 items-center justify-center rounded-full bg-amber-600 text-white text-[11px]",children:"২"}),n.jsx("span",{children:"সরাসরি .apk ফাইল তৈরি (PWABuilder দিয়ে):"})]}),n.jsxs("p",{className:"text-slate-600 leading-relaxed text-xs mb-2",children:["আপনি চাইলে এই অ্যাপের জন্য ১ মিনিটে প্লে-স্টোর উপযোগী সাইনড ",n.jsx("b",{children:".apk ফাইল"})," বানিয়ে নিতে পারেন:"]}),n.jsxs("div",{className:"flex flex-col gap-2",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("input",{type:"text",readOnly:!0,value:b,className:"w-full rounded-lg border border-slate-300 bg-white px-2.5 py-1 text-xs font-mono font-bold text-slate-700"}),n.jsx("button",{type:"button",onClick:L,className:"shrink-0 rounded-lg bg-slate-200 hover:bg-slate-300 px-3 py-1 text-xs font-bold text-slate-800 transition cursor-pointer",children:c?"কপি হয়েছে ✓":"লিংক কপি"})]}),n.jsxs("a",{href:`https://www.pwabuilder.com/?url=${encodeURIComponent(b)}`,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center justify-center gap-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-3 py-2 text-xs transition shadow-xs",children:[n.jsx("span",{children:"🚀 PWABuilder-এ APK তৈরি করুন"}),n.jsx("span",{children:"↗"})]})]})]})]}),n.jsx("div",{className:"mt-5 border-t border-slate-100 pt-3 flex justify-end",children:n.jsx("button",{type:"button",onClick:o,className:"rounded-xl bg-slate-800 hover:bg-slate-900 text-white font-bold px-5 py-2 text-xs transition cursor-pointer",children:"বুঝেছি, বন্ধ করুন"})})]})})}const Ki=[{id:"receive",label:"Receive",icon:"📥"},{id:"payment",label:"Payment",icon:"📤"},{id:"report",label:"Report",icon:"📊"},{id:"cashbook",label:"Cashbook",icon:"📖"},{id:"check",label:"Check",icon:"🧾"},{id:"entertainment",label:"Entertainment",icon:"🎉"}];function tS({currentTab:l,onTabChange:o,selectedDate:u,onDateChange:c,onOpenTracker:d}){const[f,A]=R.useState(!1),[b,h]=R.useState(!1),[L,y]=R.useState(!1),[g,H]=R.useState(!1),[D,T]=R.useState(null),[Z,O]=R.useState(nr()),G=fa();R.useEffect(()=>{const V=re=>{re.preventDefault(),T(re)};return window.addEventListener("beforeinstallprompt",V),()=>window.removeEventListener("beforeinstallprompt",V)},[]),R.useEffect(()=>{const V=re=>{re.detail&&O(re.detail)};return window.addEventListener("neon-sync-status-changed",V),()=>window.removeEventListener("neon-sync-status-changed",V)},[]);const ce=V=>{o(V),y(!1)},K=Ki.find(V=>V.id===l)||Ki[0],C=!["check","entertainment","cashbook"].includes(l)?Oe(u)?n.jsx("span",{className:"rounded-full border border-rose-400/40 bg-rose-500/15 px-2 py-0.5 text-[10px] font-bold text-rose-300 whitespace-nowrap",title:"Day Closed",children:"🔒 Closed"}):Gt(u)?n.jsx("span",{className:"rounded-full border border-emerald-400/40 bg-emerald-500/15 px-2 py-0.5 text-[10px] font-bold text-emerald-300 whitespace-nowrap",title:"Day Open",children:"☀️ Open"}):n.jsx("span",{className:"rounded-full border border-amber-400/40 bg-amber-500/15 px-2 py-0.5 text-[10px] font-bold text-amber-300 whitespace-nowrap",title:"Working day not opened yet",children:"⏳ Not Opened"}):null;return n.jsxs(n.Fragment,{children:[n.jsxs("aside",{className:"fixed inset-y-0 left-0 z-40 hidden w-60 flex-col text-white lg:flex print:hidden",children:[n.jsx("div",{className:"absolute inset-0 border-r border-white/10 bg-linear-to-b from-[#131f42]/97 to-[#0a1024] backdrop-blur-xl shadow-[10px_0_40px_-12px_rgba(4,10,30,0.7)]"}),n.jsx("div",{className:"pointer-events-none absolute inset-y-0 right-0 w-px bg-linear-to-b from-transparent via-amber-300/60 to-transparent"}),n.jsxs("div",{className:"relative flex h-full flex-col gap-1 px-3 py-4",children:[n.jsxs("div",{className:"mb-2 flex items-center gap-2.5 px-1",children:[n.jsx("span",{className:"flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-amber-300 to-orange-500 text-lg shadow-lg shadow-amber-500/40 ring-1 ring-white/30",children:"💰"}),n.jsxs("div",{className:"min-w-0",children:[n.jsx("p",{className:"bg-linear-to-b from-amber-200 via-amber-300 to-amber-500 bg-clip-text text-[15px] font-black tracking-tight text-transparent",children:"Cash Gobra"}),n.jsx("p",{className:"text-[9px] font-bold uppercase tracking-[0.18em] text-slate-400",children:"Daily Cashbook Pro"})]})]}),n.jsxs("div",{className:"mb-2 rounded-2xl border border-white/10 bg-white/5 p-2.5 shadow-inner",children:[n.jsxs("div",{className:"mb-1.5 flex items-center justify-between",children:[n.jsx("span",{className:"text-[9px] font-black uppercase tracking-[0.14em] text-slate-400",children:"কাজের তারিখ"}),C]}),n.jsx("div",{className:"text-slate-900",children:n.jsx(bn,{value:u,onChange:V=>c(V||G),className:"w-full rounded-xl border border-white/60 bg-white px-2.5 py-1.5 text-xs font-bold shadow-md shadow-black/30",onOpenTracker:d})}),u!==G&&n.jsx("button",{type:"button",onClick:()=>c(G),className:"mt-1.5 w-full rounded-full bg-linear-to-r from-sky-500 to-blue-600 px-2 py-1 text-[10px] font-black text-white shadow-md shadow-blue-500/40 transition-all duration-200 cursor-pointer hover:scale-[1.02] active:scale-95",title:"Back to today's date",children:"📆 আজকের তারিখে ফিরুন"})]}),n.jsxs("div",{className:"mt-1 flex min-h-0 flex-1 flex-col gap-1 overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",children:[n.jsx("p",{className:"px-1 text-[9px] font-black uppercase tracking-[0.18em] text-slate-500",children:"Pages"}),n.jsx("nav",{className:"flex flex-col gap-1",children:Ki.map(V=>{const re=l===V.id;return n.jsxs("button",{type:"button",onClick:()=>o(V.id),className:`group relative flex w-full items-center gap-2.5 rounded-xl px-2.5 py-2 text-left text-[13px] transition-all duration-200 cursor-pointer ${re?"bg-linear-to-r from-indigo-500 via-blue-500 to-sky-500 font-black text-white shadow-lg shadow-indigo-500/40 ring-1 ring-white/30":"font-bold text-slate-300 hover:bg-white/10 hover:text-white hover:translate-x-0.5"}`,children:[n.jsx("span",{className:`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-base ${re?"bg-white/20 shadow-inner":"bg-white/5 group-hover:bg-white/10"}`,children:V.icon}),n.jsx("span",{className:"truncate",children:V.label}),re&&n.jsx("span",{className:"ml-auto h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300 shadow-[0_0_8px_rgba(110,231,183,1)] animate-pulse"})]},V.id)})}),n.jsx("p",{className:"mt-2 px-1 text-[9px] font-black uppercase tracking-[0.18em] text-slate-500",children:"Tools & Cloud"}),n.jsxs("div",{className:"flex flex-col gap-1",children:[n.jsxs("button",{type:"button",onClick:()=>h(!0),className:"flex w-full items-center gap-2.5 rounded-xl border border-teal-300/20 bg-teal-400/10 px-2.5 py-2 text-left text-xs font-bold text-teal-200 transition-all duration-200 cursor-pointer hover:bg-teal-400/20 hover:border-teal-300/40",title:"Neon PostgreSQL Cloud Database",children:[n.jsx("span",{className:"flex h-7 w-7 items-center justify-center rounded-lg bg-white/10 text-sm",children:"🐘"}),n.jsx("span",{children:"Neon DB"}),n.jsx("span",{className:`ml-auto h-1.5 w-1.5 rounded-full ${Z.isSyncing?"bg-amber-300 animate-ping":Z.connected?"bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,1)]":"bg-rose-400 shadow-[0_0_8px_rgba(251,113,133,0.9)]"}`})]}),n.jsxs("button",{type:"button",onClick:()=>A(!0),className:"flex w-full items-center gap-2.5 rounded-xl border border-emerald-300/20 bg-emerald-400/10 px-2.5 py-2 text-left text-xs font-bold text-emerald-200 transition-all duration-200 cursor-pointer hover:bg-emerald-400/20 hover:border-emerald-300/40",title:"Connect to Google Sheet",children:[n.jsx("span",{className:"flex h-7 w-7 items-center justify-center rounded-lg bg-white/10 text-sm",children:"📊"}),n.jsx("span",{children:"Google Sheet"})]}),n.jsxs("button",{type:"button",onClick:d,className:"flex w-full items-center gap-2.5 rounded-xl border border-amber-300/20 bg-amber-400/10 px-2.5 py-2 text-left text-xs font-bold text-amber-300 transition-all duration-200 cursor-pointer hover:bg-amber-400/20 hover:border-amber-300/40",title:"Open audit tracker for all dates",children:[n.jsx("span",{className:"flex h-7 w-7 items-center justify-center rounded-lg bg-white/10 text-sm",children:"📅"}),n.jsx("span",{children:"Audit Tracker"})]}),n.jsxs("button",{type:"button",onClick:()=>window.dispatchEvent(new CustomEvent("open-day-admin")),className:"flex w-full items-center gap-2.5 rounded-xl border border-violet-300/25 bg-violet-500/15 px-2.5 py-2 text-left text-xs font-bold text-violet-200 transition-all duration-200 cursor-pointer hover:bg-violet-500/25 hover:border-violet-300/50",title:"⚙️ Day Admin — সব কর্মদিবস Close/Re-open/এডিট এক জায়গায়",children:[n.jsx("span",{className:"flex h-7 w-7 items-center justify-center rounded-lg bg-white/10 text-sm",children:"⚙️"}),n.jsx("span",{children:"Day Admin"})]}),n.jsxs("button",{type:"button",onClick:()=>H(!0),className:"flex w-full items-center gap-2.5 rounded-xl border border-indigo-300/25 bg-indigo-400/10 px-2.5 py-2 text-left text-xs font-bold text-indigo-200 transition-all duration-200 cursor-pointer hover:bg-indigo-400/20 hover:border-indigo-300/40",title:"Install App & Download APK",children:[n.jsx("span",{className:"flex h-7 w-7 items-center justify-center rounded-lg bg-white/10 text-sm",children:"📱"}),n.jsx("span",{children:"Install App"})]})]})]}),n.jsx("div",{className:"mt-1 pt-2 text-center text-[9px] font-bold uppercase tracking-[0.2em] text-slate-600",children:"Gobra Branch · BKF"})]})]}),n.jsxs("button",{type:"button",onClick:()=>y(!0),"aria-label":`মেনু খুলুন — বর্তমান পেজ: ${K.label}`,title:`মেনু — ${K.label}`,className:"fixed bottom-4 right-4 z-40 flex h-14 w-14 flex-col items-center justify-center gap-1 rounded-2xl border border-amber-300/50 bg-linear-to-b from-[#18244f]/95 to-[#0a1024]/95 shadow-[0_8px_28px_-6px_rgba(4,10,30,0.8),0_0_14px_rgba(251,191,36,0.25)] backdrop-blur-xl transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 lg:hidden print:hidden",children:[n.jsx("span",{className:"block h-0.5 w-5 bg-amber-400 rounded-full shadow-[0_0_4px_rgba(251,191,36,0.9)]"}),n.jsx("span",{className:"block h-0.5 w-5 bg-amber-400 rounded-full shadow-[0_0_4px_rgba(251,191,36,0.9)]"}),n.jsx("span",{className:"block h-0.5 w-5 bg-amber-400 rounded-full shadow-[0_0_4px_rgba(251,191,36,0.9)]"})]}),L&&n.jsxs("div",{className:"fixed inset-0 z-50 flex flex-col justify-end lg:hidden",children:[n.jsx("div",{className:"fixed inset-0 bg-slate-950/75 backdrop-blur-xs transition-opacity",onClick:()=>y(!1)}),n.jsxs("div",{className:"relative z-10 w-full rounded-t-3xl border-t border-white/10 bg-linear-to-b from-[#151f47] to-[#0a1024] p-4 text-white shadow-2xl animate-in slide-in-from-bottom duration-200 max-h-[85vh] overflow-y-auto",children:[n.jsx("div",{className:"pointer-events-none absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-amber-300/70 to-transparent"}),n.jsxs("div",{className:"flex items-center justify-between border-b border-white/10 pb-3 mb-3",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"flex h-8 w-8 items-center justify-center rounded-xl bg-linear-to-br from-amber-300 to-orange-500 text-base shadow-md shadow-amber-500/40 ring-1 ring-white/30",children:"💰"}),n.jsxs("div",{children:[n.jsx("h3",{className:"text-sm font-black tracking-tight bg-linear-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent",children:"Cash Gobra — Menu"}),n.jsx("p",{className:"text-[10px] text-slate-400",children:"Select the page you want to open"})]})]}),n.jsx("button",{type:"button",onClick:()=>y(!1),className:"rounded-full p-1.5 text-slate-400 hover:text-white hover:bg-white/10 text-lg leading-none transition cursor-pointer",children:"✕"})]}),n.jsx("div",{className:"space-y-1.5 mb-4",children:Ki.map(V=>{const re=l===V.id;return n.jsxs("button",{type:"button",onClick:()=>ce(V.id),className:`w-full flex items-center justify-between rounded-2xl p-3 text-left font-bold transition-all duration-200 cursor-pointer ${re?"bg-linear-to-r from-indigo-500 via-blue-500 to-sky-500 text-white shadow-lg shadow-indigo-500/40 ring-1 ring-white/30":"border border-white/10 bg-white/5 text-slate-200 hover:-translate-y-px hover:bg-white/10"}`,children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("span",{className:`flex h-9 w-9 items-center justify-center rounded-xl text-lg ${re?"bg-white/20 shadow-inner":"bg-white/10"}`,children:V.icon}),n.jsx("div",{children:n.jsx("span",{className:`text-sm block ${re?"font-black":""}`,children:V.label})})]}),re&&n.jsx("span",{className:"rounded-full bg-white/25 px-2.5 py-0.5 text-xs font-black backdrop-blur",children:"✓ Active"})]},V.id)})}),n.jsxs("div",{className:"border-t border-white/10 pt-3 space-y-2",children:[n.jsx("span",{className:"text-[10px] font-black uppercase tracking-wider text-slate-400 block px-1",children:"Tools & Cloud Database"}),n.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[n.jsxs("button",{type:"button",onClick:()=>{y(!1),d?d():window.dispatchEvent(new CustomEvent("open-date-tracker"))},className:"col-span-2 flex items-center justify-center gap-2 rounded-xl border border-amber-300/30 bg-amber-400/10 p-2.5 text-xs font-bold text-amber-200 transition-all duration-200 cursor-pointer hover:-translate-y-px hover:bg-amber-400/20",children:[n.jsx("span",{className:"text-base",children:"📅"}),n.jsx("span",{children:"Working-Day & Transaction Audit Tracker"})]}),n.jsxs("button",{type:"button",onClick:()=>{y(!1),h(!0)},className:"flex items-center justify-center gap-1.5 rounded-xl border border-teal-300/30 bg-teal-400/10 p-2.5 text-xs font-bold text-teal-200 transition-all duration-200 cursor-pointer hover:-translate-y-px hover:bg-teal-400/20",children:[n.jsx("span",{className:"text-base",children:"🐘"}),n.jsx("span",{children:"Neon Database"})]}),n.jsxs("button",{type:"button",onClick:()=>{y(!1),A(!0)},className:"flex items-center justify-center gap-1.5 rounded-xl border border-emerald-300/30 bg-emerald-400/10 p-2.5 text-xs font-bold text-emerald-200 transition-all duration-200 cursor-pointer hover:-translate-y-px hover:bg-emerald-400/20",children:[n.jsx("span",{className:"text-base",children:"📊"}),n.jsx("span",{children:"Google Sheet"})]}),n.jsxs("button",{type:"button",onClick:()=>{y(!1),window.dispatchEvent(new CustomEvent("open-day-admin"))},className:"col-span-2 flex items-center justify-center gap-2 rounded-xl border border-violet-300/30 bg-violet-500/15 p-2.5 text-xs font-bold text-violet-200 transition-all duration-200 cursor-pointer hover:-translate-y-px hover:bg-violet-500/25",children:[n.jsx("span",{className:"text-base",children:"⚙️"}),n.jsx("span",{children:"Day Admin — Close / Re-open / পুরনো দিন এডিট"})]}),n.jsxs("button",{type:"button",onClick:()=>{y(!1),H(!0)},className:"col-span-2 flex items-center justify-center gap-2 rounded-xl border border-indigo-300/30 bg-indigo-400/10 p-2.5 text-xs font-bold text-indigo-200 transition-all duration-200 cursor-pointer hover:-translate-y-px hover:bg-indigo-400/20",children:[n.jsx("span",{className:"text-base",children:"📱"}),n.jsx("span",{children:"Install App & Download APK"})]})]})]})]})]}),n.jsx(W5,{open:b,onClose:()=>h(!1)}),n.jsx($5,{open:f,onClose:()=>A(!1)}),n.jsx(eS,{open:g,onClose:()=>H(!1),deferredPrompt:D})]})}function nS(){const[l,o]=R.useState(()=>navigator.onLine),[u,c]=R.useState(nr()),[d,f]=R.useState(!1);return R.useEffect(()=>{const A=()=>{o(!0),f(!0),tr().catch(()=>{});const L=setTimeout(()=>{f(!1)},5e3);return()=>clearTimeout(L)},b=()=>{o(!1),f(!1)},h=L=>{L.detail&&c(L.detail)};return window.addEventListener("online",A),window.addEventListener("offline",b),window.addEventListener("neon-sync-status-changed",h),()=>{window.removeEventListener("online",A),window.removeEventListener("offline",b),window.removeEventListener("neon-sync-status-changed",h)}},[]),l?d?n.jsxs("div",{className:"mb-2.5 rounded-2xl border-2 border-emerald-400 bg-emerald-500/10 px-3.5 py-2.5 text-xs sm:text-sm font-bold text-emerald-900 shadow-sm print:hidden flex items-center justify-between gap-2 animate-in fade-in duration-200",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-base",children:"✅"}),n.jsxs("div",{className:"leading-snug",children:[n.jsx("span",{className:"font-black",children:"ইন্টারনেট পুনঃসংযুক্ত:"})," ",n.jsx("span",{className:"font-medium text-emerald-800",children:"অফলাইনে এন্ট্রি করা ডাটা ক্লাউডে অটো-সিঙ্ক সম্পন্ন হয়েছে!"})]})]}),u.isSyncing&&n.jsx("span",{className:"shrink-0 animate-spin text-xs",children:"🔄"})]}):null:n.jsxs("div",{className:"mb-2.5 rounded-2xl border-2 border-amber-400 bg-amber-500/10 px-3.5 py-2.5 text-xs sm:text-sm font-bold text-amber-900 shadow-sm print:hidden flex items-center justify-between gap-2 animate-in fade-in duration-200",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"flex h-3 w-3 rounded-full bg-amber-500 animate-ping shrink-0"}),n.jsxs("div",{className:"leading-snug",children:[n.jsx("span",{className:"font-black",children:"⚡ অফলাইন মোড সক্রিয়:"})," ",n.jsx("span",{className:"font-medium text-amber-800",children:"ইন্টারনেট সংযোগ নেই। আপনি নিশ্চিন্তে কাজ চালিয়ে যেতে পারেন, সকল ডাটা ডিভাইসে জমা থাকছে।"})]})]}),u.pendingCount>0&&n.jsxs("span",{className:"shrink-0 rounded-lg bg-amber-600 px-2 py-0.5 text-[11px] font-black text-white",children:[u.pendingCount,"টি পেন্ডিং"]})]})}function aS({selectedDate:l,onSelectDate:o,onOpenTracker:u}){const[c,d]=R.useState([]),[f,A]=R.useState(!1),b=()=>{try{const y=_m().filter(g=>g.date<l&&!g.isClosed&&(g.txCount>0||g.srCount>0));d(y)}catch{d([])}};if(R.useEffect(()=>{A(!1),b()},[l]),R.useEffect(()=>{const L=()=>{b()};return window.addEventListener("tx-changed",L),window.addEventListener("storage",L),()=>{window.removeEventListener("tx-changed",L),window.removeEventListener("storage",L)}},[l]),f||c.length===0)return null;const h=c[0];return n.jsx("div",{className:"mb-3 rounded-2xl border-2 border-amber-400 bg-linear-to-r from-amber-50 via-orange-50 to-amber-100/70 p-3 sm:p-4 text-amber-950 shadow-md animate-in fade-in slide-in-from-top duration-200",children:n.jsxs("div",{className:"flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3",children:[n.jsxs("div",{className:"flex items-start gap-2.5",children:[n.jsx("div",{className:"flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-500 text-white shadow-xs text-lg font-black animate-pulse",children:"⚠️"}),n.jsxs("div",{children:[n.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[n.jsx("span",{className:"font-black text-amber-950 text-xs sm:text-sm",children:"অসমাপ্ত দিনের লেনদেন সতর্কবার্তা!"}),n.jsxs("span",{className:"rounded-full bg-amber-500/20 px-2 py-0.5 text-[10px] font-bold text-amber-900 border border-amber-400",children:[c.length," টি কর্মদিবস অমিল"]})]}),n.jsxs("p",{className:"mt-1 text-[11px] sm:text-xs text-amber-900 leading-relaxed font-medium",children:["আপনার বর্তমান তারিখ"," ",n.jsx("strong",{className:"font-mono text-blue-800",children:Fe(l)||l}),"-এর পূর্বে"," ",n.jsxs("strong",{className:"font-mono text-rose-700 underline",children:[h.date," (",h.dayName,")"]})," ","তারিখে লেনদেন রয়েছে কিন্তু ",n.jsx("strong",{children:"দিন সমাপ্ত (Day Close)"})," করা হয়নি। এটি কোনো ভুল এন্ট্রি হলে মুছে ফেলুন, অথবা কাজ হয়ে থাকলে দিন সমাপ্ত করুন।"]})]})]}),n.jsxs("div",{className:"flex items-center gap-2 self-end sm:self-center shrink-0",children:[n.jsxs("button",{type:"button",onClick:()=>o(h.date),className:"rounded-xl bg-amber-600 hover:bg-amber-700 active:bg-amber-800 px-3.5 py-1.5 text-xs font-black text-white shadow-xs transition flex items-center gap-1.5 cursor-pointer",children:[n.jsx("span",{children:"📅"}),n.jsxs("span",{children:[h.date," তারিখে যান"]})]}),n.jsx("button",{type:"button",onClick:u,className:"rounded-xl border border-amber-400 bg-white hover:bg-amber-50 px-2.5 py-1.5 text-xs font-bold text-amber-950 shadow-2xs transition cursor-pointer",title:"সকল তারিখের বিস্তারিত তালিকা",children:"📋 ট্র্যাকার"}),n.jsx("button",{type:"button",onClick:()=>A(!0),className:"flex h-7 w-7 items-center justify-center rounded-lg text-amber-700 hover:bg-amber-200/60 transition cursor-pointer font-bold text-xs",title:"লুকিয়ে রাখুন",children:"✕"})]})]})})}function sS({isOpen:l,onClose:o,selectedDate:u,onSelectDate:c}){const[d,f]=R.useState([]),A=()=>{f(_m())};return R.useEffect(()=>{l&&A()},[l]),R.useEffect(()=>{const b=()=>{l&&A()};return window.addEventListener("tx-changed",b),window.addEventListener("storage",b),()=>{window.removeEventListener("tx-changed",b),window.removeEventListener("storage",b)}},[l]),l?n.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-3 sm:p-4 backdrop-blur-xs animate-in fade-in duration-150",children:n.jsxs("div",{className:"relative flex max-h-[90vh] w-full max-w-4xl flex-col rounded-2xl bg-white shadow-2xl border border-slate-200 overflow-hidden",children:[n.jsxs("div",{className:"flex items-center justify-between border-b border-slate-200 bg-slate-50 px-4 py-3 sm:px-6",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"flex h-9 w-9 items-center justify-center rounded-xl bg-blue-100 text-blue-700 text-lg shadow-xs",children:"📅"}),n.jsxs("div",{children:[n.jsx("h2",{className:"text-sm sm:text-base font-black text-slate-900",children:"কর্মদিবস ও লেনদেন অডিট ট্র্যাকার (Date Status Tracker)"}),n.jsx("p",{className:"text-[11px] sm:text-xs text-slate-500",children:"কোনো তারিখে ভুল এন্ট্রি হয়েছে কি না বা দিন সমাপ্ত (Day Close) বাকি আছে কি না তা সহজে যাচাই করুন"})]})]}),n.jsx("button",{type:"button",onClick:o,className:"flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 text-slate-600 hover:bg-rose-100 hover:text-rose-700 transition font-bold text-sm cursor-pointer",title:"বন্ধ করুন",children:"✕"})]}),n.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 bg-amber-50/60 px-4 py-2 text-[11px] sm:text-xs",children:[n.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[n.jsxs("span",{className:"flex items-center gap-1 font-bold text-emerald-800",children:[n.jsx("span",{className:"h-2.5 w-2.5 rounded-full bg-emerald-500 inline-block"}),"সবুজ = দিন সমাপ্ত (Day Closed)"]}),n.jsxs("span",{className:"flex items-center gap-1 font-bold text-amber-800",children:[n.jsx("span",{className:"h-2.5 w-2.5 rounded-full bg-amber-500 inline-block animate-pulse"}),"কমলা = অসমাপ্ত লেনদেন (Unclosed)"]})]}),n.jsxs("span",{className:"text-slate-600 font-medium",children:["বর্তমান সিলেক্ট করা তারিখ:"," ",n.jsx("span",{className:"font-mono font-bold text-blue-700",children:u})]})]}),n.jsx("div",{className:"flex-1 overflow-auto p-3 sm:p-4",children:d.length===0?n.jsx("div",{className:"p-8 text-center text-slate-400 text-xs sm:text-sm",children:"এখনও কোনো লেনদেনের তথ্য পাওয়া যায়নি।"}):n.jsx("div",{className:"overflow-x-auto rounded-xl border border-slate-200",children:n.jsxs("table",{className:"w-full border-collapse text-left text-xs",children:[n.jsx("thead",{children:n.jsxs("tr",{className:"bg-slate-100 text-slate-700 border-b border-slate-200 font-bold uppercase tracking-wider text-[11px]",children:[n.jsx("th",{className:"p-2.5 text-center w-12",children:"ক্র."}),n.jsx("th",{className:"p-2.5",children:"তারিখ ও বার"}),n.jsx("th",{className:"p-2.5 text-center",children:"লেনদেন সংখ্যা"}),n.jsx("th",{className:"p-2.5 text-right",children:"মোট জমা (রিসিভ)"}),n.jsx("th",{className:"p-2.5 text-right",children:"মোট খরচ (পেমেন্ট)"}),n.jsx("th",{className:"p-2.5 text-center",children:"স্ট্যাটাস"}),n.jsx("th",{className:"p-2.5 text-center w-28",children:"অ্যাকশন"})]})}),n.jsx("tbody",{className:"divide-y divide-slate-100 font-medium",children:d.map((b,h)=>{const L=b.date===u,y=!b.isClosed&&(b.txCount>0||b.srCount>0);return n.jsxs("tr",{className:`transition ${L?"bg-blue-50/80 font-semibold":y?"bg-amber-50/40 hover:bg-amber-50":"hover:bg-slate-50"}`,children:[n.jsx("td",{className:"p-2.5 text-center text-slate-400 font-mono text-[11px]",children:h+1}),n.jsx("td",{className:"p-2.5 whitespace-nowrap",children:n.jsxs("div",{className:"flex items-center gap-1.5",children:[n.jsx("span",{className:"font-mono font-bold text-slate-900",children:b.date}),n.jsx("span",{className:"text-[11px] text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded",children:b.dayName}),L&&n.jsx("span",{className:"rounded bg-blue-600 px-1.5 py-0.5 text-[10px] font-bold text-white",children:"Active"})]})}),n.jsxs("td",{className:"p-2.5 text-center whitespace-nowrap font-mono",children:[n.jsxs("span",{className:"text-emerald-700 font-bold",children:[b.receiveCount," Rec"]})," / ",n.jsxs("span",{className:"text-rose-700 font-bold",children:[b.paymentCount," Pay"]}),b.srCount>0&&n.jsxs("span",{className:"text-purple-700 text-[10px] ml-1",children:["(",b.srCount," SR)"]})]}),n.jsx("td",{className:"p-2.5 text-right font-mono font-bold text-emerald-700 whitespace-nowrap",children:b.receiveTotal>0?Number(b.receiveTotal).toLocaleString("en-IN"):"—"}),n.jsx("td",{className:"p-2.5 text-right font-mono font-bold text-rose-700 whitespace-nowrap",children:b.paymentTotal>0?Number(b.paymentTotal).toLocaleString("en-IN"):"—"}),n.jsx("td",{className:"p-2.5 text-center whitespace-nowrap",children:b.isClosed?n.jsxs("div",{className:"inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-1 text-[11px] font-bold text-emerald-800",children:[n.jsx("span",{className:"h-2 w-2 rounded-full bg-emerald-600"}),n.jsx("span",{children:"সমাপ্ত (Closed)"})]}):b.isOpen?n.jsxs("div",{className:"inline-flex items-center gap-1 rounded-full bg-blue-100 px-2.5 py-1 text-[11px] font-bold text-blue-900 border border-blue-300",children:[n.jsx("span",{className:"h-2 w-2 rounded-full bg-blue-600 animate-pulse"}),n.jsx("span",{children:"☀️ চলমান (Day Open)"})]}):Rt(b.date).blocked?n.jsxs("div",{className:"inline-flex items-center gap-1 rounded-full bg-rose-100 px-2.5 py-1 text-[11px] font-bold text-rose-900 border border-rose-300",children:[n.jsx("span",{className:"h-2 w-2 rounded-full bg-rose-600"}),n.jsx("span",{children:"🚫 ব্লকড দিন"})]}):y?n.jsxs("div",{className:"inline-flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-1 text-[11px] font-bold text-amber-900 border border-amber-300",children:[n.jsx("span",{className:"h-2 w-2 rounded-full bg-amber-600 animate-ping"}),n.jsx("span",{children:"অসমাপ্ত (Unclosed)"})]}):n.jsx("span",{className:"text-slate-400 text-[11px]",children:"শুরু হয়নি (Not Opened)"})}),n.jsx("td",{className:"p-2.5 text-center whitespace-nowrap",children:n.jsx("button",{type:"button",onClick:()=>{c(b.date),o()},className:`rounded-lg px-2.5 py-1 text-xs font-bold transition shadow-xs cursor-pointer ${L?"bg-slate-200 text-slate-700 cursor-default":"bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800"}`,children:L?"চলমান":"এই তারিখে যান ➔"})})]},b.date)})})]})})}),n.jsxs("div",{className:"flex items-center justify-between border-t border-slate-200 bg-slate-50 px-4 py-3 sm:px-6",children:[n.jsx("p",{className:"text-[11px] text-slate-500",children:"টিপস: কোনো বন্ধের দিনে ভুল এন্ট্রি হলে সেই তারিখে গিয়ে সহজেই লেনদেনগুলো দেখে নিশ্চিত বা ডিলিট করতে পারবেন।"}),n.jsx("button",{type:"button",onClick:o,className:"rounded-xl bg-slate-800 px-4 py-1.5 text-xs font-bold text-white hover:bg-slate-700 transition cursor-pointer",children:"বন্ধ করুন"})]})]})}):null}function lS({selectedDate:l,onOpenDayModal:o}){const[u,c]=R.useState("not_opened"),[d,f]=R.useState(0),[A,b]=R.useState(0),[h,L]=R.useState(!1),[y,g]=R.useState(!1),H=R.useRef(null),D=()=>{var O;c(GR(l));try{const G=_n(l);f(G.prevCash||0),b(G.prevBank||0),L(!!((O=fm(l))!=null&&O.manualOpening))}catch{}};R.useEffect(()=>{D()},[l]),R.useEffect(()=>{const O=()=>D();window.addEventListener("tx-changed",O),window.addEventListener("day-close-changed",O),window.addEventListener("day-open-changed",O),window.addEventListener("storage",O);const G=()=>{window.scrollTo({top:0,behavior:"smooth"}),g(!0),window.setTimeout(()=>g(!1),2400)};return window.addEventListener("scroll-to-day-bar",G),()=>{window.removeEventListener("tx-changed",O),window.removeEventListener("day-close-changed",O),window.removeEventListener("day-open-changed",O),window.removeEventListener("storage",O),window.removeEventListener("scroll-to-day-bar",G)}},[l]);const T=Rt(l),Z=()=>{confirm(`আপনি কি নিশ্চিত যে ${l} তারিখের হিসাবটি পুনরায় আনলক/ওপেন (Re-open) করতে চান?`)&&(Am(l),D(),window.dispatchEvent(new Event("day-open-changed")),window.dispatchEvent(new Event("day-close-changed")))};return u==="not_opened"?n.jsx("div",{ref:H,className:`mb-4 rounded-2xl border-2 border-amber-400 bg-linear-to-r from-amber-50 via-orange-50 to-amber-100/70 p-3.5 sm:p-4 text-amber-950 shadow-sm animate-in fade-in duration-200 ${y?"day-bar-flash":""}`,children:n.jsxs("div",{className:"flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3",children:[n.jsxs("div",{className:"flex items-start gap-2.5",children:[n.jsx("span",{className:"flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-500 text-white text-lg font-black shadow-xs",children:"☀️"}),n.jsxs("div",{children:[n.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[n.jsx("span",{className:"font-black text-amber-950 text-xs sm:text-sm",children:"কর্মদিবস এখনও শুরু (Day Open) করা হয়নি!"}),n.jsx("span",{className:"rounded-full bg-amber-500/20 px-2 py-0.5 text-[10px] font-bold text-amber-900 border border-amber-300",children:"Not Opened"})]}),n.jsxs("p",{className:"mt-1 text-[10px] sm:text-[11px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-lg px-2 py-0.5 inline-block font-mono",children:[Fe(l)," • প্রারম্ভিক ক্যাশ: ৳ ",de(d)," • প্রারম্ভিক ব্যাংক: ৳ ",de(A)]})]})]}),n.jsxs("button",{type:"button",onClick:o,disabled:T.blocked,className:"self-end sm:self-center shrink-0 rounded-xl bg-linear-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 active:scale-98 text-white px-4 py-2 text-xs font-black shadow-sm transition flex items-center gap-1.5 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed animate-pulse",title:T.blocked?T.reason||"এই তারিখে Day Open করা যাবে না":"কর্মদিবস শুরু করুন",children:[n.jsx("span",{children:"☀️"}),n.jsx("span",{children:T.blocked?"তারিখ ব্লকড":"কর্মদিবস শুরু (Day Open) করুন"})]}),n.jsx("button",{type:"button",onClick:()=>window.dispatchEvent(new CustomEvent("open-day-admin")),className:"shrink-0 self-end sm:self-center rounded-xl border border-violet-300 bg-violet-50 px-2.5 py-2 text-xs font-black text-violet-700 shadow-xs transition hover:bg-violet-100 cursor-pointer",title:"⚙️ Day Admin — সব কর্মদিবস Close/Re-open/এডিট এক জায়গায়",children:"⚙️"})]})}):u==="closed"?n.jsxs("div",{ref:H,className:`mb-4 rounded-2xl border border-rose-300 bg-rose-50 p-3 text-xs sm:text-sm font-bold text-rose-900 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 ${y?"day-bar-flash":""}`,children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-base",children:"🔒"}),n.jsxs("span",{children:["এই তারিখের (",l,") দিন সমাপ্ত (Day Closed) রয়েছে। হিসাব লক ও সুরক্ষিত আছে — কোনো এন্ট্রি বা পরিবর্তন করা যাবে না।"]})]}),n.jsxs("button",{type:"button",onClick:Z,className:"shrink-0 self-end sm:self-center rounded-xl bg-amber-600 hover:bg-amber-700 text-white px-3.5 py-1.5 text-xs font-black shadow-xs transition cursor-pointer flex items-center gap-1.5",title:"দিনটি পুনরায় আনলক/ওপেন করুন",children:[n.jsx("span",{children:"🔓"}),n.jsx("span",{children:"Re-open Day"})]}),n.jsx("button",{type:"button",onClick:()=>window.dispatchEvent(new CustomEvent("open-day-admin")),className:"shrink-0 self-end sm:self-center rounded-xl border border-violet-300 bg-violet-50 px-2.5 py-1.5 text-xs font-black text-violet-700 shadow-xs transition hover:bg-violet-100 cursor-pointer",title:"⚙️ Day Admin — সব কর্মদিবস Close/Re-open/এডিট এক জায়গায়",children:"⚙️"})]}):n.jsxs("div",{ref:H,className:`mb-4 rounded-xl border border-emerald-300 bg-emerald-50/70 px-3.5 py-2 text-xs text-emerald-900 shadow-2xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 ${y?"day-bar-flash":""}`,children:[n.jsxs("div",{className:"flex items-center gap-1.5 flex-wrap",children:[n.jsx("span",{className:"h-2 w-2 rounded-full bg-emerald-500 animate-pulse"}),n.jsxs("span",{className:"font-bold",children:["☀️ ",l," কর্মদিবস চালু রয়েছে (Day Open)"]}),n.jsx("span",{className:"rounded bg-emerald-600 px-1.5 py-0.5 text-[10px] font-bold text-white uppercase",children:"Open ✓"}),h&&n.jsx("span",{className:"rounded border border-fuchsia-300 bg-fuchsia-50 px-1.5 py-0.5 text-[10px] font-black text-fuchsia-700",title:"এই দিনের প্রারম্ভিক ক্যাশ/ব্যাংক হাতে টাইপ করে বসানো হয়েছে",children:"✍️ ম্যানুয়াল ওপেনিং"}),n.jsx("span",{className:"text-slate-500 text-[11px] hidden md:inline",children:"— দিনের কাজ শেষে এখান থেকেই Day Close করুন"})]}),n.jsxs("div",{className:"flex items-center gap-2 self-end sm:self-center shrink-0",children:[n.jsxs("button",{type:"button",onClick:()=>window.dispatchEvent(new CustomEvent("open-day-open-modal")),className:"rounded-xl border border-emerald-400 bg-white px-3 py-1.5 text-xs font-black text-emerald-800 shadow-xs transition hover:bg-emerald-100 cursor-pointer flex items-center gap-1.5",title:"প্রারম্ভিক ক্যাশ/ব্যাংক দেখুন বা হাতে টাইপ করে সংশোধন করুন",children:[n.jsx("span",{children:"✏️"}),n.jsx("span",{children:"ওপেনিং"})]}),n.jsxs("button",{type:"button",onClick:()=>window.dispatchEvent(new CustomEvent("open-day-close-modal")),disabled:T.blocked,className:"rounded-xl bg-linear-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-3.5 py-1.5 text-xs font-black shadow-sm transition cursor-pointer flex items-center gap-1.5 disabled:opacity-50 disabled:cursor-not-allowed",title:T.blocked?"মধ্যবর্তী বন্ধের দিন (Day Close করা যাবে না)":"এই তারিখের হিসাব চূড়ান্তভাবে বন্ধ ও লক করুন",children:[n.jsx("span",{children:T.blocked?"🚫":"🔒"}),n.jsx("span",{children:T.blocked?"তারিখ ব্লকড":"Day Close করুন"})]}),n.jsx("button",{type:"button",onClick:()=>window.dispatchEvent(new CustomEvent("open-day-admin")),className:"shrink-0 rounded-xl border border-violet-300 bg-violet-50 px-2.5 py-1.5 text-xs font-black text-violet-700 shadow-xs transition hover:bg-violet-100 cursor-pointer",title:"⚙️ Day Admin — সব কর্মদিবস Close/Re-open/এডিট এক জায়গায়",children:"⚙️"})]})]})}const Pi=/^-?\d*\.?\d*$/;function rS({isOpen:l,onClose:o,selectedDate:u,onDayOpened:c}){const[d,f]=R.useState({cash:0,bank:0,dayName:""}),[A,b]=R.useState("0"),[h,L]=R.useState("0"),[y,g]=R.useState(""),[H,D]=R.useState(!1),[T,Z]=R.useState(!1),[O,G]=R.useState(!1),[ce,K]=R.useState("");if(R.useEffect(()=>{if(!(!l||!u))try{const be=_n(u,{skipManualOpeningFor:u}),[E,w,p]=u.split("-").map(Number),N=new Date(E,w-1,p),P=["রবিবার","সোমবার","মঙ্গলবার","বুধবার","বৃহস্পতিবার","শুক্রবার","শনিবার"],W=isNaN(N.getDay())?"":P[N.getDay()],F=Math.round(Number(be.prevCash)||0),U=Math.round(Number(be.prevBank)||0);f({cash:F,bank:U,prevDate:be.prevDate,dayName:W}),D(Gt(u)||!!fm(u));const j=fm(u);j&&j.manualOpening?(b(String(Math.round(Number(j.openingCash)||0))),L(String(Math.round(Number(j.openingBank)||0))),g(j.openingNote||""),Z(!0)):(b(String(F)),L(String(U)),g(""),Z(!1)),K("")}catch(be){console.error(be)}},[l,u]),!l)return null;const ee=Math.round(Number(A)||0),C=Math.round(Number(h)||0),V=ee-d.cash,re=C-d.bank,B=V!==0||re!==0,se=()=>{b(String(d.cash)),L(String(d.bank)),g(""),K("")},ie=()=>{if(Oe(u)){K(`🔒 ${Fe(u)||u} তারিখের দিন সমাপ্ত (Day Closed) — ওপেনিং বদলানো যাবে না।`);return}if(!Pi.test(String(A).trim())||!Pi.test(String(h).trim())){K("⚠️ সঠিক সংখ্যা দিন (যেমন: 50000 বা 50000.50)");return}if(!(B&&!window.confirm(`✍️ ওপেনিং হাতে বসানো হচ্ছে:

হাতে নগদ: ৳${de(d.cash)}  →  ৳${de(ee)}   (${V>=0?"+":"−"}৳${de(Math.abs(V))})
ব্যাংক: ৳${de(d.bank)}  →  ৳${de(C)}   (${re>=0?"+":"−"}৳${de(Math.abs(re))})

এই সংখ্যা থেকেই আজকের হিসাব এবং পরের কর্মদিবসগুলোর ওপেনিং চলবে।
নিশ্চিত করুন?`))){G(!0);try{qb(u,"Cashier",B?{cash:ee,bank:C,note:y}:null),c&&c(),o()}catch(be){K((be==null?void 0:be.message)||"দিন শুরু করতে সমস্যা হয়েছে।")}finally{G(!1)}}},te=be=>be===0?null:n.jsxs("span",{className:`mt-1 inline-block rounded-md border px-1.5 py-0.5 font-mono text-[10px] font-black ${be>0?"border-emerald-300 bg-emerald-100 text-emerald-800":"border-rose-300 bg-rose-100 text-rose-800"}`,children:["পার্থক্য ",be>0?"+":"−","৳",de(Math.abs(be))]}),ue="w-full rounded-lg border-2 bg-white px-2.5 py-2 text-right font-mono text-base font-black text-slate-900 outline-none focus:ring-2";return n.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-xs animate-in fade-in duration-150",children:n.jsxs("div",{className:"relative w-full max-w-lg max-h-[92vh] overflow-auto rounded-2xl bg-white shadow-2xl border border-slate-200",children:[n.jsxs("div",{className:"flex items-center justify-between border-b border-amber-200 bg-linear-to-r from-amber-500 to-orange-500 px-5 py-3.5 text-white",children:[n.jsxs("div",{className:"flex items-center gap-2.5",children:[n.jsx("span",{className:"flex h-9 w-9 items-center justify-center rounded-xl bg-white/20 text-xl font-bold shadow-xs",children:H?"✏️":"☀️"}),n.jsxs("div",{children:[n.jsx("h3",{className:"text-base font-black tracking-tight",children:H?"ওপেনিং সংশোধন (Opening Edit)":"কর্মদিবস শুরু (Day Open)"}),n.jsx("p",{className:"text-[11px] text-amber-100",children:"প্রারম্ভিক হাতে নগদ ও ব্যাংক স্থিতি — প্রয়োজনে হাতে টাইপ করে বসানো যাবে"})]})]}),n.jsx("button",{type:"button",onClick:o,className:"flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/30 transition text-sm font-bold cursor-pointer",children:"✕"})]}),n.jsxs("div",{className:"p-5 space-y-4 text-slate-800",children:[n.jsxs("div",{className:"rounded-xl border border-amber-200 bg-amber-50/70 p-3.5 flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsx("span",{className:"text-[11px] font-bold text-amber-800 uppercase tracking-wider block",children:H?"কর্মদিবস (Working Date)":"শুরু করার তারিখ (Working Date)"}),n.jsxs("span",{className:"font-mono text-lg font-black text-slate-900 mt-0.5 block",children:[u," ",n.jsxs("span",{className:"text-sm font-sans font-bold text-amber-900",children:["(",d.dayName,")"]})]})]}),n.jsx("span",{className:"rounded-lg bg-amber-500 px-2.5 py-1 text-xs font-black text-white shadow-xs",children:Fe(u)})]}),n.jsxs("div",{className:"rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-3",children:[n.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 text-xs border-b border-slate-200 pb-2",children:[n.jsx("span",{className:"font-bold text-slate-600",children:"পূর্ববর্তী সমাপ্ত কর্মদিবস:"}),n.jsxs("div",{className:"flex items-center gap-2",children:[T&&n.jsx("span",{className:"rounded border border-fuchsia-300 bg-fuchsia-50 px-2 py-0.5 text-[10px] font-black text-fuchsia-700",title:"এই দিনের ওপেনিং আগে হাতে বসানো হয়েছিল",children:"✍️ ম্যানুয়াল ওপেনিং বসানো আছে"}),n.jsx("span",{className:"font-mono font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200",children:d.prevDate?Fe(d.prevDate):"প্রারম্ভিক দিন"})]})]}),n.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1",children:[n.jsxs("div",{className:"rounded-xl bg-emerald-50 border border-emerald-300 p-3",children:[n.jsx("span",{className:"text-[11px] font-bold text-emerald-800 block text-center",children:"প্রারম্ভিক ক্যাশ (Cash in Hand)"}),n.jsxs("span",{className:"mt-1 block text-center text-[10px] font-bold text-emerald-700",children:["অ্যাপের হিসাব:"," ",n.jsxs("span",{className:"font-mono font-black",children:["৳",de(d.cash)]})]}),n.jsxs("div",{className:"mt-1.5 flex items-center gap-1",children:[n.jsx("span",{className:"text-sm font-black text-emerald-800",children:"৳"}),n.jsx("input",{value:A,onChange:be=>{Pi.test(be.target.value)&&(b(be.target.value),K(""))},inputMode:"decimal",autoComplete:"off",placeholder:"0",className:`${ue} border-emerald-400 focus:border-emerald-600 focus:ring-emerald-200`})]}),n.jsx("div",{className:"text-center",children:te(V)})]}),n.jsxs("div",{className:"rounded-xl bg-indigo-50 border border-indigo-300 p-3",children:[n.jsx("span",{className:"text-[11px] font-bold text-indigo-800 block text-center",children:"প্রারম্ভিক ব্যাংক স্থিতি (Bank)"}),n.jsxs("span",{className:"mt-1 block text-center text-[10px] font-bold text-indigo-700",children:["অ্যাপের হিসাব:"," ",n.jsxs("span",{className:"font-mono font-black",children:["৳",de(d.bank)]})]}),n.jsxs("div",{className:"mt-1.5 flex items-center gap-1",children:[n.jsx("span",{className:"text-sm font-black text-indigo-800",children:"৳"}),n.jsx("input",{value:h,onChange:be=>{Pi.test(be.target.value)&&(L(be.target.value),K(""))},inputMode:"decimal",autoComplete:"off",placeholder:"0",className:`${ue} border-indigo-400 focus:border-indigo-600 focus:ring-indigo-200`})]}),n.jsx("div",{className:"text-center",children:te(re)})]})]}),B&&n.jsxs("div",{className:"space-y-2 rounded-xl border-2 border-fuchsia-300 bg-fuchsia-50/70 p-3",children:[n.jsxs("div",{className:"flex items-center justify-between gap-2",children:[n.jsx("span",{className:"text-[11px] font-black text-fuchsia-900",children:"✍️ ম্যানুয়াল ওপেনিং — এই সংখ্যাই আজকের ওপেনিং এবং পরের কর্মদিবসের ওপেনিং হিসেবে চলবে"}),n.jsx("button",{type:"button",onClick:se,className:"shrink-0 rounded-lg border border-slate-300 bg-white px-2.5 py-1 text-[11px] font-bold text-slate-700 transition hover:bg-slate-100 cursor-pointer",title:"অ্যাপের নিজের হিসাবে ফিরে যান",children:"↺ সিস্টেম মান"})]}),n.jsx("input",{value:y,onChange:be=>g(be.target.value),placeholder:"কারণ / নোট (ঐচ্ছিক) — যেমন: গত ছুটির দিনের হাতে নগদ সমন্বয়",autoComplete:"off",className:"w-full rounded-lg border border-fuchsia-300 bg-white px-3 py-2 text-xs font-semibold text-slate-900 outline-none focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-200"})]})]}),ce&&n.jsx("div",{className:"rounded-xl border border-rose-300 bg-rose-50 px-3 py-2 text-[11px] font-bold text-rose-800",children:ce}),n.jsxs("div",{className:"rounded-xl bg-blue-50 border border-blue-200 p-3 text-xs text-blue-900 flex items-start gap-2",children:[n.jsx("span",{className:"text-base shrink-0",children:"ℹ️"}),n.jsxs("p",{className:"leading-relaxed font-medium text-[11px] sm:text-xs",children:["সাধারণত অ্যাপের দেখানো সংখ্যাটাই ঠিক থাকে — সেটা আগের কর্মদিবসের ক্লোজিং। ছুটির দিন বা হাতের হিসাবে মিল না থাকলে উপরের ঘরে ",n.jsx("strong",{children:"হাতে টাইপ করে"})," ওপেনিং বসিয়ে দিন। দিন শুরু করার পরেও ",n.jsx("strong",{children:"Working-Day বারের ✏️ ওপেনিং"})," বাটন থেকে যেকোনো সময় সংশোধন করা যাবে (Day Close করার আগ পর্যন্ত)।"]})]})]}),n.jsxs("div",{className:"sticky bottom-0 flex items-center justify-end gap-2.5 border-t border-slate-200 bg-slate-50 px-5 py-3.5",children:[n.jsx("button",{type:"button",onClick:o,disabled:O,className:"rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 px-4 py-2 text-xs font-bold transition cursor-pointer",children:"বাতিল"}),n.jsxs("button",{type:"button",onClick:ie,disabled:O,className:"rounded-xl bg-linear-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-5 py-2 text-xs font-black shadow-md transition flex items-center gap-1.5 cursor-pointer disabled:opacity-50",children:[n.jsx("span",{children:H?"💾":"☀️"}),n.jsx("span",{children:O?"সেভ হচ্ছে...":H?B?"ওপেনিং সংশোধন করুন":"সেভ করুন":B?"ম্যানুয়াল ওপেনিং দিয়ে দিন শুরু করুন":"নিশ্চিত করুন ও দিন শুরু করুন"})]})]})]})})}const oS=()=>as().map(l=>l.name),iS=(l,o)=>{const u=l.toLowerCase().trim(),c=o.toLowerCase().trim();return u===c||u.includes(c)||c.includes(u)};function Nm(l){const o=Ln(l),u=ln(),c=_n(l),d=c.prevCash,f=c.prevBank,A=xa("disburse").map(_=>_.name.toLowerCase().trim()),b=u.filter(_=>_.txDate===l),h=b.filter(_=>_.type==="receive"),L=b.filter(_=>_.type==="payment"),y=o.reduce((_,x)=>_+Number(x.loan||0),0),g=o.reduce((_,x)=>_+Number(x.savings||0),0),H=o.reduce((_,x)=>_+Number(x.dps||0),0),D=g+H,T=o.reduce((_,x)=>_+Number(x.passbook||0),0),Z=o.reduce((_,x)=>_+Number(x.admission||0),0),O=y+D+T+Z,G=o.reduce((_,x)=>_+Number(x.savingsAdjust||0),0),ce=o.reduce((_,x)=>_+Number(x.nogodReturn||0),0),K=G+ce,ee=O,C=d,V=h.filter(_=>_.category.toLowerCase().includes("bank withdraw")).reduce((_,x)=>_+(Number(x.amount)||0),0),re=L.filter(_=>{const x=_.category.toLowerCase().trim();return x.includes("fund payment")||x.includes("fund transfer")||x.includes("fund")&&!x.includes("receive")?!1:A.includes(x)||x.includes("jagoron")||x.includes("agrossor")||x.includes("buni")||x.includes("sufolon")||x.includes("mfce")||!!(_.subCategory&&_.subCategory.trim().length>0)});let B=0,se=0;for(const _ of re){const x=Number(_.amount)||0;_.category.toLowerCase().trim().includes("buni")?B+=x:se+=x}const ie=Math.round(se*.01+B*.005),te=re.length*5,ue=h.filter(_=>{const x=_.category.toLowerCase().trim();return!(x.includes("bank withdraw")||x.includes("fund receive")||x.includes("welfare")||x.includes("kallayan")||x.includes("loan form")||oS().some(Q=>iS(x,Q)))}).reduce((_,x)=>_+(Number(x.amount)||0),0),be=re.reduce((_,x)=>_+(Number(x.amount)||0),0),E=L.filter(_=>_.category.toLowerCase().includes("bank deposit")||_.category.toLowerCase().includes("bank deposite")).reduce((_,x)=>_+(Number(x.amount)||0),0),w=K,p=L.filter(_=>{const x=_.category.toLowerCase().trim();return x.includes("fund payment")||x.includes("fund transfer")||x.includes("fund")&&!x.includes("receive")}).reduce((_,x)=>_+(Number(x.amount)||0),0),N=L.filter(_=>{const x=_.category.toLowerCase().trim();return!(re.some(Q=>Q.id===_.id)||x.includes("bank deposit")||x.includes("bank deposite")||x.includes("fund payment")||x.includes("fund transfer")||x.includes("fund")&&!x.includes("receive"))}).reduce((_,x)=>_+(Number(x.amount)||0),0),P=[{label:"Today All Aday",amount:ee},{label:"Hand Cash",amount:C},{label:"Bank Withdraw",amount:V},{label:"Kallayan",amount:ie},{label:"Loan Form",amount:te},{label:"Others Income",amount:ue}].filter(_=>_.amount>0),W=[{label:"Disburse",amount:be},{label:"Bank Deposit",amount:E},{label:"Savings Return",amount:w},{label:"Fund Payment",amount:p},{label:"Others Expense",amount:N}].filter(_=>_.amount>0),F=P.reduce((_,x)=>_+x.amount,0),U=W.reduce((_,x)=>_+x.amount,0),j=h.filter(_=>_.category.toLowerCase().includes("fund receive")).reduce((_,x)=>_+(Number(x.amount)||0),0);return{cash:F-U,bank:f-V+E+j}}function cS({isOpen:l,onClose:o,selectedDate:u,onDayClosed:c}){const[d,f]=R.useState(0),[A,b]=R.useState(0),[h,L]=R.useState(0),[y,g]=R.useState(0),[H,D]=R.useState(!1);if(R.useEffect(()=>{if(!(!l||!u))try{const O=_n(u),G=Nm(u);f(O.receive||0),b(O.expense||0),L(G.cash||0),g(G.bank||0)}catch(O){console.error(O)}},[l,u]),!l)return null;const T=Rt(u),Z=()=>{if(!Gt(u)){alert(`⚠️ ${u} তারিখে কোনো চলমান কর্মদিবস নেই। আগে Day Open করুন।`),o();return}if(T.blocked){alert(T.reason||"এই তারিখটি ব্লকড।"),o();return}D(!0);try{const O=_n(u),G=Nm(u),ce={closeDate:u,openingCash:O.prevCash,openingBank:O.prevBank,closingCash:G.cash,closingBank:G.bank,totalReceive:O.receive,totalPayment:O.expense,status:"closed",closedAt:new Date().toISOString(),closedBy:"Cashier",notes:"Day closed from Working-Day control"};Vb(ce),c&&c(),o()}catch(O){alert(O.message||"দিন ক্লোজ করতে সমস্যা হয়েছে।")}finally{D(!1)}};return ic.createPortal(n.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-xs animate-in fade-in duration-150",children:n.jsxs("div",{className:"relative w-full max-w-md rounded-2xl bg-white shadow-2xl border border-slate-200 overflow-hidden",children:[n.jsxs("div",{className:"flex items-center justify-between border-b border-emerald-200 bg-linear-to-r from-emerald-600 to-teal-600 px-5 py-3.5 text-white",children:[n.jsxs("div",{className:"flex items-center gap-2.5",children:[n.jsx("span",{className:"flex h-9 w-9 items-center justify-center rounded-xl bg-white/20 text-xl font-bold shadow-xs",children:"🔒"}),n.jsxs("div",{children:[n.jsx("h3",{className:"text-base font-black tracking-tight",children:"Day Close (দিন সমাপ্তি)"}),n.jsx("p",{className:"text-[11px] text-emerald-100",children:"কর্মদিবসটি বন্ধ ও লক করা হবে"})]})]}),n.jsx("button",{type:"button",onClick:o,className:"flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/30 transition text-sm font-bold cursor-pointer",children:"✕"})]}),n.jsxs("div",{className:"p-5 space-y-3.5 text-slate-800",children:[n.jsxs("div",{className:"rounded-xl border border-emerald-200 bg-emerald-50/60 p-3.5 flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsx("span",{className:"text-[11px] font-bold text-emerald-800 uppercase tracking-wider block",children:"সমাপ্ত করার তারিখ (Working Date)"}),n.jsx("span",{className:"font-mono text-lg font-black text-slate-900 mt-0.5 block",children:u})]}),n.jsx("span",{className:"rounded-lg bg-emerald-600 px-2.5 py-1 text-xs font-black text-white shadow-xs",children:Fe(u)})]}),n.jsxs("div",{className:"rounded-xl bg-slate-50 border border-slate-200 p-3 space-y-1.5 text-xs sm:text-sm",children:[n.jsxs("div",{className:"flex justify-between",children:[n.jsx("span",{className:"text-slate-600 font-semibold",children:"মোট রিসিভ:"}),n.jsx("span",{className:"font-mono font-black text-emerald-700",children:de(d)})]}),n.jsxs("div",{className:"flex justify-between",children:[n.jsx("span",{className:"text-slate-600 font-semibold",children:"মোট পেমেন্ট:"}),n.jsx("span",{className:"font-mono font-black text-rose-700",children:de(A)})]}),n.jsxs("div",{className:"mt-1.5 flex justify-between border-t border-slate-300 pt-1.5",children:[n.jsx("span",{className:"text-emerald-800 font-bold",children:"Today Cash:"}),n.jsx("span",{className:"font-mono font-black text-emerald-700",children:de(h)})]}),n.jsxs("div",{className:"flex justify-between",children:[n.jsx("span",{className:"text-indigo-800 font-bold",children:"Today Bank:"}),n.jsx("span",{className:"font-mono font-black text-indigo-700",children:de(y)})]})]}),n.jsxs("div",{className:"rounded-xl border border-emerald-300 bg-emerald-50 p-3 text-xs text-emerald-900 font-medium leading-relaxed",children:["✓ নিশ্চিত করলে এই তারিখের কর্মদিবসটি বন্ধ (Day Closed) হয়ে যাবে এবং এই তারিখের রিসিভ, পেমেন্ট ও স্টাফ কালেকশন — সব এন্ট্রি সম্পূর্ণ লক হয়ে যাবে।",n.jsxs("span",{className:"block mt-1 text-emerald-800",children:["পুনরায় কাজ করার প্রয়োজন হলে ",n.jsx("strong",{children:"Working-Day বার"})," থেকে"," ",n.jsx("strong",{children:"Re-open Day"})," করবেন।"]})]})]}),n.jsxs("div",{className:"flex items-center justify-end gap-2.5 border-t border-slate-200 bg-slate-50 px-5 py-3.5",children:[n.jsx("button",{type:"button",onClick:o,disabled:H,className:"rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 px-4 py-2 text-xs font-bold transition cursor-pointer",children:"বাতিল"}),n.jsxs("button",{type:"button",onClick:Z,disabled:H,className:"rounded-xl bg-linear-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-5 py-2 text-xs font-black shadow-md transition flex items-center gap-1.5 cursor-pointer disabled:opacity-50",children:[n.jsx("span",{children:"🔒"}),n.jsx("span",{children:H?"ক্লোজ হচ্ছে...":"হ্যাঁ, ডে ক্লোজ করুন"})]})]})]})}),document.body)}const uS=()=>{var u,c,d,f;const l=new Set;for(const A of dl())(u=A.closeDate)!=null&&u.includes("-")&&l.add(A.closeDate);for(const A of Ks())(c=A.openDate)!=null&&c.includes("-")&&l.add(A.openDate);for(const A of ln())(d=A.txDate)!=null&&d.includes("-")&&l.add(A.txDate);for(const A of Ln())(f=A.reportDate)!=null&&f.includes("-")&&l.add(A.reportDate);const o=new Map;for(const A of ln())o.set(A.txDate,(o.get(A.txDate)||0)+1);for(const A of Ln())o.set(A.reportDate,(o.get(A.reportDate)||0)+1);return Array.from(l).sort().reverse().map(A=>({date:A,closed:Oe(A),open:Gt(A),entries:o.get(A)||0,closure:Tm(A)}))},dS=(l,o="Admin")=>{const u=_n(l),c=Nm(l);return Vb({closeDate:l,openingCash:u.prevCash,openingBank:u.prevBank,closingCash:c.cash,closingBank:c.bank,totalReceive:u.receive,totalPayment:u.expense,status:"closed",closedAt:new Date().toISOString(),closedBy:o,notes:"Closed from ⚙️ Day Admin"})};function mS({isOpen:l,onClose:o,onJumpDate:u}){const[c,d]=R.useState(0),[f,A]=R.useState(""),[b,h]=R.useState(null),L=R.useMemo(()=>l?uS():[],[l,c]),y=R.useMemo(()=>{const O=L.filter(G=>G.open&&!G.closed).map(G=>G.date).sort();return O.length?O[0]:null},[L]);if(R.useEffect(()=>{l&&(d(O=>O+1),h(null))},[l]),!l)return null;const g=()=>d(O=>O+1),H=O=>{if(confirm(`🔒 ${Fe(O)||O} — এই কর্মদিবসটি ক্লোজ (লক) করবেন?

ক্লোজ হলে এই তারিখের সব এন্ট্রি লক হয়ে যাবে (প্রয়োজনে এখান থেকেই Re-open করা যাবে)।`)){try{dS(O),h({ok:!0,text:`✅ ${Fe(O)||O} — Day Closed হয়েছে।`})}catch(G){h({ok:!1,text:(G==null?void 0:G.message)||"ক্লোজ করা গেল না।"})}g()}},D=O=>{if(confirm(`🔓 ${Fe(O)||O} — এই দিনটি আবার আনলক (Re-open) করবেন?

আনলক হলে এই তারিখে আবার এন্ট্রি/এডিট করা যাবে।`)){try{Am(O),h({ok:!0,text:`🔓 ${Fe(O)||O} — আবার খোলা হয়েছে।`})}catch(G){h({ok:!1,text:(G==null?void 0:G.message)||"Re-open করা গেল না।"})}g()}},T=O=>{const G=Oe(O);if(!(G&&!confirm(`🔓 ${Fe(O)||O} দিনটি ক্লোজড।

এডিট করতে হলে আগে আনলক (Re-open) করতে হবে — আনলক করে সেই দিনে যাবেন?`))){try{G&&Am(O)}catch{}g(),u&&u(O)}},Z=()=>{const O=f;if(!O)return h({ok:!1,text:"আগে একটি তারিখ বেছে নিন।"});if(Oe(O))return h({ok:!1,text:`${O} ক্লোজড — Day Open না, আগে Re-open করুন।`});if(Gt(O))return h({ok:!1,text:`${O} ইতিমধ্যেই খোলা আছে।`});try{qb(O,"Admin",null,{force:!0}),h({ok:!0,text:`☀️ ${Fe(O)||O} — Day Open হয়েছে (অ্যাডমিন)।`}),A("")}catch(G){h({ok:!1,text:(G==null?void 0:G.message)||"Day Open করা গেল না।"})}g()};return ic.createPortal(n.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-3 backdrop-blur-xs animate-in fade-in duration-150",children:n.jsxs("div",{className:"relative flex max-h-[92vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl",children:[n.jsxs("div",{className:"flex items-center justify-between border-b border-violet-200 bg-linear-to-r from-violet-700 to-indigo-600 px-5 py-3.5 text-white",children:[n.jsxs("div",{className:"flex items-center gap-2.5",children:[n.jsx("span",{className:"flex h-9 w-9 items-center justify-center rounded-xl bg-white/20 text-xl font-bold shadow-xs",children:"⚙️"}),n.jsxs("div",{children:[n.jsx("h3",{className:"text-base font-black tracking-tight",children:"Day Admin — কর্মদিবস নিয়ন্ত্রণ"}),n.jsx("p",{className:"text-[11px] text-violet-100",children:"যেকোনো দিন Close / Re-open / এডিট — এখান থেকেই"})]})]}),n.jsx("button",{type:"button",onClick:o,className:"flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white transition hover:bg-white/30 text-sm font-bold cursor-pointer",children:"✕"})]}),n.jsx("div",{className:`border-b px-4 py-2 text-[11px] font-black ${y?"border-amber-300 bg-amber-50 text-amber-900":"border-emerald-300 bg-emerald-50 text-emerald-900"}`,children:y?n.jsxs(n.Fragment,{children:["⚠️ সিকোয়েন্স-নিয়ম: ",n.jsx("span",{className:"font-mono",children:Fe(y)||y})," ","খোলা আছে — এটা Close না করলে পরের দিন Day Open হবে না।"]}):n.jsx(n.Fragment,{children:"✓ সব কর্মদিবস ধারাবাহিক — কোনো দিন আটকে নেই।"})}),b&&n.jsx("div",{className:`border-b px-4 py-2 text-[11px] font-bold ${b.ok?"border-emerald-200 bg-emerald-50 text-emerald-800":"border-rose-200 bg-rose-50 text-rose-800"}`,children:b.text}),n.jsxs("div",{className:"flex flex-wrap items-center gap-2 border-b border-slate-200 bg-slate-50 px-4 py-2.5",children:[n.jsx("span",{className:"text-[11px] font-black text-slate-700",children:"☀️ অ্যাডমিন Day Open:"}),n.jsx(bn,{value:f,onChange:A,manualEntry:!0,className:"w-36 px-2 py-1 text-xs"}),n.jsx("button",{type:"button",onClick:Z,className:"rounded-lg bg-linear-to-r from-amber-600 to-orange-600 px-3 py-1.5 text-[11px] font-black text-white shadow-xs transition hover:from-amber-700 hover:to-orange-700 cursor-pointer",title:"সিকোয়েন্স-নিয়ম বাইপাস করে যেকোনো দিন খুলুন",children:"☀️ Day Open (নিয়ম-বাইপাস)"})]}),n.jsx("div",{className:"flex-1 space-y-2 overflow-auto p-3.5",children:L.length===0?n.jsx("p",{className:"py-10 text-center text-xs font-semibold text-slate-400",children:"এখনো কোনো কর্মদিবসের রেকর্ড নেই।"}):L.map(O=>n.jsxs("div",{className:`rounded-xl border p-3 ${O.closed?"border-rose-200 bg-rose-50/50":"border-emerald-300 bg-emerald-50/40"}`,children:[n.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[n.jsx("span",{className:"text-base",children:O.closed?"🔒":"☀️"}),n.jsx("span",{className:"font-mono text-sm font-black text-slate-900",children:O.date}),n.jsx("span",{className:"text-[11px] font-bold text-slate-500",children:Fe(O.date)}),n.jsx("span",{className:`rounded-full px-2 py-0.5 text-[10px] font-black ${O.closed?"bg-rose-600 text-white":"bg-emerald-600 text-white"}`,children:O.closed?"Day Closed":"Open"}),n.jsxs("span",{className:"ml-auto text-[10px] font-bold text-slate-500",children:["এন্ট্রি: ",n.jsx("span",{className:"font-mono",children:O.entries})]})]}),O.closure&&n.jsxs("div",{className:"mt-1.5 flex flex-wrap gap-x-3 gap-y-0.5 text-[10px] font-bold text-slate-600",children:[n.jsxs("span",{children:["ওপেনিং: ৳",de(O.closure.openingCash)," / ব্যাংক ৳",de(O.closure.openingBank)]}),n.jsxs("span",{children:["ক্লোজিং: ৳",de(O.closure.closingCash)," / ব্যাংক ৳",de(O.closure.closingBank)]}),O.closure.closedAt&&n.jsxs("span",{className:"text-slate-400",children:["ক্লোজ: ",new Date(O.closure.closedAt).toLocaleString("en-GB")]})]}),n.jsxs("div",{className:"mt-2 flex flex-wrap items-center gap-1.5",children:[O.closed?n.jsx("button",{type:"button",onClick:()=>D(O.date),className:"rounded-lg bg-amber-600 px-3 py-1.5 text-[11px] font-black text-white shadow-xs transition hover:bg-amber-700 cursor-pointer",title:"দিনটি আবার আনলক করুন",children:"🔓 Re-open Day"}):n.jsx("button",{type:"button",onClick:()=>H(O.date),className:"rounded-lg bg-linear-to-r from-emerald-600 to-teal-600 px-3 py-1.5 text-[11px] font-black text-white shadow-xs transition hover:from-emerald-700 hover:to-teal-700 cursor-pointer",title:"এই দিনটি শুধু এখানেই সরাসরি ক্লোজ করুন",children:"🔒 Day Close"}),n.jsx("button",{type:"button",onClick:()=>T(O.date),className:"rounded-lg border border-indigo-300 bg-indigo-50 px-3 py-1.5 text-[11px] font-black text-indigo-700 transition hover:bg-indigo-100 cursor-pointer",title:O.closed?"আনলক করে সেই তারিখে এডিট করতে যান":"সেই তারিখে গিয়ে এন্ট্রি/এডিট করুন",children:"✏️ এই দিনে এডিট"})]})]},O.date))}),n.jsx("div",{className:"border-t border-slate-200 bg-slate-50 px-4 py-2.5 text-[10px] font-semibold text-slate-500",children:"ℹ️ Day Close/এডিট সব ডিভাইসে ক্লাউডের মাধ্যমে সিঙ্ক হয়। পুরনো দিন এডিট শেষ হলে মনে রাখবেন — দিনটি আবার Close করে দিন (না করলে পরের দিন খোলা যাবে না)।"})]})}),document.body)}const vm="1.4.170";async function AS(){try{if("serviceWorker"in navigator){const l=await navigator.serviceWorker.getRegistrations();await Promise.all(l.map(o=>o.unregister()))}if("caches"in window){const l=await caches.keys();await Promise.all(l.map(o=>caches.delete(o)))}}catch(l){console.warn("[version] clear failed",l)}}const xp="gobra_update_dismissed_for";let ac="";function fS(){try{ac&&sessionStorage.setItem(xp,ac)}catch{}}async function hp(){await AS();const l=new URL(window.location.href);l.searchParams.set("_v",String(Date.now())),window.location.replace(l.toString())}function xS(l){if(typeof window>"u")return;const o=async()=>{try{const c=await fetch(`/version.json?t=${Date.now()}`,{cache:"no-store"});if(!c.ok)return;const d=await c.json();if(d&&d.version&&d.version!==vm){ac=d.version;try{if(sessionStorage.getItem(xp)===d.version)return}catch{}l()}}catch{}};if("serviceWorker"in navigator){navigator.serviceWorker.register("/sw.js",{updateViaCache:"none"}).then(d=>{d.update(),d.addEventListener("updatefound",()=>{const f=d.installing;f&&f.addEventListener("statechange",()=>{f.state==="installed"&&navigator.serviceWorker.controller&&l()})})}).catch(d=>console.warn("[sw] register failed",d));let c=!1;navigator.serviceWorker.addEventListener("controllerchange",()=>{c||(c=!0,window.location.reload())})}(async()=>{const c="gobra_force_reload_done";if(!sessionStorage.getItem(c))try{const d=await fetch(`/version.json?t=${Date.now()}`,{cache:"no-store"});if(!d.ok)return;const f=await d.json();f&&f.version&&f.version!==vm&&(ac=f.version,sessionStorage.setItem(c,"1"),await hp())}catch{}})().then(o).catch(o),window.setInterval(o,6e4),window.addEventListener("focus",o),document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&o()})}const ts={},_i=String((ts==null?void 0:ts.VITE_GOOGLE_CLIENT_ID)||"161441191624-q3e0gtm5avvvo3f8qpclph8ukleqshvb.apps.googleusercontent.com"),fb=String((ts==null?void 0:ts.VITE_GOOGLE_ORIGIN)||"https://cash-gobra-bkf.netlify.app"),hS=String((ts==null?void 0:ts.VITE_GOOGLE_ORIGINS)||"https://cash-gobra-bkf.netlify.app,https://live--cash-gobra-bkf.netlify.app").split(",").map(l=>l.trim()).filter(Boolean),xb=()=>{try{return hS.includes(window.location.origin)||window.location.hostname==="localhost"}catch{return!0}};function bS({onAuthed:l}){const[o,u]=R.useState("in"),[c,d]=R.useState(!1),[f,A]=R.useState(""),[b,h]=R.useState(!1),[L,y]=R.useState(""),[g,H]=R.useState(""),[D,T]=R.useState(""),[Z,O]=R.useState(""),[G,ce]=R.useState(""),[K,ee]=R.useState(""),[C,V]=R.useState(""),[re,B]=R.useState([]);R.useEffect(()=>{B(dc().map(N=>({id:N.id,name:N.name})))},[o]);const se="w-full rounded-xl border-2 border-slate-300 bg-white px-3.5 py-2.5 text-sm font-bold text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200",ie="mb-1 block text-[11px] font-black uppercase tracking-wide text-slate-600",te=N=>N.replace(/[^0-9+]/g,"").slice(0,16),ue=async()=>{const N=g;try{const P=await N2(L,N);if(P.ok&&P.token&&P.user){l(Ji(String(P.user.mobile||L),P.user.branchId,{name:P.user.name}));return}if(P.pending){A(P.error||"⏳ অ্যাডমিনের অনুমতির অপেক্ষা রয়েছে।");return}if(!(P.error==="server error"||!P.error)){A(P.error);return}}catch{}await be()},be=async()=>{A(""),d(!0);try{const N=await y5(L,g);if(!N.ok||!N.session){A(N.error||"সাইন ইন করা যায়নি।");return}l(N.session)}catch(N){A((N==null?void 0:N.message)||"সাইন ইন করা যায়নি।")}finally{d(!1)}},E=async()=>{A(""),d(!0);try{const N=G.trim().toLowerCase().replace(/[^a-z0-9_]/g,"_"),P=p&&p.id||N||"gobra",W=await v2({name:D.trim(),mobile:Z,password:K,branchId:P});if(W.ok&&W.token&&W.user){l(Ji(String(W.user.mobile||Z),String(W.user.branchId||P),{name:W.user.name||D.trim()})),d(!1);return}if(W.ok||W.pending){A(W.message||"⏳ অনুমতির জন্য জমা হয়েছে।"),d(!1);return}if(W.error&&W.error!=="server error"){A(W.error),d(!1);return}}catch{}try{const N=await N5({name:D,mobile:Z,branchName:G,password:K,confirmPassword:C});if(!N.ok||!N.session){A(N.error||"সাইন আপ করা যায়নি।");return}l(N.session)}catch(N){A((N==null?void 0:N.message)||"সাইন আপ করা যায়নি।")}finally{d(!1)}},w=R.useRef(null);R.useEffect(()=>{if(!_i||o!=="in")return;let N=!1;return(async()=>{try{if(await C2(),N||!w.current)return;const P=window.google;P.accounts.id.initialize({client_id:_i,callback:async W=>{A(""),d(!0);try{const F=await L2(String((W==null?void 0:W.credential)||""));F.ok&&F.token&&F.user?l(Ji(String(F.user.mobile||F.user.email||"google-user"),F.user.branchId,{name:F.user.name})):A(F.error||F.message||(F.pending?"⏳ অ্যাডমিনের অনুমতির অপেক্ষা রয়েছে।":"Google লগইন হয়নি।"))}catch{A("Google লগইনে সমস্যা — ইন্টারনেট দেখুন।")}finally{d(!1)}}}),P.accounts.id.renderButton(w.current,{theme:"outline",size:"large",width:320,text:"signin_with",locale:"bn"})}catch{}})(),()=>{N=!0}},[o]);const p=re.find(N=>N.name.trim().toLowerCase()===G.trim().toLowerCase());return n.jsx("div",{className:"min-h-screen w-full bg-linear-to-br from-slate-200 via-blue-100 to-emerald-100 px-3 py-6 sm:py-10",children:n.jsxs("div",{className:"mx-auto w-full max-w-md",children:[n.jsxs("div",{className:"mb-4 flex items-center justify-center gap-3",children:[n.jsx("img",{src:dp,alt:"BKF Logo",className:"h-14 w-auto object-contain drop-shadow"}),n.jsxs("div",{children:[n.jsx("h1",{className:"text-xl font-black leading-tight text-slate-900 sm:text-2xl",children:"Bandhu Kallyan Foundation"}),n.jsx("p",{className:"text-[11px] font-bold text-slate-600 sm:text-xs",children:"🏢 মাল্টি অফিস হিসাব সিস্টেম — প্রতি অফিসের খতিয়ান সম্পূর্ণ আলাদা"})]})]}),n.jsxs("div",{className:"overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl",children:[n.jsxs("div",{className:"grid grid-cols-2 border-b border-slate-200 bg-slate-50",children:[n.jsx("button",{type:"button",onClick:()=>{u("in"),A("")},className:`px-4 py-3 text-sm font-black transition cursor-pointer ${o==="in"?"bg-white text-indigo-700 border-b-2 border-indigo-600":"text-slate-500 hover:text-slate-700"}`,children:"🔓 সাইন ইন"}),n.jsx("button",{type:"button",onClick:()=>{u("up"),A("")},className:`px-4 py-3 text-sm font-black transition cursor-pointer ${o==="up"?"bg-white text-emerald-700 border-b-2 border-emerald-600":"text-slate-500 hover:text-slate-700"}`,children:"📝 সাইন আপ"})]}),n.jsxs("div",{className:"space-y-3 p-4 sm:p-5",children:[o==="in"?n.jsxs(n.Fragment,{children:[n.jsxs("div",{children:[n.jsx("label",{className:ie,children:"ইউজার আইডি (মোবাইল নম্বর)"}),n.jsx("input",{value:L,onChange:N=>y(te(N.target.value)),onKeyDown:N=>N.key==="Enter"&&ue(),placeholder:"01XXXXXXXXX",inputMode:"numeric",autoComplete:"username",className:se})]}),n.jsxs("div",{children:[n.jsx("label",{className:ie,children:"পাসওয়ার্ড"}),n.jsxs("div",{className:"relative",children:[n.jsx("input",{value:g,onChange:N=>H(N.target.value),onKeyDown:N=>N.key==="Enter"&&ue(),placeholder:"পাসওয়ার্ড",type:b?"text":"password",autoComplete:"current-password",className:`${se} pr-14`}),n.jsx("button",{type:"button",onClick:()=>h(N=>!N),title:b?"পাসওয়ার্ড লুকান":"পাসওয়ার্ড দেখুন",className:"absolute right-2 top-1/2 -translate-y-1/2 rounded-lg bg-slate-100 px-2 py-1 text-[11px] font-black text-slate-600 hover:bg-slate-200 cursor-pointer",children:b?"লুকান":"দেখুন"})]})]}),n.jsx("button",{type:"button",onClick:ue,disabled:c,className:"mt-1 w-full rounded-xl bg-linear-to-r from-indigo-600 to-blue-600 px-4 py-3 text-sm font-black text-white shadow-md transition hover:from-indigo-700 hover:to-blue-700 disabled:opacity-50 cursor-pointer",children:c?"অপেক্ষা করুন…":"🔓 সাইন ইন করুন"}),_i&&!xb()&&n.jsxs("div",{className:"rounded-xl border-2 border-rose-300 bg-rose-50 px-3 py-2.5 text-[11px] font-bold leading-relaxed text-rose-800",children:["⚠️ Google লগইন এই ঠিকানায় চলবে না। যথাযথ ঠিকানা:"," ",n.jsx("a",{href:fb,className:"font-black underline",children:fb})," ","— এটা খুলে লগইন করুন।"]}),_i&&xb()&&n.jsxs("div",{className:"space-y-2",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("div",{className:"h-px flex-1 bg-slate-300"}),n.jsx("span",{className:"text-[10px] font-black text-slate-500",children:"অথবা"}),n.jsx("div",{className:"h-px flex-1 bg-slate-300"})]}),n.jsx("div",{ref:w,className:"flex justify-center"}),n.jsx("p",{className:"text-center text-[10px] font-semibold text-slate-500",children:"🛡️ নতুন Google অ্যাকাউন্টে অ্যাডমিনের অনুমতি লাগবে"})]}),n.jsx("p",{className:"rounded-xl border border-blue-200 bg-blue-50 px-3 py-2 text-[11px] font-semibold leading-relaxed text-blue-900",children:"💡 মোবাইল নম্বরই আপনার ইউজার আইডি। যে অফিসের আইডি দিয়ে ঢুকবেন, সেই অফিসের হিসাবই দেখতে ও লিখতে পারবেন — অন্য অফিসের ডেটা আলাদা থাকবে।"})]}):n.jsxs(n.Fragment,{children:[n.jsxs("div",{children:[n.jsx("label",{className:ie,children:"নাম (Name)"}),n.jsx("input",{value:D,onChange:N=>T(N.target.value),placeholder:"আপনার নাম",autoComplete:"name",className:se})]}),n.jsxs("div",{children:[n.jsx("label",{className:ie,children:"মোবাইল নম্বর (Mobile Number) — এটাই ইউজার আইডি"}),n.jsx("input",{value:Z,onChange:N=>O(te(N.target.value)),placeholder:"01XXXXXXXXX",inputMode:"numeric",autoComplete:"username",className:`${se} ${Z&&!nc(Z)?"border-rose-400":""}`}),Z&&!nc(Z)&&n.jsx("p",{className:"mt-1 text-[10px] font-bold text-rose-600",children:"সঠিক মোবাইল নম্বর দিন (কমপক্ষে ৬ ডিজিট)"})]}),n.jsxs("div",{children:[n.jsx("label",{className:ie,children:"অফিস / শাখা (Branch)"}),n.jsx("input",{value:G,onChange:N=>ce(N.target.value),placeholder:"যেমন: GOBRA BRANCH-0014 বা নতুন শাখার নাম",list:"branch-list",className:se}),n.jsx("datalist",{id:"branch-list",children:re.map(N=>n.jsx("option",{value:N.name},N.id))}),n.jsx("p",{className:"mt-1 text-[10px] font-bold text-slate-500",children:p?`✓ "${p.name}" শাখা আগে থেকেই আছে — সেখানেই যুক্ত হবেন (একই হিসাব)`:"নতুন শাখার নাম লিখলে নতুন অফিস তৈরি হবে — খতিয়ান একদম খালি ও আলাদা থাকবে"})]}),n.jsxs("div",{className:"grid grid-cols-1 gap-3 sm:grid-cols-2",children:[n.jsxs("div",{children:[n.jsx("label",{className:ie,children:"পাসওয়ার্ড"}),n.jsx("input",{value:K,onChange:N=>ee(N.target.value),placeholder:"কমপক্ষে ৬ অক্ষর",type:b?"text":"password",autoComplete:"new-password",className:se})]}),n.jsxs("div",{children:[n.jsx("label",{className:ie,children:"কনফার্ম পাসওয়ার্ড"}),n.jsx("input",{value:C,onChange:N=>V(N.target.value),onKeyDown:N=>N.key==="Enter"&&E(),placeholder:"আবার লিখুন",type:b?"text":"password",autoComplete:"new-password",className:`${se} ${C&&C!==K?"border-rose-400":""}`})]})]}),n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("label",{className:"flex cursor-pointer select-none items-center gap-1.5 text-[11px] font-bold text-slate-600",children:[n.jsx("input",{type:"checkbox",checked:b,onChange:N=>h(N.target.checked),className:"h-3.5 w-3.5 cursor-pointer accent-indigo-600"}),"পাসওয়ার্ড দেখান"]}),K&&C&&K===C&&n.jsx("span",{className:"text-[11px] font-black text-emerald-700",children:"✓ মিলেছে"})]}),n.jsx("button",{type:"button",onClick:E,disabled:c,className:"mt-1 w-full rounded-xl bg-linear-to-r from-emerald-600 to-teal-600 px-4 py-3 text-sm font-black text-white shadow-md transition hover:from-emerald-700 hover:to-teal-700 disabled:opacity-50 cursor-pointer",children:c?"অপেক্ষা করুন…":"📝 সাইন আপ করুন"})]}),f&&n.jsxs("div",{className:"rounded-xl border border-rose-300 bg-rose-50 px-3 py-2 text-[11px] font-black text-rose-800",children:["⚠️ ",f]})]})]}),n.jsx("p",{className:"mt-3 text-center text-[10px] font-semibold text-slate-500",children:"প্রতি অফিসের কর্মী, হিসাব, ডে-ক্লোজ ও ক্যাশবুক সম্পূর্ণ আলাদা • ডেটা এই ডিভাইসের ব্রাউজারে ও আপনার Google Sheet-এ সংরক্ষিত হয়"})]})})}function pS(){const[l,o]=R.useState(!1),[u,c]=R.useState(0),[d,f]=R.useState(!1),[A,b]=R.useState([]),[h,L]=R.useState(!1),[y,g]=R.useState(""),[H,D]=R.useState(!1),[T,Z]=R.useState([]),[O,G]=R.useState([]),[ce,K]=R.useState(()=>!!rm()),[ee,C]=R.useState(""),[V,re]=R.useState(""),[B,se]=R.useState(""),[ie,te]=R.useState(""),ue=R.useCallback(async()=>{try{const U=ol(),j=!!(U&&(U.role==="admin"||U.is_super===!0));if(o(j),D((U==null?void 0:U.is_super)===!0||ce),!j&&!ce)return;const _=await O2();if(j&&!_.ok)return;if(j&&c(_.pendingCount||0),d&&((U==null?void 0:U.is_super)===!0||ce)){const x=await Ei();x.ok&&b(x.pending)}}catch{}},[d,ce]);R.useEffect(()=>{ue();const U=setInterval(ue,6e4);return()=>clearInterval(U)},[ue]);const be=async()=>{if(!E())return;const U=await B2();U.ok&&Z(U.branches);const j=await H2();j.ok&&G(j.users)},E=()=>!!rm(),w=async()=>{if(f(!0),re(""),!E())return;const U=await Ei();U.ok&&b(U.pending),await be()},p=async(U,j)=>{L(!0),g("");const _=A.find(Re=>Re.id===U),x=j?await j2(U,(_==null?void 0:_.branch_id)||"gobra"):await I2(U);if(L(!1),!x.ok)return g(x.error||"ব্যর্থ হয়েছে");g(j?"✅ অনুমতি দেওয়া হয়েছে":"❌ বাধা দেওয়া হয়েছে"),setTimeout(()=>g(""),2500);const Q=await Ei();Q.ok&&b(Q.pending),c(x.pendingCount??Math.max(0,u-1)),await be()},N=async U=>{const j=ol();if(String(U.mobile||"")===String((j==null?void 0:j.mobile)||"")||U.email&&U.email===(j==null?void 0:j.email))return g("নিজের অ্যাকাউন্ট এভাবে মোছা যায় না।");if(!window.confirm(`🗑️ "${U.name}" (${U.mobile||U.email||"—"}) — স্থায়ীভাবে মুছে ফেলবেন?`))return;L(!0),g("");const _=await w2(U.id);L(!1),g(_.ok?"🗑️ মুছে ফেলা হয়েছে":_.error||"ব্যর্থ হয়েছে"),setTimeout(()=>g(""),2500);const x=await Ei();x.ok&&b(x.pending),await be()},P=U=>{const j=ol();j&&(Ji(String(j.mobile||j.email||"user"),U,{name:j.name}),f2(U))},W=async()=>{L(!0),re("");const U=await E2(ee.trim());if(L(!1),!U.ok)return re(U.error||"পাসওয়ার্ড মিলছে না।");K(!0),D(!0),C(""),c(U.pendingCount??0),await be()},F=async()=>{if(ie.trim().length<6)return g("নতুন পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে।");L(!0),g("");const U=await M2(B.trim(),ie.trim());if(L(!1),!U.ok)return g(U.error||"ব্যর্থ হয়েছে");g(U.message||"🔑 পাসওয়ার্ড বদলে গেছে"),se(""),te(""),setTimeout(()=>g(""),2500)};return n.jsxs(n.Fragment,{children:[n.jsxs("button",{type:"button",onClick:w,title:"লগইন অনুমতির অনুরোধ",className:"fixed bottom-20 right-3 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-indigo-300 bg-white text-lg shadow-xl hover:bg-indigo-50 cursor-pointer",children:["🔔",l&&u>0&&n.jsx("span",{className:"absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-rose-600 px-1 text-[10px] font-black text-white",children:u})]}),d&&n.jsx("div",{className:"fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-slate-900/50 p-3",onClick:()=>f(!1),children:n.jsxs("div",{className:"w-full max-w-md rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl",onClick:U=>U.stopPropagation(),children:[n.jsxs("div",{className:"mb-3 flex items-center justify-between border-b border-slate-100 pb-2",children:[n.jsx("h2",{className:"text-sm font-black text-slate-900",children:"🔔 লগইন অনুমতির অনুরোধ"}),n.jsx("button",{type:"button",onClick:()=>f(!1),className:"rounded px-2 text-lg font-black text-slate-400 hover:text-slate-700 cursor-pointer",children:"✕"})]}),E()?n.jsxs(n.Fragment,{children:[y&&n.jsx("div",{className:"mb-2 rounded-lg bg-indigo-50 px-3 py-2 text-[11px] font-black text-indigo-800",children:y}),A.length===0?n.jsx("div",{className:"py-6 text-center text-sm font-semibold text-slate-400",children:"✓ কোনো অনুরোধ অপেক্ষা করছে না"}):n.jsx("div",{className:"max-h-80 space-y-2 overflow-auto",children:A.map(U=>n.jsxs("div",{className:"rounded-xl border border-slate-200 bg-slate-50 p-3",children:[n.jsx("div",{className:"mb-1 text-sm font-black text-slate-900",children:U.name}),n.jsxs("div",{className:"mb-2 text-[11px] font-semibold text-slate-500",children:[U.email||U.mobile||"—"," • 🏢 ",U.branch_id||"gobra"," • ",new Date(U.created_at).toLocaleDateString("en-GB")]}),n.jsxs("div",{className:"flex gap-2",children:[n.jsx("button",{type:"button",disabled:h,onClick:()=>p(U.id,!0),className:"flex-1 rounded-lg bg-emerald-600 px-3 py-1.5 text-[11px] font-black text-white hover:bg-emerald-700 disabled:opacity-50 cursor-pointer",children:"✅ অনুমতি দিন"}),n.jsx("button",{type:"button",disabled:h,onClick:()=>p(U.id,!1),className:"flex-1 rounded-lg bg-rose-600 px-3 py-1.5 text-[11px] font-black text-white hover:bg-rose-700 disabled:opacity-50 cursor-pointer",children:"❌ বাধা দিন"})]})]},U.id))}),(H||ce)&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"mt-3 border-t border-slate-200 pt-2",children:[n.jsxs("div",{className:"mb-1 text-[11px] font-black text-slate-600",children:["🏢 অফিসসমূহ ",n.jsx("span",{className:"font-semibold text-slate-400",children:"(🔁 প্রবেশ = ওই অফিসে এক ক্লিকে চলে যাওয়া)"})]}),n.jsxs("div",{className:"max-h-28 space-y-1 overflow-auto",children:[T.length===0&&n.jsx("div",{className:"text-[11px] font-semibold text-slate-400",children:"…"}),T.map(U=>{var j,_;return n.jsxs("div",{className:"flex items-center justify-between gap-2 rounded-lg border border-slate-200 bg-white px-2 py-1.5",children:[n.jsxs("div",{className:"text-[11px] font-black text-slate-800",children:["🏢 ",U.branch_id,U.branch_id===(((j=ol())==null?void 0:j.branchId)||"gobra")&&n.jsx("span",{className:"ml-1 rounded bg-emerald-100 px-1 text-[9px] font-black text-emerald-700",children:"এখানে আছেন"}),n.jsxs("span",{className:"ml-1 text-[10px] font-semibold text-slate-400",children:["ইউজার ×",U.users]})]}),n.jsx("button",{type:"button",disabled:h||U.branch_id===(((_=ol())==null?void 0:_.branchId)||"gobra"),onClick:()=>P(U.branch_id),className:"rounded-md bg-indigo-600 px-2 py-0.5 text-[10px] font-black text-white hover:bg-indigo-700 disabled:opacity-40 cursor-pointer",children:"🔁 প্রবেশ"})]},U.branch_id)})]})]}),n.jsxs("div",{className:"mt-2 border-t border-slate-200 pt-2",children:[n.jsxs("div",{className:"mb-1 text-[11px] font-black text-slate-600",children:["👥 সব ইউজার ",n.jsx("span",{className:"font-semibold text-slate-400",children:"(ভুল তৈরি হলে 🗑️ মুছুন)"})]}),n.jsxs("div",{className:"max-h-44 space-y-1 overflow-auto",children:[O.length===0&&n.jsx("div",{className:"text-[11px] font-semibold text-slate-400",children:"…"}),O.map(U=>{var x,Q;const j=String(U.mobile||"")===String(((x=ol())==null?void 0:x.mobile)||"")||U.email!=null&&U.email===((Q=ol())==null?void 0:Q.email),_=U.status==="pending"?"⏳অপেক্ষায়":U.status==="rejected"?"❌বাদ":U.role==="admin"?"অ্যাডমিন":"সদস্য";return n.jsxs("div",{className:"flex items-center justify-between gap-2 rounded-lg border border-slate-200 bg-white px-2 py-1.5",children:[n.jsxs("div",{className:"min-w-0 text-[11px]",children:[n.jsx("span",{className:"font-black text-slate-800",children:U.name}),U.is_super===!0&&n.jsx("span",{title:"মালিক",children:" ⭐"}),j&&n.jsx("span",{className:"ml-1 rounded bg-slate-200 px-1 text-[9px] font-black text-slate-600",children:"আপনি"}),n.jsxs("div",{className:"truncate text-[10px] font-semibold text-slate-500",children:[U.mobile||U.email||"—"," • 🏢",U.branch_id," • ",_]})]}),!j&&n.jsx("button",{type:"button",disabled:h,onClick:()=>N(U),title:"স্থায়ীভাবে মুছুন",className:"rounded-md bg-rose-600 px-2 py-0.5 text-[10px] font-black text-white hover:bg-rose-700 disabled:opacity-40 cursor-pointer",children:"🗑️"})]},U.id)})]})]})]}),(H||ce)&&n.jsx(n.Fragment,{children:n.jsxs("div",{className:"mt-2 border-t border-slate-200 pt-2",children:[n.jsx("div",{className:"mb-1 text-[11px] font-black text-slate-600",children:"🔑 অ্যাডমিন-পাসওয়ার্ড বদলান"}),n.jsxs("div",{className:"flex gap-1.5",children:[n.jsx("input",{type:"password",value:B,onChange:U=>se(U.target.value),placeholder:"আগের পাসওয়ার্ড",className:"min-w-0 flex-1 rounded-lg border border-slate-300 px-2 py-1.5 text-[11px] font-bold"}),n.jsx("input",{type:"password",value:ie,onChange:U=>te(U.target.value),placeholder:"নতুন (৬+ অক্ষর)",className:"min-w-0 flex-1 rounded-lg border border-slate-300 px-2 py-1.5 text-[11px] font-bold"}),n.jsx("button",{type:"button",disabled:h||!B.trim()||!ie.trim(),onClick:F,className:"rounded-lg bg-slate-800 px-2.5 py-1.5 text-[10px] font-black text-white hover:bg-slate-900 disabled:opacity-40 cursor-pointer",children:"বদলান"})]})]})})]}):n.jsxs("div",{className:"py-2",children:[n.jsx("div",{className:"mb-2 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-[11px] font-bold leading-relaxed text-amber-800",children:"🔐 এটা অ্যাডমিন-প্যানেল — খুলতে অ্যাডমিন-পাসওয়ার্ড দিন।"}),n.jsxs("div",{className:"flex gap-2",children:[n.jsx("input",{type:"password",value:ee,onChange:U=>C(U.target.value),onKeyDown:U=>{U.key==="Enter"&&W()},placeholder:"অ্যাডমিন-পাসওয়ার্ড",className:"min-w-0 flex-1 rounded-lg border border-slate-300 px-3 py-2 text-sm font-bold"}),n.jsx("button",{type:"button",disabled:h||!ee.trim(),onClick:W,className:"rounded-lg bg-indigo-600 px-4 py-2 text-xs font-black text-white hover:bg-indigo-700 disabled:opacity-50 cursor-pointer",children:"খুলুন"})]}),V&&n.jsx("div",{className:"mt-2 text-[11px] font-black text-rose-600",children:V})]})]})})]})}function gS(){const[l,o]=R.useState(()=>Vm()),[u,c]=R.useState("receive"),[d,f]=R.useState(!1),[A,b]=R.useState(!1),[h,L]=R.useState(!1),[y,g]=R.useState(!1),[H,D]=R.useState(!1),[T,Z]=R.useState(()=>{try{const ee=localStorage.getItem("app_master_date");if(ee&&ee.includes("-"))return ee}catch{}return fa()}),O=ee=>{const C=ee||fa();Z(C);try{localStorage.setItem("app_master_date",C)}catch{}};if(R.useEffect(()=>{Ac().catch(()=>{})},[]),R.useEffect(()=>{if(l&&(DR(),sr())){gR();const ee=pR(),C=U5();(ee||C)&&console.log(`🧹 টেস্ট ডেটা পরিষ্কার — সদস্য: ${ee}, চেক-এন্ট্রি: ${C}`)}},[l==null?void 0:l.userId,l==null?void 0:l.branchId]),R.useEffect(()=>{try{const ie=localStorage.getItem("app_master_date");ie&&ie.includes("-")&&ie!==T&&Z(ie)}catch{}const ee=()=>f(!0),C=()=>b(!0),V=()=>L(!0),re=()=>g(!0),B=ie=>{const te=ie.detail;typeof te=="string"&&te&&(c(te),window.scrollTo({top:0,behavior:"smooth"}))};window.addEventListener("open-date-tracker",ee),window.addEventListener("open-day-open-modal",C),window.addEventListener("open-day-close-modal",V),window.addEventListener("open-day-admin",re),window.addEventListener("navigate-tab",B);const se=()=>D(!0);return window.addEventListener("app-update-available",se),()=>{window.removeEventListener("open-date-tracker",ee),window.removeEventListener("open-day-open-modal",C),window.removeEventListener("open-day-close-modal",V),window.removeEventListener("open-day-admin",re),window.removeEventListener("navigate-tab",B),window.removeEventListener("app-update-available",se)}},[]),!l)return n.jsx(bS,{onAuthed:ee=>{lr(ee.branchId),o(ee),window.location.reload()}});const G=g5(),ce=mc(),K=()=>{window.confirm("সাইন আউট করবেন? আবার ঢুকতে ইউজার আইডি (মোবাইল নম্বর) ও পাসওয়ার্ড লাগবে।")&&(R5(),vb(),window.location.reload())};return n.jsxs("div",{className:"app-bg min-h-screen text-slate-900 font-sans antialiased pb-16 lg:pb-4  // v1.4.162: ফ্লোটিং-মেনুস্থলে বার নেই — প্যাডিং কিছুটা সরহ lg:pl-60 print:p-0 print:m-0 print:pl-0 print:pb-0 print:bg-white",children:[n.jsx(pS,{}),n.jsxs("main",{className:"mx-auto max-w-6xl px-3 sm:px-4 pt-3 sm:pt-5 print:p-0 print:max-w-none",children:[n.jsxs("div",{className:"print:hidden mb-2 flex flex-wrap items-center justify-between gap-2 rounded-xl border border-slate-200 bg-white/80 px-3 py-1.5 text-[11px] font-bold text-slate-700 shadow-xs",children:[n.jsxs("span",{className:"flex items-center gap-1.5",children:[n.jsx("span",{children:"🏢"}),n.jsx("span",{className:"font-black text-indigo-800",children:ce})]}),n.jsxs("span",{className:"lg:hidden flex items-center gap-1",children:[n.jsx("span",{className:"w-28 text-slate-900",children:n.jsx(bn,{value:T,onChange:O,className:"w-full rounded-lg border border-slate-300 bg-white px-2 py-1 text-[11px] font-bold shadow-xs",onOpenTracker:()=>f(!0)})}),T!==fa()&&n.jsx("button",{type:"button",onClick:()=>O(fa()),title:"আজকের তারিখে ফিরুন",className:"rounded-md border border-sky-300 bg-sky-50 px-1 py-[7px] text-[10px] font-black text-sky-700 shadow-xs transition active:scale-95 cursor-pointer",children:"📆"})]}),n.jsxs("span",{className:"flex items-center gap-2",children:[n.jsxs("span",{className:"text-slate-600",children:["👤 ",G?`${G.name} • ${G.mobile}`:l.userId]}),n.jsx("button",{type:"button",onClick:K,title:"সাইন আউট করুন",className:"rounded-lg border border-rose-300 bg-rose-50 px-2 py-1 text-[10px] font-black text-rose-700 transition hover:bg-rose-100 cursor-pointer",children:"🚪 লগআউট"})]})]}),n.jsx(nS,{}),n.jsx("div",{className:"print:hidden",children:n.jsx(aS,{selectedDate:T,onSelectDate:O,onOpenTracker:()=>f(!0)})}),u!=="cashbook"&&u!=="entertainment"&&u!=="check"&&n.jsx("div",{className:"print:hidden",children:n.jsx(lS,{selectedDate:T,onOpenDayModal:()=>b(!0)})}),(u==="receive"||u==="payment")&&n.jsx("div",{className:"print:hidden",children:n.jsx(a5,{selectedDate:T})}),u==="receive"&&n.jsx(i5,{selectedDate:T}),u==="payment"&&n.jsx(m5,{selectedDate:T}),u==="entertainment"&&n.jsx(f5,{}),u==="report"&&n.jsx(L5,{selectedDate:T}),u==="cashbook"&&n.jsx(E5,{selectedDate:T,setSelectedDate:O}),u==="check"&&n.jsx(Q5,{selectedDate:T})]}),H&&n.jsx("div",{className:"fixed bottom-20 left-1/2 z-[60] -translate-x-1/2 print:hidden",children:n.jsxs("div",{className:"flex items-center gap-2.5 rounded-2xl bg-slate-900 px-4 py-2.5 text-white shadow-2xl border border-slate-700",children:[n.jsx("span",{className:"text-lg",children:"🔄"}),n.jsxs("div",{className:"text-[11px] leading-tight",children:[n.jsx("div",{className:"font-black",children:"নতুন ভার্সন এসেছে"}),n.jsxs("div",{className:"text-slate-300",children:["সবচেয়ে নতুন আপডেট দেখতে রিফ্রেশ করুন (v",vm,")"]})]}),n.jsx("button",{type:"button",onClick:()=>hp(),className:"rounded-xl bg-emerald-600 hover:bg-emerald-500 px-3 py-1.5 text-[11px] font-black transition cursor-pointer",children:"এখনই রিফ্রেশ"}),n.jsx("button",{type:"button",onClick:()=>{fS(),D(!1)},className:"text-slate-400 hover:text-white text-sm font-bold px-1 cursor-pointer",children:"✕"})]})}),n.jsx(sS,{isOpen:d,onClose:()=>f(!1),selectedDate:T,onSelectDate:O}),n.jsx(rS,{isOpen:A,onClose:()=>b(!1),selectedDate:T}),n.jsx(cS,{isOpen:h,onClose:()=>L(!1),selectedDate:T}),n.jsx(mS,{isOpen:y,onClose:()=>g(!1),onJumpDate:ee=>{O(ee),c("receive"),g(!1),window.scrollTo({top:0,behavior:"smooth"})}}),n.jsx("div",{className:"print:hidden",children:n.jsx(tS,{currentTab:u,onTabChange:c,selectedDate:T,onDateChange:O,onOpenTracker:()=>f(!0)})})]})}const RS="input:not([type=hidden]):not([type=checkbox]):not([type=radio]):not([type=button]):not([type=submit]):not([type=file]):not([type=range]):not([type=color]):not([type=reset]):not([type=image]):not(disabled)",bp=l=>{if(!l||!(l instanceof HTMLInputElement)||["checkbox","radio","button","submit","file","hidden","range","color","image","reset"].includes((l.type||"text").toLowerCase())||l.disabled)return!1;try{return getComputedStyle(l).display!=="none"}catch{return!0}},SS=(l=document)=>Array.from(l.querySelectorAll(RS)).filter(bp),yS=l=>{var o;return!!((o=l.closest("div.relative"))!=null&&o.querySelector(":scope > div.absolute"))};function NS(l=document){const o=globalThis;o.__FIELD_NAV_INSTALLED||(o.__FIELD_NAV_INSTALLED=!0,l.addEventListener("keydown",u=>{var g;if(u.ctrlKey||u.altKey||u.metaKey)return;const c=u.key,d=u.target instanceof HTMLInputElement?u.target:null;if(!d||!bp(d))return;let f=0;if(c==="Enter"||c==="ArrowDown")f=1;else if(c==="ArrowUp")f=-1;else if(c==="ArrowRight"||c==="ArrowLeft"){let H=!1,D=!1;try{const T=(d.value||"").length,Z=d.selectionStart,O=d.selectionEnd;Z==null||O==null?(H=!0,D=!0):(H=Z===0&&O===0,D=Z===T&&O===T)}catch{H=!0,D=!0}if(c==="ArrowRight"&&D)f=1;else if(c==="ArrowLeft"&&H)f=-1;else return}else return;if(yS(d))return;const b=d.closest(".fixed")||l,h=SS(b),L=h.indexOf(d);if(L<0)return;const y=h[L+f];if(y){u.preventDefault(),y.focus();try{(g=y.select)==null||g.call(y)}catch{}}}))}try{const l=Vm();fh(l==null?void 0:l.branchId)}catch{fh()}Ac().catch(()=>{});u2.createRoot(document.getElementById("root")).render(n.jsx(R.StrictMode,{children:n.jsx(gS,{})}));xS(()=>{window.dispatchEvent(new CustomEvent("app-update-available"))});NS();export{tb as _,vS as c,e2 as g};
