var Vv=Object.defineProperty;var Hv=(t,e,n)=>e in t?Vv(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Rl=(t,e,n)=>(Hv(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var Wv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function jv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function $v(t){var e=t.default;if(typeof e=="function"){var n=function(){return e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(i){var r=Object.getOwnPropertyDescriptor(t,i);Object.defineProperty(n,i,r.get?r:{enumerable:!0,get:function(){return t[i]}})}),n}var Ae={exports:{}},Le={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yo=Symbol.for("react.element"),Xv=Symbol.for("react.portal"),qv=Symbol.for("react.fragment"),Yv=Symbol.for("react.strict_mode"),Kv=Symbol.for("react.profiler"),Zv=Symbol.for("react.provider"),Qv=Symbol.for("react.context"),Jv=Symbol.for("react.forward_ref"),e0=Symbol.for("react.suspense"),t0=Symbol.for("react.memo"),n0=Symbol.for("react.lazy"),Zf=Symbol.iterator;function i0(t){return t===null||typeof t!="object"?null:(t=Zf&&t[Zf]||t["@@iterator"],typeof t=="function"?t:null)}var Fp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},zp=Object.assign,Op={};function xs(t,e,n){this.props=t,this.context=e,this.refs=Op,this.updater=n||Fp}xs.prototype.isReactComponent={};xs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};xs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Up(){}Up.prototype=xs.prototype;function $c(t,e,n){this.props=t,this.context=e,this.refs=Op,this.updater=n||Fp}var Xc=$c.prototype=new Up;Xc.constructor=$c;zp(Xc,xs.prototype);Xc.isPureReactComponent=!0;var Qf=Array.isArray,Bp=Object.prototype.hasOwnProperty,qc={current:null},Gp={key:!0,ref:!0,__self:!0,__source:!0};function Vp(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Bp.call(e,i)&&!Gp.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:yo,type:t,key:s,ref:o,props:r,_owner:qc.current}}function r0(t,e){return{$$typeof:yo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Yc(t){return typeof t=="object"&&t!==null&&t.$$typeof===yo}function s0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Jf=/\/+/g;function Pl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?s0(""+t.key):e.toString(36)}function xa(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case yo:case Xv:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Pl(o,0):i,Qf(r)?(n="",t!=null&&(n=t.replace(Jf,"$&/")+"/"),xa(r,e,n,"",function(u){return u})):r!=null&&(Yc(r)&&(r=r0(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Jf,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Qf(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Pl(s,a);o+=xa(s,e,n,l,r)}else if(l=i0(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Pl(s,a++),o+=xa(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ro(t,e,n){if(t==null)return t;var i=[],r=0;return xa(t,i,"","",function(s){return e.call(n,s,r++)}),i}function o0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Dt={current:null},ya={transition:null},a0={ReactCurrentDispatcher:Dt,ReactCurrentBatchConfig:ya,ReactCurrentOwner:qc};Le.Children={map:Ro,forEach:function(t,e,n){Ro(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ro(t,function(){e++}),e},toArray:function(t){return Ro(t,function(e){return e})||[]},only:function(t){if(!Yc(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Le.Component=xs;Le.Fragment=qv;Le.Profiler=Kv;Le.PureComponent=$c;Le.StrictMode=Yv;Le.Suspense=e0;Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=a0;Le.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=zp({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=qc.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Bp.call(e,l)&&!Gp.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:yo,type:t.type,key:r,ref:s,props:i,_owner:o}};Le.createContext=function(t){return t={$$typeof:Qv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Zv,_context:t},t.Consumer=t};Le.createElement=Vp;Le.createFactory=function(t){var e=Vp.bind(null,t);return e.type=t,e};Le.createRef=function(){return{current:null}};Le.forwardRef=function(t){return{$$typeof:Jv,render:t}};Le.isValidElement=Yc;Le.lazy=function(t){return{$$typeof:n0,_payload:{_status:-1,_result:t},_init:o0}};Le.memo=function(t,e){return{$$typeof:t0,type:t,compare:e===void 0?null:e}};Le.startTransition=function(t){var e=ya.transition;ya.transition={};try{t()}finally{ya.transition=e}};Le.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Le.useCallback=function(t,e){return Dt.current.useCallback(t,e)};Le.useContext=function(t){return Dt.current.useContext(t)};Le.useDebugValue=function(){};Le.useDeferredValue=function(t){return Dt.current.useDeferredValue(t)};Le.useEffect=function(t,e){return Dt.current.useEffect(t,e)};Le.useId=function(){return Dt.current.useId()};Le.useImperativeHandle=function(t,e,n){return Dt.current.useImperativeHandle(t,e,n)};Le.useInsertionEffect=function(t,e){return Dt.current.useInsertionEffect(t,e)};Le.useLayoutEffect=function(t,e){return Dt.current.useLayoutEffect(t,e)};Le.useMemo=function(t,e){return Dt.current.useMemo(t,e)};Le.useReducer=function(t,e,n){return Dt.current.useReducer(t,e,n)};Le.useRef=function(t){return Dt.current.useRef(t)};Le.useState=function(t){return Dt.current.useState(t)};Le.useSyncExternalStore=function(t,e,n){return Dt.current.useSyncExternalStore(t,e,n)};Le.useTransition=function(){return Dt.current.useTransition()};Le.version="18.2.0";(function(t){t.exports=Le})(Ae);const l0=jv(Ae.exports);var Ou={},Hp={exports:{}},Qt={},Wp={exports:{}},jp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(C,b){var P=C.length;C.push(b);e:for(;0<P;){var z=P-1>>>1,F=C[z];if(0<r(F,b))C[z]=b,C[P]=F,P=z;else break e}}function n(C){return C.length===0?null:C[0]}function i(C){if(C.length===0)return null;var b=C[0],P=C.pop();if(P!==b){C[0]=P;e:for(var z=0,F=C.length,X=F>>>1;z<X;){var te=2*(z+1)-1,fe=C[te],G=te+1,me=C[G];if(0>r(fe,P))G<F&&0>r(me,fe)?(C[z]=me,C[G]=P,z=G):(C[z]=fe,C[te]=P,z=te);else if(G<F&&0>r(me,P))C[z]=me,C[G]=P,z=G;else break e}}return b}function r(C,b){var P=C.sortIndex-b.sortIndex;return P!==0?P:C.id-b.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,f=null,d=3,g=!1,_=!1,p=!1,h=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(C){for(var b=n(u);b!==null;){if(b.callback===null)i(u);else if(b.startTime<=C)i(u),b.sortIndex=b.expirationTime,e(l,b);else break;b=n(u)}}function S(C){if(p=!1,y(C),!_)if(n(l)!==null)_=!0,V(M);else{var b=n(u);b!==null&&K(S,b.startTime-C)}}function M(C,b){_=!1,p&&(p=!1,m(x),x=-1),g=!0;var P=d;try{for(y(b),f=n(l);f!==null&&(!(f.expirationTime>b)||C&&!N());){var z=f.callback;if(typeof z=="function"){f.callback=null,d=f.priorityLevel;var F=z(f.expirationTime<=b);b=t.unstable_now(),typeof F=="function"?f.callback=F:f===n(l)&&i(l),y(b)}else i(l);f=n(l)}if(f!==null)var X=!0;else{var te=n(u);te!==null&&K(S,te.startTime-b),X=!1}return X}finally{f=null,d=P,g=!1}}var T=!1,A=null,x=-1,L=5,D=-1;function N(){return!(t.unstable_now()-D<L)}function Q(){if(A!==null){var C=t.unstable_now();D=C;var b=!0;try{b=A(!0,C)}finally{b?J():(T=!1,A=null)}}else T=!1}var J;if(typeof v=="function")J=function(){v(Q)};else if(typeof MessageChannel<"u"){var k=new MessageChannel,q=k.port2;k.port1.onmessage=Q,J=function(){q.postMessage(null)}}else J=function(){h(Q,0)};function V(C){A=C,T||(T=!0,J())}function K(C,b){x=h(function(){C(t.unstable_now())},b)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(C){C.callback=null},t.unstable_continueExecution=function(){_||g||(_=!0,V(M))},t.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<C?Math.floor(1e3/C):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(C){switch(d){case 1:case 2:case 3:var b=3;break;default:b=d}var P=d;d=b;try{return C()}finally{d=P}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(C,b){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var P=d;d=C;try{return b()}finally{d=P}},t.unstable_scheduleCallback=function(C,b,P){var z=t.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?z+P:z):P=z,C){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=P+F,C={id:c++,callback:b,priorityLevel:C,startTime:P,expirationTime:F,sortIndex:-1},P>z?(C.sortIndex=P,e(u,C),n(l)===null&&C===n(u)&&(p?(m(x),x=-1):p=!0,K(S,P-z))):(C.sortIndex=F,e(l,C),_||g||(_=!0,V(M))),C},t.unstable_shouldYield=N,t.unstable_wrapCallback=function(C){var b=d;return function(){var P=d;d=b;try{return C.apply(this,arguments)}finally{d=P}}}})(jp);(function(t){t.exports=jp})(Wp);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $p=Ae.exports,Kt=Wp.exports;function Z(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Xp=new Set,Js={};function mr(t,e){os(t,e),os(t+"Capture",e)}function os(t,e){for(Js[t]=e,t=0;t<e.length;t++)Xp.add(e[t])}var ni=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Uu=Object.prototype.hasOwnProperty,u0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ed={},td={};function c0(t){return Uu.call(td,t)?!0:Uu.call(ed,t)?!1:u0.test(t)?td[t]=!0:(ed[t]=!0,!1)}function f0(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function d0(t,e,n,i){if(e===null||typeof e>"u"||f0(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function It(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var xt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){xt[t]=new It(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];xt[e]=new It(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){xt[t]=new It(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){xt[t]=new It(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){xt[t]=new It(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){xt[t]=new It(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){xt[t]=new It(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){xt[t]=new It(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){xt[t]=new It(t,5,!1,t.toLowerCase(),null,!1,!1)});var Kc=/[\-:]([a-z])/g;function Zc(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Kc,Zc);xt[e]=new It(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Kc,Zc);xt[e]=new It(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Kc,Zc);xt[e]=new It(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){xt[t]=new It(t,1,!1,t.toLowerCase(),null,!1,!1)});xt.xlinkHref=new It("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){xt[t]=new It(t,1,!1,t.toLowerCase(),null,!0,!0)});function Qc(t,e,n,i){var r=xt.hasOwnProperty(e)?xt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(d0(e,n,r,i)&&(n=null),i||r===null?c0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var ai=$p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Po=Symbol.for("react.element"),Ur=Symbol.for("react.portal"),Br=Symbol.for("react.fragment"),Jc=Symbol.for("react.strict_mode"),Bu=Symbol.for("react.profiler"),qp=Symbol.for("react.provider"),Yp=Symbol.for("react.context"),ef=Symbol.for("react.forward_ref"),Gu=Symbol.for("react.suspense"),Vu=Symbol.for("react.suspense_list"),tf=Symbol.for("react.memo"),_i=Symbol.for("react.lazy"),Kp=Symbol.for("react.offscreen"),nd=Symbol.iterator;function Cs(t){return t===null||typeof t!="object"?null:(t=nd&&t[nd]||t["@@iterator"],typeof t=="function"?t:null)}var Ye=Object.assign,Dl;function Os(t){if(Dl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Dl=e&&e[1]||""}return`
`+Dl+t}var Il=!1;function kl(t,e){if(!t||Il)return"";Il=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Il=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Os(t):""}function h0(t){switch(t.tag){case 5:return Os(t.type);case 16:return Os("Lazy");case 13:return Os("Suspense");case 19:return Os("SuspenseList");case 0:case 2:case 15:return t=kl(t.type,!1),t;case 11:return t=kl(t.type.render,!1),t;case 1:return t=kl(t.type,!0),t;default:return""}}function Hu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Br:return"Fragment";case Ur:return"Portal";case Bu:return"Profiler";case Jc:return"StrictMode";case Gu:return"Suspense";case Vu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Yp:return(t.displayName||"Context")+".Consumer";case qp:return(t._context.displayName||"Context")+".Provider";case ef:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case tf:return e=t.displayName||null,e!==null?e:Hu(t.type)||"Memo";case _i:e=t._payload,t=t._init;try{return Hu(t(e))}catch{}}return null}function p0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Hu(e);case 8:return e===Jc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ii(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Zp(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function m0(t){var e=Zp(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Do(t){t._valueTracker||(t._valueTracker=m0(t))}function Qp(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Zp(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Ia(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Wu(t,e){var n=e.checked;return Ye({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function id(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Ii(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Jp(t,e){e=e.checked,e!=null&&Qc(t,"checked",e,!1)}function ju(t,e){Jp(t,e);var n=Ii(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?$u(t,e.type,n):e.hasOwnProperty("defaultValue")&&$u(t,e.type,Ii(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function rd(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function $u(t,e,n){(e!=="number"||Ia(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Us=Array.isArray;function Qr(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Ii(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Xu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(Z(91));return Ye({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function sd(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(Z(92));if(Us(n)){if(1<n.length)throw Error(Z(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ii(n)}}function em(t,e){var n=Ii(e.value),i=Ii(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function od(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function tm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function qu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?tm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Io,nm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Io=Io||document.createElement("div"),Io.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Io.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function eo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ws={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},g0=["Webkit","ms","Moz","O"];Object.keys(Ws).forEach(function(t){g0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ws[e]=Ws[t]})});function im(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ws.hasOwnProperty(t)&&Ws[t]?(""+e).trim():e+"px"}function rm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=im(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var v0=Ye({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Yu(t,e){if(e){if(v0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(Z(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(Z(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(Z(61))}if(e.style!=null&&typeof e.style!="object")throw Error(Z(62))}}function Ku(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zu=null;function nf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Qu=null,Jr=null,es=null;function ad(t){if(t=wo(t)){if(typeof Qu!="function")throw Error(Z(280));var e=t.stateNode;e&&(e=ll(e),Qu(t.stateNode,t.type,e))}}function sm(t){Jr?es?es.push(t):es=[t]:Jr=t}function om(){if(Jr){var t=Jr,e=es;if(es=Jr=null,ad(t),e)for(t=0;t<e.length;t++)ad(e[t])}}function am(t,e){return t(e)}function lm(){}var Nl=!1;function um(t,e,n){if(Nl)return t(e,n);Nl=!0;try{return am(t,e,n)}finally{Nl=!1,(Jr!==null||es!==null)&&(lm(),om())}}function to(t,e){var n=t.stateNode;if(n===null)return null;var i=ll(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(Z(231,e,typeof n));return n}var Ju=!1;if(ni)try{var As={};Object.defineProperty(As,"passive",{get:function(){Ju=!0}}),window.addEventListener("test",As,As),window.removeEventListener("test",As,As)}catch{Ju=!1}function _0(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var js=!1,ka=null,Na=!1,ec=null,x0={onError:function(t){js=!0,ka=t}};function y0(t,e,n,i,r,s,o,a,l){js=!1,ka=null,_0.apply(x0,arguments)}function S0(t,e,n,i,r,s,o,a,l){if(y0.apply(this,arguments),js){if(js){var u=ka;js=!1,ka=null}else throw Error(Z(198));Na||(Na=!0,ec=u)}}function gr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function cm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ld(t){if(gr(t)!==t)throw Error(Z(188))}function M0(t){var e=t.alternate;if(!e){if(e=gr(t),e===null)throw Error(Z(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return ld(r),t;if(s===i)return ld(r),e;s=s.sibling}throw Error(Z(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(Z(189))}}if(n.alternate!==i)throw Error(Z(190))}if(n.tag!==3)throw Error(Z(188));return n.stateNode.current===n?t:e}function fm(t){return t=M0(t),t!==null?dm(t):null}function dm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=dm(t);if(e!==null)return e;t=t.sibling}return null}var hm=Kt.unstable_scheduleCallback,ud=Kt.unstable_cancelCallback,w0=Kt.unstable_shouldYield,E0=Kt.unstable_requestPaint,nt=Kt.unstable_now,b0=Kt.unstable_getCurrentPriorityLevel,rf=Kt.unstable_ImmediatePriority,pm=Kt.unstable_UserBlockingPriority,Fa=Kt.unstable_NormalPriority,T0=Kt.unstable_LowPriority,mm=Kt.unstable_IdlePriority,rl=null,zn=null;function C0(t){if(zn&&typeof zn.onCommitFiberRoot=="function")try{zn.onCommitFiberRoot(rl,t,void 0,(t.current.flags&128)===128)}catch{}}var wn=Math.clz32?Math.clz32:R0,A0=Math.log,L0=Math.LN2;function R0(t){return t>>>=0,t===0?32:31-(A0(t)/L0|0)|0}var ko=64,No=4194304;function Bs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function za(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Bs(a):(s&=o,s!==0&&(i=Bs(s)))}else o=n&~r,o!==0?i=Bs(o):s!==0&&(i=Bs(s));if(i===0)return 0;if(e!==0&&e!==i&&(e&r)===0&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if((i&4)!==0&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-wn(e),r=1<<n,i|=t[n],e&=~r;return i}function P0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function D0(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-wn(s),a=1<<o,l=r[o];l===-1?((a&n)===0||(a&i)!==0)&&(r[o]=P0(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function tc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function gm(){var t=ko;return ko<<=1,(ko&4194240)===0&&(ko=64),t}function Fl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function So(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-wn(e),t[e]=n}function I0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-wn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function sf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-wn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Oe=0;function vm(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var _m,of,xm,ym,Sm,nc=!1,Fo=[],Ei=null,bi=null,Ti=null,no=new Map,io=new Map,yi=[],k0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function cd(t,e){switch(t){case"focusin":case"focusout":Ei=null;break;case"dragenter":case"dragleave":bi=null;break;case"mouseover":case"mouseout":Ti=null;break;case"pointerover":case"pointerout":no.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":io.delete(e.pointerId)}}function Ls(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=wo(e),e!==null&&of(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function N0(t,e,n,i,r){switch(e){case"focusin":return Ei=Ls(Ei,t,e,n,i,r),!0;case"dragenter":return bi=Ls(bi,t,e,n,i,r),!0;case"mouseover":return Ti=Ls(Ti,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return no.set(s,Ls(no.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,io.set(s,Ls(io.get(s)||null,t,e,n,i,r)),!0}return!1}function Mm(t){var e=Ki(t.target);if(e!==null){var n=gr(e);if(n!==null){if(e=n.tag,e===13){if(e=cm(n),e!==null){t.blockedOn=e,Sm(t.priority,function(){xm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Sa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ic(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Zu=i,n.target.dispatchEvent(i),Zu=null}else return e=wo(n),e!==null&&of(e),t.blockedOn=n,!1;e.shift()}return!0}function fd(t,e,n){Sa(t)&&n.delete(e)}function F0(){nc=!1,Ei!==null&&Sa(Ei)&&(Ei=null),bi!==null&&Sa(bi)&&(bi=null),Ti!==null&&Sa(Ti)&&(Ti=null),no.forEach(fd),io.forEach(fd)}function Rs(t,e){t.blockedOn===e&&(t.blockedOn=null,nc||(nc=!0,Kt.unstable_scheduleCallback(Kt.unstable_NormalPriority,F0)))}function ro(t){function e(r){return Rs(r,t)}if(0<Fo.length){Rs(Fo[0],t);for(var n=1;n<Fo.length;n++){var i=Fo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Ei!==null&&Rs(Ei,t),bi!==null&&Rs(bi,t),Ti!==null&&Rs(Ti,t),no.forEach(e),io.forEach(e),n=0;n<yi.length;n++)i=yi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<yi.length&&(n=yi[0],n.blockedOn===null);)Mm(n),n.blockedOn===null&&yi.shift()}var ts=ai.ReactCurrentBatchConfig,Oa=!0;function z0(t,e,n,i){var r=Oe,s=ts.transition;ts.transition=null;try{Oe=1,af(t,e,n,i)}finally{Oe=r,ts.transition=s}}function O0(t,e,n,i){var r=Oe,s=ts.transition;ts.transition=null;try{Oe=4,af(t,e,n,i)}finally{Oe=r,ts.transition=s}}function af(t,e,n,i){if(Oa){var r=ic(t,e,n,i);if(r===null)$l(t,e,i,Ua,n),cd(t,i);else if(N0(r,t,e,n,i))i.stopPropagation();else if(cd(t,i),e&4&&-1<k0.indexOf(t)){for(;r!==null;){var s=wo(r);if(s!==null&&_m(s),s=ic(t,e,n,i),s===null&&$l(t,e,i,Ua,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else $l(t,e,i,null,n)}}var Ua=null;function ic(t,e,n,i){if(Ua=null,t=nf(i),t=Ki(t),t!==null)if(e=gr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=cm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ua=t,null}function wm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(b0()){case rf:return 1;case pm:return 4;case Fa:case T0:return 16;case mm:return 536870912;default:return 16}default:return 16}}var Mi=null,lf=null,Ma=null;function Em(){if(Ma)return Ma;var t,e=lf,n=e.length,i,r="value"in Mi?Mi.value:Mi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Ma=r.slice(t,1<i?1-i:void 0)}function wa(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function zo(){return!0}function dd(){return!1}function Jt(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?zo:dd,this.isPropagationStopped=dd,this}return Ye(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=zo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=zo)},persist:function(){},isPersistent:zo}),e}var ys={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},uf=Jt(ys),Mo=Ye({},ys,{view:0,detail:0}),U0=Jt(Mo),zl,Ol,Ps,sl=Ye({},Mo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ps&&(Ps&&t.type==="mousemove"?(zl=t.screenX-Ps.screenX,Ol=t.screenY-Ps.screenY):Ol=zl=0,Ps=t),zl)},movementY:function(t){return"movementY"in t?t.movementY:Ol}}),hd=Jt(sl),B0=Ye({},sl,{dataTransfer:0}),G0=Jt(B0),V0=Ye({},Mo,{relatedTarget:0}),Ul=Jt(V0),H0=Ye({},ys,{animationName:0,elapsedTime:0,pseudoElement:0}),W0=Jt(H0),j0=Ye({},ys,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),$0=Jt(j0),X0=Ye({},ys,{data:0}),pd=Jt(X0),q0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Y0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},K0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Z0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=K0[t])?!!e[t]:!1}function cf(){return Z0}var Q0=Ye({},Mo,{key:function(t){if(t.key){var e=q0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=wa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Y0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cf,charCode:function(t){return t.type==="keypress"?wa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?wa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),J0=Jt(Q0),e_=Ye({},sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),md=Jt(e_),t_=Ye({},Mo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cf}),n_=Jt(t_),i_=Ye({},ys,{propertyName:0,elapsedTime:0,pseudoElement:0}),r_=Jt(i_),s_=Ye({},sl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),o_=Jt(s_),a_=[9,13,27,32],ff=ni&&"CompositionEvent"in window,$s=null;ni&&"documentMode"in document&&($s=document.documentMode);var l_=ni&&"TextEvent"in window&&!$s,bm=ni&&(!ff||$s&&8<$s&&11>=$s),gd=String.fromCharCode(32),vd=!1;function Tm(t,e){switch(t){case"keyup":return a_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Gr=!1;function u_(t,e){switch(t){case"compositionend":return Cm(e);case"keypress":return e.which!==32?null:(vd=!0,gd);case"textInput":return t=e.data,t===gd&&vd?null:t;default:return null}}function c_(t,e){if(Gr)return t==="compositionend"||!ff&&Tm(t,e)?(t=Em(),Ma=lf=Mi=null,Gr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return bm&&e.locale!=="ko"?null:e.data;default:return null}}var f_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _d(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!f_[t.type]:e==="textarea"}function Am(t,e,n,i){sm(i),e=Ba(e,"onChange"),0<e.length&&(n=new uf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Xs=null,so=null;function d_(t){Um(t,0)}function ol(t){var e=Wr(t);if(Qp(e))return t}function h_(t,e){if(t==="change")return e}var Lm=!1;if(ni){var Bl;if(ni){var Gl="oninput"in document;if(!Gl){var xd=document.createElement("div");xd.setAttribute("oninput","return;"),Gl=typeof xd.oninput=="function"}Bl=Gl}else Bl=!1;Lm=Bl&&(!document.documentMode||9<document.documentMode)}function yd(){Xs&&(Xs.detachEvent("onpropertychange",Rm),so=Xs=null)}function Rm(t){if(t.propertyName==="value"&&ol(so)){var e=[];Am(e,so,t,nf(t)),um(d_,e)}}function p_(t,e,n){t==="focusin"?(yd(),Xs=e,so=n,Xs.attachEvent("onpropertychange",Rm)):t==="focusout"&&yd()}function m_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ol(so)}function g_(t,e){if(t==="click")return ol(e)}function v_(t,e){if(t==="input"||t==="change")return ol(e)}function __(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Tn=typeof Object.is=="function"?Object.is:__;function oo(t,e){if(Tn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Uu.call(e,r)||!Tn(t[r],e[r]))return!1}return!0}function Sd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Md(t,e){var n=Sd(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Sd(n)}}function Pm(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Pm(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Dm(){for(var t=window,e=Ia();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ia(t.document)}return e}function df(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function x_(t){var e=Dm(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Pm(n.ownerDocument.documentElement,n)){if(i!==null&&df(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Md(n,s);var o=Md(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var y_=ni&&"documentMode"in document&&11>=document.documentMode,Vr=null,rc=null,qs=null,sc=!1;function wd(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;sc||Vr==null||Vr!==Ia(i)||(i=Vr,"selectionStart"in i&&df(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),qs&&oo(qs,i)||(qs=i,i=Ba(rc,"onSelect"),0<i.length&&(e=new uf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Vr)))}function Oo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Hr={animationend:Oo("Animation","AnimationEnd"),animationiteration:Oo("Animation","AnimationIteration"),animationstart:Oo("Animation","AnimationStart"),transitionend:Oo("Transition","TransitionEnd")},Vl={},Im={};ni&&(Im=document.createElement("div").style,"AnimationEvent"in window||(delete Hr.animationend.animation,delete Hr.animationiteration.animation,delete Hr.animationstart.animation),"TransitionEvent"in window||delete Hr.transitionend.transition);function al(t){if(Vl[t])return Vl[t];if(!Hr[t])return t;var e=Hr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Im)return Vl[t]=e[n];return t}var km=al("animationend"),Nm=al("animationiteration"),Fm=al("animationstart"),zm=al("transitionend"),Om=new Map,Ed="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Fi(t,e){Om.set(t,e),mr(e,[t])}for(var Hl=0;Hl<Ed.length;Hl++){var Wl=Ed[Hl],S_=Wl.toLowerCase(),M_=Wl[0].toUpperCase()+Wl.slice(1);Fi(S_,"on"+M_)}Fi(km,"onAnimationEnd");Fi(Nm,"onAnimationIteration");Fi(Fm,"onAnimationStart");Fi("dblclick","onDoubleClick");Fi("focusin","onFocus");Fi("focusout","onBlur");Fi(zm,"onTransitionEnd");os("onMouseEnter",["mouseout","mouseover"]);os("onMouseLeave",["mouseout","mouseover"]);os("onPointerEnter",["pointerout","pointerover"]);os("onPointerLeave",["pointerout","pointerover"]);mr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));mr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));mr("onBeforeInput",["compositionend","keypress","textInput","paste"]);mr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));mr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));mr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Gs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),w_=new Set("cancel close invalid load scroll toggle".split(" ").concat(Gs));function bd(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,S0(i,e,void 0,t),t.currentTarget=null}function Um(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;bd(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;bd(r,a,u),s=l}}}if(Na)throw t=ec,Na=!1,ec=null,t}function We(t,e){var n=e[cc];n===void 0&&(n=e[cc]=new Set);var i=t+"__bubble";n.has(i)||(Bm(e,t,2,!1),n.add(i))}function jl(t,e,n){var i=0;e&&(i|=4),Bm(n,t,i,e)}var Uo="_reactListening"+Math.random().toString(36).slice(2);function ao(t){if(!t[Uo]){t[Uo]=!0,Xp.forEach(function(n){n!=="selectionchange"&&(w_.has(n)||jl(n,!1,t),jl(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Uo]||(e[Uo]=!0,jl("selectionchange",!1,e))}}function Bm(t,e,n,i){switch(wm(e)){case 1:var r=z0;break;case 4:r=O0;break;default:r=af}n=r.bind(null,e,n,t),r=void 0,!Ju||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function $l(t,e,n,i,r){var s=i;if((e&1)===0&&(e&2)===0&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Ki(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}um(function(){var u=s,c=nf(n),f=[];e:{var d=Om.get(t);if(d!==void 0){var g=uf,_=t;switch(t){case"keypress":if(wa(n)===0)break e;case"keydown":case"keyup":g=J0;break;case"focusin":_="focus",g=Ul;break;case"focusout":_="blur",g=Ul;break;case"beforeblur":case"afterblur":g=Ul;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=hd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=G0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=n_;break;case km:case Nm:case Fm:g=W0;break;case zm:g=r_;break;case"scroll":g=U0;break;case"wheel":g=o_;break;case"copy":case"cut":case"paste":g=$0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=md}var p=(e&4)!==0,h=!p&&t==="scroll",m=p?d!==null?d+"Capture":null:d;p=[];for(var v=u,y;v!==null;){y=v;var S=y.stateNode;if(y.tag===5&&S!==null&&(y=S,m!==null&&(S=to(v,m),S!=null&&p.push(lo(v,S,y)))),h)break;v=v.return}0<p.length&&(d=new g(d,_,null,n,c),f.push({event:d,listeners:p}))}}if((e&7)===0){e:{if(d=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",d&&n!==Zu&&(_=n.relatedTarget||n.fromElement)&&(Ki(_)||_[ii]))break e;if((g||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,g?(_=n.relatedTarget||n.toElement,g=u,_=_?Ki(_):null,_!==null&&(h=gr(_),_!==h||_.tag!==5&&_.tag!==6)&&(_=null)):(g=null,_=u),g!==_)){if(p=hd,S="onMouseLeave",m="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(p=md,S="onPointerLeave",m="onPointerEnter",v="pointer"),h=g==null?d:Wr(g),y=_==null?d:Wr(_),d=new p(S,v+"leave",g,n,c),d.target=h,d.relatedTarget=y,S=null,Ki(c)===u&&(p=new p(m,v+"enter",_,n,c),p.target=y,p.relatedTarget=h,S=p),h=S,g&&_)t:{for(p=g,m=_,v=0,y=p;y;y=Mr(y))v++;for(y=0,S=m;S;S=Mr(S))y++;for(;0<v-y;)p=Mr(p),v--;for(;0<y-v;)m=Mr(m),y--;for(;v--;){if(p===m||m!==null&&p===m.alternate)break t;p=Mr(p),m=Mr(m)}p=null}else p=null;g!==null&&Td(f,d,g,p,!1),_!==null&&h!==null&&Td(f,h,_,p,!0)}}e:{if(d=u?Wr(u):window,g=d.nodeName&&d.nodeName.toLowerCase(),g==="select"||g==="input"&&d.type==="file")var M=h_;else if(_d(d))if(Lm)M=v_;else{M=m_;var T=p_}else(g=d.nodeName)&&g.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(M=g_);if(M&&(M=M(t,u))){Am(f,M,n,c);break e}T&&T(t,d,u),t==="focusout"&&(T=d._wrapperState)&&T.controlled&&d.type==="number"&&$u(d,"number",d.value)}switch(T=u?Wr(u):window,t){case"focusin":(_d(T)||T.contentEditable==="true")&&(Vr=T,rc=u,qs=null);break;case"focusout":qs=rc=Vr=null;break;case"mousedown":sc=!0;break;case"contextmenu":case"mouseup":case"dragend":sc=!1,wd(f,n,c);break;case"selectionchange":if(y_)break;case"keydown":case"keyup":wd(f,n,c)}var A;if(ff)e:{switch(t){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else Gr?Tm(t,n)&&(x="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(bm&&n.locale!=="ko"&&(Gr||x!=="onCompositionStart"?x==="onCompositionEnd"&&Gr&&(A=Em()):(Mi=c,lf="value"in Mi?Mi.value:Mi.textContent,Gr=!0)),T=Ba(u,x),0<T.length&&(x=new pd(x,t,null,n,c),f.push({event:x,listeners:T}),A?x.data=A:(A=Cm(n),A!==null&&(x.data=A)))),(A=l_?u_(t,n):c_(t,n))&&(u=Ba(u,"onBeforeInput"),0<u.length&&(c=new pd("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=A))}Um(f,e)})}function lo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ba(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=to(t,n),s!=null&&i.unshift(lo(t,s,r)),s=to(t,e),s!=null&&i.push(lo(t,s,r))),t=t.return}return i}function Mr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Td(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=to(n,s),l!=null&&o.unshift(lo(n,l,a))):r||(l=to(n,s),l!=null&&o.push(lo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var E_=/\r\n?/g,b_=/\u0000|\uFFFD/g;function Cd(t){return(typeof t=="string"?t:""+t).replace(E_,`
`).replace(b_,"")}function Bo(t,e,n){if(e=Cd(e),Cd(t)!==e&&n)throw Error(Z(425))}function Ga(){}var oc=null,ac=null;function lc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var uc=typeof setTimeout=="function"?setTimeout:void 0,T_=typeof clearTimeout=="function"?clearTimeout:void 0,Ad=typeof Promise=="function"?Promise:void 0,C_=typeof queueMicrotask=="function"?queueMicrotask:typeof Ad<"u"?function(t){return Ad.resolve(null).then(t).catch(A_)}:uc;function A_(t){setTimeout(function(){throw t})}function Xl(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ro(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ro(e)}function Ci(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Ld(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ss=Math.random().toString(36).slice(2),kn="__reactFiber$"+Ss,uo="__reactProps$"+Ss,ii="__reactContainer$"+Ss,cc="__reactEvents$"+Ss,L_="__reactListeners$"+Ss,R_="__reactHandles$"+Ss;function Ki(t){var e=t[kn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ii]||n[kn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Ld(t);t!==null;){if(n=t[kn])return n;t=Ld(t)}return e}t=n,n=t.parentNode}return null}function wo(t){return t=t[kn]||t[ii],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Wr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(Z(33))}function ll(t){return t[uo]||null}var fc=[],jr=-1;function zi(t){return{current:t}}function je(t){0>jr||(t.current=fc[jr],fc[jr]=null,jr--)}function He(t,e){jr++,fc[jr]=t.current,t.current=e}var ki={},bt=zi(ki),Ot=zi(!1),ar=ki;function as(t,e){var n=t.type.contextTypes;if(!n)return ki;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Ut(t){return t=t.childContextTypes,t!=null}function Va(){je(Ot),je(bt)}function Rd(t,e,n){if(bt.current!==ki)throw Error(Z(168));He(bt,e),He(Ot,n)}function Gm(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(Z(108,p0(t)||"Unknown",r));return Ye({},n,i)}function Ha(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ki,ar=bt.current,He(bt,t),He(Ot,Ot.current),!0}function Pd(t,e,n){var i=t.stateNode;if(!i)throw Error(Z(169));n?(t=Gm(t,e,ar),i.__reactInternalMemoizedMergedChildContext=t,je(Ot),je(bt),He(bt,t)):je(Ot),He(Ot,n)}var Yn=null,ul=!1,ql=!1;function Vm(t){Yn===null?Yn=[t]:Yn.push(t)}function P_(t){ul=!0,Vm(t)}function Oi(){if(!ql&&Yn!==null){ql=!0;var t=0,e=Oe;try{var n=Yn;for(Oe=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Yn=null,ul=!1}catch(r){throw Yn!==null&&(Yn=Yn.slice(t+1)),hm(rf,Oi),r}finally{Oe=e,ql=!1}}return null}var $r=[],Xr=0,Wa=null,ja=0,rn=[],sn=0,lr=null,Zn=1,Qn="";function Wi(t,e){$r[Xr++]=ja,$r[Xr++]=Wa,Wa=t,ja=e}function Hm(t,e,n){rn[sn++]=Zn,rn[sn++]=Qn,rn[sn++]=lr,lr=t;var i=Zn;t=Qn;var r=32-wn(i)-1;i&=~(1<<r),n+=1;var s=32-wn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Zn=1<<32-wn(e)+r|n<<r|i,Qn=s+t}else Zn=1<<s|n<<r|i,Qn=t}function hf(t){t.return!==null&&(Wi(t,1),Hm(t,1,0))}function pf(t){for(;t===Wa;)Wa=$r[--Xr],$r[Xr]=null,ja=$r[--Xr],$r[Xr]=null;for(;t===lr;)lr=rn[--sn],rn[sn]=null,Qn=rn[--sn],rn[sn]=null,Zn=rn[--sn],rn[sn]=null}var Yt=null,qt=null,$e=!1,yn=null;function Wm(t,e){var n=on(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Dd(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Yt=t,qt=Ci(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Yt=t,qt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=lr!==null?{id:Zn,overflow:Qn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=on(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Yt=t,qt=null,!0):!1;default:return!1}}function dc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function hc(t){if($e){var e=qt;if(e){var n=e;if(!Dd(t,e)){if(dc(t))throw Error(Z(418));e=Ci(n.nextSibling);var i=Yt;e&&Dd(t,e)?Wm(i,n):(t.flags=t.flags&-4097|2,$e=!1,Yt=t)}}else{if(dc(t))throw Error(Z(418));t.flags=t.flags&-4097|2,$e=!1,Yt=t}}}function Id(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Yt=t}function Go(t){if(t!==Yt)return!1;if(!$e)return Id(t),$e=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!lc(t.type,t.memoizedProps)),e&&(e=qt)){if(dc(t))throw jm(),Error(Z(418));for(;e;)Wm(t,e),e=Ci(e.nextSibling)}if(Id(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(Z(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){qt=Ci(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}qt=null}}else qt=Yt?Ci(t.stateNode.nextSibling):null;return!0}function jm(){for(var t=qt;t;)t=Ci(t.nextSibling)}function ls(){qt=Yt=null,$e=!1}function mf(t){yn===null?yn=[t]:yn.push(t)}var D_=ai.ReactCurrentBatchConfig;function _n(t,e){if(t&&t.defaultProps){e=Ye({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var $a=zi(null),Xa=null,qr=null,gf=null;function vf(){gf=qr=Xa=null}function _f(t){var e=$a.current;je($a),t._currentValue=e}function pc(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ns(t,e){Xa=t,gf=qr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(zt=!0),t.firstContext=null)}function cn(t){var e=t._currentValue;if(gf!==t)if(t={context:t,memoizedValue:e,next:null},qr===null){if(Xa===null)throw Error(Z(308));qr=t,Xa.dependencies={lanes:0,firstContext:t}}else qr=qr.next=t;return e}var Zi=null;function xf(t){Zi===null?Zi=[t]:Zi.push(t)}function $m(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,xf(e)):(n.next=r.next,r.next=n),e.interleaved=n,ri(t,i)}function ri(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var xi=!1;function yf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Xm(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ei(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ai(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,(De&2)!==0){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,ri(t,n)}return r=i.interleaved,r===null?(e.next=e,xf(i)):(e.next=r.next,r.next=e),i.interleaved=e,ri(t,n)}function Ea(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,sf(t,n)}}function kd(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function qa(t,e,n,i){var r=t.updateQueue;xi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,g=a.eventTime;if((i&d)===d){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,p=a;switch(d=e,g=n,p.tag){case 1:if(_=p.payload,typeof _=="function"){f=_.call(g,f,d);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=p.payload,d=typeof _=="function"?_.call(g,f,d):_,d==null)break e;f=Ye({},f,d);break e;case 2:xi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else g={eventTime:g,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=f):c=c.next=g,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(1);if(c===null&&(l=f),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);cr|=o,t.lanes=o,t.memoizedState=f}}function Nd(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(Z(191,r));r.call(i)}}}var qm=new $p.Component().refs;function mc(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Ye({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var cl={isMounted:function(t){return(t=t._reactInternals)?gr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Lt(),r=Ri(t),s=ei(i,r);s.payload=e,n!=null&&(s.callback=n),e=Ai(t,s,r),e!==null&&(En(e,t,r,i),Ea(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Lt(),r=Ri(t),s=ei(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ai(t,s,r),e!==null&&(En(e,t,r,i),Ea(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Lt(),i=Ri(t),r=ei(n,i);r.tag=2,e!=null&&(r.callback=e),e=Ai(t,r,i),e!==null&&(En(e,t,i,n),Ea(e,t,i))}};function Fd(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!oo(n,i)||!oo(r,s):!0}function Ym(t,e,n){var i=!1,r=ki,s=e.contextType;return typeof s=="object"&&s!==null?s=cn(s):(r=Ut(e)?ar:bt.current,i=e.contextTypes,s=(i=i!=null)?as(t,r):ki),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=cl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function zd(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&cl.enqueueReplaceState(e,e.state,null)}function gc(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs=qm,yf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=cn(s):(s=Ut(e)?ar:bt.current,r.context=as(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(mc(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&cl.enqueueReplaceState(r,r.state,null),qa(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ds(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(Z(309));var i=n.stateNode}if(!i)throw Error(Z(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;a===qm&&(a=r.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(Z(284));if(!n._owner)throw Error(Z(290,t))}return t}function Vo(t,e){throw t=Object.prototype.toString.call(e),Error(Z(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Od(t){var e=t._init;return e(t._payload)}function Km(t){function e(m,v){if(t){var y=m.deletions;y===null?(m.deletions=[v],m.flags|=16):y.push(v)}}function n(m,v){if(!t)return null;for(;v!==null;)e(m,v),v=v.sibling;return null}function i(m,v){for(m=new Map;v!==null;)v.key!==null?m.set(v.key,v):m.set(v.index,v),v=v.sibling;return m}function r(m,v){return m=Pi(m,v),m.index=0,m.sibling=null,m}function s(m,v,y){return m.index=y,t?(y=m.alternate,y!==null?(y=y.index,y<v?(m.flags|=2,v):y):(m.flags|=2,v)):(m.flags|=1048576,v)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,v,y,S){return v===null||v.tag!==6?(v=tu(y,m.mode,S),v.return=m,v):(v=r(v,y),v.return=m,v)}function l(m,v,y,S){var M=y.type;return M===Br?c(m,v,y.props.children,S,y.key):v!==null&&(v.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===_i&&Od(M)===v.type)?(S=r(v,y.props),S.ref=Ds(m,v,y),S.return=m,S):(S=Ra(y.type,y.key,y.props,null,m.mode,S),S.ref=Ds(m,v,y),S.return=m,S)}function u(m,v,y,S){return v===null||v.tag!==4||v.stateNode.containerInfo!==y.containerInfo||v.stateNode.implementation!==y.implementation?(v=nu(y,m.mode,S),v.return=m,v):(v=r(v,y.children||[]),v.return=m,v)}function c(m,v,y,S,M){return v===null||v.tag!==7?(v=ir(y,m.mode,S,M),v.return=m,v):(v=r(v,y),v.return=m,v)}function f(m,v,y){if(typeof v=="string"&&v!==""||typeof v=="number")return v=tu(""+v,m.mode,y),v.return=m,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Po:return y=Ra(v.type,v.key,v.props,null,m.mode,y),y.ref=Ds(m,null,v),y.return=m,y;case Ur:return v=nu(v,m.mode,y),v.return=m,v;case _i:var S=v._init;return f(m,S(v._payload),y)}if(Us(v)||Cs(v))return v=ir(v,m.mode,y,null),v.return=m,v;Vo(m,v)}return null}function d(m,v,y,S){var M=v!==null?v.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return M!==null?null:a(m,v,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Po:return y.key===M?l(m,v,y,S):null;case Ur:return y.key===M?u(m,v,y,S):null;case _i:return M=y._init,d(m,v,M(y._payload),S)}if(Us(y)||Cs(y))return M!==null?null:c(m,v,y,S,null);Vo(m,y)}return null}function g(m,v,y,S,M){if(typeof S=="string"&&S!==""||typeof S=="number")return m=m.get(y)||null,a(v,m,""+S,M);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Po:return m=m.get(S.key===null?y:S.key)||null,l(v,m,S,M);case Ur:return m=m.get(S.key===null?y:S.key)||null,u(v,m,S,M);case _i:var T=S._init;return g(m,v,y,T(S._payload),M)}if(Us(S)||Cs(S))return m=m.get(y)||null,c(v,m,S,M,null);Vo(v,S)}return null}function _(m,v,y,S){for(var M=null,T=null,A=v,x=v=0,L=null;A!==null&&x<y.length;x++){A.index>x?(L=A,A=null):L=A.sibling;var D=d(m,A,y[x],S);if(D===null){A===null&&(A=L);break}t&&A&&D.alternate===null&&e(m,A),v=s(D,v,x),T===null?M=D:T.sibling=D,T=D,A=L}if(x===y.length)return n(m,A),$e&&Wi(m,x),M;if(A===null){for(;x<y.length;x++)A=f(m,y[x],S),A!==null&&(v=s(A,v,x),T===null?M=A:T.sibling=A,T=A);return $e&&Wi(m,x),M}for(A=i(m,A);x<y.length;x++)L=g(A,m,x,y[x],S),L!==null&&(t&&L.alternate!==null&&A.delete(L.key===null?x:L.key),v=s(L,v,x),T===null?M=L:T.sibling=L,T=L);return t&&A.forEach(function(N){return e(m,N)}),$e&&Wi(m,x),M}function p(m,v,y,S){var M=Cs(y);if(typeof M!="function")throw Error(Z(150));if(y=M.call(y),y==null)throw Error(Z(151));for(var T=M=null,A=v,x=v=0,L=null,D=y.next();A!==null&&!D.done;x++,D=y.next()){A.index>x?(L=A,A=null):L=A.sibling;var N=d(m,A,D.value,S);if(N===null){A===null&&(A=L);break}t&&A&&N.alternate===null&&e(m,A),v=s(N,v,x),T===null?M=N:T.sibling=N,T=N,A=L}if(D.done)return n(m,A),$e&&Wi(m,x),M;if(A===null){for(;!D.done;x++,D=y.next())D=f(m,D.value,S),D!==null&&(v=s(D,v,x),T===null?M=D:T.sibling=D,T=D);return $e&&Wi(m,x),M}for(A=i(m,A);!D.done;x++,D=y.next())D=g(A,m,x,D.value,S),D!==null&&(t&&D.alternate!==null&&A.delete(D.key===null?x:D.key),v=s(D,v,x),T===null?M=D:T.sibling=D,T=D);return t&&A.forEach(function(Q){return e(m,Q)}),$e&&Wi(m,x),M}function h(m,v,y,S){if(typeof y=="object"&&y!==null&&y.type===Br&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Po:e:{for(var M=y.key,T=v;T!==null;){if(T.key===M){if(M=y.type,M===Br){if(T.tag===7){n(m,T.sibling),v=r(T,y.props.children),v.return=m,m=v;break e}}else if(T.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===_i&&Od(M)===T.type){n(m,T.sibling),v=r(T,y.props),v.ref=Ds(m,T,y),v.return=m,m=v;break e}n(m,T);break}else e(m,T);T=T.sibling}y.type===Br?(v=ir(y.props.children,m.mode,S,y.key),v.return=m,m=v):(S=Ra(y.type,y.key,y.props,null,m.mode,S),S.ref=Ds(m,v,y),S.return=m,m=S)}return o(m);case Ur:e:{for(T=y.key;v!==null;){if(v.key===T)if(v.tag===4&&v.stateNode.containerInfo===y.containerInfo&&v.stateNode.implementation===y.implementation){n(m,v.sibling),v=r(v,y.children||[]),v.return=m,m=v;break e}else{n(m,v);break}else e(m,v);v=v.sibling}v=nu(y,m.mode,S),v.return=m,m=v}return o(m);case _i:return T=y._init,h(m,v,T(y._payload),S)}if(Us(y))return _(m,v,y,S);if(Cs(y))return p(m,v,y,S);Vo(m,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,v!==null&&v.tag===6?(n(m,v.sibling),v=r(v,y),v.return=m,m=v):(n(m,v),v=tu(y,m.mode,S),v.return=m,m=v),o(m)):n(m,v)}return h}var us=Km(!0),Zm=Km(!1),Eo={},On=zi(Eo),co=zi(Eo),fo=zi(Eo);function Qi(t){if(t===Eo)throw Error(Z(174));return t}function Sf(t,e){switch(He(fo,e),He(co,t),He(On,Eo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:qu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=qu(e,t)}je(On),He(On,e)}function cs(){je(On),je(co),je(fo)}function Qm(t){Qi(fo.current);var e=Qi(On.current),n=qu(e,t.type);e!==n&&(He(co,t),He(On,n))}function Mf(t){co.current===t&&(je(On),je(co))}var Xe=zi(0);function Ya(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Yl=[];function wf(){for(var t=0;t<Yl.length;t++)Yl[t]._workInProgressVersionPrimary=null;Yl.length=0}var ba=ai.ReactCurrentDispatcher,Kl=ai.ReactCurrentBatchConfig,ur=0,qe=null,lt=null,dt=null,Ka=!1,Ys=!1,ho=0,I_=0;function yt(){throw Error(Z(321))}function Ef(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Tn(t[n],e[n]))return!1;return!0}function bf(t,e,n,i,r,s){if(ur=s,qe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ba.current=t===null||t.memoizedState===null?z_:O_,t=n(i,r),Ys){s=0;do{if(Ys=!1,ho=0,25<=s)throw Error(Z(301));s+=1,dt=lt=null,e.updateQueue=null,ba.current=U_,t=n(i,r)}while(Ys)}if(ba.current=Za,e=lt!==null&&lt.next!==null,ur=0,dt=lt=qe=null,Ka=!1,e)throw Error(Z(300));return t}function Tf(){var t=ho!==0;return ho=0,t}function Dn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dt===null?qe.memoizedState=dt=t:dt=dt.next=t,dt}function fn(){if(lt===null){var t=qe.alternate;t=t!==null?t.memoizedState:null}else t=lt.next;var e=dt===null?qe.memoizedState:dt.next;if(e!==null)dt=e,lt=t;else{if(t===null)throw Error(Z(310));lt=t,t={memoizedState:lt.memoizedState,baseState:lt.baseState,baseQueue:lt.baseQueue,queue:lt.queue,next:null},dt===null?qe.memoizedState=dt=t:dt=dt.next=t}return dt}function po(t,e){return typeof e=="function"?e(t):e}function Zl(t){var e=fn(),n=e.queue;if(n===null)throw Error(Z(311));n.lastRenderedReducer=t;var i=lt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((ur&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,qe.lanes|=c,cr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,Tn(i,e.memoizedState)||(zt=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,qe.lanes|=s,cr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ql(t){var e=fn(),n=e.queue;if(n===null)throw Error(Z(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Tn(s,e.memoizedState)||(zt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Jm(){}function eg(t,e){var n=qe,i=fn(),r=e(),s=!Tn(i.memoizedState,r);if(s&&(i.memoizedState=r,zt=!0),i=i.queue,Cf(ig.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||dt!==null&&dt.memoizedState.tag&1){if(n.flags|=2048,mo(9,ng.bind(null,n,i,r,e),void 0,null),ht===null)throw Error(Z(349));(ur&30)!==0||tg(n,e,r)}return r}function tg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=qe.updateQueue,e===null?(e={lastEffect:null,stores:null},qe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function ng(t,e,n,i){e.value=n,e.getSnapshot=i,rg(e)&&sg(t)}function ig(t,e,n){return n(function(){rg(e)&&sg(t)})}function rg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Tn(t,n)}catch{return!0}}function sg(t){var e=ri(t,1);e!==null&&En(e,t,1,-1)}function Ud(t){var e=Dn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:po,lastRenderedState:t},e.queue=t,t=t.dispatch=F_.bind(null,qe,t),[e.memoizedState,t]}function mo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=qe.updateQueue,e===null?(e={lastEffect:null,stores:null},qe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function og(){return fn().memoizedState}function Ta(t,e,n,i){var r=Dn();qe.flags|=t,r.memoizedState=mo(1|e,n,void 0,i===void 0?null:i)}function fl(t,e,n,i){var r=fn();i=i===void 0?null:i;var s=void 0;if(lt!==null){var o=lt.memoizedState;if(s=o.destroy,i!==null&&Ef(i,o.deps)){r.memoizedState=mo(e,n,s,i);return}}qe.flags|=t,r.memoizedState=mo(1|e,n,s,i)}function Bd(t,e){return Ta(8390656,8,t,e)}function Cf(t,e){return fl(2048,8,t,e)}function ag(t,e){return fl(4,2,t,e)}function lg(t,e){return fl(4,4,t,e)}function ug(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function cg(t,e,n){return n=n!=null?n.concat([t]):null,fl(4,4,ug.bind(null,e,t),n)}function Af(){}function fg(t,e){var n=fn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Ef(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function dg(t,e){var n=fn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Ef(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function hg(t,e,n){return(ur&21)===0?(t.baseState&&(t.baseState=!1,zt=!0),t.memoizedState=n):(Tn(n,e)||(n=gm(),qe.lanes|=n,cr|=n,t.baseState=!0),e)}function k_(t,e){var n=Oe;Oe=n!==0&&4>n?n:4,t(!0);var i=Kl.transition;Kl.transition={};try{t(!1),e()}finally{Oe=n,Kl.transition=i}}function pg(){return fn().memoizedState}function N_(t,e,n){var i=Ri(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},mg(t))gg(e,n);else if(n=$m(t,e,n,i),n!==null){var r=Lt();En(n,t,i,r),vg(n,e,i)}}function F_(t,e,n){var i=Ri(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(mg(t))gg(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Tn(a,o)){var l=e.interleaved;l===null?(r.next=r,xf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=$m(t,e,r,i),n!==null&&(r=Lt(),En(n,t,i,r),vg(n,e,i))}}function mg(t){var e=t.alternate;return t===qe||e!==null&&e===qe}function gg(t,e){Ys=Ka=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function vg(t,e,n){if((n&4194240)!==0){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,sf(t,n)}}var Za={readContext:cn,useCallback:yt,useContext:yt,useEffect:yt,useImperativeHandle:yt,useInsertionEffect:yt,useLayoutEffect:yt,useMemo:yt,useReducer:yt,useRef:yt,useState:yt,useDebugValue:yt,useDeferredValue:yt,useTransition:yt,useMutableSource:yt,useSyncExternalStore:yt,useId:yt,unstable_isNewReconciler:!1},z_={readContext:cn,useCallback:function(t,e){return Dn().memoizedState=[t,e===void 0?null:e],t},useContext:cn,useEffect:Bd,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ta(4194308,4,ug.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ta(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ta(4,2,t,e)},useMemo:function(t,e){var n=Dn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Dn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=N_.bind(null,qe,t),[i.memoizedState,t]},useRef:function(t){var e=Dn();return t={current:t},e.memoizedState=t},useState:Ud,useDebugValue:Af,useDeferredValue:function(t){return Dn().memoizedState=t},useTransition:function(){var t=Ud(!1),e=t[0];return t=k_.bind(null,t[1]),Dn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=qe,r=Dn();if($e){if(n===void 0)throw Error(Z(407));n=n()}else{if(n=e(),ht===null)throw Error(Z(349));(ur&30)!==0||tg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Bd(ig.bind(null,i,s,t),[t]),i.flags|=2048,mo(9,ng.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Dn(),e=ht.identifierPrefix;if($e){var n=Qn,i=Zn;n=(i&~(1<<32-wn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ho++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=I_++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},O_={readContext:cn,useCallback:fg,useContext:cn,useEffect:Cf,useImperativeHandle:cg,useInsertionEffect:ag,useLayoutEffect:lg,useMemo:dg,useReducer:Zl,useRef:og,useState:function(){return Zl(po)},useDebugValue:Af,useDeferredValue:function(t){var e=fn();return hg(e,lt.memoizedState,t)},useTransition:function(){var t=Zl(po)[0],e=fn().memoizedState;return[t,e]},useMutableSource:Jm,useSyncExternalStore:eg,useId:pg,unstable_isNewReconciler:!1},U_={readContext:cn,useCallback:fg,useContext:cn,useEffect:Cf,useImperativeHandle:cg,useInsertionEffect:ag,useLayoutEffect:lg,useMemo:dg,useReducer:Ql,useRef:og,useState:function(){return Ql(po)},useDebugValue:Af,useDeferredValue:function(t){var e=fn();return lt===null?e.memoizedState=t:hg(e,lt.memoizedState,t)},useTransition:function(){var t=Ql(po)[0],e=fn().memoizedState;return[t,e]},useMutableSource:Jm,useSyncExternalStore:eg,useId:pg,unstable_isNewReconciler:!1};function fs(t,e){try{var n="",i=e;do n+=h0(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Jl(t,e,n){return{value:t,source:null,stack:n!=null?n:null,digest:e!=null?e:null}}function vc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var B_=typeof WeakMap=="function"?WeakMap:Map;function _g(t,e,n){n=ei(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Ja||(Ja=!0,Cc=i),vc(t,e)},n}function xg(t,e,n){n=ei(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){vc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){vc(t,e),typeof i!="function"&&(Li===null?Li=new Set([this]):Li.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Gd(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new B_;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=ex.bind(null,t,e,n),e.then(t,t))}function Vd(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Hd(t,e,n,i,r){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=ei(-1,1),e.tag=2,Ai(n,e,1))),n.lanes|=1),t):(t.flags|=65536,t.lanes=r,t)}var G_=ai.ReactCurrentOwner,zt=!1;function At(t,e,n,i){e.child=t===null?Zm(e,null,n,i):us(e,t.child,n,i)}function Wd(t,e,n,i,r){n=n.render;var s=e.ref;return ns(e,r),i=bf(t,e,n,i,s,r),n=Tf(),t!==null&&!zt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,si(t,e,r)):($e&&n&&hf(e),e.flags|=1,At(t,e,i,r),e.child)}function jd(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Ff(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,yg(t,e,s,i,r)):(t=Ra(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,(t.lanes&r)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:oo,n(o,i)&&t.ref===e.ref)return si(t,e,r)}return e.flags|=1,t=Pi(s,i),t.ref=e.ref,t.return=e,e.child=t}function yg(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(oo(s,i)&&t.ref===e.ref)if(zt=!1,e.pendingProps=i=s,(t.lanes&r)!==0)(t.flags&131072)!==0&&(zt=!0);else return e.lanes=t.lanes,si(t,e,r)}return _c(t,e,n,i,r)}function Sg(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},He(Kr,jt),jt|=n;else{if((n&1073741824)===0)return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,He(Kr,jt),jt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,He(Kr,jt),jt|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,He(Kr,jt),jt|=i;return At(t,e,r,n),e.child}function Mg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function _c(t,e,n,i,r){var s=Ut(n)?ar:bt.current;return s=as(e,s),ns(e,r),n=bf(t,e,n,i,s,r),i=Tf(),t!==null&&!zt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,si(t,e,r)):($e&&i&&hf(e),e.flags|=1,At(t,e,n,r),e.child)}function $d(t,e,n,i,r){if(Ut(n)){var s=!0;Ha(e)}else s=!1;if(ns(e,r),e.stateNode===null)Ca(t,e),Ym(e,n,i),gc(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=cn(u):(u=Ut(n)?ar:bt.current,u=as(e,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&zd(e,o,i,u),xi=!1;var d=e.memoizedState;o.state=d,qa(e,i,o,r),l=e.memoizedState,a!==i||d!==l||Ot.current||xi?(typeof c=="function"&&(mc(e,n,c,i),l=e.memoizedState),(a=xi||Fd(e,n,a,i,d,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Xm(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:_n(e.type,a),o.props=u,f=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=cn(l):(l=Ut(n)?ar:bt.current,l=as(e,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||d!==l)&&zd(e,o,i,l),xi=!1,d=e.memoizedState,o.state=d,qa(e,i,o,r);var _=e.memoizedState;a!==f||d!==_||Ot.current||xi?(typeof g=="function"&&(mc(e,n,g,i),_=e.memoizedState),(u=xi||Fd(e,n,u,i,d,_,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return xc(t,e,n,i,s,r)}function xc(t,e,n,i,r,s){Mg(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Pd(e,n,!1),si(t,e,s);i=e.stateNode,G_.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=us(e,t.child,null,s),e.child=us(e,null,a,s)):At(t,e,a,s),e.memoizedState=i.state,r&&Pd(e,n,!0),e.child}function wg(t){var e=t.stateNode;e.pendingContext?Rd(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Rd(t,e.context,!1),Sf(t,e.containerInfo)}function Xd(t,e,n,i,r){return ls(),mf(r),e.flags|=256,At(t,e,n,i),e.child}var yc={dehydrated:null,treeContext:null,retryLane:0};function Sc(t){return{baseLanes:t,cachePool:null,transitions:null}}function Eg(t,e,n){var i=e.pendingProps,r=Xe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),He(Xe,r&1),t===null)return hc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},(i&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=pl(o,i,0,null),t=ir(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Sc(n),e.memoizedState=yc,t):Lf(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return V_(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return(o&1)===0&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Pi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Pi(a,s):(s=ir(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Sc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=yc,i}return s=t.child,t=s.sibling,i=Pi(s,{mode:"visible",children:i.children}),(e.mode&1)===0&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Lf(t,e){return e=pl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ho(t,e,n,i){return i!==null&&mf(i),us(e,t.child,null,n),t=Lf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function V_(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Jl(Error(Z(422))),Ho(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=pl({mode:"visible",children:i.children},r,0,null),s=ir(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,(e.mode&1)!==0&&us(e,t.child,null,o),e.child.memoizedState=Sc(o),e.memoizedState=yc,s);if((e.mode&1)===0)return Ho(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(Z(419)),i=Jl(s,i,void 0),Ho(t,e,o,i)}if(a=(o&t.childLanes)!==0,zt||a){if(i=ht,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=(r&(i.suspendedLanes|o))!==0?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,ri(t,r),En(i,t,r,-1))}return Nf(),i=Jl(Error(Z(421))),Ho(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=tx.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,qt=Ci(r.nextSibling),Yt=e,$e=!0,yn=null,t!==null&&(rn[sn++]=Zn,rn[sn++]=Qn,rn[sn++]=lr,Zn=t.id,Qn=t.overflow,lr=e),e=Lf(e,i.children),e.flags|=4096,e)}function qd(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),pc(t.return,e,n)}function eu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function bg(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(At(t,e,i.children,n),i=Xe.current,(i&2)!==0)i=i&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&qd(t,n,e);else if(t.tag===19)qd(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(He(Xe,i),(e.mode&1)===0)e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Ya(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),eu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Ya(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}eu(e,!0,n,null,s);break;case"together":eu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ca(t,e){(e.mode&1)===0&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function si(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),cr|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(Z(153));if(e.child!==null){for(t=e.child,n=Pi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Pi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function H_(t,e,n){switch(e.tag){case 3:wg(e),ls();break;case 5:Qm(e);break;case 1:Ut(e.type)&&Ha(e);break;case 4:Sf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;He($a,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(He(Xe,Xe.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?Eg(t,e,n):(He(Xe,Xe.current&1),t=si(t,e,n),t!==null?t.sibling:null);He(Xe,Xe.current&1);break;case 19:if(i=(n&e.childLanes)!==0,(t.flags&128)!==0){if(i)return bg(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),He(Xe,Xe.current),i)break;return null;case 22:case 23:return e.lanes=0,Sg(t,e,n)}return si(t,e,n)}var Tg,Mc,Cg,Ag;Tg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Mc=function(){};Cg=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Qi(On.current);var s=null;switch(n){case"input":r=Wu(t,r),i=Wu(t,i),s=[];break;case"select":r=Ye({},r,{value:void 0}),i=Ye({},i,{value:void 0}),s=[];break;case"textarea":r=Xu(t,r),i=Xu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Ga)}Yu(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Js.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Js.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&We("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Ag=function(t,e,n,i){n!==i&&(e.flags|=4)};function Is(t,e){if(!$e)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function St(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function W_(t,e,n){var i=e.pendingProps;switch(pf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return St(e),null;case 1:return Ut(e.type)&&Va(),St(e),null;case 3:return i=e.stateNode,cs(),je(Ot),je(bt),wf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Go(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,yn!==null&&(Rc(yn),yn=null))),Mc(t,e),St(e),null;case 5:Mf(e);var r=Qi(fo.current);if(n=e.type,t!==null&&e.stateNode!=null)Cg(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(Z(166));return St(e),null}if(t=Qi(On.current),Go(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[kn]=e,i[uo]=s,t=(e.mode&1)!==0,n){case"dialog":We("cancel",i),We("close",i);break;case"iframe":case"object":case"embed":We("load",i);break;case"video":case"audio":for(r=0;r<Gs.length;r++)We(Gs[r],i);break;case"source":We("error",i);break;case"img":case"image":case"link":We("error",i),We("load",i);break;case"details":We("toggle",i);break;case"input":id(i,s),We("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},We("invalid",i);break;case"textarea":sd(i,s),We("invalid",i)}Yu(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Bo(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Bo(i.textContent,a,t),r=["children",""+a]):Js.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&We("scroll",i)}switch(n){case"input":Do(i),rd(i,s,!0);break;case"textarea":Do(i),od(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Ga)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=tm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[kn]=e,t[uo]=i,Tg(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ku(n,i),n){case"dialog":We("cancel",t),We("close",t),r=i;break;case"iframe":case"object":case"embed":We("load",t),r=i;break;case"video":case"audio":for(r=0;r<Gs.length;r++)We(Gs[r],t);r=i;break;case"source":We("error",t),r=i;break;case"img":case"image":case"link":We("error",t),We("load",t),r=i;break;case"details":We("toggle",t),r=i;break;case"input":id(t,i),r=Wu(t,i),We("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Ye({},i,{value:void 0}),We("invalid",t);break;case"textarea":sd(t,i),r=Xu(t,i),We("invalid",t);break;default:r=i}Yu(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?rm(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&nm(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&eo(t,l):typeof l=="number"&&eo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Js.hasOwnProperty(s)?l!=null&&s==="onScroll"&&We("scroll",t):l!=null&&Qc(t,s,l,o))}switch(n){case"input":Do(t),rd(t,i,!1);break;case"textarea":Do(t),od(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Ii(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Qr(t,!!i.multiple,s,!1):i.defaultValue!=null&&Qr(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Ga)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return St(e),null;case 6:if(t&&e.stateNode!=null)Ag(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(Z(166));if(n=Qi(fo.current),Qi(On.current),Go(e)){if(i=e.stateNode,n=e.memoizedProps,i[kn]=e,(s=i.nodeValue!==n)&&(t=Yt,t!==null))switch(t.tag){case 3:Bo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Bo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[kn]=e,e.stateNode=i}return St(e),null;case 13:if(je(Xe),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if($e&&qt!==null&&(e.mode&1)!==0&&(e.flags&128)===0)jm(),ls(),e.flags|=98560,s=!1;else if(s=Go(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(Z(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(Z(317));s[kn]=e}else ls(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;St(e),s=!1}else yn!==null&&(Rc(yn),yn=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(Xe.current&1)!==0?ut===0&&(ut=3):Nf())),e.updateQueue!==null&&(e.flags|=4),St(e),null);case 4:return cs(),Mc(t,e),t===null&&ao(e.stateNode.containerInfo),St(e),null;case 10:return _f(e.type._context),St(e),null;case 17:return Ut(e.type)&&Va(),St(e),null;case 19:if(je(Xe),s=e.memoizedState,s===null)return St(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Is(s,!1);else{if(ut!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=Ya(t),o!==null){for(e.flags|=128,Is(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return He(Xe,Xe.current&1|2),e.child}t=t.sibling}s.tail!==null&&nt()>ds&&(e.flags|=128,i=!0,Is(s,!1),e.lanes=4194304)}else{if(!i)if(t=Ya(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Is(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!$e)return St(e),null}else 2*nt()-s.renderingStartTime>ds&&n!==1073741824&&(e.flags|=128,i=!0,Is(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=nt(),e.sibling=null,n=Xe.current,He(Xe,i?n&1|2:n&1),e):(St(e),null);case 22:case 23:return kf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&(e.mode&1)!==0?(jt&1073741824)!==0&&(St(e),e.subtreeFlags&6&&(e.flags|=8192)):St(e),null;case 24:return null;case 25:return null}throw Error(Z(156,e.tag))}function j_(t,e){switch(pf(e),e.tag){case 1:return Ut(e.type)&&Va(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return cs(),je(Ot),je(bt),wf(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return Mf(e),null;case 13:if(je(Xe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(Z(340));ls()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return je(Xe),null;case 4:return cs(),null;case 10:return _f(e.type._context),null;case 22:case 23:return kf(),null;case 24:return null;default:return null}}var Wo=!1,Et=!1,$_=typeof WeakSet=="function"?WeakSet:Set,ue=null;function Yr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Je(t,e,i)}else n.current=null}function wc(t,e,n){try{n()}catch(i){Je(t,e,i)}}var Yd=!1;function X_(t,e){if(oc=Oa,t=Dm(),df(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,f=t,d=null;t:for(;;){for(var g;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(g=f.firstChild)!==null;)d=f,f=g;for(;;){if(f===t)break t;if(d===n&&++u===r&&(a=o),d===s&&++c===i&&(l=o),(g=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ac={focusedElem:t,selectionRange:n},Oa=!1,ue=e;ue!==null;)if(e=ue,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ue=t;else for(;ue!==null;){e=ue;try{var _=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var p=_.memoizedProps,h=_.memoizedState,m=e.stateNode,v=m.getSnapshotBeforeUpdate(e.elementType===e.type?p:_n(e.type,p),h);m.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Z(163))}}catch(S){Je(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,ue=t;break}ue=e.return}return _=Yd,Yd=!1,_}function Ks(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&wc(e,n,s)}r=r.next}while(r!==i)}}function dl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Ec(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Lg(t){var e=t.alternate;e!==null&&(t.alternate=null,Lg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[kn],delete e[uo],delete e[cc],delete e[L_],delete e[R_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Rg(t){return t.tag===5||t.tag===3||t.tag===4}function Kd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Rg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function bc(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ga));else if(i!==4&&(t=t.child,t!==null))for(bc(t,e,n),t=t.sibling;t!==null;)bc(t,e,n),t=t.sibling}function Tc(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Tc(t,e,n),t=t.sibling;t!==null;)Tc(t,e,n),t=t.sibling}var gt=null,xn=!1;function ci(t,e,n){for(n=n.child;n!==null;)Pg(t,e,n),n=n.sibling}function Pg(t,e,n){if(zn&&typeof zn.onCommitFiberUnmount=="function")try{zn.onCommitFiberUnmount(rl,n)}catch{}switch(n.tag){case 5:Et||Yr(n,e);case 6:var i=gt,r=xn;gt=null,ci(t,e,n),gt=i,xn=r,gt!==null&&(xn?(t=gt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):gt.removeChild(n.stateNode));break;case 18:gt!==null&&(xn?(t=gt,n=n.stateNode,t.nodeType===8?Xl(t.parentNode,n):t.nodeType===1&&Xl(t,n),ro(t)):Xl(gt,n.stateNode));break;case 4:i=gt,r=xn,gt=n.stateNode.containerInfo,xn=!0,ci(t,e,n),gt=i,xn=r;break;case 0:case 11:case 14:case 15:if(!Et&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&wc(n,e,o),r=r.next}while(r!==i)}ci(t,e,n);break;case 1:if(!Et&&(Yr(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Je(n,e,a)}ci(t,e,n);break;case 21:ci(t,e,n);break;case 22:n.mode&1?(Et=(i=Et)||n.memoizedState!==null,ci(t,e,n),Et=i):ci(t,e,n);break;default:ci(t,e,n)}}function Zd(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new $_),e.forEach(function(i){var r=nx.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function dn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:gt=a.stateNode,xn=!1;break e;case 3:gt=a.stateNode.containerInfo,xn=!0;break e;case 4:gt=a.stateNode.containerInfo,xn=!0;break e}a=a.return}if(gt===null)throw Error(Z(160));Pg(s,o,r),gt=null,xn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Je(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Dg(e,t),e=e.sibling}function Dg(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(dn(e,t),Pn(t),i&4){try{Ks(3,t,t.return),dl(3,t)}catch(p){Je(t,t.return,p)}try{Ks(5,t,t.return)}catch(p){Je(t,t.return,p)}}break;case 1:dn(e,t),Pn(t),i&512&&n!==null&&Yr(n,n.return);break;case 5:if(dn(e,t),Pn(t),i&512&&n!==null&&Yr(n,n.return),t.flags&32){var r=t.stateNode;try{eo(r,"")}catch(p){Je(t,t.return,p)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Jp(r,s),Ku(a,o);var u=Ku(a,s);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?rm(r,f):c==="dangerouslySetInnerHTML"?nm(r,f):c==="children"?eo(r,f):Qc(r,c,f,u)}switch(a){case"input":ju(r,s);break;case"textarea":em(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Qr(r,!!s.multiple,g,!1):d!==!!s.multiple&&(s.defaultValue!=null?Qr(r,!!s.multiple,s.defaultValue,!0):Qr(r,!!s.multiple,s.multiple?[]:"",!1))}r[uo]=s}catch(p){Je(t,t.return,p)}}break;case 6:if(dn(e,t),Pn(t),i&4){if(t.stateNode===null)throw Error(Z(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(p){Je(t,t.return,p)}}break;case 3:if(dn(e,t),Pn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ro(e.containerInfo)}catch(p){Je(t,t.return,p)}break;case 4:dn(e,t),Pn(t);break;case 13:dn(e,t),Pn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Df=nt())),i&4&&Zd(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Et=(u=Et)||c,dn(e,t),Et=u):dn(e,t),Pn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&(t.mode&1)!==0)for(ue=t,c=t.child;c!==null;){for(f=ue=c;ue!==null;){switch(d=ue,g=d.child,d.tag){case 0:case 11:case 14:case 15:Ks(4,d,d.return);break;case 1:Yr(d,d.return);var _=d.stateNode;if(typeof _.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(p){Je(i,n,p)}}break;case 5:Yr(d,d.return);break;case 22:if(d.memoizedState!==null){Jd(f);continue}}g!==null?(g.return=d,ue=g):Jd(f)}c=c.sibling}e:for(c=null,f=t;;){if(f.tag===5){if(c===null){c=f;try{r=f.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=im("display",o))}catch(p){Je(t,t.return,p)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(p){Je(t,t.return,p)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:dn(e,t),Pn(t),i&4&&Zd(t);break;case 21:break;default:dn(e,t),Pn(t)}}function Pn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Rg(n)){var i=n;break e}n=n.return}throw Error(Z(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(eo(r,""),i.flags&=-33);var s=Kd(t);Tc(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Kd(t);bc(t,a,o);break;default:throw Error(Z(161))}}catch(l){Je(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function q_(t,e,n){ue=t,Ig(t)}function Ig(t,e,n){for(var i=(t.mode&1)!==0;ue!==null;){var r=ue,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Wo;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Et;a=Wo;var u=Et;if(Wo=o,(Et=l)&&!u)for(ue=r;ue!==null;)o=ue,l=o.child,o.tag===22&&o.memoizedState!==null?eh(r):l!==null?(l.return=o,ue=l):eh(r);for(;s!==null;)ue=s,Ig(s),s=s.sibling;ue=r,Wo=a,Et=u}Qd(t)}else(r.subtreeFlags&8772)!==0&&s!==null?(s.return=r,ue=s):Qd(t)}}function Qd(t){for(;ue!==null;){var e=ue;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:Et||dl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Et)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:_n(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Nd(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Nd(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&ro(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Z(163))}Et||e.flags&512&&Ec(e)}catch(d){Je(e,e.return,d)}}if(e===t){ue=null;break}if(n=e.sibling,n!==null){n.return=e.return,ue=n;break}ue=e.return}}function Jd(t){for(;ue!==null;){var e=ue;if(e===t){ue=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ue=n;break}ue=e.return}}function eh(t){for(;ue!==null;){var e=ue;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{dl(4,e)}catch(l){Je(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Je(e,r,l)}}var s=e.return;try{Ec(e)}catch(l){Je(e,s,l)}break;case 5:var o=e.return;try{Ec(e)}catch(l){Je(e,o,l)}}}catch(l){Je(e,e.return,l)}if(e===t){ue=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ue=a;break}ue=e.return}}var Y_=Math.ceil,Qa=ai.ReactCurrentDispatcher,Rf=ai.ReactCurrentOwner,un=ai.ReactCurrentBatchConfig,De=0,ht=null,st=null,vt=0,jt=0,Kr=zi(0),ut=0,go=null,cr=0,hl=0,Pf=0,Zs=null,kt=null,Df=0,ds=1/0,Xn=null,Ja=!1,Cc=null,Li=null,jo=!1,wi=null,el=0,Qs=0,Ac=null,Aa=-1,La=0;function Lt(){return(De&6)!==0?nt():Aa!==-1?Aa:Aa=nt()}function Ri(t){return(t.mode&1)===0?1:(De&2)!==0&&vt!==0?vt&-vt:D_.transition!==null?(La===0&&(La=gm()),La):(t=Oe,t!==0||(t=window.event,t=t===void 0?16:wm(t.type)),t)}function En(t,e,n,i){if(50<Qs)throw Qs=0,Ac=null,Error(Z(185));So(t,n,i),((De&2)===0||t!==ht)&&(t===ht&&((De&2)===0&&(hl|=n),ut===4&&Si(t,vt)),Bt(t,i),n===1&&De===0&&(e.mode&1)===0&&(ds=nt()+500,ul&&Oi()))}function Bt(t,e){var n=t.callbackNode;D0(t,e);var i=za(t,t===ht?vt:0);if(i===0)n!==null&&ud(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&ud(n),e===1)t.tag===0?P_(th.bind(null,t)):Vm(th.bind(null,t)),C_(function(){(De&6)===0&&Oi()}),n=null;else{switch(vm(i)){case 1:n=rf;break;case 4:n=pm;break;case 16:n=Fa;break;case 536870912:n=mm;break;default:n=Fa}n=Gg(n,kg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function kg(t,e){if(Aa=-1,La=0,(De&6)!==0)throw Error(Z(327));var n=t.callbackNode;if(is()&&t.callbackNode!==n)return null;var i=za(t,t===ht?vt:0);if(i===0)return null;if((i&30)!==0||(i&t.expiredLanes)!==0||e)e=tl(t,i);else{e=i;var r=De;De|=2;var s=Fg();(ht!==t||vt!==e)&&(Xn=null,ds=nt()+500,nr(t,e));do try{Q_();break}catch(a){Ng(t,a)}while(1);vf(),Qa.current=s,De=r,st!==null?e=0:(ht=null,vt=0,e=ut)}if(e!==0){if(e===2&&(r=tc(t),r!==0&&(i=r,e=Lc(t,r))),e===1)throw n=go,nr(t,0),Si(t,i),Bt(t,nt()),n;if(e===6)Si(t,i);else{if(r=t.current.alternate,(i&30)===0&&!K_(r)&&(e=tl(t,i),e===2&&(s=tc(t),s!==0&&(i=s,e=Lc(t,s))),e===1))throw n=go,nr(t,0),Si(t,i),Bt(t,nt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(Z(345));case 2:ji(t,kt,Xn);break;case 3:if(Si(t,i),(i&130023424)===i&&(e=Df+500-nt(),10<e)){if(za(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Lt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=uc(ji.bind(null,t,kt,Xn),e);break}ji(t,kt,Xn);break;case 4:if(Si(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-wn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=nt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Y_(i/1960))-i,10<i){t.timeoutHandle=uc(ji.bind(null,t,kt,Xn),i);break}ji(t,kt,Xn);break;case 5:ji(t,kt,Xn);break;default:throw Error(Z(329))}}}return Bt(t,nt()),t.callbackNode===n?kg.bind(null,t):null}function Lc(t,e){var n=Zs;return t.current.memoizedState.isDehydrated&&(nr(t,e).flags|=256),t=tl(t,e),t!==2&&(e=kt,kt=n,e!==null&&Rc(e)),t}function Rc(t){kt===null?kt=t:kt.push.apply(kt,t)}function K_(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Tn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Si(t,e){for(e&=~Pf,e&=~hl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-wn(e),i=1<<n;t[n]=-1,e&=~i}}function th(t){if((De&6)!==0)throw Error(Z(327));is();var e=za(t,0);if((e&1)===0)return Bt(t,nt()),null;var n=tl(t,e);if(t.tag!==0&&n===2){var i=tc(t);i!==0&&(e=i,n=Lc(t,i))}if(n===1)throw n=go,nr(t,0),Si(t,e),Bt(t,nt()),n;if(n===6)throw Error(Z(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ji(t,kt,Xn),Bt(t,nt()),null}function If(t,e){var n=De;De|=1;try{return t(e)}finally{De=n,De===0&&(ds=nt()+500,ul&&Oi())}}function fr(t){wi!==null&&wi.tag===0&&(De&6)===0&&is();var e=De;De|=1;var n=un.transition,i=Oe;try{if(un.transition=null,Oe=1,t)return t()}finally{Oe=i,un.transition=n,De=e,(De&6)===0&&Oi()}}function kf(){jt=Kr.current,je(Kr)}function nr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,T_(n)),st!==null)for(n=st.return;n!==null;){var i=n;switch(pf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Va();break;case 3:cs(),je(Ot),je(bt),wf();break;case 5:Mf(i);break;case 4:cs();break;case 13:je(Xe);break;case 19:je(Xe);break;case 10:_f(i.type._context);break;case 22:case 23:kf()}n=n.return}if(ht=t,st=t=Pi(t.current,null),vt=jt=e,ut=0,go=null,Pf=hl=cr=0,kt=Zs=null,Zi!==null){for(e=0;e<Zi.length;e++)if(n=Zi[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Zi=null}return t}function Ng(t,e){do{var n=st;try{if(vf(),ba.current=Za,Ka){for(var i=qe.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ka=!1}if(ur=0,dt=lt=qe=null,Ys=!1,ho=0,Rf.current=null,n===null||n.return===null){ut=1,go=e,st=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=vt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if((c.mode&1)===0&&(f===0||f===11||f===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=Vd(o);if(g!==null){g.flags&=-257,Hd(g,o,a,s,e),g.mode&1&&Gd(s,u,e),e=g,l=u;var _=e.updateQueue;if(_===null){var p=new Set;p.add(l),e.updateQueue=p}else _.add(l);break e}else{if((e&1)===0){Gd(s,u,e),Nf();break e}l=Error(Z(426))}}else if($e&&a.mode&1){var h=Vd(o);if(h!==null){(h.flags&65536)===0&&(h.flags|=256),Hd(h,o,a,s,e),mf(fs(l,a));break e}}s=l=fs(l,a),ut!==4&&(ut=2),Zs===null?Zs=[s]:Zs.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=_g(s,l,e);kd(s,m);break e;case 1:a=l;var v=s.type,y=s.stateNode;if((s.flags&128)===0&&(typeof v.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Li===null||!Li.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=xg(s,a,e);kd(s,S);break e}}s=s.return}while(s!==null)}Og(n)}catch(M){e=M,st===n&&n!==null&&(st=n=n.return);continue}break}while(1)}function Fg(){var t=Qa.current;return Qa.current=Za,t===null?Za:t}function Nf(){(ut===0||ut===3||ut===2)&&(ut=4),ht===null||(cr&268435455)===0&&(hl&268435455)===0||Si(ht,vt)}function tl(t,e){var n=De;De|=2;var i=Fg();(ht!==t||vt!==e)&&(Xn=null,nr(t,e));do try{Z_();break}catch(r){Ng(t,r)}while(1);if(vf(),De=n,Qa.current=i,st!==null)throw Error(Z(261));return ht=null,vt=0,ut}function Z_(){for(;st!==null;)zg(st)}function Q_(){for(;st!==null&&!w0();)zg(st)}function zg(t){var e=Bg(t.alternate,t,jt);t.memoizedProps=t.pendingProps,e===null?Og(t):st=e,Rf.current=null}function Og(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=W_(n,e,jt),n!==null){st=n;return}}else{if(n=j_(n,e),n!==null){n.flags&=32767,st=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ut=6,st=null;return}}if(e=e.sibling,e!==null){st=e;return}st=e=t}while(e!==null);ut===0&&(ut=5)}function ji(t,e,n){var i=Oe,r=un.transition;try{un.transition=null,Oe=1,J_(t,e,n,i)}finally{un.transition=r,Oe=i}return null}function J_(t,e,n,i){do is();while(wi!==null);if((De&6)!==0)throw Error(Z(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(Z(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(I0(t,s),t===ht&&(st=ht=null,vt=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||jo||(jo=!0,Gg(Fa,function(){return is(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=un.transition,un.transition=null;var o=Oe;Oe=1;var a=De;De|=4,Rf.current=null,X_(t,n),Dg(n,t),x_(ac),Oa=!!oc,ac=oc=null,t.current=n,q_(n),E0(),De=a,Oe=o,un.transition=s}else t.current=n;if(jo&&(jo=!1,wi=t,el=r),s=t.pendingLanes,s===0&&(Li=null),C0(n.stateNode),Bt(t,nt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Ja)throw Ja=!1,t=Cc,Cc=null,t;return(el&1)!==0&&t.tag!==0&&is(),s=t.pendingLanes,(s&1)!==0?t===Ac?Qs++:(Qs=0,Ac=t):Qs=0,Oi(),null}function is(){if(wi!==null){var t=vm(el),e=un.transition,n=Oe;try{if(un.transition=null,Oe=16>t?16:t,wi===null)var i=!1;else{if(t=wi,wi=null,el=0,(De&6)!==0)throw Error(Z(331));var r=De;for(De|=4,ue=t.current;ue!==null;){var s=ue,o=s.child;if((ue.flags&16)!==0){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(ue=u;ue!==null;){var c=ue;switch(c.tag){case 0:case 11:case 15:Ks(8,c,s)}var f=c.child;if(f!==null)f.return=c,ue=f;else for(;ue!==null;){c=ue;var d=c.sibling,g=c.return;if(Lg(c),c===u){ue=null;break}if(d!==null){d.return=g,ue=d;break}ue=g}}}var _=s.alternate;if(_!==null){var p=_.child;if(p!==null){_.child=null;do{var h=p.sibling;p.sibling=null,p=h}while(p!==null)}}ue=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,ue=o;else e:for(;ue!==null;){if(s=ue,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:Ks(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,ue=m;break e}ue=s.return}}var v=t.current;for(ue=v;ue!==null;){o=ue;var y=o.child;if((o.subtreeFlags&2064)!==0&&y!==null)y.return=o,ue=y;else e:for(o=v;ue!==null;){if(a=ue,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:dl(9,a)}}catch(M){Je(a,a.return,M)}if(a===o){ue=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,ue=S;break e}ue=a.return}}if(De=r,Oi(),zn&&typeof zn.onPostCommitFiberRoot=="function")try{zn.onPostCommitFiberRoot(rl,t)}catch{}i=!0}return i}finally{Oe=n,un.transition=e}}return!1}function nh(t,e,n){e=fs(n,e),e=_g(t,e,1),t=Ai(t,e,1),e=Lt(),t!==null&&(So(t,1,e),Bt(t,e))}function Je(t,e,n){if(t.tag===3)nh(t,t,n);else for(;e!==null;){if(e.tag===3){nh(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Li===null||!Li.has(i))){t=fs(n,t),t=xg(e,t,1),e=Ai(e,t,1),t=Lt(),e!==null&&(So(e,1,t),Bt(e,t));break}}e=e.return}}function ex(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Lt(),t.pingedLanes|=t.suspendedLanes&n,ht===t&&(vt&n)===n&&(ut===4||ut===3&&(vt&130023424)===vt&&500>nt()-Df?nr(t,0):Pf|=n),Bt(t,e)}function Ug(t,e){e===0&&((t.mode&1)===0?e=1:(e=No,No<<=1,(No&130023424)===0&&(No=4194304)));var n=Lt();t=ri(t,e),t!==null&&(So(t,e,n),Bt(t,n))}function tx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Ug(t,n)}function nx(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(Z(314))}i!==null&&i.delete(e),Ug(t,n)}var Bg;Bg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ot.current)zt=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return zt=!1,H_(t,e,n);zt=(t.flags&131072)!==0}else zt=!1,$e&&(e.flags&1048576)!==0&&Hm(e,ja,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ca(t,e),t=e.pendingProps;var r=as(e,bt.current);ns(e,n),r=bf(null,e,i,t,r,n);var s=Tf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ut(i)?(s=!0,Ha(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,yf(e),r.updater=cl,e.stateNode=r,r._reactInternals=e,gc(e,i,t,n),e=xc(null,e,i,!0,s,n)):(e.tag=0,$e&&s&&hf(e),At(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ca(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=rx(i),t=_n(i,t),r){case 0:e=_c(null,e,i,t,n);break e;case 1:e=$d(null,e,i,t,n);break e;case 11:e=Wd(null,e,i,t,n);break e;case 14:e=jd(null,e,i,_n(i.type,t),n);break e}throw Error(Z(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:_n(i,r),_c(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:_n(i,r),$d(t,e,i,r,n);case 3:e:{if(wg(e),t===null)throw Error(Z(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Xm(t,e),qa(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=fs(Error(Z(423)),e),e=Xd(t,e,i,n,r);break e}else if(i!==r){r=fs(Error(Z(424)),e),e=Xd(t,e,i,n,r);break e}else for(qt=Ci(e.stateNode.containerInfo.firstChild),Yt=e,$e=!0,yn=null,n=Zm(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ls(),i===r){e=si(t,e,n);break e}At(t,e,i,n)}e=e.child}return e;case 5:return Qm(e),t===null&&hc(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,lc(i,r)?o=null:s!==null&&lc(i,s)&&(e.flags|=32),Mg(t,e),At(t,e,o,n),e.child;case 6:return t===null&&hc(e),null;case 13:return Eg(t,e,n);case 4:return Sf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=us(e,null,i,n):At(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:_n(i,r),Wd(t,e,i,r,n);case 7:return At(t,e,e.pendingProps,n),e.child;case 8:return At(t,e,e.pendingProps.children,n),e.child;case 12:return At(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,He($a,i._currentValue),i._currentValue=o,s!==null)if(Tn(s.value,o)){if(s.children===r.children&&!Ot.current){e=si(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=ei(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),pc(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(Z(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),pc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}At(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ns(e,n),r=cn(r),i=i(r),e.flags|=1,At(t,e,i,n),e.child;case 14:return i=e.type,r=_n(i,e.pendingProps),r=_n(i.type,r),jd(t,e,i,r,n);case 15:return yg(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:_n(i,r),Ca(t,e),e.tag=1,Ut(i)?(t=!0,Ha(e)):t=!1,ns(e,n),Ym(e,i,r),gc(e,i,r,n),xc(null,e,i,!0,t,n);case 19:return bg(t,e,n);case 22:return Sg(t,e,n)}throw Error(Z(156,e.tag))};function Gg(t,e){return hm(t,e)}function ix(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function on(t,e,n,i){return new ix(t,e,n,i)}function Ff(t){return t=t.prototype,!(!t||!t.isReactComponent)}function rx(t){if(typeof t=="function")return Ff(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ef)return 11;if(t===tf)return 14}return 2}function Pi(t,e){var n=t.alternate;return n===null?(n=on(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ra(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Ff(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Br:return ir(n.children,r,s,e);case Jc:o=8,r|=8;break;case Bu:return t=on(12,n,e,r|2),t.elementType=Bu,t.lanes=s,t;case Gu:return t=on(13,n,e,r),t.elementType=Gu,t.lanes=s,t;case Vu:return t=on(19,n,e,r),t.elementType=Vu,t.lanes=s,t;case Kp:return pl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case qp:o=10;break e;case Yp:o=9;break e;case ef:o=11;break e;case tf:o=14;break e;case _i:o=16,i=null;break e}throw Error(Z(130,t==null?t:typeof t,""))}return e=on(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function ir(t,e,n,i){return t=on(7,t,i,e),t.lanes=n,t}function pl(t,e,n,i){return t=on(22,t,i,e),t.elementType=Kp,t.lanes=n,t.stateNode={isHidden:!1},t}function tu(t,e,n){return t=on(6,t,null,e),t.lanes=n,t}function nu(t,e,n){return e=on(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function sx(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fl(0),this.expirationTimes=Fl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fl(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function zf(t,e,n,i,r,s,o,a,l){return t=new sx(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=on(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},yf(s),t}function ox(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ur,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Vg(t){if(!t)return ki;t=t._reactInternals;e:{if(gr(t)!==t||t.tag!==1)throw Error(Z(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ut(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(Z(171))}if(t.tag===1){var n=t.type;if(Ut(n))return Gm(t,n,e)}return e}function Hg(t,e,n,i,r,s,o,a,l){return t=zf(n,i,!0,t,r,s,o,a,l),t.context=Vg(null),n=t.current,i=Lt(),r=Ri(n),s=ei(i,r),s.callback=e!=null?e:null,Ai(n,s,r),t.current.lanes=r,So(t,r,i),Bt(t,i),t}function ml(t,e,n,i){var r=e.current,s=Lt(),o=Ri(r);return n=Vg(n),e.context===null?e.context=n:e.pendingContext=n,e=ei(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Ai(r,e,o),t!==null&&(En(t,r,o,s),Ea(t,r,o)),o}function nl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ih(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Of(t,e){ih(t,e),(t=t.alternate)&&ih(t,e)}function ax(){return null}var Wg=typeof reportError=="function"?reportError:function(t){console.error(t)};function Uf(t){this._internalRoot=t}gl.prototype.render=Uf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(Z(409));ml(t,e,null,null)};gl.prototype.unmount=Uf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;fr(function(){ml(null,t,null,null)}),e[ii]=null}};function gl(t){this._internalRoot=t}gl.prototype.unstable_scheduleHydration=function(t){if(t){var e=ym();t={blockedOn:null,target:t,priority:e};for(var n=0;n<yi.length&&e!==0&&e<yi[n].priority;n++);yi.splice(n,0,t),n===0&&Mm(t)}};function Bf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function vl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function rh(){}function lx(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=nl(o);s.call(u)}}var o=Hg(e,i,t,0,null,!1,!1,"",rh);return t._reactRootContainer=o,t[ii]=o.current,ao(t.nodeType===8?t.parentNode:t),fr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=nl(l);a.call(u)}}var l=zf(t,0,!1,null,null,!1,!1,"",rh);return t._reactRootContainer=l,t[ii]=l.current,ao(t.nodeType===8?t.parentNode:t),fr(function(){ml(e,l,n,i)}),l}function _l(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=nl(o);a.call(l)}}ml(e,o,t,r)}else o=lx(n,e,t,r,i);return nl(o)}_m=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Bs(e.pendingLanes);n!==0&&(sf(e,n|1),Bt(e,nt()),(De&6)===0&&(ds=nt()+500,Oi()))}break;case 13:fr(function(){var i=ri(t,1);if(i!==null){var r=Lt();En(i,t,1,r)}}),Of(t,1)}};of=function(t){if(t.tag===13){var e=ri(t,134217728);if(e!==null){var n=Lt();En(e,t,134217728,n)}Of(t,134217728)}};xm=function(t){if(t.tag===13){var e=Ri(t),n=ri(t,e);if(n!==null){var i=Lt();En(n,t,e,i)}Of(t,e)}};ym=function(){return Oe};Sm=function(t,e){var n=Oe;try{return Oe=t,e()}finally{Oe=n}};Qu=function(t,e,n){switch(e){case"input":if(ju(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=ll(i);if(!r)throw Error(Z(90));Qp(i),ju(i,r)}}}break;case"textarea":em(t,n);break;case"select":e=n.value,e!=null&&Qr(t,!!n.multiple,e,!1)}};am=If;lm=fr;var ux={usingClientEntryPoint:!1,Events:[wo,Wr,ll,sm,om,If]},ks={findFiberByHostInstance:Ki,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},cx={bundleType:ks.bundleType,version:ks.version,rendererPackageName:ks.rendererPackageName,rendererConfig:ks.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ai.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=fm(t),t===null?null:t.stateNode},findFiberByHostInstance:ks.findFiberByHostInstance||ax,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $o=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$o.isDisabled&&$o.supportsFiber)try{rl=$o.inject(cx),zn=$o}catch{}}Qt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ux;Qt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bf(e))throw Error(Z(200));return ox(t,e,null,n)};Qt.createRoot=function(t,e){if(!Bf(t))throw Error(Z(299));var n=!1,i="",r=Wg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=zf(t,1,!1,null,null,n,!1,i,r),t[ii]=e.current,ao(t.nodeType===8?t.parentNode:t),new Uf(e)};Qt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(Z(188)):(t=Object.keys(t).join(","),Error(Z(268,t)));return t=fm(e),t=t===null?null:t.stateNode,t};Qt.flushSync=function(t){return fr(t)};Qt.hydrate=function(t,e,n){if(!vl(e))throw Error(Z(200));return _l(null,t,e,!0,n)};Qt.hydrateRoot=function(t,e,n){if(!Bf(t))throw Error(Z(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Wg;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Hg(e,null,t,1,n!=null?n:null,r,!1,s,o),t[ii]=e.current,ao(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new gl(e)};Qt.render=function(t,e,n){if(!vl(e))throw Error(Z(200));return _l(null,t,e,!1,n)};Qt.unmountComponentAtNode=function(t){if(!vl(t))throw Error(Z(40));return t._reactRootContainer?(fr(function(){_l(null,null,t,!1,function(){t._reactRootContainer=null,t[ii]=null})}),!0):!1};Qt.unstable_batchedUpdates=If;Qt.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!vl(n))throw Error(Z(200));if(t==null||t._reactInternals===void 0)throw Error(Z(38));return _l(t,e,n,!1,i)};Qt.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=Qt})(Hp);var sh=Hp.exports;Ou.createRoot=sh.createRoot,Ou.hydrateRoot=sh.hydrateRoot;const fx={bounds:[141,34,154,34]},jg={bounds:[1308,120,492,58]},$g={bounds:[1337,429,59,28]},Xg={bounds:[1335,274,214,26]},qg={bounds:[1358,482,302,141]};var dx={exports:{}};(function(t){var e=function(n){var i=Object.prototype,r=i.hasOwnProperty,s,o=typeof Symbol=="function"?Symbol:{},a=o.iterator||"@@iterator",l=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(C,b,P){return Object.defineProperty(C,b,{value:P,enumerable:!0,configurable:!0,writable:!0}),C[b]}try{c({},"")}catch{c=function(b,P,z){return b[P]=z}}function f(C,b,P,z){var F=b&&b.prototype instanceof v?b:v,X=Object.create(F.prototype),te=new q(z||[]);return X._invoke=N(C,P,te),X}n.wrap=f;function d(C,b,P){try{return{type:"normal",arg:C.call(b,P)}}catch(z){return{type:"throw",arg:z}}}var g="suspendedStart",_="suspendedYield",p="executing",h="completed",m={};function v(){}function y(){}function S(){}var M={};c(M,a,function(){return this});var T=Object.getPrototypeOf,A=T&&T(T(V([])));A&&A!==i&&r.call(A,a)&&(M=A);var x=S.prototype=v.prototype=Object.create(M);y.prototype=S,c(x,"constructor",S),c(S,"constructor",y),y.displayName=c(S,u,"GeneratorFunction");function L(C){["next","throw","return"].forEach(function(b){c(C,b,function(P){return this._invoke(b,P)})})}n.isGeneratorFunction=function(C){var b=typeof C=="function"&&C.constructor;return b?b===y||(b.displayName||b.name)==="GeneratorFunction":!1},n.mark=function(C){return Object.setPrototypeOf?Object.setPrototypeOf(C,S):(C.__proto__=S,c(C,u,"GeneratorFunction")),C.prototype=Object.create(x),C},n.awrap=function(C){return{__await:C}};function D(C,b){function P(X,te,fe,G){var me=d(C[X],C,te);if(me.type==="throw")G(me.arg);else{var ge=me.arg,ve=ge.value;return ve&&typeof ve=="object"&&r.call(ve,"__await")?b.resolve(ve.__await).then(function(re){P("next",re,fe,G)},function(re){P("throw",re,fe,G)}):b.resolve(ve).then(function(re){ge.value=re,fe(ge)},function(re){return P("throw",re,fe,G)})}}var z;function F(X,te){function fe(){return new b(function(G,me){P(X,te,G,me)})}return z=z?z.then(fe,fe):fe()}this._invoke=F}L(D.prototype),c(D.prototype,l,function(){return this}),n.AsyncIterator=D,n.async=function(C,b,P,z,F){F===void 0&&(F=Promise);var X=new D(f(C,b,P,z),F);return n.isGeneratorFunction(b)?X:X.next().then(function(te){return te.done?te.value:X.next()})};function N(C,b,P){var z=g;return function(X,te){if(z===p)throw new Error("Generator is already running");if(z===h){if(X==="throw")throw te;return K()}for(P.method=X,P.arg=te;;){var fe=P.delegate;if(fe){var G=Q(fe,P);if(G){if(G===m)continue;return G}}if(P.method==="next")P.sent=P._sent=P.arg;else if(P.method==="throw"){if(z===g)throw z=h,P.arg;P.dispatchException(P.arg)}else P.method==="return"&&P.abrupt("return",P.arg);z=p;var me=d(C,b,P);if(me.type==="normal"){if(z=P.done?h:_,me.arg===m)continue;return{value:me.arg,done:P.done}}else me.type==="throw"&&(z=h,P.method="throw",P.arg=me.arg)}}}function Q(C,b){var P=C.iterator[b.method];if(P===s){if(b.delegate=null,b.method==="throw"){if(C.iterator.return&&(b.method="return",b.arg=s,Q(C,b),b.method==="throw"))return m;b.method="throw",b.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var z=d(P,C.iterator,b.arg);if(z.type==="throw")return b.method="throw",b.arg=z.arg,b.delegate=null,m;var F=z.arg;if(!F)return b.method="throw",b.arg=new TypeError("iterator result is not an object"),b.delegate=null,m;if(F.done)b[C.resultName]=F.value,b.next=C.nextLoc,b.method!=="return"&&(b.method="next",b.arg=s);else return F;return b.delegate=null,m}L(x),c(x,u,"Generator"),c(x,a,function(){return this}),c(x,"toString",function(){return"[object Generator]"});function J(C){var b={tryLoc:C[0]};1 in C&&(b.catchLoc=C[1]),2 in C&&(b.finallyLoc=C[2],b.afterLoc=C[3]),this.tryEntries.push(b)}function k(C){var b=C.completion||{};b.type="normal",delete b.arg,C.completion=b}function q(C){this.tryEntries=[{tryLoc:"root"}],C.forEach(J,this),this.reset(!0)}n.keys=function(C){var b=[];for(var P in C)b.push(P);return b.reverse(),function z(){for(;b.length;){var F=b.pop();if(F in C)return z.value=F,z.done=!1,z}return z.done=!0,z}};function V(C){if(C){var b=C[a];if(b)return b.call(C);if(typeof C.next=="function")return C;if(!isNaN(C.length)){var P=-1,z=function F(){for(;++P<C.length;)if(r.call(C,P))return F.value=C[P],F.done=!1,F;return F.value=s,F.done=!0,F};return z.next=z}}return{next:K}}n.values=V;function K(){return{value:s,done:!0}}return q.prototype={constructor:q,reset:function(C){if(this.prev=0,this.next=0,this.sent=this._sent=s,this.done=!1,this.delegate=null,this.method="next",this.arg=s,this.tryEntries.forEach(k),!C)for(var b in this)b.charAt(0)==="t"&&r.call(this,b)&&!isNaN(+b.slice(1))&&(this[b]=s)},stop:function(){this.done=!0;var C=this.tryEntries[0],b=C.completion;if(b.type==="throw")throw b.arg;return this.rval},dispatchException:function(C){if(this.done)throw C;var b=this;function P(G,me){return X.type="throw",X.arg=C,b.next=G,me&&(b.method="next",b.arg=s),!!me}for(var z=this.tryEntries.length-1;z>=0;--z){var F=this.tryEntries[z],X=F.completion;if(F.tryLoc==="root")return P("end");if(F.tryLoc<=this.prev){var te=r.call(F,"catchLoc"),fe=r.call(F,"finallyLoc");if(te&&fe){if(this.prev<F.catchLoc)return P(F.catchLoc,!0);if(this.prev<F.finallyLoc)return P(F.finallyLoc)}else if(te){if(this.prev<F.catchLoc)return P(F.catchLoc,!0)}else if(fe){if(this.prev<F.finallyLoc)return P(F.finallyLoc)}else throw new Error("try statement without catch or finally")}}},abrupt:function(C,b){for(var P=this.tryEntries.length-1;P>=0;--P){var z=this.tryEntries[P];if(z.tryLoc<=this.prev&&r.call(z,"finallyLoc")&&this.prev<z.finallyLoc){var F=z;break}}F&&(C==="break"||C==="continue")&&F.tryLoc<=b&&b<=F.finallyLoc&&(F=null);var X=F?F.completion:{};return X.type=C,X.arg=b,F?(this.method="next",this.next=F.finallyLoc,m):this.complete(X)},complete:function(C,b){if(C.type==="throw")throw C.arg;return C.type==="break"||C.type==="continue"?this.next=C.arg:C.type==="return"?(this.rval=this.arg=C.arg,this.method="return",this.next="end"):C.type==="normal"&&b&&(this.next=b),m},finish:function(C){for(var b=this.tryEntries.length-1;b>=0;--b){var P=this.tryEntries[b];if(P.finallyLoc===C)return this.complete(P.completion,P.afterLoc),k(P),m}},catch:function(C){for(var b=this.tryEntries.length-1;b>=0;--b){var P=this.tryEntries[b];if(P.tryLoc===C){var z=P.completion;if(z.type==="throw"){var F=z.arg;k(P)}return F}}throw new Error("illegal catch attempt")},delegateYield:function(C,b,P){return this.delegate={iterator:V(C),resultName:b,nextLoc:P},this.method==="next"&&(this.arg=s),m}},n}(t.exports);try{regeneratorRuntime=e}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}})(dx);var Gf=(t,e)=>`${t}-${e}-${Math.random().toString(16).slice(3,8)}`;const hx=Gf;let oh=0;var Yg=({id:t,action:e,payload:n={}})=>{let i=t;return typeof i>"u"&&(i=hx("Job",oh),oh+=1),{id:i,action:e,payload:n}},Ms={};let Vf=!1;Ms.logging=Vf;Ms.setLogging=t=>{Vf=t};Ms.log=(...t)=>Vf?console.log.apply(globalThis,t):null;const px=Yg,{log:Xo}=Ms,mx=Gf;let ah=0;var gx=()=>{const t=mx("Scheduler",ah),e={},n={};let i=[];ah+=1;const r=()=>i.length,s=()=>Object.keys(e).length,o=()=>{if(i.length!==0){const f=Object.keys(e);for(let d=0;d<f.length;d+=1)if(typeof n[f[d]]>"u"){i[0](e[f[d]]);break}}},a=(f,d)=>new Promise((g,_)=>{const p=px({action:f,payload:d});i.push(async h=>{i.shift(),n[h.id]=p;try{g(await h[f].apply(globalThis,[...d,p.id]))}catch(m){_(m)}finally{delete n[h.id],o()}}),Xo(`[${t}]: Add ${p.id} to JobQueue`),Xo(`[${t}]: JobQueue length=${i.length}`),o()});return{addWorker:f=>(e[f.id]=f,Xo(`[${t}]: Add ${f.id}`),Xo(`[${t}]: Number of workers=${s()}`),o(),f.id),addJob:async(f,...d)=>{if(s()===0)throw Error(`[${t}]: You need to have at least one worker before adding jobs`);return a(f,d)},terminate:async()=>{Object.keys(e).forEach(async f=>{await e[f].terminate()}),i=[]},getQueueLen:r,getNumWorkers:s}};function vx(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}function _x(){return typeof window<"u"&&typeof window.process=="object"&&window.process.type==="renderer"||typeof process<"u"&&typeof process.versions=="object"&&!!process.versions.electron||typeof navigator=="object"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Electron")>=0}var xx=_x;const yx=xx;var Sx=t=>{const e={};return typeof WorkerGlobalScope<"u"?e.type="webworker":yx()?e.type="electron":typeof window=="object"?e.type="browser":typeof process=="object"&&typeof vx=="function"&&(e.type="node"),typeof t>"u"?e:e[t]},iu={exports:{}},lh;function Hf(){return lh||(lh=1,function(t,e){(function(n,i){t.exports=i()})(Wv,function(){function n(){var i=arguments.length;if(i===0)throw new Error("resolveUrl requires at least one argument; got none.");var r=document.createElement("base");if(r.href=arguments[0],i===1)return r.href;var s=document.getElementsByTagName("head")[0];s.insertBefore(r,s.firstChild);for(var o=document.createElement("a"),a,l=1;l<i;l++)o.href=arguments[l],a=o.href,r.href=a;return s.removeChild(r),a}return n})}(iu)),iu.exports}const Mx=Sx("type")==="browser",wx=Mx?Hf():t=>t;var Ex=t=>{const e={...t};return["corePath","workerPath","langPath"].forEach(n=>{t[n]&&(e[n]=wx(e[n]))}),e},bx=t=>{const e=[],n=[],i=[],r=[],s=[];return t.blocks.forEach(o=>{o.paragraphs.forEach(a=>{a.lines.forEach(l=>{l.words.forEach(u=>{u.symbols.forEach(c=>{s.push({...c,page:t,block:o,paragraph:a,line:l,word:u})}),r.push({...u,page:t,block:o,paragraph:a,line:l})}),i.push({...l,page:t,block:o,paragraph:a})}),n.push({...a,page:t,block:o})}),e.push({...o,page:t})}),{...t,blocks:e,paragraphs:n,lines:i,words:r,symbols:s}},Kg={TESSERACT_ONLY:0,LSTM_ONLY:1,TESSERACT_LSTM_COMBINED:2,DEFAULT:3};const Tx=Kg;var Cx={defaultOEM:Tx.DEFAULT};const Ax="tesseract.js",Lx="3.0.2",Rx="Pure Javascript Multilingual OCR",Px="src/index.js",Dx="src/index.d.ts",Ix="dist/tesseract.min.js",kx="dist/tesseract.min.js",Nx={start:"node scripts/server.js",build:"rimraf dist && webpack --config scripts/webpack.config.prod.js","profile:tesseract":"webpack-bundle-analyzer dist/tesseract-stats.json","profile:worker":"webpack-bundle-analyzer dist/worker-stats.json",prepublishOnly:"npm run build",wait:"rimraf dist && wait-on http://localhost:3000/dist/tesseract.dev.js",test:"npm-run-all -p -r start test:all","test:all":"npm-run-all wait test:browser:* test:node:all","test:node":"nyc mocha --exit --bail --require ./scripts/test-helper.js","test:node:all":"npm run test:node -- ./tests/*.test.js","test:browser-tpl":"mocha-headless-chrome -a incognito -a no-sandbox -a disable-setuid-sandbox -a disable-logging -t 300000","test:browser:detect":"npm run test:browser-tpl -- -f ./tests/detect.test.html","test:browser:recognize":"npm run test:browser-tpl -- -f ./tests/recognize.test.html","test:browser:scheduler":"npm run test:browser-tpl -- -f ./tests/scheduler.test.html","test:browser:FS":"npm run test:browser-tpl -- -f ./tests/FS.test.html",lint:"eslint src","lint:fix":"eslint --fix src",postinstall:"opencollective-postinstall || true"},Fx={"./src/worker/node/index.js":"./src/worker/browser/index.js"},zx="",Ox=["jeromewu"],Ux="Apache-2.0",Bx={"@babel/core":"^7.18.7","@babel/preset-env":"^7.18.7",acorn:"^6.4.0","babel-loader":"^8.2.0",buffer:"^6.0.3",cors:"^2.8.5",eslint:"^7.2.0","eslint-config-airbnb-base":"^14.2.0","eslint-plugin-import":"^2.22.1","expect.js":"^0.3.1",express:"^4.17.1",mocha:"^8.1.3","mocha-headless-chrome":"^2.0.3","npm-run-all":"^4.1.5",nyc:"^15.1.0",rimraf:"^2.7.1","wait-on":"^3.3.0",webpack:"^5.74.0","webpack-bundle-analyzer":"^4.6.0","webpack-cli":"^4.10.0","webpack-dev-middleware":"^5.3.3"},Gx={"babel-eslint":"^10.1.0","bmp-js":"^0.1.0","file-type":"^12.4.1","idb-keyval":"^3.2.0","is-electron":"^2.2.0","is-url":"^1.2.4","node-fetch":"^2.6.0","opencollective-postinstall":"^2.0.2","regenerator-runtime":"^0.13.3","resolve-url":"^0.2.1","tesseract.js-core":"^3.0.1","wasm-feature-detect":"^1.2.11",zlibjs:"^0.3.1"},Vx={type:"git",url:"https://github.com/naptha/tesseract.js.git"},Hx={url:"https://github.com/naptha/tesseract.js/issues"},Wx="https://github.com/naptha/tesseract.js",jx={type:"opencollective",url:"https://opencollective.com/tesseractjs"},$x={name:Ax,version:Lx,description:Rx,main:Px,types:Dx,unpkg:Ix,jsdelivr:kx,scripts:Nx,browser:Fx,author:zx,contributors:Ox,license:Ux,devDependencies:Bx,dependencies:Gx,repository:Vx,bugs:Hx,homepage:Wx,collective:jx};var Xx={langPath:"https://tessdata.projectnaptha.com/4.0.0",workerBlobURL:!0,logger:()=>{}};const qx=Hf(),{version:Yx}=$x,Kx=Xx;var Zx={...Kx,workerPath:typeof process<"u"&&process.env.TESS_ENV==="development"?qx(`/dist/worker.dev.js?nocache=${Math.random().toString(36).slice(3)}`):`https://unpkg.com/tesseract.js@v${Yx}/dist/worker.min.js`,corePath:null},Qx=({workerPath:t,workerBlobURL:e})=>{let n;if(Blob&&URL&&e){const i=new Blob([`importScripts("${t}");`],{type:"application/javascript"});n=new Worker(URL.createObjectURL(i))}else n=new Worker(t);return n},Jx=t=>{t.terminate()},ey=(t,e)=>{t.onmessage=({data:n})=>{e(n)}},ty=async(t,e)=>{t.postMessage(e)};const ny=Hf(),uh=t=>new Promise((e,n)=>{const i=new FileReader;i.onload=()=>{e(i.result)},i.onerror=({target:{error:{code:r}}})=>{n(Error(`File could not be read! Code=${r}`))},i.readAsArrayBuffer(t)}),Pc=async t=>{let e=t;return typeof t>"u"?"undefined":(typeof t=="string"?/data:image\/([a-zA-Z]*);base64,([^"]*)/.test(t)?e=atob(t.split(",")[1]).split("").map(n=>n.charCodeAt(0)):e=await(await fetch(ny(t))).arrayBuffer():t instanceof HTMLElement?(t.tagName==="IMG"&&(e=await Pc(t.src)),t.tagName==="VIDEO"&&(e=await Pc(t.poster)),t.tagName==="CANVAS"&&await new Promise(n=>{t.toBlob(async i=>{e=await uh(i),n()})})):(t instanceof File||t instanceof Blob)&&(e=await uh(t)),new Uint8Array(e))};var iy=Pc;const ry=Zx,sy=Qx,oy=Jx,ay=ey,ly=ty,uy=iy;var cy={defaultOptions:ry,spawnWorker:sy,terminateWorker:oy,onMessage:ay,send:ly,loadImage:uy};const fy=Ex,dy=bx,hn=Yg,{log:ch}=Ms,hy=Gf,{defaultOEM:py}=Cx,{defaultOptions:my,spawnWorker:gy,terminateWorker:vy,onMessage:_y,loadImage:fh,send:xy}=cy;let dh=0;var Zg=(t={})=>{const e=hy("Worker",dh),{logger:n,errorHandler:i,...r}=fy({...my,...t}),s={},o={};let a=gy(r);dh+=1;const l=(A,x)=>{s[A]=x},u=(A,x)=>{o[A]=x},c=({id:A,action:x,payload:L})=>new Promise((D,N)=>{ch(`[${e}]: Start ${A}, action=${x}`),l(x,D),u(x,N),xy(a,{workerId:e,jobId:A,action:x,payload:L})}),f=A=>c(hn({id:A,action:"load",payload:{options:r}})),d=(A,x,L)=>c(hn({id:L,action:"FS",payload:{method:"writeFile",args:[A,x]}})),g=(A,x)=>c(hn({id:x,action:"FS",payload:{method:"readFile",args:[A,{encoding:"utf8"}]}})),_=(A,x)=>c(hn({id:x,action:"FS",payload:{method:"unlink",args:[A]}})),p=(A,x,L)=>c(hn({id:L,action:"FS",payload:{method:A,args:x}})),h=(A="eng",x)=>c(hn({id:x,action:"loadLanguage",payload:{langs:A,options:r}})),m=(A="eng",x=py,L)=>c(hn({id:L,action:"initialize",payload:{langs:A,oem:x}})),v=(A={},x)=>c(hn({id:x,action:"setParameters",payload:{params:A}})),y=async(A,x={},L)=>c(hn({id:L,action:"recognize",payload:{image:await fh(A),options:x}})),S=(A="Tesseract OCR Result",x=!1,L)=>c(hn({id:L,action:"getPDF",payload:{title:A,textonly:x}})),M=async(A,x)=>c(hn({id:x,action:"detect",payload:{image:await fh(A)}})),T=async()=>(a!==null&&(vy(a),a=null),Promise.resolve());return _y(a,({workerId:A,jobId:x,status:L,action:D,data:N})=>{if(L==="resolve"){ch(`[${A}]: Complete ${x}`);let Q=N;D==="recognize"?Q=dy(N):D==="getPDF"&&(Q=Array.from({...N,length:Object.keys(N).length})),s[D]({jobId:x,data:Q})}else if(L==="reject")if(o[D](N),i)i(N);else throw Error(N);else L==="progress"&&n({...N,userJobId:x})}),{id:e,worker:a,setResolve:l,setReject:u,load:f,writeText:d,readText:g,removeFile:_,FS:p,loadLanguage:h,initialize:m,setParameters:v,recognize:y,getPDF:S,detect:M,terminate:T}};const Qg=Zg,yy=async(t,e,n)=>{const i=Qg(n);return await i.load(),await i.loadLanguage(e),await i.initialize(e),i.recognize(t).finally(async()=>{await i.terminate()})},Sy=async(t,e)=>{const n=Qg(e);return await n.load(),await n.loadLanguage("osd"),await n.initialize("osd"),n.detect(t).finally(async()=>{await n.terminate()})};var My={recognize:yy,detect:Sy},wy={AFR:"afr",AMH:"amh",ARA:"ara",ASM:"asm",AZE:"aze",AZE_CYRL:"aze_cyrl",BEL:"bel",BEN:"ben",BOD:"bod",BOS:"bos",BUL:"bul",CAT:"cat",CEB:"ceb",CES:"ces",CHI_SIM:"chi_sim",CHI_TRA:"chi_tra",CHR:"chr",CYM:"cym",DAN:"dan",DEU:"deu",DZO:"dzo",ELL:"ell",ENG:"eng",ENM:"enm",EPO:"epo",EST:"est",EUS:"eus",FAS:"fas",FIN:"fin",FRA:"fra",FRK:"frk",FRM:"frm",GLE:"gle",GLG:"glg",GRC:"grc",GUJ:"guj",HAT:"hat",HEB:"heb",HIN:"hin",HRV:"hrv",HUN:"hun",IKU:"iku",IND:"ind",ISL:"isl",ITA:"ita",ITA_OLD:"ita_old",JAV:"jav",JPN:"jpn",KAN:"kan",KAT:"kat",KAT_OLD:"kat_old",KAZ:"kaz",KHM:"khm",KIR:"kir",KOR:"kor",KUR:"kur",LAO:"lao",LAT:"lat",LAV:"lav",LIT:"lit",MAL:"mal",MAR:"mar",MKD:"mkd",MLT:"mlt",MSA:"msa",MYA:"mya",NEP:"nep",NLD:"nld",NOR:"nor",ORI:"ori",PAN:"pan",POL:"pol",POR:"por",PUS:"pus",RON:"ron",RUS:"rus",SAN:"san",SIN:"sin",SLK:"slk",SLV:"slv",SPA:"spa",SPA_OLD:"spa_old",SQI:"sqi",SRP:"srp",SRP_LATN:"srp_latn",SWA:"swa",SWE:"swe",SYR:"syr",TAM:"tam",TEL:"tel",TGK:"tgk",TGL:"tgl",THA:"tha",TIR:"tir",TUR:"tur",UIG:"uig",UKR:"ukr",URD:"urd",UZB:"uzb",UZB_CYRL:"uzb_cyrl",VIE:"vie",YID:"yid"},Ey={OSD_ONLY:"0",AUTO_OSD:"1",AUTO_ONLY:"2",AUTO:"3",SINGLE_COLUMN:"4",SINGLE_BLOCK_VERT_TEXT:"5",SINGLE_BLOCK:"6",SINGLE_LINE:"7",SINGLE_WORD:"8",CIRCLE_WORD:"9",SINGLE_CHAR:"10",SPARSE_TEXT:"11",SPARSE_TEXT_OSD:"12"};const by=gx,Ty=Zg,Cy=My,Ay=wy,Ly=Kg,Ry=Ey,{setLogging:Py}=Ms;var Dy={languages:Ay,OEM:Ly,PSM:Ry,createScheduler:by,createWorker:Ty,setLogging:Py,...Cy};function oi(t){return Array.isArray?Array.isArray(t):tv(t)==="[object Array]"}const Iy=1/0;function ky(t){if(typeof t=="string")return t;let e=t+"";return e=="0"&&1/t==-Iy?"-0":e}function Ny(t){return t==null?"":ky(t)}function Nn(t){return typeof t=="string"}function Jg(t){return typeof t=="number"}function Fy(t){return t===!0||t===!1||zy(t)&&tv(t)=="[object Boolean]"}function ev(t){return typeof t=="object"}function zy(t){return ev(t)&&t!==null}function $t(t){return t!=null}function ru(t){return!t.trim().length}function tv(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const Oy="Incorrect 'index' type",Uy=t=>`Invalid value for key ${t}`,By=t=>`Pattern length exceeds max of ${t}.`,Gy=t=>`Missing ${t} property in key`,Vy=t=>`Property 'weight' in key '${t}' must be a positive integer`,hh=Object.prototype.hasOwnProperty;class Hy{constructor(e){this._keys=[],this._keyMap={};let n=0;e.forEach(i=>{let r=nv(i);n+=r.weight,this._keys.push(r),this._keyMap[r.id]=r,n+=r.weight}),this._keys.forEach(i=>{i.weight/=n})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function nv(t){let e=null,n=null,i=null,r=1,s=null;if(Nn(t)||oi(t))i=t,e=ph(t),n=Dc(t);else{if(!hh.call(t,"name"))throw new Error(Gy("name"));const o=t.name;if(i=o,hh.call(t,"weight")&&(r=t.weight,r<=0))throw new Error(Vy(o));e=ph(o),n=Dc(o),s=t.getFn}return{path:e,id:n,weight:r,src:i,getFn:s}}function ph(t){return oi(t)?t:t.split(".")}function Dc(t){return oi(t)?t.join("."):t}function Wy(t,e){let n=[],i=!1;const r=(s,o,a)=>{if(!!$t(s))if(!o[a])n.push(s);else{let l=o[a];const u=s[l];if(!$t(u))return;if(a===o.length-1&&(Nn(u)||Jg(u)||Fy(u)))n.push(Ny(u));else if(oi(u)){i=!0;for(let c=0,f=u.length;c<f;c+=1)r(u[c],o,a+1)}else o.length&&r(u,o,a+1)}};return r(t,Nn(e)?e.split("."):e,0),i?n:n[0]}const jy={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},$y={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},Xy={location:0,threshold:.6,distance:100},qy={useExtendedSearch:!1,getFn:Wy,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var ye={...$y,...jy,...Xy,...qy};const Yy=/[^ ]+/g;function Ky(t=1,e=3){const n=new Map,i=Math.pow(10,e);return{get(r){const s=r.match(Yy).length;if(n.has(s))return n.get(s);const o=1/Math.pow(s,.5*t),a=parseFloat(Math.round(o*i)/i);return n.set(s,a),a},clear(){n.clear()}}}class Wf{constructor({getFn:e=ye.getFn,fieldNormWeight:n=ye.fieldNormWeight}={}){this.norm=Ky(n,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((n,i)=>{this._keysMap[n.id]=i})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,Nn(this.docs[0])?this.docs.forEach((e,n)=>{this._addString(e,n)}):this.docs.forEach((e,n)=>{this._addObject(e,n)}),this.norm.clear())}add(e){const n=this.size();Nn(e)?this._addString(e,n):this._addObject(e,n)}removeAt(e){this.records.splice(e,1);for(let n=e,i=this.size();n<i;n+=1)this.records[n].i-=1}getValueForItemAtKeyId(e,n){return e[this._keysMap[n]]}size(){return this.records.length}_addString(e,n){if(!$t(e)||ru(e))return;let i={v:e,i:n,n:this.norm.get(e)};this.records.push(i)}_addObject(e,n){let i={i:n,$:{}};this.keys.forEach((r,s)=>{let o=r.getFn?r.getFn(e):this.getFn(e,r.path);if(!!$t(o)){if(oi(o)){let a=[];const l=[{nestedArrIndex:-1,value:o}];for(;l.length;){const{nestedArrIndex:u,value:c}=l.pop();if(!!$t(c))if(Nn(c)&&!ru(c)){let f={v:c,i:u,n:this.norm.get(c)};a.push(f)}else oi(c)&&c.forEach((f,d)=>{l.push({nestedArrIndex:d,value:f})})}i.$[s]=a}else if(Nn(o)&&!ru(o)){let a={v:o,n:this.norm.get(o)};i.$[s]=a}}}),this.records.push(i)}toJSON(){return{keys:this.keys,records:this.records}}}function iv(t,e,{getFn:n=ye.getFn,fieldNormWeight:i=ye.fieldNormWeight}={}){const r=new Wf({getFn:n,fieldNormWeight:i});return r.setKeys(t.map(nv)),r.setSources(e),r.create(),r}function Zy(t,{getFn:e=ye.getFn,fieldNormWeight:n=ye.fieldNormWeight}={}){const{keys:i,records:r}=t,s=new Wf({getFn:e,fieldNormWeight:n});return s.setKeys(i),s.setIndexRecords(r),s}function qo(t,{errors:e=0,currentLocation:n=0,expectedLocation:i=0,distance:r=ye.distance,ignoreLocation:s=ye.ignoreLocation}={}){const o=e/t.length;if(s)return o;const a=Math.abs(i-n);return r?o+a/r:a?1:o}function Qy(t=[],e=ye.minMatchCharLength){let n=[],i=-1,r=-1,s=0;for(let o=t.length;s<o;s+=1){let a=t[s];a&&i===-1?i=s:!a&&i!==-1&&(r=s-1,r-i+1>=e&&n.push([i,r]),i=-1)}return t[s-1]&&s-i>=e&&n.push([i,s-1]),n}const qi=32;function Jy(t,e,n,{location:i=ye.location,distance:r=ye.distance,threshold:s=ye.threshold,findAllMatches:o=ye.findAllMatches,minMatchCharLength:a=ye.minMatchCharLength,includeMatches:l=ye.includeMatches,ignoreLocation:u=ye.ignoreLocation}={}){if(e.length>qi)throw new Error(By(qi));const c=e.length,f=t.length,d=Math.max(0,Math.min(i,f));let g=s,_=d;const p=a>1||l,h=p?Array(f):[];let m;for(;(m=t.indexOf(e,_))>-1;){let A=qo(e,{currentLocation:m,expectedLocation:d,distance:r,ignoreLocation:u});if(g=Math.min(A,g),_=m+c,p){let x=0;for(;x<c;)h[m+x]=1,x+=1}}_=-1;let v=[],y=1,S=c+f;const M=1<<c-1;for(let A=0;A<c;A+=1){let x=0,L=S;for(;x<L;)qo(e,{errors:A,currentLocation:d+L,expectedLocation:d,distance:r,ignoreLocation:u})<=g?x=L:S=L,L=Math.floor((S-x)/2+x);S=L;let D=Math.max(1,d-L+1),N=o?f:Math.min(d+L,f)+c,Q=Array(N+2);Q[N+1]=(1<<A)-1;for(let k=N;k>=D;k-=1){let q=k-1,V=n[t.charAt(q)];if(p&&(h[q]=+!!V),Q[k]=(Q[k+1]<<1|1)&V,A&&(Q[k]|=(v[k+1]|v[k])<<1|1|v[k+1]),Q[k]&M&&(y=qo(e,{errors:A,currentLocation:q,expectedLocation:d,distance:r,ignoreLocation:u}),y<=g)){if(g=y,_=q,_<=d)break;D=Math.max(1,2*d-_)}}if(qo(e,{errors:A+1,currentLocation:d,expectedLocation:d,distance:r,ignoreLocation:u})>g)break;v=Q}const T={isMatch:_>=0,score:Math.max(.001,y)};if(p){const A=Qy(h,a);A.length?l&&(T.indices=A):T.isMatch=!1}return T}function eS(t){let e={};for(let n=0,i=t.length;n<i;n+=1){const r=t.charAt(n);e[r]=(e[r]||0)|1<<i-n-1}return e}class rv{constructor(e,{location:n=ye.location,threshold:i=ye.threshold,distance:r=ye.distance,includeMatches:s=ye.includeMatches,findAllMatches:o=ye.findAllMatches,minMatchCharLength:a=ye.minMatchCharLength,isCaseSensitive:l=ye.isCaseSensitive,ignoreLocation:u=ye.ignoreLocation}={}){if(this.options={location:n,threshold:i,distance:r,includeMatches:s,findAllMatches:o,minMatchCharLength:a,isCaseSensitive:l,ignoreLocation:u},this.pattern=l?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const c=(d,g)=>{this.chunks.push({pattern:d,alphabet:eS(d),startIndex:g})},f=this.pattern.length;if(f>qi){let d=0;const g=f%qi,_=f-g;for(;d<_;)c(this.pattern.substr(d,qi),d),d+=qi;if(g){const p=f-qi;c(this.pattern.substr(p),p)}}else c(this.pattern,0)}searchIn(e){const{isCaseSensitive:n,includeMatches:i}=this.options;if(n||(e=e.toLowerCase()),this.pattern===e){let _={isMatch:!0,score:0};return i&&(_.indices=[[0,e.length-1]]),_}const{location:r,distance:s,threshold:o,findAllMatches:a,minMatchCharLength:l,ignoreLocation:u}=this.options;let c=[],f=0,d=!1;this.chunks.forEach(({pattern:_,alphabet:p,startIndex:h})=>{const{isMatch:m,score:v,indices:y}=Jy(e,_,p,{location:r+h,distance:s,threshold:o,findAllMatches:a,minMatchCharLength:l,includeMatches:i,ignoreLocation:u});m&&(d=!0),f+=v,m&&y&&(c=[...c,...y])});let g={isMatch:d,score:d?f/this.chunks.length:1};return d&&i&&(g.indices=c),g}}class Ui{constructor(e){this.pattern=e}static isMultiMatch(e){return mh(e,this.multiRegex)}static isSingleMatch(e){return mh(e,this.singleRegex)}search(){}}function mh(t,e){const n=t.match(e);return n?n[1]:null}class tS extends Ui{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const n=e===this.pattern;return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class nS extends Ui{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const i=e.indexOf(this.pattern)===-1;return{isMatch:i,score:i?0:1,indices:[0,e.length-1]}}}class iS extends Ui{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const n=e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class rS extends Ui{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const n=!e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class sS extends Ui{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const n=e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class oS extends Ui{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const n=!e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class sv extends Ui{constructor(e,{location:n=ye.location,threshold:i=ye.threshold,distance:r=ye.distance,includeMatches:s=ye.includeMatches,findAllMatches:o=ye.findAllMatches,minMatchCharLength:a=ye.minMatchCharLength,isCaseSensitive:l=ye.isCaseSensitive,ignoreLocation:u=ye.ignoreLocation}={}){super(e),this._bitapSearch=new rv(e,{location:n,threshold:i,distance:r,includeMatches:s,findAllMatches:o,minMatchCharLength:a,isCaseSensitive:l,ignoreLocation:u})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class ov extends Ui{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let n=0,i;const r=[],s=this.pattern.length;for(;(i=e.indexOf(this.pattern,n))>-1;)n=i+s,r.push([i,n-1]);const o=!!r.length;return{isMatch:o,score:o?0:1,indices:r}}}const Ic=[tS,ov,iS,rS,oS,sS,nS,sv],gh=Ic.length,aS=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,lS="|";function uS(t,e={}){return t.split(lS).map(n=>{let i=n.trim().split(aS).filter(s=>s&&!!s.trim()),r=[];for(let s=0,o=i.length;s<o;s+=1){const a=i[s];let l=!1,u=-1;for(;!l&&++u<gh;){const c=Ic[u];let f=c.isMultiMatch(a);f&&(r.push(new c(f,e)),l=!0)}if(!l)for(u=-1;++u<gh;){const c=Ic[u];let f=c.isSingleMatch(a);if(f){r.push(new c(f,e));break}}}return r})}const cS=new Set([sv.type,ov.type]);class fS{constructor(e,{isCaseSensitive:n=ye.isCaseSensitive,includeMatches:i=ye.includeMatches,minMatchCharLength:r=ye.minMatchCharLength,ignoreLocation:s=ye.ignoreLocation,findAllMatches:o=ye.findAllMatches,location:a=ye.location,threshold:l=ye.threshold,distance:u=ye.distance}={}){this.query=null,this.options={isCaseSensitive:n,includeMatches:i,minMatchCharLength:r,findAllMatches:o,ignoreLocation:s,location:a,threshold:l,distance:u},this.pattern=n?e:e.toLowerCase(),this.query=uS(this.pattern,this.options)}static condition(e,n){return n.useExtendedSearch}searchIn(e){const n=this.query;if(!n)return{isMatch:!1,score:1};const{includeMatches:i,isCaseSensitive:r}=this.options;e=r?e:e.toLowerCase();let s=0,o=[],a=0;for(let l=0,u=n.length;l<u;l+=1){const c=n[l];o.length=0,s=0;for(let f=0,d=c.length;f<d;f+=1){const g=c[f],{isMatch:_,indices:p,score:h}=g.search(e);if(_){if(s+=1,a+=h,i){const m=g.constructor.type;cS.has(m)?o=[...o,...p]:o.push(p)}}else{a=0,s=0,o.length=0;break}}if(s){let f={isMatch:!0,score:a/s};return i&&(f.indices=o),f}}return{isMatch:!1,score:1}}}const kc=[];function dS(...t){kc.push(...t)}function Nc(t,e){for(let n=0,i=kc.length;n<i;n+=1){let r=kc[n];if(r.condition(t,e))return new r(t,e)}return new rv(t,e)}const il={AND:"$and",OR:"$or"},Fc={PATH:"$path",PATTERN:"$val"},zc=t=>!!(t[il.AND]||t[il.OR]),hS=t=>!!t[Fc.PATH],pS=t=>!oi(t)&&ev(t)&&!zc(t),vh=t=>({[il.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function av(t,e,{auto:n=!0}={}){const i=r=>{let s=Object.keys(r);const o=hS(r);if(!o&&s.length>1&&!zc(r))return i(vh(r));if(pS(r)){const l=o?r[Fc.PATH]:s[0],u=o?r[Fc.PATTERN]:r[l];if(!Nn(u))throw new Error(Uy(l));const c={keyId:Dc(l),pattern:u};return n&&(c.searcher=Nc(u,e)),c}let a={children:[],operator:s[0]};return s.forEach(l=>{const u=r[l];oi(u)&&u.forEach(c=>{a.children.push(i(c))})}),a};return zc(t)||(t=vh(t)),i(t)}function mS(t,{ignoreFieldNorm:e=ye.ignoreFieldNorm}){t.forEach(n=>{let i=1;n.matches.forEach(({key:r,norm:s,score:o})=>{const a=r?r.weight:null;i*=Math.pow(o===0&&a?Number.EPSILON:o,(a||1)*(e?1:s))}),n.score=i})}function gS(t,e){const n=t.matches;e.matches=[],$t(n)&&n.forEach(i=>{if(!$t(i.indices)||!i.indices.length)return;const{indices:r,value:s}=i;let o={indices:r,value:s};i.key&&(o.key=i.key.src),i.idx>-1&&(o.refIndex=i.idx),e.matches.push(o)})}function vS(t,e){e.score=t.score}function _S(t,e,{includeMatches:n=ye.includeMatches,includeScore:i=ye.includeScore}={}){const r=[];return n&&r.push(gS),i&&r.push(vS),t.map(s=>{const{idx:o}=s,a={item:e[o],refIndex:o};return r.length&&r.forEach(l=>{l(s,a)}),a})}class vr{constructor(e,n={},i){this.options={...ye,...n},this.options.useExtendedSearch,this._keyStore=new Hy(this.options.keys),this.setCollection(e,i)}setCollection(e,n){if(this._docs=e,n&&!(n instanceof Wf))throw new Error(Oy);this._myIndex=n||iv(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){!$t(e)||(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const n=[];for(let i=0,r=this._docs.length;i<r;i+=1){const s=this._docs[i];e(s,i)&&(this.removeAt(i),i-=1,r-=1,n.push(s))}return n}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:n=-1}={}){const{includeMatches:i,includeScore:r,shouldSort:s,sortFn:o,ignoreFieldNorm:a}=this.options;let l=Nn(e)?Nn(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return mS(l,{ignoreFieldNorm:a}),s&&l.sort(o),Jg(n)&&n>-1&&(l=l.slice(0,n)),_S(l,this._docs,{includeMatches:i,includeScore:r})}_searchStringList(e){const n=Nc(e,this.options),{records:i}=this._myIndex,r=[];return i.forEach(({v:s,i:o,n:a})=>{if(!$t(s))return;const{isMatch:l,score:u,indices:c}=n.searchIn(s);l&&r.push({item:s,idx:o,matches:[{score:u,value:s,norm:a,indices:c}]})}),r}_searchLogical(e){const n=av(e,this.options),i=(a,l,u)=>{if(!a.children){const{keyId:f,searcher:d}=a,g=this._findMatches({key:this._keyStore.get(f),value:this._myIndex.getValueForItemAtKeyId(l,f),searcher:d});return g&&g.length?[{idx:u,item:l,matches:g}]:[]}const c=[];for(let f=0,d=a.children.length;f<d;f+=1){const g=a.children[f],_=i(g,l,u);if(_.length)c.push(..._);else if(a.operator===il.AND)return[]}return c},r=this._myIndex.records,s={},o=[];return r.forEach(({$:a,i:l})=>{if($t(a)){let u=i(n,a,l);u.length&&(s[l]||(s[l]={idx:l,item:a,matches:[]},o.push(s[l])),u.forEach(({matches:c})=>{s[l].matches.push(...c)}))}}),o}_searchObjectList(e){const n=Nc(e,this.options),{keys:i,records:r}=this._myIndex,s=[];return r.forEach(({$:o,i:a})=>{if(!$t(o))return;let l=[];i.forEach((u,c)=>{l.push(...this._findMatches({key:u,value:o[c],searcher:n}))}),l.length&&s.push({idx:a,item:o,matches:l})}),s}_findMatches({key:e,value:n,searcher:i}){if(!$t(n))return[];let r=[];if(oi(n))n.forEach(({v:s,i:o,n:a})=>{if(!$t(s))return;const{isMatch:l,score:u,indices:c}=i.searchIn(s);l&&r.push({score:u,key:e,value:s,idx:o,norm:a,indices:c})});else{const{v:s,n:o}=n,{isMatch:a,score:l,indices:u}=i.searchIn(s);a&&r.push({score:l,key:e,value:s,norm:o,indices:u})}return r}}vr.version="6.6.2";vr.createIndex=iv;vr.parseIndex=Zy;vr.config=ye;vr.parseQuery=av;dS(fS);const xS={Adventurer:{flower:"Adventurer's Flower",plume:"Adventurer's Tail Feather",sands:"Adventurer's Pocket Watch",goblet:"Adventurer's Golden Goblet",circlet:"Adventurer's Bandana"},ArchaicPetra:{flower:"Flower of Creviced Cliff",plume:"Feather of Jagged Peaks",sands:"Sundial of Enduring Jade",goblet:"Goblet of Chiseled Crag",circlet:"Mask of Solitude Basalt"},Berserker:{flower:"Berserker's Rose",plume:"Berserker's Indigo Feather",sands:"Berserker's Timepiece",goblet:"Berserker's Bone Goblet",circlet:"Berserker's Battle Mask"},BlizzardStrayer:{flower:"Snowswept Memory",plume:"Icebreaker's Resolve",sands:"Frozen Homeland's Demise",goblet:"Frost-Weaved Dignity",circlet:"Broken Rime's Echo"},BloodstainedChivalry:{flower:"Bloodstained Flower of Iron",plume:"Bloodstained Black Plume",sands:"Bloodstained Final Hour",goblet:"Bloodstained Chevalier's Goblet",circlet:"Bloodstained Iron Mask"},BraveHeart:{flower:"Medal of the Brave",plume:"Prospect of the Brave",sands:"Fortitude of the Brave",goblet:"Outset of the Brave",circlet:"Crown of the Brave"},CrimsonWitchOfFlames:{flower:"Witch's Flower of Blaze",plume:"Witch's Ever-Burning Plume",sands:"Witch's End Time",goblet:"Witch's Heart Flames",circlet:"Witch's Scorching Hat"},DeepwoodMemories:{flower:"Labyrinth Wayfarer",plume:"Scholar of Vines",sands:"A Time of Insight",goblet:"Lamp of the Lost",circlet:"Laurel Coronet"},DefendersWill:{flower:"Guardian's Flower",plume:"Guardian's Sigil",sands:"Guardian's Clock",goblet:"Guardian's Vessel",circlet:"Guardian's Band"},EchoesOfAnOffering:{flower:"Soulscent Bloom",plume:"Jade Leaf",sands:"Symbol of Felicitation",goblet:"Chalice of the Font",circlet:"Flowing Rings"},EmblemOfSeveredFate:{flower:"Magnificent Tsuba",plume:"Sundered Feather",sands:"Storm Cage",goblet:"Scarlet Vessel",circlet:"Ornate Kabuto"},Gambler:{flower:"Gambler's Brooch",plume:"Gambler's Feather Accessory",sands:"Gambler's Pocket Watch",goblet:"Gambler's Dice Cup",circlet:"Gambler's Earrings"},GildedDreams:{flower:"Shadow of the Sand King",plume:"Honeyed Final Feast",sands:"The Sunken Years",goblet:"Feather of Judgment",circlet:"Dreaming Steelbloom"},GladiatorsFinale:{flower:"Gladiator's Nostalgia",plume:"Gladiator's Destiny",sands:"Gladiator's Longing",goblet:"Gladiator's Intoxication",circlet:"Gladiator's Triumphus"},HeartOfDepth:{flower:"Gilded Corsage",plume:"Gust of Nostalgia",sands:"Copper Compass",goblet:"Goblet of Thundering Deep",circlet:"Wine-Stained Tricorne"},HuskOfOpulentDreams:{flower:"Bloom Times",plume:"Plume of Luxury",sands:"Song of Life",goblet:"Calabash of Awakening",circlet:"Skeletal Hat"},Instructor:{flower:"Instructor's Brooch",plume:"Instructor's Feather Accessory",sands:"Instructor's Pocket Watch",goblet:"Instructor's Tea Cup",circlet:"Instructor's Cap"},Lavawalker:{flower:"Lavawalker's Resolution",plume:"Lavawalker's Salvation",sands:"Lavawalker's Torment",goblet:"Lavawalker's Epiphany",circlet:"Lavawalker's Wisdom"},LuckyDog:{flower:"Lucky Dog's Clover",plume:"Lucky Dog's Eagle Feather",sands:"Lucky Dog's Hourglass",goblet:"Lucky Dog's Goblet",circlet:"Lucky Dog's Silver Circlet"},MaidenBeloved:{flower:"Maiden's Distant Love",plume:"Maiden's Heart-Stricken Infatuation",sands:"Maiden's Passing Youth",goblet:"Maiden's Fleeting Leisure",circlet:"Maiden's Fading Beauty"},MartialArtist:{flower:"Martial Artist's Red Flower",plume:"Martial Artist's Feather Accessory",sands:"Martial Artist's Water Hourglass",goblet:"Martial Artist's Wine Cup",circlet:"Martial Artist's Bandana"},NoblesseOblige:{flower:"Royal Flora",plume:"Royal Plume",sands:"Royal Pocket Watch",goblet:"Royal Silver Urn",circlet:"Royal Masque"},OceanHuedClam:{flower:"Sea-Dyed Blossom",plume:"Deep Palace's Plume",sands:"Cowry of Parting",goblet:"Pearl Cage",circlet:"Crown of Watatsumi"},PaleFlame:{flower:"Stainless Bloom",plume:"Wise Doctor's Pinion",sands:"Moment of Cessation",goblet:"Surpassing Cup",circlet:"Mocking Mask"},ResolutionOfSojourner:{flower:"Heart of Comradeship",plume:"Feather of Homecoming",sands:"Sundial of the Sojourner",goblet:"Goblet of the Sojourner",circlet:"Crown of Parting"},RetracingBolide:{flower:"Summer Night's Bloom",plume:"Summer Night's Finale",sands:"Summer Night's Moment",goblet:"Summer Night's Waterballoon",circlet:"Summer Night's Mask"},Scholar:{flower:"Scholar's Bookmark",plume:"Scholar's Quill Pen",sands:"Scholar's Clock",goblet:"Scholar's Ink Cup",circlet:"Scholar's Lens"},ShimenawasReminiscence:{flower:"Entangling Bloom",plume:"Shaft of Remembrance",sands:"Morning Dew's Moment",goblet:"Hopeful Heart",circlet:"Capricious Visage"},TenacityOfTheMillelith:{flower:"Flower of Accolades",plume:"Ceremonial War-Plume",sands:"Orichalceous Time-Dial",goblet:"Noble's Pledging Vessel",circlet:"General's Ancient Helm"},TheExile:{flower:"Exile's Flower",plume:"Exile's Feather",sands:"Exile's Pocket Watch",goblet:"Exile's Goblet",circlet:"Exile's Circlet"},ThunderingFury:{flower:"Thunderbird's Mercy",plume:"Survivor of Catastrophe",sands:"Hourglass of Thunder",goblet:"Omen of Thunderstorm",circlet:"Thunder Summoner's Crown"},Thundersoother:{flower:"Thundersoother's Heart",plume:"Thundersoother's Plume",sands:"Hour of Soothing Thunder",goblet:"Thundersoother's Goblet",circlet:"Thundersoother's Diadem"},TinyMiracle:{flower:"Tiny Miracle's Flower",plume:"Tiny Miracle's Feather",sands:"Tiny Miracle's Hourglass",goblet:"Tiny Miracle's Goblet",circlet:"Tiny Miracle's Earrings"},TravelingDoctor:{flower:"Traveling Doctor's Silver Lotus",plume:"Traveling Doctor's Owl Feather",sands:"Traveling Doctor's Pocket Watch",goblet:"Traveling Doctor's Medicine Pot",circlet:"Traveling Doctor's Handkerchief"},VermillionHereafter:{flower:"Flowering Life",plume:"Feather of Nascent Light",sands:"Solar Relic",goblet:"Moment of the Pact",circlet:"Thundering Poise"},ViridescentVenerer:{flower:"In Remembrance of Viridescent Fields",plume:"Viridescent Arrow Feather",sands:"Viridescent Venerer's Determination",goblet:"Viridescent Venerer's Vessel",circlet:"Viridescent Venerer's Diadem"},WanderersTroupe:{flower:"Troupe's Dawnlight",plume:"Bard's Arrow Feather",sands:"Concert's Final Hour",goblet:"Wanderer's String-Kettle",circlet:"Conductor's Top Hat"}},yS={HP:"hp_",ATK:"atk_",DEF:"def_","Elemental Mastery":"eleMas","Energy Recharge":"enerRech_","CRIT Rate":"critRate_","CRIT DMG":"critDMG_","Physical DMG Bonus":"physical_dmg_","Anemo DMG Bonus":"anemo_dmg_","Geo DMG Bonus":"geo_dmg_","Electro DMG Bonus":"electro_dmg_","Hydro DMG Bonus":"hydro_dmg_","Pyro DMG Bonus":"pyro_dmg_","Cryo DMG Bonus":"cryo_dmg_","Dendro DMG Bonus":"dendro_dmg_","Healing Bonus":"heal_"},SS={HP:["hp","hp_"],ATK:["atk","atk_"],DEF:["def","def_"],"Elemental Mastery":["eleMas","eleMas"],"Energy Recharge":["enerRech_","enerRech_"],"CRIT Rate":["critRate_","critRate_"],"CRIT DMG":["critDMG_","critDMG_"]};function hs(t){return t.trim().toUpperCase().replaceAll(/[\s\W]/g,"")}const _h=Object.fromEntries(Object.entries(yS).map(([t,e])=>[hs(t),e]));function MS(t,e){if(e==="flower")return"hp";if(e==="plume")return"atk";const i=new vr(Object.keys(_h)).search(hs(t));if(i.length>0)return _h[i[0].item];throw new Error(`unknown mainstat (name=${t})`)}function wS(t){return parseInt(t.replaceAll(/\D/g,""))}const xh=Object.fromEntries(Object.entries(SS).map(([t,e])=>[hs(t),e]));function ES(t,e){const n=e.includes("%")?1:0,r=new vr(Object.keys(xh)).search(hs(t));if(r.length>0)return xh[r[0].item][n];throw new Error(`unknown substat (name=${t}, value=${e})`)}function bS(t){const e=[];return t.split(`
`).forEach(n=>{n=n.replaceAll(/\s/g,"");const i=n.search(/[\+H]\d/);if(i>0){const r=n.substring(0,i),s=n.substring(i+1).replaceAll(/[Y]/g,"7");e.push({key:ES(r,s),value:parseFloat(s)})}}),e}function TS(t,e,n,i){const r=hs(t);let s=null,o=null;for(const[c,f]of Object.entries(xS))for(const d in f)if(hs(f[d])===r){s=d,o=c;break}if(s==null||o==null)return null;const a=MS(e,s),l=wS(n),u=bS(i);return{setKey:o,slotKey:s,level:l,rarity:5,mainStatKey:a,location:"",lock:!1,substats:u,exclude:!1}}class CS{constructor(){Rl(this,"worker",null);Rl(this,"data");this.data={format:"GOOD",version:1,source:"https://ene.ai/genshin-scanner/",characters:[],artifacts:[],weapons:[]}}async init(){this.worker=Dy.createWorker({logger:e=>console.log(e)}),await this.worker.load(),await this.worker.loadLanguage("eng"),await this.worker.initialize("eng")}async scan(e){if(this.worker==null)throw new Error("scanner not ready");const n=this.worker,i=async u=>(await n.recognize(e,{rectangle:{left:u.bounds[0]-12,top:u.bounds[1]-12,width:u.bounds[2]+24,height:u.bounds[3]+24}})).data.text,r=await i(jg),s=await i(Xg),o=await i($g),a=await i(qg),l=TS(r,s,o,a);l!=null&&(this.data.artifacts.map(c=>JSON.stringify(c)).includes(JSON.stringify(l))||this.data.artifacts.push(l)),console.log(r,o,a)}async cleanup(){this.worker!=null&&await this.worker.terminate()}getData(){return JSON.parse(JSON.stringify(this.data))}}/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const jf="143",AS=0,yh=1,LS=2,lv=1,RS=2,Vs=3,vo=0,bn=1,ps=2,PS=1,Di=0,rs=1,Sh=2,Mh=3,wh=4,DS=5,Or=100,IS=101,kS=102,Eh=103,bh=104,NS=200,FS=201,zS=202,OS=203,uv=204,cv=205,US=206,BS=207,GS=208,VS=209,HS=210,WS=0,jS=1,$S=2,Oc=3,XS=4,qS=5,YS=6,KS=7,fv=0,ZS=1,QS=2,ti=0,JS=1,e1=2,t1=3,n1=4,i1=5,dv=300,ms=301,gs=302,Uc=303,Bc=304,xl=306,Gc=1e3,Mn=1001,Vc=1002,Nt=1003,Th=1004,Ch=1005,Ft=1006,r1=1007,yl=1008,dr=1009,s1=1010,o1=1011,hv=1012,a1=1013,Ji=1014,er=1015,_o=1016,l1=1017,u1=1018,ss=1020,c1=1021,f1=1022,Fn=1023,d1=1024,h1=1025,rr=1026,vs=1027,p1=1028,m1=1029,g1=1030,v1=1031,_1=1033,su=33776,ou=33777,au=33778,lu=33779,Ah=35840,Lh=35841,Rh=35842,Ph=35843,x1=36196,Dh=37492,Ih=37496,kh=37808,Nh=37809,Fh=37810,zh=37811,Oh=37812,Uh=37813,Bh=37814,Gh=37815,Vh=37816,Hh=37817,Wh=37818,jh=37819,$h=37820,Xh=37821,qh=36492,hr=3e3,Qe=3001,y1=3200,S1=3201,M1=0,w1=1,qn="srgb",tr="srgb-linear",uu=7680,E1=519,Yh=35044,Kh="300 es",Hc=1035;class ws{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Mt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],cu=Math.PI/180,Zh=180/Math.PI;function bo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Mt[t&255]+Mt[t>>8&255]+Mt[t>>16&255]+Mt[t>>24&255]+"-"+Mt[e&255]+Mt[e>>8&255]+"-"+Mt[e>>16&15|64]+Mt[e>>24&255]+"-"+Mt[n&63|128]+Mt[n>>8&255]+"-"+Mt[n>>16&255]+Mt[n>>24&255]+Mt[i&255]+Mt[i>>8&255]+Mt[i>>16&255]+Mt[i>>24&255]).toLowerCase()}function Xt(t,e,n){return Math.max(e,Math.min(n,t))}function b1(t,e){return(t%e+e)%e}function fu(t,e,n){return(1-n)*t+n*e}function Qh(t){return(t&t-1)===0&&t!==0}function Wc(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}class Ue{constructor(e=0,n=0){Ue.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class an{constructor(){an.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,n,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=n,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],f=i[7],d=i[2],g=i[5],_=i[8],p=r[0],h=r[3],m=r[6],v=r[1],y=r[4],S=r[7],M=r[2],T=r[5],A=r[8];return s[0]=o*p+a*v+l*M,s[3]=o*h+a*y+l*T,s[6]=o*m+a*S+l*A,s[1]=u*p+c*v+f*M,s[4]=u*h+c*y+f*T,s[7]=u*m+c*S+f*A,s[2]=d*p+g*v+_*M,s[5]=d*h+g*y+_*T,s[8]=d*m+g*S+_*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return n*o*c-n*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=c*o-a*u,d=a*l-c*s,g=u*s-o*l,_=n*f+i*d+r*g;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/_;return e[0]=f*p,e[1]=(r*u-c*i)*p,e[2]=(a*i-r*o)*p,e[3]=d*p,e[4]=(c*n-r*l)*p,e[5]=(r*s-a*n)*p,e[6]=g*p,e[7]=(i*l-u*n)*p,e[8]=(o*n-i*s)*p,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=n,i[4]*=n,i[7]*=n,this}rotate(e){const n=Math.cos(e),i=Math.sin(e),r=this.elements,s=r[0],o=r[3],a=r[6],l=r[1],u=r[4],c=r[7];return r[0]=n*s+i*l,r[3]=n*o+i*u,r[6]=n*a+i*c,r[1]=-i*s+n*l,r[4]=-i*o+n*u,r[7]=-i*a+n*c,this}translate(e,n){const i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=n*i[2],i[4]+=n*i[5],i[7]+=n*i[8],this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function pv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>65535)return!0;return!1}function xo(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function sr(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Pa(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const du={[qn]:{[tr]:sr},[tr]:{[qn]:Pa}},pn={legacyMode:!0,get workingColorSpace(){return tr},set workingColorSpace(t){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(t,e,n){if(this.legacyMode||e===n||!e||!n)return t;if(du[e]&&du[e][n]!==void 0){const i=du[e][n];return t.r=i(t.r),t.g=i(t.g),t.b=i(t.b),t}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)}},mv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},at={r:0,g:0,b:0},mn={h:0,s:0,l:0},Yo={h:0,s:0,l:0};function hu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}function Ko(t,e){return e.r=t.r,e.g=t.g,e.b=t.b,e}class Ge{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,n===void 0&&i===void 0?this.set(e):this.setRGB(e,n,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=qn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pn.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=tr){return this.r=e,this.g=n,this.b=i,pn.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=tr){if(e=b1(e,1),n=Xt(n,0,1),i=Xt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=hu(o,s,e+1/3),this.g=hu(o,s,e),this.b=hu(o,s,e-1/3)}return pn.toWorkingColorSpace(this,r),this}setStyle(e,n=qn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,pn.toWorkingColorSpace(this,n),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,pn.toWorkingColorSpace(this,n),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,u=parseInt(s[2],10)/100,c=parseInt(s[3],10)/100;return i(s[4]),this.setHSL(l,u,c,n)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,pn.toWorkingColorSpace(this,n),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,pn.toWorkingColorSpace(this,n),this}return e&&e.length>0?this.setColorName(e,n):this}setColorName(e,n=qn){const i=mv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=sr(e.r),this.g=sr(e.g),this.b=sr(e.b),this}copyLinearToSRGB(e){return this.r=Pa(e.r),this.g=Pa(e.g),this.b=Pa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qn){return pn.fromWorkingColorSpace(Ko(this,at),e),Xt(at.r*255,0,255)<<16^Xt(at.g*255,0,255)<<8^Xt(at.b*255,0,255)<<0}getHexString(e=qn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=tr){pn.fromWorkingColorSpace(Ko(this,at),n);const i=at.r,r=at.g,s=at.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=c<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=tr){return pn.fromWorkingColorSpace(Ko(this,at),n),e.r=at.r,e.g=at.g,e.b=at.b,e}getStyle(e=qn){return pn.fromWorkingColorSpace(Ko(this,at),e),e!==qn?`color(${e} ${at.r} ${at.g} ${at.b})`:`rgb(${at.r*255|0},${at.g*255|0},${at.b*255|0})`}offsetHSL(e,n,i){return this.getHSL(mn),mn.h+=e,mn.s+=n,mn.l+=i,this.setHSL(mn.h,mn.s,mn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(mn),e.getHSL(Yo);const i=fu(mn.h,Yo.h,n),r=fu(mn.s,Yo.s,n),s=fu(mn.l,Yo.l,n);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Ge.NAMES=mv;let wr;class gv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{wr===void 0&&(wr=xo("canvas")),wr.width=e.width,wr.height=e.height;const i=wr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=wr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=xo("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=sr(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(sr(n[i]/255)*255):n[i]=sr(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class vv{constructor(e=null){this.isSource=!0,this.uuid=bo(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(pu(r[o].image)):s.push(pu(r[o]))}else s=pu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function pu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?gv.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let T1=0;class Zt extends ws{constructor(e=Zt.DEFAULT_IMAGE,n=Zt.DEFAULT_MAPPING,i=Mn,r=Mn,s=Ft,o=yl,a=Fn,l=dr,u=1,c=hr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:T1++}),this.uuid=bo(),this.name="",this.source=new vv(e),this.mipmaps=[],this.mapping=n,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new an,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==dv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gc:e.x=e.x-Math.floor(e.x);break;case Mn:e.x=e.x<0?0:1;break;case Vc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gc:e.y=e.y-Math.floor(e.y);break;case Mn:e.y=e.y<0?0:1;break;case Vc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Zt.DEFAULT_IMAGE=null;Zt.DEFAULT_MAPPING=dv;class ot{constructor(e=0,n=0,i=0,r=1){ot.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],c=l[4],f=l[8],d=l[1],g=l[5],_=l[9],p=l[2],h=l[6],m=l[10];if(Math.abs(c-d)<.01&&Math.abs(f-p)<.01&&Math.abs(_-h)<.01){if(Math.abs(c+d)<.1&&Math.abs(f+p)<.1&&Math.abs(_+h)<.1&&Math.abs(u+g+m-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(u+1)/2,S=(g+1)/2,M=(m+1)/2,T=(c+d)/4,A=(f+p)/4,x=(_+h)/4;return y>S&&y>M?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=T/i,s=A/i):S>M?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=T/r,s=x/r):M<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),i=A/s,r=x/s),this.set(i,r,s,n),this}let v=Math.sqrt((h-_)*(h-_)+(f-p)*(f-p)+(d-c)*(d-c));return Math.abs(v)<.001&&(v=1),this.x=(h-_)/v,this.y=(f-p)/v,this.z=(d-c)/v,this.w=Math.acos((u+g+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class pr extends ws{constructor(e,n,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new ot(0,0,e,n),this.scissorTest=!1,this.viewport=new ot(0,0,e,n);const r={width:e,height:n,depth:1};this.texture=new Zt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Ft,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new vv(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _v extends Zt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class C1 extends Zt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class To{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const d=s[o+0],g=s[o+1],_=s[o+2],p=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=c,e[n+3]=f;return}if(a===1){e[n+0]=d,e[n+1]=g,e[n+2]=_,e[n+3]=p;return}if(f!==p||l!==d||u!==g||c!==_){let h=1-a;const m=l*d+u*g+c*_+f*p,v=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){const M=Math.sqrt(y),T=Math.atan2(M,m*v);h=Math.sin(h*T)/M,a=Math.sin(a*T)/M}const S=a*v;if(l=l*h+d*S,u=u*h+g*S,c=c*h+_*S,f=f*h+p*S,h===1-a){const M=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=M,u*=M,c*=M,f*=M}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[o],d=s[o+1],g=s[o+2],_=s[o+3];return e[n]=a*_+c*f+l*g-u*d,e[n+1]=l*_+c*d+u*f-a*g,e[n+2]=u*_+c*g+a*d-l*f,e[n+3]=c*_-a*f-l*d-u*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),f=a(s/2),d=l(i/2),g=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=d*c*f+u*g*_,this._y=u*g*f-d*c*_,this._z=u*c*_+d*g*f,this._w=u*c*f-d*g*_;break;case"YXZ":this._x=d*c*f+u*g*_,this._y=u*g*f-d*c*_,this._z=u*c*_-d*g*f,this._w=u*c*f+d*g*_;break;case"ZXY":this._x=d*c*f-u*g*_,this._y=u*g*f+d*c*_,this._z=u*c*_+d*g*f,this._w=u*c*f-d*g*_;break;case"ZYX":this._x=d*c*f-u*g*_,this._y=u*g*f+d*c*_,this._z=u*c*_-d*g*f,this._w=u*c*f+d*g*_;break;case"YZX":this._x=d*c*f+u*g*_,this._y=u*g*f+d*c*_,this._z=u*c*_-d*g*f,this._w=u*c*f-d*g*_;break;case"XZY":this._x=d*c*f-u*g*_,this._y=u*g*f-d*c*_,this._z=u*c*_+d*g*f,this._w=u*c*f+d*g*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],c=n[6],f=n[10],d=i+a+f;if(d>0){const g=.5/Math.sqrt(d+1);this._w=.25/g,this._x=(c-l)*g,this._y=(s-u)*g,this._z=(o-r)*g}else if(i>a&&i>f){const g=2*Math.sqrt(1+i-a-f);this._w=(c-l)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+u)/g}else if(a>f){const g=2*Math.sqrt(1+a-i-f);this._w=(s-u)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(l+c)/g}else{const g=2*Math.sqrt(1+f-i-a);this._w=(o-r)/g,this._x=(s+u)/g,this._y=(l+c)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const g=1-n;return this._w=g*o+n*this._w,this._x=g*i+n*this._x,this._y=g*r+n*this._y,this._z=g*s+n*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),f=Math.sin((1-n)*c)/u,d=Math.sin(n*c)/u;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,n=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Jh.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Jh.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=l*n+o*r-a*i,c=l*i+a*n-s*r,f=l*r+s*i-o*n,d=-s*n-o*i-a*r;return this.x=u*l+d*-s+c*-a-f*-o,this.y=c*l+d*-o+f*-s-u*-a,this.z=f*l+d*-a+u*-o-c*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return mu.copy(this).projectOnVector(e),this.sub(mu)}reflect(e){return this.sub(mu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const mu=new U,Jh=new To;class Co{constructor(e=new U(1/0,1/0,1/0),n=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){let n=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,u=e.length;l<u;l+=3){const c=e[l],f=e[l+1],d=e[l+2];c<n&&(n=c),f<i&&(i=f),d<r&&(r=d),c>s&&(s=c),f>o&&(o=f),d>a&&(a=d)}return this.min.set(n,i,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let n=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,u=e.count;l<u;l++){const c=e.getX(l),f=e.getY(l),d=e.getZ(l);c<n&&(n=c),f<i&&(i=f),d<r&&(r=d),c>s&&(s=c),f>o&&(o=f),d>a&&(a=d)}return this.min.set(n,i,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Gi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(n&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)Gi.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Gi)}else i.boundingBox===null&&i.computeBoundingBox(),gu.copy(i.boundingBox),gu.applyMatrix4(e.matrixWorld),this.union(gu);const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Gi),Gi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ns),Zo.subVectors(this.max,Ns),Er.subVectors(e.a,Ns),br.subVectors(e.b,Ns),Tr.subVectors(e.c,Ns),fi.subVectors(br,Er),di.subVectors(Tr,br),Vi.subVectors(Er,Tr);let n=[0,-fi.z,fi.y,0,-di.z,di.y,0,-Vi.z,Vi.y,fi.z,0,-fi.x,di.z,0,-di.x,Vi.z,0,-Vi.x,-fi.y,fi.x,0,-di.y,di.x,0,-Vi.y,Vi.x,0];return!vu(n,Er,br,Tr,Zo)||(n=[1,0,0,0,1,0,0,0,1],!vu(n,Er,br,Tr,Zo))?!1:(Qo.crossVectors(fi,di),n=[Qo.x,Qo.y,Qo.z],vu(n,Er,br,Tr,Zo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Gi.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Gi).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Vn=[new U,new U,new U,new U,new U,new U,new U,new U],Gi=new U,gu=new Co,Er=new U,br=new U,Tr=new U,fi=new U,di=new U,Vi=new U,Ns=new U,Zo=new U,Qo=new U,Hi=new U;function vu(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Hi.fromArray(t,s);const a=r.x*Math.abs(Hi.x)+r.y*Math.abs(Hi.y)+r.z*Math.abs(Hi.z),l=e.dot(Hi),u=n.dot(Hi),c=i.dot(Hi);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const A1=new Co,ep=new U,Jo=new U,_u=new U;class $f{constructor(e=new U,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):A1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){_u.subVectors(e,this.center);const n=_u.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.add(_u.multiplyScalar(r/i)),this.radius+=r}return this}union(e){return this.center.equals(e.center)===!0?Jo.set(0,0,1).multiplyScalar(e.radius):Jo.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(ep.copy(e.center).add(Jo)),this.expandByPoint(ep.copy(e.center).sub(Jo)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Hn=new U,xu=new U,ea=new U,hi=new U,yu=new U,ta=new U,Su=new U;class L1{constructor(e=new U,n=new U(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Hn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Hn.copy(this.direction).multiplyScalar(n).add(this.origin),Hn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){xu.copy(e).add(n).multiplyScalar(.5),ea.copy(n).sub(e).normalize(),hi.copy(this.origin).sub(xu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(ea),a=hi.dot(this.direction),l=-hi.dot(ea),u=hi.lengthSq(),c=Math.abs(1-o*o);let f,d,g,_;if(c>0)if(f=o*l-a,d=o*a-l,_=s*c,f>=0)if(d>=-_)if(d<=_){const p=1/c;f*=p,d*=p,g=f*(f+o*d+2*a)+d*(o*f+d+2*l)+u}else d=s,f=Math.max(0,-(o*d+a)),g=-f*f+d*(d+2*l)+u;else d=-s,f=Math.max(0,-(o*d+a)),g=-f*f+d*(d+2*l)+u;else d<=-_?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),g=-f*f+d*(d+2*l)+u):d<=_?(f=0,d=Math.min(Math.max(-s,-l),s),g=d*(d+2*l)+u):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),g=-f*f+d*(d+2*l)+u);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),g=-f*f+d*(d+2*l)+u;return i&&i.copy(this.direction).multiplyScalar(f).add(this.origin),r&&r.copy(ea).multiplyScalar(d).add(xu),g}intersectSphere(e,n){Hn.subVectors(e.center,this.origin);const i=Hn.dot(this.direction),r=Hn.dot(Hn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return a<0&&l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),c>=0?(s=(e.min.y-d.y)*c,o=(e.max.y-d.y)*c):(s=(e.max.y-d.y)*c,o=(e.min.y-d.y)*c),i>o||s>r||((s>i||i!==i)&&(i=s),(o<r||r!==r)&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Hn)!==null}intersectTriangle(e,n,i,r,s){yu.subVectors(n,e),ta.subVectors(i,e),Su.crossVectors(yu,ta);let o=this.direction.dot(Su),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;hi.subVectors(this.origin,e);const l=a*this.direction.dot(ta.crossVectors(hi,ta));if(l<0)return null;const u=a*this.direction.dot(yu.cross(hi));if(u<0||l+u>o)return null;const c=-a*hi.dot(Su);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _t{constructor(){_t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,n,i,r,s,o,a,l,u,c,f,d,g,_,p,h){const m=this.elements;return m[0]=e,m[4]=n,m[8]=i,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=u,m[6]=c,m[10]=f,m[14]=d,m[3]=g,m[7]=_,m[11]=p,m[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _t().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Cr.setFromMatrixColumn(e,0).length(),s=1/Cr.setFromMatrixColumn(e,1).length(),o=1/Cr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*c,g=o*f,_=a*c,p=a*f;n[0]=l*c,n[4]=-l*f,n[8]=u,n[1]=g+_*u,n[5]=d-p*u,n[9]=-a*l,n[2]=p-d*u,n[6]=_+g*u,n[10]=o*l}else if(e.order==="YXZ"){const d=l*c,g=l*f,_=u*c,p=u*f;n[0]=d+p*a,n[4]=_*a-g,n[8]=o*u,n[1]=o*f,n[5]=o*c,n[9]=-a,n[2]=g*a-_,n[6]=p+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*c,g=l*f,_=u*c,p=u*f;n[0]=d-p*a,n[4]=-o*f,n[8]=_+g*a,n[1]=g+_*a,n[5]=o*c,n[9]=p-d*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*c,g=o*f,_=a*c,p=a*f;n[0]=l*c,n[4]=_*u-g,n[8]=d*u+p,n[1]=l*f,n[5]=p*u+d,n[9]=g*u-_,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,g=o*u,_=a*l,p=a*u;n[0]=l*c,n[4]=p-d*f,n[8]=_*f+g,n[1]=f,n[5]=o*c,n[9]=-a*c,n[2]=-u*c,n[6]=g*f+_,n[10]=d-p*f}else if(e.order==="XZY"){const d=o*l,g=o*u,_=a*l,p=a*u;n[0]=l*c,n[4]=-f,n[8]=u*c,n[1]=d*f+p,n[5]=o*c,n[9]=g*f-_,n[2]=_*f-g,n[6]=a*c,n[10]=p*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(R1,e,P1)}lookAt(e,n,i){const r=this.elements;return Ht.subVectors(e,n),Ht.lengthSq()===0&&(Ht.z=1),Ht.normalize(),pi.crossVectors(i,Ht),pi.lengthSq()===0&&(Math.abs(i.z)===1?Ht.x+=1e-4:Ht.z+=1e-4,Ht.normalize(),pi.crossVectors(i,Ht)),pi.normalize(),na.crossVectors(Ht,pi),r[0]=pi.x,r[4]=na.x,r[8]=Ht.x,r[1]=pi.y,r[5]=na.y,r[9]=Ht.y,r[2]=pi.z,r[6]=na.z,r[10]=Ht.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],f=i[5],d=i[9],g=i[13],_=i[2],p=i[6],h=i[10],m=i[14],v=i[3],y=i[7],S=i[11],M=i[15],T=r[0],A=r[4],x=r[8],L=r[12],D=r[1],N=r[5],Q=r[9],J=r[13],k=r[2],q=r[6],V=r[10],K=r[14],C=r[3],b=r[7],P=r[11],z=r[15];return s[0]=o*T+a*D+l*k+u*C,s[4]=o*A+a*N+l*q+u*b,s[8]=o*x+a*Q+l*V+u*P,s[12]=o*L+a*J+l*K+u*z,s[1]=c*T+f*D+d*k+g*C,s[5]=c*A+f*N+d*q+g*b,s[9]=c*x+f*Q+d*V+g*P,s[13]=c*L+f*J+d*K+g*z,s[2]=_*T+p*D+h*k+m*C,s[6]=_*A+p*N+h*q+m*b,s[10]=_*x+p*Q+h*V+m*P,s[14]=_*L+p*J+h*K+m*z,s[3]=v*T+y*D+S*k+M*C,s[7]=v*A+y*N+S*q+M*b,s[11]=v*x+y*Q+S*V+M*P,s[15]=v*L+y*J+S*K+M*z,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],f=e[6],d=e[10],g=e[14],_=e[3],p=e[7],h=e[11],m=e[15];return _*(+s*l*f-r*u*f-s*a*d+i*u*d+r*a*g-i*l*g)+p*(+n*l*g-n*u*d+s*o*d-r*o*g+r*u*c-s*l*c)+h*(+n*u*f-n*a*g-s*o*f+i*o*g+s*a*c-i*u*c)+m*(-r*a*c-n*l*f+n*a*d+r*o*f-i*o*d+i*l*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=e[9],d=e[10],g=e[11],_=e[12],p=e[13],h=e[14],m=e[15],v=f*h*u-p*d*u+p*l*g-a*h*g-f*l*m+a*d*m,y=_*d*u-c*h*u-_*l*g+o*h*g+c*l*m-o*d*m,S=c*p*u-_*f*u+_*a*g-o*p*g-c*a*m+o*f*m,M=_*f*l-c*p*l-_*a*d+o*p*d+c*a*h-o*f*h,T=n*v+i*y+r*S+s*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=v*A,e[1]=(p*d*s-f*h*s-p*r*g+i*h*g+f*r*m-i*d*m)*A,e[2]=(a*h*s-p*l*s+p*r*u-i*h*u-a*r*m+i*l*m)*A,e[3]=(f*l*s-a*d*s-f*r*u+i*d*u+a*r*g-i*l*g)*A,e[4]=y*A,e[5]=(c*h*s-_*d*s+_*r*g-n*h*g-c*r*m+n*d*m)*A,e[6]=(_*l*s-o*h*s-_*r*u+n*h*u+o*r*m-n*l*m)*A,e[7]=(o*d*s-c*l*s+c*r*u-n*d*u-o*r*g+n*l*g)*A,e[8]=S*A,e[9]=(_*f*s-c*p*s-_*i*g+n*p*g+c*i*m-n*f*m)*A,e[10]=(o*p*s-_*a*s+_*i*u-n*p*u-o*i*m+n*a*m)*A,e[11]=(c*a*s-o*f*s-c*i*u+n*f*u+o*i*g-n*a*g)*A,e[12]=M*A,e[13]=(c*p*r-_*f*r+_*i*d-n*p*d-c*i*h+n*f*h)*A,e[14]=(_*a*r-o*p*r-_*i*l+n*p*l+o*i*h-n*a*h)*A,e[15]=(o*f*r-c*a*r+c*i*l-n*f*l-o*i*d+n*a*d)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,c=o+o,f=a+a,d=s*u,g=s*c,_=s*f,p=o*c,h=o*f,m=a*f,v=l*u,y=l*c,S=l*f,M=i.x,T=i.y,A=i.z;return r[0]=(1-(p+m))*M,r[1]=(g+S)*M,r[2]=(_-y)*M,r[3]=0,r[4]=(g-S)*T,r[5]=(1-(d+m))*T,r[6]=(h+v)*T,r[7]=0,r[8]=(_+y)*A,r[9]=(h-v)*A,r[10]=(1-(d+p))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Cr.set(r[0],r[1],r[2]).length();const o=Cr.set(r[4],r[5],r[6]).length(),a=Cr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],gn.copy(this);const u=1/s,c=1/o,f=1/a;return gn.elements[0]*=u,gn.elements[1]*=u,gn.elements[2]*=u,gn.elements[4]*=c,gn.elements[5]*=c,gn.elements[6]*=c,gn.elements[8]*=f,gn.elements[9]*=f,gn.elements[10]*=f,n.setFromRotationMatrix(gn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o){const a=this.elements,l=2*s/(n-e),u=2*s/(i-r),c=(n+e)/(n-e),f=(i+r)/(i-r),d=-(o+s)/(o-s),g=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=c,a[12]=0,a[1]=0,a[5]=u,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=g,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,n,i,r,s,o){const a=this.elements,l=1/(n-e),u=1/(i-r),c=1/(o-s),f=(n+e)*l,d=(i+r)*u,g=(o+s)*c;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*u,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*c,a[14]=-g,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Cr=new U,gn=new _t,R1=new U(0,0,0),P1=new U(1,1,1),pi=new U,na=new U,Ht=new U,tp=new _t,np=new To;class Ao{constructor(e=0,n=0,i=0,r=Ao.DefaultOrder){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],f=r[2],d=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(Xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Xt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Xt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Xt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-Xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return tp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(tp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return np.setFromEuler(this),this.setFromQuaternion(np,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Ao.DefaultOrder="XYZ";Ao.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class xv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let D1=0;const ip=new U,Ar=new To,Wn=new _t,ia=new U,Fs=new U,I1=new U,k1=new To,rp=new U(1,0,0),sp=new U(0,1,0),op=new U(0,0,1),N1={type:"added"},ap={type:"removed"};class Cn extends ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:D1++}),this.uuid=bo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Cn.DefaultUp.clone();const e=new U,n=new Ao,i=new To,r=new U(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new _t},normalMatrix:{value:new an}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=Cn.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new xv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ar.setFromAxisAngle(e,n),this.quaternion.multiply(Ar),this}rotateOnWorldAxis(e,n){return Ar.setFromAxisAngle(e,n),this.quaternion.premultiply(Ar),this}rotateX(e){return this.rotateOnAxis(rp,e)}rotateY(e){return this.rotateOnAxis(sp,e)}rotateZ(e){return this.rotateOnAxis(op,e)}translateOnAxis(e,n){return ip.copy(e).applyQuaternion(this.quaternion),this.position.add(ip.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(rp,e)}translateY(e){return this.translateOnAxis(sp,e)}translateZ(e){return this.translateOnAxis(op,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Wn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ia.copy(e):ia.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Fs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wn.lookAt(Fs,ia,this.up):Wn.lookAt(ia,Fs,this.up),this.quaternion.setFromRotationMatrix(Wn),r&&(Wn.extractRotation(r.matrixWorld),Ar.setFromRotationMatrix(Wn),this.quaternion.premultiply(Ar.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(N1)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(ap)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const n=this.children[e];n.parent=null,n.dispatchEvent(ap)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Wn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,e,I1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,k1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),f=o(e.shapes),d=o(e.skeletons),g=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),g.length>0&&(i.animations=g),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Cn.DefaultUp=new U(0,1,0);Cn.DefaultMatrixAutoUpdate=!0;const vn=new U,jn=new U,Mu=new U,$n=new U,Lr=new U,Rr=new U,lp=new U,wu=new U,Eu=new U,bu=new U;class Kn{constructor(e=new U,n=new U,i=new U){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),vn.subVectors(e,n),r.cross(vn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){vn.subVectors(r,n),jn.subVectors(i,n),Mu.subVectors(e,n);const o=vn.dot(vn),a=vn.dot(jn),l=vn.dot(Mu),u=jn.dot(jn),c=jn.dot(Mu),f=o*u-a*a;if(f===0)return s.set(-2,-1,-1);const d=1/f,g=(u*l-a*c)*d,_=(o*c-a*l)*d;return s.set(1-g-_,_,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,$n),$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getUV(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,$n),l.set(0,0),l.addScaledVector(s,$n.x),l.addScaledVector(o,$n.y),l.addScaledVector(a,$n.z),l}static isFrontFacing(e,n,i,r){return vn.subVectors(i,n),jn.subVectors(e,n),vn.cross(jn).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vn.subVectors(this.c,this.b),jn.subVectors(this.a,this.b),vn.cross(jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Kn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Kn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return Kn.getUV(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Kn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Kn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Lr.subVectors(r,i),Rr.subVectors(s,i),wu.subVectors(e,i);const l=Lr.dot(wu),u=Rr.dot(wu);if(l<=0&&u<=0)return n.copy(i);Eu.subVectors(e,r);const c=Lr.dot(Eu),f=Rr.dot(Eu);if(c>=0&&f<=c)return n.copy(r);const d=l*f-c*u;if(d<=0&&l>=0&&c<=0)return o=l/(l-c),n.copy(i).addScaledVector(Lr,o);bu.subVectors(e,s);const g=Lr.dot(bu),_=Rr.dot(bu);if(_>=0&&g<=_)return n.copy(s);const p=g*u-l*_;if(p<=0&&u>=0&&_<=0)return a=u/(u-_),n.copy(i).addScaledVector(Rr,a);const h=c*_-g*f;if(h<=0&&f-c>=0&&g-_>=0)return lp.subVectors(s,r),a=(f-c)/(f-c+(g-_)),n.copy(r).addScaledVector(lp,a);const m=1/(h+p+d);return o=p*m,a=d*m,n.copy(i).addScaledVector(Lr,o).addScaledVector(Rr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let F1=0;class Sl extends ws{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:F1++}),this.uuid=bo(),this.name="",this.type="Material",this.blending=rs,this.side=vo,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=uv,this.blendDst=cv,this.blendEquation=Or,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Oc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=E1,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=uu,this.stencilZFail=uu,this.stencilZPass=uu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn("THREE.Material: '"+n+"' parameter is undefined.");continue}if(n==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=i===PS;continue}const r=this[n];if(r===void 0){console.warn("THREE."+this.type+": '"+n+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==rs&&(i.blending=this.blending),this.side!==vo&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Xf extends Sl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=fv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const rt=new U,ra=new Ue;class Un{constructor(e,n,i){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i===!0,this.usage=Yh,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const n=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",r),o=new Ge),n[i++]=o.r,n[i++]=o.g,n[i++]=o.b}return this}copyVector2sArray(e){const n=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",r),o=new Ue),n[i++]=o.x,n[i++]=o.y}return this}copyVector3sArray(e){const n=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",r),o=new U),n[i++]=o.x,n[i++]=o.y,n[i++]=o.z}return this}copyVector4sArray(e){const n=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",r),o=new ot),n[i++]=o.x,n[i++]=o.y,n[i++]=o.z,n[i++]=o.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ra.fromBufferAttribute(this,n),ra.applyMatrix3(e),this.setXY(n,ra.x,ra.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)rt.fromBufferAttribute(this,n),rt.applyMatrix3(e),this.setXYZ(n,rt.x,rt.y,rt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)rt.fromBufferAttribute(this,n),rt.applyMatrix4(e),this.setXYZ(n,rt.x,rt.y,rt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)rt.fromBufferAttribute(this,n),rt.applyNormalMatrix(e),this.setXYZ(n,rt.x,rt.y,rt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)rt.fromBufferAttribute(this,n),rt.transformDirection(e),this.setXYZ(n,rt.x,rt.y,rt.z);return this}set(e,n=0){return this.array.set(e,n),this}getX(e){return this.array[e*this.itemSize]}setX(e,n){return this.array[e*this.itemSize]=n,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,n){return this.array[e*this.itemSize+1]=n,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,n){return this.array[e*this.itemSize+2]=n,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,n){return this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Yh&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class yv extends Un{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Sv extends Un{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class or extends Un{constructor(e,n,i){super(new Float32Array(e),n,i)}}let z1=0;const nn=new _t,Tu=new Cn,Pr=new U,Wt=new Co,zs=new Co,ft=new U;class _r extends ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:z1++}),this.uuid=bo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(pv(e)?Sv:yv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new an().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return nn.makeRotationFromQuaternion(e),this.applyMatrix4(nn),this}rotateX(e){return nn.makeRotationX(e),this.applyMatrix4(nn),this}rotateY(e){return nn.makeRotationY(e),this.applyMatrix4(nn),this}rotateZ(e){return nn.makeRotationZ(e),this.applyMatrix4(nn),this}translate(e,n,i){return nn.makeTranslation(e,n,i),this.applyMatrix4(nn),this}scale(e,n,i){return nn.makeScale(e,n,i),this.applyMatrix4(nn),this}lookAt(e){return Tu.lookAt(e),Tu.updateMatrix(),this.applyMatrix4(Tu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pr).negate(),this.translate(Pr.x,Pr.y,Pr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new or(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Co);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Wt.setFromBufferAttribute(s),this.morphTargetsRelative?(ft.addVectors(this.boundingBox.min,Wt.min),this.boundingBox.expandByPoint(ft),ft.addVectors(this.boundingBox.max,Wt.max),this.boundingBox.expandByPoint(ft)):(this.boundingBox.expandByPoint(Wt.min),this.boundingBox.expandByPoint(Wt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $f);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(Wt.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];zs.setFromBufferAttribute(a),this.morphTargetsRelative?(ft.addVectors(Wt.min,zs.min),Wt.expandByPoint(ft),ft.addVectors(Wt.max,zs.max),Wt.expandByPoint(ft)):(Wt.expandByPoint(zs.min),Wt.expandByPoint(zs.max))}Wt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)ft.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(ft));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)ft.fromBufferAttribute(a,u),l&&(Pr.fromBufferAttribute(e,u),ft.add(Pr)),r=Math.max(r,i.distanceToSquared(ft))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Un(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let D=0;D<a;D++)u[D]=new U,c[D]=new U;const f=new U,d=new U,g=new U,_=new Ue,p=new Ue,h=new Ue,m=new U,v=new U;function y(D,N,Q){f.fromArray(r,D*3),d.fromArray(r,N*3),g.fromArray(r,Q*3),_.fromArray(o,D*2),p.fromArray(o,N*2),h.fromArray(o,Q*2),d.sub(f),g.sub(f),p.sub(_),h.sub(_);const J=1/(p.x*h.y-h.x*p.y);!isFinite(J)||(m.copy(d).multiplyScalar(h.y).addScaledVector(g,-p.y).multiplyScalar(J),v.copy(g).multiplyScalar(p.x).addScaledVector(d,-h.x).multiplyScalar(J),u[D].add(m),u[N].add(m),u[Q].add(m),c[D].add(v),c[N].add(v),c[Q].add(v))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let D=0,N=S.length;D<N;++D){const Q=S[D],J=Q.start,k=Q.count;for(let q=J,V=J+k;q<V;q+=3)y(i[q+0],i[q+1],i[q+2])}const M=new U,T=new U,A=new U,x=new U;function L(D){A.fromArray(s,D*3),x.copy(A);const N=u[D];M.copy(N),M.sub(A.multiplyScalar(A.dot(N))).normalize(),T.crossVectors(x,N);const J=T.dot(c[D])<0?-1:1;l[D*4]=M.x,l[D*4+1]=M.y,l[D*4+2]=M.z,l[D*4+3]=J}for(let D=0,N=S.length;D<N;++D){const Q=S[D],J=Q.start,k=Q.count;for(let q=J,V=J+k;q<V;q+=3)L(i[q+0]),L(i[q+1]),L(i[q+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Un(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,g=i.count;d<g;d++)i.setXYZ(d,0,0,0);const r=new U,s=new U,o=new U,a=new U,l=new U,u=new U,c=new U,f=new U;if(e)for(let d=0,g=e.count;d<g;d+=3){const _=e.getX(d+0),p=e.getX(d+1),h=e.getX(d+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,p),o.fromBufferAttribute(n,h),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,p),u.fromBufferAttribute(i,h),a.add(c),l.add(c),u.add(c),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(p,l.x,l.y,l.z),i.setXYZ(h,u.x,u.y,u.z)}else for(let d=0,g=n.count;d<g;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(e,n){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}n===void 0&&(n=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const i=this.attributes;for(const r in i){if(e.attributes[r]===void 0)continue;const o=i[r].array,a=e.attributes[r],l=a.array,u=a.itemSize*n,c=Math.min(l.length,o.length-u);for(let f=0,d=u;f<c;f++,d++)o[d]=l[f]}return this}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)ft.fromBufferAttribute(e,n),ft.normalize(),e.setXYZ(n,ft.x,ft.y,ft.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,f=a.normalized,d=new u.constructor(l.length*c);let g=0,_=0;for(let p=0,h=l.length;p<h;p++){a.isInterleavedBufferAttribute?g=l[p]*a.data.stride+a.offset:g=l[p]*c;for(let m=0;m<c;m++)d[_++]=u[g++]}return new Un(d,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new _r,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,f=u.length;c<f;c++){const d=u[c],g=e(d,i);l.push(g)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,d=u.length;f<d;f++){const g=u[f];c.push(g.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const s=e.morphAttributes;for(const u in s){const c=[],f=s[u];for(let d=0,g=f.length;d<g;d++)c.push(f[d].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const up=new _t,Dr=new L1,Cu=new $f,mi=new U,gi=new U,vi=new U,Au=new U,Lu=new U,Ru=new U,sa=new U,oa=new U,aa=new U,la=new Ue,ua=new Ue,ca=new Ue,Pu=new U,fa=new U;class Jn extends Cn{constructor(e=new _r,n=new Xf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),Cu.copy(i.boundingSphere),Cu.applyMatrix4(s),e.ray.intersectsSphere(Cu)===!1)||(up.copy(s).invert(),Dr.copy(e.ray).applyMatrix4(up),i.boundingBox!==null&&Dr.intersectsBox(i.boundingBox)===!1))return;let o;const a=i.index,l=i.attributes.position,u=i.morphAttributes.position,c=i.morphTargetsRelative,f=i.attributes.uv,d=i.attributes.uv2,g=i.groups,_=i.drawRange;if(a!==null)if(Array.isArray(r))for(let p=0,h=g.length;p<h;p++){const m=g[p],v=r[m.materialIndex],y=Math.max(m.start,_.start),S=Math.min(a.count,Math.min(m.start+m.count,_.start+_.count));for(let M=y,T=S;M<T;M+=3){const A=a.getX(M),x=a.getX(M+1),L=a.getX(M+2);o=da(this,v,e,Dr,l,u,c,f,d,A,x,L),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=m.materialIndex,n.push(o))}}else{const p=Math.max(0,_.start),h=Math.min(a.count,_.start+_.count);for(let m=p,v=h;m<v;m+=3){const y=a.getX(m),S=a.getX(m+1),M=a.getX(m+2);o=da(this,r,e,Dr,l,u,c,f,d,y,S,M),o&&(o.faceIndex=Math.floor(m/3),n.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let p=0,h=g.length;p<h;p++){const m=g[p],v=r[m.materialIndex],y=Math.max(m.start,_.start),S=Math.min(l.count,Math.min(m.start+m.count,_.start+_.count));for(let M=y,T=S;M<T;M+=3){const A=M,x=M+1,L=M+2;o=da(this,v,e,Dr,l,u,c,f,d,A,x,L),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=m.materialIndex,n.push(o))}}else{const p=Math.max(0,_.start),h=Math.min(l.count,_.start+_.count);for(let m=p,v=h;m<v;m+=3){const y=m,S=m+1,M=m+2;o=da(this,r,e,Dr,l,u,c,f,d,y,S,M),o&&(o.faceIndex=Math.floor(m/3),n.push(o))}}}}function O1(t,e,n,i,r,s,o,a){let l;if(e.side===bn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side!==ps,a),l===null)return null;fa.copy(a),fa.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(fa);return u<n.near||u>n.far?null:{distance:u,point:fa.clone(),object:t}}function da(t,e,n,i,r,s,o,a,l,u,c,f){mi.fromBufferAttribute(r,u),gi.fromBufferAttribute(r,c),vi.fromBufferAttribute(r,f);const d=t.morphTargetInfluences;if(s&&d){sa.set(0,0,0),oa.set(0,0,0),aa.set(0,0,0);for(let _=0,p=s.length;_<p;_++){const h=d[_],m=s[_];h!==0&&(Au.fromBufferAttribute(m,u),Lu.fromBufferAttribute(m,c),Ru.fromBufferAttribute(m,f),o?(sa.addScaledVector(Au,h),oa.addScaledVector(Lu,h),aa.addScaledVector(Ru,h)):(sa.addScaledVector(Au.sub(mi),h),oa.addScaledVector(Lu.sub(gi),h),aa.addScaledVector(Ru.sub(vi),h)))}mi.add(sa),gi.add(oa),vi.add(aa)}t.isSkinnedMesh&&(t.boneTransform(u,mi),t.boneTransform(c,gi),t.boneTransform(f,vi));const g=O1(t,e,n,i,mi,gi,vi,Pu);if(g){a&&(la.fromBufferAttribute(a,u),ua.fromBufferAttribute(a,c),ca.fromBufferAttribute(a,f),g.uv=Kn.getUV(Pu,mi,gi,vi,la,ua,ca,new Ue)),l&&(la.fromBufferAttribute(l,u),ua.fromBufferAttribute(l,c),ca.fromBufferAttribute(l,f),g.uv2=Kn.getUV(Pu,mi,gi,vi,la,ua,ca,new Ue));const _={a:u,b:c,c:f,normal:new U,materialIndex:0};Kn.getNormal(mi,gi,vi,_.normal),g.face=_}return g}class Lo extends _r{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],f=[];let d=0,g=0;_("z","y","x",-1,-1,i,n,e,o,s,0),_("z","y","x",1,-1,i,n,-e,o,s,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new or(u,3)),this.setAttribute("normal",new or(c,3)),this.setAttribute("uv",new or(f,2));function _(p,h,m,v,y,S,M,T,A,x,L){const D=S/A,N=M/x,Q=S/2,J=M/2,k=T/2,q=A+1,V=x+1;let K=0,C=0;const b=new U;for(let P=0;P<V;P++){const z=P*N-J;for(let F=0;F<q;F++){const X=F*D-Q;b[p]=X*v,b[h]=z*y,b[m]=k,u.push(b.x,b.y,b.z),b[p]=0,b[h]=0,b[m]=T>0?1:-1,c.push(b.x,b.y,b.z),f.push(F/A),f.push(1-P/x),K+=1}}for(let P=0;P<x;P++)for(let z=0;z<A;z++){const F=d+z+q*P,X=d+z+q*(P+1),te=d+(z+1)+q*(P+1),fe=d+(z+1)+q*P;l.push(F,X,fe),l.push(X,te,fe),C+=6}a.addGroup(g,C,L),g+=C,d+=K}}static fromJSON(e){return new Lo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function _s(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function wt(t){const e={};for(let n=0;n<t.length;n++){const i=_s(t[n]);for(const r in i)e[r]=i[r]}return e}function U1(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}const B1={clone:_s,merge:wt};var G1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,V1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ni extends Sl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=G1,this.fragmentShader=V1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_s(e.uniforms),this.uniformsGroups=U1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Mv extends Cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Sn extends Mv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Zh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(cu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zh*2*Math.atan(Math.tan(cu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(cu*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ir=90,kr=1;class H1 extends Cn{constructor(e,n,i){if(super(),this.type="CubeCamera",i.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=i;const r=new Sn(Ir,kr,e,n);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new U(1,0,0)),this.add(r);const s=new Sn(Ir,kr,e,n);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new U(-1,0,0)),this.add(s);const o=new Sn(Ir,kr,e,n);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new U(0,1,0)),this.add(o);const a=new Sn(Ir,kr,e,n);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new U(0,-1,0)),this.add(a);const l=new Sn(Ir,kr,e,n);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new U(0,0,1)),this.add(l);const u=new Sn(Ir,kr,e,n);u.layers=this.layers,u.up.set(0,-1,0),u.lookAt(new U(0,0,-1)),this.add(u)}update(e,n){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,o,a,l,u]=this.children,c=e.getRenderTarget(),f=e.toneMapping,d=e.xr.enabled;e.toneMapping=ti,e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(n,r),e.setRenderTarget(i,1),e.render(n,s),e.setRenderTarget(i,2),e.render(n,o),e.setRenderTarget(i,3),e.render(n,a),e.setRenderTarget(i,4),e.render(n,l),i.texture.generateMipmaps=g,e.setRenderTarget(i,5),e.render(n,u),e.setRenderTarget(c),e.toneMapping=f,e.xr.enabled=d,i.texture.needsPMREMUpdate=!0}}class wv extends Zt{constructor(e,n,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],n=n!==void 0?n:ms,super(e,n,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class W1 extends pr{constructor(e,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new wv(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ft}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.encoding=n.encoding,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Lo(5,5,5),s=new Ni({name:"CubemapFromEquirect",uniforms:_s(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:bn,blending:Di});s.uniforms.tEquirect.value=n;const o=new Jn(r,s),a=n.minFilter;return n.minFilter===yl&&(n.minFilter=Ft),new H1(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Du=new U,j1=new U,$1=new an;class $i{constructor(e=new U(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Du.subVectors(i,n).cross(j1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,n){const i=e.delta(Du),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||$1.getNormalMatrix(e),r=this.coplanarPoint(Du).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Nr=new $f,ha=new U;class Ev{constructor(e=new $i,n=new $i,i=new $i,r=new $i,s=new $i,o=new $i){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const n=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],l=i[4],u=i[5],c=i[6],f=i[7],d=i[8],g=i[9],_=i[10],p=i[11],h=i[12],m=i[13],v=i[14],y=i[15];return n[0].setComponents(a-r,f-l,p-d,y-h).normalize(),n[1].setComponents(a+r,f+l,p+d,y+h).normalize(),n[2].setComponents(a+s,f+u,p+g,y+m).normalize(),n[3].setComponents(a-s,f-u,p-g,y-m).normalize(),n[4].setComponents(a-o,f-c,p-_,y-v).normalize(),n[5].setComponents(a+o,f+c,p+_,y+v).normalize(),this}intersectsObject(e){const n=e.geometry;return n.boundingSphere===null&&n.computeBoundingSphere(),Nr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Nr)}intersectsSprite(e){return Nr.center.set(0,0,0),Nr.radius=.7071067811865476,Nr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Nr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(ha.x=r.normal.x>0?e.max.x:e.min.x,ha.y=r.normal.y>0?e.max.y:e.min.y,ha.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ha)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function bv(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function X1(t,e){const n=e.isWebGL2,i=new WeakMap;function r(u,c){const f=u.array,d=u.usage,g=t.createBuffer();t.bindBuffer(c,g),t.bufferData(c,f,d),u.onUploadCallback();let _;if(f instanceof Float32Array)_=5126;else if(f instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)_=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=5123;else if(f instanceof Int16Array)_=5122;else if(f instanceof Uint32Array)_=5125;else if(f instanceof Int32Array)_=5124;else if(f instanceof Int8Array)_=5120;else if(f instanceof Uint8Array)_=5121;else if(f instanceof Uint8ClampedArray)_=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version}}function s(u,c,f){const d=c.array,g=c.updateRange;t.bindBuffer(f,u),g.count===-1?t.bufferSubData(f,0,d):(n?t.bufferSubData(f,g.offset*d.BYTES_PER_ELEMENT,d,g.offset,g.count):t.bufferSubData(f,g.offset*d.BYTES_PER_ELEMENT,d.subarray(g.offset,g.offset+g.count)),g.count=-1)}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(t.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const d=i.get(u);(!d||d.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);f===void 0?i.set(u,r(u,c)):f.version<u.version&&(s(f.buffer,u,c),f.version=u.version)}return{get:o,remove:a,update:l}}class Ml extends _r{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,f=e/a,d=n/l,g=[],_=[],p=[],h=[];for(let m=0;m<c;m++){const v=m*d-o;for(let y=0;y<u;y++){const S=y*f-s;_.push(S,-v,0),p.push(0,0,1),h.push(y/a),h.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<a;v++){const y=v+u*m,S=v+u*(m+1),M=v+1+u*(m+1),T=v+1+u*m;g.push(y,S,T),g.push(S,M,T)}this.setIndex(g),this.setAttribute("position",new or(_,3)),this.setAttribute("normal",new or(p,3)),this.setAttribute("uv",new or(h,2))}static fromJSON(e){return new Ml(e.width,e.height,e.widthSegments,e.heightSegments)}}var q1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Y1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,K1=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Z1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Q1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,J1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,eM="vec3 transformed = vec3( position );",tM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nM=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,iM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,rM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,sM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,oM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,aM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,uM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,dM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,hM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,pM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,mM=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,gM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,_M=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yM="gl_FragColor = linearToOutputTexel( gl_FragColor );",SM=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,MM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,wM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,EM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,bM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,TM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,CM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,AM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,LM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,RM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,PM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,DM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,IM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kM=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,NM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,FM=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,zM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,OM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,UM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,BM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,GM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,VM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,HM=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,WM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,jM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,$M=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,XM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,YM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,KM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ZM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,QM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,JM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ew=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nw=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,iw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,rw=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,sw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,ow=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,aw=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,lw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,dw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,hw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,pw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,mw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,_w=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ww=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ew=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,bw=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Tw=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Cw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Aw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Rw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Dw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Iw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Nw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fw=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,zw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Ow=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Uw=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Bw=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Gw=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Vw=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Hw=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Ww=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$w=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Xw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qw=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Yw=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Kw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Zw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Qw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Jw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,eE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,tE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,iE=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,rE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sE=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oE=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,lE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,cE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,fE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,pE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,_E=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xE=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,SE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ME=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ce={alphamap_fragment:q1,alphamap_pars_fragment:Y1,alphatest_fragment:K1,alphatest_pars_fragment:Z1,aomap_fragment:Q1,aomap_pars_fragment:J1,begin_vertex:eM,beginnormal_vertex:tM,bsdfs:nM,iridescence_fragment:iM,bumpmap_pars_fragment:rM,clipping_planes_fragment:sM,clipping_planes_pars_fragment:oM,clipping_planes_pars_vertex:aM,clipping_planes_vertex:lM,color_fragment:uM,color_pars_fragment:cM,color_pars_vertex:fM,color_vertex:dM,common:hM,cube_uv_reflection_fragment:pM,defaultnormal_vertex:mM,displacementmap_pars_vertex:gM,displacementmap_vertex:vM,emissivemap_fragment:_M,emissivemap_pars_fragment:xM,encodings_fragment:yM,encodings_pars_fragment:SM,envmap_fragment:MM,envmap_common_pars_fragment:wM,envmap_pars_fragment:EM,envmap_pars_vertex:bM,envmap_physical_pars_fragment:FM,envmap_vertex:TM,fog_vertex:CM,fog_pars_vertex:AM,fog_fragment:LM,fog_pars_fragment:RM,gradientmap_pars_fragment:PM,lightmap_fragment:DM,lightmap_pars_fragment:IM,lights_lambert_vertex:kM,lights_pars_begin:NM,lights_toon_fragment:zM,lights_toon_pars_fragment:OM,lights_phong_fragment:UM,lights_phong_pars_fragment:BM,lights_physical_fragment:GM,lights_physical_pars_fragment:VM,lights_fragment_begin:HM,lights_fragment_maps:WM,lights_fragment_end:jM,logdepthbuf_fragment:$M,logdepthbuf_pars_fragment:XM,logdepthbuf_pars_vertex:qM,logdepthbuf_vertex:YM,map_fragment:KM,map_pars_fragment:ZM,map_particle_fragment:QM,map_particle_pars_fragment:JM,metalnessmap_fragment:ew,metalnessmap_pars_fragment:tw,morphcolor_vertex:nw,morphnormal_vertex:iw,morphtarget_pars_vertex:rw,morphtarget_vertex:sw,normal_fragment_begin:ow,normal_fragment_maps:aw,normal_pars_fragment:lw,normal_pars_vertex:uw,normal_vertex:cw,normalmap_pars_fragment:fw,clearcoat_normal_fragment_begin:dw,clearcoat_normal_fragment_maps:hw,clearcoat_pars_fragment:pw,iridescence_pars_fragment:mw,output_fragment:gw,packing:vw,premultiplied_alpha_fragment:_w,project_vertex:xw,dithering_fragment:yw,dithering_pars_fragment:Sw,roughnessmap_fragment:Mw,roughnessmap_pars_fragment:ww,shadowmap_pars_fragment:Ew,shadowmap_pars_vertex:bw,shadowmap_vertex:Tw,shadowmask_pars_fragment:Cw,skinbase_vertex:Aw,skinning_pars_vertex:Lw,skinning_vertex:Rw,skinnormal_vertex:Pw,specularmap_fragment:Dw,specularmap_pars_fragment:Iw,tonemapping_fragment:kw,tonemapping_pars_fragment:Nw,transmission_fragment:Fw,transmission_pars_fragment:zw,uv_pars_fragment:Ow,uv_pars_vertex:Uw,uv_vertex:Bw,uv2_pars_fragment:Gw,uv2_pars_vertex:Vw,uv2_vertex:Hw,worldpos_vertex:Ww,background_vert:jw,background_frag:$w,cube_vert:Xw,cube_frag:qw,depth_vert:Yw,depth_frag:Kw,distanceRGBA_vert:Zw,distanceRGBA_frag:Qw,equirect_vert:Jw,equirect_frag:eE,linedashed_vert:tE,linedashed_frag:nE,meshbasic_vert:iE,meshbasic_frag:rE,meshlambert_vert:sE,meshlambert_frag:oE,meshmatcap_vert:aE,meshmatcap_frag:lE,meshnormal_vert:uE,meshnormal_frag:cE,meshphong_vert:fE,meshphong_frag:dE,meshphysical_vert:hE,meshphysical_frag:pE,meshtoon_vert:mE,meshtoon_frag:gE,points_vert:vE,points_frag:_E,shadow_vert:xE,shadow_frag:yE,sprite_vert:SE,sprite_frag:ME},ie={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new an},uv2Transform:{value:new an},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new an}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new an}}},In={basic:{uniforms:wt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:Ce.meshbasic_vert,fragmentShader:Ce.meshbasic_frag},lambert:{uniforms:wt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.fog,ie.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Ce.meshlambert_vert,fragmentShader:Ce.meshlambert_frag},phong:{uniforms:wt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:Ce.meshphong_vert,fragmentShader:Ce.meshphong_frag},standard:{uniforms:wt([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ce.meshphysical_vert,fragmentShader:Ce.meshphysical_frag},toon:{uniforms:wt([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Ce.meshtoon_vert,fragmentShader:Ce.meshtoon_frag},matcap:{uniforms:wt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:Ce.meshmatcap_vert,fragmentShader:Ce.meshmatcap_frag},points:{uniforms:wt([ie.points,ie.fog]),vertexShader:Ce.points_vert,fragmentShader:Ce.points_frag},dashed:{uniforms:wt([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ce.linedashed_vert,fragmentShader:Ce.linedashed_frag},depth:{uniforms:wt([ie.common,ie.displacementmap]),vertexShader:Ce.depth_vert,fragmentShader:Ce.depth_frag},normal:{uniforms:wt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:Ce.meshnormal_vert,fragmentShader:Ce.meshnormal_frag},sprite:{uniforms:wt([ie.sprite,ie.fog]),vertexShader:Ce.sprite_vert,fragmentShader:Ce.sprite_frag},background:{uniforms:{uvTransform:{value:new an},t2D:{value:null}},vertexShader:Ce.background_vert,fragmentShader:Ce.background_frag},cube:{uniforms:wt([ie.envmap,{opacity:{value:1}}]),vertexShader:Ce.cube_vert,fragmentShader:Ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ce.equirect_vert,fragmentShader:Ce.equirect_frag},distanceRGBA:{uniforms:wt([ie.common,ie.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ce.distanceRGBA_vert,fragmentShader:Ce.distanceRGBA_frag},shadow:{uniforms:wt([ie.lights,ie.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:Ce.shadow_vert,fragmentShader:Ce.shadow_frag}};In.physical={uniforms:wt([In.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ce.meshphysical_vert,fragmentShader:Ce.meshphysical_frag};function wE(t,e,n,i,r,s){const o=new Ge(0);let a=r===!0?0:1,l,u,c=null,f=0,d=null;function g(p,h){let m=!1,v=h.isScene===!0?h.background:null;v&&v.isTexture&&(v=e.get(v));const y=t.xr,S=y.getSession&&y.getSession();S&&S.environmentBlendMode==="additive"&&(v=null),v===null?_(o,a):v&&v.isColor&&(_(v,1),m=!0),(t.autoClear||m)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),v&&(v.isCubeTexture||v.mapping===xl)?(u===void 0&&(u=new Jn(new Lo(1,1,1),new Ni({name:"BackgroundCubeMaterial",uniforms:_s(In.cube.uniforms),vertexShader:In.cube.vertexShader,fragmentShader:In.cube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(M,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,(c!==v||f!==v.version||d!==t.toneMapping)&&(u.material.needsUpdate=!0,c=v,f=v.version,d=t.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Jn(new Ml(2,2),new Ni({name:"BackgroundMaterial",uniforms:_s(In.background.uniforms),vertexShader:In.background.vertexShader,fragmentShader:In.background.fragmentShader,side:vo,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(c!==v||f!==v.version||d!==t.toneMapping)&&(l.material.needsUpdate=!0,c=v,f=v.version,d=t.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function _(p,h){n.buffers.color.setClear(p.r,p.g,p.b,h,s)}return{getClearColor:function(){return o},setClearColor:function(p,h=1){o.set(p),a=h,_(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(p){a=p,_(o,a)},render:g}}function EE(t,e,n,i){const r=t.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=h(null);let u=l,c=!1;function f(k,q,V,K,C){let b=!1;if(o){const P=p(K,V,q);u!==P&&(u=P,g(u.object)),b=m(k,K,V,C),b&&v(k,K,V,C)}else{const P=q.wireframe===!0;(u.geometry!==K.id||u.program!==V.id||u.wireframe!==P)&&(u.geometry=K.id,u.program=V.id,u.wireframe=P,b=!0)}C!==null&&n.update(C,34963),(b||c)&&(c=!1,x(k,q,V,K),C!==null&&t.bindBuffer(34963,n.get(C).buffer))}function d(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function g(k){return i.isWebGL2?t.bindVertexArray(k):s.bindVertexArrayOES(k)}function _(k){return i.isWebGL2?t.deleteVertexArray(k):s.deleteVertexArrayOES(k)}function p(k,q,V){const K=V.wireframe===!0;let C=a[k.id];C===void 0&&(C={},a[k.id]=C);let b=C[q.id];b===void 0&&(b={},C[q.id]=b);let P=b[K];return P===void 0&&(P=h(d()),b[K]=P),P}function h(k){const q=[],V=[],K=[];for(let C=0;C<r;C++)q[C]=0,V[C]=0,K[C]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:V,attributeDivisors:K,object:k,attributes:{},index:null}}function m(k,q,V,K){const C=u.attributes,b=q.attributes;let P=0;const z=V.getAttributes();for(const F in z)if(z[F].location>=0){const te=C[F];let fe=b[F];if(fe===void 0&&(F==="instanceMatrix"&&k.instanceMatrix&&(fe=k.instanceMatrix),F==="instanceColor"&&k.instanceColor&&(fe=k.instanceColor)),te===void 0||te.attribute!==fe||fe&&te.data!==fe.data)return!0;P++}return u.attributesNum!==P||u.index!==K}function v(k,q,V,K){const C={},b=q.attributes;let P=0;const z=V.getAttributes();for(const F in z)if(z[F].location>=0){let te=b[F];te===void 0&&(F==="instanceMatrix"&&k.instanceMatrix&&(te=k.instanceMatrix),F==="instanceColor"&&k.instanceColor&&(te=k.instanceColor));const fe={};fe.attribute=te,te&&te.data&&(fe.data=te.data),C[F]=fe,P++}u.attributes=C,u.attributesNum=P,u.index=K}function y(){const k=u.newAttributes;for(let q=0,V=k.length;q<V;q++)k[q]=0}function S(k){M(k,0)}function M(k,q){const V=u.newAttributes,K=u.enabledAttributes,C=u.attributeDivisors;V[k]=1,K[k]===0&&(t.enableVertexAttribArray(k),K[k]=1),C[k]!==q&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](k,q),C[k]=q)}function T(){const k=u.newAttributes,q=u.enabledAttributes;for(let V=0,K=q.length;V<K;V++)q[V]!==k[V]&&(t.disableVertexAttribArray(V),q[V]=0)}function A(k,q,V,K,C,b){i.isWebGL2===!0&&(V===5124||V===5125)?t.vertexAttribIPointer(k,q,V,C,b):t.vertexAttribPointer(k,q,V,K,C,b)}function x(k,q,V,K){if(i.isWebGL2===!1&&(k.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const C=K.attributes,b=V.getAttributes(),P=q.defaultAttributeValues;for(const z in b){const F=b[z];if(F.location>=0){let X=C[z];if(X===void 0&&(z==="instanceMatrix"&&k.instanceMatrix&&(X=k.instanceMatrix),z==="instanceColor"&&k.instanceColor&&(X=k.instanceColor)),X!==void 0){const te=X.normalized,fe=X.itemSize,G=n.get(X);if(G===void 0)continue;const me=G.buffer,ge=G.type,ve=G.bytesPerElement;if(X.isInterleavedBufferAttribute){const re=X.data,Ve=re.stride,Te=X.offset;if(re.isInstancedInterleavedBuffer){for(let _e=0;_e<F.locationSize;_e++)M(F.location+_e,re.meshPerAttribute);k.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let _e=0;_e<F.locationSize;_e++)S(F.location+_e);t.bindBuffer(34962,me);for(let _e=0;_e<F.locationSize;_e++)A(F.location+_e,fe/F.locationSize,ge,te,Ve*ve,(Te+fe/F.locationSize*_e)*ve)}else{if(X.isInstancedBufferAttribute){for(let re=0;re<F.locationSize;re++)M(F.location+re,X.meshPerAttribute);k.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let re=0;re<F.locationSize;re++)S(F.location+re);t.bindBuffer(34962,me);for(let re=0;re<F.locationSize;re++)A(F.location+re,fe/F.locationSize,ge,te,fe*ve,fe/F.locationSize*re*ve)}}else if(P!==void 0){const te=P[z];if(te!==void 0)switch(te.length){case 2:t.vertexAttrib2fv(F.location,te);break;case 3:t.vertexAttrib3fv(F.location,te);break;case 4:t.vertexAttrib4fv(F.location,te);break;default:t.vertexAttrib1fv(F.location,te)}}}}T()}function L(){Q();for(const k in a){const q=a[k];for(const V in q){const K=q[V];for(const C in K)_(K[C].object),delete K[C];delete q[V]}delete a[k]}}function D(k){if(a[k.id]===void 0)return;const q=a[k.id];for(const V in q){const K=q[V];for(const C in K)_(K[C].object),delete K[C];delete q[V]}delete a[k.id]}function N(k){for(const q in a){const V=a[q];if(V[k.id]===void 0)continue;const K=V[k.id];for(const C in K)_(K[C].object),delete K[C];delete V[k.id]}}function Q(){J(),c=!0,u!==l&&(u=l,g(u.object))}function J(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:Q,resetDefaultState:J,dispose:L,releaseStatesOfGeometry:D,releaseStatesOfProgram:N,initAttributes:y,enableAttribute:S,disableUnusedAttributes:T}}function bE(t,e,n,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,c){t.drawArrays(s,u,c),n.update(c,s,1)}function l(u,c,f){if(f===0)return;let d,g;if(r)d=t,g="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[g](s,u,c,f),n.update(c,s,f)}this.setMode=o,this.render=a,this.renderInstances=l}function TE(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(A){if(A==="highp"){if(t.getShaderPrecisionFormat(35633,36338).precision>0&&t.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(35633,36337).precision>0&&t.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&t instanceof WebGL2ComputeRenderingContext;let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),c=n.logarithmicDepthBuffer===!0,f=t.getParameter(34930),d=t.getParameter(35660),g=t.getParameter(3379),_=t.getParameter(34076),p=t.getParameter(34921),h=t.getParameter(36347),m=t.getParameter(36348),v=t.getParameter(36349),y=d>0,S=o||e.has("OES_texture_float"),M=y&&S,T=o?t.getParameter(36183):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:f,maxVertexTextures:d,maxTextureSize:g,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:h,maxVaryings:m,maxFragmentUniforms:v,vertexTextures:y,floatFragmentTextures:S,floatVertexTextures:M,maxSamples:T}}function CE(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new $i,a=new an,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d,g){const _=f.length!==0||d||i!==0||r;return r=d,n=c(f,g,0),i=f.length,_},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1,u()},this.setState=function(f,d,g){const _=f.clippingPlanes,p=f.clipIntersection,h=f.clipShadows,m=t.get(f);if(!r||_===null||_.length===0||s&&!h)s?c(null):u();else{const v=s?0:i,y=v*4;let S=m.clippingState||null;l.value=S,S=c(_,d,y,g);for(let M=0;M!==y;++M)S[M]=n[M];m.clippingState=S,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,d,g,_){const p=f!==null?f.length:0;let h=null;if(p!==0){if(h=l.value,_!==!0||h===null){const m=g+p*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(h===null||h.length<m)&&(h=new Float32Array(m));for(let y=0,S=g;y!==p;++y,S+=4)o.copy(f[y]).applyMatrix4(v,a),o.normal.toArray(h,S),h[S+3]=o.constant}l.value=h,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,h}}function AE(t){let e=new WeakMap;function n(o,a){return a===Uc?o.mapping=ms:a===Bc&&(o.mapping=gs),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Uc||a===Bc)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new W1(l.height/2);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Tv extends Mv{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Zr=4,cp=[.125,.215,.35,.446,.526,.582],Yi=20,Iu=new Tv,fp=new Ge;let ku=null;const Xi=(1+Math.sqrt(5))/2,Fr=1/Xi,dp=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,Xi,Fr),new U(0,Xi,-Fr),new U(Fr,0,Xi),new U(-Fr,0,Xi),new U(Xi,Fr,0),new U(-Xi,Fr,0)];class hp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){ku=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ku),e.scissorTest=!1,pa(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ms||e.mapping===gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ku=this._renderer.getRenderTarget();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Ft,minFilter:Ft,generateMipmaps:!1,type:_o,format:Fn,encoding:hr,depthBuffer:!1},r=pp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pp(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=LE(s)),this._blurMaterial=RE(s,e,n)}return r}_compileMaterial(e){const n=new Jn(this._lodPlanes[0],e);this._renderer.compile(n,Iu)}_sceneToCubeUV(e,n,i,r){const a=new Sn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,d=c.toneMapping;c.getClearColor(fp),c.toneMapping=ti,c.autoClear=!1;const g=new Xf({name:"PMREM.Background",side:bn,depthWrite:!1,depthTest:!1}),_=new Jn(new Lo,g);let p=!1;const h=e.background;h?h.isColor&&(g.color.copy(h),e.background=null,p=!0):(g.color.copy(fp),p=!0);for(let m=0;m<6;m++){const v=m%3;v===0?(a.up.set(0,l[m],0),a.lookAt(u[m],0,0)):v===1?(a.up.set(0,0,l[m]),a.lookAt(0,u[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,u[m]));const y=this._cubeSize;pa(r,v*y,m>2?y:0,y,y),c.setRenderTarget(r),p&&c.render(_,a),c.render(e,a)}_.geometry.dispose(),_.material.dispose(),c.toneMapping=d,c.autoClear=f,e.background=h}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ms||e.mapping===gs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=gp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mp());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Jn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;pa(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Iu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=dp[(r-1)%dp.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new Jn(this._lodPlanes[r],u),d=u.uniforms,g=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*Yi-1),p=s/_,h=isFinite(s)?1+Math.floor(c*p):Yi;h>Yi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${Yi}`);const m=[];let v=0;for(let A=0;A<Yi;++A){const x=A/p,L=Math.exp(-x*x/2);m.push(L),A===0?v+=L:A<h&&(v+=2*L)}for(let A=0;A<m.length;A++)m[A]=m[A]/v;d.envMap.value=e.texture,d.samples.value=h,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=_,d.mipInt.value=y-i;const S=this._sizeLods[r],M=3*S*(r>y-Zr?r-y+Zr:0),T=4*(this._cubeSize-S);pa(n,M,T,3*S,2*S),l.setRenderTarget(n),l.render(f,Iu)}}function LE(t){const e=[],n=[],i=[];let r=t;const s=t-Zr+1+cp.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Zr?l=cp[o-t+Zr-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,f=1+u,d=[c,c,f,c,f,f,c,c,f,f,c,f],g=6,_=6,p=3,h=2,m=1,v=new Float32Array(p*_*g),y=new Float32Array(h*_*g),S=new Float32Array(m*_*g);for(let T=0;T<g;T++){const A=T%3*2/3-1,x=T>2?0:-1,L=[A,x,0,A+2/3,x,0,A+2/3,x+1,0,A,x,0,A+2/3,x+1,0,A,x+1,0];v.set(L,p*_*T),y.set(d,h*_*T);const D=[T,T,T,T,T,T];S.set(D,m*_*T)}const M=new _r;M.setAttribute("position",new Un(v,p)),M.setAttribute("uv",new Un(y,h)),M.setAttribute("faceIndex",new Un(S,m)),e.push(M),r>Zr&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function pp(t,e,n){const i=new pr(t,e,n);return i.texture.mapping=xl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function pa(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function RE(t,e,n){const i=new Float32Array(Yi),r=new U(0,1,0);return new Ni({name:"SphericalGaussianBlur",defines:{n:Yi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:qf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function mp(){return new Ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function gp(){return new Ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function qf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function PE(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Uc||l===Bc,c=l===ms||l===gs;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return n===null&&(n=new hp(t)),f=u?n.fromEquirectangular(a,f):n.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(u&&f&&f.height>0||c&&f&&r(f)){n===null&&(n=new hp(t));const d=u?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function DE(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function IE(t,e,n,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",o),delete r[d.id];const g=s.get(d);g&&(e.remove(g),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const _ in d)e.update(d[_],34962);const g=f.morphAttributes;for(const _ in g){const p=g[_];for(let h=0,m=p.length;h<m;h++)e.update(p[h],34962)}}function u(f){const d=[],g=f.index,_=f.attributes.position;let p=0;if(g!==null){const v=g.array;p=g.version;for(let y=0,S=v.length;y<S;y+=3){const M=v[y+0],T=v[y+1],A=v[y+2];d.push(M,T,T,A,A,M)}}else{const v=_.array;p=_.version;for(let y=0,S=v.length/3-1;y<S;y+=3){const M=y+0,T=y+1,A=y+2;d.push(M,T,T,A,A,M)}}const h=new(pv(d)?Sv:yv)(d,1);h.version=p;const m=s.get(f);m&&e.remove(m),s.set(f,h)}function c(f){const d=s.get(f);if(d){const g=f.index;g!==null&&d.version<g.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function kE(t,e,n,i){const r=i.isWebGL2;let s;function o(d){s=d}let a,l;function u(d){a=d.type,l=d.bytesPerElement}function c(d,g){t.drawElements(s,g,a,d*l),n.update(g,s,1)}function f(d,g,_){if(_===0)return;let p,h;if(r)p=t,h="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[h](s,g,a,d*l,_),n.update(g,s,_)}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=f}function NE(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case 4:n.triangles+=a*(s/3);break;case 1:n.lines+=a*(s/2);break;case 3:n.lines+=a*(s-1);break;case 2:n.lines+=a*s;break;case 0:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.frame++,n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function FE(t,e){return t[0]-e[0]}function zE(t,e){return Math.abs(e[1])-Math.abs(t[1])}function Nu(t,e){let n=1;const i=e.isInterleavedBufferAttribute?e.data.array:e.array;i instanceof Int8Array?n=127:i instanceof Uint8Array?n=255:i instanceof Uint16Array?n=65535:i instanceof Int16Array?n=32767:i instanceof Int32Array?n=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",i),t.divideScalar(n)}function OE(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new ot,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,f,d){const g=u.morphTargetInfluences;if(e.isWebGL2===!0){const p=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,h=p!==void 0?p.length:0;let m=s.get(c);if(m===void 0||m.count!==h){let V=function(){k.dispose(),s.delete(c),c.removeEventListener("dispose",V)};var _=V;m!==void 0&&m.texture.dispose();const S=c.morphAttributes.position!==void 0,M=c.morphAttributes.normal!==void 0,T=c.morphAttributes.color!==void 0,A=c.morphAttributes.position||[],x=c.morphAttributes.normal||[],L=c.morphAttributes.color||[];let D=0;S===!0&&(D=1),M===!0&&(D=2),T===!0&&(D=3);let N=c.attributes.position.count*D,Q=1;N>e.maxTextureSize&&(Q=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const J=new Float32Array(N*Q*4*h),k=new _v(J,N,Q,h);k.type=er,k.needsUpdate=!0;const q=D*4;for(let K=0;K<h;K++){const C=A[K],b=x[K],P=L[K],z=N*Q*4*K;for(let F=0;F<C.count;F++){const X=F*q;S===!0&&(o.fromBufferAttribute(C,F),C.normalized===!0&&Nu(o,C),J[z+X+0]=o.x,J[z+X+1]=o.y,J[z+X+2]=o.z,J[z+X+3]=0),M===!0&&(o.fromBufferAttribute(b,F),b.normalized===!0&&Nu(o,b),J[z+X+4]=o.x,J[z+X+5]=o.y,J[z+X+6]=o.z,J[z+X+7]=0),T===!0&&(o.fromBufferAttribute(P,F),P.normalized===!0&&Nu(o,P),J[z+X+8]=o.x,J[z+X+9]=o.y,J[z+X+10]=o.z,J[z+X+11]=P.itemSize===4?o.w:1)}}m={count:h,texture:k,size:new Ue(N,Q)},s.set(c,m),c.addEventListener("dispose",V)}let v=0;for(let S=0;S<g.length;S++)v+=g[S];const y=c.morphTargetsRelative?1:1-v;d.getUniforms().setValue(t,"morphTargetBaseInfluence",y),d.getUniforms().setValue(t,"morphTargetInfluences",g),d.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),d.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}else{const p=g===void 0?0:g.length;let h=i[c.id];if(h===void 0||h.length!==p){h=[];for(let M=0;M<p;M++)h[M]=[M,0];i[c.id]=h}for(let M=0;M<p;M++){const T=h[M];T[0]=M,T[1]=g[M]}h.sort(zE);for(let M=0;M<8;M++)M<p&&h[M][1]?(a[M][0]=h[M][0],a[M][1]=h[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(FE);const m=c.morphAttributes.position,v=c.morphAttributes.normal;let y=0;for(let M=0;M<8;M++){const T=a[M],A=T[0],x=T[1];A!==Number.MAX_SAFE_INTEGER&&x?(m&&c.getAttribute("morphTarget"+M)!==m[A]&&c.setAttribute("morphTarget"+M,m[A]),v&&c.getAttribute("morphNormal"+M)!==v[A]&&c.setAttribute("morphNormal"+M,v[A]),r[M]=x,y+=x):(m&&c.hasAttribute("morphTarget"+M)===!0&&c.deleteAttribute("morphTarget"+M),v&&c.hasAttribute("morphNormal"+M)===!0&&c.deleteAttribute("morphNormal"+M),r[M]=0)}const S=c.morphTargetsRelative?1:1-y;d.getUniforms().setValue(t,"morphTargetBaseInfluence",S),d.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function UE(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,f=e.get(l,c);return r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),n.update(l.instanceMatrix,34962),l.instanceColor!==null&&n.update(l.instanceColor,34962)),f}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}const Cv=new Zt,Av=new _v,Lv=new C1,Rv=new wv,vp=[],_p=[],xp=new Float32Array(16),yp=new Float32Array(9),Sp=new Float32Array(4);function Es(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=vp[r];if(s===void 0&&(s=new Float32Array(r),vp[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Rt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Pt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function wl(t,e){let n=_p[e];n===void 0&&(n=new Int32Array(e),_p[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function BE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function GE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2fv(this.addr,e),Pt(n,e)}}function VE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Rt(n,e))return;t.uniform3fv(this.addr,e),Pt(n,e)}}function HE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4fv(this.addr,e),Pt(n,e)}}function WE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Pt(n,e)}else{if(Rt(n,i))return;Sp.set(i),t.uniformMatrix2fv(this.addr,!1,Sp),Pt(n,i)}}function jE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Pt(n,e)}else{if(Rt(n,i))return;yp.set(i),t.uniformMatrix3fv(this.addr,!1,yp),Pt(n,i)}}function $E(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Pt(n,e)}else{if(Rt(n,i))return;xp.set(i),t.uniformMatrix4fv(this.addr,!1,xp),Pt(n,i)}}function XE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function qE(t,e){const n=this.cache;Rt(n,e)||(t.uniform2iv(this.addr,e),Pt(n,e))}function YE(t,e){const n=this.cache;Rt(n,e)||(t.uniform3iv(this.addr,e),Pt(n,e))}function KE(t,e){const n=this.cache;Rt(n,e)||(t.uniform4iv(this.addr,e),Pt(n,e))}function ZE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function QE(t,e){const n=this.cache;Rt(n,e)||(t.uniform2uiv(this.addr,e),Pt(n,e))}function JE(t,e){const n=this.cache;Rt(n,e)||(t.uniform3uiv(this.addr,e),Pt(n,e))}function e3(t,e){const n=this.cache;Rt(n,e)||(t.uniform4uiv(this.addr,e),Pt(n,e))}function t3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||Cv,r)}function n3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Lv,r)}function i3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Rv,r)}function r3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Av,r)}function s3(t){switch(t){case 5126:return BE;case 35664:return GE;case 35665:return VE;case 35666:return HE;case 35674:return WE;case 35675:return jE;case 35676:return $E;case 5124:case 35670:return XE;case 35667:case 35671:return qE;case 35668:case 35672:return YE;case 35669:case 35673:return KE;case 5125:return ZE;case 36294:return QE;case 36295:return JE;case 36296:return e3;case 35678:case 36198:case 36298:case 36306:case 35682:return t3;case 35679:case 36299:case 36307:return n3;case 35680:case 36300:case 36308:case 36293:return i3;case 36289:case 36303:case 36311:case 36292:return r3}}function o3(t,e){t.uniform1fv(this.addr,e)}function a3(t,e){const n=Es(e,this.size,2);t.uniform2fv(this.addr,n)}function l3(t,e){const n=Es(e,this.size,3);t.uniform3fv(this.addr,n)}function u3(t,e){const n=Es(e,this.size,4);t.uniform4fv(this.addr,n)}function c3(t,e){const n=Es(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function f3(t,e){const n=Es(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function d3(t,e){const n=Es(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function h3(t,e){t.uniform1iv(this.addr,e)}function p3(t,e){t.uniform2iv(this.addr,e)}function m3(t,e){t.uniform3iv(this.addr,e)}function g3(t,e){t.uniform4iv(this.addr,e)}function v3(t,e){t.uniform1uiv(this.addr,e)}function _3(t,e){t.uniform2uiv(this.addr,e)}function x3(t,e){t.uniform3uiv(this.addr,e)}function y3(t,e){t.uniform4uiv(this.addr,e)}function S3(t,e,n){const i=e.length,r=wl(n,i);t.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)n.setTexture2D(e[s]||Cv,r[s])}function M3(t,e,n){const i=e.length,r=wl(n,i);t.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)n.setTexture3D(e[s]||Lv,r[s])}function w3(t,e,n){const i=e.length,r=wl(n,i);t.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)n.setTextureCube(e[s]||Rv,r[s])}function E3(t,e,n){const i=e.length,r=wl(n,i);t.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)n.setTexture2DArray(e[s]||Av,r[s])}function b3(t){switch(t){case 5126:return o3;case 35664:return a3;case 35665:return l3;case 35666:return u3;case 35674:return c3;case 35675:return f3;case 35676:return d3;case 5124:case 35670:return h3;case 35667:case 35671:return p3;case 35668:case 35672:return m3;case 35669:case 35673:return g3;case 5125:return v3;case 36294:return _3;case 36295:return x3;case 36296:return y3;case 35678:case 36198:case 36298:case 36306:case 35682:return S3;case 35679:case 36299:case 36307:return M3;case 35680:case 36300:case 36308:case 36293:return w3;case 36289:case 36303:case 36311:case 36292:return E3}}class T3{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=s3(n.type)}}class C3{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=b3(n.type)}}class A3{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Fu=/(\w+)(\])?(\[|\.)?/g;function Mp(t,e){t.seq.push(e),t.map[e.id]=e}function L3(t,e,n){const i=t.name,r=i.length;for(Fu.lastIndex=0;;){const s=Fu.exec(i),o=Fu.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Mp(n,u===void 0?new T3(a,t,e):new C3(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new A3(a),Mp(n,f)),n=f}}}class Da{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,35718);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);L3(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function wp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}let R3=0;function P3(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function D3(t){switch(t){case hr:return["Linear","( value )"];case Qe:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",t),["Linear","( value )"]}}function Ep(t,e,n){const i=t.getShaderParameter(e,35713),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+P3(t.getShaderSource(e),o)}else return r}function I3(t,e){const n=D3(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function k3(t,e){let n;switch(e){case JS:n="Linear";break;case e1:n="Reinhard";break;case t1:n="OptimizedCineon";break;case n1:n="ACESFilmic";break;case i1:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function N3(t){return[t.extensionDerivatives||!!t.envMapCubeUVHeight||t.bumpMap||t.tangentSpaceNormalMap||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Hs).join(`
`)}function F3(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function z3(t,e){const n={},i=t.getProgramParameter(e,35721);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Hs(t){return t!==""}function bp(t,e){return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Tp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const O3=/^[ \t]*#include +<([\w\d./]+)>/gm;function jc(t){return t.replace(O3,U3)}function U3(t,e){const n=Ce[e];if(n===void 0)throw new Error("Can not resolve #include <"+e+">");return jc(n)}const B3=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,G3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cp(t){return t.replace(G3,Pv).replace(B3,V3)}function V3(t,e,n,i){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Pv(t,e,n,i)}function Pv(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ap(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function H3(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===lv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===RS?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Vs&&(e="SHADOWMAP_TYPE_VSM"),e}function W3(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case ms:case gs:e="ENVMAP_TYPE_CUBE";break;case xl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function j3(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case gs:e="ENVMAP_MODE_REFRACTION";break}return e}function $3(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case fv:e="ENVMAP_BLENDING_MULTIPLY";break;case ZS:e="ENVMAP_BLENDING_MIX";break;case QS:e="ENVMAP_BLENDING_ADD";break}return e}function X3(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function q3(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=H3(n),u=W3(n),c=j3(n),f=$3(n),d=X3(n),g=n.isWebGL2?"":N3(n),_=F3(s),p=r.createProgram();let h,m,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(h=[_].filter(Hs).join(`
`),h.length>0&&(h+=`
`),m=[g,_].filter(Hs).join(`
`),m.length>0&&(m+=`
`)):(h=[Ap(n),"#define SHADER_NAME "+n.shaderName,_,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.supportsVertexTextures?"#define VERTEX_TEXTURES":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.displacementMap&&n.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",n.specularColorMap?"#define USE_SPECULARCOLORMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEENCOLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hs).join(`
`),m=[g,Ap(n),"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",n.specularColorMap?"#define USE_SPECULARCOLORMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEENCOLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ti?"#define TONE_MAPPING":"",n.toneMapping!==ti?Ce.tonemapping_pars_fragment:"",n.toneMapping!==ti?k3("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ce.encodings_pars_fragment,I3("linearToOutputTexel",n.outputEncoding),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Hs).join(`
`)),o=jc(o),o=bp(o,n),o=Tp(o,n),a=jc(a),a=bp(a,n),a=Tp(a,n),o=Cp(o),a=Cp(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,h=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,m=["#define varying in",n.glslVersion===Kh?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Kh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const y=v+h+o,S=v+m+a,M=wp(r,35633,y),T=wp(r,35632,S);if(r.attachShader(p,M),r.attachShader(p,T),n.index0AttributeName!==void 0?r.bindAttribLocation(p,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p),t.debug.checkShaderErrors){const L=r.getProgramInfoLog(p).trim(),D=r.getShaderInfoLog(M).trim(),N=r.getShaderInfoLog(T).trim();let Q=!0,J=!0;if(r.getProgramParameter(p,35714)===!1){Q=!1;const k=Ep(r,M,"vertex"),q=Ep(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,35715)+`

Program Info Log: `+L+`
`+k+`
`+q)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(D===""||N==="")&&(J=!1);J&&(this.diagnostics={runnable:Q,programLog:L,vertexShader:{log:D,prefix:h},fragmentShader:{log:N,prefix:m}})}r.deleteShader(M),r.deleteShader(T);let A;this.getUniforms=function(){return A===void 0&&(A=new Da(r,p)),A};let x;return this.getAttributes=function(){return x===void 0&&(x=z3(r,p)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.name=n.shaderName,this.id=R3++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=M,this.fragmentShader=T,this}let Y3=0;class K3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;return n.has(e)===!1&&n.set(e,new Set),n.get(e)}_getShaderStage(e){const n=this.shaderCache;if(n.has(e)===!1){const i=new Z3(e);n.set(e,i)}return n.get(e)}}class Z3{constructor(e){this.id=Y3++,this.code=e,this.usedTimes=0}}function Q3(t,e,n,i,r,s,o){const a=new xv,l=new K3,u=[],c=r.isWebGL2,f=r.logarithmicDepthBuffer,d=r.vertexTextures;let g=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x,L,D,N,Q){const J=N.fog,k=Q.geometry,q=x.isMeshStandardMaterial?N.environment:null,V=(x.isMeshStandardMaterial?n:e).get(x.envMap||q),K=!!V&&V.mapping===xl?V.image.height:null,C=_[x.type];x.precision!==null&&(g=r.getMaxPrecision(x.precision),g!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",g,"instead."));const b=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,P=b!==void 0?b.length:0;let z=0;k.morphAttributes.position!==void 0&&(z=1),k.morphAttributes.normal!==void 0&&(z=2),k.morphAttributes.color!==void 0&&(z=3);let F,X,te,fe;if(C){const Ve=In[C];F=Ve.vertexShader,X=Ve.fragmentShader}else F=x.vertexShader,X=x.fragmentShader,l.update(x),te=l.getVertexShaderID(x),fe=l.getFragmentShaderID(x);const G=t.getRenderTarget(),me=x.alphaTest>0,ge=x.clearcoat>0,ve=x.iridescence>0;return{isWebGL2:c,shaderID:C,shaderName:x.type,vertexShader:F,fragmentShader:X,defines:x.defines,customVertexShaderID:te,customFragmentShaderID:fe,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:g,instancing:Q.isInstancedMesh===!0,instancingColor:Q.isInstancedMesh===!0&&Q.instanceColor!==null,supportsVertexTextures:d,outputEncoding:G===null?t.outputEncoding:G.isXRRenderTarget===!0?G.texture.encoding:hr,map:!!x.map,matcap:!!x.matcap,envMap:!!V,envMapMode:V&&V.mapping,envMapCubeUVHeight:K,lightMap:!!x.lightMap,aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===w1,tangentSpaceNormalMap:x.normalMapType===M1,decodeVideoTexture:!!x.map&&x.map.isVideoTexture===!0&&x.map.encoding===Qe,clearcoat:ge,clearcoatMap:ge&&!!x.clearcoatMap,clearcoatRoughnessMap:ge&&!!x.clearcoatRoughnessMap,clearcoatNormalMap:ge&&!!x.clearcoatNormalMap,iridescence:ve,iridescenceMap:ve&&!!x.iridescenceMap,iridescenceThicknessMap:ve&&!!x.iridescenceThicknessMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,specularIntensityMap:!!x.specularIntensityMap,specularColorMap:!!x.specularColorMap,opaque:x.transparent===!1&&x.blending===rs,alphaMap:!!x.alphaMap,alphaTest:me,gradientMap:!!x.gradientMap,sheen:x.sheen>0,sheenColorMap:!!x.sheenColorMap,sheenRoughnessMap:!!x.sheenRoughnessMap,transmission:x.transmission>0,transmissionMap:!!x.transmissionMap,thicknessMap:!!x.thicknessMap,combine:x.combine,vertexTangents:!!x.normalMap&&!!k.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||!!x.displacementMap||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||!!x.sheenColorMap||!!x.sheenRoughnessMap,uvsVertexOnly:!(!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||x.transmission>0||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||x.sheen>0||!!x.sheenColorMap||!!x.sheenRoughnessMap)&&!!x.displacementMap,fog:!!J,useFog:x.fog===!0,fogExp2:J&&J.isFogExp2,flatShading:!!x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:f,skinning:Q.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:z,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&D.length>0,shadowMapType:t.shadowMap.type,toneMapping:x.toneMapped?t.toneMapping:ti,physicallyCorrectLights:t.physicallyCorrectLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ps,flipSided:x.side===bn,useDepthPacking:!!x.depthPacking,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function h(x){const L=[];if(x.shaderID?L.push(x.shaderID):(L.push(x.customVertexShaderID),L.push(x.customFragmentShaderID)),x.defines!==void 0)for(const D in x.defines)L.push(D),L.push(x.defines[D]);return x.isRawShaderMaterial===!1&&(m(L,x),v(L,x),L.push(t.outputEncoding)),L.push(x.customProgramCacheKey),L.join()}function m(x,L){x.push(L.precision),x.push(L.outputEncoding),x.push(L.envMapMode),x.push(L.envMapCubeUVHeight),x.push(L.combine),x.push(L.vertexUvs),x.push(L.fogExp2),x.push(L.sizeAttenuation),x.push(L.morphTargetsCount),x.push(L.morphAttributeCount),x.push(L.numDirLights),x.push(L.numPointLights),x.push(L.numSpotLights),x.push(L.numHemiLights),x.push(L.numRectAreaLights),x.push(L.numDirLightShadows),x.push(L.numPointLightShadows),x.push(L.numSpotLightShadows),x.push(L.shadowMapType),x.push(L.toneMapping),x.push(L.numClippingPlanes),x.push(L.numClipIntersection),x.push(L.depthPacking)}function v(x,L){a.disableAll(),L.isWebGL2&&a.enable(0),L.supportsVertexTextures&&a.enable(1),L.instancing&&a.enable(2),L.instancingColor&&a.enable(3),L.map&&a.enable(4),L.matcap&&a.enable(5),L.envMap&&a.enable(6),L.lightMap&&a.enable(7),L.aoMap&&a.enable(8),L.emissiveMap&&a.enable(9),L.bumpMap&&a.enable(10),L.normalMap&&a.enable(11),L.objectSpaceNormalMap&&a.enable(12),L.tangentSpaceNormalMap&&a.enable(13),L.clearcoat&&a.enable(14),L.clearcoatMap&&a.enable(15),L.clearcoatRoughnessMap&&a.enable(16),L.clearcoatNormalMap&&a.enable(17),L.iridescence&&a.enable(18),L.iridescenceMap&&a.enable(19),L.iridescenceThicknessMap&&a.enable(20),L.displacementMap&&a.enable(21),L.specularMap&&a.enable(22),L.roughnessMap&&a.enable(23),L.metalnessMap&&a.enable(24),L.gradientMap&&a.enable(25),L.alphaMap&&a.enable(26),L.alphaTest&&a.enable(27),L.vertexColors&&a.enable(28),L.vertexAlphas&&a.enable(29),L.vertexUvs&&a.enable(30),L.vertexTangents&&a.enable(31),L.uvsVertexOnly&&a.enable(32),L.fog&&a.enable(33),x.push(a.mask),a.disableAll(),L.useFog&&a.enable(0),L.flatShading&&a.enable(1),L.logarithmicDepthBuffer&&a.enable(2),L.skinning&&a.enable(3),L.morphTargets&&a.enable(4),L.morphNormals&&a.enable(5),L.morphColors&&a.enable(6),L.premultipliedAlpha&&a.enable(7),L.shadowMapEnabled&&a.enable(8),L.physicallyCorrectLights&&a.enable(9),L.doubleSided&&a.enable(10),L.flipSided&&a.enable(11),L.useDepthPacking&&a.enable(12),L.dithering&&a.enable(13),L.specularIntensityMap&&a.enable(14),L.specularColorMap&&a.enable(15),L.transmission&&a.enable(16),L.transmissionMap&&a.enable(17),L.thicknessMap&&a.enable(18),L.sheen&&a.enable(19),L.sheenColorMap&&a.enable(20),L.sheenRoughnessMap&&a.enable(21),L.decodeVideoTexture&&a.enable(22),L.opaque&&a.enable(23),x.push(a.mask)}function y(x){const L=_[x.type];let D;if(L){const N=In[L];D=B1.clone(N.uniforms)}else D=x.uniforms;return D}function S(x,L){let D;for(let N=0,Q=u.length;N<Q;N++){const J=u[N];if(J.cacheKey===L){D=J,++D.usedTimes;break}}return D===void 0&&(D=new q3(t,L,x,s),u.push(D)),D}function M(x){if(--x.usedTimes===0){const L=u.indexOf(x);u[L]=u[u.length-1],u.pop(),x.destroy()}}function T(x){l.remove(x)}function A(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:y,acquireProgram:S,releaseProgram:M,releaseShaderCache:T,programs:u,dispose:A}}function J3(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function e2(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Lp(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Rp(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,d,g,_,p,h){let m=t[e];return m===void 0?(m={id:f.id,object:f,geometry:d,material:g,groupOrder:_,renderOrder:f.renderOrder,z:p,group:h},t[e]=m):(m.id=f.id,m.object=f,m.geometry=d,m.material=g,m.groupOrder=_,m.renderOrder=f.renderOrder,m.z=p,m.group=h),e++,m}function a(f,d,g,_,p,h){const m=o(f,d,g,_,p,h);g.transmission>0?i.push(m):g.transparent===!0?r.push(m):n.push(m)}function l(f,d,g,_,p,h){const m=o(f,d,g,_,p,h);g.transmission>0?i.unshift(m):g.transparent===!0?r.unshift(m):n.unshift(m)}function u(f,d){n.length>1&&n.sort(f||e2),i.length>1&&i.sort(d||Lp),r.length>1&&r.sort(d||Lp)}function c(){for(let f=e,d=t.length;f<d;f++){const g=t[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function t2(){let t=new WeakMap;function e(i,r){let s;return t.has(i)===!1?(s=new Rp,t.set(i,[s])):r>=t.get(i).length?(s=new Rp,t.get(i).push(s)):s=t.get(i)[r],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function n2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new U,color:new Ge};break;case"SpotLight":n={position:new U,direction:new U,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new U,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":n={direction:new U,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":n={color:new Ge,position:new U,halfWidth:new U,halfHeight:new U};break}return t[e.id]=n,n}}}function i2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let r2=0;function s2(t,e){return(e.castShadow?1:0)-(t.castShadow?1:0)}function o2(t,e){const n=new n2,i=i2(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let c=0;c<9;c++)r.probe.push(new U);const s=new U,o=new _t,a=new _t;function l(c,f){let d=0,g=0,_=0;for(let L=0;L<9;L++)r.probe[L].set(0,0,0);let p=0,h=0,m=0,v=0,y=0,S=0,M=0,T=0;c.sort(s2);const A=f!==!0?Math.PI:1;for(let L=0,D=c.length;L<D;L++){const N=c[L],Q=N.color,J=N.intensity,k=N.distance,q=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)d+=Q.r*J*A,g+=Q.g*J*A,_+=Q.b*J*A;else if(N.isLightProbe)for(let V=0;V<9;V++)r.probe[V].addScaledVector(N.sh.coefficients[V],J);else if(N.isDirectionalLight){const V=n.get(N);if(V.color.copy(N.color).multiplyScalar(N.intensity*A),N.castShadow){const K=N.shadow,C=i.get(N);C.shadowBias=K.bias,C.shadowNormalBias=K.normalBias,C.shadowRadius=K.radius,C.shadowMapSize=K.mapSize,r.directionalShadow[p]=C,r.directionalShadowMap[p]=q,r.directionalShadowMatrix[p]=N.shadow.matrix,S++}r.directional[p]=V,p++}else if(N.isSpotLight){const V=n.get(N);if(V.position.setFromMatrixPosition(N.matrixWorld),V.color.copy(Q).multiplyScalar(J*A),V.distance=k,V.coneCos=Math.cos(N.angle),V.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),V.decay=N.decay,N.castShadow){const K=N.shadow,C=i.get(N);C.shadowBias=K.bias,C.shadowNormalBias=K.normalBias,C.shadowRadius=K.radius,C.shadowMapSize=K.mapSize,r.spotShadow[m]=C,r.spotShadowMap[m]=q,r.spotShadowMatrix[m]=N.shadow.matrix,T++}r.spot[m]=V,m++}else if(N.isRectAreaLight){const V=n.get(N);V.color.copy(Q).multiplyScalar(J),V.halfWidth.set(N.width*.5,0,0),V.halfHeight.set(0,N.height*.5,0),r.rectArea[v]=V,v++}else if(N.isPointLight){const V=n.get(N);if(V.color.copy(N.color).multiplyScalar(N.intensity*A),V.distance=N.distance,V.decay=N.decay,N.castShadow){const K=N.shadow,C=i.get(N);C.shadowBias=K.bias,C.shadowNormalBias=K.normalBias,C.shadowRadius=K.radius,C.shadowMapSize=K.mapSize,C.shadowCameraNear=K.camera.near,C.shadowCameraFar=K.camera.far,r.pointShadow[h]=C,r.pointShadowMap[h]=q,r.pointShadowMatrix[h]=N.shadow.matrix,M++}r.point[h]=V,h++}else if(N.isHemisphereLight){const V=n.get(N);V.skyColor.copy(N.color).multiplyScalar(J*A),V.groundColor.copy(N.groundColor).multiplyScalar(J*A),r.hemi[y]=V,y++}}v>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ie.LTC_FLOAT_1,r.rectAreaLTC2=ie.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ie.LTC_HALF_1,r.rectAreaLTC2=ie.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=g,r.ambient[2]=_;const x=r.hash;(x.directionalLength!==p||x.pointLength!==h||x.spotLength!==m||x.rectAreaLength!==v||x.hemiLength!==y||x.numDirectionalShadows!==S||x.numPointShadows!==M||x.numSpotShadows!==T)&&(r.directional.length=p,r.spot.length=m,r.rectArea.length=v,r.point.length=h,r.hemi.length=y,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=M,r.pointShadowMap.length=M,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=M,r.spotShadowMatrix.length=T,x.directionalLength=p,x.pointLength=h,x.spotLength=m,x.rectAreaLength=v,x.hemiLength=y,x.numDirectionalShadows=S,x.numPointShadows=M,x.numSpotShadows=T,r.version=r2++)}function u(c,f){let d=0,g=0,_=0,p=0,h=0;const m=f.matrixWorldInverse;for(let v=0,y=c.length;v<y;v++){const S=c[v];if(S.isDirectionalLight){const M=r.directional[d];M.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),d++}else if(S.isSpotLight){const M=r.spot[_];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),_++}else if(S.isRectAreaLight){const M=r.rectArea[p];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),a.identity(),o.copy(S.matrixWorld),o.premultiply(m),a.extractRotation(o),M.halfWidth.set(S.width*.5,0,0),M.halfHeight.set(0,S.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),p++}else if(S.isPointLight){const M=r.point[g];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),g++}else if(S.isHemisphereLight){const M=r.hemi[h];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(m),h++}}}return{setup:l,setupView:u,state:r}}function Pp(t,e){const n=new o2(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){n.setup(i,f)}function u(f){n.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function a2(t,e){let n=new WeakMap;function i(s,o=0){let a;return n.has(s)===!1?(a=new Pp(t,e),n.set(s,[a])):o>=n.get(s).length?(a=new Pp(t,e),n.get(s).push(a)):a=n.get(s)[o],a}function r(){n=new WeakMap}return{get:i,dispose:r}}class l2 extends Sl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=y1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class u2 extends Sl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new U,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const c2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,f2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function d2(t,e,n){let i=new Ev;const r=new Ue,s=new Ue,o=new ot,a=new l2({depthPacking:S1}),l=new u2,u={},c=n.maxTextureSize,f={0:bn,1:vo,2:ps},d=new Ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:c2,fragmentShader:f2}),g=d.clone();g.defines.HORIZONTAL_PASS=1;const _=new _r;_.setAttribute("position",new Un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new Jn(_,d),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lv,this.render=function(S,M,T){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||S.length===0)return;const A=t.getRenderTarget(),x=t.getActiveCubeFace(),L=t.getActiveMipmapLevel(),D=t.state;D.setBlending(Di),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);for(let N=0,Q=S.length;N<Q;N++){const J=S[N],k=J.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const q=k.getFrameExtents();if(r.multiply(q),s.copy(k.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/q.x),r.x=s.x*q.x,k.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/q.y),r.y=s.y*q.y,k.mapSize.y=s.y)),k.map===null){const K=this.type!==Vs?{minFilter:Nt,magFilter:Nt}:{};k.map=new pr(r.x,r.y,K),k.map.texture.name=J.name+".shadowMap",k.camera.updateProjectionMatrix()}t.setRenderTarget(k.map),t.clear();const V=k.getViewportCount();for(let K=0;K<V;K++){const C=k.getViewport(K);o.set(s.x*C.x,s.y*C.y,s.x*C.z,s.y*C.w),D.viewport(o),k.updateMatrices(J,K),i=k.getFrustum(),y(M,T,k.camera,J,this.type)}k.isPointLightShadow!==!0&&this.type===Vs&&m(k,T),k.needsUpdate=!1}h.needsUpdate=!1,t.setRenderTarget(A,x,L)};function m(S,M){const T=e.update(p);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,g.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,g.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new pr(r.x,r.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,t.setRenderTarget(S.mapPass),t.clear(),t.renderBufferDirect(M,null,T,d,p,null),g.uniforms.shadow_pass.value=S.mapPass.texture,g.uniforms.resolution.value=S.mapSize,g.uniforms.radius.value=S.radius,t.setRenderTarget(S.map),t.clear(),t.renderBufferDirect(M,null,T,g,p,null)}function v(S,M,T,A,x,L){let D=null;const N=T.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(N!==void 0?D=N:D=T.isPointLight===!0?l:a,t.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0){const Q=D.uuid,J=M.uuid;let k=u[Q];k===void 0&&(k={},u[Q]=k);let q=k[J];q===void 0&&(q=D.clone(),k[J]=q),D=q}return D.visible=M.visible,D.wireframe=M.wireframe,L===Vs?D.side=M.shadowSide!==null?M.shadowSide:M.side:D.side=M.shadowSide!==null?M.shadowSide:f[M.side],D.alphaMap=M.alphaMap,D.alphaTest=M.alphaTest,D.clipShadows=M.clipShadows,D.clippingPlanes=M.clippingPlanes,D.clipIntersection=M.clipIntersection,D.displacementMap=M.displacementMap,D.displacementScale=M.displacementScale,D.displacementBias=M.displacementBias,D.wireframeLinewidth=M.wireframeLinewidth,D.linewidth=M.linewidth,T.isPointLight===!0&&D.isMeshDistanceMaterial===!0&&(D.referencePosition.setFromMatrixPosition(T.matrixWorld),D.nearDistance=A,D.farDistance=x),D}function y(S,M,T,A,x){if(S.visible===!1)return;if(S.layers.test(M.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&x===Vs)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,S.matrixWorld);const N=e.update(S),Q=S.material;if(Array.isArray(Q)){const J=N.groups;for(let k=0,q=J.length;k<q;k++){const V=J[k],K=Q[V.materialIndex];if(K&&K.visible){const C=v(S,K,A,T.near,T.far,x);t.renderBufferDirect(T,null,N,C,S,V)}}}else if(Q.visible){const J=v(S,Q,A,T.near,T.far,x);t.renderBufferDirect(T,null,N,J,S,null)}}const D=S.children;for(let N=0,Q=D.length;N<Q;N++)y(D[N],M,T,A,x)}}function h2(t,e,n){const i=n.isWebGL2;function r(){let I=!1;const le=new ot;let j=null;const ae=new ot(0,0,0,0);return{setMask:function(se){j!==se&&!I&&(t.colorMask(se,se,se,se),j=se)},setLocked:function(se){I=se},setClear:function(se,Ie,ct,tt,li){li===!0&&(se*=tt,Ie*=tt,ct*=tt),le.set(se,Ie,ct,tt),ae.equals(le)===!1&&(t.clearColor(se,Ie,ct,tt),ae.copy(le))},reset:function(){I=!1,j=null,ae.set(-1,0,0,0)}}}function s(){let I=!1,le=null,j=null,ae=null;return{setTest:function(se){se?me(2929):ge(2929)},setMask:function(se){le!==se&&!I&&(t.depthMask(se),le=se)},setFunc:function(se){if(j!==se){if(se)switch(se){case WS:t.depthFunc(512);break;case jS:t.depthFunc(519);break;case $S:t.depthFunc(513);break;case Oc:t.depthFunc(515);break;case XS:t.depthFunc(514);break;case qS:t.depthFunc(518);break;case YS:t.depthFunc(516);break;case KS:t.depthFunc(517);break;default:t.depthFunc(515)}else t.depthFunc(515);j=se}},setLocked:function(se){I=se},setClear:function(se){ae!==se&&(t.clearDepth(se),ae=se)},reset:function(){I=!1,le=null,j=null,ae=null}}}function o(){let I=!1,le=null,j=null,ae=null,se=null,Ie=null,ct=null,tt=null,li=null;return{setTest:function(Ke){I||(Ke?me(2960):ge(2960))},setMask:function(Ke){le!==Ke&&!I&&(t.stencilMask(Ke),le=Ke)},setFunc:function(Ke,Gn,en){(j!==Ke||ae!==Gn||se!==en)&&(t.stencilFunc(Ke,Gn,en),j=Ke,ae=Gn,se=en)},setOp:function(Ke,Gn,en){(Ie!==Ke||ct!==Gn||tt!==en)&&(t.stencilOp(Ke,Gn,en),Ie=Ke,ct=Gn,tt=en)},setLocked:function(Ke){I=Ke},setClear:function(Ke){li!==Ke&&(t.clearStencil(Ke),li=Ke)},reset:function(){I=!1,le=null,j=null,ae=null,se=null,Ie=null,ct=null,tt=null,li=null}}}const a=new r,l=new s,u=new o,c=new WeakMap,f=new WeakMap;let d={},g={},_=new WeakMap,p=[],h=null,m=!1,v=null,y=null,S=null,M=null,T=null,A=null,x=null,L=!1,D=null,N=null,Q=null,J=null,k=null;const q=t.getParameter(35661);let V=!1,K=0;const C=t.getParameter(7938);C.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(C)[1]),V=K>=1):C.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(C)[1]),V=K>=2);let b=null,P={};const z=t.getParameter(3088),F=t.getParameter(2978),X=new ot().fromArray(z),te=new ot().fromArray(F);function fe(I,le,j){const ae=new Uint8Array(4),se=t.createTexture();t.bindTexture(I,se),t.texParameteri(I,10241,9728),t.texParameteri(I,10240,9728);for(let Ie=0;Ie<j;Ie++)t.texImage2D(le+Ie,0,6408,1,1,0,6408,5121,ae);return se}const G={};G[3553]=fe(3553,3553,1),G[34067]=fe(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),me(2929),l.setFunc(Oc),Tt(!1),An(yh),me(2884),pt(Di);function me(I){d[I]!==!0&&(t.enable(I),d[I]=!0)}function ge(I){d[I]!==!1&&(t.disable(I),d[I]=!1)}function ve(I,le){return g[I]!==le?(t.bindFramebuffer(I,le),g[I]=le,i&&(I===36009&&(g[36160]=le),I===36160&&(g[36009]=le)),!0):!1}function re(I,le){let j=p,ae=!1;if(I)if(j=_.get(le),j===void 0&&(j=[],_.set(le,j)),I.isWebGLMultipleRenderTargets){const se=I.texture;if(j.length!==se.length||j[0]!==36064){for(let Ie=0,ct=se.length;Ie<ct;Ie++)j[Ie]=36064+Ie;j.length=se.length,ae=!0}}else j[0]!==36064&&(j[0]=36064,ae=!0);else j[0]!==1029&&(j[0]=1029,ae=!0);ae&&(n.isWebGL2?t.drawBuffers(j):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(j))}function Ve(I){return h!==I?(t.useProgram(I),h=I,!0):!1}const Te={[Or]:32774,[IS]:32778,[kS]:32779};if(i)Te[Eh]=32775,Te[bh]=32776;else{const I=e.get("EXT_blend_minmax");I!==null&&(Te[Eh]=I.MIN_EXT,Te[bh]=I.MAX_EXT)}const _e={[NS]:0,[FS]:1,[zS]:768,[uv]:770,[HS]:776,[GS]:774,[US]:772,[OS]:769,[cv]:771,[VS]:775,[BS]:773};function pt(I,le,j,ae,se,Ie,ct,tt){if(I===Di){m===!0&&(ge(3042),m=!1);return}if(m===!1&&(me(3042),m=!0),I!==DS){if(I!==v||tt!==L){if((y!==Or||T!==Or)&&(t.blendEquation(32774),y=Or,T=Or),tt)switch(I){case rs:t.blendFuncSeparate(1,771,1,771);break;case Sh:t.blendFunc(1,1);break;case Mh:t.blendFuncSeparate(0,769,0,1);break;case wh:t.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case rs:t.blendFuncSeparate(770,771,1,771);break;case Sh:t.blendFunc(770,1);break;case Mh:t.blendFuncSeparate(0,769,0,1);break;case wh:t.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}S=null,M=null,A=null,x=null,v=I,L=tt}return}se=se||le,Ie=Ie||j,ct=ct||ae,(le!==y||se!==T)&&(t.blendEquationSeparate(Te[le],Te[se]),y=le,T=se),(j!==S||ae!==M||Ie!==A||ct!==x)&&(t.blendFuncSeparate(_e[j],_e[ae],_e[Ie],_e[ct]),S=j,M=ae,A=Ie,x=ct),v=I,L=null}function Gt(I,le){I.side===ps?ge(2884):me(2884);let j=I.side===bn;le&&(j=!j),Tt(j),I.blending===rs&&I.transparent===!1?pt(Di):pt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),a.setMask(I.colorWrite);const ae=I.stencilWrite;u.setTest(ae),ae&&(u.setMask(I.stencilWriteMask),u.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),u.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Be(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?me(32926):ge(32926)}function Tt(I){D!==I&&(I?t.frontFace(2304):t.frontFace(2305),D=I)}function An(I){I!==AS?(me(2884),I!==N&&(I===yh?t.cullFace(1029):I===LS?t.cullFace(1028):t.cullFace(1032))):ge(2884),N=I}function mt(I){I!==Q&&(V&&t.lineWidth(I),Q=I)}function Be(I,le,j){I?(me(32823),(J!==le||k!==j)&&(t.polygonOffset(le,j),J=le,k=j)):ge(32823)}function Bn(I){I?me(3089):ge(3089)}function Ln(I){I===void 0&&(I=33984+q-1),b!==I&&(t.activeTexture(I),b=I)}function R(I,le){b===null&&Ln();let j=P[b];j===void 0&&(j={type:void 0,texture:void 0},P[b]=j),(j.type!==I||j.texture!==le)&&(t.bindTexture(I,le||G[I]),j.type=I,j.texture=le)}function w(){const I=P[b];I!==void 0&&I.type!==void 0&&(t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function $(){try{t.compressedTexImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ee(){try{t.texSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ne(){try{t.texSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function oe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Se(){try{t.texStorage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function W(){try{t.texStorage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pe(){try{t.texImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ce(){try{t.texImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function he(I){X.equals(I)===!1&&(t.scissor(I.x,I.y,I.z,I.w),X.copy(I))}function de(I){te.equals(I)===!1&&(t.viewport(I.x,I.y,I.z,I.w),te.copy(I))}function we(I,le){let j=f.get(le);j===void 0&&(j=new WeakMap,f.set(le,j));let ae=j.get(I);ae===void 0&&(ae=t.getUniformBlockIndex(le,I.name),j.set(I,ae))}function Ne(I,le){const ae=f.get(le).get(I);c.get(I)!==ae&&(t.uniformBlockBinding(le,ae,I.__bindingPointIndex),c.set(I,ae))}function et(){t.disable(3042),t.disable(2884),t.disable(2929),t.disable(32823),t.disable(3089),t.disable(2960),t.disable(32926),t.blendEquation(32774),t.blendFunc(1,0),t.blendFuncSeparate(1,0,1,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(513),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(519,0,4294967295),t.stencilOp(7680,7680,7680),t.clearStencil(0),t.cullFace(1029),t.frontFace(2305),t.polygonOffset(0,0),t.activeTexture(33984),t.bindFramebuffer(36160,null),i===!0&&(t.bindFramebuffer(36009,null),t.bindFramebuffer(36008,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},b=null,P={},g={},_=new WeakMap,p=[],h=null,m=!1,v=null,y=null,S=null,M=null,T=null,A=null,x=null,L=!1,D=null,N=null,Q=null,J=null,k=null,X.set(0,0,t.canvas.width,t.canvas.height),te.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:me,disable:ge,bindFramebuffer:ve,drawBuffers:re,useProgram:Ve,setBlending:pt,setMaterial:Gt,setFlipSided:Tt,setCullFace:An,setLineWidth:mt,setPolygonOffset:Be,setScissorTest:Bn,activeTexture:Ln,bindTexture:R,unbindTexture:w,compressedTexImage2D:$,texImage2D:pe,texImage3D:ce,updateUBOMapping:we,uniformBlockBinding:Ne,texStorage2D:Se,texStorage3D:W,texSubImage2D:ee,texSubImage3D:ne,compressedTexSubImage2D:oe,scissor:he,viewport:de,reset:et}}function p2(t,e,n,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,u=r.maxCubemapSize,c=r.maxTextureSize,f=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,g=/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let p;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,w){return m?new OffscreenCanvas(R,w):xo("canvas")}function y(R,w,$,ee){let ne=1;if((R.width>ee||R.height>ee)&&(ne=ee/Math.max(R.width,R.height)),ne<1||w===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const oe=w?Wc:Math.floor,Se=oe(ne*R.width),W=oe(ne*R.height);p===void 0&&(p=v(Se,W));const pe=$?v(Se,W):p;return pe.width=Se,pe.height=W,pe.getContext("2d").drawImage(R,0,0,Se,W),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+Se+"x"+W+")."),pe}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function S(R){return Qh(R.width)&&Qh(R.height)}function M(R){return a?!1:R.wrapS!==Mn||R.wrapT!==Mn||R.minFilter!==Nt&&R.minFilter!==Ft}function T(R,w){return R.generateMipmaps&&w&&R.minFilter!==Nt&&R.minFilter!==Ft}function A(R){t.generateMipmap(R)}function x(R,w,$,ee,ne=!1){if(a===!1)return w;if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let oe=w;return w===6403&&($===5126&&(oe=33326),$===5131&&(oe=33325),$===5121&&(oe=33321)),w===33319&&($===5126&&(oe=33328),$===5131&&(oe=33327),$===5121&&(oe=33323)),w===6408&&($===5126&&(oe=34836),$===5131&&(oe=34842),$===5121&&(oe=ee===Qe&&ne===!1?35907:32856),$===32819&&(oe=32854),$===32820&&(oe=32855)),(oe===33325||oe===33326||oe===33327||oe===33328||oe===34842||oe===34836)&&e.get("EXT_color_buffer_float"),oe}function L(R,w,$){return T(R,$)===!0||R.isFramebufferTexture&&R.minFilter!==Nt&&R.minFilter!==Ft?Math.log2(Math.max(w.width,w.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?w.mipmaps.length:1}function D(R){return R===Nt||R===Th||R===Ch?9728:9729}function N(R){const w=R.target;w.removeEventListener("dispose",N),J(w),w.isVideoTexture&&_.delete(w)}function Q(R){const w=R.target;w.removeEventListener("dispose",Q),q(w)}function J(R){const w=i.get(R);if(w.__webglInit===void 0)return;const $=R.source,ee=h.get($);if(ee){const ne=ee[w.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&k(R),Object.keys(ee).length===0&&h.delete($)}i.remove(R)}function k(R){const w=i.get(R);t.deleteTexture(w.__webglTexture);const $=R.source,ee=h.get($);delete ee[w.__cacheKey],o.memory.textures--}function q(R){const w=R.texture,$=i.get(R),ee=i.get(w);if(ee.__webglTexture!==void 0&&(t.deleteTexture(ee.__webglTexture),o.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++)t.deleteFramebuffer($.__webglFramebuffer[ne]),$.__webglDepthbuffer&&t.deleteRenderbuffer($.__webglDepthbuffer[ne]);else{if(t.deleteFramebuffer($.__webglFramebuffer),$.__webglDepthbuffer&&t.deleteRenderbuffer($.__webglDepthbuffer),$.__webglMultisampledFramebuffer&&t.deleteFramebuffer($.__webglMultisampledFramebuffer),$.__webglColorRenderbuffer)for(let ne=0;ne<$.__webglColorRenderbuffer.length;ne++)$.__webglColorRenderbuffer[ne]&&t.deleteRenderbuffer($.__webglColorRenderbuffer[ne]);$.__webglDepthRenderbuffer&&t.deleteRenderbuffer($.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let ne=0,oe=w.length;ne<oe;ne++){const Se=i.get(w[ne]);Se.__webglTexture&&(t.deleteTexture(Se.__webglTexture),o.memory.textures--),i.remove(w[ne])}i.remove(w),i.remove(R)}let V=0;function K(){V=0}function C(){const R=V;return R>=l&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+l),V+=1,R}function b(R){const w=[];return w.push(R.wrapS),w.push(R.wrapT),w.push(R.magFilter),w.push(R.minFilter),w.push(R.anisotropy),w.push(R.internalFormat),w.push(R.format),w.push(R.type),w.push(R.generateMipmaps),w.push(R.premultiplyAlpha),w.push(R.flipY),w.push(R.unpackAlignment),w.push(R.encoding),w.join()}function P(R,w){const $=i.get(R);if(R.isVideoTexture&&Bn(R),R.isRenderTargetTexture===!1&&R.version>0&&$.__version!==R.version){const ee=R.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ge($,R,w);return}}n.activeTexture(33984+w),n.bindTexture(3553,$.__webglTexture)}function z(R,w){const $=i.get(R);if(R.version>0&&$.__version!==R.version){ge($,R,w);return}n.activeTexture(33984+w),n.bindTexture(35866,$.__webglTexture)}function F(R,w){const $=i.get(R);if(R.version>0&&$.__version!==R.version){ge($,R,w);return}n.activeTexture(33984+w),n.bindTexture(32879,$.__webglTexture)}function X(R,w){const $=i.get(R);if(R.version>0&&$.__version!==R.version){ve($,R,w);return}n.activeTexture(33984+w),n.bindTexture(34067,$.__webglTexture)}const te={[Gc]:10497,[Mn]:33071,[Vc]:33648},fe={[Nt]:9728,[Th]:9984,[Ch]:9986,[Ft]:9729,[r1]:9985,[yl]:9987};function G(R,w,$){if($?(t.texParameteri(R,10242,te[w.wrapS]),t.texParameteri(R,10243,te[w.wrapT]),(R===32879||R===35866)&&t.texParameteri(R,32882,te[w.wrapR]),t.texParameteri(R,10240,fe[w.magFilter]),t.texParameteri(R,10241,fe[w.minFilter])):(t.texParameteri(R,10242,33071),t.texParameteri(R,10243,33071),(R===32879||R===35866)&&t.texParameteri(R,32882,33071),(w.wrapS!==Mn||w.wrapT!==Mn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(R,10240,D(w.magFilter)),t.texParameteri(R,10241,D(w.minFilter)),w.minFilter!==Nt&&w.minFilter!==Ft&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ee=e.get("EXT_texture_filter_anisotropic");if(w.type===er&&e.has("OES_texture_float_linear")===!1||a===!1&&w.type===_o&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||i.get(w).__currentAnisotropy)&&(t.texParameterf(R,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy)}}function me(R,w){let $=!1;R.__webglInit===void 0&&(R.__webglInit=!0,w.addEventListener("dispose",N));const ee=w.source;let ne=h.get(ee);ne===void 0&&(ne={},h.set(ee,ne));const oe=b(w);if(oe!==R.__cacheKey){ne[oe]===void 0&&(ne[oe]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,$=!0),ne[oe].usedTimes++;const Se=ne[R.__cacheKey];Se!==void 0&&(ne[R.__cacheKey].usedTimes--,Se.usedTimes===0&&k(w)),R.__cacheKey=oe,R.__webglTexture=ne[oe].texture}return $}function ge(R,w,$){let ee=3553;w.isDataArrayTexture&&(ee=35866),w.isData3DTexture&&(ee=32879);const ne=me(R,w),oe=w.source;if(n.activeTexture(33984+$),n.bindTexture(ee,R.__webglTexture),oe.version!==oe.__currentVersion||ne===!0){t.pixelStorei(37440,w.flipY),t.pixelStorei(37441,w.premultiplyAlpha),t.pixelStorei(3317,w.unpackAlignment),t.pixelStorei(37443,0);const Se=M(w)&&S(w.image)===!1;let W=y(w.image,Se,!1,c);W=Ln(w,W);const pe=S(W)||a,ce=s.convert(w.format,w.encoding);let he=s.convert(w.type),de=x(w.internalFormat,ce,he,w.encoding,w.isVideoTexture);G(ee,w,pe);let we;const Ne=w.mipmaps,et=a&&w.isVideoTexture!==!0,I=oe.__currentVersion===void 0||ne===!0,le=L(w,W,pe);if(w.isDepthTexture)de=6402,a?w.type===er?de=36012:w.type===Ji?de=33190:w.type===ss?de=35056:de=33189:w.type===er&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===rr&&de===6402&&w.type!==hv&&w.type!==Ji&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=Ji,he=s.convert(w.type)),w.format===vs&&de===6402&&(de=34041,w.type!==ss&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=ss,he=s.convert(w.type))),I&&(et?n.texStorage2D(3553,1,de,W.width,W.height):n.texImage2D(3553,0,de,W.width,W.height,0,ce,he,null));else if(w.isDataTexture)if(Ne.length>0&&pe){et&&I&&n.texStorage2D(3553,le,de,Ne[0].width,Ne[0].height);for(let j=0,ae=Ne.length;j<ae;j++)we=Ne[j],et?n.texSubImage2D(3553,j,0,0,we.width,we.height,ce,he,we.data):n.texImage2D(3553,j,de,we.width,we.height,0,ce,he,we.data);w.generateMipmaps=!1}else et?(I&&n.texStorage2D(3553,le,de,W.width,W.height),n.texSubImage2D(3553,0,0,0,W.width,W.height,ce,he,W.data)):n.texImage2D(3553,0,de,W.width,W.height,0,ce,he,W.data);else if(w.isCompressedTexture){et&&I&&n.texStorage2D(3553,le,de,Ne[0].width,Ne[0].height);for(let j=0,ae=Ne.length;j<ae;j++)we=Ne[j],w.format!==Fn?ce!==null?et?n.compressedTexSubImage2D(3553,j,0,0,we.width,we.height,ce,we.data):n.compressedTexImage2D(3553,j,de,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?n.texSubImage2D(3553,j,0,0,we.width,we.height,ce,he,we.data):n.texImage2D(3553,j,de,we.width,we.height,0,ce,he,we.data)}else if(w.isDataArrayTexture)et?(I&&n.texStorage3D(35866,le,de,W.width,W.height,W.depth),n.texSubImage3D(35866,0,0,0,0,W.width,W.height,W.depth,ce,he,W.data)):n.texImage3D(35866,0,de,W.width,W.height,W.depth,0,ce,he,W.data);else if(w.isData3DTexture)et?(I&&n.texStorage3D(32879,le,de,W.width,W.height,W.depth),n.texSubImage3D(32879,0,0,0,0,W.width,W.height,W.depth,ce,he,W.data)):n.texImage3D(32879,0,de,W.width,W.height,W.depth,0,ce,he,W.data);else if(w.isFramebufferTexture){if(I)if(et)n.texStorage2D(3553,le,de,W.width,W.height);else{let j=W.width,ae=W.height;for(let se=0;se<le;se++)n.texImage2D(3553,se,de,j,ae,0,ce,he,null),j>>=1,ae>>=1}}else if(Ne.length>0&&pe){et&&I&&n.texStorage2D(3553,le,de,Ne[0].width,Ne[0].height);for(let j=0,ae=Ne.length;j<ae;j++)we=Ne[j],et?n.texSubImage2D(3553,j,0,0,ce,he,we):n.texImage2D(3553,j,de,ce,he,we);w.generateMipmaps=!1}else et?(I&&n.texStorage2D(3553,le,de,W.width,W.height),n.texSubImage2D(3553,0,0,0,ce,he,W)):n.texImage2D(3553,0,de,ce,he,W);T(w,pe)&&A(ee),oe.__currentVersion=oe.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function ve(R,w,$){if(w.image.length!==6)return;const ee=me(R,w),ne=w.source;if(n.activeTexture(33984+$),n.bindTexture(34067,R.__webglTexture),ne.version!==ne.__currentVersion||ee===!0){t.pixelStorei(37440,w.flipY),t.pixelStorei(37441,w.premultiplyAlpha),t.pixelStorei(3317,w.unpackAlignment),t.pixelStorei(37443,0);const oe=w.isCompressedTexture||w.image[0].isCompressedTexture,Se=w.image[0]&&w.image[0].isDataTexture,W=[];for(let j=0;j<6;j++)!oe&&!Se?W[j]=y(w.image[j],!1,!0,u):W[j]=Se?w.image[j].image:w.image[j],W[j]=Ln(w,W[j]);const pe=W[0],ce=S(pe)||a,he=s.convert(w.format,w.encoding),de=s.convert(w.type),we=x(w.internalFormat,he,de,w.encoding),Ne=a&&w.isVideoTexture!==!0,et=ne.__currentVersion===void 0||ee===!0;let I=L(w,pe,ce);G(34067,w,ce);let le;if(oe){Ne&&et&&n.texStorage2D(34067,I,we,pe.width,pe.height);for(let j=0;j<6;j++){le=W[j].mipmaps;for(let ae=0;ae<le.length;ae++){const se=le[ae];w.format!==Fn?he!==null?Ne?n.compressedTexSubImage2D(34069+j,ae,0,0,se.width,se.height,he,se.data):n.compressedTexImage2D(34069+j,ae,we,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?n.texSubImage2D(34069+j,ae,0,0,se.width,se.height,he,de,se.data):n.texImage2D(34069+j,ae,we,se.width,se.height,0,he,de,se.data)}}}else{le=w.mipmaps,Ne&&et&&(le.length>0&&I++,n.texStorage2D(34067,I,we,W[0].width,W[0].height));for(let j=0;j<6;j++)if(Se){Ne?n.texSubImage2D(34069+j,0,0,0,W[j].width,W[j].height,he,de,W[j].data):n.texImage2D(34069+j,0,we,W[j].width,W[j].height,0,he,de,W[j].data);for(let ae=0;ae<le.length;ae++){const Ie=le[ae].image[j].image;Ne?n.texSubImage2D(34069+j,ae+1,0,0,Ie.width,Ie.height,he,de,Ie.data):n.texImage2D(34069+j,ae+1,we,Ie.width,Ie.height,0,he,de,Ie.data)}}else{Ne?n.texSubImage2D(34069+j,0,0,0,he,de,W[j]):n.texImage2D(34069+j,0,we,he,de,W[j]);for(let ae=0;ae<le.length;ae++){const se=le[ae];Ne?n.texSubImage2D(34069+j,ae+1,0,0,he,de,se.image[j]):n.texImage2D(34069+j,ae+1,we,he,de,se.image[j])}}}T(w,ce)&&A(34067),ne.__currentVersion=ne.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function re(R,w,$,ee,ne){const oe=s.convert($.format,$.encoding),Se=s.convert($.type),W=x($.internalFormat,oe,Se,$.encoding);i.get(w).__hasExternalTextures||(ne===32879||ne===35866?n.texImage3D(ne,0,W,w.width,w.height,w.depth,0,oe,Se,null):n.texImage2D(ne,0,W,w.width,w.height,0,oe,Se,null)),n.bindFramebuffer(36160,R),Be(w)?d.framebufferTexture2DMultisampleEXT(36160,ee,ne,i.get($).__webglTexture,0,mt(w)):t.framebufferTexture2D(36160,ee,ne,i.get($).__webglTexture,0),n.bindFramebuffer(36160,null)}function Ve(R,w,$){if(t.bindRenderbuffer(36161,R),w.depthBuffer&&!w.stencilBuffer){let ee=33189;if($||Be(w)){const ne=w.depthTexture;ne&&ne.isDepthTexture&&(ne.type===er?ee=36012:ne.type===Ji&&(ee=33190));const oe=mt(w);Be(w)?d.renderbufferStorageMultisampleEXT(36161,oe,ee,w.width,w.height):t.renderbufferStorageMultisample(36161,oe,ee,w.width,w.height)}else t.renderbufferStorage(36161,ee,w.width,w.height);t.framebufferRenderbuffer(36160,36096,36161,R)}else if(w.depthBuffer&&w.stencilBuffer){const ee=mt(w);$&&Be(w)===!1?t.renderbufferStorageMultisample(36161,ee,35056,w.width,w.height):Be(w)?d.renderbufferStorageMultisampleEXT(36161,ee,35056,w.width,w.height):t.renderbufferStorage(36161,34041,w.width,w.height),t.framebufferRenderbuffer(36160,33306,36161,R)}else{const ee=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ne=0;ne<ee.length;ne++){const oe=ee[ne],Se=s.convert(oe.format,oe.encoding),W=s.convert(oe.type),pe=x(oe.internalFormat,Se,W,oe.encoding),ce=mt(w);$&&Be(w)===!1?t.renderbufferStorageMultisample(36161,ce,pe,w.width,w.height):Be(w)?d.renderbufferStorageMultisampleEXT(36161,ce,pe,w.width,w.height):t.renderbufferStorage(36161,pe,w.width,w.height)}}t.bindRenderbuffer(36161,null)}function Te(R,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(36160,R),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),P(w.depthTexture,0);const ee=i.get(w.depthTexture).__webglTexture,ne=mt(w);if(w.depthTexture.format===rr)Be(w)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,ee,0,ne):t.framebufferTexture2D(36160,36096,3553,ee,0);else if(w.depthTexture.format===vs)Be(w)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,ee,0,ne):t.framebufferTexture2D(36160,33306,3553,ee,0);else throw new Error("Unknown depthTexture format")}function _e(R){const w=i.get(R),$=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!w.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");Te(w.__webglFramebuffer,R)}else if($){w.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)n.bindFramebuffer(36160,w.__webglFramebuffer[ee]),w.__webglDepthbuffer[ee]=t.createRenderbuffer(),Ve(w.__webglDepthbuffer[ee],R,!1)}else n.bindFramebuffer(36160,w.__webglFramebuffer),w.__webglDepthbuffer=t.createRenderbuffer(),Ve(w.__webglDepthbuffer,R,!1);n.bindFramebuffer(36160,null)}function pt(R,w,$){const ee=i.get(R);w!==void 0&&re(ee.__webglFramebuffer,R,R.texture,36064,3553),$!==void 0&&_e(R)}function Gt(R){const w=R.texture,$=i.get(R),ee=i.get(w);R.addEventListener("dispose",Q),R.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=t.createTexture()),ee.__version=w.version,o.memory.textures++);const ne=R.isWebGLCubeRenderTarget===!0,oe=R.isWebGLMultipleRenderTargets===!0,Se=S(R)||a;if(ne){$.__webglFramebuffer=[];for(let W=0;W<6;W++)$.__webglFramebuffer[W]=t.createFramebuffer()}else{if($.__webglFramebuffer=t.createFramebuffer(),oe)if(r.drawBuffers){const W=R.texture;for(let pe=0,ce=W.length;pe<ce;pe++){const he=i.get(W[pe]);he.__webglTexture===void 0&&(he.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&Be(R)===!1){const W=oe?w:[w];$.__webglMultisampledFramebuffer=t.createFramebuffer(),$.__webglColorRenderbuffer=[],n.bindFramebuffer(36160,$.__webglMultisampledFramebuffer);for(let pe=0;pe<W.length;pe++){const ce=W[pe];$.__webglColorRenderbuffer[pe]=t.createRenderbuffer(),t.bindRenderbuffer(36161,$.__webglColorRenderbuffer[pe]);const he=s.convert(ce.format,ce.encoding),de=s.convert(ce.type),we=x(ce.internalFormat,he,de,ce.encoding),Ne=mt(R);t.renderbufferStorageMultisample(36161,Ne,we,R.width,R.height),t.framebufferRenderbuffer(36160,36064+pe,36161,$.__webglColorRenderbuffer[pe])}t.bindRenderbuffer(36161,null),R.depthBuffer&&($.__webglDepthRenderbuffer=t.createRenderbuffer(),Ve($.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(36160,null)}}if(ne){n.bindTexture(34067,ee.__webglTexture),G(34067,w,Se);for(let W=0;W<6;W++)re($.__webglFramebuffer[W],R,w,36064,34069+W);T(w,Se)&&A(34067),n.unbindTexture()}else if(oe){const W=R.texture;for(let pe=0,ce=W.length;pe<ce;pe++){const he=W[pe],de=i.get(he);n.bindTexture(3553,de.__webglTexture),G(3553,he,Se),re($.__webglFramebuffer,R,he,36064+pe,3553),T(he,Se)&&A(3553)}n.unbindTexture()}else{let W=3553;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?W=R.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(W,ee.__webglTexture),G(W,w,Se),re($.__webglFramebuffer,R,w,36064,W),T(w,Se)&&A(W),n.unbindTexture()}R.depthBuffer&&_e(R)}function Tt(R){const w=S(R)||a,$=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let ee=0,ne=$.length;ee<ne;ee++){const oe=$[ee];if(T(oe,w)){const Se=R.isWebGLCubeRenderTarget?34067:3553,W=i.get(oe).__webglTexture;n.bindTexture(Se,W),A(Se),n.unbindTexture()}}}function An(R){if(a&&R.samples>0&&Be(R)===!1){const w=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],$=R.width,ee=R.height;let ne=16384;const oe=[],Se=R.stencilBuffer?33306:36096,W=i.get(R),pe=R.isWebGLMultipleRenderTargets===!0;if(pe)for(let ce=0;ce<w.length;ce++)n.bindFramebuffer(36160,W.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(36160,36064+ce,36161,null),n.bindFramebuffer(36160,W.__webglFramebuffer),t.framebufferTexture2D(36009,36064+ce,3553,null,0);n.bindFramebuffer(36008,W.__webglMultisampledFramebuffer),n.bindFramebuffer(36009,W.__webglFramebuffer);for(let ce=0;ce<w.length;ce++){oe.push(36064+ce),R.depthBuffer&&oe.push(Se);const he=W.__ignoreDepthValues!==void 0?W.__ignoreDepthValues:!1;if(he===!1&&(R.depthBuffer&&(ne|=256),R.stencilBuffer&&(ne|=1024)),pe&&t.framebufferRenderbuffer(36008,36064,36161,W.__webglColorRenderbuffer[ce]),he===!0&&(t.invalidateFramebuffer(36008,[Se]),t.invalidateFramebuffer(36009,[Se])),pe){const de=i.get(w[ce]).__webglTexture;t.framebufferTexture2D(36009,36064,3553,de,0)}t.blitFramebuffer(0,0,$,ee,0,0,$,ee,ne,9728),g&&t.invalidateFramebuffer(36008,oe)}if(n.bindFramebuffer(36008,null),n.bindFramebuffer(36009,null),pe)for(let ce=0;ce<w.length;ce++){n.bindFramebuffer(36160,W.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(36160,36064+ce,36161,W.__webglColorRenderbuffer[ce]);const he=i.get(w[ce]).__webglTexture;n.bindFramebuffer(36160,W.__webglFramebuffer),t.framebufferTexture2D(36009,36064+ce,3553,he,0)}n.bindFramebuffer(36009,W.__webglMultisampledFramebuffer)}}function mt(R){return Math.min(f,R.samples)}function Be(R){const w=i.get(R);return a&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Bn(R){const w=o.render.frame;_.get(R)!==w&&(_.set(R,w),R.update())}function Ln(R,w){const $=R.encoding,ee=R.format,ne=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===Hc||$!==hr&&($===Qe?a===!1?e.has("EXT_sRGB")===!0&&ee===Fn?(R.format=Hc,R.minFilter=Ft,R.generateMipmaps=!1):w=gv.sRGBToLinear(w):(ee!==Fn||ne!==dr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",$)),w}this.allocateTextureUnit=C,this.resetTextureUnits=K,this.setTexture2D=P,this.setTexture2DArray=z,this.setTexture3D=F,this.setTextureCube=X,this.rebindTextures=pt,this.setupRenderTarget=Gt,this.updateRenderTargetMipmap=Tt,this.updateMultisampleRenderTarget=An,this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=re,this.useMultisampledRTT=Be}function m2(t,e,n){const i=n.isWebGL2;function r(s,o=null){let a;if(s===dr)return 5121;if(s===l1)return 32819;if(s===u1)return 32820;if(s===s1)return 5120;if(s===o1)return 5122;if(s===hv)return 5123;if(s===a1)return 5124;if(s===Ji)return 5125;if(s===er)return 5126;if(s===_o)return i?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===c1)return 6406;if(s===Fn)return 6408;if(s===d1)return 6409;if(s===h1)return 6410;if(s===rr)return 6402;if(s===vs)return 34041;if(s===p1)return 6403;if(s===f1)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===Hc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===m1)return 36244;if(s===g1)return 33319;if(s===v1)return 33320;if(s===_1)return 36249;if(s===su||s===ou||s===au||s===lu)if(o===Qe)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===su)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ou)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===au)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===lu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===su)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ou)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===au)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===lu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ah||s===Lh||s===Rh||s===Ph)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Ah)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Lh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Rh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ph)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===x1)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Dh||s===Ih)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Dh)return o===Qe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Ih)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===kh||s===Nh||s===Fh||s===zh||s===Oh||s===Uh||s===Bh||s===Gh||s===Vh||s===Hh||s===Wh||s===jh||s===$h||s===Xh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===kh)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Nh)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Fh)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===zh)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Oh)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Uh)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Bh)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Gh)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Vh)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Hh)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Wh)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===jh)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===$h)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Xh)return o===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===qh)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===qh)return o===Qe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===ss?i?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class g2 extends Sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ma extends Cn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const v2={type:"move"};class zu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ma,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ma,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ma,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const p of e.hand.values()){const h=n.getJointPose(p,i);if(u.joints[p.jointName]===void 0){const v=new ma;v.matrixAutoUpdate=!1,v.visible=!1,u.joints[p.jointName]=v,u.add(v)}const m=u.joints[p.jointName];h!==null&&(m.matrix.fromArray(h.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.jointRadius=h.radius),m.visible=h!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],d=c.position.distanceTo(f.position),g=.02,_=.005;u.inputState.pinching&&d>g+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=g-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(v2)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}}class _2 extends Zt{constructor(e,n,i,r,s,o,a,l,u,c){if(c=c!==void 0?c:rr,c!==rr&&c!==vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===rr&&(i=Ji),i===void 0&&c===vs&&(i=ss),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Nt,this.minFilter=l!==void 0?l:Nt,this.flipY=!1,this.generateMipmaps=!1}}class x2 extends ws{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=null,u=null,c=null,f=null,d=null,g=null;const _=n.getContextAttributes();let p=null,h=null;const m=[],v=[],y=new Sn;y.layers.enable(1),y.viewport=new ot;const S=new Sn;S.layers.enable(2),S.viewport=new ot;const M=[y,S],T=new g2;T.layers.enable(1),T.layers.enable(2);let A=null,x=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(b){let P=m[b];return P===void 0&&(P=new zu,m[b]=P),P.getTargetRaySpace()},this.getControllerGrip=function(b){let P=m[b];return P===void 0&&(P=new zu,m[b]=P),P.getGripSpace()},this.getHand=function(b){let P=m[b];return P===void 0&&(P=new zu,m[b]=P),P.getHandSpace()};function L(b){const P=v.indexOf(b.inputSource);if(P===-1)return;const z=m[P];z!==void 0&&z.dispatchEvent({type:b.type,data:b.inputSource})}function D(){r.removeEventListener("select",L),r.removeEventListener("selectstart",L),r.removeEventListener("selectend",L),r.removeEventListener("squeeze",L),r.removeEventListener("squeezestart",L),r.removeEventListener("squeezeend",L),r.removeEventListener("end",D),r.removeEventListener("inputsourceschange",N);for(let b=0;b<m.length;b++){const P=v[b];P!==null&&(v[b]=null,m[b].disconnect(P))}A=null,x=null,e.setRenderTarget(p),d=null,f=null,c=null,r=null,h=null,C.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(b){s=b,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(b){a=b,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(b){l=b},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return c},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(b){if(r=b,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",L),r.addEventListener("selectstart",L),r.addEventListener("selectend",L),r.addEventListener("squeeze",L),r.addEventListener("squeezestart",L),r.addEventListener("squeezeend",L),r.addEventListener("end",D),r.addEventListener("inputsourceschange",N),_.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const P={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:_.alpha,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,n,P),r.updateRenderState({baseLayer:d}),h=new pr(d.framebufferWidth,d.framebufferHeight,{format:Fn,type:dr,encoding:e.outputEncoding})}else{let P=null,z=null,F=null;_.depth&&(F=_.stencil?35056:33190,P=_.stencil?vs:rr,z=_.stencil?ss:Ji);const X={colorFormat:32856,depthFormat:F,scaleFactor:s};c=new XRWebGLBinding(r,n),f=c.createProjectionLayer(X),r.updateRenderState({layers:[f]}),h=new pr(f.textureWidth,f.textureHeight,{format:Fn,type:dr,depthTexture:new _2(f.textureWidth,f.textureHeight,z,void 0,void 0,void 0,void 0,void 0,void 0,P),stencilBuffer:_.stencil,encoding:e.outputEncoding,samples:_.antialias?4:0});const te=e.properties.get(h);te.__ignoreDepthValues=f.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await r.requestReferenceSpace(a),C.setContext(r),C.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function N(b){for(let P=0;P<b.removed.length;P++){const z=b.removed[P],F=v.indexOf(z);F>=0&&(v[F]=null,m[F].dispatchEvent({type:"disconnected",data:z}))}for(let P=0;P<b.added.length;P++){const z=b.added[P];let F=v.indexOf(z);if(F===-1){for(let te=0;te<m.length;te++)if(te>=v.length){v.push(z),F=te;break}else if(v[te]===null){v[te]=z,F=te;break}if(F===-1)break}const X=m[F];X&&X.dispatchEvent({type:"connected",data:z})}}const Q=new U,J=new U;function k(b,P,z){Q.setFromMatrixPosition(P.matrixWorld),J.setFromMatrixPosition(z.matrixWorld);const F=Q.distanceTo(J),X=P.projectionMatrix.elements,te=z.projectionMatrix.elements,fe=X[14]/(X[10]-1),G=X[14]/(X[10]+1),me=(X[9]+1)/X[5],ge=(X[9]-1)/X[5],ve=(X[8]-1)/X[0],re=(te[8]+1)/te[0],Ve=fe*ve,Te=fe*re,_e=F/(-ve+re),pt=_e*-ve;P.matrixWorld.decompose(b.position,b.quaternion,b.scale),b.translateX(pt),b.translateZ(_e),b.matrixWorld.compose(b.position,b.quaternion,b.scale),b.matrixWorldInverse.copy(b.matrixWorld).invert();const Gt=fe+_e,Tt=G+_e,An=Ve-pt,mt=Te+(F-pt),Be=me*G/Tt*Gt,Bn=ge*G/Tt*Gt;b.projectionMatrix.makePerspective(An,mt,Be,Bn,Gt,Tt)}function q(b,P){P===null?b.matrixWorld.copy(b.matrix):b.matrixWorld.multiplyMatrices(P.matrixWorld,b.matrix),b.matrixWorldInverse.copy(b.matrixWorld).invert()}this.updateCamera=function(b){if(r===null)return;T.near=S.near=y.near=b.near,T.far=S.far=y.far=b.far,(A!==T.near||x!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),A=T.near,x=T.far);const P=b.parent,z=T.cameras;q(T,P);for(let X=0;X<z.length;X++)q(z[X],P);T.matrixWorld.decompose(T.position,T.quaternion,T.scale),b.position.copy(T.position),b.quaternion.copy(T.quaternion),b.scale.copy(T.scale),b.matrix.copy(T.matrix),b.matrixWorld.copy(T.matrixWorld);const F=b.children;for(let X=0,te=F.length;X<te;X++)F[X].updateMatrixWorld(!0);z.length===2?k(T,y,S):T.projectionMatrix.copy(y.projectionMatrix)},this.getCamera=function(){return T},this.getFoveation=function(){if(f!==null)return f.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(b){f!==null&&(f.fixedFoveation=b),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=b)};let V=null;function K(b,P){if(u=P.getViewerPose(l||o),g=P,u!==null){const z=u.views;d!==null&&(e.setRenderTargetFramebuffer(h,d.framebuffer),e.setRenderTarget(h));let F=!1;z.length!==T.cameras.length&&(T.cameras.length=0,F=!0);for(let X=0;X<z.length;X++){const te=z[X];let fe=null;if(d!==null)fe=d.getViewport(te);else{const me=c.getViewSubImage(f,te);fe=me.viewport,X===0&&(e.setRenderTargetTextures(h,me.colorTexture,f.ignoreDepthValues?void 0:me.depthStencilTexture),e.setRenderTarget(h))}let G=M[X];G===void 0&&(G=new Sn,G.layers.enable(X),G.viewport=new ot,M[X]=G),G.matrix.fromArray(te.transform.matrix),G.projectionMatrix.fromArray(te.projectionMatrix),G.viewport.set(fe.x,fe.y,fe.width,fe.height),X===0&&T.matrix.copy(G.matrix),F===!0&&T.cameras.push(G)}}for(let z=0;z<m.length;z++){const F=v[z],X=m[z];F!==null&&X!==void 0&&X.update(F,P,l||o)}V&&V(b,P),g=null}const C=new bv;C.setAnimationLoop(K),this.setAnimationLoop=function(b){V=b},this.dispose=function(){}}}function y2(t,e){function n(p,h){p.fogColor.value.copy(h.color),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function i(p,h,m,v,y){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(p,h):h.isMeshToonMaterial?(r(p,h),c(p,h)):h.isMeshPhongMaterial?(r(p,h),u(p,h)):h.isMeshStandardMaterial?(r(p,h),f(p,h),h.isMeshPhysicalMaterial&&d(p,h,y)):h.isMeshMatcapMaterial?(r(p,h),g(p,h)):h.isMeshDepthMaterial?r(p,h):h.isMeshDistanceMaterial?(r(p,h),_(p,h)):h.isMeshNormalMaterial?r(p,h):h.isLineBasicMaterial?(s(p,h),h.isLineDashedMaterial&&o(p,h)):h.isPointsMaterial?a(p,h,m,v):h.isSpriteMaterial?l(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.bumpMap&&(p.bumpMap.value=h.bumpMap,p.bumpScale.value=h.bumpScale,h.side===bn&&(p.bumpScale.value*=-1)),h.displacementMap&&(p.displacementMap.value=h.displacementMap,p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap),h.normalMap&&(p.normalMap.value=h.normalMap,p.normalScale.value.copy(h.normalScale),h.side===bn&&p.normalScale.value.negate()),h.specularMap&&(p.specularMap.value=h.specularMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const m=e.get(h).envMap;if(m&&(p.envMap.value=m,p.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap){p.lightMap.value=h.lightMap;const S=t.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=h.lightMapIntensity*S}h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity);let v;h.map?v=h.map:h.specularMap?v=h.specularMap:h.displacementMap?v=h.displacementMap:h.normalMap?v=h.normalMap:h.bumpMap?v=h.bumpMap:h.roughnessMap?v=h.roughnessMap:h.metalnessMap?v=h.metalnessMap:h.alphaMap?v=h.alphaMap:h.emissiveMap?v=h.emissiveMap:h.clearcoatMap?v=h.clearcoatMap:h.clearcoatNormalMap?v=h.clearcoatNormalMap:h.clearcoatRoughnessMap?v=h.clearcoatRoughnessMap:h.iridescenceMap?v=h.iridescenceMap:h.iridescenceThicknessMap?v=h.iridescenceThicknessMap:h.specularIntensityMap?v=h.specularIntensityMap:h.specularColorMap?v=h.specularColorMap:h.transmissionMap?v=h.transmissionMap:h.thicknessMap?v=h.thicknessMap:h.sheenColorMap?v=h.sheenColorMap:h.sheenRoughnessMap&&(v=h.sheenRoughnessMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),p.uvTransform.value.copy(v.matrix));let y;h.aoMap?y=h.aoMap:h.lightMap&&(y=h.lightMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uv2Transform.value.copy(y.matrix))}function s(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity}function o(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function a(p,h,m,v){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*m,p.scale.value=v*.5,h.map&&(p.map.value=h.map),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);let y;h.map?y=h.map:h.alphaMap&&(y=h.alphaMap),y!==void 0&&(y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uvTransform.value.copy(y.matrix))}function l(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);let m;h.map?m=h.map:h.alphaMap&&(m=h.alphaMap),m!==void 0&&(m.matrixAutoUpdate===!0&&m.updateMatrix(),p.uvTransform.value.copy(m.matrix))}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function c(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function f(p,h){p.roughness.value=h.roughness,p.metalness.value=h.metalness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap),h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap),e.get(h).envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function d(p,h,m){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap)),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap),h.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),p.clearcoatNormalMap.value=h.clearcoatNormalMap,h.side===bn&&p.clearcoatNormalScale.value.negate())),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap)),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=m.texture,p.transmissionSamplerSize.value.set(m.width,m.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap)}function g(p,h){h.matcap&&(p.matcap.value=h.matcap)}function _(p,h){p.referencePosition.value.copy(h.referencePosition),p.nearDistance.value=h.nearDistance,p.farDistance.value=h.farDistance}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function S2(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(35375):0;function l(v,y){const S=y.program;i.uniformBlockBinding(v,S)}function u(v,y){let S=r[v.id];S===void 0&&(_(v),S=c(v),r[v.id]=S,v.addEventListener("dispose",h));const M=y.program;i.updateUBOMapping(v,M);const T=e.render.frame;s[v.id]!==T&&(d(v),s[v.id]=T)}function c(v){const y=f();v.__bindingPointIndex=y;const S=t.createBuffer(),M=v.__size,T=v.usage;return t.bindBuffer(35345,S),t.bufferData(35345,M,T),t.bindBuffer(35345,null),t.bindBufferBase(35345,y,S),S}function f(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const y=r[v.id],S=v.uniforms,M=v.__cache;t.bindBuffer(35345,y);for(let T=0,A=S.length;T<A;T++){const x=S[T];if(g(x,T,M)===!0){const L=x.value,D=x.__offset;typeof L=="number"?(x.__data[0]=L,t.bufferSubData(35345,D,x.__data)):(x.value.isMatrix3?(x.__data[0]=x.value.elements[0],x.__data[1]=x.value.elements[1],x.__data[2]=x.value.elements[2],x.__data[3]=x.value.elements[0],x.__data[4]=x.value.elements[3],x.__data[5]=x.value.elements[4],x.__data[6]=x.value.elements[5],x.__data[7]=x.value.elements[0],x.__data[8]=x.value.elements[6],x.__data[9]=x.value.elements[7],x.__data[10]=x.value.elements[8],x.__data[11]=x.value.elements[0]):L.toArray(x.__data),t.bufferSubData(35345,D,x.__data))}}t.bindBuffer(35345,null)}function g(v,y,S){const M=v.value;if(S[y]===void 0)return typeof M=="number"?S[y]=M:S[y]=M.clone(),!0;if(typeof M=="number"){if(S[y]!==M)return S[y]=M,!0}else{const T=S[y];if(T.equals(M)===!1)return T.copy(M),!0}return!1}function _(v){const y=v.uniforms;let S=0;const M=16;let T=0;for(let A=0,x=y.length;A<x;A++){const L=y[A],D=p(L);if(L.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=S,A>0){T=S%M;const N=M-T;T!==0&&N-D.boundary<0&&(S+=M-T,L.__offset=S)}S+=D.storage}return T=S%M,T>0&&(S+=M-T),v.__size=S,v.__cache={},this}function p(v){const y=v.value,S={boundary:0,storage:0};return typeof y=="number"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),S}function h(v){const y=v.target;y.removeEventListener("dispose",h);const S=o.indexOf(y.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function m(){for(const v in r)t.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:u,dispose:m}}function M2(){const t=xo("canvas");return t.style.display="block",t}function Dv(t={}){this.isWebGLRenderer=!0;const e=t.canvas!==void 0?t.canvas:M2(),n=t.context!==void 0?t.context:null,i=t.depth!==void 0?t.depth:!0,r=t.stencil!==void 0?t.stencil:!0,s=t.antialias!==void 0?t.antialias:!1,o=t.premultipliedAlpha!==void 0?t.premultipliedAlpha:!0,a=t.preserveDrawingBuffer!==void 0?t.preserveDrawingBuffer:!1,l=t.powerPreference!==void 0?t.powerPreference:"default",u=t.failIfMajorPerformanceCaveat!==void 0?t.failIfMajorPerformanceCaveat:!1;let c;n!==null?c=n.getContextAttributes().alpha:c=t.alpha!==void 0?t.alpha:!1;let f=null,d=null;const g=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=hr,this.physicallyCorrectLights=!1,this.toneMapping=ti,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const p=this;let h=!1,m=0,v=0,y=null,S=-1,M=null;const T=new ot,A=new ot;let x=null,L=e.width,D=e.height,N=1,Q=null,J=null;const k=new ot(0,0,L,D),q=new ot(0,0,L,D);let V=!1;const K=new Ev;let C=!1,b=!1,P=null;const z=new _t,F=new Ue,X=new U,te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function fe(){return y===null?N:1}let G=n;function me(E,O){for(let H=0;H<E.length;H++){const B=E[H],Y=e.getContext(B,O);if(Y!==null)return Y}return null}try{const E={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${jf}`),e.addEventListener("webglcontextlost",we,!1),e.addEventListener("webglcontextrestored",Ne,!1),e.addEventListener("webglcontextcreationerror",et,!1),G===null){const O=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&O.shift(),G=me(O,E),G===null)throw me(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let ge,ve,re,Ve,Te,_e,pt,Gt,Tt,An,mt,Be,Bn,Ln,R,w,$,ee,ne,oe,Se,W,pe,ce;function he(){ge=new DE(G),ve=new TE(G,ge,t),ge.init(ve),W=new m2(G,ge,ve),re=new h2(G,ge,ve),Ve=new NE,Te=new J3,_e=new p2(G,ge,re,Te,ve,W,Ve),pt=new AE(p),Gt=new PE(p),Tt=new X1(G,ve),pe=new EE(G,ge,Tt,ve),An=new IE(G,Tt,Ve,pe),mt=new UE(G,An,Tt,Ve),ne=new OE(G,ve,_e),w=new CE(Te),Be=new Q3(p,pt,Gt,ge,ve,pe,w),Bn=new y2(p,Te),Ln=new t2,R=new a2(ge,ve),ee=new wE(p,pt,re,mt,c,o),$=new d2(p,mt,ve),ce=new S2(G,Ve,ve,re),oe=new bE(G,ge,Ve,ve),Se=new kE(G,ge,Ve,ve),Ve.programs=Be.programs,p.capabilities=ve,p.extensions=ge,p.properties=Te,p.renderLists=Ln,p.shadowMap=$,p.state=re,p.info=Ve}he();const de=new x2(p,G);this.xr=de,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const E=ge.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=ge.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(E){E!==void 0&&(N=E,this.setSize(L,D,!1))},this.getSize=function(E){return E.set(L,D)},this.setSize=function(E,O,H){if(de.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=E,D=O,e.width=Math.floor(E*N),e.height=Math.floor(O*N),H!==!1&&(e.style.width=E+"px",e.style.height=O+"px"),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(L*N,D*N).floor()},this.setDrawingBufferSize=function(E,O,H){L=E,D=O,N=H,e.width=Math.floor(E*H),e.height=Math.floor(O*H),this.setViewport(0,0,E,O)},this.getCurrentViewport=function(E){return E.copy(T)},this.getViewport=function(E){return E.copy(k)},this.setViewport=function(E,O,H,B){E.isVector4?k.set(E.x,E.y,E.z,E.w):k.set(E,O,H,B),re.viewport(T.copy(k).multiplyScalar(N).floor())},this.getScissor=function(E){return E.copy(q)},this.setScissor=function(E,O,H,B){E.isVector4?q.set(E.x,E.y,E.z,E.w):q.set(E,O,H,B),re.scissor(A.copy(q).multiplyScalar(N).floor())},this.getScissorTest=function(){return V},this.setScissorTest=function(E){re.setScissorTest(V=E)},this.setOpaqueSort=function(E){Q=E},this.setTransparentSort=function(E){J=E},this.getClearColor=function(E){return E.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor.apply(ee,arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha.apply(ee,arguments)},this.clear=function(E=!0,O=!0,H=!0){let B=0;E&&(B|=16384),O&&(B|=256),H&&(B|=1024),G.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",we,!1),e.removeEventListener("webglcontextrestored",Ne,!1),e.removeEventListener("webglcontextcreationerror",et,!1),Ln.dispose(),R.dispose(),Te.dispose(),pt.dispose(),Gt.dispose(),mt.dispose(),pe.dispose(),ce.dispose(),Be.dispose(),de.dispose(),de.removeEventListener("sessionstart",Ie),de.removeEventListener("sessionend",ct),P&&(P.dispose(),P=null),tt.stop()};function we(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),h=!0}function Ne(){console.log("THREE.WebGLRenderer: Context Restored."),h=!1;const E=Ve.autoReset,O=$.enabled,H=$.autoUpdate,B=$.needsUpdate,Y=$.type;he(),Ve.autoReset=E,$.enabled=O,$.autoUpdate=H,$.needsUpdate=B,$.type=Y}function et(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function I(E){const O=E.target;O.removeEventListener("dispose",I),le(O)}function le(E){j(E),Te.remove(E)}function j(E){const O=Te.get(E).programs;O!==void 0&&(O.forEach(function(H){Be.releaseProgram(H)}),E.isShaderMaterial&&Be.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,H,B,Y,xe){O===null&&(O=te);const Me=Y.isMesh&&Y.matrixWorld.determinant()<0,be=Ov(E,O,H,B,Y);re.setMaterial(B,Me);let Ee=H.index;const ze=H.attributes.position;if(Ee===null){if(ze===void 0||ze.count===0)return}else if(Ee.count===0)return;let Pe=1;B.wireframe===!0&&(Ee=An.getWireframeAttribute(H),Pe=2),pe.setup(Y,B,be,H,Ee);let ke,Ze=oe;Ee!==null&&(ke=Tt.get(Ee),Ze=Se,Ze.setIndex(ke));const Bi=Ee!==null?Ee.count:ze.count,xr=H.drawRange.start*Pe,yr=H.drawRange.count*Pe,Rn=xe!==null?xe.start*Pe:0,Fe=xe!==null?xe.count*Pe:1/0,Sr=Math.max(xr,Rn),it=Math.min(Bi,xr+yr,Rn+Fe)-1,tn=Math.max(0,it-Sr+1);if(tn!==0){if(Y.isMesh)B.wireframe===!0?(re.setLineWidth(B.wireframeLinewidth*fe()),Ze.setMode(1)):Ze.setMode(4);else if(Y.isLine){let ui=B.linewidth;ui===void 0&&(ui=1),re.setLineWidth(ui*fe()),Y.isLineSegments?Ze.setMode(1):Y.isLineLoop?Ze.setMode(2):Ze.setMode(3)}else Y.isPoints?Ze.setMode(0):Y.isSprite&&Ze.setMode(4);if(Y.isInstancedMesh)Ze.renderInstances(Sr,tn,Y.count);else if(H.isInstancedBufferGeometry){const ui=Math.min(H.instanceCount,H._maxInstanceCount);Ze.renderInstances(Sr,tn,ui)}else Ze.render(Sr,tn)}},this.compile=function(E,O){d=R.get(E),d.init(),_.push(d),E.traverseVisible(function(H){H.isLight&&H.layers.test(O.layers)&&(d.pushLight(H),H.castShadow&&d.pushShadow(H))}),d.setupLights(p.physicallyCorrectLights),E.traverse(function(H){const B=H.material;if(B)if(Array.isArray(B))for(let Y=0;Y<B.length;Y++){const xe=B[Y];Tl(xe,E,H)}else Tl(B,E,H)}),_.pop(),d=null};let ae=null;function se(E){ae&&ae(E)}function Ie(){tt.stop()}function ct(){tt.start()}const tt=new bv;tt.setAnimationLoop(se),typeof self<"u"&&tt.setContext(self),this.setAnimationLoop=function(E){ae=E,de.setAnimationLoop(E),E===null?tt.stop():tt.start()},de.addEventListener("sessionstart",Ie),de.addEventListener("sessionend",ct),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(h===!0)return;E.autoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(de.cameraAutoUpdate===!0&&de.updateCamera(O),O=de.getCamera()),E.isScene===!0&&E.onBeforeRender(p,E,O,y),d=R.get(E,_.length),d.init(),_.push(d),z.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),K.setFromProjectionMatrix(z),b=this.localClippingEnabled,C=w.init(this.clippingPlanes,b,O),f=Ln.get(E,g.length),f.init(),g.push(f),li(E,O,0,p.sortObjects),f.finish(),p.sortObjects===!0&&f.sort(Q,J),C===!0&&w.beginShadows();const H=d.state.shadowsArray;if($.render(H,E,O),C===!0&&w.endShadows(),this.info.autoReset===!0&&this.info.reset(),ee.render(f,E),d.setupLights(p.physicallyCorrectLights),O.isArrayCamera){const B=O.cameras;for(let Y=0,xe=B.length;Y<xe;Y++){const Me=B[Y];Ke(f,E,Me,Me.viewport)}}else Ke(f,E,O);y!==null&&(_e.updateMultisampleRenderTarget(y),_e.updateRenderTargetMipmap(y)),E.isScene===!0&&E.onAfterRender(p,E,O),pe.resetDefaultState(),S=-1,M=null,_.pop(),_.length>0?d=_[_.length-1]:d=null,g.pop(),g.length>0?f=g[g.length-1]:f=null};function li(E,O,H,B){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)H=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLight)d.pushLight(E),E.castShadow&&d.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||K.intersectsSprite(E)){B&&X.setFromMatrixPosition(E.matrixWorld).applyMatrix4(z);const Me=mt.update(E),be=E.material;be.visible&&f.push(E,Me,be,H,X.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(E.isSkinnedMesh&&E.skeleton.frame!==Ve.render.frame&&(E.skeleton.update(),E.skeleton.frame=Ve.render.frame),!E.frustumCulled||K.intersectsObject(E))){B&&X.setFromMatrixPosition(E.matrixWorld).applyMatrix4(z);const Me=mt.update(E),be=E.material;if(Array.isArray(be)){const Ee=Me.groups;for(let ze=0,Pe=Ee.length;ze<Pe;ze++){const ke=Ee[ze],Ze=be[ke.materialIndex];Ze&&Ze.visible&&f.push(E,Me,Ze,H,X.z,ke)}}else be.visible&&f.push(E,Me,be,H,X.z,null)}}const xe=E.children;for(let Me=0,be=xe.length;Me<be;Me++)li(xe[Me],O,H,B)}function Ke(E,O,H,B){const Y=E.opaque,xe=E.transmissive,Me=E.transparent;d.setupLightsView(H),xe.length>0&&Gn(Y,O,H),B&&re.viewport(T.copy(B)),Y.length>0&&en(Y,O,H),xe.length>0&&en(xe,O,H),Me.length>0&&en(Me,O,H),re.buffers.depth.setTest(!0),re.buffers.depth.setMask(!0),re.buffers.color.setMask(!0),re.setPolygonOffset(!1)}function Gn(E,O,H){const B=ve.isWebGL2;P===null&&(P=new pr(1,1,{generateMipmaps:!0,type:ge.has("EXT_color_buffer_half_float")?_o:dr,minFilter:yl,samples:B&&s===!0?4:0})),p.getDrawingBufferSize(F),B?P.setSize(F.x,F.y):P.setSize(Wc(F.x),Wc(F.y));const Y=p.getRenderTarget();p.setRenderTarget(P),p.clear();const xe=p.toneMapping;p.toneMapping=ti,en(E,O,H),p.toneMapping=xe,_e.updateMultisampleRenderTarget(P),_e.updateRenderTargetMipmap(P),p.setRenderTarget(Y)}function en(E,O,H){const B=O.isScene===!0?O.overrideMaterial:null;for(let Y=0,xe=E.length;Y<xe;Y++){const Me=E[Y],be=Me.object,Ee=Me.geometry,ze=B===null?Me.material:B,Pe=Me.group;be.layers.test(H.layers)&&zv(be,O,H,Ee,ze,Pe)}}function zv(E,O,H,B,Y,xe){E.onBeforeRender(p,O,H,B,Y,xe),E.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),Y.onBeforeRender(p,O,H,B,E,xe),Y.transparent===!0&&Y.side===ps?(Y.side=bn,Y.needsUpdate=!0,p.renderBufferDirect(H,O,B,Y,E,xe),Y.side=vo,Y.needsUpdate=!0,p.renderBufferDirect(H,O,B,Y,E,xe),Y.side=ps):p.renderBufferDirect(H,O,B,Y,E,xe),E.onAfterRender(p,O,H,B,Y,xe)}function Tl(E,O,H){O.isScene!==!0&&(O=te);const B=Te.get(E),Y=d.state.lights,xe=d.state.shadowsArray,Me=Y.state.version,be=Be.getParameters(E,Y.state,xe,O,H),Ee=Be.getProgramCacheKey(be);let ze=B.programs;B.environment=E.isMeshStandardMaterial?O.environment:null,B.fog=O.fog,B.envMap=(E.isMeshStandardMaterial?Gt:pt).get(E.envMap||B.environment),ze===void 0&&(E.addEventListener("dispose",I),ze=new Map,B.programs=ze);let Pe=ze.get(Ee);if(Pe!==void 0){if(B.currentProgram===Pe&&B.lightsStateVersion===Me)return Yf(E,be),Pe}else be.uniforms=Be.getUniforms(E),E.onBuild(H,be,p),E.onBeforeCompile(be,p),Pe=Be.acquireProgram(be,Ee),ze.set(Ee,Pe),B.uniforms=be.uniforms;const ke=B.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(ke.clippingPlanes=w.uniform),Yf(E,be),B.needsLights=Bv(E),B.lightsStateVersion=Me,B.needsLights&&(ke.ambientLightColor.value=Y.state.ambient,ke.lightProbe.value=Y.state.probe,ke.directionalLights.value=Y.state.directional,ke.directionalLightShadows.value=Y.state.directionalShadow,ke.spotLights.value=Y.state.spot,ke.spotLightShadows.value=Y.state.spotShadow,ke.rectAreaLights.value=Y.state.rectArea,ke.ltc_1.value=Y.state.rectAreaLTC1,ke.ltc_2.value=Y.state.rectAreaLTC2,ke.pointLights.value=Y.state.point,ke.pointLightShadows.value=Y.state.pointShadow,ke.hemisphereLights.value=Y.state.hemi,ke.directionalShadowMap.value=Y.state.directionalShadowMap,ke.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,ke.spotShadowMap.value=Y.state.spotShadowMap,ke.spotShadowMatrix.value=Y.state.spotShadowMatrix,ke.pointShadowMap.value=Y.state.pointShadowMap,ke.pointShadowMatrix.value=Y.state.pointShadowMatrix);const Ze=Pe.getUniforms(),Bi=Da.seqWithValue(Ze.seq,ke);return B.currentProgram=Pe,B.uniformsList=Bi,Pe}function Yf(E,O){const H=Te.get(E);H.outputEncoding=O.outputEncoding,H.instancing=O.instancing,H.skinning=O.skinning,H.morphTargets=O.morphTargets,H.morphNormals=O.morphNormals,H.morphColors=O.morphColors,H.morphTargetsCount=O.morphTargetsCount,H.numClippingPlanes=O.numClippingPlanes,H.numIntersection=O.numClipIntersection,H.vertexAlphas=O.vertexAlphas,H.vertexTangents=O.vertexTangents,H.toneMapping=O.toneMapping}function Ov(E,O,H,B,Y){O.isScene!==!0&&(O=te),_e.resetTextureUnits();const xe=O.fog,Me=B.isMeshStandardMaterial?O.environment:null,be=y===null?p.outputEncoding:y.isXRRenderTarget===!0?y.texture.encoding:hr,Ee=(B.isMeshStandardMaterial?Gt:pt).get(B.envMap||Me),ze=B.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Pe=!!B.normalMap&&!!H.attributes.tangent,ke=!!H.morphAttributes.position,Ze=!!H.morphAttributes.normal,Bi=!!H.morphAttributes.color,xr=B.toneMapped?p.toneMapping:ti,yr=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Rn=yr!==void 0?yr.length:0,Fe=Te.get(B),Sr=d.state.lights;if(C===!0&&(b===!0||E!==M)){const Vt=E===M&&B.id===S;w.setState(B,E,Vt)}let it=!1;B.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==Sr.state.version||Fe.outputEncoding!==be||Y.isInstancedMesh&&Fe.instancing===!1||!Y.isInstancedMesh&&Fe.instancing===!0||Y.isSkinnedMesh&&Fe.skinning===!1||!Y.isSkinnedMesh&&Fe.skinning===!0||Fe.envMap!==Ee||B.fog===!0&&Fe.fog!==xe||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==w.numPlanes||Fe.numIntersection!==w.numIntersection)||Fe.vertexAlphas!==ze||Fe.vertexTangents!==Pe||Fe.morphTargets!==ke||Fe.morphNormals!==Ze||Fe.morphColors!==Bi||Fe.toneMapping!==xr||ve.isWebGL2===!0&&Fe.morphTargetsCount!==Rn)&&(it=!0):(it=!0,Fe.__version=B.version);let tn=Fe.currentProgram;it===!0&&(tn=Tl(B,O,Y));let ui=!1,bs=!1,Cl=!1;const Ct=tn.getUniforms(),Ts=Fe.uniforms;if(re.useProgram(tn.program)&&(ui=!0,bs=!0,Cl=!0),B.id!==S&&(S=B.id,bs=!0),ui||M!==E){if(Ct.setValue(G,"projectionMatrix",E.projectionMatrix),ve.logarithmicDepthBuffer&&Ct.setValue(G,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),M!==E&&(M=E,bs=!0,Cl=!0),B.isShaderMaterial||B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshStandardMaterial||B.envMap){const Vt=Ct.map.cameraPosition;Vt!==void 0&&Vt.setValue(G,X.setFromMatrixPosition(E.matrixWorld))}(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Ct.setValue(G,"isOrthographic",E.isOrthographicCamera===!0),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial||B.isShadowMaterial||Y.isSkinnedMesh)&&Ct.setValue(G,"viewMatrix",E.matrixWorldInverse)}if(Y.isSkinnedMesh){Ct.setOptional(G,Y,"bindMatrix"),Ct.setOptional(G,Y,"bindMatrixInverse");const Vt=Y.skeleton;Vt&&(ve.floatVertexTextures?(Vt.boneTexture===null&&Vt.computeBoneTexture(),Ct.setValue(G,"boneTexture",Vt.boneTexture,_e),Ct.setValue(G,"boneTextureSize",Vt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Al=H.morphAttributes;if((Al.position!==void 0||Al.normal!==void 0||Al.color!==void 0&&ve.isWebGL2===!0)&&ne.update(Y,H,B,tn),(bs||Fe.receiveShadow!==Y.receiveShadow)&&(Fe.receiveShadow=Y.receiveShadow,Ct.setValue(G,"receiveShadow",Y.receiveShadow)),bs&&(Ct.setValue(G,"toneMappingExposure",p.toneMappingExposure),Fe.needsLights&&Uv(Ts,Cl),xe&&B.fog===!0&&Bn.refreshFogUniforms(Ts,xe),Bn.refreshMaterialUniforms(Ts,B,N,D,P),Da.upload(G,Fe.uniformsList,Ts,_e)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Da.upload(G,Fe.uniformsList,Ts,_e),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Ct.setValue(G,"center",Y.center),Ct.setValue(G,"modelViewMatrix",Y.modelViewMatrix),Ct.setValue(G,"normalMatrix",Y.normalMatrix),Ct.setValue(G,"modelMatrix",Y.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Vt=B.uniformsGroups;for(let Ll=0,Gv=Vt.length;Ll<Gv;Ll++)if(ve.isWebGL2){const Kf=Vt[Ll];ce.update(Kf,tn),ce.bind(Kf,tn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return tn}function Uv(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function Bv(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return m},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(E,O,H){Te.get(E.texture).__webglTexture=O,Te.get(E.depthTexture).__webglTexture=H;const B=Te.get(E);B.__hasExternalTextures=!0,B.__hasExternalTextures&&(B.__autoAllocateDepthBuffer=H===void 0,B.__autoAllocateDepthBuffer||ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,O){const H=Te.get(E);H.__webglFramebuffer=O,H.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(E,O=0,H=0){y=E,m=O,v=H;let B=!0;if(E){const Ee=Te.get(E);Ee.__useDefaultFramebuffer!==void 0?(re.bindFramebuffer(36160,null),B=!1):Ee.__webglFramebuffer===void 0?_e.setupRenderTarget(E):Ee.__hasExternalTextures&&_e.rebindTextures(E,Te.get(E.texture).__webglTexture,Te.get(E.depthTexture).__webglTexture)}let Y=null,xe=!1,Me=!1;if(E){const Ee=E.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture)&&(Me=!0);const ze=Te.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Y=ze[O],xe=!0):ve.isWebGL2&&E.samples>0&&_e.useMultisampledRTT(E)===!1?Y=Te.get(E).__webglMultisampledFramebuffer:Y=ze,T.copy(E.viewport),A.copy(E.scissor),x=E.scissorTest}else T.copy(k).multiplyScalar(N).floor(),A.copy(q).multiplyScalar(N).floor(),x=V;if(re.bindFramebuffer(36160,Y)&&ve.drawBuffers&&B&&re.drawBuffers(E,Y),re.viewport(T),re.scissor(A),re.setScissorTest(x),xe){const Ee=Te.get(E.texture);G.framebufferTexture2D(36160,36064,34069+O,Ee.__webglTexture,H)}else if(Me){const Ee=Te.get(E.texture),ze=O||0;G.framebufferTextureLayer(36160,36064,Ee.__webglTexture,H||0,ze)}S=-1},this.readRenderTargetPixels=function(E,O,H,B,Y,xe,Me){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=Te.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Me!==void 0&&(be=be[Me]),be){re.bindFramebuffer(36160,be);try{const Ee=E.texture,ze=Ee.format,Pe=Ee.type;if(ze!==Fn&&W.convert(ze)!==G.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ke=Pe===_o&&(ge.has("EXT_color_buffer_half_float")||ve.isWebGL2&&ge.has("EXT_color_buffer_float"));if(Pe!==dr&&W.convert(Pe)!==G.getParameter(35738)&&!(Pe===er&&(ve.isWebGL2||ge.has("OES_texture_float")||ge.has("WEBGL_color_buffer_float")))&&!ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-B&&H>=0&&H<=E.height-Y&&G.readPixels(O,H,B,Y,W.convert(ze),W.convert(Pe),xe)}finally{const Ee=y!==null?Te.get(y).__webglFramebuffer:null;re.bindFramebuffer(36160,Ee)}}},this.copyFramebufferToTexture=function(E,O,H=0){const B=Math.pow(2,-H),Y=Math.floor(O.image.width*B),xe=Math.floor(O.image.height*B);_e.setTexture2D(O,0),G.copyTexSubImage2D(3553,H,0,0,E.x,E.y,Y,xe),re.unbindTexture()},this.copyTextureToTexture=function(E,O,H,B=0){const Y=O.image.width,xe=O.image.height,Me=W.convert(H.format),be=W.convert(H.type);_e.setTexture2D(H,0),G.pixelStorei(37440,H.flipY),G.pixelStorei(37441,H.premultiplyAlpha),G.pixelStorei(3317,H.unpackAlignment),O.isDataTexture?G.texSubImage2D(3553,B,E.x,E.y,Y,xe,Me,be,O.image.data):O.isCompressedTexture?G.compressedTexSubImage2D(3553,B,E.x,E.y,O.mipmaps[0].width,O.mipmaps[0].height,Me,O.mipmaps[0].data):G.texSubImage2D(3553,B,E.x,E.y,Me,be,O.image),B===0&&H.generateMipmaps&&G.generateMipmap(3553),re.unbindTexture()},this.copyTextureToTexture3D=function(E,O,H,B,Y=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const xe=E.max.x-E.min.x+1,Me=E.max.y-E.min.y+1,be=E.max.z-E.min.z+1,Ee=W.convert(B.format),ze=W.convert(B.type);let Pe;if(B.isData3DTexture)_e.setTexture3D(B,0),Pe=32879;else if(B.isDataArrayTexture)_e.setTexture2DArray(B,0),Pe=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(37440,B.flipY),G.pixelStorei(37441,B.premultiplyAlpha),G.pixelStorei(3317,B.unpackAlignment);const ke=G.getParameter(3314),Ze=G.getParameter(32878),Bi=G.getParameter(3316),xr=G.getParameter(3315),yr=G.getParameter(32877),Rn=H.isCompressedTexture?H.mipmaps[0]:H.image;G.pixelStorei(3314,Rn.width),G.pixelStorei(32878,Rn.height),G.pixelStorei(3316,E.min.x),G.pixelStorei(3315,E.min.y),G.pixelStorei(32877,E.min.z),H.isDataTexture||H.isData3DTexture?G.texSubImage3D(Pe,Y,O.x,O.y,O.z,xe,Me,be,Ee,ze,Rn.data):H.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(Pe,Y,O.x,O.y,O.z,xe,Me,be,Ee,Rn.data)):G.texSubImage3D(Pe,Y,O.x,O.y,O.z,xe,Me,be,Ee,ze,Rn),G.pixelStorei(3314,ke),G.pixelStorei(32878,Ze),G.pixelStorei(3316,Bi),G.pixelStorei(3315,xr),G.pixelStorei(32877,yr),Y===0&&B.generateMipmaps&&G.generateMipmap(Pe),re.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?_e.setTextureCube(E,0):E.isData3DTexture?_e.setTexture3D(E,0):E.isDataArrayTexture?_e.setTexture2DArray(E,0):_e.setTexture2D(E,0),re.unbindTexture()},this.resetState=function(){m=0,v=0,y=null,re.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class w2 extends Dv{}w2.prototype.isWebGL1Renderer=!0;class E2 extends Cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n}}class b2 extends Zt{constructor(e,n,i,r,s,o,a,l,u){super(e,n,i,r,s,o,a,l,u),this.isVideoTexture=!0,this.minFilter=o!==void 0?o:Ft,this.magFilter=s!==void 0?s:Ft,this.generateMipmaps=!1;const c=this;function f(){c.needsUpdate=!0,e.requestVideoFrameCallback(f)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(f)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}const Dp={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class T2{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(c){a++,s===!1&&r.onStart!==void 0&&r.onStart(c,o,a),s=!0},this.itemEnd=function(c){o++,r.onProgress!==void 0&&r.onProgress(c,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,f){return u.push(c,f),this},this.removeHandler=function(c){const f=u.indexOf(c);return f!==-1&&u.splice(f,2),this},this.getHandler=function(c){for(let f=0,d=u.length;f<d;f+=2){const g=u[f],_=u[f+1];if(g.global&&(g.lastIndex=0),g.test(c))return _}return null}}}const C2=new T2;class Iv{constructor(e){this.manager=e!==void 0?e:C2,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class A2 extends Iv{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Dp.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o;const a=xo("img");function l(){c(),Dp.add(e,this),n&&n(this),s.manager.itemEnd(e)}function u(f){c(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function c(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class L2 extends Iv{constructor(e){super(e)}load(e,n,i,r){const s=new Zt,o=new A2(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jf);const R2=`
varying vec2 vUv;

void main() {
  vUv = uv;

  vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * modelViewPosition;
}
`,P2=`
uniform vec4 mask_colors[NUM_COLORS];
uniform sampler2D map;

varying vec2 vUv;

vec3 rgb2hsv(vec3 c) {
    vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
    vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
    vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));

    float d = q.x - min(q.w, q.y);
    float e = 1.0e-10;
    return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
}

vec3 hsv2rgb(vec3 c) {
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

void main() {
  vec4 color = texture2D(map, vUv);
  vec3 color_hsv = rgb2hsv(color.rgb);

  float result = 1.0;
  for(int i = 0; i < NUM_COLORS && result > 0.0; i++) {
    vec4 mask = mask_colors[i];
    if (mask.a >= 0.0) { // compare hsv
      vec3 mask_hsv = rgb2hsv(mask.rgb);
      vec3 diff = abs(color_hsv - mask_hsv);
      if (diff.r < 5.0 / 255.0 && diff.g < mask.a && diff.b < mask.a) {
        result = 0.0;
      }
    } else { // compare rgb
      vec3 diff = abs(color.rgb - mask.rgb);
      if (diff.r + diff.g + diff.b < -mask.a) {
        result = 0.0;
      }
    }
  }

  gl_FragColor = vec4(result, result, result, 1.0);
}
`;function Ip(t,e){const n=new E2,i=new Ml(1,1),r=e!=null?new Ni(e):new Xf({map:t}),s=new Jn(i,r);return s.position.set(.5,.5,0),n.add(s),n}function kp(){const t=new Tv(0,1,1,0,0,2);return t.position.setZ(1),t.updateProjectionMatrix(),t}function D2(t){const[e,n]=Ae.exports.useState(null),[i,r]=Ae.exports.useState(!1);Ae.exports.useEffect(()=>{if(t.current==null)return;const u=new Dv({canvas:t.current});u.autoClear=!1,n(u),r(!0)},[t]);const s=Ae.exports.useCallback(async u=>u instanceof HTMLVideoElement?new b2(u):await new L2().loadAsync(URL.createObjectURL(u)),[]),o=Ae.exports.useCallback((u,c)=>({type:"RESIZE",width:u,height:c}),[]),a=Ae.exports.useCallback((u,c)=>({type:"MASK_COLORS",bounds:new ot().fromArray(u),colors:c.map(f=>{const d=Array.isArray(f)?new Ge(f[0]):new Ge(f),g=Array.isArray(f)?f[1]:.25;return new ot(d.r,d.g,d.b,g)})}),[]),l=Ae.exports.useCallback(async(u,c)=>{if(!i||e==null){console.error("not ready yet");return}e.setScissorTest(!1),e.setSize(1920,1080),e.setClearColor(new Ge(16777215)),e.clear();let f=new Ue(1920,1080);for(const d of c)switch(d.type){case"RESIZE":{const g=Ip(u),_=kp();e.setSize(d.width,d.height),f=new Ue(d.width,d.height),e.render(g,_);break}case"MASK_COLORS":{const g=Ip(u,{vertexShader:R2,fragmentShader:P2,defines:{NUM_COLORS:d.colors.length},uniforms:{map:{value:u},mask_colors:{value:d.colors}}}),_=kp();e.setScissor(Math.round(d.bounds.x),Math.round(f.height-1-(d.bounds.y+d.bounds.w)),Math.round(d.bounds.z),Math.round(d.bounds.w)),e.setScissorTest(!0),e.render(g,_);break}default:console.error("unknown op",d);break}},[i,e]);return{ready:i,load:s,resize:o,maskColors:a,render:l}}const I2="_actions_1il2a_1",k2={actions:I2};var El={exports:{}},bl={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N2=Ae.exports,F2=Symbol.for("react.element"),z2=Symbol.for("react.fragment"),O2=Object.prototype.hasOwnProperty,U2=N2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,B2={key:!0,ref:!0,__self:!0,__source:!0};function kv(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)O2.call(e,i)&&!B2.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:F2,type:t,key:s,ref:o,props:r,_owner:U2.current}}bl.Fragment=z2;bl.jsx=kv;bl.jsxs=kv;(function(t){t.exports=bl})(El);const G2=El.exports.Fragment,Re=El.exports.jsx,ln=El.exports.jsxs,V2=Object.freeze(Object.defineProperty({__proto__:null,Fragment:G2,jsx:Re,jsxs:ln},Symbol.toStringTag,{value:"Module"}));function H2(t){const{disabled:e,onScan:n}=t;return Re("div",{className:k2.actions,children:Re("button",{disabled:e,onClick:n,children:"Scan"})})}var Nv={exports:{}};/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/(function(t){(function(){var e={}.hasOwnProperty;function n(){for(var i=[],r=0;r<arguments.length;r++){var s=arguments[r];if(!!s){var o=typeof s;if(o==="string"||o==="number")i.push(s);else if(Array.isArray(s)){if(s.length){var a=n.apply(null,s);a&&i.push(a)}}else if(o==="object")if(s.toString===Object.prototype.toString)for(var l in s)e.call(s,l)&&s[l]&&i.push(l);else i.push(s.toString())}}return i.join(" ")}t.exports?(n.default=n,t.exports=n):window.classNames=n})()})(Nv);const Fv=Nv.exports,W2="_contents_s5q7z_1",j2="_visible_s5q7z_4",$2="_hidden_s5q7z_7",ga={contents:W2,visible:j2,hidden:$2};function X2(t){const{children:e}=t,[n,i]=Ae.exports.useState(!1),r=Ae.exports.useCallback(()=>i(s=>!s),[]);return ln("div",{className:ga.debug,children:[Re("h3",{children:"Debug"}),Re("button",{onClick:r,children:n?"Hide":"Show"}),Re("div",{className:Fv(ga.contents,n?ga.visible:ga.hidden),children:e})]})}const q2="_dropzone_1g5k7_1",Y2="_label_1g5k7_9",K2="_input_1g5k7_15",Z2="_error_1g5k7_19",va={dropzone:q2,label:Y2,input:K2,error:Z2};function Q2(t){const{filename:e,thumbnail:n,error:i,onUpload:r}=t,s=Ae.exports.useCallback(l=>{l.target.files!=null&&(console.log(l.target.files),r(l.target.files[0]))},[r]),o=Ae.exports.useCallback(l=>(l.preventDefault(),l.stopPropagation(),!1),[]),a=Ae.exports.useCallback(l=>(l.dataTransfer.files.length>0&&r(l.dataTransfer.files.item(0)),l.preventDefault(),l.stopPropagation(),!1),[r]);return Re("div",{className:va.dropzone,children:ln("label",{htmlFor:"file-input",className:va.label,onDrag:o,onDragEnter:o,onDragOver:o,onDrop:a,children:[e!=null&&n!=null?ln("div",{children:[e,Re("br",{}),Re("img",{src:n})]}):ln("div",{children:["Drag and drop an image or video,",Re("br",{}),"or click here to select a file"]}),i!=null?Re("div",{className:va.error,children:i}):null,Re("input",{id:"file-input",className:va.input,type:"file",accept:"image/*,video/*",onChange:s})]})})}const J2=$v(V2);var Np=J2.jsx;const eb=Ae.exports;function tb(t,e){return Np("svg",{...Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:e},t),children:Np("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"})})}const nb=eb.forwardRef(tb);var ib=nb;const rb=ib,sb="_intro_1klur_1",ob="_header_1klur_9",ab="_aboutToggle_1klur_15",lb="_about_1klur_15",ub="_visible_1klur_32",cb="_hidden_1klur_35",zr={intro:sb,header:ob,aboutToggle:ab,about:lb,visible:ub,hidden:cb};function fb(){const[t,e]=Ae.exports.useState(!1),n=Ae.exports.useCallback(()=>e(i=>!i),[]);return ln("div",{className:zr.intro,children:[ln("div",{className:zr.header,children:[Re("h1",{children:"Another Genshin Scanner"}),Re("div",{className:zr.aboutToggle,onClick:n,children:Re(rb,{})})]}),ln("div",{className:Fv(zr.about,t?zr.visible:zr.hidden),children:[Re("h3",{children:"About"}),Re("p",{children:"Web-based Genshin Scanner."}),ln("p",{children:["Questions or feedback =>"," ",Re("a",{href:"https://discordapp.com/users/659617582298562570",target:"_blank",rel:"noreferrer",children:"enxi#0410"})]})]})]})}const db="_output_18vjo_1",hb="_jsonOutput_18vjo_5",_a={output:db,jsonOutput:hb};function pb(t){const{data:e}=t,n=Ae.exports.useMemo(()=>e==null?"":JSON.stringify(e,null,2),[e]),i=Ae.exports.useCallback(()=>{const r=document.createElement("a");r.href=URL.createObjectURL(new Blob([JSON.stringify(e,null,2)],{type:"application/json"})),r.download="genshin_scanner.json",r.click()},[e]);return ln("div",{className:_a.output,children:[Re("h3",{children:"GOOD Format Output"}),Re("div",{className:_a.options,children:Re("button",{className:_a.export,onClick:i,children:"Export JSON"})}),Re("textarea",{className:_a.jsonOutput,readOnly:!0,value:n})]})}const mb="_app_ij7pe_1",gb={app:mb};function vb(t){return new Promise(e=>setTimeout(e,t))}function _b(){var S;const t=Ae.exports.useRef(null),e=Ae.exports.useRef(null),n=Ae.exports.useRef(null),i=Ae.exports.useRef(null),[r,s]=Ae.exports.useState(null),[o,a]=Ae.exports.useState(null),[l,u]=Ae.exports.useState(null),[c,f]=Ae.exports.useState(null),d=Ae.exports.useMemo(()=>{const M=new CS;return M.init(),M},[]),g=Ae.exports.useCallback(M=>{const T=i.current;T.width=320,T.height=180,T.getContext("2d").drawImage(M,0,0,320,180),a(T.toDataURL())},[]),_=D2(n),p=Ae.exports.useCallback(async M=>{await _.render(M,[_.maskColors(fx.bounds,[13876366]),_.maskColors(jg.bounds,[[16777215,-.5]]),_.maskColors(Xg.bounds,[[12496553,-.25]]),_.maskColors($g.bounds,[[16777215,-.9]]),_.maskColors(qg.bounds,[4805478,.3])]);const T=n.current.toDataURL();await d.init(),await d.scan(T),await d.cleanup()},[d,_]),h=Ae.exports.useCallback(async M=>{const T=await _.load(M);await p(T),f(d.getData())},[d,p,_]),m=Ae.exports.useCallback(async()=>{const M=e.current,T=await _.load(M);for(;M.currentTime<M.duration-1/5;)g(M),await p(T),M.currentTime+=1/5,await vb(200);f(d.getData())},[g,d,p,_]),v=Ae.exports.useCallback(M=>{if(s(M),a(null),M.type.startsWith("image/")){const T=t.current;T.src=URL.createObjectURL(M),T.addEventListener("load",()=>{g(T)}),u(null)}else if(M.type.startsWith("video/")){const T=e.current;T.src=URL.createObjectURL(M),T.addEventListener("canplay",()=>{g(T)}),u(null)}else u(`Unrecognized file type ${M.type}`)},[g]),y=Ae.exports.useCallback(()=>{if(r==null){console.error("file is null");return}if(r.type.startsWith("image/"))h(r);else if(r.type.startsWith("video/"))m();else{console.error("Unknown type",r.type);return}},[r,h,m]);return ln("div",{className:gb.app,children:[Re(fb,{}),Re(Q2,{filename:(S=r==null?void 0:r.name)!=null?S:null,thumbnail:o,error:l,onUpload:v}),Re(H2,{disabled:r==null,onScan:y}),Re("hr",{}),Re(pb,{data:c}),Re("hr",{}),ln(X2,{children:[Re("img",{ref:t}),Re("video",{ref:e,playsInline:!0,preload:"auto"}),Re("canvas",{ref:i}),Re("canvas",{ref:n})]})]})}Ou.createRoot(document.getElementById("root")).render(Re(l0.StrictMode,{children:Re(_b,{})}));
