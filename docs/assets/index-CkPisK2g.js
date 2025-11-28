(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function yg(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Vf={exports:{}},To={};var hx;function lS(){if(hx)return To;hx=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:o,type:s,key:d,ref:l!==void 0?l:null,props:u}}return To.Fragment=t,To.jsx=i,To.jsxs=i,To}var px;function cS(){return px||(px=1,Vf.exports=lS()),Vf.exports}var D=cS(),Gf={exports:{}},st={};var mx;function uS(){if(mx)return st;mx=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),S=Symbol.iterator;function y(O){return O===null||typeof O!="object"?null:(O=S&&O[S]||O["@@iterator"],typeof O=="function"?O:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,b={};function _(O,Z,me){this.props=O,this.context=Z,this.refs=b,this.updater=me||E}_.prototype.isReactComponent={},_.prototype.setState=function(O,Z){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,Z,"setState")},_.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function I(){}I.prototype=_.prototype;function U(O,Z,me){this.props=O,this.context=Z,this.refs=b,this.updater=me||E}var F=U.prototype=new I;F.constructor=U,C(F,_.prototype),F.isPureReactComponent=!0;var H=Array.isArray;function N(){}var B={H:null,A:null,T:null,S:null},ee=Object.prototype.hasOwnProperty;function w(O,Z,me){var ye=me.ref;return{$$typeof:o,type:O,key:Z,ref:ye!==void 0?ye:null,props:me}}function A(O,Z){return w(O.type,Z,O.props)}function V(O){return typeof O=="object"&&O!==null&&O.$$typeof===o}function K(O){var Z={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(me){return Z[me]})}var le=/\/+/g;function Y(O,Z){return typeof O=="object"&&O!==null&&O.key!=null?K(""+O.key):Z.toString(36)}function $(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(N,N):(O.status="pending",O.then(function(Z){O.status==="pending"&&(O.status="fulfilled",O.value=Z)},function(Z){O.status==="pending"&&(O.status="rejected",O.reason=Z)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function z(O,Z,me,ye,Ae){var ie=typeof O;(ie==="undefined"||ie==="boolean")&&(O=null);var he=!1;if(O===null)he=!0;else switch(ie){case"bigint":case"string":case"number":he=!0;break;case"object":switch(O.$$typeof){case o:case t:he=!0;break;case g:return he=O._init,z(he(O._payload),Z,me,ye,Ae)}}if(he)return Ae=Ae(O),he=ye===""?"."+Y(O,0):ye,H(Ae)?(me="",he!=null&&(me=he.replace(le,"$&/")+"/"),z(Ae,Z,me,"",function(ke){return ke})):Ae!=null&&(V(Ae)&&(Ae=A(Ae,me+(Ae.key==null||O&&O.key===Ae.key?"":(""+Ae.key).replace(le,"$&/")+"/")+he)),Z.push(Ae)),1;he=0;var De=ye===""?".":ye+":";if(H(O))for(var Be=0;Be<O.length;Be++)ye=O[Be],ie=De+Y(ye,Be),he+=z(ye,Z,me,ie,Ae);else if(Be=y(O),typeof Be=="function")for(O=Be.call(O),Be=0;!(ye=O.next()).done;)ye=ye.value,ie=De+Y(ye,Be++),he+=z(ye,Z,me,ie,Ae);else if(ie==="object"){if(typeof O.then=="function")return z($(O),Z,me,ye,Ae);throw Z=String(O),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return he}function W(O,Z,me){if(O==null)return O;var ye=[],Ae=0;return z(O,ye,"","",function(ie){return Z.call(me,ie,Ae++)}),ye}function L(O){if(O._status===-1){var Z=O._result;Z=Z(),Z.then(function(me){(O._status===0||O._status===-1)&&(O._status=1,O._result=me)},function(me){(O._status===0||O._status===-1)&&(O._status=2,O._result=me)}),O._status===-1&&(O._status=0,O._result=Z)}if(O._status===1)return O._result.default;throw O._result}var X=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)},ne={map:W,forEach:function(O,Z,me){W(O,function(){Z.apply(this,arguments)},me)},count:function(O){var Z=0;return W(O,function(){Z++}),Z},toArray:function(O){return W(O,function(Z){return Z})||[]},only:function(O){if(!V(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return st.Activity=x,st.Children=ne,st.Component=_,st.Fragment=i,st.Profiler=l,st.PureComponent=U,st.StrictMode=s,st.Suspense=m,st.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,st.__COMPILER_RUNTIME={__proto__:null,c:function(O){return B.H.useMemoCache(O)}},st.cache=function(O){return function(){return O.apply(null,arguments)}},st.cacheSignal=function(){return null},st.cloneElement=function(O,Z,me){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var ye=C({},O.props),Ae=O.key;if(Z!=null)for(ie in Z.key!==void 0&&(Ae=""+Z.key),Z)!ee.call(Z,ie)||ie==="key"||ie==="__self"||ie==="__source"||ie==="ref"&&Z.ref===void 0||(ye[ie]=Z[ie]);var ie=arguments.length-2;if(ie===1)ye.children=me;else if(1<ie){for(var he=Array(ie),De=0;De<ie;De++)he[De]=arguments[De+2];ye.children=he}return w(O.type,Ae,ye)},st.createContext=function(O){return O={$$typeof:d,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:u,_context:O},O},st.createElement=function(O,Z,me){var ye,Ae={},ie=null;if(Z!=null)for(ye in Z.key!==void 0&&(ie=""+Z.key),Z)ee.call(Z,ye)&&ye!=="key"&&ye!=="__self"&&ye!=="__source"&&(Ae[ye]=Z[ye]);var he=arguments.length-2;if(he===1)Ae.children=me;else if(1<he){for(var De=Array(he),Be=0;Be<he;Be++)De[Be]=arguments[Be+2];Ae.children=De}if(O&&O.defaultProps)for(ye in he=O.defaultProps,he)Ae[ye]===void 0&&(Ae[ye]=he[ye]);return w(O,ie,Ae)},st.createRef=function(){return{current:null}},st.forwardRef=function(O){return{$$typeof:h,render:O}},st.isValidElement=V,st.lazy=function(O){return{$$typeof:g,_payload:{_status:-1,_result:O},_init:L}},st.memo=function(O,Z){return{$$typeof:p,type:O,compare:Z===void 0?null:Z}},st.startTransition=function(O){var Z=B.T,me={};B.T=me;try{var ye=O(),Ae=B.S;Ae!==null&&Ae(me,ye),typeof ye=="object"&&ye!==null&&typeof ye.then=="function"&&ye.then(N,X)}catch(ie){X(ie)}finally{Z!==null&&me.types!==null&&(Z.types=me.types),B.T=Z}},st.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},st.use=function(O){return B.H.use(O)},st.useActionState=function(O,Z,me){return B.H.useActionState(O,Z,me)},st.useCallback=function(O,Z){return B.H.useCallback(O,Z)},st.useContext=function(O){return B.H.useContext(O)},st.useDebugValue=function(){},st.useDeferredValue=function(O,Z){return B.H.useDeferredValue(O,Z)},st.useEffect=function(O,Z){return B.H.useEffect(O,Z)},st.useEffectEvent=function(O){return B.H.useEffectEvent(O)},st.useId=function(){return B.H.useId()},st.useImperativeHandle=function(O,Z,me){return B.H.useImperativeHandle(O,Z,me)},st.useInsertionEffect=function(O,Z){return B.H.useInsertionEffect(O,Z)},st.useLayoutEffect=function(O,Z){return B.H.useLayoutEffect(O,Z)},st.useMemo=function(O,Z){return B.H.useMemo(O,Z)},st.useOptimistic=function(O,Z){return B.H.useOptimistic(O,Z)},st.useReducer=function(O,Z,me){return B.H.useReducer(O,Z,me)},st.useRef=function(O){return B.H.useRef(O)},st.useState=function(O){return B.H.useState(O)},st.useSyncExternalStore=function(O,Z,me){return B.H.useSyncExternalStore(O,Z,me)},st.useTransition=function(){return B.H.useTransition()},st.version="19.2.0",st}var xx;function Sh(){return xx||(xx=1,Gf.exports=uS()),Gf.exports}var St=Sh();const fS=yg(St);var kf={exports:{}},Ao={},Xf={exports:{}},jf={};var gx;function dS(){return gx||(gx=1,(function(o){function t(z,W){var L=z.length;z.push(W);e:for(;0<L;){var X=L-1>>>1,ne=z[X];if(0<l(ne,W))z[X]=W,z[L]=ne,L=X;else break e}}function i(z){return z.length===0?null:z[0]}function s(z){if(z.length===0)return null;var W=z[0],L=z.pop();if(L!==W){z[0]=L;e:for(var X=0,ne=z.length,O=ne>>>1;X<O;){var Z=2*(X+1)-1,me=z[Z],ye=Z+1,Ae=z[ye];if(0>l(me,L))ye<ne&&0>l(Ae,me)?(z[X]=Ae,z[ye]=L,X=ye):(z[X]=me,z[Z]=L,X=Z);else if(ye<ne&&0>l(Ae,L))z[X]=Ae,z[ye]=L,X=ye;else break e}}return W}function l(z,W){var L=z.sortIndex-W.sortIndex;return L!==0?L:z.id-W.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var m=[],p=[],g=1,x=null,S=3,y=!1,E=!1,C=!1,b=!1,_=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function F(z){for(var W=i(p);W!==null;){if(W.callback===null)s(p);else if(W.startTime<=z)s(p),W.sortIndex=W.expirationTime,t(m,W);else break;W=i(p)}}function H(z){if(C=!1,F(z),!E)if(i(m)!==null)E=!0,N||(N=!0,K());else{var W=i(p);W!==null&&$(H,W.startTime-z)}}var N=!1,B=-1,ee=5,w=-1;function A(){return b?!0:!(o.unstable_now()-w<ee)}function V(){if(b=!1,N){var z=o.unstable_now();w=z;var W=!0;try{e:{E=!1,C&&(C=!1,I(B),B=-1),y=!0;var L=S;try{t:{for(F(z),x=i(m);x!==null&&!(x.expirationTime>z&&A());){var X=x.callback;if(typeof X=="function"){x.callback=null,S=x.priorityLevel;var ne=X(x.expirationTime<=z);if(z=o.unstable_now(),typeof ne=="function"){x.callback=ne,F(z),W=!0;break t}x===i(m)&&s(m),F(z)}else s(m);x=i(m)}if(x!==null)W=!0;else{var O=i(p);O!==null&&$(H,O.startTime-z),W=!1}}break e}finally{x=null,S=L,y=!1}W=void 0}}finally{W?K():N=!1}}}var K;if(typeof U=="function")K=function(){U(V)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,Y=le.port2;le.port1.onmessage=V,K=function(){Y.postMessage(null)}}else K=function(){_(V,0)};function $(z,W){B=_(function(){z(o.unstable_now())},W)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(z){z.callback=null},o.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ee=0<z?Math.floor(1e3/z):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(z){switch(S){case 1:case 2:case 3:var W=3;break;default:W=S}var L=S;S=W;try{return z()}finally{S=L}},o.unstable_requestPaint=function(){b=!0},o.unstable_runWithPriority=function(z,W){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var L=S;S=z;try{return W()}finally{S=L}},o.unstable_scheduleCallback=function(z,W,L){var X=o.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?X+L:X):L=X,z){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=L+ne,z={id:g++,callback:W,priorityLevel:z,startTime:L,expirationTime:ne,sortIndex:-1},L>X?(z.sortIndex=L,t(p,z),i(m)===null&&z===i(p)&&(C?(I(B),B=-1):C=!0,$(H,L-X))):(z.sortIndex=ne,t(m,z),E||y||(E=!0,N||(N=!0,K()))),z},o.unstable_shouldYield=A,o.unstable_wrapCallback=function(z){var W=S;return function(){var L=S;S=W;try{return z.apply(this,arguments)}finally{S=L}}}})(jf)),jf}var _x;function hS(){return _x||(_x=1,Xf.exports=dS()),Xf.exports}var qf={exports:{}},wn={};var vx;function pS(){if(vx)return wn;vx=1;var o=Sh();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,g){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:p,implementation:g}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return wn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,wn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return u(m,p,null,g)},wn.flushSync=function(m){var p=d.T,g=s.p;try{if(d.T=null,s.p=2,m)return m()}finally{d.T=p,s.p=g,s.d.f()}},wn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},wn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},wn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,x=h(g,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:S,fetchPriority:y}):g==="script"&&s.d.X(m,{crossOrigin:x,integrity:S,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},wn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=h(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},wn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,x=h(g,p.crossOrigin);s.d.L(m,g,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},wn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=h(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},wn.requestFormReset=function(m){s.d.r(m)},wn.unstable_batchedUpdates=function(m,p){return m(p)},wn.useFormState=function(m,p,g){return d.H.useFormState(m,p,g)},wn.useFormStatus=function(){return d.H.useHostTransitionStatus()},wn.version="19.2.0",wn}var Sx;function mS(){if(Sx)return qf.exports;Sx=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),qf.exports=pS(),qf.exports}var yx;function xS(){if(yx)return Ao;yx=1;var o=hS(),t=Sh(),i=mS();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(u(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,r=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(r=c.return,r!==null){a=r;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),e;if(f===r)return m(c),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=c,r=f;else{for(var v=!1,T=c.child;T;){if(T===a){v=!0,a=c,r=f;break}if(T===r){v=!0,r=c,a=f;break}T=T.sibling}if(!v){for(T=f.child;T;){if(T===a){v=!0,a=f,r=c;break}if(T===r){v=!0,r=f,a=c;break}T=T.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function g(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=g(e),n!==null)return n;e=e.sibling}return null}var x=Object.assign,S=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),I=Symbol.for("react.consumer"),U=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),N=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),ee=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),A=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function K(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var le=Symbol.for("react.client.reference");function Y(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===le?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case C:return"Fragment";case _:return"Profiler";case b:return"StrictMode";case H:return"Suspense";case N:return"SuspenseList";case w:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case U:return e.displayName||"Context";case I:return(e._context.displayName||"Context")+".Consumer";case F:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case B:return n=e.displayName||null,n!==null?n:Y(e.type)||"Memo";case ee:n=e._payload,e=e._init;try{return Y(e(n))}catch{}}return null}var $=Array.isArray,z=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,L={pending:!1,data:null,method:null,action:null},X=[],ne=-1;function O(e){return{current:e}}function Z(e){0>ne||(e.current=X[ne],X[ne]=null,ne--)}function me(e,n){ne++,X[ne]=e.current,e.current=n}var ye=O(null),Ae=O(null),ie=O(null),he=O(null);function De(e,n){switch(me(ie,n),me(Ae,e),me(ye,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Pm(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Pm(n),e=Im(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Z(ye),me(ye,e)}function Be(){Z(ye),Z(Ae),Z(ie)}function ke(e){e.memoizedState!==null&&me(he,e);var n=ye.current,a=Im(n,e.type);n!==a&&(me(Ae,e),me(ye,a))}function rt(e){Ae.current===e&&(Z(ye),Z(Ae)),he.current===e&&(Z(he),yo._currentValue=L)}var Zt,dt;function Rt(e){if(Zt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Zt=n&&n[1]||"",dt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Zt+e+dt}var k=!1;function ht(e,n){if(!e||k)return"";k=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var ve=function(){throw Error()};if(Object.defineProperty(ve.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ve,[])}catch(fe){var ce=fe}Reflect.construct(e,[],ve)}else{try{ve.call()}catch(fe){ce=fe}e.call(ve.prototype)}}else{try{throw Error()}catch(fe){ce=fe}(ve=e())&&typeof ve.catch=="function"&&ve.catch(function(){})}}catch(fe){if(fe&&ce&&typeof fe.stack=="string")return[fe.stack,ce.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),v=f[0],T=f[1];if(v&&T){var G=v.split(`
`),re=T.split(`
`);for(c=r=0;r<G.length&&!G[r].includes("DetermineComponentFrameRoot");)r++;for(;c<re.length&&!re[c].includes("DetermineComponentFrameRoot");)c++;if(r===G.length||c===re.length)for(r=G.length-1,c=re.length-1;1<=r&&0<=c&&G[r]!==re[c];)c--;for(;1<=r&&0<=c;r--,c--)if(G[r]!==re[c]){if(r!==1||c!==1)do if(r--,c--,0>c||G[r]!==re[c]){var xe=`
`+G[r].replace(" at new "," at ");return e.displayName&&xe.includes("<anonymous>")&&(xe=xe.replace("<anonymous>",e.displayName)),xe}while(1<=r&&0<=c);break}}}finally{k=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Rt(a):""}function mt(e,n){switch(e.tag){case 26:case 27:case 5:return Rt(e.type);case 16:return Rt("Lazy");case 13:return e.child!==n&&n!==null?Rt("Suspense Fallback"):Rt("Suspense");case 19:return Rt("SuspenseList");case 0:case 15:return ht(e.type,!1);case 11:return ht(e.type.render,!1);case 1:return ht(e.type,!0);case 31:return Rt("Activity");default:return""}}function Pt(e){try{var n="",a=null;do n+=mt(e,a),a=e,e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Ve=Object.prototype.hasOwnProperty,Xt=o.unstable_scheduleCallback,Ye=o.unstable_cancelCallback,at=o.unstable_shouldYield,P=o.unstable_requestPaint,M=o.unstable_now,se=o.unstable_getCurrentPriorityLevel,_e=o.unstable_ImmediatePriority,be=o.unstable_UserBlockingPriority,pe=o.unstable_NormalPriority,qe=o.unstable_LowPriority,Le=o.unstable_IdlePriority,Qe=o.log,je=o.unstable_setDisableYieldValue,Me=null,Te=null;function We(e){if(typeof Qe=="function"&&je(e),Te&&typeof Te.setStrictMode=="function")try{Te.setStrictMode(Me,e)}catch{}}var Ge=Math.clz32?Math.clz32:j,ze=Math.log,nt=Math.LN2;function j(e){return e>>>=0,e===0?32:31-(ze(e)/nt|0)|0}var Ne=256,Ce=262144,we=4194304;function Ee(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Se(e,n,a){var r=e.pendingLanes;if(r===0)return 0;var c=0,f=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var T=r&134217727;return T!==0?(r=T&~f,r!==0?c=Ee(r):(v&=T,v!==0?c=Ee(v):a||(a=T&~e,a!==0&&(c=Ee(a))))):(T=r&~f,T!==0?c=Ee(T):v!==0?c=Ee(v):a||(a=r&~e,a!==0&&(c=Ee(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Ie(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function it(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bt(){var e=we;return we<<=1,(we&62914560)===0&&(we=4194304),e}function Ct(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Cn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function jn(e,n,a,r,c,f){var v=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var T=e.entanglements,G=e.expirationTimes,re=e.hiddenUpdates;for(a=v&~a;0<a;){var xe=31-Ge(a),ve=1<<xe;T[xe]=0,G[xe]=-1;var ce=re[xe];if(ce!==null)for(re[xe]=null,xe=0;xe<ce.length;xe++){var fe=ce[xe];fe!==null&&(fe.lane&=-536870913)}a&=~ve}r!==0&&Xo(e,r,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(v&~n))}function Xo(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-Ge(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|a&261930}function Ur(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var r=31-Ge(a),c=1<<r;c&n|e[r]&n&&(e[r]|=n),a&=~c}}function Lr(e,n){var a=n&-n;return a=(a&42)!==0?1:xi(a),(a&(e.suspendedLanes|n))!==0?0:a}function xi(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ja(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Or(){var e=W.p;return e!==0?e:(e=window.event,e===void 0?32:rx(e.type))}function zr(e,n){var a=W.p;try{return W.p=e,n()}finally{W.p=a}}var qn=Math.random().toString(36).slice(2),on="__reactFiber$"+qn,hn="__reactProps$"+qn,Pi="__reactContainer$"+qn,Cs="__reactEvents$"+qn,Oc="__reactListeners$"+qn,zc="__reactHandles$"+qn,jo="__reactResources$"+qn,$a="__reactMarker$"+qn;function Pr(e){delete e[on],delete e[hn],delete e[Cs],delete e[Oc],delete e[zc]}function ma(e){var n=e[on];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Pi]||a[on]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Xm(e);e!==null;){if(a=e[on])return a;e=Xm(e)}return n}e=a,a=e.parentNode}return null}function R(e){if(e=e[on]||e[Pi]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Q(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function ue(e){var n=e[jo];return n||(n=e[jo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function oe(e){e[$a]=!0}var te=new Set,Re={};function Ue(e,n){Pe(e,n),Pe(e+"Capture",n)}function Pe(e,n){for(Re[e]=n,e=0;e<n.length;e++)te.add(n[e])}var Fe=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),$e={},tt={};function Ze(e){return Ve.call(tt,e)?!0:Ve.call($e,e)?!1:Fe.test(e)?tt[e]=!0:($e[e]=!0,!1)}function ct(e,n,a){if(Ze(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Tt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function wt(e,n,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+r)}}function yt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function zt(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Je(e,n,a){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,f=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(v){a=""+v,f.call(this,v)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function jt(e){if(!e._valueTracker){var n=zt(e)?"checked":"value";e._valueTracker=Je(e,n,""+e[n])}}function bt(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return e&&(r=zt(e)?e.checked?"true":"false":e.value),e=r,e!==a?(n.setValue(e),!0):!1}function _n(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var xa=/[\n"\\]/g;function Wt(e){return e.replace(xa,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ii(e,n,a,r,c,f,v,T){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),n!=null?v==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+yt(n)):e.value!==""+yt(n)&&(e.value=""+yt(n)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),n!=null?vn(e,v,yt(n)):a!=null?vn(e,v,yt(a)):r!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+yt(T):e.removeAttribute("name")}function Yt(e,n,a,r,c,f,v,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){jt(e);return}a=a!=null?""+yt(a):"",n=n!=null?""+yt(n):a,T||n===e.value||(e.value=n),e.defaultValue=n}r=r??c,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=T?e.checked:!!r,e.defaultChecked=!!r,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v),jt(e)}function vn(e,n,a){n==="number"&&_n(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function pn(e,n,a,r){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&r&&(e[a].defaultSelected=!0)}else{for(a=""+yt(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,r&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function Sn(e,n,a){if(n!=null&&(n=""+yt(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+yt(a):""}function Mn(e,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if($(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=yt(n),e.defaultValue=a,r=e.textContent,r===a&&r!==""&&r!==null&&(e.value=r),jt(e)}function Ti(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Fi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Lh(e,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,a):typeof a!="number"||a===0||Fi.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Oh(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var c in n)r=n[c],n.hasOwnProperty(c)&&a[c]!==r&&Lh(e,c,r)}else for(var f in n)n.hasOwnProperty(f)&&Lh(e,f,n[f])}function Pc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var a_=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),s_=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function qo(e){return s_.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Bi(){}var Ic=null;function Fc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ws=null,Ds=null;function zh(e){var n=R(e);if(n&&(e=n.stateNode)){var a=e[hn]||null;e:switch(e=n.stateNode,n.type){case"input":if(Ii(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Wt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==e&&r.form===e.form){var c=r[hn]||null;if(!c)throw Error(s(90));Ii(r,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===e.form&&bt(r)}break e;case"textarea":Sn(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&pn(e,!!a.multiple,n,!1)}}}var Bc=!1;function Ph(e,n,a){if(Bc)return e(n,a);Bc=!0;try{var r=e(n);return r}finally{if(Bc=!1,(ws!==null||Ds!==null)&&(Ll(),ws&&(n=ws,e=Ds,Ds=ws=null,zh(n),e)))for(n=0;n<e.length;n++)zh(e[n])}}function Ir(e,n){var a=e.stateNode;if(a===null)return null;var r=a[hn]||null;if(r===null)return null;a=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Hi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hc=!1;if(Hi)try{var Fr={};Object.defineProperty(Fr,"passive",{get:function(){Hc=!0}}),window.addEventListener("test",Fr,Fr),window.removeEventListener("test",Fr,Fr)}catch{Hc=!1}var ga=null,Vc=null,Wo=null;function Ih(){if(Wo)return Wo;var e,n=Vc,a=n.length,r,c="value"in ga?ga.value:ga.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var v=a-e;for(r=1;r<=v&&n[a-r]===c[f-r];r++);return Wo=c.slice(e,1<r?1-r:void 0)}function Yo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Zo(){return!0}function Fh(){return!1}function In(e){function n(a,r,c,f,v){this._reactName=a,this._targetInst=c,this.type=r,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(a=e[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Zo:Fh,this.isPropagationStopped=Fh,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Zo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Zo)},persist:function(){},isPersistent:Zo}),n}var es={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ko=In(es),Br=x({},es,{view:0,detail:0}),r_=In(Br),Gc,kc,Hr,Qo=x({},Br,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Hr&&(Hr&&e.type==="mousemove"?(Gc=e.screenX-Hr.screenX,kc=e.screenY-Hr.screenY):kc=Gc=0,Hr=e),Gc)},movementY:function(e){return"movementY"in e?e.movementY:kc}}),Bh=In(Qo),o_=x({},Qo,{dataTransfer:0}),l_=In(o_),c_=x({},Br,{relatedTarget:0}),Xc=In(c_),u_=x({},es,{animationName:0,elapsedTime:0,pseudoElement:0}),f_=In(u_),d_=x({},es,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),h_=In(d_),p_=x({},es,{data:0}),Hh=In(p_),m_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},x_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},g_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function __(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=g_[e])?!!n[e]:!1}function jc(){return __}var v_=x({},Br,{key:function(e){if(e.key){var n=m_[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Yo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?x_[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jc,charCode:function(e){return e.type==="keypress"?Yo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Yo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),S_=In(v_),y_=x({},Qo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vh=In(y_),b_=x({},Br,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jc}),M_=In(b_),E_=x({},es,{propertyName:0,elapsedTime:0,pseudoElement:0}),T_=In(E_),A_=x({},Qo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),R_=In(A_),C_=x({},es,{newState:0,oldState:0}),w_=In(C_),D_=[9,13,27,32],qc=Hi&&"CompositionEvent"in window,Vr=null;Hi&&"documentMode"in document&&(Vr=document.documentMode);var N_=Hi&&"TextEvent"in window&&!Vr,Gh=Hi&&(!qc||Vr&&8<Vr&&11>=Vr),kh=" ",Xh=!1;function jh(e,n){switch(e){case"keyup":return D_.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ns=!1;function U_(e,n){switch(e){case"compositionend":return qh(n);case"keypress":return n.which!==32?null:(Xh=!0,kh);case"textInput":return e=n.data,e===kh&&Xh?null:e;default:return null}}function L_(e,n){if(Ns)return e==="compositionend"||!qc&&jh(e,n)?(e=Ih(),Wo=Vc=ga=null,Ns=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Gh&&n.locale!=="ko"?null:n.data;default:return null}}var O_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wh(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!O_[e.type]:n==="textarea"}function Yh(e,n,a,r){ws?Ds?Ds.push(r):Ds=[r]:ws=r,n=Hl(n,"onChange"),0<n.length&&(a=new Ko("onChange","change",null,a,r),e.push({event:a,listeners:n}))}var Gr=null,kr=null;function z_(e){Dm(e,0)}function Jo(e){var n=Q(e);if(bt(n))return e}function Zh(e,n){if(e==="change")return n}var Kh=!1;if(Hi){var Wc;if(Hi){var Yc="oninput"in document;if(!Yc){var Qh=document.createElement("div");Qh.setAttribute("oninput","return;"),Yc=typeof Qh.oninput=="function"}Wc=Yc}else Wc=!1;Kh=Wc&&(!document.documentMode||9<document.documentMode)}function Jh(){Gr&&(Gr.detachEvent("onpropertychange",$h),kr=Gr=null)}function $h(e){if(e.propertyName==="value"&&Jo(kr)){var n=[];Yh(n,kr,e,Fc(e)),Ph(z_,n)}}function P_(e,n,a){e==="focusin"?(Jh(),Gr=n,kr=a,Gr.attachEvent("onpropertychange",$h)):e==="focusout"&&Jh()}function I_(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Jo(kr)}function F_(e,n){if(e==="click")return Jo(n)}function B_(e,n){if(e==="input"||e==="change")return Jo(n)}function H_(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Wn=typeof Object.is=="function"?Object.is:H_;function Xr(e,n){if(Wn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var c=a[r];if(!Ve.call(n,c)||!Wn(e[c],n[c]))return!1}return!0}function ep(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function tp(e,n){var a=ep(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=n&&r>=n)return{node:a,offset:n-e};e=r}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=ep(a)}}function np(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?np(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function ip(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=_n(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=_n(e.document)}return n}function Zc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var V_=Hi&&"documentMode"in document&&11>=document.documentMode,Us=null,Kc=null,jr=null,Qc=!1;function ap(e,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Qc||Us==null||Us!==_n(r)||(r=Us,"selectionStart"in r&&Zc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),jr&&Xr(jr,r)||(jr=r,r=Hl(Kc,"onSelect"),0<r.length&&(n=new Ko("onSelect","select",null,n,a),e.push({event:n,listeners:r}),n.target=Us)))}function ts(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Ls={animationend:ts("Animation","AnimationEnd"),animationiteration:ts("Animation","AnimationIteration"),animationstart:ts("Animation","AnimationStart"),transitionrun:ts("Transition","TransitionRun"),transitionstart:ts("Transition","TransitionStart"),transitioncancel:ts("Transition","TransitionCancel"),transitionend:ts("Transition","TransitionEnd")},Jc={},sp={};Hi&&(sp=document.createElement("div").style,"AnimationEvent"in window||(delete Ls.animationend.animation,delete Ls.animationiteration.animation,delete Ls.animationstart.animation),"TransitionEvent"in window||delete Ls.transitionend.transition);function ns(e){if(Jc[e])return Jc[e];if(!Ls[e])return e;var n=Ls[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in sp)return Jc[e]=n[a];return e}var rp=ns("animationend"),op=ns("animationiteration"),lp=ns("animationstart"),G_=ns("transitionrun"),k_=ns("transitionstart"),X_=ns("transitioncancel"),cp=ns("transitionend"),up=new Map,$c="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");$c.push("scrollEnd");function gi(e,n){up.set(e,n),Ue(n,[e])}var $o=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},si=[],Os=0,eu=0;function el(){for(var e=Os,n=eu=Os=0;n<e;){var a=si[n];si[n++]=null;var r=si[n];si[n++]=null;var c=si[n];si[n++]=null;var f=si[n];if(si[n++]=null,r!==null&&c!==null){var v=r.pending;v===null?c.next=c:(c.next=v.next,v.next=c),r.pending=c}f!==0&&fp(a,c,f)}}function tl(e,n,a,r){si[Os++]=e,si[Os++]=n,si[Os++]=a,si[Os++]=r,eu|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function tu(e,n,a,r){return tl(e,n,a,r),nl(e)}function is(e,n){return tl(e,null,null,n),nl(e)}function fp(e,n,a){e.lanes|=a;var r=e.alternate;r!==null&&(r.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&n!==null&&(c=31-Ge(a),e=f.hiddenUpdates,r=e[c],r===null?e[c]=[n]:r.push(n),n.lane=a|536870912),f):null}function nl(e){if(50<po)throw po=0,ff=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var zs={};function j_(e,n,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(e,n,a,r){return new j_(e,n,a,r)}function nu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Vi(e,n){var a=e.alternate;return a===null?(a=Yn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function dp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function il(e,n,a,r,c,f){var v=0;if(r=e,typeof e=="function")nu(e)&&(v=1);else if(typeof e=="string")v=Kv(e,a,ye.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case w:return e=Yn(31,a,n,c),e.elementType=w,e.lanes=f,e;case C:return as(a.children,c,f,n);case b:v=8,c|=24;break;case _:return e=Yn(12,a,n,c|2),e.elementType=_,e.lanes=f,e;case H:return e=Yn(13,a,n,c),e.elementType=H,e.lanes=f,e;case N:return e=Yn(19,a,n,c),e.elementType=N,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case U:v=10;break e;case I:v=9;break e;case F:v=11;break e;case B:v=14;break e;case ee:v=16,r=null;break e}v=29,a=Error(s(130,e===null?"null":typeof e,"")),r=null}return n=Yn(v,a,n,c),n.elementType=e,n.type=r,n.lanes=f,n}function as(e,n,a,r){return e=Yn(7,e,r,n),e.lanes=a,e}function iu(e,n,a){return e=Yn(6,e,null,n),e.lanes=a,e}function hp(e){var n=Yn(18,null,null,0);return n.stateNode=e,n}function au(e,n,a){return n=Yn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var pp=new WeakMap;function ri(e,n){if(typeof e=="object"&&e!==null){var a=pp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Pt(n)},pp.set(e,n),n)}return{value:e,source:n,stack:Pt(n)}}var Ps=[],Is=0,al=null,qr=0,oi=[],li=0,_a=null,Ai=1,Ri="";function Gi(e,n){Ps[Is++]=qr,Ps[Is++]=al,al=e,qr=n}function mp(e,n,a){oi[li++]=Ai,oi[li++]=Ri,oi[li++]=_a,_a=e;var r=Ai;e=Ri;var c=32-Ge(r)-1;r&=~(1<<c),a+=1;var f=32-Ge(n)+c;if(30<f){var v=c-c%5;f=(r&(1<<v)-1).toString(32),r>>=v,c-=v,Ai=1<<32-Ge(n)+c|a<<c|r,Ri=f+e}else Ai=1<<f|a<<c|r,Ri=e}function su(e){e.return!==null&&(Gi(e,1),mp(e,1,0))}function ru(e){for(;e===al;)al=Ps[--Is],Ps[Is]=null,qr=Ps[--Is],Ps[Is]=null;for(;e===_a;)_a=oi[--li],oi[li]=null,Ri=oi[--li],oi[li]=null,Ai=oi[--li],oi[li]=null}function xp(e,n){oi[li++]=Ai,oi[li++]=Ri,oi[li++]=_a,Ai=n.id,Ri=n.overflow,_a=e}var En=null,Kt=null,Mt=!1,va=null,ci=!1,ou=Error(s(519));function Sa(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Wr(ri(n,e)),ou}function gp(e){var n=e.stateNode,a=e.type,r=e.memoizedProps;switch(n[on]=e,n[hn]=r,a){case"dialog":gt("cancel",n),gt("close",n);break;case"iframe":case"object":case"embed":gt("load",n);break;case"video":case"audio":for(a=0;a<xo.length;a++)gt(xo[a],n);break;case"source":gt("error",n);break;case"img":case"image":case"link":gt("error",n),gt("load",n);break;case"details":gt("toggle",n);break;case"input":gt("invalid",n),Yt(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":gt("invalid",n);break;case"textarea":gt("invalid",n),Mn(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||Om(n.textContent,a)?(r.popover!=null&&(gt("beforetoggle",n),gt("toggle",n)),r.onScroll!=null&&gt("scroll",n),r.onScrollEnd!=null&&gt("scrollend",n),r.onClick!=null&&(n.onclick=Bi),n=!0):n=!1,n||Sa(e,!0)}function _p(e){for(En=e.return;En;)switch(En.tag){case 5:case 31:case 13:ci=!1;return;case 27:case 3:ci=!0;return;default:En=En.return}}function Fs(e){if(e!==En)return!1;if(!Mt)return _p(e),Mt=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Af(e.type,e.memoizedProps)),a=!a),a&&Kt&&Sa(e),_p(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Kt=km(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Kt=km(e)}else n===27?(n=Kt,Oa(e.type)?(e=Nf,Nf=null,Kt=e):Kt=n):Kt=En?fi(e.stateNode.nextSibling):null;return!0}function ss(){Kt=En=null,Mt=!1}function lu(){var e=va;return e!==null&&(Vn===null?Vn=e:Vn.push.apply(Vn,e),va=null),e}function Wr(e){va===null?va=[e]:va.push(e)}var cu=O(null),rs=null,ki=null;function ya(e,n,a){me(cu,n._currentValue),n._currentValue=a}function Xi(e){e._currentValue=cu.current,Z(cu)}function uu(e,n,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===a)break;e=e.return}}function fu(e,n,a,r){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var v=c.child;f=f.firstContext;e:for(;f!==null;){var T=f;f=c;for(var G=0;G<n.length;G++)if(T.context===n[G]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),uu(f.return,a,e),r||(v=null);break e}f=T.next}}else if(c.tag===18){if(v=c.return,v===null)throw Error(s(341));v.lanes|=a,f=v.alternate,f!==null&&(f.lanes|=a),uu(v,a,e),v=null}else v=c.child;if(v!==null)v.return=c;else for(v=c;v!==null;){if(v===e){v=null;break}if(c=v.sibling,c!==null){c.return=v.return,v=c;break}v=v.return}c=v}}function Bs(e,n,a,r){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var v=c.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var T=c.type;Wn(c.pendingProps.value,v.value)||(e!==null?e.push(T):e=[T])}}else if(c===he.current){if(v=c.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(yo):e=[yo])}c=c.return}e!==null&&fu(n,e,a,r),n.flags|=262144}function sl(e){for(e=e.firstContext;e!==null;){if(!Wn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function os(e){rs=e,ki=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Tn(e){return vp(rs,e)}function rl(e,n){return rs===null&&os(e),vp(e,n)}function vp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ki===null){if(e===null)throw Error(s(308));ki=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ki=ki.next=n;return a}var q_=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},W_=o.unstable_scheduleCallback,Y_=o.unstable_NormalPriority,ln={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function du(){return{controller:new q_,data:new Map,refCount:0}}function Yr(e){e.refCount--,e.refCount===0&&W_(Y_,function(){e.controller.abort()})}var Zr=null,hu=0,Hs=0,Vs=null;function Z_(e,n){if(Zr===null){var a=Zr=[];hu=0,Hs=gf(),Vs={status:"pending",value:void 0,then:function(r){a.push(r)}}}return hu++,n.then(Sp,Sp),n}function Sp(){if(--hu===0&&Zr!==null){Vs!==null&&(Vs.status="fulfilled");var e=Zr;Zr=null,Hs=0,Vs=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function K_(e,n){var a=[],r={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(r.status="rejected",r.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),r}var yp=z.S;z.S=function(e,n){am=M(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Z_(e,n),yp!==null&&yp(e,n)};var ls=O(null);function pu(){var e=ls.current;return e!==null?e:qt.pooledCache}function ol(e,n){n===null?me(ls,ls.current):me(ls,n.pool)}function bp(){var e=pu();return e===null?null:{parent:ln._currentValue,pool:e}}var Gs=Error(s(460)),mu=Error(s(474)),ll=Error(s(542)),cl={then:function(){}};function Mp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ep(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Bi,Bi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Ap(e),e;default:if(typeof n.status=="string")n.then(Bi,Bi);else{if(e=qt,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=r}},function(r){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Ap(e),e}throw us=n,Gs}}function cs(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(us=a,Gs):a}}var us=null;function Tp(){if(us===null)throw Error(s(459));var e=us;return us=null,e}function Ap(e){if(e===Gs||e===ll)throw Error(s(483))}var ks=null,Kr=0;function ul(e){var n=Kr;return Kr+=1,ks===null&&(ks=[]),Ep(ks,e,n)}function Qr(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function fl(e,n){throw n.$$typeof===S?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Rp(e){function n(J,q){if(e){var ae=J.deletions;ae===null?(J.deletions=[q],J.flags|=16):ae.push(q)}}function a(J,q){if(!e)return null;for(;q!==null;)n(J,q),q=q.sibling;return null}function r(J){for(var q=new Map;J!==null;)J.key!==null?q.set(J.key,J):q.set(J.index,J),J=J.sibling;return q}function c(J,q){return J=Vi(J,q),J.index=0,J.sibling=null,J}function f(J,q,ae){return J.index=ae,e?(ae=J.alternate,ae!==null?(ae=ae.index,ae<q?(J.flags|=67108866,q):ae):(J.flags|=67108866,q)):(J.flags|=1048576,q)}function v(J){return e&&J.alternate===null&&(J.flags|=67108866),J}function T(J,q,ae,ge){return q===null||q.tag!==6?(q=iu(ae,J.mode,ge),q.return=J,q):(q=c(q,ae),q.return=J,q)}function G(J,q,ae,ge){var Ke=ae.type;return Ke===C?xe(J,q,ae.props.children,ge,ae.key):q!==null&&(q.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===ee&&cs(Ke)===q.type)?(q=c(q,ae.props),Qr(q,ae),q.return=J,q):(q=il(ae.type,ae.key,ae.props,null,J.mode,ge),Qr(q,ae),q.return=J,q)}function re(J,q,ae,ge){return q===null||q.tag!==4||q.stateNode.containerInfo!==ae.containerInfo||q.stateNode.implementation!==ae.implementation?(q=au(ae,J.mode,ge),q.return=J,q):(q=c(q,ae.children||[]),q.return=J,q)}function xe(J,q,ae,ge,Ke){return q===null||q.tag!==7?(q=as(ae,J.mode,ge,Ke),q.return=J,q):(q=c(q,ae),q.return=J,q)}function ve(J,q,ae){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return q=iu(""+q,J.mode,ae),q.return=J,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case y:return ae=il(q.type,q.key,q.props,null,J.mode,ae),Qr(ae,q),ae.return=J,ae;case E:return q=au(q,J.mode,ae),q.return=J,q;case ee:return q=cs(q),ve(J,q,ae)}if($(q)||K(q))return q=as(q,J.mode,ae,null),q.return=J,q;if(typeof q.then=="function")return ve(J,ul(q),ae);if(q.$$typeof===U)return ve(J,rl(J,q),ae);fl(J,q)}return null}function ce(J,q,ae,ge){var Ke=q!==null?q.key:null;if(typeof ae=="string"&&ae!==""||typeof ae=="number"||typeof ae=="bigint")return Ke!==null?null:T(J,q,""+ae,ge);if(typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case y:return ae.key===Ke?G(J,q,ae,ge):null;case E:return ae.key===Ke?re(J,q,ae,ge):null;case ee:return ae=cs(ae),ce(J,q,ae,ge)}if($(ae)||K(ae))return Ke!==null?null:xe(J,q,ae,ge,null);if(typeof ae.then=="function")return ce(J,q,ul(ae),ge);if(ae.$$typeof===U)return ce(J,q,rl(J,ae),ge);fl(J,ae)}return null}function fe(J,q,ae,ge,Ke){if(typeof ge=="string"&&ge!==""||typeof ge=="number"||typeof ge=="bigint")return J=J.get(ae)||null,T(q,J,""+ge,Ke);if(typeof ge=="object"&&ge!==null){switch(ge.$$typeof){case y:return J=J.get(ge.key===null?ae:ge.key)||null,G(q,J,ge,Ke);case E:return J=J.get(ge.key===null?ae:ge.key)||null,re(q,J,ge,Ke);case ee:return ge=cs(ge),fe(J,q,ae,ge,Ke)}if($(ge)||K(ge))return J=J.get(ae)||null,xe(q,J,ge,Ke,null);if(typeof ge.then=="function")return fe(J,q,ae,ul(ge),Ke);if(ge.$$typeof===U)return fe(J,q,ae,rl(q,ge),Ke);fl(q,ge)}return null}function He(J,q,ae,ge){for(var Ke=null,Dt=null,Xe=q,ut=q=0,vt=null;Xe!==null&&ut<ae.length;ut++){Xe.index>ut?(vt=Xe,Xe=null):vt=Xe.sibling;var Nt=ce(J,Xe,ae[ut],ge);if(Nt===null){Xe===null&&(Xe=vt);break}e&&Xe&&Nt.alternate===null&&n(J,Xe),q=f(Nt,q,ut),Dt===null?Ke=Nt:Dt.sibling=Nt,Dt=Nt,Xe=vt}if(ut===ae.length)return a(J,Xe),Mt&&Gi(J,ut),Ke;if(Xe===null){for(;ut<ae.length;ut++)Xe=ve(J,ae[ut],ge),Xe!==null&&(q=f(Xe,q,ut),Dt===null?Ke=Xe:Dt.sibling=Xe,Dt=Xe);return Mt&&Gi(J,ut),Ke}for(Xe=r(Xe);ut<ae.length;ut++)vt=fe(Xe,J,ut,ae[ut],ge),vt!==null&&(e&&vt.alternate!==null&&Xe.delete(vt.key===null?ut:vt.key),q=f(vt,q,ut),Dt===null?Ke=vt:Dt.sibling=vt,Dt=vt);return e&&Xe.forEach(function(Ba){return n(J,Ba)}),Mt&&Gi(J,ut),Ke}function et(J,q,ae,ge){if(ae==null)throw Error(s(151));for(var Ke=null,Dt=null,Xe=q,ut=q=0,vt=null,Nt=ae.next();Xe!==null&&!Nt.done;ut++,Nt=ae.next()){Xe.index>ut?(vt=Xe,Xe=null):vt=Xe.sibling;var Ba=ce(J,Xe,Nt.value,ge);if(Ba===null){Xe===null&&(Xe=vt);break}e&&Xe&&Ba.alternate===null&&n(J,Xe),q=f(Ba,q,ut),Dt===null?Ke=Ba:Dt.sibling=Ba,Dt=Ba,Xe=vt}if(Nt.done)return a(J,Xe),Mt&&Gi(J,ut),Ke;if(Xe===null){for(;!Nt.done;ut++,Nt=ae.next())Nt=ve(J,Nt.value,ge),Nt!==null&&(q=f(Nt,q,ut),Dt===null?Ke=Nt:Dt.sibling=Nt,Dt=Nt);return Mt&&Gi(J,ut),Ke}for(Xe=r(Xe);!Nt.done;ut++,Nt=ae.next())Nt=fe(Xe,J,ut,Nt.value,ge),Nt!==null&&(e&&Nt.alternate!==null&&Xe.delete(Nt.key===null?ut:Nt.key),q=f(Nt,q,ut),Dt===null?Ke=Nt:Dt.sibling=Nt,Dt=Nt);return e&&Xe.forEach(function(oS){return n(J,oS)}),Mt&&Gi(J,ut),Ke}function Gt(J,q,ae,ge){if(typeof ae=="object"&&ae!==null&&ae.type===C&&ae.key===null&&(ae=ae.props.children),typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case y:e:{for(var Ke=ae.key;q!==null;){if(q.key===Ke){if(Ke=ae.type,Ke===C){if(q.tag===7){a(J,q.sibling),ge=c(q,ae.props.children),ge.return=J,J=ge;break e}}else if(q.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===ee&&cs(Ke)===q.type){a(J,q.sibling),ge=c(q,ae.props),Qr(ge,ae),ge.return=J,J=ge;break e}a(J,q);break}else n(J,q);q=q.sibling}ae.type===C?(ge=as(ae.props.children,J.mode,ge,ae.key),ge.return=J,J=ge):(ge=il(ae.type,ae.key,ae.props,null,J.mode,ge),Qr(ge,ae),ge.return=J,J=ge)}return v(J);case E:e:{for(Ke=ae.key;q!==null;){if(q.key===Ke)if(q.tag===4&&q.stateNode.containerInfo===ae.containerInfo&&q.stateNode.implementation===ae.implementation){a(J,q.sibling),ge=c(q,ae.children||[]),ge.return=J,J=ge;break e}else{a(J,q);break}else n(J,q);q=q.sibling}ge=au(ae,J.mode,ge),ge.return=J,J=ge}return v(J);case ee:return ae=cs(ae),Gt(J,q,ae,ge)}if($(ae))return He(J,q,ae,ge);if(K(ae)){if(Ke=K(ae),typeof Ke!="function")throw Error(s(150));return ae=Ke.call(ae),et(J,q,ae,ge)}if(typeof ae.then=="function")return Gt(J,q,ul(ae),ge);if(ae.$$typeof===U)return Gt(J,q,rl(J,ae),ge);fl(J,ae)}return typeof ae=="string"&&ae!==""||typeof ae=="number"||typeof ae=="bigint"?(ae=""+ae,q!==null&&q.tag===6?(a(J,q.sibling),ge=c(q,ae),ge.return=J,J=ge):(a(J,q),ge=iu(ae,J.mode,ge),ge.return=J,J=ge),v(J)):a(J,q)}return function(J,q,ae,ge){try{Kr=0;var Ke=Gt(J,q,ae,ge);return ks=null,Ke}catch(Xe){if(Xe===Gs||Xe===ll)throw Xe;var Dt=Yn(29,Xe,null,J.mode);return Dt.lanes=ge,Dt.return=J,Dt}finally{}}}var fs=Rp(!0),Cp=Rp(!1),ba=!1;function xu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function gu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ma(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ea(e,n,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Ot&2)!==0){var c=r.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),r.pending=n,n=nl(e),fp(e,null,a),n}return tl(e,r,n,a),nl(e)}function Jr(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Ur(e,a)}}function _u(e,n){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:r.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var vu=!1;function $r(){if(vu){var e=Vs;if(e!==null)throw e}}function eo(e,n,a,r){vu=!1;var c=e.updateQueue;ba=!1;var f=c.firstBaseUpdate,v=c.lastBaseUpdate,T=c.shared.pending;if(T!==null){c.shared.pending=null;var G=T,re=G.next;G.next=null,v===null?f=re:v.next=re,v=G;var xe=e.alternate;xe!==null&&(xe=xe.updateQueue,T=xe.lastBaseUpdate,T!==v&&(T===null?xe.firstBaseUpdate=re:T.next=re,xe.lastBaseUpdate=G))}if(f!==null){var ve=c.baseState;v=0,xe=re=G=null,T=f;do{var ce=T.lane&-536870913,fe=ce!==T.lane;if(fe?(_t&ce)===ce:(r&ce)===ce){ce!==0&&ce===Hs&&(vu=!0),xe!==null&&(xe=xe.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var He=e,et=T;ce=n;var Gt=a;switch(et.tag){case 1:if(He=et.payload,typeof He=="function"){ve=He.call(Gt,ve,ce);break e}ve=He;break e;case 3:He.flags=He.flags&-65537|128;case 0:if(He=et.payload,ce=typeof He=="function"?He.call(Gt,ve,ce):He,ce==null)break e;ve=x({},ve,ce);break e;case 2:ba=!0}}ce=T.callback,ce!==null&&(e.flags|=64,fe&&(e.flags|=8192),fe=c.callbacks,fe===null?c.callbacks=[ce]:fe.push(ce))}else fe={lane:ce,tag:T.tag,payload:T.payload,callback:T.callback,next:null},xe===null?(re=xe=fe,G=ve):xe=xe.next=fe,v|=ce;if(T=T.next,T===null){if(T=c.shared.pending,T===null)break;fe=T,T=fe.next,fe.next=null,c.lastBaseUpdate=fe,c.shared.pending=null}}while(!0);xe===null&&(G=ve),c.baseState=G,c.firstBaseUpdate=re,c.lastBaseUpdate=xe,f===null&&(c.shared.lanes=0),wa|=v,e.lanes=v,e.memoizedState=ve}}function wp(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Dp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)wp(a[e],n)}var Xs=O(null),dl=O(0);function Np(e,n){e=$i,me(dl,e),me(Xs,n),$i=e|n.baseLanes}function Su(){me(dl,$i),me(Xs,Xs.current)}function yu(){$i=dl.current,Z(Xs),Z(dl)}var Zn=O(null),ui=null;function Ta(e){var n=e.alternate;me(nn,nn.current&1),me(Zn,e),ui===null&&(n===null||Xs.current!==null||n.memoizedState!==null)&&(ui=e)}function bu(e){me(nn,nn.current),me(Zn,e),ui===null&&(ui=e)}function Up(e){e.tag===22?(me(nn,nn.current),me(Zn,e),ui===null&&(ui=e)):Aa()}function Aa(){me(nn,nn.current),me(Zn,Zn.current)}function Kn(e){Z(Zn),ui===e&&(ui=null),Z(nn)}var nn=O(0);function hl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||wf(a)||Df(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ji=0,ot=null,Ht=null,cn=null,pl=!1,js=!1,ds=!1,ml=0,to=0,qs=null,Q_=0;function $t(){throw Error(s(321))}function Mu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Wn(e[a],n[a]))return!1;return!0}function Eu(e,n,a,r,c,f){return ji=f,ot=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,z.H=e===null||e.memoizedState===null?m0:Bu,ds=!1,f=a(r,c),ds=!1,js&&(f=Op(n,a,r,c)),Lp(e),f}function Lp(e){z.H=ao;var n=Ht!==null&&Ht.next!==null;if(ji=0,cn=Ht=ot=null,pl=!1,to=0,qs=null,n)throw Error(s(300));e===null||un||(e=e.dependencies,e!==null&&sl(e)&&(un=!0))}function Op(e,n,a,r){ot=e;var c=0;do{if(js&&(qs=null),to=0,js=!1,25<=c)throw Error(s(301));if(c+=1,cn=Ht=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}z.H=x0,f=n(a,r)}while(js);return f}function J_(){var e=z.H,n=e.useState()[0];return n=typeof n.then=="function"?no(n):n,e=e.useState()[0],(Ht!==null?Ht.memoizedState:null)!==e&&(ot.flags|=1024),n}function Tu(){var e=ml!==0;return ml=0,e}function Au(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Ru(e){if(pl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}pl=!1}ji=0,cn=Ht=ot=null,js=!1,to=ml=0,qs=null}function On(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?ot.memoizedState=cn=e:cn=cn.next=e,cn}function an(){if(Ht===null){var e=ot.alternate;e=e!==null?e.memoizedState:null}else e=Ht.next;var n=cn===null?ot.memoizedState:cn.next;if(n!==null)cn=n,Ht=e;else{if(e===null)throw ot.alternate===null?Error(s(467)):Error(s(310));Ht=e,e={memoizedState:Ht.memoizedState,baseState:Ht.baseState,baseQueue:Ht.baseQueue,queue:Ht.queue,next:null},cn===null?ot.memoizedState=cn=e:cn=cn.next=e}return cn}function xl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function no(e){var n=to;return to+=1,qs===null&&(qs=[]),e=Ep(qs,e,n),n=ot,(cn===null?n.memoizedState:cn.next)===null&&(n=n.alternate,z.H=n===null||n.memoizedState===null?m0:Bu),e}function gl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return no(e);if(e.$$typeof===U)return Tn(e)}throw Error(s(438,String(e)))}function Cu(e){var n=null,a=ot.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=ot.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=xl(),ot.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),r=0;r<e;r++)a[r]=A;return n.index++,a}function qi(e,n){return typeof n=="function"?n(e):n}function _l(e){var n=an();return wu(n,Ht,e)}function wu(e,n,a){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var c=e.baseQueue,f=r.pending;if(f!==null){if(c!==null){var v=c.next;c.next=f.next,f.next=v}n.baseQueue=c=f,r.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var T=v=null,G=null,re=n,xe=!1;do{var ve=re.lane&-536870913;if(ve!==re.lane?(_t&ve)===ve:(ji&ve)===ve){var ce=re.revertLane;if(ce===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null}),ve===Hs&&(xe=!0);else if((ji&ce)===ce){re=re.next,ce===Hs&&(xe=!0);continue}else ve={lane:0,revertLane:re.revertLane,gesture:null,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null},G===null?(T=G=ve,v=f):G=G.next=ve,ot.lanes|=ce,wa|=ce;ve=re.action,ds&&a(f,ve),f=re.hasEagerState?re.eagerState:a(f,ve)}else ce={lane:ve,revertLane:re.revertLane,gesture:re.gesture,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null},G===null?(T=G=ce,v=f):G=G.next=ce,ot.lanes|=ve,wa|=ve;re=re.next}while(re!==null&&re!==n);if(G===null?v=f:G.next=T,!Wn(f,e.memoizedState)&&(un=!0,xe&&(a=Vs,a!==null)))throw a;e.memoizedState=f,e.baseState=v,e.baseQueue=G,r.lastRenderedState=f}return c===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Du(e){var n=an(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var r=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var v=c=c.next;do f=e(f,v.action),v=v.next;while(v!==c);Wn(f,n.memoizedState)||(un=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function zp(e,n,a){var r=ot,c=an(),f=Mt;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var v=!Wn((Ht||c).memoizedState,a);if(v&&(c.memoizedState=a,un=!0),c=c.queue,Lu(Fp.bind(null,r,c,e),[e]),c.getSnapshot!==n||v||cn!==null&&cn.memoizedState.tag&1){if(r.flags|=2048,Ws(9,{destroy:void 0},Ip.bind(null,r,c,a,n),null),qt===null)throw Error(s(349));f||(ji&127)!==0||Pp(r,n,a)}return a}function Pp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ot.updateQueue,n===null?(n=xl(),ot.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Ip(e,n,a,r){n.value=a,n.getSnapshot=r,Bp(n)&&Hp(e)}function Fp(e,n,a){return a(function(){Bp(n)&&Hp(e)})}function Bp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Wn(e,a)}catch{return!0}}function Hp(e){var n=is(e,2);n!==null&&Gn(n,e,2)}function Nu(e){var n=On();if(typeof e=="function"){var a=e;if(e=a(),ds){We(!0);try{a()}finally{We(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:e},n}function Vp(e,n,a,r){return e.baseState=a,wu(e,Ht,typeof r=="function"?r:qi)}function $_(e,n,a,r,c){if(yl(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){f.listeners.push(v)}};z.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,Gp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Gp(e,n){var a=n.action,r=n.payload,c=e.state;if(n.isTransition){var f=z.T,v={};z.T=v;try{var T=a(c,r),G=z.S;G!==null&&G(v,T),kp(e,n,T)}catch(re){Uu(e,n,re)}finally{f!==null&&v.types!==null&&(f.types=v.types),z.T=f}}else try{f=a(c,r),kp(e,n,f)}catch(re){Uu(e,n,re)}}function kp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){Xp(e,n,r)},function(r){return Uu(e,n,r)}):Xp(e,n,a)}function Xp(e,n,a){n.status="fulfilled",n.value=a,jp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Gp(e,a)))}function Uu(e,n,a){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,jp(n),n=n.next;while(n!==r)}e.action=null}function jp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function qp(e,n){return n}function Wp(e,n){if(Mt){var a=qt.formState;if(a!==null){e:{var r=ot;if(Mt){if(Kt){t:{for(var c=Kt,f=ci;c.nodeType!==8;){if(!f){c=null;break t}if(c=fi(c.nextSibling),c===null){c=null;break t}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Kt=fi(c.nextSibling),r=c.data==="F!";break e}}Sa(r)}r=!1}r&&(n=a[0])}}return a=On(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qp,lastRenderedState:n},a.queue=r,a=d0.bind(null,ot,r),r.dispatch=a,r=Nu(!1),f=Fu.bind(null,ot,!1,r.queue),r=On(),c={state:n,dispatch:null,action:e,pending:null},r.queue=c,a=$_.bind(null,ot,c,f,a),c.dispatch=a,r.memoizedState=e,[n,a,!1]}function Yp(e){var n=an();return Zp(n,Ht,e)}function Zp(e,n,a){if(n=wu(e,n,qp)[0],e=_l(qi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=no(n)}catch(v){throw v===Gs?ll:v}else r=n;n=an();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(ot.flags|=2048,Ws(9,{destroy:void 0},ev.bind(null,c,a),null)),[r,f,e]}function ev(e,n){e.action=n}function Kp(e){var n=an(),a=Ht;if(a!==null)return Zp(n,a,e);an(),n=n.memoizedState,a=an();var r=a.queue.dispatch;return a.memoizedState=e,[n,r,!1]}function Ws(e,n,a,r){return e={tag:e,create:a,deps:r,inst:n,next:null},n=ot.updateQueue,n===null&&(n=xl(),ot.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,n.lastEffect=e),e}function Qp(){return an().memoizedState}function vl(e,n,a,r){var c=On();ot.flags|=e,c.memoizedState=Ws(1|n,{destroy:void 0},a,r===void 0?null:r)}function Sl(e,n,a,r){var c=an();r=r===void 0?null:r;var f=c.memoizedState.inst;Ht!==null&&r!==null&&Mu(r,Ht.memoizedState.deps)?c.memoizedState=Ws(n,f,a,r):(ot.flags|=e,c.memoizedState=Ws(1|n,f,a,r))}function Jp(e,n){vl(8390656,8,e,n)}function Lu(e,n){Sl(2048,8,e,n)}function tv(e){ot.flags|=4;var n=ot.updateQueue;if(n===null)n=xl(),ot.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function $p(e){var n=an().memoizedState;return tv({ref:n,nextImpl:e}),function(){if((Ot&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function e0(e,n){return Sl(4,2,e,n)}function t0(e,n){return Sl(4,4,e,n)}function n0(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function i0(e,n,a){a=a!=null?a.concat([e]):null,Sl(4,4,n0.bind(null,n,e),a)}function Ou(){}function a0(e,n){var a=an();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Mu(n,r[1])?r[0]:(a.memoizedState=[e,n],e)}function s0(e,n){var a=an();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Mu(n,r[1]))return r[0];if(r=e(),ds){We(!0);try{e()}finally{We(!1)}}return a.memoizedState=[r,n],r}function zu(e,n,a){return a===void 0||(ji&1073741824)!==0&&(_t&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=rm(),ot.lanes|=e,wa|=e,a)}function r0(e,n,a,r){return Wn(a,n)?a:Xs.current!==null?(e=zu(e,a,r),Wn(e,n)||(un=!0),e):(ji&42)===0||(ji&1073741824)!==0&&(_t&261930)===0?(un=!0,e.memoizedState=a):(e=rm(),ot.lanes|=e,wa|=e,n)}function o0(e,n,a,r,c){var f=W.p;W.p=f!==0&&8>f?f:8;var v=z.T,T={};z.T=T,Fu(e,!1,n,a);try{var G=c(),re=z.S;if(re!==null&&re(T,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var xe=K_(G,r);io(e,n,xe,$n(e))}else io(e,n,r,$n(e))}catch(ve){io(e,n,{then:function(){},status:"rejected",reason:ve},$n())}finally{W.p=f,v!==null&&T.types!==null&&(v.types=T.types),z.T=v}}function nv(){}function Pu(e,n,a,r){if(e.tag!==5)throw Error(s(476));var c=l0(e).queue;o0(e,c,n,L,a===null?nv:function(){return c0(e),a(r)})}function l0(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:L,baseState:L,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:L},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function c0(e){var n=l0(e);n.next===null&&(n=e.alternate.memoizedState),io(e,n.next.queue,{},$n())}function Iu(){return Tn(yo)}function u0(){return an().memoizedState}function f0(){return an().memoizedState}function iv(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=$n();e=Ma(a);var r=Ea(n,e,a);r!==null&&(Gn(r,n,a),Jr(r,n,a)),n={cache:du()},e.payload=n;return}n=n.return}}function av(e,n,a){var r=$n();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},yl(e)?h0(n,a):(a=tu(e,n,a,r),a!==null&&(Gn(a,e,r),p0(a,n,r)))}function d0(e,n,a){var r=$n();io(e,n,a,r)}function io(e,n,a,r){var c={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(yl(e))h0(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var v=n.lastRenderedState,T=f(v,a);if(c.hasEagerState=!0,c.eagerState=T,Wn(T,v))return tl(e,n,c,0),qt===null&&el(),!1}catch{}finally{}if(a=tu(e,n,c,r),a!==null)return Gn(a,e,r),p0(a,n,r),!0}return!1}function Fu(e,n,a,r){if(r={lane:2,revertLane:gf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},yl(e)){if(n)throw Error(s(479))}else n=tu(e,a,r,2),n!==null&&Gn(n,e,2)}function yl(e){var n=e.alternate;return e===ot||n!==null&&n===ot}function h0(e,n){js=pl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function p0(e,n,a){if((a&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Ur(e,a)}}var ao={readContext:Tn,use:gl,useCallback:$t,useContext:$t,useEffect:$t,useImperativeHandle:$t,useLayoutEffect:$t,useInsertionEffect:$t,useMemo:$t,useReducer:$t,useRef:$t,useState:$t,useDebugValue:$t,useDeferredValue:$t,useTransition:$t,useSyncExternalStore:$t,useId:$t,useHostTransitionStatus:$t,useFormState:$t,useActionState:$t,useOptimistic:$t,useMemoCache:$t,useCacheRefresh:$t};ao.useEffectEvent=$t;var m0={readContext:Tn,use:gl,useCallback:function(e,n){return On().memoizedState=[e,n===void 0?null:n],e},useContext:Tn,useEffect:Jp,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,vl(4194308,4,n0.bind(null,n,e),a)},useLayoutEffect:function(e,n){return vl(4194308,4,e,n)},useInsertionEffect:function(e,n){vl(4,2,e,n)},useMemo:function(e,n){var a=On();n=n===void 0?null:n;var r=e();if(ds){We(!0);try{e()}finally{We(!1)}}return a.memoizedState=[r,n],r},useReducer:function(e,n,a){var r=On();if(a!==void 0){var c=a(n);if(ds){We(!0);try{a(n)}finally{We(!1)}}}else c=n;return r.memoizedState=r.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},r.queue=e,e=e.dispatch=av.bind(null,ot,e),[r.memoizedState,e]},useRef:function(e){var n=On();return e={current:e},n.memoizedState=e},useState:function(e){e=Nu(e);var n=e.queue,a=d0.bind(null,ot,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Ou,useDeferredValue:function(e,n){var a=On();return zu(a,e,n)},useTransition:function(){var e=Nu(!1);return e=o0.bind(null,ot,e.queue,!0,!1),On().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var r=ot,c=On();if(Mt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),qt===null)throw Error(s(349));(_t&127)!==0||Pp(r,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Jp(Fp.bind(null,r,f,e),[e]),r.flags|=2048,Ws(9,{destroy:void 0},Ip.bind(null,r,f,a,n),null),a},useId:function(){var e=On(),n=qt.identifierPrefix;if(Mt){var a=Ri,r=Ai;a=(r&~(1<<32-Ge(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=ml++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Q_++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Iu,useFormState:Wp,useActionState:Wp,useOptimistic:function(e){var n=On();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Fu.bind(null,ot,!0,a),a.dispatch=n,[e,n]},useMemoCache:Cu,useCacheRefresh:function(){return On().memoizedState=iv.bind(null,ot)},useEffectEvent:function(e){var n=On(),a={impl:e};return n.memoizedState=a,function(){if((Ot&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Bu={readContext:Tn,use:gl,useCallback:a0,useContext:Tn,useEffect:Lu,useImperativeHandle:i0,useInsertionEffect:e0,useLayoutEffect:t0,useMemo:s0,useReducer:_l,useRef:Qp,useState:function(){return _l(qi)},useDebugValue:Ou,useDeferredValue:function(e,n){var a=an();return r0(a,Ht.memoizedState,e,n)},useTransition:function(){var e=_l(qi)[0],n=an().memoizedState;return[typeof e=="boolean"?e:no(e),n]},useSyncExternalStore:zp,useId:u0,useHostTransitionStatus:Iu,useFormState:Yp,useActionState:Yp,useOptimistic:function(e,n){var a=an();return Vp(a,Ht,e,n)},useMemoCache:Cu,useCacheRefresh:f0};Bu.useEffectEvent=$p;var x0={readContext:Tn,use:gl,useCallback:a0,useContext:Tn,useEffect:Lu,useImperativeHandle:i0,useInsertionEffect:e0,useLayoutEffect:t0,useMemo:s0,useReducer:Du,useRef:Qp,useState:function(){return Du(qi)},useDebugValue:Ou,useDeferredValue:function(e,n){var a=an();return Ht===null?zu(a,e,n):r0(a,Ht.memoizedState,e,n)},useTransition:function(){var e=Du(qi)[0],n=an().memoizedState;return[typeof e=="boolean"?e:no(e),n]},useSyncExternalStore:zp,useId:u0,useHostTransitionStatus:Iu,useFormState:Kp,useActionState:Kp,useOptimistic:function(e,n){var a=an();return Ht!==null?Vp(a,Ht,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Cu,useCacheRefresh:f0};x0.useEffectEvent=$p;function Hu(e,n,a,r){n=e.memoizedState,a=a(r,n),a=a==null?n:x({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Vu={enqueueSetState:function(e,n,a){e=e._reactInternals;var r=$n(),c=Ma(r);c.payload=n,a!=null&&(c.callback=a),n=Ea(e,c,r),n!==null&&(Gn(n,e,r),Jr(n,e,r))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var r=$n(),c=Ma(r);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=Ea(e,c,r),n!==null&&(Gn(n,e,r),Jr(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=$n(),r=Ma(a);r.tag=2,n!=null&&(r.callback=n),n=Ea(e,r,a),n!==null&&(Gn(n,e,a),Jr(n,e,a))}};function g0(e,n,a,r,c,f,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,f,v):n.prototype&&n.prototype.isPureReactComponent?!Xr(a,r)||!Xr(c,f):!0}function _0(e,n,a,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==e&&Vu.enqueueReplaceState(n,n.state,null)}function hs(e,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(e=e.defaultProps){a===n&&(a=x({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}function v0(e){$o(e)}function S0(e){console.error(e)}function y0(e){$o(e)}function bl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function b0(e,n,a){try{var r=e.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Gu(e,n,a){return a=Ma(a),a.tag=3,a.payload={element:null},a.callback=function(){bl(e,n)},a}function M0(e){return e=Ma(e),e.tag=3,e}function E0(e,n,a,r){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=r.value;e.payload=function(){return c(f)},e.callback=function(){b0(n,a,r)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){b0(n,a,r),typeof c!="function"&&(Da===null?Da=new Set([this]):Da.add(this));var T=r.stack;this.componentDidCatch(r.value,{componentStack:T!==null?T:""})})}function sv(e,n,a,r,c){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Bs(n,a,c,!0),a=Zn.current,a!==null){switch(a.tag){case 31:case 13:return ui===null?Ol():a.alternate===null&&en===0&&(en=3),a.flags&=-257,a.flags|=65536,a.lanes=c,r===cl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),pf(e,r,c)),!1;case 22:return a.flags|=65536,r===cl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),pf(e,r,c)),!1}throw Error(s(435,a.tag))}return pf(e,r,c),Ol(),!1}if(Mt)return n=Zn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,r!==ou&&(e=Error(s(422),{cause:r}),Wr(ri(e,a)))):(r!==ou&&(n=Error(s(423),{cause:r}),Wr(ri(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,r=ri(r,a),c=Gu(e.stateNode,r,c),_u(e,c),en!==4&&(en=2)),!1;var f=Error(s(520),{cause:r});if(f=ri(f,a),ho===null?ho=[f]:ho.push(f),en!==4&&(en=2),n===null)return!0;r=ri(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=Gu(a.stateNode,r,e),_u(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Da===null||!Da.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=M0(c),E0(c,e,a,r),_u(a,c),!1}a=a.return}while(a!==null);return!1}var ku=Error(s(461)),un=!1;function An(e,n,a,r){n.child=e===null?Cp(n,null,a,r):fs(n,e.child,a,r)}function T0(e,n,a,r,c){a=a.render;var f=n.ref;if("ref"in r){var v={};for(var T in r)T!=="ref"&&(v[T]=r[T])}else v=r;return os(n),r=Eu(e,n,a,v,f,c),T=Tu(),e!==null&&!un?(Au(e,n,c),Wi(e,n,c)):(Mt&&T&&su(n),n.flags|=1,An(e,n,r,c),n.child)}function A0(e,n,a,r,c){if(e===null){var f=a.type;return typeof f=="function"&&!nu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,R0(e,n,f,r,c)):(e=il(a.type,null,r,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Qu(e,c)){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:Xr,a(v,r)&&e.ref===n.ref)return Wi(e,n,c)}return n.flags|=1,e=Vi(f,r),e.ref=n.ref,e.return=n,n.child=e}function R0(e,n,a,r,c){if(e!==null){var f=e.memoizedProps;if(Xr(f,r)&&e.ref===n.ref)if(un=!1,n.pendingProps=r=f,Qu(e,c))(e.flags&131072)!==0&&(un=!0);else return n.lanes=e.lanes,Wi(e,n,c)}return Xu(e,n,a,r,c)}function C0(e,n,a,r){var c=r.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(r=n.child=e.child,c=0;r!==null;)c=c|r.lanes|r.childLanes,r=r.sibling;r=c&~f}else r=0,n.child=null;return w0(e,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&ol(n,f!==null?f.cachePool:null),f!==null?Np(n,f):Su(),Up(n);else return r=n.lanes=536870912,w0(e,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(ol(n,f.cachePool),Np(n,f),Aa(),n.memoizedState=null):(e!==null&&ol(n,null),Su(),Aa());return An(e,n,c,a),n.child}function so(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function w0(e,n,a,r,c){var f=pu();return f=f===null?null:{parent:ln._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&ol(n,null),Su(),Up(n),e!==null&&Bs(e,n,r,!0),n.childLanes=c,null}function Ml(e,n){return n=Tl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function D0(e,n,a){return fs(n,e.child,null,a),e=Ml(n,n.pendingProps),e.flags|=2,Kn(n),n.memoizedState=null,e}function rv(e,n,a){var r=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Mt){if(r.mode==="hidden")return e=Ml(n,r),n.lanes=536870912,so(null,e);if(bu(n),(e=Kt)?(e=Gm(e,ci),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:_a!==null?{id:Ai,overflow:Ri}:null,retryLane:536870912,hydrationErrors:null},a=hp(e),a.return=n,n.child=a,En=n,Kt=null)):e=null,e===null)throw Sa(n);return n.lanes=536870912,null}return Ml(n,r)}var f=e.memoizedState;if(f!==null){var v=f.dehydrated;if(bu(n),c)if(n.flags&256)n.flags&=-257,n=D0(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(un||Bs(e,n,a,!1),c=(a&e.childLanes)!==0,un||c){if(r=qt,r!==null&&(v=Lr(r,a),v!==0&&v!==f.retryLane))throw f.retryLane=v,is(e,v),Gn(r,e,v),ku;Ol(),n=D0(e,n,a)}else e=f.treeContext,Kt=fi(v.nextSibling),En=n,Mt=!0,va=null,ci=!1,e!==null&&xp(n,e),n=Ml(n,r),n.flags|=4096;return n}return e=Vi(e.child,{mode:r.mode,children:r.children}),e.ref=n.ref,n.child=e,e.return=n,e}function El(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Xu(e,n,a,r,c){return os(n),a=Eu(e,n,a,r,void 0,c),r=Tu(),e!==null&&!un?(Au(e,n,c),Wi(e,n,c)):(Mt&&r&&su(n),n.flags|=1,An(e,n,a,c),n.child)}function N0(e,n,a,r,c,f){return os(n),n.updateQueue=null,a=Op(n,r,a,c),Lp(e),r=Tu(),e!==null&&!un?(Au(e,n,f),Wi(e,n,f)):(Mt&&r&&su(n),n.flags|=1,An(e,n,a,f),n.child)}function U0(e,n,a,r,c){if(os(n),n.stateNode===null){var f=zs,v=a.contextType;typeof v=="object"&&v!==null&&(f=Tn(v)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Vu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},xu(n),v=a.contextType,f.context=typeof v=="object"&&v!==null?Tn(v):zs,f.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(Hu(n,a,v,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(v=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),v!==f.state&&Vu.enqueueReplaceState(f,f.state,null),eo(n,r,f,c),$r(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){f=n.stateNode;var T=n.memoizedProps,G=hs(a,T);f.props=G;var re=f.context,xe=a.contextType;v=zs,typeof xe=="object"&&xe!==null&&(v=Tn(xe));var ve=a.getDerivedStateFromProps;xe=typeof ve=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,xe||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||re!==v)&&_0(n,f,r,v),ba=!1;var ce=n.memoizedState;f.state=ce,eo(n,r,f,c),$r(),re=n.memoizedState,T||ce!==re||ba?(typeof ve=="function"&&(Hu(n,a,ve,r),re=n.memoizedState),(G=ba||g0(n,a,G,r,ce,re,v))?(xe||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=re),f.props=r,f.state=re,f.context=v,r=G):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,gu(e,n),v=n.memoizedProps,xe=hs(a,v),f.props=xe,ve=n.pendingProps,ce=f.context,re=a.contextType,G=zs,typeof re=="object"&&re!==null&&(G=Tn(re)),T=a.getDerivedStateFromProps,(re=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==ve||ce!==G)&&_0(n,f,r,G),ba=!1,ce=n.memoizedState,f.state=ce,eo(n,r,f,c),$r();var fe=n.memoizedState;v!==ve||ce!==fe||ba||e!==null&&e.dependencies!==null&&sl(e.dependencies)?(typeof T=="function"&&(Hu(n,a,T,r),fe=n.memoizedState),(xe=ba||g0(n,a,xe,r,ce,fe,G)||e!==null&&e.dependencies!==null&&sl(e.dependencies))?(re||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,fe,G),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,fe,G)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&ce===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&ce===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=fe),f.props=r,f.state=fe,f.context=G,r=xe):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&ce===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&ce===e.memoizedState||(n.flags|=1024),r=!1)}return f=r,El(e,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&r?(n.child=fs(n,e.child,null,c),n.child=fs(n,null,a,c)):An(e,n,a,c),n.memoizedState=f.state,e=n.child):e=Wi(e,n,c),e}function L0(e,n,a,r){return ss(),n.flags|=256,An(e,n,a,r),n.child}var ju={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function qu(e){return{baseLanes:e,cachePool:bp()}}function Wu(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=Jn),e}function O0(e,n,a){var r=n.pendingProps,c=!1,f=(n.flags&128)!==0,v;if((v=f)||(v=e!==null&&e.memoizedState===null?!1:(nn.current&2)!==0),v&&(c=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,e===null){if(Mt){if(c?Ta(n):Aa(),(e=Kt)?(e=Gm(e,ci),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:_a!==null?{id:Ai,overflow:Ri}:null,retryLane:536870912,hydrationErrors:null},a=hp(e),a.return=n,n.child=a,En=n,Kt=null)):e=null,e===null)throw Sa(n);return Df(e)?n.lanes=32:n.lanes=536870912,null}var T=r.children;return r=r.fallback,c?(Aa(),c=n.mode,T=Tl({mode:"hidden",children:T},c),r=as(r,c,a,null),T.return=n,r.return=n,T.sibling=r,n.child=T,r=n.child,r.memoizedState=qu(a),r.childLanes=Wu(e,v,a),n.memoizedState=ju,so(null,r)):(Ta(n),Yu(n,T))}var G=e.memoizedState;if(G!==null&&(T=G.dehydrated,T!==null)){if(f)n.flags&256?(Ta(n),n.flags&=-257,n=Zu(e,n,a)):n.memoizedState!==null?(Aa(),n.child=e.child,n.flags|=128,n=null):(Aa(),T=r.fallback,c=n.mode,r=Tl({mode:"visible",children:r.children},c),T=as(T,c,a,null),T.flags|=2,r.return=n,T.return=n,r.sibling=T,n.child=r,fs(n,e.child,null,a),r=n.child,r.memoizedState=qu(a),r.childLanes=Wu(e,v,a),n.memoizedState=ju,n=so(null,r));else if(Ta(n),Df(T)){if(v=T.nextSibling&&T.nextSibling.dataset,v)var re=v.dgst;v=re,r=Error(s(419)),r.stack="",r.digest=v,Wr({value:r,source:null,stack:null}),n=Zu(e,n,a)}else if(un||Bs(e,n,a,!1),v=(a&e.childLanes)!==0,un||v){if(v=qt,v!==null&&(r=Lr(v,a),r!==0&&r!==G.retryLane))throw G.retryLane=r,is(e,r),Gn(v,e,r),ku;wf(T)||Ol(),n=Zu(e,n,a)}else wf(T)?(n.flags|=192,n.child=e.child,n=null):(e=G.treeContext,Kt=fi(T.nextSibling),En=n,Mt=!0,va=null,ci=!1,e!==null&&xp(n,e),n=Yu(n,r.children),n.flags|=4096);return n}return c?(Aa(),T=r.fallback,c=n.mode,G=e.child,re=G.sibling,r=Vi(G,{mode:"hidden",children:r.children}),r.subtreeFlags=G.subtreeFlags&65011712,re!==null?T=Vi(re,T):(T=as(T,c,a,null),T.flags|=2),T.return=n,r.return=n,r.sibling=T,n.child=r,so(null,r),r=n.child,T=e.child.memoizedState,T===null?T=qu(a):(c=T.cachePool,c!==null?(G=ln._currentValue,c=c.parent!==G?{parent:G,pool:G}:c):c=bp(),T={baseLanes:T.baseLanes|a,cachePool:c}),r.memoizedState=T,r.childLanes=Wu(e,v,a),n.memoizedState=ju,so(e.child,r)):(Ta(n),a=e.child,e=a.sibling,a=Vi(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,e!==null&&(v=n.deletions,v===null?(n.deletions=[e],n.flags|=16):v.push(e)),n.child=a,n.memoizedState=null,a)}function Yu(e,n){return n=Tl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Tl(e,n){return e=Yn(22,e,null,n),e.lanes=0,e}function Zu(e,n,a){return fs(n,e.child,null,a),e=Yu(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function z0(e,n,a){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),uu(e.return,n,a)}function Ku(e,n,a,r,c,f){var v=e.memoizedState;v===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:c,treeForkCount:f}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=r,v.tail=a,v.tailMode=c,v.treeForkCount=f)}function P0(e,n,a){var r=n.pendingProps,c=r.revealOrder,f=r.tail;r=r.children;var v=nn.current,T=(v&2)!==0;if(T?(v=v&1|2,n.flags|=128):v&=1,me(nn,v),An(e,n,r,a),r=Mt?qr:0,!T&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&z0(e,a,n);else if(e.tag===19)z0(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&hl(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Ku(n,!1,c,a,f,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&hl(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}Ku(n,!0,a,null,f,r);break;case"together":Ku(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function Wi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),wa|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Bs(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Vi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Vi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Qu(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&sl(e)))}function ov(e,n,a){switch(n.tag){case 3:De(n,n.stateNode.containerInfo),ya(n,ln,e.memoizedState.cache),ss();break;case 27:case 5:ke(n);break;case 4:De(n,n.stateNode.containerInfo);break;case 10:ya(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,bu(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(Ta(n),n.flags|=128,null):(a&n.child.childLanes)!==0?O0(e,n,a):(Ta(n),e=Wi(e,n,a),e!==null?e.sibling:null);Ta(n);break;case 19:var c=(e.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(Bs(e,n,a,!1),r=(a&n.childLanes)!==0),c){if(r)return P0(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),me(nn,nn.current),r)break;return null;case 22:return n.lanes=0,C0(e,n,a,n.pendingProps);case 24:ya(n,ln,e.memoizedState.cache)}return Wi(e,n,a)}function I0(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)un=!0;else{if(!Qu(e,a)&&(n.flags&128)===0)return un=!1,ov(e,n,a);un=(e.flags&131072)!==0}else un=!1,Mt&&(n.flags&1048576)!==0&&mp(n,qr,n.index);switch(n.lanes=0,n.tag){case 16:e:{var r=n.pendingProps;if(e=cs(n.elementType),n.type=e,typeof e=="function")nu(e)?(r=hs(e,r),n.tag=1,n=U0(null,n,e,r,a)):(n.tag=0,n=Xu(null,n,e,r,a));else{if(e!=null){var c=e.$$typeof;if(c===F){n.tag=11,n=T0(null,n,e,r,a);break e}else if(c===B){n.tag=14,n=A0(null,n,e,r,a);break e}}throw n=Y(e)||e,Error(s(306,n,""))}}return n;case 0:return Xu(e,n,n.type,n.pendingProps,a);case 1:return r=n.type,c=hs(r,n.pendingProps),U0(e,n,r,c,a);case 3:e:{if(De(n,n.stateNode.containerInfo),e===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;c=f.element,gu(e,n),eo(n,r,null,a);var v=n.memoizedState;if(r=v.cache,ya(n,ln,r),r!==f.cache&&fu(n,[ln],a,!0),$r(),r=v.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=L0(e,n,r,a);break e}else if(r!==c){c=ri(Error(s(424)),n),Wr(c),n=L0(e,n,r,a);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Kt=fi(e.firstChild),En=n,Mt=!0,va=null,ci=!0,a=Cp(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ss(),r===c){n=Wi(e,n,a);break e}An(e,n,r,a)}n=n.child}return n;case 26:return El(e,n),e===null?(a=Ym(n.type,null,n.pendingProps,null))?n.memoizedState=a:Mt||(a=n.type,e=n.pendingProps,r=Vl(ie.current).createElement(a),r[on]=n,r[hn]=e,Rn(r,a,e),oe(r),n.stateNode=r):n.memoizedState=Ym(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return ke(n),e===null&&Mt&&(r=n.stateNode=jm(n.type,n.pendingProps,ie.current),En=n,ci=!0,c=Kt,Oa(n.type)?(Nf=c,Kt=fi(r.firstChild)):Kt=c),An(e,n,n.pendingProps.children,a),El(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Mt&&((c=r=Kt)&&(r=Iv(r,n.type,n.pendingProps,ci),r!==null?(n.stateNode=r,En=n,Kt=fi(r.firstChild),ci=!1,c=!0):c=!1),c||Sa(n)),ke(n),c=n.type,f=n.pendingProps,v=e!==null?e.memoizedProps:null,r=f.children,Af(c,f)?r=null:v!==null&&Af(c,v)&&(n.flags|=32),n.memoizedState!==null&&(c=Eu(e,n,J_,null,null,a),yo._currentValue=c),El(e,n),An(e,n,r,a),n.child;case 6:return e===null&&Mt&&((e=a=Kt)&&(a=Fv(a,n.pendingProps,ci),a!==null?(n.stateNode=a,En=n,Kt=null,e=!0):e=!1),e||Sa(n)),null;case 13:return O0(e,n,a);case 4:return De(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=fs(n,null,r,a):An(e,n,r,a),n.child;case 11:return T0(e,n,n.type,n.pendingProps,a);case 7:return An(e,n,n.pendingProps,a),n.child;case 8:return An(e,n,n.pendingProps.children,a),n.child;case 12:return An(e,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,ya(n,n.type,r.value),An(e,n,r.children,a),n.child;case 9:return c=n.type._context,r=n.pendingProps.children,os(n),c=Tn(c),r=r(c),n.flags|=1,An(e,n,r,a),n.child;case 14:return A0(e,n,n.type,n.pendingProps,a);case 15:return R0(e,n,n.type,n.pendingProps,a);case 19:return P0(e,n,a);case 31:return rv(e,n,a);case 22:return C0(e,n,a,n.pendingProps);case 24:return os(n),r=Tn(ln),e===null?(c=pu(),c===null&&(c=qt,f=du(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:r,cache:c},xu(n),ya(n,ln,c)):((e.lanes&a)!==0&&(gu(e,n),eo(n,null,null,a),$r()),c=e.memoizedState,f=n.memoizedState,c.parent!==r?(c={parent:r,cache:r},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),ya(n,ln,r)):(r=f.cache,ya(n,ln,r),r!==c.cache&&fu(n,[ln],a,!0))),An(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Yi(e){e.flags|=4}function Ju(e,n,a,r,c){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(um())e.flags|=8192;else throw us=cl,mu}else e.flags&=-16777217}function F0(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!$m(n))if(um())e.flags|=8192;else throw us=cl,mu}function Al(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Bt():536870912,e.lanes|=n,Qs|=n)}function ro(e,n){if(!Mt)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Qt(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags&65011712,r|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags,r|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=r,e.childLanes=a,n}function lv(e,n,a){var r=n.pendingProps;switch(ru(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qt(n),null;case 1:return Qt(n),null;case 3:return a=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Xi(ln),Be(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Fs(n)?Yi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,lu())),Qt(n),null;case 26:var c=n.type,f=n.memoizedState;return e===null?(Yi(n),f!==null?(Qt(n),F0(n,f)):(Qt(n),Ju(n,c,null,r,a))):f?f!==e.memoizedState?(Yi(n),Qt(n),F0(n,f)):(Qt(n),n.flags&=-16777217):(e=e.memoizedProps,e!==r&&Yi(n),Qt(n),Ju(n,c,e,r,a)),null;case 27:if(rt(n),a=ie.current,c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Yi(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Qt(n),null}e=ye.current,Fs(n)?gp(n):(e=jm(c,r,a),n.stateNode=e,Yi(n))}return Qt(n),null;case 5:if(rt(n),c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Yi(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Qt(n),null}if(f=ye.current,Fs(n))gp(n);else{var v=Vl(ie.current);switch(f){case 1:f=v.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=v.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=v.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=v.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=v.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?v.createElement("select",{is:r.is}):v.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?v.createElement(c,{is:r.is}):v.createElement(c)}}f[on]=n,f[hn]=r;e:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)f.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break e;for(;v.sibling===null;){if(v.return===null||v.return===n)break e;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=f;e:switch(Rn(f,c,r),c){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&Yi(n)}}return Qt(n),Ju(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&Yi(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(e=ie.current,Fs(n)){if(e=n.stateNode,a=n.memoizedProps,r=null,c=En,c!==null)switch(c.tag){case 27:case 5:r=c.memoizedProps}e[on]=n,e=!!(e.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||Om(e.nodeValue,a)),e||Sa(n,!0)}else e=Vl(e).createTextNode(r),e[on]=n,n.stateNode=e}return Qt(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(r=Fs(n),a!==null){if(e===null){if(!r)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[on]=n}else ss(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qt(n),e=!1}else a=lu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(Kn(n),n):(Kn(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Qt(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Fs(n),r!==null&&r.dehydrated!==null){if(e===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[on]=n}else ss(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qt(n),c=!1}else c=lu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Kn(n),n):(Kn(n),null)}return Kn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,e=e!==null&&e.memoizedState!==null,a&&(r=n.child,c=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(c=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==c&&(r.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Al(n,n.updateQueue),Qt(n),null);case 4:return Be(),e===null&&yf(n.stateNode.containerInfo),Qt(n),null;case 10:return Xi(n.type),Qt(n),null;case 19:if(Z(nn),r=n.memoizedState,r===null)return Qt(n),null;if(c=(n.flags&128)!==0,f=r.rendering,f===null)if(c)ro(r,!1);else{if(en!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=hl(e),f!==null){for(n.flags|=128,ro(r,!1),e=f.updateQueue,n.updateQueue=e,Al(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)dp(a,e),a=a.sibling;return me(nn,nn.current&1|2),Mt&&Gi(n,r.treeForkCount),n.child}e=e.sibling}r.tail!==null&&M()>Nl&&(n.flags|=128,c=!0,ro(r,!1),n.lanes=4194304)}else{if(!c)if(e=hl(f),e!==null){if(n.flags|=128,c=!0,e=e.updateQueue,n.updateQueue=e,Al(n,e),ro(r,!0),r.tail===null&&r.tailMode==="hidden"&&!f.alternate&&!Mt)return Qt(n),null}else 2*M()-r.renderingStartTime>Nl&&a!==536870912&&(n.flags|=128,c=!0,ro(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(e=r.last,e!==null?e.sibling=f:n.child=f,r.last=f)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=M(),e.sibling=null,a=nn.current,me(nn,c?a&1|2:a&1),Mt&&Gi(n,r.treeForkCount),e):(Qt(n),null);case 22:case 23:return Kn(n),yu(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(Qt(n),n.subtreeFlags&6&&(n.flags|=8192)):Qt(n),a=n.updateQueue,a!==null&&Al(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),e!==null&&Z(ls),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Xi(ln),Qt(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function cv(e,n){switch(ru(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Xi(ln),Be(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return rt(n),null;case 31:if(n.memoizedState!==null){if(Kn(n),n.alternate===null)throw Error(s(340));ss()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Kn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));ss()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Z(nn),null;case 4:return Be(),null;case 10:return Xi(n.type),null;case 22:case 23:return Kn(n),yu(),e!==null&&Z(ls),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Xi(ln),null;case 25:return null;default:return null}}function B0(e,n){switch(ru(n),n.tag){case 3:Xi(ln),Be();break;case 26:case 27:case 5:rt(n);break;case 4:Be();break;case 31:n.memoizedState!==null&&Kn(n);break;case 13:Kn(n);break;case 19:Z(nn);break;case 10:Xi(n.type);break;case 22:case 23:Kn(n),yu(),e!==null&&Z(ls);break;case 24:Xi(ln)}}function oo(e,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var c=r.next;a=c;do{if((a.tag&e)===e){r=void 0;var f=a.create,v=a.inst;r=f(),v.destroy=r}a=a.next}while(a!==c)}}catch(T){Ft(n,n.return,T)}}function Ra(e,n,a){try{var r=n.updateQueue,c=r!==null?r.lastEffect:null;if(c!==null){var f=c.next;r=f;do{if((r.tag&e)===e){var v=r.inst,T=v.destroy;if(T!==void 0){v.destroy=void 0,c=n;var G=a,re=T;try{re()}catch(xe){Ft(c,G,xe)}}}r=r.next}while(r!==f)}}catch(xe){Ft(n,n.return,xe)}}function H0(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Dp(n,a)}catch(r){Ft(e,e.return,r)}}}function V0(e,n,a){a.props=hs(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(r){Ft(e,n,r)}}function lo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof a=="function"?e.refCleanup=a(r):a.current=r}}catch(c){Ft(e,n,c)}}function Ci(e,n){var a=e.ref,r=e.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(c){Ft(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Ft(e,n,c)}else a.current=null}function G0(e){var n=e.type,a=e.memoizedProps,r=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break e;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(c){Ft(e,e.return,c)}}function $u(e,n,a){try{var r=e.stateNode;Nv(r,e.type,a,n),r[hn]=n}catch(c){Ft(e,e.return,c)}}function k0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Oa(e.type)||e.tag===4}function ef(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||k0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Oa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function tf(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Bi));else if(r!==4&&(r===27&&Oa(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(tf(e,n,a),e=e.sibling;e!==null;)tf(e,n,a),e=e.sibling}function Rl(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(r!==4&&(r===27&&Oa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Rl(e,n,a),e=e.sibling;e!==null;)Rl(e,n,a),e=e.sibling}function X0(e){var n=e.stateNode,a=e.memoizedProps;try{for(var r=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Rn(n,r,a),n[on]=e,n[hn]=a}catch(f){Ft(e,e.return,f)}}var Zi=!1,fn=!1,nf=!1,j0=typeof WeakSet=="function"?WeakSet:Set,yn=null;function uv(e,n){if(e=e.containerInfo,Ef=Yl,e=ip(e),Zc(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var c=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var v=0,T=-1,G=-1,re=0,xe=0,ve=e,ce=null;t:for(;;){for(var fe;ve!==a||c!==0&&ve.nodeType!==3||(T=v+c),ve!==f||r!==0&&ve.nodeType!==3||(G=v+r),ve.nodeType===3&&(v+=ve.nodeValue.length),(fe=ve.firstChild)!==null;)ce=ve,ve=fe;for(;;){if(ve===e)break t;if(ce===a&&++re===c&&(T=v),ce===f&&++xe===r&&(G=v),(fe=ve.nextSibling)!==null)break;ve=ce,ce=ve.parentNode}ve=fe}a=T===-1||G===-1?null:{start:T,end:G}}else a=null}a=a||{start:0,end:0}}else a=null;for(Tf={focusedElem:e,selectionRange:a},Yl=!1,yn=n;yn!==null;)if(n=yn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,yn=e;else for(;yn!==null;){switch(n=yn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)c=e[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var He=hs(a.type,c);e=r.getSnapshotBeforeUpdate(He,f),r.__reactInternalSnapshotBeforeUpdate=e}catch(et){Ft(a,a.return,et)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Cf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Cf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,yn=e;break}yn=n.return}}function q0(e,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:Qi(e,a),r&4&&oo(5,a);break;case 1:if(Qi(e,a),r&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(v){Ft(a,a.return,v)}else{var c=hs(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(v){Ft(a,a.return,v)}}r&64&&H0(a),r&512&&lo(a,a.return);break;case 3:if(Qi(e,a),r&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Dp(e,n)}catch(v){Ft(a,a.return,v)}}break;case 27:n===null&&r&4&&X0(a);case 26:case 5:Qi(e,a),n===null&&r&4&&G0(a),r&512&&lo(a,a.return);break;case 12:Qi(e,a);break;case 31:Qi(e,a),r&4&&Z0(e,a);break;case 13:Qi(e,a),r&4&&K0(e,a),r&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=vv.bind(null,a),Bv(e,a))));break;case 22:if(r=a.memoizedState!==null||Zi,!r){n=n!==null&&n.memoizedState!==null||fn,c=Zi;var f=fn;Zi=r,(fn=n)&&!f?Ji(e,a,(a.subtreeFlags&8772)!==0):Qi(e,a),Zi=c,fn=f}break;case 30:break;default:Qi(e,a)}}function W0(e){var n=e.alternate;n!==null&&(e.alternate=null,W0(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Pr(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Jt=null,Fn=!1;function Ki(e,n,a){for(a=a.child;a!==null;)Y0(e,n,a),a=a.sibling}function Y0(e,n,a){if(Te&&typeof Te.onCommitFiberUnmount=="function")try{Te.onCommitFiberUnmount(Me,a)}catch{}switch(a.tag){case 26:fn||Ci(a,n),Ki(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:fn||Ci(a,n);var r=Jt,c=Fn;Oa(a.type)&&(Jt=a.stateNode,Fn=!1),Ki(e,n,a),_o(a.stateNode),Jt=r,Fn=c;break;case 5:fn||Ci(a,n);case 6:if(r=Jt,c=Fn,Jt=null,Ki(e,n,a),Jt=r,Fn=c,Jt!==null)if(Fn)try{(Jt.nodeType===9?Jt.body:Jt.nodeName==="HTML"?Jt.ownerDocument.body:Jt).removeChild(a.stateNode)}catch(f){Ft(a,n,f)}else try{Jt.removeChild(a.stateNode)}catch(f){Ft(a,n,f)}break;case 18:Jt!==null&&(Fn?(e=Jt,Hm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),sr(e)):Hm(Jt,a.stateNode));break;case 4:r=Jt,c=Fn,Jt=a.stateNode.containerInfo,Fn=!0,Ki(e,n,a),Jt=r,Fn=c;break;case 0:case 11:case 14:case 15:Ra(2,a,n),fn||Ra(4,a,n),Ki(e,n,a);break;case 1:fn||(Ci(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&V0(a,n,r)),Ki(e,n,a);break;case 21:Ki(e,n,a);break;case 22:fn=(r=fn)||a.memoizedState!==null,Ki(e,n,a),fn=r;break;default:Ki(e,n,a)}}function Z0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{sr(e)}catch(a){Ft(n,n.return,a)}}}function K0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{sr(e)}catch(a){Ft(n,n.return,a)}}function fv(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new j0),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new j0),n;default:throw Error(s(435,e.tag))}}function Cl(e,n){var a=fv(e);n.forEach(function(r){if(!a.has(r)){a.add(r);var c=Sv.bind(null,e,r);r.then(c,c)}})}function Bn(e,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r],f=e,v=n,T=v;e:for(;T!==null;){switch(T.tag){case 27:if(Oa(T.type)){Jt=T.stateNode,Fn=!1;break e}break;case 5:Jt=T.stateNode,Fn=!1;break e;case 3:case 4:Jt=T.stateNode.containerInfo,Fn=!0;break e}T=T.return}if(Jt===null)throw Error(s(160));Y0(f,v,c),Jt=null,Fn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Q0(n,e),n=n.sibling}var _i=null;function Q0(e,n){var a=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Bn(n,e),Hn(e),r&4&&(Ra(3,e,e.return),oo(3,e),Ra(5,e,e.return));break;case 1:Bn(n,e),Hn(e),r&512&&(fn||a===null||Ci(a,a.return)),r&64&&Zi&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var c=_i;if(Bn(n,e),Hn(e),r&512&&(fn||a===null||Ci(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=e.memoizedState,a===null)if(r===null)if(e.stateNode===null){e:{r=e.type,a=e.memoizedProps,c=c.ownerDocument||c;t:switch(r){case"title":f=c.getElementsByTagName("title")[0],(!f||f[$a]||f[on]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(r),c.head.insertBefore(f,c.querySelector("head > title"))),Rn(f,r,a),f[on]=e,oe(f),r=f;break e;case"link":var v=Qm("link","href",c).get(r+(a.href||""));if(v){for(var T=0;T<v.length;T++)if(f=v[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(T,1);break t}}f=c.createElement(r),Rn(f,r,a),c.head.appendChild(f);break;case"meta":if(v=Qm("meta","content",c).get(r+(a.content||""))){for(T=0;T<v.length;T++)if(f=v[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(T,1);break t}}f=c.createElement(r),Rn(f,r,a),c.head.appendChild(f);break;default:throw Error(s(468,r))}f[on]=e,oe(f),r=f}e.stateNode=r}else Jm(c,e.type,e.stateNode);else e.stateNode=Km(c,r,e.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?Jm(c,e.type,e.stateNode):Km(c,r,e.memoizedProps)):r===null&&e.stateNode!==null&&$u(e,e.memoizedProps,a.memoizedProps)}break;case 27:Bn(n,e),Hn(e),r&512&&(fn||a===null||Ci(a,a.return)),a!==null&&r&4&&$u(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Bn(n,e),Hn(e),r&512&&(fn||a===null||Ci(a,a.return)),e.flags&32){c=e.stateNode;try{Ti(c,"")}catch(He){Ft(e,e.return,He)}}r&4&&e.stateNode!=null&&(c=e.memoizedProps,$u(e,c,a!==null?a.memoizedProps:c)),r&1024&&(nf=!0);break;case 6:if(Bn(n,e),Hn(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,a=e.stateNode;try{a.nodeValue=r}catch(He){Ft(e,e.return,He)}}break;case 3:if(Xl=null,c=_i,_i=Gl(n.containerInfo),Bn(n,e),_i=c,Hn(e),r&4&&a!==null&&a.memoizedState.isDehydrated)try{sr(n.containerInfo)}catch(He){Ft(e,e.return,He)}nf&&(nf=!1,J0(e));break;case 4:r=_i,_i=Gl(e.stateNode.containerInfo),Bn(n,e),Hn(e),_i=r;break;case 12:Bn(n,e),Hn(e);break;case 31:Bn(n,e),Hn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Cl(e,r)));break;case 13:Bn(n,e),Hn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Dl=M()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Cl(e,r)));break;case 22:c=e.memoizedState!==null;var G=a!==null&&a.memoizedState!==null,re=Zi,xe=fn;if(Zi=re||c,fn=xe||G,Bn(n,e),fn=xe,Zi=re,Hn(e),r&8192)e:for(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||G||Zi||fn||ps(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){G=a=n;try{if(f=G.stateNode,c)v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{T=G.stateNode;var ve=G.memoizedProps.style,ce=ve!=null&&ve.hasOwnProperty("display")?ve.display:null;T.style.display=ce==null||typeof ce=="boolean"?"":(""+ce).trim()}}catch(He){Ft(G,G.return,He)}}}else if(n.tag===6){if(a===null){G=n;try{G.stateNode.nodeValue=c?"":G.memoizedProps}catch(He){Ft(G,G.return,He)}}}else if(n.tag===18){if(a===null){G=n;try{var fe=G.stateNode;c?Vm(fe,!0):Vm(G.stateNode,!1)}catch(He){Ft(G,G.return,He)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=e.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,Cl(e,a))));break;case 19:Bn(n,e),Hn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Cl(e,r)));break;case 30:break;case 21:break;default:Bn(n,e),Hn(e)}}function Hn(e){var n=e.flags;if(n&2){try{for(var a,r=e.return;r!==null;){if(k0(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var c=a.stateNode,f=ef(e);Rl(e,f,c);break;case 5:var v=a.stateNode;a.flags&32&&(Ti(v,""),a.flags&=-33);var T=ef(e);Rl(e,T,v);break;case 3:case 4:var G=a.stateNode.containerInfo,re=ef(e);tf(e,re,G);break;default:throw Error(s(161))}}catch(xe){Ft(e,e.return,xe)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function J0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;J0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Qi(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)q0(e,n.alternate,n),n=n.sibling}function ps(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ra(4,n,n.return),ps(n);break;case 1:Ci(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&V0(n,n.return,a),ps(n);break;case 27:_o(n.stateNode);case 26:case 5:Ci(n,n.return),ps(n);break;case 22:n.memoizedState===null&&ps(n);break;case 30:ps(n);break;default:ps(n)}e=e.sibling}}function Ji(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,c=e,f=n,v=f.flags;switch(f.tag){case 0:case 11:case 15:Ji(c,f,a),oo(4,f);break;case 1:if(Ji(c,f,a),r=f,c=r.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(re){Ft(r,r.return,re)}if(r=f,c=r.updateQueue,c!==null){var T=r.stateNode;try{var G=c.shared.hiddenCallbacks;if(G!==null)for(c.shared.hiddenCallbacks=null,c=0;c<G.length;c++)wp(G[c],T)}catch(re){Ft(r,r.return,re)}}a&&v&64&&H0(f),lo(f,f.return);break;case 27:X0(f);case 26:case 5:Ji(c,f,a),a&&r===null&&v&4&&G0(f),lo(f,f.return);break;case 12:Ji(c,f,a);break;case 31:Ji(c,f,a),a&&v&4&&Z0(c,f);break;case 13:Ji(c,f,a),a&&v&4&&K0(c,f);break;case 22:f.memoizedState===null&&Ji(c,f,a),lo(f,f.return);break;case 30:break;default:Ji(c,f,a)}n=n.sibling}}function af(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Yr(a))}function sf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Yr(e))}function vi(e,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)$0(e,n,a,r),n=n.sibling}function $0(e,n,a,r){var c=n.flags;switch(n.tag){case 0:case 11:case 15:vi(e,n,a,r),c&2048&&oo(9,n);break;case 1:vi(e,n,a,r);break;case 3:vi(e,n,a,r),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Yr(e)));break;case 12:if(c&2048){vi(e,n,a,r),e=n.stateNode;try{var f=n.memoizedProps,v=f.id,T=f.onPostCommit;typeof T=="function"&&T(v,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(G){Ft(n,n.return,G)}}else vi(e,n,a,r);break;case 31:vi(e,n,a,r);break;case 13:vi(e,n,a,r);break;case 23:break;case 22:f=n.stateNode,v=n.alternate,n.memoizedState!==null?f._visibility&2?vi(e,n,a,r):co(e,n):f._visibility&2?vi(e,n,a,r):(f._visibility|=2,Ys(e,n,a,r,(n.subtreeFlags&10256)!==0||!1)),c&2048&&af(v,n);break;case 24:vi(e,n,a,r),c&2048&&sf(n.alternate,n);break;default:vi(e,n,a,r)}}function Ys(e,n,a,r,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,v=n,T=a,G=r,re=v.flags;switch(v.tag){case 0:case 11:case 15:Ys(f,v,T,G,c),oo(8,v);break;case 23:break;case 22:var xe=v.stateNode;v.memoizedState!==null?xe._visibility&2?Ys(f,v,T,G,c):co(f,v):(xe._visibility|=2,Ys(f,v,T,G,c)),c&&re&2048&&af(v.alternate,v);break;case 24:Ys(f,v,T,G,c),c&&re&2048&&sf(v.alternate,v);break;default:Ys(f,v,T,G,c)}n=n.sibling}}function co(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,r=n,c=r.flags;switch(r.tag){case 22:co(a,r),c&2048&&af(r.alternate,r);break;case 24:co(a,r),c&2048&&sf(r.alternate,r);break;default:co(a,r)}n=n.sibling}}var uo=8192;function Zs(e,n,a){if(e.subtreeFlags&uo)for(e=e.child;e!==null;)em(e,n,a),e=e.sibling}function em(e,n,a){switch(e.tag){case 26:Zs(e,n,a),e.flags&uo&&e.memoizedState!==null&&Qv(a,_i,e.memoizedState,e.memoizedProps);break;case 5:Zs(e,n,a);break;case 3:case 4:var r=_i;_i=Gl(e.stateNode.containerInfo),Zs(e,n,a),_i=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=uo,uo=16777216,Zs(e,n,a),uo=r):Zs(e,n,a));break;default:Zs(e,n,a)}}function tm(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function fo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];yn=r,im(r,e)}tm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)nm(e),e=e.sibling}function nm(e){switch(e.tag){case 0:case 11:case 15:fo(e),e.flags&2048&&Ra(9,e,e.return);break;case 3:fo(e);break;case 12:fo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,wl(e)):fo(e);break;default:fo(e)}}function wl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];yn=r,im(r,e)}tm(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ra(8,n,n.return),wl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,wl(n));break;default:wl(n)}e=e.sibling}}function im(e,n){for(;yn!==null;){var a=yn;switch(a.tag){case 0:case 11:case 15:Ra(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Yr(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,yn=r;else e:for(a=e;yn!==null;){r=yn;var c=r.sibling,f=r.return;if(W0(r),r===a){yn=null;break e}if(c!==null){c.return=f,yn=c;break e}yn=f}}}var dv={getCacheForType:function(e){var n=Tn(ln),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Tn(ln).controller.signal}},hv=typeof WeakMap=="function"?WeakMap:Map,Ot=0,qt=null,xt=null,_t=0,It=0,Qn=null,Ca=!1,Ks=!1,rf=!1,$i=0,en=0,wa=0,ms=0,of=0,Jn=0,Qs=0,ho=null,Vn=null,lf=!1,Dl=0,am=0,Nl=1/0,Ul=null,Da=null,mn=0,Na=null,Js=null,ea=0,cf=0,uf=null,sm=null,po=0,ff=null;function $n(){return(Ot&2)!==0&&_t!==0?_t&-_t:z.T!==null?gf():Or()}function rm(){if(Jn===0)if((_t&536870912)===0||Mt){var e=Ce;Ce<<=1,(Ce&3932160)===0&&(Ce=262144),Jn=e}else Jn=536870912;return e=Zn.current,e!==null&&(e.flags|=32),Jn}function Gn(e,n,a){(e===qt&&(It===2||It===9)||e.cancelPendingCommit!==null)&&($s(e,0),Ua(e,_t,Jn,!1)),Cn(e,a),((Ot&2)===0||e!==qt)&&(e===qt&&((Ot&2)===0&&(ms|=a),en===4&&Ua(e,_t,Jn,!1)),wi(e))}function om(e,n,a){if((Ot&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Ie(e,n),c=r?xv(e,n):hf(e,n,!0),f=r;do{if(c===0){Ks&&!r&&Ua(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!pv(a)){c=hf(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;e:{var T=e;c=ho;var G=T.current.memoizedState.isDehydrated;if(G&&($s(T,v).flags|=256),v=hf(T,v,!1),v!==2){if(rf&&!G){T.errorRecoveryDisabledLanes|=f,ms|=f,c=4;break e}f=Vn,Vn=c,f!==null&&(Vn===null?Vn=f:Vn.push.apply(Vn,f))}c=v}if(f=!1,c!==2)continue}}if(c===1){$s(e,0),Ua(e,n,0,!0);break}e:{switch(r=e,f=c,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ua(r,n,Jn,!Ca);break e;case 2:Vn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=Dl+300-M(),10<c)){if(Ua(r,n,Jn,!Ca),Se(r,0,!0)!==0)break e;ea=n,r.timeoutHandle=Fm(lm.bind(null,r,a,Vn,Ul,lf,n,Jn,ms,Qs,Ca,f,"Throttled",-0,0),c);break e}lm(r,a,Vn,Ul,lf,n,Jn,ms,Qs,Ca,f,null,-0,0)}}break}while(!0);wi(e)}function lm(e,n,a,r,c,f,v,T,G,re,xe,ve,ce,fe){if(e.timeoutHandle=-1,ve=n.subtreeFlags,ve&8192||(ve&16785408)===16785408){ve={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Bi},em(n,f,ve);var He=(f&62914560)===f?Dl-M():(f&4194048)===f?am-M():0;if(He=Jv(ve,He),He!==null){ea=f,e.cancelPendingCommit=He(xm.bind(null,e,n,f,a,r,c,v,T,G,xe,ve,null,ce,fe)),Ua(e,f,v,!re);return}}xm(e,n,f,a,r,c,v,T,G)}function pv(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var c=a[r],f=c.getSnapshot;c=c.value;try{if(!Wn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ua(e,n,a,r){n&=~of,n&=~ms,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var c=n;0<c;){var f=31-Ge(c),v=1<<f;r[f]=-1,c&=~v}a!==0&&Xo(e,a,n)}function Ll(){return(Ot&6)===0?(mo(0),!1):!0}function df(){if(xt!==null){if(It===0)var e=xt.return;else e=xt,ki=rs=null,Ru(e),ks=null,Kr=0,e=xt;for(;e!==null;)B0(e.alternate,e),e=e.return;xt=null}}function $s(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Ov(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ea=0,df(),qt=e,xt=a=Vi(e.current,null),_t=n,It=0,Qn=null,Ca=!1,Ks=Ie(e,n),rf=!1,Qs=Jn=of=ms=wa=en=0,Vn=ho=null,lf=!1,(n&8)!==0&&(n|=n&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=n;0<r;){var c=31-Ge(r),f=1<<c;n|=e[c],r&=~f}return $i=n,el(),a}function cm(e,n){ot=null,z.H=ao,n===Gs||n===ll?(n=Tp(),It=3):n===mu?(n=Tp(),It=4):It=n===ku?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Qn=n,xt===null&&(en=1,bl(e,ri(n,e.current)))}function um(){var e=Zn.current;return e===null?!0:(_t&4194048)===_t?ui===null:(_t&62914560)===_t||(_t&536870912)!==0?e===ui:!1}function fm(){var e=z.H;return z.H=ao,e===null?ao:e}function dm(){var e=z.A;return z.A=dv,e}function Ol(){en=4,Ca||(_t&4194048)!==_t&&Zn.current!==null||(Ks=!0),(wa&134217727)===0&&(ms&134217727)===0||qt===null||Ua(qt,_t,Jn,!1)}function hf(e,n,a){var r=Ot;Ot|=2;var c=fm(),f=dm();(qt!==e||_t!==n)&&(Ul=null,$s(e,n)),n=!1;var v=en;e:do try{if(It!==0&&xt!==null){var T=xt,G=Qn;switch(It){case 8:df(),v=6;break e;case 3:case 2:case 9:case 6:Zn.current===null&&(n=!0);var re=It;if(It=0,Qn=null,er(e,T,G,re),a&&Ks){v=0;break e}break;default:re=It,It=0,Qn=null,er(e,T,G,re)}}mv(),v=en;break}catch(xe){cm(e,xe)}while(!0);return n&&e.shellSuspendCounter++,ki=rs=null,Ot=r,z.H=c,z.A=f,xt===null&&(qt=null,_t=0,el()),v}function mv(){for(;xt!==null;)hm(xt)}function xv(e,n){var a=Ot;Ot|=2;var r=fm(),c=dm();qt!==e||_t!==n?(Ul=null,Nl=M()+500,$s(e,n)):Ks=Ie(e,n);e:do try{if(It!==0&&xt!==null){n=xt;var f=Qn;t:switch(It){case 1:It=0,Qn=null,er(e,n,f,1);break;case 2:case 9:if(Mp(f)){It=0,Qn=null,pm(n);break}n=function(){It!==2&&It!==9||qt!==e||(It=7),wi(e)},f.then(n,n);break e;case 3:It=7;break e;case 4:It=5;break e;case 7:Mp(f)?(It=0,Qn=null,pm(n)):(It=0,Qn=null,er(e,n,f,7));break;case 5:var v=null;switch(xt.tag){case 26:v=xt.memoizedState;case 5:case 27:var T=xt;if(v?$m(v):T.stateNode.complete){It=0,Qn=null;var G=T.sibling;if(G!==null)xt=G;else{var re=T.return;re!==null?(xt=re,zl(re)):xt=null}break t}}It=0,Qn=null,er(e,n,f,5);break;case 6:It=0,Qn=null,er(e,n,f,6);break;case 8:df(),en=6;break e;default:throw Error(s(462))}}gv();break}catch(xe){cm(e,xe)}while(!0);return ki=rs=null,z.H=r,z.A=c,Ot=a,xt!==null?0:(qt=null,_t=0,el(),en)}function gv(){for(;xt!==null&&!at();)hm(xt)}function hm(e){var n=I0(e.alternate,e,$i);e.memoizedProps=e.pendingProps,n===null?zl(e):xt=n}function pm(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=N0(a,n,n.pendingProps,n.type,void 0,_t);break;case 11:n=N0(a,n,n.pendingProps,n.type.render,n.ref,_t);break;case 5:Ru(n);default:B0(a,n),n=xt=dp(n,$i),n=I0(a,n,$i)}e.memoizedProps=e.pendingProps,n===null?zl(e):xt=n}function er(e,n,a,r){ki=rs=null,Ru(n),ks=null,Kr=0;var c=n.return;try{if(sv(e,c,n,a,_t)){en=1,bl(e,ri(a,e.current)),xt=null;return}}catch(f){if(c!==null)throw xt=c,f;en=1,bl(e,ri(a,e.current)),xt=null;return}n.flags&32768?(Mt||r===1?e=!0:Ks||(_t&536870912)!==0?e=!1:(Ca=e=!0,(r===2||r===9||r===3||r===6)&&(r=Zn.current,r!==null&&r.tag===13&&(r.flags|=16384))),mm(n,e)):zl(n)}function zl(e){var n=e;do{if((n.flags&32768)!==0){mm(n,Ca);return}e=n.return;var a=lv(n.alternate,n,$i);if(a!==null){xt=a;return}if(n=n.sibling,n!==null){xt=n;return}xt=n=e}while(n!==null);en===0&&(en=5)}function mm(e,n){do{var a=cv(e.alternate,e);if(a!==null){a.flags&=32767,xt=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){xt=e;return}xt=e=a}while(e!==null);en=6,xt=null}function xm(e,n,a,r,c,f,v,T,G){e.cancelPendingCommit=null;do Pl();while(mn!==0);if((Ot&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=eu,jn(e,a,f,v,T,G),e===qt&&(xt=qt=null,_t=0),Js=n,Na=e,ea=a,cf=f,uf=c,sm=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,yv(pe,function(){return ym(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=z.T,z.T=null,c=W.p,W.p=2,v=Ot,Ot|=4;try{uv(e,n,a)}finally{Ot=v,W.p=c,z.T=r}}mn=1,gm(),_m(),vm()}}function gm(){if(mn===1){mn=0;var e=Na,n=Js,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var r=W.p;W.p=2;var c=Ot;Ot|=4;try{Q0(n,e);var f=Tf,v=ip(e.containerInfo),T=f.focusedElem,G=f.selectionRange;if(v!==T&&T&&T.ownerDocument&&np(T.ownerDocument.documentElement,T)){if(G!==null&&Zc(T)){var re=G.start,xe=G.end;if(xe===void 0&&(xe=re),"selectionStart"in T)T.selectionStart=re,T.selectionEnd=Math.min(xe,T.value.length);else{var ve=T.ownerDocument||document,ce=ve&&ve.defaultView||window;if(ce.getSelection){var fe=ce.getSelection(),He=T.textContent.length,et=Math.min(G.start,He),Gt=G.end===void 0?et:Math.min(G.end,He);!fe.extend&&et>Gt&&(v=Gt,Gt=et,et=v);var J=tp(T,et),q=tp(T,Gt);if(J&&q&&(fe.rangeCount!==1||fe.anchorNode!==J.node||fe.anchorOffset!==J.offset||fe.focusNode!==q.node||fe.focusOffset!==q.offset)){var ae=ve.createRange();ae.setStart(J.node,J.offset),fe.removeAllRanges(),et>Gt?(fe.addRange(ae),fe.extend(q.node,q.offset)):(ae.setEnd(q.node,q.offset),fe.addRange(ae))}}}}for(ve=[],fe=T;fe=fe.parentNode;)fe.nodeType===1&&ve.push({element:fe,left:fe.scrollLeft,top:fe.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<ve.length;T++){var ge=ve[T];ge.element.scrollLeft=ge.left,ge.element.scrollTop=ge.top}}Yl=!!Ef,Tf=Ef=null}finally{Ot=c,W.p=r,z.T=a}}e.current=n,mn=2}}function _m(){if(mn===2){mn=0;var e=Na,n=Js,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var r=W.p;W.p=2;var c=Ot;Ot|=4;try{q0(e,n.alternate,n)}finally{Ot=c,W.p=r,z.T=a}}mn=3}}function vm(){if(mn===4||mn===3){mn=0,P();var e=Na,n=Js,a=ea,r=sm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?mn=5:(mn=0,Js=Na=null,Sm(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(Da=null),Ja(a),n=n.stateNode,Te&&typeof Te.onCommitFiberRoot=="function")try{Te.onCommitFiberRoot(Me,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=z.T,c=W.p,W.p=2,z.T=null;try{for(var f=e.onRecoverableError,v=0;v<r.length;v++){var T=r[v];f(T.value,{componentStack:T.stack})}}finally{z.T=n,W.p=c}}(ea&3)!==0&&Pl(),wi(e),c=e.pendingLanes,(a&261930)!==0&&(c&42)!==0?e===ff?po++:(po=0,ff=e):po=0,mo(0)}}function Sm(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Yr(n)))}function Pl(){return gm(),_m(),vm(),ym()}function ym(){if(mn!==5)return!1;var e=Na,n=cf;cf=0;var a=Ja(ea),r=z.T,c=W.p;try{W.p=32>a?32:a,z.T=null,a=uf,uf=null;var f=Na,v=ea;if(mn=0,Js=Na=null,ea=0,(Ot&6)!==0)throw Error(s(331));var T=Ot;if(Ot|=4,nm(f.current),$0(f,f.current,v,a),Ot=T,mo(0,!1),Te&&typeof Te.onPostCommitFiberRoot=="function")try{Te.onPostCommitFiberRoot(Me,f)}catch{}return!0}finally{W.p=c,z.T=r,Sm(e,n)}}function bm(e,n,a){n=ri(a,n),n=Gu(e.stateNode,n,2),e=Ea(e,n,2),e!==null&&(Cn(e,2),wi(e))}function Ft(e,n,a){if(e.tag===3)bm(e,e,a);else for(;n!==null;){if(n.tag===3){bm(n,e,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Da===null||!Da.has(r))){e=ri(a,e),a=M0(2),r=Ea(n,a,2),r!==null&&(E0(a,r,n,e),Cn(r,2),wi(r));break}}n=n.return}}function pf(e,n,a){var r=e.pingCache;if(r===null){r=e.pingCache=new hv;var c=new Set;r.set(n,c)}else c=r.get(n),c===void 0&&(c=new Set,r.set(n,c));c.has(a)||(rf=!0,c.add(a),e=_v.bind(null,e,n,a),n.then(e,e))}function _v(e,n,a){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,qt===e&&(_t&a)===a&&(en===4||en===3&&(_t&62914560)===_t&&300>M()-Dl?(Ot&2)===0&&$s(e,0):of|=a,Qs===_t&&(Qs=0)),wi(e)}function Mm(e,n){n===0&&(n=Bt()),e=is(e,n),e!==null&&(Cn(e,n),wi(e))}function vv(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Mm(e,a)}function Sv(e,n){var a=0;switch(e.tag){case 31:case 13:var r=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),Mm(e,a)}function yv(e,n){return Xt(e,n)}var Il=null,tr=null,mf=!1,Fl=!1,xf=!1,La=0;function wi(e){e!==tr&&e.next===null&&(tr===null?Il=tr=e:tr=tr.next=e),Fl=!0,mf||(mf=!0,Mv())}function mo(e,n){if(!xf&&Fl){xf=!0;do for(var a=!1,r=Il;r!==null;){if(e!==0){var c=r.pendingLanes;if(c===0)var f=0;else{var v=r.suspendedLanes,T=r.pingedLanes;f=(1<<31-Ge(42|e)+1)-1,f&=c&~(v&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Rm(r,f))}else f=_t,f=Se(r,r===qt?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||Ie(r,f)||(a=!0,Rm(r,f));r=r.next}while(a);xf=!1}}function bv(){Em()}function Em(){Fl=mf=!1;var e=0;La!==0&&Lv()&&(e=La);for(var n=M(),a=null,r=Il;r!==null;){var c=r.next,f=Tm(r,n);f===0?(r.next=null,a===null?Il=c:a.next=c,c===null&&(tr=a)):(a=r,(e!==0||(f&3)!==0)&&(Fl=!0)),r=c}mn!==0&&mn!==5||mo(e),La!==0&&(La=0)}function Tm(e,n){for(var a=e.suspendedLanes,r=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var v=31-Ge(f),T=1<<v,G=c[v];G===-1?((T&a)===0||(T&r)!==0)&&(c[v]=it(T,n)):G<=n&&(e.expiredLanes|=T),f&=~T}if(n=qt,a=_t,a=Se(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,a===0||e===n&&(It===2||It===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Ye(r),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ie(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(r!==null&&Ye(r),Ja(a)){case 2:case 8:a=be;break;case 32:a=pe;break;case 268435456:a=Le;break;default:a=pe}return r=Am.bind(null,e),a=Xt(a,r),e.callbackPriority=n,e.callbackNode=a,n}return r!==null&&r!==null&&Ye(r),e.callbackPriority=2,e.callbackNode=null,2}function Am(e,n){if(mn!==0&&mn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Pl()&&e.callbackNode!==a)return null;var r=_t;return r=Se(e,e===qt?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(om(e,r,n),Tm(e,M()),e.callbackNode!=null&&e.callbackNode===a?Am.bind(null,e):null)}function Rm(e,n){if(Pl())return null;om(e,n,!0)}function Mv(){zv(function(){(Ot&6)!==0?Xt(_e,bv):Em()})}function gf(){if(La===0){var e=Hs;e===0&&(e=Ne,Ne<<=1,(Ne&261888)===0&&(Ne=256)),La=e}return La}function Cm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:qo(""+e)}function wm(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Ev(e,n,a,r,c){if(n==="submit"&&a&&a.stateNode===c){var f=Cm((c[hn]||null).action),v=r.submitter;v&&(n=(n=v[hn]||null)?Cm(n.formAction):v.getAttribute("formAction"),n!==null&&(f=n,v=null));var T=new Ko("action","action",null,r,c);e.push({event:T,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(La!==0){var G=v?wm(c,v):new FormData(c);Pu(a,{pending:!0,data:G,method:c.method,action:f},null,G)}}else typeof f=="function"&&(T.preventDefault(),G=v?wm(c,v):new FormData(c),Pu(a,{pending:!0,data:G,method:c.method,action:f},f,G))},currentTarget:c}]})}}for(var _f=0;_f<$c.length;_f++){var vf=$c[_f],Tv=vf.toLowerCase(),Av=vf[0].toUpperCase()+vf.slice(1);gi(Tv,"on"+Av)}gi(rp,"onAnimationEnd"),gi(op,"onAnimationIteration"),gi(lp,"onAnimationStart"),gi("dblclick","onDoubleClick"),gi("focusin","onFocus"),gi("focusout","onBlur"),gi(G_,"onTransitionRun"),gi(k_,"onTransitionStart"),gi(X_,"onTransitionCancel"),gi(cp,"onTransitionEnd"),Pe("onMouseEnter",["mouseout","mouseover"]),Pe("onMouseLeave",["mouseout","mouseover"]),Pe("onPointerEnter",["pointerout","pointerover"]),Pe("onPointerLeave",["pointerout","pointerover"]),Ue("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ue("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ue("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ue("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ue("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ue("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Rv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(xo));function Dm(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],c=r.event;r=r.listeners;e:{var f=void 0;if(n)for(var v=r.length-1;0<=v;v--){var T=r[v],G=T.instance,re=T.currentTarget;if(T=T.listener,G!==f&&c.isPropagationStopped())break e;f=T,c.currentTarget=re;try{f(c)}catch(xe){$o(xe)}c.currentTarget=null,f=G}else for(v=0;v<r.length;v++){if(T=r[v],G=T.instance,re=T.currentTarget,T=T.listener,G!==f&&c.isPropagationStopped())break e;f=T,c.currentTarget=re;try{f(c)}catch(xe){$o(xe)}c.currentTarget=null,f=G}}}}function gt(e,n){var a=n[Cs];a===void 0&&(a=n[Cs]=new Set);var r=e+"__bubble";a.has(r)||(Nm(n,e,2,!1),a.add(r))}function Sf(e,n,a){var r=0;n&&(r|=4),Nm(a,e,r,n)}var Bl="_reactListening"+Math.random().toString(36).slice(2);function yf(e){if(!e[Bl]){e[Bl]=!0,te.forEach(function(a){a!=="selectionchange"&&(Rv.has(a)||Sf(a,!1,e),Sf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Bl]||(n[Bl]=!0,Sf("selectionchange",!1,n))}}function Nm(e,n,a,r){switch(rx(n)){case 2:var c=tS;break;case 8:c=nS;break;default:c=Pf}a=c.bind(null,n,a,e),c=void 0,!Hc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),r?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function bf(e,n,a,r,c){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)e:for(;;){if(r===null)return;var v=r.tag;if(v===3||v===4){var T=r.stateNode.containerInfo;if(T===c)break;if(v===4)for(v=r.return;v!==null;){var G=v.tag;if((G===3||G===4)&&v.stateNode.containerInfo===c)return;v=v.return}for(;T!==null;){if(v=ma(T),v===null)return;if(G=v.tag,G===5||G===6||G===26||G===27){r=f=v;continue e}T=T.parentNode}}r=r.return}Ph(function(){var re=f,xe=Fc(a),ve=[];e:{var ce=up.get(e);if(ce!==void 0){var fe=Ko,He=e;switch(e){case"keypress":if(Yo(a)===0)break e;case"keydown":case"keyup":fe=S_;break;case"focusin":He="focus",fe=Xc;break;case"focusout":He="blur",fe=Xc;break;case"beforeblur":case"afterblur":fe=Xc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":fe=Bh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":fe=l_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":fe=M_;break;case rp:case op:case lp:fe=f_;break;case cp:fe=T_;break;case"scroll":case"scrollend":fe=r_;break;case"wheel":fe=R_;break;case"copy":case"cut":case"paste":fe=h_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":fe=Vh;break;case"toggle":case"beforetoggle":fe=w_}var et=(n&4)!==0,Gt=!et&&(e==="scroll"||e==="scrollend"),J=et?ce!==null?ce+"Capture":null:ce;et=[];for(var q=re,ae;q!==null;){var ge=q;if(ae=ge.stateNode,ge=ge.tag,ge!==5&&ge!==26&&ge!==27||ae===null||J===null||(ge=Ir(q,J),ge!=null&&et.push(go(q,ge,ae))),Gt)break;q=q.return}0<et.length&&(ce=new fe(ce,He,null,a,xe),ve.push({event:ce,listeners:et}))}}if((n&7)===0){e:{if(ce=e==="mouseover"||e==="pointerover",fe=e==="mouseout"||e==="pointerout",ce&&a!==Ic&&(He=a.relatedTarget||a.fromElement)&&(ma(He)||He[Pi]))break e;if((fe||ce)&&(ce=xe.window===xe?xe:(ce=xe.ownerDocument)?ce.defaultView||ce.parentWindow:window,fe?(He=a.relatedTarget||a.toElement,fe=re,He=He?ma(He):null,He!==null&&(Gt=u(He),et=He.tag,He!==Gt||et!==5&&et!==27&&et!==6)&&(He=null)):(fe=null,He=re),fe!==He)){if(et=Bh,ge="onMouseLeave",J="onMouseEnter",q="mouse",(e==="pointerout"||e==="pointerover")&&(et=Vh,ge="onPointerLeave",J="onPointerEnter",q="pointer"),Gt=fe==null?ce:Q(fe),ae=He==null?ce:Q(He),ce=new et(ge,q+"leave",fe,a,xe),ce.target=Gt,ce.relatedTarget=ae,ge=null,ma(xe)===re&&(et=new et(J,q+"enter",He,a,xe),et.target=ae,et.relatedTarget=Gt,ge=et),Gt=ge,fe&&He)t:{for(et=Cv,J=fe,q=He,ae=0,ge=J;ge;ge=et(ge))ae++;ge=0;for(var Ke=q;Ke;Ke=et(Ke))ge++;for(;0<ae-ge;)J=et(J),ae--;for(;0<ge-ae;)q=et(q),ge--;for(;ae--;){if(J===q||q!==null&&J===q.alternate){et=J;break t}J=et(J),q=et(q)}et=null}else et=null;fe!==null&&Um(ve,ce,fe,et,!1),He!==null&&Gt!==null&&Um(ve,Gt,He,et,!0)}}e:{if(ce=re?Q(re):window,fe=ce.nodeName&&ce.nodeName.toLowerCase(),fe==="select"||fe==="input"&&ce.type==="file")var Dt=Zh;else if(Wh(ce))if(Kh)Dt=B_;else{Dt=I_;var Xe=P_}else fe=ce.nodeName,!fe||fe.toLowerCase()!=="input"||ce.type!=="checkbox"&&ce.type!=="radio"?re&&Pc(re.elementType)&&(Dt=Zh):Dt=F_;if(Dt&&(Dt=Dt(e,re))){Yh(ve,Dt,a,xe);break e}Xe&&Xe(e,ce,re),e==="focusout"&&re&&ce.type==="number"&&re.memoizedProps.value!=null&&vn(ce,"number",ce.value)}switch(Xe=re?Q(re):window,e){case"focusin":(Wh(Xe)||Xe.contentEditable==="true")&&(Us=Xe,Kc=re,jr=null);break;case"focusout":jr=Kc=Us=null;break;case"mousedown":Qc=!0;break;case"contextmenu":case"mouseup":case"dragend":Qc=!1,ap(ve,a,xe);break;case"selectionchange":if(V_)break;case"keydown":case"keyup":ap(ve,a,xe)}var ut;if(qc)e:{switch(e){case"compositionstart":var vt="onCompositionStart";break e;case"compositionend":vt="onCompositionEnd";break e;case"compositionupdate":vt="onCompositionUpdate";break e}vt=void 0}else Ns?jh(e,a)&&(vt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(vt="onCompositionStart");vt&&(Gh&&a.locale!=="ko"&&(Ns||vt!=="onCompositionStart"?vt==="onCompositionEnd"&&Ns&&(ut=Ih()):(ga=xe,Vc="value"in ga?ga.value:ga.textContent,Ns=!0)),Xe=Hl(re,vt),0<Xe.length&&(vt=new Hh(vt,e,null,a,xe),ve.push({event:vt,listeners:Xe}),ut?vt.data=ut:(ut=qh(a),ut!==null&&(vt.data=ut)))),(ut=N_?U_(e,a):L_(e,a))&&(vt=Hl(re,"onBeforeInput"),0<vt.length&&(Xe=new Hh("onBeforeInput","beforeinput",null,a,xe),ve.push({event:Xe,listeners:vt}),Xe.data=ut)),Ev(ve,e,re,a,xe)}Dm(ve,n)})}function go(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Hl(e,n){for(var a=n+"Capture",r=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Ir(e,a),c!=null&&r.unshift(go(e,c,f)),c=Ir(e,n),c!=null&&r.push(go(e,c,f))),e.tag===3)return r;e=e.return}return[]}function Cv(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Um(e,n,a,r,c){for(var f=n._reactName,v=[];a!==null&&a!==r;){var T=a,G=T.alternate,re=T.stateNode;if(T=T.tag,G!==null&&G===r)break;T!==5&&T!==26&&T!==27||re===null||(G=re,c?(re=Ir(a,f),re!=null&&v.unshift(go(a,re,G))):c||(re=Ir(a,f),re!=null&&v.push(go(a,re,G)))),a=a.return}v.length!==0&&e.push({event:n,listeners:v})}var wv=/\r\n?/g,Dv=/\u0000|\uFFFD/g;function Lm(e){return(typeof e=="string"?e:""+e).replace(wv,`
`).replace(Dv,"")}function Om(e,n){return n=Lm(n),Lm(e)===n}function Vt(e,n,a,r,c,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||Ti(e,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&Ti(e,""+r);break;case"className":Tt(e,"class",r);break;case"tabIndex":Tt(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Tt(e,a,r);break;case"style":Oh(e,r,f);break;case"data":if(n!=="object"){Tt(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=qo(""+r),e.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Vt(e,n,"name",c.name,c,null),Vt(e,n,"formEncType",c.formEncType,c,null),Vt(e,n,"formMethod",c.formMethod,c,null),Vt(e,n,"formTarget",c.formTarget,c,null)):(Vt(e,n,"encType",c.encType,c,null),Vt(e,n,"method",c.method,c,null),Vt(e,n,"target",c.target,c,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=qo(""+r),e.setAttribute(a,r);break;case"onClick":r!=null&&(e.onclick=Bi);break;case"onScroll":r!=null&&gt("scroll",e);break;case"onScrollEnd":r!=null&&gt("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}a=qo(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""+r):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":r===!0?e.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(a,r):e.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(a):e.setAttribute(a,r);break;case"popover":gt("beforetoggle",e),gt("toggle",e),ct(e,"popover",r);break;case"xlinkActuate":wt(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":wt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":wt(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":wt(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":wt(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":wt(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":wt(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":wt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":wt(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":ct(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=a_.get(a)||a,ct(e,a,r))}}function Mf(e,n,a,r,c,f){switch(a){case"style":Oh(e,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof r=="string"?Ti(e,r):(typeof r=="number"||typeof r=="bigint")&&Ti(e,""+r);break;case"onScroll":r!=null&&gt("scroll",e);break;case"onScrollEnd":r!=null&&gt("scrollend",e);break;case"onClick":r!=null&&(e.onclick=Bi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Re.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=e[hn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,c),typeof r=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,r,c);break e}a in e?e[a]=r:r===!0?e.setAttribute(a,""):ct(e,a,r)}}}function Rn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":gt("error",e),gt("load",e);var r=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var v=a[f];if(v!=null)switch(f){case"src":r=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Vt(e,n,f,v,a,null)}}c&&Vt(e,n,"srcSet",a.srcSet,a,null),r&&Vt(e,n,"src",a.src,a,null);return;case"input":gt("invalid",e);var T=f=v=c=null,G=null,re=null;for(r in a)if(a.hasOwnProperty(r)){var xe=a[r];if(xe!=null)switch(r){case"name":c=xe;break;case"type":v=xe;break;case"checked":G=xe;break;case"defaultChecked":re=xe;break;case"value":f=xe;break;case"defaultValue":T=xe;break;case"children":case"dangerouslySetInnerHTML":if(xe!=null)throw Error(s(137,n));break;default:Vt(e,n,r,xe,a,null)}}Yt(e,f,T,G,re,v,c,!1);return;case"select":gt("invalid",e),r=v=f=null;for(c in a)if(a.hasOwnProperty(c)&&(T=a[c],T!=null))switch(c){case"value":f=T;break;case"defaultValue":v=T;break;case"multiple":r=T;default:Vt(e,n,c,T,a,null)}n=f,a=v,e.multiple=!!r,n!=null?pn(e,!!r,n,!1):a!=null&&pn(e,!!r,a,!0);return;case"textarea":gt("invalid",e),f=c=r=null;for(v in a)if(a.hasOwnProperty(v)&&(T=a[v],T!=null))switch(v){case"value":r=T;break;case"defaultValue":c=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:Vt(e,n,v,T,a,null)}Mn(e,r,c,f);return;case"option":for(G in a)if(a.hasOwnProperty(G)&&(r=a[G],r!=null))switch(G){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Vt(e,n,G,r,a,null)}return;case"dialog":gt("beforetoggle",e),gt("toggle",e),gt("cancel",e),gt("close",e);break;case"iframe":case"object":gt("load",e);break;case"video":case"audio":for(r=0;r<xo.length;r++)gt(xo[r],e);break;case"image":gt("error",e),gt("load",e);break;case"details":gt("toggle",e);break;case"embed":case"source":case"link":gt("error",e),gt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(re in a)if(a.hasOwnProperty(re)&&(r=a[re],r!=null))switch(re){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Vt(e,n,re,r,a,null)}return;default:if(Pc(n)){for(xe in a)a.hasOwnProperty(xe)&&(r=a[xe],r!==void 0&&Mf(e,n,xe,r,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(r=a[T],r!=null&&Vt(e,n,T,r,a,null))}function Nv(e,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,v=null,T=null,G=null,re=null,xe=null;for(fe in a){var ve=a[fe];if(a.hasOwnProperty(fe)&&ve!=null)switch(fe){case"checked":break;case"value":break;case"defaultValue":G=ve;default:r.hasOwnProperty(fe)||Vt(e,n,fe,null,r,ve)}}for(var ce in r){var fe=r[ce];if(ve=a[ce],r.hasOwnProperty(ce)&&(fe!=null||ve!=null))switch(ce){case"type":f=fe;break;case"name":c=fe;break;case"checked":re=fe;break;case"defaultChecked":xe=fe;break;case"value":v=fe;break;case"defaultValue":T=fe;break;case"children":case"dangerouslySetInnerHTML":if(fe!=null)throw Error(s(137,n));break;default:fe!==ve&&Vt(e,n,ce,fe,r,ve)}}Ii(e,v,T,G,re,xe,f,c);return;case"select":fe=v=T=ce=null;for(f in a)if(G=a[f],a.hasOwnProperty(f)&&G!=null)switch(f){case"value":break;case"multiple":fe=G;default:r.hasOwnProperty(f)||Vt(e,n,f,null,r,G)}for(c in r)if(f=r[c],G=a[c],r.hasOwnProperty(c)&&(f!=null||G!=null))switch(c){case"value":ce=f;break;case"defaultValue":T=f;break;case"multiple":v=f;default:f!==G&&Vt(e,n,c,f,r,G)}n=T,a=v,r=fe,ce!=null?pn(e,!!a,ce,!1):!!r!=!!a&&(n!=null?pn(e,!!a,n,!0):pn(e,!!a,a?[]:"",!1));return;case"textarea":fe=ce=null;for(T in a)if(c=a[T],a.hasOwnProperty(T)&&c!=null&&!r.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Vt(e,n,T,null,r,c)}for(v in r)if(c=r[v],f=a[v],r.hasOwnProperty(v)&&(c!=null||f!=null))switch(v){case"value":ce=c;break;case"defaultValue":fe=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==f&&Vt(e,n,v,c,r,f)}Sn(e,ce,fe);return;case"option":for(var He in a)if(ce=a[He],a.hasOwnProperty(He)&&ce!=null&&!r.hasOwnProperty(He))switch(He){case"selected":e.selected=!1;break;default:Vt(e,n,He,null,r,ce)}for(G in r)if(ce=r[G],fe=a[G],r.hasOwnProperty(G)&&ce!==fe&&(ce!=null||fe!=null))switch(G){case"selected":e.selected=ce&&typeof ce!="function"&&typeof ce!="symbol";break;default:Vt(e,n,G,ce,r,fe)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var et in a)ce=a[et],a.hasOwnProperty(et)&&ce!=null&&!r.hasOwnProperty(et)&&Vt(e,n,et,null,r,ce);for(re in r)if(ce=r[re],fe=a[re],r.hasOwnProperty(re)&&ce!==fe&&(ce!=null||fe!=null))switch(re){case"children":case"dangerouslySetInnerHTML":if(ce!=null)throw Error(s(137,n));break;default:Vt(e,n,re,ce,r,fe)}return;default:if(Pc(n)){for(var Gt in a)ce=a[Gt],a.hasOwnProperty(Gt)&&ce!==void 0&&!r.hasOwnProperty(Gt)&&Mf(e,n,Gt,void 0,r,ce);for(xe in r)ce=r[xe],fe=a[xe],!r.hasOwnProperty(xe)||ce===fe||ce===void 0&&fe===void 0||Mf(e,n,xe,ce,r,fe);return}}for(var J in a)ce=a[J],a.hasOwnProperty(J)&&ce!=null&&!r.hasOwnProperty(J)&&Vt(e,n,J,null,r,ce);for(ve in r)ce=r[ve],fe=a[ve],!r.hasOwnProperty(ve)||ce===fe||ce==null&&fe==null||Vt(e,n,ve,ce,r,fe)}function zm(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Uv(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var c=a[r],f=c.transferSize,v=c.initiatorType,T=c.duration;if(f&&T&&zm(v)){for(v=0,T=c.responseEnd,r+=1;r<a.length;r++){var G=a[r],re=G.startTime;if(re>T)break;var xe=G.transferSize,ve=G.initiatorType;xe&&zm(ve)&&(G=G.responseEnd,v+=xe*(G<T?1:(T-re)/(G-re)))}if(--r,n+=8*(f+v)/(c.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Ef=null,Tf=null;function Vl(e){return e.nodeType===9?e:e.ownerDocument}function Pm(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Im(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Af(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Rf=null;function Lv(){var e=window.event;return e&&e.type==="popstate"?e===Rf?!1:(Rf=e,!0):(Rf=null,!1)}var Fm=typeof setTimeout=="function"?setTimeout:void 0,Ov=typeof clearTimeout=="function"?clearTimeout:void 0,Bm=typeof Promise=="function"?Promise:void 0,zv=typeof queueMicrotask=="function"?queueMicrotask:typeof Bm<"u"?function(e){return Bm.resolve(null).then(e).catch(Pv)}:Fm;function Pv(e){setTimeout(function(){throw e})}function Oa(e){return e==="head"}function Hm(e,n){var a=n,r=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(r===0){e.removeChild(c),sr(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")_o(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,_o(a);for(var f=a.firstChild;f;){var v=f.nextSibling,T=f.nodeName;f[$a]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=v}}else a==="body"&&_o(e.ownerDocument.body);a=c}while(a);sr(n)}function Vm(e,n){var a=e;e=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=r}while(a)}function Cf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Cf(a),Pr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Iv(e,n,a,r){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[$a])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=fi(e.nextSibling),e===null)break}return null}function Fv(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=fi(e.nextSibling),e===null))return null;return e}function Gm(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=fi(e.nextSibling),e===null))return null;return e}function wf(e){return e.data==="$?"||e.data==="$~"}function Df(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Bv(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function fi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Nf=null;function km(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return fi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function Xm(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function jm(e,n,a){switch(n=Vl(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function _o(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Pr(e)}var di=new Map,qm=new Set;function Gl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ta=W.d;W.d={f:Hv,r:Vv,D:Gv,C:kv,L:Xv,m:jv,X:Wv,S:qv,M:Yv};function Hv(){var e=ta.f(),n=Ll();return e||n}function Vv(e){var n=R(e);n!==null&&n.tag===5&&n.type==="form"?c0(n):ta.r(e)}var nr=typeof document>"u"?null:document;function Wm(e,n,a){var r=nr;if(r&&typeof n=="string"&&n){var c=Wt(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),qm.has(c)||(qm.add(c),e={rel:e,crossOrigin:a,href:n},r.querySelector(c)===null&&(n=r.createElement("link"),Rn(n,"link",e),oe(n),r.head.appendChild(n)))}}function Gv(e){ta.D(e),Wm("dns-prefetch",e,null)}function kv(e,n){ta.C(e,n),Wm("preconnect",e,n)}function Xv(e,n,a){ta.L(e,n,a);var r=nr;if(r&&e&&n){var c='link[rel="preload"][as="'+Wt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+Wt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+Wt(a.imageSizes)+'"]')):c+='[href="'+Wt(e)+'"]';var f=c;switch(n){case"style":f=ir(e);break;case"script":f=ar(e)}di.has(f)||(e=x({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),di.set(f,e),r.querySelector(c)!==null||n==="style"&&r.querySelector(vo(f))||n==="script"&&r.querySelector(So(f))||(n=r.createElement("link"),Rn(n,"link",e),oe(n),r.head.appendChild(n)))}}function jv(e,n){ta.m(e,n);var a=nr;if(a&&e){var r=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+Wt(r)+'"][href="'+Wt(e)+'"]',f=c;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=ar(e)}if(!di.has(f)&&(e=x({rel:"modulepreload",href:e},n),di.set(f,e),a.querySelector(c)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(So(f)))return}r=a.createElement("link"),Rn(r,"link",e),oe(r),a.head.appendChild(r)}}}function qv(e,n,a){ta.S(e,n,a);var r=nr;if(r&&e){var c=ue(r).hoistableStyles,f=ir(e);n=n||"default";var v=c.get(f);if(!v){var T={loading:0,preload:null};if(v=r.querySelector(vo(f)))T.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":n},a),(a=di.get(f))&&Uf(e,a);var G=v=r.createElement("link");oe(G),Rn(G,"link",e),G._p=new Promise(function(re,xe){G.onload=re,G.onerror=xe}),G.addEventListener("load",function(){T.loading|=1}),G.addEventListener("error",function(){T.loading|=2}),T.loading|=4,kl(v,n,r)}v={type:"stylesheet",instance:v,count:1,state:T},c.set(f,v)}}}function Wv(e,n){ta.X(e,n);var a=nr;if(a&&e){var r=ue(a).hoistableScripts,c=ar(e),f=r.get(c);f||(f=a.querySelector(So(c)),f||(e=x({src:e,async:!0},n),(n=di.get(c))&&Lf(e,n),f=a.createElement("script"),oe(f),Rn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function Yv(e,n){ta.M(e,n);var a=nr;if(a&&e){var r=ue(a).hoistableScripts,c=ar(e),f=r.get(c);f||(f=a.querySelector(So(c)),f||(e=x({src:e,async:!0,type:"module"},n),(n=di.get(c))&&Lf(e,n),f=a.createElement("script"),oe(f),Rn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function Ym(e,n,a,r){var c=(c=ie.current)?Gl(c):null;if(!c)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ir(a.href),a=ue(c).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=ir(a.href);var f=ue(c).hoistableStyles,v=f.get(e);if(v||(c=c.ownerDocument||c,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,v),(f=c.querySelector(vo(e)))&&!f._p&&(v.instance=f,v.state.loading=5),di.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},di.set(e,a),f||Zv(c,e,a,v.state))),n&&r===null)throw Error(s(528,""));return v}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ar(a),a=ue(c).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function ir(e){return'href="'+Wt(e)+'"'}function vo(e){return'link[rel="stylesheet"]['+e+"]"}function Zm(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function Zv(e,n,a,r){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=e.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),Rn(n,"link",a),oe(n),e.head.appendChild(n))}function ar(e){return'[src="'+Wt(e)+'"]'}function So(e){return"script[async]"+e}function Km(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+Wt(a.href)+'"]');if(r)return n.instance=r,oe(r),r;var c=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),oe(r),Rn(r,"style",c),kl(r,a.precedence,e),n.instance=r;case"stylesheet":c=ir(a.href);var f=e.querySelector(vo(c));if(f)return n.state.loading|=4,n.instance=f,oe(f),f;r=Zm(a),(c=di.get(c))&&Uf(r,c),f=(e.ownerDocument||e).createElement("link"),oe(f);var v=f;return v._p=new Promise(function(T,G){v.onload=T,v.onerror=G}),Rn(f,"link",r),n.state.loading|=4,kl(f,a.precedence,e),n.instance=f;case"script":return f=ar(a.src),(c=e.querySelector(So(f)))?(n.instance=c,oe(c),c):(r=a,(c=di.get(f))&&(r=x({},a),Lf(r,c)),e=e.ownerDocument||e,c=e.createElement("script"),oe(c),Rn(c,"link",r),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,kl(r,a.precedence,e));return n.instance}function kl(e,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=r.length?r[r.length-1]:null,f=c,v=0;v<r.length;v++){var T=r[v];if(T.dataset.precedence===n)f=T;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Uf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Lf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Xl=null;function Qm(e,n,a){if(Xl===null){var r=new Map,c=Xl=new Map;c.set(a,r)}else c=Xl,r=c.get(a),r||(r=new Map,c.set(a,r));if(r.has(e))return r;for(r.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[$a]||f[on]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var v=f.getAttribute(n)||"";v=e+v;var T=r.get(v);T?T.push(f):r.set(v,[f])}}return r}function Jm(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Kv(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function $m(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Qv(e,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=ir(r.href),f=n.querySelector(vo(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=jl.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,oe(f);return}f=n.ownerDocument||n,r=Zm(r),(c=di.get(c))&&Uf(r,c),f=f.createElement("link"),oe(f);var v=f;v._p=new Promise(function(T,G){v.onload=T,v.onerror=G}),Rn(f,"link",r),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=jl.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Of=0;function Jv(e,n){return e.stylesheets&&e.count===0&&Wl(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var r=setTimeout(function(){if(e.stylesheets&&Wl(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&Of===0&&(Of=62500*Uv());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Wl(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>Of?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(c)}}:null}function jl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Wl(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ql=null;function Wl(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ql=new Map,n.forEach($v,e),ql=null,jl.call(e))}function $v(e,n){if(!(n.state.loading&4)){var a=ql.get(e);if(a)var r=a.get(null);else{a=new Map,ql.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var v=c[f];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),r=v)}r&&a.set(null,r)}c=n.instance,v=c.getAttribute("data-precedence"),f=a.get(v)||r,f===r&&a.set(null,c),a.set(v,c),this.count++,r=jl.bind(this),c.addEventListener("load",r),c.addEventListener("error",r),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var yo={$$typeof:U,Provider:null,Consumer:null,_currentValue:L,_currentValue2:L,_threadCount:0};function eS(e,n,a,r,c,f,v,T,G){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ct(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ct(0),this.hiddenUpdates=Ct(null),this.identifierPrefix=r,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.incompleteTransitions=new Map}function ex(e,n,a,r,c,f,v,T,G,re,xe,ve){return e=new eS(e,n,a,v,G,re,xe,ve,T),n=1,f===!0&&(n|=24),f=Yn(3,null,null,n),e.current=f,f.stateNode=e,n=du(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},xu(f),e}function tx(e){return e?(e=zs,e):zs}function nx(e,n,a,r,c,f){c=tx(c),r.context===null?r.context=c:r.pendingContext=c,r=Ma(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=Ea(e,r,n),a!==null&&(Gn(a,e,n),Jr(a,e,n))}function ix(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function zf(e,n){ix(e,n),(e=e.alternate)&&ix(e,n)}function ax(e){if(e.tag===13||e.tag===31){var n=is(e,67108864);n!==null&&Gn(n,e,67108864),zf(e,67108864)}}function sx(e){if(e.tag===13||e.tag===31){var n=$n();n=xi(n);var a=is(e,n);a!==null&&Gn(a,e,n),zf(e,n)}}var Yl=!0;function tS(e,n,a,r){var c=z.T;z.T=null;var f=W.p;try{W.p=2,Pf(e,n,a,r)}finally{W.p=f,z.T=c}}function nS(e,n,a,r){var c=z.T;z.T=null;var f=W.p;try{W.p=8,Pf(e,n,a,r)}finally{W.p=f,z.T=c}}function Pf(e,n,a,r){if(Yl){var c=If(r);if(c===null)bf(e,n,r,Zl,a),ox(e,r);else if(aS(c,e,n,a,r))r.stopPropagation();else if(ox(e,r),n&4&&-1<iS.indexOf(e)){for(;c!==null;){var f=R(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var v=Ee(f.pendingLanes);if(v!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;v;){var G=1<<31-Ge(v);T.entanglements[1]|=G,v&=~G}wi(f),(Ot&6)===0&&(Nl=M()+500,mo(0))}}break;case 31:case 13:T=is(f,2),T!==null&&Gn(T,f,2),Ll(),zf(f,2)}if(f=If(r),f===null&&bf(e,n,r,Zl,a),f===c)break;c=f}c!==null&&r.stopPropagation()}else bf(e,n,r,null,a)}}function If(e){return e=Fc(e),Ff(e)}var Zl=null;function Ff(e){if(Zl=null,e=ma(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===31){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Zl=e,null}function rx(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(se()){case _e:return 2;case be:return 8;case pe:case qe:return 32;case Le:return 268435456;default:return 32}default:return 32}}var Bf=!1,za=null,Pa=null,Ia=null,bo=new Map,Mo=new Map,Fa=[],iS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ox(e,n){switch(e){case"focusin":case"focusout":za=null;break;case"dragenter":case"dragleave":Pa=null;break;case"mouseover":case"mouseout":Ia=null;break;case"pointerover":case"pointerout":bo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mo.delete(n.pointerId)}}function Eo(e,n,a,r,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[c]},n!==null&&(n=R(n),n!==null&&ax(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function aS(e,n,a,r,c){switch(n){case"focusin":return za=Eo(za,e,n,a,r,c),!0;case"dragenter":return Pa=Eo(Pa,e,n,a,r,c),!0;case"mouseover":return Ia=Eo(Ia,e,n,a,r,c),!0;case"pointerover":var f=c.pointerId;return bo.set(f,Eo(bo.get(f)||null,e,n,a,r,c)),!0;case"gotpointercapture":return f=c.pointerId,Mo.set(f,Eo(Mo.get(f)||null,e,n,a,r,c)),!0}return!1}function lx(e){var n=ma(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,zr(e.priority,function(){sx(a)});return}}else if(n===31){if(n=h(a),n!==null){e.blockedOn=n,zr(e.priority,function(){sx(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Kl(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=If(e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);Ic=r,a.target.dispatchEvent(r),Ic=null}else return n=R(a),n!==null&&ax(n),e.blockedOn=a,!1;n.shift()}return!0}function cx(e,n,a){Kl(e)&&a.delete(n)}function sS(){Bf=!1,za!==null&&Kl(za)&&(za=null),Pa!==null&&Kl(Pa)&&(Pa=null),Ia!==null&&Kl(Ia)&&(Ia=null),bo.forEach(cx),Mo.forEach(cx)}function Ql(e,n){e.blockedOn===n&&(e.blockedOn=null,Bf||(Bf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,sS)))}var Jl=null;function ux(e){Jl!==e&&(Jl=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Jl===e&&(Jl=null);for(var n=0;n<e.length;n+=3){var a=e[n],r=e[n+1],c=e[n+2];if(typeof r!="function"){if(Ff(r||a)===null)continue;break}var f=R(a);f!==null&&(e.splice(n,3),n-=3,Pu(f,{pending:!0,data:c,method:a.method,action:r},r,c))}}))}function sr(e){function n(G){return Ql(G,e)}za!==null&&Ql(za,e),Pa!==null&&Ql(Pa,e),Ia!==null&&Ql(Ia,e),bo.forEach(n),Mo.forEach(n);for(var a=0;a<Fa.length;a++){var r=Fa[a];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Fa.length&&(a=Fa[0],a.blockedOn===null);)lx(a),a.blockedOn===null&&Fa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var c=a[r],f=a[r+1],v=c[hn]||null;if(typeof f=="function")v||ux(a);else if(v){var T=null;if(f&&f.hasAttribute("formAction")){if(c=f,v=f[hn]||null)T=v.formAction;else if(Ff(c)!==null)continue}else T=v.action;typeof T=="function"?a[r+1]=T:(a.splice(r,3),r-=3),ux(a)}}}function fx(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(v){return c=v})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Hf(e){this._internalRoot=e}$l.prototype.render=Hf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=$n();nx(a,r,e,n,null,null)},$l.prototype.unmount=Hf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;nx(e.current,2,null,e,null,null),Ll(),n[Pi]=null}};function $l(e){this._internalRoot=e}$l.prototype.unstable_scheduleHydration=function(e){if(e){var n=Or();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Fa.length&&n!==0&&n<Fa[a].priority;a++);Fa.splice(a,0,e),a===0&&lx(e)}};var dx=t.version;if(dx!=="19.2.0")throw Error(s(527,dx,"19.2.0"));W.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var rS={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ec=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ec.isDisabled&&ec.supportsFiber)try{Me=ec.inject(rS),Te=ec}catch{}}return Ao.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,r="",c=v0,f=S0,v=y0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=ex(e,1,!1,null,null,a,r,null,c,f,v,fx),e[Pi]=n.current,yf(e),new Hf(n)},Ao.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var r=!1,c="",f=v0,v=S0,T=y0,G=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(G=a.formState)),n=ex(e,1,!0,n,a??null,r,c,G,f,v,T,fx),n.context=tx(null),a=n.current,r=$n(),r=xi(r),c=Ma(r),c.callback=null,Ea(a,c,r),a=r,n.current.lanes=a,Cn(n,a),wi(n),e[Pi]=n.current,yf(e),new $l(n)},Ao.version="19.2.0",Ao}var bx;function gS(){if(bx)return kf.exports;bx=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),kf.exports=xS(),kf.exports}var _S=gS();const vS=yg(_S),SS=[{id:"inicio",label:"Inicio"},{id:"electricidad",label:"Electricidad"}];function yS({currentSection:o,onChangeSection:t,darkMode:i,toggleDarkMode:s}){return D.jsx("header",{className:"sticky top-0 z-30 backdrop-blur bg-white/80 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-700",children:D.jsxs("nav",{className:"max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4",children:[D.jsxs("div",{className:"flex items-center gap-2 cursor-pointer",onClick:()=>t("inicio"),children:[D.jsx("div",{className:"w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold",children:"⚡"}),D.jsx("span",{className:"font-semibold text-slate-800 dark:text-slate-100",children:"Física 2 - Electricidad"})]}),D.jsxs("div",{className:"flex items-center gap-4",children:[SS.map(l=>D.jsx("button",{onClick:()=>t(l.id),className:`text-sm font-medium transition ${o===l.id?"text-yellow-500 border-b-2 border-yellow-500":"text-slate-600 dark:text-slate-300 hover:text-yellow-400"}`,children:l.label},l.id)),D.jsx("button",{onClick:s,className:"ml-2 p-2 rounded-full bg-slate-200 dark:bg-slate-700 hover:scale-105 transition",title:"Cambiar modo",children:i?"🌙":"☀️"})]})]})})}function bS({onChangeSection:o}){return D.jsxs("section",{id:"inicio",className:"max-w-6xl mx-auto px-4 py-10 md:py-12",children:[D.jsxs("div",{className:"grid md:grid-cols-2 gap-8 items-center mb-10",children:[D.jsxs("div",{children:[D.jsxs("h1",{className:"text-3xl md:text-4xl font-bold tracking-tight mb-3",children:[D.jsx("span",{className:"text-yellow-300",children:"Electricidad &"})," "]}),D.jsxs("p",{className:"text-sm md:text-base text-gray-300 mb-4",children:["Explora, aprende y experimenta los conceptos clave de"," ",D.jsx("span",{className:"font-semibold text-yellow-500",children:"Electricidad"})," ","usando simuladores 2D/3D, calculadoras y fórmulas renderizadas."]}),D.jsx("p",{className:"text-xs md:text-sm text-gray-400 mb-4",children:"Diseñado para estudiantes de Ingeniería."}),D.jsx("div",{className:"flex flex-wrap gap-2 mb-3",children:[{label:"Ley de Coulomb",section:"electricidad"},{label:"Campo Eléctrico",section:"electricidad"},{label:"Ley de Ohm",section:"electricidad"}].map(t=>D.jsx("button",{onClick:()=>o(t.section),className:"text-xs md:text-sm px-3 py-1.5 rounded-full bg-slate-800/80 hover:bg-slate-700 border border-slate-600 text-gray-100",children:t.label},t.label))}),D.jsxs("div",{className:"text-xs md:text-sm text-gray-400",children:[D.jsx("p",{className:"font-semibold mb-1",children:"Unidades SI:"}),D.jsx("p",{children:"Carga (C), Distancia (m), Fuerza (N), Voltaje (V), Corriente (A), Resistencia (Ω)."})]})]}),D.jsxs("div",{className:"rounded-2xl border border-slate-700 bg-slate-900/80 p-4 md:p-5 shadow-xl",children:[D.jsx("p",{className:"text-xs uppercase text-primary-light mb-2 font-semibold",children:"Módulos principales"}),D.jsx("ul",{className:"space-y-2 text-sm",children:D.jsxs("li",{className:"flex gap-2",children:[D.jsx("span",{children:"⚡"}),D.jsxs("span",{children:[D.jsx("span",{className:"font-semibold",children:"Electricidad:"})," Coulomb, Campo, Potencial, Ley de Ohm y Circuitos."]})]})}),D.jsx("p",{className:"mt-3 text-xs text-gray-400",children:"Modo claro/oscuro, accesibilidad, y simuladores 2D/3D en la parte superior."})]})]}),D.jsxs("div",{className:"rounded-2xl border border-slate-700 bg-slate-900/80 p-4 md:p-5",children:[D.jsx("h2",{className:"text-lg md:text-xl font-semibold mb-3",children:"Constantes físicas clave"}),D.jsx("div",{className:"overflow-x-auto text-xs md:text-sm",children:D.jsxs("table",{className:"min-w-full border-collapse",children:[D.jsx("thead",{children:D.jsxs("tr",{className:"bg-slate-800/80",children:[D.jsx("th",{className:"border border-slate-700 px-2 py-1 text-left",children:"Nombre"}),D.jsx("th",{className:"border border-slate-700 px-2 py-1 text-left",children:"Símbolo"}),D.jsx("th",{className:"border border-slate-700 px-2 py-1 text-left",children:"Valor"}),D.jsx("th",{className:"border border-slate-700 px-2 py-1 text-left",children:"Unidades"})]})}),D.jsxs("tbody",{children:[D.jsxs("tr",{children:[D.jsx("td",{className:"border border-slate-700 px-2 py-1",children:"Constante de Coulomb"}),D.jsx("td",{className:"border border-slate-700 px-2 py-1",children:"k"}),D.jsx("td",{className:"border border-slate-700 px-2 py-1",children:"8.99×10⁹"}),D.jsx("td",{className:"border border-slate-700 px-2 py-1",children:"N·m²/C²"})]}),D.jsxs("tr",{children:[D.jsx("td",{className:"border border-slate-700 px-2 py-1",children:"Permitividad del vacío"}),D.jsx("td",{className:"border border-slate-700 px-2 py-1",children:"ε₀"}),D.jsx("td",{className:"border border-slate-700 px-2 py-1",children:"8.85×10⁻¹²"}),D.jsx("td",{className:"border border-slate-700 px-2 py-1",children:"F/m"})]}),D.jsxs("tr",{children:[D.jsx("td",{className:"border border-slate-700 px-2 py-1",children:"Velocidad de la luz"}),D.jsx("td",{className:"border border-slate-700 px-2 py-1",children:"c"}),D.jsx("td",{className:"border border-slate-700 px-2 py-1",children:"2.9979×10⁸"}),D.jsx("td",{className:"border border-slate-700 px-2 py-1",children:"m/s"})]}),D.jsxs("tr",{children:[D.jsx("td",{className:"border border-slate-700 px-2 py-1",children:"Índice del aire"}),D.jsx("td",{className:"border border-slate-700 px-2 py-1",children:"n"}),D.jsx("td",{className:"border border-slate-700 px-2 py-1",children:"1.0003"}),D.jsx("td",{className:"border border-slate-700 px-2 py-1",children:"—"})]})]})]})}),D.jsx("p",{className:"mt-3 text-xs text-gray-400",children:"Las fórmulas del sitio se encuentran renderizadas."})]})]})}const yh="181",MS=0,Mx=1,ES=2,bg=1,TS=2,la=3,Qa=0,Xn=1,ca=2,da=0,Sr=1,Ex=2,Tx=3,Ax=4,AS=5,Ms=100,RS=101,CS=102,wS=103,DS=104,NS=200,US=201,LS=202,OS=203,Cd=204,wd=205,zS=206,PS=207,IS=208,FS=209,BS=210,HS=211,VS=212,GS=213,kS=214,Dd=0,Nd=1,Ud=2,br=3,Ld=4,Od=5,zd=6,Pd=7,Mg=0,XS=1,jS=2,Ka=0,qS=1,WS=2,YS=3,ZS=4,KS=5,QS=6,JS=7,Eg=300,Mr=301,Er=302,Id=303,Fd=304,wc=306,Bd=1e3,ua=1001,Hd=1002,ii=1003,$S=1004,tc=1005,mi=1006,Wf=1007,Ts=1008,Li=1009,Tg=1010,Ag=1011,Oo=1012,bh=1013,As=1014,fa=1015,wr=1016,Mh=1017,Eh=1018,zo=1020,Rg=35902,Cg=35899,wg=1021,Dg=1022,Ei=1023,Po=1026,Io=1027,Ng=1028,Th=1029,Ah=1030,Rh=1031,Ch=1033,yc=33776,bc=33777,Mc=33778,Ec=33779,Vd=35840,Gd=35841,kd=35842,Xd=35843,jd=36196,qd=37492,Wd=37496,Yd=37808,Zd=37809,Kd=37810,Qd=37811,Jd=37812,$d=37813,eh=37814,th=37815,nh=37816,ih=37817,ah=37818,sh=37819,rh=37820,oh=37821,lh=36492,ch=36494,uh=36495,fh=36283,dh=36284,hh=36285,ph=36286,ey=3200,ty=3201,Ug=0,ny=1,qa="",pi="srgb",Tr="srgb-linear",Ac="linear",kt="srgb",rr=7680,Rx=519,iy=512,ay=513,sy=514,Lg=515,ry=516,oy=517,ly=518,cy=519,Cx=35044,wx="300 es",Ni=2e3,Rc=2001;function Og(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Cc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function uy(){const o=Cc("canvas");return o.style.display="block",o}const Dx={};function Nx(...o){const t="THREE."+o.shift();console.log(t,...o)}function lt(...o){const t="THREE."+o.shift();console.warn(t,...o)}function sn(...o){const t="THREE."+o.shift();console.error(t,...o)}function Fo(...o){const t=o.join(" ");t in Dx||(Dx[t]=!0,lt(...o))}function fy(o,t,i){return new Promise(function(s,l){function u(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:s()}}setTimeout(u,i)})}class Dr{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,t);t.target=null}}}const Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yf=Math.PI/180,mh=180/Math.PI;function Bo(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Dn[o&255]+Dn[o>>8&255]+Dn[o>>16&255]+Dn[o>>24&255]+"-"+Dn[t&255]+Dn[t>>8&255]+"-"+Dn[t>>16&15|64]+Dn[t>>24&255]+"-"+Dn[i&63|128]+Dn[i>>8&255]+"-"+Dn[i>>16&255]+Dn[i>>24&255]+Dn[s&255]+Dn[s>>8&255]+Dn[s>>16&255]+Dn[s>>24&255]).toLowerCase()}function Et(o,t,i){return Math.max(t,Math.min(i,o))}function dy(o,t){return(o%t+t)%t}function Zf(o,t,i){return(1-i)*o+i*t}function Ro(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function kn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Lt{constructor(t=0,i=0){Lt.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Et(this.x,t.x,i.x),this.y=Et(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Et(this.x,t,i),this.y=Et(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Et(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Et(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-t.x,d=this.y-t.y;return this.x=u*s-d*l+t.x,this.y=u*l+d*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ho{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,u,d,h){let m=s[l+0],p=s[l+1],g=s[l+2],x=s[l+3],S=u[d+0],y=u[d+1],E=u[d+2],C=u[d+3];if(h<=0){t[i+0]=m,t[i+1]=p,t[i+2]=g,t[i+3]=x;return}if(h>=1){t[i+0]=S,t[i+1]=y,t[i+2]=E,t[i+3]=C;return}if(x!==C||m!==S||p!==y||g!==E){let b=m*S+p*y+g*E+x*C;b<0&&(S=-S,y=-y,E=-E,C=-C,b=-b);let _=1-h;if(b<.9995){const I=Math.acos(b),U=Math.sin(I);_=Math.sin(_*I)/U,h=Math.sin(h*I)/U,m=m*_+S*h,p=p*_+y*h,g=g*_+E*h,x=x*_+C*h}else{m=m*_+S*h,p=p*_+y*h,g=g*_+E*h,x=x*_+C*h;const I=1/Math.sqrt(m*m+p*p+g*g+x*x);m*=I,p*=I,g*=I,x*=I}}t[i]=m,t[i+1]=p,t[i+2]=g,t[i+3]=x}static multiplyQuaternionsFlat(t,i,s,l,u,d){const h=s[l],m=s[l+1],p=s[l+2],g=s[l+3],x=u[d],S=u[d+1],y=u[d+2],E=u[d+3];return t[i]=h*E+g*x+m*y-p*S,t[i+1]=m*E+g*S+p*x-h*y,t[i+2]=p*E+g*y+h*S-m*x,t[i+3]=g*E-h*x-m*S-p*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,u=t._z,d=t._order,h=Math.cos,m=Math.sin,p=h(s/2),g=h(l/2),x=h(u/2),S=m(s/2),y=m(l/2),E=m(u/2);switch(d){case"XYZ":this._x=S*g*x+p*y*E,this._y=p*y*x-S*g*E,this._z=p*g*E+S*y*x,this._w=p*g*x-S*y*E;break;case"YXZ":this._x=S*g*x+p*y*E,this._y=p*y*x-S*g*E,this._z=p*g*E-S*y*x,this._w=p*g*x+S*y*E;break;case"ZXY":this._x=S*g*x-p*y*E,this._y=p*y*x+S*g*E,this._z=p*g*E+S*y*x,this._w=p*g*x-S*y*E;break;case"ZYX":this._x=S*g*x-p*y*E,this._y=p*y*x+S*g*E,this._z=p*g*E-S*y*x,this._w=p*g*x+S*y*E;break;case"YZX":this._x=S*g*x+p*y*E,this._y=p*y*x+S*g*E,this._z=p*g*E-S*y*x,this._w=p*g*x-S*y*E;break;case"XZY":this._x=S*g*x-p*y*E,this._y=p*y*x-S*g*E,this._z=p*g*E+S*y*x,this._w=p*g*x+S*y*E;break;default:lt("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],u=i[8],d=i[1],h=i[5],m=i[9],p=i[2],g=i[6],x=i[10],S=s+h+x;if(S>0){const y=.5/Math.sqrt(S+1);this._w=.25/y,this._x=(g-m)*y,this._y=(u-p)*y,this._z=(d-l)*y}else if(s>h&&s>x){const y=2*Math.sqrt(1+s-h-x);this._w=(g-m)/y,this._x=.25*y,this._y=(l+d)/y,this._z=(u+p)/y}else if(h>x){const y=2*Math.sqrt(1+h-s-x);this._w=(u-p)/y,this._x=(l+d)/y,this._y=.25*y,this._z=(m+g)/y}else{const y=2*Math.sqrt(1+x-s-h);this._w=(d-l)/y,this._x=(u+p)/y,this._y=(m+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Et(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,u=t._z,d=t._w,h=i._x,m=i._y,p=i._z,g=i._w;return this._x=s*g+d*h+l*p-u*m,this._y=l*g+d*m+u*h-s*p,this._z=u*g+d*p+s*m-l*h,this._w=d*g-s*h-l*m-u*p,this._onChangeCallback(),this}slerp(t,i){if(i<=0)return this;if(i>=1)return this.copy(t);let s=t._x,l=t._y,u=t._z,d=t._w,h=this.dot(t);h<0&&(s=-s,l=-l,u=-u,d=-d,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),g=Math.sin(p);m=Math.sin(m*p)/g,i=Math.sin(i*p)/g,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class de{constructor(t=0,i=0,s=0){de.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Ux.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Ux.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=t.elements,d=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*d,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,u=t.x,d=t.y,h=t.z,m=t.w,p=2*(d*l-h*s),g=2*(h*i-u*l),x=2*(u*s-d*i);return this.x=i+m*p+d*x-h*g,this.y=s+m*g+h*p-u*x,this.z=l+m*x+u*g-d*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Et(this.x,t.x,i.x),this.y=Et(this.y,t.y,i.y),this.z=Et(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Et(this.x,t,i),this.y=Et(this.y,t,i),this.z=Et(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Et(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,u=t.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-u*h,this.y=u*d-s*m,this.z=s*h-l*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Kf.copy(this).projectOnVector(t),this.sub(Kf)}reflect(t){return this.sub(Kf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Et(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Kf=new de,Ux=new Ho;class ft{constructor(t,i,s,l,u,d,h,m,p){ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,d,h,m,p)}set(t,i,s,l,u,d,h,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=h,g[3]=i,g[4]=u,g[5]=m,g[6]=s,g[7]=d,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,d=s[0],h=s[3],m=s[6],p=s[1],g=s[4],x=s[7],S=s[2],y=s[5],E=s[8],C=l[0],b=l[3],_=l[6],I=l[1],U=l[4],F=l[7],H=l[2],N=l[5],B=l[8];return u[0]=d*C+h*I+m*H,u[3]=d*b+h*U+m*N,u[6]=d*_+h*F+m*B,u[1]=p*C+g*I+x*H,u[4]=p*b+g*U+x*N,u[7]=p*_+g*F+x*B,u[2]=S*C+y*I+E*H,u[5]=S*b+y*U+E*N,u[8]=S*_+y*F+E*B,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],d=t[4],h=t[5],m=t[6],p=t[7],g=t[8];return i*d*g-i*h*p-s*u*g+s*h*m+l*u*p-l*d*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],d=t[4],h=t[5],m=t[6],p=t[7],g=t[8],x=g*d-h*p,S=h*m-g*u,y=p*u-d*m,E=i*x+s*S+l*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/E;return t[0]=x*C,t[1]=(l*p-g*s)*C,t[2]=(h*s-l*d)*C,t[3]=S*C,t[4]=(g*i-l*m)*C,t[5]=(l*u-h*i)*C,t[6]=y*C,t[7]=(s*m-p*i)*C,t[8]=(d*i-s*u)*C,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,u,d,h){const m=Math.cos(u),p=Math.sin(u);return this.set(s*m,s*p,-s*(m*d+p*h)+d+t,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply(Qf.makeScale(t,i)),this}rotate(t){return this.premultiply(Qf.makeRotation(-t)),this}translate(t,i){return this.premultiply(Qf.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Qf=new ft,Lx=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ox=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hy(){const o={enabled:!0,workingColorSpace:Tr,spaces:{},convert:function(l,u,d){return this.enabled===!1||u===d||!u||!d||(this.spaces[u].transfer===kt&&(l.r=ha(l.r),l.g=ha(l.g),l.b=ha(l.b)),this.spaces[u].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===kt&&(l.r=yr(l.r),l.g=yr(l.g),l.b=yr(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===qa?Ac:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,d){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return Fo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return Fo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Tr]:{primaries:t,whitePoint:s,transfer:Ac,toXYZ:Lx,fromXYZ:Ox,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:pi},outputColorSpaceConfig:{drawingBufferColorSpace:pi}},[pi]:{primaries:t,whitePoint:s,transfer:kt,toXYZ:Lx,fromXYZ:Ox,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:pi}}}),o}const Ut=hy();function ha(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function yr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let or;class py{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{or===void 0&&(or=Cc("canvas")),or.width=t.width,or.height=t.height;const l=or.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=or}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Cc("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=ha(u[d]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(ha(i[s]/255)*255):i[s]=ha(i[s]);return{data:i,width:t.width,height:t.height}}else return lt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let my=0;class wh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:my++}),this.uuid=Bo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?u.push(Jf(l[d].image)):u.push(Jf(l[d]))}else u=Jf(l);s.url=u}return i||(t.images[this.uuid]=s),s}}function Jf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?py.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(lt("Texture: Unable to serialize Texture."),{})}let xy=0;const $f=new de;class Pn extends Dr{constructor(t=Pn.DEFAULT_IMAGE,i=Pn.DEFAULT_MAPPING,s=ua,l=ua,u=mi,d=Ts,h=Ei,m=Li,p=Pn.DEFAULT_ANISOTROPY,g=qa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xy++}),this.uuid=Bo(),this.name="",this.source=new wh(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize($f).x}get height(){return this.source.getSize($f).y}get depth(){return this.source.getSize($f).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){lt(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){lt(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Eg)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Bd:t.x=t.x-Math.floor(t.x);break;case ua:t.x=t.x<0?0:1;break;case Hd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Bd:t.y=t.y-Math.floor(t.y);break;case ua:t.y=t.y<0?0:1;break;case Hd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=Eg;Pn.DEFAULT_ANISOTROPY=1;class tn{constructor(t=0,i=0,s=0,l=1){tn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=this.w,d=t.elements;return this.x=d[0]*i+d[4]*s+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*s+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*s+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*s+d[11]*l+d[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,u;const m=t.elements,p=m[0],g=m[4],x=m[8],S=m[1],y=m[5],E=m[9],C=m[2],b=m[6],_=m[10];if(Math.abs(g-S)<.01&&Math.abs(x-C)<.01&&Math.abs(E-b)<.01){if(Math.abs(g+S)<.1&&Math.abs(x+C)<.1&&Math.abs(E+b)<.1&&Math.abs(p+y+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(p+1)/2,F=(y+1)/2,H=(_+1)/2,N=(g+S)/4,B=(x+C)/4,ee=(E+b)/4;return U>F&&U>H?U<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(U),l=N/s,u=B/s):F>H?F<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(F),s=N/l,u=ee/l):H<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(H),s=B/u,l=ee/u),this.set(s,l,u,i),this}let I=Math.sqrt((b-E)*(b-E)+(x-C)*(x-C)+(S-g)*(S-g));return Math.abs(I)<.001&&(I=1),this.x=(b-E)/I,this.y=(x-C)/I,this.z=(S-g)/I,this.w=Math.acos((p+y+_-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Et(this.x,t.x,i.x),this.y=Et(this.y,t.y,i.y),this.z=Et(this.z,t.z,i.z),this.w=Et(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Et(this.x,t,i),this.y=Et(this.y,t,i),this.z=Et(this.z,t,i),this.w=Et(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Et(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gy extends Dr{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new tn(0,0,t,i),this.scissorTest=!1,this.viewport=new tn(0,0,t,i);const l={width:t,height:i,depth:s.depth},u=new Pn(l);this.textures=[];const d=s.count;for(let h=0;h<d;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:mi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new wh(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rs extends gy{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class zg extends Pn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=ii,this.minFilter=ii,this.wrapR=ua,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class _y extends Pn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=ii,this.minFilter=ii,this.wrapR=ua,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vo{constructor(t=new de(1/0,1/0,1/0),i=new de(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Si.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Si.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Si.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let d=0,h=u.count;d<h;d++)t.isMesh===!0?t.getVertexPosition(d,Si):Si.fromBufferAttribute(u,d),Si.applyMatrix4(t.matrixWorld),this.expandByPoint(Si);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),nc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),nc.copy(s.boundingBox)),nc.applyMatrix4(t.matrixWorld),this.union(nc)}const l=t.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Si),Si.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Co),ic.subVectors(this.max,Co),lr.subVectors(t.a,Co),cr.subVectors(t.b,Co),ur.subVectors(t.c,Co),Ha.subVectors(cr,lr),Va.subVectors(ur,cr),xs.subVectors(lr,ur);let i=[0,-Ha.z,Ha.y,0,-Va.z,Va.y,0,-xs.z,xs.y,Ha.z,0,-Ha.x,Va.z,0,-Va.x,xs.z,0,-xs.x,-Ha.y,Ha.x,0,-Va.y,Va.x,0,-xs.y,xs.x,0];return!ed(i,lr,cr,ur,ic)||(i=[1,0,0,0,1,0,0,0,1],!ed(i,lr,cr,ur,ic))?!1:(ac.crossVectors(Ha,Va),i=[ac.x,ac.y,ac.z],ed(i,lr,cr,ur,ic))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Si).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Si).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(na[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),na[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),na[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),na[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),na[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),na[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),na[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),na[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(na),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const na=[new de,new de,new de,new de,new de,new de,new de,new de],Si=new de,nc=new Vo,lr=new de,cr=new de,ur=new de,Ha=new de,Va=new de,xs=new de,Co=new de,ic=new de,ac=new de,gs=new de;function ed(o,t,i,s,l){for(let u=0,d=o.length-3;u<=d;u+=3){gs.fromArray(o,u);const h=l.x*Math.abs(gs.x)+l.y*Math.abs(gs.y)+l.z*Math.abs(gs.z),m=t.dot(gs),p=i.dot(gs),g=s.dot(gs);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>h)return!1}return!0}const vy=new Vo,wo=new de,td=new de;class Dh{constructor(t=new de,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):vy.setFromPoints(t).getCenter(s);let l=0;for(let u=0,d=t.length;u<d;u++)l=Math.max(l,s.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;wo.subVectors(t,this.center);const i=wo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(wo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(td.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(wo.copy(t.center).add(td)),this.expandByPoint(wo.copy(t.center).sub(td))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ia=new de,nd=new de,sc=new de,Ga=new de,id=new de,rc=new de,ad=new de;class Sy{constructor(t=new de,i=new de(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ia)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ia.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ia.copy(this.origin).addScaledVector(this.direction,i),ia.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){nd.copy(t).add(i).multiplyScalar(.5),sc.copy(i).sub(t).normalize(),Ga.copy(this.origin).sub(nd);const u=t.distanceTo(i)*.5,d=-this.direction.dot(sc),h=Ga.dot(this.direction),m=-Ga.dot(sc),p=Ga.lengthSq(),g=Math.abs(1-d*d);let x,S,y,E;if(g>0)if(x=d*m-h,S=d*h-m,E=u*g,x>=0)if(S>=-E)if(S<=E){const C=1/g;x*=C,S*=C,y=x*(x+d*S+2*h)+S*(d*x+S+2*m)+p}else S=u,x=Math.max(0,-(d*S+h)),y=-x*x+S*(S+2*m)+p;else S=-u,x=Math.max(0,-(d*S+h)),y=-x*x+S*(S+2*m)+p;else S<=-E?(x=Math.max(0,-(-d*u+h)),S=x>0?-u:Math.min(Math.max(-u,-m),u),y=-x*x+S*(S+2*m)+p):S<=E?(x=0,S=Math.min(Math.max(-u,-m),u),y=S*(S+2*m)+p):(x=Math.max(0,-(d*u+h)),S=x>0?u:Math.min(Math.max(-u,-m),u),y=-x*x+S*(S+2*m)+p);else S=d>0?-u:u,x=Math.max(0,-(d*S+h)),y=-x*x+S*(S+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(nd).addScaledVector(sc,S),y}intersectSphere(t,i){ia.subVectors(t.center,this.origin);const s=ia.dot(this.direction),l=ia.dot(ia)-s*s,u=t.radius*t.radius;if(l>u)return null;const d=Math.sqrt(u-l),h=s-d,m=s+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,u,d,h,m;const p=1/this.direction.x,g=1/this.direction.y,x=1/this.direction.z,S=this.origin;return p>=0?(s=(t.min.x-S.x)*p,l=(t.max.x-S.x)*p):(s=(t.max.x-S.x)*p,l=(t.min.x-S.x)*p),g>=0?(u=(t.min.y-S.y)*g,d=(t.max.y-S.y)*g):(u=(t.max.y-S.y)*g,d=(t.min.y-S.y)*g),s>d||u>l||((u>s||isNaN(s))&&(s=u),(d<l||isNaN(l))&&(l=d),x>=0?(h=(t.min.z-S.z)*x,m=(t.max.z-S.z)*x):(h=(t.max.z-S.z)*x,m=(t.min.z-S.z)*x),s>m||h>l)||((h>s||s!==s)&&(s=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,ia)!==null}intersectTriangle(t,i,s,l,u){id.subVectors(i,t),rc.subVectors(s,t),ad.crossVectors(id,rc);let d=this.direction.dot(ad),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;Ga.subVectors(this.origin,t);const m=h*this.direction.dot(rc.crossVectors(Ga,rc));if(m<0)return null;const p=h*this.direction.dot(id.cross(Ga));if(p<0||m+p>d)return null;const g=-h*Ga.dot(ad);return g<0?null:this.at(g/d,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rn{constructor(t,i,s,l,u,d,h,m,p,g,x,S,y,E,C,b){rn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,d,h,m,p,g,x,S,y,E,C,b)}set(t,i,s,l,u,d,h,m,p,g,x,S,y,E,C,b){const _=this.elements;return _[0]=t,_[4]=i,_[8]=s,_[12]=l,_[1]=u,_[5]=d,_[9]=h,_[13]=m,_[2]=p,_[6]=g,_[10]=x,_[14]=S,_[3]=y,_[7]=E,_[11]=C,_[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rn().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,s=t.elements,l=1/fr.setFromMatrixColumn(t,0).length(),u=1/fr.setFromMatrixColumn(t,1).length(),d=1/fr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,u=t.z,d=Math.cos(s),h=Math.sin(s),m=Math.cos(l),p=Math.sin(l),g=Math.cos(u),x=Math.sin(u);if(t.order==="XYZ"){const S=d*g,y=d*x,E=h*g,C=h*x;i[0]=m*g,i[4]=-m*x,i[8]=p,i[1]=y+E*p,i[5]=S-C*p,i[9]=-h*m,i[2]=C-S*p,i[6]=E+y*p,i[10]=d*m}else if(t.order==="YXZ"){const S=m*g,y=m*x,E=p*g,C=p*x;i[0]=S+C*h,i[4]=E*h-y,i[8]=d*p,i[1]=d*x,i[5]=d*g,i[9]=-h,i[2]=y*h-E,i[6]=C+S*h,i[10]=d*m}else if(t.order==="ZXY"){const S=m*g,y=m*x,E=p*g,C=p*x;i[0]=S-C*h,i[4]=-d*x,i[8]=E+y*h,i[1]=y+E*h,i[5]=d*g,i[9]=C-S*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(t.order==="ZYX"){const S=d*g,y=d*x,E=h*g,C=h*x;i[0]=m*g,i[4]=E*p-y,i[8]=S*p+C,i[1]=m*x,i[5]=C*p+S,i[9]=y*p-E,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(t.order==="YZX"){const S=d*m,y=d*p,E=h*m,C=h*p;i[0]=m*g,i[4]=C-S*x,i[8]=E*x+y,i[1]=x,i[5]=d*g,i[9]=-h*g,i[2]=-p*g,i[6]=y*x+E,i[10]=S-C*x}else if(t.order==="XZY"){const S=d*m,y=d*p,E=h*m,C=h*p;i[0]=m*g,i[4]=-x,i[8]=p*g,i[1]=S*x+C,i[5]=d*g,i[9]=y*x-E,i[2]=E*x-y,i[6]=h*g,i[10]=C*x+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(yy,t,by)}lookAt(t,i,s){const l=this.elements;return ei.subVectors(t,i),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),ka.crossVectors(s,ei),ka.lengthSq()===0&&(Math.abs(s.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),ka.crossVectors(s,ei)),ka.normalize(),oc.crossVectors(ei,ka),l[0]=ka.x,l[4]=oc.x,l[8]=ei.x,l[1]=ka.y,l[5]=oc.y,l[9]=ei.y,l[2]=ka.z,l[6]=oc.z,l[10]=ei.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,d=s[0],h=s[4],m=s[8],p=s[12],g=s[1],x=s[5],S=s[9],y=s[13],E=s[2],C=s[6],b=s[10],_=s[14],I=s[3],U=s[7],F=s[11],H=s[15],N=l[0],B=l[4],ee=l[8],w=l[12],A=l[1],V=l[5],K=l[9],le=l[13],Y=l[2],$=l[6],z=l[10],W=l[14],L=l[3],X=l[7],ne=l[11],O=l[15];return u[0]=d*N+h*A+m*Y+p*L,u[4]=d*B+h*V+m*$+p*X,u[8]=d*ee+h*K+m*z+p*ne,u[12]=d*w+h*le+m*W+p*O,u[1]=g*N+x*A+S*Y+y*L,u[5]=g*B+x*V+S*$+y*X,u[9]=g*ee+x*K+S*z+y*ne,u[13]=g*w+x*le+S*W+y*O,u[2]=E*N+C*A+b*Y+_*L,u[6]=E*B+C*V+b*$+_*X,u[10]=E*ee+C*K+b*z+_*ne,u[14]=E*w+C*le+b*W+_*O,u[3]=I*N+U*A+F*Y+H*L,u[7]=I*B+U*V+F*$+H*X,u[11]=I*ee+U*K+F*z+H*ne,u[15]=I*w+U*le+F*W+H*O,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],u=t[12],d=t[1],h=t[5],m=t[9],p=t[13],g=t[2],x=t[6],S=t[10],y=t[14],E=t[3],C=t[7],b=t[11],_=t[15];return E*(+u*m*x-l*p*x-u*h*S+s*p*S+l*h*y-s*m*y)+C*(+i*m*y-i*p*S+u*d*S-l*d*y+l*p*g-u*m*g)+b*(+i*p*x-i*h*y-u*d*x+s*d*y+u*h*g-s*p*g)+_*(-l*h*g-i*m*x+i*h*S+l*d*x-s*d*S+s*m*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],d=t[4],h=t[5],m=t[6],p=t[7],g=t[8],x=t[9],S=t[10],y=t[11],E=t[12],C=t[13],b=t[14],_=t[15],I=x*b*p-C*S*p+C*m*y-h*b*y-x*m*_+h*S*_,U=E*S*p-g*b*p-E*m*y+d*b*y+g*m*_-d*S*_,F=g*C*p-E*x*p+E*h*y-d*C*y-g*h*_+d*x*_,H=E*x*m-g*C*m-E*h*S+d*C*S+g*h*b-d*x*b,N=i*I+s*U+l*F+u*H;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/N;return t[0]=I*B,t[1]=(C*S*u-x*b*u-C*l*y+s*b*y+x*l*_-s*S*_)*B,t[2]=(h*b*u-C*m*u+C*l*p-s*b*p-h*l*_+s*m*_)*B,t[3]=(x*m*u-h*S*u-x*l*p+s*S*p+h*l*y-s*m*y)*B,t[4]=U*B,t[5]=(g*b*u-E*S*u+E*l*y-i*b*y-g*l*_+i*S*_)*B,t[6]=(E*m*u-d*b*u-E*l*p+i*b*p+d*l*_-i*m*_)*B,t[7]=(d*S*u-g*m*u+g*l*p-i*S*p-d*l*y+i*m*y)*B,t[8]=F*B,t[9]=(E*x*u-g*C*u-E*s*y+i*C*y+g*s*_-i*x*_)*B,t[10]=(d*C*u-E*h*u+E*s*p-i*C*p-d*s*_+i*h*_)*B,t[11]=(g*h*u-d*x*u-g*s*p+i*x*p+d*s*y-i*h*y)*B,t[12]=H*B,t[13]=(g*C*l-E*x*l+E*s*S-i*C*S-g*s*b+i*x*b)*B,t[14]=(E*h*l-d*C*l-E*s*m+i*C*m+d*s*b-i*h*b)*B,t[15]=(d*x*l-g*h*l+g*s*m-i*x*m-d*s*S+i*h*S)*B,this}scale(t){const i=this.elements,s=t.x,l=t.y,u=t.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,d=t.x,h=t.y,m=t.z,p=u*d,g=u*h;return this.set(p*d+s,p*h-l*m,p*m+l*h,0,p*h+l*m,g*h+s,g*m-l*d,0,p*m-l*h,g*m+l*d,u*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,u,d){return this.set(1,s,u,0,t,1,d,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,u=i._x,d=i._y,h=i._z,m=i._w,p=u+u,g=d+d,x=h+h,S=u*p,y=u*g,E=u*x,C=d*g,b=d*x,_=h*x,I=m*p,U=m*g,F=m*x,H=s.x,N=s.y,B=s.z;return l[0]=(1-(C+_))*H,l[1]=(y+F)*H,l[2]=(E-U)*H,l[3]=0,l[4]=(y-F)*N,l[5]=(1-(S+_))*N,l[6]=(b+I)*N,l[7]=0,l[8]=(E+U)*B,l[9]=(b-I)*B,l[10]=(1-(S+C))*B,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;let u=fr.set(l[0],l[1],l[2]).length();const d=fr.set(l[4],l[5],l[6]).length(),h=fr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),t.x=l[12],t.y=l[13],t.z=l[14],yi.copy(this);const p=1/u,g=1/d,x=1/h;return yi.elements[0]*=p,yi.elements[1]*=p,yi.elements[2]*=p,yi.elements[4]*=g,yi.elements[5]*=g,yi.elements[6]*=g,yi.elements[8]*=x,yi.elements[9]*=x,yi.elements[10]*=x,i.setFromRotationMatrix(yi),s.x=u,s.y=d,s.z=h,this}makePerspective(t,i,s,l,u,d,h=Ni,m=!1){const p=this.elements,g=2*u/(i-t),x=2*u/(s-l),S=(i+t)/(i-t),y=(s+l)/(s-l);let E,C;if(m)E=u/(d-u),C=d*u/(d-u);else if(h===Ni)E=-(d+u)/(d-u),C=-2*d*u/(d-u);else if(h===Rc)E=-d/(d-u),C=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=x,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=C,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,u,d,h=Ni,m=!1){const p=this.elements,g=2/(i-t),x=2/(s-l),S=-(i+t)/(i-t),y=-(s+l)/(s-l);let E,C;if(m)E=1/(d-u),C=d/(d-u);else if(h===Ni)E=-2/(d-u),C=-(d+u)/(d-u);else if(h===Rc)E=-1/(d-u),C=-u/(d-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=0,p[12]=S,p[1]=0,p[5]=x,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=E,p[14]=C,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const fr=new de,yi=new rn,yy=new de(0,0,0),by=new de(1,1,1),ka=new de,oc=new de,ei=new de,zx=new rn,Px=new Ho;class Oi{constructor(t=0,i=0,s=0,l=Oi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,u=l[0],d=l[4],h=l[8],m=l[1],p=l[5],g=l[9],x=l[2],S=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(Et(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-x,u),this._z=0);break;case"ZXY":this._x=Math.asin(Et(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-x,y),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Et(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(S,y),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(Et(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-x,u)):(this._x=0,this._y=Math.atan2(h,y));break;case"XZY":this._z=Math.asin(-Et(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-g,y),this._y=0);break;default:lt("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return zx.makeRotationFromQuaternion(t),this.setFromRotationMatrix(zx,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Px.setFromEuler(this),this.setFromQuaternion(Px,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Oi.DEFAULT_ORDER="XYZ";class Pg{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let My=0;const Ix=new de,dr=new Ho,aa=new rn,lc=new de,Do=new de,Ey=new de,Ty=new Ho,Fx=new de(1,0,0),Bx=new de(0,1,0),Hx=new de(0,0,1),Vx={type:"added"},Ay={type:"removed"},hr={type:"childadded",child:null},sd={type:"childremoved",child:null};class Ln extends Dr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:My++}),this.uuid=Bo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ln.DEFAULT_UP.clone();const t=new de,i=new Oi,s=new Ho,l=new de(1,1,1);function u(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new rn},normalMatrix:{value:new ft}}),this.matrix=new rn,this.matrixWorld=new rn,this.matrixAutoUpdate=Ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return dr.setFromAxisAngle(t,i),this.quaternion.multiply(dr),this}rotateOnWorldAxis(t,i){return dr.setFromAxisAngle(t,i),this.quaternion.premultiply(dr),this}rotateX(t){return this.rotateOnAxis(Fx,t)}rotateY(t){return this.rotateOnAxis(Bx,t)}rotateZ(t){return this.rotateOnAxis(Hx,t)}translateOnAxis(t,i){return Ix.copy(t).applyQuaternion(this.quaternion),this.position.add(Ix.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Fx,t)}translateY(t){return this.translateOnAxis(Bx,t)}translateZ(t){return this.translateOnAxis(Hx,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(aa.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?lc.copy(t):lc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Do.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?aa.lookAt(Do,lc,this.up):aa.lookAt(lc,Do,this.up),this.quaternion.setFromRotationMatrix(aa),l&&(aa.extractRotation(l.matrixWorld),dr.setFromRotationMatrix(aa),this.quaternion.premultiply(dr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(sn("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Vx),hr.child=t,this.dispatchEvent(hr),hr.child=null):sn("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(Ay),sd.child=t,this.dispatchEvent(sd),sd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),aa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),aa.multiply(t.parent.matrixWorld)),t.applyMatrix4(aa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Vx),hr.child=t,this.dispatchEvent(hr),hr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const d=this.children[s].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,t,Ey),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,Ty,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const x=m[p];u(t.shapes,x)}else u(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(u(t.materials,this.material[m]));l.material=h}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(u(t.animations,m))}}if(i){const h=d(t.geometries),m=d(t.materials),p=d(t.textures),g=d(t.images),x=d(t.shapes),S=d(t.skeletons),y=d(t.animations),E=d(t.nodes);h.length>0&&(s.geometries=h),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),g.length>0&&(s.images=g),x.length>0&&(s.shapes=x),S.length>0&&(s.skeletons=S),y.length>0&&(s.animations=y),E.length>0&&(s.nodes=E)}return s.object=l,s;function d(h){const m=[];for(const p in h){const g=h[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Ln.DEFAULT_UP=new de(0,1,0);Ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bi=new de,sa=new de,rd=new de,ra=new de,pr=new de,mr=new de,Gx=new de,od=new de,ld=new de,cd=new de,ud=new tn,fd=new tn,dd=new tn;class Mi{constructor(t=new de,i=new de,s=new de){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),bi.subVectors(t,i),l.cross(bi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,s,l,u){bi.subVectors(l,i),sa.subVectors(s,i),rd.subVectors(t,i);const d=bi.dot(bi),h=bi.dot(sa),m=bi.dot(rd),p=sa.dot(sa),g=sa.dot(rd),x=d*p-h*h;if(x===0)return u.set(0,0,0),null;const S=1/x,y=(p*m-h*g)*S,E=(d*g-h*m)*S;return u.set(1-y-E,E,y)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,ra)===null?!1:ra.x>=0&&ra.y>=0&&ra.x+ra.y<=1}static getInterpolation(t,i,s,l,u,d,h,m){return this.getBarycoord(t,i,s,l,ra)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,ra.x),m.addScaledVector(d,ra.y),m.addScaledVector(h,ra.z),m)}static getInterpolatedAttribute(t,i,s,l,u,d){return ud.setScalar(0),fd.setScalar(0),dd.setScalar(0),ud.fromBufferAttribute(t,i),fd.fromBufferAttribute(t,s),dd.fromBufferAttribute(t,l),d.setScalar(0),d.addScaledVector(ud,u.x),d.addScaledVector(fd,u.y),d.addScaledVector(dd,u.z),d}static isFrontFacing(t,i,s,l){return bi.subVectors(s,i),sa.subVectors(t,i),bi.cross(sa).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return bi.subVectors(this.c,this.b),sa.subVectors(this.a,this.b),bi.cross(sa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Mi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Mi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,u){return Mi.getInterpolation(t,this.a,this.b,this.c,i,s,l,u)}containsPoint(t){return Mi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Mi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,u=this.c;let d,h;pr.subVectors(l,s),mr.subVectors(u,s),od.subVectors(t,s);const m=pr.dot(od),p=mr.dot(od);if(m<=0&&p<=0)return i.copy(s);ld.subVectors(t,l);const g=pr.dot(ld),x=mr.dot(ld);if(g>=0&&x<=g)return i.copy(l);const S=m*x-g*p;if(S<=0&&m>=0&&g<=0)return d=m/(m-g),i.copy(s).addScaledVector(pr,d);cd.subVectors(t,u);const y=pr.dot(cd),E=mr.dot(cd);if(E>=0&&y<=E)return i.copy(u);const C=y*p-m*E;if(C<=0&&p>=0&&E<=0)return h=p/(p-E),i.copy(s).addScaledVector(mr,h);const b=g*E-y*x;if(b<=0&&x-g>=0&&y-E>=0)return Gx.subVectors(u,l),h=(x-g)/(x-g+(y-E)),i.copy(l).addScaledVector(Gx,h);const _=1/(b+C+S);return d=C*_,h=S*_,i.copy(s).addScaledVector(pr,d).addScaledVector(mr,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ig={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xa={h:0,s:0,l:0},cc={h:0,s:0,l:0};function hd(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class At{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=pi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ut.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Ut.workingColorSpace){return this.r=t,this.g=i,this.b=s,Ut.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Ut.workingColorSpace){if(t=dy(t,1),i=Et(i,0,1),s=Et(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,d=2*s-u;this.r=hd(d,u,t+1/3),this.g=hd(d,u,t),this.b=hd(d,u,t-1/3)}return Ut.colorSpaceToWorking(this,l),this}setStyle(t,i=pi){function s(u){u!==void 0&&parseFloat(u)<1&&lt("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:lt("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);lt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=pi){const s=Ig[t.toLowerCase()];return s!==void 0?this.setHex(s,i):lt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ha(t.r),this.g=ha(t.g),this.b=ha(t.b),this}copyLinearToSRGB(t){return this.r=yr(t.r),this.g=yr(t.g),this.b=yr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=pi){return Ut.workingToColorSpace(Nn.copy(this),t),Math.round(Et(Nn.r*255,0,255))*65536+Math.round(Et(Nn.g*255,0,255))*256+Math.round(Et(Nn.b*255,0,255))}getHexString(t=pi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ut.workingColorSpace){Ut.workingToColorSpace(Nn.copy(this),i);const s=Nn.r,l=Nn.g,u=Nn.b,d=Math.max(s,l,u),h=Math.min(s,l,u);let m,p;const g=(h+d)/2;if(h===d)m=0,p=0;else{const x=d-h;switch(p=g<=.5?x/(d+h):x/(2-d-h),d){case s:m=(l-u)/x+(l<u?6:0);break;case l:m=(u-s)/x+2;break;case u:m=(s-l)/x+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,i=Ut.workingColorSpace){return Ut.workingToColorSpace(Nn.copy(this),i),t.r=Nn.r,t.g=Nn.g,t.b=Nn.b,t}getStyle(t=pi){Ut.workingToColorSpace(Nn.copy(this),t);const i=Nn.r,s=Nn.g,l=Nn.b;return t!==pi?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(Xa),this.setHSL(Xa.h+t,Xa.s+i,Xa.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(Xa),t.getHSL(cc);const s=Zf(Xa.h,cc.h,i),l=Zf(Xa.s,cc.s,i),u=Zf(Xa.l,cc.l,i);return this.setHSL(s,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nn=new At;At.NAMES=Ig;let Ry=0;class Go extends Dr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ry++}),this.uuid=Bo(),this.name="",this.type="Material",this.blending=Sr,this.side=Qa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cd,this.blendDst=wd,this.blendEquation=Ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new At(0,0,0),this.blendAlpha=0,this.depthFunc=br,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rr,this.stencilZFail=rr,this.stencilZPass=rr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){lt(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){lt(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Sr&&(s.blending=this.blending),this.side!==Qa&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Cd&&(s.blendSrc=this.blendSrc),this.blendDst!==wd&&(s.blendDst=this.blendDst),this.blendEquation!==Ms&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==br&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rx&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==rr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==rr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const d=[];for(const h in u){const m=u[h];delete m.metadata,d.push(m)}return d}if(i){const u=l(t.textures),d=l(t.images);u.length>0&&(s.textures=u),d.length>0&&(s.images=d)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Ar extends Go{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.combine=Mg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const dn=new de,uc=new Lt;let Cy=0;class Ui{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Cy++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=Cx,this.updateRanges=[],this.gpuType=fa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)uc.fromBufferAttribute(this,i),uc.applyMatrix3(t),this.setXY(i,uc.x,uc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix3(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix4(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyNormalMatrix(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.transformDirection(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Ro(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=kn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Ro(i,this.array)),i}setX(t,i){return this.normalized&&(i=kn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Ro(i,this.array)),i}setY(t,i){return this.normalized&&(i=kn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Ro(i,this.array)),i}setZ(t,i){return this.normalized&&(i=kn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Ro(i,this.array)),i}setW(t,i){return this.normalized&&(i=kn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=kn(i,this.array),s=kn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=kn(i,this.array),s=kn(s,this.array),l=kn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,u){return t*=this.itemSize,this.normalized&&(i=kn(i,this.array),s=kn(s,this.array),l=kn(l,this.array),u=kn(u,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Cx&&(t.usage=this.usage),t}}class Fg extends Ui{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class Bg extends Ui{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class ai extends Ui{constructor(t,i,s){super(new Float32Array(t),i,s)}}let wy=0;const hi=new rn,pd=new Ln,xr=new de,ti=new Vo,No=new Vo,bn=new de;class zi extends Dr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wy++}),this.uuid=Bo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Og(t)?Bg:Fg)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new ft().getNormalMatrix(t);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return hi.makeRotationFromQuaternion(t),this.applyMatrix4(hi),this}rotateX(t){return hi.makeRotationX(t),this.applyMatrix4(hi),this}rotateY(t){return hi.makeRotationY(t),this.applyMatrix4(hi),this}rotateZ(t){return hi.makeRotationZ(t),this.applyMatrix4(hi),this}translate(t,i,s){return hi.makeTranslation(t,i,s),this.applyMatrix4(hi),this}scale(t,i,s){return hi.makeScale(t,i,s),this.applyMatrix4(hi),this}lookAt(t){return pd.lookAt(t),pd.updateMatrix(),this.applyMatrix4(pd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xr).negate(),this.translate(xr.x,xr.y,xr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,u=t.length;l<u;l++){const d=t[l];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new ai(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&lt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){sn("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new de(-1/0,-1/0,-1/0),new de(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];ti.setFromBufferAttribute(u),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&sn('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dh);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){sn("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new de,1/0);return}if(t){const s=this.boundingSphere.center;if(ti.setFromBufferAttribute(t),i)for(let u=0,d=i.length;u<d;u++){const h=i[u];No.setFromBufferAttribute(h),this.morphTargetsRelative?(bn.addVectors(ti.min,No.min),ti.expandByPoint(bn),bn.addVectors(ti.max,No.max),ti.expandByPoint(bn)):(ti.expandByPoint(No.min),ti.expandByPoint(No.max))}ti.getCenter(s);let l=0;for(let u=0,d=t.count;u<d;u++)bn.fromBufferAttribute(t,u),l=Math.max(l,s.distanceToSquared(bn));if(i)for(let u=0,d=i.length;u<d;u++){const h=i[u],m=this.morphTargetsRelative;for(let p=0,g=h.count;p<g;p++)bn.fromBufferAttribute(h,p),m&&(xr.fromBufferAttribute(t,p),bn.add(xr)),l=Math.max(l,s.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&sn('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){sn("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ui(new Float32Array(4*s.count),4));const d=this.getAttribute("tangent"),h=[],m=[];for(let ee=0;ee<s.count;ee++)h[ee]=new de,m[ee]=new de;const p=new de,g=new de,x=new de,S=new Lt,y=new Lt,E=new Lt,C=new de,b=new de;function _(ee,w,A){p.fromBufferAttribute(s,ee),g.fromBufferAttribute(s,w),x.fromBufferAttribute(s,A),S.fromBufferAttribute(u,ee),y.fromBufferAttribute(u,w),E.fromBufferAttribute(u,A),g.sub(p),x.sub(p),y.sub(S),E.sub(S);const V=1/(y.x*E.y-E.x*y.y);isFinite(V)&&(C.copy(g).multiplyScalar(E.y).addScaledVector(x,-y.y).multiplyScalar(V),b.copy(x).multiplyScalar(y.x).addScaledVector(g,-E.x).multiplyScalar(V),h[ee].add(C),h[w].add(C),h[A].add(C),m[ee].add(b),m[w].add(b),m[A].add(b))}let I=this.groups;I.length===0&&(I=[{start:0,count:t.count}]);for(let ee=0,w=I.length;ee<w;++ee){const A=I[ee],V=A.start,K=A.count;for(let le=V,Y=V+K;le<Y;le+=3)_(t.getX(le+0),t.getX(le+1),t.getX(le+2))}const U=new de,F=new de,H=new de,N=new de;function B(ee){H.fromBufferAttribute(l,ee),N.copy(H);const w=h[ee];U.copy(w),U.sub(H.multiplyScalar(H.dot(w))).normalize(),F.crossVectors(N,w);const V=F.dot(m[ee])<0?-1:1;d.setXYZW(ee,U.x,U.y,U.z,V)}for(let ee=0,w=I.length;ee<w;++ee){const A=I[ee],V=A.start,K=A.count;for(let le=V,Y=V+K;le<Y;le+=3)B(t.getX(le+0)),B(t.getX(le+1)),B(t.getX(le+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ui(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let S=0,y=s.count;S<y;S++)s.setXYZ(S,0,0,0);const l=new de,u=new de,d=new de,h=new de,m=new de,p=new de,g=new de,x=new de;if(t)for(let S=0,y=t.count;S<y;S+=3){const E=t.getX(S+0),C=t.getX(S+1),b=t.getX(S+2);l.fromBufferAttribute(i,E),u.fromBufferAttribute(i,C),d.fromBufferAttribute(i,b),g.subVectors(d,u),x.subVectors(l,u),g.cross(x),h.fromBufferAttribute(s,E),m.fromBufferAttribute(s,C),p.fromBufferAttribute(s,b),h.add(g),m.add(g),p.add(g),s.setXYZ(E,h.x,h.y,h.z),s.setXYZ(C,m.x,m.y,m.z),s.setXYZ(b,p.x,p.y,p.z)}else for(let S=0,y=i.count;S<y;S+=3)l.fromBufferAttribute(i,S+0),u.fromBufferAttribute(i,S+1),d.fromBufferAttribute(i,S+2),g.subVectors(d,u),x.subVectors(l,u),g.cross(x),s.setXYZ(S+0,g.x,g.y,g.z),s.setXYZ(S+1,g.x,g.y,g.z),s.setXYZ(S+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)bn.fromBufferAttribute(t,i),bn.normalize(),t.setXYZ(i,bn.x,bn.y,bn.z)}toNonIndexed(){function t(h,m){const p=h.array,g=h.itemSize,x=h.normalized,S=new p.constructor(m.length*g);let y=0,E=0;for(let C=0,b=m.length;C<b;C++){h.isInterleavedBufferAttribute?y=m[C]*h.data.stride+h.offset:y=m[C]*g;for(let _=0;_<g;_++)S[E++]=p[y++]}return new Ui(S,g,x)}if(this.index===null)return lt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new zi,s=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=t(m,s);i.setAttribute(h,p)}const u=this.morphAttributes;for(const h in u){const m=[],p=u[h];for(let g=0,x=p.length;g<x;g++){const S=p[g],y=t(S,s);m.push(y)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let x=0,S=p.length;x<S;x++){const y=p[x];g.push(y.toJSON(t.data))}g.length>0&&(l[m]=g,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const u=t.morphAttributes;for(const p in u){const g=[],x=u[p];for(let S=0,y=x.length;S<y;S++)g.push(x[S].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let p=0,g=d.length;p<g;p++){const x=d[p];this.addGroup(x.start,x.count,x.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const kx=new rn,_s=new Sy,fc=new Dh,Xx=new de,dc=new de,hc=new de,pc=new de,md=new de,mc=new de,jx=new de,xc=new de;class Un extends Ln{constructor(t=new zi,i=new Ar){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(u&&h){mc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const g=h[m],x=u[m];g!==0&&(md.fromBufferAttribute(x,t),d?mc.addScaledVector(md,g):mc.addScaledVector(md.sub(i),g))}i.add(mc)}return i}raycast(t,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),fc.copy(s.boundingSphere),fc.applyMatrix4(u),_s.copy(t.ray).recast(t.near),!(fc.containsPoint(_s.origin)===!1&&(_s.intersectSphere(fc,Xx)===null||_s.origin.distanceToSquared(Xx)>(t.far-t.near)**2))&&(kx.copy(u).invert(),_s.copy(t.ray).applyMatrix4(kx),!(s.boundingBox!==null&&_s.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,_s)))}_computeIntersections(t,i,s){let l;const u=this.geometry,d=this.material,h=u.index,m=u.attributes.position,p=u.attributes.uv,g=u.attributes.uv1,x=u.attributes.normal,S=u.groups,y=u.drawRange;if(h!==null)if(Array.isArray(d))for(let E=0,C=S.length;E<C;E++){const b=S[E],_=d[b.materialIndex],I=Math.max(b.start,y.start),U=Math.min(h.count,Math.min(b.start+b.count,y.start+y.count));for(let F=I,H=U;F<H;F+=3){const N=h.getX(F),B=h.getX(F+1),ee=h.getX(F+2);l=gc(this,_,t,s,p,g,x,N,B,ee),l&&(l.faceIndex=Math.floor(F/3),l.face.materialIndex=b.materialIndex,i.push(l))}}else{const E=Math.max(0,y.start),C=Math.min(h.count,y.start+y.count);for(let b=E,_=C;b<_;b+=3){const I=h.getX(b),U=h.getX(b+1),F=h.getX(b+2);l=gc(this,d,t,s,p,g,x,I,U,F),l&&(l.faceIndex=Math.floor(b/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let E=0,C=S.length;E<C;E++){const b=S[E],_=d[b.materialIndex],I=Math.max(b.start,y.start),U=Math.min(m.count,Math.min(b.start+b.count,y.start+y.count));for(let F=I,H=U;F<H;F+=3){const N=F,B=F+1,ee=F+2;l=gc(this,_,t,s,p,g,x,N,B,ee),l&&(l.faceIndex=Math.floor(F/3),l.face.materialIndex=b.materialIndex,i.push(l))}}else{const E=Math.max(0,y.start),C=Math.min(m.count,y.start+y.count);for(let b=E,_=C;b<_;b+=3){const I=b,U=b+1,F=b+2;l=gc(this,d,t,s,p,g,x,I,U,F),l&&(l.faceIndex=Math.floor(b/3),i.push(l))}}}}function Dy(o,t,i,s,l,u,d,h){let m;if(t.side===Xn?m=s.intersectTriangle(d,u,l,!0,h):m=s.intersectTriangle(l,u,d,t.side===Qa,h),m===null)return null;xc.copy(h),xc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(xc);return p<i.near||p>i.far?null:{distance:p,point:xc.clone(),object:o}}function gc(o,t,i,s,l,u,d,h,m,p){o.getVertexPosition(h,dc),o.getVertexPosition(m,hc),o.getVertexPosition(p,pc);const g=Dy(o,t,i,s,dc,hc,pc,jx);if(g){const x=new de;Mi.getBarycoord(jx,dc,hc,pc,x),l&&(g.uv=Mi.getInterpolatedAttribute(l,h,m,p,x,new Lt)),u&&(g.uv1=Mi.getInterpolatedAttribute(u,h,m,p,x,new Lt)),d&&(g.normal=Mi.getInterpolatedAttribute(d,h,m,p,x,new de),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const S={a:h,b:m,c:p,normal:new de,materialIndex:0};Mi.getNormal(dc,hc,pc,S.normal),g.face=S,g.barycoord=x}return g}class ko extends zi{constructor(t=1,i=1,s=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:d};const h=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const m=[],p=[],g=[],x=[];let S=0,y=0;E("z","y","x",-1,-1,s,i,t,d,u,0),E("z","y","x",1,-1,s,i,-t,d,u,1),E("x","z","y",1,1,t,s,i,l,d,2),E("x","z","y",1,-1,t,s,-i,l,d,3),E("x","y","z",1,-1,t,i,s,l,u,4),E("x","y","z",-1,-1,t,i,-s,l,u,5),this.setIndex(m),this.setAttribute("position",new ai(p,3)),this.setAttribute("normal",new ai(g,3)),this.setAttribute("uv",new ai(x,2));function E(C,b,_,I,U,F,H,N,B,ee,w){const A=F/B,V=H/ee,K=F/2,le=H/2,Y=N/2,$=B+1,z=ee+1;let W=0,L=0;const X=new de;for(let ne=0;ne<z;ne++){const O=ne*V-le;for(let Z=0;Z<$;Z++){const me=Z*A-K;X[C]=me*I,X[b]=O*U,X[_]=Y,p.push(X.x,X.y,X.z),X[C]=0,X[b]=0,X[_]=N>0?1:-1,g.push(X.x,X.y,X.z),x.push(Z/B),x.push(1-ne/ee),W+=1}}for(let ne=0;ne<ee;ne++)for(let O=0;O<B;O++){const Z=S+O+$*ne,me=S+O+$*(ne+1),ye=S+(O+1)+$*(ne+1),Ae=S+(O+1)+$*ne;m.push(Z,me,Ae),m.push(me,ye,Ae),L+=6}h.addGroup(y,L,w),y+=L,S+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ko(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Rr(o){const t={};for(const i in o){t[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(lt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function zn(o){const t={};for(let i=0;i<o.length;i++){const s=Rr(o[i]);for(const l in s)t[l]=s[l]}return t}function Ny(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function Hg(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ut.workingColorSpace}const Uy={clone:Rr,merge:zn};var Ly=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Oy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pa extends Go{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ly,this.fragmentShader=Oy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Rr(t.uniforms),this.uniformsGroups=Ny(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class Vg extends Ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rn,this.projectionMatrix=new rn,this.projectionMatrixInverse=new rn,this.coordinateSystem=Ni,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ja=new de,qx=new Lt,Wx=new Lt;class ni extends Vg{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=mh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Yf*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return mh*2*Math.atan(Math.tan(Yf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){ja.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ja.x,ja.y).multiplyScalar(-t/ja.z),ja.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ja.x,ja.y).multiplyScalar(-t/ja.z)}getViewSize(t,i){return this.getViewBounds(t,qx,Wx),i.subVectors(Wx,qx)}setViewOffset(t,i,s,l,u,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Yf*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;u+=d.offsetX*l/m,i-=d.offsetY*s/p,l*=d.width/m,s*=d.height/p}const h=this.filmOffset;h!==0&&(u+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const gr=-90,_r=1;class zy extends Ln{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ni(gr,_r,t,i);l.layers=this.layers,this.add(l);const u=new ni(gr,_r,t,i);u.layers=this.layers,this.add(u);const d=new ni(gr,_r,t,i);d.layers=this.layers,this.add(d);const h=new ni(gr,_r,t,i);h.layers=this.layers,this.add(h);const m=new ni(gr,_r,t,i);m.layers=this.layers,this.add(m);const p=new ni(gr,_r,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,u,d,h,m]=i;for(const p of i)this.remove(p);if(t===Ni)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Rc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,d,h,m,p,g]=this.children,x=t.getRenderTarget(),S=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const C=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,u),t.setRenderTarget(s,1,l),t.render(i,d),t.setRenderTarget(s,2,l),t.render(i,h),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=C,t.setRenderTarget(s,5,l),t.render(i,g),t.setRenderTarget(x,S,y),t.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class Gg extends Pn{constructor(t=[],i=Mr,s,l,u,d,h,m,p,g){super(t,i,s,l,u,d,h,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Py extends Rs{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new Gg(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new ko(5,5,5),u=new pa({name:"CubemapFromEquirect",uniforms:Rr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Xn,blending:da});u.uniforms.tEquirect.value=i;const d=new Un(l,u),h=i.minFilter;return i.minFilter===Ts&&(i.minFilter=mi),new zy(1,10,this).update(t,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const u=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,s,l);t.setRenderTarget(u)}}class Wa extends Ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Iy={type:"move"};class xd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new de,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new de),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new de,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new de),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,u=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){d=!0;for(const C of t.hand.values()){const b=i.getJointPose(C,s),_=this._getHandJoint(p,C);b!==null&&(_.matrix.fromArray(b.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=b.radius),_.visible=b!==null}const g=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],S=g.position.distanceTo(x.position),y=.02,E=.005;p.inputState.pinching&&S>y+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&S<=y-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,s),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(Iy)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Wa;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class kg extends Ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Oi,this.environmentIntensity=1,this.environmentRotation=new Oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class Fy extends Pn{constructor(t=null,i=1,s=1,l,u,d,h,m,p=ii,g=ii,x,S){super(null,d,h,m,p,g,l,u,x,S),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const gd=new de,By=new de,Hy=new ft;class bs{constructor(t=new de(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=gd.subVectors(s,i).cross(By.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(gd),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(s,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||Hy.getNormalMatrix(t),l=this.coplanarPoint(gd).applyMatrix4(t),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vs=new Dh,Vy=new Lt(.5,.5),_c=new de;class Nh{constructor(t=new bs,i=new bs,s=new bs,l=new bs,u=new bs,d=new bs){this.planes=[t,i,s,l,u,d]}set(t,i,s,l,u,d){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(s),h[3].copy(l),h[4].copy(u),h[5].copy(d),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Ni,s=!1){const l=this.planes,u=t.elements,d=u[0],h=u[1],m=u[2],p=u[3],g=u[4],x=u[5],S=u[6],y=u[7],E=u[8],C=u[9],b=u[10],_=u[11],I=u[12],U=u[13],F=u[14],H=u[15];if(l[0].setComponents(p-d,y-g,_-E,H-I).normalize(),l[1].setComponents(p+d,y+g,_+E,H+I).normalize(),l[2].setComponents(p+h,y+x,_+C,H+U).normalize(),l[3].setComponents(p-h,y-x,_-C,H-U).normalize(),s)l[4].setComponents(m,S,b,F).normalize(),l[5].setComponents(p-m,y-S,_-b,H-F).normalize();else if(l[4].setComponents(p-m,y-S,_-b,H-F).normalize(),i===Ni)l[5].setComponents(p+m,y+S,_+b,H+F).normalize();else if(i===Rc)l[5].setComponents(m,S,b,F).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),vs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),vs.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(vs)}intersectsSprite(t){vs.center.set(0,0,0);const i=Vy.distanceTo(t.center);return vs.radius=.7071067811865476+i,vs.applyMatrix4(t.matrixWorld),this.intersectsSphere(vs)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(_c.x=l.normal.x>0?t.max.x:t.min.x,_c.y=l.normal.y>0?t.max.y:t.min.y,_c.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(_c)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Xg extends Pn{constructor(t,i,s=As,l,u,d,h=ii,m=ii,p,g=Po,x=1){if(g!==Po&&g!==Io)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:t,height:i,depth:x};super(S,l,u,d,h,m,g,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new wh(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class jg extends Pn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Uh extends zi{constructor(t=1,i=1,s=1,l=32,u=1,d=!1,h=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:l,heightSegments:u,openEnded:d,thetaStart:h,thetaLength:m};const p=this;l=Math.floor(l),u=Math.floor(u);const g=[],x=[],S=[],y=[];let E=0;const C=[],b=s/2;let _=0;I(),d===!1&&(t>0&&U(!0),i>0&&U(!1)),this.setIndex(g),this.setAttribute("position",new ai(x,3)),this.setAttribute("normal",new ai(S,3)),this.setAttribute("uv",new ai(y,2));function I(){const F=new de,H=new de;let N=0;const B=(i-t)/s;for(let ee=0;ee<=u;ee++){const w=[],A=ee/u,V=A*(i-t)+t;for(let K=0;K<=l;K++){const le=K/l,Y=le*m+h,$=Math.sin(Y),z=Math.cos(Y);H.x=V*$,H.y=-A*s+b,H.z=V*z,x.push(H.x,H.y,H.z),F.set($,B,z).normalize(),S.push(F.x,F.y,F.z),y.push(le,1-A),w.push(E++)}C.push(w)}for(let ee=0;ee<l;ee++)for(let w=0;w<u;w++){const A=C[w][ee],V=C[w+1][ee],K=C[w+1][ee+1],le=C[w][ee+1];(t>0||w!==0)&&(g.push(A,V,le),N+=3),(i>0||w!==u-1)&&(g.push(V,K,le),N+=3)}p.addGroup(_,N,0),_+=N}function U(F){const H=E,N=new Lt,B=new de;let ee=0;const w=F===!0?t:i,A=F===!0?1:-1;for(let K=1;K<=l;K++)x.push(0,b*A,0),S.push(0,A,0),y.push(.5,.5),E++;const V=E;for(let K=0;K<=l;K++){const Y=K/l*m+h,$=Math.cos(Y),z=Math.sin(Y);B.x=w*z,B.y=b*A,B.z=w*$,x.push(B.x,B.y,B.z),S.push(0,A,0),N.x=$*.5+.5,N.y=z*.5*A+.5,y.push(N.x,N.y),E++}for(let K=0;K<l;K++){const le=H+K,Y=V+K;F===!0?g.push(Y,Y+1,le):g.push(Y+1,Y,le),ee+=3}p.addGroup(_,ee,F===!0?1:2),_+=ee}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Uh(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Dc extends Uh{constructor(t=1,i=1,s=32,l=1,u=!1,d=0,h=Math.PI*2){super(0,t,i,s,l,u,d,h),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:s,heightSegments:l,openEnded:u,thetaStart:d,thetaLength:h}}static fromJSON(t){return new Dc(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Nc extends zi{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const u=t/2,d=i/2,h=Math.floor(s),m=Math.floor(l),p=h+1,g=m+1,x=t/h,S=i/m,y=[],E=[],C=[],b=[];for(let _=0;_<g;_++){const I=_*S-d;for(let U=0;U<p;U++){const F=U*x-u;E.push(F,-I,0),C.push(0,0,1),b.push(U/h),b.push(1-_/m)}}for(let _=0;_<m;_++)for(let I=0;I<h;I++){const U=I+p*_,F=I+p*(_+1),H=I+1+p*(_+1),N=I+1+p*_;y.push(U,F,N),y.push(F,H,N)}this.setIndex(y),this.setAttribute("position",new ai(E,3)),this.setAttribute("normal",new ai(C,3)),this.setAttribute("uv",new ai(b,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nc(t.width,t.height,t.widthSegments,t.heightSegments)}}class Cr extends zi{constructor(t=1,i=32,s=16,l=0,u=Math.PI*2,d=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:u,thetaStart:d,thetaLength:h},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(d+h,Math.PI);let p=0;const g=[],x=new de,S=new de,y=[],E=[],C=[],b=[];for(let _=0;_<=s;_++){const I=[],U=_/s;let F=0;_===0&&d===0?F=.5/i:_===s&&m===Math.PI&&(F=-.5/i);for(let H=0;H<=i;H++){const N=H/i;x.x=-t*Math.cos(l+N*u)*Math.sin(d+U*h),x.y=t*Math.cos(d+U*h),x.z=t*Math.sin(l+N*u)*Math.sin(d+U*h),E.push(x.x,x.y,x.z),S.copy(x).normalize(),C.push(S.x,S.y,S.z),b.push(N+F,1-U),I.push(p++)}g.push(I)}for(let _=0;_<s;_++)for(let I=0;I<i;I++){const U=g[_][I+1],F=g[_][I],H=g[_+1][I],N=g[_+1][I+1];(_!==0||d>0)&&y.push(U,F,N),(_!==s-1||m<Math.PI)&&y.push(F,H,N)}this.setIndex(y),this.setAttribute("position",new ai(E,3)),this.setAttribute("normal",new ai(C,3)),this.setAttribute("uv",new ai(b,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class xh extends Go{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new At(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ug,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Gy extends Go{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ey,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ky extends Go{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class qg extends Ln{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new At(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const _d=new rn,Yx=new de,Zx=new de;class Xy{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Lt(512,512),this.mapType=Li,this.map=null,this.mapPass=null,this.matrix=new rn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Nh,this._frameExtents=new Lt(1,1),this._viewportCount=1,this._viewports=[new tn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;Yx.setFromMatrixPosition(t.matrixWorld),i.position.copy(Yx),Zx.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(Zx),i.updateMatrixWorld(),_d.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_d,i.coordinateSystem,i.reversedDepth),i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(_d)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Wg extends Vg{constructor(t=-1,i=1,s=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-t,d=s+t,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,d=u+p*this.view.width,h-=g*this.view.offsetY,m=h-g*this.view.height}this.projectionMatrix.makeOrthographic(u,d,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class jy extends Xy{constructor(){super(new Wg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Yg extends qg{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ln.DEFAULT_UP),this.updateMatrix(),this.target=new Ln,this.shadow=new jy}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Zg extends qg{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class qy extends ni{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Kg{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}function Kx(o,t,i,s){const l=Wy(s);switch(i){case wg:return o*t;case Ng:return o*t/l.components*l.byteLength;case Th:return o*t/l.components*l.byteLength;case Ah:return o*t*2/l.components*l.byteLength;case Rh:return o*t*2/l.components*l.byteLength;case Dg:return o*t*3/l.components*l.byteLength;case Ei:return o*t*4/l.components*l.byteLength;case Ch:return o*t*4/l.components*l.byteLength;case yc:case bc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Mc:case Ec:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Gd:case Xd:return Math.max(o,16)*Math.max(t,8)/4;case Vd:case kd:return Math.max(o,8)*Math.max(t,8)/2;case jd:case qd:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Wd:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Yd:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Zd:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case Kd:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case Qd:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case Jd:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case $d:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case eh:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case th:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case nh:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case ih:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case ah:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case sh:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case rh:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case oh:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case lh:case ch:case uh:return Math.ceil(o/4)*Math.ceil(t/4)*16;case fh:case dh:return Math.ceil(o/4)*Math.ceil(t/4)*8;case hh:case ph:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Wy(o){switch(o){case Li:case Tg:return{byteLength:1,components:1};case Oo:case Ag:case wr:return{byteLength:2,components:1};case Mh:case Eh:return{byteLength:2,components:4};case As:case bh:case fa:return{byteLength:4,components:1};case Rg:case Cg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yh}}));typeof window<"u"&&(window.__THREE__?lt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yh);function Qg(){let o=null,t=!1,i=null,s=null;function l(u,d){i(u,d),s=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function Yy(o){const t=new WeakMap;function i(h,m){const p=h.array,g=h.usage,x=p.byteLength,S=o.createBuffer();o.bindBuffer(m,S),o.bufferData(m,p,g),h.onUploadCallback();let y;if(p instanceof Float32Array)y=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=o.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=o.SHORT;else if(p instanceof Uint32Array)y=o.UNSIGNED_INT;else if(p instanceof Int32Array)y=o.INT;else if(p instanceof Int8Array)y=o.BYTE;else if(p instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:x}}function s(h,m,p){const g=m.array,x=m.updateRanges;if(o.bindBuffer(p,h),x.length===0)o.bufferSubData(p,0,g);else{x.sort((y,E)=>y.start-E.start);let S=0;for(let y=1;y<x.length;y++){const E=x[S],C=x[y];C.start<=E.start+E.count+1?E.count=Math.max(E.count,C.start+C.count-E.start):(++S,x[S]=C)}x.length=S+1;for(let y=0,E=x.length;y<E;y++){const C=x[y];o.bufferSubData(p,C.start*g.BYTES_PER_ELEMENT,g,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(o.deleteBuffer(m.buffer),t.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=t.get(h);(!g||g.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,h,m),p.version=h.version}}return{get:l,remove:u,update:d}}var Zy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ky=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Qy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$y=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,eb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,nb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ib=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,ab=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ob=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,lb=`#ifdef USE_IRIDESCENCE
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
#endif`,cb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ub=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,fb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,db=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,mb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,gb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,_b=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,vb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
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
#endif`,Sb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,yb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Eb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ab=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Rb=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Cb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,wb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Db=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Nb=`#ifdef USE_ENVMAP
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
#endif`,Ub=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ob=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ib=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Fb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,Vb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Gb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
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
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Wb=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
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
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,Yb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Zb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Kb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$b=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,iM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,aM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,oM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,fM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,hM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,pM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,_M=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,SM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,MM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,EM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,TM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,AM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,RM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,CM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,DM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,NM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,UM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
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
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,LM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,OM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,PM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,IM=`#ifdef USE_SKINNING
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
#endif`,FM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,BM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,HM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,VM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,GM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,kM=`#ifdef USE_TRANSMISSION
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
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
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
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,XM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,WM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const YM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ZM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,QM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$M=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,t1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,n1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,i1=`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,a1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,s1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,o1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,l1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,c1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,f1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,h1=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,m1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,x1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,g1=`#define PHONG
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
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,v1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,S1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,y1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
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
}`,M1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,E1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,T1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,A1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,R1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pt={alphahash_fragment:Zy,alphahash_pars_fragment:Ky,alphamap_fragment:Qy,alphamap_pars_fragment:Jy,alphatest_fragment:$y,alphatest_pars_fragment:eb,aomap_fragment:tb,aomap_pars_fragment:nb,batching_pars_vertex:ib,batching_vertex:ab,begin_vertex:sb,beginnormal_vertex:rb,bsdfs:ob,iridescence_fragment:lb,bumpmap_pars_fragment:cb,clipping_planes_fragment:ub,clipping_planes_pars_fragment:fb,clipping_planes_pars_vertex:db,clipping_planes_vertex:hb,color_fragment:pb,color_pars_fragment:mb,color_pars_vertex:xb,color_vertex:gb,common:_b,cube_uv_reflection_fragment:vb,defaultnormal_vertex:Sb,displacementmap_pars_vertex:yb,displacementmap_vertex:bb,emissivemap_fragment:Mb,emissivemap_pars_fragment:Eb,colorspace_fragment:Tb,colorspace_pars_fragment:Ab,envmap_fragment:Rb,envmap_common_pars_fragment:Cb,envmap_pars_fragment:wb,envmap_pars_vertex:Db,envmap_physical_pars_fragment:Vb,envmap_vertex:Nb,fog_vertex:Ub,fog_pars_vertex:Lb,fog_fragment:Ob,fog_pars_fragment:zb,gradientmap_pars_fragment:Pb,lightmap_pars_fragment:Ib,lights_lambert_fragment:Fb,lights_lambert_pars_fragment:Bb,lights_pars_begin:Hb,lights_toon_fragment:Gb,lights_toon_pars_fragment:kb,lights_phong_fragment:Xb,lights_phong_pars_fragment:jb,lights_physical_fragment:qb,lights_physical_pars_fragment:Wb,lights_fragment_begin:Yb,lights_fragment_maps:Zb,lights_fragment_end:Kb,logdepthbuf_fragment:Qb,logdepthbuf_pars_fragment:Jb,logdepthbuf_pars_vertex:$b,logdepthbuf_vertex:eM,map_fragment:tM,map_pars_fragment:nM,map_particle_fragment:iM,map_particle_pars_fragment:aM,metalnessmap_fragment:sM,metalnessmap_pars_fragment:rM,morphinstance_vertex:oM,morphcolor_vertex:lM,morphnormal_vertex:cM,morphtarget_pars_vertex:uM,morphtarget_vertex:fM,normal_fragment_begin:dM,normal_fragment_maps:hM,normal_pars_fragment:pM,normal_pars_vertex:mM,normal_vertex:xM,normalmap_pars_fragment:gM,clearcoat_normal_fragment_begin:_M,clearcoat_normal_fragment_maps:vM,clearcoat_pars_fragment:SM,iridescence_pars_fragment:yM,opaque_fragment:bM,packing:MM,premultiplied_alpha_fragment:EM,project_vertex:TM,dithering_fragment:AM,dithering_pars_fragment:RM,roughnessmap_fragment:CM,roughnessmap_pars_fragment:wM,shadowmap_pars_fragment:DM,shadowmap_pars_vertex:NM,shadowmap_vertex:UM,shadowmask_pars_fragment:LM,skinbase_vertex:OM,skinning_pars_vertex:zM,skinning_vertex:PM,skinnormal_vertex:IM,specularmap_fragment:FM,specularmap_pars_fragment:BM,tonemapping_fragment:HM,tonemapping_pars_fragment:VM,transmission_fragment:GM,transmission_pars_fragment:kM,uv_pars_fragment:XM,uv_pars_vertex:jM,uv_vertex:qM,worldpos_vertex:WM,background_vert:YM,background_frag:ZM,backgroundCube_vert:KM,backgroundCube_frag:QM,cube_vert:JM,cube_frag:$M,depth_vert:e1,depth_frag:t1,distanceRGBA_vert:n1,distanceRGBA_frag:i1,equirect_vert:a1,equirect_frag:s1,linedashed_vert:r1,linedashed_frag:o1,meshbasic_vert:l1,meshbasic_frag:c1,meshlambert_vert:u1,meshlambert_frag:f1,meshmatcap_vert:d1,meshmatcap_frag:h1,meshnormal_vert:p1,meshnormal_frag:m1,meshphong_vert:x1,meshphong_frag:g1,meshphysical_vert:_1,meshphysical_frag:v1,meshtoon_vert:S1,meshtoon_frag:y1,points_vert:b1,points_frag:M1,shadow_vert:E1,shadow_frag:T1,sprite_vert:A1,sprite_frag:R1},Oe={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},Di={basic:{uniforms:zn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:zn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new At(0)}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:zn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:zn([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:zn([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new At(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:zn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:zn([Oe.points,Oe.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:zn([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:zn([Oe.common,Oe.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:zn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:zn([Oe.sprite,Oe.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distanceRGBA:{uniforms:zn([Oe.common,Oe.displacementmap,{referencePosition:{value:new de},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distanceRGBA_vert,fragmentShader:pt.distanceRGBA_frag},shadow:{uniforms:zn([Oe.lights,Oe.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};Di.physical={uniforms:zn([Di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const vc={r:0,b:0,g:0},Ss=new Oi,C1=new rn;function w1(o,t,i,s,l,u,d){const h=new At(0);let m=u===!0?0:1,p,g,x=null,S=0,y=null;function E(U){let F=U.isScene===!0?U.background:null;return F&&F.isTexture&&(F=(U.backgroundBlurriness>0?i:t).get(F)),F}function C(U){let F=!1;const H=E(U);H===null?_(h,m):H&&H.isColor&&(_(H,1),F=!0);const N=o.xr.getEnvironmentBlendMode();N==="additive"?s.buffers.color.setClear(0,0,0,1,d):N==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,d),(o.autoClear||F)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function b(U,F){const H=E(F);H&&(H.isCubeTexture||H.mapping===wc)?(g===void 0&&(g=new Un(new ko(1,1,1),new pa({name:"BackgroundCubeMaterial",uniforms:Rr(Di.backgroundCube.uniforms),vertexShader:Di.backgroundCube.vertexShader,fragmentShader:Di.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(N,B,ee){this.matrixWorld.copyPosition(ee.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),Ss.copy(F.backgroundRotation),Ss.x*=-1,Ss.y*=-1,Ss.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1&&(Ss.y*=-1,Ss.z*=-1),g.material.uniforms.envMap.value=H,g.material.uniforms.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=F.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(C1.makeRotationFromEuler(Ss)),g.material.toneMapped=Ut.getTransfer(H.colorSpace)!==kt,(x!==H||S!==H.version||y!==o.toneMapping)&&(g.material.needsUpdate=!0,x=H,S=H.version,y=o.toneMapping),g.layers.enableAll(),U.unshift(g,g.geometry,g.material,0,0,null)):H&&H.isTexture&&(p===void 0&&(p=new Un(new Nc(2,2),new pa({name:"BackgroundMaterial",uniforms:Rr(Di.background.uniforms),vertexShader:Di.background.vertexShader,fragmentShader:Di.background.fragmentShader,side:Qa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=H,p.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,p.material.toneMapped=Ut.getTransfer(H.colorSpace)!==kt,H.matrixAutoUpdate===!0&&H.updateMatrix(),p.material.uniforms.uvTransform.value.copy(H.matrix),(x!==H||S!==H.version||y!==o.toneMapping)&&(p.material.needsUpdate=!0,x=H,S=H.version,y=o.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function _(U,F){U.getRGB(vc,Hg(o)),s.buffers.color.setClear(vc.r,vc.g,vc.b,F,d)}function I(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(U,F=1){h.set(U),m=F,_(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(U){m=U,_(h,m)},render:C,addToRenderList:b,dispose:I}}function D1(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=S(null);let u=l,d=!1;function h(A,V,K,le,Y){let $=!1;const z=x(le,K,V);u!==z&&(u=z,p(u.object)),$=y(A,le,K,Y),$&&E(A,le,K,Y),Y!==null&&t.update(Y,o.ELEMENT_ARRAY_BUFFER),($||d)&&(d=!1,F(A,V,K,le),Y!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function m(){return o.createVertexArray()}function p(A){return o.bindVertexArray(A)}function g(A){return o.deleteVertexArray(A)}function x(A,V,K){const le=K.wireframe===!0;let Y=s[A.id];Y===void 0&&(Y={},s[A.id]=Y);let $=Y[V.id];$===void 0&&($={},Y[V.id]=$);let z=$[le];return z===void 0&&(z=S(m()),$[le]=z),z}function S(A){const V=[],K=[],le=[];for(let Y=0;Y<i;Y++)V[Y]=0,K[Y]=0,le[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:K,attributeDivisors:le,object:A,attributes:{},index:null}}function y(A,V,K,le){const Y=u.attributes,$=V.attributes;let z=0;const W=K.getAttributes();for(const L in W)if(W[L].location>=0){const ne=Y[L];let O=$[L];if(O===void 0&&(L==="instanceMatrix"&&A.instanceMatrix&&(O=A.instanceMatrix),L==="instanceColor"&&A.instanceColor&&(O=A.instanceColor)),ne===void 0||ne.attribute!==O||O&&ne.data!==O.data)return!0;z++}return u.attributesNum!==z||u.index!==le}function E(A,V,K,le){const Y={},$=V.attributes;let z=0;const W=K.getAttributes();for(const L in W)if(W[L].location>=0){let ne=$[L];ne===void 0&&(L==="instanceMatrix"&&A.instanceMatrix&&(ne=A.instanceMatrix),L==="instanceColor"&&A.instanceColor&&(ne=A.instanceColor));const O={};O.attribute=ne,ne&&ne.data&&(O.data=ne.data),Y[L]=O,z++}u.attributes=Y,u.attributesNum=z,u.index=le}function C(){const A=u.newAttributes;for(let V=0,K=A.length;V<K;V++)A[V]=0}function b(A){_(A,0)}function _(A,V){const K=u.newAttributes,le=u.enabledAttributes,Y=u.attributeDivisors;K[A]=1,le[A]===0&&(o.enableVertexAttribArray(A),le[A]=1),Y[A]!==V&&(o.vertexAttribDivisor(A,V),Y[A]=V)}function I(){const A=u.newAttributes,V=u.enabledAttributes;for(let K=0,le=V.length;K<le;K++)V[K]!==A[K]&&(o.disableVertexAttribArray(K),V[K]=0)}function U(A,V,K,le,Y,$,z){z===!0?o.vertexAttribIPointer(A,V,K,Y,$):o.vertexAttribPointer(A,V,K,le,Y,$)}function F(A,V,K,le){C();const Y=le.attributes,$=K.getAttributes(),z=V.defaultAttributeValues;for(const W in $){const L=$[W];if(L.location>=0){let X=Y[W];if(X===void 0&&(W==="instanceMatrix"&&A.instanceMatrix&&(X=A.instanceMatrix),W==="instanceColor"&&A.instanceColor&&(X=A.instanceColor)),X!==void 0){const ne=X.normalized,O=X.itemSize,Z=t.get(X);if(Z===void 0)continue;const me=Z.buffer,ye=Z.type,Ae=Z.bytesPerElement,ie=ye===o.INT||ye===o.UNSIGNED_INT||X.gpuType===bh;if(X.isInterleavedBufferAttribute){const he=X.data,De=he.stride,Be=X.offset;if(he.isInstancedInterleavedBuffer){for(let ke=0;ke<L.locationSize;ke++)_(L.location+ke,he.meshPerAttribute);A.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let ke=0;ke<L.locationSize;ke++)b(L.location+ke);o.bindBuffer(o.ARRAY_BUFFER,me);for(let ke=0;ke<L.locationSize;ke++)U(L.location+ke,O/L.locationSize,ye,ne,De*Ae,(Be+O/L.locationSize*ke)*Ae,ie)}else{if(X.isInstancedBufferAttribute){for(let he=0;he<L.locationSize;he++)_(L.location+he,X.meshPerAttribute);A.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let he=0;he<L.locationSize;he++)b(L.location+he);o.bindBuffer(o.ARRAY_BUFFER,me);for(let he=0;he<L.locationSize;he++)U(L.location+he,O/L.locationSize,ye,ne,O*Ae,O/L.locationSize*he*Ae,ie)}}else if(z!==void 0){const ne=z[W];if(ne!==void 0)switch(ne.length){case 2:o.vertexAttrib2fv(L.location,ne);break;case 3:o.vertexAttrib3fv(L.location,ne);break;case 4:o.vertexAttrib4fv(L.location,ne);break;default:o.vertexAttrib1fv(L.location,ne)}}}}I()}function H(){ee();for(const A in s){const V=s[A];for(const K in V){const le=V[K];for(const Y in le)g(le[Y].object),delete le[Y];delete V[K]}delete s[A]}}function N(A){if(s[A.id]===void 0)return;const V=s[A.id];for(const K in V){const le=V[K];for(const Y in le)g(le[Y].object),delete le[Y];delete V[K]}delete s[A.id]}function B(A){for(const V in s){const K=s[V];if(K[A.id]===void 0)continue;const le=K[A.id];for(const Y in le)g(le[Y].object),delete le[Y];delete K[A.id]}}function ee(){w(),d=!0,u!==l&&(u=l,p(u.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:ee,resetDefaultState:w,dispose:H,releaseStatesOfGeometry:N,releaseStatesOfProgram:B,initAttributes:C,enableAttribute:b,disableUnusedAttributes:I}}function N1(o,t,i){let s;function l(p){s=p}function u(p,g){o.drawArrays(s,p,g),i.update(g,s,1)}function d(p,g,x){x!==0&&(o.drawArraysInstanced(s,p,g,x),i.update(g,s,x))}function h(p,g,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,g,0,x);let y=0;for(let E=0;E<x;E++)y+=g[E];i.update(y,s,1)}function m(p,g,x,S){if(x===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<p.length;E++)d(p[E],g[E],S[E]);else{y.multiDrawArraysInstancedWEBGL(s,p,0,g,0,S,0,x);let E=0;for(let C=0;C<x;C++)E+=g[C]*S[C];i.update(E,s,1)}}this.setMode=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function U1(o,t,i,s){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const B=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(B){return!(B!==Ei&&s.convert(B)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(B){const ee=B===wr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(B!==Li&&s.convert(B)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==fa&&!ee)}function m(B){if(B==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(lt("WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const x=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),b=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),_=o.getParameter(o.MAX_VERTEX_ATTRIBS),I=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),U=o.getParameter(o.MAX_VARYING_VECTORS),F=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),H=E>0,N=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:x,reversedDepthBuffer:S,maxTextures:y,maxVertexTextures:E,maxTextureSize:C,maxCubemapSize:b,maxAttributes:_,maxVertexUniforms:I,maxVaryings:U,maxFragmentUniforms:F,vertexTextures:H,maxSamples:N}}function L1(o){const t=this;let i=null,s=0,l=!1,u=!1;const d=new bs,h=new ft,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,S){const y=x.length!==0||S||s!==0||l;return l=S,s=x.length,y},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(x,S){i=g(x,S,0)},this.setState=function(x,S,y){const E=x.clippingPlanes,C=x.clipIntersection,b=x.clipShadows,_=o.get(x);if(!l||E===null||E.length===0||u&&!b)u?g(null):p();else{const I=u?0:s,U=I*4;let F=_.clippingState||null;m.value=F,F=g(E,S,U,y);for(let H=0;H!==U;++H)F[H]=i[H];_.clippingState=F,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=I}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function g(x,S,y,E){const C=x!==null?x.length:0;let b=null;if(C!==0){if(b=m.value,E!==!0||b===null){const _=y+C*4,I=S.matrixWorldInverse;h.getNormalMatrix(I),(b===null||b.length<_)&&(b=new Float32Array(_));for(let U=0,F=y;U!==C;++U,F+=4)d.copy(x[U]).applyMatrix4(I,h),d.normal.toArray(b,F),b[F+3]=d.constant}m.value=b,m.needsUpdate=!0}return t.numPlanes=C,t.numIntersection=0,b}}function O1(o){let t=new WeakMap;function i(d,h){return h===Id?d.mapping=Mr:h===Fd&&(d.mapping=Er),d}function s(d){if(d&&d.isTexture){const h=d.mapping;if(h===Id||h===Fd)if(t.has(d)){const m=t.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new Py(m.height);return p.fromEquirectangularTexture(o,d),t.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function u(){t=new WeakMap}return{get:s,dispose:u}}const Ya=4,Qx=[.125,.215,.35,.446,.526,.582],Es=20,z1=256,Uo=new Wg,Jx=new At;let vd=null,Sd=0,yd=0,bd=!1;const P1=new de;class $x{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,u={}){const{size:d=256,position:h=P1}=u;vd=this._renderer.getRenderTarget(),Sd=this._renderer.getActiveCubeFace(),yd=this._renderer.getActiveMipmapLevel(),bd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ng(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(vd,Sd,yd),this._renderer.xr.enabled=bd,t.scissorTest=!1,vr(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Mr||t.mapping===Er?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),vd=this._renderer.getRenderTarget(),Sd=this._renderer.getActiveCubeFace(),yd=this._renderer.getActiveMipmapLevel(),bd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:mi,minFilter:mi,generateMipmaps:!1,type:wr,format:Ei,colorSpace:Tr,depthBuffer:!1},l=eg(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=eg(t,i,s);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=I1(u)),this._blurMaterial=B1(u,t,i)}return l}_compileMaterial(t){const i=new Un(new zi,t);this._renderer.compile(i,Uo)}_sceneToCubeUV(t,i,s,l,u){const m=new ni(90,1,i,s),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],x=this._renderer,S=x.autoClear,y=x.toneMapping;x.getClearColor(Jx),x.toneMapping=Ka,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(l),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Un(new ko,new Ar({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,b=C.material;let _=!1;const I=t.background;I?I.isColor&&(b.color.copy(I),t.background=null,_=!0):(b.color.copy(Jx),_=!0);for(let U=0;U<6;U++){const F=U%3;F===0?(m.up.set(0,p[U],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+g[U],u.y,u.z)):F===1?(m.up.set(0,0,p[U]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+g[U],u.z)):(m.up.set(0,p[U],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+g[U]));const H=this._cubeSize;vr(l,F*H,U>2?H:0,H,H),x.setRenderTarget(l),_&&x.render(C,m),x.render(t,m)}x.toneMapping=y,x.autoClear=S,t.background=I}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Mr||t.mapping===Er;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=ng()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tg());const u=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=u;const h=u.uniforms;h.envMap.value=t;const m=this._cubeSize;vr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(d,Uo)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(t,u-1,u);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,u=this._pingPongRenderTarget;if(this._ggxMaterial===null){const I=3*Math.max(this._cubeSize,16),U=4*this._cubeSize;this._ggxMaterial=F1(this._lodMax,I,U)}const d=this._ggxMaterial,h=this._lodMeshes[s];h.material=d;const m=d.uniforms,p=s/(this._lodMeshes.length-1),g=i/(this._lodMeshes.length-1),x=Math.sqrt(p*p-g*g),S=.05+p*.95,y=x*S,{_lodMax:E}=this,C=this._sizeLods[s],b=3*C*(s>E-Ya?s-E+Ya:0),_=4*(this._cubeSize-C);m.envMap.value=t.texture,m.roughness.value=y,m.mipInt.value=E-i,vr(u,b,_,3*C,2*C),l.setRenderTarget(u),l.render(h,Uo),m.envMap.value=u.texture,m.roughness.value=0,m.mipInt.value=E-s,vr(t,b,_,3*C,2*C),l.setRenderTarget(t),l.render(h,Uo)}_blur(t,i,s,l,u){const d=this._pingPongRenderTarget;this._halfBlur(t,d,i,s,l,"latitudinal",u),this._halfBlur(d,t,s,s,l,"longitudinal",u)}_halfBlur(t,i,s,l,u,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&sn("blur direction must be either latitudinal or longitudinal!");const g=3,x=this._lodMeshes[l];x.material=p;const S=p.uniforms,y=this._sizeLods[s]-1,E=isFinite(u)?Math.PI/(2*y):2*Math.PI/(2*Es-1),C=u/E,b=isFinite(u)?1+Math.floor(g*C):Es;b>Es&&lt(`sigmaRadians, ${u}, is too large and will clip, as it requested ${b} samples when the maximum is set to ${Es}`);const _=[];let I=0;for(let B=0;B<Es;++B){const ee=B/C,w=Math.exp(-ee*ee/2);_.push(w),B===0?I+=w:B<b&&(I+=2*w)}for(let B=0;B<_.length;B++)_[B]=_[B]/I;S.envMap.value=t.texture,S.samples.value=b,S.weights.value=_,S.latitudinal.value=d==="latitudinal",h&&(S.poleAxis.value=h);const{_lodMax:U}=this;S.dTheta.value=E,S.mipInt.value=U-s;const F=this._sizeLods[l],H=3*F*(l>U-Ya?l-U+Ya:0),N=4*(this._cubeSize-F);vr(i,H,N,3*F,2*F),m.setRenderTarget(i),m.render(x,Uo)}}function I1(o){const t=[],i=[],s=[];let l=o;const u=o-Ya+1+Qx.length;for(let d=0;d<u;d++){const h=Math.pow(2,l);t.push(h);let m=1/h;d>o-Ya?m=Qx[d-o+Ya-1]:d===0&&(m=0),i.push(m);const p=1/(h-2),g=-p,x=1+p,S=[g,g,x,g,x,x,g,g,x,x,g,x],y=6,E=6,C=3,b=2,_=1,I=new Float32Array(C*E*y),U=new Float32Array(b*E*y),F=new Float32Array(_*E*y);for(let N=0;N<y;N++){const B=N%3*2/3-1,ee=N>2?0:-1,w=[B,ee,0,B+2/3,ee,0,B+2/3,ee+1,0,B,ee,0,B+2/3,ee+1,0,B,ee+1,0];I.set(w,C*E*N),U.set(S,b*E*N);const A=[N,N,N,N,N,N];F.set(A,_*E*N)}const H=new zi;H.setAttribute("position",new Ui(I,C)),H.setAttribute("uv",new Ui(U,b)),H.setAttribute("faceIndex",new Ui(F,_)),s.push(new Un(H,null)),l>Ya&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function eg(o,t,i){const s=new Rs(o,t,i);return s.texture.mapping=wc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function vr(o,t,i,s,l){o.viewport.set(t,i,s,l),o.scissor.set(t,i,s,l)}function F1(o,t,i){return new pa({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:z1,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Uc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:da,depthTest:!1,depthWrite:!1})}function B1(o,t,i){const s=new Float32Array(Es),l=new de(0,1,0);return new pa({name:"SphericalGaussianBlur",defines:{n:Es,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Uc(),fragmentShader:`

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
		`,blending:da,depthTest:!1,depthWrite:!1})}function tg(){return new pa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Uc(),fragmentShader:`

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
		`,blending:da,depthTest:!1,depthWrite:!1})}function ng(){return new pa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:da,depthTest:!1,depthWrite:!1})}function Uc(){return`

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
	`}function H1(o){let t=new WeakMap,i=null;function s(h){if(h&&h.isTexture){const m=h.mapping,p=m===Id||m===Fd,g=m===Mr||m===Er;if(p||g){let x=t.get(h);const S=x!==void 0?x.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==S)return i===null&&(i=new $x(o)),x=p?i.fromEquirectangular(h,x):i.fromCubemap(h,x),x.texture.pmremVersion=h.pmremVersion,t.set(h,x),x.texture;if(x!==void 0)return x.texture;{const y=h.image;return p&&y&&y.height>0||g&&y&&l(y)?(i===null&&(i=new $x(o)),x=p?i.fromEquirectangular(h):i.fromCubemap(h),x.texture.pmremVersion=h.pmremVersion,t.set(h,x),h.addEventListener("dispose",u),x.texture):null}}}return h}function l(h){let m=0;const p=6;for(let g=0;g<p;g++)h[g]!==void 0&&m++;return m===p}function u(h){const m=h.target;m.removeEventListener("dispose",u);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function d(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function V1(o){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=o.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Fo("WebGLRenderer: "+s+" extension not supported."),l}}}function G1(o,t,i,s){const l={},u=new WeakMap;function d(x){const S=x.target;S.index!==null&&t.remove(S.index);for(const E in S.attributes)t.remove(S.attributes[E]);S.removeEventListener("dispose",d),delete l[S.id];const y=u.get(S);y&&(t.remove(y),u.delete(S)),s.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function h(x,S){return l[S.id]===!0||(S.addEventListener("dispose",d),l[S.id]=!0,i.memory.geometries++),S}function m(x){const S=x.attributes;for(const y in S)t.update(S[y],o.ARRAY_BUFFER)}function p(x){const S=[],y=x.index,E=x.attributes.position;let C=0;if(y!==null){const I=y.array;C=y.version;for(let U=0,F=I.length;U<F;U+=3){const H=I[U+0],N=I[U+1],B=I[U+2];S.push(H,N,N,B,B,H)}}else if(E!==void 0){const I=E.array;C=E.version;for(let U=0,F=I.length/3-1;U<F;U+=3){const H=U+0,N=U+1,B=U+2;S.push(H,N,N,B,B,H)}}else return;const b=new(Og(S)?Bg:Fg)(S,1);b.version=C;const _=u.get(x);_&&t.remove(_),u.set(x,b)}function g(x){const S=u.get(x);if(S){const y=x.index;y!==null&&S.version<y.version&&p(x)}else p(x);return u.get(x)}return{get:h,update:m,getWireframeAttribute:g}}function k1(o,t,i){let s;function l(S){s=S}let u,d;function h(S){u=S.type,d=S.bytesPerElement}function m(S,y){o.drawElements(s,y,u,S*d),i.update(y,s,1)}function p(S,y,E){E!==0&&(o.drawElementsInstanced(s,y,u,S*d,E),i.update(y,s,E))}function g(S,y,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,y,0,u,S,0,E);let b=0;for(let _=0;_<E;_++)b+=y[_];i.update(b,s,1)}function x(S,y,E,C){if(E===0)return;const b=t.get("WEBGL_multi_draw");if(b===null)for(let _=0;_<S.length;_++)p(S[_]/d,y[_],C[_]);else{b.multiDrawElementsInstancedWEBGL(s,y,0,u,S,0,C,0,E);let _=0;for(let I=0;I<E;I++)_+=y[I]*C[I];i.update(_,s,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=x}function X1(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(u/3);break;case o.LINES:i.lines+=h*(u/2);break;case o.LINE_STRIP:i.lines+=h*(u-1);break;case o.LINE_LOOP:i.lines+=h*u;break;case o.POINTS:i.points+=h*u;break;default:sn("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function j1(o,t,i){const s=new WeakMap,l=new tn;function u(d,h,m){const p=d.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=g!==void 0?g.length:0;let S=s.get(h);if(S===void 0||S.count!==x){let A=function(){ee.dispose(),s.delete(h),h.removeEventListener("dispose",A)};var y=A;S!==void 0&&S.texture.dispose();const E=h.morphAttributes.position!==void 0,C=h.morphAttributes.normal!==void 0,b=h.morphAttributes.color!==void 0,_=h.morphAttributes.position||[],I=h.morphAttributes.normal||[],U=h.morphAttributes.color||[];let F=0;E===!0&&(F=1),C===!0&&(F=2),b===!0&&(F=3);let H=h.attributes.position.count*F,N=1;H>t.maxTextureSize&&(N=Math.ceil(H/t.maxTextureSize),H=t.maxTextureSize);const B=new Float32Array(H*N*4*x),ee=new zg(B,H,N,x);ee.type=fa,ee.needsUpdate=!0;const w=F*4;for(let V=0;V<x;V++){const K=_[V],le=I[V],Y=U[V],$=H*N*4*V;for(let z=0;z<K.count;z++){const W=z*w;E===!0&&(l.fromBufferAttribute(K,z),B[$+W+0]=l.x,B[$+W+1]=l.y,B[$+W+2]=l.z,B[$+W+3]=0),C===!0&&(l.fromBufferAttribute(le,z),B[$+W+4]=l.x,B[$+W+5]=l.y,B[$+W+6]=l.z,B[$+W+7]=0),b===!0&&(l.fromBufferAttribute(Y,z),B[$+W+8]=l.x,B[$+W+9]=l.y,B[$+W+10]=l.z,B[$+W+11]=Y.itemSize===4?l.w:1)}}S={count:x,texture:ee,size:new Lt(H,N)},s.set(h,S),h.addEventListener("dispose",A)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let E=0;for(let b=0;b<p.length;b++)E+=p[b];const C=h.morphTargetsRelative?1:1-E;m.getUniforms().setValue(o,"morphTargetBaseInfluence",C),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:u}}function q1(o,t,i,s){let l=new WeakMap;function u(m){const p=s.render.frame,g=m.geometry,x=t.get(m,g);if(l.get(x)!==p&&(t.update(x),l.set(x,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return x}function d(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:d}}const Jg=new Pn,ig=new Xg(1,1),$g=new zg,e_=new _y,t_=new Gg,ag=[],sg=[],rg=new Float32Array(16),og=new Float32Array(9),lg=new Float32Array(4);function Nr(o,t,i){const s=o[0];if(s<=0||s>0)return o;const l=t*i;let u=ag[l];if(u===void 0&&(u=new Float32Array(l),ag[l]=u),t!==0){s.toArray(u,0);for(let d=1,h=0;d!==t;++d)h+=i,o[d].toArray(u,h)}return u}function xn(o,t){if(o.length!==t.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==t[i])return!1;return!0}function gn(o,t){for(let i=0,s=t.length;i<s;i++)o[i]=t[i]}function Lc(o,t){let i=sg[t];i===void 0&&(i=new Int32Array(t),sg[t]=i);for(let s=0;s!==t;++s)i[s]=o.allocateTextureUnit();return i}function W1(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function Y1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(xn(i,t))return;o.uniform2fv(this.addr,t),gn(i,t)}}function Z1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(xn(i,t))return;o.uniform3fv(this.addr,t),gn(i,t)}}function K1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(xn(i,t))return;o.uniform4fv(this.addr,t),gn(i,t)}}function Q1(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(xn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),gn(i,t)}else{if(xn(i,s))return;lg.set(s),o.uniformMatrix2fv(this.addr,!1,lg),gn(i,s)}}function J1(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(xn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),gn(i,t)}else{if(xn(i,s))return;og.set(s),o.uniformMatrix3fv(this.addr,!1,og),gn(i,s)}}function $1(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(xn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),gn(i,t)}else{if(xn(i,s))return;rg.set(s),o.uniformMatrix4fv(this.addr,!1,rg),gn(i,s)}}function e3(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function t3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(xn(i,t))return;o.uniform2iv(this.addr,t),gn(i,t)}}function n3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(xn(i,t))return;o.uniform3iv(this.addr,t),gn(i,t)}}function i3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(xn(i,t))return;o.uniform4iv(this.addr,t),gn(i,t)}}function a3(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function s3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(xn(i,t))return;o.uniform2uiv(this.addr,t),gn(i,t)}}function r3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(xn(i,t))return;o.uniform3uiv(this.addr,t),gn(i,t)}}function o3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(xn(i,t))return;o.uniform4uiv(this.addr,t),gn(i,t)}}function l3(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(ig.compareFunction=Lg,u=ig):u=Jg,i.setTexture2D(t||u,l)}function c3(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||e_,l)}function u3(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||t_,l)}function f3(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||$g,l)}function d3(o){switch(o){case 5126:return W1;case 35664:return Y1;case 35665:return Z1;case 35666:return K1;case 35674:return Q1;case 35675:return J1;case 35676:return $1;case 5124:case 35670:return e3;case 35667:case 35671:return t3;case 35668:case 35672:return n3;case 35669:case 35673:return i3;case 5125:return a3;case 36294:return s3;case 36295:return r3;case 36296:return o3;case 35678:case 36198:case 36298:case 36306:case 35682:return l3;case 35679:case 36299:case 36307:return c3;case 35680:case 36300:case 36308:case 36293:return u3;case 36289:case 36303:case 36311:case 36292:return f3}}function h3(o,t){o.uniform1fv(this.addr,t)}function p3(o,t){const i=Nr(t,this.size,2);o.uniform2fv(this.addr,i)}function m3(o,t){const i=Nr(t,this.size,3);o.uniform3fv(this.addr,i)}function x3(o,t){const i=Nr(t,this.size,4);o.uniform4fv(this.addr,i)}function g3(o,t){const i=Nr(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function _3(o,t){const i=Nr(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function v3(o,t){const i=Nr(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function S3(o,t){o.uniform1iv(this.addr,t)}function y3(o,t){o.uniform2iv(this.addr,t)}function b3(o,t){o.uniform3iv(this.addr,t)}function M3(o,t){o.uniform4iv(this.addr,t)}function E3(o,t){o.uniform1uiv(this.addr,t)}function T3(o,t){o.uniform2uiv(this.addr,t)}function A3(o,t){o.uniform3uiv(this.addr,t)}function R3(o,t){o.uniform4uiv(this.addr,t)}function C3(o,t,i){const s=this.cache,l=t.length,u=Lc(i,l);xn(s,u)||(o.uniform1iv(this.addr,u),gn(s,u));for(let d=0;d!==l;++d)i.setTexture2D(t[d]||Jg,u[d])}function w3(o,t,i){const s=this.cache,l=t.length,u=Lc(i,l);xn(s,u)||(o.uniform1iv(this.addr,u),gn(s,u));for(let d=0;d!==l;++d)i.setTexture3D(t[d]||e_,u[d])}function D3(o,t,i){const s=this.cache,l=t.length,u=Lc(i,l);xn(s,u)||(o.uniform1iv(this.addr,u),gn(s,u));for(let d=0;d!==l;++d)i.setTextureCube(t[d]||t_,u[d])}function N3(o,t,i){const s=this.cache,l=t.length,u=Lc(i,l);xn(s,u)||(o.uniform1iv(this.addr,u),gn(s,u));for(let d=0;d!==l;++d)i.setTexture2DArray(t[d]||$g,u[d])}function U3(o){switch(o){case 5126:return h3;case 35664:return p3;case 35665:return m3;case 35666:return x3;case 35674:return g3;case 35675:return _3;case 35676:return v3;case 5124:case 35670:return S3;case 35667:case 35671:return y3;case 35668:case 35672:return b3;case 35669:case 35673:return M3;case 5125:return E3;case 36294:return T3;case 36295:return A3;case 36296:return R3;case 35678:case 36198:case 36298:case 36306:case 35682:return C3;case 35679:case 36299:case 36307:return w3;case 35680:case 36300:case 36308:case 36293:return D3;case 36289:case 36303:case 36311:case 36292:return N3}}class L3{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=d3(i.type)}}class O3{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=U3(i.type)}}class z3{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const h=l[u];h.setValue(t,i[h.id],s)}}}const Md=/(\w+)(\])?(\[|\.)?/g;function cg(o,t){o.seq.push(t),o.map[t.id]=t}function P3(o,t,i){const s=o.name,l=s.length;for(Md.lastIndex=0;;){const u=Md.exec(s),d=Md.lastIndex;let h=u[1];const m=u[2]==="]",p=u[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){cg(i,p===void 0?new L3(h,o,t):new O3(h,o,t));break}else{let x=i.map[h];x===void 0&&(x=new z3(h),cg(i,x)),i=x}}}class Tc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const u=t.getActiveUniform(i,l),d=t.getUniformLocation(i,u.name);P3(u,d,this)}}setValue(t,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let u=0,d=i.length;u!==d;++u){const h=i[u],m=s[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,u=t.length;l!==u;++l){const d=t[l];d.id in i&&s.push(d)}return s}}function ug(o,t,i){const s=o.createShader(t);return o.shaderSource(s,i),o.compileShader(s),s}const I3=37297;let F3=0;function B3(o,t){const i=o.split(`
`),s=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let d=l;d<u;d++){const h=d+1;s.push(`${h===t?">":" "} ${h}: ${i[d]}`)}return s.join(`
`)}const fg=new ft;function H3(o){Ut._getMatrix(fg,Ut.workingColorSpace,o);const t=`mat3( ${fg.elements.map(i=>i.toFixed(4))} )`;switch(Ut.getTransfer(o)){case Ac:return[t,"LinearTransferOETF"];case kt:return[t,"sRGBTransferOETF"];default:return lt("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function dg(o,t,i){const s=o.getShaderParameter(t,o.COMPILE_STATUS),u=(o.getShaderInfoLog(t)||"").trim();if(s&&u==="")return"";const d=/ERROR: 0:(\d+)/.exec(u);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+u+`

`+B3(o.getShaderSource(t),h)}else return u}function V3(o,t){const i=H3(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function G3(o,t){let i;switch(t){case qS:i="Linear";break;case WS:i="Reinhard";break;case YS:i="Cineon";break;case ZS:i="ACESFilmic";break;case QS:i="AgX";break;case JS:i="Neutral";break;case KS:i="Custom";break;default:lt("WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Sc=new de;function k3(){Ut.getLuminanceCoefficients(Sc);const o=Sc.x.toFixed(4),t=Sc.y.toFixed(4),i=Sc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function X3(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lo).join(`
`)}function j3(o){const t=[];for(const i in o){const s=o[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function q3(o,t){const i={},s=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=o.getActiveAttrib(t,l),d=u.name;let h=1;u.type===o.FLOAT_MAT2&&(h=2),u.type===o.FLOAT_MAT3&&(h=3),u.type===o.FLOAT_MAT4&&(h=4),i[d]={type:u.type,location:o.getAttribLocation(t,d),locationSize:h}}return i}function Lo(o){return o!==""}function hg(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function pg(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const W3=/^[ \t]*#include +<([\w\d./]+)>/gm;function gh(o){return o.replace(W3,Z3)}const Y3=new Map;function Z3(o,t){let i=pt[t];if(i===void 0){const s=Y3.get(t);if(s!==void 0)i=pt[s],lt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return gh(i)}const K3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mg(o){return o.replace(K3,Q3)}function Q3(o,t,i,s){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function xg(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function J3(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===bg?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===TS?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===la&&(t="SHADOWMAP_TYPE_VSM"),t}function $3(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Mr:case Er:t="ENVMAP_TYPE_CUBE";break;case wc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function eE(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Er:t="ENVMAP_MODE_REFRACTION";break}return t}function tE(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Mg:t="ENVMAP_BLENDING_MULTIPLY";break;case XS:t="ENVMAP_BLENDING_MIX";break;case jS:t="ENVMAP_BLENDING_ADD";break}return t}function nE(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function iE(o,t,i,s){const l=o.getContext(),u=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=J3(i),p=$3(i),g=eE(i),x=tE(i),S=nE(i),y=X3(i),E=j3(u),C=l.createProgram();let b,_,I=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(b=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Lo).join(`
`),b.length>0&&(b+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Lo).join(`
`),_.length>0&&(_+=`
`)):(b=[xg(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lo).join(`
`),_=[xg(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+x:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ka?"#define TONE_MAPPING":"",i.toneMapping!==Ka?pt.tonemapping_pars_fragment:"",i.toneMapping!==Ka?G3("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,V3("linearToOutputTexel",i.outputColorSpace),k3(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Lo).join(`
`)),d=gh(d),d=hg(d,i),d=pg(d,i),h=gh(h),h=hg(h,i),h=pg(h,i),d=mg(d),h=mg(h),i.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,b=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,_=["#define varying in",i.glslVersion===wx?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===wx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const U=I+b+d,F=I+_+h,H=ug(l,l.VERTEX_SHADER,U),N=ug(l,l.FRAGMENT_SHADER,F);l.attachShader(C,H),l.attachShader(C,N),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function B(V){if(o.debug.checkShaderErrors){const K=l.getProgramInfoLog(C)||"",le=l.getShaderInfoLog(H)||"",Y=l.getShaderInfoLog(N)||"",$=K.trim(),z=le.trim(),W=Y.trim();let L=!0,X=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(L=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,H,N);else{const ne=dg(l,H,"vertex"),O=dg(l,N,"fragment");sn("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+$+`
`+ne+`
`+O)}else $!==""?lt("WebGLProgram: Program Info Log:",$):(z===""||W==="")&&(X=!1);X&&(V.diagnostics={runnable:L,programLog:$,vertexShader:{log:z,prefix:b},fragmentShader:{log:W,prefix:_}})}l.deleteShader(H),l.deleteShader(N),ee=new Tc(l,C),w=q3(l,C)}let ee;this.getUniforms=function(){return ee===void 0&&B(this),ee};let w;this.getAttributes=function(){return w===void 0&&B(this),w};let A=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=l.getProgramParameter(C,I3)),A},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=F3++,this.cacheKey=t,this.usedTimes=1,this.program=C,this.vertexShader=H,this.fragmentShader=N,this}let aE=0;class sE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(s),d=this._getShaderCacheForMaterial(t);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new rE(t),i.set(t,s)),s}}class rE{constructor(t){this.id=aE++,this.code=t,this.usedTimes=0}}function oE(o,t,i,s,l,u,d){const h=new Pg,m=new sE,p=new Set,g=[],x=l.logarithmicDepthBuffer,S=l.vertexTextures;let y=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(w){return p.add(w),w===0?"uv":`uv${w}`}function b(w,A,V,K,le){const Y=K.fog,$=le.geometry,z=w.isMeshStandardMaterial?K.environment:null,W=(w.isMeshStandardMaterial?i:t).get(w.envMap||z),L=W&&W.mapping===wc?W.image.height:null,X=E[w.type];w.precision!==null&&(y=l.getMaxPrecision(w.precision),y!==w.precision&&lt("WebGLProgram.getParameters:",w.precision,"not supported, using",y,"instead."));const ne=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,O=ne!==void 0?ne.length:0;let Z=0;$.morphAttributes.position!==void 0&&(Z=1),$.morphAttributes.normal!==void 0&&(Z=2),$.morphAttributes.color!==void 0&&(Z=3);let me,ye,Ae,ie;if(X){const Ct=Di[X];me=Ct.vertexShader,ye=Ct.fragmentShader}else me=w.vertexShader,ye=w.fragmentShader,m.update(w),Ae=m.getVertexShaderID(w),ie=m.getFragmentShaderID(w);const he=o.getRenderTarget(),De=o.state.buffers.depth.getReversed(),Be=le.isInstancedMesh===!0,ke=le.isBatchedMesh===!0,rt=!!w.map,Zt=!!w.matcap,dt=!!W,Rt=!!w.aoMap,k=!!w.lightMap,ht=!!w.bumpMap,mt=!!w.normalMap,Pt=!!w.displacementMap,Ve=!!w.emissiveMap,Xt=!!w.metalnessMap,Ye=!!w.roughnessMap,at=w.anisotropy>0,P=w.clearcoat>0,M=w.dispersion>0,se=w.iridescence>0,_e=w.sheen>0,be=w.transmission>0,pe=at&&!!w.anisotropyMap,qe=P&&!!w.clearcoatMap,Le=P&&!!w.clearcoatNormalMap,Qe=P&&!!w.clearcoatRoughnessMap,je=se&&!!w.iridescenceMap,Me=se&&!!w.iridescenceThicknessMap,Te=_e&&!!w.sheenColorMap,We=_e&&!!w.sheenRoughnessMap,Ge=!!w.specularMap,ze=!!w.specularColorMap,nt=!!w.specularIntensityMap,j=be&&!!w.transmissionMap,Ne=be&&!!w.thicknessMap,Ce=!!w.gradientMap,we=!!w.alphaMap,Ee=w.alphaTest>0,Se=!!w.alphaHash,Ie=!!w.extensions;let it=Ka;w.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(it=o.toneMapping);const Bt={shaderID:X,shaderType:w.type,shaderName:w.name,vertexShader:me,fragmentShader:ye,defines:w.defines,customVertexShaderID:Ae,customFragmentShaderID:ie,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:y,batching:ke,batchingColor:ke&&le._colorsTexture!==null,instancing:Be,instancingColor:Be&&le.instanceColor!==null,instancingMorph:Be&&le.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:he===null?o.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:Tr,alphaToCoverage:!!w.alphaToCoverage,map:rt,matcap:Zt,envMap:dt,envMapMode:dt&&W.mapping,envMapCubeUVHeight:L,aoMap:Rt,lightMap:k,bumpMap:ht,normalMap:mt,displacementMap:S&&Pt,emissiveMap:Ve,normalMapObjectSpace:mt&&w.normalMapType===ny,normalMapTangentSpace:mt&&w.normalMapType===Ug,metalnessMap:Xt,roughnessMap:Ye,anisotropy:at,anisotropyMap:pe,clearcoat:P,clearcoatMap:qe,clearcoatNormalMap:Le,clearcoatRoughnessMap:Qe,dispersion:M,iridescence:se,iridescenceMap:je,iridescenceThicknessMap:Me,sheen:_e,sheenColorMap:Te,sheenRoughnessMap:We,specularMap:Ge,specularColorMap:ze,specularIntensityMap:nt,transmission:be,transmissionMap:j,thicknessMap:Ne,gradientMap:Ce,opaque:w.transparent===!1&&w.blending===Sr&&w.alphaToCoverage===!1,alphaMap:we,alphaTest:Ee,alphaHash:Se,combine:w.combine,mapUv:rt&&C(w.map.channel),aoMapUv:Rt&&C(w.aoMap.channel),lightMapUv:k&&C(w.lightMap.channel),bumpMapUv:ht&&C(w.bumpMap.channel),normalMapUv:mt&&C(w.normalMap.channel),displacementMapUv:Pt&&C(w.displacementMap.channel),emissiveMapUv:Ve&&C(w.emissiveMap.channel),metalnessMapUv:Xt&&C(w.metalnessMap.channel),roughnessMapUv:Ye&&C(w.roughnessMap.channel),anisotropyMapUv:pe&&C(w.anisotropyMap.channel),clearcoatMapUv:qe&&C(w.clearcoatMap.channel),clearcoatNormalMapUv:Le&&C(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Qe&&C(w.clearcoatRoughnessMap.channel),iridescenceMapUv:je&&C(w.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&C(w.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&C(w.sheenColorMap.channel),sheenRoughnessMapUv:We&&C(w.sheenRoughnessMap.channel),specularMapUv:Ge&&C(w.specularMap.channel),specularColorMapUv:ze&&C(w.specularColorMap.channel),specularIntensityMapUv:nt&&C(w.specularIntensityMap.channel),transmissionMapUv:j&&C(w.transmissionMap.channel),thicknessMapUv:Ne&&C(w.thicknessMap.channel),alphaMapUv:we&&C(w.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(mt||at),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:le.isPoints===!0&&!!$.attributes.uv&&(rt||we),fog:!!Y,useFog:w.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:De,skinning:le.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:Z,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&V.length>0,shadowMapType:o.shadowMap.type,toneMapping:it,decodeVideoTexture:rt&&w.map.isVideoTexture===!0&&Ut.getTransfer(w.map.colorSpace)===kt,decodeVideoTextureEmissive:Ve&&w.emissiveMap.isVideoTexture===!0&&Ut.getTransfer(w.emissiveMap.colorSpace)===kt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ca,flipSided:w.side===Xn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ie&&w.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&w.extensions.multiDraw===!0||ke)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Bt.vertexUv1s=p.has(1),Bt.vertexUv2s=p.has(2),Bt.vertexUv3s=p.has(3),p.clear(),Bt}function _(w){const A=[];if(w.shaderID?A.push(w.shaderID):(A.push(w.customVertexShaderID),A.push(w.customFragmentShaderID)),w.defines!==void 0)for(const V in w.defines)A.push(V),A.push(w.defines[V]);return w.isRawShaderMaterial===!1&&(I(A,w),U(A,w),A.push(o.outputColorSpace)),A.push(w.customProgramCacheKey),A.join()}function I(w,A){w.push(A.precision),w.push(A.outputColorSpace),w.push(A.envMapMode),w.push(A.envMapCubeUVHeight),w.push(A.mapUv),w.push(A.alphaMapUv),w.push(A.lightMapUv),w.push(A.aoMapUv),w.push(A.bumpMapUv),w.push(A.normalMapUv),w.push(A.displacementMapUv),w.push(A.emissiveMapUv),w.push(A.metalnessMapUv),w.push(A.roughnessMapUv),w.push(A.anisotropyMapUv),w.push(A.clearcoatMapUv),w.push(A.clearcoatNormalMapUv),w.push(A.clearcoatRoughnessMapUv),w.push(A.iridescenceMapUv),w.push(A.iridescenceThicknessMapUv),w.push(A.sheenColorMapUv),w.push(A.sheenRoughnessMapUv),w.push(A.specularMapUv),w.push(A.specularColorMapUv),w.push(A.specularIntensityMapUv),w.push(A.transmissionMapUv),w.push(A.thicknessMapUv),w.push(A.combine),w.push(A.fogExp2),w.push(A.sizeAttenuation),w.push(A.morphTargetsCount),w.push(A.morphAttributeCount),w.push(A.numDirLights),w.push(A.numPointLights),w.push(A.numSpotLights),w.push(A.numSpotLightMaps),w.push(A.numHemiLights),w.push(A.numRectAreaLights),w.push(A.numDirLightShadows),w.push(A.numPointLightShadows),w.push(A.numSpotLightShadows),w.push(A.numSpotLightShadowsWithMaps),w.push(A.numLightProbes),w.push(A.shadowMapType),w.push(A.toneMapping),w.push(A.numClippingPlanes),w.push(A.numClipIntersection),w.push(A.depthPacking)}function U(w,A){h.disableAll(),A.supportsVertexTextures&&h.enable(0),A.instancing&&h.enable(1),A.instancingColor&&h.enable(2),A.instancingMorph&&h.enable(3),A.matcap&&h.enable(4),A.envMap&&h.enable(5),A.normalMapObjectSpace&&h.enable(6),A.normalMapTangentSpace&&h.enable(7),A.clearcoat&&h.enable(8),A.iridescence&&h.enable(9),A.alphaTest&&h.enable(10),A.vertexColors&&h.enable(11),A.vertexAlphas&&h.enable(12),A.vertexUv1s&&h.enable(13),A.vertexUv2s&&h.enable(14),A.vertexUv3s&&h.enable(15),A.vertexTangents&&h.enable(16),A.anisotropy&&h.enable(17),A.alphaHash&&h.enable(18),A.batching&&h.enable(19),A.dispersion&&h.enable(20),A.batchingColor&&h.enable(21),A.gradientMap&&h.enable(22),w.push(h.mask),h.disableAll(),A.fog&&h.enable(0),A.useFog&&h.enable(1),A.flatShading&&h.enable(2),A.logarithmicDepthBuffer&&h.enable(3),A.reversedDepthBuffer&&h.enable(4),A.skinning&&h.enable(5),A.morphTargets&&h.enable(6),A.morphNormals&&h.enable(7),A.morphColors&&h.enable(8),A.premultipliedAlpha&&h.enable(9),A.shadowMapEnabled&&h.enable(10),A.doubleSided&&h.enable(11),A.flipSided&&h.enable(12),A.useDepthPacking&&h.enable(13),A.dithering&&h.enable(14),A.transmission&&h.enable(15),A.sheen&&h.enable(16),A.opaque&&h.enable(17),A.pointsUvs&&h.enable(18),A.decodeVideoTexture&&h.enable(19),A.decodeVideoTextureEmissive&&h.enable(20),A.alphaToCoverage&&h.enable(21),w.push(h.mask)}function F(w){const A=E[w.type];let V;if(A){const K=Di[A];V=Uy.clone(K.uniforms)}else V=w.uniforms;return V}function H(w,A){let V;for(let K=0,le=g.length;K<le;K++){const Y=g[K];if(Y.cacheKey===A){V=Y,++V.usedTimes;break}}return V===void 0&&(V=new iE(o,A,w,u),g.push(V)),V}function N(w){if(--w.usedTimes===0){const A=g.indexOf(w);g[A]=g[g.length-1],g.pop(),w.destroy()}}function B(w){m.remove(w)}function ee(){m.dispose()}return{getParameters:b,getProgramCacheKey:_,getUniforms:F,acquireProgram:H,releaseProgram:N,releaseShaderCache:B,programs:g,dispose:ee}}function lE(){let o=new WeakMap;function t(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function s(d){o.delete(d)}function l(d,h,m){o.get(d)[h]=m}function u(){o=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:u}}function cE(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function gg(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function _g(){const o=[];let t=0;const i=[],s=[],l=[];function u(){t=0,i.length=0,s.length=0,l.length=0}function d(x,S,y,E,C,b){let _=o[t];return _===void 0?(_={id:x.id,object:x,geometry:S,material:y,groupOrder:E,renderOrder:x.renderOrder,z:C,group:b},o[t]=_):(_.id=x.id,_.object=x,_.geometry=S,_.material=y,_.groupOrder=E,_.renderOrder=x.renderOrder,_.z=C,_.group=b),t++,_}function h(x,S,y,E,C,b){const _=d(x,S,y,E,C,b);y.transmission>0?s.push(_):y.transparent===!0?l.push(_):i.push(_)}function m(x,S,y,E,C,b){const _=d(x,S,y,E,C,b);y.transmission>0?s.unshift(_):y.transparent===!0?l.unshift(_):i.unshift(_)}function p(x,S){i.length>1&&i.sort(x||cE),s.length>1&&s.sort(S||gg),l.length>1&&l.sort(S||gg)}function g(){for(let x=t,S=o.length;x<S;x++){const y=o[x];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:h,unshift:m,finish:g,sort:p}}function uE(){let o=new WeakMap;function t(s,l){const u=o.get(s);let d;return u===void 0?(d=new _g,o.set(s,[d])):l>=u.length?(d=new _g,u.push(d)):d=u[l],d}function i(){o=new WeakMap}return{get:t,dispose:i}}function fE(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new de,color:new At};break;case"SpotLight":i={position:new de,direction:new de,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new de,color:new At,distance:0,decay:0};break;case"HemisphereLight":i={direction:new de,skyColor:new At,groundColor:new At};break;case"RectAreaLight":i={color:new At,position:new de,halfWidth:new de,halfHeight:new de};break}return o[t.id]=i,i}}}function dE(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let hE=0;function pE(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function mE(o){const t=new fE,i=dE(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new de);const l=new de,u=new rn,d=new rn;function h(p){let g=0,x=0,S=0;for(let w=0;w<9;w++)s.probe[w].set(0,0,0);let y=0,E=0,C=0,b=0,_=0,I=0,U=0,F=0,H=0,N=0,B=0;p.sort(pE);for(let w=0,A=p.length;w<A;w++){const V=p[w],K=V.color,le=V.intensity,Y=V.distance,$=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)g+=K.r*le,x+=K.g*le,S+=K.b*le;else if(V.isLightProbe){for(let z=0;z<9;z++)s.probe[z].addScaledVector(V.sh.coefficients[z],le);B++}else if(V.isDirectionalLight){const z=t.get(V);if(z.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const W=V.shadow,L=i.get(V);L.shadowIntensity=W.intensity,L.shadowBias=W.bias,L.shadowNormalBias=W.normalBias,L.shadowRadius=W.radius,L.shadowMapSize=W.mapSize,s.directionalShadow[y]=L,s.directionalShadowMap[y]=$,s.directionalShadowMatrix[y]=V.shadow.matrix,I++}s.directional[y]=z,y++}else if(V.isSpotLight){const z=t.get(V);z.position.setFromMatrixPosition(V.matrixWorld),z.color.copy(K).multiplyScalar(le),z.distance=Y,z.coneCos=Math.cos(V.angle),z.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),z.decay=V.decay,s.spot[C]=z;const W=V.shadow;if(V.map&&(s.spotLightMap[H]=V.map,H++,W.updateMatrices(V),V.castShadow&&N++),s.spotLightMatrix[C]=W.matrix,V.castShadow){const L=i.get(V);L.shadowIntensity=W.intensity,L.shadowBias=W.bias,L.shadowNormalBias=W.normalBias,L.shadowRadius=W.radius,L.shadowMapSize=W.mapSize,s.spotShadow[C]=L,s.spotShadowMap[C]=$,F++}C++}else if(V.isRectAreaLight){const z=t.get(V);z.color.copy(K).multiplyScalar(le),z.halfWidth.set(V.width*.5,0,0),z.halfHeight.set(0,V.height*.5,0),s.rectArea[b]=z,b++}else if(V.isPointLight){const z=t.get(V);if(z.color.copy(V.color).multiplyScalar(V.intensity),z.distance=V.distance,z.decay=V.decay,V.castShadow){const W=V.shadow,L=i.get(V);L.shadowIntensity=W.intensity,L.shadowBias=W.bias,L.shadowNormalBias=W.normalBias,L.shadowRadius=W.radius,L.shadowMapSize=W.mapSize,L.shadowCameraNear=W.camera.near,L.shadowCameraFar=W.camera.far,s.pointShadow[E]=L,s.pointShadowMap[E]=$,s.pointShadowMatrix[E]=V.shadow.matrix,U++}s.point[E]=z,E++}else if(V.isHemisphereLight){const z=t.get(V);z.skyColor.copy(V.color).multiplyScalar(le),z.groundColor.copy(V.groundColor).multiplyScalar(le),s.hemi[_]=z,_++}}b>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Oe.LTC_FLOAT_1,s.rectAreaLTC2=Oe.LTC_FLOAT_2):(s.rectAreaLTC1=Oe.LTC_HALF_1,s.rectAreaLTC2=Oe.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=x,s.ambient[2]=S;const ee=s.hash;(ee.directionalLength!==y||ee.pointLength!==E||ee.spotLength!==C||ee.rectAreaLength!==b||ee.hemiLength!==_||ee.numDirectionalShadows!==I||ee.numPointShadows!==U||ee.numSpotShadows!==F||ee.numSpotMaps!==H||ee.numLightProbes!==B)&&(s.directional.length=y,s.spot.length=C,s.rectArea.length=b,s.point.length=E,s.hemi.length=_,s.directionalShadow.length=I,s.directionalShadowMap.length=I,s.pointShadow.length=U,s.pointShadowMap.length=U,s.spotShadow.length=F,s.spotShadowMap.length=F,s.directionalShadowMatrix.length=I,s.pointShadowMatrix.length=U,s.spotLightMatrix.length=F+H-N,s.spotLightMap.length=H,s.numSpotLightShadowsWithMaps=N,s.numLightProbes=B,ee.directionalLength=y,ee.pointLength=E,ee.spotLength=C,ee.rectAreaLength=b,ee.hemiLength=_,ee.numDirectionalShadows=I,ee.numPointShadows=U,ee.numSpotShadows=F,ee.numSpotMaps=H,ee.numLightProbes=B,s.version=hE++)}function m(p,g){let x=0,S=0,y=0,E=0,C=0;const b=g.matrixWorldInverse;for(let _=0,I=p.length;_<I;_++){const U=p[_];if(U.isDirectionalLight){const F=s.directional[x];F.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),F.direction.sub(l),F.direction.transformDirection(b),x++}else if(U.isSpotLight){const F=s.spot[y];F.position.setFromMatrixPosition(U.matrixWorld),F.position.applyMatrix4(b),F.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),F.direction.sub(l),F.direction.transformDirection(b),y++}else if(U.isRectAreaLight){const F=s.rectArea[E];F.position.setFromMatrixPosition(U.matrixWorld),F.position.applyMatrix4(b),d.identity(),u.copy(U.matrixWorld),u.premultiply(b),d.extractRotation(u),F.halfWidth.set(U.width*.5,0,0),F.halfHeight.set(0,U.height*.5,0),F.halfWidth.applyMatrix4(d),F.halfHeight.applyMatrix4(d),E++}else if(U.isPointLight){const F=s.point[S];F.position.setFromMatrixPosition(U.matrixWorld),F.position.applyMatrix4(b),S++}else if(U.isHemisphereLight){const F=s.hemi[C];F.direction.setFromMatrixPosition(U.matrixWorld),F.direction.transformDirection(b),C++}}}return{setup:h,setupView:m,state:s}}function vg(o){const t=new mE(o),i=[],s=[];function l(g){p.camera=g,i.length=0,s.length=0}function u(g){i.push(g)}function d(g){s.push(g)}function h(){t.setup(i)}function m(g){t.setupView(i,g)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:u,pushShadow:d}}function xE(o){let t=new WeakMap;function i(l,u=0){const d=t.get(l);let h;return d===void 0?(h=new vg(o),t.set(l,[h])):u>=d.length?(h=new vg(o),d.push(h)):h=d[u],h}function s(){t=new WeakMap}return{get:i,dispose:s}}const gE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_E=`uniform sampler2D shadow_pass;
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
}`;function vE(o,t,i){let s=new Nh;const l=new Lt,u=new Lt,d=new tn,h=new Gy({depthPacking:ty}),m=new ky,p={},g=i.maxTextureSize,x={[Qa]:Xn,[Xn]:Qa,[ca]:ca},S=new pa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:gE,fragmentShader:_E}),y=S.clone();y.defines.HORIZONTAL_PASS=1;const E=new zi;E.setAttribute("position",new Ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Un(E,S),b=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bg;let _=this.type;this.render=function(N,B,ee){if(b.enabled===!1||b.autoUpdate===!1&&b.needsUpdate===!1||N.length===0)return;const w=o.getRenderTarget(),A=o.getActiveCubeFace(),V=o.getActiveMipmapLevel(),K=o.state;K.setBlending(da),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const le=_!==la&&this.type===la,Y=_===la&&this.type!==la;for(let $=0,z=N.length;$<z;$++){const W=N[$],L=W.shadow;if(L===void 0){lt("WebGLShadowMap:",W,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;l.copy(L.mapSize);const X=L.getFrameExtents();if(l.multiply(X),u.copy(L.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/X.x),l.x=u.x*X.x,L.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/X.y),l.y=u.y*X.y,L.mapSize.y=u.y)),L.map===null||le===!0||Y===!0){const O=this.type!==la?{minFilter:ii,magFilter:ii}:{};L.map!==null&&L.map.dispose(),L.map=new Rs(l.x,l.y,O),L.map.texture.name=W.name+".shadowMap",L.camera.updateProjectionMatrix()}o.setRenderTarget(L.map),o.clear();const ne=L.getViewportCount();for(let O=0;O<ne;O++){const Z=L.getViewport(O);d.set(u.x*Z.x,u.y*Z.y,u.x*Z.z,u.y*Z.w),K.viewport(d),L.updateMatrices(W,O),s=L.getFrustum(),F(B,ee,L.camera,W,this.type)}L.isPointLightShadow!==!0&&this.type===la&&I(L,ee),L.needsUpdate=!1}_=this.type,b.needsUpdate=!1,o.setRenderTarget(w,A,V)};function I(N,B){const ee=t.update(C);S.defines.VSM_SAMPLES!==N.blurSamples&&(S.defines.VSM_SAMPLES=N.blurSamples,y.defines.VSM_SAMPLES=N.blurSamples,S.needsUpdate=!0,y.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new Rs(l.x,l.y)),S.uniforms.shadow_pass.value=N.map.texture,S.uniforms.resolution.value=N.mapSize,S.uniforms.radius.value=N.radius,o.setRenderTarget(N.mapPass),o.clear(),o.renderBufferDirect(B,null,ee,S,C,null),y.uniforms.shadow_pass.value=N.mapPass.texture,y.uniforms.resolution.value=N.mapSize,y.uniforms.radius.value=N.radius,o.setRenderTarget(N.map),o.clear(),o.renderBufferDirect(B,null,ee,y,C,null)}function U(N,B,ee,w){let A=null;const V=ee.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(V!==void 0)A=V;else if(A=ee.isPointLight===!0?m:h,o.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const K=A.uuid,le=B.uuid;let Y=p[K];Y===void 0&&(Y={},p[K]=Y);let $=Y[le];$===void 0&&($=A.clone(),Y[le]=$,B.addEventListener("dispose",H)),A=$}if(A.visible=B.visible,A.wireframe=B.wireframe,w===la?A.side=B.shadowSide!==null?B.shadowSide:B.side:A.side=B.shadowSide!==null?B.shadowSide:x[B.side],A.alphaMap=B.alphaMap,A.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,A.map=B.map,A.clipShadows=B.clipShadows,A.clippingPlanes=B.clippingPlanes,A.clipIntersection=B.clipIntersection,A.displacementMap=B.displacementMap,A.displacementScale=B.displacementScale,A.displacementBias=B.displacementBias,A.wireframeLinewidth=B.wireframeLinewidth,A.linewidth=B.linewidth,ee.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const K=o.properties.get(A);K.light=ee}return A}function F(N,B,ee,w,A){if(N.visible===!1)return;if(N.layers.test(B.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&A===la)&&(!N.frustumCulled||s.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,N.matrixWorld);const le=t.update(N),Y=N.material;if(Array.isArray(Y)){const $=le.groups;for(let z=0,W=$.length;z<W;z++){const L=$[z],X=Y[L.materialIndex];if(X&&X.visible){const ne=U(N,X,w,A);N.onBeforeShadow(o,N,B,ee,le,ne,L),o.renderBufferDirect(ee,null,le,ne,N,L),N.onAfterShadow(o,N,B,ee,le,ne,L)}}}else if(Y.visible){const $=U(N,Y,w,A);N.onBeforeShadow(o,N,B,ee,le,$,null),o.renderBufferDirect(ee,null,le,$,N,null),N.onAfterShadow(o,N,B,ee,le,$,null)}}const K=N.children;for(let le=0,Y=K.length;le<Y;le++)F(K[le],B,ee,w,A)}function H(N){N.target.removeEventListener("dispose",H);for(const ee in p){const w=p[ee],A=N.target.uuid;A in w&&(w[A].dispose(),delete w[A])}}}const SE={[Dd]:Nd,[Ud]:zd,[Ld]:Pd,[br]:Od,[Nd]:Dd,[zd]:Ud,[Pd]:Ld,[Od]:br};function yE(o,t){function i(){let j=!1;const Ne=new tn;let Ce=null;const we=new tn(0,0,0,0);return{setMask:function(Ee){Ce!==Ee&&!j&&(o.colorMask(Ee,Ee,Ee,Ee),Ce=Ee)},setLocked:function(Ee){j=Ee},setClear:function(Ee,Se,Ie,it,Bt){Bt===!0&&(Ee*=it,Se*=it,Ie*=it),Ne.set(Ee,Se,Ie,it),we.equals(Ne)===!1&&(o.clearColor(Ee,Se,Ie,it),we.copy(Ne))},reset:function(){j=!1,Ce=null,we.set(-1,0,0,0)}}}function s(){let j=!1,Ne=!1,Ce=null,we=null,Ee=null;return{setReversed:function(Se){if(Ne!==Se){const Ie=t.get("EXT_clip_control");Se?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT),Ne=Se;const it=Ee;Ee=null,this.setClear(it)}},getReversed:function(){return Ne},setTest:function(Se){Se?he(o.DEPTH_TEST):De(o.DEPTH_TEST)},setMask:function(Se){Ce!==Se&&!j&&(o.depthMask(Se),Ce=Se)},setFunc:function(Se){if(Ne&&(Se=SE[Se]),we!==Se){switch(Se){case Dd:o.depthFunc(o.NEVER);break;case Nd:o.depthFunc(o.ALWAYS);break;case Ud:o.depthFunc(o.LESS);break;case br:o.depthFunc(o.LEQUAL);break;case Ld:o.depthFunc(o.EQUAL);break;case Od:o.depthFunc(o.GEQUAL);break;case zd:o.depthFunc(o.GREATER);break;case Pd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}we=Se}},setLocked:function(Se){j=Se},setClear:function(Se){Ee!==Se&&(Ne&&(Se=1-Se),o.clearDepth(Se),Ee=Se)},reset:function(){j=!1,Ce=null,we=null,Ee=null,Ne=!1}}}function l(){let j=!1,Ne=null,Ce=null,we=null,Ee=null,Se=null,Ie=null,it=null,Bt=null;return{setTest:function(Ct){j||(Ct?he(o.STENCIL_TEST):De(o.STENCIL_TEST))},setMask:function(Ct){Ne!==Ct&&!j&&(o.stencilMask(Ct),Ne=Ct)},setFunc:function(Ct,Cn,jn){(Ce!==Ct||we!==Cn||Ee!==jn)&&(o.stencilFunc(Ct,Cn,jn),Ce=Ct,we=Cn,Ee=jn)},setOp:function(Ct,Cn,jn){(Se!==Ct||Ie!==Cn||it!==jn)&&(o.stencilOp(Ct,Cn,jn),Se=Ct,Ie=Cn,it=jn)},setLocked:function(Ct){j=Ct},setClear:function(Ct){Bt!==Ct&&(o.clearStencil(Ct),Bt=Ct)},reset:function(){j=!1,Ne=null,Ce=null,we=null,Ee=null,Se=null,Ie=null,it=null,Bt=null}}}const u=new i,d=new s,h=new l,m=new WeakMap,p=new WeakMap;let g={},x={},S=new WeakMap,y=[],E=null,C=!1,b=null,_=null,I=null,U=null,F=null,H=null,N=null,B=new At(0,0,0),ee=0,w=!1,A=null,V=null,K=null,le=null,Y=null;const $=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,W=0;const L=o.getParameter(o.VERSION);L.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(L)[1]),z=W>=1):L.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(L)[1]),z=W>=2);let X=null,ne={};const O=o.getParameter(o.SCISSOR_BOX),Z=o.getParameter(o.VIEWPORT),me=new tn().fromArray(O),ye=new tn().fromArray(Z);function Ae(j,Ne,Ce,we){const Ee=new Uint8Array(4),Se=o.createTexture();o.bindTexture(j,Se),o.texParameteri(j,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(j,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Ie=0;Ie<Ce;Ie++)j===o.TEXTURE_3D||j===o.TEXTURE_2D_ARRAY?o.texImage3D(Ne,0,o.RGBA,1,1,we,0,o.RGBA,o.UNSIGNED_BYTE,Ee):o.texImage2D(Ne+Ie,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Ee);return Se}const ie={};ie[o.TEXTURE_2D]=Ae(o.TEXTURE_2D,o.TEXTURE_2D,1),ie[o.TEXTURE_CUBE_MAP]=Ae(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[o.TEXTURE_2D_ARRAY]=Ae(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),ie[o.TEXTURE_3D]=Ae(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),d.setClear(1),h.setClear(0),he(o.DEPTH_TEST),d.setFunc(br),ht(!1),mt(Mx),he(o.CULL_FACE),Rt(da);function he(j){g[j]!==!0&&(o.enable(j),g[j]=!0)}function De(j){g[j]!==!1&&(o.disable(j),g[j]=!1)}function Be(j,Ne){return x[j]!==Ne?(o.bindFramebuffer(j,Ne),x[j]=Ne,j===o.DRAW_FRAMEBUFFER&&(x[o.FRAMEBUFFER]=Ne),j===o.FRAMEBUFFER&&(x[o.DRAW_FRAMEBUFFER]=Ne),!0):!1}function ke(j,Ne){let Ce=y,we=!1;if(j){Ce=S.get(Ne),Ce===void 0&&(Ce=[],S.set(Ne,Ce));const Ee=j.textures;if(Ce.length!==Ee.length||Ce[0]!==o.COLOR_ATTACHMENT0){for(let Se=0,Ie=Ee.length;Se<Ie;Se++)Ce[Se]=o.COLOR_ATTACHMENT0+Se;Ce.length=Ee.length,we=!0}}else Ce[0]!==o.BACK&&(Ce[0]=o.BACK,we=!0);we&&o.drawBuffers(Ce)}function rt(j){return E!==j?(o.useProgram(j),E=j,!0):!1}const Zt={[Ms]:o.FUNC_ADD,[RS]:o.FUNC_SUBTRACT,[CS]:o.FUNC_REVERSE_SUBTRACT};Zt[wS]=o.MIN,Zt[DS]=o.MAX;const dt={[NS]:o.ZERO,[US]:o.ONE,[LS]:o.SRC_COLOR,[Cd]:o.SRC_ALPHA,[BS]:o.SRC_ALPHA_SATURATE,[IS]:o.DST_COLOR,[zS]:o.DST_ALPHA,[OS]:o.ONE_MINUS_SRC_COLOR,[wd]:o.ONE_MINUS_SRC_ALPHA,[FS]:o.ONE_MINUS_DST_COLOR,[PS]:o.ONE_MINUS_DST_ALPHA,[HS]:o.CONSTANT_COLOR,[VS]:o.ONE_MINUS_CONSTANT_COLOR,[GS]:o.CONSTANT_ALPHA,[kS]:o.ONE_MINUS_CONSTANT_ALPHA};function Rt(j,Ne,Ce,we,Ee,Se,Ie,it,Bt,Ct){if(j===da){C===!0&&(De(o.BLEND),C=!1);return}if(C===!1&&(he(o.BLEND),C=!0),j!==AS){if(j!==b||Ct!==w){if((_!==Ms||F!==Ms)&&(o.blendEquation(o.FUNC_ADD),_=Ms,F=Ms),Ct)switch(j){case Sr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Ex:o.blendFunc(o.ONE,o.ONE);break;case Tx:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Ax:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:sn("WebGLState: Invalid blending: ",j);break}else switch(j){case Sr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Ex:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Tx:sn("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ax:sn("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:sn("WebGLState: Invalid blending: ",j);break}I=null,U=null,H=null,N=null,B.set(0,0,0),ee=0,b=j,w=Ct}return}Ee=Ee||Ne,Se=Se||Ce,Ie=Ie||we,(Ne!==_||Ee!==F)&&(o.blendEquationSeparate(Zt[Ne],Zt[Ee]),_=Ne,F=Ee),(Ce!==I||we!==U||Se!==H||Ie!==N)&&(o.blendFuncSeparate(dt[Ce],dt[we],dt[Se],dt[Ie]),I=Ce,U=we,H=Se,N=Ie),(it.equals(B)===!1||Bt!==ee)&&(o.blendColor(it.r,it.g,it.b,Bt),B.copy(it),ee=Bt),b=j,w=!1}function k(j,Ne){j.side===ca?De(o.CULL_FACE):he(o.CULL_FACE);let Ce=j.side===Xn;Ne&&(Ce=!Ce),ht(Ce),j.blending===Sr&&j.transparent===!1?Rt(da):Rt(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),d.setFunc(j.depthFunc),d.setTest(j.depthTest),d.setMask(j.depthWrite),u.setMask(j.colorWrite);const we=j.stencilWrite;h.setTest(we),we&&(h.setMask(j.stencilWriteMask),h.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),h.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),Ve(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?he(o.SAMPLE_ALPHA_TO_COVERAGE):De(o.SAMPLE_ALPHA_TO_COVERAGE)}function ht(j){A!==j&&(j?o.frontFace(o.CW):o.frontFace(o.CCW),A=j)}function mt(j){j!==MS?(he(o.CULL_FACE),j!==V&&(j===Mx?o.cullFace(o.BACK):j===ES?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):De(o.CULL_FACE),V=j}function Pt(j){j!==K&&(z&&o.lineWidth(j),K=j)}function Ve(j,Ne,Ce){j?(he(o.POLYGON_OFFSET_FILL),(le!==Ne||Y!==Ce)&&(o.polygonOffset(Ne,Ce),le=Ne,Y=Ce)):De(o.POLYGON_OFFSET_FILL)}function Xt(j){j?he(o.SCISSOR_TEST):De(o.SCISSOR_TEST)}function Ye(j){j===void 0&&(j=o.TEXTURE0+$-1),X!==j&&(o.activeTexture(j),X=j)}function at(j,Ne,Ce){Ce===void 0&&(X===null?Ce=o.TEXTURE0+$-1:Ce=X);let we=ne[Ce];we===void 0&&(we={type:void 0,texture:void 0},ne[Ce]=we),(we.type!==j||we.texture!==Ne)&&(X!==Ce&&(o.activeTexture(Ce),X=Ce),o.bindTexture(j,Ne||ie[j]),we.type=j,we.texture=Ne)}function P(){const j=ne[X];j!==void 0&&j.type!==void 0&&(o.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function M(){try{o.compressedTexImage2D(...arguments)}catch(j){j("WebGLState:",j)}}function se(){try{o.compressedTexImage3D(...arguments)}catch(j){j("WebGLState:",j)}}function _e(){try{o.texSubImage2D(...arguments)}catch(j){j("WebGLState:",j)}}function be(){try{o.texSubImage3D(...arguments)}catch(j){j("WebGLState:",j)}}function pe(){try{o.compressedTexSubImage2D(...arguments)}catch(j){j("WebGLState:",j)}}function qe(){try{o.compressedTexSubImage3D(...arguments)}catch(j){j("WebGLState:",j)}}function Le(){try{o.texStorage2D(...arguments)}catch(j){j("WebGLState:",j)}}function Qe(){try{o.texStorage3D(...arguments)}catch(j){j("WebGLState:",j)}}function je(){try{o.texImage2D(...arguments)}catch(j){j("WebGLState:",j)}}function Me(){try{o.texImage3D(...arguments)}catch(j){j("WebGLState:",j)}}function Te(j){me.equals(j)===!1&&(o.scissor(j.x,j.y,j.z,j.w),me.copy(j))}function We(j){ye.equals(j)===!1&&(o.viewport(j.x,j.y,j.z,j.w),ye.copy(j))}function Ge(j,Ne){let Ce=p.get(Ne);Ce===void 0&&(Ce=new WeakMap,p.set(Ne,Ce));let we=Ce.get(j);we===void 0&&(we=o.getUniformBlockIndex(Ne,j.name),Ce.set(j,we))}function ze(j,Ne){const we=p.get(Ne).get(j);m.get(Ne)!==we&&(o.uniformBlockBinding(Ne,we,j.__bindingPointIndex),m.set(Ne,we))}function nt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),g={},X=null,ne={},x={},S=new WeakMap,y=[],E=null,C=!1,b=null,_=null,I=null,U=null,F=null,H=null,N=null,B=new At(0,0,0),ee=0,w=!1,A=null,V=null,K=null,le=null,Y=null,me.set(0,0,o.canvas.width,o.canvas.height),ye.set(0,0,o.canvas.width,o.canvas.height),u.reset(),d.reset(),h.reset()}return{buffers:{color:u,depth:d,stencil:h},enable:he,disable:De,bindFramebuffer:Be,drawBuffers:ke,useProgram:rt,setBlending:Rt,setMaterial:k,setFlipSided:ht,setCullFace:mt,setLineWidth:Pt,setPolygonOffset:Ve,setScissorTest:Xt,activeTexture:Ye,bindTexture:at,unbindTexture:P,compressedTexImage2D:M,compressedTexImage3D:se,texImage2D:je,texImage3D:Me,updateUBOMapping:Ge,uniformBlockBinding:ze,texStorage2D:Le,texStorage3D:Qe,texSubImage2D:_e,texSubImage3D:be,compressedTexSubImage2D:pe,compressedTexSubImage3D:qe,scissor:Te,viewport:We,reset:nt}}function bE(o,t,i,s,l,u,d){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Lt,g=new WeakMap;let x;const S=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(P,M){return y?new OffscreenCanvas(P,M):Cc("canvas")}function C(P,M,se){let _e=1;const be=at(P);if((be.width>se||be.height>se)&&(_e=se/Math.max(be.width,be.height)),_e<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const pe=Math.floor(_e*be.width),qe=Math.floor(_e*be.height);x===void 0&&(x=E(pe,qe));const Le=M?E(pe,qe):x;return Le.width=pe,Le.height=qe,Le.getContext("2d").drawImage(P,0,0,pe,qe),lt("WebGLRenderer: Texture has been resized from ("+be.width+"x"+be.height+") to ("+pe+"x"+qe+")."),Le}else return"data"in P&&lt("WebGLRenderer: Image in DataTexture is too big ("+be.width+"x"+be.height+")."),P;return P}function b(P){return P.generateMipmaps}function _(P){o.generateMipmap(P)}function I(P){return P.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?o.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function U(P,M,se,_e,be=!1){if(P!==null){if(o[P]!==void 0)return o[P];lt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let pe=M;if(M===o.RED&&(se===o.FLOAT&&(pe=o.R32F),se===o.HALF_FLOAT&&(pe=o.R16F),se===o.UNSIGNED_BYTE&&(pe=o.R8)),M===o.RED_INTEGER&&(se===o.UNSIGNED_BYTE&&(pe=o.R8UI),se===o.UNSIGNED_SHORT&&(pe=o.R16UI),se===o.UNSIGNED_INT&&(pe=o.R32UI),se===o.BYTE&&(pe=o.R8I),se===o.SHORT&&(pe=o.R16I),se===o.INT&&(pe=o.R32I)),M===o.RG&&(se===o.FLOAT&&(pe=o.RG32F),se===o.HALF_FLOAT&&(pe=o.RG16F),se===o.UNSIGNED_BYTE&&(pe=o.RG8)),M===o.RG_INTEGER&&(se===o.UNSIGNED_BYTE&&(pe=o.RG8UI),se===o.UNSIGNED_SHORT&&(pe=o.RG16UI),se===o.UNSIGNED_INT&&(pe=o.RG32UI),se===o.BYTE&&(pe=o.RG8I),se===o.SHORT&&(pe=o.RG16I),se===o.INT&&(pe=o.RG32I)),M===o.RGB_INTEGER&&(se===o.UNSIGNED_BYTE&&(pe=o.RGB8UI),se===o.UNSIGNED_SHORT&&(pe=o.RGB16UI),se===o.UNSIGNED_INT&&(pe=o.RGB32UI),se===o.BYTE&&(pe=o.RGB8I),se===o.SHORT&&(pe=o.RGB16I),se===o.INT&&(pe=o.RGB32I)),M===o.RGBA_INTEGER&&(se===o.UNSIGNED_BYTE&&(pe=o.RGBA8UI),se===o.UNSIGNED_SHORT&&(pe=o.RGBA16UI),se===o.UNSIGNED_INT&&(pe=o.RGBA32UI),se===o.BYTE&&(pe=o.RGBA8I),se===o.SHORT&&(pe=o.RGBA16I),se===o.INT&&(pe=o.RGBA32I)),M===o.RGB&&(se===o.UNSIGNED_INT_5_9_9_9_REV&&(pe=o.RGB9_E5),se===o.UNSIGNED_INT_10F_11F_11F_REV&&(pe=o.R11F_G11F_B10F)),M===o.RGBA){const qe=be?Ac:Ut.getTransfer(_e);se===o.FLOAT&&(pe=o.RGBA32F),se===o.HALF_FLOAT&&(pe=o.RGBA16F),se===o.UNSIGNED_BYTE&&(pe=qe===kt?o.SRGB8_ALPHA8:o.RGBA8),se===o.UNSIGNED_SHORT_4_4_4_4&&(pe=o.RGBA4),se===o.UNSIGNED_SHORT_5_5_5_1&&(pe=o.RGB5_A1)}return(pe===o.R16F||pe===o.R32F||pe===o.RG16F||pe===o.RG32F||pe===o.RGBA16F||pe===o.RGBA32F)&&t.get("EXT_color_buffer_float"),pe}function F(P,M){let se;return P?M===null||M===As||M===zo?se=o.DEPTH24_STENCIL8:M===fa?se=o.DEPTH32F_STENCIL8:M===Oo&&(se=o.DEPTH24_STENCIL8,lt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===As||M===zo?se=o.DEPTH_COMPONENT24:M===fa?se=o.DEPTH_COMPONENT32F:M===Oo&&(se=o.DEPTH_COMPONENT16),se}function H(P,M){return b(P)===!0||P.isFramebufferTexture&&P.minFilter!==ii&&P.minFilter!==mi?Math.log2(Math.max(M.width,M.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?M.mipmaps.length:1}function N(P){const M=P.target;M.removeEventListener("dispose",N),ee(M),M.isVideoTexture&&g.delete(M)}function B(P){const M=P.target;M.removeEventListener("dispose",B),A(M)}function ee(P){const M=s.get(P);if(M.__webglInit===void 0)return;const se=P.source,_e=S.get(se);if(_e){const be=_e[M.__cacheKey];be.usedTimes--,be.usedTimes===0&&w(P),Object.keys(_e).length===0&&S.delete(se)}s.remove(P)}function w(P){const M=s.get(P);o.deleteTexture(M.__webglTexture);const se=P.source,_e=S.get(se);delete _e[M.__cacheKey],d.memory.textures--}function A(P){const M=s.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),s.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let _e=0;_e<6;_e++){if(Array.isArray(M.__webglFramebuffer[_e]))for(let be=0;be<M.__webglFramebuffer[_e].length;be++)o.deleteFramebuffer(M.__webglFramebuffer[_e][be]);else o.deleteFramebuffer(M.__webglFramebuffer[_e]);M.__webglDepthbuffer&&o.deleteRenderbuffer(M.__webglDepthbuffer[_e])}else{if(Array.isArray(M.__webglFramebuffer))for(let _e=0;_e<M.__webglFramebuffer.length;_e++)o.deleteFramebuffer(M.__webglFramebuffer[_e]);else o.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&o.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&o.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let _e=0;_e<M.__webglColorRenderbuffer.length;_e++)M.__webglColorRenderbuffer[_e]&&o.deleteRenderbuffer(M.__webglColorRenderbuffer[_e]);M.__webglDepthRenderbuffer&&o.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const se=P.textures;for(let _e=0,be=se.length;_e<be;_e++){const pe=s.get(se[_e]);pe.__webglTexture&&(o.deleteTexture(pe.__webglTexture),d.memory.textures--),s.remove(se[_e])}s.remove(P)}let V=0;function K(){V=0}function le(){const P=V;return P>=l.maxTextures&&lt("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l.maxTextures),V+=1,P}function Y(P){const M=[];return M.push(P.wrapS),M.push(P.wrapT),M.push(P.wrapR||0),M.push(P.magFilter),M.push(P.minFilter),M.push(P.anisotropy),M.push(P.internalFormat),M.push(P.format),M.push(P.type),M.push(P.generateMipmaps),M.push(P.premultiplyAlpha),M.push(P.flipY),M.push(P.unpackAlignment),M.push(P.colorSpace),M.join()}function $(P,M){const se=s.get(P);if(P.isVideoTexture&&Xt(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&se.__version!==P.version){const _e=P.image;if(_e===null)lt("WebGLRenderer: Texture marked for update but no image data found.");else if(_e.complete===!1)lt("WebGLRenderer: Texture marked for update but image is incomplete");else{ie(se,P,M);return}}else P.isExternalTexture&&(se.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,se.__webglTexture,o.TEXTURE0+M)}function z(P,M){const se=s.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&se.__version!==P.version){ie(se,P,M);return}else P.isExternalTexture&&(se.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,se.__webglTexture,o.TEXTURE0+M)}function W(P,M){const se=s.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&se.__version!==P.version){ie(se,P,M);return}i.bindTexture(o.TEXTURE_3D,se.__webglTexture,o.TEXTURE0+M)}function L(P,M){const se=s.get(P);if(P.version>0&&se.__version!==P.version){he(se,P,M);return}i.bindTexture(o.TEXTURE_CUBE_MAP,se.__webglTexture,o.TEXTURE0+M)}const X={[Bd]:o.REPEAT,[ua]:o.CLAMP_TO_EDGE,[Hd]:o.MIRRORED_REPEAT},ne={[ii]:o.NEAREST,[$S]:o.NEAREST_MIPMAP_NEAREST,[tc]:o.NEAREST_MIPMAP_LINEAR,[mi]:o.LINEAR,[Wf]:o.LINEAR_MIPMAP_NEAREST,[Ts]:o.LINEAR_MIPMAP_LINEAR},O={[iy]:o.NEVER,[cy]:o.ALWAYS,[ay]:o.LESS,[Lg]:o.LEQUAL,[sy]:o.EQUAL,[ly]:o.GEQUAL,[ry]:o.GREATER,[oy]:o.NOTEQUAL};function Z(P,M){if(M.type===fa&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===mi||M.magFilter===Wf||M.magFilter===tc||M.magFilter===Ts||M.minFilter===mi||M.minFilter===Wf||M.minFilter===tc||M.minFilter===Ts)&&lt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(P,o.TEXTURE_WRAP_S,X[M.wrapS]),o.texParameteri(P,o.TEXTURE_WRAP_T,X[M.wrapT]),(P===o.TEXTURE_3D||P===o.TEXTURE_2D_ARRAY)&&o.texParameteri(P,o.TEXTURE_WRAP_R,X[M.wrapR]),o.texParameteri(P,o.TEXTURE_MAG_FILTER,ne[M.magFilter]),o.texParameteri(P,o.TEXTURE_MIN_FILTER,ne[M.minFilter]),M.compareFunction&&(o.texParameteri(P,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(P,o.TEXTURE_COMPARE_FUNC,O[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===ii||M.minFilter!==tc&&M.minFilter!==Ts||M.type===fa&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||s.get(M).__currentAnisotropy){const se=t.get("EXT_texture_filter_anisotropic");o.texParameterf(P,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,l.getMaxAnisotropy())),s.get(M).__currentAnisotropy=M.anisotropy}}}function me(P,M){let se=!1;P.__webglInit===void 0&&(P.__webglInit=!0,M.addEventListener("dispose",N));const _e=M.source;let be=S.get(_e);be===void 0&&(be={},S.set(_e,be));const pe=Y(M);if(pe!==P.__cacheKey){be[pe]===void 0&&(be[pe]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,se=!0),be[pe].usedTimes++;const qe=be[P.__cacheKey];qe!==void 0&&(be[P.__cacheKey].usedTimes--,qe.usedTimes===0&&w(M)),P.__cacheKey=pe,P.__webglTexture=be[pe].texture}return se}function ye(P,M,se){return Math.floor(Math.floor(P/se)/M)}function Ae(P,M,se,_e){const pe=P.updateRanges;if(pe.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,M.width,M.height,se,_e,M.data);else{pe.sort((Me,Te)=>Me.start-Te.start);let qe=0;for(let Me=1;Me<pe.length;Me++){const Te=pe[qe],We=pe[Me],Ge=Te.start+Te.count,ze=ye(We.start,M.width,4),nt=ye(Te.start,M.width,4);We.start<=Ge+1&&ze===nt&&ye(We.start+We.count-1,M.width,4)===ze?Te.count=Math.max(Te.count,We.start+We.count-Te.start):(++qe,pe[qe]=We)}pe.length=qe+1;const Le=o.getParameter(o.UNPACK_ROW_LENGTH),Qe=o.getParameter(o.UNPACK_SKIP_PIXELS),je=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,M.width);for(let Me=0,Te=pe.length;Me<Te;Me++){const We=pe[Me],Ge=Math.floor(We.start/4),ze=Math.ceil(We.count/4),nt=Ge%M.width,j=Math.floor(Ge/M.width),Ne=ze,Ce=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,nt),o.pixelStorei(o.UNPACK_SKIP_ROWS,j),i.texSubImage2D(o.TEXTURE_2D,0,nt,j,Ne,Ce,se,_e,M.data)}P.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Le),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Qe),o.pixelStorei(o.UNPACK_SKIP_ROWS,je)}}function ie(P,M,se){let _e=o.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(_e=o.TEXTURE_2D_ARRAY),M.isData3DTexture&&(_e=o.TEXTURE_3D);const be=me(P,M),pe=M.source;i.bindTexture(_e,P.__webglTexture,o.TEXTURE0+se);const qe=s.get(pe);if(pe.version!==qe.__version||be===!0){i.activeTexture(o.TEXTURE0+se);const Le=Ut.getPrimaries(Ut.workingColorSpace),Qe=M.colorSpace===qa?null:Ut.getPrimaries(M.colorSpace),je=M.colorSpace===qa||Le===Qe?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,M.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,M.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);let Me=C(M.image,!1,l.maxTextureSize);Me=Ye(M,Me);const Te=u.convert(M.format,M.colorSpace),We=u.convert(M.type);let Ge=U(M.internalFormat,Te,We,M.colorSpace,M.isVideoTexture);Z(_e,M);let ze;const nt=M.mipmaps,j=M.isVideoTexture!==!0,Ne=qe.__version===void 0||be===!0,Ce=pe.dataReady,we=H(M,Me);if(M.isDepthTexture)Ge=F(M.format===Io,M.type),Ne&&(j?i.texStorage2D(o.TEXTURE_2D,1,Ge,Me.width,Me.height):i.texImage2D(o.TEXTURE_2D,0,Ge,Me.width,Me.height,0,Te,We,null));else if(M.isDataTexture)if(nt.length>0){j&&Ne&&i.texStorage2D(o.TEXTURE_2D,we,Ge,nt[0].width,nt[0].height);for(let Ee=0,Se=nt.length;Ee<Se;Ee++)ze=nt[Ee],j?Ce&&i.texSubImage2D(o.TEXTURE_2D,Ee,0,0,ze.width,ze.height,Te,We,ze.data):i.texImage2D(o.TEXTURE_2D,Ee,Ge,ze.width,ze.height,0,Te,We,ze.data);M.generateMipmaps=!1}else j?(Ne&&i.texStorage2D(o.TEXTURE_2D,we,Ge,Me.width,Me.height),Ce&&Ae(M,Me,Te,We)):i.texImage2D(o.TEXTURE_2D,0,Ge,Me.width,Me.height,0,Te,We,Me.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){j&&Ne&&i.texStorage3D(o.TEXTURE_2D_ARRAY,we,Ge,nt[0].width,nt[0].height,Me.depth);for(let Ee=0,Se=nt.length;Ee<Se;Ee++)if(ze=nt[Ee],M.format!==Ei)if(Te!==null)if(j){if(Ce)if(M.layerUpdates.size>0){const Ie=Kx(ze.width,ze.height,M.format,M.type);for(const it of M.layerUpdates){const Bt=ze.data.subarray(it*Ie/ze.data.BYTES_PER_ELEMENT,(it+1)*Ie/ze.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Ee,0,0,it,ze.width,ze.height,1,Te,Bt)}M.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Ee,0,0,0,ze.width,ze.height,Me.depth,Te,ze.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Ee,Ge,ze.width,ze.height,Me.depth,0,ze.data,0,0);else lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else j?Ce&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Ee,0,0,0,ze.width,ze.height,Me.depth,Te,We,ze.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Ee,Ge,ze.width,ze.height,Me.depth,0,Te,We,ze.data)}else{j&&Ne&&i.texStorage2D(o.TEXTURE_2D,we,Ge,nt[0].width,nt[0].height);for(let Ee=0,Se=nt.length;Ee<Se;Ee++)ze=nt[Ee],M.format!==Ei?Te!==null?j?Ce&&i.compressedTexSubImage2D(o.TEXTURE_2D,Ee,0,0,ze.width,ze.height,Te,ze.data):i.compressedTexImage2D(o.TEXTURE_2D,Ee,Ge,ze.width,ze.height,0,ze.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):j?Ce&&i.texSubImage2D(o.TEXTURE_2D,Ee,0,0,ze.width,ze.height,Te,We,ze.data):i.texImage2D(o.TEXTURE_2D,Ee,Ge,ze.width,ze.height,0,Te,We,ze.data)}else if(M.isDataArrayTexture)if(j){if(Ne&&i.texStorage3D(o.TEXTURE_2D_ARRAY,we,Ge,Me.width,Me.height,Me.depth),Ce)if(M.layerUpdates.size>0){const Ee=Kx(Me.width,Me.height,M.format,M.type);for(const Se of M.layerUpdates){const Ie=Me.data.subarray(Se*Ee/Me.data.BYTES_PER_ELEMENT,(Se+1)*Ee/Me.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Se,Me.width,Me.height,1,Te,We,Ie)}M.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Te,We,Me.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Ge,Me.width,Me.height,Me.depth,0,Te,We,Me.data);else if(M.isData3DTexture)j?(Ne&&i.texStorage3D(o.TEXTURE_3D,we,Ge,Me.width,Me.height,Me.depth),Ce&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Te,We,Me.data)):i.texImage3D(o.TEXTURE_3D,0,Ge,Me.width,Me.height,Me.depth,0,Te,We,Me.data);else if(M.isFramebufferTexture){if(Ne)if(j)i.texStorage2D(o.TEXTURE_2D,we,Ge,Me.width,Me.height);else{let Ee=Me.width,Se=Me.height;for(let Ie=0;Ie<we;Ie++)i.texImage2D(o.TEXTURE_2D,Ie,Ge,Ee,Se,0,Te,We,null),Ee>>=1,Se>>=1}}else if(nt.length>0){if(j&&Ne){const Ee=at(nt[0]);i.texStorage2D(o.TEXTURE_2D,we,Ge,Ee.width,Ee.height)}for(let Ee=0,Se=nt.length;Ee<Se;Ee++)ze=nt[Ee],j?Ce&&i.texSubImage2D(o.TEXTURE_2D,Ee,0,0,Te,We,ze):i.texImage2D(o.TEXTURE_2D,Ee,Ge,Te,We,ze);M.generateMipmaps=!1}else if(j){if(Ne){const Ee=at(Me);i.texStorage2D(o.TEXTURE_2D,we,Ge,Ee.width,Ee.height)}Ce&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Te,We,Me)}else i.texImage2D(o.TEXTURE_2D,0,Ge,Te,We,Me);b(M)&&_(_e),qe.__version=pe.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function he(P,M,se){if(M.image.length!==6)return;const _e=me(P,M),be=M.source;i.bindTexture(o.TEXTURE_CUBE_MAP,P.__webglTexture,o.TEXTURE0+se);const pe=s.get(be);if(be.version!==pe.__version||_e===!0){i.activeTexture(o.TEXTURE0+se);const qe=Ut.getPrimaries(Ut.workingColorSpace),Le=M.colorSpace===qa?null:Ut.getPrimaries(M.colorSpace),Qe=M.colorSpace===qa||qe===Le?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,M.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,M.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe);const je=M.isCompressedTexture||M.image[0].isCompressedTexture,Me=M.image[0]&&M.image[0].isDataTexture,Te=[];for(let Se=0;Se<6;Se++)!je&&!Me?Te[Se]=C(M.image[Se],!0,l.maxCubemapSize):Te[Se]=Me?M.image[Se].image:M.image[Se],Te[Se]=Ye(M,Te[Se]);const We=Te[0],Ge=u.convert(M.format,M.colorSpace),ze=u.convert(M.type),nt=U(M.internalFormat,Ge,ze,M.colorSpace),j=M.isVideoTexture!==!0,Ne=pe.__version===void 0||_e===!0,Ce=be.dataReady;let we=H(M,We);Z(o.TEXTURE_CUBE_MAP,M);let Ee;if(je){j&&Ne&&i.texStorage2D(o.TEXTURE_CUBE_MAP,we,nt,We.width,We.height);for(let Se=0;Se<6;Se++){Ee=Te[Se].mipmaps;for(let Ie=0;Ie<Ee.length;Ie++){const it=Ee[Ie];M.format!==Ei?Ge!==null?j?Ce&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ie,0,0,it.width,it.height,Ge,it.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ie,nt,it.width,it.height,0,it.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):j?Ce&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ie,0,0,it.width,it.height,Ge,ze,it.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ie,nt,it.width,it.height,0,Ge,ze,it.data)}}}else{if(Ee=M.mipmaps,j&&Ne){Ee.length>0&&we++;const Se=at(Te[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,we,nt,Se.width,Se.height)}for(let Se=0;Se<6;Se++)if(Me){j?Ce&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,Te[Se].width,Te[Se].height,Ge,ze,Te[Se].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,nt,Te[Se].width,Te[Se].height,0,Ge,ze,Te[Se].data);for(let Ie=0;Ie<Ee.length;Ie++){const Bt=Ee[Ie].image[Se].image;j?Ce&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ie+1,0,0,Bt.width,Bt.height,Ge,ze,Bt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ie+1,nt,Bt.width,Bt.height,0,Ge,ze,Bt.data)}}else{j?Ce&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,Ge,ze,Te[Se]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,nt,Ge,ze,Te[Se]);for(let Ie=0;Ie<Ee.length;Ie++){const it=Ee[Ie];j?Ce&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ie+1,0,0,Ge,ze,it.image[Se]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ie+1,nt,Ge,ze,it.image[Se])}}}b(M)&&_(o.TEXTURE_CUBE_MAP),pe.__version=be.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function De(P,M,se,_e,be,pe){const qe=u.convert(se.format,se.colorSpace),Le=u.convert(se.type),Qe=U(se.internalFormat,qe,Le,se.colorSpace),je=s.get(M),Me=s.get(se);if(Me.__renderTarget=M,!je.__hasExternalTextures){const Te=Math.max(1,M.width>>pe),We=Math.max(1,M.height>>pe);be===o.TEXTURE_3D||be===o.TEXTURE_2D_ARRAY?i.texImage3D(be,pe,Qe,Te,We,M.depth,0,qe,Le,null):i.texImage2D(be,pe,Qe,Te,We,0,qe,Le,null)}i.bindFramebuffer(o.FRAMEBUFFER,P),Ve(M)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,_e,be,Me.__webglTexture,0,Pt(M)):(be===o.TEXTURE_2D||be>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&be<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,_e,be,Me.__webglTexture,pe),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Be(P,M,se){if(o.bindRenderbuffer(o.RENDERBUFFER,P),M.depthBuffer){const _e=M.depthTexture,be=_e&&_e.isDepthTexture?_e.type:null,pe=F(M.stencilBuffer,be),qe=M.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Le=Pt(M);Ve(M)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Le,pe,M.width,M.height):se?o.renderbufferStorageMultisample(o.RENDERBUFFER,Le,pe,M.width,M.height):o.renderbufferStorage(o.RENDERBUFFER,pe,M.width,M.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,qe,o.RENDERBUFFER,P)}else{const _e=M.textures;for(let be=0;be<_e.length;be++){const pe=_e[be],qe=u.convert(pe.format,pe.colorSpace),Le=u.convert(pe.type),Qe=U(pe.internalFormat,qe,Le,pe.colorSpace),je=Pt(M);se&&Ve(M)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,je,Qe,M.width,M.height):Ve(M)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,je,Qe,M.width,M.height):o.renderbufferStorage(o.RENDERBUFFER,Qe,M.width,M.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function ke(P,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,P),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const _e=s.get(M.depthTexture);_e.__renderTarget=M,(!_e.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),$(M.depthTexture,0);const be=_e.__webglTexture,pe=Pt(M);if(M.depthTexture.format===Po)Ve(M)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,be,0,pe):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,be,0);else if(M.depthTexture.format===Io)Ve(M)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,be,0,pe):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,be,0);else throw new Error("Unknown depthTexture format")}function rt(P){const M=s.get(P),se=P.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==P.depthTexture){const _e=P.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),_e){const be=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,_e.removeEventListener("dispose",be)};_e.addEventListener("dispose",be),M.__depthDisposeCallback=be}M.__boundDepthTexture=_e}if(P.depthTexture&&!M.__autoAllocateDepthBuffer){if(se)throw new Error("target.depthTexture not supported in Cube render targets");const _e=P.texture.mipmaps;_e&&_e.length>0?ke(M.__webglFramebuffer[0],P):ke(M.__webglFramebuffer,P)}else if(se){M.__webglDepthbuffer=[];for(let _e=0;_e<6;_e++)if(i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer[_e]),M.__webglDepthbuffer[_e]===void 0)M.__webglDepthbuffer[_e]=o.createRenderbuffer(),Be(M.__webglDepthbuffer[_e],P,!1);else{const be=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,pe=M.__webglDepthbuffer[_e];o.bindRenderbuffer(o.RENDERBUFFER,pe),o.framebufferRenderbuffer(o.FRAMEBUFFER,be,o.RENDERBUFFER,pe)}}else{const _e=P.texture.mipmaps;if(_e&&_e.length>0?i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=o.createRenderbuffer(),Be(M.__webglDepthbuffer,P,!1);else{const be=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,pe=M.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,pe),o.framebufferRenderbuffer(o.FRAMEBUFFER,be,o.RENDERBUFFER,pe)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Zt(P,M,se){const _e=s.get(P);M!==void 0&&De(_e.__webglFramebuffer,P,P.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),se!==void 0&&rt(P)}function dt(P){const M=P.texture,se=s.get(P),_e=s.get(M);P.addEventListener("dispose",B);const be=P.textures,pe=P.isWebGLCubeRenderTarget===!0,qe=be.length>1;if(qe||(_e.__webglTexture===void 0&&(_e.__webglTexture=o.createTexture()),_e.__version=M.version,d.memory.textures++),pe){se.__webglFramebuffer=[];for(let Le=0;Le<6;Le++)if(M.mipmaps&&M.mipmaps.length>0){se.__webglFramebuffer[Le]=[];for(let Qe=0;Qe<M.mipmaps.length;Qe++)se.__webglFramebuffer[Le][Qe]=o.createFramebuffer()}else se.__webglFramebuffer[Le]=o.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){se.__webglFramebuffer=[];for(let Le=0;Le<M.mipmaps.length;Le++)se.__webglFramebuffer[Le]=o.createFramebuffer()}else se.__webglFramebuffer=o.createFramebuffer();if(qe)for(let Le=0,Qe=be.length;Le<Qe;Le++){const je=s.get(be[Le]);je.__webglTexture===void 0&&(je.__webglTexture=o.createTexture(),d.memory.textures++)}if(P.samples>0&&Ve(P)===!1){se.__webglMultisampledFramebuffer=o.createFramebuffer(),se.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,se.__webglMultisampledFramebuffer);for(let Le=0;Le<be.length;Le++){const Qe=be[Le];se.__webglColorRenderbuffer[Le]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,se.__webglColorRenderbuffer[Le]);const je=u.convert(Qe.format,Qe.colorSpace),Me=u.convert(Qe.type),Te=U(Qe.internalFormat,je,Me,Qe.colorSpace,P.isXRRenderTarget===!0),We=Pt(P);o.renderbufferStorageMultisample(o.RENDERBUFFER,We,Te,P.width,P.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Le,o.RENDERBUFFER,se.__webglColorRenderbuffer[Le])}o.bindRenderbuffer(o.RENDERBUFFER,null),P.depthBuffer&&(se.__webglDepthRenderbuffer=o.createRenderbuffer(),Be(se.__webglDepthRenderbuffer,P,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(pe){i.bindTexture(o.TEXTURE_CUBE_MAP,_e.__webglTexture),Z(o.TEXTURE_CUBE_MAP,M);for(let Le=0;Le<6;Le++)if(M.mipmaps&&M.mipmaps.length>0)for(let Qe=0;Qe<M.mipmaps.length;Qe++)De(se.__webglFramebuffer[Le][Qe],P,M,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Le,Qe);else De(se.__webglFramebuffer[Le],P,M,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0);b(M)&&_(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(qe){for(let Le=0,Qe=be.length;Le<Qe;Le++){const je=be[Le],Me=s.get(je);let Te=o.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Te=P.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Te,Me.__webglTexture),Z(Te,je),De(se.__webglFramebuffer,P,je,o.COLOR_ATTACHMENT0+Le,Te,0),b(je)&&_(Te)}i.unbindTexture()}else{let Le=o.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Le=P.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Le,_e.__webglTexture),Z(Le,M),M.mipmaps&&M.mipmaps.length>0)for(let Qe=0;Qe<M.mipmaps.length;Qe++)De(se.__webglFramebuffer[Qe],P,M,o.COLOR_ATTACHMENT0,Le,Qe);else De(se.__webglFramebuffer,P,M,o.COLOR_ATTACHMENT0,Le,0);b(M)&&_(Le),i.unbindTexture()}P.depthBuffer&&rt(P)}function Rt(P){const M=P.textures;for(let se=0,_e=M.length;se<_e;se++){const be=M[se];if(b(be)){const pe=I(P),qe=s.get(be).__webglTexture;i.bindTexture(pe,qe),_(pe),i.unbindTexture()}}}const k=[],ht=[];function mt(P){if(P.samples>0){if(Ve(P)===!1){const M=P.textures,se=P.width,_e=P.height;let be=o.COLOR_BUFFER_BIT;const pe=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,qe=s.get(P),Le=M.length>1;if(Le)for(let je=0;je<M.length;je++)i.bindFramebuffer(o.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+je,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,qe.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+je,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,qe.__webglMultisampledFramebuffer);const Qe=P.texture.mipmaps;Qe&&Qe.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,qe.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,qe.__webglFramebuffer);for(let je=0;je<M.length;je++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(be|=o.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(be|=o.STENCIL_BUFFER_BIT)),Le){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,qe.__webglColorRenderbuffer[je]);const Me=s.get(M[je]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Me,0)}o.blitFramebuffer(0,0,se,_e,0,0,se,_e,be,o.NEAREST),m===!0&&(k.length=0,ht.length=0,k.push(o.COLOR_ATTACHMENT0+je),P.depthBuffer&&P.resolveDepthBuffer===!1&&(k.push(pe),ht.push(pe),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,ht)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,k))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Le)for(let je=0;je<M.length;je++){i.bindFramebuffer(o.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+je,o.RENDERBUFFER,qe.__webglColorRenderbuffer[je]);const Me=s.get(M[je]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,qe.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+je,o.TEXTURE_2D,Me,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,qe.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&m){const M=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[M])}}}function Pt(P){return Math.min(l.maxSamples,P.samples)}function Ve(P){const M=s.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Xt(P){const M=d.render.frame;g.get(P)!==M&&(g.set(P,M),P.update())}function Ye(P,M){const se=P.colorSpace,_e=P.format,be=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||se!==Tr&&se!==qa&&(Ut.getTransfer(se)===kt?(_e!==Ei||be!==Li)&&lt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):sn("WebGLTextures: Unsupported texture color space:",se)),M}function at(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(p.width=P.naturalWidth||P.width,p.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(p.width=P.displayWidth,p.height=P.displayHeight):(p.width=P.width,p.height=P.height),p}this.allocateTextureUnit=le,this.resetTextureUnits=K,this.setTexture2D=$,this.setTexture2DArray=z,this.setTexture3D=W,this.setTextureCube=L,this.rebindTextures=Zt,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=Rt,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=De,this.useMultisampledRTT=Ve}function ME(o,t){function i(s,l=qa){let u;const d=Ut.getTransfer(l);if(s===Li)return o.UNSIGNED_BYTE;if(s===Mh)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Eh)return o.UNSIGNED_SHORT_5_5_5_1;if(s===Rg)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===Cg)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===Tg)return o.BYTE;if(s===Ag)return o.SHORT;if(s===Oo)return o.UNSIGNED_SHORT;if(s===bh)return o.INT;if(s===As)return o.UNSIGNED_INT;if(s===fa)return o.FLOAT;if(s===wr)return o.HALF_FLOAT;if(s===wg)return o.ALPHA;if(s===Dg)return o.RGB;if(s===Ei)return o.RGBA;if(s===Po)return o.DEPTH_COMPONENT;if(s===Io)return o.DEPTH_STENCIL;if(s===Ng)return o.RED;if(s===Th)return o.RED_INTEGER;if(s===Ah)return o.RG;if(s===Rh)return o.RG_INTEGER;if(s===Ch)return o.RGBA_INTEGER;if(s===yc||s===bc||s===Mc||s===Ec)if(d===kt)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===yc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===bc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Mc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ec)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===yc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===bc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Mc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ec)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Vd||s===Gd||s===kd||s===Xd)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===Vd)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Gd)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===kd)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Xd)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===jd||s===qd||s===Wd)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(s===jd||s===qd)return d===kt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===Wd)return d===kt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Yd||s===Zd||s===Kd||s===Qd||s===Jd||s===$d||s===eh||s===th||s===nh||s===ih||s===ah||s===sh||s===rh||s===oh)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(s===Yd)return d===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Zd)return d===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Kd)return d===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Qd)return d===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Jd)return d===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===$d)return d===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===eh)return d===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===th)return d===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===nh)return d===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ih)return d===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ah)return d===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===sh)return d===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===rh)return d===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===oh)return d===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===lh||s===ch||s===uh)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(s===lh)return d===kt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===ch)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===uh)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===fh||s===dh||s===hh||s===ph)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(s===fh)return u.COMPRESSED_RED_RGTC1_EXT;if(s===dh)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===hh)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===ph)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===zo?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const EE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,TE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class AE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new jg(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new pa({vertexShader:EE,fragmentShader:TE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Un(new Nc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class RE extends Dr{constructor(t,i){super();const s=this;let l=null,u=1,d=null,h="local-floor",m=1,p=null,g=null,x=null,S=null,y=null,E=null;const C=typeof XRWebGLBinding<"u",b=new AE,_={},I=i.getContextAttributes();let U=null,F=null;const H=[],N=[],B=new Lt;let ee=null;const w=new ni;w.viewport=new tn;const A=new ni;A.viewport=new tn;const V=[w,A],K=new qy;let le=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let he=H[ie];return he===void 0&&(he=new xd,H[ie]=he),he.getTargetRaySpace()},this.getControllerGrip=function(ie){let he=H[ie];return he===void 0&&(he=new xd,H[ie]=he),he.getGripSpace()},this.getHand=function(ie){let he=H[ie];return he===void 0&&(he=new xd,H[ie]=he),he.getHandSpace()};function $(ie){const he=N.indexOf(ie.inputSource);if(he===-1)return;const De=H[he];De!==void 0&&(De.update(ie.inputSource,ie.frame,p||d),De.dispatchEvent({type:ie.type,data:ie.inputSource}))}function z(){l.removeEventListener("select",$),l.removeEventListener("selectstart",$),l.removeEventListener("selectend",$),l.removeEventListener("squeeze",$),l.removeEventListener("squeezestart",$),l.removeEventListener("squeezeend",$),l.removeEventListener("end",z),l.removeEventListener("inputsourceschange",W);for(let ie=0;ie<H.length;ie++){const he=N[ie];he!==null&&(N[ie]=null,H[ie].disconnect(he))}le=null,Y=null,b.reset();for(const ie in _)delete _[ie];t.setRenderTarget(U),y=null,S=null,x=null,l=null,F=null,Ae.stop(),s.isPresenting=!1,t.setPixelRatio(ee),t.setSize(B.width,B.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){u=ie,s.isPresenting===!0&&lt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){h=ie,s.isPresenting===!0&&lt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(ie){p=ie},this.getBaseLayer=function(){return S!==null?S:y},this.getBinding=function(){return x===null&&C&&(x=new XRWebGLBinding(l,i)),x},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(ie){if(l=ie,l!==null){if(U=t.getRenderTarget(),l.addEventListener("select",$),l.addEventListener("selectstart",$),l.addEventListener("selectend",$),l.addEventListener("squeeze",$),l.addEventListener("squeezestart",$),l.addEventListener("squeezeend",$),l.addEventListener("end",z),l.addEventListener("inputsourceschange",W),I.xrCompatible!==!0&&await i.makeXRCompatible(),ee=t.getPixelRatio(),t.getSize(B),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let De=null,Be=null,ke=null;I.depth&&(ke=I.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,De=I.stencil?Io:Po,Be=I.stencil?zo:As);const rt={colorFormat:i.RGBA8,depthFormat:ke,scaleFactor:u};x=this.getBinding(),S=x.createProjectionLayer(rt),l.updateRenderState({layers:[S]}),t.setPixelRatio(1),t.setSize(S.textureWidth,S.textureHeight,!1),F=new Rs(S.textureWidth,S.textureHeight,{format:Ei,type:Li,depthTexture:new Xg(S.textureWidth,S.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,De),stencilBuffer:I.stencil,colorSpace:t.outputColorSpace,samples:I.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const De={antialias:I.antialias,alpha:!0,depth:I.depth,stencil:I.stencil,framebufferScaleFactor:u};y=new XRWebGLLayer(l,i,De),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),F=new Rs(y.framebufferWidth,y.framebufferHeight,{format:Ei,type:Li,colorSpace:t.outputColorSpace,stencilBuffer:I.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}F.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),Ae.setContext(l),Ae.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function W(ie){for(let he=0;he<ie.removed.length;he++){const De=ie.removed[he],Be=N.indexOf(De);Be>=0&&(N[Be]=null,H[Be].disconnect(De))}for(let he=0;he<ie.added.length;he++){const De=ie.added[he];let Be=N.indexOf(De);if(Be===-1){for(let rt=0;rt<H.length;rt++)if(rt>=N.length){N.push(De),Be=rt;break}else if(N[rt]===null){N[rt]=De,Be=rt;break}if(Be===-1)break}const ke=H[Be];ke&&ke.connect(De)}}const L=new de,X=new de;function ne(ie,he,De){L.setFromMatrixPosition(he.matrixWorld),X.setFromMatrixPosition(De.matrixWorld);const Be=L.distanceTo(X),ke=he.projectionMatrix.elements,rt=De.projectionMatrix.elements,Zt=ke[14]/(ke[10]-1),dt=ke[14]/(ke[10]+1),Rt=(ke[9]+1)/ke[5],k=(ke[9]-1)/ke[5],ht=(ke[8]-1)/ke[0],mt=(rt[8]+1)/rt[0],Pt=Zt*ht,Ve=Zt*mt,Xt=Be/(-ht+mt),Ye=Xt*-ht;if(he.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(Ye),ie.translateZ(Xt),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),ke[10]===-1)ie.projectionMatrix.copy(he.projectionMatrix),ie.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const at=Zt+Xt,P=dt+Xt,M=Pt-Ye,se=Ve+(Be-Ye),_e=Rt*dt/P*at,be=k*dt/P*at;ie.projectionMatrix.makePerspective(M,se,_e,be,at,P),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function O(ie,he){he===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(he.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(l===null)return;let he=ie.near,De=ie.far;b.texture!==null&&(b.depthNear>0&&(he=b.depthNear),b.depthFar>0&&(De=b.depthFar)),K.near=A.near=w.near=he,K.far=A.far=w.far=De,(le!==K.near||Y!==K.far)&&(l.updateRenderState({depthNear:K.near,depthFar:K.far}),le=K.near,Y=K.far),K.layers.mask=ie.layers.mask|6,w.layers.mask=K.layers.mask&3,A.layers.mask=K.layers.mask&5;const Be=ie.parent,ke=K.cameras;O(K,Be);for(let rt=0;rt<ke.length;rt++)O(ke[rt],Be);ke.length===2?ne(K,w,A):K.projectionMatrix.copy(w.projectionMatrix),Z(ie,K,Be)};function Z(ie,he,De){De===null?ie.matrix.copy(he.matrixWorld):(ie.matrix.copy(De.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(he.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(he.projectionMatrix),ie.projectionMatrixInverse.copy(he.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=mh*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(S===null&&y===null))return m},this.setFoveation=function(ie){m=ie,S!==null&&(S.fixedFoveation=ie),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=ie)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(K)},this.getCameraTexture=function(ie){return _[ie]};let me=null;function ye(ie,he){if(g=he.getViewerPose(p||d),E=he,g!==null){const De=g.views;y!==null&&(t.setRenderTargetFramebuffer(F,y.framebuffer),t.setRenderTarget(F));let Be=!1;De.length!==K.cameras.length&&(K.cameras.length=0,Be=!0);for(let dt=0;dt<De.length;dt++){const Rt=De[dt];let k=null;if(y!==null)k=y.getViewport(Rt);else{const mt=x.getViewSubImage(S,Rt);k=mt.viewport,dt===0&&(t.setRenderTargetTextures(F,mt.colorTexture,mt.depthStencilTexture),t.setRenderTarget(F))}let ht=V[dt];ht===void 0&&(ht=new ni,ht.layers.enable(dt),ht.viewport=new tn,V[dt]=ht),ht.matrix.fromArray(Rt.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(Rt.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(k.x,k.y,k.width,k.height),dt===0&&(K.matrix.copy(ht.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),Be===!0&&K.cameras.push(ht)}const ke=l.enabledFeatures;if(ke&&ke.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){x=s.getBinding();const dt=x.getDepthInformation(De[0]);dt&&dt.isValid&&dt.texture&&b.init(dt,l.renderState)}if(ke&&ke.includes("camera-access")&&C){t.state.unbindTexture(),x=s.getBinding();for(let dt=0;dt<De.length;dt++){const Rt=De[dt].camera;if(Rt){let k=_[Rt];k||(k=new jg,_[Rt]=k);const ht=x.getCameraImage(Rt);k.sourceTexture=ht}}}}for(let De=0;De<H.length;De++){const Be=N[De],ke=H[De];Be!==null&&ke!==void 0&&ke.update(Be,he,p||d)}me&&me(ie,he),he.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:he}),E=null}const Ae=new Qg;Ae.setAnimationLoop(ye),this.setAnimationLoop=function(ie){me=ie},this.dispose=function(){}}}const ys=new Oi,CE=new rn;function wE(o,t){function i(b,_){b.matrixAutoUpdate===!0&&b.updateMatrix(),_.value.copy(b.matrix)}function s(b,_){_.color.getRGB(b.fogColor.value,Hg(o)),_.isFog?(b.fogNear.value=_.near,b.fogFar.value=_.far):_.isFogExp2&&(b.fogDensity.value=_.density)}function l(b,_,I,U,F){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(b,_):_.isMeshToonMaterial?(u(b,_),x(b,_)):_.isMeshPhongMaterial?(u(b,_),g(b,_)):_.isMeshStandardMaterial?(u(b,_),S(b,_),_.isMeshPhysicalMaterial&&y(b,_,F)):_.isMeshMatcapMaterial?(u(b,_),E(b,_)):_.isMeshDepthMaterial?u(b,_):_.isMeshDistanceMaterial?(u(b,_),C(b,_)):_.isMeshNormalMaterial?u(b,_):_.isLineBasicMaterial?(d(b,_),_.isLineDashedMaterial&&h(b,_)):_.isPointsMaterial?m(b,_,I,U):_.isSpriteMaterial?p(b,_):_.isShadowMaterial?(b.color.value.copy(_.color),b.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(b,_){b.opacity.value=_.opacity,_.color&&b.diffuse.value.copy(_.color),_.emissive&&b.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(b.map.value=_.map,i(_.map,b.mapTransform)),_.alphaMap&&(b.alphaMap.value=_.alphaMap,i(_.alphaMap,b.alphaMapTransform)),_.bumpMap&&(b.bumpMap.value=_.bumpMap,i(_.bumpMap,b.bumpMapTransform),b.bumpScale.value=_.bumpScale,_.side===Xn&&(b.bumpScale.value*=-1)),_.normalMap&&(b.normalMap.value=_.normalMap,i(_.normalMap,b.normalMapTransform),b.normalScale.value.copy(_.normalScale),_.side===Xn&&b.normalScale.value.negate()),_.displacementMap&&(b.displacementMap.value=_.displacementMap,i(_.displacementMap,b.displacementMapTransform),b.displacementScale.value=_.displacementScale,b.displacementBias.value=_.displacementBias),_.emissiveMap&&(b.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,b.emissiveMapTransform)),_.specularMap&&(b.specularMap.value=_.specularMap,i(_.specularMap,b.specularMapTransform)),_.alphaTest>0&&(b.alphaTest.value=_.alphaTest);const I=t.get(_),U=I.envMap,F=I.envMapRotation;U&&(b.envMap.value=U,ys.copy(F),ys.x*=-1,ys.y*=-1,ys.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(ys.y*=-1,ys.z*=-1),b.envMapRotation.value.setFromMatrix4(CE.makeRotationFromEuler(ys)),b.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,b.reflectivity.value=_.reflectivity,b.ior.value=_.ior,b.refractionRatio.value=_.refractionRatio),_.lightMap&&(b.lightMap.value=_.lightMap,b.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,b.lightMapTransform)),_.aoMap&&(b.aoMap.value=_.aoMap,b.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,b.aoMapTransform))}function d(b,_){b.diffuse.value.copy(_.color),b.opacity.value=_.opacity,_.map&&(b.map.value=_.map,i(_.map,b.mapTransform))}function h(b,_){b.dashSize.value=_.dashSize,b.totalSize.value=_.dashSize+_.gapSize,b.scale.value=_.scale}function m(b,_,I,U){b.diffuse.value.copy(_.color),b.opacity.value=_.opacity,b.size.value=_.size*I,b.scale.value=U*.5,_.map&&(b.map.value=_.map,i(_.map,b.uvTransform)),_.alphaMap&&(b.alphaMap.value=_.alphaMap,i(_.alphaMap,b.alphaMapTransform)),_.alphaTest>0&&(b.alphaTest.value=_.alphaTest)}function p(b,_){b.diffuse.value.copy(_.color),b.opacity.value=_.opacity,b.rotation.value=_.rotation,_.map&&(b.map.value=_.map,i(_.map,b.mapTransform)),_.alphaMap&&(b.alphaMap.value=_.alphaMap,i(_.alphaMap,b.alphaMapTransform)),_.alphaTest>0&&(b.alphaTest.value=_.alphaTest)}function g(b,_){b.specular.value.copy(_.specular),b.shininess.value=Math.max(_.shininess,1e-4)}function x(b,_){_.gradientMap&&(b.gradientMap.value=_.gradientMap)}function S(b,_){b.metalness.value=_.metalness,_.metalnessMap&&(b.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,b.metalnessMapTransform)),b.roughness.value=_.roughness,_.roughnessMap&&(b.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,b.roughnessMapTransform)),_.envMap&&(b.envMapIntensity.value=_.envMapIntensity)}function y(b,_,I){b.ior.value=_.ior,_.sheen>0&&(b.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),b.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(b.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,b.sheenColorMapTransform)),_.sheenRoughnessMap&&(b.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,b.sheenRoughnessMapTransform))),_.clearcoat>0&&(b.clearcoat.value=_.clearcoat,b.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(b.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,b.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(b.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,b.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(b.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,b.clearcoatNormalMapTransform),b.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Xn&&b.clearcoatNormalScale.value.negate())),_.dispersion>0&&(b.dispersion.value=_.dispersion),_.iridescence>0&&(b.iridescence.value=_.iridescence,b.iridescenceIOR.value=_.iridescenceIOR,b.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],b.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(b.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,b.iridescenceMapTransform)),_.iridescenceThicknessMap&&(b.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,b.iridescenceThicknessMapTransform))),_.transmission>0&&(b.transmission.value=_.transmission,b.transmissionSamplerMap.value=I.texture,b.transmissionSamplerSize.value.set(I.width,I.height),_.transmissionMap&&(b.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,b.transmissionMapTransform)),b.thickness.value=_.thickness,_.thicknessMap&&(b.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,b.thicknessMapTransform)),b.attenuationDistance.value=_.attenuationDistance,b.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(b.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(b.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,b.anisotropyMapTransform))),b.specularIntensity.value=_.specularIntensity,b.specularColor.value.copy(_.specularColor),_.specularColorMap&&(b.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,b.specularColorMapTransform)),_.specularIntensityMap&&(b.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,b.specularIntensityMapTransform))}function E(b,_){_.matcap&&(b.matcap.value=_.matcap)}function C(b,_){const I=t.get(_).light;b.referencePosition.value.setFromMatrixPosition(I.matrixWorld),b.nearDistance.value=I.shadow.camera.near,b.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function DE(o,t,i,s){let l={},u={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(I,U){const F=U.program;s.uniformBlockBinding(I,F)}function p(I,U){let F=l[I.id];F===void 0&&(E(I),F=g(I),l[I.id]=F,I.addEventListener("dispose",b));const H=U.program;s.updateUBOMapping(I,H);const N=t.render.frame;u[I.id]!==N&&(S(I),u[I.id]=N)}function g(I){const U=x();I.__bindingPointIndex=U;const F=o.createBuffer(),H=I.__size,N=I.usage;return o.bindBuffer(o.UNIFORM_BUFFER,F),o.bufferData(o.UNIFORM_BUFFER,H,N),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,U,F),F}function x(){for(let I=0;I<h;I++)if(d.indexOf(I)===-1)return d.push(I),I;return sn("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(I){const U=l[I.id],F=I.uniforms,H=I.__cache;o.bindBuffer(o.UNIFORM_BUFFER,U);for(let N=0,B=F.length;N<B;N++){const ee=Array.isArray(F[N])?F[N]:[F[N]];for(let w=0,A=ee.length;w<A;w++){const V=ee[w];if(y(V,N,w,H)===!0){const K=V.__offset,le=Array.isArray(V.value)?V.value:[V.value];let Y=0;for(let $=0;$<le.length;$++){const z=le[$],W=C(z);typeof z=="number"||typeof z=="boolean"?(V.__data[0]=z,o.bufferSubData(o.UNIFORM_BUFFER,K+Y,V.__data)):z.isMatrix3?(V.__data[0]=z.elements[0],V.__data[1]=z.elements[1],V.__data[2]=z.elements[2],V.__data[3]=0,V.__data[4]=z.elements[3],V.__data[5]=z.elements[4],V.__data[6]=z.elements[5],V.__data[7]=0,V.__data[8]=z.elements[6],V.__data[9]=z.elements[7],V.__data[10]=z.elements[8],V.__data[11]=0):(z.toArray(V.__data,Y),Y+=W.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,K,V.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(I,U,F,H){const N=I.value,B=U+"_"+F;if(H[B]===void 0)return typeof N=="number"||typeof N=="boolean"?H[B]=N:H[B]=N.clone(),!0;{const ee=H[B];if(typeof N=="number"||typeof N=="boolean"){if(ee!==N)return H[B]=N,!0}else if(ee.equals(N)===!1)return ee.copy(N),!0}return!1}function E(I){const U=I.uniforms;let F=0;const H=16;for(let B=0,ee=U.length;B<ee;B++){const w=Array.isArray(U[B])?U[B]:[U[B]];for(let A=0,V=w.length;A<V;A++){const K=w[A],le=Array.isArray(K.value)?K.value:[K.value];for(let Y=0,$=le.length;Y<$;Y++){const z=le[Y],W=C(z),L=F%H,X=L%W.boundary,ne=L+X;F+=X,ne!==0&&H-ne<W.storage&&(F+=H-ne),K.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=F,F+=W.storage}}}const N=F%H;return N>0&&(F+=H-N),I.__size=F,I.__cache={},this}function C(I){const U={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(U.boundary=4,U.storage=4):I.isVector2?(U.boundary=8,U.storage=8):I.isVector3||I.isColor?(U.boundary=16,U.storage=12):I.isVector4?(U.boundary=16,U.storage=16):I.isMatrix3?(U.boundary=48,U.storage=48):I.isMatrix4?(U.boundary=64,U.storage=64):I.isTexture?lt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):lt("WebGLRenderer: Unsupported uniform value type.",I),U}function b(I){const U=I.target;U.removeEventListener("dispose",b);const F=d.indexOf(U.__bindingPointIndex);d.splice(F,1),o.deleteBuffer(l[U.id]),delete l[U.id],delete u[U.id]}function _(){for(const I in l)o.deleteBuffer(l[I]);d=[],l={},u={}}return{bind:m,update:p,dispose:_}}const NE=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let oa=null;function UE(){return oa===null&&(oa=new Fy(NE,32,32,Ah,wr),oa.minFilter=mi,oa.magFilter=mi,oa.wrapS=ua,oa.wrapT=ua,oa.generateMipmaps=!1,oa.needsUpdate=!0),oa}class n_{constructor(t={}){const{canvas:i=uy(),context:s=null,depth:l=!0,stencil:u=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:S=!1}=t;this.isWebGLRenderer=!0;let y;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=s.getContextAttributes().alpha}else y=d;const E=new Set([Ch,Rh,Th]),C=new Set([Li,As,Oo,zo,Mh,Eh]),b=new Uint32Array(4),_=new Int32Array(4);let I=null,U=null;const F=[],H=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ka,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let B=!1;this._outputColorSpace=pi;let ee=0,w=0,A=null,V=-1,K=null;const le=new tn,Y=new tn;let $=null;const z=new At(0);let W=0,L=i.width,X=i.height,ne=1,O=null,Z=null;const me=new tn(0,0,L,X),ye=new tn(0,0,L,X);let Ae=!1;const ie=new Nh;let he=!1,De=!1;const Be=new rn,ke=new de,rt=new tn,Zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let dt=!1;function Rt(){return A===null?ne:1}let k=s;function ht(R,Q){return i.getContext(R,Q)}try{const R={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${yh}`),i.addEventListener("webglcontextlost",Ee,!1),i.addEventListener("webglcontextrestored",Se,!1),i.addEventListener("webglcontextcreationerror",Ie,!1),k===null){const Q="webgl2";if(k=ht(Q,R),k===null)throw ht(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw R("WebGLRenderer: "+R.message),R}let mt,Pt,Ve,Xt,Ye,at,P,M,se,_e,be,pe,qe,Le,Qe,je,Me,Te,We,Ge,ze,nt,j,Ne;function Ce(){mt=new V1(k),mt.init(),nt=new ME(k,mt),Pt=new U1(k,mt,t,nt),Ve=new yE(k,mt),Pt.reversedDepthBuffer&&S&&Ve.buffers.depth.setReversed(!0),Xt=new X1(k),Ye=new lE,at=new bE(k,mt,Ve,Ye,Pt,nt,Xt),P=new O1(N),M=new H1(N),se=new Yy(k),j=new D1(k,se),_e=new G1(k,se,Xt,j),be=new q1(k,_e,se,Xt),We=new j1(k,Pt,at),je=new L1(Ye),pe=new oE(N,P,M,mt,Pt,j,je),qe=new wE(N,Ye),Le=new uE,Qe=new xE(mt),Te=new w1(N,P,M,Ve,be,y,m),Me=new vE(N,be,Pt),Ne=new DE(k,Xt,Pt,Ve),Ge=new N1(k,mt,Xt),ze=new k1(k,mt,Xt),Xt.programs=pe.programs,N.capabilities=Pt,N.extensions=mt,N.properties=Ye,N.renderLists=Le,N.shadowMap=Me,N.state=Ve,N.info=Xt}Ce();const we=new RE(N,k);this.xr=we,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const R=mt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=mt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(R){R!==void 0&&(ne=R,this.setSize(L,X,!1))},this.getSize=function(R){return R.set(L,X)},this.setSize=function(R,Q,ue=!0){if(we.isPresenting){lt("WebGLRenderer: Can't change size while VR device is presenting.");return}L=R,X=Q,i.width=Math.floor(R*ne),i.height=Math.floor(Q*ne),ue===!0&&(i.style.width=R+"px",i.style.height=Q+"px"),this.setViewport(0,0,R,Q)},this.getDrawingBufferSize=function(R){return R.set(L*ne,X*ne).floor()},this.setDrawingBufferSize=function(R,Q,ue){L=R,X=Q,ne=ue,i.width=Math.floor(R*ue),i.height=Math.floor(Q*ue),this.setViewport(0,0,R,Q)},this.getCurrentViewport=function(R){return R.copy(le)},this.getViewport=function(R){return R.copy(me)},this.setViewport=function(R,Q,ue,oe){R.isVector4?me.set(R.x,R.y,R.z,R.w):me.set(R,Q,ue,oe),Ve.viewport(le.copy(me).multiplyScalar(ne).round())},this.getScissor=function(R){return R.copy(ye)},this.setScissor=function(R,Q,ue,oe){R.isVector4?ye.set(R.x,R.y,R.z,R.w):ye.set(R,Q,ue,oe),Ve.scissor(Y.copy(ye).multiplyScalar(ne).round())},this.getScissorTest=function(){return Ae},this.setScissorTest=function(R){Ve.setScissorTest(Ae=R)},this.setOpaqueSort=function(R){O=R},this.setTransparentSort=function(R){Z=R},this.getClearColor=function(R){return R.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor(...arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha(...arguments)},this.clear=function(R=!0,Q=!0,ue=!0){let oe=0;if(R){let te=!1;if(A!==null){const Re=A.texture.format;te=E.has(Re)}if(te){const Re=A.texture.type,Ue=C.has(Re),Pe=Te.getClearColor(),Fe=Te.getClearAlpha(),$e=Pe.r,tt=Pe.g,Ze=Pe.b;Ue?(b[0]=$e,b[1]=tt,b[2]=Ze,b[3]=Fe,k.clearBufferuiv(k.COLOR,0,b)):(_[0]=$e,_[1]=tt,_[2]=Ze,_[3]=Fe,k.clearBufferiv(k.COLOR,0,_))}else oe|=k.COLOR_BUFFER_BIT}Q&&(oe|=k.DEPTH_BUFFER_BIT),ue&&(oe|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Ee,!1),i.removeEventListener("webglcontextrestored",Se,!1),i.removeEventListener("webglcontextcreationerror",Ie,!1),Te.dispose(),Le.dispose(),Qe.dispose(),Ye.dispose(),P.dispose(),M.dispose(),be.dispose(),j.dispose(),Ne.dispose(),pe.dispose(),we.dispose(),we.removeEventListener("sessionstart",Ur),we.removeEventListener("sessionend",Lr),xi.stop()};function Ee(R){R.preventDefault(),Nx("WebGLRenderer: Context Lost."),B=!0}function Se(){Nx("WebGLRenderer: Context Restored."),B=!1;const R=Xt.autoReset,Q=Me.enabled,ue=Me.autoUpdate,oe=Me.needsUpdate,te=Me.type;Ce(),Xt.autoReset=R,Me.enabled=Q,Me.autoUpdate=ue,Me.needsUpdate=oe,Me.type=te}function Ie(R){sn("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function it(R){const Q=R.target;Q.removeEventListener("dispose",it),Bt(Q)}function Bt(R){Ct(R),Ye.remove(R)}function Ct(R){const Q=Ye.get(R).programs;Q!==void 0&&(Q.forEach(function(ue){pe.releaseProgram(ue)}),R.isShaderMaterial&&pe.releaseShaderCache(R))}this.renderBufferDirect=function(R,Q,ue,oe,te,Re){Q===null&&(Q=Zt);const Ue=te.isMesh&&te.matrixWorld.determinant()<0,Pe=Oc(R,Q,ue,oe,te);Ve.setMaterial(oe,Ue);let Fe=ue.index,$e=1;if(oe.wireframe===!0){if(Fe=_e.getWireframeAttribute(ue),Fe===void 0)return;$e=2}const tt=ue.drawRange,Ze=ue.attributes.position;let ct=tt.start*$e,Tt=(tt.start+tt.count)*$e;Re!==null&&(ct=Math.max(ct,Re.start*$e),Tt=Math.min(Tt,(Re.start+Re.count)*$e)),Fe!==null?(ct=Math.max(ct,0),Tt=Math.min(Tt,Fe.count)):Ze!=null&&(ct=Math.max(ct,0),Tt=Math.min(Tt,Ze.count));const wt=Tt-ct;if(wt<0||wt===1/0)return;j.setup(te,oe,Pe,ue,Fe);let yt,zt=Ge;if(Fe!==null&&(yt=se.get(Fe),zt=ze,zt.setIndex(yt)),te.isMesh)oe.wireframe===!0?(Ve.setLineWidth(oe.wireframeLinewidth*Rt()),zt.setMode(k.LINES)):zt.setMode(k.TRIANGLES);else if(te.isLine){let Je=oe.linewidth;Je===void 0&&(Je=1),Ve.setLineWidth(Je*Rt()),te.isLineSegments?zt.setMode(k.LINES):te.isLineLoop?zt.setMode(k.LINE_LOOP):zt.setMode(k.LINE_STRIP)}else te.isPoints?zt.setMode(k.POINTS):te.isSprite&&zt.setMode(k.TRIANGLES);if(te.isBatchedMesh)if(te._multiDrawInstances!==null)Fo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),zt.renderMultiDrawInstances(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount,te._multiDrawInstances);else if(mt.get("WEBGL_multi_draw"))zt.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{const Je=te._multiDrawStarts,jt=te._multiDrawCounts,bt=te._multiDrawCount,_n=Fe?se.get(Fe).bytesPerElement:1,xa=Ye.get(oe).currentProgram.getUniforms();for(let Wt=0;Wt<bt;Wt++)xa.setValue(k,"_gl_DrawID",Wt),zt.render(Je[Wt]/_n,jt[Wt])}else if(te.isInstancedMesh)zt.renderInstances(ct,wt,te.count);else if(ue.isInstancedBufferGeometry){const Je=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,jt=Math.min(ue.instanceCount,Je);zt.renderInstances(ct,wt,jt)}else zt.render(ct,wt)};function Cn(R,Q,ue){R.transparent===!0&&R.side===ca&&R.forceSinglePass===!1?(R.side=Xn,R.needsUpdate=!0,hn(R,Q,ue),R.side=Qa,R.needsUpdate=!0,hn(R,Q,ue),R.side=ca):hn(R,Q,ue)}this.compile=function(R,Q,ue=null){ue===null&&(ue=R),U=Qe.get(ue),U.init(Q),H.push(U),ue.traverseVisible(function(te){te.isLight&&te.layers.test(Q.layers)&&(U.pushLight(te),te.castShadow&&U.pushShadow(te))}),R!==ue&&R.traverseVisible(function(te){te.isLight&&te.layers.test(Q.layers)&&(U.pushLight(te),te.castShadow&&U.pushShadow(te))}),U.setupLights();const oe=new Set;return R.traverse(function(te){if(!(te.isMesh||te.isPoints||te.isLine||te.isSprite))return;const Re=te.material;if(Re)if(Array.isArray(Re))for(let Ue=0;Ue<Re.length;Ue++){const Pe=Re[Ue];Cn(Pe,ue,te),oe.add(Pe)}else Cn(Re,ue,te),oe.add(Re)}),U=H.pop(),oe},this.compileAsync=function(R,Q,ue=null){const oe=this.compile(R,Q,ue);return new Promise(te=>{function Re(){if(oe.forEach(function(Ue){Ye.get(Ue).currentProgram.isReady()&&oe.delete(Ue)}),oe.size===0){te(R);return}setTimeout(Re,10)}mt.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let jn=null;function Xo(R){jn&&jn(R)}function Ur(){xi.stop()}function Lr(){xi.start()}const xi=new Qg;xi.setAnimationLoop(Xo),typeof self<"u"&&xi.setContext(self),this.setAnimationLoop=function(R){jn=R,we.setAnimationLoop(R),R===null?xi.stop():xi.start()},we.addEventListener("sessionstart",Ur),we.addEventListener("sessionend",Lr),this.render=function(R,Q){if(Q!==void 0&&Q.isCamera!==!0){sn("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(we.cameraAutoUpdate===!0&&we.updateCamera(Q),Q=we.getCamera()),R.isScene===!0&&R.onBeforeRender(N,R,Q,A),U=Qe.get(R,H.length),U.init(Q),H.push(U),Be.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),ie.setFromProjectionMatrix(Be,Ni,Q.reversedDepth),De=this.localClippingEnabled,he=je.init(this.clippingPlanes,De),I=Le.get(R,F.length),I.init(),F.push(I),we.enabled===!0&&we.isPresenting===!0){const Re=N.xr.getDepthSensingMesh();Re!==null&&Ja(Re,Q,-1/0,N.sortObjects)}Ja(R,Q,0,N.sortObjects),I.finish(),N.sortObjects===!0&&I.sort(O,Z),dt=we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1,dt&&Te.addToRenderList(I,R),this.info.render.frame++,he===!0&&je.beginShadows();const ue=U.state.shadowsArray;Me.render(ue,R,Q),he===!0&&je.endShadows(),this.info.autoReset===!0&&this.info.reset();const oe=I.opaque,te=I.transmissive;if(U.setupLights(),Q.isArrayCamera){const Re=Q.cameras;if(te.length>0)for(let Ue=0,Pe=Re.length;Ue<Pe;Ue++){const Fe=Re[Ue];zr(oe,te,R,Fe)}dt&&Te.render(R);for(let Ue=0,Pe=Re.length;Ue<Pe;Ue++){const Fe=Re[Ue];Or(I,R,Fe,Fe.viewport)}}else te.length>0&&zr(oe,te,R,Q),dt&&Te.render(R),Or(I,R,Q);A!==null&&w===0&&(at.updateMultisampleRenderTarget(A),at.updateRenderTargetMipmap(A)),R.isScene===!0&&R.onAfterRender(N,R,Q),j.resetDefaultState(),V=-1,K=null,H.pop(),H.length>0?(U=H[H.length-1],he===!0&&je.setGlobalState(N.clippingPlanes,U.state.camera)):U=null,F.pop(),F.length>0?I=F[F.length-1]:I=null};function Ja(R,Q,ue,oe){if(R.visible===!1)return;if(R.layers.test(Q.layers)){if(R.isGroup)ue=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Q);else if(R.isLight)U.pushLight(R),R.castShadow&&U.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||ie.intersectsSprite(R)){oe&&rt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Be);const Ue=be.update(R),Pe=R.material;Pe.visible&&I.push(R,Ue,Pe,ue,rt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||ie.intersectsObject(R))){const Ue=be.update(R),Pe=R.material;if(oe&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),rt.copy(R.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),rt.copy(Ue.boundingSphere.center)),rt.applyMatrix4(R.matrixWorld).applyMatrix4(Be)),Array.isArray(Pe)){const Fe=Ue.groups;for(let $e=0,tt=Fe.length;$e<tt;$e++){const Ze=Fe[$e],ct=Pe[Ze.materialIndex];ct&&ct.visible&&I.push(R,Ue,ct,ue,rt.z,Ze)}}else Pe.visible&&I.push(R,Ue,Pe,ue,rt.z,null)}}const Re=R.children;for(let Ue=0,Pe=Re.length;Ue<Pe;Ue++)Ja(Re[Ue],Q,ue,oe)}function Or(R,Q,ue,oe){const{opaque:te,transmissive:Re,transparent:Ue}=R;U.setupLightsView(ue),he===!0&&je.setGlobalState(N.clippingPlanes,ue),oe&&Ve.viewport(le.copy(oe)),te.length>0&&qn(te,Q,ue),Re.length>0&&qn(Re,Q,ue),Ue.length>0&&qn(Ue,Q,ue),Ve.buffers.depth.setTest(!0),Ve.buffers.depth.setMask(!0),Ve.buffers.color.setMask(!0),Ve.setPolygonOffset(!1)}function zr(R,Q,ue,oe){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;U.state.transmissionRenderTarget[oe.id]===void 0&&(U.state.transmissionRenderTarget[oe.id]=new Rs(1,1,{generateMipmaps:!0,type:mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float")?wr:Li,minFilter:Ts,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ut.workingColorSpace}));const Re=U.state.transmissionRenderTarget[oe.id],Ue=oe.viewport||le;Re.setSize(Ue.z*N.transmissionResolutionScale,Ue.w*N.transmissionResolutionScale);const Pe=N.getRenderTarget(),Fe=N.getActiveCubeFace(),$e=N.getActiveMipmapLevel();N.setRenderTarget(Re),N.getClearColor(z),W=N.getClearAlpha(),W<1&&N.setClearColor(16777215,.5),N.clear(),dt&&Te.render(ue);const tt=N.toneMapping;N.toneMapping=Ka;const Ze=oe.viewport;if(oe.viewport!==void 0&&(oe.viewport=void 0),U.setupLightsView(oe),he===!0&&je.setGlobalState(N.clippingPlanes,oe),qn(R,ue,oe),at.updateMultisampleRenderTarget(Re),at.updateRenderTargetMipmap(Re),mt.has("WEBGL_multisampled_render_to_texture")===!1){let ct=!1;for(let Tt=0,wt=Q.length;Tt<wt;Tt++){const yt=Q[Tt],{object:zt,geometry:Je,material:jt,group:bt}=yt;if(jt.side===ca&&zt.layers.test(oe.layers)){const _n=jt.side;jt.side=Xn,jt.needsUpdate=!0,on(zt,ue,oe,Je,jt,bt),jt.side=_n,jt.needsUpdate=!0,ct=!0}}ct===!0&&(at.updateMultisampleRenderTarget(Re),at.updateRenderTargetMipmap(Re))}N.setRenderTarget(Pe,Fe,$e),N.setClearColor(z,W),Ze!==void 0&&(oe.viewport=Ze),N.toneMapping=tt}function qn(R,Q,ue){const oe=Q.isScene===!0?Q.overrideMaterial:null;for(let te=0,Re=R.length;te<Re;te++){const Ue=R[te],{object:Pe,geometry:Fe,group:$e}=Ue;let tt=Ue.material;tt.allowOverride===!0&&oe!==null&&(tt=oe),Pe.layers.test(ue.layers)&&on(Pe,Q,ue,Fe,tt,$e)}}function on(R,Q,ue,oe,te,Re){R.onBeforeRender(N,Q,ue,oe,te,Re),R.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),te.onBeforeRender(N,Q,ue,oe,R,Re),te.transparent===!0&&te.side===ca&&te.forceSinglePass===!1?(te.side=Xn,te.needsUpdate=!0,N.renderBufferDirect(ue,Q,oe,te,R,Re),te.side=Qa,te.needsUpdate=!0,N.renderBufferDirect(ue,Q,oe,te,R,Re),te.side=ca):N.renderBufferDirect(ue,Q,oe,te,R,Re),R.onAfterRender(N,Q,ue,oe,te,Re)}function hn(R,Q,ue){Q.isScene!==!0&&(Q=Zt);const oe=Ye.get(R),te=U.state.lights,Re=U.state.shadowsArray,Ue=te.state.version,Pe=pe.getParameters(R,te.state,Re,Q,ue),Fe=pe.getProgramCacheKey(Pe);let $e=oe.programs;oe.environment=R.isMeshStandardMaterial?Q.environment:null,oe.fog=Q.fog,oe.envMap=(R.isMeshStandardMaterial?M:P).get(R.envMap||oe.environment),oe.envMapRotation=oe.environment!==null&&R.envMap===null?Q.environmentRotation:R.envMapRotation,$e===void 0&&(R.addEventListener("dispose",it),$e=new Map,oe.programs=$e);let tt=$e.get(Fe);if(tt!==void 0){if(oe.currentProgram===tt&&oe.lightsStateVersion===Ue)return Cs(R,Pe),tt}else Pe.uniforms=pe.getUniforms(R),R.onBeforeCompile(Pe,N),tt=pe.acquireProgram(Pe,Fe),$e.set(Fe,tt),oe.uniforms=Pe.uniforms;const Ze=oe.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ze.clippingPlanes=je.uniform),Cs(R,Pe),oe.needsLights=jo(R),oe.lightsStateVersion=Ue,oe.needsLights&&(Ze.ambientLightColor.value=te.state.ambient,Ze.lightProbe.value=te.state.probe,Ze.directionalLights.value=te.state.directional,Ze.directionalLightShadows.value=te.state.directionalShadow,Ze.spotLights.value=te.state.spot,Ze.spotLightShadows.value=te.state.spotShadow,Ze.rectAreaLights.value=te.state.rectArea,Ze.ltc_1.value=te.state.rectAreaLTC1,Ze.ltc_2.value=te.state.rectAreaLTC2,Ze.pointLights.value=te.state.point,Ze.pointLightShadows.value=te.state.pointShadow,Ze.hemisphereLights.value=te.state.hemi,Ze.directionalShadowMap.value=te.state.directionalShadowMap,Ze.directionalShadowMatrix.value=te.state.directionalShadowMatrix,Ze.spotShadowMap.value=te.state.spotShadowMap,Ze.spotLightMatrix.value=te.state.spotLightMatrix,Ze.spotLightMap.value=te.state.spotLightMap,Ze.pointShadowMap.value=te.state.pointShadowMap,Ze.pointShadowMatrix.value=te.state.pointShadowMatrix),oe.currentProgram=tt,oe.uniformsList=null,tt}function Pi(R){if(R.uniformsList===null){const Q=R.currentProgram.getUniforms();R.uniformsList=Tc.seqWithValue(Q.seq,R.uniforms)}return R.uniformsList}function Cs(R,Q){const ue=Ye.get(R);ue.outputColorSpace=Q.outputColorSpace,ue.batching=Q.batching,ue.batchingColor=Q.batchingColor,ue.instancing=Q.instancing,ue.instancingColor=Q.instancingColor,ue.instancingMorph=Q.instancingMorph,ue.skinning=Q.skinning,ue.morphTargets=Q.morphTargets,ue.morphNormals=Q.morphNormals,ue.morphColors=Q.morphColors,ue.morphTargetsCount=Q.morphTargetsCount,ue.numClippingPlanes=Q.numClippingPlanes,ue.numIntersection=Q.numClipIntersection,ue.vertexAlphas=Q.vertexAlphas,ue.vertexTangents=Q.vertexTangents,ue.toneMapping=Q.toneMapping}function Oc(R,Q,ue,oe,te){Q.isScene!==!0&&(Q=Zt),at.resetTextureUnits();const Re=Q.fog,Ue=oe.isMeshStandardMaterial?Q.environment:null,Pe=A===null?N.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Tr,Fe=(oe.isMeshStandardMaterial?M:P).get(oe.envMap||Ue),$e=oe.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,tt=!!ue.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),Ze=!!ue.morphAttributes.position,ct=!!ue.morphAttributes.normal,Tt=!!ue.morphAttributes.color;let wt=Ka;oe.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(wt=N.toneMapping);const yt=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,zt=yt!==void 0?yt.length:0,Je=Ye.get(oe),jt=U.state.lights;if(he===!0&&(De===!0||R!==K)){const Sn=R===K&&oe.id===V;je.setState(oe,R,Sn)}let bt=!1;oe.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==jt.state.version||Je.outputColorSpace!==Pe||te.isBatchedMesh&&Je.batching===!1||!te.isBatchedMesh&&Je.batching===!0||te.isBatchedMesh&&Je.batchingColor===!0&&te.colorTexture===null||te.isBatchedMesh&&Je.batchingColor===!1&&te.colorTexture!==null||te.isInstancedMesh&&Je.instancing===!1||!te.isInstancedMesh&&Je.instancing===!0||te.isSkinnedMesh&&Je.skinning===!1||!te.isSkinnedMesh&&Je.skinning===!0||te.isInstancedMesh&&Je.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&Je.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&Je.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&Je.instancingMorph===!1&&te.morphTexture!==null||Je.envMap!==Fe||oe.fog===!0&&Je.fog!==Re||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==je.numPlanes||Je.numIntersection!==je.numIntersection)||Je.vertexAlphas!==$e||Je.vertexTangents!==tt||Je.morphTargets!==Ze||Je.morphNormals!==ct||Je.morphColors!==Tt||Je.toneMapping!==wt||Je.morphTargetsCount!==zt)&&(bt=!0):(bt=!0,Je.__version=oe.version);let _n=Je.currentProgram;bt===!0&&(_n=hn(oe,Q,te));let xa=!1,Wt=!1,Ii=!1;const Yt=_n.getUniforms(),vn=Je.uniforms;if(Ve.useProgram(_n.program)&&(xa=!0,Wt=!0,Ii=!0),oe.id!==V&&(V=oe.id,Wt=!0),xa||K!==R){Ve.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Yt.setValue(k,"projectionMatrix",R.projectionMatrix),Yt.setValue(k,"viewMatrix",R.matrixWorldInverse);const Mn=Yt.map.cameraPosition;Mn!==void 0&&Mn.setValue(k,ke.setFromMatrixPosition(R.matrixWorld)),Pt.logarithmicDepthBuffer&&Yt.setValue(k,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&Yt.setValue(k,"isOrthographic",R.isOrthographicCamera===!0),K!==R&&(K=R,Wt=!0,Ii=!0)}if(te.isSkinnedMesh){Yt.setOptional(k,te,"bindMatrix"),Yt.setOptional(k,te,"bindMatrixInverse");const Sn=te.skeleton;Sn&&(Sn.boneTexture===null&&Sn.computeBoneTexture(),Yt.setValue(k,"boneTexture",Sn.boneTexture,at))}te.isBatchedMesh&&(Yt.setOptional(k,te,"batchingTexture"),Yt.setValue(k,"batchingTexture",te._matricesTexture,at),Yt.setOptional(k,te,"batchingIdTexture"),Yt.setValue(k,"batchingIdTexture",te._indirectTexture,at),Yt.setOptional(k,te,"batchingColorTexture"),te._colorsTexture!==null&&Yt.setValue(k,"batchingColorTexture",te._colorsTexture,at));const pn=ue.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&We.update(te,ue,_n),(Wt||Je.receiveShadow!==te.receiveShadow)&&(Je.receiveShadow=te.receiveShadow,Yt.setValue(k,"receiveShadow",te.receiveShadow)),oe.isMeshGouraudMaterial&&oe.envMap!==null&&(vn.envMap.value=Fe,vn.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),oe.isMeshStandardMaterial&&oe.envMap===null&&Q.environment!==null&&(vn.envMapIntensity.value=Q.environmentIntensity),vn.dfgLUT!==void 0&&(vn.dfgLUT.value=UE()),Wt&&(Yt.setValue(k,"toneMappingExposure",N.toneMappingExposure),Je.needsLights&&zc(vn,Ii),Re&&oe.fog===!0&&qe.refreshFogUniforms(vn,Re),qe.refreshMaterialUniforms(vn,oe,ne,X,U.state.transmissionRenderTarget[R.id]),Tc.upload(k,Pi(Je),vn,at)),oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(Tc.upload(k,Pi(Je),vn,at),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&Yt.setValue(k,"center",te.center),Yt.setValue(k,"modelViewMatrix",te.modelViewMatrix),Yt.setValue(k,"normalMatrix",te.normalMatrix),Yt.setValue(k,"modelMatrix",te.matrixWorld),oe.isShaderMaterial||oe.isRawShaderMaterial){const Sn=oe.uniformsGroups;for(let Mn=0,Ti=Sn.length;Mn<Ti;Mn++){const Fi=Sn[Mn];Ne.update(Fi,_n),Ne.bind(Fi,_n)}}return _n}function zc(R,Q){R.ambientLightColor.needsUpdate=Q,R.lightProbe.needsUpdate=Q,R.directionalLights.needsUpdate=Q,R.directionalLightShadows.needsUpdate=Q,R.pointLights.needsUpdate=Q,R.pointLightShadows.needsUpdate=Q,R.spotLights.needsUpdate=Q,R.spotLightShadows.needsUpdate=Q,R.rectAreaLights.needsUpdate=Q,R.hemisphereLights.needsUpdate=Q}function jo(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return ee},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(R,Q,ue){const oe=Ye.get(R);oe.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,oe.__autoAllocateDepthBuffer===!1&&(oe.__useRenderToTexture=!1),Ye.get(R.texture).__webglTexture=Q,Ye.get(R.depthTexture).__webglTexture=oe.__autoAllocateDepthBuffer?void 0:ue,oe.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Q){const ue=Ye.get(R);ue.__webglFramebuffer=Q,ue.__useDefaultFramebuffer=Q===void 0};const $a=k.createFramebuffer();this.setRenderTarget=function(R,Q=0,ue=0){A=R,ee=Q,w=ue;let oe=!0,te=null,Re=!1,Ue=!1;if(R){const Fe=Ye.get(R);if(Fe.__useDefaultFramebuffer!==void 0)Ve.bindFramebuffer(k.FRAMEBUFFER,null),oe=!1;else if(Fe.__webglFramebuffer===void 0)at.setupRenderTarget(R);else if(Fe.__hasExternalTextures)at.rebindTextures(R,Ye.get(R.texture).__webglTexture,Ye.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Ze=R.depthTexture;if(Fe.__boundDepthTexture!==Ze){if(Ze!==null&&Ye.has(Ze)&&(R.width!==Ze.image.width||R.height!==Ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");at.setupDepthRenderbuffer(R)}}const $e=R.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Ue=!0);const tt=Ye.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(tt[Q])?te=tt[Q][ue]:te=tt[Q],Re=!0):R.samples>0&&at.useMultisampledRTT(R)===!1?te=Ye.get(R).__webglMultisampledFramebuffer:Array.isArray(tt)?te=tt[ue]:te=tt,le.copy(R.viewport),Y.copy(R.scissor),$=R.scissorTest}else le.copy(me).multiplyScalar(ne).floor(),Y.copy(ye).multiplyScalar(ne).floor(),$=Ae;if(ue!==0&&(te=$a),Ve.bindFramebuffer(k.FRAMEBUFFER,te)&&oe&&Ve.drawBuffers(R,te),Ve.viewport(le),Ve.scissor(Y),Ve.setScissorTest($),Re){const Fe=Ye.get(R.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Fe.__webglTexture,ue)}else if(Ue){const Fe=Q;for(let $e=0;$e<R.textures.length;$e++){const tt=Ye.get(R.textures[$e]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+$e,tt.__webglTexture,ue,Fe)}}else if(R!==null&&ue!==0){const Fe=Ye.get(R.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Fe.__webglTexture,ue)}V=-1},this.readRenderTargetPixels=function(R,Q,ue,oe,te,Re,Ue,Pe=0){if(!(R&&R.isWebGLRenderTarget)){sn("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=Ye.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ue!==void 0&&(Fe=Fe[Ue]),Fe){Ve.bindFramebuffer(k.FRAMEBUFFER,Fe);try{const $e=R.textures[Pe],tt=$e.format,Ze=$e.type;if(!Pt.textureFormatReadable(tt)){sn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Pt.textureTypeReadable(Ze)){sn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=R.width-oe&&ue>=0&&ue<=R.height-te&&(R.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Pe),k.readPixels(Q,ue,oe,te,nt.convert(tt),nt.convert(Ze),Re))}finally{const $e=A!==null?Ye.get(A).__webglFramebuffer:null;Ve.bindFramebuffer(k.FRAMEBUFFER,$e)}}},this.readRenderTargetPixelsAsync=async function(R,Q,ue,oe,te,Re,Ue,Pe=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=Ye.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ue!==void 0&&(Fe=Fe[Ue]),Fe)if(Q>=0&&Q<=R.width-oe&&ue>=0&&ue<=R.height-te){Ve.bindFramebuffer(k.FRAMEBUFFER,Fe);const $e=R.textures[Pe],tt=$e.format,Ze=$e.type;if(!Pt.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Pt.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ct=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,ct),k.bufferData(k.PIXEL_PACK_BUFFER,Re.byteLength,k.STREAM_READ),R.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Pe),k.readPixels(Q,ue,oe,te,nt.convert(tt),nt.convert(Ze),0);const Tt=A!==null?Ye.get(A).__webglFramebuffer:null;Ve.bindFramebuffer(k.FRAMEBUFFER,Tt);const wt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await fy(k,wt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,ct),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Re),k.deleteBuffer(ct),k.deleteSync(wt),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Q=null,ue=0){const oe=Math.pow(2,-ue),te=Math.floor(R.image.width*oe),Re=Math.floor(R.image.height*oe),Ue=Q!==null?Q.x:0,Pe=Q!==null?Q.y:0;at.setTexture2D(R,0),k.copyTexSubImage2D(k.TEXTURE_2D,ue,0,0,Ue,Pe,te,Re),Ve.unbindTexture()};const Pr=k.createFramebuffer(),ma=k.createFramebuffer();this.copyTextureToTexture=function(R,Q,ue=null,oe=null,te=0,Re=null){Re===null&&(te!==0?(Fo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Re=te,te=0):Re=0);let Ue,Pe,Fe,$e,tt,Ze,ct,Tt,wt;const yt=R.isCompressedTexture?R.mipmaps[Re]:R.image;if(ue!==null)Ue=ue.max.x-ue.min.x,Pe=ue.max.y-ue.min.y,Fe=ue.isBox3?ue.max.z-ue.min.z:1,$e=ue.min.x,tt=ue.min.y,Ze=ue.isBox3?ue.min.z:0;else{const pn=Math.pow(2,-te);Ue=Math.floor(yt.width*pn),Pe=Math.floor(yt.height*pn),R.isDataArrayTexture?Fe=yt.depth:R.isData3DTexture?Fe=Math.floor(yt.depth*pn):Fe=1,$e=0,tt=0,Ze=0}oe!==null?(ct=oe.x,Tt=oe.y,wt=oe.z):(ct=0,Tt=0,wt=0);const zt=nt.convert(Q.format),Je=nt.convert(Q.type);let jt;Q.isData3DTexture?(at.setTexture3D(Q,0),jt=k.TEXTURE_3D):Q.isDataArrayTexture||Q.isCompressedArrayTexture?(at.setTexture2DArray(Q,0),jt=k.TEXTURE_2D_ARRAY):(at.setTexture2D(Q,0),jt=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,Q.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,Q.unpackAlignment);const bt=k.getParameter(k.UNPACK_ROW_LENGTH),_n=k.getParameter(k.UNPACK_IMAGE_HEIGHT),xa=k.getParameter(k.UNPACK_SKIP_PIXELS),Wt=k.getParameter(k.UNPACK_SKIP_ROWS),Ii=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,yt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,yt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,$e),k.pixelStorei(k.UNPACK_SKIP_ROWS,tt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Ze);const Yt=R.isDataArrayTexture||R.isData3DTexture,vn=Q.isDataArrayTexture||Q.isData3DTexture;if(R.isDepthTexture){const pn=Ye.get(R),Sn=Ye.get(Q),Mn=Ye.get(pn.__renderTarget),Ti=Ye.get(Sn.__renderTarget);Ve.bindFramebuffer(k.READ_FRAMEBUFFER,Mn.__webglFramebuffer),Ve.bindFramebuffer(k.DRAW_FRAMEBUFFER,Ti.__webglFramebuffer);for(let Fi=0;Fi<Fe;Fi++)Yt&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ye.get(R).__webglTexture,te,Ze+Fi),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ye.get(Q).__webglTexture,Re,wt+Fi)),k.blitFramebuffer($e,tt,Ue,Pe,ct,Tt,Ue,Pe,k.DEPTH_BUFFER_BIT,k.NEAREST);Ve.bindFramebuffer(k.READ_FRAMEBUFFER,null),Ve.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(te!==0||R.isRenderTargetTexture||Ye.has(R)){const pn=Ye.get(R),Sn=Ye.get(Q);Ve.bindFramebuffer(k.READ_FRAMEBUFFER,Pr),Ve.bindFramebuffer(k.DRAW_FRAMEBUFFER,ma);for(let Mn=0;Mn<Fe;Mn++)Yt?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,pn.__webglTexture,te,Ze+Mn):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,pn.__webglTexture,te),vn?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Sn.__webglTexture,Re,wt+Mn):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Sn.__webglTexture,Re),te!==0?k.blitFramebuffer($e,tt,Ue,Pe,ct,Tt,Ue,Pe,k.COLOR_BUFFER_BIT,k.NEAREST):vn?k.copyTexSubImage3D(jt,Re,ct,Tt,wt+Mn,$e,tt,Ue,Pe):k.copyTexSubImage2D(jt,Re,ct,Tt,$e,tt,Ue,Pe);Ve.bindFramebuffer(k.READ_FRAMEBUFFER,null),Ve.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else vn?R.isDataTexture||R.isData3DTexture?k.texSubImage3D(jt,Re,ct,Tt,wt,Ue,Pe,Fe,zt,Je,yt.data):Q.isCompressedArrayTexture?k.compressedTexSubImage3D(jt,Re,ct,Tt,wt,Ue,Pe,Fe,zt,yt.data):k.texSubImage3D(jt,Re,ct,Tt,wt,Ue,Pe,Fe,zt,Je,yt):R.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Re,ct,Tt,Ue,Pe,zt,Je,yt.data):R.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Re,ct,Tt,yt.width,yt.height,zt,yt.data):k.texSubImage2D(k.TEXTURE_2D,Re,ct,Tt,Ue,Pe,zt,Je,yt);k.pixelStorei(k.UNPACK_ROW_LENGTH,bt),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,_n),k.pixelStorei(k.UNPACK_SKIP_PIXELS,xa),k.pixelStorei(k.UNPACK_SKIP_ROWS,Wt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Ii),Re===0&&Q.generateMipmaps&&k.generateMipmap(jt),Ve.unbindTexture()},this.initRenderTarget=function(R){Ye.get(R).__webglFramebuffer===void 0&&at.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?at.setTextureCube(R,0):R.isData3DTexture?at.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?at.setTexture2DArray(R,0):at.setTexture2D(R,0),Ve.unbindTexture()},this.resetState=function(){ee=0,w=0,A=null,Ve.reset(),j.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Ut._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ut._getUnpackColorSpace()}}function LE({minHeight:o=260,intensity:t=.4}){const i=St.useRef(null);return St.useEffect(()=>{const s=i.current;if(!s)return;const l=s.clientWidth,u=s.clientHeight||o,d=new kg;d.background=new At(132631);const h=new ni(45,l/u,.1,1e3);h.position.set(0,.9,5),h.lookAt(0,0,0);const m=new n_({antialias:!0});m.setSize(l,u),m.setPixelRatio(window.devicePixelRatio),s.appendChild(m.domElement),d.add(new Zg(16777215,.9));const p=new Yg(16777215,1.2);p.position.set(3,5,2),d.add(p);const g=new Cr(.4,32,32),x=new xh({color:16733525}),S=new xh({color:5609983}),y=new Un(g,x),E=new Un(g,S);y.position.set(-1.2,0,0),E.position.set(1.2,0,0),d.add(y,E);const C=new Wa,b=new Dc(.06,.35,16),_=new Ar({color:16768341}),I=Math.min(1,Math.max(0,t)),U=7+Math.round(I*8);for(let V=0;V<U;V++){const le=(V/(U-1)-.5)*2*.8,Y=(Math.random()-.5)*.1,$=new Un(b,_);$.position.set(le-.25,Y,0),$.rotation.z=0,$.lookAt(1,Y,0),$.scale.set(1,1+I*1.5,1),C.add($);const z=new Un(b,_);z.position.set(-le+.25,Y,0),z.lookAt(-1,Y,0),z.scale.set(1,1+I*1.5,1),C.add(z)}d.add(C);const F=new Cr(.03,8,8),H=new Ar({color:16755251}),N=new Wa;for(let V=0;V<70;V++){const K=new Un(F,H);K.position.set((Math.random()-.5)*3,(Math.random()-.5)*1.5,(Math.random()-.5)*1.5),N.add(K)}d.add(N);const B=new Kg;let ee;const w=()=>{ee=requestAnimationFrame(w);const V=B.getElapsedTime(),K=.3+I*1.5;C.rotation.z=.05*Math.sin(V*K),N.rotation.y+=.003*K,y.position.y=.05*Math.sin(V*1.3),E.position.y=.05*Math.cos(V*1.1),m.render(d,h)};w();const A=()=>{const V=s.clientWidth,K=s.clientHeight||o;h.aspect=V/K,h.updateProjectionMatrix(),m.setSize(V,K)};return window.addEventListener("resize",A),()=>{window.removeEventListener("resize",A),cancelAnimationFrame(ee),m.dispose(),s.removeChild(m.domElement)}},[o,t]),D.jsx("div",{ref:i,className:"w-full h-full bg-slate-900 rounded-xl overflow-hidden",style:{minHeight:o}})}function OE({minHeight:o=260,intensity:t=.4,isNegative:i=!1}){const s=St.useRef(null);return St.useEffect(()=>{const l=s.current;if(!l)return;const u=l.clientWidth,d=l.clientHeight||o,h=new kg;h.background=new At(132631);const m=new ni(45,u/d,.1,1e3);m.position.set(0,.9,4.2),m.lookAt(0,0,0);const p=new n_({antialias:!0});p.setSize(u,d),p.setPixelRatio(window.devicePixelRatio),l.appendChild(p.domElement),h.add(new Zg(16777215,.9));const g=new Yg(16777215,1.2);g.position.set(3,5,2),h.add(g);const x=new Cr(.45,32,32),S=new xh({color:i?5609983:16733525}),y=new Un(x,S);y.position.set(0,0,0),h.add(y);const E=new Wa,C=new Dc(.05,.25,12),b=new Ar({color:16768341}),_=Math.min(1,Math.max(0,t)),I=24;for(let A=0;A<I;A++){const V=A/I*Math.PI*2,K=1.4,le=Math.cos(V)*K,Y=Math.sin(V)*K,$=new Un(C,b);if($.position.set(le,0,Y),i)$.lookAt(y.position);else{const z=new de(le*2,0,Y*2);$.lookAt(z)}$.scale.set(1,1+_*2,1),E.add($)}h.add(E);const U=new Cr(.03,8,8),F=new Ar({color:16755251}),H=new Wa;for(let A=0;A<80;A++){const V=new Un(U,F);V.position.set((Math.random()-.5)*5,(Math.random()-.3)*2,(Math.random()-.5)*5),H.add(V)}h.add(H);const N=new Kg;let B;const ee=()=>{B=requestAnimationFrame(ee);const A=N.getElapsedTime(),V=.25+_*1.2;E.rotation.y+=.002*V,H.rotation.y+=.0015*V,y.position.y=.05*Math.sin(A*2),p.render(h,m)};ee();const w=()=>{const A=l.clientWidth,V=l.clientHeight||o;m.aspect=A/V,m.updateProjectionMatrix(),p.setSize(A,V)};return window.addEventListener("resize",w),()=>{window.removeEventListener("resize",w),cancelAnimationFrame(B),p.dispose(),l.removeChild(p.domElement)}},[o,t,i]),D.jsx("div",{ref:s,className:"w-full h-full bg-slate-900 rounded-xl overflow-hidden",style:{minHeight:o}})}const Za=24,Sg=4,_h=900,vh=420;let Ed=1;function zE(o,t){const i=o.x-t.x,s=o.y-t.y;return Math.sqrt(i*i+s*s)}function Td(o,t){return{x:Math.round(o/Za)*Za,y:Math.round(t/Za)*Za}}function Ad(o,t,i,s=10){const l={x:t,y:i};for(const u of o)if(zE(u,l)<=s)return u;return null}function Rd(o,t){const i=o.getBoundingClientRect(),s=t.clientX-i.left,l=t.clientY-i.top,u=_h/i.width,d=vh/i.height;return{x:s*u,y:l*d}}function PE(o,t,i){if(!o.length||!t.length)return{ok:!1,message:"Dibuja al menos una resistencia."};const s=t.filter(L=>L.type==="resistor");if(!s.length)return{ok:!1,message:"No hay resistencias en el circuito."};const l=t.filter(L=>L.type==="wire"),u=t.filter(L=>L.type==="source"),d=new Map;o.forEach((L,X)=>d.set(L.id,X));const h=o.map((L,X)=>X),m=L=>h[L]===L?L:h[L]=m(h[L]),p=(L,X)=>{L=m(L),X=m(X),L!==X&&(h[X]=L)};for(const L of l){const X=d.get(L.n1),ne=d.get(L.n2);X!=null&&ne!=null&&p(X,ne)}const g=new Map;let x=0;const S=new Map;if(o.forEach(L=>{const X=d.get(L.id),ne=m(X);g.has(ne)||g.set(ne,x++),S.set(L.id,g.get(ne))}),x<2)return{ok:!1,message:"El circuito no tiene al menos dos nodos distintos después de unir los cables."};const y=[];for(const L of s){const X=S.get(L.n1),ne=S.get(L.n2);if(X==null||ne==null||X===ne)continue;const O=Number(L.value)||0;O<=0||y.push({a:X,b:ne,R:O,id:L.id})}if(!y.length)return{ok:!1,message:"Las resistencias tienen valor 0 o no conectan nodos distintos."};let E=0,C=1;if(u.length){const L=u[0],X=S.get(L.n1),ne=S.get(L.n2);X!=null&&ne!=null&&X!==ne&&(E=X,C=ne)}else{let L=o[0],X=o[0];for(const ne of o)ne.x<L.x&&(L=ne),ne.x>X.x&&(X=ne);E=S.get(L.id),C=S.get(X.id)}const b=Number(i)||0;if(b<=0)return{ok:!1,message:"Ingresa un voltaje positivo para calcular la corriente."};const _=Array.from(new Set(S.values())),I=_.filter(L=>L!==E&&L!==C),U=new Map;I.forEach((L,X)=>U.set(L,X));const F=I.length,H=Array.from({length:F},()=>Array(F).fill(0)),N=Array(F).fill(0),B=L=>L===E?b:L===C?0:null;for(const L of y){const X=1/L.R,[ne,O]=[L.a,L.b],Z=U.get(ne),me=U.get(O),ye=B(ne),Ae=B(O);Z!=null&&me!=null?(H[Z][Z]+=X,H[me][me]+=X,H[Z][me]-=X,H[me][Z]-=X):Z!=null&&Ae!=null?(H[Z][Z]+=X,N[Z]+=X*Ae):me!=null&&ye!=null?(H[me][me]+=X,N[me]+=X*ye):Z!=null&&me==null&&Ae==null?H[Z][Z]+=X:me!=null&&Z==null&&ye==null&&(H[me][me]+=X)}const ee=Array(F).fill(0);if(F>0){for(let X=0;X<F;X++){let ne=X;for(let Z=X+1;Z<F;Z++)Math.abs(H[Z][X])>Math.abs(H[ne][X])&&(ne=Z);if(Math.abs(H[ne][X])<1e-9)continue;[H[X],H[ne]]=[H[ne],H[X]],[N[X],N[ne]]=[N[ne],N[X]];const O=H[X][X];for(let Z=X;Z<F;Z++)H[X][Z]/=O;N[X]/=O;for(let Z=0;Z<F;Z++){if(Z===X)continue;const me=H[Z][X];for(let ye=X;ye<F;ye++)H[Z][ye]-=me*H[X][ye];N[Z]-=me*N[X]}}for(let X=0;X<F;X++)ee[X]=N[X]}const w=new Map;_.forEach(L=>{const X=U.get(L);X!=null?w.set(L,ee[X]):w.set(L,B(L)??0)});let A=0;for(const L of y)if(L.a===E||L.b===E){const X=L.a===E?L.b:L.a,ne=w.get(E),O=w.get(X);A+=(ne-O)/L.R}const V=b/A;let K="Mixto";const le=new Set;y.forEach(L=>{le.add(L.a),le.add(L.b)});const Y={};le.forEach(L=>Y[L]=0),y.forEach(L=>{Y[L.a]++,Y[L.b]++});const $=y.length,z=le.size;return y.every(L=>L.a===E&&L.b===C||L.a===C&&L.b===E)&&$>1?K="Paralelo simple":$===z-1&&Y[E]===1&&Y[C]===1&&(K="Serie (camino único)"),{ok:!0,message:"",Req:V,Itotal:A,Vsrc:b,tipo:K,branchCurrents:y.map(L=>{const X=w.get(L.a),ne=w.get(L.b);return{id:L.id,I:(X-ne)/L.R,Va:X,Vb:ne,R:L.R}})}}function IE({onBack:o}){const[t,i]=St.useState("wire"),[s,l]=St.useState([]),[u,d]=St.useState([]),[h,m]=St.useState(null),[p,g]=St.useState(null),[x,S]=St.useState("10"),[y,E]=St.useState(null),[C,b]=St.useState("Selecciona una herramienta, haz clic y arrastra tipo Paint."),[_,I]=St.useState(!1),[U,F]=St.useState(null),[H,N]=St.useState(null),B=St.useRef(null),ee=Y=>{if(!B.current)return;const{x:$,y:z}=Rd(B.current,Y),{x:W,y:L}=Td($,z);if(t==="erase"){const ne={x:W,y:L},O=10;d(Z=>{const me=Z.filter(ye=>{const Ae=s.find(Zt=>Zt.id===ye.n1),ie=s.find(Zt=>Zt.id===ye.n2);if(!Ae||!ie)return!1;const he=Math.min(Ae.x,ie.x)-O,De=Math.max(Ae.x,ie.x)+O,Be=Math.min(Ae.y,ie.y)-O,ke=Math.max(Ae.y,ie.y)+O;return!(ne.x>=he&&ne.x<=De&&ne.y>=Be&&ne.y<=ke)});return l(ye=>{const Ae=new Set;return me.forEach(ie=>{Ae.add(ie.n1),Ae.add(ie.n2)}),ye.filter(ie=>Ae.has(ie.id))}),me}),b("Elemento borrado (si había alguno cercano).");return}let X=Ad(s,W,L,8);X||(X={id:`n${Ed++}`,x:W,y:L},l(ne=>[...ne,X])),m(X.id),I(!0),F({x:X.x,y:X.y,nodeId:X.id}),N({x:X.x,y:X.y}),b("Arrastra para definir el tramo y suelta para fijarlo.")},w=Y=>{if(!B.current)return;const{x:$,y:z}=Rd(B.current,Y),{x:W,y:L}=Td($,z),X=Ad(s,W,L,8);g(X?X.id:null),_&&N({x:W,y:L})},A=Y=>{if(!_||!B.current||!U)return;const{x:$,y:z}=Rd(B.current,Y),{x:W,y:L}=Td($,z);let X=Ad(s,W,L,8);if(X||(X={id:`n${Ed++}`,x:W,y:L},l(ne=>[...ne,X])),X.id!==U.nodeId){const ne=U.nodeId,O=X.id;if(t==="wire"||t==="resistor"||t==="source"){const Z={id:`e${Ed++}`,type:t,n1:ne,n2:O,value:t==="resistor"?10:t==="source"?Number(x)||10:0};d(me=>[...me,Z])}b("Tramo añadido. Puedes seguir desde el último nodo.")}else b("Tramo cancelado.");m(X.id),I(!1),F(null),N(null)},V=()=>{const Y=PE(s,u,Number(x)||0);E(Y),Y.ok?b(`R_eq = ${Y.Req.toFixed(2)} Ω · I_total = ${Y.Itotal.toFixed(3)} A (${Y.tipo})`):b(Y.message)},K=(Y,$)=>{d(z=>z.map(W=>W.id===Y?{...W,value:$}:W))},le=()=>{l([]),d([]),m(null),g(null),E(null),I(!1),F(null),N(null),b("Canvas limpio. Comienza un nuevo circuito.")};return D.jsxs("div",{className:"rounded-2xl border border-emerald-600/60 bg-slate-950/95 p-4 space-y-4",children:[D.jsxs("div",{className:"flex items-center justify-between gap-2",children:[D.jsxs("div",{children:[D.jsx("h3",{className:"text-base md:text-lg font-semibold text-emerald-300",children:"Editor de circuitos de corriente continua"}),D.jsx("p",{className:"text-[11px] md:text-xs text-gray-300 max-w-3xl",children:"Selecciona una herramienta, haz clic y arrastra para dibujar tramos rectos. Los puntos amarillos son nodos de unión."})]}),o&&D.jsx("button",{onClick:o,className:"text-[11px] md:text-xs px-3 py-1.5 rounded-full border border-slate-600 bg-slate-800 hover:bg-slate-700 text-gray-100",children:"← Volver"})]}),D.jsxs("div",{className:"flex flex-wrap items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-2 text-[11px] md:text-xs",children:[D.jsx("span",{className:"text-gray-300 mr-1",children:"Herramientas:"}),[{id:"wire",label:"Cable"},{id:"resistor",label:"Resistencia"},{id:"source",label:"Fuente DC"},{id:"erase",label:"Borrar"}].map(Y=>D.jsx("button",{onClick:()=>{i(Y.id),I(!1),F(null),N(null),m(null)},className:`px-3 py-1 rounded-full border text-xs font-medium ${t===Y.id?"bg-emerald-500 text-slate-950 border-emerald-400":"bg-slate-800/80 text-slate-200 border-slate-600 hover:bg-slate-700"}`,children:Y.label},Y.id)),D.jsxs("div",{className:"ml-3 flex items-center gap-1",children:[D.jsx("span",{className:"text-gray-300",children:"Voltaje fuente (V):"}),D.jsx("input",{type:"number",value:x,onChange:Y=>S(Y.target.value),className:"w-16 px-1 py-0.5 rounded-md bg-slate-800 border border-slate-600 text-[11px]"})]}),D.jsx("button",{onClick:le,className:"ml-auto px-3 py-1 rounded-full border border-slate-600 bg-slate-800 hover:bg-slate-700 text-gray-100",children:"Limpiar"})]}),D.jsxs("div",{className:"grid md:grid-cols-[2fr,1fr] gap-4 items-start",children:[D.jsx("div",{className:"rounded-xl border border-slate-700 bg-black/95 overflow-hidden",children:D.jsxs("svg",{ref:B,viewBox:`0 0 ${_h} ${vh}`,className:"w-full h-[420px] cursor-crosshair",onMouseDown:ee,onMouseMove:w,onMouseUp:A,children:[D.jsx("defs",{children:D.jsx("pattern",{id:"smallGrid",width:Za,height:Za,patternUnits:"userSpaceOnUse",children:D.jsx("path",{d:`M ${Za} 0 L 0 0 0 ${Za}`,fill:"none",stroke:"#1f2933",strokeWidth:"0.5"})})}),D.jsx("rect",{x:"0",y:"0",width:_h,height:vh,fill:"url(#smallGrid)"}),u.map(Y=>{const $=s.find(X=>X.id===Y.n1),z=s.find(X=>X.id===Y.n2);if(!$||!z)return null;const W=($.x+z.x)/2,L=($.y+z.y)/2;if(Y.type==="wire")return D.jsx("line",{x1:$.x,y1:$.y,x2:z.x,y2:z.y,stroke:"#22c1dc",strokeWidth:"3",strokeLinecap:"round"},Y.id);if(Y.type==="resistor"){const X=Math.abs($.y-z.y)<Math.abs($.x-z.x),ne=[],O=6;for(let Z=0;Z<=O;Z++){const me=Z/O,ye=$.x+(z.x-$.x)*me,Ae=$.y+(z.y-$.y)*me,ie=(Z%2===0?-1:1)*6;Z!==0&&Z!==O?ne.push(X?`${ye},${Ae+ie}`:`${ye+ie},${Ae}`):ne.push(`${ye},${Ae}`)}return D.jsxs("g",{children:[D.jsx("polyline",{points:ne.join(" "),fill:"none",stroke:"#f97316",strokeWidth:"3",strokeLinecap:"round"}),D.jsxs("text",{x:W,y:L-10,fontSize:"11",fill:"#facc15",textAnchor:"middle",children:[Y.value," Ω"]})]},Y.id)}if(Y.type==="source"){const X=Math.abs($.y-z.y)<Math.abs($.x-z.x),ne=14,O=26,Z=14;return X?D.jsxs("g",{children:[D.jsx("line",{x1:$.x,y1:$.y,x2:W-ne,y2:L,stroke:"#22c1dc",strokeWidth:"3",strokeLinecap:"round"}),D.jsx("line",{x1:W+ne,y1:L,x2:z.x,y2:z.y,stroke:"#22c1dc",strokeWidth:"3",strokeLinecap:"round"}),D.jsx("line",{x1:W-ne/2,y1:L-O/2,x2:W-ne/2,y2:L+O/2,stroke:"#e5e7eb",strokeWidth:"3"}),D.jsx("line",{x1:W+ne/2,y1:L-Z/2,x2:W+ne/2,y2:L+Z/2,stroke:"#9ca3af",strokeWidth:"2.5"}),D.jsxs("text",{x:W,y:L-O/2-8,fontSize:"11",fill:"#4ade80",textAnchor:"middle",children:[Y.value," V"]})]},Y.id):D.jsxs("g",{children:[D.jsx("line",{x1:$.x,y1:$.y,x2:$.x,y2:L-ne,stroke:"#22c1dc",strokeWidth:"3",strokeLinecap:"round"}),D.jsx("line",{x1:z.x,y1:L+ne,x2:z.x,y2:z.y,stroke:"#22c1dc",strokeWidth:"3",strokeLinecap:"round"}),D.jsx("line",{x1:W-O/2,y1:L-ne/2,x2:W+O/2,y2:L-ne/2,stroke:"#e5e7eb",strokeWidth:"3"}),D.jsx("line",{x1:W-Z/2,y1:L+ne/2,x2:W+Z/2,y2:L+ne/2,stroke:"#9ca3af",strokeWidth:"2.5"}),D.jsxs("text",{x:W+O/2+6,y:L+4,fontSize:"11",fill:"#4ade80",children:[Y.value," V"]})]},Y.id)}return null}),_&&U&&H&&t!=="erase"&&D.jsx("line",{x1:U.x,y1:U.y,x2:H.x,y2:H.y,stroke:"#4ade80",strokeWidth:"3",strokeDasharray:"6 4",strokeLinecap:"round",opacity:"0.8"}),s.map(Y=>D.jsx("circle",{cx:Y.x,cy:Y.y,r:Y.id===p||Y.id===h?Sg+1:Sg,fill:Y.id===h?"#f97316":"#facc15",stroke:"#111827",strokeWidth:"1",opacity:Y.id===p||Y.id===h?1:.7},Y.id))]})}),D.jsxs("div",{className:"rounded-xl border border-slate-700 bg-slate-900/90 p-3 space-y-3 text-[11px] md:text-xs text-gray-200",children:[D.jsx("h4",{className:"font-semibold text-gray-100",children:"Parámetros y resultados"}),D.jsxs("div",{className:"space-y-1",children:[D.jsx("p",{className:"text-gray-300",children:"1. Dibuja el circuito como en Paint: clic y arrastra."}),D.jsx("p",{className:"text-gray-300",children:"2. Ajusta los valores de las resistencias."}),D.jsxs("p",{className:"text-gray-300",children:["3. Haz clic en"," ",D.jsx("span",{className:"font-semibold",children:"“Calcular R_eq e intensidades”"}),"."]})]}),D.jsxs("div",{className:"space-y-2",children:[D.jsx("h5",{className:"font-semibold text-gray-100",children:"Resistencias del circuito"}),u.filter(Y=>Y.type==="resistor").length===0&&D.jsx("p",{className:"text-gray-400",children:"No hay resistencias aún. Selecciona “Resistencia” y dibuja entre dos puntos."}),D.jsx("div",{className:"space-y-1 max-h-40 overflow-y-auto pr-1",children:u.filter(Y=>Y.type==="resistor").map((Y,$)=>D.jsxs("div",{className:"flex items-center gap-2 border border-slate-700 rounded-lg px-2 py-1",children:[D.jsxs("span",{className:"text-gray-300",children:["R",$+1,":"]}),D.jsx("input",{type:"number",value:Y.value,onChange:z=>K(Y.id,Number(z.target.value)||0),className:"w-16 px-1 py-0.5 rounded-md bg-slate-800 border border-slate-600 text-[11px]"}),D.jsx("span",{className:"text-gray-400",children:"Ω"}),D.jsx("button",{onClick:()=>d(z=>z.filter(W=>W.id!==Y.id)),className:"ml-auto px-2 py-0.5 rounded-full border border-red-500/60 text-red-300 hover:bg-red-500/10 text-[10px]",children:"✕"})]},Y.id))})]}),D.jsx("button",{onClick:V,className:"w-full mt-1 px-4 py-1.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs",children:"Calcular R_eq e intensidades"}),D.jsxs("div",{className:"mt-2 space-y-1",children:[D.jsx("h5",{className:"font-semibold text-gray-100",children:"Resultados"}),y?y.ok?D.jsxs(D.Fragment,{children:[D.jsxs("p",{children:[D.jsx("span",{className:"font-semibold",children:"R_eq:"})," ",y.Req.toFixed(2)," Ω"]}),D.jsxs("p",{children:[D.jsx("span",{className:"font-semibold",children:"I_total:"})," ",y.Itotal.toFixed(3)," A"]}),D.jsxs("p",{children:[D.jsx("span",{className:"font-semibold",children:"Tipo de conexión (aprox.):"})," ",y.tipo]}),y.branchCurrents.length>1&&D.jsxs("div",{className:"mt-1",children:[D.jsx("p",{className:"font-semibold text-gray-100",children:"Corrientes por resistencia"}),D.jsx("ul",{className:"list-disc list-inside space-y-0.5",children:y.branchCurrents.map((Y,$)=>D.jsxs("li",{children:["R",$+1,": ",Y.I.toFixed(3)," A"]},Y.id))})]})]}):D.jsx("p",{className:"text-red-400",children:y.message}):D.jsx("p",{className:"text-gray-400",children:"Aún no se ha realizado el cálculo."})]}),D.jsxs("div",{className:"mt-2 text-[11px] text-gray-400 border-t border-slate-700 pt-2",children:[D.jsx("span",{className:"font-semibold text-sky-300",children:"Estado:"})," ",C]})]})]})]})}const i_=899e7;function FE(){const[o,t]=St.useState("0.000001"),[i,s]=St.useState("0.000001"),[l,u]=St.useState("0.1"),[d,h]=St.useState(null),[m,p]=St.useState(""),g=()=>{p("");const S=parseFloat(o),y=parseFloat(i),E=parseFloat(l);if([S,y,E].some(U=>isNaN(U))){p("Ingresa valores numéricos válidos."),h(null);return}if(E<=0){p("La distancia r debe ser mayor que 0."),h(null);return}const C=S*1e-6,b=y*1e-6,_=i_*Math.abs(C*b)/(E*E),I=S*y>0?"Repulsión (cargas del mismo signo)":"Atracción (cargas de signo opuesto)";h({F:_,tipo:I,q1Input:S,q2Input:y,r:E,q1C:C,q2C:b})},x=d&&d.F>0?Math.min(1,Math.log10(1+d.F)/6):.3;return D.jsxs("div",{className:"rounded-2xl border border-slate-700 bg-slate-900/80 p-4 space-y-4",children:[D.jsx("h3",{className:"text-base md:text-lg font-semibold",children:"2.1 Ley de Coulomb – Fuerza eléctrica"}),D.jsxs("p",{className:"text-xs md:text-sm text-gray-300",children:["Calcula la fuerza eléctrica entre dos cargas puntuales:",D.jsx("span",{className:"block mt-1 italic",children:"F = k · |q₁ q₂| / r²"})]}),D.jsxs("div",{className:"grid md:grid-cols-2 gap-4 items-start",children:[D.jsxs("div",{className:"space-y-2 text-xs md:text-sm",children:[D.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[D.jsxs("label",{className:"flex flex-col",children:[D.jsx("span",{children:"q₁ (μC)"}),D.jsx("input",{type:"number",value:o,onChange:S=>t(S.target.value),className:"px-2 py-1 rounded-md bg-slate-800 border border-slate-600 text-xs"})]}),D.jsxs("label",{className:"flex flex-col",children:[D.jsx("span",{children:"q₂ (μC)"}),D.jsx("input",{type:"number",value:i,onChange:S=>s(S.target.value),className:"px-2 py-1 rounded-md bg-slate-800 border border-slate-600 text-xs"})]}),D.jsxs("label",{className:"flex flex-col col-span-2",children:[D.jsx("span",{children:"r (m)"}),D.jsx("input",{type:"number",value:l,onChange:S=>u(S.target.value),className:"px-2 py-1 rounded-md bg-slate-800 border border-slate-600 text-xs"})]})]}),D.jsx("button",{onClick:g,className:"mt-2 w-full md:w-auto px-4 py-1.5 rounded-full bg-primary hover:bg-primary-dark text-xs font-semibold",children:"Calcular F"}),m&&D.jsx("p",{className:"text-xs text-red-400 mt-1",children:m}),d&&D.jsxs("div",{className:"mt-2 text-xs md:text-sm bg-slate-800/70 border border-slate-600 rounded-xl p-2 space-y-1",children:[D.jsxs("p",{children:[D.jsx("span",{className:"font-semibold",children:"Fuerza:"})," ",d.F.toExponential(3)," N"]}),D.jsxs("p",{children:[D.jsx("span",{className:"font-semibold",children:"Tipo:"})," ",d.tipo]}),D.jsxs("p",{className:"text-[11px] text-gray-400",children:["q₁ = ",d.q1Input," μC · q₂ = ",d.q2Input," μC · r ="," ",d.r," m"]})]})]}),D.jsxs("div",{className:"text-[11px] md:text-xs text-gray-400 space-y-1",children:[D.jsxs("p",{children:["• Si q₁ y q₂ tienen el mismo signo ⇒ la fuerza es de"," ",D.jsx("span",{className:"text-amber-300 font-semibold",children:"repulsión"}),"."]}),D.jsxs("p",{children:["• Si tienen signos opuestos ⇒ la fuerza es de"," ",D.jsx("span",{className:"text-sky-300 font-semibold",children:"atracción"}),"."]}),D.jsx("p",{children:"• Al duplicar la distancia r, la fuerza se reduce a la cuarta parte (depende de 1 / r²)."})]})]}),D.jsxs("div",{className:"grid md:grid-cols-2 gap-4 items-stretch",children:[D.jsxs("div",{className:"rounded-xl border border-slate-700 bg-slate-900/80 p-3 flex flex-col",children:[D.jsxs("div",{className:"flex items-center justify-between mb-2",children:[D.jsx("span",{className:"text-[11px] px-2 py-1 rounded-full bg-slate-800 text-gray-300",children:"Visualización 2D"}),d&&D.jsx("span",{className:"text-[11px] text-amber-300 font-semibold",children:d.tipo.startsWith("Repulsión")?"Repulsión":"Atracción"})]}),D.jsxs("div",{className:"flex-1 relative flex items-center justify-center",children:[D.jsxs("div",{className:"absolute left-6 flex flex-col items-center gap-1",children:[D.jsx("div",{className:"h-10 w-10 rounded-full bg-red-500 flex items-center justify-center text-xs font-bold",children:d&&d.q1Input>=0?"+":"−"}),D.jsxs("div",{className:"text-[10px] text-gray-300",children:["q₁ = ",o," μC"]})]}),D.jsxs("div",{className:"absolute right-6 flex flex-col items-center gap-1",children:[D.jsx("div",{className:"h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-xs font-bold",children:d&&d.q2Input>=0?"+":"−"}),D.jsxs("div",{className:"text-[10px] text-gray-300",children:["q₂ = ",i," μC"]})]}),D.jsx("div",{className:"h-0.5 w-32 bg-gradient-to-r from-red-400 via-amber-300 to-blue-400"}),D.jsx("div",{className:"absolute bottom-3 text-[11px] text-gray-300",children:"Representación 2D del vector de fuerza."})]})]}),D.jsxs("div",{className:"rounded-xl border border-slate-700 bg-slate-900/80 p-3 flex flex-col",children:[D.jsxs("div",{className:"flex items-center justify-between mb-2",children:[D.jsx("span",{className:"text-[11px] px-2 py-1 rounded-full bg-slate-800 text-gray-300",children:"Simulación 3D"}),d&&D.jsxs("span",{className:"text-[10px] text-gray-400",children:["Intensidad ~ ",x.toFixed(2)]})]}),D.jsx("div",{className:"flex-1",children:D.jsx(LE,{minHeight:260,intensity:x})})]})]})]})}function BE(){const[o,t]=St.useState("0.000001"),[i,s]=St.useState("0.1"),[l,u]=St.useState(null),[d,h]=St.useState(""),m=()=>{h("");const g=parseFloat(o),x=parseFloat(i);if([g,x].some(C=>isNaN(C))){h("Ingresa valores numéricos válidos."),u(null);return}if(x<=0){h("La distancia r debe ser mayor que 0."),u(null);return}const S=g*1e-6,y=i_*Math.abs(S)/(x*x),E=g>0?"Sale radialmente hacia afuera (carga positiva)":"Entra radialmente hacia la carga (carga negativa)";u({E:y,qInput:g,qC:S,r:x,direccion:E})},p=l&&l.E>0?Math.min(1,Math.log10(1+l.E)/10):.3;return D.jsxs("div",{className:"rounded-2xl border border-slate-700 bg-slate-900/80 p-4 space-y-4",children:[D.jsx("h3",{className:"text-base md:text-lg font-semibold",children:"2.2 Campo eléctrico de una carga puntual"}),D.jsxs("p",{className:"text-xs md:text-sm text-gray-300",children:["El campo eléctrico generado por una carga puntual se define como:",D.jsx("span",{className:"block mt-1 italic",children:"E = k · |q| / r²"}),"donde ",D.jsx("span",{className:"font-semibold",children:"E"})," se mide en N/C,",D.jsx("span",{className:"font-semibold",children:" q"})," es la carga y",D.jsx("span",{className:"font-semibold",children:" r"})," la distancia al punto de estudio."]}),D.jsxs("div",{className:"grid md:grid-cols-2 gap-4 items-start",children:[D.jsxs("div",{className:"space-y-2 text-xs md:text-sm",children:[D.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[D.jsxs("label",{className:"flex flex-col col-span-2",children:[D.jsx("span",{children:"q (μC)"}),D.jsx("input",{type:"number",value:o,onChange:g=>t(g.target.value),className:"px-2 py-1 rounded-md bg-slate-800 border border-slate-600 text-xs"})]}),D.jsxs("label",{className:"flex flex-col col-span-2",children:[D.jsx("span",{children:"r (m)"}),D.jsx("input",{type:"number",value:i,onChange:g=>s(g.target.value),className:"px-2 py-1 rounded-md bg-slate-800 border border-slate-600 text-xs"})]})]}),D.jsx("button",{onClick:m,className:"mt-2 w-full md:w-auto px-4 py-1.5 rounded-full bg-primary hover:bg-primary-dark text-xs font-semibold",children:"Calcular E"}),d&&D.jsx("p",{className:"text-xs text-red-400 mt-1",children:d}),l&&D.jsxs("div",{className:"mt-2 text-xs md:text-sm bg-slate-800/70 border border-slate-600 rounded-xl p-2 space-y-1",children:[D.jsxs("p",{children:[D.jsx("span",{className:"font-semibold",children:"Campo eléctrico:"})," ",l.E.toExponential(3)," N/C"]}),D.jsxs("p",{children:[D.jsx("span",{className:"font-semibold",children:"Dirección:"})," ",l.direccion]}),D.jsxs("p",{className:"text-[11px] text-gray-400",children:["q = ",l.qInput," μC · r = ",l.r," m"]})]})]}),D.jsxs("div",{className:"text-[11px] md:text-xs text-gray-400 space-y-1",children:[D.jsx("p",{children:"• El campo eléctrico es una magnitud vectorial: tiene módulo, dirección y sentido."}),D.jsx("p",{children:"• Cerca de la carga, el campo es más intenso; al aumentar la distancia r, el valor de E disminuye con 1 / r²."}),D.jsx("p",{children:"• Convencionalmente se define respecto a una carga de prueba positiva."})]})]}),D.jsxs("div",{className:"grid md:grid-cols-2 gap-4 items-stretch",children:[D.jsxs("div",{className:"rounded-xl border border-slate-700 bg-slate-900/80 p-3 flex flex-col",children:[D.jsxs("div",{className:"flex items-center justify-between mb-2",children:[D.jsx("span",{className:"text-[11px] px-2 py-1 rounded-full bg-slate-800 text-gray-300",children:"Visualización 2D"}),l&&D.jsx("span",{className:"text-[11px] text-amber-300 font-semibold",children:l.qInput>=0?"Carga positiva":"Carga negativa"})]}),D.jsxs("div",{className:"flex-1 relative flex items-center justify-center",children:[D.jsxs("div",{className:"flex flex-col items-center gap-1",children:[D.jsx("div",{className:`h-12 w-12 rounded-full flex items-center justify-center text-sm font-bold ${l&&l.qInput<0?"bg-blue-500":"bg-red-500"}`,children:l&&l.qInput<0?"−":"+"}),D.jsxs("div",{className:"text-[10px] text-gray-300",children:["q = ",o," μC"]})]}),D.jsx("div",{className:"absolute inset-0 flex items-center justify-center pointer-events-none",children:D.jsx("div",{className:"relative h-24 w-24",children:[...Array(8)].map((g,x)=>{const S=x/8*Math.PI*2,y=l&&l.qInput<0?-1:1;return D.jsx("div",{className:"absolute h-[2px] w-8 bg-gradient-to-r from-amber-300 to-amber-500 origin-left",style:{left:"36px",top:"36px",transform:`rotate(${S*180/Math.PI+(y>0?0:180)}deg)`,opacity:.8}},x)})})}),D.jsx("div",{className:"absolute bottom-3 text-[11px] text-gray-300",children:"Líneas de campo eléctrico de una carga puntual."})]})]}),D.jsxs("div",{className:"rounded-xl border border-slate-700 bg-slate-900/80 p-3 flex flex-col",children:[D.jsxs("div",{className:"flex items-center justify-between mb-2",children:[D.jsx("span",{className:"text-[11px] px-2 py-1 rounded-full bg-slate-800 text-gray-300",children:"Simulación 3D"}),l&&D.jsxs("span",{className:"text-[10px] text-gray-400",children:["Intensidad ~ ",p.toFixed(2)]})]}),D.jsx("div",{className:"flex-1",children:D.jsx(OE,{minHeight:260,intensity:p,isNegative:l&&l.qInput<0})})]})]})]})}function HE(){const[o,t]=St.useState(!1),[i,s]=St.useState("5"),[l,u]=St.useState("10"),[d,h]=St.useState(null),[m,p]=St.useState(""),g=()=>{p("");const E=parseFloat(i),C=parseFloat(l);if([E,C].some(U=>isNaN(U))){p("Ingresa valores numéricos válidos."),h(null);return}if(C<=0){p("La resistencia R debe ser mayor que 0."),h(null);return}const b=E/C,_=E*b;let I;b<.2?I="Corriente baja":b<1?I="Corriente moderada":I="Corriente alta",h({V:E,R:C,I:b,P:_,nivel:I})};if(o)return D.jsx(IE,{onBack:()=>t(!1)});const S=25+(d&&d.I>=0?Math.min(1,Math.log10(1+Math.abs(d.I))/2):.2)*65,y=d&&d.I>=1?"bg-red-500":d&&d.I>=.2?"bg-amber-400":"bg-sky-400";return D.jsxs("div",{className:"rounded-2xl border border-slate-700 bg-slate-900/80 p-4 space-y-4",children:[D.jsx("h3",{className:"text-base md:text-lg font-semibold",children:"2.3 Corriente y Ley de Ohm"}),D.jsxs("p",{className:"text-xs md:text-sm text-gray-300",children:["La Ley de Ohm relaciona el voltaje, la corriente y la resistencia:",D.jsx("span",{className:"block mt-1 italic",children:"V = I · R   ⇔   I = V / R"}),"donde ",D.jsx("span",{className:"font-semibold",children:"V"})," está en voltios (V),",D.jsx("span",{className:"font-semibold",children:" I"})," en amperios (A) y",D.jsx("span",{className:"font-semibold",children:" R"})," en ohmios (Ω)."]}),D.jsxs("div",{className:"grid md:grid-cols-2 gap-4 items-start",children:[D.jsxs("div",{className:"space-y-2 text-xs md:text-sm",children:[D.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[D.jsxs("label",{className:"flex flex-col col-span-2",children:[D.jsx("span",{children:"Voltaje V (voltios)"}),D.jsx("input",{type:"number",value:i,onChange:E=>s(E.target.value),className:"px-2 py-1 rounded-md bg-slate-800 border border-slate-600 text-xs"})]}),D.jsxs("label",{className:"flex flex-col col-span-2",children:[D.jsx("span",{children:"Resistencia R (Ω)"}),D.jsx("input",{type:"number",value:l,onChange:E=>u(E.target.value),className:"px-2 py-1 rounded-md bg-slate-800 border border-slate-600 text-xs"})]})]}),D.jsx("button",{onClick:g,className:"mt-2 w-full md:w-auto px-4 py-1.5 rounded-full bg-primary hover:bg-primary-dark text-xs font-semibold",children:"Calcular"}),m&&D.jsx("p",{className:"text-xs text-red-400 mt-1",children:m}),d&&D.jsxs("div",{className:"mt-2 text-xs md:text-sm bg-slate-800/70 border border-slate-600 rounded-xl p-2 space-y-1",children:[D.jsxs("p",{children:[D.jsx("span",{className:"font-semibold",children:"Corriente I:"})," ",d.I.toFixed(3)," A"]}),D.jsxs("p",{children:[D.jsx("span",{className:"font-semibold",children:"Potencia P:"})," ",d.P.toFixed(2)," W"]}),D.jsxs("p",{children:[D.jsx("span",{className:"font-semibold",children:"Nivel:"})," ",d.nivel]}),D.jsxs("p",{className:"text-[11px] text-gray-400",children:["V = ",d.V," V · R = ",d.R," Ω"]})]})]}),D.jsxs("div",{className:"text-[11px] md:text-xs text-gray-400 space-y-1",children:[D.jsx("p",{children:"• Si aumentas el voltaje V manteniendo R constante, la corriente I aumenta proporcionalmente."}),D.jsx("p",{children:"• Si aumentas la resistencia R manteniendo V constante, la corriente disminuye."}),D.jsx("p",{children:"• La potencia disipada en la resistencia es P = V · I = I² · R."})]})]}),D.jsxs("div",{className:"rounded-xl border border-slate-700 bg-slate-900/80 p-3 flex flex-col gap-3",children:[D.jsxs("div",{className:"flex items-center justify-between",children:[D.jsx("span",{className:"text-[11px] px-2 py-1 rounded-full bg-slate-800 text-gray-300",children:"Visualización 2D"}),d&&D.jsx("span",{className:"text-[11px] text-amber-300 font-semibold",children:d.nivel})]}),D.jsxs("div",{className:"flex flex-col gap-3 text-[11px] md:text-xs",children:[D.jsxs("div",{className:"relative w-full h-24 flex items-center justify-center",children:[D.jsxs("div",{className:"absolute left-6 flex flex-col items-center gap-1",children:[D.jsxs("div",{className:"h-10 w-6 rounded-md bg-slate-800 border border-slate-500 flex flex-col justify-center",children:[D.jsx("div",{className:"h-1.5 w-4 bg-slate-200 mx-auto mb-1"}),D.jsx("div",{className:"h-0.5 w-3 bg-slate-500 mx-auto"})]}),D.jsxs("span",{className:"text-[10px] text-gray-300",children:["Fuente (",i," V)"]})]}),D.jsxs("div",{className:"absolute right-6 flex flex-col items-center gap-1",children:[D.jsx("div",{className:"h-4 w-10 bg-slate-300 rounded-sm"}),D.jsxs("span",{className:"text-[10px] text-gray-300",children:["R = ",l," Ω"]})]}),D.jsx("div",{className:"absolute top-6 left-10 right-10 h-0.5 bg-slate-600"}),D.jsx("div",{className:"absolute bottom-6 left-10 right-10 h-0.5 bg-slate-600"}),D.jsx("div",{className:"absolute inset-x-16 top-[22px] h-2 rounded-full bg-slate-800 overflow-hidden",children:D.jsx("div",{className:`h-full ${y} transition-all duration-500`,style:{width:`${S}%`}})}),D.jsx("div",{className:"absolute top-[19px] right-[52px] w-0 h-0 border-t-4 border-b-4 border-l-8 border-t-transparent border-b-transparent border-l-slate-100"})]}),D.jsx("p",{className:"text-gray-300",children:"La anchura y el color de la barra representan la intensidad de la corriente: valores pequeños en azul, moderados en amarillo y altos en rojo."})]})]}),D.jsxs("div",{className:"pt-2 border-t border-slate-700 flex flex-col md:flex-row md:items-center md:justify-between gap-2",children:[D.jsx("p",{className:"text-[11px] md:text-xs text-gray-400 max-w-md",children:"¿Quieres diseñar tu propio circuito con cables, resistencias y una fuente y que el sistema detecte si es serie o paralelo?"}),D.jsx("button",{onClick:()=>t(!0),className:"text-xs px-4 py-1.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold shadow-sm",children:"Abrir editor de circuitos de corriente continua"})]})]})}function VE({is3D:o}){const[t,i]=St.useState("coulomb"),s=[{id:"coulomb",label:"2.1 Ley de Coulomb"},{id:"campo",label:"2.2 Campo eléctrico"},{id:"ohm",label:"2.3 Corriente y Ley de Ohm"}],l=s.find(u=>u.id===t)?.label??"Subtema";return D.jsxs("section",{id:"electricidad",className:"max-w-6xl mx-auto px-4 py-10 md:py-12 space-y-5",children:[D.jsxs("header",{className:"space-y-1",children:[D.jsx("h2",{className:"text-2xl md:text-3xl font-bold",children:"⚡ Electricidad"}),D.jsx("p",{className:"text-xs md:text-sm text-gray-300",children:"Competencia: el estudiante resuelve problemas identificando tipos de carga eléctrica, aplicando la Ley de Ohm, resolviendo circuitos de corriente continua y prediciendo el comportamiento de cargas en campos eléctricos."}),D.jsxs("p",{className:"text-[11px] text-gray-400",children:["Subtema actual: ",D.jsx("span",{className:"font-semibold text-sky-400",children:l})]})]}),D.jsx("div",{className:"rounded-2xl border border-slate-700 bg-slate-900/80 p-3",children:D.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-2",children:s.map(u=>D.jsx("button",{onClick:()=>i(u.id),className:`text-[11px] md:text-xs px-3 py-2 rounded-full font-medium transition
                ${t===u.id?"bg-primary text-white shadow-sm":"bg-slate-800/80 text-slate-200 hover:bg-slate-700"}`,children:u.label},u.id))})}),t==="coulomb"&&D.jsx(FE,{is3D:o}),t==="campo"&&D.jsx(BE,{is3D:o}),t==="ohm"&&D.jsx(HE,{})]})}function GE(){const[o,t]=St.useState("inicio"),[i,s]=St.useState(!0);St.useEffect(()=>{const u=localStorage.getItem("f2_darkMode");u!==null&&s(u==="true")},[]),St.useEffect(()=>{const u=document.documentElement;i?u.classList.add("dark"):u.classList.remove("dark"),localStorage.setItem("f2_darkMode",i?"true":"false")},[i]);const l=()=>{switch(o){case"electricidad":return D.jsx(VE,{});default:return D.jsx(bS,{onChangeSection:t})}};return D.jsxs("div",{className:"min-h-screen bg-gray-50 text-gray-900 dark:bg-slate-950 dark:text-gray-100 transition-colors duration-300",children:[D.jsx(yS,{currentSection:o,onChangeSection:t,darkMode:i,toggleDarkMode:()=>s(u=>!u)}),D.jsx("main",{className:"pb-10",children:l()}),D.jsxs("footer",{className:"border-t border-slate-200 dark:border-slate-800 py-4 text-center text-[11px] text-gray-500 dark:text-gray-400",children:["Electricidad · ",new Date().getFullYear()]})]})}vS.createRoot(document.getElementById("root")).render(D.jsx(fS.StrictMode,{children:D.jsx(GE,{})}));
