(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))c(d);new MutationObserver(d=>{for(const A of d)if(A.type==="childList")for(const f of A.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&c(f)}).observe(document,{childList:!0,subtree:!0});function u(d){const A={};return d.integrity&&(A.integrity=d.integrity),d.referrerPolicy&&(A.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?A.credentials="include":d.crossOrigin==="anonymous"?A.credentials="omit":A.credentials="same-origin",A}function c(d){if(d.ep)return;d.ep=!0;const A=u(d);fetch(d.href,A)}})();var IS=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function a2(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var Fd={exports:{}},so={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oh;function s2(){if(oh)return so;oh=1;var l=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function u(c,d,A){var f=null;if(A!==void 0&&(f=""+A),d.key!==void 0&&(f=""+d.key),"key"in d){A={};for(var x in d)x!=="key"&&(A[x]=d[x])}else A=d;return d=A.ref,{$$typeof:l,type:c,key:f,ref:d!==void 0?d:null,props:A}}return so.Fragment=o,so.jsx=u,so.jsxs=u,so}var ih;function l2(){return ih||(ih=1,Fd.exports=s2()),Fd.exports}var n=l2(),Jd={exports:{}},De={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ch;function r2(){if(ch)return De;ch=1;var l=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),A=Symbol.for("react.consumer"),f=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),b=Symbol.for("react.activity"),H=Symbol.for("react.view_transition"),P=Symbol.iterator;function G(y){return y===null||typeof y!="object"?null:(y=P&&y[P]||y["@@iterator"],typeof y=="function"?y:null)}var K={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L=Object.assign,_={};function ue(y,le,te){this.props=y,this.context=le,this.refs=_,this.updater=te||K}ue.prototype.isReactComponent={},ue.prototype.setState=function(y,le){if(typeof y!="object"&&typeof y!="function"&&y!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,y,le,"setState")},ue.prototype.forceUpdate=function(y){this.updater.enqueueForceUpdate(this,y,"forceUpdate")};function C(){}C.prototype=ue.prototype;function q(y,le,te){this.props=y,this.context=le,this.refs=_,this.updater=te||K}var k=q.prototype=new C;k.constructor=q,L(k,ue.prototype),k.isPureReactComponent=!0;var V=Array.isArray;function ce(){}var E={H:null,A:null,T:null,S:null},se=Object.prototype.hasOwnProperty;function ie(y,le,te){var Y=te.ref;return{$$typeof:l,type:y,key:le,ref:Y!==void 0?Y:null,props:te}}function ne(y,le){return ie(y.type,le,y.props)}function me(y){return typeof y=="object"&&y!==null&&y.$$typeof===l}function pe(y){var le={"=":"=0",":":"=2"};return"$"+y.replace(/[=:]/g,function(te){return le[te]})}var j=/\/+/g;function O(y,le){return typeof y=="object"&&y!==null&&y.key!=null?pe(""+y.key):le.toString(36)}function R(y){switch(y.status){case"fulfilled":return y.value;case"rejected":throw y.reason;default:switch(typeof y.status=="string"?y.then(ce,ce):(y.status="pending",y.then(function(le){y.status==="pending"&&(y.status="fulfilled",y.value=le)},function(le){y.status==="pending"&&(y.status="rejected",y.reason=le)})),y.status){case"fulfilled":return y.value;case"rejected":throw y.reason}}throw y}function I(y,le,te,Y,Se){var ye=typeof y;(ye==="undefined"||ye==="boolean")&&(y=null);var Z=!1;if(y===null)Z=!0;else switch(ye){case"bigint":case"string":case"number":Z=!0;break;case"object":switch(y.$$typeof){case l:case o:Z=!0;break;case S:return Z=y._init,I(Z(y._payload),le,te,Y,Se)}}if(Z)return Se=Se(y),Z=Y===""?"."+O(y,0):Y,V(Se)?(te="",Z!=null&&(te=Z.replace(j,"$&/")+"/"),I(Se,le,te,"",function(Oe){return Oe})):Se!=null&&(me(Se)&&(Se=ne(Se,te+(Se.key==null||y&&y.key===Se.key?"":(""+Se.key).replace(j,"$&/")+"/")+Z)),le.push(Se)),1;Z=0;var F=Y===""?".":Y+":";if(V(y))for(var Re=0;Re<y.length;Re++)Y=y[Re],ye=F+O(Y,Re),Z+=I(Y,le,te,ye,Se);else if(Re=G(y),typeof Re=="function")for(y=Re.call(y),Re=0;!(Y=y.next()).done;)Y=Y.value,ye=F+O(Y,Re++),Z+=I(Y,le,te,ye,Se);else if(ye==="object"){if(typeof y.then=="function")return I(R(y),le,te,Y,Se);throw le=String(y),Error("Objects are not valid as a React child (found: "+(le==="[object Object]"?"object with keys {"+Object.keys(y).join(", ")+"}":le)+"). If you meant to render a collection of children, use an array instead.")}return Z}function re(y,le,te){if(y==null)return y;var Y=[],Se=0;return I(y,Y,"","",function(ye){return le.call(te,ye,Se++)}),Y}function ee(y){if(y._status===-1){var le=y._result,te=le();te.then(function(Y){(y._status===0||y._status===-1)&&(y._status=1,y._result=Y,te.status===void 0&&(te.status="fulfilled",te.value=Y))},function(Y){(y._status===0||y._status===-1)&&(y._status=2,y._result=Y,te.status===void 0&&(te.status="rejected",te.reason=Y))}),y._status===-1&&(y._status=0,y._result=te)}if(y._status===1)return y._result.default;throw y._result}var M=typeof reportError=="function"?reportError:function(y){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var le=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof y=="object"&&y!==null&&typeof y.message=="string"?String(y.message):String(y),error:y});if(!window.dispatchEvent(le))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",y);return}console.error(y)};function U(y){var le=E.T,te={};te.types=le!==null?le.types:null,E.T=te;try{var Y=y(),Se=E.S;Se!==null&&Se(te,Y),typeof Y=="object"&&Y!==null&&typeof Y.then=="function"&&Y.then(ce,M)}catch(ye){M(ye)}finally{le!==null&&te.types!==null&&(le.types=te.types),E.T=le}}function B(y){var le=E.T;if(le!==null){var te=le.types;te===null?le.types=[y]:te.indexOf(y)===-1&&te.push(y)}else U(B.bind(null,y))}var ge={map:re,forEach:function(y,le,te){re(y,function(){le.apply(this,arguments)},te)},count:function(y){var le=0;return re(y,function(){le++}),le},toArray:function(y){return re(y,function(le){return le})||[]},only:function(y){if(!me(y))throw Error("React.Children.only expected to receive a single React element child.");return y}};return De.Activity=b,De.Children=ge,De.Component=ue,De.Fragment=u,De.Profiler=d,De.PureComponent=q,De.StrictMode=c,De.Suspense=h,De.ViewTransition=H,De.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=E,De.__COMPILER_RUNTIME={__proto__:null,c:function(y){return E.H.useMemoCache(y)}},De.addTransitionType=B,De.cache=function(y){return function(){return y.apply(null,arguments)}},De.cacheSignal=function(){return null},De.cloneElement=function(y,le,te){if(y==null)throw Error("The argument must be a React element, but you passed "+y+".");var Y=L({},y.props),Se=y.key;if(le!=null)for(ye in le.key!==void 0&&(Se=""+le.key),le)!se.call(le,ye)||ye==="key"||ye==="__self"||ye==="__source"||ye==="ref"&&le.ref===void 0||(Y[ye]=le[ye]);var ye=arguments.length-2;if(ye===1)Y.children=te;else if(1<ye){for(var Z=Array(ye),F=0;F<ye;F++)Z[F]=arguments[F+2];Y.children=Z}return ie(y.type,Se,Y)},De.createContext=function(y){return y={$$typeof:f,_currentValue:y,_currentValue2:y,_threadCount:0,Provider:null,Consumer:null},y.Provider=y,y.Consumer={$$typeof:A,_context:y},y},De.createElement=function(y,le,te){var Y,Se={},ye=null;if(le!=null)for(Y in le.key!==void 0&&(ye=""+le.key),le)se.call(le,Y)&&Y!=="key"&&Y!=="__self"&&Y!=="__source"&&(Se[Y]=le[Y]);var Z=arguments.length-2;if(Z===1)Se.children=te;else if(1<Z){for(var F=Array(Z),Re=0;Re<Z;Re++)F[Re]=arguments[Re+2];Se.children=F}if(y&&y.defaultProps)for(Y in Z=y.defaultProps,Z)Se[Y]===void 0&&(Se[Y]=Z[Y]);return ie(y,ye,Se)},De.createRef=function(){return{current:null}},De.forwardRef=function(y){return{$$typeof:x,render:y}},De.isValidElement=me,De.lazy=function(y){return{$$typeof:S,_payload:{_status:-1,_result:y},_init:ee}},De.memo=function(y,le){return{$$typeof:v,type:y,compare:le===void 0?null:le}},De.startTransition=U,De.unstable_useCacheRefresh=function(){return E.H.useCacheRefresh()},De.use=function(y){return E.H.use(y)},De.useActionState=function(y,le,te){return E.H.useActionState(y,le,te)},De.useCallback=function(y,le){return E.H.useCallback(y,le)},De.useContext=function(y){return E.H.useContext(y)},De.useDebugValue=function(){},De.useDeferredValue=function(y,le){return E.H.useDeferredValue(y,le)},De.useEffect=function(y,le){return E.H.useEffect(y,le)},De.useEffectEvent=function(y){return E.H.useEffectEvent(y)},De.useId=function(){return E.H.useId()},De.useImperativeHandle=function(y,le,te){return E.H.useImperativeHandle(y,le,te)},De.useInsertionEffect=function(y,le){return E.H.useInsertionEffect(y,le)},De.useLayoutEffect=function(y,le){return E.H.useLayoutEffect(y,le)},De.useMemo=function(y,le){return E.H.useMemo(y,le)},De.useOptimistic=function(y,le){return E.H.useOptimistic(y,le)},De.useReducer=function(y,le,te){return E.H.useReducer(y,le,te)},De.useRef=function(y){return E.H.useRef(y)},De.useState=function(y){return E.H.useState(y)},De.useSyncExternalStore=function(y,le,te){return E.H.useSyncExternalStore(y,le,te)},De.useTransition=function(){return E.H.useTransition()},De.version="19.3.0",De}var uh;function Hm(){return uh||(uh=1,Jd.exports=r2()),Jd.exports}var p=Hm();const o2=a2(p);var Xd={exports:{}},lo={},Vd={exports:{}},Yd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dh;function i2(){return dh||(dh=1,(function(l){function o(R,I){var re=R.length;R.push(I);e:for(;0<re;){var ee=re-1>>>1,M=R[ee];if(0<d(M,I))R[ee]=I,R[re]=M,re=ee;else break e}}function u(R){return R.length===0?null:R[0]}function c(R){if(R.length===0)return null;var I=R[0],re=R.pop();if(re!==I){R[0]=re;e:for(var ee=0,M=R.length,U=M>>>1;ee<U;){var B=2*(ee+1)-1,ge=R[B],y=B+1,le=R[y];if(0>d(ge,re))y<M&&0>d(le,ge)?(R[ee]=le,R[y]=re,ee=y):(R[ee]=ge,R[B]=re,ee=B);else if(y<M&&0>d(le,re))R[ee]=le,R[y]=re,ee=y;else break e}}return I}function d(R,I){var re=R.sortIndex-I.sortIndex;return re!==0?re:R.id-I.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var A=performance;l.unstable_now=function(){return A.now()}}else{var f=Date,x=f.now();l.unstable_now=function(){return f.now()-x}}var h=[],v=[],S=1,b=null,H=3,P=!1,G=!1,K=!1,L=!1,_=typeof setTimeout=="function"?setTimeout:null,ue=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;function q(R){for(var I=u(v);I!==null;){if(I.callback===null)c(v);else if(I.startTime<=R)c(v),I.sortIndex=I.expirationTime,o(h,I);else break;I=u(v)}}function k(R){if(K=!1,q(R),!G)if(u(h)!==null)G=!0,V||(V=!0,me());else{var I=u(v);I!==null&&O(k,I.startTime-R)}}var V=!1,ce=-1,E=5,se=-1;function ie(){return L?!0:!(l.unstable_now()-se<E)}function ne(){if(L=!1,V){var R=l.unstable_now();se=R;var I=!0;try{e:{G=!1,K&&(K=!1,ue(ce),ce=-1),P=!0;var re=H;try{t:{for(q(R),b=u(h);b!==null&&!(b.expirationTime>R&&ie());){var ee=b.callback;if(typeof ee=="function"){b.callback=null,H=b.priorityLevel;var M=ee(b.expirationTime<=R);if(R=l.unstable_now(),typeof M=="function"){b.callback=M,q(R),I=!0;break t}b===u(h)&&c(h),q(R)}else c(h);b=u(h)}if(b!==null)I=!0;else{var U=u(v);U!==null&&O(k,U.startTime-R),I=!1}}break e}finally{b=null,H=re,P=!1}I=void 0}}finally{I?me():V=!1}}}var me;if(typeof C=="function")me=function(){C(ne)};else if(typeof MessageChannel<"u"){var pe=new MessageChannel,j=pe.port2;pe.port1.onmessage=ne,me=function(){j.postMessage(null)}}else me=function(){_(ne,0)};function O(R,I){ce=_(function(){R(l.unstable_now())},I)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(R){R.callback=null},l.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<R?Math.floor(1e3/R):5},l.unstable_getCurrentPriorityLevel=function(){return H},l.unstable_next=function(R){switch(H){case 1:case 2:case 3:var I=3;break;default:I=H}var re=H;H=I;try{return R()}finally{H=re}},l.unstable_requestPaint=function(){L=!0},l.unstable_runWithPriority=function(R,I){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var re=H;H=R;try{return I()}finally{H=re}},l.unstable_scheduleCallback=function(R,I,re){var ee=l.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?ee+re:ee):re=ee,R){case 1:var M=-1;break;case 2:M=250;break;case 5:M=1073741823;break;case 4:M=1e4;break;default:M=5e3}return M=re+M,R={id:S++,callback:I,priorityLevel:R,startTime:re,expirationTime:M,sortIndex:-1},re>ee?(R.sortIndex=re,o(v,R),u(h)===null&&R===u(v)&&(K?(ue(ce),ce=-1):K=!0,O(k,re-ee))):(R.sortIndex=M,o(h,R),G||P||(G=!0,V||(V=!0,me()))),R},l.unstable_shouldYield=ie,l.unstable_wrapCallback=function(R){var I=H;return function(){var re=H;H=I;try{return R.apply(this,arguments)}finally{H=re}}}})(Yd)),Yd}var mh;function c2(){return mh||(mh=1,Vd.exports=i2()),Vd.exports}var qd={exports:{}},xn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ah;function u2(){if(Ah)return xn;Ah=1;var l=Hm();function o(S){var b="https://react.dev/errors/"+S;if(1<arguments.length){b+="?args[]="+encodeURIComponent(arguments[1]);for(var H=2;H<arguments.length;H++)b+="&args[]="+encodeURIComponent(arguments[H])}return"Minified React error #"+S+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(){}var c={d:{f:u,r:function(){throw Error(o(522))},D:u,C:u,L:u,m:u,X:u,S:u,M:u},p:0,findDOMNode:null},d=Symbol.for("react.portal"),A=Symbol.for("react.recoverable"),f=Symbol.for("react.optimistic_key");function x(S,b,H){var P=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:P==null?null:P===f?f:""+P,children:S,containerInfo:b,implementation:H}}var h=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function v(S,b){if(S==="font")return"";if(typeof b=="string")return b==="use-credentials"?b:""}return xn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,xn.browser=function(S){return{$$typeof:A,_reason:S}},xn.createPortal=function(S,b){var H=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!b||b.nodeType!==1&&b.nodeType!==9&&b.nodeType!==11)throw Error(o(299));return x(S,b,null,H)},xn.flushSync=function(S){var b=h.T,H=c.p;try{if(h.T=null,c.p=2,S)return S()}finally{h.T=b,c.p=H,c.d.f()}},xn.preconnect=function(S,b){typeof S=="string"&&(b?(b=b.crossOrigin,b=typeof b=="string"?b==="use-credentials"?b:"":void 0):b=null,c.d.C(S,b))},xn.prefetchDNS=function(S){typeof S=="string"&&c.d.D(S)},xn.preinit=function(S,b){if(typeof S=="string"&&b&&typeof b.as=="string"){var H=b.as,P=v(H,b.crossOrigin),G=typeof b.integrity=="string"?b.integrity:void 0,K=typeof b.fetchPriority=="string"?b.fetchPriority:void 0;H==="style"?c.d.S(S,typeof b.precedence=="string"?b.precedence:void 0,{crossOrigin:P,integrity:G,fetchPriority:K}):H==="script"&&c.d.X(S,{crossOrigin:P,integrity:G,fetchPriority:K,nonce:typeof b.nonce=="string"?b.nonce:void 0})}},xn.preinitModule=function(S,b){if(typeof S=="string")if(typeof b=="object"&&b!==null){if(b.as==null||b.as==="script"){var H=v(b.as,b.crossOrigin);c.d.M(S,{crossOrigin:H,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0,fetchPriority:typeof b.fetchPriority=="string"?b.fetchPriority:void 0})}}else b==null&&c.d.M(S)},xn.preload=function(S,b){if(typeof S=="string"&&typeof b=="object"&&b!==null&&typeof b.as=="string"){var H=b.as,P=v(H,b.crossOrigin);c.d.L(S,H,{crossOrigin:P,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0,type:typeof b.type=="string"?b.type:void 0,fetchPriority:typeof b.fetchPriority=="string"?b.fetchPriority:void 0,referrerPolicy:typeof b.referrerPolicy=="string"?b.referrerPolicy:void 0,imageSrcSet:typeof b.imageSrcSet=="string"?b.imageSrcSet:void 0,imageSizes:typeof b.imageSizes=="string"?b.imageSizes:void 0,media:typeof b.media=="string"?b.media:void 0})}},xn.preloadModule=function(S,b){if(typeof S=="string")if(b){var H=v(b.as,b.crossOrigin);c.d.m(S,{as:typeof b.as=="string"&&b.as!=="script"?b.as:void 0,crossOrigin:H,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0,fetchPriority:typeof b.fetchPriority=="string"?b.fetchPriority:void 0})}else c.d.m(S)},xn.requestFormReset=function(S){c.d.r(S)},xn.unstable_batchedUpdates=function(S,b){return S(b)},xn.useFormState=function(S,b,H){return h.H.useFormState(S,b,H)},xn.useFormStatus=function(){return h.H.useHostTransitionStatus()},xn.version="19.3.0",xn}var fh;function Rb(){if(fh)return qd.exports;fh=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(o){console.error(o)}}return l(),qd.exports=u2(),qd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xh;function d2(){if(xh)return lo;xh=1;var l=c2(),o=Hm(),u=Rb();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function A(e){for(var t=e,a=t;a&&!a.alternate;)t=a,(t.flags&4098)!==0&&(e=t.return),a=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function f(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function x(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function h(e){if(A(e)!==e)throw Error(c(188))}function v(e){var t=e.alternate;if(!t){if(t=A(e),t===null)throw Error(c(188));return t!==e?null:e}for(var a=e,s=t;;){var r=a.return;if(r===null)break;var i=r.alternate;if(i===null){if(s=r.return,s!==null){a=s;continue}break}if(r.child===i.child){for(i=r.child;i;){if(i===a)return h(r),e;if(i===s)return h(r),t;i=i.sibling}throw Error(c(188))}if(a.return!==s.return)a=r,s=i;else{for(var m=!1,g=r.child;g;){if(g===a){m=!0,a=r,s=i;break}if(g===s){m=!0,s=r,a=i;break}g=g.sibling}if(!m){for(g=i.child;g;){if(g===a){m=!0,a=i,s=r;break}if(g===s){m=!0,s=i,a=r;break}g=g.sibling}if(!m)throw Error(c(189))}}if(a.alternate!==s)throw Error(c(190))}if(a.tag!==3)throw Error(c(188));return a.stateNode.current===a?e:t}function S(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=S(e),t!==null)return t;e=e.sibling}return null}function b(e,t,a,s,r,i){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&a(e,s,r,i)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&b(e.child,t,a,s,r,i))return!0;e=e.sibling}return!1}function H(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function P(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return t}function G(e){var t=[null,null],a=H(e);return a===null||K(t,e,a.child,{foundSelf:!1}),t}function K(e,t,a,s){for(;a!==null;){if(a===t)s.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(s.foundSelf)return e[1]=a,!0;e[0]=a}else if((a.tag!==22||a.memoizedState===null)&&K(e,t,a.child,s))return!0;a=a.sibling}return!1}function L(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(c(559))}}var _=null,ue=null;function C(e,t,a){return e===a?!0:e===t?(_=e,!0):!1}function q(e,t,a){return e===a?(ue=e,!1):e===t?(ue!==null&&(_=e),!0):!1}function k(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function V(e,t,a){for(var s=0,r=e;r;r=a(r))s++;r=0;for(var i=t;i;i=a(i))r++;for(;0<s-r;)e=a(e),s--;for(;0<r-s;)t=a(t),r--;for(;s--;){if(e===t||t!==null&&e===t.alternate)return e;e=a(e),t=a(t)}return null}var ce=Object.assign,E=Symbol.for("react.element"),se=Symbol.for("react.transitional.element"),ie=Symbol.for("react.portal"),ne=Symbol.for("react.fragment"),me=Symbol.for("react.strict_mode"),pe=Symbol.for("react.profiler"),j=Symbol.for("react.consumer"),O=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),re=Symbol.for("react.suspense_list"),ee=Symbol.for("react.memo"),M=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),B=Symbol.for("react.legacy_hidden"),ge=Symbol.for("react.memo_cache_sentinel"),y=Symbol.for("react.view_transition"),le=Symbol.for("react.recoverable"),te=Symbol.iterator;function Y(e){return e===null||typeof e!="object"?null:(e=te&&e[te]||e["@@iterator"],typeof e=="function"?e:null)}var Se=Symbol.for("react.client.reference");function ye(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Se?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ne:return"Fragment";case pe:return"Profiler";case me:return"StrictMode";case I:return"Suspense";case re:return"SuspenseList";case U:return"Activity";case y:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case ie:return"Portal";case O:return e.displayName||"Context";case j:return(e._context.displayName||"Context")+".Consumer";case R:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ee:return t=e.displayName||null,t!==null?t:ye(e.type)||"Memo";case M:t=e._payload,e=e._init;try{return ye(e(t))}catch{}}return null}var Z=Array.isArray,F=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Re=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Oe={pending:!1,data:null,method:null,action:null},rt=[],At=-1;function ft(e){return{current:e}}function tt(e){0>At||(e.current=rt[At],rt[At]=null,At--)}function Le(e,t){At++,rt[At]=e.current,e.current=t}var lt=ft(null),St=ft(null),gt=ft(null),yt=ft(null);function xe(e,t){switch(Le(gt,t),Le(St,e),Le(lt,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?hx(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=hx(t),e=bx(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}tt(lt),Le(lt,e)}function ke(){tt(lt),tt(St),tt(gt)}function Fe(e){var t=e.memoizedState;t!==null&&(tr._currentValue=t.memoizedState,Le(yt,e)),t=lt.current;var a=bx(t,e.type);t!==a&&(Le(St,e),Le(lt,a))}function Ot(e){St.current===e&&(tt(lt),tt(St)),yt.current===e&&(tt(yt),tr._currentValue=Oe)}var rn,Zt;function Dt(e){if(rn===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);rn=t&&t[1]||"",Zt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+rn+e+Zt}var fe=!1;function Ee(e,t){if(!e||fe)return"";fe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(t){var be=function(){throw Error()};if(Object.defineProperty(be.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(be,[])}catch(ve){var z=ve}Reflect.construct(e,[],be)}else{try{be.call()}catch(ve){z=ve}be=!1;try{var W=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),be=!0,new e}finally{be&&(W!==void 0?Object.defineProperty(e.prototype,"props",W):delete e.prototype.props)}}}else{try{throw Error()}catch(ve){z=ve}(be=e())&&typeof be.catch=="function"&&be.catch(function(){})}}catch(ve){if(ve&&z&&typeof ve.stack=="string")return[ve.stack,z.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=s.DetermineComponentFrameRoot(),m=i[0],g=i[1];if(m&&g){var w=m.split(`
`),X=g.split(`
`);for(r=s=0;s<w.length&&!w[s].includes("DetermineComponentFrameRoot");)s++;for(;r<X.length&&!X[r].includes("DetermineComponentFrameRoot");)r++;if(s===w.length||r===X.length)for(s=w.length-1,r=X.length-1;1<=s&&0<=r&&w[s]!==X[r];)r--;for(;1<=s&&0<=r;s--,r--)if(w[s]!==X[r]){if(s!==1||r!==1)do if(s--,r--,0>r||w[s]!==X[r]){var ae=`
`+w[s].replace(" at new "," at ");return e.displayName&&ae.includes("<anonymous>")&&(ae=ae.replace("<anonymous>",e.displayName)),ae}while(1<=s&&0<=r);break}}}finally{fe=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Dt(a):""}function Nt(e,t){switch(e.tag){case 26:case 27:case 5:return Dt(e.type);case 16:return Dt("Lazy");case 13:return e.child!==t&&t!==null?Dt("Suspense Fallback"):Dt("Suspense");case 19:return Dt("SuspenseList");case 0:case 15:return Ee(e.type,!1);case 11:return Ee(e.type.render,!1);case 1:return Ee(e.type,!0);case 31:return Dt("Activity");case 30:return Dt("ViewTransition");default:return""}}function wn(e){try{var t="",a=null;do t+=Nt(e,a),a=e,e=e.return;while(e);return t}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var sa=Object.prototype.hasOwnProperty,nt=l.unstable_scheduleCallback,la=l.unstable_cancelCallback,bl=l.unstable_shouldYield,pl=l.unstable_requestPaint,Tt=l.unstable_now,ra=l.unstable_getCurrentPriorityLevel,ls=l.unstable_ImmediatePriority,Ps=l.unstable_UserBlockingPriority,oa=l.unstable_NormalPriority,ka=l.unstable_LowPriority,Ua=l.unstable_IdlePriority,Da=l.log,_s=l.unstable_setDisableYieldValue,pa=null,kt=null;function En(e){if(typeof Da=="function"&&_s(e),kt&&typeof kt.setStrictMode=="function")try{kt.setStrictMode(pa,e)}catch{}}var Ct=Math.clz32?Math.clz32:rs,Zs=Math.log,ia=Math.LN2;function rs(e){return e>>>=0,e===0?32:31-(Zs(e)/ia|0)|0}var Cn=256,Ta=262144,ga=4194304;function vn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function os(e,t,a){var s=e.pendingLanes;if(s===0)return 0;var r=0,i=e.suspendedLanes,m=e.pingedLanes;e=e.warmLanes;var g=s&134217727;return g!==0?(s=g&~i,s!==0?r=vn(s):(m&=g,m!==0?r=vn(m):a||(a=g&~e,a!==0&&(r=vn(a))))):(g=s&~i,g!==0?r=vn(g):m!==0?r=vn(m):a||(a=s&~e,a!==0&&(r=vn(a)))),r===0?0:t!==0&&t!==r&&(t&i)===0&&(i=r&-r,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:r}function Gt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function pn(e,t){(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var s=31-Ct(a),r=1<<s;t|=e[s],a&=~r}return t}function Ra(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function N(){var e=ga;return ga<<=1,(ga&62914560)===0&&(ga=4194304),e}function de(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function oe(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ne(e,t,a,s,r,i){var m=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var g=e.entanglements,w=e.expirationTimes,X=e.hiddenUpdates;for(a=m&~a;0<a;){var ae=31-Ct(a),be=1<<ae;g[ae]=0,w[ae]=-1;var z=X[ae];if(z!==null)for(X[ae]=null,ae=0;ae<z.length;ae++){var W=z[ae];W!==null&&(W.lane&=-536870913)}a&=~be}s!==0&&we(e,s,0),i!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=i&~(m&~t))}function we(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var s=31-Ct(t);e.entangledLanes|=t,e.entanglements[s]=e.entanglements[s]|1073741824|a&261930}function Te(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var s=31-Ct(a),r=1<<s;r&t|e[s]&t&&(e[s]|=t),a&=~r}}function on(e,t){var a=t&-t;return a=(a&42)!==0?1:Je(a),(a&(e.suspendedLanes|t))!==0?0:a}function Je(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Jn(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function zt(){var e=Re.p;return e!==0?e:(e=window.event,e===void 0?32:eh(e.type))}function at(e,t){var a=Re.p;try{return Re.p=e,t()}finally{Re.p=a}}var Xe=Math.random().toString(36).slice(2),ot="__reactFiber$"+Xe,Et="__reactProps$"+Xe,Mn="__reactContainer$"+Xe,zs="__reactEvents$"+Xe,Rc="__reactListeners$"+Xe,bo="__reactHandles$"+Xe,xr="__reactResources$"+Xe,Fs="__reactMarker$"+Xe,is="__reactLoad$"+Xe;function D(e){delete e[ot],delete e[Et],delete e[Rc],delete e[bo]}function Q(e){var t;if(t=e[ot])return t;for(var a=e.parentNode;a;){if(t=a[Mn]||a[ot]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Mx(e);e!==null;){if(a=e[ot])return a;e=Mx(e)}return t}e=a,a=e.parentNode}return null}function je(e){if(e=e[ot]||e[Mn]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ge(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function jt(e){var t=e[xr];return t||(t=e[xr]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ve(e){e[Fs]=!0}function cn(e){e[is]=void 0}var It=new Set,Ft={};function Bt(e,t){Jt(e,t),Jt(e+"Capture",t)}function Jt(e,t){for(Ft[e]=t,e=0;e<t.length;e++)It.add(t[e])}var vt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Xt={},e0={};function yp(e){return sa.call(e0,e)?!0:sa.call(Xt,e)?!1:vt.test(e)?e0[e]=!0:(Xt[e]=!0,!1)}var it=!1;function t0(){var e=it;return it=!1,e}function po(e,t,a){if(yp(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var s=t.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,a)}}function go(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,a)}}function Ga(e,t,a,s){if(s===null)e.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,s)}}function kn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function n0(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Np(e,t,a){var s=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var r=s.get,i=s.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(m){a=""+m,i.call(this,m)}}),Object.defineProperty(e,t,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(m){a=""+m},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Sc(e){if(!e._valueTracker){var t=n0(e)?"checked":"value";e._valueTracker=Np(e,t,""+e[t])}}function a0(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),s="";return e&&(s=n0(e)?e.checked?"true":"false":e.value),e=s,e!==a?(t.setValue(e),!0):!1}var vp=/[\n"\\]/g;function Xn(e){return e.replace(vp,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function yc(e,t,a,s,r,i,m,g){e.name="",m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.type=m:e.removeAttribute("type"),t!=null?m==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+kn(t)):e.value!==""+kn(t)&&(e.value=""+kn(t)):m!=="submit"&&m!=="reset"||e.removeAttribute("value"),t!=null?m==="number"&&e.value==t?Nc(e,kn(e.value)):Nc(e,kn(t)):a!=null?Nc(e,kn(a)):s!=null&&e.removeAttribute("value"),r==null&&i!=null&&(e.defaultChecked=!!i),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.name=""+kn(g):e.removeAttribute("name")}function s0(e,t,a,s,r,i,m,g){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){Sc(e);return}a=a!=null?""+kn(a):"",t=t!=null?""+kn(t):a,g||t===e.value||(e.value=t),e.defaultValue=t}s=s??r,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=g?e.checked:!!s,e.defaultChecked=!!s,m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.name=m),Sc(e)}function Nc(e,t){e.defaultValue!==""+t&&(e.defaultValue=""+t)}function gl(e,t,a,s){if(e=e.options,t){t={};for(var r=0;r<a.length;r++)t["$"+a[r]]=!0;for(a=0;a<e.length;a++)r=t.hasOwnProperty("$"+e[a].value),e[a].selected!==r&&(e[a].selected=r),r&&s&&(e[a].defaultSelected=!0)}else{for(a=""+kn(a),t=null,r=0;r<e.length;r++){if(e[r].value===a){e[r].selected=!0,s&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function l0(e,t,a){if(t!=null&&(t=""+kn(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+kn(a):""}function r0(e,t,a,s){if(t==null){if(s!=null){if(a!=null)throw Error(c(92));if(Z(s)){if(1<s.length)throw Error(c(93));s=s[0]}a=s}a==null&&(a=""),t=a}a=kn(t),e.defaultValue=a,s=e.textContent,s===a&&s!==""&&s!==null&&(e.value=s),Sc(e)}function Rl(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Lp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function o0(e,t,a){var s=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":s?e.setProperty(t,a):typeof a!="number"||a===0||Lp.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function i0(e,t,a){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||t!=null&&t.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="",it=!0);for(var r in t)s=t[r],t.hasOwnProperty(r)&&a[r]!==s&&(o0(e,r,s),it=!0)}else for(var i in t)t.hasOwnProperty(i)&&o0(e,i,t[i])}function vc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Op=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),jp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ro(e){return jp.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Sa(){}var Lc=null;function Oc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Sl=null,yl=null;function c0(e){var t=je(e);if(t&&(e=t.stateNode)){var a=e[Et]||null;e:switch(e=t.stateNode,t.type){case"input":if(yc(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Xn(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var s=a[t];if(s!==e&&s.form===e.form){var r=s[Et]||null;if(!r)throw Error(c(90));yc(s,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(t=0;t<a.length;t++)s=a[t],s.form===e.form&&a0(s)}break e;case"textarea":l0(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&gl(e,!!a.multiple,t,!1)}}}var jc=!1;function u0(e,t,a){if(jc)return e(t,a);jc=!0;try{var s=e(t);return s}finally{if(jc=!1,(Sl!==null||yl!==null)&&(Ri(),Sl&&(t=Sl,e=yl,yl=Sl=null,c0(t),e)))for(t=0;t<e.length;t++)c0(e[t])}}function hr(e,t){var a=e.stateNode;if(a===null)return null;var s=a[Et]||null;if(s===null)return null;a=s[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(c(231,t,typeof a));return a}var Ka=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ic=!1;if(Ka)try{var br={};Object.defineProperty(br,"passive",{get:function(){Ic=!0}}),window.addEventListener("test",br,br),window.removeEventListener("test",br,br)}catch{Ic=!1}var cs=null,Bc=null,So=null;function d0(){if(So)return So;var e,t=Bc,a=t.length,s,r="value"in cs?cs.value:cs.textContent,i=r.length;for(e=0;e<a&&t[e]===r[e];e++);var m=a-e;for(s=1;s<=m&&t[a-s]===r[i-s];s++);return So=r.slice(e,1<s?1-s:void 0)}function yo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function No(){return!0}function m0(){return!1}function gn(e){function t(a,s,r,i,m){this._reactName=a,this._targetInst=r,this.type=s,this.nativeEvent=i,this.target=m,this.currentTarget=null;for(var g in e)e.hasOwnProperty(g)&&(a=e[g],this[g]=a?a(i):i[g]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?No:m0,this.isPropagationStopped=m0,this}return ce(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=No)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=No)},persist:function(){},isPersistent:No}),t}var us={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vo=gn(us),pr=ce({},us,{view:0,detail:0}),Ip=gn(pr),Hc,wc,gr,Lo=ce({},pr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==gr&&(gr&&e.type==="mousemove"?(Hc=e.screenX-gr.screenX,wc=e.screenY-gr.screenY):wc=Hc=0,gr=e),Hc)},movementY:function(e){return"movementY"in e?e.movementY:wc}}),A0=gn(Lo),Bp=ce({},Lo,{dataTransfer:0}),Hp=gn(Bp),wp=ce({},pr,{relatedTarget:0}),Ec=gn(wp),Ep=ce({},us,{animationName:0,elapsedTime:0,pseudoElement:0}),Cp=gn(Ep),Mp=ce({},us,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),kp=gn(Mp),Up=ce({},us,{data:0}),f0=gn(Up),Dp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Tp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Gp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Kp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Gp[e])?!!t[e]:!1}function Cc(){return Kp}var Pp=ce({},pr,{key:function(e){if(e.key){var t=Dp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=yo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Tp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cc,charCode:function(e){return e.type==="keypress"?yo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?yo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),_p=gn(Pp),Zp=ce({},Lo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),x0=gn(Zp),zp=ce({},us,{submitter:0}),Fp=gn(zp),Jp=ce({},pr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cc}),Xp=gn(Jp),Vp=ce({},us,{propertyName:0,elapsedTime:0,pseudoElement:0}),Yp=gn(Vp),qp=ce({},Lo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Qp=gn(qp),$p=ce({},us,{newState:0,oldState:0,source:0}),Wp=gn($p),eg=[9,13,27,32],Mc=Ka&&"CompositionEvent"in window,Rr=null;Ka&&"documentMode"in document&&(Rr=document.documentMode);var tg=Ka&&"TextEvent"in window&&!Rr,h0=Ka&&(!Mc||Rr&&8<Rr&&11>=Rr),b0=" ",p0=!1;function g0(e,t){switch(e){case"keyup":return eg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function R0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Nl=!1;function ng(e,t){switch(e){case"compositionend":return R0(t);case"keypress":return t.which!==32?null:(p0=!0,b0);case"textInput":return e=t.data,e===b0&&p0?null:e;default:return null}}function ag(e,t){if(Nl)return e==="compositionend"||!Mc&&g0(e,t)?(e=d0(),So=Bc=cs=null,Nl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return h0&&t.locale!=="ko"?null:t.data;default:return null}}var sg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function S0(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!sg[e.type]:t==="textarea"}function y0(e,t,a,s){Sl?yl?yl.push(s):yl=[s]:Sl=s,t=Oi(t,"onChange"),0<t.length&&(a=new vo("onChange","change",null,a,s),e.push({event:a,listeners:t}))}var Sr=null,yr=null;function lg(e){ux(e,0)}function Oo(e){var t=Ge(e);if(a0(t))return e}function N0(e,t){if(e==="change")return t}var v0=!1;if(Ka){var kc;if(Ka){var Uc="oninput"in document;if(!Uc){var L0=document.createElement("div");L0.setAttribute("oninput","return;"),Uc=typeof L0.oninput=="function"}kc=Uc}else kc=!1;v0=kc&&(!document.documentMode||9<document.documentMode)}function O0(){Sr&&(Sr.detachEvent("onpropertychange",j0),yr=Sr=null)}function j0(e){if(e.propertyName==="value"&&Oo(yr)){var t=[];y0(t,yr,e,Oc(e)),u0(lg,t)}}function rg(e,t,a){e==="focusin"?(O0(),Sr=t,yr=a,Sr.attachEvent("onpropertychange",j0)):e==="focusout"&&O0()}function og(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Oo(yr)}function ig(e,t){if(e==="click")return Oo(t)}function cg(e,t){if(e==="input"||e==="change")return Oo(t)}function ug(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Un=typeof Object.is=="function"?Object.is:ug;function Nr(e,t){if(Un(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),s=Object.keys(t);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var r=a[s];if(!sa.call(t,r)||!Un(e[r],t[r]))return!1}return!0}function Dc(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function I0(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function B0(e,t){var a=I0(e);e=0;for(var s;a;){if(a.nodeType===3){if(s=e+a.textContent.length,e<=t&&s>=t)return{node:a,offset:t-e};e=s}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=I0(a)}}function H0(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?H0(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function w0(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Dc(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Dc(e.document)}return t}function Tc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var dg=Ka&&"documentMode"in document&&11>=document.documentMode,vl=null,Gc=null,vr=null,Kc=!1;function E0(e,t,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Kc||vl==null||vl!==Dc(s)||(s=vl,"selectionStart"in s&&Tc(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),vr&&Nr(vr,s)||(vr=s,s=Oi(Gc,"onSelect"),0<s.length&&(t=new vo("onSelect","select",null,t,a),e.push({event:t,listeners:s}),t.target=vl)))}function Js(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Ll={animationend:Js("Animation","AnimationEnd"),animationiteration:Js("Animation","AnimationIteration"),animationstart:Js("Animation","AnimationStart"),transitionrun:Js("Transition","TransitionRun"),transitionstart:Js("Transition","TransitionStart"),transitioncancel:Js("Transition","TransitionCancel"),transitionend:Js("Transition","TransitionEnd")},Pc={},C0={};Ka&&(C0=document.createElement("div").style,"AnimationEvent"in window||(delete Ll.animationend.animation,delete Ll.animationiteration.animation,delete Ll.animationstart.animation),"TransitionEvent"in window||delete Ll.transitionend.transition);function Xs(e){if(Pc[e])return Pc[e];if(!Ll[e])return e;var t=Ll[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in C0)return Pc[e]=t[a];return e}var M0=Xs("animationend"),k0=Xs("animationiteration"),U0=Xs("animationstart"),mg=Xs("transitionrun"),Ag=Xs("transitionstart"),fg=Xs("transitioncancel"),D0=Xs("transitionend"),T0=new Map,_c="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");_c.push("scrollEnd");function ca(e,t){T0.set(e,t),Bt(t,[e])}var xg=0;function Pa(e,t){if(e.name!=null&&e.name!=="auto")return e.name;if(t.autoName!==null)return t.autoName;e=Aa.identifierPrefix;var a=xg++;return e="_"+e+"t_"+a.toString(32)+"_",t.autoName=e}function G0(e){if(e==null||typeof e=="string")return e;var t=null,a=Fl;if(a!==null)for(var s=0;s<a.length;s++){var r=e[a[s]];if(r!=null){if(r==="none")return"none";t=t==null?r:t+(" "+r)}}return t??e.default}function _a(e,t){return e=G0(e),t=G0(t),t==null?e==="auto"?null:e:t==="auto"?null:t}var jo=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Vn=[],Ol=0,Zc=0;function Io(){for(var e=Ol,t=Zc=Ol=0;t<e;){var a=Vn[t];Vn[t++]=null;var s=Vn[t];Vn[t++]=null;var r=Vn[t];Vn[t++]=null;var i=Vn[t];if(Vn[t++]=null,s!==null&&r!==null){var m=s.pending;m===null?r.next=r:(r.next=m.next,m.next=r),s.pending=r}i!==0&&K0(a,r,i)}}function Bo(e,t,a,s){Vn[Ol++]=e,Vn[Ol++]=t,Vn[Ol++]=a,Vn[Ol++]=s,Zc|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function zc(e,t,a,s){return Bo(e,t,a,s),Ho(e)}function Vs(e,t){return Bo(e,null,null,t),Ho(e)}function K0(e,t,a){e.lanes|=a;var s=e.alternate;s!==null&&(s.lanes|=a);for(var r=!1,i=e.return;i!==null;)i.childLanes|=a,s=i.alternate,s!==null&&(s.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(r=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,r&&t!==null&&(r=31-Ct(a),e=i.hiddenUpdates,s=e[r],s===null?e[r]=[t]:s.push(t),t.lane=a|536870912),i):null}function Ho(e){if(50<Jr)throw Jr=0,gi=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var jl={};function hg(e,t,a,s){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ln(e,t,a,s){return new hg(e,t,a,s)}function Fc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Za(e,t){var a=e.alternate;return a===null?(a=Ln(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&1206910976,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function P0(e,t){e.flags&=1206910978;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function wo(e,t,a,s,r,i){var m=0;if(s=e,typeof s=="function")Fc(s)&&(m=1);else if(typeof s=="string")m=z1(e,a,lt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(s){case U:return e=Ln(31,a,t,r),e.elementType=U,e.lanes=i,e;case ne:return Ys(a.children,r,i,t);case me:m=8,r|=24;break;case pe:return e=Ln(12,a,t,r|2),e.elementType=pe,e.lanes=i,e;case I:return e=Ln(13,a,t,r),e.elementType=I,e.lanes=i,e;case re:return e=Ln(19,a,t,r),e.elementType=re,e.lanes=i,e;case B:case y:return e=r|32,e=Ln(30,a,t,e),e.elementType=y,e.lanes=i,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof s=="object"&&s!==null)switch(s.$$typeof){case O:m=10;break e;case j:m=9;break e;case R:m=11;break e;case ee:m=14;break e;case M:m=16,s=null;break e}m=29,a=Error(c(130,e===null?"null":typeof e,"")),s=null}return t=Ln(m,a,t,r),t.elementType=e,t.type=s,t.lanes=i,t}function Ys(e,t,a,s){return e=Ln(7,e,s,t),e.lanes=a,e}function Jc(e,t,a){return e=Ln(6,e,null,t),e.lanes=a,e}function _0(e){var t=Ln(18,null,null,0);return t.stateNode=e,t}function Xc(e,t,a){return t=Ln(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Z0=new WeakMap;function Yn(e,t){if(typeof e=="object"&&e!==null){var a=Z0.get(e);return a!==void 0?a:(t={value:e,source:t,stack:wn(t)},Z0.set(e,t),t)}return{value:e,source:t,stack:wn(t)}}var Il=[],Bl=0,Eo=null,Lr=0,qn=[],Qn=0,ds=null,ya=1,Na="";function za(e,t){Il[Bl++]=Lr,Il[Bl++]=Eo,Eo=e,Lr=t}function z0(e,t,a){qn[Qn++]=ya,qn[Qn++]=Na,qn[Qn++]=ds,ds=e;var s=ya;e=Na;var r=32-Ct(s)-1;s&=~(1<<r),a+=1;var i=32-Ct(t)+r;if(30<i){var m=r-r%5;i=(s&(1<<m)-1).toString(32),s>>=m,r-=m,ya=1<<32-Ct(t)+r|a<<r|s,Na=i+e}else ya=1<<i|a<<r|s,Na=e}function Co(e){e.return!==null&&(za(e,1),z0(e,1,0))}function Vc(e){for(;e===Eo;)Eo=Il[--Bl],Il[Bl]=null,Lr=Il[--Bl],Il[Bl]=null;for(;e===ds;)ds=qn[--Qn],qn[Qn]=null,Na=qn[--Qn],qn[Qn]=null,ya=qn[--Qn],qn[Qn]=null}function F0(e,t){qn[Qn++]=ya,qn[Qn++]=Na,qn[Qn++]=ds,ya=t.id,Na=t.overflow,ds=e}var tn=null,Ht=null,ze=!1,ms=null,$n=!1,Yc=Error(c(519));function As(e){var t=Error(c(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Or(Yn(t,e)),Yc}function J0(e){var t=e.stateNode,a=e.type,s=e.memoizedProps;switch(t[ot]=e,t[Et]=s,a){case"dialog":qe("cancel",t),qe("close",t);break;case"iframe":case"object":case"embed":qe("load",t);break;case"video":case"audio":for(a=0;a<Vr.length;a++)qe(Vr[a],t);break;case"source":qe("error",t);break;case"img":case"image":case"link":qe("error",t),qe("load",t);break;case"details":qe("toggle",t);break;case"input":qe("invalid",t),s0(t,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":qe("invalid",t);break;case"textarea":qe("invalid",t),r0(t,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||s.suppressHydrationWarning===!0||fx(t.textContent,a)?(s.popover!=null&&(qe("beforetoggle",t),qe("toggle",t)),s.onScroll!=null&&qe("scroll",t),s.onScrollEnd!=null&&qe("scrollend",t),s.onClick!=null&&(t.onclick=Sa),t=!0):t=!1,t||As(e,!0)}function Mo(e){for(tn=e.return;tn;)switch(tn.tag){case 5:case 31:case 13:$n=!1;return;case 27:case 3:$n=!0;return;default:tn=tn.return}}function Hl(e){if(e!==tn)return!1;if(!ze)return Mo(e),ze=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Ld(e.type,e.memoizedProps)),a=!a),a&&Ht&&As(e),Mo(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Ht=Cx(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Ht=Cx(e)}else t===27?(t=Ht,Bs(e.type)?(e=Md,Md=null,Ht=e):Ht=t):Ht=tn?ea(e.stateNode.nextSibling):null;return!0}function qs(){Ht=tn=null,ze=!1}function qc(){var e=ms;return e!==null&&(In===null?In=e:In.push.apply(In,e),ms=null),e}function Or(e){ms===null?ms=[e]:ms.push(e)}var Qc=ft(null),Qs=null,Fa=null;function fs(e,t,a){Le(Qc,t._currentValue),t._currentValue=a}function Ja(e){e._currentValue=Qc.current,tt(Qc)}function ko(e,t,a){for(;e!==null;){var s=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,s!==null&&(s.childLanes|=t)):s!==null&&(s.childLanes&t)!==t&&(s.childLanes|=t),e===a)break;e=e.return}}function $c(e,t,a,s){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var i=r.dependencies;if(i!==null){var m=r.child;i=i.firstContext;e:for(;i!==null;){var g=i;i=r;for(var w=0;w<t.length;w++)if(g.context===t[w]){i.lanes|=a,g=i.alternate,g!==null&&(g.lanes|=a),ko(i.return,a,e),s||(m=null);break e}i=g.next}}else if(r.tag===18){if(m=r.return,m===null)throw Error(c(341));m.lanes|=a,i=m.alternate,i!==null&&(i.lanes|=a),ko(m,a,e),m=null}else r.tag===13&&r.memoizedState!==null&&r.memoizedState.dehydrated===null?(r.lanes|=a,m=r.alternate,m!==null&&(m.lanes|=a),ko(r.return,a,e),m=r.child,m=m!==null?m.sibling:null):m=r.child;if(m!==null)m.return=r;else for(m=r;m!==null;){if(m===e){m=null;break}if(r=m.sibling,r!==null){r.return=m.return,m=r;break}m=m.return}r=m}}function $s(e,t,a,s){e=null;for(var r=t,i=!1;r!==null;){if(!i){if((r.flags&524288)!==0)i=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var m=r.alternate;if(m===null)throw Error(c(387));if(m=m.memoizedProps,m!==null){var g=r.type;Un(r.pendingProps.value,m.value)||(e!==null?e.push(g):e=[g])}}else if(r===yt.current){if(m=r.alternate,m===null)throw Error(c(387));m.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push(tr):e=[tr])}r=r.return}return e!==null&&$c(t,e,a,s),t.flags|=262144,e!==null}function Uo(e){for(e=e.firstContext;e!==null;){if(!Un(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ws(e){Qs=e,Fa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function un(e){return X0(Qs,e)}function Do(e,t){return Qs===null&&Ws(e),X0(e,t)}function X0(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Fa===null){if(e===null)throw Error(c(308));Fa=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Fa=Fa.next=t;return a}var bg=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,s){e.push(s)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},pg=l.unstable_scheduleCallback,gg=l.unstable_NormalPriority,Yt={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Wc(){return{controller:new bg,data:new Map,refCount:0}}function jr(e){e.refCount--,e.refCount===0&&pg(gg,function(){e.controller.abort()})}function V0(e,t){if((e.pendingLanes&4194048)!==0){var a=e.transitionTypes;for(a===null&&(a=e.transitionTypes=[]),e=0;e<t.length;e++){var s=t[e];a.indexOf(s)===-1&&a.push(s)}}}var Ir=null;function Rg(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var Br=null,eu=0,el=0,wl=null;function Sg(e,t){if(Br===null){var a=Br=[];eu=0,el=hd(),wl={status:"pending",value:void 0,then:function(s){a.push(s)}}}return eu++,t.then(Y0,Y0),t}function Y0(){if(--eu===0&&(Ir=null,Br!==null)){wl!==null&&(wl.status="fulfilled");var e=Br;Br=null,el=0,wl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function yg(e,t){var a=[],s={status:"pending",value:null,reason:null,then:function(r){a.push(r)}};return e.then(function(){s.status="fulfilled",s.value=t;for(var r=0;r<a.length;r++)(0,a[r])(t)},function(r){for(s.status="rejected",s.reason=r,r=0;r<a.length;r++)(0,a[r])(void 0)}),s}var q0=F.S;F.S=function(e,t){if(Zf=Tt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Sg(e,t),Ir!==null)for(var a=Yl;a!==null;)V0(a,Ir),a=a.next;if(a=e.types,a!==null){for(var s=Yl;s!==null;)V0(s,a),s=s.next;if(el!==0){s=Ir,s===null&&(s=Ir=[]);for(var r=0;r<a.length;r++){var i=a[r];s.indexOf(i)===-1&&s.push(i)}}}q0!==null&&q0(e,t)};var tl=ft(null);function tu(){var e=tl.current;return e!==null?e:Lt.pooledCache}function To(e,t){t===null?Le(tl,tl.current):Le(tl,t.pool)}function Q0(){var e=tu();return e===null?null:{parent:Yt._currentValue,pool:e}}var El=Error(c(460)),nu=Error(c(474)),Go=Error(c(542)),Ko={then:function(){}};function $0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function W0(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Sa,Sa),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,tA(e),e===void 0&&!("reason"in t)?Error(c(600)):e;default:if(typeof t.status=="string")t.then(Sa,Sa);else{if(e=Lt,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(s){if(t.status==="pending"){var r=t;r.status="fulfilled",r.value=s}},function(s){if(t.status==="pending"){var r=t;r.status="rejected",r.reason=s}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,tA(e),e}throw al=t,El}}function nl(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(al=a,El):a}}var al=null;function eA(){if(al===null)throw Error(c(459));var e=al;return al=null,e}function tA(e){if(e===El||e===Go)throw Error(c(483))}var Cl=null,Hr=0;function Po(e){var t=Hr;return Hr+=1,Cl===null&&(Cl=[]),W0(Cl,e,t)}function xs(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function _o(e,t){throw t.$$typeof===E?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function nA(e){function t(J,T){if(e){var $=J.deletions;$===null?(J.deletions=[T],J.flags|=16):$.push(T)}}function a(J,T){if(!e)return null;for(;T!==null;)t(J,T),T=T.sibling;return null}function s(J){for(var T=new Map;J!==null;)J.key===null?T.set(J.index,J):T.set(J.key,J),J=J.sibling;return T}function r(J,T){return J=Za(J,T),J.index=0,J.sibling=null,J}function i(J,T,$){return J.index=$,e?($=J.alternate,$!==null?($=$.index,$<T?(J.flags|=2,T):$):(J.flags|=134217730,T)):(J.flags|=1048576,T)}function m(J){return e&&J.alternate===null&&(J.flags|=134217730),J}function g(J,T,$,he){return T===null||T.tag!==6?(T=Jc($,J.mode,he),T.return=J,T):(T=r(T,$),T.return=J,T)}function w(J,T,$,he){var Be=$.type;return Be===ne?(J=ae(J,T,$.props.children,he,$.key),xs(J,$),J):T!==null&&(T.elementType===Be||typeof Be=="object"&&Be!==null&&Be.$$typeof===M&&nl(Be)===T.type)?(T=r(T,$.props),xs(T,$),T.return=J,T):(T=wo($.type,$.key,$.props,null,J.mode,he),xs(T,$),T.return=J,T)}function X(J,T,$,he){return T===null||T.tag!==4||T.stateNode.containerInfo!==$.containerInfo||T.stateNode.implementation!==$.implementation?(T=Xc($,J.mode,he),T.return=J,T):(T=r(T,$.children||[]),T.return=J,T)}function ae(J,T,$,he,Be){return T===null||T.tag!==7?(T=Ys($,J.mode,he,Be),T.return=J,T):(T=r(T,$),T.return=J,T)}function be(J,T,$){if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return T=Jc(""+T,J.mode,$),T.return=J,T;if(typeof T=="object"&&T!==null){switch(T.$$typeof){case se:return $=wo(T.type,T.key,T.props,null,J.mode,$),xs($,T),$.return=J,$;case ie:return T=Xc(T,J.mode,$),T.return=J,T;case M:return T=nl(T),be(J,T,$)}if(Z(T)||Y(T))return T=Ys(T,J.mode,$,null),T.return=J,T;if(typeof T.then=="function")return be(J,Po(T),$);if(T.$$typeof===O)return be(J,Do(J,T),$);_o(J,T)}return null}function z(J,T,$,he){var Be=T!==null?T.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return Be!==null?null:g(J,T,""+$,he);if(typeof $=="object"&&$!==null){switch($.$$typeof){case se:return $.key===Be?w(J,T,$,he):null;case ie:return $.key===Be?X(J,T,$,he):null;case M:return $=nl($),z(J,T,$,he)}if(Z($)||Y($))return Be!==null?null:ae(J,T,$,he,null);if(typeof $.then=="function")return z(J,T,Po($),he);if($.$$typeof===O)return z(J,T,Do(J,$),he);_o(J,$)}return null}function W(J,T,$,he,Be){if(typeof he=="string"&&he!==""||typeof he=="number"||typeof he=="bigint")return J=J.get($)||null,g(T,J,""+he,Be);if(typeof he=="object"&&he!==null){switch(he.$$typeof){case se:return J=J.get(he.key===null?$:he.key)||null,w(T,J,he,Be);case ie:return J=J.get(he.key===null?$:he.key)||null,X(T,J,he,Be);case M:return he=nl(he),W(J,T,$,he,Be)}if(Z(he)||Y(he))return J=J.get($)||null,ae(T,J,he,Be,null);if(typeof he.then=="function")return W(J,T,$,Po(he),Be);if(he.$$typeof===O)return W(J,T,$,Do(T,he),Be);_o(T,he)}return null}function ve(J,T,$,he){for(var Be=null,We=null,Ce=T,Me=T=0,$t=null;Ce!==null&&Me<$.length;Me++){Ce.index>Me?($t=Ce,Ce=null):$t=Ce.sibling;var st=z(J,Ce,$[Me],he);if(st===null){Ce===null&&(Ce=$t);break}e&&Ce&&st.alternate===null&&t(J,Ce),T=i(st,T,Me),We===null?Be=st:We.sibling=st,We=st,Ce=$t}if(Me===$.length)return a(J,Ce),ze&&za(J,Me),Be;if(Ce===null){for(;Me<$.length;Me++)Ce=be(J,$[Me],he),Ce!==null&&(T=i(Ce,T,Me),We===null?Be=Ce:We.sibling=Ce,We=Ce);return ze&&za(J,Me),Be}for(Ce=s(Ce);Me<$.length;Me++)$t=W(Ce,J,Me,$[Me],he),$t!==null&&(e&&(st=$t.alternate,st!==null&&Ce.delete(st.key===null?Me:st.key)),T=i($t,T,Me),We===null?Be=$t:We.sibling=$t,We=$t);return e&&Ce.forEach(function(Ms){return t(J,Ms)}),ze&&za(J,Me),Be}function He(J,T,$,he){if($==null)throw Error(c(151));for(var Be=null,We=null,Ce=T,Me=T=0,$t=null,st=$.next();Ce!==null&&!st.done;Me++,st=$.next()){Ce.index>Me?($t=Ce,Ce=null):$t=Ce.sibling;var Ms=z(J,Ce,st.value,he);if(Ms===null){Ce===null&&(Ce=$t);break}e&&Ce&&Ms.alternate===null&&t(J,Ce),T=i(Ms,T,Me),We===null?Be=Ms:We.sibling=Ms,We=Ms,Ce=$t}if(st.done)return a(J,Ce),ze&&za(J,Me),Be;if(Ce===null){for(;!st.done;Me++,st=$.next())st=be(J,st.value,he),st!==null&&(T=i(st,T,Me),We===null?Be=st:We.sibling=st,We=st);return ze&&za(J,Me),Be}for(Ce=s(Ce);!st.done;Me++,st=$.next())st=W(Ce,J,Me,st.value,he),st!==null&&(e&&($t=st.alternate,$t!==null&&Ce.delete($t.key===null?Me:$t.key)),T=i(st,T,Me),We===null?Be=st:We.sibling=st,We=st);return e&&Ce.forEach(function(n2){return t(J,n2)}),ze&&za(J,Me),Be}function Pe(J,T,$,he){if(typeof $=="object"&&$!==null&&$.type===ne&&$.key===null&&$.props.ref===void 0&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case se:e:{for(var Be=$.key;T!==null;){if(T.key===Be){if(Be=$.type,Be===ne){if(T.tag===7){a(J,T.sibling),he=r(T,$.props.children),xs(he,$),he.return=J,J=he;break e}}else if(T.elementType===Be||typeof Be=="object"&&Be!==null&&Be.$$typeof===M&&nl(Be)===T.type){a(J,T.sibling),he=r(T,$.props),xs(he,$),he.return=J,J=he;break e}a(J,T);break}else t(J,T);T=T.sibling}$.type===ne?(he=Ys($.props.children,J.mode,he,$.key),xs(he,$),he.return=J,J=he):(he=wo($.type,$.key,$.props,null,J.mode,he),xs(he,$),he.return=J,J=he)}return m(J);case ie:e:{for(Be=$.key;T!==null;){if(T.key===Be)if(T.tag===4&&T.stateNode.containerInfo===$.containerInfo&&T.stateNode.implementation===$.implementation){a(J,T.sibling),he=r(T,$.children||[]),he.return=J,J=he;break e}else{a(J,T);break}else t(J,T);T=T.sibling}he=Xc($,J.mode,he),he.return=J,J=he}return m(J);case M:return $=nl($),Pe(J,T,$,he)}if(Z($))return ve(J,T,$,he);if(Y($)){if(Be=Y($),typeof Be!="function")throw Error(c(150));return $=Be.call($),He(J,T,$,he)}if(typeof $.then=="function")return Pe(J,T,Po($),he);if($.$$typeof===O)return Pe(J,T,Do(J,$),he);_o(J,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,T!==null&&T.tag===6?(a(J,T.sibling),he=r(T,$),he.return=J,J=he):(a(J,T),he=Jc($,J.mode,he),he.return=J,J=he),m(J)):a(J,T)}return function(J,T,$,he){try{Hr=0;var Be=Pe(J,T,$,he);return Cl=null,Be}catch(Ce){if(Ce===El||Ce===Go)throw Ce;var We=Ln(29,Ce,null,J.mode);return We.lanes=he,We.return=J,We}finally{}}}var sl=nA(!0),aA=nA(!1),hs=!1;function au(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function su(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function bs(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ps(e,t,a){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(ut&2)!==0){var r=s.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),s.pending=t,t=Ho(e),K0(e,null,a),t}return Bo(e,s,t,a),Ho(e)}function wr(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var s=t.lanes;s&=e.pendingLanes,a|=s,t.lanes=a,Te(e,a)}}function lu(e,t){var a=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var r=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var m={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?r=i=m:i=i.next=m,a=a.next}while(a!==null);i===null?r=i=t:i=i.next=t}else r=i=t;a={baseState:s.baseState,firstBaseUpdate:r,lastBaseUpdate:i,shared:s.shared,callbacks:s.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var ru=!1;function Er(){if(ru){var e=wl;if(e!==null)throw e}}function Cr(e,t,a,s){ru=!1;var r=e.updateQueue;hs=!1;var i=r.firstBaseUpdate,m=r.lastBaseUpdate,g=r.shared.pending;if(g!==null){r.shared.pending=null;var w=g,X=w.next;w.next=null,m===null?i=X:m.next=X,m=w;var ae=e.alternate;ae!==null&&(ae=ae.updateQueue,g=ae.lastBaseUpdate,g!==m&&(g===null?ae.firstBaseUpdate=X:g.next=X,ae.lastBaseUpdate=w))}if(i!==null){var be=r.baseState;m=0,ae=X=w=null,g=i;do{var z=g.lane&-536870913,W=z!==g.lane;if(W?($e&z)===z:(s&z)===z){z!==0&&z===el&&(ru=!0),ae!==null&&(ae=ae.next={lane:0,tag:g.tag,payload:g.payload,callback:null,next:null});e:{var ve=e,He=g;z=t;var Pe=a;switch(He.tag){case 1:if(ve=He.payload,typeof ve=="function"){be=ve.call(Pe,be,z);break e}be=ve;break e;case 3:ve.flags=ve.flags&-65537|128;case 0:if(ve=He.payload,z=typeof ve=="function"?ve.call(Pe,be,z):ve,z==null)break e;be=ce({},be,z);break e;case 2:hs=!0}}z=g.callback,z!==null&&(e.flags|=64,W&&(e.flags|=8192),W=r.callbacks,W===null?r.callbacks=[z]:W.push(z))}else W={lane:z,tag:g.tag,payload:g.payload,callback:g.callback,next:null},ae===null?(X=ae=W,w=be):ae=ae.next=W,m|=z;if(g=g.next,g===null){if(g=r.shared.pending,g===null)break;W=g,g=W.next,W.next=null,r.lastBaseUpdate=W,r.shared.pending=null}}while(!0);ae===null&&(w=be),r.baseState=w,r.firstBaseUpdate=X,r.lastBaseUpdate=ae,i===null&&(r.shared.lanes=0),Ls|=m,e.lanes=m,e.memoizedState=be}}function sA(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function lA(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)sA(a[e],t)}var gs=ft(null),Zo=ft(0);function rA(e,t){e=Qa,Le(Zo,e),Le(gs,t),Qa=e|t.baseLanes}function ou(){Le(Zo,Qa),Le(gs,gs.current)}function iu(){Qa=Zo.current,tt(gs),tt(Zo)}var dn=ft(null),bn=null;function Rs(e){var t=e.alternate;Le(mn,mn.current&1),Le(dn,e),bn===null&&(t===null||gs.current!==null||t.memoizedState!==null)&&(bn=e)}function cu(e){Le(mn,mn.current),Le(dn,e),bn===null&&(bn=e)}function oA(e){e.tag===22?(Le(mn,mn.current),Le(dn,e),bn===null&&(bn=e)):Ss()}function Ss(){Le(mn,mn.current),Le(dn,dn.current)}function Dn(e){tt(dn),bn===e&&(bn=null),tt(mn)}var mn=ft(0);function Mr(e,t){Le(dn,dn.current),Le(mn,t)}function uu(e){tt(mn),tt(dn),bn===e&&(bn=null)}function zo(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Ed(a)||Cd(a)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!=="independent"){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Xa=0,Ke=null,Rt=null,qt=null,Fo=!1,Ml=!1,ll=!1,Jo=0,kr=0,kl=null,Ng=0;function Kt(){throw Error(c(321))}function du(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!Un(e[a],t[a]))return!1;return!0}function mu(e,t,a,s,r,i){return Xa=i,Ke=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,F.H=e===null||e.memoizedState===null?zA:FA,ll=!1,i=a(s,r),ll=!1,Ml&&(i=cA(t,a,s,r)),iA(e),i}function iA(e){F.H=Wo;var t=Rt!==null&&Rt.next!==null;if(Xa=0,qt=Rt=Ke=null,Fo=!1,kr=0,kl=null,t)throw Error(c(300));e===null||Qt||(e=e.dependencies,e!==null&&Uo(e)&&(Qt=!0))}function cA(e,t,a,s){Ke=e;var r=0;do{if(Ml&&(kl=null),kr=0,Ml=!1,25<=r)throw Error(c(301));if(r+=1,qt=Rt=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}F.H=wg,i=t(a,s)}while(Ml);return i}function vg(){var e=F.H,t=e.useState()[0];return t=typeof t.then=="function"?Ur(t):t,e=e.useState()[0],(Rt!==null?Rt.memoizedState:null)!==e&&(Ke.flags|=1024),t}function Au(){var e=Jo!==0;return Jo=0,e}function fu(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function xu(e){if(Fo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Fo=!1}Xa=0,qt=Rt=Ke=null,Ml=!1,kr=Jo=0,kl=null}function Rn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qt===null?Ke.memoizedState=qt=e:qt=qt.next=e,qt}function Vt(){if(Rt===null){var e=Ke.alternate;e=e!==null?e.memoizedState:null}else e=Rt.next;var t=qt===null?Ke.memoizedState:qt.next;if(t!==null)qt=t,Rt=e;else{if(e===null)throw Ke.alternate===null?Error(c(467)):Error(c(310));Rt=e,e={memoizedState:Rt.memoizedState,baseState:Rt.baseState,baseQueue:Rt.baseQueue,queue:Rt.queue,next:null},qt===null?Ke.memoizedState=qt=e:qt=qt.next=e}return qt}function Xo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ur(e){var t=kr;return kr+=1,kl===null&&(kl=[]),e=W0(kl,e,t),t=Ke,(qt===null?t.memoizedState:qt.next)===null&&(t=t.alternate,F.H=t===null||t.memoizedState===null?zA:FA),e}function Vo(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ur(e);if(e.$$typeof===le)return;if(e.$$typeof===O)return un(e)}throw Error(c(438,String(e)))}function hu(e){var t=null,a=Ke.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var s=Ke.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(t={data:s.data.map(function(r){return r.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Xo(),Ke.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),s=0;s<e;s++)a[s]=ge;return t.index++,a}function Va(e,t){return typeof t=="function"?t(e):t}function Yo(e){var t=Vt();return bu(t,Rt,e)}function bu(e,t,a){var s=e.queue;if(s===null)throw Error(c(311));s.lastRenderedReducer=a;var r=e.baseQueue,i=s.pending;if(i!==null){if(r!==null){var m=r.next;r.next=i.next,i.next=m}t.baseQueue=r=i,s.pending=null}if(i=e.baseState,r===null)e.memoizedState=i;else{t=r.next;var g=m=null,w=null,X=t,ae=!1;do{var be=X.lane&-536870913;if(be!==X.lane?($e&be)===be:(Xa&be)===be){var z=X.revertLane;if(z===0)w!==null&&(w=w.next={lane:0,revertLane:0,gesture:null,action:X.action,hasEagerState:X.hasEagerState,eagerState:X.eagerState,next:null}),be===el&&(ae=!0);else if((Xa&z)===z){X=X.next,z===el&&(ae=!0);continue}else be={lane:0,revertLane:X.revertLane,gesture:null,action:X.action,hasEagerState:X.hasEagerState,eagerState:X.eagerState,next:null},w===null?(g=w=be,m=i):w=w.next=be,Ke.lanes|=z,Ls|=z;be=X.action,ll&&a(i,be),i=X.hasEagerState?X.eagerState:a(i,be)}else z={lane:be,revertLane:X.revertLane,gesture:X.gesture,action:X.action,hasEagerState:X.hasEagerState,eagerState:X.eagerState,next:null},w===null?(g=w=z,m=i):w=w.next=z,Ke.lanes|=be,Ls|=be;X=X.next}while(X!==null&&X!==t);if(w===null?m=i:w.next=g,!Un(i,e.memoizedState)&&(Qt=!0,ae&&(a=wl,a!==null)))throw a;e.memoizedState=i,e.baseState=m,e.baseQueue=w,s.lastRenderedState=i}return r===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function pu(e){var t=Vt(),a=t.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=e;var s=a.dispatch,r=a.pending,i=t.memoizedState;if(r!==null){a.pending=null;var m=r=r.next;do i=e(i,m.action),m=m.next;while(m!==r);Un(i,t.memoizedState)||(Qt=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,s]}function uA(e,t,a){var s=Ke,r=Vt(),i=ze;if(i){if(a===void 0)throw Error(c(407));a=a()}else a=t();var m=!Un((Rt||r).memoizedState,a);if(m&&(r.memoizedState=a,Qt=!0),r=r.queue,Su(AA.bind(null,s,r,e),[e]),e=r.getSnapshot!==t||m||qt!==null&&(qt.memoizedState.tag&1)!==0,Ul(e?9:8,{destroy:void 0},mA.bind(null,s,r,a,t),null),e){if(s.flags|=2048,Lt===null)throw Error(c(349));i||(Xa&127)!==0||dA(s,t,a)}return a}function dA(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=Ke.updateQueue,t===null?(t=Xo(),Ke.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function mA(e,t,a,s){t.value=a,t.getSnapshot=s,fA(t)&&xA(e)}function AA(e,t,a){return a(function(){fA(t)&&xA(e)})}function fA(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!Un(e,a)}catch{return!0}}function xA(e){var t=Vs(e,2);t!==null&&Bn(t,e,2)}function gu(e){var t=Rn();if(typeof e=="function"){var a=e;if(e=a(),ll){En(!0);try{a()}finally{En(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Va,lastRenderedState:e},t}function hA(e,t,a,s){return e.baseState=a,bu(e,Rt,typeof s=="function"?s:Va)}function Lg(e,t,a,s,r){if($o(e))throw Error(c(485));if(e=t.action,e!==null){var i={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(m){i.listeners.push(m)}};F.T!==null?a(!0):i.isTransition=!1,s(i),a=t.pending,a===null?(i.next=t.pending=i,bA(t,i)):(i.next=a.next,t.pending=a.next=i)}}function bA(e,t){var a=t.action,s=t.payload,r=e.state;if(t.isTransition){var i=F.T,m={};m.types=i!==null?i.types:null,F.T=m;try{var g=a(r,s),w=F.S;w!==null&&w(m,g),pA(e,t,g)}catch(X){Ru(e,t,X)}finally{i!==null&&m.types!==null&&(i.types=m.types),F.T=i}}else try{i=a(r,s),pA(e,t,i)}catch(X){Ru(e,t,X)}}function pA(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){gA(e,t,s)},function(s){return Ru(e,t,s)}):gA(e,t,a)}function gA(e,t,a){t.status="fulfilled",t.value=a,RA(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,bA(e,a)))}function Ru(e,t,a){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do t.status="rejected",t.reason=a,RA(t),t=t.next;while(t!==s)}e.action=null}function RA(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function SA(e,t){return t}function yA(e,t){if(ze){var a=Lt.formState;if(a!==null){e:{var s=Ke;if(ze){if(Ht){t:{for(var r=Ht,i=$n;r.nodeType!==8;){if(!i){r=null;break t}if(r=ea(r.nextSibling),r===null){r=null;break t}}i=r.data,r=i==="F!"||i==="F"?r:null}if(r){Ht=ea(r.nextSibling),s=r.data==="F!";break e}}As(s)}s=!1}s&&(t=a[0])}}return a=Rn(),a.memoizedState=a.baseState=t,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:SA,lastRenderedState:t},a.queue=s,a=PA.bind(null,Ke,s),s.dispatch=a,s=gu(!1),i=Ou.bind(null,Ke,!1,s.queue),s=Rn(),r={state:t,dispatch:null,action:e,pending:null},s.queue=r,a=Lg.bind(null,Ke,r,i,a),r.dispatch=a,s.memoizedState=e,[t,a,!1]}function NA(e){var t=Vt();return vA(t,Rt,e)}function vA(e,t,a){if(t=bu(e,t,SA)[0],e=Yo(Va)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var s=Ur(t)}catch(m){throw m===El?Go:m}else s=t;t=Vt();var r=t.queue,i=r.dispatch;return a!==t.memoizedState&&(Ke.flags|=2048,Ul(9,{destroy:void 0},Og.bind(null,r,a),null)),[s,i,e]}function Og(e,t){e.action=t}function LA(e){var t=Vt(),a=Rt;if(a!==null)return vA(t,a,e);Vt(),t=t.memoizedState,a=Vt();var s=a.queue.dispatch;return a.memoizedState=e,[t,s,!1]}function Ul(e,t,a,s){return e={tag:e,create:a,deps:s,inst:t,next:null},t=Ke.updateQueue,t===null&&(t=Xo(),Ke.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(s=a.next,a.next=e,e.next=s,t.lastEffect=e),e}function OA(){return Vt().memoizedState}function qo(e,t,a,s){var r=Rn();Ke.flags|=e,r.memoizedState=Ul(1|t,{destroy:void 0},a,s===void 0?null:s)}function Qo(e,t,a,s){var r=Vt();s=s===void 0?null:s;var i=r.memoizedState.inst;Rt!==null&&s!==null&&du(s,Rt.memoizedState.deps)?r.memoizedState=Ul(t,i,a,s):(Ke.flags|=e,r.memoizedState=Ul(1|t,i,a,s))}function jA(e,t){qo(8390656,8,e,t)}function Su(e,t){Qo(2048,8,e,t)}function jg(e){Ke.flags|=4;var t=Ke.updateQueue;if(t===null)t=Xo(),Ke.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function IA(e){var t=Vt().memoizedState;return jg({ref:t,nextImpl:e}),function(){if((ut&2)!==0)throw Error(c(440));return t.impl.apply(void 0,arguments)}}function BA(e,t){return Qo(4,2,e,t)}function HA(e,t){return Qo(4,4,e,t)}function wA(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function EA(e,t,a){a=a!=null?a.concat([e]):null,Qo(4,4,wA.bind(null,t,e),a)}function yu(){}function CA(e,t){var a=Vt();t=t===void 0?null:t;var s=a.memoizedState;return t!==null&&du(t,s[1])?s[0]:(a.memoizedState=[e,t],e)}function MA(e,t){var a=Vt();t=t===void 0?null:t;var s=a.memoizedState;if(t!==null&&du(t,s[1]))return s[0];if(s=e(),ll){En(!0);try{e()}finally{En(!1)}}return a.memoizedState=[s,t],s}function Nu(e,t,a){return a===void 0||(Xa&1073741824)!==0&&($e&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=Ff(),Ke.lanes|=e,Ls|=e,a)}function kA(e,t,a,s){return Un(a,t)?a:gs.current!==null?(e=Nu(e,a,s),Un(e,t)||(Qt=!0),e):(Xa&106)===0||(Xa&1073741824)!==0&&($e&261930)===0?(Qt=!0,e.memoizedState=a):(e=Ff(),Ke.lanes|=e,Ls|=e,t)}function UA(e,t,a,s,r){var i=Re.p;Re.p=i!==0&&8>i?i:8;var m=F.T,g={};g.types=m!==null?m.types:null,F.T=g,Ou(e,!1,t,a);try{var w=r(),X=F.S;if(X!==null&&X(g,w),w!==null&&typeof w=="object"&&typeof w.then=="function"){var ae=yg(w,s);Dr(e,t,ae,Pn(e))}else Dr(e,t,s,Pn(e))}catch(be){Dr(e,t,{then:function(){},status:"rejected",reason:be},Pn())}finally{Re.p=i,m!==null&&g.types!==null&&(m.types=g.types),F.T=m}}function Ig(){}function vu(e,t,a,s){if(e.tag!==5)throw Error(c(476));var r=DA(e).queue;UA(e,r,t,Oe,a===null?Ig:function(){return TA(e),a(s)})}function DA(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Oe,baseState:Oe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Va,lastRenderedState:Oe},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Va,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function TA(e){var t=DA(e);t.next===null&&(t=e.alternate.memoizedState),Dr(e,t.next.queue,{},Pn())}function Lu(){return un(tr)}function GA(){return Vt().memoizedState}function KA(){return Vt().memoizedState}function Bg(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=Pn();e=bs(a);var s=ps(t,e,a);s!==null&&(Bn(s,t,a),wr(s,t,a)),t={cache:Wc()},e.payload=t;return}t=t.return}}function Hg(e,t,a){var s=Pn();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},$o(e)?_A(t,a):(a=zc(e,t,a,s),a!==null&&(Bn(a,e,s),ZA(a,t,s)))}function PA(e,t,a){var s=Pn();Dr(e,t,a,s)}function Dr(e,t,a,s){var r={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if($o(e))_A(t,r);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var m=t.lastRenderedState,g=i(m,a);if(r.hasEagerState=!0,r.eagerState=g,Un(g,m))return Bo(e,t,r,0),Lt===null&&Io(),!1}catch{}finally{}if(a=zc(e,t,r,s),a!==null)return Bn(a,e,s),ZA(a,t,s),!0}return!1}function Ou(e,t,a,s){if(s={lane:2,revertLane:hd(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},$o(e)){if(t)throw Error(c(479))}else t=zc(e,a,s,2),t!==null&&Bn(t,e,2)}function $o(e){var t=e.alternate;return e===Ke||t!==null&&t===Ke}function _A(e,t){Ml=Fo=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function ZA(e,t,a){if((a&4194048)!==0){var s=t.lanes;s&=e.pendingLanes,a|=s,t.lanes=a,Te(e,a)}}var Wo={readContext:un,use:Vo,useCallback:Kt,useContext:Kt,useEffect:Kt,useImperativeHandle:Kt,useLayoutEffect:Kt,useInsertionEffect:Kt,useMemo:Kt,useReducer:Kt,useRef:Kt,useState:Kt,useDebugValue:Kt,useDeferredValue:Kt,useTransition:Kt,useSyncExternalStore:Kt,useId:Kt,useHostTransitionStatus:Kt,useFormState:Kt,useActionState:Kt,useOptimistic:Kt,useMemoCache:Kt,useCacheRefresh:Kt,useEffectEvent:Kt},zA={readContext:un,use:Vo,useCallback:function(e,t){return Rn().memoizedState=[e,t===void 0?null:t],e},useContext:un,useEffect:jA,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,qo(4194308,4,wA.bind(null,t,e),a)},useLayoutEffect:function(e,t){return qo(4194308,4,e,t)},useInsertionEffect:function(e,t){qo(4,2,e,t)},useMemo:function(e,t){var a=Rn();t=t===void 0?null:t;var s=e();if(ll){En(!0);try{e()}finally{En(!1)}}return a.memoizedState=[s,t],s},useReducer:function(e,t,a){var s=Rn();if(a!==void 0){var r=a(t);if(ll){En(!0);try{a(t)}finally{En(!1)}}}else r=t;return s.memoizedState=s.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},s.queue=e,e=e.dispatch=Hg.bind(null,Ke,e),[s.memoizedState,e]},useRef:function(e){var t=Rn();return e={current:e},t.memoizedState=e},useState:function(e){e=gu(e);var t=e.queue,a=PA.bind(null,Ke,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:yu,useDeferredValue:function(e,t){var a=Rn();return Nu(a,e,t)},useTransition:function(){var e=gu(!1);return e=UA.bind(null,Ke,e.queue,!0,!1),Rn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var s=Ke,r=Rn();if(ze){if(a===void 0)throw Error(c(407));a=a()}else{if(a=t(),Lt===null)throw Error(c(349));($e&127)!==0||dA(s,t,a)}r.memoizedState=a;var i={value:a,getSnapshot:t};return r.queue=i,jA(AA.bind(null,s,i,e),[e]),s.flags|=2048,Ul(9,{destroy:void 0},mA.bind(null,s,i,a,t),null),a},useId:function(){var e=Rn(),t=Lt.identifierPrefix;if(ze){var a=Na,s=ya;a=(s&~(1<<32-Ct(s)-1)).toString(32)+a,t="_"+t+"R_"+a,a=Jo++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Ng++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Lu,useFormState:yA,useActionState:yA,useOptimistic:function(e){var t=Rn();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Ou.bind(null,Ke,!0,a),a.dispatch=t,[e,t]},useMemoCache:hu,useCacheRefresh:function(){return Rn().memoizedState=Bg.bind(null,Ke)},useEffectEvent:function(e){var t=Rn(),a={impl:e};return t.memoizedState=a,function(){if((ut&2)!==0)throw Error(c(440));return a.impl.apply(void 0,arguments)}}},FA={readContext:un,use:Vo,useCallback:CA,useContext:un,useEffect:Su,useImperativeHandle:EA,useInsertionEffect:BA,useLayoutEffect:HA,useMemo:MA,useReducer:Yo,useRef:OA,useState:function(){return Yo(Va)},useDebugValue:yu,useDeferredValue:function(e,t){var a=Vt();return kA(a,Rt.memoizedState,e,t)},useTransition:function(){var e=Yo(Va)[0],t=Vt().memoizedState;return[typeof e=="boolean"?e:Ur(e),t]},useSyncExternalStore:uA,useId:GA,useHostTransitionStatus:Lu,useFormState:NA,useActionState:NA,useOptimistic:function(e,t){var a=Vt();return hA(a,Rt,e,t)},useMemoCache:hu,useCacheRefresh:KA,useEffectEvent:IA},wg={readContext:un,use:Vo,useCallback:CA,useContext:un,useEffect:Su,useImperativeHandle:EA,useInsertionEffect:BA,useLayoutEffect:HA,useMemo:MA,useReducer:pu,useRef:OA,useState:function(){return pu(Va)},useDebugValue:yu,useDeferredValue:function(e,t){var a=Vt();return Rt===null?Nu(a,e,t):kA(a,Rt.memoizedState,e,t)},useTransition:function(){var e=pu(Va)[0],t=Vt().memoizedState;return[typeof e=="boolean"?e:Ur(e),t]},useSyncExternalStore:uA,useId:GA,useHostTransitionStatus:Lu,useFormState:LA,useActionState:LA,useOptimistic:function(e,t){var a=Vt();return Rt!==null?hA(a,Rt,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:hu,useCacheRefresh:KA,useEffectEvent:IA};function ju(e,t,a,s){t=e.memoizedState,a=a(s,t),a=a==null?t:ce({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Iu={enqueueSetState:function(e,t,a){e=e._reactInternals;var s=Pn(),r=bs(s);r.payload=t,a!=null&&(r.callback=a),t=ps(e,r,s),t!==null&&(Bn(t,e,s),wr(t,e,s))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var s=Pn(),r=bs(s);r.tag=1,r.payload=t,a!=null&&(r.callback=a),t=ps(e,r,s),t!==null&&(Bn(t,e,s),wr(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=Pn(),s=bs(a);s.tag=2,t!=null&&(s.callback=t),t=ps(e,s,a),t!==null&&(Bn(t,e,a),wr(t,e,a))}};function JA(e,t,a,s,r,i,m){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,i,m):t.prototype&&t.prototype.isPureReactComponent?!Nr(a,s)||!Nr(r,i):!0}function XA(e,t,a,s){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,s),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,s),t.state!==e&&Iu.enqueueReplaceState(t,t.state,null)}function rl(e,t){var a=t;if("ref"in t){a={};for(var s in t)s!=="ref"&&(a[s]=t[s])}if(e=e.defaultProps){a===t&&(a=ce({},a));for(var r in e)a[r]===void 0&&(a[r]=e[r])}return a}function VA(e){jo(e)}function YA(e){console.error(e)}function qA(e){jo(e)}function ei(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(s){setTimeout(function(){throw s})}}function QA(e,t,a){try{var s=e.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function Bu(e,t,a){return a=bs(a),a.tag=3,a.payload={element:null},a.callback=function(){ei(e,t)},a}function $A(e){return e=bs(e),e.tag=3,e}function WA(e,t,a,s){var r=a.type.getDerivedStateFromError;if(typeof r=="function"){var i=s.value;e.payload=function(){return r(i)},e.callback=function(){QA(t,a,s)}}var m=a.stateNode;m!==null&&typeof m.componentDidCatch=="function"&&(e.callback=function(){QA(t,a,s),typeof r!="function"&&(Os===null?Os=new Set([this]):Os.add(this));var g=s.stack;this.componentDidCatch(s.value,{componentStack:g!==null?g:""})})}function Eg(e,t,a,s,r){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(t=a.alternate,t!==null&&$s(t,a,r,!0),a=dn.current,a!==null){switch(a.tag){case 31:case 13:case 19:return bn===null?Si():a.alternate===null&&Pt===0&&(Pt=3),a.flags&=-257,a.flags|=65536,a.lanes=r,s===Ko?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([s]):t.add(s),Ad(e,s,r)),!1;case 22:return a.flags|=65536,s===Ko?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([s]):a.add(s)),Ad(e,s,r)),!1}throw Error(c(435,a.tag))}return Ad(e,s,r),Si(),!1}if(ze)return t=dn.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=r,s!==Yc&&(e=Error(c(422),{cause:s}),Or(Yn(e,a)))):(s!==Yc&&(t=Error(c(423),{cause:s}),Or(Yn(t,a))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,s=Yn(s,a),r=Bu(e.stateNode,s,r),lu(e,r),Pt!==4&&(Pt=2)),!1;var i=Error(c(520),{cause:s});if(i=Yn(i,a),Fr===null?Fr=[i]:Fr.push(i),Pt!==4&&(Pt=2),t===null)return!0;s=Yn(s,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=r&-r,a.lanes|=e,e=Bu(a.stateNode,s,e),lu(a,e),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Os===null||!Os.has(i))))return a.flags|=65536,r&=-r,a.lanes|=r,r=$A(r),WA(r,e,a,s),lu(a,r),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var Hu=Error(c(461)),Qt=!1;function Wt(e,t,a,s){t.child=e===null?aA(t,null,a,s):sl(t,e.child,a,s)}function ef(e,t,a,s,r){a=a.render;var i=t.ref;if("ref"in s){var m={};for(var g in s)g!=="ref"&&(m[g]=s[g])}else m=s;return Ws(t),s=mu(e,t,a,m,i,r),g=Au(),e!==null&&!Qt?(fu(e,t,r),Ya(e,t,r)):(ze&&g&&Co(t),t.flags|=1,Wt(e,t,s,r),t.child)}function tf(e,t,a,s,r){if(e===null){var i=a.type;return typeof i=="function"&&!Fc(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,nf(e,t,i,s,r)):(e=wo(a.type,null,s,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!Tu(e,r)){var m=i.memoizedProps;if(a=a.compare,a=a!==null?a:Nr,a(m,s)&&e.ref===t.ref)return Ya(e,t,r)}return t.flags|=1,e=Za(i,s),e.ref=t.ref,e.return=t,t.child=e}function nf(e,t,a,s,r){if(e!==null){var i=e.memoizedProps;if(Nr(i,s)&&e.ref===t.ref)if(Qt=!1,t.pendingProps=s=i,Tu(e,r))(e.flags&131072)!==0&&(Qt=!0);else return t.lanes=e.lanes,Ya(e,t,r)}return wu(e,t,a,s,r)}function af(e,t,a,s){var r=s.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|a:a,e!==null){for(s=t.child=e.child,r=0;s!==null;)r=r|s.lanes|s.childLanes,s=s.sibling;s=r&~i}else s=0,t.child=null;return sf(e,t,i,a,s)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&To(t,i!==null?i.cachePool:null),i!==null?rA(t,i):ou(),oA(t);else return s=t.lanes=536870912,sf(e,t,i!==null?i.baseLanes|a:a,a,s)}else i!==null?(To(t,i.cachePool),rA(t,i),Ss(),t.memoizedState=null):(e!==null&&To(t,null),ou(),Ss());return Wt(e,t,r,a),t.child}function Tr(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function sf(e,t,a,s,r){var i=tu();return i=i===null?null:{parent:Yt._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&To(t,null),ou(),oA(t),e!==null&&$s(e,t,s,!0),t.childLanes=r,null}function ti(e,t){return t=ni({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function lf(e,t,a){return sl(t,e.child,null,a),e=ti(t,t.pendingProps),e.flags|=2,Dn(t),t.memoizedState=null,e}function Cg(e,t,a){var s=t.pendingProps,r=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ze){if(s.mode==="hidden")return e=ti(t,s),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Tr(null,e);if(cu(t),(e=Ht)?(e=Ex(e,$n),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ds!==null?{id:ya,overflow:Na}:null,retryLane:536870912,hydrationErrors:null},a=_0(e),a.return=t,t.child=a,tn=t,Ht=null)):e=null,e===null)throw As(t);return t.lanes=536870912,null}return ti(t,s)}var i=e.memoizedState;if(i!==null){var m=i.dehydrated;if(cu(t),r)if(t.flags&256)t.flags&=-257,t=lf(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(c(558));else if(Qt||$s(e,t,a,!1),r=(a&e.childLanes)!==0,Qt||r){if(gs.current===null){if(s=Lt,s!==null&&(m=on(s,a),m!==0&&m!==i.retryLane))throw i.retryLane=m,Vs(e,m),Bn(s,e,m),Hu;Si()}t=lf(e,t,a)}else e=i.treeContext,Ht=ea(m.nextSibling),tn=t,ze=!0,ms=null,$n=!1,e!==null&&F0(t,e),t=ti(t,s),t.flags|=134221824;return t}return e=Za(e.child,{mode:s.mode,children:s.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Dl(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(c(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function wu(e,t,a,s,r){return Ws(t),a=mu(e,t,a,s,void 0,r),s=Au(),e!==null&&!Qt?(fu(e,t,r),Ya(e,t,r)):(ze&&s&&Co(t),t.flags|=1,Wt(e,t,a,r),t.child)}function rf(e,t,a,s,r,i){return Ws(t),t.updateQueue=null,a=cA(t,s,a,r),iA(e),s=Au(),e!==null&&!Qt?(fu(e,t,i),Ya(e,t,i)):(ze&&s&&Co(t),t.flags|=1,Wt(e,t,a,i),t.child)}function of(e,t,a,s,r){if(Ws(t),t.stateNode===null){var i=jl,m=a.contextType;typeof m=="object"&&m!==null&&(i=un(m)),i=new a(s,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Iu,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=s,i.state=t.memoizedState,i.refs={},au(t),m=a.contextType,i.context=typeof m=="object"&&m!==null?un(m):jl,i.state=t.memoizedState,m=a.getDerivedStateFromProps,typeof m=="function"&&(ju(t,a,m,s),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(m=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),m!==i.state&&Iu.enqueueReplaceState(i,i.state,null),Cr(t,s,i,r),Er(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),s=!0}else if(e===null){i=t.stateNode;var g=t.memoizedProps,w=rl(a,g);i.props=w;var X=i.context,ae=a.contextType;m=jl,typeof ae=="object"&&ae!==null&&(m=un(ae));var be=a.getDerivedStateFromProps;ae=typeof be=="function"||typeof i.getSnapshotBeforeUpdate=="function",g=t.pendingProps!==g,ae||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(g||X!==m)&&XA(t,i,s,m),hs=!1;var z=t.memoizedState;i.state=z,Cr(t,s,i,r),Er(),X=t.memoizedState,g||z!==X||hs?(typeof be=="function"&&(ju(t,a,be,s),X=t.memoizedState),(w=hs||JA(t,a,w,s,z,X,m))?(ae||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=s,t.memoizedState=X),i.props=s,i.state=X,i.context=m,s=w):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),s=!1)}else{i=t.stateNode,su(e,t),m=t.memoizedProps,ae=rl(a,m),i.props=ae,be=t.pendingProps,z=i.context,X=a.contextType,w=jl,typeof X=="object"&&X!==null&&(w=un(X)),g=a.getDerivedStateFromProps,(X=typeof g=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(m!==be||z!==w)&&XA(t,i,s,w),hs=!1,z=t.memoizedState,i.state=z,Cr(t,s,i,r),Er();var W=t.memoizedState;m!==be||z!==W||hs||e!==null&&e.dependencies!==null&&Uo(e.dependencies)?(typeof g=="function"&&(ju(t,a,g,s),W=t.memoizedState),(ae=hs||JA(t,a,ae,s,z,W,w)||e!==null&&e.dependencies!==null&&Uo(e.dependencies))?(X||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(s,W,w),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(s,W,w)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||m===e.memoizedProps&&z===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&z===e.memoizedState||(t.flags|=1024),t.memoizedProps=s,t.memoizedState=W),i.props=s,i.state=W,i.context=w,s=ae):(typeof i.componentDidUpdate!="function"||m===e.memoizedProps&&z===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&z===e.memoizedState||(t.flags|=1024),s=!1)}return i=s,Dl(e,t),s=(t.flags&128)!==0,i||s?(i=t.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&s?(t.child=sl(t,e.child,null,r),t.child=sl(t,null,a,r)):Wt(e,t,a,r),t.memoizedState=i.state,e=t.child):e=Ya(e,t,r),e}function cf(e,t,a,s){return qs(),t.flags|=256,Wt(e,t,a,s),t.child}var Eu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Cu(e){return{baseLanes:e,cachePool:Q0()}}function Mu(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=Kn),e}function uf(e,t,a){var s=t.pendingProps,r=!1,i=(t.flags&128)!==0,m;if((m=i)||(m=e!==null&&e.memoizedState===null?!1:(mn.current&2)!==0),m&&(r=!0,t.flags&=-129),m=(t.flags&32)!==0,t.flags&=-33,e===null){if(ze){if(r?Rs(t):Ss(),(e=Ht)?(e=Ex(e,$n),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ds!==null?{id:ya,overflow:Na}:null,retryLane:536870912,hydrationErrors:null},a=_0(e),a.return=t,t.child=a,tn=t,Ht=null)):e=null,e===null)throw As(t);return Cd(e)?t.lanes=32:t.lanes=536870912,null}return i=s.children,s=s.fallback,r?(Ss(),r=t.mode,i=ni({mode:"hidden",children:i},r),s=Ys(s,r,a,null),i.return=t,s.return=t,i.sibling=s,t.child=i,s=t.child,s.memoizedState=Cu(a),s.childLanes=Mu(e,m,a),t.memoizedState=Eu,Tr(null,s)):(Rs(t),ku(t,i))}var g=e.memoizedState;if(g!==null){var w=g.dehydrated;if(w!==null)return Mg(e,t,i,m,s,w,g,a)}return r?(Ss(),r=s.fallback,i=t.mode,g=e.child,w=g.sibling,s=Za(g,{mode:"hidden",children:s.children}),s.subtreeFlags=g.subtreeFlags&1206910976,w!==null?r=Za(w,r):(r=Ys(r,i,a,null),r.flags|=2),r.return=t,s.return=t,s.sibling=r,t.child=s,Tr(null,s),s=t.child,r=e.child.memoizedState,r===null?r=Cu(a):(i=r.cachePool,i!==null?(g=Yt._currentValue,i=i.parent!==g?{parent:g,pool:g}:i):i=Q0(),r={baseLanes:r.baseLanes|a,cachePool:i}),s.memoizedState=r,s.childLanes=Mu(e,m,a),t.memoizedState=Eu,Tr(e.child,s)):(Rs(t),a=e.child,e=a.sibling,a=Za(a,{mode:"visible",children:s.children}),a.return=t,a.sibling=null,e!==null&&(m=t.deletions,m===null?(t.deletions=[e],t.flags|=16):m.push(e)),t.child=a,t.memoizedState=null,a)}function ku(e,t){return t=ni({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function ni(e,t){return e=Ln(22,e,null,t),e.lanes=0,e}function ai(e,t,a){return sl(t,e.child,null,a),e=ku(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Mg(e,t,a,s,r,i,m,g){if(a)return t.flags&256?(Rs(t),t.flags&=-257,ai(e,t,g)):t.memoizedState!==null?(Ss(),t.child=e.child,t.flags|=128,null):(Ss(),i=r.fallback,m=t.mode,r=ni({mode:"visible",children:r.children},m),i=Ys(i,m,g,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,sl(t,e.child,null,g),r=t.child,r.memoizedState=Cu(g),r.childLanes=Mu(e,s,g),t.memoizedState=Eu,Tr(null,r));if(Rs(t),Cd(i)){if(s=i.nextSibling&&i.nextSibling.dataset,s)var w=s.dgst;return s=w,s!==""&&(r=Error(c(419)),r.stack="",r.digest=s,Or({value:r,source:null,stack:null})),ai(e,t,g)}if(Qt||$s(e,t,g,!1),s=(g&e.childLanes)!==0,Qt||s){if(gs.current!==null)return ai(e,t,g);if(s=Lt,s!==null&&(r=on(s,g),r!==0&&r!==m.retryLane))throw m.retryLane=r,Vs(e,r),Bn(s,e,r),Hu;return Ed(i)||Si(),ai(e,t,g)}return Ed(i)?(t.flags|=192,t.child=e.child,null):(e=m.treeContext,Ht=ea(i.nextSibling),tn=t,ze=!0,ms=null,$n=!1,e!==null&&F0(t,e),t=ku(t,r.children),t.flags|=134221824,t)}function df(e,t,a){e.lanes|=t;var s=e.alternate;s!==null&&(s.lanes|=t),ko(e.return,t,a)}function mf(e){for(var t=null;e!==null;){var a=e.alternate;a!==null&&zo(a)===null&&(t=e),e=e.sibling}return t}function si(e,t,a,s,r,i){var m=e.memoizedState;m===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:r,treeForkCount:i}:(m.isBackwards=t,m.rendering=null,m.renderingStartTime=0,m.last=s,m.tail=a,m.tailMode=r,m.treeForkCount=i)}function Uu(e){var t=e.child;for(e.child=null;t!==null;){var a=t.sibling;t.sibling=e.child,e.child=t,t=a}}function Du(e,t,a){var s=t.pendingProps,r=s.revealOrder,i=s.tail;s=s.children;var m=mn.current;if(t.flags&128)return Mr(t,m),null;var g=(m&2)!==0;if(g?(m=m&1|2,t.flags|=128):m&=1,Mr(t,m),r==="backwards"&&e!==null?(Uu(e),Wt(e,t,s,a),Uu(e)):Wt(e,t,s,a),s=ze?Lr:0,!g&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&df(e,a,t);else if(e.tag===19)df(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(r){case"backwards":a=mf(t.child),a===null?(r=t.child,t.child=null):(r=a.sibling,a.sibling=null,Uu(t)),si(t,!0,r,null,i,s);break;case"unstable_legacy-backwards":for(a=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&zo(e)===null){t.child=r;break}e=r.sibling,r.sibling=a,a=r,r=e}si(t,!0,a,null,i,s);break;case"together":si(t,!1,null,null,void 0,s);break;case"independent":t.memoizedState=null;break;default:a=mf(t.child),a===null?(r=t.child,t.child=null):(r=a.sibling,a.sibling=null),si(t,!1,r,a,i,s)}return t.child}function Af(e,t,a){var s=t.pendingProps;return fs(t,t.type,s.value),Wt(e,t,s.children,a),t.child}function Ya(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Ls|=t.lanes,(a&t.childLanes)===0)if(e!==null){if($s(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,a=Za(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Za(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Tu(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Uo(e)))}function kg(e,t,a){switch(t.tag){case 3:xe(t,t.stateNode.containerInfo),fs(t,Yt,e.memoizedState.cache),qs();break;case 27:case 5:Fe(t);break;case 4:xe(t,t.stateNode.containerInfo);break;case 10:fs(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,cu(t),null;break;case 13:var s=t.memoizedState;if(s!==null){if(s.dehydrated!==null)return Rs(t),t.flags|=128,null;s=$s(e,t,a,!1);var r=t.child.childLanes;return s||(a&r)!==0?uf(e,t,a):(Rs(t),e=Ya(e,t,a),e!==null?e.sibling:null)}Rs(t);break;case 19:if(t.flags&128)return Du(e,t,a);if(r=(e.flags&128)!==0,s=(a&t.childLanes)!==0,s||($s(e,t,a,!1),s=(a&t.childLanes)!==0),r){if(s)return Du(e,t,a);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Mr(t,mn.current),s)break;return null;case 22:return t.lanes=0,af(e,t,a,t.pendingProps);case 24:fs(t,Yt,e.memoizedState.cache)}return Ya(e,t,a)}function ff(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Qt=!0;else{if(!Tu(e,a)&&(t.flags&128)===0)return Qt=!1,kg(e,t,a);Qt=(e.flags&131072)!==0}else Qt=!1,ze&&(t.flags&1048576)!==0&&z0(t,Lr,t.index);switch(t.lanes=0,t.tag){case 16:e:{var s=t.pendingProps;if(e=nl(t.elementType),t.type=e,typeof e=="function")Fc(e)?(s=rl(e,s),t.tag=1,t=of(null,t,e,s,a)):(t.tag=0,t=wu(null,t,e,s,a));else{if(e!=null){var r=e.$$typeof;if(r===R){t.tag=11,t=ef(null,t,e,s,a);break e}else if(r===ee){t.tag=14,t=tf(null,t,e,s,a);break e}else if(r===O){t.tag=10,t.type=e,t=Af(null,t,a);break e}}throw t=ye(e)||e,Error(c(306,t,""))}}return t;case 0:return wu(e,t,t.type,t.pendingProps,a);case 1:return s=t.type,r=rl(s,t.pendingProps),of(e,t,s,r,a);case 3:e:{if(xe(t,t.stateNode.containerInfo),e===null)throw Error(c(387));s=t.pendingProps;var i=t.memoizedState;r=i.element,su(e,t),Cr(t,s,null,a);var m=t.memoizedState;if(s=m.cache,fs(t,Yt,s),s!==i.cache&&$c(t,[Yt],a,!0),Er(),s=m.element,i.isDehydrated)if(i={element:s,isDehydrated:!1,cache:m.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=cf(e,t,s,a);break e}else if(s!==r){r=Yn(Error(c(424)),t),Or(r),t=cf(e,t,s,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ht=ea(e.firstChild),tn=t,ze=!0,ms=null,$n=!0,a=aA(t,null,s,a),t.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling}else{if(qs(),s===r){t=Ya(e,t,a);break e}Wt(e,t,s,a)}t=t.child}return t;case 26:return Dl(e,t),e===null?(a=Gx(t.type,null,t.pendingProps,null))?t.memoizedState=a:ze||(t.stateNode=px(t.type,t.pendingProps,gt.current,t)):t.memoizedState=Gx(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Fe(t),e===null&&ze&&(s=t.stateNode=kx(t.type,t.pendingProps,gt.current),tn=t,$n=!0,r=Ht,Bs(t.type)?(Md=r,Ht=ea(s.firstChild)):Ht=r),Wt(e,t,t.pendingProps.children,a),Dl(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ze&&((r=s=Ht)&&(s=B1(s,t.type,t.pendingProps,$n),s!==null?(t.stateNode=s,tn=t,Ht=ea(s.firstChild),$n=!1,r=!0):r=!1),r||As(t)),Fe(t),r=t.type,i=t.pendingProps,m=e!==null?e.memoizedProps:null,s=i.children,Ld(r,i)?s=null:m!==null&&Ld(r,m)&&(t.flags|=32),t.memoizedState!==null&&(r=mu(e,t,vg,null,null,a),tr._currentValue=r),Dl(e,t),Wt(e,t,s,a),t.child;case 6:return e===null&&ze&&((e=a=Ht)&&(a=H1(a,t.pendingProps,$n),a!==null?(t.stateNode=a,tn=t,Ht=null,e=!0):e=!1),e||As(t)),null;case 13:return uf(e,t,a);case 4:return xe(t,t.stateNode.containerInfo),s=t.pendingProps,e===null?t.child=sl(t,null,s,a):Wt(e,t,s,a),t.child;case 11:return ef(e,t,t.type,t.pendingProps,a);case 7:return s=t.pendingProps,Dl(e,t),Wt(e,t,s,a),t.child;case 8:return Wt(e,t,t.pendingProps.children,a),t.child;case 12:return Wt(e,t,t.pendingProps.children,a),t.child;case 10:return Af(e,t,a);case 9:return r=t.type._context,s=t.pendingProps.children,Ws(t),r=un(r),s=s(r),t.flags|=1,Wt(e,t,s,a),t.child;case 14:return tf(e,t,t.type,t.pendingProps,a);case 15:return nf(e,t,t.type,t.pendingProps,a);case 19:return Du(e,t,a);case 31:return Cg(e,t,a);case 22:return af(e,t,a,t.pendingProps);case 24:return Ws(t),s=un(Yt),e===null?(r=tu(),r===null&&(r=Lt,i=Wc(),r.pooledCache=i,i.refCount++,i!==null&&(r.pooledCacheLanes|=a),r=i),t.memoizedState={parent:s,cache:r},au(t),fs(t,Yt,r)):((e.lanes&a)!==0&&(su(e,t),Cr(t,null,null,a),Er()),r=e.memoizedState,i=t.memoizedState,r.parent!==s?(r={parent:s,cache:s},t.memoizedState=r,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=r),fs(t,Yt,s)):(s=i.cache,fs(t,Yt,s),s!==r.cache&&$c(t,[Yt],a,!0))),Wt(e,t,t.pendingProps.children,a),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),s=t.pendingProps,s.name!=null&&s.name!=="auto"?t.flags|=e===null?18882560:18874368:ze&&Co(t),e!==null&&e.memoizedProps.name!==s.name?t.flags|=4194816:Dl(e,t),Wt(e,t,s.children,a),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function qa(e){e.flags|=4}function Gu(e,t,a,s,r){var i;if((i=(e.mode&32)!==0)&&(i=a===null?Zx(t,s):Zx(t,s)&&(s.src!==a.src||s.srcSet!==a.srcSet)),i){if(e.flags|=16777216,(r&335544128)===r)if(e.stateNode.complete)e.flags|=8192;else if(Yf())e.flags|=8192;else throw al=Ko,nu}else e.flags&=-16777217}function xf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!zx(t))if(Yf())e.flags|=8192;else throw al=Ko,nu}function li(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?N():536870912,e.lanes|=t,_l|=t)}function Gr(e,t){if(!ze)switch(e.tailMode){case"visible":break;case"collapsed":for(var a=e.tail,s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null;break;default:for(t=e.tail,a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null}}function wt(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,s=0;if(t)for(var r=e.child;r!==null;)a|=r.lanes|r.childLanes,s|=r.subtreeFlags&1206910976,s|=r.flags&1206910976,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)a|=r.lanes|r.childLanes,s|=r.subtreeFlags,s|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=s,e.childLanes=a,t}function Ug(e,t,a){var s=t.pendingProps;switch(Vc(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return wt(t),null;case 1:return wt(t),null;case 3:return a=t.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),t.memoizedState.cache!==s&&(t.flags|=2048),Ja(Yt),ke(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Hl(t)?qa(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,qc())),wt(t),null;case 26:var r=t.type,i=t.memoizedState;return e===null?(qa(t),i!==null?(wt(t),xf(t,i)):(wt(t),Gu(t,r,null,s,a))):i?i!==e.memoizedState?(qa(t),wt(t),xf(t,i)):(wt(t),t.flags&=-16777217):(e=e.memoizedProps,e!==s&&qa(t),wt(t),Gu(t,r,e,s,a)),null;case 27:if(Ot(t),a=gt.current,r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==s&&qa(t);else{if(!s){if(t.stateNode===null)throw Error(c(166));return wt(t),t.subtreeFlags&=-33554433,null}e=lt.current,Hl(t)?J0(t):(e=kx(r,s,a),t.stateNode=e,qa(t))}return wt(t),t.subtreeFlags&=-33554433,null;case 5:if(Ot(t),r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==s&&qa(t);else{if(!s){if(t.stateNode===null)throw Error(c(166));return wt(t),t.subtreeFlags&=-33554433,null}if(i=lt.current,Hl(t))J0(t);else{var m=qr(gt.current);switch(i){case 1:i=m.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:i=m.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":i=m.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":i=m.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":i=m.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof s.is=="string"?m.createElement("select",{is:s.is}):m.createElement("select"),s.multiple?i.multiple=!0:s.size&&(i.size=s.size);break;default:i=typeof s.is=="string"?m.createElement(r,{is:s.is}):m.createElement(r)}}i[ot]=t,i[Et]=s;e:for(m=t.child;m!==null;){if(m.tag===5||m.tag===6)i.appendChild(m.stateNode);else if(m.tag!==4&&m.tag!==27&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;m=m.return}m.sibling.return=m.return,m=m.sibling}t.stateNode=i;e:switch(fn(i,r,s),r){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}s&&qa(t)}}return wt(t),t.subtreeFlags&=-33554433,Gu(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==s&&qa(t);else{if(typeof s!="string"&&t.stateNode===null)throw Error(c(166));if(e=gt.current,Hl(t)){if(e=t.stateNode,a=t.memoizedProps,s=null,r=tn,r!==null)switch(r.tag){case 27:case 5:s=r.memoizedProps}e[ot]=t,e=!!(e.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||fx(e.nodeValue,a)),e||As(t,!0)}else e=qr(e).createTextNode(s),e[ot]=t,t.stateNode=e}return wt(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(s=Hl(t),a!==null){if(e===null){if(!s)throw Error(c(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(557));e[ot]=t}else qs(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;wt(t),e=!1}else a=qc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(Dn(t),t):(Dn(t),null);if((t.flags&128)!==0)throw Error(c(558))}return wt(t),null;case 13:if(s=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=Hl(t),s!==null&&s.dehydrated!==null){if(e===null){if(!r)throw Error(c(318));if(r=t.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(c(317));r[ot]=t}else qs(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;wt(t),r=!1}else r=qc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return t.flags&256?(Dn(t),t):(Dn(t),null)}return Dn(t),(t.flags&128)!==0?(t.lanes=a,t):(a=s!==null,e=e!==null&&e.memoizedState!==null,a&&(s=t.child,r=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(r=s.alternate.memoizedState.cachePool.pool),i=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(i=s.memoizedState.cachePool.pool),i!==r&&(s.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),li(t,t.updateQueue),wt(t),null);case 4:return ke(),e===null&&Rd(t.stateNode.containerInfo),t.flags|=67108864,wt(t),null;case 10:return Ja(t.type),wt(t),null;case 19:if(uu(t),s=t.memoizedState,s===null)return wt(t),null;if(r=(t.flags&128)!==0,i=s.rendering,i===null)if(r)Gr(s,!1);else{if(Pt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=zo(e),i!==null){for(t.flags|=128,Gr(s,!1),e=i.updateQueue,t.updateQueue=e,li(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)P0(a,e),a=a.sibling;return Mr(t,mn.current&1|2),ze&&za(t,s.treeForkCount),t.child}e=e.sibling}s.tail!==null&&Tt()>bi&&(t.flags|=128,r=!0,Gr(s,!1),t.lanes=4194304)}else{if(!r)if(e=zo(i),e!==null){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,li(t,e),Gr(s,!0),s.tail===null&&s.tailMode!=="collapsed"&&s.tailMode!=="visible"&&!i.alternate&&!ze)return wt(t),null}else 2*Tt()-s.renderingStartTime>bi&&a!==536870912&&(t.flags|=128,r=!0,Gr(s,!1),t.lanes=4194304);s.isBackwards?(i.sibling=t.child,t.child=i):(e=s.last,e!==null?e.sibling=i:t.child=i,s.last=i)}if(s.tail!==null){e=s.tail;e:{for(a=e;a!==null;){if(a.alternate!==null){a=!1;break e}a=a.sibling}a=!0}return s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Tt(),e.sibling=null,i=mn.current,i=r?i&1|2:i&1,s.tailMode==="visible"||s.tailMode==="collapsed"||!a||ze?Mr(t,i):(a=i,Le(dn,t),Le(mn,a),bn===null&&(bn=t)),ze&&za(t,s.treeForkCount),e}return wt(t),null;case 22:case 23:return Dn(t),iu(),s=t.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(t.flags|=8192):s&&(t.flags|=8192),s?(a&536870912)!==0&&(t.flags&128)===0&&(wt(t),t.subtreeFlags&6&&(t.flags|=8192)):wt(t),a=t.updateQueue,a!==null&&li(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),s=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),s!==a&&(t.flags|=2048),e!==null&&tt(tl),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Ja(Yt),wt(t),null;case 25:return null;case 30:return t.flags|=33554432,wt(t),null}throw Error(c(156,t.tag))}function Dg(e,t){switch(Vc(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ja(Yt),ke(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ot(t),null;case 31:if(t.memoizedState!==null){if(Dn(t),t.alternate===null)throw Error(c(340));qs()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Dn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));qs()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return uu(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return ke(),null;case 10:return Ja(t.type),null;case 22:case 23:return Dn(t),iu(),e!==null&&tt(tl),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ja(Yt),null;case 25:return null;default:return null}}function hf(e,t){switch(Vc(t),t.tag){case 3:Ja(Yt),ke();break;case 26:case 27:case 5:Ot(t);break;case 4:ke();break;case 31:t.memoizedState!==null&&Dn(t);break;case 13:Dn(t);break;case 19:uu(t);break;case 10:Ja(t.type);break;case 22:case 23:Dn(t),iu(),e!==null&&tt(tl);break;case 24:Ja(Yt)}}function Kr(e,t){try{var a=t.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var r=s.next;a=r;do{if((a.tag&e)===e){s=void 0;var i=a.create,m=a.inst;s=i(),m.destroy=s}a=a.next}while(a!==r)}}catch(g){ht(t,t.return,g)}}function ys(e,t,a){try{var s=t.updateQueue,r=s!==null?s.lastEffect:null;if(r!==null){var i=r.next;s=i;do{if((s.tag&e)===e){var m=s.inst,g=m.destroy;if(g!==void 0){m.destroy=void 0,r=t;var w=a,X=g;try{X()}catch(ae){ht(r,w,ae)}}}s=s.next}while(s!==i)}}catch(ae){ht(t,t.return,ae)}}function bf(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{lA(t,a)}catch(s){ht(e,e.return,s)}}}function pf(e,t,a){a.props=rl(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(s){ht(e,t,s)}}function va(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var s=e.stateNode;break;case 30:var r=e.stateNode,i=Pa(e.memoizedProps,r);(r.ref===null||r.ref.name!==i)&&(r.ref=Lx(i)),s=r.ref;break;case 7:if(e.stateNode===null){var m=new _n(e);b(e.child,!1,j1,m,void 0,void 0),e.stateNode=m}s=e.stateNode;break;default:s=e.stateNode}typeof a=="function"?e.refCleanup=a(s):a.current=s}}catch(g){ht(e,t,g)}}function An(e,t){var a=e.ref,s=e.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(r){ht(e,t,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(r){ht(e,t,r)}else a.current=null}function ri(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var a=0;a<t.length;a++)wx(e.stateNode,t[a])}function gf(e){for(var t=e.return;t!==null&&(Pu(t)&&wx(e.stateNode,t.stateNode),!Ku(t));)t=t.return}function Pr(e){for(var t=e.return;t!==null&&(Pu(t)&&I1(e.stateNode,t.stateNode),!Ku(t));)t=t.return}function Ku(e){return e.tag===5||e.tag===3||e.tag===27}function Pu(e){return e&&e.tag===7&&e.stateNode!==null}function _u(e){var t=e.type,a=e.memoizedProps,s=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break e;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(r){ht(e,e.return,r)}}function Zu(e,t,a){try{var s=e.stateNode;c1(s,e.type,a,t),s[Et]=t}catch(r){ht(e,e.return,r)}}function Rf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Bs(e.type)||e.tag===4}function zu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Rf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Bs(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Fu(e,t,a,s){var r=e.tag;if(r===5||r===6)r=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(r,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(r),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Sa)),ri(e,s),it=!0;else if(r!==4&&(r===27&&(ri(e,s),s=null,Bs(e.type)&&(a=e.stateNode,t=null)),e=e.child,e!==null))for(Fu(e,t,a,s),e=e.sibling;e!==null;)Fu(e,t,a,s),e=e.sibling}function oi(e,t,a,s){var r=e.tag;if(r===5||r===6)r=e.stateNode,t?a.insertBefore(r,t):a.appendChild(r),ri(e,s),it=!0;else if(r!==4&&(r===27&&(ri(e,s),s=null,Bs(e.type)&&(a=e.stateNode)),e=e.child,e!==null))for(oi(e,t,a,s),e=e.sibling;e!==null;)oi(e,t,a,s),e=e.sibling}function Sf(e){var t=e.stateNode,a=e.memoizedProps;try{for(var s=e.type,r=t.attributes;r.length;)t.removeAttributeNode(r[0]);fn(t,s,a),t[ot]=e,t[Et]=a}catch(i){ht(e,e.return,i)}}var ii=!1,Tn=null;function yf(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(ii=!0)}var La=null;function Nf(){var e=La;return La=null,e}var On=0;function Tl(e,t,a,s,r){return On=0,vf(e.child,t,a,s,r)}function vf(e,t,a,s,r){for(var i=!1;e!==null;){if(e.tag===5){var m=e.stateNode;if(s!==null){var g=Id(m);s.push(g),g.view&&(i=!0)}else i||Id(m).view&&(i=!0);ii=!0,Nx(m,On===0?t:t+"_"+On,a),On++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&r||vf(e.child,t,a,s,r)&&(i=!0));e=e.sibling}return i}function Oa(e,t){for(;e!==null;)e.tag===5?vx(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||Oa(e.child,t)),e=e.sibling}function ci(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(ci(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name==="auto")throw Error(c(544));var a=t.name;t=_a(t.default,t.share),t!=="none"&&(Tl(e,a,t,null,!1)||Oa(e.child,!1))}e=e.sibling}}function Ju(e,t){if(e.tag===30){var a=e.stateNode,s=e.memoizedProps,r=Pa(s,a),i=_a(s.default,a.paired?s.share:s.enter);i!=="none"?Tl(e,r,i,null,!1)?(ci(e),a.paired||t||Jl(e,s.onEnter)):Oa(e.child,!1):ci(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Ju(e,t),e=e.sibling;else ci(e)}function Xu(e){if(Tn!==null&&Tn.size!==0){var t=Tn;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var a=e.memoizedProps,s=a.name;if(s!=null&&s!=="auto"){var r=t.get(s);if(r!==void 0){var i=_a(a.default,a.share);if(i!=="none"&&(Tl(e,s,i,null,!1)?(i=e.stateNode,r.paired=i,i.paired=r,Jl(e,a.onShare)):Oa(e.child,!1)),t.delete(s),t.size===0)break}}}Xu(e)}e=e.sibling}}}function Vu(e){if(e.tag===30){var t=e.memoizedProps,a=Pa(t,e.stateNode),s=Tn!==null?Tn.get(a):void 0,r=_a(t.default,s!==void 0?t.share:t.exit);r!=="none"&&(Tl(e,a,r,null,!1)?s!==void 0?(r=e.stateNode,s.paired=r,r.paired=s,Tn.delete(a),Jl(e,t.onShare)):Jl(e,t.onExit):Oa(e.child,!1)),Tn!==null&&Xu(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Vu(e),e=e.sibling;else Tn!==null&&Xu(e)}function Lf(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,a=Pa(t,e.stateNode);t=_a(t.default,t.update),e.flags&=-5,t!=="none"&&Tl(e,a,t,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&Lf(e);e=e.sibling}}function Yu(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var t=e.stateNode;t.paired!==null&&(t.paired=null,Oa(e.child,!1))}Yu(e)}e=e.sibling}}function ui(e){if(e.tag===30)e.stateNode.paired=null,Oa(e.child,!1),Yu(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)ui(e),e=e.sibling;else Yu(e)}function Of(e){for(e=e.child;e!==null;)e.tag===30?Oa(e.child,!1):(e.subtreeFlags&33554432)!==0&&Of(e),e=e.sibling}function qu(e,t,a,s,r,i,m){for(var g=!1;t!==null;){if(t.tag===5){var w=t.stateNode;if(i!==null&&On<i.length){var X=i[On],ae=Id(w);(X.view||ae.view)&&(g=!0);var be;if(be=(e.flags&4)===0)if(ae.clip)be=!0;else{be=X.rect;var z=ae.rect;be=be.y!==z.y||be.x!==z.x||be.height!==z.height||be.width!==z.width}be&&(e.flags|=4),ae.abs?ae=!X.abs:(X=X.rect,ae=ae.rect,ae=X.height!==ae.height||X.width!==ae.width),ae&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&Nx(w,On===0?a:a+"_"+On,r),g&&(e.flags&4)!==0||(La===null&&(La=[]),La.push(w,On===0?s:s+"_"+On,t.memoizedProps)),On++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&m?e.flags|=t.flags&32:qu(e,t.child,a,s,r,i,m)&&(g=!0));t=t.sibling}return g}function jf(e,t){for(e=e.child;e!==null;){if(e.tag===30){var a=e.memoizedProps,s=e.stateNode,r=Pa(a,s),i=_a(a.default,a.update),m;m=e.memoizedState,e.memoizedState=null,s=e;var g=e.child;On=0,r=qu(s,g,r,r,i,m,!1),(e.flags&4)!==0&&r&&Jl(e,a.onUpdate)}else(e.subtreeFlags&33554432)!==0&&jf(e);e=e.sibling}}var nn=!1,dt=!1,ja=!1,Qu=!1,If=typeof WeakSet=="function"?WeakSet:Set,an=null,Ia=!1,_r=!1,di=!1,$u=!1;function Tg(e,t,a){if(e=e.containerInfo,Nd=nr,e=w0(e),Tc(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else e:{s=(s=e.ownerDocument)&&s.defaultView||window;var r=s.getSelection&&s.getSelection();if(r&&r.rangeCount!==0){s=r.anchorNode;var i=r.anchorOffset,m=r.focusNode;r=r.focusOffset;try{s.nodeType,m.nodeType}catch{s=null;break e}var g=0,w=-1,X=-1,ae=0,be=0,z=e,W=null;t:for(;;){for(var ve;z!==s||i!==0&&z.nodeType!==3||(w=g+i),z!==m||r!==0&&z.nodeType!==3||(X=g+r),z.nodeType===3&&(g+=z.nodeValue.length),(ve=z.firstChild)!==null;)W=z,z=ve;for(;;){if(z===e)break t;if(W===s&&++ae===i&&(w=g),W===m&&++be===r&&(X=g),(ve=z.nextSibling)!==null)break;z=W,W=z.parentNode}z=ve}s=w===-1||X===-1?null:{start:w,end:X}}else s=null}s=s||{start:0,end:0}}else s=null;for(vd={focusedElem:e,selectionRange:s},nr=!1,a=(a&335544064)===a,an=t,t=a?9270:1024;an!==null;){if(e=an,a&&(s=e.deletions,s!==null))for(i=0;i<s.length;i++)a&&Vu(s[i]);if(e.alternate===null&&(e.flags&2)!==0)a&&yf(e),mi(a);else{if(e.tag===22){if(s=e.alternate,e.memoizedState!==null){s!==null&&s.memoizedState===null&&a&&Vu(s),mi(a);continue}else if(s!==null&&s.memoizedState!==null){a&&yf(e),mi(a);continue}}s=e.child,(e.subtreeFlags&t)!==0&&s!==null?(s.return=e,an=s):(a&&Lf(e),mi(a))}}Tn=null}function mi(e){for(;an!==null;){var t=an,a=e,s=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if((r&1024)!==0&&s!==null){a=void 0,r=s.memoizedProps,s=s.memoizedState;var i=t.stateNode;try{var m=rl(t.type,r);a=i.getSnapshotBeforeUpdate(m,s),i.__reactInternalSnapshotBeforeUpdate=a}catch(g){ht(t,t.return,g)}}break;case 3:if((r&1024)!==0){if(s=t.stateNode.containerInfo,a=s.nodeType,a===9)wd(s);else if(a===1)switch(s.nodeName){case"HEAD":case"HTML":case"BODY":wd(s);break;default:s.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&s!==null&&(a=Pa(s.memoizedProps,s.stateNode),r=t.memoizedProps,r=_a(r.default,r.update),r!=="none"&&Tl(s,a,r,s.memoizedState=[],!0));break;default:if((r&1024)!==0)throw Error(c(163))}if(s=t.sibling,s!==null){s.return=t.return,an=s;break}an=t.return}}function Bf(e,t,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:Ba(e,a),s&4&&Kr(5,a);break;case 1:if(Ba(e,a),s&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(m){ht(a,a.return,m)}else{var r=rl(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(r,t,e.__reactInternalSnapshotBeforeUpdate)}catch(m){ht(a,a.return,m)}}s&64&&bf(a),s&512&&va(a,a.return);break;case 3:if(Ba(e,a),s&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{lA(e,t)}catch(m){ht(a,a.return,m)}}break;case 27:t===null&&s&4&&Sf(a);case 26:case 5:Ba(e,a),t===null&&s&4&&_u(a),s&512&&va(a,a.return);break;case 12:Ba(e,a);break;case 31:Ba(e,a),s&4&&Cf(e,a);break;case 13:Ba(e,a),s&4&&Mf(e,a),s&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=qg.bind(null,a),w1(e,a))));break;case 22:if(s=a.memoizedState!==null||nn,!s){var i=t!==null&&t.memoizedState!==null||dt;t=nn,r=dt,nn=s,(dt=i)&&!r?(s=2,(a.subtreeFlags&8772)!==0&&(s|=1),ma(e,a,s)):Ba(e,a),nn=t,dt=r}break;case 30:Ba(e,a),s&512&&va(a,a.return);break;case 7:s&512&&va(a,a.return);default:Ba(e,a)}}function Wu(e,t){for(e=e.child;e!==null;)Hf(e,t),e=e.sibling}function Hf(e,t){switch(e.tag){case 5:case 26:try{var a=e.stateNode;if(t){var s=a.style;typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"}else{var r=e.stateNode,i=e.memoizedProps.style,m=i!=null&&i.hasOwnProperty("display")?i.display:null;r.style.display=m==null||typeof m=="boolean"?"":(""+m).trim()}}catch(w){ht(e,e.return,w)}ed(e,t);break;case 6:try{e.stateNode.nodeValue=t?"":e.memoizedProps,it=!0}catch(w){ht(e,e.return,w)}break;case 18:try{var g=e.stateNode;t?yx(g,!0):yx(e.stateNode,!1)}catch(w){ht(e,e.return,w)}break;case 22:case 23:e.memoizedState===null&&Wu(e,t);break;default:Wu(e,t)}}function ed(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){e:{var a=e,s=t;switch(a.tag){case 4:Hf(a,s);break e;case 22:a.memoizedState===null&&ed(a,s);break e;default:ed(a,s)}}e=e.sibling}}function wf(e){var t=e.alternate;t!==null&&(e.alternate=null,wf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&D(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Mt=null,jn=!1;function ua(e,t,a){for(a=a.child;a!==null;)Ef(e,t,a),a=a.sibling}function Ef(e,t,a){if(kt&&typeof kt.onCommitFiberUnmount=="function")try{kt.onCommitFiberUnmount(pa,a)}catch{}switch(a.tag){case 26:dt||An(a,t),ua(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!dt&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:dt||An(a,t),Pr(a);var s=Mt,r=jn;Bs(a.type)&&(Mt=a.stateNode,jn=!1),ua(e,t,a),Ux(a.stateNode,a.type,a.memoizedProps),Mt=s,jn=r;break;case 5:dt||An(a,t),Pr(a);case 6:if(a.tag===6&&Pr(a),s=Mt,r=jn,Mt=null,ua(e,t,a),Mt=s,jn=r,Mt!==null)if(jn)try{(Mt.nodeType===9?Mt.body:Mt.nodeName==="HTML"?Mt.ownerDocument.body:Mt).removeChild(a.stateNode),it=!0}catch(i){ht(a,t,i)}else try{Mt.removeChild(a.stateNode),it=!0}catch(i){ht(a,t,i)}break;case 18:Mt!==null&&(jn?(e=Mt,Sx(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),ar(e)):Sx(Mt,a.stateNode));break;case 4:s=Mt,r=jn,Mt=a.stateNode.containerInfo,jn=!0,ua(e,t,a),Mt=s,jn=r;break;case 0:case 11:case 14:case 15:ys(2,a,t),dt||ys(4,a,t),ua(e,t,a);break;case 1:dt||(An(a,t),s=a.stateNode,typeof s.componentWillUnmount=="function"&&pf(a,t,s)),ua(e,t,a);break;case 21:ua(e,t,a);break;case 22:dt=(s=dt)||a.memoizedState!==null,ua(e,t,a),dt=s;break;case 30:An(a,t),ua(e,t,a);break;case 7:dt||An(a,t),ua(e,t,a);break;default:ua(e,t,a)}}function Cf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ar(e)}catch(a){ht(t,t.return,a)}}}function Mf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ar(e)}catch(a){ht(t,t.return,a)}}function Gg(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new If),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new If),t;default:throw Error(c(435,e.tag))}}function Ai(e,t){var a=Gg(e);t.forEach(function(s){if(!a.has(s)){a.add(s);var r=Qg.bind(null,e,s);s.then(r,r)}})}function Sn(e,t,a){var s=t.deletions;if(s!==null)for(var r=0;r<s.length;r++){var i=s[r],m=e,g=t,w=g;e:for(;w!==null;){switch(w.tag){case 27:if(Bs(w.type)){Mt=w.stateNode,jn=!1;break e}break;case 5:Mt=w.stateNode,jn=!1;break e;case 3:case 4:Mt=w.stateNode.containerInfo,jn=!0;break e}w=w.return}if(Mt===null)throw Error(c(160));Ef(m,g,i),Mt=null,jn=!1,m=i.alternate,m!==null&&(m.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)kf(t,e,a),t=t.sibling}var da=null;function kf(e,t,a){var s=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(r&4&&(s=e.updateQueue,s=s!==null?s.events:null,s!==null))for(var i=0;i<s.length;i++){var m=s[i];m.ref.impl=m.nextImpl}Sn(t,e,a),yn(e),r&4&&(ys(3,e,e.return),Kr(3,e),ys(5,e,e.return));break;case 1:Sn(t,e,a),yn(e),r&512&&(dt||s===null||An(s,s.return)),r&64&&nn&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?t:a.concat(t))));break;case 26:if(i=da,Sn(t,e,a),yn(e),r&512&&(dt||s===null||An(s,s.return)),r&4)if(r=s!==null?s.memoizedState:null,a=e.memoizedState,s===null)if(a===null)if(e.stateNode===null)if(nn)e.stateNode=px(e.type,e.memoizedProps,t.containerInfo,e);else{e:{t=e.type,a=e.memoizedProps,r=i.ownerDocument||i;t:switch(t){case"title":s=r.getElementsByTagName("title")[0],(!s||s[Fs]||s[ot]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=r.createElement(t),r.head.insertBefore(s,r.querySelector("head > title"))),fn(s,t,a),s[ot]=e,Ve(s),t=s;break e;case"link":if(i=_x("link","href",r).get(t+(a.href||""))){for(m=0;m<i.length;m++)if(s=i[m],s.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&s.getAttribute("rel")===(a.rel==null?null:a.rel)&&s.getAttribute("title")===(a.title==null?null:a.title)&&s.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){i.splice(m,1);break t}}s=r.createElement(t),fn(s,t,a),r.head.appendChild(s);break;case"meta":if(i=_x("meta","content",r).get(t+(a.content||""))){for(m=0;m<i.length;m++)if(s=i[m],s.getAttribute("content")===(a.content==null?null:""+a.content)&&s.getAttribute("name")===(a.name==null?null:a.name)&&s.getAttribute("property")===(a.property==null?null:a.property)&&s.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&s.getAttribute("charset")===(a.charSet==null?null:a.charSet)){i.splice(m,1);break t}}s=r.createElement(t),fn(s,t,a),r.head.appendChild(s);break;default:throw Error(c(468,t))}s[ot]=e,Ve(s),t=s}e.stateNode=t}else nn||Td(i,e.type,e.stateNode);else e.stateNode=Px(i,a,e.memoizedProps);else r!==a?(r===null?(t=s.stateNode,t===null||dt||t.parentNode.removeChild(t)):r.count--,a===null?nn||Td(i,e.type,e.stateNode):Px(i,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Zu(e,e.memoizedProps,s.memoizedProps);break;case 27:Sn(t,e,a),yn(e),r&512&&(dt||s===null||An(s,s.return)),s!==null&&r&4&&Zu(e,e.memoizedProps,s.memoizedProps);break;case 5:if(i=ja,ja=!1,Sn(t,e,a),ja=i,yn(e),r&512&&(dt||s===null||An(s,s.return)),e.flags&32){t=e.stateNode;try{Rl(t,""),it=!0}catch(ae){ht(e,e.return,ae)}}r&4&&e.stateNode!=null&&(t=e.memoizedProps,Zu(e,t,s!==null?s.memoizedProps:t)),r&1024&&(Qu=!0);break;case 6:if(Sn(t,e,a),yn(e),r&4){if(e.stateNode===null)throw Error(c(162));t=e.memoizedProps,a=e.stateNode;try{a.nodeValue=t,it=!0}catch(ae){ht(e,e.return,ae)}}break;case 3:if(it=!1,Ii=null,i=da,da=Qr(t.containerInfo),Sn(t,e,a),da=i,yn(e),r&4&&s!==null&&s.memoizedState.isDehydrated)try{ar(t.containerInfo)}catch(ae){ht(e,e.return,ae)}Qu&&(Qu=!1,Uf(e)),it=!1;break;case 4:r=ja,ja=nn,s=t0(),i=da,da=Qr(e.stateNode.containerInfo),Sn(t,e,a),yn(e),da=i,it&&_r&&(di=!0),it=s,ja=r;break;case 12:Sn(t,e,a),yn(e);break;case 31:Sn(t,e,a),yn(e),r&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Ai(e,t)));break;case 13:Sn(t,e,a),yn(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(hi=Tt()),r&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Ai(e,t)));break;case 22:i=e.memoizedState!==null,m=s!==null&&s.memoizedState!==null;var g=nn,w=dt,X=ja;nn=g||i,ja=X||i,dt=w||m,Sn(t,e,a),dt=w,ja=X,nn=g,yn(e),r&8192&&(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,!i||s===null||m||nn||dt||(t=m||dt,a=nn,s=dt,nn=i||nn,dt=t,Ns(e,2),nn=a,dt=s),!i&&ja||Wu(e,i)),r&4&&(t=e.updateQueue,t!==null&&(a=t.retryQueue,a!==null&&(t.retryQueue=null,Ai(e,a))));break;case 19:Sn(t,e,a),yn(e),r&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Ai(e,t)));break;case 30:r&512&&(dt||s===null||An(s,s.return)),r=t0(),i=_r,m=(a&335544064)===a,g=e.memoizedProps,_r=m&&_a(g.default,g.update)!=="none",Sn(t,e,a),yn(e),m&&s!==null&&it&&(e.flags|=4),_r=i,it=r;break;case 21:break;case 7:r&512&&(dt||s===null||An(s,s.return)),s&&s.stateNode!==null&&(s.stateNode._fragmentFiber=e);default:Sn(t,e,a),yn(e)}}function yn(e){var t=e.flags;if(t&2){try{for(var a,s=e.return;s!==null;){if(Rf(s)){a=s;break}s=s.return}s=null;for(var r=e.return;r!==null;){if(Pu(r)){var i=r.stateNode;s===null?s=[i]:s.push(i)}if(Ku(r))break;r=r.return}var m=s;if(a==null)throw Error(c(160));switch(a.tag){case 27:var g=a.stateNode,w=zu(e);oi(e,w,g,m);break;case 5:var X=a.stateNode;a.flags&32&&(Rl(X,""),a.flags&=-33);var ae=zu(e);oi(e,ae,X,m);break;case 3:case 4:var be=a.stateNode.containerInfo,z=zu(e);Fu(e,z,be,m);break;default:throw Error(c(161))}}catch(W){ht(e,e.return,W)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Uf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Uf(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,nr=!0,t.reset(),nr=!1),e=e.sibling}}function Gl(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)Df(t,e),t=t.sibling;else jf(t)}function Df(e,t){var a=e.alternate;if(a===null)Ju(e,!1);else switch(e.tag){case 3:if($u=Ia=!1,Nf(),Gl(t,e),!Ia&&!di){if(e=La,e!==null)for(var s=0;s<e.length;s+=3){a=e[s];var r=e[s+1];vx(a,e[s+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+r+")"})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),$u=!0}La=null;break;case 5:Gl(t,e);break;case 4:s=Ia,Ia=!1,Gl(t,e),Ia&&(di=!0),Ia=s;break;case 22:e.memoizedState===null&&(a.memoizedState!==null?Ju(e,!1):Gl(t,e));break;case 30:s=Ia,r=Nf(),Ia=!1,Gl(t,e),Ia&&(e.flags|=4);var i=e.memoizedProps,m=e.stateNode;t=Pa(i,m),m=Pa(a.memoizedProps,m);var g=_a(i.default,i.update);g==="none"?t=!1:(i=a.memoizedState,a.memoizedState=null,a=e.child,On=0,t=qu(e,a,t,m,g,i,!0),On!==(i===null?0:i.length)&&(e.flags|=32)),(e.flags&4)!==0&&t?(Jl(e,e.memoizedProps.onUpdate),La=r):r!==null&&(r.push.apply(r,La),La=r),Ia=(e.flags&32)!==0?!0:s;break;default:Gl(t,e)}}function Ba(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Bf(e,t.alternate,t),t=t.sibling}function Ns(e,t){for(e=e.child;e!==null;){var a=e,s=t;switch(a.tag){case 0:case 11:case 14:case 15:ys(4,a,a.return),Ns(a,s);break;case 1:An(a,a.return);var r=a.stateNode;typeof r.componentWillUnmount=="function"&&pf(a,a.return,r),Ns(a,s);break;case 27:(s&2)!==0&&Ux(a.stateNode,a.type,a.memoizedProps);case 5:An(a,a.return),a.tag!==5&&a.tag!==27||Pr(a),Ns(a,s);break;case 6:Pr(a);break;case 26:An(a,a.return),r=a.stateNode,a.memoizedState!==null||r===null||dt||r.parentNode.removeChild(r),Ns(a,s);break;case 22:a.memoizedState===null&&Ns(a,s);break;case 30:An(a,a.return),Ns(a,s);break;case 7:An(a,a.return);default:Ns(a,s)}e=e.sibling}}function ma(e,t,a){for(a=(t.subtreeFlags&8772)!==0?a:a&-2,t=t.child;t!==null;){var s=t.alternate,r=e,i=t,m=i.flags,g=(a&1)!==0;switch(i.tag){case 0:case 11:case 15:ma(r,i,a),Kr(4,i);break;case 1:if(ma(r,i,a),s=i,r=s.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(ae){ht(s,s.return,ae)}if(s=i,r=s.updateQueue,r!==null){var w=s.stateNode;try{var X=r.shared.hiddenCallbacks;if(X!==null)for(r.shared.hiddenCallbacks=null,r=0;r<X.length;r++)sA(X[r],w)}catch(ae){ht(s,s.return,ae)}}g&&m&64&&bf(i),va(i,i.return);break;case 27:(a&2)!==0&&Sf(i);case 5:i.tag!==5&&i.tag!==27||gf(i),ma(r,i,a),g&&s===null&&m&4&&_u(i),va(i,i.return);break;case 6:gf(i);break;case 26:w=i.stateNode,i.memoizedState!==null||w===null||nn||Td(Qr(w.ownerDocument),i.type,w),ma(r,i,a),g&&s===null&&m&4&&_u(i),va(i,i.return);break;case 12:ma(r,i,a);break;case 31:ma(r,i,a),g&&m&4&&Cf(r,i);break;case 13:ma(r,i,a),g&&m&4&&Mf(r,i);break;case 22:i.memoizedState===null&&ma(r,i,a),va(i,i.return);break;case 30:ma(r,i,a),va(i,i.return);break;case 7:va(i,i.return);default:ma(r,i,a)}t=t.sibling}}function td(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&jr(a))}function nd(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&jr(e))}function Wn(e,t,a,s){var r=(a&335544064)===a;if(t.subtreeFlags&(r?10262:10256))for(t=t.child;t!==null;)Tf(e,t,a,s),t=t.sibling;else r&&Of(t)}function Tf(e,t,a,s){var r=(a&335544064)===a;r&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&ui(t);var i=t.flags;switch(t.tag){case 0:case 11:case 15:Wn(e,t,a,s),i&2048&&Kr(9,t);break;case 1:Wn(e,t,a,s);break;case 3:Wn(e,t,a,s),r&&$u&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),i&2048&&(i=null,t.alternate!==null&&(i=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==i&&(t.refCount++,i!=null&&jr(i)));break;case 12:if(i&2048){Wn(e,t,a,s),i=t.stateNode;try{var m=t.memoizedProps,g=m.id,w=m.onPostCommit;typeof w=="function"&&w(g,t.alternate===null?"mount":"update",i.passiveEffectDuration,-0)}catch(X){ht(t,t.return,X)}}else Wn(e,t,a,s);break;case 31:Wn(e,t,a,s);break;case 13:Wn(e,t,a,s);break;case 23:break;case 22:m=t.stateNode,g=t.alternate,t.memoizedState!==null?(r&&g!==null&&g.memoizedState===null&&ui(g),m._visibility&2?Wn(e,t,a,s):Zr(e,t)):(r&&g!==null&&g.memoizedState!==null&&ui(t),m._visibility&2?Wn(e,t,a,s):(m._visibility|=2,Kl(e,t,a,s,(t.subtreeFlags&10256)!==0||!1))),i&2048&&td(g,t);break;case 24:Wn(e,t,a,s),i&2048&&nd(t.alternate,t);break;case 30:r&&(i=t.alternate,i!==null&&(Oa(i.child,!0),Oa(t.child,!0))),Wn(e,t,a,s);break;default:Wn(e,t,a,s)}}function Kl(e,t,a,s,r){for(r=r&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,m=t,g=a,w=s,X=m.flags;switch(m.tag){case 0:case 11:case 15:Kl(i,m,g,w,r),Kr(8,m);break;case 23:break;case 22:var ae=m.stateNode;m.memoizedState!==null?ae._visibility&2?Kl(i,m,g,w,r):Zr(i,m):(ae._visibility|=2,Kl(i,m,g,w,r)),r&&X&2048&&td(m.alternate,m);break;case 24:Kl(i,m,g,w,r),r&&X&2048&&nd(m.alternate,m);break;default:Kl(i,m,g,w,r)}t=t.sibling}}function Zr(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,s=t,r=s.flags;switch(s.tag){case 22:Zr(a,s),r&2048&&td(s.alternate,s);break;case 24:Zr(a,s),r&2048&&nd(s.alternate,s);break;default:Zr(a,s)}t=t.sibling}}var ol=8192;function il(e,t,a){if(e.subtreeFlags&ol)for(e=e.child;e!==null;)Gf(e,t,a),e=e.sibling}function Gf(e,t,a){switch(e.tag){case 26:il(e,t,a),e.flags&ol&&(e.memoizedState!==null?F1(a,da,e.memoizedState,e.memoizedProps):(e=e.stateNode,(t&335544128)===t&&Jx(a,e)));break;case 5:il(e,t,a),e.flags&ol&&(e=e.stateNode,(t&335544128)===t&&Jx(a,e));break;case 3:case 4:var s=da;da=Qr(e.stateNode.containerInfo),il(e,t,a),da=s;break;case 22:e.memoizedState===null&&(s=e.alternate,s!==null&&s.memoizedState!==null?(s=ol,ol=16777216,il(e,t,a),ol=s):il(e,t,a));break;case 30:if((e.flags&ol)!==0&&(s=e.memoizedProps.name,s!=null&&s!=="auto")){var r=e.stateNode;r.paired=null,Tn===null&&(Tn=new Map),Tn.set(s,r)}il(e,t,a);break;default:il(e,t,a)}}function Kf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function zr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var s=t[a];an=s,_f(s,e)}Kf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Pf(e),e=e.sibling}function Pf(e){switch(e.tag){case 0:case 11:case 15:zr(e),e.flags&2048&&ys(9,e,e.return);break;case 3:zr(e);break;case 12:zr(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,fi(e)):zr(e);break;default:zr(e)}}function fi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var s=t[a];an=s,_f(s,e)}Kf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ys(8,t,t.return),fi(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,fi(t));break;default:fi(t)}e=e.sibling}}function _f(e,t){for(;an!==null;){var a=an;switch(a.tag){case 0:case 11:case 15:ys(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:jr(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,an=s;else e:for(a=e;an!==null;){s=an;var r=s.sibling,i=s.return;if(wf(s),s===a){an=null;break e}if(r!==null){r.return=i,an=r;break e}an=i}}}var Kg={getCacheForType:function(e){var t=un(Yt),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return un(Yt).controller.signal}},Pg=typeof WeakMap=="function"?WeakMap:Map,ut=0,Lt=null,Ye=null,$e=0,xt=0,Gn=null,vs=!1,Pl=!1,ad=!1,Qa=0,Pt=0,Ls=0,cl=0,xi=0,Kn=0,_l=0,Fr=null,In=null,sd=!1,hi=0,Zf=0,bi=1/0,pi=null,Os=null,Ut=0,Aa=null,ul=null,Ha=0,ld=0,rd=null,zf=null,Zl=null,zl=null,Fl=null,Jr=0,gi=null;function Pn(){return(ut&2)!==0&&$e!==0?$e&-$e:F.T!==null?hd():zt()}function Ff(){if(Kn===0)if(($e&536870912)===0||ze){var e=Ta;Ta<<=1,(Ta&3932160)===0&&(Ta=262144),Kn=e}else Kn=536870912;return e=dn.current,e!==null&&(e.flags|=32),Kn}function Jl(e,t){if(t!=null){var a=e.stateNode,s=a.ref;s===null&&(s=a.ref=Lx(Pa(e.memoizedProps,a))),zl===null&&(zl=[]),zl.push(t.bind(null,s))}}function Bn(e,t,a){(e===Lt&&(xt===2||xt===9)||e.cancelPendingCommit!==null)&&(Xl(e,0),js(e,$e,Kn,!1)),oe(e,a),((ut&2)===0||e!==Lt)&&(e===Lt&&((ut&2)===0&&(cl|=a),Pt===4&&js(e,$e,Kn,!1)),wa(e))}function Jf(e,t,a){if((ut&6)!==0)throw Error(c(327));var s=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Gt(e,t),r=s?zg(e,t):id(e,t,!0),i=s;do{if(r===0){Pl&&!s&&js(e,t,0,!1);break}else{if(a=e.current.alternate,i&&!_g(a)){r=id(e,t,!1),i=!1;continue}if(r===2){if(i=t,e.errorRecoveryDisabledLanes&i)var m=0;else m=e.pendingLanes&-536870913,m=m!==0?m:m&536870912?536870912:0;if(m!==0){t=m;e:{var g=e;r=Fr;var w=g.current.memoizedState.isDehydrated;if(w&&(Xl(g,m).flags|=256),m=id(g,m,!1),m!==2&&m!==6){if(ad&&!w){g.errorRecoveryDisabledLanes|=i,cl|=i,r=4;break e}i=In,In=r,i!==null&&(In===null?In=i:In.push.apply(In,i))}r=m}if(i=!1,r!==2)continue}}if(r===1){Xl(e,0),js(e,t,0,!0);break}e:{switch(s=e,i=r,i){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:js(s,t,Kn,!vs);break e;case 2:In=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(r=hi+300-Tt(),10<r)){if(js(s,t,Kn,!vs),os(s,0,!0)!==0)break e;Ha=t,s.timeoutHandle=jd(Xf.bind(null,s,a,In,pi,sd,t,Kn,cl,_l,vs,i,"Throttled",-0,0),r);break e}Xf(s,a,In,pi,sd,t,Kn,cl,_l,vs,i,null,-0,0)}}break}while(!0);wa(e)}function Xf(e,t,a,s,r,i,m,g,w,X,ae,be,z,W){e.timeoutHandle=-1;var ve=t.subtreeFlags,He=(i&335544064)===i;if(be=null,(He||ve&8192||(ve&16785408)===16785408)&&(be={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Sa},Tn=null,Gf(t,i,be),He&&(ve=be,He=e.containerInfo,He=(He.nodeType===9?He:He.ownerDocument).__reactViewTransition,He!=null&&(ve.count++,ve.waitingForViewTransition=!0,ve=eo.bind(ve),He.finished.then(ve,ve))),ve=(i&62914560)===i?hi-Tt():(i&4194048)===i?Zf-Tt():0,ve=J1(be,ve),ve!==null)){Ha=i,e.cancelPendingCommit=ve(tx.bind(null,e,t,i,a,s,r,m,g,w,X,ae,be,null,z,W)),js(e,i,m,!X);return}tx(e,t,i,a,s,r,m,g,w,X,ae,be)}function _g(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var r=a[s],i=r.getSnapshot;r=r.value;try{if(!Un(i(),r))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function js(e,t,a,s){t=pn(e,t),t&=~xi,t&=~cl,e.suspendedLanes|=t,e.pingedLanes&=~t,s&&(e.warmLanes|=t),s=e.expirationTimes;for(var r=t;0<r;){var i=31-Ct(r),m=1<<i;s[i]=-1,r&=~m}a!==0&&we(e,a,t)}function Ri(){return(ut&6)===0?(Xr(0),!1):!0}function od(){if(Ye!==null){if(xt===0)var e=Ye.return;else e=Ye,Fa=Qs=null,xu(e),Cl=null,Hr=0,e=Ye;for(;e!==null;)hf(e.alternate,e),e=e.return;Ye=null}}function Xl(e,t){var a=e.timeoutHandle;return a!==-1&&(e.timeoutHandle=-1,m1(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Ha=0,od(),Lt=e,Ye=a=Za(e.current,null),$e=t,xt=0,Gn=null,vs=!1,Pl=Gt(e,t),ad=!1,_l=Kn=xi=cl=Ls=Pt=0,In=Fr=null,sd=!1,Qa=pn(e,t),Io(),a}function Vf(e,t){Ke=null,F.H=Wo,t===El||t===Go?(t=eA(),xt=3):t===nu?(t=eA(),xt=4):xt=t===Hu?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Gn=t,Ye===null&&(Pt=1,ei(e,Yn(t,e.current)))}function Yf(){var e=dn.current;return e===null?!0:($e&4194048)===$e?bn===null:($e&62914560)===$e||($e&536870912)!==0?e===bn:!1}function qf(){var e=F.H;return F.H=Wo,e===null?Wo:e}function Qf(){var e=F.A;return F.A=Kg,e}function Si(){Pt=4,vs||($e&4194048)!==$e&&dn.current!==null||(Pl=!0),(Ls&134217727)===0&&(cl&134217727)===0||Lt===null||js(Lt,$e,Kn,!1)}function id(e,t,a){var s=ut;ut|=2;var r=qf(),i=Qf();(Lt!==e||$e!==t)&&(pi=null,Xl(e,t)),t=!1;var m=Pt;e:do try{if(xt!==0&&Ye!==null){var g=Ye,w=Gn;switch(xt){case 8:od(),m=6;break e;case 3:case 2:case 9:case 6:dn.current===null&&(t=!0);var X=xt;if(xt=0,Gn=null,Vl(e,g,w,X),a&&Pl){m=0;break e}break;default:X=xt,xt=0,Gn=null,Vl(e,g,w,X)}}Zg(),m=Pt;break}catch(ae){Vf(e,ae)}while(!0);return t&&e.shellSuspendCounter++,Fa=Qs=null,ut=s,F.H=r,F.A=i,Ye===null&&(Lt=null,$e=0,Io()),m}function Zg(){for(;Ye!==null;)$f(Ye)}function zg(e,t){var a=ut;ut|=2;var s=qf(),r=Qf();Lt!==e||$e!==t?(pi=null,bi=Tt()+500,Xl(e,t)):Pl=Gt(e,t);e:do try{if(xt!==0&&Ye!==null){t=Ye;var i=Gn;t:switch(xt){case 1:xt=0,Gn=null,Vl(e,t,i,1);break;case 2:case 9:if($0(i)){xt=0,Gn=null,Wf(t);break}t=function(){xt!==2&&xt!==9||Lt!==e||(xt=7),wa(e)},i.then(t,t);break e;case 3:xt=7;break e;case 4:xt=5;break e;case 7:$0(i)?(xt=0,Gn=null,Wf(t)):(xt=0,Gn=null,Vl(e,t,i,7));break;case 5:var m=null;switch(Ye.tag){case 26:m=Ye.memoizedState;case 5:case 27:var g=Ye;if(m?zx(m):g.stateNode.complete){xt=0,Gn=null;var w=g.sibling;if(w!==null)Ye=w;else{var X=g.return;X!==null?(Ye=X,yi(X)):Ye=null}break t}}xt=0,Gn=null,Vl(e,t,i,5);break;case 6:xt=0,Gn=null,Vl(e,t,i,6);break;case 8:od(),Pt=6;break e;default:throw Error(c(462))}}Fg();break}catch(ae){Vf(e,ae)}while(!0);return Fa=Qs=null,F.H=s,F.A=r,ut=a,Ye!==null?0:(Lt=null,$e=0,Io(),Pt)}function Fg(){for(;Ye!==null&&!bl();)$f(Ye)}function $f(e){var t=ff(e.alternate,e,Qa);e.memoizedProps=e.pendingProps,t===null?yi(e):Ye=t}function Wf(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=rf(a,t,t.pendingProps,t.type,void 0,$e);break;case 11:t=rf(a,t,t.pendingProps,t.type.render,t.ref,$e);break;case 5:xu(t);var s=t;s===tn&&(ze?(Mo(s),s.tag===5&&s.stateNode!=null&&(Ht=s.stateNode)):(Mo(s),ze=!0));default:hf(a,t),t=Ye=P0(t,Qa),t=ff(a,t,Qa)}e.memoizedProps=e.pendingProps,t===null?yi(e):Ye=t}function Vl(e,t,a,s){Fa=Qs=null,xu(t),Cl=null,Hr=0;var r=t.return;try{if(Eg(e,r,t,a,$e)){Pt=1,ei(e,Yn(a,e.current)),Ye=null;return}}catch(i){if(r!==null)throw Ye=r,i;Pt=1,ei(e,Yn(a,e.current)),Ye=null;return}t.flags&32768?(ze||s===1?e=!0:Pl||($e&536870912)!==0?e=!1:(vs=e=!0,(s===2||s===9||s===3||s===6)&&(s=dn.current,s!==null&&s.tag===13&&(s.flags|=16384))),ex(t,e)):yi(t)}function yi(e){var t=e;do{if((t.flags&32768)!==0){ex(t,vs);return}e=t.return;var a=Ug(t.alternate,t,Qa);if(a!==null){Ye=a;return}if(t=t.sibling,t!==null){Ye=t;return}Ye=t=e}while(t!==null);Pt===0&&(Pt=5)}function ex(e,t){do{var a=Dg(e.alternate,e);if(a!==null){a.flags&=32767,Ye=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){Ye=e;return}Ye=e=a}while(e!==null);Pt=6,Ye=null}function tx(e,t,a,s,r,i,m,g,w,X,ae,be){e.cancelPendingCommit=null;do Ni();while(Ut!==0);if((ut&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));e===Lt&&(Ye=Lt=null,$e=0),ul=t,Aa=e,Ha=a,rd=r,zf=s,Jg(e,t,a,m,g,w,be)}}function Jg(e,t,a,s,r,i,m){var g=t.lanes|t.childLanes;if(ld=g,g|=Zc,Ne(e,a,g,s,r,i),zl=null,(a&335544064)===a?(Fl=Rg(e),s=10262):(Fl=null,s=10256),(t.subtreeFlags&s)!==0||(t.flags&s)!==0?(e.callbackNode=null,e.callbackPriority=0,$g(oa,function(){return md(),null})):(e.callbackNode=null,e.callbackPriority=0),ii=!1,s=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||s){s=F.T,F.T=null,r=Re.p,Re.p=2,i=ut,ut|=4;try{Tg(e,t,a)}finally{ut=i,Re.p=r,F.T=s}}Ut=1,ii?Zl=p1(m,e.containerInfo,Fl,cd,ud,Vg,dd,md,Xg):(cd(),ud(),dd())}function Xg(e){if(Ut!==0){var t=Aa.onRecoverableError;t(e,{componentStack:null})}}function Vg(){Ut===3&&(Ut=0,Df(ul,Aa),Ut=4)}function cd(){if(Ut===1){Ut=0;var e=Aa,t=ul,a=Ha,s=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||s){s=F.T,F.T=null;var r=Re.p;Re.p=2;var i=ut;ut|=4;try{_r=di=!1,kf(t,e,a),a=vd;var m=w0(e.containerInfo),g=a.focusedElem,w=a.selectionRange;if(m!==g&&g&&g.ownerDocument&&H0(g.ownerDocument.documentElement,g)){if(w!==null&&Tc(g)){var X=w.start,ae=w.end;if(ae===void 0&&(ae=X),"selectionStart"in g)g.selectionStart=X,g.selectionEnd=Math.min(ae,g.value.length);else{var be=g.ownerDocument||document,z=be&&be.defaultView||window;if(z.getSelection){var W=z.getSelection(),ve=g.textContent.length,He=Math.min(w.start,ve),Pe=w.end===void 0?He:Math.min(w.end,ve);!W.extend&&He>Pe&&(m=Pe,Pe=He,He=m);var J=B0(g,He),T=B0(g,Pe);if(J&&T&&(W.rangeCount!==1||W.anchorNode!==J.node||W.anchorOffset!==J.offset||W.focusNode!==T.node||W.focusOffset!==T.offset)){var $=be.createRange();$.setStart(J.node,J.offset),W.removeAllRanges(),He>Pe?(W.addRange($),W.extend(T.node,T.offset)):($.setEnd(T.node,T.offset),W.addRange($))}}}}for(be=[],W=g;W=W.parentNode;)W.nodeType===1&&be.push({element:W,left:W.scrollLeft,top:W.scrollTop});for(typeof g.focus=="function"&&g.focus(),g=0;g<be.length;g++){var he=be[g];he.element.scrollLeft=he.left,he.element.scrollTop=he.top}}nr=!!Nd,vd=Nd=null}finally{ut=i,Re.p=r,F.T=s}}e.current=t,Ut=2}}function ud(){if(Ut===2){Ut=0;var e=Aa,t=ul,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=F.T,F.T=null;var s=Re.p;Re.p=2;var r=ut;ut|=4;try{Bf(e,t.alternate,t)}finally{ut=r,Re.p=s,F.T=a}}Ut=3}}function dd(){if(Ut===4||Ut===3){Ut=0;var e=Zl;Zl=null,pl();var t=Aa,a=ul,s=Ha,r=zf,i=(s&335544064)===s?10262:10256;if((a.subtreeFlags&i)!==0||(a.flags&i)!==0?Ut=5:(Ut=0,ul=Aa=null,nx(t,t.pendingLanes)),i=t.pendingLanes,i===0&&(Os=null),Jn(s),a=a.stateNode,kt&&typeof kt.onCommitFiberRoot=="function")try{kt.onCommitFiberRoot(pa,a,void 0,(a.current.flags&128)===128)}catch{}if(r!==null){a=F.T,i=Re.p,Re.p=2,F.T=null;try{for(var m=t.onRecoverableError,g=0;g<r.length;g++){var w=r[g];m(w.value,{componentStack:w.stack})}}finally{F.T=a,Re.p=i}}if(r=zl,m=Fl,Fl=null,r!==null&&(zl=null,m===null&&(m=[]),e!==null))for(w=0;w<r.length;w++)a=(0,r[w])(m),a!==void 0&&e.finished.finally(a);(Ha&3)!==0&&Ni(),wa(t),i=t.pendingLanes,(s&261930)!==0&&(i&42)!==0?t===gi?Jr++:(Jr=0,gi=t):(Jr=0,gi=null),Xr(0)}}function nx(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,jr(t)))}function Ni(){return Zl!==null&&(Zl.skipTransition(),Zl=null),cd(),ud(),dd(),md()}function md(){if(Ut!==5)return!1;var e=Aa,t=ld;ld=0;var a=Jn(Ha),s=F.T,r=Re.p;try{Re.p=32>a?32:a,F.T=null,a=rd,rd=null;var i=Aa,m=Ha;if(Ut=0,ul=Aa=null,Ha=0,(ut&6)!==0)throw Error(c(331));var g=ut;if(ut|=4,Pf(i.current),Tf(i,i.current,m,a),ut=g,Xr(0,!1),kt&&typeof kt.onPostCommitFiberRoot=="function")try{kt.onPostCommitFiberRoot(pa,i)}catch{}return!0}finally{Re.p=r,F.T=s,nx(e,t)}}function ax(e,t,a){t=Yn(a,t),t=Bu(e.stateNode,t,2),e=ps(e,t,2),e!==null&&(oe(e,2),wa(e))}function ht(e,t,a){if(e.tag===3)ax(e,e,a);else for(;t!==null;){if(t.tag===3){ax(t,e,a);break}else if(t.tag===1){var s=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Os===null||!Os.has(s))){e=Yn(a,e),a=$A(2),s=ps(t,a,2),s!==null&&(WA(a,s,t,e),oe(s,2),wa(s));break}}t=t.return}}function Ad(e,t,a){var s=e.pingCache;if(s===null){s=e.pingCache=new Pg;var r=new Set;s.set(t,r)}else r=s.get(t),r===void 0&&(r=new Set,s.set(t,r));r.has(a)||(ad=!0,r.add(a),e=Yg.bind(null,e,t,a),t.then(e,e))}function Yg(e,t,a){var s=e.pingCache;s!==null&&s.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Lt===e&&($e&a)===a&&((Pt===4||Pt===3&&($e&62914560)===$e&&300>Tt()-hi)&&(ut&2)===0?Xl(e,0):xi|=a,_l===$e&&(_l=0)),wa(e)}function sx(e,t){t===0&&(t=N()),e=Vs(e,t),e!==null&&(oe(e,t),wa(e))}function qg(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),sx(e,a)}function Qg(e,t){var a=0;switch(e.tag){case 31:case 13:var s=e.stateNode,r=e.memoizedState;r!==null&&(a=r.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(c(314))}s!==null&&s.delete(t),sx(e,a)}function $g(e,t){return nt(e,t)}var Yl=null,ql=null,fd=!1,vi=!1,xd=!1,Is=0;function wa(e){e!==ql&&e.next===null&&(ql===null?Yl=ql=e:ql=ql.next=e),vi=!0,fd||(fd=!0,e1())}function Xr(e,t){if(!xd&&vi){xd=!0;do for(var a=!1,s=Yl;s!==null;){if(e!==0){var r=s.pendingLanes;if(r===0)var i=0;else{var m=s.suspendedLanes,g=s.pingedLanes;i=(1<<31-Ct(42|e)+1)-1,i&=r&~(m&~g),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,ix(s,i))}else i=$e,i=os(s,s===Lt?i:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(i&3)===0||Gt(s,i)||(a=!0,ix(s,i));s=s.next}while(a);xd=!1}}function Wg(){lx()}function lx(){vi=fd=!1;var e=0;Is!==0&&d1()&&(e=Is);for(var t=Tt(),a=null,s=Yl;s!==null;){var r=s.next,i=rx(s,t);i===0?(s.next=null,a===null?Yl=r:a.next=r,r===null&&(ql=a)):(a=s,(e!==0||(i&3)!==0)&&(vi=!0)),s=r}Ut!==0&&Ut!==5||Xr(e),Is!==0&&(Is=0)}function rx(e,t){for(var a=e.suspendedLanes,s=e.pingedLanes,r=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var m=31-Ct(i),g=1<<m,w=r[m];w===-1?((g&a)===0||(g&s)!==0)&&(r[m]=Ra(g,t)):w<=t&&(e.expiredLanes|=g),i&=~g}if(t=Lt,a=$e,a=os(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s=e.callbackNode,a===0||e===t&&(xt===2||xt===9)||e.cancelPendingCommit!==null)return s!==null&&s!==null&&la(s),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Gt(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(s!==null&&la(s),Jn(a)){case 2:case 8:a=Ps;break;case 32:a=oa;break;case 268435456:a=Ua;break;default:a=oa}return s=ox.bind(null,e),a=nt(a,s),e.callbackPriority=t,e.callbackNode=a,t}return s!==null&&s!==null&&la(s),e.callbackPriority=2,e.callbackNode=null,2}function ox(e,t){if(Ut!==0&&Ut!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Ni()&&e.callbackNode!==a)return null;var s=$e;return s=os(e,e===Lt?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s===0?null:(Jf(e,s,t),rx(e,Tt()),e.callbackNode!=null&&e.callbackNode===a?ox.bind(null,e):null)}function ix(e,t){if(Ni())return null;Jf(e,t,!0)}function e1(){A1(function(){(ut&6)!==0?nt(ls,Wg):lx()})}function hd(){if(Is===0){var e=el;e===0&&(e=Cn,Cn<<=1,(Cn&261888)===0&&(Cn=256)),Is=e}return Is}function cx(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ro(e)}function t1(e,t,a,s,r){if(t==="submit"&&a&&a.stateNode===r){var i=cx((r[Et]||null).action),m=s.submitter;m&&(t=(t=m[Et]||null)?cx(t.formAction):m.getAttribute("formAction"),t!==null&&(i=t,m=null));var g=new vo("action","action",null,s,r);e.push({event:g,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Is!==0){var w=new FormData(r,m);vu(a,{pending:!0,data:w,method:r.method,action:i},null,w)}}else typeof i=="function"&&(g.preventDefault(),w=new FormData(r,m),vu(a,{pending:!0,data:w,method:r.method,action:i},i,w))},currentTarget:r}]})}}for(var bd=0;bd<_c.length;bd++){var pd=_c[bd],n1=pd.toLowerCase(),a1=pd[0].toUpperCase()+pd.slice(1);ca(n1,"on"+a1)}ca(M0,"onAnimationEnd"),ca(k0,"onAnimationIteration"),ca(U0,"onAnimationStart"),ca("dblclick","onDoubleClick"),ca("focusin","onFocus"),ca("focusout","onBlur"),ca(mg,"onTransitionRun"),ca(Ag,"onTransitionStart"),ca(fg,"onTransitionCancel"),ca(D0,"onTransitionEnd"),Jt("onMouseEnter",["mouseout","mouseover"]),Jt("onMouseLeave",["mouseout","mouseover"]),Jt("onPointerEnter",["pointerout","pointerover"]),Jt("onPointerLeave",["pointerout","pointerover"]),Bt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Bt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Bt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Bt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Bt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Bt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),s1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Vr));function ux(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var s=e[a],r=s.event;s=s.listeners;e:{var i=void 0;if(t)for(var m=s.length-1;0<=m;m--){var g=s[m],w=g.instance,X=g.currentTarget;if(g=g.listener,w!==i&&r.isPropagationStopped())break e;i=g,r.currentTarget=X;try{i(r)}catch(ae){jo(ae)}r.currentTarget=null,i=w}else for(m=0;m<s.length;m++){if(g=s[m],w=g.instance,X=g.currentTarget,g=g.listener,w!==i&&r.isPropagationStopped())break e;i=g,r.currentTarget=X;try{i(r)}catch(ae){jo(ae)}r.currentTarget=null,i=w}}}}function qe(e,t){var a=t[zs];a===void 0&&(a=t[zs]=new Set);var s=e+"__bubble";a.has(s)||(dx(t,e,2,!1),a.add(s))}function gd(e,t,a){var s=0;t&&(s|=4),dx(a,e,s,t)}var Li="_reactListening"+Math.random().toString(36).slice(2);function Rd(e){if(!e[Li]){e[Li]=!0,It.forEach(function(a){a!=="selectionchange"&&(s1.has(a)||gd(a,!1,e),gd(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Li]||(t[Li]=!0,gd("selectionchange",!1,t))}}function dx(e,t,a,s){switch(eh(t)){case 2:var r=q1;break;case 8:r=Q1;break;default:r=Kd}a=r.bind(null,t,a,e),r=void 0,!Ic||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),s?r!==void 0?e.addEventListener(t,a,{capture:!0,passive:r}):e.addEventListener(t,a,!0):r!==void 0?e.addEventListener(t,a,{passive:r}):e.addEventListener(t,a,!1)}function Sd(e,t,a,s,r){var i=s;if((t&1)===0&&(t&2)===0&&s!==null)e:for(;;){if(s===null)return;var m=s.tag;if(m===3||m===4){var g=s.stateNode.containerInfo;if(g===r)break;if(m===4)for(m=s.return;m!==null;){var w=m.tag;if((w===3||w===4)&&m.stateNode.containerInfo===r)return;m=m.return}for(;g!==null;){if(m=Q(g),m===null)return;if(w=m.tag,w===5||w===6||w===26||w===27){s=i=m;continue e}g=g.parentNode}}s=s.return}u0(function(){var X=i,ae=Oc(a),be=[];e:{var z=T0.get(e);if(z!==void 0){var W=vo,ve=e;switch(e){case"keypress":if(yo(a)===0)break e;case"keydown":case"keyup":W=_p;break;case"focusin":ve="focus",W=Ec;break;case"focusout":ve="blur",W=Ec;break;case"beforeblur":case"afterblur":W=Ec;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":W=A0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":W=Hp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":W=Xp;break;case M0:case k0:case U0:W=Cp;break;case D0:W=Yp;break;case"scroll":case"scrollend":W=Ip;break;case"wheel":W=Qp;break;case"copy":case"cut":case"paste":W=kp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":W=x0;break;case"submit":W=Fp;break;case"toggle":case"beforetoggle":W=Wp}var He=(t&4)!==0,Pe=!He&&(e==="scroll"||e==="scrollend"),J=He?z!==null?z+"Capture":null:z;He=[];for(var T=X,$;T!==null;){var he=T;if($=he.stateNode,he=he.tag,he!==5&&he!==26&&he!==27||$===null||J===null||(he=hr(T,J),he!=null&&He.push(Yr(T,he,$))),Pe)break;T=T.return}0<He.length&&(z=new W(z,ve,null,a,ae),be.push({event:z,listeners:He}))}}if((t&7)===0){e:{if(W=e==="mouseover"||e==="pointerover",z=e==="mouseout"||e==="pointerout",W&&a!==Lc&&(ve=a.relatedTarget||a.fromElement)&&(Q(ve)||ve[Mn]))break e;(z||W)&&(ve=ae.window===ae?ae:(W=ae.ownerDocument)?W.defaultView||W.parentWindow:window,z?(W=a.relatedTarget||a.toElement,z=X,W=W?Q(W):null,W!==null&&(Pe=A(W),He=W.tag,W!==Pe||He!==5&&He!==27&&He!==6)&&(W=null)):(z=null,W=X),z!==W&&(He=A0,he="onMouseLeave",J="onMouseEnter",T="mouse",(e==="pointerout"||e==="pointerover")&&(He=x0,he="onPointerLeave",J="onPointerEnter",T="pointer"),Pe=z==null?ve:Ge(z),$=W==null?ve:Ge(W),ve=new He(he,T+"leave",z,a,ae),ve.target=Pe,ve.relatedTarget=$,he=null,Q(ae)===X&&(He=new He(J,T+"enter",W,a,ae),He.target=$,He.relatedTarget=Pe,he=He),Pe=he,He=z&&W?V(z,W,l1):null,z!==null&&mx(be,ve,z,He,!1),W!==null&&Pe!==null&&mx(be,Pe,W,He,!0)))}e:{if(z=X?Ge(X):window,W=z.nodeName&&z.nodeName.toLowerCase(),W==="select"||W==="input"&&z.type==="file")var Be=N0;else if(S0(z))if(v0)Be=cg;else{Be=og;var We=rg}else W=z.nodeName,!W||W.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?X&&vc(X.elementType)&&(Be=N0):Be=ig;if(Be&&(Be=Be(e,X))){y0(be,Be,a,ae);break e}We&&We(e,z,X)}switch(We=X?Ge(X):window,e){case"focusin":(S0(We)||We.contentEditable==="true")&&(vl=We,Gc=X,vr=null);break;case"focusout":vr=Gc=vl=null;break;case"mousedown":Kc=!0;break;case"contextmenu":case"mouseup":case"dragend":Kc=!1,E0(be,a,ae);break;case"selectionchange":if(dg)break;case"keydown":case"keyup":E0(be,a,ae)}var Ce;if(Mc)e:{switch(e){case"compositionstart":var Me="onCompositionStart";break e;case"compositionend":Me="onCompositionEnd";break e;case"compositionupdate":Me="onCompositionUpdate";break e}Me=void 0}else Nl?g0(e,a)&&(Me="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Me="onCompositionStart");Me&&(h0&&a.locale!=="ko"&&(Nl||Me!=="onCompositionStart"?Me==="onCompositionEnd"&&Nl&&(Ce=d0()):(cs=ae,Bc="value"in cs?cs.value:cs.textContent,Nl=!0)),We=Oi(X,Me),0<We.length&&(Me=new f0(Me,e,null,a,ae),be.push({event:Me,listeners:We}),Ce?Me.data=Ce:(Ce=R0(a),Ce!==null&&(Me.data=Ce)))),(Ce=tg?ng(e,a):ag(e,a))&&(Me=Oi(X,"onBeforeInput"),0<Me.length&&(We=new f0("onBeforeInput","beforeinput",null,a,ae),be.push({event:We,listeners:Me}),We.data=Ce)),t1(be,e,X,a,ae)}ux(be,t)})}function Yr(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Oi(e,t){for(var a=t+"Capture",s=[];e!==null;){var r=e,i=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||i===null||(r=hr(e,a),r!=null&&s.unshift(Yr(e,r,i)),r=hr(e,t),r!=null&&s.push(Yr(e,r,i))),e.tag===3)return s;e=e.return}return[]}function l1(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function mx(e,t,a,s,r){for(var i=t._reactName,m=[];a!==null&&a!==s;){var g=a,w=g.alternate,X=g.stateNode;if(g=g.tag,w!==null&&w===s)break;g!==5&&g!==26&&g!==27||X===null||(w=X,r?(X=hr(a,i),X!=null&&m.unshift(Yr(a,X,w))):r||(X=hr(a,i),X!=null&&m.push(Yr(a,X,w)))),a=a.return}m.length!==0&&e.push({event:t,listeners:m})}var r1=/\r\n?/g,o1=/\u0000|\uFFFD/g;function Ax(e){return(typeof e=="string"?e:""+e).replace(r1,`
`).replace(o1,"")}function fx(e,t){return t=Ax(t),Ax(e)===t}function bt(e,t,a,s,r,i){switch(a){case"children":if(typeof s=="string")t==="body"||t==="textarea"&&s===""||Rl(e,s);else if(typeof s=="number"||typeof s=="bigint")t!=="body"&&Rl(e,""+s);else return;break;case"className":go(e,"class",s);break;case"tabIndex":go(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":go(e,a,s);break;case"style":i0(e,s,i);return;case"data":if(t!=="object"){go(e,"data",s);break}case"src":case"href":if(s===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=Ro(s),e.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&bt(e,t,"name",r.name,r,null),bt(e,t,"formEncType",r.formEncType,r,null),bt(e,t,"formMethod",r.formMethod,r,null),bt(e,t,"formTarget",r.formTarget,r,null)):(bt(e,t,"encType",r.encType,r,null),bt(e,t,"method",r.method,r,null),bt(e,t,"target",r.target,r,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=Ro(s),e.setAttribute(a,s);break;case"onClick":s!=null&&(e.onclick=Sa);return;case"onScroll":s!=null&&qe("scroll",e);return;case"onScrollEnd":s!=null&&qe("scrollend",e);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(c(61));if(a=s.__html,a!=null){if(r.children!=null)throw Error(c(60));(i!=null?i.__html:void 0)!==a&&(e.innerHTML=a)}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}a=Ro(s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,s):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":s===!0?e.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,s):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(a,s):e.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(a):e.setAttribute(a,s);break;case"popover":qe("beforetoggle",e),qe("toggle",e),po(e,"popover",s);break;case"xlinkActuate":Ga(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Ga(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Ga(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Ga(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Ga(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Ga(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Ga(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Ga(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Ga(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":po(e,"is",s);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=Op.get(a)||a,po(e,a,s);else return}it=!0}function yd(e,t,a,s,r,i){switch(a){case"style":i0(e,s,i);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(c(61));if(a=s.__html,a!=null){if(r.children!=null)throw Error(c(60));(i!=null?i.__html:void 0)!==a&&(e.innerHTML=a)}}break;case"children":if(typeof s=="string")Rl(e,s);else if(typeof s=="number"||typeof s=="bigint")Rl(e,""+s);else return;break;case"onScroll":s!=null&&qe("scroll",e);return;case"onScrollEnd":s!=null&&qe("scrollend",e);return;case"onClick":s!=null&&(e.onclick=Sa);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Ft.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(r=a.endsWith("Capture"),i=a.slice(2,r?a.length-7:void 0),t=e[Et]||null,t=t!=null?t[a]:null,typeof t=="function"&&e.removeEventListener(i,t,r),typeof s=="function")){typeof t!="function"&&t!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(i,s,r);break e}it=!0,a in e?e[a]=s:s===!0?e.setAttribute(a,""):po(e,a,s)}return}it=!0}function fn(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":qe("error",e),qe("load",e);var s=!1,r=!1,i;for(i in a)if(a.hasOwnProperty(i)){var m=a[i];if(m!=null)switch(i){case"src":s=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:bt(e,t,i,m,a,null)}}r&&bt(e,t,"srcSet",a.srcSet,a,null),s&&bt(e,t,"src",a.src,a,null);return;case"input":qe("invalid",e);var g=i=m=r=null,w=null,X=null;for(s in a)if(a.hasOwnProperty(s)){var ae=a[s];if(ae!=null)switch(s){case"name":r=ae;break;case"type":m=ae;break;case"checked":w=ae;break;case"defaultChecked":X=ae;break;case"value":i=ae;break;case"defaultValue":g=ae;break;case"children":case"dangerouslySetInnerHTML":if(ae!=null)throw Error(c(137,t));break;default:bt(e,t,s,ae,a,null)}}s0(e,i,g,w,X,m,r,!1);return;case"select":qe("invalid",e),s=m=i=null;for(r in a)if(a.hasOwnProperty(r)&&(g=a[r],g!=null))switch(r){case"value":i=g;break;case"defaultValue":m=g;break;case"multiple":s=g;default:bt(e,t,r,g,a,null)}t=i,a=m,e.multiple=!!s,t!=null?gl(e,!!s,t,!1):a!=null&&gl(e,!!s,a,!0);return;case"textarea":qe("invalid",e),i=r=s=null;for(m in a)if(a.hasOwnProperty(m)&&(g=a[m],g!=null))switch(m){case"value":s=g;break;case"defaultValue":r=g;break;case"children":i=g;break;case"dangerouslySetInnerHTML":if(g!=null)throw Error(c(91));break;default:bt(e,t,m,g,a,null)}r0(e,s,r,i);return;case"option":for(w in a)if(a.hasOwnProperty(w)&&(s=a[w],s!=null))switch(w){case"selected":e.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:bt(e,t,w,s,a,null)}return;case"dialog":qe("beforetoggle",e),qe("toggle",e),qe("cancel",e),qe("close",e);break;case"iframe":case"object":qe("load",e);break;case"video":case"audio":for(s=0;s<Vr.length;s++)qe(Vr[s],e);break;case"image":qe("error",e),qe("load",e);break;case"details":qe("toggle",e);break;case"embed":case"source":case"link":qe("error",e),qe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(X in a)if(a.hasOwnProperty(X)&&(s=a[X],s!=null))switch(X){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:bt(e,t,X,s,a,null)}return;default:if(vc(t)){for(ae in a)a.hasOwnProperty(ae)&&(s=a[ae],s!==void 0&&yd(e,t,ae,s,a,void 0));return}}for(g in a)a.hasOwnProperty(g)&&(s=a[g],s!=null&&bt(e,t,g,s,a,null))}var i1={};function c1(e,t,a,s){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,i=null,m=null,g=null,w=null,X=null,ae=null;for(W in a){var be=a[W];if(a.hasOwnProperty(W)&&be!=null)switch(W){case"checked":break;case"value":break;case"defaultValue":w=be;default:s.hasOwnProperty(W)||bt(e,t,W,null,s,be)}}for(var z in s){var W=s[z];if(be=a[z],s.hasOwnProperty(z)&&(W!=null||be!=null))switch(z){case"type":W!==be&&(it=!0),i=W;break;case"name":W!==be&&(it=!0),r=W;break;case"checked":W!==be&&(it=!0),X=W;break;case"defaultChecked":W!==be&&(it=!0),ae=W;break;case"value":W!==be&&(it=!0),m=W;break;case"defaultValue":W!==be&&(it=!0),g=W;break;case"children":case"dangerouslySetInnerHTML":if(W!=null)throw Error(c(137,t));break;default:W!==be&&bt(e,t,z,W,s,be)}}yc(e,m,g,w,X,ae,i,r);return;case"select":W=m=g=z=null;for(i in a)if(w=a[i],a.hasOwnProperty(i)&&w!=null)switch(i){case"value":break;case"multiple":W=w;default:s.hasOwnProperty(i)||bt(e,t,i,null,s,w)}for(r in s)if(i=s[r],w=a[r],s.hasOwnProperty(r)&&(i!=null||w!=null))switch(r){case"value":i!==w&&(it=!0),z=i;break;case"defaultValue":i!==w&&(it=!0),g=i;break;case"multiple":i!==w&&(it=!0),m=i;default:i!==w&&bt(e,t,r,i,s,w)}t=g,a=m,s=W,z!=null?gl(e,!!a,z,!1):!!s!=!!a&&(t!=null?gl(e,!!a,t,!0):gl(e,!!a,a?[]:"",!1));return;case"textarea":W=z=null;for(g in a)if(r=a[g],a.hasOwnProperty(g)&&r!=null&&!s.hasOwnProperty(g))switch(g){case"value":break;case"children":break;default:bt(e,t,g,null,s,r)}for(m in s)if(r=s[m],i=a[m],s.hasOwnProperty(m)&&(r!=null||i!=null))switch(m){case"value":r!==i&&(it=!0),z=r;break;case"defaultValue":r!==i&&(it=!0),W=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(c(91));break;default:r!==i&&bt(e,t,m,r,s,i)}l0(e,z,W);return;case"option":for(var ve in a)if(z=a[ve],a.hasOwnProperty(ve)&&z!=null&&!s.hasOwnProperty(ve))switch(ve){case"selected":e.selected=!1;break;default:bt(e,t,ve,null,s,z)}for(w in s)if(z=s[w],W=a[w],s.hasOwnProperty(w)&&z!==W&&(z!=null||W!=null))switch(w){case"selected":z!==W&&(it=!0),e.selected=z&&typeof z!="function"&&typeof z!="symbol";break;default:bt(e,t,w,z,s,W)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var He in a)z=a[He],a.hasOwnProperty(He)&&z!=null&&!s.hasOwnProperty(He)&&bt(e,t,He,null,s,z);for(X in s)if(z=s[X],W=a[X],s.hasOwnProperty(X)&&z!==W&&(z!=null||W!=null))switch(X){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(c(137,t));break;default:bt(e,t,X,z,s,W)}return;default:if(vc(t)){for(var Pe in a)z=a[Pe],a.hasOwnProperty(Pe)&&z!==void 0&&!s.hasOwnProperty(Pe)&&yd(e,t,Pe,void 0,s,z);for(ae in s)z=s[ae],W=a[ae],!s.hasOwnProperty(ae)||z===W||z===void 0&&W===void 0||yd(e,t,ae,z,s,W);return}}for(var J in a)z=a[J],a.hasOwnProperty(J)&&z!=null&&!s.hasOwnProperty(J)&&bt(e,t,J,null,s,z);for(be in s)z=s[be],W=a[be],!s.hasOwnProperty(be)||z===W||z==null&&W==null||bt(e,t,be,z,s,W)}function xx(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function u1(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var r=a[s],i=r.transferSize,m=r.initiatorType,g=r.duration;if(i&&g&&xx(m)){for(m=0,g=r.responseEnd,s+=1;s<a.length;s++){var w=a[s],X=w.startTime;if(X>g)break;var ae=w.transferSize,be=w.initiatorType;ae&&xx(be)&&(w=w.responseEnd,m+=ae*(w<g?1:(g-X)/(w-X)))}if(--s,t+=8*(i+m)/(r.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Nd=null,vd=null;function qr(e){return e.nodeType===9?e:e.ownerDocument}function hx(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function bx(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function px(e,t,a,s){return a=qr(a).createElement(e),a[ot]=s,a[Et]=t,fn(a,e,t),Ve(a),a}function Ld(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Od=null;function d1(){var e=window.event;return e&&e.type==="popstate"?e===Od?!1:(Od=e,!0):(Od=null,!1)}var jd=typeof setTimeout=="function"?setTimeout:void 0,m1=typeof clearTimeout=="function"?clearTimeout:void 0,gx=typeof Promise=="function"?Promise:void 0,Rx=typeof requestAnimationFrame=="function"?requestAnimationFrame:jd,A1=typeof queueMicrotask=="function"?queueMicrotask:typeof gx<"u"?function(e){return gx.resolve(null).then(e).catch(f1)}:jd;function f1(e){setTimeout(function(){throw e})}function Bs(e){return e==="head"}function Sx(e,t){var a=t,s=0;do{var r=a.nextSibling;if(e.removeChild(a),r&&r.nodeType===8)if(a=r.data,a==="/$"||a==="/&"){if(s===0){e.removeChild(r),ar(t);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")kd(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,kd(a);for(var i=a.firstChild;i;){var m=i.nextSibling,g=i.nodeName;i[Fs]||g==="SCRIPT"||g==="STYLE"||g==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=m}}else a==="body"&&kd(e.ownerDocument.body);a=r}while(a);ar(t)}function yx(e,t){var a=e;e=0;do{var s=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=s}while(a)}function Nx(e,t,a){if(t=CSS.escape(t)!==t?"r-"+btoa(t).replace(/=/g,""):t,e.style.viewTransitionName=t,a!=null&&(e.style.viewTransitionClass=a),a=getComputedStyle(e),a.display==="inline"){if(t=e.getClientRects(),t.length===1)var s=1;else for(var r=s=0;r<t.length;r++){var i=t[r];0<i.width&&0<i.height&&s++}s===1&&(e=e.style,e.display=t.length===1?"inline-block":"block",e.marginTop="-"+a.paddingTop,e.marginBottom="-"+a.paddingBottom)}}function vx(e,t){e=e.style,t=t.style;var a=t!=null?t.hasOwnProperty("viewTransitionName")?t.viewTransitionName:t.hasOwnProperty("view-transition-name")?t["view-transition-name"]:null:null;e.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=t!=null?t.hasOwnProperty("viewTransitionClass")?t.viewTransitionClass:t.hasOwnProperty("view-transition-class")?t["view-transition-class"]:null:null,e.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),e.display==="inline-block"&&(t==null?e.display=e.margin="":(a=t.display,e.display=a==null||typeof a=="boolean"?"":a,a=t.margin,a!=null?e.margin=a:(a=t.hasOwnProperty("marginTop")?t.marginTop:t["margin-top"],e.marginTop=a==null||typeof a=="boolean"?"":a,t=t.hasOwnProperty("marginBottom")?t.marginBottom:t["margin-bottom"],e.marginBottom=t==null||typeof t=="boolean"?"":t)))}function x1(e,t,a){return a=a.ownerDocument.defaultView,{rect:e,abs:t.position==="absolute"||t.position==="fixed",clip:t.clipPath!=="none"||t.overflow!=="visible"||t.filter!=="none"||t.mask!=="none"||t.mask!=="none"||t.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=a.innerHeight&&e.left<=a.innerWidth}}function Id(e){var t=e.getBoundingClientRect(),a=getComputedStyle(e);return x1(t,a,e)}function h1(e){return e.documentElement.clientHeight}function b1(e){this.addEventListener("load",e),this.addEventListener("error",e)}function p1(e,t,a,s,r,i,m,g,w){var X=t.nodeType===9?t:t.ownerDocument;try{var ae=X.startViewTransition({update:function(){var z=X.defaultView,W=z.navigation&&z.navigation.transition,ve=X.fonts.status;s();var He=[];if(ve==="loaded"&&(h1(X),X.fonts.status==="loading"&&He.push(X.fonts.ready)),ve=He.length,e!==null)for(var Pe=e.suspenseyImages,J=0,T=0;T<Pe.length;T++){var $=Pe[T];if(!$.complete){var he=$.getBoundingClientRect();if(0<he.bottom&&0<he.right&&he.top<z.innerHeight&&he.left<z.innerWidth){if(J+=Fx($),J>Bi){He.length=ve;break}$=new Promise(b1.bind($)),He.push($)}}}if(0<He.length)return z=Promise.race([Promise.all(He),new Promise(function(Be){return setTimeout(Be,500)})]).then(r,r),(W?Promise.allSettled([W.finished,z]):z).then(i,i);if(r(),W)return W.finished.then(i,i);i()},types:a});X.__reactViewTransition=ae;var be=[];return ae.ready.then(function(){for(var z=X.documentElement.getAnimations({subtree:!0}),W=0;W<z.length;W++){var ve=z[W],He=ve.effect,Pe=He.pseudoElement;if(Pe!=null&&Pe.startsWith("::view-transition")){be.push(ve),ve=He.getKeyframes();for(var J=Pe=void 0,T=!0,$=0;$<ve.length;$++){var he=ve[$],Be=he.width;if(Pe===void 0)Pe=Be;else if(Pe!==Be){T=!1;break}if(Be=he.height,J===void 0)J=Be;else if(J!==Be){T=!1;break}delete he.width,delete he.height,he.transform==="none"&&delete he.transform}T&&Pe!==void 0&&J!==void 0&&(He.setKeyframes(ve),T=getComputedStyle(He.target,He.pseudoElement),T.width!==Pe||T.height!==J)&&(T=ve[0],T.width=Pe,T.height=J,T=ve[ve.length-1],T.width=Pe,T.height=J,He.setKeyframes(ve))}}m()},function(z){X.__reactViewTransition===ae&&(X.__reactViewTransition=null);try{if(typeof z=="object"&&z!==null)switch(z.name){case"InvalidStateError":(z.message==="View transition was skipped because document visibility state is hidden."||z.message==="Skipping view transition because document visibility state has become hidden."||z.message==="Skipping view transition because viewport size changed."||z.message==="Transition was aborted because of invalid state")&&(z=null)}z!==null&&w(z)}finally{s(),r(),m()}}),ae.finished.finally(function(){for(var z=0;z<be.length;z++)be[z].cancel();X.__reactViewTransition===ae&&(X.__reactViewTransition=null),g()}),ae}catch{return s(),r(),m(),null}}function dl(e,t){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+t+")"}dl.prototype.animate=function(e,t){return t=typeof t=="number"?{duration:t}:ce({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)},dl.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,a=e.getAnimations({subtree:!0}),s=[],r=0;r<a.length;r++){var i=a[r].effect;i!==null&&i.target===e&&i.pseudoElement===t&&s.push(a[r])}return s},dl.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Lx(e){return{name:e,group:new dl("group",e),imagePair:new dl("image-pair",e),old:new dl("old",e),new:new dl("new",e)}}function _n(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}_n.prototype.addEventListener=function(e,t,a){var s=null,r=null;if(!(a!=null&&typeof a!="boolean"&&(s=a.signal||null,s!==null&&s.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var i=this._eventListeners;if(jx(i,e,t,a)===-1){var m=this,g=t;a!=null&&typeof a!="boolean"&&a.once===!0&&(g=function(w){m.removeEventListener(e,t,a),typeof t=="function"?t.call(this,w):t.handleEvent(w)}),s!==null&&(r=m.removeEventListener.bind(m,e,t,a),s.addEventListener("abort",r,{once:!0}),r=s.removeEventListener.bind(s,"abort",r)),s=Ql(a),i.push({type:e,listener:t,optionsOrUseCapture:a,attachedListener:g,cleanup:r}),b(this._fragmentFiber.child,!1,g1,e,g,s)}this._eventListeners=i}};function g1(e,t,a,s){return L(e).addEventListener(t,a,s),!1}_n.prototype.removeEventListener=function(e,t,a){var s=this._eventListeners;if(s!==null&&(t=jx(s,e,t,a),t!==-1)){var r=s[t];a=r.attachedListener;var i=r.cleanup;r=Ql(r.optionsOrUseCapture),b(this._fragmentFiber.child,!1,R1,e,a,r),s.splice(t,1),i!==null&&i()}};function R1(e,t,a,s){return L(e).removeEventListener(t,a,s),!1}function Ql(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function Ox(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function jx(e,t,a,s){if(e.length===0)return-1;s=Ox(s);for(var r=0;r<e.length;r++){var i=e[r];if(i.type===t&&i.listener===a&&Ox(i.optionsOrUseCapture)===s)return r}return-1}_n.prototype.dispatchEvent=function(e){var t=H(this._fragmentFiber);if(t===null)return!0;t=L(t);var a=this._eventListeners;if(a!==null&&0<a.length||!e.bubbles){var s=t.nodeType===9?t.createComment(""):document.createTextNode("");if(a)for(var r=0;r<a.length;r++){var i=a[r];s.addEventListener(i.type,i.attachedListener,Ql(i.optionsOrUseCapture))}if(t.appendChild(s),e=s.dispatchEvent(e),a)for(r=0;r<a.length;r++)i=a[r],s.removeEventListener(i.type,i.attachedListener,Ql(i.optionsOrUseCapture));return t.removeChild(s),e}return t.dispatchEvent(e)},_n.prototype.focus=function(e){b(this._fragmentFiber.child,!0,Ix,e,void 0,void 0)};function Ix(e,t){return e.tag===6?!1:(e=L(e),E1(e,t))}_n.prototype.focusLast=function(e){var t=[];b(this._fragmentFiber.child,!0,Bd,t,void 0,void 0);for(var a=t.length-1;0<=a&&!Ix(t[a],e);a--);};function Bd(e,t){return t.push(e),!1}_n.prototype.blur=function(){var e=H(this._fragmentFiber);e!==null&&(e=L(e),e=qr(e).activeElement,e!==null&&b(this._fragmentFiber.child,!1,S1,e,void 0,void 0))};function S1(e,t){return e.tag===6?!1:(e=L(e),e===t||e.contains(t)?(t.blur(),!0):!1)}_n.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),b(this._fragmentFiber.child,!1,y1,e,void 0,void 0)};function y1(e,t){return e.tag===6||(e=L(e),t.observe(e)),!1}_n.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),b(this._fragmentFiber.child,!1,N1,e,void 0,void 0);for(var a=t=0;a<fa.length;a++){var s=fa[a];s.fragmentInstance===this&&s.observer===e?e.unobserve(s.instance):fa[t++]=s}fa.length=t}};function N1(e,t){return e.tag===6||(e=L(e),t.unobserve(e)),!1}var fa=[],Hd=!1;function v1(e,t,a){fa.push({fragmentInstance:e,observer:t,instance:a}),Hd||(Hd=!0,C1(function(){Hd=!1;var s=fa;fa=[];for(var r=0;r<s.length;r++){var i=s[r];i.observer.unobserve(i.instance)}}))}_n.prototype.getClientRects=function(){var e=[];return b(this._fragmentFiber.child,!1,L1,e,void 0,void 0),e};function L1(e,t){if(e.tag===6){e=e.stateNode;var a=e.ownerDocument.createRange();a.selectNodeContents(e),t.push.apply(t,a.getClientRects())}else e=L(e),t.push.apply(t,e.getClientRects());return!1}_n.prototype.getRootNode=function(e){var t=H(this._fragmentFiber);return t===null?this:L(t).getRootNode(e)},_n.prototype.compareDocumentPosition=function(e){var t=H(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];b(this._fragmentFiber.child,!1,Bd,a,void 0,void 0);var s=L(t);if(a.length===0){if(a=s,P(this._fragmentFiber)){e:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break e}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(a=t)}t=this._fragmentFiber;var r=s=a.compareDocumentPosition(e);return a===e?r=Node.DOCUMENT_POSITION_CONTAINS:s&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=G(t)[1],a===null?r=Node.DOCUMENT_POSITION_PRECEDING:(e=L(a).compareDocumentPosition(e),r=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),r|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=L(a[0]),r=L(a[a.length-1]);var i=P(this._fragmentFiber)?t.parentElement:s;if(i==null)return Node.DOCUMENT_POSITION_DISCONNECTED;s=i.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,i=i.compareDocumentPosition(r)&Node.DOCUMENT_POSITION_CONTAINED_BY;var m=t.compareDocumentPosition(e),g=r.compareDocumentPosition(e),w=m&Node.DOCUMENT_POSITION_CONTAINED_BY||g&Node.DOCUMENT_POSITION_CONTAINED_BY;return g=s&&i&&m&Node.DOCUMENT_POSITION_FOLLOWING&&g&Node.DOCUMENT_POSITION_PRECEDING,t=s&&t===e||i&&r===e||w||g?Node.DOCUMENT_POSITION_CONTAINED_BY:!s&&t===e||!i&&r===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:m,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||O1(t,this._fragmentFiber,a[0],a[a.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function O1(e,t,a,s,r){var i=Q(r);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!i)e:{for(;i!==null;){if(i.tag===7&&(i===t||i.alternate===t)){a=!0;break e}i=i.return}a=!1}return a}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(i===null)return i=r.ownerDocument,r===i||r===i.documentElement||r===i.body;e:{for(i=t,t=H(t);i!==null;){if(!(i.tag!==5&&i.tag!==3&&i.tag!==27||i!==t&&i.alternate!==t)){i=!0;break e}i=i.return}i=!1}return i}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!i)&&!(t=i===a)&&(t=V(a,i,k),t===null?t=!1:(b(t,!0,C,i,a),i=_,_=null,t=i!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!i)&&!(t=i===s)&&(t=V(s,i,k),t===null?t=!1:(b(t,!0,q,i,s),i=_,ue=_=null,t=i!==null)),t):!1}function Bx(e,t){var a=e.ownerDocument.createRange();a.selectNodeContents(e),e=a.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}_n.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(c(566));var t=[];b(this._fragmentFiber.child,!1,Bd,t,void 0,void 0);var a=e!==!1;if(t.length===0){var s=G(this._fragmentFiber);if(s=a?s[1]||s[0]||H(this._fragmentFiber):s[0]||s[1],s===null)return;if(s.tag===6){e=L(s),Bx(e,a);return}if(s=L(s),s.nodeType!==9){if(s.nodeType===11){a="host"in s?s.host:null,a!==null&&a.scrollIntoView(e);return}s.scrollIntoView(e)}}for(s=a?t.length-1:0;s!==(a?-1:t.length);){var r=t[s];r.tag===6?(r=L(r),Bx(r,a)):L(r).scrollIntoView(e),s+=a?-1:1}};function j1(e,t){return e=L(e),Hx(e,t),!1}function Hx(e,t){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(t)}function wx(e,t){var a=t._eventListeners;if(a!==null)for(var s=0;s<a.length;s++){var r=a[s];e.addEventListener(r.type,r.attachedListener,Ql(r.optionsOrUseCapture))}e.nodeType!==3&&(a=t._observers,a!==null&&a.forEach(function(i){for(var m=0,g=0;g<fa.length;g++){var w=fa[g];(w.fragmentInstance!==t||w.observer!==i||w.instance!==e)&&(fa[m++]=w)}fa.length=m,i.observe(e)}),Hx(e,t))}function I1(e,t){var a=t._eventListeners;if(a!==null)for(var s=0;s<a.length;s++){var r=a[s];e.removeEventListener(r.type,r.attachedListener,Ql(r.optionsOrUseCapture))}e.nodeType!==3&&(a=t._observers,a!==null&&a.forEach(function(i){typeof i.rootMargin=="string"?v1(t,i,e):i.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function wd(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":wd(a),D(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function B1(e,t,a,s){for(;e.nodeType===1;){var r=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[Fs])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=ea(e.nextSibling),e===null)break}return null}function H1(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=ea(e.nextSibling),e===null))return null;return e}function Ex(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=ea(e.nextSibling),e===null))return null;return e}function Ed(e){return e.data==="$?"||e.data==="$~"}function Cd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function w1(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var s=function(){t(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),e._reactRetry=s}}function ea(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Md=null;function Cx(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return ea(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Mx(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function E1(e,t){function a(){s=!0}if(e.ownerDocument.activeElement===e)return!0;var s=!1;try{e.ownerDocument.addEventListener("focus",a,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener("focus",a,!0)}return s}function C1(e){Rx(function(){Rx(function(t){return e(t)})})}function kx(e,t,a){switch(t=qr(a),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function Ux(e,t,a){for(var s in a){var r=a[s];a.hasOwnProperty(s)&&r!=null&&bt(e,t,s,null,i1,r)}a.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===Sa&&(e.onclick=null),D(e)}function kd(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);D(e)}var ta=new Map,Dx=new Set;function Qr(e){if(typeof e.getRootNode=="function"){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var $a=Re.d;Re.d={f:M1,r:k1,D:U1,C:D1,L:T1,m:G1,X:P1,S:K1,M:_1};function M1(){var e=$a.f(),t=Ri();return e||t}function k1(e){var t=je(e);t!==null&&t.tag===5&&t.type==="form"?TA(t):$a.r(e)}var $l=typeof document>"u"?null:document;function Tx(e,t,a){var s=$l;if(s&&typeof t=="string"&&t){var r=Xn(t);r='link[rel="'+e+'"][href="'+r+'"]',typeof a=="string"&&(r+='[crossorigin="'+a+'"]'),Dx.has(r)||(Dx.add(r),e={rel:e,crossOrigin:a,href:t},s.querySelector(r)===null&&(t=s.createElement("link"),fn(t,"link",e),Ve(t),s.head.appendChild(t)))}}function U1(e){$a.D(e),Tx("dns-prefetch",e,null)}function D1(e,t){$a.C(e,t),Tx("preconnect",e,t)}function T1(e,t,a){$a.L(e,t,a);var s=$l;if(s&&e&&t){var r='link[rel="preload"][as="'+Xn(t)+'"]';t==="image"&&a&&a.imageSrcSet?(r+='[imagesrcset="'+Xn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(r+='[imagesizes="'+Xn(a.imageSizes)+'"]')):r+='[href="'+Xn(e)+'"]';var i=r;switch(t){case"style":i=Wl(e);break;case"script":i=er(e)}if(!(ta.has(i)||(e=ce({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),ta.set(i,e),s.querySelector(r)!==null||t==="style"&&s.querySelector($r(i))||t==="script"&&s.querySelector(Wr(i))))){var m=s.createElement("link");fn(m,"link",e),t==="style"&&(m[is]=!0,m.onload=m.onerror=function(){cn(m)}),Ve(m),s.head.appendChild(m)}}}function G1(e,t){$a.m(e,t);var a=$l;if(a&&e){var s=t&&typeof t.as=="string"?t.as:"script",r='link[rel="modulepreload"][as="'+Xn(s)+'"][href="'+Xn(e)+'"]',i=r;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=er(e)}if(!ta.has(i)&&(e=ce({rel:"modulepreload",href:e},t),ta.set(i,e),a.querySelector(r)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Wr(i)))return}s=a.createElement("link"),fn(s,"link",e),Ve(s),a.head.appendChild(s)}}}function K1(e,t,a){$a.S(e,t,a);var s=$l;if(s&&e){var r=jt(s).hoistableStyles,i=Wl(e);t=t||"default";var m=r.get(i);if(!m){var g={loading:0,preload:null};if(m=s.querySelector($r(i)))g.loading=5;else{e=ce({rel:"stylesheet",href:e,"data-precedence":t},a),(a=ta.get(i))&&Ud(e,a);var w=m=s.createElement("link");Ve(w),fn(w,"link",e),w._p=new Promise(function(X,ae){w.onload=X,w.onerror=ae}),w.addEventListener("load",function(){g.loading|=1}),w.addEventListener("error",function(){g.loading|=2}),g.loading|=4,ji(m,t,s)}m={type:"stylesheet",instance:m,count:1,state:g},r.set(i,m)}}}function P1(e,t){$a.X(e,t);var a=$l;if(a&&e){var s=jt(a).hoistableScripts,r=er(e),i=s.get(r);i||(i=a.querySelector(Wr(r)),i||(e=ce({src:e,async:!0},t),(t=ta.get(r))&&Dd(e,t),i=a.createElement("script"),Ve(i),fn(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},s.set(r,i))}}function _1(e,t){$a.M(e,t);var a=$l;if(a&&e){var s=jt(a).hoistableScripts,r=er(e),i=s.get(r);i||(i=a.querySelector(Wr(r)),i||(e=ce({src:e,async:!0,type:"module"},t),(t=ta.get(r))&&Dd(e,t),i=a.createElement("script"),Ve(i),fn(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},s.set(r,i))}}function Gx(e,t,a,s){var r=(r=gt.current)?Qr(r):null;if(!r)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=Wl(a.href),t=jt(r).hoistableStyles,s=t.get(a),s||(s={type:"style",instance:null,count:0,state:null},t.set(a,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Wl(a.href);var i=jt(r).hoistableStyles,m=i.get(e);if(m||(r=r.ownerDocument||r,m={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,m),(i=r.querySelector($r(e)))?i._p||(m.instance=i,m.state.loading=5):(i=ta.get(e),i||(i={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ta.set(e,i)),Z1(r,e,i,m.state))),t&&s===null)throw Error(c(528,""));return m}if(t&&s!==null)throw Error(c(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(a=er(a),t=jt(r).hoistableScripts,s=t.get(a),s||(s={type:"script",instance:null,count:0,state:null},t.set(a,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function Wl(e){return'href="'+Xn(e)+'"'}function $r(e){return'link[rel="stylesheet"]['+e+"]"}function Kx(e){return ce({},e,{"data-precedence":e.precedence,precedence:null})}function Z1(e,t,a,s){if(t=e.querySelector('link[rel="preload"][as="style"]['+t+"]")){if(t[is]!==!0){s.loading=1;return}}else t=e.createElement("link"),t[is]=!0,t.onload=t.onerror=cn.bind(null,t),fn(t,"link",a),Ve(t),e.head.appendChild(t);s.preload=t,t.addEventListener("load",function(){return s.loading|=1}),t.addEventListener("error",function(){return s.loading|=2})}function er(e){return'[src="'+Xn(e)+'"]'}function Wr(e){return"script[async]"+e}function Px(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var s=e.querySelector('style[data-href~="'+Xn(a.href)+'"]');if(s)return t.instance=s,Ve(s),s;var r=ce({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),Ve(s),fn(s,"style",r),ji(s,a.precedence,e),t.instance=s;case"stylesheet":r=Wl(a.href);var i=e.querySelector($r(r));if(i)return t.state.loading|=4,t.instance=i,Ve(i),i;s=Kx(a),(r=ta.get(r))&&Ud(s,r),i=(e.ownerDocument||e).createElement("link"),Ve(i);var m=i;return m._p=new Promise(function(g,w){m.onload=g,m.onerror=w}),fn(i,"link",s),t.state.loading|=4,ji(i,a.precedence,e),t.instance=i;case"script":return i=er(a.src),(r=e.querySelector(Wr(i)))?(t.instance=r,Ve(r),r):(s=a,(r=ta.get(i))&&(s=ce({},a),Dd(s,r)),e=e.ownerDocument||e,r=e.createElement("script"),Ve(r),fn(r,"link",s),e.head.appendChild(r),t.instance=r);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(s=t.instance,t.state.loading|=4,ji(s,a.precedence,e));return t.instance}function ji(e,t,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=s.length?s[s.length-1]:null,i=r,m=0;m<s.length;m++){var g=s[m];if(g.dataset.precedence===t)i=g;else if(i!==r)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Ud(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Dd(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Ii=null;function _x(e,t,a){if(Ii===null){var s=new Map,r=Ii=new Map;r.set(a,s)}else r=Ii,s=r.get(a),s||(s=new Map,r.set(a,s));if(s.has(e))return s;for(s.set(e,null),a=a.getElementsByTagName(e),r=0;r<a.length;r++){var i=a[r];if(!(i[Fs]||i[ot]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var m=i.getAttribute(t)||"";m=e+m;var g=s.get(m);g?g.push(i):s.set(m,[i])}}return s}function Td(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function z1(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Zx(e,t){return e==="img"&&t.src!=null&&t.src!==""&&t.onLoad==null&&t.loading!=="lazy"}function zx(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Fx(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function Jx(e,t){typeof t.decode=="function"&&(e.imgCount++,t.complete||(e.imgBytes+=Fx(t),e.suspenseyImages.push(t)),e=X1.bind(e),t.decode().then(e,e))}function F1(e,t,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var r=Wl(s.href),i=t.querySelector($r(r));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=eo.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=i,Ve(i);return}i=t.ownerDocument||t,s=Kx(s),(r=ta.get(r))&&Ud(s,r),i=i.createElement("link"),Ve(i);var m=i;m._p=new Promise(function(g,w){m.onload=g,m.onerror=w}),fn(i,"link",s),a.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=eo.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Bi=0;function J1(e,t){return e.stylesheets&&e.count===0&&wi(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var s=setTimeout(function(){if(e.stylesheets&&wi(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&Bi===0&&(Bi=62500*u1());var r=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&wi(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>Bi?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(s),clearTimeout(r)}}:null}function Xx(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)wi(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function eo(){this.count--,Xx(this)}function X1(){this.imgCount--,Xx(this)}var Hi=null;function wi(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Hi=new Map,t.forEach(V1,e),Hi=null,eo.call(e))}function V1(e,t){if(!(t.state.loading&4)){var a=Hi.get(e);if(a)var s=a.get(null);else{a=new Map,Hi.set(e,a);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<r.length;i++){var m=r[i];(m.nodeName==="LINK"||m.getAttribute("media")!=="not all")&&(a.set(m.dataset.precedence,m),s=m)}s&&a.set(null,s)}r=t.instance,m=r.getAttribute("data-precedence"),i=a.get(m)||s,i===s&&a.set(null,r),a.set(m,r),this.count++,s=eo.bind(this),r.addEventListener("load",s),r.addEventListener("error",s),i?i.parentNode.insertBefore(r,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),t.state.loading|=4}}var tr={$$typeof:O,Provider:null,Consumer:null,_currentValue:Oe,_currentValue2:Oe,_threadCount:0};function Y1(e,t,a,s,r,i,m,g,w){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=de(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=de(0),this.hiddenUpdates=de(null),this.identifierPrefix=s,this.onUncaughtError=r,this.onCaughtError=i,this.onRecoverableError=m,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=w,this.transitionTypes=null,this.incompleteTransitions=new Map}function Vx(e,t,a,s,r,i,m,g,w,X,ae,be){return e=new Y1(e,t,a,m,w,X,ae,be,g),t=1,i===!0&&(t|=24),i=Ln(3,null,null,t),e.current=i,i.stateNode=e,t=Wc(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:s,isDehydrated:a,cache:t},au(i),e}function Yx(e){return e?(e=jl,e):jl}function qx(e,t,a,s,r,i){r=Yx(r),s.context===null?s.context=r:s.pendingContext=r,s=bs(t),s.payload={element:a},i=i===void 0?null:i,i!==null&&(s.callback=i),a=ps(e,s,t),a!==null&&(Bn(a,e,t),wr(a,e,t))}function Qx(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Gd(e,t){Qx(e,t),(e=e.alternate)&&Qx(e,t)}function $x(e){if(e.tag===13||e.tag===31){var t=Vs(e,67108864);t!==null&&Bn(t,e,67108864),Gd(e,67108864)}}function Wx(e){if(e.tag===13||e.tag===31){var t=Pn();t=Je(t);var a=Vs(e,t);a!==null&&Bn(a,e,t),Gd(e,t)}}var nr=!0;function q1(e,t,a,s){var r=F.T;F.T=null;var i=Re.p;try{Re.p=2,Kd(e,t,a,s)}finally{Re.p=i,F.T=r}}function Q1(e,t,a,s){var r=F.T;F.T=null;var i=Re.p;try{Re.p=8,Kd(e,t,a,s)}finally{Re.p=i,F.T=r}}function Kd(e,t,a,s){if(nr){var r=Pd(s);if(r===null)Sd(e,t,s,Ei,a),th(e,s);else if(W1(r,e,t,a,s))s.stopPropagation();else if(th(e,s),t&4&&-1<$1.indexOf(e)){for(;r!==null;){var i=je(r);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var m=vn(i.pendingLanes);if(m!==0){var g=i;for(g.pendingLanes|=2,g.entangledLanes|=2;m;){var w=1<<31-Ct(m);g.entanglements[1]|=w,m&=~w}wa(i),(ut&6)===0&&(bi=Tt()+500,Xr(0))}}break;case 31:case 13:g=Vs(i,2),g!==null&&Bn(g,i,2),Ri(),Gd(i,2)}if(i=Pd(s),i===null&&Sd(e,t,s,Ei,a),i===r)break;r=i}r!==null&&s.stopPropagation()}else Sd(e,t,s,null,a)}}function Pd(e){return e=Oc(e),_d(e)}var Ei=null;function _d(e){if(Ei=null,e=Q(e),e!==null){var t=A(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=f(t),e!==null)return e;e=null}else if(a===31){if(e=x(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Ei=e,null}function eh(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ra()){case ls:return 2;case Ps:return 8;case oa:case ka:return 32;case Ua:return 268435456;default:return 32}default:return 32}}var Zd=!1,Hs=null,ws=null,Es=null,to=new Map,no=new Map,Cs=[],$1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function th(e,t){switch(e){case"focusin":case"focusout":Hs=null;break;case"dragenter":case"dragleave":ws=null;break;case"mouseover":case"mouseout":Es=null;break;case"pointerover":case"pointerout":to.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":no.delete(t.pointerId)}}function ao(e,t,a,s,r,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:s,nativeEvent:i,targetContainers:[r]},t!==null&&(t=je(t),t!==null&&$x(t)),e):(e.eventSystemFlags|=s,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function W1(e,t,a,s,r){switch(t){case"focusin":return Hs=ao(Hs,e,t,a,s,r),!0;case"dragenter":return ws=ao(ws,e,t,a,s,r),!0;case"mouseover":return Es=ao(Es,e,t,a,s,r),!0;case"pointerover":var i=r.pointerId;return to.set(i,ao(to.get(i)||null,e,t,a,s,r)),!0;case"gotpointercapture":return i=r.pointerId,no.set(i,ao(no.get(i)||null,e,t,a,s,r)),!0}return!1}function nh(e){var t=Q(e.target);if(t!==null){var a=A(t);if(a!==null){if(t=a.tag,t===13){if(t=f(a),t!==null){e.blockedOn=t,at(e.priority,function(){Wx(a)});return}}else if(t===31){if(t=x(a),t!==null){e.blockedOn=t,at(e.priority,function(){Wx(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ci(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Pd(e.nativeEvent);if(a===null){a=e.nativeEvent;var s=new a.constructor(a.type,a);Lc=s,a.target.dispatchEvent(s),Lc=null}else return t=je(a),t!==null&&$x(t),e.blockedOn=a,!1;t.shift()}return!0}function ah(e,t,a){Ci(e)&&a.delete(t)}function e2(){Zd=!1,Hs!==null&&Ci(Hs)&&(Hs=null),ws!==null&&Ci(ws)&&(ws=null),Es!==null&&Ci(Es)&&(Es=null),to.forEach(ah),no.forEach(ah)}function Mi(e,t){e.blockedOn===t&&(e.blockedOn=null,Zd||(Zd=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,e2)))}var ki=null;function sh(e){ki!==e&&(ki=e,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){ki===e&&(ki=null);for(var t=0;t<e.length;t+=3){var a=e[t],s=e[t+1],r=e[t+2];if(typeof s!="function"){if(_d(s||a)===null)continue;break}var i=je(a);i!==null&&(e.splice(t,3),t-=3,vu(i,{pending:!0,data:r,method:a.method,action:s},s,r))}}))}function ar(e){function t(w){return Mi(w,e)}Hs!==null&&Mi(Hs,e),ws!==null&&Mi(ws,e),Es!==null&&Mi(Es,e),to.forEach(t),no.forEach(t);for(var a=0;a<Cs.length;a++){var s=Cs[a];s.blockedOn===e&&(s.blockedOn=null)}for(;0<Cs.length&&(a=Cs[0],a.blockedOn===null);)nh(a),a.blockedOn===null&&Cs.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var r=a[s],i=a[s+1],m=r[Et]||null;if(typeof i=="function")m||sh(a);else if(m){var g=null;if(i&&i.hasAttribute("formAction")){if(r=i,m=i[Et]||null)g=m.formAction;else if(_d(r)!==null)continue}else g=m.action;typeof g=="function"?a[s+1]=g:(a.splice(s,3),s-=3),sh(a)}}}function lh(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(m){return r=m})},focusReset:"manual",scroll:"manual"})}function t(){r!==null&&(r(),r=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,r=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),r!==null&&(r(),r=null)}}}function zd(e){this._internalRoot=e}Ui.prototype.render=zd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var a=t.current,s=Pn();qx(a,s,e,t,null,null)},Ui.prototype.unmount=zd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;qx(e.current,2,null,e,null,null),Ri(),t[Mn]=null}};function Ui(e){this._internalRoot=e}Ui.prototype.unstable_scheduleHydration=function(e){if(e){var t=zt();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Cs.length&&t!==0&&t<Cs[a].priority;a++);Cs.splice(a,0,e),a===0&&nh(e)}};var rh=o.version;if(rh!=="19.3.0")throw Error(c(527,rh,"19.3.0"));Re.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=v(t),e=e!==null?S(e):null,e=e===null?null:e.stateNode,e};var t2={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Di=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Di.isDisabled&&Di.supportsFiber)try{pa=Di.inject(t2),kt=Di}catch{}}return lo.createRoot=function(e,t){if(!d(e))throw Error(c(299));var a=!1,s="",r=VA,i=YA,m=qA;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onUncaughtError!==void 0&&(r=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(m=t.onRecoverableError)),t=Vx(e,1,!1,null,null,a,s,null,r,i,m,lh),e[Mn]=t.current,Rd(e),new zd(t)},lo.hydrateRoot=function(e,t,a){if(!d(e))throw Error(c(299));var s=!1,r="",i=VA,m=YA,g=qA,w=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(r=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(m=a.onCaughtError),a.onRecoverableError!==void 0&&(g=a.onRecoverableError),a.formState!==void 0&&(w=a.formState)),t=Vx(e,1,!0,t,a??null,s,r,w,i,m,g,lh),t.context=Yx(null),a=t.current,s=Pn(),s=Je(s),r=bs(s),r.callback=null,ps(a,r,s),a=s,t.current.lanes=a,oe(t,a),wa(t),e[Mn]=t.current,Rd(e),new Ui(t)},lo.version="19.3.0",lo}var hh;function m2(){if(hh)return Xd.exports;hh=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(o){console.error(o)}}return l(),Xd.exports=d2(),Xd.exports}var A2=m2();const Ae=l=>Math.round(Number(l)||0).toLocaleString("en-IN"),Hn="gobra",uc="GOBRA BRANCH-0014",es="gobra_",Sb=["cash_sheet_denom_"],yb=new Set(["kallyan_rule_version_v2","app_master_date"]),wm=new Set(["gobra_auth_users","gobra_auth_branches","gobra_auth_session","gobra_force_reload_done","gobra_floating_pos_cashbook","gobra_floating_pos_report"]);let Nb=Hn,bh=!1;const Ts=()=>Nb||Hn,cr=()=>Ts()===Hn;function ur(l){Nb=String(l||"").trim()||Hn}const Qd=l=>{if(typeof l!="string"||!(l.startsWith(es)||yb.has(l)||Sb.some(c=>l.startsWith(c)))||l.startsWith(es)&&wm.has(l)||Ts()===Hn)return l;const u=l.startsWith(es)?l.slice(es.length):l;return`${es}${Ts()}__${u}`};function f2(l){try{const o=l.getItem("gobra_auth_branches"),u=o?JSON.parse(o):[];return Array.isArray(u)?u.map(c=>String((c==null?void 0:c.id)||"")).filter(Boolean):[]}catch{return[]}}function x2(l,o){if(!o.startsWith(es))return!1;const u=o.slice(es.length),c=u.indexOf("__");if(c<=0)return!1;const d=u.slice(0,c);return d===Ts()?!1:f2(l).includes(d)}function h2(l,o){if(x2(l,o))return!1;if(wm.has(o))return!0;const u=Ts();return u===Hn?!0:yb.has(o)||Sb.some(c=>o.startsWith(c))?!1:o.startsWith(es)?o.slice(es.length).startsWith(`${u}__`):!0}function $d(l){const o=[];for(let u=0;u<l.length;u++){const c=l.key(u);c&&h2(l,c)&&o.push(c)}return o}function ph(l){if(l&&ur(l),!bh)try{const o=window.localStorage;if(!o)return;const u=new Proxy(o,{get(c,d){switch(d){case"getItem":return A=>c.getItem(Qd(A));case"setItem":return(A,f)=>c.setItem(Qd(A),String(f));case"removeItem":return A=>c.removeItem(Qd(A));case"key":{const A=$d(c);return f=>A[f]??null}case"length":return $d(c).length;case"clear":return()=>{$d(c).filter(A=>!wm.has(A)).forEach(A=>c.removeItem(A))};case"__branchScoped":return!0;default:{const A=c[d];return typeof A=="function"?A.bind(c):A}}},has(c,d){return d in c},set(c,d,A){return c[d]=A,!0}});Object.defineProperty(window,"localStorage",{value:u,configurable:!0,writable:!0});try{Object.defineProperty(globalThis,"localStorage",{value:u,configurable:!0,writable:!0})}catch{}bh=!0}catch(o){console.error("[branch] শাখা-স্কোপ বসানো যায়নি",o)}}function b2(l){ur(l);try{window.location.reload()}catch{}}const dm=["jagoron","agrossor","buniyed","sufolon","mfce","shopan krishi","shopan manufacture","shopan service","shopan value chain"],gh=["sakib","mintu","alamgir","monir"],Wi=(l,o)=>{const u=o.indexOf(String(l||"").trim().toLowerCase());return u===-1?Number.MAX_SAFE_INTEGER:u},vb=(l,o)=>{const u=Wi(l,dm)-Wi(o,dm);return u!==0?u:String(l).localeCompare(String(o))},p2=(l,o)=>{let u=[];try{u=ss().map(f=>String(f.name||"").trim().toLowerCase())}catch{}const c=u.indexOf(String(l||"").trim().toLowerCase()),d=u.indexOf(String(o||"").trim().toLowerCase());if(c!==-1||d!==-1){const f=c===-1?Number.MAX_SAFE_INTEGER:c,x=d===-1?Number.MAX_SAFE_INTEGER:d;return f!==x?f-x:String(l).localeCompare(String(o))}const A=Wi(l,gh)-Wi(o,gh);return A!==0?A:String(l).localeCompare(String(o))},Rh="staff_sort_mode",Em=(l,o,u)=>u==="name-asc"?String(l).localeCompare(String(o)):u==="name-desc"?String(o).localeCompare(String(l)):p2(l,o),g2=(l,o,u)=>{const c=new Set(l.map(A=>A.trim().toLowerCase())),d=o.filter(A=>A&&!c.has(A.trim().toLowerCase())).sort(u);return[...l,...d]},sn={percent:1,fixed:15,categoryOverrides:{jagoron:{percent:1,fixed:15},agrossor:{percent:1,fixed:15},buniyed:{percent:.5,fixed:15},sufolon:{percent:1,fixed:15},mfce:{percent:1,fixed:15}}},Sh={receive:["bank withdraw","fund receive","monir","sakib","mintu","alamgir","others income"],payment:["jagoron","agrossor","buniyed","sufolon","mfce","bank deposit","bank withdraw","others expense","fund payment","savings return"],disburse:["jagoron","agrossor","buniyed","sufolon","mfce"],expense:["bank deposit","bank withdraw","others expense","fund payment","savings return"],rebate:["monir","sakib","mintu","alamgir","customer rebate","others"]},R2=["sakib","mintu","alamgir","monir"];function yh(){if(cr())return Sh;const l={};for(const[o,u]of Object.entries(Sh))l[o]=u.filter(c=>!R2.includes(c.toLowerCase()));return l}const Nh=["1 year","1.5 year","2 year"],S2={"1 year":12,"1.5 year":18,"2 year":24},oo=[{id:1,subCategory:"1 year",installments:12,mode:"all",categories:[]},{id:2,subCategory:"1.5 year",installments:18,mode:"all_except",categories:["buniyed","sufolon"]},{id:3,subCategory:"2 year",installments:24,mode:"only",categories:["agrossor"]}],Lb=(l,o,u)=>{const c=l.trim().toLowerCase(),d=o.trim().toLowerCase(),A=u.find(x=>x.subCategory.trim().toLowerCase()===c);if(!A)return!0;const f=(A.categories||[]).map(x=>x.trim().toLowerCase());return A.mode==="all"?!0:A.mode==="all_except"?!f.includes(d):A.mode==="only"?f.includes(d):!0},y2=l=>(l||[]).map(u=>String(u??"").trim().toLowerCase()).filter(Boolean).filter((u,c,d)=>d.indexOf(u)===c).sort(vb),ec=(l,o,u)=>{const c=l.trim().toLowerCase(),d=Array.from(new Set(o.map(f=>f.subCategory)));if(c.includes("fund payment")||c.includes("fund receive")){const f=y2(u);return f.length>0?f:g2(dm,d,vb)}return d.filter(f=>Lb(f,l,o))},N2=(l,o,u)=>{const c=l.trim().toLowerCase(),d=u?u.trim().toLowerCase():"";if(o&&o.length>0){if(d){const f=o.find(x=>x.subCategory.trim().toLowerCase()!==c?!1:Lb(x.subCategory,d,o));if(f&&f.installments)return f.installments}const A=o.find(f=>f.subCategory.trim().toLowerCase()===c);if(A&&A.installments)return A.installments}return S2[c]||12},vh=(l,o,u,c)=>{const d=o.trim().toLowerCase(),A=u.trim().toLowerCase(),f=c.find(x=>x.category===d&&x.subCategory===A);return!f||!l?0:Math.round(l*Number(f.ratePer100))/100},Ob=(l,o=sn)=>{if(l&&(o!=null&&o.categoryOverrides)){const u=l.trim().toLowerCase();if(o.categoryOverrides[u])return o.categoryOverrides[u]}return{percent:typeof(o==null?void 0:o.percent)=="number"?o.percent:sn.percent,fixed:typeof(o==null?void 0:o.fixed)=="number"?o.fixed:sn.fixed}},dr=(l,o,u=sn)=>{if(!l||l<=0)return 0;const c=Ob(o,u);return Math.round(l*c.percent/100)+c.fixed},mt=l=>(l??"").split(" ").filter(Boolean).map(o=>o[0].toUpperCase()+o.slice(1).toLowerCase()).join(" ");[...Array.from({length:46},(l,o)=>{const u=o+1,c=u<=2?"0.00":(u*2.65).toFixed(2);return{id:100+u,product:"Jagoron",duration:"Week",kisti:u,helper:`Jagoron|Week|${u}`,rate:c}}),...Array.from({length:12},(l,o)=>{const u=o+1,c=(u*10.2).toFixed(2);return{id:200+u,product:"Jagoron",duration:"Month",kisti:u,helper:`Jagoron|Month|${u}`,rate:c}}),...Array.from({length:18},(l,o)=>{const u=o+1,c=(u*10.7).toFixed(2);return{id:300+u,product:"Jagoron",duration:"1.5 Year",kisti:u,helper:`Jagoron|1.5 Year|${u}`,rate:c}}),...Array.from({length:24},(l,o)=>{const u=o+1,c=(u*11.2).toFixed(2);return{id:350+u,product:"Jagoron",duration:"2 Year",kisti:u,helper:`Jagoron|2 Year|${u}`,rate:c}}),...Array.from({length:46},(l,o)=>{const u=o+1,c=u<=2?"0.00":(u*2.66).toFixed(2);return{id:400+u,product:"Agrossor",duration:"Week",kisti:u,helper:`Agrossor|Week|${u}`,rate:c}}),...Array.from({length:12},(l,o)=>{const u=o+1,c=(u*10.5).toFixed(2);return{id:450+u,product:"Agrossor",duration:"Month",kisti:u,helper:`Agrossor|Month|${u}`,rate:c}}),...Array.from({length:18},(l,o)=>{const u=o+1,c=(u*11).toFixed(2);return{id:470+u,product:"Agrossor",duration:"1.5 Year",kisti:u,helper:`Agrossor|1.5 Year|${u}`,rate:c}}),...Array.from({length:24},(l,o)=>{const u=o+1,c=(u*11.5).toFixed(2);return{id:490+u,product:"Agrossor",duration:"2 Year",kisti:u,helper:`Agrossor|2 Year|${u}`,rate:c}}),...Array.from({length:46},(l,o)=>{const u=o+1,c=u<=2?"0.00":(u*2.05).toFixed(2);return{id:600+u,product:"Buniyed",duration:"Week",kisti:u,helper:`Buniyed|Week|${u}`,rate:c}}),...Array.from({length:12},(l,o)=>{const u=o+1,c=(u*8).toFixed(2);return{id:650+u,product:"Buniyed",duration:"Month",kisti:u,helper:`Buniyed|Month|${u}`,rate:c}}),...Array.from({length:18},(l,o)=>{const u=o+1,c=(u*8.5).toFixed(2);return{id:670+u,product:"Buniyed",duration:"1.5 Year",kisti:u,helper:`Buniyed|1.5 Year|${u}`,rate:c}}),...Array.from({length:46},(l,o)=>{const u=o+1,c=u<=2?"0.00":(u*2.2).toFixed(2);return{id:700+u,product:"Sufolon",duration:"Week",kisti:u,helper:`Sufolon|Week|${u}`,rate:c}}),...Array.from({length:12},(l,o)=>{const u=o+1,c=(u*8.5).toFixed(2);return{id:750+u,product:"Sufolon",duration:"Month",kisti:u,helper:`Sufolon|Month|${u}`,rate:c}}),...Array.from({length:18},(l,o)=>{const u=o+1,c=(u*9).toFixed(2);return{id:770+u,product:"Sufolon",duration:"1.5 Year",kisti:u,helper:`Sufolon|1.5 Year|${u}`,rate:c}}),...Array.from({length:46},(l,o)=>{const u=o+1,c=u<=2?"0.00":(u*2.5).toFixed(2);return{id:800+u,product:"MFCE",duration:"Week",kisti:u,helper:`MFCE|Week|${u}`,rate:c}}),...Array.from({length:12},(l,o)=>{const u=o+1,c=(u*9.8).toFixed(2);return{id:850+u,product:"MFCE",duration:"Month",kisti:u,helper:`MFCE|Month|${u}`,rate:c}}),...Array.from({length:18},(l,o)=>{const u=o+1,c=(u*10.2).toFixed(2);return{id:870+u,product:"MFCE",duration:"1.5 Year",kisti:u,helper:`MFCE|1.5 Year|${u}`,rate:c}}),...Array.from({length:24},(l,o)=>{const u=o+1,c=(u*10.8).toFixed(2);return{id:890+u,product:"MFCE",duration:"2 Year",kisti:u,helper:`MFCE|2 Year|${u}`,rate:c}})];const v2="/.netlify/functions/neon-api",Cm="gobra_server_token",Mm="gobra_server_user";function tc(){try{return localStorage.getItem(Cm)||""}catch{return""}}function ml(){try{const l=localStorage.getItem(Mm);return l?JSON.parse(l):null}catch{return null}}function dc(l,o){try{localStorage.setItem(Cm,l),localStorage.setItem(Mm,JSON.stringify(o))}catch{}}function jb(){try{localStorage.removeItem(Cm),localStorage.removeItem(Mm)}catch{}}const Ib="gobra_admin_gate_token";function mm(){try{return sessionStorage.getItem(Ib)||""}catch{return""}}function L2(l){try{sessionStorage.setItem(Ib,l)}catch{}}const mr=()=>mm();async function aa(l,o={},u=""){const c=await fetch(v2,{method:"POST",headers:{"content-type":"application/json",...u||tc()?{authorization:`Bearer ${u||tc()}`}:{}},body:JSON.stringify({action:l,...o})});if(c.status===404||c.status===405)return{ok:!1,error:"server error"};let d=null;try{d=await c.json()}catch{if(c.status===404||c.status===405)return{ok:!1,error:"server error"};d={ok:!1,error:`HTTP ${c.status}`}}return d&&d.error==="usage_exceeded"&&(d.error="⚠️ পুরনো/আর্কাইভ ঠিকানায় আছেন — সে সার্ভার বন্ধ। ➡️ নতুন লিংক খুলুন: cash-gobra-bkf.netlify.app"),d}async function O2(l,o){const u=await aa("login",{mobile:l,password:o});return u.ok&&u.token&&dc(u.token,u.user),u}async function j2(l){const o=await aa("register",{name:l.name,mobile:l.mobile,password:l.password,branchId:l.branchId});return o!=null&&o.ok&&o.token&&o.user&&dc(o.token,o.user),o}async function I2(l){const o=await aa("google",{credential:l});return o.ok&&o.token&&dc(o.token,o.user),o}async function B2(){const l=await aa("meet");return l.ok&&l.user&&dc(tc(),l.user),l.error==="unauthorized"&&jb(),l}async function Ti(){const l=await aa("pending-list",{},mr());return{ok:!!l.ok,pending:Array.isArray(l.pending)?l.pending:[]}}async function H2(l,o="gobra"){return aa("approve",{userId:l,branchId:o},mr())}async function w2(l){return aa("reject",{userId:l},mr())}async function E2(){const l=await aa("branch-list",{},mr());return{ok:!!l.ok,branches:Array.isArray(l.branches)?l.branches:[]}}async function C2(){const l=await aa("user-list",{},mr());return{ok:!!l.ok,users:Array.isArray(l.users)?l.users:[]}}async function M2(l){return aa("user-delete",{userId:l},mr())}async function k2(l){const o=await aa("gate",{password:l});return o.ok&&o.gateToken&&L2(o.gateToken),{ok:!!o.ok,error:o.error,pendingCount:o.pendingCount}}async function U2(l,o){return aa("gate-pass-change",{oldPass:l,newPass:o})}let Wd=null;function D2(){return Wd||(Wd=new Promise((l,o)=>{if(document.querySelector('script[src*="gsi/client"]'))return l();const c=document.createElement("script");c.src="https://accounts.google.com/gsi/client",c.async=!0,c.defer=!0,c.onload=()=>l(),c.onerror=()=>o(new Error("Google script লোড হয়নি")),document.head.appendChild(c)})),Wd}function T2(l,o){if(typeof l=="string")return{text:l,params:o[0]||[]};const u=l,c=o;let d="";const A=[];for(let f=0;f<u.length;f++)if(d+=u[f],f<c.length){const x=c[f];x&&x.__neonRaw?d+=x.__neonRaw:(A.push(x),d+=`$${A.length}`)}return{text:d,params:A}}const Am="__no_server__";let fm=!1;function Lh(){return fm}async function Bb(l,o){const u=tc();if(!u)throw new Error("সার্ভার-লগইন নেই — আগে সাইন ইন করুন");if(fm)throw new Error(Am);const c=await fetch("/.netlify/functions/neon-api",{method:"POST",headers:{"content-type":"application/json",authorization:`Bearer ${u}`},body:JSON.stringify({action:"sql",queries:l,transaction:o})});if(c.status===404||c.status===405)throw fm=!0,new Error(Am);let d=null;try{d=await c.json()}catch{d={ok:!1,error:`HTTP ${c.status}`}}if(!(d!=null&&d.ok))throw new Error((d==null?void 0:d.error)||`HTTP ${c.status}`);return d.results}class Oh{constructor(o){this.__q=o}then(o,u){return Bb([this.__q],!1).then(c=>c[0]).then(o,u)}catch(o){return this.then(void 0,o)}finally(o){return this.then().finally(o||void 0)}}function G2(){const l=(o,...u)=>new Oh(T2(o,u));return l.query=(o,u=[])=>new Oh({text:o,params:u}),l.unsafe=o=>({__neonRaw:o}),l.transaction=o=>{const u=o.map(c=>(c==null?void 0:c.__q)||(typeof c=="string"?{text:c,params:[]}:null)).filter(Boolean);return u.length?Bb(u,!0):Promise.resolve([])},l}const _e=G2(),xl=()=>{const l=String(Ts()||Hn).trim();return!l||l===Hn?"public":"br_"+l.toLowerCase().replace(/[^a-z0-9_]/g,"_").slice(0,48)},km=l=>`"${xl()}"."${l}"`,et=l=>_e.unsafe(km(l)),Hb="gobra_neon_sync_state";function or(){try{const l=localStorage.getItem(Hb);if(l)return JSON.parse(l)}catch{}return{connected:!0,isSyncing:!1,lastSyncTime:null,lastError:null,pendingCount:0}}function lr(l){const u={...or(),...l};try{localStorage.setItem(Hb,JSON.stringify(u)),window.dispatchEvent(new CustomEvent("neon-sync-status-changed",{detail:u}))}catch{}}async function K2(){return(await _e`
    SELECT id, type, category, sub_category, amount, service_charge, description, denomination, other_amount, tx_date
    FROM ${et("transactions")}
    ORDER BY id DESC
  `).map(o=>({id:Number(o.id),type:o.type,category:o.category,subCategory:o.sub_category||"",amount:String(o.amount??"0"),serviceCharge:o.service_charge!=null?String(o.service_charge):void 0,description:o.description||"",denomination:o.denomination||void 0,otherAmount:o.other_amount!=null?String(o.other_amount):void 0,txDate:o.tx_date}))}async function wb(l){await _e`
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
  `}async function Eb(l){const o=Number(l);!o||isNaN(o)||await _e`DELETE FROM ${et("transactions")} WHERE id = ${o}`}async function P2(){return(await _e`
    SELECT id, staff_name, report_date, loan, rebate, savings, dps, passbook, admission, savings_adjust, nogod_return, created_at
    FROM ${et("staff_reports")}
    ORDER BY id DESC
  `).map(o=>({id:Number(o.id),reportDate:o.report_date,staffName:o.staff_name,loan:String(o.loan??"0"),rebate:String(o.rebate??"0"),savings:String(o.savings??"0"),dps:String(o.dps??"0"),admission:String(o.admission??"0"),passbook:String(o.passbook??"0"),savingsAdjust:String(o.savings_adjust??"0"),nogodReturn:String(o.nogod_return??"0"),createdAt:o.created_at?new Date(o.created_at).toISOString():void 0}))}async function Cb(l){await _e`
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
  `}async function Um(l){const o=Number(l);!o||isNaN(o)||await _e`DELETE FROM ${et("staff_reports")} WHERE id = ${o}`}async function _2(){return(await _e`SELECT id, type, name, sort_order FROM ${et("categories")} ORDER BY sort_order ASC NULLS LAST, id ASC`).map(o=>({id:Number(o.id),type:o.type,name:o.name,...o.sort_order!=null?{sortOrder:Number(o.sort_order)}:{}}))}async function Z2(l){await _e`
    INSERT INTO ${et("categories")} AS c (id, type, name, sort_order)
    VALUES (${l.id}, ${l.type}, ${l.name}, ${l.sortOrder??null})
    ON CONFLICT (id) DO UPDATE SET
      type = EXCLUDED.type,
      name = EXCLUDED.name,
      sort_order = COALESCE(EXCLUDED.sort_order, c.sort_order);
  `}async function z2(l,o){if(!o.length)return;const u=o.map((c,d)=>_e`UPDATE ${et("categories")} SET sort_order = ${d+1} WHERE id = ${c} AND type = ${l}`);await _e.transaction(u)}async function F2(l){await _e`DELETE FROM ${et("categories")} WHERE id = ${l}`}async function J2(){return(await _e`SELECT id, category, sub_category, rate_per_100 FROM ${et("sc_rates")} ORDER BY id ASC`).map(o=>({id:Number(o.id),category:o.category,subCategory:o.sub_category,ratePer100:String(o.rate_per_100)}))}async function X2(l){await _e`
    INSERT INTO ${et("sc_rates")} (id, category, sub_category, rate_per_100)
    VALUES (${l.id}, ${l.category}, ${l.subCategory}, ${l.ratePer100})
    ON CONFLICT (id) DO UPDATE SET
      category = EXCLUDED.category,
      sub_category = EXCLUDED.sub_category,
      rate_per_100 = EXCLUDED.rate_per_100;
  `}async function V2(l){await _e`DELETE FROM ${et("sc_rates")} WHERE id = ${l}`}async function Y2(){return(await _e`SELECT id, sub_category, installments, mode, categories FROM ${et("subcat_rules")} ORDER BY id ASC`).map(o=>({id:Number(o.id),subCategory:o.sub_category,installments:Number(o.installments)||45,mode:o.mode||"all",categories:Array.isArray(o.categories)?o.categories:[]}))}async function q2(l){const o=l.id||Date.now();await _e`
    INSERT INTO ${et("subcat_rules")} (id, sub_category, installments, mode, categories)
    VALUES (${o}, ${l.subCategory}, ${l.installments}, ${l.mode}, ${JSON.stringify(l.categories||[])})
    ON CONFLICT (id) DO UPDATE SET
      sub_category = EXCLUDED.sub_category,
      installments = EXCLUDED.installments,
      mode = EXCLUDED.mode,
      categories = EXCLUDED.categories;
  `}async function Q2(l){await _e`DELETE FROM ${et("subcat_rules")} WHERE id = ${l}`}async function $2(){const l=await _e`SELECT rule_data FROM ${et("kallyan_rule")} WHERE id = 'default' LIMIT 1`;return l.length>0&&l[0].rule_data?l[0].rule_data:null}async function W2(l){await _e`
    INSERT INTO ${et("kallyan_rule")} (id, rule_data, updated_at)
    VALUES ('default', ${JSON.stringify(l)}, NOW())
    ON CONFLICT (id) DO UPDATE SET
      rule_data = EXCLUDED.rule_data,
      updated_at = NOW();
  `}async function eR(){return(await _e`
    SELECT id, product, duration, kisti, rate
    FROM ${et("rebate_rates")}
    ORDER BY product ASC, duration ASC, kisti ASC
  `).map(o=>({id:Number(o.id),product:o.product,duration:o.duration,kisti:Number(o.kisti),helper:`${o.product}|${o.duration}|${o.kisti}`,rate:String(o.rate??"0")}))}async function Dm(){try{await _e`
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
    `}catch(l){console.warn("ensureDayClosuresTable warning:",l)}}async function tR(){try{return await Dm(),(await _e`
      SELECT id, close_date, opening_cash, opening_bank, closing_cash, closing_bank,
             total_receive, total_payment, denomination, status, closed_at, closed_by, notes
      FROM ${et("day_closures")}
      ORDER BY close_date DESC
    `).map(o=>({id:Number(o.id),closeDate:o.close_date,openingCash:Number(o.opening_cash)||0,openingBank:Number(o.opening_bank)||0,closingCash:Number(o.closing_cash)||0,closingBank:Number(o.closing_bank)||0,totalReceive:Number(o.total_receive)||0,totalPayment:Number(o.total_payment)||0,denomination:o.denomination||null,status:"closed",closedAt:o.closed_at?new Date(o.closed_at).toISOString():new Date().toISOString(),closedBy:o.closed_by||"Cashier",notes:o.notes||""}))}catch(l){return console.warn("fetchDayClosuresFromNeon error:",l),[]}}async function Mb(l){try{await Dm(),await _e`
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
    `}catch(o){console.warn("upsertDayClosureInNeon error:",o)}}async function nR(l){try{await Dm(),await _e`DELETE FROM ${et("day_closures")} WHERE close_date = ${l}`}catch(o){console.warn("deleteDayClosureInNeon error:",o)}}async function aR(){try{await _e`
      CREATE TABLE IF NOT EXISTS ${et("app_settings")} (
        key TEXT PRIMARY KEY,
        value TEXT NOT NULL,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
      );
    `}catch(l){console.warn("ensureAppSettingsTable failed:",l)}}async function kb(){try{await _e`
      CREATE TABLE IF NOT EXISTS ${et("day_opens")} (
        id SERIAL PRIMARY KEY,
        open_date VARCHAR(20) UNIQUE NOT NULL,
        prev_close_date VARCHAR(20),
        opening_cash NUMERIC DEFAULT 0,
        opening_bank NUMERIC DEFAULT 0,
        opened_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        opened_by VARCHAR(100) DEFAULT 'Cashier'
      );
    `}catch(l){console.warn("ensureDayOpensTable warning:",l)}}async function sR(){try{return await kb(),(await _e`
      SELECT id, open_date, prev_close_date, opening_cash, opening_bank, opened_at, opened_by
      FROM ${et("day_opens")}
      ORDER BY open_date DESC
    `).map(o=>({id:Number(o.id),openDate:o.open_date,prevCloseDate:o.prev_close_date||null,openingCash:Number(o.opening_cash)||0,openingBank:Number(o.opening_bank)||0,openedAt:o.opened_at?new Date(o.opened_at).toISOString():new Date().toISOString(),openedBy:o.opened_by||"Cashier"}))}catch(l){return console.warn("fetchDayOpensFromNeon error:",l),[]}}async function Ub(l){try{await kb(),await _e`
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
    `}catch(o){console.warn("upsertDayOpenInNeon error:",o)}}async function Yi(l){try{const o=await _e`
      SELECT value FROM ${et("app_settings")} WHERE key = ${l} LIMIT 1
    `;if(o.length>0&&o[0].value)return String(o[0].value)}catch(o){console.warn(`fetchAppSettingFromNeon(${l}) error:`,o)}return null}async function Tm(l,o){try{await aR(),await _e`
      INSERT INTO ${et("app_settings")} (key, value, updated_at)
      VALUES (${l}, ${o}, NOW())
      ON CONFLICT (key) DO UPDATE SET
        value = EXCLUDED.value,
        updated_at = NOW();
    `}catch(u){console.warn(`upsertAppSettingInNeon(${l}) error:`,u)}}const lR=["transactions","staff_reports","categories","sc_rates","subcat_rules","kallyan_rule","rebate_rates","day_closures","day_opens","app_settings","site_content"],jh="gobra_neon_schema_ready_v6",rR=l=>[`CREATE TABLE IF NOT EXISTS "${l}".check_entries (
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
  )`,`ALTER TABLE "${l}".check_entries ADD COLUMN IF NOT EXISTS returned BOOLEAN DEFAULT FALSE`,`ALTER TABLE "${l}".check_entries ADD COLUMN IF NOT EXISTS extra_banks TEXT`,`ALTER TABLE "${l}".check_entries ADD COLUMN IF NOT EXISTS reissued_to TEXT`,`ALTER TABLE "${l}".check_entries ADD COLUMN IF NOT EXISTS reissued_from TEXT`,`ALTER TABLE "${l}".check_entries ADD COLUMN IF NOT EXISTS account_no TEXT`,`ALTER TABLE "${l}".check_entries ADD COLUMN IF NOT EXISTS account_type TEXT`,`CREATE INDEX IF NOT EXISTS check_entries_date_idx ON "${l}".check_entries (check_date)`,`CREATE INDEX IF NOT EXISTS check_entries_member_idx ON "${l}".check_entries (member_code)`],oR=l=>[`ALTER TABLE "${l}".categories ADD COLUMN IF NOT EXISTS sort_order INTEGER`],iR=l=>[`CREATE TABLE IF NOT EXISTS "${l}".members (
    member_code TEXT PRIMARY KEY,
    member_name TEXT,
    centre_code TEXT,
    centre_name TEXT,
    bank_name TEXT,
    check_no TEXT,
    source TEXT DEFAULT 'db',
    updated_at TIMESTAMPTZ DEFAULT NOW()
  )`,`CREATE INDEX IF NOT EXISTS members_centre_idx ON "${l}".members (centre_code)`];let Gi=null;async function ba(l=!1){const o=xl();try{if(!l&&localStorage.getItem(jh)===o)return}catch{}return Gi||(Gi=(async()=>{const u=[];if(o!=="public"){u.push(`CREATE SCHEMA IF NOT EXISTS "${o}"`);for(const c of lR)u.push(`CREATE TABLE IF NOT EXISTS "${o}"."${c}" (LIKE "public"."${c}" INCLUDING ALL)`);for(const c of["sc_rates","subcat_rules","kallyan_rule","rebate_rates","site_content"])u.push(`INSERT INTO "${o}"."${c}" SELECT * FROM "public"."${c}" WHERE NOT EXISTS (SELECT 1 FROM "${o}"."${c}")`);u.push(`INSERT INTO "${o}"."categories" SELECT * FROM "public"."categories" c
           WHERE NOT EXISTS (SELECT 1 FROM "${o}"."categories")
             AND (c.type <> 'receive' OR lower(c.name) NOT IN (SELECT lower(staff_name) FROM "public"."staff_reports"))`),u.push(`INSERT INTO "${o}"."app_settings" SELECT * FROM "public"."app_settings"
           WHERE key NOT IN ('entertainment_entries', 'entertainment_deleted_ids')
             AND NOT EXISTS (SELECT 1 FROM "${o}"."app_settings")`)}u.push(...rR(o),...iR(o),...oR(o)),await _e.transaction(u.map(c=>_e.query(c)));try{localStorage.setItem(jh,o)}catch{}})().finally(()=>{Gi=null})),Gi}const cR=l=>{if(l)try{const o=JSON.parse(String(l));if(!Array.isArray(o))return;const u=o.map(c=>({bankName:String((c==null?void 0:c.bankName)||""),checkNo:String((c==null?void 0:c.checkNo)||""),micr:(c==null?void 0:c.micr)===!0,accountNo:String((c==null?void 0:c.accountNo)||""),accountType:String((c==null?void 0:c.accountType)||""),bankStatement:(c==null?void 0:c.bankStatement)===!0})).filter(c=>c.bankName||c.checkNo);return u.length>0?u:void 0}catch{return}},Ih=l=>{if(l)try{const o=JSON.parse(String(l));if(!o||typeof o!="object"||!Number.isFinite(Number(o==null?void 0:o.id)))return;const u={id:Number(o.id)};return o.date!=null&&(u.date=String(o.date)),o.checkNo!=null&&(u.checkNo=String(o.checkNo)),o.checkDate!=null&&(u.checkDate=String(o.checkDate)),u}catch{return}};async function uR(){try{return await ba(),(await _e`
      SELECT id, check_date, member_code, member_name, centre_code, centre_name,
             bank_name, check_no, disbursse, project, micr, found_in_db, returned, extra_banks,
             reissued_to, reissued_from, account_no, account_type, created_at
      FROM ${et("check_entries")}
      ORDER BY check_date DESC, id DESC
    `).map(o=>({id:Number(o.id),checkDate:o.check_date,memberCode:o.member_code||"",memberName:o.member_name||"",centreCode:o.centre_code||"",centreName:o.centre_name||"",bankName:o.bank_name||"",checkNo:o.check_no||"",disbursse:o.disbursse||"",project:o.project||"",micr:o.micr===!0,foundInDb:o.found_in_db===!0,returned:o.returned===!0,extraBanks:cR(o.extra_banks),reissuedTo:Ih(o.reissued_to),reissuedFrom:Ih(o.reissued_from),accountNo:o.account_no||"",accountType:o.account_type||"",createdAt:o.created_at?new Date(o.created_at).toISOString():void 0}))}catch(l){return console.warn("fetchCheckEntriesFromNeon error:",l),[]}}async function Db(l){const o=Number(l==null?void 0:l.id);!o||isNaN(o)||(await ba(),await _e`
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
  `)}async function dR(l){const o=Number(l);if(!(!o||isNaN(o)))try{await ba(),await _e`DELETE FROM ${et("check_entries")} WHERE id = ${o}`}catch(u){console.warn("deleteCheckEntryFromNeon error:",u)}}async function mR(){try{return await ba(),(await _e`
      SELECT member_code, member_name, centre_code, centre_name, bank_name, check_no, source, updated_at
      FROM ${et("members")}
      ORDER BY member_code ASC
    `).map(o=>({memberCode:String(o.member_code||""),memberName:o.member_name||"",centreCode:o.centre_code||"",centreName:o.centre_name||"",bankName:o.bank_name||void 0,checkNo:o.check_no||void 0,source:o.source==="auto"?"auto":"db",updatedAt:o.updated_at?new Date(o.updated_at).toISOString():void 0}))}catch(l){return console.warn("fetchMembersFromNeon error:",l),[]}}async function AR(){try{await ba();const l=await _e`
      SELECT COUNT(*)::int AS c, COALESCE(MAX(updated_at)::text, '') AS m
      FROM ${et("members")}
    `,o=(l==null?void 0:l[0])||{};return{count:Number(o.c||0),maxUpdated:String(o.m||""),ok:!0}}catch(l){return console.warn("fetchMembersStampFromNeon error:",l),{count:-1,maxUpdated:"",ok:!1}}}async function nc(l,o=400){const u=(Array.isArray(l)?l:[]).filter(d=>d&&String(d.memberCode||"").trim());if(u.length===0)return 0;await ba();let c=0;for(let d=0;d<u.length;d+=o){const A=u.slice(d,d+o),f=[],x=[];A.forEach((h,v)=>{const S=v*7;f.push(`($${S+1},$${S+2},$${S+3},$${S+4},$${S+5},$${S+6},$${S+7})`),x.push(String(h.memberCode).trim(),h.memberName||"",h.centreCode||"",h.centreName||"",h.bankName||"",h.checkNo||"",h.source==="auto"?"auto":"db")}),await _e.query(`INSERT INTO ${km("members")}
         (member_code, member_name, centre_code, centre_name, bank_name, check_no, source)
       VALUES ${f.join(",")}
       ON CONFLICT (member_code) DO UPDATE SET
         member_name = EXCLUDED.member_name,
         centre_code = EXCLUDED.centre_code,
         centre_name = EXCLUDED.centre_name,
         bank_name = EXCLUDED.bank_name,
         check_no = EXCLUDED.check_no,
         source = EXCLUDED.source,
         updated_at = NOW()`,x),c+=A.length}return c}async function fR(l){const o=String(l||"").trim();if(o)try{await ba(),await _e`DELETE FROM ${et("members")} WHERE member_code = ${o}`}catch(u){console.warn("deleteMemberFromNeon error:",u)}}async function xR(){try{await ba(),await _e`DELETE FROM ${et("members")}`}catch(l){console.warn("clearMembersInNeon error:",l)}}async function hR(){var u;const l=xl(),o={};try{await ba();const c=["transactions","staff_reports","categories","day_opens","day_closures","rebate_rates","check_entries","members"];for(const d of c)try{const A=await _e.query(`SELECT count(*)::int AS n FROM ${km(d)}`);o[d]=Number(((u=A==null?void 0:A[0])==null?void 0:u.n)||0)}catch{o[d]=-1}}catch(c){console.warn("fetchNeonStats error:",c)}return{schema:l,rows:o}}const em="2026-10-05-4772",bR=`memberCode,memberName,centreCode,centreName
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
5549,Mafuza,246,SOLPUR (FEMALE)`,pR="gobra_member_cloud_dirty",Gm=()=>{try{localStorage.setItem(pR,"1"),ct({type:"member_dirty",payload:null})}catch{}},Tb="gobra_member_database",tm="gobra_member_db_seed",Ue=l=>String(l??"").trim().replace(/\s+/g,"").toUpperCase(),ho=l=>String(l??"").trim();function zn(){try{const l=localStorage.getItem(Tb),o=l?JSON.parse(l):[];return Array.isArray(o)?o:[]}catch{return[]}}function Ar(l){try{localStorage.setItem(Tb,JSON.stringify(l))}catch{}window.dispatchEvent(new Event("member-db-changed"))}function gR(l){const o=zn(),u=Ue(l.memberCode),c={...l,memberCode:ho(l.memberCode),updatedAt:new Date().toISOString()},d=o.findIndex(A=>Ue(A.memberCode)===u);d>=0?o[d]={...o[d],...c}:o.unshift(c),Ar(o);try{ct({type:"member",payload:c})}catch{}return c}function Bh(l){const o=Ue(l);Ar(zn().filter(u=>Ue(u.memberCode)!==o));try{ct({type:"member_del",payload:ho(l)})}catch{}}const RR=["9001"];function SR(){const l=new Set(RR.map(c=>Ue(c))),o=zn(),u=o.filter(c=>l.has(Ue(c.memberCode)));if(!u.length)return 0;Ar(o.filter(c=>!l.has(Ue(c.memberCode))));for(const c of u)try{ct({type:"member_del",payload:c.memberCode})}catch{}return u.length}function yR(l=!1){try{if(!cr()){try{localStorage.setItem(tm,em)}catch{}return null}if(!l&&localStorage.getItem(tm)===em)return null;const{members:o}=Km(bR);if(!o.length)return null;const u=new Map;for(const x of zn()){const h=Ue(x.memberCode);h&&u.set(h,x)}let c=0,d=0;const A=new Date().toISOString();for(const x of o){const h=Ue(x.memberCode);if(!h)continue;const v=u.get(h);v?(Ue(v.memberName)!==Ue(x.memberName)||v.centreName!==x.centreName||Ue(v.centreCode)!==Ue(x.centreCode))&&d++:c++,u.set(h,{...v||{},memberCode:h,memberName:x.memberName,centreCode:x.centreCode,centreName:x.centreName,source:"db",updatedAt:A})}const f=Array.from(u.values());Ar(f);try{localStorage.setItem(tm,em)}catch{}return Gm(),{added:c,updated:d,total:f.length}}catch{return null}}function Hh(l){const o=Ue(l);return o&&zn().find(u=>Ue(u.memberCode)===o)||null}function NR(){return zn().length}function vR(l){const o={};return l.forEach((u,c)=>{const d=ho(u).toLowerCase();if(!d)return;const A=(...f)=>f.some(x=>d.includes(x));o.memberCode===void 0&&A("member code","membercode","member_code","মেম্বার কোড","সদস্য কোড","কোড")?o.memberCode=c:o.memberName===void 0&&A("member name","membername","member_name","মেম্বার","সদস্যের নাম","নাম")?o.memberName=c:o.centreCode===void 0&&A("centre code","center code","centrecode","centercode","centre_code","কেন্দ্র কোড","সেন্টার কোড")?o.centreCode=c:o.centreName===void 0&&A("centre name","center name","centrename","centre_name","কেন্দ্র","সেন্টার")?o.centreName=c:o.bankName===void 0&&A("bank name","bankname","ব্যাংক")?o.bankName=c:o.checkNo===void 0&&A("check no","cheque no","checkno","check no:","চেক")&&(o.checkNo=c)}),o}function Km(l){const o=String(l||"").replace(/\r/g,"").split(`
`).filter(v=>v.trim().length>0);if(!o.length)return{members:[],skipped:0};const u=v=>{if(v.includes("	"))return v.split("	");if(v.includes(",")){const S=[];let b="",H=!1;for(let P=0;P<v.length;P++){const G=v[P];G==='"'?H&&v[P+1]==='"'?(b+='"',P++):H=!H:G===","&&!H?(S.push(b),b=""):b+=G}return S.push(b),S}return v.split(/\s{2,}|;/)},c=u(o[0]),d=vR(c),A=d.memberCode!==void 0&&Object.keys(d).length>=2,f=(v,S,b)=>{const H=A?d[S]:b;return H===void 0?"":ho(v[H])},x=[];let h=0;for(const v of A?o.slice(1):o){const S=u(v),b=f(S,"memberCode",0);if(!b){h++;continue}x.push({memberCode:b,memberName:f(S,"memberName",1),centreCode:f(S,"centreCode",2),centreName:f(S,"centreName",3),bankName:f(S,"bankName",4)||void 0,checkNo:f(S,"checkNo",5)||void 0,source:"db",updatedAt:new Date().toISOString()})}return{members:x,skipped:h}}function qi(l){const o=zn(),u=new Map(o.map((f,x)=>[Ue(f.memberCode),x]));let c=0,d=0;const A=[];for(const f of l){const x=Ue(f.memberCode);if(!x)continue;const h=u.get(x);if(h===void 0)o.push({...f,source:"db",updatedAt:new Date().toISOString()}),u.set(x,o.length-1),A.push(f.memberCode),c++;else{const v=o[h];o[h]={...v,memberName:f.memberName||v.memberName,centreCode:f.centreCode||v.centreCode,centreName:f.centreName||v.centreName,bankName:f.bankName||v.bankName,checkNo:f.checkNo||v.checkNo,source:"db",updatedAt:new Date().toISOString()},d++}}return Ar(o),Gm(),{added:c,updated:d,total:o.length,addedCodes:A}}const mc="gobra_member_upload_history",Gb=15;function co(){try{const l=localStorage.getItem(mc);if(!l)return[];const o=JSON.parse(l);return Array.isArray(o)?o.filter(u=>u&&typeof u=="object"):[]}catch{return[]}}function nm(l){try{const o=co();o.unshift({...l,id:`up_${Date.now()}_${Math.random().toString(36).slice(2,7)}`,at:new Date().toISOString()}),localStorage.setItem(mc,JSON.stringify(o.slice(0,Gb)))}catch{}}function LR(l){try{localStorage.setItem(mc,JSON.stringify(co().filter(o=>o.id!==l)))}catch{}}function OR(l){const o=co().find(f=>f.id===l);if(!o||o.undoneAt||!o.addedCodes||!o.addedCodes.length)return null;const u=new Set(o.addedCodes.map(jR)),c=zn(),d=c.filter(f=>!u.has(Ue(f.memberCode))),A=c.length-d.length;Ar(d);for(const f of c)if(u.has(Ue(f.memberCode)))try{ct({type:"member_del",payload:ho(f.memberCode)})}catch{}try{Gm()}catch{}try{const f=co().map(x=>x.id===l?{...x,undoneAt:new Date().toISOString(),removed:A,addedCodes:[]}:x);localStorage.setItem(mc,JSON.stringify(f.slice(0,Gb)))}catch{}return{removed:A,total:d.length}}function jR(l){return Ue(l)}function IR(l,o,u){const c=Date.parse(u||"")||0,d=new Map(o.map(h=>[Ue(h.memberCode),h])),A=new Set,f=[];let x=!1;for(const h of l){const v=Ue(h.memberCode);A.add(v);const S=d.get(v);if(S){const b=Date.parse(h.updatedAt||"")||0;(Date.parse(S.updatedAt||"")||0)>b?(f.push(S),x=!0):f.push(h)}else(Date.parse(h.updatedAt||"")||c+1)>c?f.push(h):x=!0}for(const h of o)A.has(Ue(h.memberCode))||(f.push(h),x=!0);return{merged:f,changed:x}}const Kb="gobra_entertainment_entries",BR="entertainment_entries",Pb="gobra_entertainment_deleted_ids",_b="entertainment_deleted_ids";function Pm(){try{const l=localStorage.getItem(Kb),o=l?JSON.parse(l):[];return Array.isArray(o)?o:[]}catch{return[]}}function HR(){return[...Pm()].sort((l,o)=>String(o.date||"").localeCompare(String(l.date||""))||Number(o.id)-Number(l.id))}function Zb(l){localStorage.setItem(Kb,JSON.stringify(l)),window.dispatchEvent(new Event("entertainment-changed")),ct({type:"setting",payload:{key:BR,value:JSON.stringify(l)}})}function wR(l){const o={...l,id:l.id||Date.now()};return Zb([o,...Pm().filter(u=>u.id!==o.id)]),o}function ac(){try{const l=localStorage.getItem(Pb),o=l?JSON.parse(l):[];return new Set((Array.isArray(o)?o:[]).map(String))}catch{return new Set}}function zb(l){const o=[...new Set([...l].map(String))].slice(0,500);localStorage.setItem(Pb,JSON.stringify(o))}function ER(l){zb([...ac(),String(l)]),ct({type:"setting",payload:{key:_b,value:JSON.stringify([...ac()])}})}function wh(l,o){const u=ac(),c=new Map;for(const A of l)A&&!u.has(String(A.id))&&c.set(String(A.id),A);for(const A of o)A&&!u.has(String(A.id))&&c.set(String(A.id),A);const d=[...c.values()];return d.sort((A,f)=>String(f.date||"").localeCompare(String(A.date||""))||Number(f.id)-Number(A.id)),d}function CR(l){ER(String(l)),Zb(Pm().filter(o=>String(o.id)!==String(l)))}const Eh="gobra_local_transactions",Ch="gobra_local_staff_reports",Fb="gobra_local_categories",MR="gobra_local_sc_rates",kR="gobra_local_subcat_rules",UR="gobra_local_rebate_rates",DR="gobra_local_kallyan_rule",Mh="gobra_local_day_closures",kh="gobra_local_day_opens",am="gobra_google_sheet_url",Jb="gobra_neon_sync_queue",Uh="gobra_check_entries",TR="gobra_check_entries_backup",xm="gobra_member_database",sc="gobra_member_cloud_dirty",hm="gobra_member_cloud_state";function Ds(){try{const l=localStorage.getItem(Jb);return l?JSON.parse(l):[]}catch{return[]}}function Xb(l){try{localStorage.setItem(Jb,JSON.stringify(l)),lr({pendingCount:l.length})}catch{}}function ct(l){const o=Ds();o.push(l),Xb(o),Vb().catch(()=>{})}async function Vb(){var u;if(typeof navigator<"u"&&!navigator.onLine)return;const l=Ds();if(l.length===0)return;try{await ba()}catch(c){console.warn("[neon] স্কিমা তৈরি করা যায়নি — কিউ পরে আবার চেষ্টা করবে",c);return}const o=[];for(const c of l)try{if(c.type==="tx")await wb(c.payload);else if(c.type==="tx_del")await Eb(c.payload);else if(c.type==="sr")await Cb(c.payload);else if(c.type==="sr_del")await Um(c.payload);else if(c.type==="cat")await Z2(c.payload);else if(c.type==="cat_del")await F2(c.payload);else if(c.type==="cat_order"){const d=String(((u=c.payload)==null?void 0:u.type)||"");let A=[];try{const f=localStorage.getItem(Fb);A=(f?JSON.parse(f):[]).filter(h=>h.type===d).sort((h,v)=>(h.sortOrder??9e9)-(v.sortOrder??9e9)).map(h=>Number(h.id))}catch{}A.length&&await z2(d,A)}else if(c.type==="sc")await X2(c.payload);else if(c.type==="sc_del")await V2(c.payload);else if(c.type==="subcat")await q2(c.payload);else if(c.type==="subcat_del")await Q2(c.payload);else if(c.type==="kallyan")await W2(c.payload);else if(c.type==="day_close")await Mb(c.payload);else if(c.type==="day_reopen")await nR(c.payload);else if(c.type==="day_open")await Ub(c.payload);else if(c.type==="setting")await Tm(c.payload.key,c.payload.value);else if(c.type==="check")await Db(c.payload);else if(c.type==="check_del")await dR(c.payload);else if(c.type==="member")await nc([c.payload]);else if(c.type==="member_dirty"){const d=localStorage.getItem(xm),A=d?JSON.parse(d):[];if(A.length>0){const f=await nc(A);localStorage.setItem(hm,JSON.stringify({count:f,syncedAt:new Date().toISOString(),schema:xl()}))}localStorage.removeItem(sc)}else c.type==="member_del"?await fR(String(c.payload)):c.type==="member_clear"&&(await xR(),localStorage.removeItem(sc))}catch(d){console.warn("Failed to process queue item, keeping in retry queue:",c,d),o.push(c)}Xb(o)}let sm=!1;async function rr(){if(sm)return{success:!1,message:"সিংক চলছে… একটু পরে আবার চেষ্টা হবে।"};sm=!0;try{return await GR()}finally{sm=!1}}async function GR(){if(typeof navigator<"u"&&!navigator.onLine)return lr({connected:!1,isSyncing:!1,pendingCount:Ds().length}),{success:!1,message:"বর্তমানে ডিভাইসটি অফলাইনে রয়েছে। ডাটা লোকাল মেমরিতে জমা থাকছে।"};lr({isSyncing:!0,lastError:null});try{await ba(),await Vb();const[l,o,u,c,d,A,f,x,h]=await Promise.all([K2(),P2(),_2(),J2(),Y2(),$2(),eR(),tR(),sR()]);let v=[],S=[];try{const E=localStorage.getItem(Eh);E&&(v=JSON.parse(E));const se=localStorage.getItem(Ch);se&&(S=JSON.parse(se))}catch{}const b=Ds(),H=new Set(b.filter(E=>E.type==="tx").map(E=>String(E.payload.id))),P=new Set(l.map(E=>String(E.id))),G=v.filter(E=>H.has(String(E.id))&&!P.has(String(E.id))&&E.txDate!=="2026-09-18");if(G.length>0)for(const E of G)await wb(E),l.unshift(E);const K=new Set(b.filter(E=>E.type==="sr").map(E=>String(E.payload.id))),L=new Set(o.map(E=>String(E.id))),_=S.filter(E=>K.has(String(E.id))&&!L.has(String(E.id)));if(_.length>0)for(const E of _)await Cb(E),o.unshift(E);let ue=[];try{const E=localStorage.getItem(Mh);E&&(ue=JSON.parse(E))}catch{}const C=new Set(x.map(E=>E.closeDate));for(const E of ue)C.has(E.closeDate)||(await Mb(E),x.unshift(E));let q=[];try{const E=localStorage.getItem(kh);E&&(q=JSON.parse(E))}catch{}const k=new Set(h.map(E=>E.openDate));for(const E of q)k.has(E.openDate)||(await Ub(E),h.unshift(E));const V=l.filter(E=>E.txDate!=="2026-09-18");localStorage.setItem(Eh,JSON.stringify(V)),localStorage.setItem(Ch,JSON.stringify(o)),localStorage.setItem(Mh,JSON.stringify(x)),localStorage.setItem(kh,JSON.stringify(h)),u.length>0&&localStorage.setItem(Fb,JSON.stringify(u)),c.length>0&&localStorage.setItem(MR,JSON.stringify(c)),d.length>0&&localStorage.setItem(kR,JSON.stringify(d)),A&&localStorage.setItem(DR,JSON.stringify(A)),f.length>0&&localStorage.setItem(UR,JSON.stringify(f));try{const E=await Yi("google_sheet_url");if(E&&E.trim().startsWith("http"))(localStorage.getItem(am)||"")!==E&&(localStorage.setItem(am,E),window.dispatchEvent(new CustomEvent("google-sheet-url-changed",{detail:E})));else{const se=localStorage.getItem(am)||"";se&&se.trim().startsWith("http")&&await Tm("google_sheet_url",se.trim())}}catch(E){console.warn("Failed to sync google_sheet_url:",E)}try{const E="gobra_entertainment_entries";try{const ie=await Yi(_b);if(ie){const ne=JSON.parse(ie);zb([...ac(),...Array.isArray(ne)?ne.map(String):[]])}}catch{}const se=await Yi("entertainment_entries");if(se){const ie=JSON.parse(se),ne=localStorage.getItem(E),me=ne?JSON.parse(ne):[],pe=wh(ie,me),j=JSON.stringify(pe),O=I=>`${I.date}|${I.id}`,R=JSON.stringify(wh([...ie].sort((I,re)=>String(O(re)).localeCompare(String(O(I)))),[]));j!==(ne||"[]")&&(localStorage.setItem(E,j),window.dispatchEvent(new Event("entertainment-changed"))),j!==R&&ct({type:"setting",payload:{key:"entertainment_entries",value:j}})}}catch(E){console.warn("Entertainment sync failed:",E)}try{const E=await uR(),se=localStorage.getItem(Uh),ie=se?JSON.parse(se):[],ne=Ds(),me=new Set(ne.filter(I=>I.type==="check").map(I=>{var re;return String((re=I.payload)==null?void 0:re.id)})),pe=new Set(ne.filter(I=>I.type==="check_del").map(I=>String(I.payload))),j=PR(ie,E,me,pe);j.length>=ie.length-pe.size?Th(j)!==Th(ie)&&(localStorage.setItem(Uh,JSON.stringify(j)),localStorage.setItem(TR,JSON.stringify(j)),window.dispatchEvent(new CustomEvent("check-changed",{detail:{count:j.length,restored:j.length-ie.length,cloud:!0}}))):console.warn(`[neon] চেক এন্ট্রি মার্জ লোকালের চেয়ে ছোট হয়ে যাচ্ছিল (${ie.length} → ${j.length}) — লোকাল তালিকাই রাখা হয়েছে`);const O=new Set(E.map(I=>String(I.id))),R=j.filter(I=>!O.has(String(I.id))&&!pe.has(String(I.id)));for(const I of R.slice(0,250))try{await Db(I)}catch(re){console.warn("[neon] চেক এন্ট্রি আপলোড ব্যর্থ",re);break}}catch(E){console.warn("[neon] চেক এন্ট্রি সিংক ব্যর্থ:",E)}try{const E=localStorage.getItem(xm);let se=[];try{se=E?JSON.parse(E):[]}catch{}const ie=localStorage.getItem(hm);let ne="",me="";try{const I=ie?JSON.parse(ie):{};ne=I.syncedAt||"",me=I.stamp||""}catch{}if(localStorage.getItem(sc)==="1"&&se.length>0){const I=await nc(se);localStorage.removeItem(sc),window.dispatchEvent(new CustomEvent("member-cloud-synced",{detail:{count:I,schema:xl()}}))}const j=await AR(),O=j.ok?`${j.count}|${j.maxUpdated}`:"";if(j.ok&&(!ne||O!==me)){const I=await mR();if(!(I.length===0&&j.count>0)){const{merged:ee,changed:M}=IR(se,I,ne);M&&(localStorage.setItem(xm,JSON.stringify(ee)),window.dispatchEvent(new CustomEvent("member-db-changed",{detail:{count:ee.length,cloud:!0}})));const U=new Set(I.map(ge=>Ue(ge.memberCode))),B=ee.filter(ge=>!U.has(Ue(ge.memberCode)));if(B.length>0)try{await nc(B)}catch(ge){console.warn("[neon] মেম্বার পুশ-মিসিং ব্যর্থ:",ge)}}localStorage.setItem(hm,JSON.stringify({count:j.ok?j.count:se.length,syncedAt:new Date().toISOString(),stamp:O,schema:xl()}))}else j.ok||console.warn("[neon] মেম্বার-স্ট্যাম্প নামানো যায়নি — এবারের মার্জ এড়িয়ে যাওয়া হলো")}catch(E){console.warn("[neon] মেম্বার ডাটাবেজ সিংক ব্যর্থ:",E)}const ce=new Date().toLocaleTimeString("bn-BD",{hour:"2-digit",minute:"2-digit",second:"2-digit"});return lr({connected:!0,isSyncing:!1,lastSyncTime:ce,lastError:null,pendingCount:Ds().length}),window.dispatchEvent(new Event("tx-changed")),window.dispatchEvent(new CustomEvent("rebate-rates-changed",{detail:f})),window.dispatchEvent(new CustomEvent("kallyan-rule-changed",{detail:A})),{success:!0,message:`Neon Database-এ সফলভাবে সিঙ্ক সম্পন্ন! (${l.length} Transactions, ${o.length} Reports)`}}catch(l){return(l==null?void 0:l.message)===Am?(lr({connected:!1,isSyncing:!1,lastError:"",pendingCount:Ds().length}),{success:!1,message:"🌐 এই হোস্টে ক্লাউড-সিঙ্ক নেই — ডেটা ডিভাইসে লোকাল থাকছে"}):(console.error("Neon sync failed:",l),lr({connected:!1,isSyncing:!1,lastError:l.message||"Failed to connect to Neon",pendingCount:Ds().length}),{success:!1,message:`সিঙ্ক ব্যর্থ: ${l.message||"সার্ভার সংযোগ সমস্যা"}`})}}let Dh=!1;function KR(){Dh||(Dh=!0,setTimeout(()=>{rr().catch(()=>{})},100),window.addEventListener("online",()=>{rr().catch(()=>{})}),document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&!Lh()&&rr().catch(()=>{})}),setInterval(()=>{Lh()||rr().catch(()=>{})},45e3))}function PR(l,o,u,c){const d=new Map;for(const x of Array.isArray(o)?o:[])x&&x.id!==void 0&&x.id!==null&&d.set(String(x.id),x);const A=[],f=new Set;for(const x of Array.isArray(l)?l:[]){if(!x||x.id===void 0||x.id===null)continue;const h=String(x.id);if(c.has(h))continue;f.add(h);const v=d.get(h);A.push(v&&!u.has(h)?{...x,...v,id:x.id}:x)}for(const x of d.values()){const h=String(x.id);!f.has(h)&&!c.has(h)&&A.push(x)}return A.sort((x,h)=>String(x.checkDate||"").localeCompare(String(h.checkDate||""))||Number(x.id)-Number(h.id))}function Th(l){return(Array.isArray(l)?l:[]).map(o=>[String(o==null?void 0:o.id),String((o==null?void 0:o.checkDate)||""),String((o==null?void 0:o.memberCode)||""),String((o==null?void 0:o.bankName)||"").toLowerCase(),String((o==null?void 0:o.checkNo)||"").toLowerCase(),String((o==null?void 0:o.project)||"").toLowerCase(),String((o==null?void 0:o.accountNo)||""),String((o==null?void 0:o.accountType)||""),(o==null?void 0:o.micr)===!0?"1":"0"].join("|")).sort().join(";")}const Ac="gobra_local_transactions",uo="gobra_local_staff_reports",Ma="gobra_local_categories",lc="gobra_local_sc_rates",mo="gobra_local_subcat_rules",Yb="gobra_google_sheet_script_url",bm="gobra_local_kallyan_rule",_m="gobra_local_day_closures",qb="gobra_local_day_opens";function Qe(l){if(!l)return"";let o=String(l).trim();if(o.endsWith("=")&&(o=o.slice(0,-1).trim()),!o)return"";const u=["০","১","২","৩","৪","৫","৬","৭","৮","৯"];for(let c=0;c<10;c++)o=o.split(u[c]).join(String(c));if(/^-?\d+(\.\d+)?$/.test(o))return o;if(/^[0-9+\-*/. ]+$/.test(o))try{if(o.includes("+")&&!o.includes("*")&&!o.includes("/")){const A=o.split("+").map(f=>f.trim()).filter(Boolean).reduce((f,x)=>f+(Number(x)||0),0);return String(Math.round(A))}const c=o.replace(/[^0-9+\-*/.]/g,"");if(c){const d=Function(`'use strict'; return (${c})`)();if(typeof d=="number"&&!isNaN(d)&&isFinite(d))return String(Math.round(d))}}catch{}return l}function hl(){try{const l=localStorage.getItem(_m);return l?JSON.parse(l):[]}catch{return[]}}function Zm(l){return hl().find(u=>u.closeDate===l)||null}function Ie(l){const o=Zm(l);return o!==null&&o.status==="closed"}function Qb(l){const o=hl().filter(c=>c.closeDate!==l.closeDate),u=[l,...o];return localStorage.setItem(_m,JSON.stringify(u)),window.dispatchEvent(new CustomEvent("day-close-changed",{detail:l})),window.dispatchEvent(new Event("tx-changed")),ct({type:"day_close",payload:l}),l}function pm(l){const o=hl().filter(u=>u.closeDate!==l);if(localStorage.setItem(_m,JSON.stringify(o)),!Ks().some(u=>u.openDate===l)){const u=Fn(l);$b({openDate:l,prevCloseDate:u.prevDate||null,openingCash:u.prevCash,openingBank:u.prevBank,openedAt:new Date().toISOString(),openedBy:"Cashier"})}window.dispatchEvent(new CustomEvent("day-close-changed",{detail:{closeDate:l,status:"reopened"}})),window.dispatchEvent(new Event("tx-changed")),ct({type:"day_reopen",payload:l})}function Ks(){try{const l=localStorage.getItem(qb);return l?JSON.parse(l):[]}catch{return[]}}function gm(l){return Ks().find(u=>u.openDate===l)||null}function _t(l){return!l||!l.includes("-")||Ie(l)?!1:!!(Ks().some(d=>d.openDate===l)||ln().some(d=>d.txDate===l)||Nn().some(d=>d.reportDate===l))}function _R(l){return!l||!l.includes("-")?"not_opened":Ie(l)?"closed":_t(l)?"open":"not_opened"}function $b(l){const o=Ks().filter(c=>c.openDate!==l.openDate),u=[l,...o];return localStorage.setItem(qb,JSON.stringify(u)),window.dispatchEvent(new CustomEvent("day-open-changed",{detail:l})),window.dispatchEvent(new Event("tx-changed")),ct({type:"day_open",payload:l}),l}function ZR(l){if(!l||!l.includes("-"))return null;const o=new Set;for(const d of Ks())d.openDate&&d.openDate.includes("-")&&o.add(d.openDate);for(const d of ln())d.txDate&&d.txDate.includes("-")&&o.add(d.txDate);for(const d of Nn())d.reportDate&&d.reportDate.includes("-")&&o.add(d.reportDate);const u=Array.from(o).filter(d=>d<l).sort(),c=u.length?u[u.length-1]:null;return c?Ie(c)?null:c:null}function Wb(l,o="Cashier",u,c){if(!(c!=null&&c.force)){const P=ZR(l);if(P)throw new Error(`⛔ আগের কর্মদিবস ${P} Day Close করা হয়নি — আগে সেটি Close করুন (⚙️ Day Admin থেকেও করা যায়), তারপর ${l} Open হবে।`)}const d=Fn(l,{skipManualOpeningFor:l}),A=Math.round(Number(d.prevCash)||0),f=Math.round(Number(d.prevBank)||0),x=u&&u.cash!==void 0&&u.cash!==null&&u.cash!=="",h=u&&u.bank!==void 0&&u.bank!==null&&u.bank!=="",v=x?Math.round(Number(u.cash)||0):A,S=h?Math.round(Number(u.bank)||0):f,b=!!u&&(v!==A||S!==f),H={openDate:l,prevCloseDate:d.prevDate||null,openingCash:b?v:A,openingBank:b?S:f,openedAt:new Date().toISOString(),openedBy:o,...b?{manualOpening:!0,systemOpeningCash:A,systemOpeningBank:f,openingNote:String((u==null?void 0:u.note)||"").trim()}:{}};return $b(H)}function ln(){try{const l=localStorage.getItem(Ac);return l?JSON.parse(l):[]}catch{return[]}}function ep(l){if(Ie(l.txDate))throw new Error(`⚠️ এই তারিখের (${l.txDate}) দিন সমাপ্ত (Day Closed) রয়েছে।`);if(!_t(l.txDate))throw new Error(`⚠️ এই তারিখের (${l.txDate}) কর্মদিবস শুরু (Day Open) করা হয়নি। প্রথমে দিনটি Day Open করুন।`);const o=pt(l.txDate);if(o.blocked)throw new Error(o.reason||"দুটি কর্মদিবসের মধ্যবর্তী বন্ধের দিনে কোনো এন্ট্রি করা যাবে না।");const u=ln(),c={...l,id:l.id||Date.now()},d=[c,...u.filter(A=>A.id!==c.id)];return localStorage.setItem(Ac,JSON.stringify(d)),window.dispatchEvent(new Event("tx-changed")),ct({type:"tx",payload:c}),c}function tp(l){const o=ln(),u=o.findIndex(c=>c.id===l.id);return u!==-1?o[u]=l:o.unshift(l),localStorage.setItem(Ac,JSON.stringify(o)),window.dispatchEvent(new Event("tx-changed")),ct({type:"tx",payload:l}),l}function np(l){const o=String(l),u=ln().filter(c=>String(c.id)!==o);localStorage.setItem(Ac,JSON.stringify(u)),window.dispatchEvent(new Event("tx-changed")),ct({type:"tx_del",payload:l}),Eb(l).catch(console.error)}function Nn(l){try{const o=localStorage.getItem(uo),u=o?JSON.parse(o):[];return l?u.filter(c=>c.reportDate===l):u}catch{return[]}}function zR(l){if(Ie(l.reportDate))throw new Error(`⚠️ এই তারিখের (${l.reportDate}) দিন সমাপ্ত (Day Closed) রয়েছে।`);if(!_t(l.reportDate))throw new Error(`⚠️ এই তারিখের (${l.reportDate}) কর্মদিবস শুরু (Day Open) করা হয়নি। প্রথমে দিনটি Day Open করুন।`);const o=pt(l.reportDate);if(o.blocked)throw new Error(o.reason||"দুটি কর্মদিবসের মধ্যবর্তী বন্ধের দিনে কোনো এন্ট্রি করা যাবে না।");const u=Nn();if(!l.id){const A=String(l.staffName||"").toLowerCase().trim(),f=u.filter(x=>x.reportDate===l.reportDate&&String(x.staffName||"").toLowerCase().trim()===A);if(f.length>0){const x=f[0],h=P=>Math.round((f.reduce((G,K)=>G+(Number(K[P])||0),0)+(Number(l[P])||0))*100)/100,v={...x,loan:String(h("loan")),rebate:String(h("rebate")),savings:String(h("savings")),dps:String(h("dps")),admission:String(h("admission")),passbook:String(h("passbook")),savingsAdjust:String(h("savingsAdjust")),nogodReturn:String(h("nogodReturn")),createdAt:new Date().toISOString()},S=f.slice(1).map(P=>P.id),b=new Set(S.map(P=>String(P))),H=u.map(P=>String(P.id)===String(v.id)?v:P).filter(P=>!b.has(String(P.id)));return localStorage.setItem(uo,JSON.stringify(H)),window.dispatchEvent(new Event("tx-changed")),ct({type:"sr",payload:v}),S.forEach(P=>{ct({type:"sr_del",payload:P}),Um(P).catch(console.error)}),v}}const c={...l,id:l.id||Date.now(),createdAt:new Date().toISOString()},d=[c,...u.filter(A=>A.id!==c.id)];return localStorage.setItem(uo,JSON.stringify(d)),window.dispatchEvent(new Event("tx-changed")),ct({type:"sr",payload:c}),c}function FR(l){const o=Nn(),u=o.findIndex(c=>c.id===l.id);return u!==-1?o[u]=l:o.unshift(l),localStorage.setItem(uo,JSON.stringify(o)),window.dispatchEvent(new Event("tx-changed")),ct({type:"sr",payload:l}),l}function JR(l){const o=String(l),u=Nn().filter(c=>String(c.id)!==o);localStorage.setItem(uo,JSON.stringify(u)),window.dispatchEvent(new Event("tx-changed")),ct({type:"sr_del",payload:l}),Um(l).catch(console.error)}const zm="gobra_staff_names";function XR(){try{const l=localStorage.getItem(zm);if(l==null)return null;const o=JSON.parse(l||"[]");return Array.isArray(o)?o.filter(u=>u&&String(u.name||"").trim()).map((u,c)=>({id:Number(u.id)||c+1,name:String(u.name).trim()})):[]}catch{return[]}}function ss(){const l=XR();if(l!=null)return l;const o=cr()?["Sakib","Mintu","Alamgir","Monir"].map((u,c)=>({id:c+1,name:u})):[];try{localStorage.setItem(zm,JSON.stringify(o))}catch{}return o}function Fm(l){try{localStorage.setItem(zm,JSON.stringify(l))}catch{}}function VR(l,o){const u=ss(),c=u.findIndex(f=>f.id===l),d=c+o;if(c<0||d<0||d>=u.length)return;const A=u[c];u[c]=u[d],u[d]=A,Fm(u)}function YR(l){const o=String(l||"").trim();if(!o)return null;const u=ss();if(u.some(d=>d.name.toLowerCase()===o.toLowerCase()))return null;const c={id:u.reduce((d,A)=>Math.max(d,A.id),0)+1,name:o};return Fm([...u,c]),c}function qR(l){Fm(ss().filter(o=>o.id!==l))}function ha(l){try{const o=localStorage.getItem(Ma);let u=o?JSON.parse(o):[];if(u.length===0){let d=1;const A=[];for(const[f,x]of Object.entries(yh()))for(const h of x)A.push({id:d++,type:f,name:h});localStorage.setItem(Ma,JSON.stringify(A)),u=A}const c=u.filter(d=>d.type===l);return c.some(d=>d.sortOrder!=null)&&c.sort((d,A)=>(d.sortOrder??9e9)-(A.sortOrder??9e9)),c}catch{return(yh()[l]||[]).map((o,u)=>({id:u+1,type:l,name:o}))}}function Rm(l,o){const u=localStorage.getItem(Ma),c=u?JSON.parse(u):[],d=o.trim(),A=c.filter(x=>x.type===l).reduce((x,h)=>Math.max(x,h.sortOrder??0),0),f={id:Date.now(),type:l,name:d,sortOrder:A+1};return c.push(f),localStorage.setItem(Ma,JSON.stringify(c)),ct({type:"cat",payload:f}),window.dispatchEvent(new CustomEvent("categories-changed",{detail:{action:"add",type:l,name:d}})),f}function ap(l,o){const u=localStorage.getItem(Ma),c=u?JSON.parse(u):[],d=c.find(A=>A.id===l);d&&(d.name=o.trim(),localStorage.setItem(Ma,JSON.stringify(c)),ct({type:"cat",payload:d}),window.dispatchEvent(new CustomEvent("categories-changed",{detail:{action:"update",id:l,name:d.name}})))}function Sm(l){const o=localStorage.getItem(Ma),c=(o?JSON.parse(o):[]).filter(d=>d.id!==l);localStorage.setItem(Ma,JSON.stringify(c)),ct({type:"cat_del",payload:l}),window.dispatchEvent(new CustomEvent("categories-changed",{detail:{action:"delete",id:l}}))}function sp(l,o,u){const c=ha(l),d=c.findIndex(v=>v.id===o),A=d+u;if(d<0||A<0||A>=c.length)return;const f=c[d];c[d]=c[A],c[A]=f;const x=localStorage.getItem(Ma),h=x?JSON.parse(x):[];c.forEach((v,S)=>{const b=h.find(H=>H.id===v.id);b&&(b.sortOrder=S+1)}),localStorage.setItem(Ma,JSON.stringify(h)),ct({type:"cat_order",payload:{type:l}}),window.dispatchEvent(new CustomEvent("categories-changed",{detail:{action:"reorder",type:l}}))}const lm=[{id:1,category:"jagoron",subCategory:"1 year",ratePer100:"13.47"},{id:2,category:"jagoron",subCategory:"1.5 year",ratePer100:"20.21"},{id:3,category:"jagoron",subCategory:"2 year",ratePer100:"26.94"},{id:4,category:"agrossor",subCategory:"1 year",ratePer100:"13.47"},{id:5,category:"agrossor",subCategory:"1.5 year",ratePer100:"20.21"},{id:6,category:"agrossor",subCategory:"2 year",ratePer100:"26.94"},{id:7,category:"buniyed",subCategory:"1 year",ratePer100:"13.47"},{id:8,category:"sufolon",subCategory:"1 year",ratePer100:"13.47"},{id:9,category:"mfce",subCategory:"1 year",ratePer100:"13.47"}];function Jm(){try{const l=localStorage.getItem(lc);return l?JSON.parse(l):(localStorage.setItem(lc,JSON.stringify(lm)),lm)}catch{return lm}}function Gh(l){const o=Jm(),u={...l,id:l.id||Date.now()},c=[u,...o.filter(d=>d.id!==u.id)];localStorage.setItem(lc,JSON.stringify(c)),ct({type:"sc",payload:u})}function QR(l){const o=Jm().filter(u=>u.id!==l);localStorage.setItem(lc,JSON.stringify(o)),ct({type:"sc_del",payload:l})}function Ao(){try{const l=localStorage.getItem(mo);return l?JSON.parse(l):(localStorage.setItem(mo,JSON.stringify(oo)),oo)}catch{return oo}}function Al(l){const o=Ao(),u={...l,id:l.id||Date.now()},c=[u,...o.filter(d=>d.id!==u.id)];localStorage.setItem(mo,JSON.stringify(c)),ct({type:"subcat",payload:u})}function $R(l){const o=Ao().filter(u=>u.id!==l);localStorage.setItem(mo,JSON.stringify(o)),ct({type:"subcat_del",payload:l})}function WR(){localStorage.setItem(mo,JSON.stringify(oo)),oo.forEach(l=>{ct({type:"subcat",payload:l})})}const Kh="kallyan_rule_version_v2";function ts(){try{if(localStorage.getItem(Kh)!=="v2")return localStorage.setItem(Kh,"v2"),localStorage.setItem(bm,JSON.stringify(sn)),sn;const o=localStorage.getItem(bm);if(!o)return sn;const u=JSON.parse(o);return{percent:typeof u.percent=="number"?u.percent:sn.percent,fixed:typeof u.fixed=="number"?u.fixed:sn.fixed,categoryOverrides:{...sn.categoryOverrides||{},...u.categoryOverrides||{}}}}catch{return sn}}function Ph(l){try{localStorage.setItem(bm,JSON.stringify(l)),window.dispatchEvent(new CustomEvent("kallyan-rule-changed",{detail:l})),ct({type:"kallyan",payload:l})}catch{}}function e5(){try{return localStorage.getItem(Yb)||""}catch{return""}}function rm(l){const o=l.trim();try{localStorage.setItem(Yb,o),window.dispatchEvent(new CustomEvent("google-sheet-url-changed",{detail:o})),ct({type:"setting",payload:{key:"google_sheet_url",value:o}})}catch{}}function Fn(l,o){const u=ln(),c=Nn(),d=["monir","sakib","mintu","alamgir"],A=ha("receive"),f=new Set(d);A.forEach(O=>{const R=O.name.toLowerCase().trim();["bank withdraw","fund receive","others income"].includes(R)||f.add(R)}),c.forEach(O=>{O.staffName&&f.add(O.staffName.toLowerCase().trim())});const x=Array.from(f),h=new Set;u.forEach(O=>h.add(O.txDate)),c.forEach(O=>h.add(O.reportDate)),h.add(l);const v=hl(),S=new Map;Ks().forEach(O=>{O&&O.openDate&&S.set(O.openDate,O)}),S.forEach((O,R)=>{O&&O.manualOpening&&h.add(R)});const b=Array.from(h).sort();let H=0,P=0,G=0,K=0,L="",_="",ue=0,C=0,q=0,k=0,V=0,ce=0,E=0,se=0,ie=0;const ne=Object.fromEntries(x.map(O=>[O,0]));for(const O of b){const R=(o==null?void 0:o.skipManualOpeningFor)===O?void 0:S.get(O);R&&R.manualOpening&&(H=Number(R.openingCash)||0,P=Number(R.openingBank)||0),O===l&&(G=H,K=P,L=_);const I=u.filter(Z=>Z.txDate===O),re=c.filter(Z=>Z.reportDate===O);O<l&&(I.length>0||re.length>0||R&&R.manualOpening)&&(_=O);const ee=I.filter(Z=>Z.type==="receive"),M=I.filter(Z=>Z.type==="payment"),U=ee.filter(Z=>Z.category.toLowerCase().includes("fund receive")).reduce((Z,F)=>Z+(Number(F.amount)||0),0),B=ee.filter(Z=>Z.category.toLowerCase().includes("bank withdraw")).reduce((Z,F)=>Z+(Number(F.amount)||0),0),ge=ee.filter(Z=>!Z.category.toLowerCase().includes("fund receive")).reduce((Z,F)=>Z+(Number(F.amount)||0),0),y=M.reduce((Z,F)=>Z+(Number(F.amount)||0),0),le=M.filter(Z=>Z.category.toLowerCase().includes("bank deposit")||Z.category.toLowerCase().includes("bank deposite")).reduce((Z,F)=>Z+(Number(F.amount)||0),0);re.reduce((Z,F)=>Z+Number(F.loan||0)+Number(F.savings||0)+Number(F.dps||0)+Number(F.passbook||0)+Number(F.admission||0),0);const te=M.filter(Z=>{const F=Z.category.toLowerCase().trim();return F.includes("fund payment")||F.includes("fund transfer")||F.includes("fund")&&!F.includes("receive")?!1:["jagoron","agrossor","buni","sufolon","mfce"].some(Re=>F.includes(Re))||!!(Z.subCategory&&Z.subCategory.trim().length>0)}),Y=te.reduce((Z,F)=>Z+dr(Number(F.amount)||0,F.category,ts()),0),Se=te.length*5;ee.filter(Z=>{const F=Z.category.toLowerCase().trim();return!(F.includes("bank withdraw")||F.includes("fund receive")||F.includes("welfare")||F.includes("kallayan")||F.includes("loan form")||x.some(Re=>F.includes(Re)))}).reduce((Z,F)=>Z+(Number(F.amount)||0),0),te.reduce((Z,F)=>Z+(Number(F.amount)||0),0),re.reduce((Z,F)=>Z+Number(F.savingsAdjust||0)+Number(F.nogodReturn||0),0),M.filter(Z=>!["jagoron","agrossor","buni","sufolon","mfce","bank deposit","bank deposite"].some(F=>Z.category.toLowerCase().includes(F))).reduce((Z,F)=>Z+(Number(F.amount)||0),0);const ye=v.find(Z=>Z.closeDate===O&&Z.status==="closed");if(ye)H=Number(ye.closingCash)||0,P=Number(ye.closingBank)||0;else{const Z=Math.round(H+ge+Y+Se-y),F=Math.round(P-B+le+U);H=Z,P=F}O===l&&(q=ge,k=y,V=le,ce=B,E=U,se=Y,ie=Se,I.forEach(Z=>{if(Z.type==="receive"){const F=Z.category.toLowerCase().trim();for(const Re of x)if(F===Re||F.includes(Re)||Re.includes(F)){ne[Re]=(ne[Re]||0)+(Number(Z.amount)||0);break}}}))}ue=Math.round(G+q+se+ie-k),C=Math.round(K+V-ce+E);const me=Math.round(G+q),pe=Math.round(k);let j=0;for(const O of x)j+=ne[O]||0;return{date:l,cash:ue,bank:C,prevCash:G,prevBank:K,prevDate:L,todayCashInHand:ue,todayBankBalance:C,receive:me,expense:pe,todayReceiveOnly:q,todayPayment:pe,todayKallayan:se,todayLoanForm:ie,totalReceiveWithOpening:me,todayBankDeposit:V,todayBankWithdraw:ce,totalStaffReceive:j,persons:ne}}function t5(l){const o=Fn(l),u=ln(),c=Nn(l),d=o.prevCash,A=o.prevBank,f=u.filter(j=>j.txDate===l),x=f.filter(j=>j.type==="receive"),h=f.filter(j=>j.type==="payment"),v=c.reduce((j,O)=>j+(Number(O.loan)||0)+(Number(O.savings)||0)+(Number(O.dps)||0)+(Number(O.passbook)||0)+(Number(O.admission)||0),0),S=ss().map(j=>j.name.toLowerCase().trim()),b=x.filter(j=>S.some(O=>j.category.toLowerCase().includes(O))).reduce((j,O)=>j+(Number(O.amount)||0),0),H=v>0?v:b,P=d,G=x.filter(j=>j.category.toLowerCase().includes("bank withdraw")).reduce((j,O)=>j+(Number(O.amount)||0),0),K=ha("disburse").map(j=>j.name.toLowerCase().trim()),L=h.filter(j=>{const O=j.category.toLowerCase().trim();return O.includes("fund payment")||O.includes("fund transfer")||O.includes("fund")&&!O.includes("receive")?!1:K.includes(O)||["jagoron","agrossor","buni","sufolon","mfce"].some(R=>O.includes(R))||!!(j.subCategory&&j.subCategory.trim().length>0)}),_=L.reduce((j,O)=>j+dr(Number(O.amount)||0,O.category,ts()),0),ue=L.length*5,C=x.filter(j=>{const O=j.category.toLowerCase().trim();return!(O.includes("bank withdraw")||O.includes("fund receive")||O.includes("welfare")||O.includes("kallayan")||O.includes("loan form")||S.some(R=>O.includes(R)))}).reduce((j,O)=>j+(Number(O.amount)||0),0),q=L.reduce((j,O)=>j+(Number(O.amount)||0),0),k=h.filter(j=>j.category.toLowerCase().includes("bank deposit")||j.category.toLowerCase().includes("bank deposite")).reduce((j,O)=>j+(Number(O.amount)||0),0),V=c.reduce((j,O)=>j+(Number(O.savingsAdjust)||0)+(Number(O.nogodReturn)||0),0),ce=h.filter(j=>{const O=j.category.toLowerCase().trim();return O.includes("fund payment")||O.includes("fund transfer")||O.includes("fund")&&!O.includes("receive")}).reduce((j,O)=>j+(Number(O.amount)||0),0),E=h.filter(j=>{const O=j.category.toLowerCase().trim();return!(L.some(R=>R.id===j.id)||["jagoron","agrossor","buni","sufolon","mfce","bank deposit","bank deposite"].some(R=>O.includes(R))||O.includes("fund payment")||O.includes("fund transfer")||O.includes("fund")&&!O.includes("receive"))}).reduce((j,O)=>j+(Number(O.amount)||0),0),se=H+P+G+_+ue+C,ie=q+k+V+ce+E,ne=Math.round(se-ie),me=x.filter(j=>j.category.toLowerCase().includes("fund receive")).reduce((j,O)=>j+(Number(O.amount)||0),0),pe=Math.round(A-G+k+me);return{reportCashInHand:ne,reportBankBalance:pe}}function lp(l){const o=Fn(l);return{cashInHand:o.cash,allReceiveWithoutFund:o.todayReceiveOnly??0,kallyan:o.todayKallayan??0,loanForm:o.todayLoanForm??0,allPayment:o.todayPayment??0,prevCash:o.prevCash}}function pt(l,o){if(!l||!l.includes("-"))return{blocked:!1};const u=ln(),c=Nn(),d=hl(),A=new Set;if(d.forEach(b=>{b.closeDate&&b.status==="closed"&&A.add(b.closeDate)}),u.forEach(b=>{b.txDate&&b.txDate.includes("-")&&A.add(b.txDate)}),c.forEach(b=>{b.reportDate&&b.reportDate.includes("-")&&A.add(b.reportDate)}),o&&o.includes("-")&&A.add(o),d.some(b=>b.closeDate===l&&b.status==="closed"))return{blocked:!0,reason:"এই তারিখের দিন সমাপ্ত (Day Closed) রয়েছে। হিসাব লক ও সুরক্ষিত আছে।"};const x=Array.from(A).filter(b=>b<l).sort(),h=x.length>0?x[x.length-1]:void 0,v=Array.from(A).filter(b=>b>l).sort(),S=v.length>0?v[0]:void 0;return h&&S?{blocked:!0,prevWorkingDate:h,nextWorkingDate:S,reason:`এই তারিখটি (${l}) দুটি কর্মদিবস [${h} ও ${S}]-এর মধ্যবর্তী বন্ধের দিন। এই তারিখে কোনো লেনদেন এন্ট্রি করা সম্পূর্ণভাবে ব্লক ও নিষিদ্ধ।`}:{blocked:!1}}function Xm(){const l=ln(),o=Nn(),u=hl(),c=Ks(),d=new Set;l.forEach(x=>{x.txDate&&x.txDate.includes("-")&&d.add(x.txDate)}),o.forEach(x=>{x.reportDate&&x.reportDate.includes("-")&&d.add(x.reportDate)}),u.forEach(x=>{x.closeDate&&x.closeDate.includes("-")&&d.add(x.closeDate)}),c.forEach(x=>{x.openDate&&x.openDate.includes("-")&&d.add(x.openDate)});const A=Array.from(d).sort().reverse(),f=["রবিবার","সোমবার","মঙ্গলবার","বুধবার","বৃহস্পতিবার","শুক্রবার","শনিবার"];return A.map(x=>{const h=l.filter(k=>k.txDate===x),v=o.filter(k=>k.reportDate===x),S=u.find(k=>k.closeDate===x&&k.status==="closed"),b=_t(x),H=h.filter(k=>k.type==="receive"),P=h.filter(k=>k.type==="payment"),G=H.reduce((k,V)=>k+(Number(V.amount)||0),0),K=P.reduce((k,V)=>k+(Number(V.amount)||0),0),[L,_,ue]=x.split("-").map(Number),C=new Date(L,_-1,ue),q=isNaN(C.getDay())?"":f[C.getDay()];return{date:x,dayName:q,txCount:h.length,receiveCount:H.length,paymentCount:P.length,receiveTotal:G,paymentTotal:K,srCount:v.length,isOpen:b,isClosed:!!S,closingCash:S?Number(S.closingCash):void 0,closingBank:S?Number(S.closingBank):void 0}})}const ym=l=>String(l).padStart(2,"0"),rc=(l,o,u)=>`${l}-${ym(o+1)}-${ym(u)}`,xa=()=>{const l=new Date;return rc(l.getFullYear(),l.getMonth(),l.getDate())},rp=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],n5=["Su","Mo","Tu","We","Th","Fr","Sa"];function Ze(l){if(!l||!l.includes("-"))return"";const[o,u,c]=l.split("-").map(Number);return!o||!u||!c||u<1||u>12?l:`${ym(c)} ${rp[u-1]} ${o}`}const _h=l=>{if(!l||!l.includes("-"))return"";const[o,u,c]=l.split("-");return!o||!u||!c?"":`${c}-${u}-${o.slice(2)}`},a5=l=>{const o=String(l).replace(/\D/g,"").slice(0,6);return o.length<=2?o:o.length<=4?`${o.slice(0,2)}-${o.slice(2)}`:`${o.slice(0,2)}-${o.slice(2,4)}-${o.slice(4)}`},s5=l=>{const o=String(l).replace(/\D/g,"");if(o.length!==6)return null;const u=Number(o.slice(0,2)),c=Number(o.slice(2,4)),d=Number(o.slice(4,6));if(c<1||c>12||u<1)return null;const A=d>50?1900+d:2e3+d;return u>new Date(A,c,0).getDate()?null:rc(A,c-1,u)};function hn({value:l,onChange:o,className:u="",dropUp:c=!1,onOpenTracker:d,manualEntry:A=!1}){const[f,x]=p.useState(!1),[h,v]=p.useState(null),[S,b]=p.useState({}),[H,P]=p.useState({}),G=l&&l.includes("-")?l:xa(),[K,L]=p.useState(Number(G.slice(0,4))||new Date().getFullYear()),[_,ue]=p.useState((Number(G.slice(5,7))||new Date().getMonth()+1)-1),C=p.useRef(null);p.useEffect(()=>{if(f)try{const ne=Xm(),me={};ne.forEach(j=>{j.isClosed?me[j.date]="closed":(j.isOpen||j.txCount>0||j.srCount>0)&&(me[j.date]="unclosed")});const pe=new Date(K,_+1,0).getDate();for(let j=1;j<=pe;j++){const O=rc(K,_,j);me[O]||pt(O).blocked&&(me[O]="blocked")}P(me)}catch{P({})}},[f,K,_]),p.useEffect(()=>{if(!f||!C.current)return;const ne=()=>{if(!C.current)return;const me=C.current.getBoundingClientRect(),pe=window.innerWidth,j=Math.min(288,pe-16);if(c)if(pe<640){let O=me.left;O+j>pe-8&&(O=pe-8-j),O<8&&(O=8);const R=O-me.left;b({left:`${R}px`,right:"auto",width:`${j}px`})}else b({right:0,left:"auto",width:"18rem"});else if(me.left+j>pe-8){const O=pe-8-(me.left+j);b({left:`${O}px`,width:`${j}px`})}else b({left:0,width:`${j}px`})};return ne(),window.addEventListener("resize",ne),()=>window.removeEventListener("resize",ne)},[f,c]),p.useEffect(()=>{if(f&&l&&l.includes("-")){const ne=l.split("-").map(Number);ne[0]&&L(ne[0]),ne[1]&&ue(ne[1]-1)}},[f,l]),p.useEffect(()=>{if(!f)return;const ne=me=>{C.current&&!C.current.contains(me.target)&&x(!1)};return document.addEventListener("mousedown",ne),document.addEventListener("touchstart",ne),()=>{document.removeEventListener("mousedown",ne),document.removeEventListener("touchstart",ne)}},[f]);const q=new Date(K,_,1).getDay(),k=new Date(K,_+1,0).getDate(),V=[...Array(q).fill(null),...Array.from({length:k},(ne,me)=>me+1)];for(;V.length%7;)V.push(null);const ce=()=>{_===0?(ue(11),L(K-1)):ue(_-1)},E=()=>{_===11?(ue(0),L(K+1)):ue(_+1)},se=ne=>{o(ne),x(!1)},ie=xa();return n.jsxs("div",{ref:C,className:"relative",children:[A?n.jsxs("div",{className:`flex w-full items-center gap-0.5 rounded border border-slate-300 ${u.includes("bg-")?"":"bg-white"} focus-within:border-blue-500 ${u}`,children:[n.jsx("input",{value:h!==null?h:_h(l),placeholder:"DD-MM-YY",inputMode:"numeric",autoComplete:"off",onFocus:ne=>{v(_h(l)),ne.target.select()},onChange:ne=>{const me=ne.target.value.replace(/\D/g,"").slice(0,6);if(v(a5(me)),!me){o("");return}const pe=s5(me);pe&&o(pe)},onBlur:()=>v(null),onKeyDown:ne=>{ne.key==="Enter"&&ne.target.blur()},className:"w-full min-w-0 flex-1 bg-transparent px-2 py-1 font-mono font-semibold text-slate-800 focus:outline-none"}),n.jsx("button",{type:"button",onClick:()=>x(ne=>!ne),title:"Pick from calendar",className:"shrink-0 cursor-pointer px-2 py-1.5 text-slate-400 hover:text-slate-600",children:"▼"})]}):n.jsxs("button",{type:"button",onClick:()=>x(ne=>!ne),className:`flex w-full items-center justify-between rounded border border-slate-300 ${u.includes("bg-")?"":"bg-white"} px-2.5 py-1.5 text-left font-semibold text-slate-800 focus:border-blue-500 focus:outline-none ${u}`,children:[n.jsx("span",{className:"truncate",children:Ze(l)||"Select Date"}),n.jsx("span",{className:"ml-1 text-slate-400",children:"▼"})]}),f&&n.jsxs("div",{style:S,className:`absolute z-50 rounded-xl border border-slate-300 bg-white p-2.5 sm:p-3 shadow-2xl text-slate-900 ${c?"bottom-full mb-2":"mt-1"}`,children:[n.jsxs("div",{className:"mb-2 flex items-center justify-between",children:[n.jsx("button",{type:"button",onClick:ce,className:"h-8 w-8 rounded-full text-lg hover:bg-slate-100 cursor-pointer",children:"‹"}),n.jsxs("div",{className:"flex items-center gap-1 font-semibold",children:[n.jsx("select",{value:_,onChange:ne=>ue(Number(ne.target.value)),className:"rounded border border-slate-300 px-1 py-0.5 text-xs font-bold",children:rp.map((ne,me)=>n.jsx("option",{value:me,children:ne},ne))}),n.jsx("select",{value:K,onChange:ne=>L(Number(ne.target.value)),className:"rounded border border-slate-300 px-1 py-0.5 text-xs font-bold",children:Array.from({length:11},(ne,me)=>K-5+me).map(ne=>n.jsx("option",{value:ne,children:ne},ne))})]}),n.jsx("button",{type:"button",onClick:E,className:"h-8 w-8 rounded-full text-lg hover:bg-slate-100 cursor-pointer",children:"›"})]}),n.jsx("div",{className:"grid grid-cols-7 text-center text-xs font-semibold text-slate-500",children:n5.map((ne,me)=>n.jsx("div",{className:`py-1 ${me===0?"text-rose-600 font-bold":""}`,children:ne},ne))}),n.jsx("div",{className:"grid grid-cols-7 gap-0.5 text-center text-sm",children:V.map((ne,me)=>{if(!ne)return n.jsx("div",{},me);const pe=rc(K,_,ne),j=pe===l,O=pe===ie,R=me%7===0,I=H[pe];return n.jsxs("button",{type:"button",onClick:()=>se(pe),className:`h-9.5 rounded-lg transition relative flex flex-col items-center justify-center cursor-pointer ${j?"bg-blue-600 font-bold text-white shadow-sm":O?"border border-blue-500 font-semibold text-blue-700 hover:bg-blue-50":R?"hover:bg-rose-50 text-rose-600 font-bold":"hover:bg-slate-100 text-slate-800"}`,children:[n.jsx("span",{className:"leading-none text-xs sm:text-sm",children:ne}),I&&n.jsx("span",{className:`h-1.5 w-1.5 rounded-full mt-0.5 ${I==="closed"?j?"bg-emerald-300":"bg-emerald-500":I==="unclosed"?j?"bg-amber-300 animate-pulse":"bg-amber-500 animate-pulse":j?"bg-rose-300":"bg-rose-500"}`,title:I==="closed"?"দিন সমাপ্ত (Day Closed)":I==="unclosed"?"অসমাপ্ত লেনদেন (Unclosed)":"মধ্যবর্তী বন্ধের দিন (এন্ট্রি ব্লকড)"})]},me)})}),n.jsxs("div",{className:"mt-2 flex items-center gap-1.5",children:[n.jsx("button",{type:"button",onClick:()=>se(ie),className:"flex-1 rounded-lg bg-slate-100 py-1.5 text-xs font-semibold hover:bg-slate-200 cursor-pointer text-slate-700",children:"Today"}),n.jsx("button",{type:"button",onClick:()=>{x(!1),d?d():window.dispatchEvent(new CustomEvent("open-date-tracker"))},className:"rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 px-2 py-1.5 text-xs font-bold transition cursor-pointer",title:"সকল তারিখের অডিট ট্র্যাকার",children:"📋 ট্র্যাকার"})]}),n.jsxs("div",{className:"mt-2 pt-1.5 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-500 font-medium px-1",children:[n.jsxs("span",{className:"flex items-center gap-1",children:[n.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-emerald-500"}),"সমাপ্ত"]}),n.jsxs("span",{className:"flex items-center gap-1",children:[n.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-amber-500"}),"অসমাপ্ত"]}),n.jsxs("span",{className:"flex items-center gap-1",children:[n.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-rose-500"}),"ব্লকড"]}),n.jsxs("span",{className:"flex items-center gap-1",children:[n.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-blue-500"}),"আজ"]})]})]})]})}function Vm(){const[l,o]=p.useState(()=>{try{const c=localStorage.getItem(Rh);return c==="manual"||c==="name-asc"||c==="name-desc"?c:"manual"}catch{return"manual"}});return[l,c=>{o(c);try{localStorage.setItem(Rh,c)}catch{}}]}const l5=[{v:"manual",label:"🖐️ ম্যানুয়াল",hint:"ফিক্সড/আপনার ক্রম"},{v:"name-asc",label:"A→Z",hint:"নাম আগে→পরে"},{v:"name-desc",label:"Z→A",hint:"নাম পরে→আগে"}];function op({mode:l,onChange:o,compact:u=!1}){return n.jsx("div",{className:"inline-flex rounded-md border border-indigo-300 bg-white overflow-hidden shadow-xs",title:"স্টাফ সাজানোর ক্রম",children:l5.map(c=>n.jsx("button",{title:c.hint,onClick:()=>o(c.v),className:`${u?"px-1 py-[1px] text-[8.5px]":"px-1.5 py-0.5 text-[10px]"} font-bold transition-colors ${l===c.v?"bg-indigo-600 text-white":"bg-white text-indigo-700 hover:bg-indigo-50"}`,children:u?c.label.replace(" ম্যানুয়াল",""):c.label},c.v))})}function r5({selectedDate:l}){const[o,u]=p.useState(null),[c,d]=p.useState(!1),[A,f]=p.useState(!1),x=()=>{const G=Fn(l);u(G),d(Ie(l)),f(_t(l))};p.useEffect(()=>{x();const G=()=>x(),K=()=>x(),L=()=>x();return window.addEventListener("tx-changed",G),window.addEventListener("day-close-changed",K),window.addEventListener("day-open-changed",L),()=>{window.removeEventListener("tx-changed",G),window.removeEventListener("day-close-changed",K),window.removeEventListener("day-open-changed",L)}},[l]);const h=({label:G,bengaliLabel:K,value:L,cls:_,subText:ue})=>n.jsxs("div",{className:`rounded-xl px-2.5 py-1.5 text-white shadow-xs flex items-center justify-between gap-2 ${_}`,children:[n.jsxs("div",{className:"min-w-0 flex-1",children:[n.jsxs("div",{className:"flex items-center gap-1 text-[11px] font-bold opacity-95 truncate",children:[n.jsx("span",{className:"truncate",children:G}),K&&n.jsxs("span",{className:"text-[10px] opacity-80 hidden md:inline font-normal",children:["(",K,")"]})]}),ue&&n.jsx("div",{className:"text-[9px] opacity-80 truncate",children:ue})]}),n.jsx("div",{className:"shrink-0 font-mono text-xs sm:text-sm font-black text-right",children:Ae(L)})]}),v=({name:G,value:K})=>n.jsxs("div",{className:"rounded-lg bg-sky-600 px-2.5 py-1 text-white shadow-xs flex items-center justify-between gap-1.5",children:[n.jsx("span",{className:"text-[11px] font-bold truncate opacity-95",children:G}),n.jsx("span",{className:"font-mono text-xs font-black text-right",children:Ae(K)})]}),[S]=Vm(),b=ss().map(G=>G.name).sort((G,K)=>Em(G,K,S)),H=G=>{var K;return((K=o==null?void 0:o.persons)==null?void 0:K[G.toLowerCase()])??0},P=b.reduce((G,K)=>G+H(K),0);return n.jsxs("div",{className:"mb-3 rounded-2xl bg-white p-2.5 sm:p-3 shadow-sm border border-slate-200",children:[n.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-5 gap-1.5 sm:gap-2",children:[n.jsxs("div",{className:"col-span-2 sm:col-span-1 flex items-center justify-between rounded-xl border border-slate-300 bg-slate-50 px-2.5 py-1.5",children:[n.jsxs("div",{className:"flex items-center gap-1.5",children:[n.jsx("span",{className:"text-[11px] font-bold text-slate-500",children:"Date"}),c?n.jsx("span",{className:"rounded bg-rose-100 px-1.5 py-0.5 text-[9px] font-black text-rose-700 border border-rose-300",children:"🔒 Closed"}):A?n.jsx("span",{className:"rounded bg-emerald-100 px-1.5 py-0.5 text-[9px] font-black text-emerald-800 border border-emerald-300",children:"☀️ Open"}):n.jsx("span",{className:"rounded bg-amber-100 px-1.5 py-0.5 text-[9px] font-black text-amber-800 border border-amber-300",children:"⏳ Not Opened"})]}),n.jsx("div",{className:"truncate font-mono text-xs font-black text-slate-900",children:Ze(l)||l})]}),n.jsx(h,{label:"Cash in Hand",value:(o==null?void 0:o.cash)??0,cls:"bg-emerald-600",subText:`Prev: ${Ae((o==null?void 0:o.prevCash)??0)}`}),n.jsx(h,{label:"Bank Balance",value:(o==null?void 0:o.bank)??0,cls:"bg-indigo-600",subText:`Prev: ${Ae((o==null?void 0:o.prevBank)??0)}`}),n.jsx(h,{label:"Total Receive",value:(o==null?void 0:o.receive)??0,cls:"bg-green-700",subText:`Today: ${Ae((o==null?void 0:o.todayReceiveOnly)??0)}`}),n.jsx(h,{label:"Total Payment",value:(o==null?void 0:o.expense)??0,cls:"bg-rose-600",subText:`Today: ${Ae((o==null?void 0:o.todayPayment)??0)}`})]}),n.jsxs("div",{className:"mt-2 pt-1.5 border-t border-slate-100",children:[n.jsxs("div",{className:"mb-1 flex items-center justify-between px-1",children:[n.jsx("div",{className:"text-[11px] font-bold text-slate-700 flex items-center gap-1.5",children:n.jsx("span",{children:"👥 Staff Wise"})}),n.jsxs("div",{className:"text-[11px] font-mono font-black text-sky-800 bg-sky-50 px-2 py-0.2 rounded border border-sky-200",children:["Total: ",Ae(P)]})]}),n.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-1.5",children:[b.map(G=>n.jsx(p.Fragment,{children:n.jsx(v,{name:G,value:H(G)})},G)),b.length===0&&n.jsx("div",{className:"col-span-2 text-[10px] font-semibold text-slate-400 px-1 py-1",children:"কর্মী নেই — Receive পেজের Category ⚙️ Manage-এ Staff Name যোগ করুন"})]})]})]})}function Zh({value:l,onChange:o,cats:u,onManageClick:c,disabled:d=!1}){const[A,f]=p.useState(!1),x=p.useRef(null),h=p.useRef(0),v=p.useRef(null),S=()=>{h.current=Date.now()},b=()=>Date.now()-h.current<600,H=()=>{const q=document.activeElement;q&&(q.tagName==="INPUT"||q.tagName==="TEXTAREA")&&q.blur()};p.useEffect(()=>{if(!A)return;function q(k){if(x.current&&!x.current.contains(k.target)){const V=k.target,ce=!!V&&(V.tagName==="INPUT"||V.tagName==="TEXTAREA"||V.tagName==="SELECT");f(!1),ce||H()}}return document.addEventListener("pointerdown",q),()=>{document.removeEventListener("pointerdown",q)}},[A]);const P=(l||"").trim().toLowerCase(),G=p.useMemo(()=>{const q=new Set;return u.forEach(k=>{const V=typeof k=="string"?k:k.name;V&&V.trim()&&q.add(V.trim().toLowerCase())}),Array.from(q)},[u]),K=G,L=q=>{o(q),f(!1),H()},_=q=>{q.button===0&&(q.preventDefault(),v.current=q.currentTarget,S())},ue=q=>{q.button!==0||d||v.current!==q.currentTarget||(S(),f(k=>(k&&H(),!k)))},C=()=>{d||b()||f(q=>!q)};return n.jsxs("div",{className:"relative w-full",ref:x,children:[n.jsxs("button",{type:"button",disabled:d,"aria-haspopup":"listbox","aria-expanded":A,onPointerDown:_,onPointerUp:ue,onClick:C,onKeyDown:q=>{q.key==="Escape"&&A&&(q.stopPropagation(),f(!1),H())},className:`w-full h-[42px] rounded-xl border px-3 py-2 text-left text-sm font-bold shadow-xs transition cursor-pointer flex items-center justify-between ${d?"bg-slate-100":"bg-orange-50"} ${A?"border-blue-600 ring-2 ring-blue-500/20":"border-slate-300 hover:border-orange-300 hover:bg-orange-100/60"} ${d?"opacity-50 cursor-not-allowed":""}`,children:[n.jsx("div",{className:"flex items-center gap-2 truncate",children:l?n.jsx("span",{className:"text-slate-900 font-bold truncate",children:mt(l)}):n.jsx("span",{className:"text-slate-400 font-medium",children:"-- Select Category --"})}),n.jsxs("div",{className:"flex items-center gap-1.5 shrink-0 ml-2",children:[l&&n.jsx("span",{onPointerDown:q=>{q.stopPropagation(),_(q)},onPointerUp:q=>{q.stopPropagation(),!(q.button!==0||v.current!==q.currentTarget)&&(S(),o(""))},onClick:q=>{q.stopPropagation(),!b()&&o("")},className:"p-1 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-md cursor-pointer text-xs transition",title:"Clear Category",children:"✕"}),n.jsx("span",{className:`text-slate-400 text-xs transition-transform duration-200 ${A?"rotate-180":""}`,children:"▼"})]})]}),A&&n.jsxs("div",{role:"listbox",className:"absolute left-0 right-0 z-50 mt-1.5 rounded-2xl border border-slate-200 bg-white shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150 flex flex-col max-h-80",children:[n.jsxs("div",{className:"p-2.5 border-b border-slate-100 bg-slate-50 flex items-center justify-between gap-2 shrink-0",children:[n.jsx("span",{className:"pl-1 text-xs sm:text-sm font-bold text-slate-500",children:"📋 ক্যাটাগরি সিলেক্ট করুন"}),n.jsx("span",{className:"text-[10px] font-bold text-slate-400 bg-slate-200/70 px-1.5 py-0.5 rounded-md",children:G.length})]}),n.jsx("div",{className:"overflow-y-auto max-h-60 p-1.5 space-y-0.5",children:K.length>0?K.map(q=>{const k=q.toLowerCase()===P;return n.jsxs("button",{type:"button",role:"option","aria-selected":k,onPointerDown:_,onPointerUp:V=>{V.button!==0||v.current!==V.currentTarget||(S(),L(q))},onClick:()=>{b()||L(q)},className:`w-full text-left px-3 py-2 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer flex items-center justify-between ${k?"bg-blue-50 text-blue-900 border border-blue-200 shadow-2xs font-extrabold":"hover:bg-slate-100 text-slate-700 hover:text-slate-900"}`,children:[n.jsxs("div",{className:"flex items-center gap-2.5 truncate",children:[n.jsx("span",{className:`h-2 w-2 rounded-full shrink-0 ${k?"bg-blue-600 ring-2 ring-blue-300":"bg-slate-300"}`}),n.jsx("span",{className:"truncate",children:mt(q)})]}),k&&n.jsx("span",{className:"text-blue-600 font-black text-sm pl-2",children:"✓"})]},q)}):n.jsxs("div",{className:"py-8 text-center text-xs text-slate-400 font-semibold flex flex-col items-center gap-1",children:[n.jsx("span",{children:"🔍"}),n.jsx("span",{children:"No category found"})]})}),n.jsxs("div",{className:"p-2 border-t border-slate-100 bg-slate-50 flex items-center justify-between shrink-0 text-xs",children:[n.jsxs("span",{className:"text-[11px] text-slate-500 font-medium",children:["Total: ",K.length," categories"]}),c&&n.jsxs("button",{type:"button",onPointerDown:_,onPointerUp:q=>{q.button!==0||v.current!==q.currentTarget||(S(),f(!1),c())},onClick:()=>{b()||(f(!1),c())},className:"text-xs font-black text-blue-600 hover:text-blue-800 hover:underline cursor-pointer flex items-center gap-1",children:[n.jsx("span",{children:"⚙️"}),n.jsx("span",{children:"Manage Categories"})]})]})]})]})}function Zn({value:l,onChange:o,options:u,placeholder:c="-- Select --",disabled:d=!1,className:A="",noKeyboardOnMobile:f=!1}){const[x,h]=p.useState(!1),[v,S]=p.useState(""),b=p.useRef(null),H=p.useRef(!1),P=p.useMemo(()=>typeof window<"u"&&typeof window.matchMedia=="function"&&window.matchMedia("(pointer: coarse)").matches,[]),G=f&&P,K=p.useMemo(()=>u.map(C=>typeof C=="string"?{value:C,label:C}:C),[u]),L=K.find(C=>C.value===l);p.useEffect(()=>{const C=q=>{b.current&&!b.current.contains(q.target)&&h(!1)};return document.addEventListener("mousedown",C),document.addEventListener("touchstart",C),()=>{document.removeEventListener("mousedown",C),document.removeEventListener("touchstart",C)}},[]);const _=v.trim().toLowerCase(),ue=_?K.filter(C=>(C.label||C.value).toLowerCase().includes(_)):K;return n.jsxs("div",{className:"relative",ref:b,children:[n.jsx("input",{value:x?v:l?L?L.label||L.value:l:"",placeholder:c,disabled:d,onFocus:()=>{d||(H.current=!0,h(!0),S(""))},onClick:()=>{if(!d){if(H.current){H.current=!1;return}x?G&&h(!1):(h(!0),S(""))}},onChange:C=>{S(C.target.value),h(!0)},onKeyDown:C=>{C.key==="Escape"&&h(!1),C.key==="Enter"&&C.preventDefault()},className:A,autoComplete:"off",spellCheck:!1,readOnly:G,inputMode:G?"none":void 0}),x&&!d&&n.jsx("div",{className:"absolute left-0 right-0 top-full z-40 mt-1 max-h-56 overflow-auto rounded-xl border border-slate-300 bg-white shadow-2xl",children:ue.length===0?n.jsx("div",{className:"px-3 py-2 text-xs font-semibold text-slate-500",children:"কোনো মিল নেই"}):ue.map(C=>n.jsx("button",{type:"button",onMouseDown:q=>q.preventDefault(),onClick:()=>{o(C.value),h(!1),S("")},className:`block w-full cursor-pointer px-3 py-1.5 text-left text-sm font-semibold ${C.value===l?"bg-blue-100 text-blue-900":"text-slate-800 hover:bg-slate-100"}`,children:C.label||C.value},C.value))})]})}const Us=[1e3,500,200,100,50,20,10,5,2,1],en=Us.length+1;function zh(){if(typeof window>"u")return!1;const l=navigator.userAgent||"",o=/Android|iPhone|iPad|iPod|Mobile|Windows Phone|Opera Mini/i.test(l),u="ontouchstart"in window||navigator.maxTouchPoints>0,c=window.innerWidth<768;return o||u&&c}function Nm({open:l,onClose:o,targetAmount:u,date:c,onApplyAmount:d,hideSummary:A=!1,hideOtherRow:f=!1,initialDenom:x,initialOther:h,onApplyBreakdown:v}){const S=f?en-1:en,[b,H]=p.useState(!1),[P,G]=p.useState(Array(en).fill("")),[K,L]=p.useState(Array(en).fill("")),[_,ue]=p.useState(Array(en).fill("")),[C,q]=p.useState({row:0,col:"qty"}),k=p.useRef({});p.useEffect(()=>{if(l){const te=zh();H(te);const Y=Array(en).fill("");x&&Us.forEach((Se,ye)=>{const Z=x[String(Se)]||0;Y[ye]=Z?String(Z):""}),h&&Number(h)!==0&&(Y[en-1]=String(h)),G(Y),L(Array(en).fill("")),ue(Array(en).fill("")),q({row:0,col:"qty"}),te||setTimeout(()=>{var Se;(Se=k.current["0-qty"])==null||Se.focus()},60)}},[l]);const V=(d||v)!==void 0;if(p.useEffect(()=>{if(!l||b)return;const te=Y=>{if(Y.key!=="Enter"||C.row!==S-1)return;const Se={};Us.forEach((F,Re)=>{const Oe=parseInt(P[Re]||"0",10)||0;Oe&&(Se[String(F)]=Oe)});const ye=f?0:Number(P[en-1])||0,Z=Us.reduce((F,Re,Oe)=>F+(parseInt(P[Oe]||"0",10)||0)*Re,0)+ye+K.reduce((F,Re)=>F+(Number(Re)||0),0)-_.reduce((F,Re)=>F+(Number(Re)||0),0);Z===0||!V||(Y.preventDefault(),d==null||d(Z),v==null||v(Se,ye,Z),o())};return document.addEventListener("keydown",te),()=>document.removeEventListener("keydown",te)},[l,b,C,P,K,_,S,f]),!l)return null;const ce=Us.reduce((te,Y,Se)=>{const ye=parseInt(P[Se]||"0",10)||0;return te+ye*Y},0),E=f?0:Number(P[en-1])||0,se=ce+E,ie=K.reduce((te,Y)=>te+(Number(Y)||0),0),ne=_.reduce((te,Y)=>te+(Number(Y)||0),0),me=se+ie-ne,pe=me-u,j=(d||v)&&me!==0,O=()=>{const te={};Us.forEach((Se,ye)=>{const Z=parseInt(P[ye]||"0",10)||0;Z&&(te[String(Se)]=Z)});const Y=f?0:Number(P[en-1])||0;d==null||d(me),v==null||v(te,Y,me)},R=(te,Y)=>{G(Se=>{const ye=[...Se];return ye[te]=Y,ye})},I=(te,Y)=>{L(Se=>{const ye=[...Se];return ye[te]=Y,ye})},re=(te,Y)=>{ue(Se=>{const ye=[...Se];return ye[te]=Y,ye})},ee=()=>{G(Array(en).fill("")),L(Array(en).fill("")),ue(Array(en).fill("")),q({row:0,col:"qty"})},M=(te,Y)=>{q({row:te,col:Y});const Se=`${te}-${Y}`,ye=k.current[Se];ye&&(b?ye.blur():(ye.focus(),ye.select()),ye.scrollIntoView({block:"nearest",behavior:"smooth"}))},U=te=>{const Y=["qty","credit","debit"];let{row:Se,col:ye}=C,Z=Y.indexOf(ye);te==="up"?Se=Se>0?Se-1:S-1:te==="down"?Se=Se<S-1?Se+1:0:te==="left"?(Z>0?Z--:(Z=2,Se=Se>0?Se-1:S-1),ye=Y[Z]):te==="right"&&(Z<2?Z++:(Z=0,Se=Se<S-1?Se+1:0),ye=Y[Z]),M(Se,ye)},B=te=>{const{row:Y,col:Se}=C;let ye="";Se==="qty"?ye=P[Y]||"":Se==="credit"?ye=K[Y]||"":Se==="debit"&&(ye=_[Y]||"");const Z=Se==="credit"||Se==="debit"||Y===en-1;let F=ye;if(te==="⌫")F=ye.slice(0,-1);else if(te==="C")F="";else if(te===".")Z&&!ye.includes(".")&&(F=(ye||"0")+".");else if(F=(ye+te).replace(/^0+(?=\d)/,""),F.length>9)return;Se==="qty"?R(Y,F):Se==="credit"?I(Y,F):Se==="debit"&&re(Y,F)},ge=({label:te,onClick:Y,className:Se=""})=>n.jsx("button",{type:"button",onPointerDown:ye=>ye.preventDefault(),onMouseDown:ye=>ye.preventDefault(),onClick:Y,className:`h-11 select-none rounded-lg text-lg font-bold shadow-sm active:scale-95 active:bg-slate-300 transition ${Se}`,children:te}),y=te=>te===en-1?"Other":String(Us[te]),le=te=>te===en-1?E:(parseInt(P[te]||"0",10)||0)*Us[te];return n.jsxs("div",{className:"fixed inset-0 z-50 flex flex-col bg-white overflow-hidden w-full h-[100dvh]",children:[n.jsxs("div",{className:"flex items-center justify-between border-b bg-slate-900 px-4 py-2.5 sm:px-6 sm:py-3 text-white shrink-0",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-xl sm:text-2xl",children:"💳"}),n.jsxs("div",{children:[n.jsx("h3",{className:"font-bold text-base sm:text-lg leading-tight",children:"Payment Denomination"}),n.jsxs("p",{className:"text-xs text-slate-300 font-mono",children:["Date: ",c]})]})]}),n.jsxs("div",{className:"flex items-center gap-2",children:[zh()&&n.jsx("button",{type:"button",onClick:()=>{H(te=>!te),setTimeout(()=>{var te;(te=k.current[`${C.row}-${C.col}`])==null||te.focus()},0)},className:`rounded-lg px-2.5 py-1 text-sm font-bold transition flex items-center gap-1 ${b?"bg-blue-600 text-white":"bg-slate-800 text-slate-300 hover:bg-slate-700"}`,children:"⌨ Keypad"}),n.jsx("button",{type:"button",onClick:o,className:"flex h-8 w-8 items-center justify-center rounded-full text-2xl text-slate-300 hover:bg-slate-800 hover:text-white transition",children:"×"})]})]}),!A&&n.jsxs("div",{className:"border-b bg-slate-100 p-2 sm:p-3 shrink-0",children:[n.jsxs("div",{className:"grid grid-cols-2 gap-2 max-w-5xl mx-auto",children:[n.jsxs("div",{className:"flex flex-col justify-center rounded-xl border border-slate-300 bg-white p-2 sm:p-2.5 shadow-xs",children:[n.jsx("span",{className:"text-[11px] sm:text-xs font-bold text-slate-700 truncate",children:"Disburse/Expense"}),n.jsx("div",{className:"mt-0.5 font-mono text-sm sm:text-xl font-black text-slate-900 truncate",children:Ae(u)})]}),n.jsxs("div",{className:"flex flex-col justify-center rounded-xl border border-indigo-300 bg-indigo-50/90 p-2 sm:p-2.5 shadow-xs",children:[n.jsx("span",{className:"text-[11px] sm:text-xs font-bold text-indigo-950 truncate",children:"Total Cash"}),n.jsx("div",{className:"mt-0.5 font-mono text-sm sm:text-xl font-black text-indigo-950 truncate",children:Ae(me)})]})]}),n.jsx("div",{className:"mt-2 max-w-5xl mx-auto",children:n.jsxs("div",{className:`flex flex-row items-center justify-between gap-2 rounded-xl border p-2 sm:p-2.5 shadow-xs ${pe>0?"border-emerald-500 bg-emerald-50":pe<0?"border-rose-500 bg-rose-50":"border-blue-400 bg-blue-50"}`,children:[n.jsx("div",{className:"flex items-center justify-between gap-1",children:n.jsx("span",{className:"text-[11px] sm:text-xs font-bold text-slate-800 truncate",children:"Different"})}),n.jsx("div",{className:`mt-0.5 font-mono text-sm sm:text-xl font-black truncate ${pe>0?"text-emerald-700":pe<0?"text-rose-700":"text-blue-700"}`,children:pe>0?`+${Ae(pe)}`:pe<0?`-${Ae(Math.abs(pe))}`:"0"})]})})]}),n.jsx("div",{className:"flex-1 overflow-auto p-2 sm:p-4",children:n.jsxs("div",{className:"max-w-5xl mx-auto",children:[n.jsxs("table",{className:"w-full border-collapse border border-slate-300 text-xs sm:text-sm",children:[n.jsx("thead",{className:"sticky top-0 bg-slate-800 text-white z-10 shadow-xs",children:n.jsxs("tr",{children:[n.jsx("th",{className:"border border-slate-700 px-2 sm:px-3 py-1.5 text-center font-bold w-14 sm:w-20",children:"Note"}),n.jsx("th",{className:"border border-slate-700 px-2 sm:px-3 py-1.5 text-center font-bold w-16 sm:w-24",children:"Qty"}),n.jsx("th",{className:"border border-slate-700 px-2 sm:px-3 py-1.5 text-right font-bold w-20 sm:w-28",children:"Amount"}),n.jsx("th",{className:"border border-slate-700 px-2 sm:px-3 py-1.5 text-right font-bold bg-emerald-900 text-emerald-100 w-24 sm:w-32",children:"Credit (+)"}),n.jsx("th",{className:"border border-slate-700 px-2 sm:px-3 py-1.5 text-right font-bold bg-rose-900 text-rose-100 w-24 sm:w-32",children:"Debit (-)"})]})}),n.jsx("tbody",{children:Array.from({length:S},(te,Y)=>{const Se=Y===en-1,ye=le(Y),Z=C.row===Y&&C.col==="qty",F=C.row===Y&&C.col==="credit",Re=C.row===Y&&C.col==="debit";return n.jsxs("tr",{className:`border-b hover:bg-slate-50 transition ${Se?"bg-slate-50 font-bold border-t-2 border-slate-300":""}`,children:[n.jsx("td",{className:"border border-slate-300 px-2 py-1 text-center font-mono font-bold text-slate-900 sm:text-base",children:y(Y)}),n.jsx("td",{className:"border border-slate-300 px-1 py-1 text-center",children:n.jsx("input",{ref:Oe=>{k.current[`${Y}-qty`]=Oe},"data-grid-row":Y,"data-grid-col":"qty",type:"text",inputMode:b?"none":Se?"decimal":"numeric",readOnly:b,value:P[Y],placeholder:Se?"Any":"0",onFocus:Oe=>{b&&Oe.target.blur(),M(Y,"qty")},onTouchStart:Oe=>{b&&(Oe.preventDefault(),M(Y,"qty"))},onClick:()=>M(Y,"qty"),onChange:Oe=>R(Y,Oe.target.value),className:`w-full rounded border px-1.5 py-1 text-center font-mono text-xs sm:text-sm font-bold focus:outline-none transition select-text ${Z?"border-blue-600 bg-blue-100/60 ring-2 ring-blue-400 text-blue-950 font-black":"border-slate-300 bg-yellow-50"}`})}),n.jsx("td",{className:"border border-slate-300 px-2 py-1 text-right font-mono font-bold text-slate-900 sm:text-sm",children:ye>0?Ae(ye):"-"}),n.jsx("td",{className:"border border-slate-300 px-1 py-1 text-right bg-emerald-50/30",children:n.jsx("input",{ref:Oe=>{k.current[`${Y}-credit`]=Oe},"data-grid-row":Y,"data-grid-col":"credit",type:"text",inputMode:b?"none":"decimal",readOnly:b,value:K[Y],placeholder:"0",onFocus:Oe=>{b&&Oe.target.blur(),M(Y,"credit")},onTouchStart:Oe=>{b&&(Oe.preventDefault(),M(Y,"credit"))},onClick:()=>M(Y,"credit"),onChange:Oe=>I(Y,Oe.target.value),className:`w-full rounded border px-1.5 py-1 text-right font-mono text-xs sm:text-sm font-bold focus:outline-none transition select-text ${F?"border-emerald-600 bg-emerald-100/60 ring-2 ring-emerald-400 text-emerald-950 font-black":"border-emerald-300 bg-white text-emerald-900"}`})}),n.jsx("td",{className:"border border-slate-300 px-1 py-1 text-right bg-rose-50/30",children:n.jsx("input",{ref:Oe=>{k.current[`${Y}-debit`]=Oe},"data-grid-row":Y,"data-grid-col":"debit",type:"text",inputMode:b?"none":"decimal",readOnly:b,value:_[Y],placeholder:"0",onFocus:Oe=>{b&&Oe.target.blur(),M(Y,"debit")},onTouchStart:Oe=>{b&&(Oe.preventDefault(),M(Y,"debit"))},onClick:()=>M(Y,"debit"),onChange:Oe=>re(Y,Oe.target.value),className:`w-full rounded border px-1.5 py-1 text-right font-mono text-xs sm:text-sm font-bold focus:outline-none transition select-text ${Re?"border-rose-600 bg-rose-100/60 ring-2 ring-rose-400 text-rose-950 font-black":"border-rose-300 bg-white text-rose-900"}`})})]},Y)})}),n.jsx("tfoot",{className:"sticky bottom-0 bg-slate-100 font-bold border-t-2 border-slate-400 z-10",children:n.jsxs("tr",{children:[n.jsx("td",{colSpan:2,className:"border border-slate-300 px-2 py-1 text-right font-bold text-slate-800 text-xs",children:"Sub-Total :"}),n.jsx("td",{className:"border border-slate-300 px-2 py-1 text-right font-mono font-bold text-indigo-950 text-xs",children:Ae(se)}),n.jsxs("td",{className:"border border-slate-300 px-2 py-1 text-right font-mono font-bold text-emerald-800 text-xs",children:["+",Ae(ie)]}),n.jsxs("td",{className:"border border-slate-300 px-2 py-1 text-right font-mono font-bold text-rose-800 text-xs",children:["-",Ae(ne)]})]})})]}),n.jsxs("div",{className:"mt-2 flex items-center justify-between rounded-lg bg-blue-700 px-3.5 py-1.5 text-white shadow-sm",children:[n.jsx("span",{className:"text-xs font-bold uppercase tracking-wider",children:"Total Denomination Cash:"}),n.jsx("span",{className:"font-mono text-base sm:text-xl font-black",children:Ae(me)})]})]})}),b?n.jsx("div",{className:"border-t bg-slate-50 px-2.5 py-2 sm:px-4 sm:py-2.5 shrink-0 shadow-lg",children:n.jsxs("div",{className:"max-w-2xl mx-auto grid grid-cols-5 gap-1.5 sm:gap-2",children:[n.jsxs("div",{className:"col-span-4 grid grid-cols-4 gap-1.5 sm:gap-2",children:[["7","8","9"].map(te=>n.jsx(ge,{label:te,onClick:()=>B(te),className:"bg-white"},te)),n.jsx(ge,{label:"⌫",onClick:()=>B("⌫"),className:"bg-amber-100 text-amber-800 hover:bg-amber-200"}),["4","5","6"].map(te=>n.jsx(ge,{label:te,onClick:()=>B(te),className:"bg-white"},te)),n.jsx(ge,{label:"C",onClick:()=>B("C"),className:"bg-red-100 text-red-700 hover:bg-red-200"}),["1","2","3"].map(te=>n.jsx(ge,{label:te,onClick:()=>B(te),className:"bg-white"},te)),n.jsx(ge,{label:".",onClick:()=>B("."),className:"bg-white"}),n.jsx(ge,{label:"0",onClick:()=>B("0"),className:"bg-white"}),n.jsx(ge,{label:"00",onClick:()=>B("00"),className:"bg-white"}),n.jsx(ge,{label:"Reset",onClick:ee,className:"bg-slate-500 !text-xs sm:!text-sm text-white hover:bg-slate-600"}),j?n.jsx(ge,{label:"Apply",onClick:()=>{O(),o()},className:"bg-emerald-600 !text-xs sm:!text-sm text-white hover:bg-emerald-700 font-bold"}):n.jsx(ge,{label:"⏎",onClick:()=>U("down"),className:"bg-blue-600 !text-xs sm:!text-sm text-white hover:bg-blue-700 font-bold"})]}),n.jsxs("div",{className:"grid grid-cols-1 grid-rows-4 gap-1.5 sm:gap-2",children:[n.jsx(ge,{label:"✕ Close",onClick:o,className:"bg-rose-600 hover:bg-rose-700 text-white !text-xs sm:!text-sm font-black shadow-xs ring-1 ring-rose-400"}),n.jsx(ge,{label:"▲",onClick:()=>U("up"),className:"bg-blue-100 text-blue-800 hover:bg-blue-200"}),n.jsxs("div",{className:"grid grid-cols-2 gap-1",children:[n.jsx(ge,{label:"◄",onClick:()=>U("left"),className:"bg-blue-100 text-blue-800 !text-sm hover:bg-blue-200"}),n.jsx(ge,{label:"►",onClick:()=>U("right"),className:"bg-blue-100 text-blue-800 !text-sm hover:bg-blue-200"})]}),n.jsx(ge,{label:"▼",onClick:()=>U("down"),className:"bg-blue-100 text-blue-800 hover:bg-blue-200"})]})]})}):n.jsxs("div",{className:"flex items-center justify-between border-t bg-slate-50 px-4 py-2.5 sm:px-6 shrink-0",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("button",{type:"button",onClick:ee,className:"rounded-lg bg-slate-500 px-4 py-2 text-xs sm:text-sm font-semibold text-white hover:bg-slate-600 transition",children:"Reset"}),n.jsxs("button",{type:"button",disabled:!j,onClick:()=>{j&&(O(),o())},className:`rounded-lg px-4 py-2 text-xs sm:text-sm font-bold transition ${j?"bg-emerald-600 text-white hover:bg-emerald-700 cursor-pointer":"bg-slate-300 text-slate-500 cursor-not-allowed"}`,title:j?"মোট প্রয়োগ করুন":"আগে কোনো নোটের সংখ্যা লিখুন",children:["Apply (",Ae(me),")"]})]}),n.jsx("button",{type:"button",onClick:o,className:"rounded-lg bg-slate-900 px-8 py-2 text-xs sm:text-sm font-bold text-white hover:bg-slate-800 transition",children:"Close"})]})]})}const Qi=[1e3,500,200,100,50,20,10,5,2,1],Ca=Qi.length,vm="gobra_report_denom_entries";function om(){const l=()=>Array(Ca).fill("");try{const o=localStorage.getItem(vm);if(!o)return{qty:l(),credit:l(),debit:l()};const u=JSON.parse(o),c=d=>Array.isArray(d)?Array(Ca).fill("").map((A,f)=>String(d[f]??"")):l();return{qty:c(u.qty),credit:c(u.credit),debit:c(u.debit)}}catch{return{qty:l(),credit:l(),debit:l()}}}function Fh(){if(typeof window>"u")return!1;const l=navigator.userAgent||"",o=/Android|iPhone|iPad|iPod|Mobile|Windows Phone|Opera Mini/i.test(l),u="ontouchstart"in window||navigator.maxTouchPoints>0,c=window.innerWidth<768;return o||u&&c}function Ym({open:l,onClose:o,cashInHand:u,date:c}){const[d,A]=p.useState(!1),[f,x]=p.useState(()=>om().qty),[h,v]=p.useState(()=>om().credit),[S,b]=p.useState(()=>om().debit),[H,P]=p.useState({row:0,col:"qty"}),G=p.useRef({});if(p.useEffect(()=>{if(l){const j=Fh();A(j),P({row:0,col:"qty"}),j||setTimeout(()=>{var O;(O=G.current["0-qty"])==null||O.focus()},60)}},[l]),p.useEffect(()=>{try{localStorage.setItem(vm,JSON.stringify({qty:f,credit:h,debit:S}))}catch{}},[f,h,S]),!l)return null;const K=Qi.reduce((j,O,R)=>{const I=parseInt(f[R]||"0",10)||0;return j+I*O},0),L=h.reduce((j,O)=>j+(Number(O)||0),0),_=S.reduce((j,O)=>j+(Number(O)||0),0),ue=K+L-_,C=ue-u,q=(j,O)=>{x(R=>{const I=[...R];return I[j]=O,I})},k=(j,O)=>{v(R=>{const I=[...R];return I[j]=O,I})},V=(j,O)=>{b(R=>{const I=[...R];return I[j]=O,I})},ce=()=>{x(Array(Ca).fill("")),v(Array(Ca).fill("")),b(Array(Ca).fill("")),P({row:0,col:"qty"});try{localStorage.removeItem(vm)}catch{}},E=(j,O)=>{P({row:j,col:O});const R=`${j}-${O}`,I=G.current[R];I&&(d?I.blur():(I.focus(),I.select()),I.scrollIntoView({block:"nearest",behavior:"smooth"}))},se=j=>{const O=["qty","credit","debit"];let{row:R,col:I}=H,re=O.indexOf(I);j==="up"?R=R>0?R-1:Ca-1:j==="down"?R=R<Ca-1?R+1:0:j==="left"?(re>0?re--:(re=2,R=R>0?R-1:Ca-1),I=O[re]):j==="right"&&(re<2?re++:(re=0,R=R<Ca-1?R+1:0),I=O[re]),E(R,I)},ie=j=>{const{row:O,col:R}=H;let I="";R==="qty"?I=f[O]||"":R==="credit"?I=h[O]||"":R==="debit"&&(I=S[O]||"");const re=R==="credit"||R==="debit";let ee=I;if(j==="⌫")ee=I.slice(0,-1);else if(j==="C")ee="";else if(j===".")re&&!I.includes(".")&&(ee=(I||"0")+".");else if(ee=(I+j).replace(/^0+(?=\d)/,""),ee.length>9)return;R==="qty"?q(O,ee):R==="credit"?k(O,ee):R==="debit"&&V(O,ee)},ne=({label:j,onClick:O,className:R=""})=>n.jsx("button",{type:"button",onPointerDown:I=>I.preventDefault(),onMouseDown:I=>I.preventDefault(),onClick:O,className:`h-11 select-none rounded-lg text-lg font-bold shadow-sm active:scale-95 active:bg-slate-300 transition ${R}`,children:j}),me=j=>String(Qi[j]),pe=j=>(parseInt(f[j]||"0",10)||0)*Qi[j];return n.jsxs("div",{className:"fixed inset-0 z-50 flex flex-col bg-white overflow-hidden w-full h-[100dvh]",children:[n.jsxs("div",{className:"flex items-center justify-between border-b bg-slate-900 px-4 py-2.5 sm:px-6 sm:py-3 text-white shrink-0",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-xl sm:text-2xl",children:"💰"}),n.jsxs("div",{children:[n.jsx("h3",{className:"font-bold text-base sm:text-lg leading-tight",children:"Denomination"}),n.jsxs("p",{className:"text-xs text-slate-300 font-mono",children:["Date: ",c]})]})]}),n.jsxs("div",{className:"flex items-center gap-2",children:[Fh()&&n.jsx("button",{type:"button",onClick:()=>{A(j=>!j),setTimeout(()=>{var j;(j=G.current[`${H.row}-${H.col}`])==null||j.focus()},0)},className:`rounded-lg px-2.5 py-1 text-sm font-bold transition flex items-center gap-1 ${d?"bg-blue-600 text-white":"bg-slate-800 text-slate-300 hover:bg-slate-700"}`,children:"⌨ Keypad"}),n.jsx("button",{type:"button",onClick:o,className:"flex h-8 w-8 items-center justify-center rounded-full text-2xl text-slate-300 hover:bg-slate-800 hover:text-white transition",children:"×"})]})]}),n.jsx("div",{className:"border-b bg-slate-100 p-2 sm:p-3 shrink-0",children:n.jsxs("div",{className:"grid grid-cols-3 gap-2 max-w-5xl mx-auto",children:[n.jsxs("div",{className:"flex flex-col justify-center rounded-xl border border-slate-300 bg-white p-2 sm:p-2.5 shadow-xs",children:[n.jsx("span",{className:"text-[11px] sm:text-xs font-bold text-slate-700 truncate",children:"Cash in Hand"}),n.jsx("div",{className:"mt-0.5 font-mono text-sm sm:text-xl font-black text-slate-900 truncate",children:Ae(u)})]}),n.jsxs("div",{className:"flex flex-col justify-center rounded-xl border border-indigo-300 bg-indigo-50/90 p-2 sm:p-2.5 shadow-xs",children:[n.jsx("span",{className:"text-[11px] sm:text-xs font-bold text-indigo-950 truncate",children:"Total Cash"}),n.jsx("div",{className:"mt-0.5 font-mono text-sm sm:text-xl font-black text-indigo-950 truncate",children:Ae(ue)})]}),n.jsxs("div",{className:`flex flex-col justify-center rounded-xl border p-2 sm:p-2.5 shadow-xs ${C>0?"border-emerald-500 bg-emerald-50":C<0?"border-rose-500 bg-rose-50":"border-blue-400 bg-blue-50"}`,children:[n.jsx("div",{className:"flex items-center justify-between gap-1",children:n.jsx("span",{className:"text-[11px] sm:text-xs font-bold text-slate-800 truncate",children:"Different"})}),n.jsx("div",{className:`mt-0.5 font-mono text-sm sm:text-xl font-black truncate ${C>0?"text-emerald-700":C<0?"text-rose-700":"text-blue-700"}`,children:C>0?`+${Ae(C)}`:C<0?`-${Ae(Math.abs(C))}`:"0"})]})]})}),n.jsx("div",{className:"flex-1 overflow-auto p-2 sm:p-4",children:n.jsxs("div",{className:"max-w-5xl mx-auto",children:[n.jsxs("table",{className:"w-full border-collapse border border-slate-300 text-xs sm:text-sm",children:[n.jsx("thead",{className:"sticky top-0 bg-slate-800 text-white z-10 shadow-xs",children:n.jsxs("tr",{children:[n.jsx("th",{className:"border border-slate-700 px-2 sm:px-3 py-1.5 text-center font-bold w-14 sm:w-20",children:"Note"}),n.jsx("th",{className:"border border-slate-700 px-2 sm:px-3 py-1.5 text-center font-bold w-16 sm:w-24",children:"Qty"}),n.jsx("th",{className:"border border-slate-700 px-2 sm:px-3 py-1.5 text-right font-bold w-20 sm:w-28",children:"Amount"}),n.jsx("th",{className:"border border-slate-700 px-2 sm:px-3 py-1.5 text-right font-bold bg-emerald-900 text-emerald-100 w-24 sm:w-32",children:"Credit (+)"}),n.jsx("th",{className:"border border-slate-700 px-2 sm:px-3 py-1.5 text-right font-bold bg-rose-900 text-rose-100 w-24 sm:w-32",children:"Debit (-)"})]})}),n.jsx("tbody",{children:Array.from({length:Ca},(j,O)=>{const R=pe(O),I=H.row===O&&H.col==="qty",re=H.row===O&&H.col==="credit",ee=H.row===O&&H.col==="debit";return n.jsxs("tr",{className:"border-b hover:bg-slate-50 transition",children:[n.jsx("td",{className:"border border-slate-300 px-2 py-1 text-center font-mono font-bold text-slate-900 sm:text-base",children:me(O)}),n.jsx("td",{className:"border border-slate-300 px-1 py-1 text-center",children:n.jsx("input",{ref:M=>{G.current[`${O}-qty`]=M},"data-grid-row":O,"data-grid-col":"qty",type:"text",inputMode:d?"none":"numeric",readOnly:d,value:f[O],placeholder:"0",onFocus:M=>{d&&M.target.blur(),E(O,"qty")},onTouchStart:M=>{d&&(M.preventDefault(),E(O,"qty"))},onClick:()=>E(O,"qty"),onChange:M=>q(O,M.target.value),className:`w-full rounded border px-1.5 py-1 text-center font-mono text-xs sm:text-sm font-bold focus:outline-none transition select-text ${I?"border-blue-600 bg-blue-100/60 ring-2 ring-blue-400 text-blue-950 font-black":"border-slate-300 bg-yellow-50"}`})}),n.jsx("td",{className:"border border-slate-300 px-2 py-1 text-right font-mono font-bold text-slate-900 sm:text-sm",children:R>0?Ae(R):"-"}),n.jsx("td",{className:"border border-slate-300 px-1 py-1 text-right bg-emerald-50/30",children:n.jsx("input",{ref:M=>{G.current[`${O}-credit`]=M},"data-grid-row":O,"data-grid-col":"credit",type:"text",inputMode:d?"none":"decimal",readOnly:d,value:h[O],placeholder:"0",onFocus:M=>{d&&M.target.blur(),E(O,"credit")},onTouchStart:M=>{d&&(M.preventDefault(),E(O,"credit"))},onClick:()=>E(O,"credit"),onChange:M=>k(O,M.target.value),className:`w-full rounded border px-1.5 py-1 text-right font-mono text-xs sm:text-sm font-bold focus:outline-none transition select-text ${re?"border-emerald-600 bg-emerald-100/60 ring-2 ring-emerald-400 text-emerald-950 font-black":"border-emerald-300 bg-white text-emerald-900"}`})}),n.jsx("td",{className:"border border-slate-300 px-1 py-1 text-right bg-rose-50/30",children:n.jsx("input",{ref:M=>{G.current[`${O}-debit`]=M},"data-grid-row":O,"data-grid-col":"debit",type:"text",inputMode:d?"none":"decimal",readOnly:d,value:S[O],placeholder:"0",onFocus:M=>{d&&M.target.blur(),E(O,"debit")},onTouchStart:M=>{d&&(M.preventDefault(),E(O,"debit"))},onClick:()=>E(O,"debit"),onChange:M=>V(O,M.target.value),className:`w-full rounded border px-1.5 py-1 text-right font-mono text-xs sm:text-sm font-bold focus:outline-none transition select-text ${ee?"border-rose-600 bg-rose-100/60 ring-2 ring-rose-400 text-rose-950 font-black":"border-rose-300 bg-white text-rose-900"}`})})]},O)})}),n.jsx("tfoot",{className:"sticky bottom-0 bg-slate-100 font-bold border-t-2 border-slate-400 z-10",children:n.jsxs("tr",{children:[n.jsx("td",{colSpan:2,className:"border border-slate-300 px-2 py-1 text-right font-bold text-slate-800 text-xs",children:"Sub-Total :"}),n.jsx("td",{className:"border border-slate-300 px-2 py-1 text-right font-mono font-bold text-indigo-950 text-xs",children:Ae(K)}),n.jsxs("td",{className:"border border-slate-300 px-2 py-1 text-right font-mono font-bold text-emerald-800 text-xs",children:["+",Ae(L)]}),n.jsxs("td",{className:"border border-slate-300 px-2 py-1 text-right font-mono font-bold text-rose-800 text-xs",children:["-",Ae(_)]})]})})]}),n.jsxs("div",{className:"mt-2 flex items-center justify-between rounded-lg bg-blue-700 px-3.5 py-1.5 text-white shadow-sm",children:[n.jsx("span",{className:"text-xs font-bold uppercase tracking-wider",children:"Total Denomination Cash:"}),n.jsx("span",{className:"font-mono text-base sm:text-xl font-black",children:Ae(ue)})]})]})}),d?n.jsx("div",{className:"border-t bg-slate-50 px-2.5 py-2 sm:px-4 sm:py-2.5 shrink-0 shadow-lg",children:n.jsxs("div",{className:"max-w-2xl mx-auto grid grid-cols-5 gap-1.5 sm:gap-2",children:[n.jsxs("div",{className:"col-span-4 grid grid-cols-4 gap-1.5 sm:gap-2",children:[["7","8","9"].map(j=>n.jsx(ne,{label:j,onClick:()=>ie(j),className:"bg-white"},j)),n.jsx(ne,{label:"⌫",onClick:()=>ie("⌫"),className:"bg-amber-100 text-amber-800 hover:bg-amber-200"}),["4","5","6"].map(j=>n.jsx(ne,{label:j,onClick:()=>ie(j),className:"bg-white"},j)),n.jsx(ne,{label:"C",onClick:()=>ie("C"),className:"bg-red-100 text-red-700 hover:bg-red-200"}),["1","2","3"].map(j=>n.jsx(ne,{label:j,onClick:()=>ie(j),className:"bg-white"},j)),n.jsx(ne,{label:".",onClick:()=>ie("."),className:"bg-white"}),n.jsx(ne,{label:"0",onClick:()=>ie("0"),className:"bg-white"}),n.jsx(ne,{label:"00",onClick:()=>ie("00"),className:"bg-white"}),n.jsx(ne,{label:"Reset",onClick:ce,className:"bg-slate-500 !text-xs sm:!text-sm text-white hover:bg-slate-600"}),n.jsx(ne,{label:"⏎",onClick:()=>se("down"),className:"bg-blue-600 !text-xs sm:!text-sm text-white hover:bg-blue-700 font-bold"})]}),n.jsxs("div",{className:"grid grid-cols-1 grid-rows-4 gap-1.5 sm:gap-2",children:[n.jsx(ne,{label:"✕ Close",onClick:o,className:"bg-rose-600 hover:bg-rose-700 text-white !text-xs sm:!text-sm font-black shadow-xs ring-1 ring-rose-400"}),n.jsx(ne,{label:"▲",onClick:()=>se("up"),className:"bg-blue-100 text-blue-800 hover:bg-blue-200"}),n.jsxs("div",{className:"grid grid-cols-2 gap-1",children:[n.jsx(ne,{label:"◄",onClick:()=>se("left"),className:"bg-blue-100 text-blue-800 !text-sm hover:bg-blue-200"}),n.jsx(ne,{label:"►",onClick:()=>se("right"),className:"bg-blue-100 text-blue-800 !text-sm hover:bg-blue-200"})]}),n.jsx(ne,{label:"▼",onClick:()=>se("down"),className:"bg-blue-100 text-blue-800 hover:bg-blue-200"})]})]})}):n.jsxs("div",{className:"flex items-center justify-between border-t bg-slate-50 px-4 py-2.5 sm:px-6 shrink-0",children:[n.jsx("button",{type:"button",onClick:ce,className:"rounded-lg bg-slate-500 px-5 py-2 text-xs sm:text-sm font-semibold text-white hover:bg-slate-600 transition",children:"Reset"}),n.jsx("button",{type:"button",onClick:o,className:"rounded-lg bg-slate-900 px-8 py-2 text-xs sm:text-sm font-bold text-white hover:bg-slate-800 transition",children:"Close"})]})]})}function o5({type:l,cats:o,onChanged:u,onClose:c}){const[d,A]=p.useState(""),[f,x]=p.useState(""),[h,v]=p.useState(null),[S,b]=p.useState(""),[H,P]=p.useState(""),[G,K]=p.useState(0),L=G>=0?ss():[],[_,ue]=Vm(),C=[...L].sort((O,R)=>Em(O.name,R.name,_)),q=l==="receive",k=C.map(O=>O.name.toLowerCase()),V=q?o.filter(O=>k.includes(O.name.toLowerCase())):[],ce=q?o.filter(O=>!k.includes(O.name.toLowerCase())):o,E=()=>{if(d.trim()){if(o.some(O=>O.name.toLowerCase()===d.trim().toLowerCase()))return P("Already exists");Rm(l,d),P(""),A(""),u()}},se=()=>{const O=f.trim();if(O){if(k.some(R=>R===O.toLowerCase())||o.some(R=>R.name.toLowerCase()===O.toLowerCase()))return P("Already exists");YR(O),Rm("receive",O),P(""),x(""),K(R=>R+1),u()}},ie=(O,R)=>{VR(O,R),K(I=>I+1)},ne=(O,R)=>{if(!confirm(`"${mt(R)}" কর্মী মুছবেন? আগের এন্ট্রিগুলো রিপোর্টে থেকে যাবে।`))return;qR(O);const I=V.find(re=>re.name.toLowerCase()===R.toLowerCase());I&&Sm(I.id),K(re=>re+1),u()},me=()=>{!h||!S.trim()||(ap(h,S),v(null),u())},pe=O=>{confirm("Delete this category?")&&(Sm(O),u())},j=(O,R)=>{sp(l,O,R),u()};return n.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-3 sm:p-4",children:n.jsxs("div",{className:"w-full max-w-md rounded-2xl bg-white shadow-2xl overflow-hidden border border-slate-300",children:[n.jsxs("div",{className:"flex items-center justify-between border-b bg-slate-900 px-5 py-3 text-white",children:[n.jsxs("h3",{className:"text-base sm:text-lg font-bold",children:[mt(l)," Categories"]}),n.jsx("button",{onClick:c,className:"text-2xl text-slate-300 hover:text-white",children:"×"})]}),n.jsxs("div",{className:"p-4 sm:p-5 overflow-y-auto max-h-[85dvh]",children:[H&&n.jsx("p",{className:"mt-1 text-xs text-rose-600 font-semibold",children:H}),q&&n.jsxs("div",{className:"rounded-xl border-2 border-indigo-200 bg-indigo-50/50 p-3 mb-4",children:[n.jsxs("div",{className:"flex items-center justify-between gap-2",children:[n.jsx("div",{className:"text-[13px] font-black text-indigo-900",children:"👷 Staff Name"}),n.jsx(op,{mode:_,onChange:ue})]}),n.jsx("div",{className:"text-[10px] font-semibold text-slate-500 mt-0.5",children:"কর্মীর নাম এখানেই যোগ করুন — Dena/Poana ও Staff Collection টেবিল এই তালিকাতেই চলে। নতুন অফিসে একদম খালি থাকে। 🖐️ ম্যানুয়ালে ↑↓ চেপে নিজের ক্রম সাজান — সব জায়গায় সেই ক্রমই আসবে।"}),n.jsxs("div",{className:"mt-2 flex gap-2",children:[n.jsx("input",{value:f,onChange:O=>x(O.target.value),onKeyDown:O=>O.key==="Enter"&&se(),placeholder:"নতুন কর্মীর নাম",className:"flex-1 rounded-lg border border-indigo-300 bg-white px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none"}),n.jsx("button",{onClick:se,className:"rounded-lg bg-indigo-600 px-4 py-2 font-bold text-xs sm:text-sm text-white hover:bg-indigo-700 shadow-xs",children:"Add"})]}),n.jsxs("ul",{className:"mt-2 max-h-40 divide-y divide-indigo-100 rounded-xl border border-indigo-200 bg-white overflow-auto",children:[C.map((O,R)=>n.jsxs("li",{className:"flex items-center gap-2 px-3 py-2",children:[n.jsxs("span",{className:"flex-1 text-sm font-bold text-slate-800",children:["👷 ",mt(O.name)]}),_==="manual"&&n.jsxs(n.Fragment,{children:[n.jsx("button",{onClick:()=>ie(O.id,-1),disabled:R===0,className:"rounded-md bg-slate-200 px-1.5 py-1 text-xs font-black text-slate-700 hover:bg-slate-300 disabled:opacity-30 disabled:cursor-not-allowed",children:"↑"}),n.jsx("button",{onClick:()=>ie(O.id,1),disabled:R===C.length-1,className:"rounded-md bg-slate-200 px-1.5 py-1 text-xs font-black text-slate-700 hover:bg-slate-300 disabled:opacity-30 disabled:cursor-not-allowed",children:"↓"})]}),n.jsx("button",{onClick:()=>ne(O.id,O.name),className:"rounded bg-rose-600 px-2.5 py-1 text-xs font-semibold text-white hover:bg-rose-700",children:"Delete"})]},O.id)),C.length===0&&n.jsx("li",{className:"px-3 py-4 text-center text-xs text-slate-400",children:"কর্মী নেই — নাম লিখে Add চাপুন"})]})]}),q&&n.jsx("div",{className:"text-[13px] font-black text-slate-700 mb-1.5",children:"🗂️ Unique ক্যাটাগরি (সাধারণ জমা-খাত)"}),n.jsxs("div",{className:"flex gap-2",children:[n.jsx("input",{value:d,onChange:O=>A(O.target.value),onKeyDown:O=>O.key==="Enter"&&E(),placeholder:q?"নতুন ক্যাটাগরির নাম":"New category name",className:"flex-1 rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"}),n.jsx("button",{onClick:E,className:"rounded-lg bg-emerald-600 px-4 py-2 font-bold text-xs sm:text-sm text-white hover:bg-emerald-700 shadow-xs",children:"Add"})]}),n.jsx("p",{className:"mt-3 text-[11px] font-semibold text-slate-400",children:"↑↓ চেপে ক্যাটাগরি নিজের মতো সাজান — ড্রপডাউনেও এই ক্রমই আসবে"}),n.jsxs("ul",{className:"mt-1 max-h-64 divide-y rounded-xl border border-slate-200 overflow-auto",children:[ce.map((O,R)=>n.jsx("li",{className:"flex items-center gap-2 px-3 py-2 hover:bg-slate-50",children:h===O.id?n.jsxs(n.Fragment,{children:[n.jsx("input",{value:S,autoFocus:!0,onChange:I=>b(I.target.value),onKeyDown:I=>I.key==="Enter"&&me(),className:"flex-1 rounded border border-slate-300 px-2 py-1 text-xs font-semibold focus:border-blue-500 focus:outline-none"}),n.jsx("button",{onClick:me,className:"rounded bg-blue-600 px-3 py-1 text-xs font-bold text-white",children:"Save"}),n.jsx("button",{onClick:()=>v(null),className:"rounded bg-slate-400 px-3 py-1 text-xs font-semibold text-white",children:"Cancel"})]}):n.jsxs(n.Fragment,{children:[n.jsx("span",{className:"flex-1 text-sm font-semibold text-slate-800",children:mt(O.name)}),n.jsxs("span",{className:"flex items-center gap-0.5 shrink-0",children:[n.jsx("button",{title:"এক ঘর উপরে",disabled:R===0,onClick:()=>j(O.id,-1),className:"rounded-md bg-slate-200 px-1.5 py-1 text-xs font-black text-slate-700 hover:bg-slate-300 disabled:opacity-30 disabled:cursor-not-allowed",children:"↑"}),n.jsx("button",{title:"এক ঘর নিচে",disabled:R===ce.length-1,onClick:()=>j(O.id,1),className:"rounded-md bg-slate-200 px-1.5 py-1 text-xs font-black text-slate-700 hover:bg-slate-300 disabled:opacity-30 disabled:cursor-not-allowed",children:"↓"})]}),n.jsx("button",{onClick:()=>{v(O.id),b(O.name)},className:"rounded bg-blue-600 px-2.5 py-1 text-xs font-semibold text-white hover:bg-blue-700",children:"Edit"}),n.jsx("button",{onClick:()=>pe(O.id),className:"rounded bg-rose-600 px-2.5 py-1 text-xs font-semibold text-white hover:bg-rose-700",children:"Delete"})]})},O.id)),ce.length===0&&n.jsx("li",{className:"px-3 py-6 text-center text-xs text-slate-400",children:"No categories"})]})]})]})})}function ip({disburseCats:l,expenseCats:o,onChanged:u,onClose:c}){const[d,A]=p.useState("disburse"),[f,x]=p.useState(""),[h,v]=p.useState(null),[S,b]=p.useState(""),[H,P]=p.useState(""),G=d==="disburse"?l:o,K=()=>{if(!f.trim())return;const C=f.trim();if(G.some(q=>q.name.toLowerCase()===C.toLowerCase()))return P("Already exists");Rm(d,C),P(""),x(""),u()},L=()=>{!h||!S.trim()||(ap(h,S),v(null),b(""),P(""),u())},_=C=>{confirm("Delete this category?")&&(Sm(C),u())},ue=(C,q)=>{sp(d,C,q),u()};return n.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-3 sm:p-4",children:n.jsxs("div",{className:"w-full max-w-lg rounded-2xl bg-white shadow-2xl overflow-hidden border border-slate-300",children:[n.jsxs("div",{className:"flex items-center justify-between border-b bg-slate-900 px-5 py-3 text-white",children:[n.jsxs("div",{children:[n.jsx("h3",{className:"text-base sm:text-lg font-bold",children:"Manage Payment Categories"}),n.jsx("p",{className:"text-xs text-slate-300",children:"Disburse & Expense categories"})]}),n.jsx("button",{onClick:c,className:"text-2xl text-slate-300 hover:text-white",children:"×"})]}),n.jsxs("div",{className:"flex border-b bg-slate-100 p-1.5 gap-1",children:[n.jsxs("button",{type:"button",onClick:()=>{A("disburse"),P(""),x(""),v(null)},className:`flex-1 rounded-xl py-2 text-center text-xs sm:text-sm font-bold transition ${d==="disburse"?"bg-red-600 text-white shadow-sm":"text-slate-700 hover:bg-slate-200"}`,children:["1. Disburse Categories (",l.length,")"]}),n.jsxs("button",{type:"button",onClick:()=>{A("expense"),P(""),x(""),v(null)},className:`flex-1 rounded-xl py-2 text-center text-xs sm:text-sm font-bold transition ${d==="expense"?"bg-slate-800 text-white shadow-sm":"text-slate-700 hover:bg-slate-200"}`,children:["2. Expense Categories (",o.length,")"]})]}),n.jsxs("div",{className:"p-4 sm:p-5",children:[n.jsxs("div",{className:"flex gap-2",children:[n.jsx("input",{value:f,onChange:C=>x(C.target.value),onKeyDown:C=>C.key==="Enter"&&K(),placeholder:d==="disburse"?"e.g. Jagoron, Agrossor, Buniyed...":"e.g. Bank Deposit, Others Expense...",className:"flex-1 rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"}),n.jsx("button",{type:"button",onClick:K,className:"rounded-lg bg-green-600 px-4 py-2 font-bold text-xs sm:text-sm text-white hover:bg-green-700",children:"Add"})]}),H&&n.jsx("p",{className:"mt-1 text-xs text-rose-600 font-semibold",children:H}),n.jsx("p",{className:"mt-3 text-[11px] font-semibold text-slate-400",children:"↑↓ চেপে ক্যাটাগরি নিজের মতো সাজান — ড্রপডাউনেও এই ক্রমই আসবে"}),n.jsx("ul",{className:"mt-1 max-h-64 divide-y rounded-xl border border-slate-200 overflow-auto",children:G.length===0?n.jsx("li",{className:"px-3 py-6 text-center text-xs text-slate-400",children:"No categories"}):G.map((C,q)=>n.jsx("li",{className:"flex items-center gap-2 px-3 py-2 hover:bg-slate-50",children:h===C.id?n.jsxs(n.Fragment,{children:[n.jsx("input",{value:S,autoFocus:!0,onChange:k=>b(k.target.value),onKeyDown:k=>k.key==="Enter"&&L(),className:"flex-1 rounded border border-slate-300 px-2 py-1 text-xs font-semibold focus:border-blue-500 focus:outline-none"}),n.jsx("button",{onClick:L,className:"rounded bg-blue-600 px-3 py-1 text-xs font-bold text-white",children:"Save"}),n.jsx("button",{onClick:()=>v(null),className:"rounded bg-slate-400 px-3 py-1 text-xs font-semibold text-white",children:"Cancel"})]}):n.jsxs(n.Fragment,{children:[n.jsx("span",{className:"flex-1 text-sm font-semibold text-slate-800",children:mt(C.name)}),n.jsxs("span",{className:"flex items-center gap-0.5 shrink-0",children:[n.jsx("button",{type:"button",title:"এক ঘর উপরে",disabled:q===0,onClick:()=>ue(C.id,-1),className:"rounded-md bg-slate-200 px-1.5 py-1 text-xs font-black text-slate-700 hover:bg-slate-300 disabled:opacity-30 disabled:cursor-not-allowed",children:"↑"}),n.jsx("button",{type:"button",title:"এক ঘর নিচে",disabled:q===G.length-1,onClick:()=>ue(C.id,1),className:"rounded-md bg-slate-200 px-1.5 py-1 text-xs font-black text-slate-700 hover:bg-slate-300 disabled:opacity-30 disabled:cursor-not-allowed",children:"↓"})]}),n.jsx("button",{type:"button",onClick:()=>{v(C.id),b(C.name)},className:"rounded bg-blue-600 px-2.5 py-1 text-xs font-semibold text-white hover:bg-blue-700",children:"Edit"}),n.jsx("button",{type:"button",onClick:()=>_(C.id),className:"rounded bg-rose-600 px-2.5 py-1 text-xs font-semibold text-white hover:bg-rose-700",children:"Delete"})]})},C.id))})]})]})})}const Ki=[{name:"Salary & Allowance",code:"5001"},{name:"Graututy",code:"7601"},{name:"Office Rent-Office",code:"6501"},{name:"Office Rent-Abashik",code:"6506"},{name:"Printing & Stationary",code:"6001"},{name:"Postage & Telephone",code:"5901"},{name:"Fuel & Lubricant",code:"5601"},{name:"Entertainment",code:"6801"},{name:"Water & Electricity",code:"5801"},{name:"Photocopy Bill",code:"6003"},{name:"Miscellaneous Exp.",code:"7011"},{name:"Bank charge",code:"5301"},{name:"Picnic",code:"7008"},{name:"Convayance",code:"5103"},{name:"Furniture & Fixture",code:"1504"},{name:"Electronics Good",code:"1505"},{name:"Crokeries / Leave Expense",code:"6004-5101"},{name:"Repair And Maintanance",code:"5707"},{name:"Legal Expen",code:"6101"},{name:"Food Bill",code:"7012"},{name:"Service Charge Jagoron",code:"5511"},{name:"Service Charge Agrossor",code:"5512"},{name:"Service Charge MDP",code:"5519"},{name:"Service Charge Buniyed",code:"5513"},{name:"Service Charge Sufolon",code:"5514"},{name:"Service Charge LRL",code:"5520"},{name:"MDP-AF",code:"5521"},{name:"LRL-2 S/C",code:"5524"},{name:"MFCE",code:"5525"},{name:"Miscellaneous Income",code:"9402"}],cp="gobra_payment_desc_history",i5=150,na=l=>l.trim().toLowerCase();function qm(){try{const l=localStorage.getItem(cp),o=l?JSON.parse(l):[];return Array.isArray(o)?o.filter(u=>typeof u=="string"&&u.trim()):[]}catch{return[]}}function oc(l){const o=String(l||"").trim();if(!(!o||o.length<2))try{let u=qm();u=[o,...u.filter(c=>na(c)!==na(o))].slice(0,i5),localStorage.setItem(cp,JSON.stringify(u)),window.dispatchEvent(new CustomEvent("payment-desc-history-changed"))}catch{}}const Jh=12;function c5(l){const o=na(String(l||""));if(!o)return[];const u=o.replace(/[^0-9]/g,""),c=/[a-z\u0980-\u09FF]/i.test(o),d=[],A=new Set,f=v=>{const S=v.kind+"|"+na(v.insert);A.has(S)||d.length>=Jh||(A.add(S),d.push(v))};if(u.length>=1){let v=0;for(const S of zn()){if(v>=4)break;const b=String(S.memberCode||"");b&&(!b.startsWith(u)&&!b.includes(u)||(v++,f({kind:"member",icon:"👤",insert:`${S.memberName||""} - ${b} - ${S.centreName||""} - ${S.centreCode||""}`.replace(/\s+-\s+-(\s|$)/g," -$1").replace(/(\s+-\s+){2,}/g," - "),title:`${S.memberName||"—"} • ${b}`,sub:`${S.centreName||"—"} • সেন্টার কোড: ${S.centreCode||"—"}`})))}}const x=Ki.filter(v=>na(v.name).startsWith(o)),h=Ki.filter(v=>!na(v.name).startsWith(o)&&na(v.name).includes(o));for(const v of[...x,...h])f({kind:"part",icon:"🧾",insert:`${v.name} (${v.code})`,title:v.name,sub:`কোড: ${v.code}`});if(u.length>=1)for(const v of Ki)v.code.replace(/-/g,"").includes(u)&&f({kind:"part",icon:"🔢",insert:`${v.name} (${v.code})`,title:v.name,sub:`কোড: ${v.code}`});if(c||u.length){let v=0;for(const S of qm()){if(v>=5)break;!na(S).includes(o)||Ki.some(H=>na(`${H.name} (${H.code})`)===na(S)||na(H.name)===na(S))||(v++,f({kind:"history",icon:"🕘",insert:S,title:S,sub:"আগের এন্ট্রি থেকে"}))}}return d.slice(0,Jh)}const Xh=12,ro=l=>String(l||"").trim().toLowerCase();function u5(l,o){return`${l.memberName||""} - ${o} - ${l.centreName||""} - ${l.centreCode||""}`.replace(/\s+-\s+-(\s|$)/g," -$1").replace(/(\s+-\s+){2,}/g," - ")}function Vh(l){const o=ro(l);if(!o)return[];const u=o.replace(/[^0-9]/g,""),c=/[a-z\u0980-\u09FF]/i.test(o),d=[],A=new Set,f=x=>{const h=x.kind+"|"+ro(x.insert);A.has(h)||d.length>=Xh||(A.add(h),d.push(x))};try{let x=0;for(const S of zn()){if(x>=5)break;const b=String(S.memberCode||"");if(!b)continue;const H=!!u&&b.includes(u),P=c&&ro(String(S.memberName||"")).includes(o);!H&&!P||(x++,f({kind:"member",icon:"👤",insert:u5(S,b),title:`${S.memberName||"—"} • ${b}`,sub:`${S.centreName||"—"} • সেন্টার কোড: ${S.centreCode||"—"}`}))}const h=new Map;for(const S of zn()){const b=String(S.centreCode||""),H=String(S.centreName||"");if(!b&&!H)continue;const P=(b||H).toLowerCase();h.has(P)||h.set(P,{code:b,name:H})}let v=0;for(const S of h.values()){if(v>=4)break;const b=!!u&&S.code.includes(u),H=c&&ro(S.name).includes(o);!b&&!H||(v++,f({kind:"part",icon:"🏛️",insert:S.name&&S.code?`${S.name} - ${S.code}`:S.name||S.code,title:S.name||S.code,sub:`সেন্টার${S.code?` • কোড: ${S.code}`:""}`}))}}catch{}try{let x=0;for(const h of qm()){if(x>=5)break;ro(h).includes(o)&&(x++,f({kind:"history",icon:"🕘",insert:h,title:h,sub:"আগের এন্ট্রি থেকে"}))}}catch{}return d.slice(0,Xh)}const Yh=l=>{if(!l||!l.includes("-"))return"";const o=new Date(l+"T00:00:00");return o.setDate(o.getDate()-1),o.toISOString().slice(0,10)};function d5({selectedDate:l}){const[o,u]=p.useState([]),[c,d]=p.useState(!1),A=()=>{d(!0),window.setTimeout(()=>d(!1),900)},[f,x]=p.useState([]),[h,v]=p.useState(!1),[S,b]=p.useState(!1),[H,P]=p.useState([]),[G,K]=p.useState([]),[L,_]=p.useState(!1),[ue,C]=p.useState(!1),[q,k]=p.useState(!1),[V,ce]=p.useState("all"),[E,se]=p.useState(l),[ie,ne]=p.useState(l),[me,pe]=p.useState(null),[j,O]=p.useState({category:"",subCategory:"",amount:0,description:"",denomination:{},otherAmount:0,txDate:l}),[R,I]=p.useState(null),[re,ee]=p.useState(()=>Ao()),[M,U]=p.useState(!1),[B,ge]=p.useState(!1),y=p.useMemo(()=>h&&j.description.trim()?Vh(j.description):[],[h,j.description]),le=p.useMemo(()=>{var xe;return S&&((xe=R==null?void 0:R.description)!=null&&xe.trim())?Vh(R.description):[]},[S,R]),te=xe=>{O(ke=>({...ke,description:xe.insert})),v(!1)},Y=xe=>{R&&I({...R,description:xe.insert}),b(!1)},[Se,ye]=p.useState(""),[Z,F]=p.useState(null),Re=()=>{const xe=ln(),ke=E<=ie?E:ie,Fe=E<=ie?ie:E,Ot=xe.filter(Zt=>Zt.type==="receive"&&Zt.txDate>=ke&&Zt.txDate<=Fe);u(Ot);const rn=Fn(E===ie?E:l);F({prevCash:rn.prevCash,prevBank:rn.prevBank,prevDate:rn.prevDate})},Oe=()=>{ee(Ao()),x(ha("receive")),P(ha("disburse")),K(ha("expense"))};p.useEffect(()=>{const xe=()=>Oe();return window.addEventListener("categories-changed",xe),()=>window.removeEventListener("categories-changed",xe)},[]),p.useEffect(()=>{se(l),ne(l),Re(),Oe(),O(ke=>({...ke,txDate:l}));const xe=()=>Re();return window.addEventListener("tx-changed",xe),()=>window.removeEventListener("tx-changed",xe)},[l]),p.useEffect(()=>{Re()},[E,ie]);const rt=j.category.trim().toLowerCase().includes("fund receive"),At=ec(j.category,re,H.map(xe=>xe.name));f.map(xe=>xe.name);const ft=()=>{if(Ie(j.txDate)){A();return}if(!_t(j.txDate)){alert(`⚠️ এই তারিখের (${j.txDate}) কর্মদিবস এখনও শুরু (Day Open) করা হয়নি। কোনো এন্ট্রি করার পূর্বে দিনটি Day Open করুন।`),window.dispatchEvent(new CustomEvent("open-day-open-modal"));return}const xe=pt(j.txDate,l);if(xe.blocked){alert(`⚠️ ${xe.reason||"দুটি কর্মদিবসের মধ্যবর্তী বন্ধের দিনে কোনো নতুন এন্ট্রি করা যাবে না।"}`);return}if(!j.category.trim())return ye("Category required");const ke=Number(j.amount)||0;if(!ke)return ye("Amount required");const Fe=ke;oc(j.description),ep({type:"receive",category:j.category.trim().toLowerCase(),subCategory:rt?j.subCategory.trim().toLowerCase():"",amount:String(Fe),description:j.description||"",denomination:j.denomination,otherAmount:String(j.otherAmount||0),txDate:j.txDate}),O({category:"",subCategory:"",amount:0,description:"",denomination:{},otherAmount:0,txDate:l}),ye(Fe<0?"ফেরত (মাইনাস) এন্ট্রি সেভ হয়েছে!":"Receive saved successfully!"),Re()},tt=()=>{if(!R||!R.id)return;if(Ie(R.txDate)){A();return}const xe=pt(R.txDate,l);if(xe.blocked){alert(`⚠️ ${xe.reason||"দুটি কর্মদিবসের মধ্যবর্তী বন্ধের দিনে কোনো পরিবর্তন করা যাবে না।"}`);return}if(!R.category.trim())return alert("Category required");if(!R.amount)return alert("Amount required");oc(R.description),tp({id:R.id,type:"receive",category:R.category.trim().toLowerCase(),subCategory:R.category.trim().toLowerCase().includes("fund receive")?(R.subCategory||"").trim().toLowerCase():"",amount:String(R.amount),description:R.description||"",denomination:R.denomination,otherAmount:String(R.otherAmount||0),txDate:R.txDate}),I(null),Re()},Le=()=>{if(me!==null){const xe=o.find(ke=>ke.id===me);if(xe&&Ie(xe.txDate)){A(),pe(null);return}np(me),pe(null),Re()}},lt=V==="all"?o:o.filter(xe=>xe.category.toLowerCase().trim()===V.toLowerCase().trim()),St=lt.reduce((xe,ke)=>xe+Number(ke.amount),0),gt=o.reduce((xe,ke)=>xe+Number(ke.amount),0),yt=Array.from(new Set(o.map(xe=>xe.category.toLowerCase().trim()).filter(Boolean)));return n.jsxs("div",{className:"space-y-6",children:[n.jsxs("div",{id:"receive-form-card",className:"rounded-2xl border-t-4 border-green-500 bg-white p-5 sm:p-6 shadow-sm border border-slate-200 transition-all",children:[n.jsxs("div",{className:"flex items-center justify-between mb-4",children:[n.jsxs("h1",{className:"text-xl sm:text-2xl font-bold text-slate-900 flex flex-wrap items-center gap-2",children:[n.jsx("span",{children:"📥"}),n.jsx("span",{children:"Receive Entry"}),Ie(j.txDate)&&n.jsx("span",{className:`shrink-0 rounded-lg border border-rose-300 bg-rose-100 px-2 py-0.5 text-[10px] font-black text-rose-700 ${c?"lock-pulse":""}`,title:"দিন সমাপ্ত (Day Closed) — হিসাব লক করা আছে",children:"🔒 Day Closed"})]}),n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("button",{type:"button",onClick:()=>k(!0),title:"Denomination — নোট গুনে ক্যাশ মেলান (রিপোর্ট উইন্ডো)","aria-label":"Denomination — Check Diff",className:"flex h-8 w-9 shrink-0 cursor-pointer items-center justify-center rounded-xl border border-amber-600 bg-amber-500 text-base leading-none shadow-xs hover:bg-amber-600 sm:text-lg",children:"💰"}),n.jsx("span",{className:"text-xs font-mono font-bold text-slate-600 bg-slate-100 px-2.5 py-1 rounded border border-slate-200",children:j.txDate})]})]}),!Ie(j.txDate)&&pt(j.txDate,l).blocked&&n.jsxs("div",{className:"mb-4 rounded-xl border border-rose-400 bg-rose-50 p-3 text-xs sm:text-sm font-bold text-rose-900 flex items-start gap-2 shadow-xs",children:[n.jsx("span",{className:"text-base shrink-0",children:"🚫"}),n.jsxs("div",{children:[n.jsx("span",{className:"block font-black text-rose-950",children:"এই তারিখটি ব্লক (কর্মদিবসের মধ্যবর্তী বন্ধের দিন)"}),n.jsx("span",{className:"text-xs text-rose-800 font-normal mt-0.5 block",children:pt(j.txDate,l).reason})]})]}),n.jsxs("div",{className:"grid gap-4 md:grid-cols-2",children:[n.jsxs("div",{className:"grid grid-cols-2 items-end gap-3 md:grid-cols-3 md:col-span-2",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"mb-1 flex items-center justify-between",children:[n.jsx("label",{className:"text-xs font-bold text-slate-700",children:"Category"}),n.jsx("button",{type:"button",onClick:()=>C(!0),className:"text-xs font-bold text-blue-600 hover:underline cursor-pointer",children:"⚙ Manage"})]}),n.jsx(Zh,{value:j.category,disabled:Ie(j.txDate),onChange:xe=>O({...j,category:xe,subCategory:""}),cats:f,onManageClick:()=>C(!0)})]}),n.jsxs("div",{children:[n.jsx("label",{className:"mb-1 block text-xs font-bold text-slate-700",children:"Amount"}),n.jsx("input",{readOnly:!0,disabled:Ie(j.txDate),value:j.amount?Ae(j.amount):"",placeholder:"",onClick:()=>{if(Ie(j.txDate)){A();return}U(!0)},onFocus:()=>{if(Ie(j.txDate)){A();return}U(!0)},className:`w-full h-[42px] rounded-lg border px-3 py-2 text-right font-mono text-lg font-bold transition shadow-2xs ${Ie(j.txDate)?"border-slate-300 bg-slate-100 text-slate-500 cursor-not-allowed opacity-60":(j.amount||0)<0?"cursor-pointer border-rose-400 bg-rose-50 text-rose-700 focus:border-rose-500 focus:outline-none hover:bg-rose-100":"cursor-pointer border-slate-300 bg-orange-50 focus:border-blue-500 focus:outline-none hover:bg-orange-100/70"}`})]}),rt&&n.jsxs("div",{className:"md:col-start-1 md:row-start-2",children:[n.jsxs("div",{className:"mb-1 flex items-center justify-between gap-2",children:[n.jsx("label",{className:"text-xs font-bold text-slate-700",children:"Sub Category (সাব ক্যাটাগরি)"}),n.jsxs("div",{className:"flex items-center gap-2",children:[j.subCategory?n.jsx("button",{type:"button",disabled:Ie(j.txDate),onClick:()=>{if(Ie(j.txDate)){A();return}O({...j,subCategory:""})},title:"সাব-ক্যাটাগরি মুছে ফেলুন (ডিলিট)",className:"cursor-pointer text-[11px] font-black text-rose-600 hover:underline disabled:cursor-not-allowed disabled:opacity-40",children:"✕ মুছুন"}):null,n.jsx("button",{type:"button",onClick:()=>_(!0),title:"Disburse Category যোগ/এডিট/ডিলিট — সেই তালিকা থেকেই এই সাব-ক্যাটাগরি আসে",className:"cursor-pointer text-[11px] font-black text-blue-600 hover:underline",children:"⚙ Manage"})]})]}),n.jsx(Zn,{value:j.subCategory,onChange:xe=>O({...j,subCategory:xe}),options:j.subCategory&&!At.includes(j.subCategory)?[...At,j.subCategory]:At,placeholder:"-- Select Sub Category --",disabled:Ie(j.txDate),className:"w-full h-[42px] rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-bold text-slate-800 focus:border-blue-500 focus:outline-none cursor-pointer"})]}),n.jsxs("div",{className:`${rt?"":"col-span-2 md:col-span-1"} md:col-start-3 md:row-start-1 relative`,children:[n.jsxs("label",{className:"mb-1 block text-xs font-bold text-slate-700",children:["Description ",n.jsx("span",{className:"text-[10px] font-black text-amber-600",children:"💡 টাইপ করলেই সাজেশন"})]}),n.jsx("input",{type:"text",disabled:Ie(j.txDate),value:j.description,onChange:xe=>O({...j,description:xe.target.value}),onFocus:()=>v(!0),onBlur:()=>setTimeout(()=>v(!1),160),onKeyDown:xe=>{xe.key==="Escape"&&v(!1),xe.key==="Enter"&&y.length&&(xe.preventDefault(),te(y[0]))},placeholder:"মেম্বার কোড / নাম / সেন্টার লিখুন…",autoComplete:"off",className:`w-full h-[42px] rounded-lg border px-3 py-2 text-sm font-semibold text-slate-800 focus:outline-none ${Ie(j.txDate)?"border-slate-300 bg-slate-100 text-slate-500 cursor-not-allowed opacity-60":"border-slate-300 bg-orange-50 focus:border-blue-500"}`}),h&&y.length>0&&n.jsx("div",{className:"absolute left-0 right-0 top-full z-50 mt-1 max-h-56 overflow-y-auto rounded-xl border border-slate-300 bg-white shadow-2xl",children:y.map((xe,ke)=>n.jsxs("button",{type:"button",onMouseDown:Fe=>{Fe.preventDefault(),te(xe)},className:`flex w-full items-start gap-2 px-3 py-2 text-left transition cursor-pointer hover:bg-amber-50 ${ke>0?"border-t border-slate-100":""}`,children:[n.jsx("span",{className:"mt-0.5 text-sm leading-none",children:xe.icon}),n.jsxs("span",{className:"min-w-0 flex-1",children:[n.jsx("span",{className:"block truncate text-[13px] font-black text-slate-800",children:xe.title}),n.jsx("span",{className:"block truncate text-[10px] font-bold text-slate-500",children:xe.sub})]})]},ke))})]})]}),n.jsxs("div",{className:"flex gap-2.5 md:col-span-2 pt-1",children:[n.jsx("button",{onClick:ft,disabled:Ie(j.txDate)||!_t(j.txDate)||pt(j.txDate,l).blocked,className:"min-h-[44px] rounded-xl bg-green-600 px-6 py-2.5 font-bold text-sm text-white shadow hover:bg-green-700 active:scale-98 transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",children:Ie(j.txDate)?"🔒 দিন সমাপ্ত (লকড)":pt(j.txDate,l).blocked?"🚫 তারিখ ব্লকড":_t(j.txDate)?"Save Receive":"☀️ দিন শুরু (Day Open) করুন"}),n.jsx("button",{onClick:()=>{O({category:"",amount:0,description:"",denomination:{},otherAmount:0,txDate:l}),ye("")},disabled:Ie(j.txDate)||!_t(j.txDate)||pt(j.txDate,l).blocked,className:"min-h-[44px] rounded-xl bg-slate-500 px-6 py-2.5 font-bold text-sm text-white hover:bg-slate-600 active:scale-98 transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",children:"Reset"})]})]}),Se&&n.jsx("p",{className:"mt-2 text-xs font-bold text-emerald-700",children:Se}),n.jsx(Nm,{open:M,onClose:()=>U(!1),targetAmount:j.amount||0,date:j.txDate||l,hideSummary:!0,hideOtherRow:!0,onApplyBreakdown:(xe,ke,Fe)=>{O({...j,amount:Math.round(Fe),denomination:xe,otherAmount:ke}),U(!1)}})]}),n.jsxs("div",{className:"overflow-hidden rounded-2xl bg-white shadow-sm border border-slate-200",children:[n.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b px-5 py-3 bg-slate-50",children:[n.jsx("div",{className:"flex items-center gap-2",children:n.jsxs("span",{className:"font-bold text-slate-800 text-sm sm:text-base",children:["Saved Entries (",lt.length,"/",o.length,")"]})}),n.jsxs("div",{className:"grid w-full grid-cols-2 items-center gap-x-2 gap-y-1 sm:w-auto sm:max-w-md sm:flex sm:flex-wrap",children:[n.jsxs("div",{className:"flex min-w-0 items-center gap-1.5",children:[n.jsx("label",{className:"shrink-0 text-xs font-bold text-slate-600",children:"From:"}),n.jsx("div",{className:"min-w-0 flex-1",children:n.jsx(hn,{value:E,onChange:xe=>se(xe),className:"w-full px-2 py-1 text-xs sm:text-sm bg-orange-50"})})]}),n.jsxs("div",{className:"flex min-w-0 items-center gap-1.5",children:[n.jsx("label",{className:"shrink-0 text-xs font-bold text-slate-600",children:"To:"}),n.jsx("div",{className:"min-w-0 flex-1",children:n.jsx(hn,{value:ie,onChange:xe=>ne(xe),className:"w-full px-2 py-1 text-xs sm:text-sm bg-orange-50"})})]})]}),n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("label",{className:"text-xs font-bold text-slate-600",children:"Category Filter:"}),n.jsx(Zn,{value:V,onChange:xe=>ce(xe),noKeyboardOnMobile:!0,options:[{value:"all",label:`All Categories (${o.length})`},...yt.map(xe=>({value:xe,label:mt(xe)}))],placeholder:"All Categories",className:"rounded-lg border border-slate-300 bg-orange-50 px-3 py-1.5 text-xs sm:text-sm font-semibold text-slate-800 shadow-2xs focus:border-blue-500 focus:outline-none cursor-pointer w-44 sm:w-52"})]})]}),n.jsx("div",{className:"overflow-x-auto max-h-[60vh] sm:max-h-[68vh] overflow-y-auto",children:n.jsxs("table",{className:"w-full text-xs sm:text-sm",children:[n.jsx("thead",{className:"sticky top-0 bg-slate-800 text-left text-white z-10",children:n.jsxs("tr",{children:[n.jsx("th",{className:"px-3.5 py-2.5",children:"#"}),n.jsx("th",{className:"px-3.5 py-2.5",children:"Date"}),n.jsx("th",{className:"px-3.5 py-2.5",children:"Category"}),n.jsx("th",{className:"px-3.5 py-2.5",children:"Sub Cat."}),n.jsx("th",{className:"px-3.5 py-2.5",children:"Description"}),n.jsx("th",{className:"px-3.5 py-2.5 text-right",children:"Amount"}),n.jsx("th",{className:"px-3.5 py-2.5 text-center",children:"Action"})]})}),n.jsxs("tbody",{children:[Z&&V==="all"&&E===ie&&n.jsxs(n.Fragment,{children:[n.jsxs("tr",{className:"border-b bg-emerald-50 font-semibold text-slate-900",children:[n.jsx("td",{className:"px-3.5 py-2",children:"-"}),n.jsx("td",{className:"px-3.5 py-2 font-mono",children:Z.prevDate||Yh(l)}),n.jsx("td",{className:"px-3.5 py-2",children:"Cash in Hand (Opening)"}),n.jsx("td",{className:"px-3.5 py-2 text-slate-400 font-mono",children:"-"}),n.jsx("td",{className:"px-3.5 py-2 text-right font-mono text-emerald-800 font-bold",children:Ae(Z.prevCash)}),n.jsx("td",{})]}),n.jsxs("tr",{className:"border-b bg-indigo-50 font-semibold text-slate-900",children:[n.jsx("td",{className:"px-3.5 py-2",children:"-"}),n.jsx("td",{className:"px-3.5 py-2 font-mono",children:Z.prevDate||Yh(l)}),n.jsx("td",{className:"px-3.5 py-2",children:"Bank Balance (Opening)"}),n.jsx("td",{className:"px-3.5 py-2 text-slate-400 font-mono",children:"-"}),n.jsx("td",{className:"px-3.5 py-2 text-right font-mono text-indigo-800 font-bold",children:Ae(Z.prevBank)}),n.jsx("td",{})]})]}),lt.length===0?n.jsx("tr",{children:n.jsx("td",{colSpan:6,className:"px-3 py-6 text-center text-slate-400",children:V==="all"?`No receive entries on ${l}`:`No entries for category "${mt(V)}"`})}):lt.map((xe,ke)=>n.jsxs("tr",{className:"border-b hover:bg-slate-50",children:[n.jsx("td",{className:"px-3.5 py-2 text-slate-500 font-mono",children:ke+1}),n.jsx("td",{className:"px-3.5 py-2 font-mono",children:xe.txDate}),n.jsx("td",{className:"px-3.5 py-2 font-bold text-slate-800",children:mt(xe.category)}),n.jsx("td",{className:"px-3.5 py-2 text-slate-700",children:xe.subCategory||"-"}),n.jsx("td",{className:"px-3.5 py-2 text-slate-600",children:xe.description||"-"}),n.jsx("td",{className:`px-3.5 py-2 text-right font-mono font-black ${Number(xe.amount)<0?"text-rose-700":"text-green-700"}`,children:Ae(xe.amount)}),n.jsx("td",{className:"px-3.5 py-2 text-center whitespace-nowrap",children:n.jsxs("div",{className:"flex items-center justify-center gap-2",children:[n.jsx("button",{type:"button",disabled:Ie(xe.txDate),onClick:()=>{if(Ie(xe.txDate)){A();return}I({id:xe.id,category:xe.category,subCategory:xe.subCategory||"",amount:Number(xe.amount),description:xe.description??"",denomination:xe.denomination??{},otherAmount:Number(xe.otherAmount??0),txDate:xe.txDate})},className:`min-h-[36px] rounded-lg px-3 py-1.5 text-xs font-bold text-white transition ${Ie(xe.txDate)?"bg-slate-400 cursor-not-allowed opacity-50":"bg-blue-600 hover:bg-blue-700 cursor-pointer"}`,title:Ie(xe.txDate)?"দিন সমাপ্ত (Locked) - উপরের Working-Day বার থেকে Re-open করুন":"Edit",children:Ie(xe.txDate)?"🔒 Edit":"Edit"}),n.jsx("button",{type:"button",disabled:Ie(xe.txDate),onClick:()=>{if(Ie(xe.txDate)){A();return}pe(xe.id)},className:`min-h-[36px] rounded-lg px-3 py-1.5 text-xs font-bold text-white transition ${Ie(xe.txDate)?"bg-slate-400 cursor-not-allowed opacity-50":"bg-rose-600 hover:bg-rose-700 cursor-pointer"}`,title:Ie(xe.txDate)?"দিন সমাপ্ত (Locked) - উপরের Working-Day বার থেকে Re-open করুন":"Delete",children:Ie(xe.txDate)?"🔒 Del":"Delete"})]})})]},xe.id))]}),o.length>0&&n.jsxs("tfoot",{className:"sticky bottom-0 bg-slate-100 font-bold border-t-2 border-slate-300 z-10 shadow-inner",children:[n.jsxs("tr",{className:"border-b border-slate-200",children:[n.jsx("td",{colSpan:4,className:"px-3.5 py-2 text-right font-bold text-slate-700",children:V==="all"?"Today's Receive":`Subtotal (${mt(V)})`}),n.jsx("td",{className:"px-3.5 py-2 text-right font-mono font-bold text-green-700",children:Ae(V==="all"?gt:St)}),n.jsx("td",{})]}),V==="all"&&n.jsxs("tr",{className:"bg-emerald-50",children:[n.jsx("td",{colSpan:4,className:"px-3.5 py-2 text-right font-black text-emerald-900",children:"Total Receive (Opening সহ)"}),n.jsx("td",{className:"px-3.5 py-2 text-right font-mono font-black text-emerald-800 text-sm sm:text-base",children:Ae(((Z==null?void 0:Z.prevCash)||0)+gt)}),n.jsx("td",{})]})]})]})})]}),me!==null&&n.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4",children:n.jsxs("div",{className:"w-full max-w-sm rounded-2xl bg-white p-5 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95",children:[n.jsxs("h3",{className:"text-base font-bold text-slate-900 flex items-center gap-2",children:[n.jsx("span",{className:"text-rose-600 text-lg",children:"⚠️"}),n.jsx("span",{children:"Confirm Delete"})]}),n.jsx("p",{className:"mt-2 text-sm text-slate-600",children:"Are you sure you want to permanently delete this receive entry? This action cannot be undone."}),n.jsxs("div",{className:"mt-5 flex items-center justify-end gap-3",children:[n.jsx("button",{type:"button",onClick:()=>pe(null),className:"min-h-[44px] rounded-xl bg-slate-200 px-4 py-2 text-sm font-bold text-slate-700 hover:bg-slate-300 active:scale-95 transition",children:"Cancel"}),n.jsx("button",{type:"button",onClick:Le,className:"min-h-[44px] rounded-xl bg-rose-600 px-5 py-2 text-sm font-bold text-white hover:bg-rose-700 active:scale-95 transition",children:"Delete Entry"})]})]})}),R&&n.jsx("div",{className:"fixed inset-0 z-40 flex items-center justify-center bg-black/60 p-4",children:n.jsxs("div",{className:"max-h-[95vh] w-full max-w-2xl overflow-auto rounded-2xl bg-white p-5 sm:p-6 shadow-2xl",children:[n.jsxs("div",{className:"mb-4 flex items-center justify-between border-b pb-3",children:[n.jsxs("h2",{className:"text-lg font-bold",children:["Edit Receive Entry #",R.id]}),n.jsx("button",{onClick:()=>I(null),className:"min-h-[36px] min-w-[36px] text-2xl text-slate-400 hover:text-rose-600 flex items-center justify-center",children:"×"})]}),n.jsxs("div",{className:"grid gap-4 md:grid-cols-2",children:[n.jsxs("div",{children:[n.jsx("label",{className:"mb-1 block text-xs font-bold text-slate-700",children:"Date"}),n.jsx(hn,{value:R.txDate,onChange:xe=>I({...R,txDate:xe}),className:"px-3 py-2 text-sm"})]}),n.jsxs("div",{children:[n.jsx("label",{className:"mb-1 block text-xs font-bold text-slate-700",children:"Category"}),n.jsx(Zh,{value:R.category,onChange:xe=>I({...R,category:xe,subCategory:""}),cats:f,onManageClick:()=>C(!0)})]}),R.category.trim().toLowerCase().includes("fund receive")&&n.jsxs("div",{children:[n.jsxs("div",{className:"mb-1 flex items-center justify-between gap-2",children:[n.jsx("label",{className:"text-xs font-bold text-slate-700",children:"Sub Category (সাব ক্যাটাগরি)"}),R.subCategory?n.jsx("button",{type:"button",onClick:()=>I({...R,subCategory:""}),title:"সাব-ক্যাটাগরি মুছে ফেলুন (ডিলিট)",className:"cursor-pointer text-[11px] font-black text-rose-600 hover:underline",children:"✕ মুছুন"}):null]}),n.jsx(Zn,{value:R.subCategory||"",onChange:xe=>I({...R,subCategory:xe}),options:(()=>{const xe=ec(R.category,re,H.map(Fe=>Fe.name)),ke=(R.subCategory||"").trim();return ke&&!xe.includes(ke)?[...xe,ke]:xe})(),placeholder:"-- Select Sub Category --",className:"w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-bold text-slate-800 focus:border-blue-500 focus:outline-none cursor-pointer"})]}),n.jsxs("div",{children:[n.jsx("label",{className:"mb-1 block text-xs font-bold text-slate-700",children:"Amount"}),n.jsx("input",{readOnly:!0,value:R.amount?Ae(R.amount):"",placeholder:"",onClick:()=>ge(!0),onFocus:()=>ge(!0),title:"Amount চাপলে ডেনোমিনেশন পপআপ খুলবে",className:`w-full h-[42px] rounded-lg border px-3 py-2 text-right font-mono text-lg font-bold transition shadow-2xs ${(R.amount||0)<0?"cursor-pointer border-rose-400 bg-rose-50 text-rose-700 focus:border-rose-500 focus:outline-none hover:bg-rose-100":"cursor-pointer border-slate-300 bg-orange-50 focus:border-blue-500 focus:outline-none hover:bg-orange-100/70"}`})]}),n.jsxs("div",{className:"md:col-span-2 relative",children:[n.jsxs("label",{className:"mb-1 block text-xs font-bold text-slate-700",children:["Description ",n.jsx("span",{className:"text-[10px] font-black text-amber-600",children:"💡 টাইপ করলেই সাজেশন"})]}),n.jsx("input",{type:"text",value:R.description,onChange:xe=>I({...R,description:xe.target.value}),onFocus:()=>b(!0),onBlur:()=>setTimeout(()=>b(!1),160),onKeyDown:xe=>{xe.key==="Escape"&&b(!1),xe.key==="Enter"&&le.length&&(xe.preventDefault(),Y(le[0]))},placeholder:"মেম্বার কোড / নাম / সেন্টার লিখুন…",autoComplete:"off",className:"w-full h-[42px] rounded-lg border border-slate-300 bg-orange-50 px-3 py-2 text-sm font-semibold text-slate-800 focus:border-blue-500 focus:outline-none"}),S&&le.length>0&&n.jsx("div",{className:"absolute left-0 right-0 top-full z-50 mt-1 max-h-56 overflow-y-auto rounded-xl border border-slate-300 bg-white shadow-2xl",children:le.map((xe,ke)=>n.jsxs("button",{type:"button",onMouseDown:Fe=>{Fe.preventDefault(),Y(xe)},className:`flex w-full items-start gap-2 px-3 py-2 text-left transition cursor-pointer hover:bg-amber-50 ${ke>0?"border-t border-slate-100":""}`,children:[n.jsx("span",{className:"mt-0.5 text-sm leading-none",children:xe.icon}),n.jsxs("span",{className:"min-w-0 flex-1",children:[n.jsx("span",{className:"block truncate text-[13px] font-black text-slate-800",children:xe.title}),n.jsx("span",{className:"block truncate text-[10px] font-bold text-slate-500",children:xe.sub})]})]},ke))})]}),n.jsxs("div",{className:"flex justify-end gap-3 md:col-span-2 border-t pt-3 mt-2",children:[n.jsx("button",{onClick:()=>I(null),className:"min-h-[44px] rounded-xl bg-slate-200 px-5 py-2 font-bold text-sm text-slate-700 hover:bg-slate-300 transition",children:"Cancel"}),n.jsx("button",{onClick:tt,className:"min-h-[44px] rounded-xl bg-green-600 px-6 py-2 font-bold text-sm text-white hover:bg-green-700 transition",children:"Update Entry"})]})]}),n.jsx(Nm,{open:B,onClose:()=>ge(!1),targetAmount:R.amount||0,date:R.txDate,hideSummary:!0,hideOtherRow:!0,initialDenom:R.denomination,initialOther:R.otherAmount,onApplyBreakdown:(xe,ke,Fe)=>{I({...R,amount:Math.round(Fe),denomination:xe,otherAmount:ke}),ge(!1)}})]})}),ue&&n.jsx(o5,{type:"receive",cats:f,onChanged:Oe,onClose:()=>C(!1)}),L&&n.jsx(ip,{disburseCats:H,expenseCats:G,onChanged:Oe,onClose:()=>_(!1)}),q&&n.jsx(Ym,{open:q,onClose:()=>k(!1),cashInHand:lp(j.txDate||l).cashInHand,date:j.txDate||l})]})}function qh({value:l,onChange:o,disburseCats:u,expenseCats:c,onManageClick:d,disabled:A=!1}){const[f,x]=p.useState(!1),h=p.useRef(null),v=p.useRef(0),S=p.useRef(null),b=()=>{v.current=Date.now()},H=()=>Date.now()-v.current<600,P=()=>{const k=document.activeElement;k&&(k.tagName==="INPUT"||k.tagName==="TEXTAREA")&&k.blur()};p.useEffect(()=>{if(!f)return;function k(V){if(h.current&&!h.current.contains(V.target)){const ce=V.target,E=!!ce&&(ce.tagName==="INPUT"||ce.tagName==="TEXTAREA"||ce.tagName==="SELECT");x(!1),E||P()}}return document.addEventListener("pointerdown",k),()=>{document.removeEventListener("pointerdown",k)}},[f]);const G=(l||"").trim().toLowerCase(),K=p.useMemo(()=>{const k=new Map;return[...u,...c].forEach(V=>{const ce=V.name.trim().toLowerCase();k.has(ce)||k.set(ce,V)}),Array.from(k.values())},[u,c]),L=K,_=k=>{o(k),x(!1),P()},ue=k=>{k.button===0&&(k.preventDefault(),S.current=k.currentTarget,b())},C=k=>{k.button!==0||A||S.current!==k.currentTarget||(b(),x(V=>(V&&P(),!V)))},q=()=>{A||H()||x(k=>!k)};return n.jsxs("div",{className:"relative w-full",ref:h,children:[n.jsxs("button",{type:"button",disabled:A,"aria-haspopup":"listbox","aria-expanded":f,onPointerDown:ue,onPointerUp:C,onClick:q,onKeyDown:k=>{k.key==="Escape"&&f&&(k.stopPropagation(),x(!1),P())},className:`w-full h-[42px] rounded-xl border px-3 py-2 text-left text-sm font-bold shadow-xs transition cursor-pointer flex items-center justify-between ${A?"bg-slate-100":"bg-orange-50"} ${f?"border-blue-600 ring-2 ring-blue-500/20":"border-slate-300 hover:border-orange-300 hover:bg-orange-100/60"} ${A?"opacity-50 cursor-not-allowed":""}`,children:[n.jsx("div",{className:"flex items-center gap-2 truncate",children:l?n.jsx("span",{className:"text-slate-900 font-bold truncate",children:mt(l)}):n.jsx("span",{className:"text-slate-400 font-medium",children:"-- Select Category --"})}),n.jsxs("div",{className:"flex items-center gap-1.5 shrink-0 ml-2",children:[l&&n.jsx("span",{onPointerDown:k=>{k.stopPropagation(),ue(k)},onPointerUp:k=>{k.stopPropagation(),!(k.button!==0||S.current!==k.currentTarget)&&(b(),o(""))},onClick:k=>{k.stopPropagation(),!H()&&o("")},className:"p-1 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-md cursor-pointer text-xs transition",title:"Clear Category",children:"✕"}),n.jsx("span",{className:`text-slate-400 text-xs transition-transform duration-200 ${f?"rotate-180":""}`,children:"▼"})]})]}),f&&n.jsxs("div",{role:"listbox",className:"absolute left-0 right-0 z-50 mt-1.5 rounded-2xl border border-slate-200 bg-white shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150 flex flex-col max-h-80",children:[n.jsxs("div",{className:"p-2.5 border-b border-slate-100 bg-slate-50 flex items-center justify-between gap-2 shrink-0",children:[n.jsx("span",{className:"pl-1 text-xs sm:text-sm font-bold text-slate-500",children:"📋 ক্যাটাগরি সিলেক্ট করুন"}),n.jsx("span",{className:"text-[10px] font-bold text-slate-400 bg-slate-200/70 px-1.5 py-0.5 rounded-md",children:K.length})]}),n.jsx("div",{className:"overflow-y-auto max-h-60 p-1.5 space-y-0.5",children:L.length>0?L.map(k=>{const V=k.name.toLowerCase()===G;return n.jsxs("button",{type:"button",role:"option","aria-selected":V,onPointerDown:ue,onPointerUp:ce=>{ce.button!==0||S.current!==ce.currentTarget||(b(),_(k.name))},onClick:()=>{H()||_(k.name)},className:`w-full text-left px-3 py-2 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer flex items-center justify-between ${V?"bg-blue-50 text-blue-900 border border-blue-200 shadow-2xs font-extrabold":"hover:bg-slate-100 text-slate-700 hover:text-slate-900"}`,children:[n.jsxs("div",{className:"flex items-center gap-2.5 truncate",children:[n.jsx("span",{className:`h-2 w-2 rounded-full shrink-0 ${V?"bg-blue-600 ring-2 ring-blue-300":"bg-slate-300"}`}),n.jsx("span",{className:"truncate",children:mt(k.name)})]}),V&&n.jsx("span",{className:"text-blue-600 font-black text-sm pl-2",children:"✓"})]},k.id||k.name)}):n.jsxs("div",{className:"py-8 text-center text-xs text-slate-400 font-semibold flex flex-col items-center gap-1",children:[n.jsx("span",{children:"🔍"}),n.jsx("span",{children:"No category found"})]})}),n.jsxs("div",{className:"p-2 border-t border-slate-100 bg-slate-50 flex items-center justify-between shrink-0 text-xs",children:[n.jsxs("span",{className:"text-[11px] text-slate-500 font-medium",children:["Total: ",L.length," categories"]}),n.jsxs("button",{type:"button",onPointerDown:ue,onPointerUp:k=>{k.button!==0||S.current!==k.currentTarget||(b(),x(!1),d())},onClick:()=>{H()||(x(!1),d())},className:"text-xs font-black text-blue-600 hover:text-blue-800 hover:underline cursor-pointer flex items-center gap-1",children:[n.jsx("span",{children:"⚙️"}),n.jsx("span",{children:"Manage Categories"})]})]})]})]})}function m5({rates:l,categories:o,onChanged:u,onClose:c}){const[d,A]=p.useState(o[0]??""),[f,x]=p.useState(Nh[0]),[h,v]=p.useState(""),[S,b]=p.useState({}),[H,P]=p.useState(""),G=()=>{if(!d.trim()||!f.trim())return P("Category & sub category required");Gh({category:d.trim().toLowerCase(),subCategory:f.trim().toLowerCase(),ratePer100:String(Number(h)||0)}),P(""),v(""),u()},K=C=>{const q=l.find(k=>k.id===C);if(q){Gh({id:C,category:q.category,subCategory:q.subCategory,ratePer100:String(Number(S[C])||0)});const k={...S};delete k[C],b(k),u()}},L=C=>{confirm("Delete this rate?")&&(QR(C),u())},_=Array.from(new Set([...o,...l.map(C=>C.category)])),ue=Array.from(new Set([...Nh,...l.map(C=>C.subCategory)]));return n.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-3 sm:p-4",children:n.jsxs("div",{className:"flex max-h-[95vh] w-full max-w-2xl flex-col rounded-2xl bg-white shadow-2xl overflow-hidden border border-slate-300",children:[n.jsxs("div",{className:"flex items-center justify-between border-b bg-slate-900 px-5 py-3 text-white",children:[n.jsx("h3",{className:"text-base sm:text-lg font-bold",children:"⚙ Service Charge Settings"}),n.jsx("button",{onClick:c,className:"text-2xl text-slate-300 hover:text-white",children:"×"})]}),n.jsxs("div",{className:"border-b bg-slate-50 px-4 sm:px-5 py-3",children:[n.jsxs("div",{className:"grid grid-cols-2 gap-2 sm:grid-cols-4",children:[n.jsxs("div",{children:[n.jsx("label",{className:"text-xs font-bold text-slate-700",children:"Category"}),n.jsx("input",{list:"sc-cats",value:d,onChange:C=>A(C.target.value),className:"w-full rounded border border-slate-300 px-2 py-1.5 text-xs sm:text-sm capitalize focus:border-blue-500 focus:outline-none bg-white"}),n.jsx("datalist",{id:"sc-cats",children:_.map(C=>n.jsx("option",{value:C},C))})]}),n.jsxs("div",{children:[n.jsx("label",{className:"text-xs font-bold text-slate-700",children:"Sub Category"}),n.jsx("input",{list:"sc-subs",value:f,onChange:C=>x(C.target.value),className:"w-full rounded border border-slate-300 px-2 py-1.5 text-xs sm:text-sm focus:border-blue-500 focus:outline-none bg-white"}),n.jsx("datalist",{id:"sc-subs",children:ue.map(C=>n.jsx("option",{value:C},C))})]}),n.jsxs("div",{children:[n.jsx("label",{className:"text-xs font-bold text-slate-700",children:"SC / 100 Tk"}),n.jsx("input",{type:"number",step:"0.01",min:0,value:h,placeholder:"0.00",onChange:C=>v(C.target.value),onKeyDown:C=>C.key==="Enter"&&G(),className:"w-full rounded border border-slate-300 px-2 py-1.5 text-right font-mono text-xs sm:text-sm focus:border-blue-500 focus:outline-none bg-white font-bold"})]}),n.jsx("div",{className:"flex items-end",children:n.jsx("button",{onClick:G,className:"w-full rounded-lg bg-green-600 px-4 py-1.5 font-bold text-xs sm:text-sm text-white hover:bg-green-700",children:"Add Rate"})})]}),H&&n.jsx("p",{className:"mt-1 text-xs text-rose-600 font-semibold",children:H})]}),n.jsx("div",{className:"flex-1 overflow-auto p-4",children:n.jsxs("table",{className:"w-full text-xs sm:text-sm border-collapse border border-slate-200",children:[n.jsx("thead",{className:"sticky top-0 bg-slate-800 text-white",children:n.jsxs("tr",{children:[n.jsx("th",{className:"px-3 py-2 text-left font-bold",children:"Category"}),n.jsx("th",{className:"px-3 py-2 text-left font-bold",children:"Sub Category"}),n.jsx("th",{className:"px-3 py-2 text-right font-bold",children:"SC / 100 Tk"}),n.jsx("th",{className:"px-3 py-2 text-center font-bold",children:"Action"})]})}),n.jsx("tbody",{children:l.length===0?n.jsx("tr",{children:n.jsx("td",{colSpan:4,className:"px-3 py-6 text-center text-slate-400",children:"No rates yet"})}):l.map(C=>{const q=C.id in S;return n.jsxs("tr",{className:"border-b hover:bg-slate-50",children:[n.jsx("td",{className:"px-3 py-2 font-semibold text-slate-900",children:mt(C.category)}),n.jsx("td",{className:"px-3 py-2 text-slate-600",children:C.subCategory}),n.jsx("td",{className:"px-3 py-2 text-right font-mono font-bold text-indigo-900",children:q?n.jsx("input",{type:"number",step:"0.01",min:0,autoFocus:!0,value:S[C.id],onChange:k=>b({...S,[C.id]:k.target.value}),onKeyDown:k=>k.key==="Enter"&&K(C.id),className:"w-20 rounded border px-1.5 py-0.5 text-right font-bold"}):Number(C.ratePer100).toFixed(2)}),n.jsxs("td",{className:"px-3 py-2 text-center",children:[q?n.jsx("button",{onClick:()=>K(C.id),className:"mr-1 rounded bg-green-600 px-2 py-0.5 text-xs text-white",children:"Save"}):n.jsx("button",{onClick:()=>b({...S,[C.id]:String(Number(C.ratePer100))}),className:"mr-1 rounded bg-blue-600 px-2 py-0.5 text-xs text-white hover:bg-blue-700",children:"Edit"}),n.jsx("button",{onClick:()=>L(C.id),className:"rounded bg-rose-600 px-2 py-0.5 text-xs text-white hover:bg-rose-700",children:"Delete"})]})]},C.id)})})]})})]})})}function up({rule:l,disburseCategories:o=[],onChanged:u,onClose:c}){const d=["jagoron","agrossor","buniyed","sufolon","mfce"],A=Array.from(new Set([...d,...o.map(E=>E.trim().toLowerCase()),...Object.keys(l.categoryOverrides||{}).map(E=>E.trim().toLowerCase())])).filter(Boolean),[f,x]=p.useState(l.percent??1),[h,v]=p.useState(l.fixed??15),[S,b]=p.useState(()=>{const E={};for(const se of A)l.categoryOverrides&&l.categoryOverrides[se]?E[se]={percent:l.categoryOverrides[se].percent??f,fixed:l.categoryOverrides[se].fixed??h}:sn.categoryOverrides&&sn.categoryOverrides[se]?E[se]={...sn.categoryOverrides[se]}:E[se]={percent:f,fixed:h};return E}),[H,P]=p.useState(5e4),[G,K]=p.useState("products"),[L,_]=p.useState(""),ue=(E,se,ie)=>{b(ne=>({...ne,[E]:{...ne[E],[se]:ie>=0?ie:0}}))},C=E=>{const se={};if(E==="standard"){for(const ie of A)ie.trim().toLowerCase()==="buniyed"||ie.trim().toLowerCase()==="buniyad"?se[ie]={percent:.5,fixed:15}:se[ie]={percent:1,fixed:15};b(se),x(1),v(15),_("✓ স্ট্যান্ডার্ড নিয়ম প্রয়োগ করা হয়েছে: সাধারণ ১% + ১৫ টাকা, বুনিয়াদ ০.৫% + ১৫ টাকা")}else if(E==="all_1_15"){for(const ie of A)se[ie]={percent:1,fixed:15};b(se),x(1),v(15),_("✓ সকল প্রোডাক্টে ১% + ১৫ টাকা নির্ধারণ করা হয়েছে")}else if(E==="all_05_15"){for(const ie of A)se[ie]={percent:.5,fixed:15};b(se),x(.5),v(15),_("✓ সকল প্রোডাক্টে ০.৫% + ১৫ টাকা নির্ধারণ করা হয়েছে")}else if(E==="all_1_0"){for(const ie of A)se[ie]={percent:1,fixed:0};b(se),x(1),v(0),_("✓ সকল প্রোডাক্টে শুধু ১% (কোনো ফিক্সড ফি নেই) নির্ধারণ করা হয়েছে")}},q=()=>{const E={};for(const ie of Object.keys(S)){const ne=S[ie];ne&&(E[ie.trim().toLowerCase()]={percent:Number(ne.percent)||0,fixed:Number(ne.fixed)||0})}const se={percent:Number(f)||0,fixed:Number(h)||0,categoryOverrides:E};Ph(se),_("✓ কল্যাণ তহবিল সেটিংস সফলভাবে সংরক্ষিত হয়েছে!"),u(),setTimeout(()=>{c()},600)},k=()=>{Ph(sn),x(sn.percent),v(sn.fixed),b({...sn.categoryOverrides||{}}),_("✓ স্ট্যান্ডার্ড ডিফল্ট অবস্থায় রিসেট করা হয়েছে (১% + ১৫ টাকা, বুনিয়াদ ০.৫% + ১৫ টাকা)"),u()},V=E=>{const se=E.toLowerCase();return se.includes("jagoron")?"from-emerald-600 to-teal-700":se.includes("agrossor")?"from-blue-600 to-indigo-700":se.includes("buniyed")?"from-amber-600 to-orange-700":se.includes("sufolon")?"from-teal-600 to-cyan-700":se.includes("mfce")?"from-purple-600 to-indigo-700":"from-slate-600 to-slate-800"},ce=E=>{const se=E.toLowerCase();return se.includes("jagoron")?"জাগরণ":se.includes("agrossor")?"অগ্রসর":se.includes("buniyed")?"বুনিয়াদ":se.includes("sufolon")?"সুফলন":se.includes("mfce")?"এমএফসিই":mt(E)};return n.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-2 sm:p-4 backdrop-blur-xs animate-in fade-in duration-200",children:n.jsxs("div",{className:"flex h-full sm:h-auto sm:max-h-[94vh] w-full max-w-4xl flex-col rounded-2xl bg-white shadow-2xl overflow-hidden border border-slate-200",children:[n.jsxs("div",{className:"flex items-center justify-between border-b bg-linear-to-r from-teal-800 via-teal-900 to-slate-900 px-4 sm:px-6 py-3.5 text-white shrink-0",children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500/20 text-teal-300 ring-1 ring-teal-400/30 text-lg shadow-inner",children:"🤝"}),n.jsxs("div",{children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("h2",{className:"text-base sm:text-lg font-black tracking-tight text-white",children:"কল্যাণ তহবিল সেটিংস (Kallyan Fund)"}),n.jsx("span",{className:"rounded-md bg-teal-500/20 px-2 py-0.5 text-[10px] font-bold text-teal-200 ring-1 ring-teal-400/30 uppercase",children:"Disburse Settings"})]}),n.jsx("p",{className:"text-xs text-teal-200/80 font-medium",children:"ঋণ বিতরণকালে কল্যাণ ফি ও শতকরা হারের সহজ কনফিগারেশন"})]})]}),n.jsx("button",{onClick:c,className:"rounded-lg p-1.5 text-teal-300 hover:text-white hover:bg-white/10 transition cursor-pointer text-xl leading-none","aria-label":"Close",children:"✕"})]}),L&&n.jsxs("div",{className:"bg-emerald-50 border-b border-emerald-200 px-4 py-2 flex items-center justify-between text-xs font-bold text-emerald-900 shrink-0",children:[n.jsx("span",{children:L}),n.jsx("button",{onClick:()=>_(""),className:"text-emerald-700 hover:text-emerald-950 text-sm px-1 font-bold cursor-pointer",children:"✕"})]}),n.jsxs("div",{className:"border-b bg-linear-to-b from-teal-50/90 to-slate-50/70 p-3 sm:p-4 shrink-0 space-y-3",children:[n.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-center justify-between gap-3",children:[n.jsxs("div",{className:"space-y-1.5 flex-1",children:[n.jsx("span",{className:"text-[11px] font-black uppercase tracking-wider text-teal-900 block",children:"⚡ ১-ক্লিক রেডি প্রিসেট (Quick Presets):"}),n.jsxs("div",{className:"flex flex-wrap gap-1.5",children:[n.jsxs("button",{type:"button",onClick:()=>C("standard"),className:"rounded-xl bg-teal-700 hover:bg-teal-800 text-white px-3 py-1.5 text-xs font-bold shadow-xs transition cursor-pointer flex items-center gap-1.5",children:[n.jsx("span",{children:"🌟"}),n.jsx("span",{children:"স্ট্যান্ডার্ড (১% + ১৫ ৳, বুনিয়াদ ০.৫% + ১৫ ৳)"})]}),n.jsx("button",{type:"button",onClick:()=>C("all_1_15"),className:"rounded-xl bg-white hover:bg-teal-50 border border-teal-300 text-teal-900 px-2.5 py-1.5 text-xs font-bold shadow-2xs transition cursor-pointer",children:"সব ১% + ১৫ ৳"}),n.jsx("button",{type:"button",onClick:()=>C("all_05_15"),className:"rounded-xl bg-white hover:bg-teal-50 border border-teal-300 text-teal-900 px-2.5 py-1.5 text-xs font-bold shadow-2xs transition cursor-pointer",children:"সব ০.৫% + ১৫ ৳"}),n.jsx("button",{type:"button",onClick:()=>C("all_1_0"),className:"rounded-xl bg-white hover:bg-slate-100 border border-slate-300 text-slate-700 px-2.5 py-1.5 text-xs font-bold shadow-2xs transition cursor-pointer",children:"শুধু ১% (০ ৳ ফিক্সড)"})]})]}),n.jsxs("div",{className:"rounded-xl border border-teal-200 bg-white p-2.5 shadow-2xs flex items-center gap-2.5 shrink-0",children:[n.jsxs("div",{children:[n.jsx("span",{className:"text-[10px] font-bold text-slate-500 uppercase block",children:"টেস্ট লোন পরিমাণ (Sample):"}),n.jsxs("div",{className:"flex items-center gap-1 mt-0.5",children:[n.jsx("input",{type:"number",min:1e3,step:5e3,value:H,onChange:E=>P(Number(E.target.value)||0),className:"w-24 rounded-lg border border-slate-300 px-2 py-1 text-right font-mono text-sm font-black text-teal-950 focus:border-teal-600 focus:outline-none"}),n.jsx("span",{className:"text-xs font-bold text-slate-600",children:"৳"})]})]}),n.jsx("div",{className:"flex flex-col gap-1",children:[3e4,5e4,1e5].map(E=>n.jsx("button",{type:"button",onClick:()=>P(E),className:`rounded px-1.5 py-0.5 text-[10px] font-bold font-mono transition cursor-pointer ${H===E?"bg-teal-700 text-white":"bg-slate-100 text-slate-600 hover:bg-slate-200"}`,children:Ae(E)},E))})]})]}),n.jsxs("div",{className:"flex items-center justify-between text-[11px] bg-teal-100/60 rounded-lg px-3 py-1.5 text-teal-950 border border-teal-200/80",children:[n.jsxs("span",{className:"font-semibold",children:["💡 হিসাবের নিয়ম: ",n.jsx("span",{className:"font-mono font-bold",children:"(লোন × পার্সেন্টেজ ÷ ১০০) + ফিক্সড ফি = মোট কল্যাণ ফি"})]}),n.jsxs("span",{className:"hidden sm:inline text-teal-800 font-medium",children:["উদাহরণ: ",Ae(H)," × ১% + ১৫ = ",n.jsxs("b",{className:"font-mono",children:[Ae(Math.round(H*1/100)+15)," ৳"]})]})]})]}),n.jsxs("div",{className:"flex-1 overflow-y-auto p-3 sm:p-5 space-y-4",children:[n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("span",{className:"text-xs font-black uppercase tracking-wider text-slate-800 flex items-center gap-1.5",children:[n.jsx("span",{children:"📋"})," প্রোডাক্টভিত্তিক কল্যাণ ফি নির্ধারণ:"]}),n.jsxs("span",{className:"text-xs text-slate-500 font-medium",children:["মোট ",n.jsx("b",{className:"text-teal-700",children:A.length})," টি প্রোডাক্ট"]})]}),n.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3.5",children:A.map(E=>{const se=S[E]||{percent:f,fixed:h},ie=dr(H,E,{percent:f,fixed:h,categoryOverrides:S}),ne=E.toLowerCase().includes("buniyed");return n.jsxs("div",{className:"rounded-2xl border border-slate-200 bg-white p-4 shadow-xs hover:border-teal-500 hover:shadow-md transition group",children:[n.jsxs("div",{className:"flex items-center justify-between border-b border-slate-100 pb-2.5 mb-3",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("div",{className:`h-8 w-8 rounded-xl bg-linear-to-tr ${V(E)} flex items-center justify-center text-white text-xs font-bold shadow-xs`,children:E.charAt(0).toUpperCase()}),n.jsxs("div",{children:[n.jsxs("div",{className:"flex items-center gap-1.5",children:[n.jsx("span",{className:"font-black text-sm text-slate-900",children:mt(E)}),n.jsxs("span",{className:"text-xs text-slate-400 font-semibold",children:["(",ce(E),")"]})]}),ne&&n.jsx("span",{className:"text-[10px] text-amber-700 font-bold block",children:"★ বুনিয়াদে সাধারণত ০.৫% + ১৫ প্রযোজ্য হয়"})]})]}),n.jsx("div",{className:"text-right",children:n.jsxs("span",{className:"rounded-full bg-teal-50 text-teal-800 border border-teal-200 px-2 py-0.5 text-[10px] font-black",children:[se.percent,"% + ",se.fixed," ৳"]})})]}),n.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[n.jsxs("div",{className:"space-y-1.5",children:[n.jsx("label",{className:"block text-[11px] font-bold text-slate-700",children:"পার্সেন্টেজ (%)"}),n.jsxs("div",{className:"relative",children:[n.jsx("input",{type:"number",step:"0.1",min:"0",value:se.percent,onChange:me=>ue(E,"percent",parseFloat(me.target.value)||0),className:"w-full rounded-xl border border-slate-300 bg-slate-50/50 px-3 py-2 text-right font-mono text-sm font-bold text-slate-900 focus:bg-white focus:border-teal-600 focus:ring-1 focus:ring-teal-600 focus:outline-none"}),n.jsx("span",{className:"absolute left-3 top-2 text-xs font-bold text-slate-400",children:"%"})]}),n.jsx("div",{className:"flex gap-1",children:[.5,1,1.5].map(me=>n.jsxs("button",{type:"button",onClick:()=>ue(E,"percent",me),className:`flex-1 rounded-md py-0.5 text-[10px] font-bold transition cursor-pointer ${se.percent===me?"bg-teal-700 text-white":"bg-slate-100 text-slate-600 hover:bg-slate-200"}`,children:[me,"%"]},me))})]}),n.jsxs("div",{className:"space-y-1.5",children:[n.jsx("label",{className:"block text-[11px] font-bold text-slate-700",children:"ফিক্সড ফি (Tk)"}),n.jsxs("div",{className:"relative",children:[n.jsx("input",{type:"number",step:"1",min:"0",value:se.fixed,onChange:me=>ue(E,"fixed",parseFloat(me.target.value)||0),className:"w-full rounded-xl border border-slate-300 bg-slate-50/50 px-3 py-2 text-right font-mono text-sm font-bold text-slate-900 focus:bg-white focus:border-teal-600 focus:ring-1 focus:ring-teal-600 focus:outline-none"}),n.jsx("span",{className:"absolute left-3 top-2 text-xs font-bold text-slate-400",children:"৳"})]}),n.jsx("div",{className:"flex gap-1",children:[0,10,15,20].map(me=>n.jsx("button",{type:"button",onClick:()=>ue(E,"fixed",me),className:`flex-1 rounded-md py-0.5 text-[10px] font-bold transition cursor-pointer ${se.fixed===me?"bg-teal-700 text-white":"bg-slate-100 text-slate-600 hover:bg-slate-200"}`,children:me},me))})]})]}),n.jsxs("div",{className:"mt-3 flex items-center justify-between rounded-xl bg-slate-50 border border-slate-200/90 px-3 py-2",children:[n.jsxs("span",{className:"text-[11px] text-slate-600 font-medium",children:[Ae(H)," ৳ লোনে কল্যাণ ফি:"]}),n.jsxs("span",{className:"font-mono text-sm font-black text-teal-800",children:[Ae(ie)," ৳"]})]})]},E)})}),n.jsx("div",{className:"rounded-2xl border border-slate-300 bg-slate-50 p-4",children:n.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-3",children:[n.jsxs("div",{children:[n.jsx("span",{className:"font-black text-xs text-slate-900 block",children:"⚙️ অন্যান্য / নতুন প্রোডাক্টের জন্য ডিফল্ট নিয়ম (Default Rule):"}),n.jsx("p",{className:"text-[11px] text-slate-500 mt-0.5",children:"ভবিষ্যতে তালিকায় না থাকা কোনো নতুন ঋণ প্রোডাক্ট যুক্ত হলে স্বয়ংক্রিয়ভাবে এই নিয়ম প্রযোজ্য হবে।"})]}),n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsxs("div",{className:"flex items-center gap-1.5",children:[n.jsx("span",{className:"text-xs font-bold text-slate-600",children:"পার্সেন্টেজ:"}),n.jsx("input",{type:"number",step:"0.1",min:"0",value:f,onChange:E=>x(parseFloat(E.target.value)||0),className:"w-16 rounded-lg border border-slate-300 bg-white px-2 py-1 text-right font-mono text-xs font-bold text-slate-900"}),n.jsx("span",{className:"text-xs font-bold text-slate-500",children:"%"})]}),n.jsxs("div",{className:"flex items-center gap-1.5",children:[n.jsx("span",{className:"text-xs font-bold text-slate-600",children:"ফিক্সড:"}),n.jsx("input",{type:"number",step:"1",min:"0",value:h,onChange:E=>v(parseFloat(E.target.value)||0),className:"w-16 rounded-lg border border-slate-300 bg-white px-2 py-1 text-right font-mono text-xs font-bold text-slate-900"}),n.jsx("span",{className:"text-xs font-bold text-slate-500",children:"৳"})]})]})]})})]}),n.jsxs("div",{className:"flex items-center justify-between border-t bg-slate-50 px-4 sm:px-6 py-3.5 shrink-0",children:[n.jsxs("button",{type:"button",onClick:k,className:"rounded-xl border border-slate-300 bg-white px-3.5 py-2 text-xs font-bold text-slate-700 hover:bg-slate-100 transition cursor-pointer flex items-center gap-1.5",title:"Reset to default settings",children:[n.jsx("span",{children:"🔄"}),n.jsx("span",{children:"ডিফল্ট রিসেট"})]}),n.jsxs("div",{className:"flex items-center gap-2.5",children:[n.jsx("button",{type:"button",onClick:c,className:"rounded-xl border border-slate-300 bg-white px-4 py-2 text-xs sm:text-sm font-bold text-slate-700 hover:bg-slate-100 transition cursor-pointer",children:"বাতিল"}),n.jsxs("button",{type:"button",onClick:q,className:"rounded-xl bg-teal-700 hover:bg-teal-800 active:bg-teal-900 px-6 py-2 text-xs sm:text-sm font-black text-white shadow-md shadow-teal-700/20 transition cursor-pointer flex items-center gap-1.5",children:[n.jsx("span",{children:"✓"}),n.jsx("span",{children:"সেটিংস সংরক্ষণ করুন"})]})]})]})]})})}function A5({open:l,onClose:o,rules:u,disburseCategories:c,onRulesChanged:d,currentLoanAmount:A=5e4}){const[f,x]=p.useState(""),[h,v]=p.useState(12),[S,b]=p.useState("all"),[H,P]=p.useState([]),[G,K]=p.useState(!1),[L,_]=p.useState(null),[ue,C]=p.useState(""),[q,k]=p.useState(12),[V,ce]=p.useState("all"),[E,se]=p.useState([]),[ie,ne]=p.useState(A>0?A:5e4),[me,pe]=p.useState("");if(!l)return null;const j=["jagoron","agrossor","buniyed","sufolon","mfce"],O=Array.from(new Set([...j,...c.map(y=>y.trim().toLowerCase())])).filter(Boolean),R=y=>{const le=y.toLowerCase().trim();H.includes(le)?P(H.filter(te=>te!==le)):P([...H,le])},I=y=>{const le=y.toLowerCase().trim();E.includes(le)?se(E.filter(te=>te!==le)):se([...E,le])},re=()=>{if(!f.trim()){pe("মেয়াদ / সাব-ক্যাটাগরির নাম দিন (যেমন: 1 year / 2 year)");return}const y=Number(h);if(!y||y<=0){pe("সঠিক কিস্তি সংখ্যা দিন (যেমন: 12, 18, 24, 46)");return}Al({subCategory:f.trim(),installments:y,mode:S,categories:S==="all"?[]:H}),x(""),v(12),b("all"),P([]),K(!1),pe("✓ নতুন কিস্তি রুল সফলভাবে যুক্ত করা হয়েছে!"),d()},ee=y=>{_(y.id||0),C(y.subCategory),k(y.installments||12),ce(y.mode||"all"),se((y.categories||[]).map(le=>le.toLowerCase().trim())),pe("")},M=()=>{if(!L||!ue.trim()){pe("মেয়াদ / সাব-ক্যাটাগরির নাম দিন");return}const y=Number(q);if(!y||y<=0){pe("সঠিক কিস্তি সংখ্যা দিন");return}Al({id:L,subCategory:ue.trim(),installments:y,mode:V,categories:V==="all"?[]:E}),_(null),pe("✓ কিস্তি রুল সফলভাবে আপডেট করা হয়েছে!"),d()},U=(y,le)=>{confirm(`আপনি কি নিশ্চিত যে "${le}" এর কিস্তি রুলটি মুছে ফেলতে চান?`)&&($R(y),pe(`✓ "${le}" রুলটি মুছে ফেলা হয়েছে!`),d())},B=()=>{confirm("আপনি কি সকল কিস্তি রুল রিসেট করে স্ট্যান্ডার্ড ডিফল্ট অবস্থায় ফিরিয়ে নিতে চান?")&&(WR(),_(null),K(!1),pe("✓ সকল কিস্তি রুল স্ট্যান্ডার্ড ডিফল্ট অবস্থায় রিসেট করা হয়েছে!"),d())},ge=y=>{y==="standard_monthly"?(Al({id:1,subCategory:"1 year",installments:12,mode:"all",categories:[]}),Al({id:2,subCategory:"1.5 year",installments:18,mode:"all_except",categories:["buniyed","sufolon"]}),Al({id:3,subCategory:"2 year",installments:24,mode:"only",categories:["agrossor"]}),pe("✓ স্ট্যান্ডার্ড মাসিক কিস্তি প্রিসেট প্রয়োগ করা হয়েছে (১ বছর=১২, ১.৫ বছর=১৮, ২ বছর=২৪)")):y==="weekly_50"?(Al({id:Date.now(),subCategory:"1 year (50 kisti)",installments:50,mode:"all",categories:[]}),pe("✓ ৫০ কিস্তি সাপ্তাহিক রুল যুক্ত করা হয়েছে (১ বছর = ৫০ কিস্তি)")):y==="weekly_46"&&(Al({id:Date.now(),subCategory:"1 year (46 kisti)",installments:46,mode:"all",categories:[]}),pe("✓ ৪৬ কিস্তি সাপ্তাহিক রুল যুক্ত করা হয়েছে (১ বছর = ৪৬ কিস্তি)")),d()};return n.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-2 sm:p-4 backdrop-blur-xs animate-in fade-in duration-200",children:n.jsxs("div",{className:"flex h-full sm:h-auto sm:max-h-[94vh] w-full max-w-3xl flex-col rounded-2xl bg-white shadow-2xl overflow-hidden border border-slate-200",children:[n.jsxs("div",{className:"flex items-center justify-between border-b bg-gradient-to-r from-violet-800 via-purple-900 to-slate-900 px-4 sm:px-6 py-3.5 text-white shrink-0",children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/20 text-violet-300 ring-1 ring-violet-400/30 text-lg shadow-inner",children:"🔢"}),n.jsxs("div",{children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("h2",{className:"text-base sm:text-lg font-black tracking-tight text-white",children:"কিস্তি কার্ড রুল সেটিংস (Kisti Rules)"}),n.jsx("span",{className:"rounded-md bg-violet-500/20 px-2 py-0.5 text-[10px] font-bold text-violet-200 ring-1 ring-violet-400/30 uppercase",children:"Installment Settings"})]}),n.jsx("p",{className:"text-xs text-violet-200/80 font-medium",children:"ঋণ মেয়াদের কিস্তি সংখ্যা ও প্রোডাক্ট রুল পরিচালনা করুন (Add / Edit / Delete)"})]})]}),n.jsx("button",{onClick:o,className:"rounded-lg p-1.5 text-violet-300 hover:text-white hover:bg-white/10 transition cursor-pointer text-xl leading-none","aria-label":"Close",children:"✕"})]}),me&&n.jsxs("div",{className:"bg-emerald-50 border-b border-emerald-200 px-4 py-2 flex items-center justify-between text-xs font-bold text-emerald-900 shrink-0",children:[n.jsx("span",{children:me}),n.jsx("button",{onClick:()=>pe(""),className:"text-emerald-700 hover:text-emerald-950 text-sm px-1 font-bold cursor-pointer",children:"✕"})]}),n.jsxs("div",{className:"border-b bg-gradient-to-b from-violet-50/70 to-slate-50/70 p-3 sm:p-4 shrink-0 space-y-3",children:[n.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-3",children:[n.jsxs("div",{className:"space-y-1.5 flex-1",children:[n.jsx("span",{className:"text-[11px] font-black uppercase tracking-wider text-violet-950 block",children:"⚡ দ্রুত প্রিসেট (Quick Presets):"}),n.jsxs("div",{className:"flex flex-wrap gap-1.5",children:[n.jsxs("button",{type:"button",onClick:()=>ge("standard_monthly"),className:"rounded-xl bg-violet-700 hover:bg-violet-800 text-white px-3 py-1.5 text-xs font-bold shadow-xs transition cursor-pointer flex items-center gap-1.5",children:[n.jsx("span",{children:"🌟"}),n.jsx("span",{children:"স্ট্যান্ডার্ড (১২, ১৮, ২৪ কিস্তি)"})]}),n.jsx("button",{type:"button",onClick:()=>ge("weekly_50"),className:"rounded-xl bg-white hover:bg-violet-50 border border-violet-300 text-violet-900 px-2.5 py-1.5 text-xs font-bold shadow-2xs transition cursor-pointer",children:"+ ৫০ কিস্তি (১ বছর)"}),n.jsx("button",{type:"button",onClick:()=>ge("weekly_46"),className:"rounded-xl bg-white hover:bg-violet-50 border border-violet-300 text-violet-900 px-2.5 py-1.5 text-xs font-bold shadow-2xs transition cursor-pointer",children:"+ ৪৬ কিস্তি (১ বছর)"})]})]}),n.jsxs("div",{className:"rounded-xl border border-violet-200 bg-white p-2.5 shadow-2xs flex items-center gap-2.5 shrink-0",children:[n.jsxs("div",{children:[n.jsx("span",{className:"text-[10px] font-bold text-slate-500 uppercase block",children:"টেস্ট লোন পরিমাণ:"}),n.jsxs("div",{className:"flex items-center gap-1 mt-0.5",children:[n.jsx("input",{type:"number",min:1e3,step:5e3,value:ie,onChange:y=>ne(Number(y.target.value)||0),className:"w-24 rounded-lg border border-slate-300 px-2 py-1 text-right font-mono text-sm font-black text-violet-950 focus:border-violet-600 focus:outline-none"}),n.jsx("span",{className:"text-xs font-bold text-slate-600",children:"৳"})]})]}),n.jsx("div",{className:"flex flex-col gap-1",children:[3e4,5e4,1e5].map(y=>n.jsx("button",{type:"button",onClick:()=>ne(y),className:`rounded px-1.5 py-0.5 text-[10px] font-bold font-mono transition cursor-pointer ${ie===y?"bg-violet-700 text-white":"bg-slate-100 text-slate-600 hover:bg-slate-200"}`,children:Ae(y)},y))})]})]}),n.jsxs("div",{className:"flex items-center justify-between text-[11px] bg-violet-100/60 rounded-lg px-3 py-1.5 text-violet-950 border border-violet-200/80",children:[n.jsxs("span",{className:"font-semibold",children:["💡 কিস্তি হিসাবের নিয়ম: ",n.jsx("span",{className:"font-mono font-bold",children:"(মোট ঋণ + SC) ÷ কিস্তি সংখ্যা = প্রতি কিস্তির পরিমাণ"})]}),n.jsxs("span",{className:"hidden sm:inline text-violet-800 font-medium",children:["উদাহরণ: ",Ae(ie)," ৳ ঋণ ÷ ১২ কিস্তি = ",n.jsxs("b",{className:"font-mono",children:[Ae(Math.round(ie/12))," ৳ / কিস্তি"]})]})]})]}),n.jsxs("div",{className:"flex-1 overflow-y-auto p-3 sm:p-5 space-y-4",children:[n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsxs("span",{className:"text-xs font-black uppercase tracking-wider text-slate-800 flex items-center gap-1.5",children:[n.jsx("span",{children:"📋"})," সক্রিয় কিস্তি রুলসমূহ:"]}),n.jsxs("span",{className:"rounded-full bg-violet-100 text-violet-800 font-bold px-2 py-0.5 text-xs",children:[u.length," টি"]})]}),!G&&n.jsxs("button",{type:"button",onClick:()=>K(!0),className:"rounded-xl bg-violet-700 hover:bg-violet-800 active:scale-95 text-white px-3.5 py-1.5 text-xs font-bold transition shadow-xs flex items-center gap-1.5 cursor-pointer",children:[n.jsx("span",{children:"+"}),n.jsx("span",{children:"নতুন কিস্তি রুল যোগ করুন"})]})]}),G&&n.jsxs("div",{className:"rounded-2xl border-2 border-violet-400 bg-violet-50/50 p-4 shadow-sm space-y-3.5 animate-in fade-in duration-150",children:[n.jsxs("div",{className:"flex items-center justify-between border-b border-violet-200 pb-2.5",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-base",children:"✨"}),n.jsx("span",{className:"font-black text-sm text-violet-950",children:"নতুন কিস্তি রুল যুক্ত করুন (Add New Kisti Rule)"})]}),n.jsx("button",{type:"button",onClick:()=>K(!1),className:"rounded-lg p-1 text-slate-400 hover:text-slate-700 hover:bg-white/60 text-lg cursor-pointer leading-none",children:"✕"})]}),n.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:[n.jsxs("div",{className:"space-y-1",children:[n.jsx("label",{className:"block text-xs font-bold text-slate-800",children:"মেয়াদ / সাব-ক্যাটাগরির নাম (Sub Category):"}),n.jsx("input",{type:"text",list:"subcat-options",value:f,onChange:y=>x(y.target.value),placeholder:"যেমন: 1 year, 1.5 year, 2 year, 6 month",className:"w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm font-bold text-slate-900 focus:border-violet-600 focus:outline-none"}),n.jsxs("datalist",{id:"subcat-options",children:[n.jsx("option",{value:"1 year"}),n.jsx("option",{value:"1.5 year"}),n.jsx("option",{value:"2 year"}),n.jsx("option",{value:"6 month"}),n.jsx("option",{value:"3 year"}),n.jsx("option",{value:"50 week"}),n.jsx("option",{value:"46 week"})]}),n.jsx("div",{className:"flex flex-wrap gap-1 pt-1",children:["1 year","1.5 year","2 year","6 month"].map(y=>n.jsx("button",{type:"button",onClick:()=>x(y),className:"rounded bg-white hover:bg-violet-100 border border-slate-200 px-2 py-0.5 text-[10px] font-bold text-slate-700 cursor-pointer",children:y},y))})]}),n.jsxs("div",{className:"space-y-1",children:[n.jsx("label",{className:"block text-xs font-bold text-slate-800",children:"কিস্তি সংখ্যা (Installments):"}),n.jsx("input",{type:"number",min:"1",value:h,onChange:y=>v(y.target.value===""?"":Number(y.target.value)),placeholder:"যেমন: 12",className:"w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm font-mono font-bold text-violet-950 focus:border-violet-600 focus:outline-none"}),n.jsx("div",{className:"flex flex-wrap gap-1 pt-1",children:[12,18,24,46,50].map(y=>n.jsxs("button",{type:"button",onClick:()=>v(y),className:"rounded bg-white hover:bg-violet-100 border border-slate-200 px-2 py-0.5 text-[10px] font-bold font-mono text-slate-700 cursor-pointer",children:[y," কিস্তি"]},y))})]})]}),n.jsxs("div",{className:"space-y-1.5",children:[n.jsx("label",{className:"block text-xs font-bold text-slate-800",children:"প্রোডাক্ট প্রযোজ্যতা (Rule Mode):"}),n.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-2",children:[n.jsxs("label",{className:`flex items-center gap-2 rounded-xl border p-2.5 text-xs font-bold cursor-pointer transition ${S==="all"?"bg-violet-600 text-white border-violet-600 shadow-2xs":"bg-white text-slate-700 border-slate-300 hover:bg-slate-50"}`,children:[n.jsx("input",{type:"radio",name:"newRuleMode",value:"all",checked:S==="all",onChange:()=>b("all"),className:"sr-only"}),n.jsx("span",{children:"🌐 সকল প্রোডাক্টে প্রযোজ্য"})]}),n.jsxs("label",{className:`flex items-center gap-2 rounded-xl border p-2.5 text-xs font-bold cursor-pointer transition ${S==="only"?"bg-violet-600 text-white border-violet-600 shadow-2xs":"bg-white text-slate-700 border-slate-300 hover:bg-slate-50"}`,children:[n.jsx("input",{type:"radio",name:"newRuleMode",value:"only",checked:S==="only",onChange:()=>b("only"),className:"sr-only"}),n.jsx("span",{children:"🎯 নির্দিষ্ট প্রোডাক্টে প্রযোজ্য"})]}),n.jsxs("label",{className:`flex items-center gap-2 rounded-xl border p-2.5 text-xs font-bold cursor-pointer transition ${S==="all_except"?"bg-violet-600 text-white border-violet-600 shadow-2xs":"bg-white text-slate-700 border-slate-300 hover:bg-slate-50"}`,children:[n.jsx("input",{type:"radio",name:"newRuleMode",value:"all_except",checked:S==="all_except",onChange:()=>b("all_except"),className:"sr-only"}),n.jsx("span",{children:"🚫 নির্দিষ্ট প্রোডাক্ট ব্যতীত"})]})]})]}),S!=="all"&&n.jsxs("div",{className:"rounded-xl bg-white border border-violet-200 p-3 space-y-2",children:[n.jsx("span",{className:"block text-[11px] font-black uppercase tracking-wider text-slate-700",children:S==="only"?"প্রযোজ্য প্রোডাক্ট নির্বাচন করুন (Select Products):":"বাদ দেওয়ার জন্য প্রোডাক্ট নির্বাচন করুন (Exclude Products):"}),n.jsx("div",{className:"flex flex-wrap gap-1.5",children:O.map(y=>{const le=H.includes(y.toLowerCase().trim());return n.jsxs("button",{type:"button",onClick:()=>R(y),className:`rounded-lg px-2.5 py-1 text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${le?"bg-violet-700 text-white shadow-2xs ring-1 ring-violet-500":"bg-slate-100 text-slate-700 hover:bg-slate-200"}`,children:[n.jsx("span",{children:le?"✓":"+"}),n.jsx("span",{children:mt(y)})]},y)})})]}),n.jsxs("div",{className:"flex items-center justify-end gap-2 pt-2 border-t border-violet-200",children:[n.jsx("button",{type:"button",onClick:()=>K(!1),className:"rounded-xl border border-slate-300 bg-white px-3.5 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-100 transition cursor-pointer",children:"বাতিল"}),n.jsxs("button",{type:"button",onClick:re,className:"rounded-xl bg-violet-700 hover:bg-violet-800 text-white px-5 py-1.5 text-xs font-black shadow-sm transition cursor-pointer flex items-center gap-1.5",children:[n.jsx("span",{children:"✓"}),n.jsx("span",{children:"রুল সংরক্ষণ করুন (Add Rule)"})]})]})]}),n.jsx("div",{className:"space-y-2.5",children:u.length===0?n.jsxs("div",{className:"rounded-2xl border border-dashed border-slate-300 p-8 text-center bg-slate-50",children:[n.jsx("p",{className:"text-sm font-bold text-slate-500",children:"কোনো কিস্তি রুল পাওয়া যায়নি!"}),n.jsx("button",{type:"button",onClick:B,className:"mt-2 text-xs font-bold text-violet-700 hover:underline cursor-pointer",children:"স্ট্যান্ডার্ড ডিফল্ট রুল ফিরিয়ে আনুন"})]}):u.map(y=>{const le=L===y.id,te=y.installments>0?Math.round(ie/y.installments):0;return n.jsx("div",{className:"rounded-2xl border border-slate-200 bg-white p-3.5 shadow-xs hover:border-violet-300 transition",children:le?n.jsxs("div",{className:"space-y-3 bg-violet-50/70 p-3.5 rounded-xl border border-violet-300",children:[n.jsxs("div",{className:"flex items-center justify-between border-b border-violet-200 pb-2",children:[n.jsxs("span",{className:"text-xs font-black text-violet-950 uppercase tracking-wider flex items-center gap-1.5",children:[n.jsx("span",{children:"✏️"})," কিস্তি রুল সম্পাদনা (Edit Rule)"]}),n.jsxs("span",{className:"text-[10px] font-mono text-slate-500",children:["ID: ",y.id]})]}),n.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2.5",children:[n.jsxs("div",{children:[n.jsx("label",{className:"block text-[11px] font-bold text-slate-800 mb-1",children:"মেয়াদ / সাব-ক্যাটাগরির নাম:"}),n.jsx("input",{type:"text",value:ue,onChange:Y=>C(Y.target.value),className:"w-full rounded-lg border border-slate-300 bg-white px-2.5 py-1.5 text-xs font-bold font-mono text-slate-900 focus:border-violet-600 focus:outline-none"})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-[11px] font-bold text-slate-800 mb-1",children:"কিস্তি সংখ্যা (Installments):"}),n.jsx("input",{type:"number",min:"1",value:q,onChange:Y=>k(Y.target.value===""?"":Number(Y.target.value)),className:"w-full rounded-lg border border-slate-300 bg-white px-2.5 py-1.5 text-xs font-bold font-mono text-violet-950 focus:border-violet-600 focus:outline-none"})]})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-[11px] font-bold text-slate-800 mb-1",children:"প্রোডাক্ট প্রযোজ্যতা (Rule Mode):"}),n.jsxs("select",{value:V,onChange:Y=>ce(Y.target.value),className:"w-full rounded-lg border border-slate-300 bg-white px-2.5 py-1.5 text-xs font-bold text-slate-800 focus:border-violet-600 focus:outline-none",children:[n.jsx("option",{value:"all",children:"🌐 সকল প্রোডাক্টে প্রযোজ্য (All Categories)"}),n.jsx("option",{value:"only",children:"🎯 শুধুমাত্র নির্দিষ্ট প্রোডাক্টে (Only in...)"}),n.jsx("option",{value:"all_except",children:"🚫 নির্দিষ্ট প্রোডাক্ট ব্যতীত (All Except...)"})]})]}),V!=="all"&&n.jsxs("div",{className:"rounded-lg bg-white border border-violet-200 p-2.5 space-y-1.5",children:[n.jsx("span",{className:"block text-[10px] font-bold text-slate-600 uppercase",children:V==="only"?"প্রযোজ্য প্রোডাক্ট নির্বাচন করুন:":"বাদ দেওয়া প্রোডাক্ট নির্বাচন করুন:"}),n.jsx("div",{className:"flex flex-wrap gap-1",children:O.map(Y=>{const Se=E.includes(Y.toLowerCase().trim());return n.jsxs("button",{type:"button",onClick:()=>I(Y),className:`rounded px-2 py-0.5 text-[11px] font-bold transition cursor-pointer flex items-center gap-1 ${Se?"bg-violet-700 text-white":"bg-slate-100 text-slate-600 hover:bg-slate-200"}`,children:[n.jsx("span",{children:Se?"✓":"+"}),n.jsx("span",{children:mt(Y)})]},Y)})})]}),n.jsxs("div",{className:"flex items-center justify-end gap-2 pt-2 border-t border-violet-200",children:[n.jsx("button",{type:"button",onClick:()=>_(null),className:"rounded-lg border border-slate-300 bg-white px-3 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition cursor-pointer",children:"বাতিল"}),n.jsx("button",{type:"button",onClick:M,className:"rounded-lg bg-violet-700 hover:bg-violet-800 text-white px-4 py-1 text-xs font-bold shadow-xs transition cursor-pointer",children:"✓ সংরক্ষণ করুন (Save)"})]})]}):n.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-3",children:[n.jsxs("div",{className:"space-y-1",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"font-black text-sm text-slate-900 font-mono",children:y.subCategory}),n.jsxs("span",{className:"rounded-full bg-violet-100 text-violet-900 border border-violet-200 px-2.5 py-0.5 text-xs font-black",children:[y.installments," কিস্তি (Installments)"]})]}),n.jsxs("div",{className:"flex items-center gap-2 text-xs",children:[y.mode==="all"&&n.jsx("span",{className:"rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200 px-2 py-0.5 font-bold",children:"✓ সকল প্রোডাক্টে অনুমোদিত"}),y.mode==="only"&&n.jsxs("span",{className:"rounded-md bg-blue-50 text-blue-800 border border-blue-200 px-2 py-0.5 font-bold",children:["🎯 শুধুমাত্র:"," ",y.categories&&y.categories.length>0?y.categories.map(Y=>mt(Y)).join(", "):"কোনোটি নির্বাচিত নেই"]}),y.mode==="all_except"&&n.jsxs("span",{className:"rounded-md bg-amber-50 text-amber-800 border border-amber-200 px-2 py-0.5 font-bold",children:["🚫 ব্যতীত:"," ",y.categories&&y.categories.length>0?y.categories.map(Y=>mt(Y)).join(", "):"কোনোটি নয়"]})]})]}),n.jsxs("div",{className:"flex items-center justify-between sm:justify-end gap-3 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100",children:[n.jsxs("div",{className:"text-right",children:[n.jsxs("span",{className:"text-[10px] text-slate-400 font-bold block",children:[Ae(ie)," ৳ লোনে কিস্তি:"]}),n.jsxs("span",{className:"font-mono text-sm font-black text-violet-950",children:[Ae(te)," ৳"]})]}),n.jsxs("div",{className:"flex items-center gap-1.5 shrink-0",children:[n.jsx("button",{type:"button",onClick:()=>ee(y),className:"rounded-lg bg-blue-50 hover:bg-blue-600 text-blue-700 hover:text-white border border-blue-200 px-2.5 py-1 text-xs font-bold transition shadow-2xs cursor-pointer",title:"Edit this rule",children:"Edit"}),n.jsx("button",{type:"button",onClick:()=>U(y.id,y.subCategory),className:"rounded-lg bg-rose-50 hover:bg-rose-600 text-rose-700 hover:text-white border border-rose-200 px-2 py-1 text-xs font-bold transition shadow-2xs cursor-pointer",title:"Delete this rule",children:"Delete"})]})]})]})},y.id||y.subCategory)})})]}),n.jsxs("div",{className:"flex items-center justify-between border-t bg-slate-50 px-4 sm:px-6 py-3.5 shrink-0",children:[n.jsxs("button",{type:"button",onClick:B,className:"rounded-xl border border-slate-300 bg-white px-3.5 py-2 text-xs font-bold text-slate-700 hover:bg-slate-100 transition cursor-pointer flex items-center gap-1.5",title:"Reset to default rules",children:[n.jsx("span",{children:"🔄"}),n.jsx("span",{children:"ডিফল্ট রিসেট"})]}),n.jsx("button",{type:"button",onClick:o,className:"rounded-xl bg-slate-800 hover:bg-slate-900 active:bg-black px-6 py-2 text-xs sm:text-sm font-bold text-white transition cursor-pointer",children:"বন্ধ করুন (Close)"})]})]})})}function f5({selectedDate:l}){const[o,u]=p.useState([]),[c,d]=p.useState(!1),A=()=>{d(!0),window.setTimeout(()=>d(!1),900)},[f,x]=p.useState([]),[h,v]=p.useState([]),[S,b]=p.useState(!1),[H,P]=p.useState([]),[G,K]=p.useState(!1),[L,_]=p.useState([]),[ue,C]=p.useState(!1),[q,k]=p.useState(!1),[V,ce]=p.useState(!1),[E,se]=p.useState(ts()),[ie,ne]=p.useState(!1),[me,pe]=p.useState("all"),[j,O]=p.useState(l),[R,I]=p.useState(l),[re,ee]=p.useState(null),[M,U]=p.useState({category:"",subCategory:"",amount:0,serviceCharge:0,description:"",txDate:l}),[B,ge]=p.useState(null),[y,le]=p.useState(!1),te=p.useMemo(()=>y&&M.description.trim()?c5(M.description):[],[y,M.description]),Y=fe=>{U(Ee=>({...Ee,description:fe.insert})),le(!1)},[Se,ye]=p.useState(""),Z=()=>{const fe=ln(),Ee=j<=R?j:R,Nt=j<=R?R:j;u(fe.filter(wn=>wn.type==="payment"&&wn.txDate>=Ee&&wn.txDate<=Nt)),x(ha("disburse")),v(ha("expense")),P(Jm()),_(Ao()),se(ts())};p.useEffect(()=>{O(l),I(l),Z(),U(Nt=>({...Nt,txDate:l}));const fe=()=>se(ts()),Ee=()=>Z();return window.addEventListener("kallyan-rule-changed",fe),window.addEventListener("tx-changed",Ee),window.addEventListener("categories-changed",Ee),()=>{window.removeEventListener("kallyan-rule-changed",fe),window.removeEventListener("tx-changed",Ee),window.removeEventListener("categories-changed",Ee)}},[l]),p.useEffect(()=>{Z()},[j,R]);const F=fe=>{const Ee=fe.trim().toLowerCase();return f.some(Nt=>Nt.name.toLowerCase()===Ee)},Re=F(M.category),Oe=M.category.trim().toLowerCase().includes("fund payment"),rt=ec(M.category,L,f.map(fe=>fe.name)),At=Re?vh(M.amount,M.category,M.subCategory,H):0,ft=Ob(M.category,E),tt=Re?dr(M.amount,M.category,E):0,Le=M.amount+At,lt=N2(M.subCategory,L,M.category),St=Re&&lt?Math.round(Le/lt):0,gt=H.find(fe=>fe.category===M.category.trim().toLowerCase()&&fe.subCategory===M.subCategory.trim().toLowerCase()),yt=gt?Number(gt.ratePer100):0,xe=()=>{if(Ie(M.txDate)){A();return}if(!_t(M.txDate)){alert(`⚠️ এই তারিখের (${M.txDate}) কর্মদিবস এখনও শুরু (Day Open) করা হয়নি। কোনো এন্ট্রি করার পূর্বে দিনটি Day Open করুন।`),window.dispatchEvent(new CustomEvent("open-day-open-modal"));return}const fe=pt(M.txDate,l);if(fe.blocked){alert(`⚠️ ${fe.reason||"দুটি কর্মদিবসের মধ্যবর্তী বন্ধের দিনে কোনো নতুন এন্ট্রি করা যাবে না।"}`);return}if(!M.category.trim())return ye("Category required");if(!M.amount||M.amount<=0)return ye("Amount must be greater than 0");ep({type:"payment",category:M.category.trim().toLowerCase(),subCategory:Re||Oe?M.subCategory:"",amount:String(M.amount),serviceCharge:String(At),description:M.description||"",txDate:M.txDate}),oc(M.description),U({category:"",subCategory:"",amount:0,serviceCharge:0,description:"",txDate:l}),ye("Payment saved successfully!"),Z()},ke=()=>{if(!B||!B.id)return;if(Ie(B.txDate)){A();return}const fe=pt(B.txDate,l);if(fe.blocked){alert(`⚠️ ${fe.reason||"দুটি কর্মদিবসের মধ্যবর্তী বন্ধের দিনে কোনো পরিবর্তন করা যাবে না।"}`);return}const Ee=F(B.category),Nt=(B.category||"").trim().toLowerCase().includes("fund payment"),wn=Ee?vh(B.amount,B.category,B.subCategory,H):0;tp({id:B.id,type:"payment",category:B.category.trim().toLowerCase(),subCategory:Ee||Nt?B.subCategory:"",amount:String(B.amount),serviceCharge:String(wn),description:B.description||"",txDate:B.txDate}),oc(B.description),ge(null),Z()},Fe=()=>{if(re!==null){const fe=o.find(Ee=>Ee.id===re);if(fe&&Ie(fe.txDate)){A(),ee(null);return}np(re),ee(null),Z()}},Ot=me==="all"?o:o.filter(fe=>fe.category.toLowerCase().trim()===me.toLowerCase().trim()),rn=Ot.reduce((fe,Ee)=>fe+Number(Ee.amount),0),Zt=o.reduce((fe,Ee)=>fe+Number(Ee.amount),0),Dt=Array.from(new Set(o.map(fe=>fe.category.toLowerCase().trim()).filter(Boolean)));return n.jsxs("div",{className:"space-y-6",children:[n.jsxs("div",{id:"payment-form-card",className:"rounded-2xl border-t-4 border-red-500 bg-white p-5 sm:p-6 shadow-sm border border-slate-200 transition-all",children:[n.jsxs("div",{className:"flex items-center justify-between mb-4",children:[n.jsxs("h1",{className:"text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2",children:[n.jsx("span",{children:"📤"}),n.jsx("span",{children:"Payment Entry"}),Ie(M.txDate)&&n.jsx("span",{className:`shrink-0 rounded-lg border border-rose-300 bg-rose-100 px-2 py-0.5 text-[10px] font-black text-rose-700 ${c?"lock-pulse":""}`,title:"দিন সমাপ্ত (Day Closed) — হিসাব লক করা আছে",children:"🔒 Day Closed"})]}),n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("button",{type:"button",onClick:()=>ce(!0),title:"Denomination — নোট গুনে ক্যাশ মেলান (রিপোর্ট উইন্ডো)","aria-label":"Denomination — Check Diff",className:"flex h-8 w-9 shrink-0 cursor-pointer items-center justify-center rounded-xl border border-amber-600 bg-amber-500 text-base leading-none shadow-xs hover:bg-amber-600 sm:text-lg",children:"💰"}),n.jsx("span",{className:"text-xs font-mono font-bold text-slate-600 bg-slate-100 px-2.5 py-1 rounded border border-slate-200",children:M.txDate})]})]}),!Ie(M.txDate)&&pt(M.txDate,l).blocked&&n.jsxs("div",{className:"mb-4 rounded-xl border border-rose-400 bg-rose-50 p-3 text-xs sm:text-sm font-bold text-rose-900 flex items-start gap-2 shadow-xs",children:[n.jsx("span",{className:"text-base shrink-0",children:"🚫"}),n.jsxs("div",{children:[n.jsx("span",{className:"block font-black text-rose-950",children:"এই তারিখটি ব্লক (কর্মদিবসের মধ্যবর্তী বন্ধের দিন)"}),n.jsx("span",{className:"text-xs text-rose-800 font-normal mt-0.5 block",children:pt(M.txDate,l).reason})]})]}),n.jsxs("div",{className:"grid gap-4 md:grid-cols-2",children:[n.jsxs("div",{className:"grid grid-cols-2 items-end gap-3 md:grid-cols-3 md:col-span-2",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"mb-1 flex items-center justify-between",children:[n.jsx("label",{className:"text-xs font-bold text-slate-700",children:"Category"}),n.jsx("button",{type:"button",onClick:()=>b(!0),className:"text-xs font-bold text-blue-600 hover:underline cursor-pointer",children:"⚙ Manage"})]}),n.jsx(qh,{value:M.category,disabled:Ie(M.txDate),onChange:fe=>U({...M,category:fe,subCategory:""}),disburseCats:f,expenseCats:h,onManageClick:()=>b(!0)})]}),n.jsxs("div",{children:[n.jsxs("div",{className:"mb-1 flex items-center justify-between gap-1",children:[n.jsx("label",{className:"text-xs font-bold text-slate-700",children:Re?"Disburse Amount":"Expense Amount"}),n.jsx("button",{type:"button",disabled:Ie(M.txDate),onClick:()=>{if(Ie(M.txDate)){A();return}k(!0)},className:"flex items-center gap-1 rounded-lg bg-amber-500 hover:bg-amber-600 px-2 py-0.5 text-[10px] sm:px-2.5 sm:py-1 sm:text-xs font-bold text-slate-950 shadow-xs cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed shrink-0 whitespace-nowrap",children:"💳 Denomination"})]}),n.jsx("input",{type:"number",min:0,step:"1",disabled:Ie(M.txDate),value:M.amount||"",placeholder:"",onChange:fe=>U({...M,amount:Math.round(Number(fe.target.value)||0)}),className:`w-full h-[42px] rounded-lg border px-3 py-2 text-right font-mono text-lg font-bold focus:outline-none ${Ie(M.txDate)?"border-slate-300 bg-slate-100 text-slate-500 cursor-not-allowed opacity-60":"border-slate-300 bg-orange-50 hover:bg-orange-100/70 focus:border-blue-500"}`})]}),(Re||Oe)&&n.jsxs("div",{className:"md:col-start-1 md:row-start-2",children:[n.jsxs("div",{className:"mb-1 flex items-center justify-between gap-2",children:[n.jsx("label",{className:"text-xs font-bold text-slate-700",children:"Sub Category"}),n.jsxs("div",{className:"flex items-center gap-2",children:[M.subCategory?n.jsx("button",{type:"button",disabled:Ie(M.txDate),onClick:()=>{if(Ie(M.txDate)){A();return}U({...M,subCategory:""})},title:"সাব-ক্যাটাগরি মুছে ফেলুন (ডিলিট)",className:"cursor-pointer text-[11px] font-black text-rose-600 hover:underline disabled:cursor-not-allowed disabled:opacity-40",children:"✕ মুছুন"}):null,Re?n.jsx("button",{type:"button",onClick:()=>C(!0),className:"text-xs font-bold text-blue-600 hover:underline flex items-center gap-1 cursor-pointer",children:"⚙ Rules"}):n.jsx("button",{type:"button",onClick:()=>b(!0),title:"Disburse Category যোগ/এডিট/ডিলিট — সেই তালিকা থেকেই এই সাব-ক্যাটাগরি আসে",className:"text-xs font-bold text-blue-600 hover:underline flex items-center gap-1 cursor-pointer",children:"⚙ Manage"})]})]}),n.jsx(Zn,{value:M.subCategory,onChange:fe=>U({...M,subCategory:fe}),options:M.subCategory&&!rt.includes(M.subCategory)?[...rt,M.subCategory]:rt,placeholder:"-- Select Sub Category --",disabled:Ie(M.txDate),className:"w-full h-[42px] rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-bold text-slate-800 focus:border-blue-500 focus:outline-none cursor-pointer",noKeyboardOnMobile:!0})]}),n.jsxs("div",{className:`${Re||Oe?"":"col-span-2 md:col-span-1"} md:col-start-3 md:row-start-1 relative`,children:[n.jsxs("label",{className:"mb-1 block text-xs font-bold text-slate-700",children:["Description ",n.jsx("span",{className:"text-[10px] font-black text-amber-600",children:"💡 টাইপ করলেই সাজেশন"})]}),n.jsx("input",{type:"text",disabled:Ie(M.txDate),value:M.description,onChange:fe=>U({...M,description:fe.target.value}),onFocus:()=>le(!0),onBlur:()=>setTimeout(()=>le(!1),160),onKeyDown:fe=>{fe.key==="Escape"&&le(!1),fe.key==="Enter"&&te.length&&(fe.preventDefault(),Y(te[0]))},placeholder:"কোড / নাম / মেম্বার কোড লিখুন…",autoComplete:"off",className:`w-full h-[42px] rounded-lg border px-3 py-2 text-sm font-semibold text-slate-800 focus:outline-none ${Ie(M.txDate)?"border-slate-300 bg-slate-100 text-slate-500 cursor-not-allowed opacity-60":"border-slate-300 bg-orange-50 focus:border-blue-500"}`}),y&&te.length>0&&n.jsx("div",{className:"absolute left-0 right-0 top-full z-50 mt-1 max-h-56 overflow-y-auto rounded-xl border border-slate-300 bg-white shadow-2xl",children:te.map((fe,Ee)=>n.jsxs("button",{type:"button",onMouseDown:Nt=>{Nt.preventDefault(),Y(fe)},className:`flex w-full items-start gap-2 px-3 py-2 text-left transition cursor-pointer hover:bg-amber-50 ${Ee>0?"border-t border-slate-100":""}`,children:[n.jsx("span",{className:"mt-0.5 text-sm leading-none",children:fe.icon}),n.jsxs("span",{className:"min-w-0 flex-1",children:[n.jsx("span",{className:"block truncate text-[13px] font-black text-slate-800",children:fe.title}),n.jsx("span",{className:"block truncate text-[10px] font-bold text-slate-500",children:fe.sub})]})]},Ee))})]})]}),n.jsxs("div",{className:"flex gap-2.5 md:col-span-2 pt-1",children:[n.jsx("button",{onClick:xe,disabled:Ie(M.txDate)||!_t(M.txDate)||pt(M.txDate,l).blocked,className:"min-h-[44px] rounded-xl bg-red-600 px-6 py-2.5 font-bold text-sm text-white shadow hover:bg-red-700 active:scale-98 transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",children:Ie(M.txDate)?"🔒 দিন সমাপ্ত (লকড)":pt(M.txDate,l).blocked?"🚫 তারিখ ব্লকড":_t(M.txDate)?"Save Payment":"☀️ দিন শুরু (Day Open) করুন"}),n.jsx("button",{onClick:()=>{U({category:"",subCategory:"",amount:0,serviceCharge:0,description:"",txDate:l}),ye("")},disabled:Ie(M.txDate)||!_t(M.txDate)||pt(M.txDate,l).blocked,className:"min-h-[44px] rounded-xl bg-slate-500 px-6 py-2.5 font-bold text-sm text-white hover:bg-slate-600 active:scale-98 transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",children:"Reset"})]}),Re?n.jsxs("div",{className:"grid grid-cols-2 gap-2 sm:grid-cols-4 md:col-span-2",children:[n.jsxs("div",{className:"rounded-xl bg-amber-500 p-2.5 text-white shadow-xs",children:[n.jsxs("div",{className:"flex items-center justify-between text-xs font-semibold",children:[n.jsxs("span",{children:["SC ",yt?`(${yt}/100)`:""]}),n.jsx("button",{type:"button",onClick:()=>K(!0),className:"flex h-5 w-5 items-center justify-center rounded-full bg-white/30 text-xs cursor-pointer",children:"⚙"})]}),n.jsx("div",{className:"mt-1 font-mono text-base sm:text-lg font-bold text-right",children:Ae(At)})]}),n.jsxs("div",{className:"rounded-xl bg-violet-600 p-2.5 text-white shadow-xs",children:[n.jsxs("div",{className:"flex items-center justify-between text-xs font-semibold",children:[n.jsxs("span",{children:["Kisti ",lt?`(${lt})`:""]}),n.jsx("button",{type:"button",onClick:()=>C(!0),className:"flex h-5 w-5 items-center justify-center rounded-full bg-white/30 text-xs cursor-pointer hover:bg-white/40 active:scale-95 transition",title:"কিস্তি রুল সেটিংস (Kisti / Installment Rules)",children:"⚙"})]}),n.jsx("div",{className:"mt-1 font-mono text-base sm:text-lg font-bold text-right",children:Ae(St)})]}),n.jsxs("div",{className:"rounded-xl bg-gradient-to-br from-teal-600 to-emerald-700 p-2.5 text-white shadow-sm ring-1 ring-teal-400/40",children:[n.jsxs("div",{className:"flex items-center justify-between text-xs font-bold",children:[n.jsxs("span",{className:"flex items-center gap-1 truncate pr-1",children:[n.jsx("span",{children:"🤝"}),n.jsx("span",{children:"Kallyan Fund"})]}),n.jsx("button",{type:"button",onClick:()=>ne(!0),className:"flex items-center gap-1 rounded-md bg-white/20 hover:bg-white/30 px-1.5 py-0.5 text-[10px] font-bold text-white transition cursor-pointer",title:"Change Kallyan Fund Settings",children:n.jsx("span",{children:"⚙️"})})]}),n.jsxs("div",{className:"mt-1 flex items-baseline justify-between",children:[n.jsxs("span",{className:"text-[10px] font-semibold text-teal-100 truncate",children:[ft.percent,"% + ",ft.fixed,"৳"]}),n.jsx("span",{className:"font-mono text-base sm:text-lg font-black text-right",children:Ae(tt)})]})]}),n.jsxs("div",{className:"rounded-xl bg-blue-700 p-2.5 text-white shadow-xs",children:[n.jsx("div",{className:"text-xs font-semibold",children:"Total (Amount + SC)"}),n.jsx("div",{className:"mt-1 font-mono text-base sm:text-lg font-bold text-right",children:Ae(Le)})]})]}):n.jsx("div",{className:"grid grid-cols-1 md:col-span-2",children:n.jsxs("div",{className:"flex items-center justify-between rounded-xl bg-slate-800 p-3 text-white",children:[n.jsx("span",{className:"text-xs font-bold uppercase tracking-wider text-slate-300",children:"Total Expense"}),n.jsx("span",{className:"font-mono text-xl font-black",children:Ae(M.amount||0)})]})})]}),Se&&n.jsx("p",{className:"mt-2 text-xs font-bold text-emerald-700",children:Se})]}),n.jsxs("div",{className:"overflow-hidden rounded-2xl bg-white shadow-sm border border-slate-200",children:[n.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b px-5 py-3 bg-slate-50",children:[n.jsxs("div",{className:"font-bold text-slate-800 text-sm sm:text-base",children:["Saved Payment Entries (",Ot.length,"/",o.length,")"]}),n.jsxs("div",{className:"grid w-full grid-cols-2 items-center gap-x-2 gap-y-1 sm:w-auto sm:max-w-md sm:flex sm:flex-wrap",children:[n.jsxs("div",{className:"flex min-w-0 items-center gap-1.5",children:[n.jsx("label",{className:"shrink-0 text-xs font-bold text-slate-600",children:"From:"}),n.jsx("div",{className:"min-w-0 flex-1",children:n.jsx(hn,{value:j,onChange:fe=>O(fe),className:"w-full px-2 py-1 text-xs sm:text-sm bg-orange-50"})})]}),n.jsxs("div",{className:"flex min-w-0 items-center gap-1.5",children:[n.jsx("label",{className:"shrink-0 text-xs font-bold text-slate-600",children:"To:"}),n.jsx("div",{className:"min-w-0 flex-1",children:n.jsx(hn,{value:R,onChange:fe=>I(fe),className:"w-full px-2 py-1 text-xs sm:text-sm bg-orange-50"})})]})]}),n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("label",{className:"text-xs font-bold text-slate-600",children:"Category Filter:"}),n.jsx(Zn,{value:me,onChange:fe=>pe(fe),noKeyboardOnMobile:!0,options:[{value:"all",label:`All Categories (${o.length})`},...Dt.map(fe=>({value:fe,label:mt(fe)}))],placeholder:"All Categories",className:"rounded-lg border border-slate-300 bg-orange-50 px-3 py-1.5 text-xs sm:text-sm font-semibold text-slate-800 shadow-2xs focus:border-blue-500 focus:outline-none cursor-pointer w-44 sm:w-52"})]})]}),n.jsx("div",{className:"overflow-x-auto max-h-[60vh] sm:max-h-[68vh] overflow-y-auto",children:n.jsxs("table",{className:"w-full text-xs sm:text-sm",children:[n.jsx("thead",{className:"sticky top-0 bg-slate-800 text-left text-white z-10",children:n.jsxs("tr",{children:[n.jsx("th",{className:"px-3.5 py-2.5",children:"#"}),n.jsx("th",{className:"px-3.5 py-2.5",children:"Category"}),n.jsx("th",{className:"px-3.5 py-2.5",children:"Sub Cat."}),n.jsx("th",{className:"px-3.5 py-2.5",children:"Description"}),n.jsx("th",{className:"px-3.5 py-2.5 text-right",children:"Disburse/Expense"}),n.jsx("th",{className:"px-3.5 py-2.5 text-center",children:"Action"})]})}),n.jsx("tbody",{children:Ot.length===0?n.jsx("tr",{children:n.jsx("td",{colSpan:6,className:"px-3 py-6 text-center text-slate-400",children:me==="all"?`No payment entries on ${l}`:`No entries for category "${mt(me)}"`})}):Ot.map((fe,Ee)=>n.jsxs("tr",{className:"border-b hover:bg-slate-50",children:[n.jsx("td",{className:"px-3.5 py-2 text-slate-500 font-mono",children:Ee+1}),n.jsx("td",{className:"px-3.5 py-2 font-bold text-slate-800",children:mt(fe.category)}),n.jsx("td",{className:"px-3.5 py-2 text-slate-600 text-xs",children:fe.subCategory||"-"}),n.jsx("td",{className:"px-3.5 py-2 text-slate-600 text-xs",children:fe.description||"-"}),n.jsx("td",{className:"px-3.5 py-2 text-right font-mono font-black text-slate-900",children:Ae(fe.amount)}),n.jsx("td",{className:"px-3.5 py-2 text-center whitespace-nowrap",children:n.jsxs("div",{className:"flex items-center justify-center gap-2",children:[n.jsx("button",{type:"button",disabled:Ie(fe.txDate),onClick:()=>{if(Ie(fe.txDate)){A();return}ge({id:fe.id,category:fe.category,subCategory:fe.subCategory??"",amount:Number(fe.amount),serviceCharge:Number(fe.serviceCharge||0),description:fe.description??"",txDate:fe.txDate})},className:`min-h-[36px] rounded-lg px-3 py-1.5 text-xs font-bold text-white transition ${Ie(fe.txDate)?"bg-slate-400 cursor-not-allowed opacity-50":"bg-blue-600 hover:bg-blue-700 cursor-pointer"}`,title:Ie(fe.txDate)?"দিন সমাপ্ত (Locked) - উপরের Working-Day বার থেকে Re-open করুন":"Edit",children:Ie(fe.txDate)?"🔒 Edit":"Edit"}),n.jsx("button",{type:"button",disabled:Ie(fe.txDate),onClick:()=>{if(Ie(fe.txDate)){A();return}ee(fe.id)},className:`min-h-[36px] rounded-lg px-3 py-1.5 text-xs font-bold text-white transition ${Ie(fe.txDate)?"bg-slate-400 cursor-not-allowed opacity-50":"bg-rose-600 hover:bg-rose-700 cursor-pointer"}`,title:Ie(fe.txDate)?"দিন সমাপ্ত (Locked) - উপরের Working-Day বার থেকে Re-open করুন":"Delete",children:Ie(fe.txDate)?"🔒 Del":"Delete"})]})})]},fe.id))}),o.length>0&&n.jsx("tfoot",{className:"sticky bottom-0 bg-slate-100 font-bold border-t-2 border-slate-300 z-10 shadow-inner",children:n.jsxs("tr",{children:[n.jsx("td",{colSpan:4,className:"px-3.5 py-2.5 text-right font-bold text-slate-800",children:me==="all"?"Total Payment":`Subtotal (${mt(me)})`}),n.jsx("td",{className:"px-3.5 py-2.5 text-right font-mono font-black text-slate-900",children:Ae(me==="all"?Zt:rn)}),n.jsx("td",{})]})})]})})]}),re!==null&&n.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4",children:n.jsxs("div",{className:"w-full max-w-sm rounded-2xl bg-white p-5 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95",children:[n.jsxs("h3",{className:"text-base font-bold text-slate-900 flex items-center gap-2",children:[n.jsx("span",{className:"text-rose-600 text-lg",children:"⚠️"}),n.jsx("span",{children:"Confirm Delete"})]}),n.jsx("p",{className:"mt-2 text-sm text-slate-600",children:"Are you sure you want to permanently delete this payment entry? This action cannot be undone."}),n.jsxs("div",{className:"mt-5 flex items-center justify-end gap-3",children:[n.jsx("button",{type:"button",onClick:()=>ee(null),className:"min-h-[44px] rounded-xl bg-slate-200 px-4 py-2 text-sm font-bold text-slate-700 hover:bg-slate-300 active:scale-95 transition",children:"Cancel"}),n.jsx("button",{type:"button",onClick:Fe,className:"min-h-[44px] rounded-xl bg-rose-600 px-5 py-2 text-sm font-bold text-white hover:bg-rose-700 active:scale-95 transition",children:"Delete Entry"})]})]})}),B&&n.jsx("div",{className:"fixed inset-0 z-40 flex items-center justify-center bg-black/60 p-4",children:n.jsxs("div",{className:"max-h-[95vh] w-full max-w-2xl overflow-auto rounded-2xl bg-white p-5 sm:p-6 shadow-2xl",children:[n.jsxs("div",{className:"mb-4 flex items-center justify-between border-b pb-3",children:[n.jsxs("h2",{className:"text-lg font-bold",children:["Edit Payment #",B.id]}),n.jsx("button",{onClick:()=>ge(null),className:"min-h-[36px] min-w-[36px] text-2xl text-slate-400 hover:text-rose-600 flex items-center justify-center",children:"×"})]}),n.jsxs("div",{className:"grid gap-4 md:grid-cols-2",children:[n.jsxs("div",{children:[n.jsx("label",{className:"mb-1 block text-xs font-bold text-slate-700",children:"Date"}),n.jsx(hn,{value:B.txDate,onChange:fe=>ge({...B,txDate:fe}),className:"px-3 py-2 text-sm"})]}),n.jsxs("div",{children:[n.jsx("label",{className:"mb-1 block text-xs font-bold text-slate-700",children:"Category"}),n.jsx(qh,{value:B.category,onChange:fe=>ge({...B,category:fe,subCategory:""}),disburseCats:f,expenseCats:h,onManageClick:()=>b(!0)})]}),(F(B.category)||(B.category||"").trim().toLowerCase().includes("fund payment"))&&n.jsxs("div",{children:[n.jsxs("div",{className:"mb-1 flex items-center justify-between gap-2",children:[n.jsx("label",{className:"text-xs font-bold text-slate-700",children:"Sub Category"}),B.subCategory?n.jsx("button",{type:"button",onClick:()=>ge({...B,subCategory:""}),title:"সাব-ক্যাটাগরি মুছে ফেলুন (ডিলিট)",className:"cursor-pointer text-[11px] font-black text-rose-600 hover:underline",children:"✕ মুছুন"}):null]}),n.jsx(Zn,{value:B.subCategory||"",onChange:fe=>ge({...B,subCategory:fe}),options:(()=>{const fe=ec(B.category,L,f.map(Nt=>Nt.name)),Ee=(B.subCategory||"").trim();return Ee&&!fe.includes(Ee)?[...fe,Ee]:fe})(),placeholder:"-- Select Sub Category --",className:"w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-bold text-slate-800 focus:border-blue-500 focus:outline-none cursor-pointer",noKeyboardOnMobile:!0})]}),n.jsxs("div",{className:"md:col-span-1",children:[n.jsx("label",{className:"mb-1 block text-xs font-bold text-slate-700",children:"Disburse/Expense"}),n.jsx("input",{type:"number",placeholder:"",value:B.amount||"",onChange:fe=>ge({...B,amount:Math.round(Number(fe.target.value)||0)}),className:"w-full rounded-lg border border-slate-300 bg-yellow-50 px-3 py-2 text-right font-mono text-lg font-bold"})]}),n.jsxs("div",{className:"md:col-span-1",children:[n.jsx("label",{className:"mb-1 block text-xs font-bold text-slate-700",children:"Description"}),n.jsx("input",{type:"text",value:B.description,onChange:fe=>ge({...B,description:fe.target.value}),placeholder:"",className:"w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"})]}),n.jsxs("div",{className:"flex justify-end gap-3 md:col-span-2 border-t pt-3 mt-2",children:[n.jsx("button",{onClick:()=>ge(null),className:"min-h-[44px] rounded-xl bg-slate-200 px-5 py-2 font-bold text-sm text-slate-700 hover:bg-slate-300 transition",children:"Cancel"}),n.jsx("button",{onClick:ke,className:"min-h-[44px] rounded-xl bg-red-600 px-6 py-2 font-bold text-sm text-white hover:bg-red-700 transition",children:"Update Entry"})]})]})]})}),S&&n.jsx(ip,{disburseCats:f,expenseCats:h,onChanged:Z,onClose:()=>b(!1)}),ue&&n.jsx(A5,{open:ue,onClose:()=>C(!1),rules:L,disburseCategories:f.map(fe=>fe.name),onRulesChanged:Z,currentCategory:M.category,currentLoanAmount:M.amount}),G&&n.jsx(m5,{rates:H,categories:f.map(fe=>fe.name),onChanged:Z,onClose:()=>K(!1)}),ie&&n.jsx(up,{rule:E,disburseCategories:f.map(fe=>fe.name),onChanged:Z,onClose:()=>ne(!1)}),n.jsx(Nm,{open:q,onClose:()=>k(!1),targetAmount:B?B.amount||0:M.amount||0,date:B?B.txDate:M.txDate||l,onApplyAmount:fe=>{B?ge({...B,amount:Math.round(fe)}):U({...M,amount:Math.round(fe)})}}),V&&n.jsx(Ym,{open:V,onClose:()=>ce(!1),cashInHand:lp(M.txDate||l).cashInHand,date:M.txDate||l})]})}const Qh=l=>l?`${l.slice(8,10)}-${l.slice(5,7)}`:"",x5=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],$h=l=>{const[o,u]=l.split("-");return`${x5[Number(u)-1]||u} ${o}`};function h5(){const[l,o]=p.useState([]),[u,c]=p.useState(null),[d,A]=p.useState(xa()),[f,x]=p.useState(""),[h,v]=p.useState(""),[S,b]=p.useState(""),[H,P]=p.useState(null),[G,K]=p.useState(null),[L,_]=p.useState(!1),[ue,C]=p.useState(""),[q,k]=p.useState(""),[V,ce]=p.useState(""),[E,se]=p.useState(!1),ie=()=>o(HR());p.useEffect(()=>{ie();const B=()=>ie();return window.addEventListener("entertainment-changed",B),()=>window.removeEventListener("entertainment-changed",B)},[]);const ne=()=>{x(""),v(""),b(""),P(null)},me=B=>{P(B.id),A(B.date||xa()),x(B.category),v(B.description||""),b(String(B.amount||"")),c(null),window.scrollTo({top:0,behavior:"smooth"})},pe=()=>{if(!d)return c({kind:"warn",text:"তারিখ দিন।"});if(!f)return c({kind:"warn",text:"ক্যাটাগরি (জমা/খরচ) বেছে নিন।"});const B=Number(S);if(!S||!Number.isFinite(B)||B<=0)return c({kind:"warn",text:"Amount-এ সঠিক সংখ্যা দিন।"});wR({...H!=null?{id:H}:{},date:d,category:f,description:h.trim(),amount:String(Math.round(B))}),ne(),c({kind:"ok",text:H!=null?"✓ এন্ট্রি আপডেট হয়েছে।":"✓ এন্ট্রি সেভ হয়েছে।"}),setTimeout(()=>c(null),1800)},j=p.useMemo(()=>l.filter(B=>!(G&&(B.date<G.from||B.date>G.to)||V&&!B.date.startsWith(V))),[l,G,V]),O=()=>{if(!ue&&!q)return c({kind:"warn",text:"কমপক্ষে একটি তারিখ লিখুন (হতে বা পর্যন্ত)।"});let B=ue||q,ge=q||ue;B>ge&&([B,ge]=[ge,B]),K({from:B,to:ge}),_(!1),c(null)},R=()=>{K(null),C(""),k(""),_(!1)},I=p.useMemo(()=>{const B=new Map;for(const ge of j){const y=String(ge.date||"").slice(0,7);if(!y)continue;const le=B.get(y)||{deposit:0,expense:0};ge.category==="জমা"?le.deposit+=Number(ge.amount)||0:le.expense+=Number(ge.amount)||0,B.set(y,le)}return[...B.entries()].sort((ge,y)=>y[0].localeCompare(ge[0])).map(([ge,y])=>({ym:ge,...y,balance:y.deposit-y.expense}))},[j]),re=p.useMemo(()=>{let B=0,ge=0;for(const y of l)y.category==="জমা"?B+=Number(y.amount)||0:ge+=Number(y.amount)||0;return{joma:B,khoroch:ge,sthiti:B-ge}},[l]),ee=p.useMemo(()=>{let B=0,ge=0;for(const y of j)y.category==="জমা"?B+=Number(y.amount)||0:ge+=Number(y.amount)||0;return{joma:B,khoroch:ge,sthiti:B-ge}},[j]),M="mb-1 block h-[24px] truncate leading-[24px] text-[11px] font-black uppercase tracking-wide text-slate-600",U="w-full rounded-lg border border-slate-300 bg-white px-2.5 py-2 text-sm font-semibold text-slate-800 focus:border-blue-500 focus:outline-none";return n.jsxs("div",{className:"space-y-4",children:[n.jsx("div",{className:"sticky top-2 z-30 rounded-2xl border-2 border-violet-300/80 bg-gradient-to-r from-violet-700 via-violet-600 to-indigo-600 px-4 py-3 shadow-xl",children:n.jsxs("div",{className:"flex items-center justify-between gap-2",children:[n.jsxs("div",{className:"min-w-0",children:[n.jsx("div",{className:"text-[10px] font-black uppercase tracking-wider text-violet-200",children:"🎉 বর্তমান স্থিতি"}),n.jsxs("div",{className:"truncate text-2xl font-black font-mono text-white",children:[Ae(re.sthiti)," ",n.jsx("span",{className:"text-sm font-bold text-violet-200",children:"৳"})]})]}),n.jsxs("div",{className:"shrink-0 rounded-xl bg-white/15 px-2.5 py-1.5 text-right backdrop-blur-sm",children:[n.jsxs("div",{className:"text-[10px] font-bold text-emerald-200",children:["জমা ",n.jsx("span",{className:"font-mono",children:Ae(re.joma)})]}),n.jsxs("div",{className:"text-[10px] font-bold text-rose-200",children:["খরচ ",n.jsx("span",{className:"font-mono",children:Ae(re.khoroch)})]}),n.jsxs("div",{className:"text-[9px] font-bold text-violet-200",children:[l.length,"টি এন্ট্রি"]})]})]})}),n.jsxs("div",{className:"rounded-2xl border border-slate-200 bg-white p-4 shadow-xs",children:[n.jsxs("div",{className:"mb-3 flex items-center justify-between border-b border-slate-100 pb-2.5",children:[n.jsxs("h1",{className:"text-lg sm:text-xl font-black text-slate-900 flex items-center gap-2",children:[n.jsx("span",{children:"🎉"})," Entertainment"]}),n.jsxs("span",{className:"rounded-full bg-violet-100 px-2.5 py-1 text-[11px] font-black text-violet-800",children:[l.length,"টি এন্ট্রি"]})]}),H!=null&&n.jsxs("div",{className:"mb-2.5 flex items-center justify-between rounded-xl border border-amber-300 bg-amber-50 px-3 py-2",children:[n.jsx("span",{className:"text-[11px] font-black text-amber-800",children:'✏️ এন্ট্রি এডিট মোডে — মান বদলে "আপডেট করুন"'}),n.jsx("button",{type:"button",onClick:ne,className:"text-[11px] font-black text-amber-700 hover:text-amber-900 cursor-pointer",children:"✕ বাতিল"})]}),n.jsxs("div",{className:"grid grid-cols-2 gap-2.5 sm:grid-cols-4",children:[n.jsxs("div",{children:[n.jsx("label",{className:M,children:"তারিখ"}),n.jsx(hn,{value:d,onChange:B=>A(B||xa()),manualEntry:!0,className:"px-2.5 py-2 text-sm font-bold"})]}),n.jsxs("div",{children:[n.jsx("label",{className:M,children:"ক্যাটাগরি"}),n.jsxs("select",{value:f,onChange:B=>x(B.target.value),className:`${U} cursor-pointer`,children:[n.jsx("option",{value:"",children:"-- Select --"}),n.jsx("option",{value:"জমা",children:"জমা"}),n.jsx("option",{value:"খরচ",children:"খরচ"})]})]}),n.jsxs("div",{className:"col-span-2 sm:col-span-1",children:[n.jsx("label",{className:M,children:"ডেসক্রিপশন"}),n.jsx("input",{type:"text",value:h,onChange:B=>v(B.target.value),placeholder:"যেমন: অতিথি আপ্যায়ন…",className:U})]}),n.jsxs("div",{children:[n.jsx("label",{className:M,children:"Amount"}),n.jsx("input",{type:"number",inputMode:"numeric",min:"1",value:S,onChange:B=>b(B.target.value),placeholder:"0",className:"w-full rounded-lg border border-slate-300 bg-yellow-50 px-2.5 py-2 text-right font-mono text-sm font-bold text-slate-900 focus:border-blue-500 focus:outline-none"})]})]}),n.jsxs("div",{className:"mt-3 flex items-center justify-between gap-2",children:[n.jsx("div",{className:"min-w-0 flex-1",children:u&&n.jsx("span",{className:`text-[11px] font-bold ${u.kind==="ok"?"text-emerald-700":"text-amber-700"}`,children:u.text})}),H!=null&&n.jsx("button",{type:"button",onClick:ne,className:"shrink-0 rounded-xl border border-slate-300 bg-slate-100 hover:bg-slate-200 px-4 py-2 text-sm font-black text-slate-700 transition cursor-pointer",children:"বাতিল"}),n.jsxs("button",{type:"button",onClick:pe,className:`shrink-0 flex items-center gap-1.5 rounded-xl px-5 py-2 text-sm font-black text-white shadow transition cursor-pointer ${H!=null?"bg-amber-600 hover:bg-amber-700 active:bg-amber-800":"bg-violet-600 hover:bg-violet-700 active:bg-violet-800"}`,children:[n.jsx("span",{children:H!=null?"✎":"✚"})," ",H!=null?"আপডেট করুন":"সেভ করুন"]})]})]}),n.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[n.jsxs("div",{className:"relative shrink-0",children:[n.jsxs("button",{type:"button",onClick:()=>{C((G==null?void 0:G.from)||""),k((G==null?void 0:G.to)||""),_(B=>!B),se(!1)},title:"তারিখ হতে তারিখ ফিল্টার",className:`flex cursor-pointer items-center gap-1 whitespace-nowrap rounded-xl border px-3 py-2 text-[11px] font-black transition ${G?"border-sky-600 bg-sky-600 text-white shadow":"border-slate-300 bg-white text-slate-700 hover:border-sky-400 hover:text-sky-700"}`,children:["📅 ",G?`${Qh(G.from)} → ${Qh(G.to)}`:"তারিখ হতে তারিখ"]}),L&&n.jsxs("div",{className:"absolute left-0 top-full z-40 mt-1.5 w-64 rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl",children:[n.jsxs("div",{className:"mb-2 flex items-center justify-between",children:[n.jsx("span",{className:"text-xs font-black text-slate-800",children:"📅 তারিখ হতে তারিখ"}),n.jsx("button",{type:"button",onClick:()=>_(!1),className:"rounded px-1.5 text-sm font-black text-slate-400 hover:text-slate-700 cursor-pointer",children:"✕"})]}),n.jsxs("div",{className:"mb-2",children:[n.jsx("label",{className:"mb-1 block text-[10px] font-black text-slate-600",children:"হতে"}),n.jsx(hn,{value:ue,onChange:C,manualEntry:!0,className:"px-2.5 py-1.5 text-xs"})]}),n.jsxs("div",{className:"mb-3",children:[n.jsx("label",{className:"mb-1 block text-[10px] font-black text-slate-600",children:"পর্যন্ত"}),n.jsx(hn,{value:q,onChange:k,manualEntry:!0,className:"px-2.5 py-1.5 text-xs"})]}),n.jsxs("div",{className:"flex gap-2",children:[n.jsx("button",{type:"button",onClick:O,className:"flex-1 rounded-lg bg-sky-600 px-3 py-1.5 text-[11px] font-black text-white hover:bg-sky-700 cursor-pointer",children:"প্রয়োগ"}),n.jsx("button",{type:"button",onClick:R,className:"rounded-lg bg-slate-200 px-3 py-1.5 text-[11px] font-black text-slate-700 hover:bg-slate-300 cursor-pointer",children:"মুছুন"})]})]})]}),n.jsxs("div",{className:"relative shrink-0",children:[n.jsxs("button",{type:"button",onClick:()=>{se(B=>!B),_(!1)},title:"মাস ফিল্টার — নির্দিষ্ট মাসের এন্ট্রি",className:`flex cursor-pointer items-center gap-1 whitespace-nowrap rounded-xl border px-3 py-2 text-[11px] font-black transition ${V?"border-violet-600 bg-violet-600 text-white shadow":"border-slate-300 bg-white text-slate-700 hover:border-violet-400 hover:text-violet-700"}`,children:["🗓 ",V?$h(V):"Month"]}),E&&n.jsxs("div",{className:"absolute left-0 top-full z-40 mt-1.5 w-56 rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl",children:[n.jsxs("div",{className:"mb-2 flex items-center justify-between",children:[n.jsx("span",{className:"text-xs font-black text-slate-800",children:"🗓 মাস বেছে নিন"}),n.jsx("button",{type:"button",onClick:()=>se(!1),className:"rounded px-1.5 text-sm font-black text-slate-400 hover:text-slate-700 cursor-pointer",children:"✕"})]}),n.jsx("input",{type:"month",value:V,onChange:B=>{ce(B.target.value),se(!1)},className:"w-full rounded-lg border border-slate-300 bg-white px-2.5 py-2 text-sm font-bold text-slate-800 focus:border-violet-500 focus:outline-none cursor-pointer"}),n.jsx("button",{type:"button",onClick:()=>{ce(""),se(!1)},className:"mt-2 w-full rounded-lg bg-slate-200 px-3 py-1.5 text-[11px] font-black text-slate-700 hover:bg-slate-300 cursor-pointer",children:"সব মাস"})]})]}),(G||V)&&n.jsx("button",{type:"button",onClick:()=>{R(),ce("")},className:"rounded-xl border border-rose-300 bg-rose-50 px-3 py-2 text-[11px] font-black text-rose-700 hover:bg-rose-100 cursor-pointer",children:"✕ ফিল্টার মুছুন"}),n.jsxs("span",{className:"ml-auto text-[11px] font-bold text-slate-500",children:[j.length,"টি দেখানো হচ্ছে"]})]}),n.jsxs("div",{className:"rounded-2xl border border-slate-200 bg-white p-3 shadow-xs",children:[n.jsxs("div",{className:"mb-2 flex items-center justify-between",children:[n.jsx("h2",{className:"text-sm font-black text-slate-900",children:"🎉 সকল এন্ট্রি"}),n.jsxs("span",{className:"text-[11px] font-bold text-slate-500",children:["জমা ",n.jsx("span",{className:"font-mono text-emerald-700",children:Ae(ee.joma)})," • খরচ ",n.jsx("span",{className:"font-mono text-rose-700",children:Ae(ee.khoroch)})," • স্থিতি ",n.jsx("span",{className:"font-mono text-indigo-800",children:Ae(ee.sthiti)})]})]}),n.jsx("div",{className:"max-h-96 overflow-auto rounded-xl border border-slate-200",children:n.jsxs("table",{className:"w-full min-w-[430px] text-left text-xs sm:text-sm whitespace-nowrap",children:[n.jsx("thead",{className:"sticky top-0 bg-violet-800 text-white",children:n.jsxs("tr",{children:[n.jsx("th",{className:"px-3 py-2 text-center",children:"তারিখ"}),n.jsx("th",{className:"px-3 py-2 text-center",children:"ক্যাটাগরি"}),n.jsx("th",{className:"px-3 py-2",children:"ডেসক্রিপশন"}),n.jsx("th",{className:"px-3 py-2 text-right",children:"Amount"}),n.jsx("th",{className:"px-3 py-2 text-center",children:"✏️ / ✕"})]})}),n.jsx("tbody",{children:j.length===0?n.jsx("tr",{children:n.jsx("td",{colSpan:5,className:"px-3 py-6 text-center text-slate-400 font-semibold",children:"কোনো এন্ট্রি নেই"})}):j.map(B=>n.jsxs("tr",{className:"border-b hover:bg-slate-50",children:[n.jsx("td",{className:"px-3 py-2 text-center font-mono text-[11px] sm:text-xs text-slate-700",children:B.date.split("-").reverse().join("-")}),n.jsx("td",{className:"px-3 py-2 text-center",children:n.jsx("span",{className:`inline-block rounded-full px-2 py-0.5 text-[10px] font-black ${B.category==="জমা"?"bg-emerald-100 text-emerald-800":"bg-rose-100 text-rose-800"}`,children:B.category})}),n.jsx("td",{className:"px-3 py-2 max-w-[160px] truncate text-slate-800",title:B.description,children:B.description||"—"}),n.jsxs("td",{className:`px-3 py-2 text-right font-mono font-bold ${B.category==="জমা"?"text-emerald-700":"text-rose-700"}`,children:[B.category==="জমা"?"+":"-",Ae(Number(B.amount)||0)]}),n.jsxs("td",{className:"px-3 py-2 text-center whitespace-nowrap",children:[n.jsx("button",{type:"button",onClick:()=>me(B),className:"mr-1 rounded-lg px-1.5 py-0.5 text-[11px] font-black text-slate-400 hover:bg-amber-100 hover:text-amber-600 cursor-pointer",title:"এন্ট্রি এডিট করুন",children:"✏️"}),n.jsx("button",{type:"button",onClick:()=>{confirm(`"${B.description||B.category}" — ${Ae(Number(B.amount))} টাকার এন্ট্রিটি মুছে ফেলবেন?`)&&CR(B.id)},className:"rounded-lg px-1.5 py-0.5 text-[11px] font-black text-slate-400 hover:bg-rose-100 hover:text-rose-600 cursor-pointer",title:"এন্ট্রি মুছুন",children:"🗑"})]})]},B.id))})]})})]}),n.jsxs("div",{className:"rounded-2xl border border-slate-200 bg-white p-3 shadow-xs",children:[n.jsxs("div",{className:"mb-2 flex items-center justify-between",children:[n.jsx("h2",{className:"text-sm font-black text-slate-900",children:"🗓 মাসভিত্তিক হিসাব"}),(G||V)&&n.jsx("span",{className:"rounded-full bg-sky-100 px-2 py-0.5 text-[10px] font-black text-sky-800",children:"ফিল্টার কার্যকর"})]}),n.jsx("div",{className:"overflow-auto rounded-xl border border-slate-200",children:n.jsxs("table",{className:"w-full min-w-[380px] text-left text-xs sm:text-sm whitespace-nowrap",children:[n.jsx("thead",{className:"sticky top-0 bg-slate-800 text-white",children:n.jsxs("tr",{children:[n.jsx("th",{className:"px-3 py-2 text-center",children:"মাস"}),n.jsx("th",{className:"px-3 py-2 text-right",children:"জমা"}),n.jsx("th",{className:"px-3 py-2 text-right",children:"খরচ"}),n.jsx("th",{className:"px-3 py-2 text-right",children:"স্থিতি"})]})}),n.jsx("tbody",{children:I.length===0?n.jsx("tr",{children:n.jsx("td",{colSpan:4,className:"px-3 py-6 text-center text-slate-400 font-semibold",children:"কোনো মাসিক হিসাব নেই"})}):I.map(B=>n.jsxs("tr",{className:"border-b hover:bg-slate-50",children:[n.jsx("td",{className:"px-3 py-2 text-center font-bold text-slate-800",children:$h(B.ym)}),n.jsx("td",{className:"px-3 py-2 text-right font-mono font-bold text-emerald-700",children:Ae(B.deposit)}),n.jsx("td",{className:"px-3 py-2 text-right font-mono font-bold text-rose-700",children:Ae(B.expense)}),n.jsx("td",{className:`px-3 py-2 text-right font-mono font-black ${B.balance>=0?"text-indigo-800":"text-rose-700"}`,children:Ae(B.balance)})]},B.ym))}),I.length>0&&n.jsx("tfoot",{className:"bg-slate-100 font-black",children:n.jsxs("tr",{children:[n.jsx("td",{className:"px-3 py-2 text-center text-slate-800",children:"মোট"}),n.jsx("td",{className:"px-3 py-2 text-right font-mono text-emerald-800",children:Ae(ee.joma)}),n.jsx("td",{className:"px-3 py-2 text-right font-mono text-rose-800",children:Ae(ee.khoroch)}),n.jsx("td",{className:`px-3 py-2 text-right font-mono ${ee.sthiti>=0?"text-indigo-900":"text-rose-800"}`,children:Ae(ee.sthiti)})]})})]})})]})]})}var fc=Rb();function b5({value:l,onChange:o,options:u,disabled:c=!1,readOnly:d=!1}){const[A,f]=p.useState(!1),[x,h]=p.useState(0),[v,S]=p.useState(!1),b=v?l.toLowerCase():"",H=b?u.filter(K=>K.toLowerCase().startsWith(b)):u,P=H.length?H:u.filter(K=>K.toLowerCase().includes(b)),G=K=>{c||(o(K.toLowerCase().trim()),S(!1),f(!1))};return n.jsxs("div",{className:"relative",children:[n.jsx("input",{value:mt(l),disabled:c,readOnly:d,inputMode:d?"none":void 0,placeholder:d?"Select option...":"Type first letter or select...",onChange:K=>{c||d||(o(K.target.value.toLowerCase()),S(!0),f(!0),h(0))},onFocus:K=>{c||(d&&K.target.blur(),S(!1),f(!0))},onClick:K=>{c||(d&&K.currentTarget.blur(),S(!1),f(!0))},onBlur:()=>{setTimeout(()=>{if(f(!1),S(!1),l&&l.trim()){const K=l.toLowerCase().trim(),L=u.find(_=>_.toLowerCase().trim()===K);if(L)o(L);else{const _=u.find(ue=>ue.toLowerCase().trim().startsWith(K));_&&o(_)}}},250)},onKeyDown:K=>{if(!c){if(!A&&(K.key==="ArrowDown"||K.key==="Enter")){f(!0);return}K.key==="ArrowDown"?(K.preventDefault(),h(L=>Math.min(L+1,P.length-1))):K.key==="ArrowUp"?(K.preventDefault(),h(L=>Math.max(L-1,0))):K.key==="Enter"&&P[x]?(K.preventDefault(),G(P[x])):K.key==="Escape"&&f(!1)}},className:`w-full rounded border px-3 py-2 text-sm font-semibold focus:outline-none ${c?"border-slate-300 bg-slate-100 text-slate-500 cursor-not-allowed opacity-60":"border-slate-300 bg-white text-slate-800 focus:border-blue-500"}`}),n.jsx("button",{type:"button",tabIndex:-1,disabled:c,onPointerDown:K=>{c||(K.preventDefault(),f(L=>!L))},className:`absolute right-2 top-1/2 -translate-y-1/2 p-1 ${c?"text-slate-300 cursor-not-allowed":"text-slate-500 cursor-pointer"}`,children:"▼"}),!c&&A&&P.length>0&&n.jsx("ul",{className:"absolute z-30 mt-1 max-h-56 w-full overflow-auto rounded-lg border border-slate-300 bg-white shadow-xl",children:P.map((K,L)=>n.jsx("li",{onClick:()=>{G(K)},onMouseDown:_=>{_.preventDefault()},className:`cursor-pointer px-3.5 py-2 text-xs sm:text-sm transition ${L===x?"bg-blue-100 font-semibold text-blue-900":K.toLowerCase()===l.toLowerCase()?"bg-slate-100 font-bold text-slate-900":"hover:bg-slate-100 text-slate-800"}`,children:mt(K)},K))})]})}const Wa=[{key:"staffName",label:"Staff Name",bn:"স্টাফ",isNumeric:!1},{key:"loan",label:"Loan",bn:"ঋণ",isNumeric:!0,color:"text-amber-300"},{key:"rebate",label:"Rebate",bn:"রিবেট",isNumeric:!0,color:"text-amber-200"},{key:"savings",label:"Savings",bn:"সঞ্চয়",isNumeric:!0,color:"text-emerald-300"},{key:"dps",label:"DPS",bn:"ডিপিএস",isNumeric:!0,color:"text-sky-300"},{key:"admission",label:"Admission",bn:"ভর্তি",isNumeric:!0,color:"text-cyan-300"},{key:"passbook",label:"Passbook",bn:"পাশবই",isNumeric:!0,color:"text-indigo-300"},{key:"savingsAdjust",label:"Savings Adjust",bn:"সঞ্চয় ফেরত",isNumeric:!0,color:"text-rose-300"},{key:"nogodReturn",label:"Nogod Return",bn:"নগদ ফেরত",isNumeric:!0,color:"text-rose-400"}];function p5({open:l,activeField:o,values:u,staffList:c,onFieldSelect:d,onValueChange:A,onSave:f,onReset:x,onClose:h,isEdit:v=!1}){if(!l)return null;const S=Wa.findIndex(k=>k.key===o),b=u[o]||"",H=()=>{o!=="staffName"&&/[+\-*/]/.test(b)&&A(o,Qe(b));const k=(S-1+Wa.length)%Wa.length;d(Wa[k].key)},P=()=>{o!=="staffName"&&/[+\-*/]/.test(b)&&A(o,Qe(b));const k=(S+1)%Wa.length;d(Wa[k].key)},G=k=>{o!=="staffName"&&(!b||b==="0"?A(o,k):A(o,b+k))},K=k=>{if(o!=="staffName"){if(!b||b==="0"){k==="-"&&A(o,"-");return}if(/[+\-*/]$/.test(b)){A(o,b.slice(0,-1)+k);return}A(o,b+k)}},L=()=>{if(o==="staffName")return;const k=Qe(b);A(o,k)},_=()=>{o!=="staffName"&&(!b||b==="0"?A(o,"0"):/[+\-*/]$/.test(b)?A(o,b+"0"):A(o,b+"00"))},ue=()=>{o!=="staffName"&&(!b||b==="0"?A(o,"0"):/[+\-*/]$/.test(b)?A(o,b+"0"):A(o,b+"000"))},C=()=>{if(o==="staffName"){A("staffName","");return}b.length<=1?A(o,""):A(o,b.slice(0,-1))},q=k=>{A("staffName",k),d("loan")};return o2.useEffect(()=>{if(!l)return;const k=V=>{V.target instanceof HTMLTextAreaElement||V.target instanceof HTMLSelectElement||V.target instanceof HTMLInputElement&&!V.target.readOnly||(V.key>="0"&&V.key<="9"?(V.preventDefault(),G(V.key)):V.key==="+"||V.key==="-"||V.key==="*"||V.key==="/"?(V.preventDefault(),K(V.key)):V.key==="="?(V.preventDefault(),L()):V.key==="Backspace"?(V.preventDefault(),C()):V.key==="Tab"?(V.preventDefault(),V.shiftKey?H():P()):V.key==="ArrowDown"||V.key==="ArrowRight"?(V.preventDefault(),P()):V.key==="ArrowUp"||V.key==="ArrowLeft"?(V.preventDefault(),H()):V.key==="Enter"?(V.preventDefault(),/[+\-*/]/.test(b)?L():o==="nogodReturn"?f():P()):V.key==="Escape"&&(V.preventDefault(),h()))};return window.addEventListener("keydown",k),()=>window.removeEventListener("keydown",k)},[l,o,b,S]),n.jsx("div",{className:"fixed bottom-0 left-0 right-0 z-50 bg-slate-950/95 text-white shadow-2xl border-t-4 border-indigo-600 backdrop-blur-md animate-in slide-in-from-bottom duration-200",children:n.jsxs("div",{className:"mx-auto max-w-xl px-2 sm:px-3 pt-2 pb-3",children:[n.jsx("div",{className:"pb-1.5 overflow-x-auto no-scrollbar flex items-center gap-1",children:Wa.map(k=>{const V=k.key===o,ce=u[k.key],E=ce&&k.isNumeric?Qe(ce):ce;return n.jsxs("button",{type:"button",onClick:()=>{o!=="staffName"&&/[+\-*/]/.test(b)&&A(o,Qe(b)),d(k.key)},className:`rounded-lg px-2.5 py-1 text-[11px] font-bold whitespace-nowrap shrink-0 transition cursor-pointer border ${V?"bg-amber-400 text-slate-950 border-amber-300 shadow-md ring-2 ring-amber-300/40":"bg-slate-800/90 text-slate-300 hover:bg-slate-700 border-slate-700"}`,children:[n.jsx("span",{children:k.label}),E&&k.isNumeric&&Number(E)>0&&n.jsxs("span",{className:"ml-1 opacity-90 font-mono text-[10px]",children:["(",Ae(Number(E)),")"]}),E&&!k.isNumeric&&n.jsxs("span",{className:"ml-1 opacity-90 text-[10px]",children:["(",E,")"]})]},k.key)})}),o==="staffName"?n.jsxs("div",{className:"my-2 rounded-xl bg-slate-900 p-2.5 border border-slate-800",children:[n.jsx("div",{className:"mb-2 text-xs font-bold text-slate-400",children:"Select Staff Member (স্টাফ নির্বাচন করুন):"}),n.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-2",children:c.map(k=>n.jsxs("button",{type:"button",onClick:()=>q(k),className:`rounded-xl py-2.5 text-xs sm:text-sm font-bold text-center border transition cursor-pointer active:scale-95 ${u.staffName.toLowerCase()===k.toLowerCase()?"bg-emerald-600 text-white border-emerald-400 shadow-lg ring-2 ring-emerald-400":"bg-slate-800 text-slate-200 hover:bg-slate-700 border-slate-700"}`,children:["👤 ",k]},k))})]}):n.jsxs("div",{className:"flex gap-2 my-1.5",children:[n.jsxs("div",{className:"flex-1 grid grid-cols-3 gap-1.5",children:[n.jsx("button",{type:"button",onClick:()=>G("7"),className:"rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-600 active:scale-95 py-2.5 text-lg sm:text-xl font-bold font-mono text-white shadow border border-slate-700 transition cursor-pointer",children:"7"}),n.jsx("button",{type:"button",onClick:()=>G("8"),className:"rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-600 active:scale-95 py-2.5 text-lg sm:text-xl font-bold font-mono text-white shadow border border-slate-700 transition cursor-pointer",children:"8"}),n.jsx("button",{type:"button",onClick:()=>G("9"),className:"rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-600 active:scale-95 py-2.5 text-lg sm:text-xl font-bold font-mono text-white shadow border border-slate-700 transition cursor-pointer",children:"9"}),n.jsx("button",{type:"button",onClick:()=>G("4"),className:"rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-600 active:scale-95 py-2.5 text-lg sm:text-xl font-bold font-mono text-white shadow border border-slate-700 transition cursor-pointer",children:"4"}),n.jsx("button",{type:"button",onClick:()=>G("5"),className:"rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-600 active:scale-95 py-2.5 text-lg sm:text-xl font-bold font-mono text-white shadow border border-slate-700 transition cursor-pointer",children:"5"}),n.jsx("button",{type:"button",onClick:()=>G("6"),className:"rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-600 active:scale-95 py-2.5 text-lg sm:text-xl font-bold font-mono text-white shadow border border-slate-700 transition cursor-pointer",children:"6"}),n.jsx("button",{type:"button",onClick:()=>G("1"),className:"rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-600 active:scale-95 py-2.5 text-lg sm:text-xl font-bold font-mono text-white shadow border border-slate-700 transition cursor-pointer",children:"1"}),n.jsx("button",{type:"button",onClick:()=>G("2"),className:"rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-600 active:scale-95 py-2.5 text-lg sm:text-xl font-bold font-mono text-white shadow border border-slate-700 transition cursor-pointer",children:"2"}),n.jsx("button",{type:"button",onClick:()=>G("3"),className:"rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-600 active:scale-95 py-2.5 text-lg sm:text-xl font-bold font-mono text-white shadow border border-slate-700 transition cursor-pointer",children:"3"}),n.jsx("button",{type:"button",onClick:()=>G("0"),className:"rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-600 active:scale-95 py-2 text-lg sm:text-xl font-bold font-mono text-white shadow border border-slate-700 transition cursor-pointer",children:"0"}),n.jsx("button",{type:"button",onClick:_,className:"rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-600 active:scale-95 py-2 text-sm sm:text-base font-bold font-mono text-slate-200 shadow border border-slate-700 transition cursor-pointer",children:"00"}),n.jsx("button",{type:"button",onClick:ue,className:"rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-600 active:scale-95 py-2 text-xs sm:text-sm font-bold font-mono text-slate-200 shadow border border-slate-700 transition cursor-pointer",children:"000"})]}),n.jsxs("div",{className:"w-16 sm:w-20 flex flex-col gap-1.5",children:[n.jsx("button",{type:"button",onClick:C,className:"flex-1 rounded-xl bg-rose-900/80 hover:bg-rose-800 active:bg-rose-700 active:scale-95 text-base sm:text-lg font-bold text-rose-200 shadow border border-rose-700 transition cursor-pointer flex items-center justify-center",title:"একটি অক্ষর মুছুন",children:"⌫"}),n.jsx("button",{type:"button",onClick:()=>K("/"),className:"flex-1 rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-600 active:scale-95 text-base sm:text-lg font-black text-amber-300 shadow border border-slate-700 transition cursor-pointer flex items-center justify-center",title:"ভাগ (/)",children:"÷"}),n.jsx("button",{type:"button",onClick:()=>K("*"),className:"flex-1 rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-600 active:scale-95 text-base sm:text-lg font-black text-amber-300 shadow border border-slate-700 transition cursor-pointer flex items-center justify-center",title:"গুণ (*)",children:"×"}),n.jsx("button",{type:"button",onClick:()=>K("-"),className:"flex-1 rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-600 active:scale-95 text-base sm:text-lg font-black text-amber-300 shadow border border-slate-700 transition cursor-pointer flex items-center justify-center",title:"বিয়োগ (-)",children:"−"}),n.jsx("button",{type:"button",onClick:()=>K("+"),className:"flex-1 rounded-xl bg-amber-600 hover:bg-amber-500 active:bg-amber-700 active:scale-95 text-lg sm:text-xl font-black text-white shadow border border-amber-500 transition cursor-pointer flex items-center justify-center",title:"যোগ (+)",children:"+"}),n.jsx("button",{type:"button",onClick:L,className:"flex-1 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 active:scale-95 text-lg sm:text-xl font-black text-white shadow border border-emerald-500 transition cursor-pointer flex items-center justify-center ring-2 ring-emerald-400/30",title:"যোগফল হিসাব করতে সমান (=)",children:"="})]})]}),n.jsxs("div",{className:"grid grid-cols-5 gap-1.5 pt-1.5 border-t border-slate-800",children:[n.jsxs("button",{type:"button",onClick:x,className:"rounded-xl bg-amber-600 hover:bg-amber-500 active:bg-amber-700 active:scale-95 py-2 text-[11px] sm:text-xs font-black text-white shadow flex items-center justify-center gap-1 cursor-pointer transition ring-1 ring-amber-400/40",title:"সব রিসেট করুন",children:[n.jsx("span",{children:"🔄"}),n.jsx("span",{children:"রিসেট"})]}),n.jsxs("button",{type:"button",onClick:f,className:"rounded-xl bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 active:scale-95 py-2 text-[11px] sm:text-xs font-black text-white shadow flex items-center justify-center gap-1 cursor-pointer transition ring-1 ring-emerald-400/40",title:v?"রিপোর্ট আপডেট করুন":"রিপোর্ট সেভ করুন",children:[n.jsx("span",{children:"💾"}),n.jsx("span",{children:v?"আপডেট":"সেভ"})]}),n.jsxs("button",{type:"button",onClick:h,className:"rounded-xl bg-red-600 hover:bg-red-700 active:bg-red-800 active:scale-95 py-2 text-[11px] sm:text-xs font-black text-white shadow-lg flex items-center justify-center gap-1 cursor-pointer transition border border-red-500 ring-2 ring-red-500/40",title:"কিবোর্ড ক্লোজ করুন",children:[n.jsx("span",{children:"✖"}),n.jsx("span",{children:"ক্লোজ"})]}),n.jsxs("button",{type:"button",onClick:H,className:"rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-600 active:scale-95 py-2 text-[11px] sm:text-xs font-bold text-slate-200 border border-slate-700 flex items-center justify-center gap-1 cursor-pointer transition",title:"এক ঘর পূর্বের (Prev)",children:[n.jsx("span",{children:"◀"}),n.jsx("span",{children:"পূর্বের"})]}),n.jsxs("button",{type:"button",onClick:P,className:"rounded-xl bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:scale-95 py-2 text-[11px] sm:text-xs font-bold text-white shadow flex items-center justify-center gap-1 cursor-pointer transition",title:"এক ঘর পরের (Next)",children:[n.jsx("span",{children:"পরের"}),n.jsx("span",{children:"▶"})]})]})]})})}const dp="gobra_auth_users",mp="gobra_auth_branches",xc="gobra_auth_session",sr={mobile:"013241655828",password:"gobra1234",name:"Gobra Office"};function Qm(l,o){try{const u=window.localStorage.getItem(l);return u?JSON.parse(u)??o:o}catch{return o}}function hc(l,o){try{window.localStorage.setItem(l,JSON.stringify(o))}catch(u){console.error("[auth] সংরক্ষণ করা যায়নি",u)}}const Gs=l=>{let o=String(l??"").replace(/[^0-9]/g,"");return o.length===14&&o.startsWith("880")?o=o.slice(3):o.length===13&&o.startsWith("88")?o=o.slice(2):o.length===10&&o.startsWith("1")&&(o=`0${o}`),o},ic=l=>{const o=Gs(l);return o.length>=6&&o.length<=15},Wh=l=>String(l||"").trim().toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"").slice(0,24)||`br-${Date.now().toString(36)}`;async function $m(l,o){var A;const u=`${o}::${l}`;try{const f=(A=globalThis.crypto)==null?void 0:A.subtle;if(f){const x=await f.digest("SHA-256",new TextEncoder().encode(u));return Array.from(new Uint8Array(x)).map(h=>h.toString(16).padStart(2,"0")).join("")}}catch{}let c=2166136261,d=16777619;for(let f=0;f<u.length;f++)c=(c^u.charCodeAt(f))*16777619>>>0,d=d+u.charCodeAt(f)*31+f>>>0;return`f${c.toString(16).padStart(8,"0")}${d.toString(16).padStart(8,"0")}`}const ir=()=>{const l=Qm(dp,[]);return Array.isArray(l)?l:[]},bc=()=>{const l=Qm(mp,[]);return!Array.isArray(l)||l.length===0?[{id:Hn,name:uc,createdAt:new Date().toISOString()}]:l},fo=l=>hc(dp,l),Ap=l=>hc(mp,l),fr=l=>{const o=String(l),u=Gs(l);return ir().find(c=>Gs(c.mobile)===u||c.id===o)||null},g5=l=>bc().find(o=>o.id===l)||null,pc=()=>{var l;return cr()?uc:((l=g5(Ts()))==null?void 0:l.name)||Ts().toUpperCase()},R5=()=>cr()?`${uc} Branch.`:`${pc().toUpperCase()} Branch.`,Wm=()=>{const l=Qm(xc,null);if(!l||!l.userId)return null;const o=fr(l.userId);return o?{userId:l.userId,branchId:o.branchId,loginAt:l.loginAt}:null},S5=()=>{const l=Wm();return l?fr(l.userId):null};function fp(l){const o={userId:l.id,branchId:l.branchId,loginAt:new Date().toISOString()};hc(xc,o),ur(l.branchId);const u=ir().map(c=>c.id===l.id?{...c,lastLoginAt:o.loginAt}:c);return fo(u),o}function $i(l,o,u){const c=String(l),d=String(o||Hn);if(fr(c))fo(ir().map(f=>f.id===c?{...f,branchId:d,...u!=null&&u.name&&u.name.trim()?{name:u.name.trim()}:{}}:f));else{const f=/[a-z]@/i.test(c);fo([...ir(),{id:c,name:((u==null?void 0:u.name)||"").trim()||c,mobile:f?"":c,branchId:d,passHash:"",createdAt:new Date().toISOString(),lastLoginAt:new Date().toISOString()}])}const A={userId:c,branchId:d,loginAt:new Date().toISOString()};return hc(xc,A),ur(A.branchId),A}function y5(){try{window.localStorage.removeItem(xc)}catch{}ur(Hn)}let Pi=null;function gc(){return Pi||(Pi=N5().finally(()=>{Pi=null})),Pi}async function N5(){try{const l=bc();if(l.some(u=>u.id===Hn)||Ap([{id:Hn,name:uc,createdAt:new Date().toISOString()},...l]),fr(sr.mobile))return;const o=await $m(sr.password,sr.mobile);fo([...ir(),{id:Gs(sr.mobile),name:sr.name,mobile:Gs(sr.mobile),branchId:Hn,passHash:o,createdAt:new Date().toISOString()}])}catch(l){console.error("[auth] ডিফল্ট ইউজার তৈরি করা যায়নি",l)}}async function v5(l,o){await gc();const u=Gs(l);if(!ic(u))return{ok:!1,error:"সঠিক মোবাইল নম্বর দিন (কমপক্ষে ৬ ডিজিট) — এটাই ইউজার আইডি।"};if(!o)return{ok:!1,error:"পাসওয়ার্ড দিন।"};const c=fr(u);return c?await $m(o,Gs(c.mobile))!==c.passHash?{ok:!1,error:"পাসওয়ার্ড মিলছে না।"}:{ok:!0,session:fp(c)}:{ok:!1,error:"এই মোবাইল নম্বরে কোনো ইউজার নেই — আগে সাইন আপ করুন।"}}async function L5(l){await gc();const o=String(l.name||"").trim(),u=Gs(l.mobile),c=String(l.branchName||"").trim(),d=String(l.password||""),A=String(l.confirmPassword||"");if(o.length<2)return{ok:!1,error:"নাম লিখুন (কমপক্ষে ২ অক্ষর)।"};if(!ic(u))return{ok:!1,error:"সঠিক মোবাইল নম্বর দিন (কমপক্ষে ৬ ডিজিট) — এটাই ইউজার আইডি।"};if(!c)return{ok:!1,error:"অফিস / শাখার নাম লিখুন।"};if(d.length<6)return{ok:!1,error:"পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে।"};if(d!==A)return{ok:!1,error:"পাসওয়ার্ড ও কনফার্ম পাসওয়ার্ড মিলছে না।"};if(fr(u))return{ok:!1,error:"এই মোবাইল নম্বর আগেই সাইন আপ করা আছে — সাইন ইন করুন।"};const f=bc(),x=c.toLowerCase();let h=f.find(b=>b.name.trim().toLowerCase()===x)||f.find(b=>b.id===Wh(c));h||(h={id:Wh(c),name:c,createdAt:new Date().toISOString(),createdBy:u},Ap([...f,h]));const v=await $m(d,u),S={id:u,name:o,mobile:u,branchId:h.id,passHash:v,createdAt:new Date().toISOString()};return fo([...ir(),S]),{ok:!0,session:fp(S)}}function O5(l,o){const u=l.map(A=>{if(!A.el)return"";const f=A.el.cloneNode(!0),x=A.el.querySelectorAll("input, select, textarea"),h=f.querySelectorAll("input, select, textarea");return x.forEach((v,S)=>{const b=h[S];if(!b)return;const H=document.createElement("span");H.style.fontWeight="600",H.textContent=v.value??"",b.replaceWith(H)}),`<h3 class="sec-h">${_i(A.heading)}</h3>
${f.outerHTML}`}).join(`
`),c=`<!doctype html>
<html lang="bn"><head><meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>${_i(o.title)}</title>
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
    <h2>${_i(o.title)}</h2>
    ${o.subtitle?`<p>${_i(o.subtitle)}</p>`:""}
  </div>
  ${u}
  <script>window.addEventListener("load", function(){ setTimeout(function(){ window.focus(); window.print(); }, 150); });<\/script>
</body></html>`,d=window.open("","_blank","width=1100,height=760");if(!d){window.print();return}d.document.write(c),d.document.close()}function _i(l){return String(l||"").replace(/[&<>"']/g,o=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[o]||o)}const eb=()=>ss().map(l=>l.name);function tb(){if(typeof window>"u")return!1;const l=navigator.userAgent||"",o=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile/i.test(l),u="ontouchstart"in window||navigator.maxTouchPoints&&navigator.maxTouchPoints>1,c=window.innerWidth<=820;return o||u&&c}const Zi=["loan","rebate","savings","dps","admission","passbook","savingsAdjust","nogodReturn"],nb=(l,o)=>{const u=l.toLowerCase().trim(),c=o.toLowerCase().trim();return u===c||u.includes(c)||c.includes(u)};function j5({selectedDate:l}){const o=p.useRef(null),u=p.useRef(null),c=p.useRef(null),[d,A]=p.useState([]),[f,x]=p.useState({staffName:"",loan:"",rebate:"",savings:"",dps:"",admission:"",passbook:"",savingsAdjust:"",nogodReturn:""}),[h,v]=p.useState(null),[S,b]=p.useState(null),[H,P]=p.useState(""),[G,K]=p.useState("default"),[L,_]=Vm(),[ue,C]=p.useState(!1),[q,k]=p.useState(!1),[V,ce]=p.useState(!1),[E,se]=p.useState(()=>{try{const D=localStorage.getItem("gobra_floating_pos_report");if(D)return JSON.parse(D)}catch{}return null}),ie=p.useRef(null),ne=p.useRef(!1),me=p.useRef({x:0,y:0,elemX:0,elemY:0,w:50,h:50,hasMoved:!1}),pe=D=>{var je;if(D.button!==0&&D.pointerType==="mouse")return;const Q=(je=ie.current)==null?void 0:je.getBoundingClientRect();if(Q){me.current={x:D.clientX,y:D.clientY,elemX:Q.left,elemY:Q.top,w:Q.width,h:Q.height,hasMoved:!1},ne.current=!0;try{D.currentTarget.setPointerCapture(D.pointerId)}catch{}}},j=p.useRef(0),O=()=>{const D=Date.now();D-j.current<250||(j.current=D,k(Q=>!Q),ce(!1))},R=D=>{if(!ne.current)return;const Q=D.clientX-me.current.x,je=D.clientY-me.current.y,Ge=Math.hypot(Q,je);if(!me.current.hasMoved&&Ge>6&&(me.current.hasMoved=!0),me.current.hasMoved){const jt=Math.max(10,window.innerWidth-me.current.w-6),Ve=Math.max(10,window.innerHeight-me.current.h-6),cn=Math.max(6,Math.min(jt,me.current.elemX+Q)),It=Math.max(6,Math.min(Ve,me.current.elemY+je));se({x:cn,y:It})}},I=D=>{var Q;if(ne.current){ne.current=!1;try{D.currentTarget.releasePointerCapture(D.pointerId)}catch{}if(me.current.hasMoved){const je=(Q=ie.current)==null?void 0:Q.getBoundingClientRect();if(je){const Ge={x:Math.round(je.left),y:Math.round(je.top)};try{localStorage.setItem("gobra_floating_pos_report",JSON.stringify(Ge))}catch{}}}else O()}},re=D=>{if(me.current.hasMoved){D.stopPropagation(),me.current.hasMoved=!1;return}O()},[ee,M]=p.useState(tb);p.useEffect(()=>{const D=()=>M(tb());return window.addEventListener("resize",D),()=>window.removeEventListener("resize",D)},[]);const[U,B]=p.useState(!1),[ge,y]=p.useState(()=>{try{return localStorage.getItem("gobra_staff_entry_collapsed")!=="0"}catch{return!0}}),le=D=>{y(D);try{localStorage.setItem("gobra_staff_entry_collapsed",D?"1":"0")}catch{}},[te,Y]=p.useState("loan"),[Se,ye]=p.useState(0),[Z,F]=p.useState(0),[Re,Oe]=p.useState(0),[rt,At]=p.useState([]),[ft,tt]=p.useState([]),[Le,lt]=p.useState(!1),[St,gt]=p.useState(ts()),[yt,xe]=p.useState(!1),ke=(D,Q=!1)=>{const je=Zi.indexOf(D);if(je>=0&&je<Zi.length-1){const Ge=Zi[je+1],jt=Q?`edit-input-${Ge}`:`input-${Ge}`,Ve=document.getElementById(jt);Ve&&(Ve.focus(),Ve.select())}else je===Zi.length-1&&(Q?Nt():fe())},Fe=()=>{const D=Nn(l);A(D);const Q=Fn(l);ye(Q.prevCash),F(Q.prevBank),Oe(Q.cash);const je=ha("disburse");tt(je.map(jt=>jt.name.toLowerCase().trim())),At(ln());const Ge=Ie(l);lt(Ge),Ge&&(B(!1),v(null))};p.useEffect(()=>{Fe();const D=()=>Fe(),Q=()=>Fe();window.addEventListener("tx-changed",D),window.addEventListener("day-close-changed",Q);const je=()=>gt(ts());return window.addEventListener("kallyan-rule-changed",je),()=>{window.removeEventListener("tx-changed",D),window.removeEventListener("day-close-changed",Q),window.removeEventListener("kallyan-rule-changed",je)}},[l]),p.useEffect(()=>{if(!U||!ee)return;const D=setTimeout(()=>{const Q=h?`edit-field-${te}`:`field-${te}`,je=document.getElementById(Q);je&&je.scrollIntoView({behavior:"smooth",block:"center"})},50);return()=>clearTimeout(D)},[te,U,h,ee]);const[Ot,rn]=p.useState(!1),Zt=()=>{rn(!0),window.setTimeout(()=>rn(!1),900)},Dt=D=>{if(Le){Zt();return}Y(D),ee&&B(!0)},fe=()=>{if(Le){Zt();return}if(!_t(l)){alert(`⚠️ এই তারিখের (${l}) কর্মদিবস এখনও শুরু (Day Open) করা হয়নি। কোনো রিপোর্ট এন্ট্রি করার পূর্বে দিনটি Day Open করুন।`),window.dispatchEvent(new CustomEvent("open-day-open-modal"));return}const D=pt(l);if(D.blocked){alert(`⚠️ ${D.reason||"দুটি কর্মদিবসের মধ্যবর্তী বন্ধের দিনে কোনো নতুন রিপোর্ট এন্ট্রি করা যাবে না।"}`);return}if(!f.staffName.trim()){alert("দয়া করে স্টাফ নির্বাচন করুন"),Y("staffName"),ee&&B(!0);return}zR({reportDate:l,staffName:f.staffName.trim(),loan:Qe(f.loan)||"0",rebate:Qe(f.rebate)||"0",savings:Qe(f.savings)||"0",dps:Qe(f.dps)||"0",admission:Qe(f.admission)||"0",passbook:Qe(f.passbook)||"0",savingsAdjust:Qe(f.savingsAdjust)||"0",nogodReturn:Qe(f.nogodReturn)||"0"}),x({staffName:"",loan:"",rebate:"",savings:"",dps:"",admission:"",passbook:"",savingsAdjust:"",nogodReturn:""}),Y("staffName"),Fe()},Ee=()=>{if(Le){Zt();return}x({staffName:"",loan:"",rebate:"",savings:"",dps:"",admission:"",passbook:"",savingsAdjust:"",nogodReturn:""}),Y("staffName")},Nt=()=>{if(!h||!h.id)return;if(Le){Zt();return}const D=pt(l);if(D.blocked){alert(`⚠️ ${D.reason||"দুটি কর্মদিবসের মধ্যবর্তী বন্ধের দিনে কোনো রিপোর্ট পরিবর্তন করা যাবে না।"}`);return}FR({...h,loan:Qe(String(h.loan||"0"))||"0",rebate:Qe(String(h.rebate||"0"))||"0",savings:Qe(String(h.savings||"0"))||"0",dps:Qe(String(h.dps||"0"))||"0",admission:Qe(String(h.admission||"0"))||"0",passbook:Qe(String(h.passbook||"0"))||"0",savingsAdjust:Qe(String(h.savingsAdjust||"0"))||"0",nogodReturn:Qe(String(h.nogodReturn||"0"))||"0"}),v(null),b(null),B(!1),Fe()},wn=D=>{if(Le){Zt();return}confirm("Delete this staff report?")&&(JR(D),Fe())},sa=H?d.filter(D=>D.staffName.toLowerCase()===H.toLowerCase()):d,nt=(()=>{if(!G||G==="default")return sa;const D=[...sa],Q=G==="name-asc"?1:-1;return D.sort((je,Ge)=>Q*String(je.staffName).localeCompare(String(Ge.staffName)))})(),la=nt.reduce((D,Q)=>D+Number(Q.loan||0),0),bl=nt.reduce((D,Q)=>D+Number(Q.rebate||0),0),pl=la+bl,Tt=nt.reduce((D,Q)=>D+Number(Q.savings||0),0),ra=nt.reduce((D,Q)=>D+Number(Q.dps||0),0),ls=Tt+ra,Ps=nt.reduce((D,Q)=>D+Number(Q.passbook||0),0),oa=nt.reduce((D,Q)=>D+Number(Q.admission||0),0),ka=la+ls+Ps+oa,Ua=nt.reduce((D,Q)=>D+Number(Q.savingsAdjust||0),0),Da=nt.reduce((D,Q)=>D+Number(Q.nogodReturn||0),0),_s=Ua+Da,pa=new Set,kt=[...eb(),...d.map(D=>D.staffName.trim())].map(D=>String(D||"").trim()).filter(D=>D!==""&&!pa.has(D.toLowerCase())&&pa.add(D.toLowerCase())).sort((D,Q)=>Em(D,Q,L)),En=rt.filter(D=>D.type==="receive"&&D.txDate===l);let Ct=0,Zs=0,ia=0;const rs=kt.map(D=>{const Q=d.filter(vt=>vt.staffName.toLowerCase()===D.toLowerCase()),je=Q.reduce((vt,Xt)=>vt+Number(Xt.loan||0),0);Q.reduce((vt,Xt)=>vt+Number(Xt.rebate||0),0);const Ge=Q.reduce((vt,Xt)=>vt+Number(Xt.savings||0),0),jt=Q.reduce((vt,Xt)=>vt+Number(Xt.dps||0),0),Ve=Q.reduce((vt,Xt)=>vt+Number(Xt.passbook||0),0),cn=Q.reduce((vt,Xt)=>vt+Number(Xt.admission||0),0),It=je+Ge+jt+Ve+cn,Ft=Q.reduce((vt,Xt)=>vt+Number(Xt.savingsAdjust||0),0),Bt=En.filter(vt=>nb(vt.category,D)).reduce((vt,Xt)=>vt+(Number(Xt.amount)||0),0),Jt=Bt+Ft-It;return Ct+=It,Zs+=Bt,ia+=Ft,{name:D,todayAday:It,todayDeposite:Bt,savingsReturn:Ft,diff:Jt}}),Cn=Zs+ia-Ct,Ta=rt.filter(D=>D.txDate===l),ga=Ta.filter(D=>D.type==="receive"),vn=Ta.filter(D=>D.type==="payment"),os=ka,Gt=Se,pn=ga.filter(D=>D.category.toLowerCase().includes("bank withdraw")).reduce((D,Q)=>D+(Number(Q.amount)||0),0),Ra=vn.filter(D=>{const Q=D.category.toLowerCase().trim();return Q.includes("fund payment")||Q.includes("fund transfer")||Q.includes("fund")&&!Q.includes("receive")?!1:ft.includes(Q)||Q.includes("jagoron")||Q.includes("agrossor")||Q.includes("buni")||Q.includes("sufolon")||Q.includes("mfce")||!!(D.subCategory&&D.subCategory.trim().length>0)}),N=Ra.reduce((D,Q)=>D+dr(Number(Q.amount)||0,Q.category,St),0),de=Ra.length*5,oe=ga.filter(D=>{const Q=D.category.toLowerCase().trim();return!(Q.includes("bank withdraw")||Q.includes("fund receive")||Q.includes("welfare")||Q.includes("kallayan")||Q.includes("loan form")||eb().some(je=>nb(Q,je)))}).reduce((D,Q)=>D+(Number(Q.amount)||0),0),Ne=Ra.reduce((D,Q)=>D+(Number(Q.amount)||0),0),we=vn.filter(D=>D.category.toLowerCase().includes("bank deposit")||D.category.toLowerCase().includes("bank deposite")).reduce((D,Q)=>D+(Number(Q.amount)||0),0),Te=_s,on=vn.filter(D=>{const Q=D.category.toLowerCase().trim();return Q.includes("fund payment")||Q.includes("fund transfer")||Q.includes("fund")&&!Q.includes("receive")}).reduce((D,Q)=>D+(Number(Q.amount)||0),0),Je=vn.filter(D=>{const Q=D.category.toLowerCase().trim();return!(Ra.some(je=>je.id===D.id)||Q.includes("bank deposit")||Q.includes("bank deposite")||Q.includes("fund payment")||Q.includes("fund transfer")||Q.includes("fund")&&!Q.includes("receive"))}).reduce((D,Q)=>D+(Number(Q.amount)||0),0),Jn=[{label:"Today All Aday",amount:os},{label:"Hand Cash",amount:Gt},{label:"Bank Withdraw",amount:pn},{label:"Kallayan",amount:N},{label:"Loan Form",amount:de},{label:"Others Income",amount:oe}].filter(D=>D.amount>0),zt=[{label:"Disburse",amount:Ne},{label:"Bank Deposit",amount:we},{label:"Savings Return",amount:Te},{label:"Fund Payment",amount:on},{label:"Others Expense",amount:Je}].filter(D=>D.amount>0),at=Jn.reduce((D,Q)=>D+Q.amount,0),Xe=zt.reduce((D,Q)=>D+Q.amount,0),ot=Math.max(Jn.length,zt.length),Et=Zm(l),Mn=Le&&Et?Math.round(Number(Et.closingCash)||0):at-Xe,zs=ga.filter(D=>D.category.toLowerCase().includes("fund receive")).reduce((D,Q)=>D+(Number(Q.amount)||0),0),Rc=Le&&Et?Math.round(Number(Et.closingBank)||0):Z-pn+we+zs,bo=Xe-we,xr=pn,Fs=xr-bo,is=["Sakib","Mintu","Alamgir","Monir"].map(D=>{const Q=rs.find(je=>je.name.toLowerCase()===D.toLowerCase());return{name:D,diff:Q?Math.round(Q.diff):0}});return n.jsxs("div",{className:`space-y-6 ${ee&&U?"pb-80":""}`,children:[typeof document<"u"&&fc.createPortal(n.jsx("div",{ref:ie,onPointerDown:pe,onPointerMove:R,onPointerUp:I,onPointerCancel:I,onClick:re,style:E?{transform:`translate3d(${E.x}px, ${E.y}px, 0)`,left:0,top:0,right:"auto",bottom:"auto",touchAction:"none"}:{right:"16px",bottom:ee&&U?"340px":"75px",touchAction:"none"},className:"fixed z-[60] select-none print:hidden drop-shadow-2xl cursor-grab active:cursor-grabbing touch-none block",children:q?n.jsxs("div",{className:"bg-white shadow-2xl rounded-2xl border-2 border-purple-900 overflow-hidden min-w-[240px] touch-none",children:[n.jsxs("div",{className:"bg-purple-900 text-white px-3.5 py-2 flex items-center justify-between gap-3 text-xs font-bold cursor-grab active:cursor-grabbing select-none",onClick:re,title:"ধরে যেকোনো জায়গায় সরানো যাবে / ক্লিক করলে বন্ধ হবে",children:[n.jsxs("div",{className:"flex items-center gap-1.5",children:[n.jsx("span",{className:"text-slate-300",children:"⠿"}),n.jsx("span",{children:"👥"}),n.jsx("span",{children:"Staff Dena / Poana"})]}),n.jsx("div",{className:"flex items-center gap-1",children:n.jsx("button",{type:"button",onPointerDown:D=>D.stopPropagation(),onPointerUp:D=>{D.stopPropagation(),k(!1)},onClick:D=>{D.stopPropagation(),k(!1)},className:"hover:bg-purple-800 rounded px-1.5 py-0.5 text-xs cursor-pointer",title:"বক্স বন্ধ করুন",children:"✕"})})]}),!V&&n.jsx("div",{className:"p-1 bg-[#fdecd2]",children:n.jsxs("table",{className:"border-collapse text-center text-xs font-sans w-full",children:[n.jsx("thead",{children:n.jsx("tr",{className:"bg-[#fdecd2] border-b border-amber-300",children:is.map(D=>n.jsx("th",{className:"border border-amber-300 px-3 py-1 font-bold text-indigo-950",children:D.name},D.name))})}),n.jsx("tbody",{children:n.jsx("tr",{className:"bg-emerald-400",children:is.map(D=>n.jsx("td",{className:"border border-amber-300 px-3 py-1.5 font-black text-black font-mono",children:D.diff},D.name))})})]})})]}):n.jsxs("div",{onClick:re,className:"relative flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-purple-900 active:bg-purple-950 text-white shadow-2xl ring-2 ring-purple-400/50 cursor-grab active:cursor-grabbing touch-none select-none",title:"Staff Dena / Poana (টেনে যেকোনো দিকে সরানো যাবে / ক্লিক করলে খুলবে)",children:[n.jsx("span",{className:"text-xl sm:text-2xl leading-none select-none pointer-events-none",children:"👥"}),n.jsx("span",{className:"absolute -top-1 -right-1 flex h-4 min-w-[16px] sm:h-5 sm:min-w-[20px] items-center justify-center rounded-full bg-amber-400 px-1 text-[9px] sm:text-[10px] font-mono font-black text-purple-950 shadow pointer-events-none",children:is.length})]})}),document.body),ge?n.jsxs("button",{type:"button",onClick:()=>le(!1),className:"flex w-full cursor-pointer items-center justify-center gap-2 rounded-2xl border border-indigo-200 bg-gradient-to-r from-indigo-50 to-purple-50 px-4 py-3 shadow-sm transition hover:border-indigo-400 hover:from-indigo-100 hover:to-purple-100",title:"Staff Collection Report Entry ফর্ম খুলুন",children:[n.jsx("span",{className:"flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-base text-white shadow",children:"✏️"}),n.jsx("span",{className:"text-sm font-black text-indigo-900",children:"Staff Collection Report Entry"}),n.jsx("span",{className:"rounded-full bg-indigo-200 px-2 py-0.5 text-[10px] font-black text-indigo-800",children:"খুলতে ক্লিক করুন ▼"})]}):n.jsxs("div",{className:"rounded-2xl border border-slate-200 bg-white p-5 shadow-sm",children:[!Le&&pt(l).blocked&&n.jsxs("div",{className:"mb-4 rounded-xl border border-rose-400 bg-rose-50 p-3 text-xs sm:text-sm font-bold text-rose-900 flex items-start gap-2 shadow-xs",children:[n.jsx("span",{className:"text-base shrink-0",children:"🚫"}),n.jsxs("div",{children:[n.jsx("span",{className:"block font-black text-rose-950",children:"এই তারিখটি ব্লক (কর্মদিবসের মধ্যবর্তী বন্ধের দিন)"}),n.jsx("span",{className:"text-xs text-rose-800 font-normal mt-0.5 block",children:pt(l).reason})]})]}),n.jsxs("div",{className:"mb-4 flex flex-wrap items-center justify-between gap-2 border-b pb-3",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("h2",{className:"text-xl font-bold text-slate-900",children:"Staff Collection Report Entry"}),Le&&n.jsx("span",{className:`inline-flex shrink-0 items-center gap-1 rounded-lg border border-rose-300 bg-rose-100 px-2 py-0.5 text-[10px] font-black text-rose-700 ${Ot?"lock-pulse":""}`,title:"দিন সমাপ্ত (Day Closed) — হিসাব লক করা আছে",children:"🔒 Day Closed"})]}),n.jsxs("div",{className:"flex items-center gap-2",children:[ee&&n.jsxs("button",{type:"button",disabled:Le,onClick:()=>{if(Le){Zt();return}B(!U)},className:`rounded-xl px-3 py-1 text-xs font-bold transition flex items-center gap-1.5 shadow-xs border cursor-pointer ${Le?"bg-slate-200 text-slate-500 border-slate-300 cursor-not-allowed opacity-60":U?"bg-indigo-600 text-white border-indigo-500 shadow-indigo-300 ring-2 ring-indigo-400/40":"bg-indigo-50 text-indigo-700 hover:bg-indigo-100 border-indigo-200"}`,title:Le?"দিন সমাপ্ত (Locked)":"কাস্টম কিবোর্ড অন/অফ করুন",children:[n.jsx("span",{children:Le?"🔒 লক করা":"⌨️ কাস্টম কিবোর্ড"}),n.jsx("span",{className:`text-[10px] px-1.5 py-0.2 rounded font-mono font-bold ${Le?"bg-slate-300 text-slate-600":U?"bg-indigo-900 text-white":"bg-indigo-200 text-indigo-900"}`,children:Le?"LOCKED":U?"ON":"OFF"})]}),n.jsx("button",{type:"button",onClick:()=>le(!0),className:"rounded-lg bg-rose-600 px-2.5 py-1 text-sm font-black text-white shadow transition hover:bg-rose-700 cursor-pointer",title:"বন্ধ করুন — এন্ট্রি ফর্ম আইকনে collapse হবে",children:"✕"}),n.jsxs("div",{className:"text-xs font-mono font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded-lg border border-slate-200",children:["Date: ",l]})]})]}),n.jsxs("div",{className:"grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5",children:[n.jsxs("div",{id:"field-staffName",onClick:ee?()=>Dt("staffName"):void 0,className:`rounded-lg transition ${ee&&U&&te==="staffName"?"ring-2 ring-indigo-500 p-0.5 bg-amber-50":""}`,children:[n.jsx("label",{className:"mb-1 block text-xs font-bold text-slate-700",children:"Staff Name"}),n.jsx(b5,{value:f.staffName,disabled:Le,readOnly:ee,onChange:D=>{Le||(x({...f,staffName:D}),ee&&Y("loan"))},options:kt})]}),Wa.filter(D=>D.isNumeric).map(D=>{const Q=D.key,je=ee&&U&&te===Q,Ge=f[Q]||"",jt=/[+\-*/]/.test(Ge),Ve=jt?Qe(Ge):"",cn=Q==="savingsAdjust"||Q==="nogodReturn",It=Q==="loan"||Q==="savings",Ft=Q==="rebate";return n.jsxs("div",{id:`field-${Q}`,onClick:ee?()=>Dt(Q):void 0,className:`rounded-lg transition ${ee?"cursor-pointer":""}`,children:[n.jsxs("div",{className:"flex items-center justify-between mb-1",children:[n.jsx("label",{className:"text-xs font-bold text-slate-700",children:D.label}),jt&&n.jsxs("span",{className:"text-[10px] font-mono font-bold text-emerald-700 bg-emerald-100 px-1 py-0.2 rounded border border-emerald-300",children:["=",Ae(Number(Ve)||0)]})]}),n.jsx("input",{type:"text",id:`input-${Q}`,inputMode:ee?"none":void 0,readOnly:ee,disabled:Le,value:Ge,onFocus:ee?Bt=>{Bt.target.blur(),Dt(Q)}:()=>Y(Q),onTouchStart:ee?Bt=>{Bt.preventDefault(),Dt(Q)}:void 0,onClick:ee?()=>Dt(Q):void 0,onChange:Bt=>{const Jt=Bt.target.value;Jt.endsWith("=")?x({...f,[Q]:Qe(Jt)}):x({...f,[Q]:Jt})},onKeyDown:Bt=>{if(Bt.key==="Enter"){Bt.preventDefault();const Jt=Bt.currentTarget.value;/[+\-*/]/.test(Jt)&&x({...f,[Q]:Qe(Jt)}),ke(Q,!1)}},onBlur:()=>{Ge&&/[+\-*/]/.test(Ge)&&x({...f,[Q]:Qe(Ge)})},placeholder:Q==="loan"?"0 (উদা: ১+২+৩=৬)":"0",className:`w-full rounded border px-2.5 py-1.5 text-right font-mono text-xs font-bold transition focus:outline-none ${Le?"border-slate-300 bg-slate-100 text-slate-500 cursor-not-allowed opacity-60":je?"border-indigo-600 ring-2 ring-indigo-500 bg-amber-100 text-slate-950 scale-[1.02]":cn?"border-rose-300 bg-rose-50 text-rose-900 focus:border-rose-500":Ft?"border-slate-300 bg-amber-50 text-slate-900 focus:border-indigo-500":It?"border-slate-300 bg-yellow-50 text-slate-900 focus:border-indigo-500":"border-slate-300 bg-white text-slate-900 focus:border-indigo-500"} ${ee?"cursor-pointer":""}`})]},Q)})]}),n.jsxs("div",{className:"mt-4 flex flex-wrap gap-2",children:[n.jsx("button",{type:"button",onClick:fe,disabled:Le||!_t(l)||pt(l).blocked,className:"rounded-lg bg-green-600 px-6 py-2 text-sm font-bold text-white shadow hover:bg-green-700 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",children:Le?"🔒 দিন সমাপ্ত (লকড)":pt(l).blocked?"🚫 তারিখ ব্লকড":_t(l)?"Save Report":"☀️ দিন শুরু (Day Open) করুন"}),n.jsx("button",{type:"button",onClick:Ee,disabled:Le||!_t(l)||pt(l).blocked,className:"rounded-lg bg-slate-500 px-6 py-2 text-sm font-bold text-white hover:bg-slate-600 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",children:"Reset"})]})]}),n.jsxs("div",{className:"rounded-2xl border border-slate-200 bg-white p-2.5 sm:p-3 shadow-sm",children:[n.jsxs("div",{className:"flex items-stretch gap-1.5 sm:gap-2",children:[n.jsxs("div",{className:"flex min-w-0 flex-1 flex-col justify-center rounded-xl bg-emerald-50 border border-emerald-300 p-2 sm:p-3 text-center",children:[n.jsx("span",{className:"text-[10px] sm:text-xs font-bold text-emerald-800",children:Le?"Closing Cash":"Today Cash"}),n.jsx("span",{className:"font-mono text-xs sm:text-xl font-black text-emerald-950 mt-0.5 whitespace-nowrap",children:Ae(Mn)})]}),n.jsxs("div",{className:"flex min-w-0 flex-1 flex-col justify-center rounded-xl bg-indigo-50 border border-indigo-300 p-2 sm:p-3 text-center",children:[n.jsx("span",{className:"text-[10px] sm:text-xs font-bold text-indigo-800",children:Le?"Closing Bank":"Today Bank"}),n.jsx("span",{className:"font-mono text-xs sm:text-xl font-black text-indigo-950 mt-0.5 whitespace-nowrap",children:Ae(Rc)})]}),n.jsx("button",{type:"button",onClick:()=>C(!0),title:"Denomination — Check Diff","aria-label":"Denomination — Check Diff",className:"flex w-9 shrink-0 cursor-pointer items-center justify-center rounded-xl border border-amber-600 bg-amber-500 text-base leading-none shadow-xs hover:bg-amber-600 sm:w-11 sm:text-xl",children:"💰"})]}),n.jsx("div",{className:"mt-1.5 sm:mt-2",children:n.jsxs("div",{className:"flex min-w-0 flex-col justify-center gap-0.5 rounded-xl border-2 border-purple-900 bg-white p-2 sm:p-2.5 overflow-hidden",children:[n.jsxs("div",{className:"flex items-baseline justify-between gap-1 min-w-0",children:[n.jsx("span",{className:"whitespace-nowrap text-[10px] sm:text-xs font-bold text-purple-900",children:"Expens"}),n.jsx("span",{className:"truncate font-mono text-[10px] sm:text-sm font-black text-slate-950",children:Ae(bo)})]}),n.jsxs("div",{className:"flex items-baseline justify-between gap-1 min-w-0",children:[n.jsx("span",{className:"whitespace-nowrap text-[10px] sm:text-xs font-bold text-purple-900",children:"Check"}),n.jsx("span",{className:"truncate font-mono text-[10px] sm:text-sm font-black text-slate-950",children:Ae(xr)})]}),n.jsxs("div",{className:"mt-0.5 flex min-w-0 items-baseline justify-between gap-1 rounded-md border border-emerald-700 bg-emerald-400 px-1.5 py-1",children:[n.jsx("span",{className:"whitespace-nowrap text-[10px] sm:text-xs font-black text-emerald-950",children:"Diferent"}),n.jsx("span",{className:"truncate font-mono text-[10px] sm:text-sm font-black text-emerald-950",children:Ae(Fs)})]})]})})]}),n.jsxs("div",{className:"overflow-hidden rounded-2xl bg-white shadow-sm border border-[#d4a373]",children:[n.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b border-[#d4a373] px-4 py-2.5 bg-[#fdecd2]",children:[n.jsx("h3",{className:"font-serif font-bold text-slate-900 text-sm sm:text-base",children:"Staff Collection Report Table"}),n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("button",{type:"button",onClick:()=>O5([{el:o.current,heading:"Staff Collection Report Table"},{el:u.current,heading:"Dena / Poana"},{el:c.current,heading:"Today All Report"}],{title:"Gobra Daily Cash — Full Report",subtitle:`${pc()} • Date: ${l}${H?` • Staff: ${mt(H)}`:""}`}),title:"একদম সব রিপোর্ট একসাথে প্রিন্ট (এক A4 পাতা)",className:"print:hidden cursor-pointer rounded-lg bg-indigo-700 px-2.5 py-1 text-[11px] font-black text-white hover:bg-indigo-800 shadow-sm",children:"🖨️ Print All"}),n.jsx("div",{className:"w-32 sm:w-40",children:n.jsx(Zn,{value:H,onChange:D=>P(D),noKeyboardOnMobile:!0,options:[{value:"",label:"All Staff"},...kt.map(D=>({value:D,label:mt(D)}))],placeholder:"All Staff",className:"w-full cursor-pointer rounded border border-[#d4a373] bg-white px-2 py-1 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-1 focus:ring-[#d4a373]"})}),n.jsx("div",{className:"w-36 sm:w-44",children:n.jsx(Zn,{value:G,onChange:D=>K(D),noKeyboardOnMobile:!0,options:[{value:"default",label:"Sort: 🖐️ ম্যানুয়াল"},{value:"name-asc",label:"Sort: Name A→Z"},{value:"name-desc",label:"Sort: Name Z→A"}],placeholder:"Sort: 🖐️ ম্যানুয়াল",className:"w-full rounded border border-[#d4a373] bg-white px-2 py-1 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-1 focus:ring-[#d4a373]"})})]})]}),n.jsx("div",{className:"overflow-x-auto",ref:o,children:n.jsxs("table",{className:"w-full border-collapse border border-[#d4a373] text-center text-xs sm:text-sm",children:[n.jsx("thead",{children:n.jsxs("tr",{className:"bg-[#fdecd2] text-slate-950 font-bold border-b border-[#d4a373]",children:[n.jsx("th",{className:"sticky left-0 z-20 border border-[#d4a373] bg-[#fdecd2] px-2.5 py-2 shadow-[2px_0_0_0_#d4a373]",children:"Name"}),n.jsx("th",{className:"border border-[#d4a373] px-2 py-2",children:"Loan"}),n.jsx("th",{className:"border border-[#d4a373] px-2 py-2",children:"Rebate"}),n.jsx("th",{className:"border border-[#d4a373] px-2 py-2",children:"Total Loan"}),n.jsx("th",{className:"border border-[#d4a373] px-2 py-2",children:"Savings"}),n.jsx("th",{className:"border border-[#d4a373] px-2 py-2",children:"DPS"}),n.jsx("th",{className:"border border-[#d4a373] px-2 py-2",children:"Total Sav"}),n.jsx("th",{className:"border border-[#d4a373] px-2 py-2",children:"Passbook"}),n.jsx("th",{className:"border border-[#d4a373] px-2 py-2",children:"Admission"}),n.jsx("th",{className:"border border-[#d4a373] px-2 py-2",children:"Grant Total"}),n.jsx("th",{className:"border border-[#d4a373] px-2 py-2",children:"Adjust"}),n.jsx("th",{className:"border border-[#d4a373] px-2 py-2",children:"Nogod"}),n.jsx("th",{className:"border border-[#d4a373] px-2 py-2",children:"Total Ret"}),n.jsx("th",{className:"border border-[#d4a373] px-2 py-2",children:"Action"})]})}),n.jsx("tbody",{children:nt.length===0?n.jsx("tr",{children:n.jsxs("td",{colSpan:14,className:"border border-[#d4a373] px-3 py-6 text-center text-slate-400",children:["No staff reports on ",l]})}):nt.map(D=>{const Q=Number(D.loan)||0,je=Number(D.rebate)||0,Ge=Q+je,jt=Number(D.savings)||0,Ve=Number(D.dps)||0,cn=jt+Ve,It=Number(D.passbook)||0,Ft=Number(D.admission)||0,Bt=Q+cn+It+Ft,Jt=Number(D.savingsAdjust)||0,vt=Number(D.nogodReturn)||0,Xt=Jt+vt;return n.jsxs("tr",{className:"border-b border-[#d4a373] hover:bg-[#fff9f2] bg-white",children:[n.jsx("td",{className:"sticky left-0 z-10 border border-[#d4a373] bg-white px-2 py-1.5 font-bold text-left text-slate-900 shadow-[2px_0_0_0_#d4a373]",children:D.staffName}),n.jsx("td",{className:"border border-[#d4a373] px-2 py-1.5 text-right font-mono",children:Q>0?Ae(Q):""}),n.jsx("td",{className:"border border-[#d4a373] px-2 py-1.5 text-right font-mono",children:je>0?Ae(je):""}),n.jsx("td",{className:"border border-[#d4a373] px-2 py-1.5 text-right font-mono font-bold bg-[#fdf5ea]",children:Ge>0?Ae(Ge):""}),n.jsx("td",{className:"border border-[#d4a373] px-2 py-1.5 text-right font-mono",children:jt>0?Ae(jt):""}),n.jsx("td",{className:"border border-[#d4a373] px-2 py-1.5 text-right font-mono",children:Ve>0?Ae(Ve):""}),n.jsx("td",{className:"border border-[#d4a373] px-2 py-1.5 text-right font-mono font-bold bg-[#fdf5ea]",children:cn>0?Ae(cn):""}),n.jsx("td",{className:"border border-[#d4a373] px-2 py-1.5 text-right font-mono",children:It>0?Ae(It):""}),n.jsx("td",{className:"border border-[#d4a373] px-2 py-1.5 text-right font-mono",children:Ft>0?Ae(Ft):""}),n.jsx("td",{className:"border border-[#d4a373] px-2 py-1.5 text-right font-mono font-black bg-[#fdf5ea]",children:Bt>0?Ae(Bt):""}),n.jsx("td",{className:"border border-[#d4a373] px-2 py-1.5 text-right font-mono",children:Jt>0?Ae(Jt):""}),n.jsx("td",{className:"border border-[#d4a373] px-2 py-1.5 text-right font-mono",children:vt>0?Ae(vt):""}),n.jsx("td",{className:"border border-[#d4a373] px-2 py-1.5 text-right font-mono font-black bg-[#fdf5ea]",children:Xt>0?Ae(Xt):""}),n.jsxs("td",{className:"border border-[#d4a373] px-1 py-1 text-center whitespace-nowrap",children:[n.jsx("button",{type:"button",disabled:Le,onClick:()=>{if(Le){Zt();return}b({...D}),v({...D,loan:String(D.loan??""),rebate:String(D.rebate??""),savings:String(D.savings??""),dps:String(D.dps??""),admission:String(D.admission??""),passbook:String(D.passbook??""),savingsAdjust:String(D.savingsAdjust??""),nogodReturn:String(D.nogodReturn??"")}),Y("loan"),ee&&B(!0)},className:`mr-1 rounded px-2.5 py-1 text-xs font-bold text-white shadow-xs transition ${Le?"bg-slate-400 cursor-not-allowed opacity-50":"bg-blue-600 hover:bg-blue-700 cursor-pointer active:scale-95"}`,title:Le?"দিন সমাপ্ত (Locked) - উপরের Working-Day বার থেকে Re-open করুন":"এই স্টাফের রিপোর্ট এডিট করুন",children:Le?"🔒 Edit":"✏️ Edit"}),n.jsx("button",{type:"button",disabled:Le,onClick:()=>{if(Le){Zt();return}wn(D.id)},className:`rounded px-2 py-1 text-xs font-bold text-white shadow-xs transition ${Le?"bg-slate-400 cursor-not-allowed opacity-50":"bg-rose-600 hover:bg-rose-700 cursor-pointer active:scale-95"}`,title:Le?"দিন সমাপ্ত (Locked) - উপরের Working-Day বার থেকে Re-open করুন":"এই রিপোর্ট মুছুন",children:Le?"🔒 Del":"Del"})]})]},D.id)})}),nt.length>0&&n.jsx("tfoot",{className:"bg-[#fdecd2] text-slate-950 font-bold border-t-2 border-[#d4a373]",children:n.jsxs("tr",{children:[n.jsx("td",{className:"sticky left-0 z-10 border border-[#d4a373] bg-[#fdecd2] px-2 py-2 shadow-[2px_0_0_0_#d4a373]",children:"Total"}),n.jsx("td",{className:"border border-[#d4a373] px-2 py-2 text-right font-mono",children:Ae(la)}),n.jsx("td",{className:"border border-[#d4a373] px-2 py-2 text-right font-mono",children:Ae(bl)}),n.jsx("td",{className:"border border-[#d4a373] px-2 py-2 text-right font-mono font-black",children:Ae(pl)}),n.jsx("td",{className:"border border-[#d4a373] px-2 py-2 text-right font-mono",children:Ae(Tt)}),n.jsx("td",{className:"border border-[#d4a373] px-2 py-2 text-right font-mono",children:Ae(ra)}),n.jsx("td",{className:"border border-[#d4a373] px-2 py-2 text-right font-mono font-black",children:Ae(ls)}),n.jsx("td",{className:"border border-[#d4a373] px-2 py-2 text-right font-mono",children:Ae(Ps)}),n.jsx("td",{className:"border border-[#d4a373] px-2 py-2 text-right font-mono",children:Ae(oa)}),n.jsx("td",{className:"border border-[#d4a373] px-2 py-2 text-right font-mono font-black",children:Ae(ka)}),n.jsx("td",{className:"border border-[#d4a373] px-2 py-2 text-right font-mono",children:Ae(Ua)}),n.jsx("td",{className:"border border-[#d4a373] px-2 py-2 text-right font-mono",children:Ae(Da)}),n.jsx("td",{className:"border border-[#d4a373] px-2 py-2 text-right font-mono font-black",children:Ae(_s)}),n.jsx("td",{className:"border border-[#d4a373]"})]})})]})})]}),n.jsxs("div",{className:"rounded-2xl border-2 border-blue-900 bg-white shadow-sm overflow-hidden max-w-2xl mx-auto",children:[n.jsxs("div",{className:"bg-[#fdecd2] py-2 text-center border-b-2 border-blue-900 relative",children:[n.jsx("h3",{className:"font-serif font-black text-xl sm:text-2xl text-slate-900",children:"Dena / Poana"}),n.jsx("div",{className:"absolute right-2 top-1/2 -translate-y-1/2",children:n.jsx(op,{mode:L,onChange:_})})]}),n.jsx("div",{className:"overflow-x-auto",ref:u,children:n.jsxs("table",{className:"w-full border-collapse border border-amber-200 text-xs sm:text-sm",children:[n.jsx("thead",{children:n.jsxs("tr",{className:"bg-[#eedbc9] text-slate-900 font-bold text-center",children:[n.jsx("th",{className:"border border-amber-200 px-3 py-2",children:"Staff Name"}),n.jsx("th",{className:"border border-amber-200 px-3 py-2",children:"Today Aday"}),n.jsx("th",{className:"border border-amber-200 px-3 py-2",children:"Today Deposit"}),n.jsx("th",{className:"border border-amber-200 px-3 py-2",children:"Savings Return"}),n.jsx("th",{className:"border border-amber-200 px-3 py-2",children:"Dena / Poana"})]})}),n.jsx("tbody",{children:rs.map(D=>n.jsxs("tr",{className:"border-b border-amber-200",children:[n.jsx("td",{className:"border border-amber-200 px-3 py-2 font-bold bg-[#eedbc9] text-left",children:D.name}),n.jsx("td",{className:"border border-amber-200 px-3 py-2 text-right font-mono font-bold bg-[#f0f6ff]",children:Ae(D.todayAday)}),n.jsx("td",{className:"border border-amber-200 px-3 py-2 text-right font-mono font-bold bg-[#f0f6ff]",children:Ae(D.todayDeposite)}),n.jsx("td",{className:"border border-amber-200 px-3 py-2 text-right font-mono font-bold bg-[#f0f6ff]",children:Ae(D.savingsReturn)}),n.jsx("td",{className:"border border-amber-200 px-3 py-2 text-right font-mono font-black bg-[#f0f6ff]",children:Math.round(D.diff)})]},D.name))}),n.jsx("tfoot",{className:"bg-[#dfbf9f] font-black border-t-2 border-amber-300",children:n.jsxs("tr",{children:[n.jsx("td",{className:"border border-amber-200 px-3 py-2 text-center",children:"Total"}),n.jsx("td",{className:"border border-amber-200 px-3 py-2 text-right font-mono",children:Ae(Ct)}),n.jsx("td",{className:"border border-amber-200 px-3 py-2 text-right font-mono",children:Ae(Zs)}),n.jsx("td",{className:"border border-amber-200 px-3 py-2 text-right font-mono",children:Ae(ia)}),n.jsx("td",{className:"border border-amber-200 px-3 py-2 text-right font-mono",children:Ae(Cn)})]})})]})})]}),n.jsxs("div",{className:"rounded-2xl border-2 border-blue-900 bg-white shadow-sm overflow-hidden max-w-3xl mx-auto",children:[n.jsxs("div",{className:"bg-[#fdecd2] py-2 text-center border-b-2 border-blue-900 relative",children:[n.jsx("h3",{className:"font-serif font-black text-xl sm:text-2xl text-slate-900",children:"Today All Report"}),n.jsxs("button",{type:"button",onClick:()=>xe(!0),title:"কল্যাণ তহবিল ম্যানেজ করুন (হার/ফি বদলান, নিয়ম দেখুন)",className:"absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1 rounded-lg bg-teal-600 hover:bg-teal-700 active:scale-95 border border-teal-800 px-2 py-1 text-[11px] font-bold text-white shadow-sm transition cursor-pointer",children:[n.jsx("span",{children:"🤝"}),n.jsx("span",{children:"⚙️ কল্যাণ"})]})]}),n.jsx("div",{className:"overflow-x-auto",ref:c,children:n.jsxs("table",{className:"w-full border-collapse border border-amber-200 text-xs sm:text-sm",children:[n.jsx("thead",{children:n.jsxs("tr",{className:"bg-[#fdecd2] text-slate-900 font-black text-center",children:[n.jsx("th",{colSpan:2,className:"border border-amber-200 px-4 py-2 w-1/2",children:"Income"}),n.jsx("th",{colSpan:2,className:"border border-amber-200 px-4 py-2 w-1/2",children:"Expenditure"})]})}),n.jsx("tbody",{children:ot===0?n.jsx("tr",{children:n.jsxs("td",{colSpan:4,className:"p-6 text-center text-slate-400",children:["No data on ",l]})}):Array.from({length:ot},(D,Q)=>{const je=Jn[Q],Ge=zt[Q];return n.jsxs("tr",{className:"border-b border-amber-200",children:[n.jsxs("td",{className:`border border-amber-200 px-3 py-1.5 font-bold bg-[#fdecd2] w-1/3 ${(je==null?void 0:je.label)==="Kallayan"?"cursor-pointer text-teal-800 hover:bg-teal-100 underline decoration-dotted decoration-teal-400 underline-offset-2":""}`,onClick:()=>{(je==null?void 0:je.label)==="Kallayan"&&xe(!0)},title:(je==null?void 0:je.label)==="Kallayan"?"কল্যাণ তহবিল ম্যানেজ করতে ট্যাপ করুন":void 0,children:[je?je.label:"",(je==null?void 0:je.label)==="Kallayan"&&n.jsxs("span",{className:"ml-1 text-[9px] font-semibold text-slate-500 not-italic",children:["(",St.percent,"%+",St.fixed,"৳)"]})]}),n.jsx("td",{className:"border border-amber-200 px-3 py-1.5 text-right font-mono font-bold w-1/6",children:je?Ae(je.amount):""}),n.jsx("td",{className:"border border-amber-200 px-3 py-1.5 font-bold bg-[#fdecd2] w-1/3",children:Ge?Ge.label:""}),n.jsx("td",{className:"border border-amber-200 px-3 py-1.5 text-right font-mono font-bold w-1/6",children:Ge?Ae(Ge.amount):""})]},Q)})}),n.jsx("tfoot",{className:"bg-[#dfbf9f] font-black border-t-2 border-amber-300",children:n.jsxs("tr",{children:[n.jsx("td",{className:"border border-amber-200 px-3 py-2 text-center",children:"Total"}),n.jsx("td",{className:"border border-amber-200 px-3 py-2 text-right font-mono",children:Ae(at)}),n.jsx("td",{className:"border border-amber-200 px-3 py-2 text-center",children:"Total"}),n.jsx("td",{className:"border border-amber-200 px-3 py-2 text-right font-mono",children:Ae(Xe)})]})})]})})]}),yt&&n.jsx(up,{rule:St,disburseCategories:ft,onChanged:()=>{gt(ts()),Fe()},onClose:()=>xe(!1)}),ue&&n.jsx(Ym,{open:ue,onClose:()=>C(!1),cashInHand:Re,date:l}),h&&n.jsx("div",{className:"fixed inset-0 z-40 flex items-start justify-center bg-black/60 p-2 sm:p-4 pt-3 sm:pt-6 pb-88 overflow-y-auto",children:n.jsxs("div",{className:"w-full max-w-xl rounded-2xl bg-white p-4 sm:p-6 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 my-auto",children:[n.jsxs("div",{className:"flex items-center justify-between border-b pb-3 mb-4",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-xl",children:"✏️"}),n.jsxs("div",{children:[n.jsxs("h3",{className:"text-base sm:text-lg font-bold text-slate-900 leading-tight",children:["Edit Staff Report (",mt(h.staffName),")"]}),n.jsxs("span",{className:"text-[11px] font-mono text-slate-500",children:["Date: ",l]})]})]}),n.jsxs("div",{className:"flex items-center gap-2",children:[ee&&n.jsxs("button",{type:"button",onClick:()=>B(!U),className:`rounded-xl px-2.5 py-1 text-xs font-bold transition flex items-center gap-1.5 shadow-xs border cursor-pointer ${U?"bg-indigo-600 text-white border-indigo-500 shadow-indigo-300 ring-2 ring-indigo-400/40":"bg-indigo-50 text-indigo-700 hover:bg-indigo-100 border-indigo-200"}`,title:"কাস্টম কিবোর্ড অন/অফ করুন",children:[n.jsx("span",{children:"⌨️ কিবোর্ড"}),n.jsx("span",{className:`text-[10px] px-1.5 py-0.2 rounded font-mono font-bold ${U?"bg-indigo-900 text-white":"bg-indigo-200 text-indigo-900"}`,children:U?"ON":"OFF"})]}),n.jsx("button",{type:"button",onClick:()=>{v(null),b(null),B(!1)},className:"text-2xl text-slate-400 hover:text-rose-600 cursor-pointer leading-none p-1",title:"বন্ধ করুন",children:"×"})]})]}),n.jsxs("div",{className:"grid grid-cols-2 gap-3 sm:grid-cols-3",children:[n.jsxs("div",{id:"edit-field-staffName",onClick:ee?()=>{Y("staffName"),B(!0)}:void 0,className:`col-span-2 sm:col-span-3 rounded-xl transition p-2 border ${ee?"cursor-pointer":""} ${ee&&U&&te==="staffName"?"ring-2 ring-indigo-500 bg-amber-50 border-indigo-400":"border-slate-200 bg-slate-50/50"}`,children:[n.jsxs("label",{className:"mb-1 block text-xs font-bold text-slate-700",children:["Staff Name ",n.jsx("span",{className:"text-[10px] text-slate-500 font-normal",children:"(স্টাফ নির্বাচন)"})]}),n.jsx(Zn,{value:h.staffName,noKeyboardOnMobile:!0,onChange:D=>{v({...h,staffName:D}),ee&&Y("loan")},options:kt.map(D=>({value:D,label:mt(D)})),placeholder:"Select option...",className:"w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-bold text-slate-800 focus:outline-none cursor-pointer"})]}),Wa.filter(D=>D.isNumeric).map(D=>{const Q=D.key,je=ee&&U&&te===Q,Ge=h[Q]||"",jt=/[+\-*/]/.test(Ge),Ve=jt?Qe(Ge):"",cn=Q==="savingsAdjust"||Q==="nogodReturn";return n.jsxs("div",{id:`edit-field-${Q}`,onClick:ee?()=>{Y(Q),B(!0)}:void 0,className:`rounded-xl transition p-1.5 border ${ee?"cursor-pointer":""} ${je?"border-indigo-600 ring-2 ring-indigo-500 bg-amber-50/90 scale-[1.02] shadow-sm":cn?"border-rose-200 bg-rose-50/50":"border-slate-200 bg-slate-50/40"}`,children:[n.jsxs("div",{className:"flex items-center justify-between mb-1",children:[n.jsx("label",{className:"text-xs font-bold text-slate-700 truncate",children:D.label}),jt&&n.jsxs("span",{className:"text-[10px] font-mono font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.2 rounded border border-emerald-300",children:["=",Ae(Number(Ve)||0)]})]}),n.jsx("input",{type:"text",id:`edit-input-${Q}`,inputMode:ee?"none":void 0,readOnly:ee,value:Ge,onFocus:ee?It=>{It.target.blur(),Y(Q),B(!0)}:()=>Y(Q),onTouchStart:ee?It=>{It.preventDefault(),Y(Q),B(!0)}:void 0,onClick:ee?()=>{Y(Q),B(!0)}:void 0,onChange:It=>{const Ft=It.target.value;Ft.endsWith("=")?v({...h,[Q]:Qe(Ft)}):v({...h,[Q]:Ft})},onKeyDown:It=>{if(It.key==="Enter"){It.preventDefault();const Ft=It.currentTarget.value;/[+\-*/]/.test(Ft)&&v({...h,[Q]:Qe(Ft)}),ke(Q,!0)}},onBlur:()=>{Ge&&/[+\-*/]/.test(Ge)&&v({...h,[Q]:Qe(Ge)})},placeholder:Q==="loan"?"0 (উদা: ১২+১২=২৪)":"0",className:`w-full rounded-lg border px-3 py-1.5 text-right font-mono text-sm font-bold transition focus:outline-none ${ee?"cursor-pointer":""} ${je?"border-indigo-600 bg-amber-100 text-slate-950 font-black shadow-inner":cn?"border-rose-300 bg-white text-rose-900 focus:border-rose-500":"border-slate-300 bg-white text-slate-900 focus:border-indigo-500"}`})]},Q)})]}),(()=>{const D=Number(Qe(h.loan||"0"))||0,Q=Number(Qe(h.rebate||"0"))||0,je=D+Q,Ge=Number(Qe(h.savings||"0"))||0,jt=Number(Qe(h.dps||"0"))||0,Ve=Ge+jt,cn=Number(Qe(h.passbook||"0"))||0,It=Number(Qe(h.admission||"0"))||0,Ft=D+Ve+cn+It,Bt=Number(Qe(h.savingsAdjust||"0"))||0,Jt=Number(Qe(h.nogodReturn||"0"))||0,vt=Bt+Jt;return n.jsx("div",{className:"mt-4 rounded-xl bg-amber-50/70 border border-amber-200 p-2.5 text-xs",children:n.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-center",children:[n.jsxs("div",{className:"bg-white p-1.5 rounded border border-amber-100",children:[n.jsx("div",{className:"text-[10px] text-slate-500 font-sans",children:"Total Loan"}),n.jsx("div",{className:"font-bold text-slate-900",children:Ae(je)})]}),n.jsxs("div",{className:"bg-white p-1.5 rounded border border-amber-100",children:[n.jsx("div",{className:"text-[10px] text-slate-500 font-sans",children:"Total Savings"}),n.jsx("div",{className:"font-bold text-slate-900",children:Ae(Ve)})]}),n.jsxs("div",{className:"bg-white p-1.5 rounded border border-amber-200",children:[n.jsx("div",{className:"text-[10px] text-amber-900 font-sans font-bold",children:"Grant Total"}),n.jsx("div",{className:"font-black text-amber-700 text-sm",children:Ae(Ft)})]}),n.jsxs("div",{className:"bg-white p-1.5 rounded border border-rose-200",children:[n.jsx("div",{className:"text-[10px] text-rose-700 font-sans font-bold",children:"Total Return"}),n.jsx("div",{className:"font-black text-rose-700 text-sm",children:Ae(vt)})]})]})})})(),n.jsxs("div",{className:"flex items-center justify-between gap-3 mt-4 border-t pt-3",children:[n.jsx("button",{type:"button",onClick:()=>{S&&v({...S})},className:"rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-900 border border-amber-300 px-3 py-2 font-bold text-xs transition cursor-pointer",title:"এডিটের পরিবর্তনগুলো বাতিল করে মূল মানে ফিরে যান",children:"🔄 মূল মানে রিসেট"}),n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("button",{type:"button",onClick:()=>{v(null),b(null),B(!1)},className:"rounded-xl bg-slate-200 px-4 py-2 font-bold text-xs text-slate-700 hover:bg-slate-300 transition cursor-pointer",children:"বাতিল (Cancel)"}),n.jsxs("button",{type:"button",onClick:Nt,className:"rounded-xl bg-blue-600 px-5 py-2 font-bold text-xs text-white hover:bg-blue-700 transition cursor-pointer flex items-center gap-1.5 shadow",children:[n.jsx("span",{children:"💾"}),n.jsx("span",{children:"Update Report"})]})]})]})]})}),ee&&n.jsx(p5,{open:U,activeField:te,values:h?{staffName:h.staffName||"",loan:h.loan||"",rebate:h.rebate||"",savings:h.savings||"",dps:h.dps||"",admission:h.admission||"",passbook:h.passbook||"",savingsAdjust:h.savingsAdjust||"",nogodReturn:h.nogodReturn||""}:f,staffList:kt,onFieldSelect:D=>Y(D),onValueChange:(D,Q)=>{h?v(je=>je?{...je,[D]:Q}:null):x(je=>({...je,[D]:Q}))},onSave:h?Nt:fe,onReset:h?()=>{S&&v({...S})}:Ee,onClose:()=>B(!1),isEdit:!!h})]})}const I5="modulepreload",B5=function(l){return"/"+l},ab={},xo=function(o,u,c){let d=Promise.resolve();if(u&&u.length>0){let f=function(v){return Promise.all(v.map(S=>Promise.resolve(S).then(b=>({status:"fulfilled",value:b}),b=>({status:"rejected",reason:b}))))};document.getElementsByTagName("link");const x=document.querySelector("meta[property=csp-nonce]"),h=(x==null?void 0:x.nonce)||(x==null?void 0:x.getAttribute("nonce"));d=f(u.map(v=>{if(v=B5(v),v in ab)return;ab[v]=!0;const S=v.endsWith(".css"),b=S?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${v}"]${b}`))return;const H=document.createElement("link");if(H.rel=S?"stylesheet":I5,S||(H.as="script"),H.crossOrigin="",H.href=v,h&&H.setAttribute("nonce",h),document.head.appendChild(H),S)return new Promise((P,G)=>{H.addEventListener("load",P),H.addEventListener("error",()=>G(new Error(`Unable to preload CSS for ${v}`)))})}))}function A(f){const x=new Event("vite:preloadError",{cancelable:!0});if(x.payload=f,window.dispatchEvent(x),!x.defaultPrevented)throw f}return d.then(f=>{for(const x of f||[])x.status==="rejected"&&A(x.reason);return o().catch(A)})},xp="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEA3ADcAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCACHAGEDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9U6KKKACiimSypBE8kjBI0BZmY4AA6mgB9fIn7Xf/AAUL8Nfs33troejW0PirxO0iPcWazbYoYDkFvMGQW3AKV6jNeb/tp/8ABQo6Dcf8K7+EM41jxTfOLabVLFt/2cuEZPIKkh3ySpFfPPwq/Zl8MeBNPPjL9oPVGmv9Yi3WXh6FhLeZuFkE09xEfmTyzskB6fKaAP1E+CHx58I/H7wda+IPCupR3UUm5ZLdiFljZSFfKHnAY4z0Nei1+Knj34TfET9h7xRp3xG+FXiKXxH8PrycpBqtjL5iTWySR+ZHclflQGUkcd1PpX6I/shftx+Ev2n9Cjtnmh0bxlAFS70qRtokkO8/uMnLqFXJPbNAH01RRRQAUUUUAFFFFABRRWR4q8V6V4K0K71jWbyOx0+1jaWWaU4AVQSf0BoAu6pqdro2n3F9ezJb2tvG0ssrnAVQMkn8BX5iftZftyeJvjrr0vwp+CMNzci5kaC41ayBLzY+bMLD+ErnP41U+NHx++IH7cfjC68D/DVbjSvAdnMDfash2+bGr4Mm4Y+QhuRS/DTw/pHgWzuvh38ImtZdeura9Oo+Opot8CtbQM08Vv0ZH2soyO9AHLeBfAWhfsiWupPpOn2vxE+M1jbzapPbonn2ukRQOjvLIOquoI59a2fhL4Hk8Rftmfs+az4vv5vFd3438ET+INSj1BvNjVri2vMRKD/yzCBQB6g1s/DrwRYeHNNg1i3ee41fxB8CtZ1TVLu5k3yXFxIV3MW6n7vf0Favwigmf9rX9kRYwAsPwktWkHoDaXoH64oA88/Z38U+Kvg98IPg7CmlSfELwP8AESLUV1DwnIhnMC2V7M8rQR9BlSHOe6muP+Ln7OCeGZ7D46fs9avPqnh6N5ZbiCwk3XWmSGNpZs7eFRQwX8RXvf7Kluy6D+xuvTy7HxuWHb78o/qK4L4IeF/EPw18JfBrW/AMjPLrPg3XdU8QaLcnzLXUIra7i4WPoHZWK5PbFAHvn7D/APwUY0v41R2vhDx3Lb6P4zXbHFLnZBdscBI0zyZOpNfdKsHUMpBB5BFfi/48/Zz0j4/+FL74tfBWZtI8QxrDf33hZG23dnK++QvGRgKoUZGK9g/YU/4KK3dhcWvw4+K7vBPABbWWqz8Y2gBY5CeWc9c0AfqDRUFlewajax3NtKs0Eg3K6HIIqegAooooA5H4ofFLw98IPCF94j8SX8djp9pG0jFjy2ATgDvwDX5t+P8Axz4t/bq8YXVxLqLeEvgzojtJJds2BcANIEl7FgyFRtr1X9uL9kv4wftL+PZRpupx23g+2SNbOzE6gM+0hpGH1cjB7Cvkj9pT4K/Gb9mz4KeGNK1/U0Pg+Gf7BHZW8i/vJtrzBmK88bCOaAPffh1cab4vW18FeCLQ6B8NNM8UaZouqXCnbcaq90AWw/DoBtzj3r0PwH4f0nwronhm10u3S0tbX/hN9g3BnKrGqgs3Vjjua+QPDPw+/aNudN1PV9LtZoUvtSsPE4kRQPMkSIJAQMdl21pad8Gf2nFishFJcRrJFdhFIH7v7XxP2/iAoA938LSRL4R0GVpVDr+ztfnBP95mrR+D0Fpa/te/szrLcorp8G7VYQT99lW44/75Zj+FeE2n7Hn7R0um6fAuoPDCmkt4bC7l/wCPAvzF9CSfzrz+P4XfGSw/bW8D/Dc6+YfGGg6ZDpen3aspEFolm8zID0IMbSfnQB9WfsplX0X9j7EigJpPjVmy3X96Rn9ad8HNSs7f4X/B2+Myw/ZfhX4sYKW54uIFP9TXyP8AHf4efG39kDXPA2kvq0xtdMS4XQZbfDrGLqQiWIEd22ZI681x8Hw0/aOsrWytIdP1ZLfTtPuNMt41iO1LacgzRj5ejEZNAH174hs7nRNe1TxZ4Xv49H1jwh8JfD+sxJCAIrhyrB1dBwxZcjJzXMfFb4U+HP2n9PuvE/h0W3hX4t6LDFLrGiblC3JkUMJkbhV+QZwK8D8I/Cb9onVNZuLW5s9TS21LT4tFvGkiOHtIkPlxHjoBxXOeIfgb8etDub7Wb6x1BJYbVUnulVh+4hiIGcDoEyKAPoj9iH/goXe/CG5g8HeObl7zwqJvIt7yR9z2mFOQT1bLkCv128N+JdN8W6Rb6ppN3Fe2U67kliYEGvwa+AH/AAT3+Ivx98GWHirSSkGn3bymF5HC5KOFJ59/5V+nv7A37N/xJ/Zts9f0XxdrI1Lw/PHE2n2/mh/Il3yNJ7/NvH5UAfXlFFFABXwX/wAFhGf/AIUV4NRP+WniVVP0+yz196V8Kf8ABXGD7T8HfAUROA3imMfX/Rpx/WgD6++ESlPhP4KVuGGiWQP/AH4SutrnfCLQaD8PtEM8iwW1ppkAd2OAqrEuSfyr85v2uP8AgpJqMGutofw1lRVspG867Y8TDoQpHof50Afp31r819Vff/wWc0sdSsOPoP7Ck/qa80+BX/BTHxXoHj20TxnKl/4fnUWzmMkmI7xmQ59AGrrvDfiSz8b/APBYbS9c0uYXGnXWnwzwyIcgq2gsc/rj6igD6L/4KIaroOhad8EtS16OGSztPiJp0s4l72wjmMo+nC5/Cvc/hT8fvBnxkmu4PDWqxXlzarvlhVgWVSSAcA98frX50/8ABZn4lpdeN/h54MtptzaZG+o3USn+OZlWMEeoWJj9Hr59/Yi8ceJ/gf8AtWeBzqVrcaVpuuzLY3InBVJonCIW99pbNAH7R/ET43eEPhZqen6f4j1WLT7q/ikmt0kYAuqY3EZPbIqp8Q/EumeL/wBn7xdrOmXKXmm3fh2+limjIIZTbvX57/8ABX24kX42fB2KGNpJG06/UKgyWLOgA/EgV0v/AAT4+Iera5+xn8ZPBmuPKuq+GbG/jjt7j/WRxSWbkLjsAwIoA+mP+CdcC2/7H/gBVGFa3lfH1lY19JV87/8ABPtNn7IXw5A5U2JIPqN7c19EUAFFFFABXw9/wVYjE3w4+GcbfdbxfAD9PJlH9a+4a+H/APgqjMF8CfC9By58XQED6RuD/OgDY/4KUfG5/gx8DLHw/pk5g1DX3+xKyHDJAi/Mf5Cvy88J/s9eJfGWk2msopt7efw3qHiJZZB9+3tm27v+BFa+xv2rre0/aK/byh+H15ck6PoWjzPLFzgSR2zzP+eU/KtHTwbj4SeHdVSNYLO3+B+oxyIvA+ecoPzIoA/Oz4jfCjxL8IdevNM1S3a7SxtLS8u5UHEaXcPmRg/UZr2//gnr8QrLw3+1RY+JvEV6I7Ky0e5kW4mbOFS3kjC5/wDHR7Cvo742+F4vE0f7SdhLEhvJ/DfgS1hZlBKSSGKPI9OHIr85/GXg3W/hb488U+CJfNOq6fetpeY8hn2yOOAP7xx+dAHtvjH4rQ/HP9rnw9428T6fLdaDqXiSzjmQfdNusiBYl9/LA/76NfS/7fvxt8DeLfDHw21Xwxow0nWNJ19AZEjCFbcodwyAP4ljP4V4x4f0Hxf8KrH4F+Hdb8CtFdWXjW21ItJgtesFH7rp2UGvWP2zvi9oOvfDex8P6n4FTw7rg1C3uY5RIGZtpyVwBxkA0AetfE/xF4T/AGj/APgoP8GLSymj1TTNK0qe8lVlypfPmKpBH+zXVXvh+w8A/tN/tM6fZwCwtdb+Hq6nBCo2pJKIpxMygehK1wXwg1fR/EH/AAUZ8GPpnhd/C0aeF7yU2sjljJlPkfkccZ4rv/2k/FNhcftYyx6dcxzywfCvxFDeJEQfnGCqtjuM0Aey/sBRmP8AY8+F2RjdpEbfmSa+gq8L/YZh+z/sh/CdMY/4kFufzWvdKACiiigAr4O/4KmzPdxfB3SlUt5/iRZSB14AX/2evvGvif8Ab5SG7+Mv7PFnKokWbxF80Z/iXzIc/wA6APH/AAJoEXif9sD4m/EORCso1rW9GjP/AEyi0mX/ANmiH51Cha1/ZAa/BAiT4LCMc85fUDitD4Lawi/Ef4maW0qi5TxV4ouGQn5ip06bB+nNcxrc01p+xrrthJ8ps/gzpfTuZNRkJ/pQB3fxHsUPjX4qc7X1O9+HtgW9t8LY/SvOP2mP2dW8bf8ABS+GDT9Vg0Ke502z8RwzTFVRprfy12ndx8xjY16p8SFI8XeJ5yoaOTxv4AtQT6i3gJH/AI9Xz7/wVK8ZXWnftg2j6XdG1vNN0O1geSNsP83mybf++W/lQB7B+0PpvxMm+KHwHt9R8dWGq3UniIT2s0UkJFnMkPLHHbDN1/u18DfGD4n+J/iv8Yr+61nUP7QuIr7ZGvG1tjrGCMeoB/Ovsn4nxfCy9+L/AMFZ9A128XTZ7m6uruRyo2KLXdGfzO0/U18EfBzTrbxf8afDml3mopp1nqOqW1vJfTOFEQMoLSEnoODz70Afo58P/EPiqL/gp/bXvjKGKC9sfB13sjiIK+SkbkHj6Gvlv4BeO9S8SfHL4y+Ibi7e8lm8JeIpIjIfuq7xjA/Bq+j9E04j/gpNdWdt4nXxeJvAl/sv4phKFL282I8j04/Ovk79mHwzcx+Ffj9r/mvDN4f8J3FqQeNzXF1HGc/hG350Afsz+xegj/ZO+EwHT/hHLM/+QhXs9eMfsYZ/4ZO+Euev/CN2X/ooV7PQAUUUUAFfDH7dryv+1R+y7bpyr63KSP8Attaj+pr7nr4X/bdDP+2b+yiqnj+15yR7faLOgDweN18G/wDBR74r6Xcn7DYXWl6xcWaSHCySTaepyv1O8Co/F0d1F8H/AIt6NPuRbL4PeF40Rv4d9wWb9TVv/grH4LvfBPxi8L/EHSlktm1fT2sZbqPgCaLO1eO7I7flXI6j8cvDXjfwD8erxgbC5n8F6BoNjbyNk3L2pXftx75NAHvfxelTRrjWLq6kW3to/if4Kkllk+6kQs7Ylj7Ac/hX51ftefFj/hbX7T/jnxEkym1k1CWyt5ewgj3RQn/vnaa+h/2wP2nNF8TaX4z8NaE32m21LVtK1Vb5Dw0dtpsUG1e4PmI7Z9Ky/wDgnN+yzYftHfET4g6t4otGl8MWek3GmBxxuvLlShdT6opkI9CV9KAMP9mr4h+G7zxj8INJ1fwzP4kl0SXWHnt7KNWlvLaaz/cjnr5bpIfYCvXvhF4B+F3gH4n+N/FGsfCvxPe2V/cTHTrSeKNorWF5Q/yjsVOVHtxXytbweMv2D/2qo0MUd1rXh5poLZ7iLdFcQyxyJ5gU9irsR9a/SP4Xft+6V8VJLfRNG+FVz4p8QR2Jur5bOWGNSFk8t3AYdCx6e9AHlPwC1bwv4k/4Kd6Xd+ENEm0XRT4UmiktLhArCQRvuJA9cr+VesfG39lPw1+zh+yf8fr7RHkmuvEoS7mknOSim5RhGPRcsTiuK+DWsS+Lv+Cn0OpN4Rm8EG38KtHJpM7Kzg7H+cleOdw/Kvqr9vE4/ZF+JbY3FdPRgD6ieM0Aa/7GwA/ZU+FIXoPDtnj/AL9ivZK8f/Y+Ty/2WvhYvp4es/8A0WK9goAKKKKACvib9s2AS/tifstsRnZqlwc/9t7SvtmvhD/goD4wuPA37Q/wB1q003+1bjT5L66W1GfnKyW2Bxz1/lQB9F/tY/AC0/aN+DereF5CsOoqPtWn3JXJiuEBK/n0/GvxC8XfDTxp8Mde1/wrqnhm/W8tpEjnjhieVC4UdHAwRzmvuvUv+CxE+noX/wCEJsmUhmX/AEp+QOmff1FVf+HuYm1SWG7+Hel+Zt3h2mJZhjJ6jrQB8ifBT9kX4kftGa7Haafo89hpMM0MOpXl0uwwRsWG8BsbsAk4HpX7S/s0fs/aJ+zZ8LNN8I6OBLKgEt9eYwbq4KgPIfTJGcds18QP/wAFdrfSY7c2fgbTYkuIllAinK98EcD1rcl/4K/aJp+Df+G0RWJVfIdnPCq3/s36UAe+ftbfsLeFv2pb2z1e5nGk+ILa3+zC/RNxZAWKgj2Lda/O/wAcfsz/ABK/4J5fEPTPHmmXMmveH7Vo4k1WMbRvL72jdOflwjcnjmvrSb/grj4AtdSFtPp86grId6ox+7/k/lVXXf8Ago78K/jF8P8AxP4d8RaVMdNvrdrGVGhZgVl3ID7HoaAKX7PHxa0L4+f8FEr/AMYeHzm1/wCEKginQjHkzjcJI/fG4c96+l/27VLfsj/EwKcN/ZykfUTRmvyw/wCCcPxy8J/AT41eMNY8WXk40yLSZ447uOLe7COQZO31K4r6w/a2/wCCivwc+Jf7N3jfw14e1PUpta1WzFtaxS2RQeZ5iN8xzxwDQB9lfsw2I0z9nf4c2oGPK0K0XH/bMV6dXCfAizaw+C3ge3cENHo1qCGGD/qlru6ACiiigAr5o/a5/ZY1f4+6z4U1zQNefQ9Y0JJo4pFfaMO8bZHHUGMUUUAfGGrf8EefFl5aAxeIbA3BkclHlbZtJ69OtYGqf8Edvibd3Imh8SaOsgVfnaZ87gMHt6YoooAoL/wRu+KyS2zjxFoTiJlO1pnxgHOOnrVaX/gjh8YvnZPEmgF8HaWnfqRgj7vQiiigCO5/4I9/GXMhk1zw7L8hKv8AaHyozlgOO+SK4PWv+Ce3xe8L6XqdvJqujGAJHeylLhtxAyyY4/2ifrRRQB5UPgB4s8G3WpwXM1jK91aTWxIkJwWAyelc1/wpfXgL957uFo7aJ7iXDnLBcD8/mFFFAH9HXgOzGn+B/D1qHaQQ6fbxh26nEajJrdoooAKKKKAP/9k=",H5="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWkAAABFCAYAAACIYhe3AAA4TklEQVR4nO29eXgUx53//+rumdFodEvoQic6OARIgMQNtjHg2MH2z9hO4iPeJM7uEidOHO9u1llviEP2yTrOOuuNnZ83JFnjDYnXx3ptY+MjYMAcRpxCXEIIoftA50gaae7u7x+jLk3rQGBwDHjez6Nn1F1d1VXV1e/61OeoljRN0wghhBBCCOGKhPxZVyCEEEIIIYSxESLpEEIIIYQrGKbPugIhhBBCCNcycnJ+S2eXjKZpmMwyNpsVR08vmqYgyR5iYuELN0/nh48tIzUVLGZQlKH8IZIOIYQQQvgU0dWpMSEpnuU3FjF3Xi4WCzj64OiRat5+eyv2Lj9vv3WU1JQJPPjgTFJTQVZAGsz/CUlaHfwNaUtCCCGEEM6H+AlJrFyxkFtXpRARGSBgvw8yM3KZPCWHXz79R5zOfv77xS0sWTyTxCQwmUAaZOkLYllt8E8caxKapqEJsg4hhBBCCGE05ORMYMGCFCIjwWwCSQaTBeLiYOZMibu/tBKTWaLHLvHRztOoPmP+ixaFhzz2ZDRC3nshhBBCCOdDfFwEqcngcMD2HRX87ndvcaqiBSSwhsHiJSlYwmRUNYyysjN4fBDsGH1edYemaUiSJHQj+rEOCWX0jCGEEEIIIQAQFRWHX4X6OnjjjSN0dp2jv9/M9GmpSDLExUJsjI3+PgftbXZU9SJIOpiQRzsOIYQQQgjh/HD2R9DeBicroOYsyMoEerrC8LkDqo+BAXA4fKhaGF5f4FywInlcw6GmDemjg9ld00AaPNYGuVu6SrUfn1b9NW1I+S9pg7olFVA18KsB64HfH1gHZSZd3pv/JbHvGCTEQUzsoElaJtDQS/yVCPxpMshSoN8AVBXa26GjC64r/ku18i+DXYdhUjaEWwNvqywNDhwZ0AJWJx3yoLZSJjDQBvtLkzivtWj4e3ulQZKMXPNJ837S93p4v1xMfr8PXC74rxfa+dV/HKW9w0ZsXDRHj/vo7LDj8WRiNrvx+RJxugLc+ucP+ujri0JVPaOWOSZJa2qgAJ8ffD5Q/QE+URk0JGpDmVXdCjnYGJ2YtGHHwefOh7HyX2h5n+T+qvSXrL8EKKApyBKYI22EnQO8gG/wzw+cbYDWFvjGvPFv+mngxcMwMQWyJ4JCgARkAg9+kDOQQc2biUsCnxw4NV77x8OY+Qd5SFHAlBKJKXESSutgJn/Qnwo4vHDiJNxX9Ima/qlhYxnExkJ0FISHQ0wEmAn0qQm0KXNwmQN9qc9JglQ1AnOXNEhGXoaIOahvh4/X4f0p68dB6cPzn6+88XA58gdfeyHHweXK8qBwOcr1wf0xFjTZWH6wUnd4fw5vm18FjxtcrnjQYvD7wmhrk+nsHED1W0CKQ1E8eN3RnD0Le0vPsm1bDS5PeIAXtJFELQXv3aH/IxEgZLcLOrugrFzjSFktDfVtdNtduD1+NGRkDSRJQ9P8IGnIWmD+HiLtgESkSoFfWZORJA0/kjgOTh+SpPT8DCvv/MfDcSHpxrTh99ftqka5ZNz6yIHrZTXgwK4NvhWSGtDp+wn8ikkBFUUDk6oG+M+vYdJUFDVwHs2PjCSMtgGS1xjypBwNw9Mv7liTQEPGL8n4ZPBJGpqkDJ6XUAfTVSnQfr8M6jA79MU+vws9DlTQj0lTkAJLE2RAUUFCQ9HUQF+qoGjqIMlpyCooDPadpCKpsmgrkjr0dkrq4I8xfbzj0fLrUlmgf5RAX0l6m+TBYxmfAn4UfHLgOFhoGK8/NHlobFxK/19J+TVNQ9ZAlmX8g8w0Wn79f00aX+Idyj/ERwH+OX++C20PyKiqFbQY6ut91NZouNxRaJoZ3UdDwouiDGANdxMf56Wvr5e+fhMgIUkOJuc7+XDHPURFg2VwOI0qSfu8MOCEbdvsvPLKRxw/cY4eu4rXAz6fCZ9mw6+akDUZWVJB7kfChSz50TQVBgeNpEmBWU4aNDpqAYLRBklG0gK/Yy279E5XBx/SWOoVTRpdXz7esm78dD1h8P7iP+OgGFEfWQ3Uxy+NWd9PUr+rJb8wOGuD3kBiPOjP/+LLV1UVWZ9E9EnvYp+vqt9/9PF0Ke0fjSSHj099POn3FxOv3j+SkWz1/tLHv379pT6/4PdJLz/4/VHVwPjV+3uo/7RAPRX5ku7/Seqvj59Pkn+s8XKxap9x2yPJaKoZVbXh94fjVyOR5X6QTIEJXFKR8AMDeNxO2toGkCTIysyh3+Gkp9crCh1hODRI0L6AivSPf6zhpZdLqa7qwuXxIEkQGWEmJiYGn5qEqkaCZkZRnMhyI7LsQZa8IPmHBtso05skSWjqYAsvZPr7LHGl1y+EED4ThOIjxoKKH1Q/muQEtR8Js6G3ZEXDFm4iLtZKbm4+RUUzmTLVyrqfvMuJ43ZkySJMMToMkrTfDx4PvPd+D6+8vJfTp7qRFTO33rqYFTfNIj0Vurug7AiUl7tw9HvIyo7mlpsgKzvg8ycMZWPMTsN1VcP1RcF5x9IJh9JD6aH0UPqVmK7q12CEJA3ZvWQlsD9HmBWs1sC11vAuJGkApJFuzSaAwIJHxuuDhkb4n5d2cqqyE7PZxF//7R3cdnsSySlQfRp27Ghn64dV9PaY8Pr91NZ5cTtjWffTQjImBiJpxlPMhxBCCCFcyzjfIlySEAZ2VQ1oLiTJCZKH0VYpg5K0jKYGJOmtH57ibE0fHo/Cbbcv5aabksjJgc4O2Lqlhrc27aSv14KkxGAyWenu7KT8SAOlpZPI+lIUYRaQZKPEPKKCIQ1CCCGEcK1C5zhtSFsw0ntm0InAN+hJOagq1o3OwRhSd2jg9cHe0uP09nqQZFi4IJfcnEC8eXW1iwMHTtPv8DC1IIeVK5cy0A9//OMr9PX5OLC/krvvKjFUZMw2hCTtEEII4RqFpmkBvbI8RHRGlcnFSanCZ8qnBfwyGxs7cHtlomMTSEgMJzw8kN7Y0EZLSw8WayT5+SnMng1pE8FmVfD7FNra+0Az6pbHakAIIYQQwrUKSZJG9TYbStdGpMva2OqRwSA4LSCCq+Bxq6g+M45eL64B8HoD590uHy6XF4tiwhZuCpC3Bm63F00LiO2qqrsbnb8BIYQQQgjXKjRNG0cYHbavnRQgbhgWCzDiat3nTzWhEYbHY+XosTZazwWI2q9GomnhqFoYGmZcA9DZCU6XhIoZVR3bqT2EEEII4fOGC9Ua6DrqsSADSEhCTaFJZlQtHL8ax5tvHmfvHmjvBI8nHr8ajUoMXu8EmprgwIFOvL5oNC0MTQpEIIZcKK8MXA610nhljJb+WamzrlY12tVa7xDGhq7uuFCtgWbgzPMYDg1WSM2EpkbQ2NjLr5/fS13dQjq63Pj9Uah+hbPVPXR1Shw+UoOmRaDiAE2+Jrw2hm/HerVgxDayl6ENehnB0XDBv6NGeX4GfXepz2x4u/4SGK0Pr7axd7H9drW17y+Lsbf2FyStDSquFSQkzQ/I+P1mas728N8bdwImeu0KGjInjjcBTQw4QcIEmjL4ABBqk6sVf+mX9HJhvLIu5X4jwpWvsBdt+GRyqeUMx6WUO1beK2WC+6QIbtfFEvTnh6w/yWcGR147cu8OyY8k+0hKtlI0M5+aupPU1zfg90lImg1Q8Lj9yGYLUZExqJqKpnmQibhqJenRBs2nPaguJyFcSJ6LKXO08q4Gie9SJqFgXM5VyZXYT5cL5xsHn8bK7vOKIXWHTuCaF0nqx2azc8fqQiamLab8SBvlR05yrsUOaCQlxzOzcC6SFMZ//+EDOjr6QIoKSNJXwbO4kAH0aQ6w8w3uT3Kv800mxp3zLr28T1rHzxIXO6l8GhL1tYbzTdrj9dPnpw+HScUagh+D/h0Xo0rSiuzBJPeQnALFxTB9ehL/3x1JeJyB6BiTCSxWOHkcwix9KLInEC1zlUAfJA6Hgw8//JDdu3fT0NCAy+UiKSmJpUuXsmzZMtLT0z/V+18uqKqKLMv4fD7OnDnD66+/TllZGT09PaSkpHDLLbewatUqYmNjL4podDWH3W5nx44dHDhwgNraWgYGBgCYOHEiCxcuZPny5UycOPGytulyYjR9+nD4fD5Onz7NRx99xLFjx2htbcXr9fLDH/6Q4uJirFbrJ3puXV1dvPTSS+zfv5/+/n6mTZvG/fffT35+PibTuN/cuCowHkHr53y+wBdWg9sdmvjGh3GUDPrraZoXSfJiNkFE+NAHNyR1UMsigdsNVpsec+4Ve0lfmMpD3zv6s8PRo0d58sknOXToEB0dHXg8HiIjI5EkiXfffZc77riDb3/72xQUFHxqdXC5XJw6dYqjR4/S0tJCc3MzK1asYMWKFYQPRhFdyCCWZZmenh7eeecdnn76aZqamujt7cXv92M2m9m5cyeVlZWsWbOGtLS0C6qbpml0dXWxceNGXn31VVpaWnA4HERERBATE0NbWxsDAwO88847vP3223z3u99lyZIlf5EXLrhP/H4/u3fvpqamhqamJpqbm3nggQeYNWsWVqtV5BlLf+p2uzl27Bi/+c1vKC0tpbu7G4fDgcfjwWw286Mf/Qiz2XzRdfT7/dTV1fGtb32LEydO0Nvbi8/nY8eOHZSXl7Nu3TrmzJkzZruuVoxWf4fDwYsvvsjbb7+N1WrlvvvuY/Xq1YSFhV317b0oSKP+GwQZsSd5EExa8LZOgKb5B/c8DfzKsoJZGVSH6L7UBL7WosiA5EFi6BvkV0OfHzt2jEceeYQDBw4wMDCAzWbjoYce4tZbb2Xnzp28+OKLbN68mSlTpnyqJN3R0cEzzzzDtm3b8Hg8uFwuli1bdtEDd2BggF27dvHjH/+Y2tpaFEXh/vvv52tf+xr//M//zMGDB1m/fj033HADycnJ40pwPp+PiooK1q1bx+7du+nv7yc7O5tZs2YBAenwgQceYP/+/Xz44Yds3ryZ2NhY4uLimDFjxiftjgtGcP+4XC6+973v0dnZicfjQZIk7r///gsi1q6uLjZt2sQzzzxDXV0dVquVc+fOifTc3FxiY2NRlKGdyS6USB0OB0899RQfffQRHk/gaxsJCQl4PB527NjBsWPHmDp1KjabbdR2XU3QNA2Hw8GmTZtoamqitbUVn8/H97//fXJyctixYwevvPIK+/fvFx4tGRkZLFq06HNoTLx4mCRJGuGQYdgEWwr60fUpmvFTa5o09DWSC8NnJ0U7HA5++MMfsn//frFs/6u/+isefPBB8vPzqa6uxmKxUF9fT1NTk8j3aQwih8PBzp07aWxsBALLwBkzZhgI5kLu2dTUxMsvv0xtbS2SJDF58mTWrVtHWloaqampKIpCe3s7jY2NOJ1OoqKixixL0zQqKyt5/PHH2b59OzabjX//93/npz/9KXv37sXv92MymZg3bx4lJSXU19ezb98+9u3bx6lTpwwkfTn7bLSyfD4fVVVVnDhxAlVV0TSNGTNmEB0dbSDW0WC323nrrbdYt24dXV1dLFq0iFmzZvHUU0+JawoLC7HZbBflyaBpGqqq0traymuvvSYIOjY2ll//+tfs2rWL1157jYGBAVT10wsquFg98YVeE3wtINQYpaWlrF27lv7+fjweD4sWLcLr9QIBYaS7u9tw3NPTEzIsjoA6zgZLw6BdKOleRZvi+/1+1q9fz549e3A6nQAUFBRw1113kZ+fT2VlJdu2baO+vp7o6GhiY2NF3vE8AC4Uej63201TU5OYCGRZJicnh4SEhHEJZjg6OzvZt28fqqpis9lYuHAhGRkZbN++nYMHD+J2uwkLCyMhIYGwsLDzltXS0sLrr7/Ohx9+iMVi4cEHH6S4uJj29nbcbjcAJSUlTJgwAb/fL8obGBgQ6Tou5oUf7drxyNHr9XLw4EED2RUWFhIRETHu/crLy3nuuedobGxk+vTpPP7447zyyiuG64qKioiIiLgoaU9/tgcPHqS7u1ucnzdvHgsXLmT27NnceuutTJs2Tai0Piku1r5wvjwX680UnO71etm7dy/19fX4/QHb1OTJk4mMjARg8eLFbNu2jbq6OsLCwsSEeCn4JAbxqxXXhuXiAqDrWH/zm9/Q19cnBuLtt9/OlClTMJlMREREkJWVRWFhISUlJdx8880iv9Pp5MyZM9TX12OxWMjOzqaqqkqkJyQkMHPmTMLDw4V0sWXLFvbs2UNzczPnzp3juuuu47HHHgOgv7+fEydOCOkCIC8vj927d6MoCgkJCUyfPl0M9PPB5/PR29sLBAatLMtIkkRiYiK5ubkoisIdd9zB9OnTx1UDtLS08Oc//xmn00liYiL33nsvFRUVwugDsGDBAmJiYnj77bdpbm4GIDs7e1TjocPhoLKykra2NsLCwkhLS6O6ulqkp6amMnXqVMLDwzlx4gRNTU34fD40TSMuLg5Zlunq6iIuLo4pU6YQHx8v8no8Hvbv34+machy4HuSM2fOFCuFiooKGhoa8Pl8xMTEkJeXR3JyMna7nfLyco4fP05UVBRLliwhNzeXQ4cOGequk3RlZSUNDQ1CKo6Pj0dVVex2O/Hx8eTn55OQkCDyuVwuDh06ZPAvt9ls7N27l5UrVzJp0iRMJpOwSVRVVeF2u8nJyaGwsJDo6GggQH6tra0cO3ZMlJ2cnExubi4NDQ1ER0eLPj969KhQ1ZjNZmw2G36/X9gRpkyZQlJSEj09PZSXl+N0OklNTaWoqEiMGx36/y0tLdTU1NDb20tsbCxms5lz584hSRIWi4XMzEyys7M5ceIEW7duFQQNAV1/XV0dkZGRdHV1MX/+fJKSkrDZbNx0000kJSUZ+trpdHL8+HEqKyvxer3k5uayaNEig2quoqKCpqYm8Rzi4uKEYTs2Npb8/HwSExNHjMGrHZ8bkvZ4PLz//vvU19cLySsiIoJly5aRnJwMQFpaGt/+9rf56le/SlRUFImJibjdbg4cOMD69es5cuQILpcLWZaJiIgwkP2dd95JVlaW0DFWVVXx0ksv8d577+F2u3G73SQnJ+PxeLBYLPT19XHixAlRP03TKC0t5fTp00BA9bFw4UIee+wxJk+efN6lq81mY9KkSbS1teFyudi5cydNTU3k5eXx/PPPC6+VCRMmjNtPfX19NDU1oSgKcXFxZGRksHHjRkMwS0lJCTt37mTjxo3U19cTFRXFjTfeSGFhobhmYGCAPXv28Nvf/lZMRrIsY7PZ6OvrEwT2zW9+k8zMTMLDw/nNb37Dli1b8Pv9aJqG2WxGkiS8Xi8Wi4U5c+bw/e9/nzlz5oiJ8PDhwwDimRYWFmKxWNiwYQN/+tOfaG5uZsGCBTzwwAOC/JxOJx0dHXi9XiIiIsjPz2dgYICTJ0+K+sfFxZGTk4PFYmH9+vVs3bpVrL70ic7r9WI2mykpKWHNmjUsXrxYtP3o0aOGPtu5cydtbW3MmjWLhIQEYfs4fPgwPT09qKpKZGQkt956K9/97ndJT0+nt7eXN954g+eee06Uk52djcvloqenB6vVyg9/+EPy8/N59tln2bNnj9D5KkogwExXT02ePJkbb7yRd955h4aGBrEKuvPOO/nBD35gUIF1dnbypz/9SeiYfT4fFosFWZZxuVxAYHJ9+OGHiYuL4z//8z8NE5wkSbz++uvk5eUhyzLPP/88H3/8MaqqkpmZycyZMwX5ut1uDh8+zHPPPUd5eTn9/f1iRbhq1Sp+8pOfCIP+7373O7Zs2SLqMPw5zJkzh+985zssXLhw3HF+NeFzRdLvvvuuQSIsLCwkPT1dPGyz2UxaWprwgPB4PGzbto2f/exnHD58mIGBASIiIpg8eTInT540LO/j4uIMUmppaSllZWV0dnaKc263G6fTKUj6+PHjIk2X9Lu6usS5pqYmFi5cSHJy8nlVL9nZ2XzjG9+gsrISu93O2bNnuf/++3nggQe47777DMvqqqoqNmzYQHFxMbfccouQ/HXij4yMJC0tjbq6OkEyBw8eNBDOs88+S29vr5AuCwsLKSoqIi4uDgiQ4HvvvceTTz7JyZMncblcREZGkpeXx9GjRw0S14QJEzCbzTQ3N3Py5EmqqqrG1NW2t7eTlJREcXExmqbR19cniFWSJBISErBarfzsZz/jrbfewmw2c88993DrrbeSl5cnvD0iIyNJTU0Vk4Db7eb06dM4HA5xL30V09fXR1lZ2YjVRDBaWlqIiYlh4cKFSJKE0+nkyJEjIt1isfDoo4+Sk5NDUlIS7733Hv/xH//B3r17cTgcpKenExUVRWtrK5s2bSInJ4c1a9bQ29tLaWkpZ86cEWU1NDTg9XrFx2I3b95McXExFRUVhhXKcNTW1nLgwAExOelobW3ltttuY9asWZhMJux2O7/85S95+eWXaWxsRFVV0tPThbeK/mwsFgspKSlYLBYxyenIyMjgG9/4BsuWLaO2tpYTJ06IuqWlpQl1lNvtZufOnaxbt46ysjKcTiexsbGUlJSwZcsW2traWLVqFYsXL8btdlNeXs7JkydF24fve9La2kpcXBwLFiy4ptQgnyuS/uijjwwPtqioSEhXo+Hw4cOsX7+e/fv34/V6hfSwdOlSvva1r1FTUyMGS1FRkZCiBwYG2Lt3LzU1NSPq0NfXR3R0ND09PQbJTVEUvvjFL9LW1kZZWZm4tq6uDofDYSDpYPT29rJ7925effVVQTJ+vx9FUYiOjqasrIyzZ8/S3NxMY2Mjhw8f5tSpU9x9993MmDGDKVOmAEO+xJMnT+axxx7jpZdewuVycfbsWQPhSJJEfX09PT094mWvrKzkgw8+IDc3lylTplBaWsrzzz9PeXk5Pp+PjIwMHnvsMaZPn87q1aux2+1C4ps5cyYREREcOnQIu91uIIGFCxeiKAofffQRfr+f7u5uTp06BQRUCidOnBDSraZpWCwWHn/8cWpqaigsLORv//Zvuf7660fo+SMjI1mxYgVr167lyJEj9PT0UFZWZhgbc+bMISwsjDNnztDV1WXw8V28eDGaprF//34h1dbU1OB2u5EkiZqaGoM+Oj8/n3vuuYeUlBQaGxt5/vnn2bVrF06nk7S0NNasWYPP52P9+vU0NjYKH/ePP/6Yffv2IcuyIKa7776b1tZWPv74Y5xOJ+Hh4Zw5c8YgDMTHxzNjxgw8Hg+lpaVIkoTL5cLtdrNq1SpOnTol+rGzs5Pa2loKCgowm81s2LCB1157TRDyzTffzN/8zd9w7NgxfvGLXzAwMIAkSURFRTF9+nQURRlhiC4pKeErX/kKubm57Nixw9AXEydOJCMjA4Dy8nKeffZZYU9JTEzkscceIywsjC1bttDd3c2BAwfIzc0VOm19fMiyzNKlS1FVVTwHu91OdXU1brfb4H55teNzQdI+n4/m5mba2toM5wsKCgwuUMFob29n+/btfPjhh3g8HiIiIliwYAHf/OY36e/vN5QVFxdHVlaWGBj79u3j5MmT+Hw+TCaTWL673W5cLhf9/f3U1tYKPbLJZCI/P5+nn36a3/72t5w8eVK4k1ksFrF0BaMUrbuQ/eIXv6CmpkboXh955BHuuOMOnn32WcrKyrDb7eIldTgc+Hw+wsLCRhgRdUl6+fLlzJgxg/7+fuFzrd+/qKiIn/70pwwMDPDUU09RXl5OX18fb7zxhjDa6bp4vT7Lly/ny1/+Mg0NDfT39wMBUs3KyiI5ORlFUaioqMBut4u6zJs3j4cffpgzZ86wb98++vv7URRF1NntdlNWVmaQqDo6Omhra0NVVQ4fPszvfvc7oqKiWLZsmSBpXX+dk5PDQw89hN1up7u72+DVAQGStlgsHDt2jL6+PsP5b33rW9TU1HDq1ClcLheSJGEymTCbzWKFFLwamDNnDgkJCURERLBx40YOHDggJpeVK1eycOFC3n33XTo7O/F6vWzatInjx4/T2tpKQ0ODCFZKTU3lJz/5CQ0NDfz+97/HYrFw//3388ILLxhWYCtWrGD16tVs2bKF0tJSNE3DZrNx/fXX8/jjj/Pkk08KkoaAukyWZY4dO8abb74pyHDSpEmsXr2aJUuWUFFRIVaO4eHhZGZmEhcXh91uN5QFMGvWLJKSkrBYLJw+fdowgWRmZpKRkUF7ezs7duxg27Zt+Hw+bDYb8+fP584772TdunXi+v/6r//itddeo6Ojg5aWFnFeVzHV1NSI1Zosy5jNZiwWC9cSPjckXVNTI5bZ+os9ceLEMWfc06dPs2fPHvGCJicns2rVKqKiojh48KCBbKZPn050dDSSJOH3+9m8eTPnzp0jPz8fu90uPDi8Xi/9/f309PRQUVEhXmSTycTy5cvJzc2lu7vb8IJnZWURFRU1qvvZ/v37+dWvfkVlZSWqqhIdHc2Xv/xl1qxZI/yXOzo6RiwLi4uLWbFiBampqaINevm63jg7OxuHw8GWLVsM+YuLi5k7dy4xMTGUlpbS0NAgXqDTp09js9nYs2ePkConTpzIbbfdRnh4OMeOHcPr9RpWH7oqpqKigp6eHnGfkpIS5syZw+nTp4UOMioqiqysLGDIOBdcN92gBIEJbNeuXaSkpJCSkiK8CfR2KorChAkTmDBhAlVVVSNWC7NmzRLGTH0yBZg/fz4lJSVUV1eLsREVFcXEiRNRFAWHw0F5ebmhrOLiYiwWC01NTWzfvp2Ojg4goOpZtGgRBQUFhn7WJ/ekpCShJlAUhVmzZpGdnU16ejrZ2dnIskxkZCQtLS2iLjExMRQXF5Oenm7oz8TERFauXElycjLt7e3ivNlsFrr3d999l7Nnz4oV0oIFC5g3bx69vb0Gz43o6GimTZsmJPThBtc5c+Zgs9no7e2ltrZWrPBiY2NJS0sTY2fHjh1isoqLi+P2228nLi5OeNToKq3c3Fz6+/sN74DuAnr27FlRflRUFOnp6cjyZxsod7lxbbVmDPh8PvFiBEtew/XIwaiqqjJY1RMSEli6dKmQ4IIxe/ZsgxRdWlrK1KlTmT9/vlgK6rpPnaSDVR36ElqWZY4cOSIkluTkZDIzM0eV9hsaGvjzn/8sfIQh8CJ+5zvfIT4+nqNHj2K32zGbzUyaNImwsDAKCgr4h3/4B375y19y/fXXC6l0rP05nE6nMMzp53TyCg8PJyUlRdTN5/PR39/P8ePHDbr2pKQkFi1axMDAgOg3vf/1fvN6vVRVVQlS0Q2hmqbR3NwsyCE2NlYEF7lcLgOxKorC3XffzZo1a4TngMvl4ujRowZ/9+HQPSgaGhpEG7OyskhNTcVkMnHixAkxISuKQl5eHmazmZaWFjF5JCQkMHXqVCRJEkZDHZqmCZI+cOAA586dE+0pKCggNzeXxMREMjIySEhIIDY2lttvv521a9cKVRQExsjcuXMBsFqtTJo0iaysLJqamujq6hJlpqenk5WVRXd3N3V1deLZxsbGMmvWLJxOp8FgnZ+fT1xcHJIksXfvXiH16qqovLw8mpqaqKurE+djYmKYNm0aqqricDgM5cXExDB58mSDqkgfnxkZGaSlpSHLMrW1tRw5ckSMhfj4eG688UYsFgvz588X5x966CGefPJJEhMTDUJNbm4uJpOJ5uZm8b7oz+Faw+eCpIP3DQiWvIKXwMEYGBigvr5eLK9kWSYxMZHs7GwGBgYM5ACIEOSTJ0/y3HPPcfz4caZOncq0adMEiWmahsfjobe3VxjJdOieC42NjcJlDAIvcUJCwgjJQNM0ampqOHjwoLjWbDaTlZXFtGnTUBRFSGgbNmxgyZIlhIeHc++99/Ktb32LhQsXnlcXr8Ptdo/qlqZLvy6XS0jGENCF2+12obawWq1MnDiR5OTkEaQKAYnLarVSXl4uotQgQDQpKSk0Nzcb9Prx8fEUFRXhcrmorKwUQUAAOTk5/OM//iO33XYbMTEx4rzujqj323D09/dz6tQpIYVLksTs2bMJCwujtbWVxsZGw6SZmppqIHUITEQFBQV4PB7q6+uFa6Ysy8TExAgXz6NHjxqMk5MmTSIpKQm3201nZ6dw6SsqKiIpKYnW1lZxrclkori4eMRYqKioMOh8MzIySE1NpaWlhdraWtGmmJgY4TYarFZasGAB4eHhNDQ0UFdXJ9Q38fHxTJw4kYiICBobGwVJa5omJkun08mBAwcMbSooKCA6Ohq/38+hQ4cMapiMjAxSUlLo6emhtrZWSPRms5mkpCQyMjLw+XwGA+h1111HTEwMfX19YnykpqYanoP+XCdMmMD06dNHPOOrHZ8LdYdu6BiO1tZWsUeDDpfLxauvvsprr70mln1hYWFER0djMplwOBzs37/fUPasWbPo6elh7dq1fPjhh/T29uJ0OoVOWUdHRwcbN26kqqpKvECKogiJOdjNS5dkggkn+J7d3d20tLSIAaooChaLBYvFgqZp3HjjjeTm5tLV1UV5ebkIcsnKyrqgjX38fj8dHR2GFyYlJYXMzExMJhOqqgrpV9M0YmJihDeEbuQKCwsTmzp1dnYaJEyLxcL06dOpq6vjiSeeEK6HEPBWSU5OprGxkfr6eiBAeBMmTGDSpEns3buXRx991OBtUVRURE5OzgjCzcjIEL7VY+0rEbxikiSJkpISzGYzBw8eFG6WgJB69WhU/XxiYiJ5eXns3buXH/zgB8LTQZIkYVCWJMkg9UFAuo2MjOTEiROUlZXhcrnIyMiguLgYu93OiRMnxMrPYrFQXFw8og0nT54U0XuappGdnU1UVBSNjY10d3ejaRoRERFkZmaiKApHjx41qNPmz5+P2Wzm6aefNhBxZGQkEREReDwe6urqxKSku2ampaWxa9cunnjiiREGV7PZzBtvvMELL7xgmMyysrJIT09n165dvPnmmwYBQ1/Vnjt3jldffRWAKVOmkJeXx/Hjxw3PIScnh+TkZBoaGgwTdWJi4qe6jcNnhWtaktYfqtlsJi8vb0T02iuvvMLZs2fx+/14vV7Ky8v5l3/5F/7t3/7NQBo+n4+2tjb27t3L+vXraWlpEWVYLBYiIyPZsGEDe/bsob+/n6VLl7JixQpUVTUYTWpra9myZQunT58WL2tYWBiFhYUoikJ1dTV+v1+8cIqiUFZWZthPQocsywaPBY/HQ01NDYcPH0aSJMLDw6murmbt2rVUVlZy2223iSVicN+MBafTaSA8CEjWe/fupb+/n48++oiKigoxqUybNo28vDzD6kSPqtyzZw/PP/+8QYLTJfnf//73lJaWikkNAhJmamoqnZ2dtLW1iQAdTdM4evQozz777AhjlW7oq62tFWoITdMICwvDbrcbnkNw2x0Oxwh99Ny5czGbzcJvV4dO0u3t7Yby/H4/p06dYv369Rw7dkyUL8sy8+bNG7PPu7u7qays5H//93/ZtWsXMTExzJw5k6lTp9LS0sK5c+fQNA2TyURmZiZJSUkjXM90g6tuENU9J3RfaAhMBlOnTsXn8xmka72O//M//8PmzZuFukmSJBwOB3V1dbz22mt88MEHYuLRg74aGxtZv379CLe/yMhI4d0TrLrTvXn279/PH//4R8OE7ff76enp4cyZMzz77LOcOXMGSZK47777iI2N5fjx44bnkJOTQ2JiIh0dHUJS1+1BbW1tVFRUcC3hmpak9YFoMpnIysqiqKiI8vJyMci3bt1KXV0dqampOJ1Ourq6aGxsZNq0aaSlpbF7926cTic+n48DBw6wZs0azp07Z5DgvF4vX/3qV2lsbBS6wa6uLl544QVqamqor68X9UhPT2fhwoW0t7fzwQcfAAGSnj17NrIsi6W5Xr9XX32VI0eOkJycLAJuIPCy65F6lZWVQCCYo66ujr/+678mOzub3t5e6urqqK2tpaioiK9//euGiMDxQoOHkxcE3P3Wrl3Liy++SHNzM9XV1WiahtVq5cYbb2TFihWcO3cOi8WCx+PB7Xaza9cuqquraW5uNpBLT08P9957LzU1NYK89fTs7GxSUlIM5Oz3+9m/fz/f+973DEtcHbred7g6YPv27TQ0NPDoo4/y5S9/2dB23TClv9SSJGG1WikqKsJkMonIPB15eXkkJiYKwtFRWlrK2bNnaWlpMUipiqIwf/58USd9QyVd8n3vvfc4ePAgnZ2ddHd3Cy8Yj8fDmTNnxARpNpuZNWuWmAD1e7e1tdHY2CgmpcTERFJTU+no6DBIsDpJDw/9BvjFL36Bx+MR7nxOpxNVVenu7ua5555DURRaW1vF9V6vl507d/L1r3+duro6kpOTDULESy+9xFtvvUVjYyORkZFistY0jTfffFMEo+gqDKfTicfjYd++fdxzzz3Cs2TOnDk88MAD2Gw2MVnq74Y+WQ4P8Nq3bx8/+tGP+OpXv8q0adO4VnBNS9I6JEkiNjaWtWvXEh8fLx5ub28vZWVlfPDBB2zfvp3KykqWLl3KP/3TP/HII49w/fXXizL6+vo4ffo00dHRLF26VJxXVZUDBw6Qnp7O3/3d35GXl0dVVRVbt24VbktWq5VVq1bxzDPPcNdddxkc/61WK3PmzEGWZW644QbDXhGNjY1kZGSIIJHg9hQUFLB69Wqys7PFeV3vu3nzZrZv3051dTU33ngjTz31FIWFheOGhAcPeqfTafBSgMB+DLW1tWzdupXjx4/jdDpRFIW77rqL1atXk5WVxdy5c5k3b57om+7ubqqrq0lKShLn9SjC/fv3k56eLnTckiQRFxdHeno6kZGRTJ06VegYdZVJTU0NsbGxhrqGh4dTUFCAxWIRftE6kXZ0dBAWFmYIJw9uY21trZCKZVlm6tSpxMTEoKqqaKP+nLKzs4mNjRXSro6uri4RcBLcx4qiMHfuXOFCeccddzBr1iyxaVN7ezsnT54UBP3II49QXFxs8AeHwEQ+fFtTGPKI0QlUX4E0NzcbSDouLk6064YbbjC4XlZVVdHW1sbDDz/MmjVrhMePPunb7XYmT57MpEmTxHNob2+nrq6OW265hSeeeMLQZl1//eCDD/Lwww8LyR4QbrDLly/nZz/7GatWrRJ909vby6FDh+jt7WXRokX8+te/JjMzE7/fT0VFBQMDA2iaJtz/4uPjmTx5Mrm5uaL83t5eent7mTlz5oi+Gm/leCXjmpakg2Eymbjpppt48cUXef311zlw4IBwd0tKSqKwsJDly5ezYMECMjMzUVWViIgIpk+fzrFjxzCZTMyePZubb74Zi8XCH/7wB44cOUJiYiILFixg2bJlZGRksHTpUt5//30hnWVmZjJv3jyxP8TJkyfJyckRUkZSUhJFRUVIUmD3up///Ods2rSJvr4+Zs+ezVe+8hWys7NHhIJHRUWxatUqoqOj+b//+z8+/vhj2tra8Hq9pKSkMGPGDG699VaWLFnC5MmTDbrxC9lAR1EUUlNT+cIXviCuXbNmDS+88AKHDh3C5XKRmZnJqlWruPPOOykoKBBeKj/+8Y/ZtGkTp06dwmazMXfuXFauXInP52PDhg1UVlaSlJTEkiVLyM7O5vXXXxdEmZmZSX5+PrIsU1JSwt///d+Tk5NDVVUV0dHRFBcXk5GRIfSWgNA7S5LEnDlz+Nd//Vc2b97MmTNnyMzM5Etf+pLwjAiGbvT8whe+AAQIdunSpSiKgt1up7CwkKSkJPGcpkyZgsViYfbs2TzyyCNkZ2dz6NAhzp49S1dXlwhp1vsvIyODiRMnCkk6KyuLn//853zwwQciHDw+Pp6SkhJuuOEG8vPzxccFUlJSxN4xMTExLFmyZET93W43c+fOJTMzE03TWLRoETk5OfT39zNz5kxycnKEjj0nJ4ewsDCWLVvGM888w/vvv09bWxuTJk1i1apVLFu2DFVVmTZtGlu3bqWjo4PU1FThM3/q1Ck2bdpEZ2cnubm5XHfddSxevFjsLfPOO+/Q399Pfn4+N910E/Pnz8disZCens77779PT08PWVlZLFmyhCVLlpCYmEhJSQnz588XxseYmBjmzp3LTTfdxLRp05Blmc7OTqZPn05iYiKappGSksKUKVPE+HjooYdISkqira2NKVOmcMcddxiIW0fwCuJqi0aUNC0wx/j80NcLt936K86csZGUGMsvf3knS69TCAsLfJFFh6qB2wN7d8Ojf/97Wlo8LFyUwx823ExkJChXMPV7vV7htqSH15rNZuLj40lKSjJIsrrVXV+exsbGipe2ubkZu90upLS4uDgURcHlctHe3i78Vm02G3FxcURFRSHLsggQ0V9ms9lMdna2WMr29vYKlUpMTAwTJkw4r3P+wMAAra2tdHZ24nK5UFWV8PBwYmJiSE1NHdXHejhGG7hut1voNXUpJDMzk4aGBrq7u/H7/dhsNlJSUkRotw6n00lnZye9vb2YTCZiY2NJSEhA0zQRHGO1WkXb9K+gQEAqnjBhgjC2DQwM0N7ejsPhQFEU4uPjsVqtNDU1iTpbrVYyMzMFGTqdTtra2nA4HNhsNvFch8Pn89Hd3W1wO4uJiSE5ORmv1ytCsCFge0hOThb16u/v58yZM2zYsIGNGzeKcaC7o1mtVm6//XZefvnlEcvyrq4u7Ha72JMkLi7OsL3qwMCA2IcFAgJGenr6CJ/+rq4uwxag0dHRxMfH09fXR1dXl3hukZGR4itDuttca2srTqeTiIgIJk6cKLYH6O3tFTsehoeHk5CQQFRUFH19fbS1tYnArgkTJhAREYGqqvT19dHc3Cz2H0lOThYb+tvtdhGKbrPZRFCP7nHV29sr2qC/h8ErR5fLRVNT04jnoD9PvV5ut5vo6GixNcDVQsR+H/T0wf33Ps/Bg31kZcXz5w//hsgosAyanEalU8Puo2OtEi74Cywwtlblk3xN99Kgk2KwmmAshIWFMXHixFF3d8vIyDAs5XRYrdZRz+vQ9/4YC9HR0RfkHqfDZrORk5NDTk7OBecZjtEGdFhYGHl5eSPOB/vujoXw8PAxPz2mB6MEYzTJR4fNZhs1z/n6KDw8fNQ8w2EymUhMTBx15zSLxXLeekVERNDW1saRI0fIzc1l9erV7N69W5C02WwWe3kEQ5ICe4wE75o3HHow0XiIj48fVY1jtVrH3A1OluXzjrGx0sY6r7sZjuaFBAF9+FhbGphMpjHboMNqtZ73OURFRZ13f/QrAxfOc340xJAZ/BDiJbGjOsZkZVD/aNpVrQ8KIYSx0NTURFVVFf39/Zw+fVoE60iSREREBCtXrjRcH3oPQhgLqgTIyqBx1Jg2qiQ92pdZRkD/Sst5VxVy4LoxB+fnwm4ZwjUGXT0UExNDYmIip0+fprW1VXipREZGsnr1avLz8w35rpYleAiXG6N8NRxGcGvwJC5JQ+mXzpKjsPTwsXi+wamFJO0QrjLo43nBggV87WtfIy0tTfjrZmZmsmbNGn7wgx9ccxv9hHD5oUqDMqw2PKp46P/xddJDxTEap4trR/nK7fBipOEJIcEihKsYycnJ3H///ZSUlIgAp7S0NDIzMw06+avRoyCEyw9Be4NDQVUD/+vHmqaN/rXwMUsc5YOIwyGfRwAW0vE4gzM0eEO4WiHLsvjijd/vR1XVUb8hOdy7IzTmQwhEiEoEff9iKBBLG6RfGZAuRCc9CiQu/PuzoxYVGqMhXOUYvr3rhW6PGSLozzEGBVcNFUka+bFpTQUJE5oKaIHLpbFIGsYn6vEgSVJAvh90IwkhhGsJF0K2Iak5BB1Go+DQ5+rQAhTp9QXGicvt5PQpJ2ZLPZLkBsl/MRGHQ5KCxjASH0WPEqjNsIoaTqtog2WGhnEI1yJCBP0p4Sq0aRn3TJGRBg2Gqh8G+uFcSy9er0pK6gQKpodji5iC2QSaYMlLghz404LE91FUIcPjYy7LrUMIIYTPH4Lc04JxNTiJ6X7QGgGCdg7AwQPQ0ycjSRo5k5KRlcGo7cE2XoYAbhkVMxoWNDWgV/HLBJTfg512PtWJpA0R+KWqWEIIIYTPL3Tp9Eona00NbMPhckN9A/z/z3+As9+KyeTm+uvnoMhDc5AkSZdA0oNKbQ0Tmqbg12LpH9zcLXgWgKGgyOEYTZbWjZrBvxeLUP5Q/lD+qzf/xUA3rum/l+P+l5o/uC6jnff7occOR8rc/OFPWzlypAaf38NNK4uYOSMCxaxPNNolkjTg1wDNjMcTRsWJAZ54oh3oRja5kRnac1kV7nxGWh5y4RtKV6XA+eDfi0Uofyh/KP/Vm3+8vS6G9lwfTqHyZbn/pdd/OIzt8XlV2s5103auh7M1gU3MZham8O1v30xWNphN+oZ2gZtfsrpD1ST8Ppm2tgHefONjFKUPZCdSEEmPr+nX0CSQNGnwlzF+ZTRJPc/xeL+h/KH8ofxXfv4L5QPQJC3o+MrgDx26ulcl8Dk5GXkwwlrF7XYHpGSThy9+sYRvfGM5s2ZBVMRIlrwIkh4l4lACSdaQZD8mk4/oGB+y4gHZh6T5gq4PzCTyoBfISMlaDWq03lg16Hi89PGuD+UP5Q/lv3ryDydrY36fx4/JYg5Y3uRgkr4y6h9M0gFXu0G2xo8kg81mJSkxgcmTM5k3bzIziyaQmwPhNpBkBlUlQ3w7NkmP5VY3DJLmw2RWmF6Qyt//3Uqs1sCNkIbUGfqSYbzjEEIIIQQRW6H/Dkurrm4lNzclcDwsfSx98F8Ug/UeHpGth4ArJggPh5gYSEmGiCgwKUMEHSB2hC+1iUB5Y0aBD1lKR5K2rAGSH4vJSXy8i8VLIDJikKQZ6j+9iPGOhyOUP5Q/lP9znH+Q7AzXaxAfZ2bmzMD/knzl1V+v91iBfJIUqLciDf0vS0HXDm6Bp082puCMxoIkkBTDTqPBEVSqOrhBCD40yY8k92C2EPiKi3JpjWSM9FD+UP5Q/s9R/jFI2mw+h9WaEDiWrrz6j0fSeo4LDXYyAYOWUglZI6BjliT8fhVVxeBzqBcqdm5SwK+pSKoXRdaMs8Iojb3Q4+EI5Q/lD+X/HOaXRkmXQFVdhs/5XXH1l8ZKCL5AHXZBkM0viNw1/azYKEaBhLhoFEWiq9OOvceL1zs4KQSRdWD/U/C4oMfuRDFJhNvMKBc2MYQQQgghXAI+be/rTxvD63/+9oj5SJJBkWHqtFys4WYG3D6qTnfQeg483gCjaxpoasCo2j8A586Bw+HHYjKRnpaAJIW+tRJCCCFcKlSufiI+Hwa30hjrWDL+a+BU2QRf+MJC4uIVZM3HW5t2cvAQ2HvB5QqQtdsT+L+uDnbtrkD1Q2QUlJRMwTQs0jCEEEIIIYRLw5DhEDCboWCGhZUrZ9LdVcrZ6nZ+u/4DOroWsXRJFGkTA5L02Rp4860atm87jCXMRPakCIqLzYFw8BBCCCGES8L51+MjDW4X/jXuqwPG9vw/GTC8iVZQtlMAAAAASUVORK5CYII=",sb=[1e3,500,200,100,50,20,10,5,2,1],Lm="cash_sheet_denom_",ks=l=>Math.round(Number(l)||0).toLocaleString("en-US");function w5(l){const o={"০":"0","১":"1","২":"2","৩":"3","৪":"4","৫":"5","৬":"6","৭":"7","৮":"8","৯":"9"};return String(l||"").replace(/[০-৯]/g,u=>o[u]||u).replace(/[^0-9]/g,"")}const lb=l=>{try{const o=localStorage.getItem(`${Lm}${l}`);if(o){const u=JSON.parse(o);if(u&&typeof u=="object")return u}}catch{}return{1e3:"",500:"",200:"",100:"",50:"",20:"",10:"",5:"",2:"",1:"",coins:"",revenueStamp:"",pendingSlip:""}};function rb(l){if(l=Math.round(Math.abs(l)),l===0)return"Taka Zero Only";const o=["","One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen"],u=["","","Twenty","Thirty","Forty","Fifty","Sixty","Seventy","Eighty","Ninety"];function c(v){let S="";return v>=100&&(S+=o[Math.floor(v/100)]+" Hundred ",v%=100),v>=20&&(S+=u[Math.floor(v/10)]+" ",v%=10),v>0&&(S+=o[v]+" "),S.trim()}let d="";const A=Math.floor(l/1e7);l%=1e7;const f=Math.floor(l/1e5);l%=1e5;const x=Math.floor(l/1e3);l%=1e3;const h=l;return A>0&&(d+=c(A)+" Crore "),f>0&&(d+=c(f)+" Lakh "),x>0&&(d+=c(x)+" Thousand "),h>0&&(d+=c(h)),"Taka "+d.trim()+" Only"}const E5=l=>{if(!l)return"";const o=new Date(l+"T00:00:00");return["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][o.getDay()]},C5=l=>{if(!l)return"";const o=new Date(l+"T00:00:00"),u=["January","February","March","April","May","June","July","August","September","October","November","December"];return`${o.getDate()}-${u[o.getMonth()]}-${o.getFullYear()}`};function M5({selectedDate:l,setSelectedDate:o}){const[u,c]=p.useState(0),[d,A]=p.useState(0),[f,x]=p.useState(()=>lb(l)),[h,v]=p.useState({monir:0,sakib:0,mintu:0,alamgir:0,loanForms:0,memberWelfare:0}),[S,b]=p.useState(!1),[H,P]=p.useState(!1),[G,K]=p.useState(!0),[L,_]=p.useState(!1),[ue,C]=p.useState(!1),q=()=>{C(!0),window.setTimeout(()=>C(!1),900)},[k,V]=p.useState(()=>{try{const Z=localStorage.getItem("gobra_floating_pos_cashbook");if(Z)return JSON.parse(Z)}catch{}return null}),ce=p.useRef(null),E=p.useRef(null),se=p.useRef(!1),ie=p.useRef({x:0,y:0,elemX:0,elemY:0,w:50,h:50,hasMoved:!1}),ne=p.useRef(0),me=()=>{const Z=Date.now();Z-ne.current<250||(ne.current=Z,K(F=>!F))},pe=Z=>{var Re;if(Z.button!==0&&Z.pointerType==="mouse")return;const F=(Re=E.current)==null?void 0:Re.getBoundingClientRect();if(F){ie.current={x:Z.clientX,y:Z.clientY,elemX:F.left,elemY:F.top,w:F.width,h:F.height,hasMoved:!1},se.current=!0;try{Z.currentTarget.setPointerCapture(Z.pointerId)}catch{}}},j=Z=>{if(!se.current)return;const F=Z.clientX-ie.current.x,Re=Z.clientY-ie.current.y,Oe=Math.hypot(F,Re);if(!ie.current.hasMoved&&Oe>6&&(ie.current.hasMoved=!0),ie.current.hasMoved){const rt=Math.max(10,window.innerWidth-ie.current.w-6),At=Math.max(10,window.innerHeight-ie.current.h-6),ft=Math.max(6,Math.min(rt,ie.current.elemX+F)),tt=Math.max(6,Math.min(At,ie.current.elemY+Re));V({x:ft,y:tt})}},O=Z=>{var F;if(se.current){se.current=!1;try{Z.currentTarget.releasePointerCapture(Z.pointerId)}catch{}if(ie.current.hasMoved){const Re=(F=E.current)==null?void 0:F.getBoundingClientRect();if(Re){const Oe={x:Math.round(Re.left),y:Math.round(Re.top)};try{localStorage.setItem("gobra_floating_pos_cashbook",JSON.stringify(Oe))}catch{}}}else me()}},R=Z=>{if(ie.current.hasMoved){Z.stopPropagation(),ie.current.hasMoved=!1;return}me()},I=()=>{const Z=t5(l);c(Z.reportCashInHand),A(Z.reportBankBalance);const F=Ie(l);_(F);const Re=ln(),Oe=ha("disburse").map(fe=>fe.name.toLowerCase().trim()),rt=Re.filter(fe=>fe.txDate===l&&fe.type==="receive"),At=Re.filter(fe=>fe.txDate===l&&fe.type==="payment");let ft=0,tt=0,Le=0,lt=0,St=0,gt=0;for(const fe of rt){const Ee=fe.category.toLowerCase().trim(),Nt=Math.round(Number(fe.amount)||0);Ee.includes("monir")?ft+=Nt:Ee.includes("sakib")?tt+=Nt:Ee.includes("mintu")?Le+=Nt:Ee.includes("alamgir")?lt+=Nt:Ee.includes("loan form")||Ee.includes("sale")?St+=Nt:(Ee.includes("welfare")||Ee.includes("kallayan")||Ee.includes("member"))&&(gt+=Nt)}const yt=At.filter(fe=>{const Ee=fe.category.toLowerCase().trim();return Ee.includes("fund payment")||Ee.includes("fund transfer")||Ee.includes("fund")&&!Ee.includes("receive")?!1:Oe.includes(Ee)||!!(fe.subCategory&&fe.subCategory.trim().length>0)}),xe=yt.length,ke=xe*5,Fe=xe>0?ke:St;let Ot=0,rn=0;for(const fe of yt){const Ee=Number(fe.amount)||0;fe.category.toLowerCase().trim().includes("buni")?Ot+=Ee:rn+=Ee}const Zt=Math.round(rn*.01+Ot*.005),Dt=yt.length>0?Zt:gt;v({monir:ft,sakib:tt,mintu:Le,alamgir:lt,loanForms:Fe,memberWelfare:Dt})};p.useEffect(()=>{x(lb(l))},[l]),p.useEffect(()=>{I();const Z=()=>I(),F=()=>I();return window.addEventListener("tx-changed",Z),window.addEventListener("day-close-changed",F),()=>{window.removeEventListener("tx-changed",Z),window.removeEventListener("day-close-changed",F)}},[l]);const re=sb.reduce((Z,F)=>{const Re=parseInt(f[String(F)]||"0",10)||0;return Z+Re*F},0),ee=Math.round(Number(f.coins||0)),M=Math.round(Number(f.revenueStamp||0))*10,U=Math.round(Number(f.pendingSlip||0)),B=re+ee+M+U,ge=h.monir+h.sakib+h.mintu+h.alamgir+h.loanForms+h.memberWelfare,y=(Z,F)=>{if(L){q();return}const Re=w5(F);x(Oe=>{const rt={...Oe,[Z]:Re};try{localStorage.setItem(`${Lm}${l}`,JSON.stringify(rt))}catch{}return rt})},le=()=>{if(L){q();return}const Z={1e3:"",500:"",200:"",100:"",50:"",20:"",10:"",5:"",2:"",1:"",coins:"",revenueStamp:"",pendingSlip:""};x(Z);try{localStorage.setItem(`${Lm}${l}`,JSON.stringify(Z))}catch{}},te=()=>{window.print()},Y=async()=>{b(!0);try{const Z=(await xo(async()=>{const{default:Fe}=await import("./html2canvas.esm-QH1iLAAe.js");return{default:Fe}},[])).default,{jsPDF:F}=await xo(async()=>{const{jsPDF:Fe}=await import("./jspdf.es.min-CGB5Mts5.js").then(Ot=>Ot.j);return{jsPDF:Fe}},[]),Re=document.getElementById("cash-sheet-document");if(!Re)return;const Oe=await Z(Re,{scale:2,backgroundColor:"#ffffff"}),rt=Oe.toDataURL("image/jpeg",.95),At=new F("p","mm","a4"),ft=At.internal.pageSize.getWidth(),tt=At.internal.pageSize.getHeight(),Le=5,lt=ft-Le*2,St=tt-Le*2;let gt=lt,yt=Oe.height*gt/Oe.width;yt>St&&(yt=St,gt=Oe.width*yt/Oe.height);const xe=(ft-gt)/2,ke=(tt-yt)/2;At.addImage(rt,"JPEG",xe,ke,gt,yt),At.save(`Cash_Sheet_GOBRA_${l}.pdf`)}catch{window.print()}finally{b(!1)}},Se=(Z=!0)=>n.jsxs("div",{className:"cash-sheet-print-container w-full bg-white p-4 sm:p-6 print:p-0 text-slate-950 font-serif flex flex-col justify-between print:h-auto print:justify-start box-border",children:[n.jsxs("div",{className:"flex-1 flex flex-col justify-start",children:[n.jsxs("div",{className:"flex items-center justify-center gap-3 mb-1 print:mb-0.5",children:[n.jsx("img",{src:xp,alt:"BKF Logo",className:"h-14 sm:h-16 w-auto object-contain print:h-14"}),n.jsxs("div",{className:"text-left",children:[n.jsx("h1",{className:"text-2xl sm:text-4xl print:text-3xl font-black font-serif text-slate-900 leading-tight tracking-wide sm:whitespace-nowrap",children:"Bandhu Kallyan Foundation"}),n.jsx("p",{className:"text-sm sm:text-base print:text-sm font-bold font-serif text-slate-800 tracking-wide mt-0.5",children:R5()})]})]}),n.jsx("div",{className:"flex justify-center my-1 print:my-0.5",children:n.jsx("img",{src:H5,alt:"Cash & Bank Information",className:"h-12 sm:h-16 print:h-16 w-auto object-contain"})}),n.jsx("div",{className:"flex justify-end mb-2 print:mb-1",children:n.jsx("div",{className:"border border-black px-4 py-0.5 print:py-0.5 text-xs sm:text-sm print:text-xs font-bold font-serif text-center w-48 sm:w-52",children:C5(l)})}),n.jsxs("div",{className:"print-gap-b mb-3 print:mb-1.5",children:[n.jsxs("div",{className:"mb-1 print:mb-0.5 flex items-center justify-between text-xs sm:text-sm print:text-xs font-bold text-slate-900",children:[n.jsx("span",{children:"A. Cash & Bank Information:"}),n.jsxs("span",{className:"pr-16 sm:pr-20 print:pr-16",children:["Day: ",n.jsx("span",{className:"font-normal",children:E5(l)})]})]}),n.jsx("table",{className:"w-full border-collapse border-spacing-0 text-xs sm:text-sm print:text-xs",children:n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{className:"border border-black px-3 py-1.5 sm:py-2 print:py-0.5 font-medium",children:"Closing Cash in Hand: TK (BDT)"}),n.jsx("td",{className:"w-48 sm:w-56 print:w-56 border border-black px-3 py-1.5 sm:py-2 print:py-0.5 text-right font-mono font-bold",children:ks(u)}),n.jsx("td",{className:"w-16 sm:w-20 print:w-16 border-0 border-transparent p-0 text-center align-middle text-transparent print:text-slate-900",children:"-"})]}),n.jsxs("tr",{children:[n.jsx("td",{className:"border border-black px-3 py-1.5 sm:py-2 print:py-0.5 font-medium",children:"Closing Cash at Bank: TK (BDT)"}),n.jsx("td",{className:"w-48 sm:w-56 print:w-56 border border-black px-3 py-1.5 sm:py-2 print:py-0.5 text-right font-mono font-bold",children:ks(d)}),n.jsx("td",{className:"w-16 sm:w-20 print:w-16 border-0 border-transparent p-0"})]})]})})]}),n.jsxs("div",{className:"print-gap-b mb-3 print:mb-1.5",children:[n.jsxs("div",{className:"mb-1 print:mb-0.5 flex items-center justify-between text-xs sm:text-sm print:text-xs font-bold text-slate-900",children:[n.jsx("span",{children:"B. Denominations of Cash / Notes :"}),Z&&n.jsx("button",{type:"button",disabled:L,onClick:le,className:`print:hidden rounded px-2 py-0.5 text-[11px] font-bold text-white transition ${L?"bg-slate-400 cursor-not-allowed opacity-50":"bg-slate-500 hover:bg-slate-600 cursor-pointer"}`,title:L?"দিন সমাপ্ত (Locked) — উপরের Working-Day বার থেকে Re-open করুন":"সকল নোট খালি করুন",children:"Reset"})]}),n.jsxs("table",{className:"fill-b w-full border-collapse border border-black text-xs sm:text-sm print:text-[11px]",children:[n.jsxs("thead",{children:[n.jsxs("tr",{className:"bg-slate-50 print:bg-transparent",children:[n.jsx("th",{colSpan:2,className:"border border-black px-2 py-1 print:py-0.5 text-center font-bold",children:"Particulars"}),n.jsx("th",{rowSpan:2,className:"w-28 sm:w-32 print:w-32 border border-black px-2 py-1 print:py-0.5 text-center font-bold",children:"TK (BDT)"}),n.jsx("th",{rowSpan:2,className:"w-16 sm:w-20 print:w-16 border border-black px-2 py-1 print:py-0.5 text-center font-bold",children:"Ps"})]}),n.jsxs("tr",{className:"bg-slate-50 print:bg-transparent",children:[n.jsx("th",{className:"border border-black px-2 py-0.5 print:py-0.5 text-center font-semibold",children:"Notes / Others"}),n.jsx("th",{className:"w-20 sm:w-24 print:w-24 border border-black px-2 py-0.5 print:py-0.5 text-center font-semibold",children:"Quantity"})]})]}),n.jsxs("tbody",{children:[sb.map(F=>{const Re=parseInt(f[String(F)]||"0",10)||0,Oe=Re*F;return n.jsxs("tr",{children:[n.jsx("td",{className:"border border-black px-2.5 py-0.5 sm:py-1 print:py-0.5 text-center font-mono font-bold",children:F}),n.jsx("td",{className:"border border-black px-1.5 py-0.5 print:py-0.5 text-center",children:Z?n.jsxs(n.Fragment,{children:[n.jsx("input",{type:"text",inputMode:"numeric",autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:!1,disabled:L,readOnly:L,value:f[String(F)]||"",onChange:rt=>y(String(F),rt.target.value),onFocus:rt=>{L||rt.target.select()},placeholder:"0",className:`print:hidden w-full text-center font-mono text-xs sm:text-sm font-bold py-0.5 rounded border transition ${L?"bg-slate-100 text-slate-500 border-slate-300 cursor-not-allowed opacity-70":"bg-yellow-50 focus:bg-amber-100 border-amber-300 focus:border-indigo-600 focus:outline-none cursor-text select-text"}`}),n.jsx("span",{className:"hidden print:inline font-mono font-bold",children:Re>0?Re:""})]}):n.jsx("span",{className:"font-mono font-bold",children:Re>0?Re:""})}),n.jsx("td",{className:"border border-black px-2.5 py-0.5 sm:py-1 print:py-0.5 text-right font-mono font-semibold",children:Oe>0?ks(Oe):"-"}),n.jsx("td",{className:"border border-black px-1.5 py-0.5 print:py-0.5 text-center font-mono text-slate-400",children:"-"})]},F)}),n.jsxs("tr",{children:[n.jsx("td",{className:"border border-black px-2.5 py-0.5 sm:py-1 print:py-0.5 text-center font-medium",children:"Coins (1+2+5) Taka"}),n.jsx("td",{className:"border border-black px-1.5 py-0.5 print:py-0.5 text-center",children:Z?n.jsxs(n.Fragment,{children:[n.jsx("input",{type:"text",inputMode:"numeric",autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:!1,disabled:L,readOnly:L,value:f.coins||"",onChange:F=>y("coins",F.target.value),onFocus:F=>{L||F.target.select()},placeholder:"0",className:`print:hidden w-full text-center font-mono text-xs sm:text-sm font-bold py-0.5 rounded border transition ${L?"bg-slate-100 text-slate-500 border-slate-300 cursor-not-allowed opacity-70":"bg-yellow-50 focus:bg-amber-100 border-amber-300 focus:border-indigo-600 focus:outline-none cursor-text select-text"}`}),n.jsx("span",{className:"hidden print:inline font-mono font-bold",children:f.coins||""})]}):n.jsx("span",{children:f.coins||""})}),n.jsx("td",{className:"border border-black px-2.5 py-0.5 sm:py-1 print:py-0.5 text-right font-mono font-semibold",children:ee>0?ks(ee):"-"}),n.jsx("td",{className:"border border-black px-1.5 py-0.5 print:py-0.5 text-center font-mono text-slate-400",children:"-"})]}),n.jsxs("tr",{children:[n.jsxs("td",{className:"border border-black px-2.5 py-0.5 sm:py-1 print:py-0.5 text-center font-medium",children:["Revenue Stamp",n.jsx("span",{className:"print:hidden ml-1 text-[9px] font-black text-indigo-600",children:"×১০"})]}),n.jsx("td",{className:"border border-black px-1.5 py-0.5 print:py-0.5 text-center",children:Z?n.jsxs(n.Fragment,{children:[n.jsx("input",{type:"text",inputMode:"numeric",autoComplete:"off",disabled:L,readOnly:L,value:f.revenueStamp||"",onChange:F=>y("revenueStamp",F.target.value),onFocus:F=>{L||F.target.select()},placeholder:"0",className:`print:hidden w-full text-center font-mono text-xs sm:text-sm font-bold py-0.5 rounded border transition ${L?"bg-slate-100 text-slate-500 border-slate-300 cursor-not-allowed opacity-70":"bg-yellow-50 focus:bg-amber-100 border-amber-300 focus:border-indigo-600 focus:outline-none cursor-text select-text"}`}),n.jsx("span",{className:"hidden print:inline font-mono font-bold",children:f.revenueStamp?f.revenueStamp:""})]}):n.jsx("span",{children:f.revenueStamp||""})}),n.jsx("td",{className:"border border-black px-2.5 py-0.5 sm:py-1 print:py-0.5 text-right font-mono font-semibold",children:M>0?ks(M):"-"}),n.jsx("td",{className:"border border-black px-1.5 py-0.5 print:py-0.5 text-center font-mono text-slate-400",children:"-"})]}),n.jsxs("tr",{children:[n.jsx("td",{className:"border border-black px-2.5 py-0.5 sm:py-1 print:py-0.5 text-center font-medium",children:"Pending Slip"}),n.jsx("td",{className:"border border-black px-1.5 py-0.5 print:py-0.5 text-center",children:Z?n.jsxs(n.Fragment,{children:[n.jsx("input",{type:"text",inputMode:"numeric",autoComplete:"off",disabled:L,readOnly:L,value:f.pendingSlip||"",onChange:F=>y("pendingSlip",F.target.value),onFocus:F=>{L||F.target.select()},placeholder:"0",className:`print:hidden w-full text-center font-mono text-xs sm:text-sm font-bold py-0.5 rounded border transition ${L?"bg-slate-100 text-slate-500 border-slate-300 cursor-not-allowed opacity-70":"bg-yellow-50 focus:bg-amber-100 border-amber-300 focus:border-indigo-600 focus:outline-none cursor-text select-text"}`}),n.jsx("span",{className:"hidden print:inline font-mono font-bold",children:f.pendingSlip?f.pendingSlip:""})]}):n.jsx("span",{children:f.pendingSlip||""})}),n.jsx("td",{className:"border border-black px-2.5 py-0.5 sm:py-1 print:py-0.5 text-right font-mono font-semibold",children:U>0?ks(U):"-"}),n.jsx("td",{className:"border border-black px-1.5 py-0.5 print:py-0.5 text-center font-mono text-slate-400",children:"-"})]}),n.jsxs("tr",{className:"font-bold bg-slate-50 print:bg-transparent",children:[n.jsx("td",{colSpan:2,className:"border border-black px-2.5 py-1 print:py-0.5 text-right font-bold",children:"Total :"}),n.jsx("td",{className:"border border-black px-2.5 py-1 print:py-0.5 text-right font-mono font-bold",children:B>0?ks(B):"-"}),n.jsx("td",{className:"border-0 border-transparent px-1.5 py-1 print:py-0.5 text-center font-mono text-transparent"})]})]})]}),n.jsxs("div",{className:"mt-1 print:mt-0.5 text-xs print:text-[10.5px] font-normal text-slate-800",children:[n.jsx("span",{className:"font-bold",children:"In Word:"})," ",rb(B)]})]}),n.jsxs("div",{className:"mb-2 print:mb-1",children:[n.jsx("div",{className:"mb-1 print:mb-0.5 text-xs sm:text-sm print:text-xs font-bold text-slate-900",children:"C. Credit Officer & Others Cash Received Information."}),n.jsxs("table",{className:"fill-c w-full border-collapse border border-black text-xs sm:text-sm print:text-[11px]",children:[n.jsx("thead",{children:n.jsxs("tr",{className:"bg-slate-50 print:bg-transparent",children:[n.jsx("th",{className:"w-10 sm:w-12 print:w-12 border border-black px-2 py-1 print:py-0.5 text-center font-bold",children:"S.L"}),n.jsx("th",{className:"border border-black px-2.5 py-1 print:py-0.5 text-left font-bold",children:"Employee Name"}),n.jsx("th",{className:"w-16 sm:w-20 print:w-20 border border-black px-2 py-1 print:py-0.5 text-center font-bold",children:"PIN"}),n.jsx("th",{className:"w-28 sm:w-32 print:w-32 border border-black px-2 py-1 print:py-0.5 text-center font-bold",children:"TK (BDT)"}),n.jsx("th",{className:"w-28 sm:w-36 print:w-36 border border-black px-2 py-1 print:py-0.5 text-center font-bold",children:"Employee Signature"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{className:"border border-black px-2 py-1 print:py-0.5 text-center font-mono",children:"1"}),n.jsx("td",{className:"border border-black px-2.5 py-1 print:py-0.5 font-medium",children:"Md Monirul Islam"}),n.jsx("td",{className:"border border-black px-2 py-1 print:py-0.5 text-center font-mono",children:"621"}),n.jsx("td",{className:"border border-black px-2.5 py-1 print:py-0.5 text-right font-mono font-bold",children:h.monir>0?String(h.monir):"-"}),n.jsx("td",{className:"border border-black px-2 py-1 print:py-0.5"})]}),n.jsxs("tr",{children:[n.jsx("td",{className:"border border-black px-2 py-1 print:py-0.5 text-center font-mono",children:"2"}),n.jsx("td",{className:"border border-black px-2.5 py-1 print:py-0.5 font-medium",children:"Ezaz Sakib"}),n.jsx("td",{className:"border border-black px-2 py-1 print:py-0.5 text-center font-mono",children:"1086"}),n.jsx("td",{className:"border border-black px-2.5 py-1 print:py-0.5 text-right font-mono font-bold",children:h.sakib>0?String(h.sakib):"-"}),n.jsx("td",{className:"border border-black px-2 py-1 print:py-0.5"})]}),n.jsxs("tr",{children:[n.jsx("td",{className:"border border-black px-2 py-1 print:py-0.5 text-center font-mono",children:"3"}),n.jsx("td",{className:"border border-black px-2.5 py-1 print:py-0.5 font-medium",children:"Md:Mintu Moholdar"}),n.jsx("td",{className:"border border-black px-2 py-1 print:py-0.5 text-center font-mono",children:"1189"}),n.jsx("td",{className:"border border-black px-2.5 py-1 print:py-0.5 text-right font-mono font-bold",children:h.mintu>0?String(h.mintu):"-"}),n.jsx("td",{className:"border border-black px-2 py-1 print:py-0.5"})]}),n.jsxs("tr",{children:[n.jsx("td",{className:"border border-black px-2 py-1 print:py-0.5 text-center font-mono",children:"4"}),n.jsx("td",{className:"border border-black px-2.5 py-1 print:py-0.5 font-medium",children:"Md Alamgir Hossain"}),n.jsx("td",{className:"border border-black px-2 py-1 print:py-0.5 text-center font-mono",children:"1224"}),n.jsx("td",{className:"border border-black px-2.5 py-1 print:py-0.5 text-right font-mono font-bold",children:h.alamgir>0?String(h.alamgir):"-"}),n.jsx("td",{className:"border border-black px-2 py-1 print:py-0.5"})]}),n.jsxs("tr",{children:[n.jsx("td",{className:"border border-black px-2 py-1 print:py-0.5 text-center font-mono",children:"5"}),n.jsx("td",{className:"border border-black px-2.5 py-1 print:py-0.5 font-medium",children:"Sales of Loan Forms"}),n.jsx("td",{className:"border border-black px-2 py-1 print:py-0.5 text-center font-mono"}),n.jsx("td",{className:"border border-black px-2.5 py-1 print:py-0.5 text-right font-mono font-bold",children:h.loanForms>0?String(h.loanForms):"-"}),n.jsx("td",{className:"border border-black px-2 py-1 print:py-0.5"})]}),n.jsxs("tr",{children:[n.jsx("td",{className:"border border-black px-2 py-1 print:py-0.5 text-center font-mono",children:"6"}),n.jsx("td",{className:"border border-black px-2.5 py-1 print:py-0.5 font-medium",children:"Member Welfare Fund"}),n.jsx("td",{className:"border border-black px-2 py-1 print:py-0.5 text-center font-mono"}),n.jsx("td",{className:"border border-black px-2.5 py-1 print:py-0.5 text-right font-mono font-bold",children:h.memberWelfare>0?String(h.memberWelfare):"-"}),n.jsx("td",{className:"border border-black px-2 py-1 print:py-0.5"})]}),n.jsxs("tr",{className:"font-bold bg-slate-50 print:bg-transparent",children:[n.jsx("td",{colSpan:3,className:"border border-black px-2.5 py-1.5 print:py-0.5 text-right font-bold",children:"Total :"}),n.jsx("td",{className:"border border-black px-2.5 py-1.5 print:py-0.5 text-right font-mono font-bold",children:ge>0?ks(ge):"-"}),n.jsx("td",{className:"border border-black px-2.5 py-1.5 print:py-0.5"})]})]})]}),n.jsxs("div",{className:"mt-1 print:mt-0.5 text-xs print:text-[10.5px] font-normal text-slate-800",children:[n.jsx("span",{className:"font-bold",children:"In Word:"})," ",rb(ge)]})]})]}),n.jsxs("div",{className:"signatures-block mt-6 sm:mt-8 print:mt-3 pt-3 print:pt-2 pb-1 grid grid-cols-2 px-16 print:px-14 text-xs sm:text-sm print:text-xs font-bold font-serif",children:[n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"h-10 sm:h-12 print:h-8"}),n.jsx("div",{className:"w-32 sm:w-36 border-t border-black pt-1",children:"Accountant"})]}),n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"h-10 sm:h-12 print:h-8"}),n.jsx("div",{className:"w-32 sm:w-36 ml-auto border-t border-black pt-1",children:"Manager"})]})]})]}),ye=B-u;return n.jsxs("div",{className:"space-y-4",children:[n.jsx("style",{children:`
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
      `}),n.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-white p-4 shadow-sm border border-slate-200 print:hidden",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("label",{className:"text-xs font-bold text-slate-700",children:"Date:"}),n.jsx("div",{className:"w-44",children:n.jsx(hn,{value:l,onChange:Z=>o(Z),className:"px-3 py-1.5 text-xs sm:text-sm"})}),L&&n.jsx("span",{className:`shrink-0 rounded-lg border border-rose-300 bg-rose-100 px-2 py-1 text-[10px] font-black text-rose-700 ${ue?"lock-pulse":""}`,title:"দিন সমাপ্ত (Day Closed) — হিসাব লক করা আছে",children:"🔒 Day Closed"})]}),n.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[n.jsx("button",{type:"button",onClick:()=>P(!0),className:"rounded-lg bg-blue-600 px-3.5 py-1.5 text-xs font-bold text-white shadow hover:bg-blue-700",children:"👁 PDF View"}),n.jsx("button",{type:"button",onClick:Y,disabled:S,className:"rounded-lg bg-emerald-600 px-3.5 py-1.5 text-xs font-bold text-white shadow hover:bg-emerald-700 disabled:opacity-50",children:S?"Generating...":"⬇ Download PDF"}),n.jsx("button",{type:"button",onClick:te,className:"rounded-lg bg-slate-900 px-4 py-1.5 text-xs font-bold text-white shadow hover:bg-slate-800",children:"🖨 Print"})]})]}),!L&&pt(l).blocked&&n.jsx("div",{className:"rounded-2xl border border-rose-400 bg-rose-50 p-3.5 text-xs sm:text-sm font-bold text-rose-950 shadow-xs flex items-center justify-between print:hidden",children:n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-base",children:"🚫"}),n.jsx("span",{children:pt(l).reason})]})}),n.jsx("div",{id:"cash-sheet-document",ref:ce,className:"w-full bg-white rounded-2xl shadow-sm border border-slate-300 overflow-hidden print:border-none print:shadow-none print:rounded-none print:m-0 print:p-0",children:Se(!0)}),typeof document<"u"&&fc.createPortal(n.jsx("div",{ref:E,onPointerDown:pe,onPointerMove:j,onPointerUp:O,onPointerCancel:O,onClick:R,style:k?{transform:`translate3d(${k.x}px, ${k.y}px, 0)`,left:0,top:0,right:"auto",bottom:"auto",touchAction:"none"}:{right:"16px",bottom:"75px",touchAction:"none"},className:"fixed z-40 print:hidden select-none drop-shadow-2xl cursor-grab active:cursor-grabbing touch-none",children:G?n.jsxs("div",{onClick:R,className:`relative flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full shadow-2xl border backdrop-blur-md cursor-grab active:cursor-grabbing touch-none select-none ${ye===0?"bg-slate-900/95 border-emerald-500/80 text-emerald-300 ring-2 ring-emerald-500/30":"bg-slate-900/95 border-rose-500/80 text-rose-300 ring-2 ring-rose-500/30"}`,title:"পার্থক্য ট্র্যাকার (টেনে যেকোনো দিকে সরানো যাবে / ট্যাপ করলে খুলবে)",children:[n.jsx("span",{className:"text-lg sm:text-xl leading-none select-none pointer-events-none",children:"⚖️"}),n.jsx("span",{className:`absolute -top-1 -right-1 flex h-4 min-w-[16px] sm:h-4.5 sm:min-w-[18px] items-center justify-center rounded-full px-1 text-[9px] font-mono font-black shadow pointer-events-none ${ye===0?"bg-emerald-400 text-slate-950":"bg-rose-500 text-white"}`,children:ye===0?"0":ye>0?`+${Ae(ye)}`:`-${Ae(Math.abs(ye))}`})]}):n.jsxs("div",{className:`rounded-xl px-2.5 py-1.5 shadow-2xl border backdrop-blur-md w-auto min-w-[105px] max-w-[145px] touch-none select-none ${ye===0?"bg-slate-900/95 border-emerald-500/80 text-white ring-2 ring-emerald-500/30":"bg-slate-900/95 border-rose-500/80 text-white ring-2 ring-rose-500/30"}`,title:"টেনে যেকোনো জায়গায় সরানো যাবে",children:[n.jsxs("div",{onClick:R,className:"flex items-center justify-between gap-1 pb-1 border-b border-slate-800 text-[10px] cursor-grab active:cursor-grabbing",children:[n.jsxs("span",{className:"flex items-center gap-1 font-bold text-amber-400",children:[n.jsx("span",{className:"text-slate-400 text-[10px]",children:"⠿"}),n.jsx("span",{children:"⚖️ ডিফারেন্স"})]}),n.jsx("span",{onPointerDown:Z=>Z.stopPropagation(),onPointerUp:Z=>{Z.stopPropagation(),K(!0)},onClick:Z=>{Z.stopPropagation(),K(!0)},className:"text-[10px] text-slate-400 hover:text-white cursor-pointer font-bold px-1 rounded hover:bg-slate-800",title:"কোলাপ্স করুন",children:"✕"})]}),n.jsx("div",{onClick:R,className:"text-center py-1 cursor-grab active:cursor-grabbing",children:n.jsx("div",{className:`font-mono font-black text-sm sm:text-base leading-tight tracking-tight ${ye===0?"text-emerald-400":"text-rose-400"}`,children:ye===0?"0":ye>0?`+${Ae(ye)}`:`-${Ae(Math.abs(ye))}`})})]})}),document.body),H&&n.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-2 sm:p-4",children:n.jsxs("div",{className:"flex h-[94vh] w-full max-w-4xl flex-col rounded-2xl bg-white shadow-2xl overflow-hidden",children:[n.jsxs("div",{className:"flex items-center justify-between border-b bg-slate-900 px-5 py-3 text-white",children:[n.jsx("h3",{className:"font-bold text-sm sm:text-base",children:"PDF View - Cash & Bank Information"}),n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("button",{type:"button",onClick:Y,className:"rounded bg-emerald-600 px-3 py-1 text-xs font-bold text-white",children:"Download"}),n.jsx("button",{type:"button",onClick:te,className:"rounded bg-blue-600 px-3 py-1 text-xs font-bold text-white",children:"Print"}),n.jsx("button",{type:"button",onClick:()=>P(!1),className:"text-2xl text-slate-300 hover:text-white",children:"×"})]})]}),n.jsx("div",{className:"flex-1 bg-slate-200 p-3 sm:p-6 overflow-auto flex justify-center",children:n.jsx("div",{className:"w-full max-w-[820px] shadow-2xl rounded border bg-white",children:Se(!1)})})]})})]})}const Om="gobra_check_entries",jm="gobra_check_entries_backup";function ob(l){try{const o=localStorage.getItem(l);if(o===null)return{ok:!1,list:[]};const u=JSON.parse(o);return Array.isArray(u)?{ok:!0,list:u.filter(c=>c&&typeof c=="object")}:{ok:!1,list:[]}}catch{return{ok:!1,list:[]}}}function as(){const l=ob(Om);if(l.ok)return l.list;const o=ob(jm);if(o.ok&&o.list.length>0){try{localStorage.setItem(Om,JSON.stringify(o.list))}catch{}return console.warn(`[checkStore] মূল তালিকা পাওয়া যায়নি — ব্যাকআপ থেকে ${o.list.length}টি এন্ট্রি ফিরিয়ে আনা হয়েছে।`),o.list}return[]}function io(l,o=[]){const u=as(),c=new Set(o.map(x=>String(x))),d=new Set(l.map(x=>String(x==null?void 0:x.id))),A=u.filter(x=>x&&x.id!==void 0&&x.id!==null&&!d.has(String(x.id))&&!c.has(String(x.id))),f=A.length>0?[...l,...A]:l;A.length>0&&console.warn(`[checkStore] ${A.length}টি এন্ট্রি নতুন তালিকায় ছিল না — হারিয়ে না যায় বলে ফিরিয়ে আনা হয়েছে।`);try{localStorage.setItem(Om,JSON.stringify(f)),localStorage.setItem(jm,JSON.stringify(f))}catch(x){if(console.error("[checkStore] সেভ করা যায়নি (স্টোরেজ সমস্যা)",x),u.length>0)try{localStorage.setItem(jm,JSON.stringify(u))}catch{}}try{const x=new Map;for(const h of u)h&&h.id!==void 0&&h.id!==null&&x.set(String(h.id),JSON.stringify(h));for(const h of f){if(!h||h.id===void 0||h.id===null)continue;const v=String(h.id);x.get(v)!==JSON.stringify(h)&&ct({type:"check",payload:h})}for(const h of c)ct({type:"check_del",payload:h})}catch(x){console.warn("[checkStore] ক্লাউড কিউতে যোগ করা যায়নি",x)}window.dispatchEvent(new CustomEvent("check-changed",{detail:{count:f.length,restored:A.length}}))}let ib=0;const cb=()=>(ib+=1,Date.now()*1e3+ib),hp=(l,o)=>String((l==null?void 0:l.bankName)||"").trim().toLowerCase()===String((o==null?void 0:o.bankName)||"").trim().toLowerCase()&&String((l==null?void 0:l.checkNo)||"").trim().toLowerCase()===String((o==null?void 0:o.checkNo)||"").trim().toLowerCase()&&String((l==null?void 0:l.checkDate)||"")===String((o==null?void 0:o.checkDate)||"");function k5(l,o,u){const c=Number(l)||cb(),d=o.find(A=>Number(A.id)===c);return d?hp(d,u)?c:cb():c}function U5(l){const o=as(),u={...l,createdAt:new Date().toISOString()},c={...u,id:k5(l.id,o,u)},A=o.findIndex(f=>Number(f.id)===Number(c.id))>=0?o.map(f=>Number(f.id)===Number(c.id)?c:f):[c,...o];return io(A),c}function im(l){const o=as(),u=Number(l==null?void 0:l.id);if(Number.isFinite(u)){const d=o.findIndex(A=>Number(A.id)===u);if(d>=0)return io(o.map((A,f)=>f===d?l:A)),l}const c=o.findIndex(d=>hp(d,l));if(c>=0){const d={...l,id:o[c].id};return io(o.map((A,f)=>f===c?d:A)),d}return io([l,...o]),l}function bp(l){const o=as().filter(u=>String(u.id)!==String(l));io(o,[l])}const D5=["9001"];function T5(){const l=c=>String(c??"").replace(/\s+/g,"").toUpperCase(),o=new Set(D5.map(l)),u=as().filter(c=>o.has(l(c.memberCode)));if(!u.length)return 0;for(const c of u)bp(c.id);return u.length}function G5(){return[...as()].sort((l,o)=>l.checkDate===o.checkDate?Number(o.id||0)-Number(l.id||0):l.checkDate<o.checkDate?1:-1)}function K5(l,o,u){const c=String(l||"").trim().toLowerCase(),d=String(o||"").trim().toLowerCase();return!c||!d?!1:as().some(A=>Number(A.id)!==Number(u)&&String(A.bankName||"").trim().toLowerCase()===c&&String(A.checkNo||"").trim().toLowerCase()===d)}const P5=[{en:"Sonali Bank",bn:"সোনালী ব্যাংক"},{en:"Janata Bank",bn:"জনতা ব্যাংক"},{en:"Agrani Bank",bn:"অগ্রণী ব্যাংক"},{en:"Rupali Bank",bn:"রূপালী ব্যাংক"},{en:"BASIC Bank",bn:"বেসিক ব্যাংক"},{en:"IFIC Bank",bn:"আইএফআইসি ব্যাংক"},{en:"BRAC Bank",bn:"ব্র্যাক ব্যাংক"},{en:"Dutch-Bangla Bank",bn:"ডাচ-বাংলা ব্যাংক"},{en:"Islami Bank",bn:"ইসলামী ব্যাংক"},{en:"City Bank",bn:"সিটি ব্যাংক"},{en:"Pubali Bank",bn:"পূবালী ব্যাংক"},{en:"Uttara Bank",bn:"উত্তরা ব্যাংক"},{en:"Eastern Bank",bn:"ইস্টার্ন ব্যাংক"},{en:"Prime Bank",bn:"প্রাইম ব্যাংক"},{en:"Southeast Bank",bn:"সাউথইস্ট ব্যাংক"},{en:"Mercantile Bank",bn:"মার্কেন্টাইল ব্যাংক"},{en:"Trust Bank",bn:"ট্রাস্ট ব্যাংক"},{en:"One Bank",bn:"ওয়ান ব্যাংক"},{en:"Bank Asia",bn:"ব্যাংক এশিয়া"},{en:"Dhaka Bank",bn:"ঢাকা ব্যাংক"},{en:"NCC Bank",bn:"এনসিসি ব্যাংক"},{en:"Mutual Trust Bank",bn:"মিউচুয়াল ট্রাস্ট ব্যাংক"},{en:"National Bank",bn:"ন্যাশনাল ব্যাংক"},{en:"Social Islami Bank",bn:"সোশ্যাল ইসলামী ব্যাংক"},{en:"First Security Islami Bank",bn:"ফার্স্ট সিকিউরিটি ইসলামী ব্যাংক"},{en:"Union Bank",bn:"ইউনিয়ন ব্যাংক"},{en:"Global Islami Bank",bn:"গ্লোবাল ইসলামী ব্যাংক"},{en:"Midland Bank",bn:"মিডল্যান্ড ব্যাংক"},{en:"Shimanto Bank",bn:"শিমান্ত ব্যাংক"},{en:"NRB Bank",bn:"এনআরবি ব্যাংক"},{en:"Meghna Bank",bn:"মেঘনা ব্যাংক"},{en:"Modhumoti Bank",bn:"মধুমতি ব্যাংক"},{en:"Padma Bank",bn:"পদ্মা ব্যাংক"},{en:"Standard Bank",bn:"স্ট্যান্ডার্ড ব্যাংক"},{en:"United Commercial Bank",bn:"ইউনাইটেড কমার্শিয়াল ব্যাংক"},{en:"Bangladesh Krishi Bank",bn:"বাংলাদেশ কৃষি ব্যাংক"},{en:"Rajshahi Krishi Unnayan Bank",bn:"রাজশাহী কৃষি উন্নয়ন ব্যাংক"},{en:"Karmasangsthan Bank",bn:"কর্মসংস্থান ব্যাংক"},{en:"Probashi Kallyan Bank",bn:"প্রবাসী কল্যাণ ব্যাংক"},{en:"Ansar VDP Unnayan Bank",bn:"আনসার ভিডিপি উন্নয়ন ব্যাংক"},{en:"Community Bank",bn:"কমিউনিটি ব্যাংক"},{en:"Habib Bank",bn:"হাবিব ব্যাংক"},{en:"HSBC",bn:"এইচএসবিসি ব্যাংক"},{en:"State Bank of India",bn:"স্টেট ব্যাংক অফ ইন্ডিয়া"},{en:"Citibank N.A.",bn:"সিটিব্যাংক"},{en:"Others",bn:"অন্যান্য"}];function _5(l,o=[],u=12){const c=String(l||"").trim().toLowerCase(),d=new Set,A=[],f=x=>{const h=x.en.toLowerCase();d.has(h)||(d.add(h),A.push(x))};for(const x of P5)(!c||x.en.toLowerCase().includes(c)||x.bn.includes(l.trim())||x.bn.toLowerCase().includes(c))&&f(x);for(const x of o){const h=String(x||"").trim();if(!h)continue;const v=h.toLowerCase();d.has(v)||c&&!v.includes(c)&&!h.includes(l.trim())||(d.add(v),A.push({en:h,bn:h}))}return A.slice(0,u)}function ub({value:l,onChange:o,placeholder:u,className:c="",extras:d=[]}){const[A,f]=p.useState(!1),[x,h]=p.useState(0),v=p.useRef(null),S=p.useMemo(()=>_5(l,d),[l,d]),b=(P,G)=>{o(G==="bn"?P.bn:P.en),f(!1)},H=P=>{P.key==="ArrowDown"?(P.preventDefault(),f(!0),h(G=>Math.min(G+1,Math.max(S.length-1,0)))):P.key==="ArrowUp"?(P.preventDefault(),h(G=>Math.max(G-1,0))):P.key==="Enter"?A&&S[x]&&(P.preventDefault(),b(S[x],"en")):P.key==="Escape"&&f(!1)};return n.jsxs("div",{className:"relative",ref:v,children:[n.jsx("input",{value:l,onChange:P=>{o(P.target.value),f(!0),h(0)},onFocus:()=>f(!0),onKeyDown:H,placeholder:u,className:c,autoComplete:"off",autoCorrect:"off",spellCheck:!1}),A&&n.jsxs("div",{className:"absolute left-0 right-0 top-full z-30 mt-1 max-h-64 overflow-auto rounded-xl border-2 border-emerald-300 bg-white shadow-2xl",children:[n.jsxs("div",{className:"sticky top-0 flex items-center justify-between border-b border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[10px] font-bold text-emerald-800",children:[n.jsx("span",{children:"🌐 বাংলা ও English — যেটা দরকার সেটায় ট্যাপ করুন"}),n.jsx("span",{className:"font-mono",children:S.length})]}),S.length===0?n.jsx("div",{className:"px-3 py-2.5 text-xs font-semibold text-slate-500",children:"নতুন নাম — যেভাবে লিখেছেন সেভেই থাকবে ✓"}):S.map((P,G)=>n.jsxs("div",{className:`flex items-stretch gap-1 border-b border-slate-100 px-1.5 py-1 last:border-0 ${G===x?"bg-emerald-50":"bg-white"}`,children:[n.jsx("button",{type:"button",onMouseDown:K=>K.preventDefault(),onClick:()=>b(P,"en"),className:"flex-1 rounded-lg px-2 py-1 text-left text-[13px] font-bold text-slate-800 transition hover:bg-blue-100 hover:text-blue-900",children:P.en}),P.bn!==P.en&&n.jsx("button",{type:"button",onMouseDown:K=>K.preventDefault(),onClick:()=>b(P,"bn"),className:"flex-1 rounded-lg px-2 py-1 text-right text-[13px] font-bold text-emerald-800 transition hover:bg-emerald-100",children:P.bn})]},`${P.en}-${G}`))]})]})}function Z5(l){const o=[];let u="",c=!1;for(let d=0;d<l.length;d++){const A=l[d];A==='"'?c&&l[d+1]==='"'?(u+='"',d++):c=!c:A===","&&!c?(o.push(u),u=""):u+=A}return o.push(u),o}function db(l){const o=l.trim();return/^\d+$/.test(o)?String(parseInt(o,10)):o}function z5(l){const o=String(l||"").replace(/\r/g,"").split(`
`);let u=!1,c="",d="";const A=[],f=new Set,x=[],h=new Set;let v=0,S=0;for(const b of o){const H=b.trim();if(!H)continue;const P=Z5(H),G=(P[0]||"").trim(),K=/^samity\s*:\s*(.+)$/i.exec(G);if(K){u=!0;const L=K[1].trim(),_=L.indexOf(",");c=db(_>=0?L.slice(0,_):L),d=(_>=0?L.slice(_+1):"").trim().replace(/\s+/g," "),c&&!f.has(c)&&(A.push({code:c,name:d}),f.add(c));continue}if(/^\d+$/.test(G)){const L=(P[1]||"").trim().replace(/\s+/g," "),_=(P[2]||"").trim();if(/^name of member/i.test(L)||/^member id$/i.test(_))continue;if(!c||!L||!/^0*\d+$/.test(_)){S++;continue}v++;const ue=db(_);if(h.has(ue)){S++;continue}h.add(ue),x.push({memberCode:ue,memberName:L,centreCode:c,centreName:d});continue}S++}return u?{members:x,centres:A,memberRows:v,skipped:S}:null}async function F5(l){const o=(l.name||"").toLowerCase();if(o.endsWith(".xlsx")||o.endsWith(".xls")||o.endsWith(".xlsm")||o.endsWith(".xlsb")){const u=await xo(()=>import("./xlsx-CkFp8p6R.js"),[]),c=await l.arrayBuffer(),d=u.read(c,{type:"array"}),A=d.Sheets[d.SheetNames[0]];return u.utils.sheet_to_csv(A,{blankrows:!1})}return l.text()}function J5({open:l,onClose:o,onPick:u}){const[c,d]=p.useState(""),[A,f]=p.useState(50),x=p.useRef(null),[h,v]=p.useState(0),[S,b]=p.useState(!1),[H,P]=p.useState(!1),[G,K]=p.useState(null),L=p.useRef(null),[_,ue]=p.useState(!1),[C,q]=p.useState(!1),[k,V]=p.useState(!1),[ce,E]=p.useState(new Set),se=p.useMemo(()=>l?zn():[],[l,h]),ie=p.useMemo(()=>l?co():[],[l,h]),ne=p.useMemo(()=>{const R=M=>`${Ue(M.memberName)}|${Ue(M.centreCode)}`,I=new Map;for(const M of se)I.set(R(M),(I.get(R(M))||0)+1);const re=new Set;return{rows:se.filter(M=>(I.get(R(M))||0)>1?(re.add(R(M)),!0):!1),groups:re.size}},[se]);p.useEffect(()=>{if(!G||!G.ok)return;const R=window.setTimeout(()=>K(null),12e3);return()=>window.clearTimeout(R)},[G]);const me=R=>{confirm(`🗑️ মেম্বার কোড ${R.memberCode} — “${R.memberName||"—"}” স্থায়ীভাবে মুছে ফেলবেন?

(এই অ্যাপের সব ডিভাইস ও ক্লাউড থেকে মুছে যাবে; ভুল হলে ডাটাবেজ আপডেটের সময় সিড থেকে ফিরতে পারে)`)&&Bh(R.memberCode)};p.useEffect(()=>{if(!l)return;const R=()=>v(I=>I+1);return window.addEventListener("member-db-changed",R),()=>window.removeEventListener("member-db-changed",R)},[l]);const pe=async R=>{const I=R&&R[0]?R[0]:null;if(I){b(!0),K(null);try{if((I.name||"").toLowerCase().endsWith(".pdf"))try{const[{pdfToLines:ge},{parseRecoveryPdfLines:y}]=await Promise.all([xo(()=>import("./pdfReportLoader-B5CG1zKQ.js"),[]),xo(()=>import("./memberReportPdf-BqJ-4pl1.js"),[])]),le=await I.arrayBuffer(),te=await ge(le),Y=y(te);if(!Y||!Y.members.length){K({ok:!1,text:"PDF-টা পড়া গেছে, কিন্তু মেম্বার-সারির ছক মেলেনি — MIS-এর মাসিক 'Savings & Loan Collection Report' (GenerateOrganizerRecoveryReport)-এর PDF দিন।"});return}const Se=qi(Y.members);nm({fileName:I.name,added:Se.added,updated:Se.updated,skipped:Y.skipped,total:Se.total,centres:Y.centres.length,format:"report",addedCodes:Se.addedCodes}),K({ok:!0,text:`✓ PDF রিপোর্ট পড়ে গেছে — ${Y.centres.length.toLocaleString("en-IN")}টি সেন্টার থেকে নতুন ${Se.added.toLocaleString("en-IN")} জন বসেছে, ${Se.updated.toLocaleString("en-IN")} জনের নাম/সেন্টার ঝালাই হয়েছে (বাদ/ডুপ্লিকেট ${Y.skipped.toLocaleString("en-IN")})। মোট ${Se.total.toLocaleString("en-IN")} জন — ক্লাউডে সংরক্ষণ হচ্ছে…`}),v(ye=>ye+1);return}catch{K({ok:!1,text:"⚠️ PDF পড়তে সমস্যা হয়েছে — ফাইলটি নষ্ট/স্ক্যানড তো নয়, দেখে আবার দিন।"});return}const re=await F5(I),ee=z5(re);if(ee){if(!ee.members.length){K({ok:!1,text:"ফাইলটা স্যামিটি-রিপোর্টের মতো মনে হচ্ছে, কিন্তু কোনো মেম্বার-সারি পাওয়া যায়নি — ফাইলটি ঠিক আছে কি না দেখুন।"});return}const ge=qi(ee.members);nm({fileName:I.name,added:ge.added,updated:ge.updated,skipped:ee.skipped,total:ge.total,centres:ee.centres.length,format:"report",addedCodes:ge.addedCodes}),K({ok:!0,text:`✓ স্যামিটি-রিপোর্ট পড়ে গেছে — ${ee.centres.length.toLocaleString("en-IN")}টি সেন্টার থেকে নতুন ${ge.added.toLocaleString("en-IN")} জন বসেছে, ${ge.updated.toLocaleString("en-IN")} জনের নাম/সেন্টার ঝালাই হয়েছে (বাদ/ডুপ্লিকেট ${ee.skipped.toLocaleString("en-IN")})। মোট ${ge.total.toLocaleString("en-IN")} জন — ক্লাউডে সংরক্ষণ হচ্ছে…`}),v(y=>y+1);return}const{members:M,skipped:U}=Km(re);if(!M.length){K({ok:!1,text:"ফাইলে কোনো মেম্বার পাওয়া যায়নি। কলাম ঠিক আছে কি না দেখুন — Member Code, Member Name, Centre Code, Centre Name (হেডার না থাকলেও এই ক্রমেই পড়বে)। অথবা MIS-এর মাসিক স্যামিটি-রিপোর্ট সরাসরি দিন।"});return}const B=qi(M);nm({fileName:I.name,added:B.added,updated:B.updated,skipped:U,total:B.total,format:"csv",addedCodes:B.addedCodes}),K({ok:!0,text:`✓ ${B.total.toLocaleString("en-IN")} জন মেম্বার ডাটাবেজে বসে গেছে (নতুন ${B.added.toLocaleString("en-IN")}, আপডেট ${B.updated.toLocaleString("en-IN")}${U?`, বাদ পড়েছে ${U.toLocaleString("en-IN")}`:""})। ক্লাউডে সংরক্ষণ হচ্ছে…`}),v(ge=>ge+1)}catch(re){K({ok:!1,text:`ফাইল পড়া যায়নি: ${(re==null?void 0:re.message)||"অজানা ত্রুটি"}`})}finally{b(!1),L.current&&(L.current.value="")}}};p.useEffect(()=>{if(!l)return;d(""),f(200),E(new Set),V(!1),q(!1);const R=window.setTimeout(()=>{var I;return(I=x.current)==null?void 0:I.focus()},60);return()=>window.clearTimeout(R)},[l]),p.useEffect(()=>{if(!l)return;const R=I=>{I.key==="Escape"&&o()};return window.addEventListener("keydown",R),()=>window.removeEventListener("keydown",R)},[l,o]);const j=p.useMemo(()=>{const R=C?ne.rows:se,I=c.trim().toLowerCase();if(!I)return R;const re=Ue(c);return R.filter(ee=>!!(re&&Ue(ee.memberCode).includes(re)||re&&Ue(ee.centreCode).includes(re)||re&&ee.checkNo&&Ue(ee.checkNo).includes(re)||(ee.memberName||"").toLowerCase().includes(I)||(ee.centreName||"").toLowerCase().includes(I)))},[se,c,C,ne]);if(p.useEffect(()=>f(200),[c,C]),!l)return null;const O=j.slice(0,A);return n.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-3 backdrop-blur-xs animate-in fade-in duration-150",children:n.jsxs("div",{className:"flex h-[94vh] w-[96vw] max-w-5xl flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl",children:[n.jsxs("div",{className:"flex items-center justify-between gap-2 border-b border-indigo-200 bg-linear-to-r from-indigo-600 to-blue-600 px-4 py-3 text-white",children:[n.jsxs("div",{className:"flex items-center gap-2.5",children:[n.jsx("span",{className:"flex h-9 w-9 items-center justify-center rounded-xl bg-white/20 text-lg",children:"🗄️"}),n.jsxs("div",{children:[n.jsx("h3",{className:"text-base font-black leading-tight",children:"মেম্বার ডাটাবেজ"}),n.jsxs("p",{className:"text-[11px] text-indigo-100",children:["মোট"," ",n.jsx("span",{className:"font-mono font-black",children:se.length.toLocaleString("en-IN")})," ","মেম্বার"]})]})]}),se.length>0&&n.jsx("button",{type:"button",onClick:()=>ue(R=>!R),title:"মাসিক রিপোর্ট/CSV দিয়ে ডাটাবেজ আপডেট করুন",className:`shrink-0 rounded-full px-3 py-1.5 text-[11px] font-black transition cursor-pointer ${_?"bg-amber-300 text-slate-900 hover:bg-amber-200":"bg-white/15 text-white hover:bg-white/25"}`,children:_?"✕ আপডেট ঘর":"📤 আপডেট"}),n.jsx("button",{type:"button",onClick:o,title:"বন্ধ করুন",className:"flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-rose-600 text-sm font-black text-white transition hover:bg-rose-700 cursor-pointer",children:"✕"})]}),n.jsxs("div",{className:"border-b border-slate-200 bg-slate-50 px-4 py-3",children:[n.jsxs("div",{className:"relative",children:[n.jsx("span",{className:"pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400",children:"🔍"}),n.jsx("input",{ref:x,value:c,onChange:R=>d(R.target.value),placeholder:"মেম্বার কোড, সেন্টার কোড বা নাম লিখুন…",autoComplete:"off",className:"w-full rounded-xl border border-slate-300 bg-white py-2.5 pl-10 pr-10 text-sm font-bold text-slate-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"}),c&&n.jsx("button",{type:"button",onClick:()=>d(""),title:"সার্চ মুছুন",className:"absolute right-2 top-1/2 -translate-y-1/2 rounded-lg px-2 py-1 text-sm font-bold text-slate-400 hover:text-slate-700 cursor-pointer",children:"✕"})]}),n.jsxs("div",{className:"mt-1.5 flex flex-wrap items-center justify-between gap-2 text-[11px] font-bold text-slate-600",children:[n.jsx("span",{children:c.trim()?n.jsxs(n.Fragment,{children:["মিলেছে:"," ",n.jsx("span",{className:"font-mono text-indigo-700",children:j.length.toLocaleString("en-IN")})," ","টি"]}):n.jsx(n.Fragment,{children:"সব মেম্বার — খুঁজতে উপরে লিখুন"})}),n.jsxs("span",{className:"flex flex-wrap items-center gap-1.5",children:[n.jsxs("button",{type:"button",onClick:()=>q(R=>!R),title:"একই নাম+সেন্টারে ২জন+ আছে এমন সারিগুলোই দেখাবে",className:`rounded-full px-2.5 py-1 text-[10px] font-black transition cursor-pointer ${C?"bg-amber-500 text-white shadow hover:bg-amber-600":"bg-amber-100 text-amber-800 hover:bg-amber-200"}`,children:["🔁 ডুপ্লিকেট",C?` — ${ne.rows.length.toLocaleString("en-IN")}টি (${ne.groups.toLocaleString("en-IN")} গ্রুপ) ✕`:" খুঁজুন"]}),n.jsx("button",{type:"button",onClick:()=>{V(R=>!R),E(new Set)},title:"সারি মার্ক (টিক) করে একসাথে মোছার মোড",className:`rounded-full px-2.5 py-1 text-[10px] font-black transition cursor-pointer ${k?"bg-indigo-600 text-white shadow hover:bg-indigo-700":"bg-indigo-100 text-indigo-800 hover:bg-indigo-200"}`,children:k?"✕ নির্বাচন বন্ধ":"☑️ নির্বাচন"})]}),n.jsx("span",{className:"text-[10px] font-semibold text-slate-400",children:"যেকোনো সারিতে ট্যাপ করলে কোডটি ফর্মে বসে যাবে"})]})]}),_&&se.length>0&&n.jsxs("div",{className:"border-b border-indigo-100 bg-linear-to-b from-indigo-50/80 to-white px-4 py-3",children:[n.jsxs("div",{onDragOver:R=>{R.preventDefault(),P(!0)},onDragLeave:()=>P(!1),onDrop:R=>{R.preventDefault(),P(!1),pe(R.dataTransfer.files)},className:`rounded-xl border-2 border-dashed px-4 py-3 text-center transition ${H?"border-indigo-500 bg-indigo-100":"border-indigo-300 bg-indigo-50/50"}`,children:[n.jsx("p",{className:"text-xs font-black text-indigo-950",children:"📤 মাসিক স্যামিটি/রিকভারি-রিপোর্ট — Excel, PDF বা CSV ফাইল দিন"}),n.jsxs("p",{className:"mx-auto mt-1 max-w-lg text-[10px] font-semibold leading-relaxed text-slate-600",children:["MIS-এর মাসিক রিপোর্ট (",n.jsx("span",{className:"font-mono",children:"Samity: …"})," ফরমেট) দিলেই অ্যাপ নিজে মেম্বার-কোড, নাম ও সেন্টার চিনে ",n.jsx("b",{children:"যা ডাটাবেজে নেই তাই যোগ"})," করবে — পুরনো ডেটা অক্ষত থাকে, নাম/সেন্টার বদলালে ঝালাই হয়। ফাইল এখানে টেনে ছাড়ুন বা বোতাম চাপুন।"]}),n.jsx("input",{ref:L,type:"file",accept:".csv,.txt,.xlsx,.xls,.xlsm,.pdf,text/csv,text/plain,application/pdf,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel",onChange:R=>pe(R.target.files),className:"hidden"}),n.jsx("button",{type:"button",disabled:S,onClick:()=>{var R;return(R=L.current)==null?void 0:R.click()},className:"mt-2 rounded-xl bg-linear-to-r from-indigo-600 to-blue-600 px-4 py-2 text-[11px] font-black text-white shadow-md transition hover:from-indigo-700 hover:to-blue-700 disabled:opacity-50 cursor-pointer",children:S?"⏳ ফাইল পড়া হচ্ছে…":"📁 ফাইল বেছে নিন"})]}),ie.length>0&&n.jsxs("div",{className:"mt-2.5 overflow-hidden rounded-xl border border-slate-200 bg-white",children:[n.jsxs("div",{className:"flex items-center justify-between gap-2 border-b border-slate-100 bg-slate-50 px-3 py-1.5",children:[n.jsx("span",{className:"text-[10px] font-black text-slate-700",children:"📜 আপলোড-হিস্টোরি"}),n.jsx("span",{className:"text-[9px] font-bold text-slate-400",children:"সর্বশেষ ১৫টি থাকে, পুরনোগুলো নিজেই মুছে যায়"})]}),n.jsx("ul",{className:"max-h-36 divide-y divide-slate-100 overflow-auto",children:ie.map(R=>n.jsxs("li",{className:"flex items-center justify-between gap-2 px-3 py-1.5",children:[n.jsxs("div",{className:"min-w-0",children:[n.jsxs("p",{className:"truncate text-[11px] font-black text-slate-800",children:[R.format==="report"?"📊":"🗂️"," ",R.fileName]}),n.jsxs("p",{className:"text-[10px] font-semibold text-slate-500",children:[new Date(R.at).toLocaleString("bn-BD",{dateStyle:"medium",timeStyle:"short"})," — ","নতুন ",n.jsx("span",{className:"font-black text-emerald-700",children:R.added}),", ঝালাই ",n.jsx("span",{className:"font-black text-sky-700",children:R.updated}),typeof R.centres=="number"?`, সেন্টার ${R.centres}`:""]})]}),R.undoneAt?n.jsxs("span",{className:"shrink-0 rounded-lg bg-slate-100 px-2 py-1 text-[9px] font-black text-slate-500",children:["↩️ ফেরত নেওয়া",typeof R.removed=="number"?` (−${R.removed})`:""]}):R.addedCodes&&R.addedCodes.length>0?n.jsx("button",{type:"button",title:"এই আপলোডের নতুন মেম্বাররা ডাটাবেজ থেকে সরে যাবে — ঝালাই হওয়া পুরনোরা অক্ষত",onClick:()=>{if(confirm(`↩️ এই আপলোড ফেরত নেবেন?

এই ফাইল দিয়ে নতুন বসে যাওয়া ${R.added} জন মেম্বার ডাটাবেজ থেকে সরে যাবে (এই অ্যাপের সব ডিভাইস ও ক্লাউড থেকে)।

নাম/সেন্টার ঝালাই হওয়া পুরনো মেম্বার একদম অক্ষত থাকবে।`)){const I=OR(R.id);v(re=>re+1),I&&K({ok:!0,text:`↩️ ফেরত নেওয়া হয়েছে — ${I.removed.toLocaleString("en-IN")} জন মেম্বার সরে গেছে, এখন মোট ${I.total.toLocaleString("en-IN")} জন। ক্লাউডেও কাটছাঁট হচ্ছে…`})}},className:"shrink-0 rounded-lg px-2 py-1 text-xs text-amber-600 transition hover:bg-amber-50 hover:text-amber-700 cursor-pointer",children:"↩️"}):null,n.jsx("button",{type:"button",title:"এই রেকর্ডটি মুছুন — ডাটাবেজের মেম্বার অক্ষত থাকবে",onClick:()=>{confirm("শুধু এই রেকর্ডটি মুছে যাবে — ডাটাবেজে বসে যাওয়া মেম্বাররা অক্ষত থাকবে। মুছে ফেলবেন?")&&(LR(R.id),v(I=>I+1))},className:"shrink-0 rounded-lg px-2 py-1 text-xs text-rose-500 transition hover:bg-rose-50 hover:text-rose-700 cursor-pointer",children:"🗑️"})]},R.id))})]})]}),G&&n.jsxs("div",{className:`flex items-start justify-between gap-2 border-b px-4 py-2 text-[11px] font-bold leading-relaxed ${G.ok?"border-emerald-200 bg-emerald-50 text-emerald-900":"border-rose-200 bg-rose-50 text-rose-800"}`,children:[n.jsxs("span",{children:[G.ok?"✅":"⚠️"," ",G.text]}),n.jsx("button",{type:"button",onClick:()=>K(null),title:"বার্তা বন্ধ করুন",className:"shrink-0 rounded px-1 text-xs font-black opacity-60 hover:opacity-100 cursor-pointer",children:"✕"})]}),n.jsxs("div",{className:"flex-1 overflow-auto",onScroll:R=>{const I=R.currentTarget;I.scrollTop+I.clientHeight>=I.scrollHeight-300&&f(re=>re+200)},children:[se.length===0?n.jsx("div",{className:"px-4 py-8",children:n.jsxs("div",{onDragOver:R=>{R.preventDefault(),P(!0)},onDragLeave:()=>P(!1),onDrop:R=>{R.preventDefault(),P(!1),pe(R.dataTransfer.files)},className:`mx-auto max-w-xl rounded-2xl border-2 border-dashed p-6 text-center transition ${H?"border-indigo-500 bg-indigo-50":"border-indigo-300 bg-indigo-50/40"}`,children:[n.jsx("div",{className:"text-3xl",children:"📤"}),n.jsx("h4",{className:"mt-2 text-sm font-black text-indigo-950",children:"এই অফিসের মেম্বার ডাটাবেজ আপলোড করুন"}),n.jsx("p",{className:"mx-auto mt-1.5 max-w-md text-[11px] font-semibold leading-relaxed text-slate-600",children:"Excel (.xlsx), PDF বা CSV ফাইল দিলেই বাকি সব নিজে থেকেই হয়ে যাবে — ফাইল পড়া, কলাম শনাক্ত করা, মেম্বার কোড অনুযায়ী ডুপ্লিকেট বাদ দেওয়া, ডাটাবেজে বসানো এবং ক্লাউডে এই অফিসের নিজের ঘরে সংরক্ষণ। এরপর চেক এন্ট্রিতে কোড লিখলেই নাম ও সেন্টার নিজে থেকে চলে আসবে।"}),n.jsx("input",{ref:L,type:"file",accept:".csv,.txt,.xlsx,.xls,.xlsm,.pdf,text/csv,text/plain,application/pdf,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel",onChange:R=>pe(R.target.files),className:"hidden"}),n.jsx("button",{type:"button",disabled:S,onClick:()=>{var R;return(R=L.current)==null?void 0:R.click()},className:"mt-3 rounded-xl bg-linear-to-r from-indigo-600 to-blue-600 px-5 py-2.5 text-xs font-black text-white shadow-md transition hover:from-indigo-700 hover:to-blue-700 disabled:opacity-50 cursor-pointer",children:S?"⏳ ফাইল পড়া হচ্ছে…":"📁 Excel/PDF/CSV ফাইল বেছে নিন"}),n.jsx("p",{className:"mt-1.5 text-[10px] font-bold text-slate-500",children:"অথবা ফাইলটি এখানে টেনে আনুন"}),n.jsxs("div",{className:"mx-auto mt-3 max-w-md rounded-xl border border-slate-200 bg-white px-3 py-2 text-left text-[10px] font-semibold leading-relaxed text-slate-500",children:["MIS-এর মাসিক স্যামিটি-রিপোর্ট (",n.jsx("span",{className:"font-mono",children:"Samity: …"})," ফরমেট) সরাসরি দিলেই চলবে — অ্যাপ নিজেই মেম্বার-কোড, নাম ও সেন্টার বের করবে। সাধারণ CSV-ও চলে: ",n.jsx("span",{className:"font-mono",children:"Member Code, Member Name, Centre Code, Centre Name, Bank Name, Check No"})," (হেডার ছাড়াও এই ক্রমে)।"]}),n.jsx("p",{className:"mt-2 text-[10px] font-black text-amber-700",children:"⚠️ একবার ডাটাবেজ আপলোড হলে এই আপলোড ঘর আর দেখাবে না।"})]})}):O.length===0?n.jsxs("div",{className:"px-4 py-12 text-center",children:[n.jsx("div",{className:"text-3xl",children:"🔍"}),n.jsx("p",{className:"mt-2 text-sm font-bold text-slate-600",children:"কোনো মিল নেই"}),n.jsx("p",{className:"mt-1 text-[11px] font-semibold text-slate-400",children:"কোড বা নামের বানান মিলিয়ে দেখুন।"})]}):n.jsx("ul",{className:"divide-y divide-slate-200",children:O.map((R,I)=>n.jsxs("li",{className:"flex items-stretch",children:[k&&n.jsx("button",{type:"button",onClick:()=>{E(re=>{const ee=new Set(re);return ee.has(R.memberCode)?ee.delete(R.memberCode):ee.add(R.memberCode),ee})},title:ce.has(R.memberCode)?"নির্বাচন তুলুন":"নির্বাচন করুন",className:`shrink-0 border-r px-3 text-base transition cursor-pointer ${ce.has(R.memberCode)?"border-indigo-300 bg-indigo-600 text-white":"border-slate-200 bg-slate-100 text-slate-400 hover:bg-slate-200"}`,children:ce.has(R.memberCode)?"☑️":"⬜"}),n.jsxs("button",{type:"button",onClick:()=>{if(k){E(re=>{const ee=new Set(re);return ee.has(R.memberCode)?ee.delete(R.memberCode):ee.add(R.memberCode),ee});return}u&&u(R),o()},title:"এই মেম্বারটি বেছে নিন",className:`block min-w-0 flex-1 cursor-pointer px-4 py-2.5 text-left transition hover:bg-indigo-50 ${I%2?"bg-slate-50/60":"bg-white"}`,children:[n.jsxs("div",{className:"flex flex-wrap items-center gap-x-3 gap-y-1",children:[n.jsx("span",{className:"font-mono text-xs font-black text-indigo-700",children:R.memberCode}),n.jsx("span",{className:"text-sm font-bold text-slate-900",children:R.memberName||"—"}),C&&n.jsx("span",{className:"rounded bg-amber-100 px-1.5 py-0.5 text-[9px] font-black text-amber-800 ring-1 ring-amber-300",children:"ডুপ্লিকেট"}),n.jsxs("span",{className:"ml-auto flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[11px] font-bold text-slate-600",children:[n.jsx("span",{className:"rounded bg-slate-100 px-1.5 py-0.5 font-mono",children:R.centreCode||"—"}),n.jsx("span",{children:R.centreName||"—"})]})]}),(R.bankName||R.checkNo||R.source==="auto")&&n.jsxs("div",{className:"mt-1 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[10px] font-semibold text-slate-500",children:[R.bankName&&n.jsxs("span",{children:["🏦 ",R.bankName]}),R.checkNo&&n.jsxs("span",{className:"font-mono",children:["চেক #",R.checkNo]}),R.source==="auto"&&n.jsx("span",{className:"rounded bg-amber-100 px-1 py-0.5 font-black text-amber-800",children:"NEW"})]})]}),n.jsx("button",{type:"button",onClick:()=>me(R),title:`মেম্বার ${R.memberCode} স্থায়ীভাবে মুছে ফেলুন (লোকাল + ক্লাউড)`,className:`shrink-0 cursor-pointer border-l px-3 text-sm transition hover:bg-rose-100 hover:text-rose-700 ${I%2?"border-rose-200/60 bg-slate-50/60 text-slate-400":"border-rose-200/60 bg-white text-slate-400"}`,children:"🗑️"})]},`${R.memberCode}-${I}`))}),j.length>O.length&&n.jsx("div",{className:"p-3 text-center text-[10px] font-bold text-slate-400",children:"↓ নিচে স্ক্রল করলেই পরেরগুলো নিজে থেকে আসবে…"})]}),k&&ce.size>0&&n.jsxs("div",{className:"flex items-center justify-between gap-2 border-t border-indigo-200 bg-indigo-50 px-4 py-2",children:[n.jsxs("span",{className:"text-[11px] font-black text-indigo-900",children:["☑️ ",ce.size.toLocaleString("en-IN")," জন নির্বাচিত"]}),n.jsxs("span",{className:"flex items-center gap-2",children:[n.jsx("button",{type:"button",onClick:()=>E(new Set),className:"rounded-lg bg-slate-200 px-3 py-1.5 text-[10px] font-black text-slate-700 transition hover:bg-slate-300 cursor-pointer",children:"নির্বাচন মুছুন"}),n.jsx("button",{type:"button",onClick:()=>{const R=Array.from(ce);if(confirm(`🗑️ নির্বাচিত ${R.length} জন মেম্বার স্থায়ীভাবে মুছে ফেলবেন?

(সব ডিভাইস ও ক্লাউড থেকে মুছে যাবে; ভুল হলে পরের রিপোর্ট-আপডেটে প্রয়োজনীয় মেম্বার ফিরে আসবে)`)){for(const I of R)try{Bh(I)}catch{}E(new Set),v(I=>I+1),K({ok:!0,text:`🗑️ নির্বাচিত ${R.length.toLocaleString("en-IN")} জন মেম্বার মুছে ফেলা হয়েছে — ক্লাউডেও কাটছাঁট হবে।`})}},className:"rounded-lg bg-rose-600 px-3 py-1.5 text-[10px] font-black text-white shadow transition hover:bg-rose-700 cursor-pointer",children:"🗑️ মুছে ফেলুন"})]})]}),n.jsxs("div",{className:"flex items-center justify-between gap-2 border-t border-slate-200 bg-slate-50 px-4 py-3",children:[n.jsxs("span",{className:"text-[11px] font-bold text-slate-500",children:["দেখানো হচ্ছে"," ",n.jsx("span",{className:"font-mono text-slate-700",children:O.length.toLocaleString("en-IN")})," ","/"," ",n.jsx("span",{className:"font-mono text-slate-700",children:j.length.toLocaleString("en-IN")})]}),n.jsx("button",{type:"button",onClick:o,className:"rounded-xl bg-slate-200 px-4 py-2 text-xs font-bold text-slate-700 transition hover:bg-slate-300 cursor-pointer",children:"বন্ধ করুন"})]})]})})}const fl=l=>!1,X5=(l,o)=>({blocked:!1}),cm=["jagoron","agrossor"],V5=l=>{const o=(l||"").trim().toLowerCase();return(o&&!cm.includes(o)?[...cm,o]:cm).map(c=>({value:c,label:c.toUpperCase()}))},mb=["মেম্বার","জামিনদার-১","জামিনদার-২",{value:"",label:"— ফাঁকা —"}],um=["Sr","Date","মেম্বার কোড","মেম্বার Name","Centre Code","Centre Name","Bank Name","হিসাব নং","Check No.","MICR","Disbursse","Project","Return","Action"],Y5=`
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
`,Ea=l=>{const o=[{bankName:l.bankName||"",checkNo:l.checkNo||"",micr:l.micr===!0,accountNo:l.accountNo||"",accountType:l.accountType||""}];for(const u of l.extraBanks||[])u&&((u.bankName||"").trim()||(u.checkNo||"").trim())&&o.push({bankName:u.bankName||"",checkNo:u.checkNo||"",micr:u.micr===!0,accountNo:u.accountNo||"",accountType:u.accountType||""});return o},q5=l=>JSON.stringify({m:Ue(l.memberCode||""),n:(l.memberName||"").trim().toLowerCase(),cc:Ue(l.centreCode||""),cn:(l.centreName||"").trim().toLowerCase(),p:Ea(l).map(o=>[(o.bankName||"").trim().toLowerCase(),String(o.checkNo||"").replace(/\s/g,""),o.micr?1:0,String(o.accountNo||"").replace(/\s/g,""),(o.accountType||"").trim()].join("|")).sort(),d:String(l.disbursse||"").replace(/[^0-9.]/g,""),pr:(l.project||"").trim().toLowerCase(),r:l.returned?1:0}),Q5=l=>{const o=new Map;for(const u of l){const c=q5(u),d=o.get(c);if(!d){o.set(c,{row:u,dupes:[]});continue}const A=u.checkDate>d.row.checkDate||u.checkDate===d.row.checkDate&&Number(u.id)>Number(d.row.id);d.dupes=[...d.dupes,A?d.row:u],d.row=A?u:d.row}return[...o.values()]},$5=[{value:"all",label:"🔍 সব কলাম"},{value:"memberCode",label:"মেম্বার কোড"},{value:"memberName",label:"মেম্বার নাম"},{value:"centreCode",label:"সেন্টার কোড"},{value:"centreName",label:"সেন্টার নাম"},{value:"accountNo",label:"হিসাব নং"}],Ab=["memberCode","centreCode","accountNo"],W5={all:"Search — মেম্বার কোড, সেন্টার কোড, মেম্বার নাম, সেন্টার নাম, হিসাব নং…",memberCode:"মেম্বার কোড লিখুন…",memberName:"মেম্বার নাম লিখুন…",centreCode:"সেন্টার কোড লিখুন…",centreName:"সেন্টার নাম লিখুন…",accountNo:"হিসাব নং লিখুন…"},pp=(l,o,u="all")=>{const c=String(o||"").trim().toLowerCase();if(!c)return!0;const d=Ue(o);return u==="memberCode"?d?Ue(l.memberCode).includes(d):(l.memberCode||"").toLowerCase().includes(c):u==="centreCode"?d?Ue(l.centreCode).includes(d):(l.centreCode||"").toLowerCase().includes(c):u==="accountNo"?d?Ue(l.accountNo).includes(d)||(l.extraBanks||[]).some(A=>Ue((A==null?void 0:A.accountNo)||"").includes(d)):(l.accountNo||"").toLowerCase().includes(c)||(l.extraBanks||[]).some(A=>String((A==null?void 0:A.accountNo)||"").toLowerCase().includes(c)):u==="memberName"?(l.memberName||"").toLowerCase().includes(c):u==="centreName"?(l.centreName||"").toLowerCase().includes(c):!!(d&&(Ue(l.memberCode).includes(d)||Ue(l.centreCode).includes(d)||Ue(l.accountNo).includes(d)||(l.extraBanks||[]).some(A=>Ue((A==null?void 0:A.accountNo)||"").includes(d)))||(l.memberName||"").toLowerCase().includes(c)||(l.centreName||"").toLowerCase().includes(c))},eS=(l,o)=>{const u=String(l??""),c=String(o??"").trim();if(!u||!c)return[{t:u,hit:!1}];const d=Ue(c),A=[];let f="";for(let S=0;S<u.length;S++){const b=u[S];/\s/.test(b)||(f+=b.toUpperCase(),A.push(S))}const x=[];let h=0,v=0;for(;d;){const S=f.indexOf(d,v);if(S<0)break;const b=S+d.length,H=A[S],P=A[b-1]+1;H>h&&x.push({t:u.slice(h,H),hit:!1}),x.push({t:u.slice(H,P),hit:!0}),h=P,v=b}return x.length?(h<u.length&&x.push({t:u.slice(h),hit:!1}),x):[{t:u,hit:!1}]},zi=l=>{const o=String(l||"").trim();if(!/^\d{4}-\d{2}-\d{2}$/.test(o))return!1;const u=Number(o.slice(0,4)),c=Number(o.slice(5,7)),d=Number(o.slice(8,10));if(c<1||c>12||d<1||d>31)return!1;const A=new Date(Date.UTC(u,c-1,d));return A.getUTCFullYear()===u&&A.getUTCMonth()===c-1&&A.getUTCDate()===d},tS=(l,o,u="all")=>{const c=(o||"").trim();if(!c)return l;const d=l.filter(x=>pp(x,c,u)),A=new Map(l.map(x=>[Number(x.id),x])),f=new Map;for(const x of d){if(!x.reissuedTo){f.set(Number(x.id),x);continue}let h=x;const v=new Set;for(;h&&h.reissuedTo&&!v.has(Number(h.id));)v.add(Number(h.id)),h=A.get(Number(h.reissuedTo.id));h&&f.set(Number(h.id),h)}return l.filter(x=>f.has(Number(x.id)))},fb=l=>{if(!l.key||!l.key.startsWith("Arrow"))return;const o=l.currentTarget;if(!o)return;l.preventDefault();const u=80;l.key==="ArrowLeft"?o.scrollLeft-=u:l.key==="ArrowRight"?o.scrollLeft+=u:l.key==="ArrowUp"?o.scrollTop-=u:l.key==="ArrowDown"&&(o.scrollTop+=u)},Fi=l=>({checkDate:l,memberCode:"",memberName:"",centreCode:"",centreName:"",bankName:"",checkNo:"",disbursse:"",project:"",micr:!1,accountNo:"",accountType:"",bankStatement:!1,extraBanks:[]}),xb=l=>l?`${l.slice(8,10)}-${l.slice(5,7)}`:"";function nS({selectedDate:l}){const o=l||xa(),[u,c]=p.useState([]),[d,A]=p.useState(Fi(o)),[f,x]=p.useState(null),[h,v]=p.useState(""),[S,b]=p.useState("all"),[H,P]=p.useState("");p.useEffect(()=>{const N=setTimeout(()=>P(h),140);return()=>clearTimeout(N)},[h]);const[G,K]=p.useState("idle"),[L,_]=p.useState(0),[ue,C]=p.useState(null),[q,k]=p.useState(!1),[V,ce]=p.useState(!1),[E,se]=p.useState(""),[ie,ne]=p.useState(!1),[me,pe]=p.useState(1),[j,O]=p.useState(1),[R,I]=p.useState(!1),[re,ee]=p.useState(!1),[M,U]=p.useState(null),[B,ge]=p.useState(!1),[y,le]=p.useState(""),[te,Y]=p.useState(""),[Se,ye]=p.useState(null),[Z,F]=p.useState(""),[Re,Oe]=p.useState(""),rt=25,At=p.useRef(null),ft=p.useRef(null),tt=p.useRef(null),Le=p.useRef(!1);p.useEffect(()=>{const N=At.current;if(!N)return;const de=oe=>{var Te,on;const Ne=(on=(Te=oe.target)==null?void 0:Te.closest)==null?void 0:on.call(Te,"[data-micr-toggle]");if(!Ne)return;oe.preventDefault();const we=Ne.getAttribute("data-micr-toggle");if(we==="main")A(Je=>({...Je,micr:!Je.micr}));else{const Je=Number(we);Number.isInteger(Je)&&A(Jn=>({...Jn,extraBanks:Jn.extraBanks.map((zt,at)=>at===Je?{...zt,micr:!zt.micr}:zt)}))}};return N.addEventListener("touchstart",de,{passive:!1}),()=>N.removeEventListener("touchstart",de)},[]);const lt=fl(d.checkDate);X5(d.checkDate);const St=()=>{c(G5()),_(NR())};p.useEffect(()=>{St();const N=()=>St();return window.addEventListener("check-changed",N),window.addEventListener("member-db-changed",N),window.addEventListener("tx-changed",N),window.addEventListener("day-close-changed",N),()=>{window.removeEventListener("check-changed",N),window.removeEventListener("member-db-changed",N),window.removeEventListener("tx-changed",N),window.removeEventListener("day-close-changed",N)}},[]),p.useEffect(()=>{f||A(N=>N.memberCode||N.checkNo?N:{...N,checkDate:o})},[o,f]);const gt=N=>{const de=N.trim();if(!de){K("idle");return}const oe=Hh(de);oe?(K("found"),A(Ne=>({...Ne,memberCode:de,memberName:oe.memberName||"",centreCode:oe.centreCode||"",centreName:oe.centreName||""}))):(K("notfound"),A(Ne=>({...Ne,memberCode:de,memberName:"",centreCode:"",centreName:""})))},yt=G==="found",xe=G!=="found",ke=N=>{const de=Ue(N);if(!de||f)return null;let oe=null;for(const Ne of u)Ne.returned||!(Ue(Ne.accountNo)===de||(Ne.extraBanks||[]).some(Te=>Ue(Te==null?void 0:Te.accountNo)===de))||(!oe||Number(Ne.id)>Number(oe.id))&&(oe=Ne);return(oe==null?void 0:oe.memberCode)||null},Fe=p.useMemo(()=>ke(d.accountNo),[u,d.accountNo,f]),Ot=p.useRef(null),rn=N=>{A(oe=>({...oe,memberCode:N})),K("idle"),Ot.current&&window.clearTimeout(Ot.current);const de=N.trim();de&&(Ot.current=window.setTimeout(()=>gt(de),350))};p.useEffect(()=>()=>{Ot.current&&window.clearTimeout(Ot.current)},[]);const Zt=()=>{if(!zi(d.checkDate))return C({kind:"err",text:"তারিখ 100% পূরণ করুন (সম্পূর্ণ তারিখ বাধ্যতামূলক) — না পূরণে এন্ট্রি সেভ হবে না।"});if(!d.memberCode.trim())return C({kind:"err",text:"মেম্বার কোড দিন।"});if(!d.bankName.trim())return C({kind:"err",text:"ব্যাংকের নাম দিন।"});if(!d.checkNo.trim())return C({kind:"err",text:"চেক নম্বর দিন।"});if(xe){if(!d.memberName.trim())return C({kind:"err",text:"মেম্বার নাম দিন (ডাটাবেজে পাওয়া যায়নি)।"});if(!d.centreCode.trim())return C({kind:"err",text:"সেন্টার কোড দিন (ডাটাবেজে পাওয়া যায়নি)।"});if(!d.centreName.trim())return C({kind:"err",text:"সেন্টার নাম দিন (ডাটাবেজে পাওয়া যায়নি)।"})}const N=d.extraBanks.map(Je=>({bankName:(Je.bankName||"").trim(),checkNo:(Je.checkNo||"").trim(),micr:!!Je.micr,accountNo:(Je.accountNo||"").trim(),accountType:Je.accountType||"",bankStatement:!!Je.bankStatement})).filter(Je=>Je.bankName||Je.checkNo);for(let Je=0;Je<N.length;Je++){if(!N[Je].bankName)return C({kind:"err",text:`ব্যাংক #${Je+2}-এর নাম দিন (না হলে ✕ দিয়ে জোড়াটি বাদ দিন)।`});if(!N[Je].checkNo)return C({kind:"err",text:`ব্যাংক #${Je+2}-এর চেক নম্বর দিন (না হলে ✕ দিয়ে জোড়াটি বাদ দিন)।`})}const de=[{bankName:d.bankName,checkNo:d.checkNo},...N].find(Je=>Je.bankName.trim()&&Je.checkNo.trim()&&K5(Je.bankName,Je.checkNo,f==null?void 0:f.id));if(de&&!confirm(`⚠️ ${de.bankName} ব্যাংকের ${de.checkNo} নম্বর চেকটি আগেও এন্ট্রি করা আছে।

তবুও সেভ করতে চান?`))return;xe&&gR({memberCode:d.memberCode,memberName:d.memberName,centreCode:d.centreCode,centreName:d.centreName,bankName:d.bankName,checkNo:d.checkNo,source:"auto"});const oe={checkDate:d.checkDate,memberCode:d.memberCode.trim(),memberName:d.memberName.trim(),centreCode:d.centreCode.trim(),centreName:d.centreName.trim(),bankName:d.bankName.trim(),checkNo:d.checkNo.trim(),disbursse:d.disbursse.trim(),project:d.project.trim().toLowerCase(),micr:!!d.micr,accountNo:d.accountNo.trim(),accountType:d.accountType||"",bankStatement:!!d.bankStatement,extraBanks:N,foundInDb:yt},Ne=!!f,we=Ne?im({...f,...oe}):U5(oe);Ne&&x(null);const Te=!!h.trim()&&!pp(we,h,S);Te&&(v(""),pe(1));const on=as().length;C({kind:"ok",text:Ne?`✓ চেক #${oe.checkNo} (${oe.memberCode}) আপডেট হয়েছে — আগের এন্ট্রিটি মুছে যায়নি, ওই এন্ট্রিটিই বদলেছে। মোট এন্ট্রি: ${on.toLocaleString("en-IN")}${Te?" • সার্চ ফিল্টার সরানো হয়েছে যাতে এন্ট্রিটি দেখা যায়":""}`:xe?`✓ নতুন মেম্বার (${oe.memberCode}) ডাটাবেজে যোগ হয়েছে এবং চেক এন্ট্রি সেভ হয়েছে। মোট এন্ট্রি: ${on.toLocaleString("en-IN")}`:`✓ চেক #${oe.checkNo} সেভ হয়েছে (ডাটাবেজ থেকে তথ্য আনা হয়েছে)। মোট এন্ট্রি: ${on.toLocaleString("en-IN")}`}),A(Fi(d.checkDate)),K("idle"),St()},Dt=N=>{fl(N.checkDate),C(null),I(!1),x(N),A({checkDate:N.checkDate,memberCode:N.memberCode,memberName:N.memberName,centreCode:N.centreCode,centreName:N.centreName,bankName:N.bankName,checkNo:N.checkNo,disbursse:N.disbursse||"",project:(N.project||"").trim().toLowerCase(),accountNo:N.accountNo||"",accountType:N.accountType||"",micr:!!N.micr,bankStatement:!!N.bankStatement,extraBanks:(N.extraBanks||[]).map(Ne=>({bankName:(Ne==null?void 0:Ne.bankName)||"",checkNo:(Ne==null?void 0:Ne.checkNo)||"",micr:(Ne==null?void 0:Ne.micr)===!0,accountNo:(Ne==null?void 0:Ne.accountNo)||"",accountType:(Ne==null?void 0:Ne.accountType)||"",bankStatement:(Ne==null?void 0:Ne.bankStatement)===!0}))});const de=Hh(N.memberCode);K(de?"found":"notfound");const oe=At.current;oe&&typeof oe.scrollIntoView=="function"&&oe.scrollIntoView({behavior:"smooth",block:"start"})},fe=N=>{fl(N.checkDate),confirm(`চেক নম্বর ${N.checkNo} (${N.memberCode}) — ${Ze(N.checkDate)||N.checkDate} তারিখের এন্ট্রিটি মুছে ফেলতে চান?`)&&(bp(N.id),(f==null?void 0:f.id)===N.id&&(x(null),A(Fi(d.checkDate)),K("idle")),C({kind:"ok",text:`✓ চেক #${N.checkNo} (${N.memberCode}) মুছে ফেলা হয়েছে। বাকি মোট এন্ট্রি: ${as().length.toLocaleString("en-IN")}`}),St())},Ee=N=>{const{members:de,skipped:oe}=Km(N);if(!de.length){C({kind:"err",text:"কোনো মেম্বার পাওয়া যায়নি — ফরম্যাট মিলিয়ে দেখুন।"});return}const Ne=qi(de);C({kind:"ok",text:`✓ ডাটাবেজ আমদানি — নতুন ${Ne.added}, আপডেট ${Ne.updated}, মোট ${Ne.total} মেম্বার${oe?` (বাদ ${oe})`:""}`}),k(!1),se(""),St()},Nt=async N=>{const de=N.name.toLowerCase();try{de.endsWith(".csv")||de.endsWith(".txt")||de.endsWith(".tsv")?Ee(await N.text()):de.endsWith(".xlsx")||de.endsWith(".xls")?(C({kind:"warn",text:"Excel ফাইল সরাসরি পড়া যায় না — ফাইলটি খুলে সব ঘর কপি করে ‘পেস্ট করে আমদানি’ করুন।"}),k(!0)):C({kind:"err",text:"CSV / TXT ফাইল দিন।"})}catch{C({kind:"err",text:"ফাইল পড়া যায়নি।"})}},wn=p.useMemo(()=>{const N=new Set;for(const de of u)de.bankName&&de.bankName.trim()&&N.add(de.bankName.trim());for(const de of zn())de.bankName&&de.bankName.trim()&&N.add(de.bankName.trim());return Array.from(N)},[u]),sa=p.useMemo(()=>tS(u,H,S),[u,H,S]),nt=p.useMemo(()=>M?sa.filter(N=>N.checkDate>=M.from&&N.checkDate<=M.to):sa,[sa,M]),la=p.useMemo(()=>{const N=Ue(d.memberCode);return N?u.filter(de=>Ue(de.memberCode)===N&&!de.returned):[]},[u,d.memberCode]);p.useEffect(()=>{pe(1),O(1)},[H,S,M]);const bl=()=>{if(!y&&!te){C({kind:"warn",text:"কমপক্ষে একটি তারিখ লিখুন (হতে বা পর্যন্ত)।"});return}let N=y||te,de=te||y;N>de&&([N,de]=[de,N]),U({from:N,to:de}),ge(!1)},pl=()=>{U(null),le(""),Y(""),ge(!1)},Tt=p.useMemo(()=>nt.filter(N=>!N.returned),[nt]),ra=p.useMemo(()=>nt.filter(N=>!!N.returned),[nt]),ls=p.useMemo(()=>nt.reduce((N,de)=>{const oe=Number(String(de.disbursse||"").replace(/[^0-9.-]/g,""));return N+(Number.isFinite(oe)?oe:0)},0),[nt]),Ps=u.reduce((N,de)=>N+(de.returned?1:0),0),oa=Tt,ka=Math.max(1,Math.ceil(ra.length/rt)),Ua=ra.slice((j-1)*rt,j*rt),Da=p.useMemo(()=>Q5(nt),[nt]),_s=N=>{if(fl(N.checkDate),!N.returned){C(null),ye(N),F(""),Oe("");return}im({...N,returned:!1,returnDate:""}),C({kind:"ok",text:`✓ চেক #${N.checkNo} (${N.memberCode}) Return থেকে চেক লিস্টে ফিরে এসেছে।`})},pa=()=>{const N=Se;if(N){if(!zi(Z)){Oe("রিটার্নের তারিখ 100% পূরণ করুন (সম্পূর্ণ তারিখ বাধ্যতামূলক) — না পূরণে এন্ট্রি সেভ হবে না।");return}im({...N,returned:!0,returnDate:Z}),ye(null),Oe(""),C({kind:"ok",text:`↩ চেক #${N.checkNo} (${N.memberCode}) Return টেবিলে পাঠানো হয়েছে — তারিখ: ${Ze(Z)||Z}। এন্ট্রিটি মুছে যায়নি।`})}},kt=N=>{const de=N.reissueChanges;if(!de||de.cancelled.length===0&&de.added.length===0)return null;const oe=de.decisions,Ne=(oe==null?void 0:oe.filter(Te=>Te.action==="reissued"))||[],we=(oe==null?void 0:oe.filter(Te=>Te.action==="returned"))||[];return n.jsxs("div",{className:"mt-1 flex flex-col gap-0.5",children:[oe&&Ne.length>0&&n.jsxs("span",{className:"inline-block whitespace-nowrap rounded border border-teal-300 bg-teal-50 px-1.5 py-0.5 text-[9px] font-black text-teal-800",title:"রি-ইস্যু হিসেবে ধরা পুরনো চেক — নতুন নম্বরে বদলে গেছে",children:["🔁 রি-ইস্যু: ",Ne.map(Te=>`#${Te.checkNo||"—"}`).join(", ")]}),oe&&we.length>0&&n.jsxs("span",{className:"inline-block whitespace-nowrap rounded border border-purple-300 bg-purple-50 px-1.5 py-0.5 text-[9px] font-black text-purple-800",title:"রিটার্ন হিসেবে ধরা পুরনো চেক — রি-ইস্যু হয়নি, শুধু বাতিল",children:["↩ রিটার্ন: ",we.map(Te=>`#${Te.checkNo||"—"}`).join(", ")]}),!oe&&de.cancelled.length>0&&n.jsxs("span",{className:"inline-block whitespace-nowrap rounded border border-rose-300 bg-rose-50 px-1.5 py-0.5 text-[9px] font-black text-rose-800",title:"রি-ইস্যুতে বাতিল হওয়া পুরনো চেক",children:["🚫 বাতিল: ",de.cancelled.map(Te=>`#${Te.checkNo||"—"}`).join(", ")]}),de.added.length>0&&n.jsxs("span",{className:"inline-block whitespace-nowrap rounded border border-emerald-300 bg-emerald-50 px-1.5 py-0.5 text-[9px] font-black text-emerald-800",title:"রি-ইস্যুতে নতুন অ্যাড হওয়া চেক",children:["✨ নতুন: ",de.added.map(Te=>`#${Te.checkNo||"—"}`).join(", ")]})]})},En=()=>A(N=>({...N,extraBanks:[...N.extraBanks,{bankName:"",checkNo:"",micr:!1,accountNo:"",accountType:"",bankStatement:!1}]})),Ct=(N,de,oe)=>A(Ne=>({...Ne,extraBanks:Ne.extraBanks.map((we,Te)=>Te===N?{...we,[de]:oe}:we)})),Zs=N=>A(de=>({...de,extraBanks:de.extraBanks.filter((oe,Ne)=>Ne!==N)})),ia=({children:N})=>{const de=String(N??""),oe=eS(de,H);return oe.length===1&&!oe[0].hit?n.jsx(n.Fragment,{children:de}):n.jsx(n.Fragment,{children:oe.map((Ne,we)=>Ne.hit?n.jsx("mark",{className:"rounded-sm bg-yellow-300 px-[1px] text-slate-950",children:Ne.t},we):n.jsx(p.Fragment,{children:Ne.t},we))})},rs=(N,de,oe)=>{const Ne=fl(N.checkDate);return n.jsxs("tr",{className:`border-b border-slate-200 last:border-b-0 ${oe%2?"bg-slate-50/70":"bg-white"} hover:bg-blue-50/60`,children:[n.jsx("td",{className:"px-2 py-1.5 font-mono text-[11px] font-bold text-slate-500",children:de}),n.jsx("td",{className:"whitespace-nowrap px-2 py-1.5 font-mono text-xs font-bold text-slate-800",children:Ze(N.checkDate)||N.checkDate}),n.jsxs("td",{className:"whitespace-nowrap px-2 py-1.5 font-mono text-xs font-black text-indigo-700",children:[n.jsx(ia,{children:N.memberCode}),N.foundInDb===!1&&n.jsx("span",{className:"ml-1 rounded bg-amber-100 px-1 py-0.5 text-[9px] font-black text-amber-800",title:"এই মেম্বারটি এন্ট্রির সময় ডাটাবেজে ছিল না — এন্ট্রি থেকেই ডাটাবেজে যোগ হয়েছে",children:"NEW"})]}),n.jsx("td",{className:"px-2 py-1.5 text-xs font-semibold text-slate-900",children:n.jsx(ia,{children:N.memberName})}),n.jsx("td",{className:"whitespace-nowrap px-2 py-1.5 font-mono text-xs font-bold text-slate-700",children:n.jsx(ia,{children:N.centreCode})}),n.jsx("td",{className:"px-2 py-1.5 text-xs font-semibold text-slate-900",children:n.jsx(ia,{children:N.centreName})}),n.jsx("td",{className:"px-2 py-1.5 text-xs font-semibold text-slate-800",children:n.jsx("div",{className:"flex flex-col gap-0.5",children:Ea(N).map((we,Te)=>n.jsx("span",{children:we.bankName||"—"},Te))})}),n.jsxs("td",{className:"whitespace-nowrap px-2 py-1.5",children:[(()=>{const we=(N.bankStatement?1:0)+(N.extraBanks||[]).filter(Te=>Te==null?void 0:Te.bankStatement).length;return we>0?n.jsx("div",{className:"mb-0.5",children:n.jsxs("span",{className:"inline-block rounded border border-sky-300 bg-sky-50 px-1.5 py-0.5 text-[9px] font-black text-sky-800",title:we>1?`এই এন্ট্রিতে ${we}টি হিসাব Bank Statement`:"এই এন্ট্রি Bank Statement হিসেবে ধরা হয়েছে",children:["📄 Bank Stmt",we>1?` ×${we}`:""]})}):null})(),Ea(N).some(we=>we.accountNo||we.accountType)?n.jsx("div",{className:"flex flex-col gap-0.5",children:Ea(N).map((we,Te)=>we.accountNo||we.accountType?n.jsxs("span",{className:"inline-flex items-center gap-1",children:[n.jsx("span",{className:"font-mono text-xs font-black text-slate-900",children:n.jsx(ia,{children:we.accountNo||"—"})}),we.accountType&&n.jsx("span",{className:`rounded px-1 py-0.5 text-[9px] font-black ${we.accountType==="মেম্বার"?"bg-indigo-100 text-indigo-800":"bg-teal-100 text-teal-800"}`,children:we.accountType})]},Te):null)}):n.jsx("span",{className:"text-slate-300",children:"—"})]}),n.jsxs("td",{className:"px-2 py-1.5 font-mono text-xs font-black text-slate-900",children:[n.jsx("div",{className:"flex flex-col gap-0.5",children:Ea(N).map((we,Te)=>n.jsx("span",{className:"whitespace-nowrap",children:we.checkNo||"—"},Te))}),N.reissuedTo&&n.jsxs("span",{className:"mt-1 inline-block rounded border border-teal-300 bg-teal-50 px-1.5 py-0.5 text-[9px] font-black text-teal-800",title:`এই চেকটি রি-ইস্যু হয়েছে — নতুন চেক #${N.reissuedTo.checkNo} (এন্ট্রি #${N.reissuedTo.id})`,children:["🔁 Reissued ",Ze(N.reissuedTo.date)||N.reissuedTo.date," → #",N.reissuedTo.checkNo]}),N.reissuedFrom&&n.jsxs("span",{className:"mt-1 inline-block rounded border border-orange-300 bg-orange-50 px-1.5 py-0.5 text-[9px] font-black text-orange-800",title:`পুরনো চেক #${N.reissuedFrom.checkNo} (${Ze(N.reissuedFrom.checkDate)||N.reissuedFrom.checkDate})-এর রি-ইস্যু`,children:["🔁 Reissue — পুরনো চেক #",N.reissuedFrom.checkNo," (",Ze(N.reissuedFrom.checkDate)||N.reissuedFrom.checkDate,")"]}),kt(N)]}),n.jsx("td",{className:"whitespace-nowrap px-2 py-1.5 text-center",children:n.jsx("div",{className:"flex flex-col items-center gap-0.5",children:Ea(N).map((we,Te)=>we.micr?n.jsx("span",{className:"rounded border border-emerald-300 bg-emerald-100 px-1.5 py-0.5 text-[10px] font-black text-emerald-800",children:"MICR"},Te):n.jsx("span",{className:"rounded border border-slate-300 bg-slate-100 px-1.5 py-0.5 text-[10px] font-black text-slate-600",children:"NON MICR"},Te))})}),n.jsx("td",{className:"whitespace-nowrap px-2 py-1.5 text-right font-mono text-xs font-black text-slate-900",children:N.disbursse?Cn(N.disbursse):n.jsx("span",{className:"text-slate-300",children:"—"})}),n.jsx("td",{className:"px-2 py-1.5 text-xs font-semibold text-slate-800",children:N.project?n.jsx("span",{className:"uppercase",children:String(N.project).trim().toUpperCase()}):n.jsx("span",{className:"text-slate-300",children:"—"})}),n.jsxs("td",{className:"whitespace-nowrap px-2 py-1.5 text-center",children:[n.jsx("input",{type:"checkbox",checked:!!N.returned,disabled:Ne,onChange:()=>_s(N),title:N.returned?`↩ রিটার্নের তারিখ: ${Ze(N.returnDate||"")||N.returnDate||"—"} — টিক তুললে এন্ট্রিটি চেক লিস্টে ফিরে যাবে`:"টিক দিলে তারিখ চাইবে — তারিখসহ এন্ট্রিটি Return টেবিলে চলে যাবে",className:"h-4 w-4 cursor-pointer accent-amber-600 disabled:cursor-not-allowed disabled:opacity-40"}),N.returned&&N.returnDate&&n.jsxs("div",{className:"mt-0.5 text-[9px] font-black text-amber-700",title:"রিটার্নের তারিখ",children:["↩ ",Ze(N.returnDate)||N.returnDate]})]}),n.jsx("td",{className:"whitespace-nowrap px-2 py-1.5",children:n.jsxs("div",{className:"flex items-center gap-1",children:[Ne,n.jsx("button",{type:"button",onClick:()=>Dt(N),disabled:Ne,title:"এডিট করুন",className:"rounded-lg border border-blue-200 bg-blue-50 px-2 py-1 text-xs text-blue-700 transition hover:bg-blue-100 disabled:cursor-not-allowed disabled:opacity-40",children:"✏️"}),n.jsx("button",{type:"button",onClick:()=>fe(N),disabled:Ne,title:"মুছে ফেলুন",className:"rounded-lg border border-rose-200 bg-rose-50 px-2 py-1 text-xs text-rose-700 transition hover:bg-rose-100 disabled:cursor-not-allowed disabled:opacity-40",children:"🗑️"})]})})]},N.id)},Cn=N=>{const de=Number(N);return N.trim()!==""&&Number.isFinite(de)?de.toLocaleString("en-IN"):N},Ta=p.useMemo(()=>oa.map((N,de)=>rs(N,de+1,de)),[oa,H,lt,ie]),ga=p.useMemo(()=>Ua.map((N,de)=>rs(N,(j-1)*rt+de+1,de)),[Ua,H,lt,ie]),vn=p.useMemo(()=>Da.map((N,de)=>rs(N.row,de+1,de)),[Da,H,lt,ie]),os=p.useMemo(()=>new Set(u.map(N=>Ue(N.memberCode))).size,[u]),Gt="w-full rounded-lg border border-slate-300 bg-orange-50 px-3 py-2 text-sm font-semibold text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200",pn="mb-1 block h-[24px] truncate leading-[24px] text-[11px] font-black uppercase tracking-wide text-slate-600",Ra="w-full rounded-lg border border-emerald-300 bg-emerald-50 px-3 py-2 text-sm font-bold text-emerald-900";return n.jsxs("div",{className:"space-y-4 lg:mx-auto lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl lg:space-y-3.5",children:[n.jsxs("div",{ref:At,className:"rounded-2xl border border-slate-200 border-t-4 border-t-indigo-500 bg-white p-4 shadow-sm sm:p-4 lg:p-3.5",children:[n.jsxs("div",{className:"mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3 sm:mb-3 sm:pb-2",children:[n.jsxs("h1",{className:"flex flex-wrap items-center gap-2 text-lg font-black text-slate-900 sm:text-lg",children:[n.jsx("span",{children:"🧾"}),n.jsx("span",{children:"Check Entry"}),lt,f&&n.jsxs("span",{className:"shrink-0 rounded-lg border border-amber-300 bg-amber-100 px-2 py-0.5 text-[10px] font-black text-amber-800",children:["✏️ এডিট মোড — #",f.checkNo]})]}),n.jsxs("span",{className:"rounded-lg border border-slate-200 bg-slate-100 px-2.5 py-1 text-[11px] font-bold text-slate-600",children:["🗄️ মেম্বার ডাটাবেজ: ",n.jsx("span",{className:"font-mono",children:L.toLocaleString("en-IN")})]})]}),n.jsxs("div",{className:"grid grid-cols-2 gap-2 sm:grid-cols-2 sm:gap-3 lg:grid-cols-4",children:[n.jsxs("div",{children:[n.jsx("label",{className:pn,children:"Date (তারিখ)"}),n.jsx(hn,{value:d.checkDate,onChange:N=>A(de=>({...de,checkDate:N||de.checkDate})),className:"py-2 text-sm font-semibold",manualEntry:!0})]}),n.jsxs("div",{children:[n.jsxs("div",{className:"mb-1 flex h-[24px] items-center justify-between gap-2",children:[n.jsx("label",{className:`${pn} !mb-0`,children:"Member Code (মেম্বার কোড)"}),n.jsx("button",{type:"button",onClick:()=>ce(!0),title:"মেম্বার ডাটাবেজ থেকে খুঁজুন",className:"flex h-6 w-7 shrink-0 cursor-pointer items-center justify-center rounded-md border border-indigo-300 bg-indigo-50 text-xs transition hover:bg-indigo-100",children:"🗄️"})]}),n.jsxs("div",{className:"relative",children:[n.jsx("input",{value:d.memberCode,onChange:N=>rn(N.target.value),onBlur:N=>{Ot.current&&window.clearTimeout(Ot.current),gt(N.target.value)},onKeyDown:N=>{N.key==="Enter"&&N.target.blur()},className:Gt,inputMode:"numeric",pattern:"[0-9]*",autoComplete:"off"}),G!=="idle"&&n.jsx("span",{className:`pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 rounded px-1.5 py-0.5 text-[10px] font-black ${yt?"bg-emerald-100 text-emerald-800 border border-emerald-300":"bg-amber-100 text-amber-800 border border-amber-300"}`,children:yt?"✓ ডাটাবেজে আছে":"⚠ পাওয়া যায়নি"})]}),yt&&d.memberName.trim()?n.jsxs("div",{className:"mt-1 flex items-start gap-1.5 rounded-lg border border-emerald-300 bg-emerald-50 px-2 py-1",children:[n.jsx("span",{"aria-hidden":"true",className:"leading-[18px]",children:"👤"}),n.jsx("span",{className:"text-[12px] font-black leading-[18px] text-emerald-900",children:d.memberName})]}):null]}),n.jsxs("div",{children:[n.jsxs("div",{className:"mb-1 flex h-[24px] items-center justify-between gap-2",children:[n.jsx("label",{className:`${pn} !mb-0`,children:"Bank Name (ব্যাংকের নাম)"}),d.extraBanks.length===0&&n.jsx("button",{type:"button",onClick:En,title:"আরেকটি ব্যাংক + চেক নম্বর যোগ করুন (টেবিলে এক সারিতেই থাকবে)",className:"flex h-6 w-7 shrink-0 cursor-pointer items-center justify-center rounded-md border border-emerald-400 bg-emerald-100 text-sm font-black text-emerald-800 transition hover:bg-emerald-200",children:"＋"})]}),n.jsx(ub,{value:d.bankName,onChange:N=>A(de=>({...de,bankName:N})),className:Gt,extras:wn,placeholder:"Bank name"})]}),n.jsxs("div",{children:[n.jsxs("div",{className:"mb-1 flex h-[24px] items-center justify-between gap-2",children:[n.jsx("label",{className:`${pn} !mb-0`,children:"হিসাব নং"}),n.jsxs("label",{className:"flex cursor-pointer select-none items-center gap-1 rounded-md border border-sky-300 bg-sky-50 px-2 py-0.5 text-[10px] font-black text-sky-800 transition hover:bg-sky-100",title:"টিক দিলে এই হিসাব Bank Statement হিসেবে ধরা হবে — টেবিলে 📄 ব্যাজ দেখাবে",children:[n.jsx("input",{type:"checkbox",checked:!!d.bankStatement,onChange:N=>A(de=>({...de,bankStatement:N.target.checked})),className:"h-3.5 w-3.5 cursor-pointer accent-sky-600"}),n.jsx("span",{className:"whitespace-nowrap",children:"Bank Stmt"}),n.jsx("span",{className:"rounded bg-white px-1 text-[9px] font-black text-slate-500",children:d.bankStatement?"BS ✓":"—"})]})]}),Fe?n.jsxs("div",{className:"mb-1 flex items-center gap-1 rounded-md border border-amber-300 bg-amber-50 px-2 py-0.5 text-[10px] font-black text-amber-900",children:[n.jsx("span",{"aria-hidden":"true",children:"🔁"}),n.jsxs("span",{children:["আগেই ব্যবহার হয়েছে — মেম্বার কোড: ",n.jsx("span",{className:"font-mono",children:Fe})]})]}):null,n.jsx("input",{value:d.accountNo,onChange:N=>A(de=>({...de,accountNo:N.target.value})),className:Gt,inputMode:"numeric",pattern:"[0-9]*",autoComplete:"off",placeholder:"অ্যাকাউন্ট নম্বর"})]}),n.jsxs("div",{children:[n.jsx("label",{className:pn,children:"ক্যাটাগরি"}),n.jsx(Zn,{value:d.accountType,onChange:N=>A(de=>({...de,accountType:N})),options:mb,placeholder:"-- Select --",className:`${Gt} cursor-pointer`,noKeyboardOnMobile:!0})]}),n.jsxs("div",{children:[n.jsxs("div",{className:"mb-1 flex h-[24px] items-center justify-between gap-2",children:[n.jsx("label",{className:`${pn} !mb-0`,children:"Check No."}),n.jsxs("label",{"data-micr-toggle":"main",onMouseDown:N=>{document.activeElement===tt.current&&(Le.current=!0),N.preventDefault()},className:"flex cursor-pointer select-none items-center gap-1 rounded-md border border-emerald-300 bg-emerald-50 px-2 py-0.5 text-[10px] font-black text-emerald-800 transition hover:bg-emerald-100",title:"টিক দিলে টেবিলে MICR, টিক না দিলে NON MICR দেখাবে",children:[n.jsx("input",{type:"checkbox",checked:!!d.micr,onChange:N=>{const de=N.target.checked;A(oe=>({...oe,micr:de})),Le.current&&window.setTimeout(()=>{var oe;(oe=tt.current)==null||oe.focus(),Le.current=!1},0)},className:"h-3.5 w-3.5 cursor-pointer accent-emerald-600"}),n.jsx("span",{children:"MICR"}),n.jsx("span",{className:"rounded bg-white px-1 text-[9px] font-black text-slate-500",children:d.micr?"MICR":"NON MICR"})]})]}),n.jsx("input",{ref:tt,value:d.checkNo,onChange:N=>A(de=>({...de,checkNo:N.target.value})),className:Gt,inputMode:"numeric",pattern:"[0-9]*",autoComplete:"off"})]}),n.jsxs("div",{children:[n.jsx("label",{className:pn,children:"Disbursse (Amount)"}),n.jsx("input",{value:d.disbursse,onChange:N=>{const de=N.target.value;/^-?\d*\.?\d*$/.test(de)&&A(oe=>({...oe,disbursse:de}))},inputMode:"numeric",pattern:"[0-9]*",className:`${Gt} text-right font-mono`,autoComplete:"off"})]}),n.jsxs("div",{children:[n.jsx("label",{className:"mb-1 block h-[24px] truncate leading-[24px] text-[11px] font-black tracking-wide text-slate-600",children:"project"}),n.jsx(Zn,{value:(d.project||"").trim().toLowerCase(),onChange:N=>A(de=>({...de,project:N.trim().toLowerCase()})),options:V5(d.project),placeholder:"-- select project --",className:`${Gt} cursor-pointer uppercase`,noKeyboardOnMobile:!0})]})]}),d.extraBanks.length>0&&n.jsx("div",{className:"mt-3 space-y-2",children:d.extraBanks.map((N,de)=>n.jsxs(p.Fragment,{children:[de===d.extraBanks.length-1&&n.jsx("div",{className:"mb-1 flex justify-end",children:n.jsx("button",{type:"button",onClick:En,title:"আরেকটি ব্যাংক + চেক নম্বর যোগ করুন (টেবিলে এক সারিতেই থাকবে)",className:"flex h-6 w-7 cursor-pointer items-center justify-center rounded-md border border-emerald-400 bg-emerald-100 text-sm font-black text-emerald-800 transition hover:bg-emerald-200",children:"＋"})}),n.jsxs("div",{className:"grid grid-cols-[1fr_1fr_auto] items-end gap-2 rounded-xl border border-emerald-300 bg-emerald-50/60 p-2",children:[n.jsxs("div",{children:[n.jsxs("span",{className:"mb-1 block text-[10px] font-black tracking-wide text-emerald-800",children:["ব্যাংক #",de+2]}),n.jsx(ub,{value:N.bankName,onChange:oe=>Ct(de,"bankName",oe),className:Gt,extras:wn,placeholder:"Bank name"})]}),n.jsxs("div",{children:[n.jsxs("span",{className:"mb-1 flex items-center justify-between gap-1",children:[n.jsxs("span",{className:"block text-[10px] font-black tracking-wide text-emerald-800",children:["হিসাব নং #",de+2]}),n.jsxs("label",{className:"flex cursor-pointer select-none items-center gap-1 rounded-md border border-sky-300 bg-sky-50 px-1.5 py-0.5 text-[9px] font-black text-sky-800 transition hover:bg-sky-100",title:"টিক দিলে এই হিসাব (#{} নং) Bank Statement হিসেবে ধরা হবে",children:[n.jsx("input",{type:"checkbox",checked:!!N.bankStatement,onChange:oe=>Ct(de,"bankStatement",oe.target.checked),className:"h-3 w-3 cursor-pointer accent-sky-600"}),n.jsx("span",{className:"whitespace-nowrap",children:"Bank Stmt"}),n.jsx("span",{className:"rounded bg-white px-1 text-[8px] font-black text-slate-500",children:N.bankStatement?"BS ✓":"—"})]})]}),(()=>{const oe=ke(N.accountNo||"");return oe?n.jsxs("div",{className:"mb-1 flex items-center gap-1 rounded-md border border-amber-300 bg-amber-50 px-2 py-0.5 text-[10px] font-black text-amber-900",children:[n.jsx("span",{"aria-hidden":"true",children:"🔁"}),n.jsxs("span",{children:["আগেই ব্যবহার হয়েছে — মেম্বার কোড: ",n.jsx("span",{className:"font-mono",children:oe})]})]}):null})(),n.jsx("input",{value:N.accountNo||"",onChange:oe=>Ct(de,"accountNo",oe.target.value),className:Gt,inputMode:"numeric",pattern:"[0-9]*",placeholder:"অ্যাকাউন্ট নম্বর",autoComplete:"off"})]}),n.jsx("button",{type:"button",onClick:()=>Zs(de),title:"এই ব্যাংক জোড়া মুছুন",className:"h-9 w-9 shrink-0 cursor-pointer rounded-lg border border-rose-300 bg-rose-50 text-sm font-black text-rose-700 transition hover:bg-rose-100",children:"✕"}),n.jsxs("div",{className:"col-span-3 grid grid-cols-2 gap-2 border-t border-emerald-200/70 pt-2",children:[n.jsxs("div",{children:[n.jsxs("span",{className:"mb-1 block h-[24px] leading-[24px] text-[10px] font-black tracking-wide text-emerald-800",children:["ক্যাটাগরি #",de+2]}),n.jsx(Zn,{value:N.accountType||"",onChange:oe=>Ct(de,"accountType",oe),options:mb,placeholder:"-- Select --",className:`${Gt} cursor-pointer`,noKeyboardOnMobile:!0})]}),n.jsxs("div",{children:[n.jsxs("div",{className:"mb-1 flex h-[24px] items-center justify-between gap-2",children:[n.jsxs("span",{className:"block text-[10px] font-black tracking-wide text-emerald-800",children:["চেক নম্বর #",de+2]}),n.jsxs("label",{"data-micr-toggle":String(de),onMouseDown:oe=>oe.preventDefault(),className:"flex cursor-pointer select-none items-center gap-1 rounded-md border border-emerald-300 bg-emerald-50 px-1.5 py-0.5 text-[9px] font-black text-emerald-800 transition hover:bg-emerald-100",title:"টিক দিলে এই চেকটি MICR, টিক না দিলে NON MICR",children:[n.jsx("input",{type:"checkbox",checked:!!N.micr,onChange:oe=>Ct(de,"micr",oe.target.checked),className:"h-3.5 w-3.5 cursor-pointer accent-emerald-600"}),n.jsx("span",{children:"MICR"}),n.jsx("span",{className:"rounded bg-white px-1 text-[8px] font-black text-slate-500",children:N.micr?"MICR":"NON MICR"})]})]}),n.jsx("input",{value:N.checkNo,onChange:oe=>Ct(de,"checkNo",oe.target.value),className:Gt,inputMode:"numeric",pattern:"[0-9]*",placeholder:"Check No.",autoComplete:"off"})]})]})]})]},de))}),la.length>0&&n.jsxs("div",{className:"mt-3 rounded-xl border border-indigo-300 bg-indigo-50/70 p-3",children:[n.jsx("div",{className:"mb-2 flex flex-wrap items-center justify-between gap-2",children:n.jsxs("span",{className:"flex items-center gap-2 text-[11px] font-black text-indigo-900",children:["🔎 এই মেম্বার কোডের সেভ করা চেক এন্ট্রি",n.jsx("span",{className:"rounded bg-indigo-100 px-1.5 py-0.5 font-mono",children:la.length})]})}),n.jsx("div",{className:"space-y-1.5",children:la.map(N=>{const de=fl(N.checkDate),oe=(f==null?void 0:f.id)===N.id;return n.jsxs("div",{className:`flex flex-wrap items-center gap-2 rounded-lg border px-2.5 py-1.5 ${oe?"border-amber-300 bg-amber-50":"border-slate-200 bg-white"}`,children:[n.jsx("span",{className:"font-mono text-[11px] font-black text-slate-700",children:Ze(N.checkDate)||N.checkDate}),n.jsx("span",{className:"text-[11px] font-bold text-slate-600",children:Ea(N).map(Ne=>Ne.bankName).filter(Boolean).join(", ")}),n.jsx("span",{className:"font-mono text-[11px] font-black text-slate-900",children:Ea(N).map(Ne=>Ne.checkNo?`#${Ne.checkNo}`:"").filter(Boolean).join(", ")}),N.disbursse&&n.jsxs("span",{className:"font-mono text-[11px] font-bold text-emerald-700",children:["৳",Cn(N.disbursse)]}),N.project&&n.jsx("span",{className:"rounded bg-slate-100 px-1.5 py-0.5 text-[10px] font-bold text-slate-600 uppercase",children:String(N.project).trim().toUpperCase()}),n.jsx("span",{className:`rounded border px-1.5 py-0.5 text-[10px] font-black ${N.micr?"border-emerald-300 bg-emerald-100 text-emerald-800":"border-slate-300 bg-slate-100 text-slate-600"}`,children:N.micr?"MICR":"NON MICR"}),n.jsxs("div",{className:"ml-auto flex items-center gap-1",children:[de,oe&&n.jsx("span",{className:"rounded border border-amber-300 bg-amber-100 px-1.5 py-0.5 text-[10px] font-black text-amber-800",children:"✏️ এডিট মোড"}),n.jsx("button",{type:"button",onClick:()=>Dt(N),disabled:oe,title:"এই এন্ট্রি এডিট করুন",className:"rounded-lg border border-blue-200 bg-blue-50 px-2 py-1 text-[11px] font-bold text-blue-700 transition hover:bg-blue-100 disabled:cursor-not-allowed disabled:opacity-40",children:"✏️ এডিট"}),n.jsx("button",{type:"button",onClick:()=>fe(N),disabled:de,title:"এই এন্ট্রি মুছে ফেলুন",className:"rounded-lg border border-rose-200 bg-rose-50 px-2 py-1 text-[11px] font-bold text-rose-700 transition hover:bg-rose-100 disabled:cursor-not-allowed disabled:opacity-40",children:"🗑️ ডিলিট"})]})]},N.id)})})]}),G==="idle"?null:yt?n.jsxs("div",{className:"mt-3 rounded-xl border border-emerald-300 bg-emerald-50 p-3",children:[n.jsxs("div",{className:"mb-2 flex items-center gap-2 text-[11px] font-black text-emerald-900",children:[n.jsx("span",{children:"✓"}),n.jsx("span",{children:"ডাটাবেজ থেকে তথ্য নেওয়া হয়েছে — শুধু তারিখ, মেম্বার কোড, ব্যাংক, চেক নম্বর, বিতরণ ও প্রকল্প এন্ট্রি করুন"})]}),n.jsxs("div",{className:"grid grid-cols-1 gap-3 sm:grid-cols-3",children:[n.jsxs("div",{children:[n.jsx("label",{className:"mb-1 block text-[11px] font-black uppercase tracking-wide text-emerald-800",children:"Member Name"}),n.jsx("div",{className:Ra,children:d.memberName||"—"})]}),n.jsxs("div",{children:[n.jsx("label",{className:"mb-1 block text-[11px] font-black uppercase tracking-wide text-emerald-800",children:"Centre Code"}),n.jsx("div",{className:Ra,children:d.centreCode||"—"})]}),n.jsxs("div",{children:[n.jsx("label",{className:"mb-1 block text-[11px] font-black uppercase tracking-wide text-emerald-800",children:"Centre Name"}),n.jsx("div",{className:Ra,children:d.centreName||"—"})]})]})]}):n.jsxs("div",{className:"mt-3 rounded-xl border-2 border-amber-400 bg-amber-50 p-3",children:[n.jsxs("div",{className:"mb-2 flex items-center gap-2 text-[11px] font-black text-amber-900",children:[n.jsx("span",{children:"⚠️"}),n.jsxs("span",{children:["এই মেম্বার কোড ডাটাবেজে নেই — টেবিলের ",n.jsx("u",{children:"সব ঘর"})," পূরণ করতে হবে। সেভ করলে মেম্বারটি ডাটাবেজেও যোগ হয়ে যাবে।"]})]}),n.jsxs("div",{className:"grid grid-cols-1 gap-3 sm:grid-cols-3",children:[n.jsxs("div",{children:[n.jsxs("label",{className:"mb-1 block text-[11px] font-black uppercase tracking-wide text-amber-800",children:["Member Name ",n.jsx("span",{className:"text-rose-600",children:"*"})]}),n.jsx("input",{value:d.memberName,onChange:N=>A(de=>({...de,memberName:N.target.value})),placeholder:"মেম্বারের নাম",className:Gt,autoComplete:"off"})]}),n.jsxs("div",{children:[n.jsxs("label",{className:"mb-1 block text-[11px] font-black uppercase tracking-wide text-amber-800",children:["Centre Code ",n.jsx("span",{className:"text-rose-600",children:"*"})]}),n.jsx("input",{value:d.centreCode,inputMode:"numeric",pattern:"[0-9]*",onChange:N=>A(de=>({...de,centreCode:N.target.value})),placeholder:"সেন্টার কোড",className:Gt,autoComplete:"off"})]}),n.jsxs("div",{children:[n.jsxs("label",{className:"mb-1 block text-[11px] font-black uppercase tracking-wide text-amber-800",children:["Centre Name ",n.jsx("span",{className:"text-rose-600",children:"*"})]}),n.jsx("input",{value:d.centreName,onChange:N=>A(de=>({...de,centreName:N.target.value})),placeholder:"সেন্টারের নাম",className:Gt,autoComplete:"off"})]})]})]}),n.jsxs("div",{className:"mt-4 flex flex-wrap items-center gap-2",children:[n.jsx("button",{type:"button",onClick:Zt,disabled:lt,className:"rounded-xl bg-indigo-600 px-4 py-2 text-sm font-black text-white shadow-sm transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-50",children:f?"💾 আপডেট করুন":"＋ সেভ করুন"}),n.jsx("button",{type:"button",onClick:()=>{x(null),A(Fi(d.checkDate)),K("idle"),C(null)},className:"rounded-xl bg-slate-200 px-4 py-2 text-sm font-bold text-slate-700 transition hover:bg-slate-300",children:"রিসেট"}),ue&&n.jsx("span",{className:`rounded-lg px-3 py-1.5 text-[11px] font-bold ${ue.kind==="ok"?"bg-emerald-50 text-emerald-800 border border-emerald-300":ue.kind==="warn"?"bg-amber-50 text-amber-800 border border-amber-300":"bg-rose-50 text-rose-800 border border-rose-300"}`,children:ue.text})]})]}),n.jsxs("div",{className:"rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-4 lg:p-3.5",children:[n.jsxs("div",{className:"mb-3 flex flex-wrap items-center justify-between gap-2",children:[n.jsx("h2",{className:"text-base font-black text-slate-900 sm:text-lg",children:"🧾 Check List"}),n.jsxs("div",{className:"flex flex-wrap items-center gap-2 text-[11px] font-bold text-slate-600",children:[n.jsxs("span",{className:"rounded-lg border border-slate-200 bg-slate-100 px-2 py-1",children:["মোট এন্ট্রি: ",n.jsx("span",{className:"font-mono",children:u.length.toLocaleString("en-IN")})]}),n.jsxs("span",{className:"rounded-lg border border-slate-200 bg-slate-100 px-2 py-1",children:["মেম্বার: ",n.jsx("span",{className:"font-mono",children:os.toLocaleString("en-IN")})]}),n.jsxs("span",{className:"rounded-lg border border-amber-300 bg-amber-50 px-2 py-1 text-amber-800",children:["↩ Return: ",n.jsx("span",{className:"font-mono",children:Ps.toLocaleString("en-IN")})]}),(h||M)&&n.jsxs("span",{className:"rounded-lg border border-blue-200 bg-blue-50 px-2 py-1 text-blue-800",children:["ফিল্টার: ",n.jsx("span",{className:"font-mono",children:nt.length})]})]})]}),n.jsxs("div",{className:"mb-3 flex flex-wrap items-stretch gap-2",children:[n.jsx("div",{className:"w-[8.5rem] sm:w-44 shrink-0",children:n.jsx(Zn,{value:S,onChange:N=>b(N),noKeyboardOnMobile:!0,options:$5,placeholder:"🔍 সব কলাম",className:"w-full h-full cursor-pointer rounded-xl border border-slate-300 bg-white px-2.5 py-2.5 text-xs sm:text-sm font-bold text-slate-800 focus:border-blue-500 focus:outline-none"})}),n.jsxs("div",{className:"relative order-3 basis-full shrink-0 sm:order-none sm:basis-auto sm:flex-1 sm:min-w-0",children:[n.jsx("span",{className:"pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400",children:"🔍"}),n.jsx("input",{value:h,inputMode:Ab.includes(S)?"numeric":void 0,pattern:Ab.includes(S)?"[0-9]*":void 0,onChange:N=>v(N.target.value),placeholder:W5[S],className:"w-full rounded-xl border border-slate-300 bg-orange-50 py-2.5 pl-10 pr-28 text-sm font-semibold text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200",autoComplete:"off"}),(h.trim()||M)&&nt.length>0&&n.jsxs("button",{type:"button",onClick:()=>I(!0),title:"মিলে যাওয়া এন্ট্রিগুলো টেবিল আকারে ফুল স্ক্রিনে দেখুন — একাধিক এন্ট্রি উপর-নিচ সারি হিসেবে, এডিট/ডিলিট/Return সহ",className:"absolute right-11 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg border border-blue-300 bg-blue-50 px-2 py-1 text-[11px] font-black text-blue-700 transition hover:bg-blue-100 cursor-pointer",children:["👁 View (",nt.length,")"]}),h&&n.jsx("button",{type:"button",onClick:()=>v(""),className:"absolute right-2 top-1/2 -translate-y-1/2 rounded-lg px-2 py-1 text-sm font-bold text-slate-400 hover:text-slate-700",children:"✕"})]}),n.jsxs("div",{className:"relative shrink-0",children:[n.jsxs("button",{type:"button",onClick:()=>{le((M==null?void 0:M.from)||""),Y((M==null?void 0:M.to)||""),ge(N=>!N)},title:"তারিখ হতে তারিখ ফিল্টার — নির্দিষ্ট সীমার চেক এন্ট্রি দেখুন",className:`flex h-full cursor-pointer items-center gap-1 whitespace-nowrap rounded-xl border px-3 py-2 text-[11px] font-black transition ${M?"border-sky-600 bg-sky-600 text-white shadow":"border-slate-300 bg-orange-50 text-slate-700 hover:border-sky-400 hover:text-sky-700"}`,children:["📅 ",M?`${xb(M.from)} → ${xb(M.to)}`:"তারিখ"]}),B&&n.jsxs("div",{className:"absolute right-0 top-full z-40 mt-1.5 w-64 rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl",children:[n.jsxs("div",{className:"mb-2 flex items-center justify-between",children:[n.jsx("span",{className:"text-xs font-black text-slate-800",children:"📅 তারিখ হতে তারিখ"}),n.jsx("button",{type:"button",onClick:()=>ge(!1),className:"rounded px-1.5 text-sm font-black text-slate-400 hover:text-slate-700",children:"✕"})]}),n.jsxs("div",{className:"mb-2",children:[n.jsx("label",{className:"mb-1 block text-[10px] font-black text-slate-600",children:"হতে"}),n.jsx(hn,{value:y,onChange:le,manualEntry:!0,className:"px-2.5 py-1.5 text-xs"})]}),n.jsxs("div",{className:"mb-3",children:[n.jsx("label",{className:"mb-1 block text-[10px] font-black text-slate-600",children:"পর্যন্ত"}),n.jsx(hn,{value:te,onChange:Y,manualEntry:!0,className:"px-2.5 py-1.5 text-xs"})]}),n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("button",{type:"button",onClick:bl,className:"flex-1 rounded-lg bg-emerald-600 px-3 py-1.5 text-[11px] font-black text-white transition hover:bg-emerald-700",children:"✔ প্রয়োগ"}),n.jsx("button",{type:"button",onClick:pl,disabled:!M&&!y&&!te,className:"rounded-lg bg-rose-50 px-3 py-1.5 text-[11px] font-black text-rose-700 transition hover:bg-rose-100 disabled:opacity-40",children:"✕ মুছুন"})]})]})]}),M&&n.jsx("button",{type:"button",onClick:pl,title:"তারিখ ফিল্টার রিসেট — সব তারিখের এন্ট্রি দেখুন",className:"flex h-full shrink-0 cursor-pointer items-center gap-1 whitespace-nowrap rounded-xl border border-amber-400 bg-amber-50 px-3 py-2 text-[11px] font-black text-amber-800 shadow-sm transition hover:border-amber-500 hover:bg-amber-100",children:"↺ রিসেট"}),M&&n.jsxs("button",{type:"button",onClick:()=>ee(!0),title:"তারিখ-সীমার সব এন্ট্রি — সকল তথ্যসহ PDF/প্রিন্ট ভিউ",className:"flex h-full shrink-0 cursor-pointer items-center gap-1 whitespace-nowrap rounded-xl border border-rose-600 bg-rose-600 px-3 py-2 text-[11px] font-black text-white shadow transition hover:border-rose-700 hover:bg-rose-700",children:["📄 PDF (",nt.length,")"]})]}),n.jsx("div",{className:"overflow-hidden rounded-xl border border-slate-200",children:n.jsx("div",{tabIndex:0,onKeyDown:fb,className:"max-h-[80vh] overflow-auto focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-400 rounded-md",title:"Arrow কি চাপলে টেবিল স্ক্রল হবে",children:n.jsxs("table",{className:"w-full min-w-[980px] border-collapse text-sm",children:[n.jsx("thead",{className:"sticky top-0 z-10 bg-slate-800 text-white",children:n.jsx("tr",{children:um.map(N=>n.jsx("th",{className:"whitespace-nowrap border-r border-slate-700 px-2 py-2 text-left text-[11px] font-black uppercase tracking-wide last:border-r-0",children:N},N))})}),n.jsx("tbody",{children:oa.length===0?n.jsx("tr",{children:n.jsx("td",{colSpan:14,className:"px-4 py-10 text-center text-sm font-semibold text-slate-500",children:h?"🔍 এই অনুসন্ধানে চেক লিস্টে কোনো ডাটা পাওয়া যায়নি।":"এখনো কোনো চেক এন্ট্রি নেই — উপরের ফর্ম থেকে যোগ করুন।"})}):Ta})]})})}),Tt.length>0&&n.jsx("div",{className:"mt-3 flex items-center justify-center",children:n.jsxs("span",{className:"rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-[11px] font-bold text-slate-600",children:["মোট ",n.jsx("span",{className:"font-mono",children:Tt.length})," টি চেক — ↕ স্ক্রল করে সব এন্ট্রি দেখুন"]})})]}),n.jsxs("div",{className:"mt-5 lg:mt-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-4 lg:p-3.5",children:[n.jsxs("div",{className:"mb-3 flex flex-wrap items-center justify-between gap-2",children:[n.jsx("h2",{className:"text-base font-black text-slate-900 sm:text-lg",children:"↩ Return Table"}),n.jsxs("div",{className:"flex flex-wrap items-center gap-2 text-[11px] font-bold text-slate-600",children:[n.jsxs("span",{className:"rounded-lg border border-amber-300 bg-amber-50 px-2 py-1 text-amber-800",children:["রিটার্ন এন্ট্রি: ",n.jsx("span",{className:"font-mono",children:ra.length.toLocaleString("en-IN")})]}),n.jsx("span",{className:"rounded-lg border border-slate-200 bg-slate-100 px-2 py-1",children:"Return ঘরের টিক তুললে এন্ট্রি চেক লিস্টে ফিরে যায়"})]})]}),n.jsx("div",{className:"overflow-hidden rounded-xl border border-slate-200",children:n.jsx("div",{tabIndex:0,onKeyDown:fb,className:"max-h-[80vh] overflow-auto focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-400 rounded-md",title:"Arrow কি চাপলে টেবিল স্ক্রল হবে",children:n.jsxs("table",{className:"w-full min-w-[980px] border-collapse text-sm",children:[n.jsx("thead",{className:"sticky top-0 z-10 bg-slate-800 text-white",children:n.jsx("tr",{children:um.map(N=>n.jsx("th",{className:"whitespace-nowrap border-r border-slate-700 px-2 py-2 text-left text-[11px] font-black uppercase tracking-wide last:border-r-0",children:N},N))})}),n.jsx("tbody",{children:Ua.length===0?n.jsx("tr",{children:n.jsx("td",{colSpan:14,className:"px-4 py-10 text-center text-sm font-semibold text-slate-500",children:h?"🔍 এই অনুসন্ধানে Return টেবিলে কোনো ডাটা পাওয়া যায়নি।":"Return টেবিলে কোনো এন্ট্রি নেই — চেক লিস্টের Return ঘরে টিক দিন।"})}):ga})]})})}),ka>1&&n.jsxs("div",{className:"mt-3 flex flex-wrap items-center justify-between gap-2",children:[n.jsxs("span",{className:"text-[11px] font-bold text-slate-600",children:["পেজ ",n.jsx("span",{className:"font-mono",children:j})," / ",n.jsx("span",{className:"font-mono",children:ka})," —"," ","মোট ",n.jsx("span",{className:"font-mono",children:ra.length})," রেকর্ড"]}),n.jsxs("div",{className:"flex items-center gap-1",children:[n.jsx("button",{type:"button",onClick:()=>O(N=>Math.max(1,N-1)),disabled:j===1,className:"rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-bold text-slate-700 transition hover:bg-slate-100 disabled:opacity-40",children:"‹ আগের"}),n.jsx("button",{type:"button",onClick:()=>O(N=>Math.min(ka,N+1)),disabled:j===ka,className:"rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-bold text-slate-700 transition hover:bg-slate-100 disabled:opacity-40",children:"পরের ›"})]})]})]}),R&&n.jsx("div",{className:"fixed inset-0 z-[60] overflow-hidden bg-slate-950/80 backdrop-blur-sm",children:n.jsxs("div",{className:"flex h-full flex-col overflow-hidden bg-slate-50 shadow-2xl sm:m-2 sm:rounded-2xl",children:[n.jsxs("div",{className:"flex shrink-0 items-center justify-between gap-2 border-b border-slate-200 bg-white px-3 py-2 sm:px-4",children:[n.jsxs("div",{className:"flex min-w-0 items-center gap-2",children:[n.jsx("span",{className:"text-xl",children:"👁"}),n.jsxs("div",{className:"min-w-0",children:[n.jsxs("h3",{className:"truncate text-base font-black text-slate-900",children:["সার্চ ফলাফল — “",h.trim()||"তারিখ ফিল্টার","”"]}),n.jsxs("p",{className:"text-xs font-bold text-slate-500",children:[sa.length,"টি এন্ট্রি • চেক লিস্ট: ",Tt.length," • Return:"," ",ra.length]})]})]}),n.jsx("button",{type:"button",onClick:()=>I(!1),className:"shrink-0 cursor-pointer rounded-xl bg-rose-600 px-3.5 py-2 text-sm font-black text-white shadow transition hover:bg-rose-700",children:"✕ ক্লোজ"})]}),n.jsx("div",{className:"min-h-0 flex-1 overflow-auto p-2 sm:p-3",children:nt.length===0?n.jsx("div",{className:"flex h-full items-center justify-center text-sm font-bold text-slate-500",children:"কোনো এন্ট্রি নেই"}):n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"hidden overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm md:block",children:[n.jsxs("table",{className:"w-full min-w-[980px] border-collapse text-sm",children:[n.jsx("thead",{className:"sticky top-0 z-10 bg-slate-800 text-white",children:n.jsx("tr",{children:um.map(N=>n.jsx("th",{className:"whitespace-nowrap border-r border-slate-700 px-2 py-2 text-left text-[11px] font-black uppercase tracking-wide last:border-r-0",children:N},N))})}),n.jsx("tbody",{children:vn})]}),Da.some(N=>N.dupes.length>0)&&n.jsx("p",{className:"border-t border-amber-200 bg-amber-50 px-2 py-1 text-[10px] font-black text-amber-800",children:"⚠️ একই চেকের হুবহু একই তথ্য একাধিক এন্ট্রিতে আছে — প্রতিটি একবারই দেখানো হয়েছে (সাম্প্রতিকতম তারিখের এন্ট্রি)।"})]}),n.jsx("div",{className:"space-y-2 md:hidden",children:Da.map((N,de)=>{const oe=N.row,Ne=N.dupes,we=fl(oe.checkDate),Te=Ea(oe),on=[];Te.forEach((at,Xe)=>{const ot=(at.accountType||"").trim(),Et=ot==="মেম্বার"?"member":ot==="জামিনদার-১"?"g1":ot==="জামিনদার-২"?"g2":Xe===0?"member":"other";let Mn=on.find(zs=>zs.key===Et);Mn||(Mn={key:Et,items:[],...Et==="member"?{title:"👤 মেম্বার তথ্য",head:"text-indigo-800",box:"border-indigo-200 bg-indigo-50/70"}:Et==="g1"?{title:"🤝 জামিনদার-১ তথ্য",head:"text-teal-800",box:"border-teal-200 bg-teal-50/70"}:Et==="g2"?{title:"🤝 জামিনদার-২ তথ্য",head:"text-amber-800",box:"border-amber-200 bg-amber-50/70"}:{title:"ℹ️ অন্যান্য ব্যাংক তথ্য — ক্যাটাগরি দেওয়া নেই",head:"text-slate-700",box:"border-slate-200 bg-slate-50"}},on.push(Mn)),Mn.items.push({b:at,bi:Xe})});const Je={member:0,g1:1,g2:2,other:3};on.sort((at,Xe)=>Je[at.key]-Je[Xe.key]);const Jn=on.some(at=>at.key==="member"),zt=({label:at,children:Xe})=>n.jsxs("div",{className:"flex items-start justify-between gap-2 border-b border-slate-100 py-1 last:border-b-0",children:[n.jsx("span",{className:"shrink-0 pt-0.5 text-[10px] font-black uppercase tracking-wide text-slate-500",children:at}),n.jsx("span",{className:"min-w-0 max-w-[62%] text-right text-xs font-bold text-slate-900",children:Xe})]});return n.jsxs("div",{className:`rounded-xl border p-2 shadow-sm ${oe.returned?"border-amber-300 bg-amber-50":"border-slate-200 bg-white"}`,children:[n.jsxs("div",{className:"mb-1 flex items-center justify-between gap-2 border-b border-slate-200 pb-1.5",children:[n.jsxs("span",{className:"flex min-w-0 items-center gap-1.5",children:[n.jsx("span",{className:"inline-flex h-4 w-4 shrink-0 items-center justify-center rounded bg-slate-800 font-mono text-[9px] font-black text-white",children:de+1}),n.jsx("span",{className:"truncate font-mono text-sm font-black text-indigo-700",children:oe.memberCode}),oe.foundInDb===!1&&n.jsx("span",{className:"shrink-0 rounded bg-amber-100 px-1 py-0.5 text-[9px] font-black text-amber-800",children:"NEW"})]}),n.jsxs("span",{className:"flex shrink-0 items-center gap-1 text-[11px] font-bold text-slate-600",children:[oe.returned&&n.jsxs("span",{className:"rounded border border-amber-400 bg-amber-100 px-1.5 py-0.5 text-[10px] font-black text-amber-800",children:["↩ RETURN",oe.returnDate?` (${Ze(oe.returnDate)||oe.returnDate})`:""]}),we,"📅 ",Ze(oe.checkDate)||oe.checkDate]})]}),Ne.length>0&&n.jsxs("p",{className:"mb-1 rounded-md border border-amber-300 bg-amber-50 px-1.5 py-0.5 text-[9px] font-black text-amber-900",children:["⚠️ একই চেকের হুবহু একই তথ্য ",Ne.length+1,"টি এন্ট্রিতে আছে (তারিখ:"," ",[oe.checkDate,...Ne.map(at=>at.checkDate)].sort().map(at=>Ze(at)||at).join(", "),") — সাম্প্রতিকতমটি একবার দেখানো হয়েছে"]}),n.jsx(zt,{label:"সদস্যের নাম",children:oe.memberName||"—"}),n.jsx(zt,{label:"সেন্টার কোড",children:n.jsx("span",{className:"font-mono",children:oe.centreCode||"—"})}),n.jsx(zt,{label:"সেন্টার নাম",children:oe.centreName||"—"}),on.map(at=>n.jsxs("div",{className:`mt-1.5 rounded-lg border px-2 py-1 ${at.box}`,children:[n.jsx("p",{className:`text-[10px] font-black ${at.head}`,children:at.title}),n.jsx(zt,{label:"ব্যাংকের নাম",children:n.jsx("div",{className:"flex flex-col items-end gap-0.5",children:at.items.map(({b:Xe,bi:ot})=>n.jsx("span",{children:Xe.bankName||"—"},ot))})}),n.jsx(zt,{label:"চেক নম্বর",children:n.jsxs("div",{className:"flex flex-col items-end gap-0.5",children:[at.items.map(({b:Xe,bi:ot})=>n.jsx("span",{className:"font-mono font-black",children:Xe.checkNo||"—"},ot)),at.key==="member"&&oe.reissuedTo&&n.jsxs("span",{className:"whitespace-nowrap rounded border border-teal-300 bg-teal-50 px-1.5 py-0.5 text-[9px] font-black text-teal-800",title:`এই চেকটি রি-ইস্যু হয়েছে — নতুন চেক #${oe.reissuedTo.checkNo}`,children:["🔁 Reissued ",Ze(oe.reissuedTo.date)||oe.reissuedTo.date," → #",oe.reissuedTo.checkNo]}),at.key==="member"&&oe.reissuedFrom&&n.jsxs("span",{className:"whitespace-nowrap rounded border border-orange-300 bg-orange-50 px-1.5 py-0.5 text-[9px] font-black text-orange-800",children:["🔁 Reissue — পুরনো #",oe.reissuedFrom.checkNo," (",Ze(oe.reissuedFrom.checkDate)||oe.reissuedFrom.checkDate,")"]}),at.key==="member"&&kt(oe)]})}),n.jsx(zt,{label:"MICR",children:n.jsx("div",{className:"flex flex-col items-end gap-0.5",children:at.items.map(({b:Xe,bi:ot})=>n.jsx("span",{className:`rounded border px-1.5 py-0.5 text-[9px] font-black ${Xe.micr?"border-emerald-300 bg-emerald-100 text-emerald-800":"border-slate-300 bg-slate-100 text-slate-600"}`,children:Xe.micr?"MICR":"NON MICR"},ot))})}),n.jsx(zt,{label:"হিসাব নং",children:at.items.some(({b:Xe})=>Xe.accountNo||Xe.accountType)?n.jsx("div",{className:"flex flex-col items-end gap-0.5",children:at.items.map(({b:Xe,bi:ot})=>Xe.accountNo||Xe.accountType?n.jsxs("span",{className:"inline-flex items-center gap-1",children:[n.jsx("span",{className:"font-mono font-black",children:Xe.accountNo||"—"}),Xe.accountType&&n.jsx("span",{className:`rounded px-1 py-0.5 text-[9px] font-black ${Xe.accountType==="মেম্বার"?"bg-indigo-100 text-indigo-800":"bg-teal-100 text-teal-800"}`,children:Xe.accountType})]},ot):null)}):"—"})]},at.key)),(oe.reissuedTo||oe.reissuedFrom)&&!Jn&&n.jsx(zt,{label:"রি-ইস্যু",children:n.jsxs("div",{className:"flex flex-col items-end gap-0.5",children:[oe.reissuedTo&&n.jsxs("span",{className:"whitespace-nowrap rounded border border-teal-300 bg-teal-50 px-1.5 py-0.5 text-[9px] font-black text-teal-800",children:["🔁 Reissued ",Ze(oe.reissuedTo.date)||oe.reissuedTo.date," → #",oe.reissuedTo.checkNo]}),oe.reissuedFrom&&n.jsxs("span",{className:"whitespace-nowrap rounded border border-orange-300 bg-orange-50 px-1.5 py-0.5 text-[9px] font-black text-orange-800",children:["🔁 Reissue — পুরনো #",oe.reissuedFrom.checkNo," (",Ze(oe.reissuedFrom.checkDate)||oe.reissuedFrom.checkDate,")"]}),kt(oe)]})}),n.jsx(zt,{label:"Disbursse",children:n.jsx("span",{className:"font-mono",children:oe.disbursse?`৳${Cn(oe.disbursse)}`:"—"})}),n.jsx(zt,{label:"Project",children:n.jsx("span",{className:"uppercase",children:oe.project?String(oe.project).trim().toUpperCase():"—"})}),n.jsxs("div",{className:"mt-1.5 flex items-center justify-between gap-1.5 border-t border-slate-200 pt-1.5",children:[n.jsxs("label",{className:`flex items-center gap-1.5 rounded-lg border px-2 py-1 text-[11px] font-black ${oe.returned?"border-amber-400 bg-amber-100 text-amber-900":"border-slate-300 bg-slate-100 text-slate-700"} cursor-pointer`,title:oe.returned?"টিক তুললে এন্ট্রিটি চেক লিস্টে ফিরে যাবে":"টিক দিলে এন্ট্রিটি Return টেবিলে চলে যাবে",children:[n.jsx("input",{type:"checkbox",checked:!!oe.returned,disabled:we,onChange:()=>_s(oe),className:"h-3.5 w-3.5 accent-amber-600 disabled:cursor-not-allowed"}),"↩ Return"]}),n.jsxs("div",{className:"flex items-center gap-1",children:[n.jsx("button",{type:"button",disabled:we,onClick:()=>Dt(oe),title:"এডিট করুন",className:"cursor-pointer rounded-lg border border-blue-200 bg-blue-50 px-2 py-1 text-xs text-blue-700 transition hover:bg-blue-100 disabled:cursor-not-allowed disabled:opacity-40",children:"✏️"}),n.jsx("button",{type:"button",disabled:we,onClick:()=>fe(oe),title:"মুছে ফেলুন",className:"cursor-pointer rounded-lg border border-rose-200 bg-rose-50 px-2 py-1 text-xs text-rose-700 transition hover:bg-rose-100 disabled:cursor-not-allowed disabled:opacity-40",children:"🗑️"})]})]})]},oe.id)})})]})})]})}),re&&M&&n.jsx("div",{className:"check-pdf-modal fixed inset-0 z-[65] overflow-hidden bg-slate-950/80 backdrop-blur-sm",children:n.jsxs("div",{className:"check-pdf-shell flex h-full flex-col overflow-hidden bg-white shadow-2xl sm:m-2 sm:rounded-2xl",children:[n.jsxs("div",{className:"no-print flex shrink-0 items-center justify-between gap-2 border-b border-slate-200 bg-white px-3 py-2 sm:px-4",children:[n.jsxs("div",{className:"flex min-w-0 items-center gap-2",children:[n.jsx("span",{className:"text-xl",children:"📄"}),n.jsxs("div",{className:"min-w-0",children:[n.jsx("h3",{className:"truncate text-base font-black text-slate-900",children:"PDF ভিউ — তারিখ হতে তারিখ চেক এন্ট্রি"}),n.jsxs("p",{className:"text-xs font-bold text-slate-500",children:["📅 ",Ze(M.from)||M.from," হতে"," ",Ze(M.to)||M.to," • মোট"," ",n.jsx("span",{className:"font-mono",children:nt.length}),"টি এন্ট্রি (চেক লিস্ট"," ",n.jsx("span",{className:"font-mono",children:Tt.length})," • Return"," ",n.jsx("span",{className:"font-mono",children:ra.length}),")",h.trim()?` • 🔍 সার্চ: "${h.trim()}" প্রয়োগ আছে`:""]})]})]}),n.jsxs("div",{className:"flex shrink-0 items-center gap-2",children:[n.jsx("button",{type:"button",onClick:()=>window.print(),title:"প্রিন্ট / Save as PDF ডায়ালগ খুলবে",className:"cursor-pointer rounded-xl bg-emerald-600 px-3.5 py-2 text-sm font-black text-white shadow transition hover:bg-emerald-700",children:"🖨️ প্রিন্ট / PDF সেভ"}),n.jsx("button",{type:"button",onClick:()=>ee(!1),className:"cursor-pointer rounded-xl bg-rose-600 px-3.5 py-2 text-sm font-black text-white shadow transition hover:bg-rose-700",children:"✕ ক্লোজ"})]})]}),n.jsxs("div",{className:"no-print shrink-0 border-b border-emerald-200 bg-emerald-50 px-3 py-1.5 text-[11px] font-bold text-emerald-900 sm:px-4",children:["💡 “🖨️ প্রিন্ট / PDF সেভ” চাপলে প্রিন্ট ডায়ালগ আসবে — সেখানে Destination হিসেবে"," ",n.jsx("span",{className:"font-black",children:"“Save as PDF”"})," বেছে নিলেই PDF ফাইল ডাউনলোড হবে (ল্যান্ডস্কেপ আকারে)।"]}),n.jsxs("div",{className:"check-pdf-scroll min-h-0 flex-1 overflow-auto bg-slate-100 p-2 sm:p-4",children:[n.jsx("style",{children:Y5}),n.jsxs("div",{id:"check-pdf-document",className:"mx-auto bg-white p-3 shadow sm:p-5",style:{maxWidth:"1240px"},children:[n.jsxs("div",{className:"mb-3 text-center",children:[n.jsx("h1",{className:"text-base font-black text-slate-900 sm:text-lg",children:"চেক এন্ট্রি রিপোর্ট"}),n.jsxs("p",{className:"mt-0.5 text-[11px] font-bold text-slate-600",children:["তারিখ: ",n.jsx("span",{className:"font-mono",children:Ze(M.from)||M.from})," ","হতে ",n.jsx("span",{className:"font-mono",children:Ze(M.to)||M.to})," পর্যন্ত • মোট এন্ট্রি: ",n.jsx("span",{className:"font-mono",children:nt.length}),h.trim()?` • সার্চ: "${h.trim()}"`:"","• মোট Disbursse: ",n.jsxs("span",{className:"font-mono",children:["৳",Cn(String(ls))]})]})]}),nt.length===0?n.jsx("p",{className:"py-8 text-center text-xs font-bold text-slate-500",children:"এই তারিখ-সীমায় কোনো এন্ট্রি নেই"}):n.jsxs("table",{className:"w-full border-collapse text-[11px]",children:[n.jsx("thead",{children:n.jsx("tr",{className:"bg-slate-100",children:["Sr","তারিখ","মেম্বার কোড","সদস্যের নাম","সেন্টার কোড","সেন্টার নাম","ব্যাংকের নাম","চেক নম্বর","MICR","হিসাব নং","ক্যাটাগরি","Disbursse (৳)","Project","Return","রি-ইস্যু তথ্য"].map(N=>n.jsx("th",{className:"whitespace-nowrap border border-slate-300 px-1.5 py-1 text-left text-[10px] font-black text-slate-700",children:N},N))})}),n.jsx("tbody",{children:nt.map((N,de)=>{const oe=Ea(N);return n.jsxs("tr",{className:de%2?"bg-slate-50":"bg-white",children:[n.jsx("td",{className:"border border-slate-300 px-1.5 py-1 font-mono font-bold text-slate-500",children:de+1}),n.jsx("td",{className:"whitespace-nowrap border border-slate-300 px-1.5 py-1 font-mono font-bold",children:Ze(N.checkDate)||N.checkDate}),n.jsxs("td",{className:"border border-slate-300 px-1.5 py-1 font-mono font-black text-indigo-700",children:[N.memberCode,N.foundInDb===!1?" (NEW)":""]}),n.jsx("td",{className:"border border-slate-300 px-1.5 py-1 font-semibold",children:N.memberName}),n.jsx("td",{className:"border border-slate-300 px-1.5 py-1 font-mono",children:N.centreCode}),n.jsx("td",{className:"border border-slate-300 px-1.5 py-1",children:N.centreName}),n.jsx("td",{className:"border border-slate-300 px-1.5 py-1",children:n.jsx("div",{className:"flex flex-col",children:oe.map((Ne,we)=>n.jsx("span",{children:Ne.bankName||"—"},we))})}),n.jsx("td",{className:"border border-slate-300 px-1.5 py-1 font-mono font-black",children:n.jsx("div",{className:"flex flex-col",children:oe.map((Ne,we)=>n.jsx("span",{children:Ne.checkNo||"—"},we))})}),n.jsx("td",{className:"border border-slate-300 px-1.5 py-1 text-center",children:n.jsx("div",{className:"flex flex-col",children:oe.map((Ne,we)=>n.jsx("span",{className:Ne.micr?"font-black text-emerald-700":"font-bold text-slate-500",children:Ne.micr?"MICR":"NON MICR"},we))})}),n.jsx("td",{className:"border border-slate-300 px-1.5 py-1 font-mono",children:n.jsx("div",{className:"flex flex-col",children:oe.map((Ne,we)=>n.jsx("span",{children:Ne.accountNo||"—"},we))})}),n.jsx("td",{className:"border border-slate-300 px-1.5 py-1",children:n.jsx("div",{className:"flex flex-col",children:oe.map((Ne,we)=>n.jsx("span",{children:Ne.accountType||"—"},we))})}),n.jsx("td",{className:"border border-slate-300 px-1.5 py-1 text-right font-mono font-black",children:N.disbursse?Cn(N.disbursse):"—"}),n.jsx("td",{className:"border border-slate-300 px-1.5 py-1 uppercase",children:N.project?String(N.project).trim().toUpperCase():"—"}),n.jsx("td",{className:"whitespace-nowrap border border-slate-300 px-1.5 py-1 text-center font-black",children:N.returned?n.jsxs("span",{className:"text-amber-700",children:["↩ RETURN",N.returnDate?` (${Ze(N.returnDate)||N.returnDate})`:""]}):"—"}),n.jsxs("td",{className:"border border-slate-300 px-1.5 py-1 text-[10px] font-bold",children:[N.reissuedTo&&n.jsxs("span",{className:"text-teal-700",children:["→ #",N.reissuedTo.checkNo," (",Ze(N.reissuedTo.date)||N.reissuedTo.date,")"]}),N.reissuedFrom&&n.jsxs("span",{className:"text-orange-700",children:["পুরনো #",N.reissuedFrom.checkNo," (",Ze(N.reissuedFrom.checkDate)||N.reissuedFrom.checkDate,")-এর রি-ইস্যু"]}),N.reissueChanges&&n.jsxs("span",{className:"block text-[9px]",children:[N.reissueChanges.decisions?n.jsxs(n.Fragment,{children:[n.jsxs("span",{className:"text-teal-700",children:["🔁 রি-ইস্যু:"," ",N.reissueChanges.decisions.filter(Ne=>Ne.action==="reissued").map(Ne=>`#${Ne.checkNo||"—"}`).join(", ")||"—"]})," ",n.jsxs("span",{className:"text-purple-700",children:["↩ রিটার্ন:"," ",N.reissueChanges.decisions.filter(Ne=>Ne.action==="returned").map(Ne=>`#${Ne.checkNo||"—"}`).join(", ")||"—"]})," "]}):n.jsxs("span",{className:"text-rose-700",children:["🚫 বাতিল: ",N.reissueChanges.cancelled.map(Ne=>`#${Ne.checkNo||"—"}`).join(", ")||"—"]})," ",n.jsxs("span",{className:"text-emerald-700",children:["✨ নতুন: ",N.reissueChanges.added.map(Ne=>`#${Ne.checkNo||"—"}`).join(", ")||"—"]})]}),!N.reissuedTo&&!N.reissuedFrom&&!N.reissueChanges&&"—"]})]},N.id)})}),n.jsx("tfoot",{children:n.jsxs("tr",{className:"bg-slate-100",children:[n.jsx("td",{colSpan:11,className:"border border-slate-300 px-1.5 py-1 text-right text-[11px] font-black text-slate-800",children:"মোট Disbursse —"}),n.jsxs("td",{className:"border border-slate-300 px-1.5 py-1 text-right font-mono text-[11px] font-black text-slate-900",children:["৳",Cn(String(ls))]}),n.jsx("td",{colSpan:3,className:"border border-slate-300 px-1.5 py-1"})]})})]}),n.jsxs("p",{className:"mt-2 text-center text-[10px] font-bold text-slate-500",children:["— মোট ",n.jsx("span",{className:"font-mono",children:nt.length}),"টি এন্ট্রি —"]})]})]})]})}),Se&&n.jsx("div",{className:"fixed inset-0 z-[70] flex items-center justify-center overflow-y-auto bg-slate-950/70 p-3 backdrop-blur-sm",children:n.jsxs("div",{className:"w-full max-w-md rounded-2xl border border-amber-300 bg-white shadow-2xl",children:[n.jsxs("div",{className:"rounded-t-2xl border-b border-amber-200 bg-amber-50 px-4 py-3",children:[n.jsxs("h3",{className:"flex items-center gap-2 text-base font-black text-amber-900",children:[n.jsx("span",{children:"↩"})," ",n.jsx("span",{children:"চেক রিটার্ন — তারিখ দিন"})]}),n.jsxs("p",{className:"mt-0.5 text-[11px] font-bold text-amber-800",children:["চেক: ",n.jsxs("span",{className:"font-mono",children:["#",Se.checkNo]})," • ",Se.bankName||"—"," • মেম্বার"," ",n.jsx("span",{className:"font-mono",children:Se.memberCode})]})]}),n.jsxs("div",{className:"space-y-3 p-4",children:[n.jsxs("div",{children:[n.jsx("label",{className:pn,children:"রিটার্নের তারিখ (বাধ্যতামূলক)"}),n.jsx(hn,{value:Z,onChange:N=>{F(N||""),Oe("")},className:"py-2 text-sm font-semibold",manualEntry:!0}),n.jsx("p",{className:"mt-1 text-[10px] font-bold text-slate-500",children:"এই তারিখ 100% পূরণ না করলে এন্ট্রি সেভ হবে না।"})]}),Re&&n.jsxs("div",{className:"rounded-xl border border-rose-300 bg-rose-50 px-3 py-2 text-xs font-black text-rose-800",children:["⚠️ ",Re]}),n.jsxs("div",{className:"flex items-center justify-end gap-2 pt-1",children:[n.jsx("button",{type:"button",onClick:()=>{ye(null),Oe("")},className:"cursor-pointer rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-black text-slate-700 shadow-xs transition hover:bg-slate-100",children:"✕ বাদ"}),n.jsx("button",{type:"button",onClick:pa,title:zi(Z)?"রিটার্ন সেভ করুন":"আগে সম্পূর্ণ তারিখ পূরণ করুন",className:`cursor-pointer rounded-xl px-5 py-2 text-sm font-black text-white shadow transition ${zi(Z)?"bg-amber-600 hover:bg-amber-700":"bg-slate-300"}`,children:"✓ রিটার্ন সেভ"})]})]})]})}),V&&n.jsx(J5,{open:V,onClose:()=>ce(!1),onPick:N=>{A(de=>({...de,memberCode:N.memberCode||"",memberName:N.memberName||"",centreCode:N.centreCode||"",centreName:N.centreName||""})),K("found"),C(null)}}),q&&n.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4",children:n.jsxs("div",{className:"w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl",children:[n.jsxs("div",{className:"flex items-center justify-between border-b border-emerald-200 bg-gradient-to-r from-emerald-600 to-teal-600 px-5 py-3.5 text-white",children:[n.jsxs("div",{className:"flex items-center gap-2.5",children:[n.jsx("span",{className:"flex h-9 w-9 items-center justify-center rounded-xl bg-white/20 text-lg",children:"🗄️"}),n.jsxs("div",{children:[n.jsx("h3",{className:"text-base font-black",children:"মেম্বার ডাটাবেজ আমদানি"}),n.jsx("p",{className:"text-[11px] text-emerald-100",children:"কলাম: Member Code, Member Name, Centre Code, Centre Name (Bank Name, Check No. ঐচ্ছিক)"})]})]}),n.jsx("button",{type:"button",onClick:()=>k(!1),className:"flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-sm font-bold hover:bg-white/30",children:"✕"})]}),n.jsxs("div",{className:"space-y-3 p-5",children:[n.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[n.jsx("input",{ref:ft,type:"file",accept:".csv,.txt,.tsv,.xlsx,.xls",className:"hidden",onChange:N=>{var oe;const de=(oe=N.target.files)==null?void 0:oe[0];de&&Nt(de),N.target.value=""}}),n.jsx("button",{type:"button",onClick:()=>{var N;return(N=ft.current)==null?void 0:N.click()},className:"rounded-xl bg-emerald-600 px-4 py-2 text-xs font-black text-white transition hover:bg-emerald-700",children:"📁 ফাইল বেছে নিন (CSV / TXT)"}),n.jsx("button",{type:"button",onClick:()=>{se(`Member Code,Member Name,Centre Code,Centre Name,Bank Name,Check No
M-1001,আব্দুল করিম,C-01,ধানমন্ডি শাখা,Sonali Bank,445566
M-1002,রহিম উদ্দিন,C-02,মিরপুর শাখা,Janata Bank,778899`)},className:"rounded-xl border border-slate-300 bg-white px-4 py-2 text-xs font-bold text-slate-700 transition hover:bg-slate-100",children:"নমুনা বসান"}),n.jsxs("span",{className:"text-[11px] font-bold text-slate-500",children:["বর্তমানে ডাটাবেজে: ",n.jsx("span",{className:"font-mono",children:L.toLocaleString("en-IN")})," মেম্বার"]})]}),n.jsxs("div",{children:[n.jsx("label",{className:"mb-1 block text-[11px] font-black uppercase tracking-wide text-slate-600",children:"অথবা Excel / Google Sheet থেকে কপি করে এখানে পেস্ট করুন"}),n.jsx("textarea",{value:E,onChange:N=>se(N.target.value),rows:9,placeholder:`Member Code	Member Name	Centre Code	Centre Name
M-1001	আব্দুল করিম	C-01	ধানমন্ডি শাখা`,className:"w-full rounded-xl border border-slate-300 px-3 py-2 font-mono text-xs text-slate-900 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"}),n.jsx("p",{className:"mt-1 text-[11px] text-slate-500",children:"ট্যাব বা কমা — দুইভাবেই আলাদা করা যায়। হেডার লাইন থাকলে কলাম নিজে থেকেই চেনা হবে। একই কোড থাকলে আগের তথ্য আপডেট হয়ে যাবে।"})]})]}),n.jsxs("div",{className:"flex items-center justify-between gap-2 border-t border-slate-200 bg-slate-50 px-5 py-3.5",children:[n.jsx("button",{type:"button",onClick:()=>{confirm("পুরো মেম্বার ডাটাবেজ মুছে ফেলতে চান?")&&(localStorage.removeItem("gobra_member_database"),St(),C({kind:"warn",text:"মেম্বার ডাটাবেজ খালি করা হয়েছে।"}))},className:"rounded-xl border border-rose-300 bg-rose-50 px-3 py-2 text-[11px] font-bold text-rose-700 transition hover:bg-rose-100",children:"🗑️ ডাটাবেজ খালি করুন"}),n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("button",{type:"button",onClick:()=>k(!1),className:"rounded-xl bg-slate-200 px-4 py-2 text-xs font-bold text-slate-700 transition hover:bg-slate-300",children:"বাতিল"}),n.jsx("button",{type:"button",onClick:()=>Ee(E),disabled:!E.trim(),className:"rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-5 py-2 text-xs font-black text-white shadow-md transition hover:from-emerald-700 hover:to-teal-700 disabled:opacity-50",children:"⬆️ আমদানি করুন"})]})]})]})})]})}const hb=`/**
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
}`;function aS({open:l,onClose:o}){const[u,c]=p.useState(""),[d,A]=p.useState("idle"),[f,x]=p.useState(""),[h,v]=p.useState(!1),[S,b]=p.useState(!1);if(p.useEffect(()=>{if(l){const L=e5();c(L),A("idle"),x(""),L||Yi("google_sheet_url").then(_=>{_&&_.startsWith("http")&&(c(_),rm(_))}).catch(()=>{})}},[l]),p.useEffect(()=>{const L=_=>{_!=null&&_.detail&&typeof _.detail=="string"&&c(_.detail)};return window.addEventListener("google-sheet-url-changed",L),()=>window.removeEventListener("google-sheet-url-changed",L)},[]),!l)return null;const H=async()=>{const L=u.trim();if(!L||!L.startsWith("http")){A("error"),x("Valid Web App URL required");return}rm(L);try{await Tm("google_sheet_url",L)}catch{}A("success"),x("URL সফলভাবে ডাটাবেজ ও ক্লাউডে সংরক্ষিত হয়েছে! অন্য যেকোনো ডিভাইসেও এটি স্বয়ংক্রিয়ভাবে পাওয়া যাবে।")},P=async()=>{if(!u||!u.startsWith("http")){A("error"),x("Valid Web App URL required");return}A("testing"),x("Testing connection...");try{await fetch(u,{method:"POST",mode:"no-cors",headers:{"Content-Type":"text/plain"},body:JSON.stringify({action:"test"})}),rm(u),A("success"),x("Request sent to Google Apps Script successfully!")}catch(L){A("error"),x("Failed: "+L.message)}},G=async()=>{if(!u||!u.startsWith("http")){A("error"),x("Valid Web App URL required");return}A("testing"),x("Syncing all data to Google Sheet...");try{const L=ln(),_=Nn();await fetch(u,{method:"POST",mode:"no-cors",headers:{"Content-Type":"text/plain"},body:JSON.stringify({action:"sync_all",data:{transactions:L,staffReports:_}})}),A("success"),x(`Synced ${L.length} transactions & ${_.length} staff reports to Google Sheet!`)}catch(L){A("error"),x("Sync failed: "+L.message)}},K=()=>{navigator.clipboard.writeText(hb),b(!0),setTimeout(()=>b(!1),2e3)};return n.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-3 sm:p-5 overflow-y-auto",children:n.jsxs("div",{className:"flex max-h-[94vh] w-full max-w-2xl flex-col rounded-2xl bg-white shadow-2xl overflow-hidden border border-slate-300",children:[n.jsxs("div",{className:"flex items-center justify-between border-b bg-emerald-800 px-5 py-3 text-white",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"📊"}),n.jsxs("div",{children:[n.jsx("h3",{className:"font-bold text-base sm:text-lg leading-tight",children:"Google Sheet / Drive Sync"}),n.jsx("p",{className:"text-xs text-emerald-200",children:"Connect your Google Spreadsheet"})]})]}),n.jsx("button",{onClick:o,className:"text-2xl text-emerald-200 hover:text-white",children:"×"})]}),n.jsxs("div",{className:"flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 text-xs sm:text-sm",children:[f&&n.jsx("div",{className:`rounded-lg p-3 font-semibold text-xs ${d==="success"?"bg-emerald-100 text-emerald-900 border border-emerald-300":d==="error"?"bg-rose-100 text-rose-900 border border-rose-300":"bg-blue-100 text-blue-900 border border-blue-300"}`,children:f}),n.jsxs("div",{className:"space-y-1.5",children:[n.jsx("label",{className:"block font-bold text-slate-800 text-sm",children:"Google Apps Script Web App URL:"}),n.jsxs("div",{className:"flex gap-2",children:[n.jsx("input",{type:"url",value:u,onChange:L=>c(L.target.value),placeholder:"https://script.google.com/macros/s/.../exec",className:"flex-1 rounded-lg border border-slate-300 px-3 py-2 text-xs sm:text-sm font-mono focus:border-emerald-600 focus:outline-none"}),n.jsx("button",{type:"button",onClick:H,className:"rounded-lg bg-emerald-600 hover:bg-emerald-700 px-4 py-2 font-bold text-white text-xs transition whitespace-nowrap shadow-xs",children:"Save URL"})]})]}),n.jsxs("div",{className:"flex flex-wrap gap-2.5 pt-1",children:[n.jsx("button",{type:"button",onClick:P,className:"rounded-lg bg-blue-600 hover:bg-blue-700 px-4 py-2 text-xs font-bold text-white shadow-xs transition",children:"Test Connection"}),n.jsx("button",{type:"button",onClick:G,className:"rounded-lg bg-indigo-600 hover:bg-indigo-700 px-4 py-2 text-xs font-bold text-white shadow-xs transition",children:"Sync All Data"})]}),n.jsxs("div",{className:"rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-2.5",children:[n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsx("h4",{className:"font-bold text-slate-900 text-sm",children:"Apps Script Code Setup"}),n.jsx("button",{type:"button",onClick:()=>v(!h),className:"text-xs text-blue-600 hover:underline font-bold",children:h?"Hide Code":"Show Script Code"})]}),n.jsxs("ol",{className:"list-decimal list-inside space-y-1 text-xs text-slate-700",children:[n.jsx("li",{children:"Open Google Sheet > Extensions > Apps Script"}),n.jsx("li",{children:"Paste the code, save with Ctrl+S"}),n.jsxs("li",{children:["Deploy as Web App, set access to ",n.jsx("b",{children:"Anyone"})]}),n.jsx("li",{children:"Copy Web App URL and paste above"})]}),h&&n.jsxs("div",{className:"mt-2 space-y-2",children:[n.jsxs("div",{className:"flex justify-between items-center",children:[n.jsx("span",{className:"text-[11px] font-bold text-slate-600 font-mono",children:"Apps Script Code:"}),n.jsx("button",{type:"button",onClick:K,className:"rounded bg-slate-800 hover:bg-slate-700 text-white px-2.5 py-1 text-xs font-bold transition shadow-xs",children:S?"Copied!":"Copy Code"})]}),n.jsx("pre",{className:"max-h-48 overflow-auto rounded bg-slate-900 p-3 text-[10.5px] font-mono text-emerald-300",children:hb})]})]})]}),n.jsxs("div",{className:"flex items-center justify-between border-t bg-slate-100 px-5 py-3",children:[n.jsx("span",{className:"text-xs text-slate-500 font-medium",children:"Google Sheets Database Integration"}),n.jsx("button",{type:"button",onClick:o,className:"rounded-lg bg-slate-800 hover:bg-slate-900 px-6 py-1.5 text-xs font-bold text-white transition",children:"Close"})]})]})})}function sS({open:l,onClose:o}){const[u,c]=p.useState(or()),[d,A]=p.useState(""),[f,x]=p.useState(!1),[h,v]=p.useState(null),[S,b]=p.useState(!1);if(p.useEffect(()=>{if(!l)return;c(or()),A("");const ue=C=>{C.detail&&c(C.detail)};return window.addEventListener("neon-sync-status-changed",ue),()=>window.removeEventListener("neon-sync-status-changed",ue)},[l]),!l)return null;const H=async()=>{x(!0),A("Neon ক্লাউড ডাটাবেজের সাথে সিঙ্ক হচ্ছে...");try{const ue=await rr();A(ue.message),c(or())}catch(ue){A(`সিঙ্ক ত্রুটি: ${ue.message||"Failed"}`)}finally{x(!1)}},P=ln(),G=Nn(),K=pc(),L=xl(),_=async()=>{b(!0);try{v(await hR())}catch(ue){A(`ক্লাউড ঘর পড়া যায়নি: ${(ue==null?void 0:ue.message)||"ত্রুটি"}`)}finally{b(!1)}};return n.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-3 sm:p-5 overflow-y-auto animate-in fade-in",children:n.jsxs("div",{className:"flex max-h-[94vh] w-full max-w-lg flex-col rounded-3xl bg-white shadow-2xl overflow-hidden border border-slate-200",children:[n.jsxs("div",{className:"flex items-center justify-between border-b bg-linear-to-r from-teal-900 to-slate-900 px-5 py-3.5 text-white",children:[n.jsxs("div",{className:"flex items-center gap-2.5",children:[n.jsx("span",{className:"text-2xl",children:"🐘"}),n.jsxs("div",{children:[n.jsxs("h3",{className:"font-bold text-sm sm:text-base leading-tight flex items-center gap-2",children:[n.jsx("span",{children:"Neon PostgreSQL Database"}),n.jsx("span",{className:"h-2 w-2 rounded-full bg-emerald-400 animate-pulse"})]}),n.jsx("p",{className:"text-[11px] text-teal-300",children:"Serverless Cloud Database (Permanent Storage)"})]})]}),n.jsx("button",{onClick:o,className:"text-2xl text-slate-400 hover:text-white cursor-pointer px-1",children:"×"})]}),n.jsxs("div",{className:"p-5 space-y-4 text-xs sm:text-sm",children:[n.jsx("div",{className:"rounded-2xl border border-emerald-200 bg-emerald-50/70 p-4",children:n.jsxs("div",{className:"flex items-start gap-3",children:[n.jsx("div",{className:"h-8 w-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center text-base shrink-0 font-black",children:"✓"}),n.jsxs("div",{className:"space-y-1",children:[n.jsx("div",{className:"font-extrabold text-emerald-950 text-sm flex items-center gap-2",children:n.jsx("span",{children:"Neon Database সফলভাবে কানেক্টেড!"})}),n.jsx("p",{className:"text-xs text-emerald-800 leading-relaxed font-medium",children:"এখন থেকে আপনি যা ডাটা এন্ট্রি দেবেন তা স্বয়ংক্রিয়ভাবে Neon PostgreSQL ক্লাউড ডাটাবেজে স্থায়ীভাবে সংরক্ষিত থাকবে। পরবর্তী কোড মোডিফাই বা রি-ডিপ্লয়ে ডাটা কখনোই মুছে যাবে না।"})]})]})}),n.jsxs("div",{className:"rounded-2xl border border-indigo-200 bg-indigo-50/70 p-3.5",children:[n.jsxs("div",{className:"flex items-start justify-between gap-2",children:[n.jsxs("div",{children:[n.jsx("div",{className:"text-[10px] font-bold uppercase tracking-wide text-indigo-500",children:"এই অফিসের ক্লাউড ঘর"}),n.jsxs("div",{className:"text-sm font-black text-indigo-950",children:["🏢 ",K]}),n.jsxs("div",{className:"font-mono text-[11px] font-bold text-indigo-700",children:["স্কিমা: ",L]}),n.jsx("p",{className:"mt-1 text-[11px] font-medium leading-relaxed text-indigo-800",children:"প্রতিটি অফিসের লেনদেন, চেক এন্ট্রি ও মেম্বার ডাটাবেজ ক্লাউডে নিজের আলাদা ঘরে সংরক্ষিত হয় — অন্য অফিসের ডেটার সাথে মিশবে না।"})]}),n.jsx("button",{type:"button",onClick:_,disabled:S,className:"shrink-0 rounded-xl border border-indigo-300 bg-white px-2.5 py-1.5 text-[11px] font-black text-indigo-700 transition hover:bg-indigo-100 disabled:opacity-50 cursor-pointer",children:S?"পড়ছে…":"☁️ ঘর দেখুন"})]}),h&&n.jsx("div",{className:"mt-2.5 grid grid-cols-2 gap-1.5 text-[11px] sm:grid-cols-4",children:[["transactions","লেনদেন"],["check_entries","চেক এন্ট্রি"],["members","মেম্বার"],["staff_reports","স্টাফ রিপোর্ট"],["day_opens","ডে ওপেন"],["day_closures","ডে ক্লোজ"],["categories","ক্যাটাগরি"]].map(([ue,C])=>n.jsxs("div",{className:"rounded-lg border border-indigo-200 bg-white px-2 py-1.5",children:[n.jsx("div",{className:"text-[9px] font-bold uppercase text-slate-500",children:C}),n.jsx("div",{className:"text-sm font-black text-indigo-800",children:h.rows[ue]===void 0?"—":h.rows[ue]<0?"⚠️":h.rows[ue]})]},ue))})]}),n.jsxs("div",{className:"grid grid-cols-2 gap-2 text-xs",children:[n.jsxs("div",{className:"rounded-xl border border-slate-200 bg-slate-50 p-2.5",children:[n.jsx("span",{className:"text-[10px] font-bold uppercase text-slate-500 block",children:"Database Engine"}),n.jsx("span",{className:"font-black text-slate-800",children:"PostgreSQL (Neon)"})]}),n.jsxs("div",{className:"rounded-xl border border-slate-200 bg-slate-50 p-2.5",children:[n.jsx("span",{className:"text-[10px] font-bold uppercase text-slate-500 block",children:"Region & Host"}),n.jsx("span",{className:"font-bold text-slate-800 truncate block",children:"ap-southeast-1 (Singapore)"})]}),n.jsxs("div",{className:"rounded-xl border border-slate-200 bg-slate-50 p-2.5",children:[n.jsx("span",{className:"text-[10px] font-bold uppercase text-slate-500 block",children:"Transactions Synced"}),n.jsxs("span",{className:"font-black text-blue-600 text-sm",children:[P.length," টি"]})]}),n.jsxs("div",{className:"rounded-xl border border-slate-200 bg-slate-50 p-2.5",children:[n.jsx("span",{className:"text-[10px] font-bold uppercase text-slate-500 block",children:"Staff Reports"}),n.jsxs("span",{className:"font-black text-indigo-600 text-sm",children:[G.length," টি"]})]})]}),n.jsxs("div",{className:"flex items-center justify-between rounded-xl bg-slate-100 px-3 py-2 text-xs text-slate-600",children:[n.jsx("span",{children:"সর্বশেষ ক্লাউড সিঙ্ক:"}),n.jsx("span",{className:"font-mono font-bold text-slate-800",children:u.lastSyncTime||"এইমাত্র"})]}),d&&n.jsx("div",{className:`rounded-xl p-3 text-xs font-bold leading-relaxed ${d.includes("ত্রুটি")||d.includes("ব্যর্থ")?"bg-rose-50 text-rose-800 border border-rose-200":"bg-blue-50 text-blue-900 border border-blue-200"}`,children:d}),n.jsxs("button",{type:"button",disabled:f||u.isSyncing,onClick:H,className:`w-full rounded-2xl bg-teal-600 hover:bg-teal-700 active:bg-teal-800 py-3 text-xs sm:text-sm font-black text-white shadow-md transition cursor-pointer flex items-center justify-center gap-2 ${f||u.isSyncing?"opacity-75 cursor-not-allowed":""}`,children:[n.jsx("span",{className:f||u.isSyncing?"animate-spin":"",children:"🔄"}),n.jsx("span",{children:f||u.isSyncing?"ক্লাউডে সিঙ্ক হচ্ছে...":"এখনই Neon ডাটাবেজে সিঙ্ক করুন (Sync Now)"})]})]}),n.jsxs("div",{className:"flex items-center justify-between border-t bg-slate-50 px-5 py-3 text-xs",children:[n.jsx("span",{className:"text-slate-400 font-medium",children:"Daily Cash Gobra • BKF"}),n.jsx("button",{type:"button",onClick:o,className:"rounded-xl bg-slate-800 hover:bg-slate-900 px-5 py-1.5 font-bold text-white transition cursor-pointer",children:"বন্ধ করুন"})]})]})})}function lS({open:l,onClose:o,deferredPrompt:u}){const[c,d]=p.useState(!1),[A,f]=p.useState(!1);if(p.useEffect(()=>{const S=()=>{f(!0)};return window.addEventListener("appinstalled",S),()=>window.removeEventListener("appinstalled",S)},[]),!l)return null;const x=window.location.origin,h=async()=>{if(u){u.prompt();const{outcome:S}=await u.userChoice;S==="accepted"&&f(!0)}},v=()=>{navigator.clipboard.writeText(x),d(!0),setTimeout(()=>d(!1),2500)};return n.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs",children:n.jsxs("div",{className:"relative w-full max-w-lg rounded-3xl bg-white p-5 sm:p-6 text-slate-800 shadow-2xl animate-in zoom-in-95 duration-150 max-h-[90vh] overflow-y-auto",children:[n.jsxs("div",{className:"flex items-center justify-between border-b border-slate-100 pb-3 mb-4",children:[n.jsxs("div",{className:"flex items-center gap-2.5",children:[n.jsx("div",{className:"flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-100 text-xl text-indigo-700 font-black",children:"📱"}),n.jsxs("div",{children:[n.jsx("h2",{className:"text-base sm:text-lg font-black text-slate-900 leading-tight",children:"অ্যাপ ইনস্টল ও APK ডাউনলোড"}),n.jsx("p",{className:"text-xs text-slate-500 font-medium",children:"Offline ও Online-এ নিরবচ্ছিন্ন ব্যবহারের জন্য"})]})]}),n.jsx("button",{type:"button",onClick:o,className:"flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 text-lg font-bold cursor-pointer transition",children:"✕"})]}),u&&!A&&n.jsxs("div",{className:"mb-4 rounded-2xl border-2 border-indigo-500/40 bg-indigo-50/70 p-4 text-center",children:[n.jsx("h3",{className:"text-sm font-black text-indigo-950 mb-1",children:"🎉 ১-ক্লিকে ফোনে সরাসরি ইনস্টল করুন"}),n.jsx("p",{className:"text-xs text-indigo-700 mb-3",children:"এটি সরাসরি আপনার ফোনে নেটিভ অ্যাপ আইকন হিসেবে যুক্ত হবে এবং ইন্টারনেট ছাড়াও চলবে।"}),n.jsxs("button",{type:"button",onClick:h,className:"w-full rounded-xl bg-indigo-600 hover:bg-indigo-700 active:scale-98 text-white font-bold py-2.5 text-sm shadow-md transition cursor-pointer flex items-center justify-center gap-2",children:[n.jsx("span",{children:"📥"}),n.jsx("span",{children:"এখনই অ্যাপটি ইনস্টল করুন"})]})]}),A&&n.jsx("div",{className:"mb-4 rounded-2xl bg-emerald-50 border border-emerald-300 p-3 text-center text-xs font-bold text-emerald-800",children:"✅ অ্যাপটি আপনার ডিভাইসে সফলভাবে ইনস্টল হয়েছে! আপনি হোম স্ক্রিন থেকে যেকোনো সময় ওপেন করতে পারেন।"}),n.jsxs("div",{className:"space-y-3.5 text-xs sm:text-sm",children:[n.jsxs("div",{className:"rounded-2xl border border-slate-200 bg-slate-50 p-3.5",children:[n.jsxs("div",{className:"flex items-center gap-2 font-black text-slate-900 mb-1.5",children:[n.jsx("span",{className:"flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-white text-[11px]",children:"১"}),n.jsx("span",{children:"ফোনে সরাসরি অ্যাপ হিসেবে ইনস্টল (সবচেয়ে সহজ):"})]}),n.jsxs("ul",{className:"list-disc list-inside space-y-1 text-slate-600 pl-1 leading-relaxed",children:[n.jsxs("li",{children:["আপনার অ্যান্ড্রয়েড ফোনের ",n.jsx("b",{children:"Chrome ব্রাউজারে"})," এই সাইটটি ওপেন করুন।"]}),n.jsxs("li",{children:["উপরের ডানপাশে ",n.jsx("b",{children:"তিনটি ডট (⋮)"})," মেনুতে ক্লিক করুন।"]}),n.jsxs("li",{children:[n.jsx("b",{children:'"Install app"'})," অথবা ",n.jsx("b",{children:'"Add to Home screen" (হোম স্ক্রিনে যোগ করুন)'})," অপশনে চাপুন।"]}),n.jsx("li",{children:"কয়েক সেকেন্ডের মধ্যে ফোনের অ্যাপ গ্যালারিতে এটি আসল অ্যাপের মতো ইনস্টল হয়ে যাবে।"})]})]}),n.jsxs("div",{className:"rounded-2xl border border-slate-200 bg-emerald-50/50 p-3.5",children:[n.jsxs("div",{className:"flex items-center gap-2 font-black text-emerald-950 mb-1.5",children:[n.jsx("span",{className:"flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-white text-[11px]",children:"⚡"}),n.jsx("span",{children:"Offline ও Online অটো-সিঙ্ক কীভাবে কাজ করে?"})]}),n.jsxs("p",{className:"text-slate-700 leading-relaxed text-xs",children:["১. ",n.jsx("b",{children:"অফলাইন মোড:"})," যখন ইন্টারনেট থাকবে না বা ডাটা বন্ধ থাকবে, তখনও অ্যাপটি আগের মতোই দ্রুত চলবে। আপনি জমা, খরচ বা রিপোর্ট এন্ট্রি দিলে তা আপনার ফোনের মেমরিতে নিরাপদে জমা থাকবে।",n.jsx("br",{}),"২. ",n.jsx("b",{children:"অটো-সিঙ্ক:"})," যখনই ফোনে ইন্টারনেট কানেকশন পাওয়া যাবে, অ্যাপটি স্বয়ংক্রিয়ভাবে সব জমা ডাটা ",n.jsx("b",{children:"Neon ক্লাউড ডাটাবেজে"})," আপলোড করে সিঙ্ক করে নেবে।"]})]}),n.jsxs("div",{className:"rounded-2xl border border-slate-200 bg-slate-50 p-3.5",children:[n.jsxs("div",{className:"flex items-center gap-2 font-black text-slate-900 mb-1.5",children:[n.jsx("span",{className:"flex h-5 w-5 items-center justify-center rounded-full bg-amber-600 text-white text-[11px]",children:"২"}),n.jsx("span",{children:"সরাসরি .apk ফাইল তৈরি (PWABuilder দিয়ে):"})]}),n.jsxs("p",{className:"text-slate-600 leading-relaxed text-xs mb-2",children:["আপনি চাইলে এই অ্যাপের জন্য ১ মিনিটে প্লে-স্টোর উপযোগী সাইনড ",n.jsx("b",{children:".apk ফাইল"})," বানিয়ে নিতে পারেন:"]}),n.jsxs("div",{className:"flex flex-col gap-2",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("input",{type:"text",readOnly:!0,value:x,className:"w-full rounded-lg border border-slate-300 bg-white px-2.5 py-1 text-xs font-mono font-bold text-slate-700"}),n.jsx("button",{type:"button",onClick:v,className:"shrink-0 rounded-lg bg-slate-200 hover:bg-slate-300 px-3 py-1 text-xs font-bold text-slate-800 transition cursor-pointer",children:c?"কপি হয়েছে ✓":"লিংক কপি"})]}),n.jsxs("a",{href:`https://www.pwabuilder.com/?url=${encodeURIComponent(x)}`,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center justify-center gap-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-3 py-2 text-xs transition shadow-xs",children:[n.jsx("span",{children:"🚀 PWABuilder-এ APK তৈরি করুন"}),n.jsx("span",{children:"↗"})]})]})]})]}),n.jsx("div",{className:"mt-5 border-t border-slate-100 pt-3 flex justify-end",children:n.jsx("button",{type:"button",onClick:o,className:"rounded-xl bg-slate-800 hover:bg-slate-900 text-white font-bold px-5 py-2 text-xs transition cursor-pointer",children:"বুঝেছি, বন্ধ করুন"})})]})})}const Ji=[{id:"receive",label:"Receive",icon:"📥"},{id:"payment",label:"Payment",icon:"📤"},{id:"report",label:"Report",icon:"📊"},{id:"cashbook",label:"Cashbook",icon:"📖"},{id:"check",label:"Check",icon:"🧾"},{id:"entertainment",label:"Entertainment",icon:"🎉"}];function rS({currentTab:l,onTabChange:o,selectedDate:u,onDateChange:c,onOpenTracker:d}){const[A,f]=p.useState(!1),[x,h]=p.useState(!1),[v,S]=p.useState(!1),[b,H]=p.useState(!1),[P,G]=p.useState(null),[K,L]=p.useState(or()),_=xa();p.useEffect(()=>{const V=ce=>{ce.preventDefault(),G(ce)};return window.addEventListener("beforeinstallprompt",V),()=>window.removeEventListener("beforeinstallprompt",V)},[]),p.useEffect(()=>{const V=ce=>{ce.detail&&L(ce.detail)};return window.addEventListener("neon-sync-status-changed",V),()=>window.removeEventListener("neon-sync-status-changed",V)},[]);const ue=V=>{o(V),S(!1)},C=Ji.find(V=>V.id===l)||Ji[0],k=!["check","entertainment","cashbook"].includes(l)?Ie(u)?n.jsx("span",{className:"rounded-full border border-rose-400/40 bg-rose-500/15 px-2 py-0.5 text-[10px] font-bold text-rose-300 whitespace-nowrap",title:"Day Closed",children:"🔒 Closed"}):_t(u)?n.jsx("span",{className:"rounded-full border border-emerald-400/40 bg-emerald-500/15 px-2 py-0.5 text-[10px] font-bold text-emerald-300 whitespace-nowrap",title:"Day Open",children:"☀️ Open"}):n.jsx("span",{className:"rounded-full border border-amber-400/40 bg-amber-500/15 px-2 py-0.5 text-[10px] font-bold text-amber-300 whitespace-nowrap",title:"Working day not opened yet",children:"⏳ Not Opened"}):null;return n.jsxs(n.Fragment,{children:[n.jsxs("aside",{className:"fixed inset-y-0 left-0 z-40 hidden w-60 flex-col text-white lg:flex print:hidden",children:[n.jsx("div",{className:"absolute inset-0 border-r border-white/10 bg-linear-to-b from-[#131f42]/97 to-[#0a1024] backdrop-blur-xl shadow-[10px_0_40px_-12px_rgba(4,10,30,0.7)]"}),n.jsx("div",{className:"pointer-events-none absolute inset-y-0 right-0 w-px bg-linear-to-b from-transparent via-amber-300/60 to-transparent"}),n.jsxs("div",{className:"relative flex h-full flex-col gap-1 px-3 py-4",children:[n.jsxs("div",{className:"mb-2 flex items-center gap-2.5 px-1",children:[n.jsx("span",{className:"flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-amber-300 to-orange-500 text-lg shadow-lg shadow-amber-500/40 ring-1 ring-white/30",children:"💰"}),n.jsxs("div",{className:"min-w-0",children:[n.jsx("p",{className:"bg-linear-to-b from-amber-200 via-amber-300 to-amber-500 bg-clip-text text-[15px] font-black tracking-tight text-transparent",children:"Cash Gobra"}),n.jsx("p",{className:"text-[9px] font-bold uppercase tracking-[0.18em] text-slate-400",children:"Daily Cashbook Pro"})]})]}),n.jsxs("div",{className:"mb-2 rounded-2xl border border-white/10 bg-white/5 p-2.5 shadow-inner",children:[n.jsxs("div",{className:"mb-1.5 flex items-center justify-between",children:[n.jsx("span",{className:"text-[9px] font-black uppercase tracking-[0.14em] text-slate-400",children:"কাজের তারিখ"}),k]}),n.jsx("div",{className:"text-slate-900",children:n.jsx(hn,{value:u,onChange:V=>c(V||_),className:"w-full rounded-xl border border-white/60 bg-white px-2.5 py-1.5 text-xs font-bold shadow-md shadow-black/30",onOpenTracker:d})}),u!==_&&n.jsx("button",{type:"button",onClick:()=>c(_),className:"mt-1.5 w-full rounded-full bg-linear-to-r from-sky-500 to-blue-600 px-2 py-1 text-[10px] font-black text-white shadow-md shadow-blue-500/40 transition-all duration-200 cursor-pointer hover:scale-[1.02] active:scale-95",title:"Back to today's date",children:"📆 আজকের তারিখে ফিরুন"})]}),n.jsxs("div",{className:"mt-1 flex min-h-0 flex-1 flex-col gap-1 overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",children:[n.jsx("p",{className:"px-1 text-[9px] font-black uppercase tracking-[0.18em] text-slate-500",children:"Pages"}),n.jsx("nav",{className:"flex flex-col gap-1",children:Ji.map(V=>{const ce=l===V.id;return n.jsxs("button",{type:"button",onClick:()=>o(V.id),className:`group relative flex w-full items-center gap-2.5 rounded-xl px-2.5 py-2 text-left text-[13px] transition-all duration-200 cursor-pointer ${ce?"bg-linear-to-r from-indigo-500 via-blue-500 to-sky-500 font-black text-white shadow-lg shadow-indigo-500/40 ring-1 ring-white/30":"font-bold text-slate-300 hover:bg-white/10 hover:text-white hover:translate-x-0.5"}`,children:[n.jsx("span",{className:`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-base ${ce?"bg-white/20 shadow-inner":"bg-white/5 group-hover:bg-white/10"}`,children:V.icon}),n.jsx("span",{className:"truncate",children:V.label}),ce&&n.jsx("span",{className:"ml-auto h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300 shadow-[0_0_8px_rgba(110,231,183,1)] animate-pulse"})]},V.id)})}),n.jsx("p",{className:"mt-2 px-1 text-[9px] font-black uppercase tracking-[0.18em] text-slate-500",children:"Tools & Cloud"}),n.jsxs("div",{className:"flex flex-col gap-1",children:[n.jsxs("button",{type:"button",onClick:()=>h(!0),className:"flex w-full items-center gap-2.5 rounded-xl border border-teal-300/20 bg-teal-400/10 px-2.5 py-2 text-left text-xs font-bold text-teal-200 transition-all duration-200 cursor-pointer hover:bg-teal-400/20 hover:border-teal-300/40",title:"Neon PostgreSQL Cloud Database",children:[n.jsx("span",{className:"flex h-7 w-7 items-center justify-center rounded-lg bg-white/10 text-sm",children:"🐘"}),n.jsx("span",{children:"Neon DB"}),n.jsx("span",{className:`ml-auto h-1.5 w-1.5 rounded-full ${K.isSyncing?"bg-amber-300 animate-ping":K.connected?"bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,1)]":"bg-rose-400 shadow-[0_0_8px_rgba(251,113,133,0.9)]"}`})]}),n.jsxs("button",{type:"button",onClick:()=>f(!0),className:"flex w-full items-center gap-2.5 rounded-xl border border-emerald-300/20 bg-emerald-400/10 px-2.5 py-2 text-left text-xs font-bold text-emerald-200 transition-all duration-200 cursor-pointer hover:bg-emerald-400/20 hover:border-emerald-300/40",title:"Connect to Google Sheet",children:[n.jsx("span",{className:"flex h-7 w-7 items-center justify-center rounded-lg bg-white/10 text-sm",children:"📊"}),n.jsx("span",{children:"Google Sheet"})]}),n.jsxs("button",{type:"button",onClick:d,className:"flex w-full items-center gap-2.5 rounded-xl border border-amber-300/20 bg-amber-400/10 px-2.5 py-2 text-left text-xs font-bold text-amber-300 transition-all duration-200 cursor-pointer hover:bg-amber-400/20 hover:border-amber-300/40",title:"Open audit tracker for all dates",children:[n.jsx("span",{className:"flex h-7 w-7 items-center justify-center rounded-lg bg-white/10 text-sm",children:"📅"}),n.jsx("span",{children:"Audit Tracker"})]}),n.jsxs("button",{type:"button",onClick:()=>window.dispatchEvent(new CustomEvent("open-day-admin")),className:"flex w-full items-center gap-2.5 rounded-xl border border-violet-300/25 bg-violet-500/15 px-2.5 py-2 text-left text-xs font-bold text-violet-200 transition-all duration-200 cursor-pointer hover:bg-violet-500/25 hover:border-violet-300/50",title:"⚙️ Day Admin — সব কর্মদিবস Close/Re-open/এডিট এক জায়গায়",children:[n.jsx("span",{className:"flex h-7 w-7 items-center justify-center rounded-lg bg-white/10 text-sm",children:"⚙️"}),n.jsx("span",{children:"Day Admin"})]}),n.jsxs("button",{type:"button",onClick:()=>H(!0),className:"flex w-full items-center gap-2.5 rounded-xl border border-indigo-300/25 bg-indigo-400/10 px-2.5 py-2 text-left text-xs font-bold text-indigo-200 transition-all duration-200 cursor-pointer hover:bg-indigo-400/20 hover:border-indigo-300/40",title:"Install App & Download APK",children:[n.jsx("span",{className:"flex h-7 w-7 items-center justify-center rounded-lg bg-white/10 text-sm",children:"📱"}),n.jsx("span",{children:"Install App"})]})]})]}),n.jsx("div",{className:"mt-1 pt-2 text-center text-[9px] font-bold uppercase tracking-[0.2em] text-slate-600",children:"Gobra Branch · BKF"})]})]}),n.jsxs("button",{type:"button",onClick:()=>S(!0),"aria-label":`মেনু খুলুন — বর্তমান পেজ: ${C.label}`,title:`মেনু — ${C.label}`,className:"fixed bottom-4 right-4 z-40 flex h-14 w-14 flex-col items-center justify-center gap-1 rounded-2xl border border-amber-300/50 bg-linear-to-b from-[#18244f]/95 to-[#0a1024]/95 shadow-[0_8px_28px_-6px_rgba(4,10,30,0.8),0_0_14px_rgba(251,191,36,0.25)] backdrop-blur-xl transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 lg:hidden print:hidden",children:[n.jsx("span",{className:"block h-0.5 w-5 bg-amber-400 rounded-full shadow-[0_0_4px_rgba(251,191,36,0.9)]"}),n.jsx("span",{className:"block h-0.5 w-5 bg-amber-400 rounded-full shadow-[0_0_4px_rgba(251,191,36,0.9)]"}),n.jsx("span",{className:"block h-0.5 w-5 bg-amber-400 rounded-full shadow-[0_0_4px_rgba(251,191,36,0.9)]"})]}),v&&n.jsxs("div",{className:"fixed inset-0 z-50 flex flex-col justify-end lg:hidden",children:[n.jsx("div",{className:"fixed inset-0 bg-slate-950/75 backdrop-blur-xs transition-opacity",onClick:()=>S(!1)}),n.jsxs("div",{className:"relative z-10 w-full rounded-t-3xl border-t border-white/10 bg-linear-to-b from-[#151f47] to-[#0a1024] p-4 text-white shadow-2xl animate-in slide-in-from-bottom duration-200 max-h-[85vh] overflow-y-auto",children:[n.jsx("div",{className:"pointer-events-none absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-amber-300/70 to-transparent"}),n.jsxs("div",{className:"flex items-center justify-between border-b border-white/10 pb-3 mb-3",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"flex h-8 w-8 items-center justify-center rounded-xl bg-linear-to-br from-amber-300 to-orange-500 text-base shadow-md shadow-amber-500/40 ring-1 ring-white/30",children:"💰"}),n.jsxs("div",{children:[n.jsx("h3",{className:"text-sm font-black tracking-tight bg-linear-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent",children:"Cash Gobra — Menu"}),n.jsx("p",{className:"text-[10px] text-slate-400",children:"Select the page you want to open"})]})]}),n.jsx("button",{type:"button",onClick:()=>S(!1),className:"rounded-full p-1.5 text-slate-400 hover:text-white hover:bg-white/10 text-lg leading-none transition cursor-pointer",children:"✕"})]}),n.jsx("div",{className:"space-y-1.5 mb-4",children:Ji.map(V=>{const ce=l===V.id;return n.jsxs("button",{type:"button",onClick:()=>ue(V.id),className:`w-full flex items-center justify-between rounded-2xl p-3 text-left font-bold transition-all duration-200 cursor-pointer ${ce?"bg-linear-to-r from-indigo-500 via-blue-500 to-sky-500 text-white shadow-lg shadow-indigo-500/40 ring-1 ring-white/30":"border border-white/10 bg-white/5 text-slate-200 hover:-translate-y-px hover:bg-white/10"}`,children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("span",{className:`flex h-9 w-9 items-center justify-center rounded-xl text-lg ${ce?"bg-white/20 shadow-inner":"bg-white/10"}`,children:V.icon}),n.jsx("div",{children:n.jsx("span",{className:`text-sm block ${ce?"font-black":""}`,children:V.label})})]}),ce&&n.jsx("span",{className:"rounded-full bg-white/25 px-2.5 py-0.5 text-xs font-black backdrop-blur",children:"✓ Active"})]},V.id)})}),n.jsxs("div",{className:"border-t border-white/10 pt-3 space-y-2",children:[n.jsx("span",{className:"text-[10px] font-black uppercase tracking-wider text-slate-400 block px-1",children:"Tools & Cloud Database"}),n.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[n.jsxs("button",{type:"button",onClick:()=>{S(!1),d?d():window.dispatchEvent(new CustomEvent("open-date-tracker"))},className:"col-span-2 flex items-center justify-center gap-2 rounded-xl border border-amber-300/30 bg-amber-400/10 p-2.5 text-xs font-bold text-amber-200 transition-all duration-200 cursor-pointer hover:-translate-y-px hover:bg-amber-400/20",children:[n.jsx("span",{className:"text-base",children:"📅"}),n.jsx("span",{children:"Working-Day & Transaction Audit Tracker"})]}),n.jsxs("button",{type:"button",onClick:()=>{S(!1),h(!0)},className:"flex items-center justify-center gap-1.5 rounded-xl border border-teal-300/30 bg-teal-400/10 p-2.5 text-xs font-bold text-teal-200 transition-all duration-200 cursor-pointer hover:-translate-y-px hover:bg-teal-400/20",children:[n.jsx("span",{className:"text-base",children:"🐘"}),n.jsx("span",{children:"Neon Database"})]}),n.jsxs("button",{type:"button",onClick:()=>{S(!1),f(!0)},className:"flex items-center justify-center gap-1.5 rounded-xl border border-emerald-300/30 bg-emerald-400/10 p-2.5 text-xs font-bold text-emerald-200 transition-all duration-200 cursor-pointer hover:-translate-y-px hover:bg-emerald-400/20",children:[n.jsx("span",{className:"text-base",children:"📊"}),n.jsx("span",{children:"Google Sheet"})]}),n.jsxs("button",{type:"button",onClick:()=>{S(!1),window.dispatchEvent(new CustomEvent("open-day-admin"))},className:"col-span-2 flex items-center justify-center gap-2 rounded-xl border border-violet-300/30 bg-violet-500/15 p-2.5 text-xs font-bold text-violet-200 transition-all duration-200 cursor-pointer hover:-translate-y-px hover:bg-violet-500/25",children:[n.jsx("span",{className:"text-base",children:"⚙️"}),n.jsx("span",{children:"Day Admin — Close / Re-open / পুরনো দিন এডিট"})]}),n.jsxs("button",{type:"button",onClick:()=>{S(!1),H(!0)},className:"col-span-2 flex items-center justify-center gap-2 rounded-xl border border-indigo-300/30 bg-indigo-400/10 p-2.5 text-xs font-bold text-indigo-200 transition-all duration-200 cursor-pointer hover:-translate-y-px hover:bg-indigo-400/20",children:[n.jsx("span",{className:"text-base",children:"📱"}),n.jsx("span",{children:"Install App & Download APK"})]})]})]})]})]}),n.jsx(sS,{open:x,onClose:()=>h(!1)}),n.jsx(aS,{open:A,onClose:()=>f(!1)}),n.jsx(lS,{open:b,onClose:()=>H(!1),deferredPrompt:P})]})}function oS(){const[l,o]=p.useState(()=>navigator.onLine),[u,c]=p.useState(or()),[d,A]=p.useState(!1);return p.useEffect(()=>{const f=()=>{o(!0),A(!0),rr().catch(()=>{});const v=setTimeout(()=>{A(!1)},5e3);return()=>clearTimeout(v)},x=()=>{o(!1),A(!1)},h=v=>{v.detail&&c(v.detail)};return window.addEventListener("online",f),window.addEventListener("offline",x),window.addEventListener("neon-sync-status-changed",h),()=>{window.removeEventListener("online",f),window.removeEventListener("offline",x),window.removeEventListener("neon-sync-status-changed",h)}},[]),l?d?n.jsxs("div",{className:"mb-2.5 rounded-2xl border-2 border-emerald-400 bg-emerald-500/10 px-3.5 py-2.5 text-xs sm:text-sm font-bold text-emerald-900 shadow-sm print:hidden flex items-center justify-between gap-2 animate-in fade-in duration-200",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-base",children:"✅"}),n.jsxs("div",{className:"leading-snug",children:[n.jsx("span",{className:"font-black",children:"ইন্টারনেট পুনঃসংযুক্ত:"})," ",n.jsx("span",{className:"font-medium text-emerald-800",children:"অফলাইনে এন্ট্রি করা ডাটা ক্লাউডে অটো-সিঙ্ক সম্পন্ন হয়েছে!"})]})]}),u.isSyncing&&n.jsx("span",{className:"shrink-0 animate-spin text-xs",children:"🔄"})]}):null:n.jsxs("div",{className:"mb-2.5 rounded-2xl border-2 border-amber-400 bg-amber-500/10 px-3.5 py-2.5 text-xs sm:text-sm font-bold text-amber-900 shadow-sm print:hidden flex items-center justify-between gap-2 animate-in fade-in duration-200",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"flex h-3 w-3 rounded-full bg-amber-500 animate-ping shrink-0"}),n.jsxs("div",{className:"leading-snug",children:[n.jsx("span",{className:"font-black",children:"⚡ অফলাইন মোড সক্রিয়:"})," ",n.jsx("span",{className:"font-medium text-amber-800",children:"ইন্টারনেট সংযোগ নেই। আপনি নিশ্চিন্তে কাজ চালিয়ে যেতে পারেন, সকল ডাটা ডিভাইসে জমা থাকছে।"})]})]}),u.pendingCount>0&&n.jsxs("span",{className:"shrink-0 rounded-lg bg-amber-600 px-2 py-0.5 text-[11px] font-black text-white",children:[u.pendingCount,"টি পেন্ডিং"]})]})}function iS({selectedDate:l,onSelectDate:o,onOpenTracker:u}){const[c,d]=p.useState([]),[A,f]=p.useState(!1),x=()=>{try{const S=Xm().filter(b=>b.date<l&&!b.isClosed&&(b.txCount>0||b.srCount>0));d(S)}catch{d([])}};if(p.useEffect(()=>{f(!1),x()},[l]),p.useEffect(()=>{const v=()=>{x()};return window.addEventListener("tx-changed",v),window.addEventListener("storage",v),()=>{window.removeEventListener("tx-changed",v),window.removeEventListener("storage",v)}},[l]),A||c.length===0)return null;const h=c[0];return n.jsx("div",{className:"mb-3 rounded-2xl border-2 border-amber-400 bg-linear-to-r from-amber-50 via-orange-50 to-amber-100/70 p-3 sm:p-4 text-amber-950 shadow-md animate-in fade-in slide-in-from-top duration-200",children:n.jsxs("div",{className:"flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3",children:[n.jsxs("div",{className:"flex items-start gap-2.5",children:[n.jsx("div",{className:"flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-500 text-white shadow-xs text-lg font-black animate-pulse",children:"⚠️"}),n.jsxs("div",{children:[n.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[n.jsx("span",{className:"font-black text-amber-950 text-xs sm:text-sm",children:"অসমাপ্ত দিনের লেনদেন সতর্কবার্তা!"}),n.jsxs("span",{className:"rounded-full bg-amber-500/20 px-2 py-0.5 text-[10px] font-bold text-amber-900 border border-amber-400",children:[c.length," টি কর্মদিবস অমিল"]})]}),n.jsxs("p",{className:"mt-1 text-[11px] sm:text-xs text-amber-900 leading-relaxed font-medium",children:["আপনার বর্তমান তারিখ"," ",n.jsx("strong",{className:"font-mono text-blue-800",children:Ze(l)||l}),"-এর পূর্বে"," ",n.jsxs("strong",{className:"font-mono text-rose-700 underline",children:[h.date," (",h.dayName,")"]})," ","তারিখে লেনদেন রয়েছে কিন্তু ",n.jsx("strong",{children:"দিন সমাপ্ত (Day Close)"})," করা হয়নি। এটি কোনো ভুল এন্ট্রি হলে মুছে ফেলুন, অথবা কাজ হয়ে থাকলে দিন সমাপ্ত করুন।"]})]})]}),n.jsxs("div",{className:"flex items-center gap-2 self-end sm:self-center shrink-0",children:[n.jsxs("button",{type:"button",onClick:()=>o(h.date),className:"rounded-xl bg-amber-600 hover:bg-amber-700 active:bg-amber-800 px-3.5 py-1.5 text-xs font-black text-white shadow-xs transition flex items-center gap-1.5 cursor-pointer",children:[n.jsx("span",{children:"📅"}),n.jsxs("span",{children:[h.date," তারিখে যান"]})]}),n.jsx("button",{type:"button",onClick:u,className:"rounded-xl border border-amber-400 bg-white hover:bg-amber-50 px-2.5 py-1.5 text-xs font-bold text-amber-950 shadow-2xs transition cursor-pointer",title:"সকল তারিখের বিস্তারিত তালিকা",children:"📋 ট্র্যাকার"}),n.jsx("button",{type:"button",onClick:()=>f(!0),className:"flex h-7 w-7 items-center justify-center rounded-lg text-amber-700 hover:bg-amber-200/60 transition cursor-pointer font-bold text-xs",title:"লুকিয়ে রাখুন",children:"✕"})]})]})})}function cS({isOpen:l,onClose:o,selectedDate:u,onSelectDate:c}){const[d,A]=p.useState([]),f=()=>{A(Xm())};return p.useEffect(()=>{l&&f()},[l]),p.useEffect(()=>{const x=()=>{l&&f()};return window.addEventListener("tx-changed",x),window.addEventListener("storage",x),()=>{window.removeEventListener("tx-changed",x),window.removeEventListener("storage",x)}},[l]),l?n.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-3 sm:p-4 backdrop-blur-xs animate-in fade-in duration-150",children:n.jsxs("div",{className:"relative flex max-h-[90vh] w-full max-w-4xl flex-col rounded-2xl bg-white shadow-2xl border border-slate-200 overflow-hidden",children:[n.jsxs("div",{className:"flex items-center justify-between border-b border-slate-200 bg-slate-50 px-4 py-3 sm:px-6",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"flex h-9 w-9 items-center justify-center rounded-xl bg-blue-100 text-blue-700 text-lg shadow-xs",children:"📅"}),n.jsxs("div",{children:[n.jsx("h2",{className:"text-sm sm:text-base font-black text-slate-900",children:"কর্মদিবস ও লেনদেন অডিট ট্র্যাকার (Date Status Tracker)"}),n.jsx("p",{className:"text-[11px] sm:text-xs text-slate-500",children:"কোনো তারিখে ভুল এন্ট্রি হয়েছে কি না বা দিন সমাপ্ত (Day Close) বাকি আছে কি না তা সহজে যাচাই করুন"})]})]}),n.jsx("button",{type:"button",onClick:o,className:"flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 text-slate-600 hover:bg-rose-100 hover:text-rose-700 transition font-bold text-sm cursor-pointer",title:"বন্ধ করুন",children:"✕"})]}),n.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 bg-amber-50/60 px-4 py-2 text-[11px] sm:text-xs",children:[n.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[n.jsxs("span",{className:"flex items-center gap-1 font-bold text-emerald-800",children:[n.jsx("span",{className:"h-2.5 w-2.5 rounded-full bg-emerald-500 inline-block"}),"সবুজ = দিন সমাপ্ত (Day Closed)"]}),n.jsxs("span",{className:"flex items-center gap-1 font-bold text-amber-800",children:[n.jsx("span",{className:"h-2.5 w-2.5 rounded-full bg-amber-500 inline-block animate-pulse"}),"কমলা = অসমাপ্ত লেনদেন (Unclosed)"]})]}),n.jsxs("span",{className:"text-slate-600 font-medium",children:["বর্তমান সিলেক্ট করা তারিখ:"," ",n.jsx("span",{className:"font-mono font-bold text-blue-700",children:u})]})]}),n.jsx("div",{className:"flex-1 overflow-auto p-3 sm:p-4",children:d.length===0?n.jsx("div",{className:"p-8 text-center text-slate-400 text-xs sm:text-sm",children:"এখনও কোনো লেনদেনের তথ্য পাওয়া যায়নি।"}):n.jsx("div",{className:"overflow-x-auto rounded-xl border border-slate-200",children:n.jsxs("table",{className:"w-full border-collapse text-left text-xs",children:[n.jsx("thead",{children:n.jsxs("tr",{className:"bg-slate-100 text-slate-700 border-b border-slate-200 font-bold uppercase tracking-wider text-[11px]",children:[n.jsx("th",{className:"p-2.5 text-center w-12",children:"ক্র."}),n.jsx("th",{className:"p-2.5",children:"তারিখ ও বার"}),n.jsx("th",{className:"p-2.5 text-center",children:"লেনদেন সংখ্যা"}),n.jsx("th",{className:"p-2.5 text-right",children:"মোট জমা (রিসিভ)"}),n.jsx("th",{className:"p-2.5 text-right",children:"মোট খরচ (পেমেন্ট)"}),n.jsx("th",{className:"p-2.5 text-center",children:"স্ট্যাটাস"}),n.jsx("th",{className:"p-2.5 text-center w-28",children:"অ্যাকশন"})]})}),n.jsx("tbody",{className:"divide-y divide-slate-100 font-medium",children:d.map((x,h)=>{const v=x.date===u,S=!x.isClosed&&(x.txCount>0||x.srCount>0);return n.jsxs("tr",{className:`transition ${v?"bg-blue-50/80 font-semibold":S?"bg-amber-50/40 hover:bg-amber-50":"hover:bg-slate-50"}`,children:[n.jsx("td",{className:"p-2.5 text-center text-slate-400 font-mono text-[11px]",children:h+1}),n.jsx("td",{className:"p-2.5 whitespace-nowrap",children:n.jsxs("div",{className:"flex items-center gap-1.5",children:[n.jsx("span",{className:"font-mono font-bold text-slate-900",children:x.date}),n.jsx("span",{className:"text-[11px] text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded",children:x.dayName}),v&&n.jsx("span",{className:"rounded bg-blue-600 px-1.5 py-0.5 text-[10px] font-bold text-white",children:"Active"})]})}),n.jsxs("td",{className:"p-2.5 text-center whitespace-nowrap font-mono",children:[n.jsxs("span",{className:"text-emerald-700 font-bold",children:[x.receiveCount," Rec"]})," / ",n.jsxs("span",{className:"text-rose-700 font-bold",children:[x.paymentCount," Pay"]}),x.srCount>0&&n.jsxs("span",{className:"text-purple-700 text-[10px] ml-1",children:["(",x.srCount," SR)"]})]}),n.jsx("td",{className:"p-2.5 text-right font-mono font-bold text-emerald-700 whitespace-nowrap",children:x.receiveTotal>0?Number(x.receiveTotal).toLocaleString("en-IN"):"—"}),n.jsx("td",{className:"p-2.5 text-right font-mono font-bold text-rose-700 whitespace-nowrap",children:x.paymentTotal>0?Number(x.paymentTotal).toLocaleString("en-IN"):"—"}),n.jsx("td",{className:"p-2.5 text-center whitespace-nowrap",children:x.isClosed?n.jsxs("div",{className:"inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-1 text-[11px] font-bold text-emerald-800",children:[n.jsx("span",{className:"h-2 w-2 rounded-full bg-emerald-600"}),n.jsx("span",{children:"সমাপ্ত (Closed)"})]}):x.isOpen?n.jsxs("div",{className:"inline-flex items-center gap-1 rounded-full bg-blue-100 px-2.5 py-1 text-[11px] font-bold text-blue-900 border border-blue-300",children:[n.jsx("span",{className:"h-2 w-2 rounded-full bg-blue-600 animate-pulse"}),n.jsx("span",{children:"☀️ চলমান (Day Open)"})]}):pt(x.date).blocked?n.jsxs("div",{className:"inline-flex items-center gap-1 rounded-full bg-rose-100 px-2.5 py-1 text-[11px] font-bold text-rose-900 border border-rose-300",children:[n.jsx("span",{className:"h-2 w-2 rounded-full bg-rose-600"}),n.jsx("span",{children:"🚫 ব্লকড দিন"})]}):S?n.jsxs("div",{className:"inline-flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-1 text-[11px] font-bold text-amber-900 border border-amber-300",children:[n.jsx("span",{className:"h-2 w-2 rounded-full bg-amber-600 animate-ping"}),n.jsx("span",{children:"অসমাপ্ত (Unclosed)"})]}):n.jsx("span",{className:"text-slate-400 text-[11px]",children:"শুরু হয়নি (Not Opened)"})}),n.jsx("td",{className:"p-2.5 text-center whitespace-nowrap",children:n.jsx("button",{type:"button",onClick:()=>{c(x.date),o()},className:`rounded-lg px-2.5 py-1 text-xs font-bold transition shadow-xs cursor-pointer ${v?"bg-slate-200 text-slate-700 cursor-default":"bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800"}`,children:v?"চলমান":"এই তারিখে যান ➔"})})]},x.date)})})]})})}),n.jsxs("div",{className:"flex items-center justify-between border-t border-slate-200 bg-slate-50 px-4 py-3 sm:px-6",children:[n.jsx("p",{className:"text-[11px] text-slate-500",children:"টিপস: কোনো বন্ধের দিনে ভুল এন্ট্রি হলে সেই তারিখে গিয়ে সহজেই লেনদেনগুলো দেখে নিশ্চিত বা ডিলিট করতে পারবেন।"}),n.jsx("button",{type:"button",onClick:o,className:"rounded-xl bg-slate-800 px-4 py-1.5 text-xs font-bold text-white hover:bg-slate-700 transition cursor-pointer",children:"বন্ধ করুন"})]})]})}):null}function uS({selectedDate:l,onOpenDayModal:o}){const[u,c]=p.useState("not_opened"),[d,A]=p.useState(0),[f,x]=p.useState(0),[h,v]=p.useState(!1),[S,b]=p.useState(!1),H=p.useRef(null),P=()=>{var L;c(_R(l));try{const _=Fn(l);A(_.prevCash||0),x(_.prevBank||0),v(!!((L=gm(l))!=null&&L.manualOpening))}catch{}};p.useEffect(()=>{P()},[l]),p.useEffect(()=>{const L=()=>P();window.addEventListener("tx-changed",L),window.addEventListener("day-close-changed",L),window.addEventListener("day-open-changed",L),window.addEventListener("storage",L);const _=()=>{window.scrollTo({top:0,behavior:"smooth"}),b(!0),window.setTimeout(()=>b(!1),2400)};return window.addEventListener("scroll-to-day-bar",_),()=>{window.removeEventListener("tx-changed",L),window.removeEventListener("day-close-changed",L),window.removeEventListener("day-open-changed",L),window.removeEventListener("storage",L),window.removeEventListener("scroll-to-day-bar",_)}},[l]);const G=pt(l),K=()=>{confirm(`আপনি কি নিশ্চিত যে ${l} তারিখের হিসাবটি পুনরায় আনলক/ওপেন (Re-open) করতে চান?`)&&(pm(l),P(),window.dispatchEvent(new Event("day-open-changed")),window.dispatchEvent(new Event("day-close-changed")))};return u==="not_opened"?n.jsx("div",{ref:H,className:`mb-4 rounded-2xl border-2 border-amber-400 bg-linear-to-r from-amber-50 via-orange-50 to-amber-100/70 p-3.5 sm:p-4 text-amber-950 shadow-sm animate-in fade-in duration-200 ${S?"day-bar-flash":""}`,children:n.jsxs("div",{className:"flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3",children:[n.jsxs("div",{className:"flex items-start gap-2.5",children:[n.jsx("span",{className:"flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-500 text-white text-lg font-black shadow-xs",children:"☀️"}),n.jsxs("div",{children:[n.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[n.jsx("span",{className:"font-black text-amber-950 text-xs sm:text-sm",children:"কর্মদিবস এখনও শুরু (Day Open) করা হয়নি!"}),n.jsx("span",{className:"rounded-full bg-amber-500/20 px-2 py-0.5 text-[10px] font-bold text-amber-900 border border-amber-300",children:"Not Opened"})]}),n.jsxs("p",{className:"mt-1 text-[10px] sm:text-[11px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-lg px-2 py-0.5 inline-block font-mono",children:[Ze(l)," • প্রারম্ভিক ক্যাশ: ৳ ",Ae(d)," • প্রারম্ভিক ব্যাংক: ৳ ",Ae(f)]})]})]}),n.jsxs("button",{type:"button",onClick:o,disabled:G.blocked,className:"self-end sm:self-center shrink-0 rounded-xl bg-linear-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 active:scale-98 text-white px-4 py-2 text-xs font-black shadow-sm transition flex items-center gap-1.5 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed animate-pulse",title:G.blocked?G.reason||"এই তারিখে Day Open করা যাবে না":"কর্মদিবস শুরু করুন",children:[n.jsx("span",{children:"☀️"}),n.jsx("span",{children:G.blocked?"তারিখ ব্লকড":"কর্মদিবস শুরু (Day Open) করুন"})]}),n.jsx("button",{type:"button",onClick:()=>window.dispatchEvent(new CustomEvent("open-day-admin")),className:"shrink-0 self-end sm:self-center rounded-xl border border-violet-300 bg-violet-50 px-2.5 py-2 text-xs font-black text-violet-700 shadow-xs transition hover:bg-violet-100 cursor-pointer",title:"⚙️ Day Admin — সব কর্মদিবস Close/Re-open/এডিট এক জায়গায়",children:"⚙️"})]})}):u==="closed"?n.jsxs("div",{ref:H,className:`mb-4 rounded-2xl border border-rose-300 bg-rose-50 p-3 text-xs sm:text-sm font-bold text-rose-900 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 ${S?"day-bar-flash":""}`,children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-base",children:"🔒"}),n.jsxs("span",{children:["এই তারিখের (",l,") দিন সমাপ্ত (Day Closed) রয়েছে। হিসাব লক ও সুরক্ষিত আছে — কোনো এন্ট্রি বা পরিবর্তন করা যাবে না।"]})]}),n.jsxs("button",{type:"button",onClick:K,className:"shrink-0 self-end sm:self-center rounded-xl bg-amber-600 hover:bg-amber-700 text-white px-3.5 py-1.5 text-xs font-black shadow-xs transition cursor-pointer flex items-center gap-1.5",title:"দিনটি পুনরায় আনলক/ওপেন করুন",children:[n.jsx("span",{children:"🔓"}),n.jsx("span",{children:"Re-open Day"})]}),n.jsx("button",{type:"button",onClick:()=>window.dispatchEvent(new CustomEvent("open-day-admin")),className:"shrink-0 self-end sm:self-center rounded-xl border border-violet-300 bg-violet-50 px-2.5 py-1.5 text-xs font-black text-violet-700 shadow-xs transition hover:bg-violet-100 cursor-pointer",title:"⚙️ Day Admin — সব কর্মদিবস Close/Re-open/এডিট এক জায়গায়",children:"⚙️"})]}):n.jsxs("div",{ref:H,className:`mb-4 rounded-xl border border-emerald-300 bg-emerald-50/70 px-3.5 py-2 text-xs text-emerald-900 shadow-2xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 ${S?"day-bar-flash":""}`,children:[n.jsxs("div",{className:"flex items-center gap-1.5 flex-wrap",children:[n.jsx("span",{className:"h-2 w-2 rounded-full bg-emerald-500 animate-pulse"}),n.jsxs("span",{className:"font-bold",children:["☀️ ",l," কর্মদিবস চালু রয়েছে (Day Open)"]}),n.jsx("span",{className:"rounded bg-emerald-600 px-1.5 py-0.5 text-[10px] font-bold text-white uppercase",children:"Open ✓"}),h&&n.jsx("span",{className:"rounded border border-fuchsia-300 bg-fuchsia-50 px-1.5 py-0.5 text-[10px] font-black text-fuchsia-700",title:"এই দিনের প্রারম্ভিক ক্যাশ/ব্যাংক হাতে টাইপ করে বসানো হয়েছে",children:"✍️ ম্যানুয়াল ওপেনিং"}),n.jsx("span",{className:"text-slate-500 text-[11px] hidden md:inline",children:"— দিনের কাজ শেষে এখান থেকেই Day Close করুন"})]}),n.jsxs("div",{className:"flex items-center gap-2 self-end sm:self-center shrink-0",children:[n.jsxs("button",{type:"button",onClick:()=>window.dispatchEvent(new CustomEvent("open-day-open-modal")),className:"rounded-xl border border-emerald-400 bg-white px-3 py-1.5 text-xs font-black text-emerald-800 shadow-xs transition hover:bg-emerald-100 cursor-pointer flex items-center gap-1.5",title:"প্রারম্ভিক ক্যাশ/ব্যাংক দেখুন বা হাতে টাইপ করে সংশোধন করুন",children:[n.jsx("span",{children:"✏️"}),n.jsx("span",{children:"ওপেনিং"})]}),n.jsxs("button",{type:"button",onClick:()=>window.dispatchEvent(new CustomEvent("open-day-close-modal")),disabled:G.blocked,className:"rounded-xl bg-linear-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-3.5 py-1.5 text-xs font-black shadow-sm transition cursor-pointer flex items-center gap-1.5 disabled:opacity-50 disabled:cursor-not-allowed",title:G.blocked?"মধ্যবর্তী বন্ধের দিন (Day Close করা যাবে না)":"এই তারিখের হিসাব চূড়ান্তভাবে বন্ধ ও লক করুন",children:[n.jsx("span",{children:G.blocked?"🚫":"🔒"}),n.jsx("span",{children:G.blocked?"তারিখ ব্লকড":"Day Close করুন"})]}),n.jsx("button",{type:"button",onClick:()=>window.dispatchEvent(new CustomEvent("open-day-admin")),className:"shrink-0 rounded-xl border border-violet-300 bg-violet-50 px-2.5 py-1.5 text-xs font-black text-violet-700 shadow-xs transition hover:bg-violet-100 cursor-pointer",title:"⚙️ Day Admin — সব কর্মদিবস Close/Re-open/এডিট এক জায়গায়",children:"⚙️"})]})]})}const Xi=/^-?\d*\.?\d*$/;function dS({isOpen:l,onClose:o,selectedDate:u,onDayOpened:c}){const[d,A]=p.useState({cash:0,bank:0,dayName:""}),[f,x]=p.useState("0"),[h,v]=p.useState("0"),[S,b]=p.useState(""),[H,P]=p.useState(!1),[G,K]=p.useState(!1),[L,_]=p.useState(!1),[ue,C]=p.useState("");if(p.useEffect(()=>{if(!(!l||!u))try{const pe=Fn(u,{skipManualOpeningFor:u}),[j,O,R]=u.split("-").map(Number),I=new Date(j,O-1,R),re=["রবিবার","সোমবার","মঙ্গলবার","বুধবার","বৃহস্পতিবার","শুক্রবার","শনিবার"],ee=isNaN(I.getDay())?"":re[I.getDay()],M=Math.round(Number(pe.prevCash)||0),U=Math.round(Number(pe.prevBank)||0);A({cash:M,bank:U,prevDate:pe.prevDate,dayName:ee}),P(_t(u)||!!gm(u));const B=gm(u);B&&B.manualOpening?(x(String(Math.round(Number(B.openingCash)||0))),v(String(Math.round(Number(B.openingBank)||0))),b(B.openingNote||""),K(!0)):(x(String(M)),v(String(U)),b(""),K(!1)),C("")}catch(pe){console.error(pe)}},[l,u]),!l)return null;const q=Math.round(Number(f)||0),k=Math.round(Number(h)||0),V=q-d.cash,ce=k-d.bank,E=V!==0||ce!==0,se=()=>{x(String(d.cash)),v(String(d.bank)),b(""),C("")},ie=()=>{if(Ie(u)){C(`🔒 ${Ze(u)||u} তারিখের দিন সমাপ্ত (Day Closed) — ওপেনিং বদলানো যাবে না।`);return}if(!Xi.test(String(f).trim())||!Xi.test(String(h).trim())){C("⚠️ সঠিক সংখ্যা দিন (যেমন: 50000 বা 50000.50)");return}if(!(E&&!window.confirm(`✍️ ওপেনিং হাতে বসানো হচ্ছে:

হাতে নগদ: ৳${Ae(d.cash)}  →  ৳${Ae(q)}   (${V>=0?"+":"−"}৳${Ae(Math.abs(V))})
ব্যাংক: ৳${Ae(d.bank)}  →  ৳${Ae(k)}   (${ce>=0?"+":"−"}৳${Ae(Math.abs(ce))})

এই সংখ্যা থেকেই আজকের হিসাব এবং পরের কর্মদিবসগুলোর ওপেনিং চলবে।
নিশ্চিত করুন?`))){_(!0);try{Wb(u,"Cashier",E?{cash:q,bank:k,note:S}:null),c&&c(),o()}catch(pe){C((pe==null?void 0:pe.message)||"দিন শুরু করতে সমস্যা হয়েছে।")}finally{_(!1)}}},ne=pe=>pe===0?null:n.jsxs("span",{className:`mt-1 inline-block rounded-md border px-1.5 py-0.5 font-mono text-[10px] font-black ${pe>0?"border-emerald-300 bg-emerald-100 text-emerald-800":"border-rose-300 bg-rose-100 text-rose-800"}`,children:["পার্থক্য ",pe>0?"+":"−","৳",Ae(Math.abs(pe))]}),me="w-full rounded-lg border-2 bg-white px-2.5 py-2 text-right font-mono text-base font-black text-slate-900 outline-none focus:ring-2";return n.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-xs animate-in fade-in duration-150",children:n.jsxs("div",{className:"relative w-full max-w-lg max-h-[92vh] overflow-auto rounded-2xl bg-white shadow-2xl border border-slate-200",children:[n.jsxs("div",{className:"flex items-center justify-between border-b border-amber-200 bg-linear-to-r from-amber-500 to-orange-500 px-5 py-3.5 text-white",children:[n.jsxs("div",{className:"flex items-center gap-2.5",children:[n.jsx("span",{className:"flex h-9 w-9 items-center justify-center rounded-xl bg-white/20 text-xl font-bold shadow-xs",children:H?"✏️":"☀️"}),n.jsxs("div",{children:[n.jsx("h3",{className:"text-base font-black tracking-tight",children:H?"ওপেনিং সংশোধন (Opening Edit)":"কর্মদিবস শুরু (Day Open)"}),n.jsx("p",{className:"text-[11px] text-amber-100",children:"প্রারম্ভিক হাতে নগদ ও ব্যাংক স্থিতি — প্রয়োজনে হাতে টাইপ করে বসানো যাবে"})]})]}),n.jsx("button",{type:"button",onClick:o,className:"flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/30 transition text-sm font-bold cursor-pointer",children:"✕"})]}),n.jsxs("div",{className:"p-5 space-y-4 text-slate-800",children:[n.jsxs("div",{className:"rounded-xl border border-amber-200 bg-amber-50/70 p-3.5 flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsx("span",{className:"text-[11px] font-bold text-amber-800 uppercase tracking-wider block",children:H?"কর্মদিবস (Working Date)":"শুরু করার তারিখ (Working Date)"}),n.jsxs("span",{className:"font-mono text-lg font-black text-slate-900 mt-0.5 block",children:[u," ",n.jsxs("span",{className:"text-sm font-sans font-bold text-amber-900",children:["(",d.dayName,")"]})]})]}),n.jsx("span",{className:"rounded-lg bg-amber-500 px-2.5 py-1 text-xs font-black text-white shadow-xs",children:Ze(u)})]}),n.jsxs("div",{className:"rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-3",children:[n.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 text-xs border-b border-slate-200 pb-2",children:[n.jsx("span",{className:"font-bold text-slate-600",children:"পূর্ববর্তী সমাপ্ত কর্মদিবস:"}),n.jsxs("div",{className:"flex items-center gap-2",children:[G&&n.jsx("span",{className:"rounded border border-fuchsia-300 bg-fuchsia-50 px-2 py-0.5 text-[10px] font-black text-fuchsia-700",title:"এই দিনের ওপেনিং আগে হাতে বসানো হয়েছিল",children:"✍️ ম্যানুয়াল ওপেনিং বসানো আছে"}),n.jsx("span",{className:"font-mono font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200",children:d.prevDate?Ze(d.prevDate):"প্রারম্ভিক দিন"})]})]}),n.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1",children:[n.jsxs("div",{className:"rounded-xl bg-emerald-50 border border-emerald-300 p-3",children:[n.jsx("span",{className:"text-[11px] font-bold text-emerald-800 block text-center",children:"প্রারম্ভিক ক্যাশ (Cash in Hand)"}),n.jsxs("span",{className:"mt-1 block text-center text-[10px] font-bold text-emerald-700",children:["অ্যাপের হিসাব:"," ",n.jsxs("span",{className:"font-mono font-black",children:["৳",Ae(d.cash)]})]}),n.jsxs("div",{className:"mt-1.5 flex items-center gap-1",children:[n.jsx("span",{className:"text-sm font-black text-emerald-800",children:"৳"}),n.jsx("input",{value:f,onChange:pe=>{Xi.test(pe.target.value)&&(x(pe.target.value),C(""))},inputMode:"decimal",autoComplete:"off",placeholder:"0",className:`${me} border-emerald-400 focus:border-emerald-600 focus:ring-emerald-200`})]}),n.jsx("div",{className:"text-center",children:ne(V)})]}),n.jsxs("div",{className:"rounded-xl bg-indigo-50 border border-indigo-300 p-3",children:[n.jsx("span",{className:"text-[11px] font-bold text-indigo-800 block text-center",children:"প্রারম্ভিক ব্যাংক স্থিতি (Bank)"}),n.jsxs("span",{className:"mt-1 block text-center text-[10px] font-bold text-indigo-700",children:["অ্যাপের হিসাব:"," ",n.jsxs("span",{className:"font-mono font-black",children:["৳",Ae(d.bank)]})]}),n.jsxs("div",{className:"mt-1.5 flex items-center gap-1",children:[n.jsx("span",{className:"text-sm font-black text-indigo-800",children:"৳"}),n.jsx("input",{value:h,onChange:pe=>{Xi.test(pe.target.value)&&(v(pe.target.value),C(""))},inputMode:"decimal",autoComplete:"off",placeholder:"0",className:`${me} border-indigo-400 focus:border-indigo-600 focus:ring-indigo-200`})]}),n.jsx("div",{className:"text-center",children:ne(ce)})]})]}),E&&n.jsxs("div",{className:"space-y-2 rounded-xl border-2 border-fuchsia-300 bg-fuchsia-50/70 p-3",children:[n.jsxs("div",{className:"flex items-center justify-between gap-2",children:[n.jsx("span",{className:"text-[11px] font-black text-fuchsia-900",children:"✍️ ম্যানুয়াল ওপেনিং — এই সংখ্যাই আজকের ওপেনিং এবং পরের কর্মদিবসের ওপেনিং হিসেবে চলবে"}),n.jsx("button",{type:"button",onClick:se,className:"shrink-0 rounded-lg border border-slate-300 bg-white px-2.5 py-1 text-[11px] font-bold text-slate-700 transition hover:bg-slate-100 cursor-pointer",title:"অ্যাপের নিজের হিসাবে ফিরে যান",children:"↺ সিস্টেম মান"})]}),n.jsx("input",{value:S,onChange:pe=>b(pe.target.value),placeholder:"কারণ / নোট (ঐচ্ছিক) — যেমন: গত ছুটির দিনের হাতে নগদ সমন্বয়",autoComplete:"off",className:"w-full rounded-lg border border-fuchsia-300 bg-white px-3 py-2 text-xs font-semibold text-slate-900 outline-none focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-200"})]})]}),ue&&n.jsx("div",{className:"rounded-xl border border-rose-300 bg-rose-50 px-3 py-2 text-[11px] font-bold text-rose-800",children:ue}),n.jsxs("div",{className:"rounded-xl bg-blue-50 border border-blue-200 p-3 text-xs text-blue-900 flex items-start gap-2",children:[n.jsx("span",{className:"text-base shrink-0",children:"ℹ️"}),n.jsxs("p",{className:"leading-relaxed font-medium text-[11px] sm:text-xs",children:["সাধারণত অ্যাপের দেখানো সংখ্যাটাই ঠিক থাকে — সেটা আগের কর্মদিবসের ক্লোজিং। ছুটির দিন বা হাতের হিসাবে মিল না থাকলে উপরের ঘরে ",n.jsx("strong",{children:"হাতে টাইপ করে"})," ওপেনিং বসিয়ে দিন। দিন শুরু করার পরেও ",n.jsx("strong",{children:"Working-Day বারের ✏️ ওপেনিং"})," বাটন থেকে যেকোনো সময় সংশোধন করা যাবে (Day Close করার আগ পর্যন্ত)।"]})]})]}),n.jsxs("div",{className:"sticky bottom-0 flex items-center justify-end gap-2.5 border-t border-slate-200 bg-slate-50 px-5 py-3.5",children:[n.jsx("button",{type:"button",onClick:o,disabled:L,className:"rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 px-4 py-2 text-xs font-bold transition cursor-pointer",children:"বাতিল"}),n.jsxs("button",{type:"button",onClick:ie,disabled:L,className:"rounded-xl bg-linear-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-5 py-2 text-xs font-black shadow-md transition flex items-center gap-1.5 cursor-pointer disabled:opacity-50",children:[n.jsx("span",{children:H?"💾":"☀️"}),n.jsx("span",{children:L?"সেভ হচ্ছে...":H?E?"ওপেনিং সংশোধন করুন":"সেভ করুন":E?"ম্যানুয়াল ওপেনিং দিয়ে দিন শুরু করুন":"নিশ্চিত করুন ও দিন শুরু করুন"})]})]})]})})}const mS=()=>ss().map(l=>l.name),AS=(l,o)=>{const u=l.toLowerCase().trim(),c=o.toLowerCase().trim();return u===c||u.includes(c)||c.includes(u)};function Im(l){const o=Nn(l),u=ln(),c=Fn(l),d=c.prevCash,A=c.prevBank,f=ha("disburse").map(U=>U.name.toLowerCase().trim()),x=u.filter(U=>U.txDate===l),h=x.filter(U=>U.type==="receive"),v=x.filter(U=>U.type==="payment"),S=o.reduce((U,B)=>U+Number(B.loan||0),0),b=o.reduce((U,B)=>U+Number(B.savings||0),0),H=o.reduce((U,B)=>U+Number(B.dps||0),0),P=b+H,G=o.reduce((U,B)=>U+Number(B.passbook||0),0),K=o.reduce((U,B)=>U+Number(B.admission||0),0),L=S+P+G+K,_=o.reduce((U,B)=>U+Number(B.savingsAdjust||0),0),ue=o.reduce((U,B)=>U+Number(B.nogodReturn||0),0),C=_+ue,q=L,k=d,V=h.filter(U=>U.category.toLowerCase().includes("bank withdraw")).reduce((U,B)=>U+(Number(B.amount)||0),0),ce=v.filter(U=>{const B=U.category.toLowerCase().trim();return B.includes("fund payment")||B.includes("fund transfer")||B.includes("fund")&&!B.includes("receive")?!1:f.includes(B)||B.includes("jagoron")||B.includes("agrossor")||B.includes("buni")||B.includes("sufolon")||B.includes("mfce")||!!(U.subCategory&&U.subCategory.trim().length>0)}),E=ce.reduce((U,B)=>U+dr(Number(B.amount)||0,B.category,ts()),0),se=ce.length*5,ie=h.filter(U=>{const B=U.category.toLowerCase().trim();return!(B.includes("bank withdraw")||B.includes("fund receive")||B.includes("welfare")||B.includes("kallayan")||B.includes("loan form")||mS().some(ge=>AS(B,ge)))}).reduce((U,B)=>U+(Number(B.amount)||0),0),ne=ce.reduce((U,B)=>U+(Number(B.amount)||0),0),me=v.filter(U=>U.category.toLowerCase().includes("bank deposit")||U.category.toLowerCase().includes("bank deposite")).reduce((U,B)=>U+(Number(B.amount)||0),0),pe=C,j=v.filter(U=>{const B=U.category.toLowerCase().trim();return B.includes("fund payment")||B.includes("fund transfer")||B.includes("fund")&&!B.includes("receive")}).reduce((U,B)=>U+(Number(B.amount)||0),0),O=v.filter(U=>{const B=U.category.toLowerCase().trim();return!(ce.some(ge=>ge.id===U.id)||B.includes("bank deposit")||B.includes("bank deposite")||B.includes("fund payment")||B.includes("fund transfer")||B.includes("fund")&&!B.includes("receive"))}).reduce((U,B)=>U+(Number(B.amount)||0),0),R=[{label:"Today All Aday",amount:q},{label:"Hand Cash",amount:k},{label:"Bank Withdraw",amount:V},{label:"Kallayan",amount:E},{label:"Loan Form",amount:se},{label:"Others Income",amount:ie}].filter(U=>U.amount>0),I=[{label:"Disburse",amount:ne},{label:"Bank Deposit",amount:me},{label:"Savings Return",amount:pe},{label:"Fund Payment",amount:j},{label:"Others Expense",amount:O}].filter(U=>U.amount>0),re=R.reduce((U,B)=>U+B.amount,0),ee=I.reduce((U,B)=>U+B.amount,0),M=h.filter(U=>U.category.toLowerCase().includes("fund receive")).reduce((U,B)=>U+(Number(B.amount)||0),0);return{cash:re-ee,bank:A-V+me+M}}function fS({isOpen:l,onClose:o,selectedDate:u,onDayClosed:c}){const[d,A]=p.useState(0),[f,x]=p.useState(0),[h,v]=p.useState(0),[S,b]=p.useState(0),[H,P]=p.useState(!1);if(p.useEffect(()=>{if(!(!l||!u))try{const L=Fn(u),_=Im(u);A(L.receive||0),x(L.expense||0),v(_.cash||0),b(_.bank||0)}catch(L){console.error(L)}},[l,u]),!l)return null;const G=pt(u),K=()=>{if(!_t(u)){alert(`⚠️ ${u} তারিখে কোনো চলমান কর্মদিবস নেই। আগে Day Open করুন।`),o();return}if(G.blocked){alert(G.reason||"এই তারিখটি ব্লকড।"),o();return}P(!0);try{const L=Fn(u),_=Im(u),ue={closeDate:u,openingCash:L.prevCash,openingBank:L.prevBank,closingCash:_.cash,closingBank:_.bank,totalReceive:L.receive,totalPayment:L.expense,status:"closed",closedAt:new Date().toISOString(),closedBy:"Cashier",notes:"Day closed from Working-Day control"};Qb(ue),c&&c(),o()}catch(L){alert(L.message||"দিন ক্লোজ করতে সমস্যা হয়েছে।")}finally{P(!1)}};return fc.createPortal(n.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-xs animate-in fade-in duration-150",children:n.jsxs("div",{className:"relative w-full max-w-md rounded-2xl bg-white shadow-2xl border border-slate-200 overflow-hidden",children:[n.jsxs("div",{className:"flex items-center justify-between border-b border-emerald-200 bg-linear-to-r from-emerald-600 to-teal-600 px-5 py-3.5 text-white",children:[n.jsxs("div",{className:"flex items-center gap-2.5",children:[n.jsx("span",{className:"flex h-9 w-9 items-center justify-center rounded-xl bg-white/20 text-xl font-bold shadow-xs",children:"🔒"}),n.jsxs("div",{children:[n.jsx("h3",{className:"text-base font-black tracking-tight",children:"Day Close (দিন সমাপ্তি)"}),n.jsx("p",{className:"text-[11px] text-emerald-100",children:"কর্মদিবসটি বন্ধ ও লক করা হবে"})]})]}),n.jsx("button",{type:"button",onClick:o,className:"flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/30 transition text-sm font-bold cursor-pointer",children:"✕"})]}),n.jsxs("div",{className:"p-5 space-y-3.5 text-slate-800",children:[n.jsxs("div",{className:"rounded-xl border border-emerald-200 bg-emerald-50/60 p-3.5 flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsx("span",{className:"text-[11px] font-bold text-emerald-800 uppercase tracking-wider block",children:"সমাপ্ত করার তারিখ (Working Date)"}),n.jsx("span",{className:"font-mono text-lg font-black text-slate-900 mt-0.5 block",children:u})]}),n.jsx("span",{className:"rounded-lg bg-emerald-600 px-2.5 py-1 text-xs font-black text-white shadow-xs",children:Ze(u)})]}),n.jsxs("div",{className:"rounded-xl bg-slate-50 border border-slate-200 p-3 space-y-1.5 text-xs sm:text-sm",children:[n.jsxs("div",{className:"flex justify-between",children:[n.jsx("span",{className:"text-slate-600 font-semibold",children:"মোট রিসিভ:"}),n.jsx("span",{className:"font-mono font-black text-emerald-700",children:Ae(d)})]}),n.jsxs("div",{className:"flex justify-between",children:[n.jsx("span",{className:"text-slate-600 font-semibold",children:"মোট পেমেন্ট:"}),n.jsx("span",{className:"font-mono font-black text-rose-700",children:Ae(f)})]}),n.jsxs("div",{className:"mt-1.5 flex justify-between border-t border-slate-300 pt-1.5",children:[n.jsx("span",{className:"text-emerald-800 font-bold",children:"Today Cash:"}),n.jsx("span",{className:"font-mono font-black text-emerald-700",children:Ae(h)})]}),n.jsxs("div",{className:"flex justify-between",children:[n.jsx("span",{className:"text-indigo-800 font-bold",children:"Today Bank:"}),n.jsx("span",{className:"font-mono font-black text-indigo-700",children:Ae(S)})]})]}),n.jsxs("div",{className:"rounded-xl border border-emerald-300 bg-emerald-50 p-3 text-xs text-emerald-900 font-medium leading-relaxed",children:["✓ নিশ্চিত করলে এই তারিখের কর্মদিবসটি বন্ধ (Day Closed) হয়ে যাবে এবং এই তারিখের রিসিভ, পেমেন্ট ও স্টাফ কালেকশন — সব এন্ট্রি সম্পূর্ণ লক হয়ে যাবে।",n.jsxs("span",{className:"block mt-1 text-emerald-800",children:["পুনরায় কাজ করার প্রয়োজন হলে ",n.jsx("strong",{children:"Working-Day বার"})," থেকে"," ",n.jsx("strong",{children:"Re-open Day"})," করবেন।"]})]})]}),n.jsxs("div",{className:"flex items-center justify-end gap-2.5 border-t border-slate-200 bg-slate-50 px-5 py-3.5",children:[n.jsx("button",{type:"button",onClick:o,disabled:H,className:"rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 px-4 py-2 text-xs font-bold transition cursor-pointer",children:"বাতিল"}),n.jsxs("button",{type:"button",onClick:K,disabled:H,className:"rounded-xl bg-linear-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-5 py-2 text-xs font-black shadow-md transition flex items-center gap-1.5 cursor-pointer disabled:opacity-50",children:[n.jsx("span",{children:"🔒"}),n.jsx("span",{children:H?"ক্লোজ হচ্ছে...":"হ্যাঁ, ডে ক্লোজ করুন"})]})]})]})}),document.body)}const xS=()=>{var u,c,d,A;const l=new Set;for(const f of hl())(u=f.closeDate)!=null&&u.includes("-")&&l.add(f.closeDate);for(const f of Ks())(c=f.openDate)!=null&&c.includes("-")&&l.add(f.openDate);for(const f of ln())(d=f.txDate)!=null&&d.includes("-")&&l.add(f.txDate);for(const f of Nn())(A=f.reportDate)!=null&&A.includes("-")&&l.add(f.reportDate);const o=new Map;for(const f of ln())o.set(f.txDate,(o.get(f.txDate)||0)+1);for(const f of Nn())o.set(f.reportDate,(o.get(f.reportDate)||0)+1);return Array.from(l).sort().reverse().map(f=>({date:f,closed:Ie(f),open:_t(f),entries:o.get(f)||0,closure:Zm(f)}))},hS=(l,o="Admin")=>{const u=Fn(l),c=Im(l);return Qb({closeDate:l,openingCash:u.prevCash,openingBank:u.prevBank,closingCash:c.cash,closingBank:c.bank,totalReceive:u.receive,totalPayment:u.expense,status:"closed",closedAt:new Date().toISOString(),closedBy:o,notes:"Closed from ⚙️ Day Admin"})};function bS({isOpen:l,onClose:o,onJumpDate:u}){const[c,d]=p.useState(0),[A,f]=p.useState(""),[x,h]=p.useState(null),v=p.useMemo(()=>l?xS():[],[l,c]),S=p.useMemo(()=>{const L=v.filter(_=>_.open&&!_.closed).map(_=>_.date).sort();return L.length?L[0]:null},[v]);if(p.useEffect(()=>{l&&(d(L=>L+1),h(null))},[l]),!l)return null;const b=()=>d(L=>L+1),H=L=>{if(confirm(`🔒 ${Ze(L)||L} — এই কর্মদিবসটি ক্লোজ (লক) করবেন?

ক্লোজ হলে এই তারিখের সব এন্ট্রি লক হয়ে যাবে (প্রয়োজনে এখান থেকেই Re-open করা যাবে)।`)){try{hS(L),h({ok:!0,text:`✅ ${Ze(L)||L} — Day Closed হয়েছে।`})}catch(_){h({ok:!1,text:(_==null?void 0:_.message)||"ক্লোজ করা গেল না।"})}b()}},P=L=>{if(confirm(`🔓 ${Ze(L)||L} — এই দিনটি আবার আনলক (Re-open) করবেন?

আনলক হলে এই তারিখে আবার এন্ট্রি/এডিট করা যাবে।`)){try{pm(L),h({ok:!0,text:`🔓 ${Ze(L)||L} — আবার খোলা হয়েছে।`})}catch(_){h({ok:!1,text:(_==null?void 0:_.message)||"Re-open করা গেল না।"})}b()}},G=L=>{const _=Ie(L);if(!(_&&!confirm(`🔓 ${Ze(L)||L} দিনটি ক্লোজড।

এডিট করতে হলে আগে আনলক (Re-open) করতে হবে — আনলক করে সেই দিনে যাবেন?`))){try{_&&pm(L)}catch{}b(),u&&u(L)}},K=()=>{const L=A;if(!L)return h({ok:!1,text:"আগে একটি তারিখ বেছে নিন।"});if(Ie(L))return h({ok:!1,text:`${L} ক্লোজড — Day Open না, আগে Re-open করুন।`});if(_t(L))return h({ok:!1,text:`${L} ইতিমধ্যেই খোলা আছে।`});try{Wb(L,"Admin",null,{force:!0}),h({ok:!0,text:`☀️ ${Ze(L)||L} — Day Open হয়েছে (অ্যাডমিন)।`}),f("")}catch(_){h({ok:!1,text:(_==null?void 0:_.message)||"Day Open করা গেল না।"})}b()};return fc.createPortal(n.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-3 backdrop-blur-xs animate-in fade-in duration-150",children:n.jsxs("div",{className:"relative flex max-h-[92vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl",children:[n.jsxs("div",{className:"flex items-center justify-between border-b border-violet-200 bg-linear-to-r from-violet-700 to-indigo-600 px-5 py-3.5 text-white",children:[n.jsxs("div",{className:"flex items-center gap-2.5",children:[n.jsx("span",{className:"flex h-9 w-9 items-center justify-center rounded-xl bg-white/20 text-xl font-bold shadow-xs",children:"⚙️"}),n.jsxs("div",{children:[n.jsx("h3",{className:"text-base font-black tracking-tight",children:"Day Admin — কর্মদিবস নিয়ন্ত্রণ"}),n.jsx("p",{className:"text-[11px] text-violet-100",children:"যেকোনো দিন Close / Re-open / এডিট — এখান থেকেই"})]})]}),n.jsx("button",{type:"button",onClick:o,className:"flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white transition hover:bg-white/30 text-sm font-bold cursor-pointer",children:"✕"})]}),n.jsx("div",{className:`border-b px-4 py-2 text-[11px] font-black ${S?"border-amber-300 bg-amber-50 text-amber-900":"border-emerald-300 bg-emerald-50 text-emerald-900"}`,children:S?n.jsxs(n.Fragment,{children:["⚠️ সিকোয়েন্স-নিয়ম: ",n.jsx("span",{className:"font-mono",children:Ze(S)||S})," ","খোলা আছে — এটা Close না করলে পরের দিন Day Open হবে না।"]}):n.jsx(n.Fragment,{children:"✓ সব কর্মদিবস ধারাবাহিক — কোনো দিন আটকে নেই।"})}),x&&n.jsx("div",{className:`border-b px-4 py-2 text-[11px] font-bold ${x.ok?"border-emerald-200 bg-emerald-50 text-emerald-800":"border-rose-200 bg-rose-50 text-rose-800"}`,children:x.text}),n.jsxs("div",{className:"flex flex-wrap items-center gap-2 border-b border-slate-200 bg-slate-50 px-4 py-2.5",children:[n.jsx("span",{className:"text-[11px] font-black text-slate-700",children:"☀️ অ্যাডমিন Day Open:"}),n.jsx(hn,{value:A,onChange:f,manualEntry:!0,className:"w-36 px-2 py-1 text-xs"}),n.jsx("button",{type:"button",onClick:K,className:"rounded-lg bg-linear-to-r from-amber-600 to-orange-600 px-3 py-1.5 text-[11px] font-black text-white shadow-xs transition hover:from-amber-700 hover:to-orange-700 cursor-pointer",title:"সিকোয়েন্স-নিয়ম বাইপাস করে যেকোনো দিন খুলুন",children:"☀️ Day Open (নিয়ম-বাইপাস)"})]}),n.jsx("div",{className:"flex-1 space-y-2 overflow-auto p-3.5",children:v.length===0?n.jsx("p",{className:"py-10 text-center text-xs font-semibold text-slate-400",children:"এখনো কোনো কর্মদিবসের রেকর্ড নেই।"}):v.map(L=>n.jsxs("div",{className:`rounded-xl border p-3 ${L.closed?"border-rose-200 bg-rose-50/50":"border-emerald-300 bg-emerald-50/40"}`,children:[n.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[n.jsx("span",{className:"text-base",children:L.closed?"🔒":"☀️"}),n.jsx("span",{className:"font-mono text-sm font-black text-slate-900",children:L.date}),n.jsx("span",{className:"text-[11px] font-bold text-slate-500",children:Ze(L.date)}),n.jsx("span",{className:`rounded-full px-2 py-0.5 text-[10px] font-black ${L.closed?"bg-rose-600 text-white":"bg-emerald-600 text-white"}`,children:L.closed?"Day Closed":"Open"}),n.jsxs("span",{className:"ml-auto text-[10px] font-bold text-slate-500",children:["এন্ট্রি: ",n.jsx("span",{className:"font-mono",children:L.entries})]})]}),L.closure&&n.jsxs("div",{className:"mt-1.5 flex flex-wrap gap-x-3 gap-y-0.5 text-[10px] font-bold text-slate-600",children:[n.jsxs("span",{children:["ওপেনিং: ৳",Ae(L.closure.openingCash)," / ব্যাংক ৳",Ae(L.closure.openingBank)]}),n.jsxs("span",{children:["ক্লোজিং: ৳",Ae(L.closure.closingCash)," / ব্যাংক ৳",Ae(L.closure.closingBank)]}),L.closure.closedAt&&n.jsxs("span",{className:"text-slate-400",children:["ক্লোজ: ",new Date(L.closure.closedAt).toLocaleString("en-GB")]})]}),n.jsxs("div",{className:"mt-2 flex flex-wrap items-center gap-1.5",children:[L.closed?n.jsx("button",{type:"button",onClick:()=>P(L.date),className:"rounded-lg bg-amber-600 px-3 py-1.5 text-[11px] font-black text-white shadow-xs transition hover:bg-amber-700 cursor-pointer",title:"দিনটি আবার আনলক করুন",children:"🔓 Re-open Day"}):n.jsx("button",{type:"button",onClick:()=>H(L.date),className:"rounded-lg bg-linear-to-r from-emerald-600 to-teal-600 px-3 py-1.5 text-[11px] font-black text-white shadow-xs transition hover:from-emerald-700 hover:to-teal-700 cursor-pointer",title:"এই দিনটি শুধু এখানেই সরাসরি ক্লোজ করুন",children:"🔒 Day Close"}),n.jsx("button",{type:"button",onClick:()=>G(L.date),className:"rounded-lg border border-indigo-300 bg-indigo-50 px-3 py-1.5 text-[11px] font-black text-indigo-700 transition hover:bg-indigo-100 cursor-pointer",title:L.closed?"আনলক করে সেই তারিখে এডিট করতে যান":"সেই তারিখে গিয়ে এন্ট্রি/এডিট করুন",children:"✏️ এই দিনে এডিট"})]})]},L.date))}),n.jsx("div",{className:"border-t border-slate-200 bg-slate-50 px-4 py-2.5 text-[10px] font-semibold text-slate-500",children:"ℹ️ Day Close/এডিট সব ডিভাইসে ক্লাউডের মাধ্যমে সিঙ্ক হয়। পুরনো দিন এডিট শেষ হলে মনে রাখবেন — দিনটি আবার Close করে দিন (না করলে পরের দিন খোলা যাবে না)।"})]})}),document.body)}const Bm="1.4.183";async function pS(){try{if("serviceWorker"in navigator){const l=await navigator.serviceWorker.getRegistrations();await Promise.all(l.map(o=>o.unregister()))}if("caches"in window){const l=await caches.keys();await Promise.all(l.map(o=>caches.delete(o)))}}catch(l){console.warn("[version] clear failed",l)}}const gp="gobra_update_dismissed_for";let cc="";function gS(){try{cc&&sessionStorage.setItem(gp,cc)}catch{}}async function Rp(){await pS();const l=new URL(window.location.href);l.searchParams.set("_v",String(Date.now())),window.location.replace(l.toString())}function RS(l){if(typeof window>"u")return;const o=async()=>{try{const c=await fetch(`/version.json?t=${Date.now()}`,{cache:"no-store"});if(!c.ok)return;const d=await c.json();if(d&&d.version&&d.version!==Bm){cc=d.version;try{if(sessionStorage.getItem(gp)===d.version)return}catch{}l()}}catch{}};if("serviceWorker"in navigator){navigator.serviceWorker.register("/sw.js",{updateViaCache:"none"}).then(d=>{d.update(),d.addEventListener("updatefound",()=>{const A=d.installing;A&&A.addEventListener("statechange",()=>{A.state==="installed"&&navigator.serviceWorker.controller&&l()})})}).catch(d=>console.warn("[sw] register failed",d));let c=!1;navigator.serviceWorker.addEventListener("controllerchange",()=>{c||(c=!0,window.location.reload())})}(async()=>{const c="gobra_force_reload_done";if(!sessionStorage.getItem(c))try{const d=await fetch(`/version.json?t=${Date.now()}`,{cache:"no-store"});if(!d.ok)return;const A=await d.json();A&&A.version&&A.version!==Bm&&(cc=A.version,sessionStorage.setItem(c,"1"),await Rp())}catch{}})().then(o).catch(o),window.setInterval(o,6e4),window.addEventListener("focus",o),document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&o()})}const ns={},Vi=String((ns==null?void 0:ns.VITE_GOOGLE_CLIENT_ID)||"161441191624-q3e0gtm5avvvo3f8qpclph8ukleqshvb.apps.googleusercontent.com"),bb=String((ns==null?void 0:ns.VITE_GOOGLE_ORIGIN)||"https://cash-gobra-bkf.netlify.app"),SS=String((ns==null?void 0:ns.VITE_GOOGLE_ORIGINS)||"https://cash-gobra-bkf.netlify.app,https://live--cash-gobra-bkf.netlify.app").split(",").map(l=>l.trim()).filter(Boolean),pb=()=>{try{return SS.includes(window.location.origin)||window.location.hostname==="localhost"}catch{return!0}};function yS({onAuthed:l}){const[o,u]=p.useState("in"),[c,d]=p.useState(!1),[A,f]=p.useState(""),[x,h]=p.useState(!1),[v,S]=p.useState(""),[b,H]=p.useState(""),[P,G]=p.useState(""),[K,L]=p.useState(""),[_,ue]=p.useState(""),[C,q]=p.useState(""),[k,V]=p.useState(""),[ce,E]=p.useState([]);p.useEffect(()=>{E(bc().map(I=>({id:I.id,name:I.name})))},[o]);const se="w-full rounded-xl border-2 border-slate-300 bg-white px-3.5 py-2.5 text-sm font-bold text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200",ie="mb-1 block text-[11px] font-black uppercase tracking-wide text-slate-600",ne=I=>I.replace(/[^0-9+]/g,"").slice(0,16),me=async()=>{const I=b;try{const re=await O2(v,I);if(re.ok&&re.token&&re.user){l($i(String(re.user.mobile||v),re.user.branchId,{name:re.user.name}));return}if(re.pending){f(re.error||"⏳ অ্যাডমিনের অনুমতির অপেক্ষা রয়েছে।");return}if(!(re.error==="server error"||!re.error)){f(re.error);return}}catch{}await pe()},pe=async()=>{f(""),d(!0);try{const I=await v5(v,b);if(!I.ok||!I.session){f(I.error||"সাইন ইন করা যায়নি।");return}l(I.session)}catch(I){f((I==null?void 0:I.message)||"সাইন ইন করা যায়নি।")}finally{d(!1)}},j=async()=>{f(""),d(!0);try{const I=_.trim().toLowerCase().replace(/[^a-z0-9_]/g,"_"),re=R&&R.id||I||"gobra",ee=await j2({name:P.trim(),mobile:K,password:C,branchId:re});if(ee.ok&&ee.token&&ee.user){l($i(String(ee.user.mobile||K),String(ee.user.branchId||re),{name:ee.user.name||P.trim()})),d(!1);return}if(ee.ok||ee.pending){f(ee.message||"⏳ অনুমতির জন্য জমা হয়েছে।"),d(!1);return}if(ee.error&&ee.error!=="server error"){f(ee.error),d(!1);return}}catch{}try{const I=await L5({name:P,mobile:K,branchName:_,password:C,confirmPassword:k});if(!I.ok||!I.session){f(I.error||"সাইন আপ করা যায়নি।");return}l(I.session)}catch(I){f((I==null?void 0:I.message)||"সাইন আপ করা যায়নি।")}finally{d(!1)}},O=p.useRef(null);p.useEffect(()=>{if(!Vi||o!=="in")return;let I=!1;return(async()=>{try{if(await D2(),I||!O.current)return;const re=window.google;re.accounts.id.initialize({client_id:Vi,callback:async ee=>{f(""),d(!0);try{const M=await I2(String((ee==null?void 0:ee.credential)||""));M.ok&&M.token&&M.user?l($i(String(M.user.mobile||M.user.email||"google-user"),M.user.branchId,{name:M.user.name})):f(M.error||M.message||(M.pending?"⏳ অ্যাডমিনের অনুমতির অপেক্ষা রয়েছে।":"Google লগইন হয়নি।"))}catch{f("Google লগইনে সমস্যা — ইন্টারনেট দেখুন।")}finally{d(!1)}}}),re.accounts.id.renderButton(O.current,{theme:"outline",size:"large",width:320,text:"signin_with",locale:"bn"})}catch{}})(),()=>{I=!0}},[o]);const R=ce.find(I=>I.name.trim().toLowerCase()===_.trim().toLowerCase());return n.jsx("div",{className:"min-h-screen w-full bg-linear-to-br from-slate-200 via-blue-100 to-emerald-100 px-3 py-6 sm:py-10",children:n.jsxs("div",{className:"mx-auto w-full max-w-md",children:[n.jsxs("div",{className:"mb-4 flex items-center justify-center gap-3",children:[n.jsx("img",{src:xp,alt:"BKF Logo",className:"h-14 w-auto object-contain drop-shadow"}),n.jsxs("div",{children:[n.jsx("h1",{className:"text-xl font-black leading-tight text-slate-900 sm:text-2xl",children:"Bandhu Kallyan Foundation"}),n.jsx("p",{className:"text-[11px] font-bold text-slate-600 sm:text-xs",children:"🏢 মাল্টি অফিস হিসাব সিস্টেম — প্রতি অফিসের খতিয়ান সম্পূর্ণ আলাদা"})]})]}),n.jsxs("div",{className:"overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl",children:[n.jsxs("div",{className:"grid grid-cols-2 border-b border-slate-200 bg-slate-50",children:[n.jsx("button",{type:"button",onClick:()=>{u("in"),f("")},className:`px-4 py-3 text-sm font-black transition cursor-pointer ${o==="in"?"bg-white text-indigo-700 border-b-2 border-indigo-600":"text-slate-500 hover:text-slate-700"}`,children:"🔓 সাইন ইন"}),n.jsx("button",{type:"button",onClick:()=>{u("up"),f("")},className:`px-4 py-3 text-sm font-black transition cursor-pointer ${o==="up"?"bg-white text-emerald-700 border-b-2 border-emerald-600":"text-slate-500 hover:text-slate-700"}`,children:"📝 সাইন আপ"})]}),n.jsxs("div",{className:"space-y-3 p-4 sm:p-5",children:[o==="in"?n.jsxs(n.Fragment,{children:[n.jsxs("div",{children:[n.jsx("label",{className:ie,children:"ইউজার আইডি (মোবাইল নম্বর)"}),n.jsx("input",{value:v,onChange:I=>S(ne(I.target.value)),onKeyDown:I=>I.key==="Enter"&&me(),placeholder:"01XXXXXXXXX",inputMode:"numeric",autoComplete:"username",className:se})]}),n.jsxs("div",{children:[n.jsx("label",{className:ie,children:"পাসওয়ার্ড"}),n.jsxs("div",{className:"relative",children:[n.jsx("input",{value:b,onChange:I=>H(I.target.value),onKeyDown:I=>I.key==="Enter"&&me(),placeholder:"পাসওয়ার্ড",type:x?"text":"password",autoComplete:"current-password",className:`${se} pr-14`}),n.jsx("button",{type:"button",onClick:()=>h(I=>!I),title:x?"পাসওয়ার্ড লুকান":"পাসওয়ার্ড দেখুন",className:"absolute right-2 top-1/2 -translate-y-1/2 rounded-lg bg-slate-100 px-2 py-1 text-[11px] font-black text-slate-600 hover:bg-slate-200 cursor-pointer",children:x?"লুকান":"দেখুন"})]})]}),n.jsx("button",{type:"button",onClick:me,disabled:c,className:"mt-1 w-full rounded-xl bg-linear-to-r from-indigo-600 to-blue-600 px-4 py-3 text-sm font-black text-white shadow-md transition hover:from-indigo-700 hover:to-blue-700 disabled:opacity-50 cursor-pointer",children:c?"অপেক্ষা করুন…":"🔓 সাইন ইন করুন"}),Vi&&!pb()&&n.jsxs("div",{className:"rounded-xl border-2 border-rose-300 bg-rose-50 px-3 py-2.5 text-[11px] font-bold leading-relaxed text-rose-800",children:["⚠️ Google লগইন এই ঠিকানায় চলবে না। যথাযথ ঠিকানা:"," ",n.jsx("a",{href:bb,className:"font-black underline",children:bb})," ","— এটা খুলে লগইন করুন।"]}),Vi&&pb()&&n.jsxs("div",{className:"space-y-2",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("div",{className:"h-px flex-1 bg-slate-300"}),n.jsx("span",{className:"text-[10px] font-black text-slate-500",children:"অথবা"}),n.jsx("div",{className:"h-px flex-1 bg-slate-300"})]}),n.jsx("div",{ref:O,className:"flex justify-center"}),n.jsx("p",{className:"text-center text-[10px] font-semibold text-slate-500",children:"🛡️ নতুন Google অ্যাকাউন্টে অ্যাডমিনের অনুমতি লাগবে"})]}),n.jsx("p",{className:"rounded-xl border border-blue-200 bg-blue-50 px-3 py-2 text-[11px] font-semibold leading-relaxed text-blue-900",children:"💡 মোবাইল নম্বরই আপনার ইউজার আইডি। যে অফিসের আইডি দিয়ে ঢুকবেন, সেই অফিসের হিসাবই দেখতে ও লিখতে পারবেন — অন্য অফিসের ডেটা আলাদা থাকবে।"})]}):n.jsxs(n.Fragment,{children:[n.jsxs("div",{children:[n.jsx("label",{className:ie,children:"নাম (Name)"}),n.jsx("input",{value:P,onChange:I=>G(I.target.value),placeholder:"আপনার নাম",autoComplete:"name",className:se})]}),n.jsxs("div",{children:[n.jsx("label",{className:ie,children:"মোবাইল নম্বর (Mobile Number) — এটাই ইউজার আইডি"}),n.jsx("input",{value:K,onChange:I=>L(ne(I.target.value)),placeholder:"01XXXXXXXXX",inputMode:"numeric",autoComplete:"username",className:`${se} ${K&&!ic(K)?"border-rose-400":""}`}),K&&!ic(K)&&n.jsx("p",{className:"mt-1 text-[10px] font-bold text-rose-600",children:"সঠিক মোবাইল নম্বর দিন (কমপক্ষে ৬ ডিজিট)"})]}),n.jsxs("div",{children:[n.jsx("label",{className:ie,children:"অফিস / শাখা (Branch)"}),n.jsx("input",{value:_,onChange:I=>ue(I.target.value),placeholder:"যেমন: GOBRA BRANCH-0014 বা নতুন শাখার নাম",list:"branch-list",className:se}),n.jsx("datalist",{id:"branch-list",children:ce.map(I=>n.jsx("option",{value:I.name},I.id))}),n.jsx("p",{className:"mt-1 text-[10px] font-bold text-slate-500",children:R?`✓ "${R.name}" শাখা আগে থেকেই আছে — সেখানেই যুক্ত হবেন (একই হিসাব)`:"নতুন শাখার নাম লিখলে নতুন অফিস তৈরি হবে — খতিয়ান একদম খালি ও আলাদা থাকবে"})]}),n.jsxs("div",{className:"grid grid-cols-1 gap-3 sm:grid-cols-2",children:[n.jsxs("div",{children:[n.jsx("label",{className:ie,children:"পাসওয়ার্ড"}),n.jsx("input",{value:C,onChange:I=>q(I.target.value),placeholder:"কমপক্ষে ৬ অক্ষর",type:x?"text":"password",autoComplete:"new-password",className:se})]}),n.jsxs("div",{children:[n.jsx("label",{className:ie,children:"কনফার্ম পাসওয়ার্ড"}),n.jsx("input",{value:k,onChange:I=>V(I.target.value),onKeyDown:I=>I.key==="Enter"&&j(),placeholder:"আবার লিখুন",type:x?"text":"password",autoComplete:"new-password",className:`${se} ${k&&k!==C?"border-rose-400":""}`})]})]}),n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("label",{className:"flex cursor-pointer select-none items-center gap-1.5 text-[11px] font-bold text-slate-600",children:[n.jsx("input",{type:"checkbox",checked:x,onChange:I=>h(I.target.checked),className:"h-3.5 w-3.5 cursor-pointer accent-indigo-600"}),"পাসওয়ার্ড দেখান"]}),C&&k&&C===k&&n.jsx("span",{className:"text-[11px] font-black text-emerald-700",children:"✓ মিলেছে"})]}),n.jsx("button",{type:"button",onClick:j,disabled:c,className:"mt-1 w-full rounded-xl bg-linear-to-r from-emerald-600 to-teal-600 px-4 py-3 text-sm font-black text-white shadow-md transition hover:from-emerald-700 hover:to-teal-700 disabled:opacity-50 cursor-pointer",children:c?"অপেক্ষা করুন…":"📝 সাইন আপ করুন"})]}),A&&n.jsxs("div",{className:"rounded-xl border border-rose-300 bg-rose-50 px-3 py-2 text-[11px] font-black text-rose-800",children:["⚠️ ",A]})]})]}),n.jsx("p",{className:"mt-3 text-center text-[10px] font-semibold text-slate-500",children:"প্রতি অফিসের কর্মী, হিসাব, ডে-ক্লোজ ও ক্যাশবুক সম্পূর্ণ আলাদা • ডেটা এই ডিভাইসের ব্রাউজারে ও আপনার Google Sheet-এ সংরক্ষিত হয়"})]})})}function NS(){const[l,o]=p.useState(!1),[u,c]=p.useState(0),[d,A]=p.useState(!1),[f,x]=p.useState([]),[h,v]=p.useState(!1),[S,b]=p.useState(""),[H,P]=p.useState(!1),[G,K]=p.useState([]),[L,_]=p.useState([]),[ue,C]=p.useState(()=>!!mm()),[q,k]=p.useState(""),[V,ce]=p.useState(""),[E,se]=p.useState(""),[ie,ne]=p.useState(""),me=p.useCallback(async()=>{try{const U=ml(),B=!!(U&&(U.role==="admin"||U.is_super===!0));if(o(B),P((U==null?void 0:U.is_super)===!0||ue),!B&&!ue)return;const ge=await B2();if(B&&!ge.ok)return;if(B&&c(ge.pendingCount||0),d&&((U==null?void 0:U.is_super)===!0||ue)){const y=await Ti();y.ok&&x(y.pending)}}catch{}},[d,ue]);p.useEffect(()=>{me();const U=setInterval(me,6e4);return()=>clearInterval(U)},[me]);const pe=async()=>{if(!j())return;const U=await E2();U.ok&&K(U.branches);const B=await C2();B.ok&&_(B.users)},j=()=>!!mm(),O=async()=>{if(A(!0),ce(""),!j())return;const U=await Ti();U.ok&&x(U.pending),await pe()},R=async(U,B)=>{v(!0),b("");const ge=f.find(te=>te.id===U),y=B?await H2(U,(ge==null?void 0:ge.branch_id)||"gobra"):await w2(U);if(v(!1),!y.ok)return b(y.error||"ব্যর্থ হয়েছে");b(B?"✅ অনুমতি দেওয়া হয়েছে":"❌ বাধা দেওয়া হয়েছে"),setTimeout(()=>b(""),2500);const le=await Ti();le.ok&&x(le.pending),c(y.pendingCount??Math.max(0,u-1)),await pe()},I=async U=>{const B=ml();if(String(U.mobile||"")===String((B==null?void 0:B.mobile)||"")||U.email&&U.email===(B==null?void 0:B.email))return b("নিজের অ্যাকাউন্ট এভাবে মোছা যায় না।");if(!window.confirm(`🗑️ "${U.name}" (${U.mobile||U.email||"—"}) — স্থায়ীভাবে মুছে ফেলবেন?`))return;v(!0),b("");const ge=await M2(U.id);v(!1),b(ge.ok?"🗑️ মুছে ফেলা হয়েছে":ge.error||"ব্যর্থ হয়েছে"),setTimeout(()=>b(""),2500);const y=await Ti();y.ok&&x(y.pending),await pe()},re=U=>{const B=ml();B&&($i(String(B.mobile||B.email||"user"),U,{name:B.name}),b2(U))},ee=async()=>{v(!0),ce("");const U=await k2(q.trim());if(v(!1),!U.ok)return ce(U.error||"পাসওয়ার্ড মিলছে না।");C(!0),P(!0),k(""),c(U.pendingCount??0),await pe()},M=async()=>{if(ie.trim().length<6)return b("নতুন পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে।");v(!0),b("");const U=await U2(E.trim(),ie.trim());if(v(!1),!U.ok)return b(U.error||"ব্যর্থ হয়েছে");b(U.message||"🔑 পাসওয়ার্ড বদলে গেছে"),se(""),ne(""),setTimeout(()=>b(""),2500)};return n.jsxs(n.Fragment,{children:[n.jsxs("button",{type:"button",onClick:O,title:"লগইন অনুমতির অনুরোধ",className:"fixed bottom-20 right-3 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-indigo-300 bg-white text-lg shadow-xl hover:bg-indigo-50 cursor-pointer",children:["🔔",l&&u>0&&n.jsx("span",{className:"absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-rose-600 px-1 text-[10px] font-black text-white",children:u})]}),d&&n.jsx("div",{className:"fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-slate-900/50 p-3",onClick:()=>A(!1),children:n.jsxs("div",{className:"w-full max-w-md rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl",onClick:U=>U.stopPropagation(),children:[n.jsxs("div",{className:"mb-3 flex items-center justify-between border-b border-slate-100 pb-2",children:[n.jsx("h2",{className:"text-sm font-black text-slate-900",children:"🔔 লগইন অনুমতির অনুরোধ"}),n.jsx("button",{type:"button",onClick:()=>A(!1),className:"rounded px-2 text-lg font-black text-slate-400 hover:text-slate-700 cursor-pointer",children:"✕"})]}),j()?n.jsxs(n.Fragment,{children:[S&&n.jsx("div",{className:"mb-2 rounded-lg bg-indigo-50 px-3 py-2 text-[11px] font-black text-indigo-800",children:S}),f.length===0?n.jsx("div",{className:"py-6 text-center text-sm font-semibold text-slate-400",children:"✓ কোনো অনুরোধ অপেক্ষা করছে না"}):n.jsx("div",{className:"max-h-80 space-y-2 overflow-auto",children:f.map(U=>n.jsxs("div",{className:"rounded-xl border border-slate-200 bg-slate-50 p-3",children:[n.jsx("div",{className:"mb-1 text-sm font-black text-slate-900",children:U.name}),n.jsxs("div",{className:"mb-2 text-[11px] font-semibold text-slate-500",children:[U.email||U.mobile||"—"," • 🏢 ",U.branch_id||"gobra"," • ",new Date(U.created_at).toLocaleDateString("en-GB")]}),n.jsxs("div",{className:"flex gap-2",children:[n.jsx("button",{type:"button",disabled:h,onClick:()=>R(U.id,!0),className:"flex-1 rounded-lg bg-emerald-600 px-3 py-1.5 text-[11px] font-black text-white hover:bg-emerald-700 disabled:opacity-50 cursor-pointer",children:"✅ অনুমতি দিন"}),n.jsx("button",{type:"button",disabled:h,onClick:()=>R(U.id,!1),className:"flex-1 rounded-lg bg-rose-600 px-3 py-1.5 text-[11px] font-black text-white hover:bg-rose-700 disabled:opacity-50 cursor-pointer",children:"❌ বাধা দিন"})]})]},U.id))}),(H||ue)&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"mt-3 border-t border-slate-200 pt-2",children:[n.jsxs("div",{className:"mb-1 text-[11px] font-black text-slate-600",children:["🏢 অফিসসমূহ ",n.jsx("span",{className:"font-semibold text-slate-400",children:"(🔁 প্রবেশ = ওই অফিসে এক ক্লিকে চলে যাওয়া)"})]}),n.jsxs("div",{className:"max-h-28 space-y-1 overflow-auto",children:[G.length===0&&n.jsx("div",{className:"text-[11px] font-semibold text-slate-400",children:"…"}),G.map(U=>{var B,ge;return n.jsxs("div",{className:"flex items-center justify-between gap-2 rounded-lg border border-slate-200 bg-white px-2 py-1.5",children:[n.jsxs("div",{className:"text-[11px] font-black text-slate-800",children:["🏢 ",U.branch_id,U.branch_id===(((B=ml())==null?void 0:B.branchId)||"gobra")&&n.jsx("span",{className:"ml-1 rounded bg-emerald-100 px-1 text-[9px] font-black text-emerald-700",children:"এখানে আছেন"}),n.jsxs("span",{className:"ml-1 text-[10px] font-semibold text-slate-400",children:["ইউজার ×",U.users]})]}),n.jsx("button",{type:"button",disabled:h||U.branch_id===(((ge=ml())==null?void 0:ge.branchId)||"gobra"),onClick:()=>re(U.branch_id),className:"rounded-md bg-indigo-600 px-2 py-0.5 text-[10px] font-black text-white hover:bg-indigo-700 disabled:opacity-40 cursor-pointer",children:"🔁 প্রবেশ"})]},U.branch_id)})]})]}),n.jsxs("div",{className:"mt-2 border-t border-slate-200 pt-2",children:[n.jsxs("div",{className:"mb-1 text-[11px] font-black text-slate-600",children:["👥 সব ইউজার ",n.jsx("span",{className:"font-semibold text-slate-400",children:"(ভুল তৈরি হলে 🗑️ মুছুন)"})]}),n.jsxs("div",{className:"max-h-44 space-y-1 overflow-auto",children:[L.length===0&&n.jsx("div",{className:"text-[11px] font-semibold text-slate-400",children:"…"}),L.map(U=>{var y,le;const B=String(U.mobile||"")===String(((y=ml())==null?void 0:y.mobile)||"")||U.email!=null&&U.email===((le=ml())==null?void 0:le.email),ge=U.status==="pending"?"⏳অপেক্ষায়":U.status==="rejected"?"❌বাদ":U.role==="admin"?"অ্যাডমিন":"সদস্য";return n.jsxs("div",{className:"flex items-center justify-between gap-2 rounded-lg border border-slate-200 bg-white px-2 py-1.5",children:[n.jsxs("div",{className:"min-w-0 text-[11px]",children:[n.jsx("span",{className:"font-black text-slate-800",children:U.name}),U.is_super===!0&&n.jsx("span",{title:"মালিক",children:" ⭐"}),B&&n.jsx("span",{className:"ml-1 rounded bg-slate-200 px-1 text-[9px] font-black text-slate-600",children:"আপনি"}),n.jsxs("div",{className:"truncate text-[10px] font-semibold text-slate-500",children:[U.mobile||U.email||"—"," • 🏢",U.branch_id," • ",ge]})]}),!B&&n.jsx("button",{type:"button",disabled:h,onClick:()=>I(U),title:"স্থায়ীভাবে মুছুন",className:"rounded-md bg-rose-600 px-2 py-0.5 text-[10px] font-black text-white hover:bg-rose-700 disabled:opacity-40 cursor-pointer",children:"🗑️"})]},U.id)})]})]})]}),(H||ue)&&n.jsx(n.Fragment,{children:n.jsxs("div",{className:"mt-2 border-t border-slate-200 pt-2",children:[n.jsx("div",{className:"mb-1 text-[11px] font-black text-slate-600",children:"🔑 অ্যাডমিন-পাসওয়ার্ড বদলান"}),n.jsxs("div",{className:"flex gap-1.5",children:[n.jsx("input",{type:"password",value:E,onChange:U=>se(U.target.value),placeholder:"আগের পাসওয়ার্ড",className:"min-w-0 flex-1 rounded-lg border border-slate-300 px-2 py-1.5 text-[11px] font-bold"}),n.jsx("input",{type:"password",value:ie,onChange:U=>ne(U.target.value),placeholder:"নতুন (৬+ অক্ষর)",className:"min-w-0 flex-1 rounded-lg border border-slate-300 px-2 py-1.5 text-[11px] font-bold"}),n.jsx("button",{type:"button",disabled:h||!E.trim()||!ie.trim(),onClick:M,className:"rounded-lg bg-slate-800 px-2.5 py-1.5 text-[10px] font-black text-white hover:bg-slate-900 disabled:opacity-40 cursor-pointer",children:"বদলান"})]})]})})]}):n.jsxs("div",{className:"py-2",children:[n.jsx("div",{className:"mb-2 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-[11px] font-bold leading-relaxed text-amber-800",children:"🔐 এটা অ্যাডমিন-প্যানেল — খুলতে অ্যাডমিন-পাসওয়ার্ড দিন।"}),n.jsxs("div",{className:"flex gap-2",children:[n.jsx("input",{type:"password",value:q,onChange:U=>k(U.target.value),onKeyDown:U=>{U.key==="Enter"&&ee()},placeholder:"অ্যাডমিন-পাসওয়ার্ড",className:"min-w-0 flex-1 rounded-lg border border-slate-300 px-3 py-2 text-sm font-bold"}),n.jsx("button",{type:"button",disabled:h||!q.trim(),onClick:ee,className:"rounded-lg bg-indigo-600 px-4 py-2 text-xs font-black text-white hover:bg-indigo-700 disabled:opacity-50 cursor-pointer",children:"খুলুন"})]}),V&&n.jsx("div",{className:"mt-2 text-[11px] font-black text-rose-600",children:V})]})]})})]})}function vS(){const[l,o]=p.useState(()=>Wm()),[u,c]=p.useState("receive"),[d,A]=p.useState(!1),[f,x]=p.useState(!1),[h,v]=p.useState(!1),[S,b]=p.useState(!1),[H,P]=p.useState(!1),[G,K]=p.useState(()=>{try{const q=localStorage.getItem("app_master_date");if(q&&q.includes("-"))return q}catch{}return xa()}),L=q=>{const k=q||xa();K(k);try{localStorage.setItem("app_master_date",k)}catch{}};if(p.useEffect(()=>{gc().catch(()=>{})},[]),p.useEffect(()=>{if(l&&(KR(),cr())){yR();const q=SR(),k=T5();(q||k)&&console.log(`🧹 টেস্ট ডেটা পরিষ্কার — সদস্য: ${q}, চেক-এন্ট্রি: ${k}`)}},[l==null?void 0:l.userId,l==null?void 0:l.branchId]),p.useEffect(()=>{try{const ie=localStorage.getItem("app_master_date");ie&&ie.includes("-")&&ie!==G&&K(ie)}catch{}const q=()=>A(!0),k=()=>x(!0),V=()=>v(!0),ce=()=>b(!0),E=ie=>{const ne=ie.detail;typeof ne=="string"&&ne&&(c(ne),window.scrollTo({top:0,behavior:"smooth"}))};window.addEventListener("open-date-tracker",q),window.addEventListener("open-day-open-modal",k),window.addEventListener("open-day-close-modal",V),window.addEventListener("open-day-admin",ce),window.addEventListener("navigate-tab",E);const se=()=>P(!0);return window.addEventListener("app-update-available",se),()=>{window.removeEventListener("open-date-tracker",q),window.removeEventListener("open-day-open-modal",k),window.removeEventListener("open-day-close-modal",V),window.removeEventListener("open-day-admin",ce),window.removeEventListener("navigate-tab",E),window.removeEventListener("app-update-available",se)}},[]),!l)return n.jsx(yS,{onAuthed:q=>{ur(q.branchId),o(q),window.location.reload()}});const _=S5(),ue=pc(),C=()=>{window.confirm("সাইন আউট করবেন? আবার ঢুকতে ইউজার আইডি (মোবাইল নম্বর) ও পাসওয়ার্ড লাগবে।")&&(y5(),jb(),window.location.reload())};return n.jsxs("div",{className:"app-bg min-h-screen text-slate-900 font-sans antialiased pb-16 lg:pb-4  // v1.4.162: ফ্লোটিং-মেনুস্থলে বার নেই — প্যাডিং কিছুটা সরহ lg:pl-60 print:p-0 print:m-0 print:pl-0 print:pb-0 print:bg-white",children:[n.jsx(NS,{}),n.jsxs("main",{className:"mx-auto max-w-6xl px-3 sm:px-4 pt-3 sm:pt-5 print:p-0 print:max-w-none",children:[n.jsxs("div",{className:"print:hidden mb-2 flex flex-wrap items-center justify-between gap-2 rounded-xl border border-slate-200 bg-white/80 px-3 py-1.5 text-[11px] font-bold text-slate-700 shadow-xs",children:[n.jsxs("span",{className:"flex items-center gap-1.5",children:[n.jsx("span",{children:"🏢"}),n.jsx("span",{className:"font-black text-indigo-800",children:ue})]}),n.jsxs("span",{className:"lg:hidden flex items-center gap-1",children:[n.jsx("span",{className:"w-28 text-slate-900",children:n.jsx(hn,{value:G,onChange:L,className:"w-full rounded-lg border border-slate-300 bg-white px-2 py-1 text-[11px] font-bold shadow-xs",onOpenTracker:()=>A(!0)})}),G!==xa()&&n.jsx("button",{type:"button",onClick:()=>L(xa()),title:"আজকের তারিখে ফিরুন",className:"rounded-md border border-sky-300 bg-sky-50 px-1 py-[7px] text-[10px] font-black text-sky-700 shadow-xs transition active:scale-95 cursor-pointer",children:"📆"})]}),n.jsxs("span",{className:"flex items-center gap-2",children:[n.jsxs("span",{className:"text-slate-600",children:["👤 ",_?`${_.name} • ${_.mobile}`:l.userId]}),n.jsx("button",{type:"button",onClick:C,title:"সাইন আউট করুন",className:"rounded-lg border border-rose-300 bg-rose-50 px-2 py-1 text-[10px] font-black text-rose-700 transition hover:bg-rose-100 cursor-pointer",children:"🚪 লগআউট"})]})]}),n.jsx(oS,{}),n.jsx("div",{className:"print:hidden",children:n.jsx(iS,{selectedDate:G,onSelectDate:L,onOpenTracker:()=>A(!0)})}),u!=="cashbook"&&u!=="entertainment"&&u!=="check"&&n.jsx("div",{className:"print:hidden",children:n.jsx(uS,{selectedDate:G,onOpenDayModal:()=>x(!0)})}),(u==="receive"||u==="payment")&&n.jsx("div",{className:"print:hidden",children:n.jsx(r5,{selectedDate:G})}),u==="receive"&&n.jsx(d5,{selectedDate:G}),u==="payment"&&n.jsx(f5,{selectedDate:G}),u==="entertainment"&&n.jsx(h5,{}),u==="report"&&n.jsx(j5,{selectedDate:G}),u==="cashbook"&&n.jsx(M5,{selectedDate:G,setSelectedDate:L}),u==="check"&&n.jsx(nS,{selectedDate:G})]}),H&&n.jsx("div",{className:"fixed bottom-20 left-1/2 z-[60] -translate-x-1/2 print:hidden",children:n.jsxs("div",{className:"flex items-center gap-2.5 rounded-2xl bg-slate-900 px-4 py-2.5 text-white shadow-2xl border border-slate-700",children:[n.jsx("span",{className:"text-lg",children:"🔄"}),n.jsxs("div",{className:"text-[11px] leading-tight",children:[n.jsx("div",{className:"font-black",children:"নতুন ভার্সন এসেছে"}),n.jsxs("div",{className:"text-slate-300",children:["সবচেয়ে নতুন আপডেট দেখতে রিফ্রেশ করুন (v",Bm,")"]})]}),n.jsx("button",{type:"button",onClick:()=>Rp(),className:"rounded-xl bg-emerald-600 hover:bg-emerald-500 px-3 py-1.5 text-[11px] font-black transition cursor-pointer",children:"এখনই রিফ্রেশ"}),n.jsx("button",{type:"button",onClick:()=>{gS(),P(!1)},className:"text-slate-400 hover:text-white text-sm font-bold px-1 cursor-pointer",children:"✕"})]})}),n.jsx(cS,{isOpen:d,onClose:()=>A(!1),selectedDate:G,onSelectDate:L}),n.jsx(dS,{isOpen:f,onClose:()=>x(!1),selectedDate:G}),n.jsx(fS,{isOpen:h,onClose:()=>v(!1),selectedDate:G}),n.jsx(bS,{isOpen:S,onClose:()=>b(!1),onJumpDate:q=>{L(q),c("receive"),b(!1),window.scrollTo({top:0,behavior:"smooth"})}}),n.jsx("div",{className:"print:hidden",children:n.jsx(rS,{currentTab:u,onTabChange:c,selectedDate:G,onDateChange:L,onOpenTracker:()=>A(!0)})})]})}const LS="input:not([type=hidden]):not([type=checkbox]):not([type=radio]):not([type=button]):not([type=submit]):not([type=file]):not([type=range]):not([type=color]):not([type=reset]):not([type=image]):not(disabled)",Sp=l=>{if(!l||!(l instanceof HTMLInputElement)||["checkbox","radio","button","submit","file","hidden","range","color","image","reset"].includes((l.type||"text").toLowerCase())||l.disabled)return!1;try{return getComputedStyle(l).display!=="none"}catch{return!0}},OS=(l=document)=>Array.from(l.querySelectorAll(LS)).filter(Sp),gb=l=>{var o;return!!((o=l.closest("div.relative"))!=null&&o.querySelector(":scope > div.absolute"))};function jS(l=document){const o=globalThis;o.__FIELD_NAV_INSTALLED||(o.__FIELD_NAV_INSTALLED=!0,l.addEventListener("keydown",u=>{var P,G,K;if(u.ctrlKey||u.altKey||u.metaKey)return;const c=u.key,d=u.target instanceof HTMLInputElement?u.target:null;if(!d||!Sp(d))return;const A=d.getAttribute("data-grid-col"),f=d.getAttribute("data-grid-row");if(A&&f){if(gb(d))return;const L=parseInt(f,10),_=d.closest(".fixed")||l,ue=["qty","credit","debit"];if(c==="Enter"||c==="ArrowDown"||c==="ArrowUp"){const C=c==="ArrowUp"?-1:1,q=_.querySelector(`input[data-grid-col="${A}"][data-grid-row="${L+C}"]`);if(!q)return;u.preventDefault(),q.focus();try{(P=q.select)==null||P.call(q)}catch{}return}if(c==="ArrowRight"||c==="ArrowLeft"){const C=ue.indexOf(A);if(C<0)return;let q=!0,k=!0;try{const E=(d.value||"").length,se=d.selectionStart,ie=d.selectionEnd;se!=null&&ie!=null&&(q=se===0&&ie===0,k=se===E&&ie===E)}catch{}const V=c==="ArrowRight"?k?ue[C+1]:null:q?ue[C-1]:null;if(!V)return;const ce=_.querySelector(`input[data-grid-col="${V}"][data-grid-row="${L}"]`);if(!ce)return;u.preventDefault(),ce.focus();try{(G=ce.select)==null||G.call(ce)}catch{}return}return}let x=0;if(c==="Enter"||c==="ArrowDown")x=1;else if(c==="ArrowUp")x=-1;else if(c==="ArrowRight"||c==="ArrowLeft"){let L=!1,_=!1;try{const ue=(d.value||"").length,C=d.selectionStart,q=d.selectionEnd;C==null||q==null?(L=!0,_=!0):(L=C===0&&q===0,_=C===ue&&q===ue)}catch{L=!0,_=!0}if(c==="ArrowRight"&&_)x=1;else if(c==="ArrowLeft"&&L)x=-1;else return}else return;if(gb(d))return;const v=d.closest(".fixed")||l,S=OS(v),b=S.indexOf(d);if(b<0)return;const H=S[b+x];if(H){u.preventDefault(),H.focus();try{(K=H.select)==null||K.call(H)}catch{}}}))}try{const l=Wm();ph(l==null?void 0:l.branchId)}catch{ph()}gc().catch(()=>{});A2.createRoot(document.getElementById("root")).render(n.jsx(p.StrictMode,{children:n.jsx(vS,{})}));RS(()=>{window.dispatchEvent(new CustomEvent("app-update-available"))});jS();export{xo as _,IS as c,a2 as g};
